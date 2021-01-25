import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-solde-poster',
  templateUrl: './solde-poster.component.html',
  styleUrls: ['./solde-poster.component.css']
})
export class SoldePosterComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public solde: number) { }

  ngOnInit(): void {
  }

}
