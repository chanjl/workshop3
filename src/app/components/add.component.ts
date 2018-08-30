import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

export interface ToDo {
  description: string;
  priority: string;
  due: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  @Output() //events
  addToDo = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('todoForm')
  todoForm: NgForm;

  processToDo(){
    console.log('processing');
    for (let i in this.todoForm.value) {
      console.log('i = ', i, ' v= ', this.todoForm.value[i]);
    }

    if (moment().isAfter(moment(this.todoForm.value["task-duedate"]))) {
      alert('You cannot add a task with a due date in the past');
    }
    else {
      const eventObject: ToDo = {
        description: this.todoForm.value["task-description"],
        priority: this.todoForm.value["task-priority"],
        due: moment(this.todoForm.value["task-duedate"]).format("MMM D")
      }
      this.addToDo.next(eventObject);
      this.todoForm.resetForm();
    }
  }
}
