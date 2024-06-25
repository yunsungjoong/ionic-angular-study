import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private testDataArr = [
    {
      idx: 10,
      category: '대외공문',
      subject: '가나다10',
      date: '20240102T091900',
      status: '승인요청'
    },
    {
      idx: 9,
      category: '대외공문',
      subject: '가나다9',
      date: '20240102T091000',
      status: '검토요청'
    },
    {
      idx: 8,
      category: '품의서',
      subject: '가나다8',
      date: '20240102T091900',
      status: '승인요청'
    },
    {
      idx: 7,
      category: '품의서',
      subject: '가나다7',
      date: '20240102T091900',
      status: '검토요청'
    },
    {
      idx: 6,
      category: '품의서',
      subject: '가나다6',
      date: '20240102T091900',
      status: '승인요청'
    },
    {
      idx: 5,
      category: '품의서',
      subject: '가나다5',
      date: '20240102T091900',
      status: '승인요청'
    },
    {
      idx: 11,
      category: '품의서',
      subject: '가나다11',
      date: '20240102T091900',
      status: '승인요청'
    },
    {
      idx: 12,
      category: '대외공문',
      subject: '가나다12',
      date: '20240102T091900',
      status: '승인요청'
    },
    {
      idx: 3,
      category: '품의서',
      subject: '가나다3',
      date: '20240102T091900',
      status: '승인요청'
    },
    {
      idx: 4,
      category: '대외공문',
      subject: '가나다4',
      date: '20240102T091900',
      status: '승인요청'
    },
    {
      idx: 2,
      category: '품의서',
      subject: '가나다2',
      date: '20240102T091900',
      status: '승인요청'
    },
    {
      idx: 1,
      category: '품의서',
      subject: '가나다1',
      date: '20240102T091900',
      status: '승인요청'
    },
    {
      idx: 0,
      category: '품의서',
      subject: '가나다0',
      date: '20240102T091900',
      status: '승인요청'
    },
  ];

  getData() {
    return this.testDataArr;
  }

  getItemById(id: number) {
    return this.testDataArr.find(item => item.idx === id);
  }

  updateItemStatus(id: number, status: string) {
    const item = this.getItemById(id);
    if (item) {
      item.status = status;
    }
  }
}