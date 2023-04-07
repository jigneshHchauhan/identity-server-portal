import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityComponent } from './identity.component';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    IdentityComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IdentityRoutingModule
  ]
})
export class IdentityModule { }
