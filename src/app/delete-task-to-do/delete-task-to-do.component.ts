import {Component, OnInit} from '@angular/core';
import {TaskToDoService} from "../_service/taskToDo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete-task-to-do',
  templateUrl: './delete-task-to-do.component.html',
  styleUrls: ['./delete-task-to-do.component.css']
})
export class DeleteTaskToDoComponent implements OnInit {

  childId: string;
  taskToDoId: string;
  deleteForm: FormGroup;

  constructor(private taskToDoService: TaskToDoService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.deleteForm = this.formBuilder.group({});

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
