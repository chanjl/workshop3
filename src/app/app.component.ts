import { Component } from '@angular/core';
import { ToDo } from './components/add.component';
// import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop3';

  taskList: ToDo [] = [ {
    description: "Pick a Rose",
    priority: "Low",
    due: "16 Apr"
  }];

  addToList(eventObject: ToDo) {
    console.log('added: ', eventObject);
    this.taskList.push(eventObject);
  }
}
