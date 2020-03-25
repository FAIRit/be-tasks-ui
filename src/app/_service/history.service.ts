import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Child} from "./child.service";
import {ApiConfig} from "../_config/api.config";

export class History {
  constructor(
    public childView: Child,
    public modificationDate: Date,
    public quantity: number,
    public message: string
  ) {
  }
}

@Injectable({providedIn: 'root'})
export class HistoryService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService,) {
  }

  getHistory(childId) {
    const headers = this.authenticationService.getHeaders();

    return this.httpClient.get<Array<History>>(ApiConfig.API_URL + 'history/' + childId, {headers});
  }
}
