import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Task} from './task.service';
import {ApiConfig} from "../_config/api.config";

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

    getTasksToDo(childId?) {
        const headers = this.authenticationService.getHeaders();

        if (childId) {
            return this.httpClient.get<Array<TaskToDo>>(ApiConfig.API_URL + 'tasksToDo?childId=' + childId, {headers})
        } else {
            return this.httpClient.get<Array<TaskToDo>>(ApiConfig.API_URL + 'tasksToDo/byChild', {headers})
        }
    }

    getTaskToDo(taskToDoId) {
        const headers = this.authenticationService.getHeaders();
        return this.httpClient.get<TaskToDo>(ApiConfig.API_URL + 'tasksToDo/' + taskToDoId, {headers})
    }

    addTaskToDo(childId, taskId, expectedDate) {
        const headers = this.authenticationService.getHeaders();
        return this.httpClient.post(ApiConfig.API_URL + 'tasksToDo?childId=' + childId + '&taskId=' + taskId, {
            "expectedDate": expectedDate
        }, {headers});
    }

    updateTaskToDo(taskToDoId, expectedDate) {
        const headers = this.authenticationService.getHeaders();
        return this.httpClient.put(ApiConfig.API_URL + 'tasksToDo/' + taskToDoId, {
            "expectedDate": expectedDate
        }, {headers});
    }

    deleteTaskToDo(taskToDoId) {
        const headers = this.authenticationService.getHeaders();
        return this.httpClient.delete(ApiConfig.API_URL + 'tasksToDo/' + taskToDoId, {headers});
    }

    setDone(taskToDoId) {
        const headers = this.authenticationService.getHeaders();
        return this.httpClient.put(ApiConfig.API_URL + 'tasksToDo/' + taskToDoId + '/done', {}, {headers});
    }

    setApproved(taskToDoId) {
        const headers = this.authenticationService.getHeaders();
        return this.httpClient.put(ApiConfig.API_URL + 'tasksToDo/' + taskToDoId + '/approved', {}, {headers});
    }
}
