import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
