import { Component,Inject } from '@angular/core';
import { TaskList } from '../tasklist';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddTaskService } from '../service/add-task.service';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from '@angular/material/dialog';
import { ModifyTaskService } from '../service/modify-task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  task:any
}


@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})


export class ModifyTaskComponent {

  editTaskForm : FormGroup;
  message:string="Task updated successfully!!!"
  success:string="Ok"

  constructor(private router:Router,private modifyTaskService:ModifyTaskService,private fb:FormBuilder,private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ModifyTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){
    this.editTaskForm=this.fb.group({
      'todoId':new FormControl(this.data.task.todoId),
      'todoTitle':new FormControl(this.data.task.todoTitle),
      'todoDescription':new FormControl(this.data.task.todoDescription),
      'category':new FormControl(this.data.task.category),
      'dueDate':new FormControl(this.data.task.dueDate),
      'favourite':new FormControl(),
      'listOfTodo': new FormControl(this.tasklists),
      'backColour':new FormControl(this.data.task.backColour)
     
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    
  }

  
    editTaskData(){
      console.log(this.editTaskForm.value);
      this.modifyTaskService.modifyTask(this.editTaskForm.value).subscribe(
        response=>{
          console.log(response);
          
          this._snackBar.open(this.message,this.success,{duration:4000});
          this.dialogRef.close();
          this.router.navigate(['viewtask']);
          })
    }

    

    // task list adding

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER,COMMA] as const;

  // tasklists: TaskList[] = [];
  tasklists=this.data.task.listOfTodo;

  datatasklist(data:any){
    const value:any = (data.task.listOfTodo || ',').trim();
   
    
      if (value) {
        this.tasklists.push(value);
      }


      console.log(this.tasklists)
    
    
    // Clear the input value
    // data.chipInput!.clear();

  }

  

  add(event: MatChipInputEvent): void {
    const value:any = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tasklists.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tasklists: TaskList): void {
    const index = this.tasklists.indexOf(tasklists);

    if (index >= 0) {
      this.tasklists.splice(index, 1);
    }
  }

  edit(tasklists: TaskList, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(tasklists);
      return;
    }

    // Edit existing fruit
    const index = this.tasklists.indexOf(tasklists);
    if (index >= 0) {
      this.tasklists[index];
    }
  }


}
