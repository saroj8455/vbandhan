import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent implements OnInit {
  @Input() headingMessage: string = 'Hello World App';
  @Input() center = false;

  ngOnInit(): void {
    console.log(this.center);

  }

  centerHeading() {
    return this.center ? 'flex justify-content-center' : '';
  }
}
