import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";

export class Child {
  constructor(
    public id: number,
    public name: string,
    public gender: string,
    public email: string,
    public birthDate: string
  ) {
  }
}

@Injectable({providedIn: 'root'})
export class ChildService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  getChild(id) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.get<Child>('http://localhost:8080/api/children/' + id, {headers});
  }

  getChildren() {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.get<Array<Child>>('http://localhost:8080/api/children', {headers})
  }

  addChild(name, gender, birthDate, email, password) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.post('http://localhost:8080/api/children', {
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
    return this.httpClient.put('http://localhost:8080/api/children/' + id, {
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
    return this.httpClient.delete('http://localhost:8080/api/children/' + id, {headers});
  }
}
