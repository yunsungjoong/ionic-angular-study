import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private lastBackPressed = 0; // 마지막으로 뒤로가기 버튼을 누른 시간
  private readonly exitDelay = 2000; // 뒤로가기 두 번 누르는 시간 간격 (2초)

  constructor(
    private alertController: AlertController,
    private platform: Platform
  ) {
    this.initializeApp();
    this.platform.ready().then(() => {
      this.initializeBackButtonHandler();
    });
  }

  

  // 뒤로가기 버튼 두 번 누르면 앱 종료
  initializeBackButtonHandler() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currentTime = new Date().getTime();

      if (currentTime - this.lastBackPressed < this.exitDelay) {
        console.log('앱 종료');
        App.exitApp();
      } else {
        this.lastBackPressed = currentTime;
        console.log('뒤로가기 버튼 첫 번째 눌림');
        const toast = document.createElement('ion-toast');
        toast.message = '뒤로가기 버튼을 한 번 더 누르면 앱이 종료됩니다.';
        toast.duration = this.exitDelay;
        toast.position = 'bottom';

        document.body.appendChild(toast);
        await toast.present();
      }
    });
  }

  // 앱 초기화
  initializeApp() {
    this.platform.resume.subscribe(() => {
      console.log('onResume - App Resumed');
      this.presentPopup('onResume', 'onResume 호출');
    });

    this.platform.pause.subscribe(() => {
      console.log('onPause - App Paused');
      this.presentPopup('onPause', 'onPause 호출');
    });
  }

  // 팝업 표시
  async presentPopup(event: string, message: string) {
    console.log(`Popup Event: ${event} - Message: ${message}`);
    const alert = await this.alertController.create({
      header: event,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}