import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Compte } from 'src/app/models/compte.model';
import { BanqueService } from 'src/app/services/banque.service';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {

  displayedColumns=['nom', 'date', 'solde', 'actions'];
  dataSource = new MatTableDataSource<Compte>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private banqueService: BanqueService) { }

  ngOnInit(): void {
    this.dataSource.data=this.banqueService.getComptes();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: String): void{
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cloturer(compte: Compte) {

  }

  retrait(compte: Compte) {

  }

  depot(compte: Compte) {

  }

}
