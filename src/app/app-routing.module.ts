import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AddChildComponent} from './add-child/add-child.component';
import {UpdateParentComponent} from './update-parent/update-parent.component';
import {UpdateChildComponent} from './update-child/update-child.component';
import {DeleteParentComponent} from './delete-parent/delete-parent.component';
import {DeleteChildComponent} from './delete-child/delete-child.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'children/add', component: AddChildComponent},
  {path: 'parents/update', component: UpdateParentComponent},
  {path: 'children/update/:id', component: UpdateChildComponent},
  {path: 'parents/delete', component: DeleteParentComponent},
  {path: 'children/delete/:id', component: DeleteChildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
