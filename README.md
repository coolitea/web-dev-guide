# 웹 개발 가이드

모바일 우선주의 웹사이트 개발 방법 가이드

## 사전 준비

웹표준을 지원하는 브라우저가 설치되어 있어야 합니다. 권장 브라우저는 [크롬](https://www.google.com/intl/ko_ALL/chrome/)이며, 지원 대상 브라우저는 아래와 같습니다.

- [Chrome](https://www.google.com/chrome/)
- [FireFox](https://www.mozilla.org/firefox/)
- [Opera](https://www.opera.com)
- [IE 11](https://support.microsoft.com/ko-kr/help/17621/internet-explorer-downloads) - Windows 7 사용자용
- [Safari](https://www.apple.com/kr/safari/)

## 웹 개발의 기초

- 모바일 우선주의 (Mobile First Design)

  - [반응형 웹 디자인 (Responsive Web Design)](https://developers.google.com/web/fundamentals/design-and-ux/responsive/) : fluid grids, flexible images, and media queries

    - [Imagemin](https://web.dev/fast/use-imagemin-to-compress-images) - 이미지 압축
    - [WebP](https://developers.google.com/web/tools/lighthouse/audits/webp)와 같은 이미지 형식을 사용

  - [Progressive Advancement](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive) & [Graceful Degradation](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation)

    - [프로그레시브 웹 앱스 (Progressive Web App, PWA)](https://developers.google.com/web/fundamentals/architecture/app-shell) : [애플리케이션 셸(또는 앱 셸)](https://developers.google.com/web/fundamentals/architecture/app-shell) 아키텍처. [Service Worker](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers) 등 사용.

* [웹 기초](https://developers.google.com/web/fundamentals/) - 구글 개발자 웹 기초 가이드
* [BEM](http://getbem.com/) - 프론트엔드 컴포넌트 명명 규칙

## 데모 사이트

[전자투표 데모 사이트](https://coolitea.github.io/evote-clone-with-bootstrap/) - 부트스트랩 사용

## 사용 기술

- [HTML5](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [Java Script](https://www.w3schools.com/js/)

## 사용 라이브러리

- [Bootstrap](https://getbootstrap.com/) ver.4.1.3 - 가장 인기 있는 HTML, CSS 및 JS 라이브러리 (프레임워크)
- [Font Awesome](http://fontawesome.io) ver.5 - 가장 인기있는 아이콘과 도구 모음

## 버전 관리

- [Git](https://git-scm.com/) - 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템이다. 소프트웨어 개발에서 소스 코드 관리에 주로 사용된다.
- [Git hub (private repository)](https://github.com) - 분산 버전 관리 툴인 깃(Git)을 사용하는 프로젝트를 지원하는 웹호스팅 서비스

## 개발 도구

[Atom](https://atom.io/), [Visual Studio Code](https://code.visualstudio.com/) 등 본인에게 편리한 개발 도구를 사용합니다.

- Atom 플러그인

  - [minimap](https://atom.io/packages/minimap) - 전체 소스 미리보기 지도
  - [Emmet](https://docs.emmet.io/) - HTML, CSS 웹 개발 생산성 향상 도구 (자동 완성)
  - [prettier-Atom](https://atom.io/packages/prettier-atom) - 포맷 맞추기 (저장 시 자동 적용 가능)
  - [pigments](https://atom.io/packages/pigments) - A package to display colors in project and files.
  - [gitplus](https://atom.io/packages/git-plus) - Do git things without the terminal.
  - [color-picker](https://atom.io/packages/color-picker)- Right click or press CMD-SHIFT-C/CTRL-ALT-C to open it.

## 디버깅 및 성능 개선

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) - 크롬 개발자 도구. 디버깅에 사용
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - 웹 앱의 품질을 개선하는 오픈 소스 자동화 도구
- [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/) -
  웹 사이트 속도 측정 및 개선 방법 추천

## 유용한 크롬 확장 프로그램

- [Page Ruler](https://chrome.google.com/webstore/detail/page-ruler/emliamioobfffbgcfdchabfibonehkme/related?hl=en) - 웹 페이지 사이즈 픽셀 측정
- [ColorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp/related?hl=en) - 색상 값 추출 도구

## 작성자

- **박현정** - 최초 작성

## 관련 법규

### [전자정부법](http://www.law.go.kr/법령/전자정부법)

- [모바일 전자정부 서비스 관리 지침](http://www.law.go.kr/행정규칙/모바일전자정부서비스관리지침)
- [행정기관 및 공공기관 정보시스템 구축·운영 지침](http://www.law.go.kr/행정규칙/행정기관및공공기관정보시스템구축·운영지침)
- [전자정부서비스 호환성 준수지침](http://www.law.go.kr/행정규칙/전자정부서비스호환성준수지침)
- [정보기술아키텍처 도입·운영 지침](http://www.law.go.kr/행정규칙/정보기술아키텍처도입·운영지침)
- [클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률](http://www.law.go.kr/법령/클라우드컴퓨팅발전및이용자보호에관한법률)

  - [씨앗](https://www.ceart.kr/) - 클라우드 스토어. 클라우드 관련 정보
  - 행안부의 ‘공공기관 민간 클라우드 이용가이드’가 아래 기사와 같이 전면 폐지됨

- [전자정부 성과관리 지침](http://www.law.go.kr/admRulLsInfoP.do?admRulSeq=2100000113669)

### [국가정보화 기본법](http://www.law.go.kr/법령/국가정보화기본법)

- [웹 접근성 품질인증기관 지정 및 품질인증 등에 관한 고시](http://www.law.go.kr/행정규칙/웹접근성품질인증기관지정및품질인증등에관한고시)

### [장애인차별금지 및 권리구제 등에 관한 법률](http://www.law.go.kr/법령/장애인차별금지및권리구제등에관한법률)

- [장애인·고령자 등의 정보 접근 및 이용 편의 증진을 위한 고시](http://www.law.go.kr/행정규칙/장애인·고령자등의정보접근및이용편의증진을위한고시)

### [공공데이터의 제공 및 이용 활성화에 관한 법률](http://www.law.go.kr/법령/공공데이터의제공및이용활성화에관한법률)

- [공공기관의 데이터베이스 표준화 지침](http://www.law.go.kr/행정규칙/공공기관의데이터베이스표준화지침)
- [공공데이터 품질관리 매뉴얼](https://www.data.go.kr/information/PDS_0000000000000516/recsroom.do) v2.0

### [정보통신망 이용촉진 및 정보보호 등에 관한 법률](http://www.law.go.kr/법령/정보통신망이용촉진및정보보호등에관한법률)

### 행정안정부

- [행정안정부 정보화 표준·지침 자료실](https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardList.do?bbsId=BBSMSTR_000000000045)
  - [공공 웹사이트 플러그인 제거 가이드라인](https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000045&nttId=66932)

### 한국인터넷진흥원

- [한국인터넷진흥원 기술안내서 가이드](http://www.kisa.or.kr/public/laws/laws3.jsp)

### 국립전파연구원

- [한국형 웹 콘텐츠 접근성 지침 2.1](https://www.wah.or.kr:444/Participation/guide.asp)

### [개인정보 보호법](http://www.law.go.kr/법령/개인정보보호법)

- 개인정보 영향평가에 관한 고시
- 개인정보의 안전성 확보조치 기준
- 개인정보 영향평가에 관한 고시
- 표준 개인정보 보호지침

### [전자서명법](http://www.law.go.kr/법령/전자서명법)

### 범정부EA포털

[범정부EA포털](https://www.geap.go.kr/) (https://www.geap.go.kr/) 사이트에 우리 회사의 EA 정보가 등록되어 관리되고 있습니다. (회원 가입 필요)

## 레퍼런스 사이트

- [MDN](https://developer.mozilla.org/en-US/docs/Web/) - The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.
- [MDN 한글](https://developer.mozilla.org/ko/) - HTML, CSS, 및 웹 사이트와 프로그레시브 웹 앱을 위한 API를 포함한 오픈 웹 기술에 대한 정보를 제공
- [w3schools](https://www.w3schools.com/) - HTML, CSS, JavaScript 등 웹표준
- [Bootstrap (한글번역)](http://bootstrapk.com/) - 반응형이며 모바일 우선인 웹프로젝트 개발을 위한 가장 인기있는 HTML, CSS, JS 프레임워크
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)
- [Git Hub](https://github.com/) - The world's leading software development platform · GitHub
- [GitHub Desktop](https://desktop.github.com/) - Simple collaboration from your desktop
- [Git Book](https://git-scm.com/book/en/v2) - Git is a free and open source distributed version control system
- [Git 한글 가이드북](https://git-scm.com/book/ko/v2)
- [Flat UI Colors](https://flatuicolors.com/)
- [World Wide Web Consortium (W3C)](https://www.w3.org/)
- [Browser Market Share](http://gs.statcounter.com/browser-market-share/)
- [ECMAScript compatibility table](http://kangax.github.io/compat-table/es6/)

## 온라인 강의 사이트

- [Nomad Coders](https://academy.nomadcoders.co/) - 한글 자막 있음
- [인프런](https://www.inflearn.com/) - 다수의 무료 한글 IT 강좌

## 추가적인 연구 대상

- [React](http://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
