import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";

export class Task {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public points: number
  ) {
  }
}

@Injectable({providedIn: 'root'})
export class TaskService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  getTasks() {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.get<Array<Task>>('http://localhost:8080/api/tasks', {headers})
  }

  getTask(id) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.get<Task>('http://localhost:8080/api/tasks/' + id, {headers});
  }

  addTask(name, description, points) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.post('http://localhost:8080/api/tasks', {
      "name": name,
      "description": description,
      "points": points
    }, {headers})
  }

  updateTask(id, name, description, points) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.put('http://localhost:8080/api/tasks/' + id, {
      "name": name,
      "description": description,
      "points": points
    }, {headers});
  }

  deleteTask(id) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.delete('http://localhost:8080/api/tasks/' + id, {headers});
  }
}
