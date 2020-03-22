import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Child} from "./child.service";

export class Reward {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public points: number,
    public child: Child,
    public bought: boolean
  ) {
  }
}

@Injectable({providedIn: 'root'})
export class RewardService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService,) {
  }

  getRewards(childId?) {
    const headers = this.authenticationService.getHeaders();

    if (childId) {
      return this.httpClient.get<Array<Reward>>('http://localhost:8080/api/rewards?childId=' + childId, {headers})
    } else {
      return this.httpClient.get<Array<Reward>>('http://localhost:8080/api/rewards/byChild', {headers})
    }
  }

  addReward(name, url, points) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.post('http://localhost:8080/api/rewards', {
      "name": name,
      "url": url,
      "points": points
    }, {headers});
  }

  setBought(rewardId) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.put('http://localhost:8080/api/rewards/' + rewardId + '/bought', {}, {headers});
  }

  deleteReward(rewardId) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.delete('http://localhost:8080/api/rewards/' + rewardId, {headers})
  }
}
