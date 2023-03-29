import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteTaskService {

  constructor(private http:HttpClient) { }
  todoAppBeBaseUrl = "http://localhost:8081/todo-app";

  deleteTask(todoid:String)
  {
    let httpHeaders = new HttpHeaders({
      'authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.delete(this.todoAppBeBaseUrl+"/delete-task/"+todoid,requestOptions)

  }
}
