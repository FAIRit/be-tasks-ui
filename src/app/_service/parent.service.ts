import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {ApiConfig} from "../_config/api.config";

export class Parent {
  constructor(
    public name: string,
    public gender: string,
    public email: string
  ) {
  }
}

@Injectable({providedIn: 'root'})
export class ParentService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  getParent() {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.get<Parent>(ApiConfig.API_URL + 'parents', {headers});
  }

  addParent(name, gender, email, password) {
    return this.httpClient.post<Parent>(ApiConfig.API_URL + 'parents', {
      "name": name,
      "gender": gender,
      "userData": {
        "email": email,
        "password": password
      }
    });
  }

  updateParent(name, gender, email, password) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.put(ApiConfig.API_URL + 'parents', {
      "name": name,
      "gender": gender,
      "userData": {
        "email": email,
        "password": password
      }
    }, {headers});
  }

  deleteParent() {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.delete<Parent>(ApiConfig.API_URL + 'parents', {headers});
  }
}
