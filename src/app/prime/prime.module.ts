import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonModule,
    MenubarModule,
    InputTextModule,
    SpeedDialModule,
    ToastModule
  ]
})
export class PrimeModule { }
