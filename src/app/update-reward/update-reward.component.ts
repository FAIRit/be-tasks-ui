import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RewardService} from "../_service/reward.service";

@Component({
  selector: 'app-update-reward',
  templateUrl: './update-reward.component.html',
  styleUrls: ['./update-reward.component.css']
})
export class UpdateRewardComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rewardService: RewardService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.rewardService.setBought(this.id).subscribe(
        data => {
          window.alert('SUCCESS');
          this.router.navigate(['/parents'])
        },
        errorResponse => {
          window.alert(errorResponse.error.message)
        }
      )
    })
  }
}
