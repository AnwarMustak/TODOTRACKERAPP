import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArchiveTaskService {

  
  allTaskUrl:string="http://localhost:9001/todo-app/get-all-archived"
  movetoarUrl:string="http://localhost:9001/todo-app/add-archived-task"
  unarchiveUrl:string="http://localhost:9001/todo-app/Unarchived"
  constructor(private http: HttpClient) { }

  public getAllarTask() {

    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.get(this.allTaskUrl,requestOptions);
  }
  moveToar(todoId:any){
    console.log(todoId)
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.post(this.movetoarUrl,todoId,requestOptions);
  }
  moveToviewUNA(todoId:any){
    console.log(todoId)
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.post(this.unarchiveUrl,todoId,requestOptions);
  }
}
