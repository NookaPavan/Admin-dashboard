import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'
import {LoginServiceService as dbservice} from '../service/login-service.service'
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialog} from './confirmation-dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private dbservice:dbservice,private fb: FormBuilder,public dialog: MatDialog) { }

  details= this.fb.group({
    uni_name:['',Validators.required],
    reg_date:['None'],
    exp_date:['None'],
    img_url:['None'],
    students:[0],
    email:['None'],
    web_url:['None'],
    contact:[0]
  });

  ngOnInit() {
  }
  onSubmit(){
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Are you sure want to Submit ?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log("Confirmed");
        this.dbservice.adduniversity(this.details.value);
      }
    });
  }
}