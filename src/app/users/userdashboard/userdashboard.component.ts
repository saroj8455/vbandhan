import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface IDev {
  status:string;
  message:string
}

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  loadingProfile = true;

  apiDevMessage:string="";

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
      setTimeout(()=>{
        this.loadingProfile = false;
      },5000)

      this.http.get<IDev>("https://dev.ocembalangir.in/").subscribe((resp:IDev)=>{
        this.apiDevMessage = resp.message;

      })
  }

    //function to return list of numbers from 0 to n-1
    numSequence(n: number): Array<number> {
      return Array(n);
    }


}
