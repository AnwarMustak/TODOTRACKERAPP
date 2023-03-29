import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompletedTaskService {

  allTaskUrl:string="http://localhost:9001/todo-app/get-all-completed"
  movetoComUrl:string="http://localhost:9001/todo-app/add-completed-task"
  
  constructor(private http: HttpClient) { }

  public getAllComTask() {

    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.get(this.allTaskUrl,requestOptions);
  }
  moveToCom(todoId:any){
    console.log(todoId)
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.post(this.movetoComUrl,todoId,requestOptions);
  }
  
}
