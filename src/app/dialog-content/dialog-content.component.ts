import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.style.css'],
})

export class DialogContentComponent{

  constructor(private dialog:MatDialogRef<DialogContentComponent>){}

  cancelar(){
      this.dialog.close(false);
  }
  excluir(){
    this.dialog.close(true);
  }
}
