import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  

  constructor(private http:HttpClient) { }
  todoAppBeBaseUrl = "http://localhost:9001/todo-app";

 

  addTask(taskD: any) {
    let httpHeaders = new HttpHeaders({
      'authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.post(this.todoAppBeBaseUrl+"/add-task",taskD,requestOptions);
  }
}
