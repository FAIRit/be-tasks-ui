import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {ApiConfig} from "../_config/api.config"

export class Child {
  constructor(
    public id: number,
    public name: string,
    public gender: string,
    public email: string,
    public birthDate: string,
    public points: number
  ) {
  }
}

@Injectable({providedIn: 'root'})
export class ChildService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  getChild(id?) {
    const headers = this.authenticationService.getHeaders();

    if (id) {
      return this.httpClient.get<Child>(ApiConfig.API_URL + 'children/' + id, {headers}
      )
        ;
    } else {
      return this.httpClient.get<Child>(ApiConfig.API_URL + 'children/', {headers});
    }
  }

  getChildren() {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.get<Array<Child>>(ApiConfig.API_URL + 'children/byParent', {headers})
  }

  addChild(name, gender, birthDate, email, password) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.post(ApiConfig.API_URL + 'children', {
      "name": name,
      "gender": gender,
      "birthDate": birthDate,
      "userData": {
        "email": email,
        "password": password
      }
    }, {headers})
  }

  updateChild(id, name, gender, birthDate, email, password) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.put(ApiConfig.API_URL + 'children/' + id, {
      "name": name,
      "gender": gender,
      "birthDate": birthDate,
      "userData": {
        "email": email,
        "password": password
      }
    }, {headers});
  }

  deleteChild(id) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.delete(ApiConfig.API_URL + 'children/' + id, {headers});
  }
}
