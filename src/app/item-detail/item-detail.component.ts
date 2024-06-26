import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent {
  item: any;
  isDatePickerOpen = false

  constructor(
    private location: Location,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      console.log('Received item:', navigation.extras.state['item']); // 데이터 수신 로그 추가
      this.item = navigation.extras.state['item'];
    } else {
      console.log('No navigation extras found'); // 데이터가 없는 경우 로그
    }
  }

  goBack(): void {
    this.location.back();
  }

  toggleStatus(): void {
    if (this.item) {
      this.item.status = this.item.status === '승인요청' ? '검토요청' : '승인요청';
    }
  }
  
  openDatePicker(): void {
    this.isDatePickerOpen = true;
  }

  closeDatePicker(): void {
    this.isDatePickerOpen = false;
  }

  onDateSelected(event: any): void {
    this.item.date = event.detail.value;
    this.closeDatePicker(); // 선택 후 모달 닫기
  }

  
}