import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
export interface IUserAuth {
  username:string;
  password:string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userauth :IUserAuth ={
    username:"",
    password:""
   }

  loadingText="Loading......";
  loading = 0;
  headingMessage = "Welcome to Shipping INDIA"
  inProgress = false;
  visible = false;
  constructor(private messageService: MessageService) {}

  shippingAuth() {

    if(this.userauth.username.trim().toString().length <= 0 || this.userauth.password.trim().length <= 0 ) {
      this.visible = true;
      return;
    }
    if(this.userauth.username.trim().toString() === "a") {
      this.inProgress = true
      let interval = setInterval(() => {
        this.loading = this.loading + Math.floor(Math.random() * 10) + 1;
        if (this.loading >= 100) {
            this.loading = 100;
            this.messageService.add({severity: 'info', summary: 'Success', detail: 'Process Completed'});
            this.inProgress = false
            clearInterval(interval);
        }
    }, 1000);
      // setTimeout(()=>{
      //   this.inProgress = false
      //   this.messageService.add({ severity: 'success', summary: 'Success', detail: `Login Successful : ${this.userauth.username} ` });
      // },4000)
    } else {
      this.inProgress = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `Invalid Credentials: ${this.userauth.username} ` });
    }
  }

  resetAuthForm() {
    this.userauth.username = ""
    this.userauth.password =""
  }
}
