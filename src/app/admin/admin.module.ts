import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DtableComponent } from './dtable/dtable.component';
import { PrimeModule } from '../prime/prime.module';


@NgModule({
  declarations: [
    DashboardComponent,
    DtableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeModule
  ]
})
export class AdminModule { }
