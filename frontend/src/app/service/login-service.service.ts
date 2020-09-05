import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class LoginServiceService {

  _url="http://localhost:8000";
  NAME_TOKEN="username";
  TOKEN_KEY="token";
  private memSubject = new Subject();
  lists = this.memSubject.asObservable();

  constructor(private http:HttpClient,private router: Router) { }

  get name() {
    return localStorage.getItem(this.NAME_TOKEN);
  }

  getToken(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  tokenHeader() {
    var header = new HttpHeaders();
    header.append('Authorization','Bearer ' + localStorage.getItem(this.TOKEN_KEY));
    return header
  }

  logout(){
    localStorage.removeItem(this.NAME_TOKEN);
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
    console.log("Logout Successfull");
  }

  getUser() {
    return this.http.get(this._url + '/users/me', {
      headers: {
        'Authorization': 'Bearer ' + this.getToken()
      }}).pipe(map((res:Response) =>res.json));
  }

  login(userData){
    console.log("LoginCalled");
    return this.http.post(this._url+"/login",userData);
  }

  authenticate(res) {
    var authResponse = JSON.parse(JSON.stringify(res));
    if (!authResponse.token)
        return authResponse;

    localStorage.setItem(this.TOKEN_KEY, authResponse.token)
    localStorage.setItem(this.NAME_TOKEN, authResponse.username)
    this.router.navigate(['/dashboard']);
    return authResponse;
  }

  getuniversities(){
    this.http.get(this._url+"/universities").subscribe(res => {
      this.memSubject.next(JSON.parse(JSON.stringify(res)));
    })
  }
  deleteuniversity(id){
    this.http.delete(this._url+"/universities/"+id).subscribe((res)=>{
      this.getuniversities();
    });
  }
  updateuniversity(id,university){
    return this.http.post(this._url+"/universities/"+id,university);
  }
  adduniversity(university){
    this.http.post(this._url+"/universities/add",university).subscribe((res)=>{
      this.router.navigate(['/view']);
    });
  }
}
