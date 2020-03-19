import {Component, OnInit} from '@angular/core';
import {Child, ChildService} from "../_service/child.service";
import {Task, TaskService} from "../_service/task.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {TaskToDoService} from "../_service/taskToDo.service";

@Component({
  selector: 'app-add-task-to-do',
  templateUrl: './add-task-to-do.component.html',
  styleUrls: ['./add-task-to-do.component.css']
})
export class AddTaskToDoComponent implements OnInit {

  taskId: string;
  task: Task;
  addForm: FormGroup;
  children: Array<Child>;

  constructor(private childService: ChildService,
              private taskService: TaskService,
              private taskToDoService: TaskToDoService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskId = params['taskId'];
      this.taskService.getTask(this.taskId).subscribe(taskData => {
          this.task = taskData;
      })
    });

    this.addForm = this.formBuilder.group({
      expectedDate: ['', Validators.required],
      childId: ['',Validators.required]
    });

    this.childService.getChildren().subscribe(children => {
      this.children = children;

      this.addForm.patchValue({
        expectedDate: new Date().toISOString().substring(0,10)
      });
    });
  }

  onSubmit() {
    const expectedDate = this.addForm.controls.expectedDate.value;
    const childId = this.addForm.controls.childId.value;

    (this.taskToDoService.addTaskToDo(childId, this.taskId, expectedDate).subscribe(
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
