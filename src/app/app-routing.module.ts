import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:"",component:LandingComponent},
  {path:"landing",redirectTo:"landing",pathMatch:"full"},
  {path:"home",component:HomeComponent,canActivate:[authGuard]},
  {path:"about",component:AboutComponent},
  {path:"user",loadChildren:()=>import("./users/users.module").then(m=>m.UsersModule)},
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(a=>a.AdminModule)},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
