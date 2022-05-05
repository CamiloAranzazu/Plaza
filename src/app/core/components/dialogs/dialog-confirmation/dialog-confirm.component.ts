import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  message: string;
  confirm: boolean;
  btnConfirm?: boolean;
  btnCancel?: boolean;
  textBtnCancel: string;
  textBtnConfirm: string;
  question?: string 
}

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {
  btnConfirm: boolean = true;
  btnCancel: boolean = true;
  constructor(
        public dialogRef: MatDialogRef<DialogConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
      if(data?.btnConfirm === false) {
        this.btnConfirm = data.btnConfirm;
      }
      if(data?.btnCancel === false) {
        this.btnCancel = data.btnCancel;
      }
     }

  onNoClick(): void {
    this.dialogRef.close(this.data.confirm = false);
  }

  ngOnInit() { }

}
