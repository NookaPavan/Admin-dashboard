import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'confirmation-dialog',
  template: `
    <mat-dialog-content>
        <p>
            {{message}}
        </p>
    </mat-dialog-content>
    <mat-dialog-actions align="center">
        <button mat-raised-button color="primary" (click)="onConfirmClick()" tabindex="1">{{confirmButtonText}}</button>
        <button mat-raised-button color="warn" (click)="onClose()" tabindex="-1">{{cancelButtonText}}</button>
    </mat-dialog-actions>`,
})
export class ConfirmationDialog {
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ConfirmationDialog>) {
      if(data){
    this.message = data.message || this.message;
    if (data.buttonText) {
      this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
      this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
    }
      }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
   onClose(){
    this.dialogRef.close();
   }
}