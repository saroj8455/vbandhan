import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AboutComponent } from '../components/about/about.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"dash",component:UserdashboardComponent},
  {path:"about",component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
