import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RewardService} from "../_service/reward.service";

@Component({
  selector: 'app-delete-reward',
  templateUrl: './delete-reward.component.html',
  styleUrls: ['./delete-reward.component.css']
})
export class DeleteRewardComponent implements OnInit {

  id: number;

  constructor(private rewardService: RewardService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  onSubmit() {
    this.rewardService.deleteReward(this.id).subscribe(data => {
        window.alert('SUCCESS');
        this.router.navigate(['/child'])
      },
      error => {
        window.alert('ERROR')
      }
    )
  }
}
