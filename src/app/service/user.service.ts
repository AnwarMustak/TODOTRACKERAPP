import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  getuserUrl:string="http://localhost:9001/todo-app/get-user"
  updateProfileUrl:string="http://localhost:9001/todo-app/update-profile-image"

  constructor(private http: HttpClient) { }
  

  private refresh = new Subject<void>();

  getRefresh(){
    return this.refresh;
  }
  
  public getUser() {
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.get(this.getuserUrl,requestOptions).pipe(
      tap(()=>{
        this.refresh.next();
      })
    );
  }

  updateProfileImage(profileImage:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.post(this.updateProfileUrl,profileImage,requestOptions).pipe(
      tap(()=>{
        this.refresh.next();
      })
    );
  }
  
}
