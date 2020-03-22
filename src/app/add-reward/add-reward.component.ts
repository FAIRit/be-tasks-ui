import {Component, OnInit} from '@angular/core';
import {Offer, OfferService} from "../_service/offer.service";
import {RewardService} from "../_service/reward.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-reward',
  templateUrl: './add-reward.component.html',
  styleUrls: ['./add-reward.component.css']
})
export class AddRewardComponent implements OnInit {

  offers: Array<Offer>
  addForm: FormGroup;

  constructor(private offerService: OfferService,
              private rewardService: RewardService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.offerService.getOffers().subscribe(data => {
      this.offers = data;
    })
    this.addForm = this.formBuilder.group({});
  }

  onSubmit(name, price, url) {
    const points = Math.ceil(price * 100) / 100;

    (this.rewardService.addReward(name, url, points).subscribe(
        data => {
          window.alert('SUCCESS');
          window.location.reload();
        },
        error => {
          window.alert('ERROR')
        }
      )
    );
  }
}
