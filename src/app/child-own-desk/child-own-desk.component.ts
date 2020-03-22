import {Component, OnInit} from '@angular/core';
import {TaskToDo, TaskToDoService} from "../_service/taskToDo.service";
import {Child, ChildService} from "../_service/child.service";
import {Reward, RewardService} from "../_service/reward.service";

@Component({
  selector: 'app-child-own-desk',
  templateUrl: './child-own-desk.component.html',
  styleUrls: ['./child-own-desk.component.css']
})
export class ChildOwnDeskComponent implements OnInit {

  tasksToDo: Array<TaskToDo>;
  child: Child;
  rewards: Array<Reward>;

  constructor(private taskToDoService: TaskToDoService,
              private childService: ChildService,
              private rewardService: RewardService) {
  }

  ngOnInit() {
    this.taskToDoService.getTasksToDo().subscribe(value => {
      this.tasksToDo = value;
    })
    this.childService.getChild().subscribe(value => {
      this.child = value;
    })
    this.rewardService.getRewards().subscribe(value => {
      this.rewards = value;
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
