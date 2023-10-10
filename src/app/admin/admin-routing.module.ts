import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DtableComponent } from './dtable/dtable.component';

const routes: Routes = [
  {path:"a-dash",component:DashboardComponent},
  {path:"dtable",component:DtableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
