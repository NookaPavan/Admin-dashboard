import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import {LoginServiceService as loginService} from './login-service.service'

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
    let authService= this.injector.get(loginService);
    let tokenizedReq= req.clone({
      setHeader:{
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }

  
}
