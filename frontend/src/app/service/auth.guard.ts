import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServiceService as loginService } from './login-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService:loginService,private router:Router){}
  canActivate():boolean{
    if (this._authService.isAuthenticated()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
    
  
}
