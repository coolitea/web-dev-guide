# 웹 개발 가이드

모바일 우선주의 웹사이트 개발 방법 가이드

## 사전 준비

웹표준을 지원하는 브라우저가 설치되어 있어야 합니다. 권장 브라우저는 [크롬](https://www.google.com/intl/ko_ALL/chrome/)이며, 지원 대상 브라우저는 아래와 같습니다.

- [크롬](https://www.google.com/intl/ko_ALL/chrome/) (Chrome)
- [파이어폭스](https://www.mozilla.org/ko/firefox/new/) (FireFox)
- [오페라](https://www.opera.com/ko) (Opera)
- [IE 11](https://support.microsoft.com/ko-kr/help/17621/internet-explorer-downloads) - Windows 7 사용자용
- [사파리](https://www.apple.com/kr/safari/) (Safari)

## 웹 개발의 기초

- 모바일 우선 주의 (Mobile First Design)

  - [반응형 웹 디자인 (Responsive Web Design)](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns?hl=ko)

    - 핵심 기술 : 가변 그리드(fluid grid), 유연한 이미지(flexible images), 미디어 쿼리(media query)
    - Imagemin (이미지 압축 기술)
    - [WebP](https://ko.wikipedia.org/wiki/WebP)와 같은 이미지 형식 사용

  - [프로그레시브 웹 앱 (Progressive Web App, PWA)](https://developer.mozilla.org/ko/docs/Apps/Progressive)

## 데모 사이트

[전자투표 데모 사이트](https://coolitea.github.io/evote-clone-with-bootstrap/) - 부트스트랩 사용

## 개발 언어

- HTML5
- CSS
- 자바스크립트 (JavaScript)

## 사용 라이브러리 (프레임워크)

- [부트스트랩](http://bootstrapk.com/) (Bootstrap ver.4.1.3) - 가장 인기 있는 HTML, CSS 및 JS 프레임워크 (라이브러리)
- [폰트어썸](http://fontawesome.io) (Font Awesome ver.5) - 가장 인기있는 아이콘과 도구 모음

## 개발 도구

[비주얼 스튜디오 코드](https://azure.microsoft.com/ko-kr/products/visual-studio-code/), [아톰](<https://ko.wikipedia.org/wiki/%EC%95%84%ED%86%B0_(%EB%AC%B8%EC%84%9C_%ED%8E%B8%EC%A7%91%EA%B8%B0)>) 등 본인에게 편리한 개발 도구를 사용합니다.

- Atom 플러그인

  - [minimap](https://atom.io/packages/minimap) - 전체 소스 미리보기 지도
  - [Emmet](<https://ko.wikipedia.org/wiki/%EC%97%90%EB%B0%8B_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)>) - HTML, CSS 웹 개발 생산성 향상 도구 (자동 완성)
  - [prettier-Atom](https://atom.io/packages/prettier-atom) - 포맷 맞추기 (저장 시 자동 적용 가능)
  - [pigments](https://atom.io/packages/pigments) - 파일 내에서 색상 표현
  - [gitplus](https://atom.io/packages/git-plus) - Git 터미널 없이 사용
  - [color-picker](https://atom.io/packages/color-picker)- 색상 추출

## 디버깅 및 성능 개선

- [크롬 개발자 도구](https://developers.google.com/web/tools/chrome-devtools/?hl=ko) (Chrome DevTools) - 디버깅 도구
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/v3/scoring?hl=ko) - 웹 앱의 품질을 개선하는 오픈 소스 자동화 도구
- [구글 페이지 스피드 인사이트](https://developers.google.com/speed/pagespeed/insights/?hl=ko) (Page Speed Insights) -
  웹 사이트 속도 측정 및 개선 방법 추천

## 버전 관리

- [깃 (Git)](<https://ko.wikipedia.org/wiki/%EA%B9%83_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)>) - 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템이다. 소프트웨어 개발에서 소스 코드 관리에 주로 사용된다.
- [깃허브 (GitHub)](https://ko.wikipedia.org/wiki/%EA%B9%83%ED%97%88%EB%B8%8C) - 분산 버전 관리 툴인 깃(Git)을 사용하는 프로젝트를 지원하는 웹호스팅 서비스. (private repository 사용)

## 유용한 크롬 확장 프로그램

- [Page Ruler](https://chrome.google.com/webstore/detail/page-ruler/emliamioobfffbgcfdchabfibonehkme) - 웹 페이지 컴포넌트 사이즈 측정
- [ColorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?catego...&hl=ko) - 색상 값 추출

## 작성자

- **박현정** - 최초 작성

## 관련 법규

### [개인정보 보호법](http://www.law.go.kr/법령/개인정보보호법)

- 개인정보 영향평가에 관한 고시
- 개인정보의 안전성 확보조치 기준
- 개인정보 영향평가에 관한 고시
- 표준 개인정보 보호지침

### [전자정부법](http://www.law.go.kr/법령/전자정부법)

- [모바일 전자정부 서비스 관리 지침](http://www.law.go.kr/행정규칙/모바일전자정부서비스관리지침)
- [행정기관 및 공공기관 정보시스템 구축·운영 지침](http://www.law.go.kr/행정규칙/행정기관및공공기관정보시스템구축·운영지침)
- [전자정부서비스 호환성 준수지침](http://www.law.go.kr/행정규칙/전자정부서비스호환성준수지침)
- [정보기술아키텍처 도입·운영 지침](http://www.law.go.kr/행정규칙/정보기술아키텍처도입·운영지침)
- [클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률](http://www.law.go.kr/법령/클라우드컴퓨팅발전및이용자보호에관한법률)

  - [씨앗](https://www.ceart.kr/) - 클라우드 스토어. 클라우드 관련 정보
  - 행안부 '공공기관 민간 클라우드 이용가이드' 폐지

- [전자정부 성과관리 지침](http://www.law.go.kr/admRulLsInfoP.do?admRulSeq=2100000113669)

### [국가정보화 기본법](http://www.law.go.kr/법령/국가정보화기본법)

- [웹 접근성 품질인증기관 지정 및 품질인증 등에 관한 고시](http://www.law.go.kr/행정규칙/웹접근성품질인증기관지정및품질인증등에관한고시)

### [전자서명법](http://www.law.go.kr/법령/전자서명법)

### [정보통신망 이용촉진 및 정보보호 등에 관한 법률](http://www.law.go.kr/법령/정보통신망이용촉진및정보보호등에관한법률)

### [장애인차별금지 및 권리구제 등에 관한 법률](http://www.law.go.kr/법령/장애인차별금지및권리구제등에관한법률)

- [장애인·고령자 등의 정보 접근 및 이용 편의 증진을 위한 고시](http://www.law.go.kr/행정규칙/장애인·고령자등의정보접근및이용편의증진을위한고시)

### [공공데이터의 제공 및 이용 활성화에 관한 법률](http://www.law.go.kr/법령/공공데이터의제공및이용활성화에관한법률)

- [공공기관의 데이터베이스 표준화 지침](http://www.law.go.kr/행정규칙/공공기관의데이터베이스표준화지침)
- [공공데이터 품질관리 매뉴얼](https://www.data.go.kr/information/PDS_0000000000000516/recsroom.do) v2.0

### 행정안정부

- [행정안정부 정보화 표준·지침 자료실](https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardList.do?bbsId=BBSMSTR_000000000045)
  - [공공 웹사이트 플러그인 제거 가이드라인](https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000045&nttId=66932) - 2020년까지 완료 목표

### 금융위원회

- [금융위 법령정보](http://www.fsc.go.kr/know/indexS.jsp?menu=7400000)

### 한국인터넷진흥원

- [한국인터넷진흥원 기술안내서 가이드](http://www.kisa.or.kr/public/laws/laws3.jsp)

### [금융보안원](http://www.fsec.or.kr/)

### 국립전파연구원

- [한국형 웹 콘텐츠 접근성 지침 2.1](https://www.wah.or.kr:444/Participation/guide.asp)

### [한국정보화진흥원](https://www.nia.or.kr/)

- [범정부EA포털](https://www.geap.go.kr/) (https://www.geap.go.kr/) 사이트에 우리 회사의 EA 정보가 등록되어 관리되고 있습니다. (회원 가입 필요)

## 학습 자료

### 한글 학습 자료

- [노마드 아카데미](https://academy.nomadcoders.co/blog/15754/order/) - 기존 서비스를 따라 만들며 배우는 컨셉의 동영상 강의 (한글 자막)

- [MDN - Web 개발 학습하기](https://developer.mozilla.org/ko/docs/Learn) - 좋은 학습 관련 사이트 모음 있음
- [Bootstrap (한글 번역)](http://bootstrapk.com/) - 비공식 사이트
- [Git 가이드북 한글](https://git-scm.com/book/ko/v2)
- [웹 UX 기초](https://developers.google.com/web/fundamentals/design-and-ux/ux-basics/?hl=ko) - 구글 개발자 웹 기초 가이드

### 영어 학습 자료

- [MDN](https://developer.mozilla.org/en-US/docs/Web/)
- [Bootstrap](https://getbootstrap.com/) - 공식 사이트
- [Git Book](https://git-scm.com/book/en/v2)
- [w3schools HTML5](https://www.w3schools.com/html/)
- [w3schools CSS](https://www.w3schools.com/css/)
- [w3schools Java Script](https://www.w3schools.com/js/)
- [Google Developers - Web](https://developers.google.com/web/)
- [BEM](http://getbem.com/introduction/)(Blocks, Elements and Modifiers) - 프론트엔드 컴포넌트 명명 규칙
- [World Wide Web Consortium](https://www.w3.org/)(W3C) - 월드 와이드 웹을 위한 표준을 개발하고 장려하는 조직

### 웹 개발 도구 관련 참고 사이트 (영문)

- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/) - Emmet 단축키
- [GitHub Desktop](https://desktop.github.com/)
- [Imagemin](https://web.dev/fast/use-imagemin-to-compress-images) - 이미지 압축
- [Flat UI Colors](https://flatuicolors.com/) - 플랫 UI 색상 팔레트
- [Browser Market Share](http://gs.statcounter.com/browser-market-share/) - 브라우저별 시장 점유율
- [ECMAScript compatibility table](http://kangax.github.io/compat-table/es6/) - 브라우저별 ECMAScript 호환성

## 추후 연구 대상

- [리액트](http://reactjs.org) (React) - 자바스크립트 라이브러리
- [타입스크립트](https://www.typescriptlang.org/) (TypeScript) - 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어. 마이크로소프트에서 개발, 유지하고 있으며 엄격한 문법을 지원한다.
