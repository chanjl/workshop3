import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from './add.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() //attributes
  myList: ToDo[] = []; //default empty cart
  
  constructor() { }

  ngOnInit() {
  }
}
