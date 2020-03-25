import {Component, OnInit} from '@angular/core';
import {TaskToDoService} from "../_service/taskToDo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-task-to-do',
  templateUrl: './delete-task-to-do.component.html',
  styleUrls: ['./delete-task-to-do.component.css']
})
export class DeleteTaskToDoComponent implements OnInit {

  childId: string;
  taskToDoId: string;

  constructor(private taskToDoService: TaskToDoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskToDoId = params['taskToDoId'];
      this.childId = params['childId'];
    })
  }

  onSubmit() {
    this.taskToDoService.deleteTaskToDo(this.taskToDoId).subscribe(data => {
        window.alert('SUCCESS');
        this.router.navigate(['/children/' + this.childId])
      },
      error => {
        window.alert('ERROR')
      })
  }
}
