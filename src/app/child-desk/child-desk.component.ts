import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Child, ChildService} from "../_service/child.service";
import {TaskToDo, TaskToDoService} from "../_service/taskToDo.service";

@Component({
  selector: 'app-child-desk',
  templateUrl: './child-desk.component.html',
  styleUrls: ['./child-desk.component.css']
})
export class ChildDeskComponent implements OnInit {

  childId: string;
  child: Child;
  tasksToDo: Array<TaskToDo>;

  constructor(private route: ActivatedRoute,
              private childService: ChildService,
              private taskToDoService: TaskToDoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.childId = params['id'];
      this.childService.getChild(this.childId).subscribe(childData => {
        this.child = childData;
      })
    });

    this.taskToDoService.getTasksToDo(this.childId).subscribe(tasksToDo => {
      this.tasksToDo = tasksToDo;
    })
  }

  onSubmit(taskToDoId){
    this.taskToDoService.setApproved(taskToDoId).subscribe(
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
