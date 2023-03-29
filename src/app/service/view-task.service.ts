import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskDetails } from '../task-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewTaskService {

  allTaskUrl:string="http://localhost:9001/todo-app/get-all-task"
  getOneTaskUrl:string="http://localhost:9001/todo-app/get-task"

  constructor(private http: HttpClient) { }

  public getAllTask() {

    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.get(this.allTaskUrl,requestOptions);
  }


  public getOneTask(todoid:number) {

    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer_' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers:httpHeaders}
    return this.http.get(this.getOneTaskUrl+todoid,requestOptions);
  }
}
