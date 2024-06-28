# Ionic angular itemList 


<b>간단한 리스트 클릭시 상세로 이동하는 앱 입니다.</b>

![Ionic-App_](https://github.com/yunsungjoong/ionic-angular-study/assets/96567925/07956272-5abb-4714-a5bf-3fff5aa23eb7)


### 개발환경
- ionic (CLI) 5.4.16
- Angular CLI: 18.0.4
- node 18.20.3 ( Package Manager : npm 10.7.0 )


### 시작하기 

- nvm use 18 
- ionic s

```
// 노드버전 18으로 없다면 설치 ( nvm install 18 )
nvm use 18  // 버전 수정 후  

// 프로젝트 시작하기 
ionic s
```

---

## Angular & Ionic 프로젝트 과제

###  첨부파일에 나온대로 프로젝트 생성

- 간단한 리스트 클릭시 상세로 이동하는 앱
- UI는 깔끔하게 
- Data는 제공   


Data는 

```javascript
testDataArr = [
    {
    idx: 10,
    category: '대외공문',
    subject: '가나다10',
    date: '2024-01-02T09:19:00',
    status: '승인요청'
    },
    {
    idx: 9,
    category: '대외공문',
    subject: '가나다9',
    date: '2024-01-02T09:10:00',
    status: '검토요청'
    },
    {
    idx: 8,
    category: '품의서',
    subject: '가나다8',
    date: '2024-01-02T09:19:00',
    status: '승인요청'
    },
    {
    idx: 7,
    category: '품의서',
    subject: '가나다7',
    date: '2024-01-02T09:19:00',
    status: '검토요청'
    },
    {
    idx: 6,
    category: '품의서',
    subject: '가나다6',
    date: '2024-01-02T09:19:00',
    status: '승인요청'
    },
    {
    idx: 5,
    category: '품의서',
    subject: '가나다5',
    date: '2024-01-05T09:19:00',
    status: '승인요청'
    },
    {
    idx: 11,
    category: '품의서',
    subject: '가나다11',
    date: '2024-01-05T09:19:00',
    status: '승인요청'
    },
    {
    idx: 12,
    category: '대외공문',
    subject: '가나다12',
    date: '2024-01-08T09:19:00',
    status: '승인요청'
    },
    {
    idx: 3,
    category: '품의서',
    subject: '가나다3',
    date: '2024-01-02T09:19:00',
    status: '승인요청'
    },
    {
    idx: 4,
    category: '대외공문',
    subject: '가나다4',
    date: '2024-01-09T09:19:00',
    status: '승인요청'
    },
    {
    idx: 2,
    category: '품의서',
    subject: '가나다2',
    date: '2024-01-04T09:19:00',
    status: '승인요청'
    },
    {
    idx: 1,
    category: '품의서',
    subject: '가나다1',
    date: '2024-01-02T09:19:00',
    status: '승인요청'
    },
    {
    idx: 0,
    category: '품의서',
    subject: '가나다0',
    date: '2024-01-03T09:19:00',
    status: '승인요청'
    }
]
```