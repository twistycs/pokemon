import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { PokedexsComponent } from './pokedexs/pokedexs.component';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './service/user.service';
import { LogInService } from './service/login.service';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterAccountComponent
  },
  {
    path: 'pokedexs',
    component: PokedexsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterAccountComponent,
    PokedexsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FormBuilder, UserService, LogInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
