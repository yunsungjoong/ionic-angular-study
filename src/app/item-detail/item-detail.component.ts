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
  isDatePickerOpen = false;
  tempDate: string = '';

  constructor(
    private location: Location,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      console.log('Received item:', navigation.extras.state['item']); // 데이터 수신 로그 추가
      this.item = navigation.extras.state['item'];
      this.tempDate = this.item.date
    } else {
      console.log('No navigation extras found'); // 데이터가 없는 경우 로그
    }
  }

  goBack(): void {
    this.location.back();
  }
  openDatePicker(): void {
    this.tempDate = this.item.date;
    this.isDatePickerOpen = true;
  }

  closeDatePicker(): void {
    this.isDatePickerOpen = false;
  }

  confirmDatePicker(): void {
    this.item.date = this.tempDate;
    this.closeDatePicker();
  }

  onTempDateSelected(event:any): void {
    this.tempDate = event.detail.value;
  }
}