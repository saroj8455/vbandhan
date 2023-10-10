import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MENU_ITEM } from 'src/app/common/message';

@Component({
  selector: 'app-dialmenu',
  templateUrl: './dialmenu.component.html',
  styleUrls: ['./dialmenu.component.css']
})
export class DialmenuComponent {

  items:MenuItem[] = MENU_ITEM;
}
