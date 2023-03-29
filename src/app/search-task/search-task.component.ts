import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit{
  stateCtrl = new FormControl('');
  taskWord!:string;

  @Output()
  taskWorddata:EventEmitter<string> = new EventEmitter<string>();
 
  @Output()
  highPrioritydata:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  lowPrioritydata:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  alltasksdata:EventEmitter<string> = new EventEmitter<string>();

  onsearch():void{
    this.taskWorddata.emit(this.taskWord)
  }
  highPriority():void{
    this.highPrioritydata.emit('High')

  }
  lowPriority():void{
    this.lowPrioritydata.emit('Normal')

  }
  alltasks():void{
    this.alltasksdata.emit('all')
  }


 
 

  constructor() {
    
  }

  ngOnInit(): void {
  }

  

}
