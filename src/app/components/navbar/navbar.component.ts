import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MENU_ITEM } from 'src/app/common/message';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = MENU_ITEM;

  ngOnInit(): void {

  }
}
