import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    FormsModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    SpeedDialModule,
    ToastModule,
    ImageModule,
    DialogModule,
    ProgressBarModule,
    PasswordModule
  ]
})
export class PrimeModule { }
