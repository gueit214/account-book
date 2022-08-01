# 프로젝트 설치 순서

## 1) CRA

1. $ npx create-react-app "(폴더 이름)"

## 2) git 연결

1. github에서 repository 생성  
   [githyb repository](https://github.com/gueit214)
2. $ git init
3. $ git remote add origin (repository주소)

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

<br /><br />

# 💸AB(Account Book, 가계부를 적다)

## 🚀 Hosting URL

[AB웹사이트](https://account-book-d2459.web.app/)

## 🎈 사용 목적 및 소개

- 가계부를 어디에 적어야할지 모르겠다구요? 가계부에 대한 모든 것은 여기에 !!

<!-- ## 💻 Project Structure
```
📦 src
 ┣ 📂 assets
 ┃ ┣ 📂 css
``` -->

<!-- ## 👜구성
 -->

## 👉 개발 기간

- 2022.08.1 ~

## 🚀 프로젝트 주 차별 계획 및 회고

| 👉 주차 |                            계획                             |    회고    |
| :-----: | :---------------------------------------------------------: | :--------: |
| 1 주차  | [:link:](https://github.com/gueit214/account-book/issues/1) | [:link:]() |

## 📚 Project Settings

#### 📢 Install npm dependencies

```bash
> npm install
```

#### 📢 Start dev-server

```bash
> npm run start
```

#### 📢 Run tests

- Run unit test and e2e test

```bash
> npm test
```

- unit test

```bash
> npm run test:unit
```

- Run e2e test

```bash
> npm run test:e2e
```

#### 📢 Run build project

```bash
> npm build
```

#### 📢 Run Lint

```bash
> npm run lint
```

#### 📢 Run Coverage

```bash
> npm run coverage
```

- 자세한 사항은 `package.json`의 `scripts` 참고

## 📚 Getting start with firebase

- [Firebase](https://firebase.google.com/)
- [Docs](https://firebase.google.com/docs/cli?hl=ko)

#### 📢 Initial firebase setup

- Install firebase-tools

```bash
> npm install -g firebase-tools
```

- Login to firebase

```bash
> firebase login
```

- Deploy with firebase hosting

```bash
> firebase deploy
```

<!--
## 🔥 기술 스택 및 사용 라이브러리
- React
- Redux, Redux-Toolkit, Redux-Thunk
- React Router Dom
- React Helmet
- React Use
- Emotion, facepaint, react-responsive
- Firebase, FireStore
- Jest, React Testing Library, CodeceptJS
- Webpack, Eslint, Babel
- Immer
- Moment, React-moment
- draft-js, react-draft-wysiwyg
- react-content-loader

## 🦄 Demo Image

#### 👉 DeskTop

![desktop-demo]()

#### 👉 Mobile

<img src="" width="600px" > -->
