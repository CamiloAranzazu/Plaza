import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotiService {

  constructor(private _snackBar: MatSnackBar) {}
    
  openSnackBar(message: string, action: string, time: number) {
    this._snackBar.open(message, action, {
      duration: time,
      verticalPosition: 'top',
      panelClass: ['success-snack-bar']
    });
  }

}
