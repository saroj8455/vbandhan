import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MENU_ITEM } from 'src/app/common/message';

@Component({
  selector: 'app-dialmenu',
  templateUrl: './dialmenu.component.html',
  styleUrls: ['./dialmenu.component.css']
})
export class DialmenuComponent {

  items:MenuItem[] = MENU_ITEM;

  constructor(private messageService: MessageService) {
    this.items[0].command = () => {
      this.messageService.add({severity:'info', summary:'Info Message', detail:'PrimeNG Rocks'});
    }
  }
}

