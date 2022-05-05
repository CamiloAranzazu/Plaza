import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../components/dialogs/dialog-confirmation/dialog-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private dialog: MatDialog) {}


  //Devuelve true si confirma de lo contrario es false
  openDialogConfirm(message: string, btnConfirm?: boolean, btnCancel?: boolean, textBtnCancel?: string, textBtnConfirm?: string, question?: string) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '300px',
      data: {message: message, confirm: false, btnConfirm, btnCancel, textBtnCancel, textBtnConfirm, question},
      disableClose: true
    });
    return dialogRef;
  }




}
