import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  API_URL='http://multi.assealcloud.net:5055';
  httpOptions = { 
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  login(userLogin: any){
    return this.http.post<any>(this.API_URL+"/users/login",userLogin);
  }
  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  getToken(){
    return localStorage.getItem('token')|| '';
  }
  removeToken(){
    return localStorage.removeItem('token');
  }
 
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/auth/login"]);
  }

}
