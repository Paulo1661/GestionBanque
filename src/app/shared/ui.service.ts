import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subject } from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  loadingStateChange = new Subject<boolean>();
  okButtonDialog = new Subject<number>();

  constructor( private snackbar: MatSnackBar) {}

  showSnackBar(message: any, action: any, config: any) {
    this.snackbar.open(message, action, config);
  }

}
