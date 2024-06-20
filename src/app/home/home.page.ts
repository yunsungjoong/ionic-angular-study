import { Component } from '@angular/core';

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
          status:'승인요청'
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
          status:'승인요청'
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
          category:'품의서2',
          subject:'가나다',
          date:'20240102T091900',
          status:'승인요청'
        },
        
        {
          idx:1,
          category:'품의서1',
          subject:'가나다',
          date:'20240102T091900',
          status:'승인요청'
        },

        {     
          id:0,
          category:'품의서0',
          subject:'가나다',
          date:'20240102T091900',
          status:'승인요청'
        },
      ]
    
      trackItems(index: number, item: any) {
        return item.idx;
      }
  
  constructor() {}

}
