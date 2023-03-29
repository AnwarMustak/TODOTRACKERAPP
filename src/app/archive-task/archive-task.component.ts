import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ArchiveTaskService } from '../service/archive-task.service';
import { RemoveTaskService } from '../service/remove-task.service';


@Component({
  selector: 'app-archive-task',
  templateUrl: './archive-task.component.html',
  styleUrls: ['./archive-task.component.css']
})
export class ArchiveTaskComponent {
  message:string="Deleted the Archive Task"
  success:string="success"
  archive:string="Archived"
  constructor( private arService:ArchiveTaskService,private _snackBar: MatSnackBar,private deleteTaskService:RemoveTaskService ,private rout:Router){}

  tasks!:any ;
  isHidden = false;
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

  getar(){
    this.arService.getAllarTask().subscribe((data)=>{this.tasks=data
    console.log(data)
    this.tasks.sort(this.compare)
  })

  }

  taskWorddata(event: string) {
   
    this.arService.getAllarTask().subscribe((x: any) => 
    { 
        this.tasks = x.filter((y:any) => y.todoTitle.toLowerCase().startsWith(event.toLowerCase()))
    });
  
  }
  highPrioritydata(event: string) {
   
    this.arService.getAllarTask().subscribe((x: any) => 
    { 
        this.tasks = x.filter((y:any) => y.category===event)
        this.tasks.sort(this.compare)
    });
  
  }

  lowPrioritydata(event: string) {
   
    this.arService.getAllarTask().subscribe((x: any) => 
    { 
        this.tasks = x.filter((y:any) => y.category===event)
        this.tasks.sort(this.compare)
    });
  
  }
  alltasksdata(event: string) {
   
    this.getar();
  
  }

  ngOnInit(){
    this.getar();
    
   
  }
  deleteTodo(id:number){

    //   let id=param.get("todoId");
      if(id!=null){

        
        this.deleteTaskService.deleteTaskInAr(id).subscribe(()=>{
          // alert("deleted")
          this._snackBar.open(this.message,this.success,{duration:4000});
          console.log(id)
          this.getar();
          
          
          
        })
      }
    }
    unarchive(todoId:any){this.arService.moveToviewUNA(todoId).subscribe((data)=>{
      if(data==true){
    
     this.getar();
    
     
    }

    })

    }
  
}
