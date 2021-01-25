import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { MontantDialogComponent } from 'src/app/montant-dialog/montant-dialog.component';
import { UiService } from 'src/app/shared/ui.service';
import { BanqueService } from '../../services/banque.service';
import { MatDialog } from '@angular/material/dialog';
import { shareReplay } from 'rxjs/operators'
import { SoldePosterComponent } from '../solde-poster/solde-poster.component';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit, OnDestroy {

  displayedColumns=['cin', 'nom', 'adresse', 'actions'];
  dataSource = new MatTableDataSource<Client>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private clientSubscription: Subscription = new Subscription();
  private okButtonSubscription: Subscription = new Subscription();
  private ouvertureCompteSubscription: Subscription = new Subscription();
  private getSoldeSubscription: Subscription = new Subscription();

  constructor(
    private banqueService: BanqueService,
    private uiService: UiService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.clientSubscription=this.banqueService.getClients().pipe(shareReplay()).subscribe(
      clients => {
        this.dataSource.data = clients;
      }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private openSoldeDialog(solde: number) {
    this.dialog.open(SoldePosterComponent,{
      width: '250px',
      data: solde
    });
  }

  openDialog(cin: string): void {
    this.okButtonSubscription=this.uiService.okButtonDialog.subscribe(
      montant => {
        this.ouvrirCompte(cin, montant);
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

  private ouvrirCompte(cin: string, montant: number) {
    this.ouvertureCompteSubscription=this.banqueService.ouvertureCompte(cin, montant).subscribe(
      rib => {
        this.uiService.showSnackBar(
          `compte ${rib} créé pour le client ${cin}`,
          null,
          {duration: 4000,verticalPosition:'bottom'}
        );
      },
      error => {
        this.uiService.showSnackBar(
          'Echec de la création du compte banquaire',
          null,
          {duration: 4000,verticalPosition:'bottom'}
        );
        console.log(error.message);
      }
    );
  }

  clientSoldes(rib: number) {
    this.getSoldeSubscription=this.banqueService.getSolde(rib).pipe(shareReplay()).subscribe(
      solde => {
        this.openSoldeDialog(solde);
      },
      error => {
        this.uiService.showSnackBar(
          'Echec, veuillez reessayer',
          null,
          {duration: 3000,verticalPosition:'bottom'}
        );
        console.log(error.message);
      }
    );
  }

  ngOnDestroy(): void {
    this.clientSubscription.unsubscribe();
    this.ouvertureCompteSubscription.unsubscribe();
    this.getSoldeSubscription.unsubscribe();
  }

}
