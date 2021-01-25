import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Compte } from 'src/app/models/compte.model';
import { MontantDialogComponent } from 'src/app/montant-dialog/montant-dialog.component';
import { BanqueService } from 'src/app/services/banque.service';
import { UiService } from '../../shared/ui.service';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit, OnDestroy {

  displayedColumns=['nom', 'date', 'solde', 'actions'];
  dataSource = new MatTableDataSource<Compte>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private compteSubscription: Subscription = new Subscription();
  private clotureSubscription: Subscription = new Subscription();
  private retraitSubscription: Subscription = new Subscription();
  private depotSubscription: Subscription = new Subscription();
  private okButtonSubscription: Subscription = new Subscription();

  constructor(
    private banqueService: BanqueService,
    private uiService: UiService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.compteSubscription=this.banqueService.getComptes().subscribe(comptes => {
      this.dataSource.data = comptes;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(rib: number, operation: 'retrait' | 'depot'): void {
    this.okButtonSubscription=this.uiService.okButtonDialog.subscribe(
      montant => {
        switch (operation) {
          case 'retrait':
            this.retrait(rib, montant);
            break;
            case 'depot':
              this.depot(rib, montant);
              break;
          default:
            break;
        }
      }
    )
    const dialogRef = this.dialog.open(MontantDialogComponent, {
      width: '250px',
      data: 0
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.okButtonSubscription.unsubscribe();
    });
  }

  doFilter(filterEvent: KeyboardEvent): void{
    this.dataSource.filter = (filterEvent.target as HTMLTextAreaElement).value.trim().toLowerCase();
  }

  cloturer(compte: Compte) {
    this.clotureSubscription=this.banqueService.clotureCompte(compte.rib).subscribe(
      () => {
        compte.isActive=false;
      },
      error => {
        this.uiService.showSnackBar(
          'Echec de l\'operation de cloture',
          null,
          {duration: 4000,verticalPosition:'bottom'}
        );
        console.log(error.message);
      }
    );
  }

  private retrait(rib: number, montant: number) {
    this.retraitSubscription=this.banqueService.retraitArgent(montant, rib).subscribe(
      data => {
        if(data) {
          this.uiService.showSnackBar(
            `compte ${rib} retrait de ${montant} effectuer`,
            null,
            {duration: 4000,verticalPosition:'bottom'}
          );
        } else {
          alert('Echec du retrait');
        }
      },
      error => {
        this.uiService.showSnackBar(
          'Echec de l\'operation de retrait',
          null,
          {duration: 4000,verticalPosition:'bottom'}
        );
        console.log(error.message);
      }
    );
  }

  private depot(rib: number, montant: number) {
    this.depotSubscription=this.banqueService.depotArgent(rib, montant).subscribe(
      () => {
        this.uiService.showSnackBar(
          `compte ${rib} depot de ${montant} effectuer`,
          null,
          {duration: 4000,verticalPosition:'bottom'}
        );
      },
      error => {
        this.uiService.showSnackBar(
          'Echec de l\'operation de dépot',
          null,
          {duration: 4000,verticalPosition:'bottom'}
        );
        console.log(error.message);
      }
    );
  }

  ngOnDestroy(): void {
    this.compteSubscription.unsubscribe();
    this.clotureSubscription.unsubscribe();
    this.retraitSubscription.unsubscribe();
    this.depotSubscription.unsubscribe();
  }

}

