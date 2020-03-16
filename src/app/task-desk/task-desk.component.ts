import {Component, OnInit} from '@angular/core';
import {Task, TaskService} from "../_service/task.service";

@Component({
  selector: 'app-tasks-desk',
  templateUrl: './task-desk.component.html',
  styleUrls: ['./task-desk.component.css']
})
export class TaskDeskComponent implements OnInit {

  constructor(private taskService: TaskService) {
  }

  tasks: Array<Task>;

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    })
  }
}
