import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/models/client.model';
import { BanqueService } from '../../services/banque.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  displayedColumns=['cin', 'nom', 'adresse', 'actions'];
  dataSource = new MatTableDataSource<Client>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private banqueService: BanqueService) { }

  ngOnInit(): void {
    this.dataSource.data=this.banqueService.getClients();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: String): void{
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ouvrirCompte(client: Client) {

  }

  clientSoldes(client: Client) {

  }
}
