import { Component,  } from '@angular/core';
import { AbstractControl,FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { TaskList } from '../tasklist';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { AddTaskService } from '../service/add-task.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private router:Router,private addTaskService:AddTaskService,private fb:FormBuilder,private snackBar:MatSnackBar){

  }
  match:string="Successfully"
  message2:string="Task Added"
  ngOnInit(): void {
   }
  
    addTaskData(){
      console.log(this.addTaskForm.value.dueDate);
      this.addTaskService.addTask(this.addTaskForm.value).subscribe(
        response=>{
          console.log(response);
          // alert("Task added successfully !!!");
          this.snackBar.open(this.message2,this.match,{duration:3000})

          this.addTaskForm.reset();
          this.router.navigate(['viewtask']);
          })
    }

    // task list adding

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER,COMMA] as const;
  tasklists: TaskList[] = [];

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
  addTaskForm=new FormGroup({
    todoTitle:new FormControl('',[Validators.required]),
    todoDescription:new FormControl(),
    category:new FormControl(),
    dueDate:new FormControl('',[Validators.required,this.dueDateCheck]),
    favourite:new FormControl(),
    listOfTodo: new FormControl(this.tasklists),
    backColour: new FormControl()
   
  });
  dueDateCheck(fc:AbstractControl):ValidationErrors|null {
    var date=fc.value;
    var today = new Date();
    console.log(date );
    console.log(today);
    console.log(date<today)
    if(date==""){
      return {dueDateCheck1:false}
    }
    else if(date<today){
      return {dueDateCheck2:false};
    }
    return null;
  }
  get f(){
   return this.addTaskForm.controls;
  }
  


}
