import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {ApiConfig} from "../_config/api.config";

export class Offer {
  constructor(
    public name: string,
    public url: string,
    public price: number,
  ) {
  }
}

@Injectable({providedIn: 'root'})
export class OfferService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService,) {
  }

  getOffers() {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.get<Array<Offer>>(ApiConfig.API_URL + 'allegro/offers', {headers})
  }
}
