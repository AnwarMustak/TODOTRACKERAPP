import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskDetails } from '../task-details';

@Injectable({
  providedIn: 'root'
})
export class ModifyTaskService {

  modifyTaskUrl:string="http://localhost:9001/todo-app/update"

  constructor(private http:HttpClient) { }

  modifyTask(taskD:any) {
    console.log(taskD);
    let httpHeaders = new HttpHeaders({
      'authorization' : 'Bearer_' + localStorage.getItem('jwt')
      
    });
    let requestOptions={headers : httpHeaders}
    console.log(requestOptions)
    return this.http.put(this.modifyTaskUrl,taskD,requestOptions);
  }


}
