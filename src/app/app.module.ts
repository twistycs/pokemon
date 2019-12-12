import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { PokedexsComponent } from './pokedexs/pokedexs.component';
import { PokedexsDetailsComponent } from './pokedexs-details/pokedexs-details.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './service/user.service';
import { LogInService } from './service/login.service';
import { PokemonsService } from './service/pokemons.service';
import { TrainerService } from './service/trainer.service';


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
  },
  {
    path: 'pokedexs-details/:id/:userName',
    component: PokedexsDetailsComponent
  },
  {
    path: 'pokemons/:id/:userName',
    component: PokemonsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterAccountComponent,
    PokedexsComponent,
    PokedexsDetailsComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FormBuilder, UserService, LogInService, PokemonsService, TrainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
