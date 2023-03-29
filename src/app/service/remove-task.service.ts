import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskDetails } from '../task-details';
import { R } from '@angular/cdk/keycodes';

@Injectable({
  providedIn: 'root'
})
export class RemoveTaskService {

  deleteTaskUrl:string="http://localhost:9001/todo-app/delete-task/";
  deleteTaskInArUrl:string="http://localhost:9001/todo-app/delete-archived-task/";
  deleteTaskInComUrl:string="http://localhost:9001/todo-app/delete-completed-task/";
  
  constructor(private http:HttpClient) { }

   deleteTask(todoid:number) {
    console.log(todoid);
    let httpHeaders = new HttpHeaders({
      'authorization' : 'Bearer_' + localStorage.getItem('jwt')
      
    });
    let requestOptions={headers : httpHeaders}
    console.log(requestOptions)
    return this.http.delete(this.deleteTaskUrl+todoid,requestOptions);
  }
  deleteTaskInAr(todoid:number) {
    console.log(todoid);
    let httpHeaders = new HttpHeaders({
      'authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions={headers : httpHeaders}
    console.log(requestOptions)
    return this.http.delete(this.deleteTaskInArUrl+todoid,requestOptions);
  }
  deleteTaskInCom(todoid:number) {
    console.log(todoid);
    let httpHeaders = new HttpHeaders({
      'authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions={headers : httpHeaders}
    console.log(requestOptions)
    return this.http.delete(this.deleteTaskInComUrl+todoid,requestOptions);
  }

}
