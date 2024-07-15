import { Component, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() item: any;
  
  itemColors: { [key: number]: string } = {}; 
  textColors: { [key: number]: string } = {};
  
  
  constructor(private router: Router) {}

  getCardColor(status: string): string {
    return status === '승인요청' ? 'tertiary' : 'medium';
  }

  changeStatus(event: Event, item: any) {
    event.stopPropagation();
    item.status = item.status === '승인요청' ? '검토요청' : '승인요청';
  }

  toggleItemColor(itemId: number, defaultColor: string): void {
    this.itemColors[itemId] = this.itemColors[itemId] === 'yellow' ? defaultColor : 'yellow';
    this.textColors[itemId] = this.itemColors[itemId] === 'yellow' ? 'black' : 'white';
  }

  navigateToDetail(event: Event): void {
    event.stopPropagation();
    const navigationExtras: NavigationExtras = {
      state: {
        item: this.item // 변경된 상태를 포함하여 데이터를 전달
      }
    };
    console.log('Navigating with extras:', navigationExtras); // 데이터 전달 로그 추가
    this.router.navigate(['/item-detail'], navigationExtras);
  }

  
}