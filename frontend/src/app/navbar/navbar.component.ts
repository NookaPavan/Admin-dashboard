import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" (click)="toDashboard()">DashBoard</a>
        </div>
        <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav pull-right">
            <li class=""><a (click)="toAdd()">Add</a></li>
            <li class=""><a (click)="toView()">View</a></li>
            <li class=" active dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown">Welcome {{service.name}}
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                <li><a (click)="service.logout()">Logout</a></li>
                </ul>
            </li>
        </ul>
        </div><!--/.nav-collapse -->
    </div>
  </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private service:LoginServiceService,private router:Router) { }

  ngOnInit() {
  }

  toAdd(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/add']));
  }
  toView(){
    this.router.navigate(['/view']);
  }

  toDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
