import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AddChildComponent} from './add-child/add-child.component';
import {UpdateChildComponent} from './update-child/update-child.component';
import {UpdateParentComponent} from './update-parent/update-parent.component';
import {DeleteParentComponent} from './delete-parent/delete-parent.component';
import {DeleteChildComponent} from './delete-child/delete-child.component';
import {ParentDeskComponent} from './parent-desk/parent-desk.component';
import {TaskDeskComponent} from './task-desk/task-desk.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {UpdateTaskComponent} from './update-task/update-task.component';
import {DeleteTaskComponent} from './delete-task/delete-task.component';
import {AddTaskToDoComponent} from './add-task-to-do/add-task-to-do.component';
import {ChildDeskComponent} from './child-desk/child-desk.component';
import {DeleteTaskToDoComponent} from './delete-task-to-do/delete-task-to-do.component';
import {UpdateTaskToDoComponent} from './update-task-to-do/update-task-to-do.component';
import {ChildOwnDeskComponent} from './child-own-desk/child-own-desk.component';
import {AddRewardComponent} from './add-reward/add-reward.component';
import {DeleteRewardComponent} from './delete-reward/delete-reward.component';
import {UpdateRewardComponent} from './update-reward/update-reward.component';
import {HistoryDeskComponent} from './history-desk/history-desk.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddChildComponent,
    UpdateChildComponent,
    UpdateParentComponent,
    DeleteParentComponent,
    DeleteChildComponent,
    ParentDeskComponent,
    TaskDeskComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent,
    AddTaskToDoComponent,
    ChildDeskComponent,
    DeleteTaskToDoComponent,
    UpdateTaskToDoComponent,
    ChildOwnDeskComponent,
    AddRewardComponent,
    DeleteRewardComponent,
    UpdateRewardComponent,
    HistoryDeskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
