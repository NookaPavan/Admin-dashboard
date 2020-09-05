import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms'
import { LoginServiceService } from '../service/login-service.service'
import { Router }  from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  template: `
  <div class="login-page">
    <div class="form">
    <form class="login-form" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <input formControlName="username" type="text" placeholder="Username" required/>
        <input formControlName="password" type="password" placeholder="Password" required/>
        <button>login</button>
        <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
    </div>
  </div>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= this.fb.group({
    username: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor( private fb: FormBuilder, private loginService:LoginServiceService, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.login(this.loginForm.value).subscribe(res => {
      var authResponse = JSON.parse(JSON.stringify(res));
      console.log(authResponse);
      if(authResponse.success){
        this.loginService.authenticate(res);
      }else{
        this._snackBar.open(authResponse.message,"close", {
          duration: 2000,
        });
        console.log(authResponse);
      } 
    });
  }

}
