# React

# Create React App V2

: Babel 7, webpack 4, and Jest 23.

- 스타일 : Sass, CSS Module 지원
  - node-sass
  - 파일이름.module.css
- Babel 7
  - React fragment 문법 지원
- Webpack v4
  - JS 번들 분리
- Jest23 : 리뷰를 위한 스냅샷 모드
- PostCSS
- Apollo, Relay Modern, MDX, and other third-party Babel Macros transforms
- SVG 를 리액트 컴포넌트화 하여 불러와서 JSX 안에서 사용 가능
  - <code> import { ReactComponent as Logo } from './logo.svg'; </code>
- proxy 설정을 커스터마이징 가능
  - http-proxy-middleware
- 기본적으로 IE 미지원
  - 지원 필요 시 react-app-polyfill

출처 https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

# 참고

- https://velog.io/@velopert/create-react-app-v2

- [x] Create React App https://facebook.github.io/create-react-app/
  - <code> yarn create react-app my-app-name </code>
