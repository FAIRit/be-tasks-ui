import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../_service/authentication.service";
import {TaskService} from "../_service/task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private taskService: TaskService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      points: ['', Validators.required],
    });
  }

  onSubmit() {
    const name = this.addForm.controls.name.value;
    const description = this.addForm.controls.description.value;
    const points = this.addForm.controls.points.value;
    (this.taskService.addTask(name, description, points).subscribe(
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
