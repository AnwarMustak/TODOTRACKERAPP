import { Component } from '@angular/core';
import { TaskDetails } from '../task-details';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewTaskService } from '../service/view-task.service';
import {MatMenuModule} from '@angular/material/menu';
import { RemoveTaskService } from '../service/remove-task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskList } from '../tasklist';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ModifyTaskComponent } from '../modify-task/modify-task.component';
import { ArchiveTaskService } from '../service/archive-task.service';
import { CompletedTaskService } from '../service/completed-task.service';

export interface DialogData {
  task:any
}



@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {

  message:string="Deleted the task"
  success:string="Ok"
  tasks!:any ;
  isHidden = false;
  checked = false;
  tasklists: TaskList[] = [];


  constructor(private arService: ArchiveTaskService,private comService:CompletedTaskService ,private viewTask: ViewTaskService,private dialog:MatDialog,private deleteTaskService:RemoveTaskService, private _snackBar: MatSnackBar,private activeR:ActivatedRoute,private rout:Router) {
  }

  ngOnInit() {
    this.getAllContents();
  }

  
    
  

  taskWorddata(event: string) {
   
    this.viewTask.getAllTask().subscribe((x: any) => 
    { 
        this.tasks = x.filter((y:any) => y.todoTitle.toLowerCase().startsWith(event.toLowerCase()))
    });
  
  }

  highPrioritydata(event: string) {
   
    this.viewTask.getAllTask().subscribe((x: any) => 
    { 
        this.tasks = x.filter((y:any) => y.category===event)
        this.tasks.sort(this.compare)
    });
  
  }

  lowPrioritydata(event: string) {
   
    this.viewTask.getAllTask().subscribe((x: any) => 
    { 
      this.tasks = x.filter((y:any) => y.category===event)
      this.tasks.sort(this.compare)
    });
  
  }
  alltasksdata(event: string) {
   
    this.getAllContents();
  
  }
  
  deleteTodo(id:number){
      if(id!=null){
        
        this.deleteTaskService.deleteTask(id).subscribe(()=>{
          this._snackBar.open(this.message,this.success,{duration:4000});
          this.getAllContents();
          
          this.rout.navigateByUrl("viewtask");
          
        })
      }
    }

    openDialog(task:any): void {
      const dialogRef = this.dialog.open(ModifyTaskComponent, {
        data: {task},
        height: '69%',
        width: '40%'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.getAllContents();
        
        this.rout.navigateByUrl("viewtask");
      });
    }

  // editTaskForm=new FormGroup({
  //   'todoId':new FormControl(),
  //   'title':new FormControl(),
  //   '.......':new FormControl(),
  // });
  
  // getEditableTask(task:any){
  //   console.log(task);
  //   this.editTaskForm.setValue(task);
  // }
  // updateTask(){
  //   call service to update task and refresh all tasks
  // }

  getColor(priority:any): string {
    if (priority == 'High') {
      return 'red';
    } else {
      return 'blue';
    }
  }
  getCardColor(priority:any): string {
    if (priority == 'High') {
      return 'rgb(255, 181, 165)';
    } else  if (priority == 'Normal'){
      return 'rgb(114, 221, 231)';
    }else{
      return 'white';
    }
    
  }
  
p:any;
data:any=[]

compare(a:any,b:any){
  let edoka=0;
  if(a.dueDate>b.dueDate){
    edoka=1;
  }else if (a.dueDate<b.dueDate){
    edoka=-1
  }
  return edoka;
}

  getAllContents(){
    this.viewTask.getAllTask().subscribe(data => {
      console.log(data)
      this.tasks = data;
      this.tasks.sort(this.compare)
    
  })
    }


    moveToArchive(todoId:any){
      this.arService.moveToar(todoId).subscribe(()=>{
        this.getAllContents();
      })
          }
          moveToCompleted(todoId:any){
            console.log(todoId)
            this.comService.moveToCom(todoId).subscribe(()=>{
              this.getAllContents();
            })
          }
}


