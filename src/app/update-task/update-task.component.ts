import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../_service/task.service";

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  id: string;
  updateForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private taskService: TaskService) {
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      points: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.taskService.getTask(this.id).subscribe(taskData => {
          this.updateForm.setValue({
            name: taskData.name,
            description: taskData.description,
            points: taskData.points
          });
        },
        error => {
        })
    });
  }

  onSubmit() {
    const name = this.updateForm.controls.name.value;
    const description = this.updateForm.controls.description.value;
    const points = this.updateForm.controls.points.value;

    (this.taskService.updateTask(this.id, name, description, points).subscribe(
        data => {
          window.alert('SUCCESS');
          this.router.navigate(['/tasks'])
        },
        error => {
          window.alert('ERROR')
        }
      )
    );
  }
}
