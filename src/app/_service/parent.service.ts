import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

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
    return this.httpClient.get<Parent>('http://localhost:8080/api/parents', {headers});
  }

  addParent(name, gender, email, password) {
    return this.httpClient.post<Parent>('http://localhost:8080/api/parents', {
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
    return this.httpClient.put('http://localhost:8080/api/parents', {
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
    return this.httpClient.delete<Parent>('http://localhost:8080/api/parents', {headers});
  }
}
