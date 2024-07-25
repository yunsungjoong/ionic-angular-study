import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  phoneNumber: string = '';
  
  constructor(private platform:Platform, private toastController: ToastController) {}

  makeCall() {
    if(this.phoneNumber) {
      // 문자 메시지 앱을 열고 입력된 전화번호로 문자 보내기
      if(this.platform.is('hybrid')) {
        window.location.href = `tel:${this.phoneNumber}`;
      }
    } else {
      this.showToast('전화번호를 입력해주세요');
    }
  }

  sendSMS() {
    if (this.phoneNumber) {
      if (this.platform.is('hybrid'))
      // 문자 메시지 앱을 열고 입력된 전화번호로 문자 보내기
        window.location.href = `sms:${this.phoneNumber}`;
    }  else {
      this.showToast('전화번호를 입력해주세요');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message : message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
