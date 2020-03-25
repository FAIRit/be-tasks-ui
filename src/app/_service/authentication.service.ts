import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ApiConfig} from "../_config/api.config";

export class User {
  constructor(
    public email: string,
    public type: string
  ) {
  }
}

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  login(username, password) {
    let basicAuth = window.btoa(username + ':' + password);
    const headers = new HttpHeaders({Authorization: 'Basic ' + basicAuth});
    return this.httpClient.get<User>(ApiConfig.API_URL + 'users/validateLogin', {headers})
      .pipe(
        map(userData => {
          sessionStorage.setItem('username', username)
          sessionStorage.setItem('password', password)
          return userData
        })
      );
  }

  getHeaders() {
    let username = sessionStorage.getItem('username')
    let password = sessionStorage.getItem('password')
    return new HttpHeaders({Authorization: 'Basic ' + window.btoa(username + ':' + password)})
  }

  logout() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('password')
  }
}
