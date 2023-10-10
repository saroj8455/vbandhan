import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { SignupComponent } from './signup/signup.component';
import { PrimeModule } from '../prime/prime.module';


@NgModule({
  declarations: [
    UserdashboardComponent,
    ProfileComponent,
    SupportComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PrimeModule
  ]
})
export class UsersModule { }
