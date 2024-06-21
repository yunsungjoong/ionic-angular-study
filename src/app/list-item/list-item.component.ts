import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {

  @Input() item: any;
  
  constructor() { }
  
  getCardColor(status: string) : string {
    return status === '승인요청' ? 'tertiary' : 'medium';
  }

  changeStatus(item:any) {
    item.status = item.status === '승인요청' ? '검토요청' : '승인요청';
  }

}

