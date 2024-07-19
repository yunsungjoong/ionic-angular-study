import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { App as CapacitorApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private lastBackPressTime: number = 0;
  private timePeriodToExit: number = 2000;

  constructor(
    private platform: Platform,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.setStatusBar();
        CapacitorApp.addListener('backButton', ({ canGoBack }) => {
          if (canGoBack) {
            window.history.back();
          } else {
            this.handleBackButton();
          }
        });
      }
    });
  }

  async setStatusBar() {
    await StatusBar.setStyle({ style: Style.Dark});
    await StatusBar.setBackgroundColor({ color: '#7D76D3' });
    await StatusBar.setOverlaysWebView({ overlay: true });
  }
  async handleBackButton() {
    const currentTime = new Date().getTime();
    if (currentTime - this.lastBackPressTime < this.timePeriodToExit) {
      CapacitorApp.exitApp();
    } else {
      this.lastBackPressTime = currentTime;
      const toast = await this.toastController.create({
        message: '뒤로 버튼을 한번 더 누르시면 앱이 종료됩니다',
        duration: 2000,
        position: 'bottom',
      });
      await toast.present();
    }
  }


}