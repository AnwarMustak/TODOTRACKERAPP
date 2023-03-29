import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArchiveTaskService } from '../service/archive-task.service';
import { CompletedTaskService } from '../service/completed-task.service';
import { RemoveTaskService } from '../service/remove-task.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {
  tasks!:any ;
  isHidden = false;
  message:string="Deleted the Archive Task"
  success:string="success"
  constructor(private comService:CompletedTaskService , private arService:ArchiveTaskService ,private _snackBar:MatSnackBar,private deleteTaskService:RemoveTaskService){}
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

  getCom(){
    this.comService.getAllComTask().subscribe((data)=>{this.tasks=data
    console.log(data)
    this.tasks.sort(this.compare)
  })
    
  }
  taskWorddata(event: string) {
   
    this.comService.getAllComTask().subscribe((x: any) => 
    { 
        this.tasks = x.filter((y:any) => y.todoTitle.toLowerCase().startsWith(event.toLowerCase()))
    });
  
  }
  highPrioritydata(event: string) {
   
    this.comService.getAllComTask().subscribe((x: any) => 
    { 
        this.tasks = x.filter((y:any) => y.category===event)
        this.tasks.sort(this.compare)
    });
  
  }

  lowPrioritydata(event: string) {
   
    this.comService.getAllComTask().subscribe((x: any) => 
    { 
        this.tasks = x.filter((y:any) => y.category===event)
        this.tasks.sort(this.compare)
    });
  
  }
  alltasksdata(event: string) {
   
    this.getCom();
  
  }
  deleteTodo(id:number){

    //   let id=param.get("todoId");
      if(id!=null){

        
        this.deleteTaskService.deleteTaskInCom(id).subscribe(()=>{
          // alert("deleted")
          this._snackBar.open(this.message,this.success,{duration:4000});
          console.log(id)
          this.getCom();
          
          
          
        })
      }
    }
  

  ngOnInit(){
   
    this.getCom();
  }

}
