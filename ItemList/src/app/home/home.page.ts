import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';

interface TestData {
  idx: number;
  category: string;
  subject: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  testDataArr: TestData[] = [
    { idx: 10, category: '대외공문', subject: '가나다10', date: '2024-01-02T09:19:00', status: '승인요청' },
    { idx: 9, category: '대외공문', subject: '가나다9', date: '2024-01-02T09:10:00', status: '검토요청' },
    { idx: 8, category: '품의서', subject: '가나다8', date: '2024-01-02T09:19:00', status: '승인요청' },
    { idx: 7, category: '품의서', subject: '가나다7', date: '2024-01-02T09:19:00', status: '검토요청' },
    { idx: 6, category: '품의서', subject: '가나다6', date: '2024-01-02T09:19:00', status: '승인요청' },
    { idx: 5, category: '품의서', subject: '가나다5', date: '2024-01-05T09:19:00', status: '승인요청' },
    { idx: 11, category: '품의서', subject: '가나다11', date: '2024-01-05T09:19:00', status: '승인요청' },
    { idx: 12, category: '대외공문', subject: '가나다12', date: '2024-01-08T09:19:00', status: '승인요청' },
    { idx: 3, category: '품의서', subject: '가나다3', date: '2024-01-02T09:19:00', status: '승인요청' },
    { idx: 4, category: '대외공문', subject: '가나다4', date: '2024-01-09T09:19:00', status: '승인요청' },
    { idx: 2, category: '품의서', subject: '가나다2', date: '2024-01-04T09:19:00', status: '승인요청' },
    { idx: 1, category: '품의서', subject: '가나다1', date: '2024-01-02T09:19:00', status: '승인요청' },
    { idx: 0, category: '품의서', subject: '가나다0', date: '2024-01-03T09:19:00', status: '승인요청' },
  ];

  ascendingOrder: boolean = true;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private platform: Platform
  ) {
    console.log('HomePage Constructor');
    
  }

  

  /**
   * 라이프사이클 - OnInit
   */
  ngOnInit(): void {
    console.log('ngOnInit: HomePage 초기화');
    this.presentPopup('ngOnInit', '앱 컴포넌트 초기화 ');
    this.sortData(); // 초기 정렬
  }
  
  /**
   * 라이프사이클 - OnDestroy
   */
  ngOnDestroy(): void {
    console.log('ngOnDestroy: HomePage Destroyed');
    this.presentPopup('ngOnDestroy', 'Home 종료');
  }

  /**
   * Ionic View 라이프사이클 이벤트
   */
  ionViewWillEnter(): void {
    console.log('ionViewWillEnter: View is about to enter');
    this.presentPopup('ionViewWillEnter', '페이지가 표시되기 직전에 호출됩니다.');
  }

  ionViewDidEnter(): void {
    console.log('ionViewDidEnter: View has entered');
    this.presentPopup('ionViewDidEnter', '페이지가 완전히 표시된 후 호출됩니다.');
  }

  ionViewWillLeave(): void {
    console.log('ionViewWillLeave: View is about to leave');
    this.presentPopup('ionViewWillLeave', '페이지가 떠나기 직전에 호출됩니다.');
  }

  ionViewDidLeave(): void {
    console.log('ionViewDidLeave: View has left');
    this.presentPopup('ionViewDidLeave', '페이지가 완전히 떠난 후 호출됩니다');
  }

  /**
   * 정렬 방향 변경 및 데이터 정렬
   */
  toggleDirection(): void {
    this.ascendingOrder = !this.ascendingOrder;
    this.sortData();
    console.log('Data sorting toggled. New order:', this.ascendingOrder ? 'Ascending' : 'Descending');
  }

  /**
   * 데이터를 idx 기준으로 정렬
   */
  sortData(): void {
    this.testDataArr.sort((a, b) => {
      return this.ascendingOrder ? a.idx - b.idx : b.idx - a.idx;
    });
    console.log('Data sorted:', this.testDataArr);
  }

  /**
   * 페이지 새로고침
   */
  refreshDefault(): void {
    console.log('Page refreshed');
    window.location.reload();
  }

  /**
   * 상세 페이지로 이동
   * @param event - 클릭 이벤트
   * @param itemId - 이동할 아이템의 ID
   */
  navigateToDetail(event: Event, itemId: number): void {
    event.stopPropagation();
    console.log('Navigating to detail page with ID:', itemId);
    this.router.navigate(['/item-detail', itemId]);
  }

  /**
   * 팝업 메시지 표시
   * @param title - 팝업 제목
   * @param message - 팝업 메시지
   */
  async presentPopup(title: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}