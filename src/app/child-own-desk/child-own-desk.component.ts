import {Component, OnInit} from '@angular/core';
import {TaskToDo, TaskToDoService} from "../_service/taskToDo.service";
import {FormBuilder} from "@angular/forms";
import {Child, ChildService} from "../_service/child.service";

@Component({
  selector: 'app-child-own-desk',
  templateUrl: './child-own-desk.component.html',
  styleUrls: ['./child-own-desk.component.css']
})
export class ChildOwnDeskComponent implements OnInit {

  tasksToDo: Array<TaskToDo>;
  child: Child;

  constructor(private taskToDoService: TaskToDoService,
              private childService: ChildService) {
  }

  ngOnInit() {
    this.taskToDoService.getTasksToDo().subscribe(value => {
      this.tasksToDo = value;
    })
    this.childService.getChild().subscribe(value => {
      this.child = value;
    })
  }

  onSubmit(taskToDoId) {
    this.taskToDoService.setDone(taskToDoId).subscribe(
      data => {
        window.alert('SUCCESS');
        window.location.reload();
      },
      error => {
        window.alert('ERROR')
      }
    )
  }
}
