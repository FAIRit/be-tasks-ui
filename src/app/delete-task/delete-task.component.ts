import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../_service/task.service";

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.taskService.deleteTask(this.id).subscribe(
        data => {
          window.alert('SUCCESS');
          this.router.navigate(['/tasks'])
        },
        error => {
          window.alert('ERROR')
        }
      )
    })
  }
}
