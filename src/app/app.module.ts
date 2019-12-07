import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { RegisterAccountComponent } from './register-account/register-account.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterAccountComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
