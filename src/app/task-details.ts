import { TaskList } from "./tasklist";

export class TaskDetails
{
    todoId:number=0;
    todoTitle:String=""; 
    todoDescription:String="";
    category:String="";
    createdDate:String="";
    dueDate:String="";
    tasklist:TaskList[]=[{ListName:""}];
    favourite:boolean=false;
    archive:boolean=false;
}