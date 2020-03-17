import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AddChildComponent} from './add-child/add-child.component';
import {UpdateParentComponent} from './update-parent/update-parent.component';
import {UpdateChildComponent} from './update-child/update-child.component';
import {DeleteParentComponent} from './delete-parent/delete-parent.component';
import {DeleteChildComponent} from './delete-child/delete-child.component';
import {ParentDeskComponent} from "./parent-desk/parent-desk.component";
import {TaskDeskComponent} from "./task-desk/task-desk.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {UpdateTaskComponent} from './update-task/update-task.component';
import {DeleteTaskComponent} from "./delete-task/delete-task.component";
import {AddTaskToDoComponent} from "./add-task-to-do/add-task-to-do.component";
import {ChildDeskComponent} from "./child-desk/child-desk.component";
import {DeleteTaskToDoComponent} from "./delete-task-to-do/delete-task-to-do.component";
import {UpdateTaskToDoComponent} from "./update-task-to-do/update-task-to-do.component";
import {ChildOwnDeskComponent} from "./child-own-desk/child-own-desk.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'parents', component: ParentDeskComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'parents/update', component: UpdateParentComponent},
  {path: 'parents/delete', component: DeleteParentComponent},

  {path: 'child', component: ChildOwnDeskComponent},

  {path: 'children/:id', component: ChildDeskComponent},
  {path: 'children/add', component: AddChildComponent},
  {path: 'children/update/:id', component: UpdateChildComponent},
  {path: 'children/delete/:id', component: DeleteChildComponent},

  {path: 'tasks', component: TaskDeskComponent},
  {path: 'tasks/add', component: AddTaskComponent},
  {path: 'tasks/update/:id', component: UpdateTaskComponent},
  {path: 'tasks/delete/:id', component: DeleteTaskComponent},

  {path: 'tasksToDo/add/:taskId', component: AddTaskToDoComponent},
  {path: 'children/:childId/tasksToDo/update/:taskToDoId', component: UpdateTaskToDoComponent},
  {path: 'children/:childId/tasksToDo/delete/:taskToDoId', component: DeleteTaskToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
