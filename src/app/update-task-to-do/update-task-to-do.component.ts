import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskToDoService} from "../_service/taskToDo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-task-to-do',
  templateUrl: './update-task-to-do.component.html',
  styleUrls: ['./update-task-to-do.component.css']
})
export class UpdateTaskToDoComponent implements OnInit {

  updateForm: FormGroup;
  childId: string;
  taskToDoId: string;

  constructor(private taskToDoService: TaskToDoService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      expectedDate: ['', Validators.required]
    })

    this.route.params.subscribe(params => {
      this.childId = params['childId'];
      this.taskToDoId = params['taskToDoId'];
    })

    this.taskToDoService.getTaskToDo(this.taskToDoId).subscribe(taskToDoData => {
        this.updateForm.setValue({
          expectedDate: taskToDoData.expectedDate
        })
      },
      error => {
      })
  }

  onSubmit() {
    const expectedDate = this.updateForm.controls.expectedDate.value;

    (this.taskToDoService.updateTaskToDo(this.taskToDoId, expectedDate).subscribe(
        data => {
          window.alert('SUCCESS');
          this.router.navigate(['/children/' + this.childId])
        },
        error => {
          window.alert('ERROR')
        }
      )
    );
  }
}
