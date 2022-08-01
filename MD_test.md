# 📌 프로젝트에 대해

## 이 프로젝트를 시작한 계기

1. 강의를 들으며 배운 것들을 내 것으로 녹여내기 위해서
2. 나에게 실제로 필요한 기능을 구현하기 위해서
3. 배포하여 내 지인들이 편리하게 사용할 수 있도록 하기 위해서

## 활용 할 것들

- useReducer
- Firebase에 DB GET, PUSH -> try...catch
- Firebase 배포
- 메모이징

## 구성

1. DiaryList > DiaryTable > AddDiaryItem(다이어리 추가), DiaryItem(기존의 다이어리)

## 기능

1. 날짜,비용,지출내역 input으로 받기 -> Firebase에 기록
2. 캘린더식으로 날짜별 지출금액 한 눈에 보기

# 📌 일차별 작업

> ## 1일차

## 환경 세팅

## 1) CRA

```
$ npx create-react-app "(폴더 이름)"
```

## 2) git 연결

1. github에서 repository 생성  
   [github repository](https://github.com/gueit214)

2. git 초기화

```
$ git init
```

3. git repository에 연결

```
$ git remote add origin (repository주소)
```

## 3) Firebase 연결

1. Firebase에서 로그인
   [Firebase](https://firebase.google.com/?hl=ko)
2. 프로젝트 만들기
3. firebase init (firebase로그인 & 설치 되어있다는 전제)

- y > Hosting 첫 번째 > use~ > 프로젝트 선택 > 엔터 > n > n > n

4. 로컬환경에서 테스트  
   $ firebase serve --only hosting
5. 배포  
   $ firebase deploy

## 프로젝트 셋팅

1. [라우터 연결](https://reactrouter.com/docs/en/v6)

2. [Bootstrap 연결](https://getbootstrap.com/docs/5.2/getting-started/introduction/)  
   [자주 쓰는 Bootstrap](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=captain337s&logNo=221628672453)

3. [scss 연결](https://heropy.blog/2018/01/31/sass/)

```
$ npm install node-sass
```

4. [Font 연결](https://fonts.google.com/)
5. [Icon 연결](https://fonts.google.com/icons)
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

6. [css reset cdn](https://www.jsdelivr.com/package/npm/reset-css)

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"> 추가
```

## 내부 구성

1. Readme 작성
2. 구성 요소 계획 짜기
3. Header 만들기
4. Diarytable,DiaryItem,AddDiaryItem 내부구성

> ## 2일차

## 내부 구성

1. input 세팅
2. input 입력 되면 리스트에 추가 (useReducer 활용) -> type="ADD"
3. Firebase에 데이터 저장 & 가져오기
