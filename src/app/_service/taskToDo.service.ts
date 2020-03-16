import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Task, TaskService} from './task.service';
import {Child} from "./child.service";

export class TaskToDo {
  constructor(
    public id: number,
    public taskView: Task,
    public startDate: Date,
    public expectedDate: Date,
    public finishDate: Date,
    public done: boolean
  ) {
  }
}

@Injectable({providedIn: 'root'})
export class TaskToDoService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService,) {
  }

  getTasksToDo(childId) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.get<Array<TaskToDo>>('http://localhost:8080/api/tasksToDo?childId=' + childId, {headers})
  }

  getTaskToDo(taskToDoId){
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.get<TaskToDo>('http://localhost:8080/api/tasksToDo/' + taskToDoId, {headers})
  }

  addTaskToDo(childId, taskId, expectedDate) {
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.post('http://localhost:8080/api/tasksToDo?childId=' + childId +'&taskId=' + taskId, {
      "expectedDate": expectedDate
    }, {headers});
  }

  updateTaskToDo(taskToDoId, expectedDate){
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.put('http://localhost:8080/api/tasksToDo/' + taskToDoId, {
      "expectedDate": expectedDate
    }, {headers});
  }

  deleteTaskToDo(taskToDoId){
    const headers = this.authenticationService.getHeaders();
    return this.httpClient.delete('http://localhost:8080/api/tasksToDo/' + taskToDoId, {headers});
  }
}
