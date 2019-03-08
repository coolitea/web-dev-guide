# React

# Facebook Open Source

: https://opensource.facebook.com/#frontend

- React https://reactjs.org/
- Create React App https://facebook.github.io/create-react-app/
  - : Babel 7, webpack 4, and Jest 23.
  - 스타일 : Sass, CSS Module 지원
    - node-sass
    - 파일이름.module.css
  - Babel 7: React fragment 문법 지원
  - Webpack v4: JS 번들 분리
  - Jest23 : 리뷰를 위한 스냅샷 모드
  - PostCSS
  - Apollo, Relay Modern, MDX, and other third-party Babel Macros transforms
  - SVG 를 리액트 컴포넌트화 하여 불러와서 JSX 안에서 사용 가능
    - <code> import { ReactComponent as Logo } from './logo.svg'; </code>
  - proxy 설정을 커스터마이징 가능 : http-proxy-middleware
  - 기본적으로 IE 미지원 - 지원 필요 시 react-app-polyfill
- Jest https://jestjs.io/
- GraphQL https://graphql.org/

# React 적용기

- 네이버
  - 2017.02.09, React 적용 가이드 - React와 Redux https://d2.naver.com/helloworld/1848131
  - 2017.03.13, React 적용 가이드 - React 작동 방법 https://d2.naver.com/helloworld/9297403
  - 2017.04.04, React 적용 가이드 - 네이버 메일 모바일 웹 적용기 https://d2.naver.com/helloworld/4966453
  - 2019.01.07, React와 Apollo, Parcel 기반 서비스 개발 https://d2.naver.com/helloworld/2838729
- (카카오) Apr 23, 2018, 카카오페이지 웹 React 포팅 후기 https://medium.com/@ljs0705/카카오페이지-웹-react-포팅-후기-76402cc5e031
- (쿠팡) jscon 2016 발표자료, React.js 실서비스 적용기 http://slides.com/roto/react-js-live-service
- (VCNC) November 10, 2014, 비트윈 PC 버전 개발기 http://engineering.vcnc.co.kr/2014/11/between-pc-version/
  - React
  - (자바스크립트 모듈 시스템) CommonJS, ECMAScript6, jstransform
  - (플러그인) jsx-loader, less-loader, css-loader, url-loader
  - (빌드) Webpack
  - (Promise/A+ 구현) RSVP.js
  - (다국어, 국제화) FormatJS https://formatjs.io/

# 참고

- 4월 14, 2016 , 안녕, 리액트(Hello, React) https://blog.gaerae.com/2016/04/hello-react.html
- 2018년 10월 2일, Create-react-app V2 릴리즈! https://velog.io/@velopert/create-react-app-v2
- Dec 2, 2011, (Instagram )What Powers Instagram
  - (OS / Hosting) Ubuntu Linux 11.04 (“Natty Narwhal”) on Amazon EC2
  - (Load Balancing) run 2 nginx machines and DNS Round-Robin between them.
  - (Application Servers) Djangoon Amazon High-CPU Extra-Large machines
  - (Data storage) PostgreSQL
