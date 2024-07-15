import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

// plugIn ++ 
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  phoneNumber: string // 사용자 입력한 전화번호

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private callNumber: CallNumber,
    private sms: SMS,
    private inAppBrowser: InAppBrowser,
  ) { 
    this.initializeApp(); 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);  // 상대표시줄 오버레이 X 
      this.statusBar.styleDefault(); // 기본 스타일로 설정
      this.statusBar.backgroundColorByHexString('#7D76D3'); // 배경 변경
      this.splashScreen.hide();
    });
  }

  call() {
    const telUri = `tel:${this.phoneNumber}`;
    this.inAppBrowser.create(telUri, '_system');
  }

  sendSMS() {
    const smsUri = `sms:${this.phoneNumber}`;
    this.inAppBrowser.create(smsUri, '_system');
  }



}
