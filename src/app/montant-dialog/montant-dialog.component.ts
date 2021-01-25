import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UiService } from '../shared/ui.service';

@Component({
  selector: 'app-montant-dialog',
  templateUrl: './montant-dialog.component.html',
  styleUrls: ['./montant-dialog.component.css']
})
export class MontantDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MontantDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private uiService: UiService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(data: number): void {
    this.uiService.okButtonDialog.next(data);
  }

}
