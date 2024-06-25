import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {

  @Input() item: any;
  
  itemColors: {[key: number]: string} = {};

  constructor(private router: Router) { }
  
  getCardColor(status: string) : string {
    return status === '승인요청' ? 'tertiary' : 'medium';
  }

  changeStatus(event: Event,item:any) {
    event.stopPropagation();
    item.status = item.status === '승인요청' ? '검토요청' : '승인요청';
  }

  toggleItemColor(itemId: number, defaultColor : string) : void {
    this.itemColors[itemId] = this.itemColors[itemId] === 'yellow' ? defaultColor : 'yellow';
  }

  navigateToDetail(event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/item-detail', this.item.idx]); // 라우터에 데이터 전달 (id만 전달)
  }
}

