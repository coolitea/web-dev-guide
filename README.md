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

  - [반응형 웹 디자인 (Responsive Web Design)](https://ko.wikipedia.org/wiki/%EB%B0%98%EC%9D%91%ED%98%95_%EC%9B%B9_%EB%94%94%EC%9E%90%EC%9D%B8)

    - 핵심 기술 : 가변 그리드(fluid grid), 유연한 이미지(flexible images), 미디어 쿼리(media query)
    - Imagemin (이미지 압축 기술)
    - [WebP](https://ko.wikipedia.org/wiki/WebP)와 같은 이미지 형식 사용

  - [프로그레시브 웹 앱 (Progressive Web App, PWA)](https://developer.mozilla.org/ko/docs/Apps/Progressive)

## 웹사이트 개발 가이드라인 우수 사례

- [미 정부, 공공기관 웹디자인 표준안 오픈소스로 공개 기사](http://www.bloter.net/archives/239720)(2015.09.28.)
  - [U.S. Web Design System](https://designsystem.digital.gov/)(영문) - 미국 정부 웹사이트 가이드라인
    - [USWDS 2.0 베타](https://v2.designsystem.digital.gov/)(영문)

## 데모 사이트

[전자투표 데모 사이트](https://coolitea.github.io/evote-clone-with-bootstrap/) - 부트스트랩 사용

## 기본 언어

- HTML5 (HyperText Markup Language)
- CSS3 (Cascading Style Sheets) + (레벨4 모듚)
- 자바스크립트 (JavaScript)

## 프레임워크

### [전자정부 표준 프레임워크](http://www.egovframe.go.kr/)

- 표준프레임워크 3.7 (2018년 3월 공개)
- [실행환경 아키텍쳐 구성](http://www.egovframe.go.kr/EgovEnvRun.jsp?menu=1&submenu=3&leftsub=1)

### HTML5 프레임워크

- 인젠트 [아이젭](http://www.inzent.com/product/mobile_solution_2.php) - 웹 표준 HTML5 기반 UI/UX Platform (결과물 : 태그)
  - 제품 설명회(2018.12.03.)
- 소프트베이스 [엑스프레임5](http://www.xframe.co.kr/products/xFrame5_lite.php)(xFrame5 Lite)
  - 오픈소스그룹 [엑시스제이](https://axisj.com/)(AXISJ)와 협력 체제 - [AXBoot](https://axisj.com/axboot/)(개발 프레임워크) 및 [AX5](https://axisj.com/ax5/)(UI 컴포넌트)
- SAP [피오리](https://www.sap.com/korea/products/fiori.html)(Fiori)
- 인스웨이브 [웹스퀘어5](https://www.inswave.com/websquare/websquare.w.html?w2xPath=/websquare5/websquare5.xml&product=ws&seq=11) - Advanced HTML5 Framework (결과물 : XML)
- 투비소프트 [넥사크로 플랫폼 17](http://www.tobesoft.com/product/Nexacro17.do) - OSMU 솔루션 (맞춤형 웹제작)
  - 제품 설명회(2019.01.16.)
- 토마토시스템즈 [엑스빌더6](http://www.exbuilder6.co.kr/main/main.jsp)

### CSS 프레임워크

- [부트스트랩](http://bootstrap4.kr/) (Bootstrap) ver.4.1.3

### 자바스크립트 프레임워크 (라이브러리)

- [리액트](http://reactjs.org) (React) - (추천) 라이브러리 [GitHub 저장소](https://github.com/facebook/react) (Star: 119,190)
  - Redux 또는 MobX와 함께 사용
- [뷰.js](https://kr.vuejs.org/)(Vue.js) - 배우기 쉬움 [GitHub 저장소](https://github.com/vuejs/vue) (Star: 17,770)
- [앵귤러](https://angular.io/) - 프레임워크. (금융) [GitHub 저장소](https://github.com/angular/angular.io) (Star: 1,022)
- jQuery - 자바스크립트 라이브러리

## UI 컴포넌트

### 기본 컴포넌트

- [폰트어썸](http://fontawesome.io) (Font Awesome) ver.5 - 입력폼, 버튼, 아이콘, 알림창 등

### 그리드, 차트 등 컴포넌트

- 인프라지스틱스 [이그나이트 UI](https://www.infragistics.com/products/ignite-ui)(공식사이트)
  - (한국 구매)[블루포트]
    - [Infragistics Ignite UI for JavaScript](http://shopping.blueport.co.kr/goods/goods_view.php?goodsNo=1000005243)
    - [Infragistics Professional](http://shopping.blueport.co.kr/goods/goods_view.php?goodsNo=1000005225)
    - [Infragistics Ultimate](http://shopping.blueport.co.kr/goods/goods_view.php?goodsNo=1000005222)
  - (한국 구매)[ComponentSource](https://www.componentsource.com/ko/product/infragistics-ignite-ui)
- 우리테크인터내셔날 [리얼 그리드](http://www.realgrid.com/)
- 리아모어소프트 [알메이트 그리드](http://www.riamore.net/component/dataGrid.html)(rMate Grid for HTML5)

## UI 개발 도구

- 인젠트 [아이젭 스튜디오](http://www.inzent.com/product/mobile_solution_2.php)
- SAP [SAPUI5](http://krksap.tistory.com/270?category=559218)
  - (오픈소스 버전) [OpenUI5](https://en.wikipedia.org/wiki/OpenUI5) [GitHub 저장소](https://github.com/SAP/openui5) (Star: 1,801)
- [비주얼 스튜디오 코드](https://ko.wikipedia.org/wiki/%EB%B9%84%EC%A3%BC%EC%96%BC_%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4_%EC%BD%94%EB%93%9C)
- [아톰](<https://ko.wikipedia.org/wiki/%EC%95%84%ED%86%B0_(%EB%AC%B8%EC%84%9C_%ED%8E%B8%EC%A7%91%EA%B8%B0)>)
  - 아톰 플러그인
    - [Emmet](<https://ko.wikipedia.org/wiki/%EC%97%90%EB%B0%8B_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)>) - HTML, CSS 웹 개발 생산성 향상 도구 (자동 완성)
    - [prettier-Atom](https://atom.io/packages/prettier-atom) - 포맷 맞추기 (저장 시 자동 적용 가능)
    - [minimap](https://atom.io/packages/minimap) - 전체 소스 미리보기 지도
    - [pigments](https://atom.io/packages/pigments) - 소스 파일 내에서 색상 표현
    - [gitplus](https://atom.io/packages/git-plus) - Git 터미널 없이 사용
    - [color-picker](https://atom.io/packages/color-picker)- 소스 파일 내에서 색상 추출

## 디버깅 및 성능 개선

- [크롬 개발자 도구](https://developers.google.com/web/tools/chrome-devtools/?hl=ko) (Chrome DevTools) - 디버깅 도구
- [라이트하우스](https://developers.google.com/web/tools/lighthouse/v3/scoring?hl=ko) (Lighthouse)- 웹 앱의 품질을 개선하는 오픈 소스 자동화 도구
- [구글 페이지 스피드 인사이트](https://developers.google.com/speed/pagespeed/insights/?hl=ko) (Page Speed Insights) -
  웹 사이트 속도 측정 및 개선 방법 추천

## 버전 관리

- [깃 (Git)](<https://ko.wikipedia.org/wiki/%EA%B9%83_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)>) - 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템이다. 소프트웨어 개발에서 소스 코드 관리에 주로 사용된다.
- [깃허브 (GitHub)](https://ko.wikipedia.org/wiki/%EA%B9%83%ED%97%88%EB%B8%8C) - 분산 버전 관리 툴인 깃(Git)을 사용하는 프로젝트를 지원하는 웹호스팅 서비스. (private repository 사용)

## 유용한 크롬 확장 프로그램

- [Page Ruler](https://chrome.google.com/webstore/detail/page-ruler/emliamioobfffbgcfdchabfibonehkme) - 웹 페이지 컴포넌트 사이즈 측정
- [ColorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?catego...&hl=ko) - 웹 페이지의 색상 추출

## 작성자

- **박현정** - 최초 작성

## 관련 법규

### [개인정보 보호법](http://www.law.go.kr/법령/개인정보보호법)

- 개인정보 영향평가에 관한 고시
- 개인정보의 안전성 확보조치 기준
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
- [Bootstrap 컴포넌트 (한글 번역)](http://bootstrap4.kr/) - 비공식 사이트 (과거 버전 v4.0)
  - [레이아웃](http://bootstrap4.kr/docs/4.0/layout/overview/)
  - [컨텐츠](http://bootstrap4.kr/docs/4.0/content/reboot/)
  - [컴포넌트](http://bootstrap4.kr/docs/4.0/components/alerts/)
- [웹 UX 기초](https://developers.google.com/web/fundamentals/design-and-ux/ux-basics/?hl=ko) - 구글 개발자 웹 기초 가이드
- [CSS - BEM 방법론](https://medium.com/witinweb/css-%EB%B0%A9%EB%B2%95%EB%A1%A0-1-bem-block-element-modifier-1c03034e65a1) - 블록(Block), 요소(Element), 수식어(Modifier)
- [Git 가이드북 한글](https://git-scm.com/book/ko/v2)
- [공개SW 포털](https://www.oss.kr/)
  - [공개SW 솔루션 가이드](https://www.oss.kr/solution_guide)
  - [공개SW 활용](https://www.oss.kr/oss_use) - 공개SW 목록
  - [공개SW 라이선스](https://www.oss.kr/oss_license)

### 영어 학습 자료

- [Roadmap to becoming a Web Developer](https://github.com/kamranahmedse/developer-roadmap) - 웹 개발자가 되기 위한 로드맵
  - [Frontend Roadmap](https://github.com/kamranahmedse/developer-roadmap#frontend-roadmap) - 프론트엔드 로드맵
- [MDN](https://developer.mozilla.org/en-US/docs/Web/)
- [Bootstrap](https://getbootstrap.com/docs/4.1/components/forms/) - 공식 사이트(현재 버전 v4.1.3) 컴포넌트
- [w3schools](https://www.w3schools.com/)
  - [w3schools HTML5](https://www.w3schools.com/html/)
  - [w3schools CSS](https://www.w3schools.com/css/)
  - [w3schools Java Script](https://www.w3schools.com/js/)
- [Google Developers - Web](https://developers.google.com/web/)
- [BEM 방법론](http://getbem.com/introduction/)(Blocks, Elements and Modifiers)(BEM Methodologies)
  - [Get BEM](http://getbem.com/)
  - [BEM](https://en.bem.info/)
  - [BEM File Structure](https://en.bem.info/methodology/filestructure/)
- [Git Book](https://git-scm.com/book/en/v2)
- [World Wide Web Consortium](https://www.w3.org/)(W3C) - 월드 와이드 웹을 위한 표준을 개발하고 장려하는 조직
- [Developing Web Apps with SAPUI5](https://open.sap.com/courses/ui51)
- [미국정부 웹사이트 가이드라인 공식 홈페이지](https://designsystem.digital.gov/)
  - [미국정부 웹사이트 가이드라인 깃허브](https://github.com/uswds/uswds)
  - [미국정부 웹사이트 가이드라인 공식 발표 문서](https://18f.gsa.gov/2015/09/28/web-design-standards/)

### 웹 개발 도구 관련 참고 사이트 (영문)

- [SAP](https://www.sap.com/korea/index.html)
  - [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/)
    - [Form Field Validation](Form Field Validation) - 조회 조건 및 입력 데이터 등 유효성 체크에 사용
    - [[List Report](https://experience.sap.com/fiori-design-web/list-report-floorplan-sap-fiori-element/) - 리스트(그리드) 컨트롤
    - [UI Elements](https://experience.sap.com/fiori-design-web/form/#components) - 버튼, 체크 박스, 아이콘 등
    - [문서 - 샘플](https://sapui5.hana.ondemand.com/#/controls)
  - [SAPUI5](https://developers.sap.com/korea/topics/ui-development.html) - UI 개발 도구
    - [문서 - Get Started: Setup and Tutorials](https://sapui5.hana.ondemand.com/#/topic/8b49fc198bf04b2d9800fc37fecbb218)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/) - Emmet 단축키
- [GitHub Desktop](https://desktop.github.com/)
- [Imagemin](https://web.dev/fast/use-imagemin-to-compress-images) - 이미지 압축
- [Flat UI Colors](https://flatuicolors.com/) - 플랫 UI 색상 팔레트
- [Browser Market Share](http://gs.statcounter.com/browser-market-share/) - 브라우저별 시장 점유율
- [ECMAScript compatibility table](http://kangax.github.io/compat-table/es6/) - 브라우저별 ECMAScript 호환성

## 추후 연구 대상

- [타입스크립트](https://www.typescriptlang.org/) (TypeScript) - 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어. 마이크로소프트에서 개발, 유지하고 있으며 엄격한 문법을 지원한다.
- [국제화(Internationalization, I18n)와 지역화(Localization, L10n)](https://ko.wikipedia.org/wiki/국제화와_지역화)
  - [LocalePlanet](http://www.localeplanet.com/)
  - [JavaScript Localization](https://phraseapp.com/blog/posts/step-step-guide-javascript-localization/)
