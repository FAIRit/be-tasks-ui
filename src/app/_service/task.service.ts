import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {ApiConfig} from "../_config/api.config";

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
    return this.httpClient.get<Array<Task>>(ApiConfig.API_URL + 'tasks', {headers})
  }

  getTask(id) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.get<Task>(ApiConfig.API_URL + 'tasks/' + id, {headers});
  }

  addTask(name, description, points) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.post(ApiConfig.API_URL + 'tasks', {
      "name": name,
      "description": description,
      "points": points
    }, {headers})
  }

  updateTask(id, name, description, points) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.put(ApiConfig.API_URL + 'tasks/' + id, {
      "name": name,
      "description": description,
      "points": points
    }, {headers});
  }

  deleteTask(id) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.delete(ApiConfig.API_URL + 'tasks/' + id, {headers});
  }
}
