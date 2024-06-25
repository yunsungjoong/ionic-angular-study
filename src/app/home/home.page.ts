import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    testDataArr = [
        {
          idx:10,
          category:'대외공문',
          subject:'가나다10',
          date:'20240102T091900',
          status:'승인요청'
        },
      
        {
          idx:9,
          category:'대외공문',
          subject:'가나다9',
          date:'20240102T091000',
          status:'검토요청'
        },
      
        {
          idx:8,
          category:'품의서',
          subject:'가나다8',
          date:'20240102T091900',
          status:'승인요청'
        },
      
        {
          idx:7,
          category:'품의서',
          subject:'가나다7',
          date:'20240102T091900',
          status:'검토요청'
        },
      
        {
          idx:6,
          category:'품의서',
          subject:'가나다6',
          date:'20240102T091900',
          status:'승인요청'
        },
      
        {
          idx:5,
          category:'품의서',
          subject:'가나다5',
          date:'20240102T091900',
          status:'승인요청'
        },
      
        {
          idx:11,
          category:'품의서',
          subject:'가나다11',
          date:'20240102T091900',
          status:'승인요청'
        },
      
        {
          idx:12,
          category:'대외공문',
          subject:'가나다12',
          date:'20240102T091900',
          status:'승인요청'
        },
      
        {
          idx:3,
          category:'품의서',
          subject:'가나다3',
          date:'20240102T091900',
          status:'승인요청'
        },
      
        {
          idx:4,
          category:'대외공문',
          subject:'가나다4',
          date:'20240102T091900',
          status:'승인요청'
        },
      
        {
          idx:2,
          category:'품의서',
          subject:'가나다2',
          date:'20240102T091900',
          status:'승인요청'
        },
        
        {
          idx:1,
          category:'품의서',
          subject:'가나다1',
          date:'20240102T091900',
          status:'승인요청'
        },

        {     
          idx:0,
          category:'품의서',
          subject:'가나다0',
          date:'20240102T091900',
          status:'승인요청'
        },
      ]
    
  ascendingOrder = true;
  
  constructor(private router: Router) {
    this.sortData();
  }

  
  toggleDirection() {
    this.ascendingOrder = !this.ascendingOrder; // 방향 토글
    this.sortData(); // 정렬함수 호출
  }


  // 정렬버튼 - 오름차순 , 내림차순 
  sortData() {
    if (this.ascendingOrder) {
      this.testDataArr.sort((a,b) => a.idx - b.idx);  
    } else {
      this.testDataArr.sort((a,b) => b.idx - a.idx);
    }

  }

  
  refreshDefault() {
    // 페이지 새로고침 
    window.location.reload();

  }
  navigateToDetail(event: Event, itemId: number): void {
    event.stopPropagation();
    this.router.navigate(['/item-detail', itemId]); // 라우터에 데이터 전달 (id만 전달)
  }
}
