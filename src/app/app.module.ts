import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddChildComponent,
    UpdateChildComponent,
    UpdateParentComponent,
    DeleteParentComponent,
    DeleteChildComponent
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
