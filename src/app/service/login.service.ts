import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isloggedin:boolean=false;

  constructor(private http:HttpClient) { }

  authAppBeBaseUrl = "http://localhost:9001/app-v1";
 
  loginCheck(loginData:any){
    return this.http.post(this.authAppBeBaseUrl+"/login",loginData);
  }

  public logout(){
    this.isloggedin=false
  }

}
