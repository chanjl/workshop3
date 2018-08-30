import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from './add.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() //attributes
  myList: ToDo[] = []; //default empty cart
  
  @Output() //events
  toDelete = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask(index: number) {
    this.myList.splice(index, 1);
  }

  finishTask() {

  }
}
