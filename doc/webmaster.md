# 업체 포트폴리오 확인
- 웹 표준  
  - [ ] (W3C) Markup Validation Service http://validator.w3.org/ - 에러 없음
  - [ ] (W3C) CSS Validation Service : http://jigsaw.w3.org/css-validator/ - 에러 없음
  - [ ] 노플러그인 사이트 (액티브X, EXE 등  비표준 기술 미사용) - 에러 없음
- [ ] 웹 호환성 확보
  - [ ] 브라우저 개발자도구에서 Javascript 오류 미발생
  - [ ] 브라우저 개발자도구에서 DOM 경고 미발생
- 모바일 친화적 디자인
  - [ ] 반응형 웹 디자인 여부 (하나의 템플릿, 모바일/태블릿/데스크탑 대응) - 브라우저로 크기 조절로 확인        
  - [ ] (구글) 모바일 친화성 테스트 : https://search.google.com/test/mobile-friendly - 모바일 친화적
  - [ ] (마이크로소프트) 모바일 지원 수준 테스트 도구 : https://www.bing.com/webmaster/tools/mobile-friendliness
- [ ] 소프트웨어 개발보안 (Secure Coding) 점검 도구
  - [ ] FindBugs (Java)
  - [ ] FindSecurityBugs (Java)
  - [ ] PMD (Java, JavaScript, XML)
  - [ ] Jenkins  
- 웹사이트 최적화
  - [ ] (구글) 크롬 개발자 도구 Audit
    - [ ] 성능 - 90/100 이샹
    - [ ] 프로그레시브 웹앱 - 90/100 이샹
    - [ ] 접근성 - 90/100 이샹
    - [ ] 모범 사례 - 90/100 이샹
    - [ ] SEO (검색엔진 최적화) - 90/100 이샹
  - [ ] (구글) PageSpeed Insights (Lighthouse) - 90/100 이샹
    - https://developers.google.com/speed/pagespeed/insights/  
  - [ ] Web Page Test (Fully Loaded Time) - 3초 이내
    - https://www.webpagetest.org/
      <!-- - [ ] HTML TIDY : https://www.w3.org/People/Raggett/tidy/   -->
  - [ ] 웹 페이지 용량 3MB 이하 (1MB 이하 권장)
  - [ ] 주요 웹 페이지 응답속도 3초 이하 (1초 이내 권장)
    <!-- - [ ] 연결 최소화
    - [ ] 페이지 표시(랜더링) 순서 최적화 -->
- 검색엔진 최적화 (SEO)
  - [ ] (네이버) 사이트 간단 체크 https://webmastertool.naver.com/guide/site_check.naver/
    - [ ] 사이트 정상 접속 여부  - 초록 체크
    - [ ] robots.txt  - 초록 체크
    - [ ] 로봇 메타 태그 - 초록 체크
    - [ ] 사이트 제목 - 초록 체크
    - [ ] 사이트 설명 - 초록 체크
    - [ ] Open Graph 제목 - 초록 체크
    - [ ] Open Graph 설명 - 초록 체크 
  - [ ] 웹사이트 구조 설계
  - [ ] 유입 키워드 설정
  - [ ] 양질의 콘텐츠 제공 (인포그래픽이나 동영상 포함)
  - [ ] 소셜 설정
  - [ ] 기타 개선 항목
    - [ ] 타이틀 태그 제목 설정
    - [ ] 메타 태그 요약 설정
    - [ ] URL 구조 개선
    - [ ] 경로 표시
    - [ ] 이미지 사용 최적화      
    - [ ] 404에러, 302/301 리다이렉트, 50X 에러, 링크 에러 처리
    - [ ] XML 형식의 사이트 맵 설정이나 robots.txt 파일의 설정
    - [ ] 상세 페이지 단계 3단계 이하로 내려가지 않도록 웹사이트 구조를 최대한 저층화
- 설계 시 고려 요소
  - [ ] 디자인 패턴 
    - [ ] MVC
    - [ ] MVVM
  - [ ] URL 구조 
  - [ ] 파일 명명 규칙
  - [ ] asset image 이름별 폴더 내 사이즈별 이미지 사용 (small, medium, large size)
  - [ ] 국제화(Internationalization, I18n)
  - [ ] 지역화(Localization, L10n)  
- 기술
  - [ ] HTML5.2  
  - [ ] CSS3
    - [ ] Sass
  - [ ] EcmaScript6
    - [ ] React v16.8.3
    - [ ] AJAX    
  - [ ] Oracle 12c  
  - [ ] JSP
  - [ ] Java (JDK 1.8)
  - [ ] 전자정부프레임워크 3.7    
  - [ ] HTTPS
  - [ ] 지연 로딩 (이미지, 비디오)
  - 미디어 처리
    - [ ] 회사 컬러 코드 변수 세트 (팔레트) 사용 여부
    - [ ] 폰트어썸
    - [ ] 구글 폰트    
    - [ ] 데이터 그리드 (예: SBGrid)
  - [ ] (구글) 애널리틱스 - 웹로그 분석 (사용자 분석)
- [ ] 한국형 웹 콘텐츠 접근성 지침 2.1
  - https://www.wah.or.kr:444/Participation/한국형웹콘텐츠접근성지침2.1.pdf
  - 인식의 용이성
    - [ ] 대체 텍스트
    - [ ] 멀티미니더 대체 수단
    - [ ] 명료성
  - 운용의 용이성
    - [ ] 입력장치 접근성
    - [ ] 충분한 시간 제공
    - [ ] 광과민성 발작 예방
    - [ ] 쉬운 내미게이션
  - 이해의 용이성
    - [ ] 가독성
    - [ ] 예측 가능성
    - [ ] 콘텐츠의 논리성
    - [ ] 입력 도움
  - 견고성
    - [ ] 문법 준수
    - [ ] 웹 애플리케이션 접근성   

# 사전 숙지 사항
## 국제 표준
- W3C : https://www.w3.org/standards/
  - HTML5 : https://www.w3.org/standards/techs/html#w3c_all
    - (번역) 웹 저작자를 위한 W3C의 HTML5 기술 표준명세서 : https://www.koreahtml5.kr/front/reference/referenceView.do?bbsId=BBS_00000000002    
  - CSS (Level 3) : https://www.w3.org/standards/techs/css
- ECMA-262 : https://www.ecma-international.org/publications/standards/Ecma-262.htm
  - **ECMAScript® 2015 (6th)** : https://www.ecma-international.org/ecma-262/6.0/ECMA-262.pdf

## 오픈 소스
- 리액트 : https://reactjs.org/
- Yarn : https://yarnpkg.com/
- Git : https://git-scm.com/

## 코딩 스타일 가이드
- URL : https://support.google.com/webmasters/answer/76329?hl=ko
  - URL Naming Conventions : https://www.palantir.net/blog/palantirnets-guide-digital-governance-url-naming-conventions
- 개발 보안
  - 소프트웨어 개발보안 가이드 
    - https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000015&nttId=57473  
  - JAVA 시큐어코딩 가이드 
    - https://www.kisa.or.kr/public/laws/laws3_View.jsp?mode=view&p_No=259&b_No=259&d_No=55&ST=T&SV=
- 코딩 스타일
  - (Airbnb) React/JSX Style Guide : https://github.com/airbnb/javascript/tree/master/react
    - (한글) https://github.com/apple77y/javascript/tree/master/react
    <!-- - ESLint plugin for react-with-styles : https://github.com/airbnb/eslint-plugin-react-with-styles -->
  - (Airbnb) JavaScript Style Guide : https://github.com/airbnb/javascript
  - (Airbnb) CSS with BEM (Block Element Modifier) : https://github.com/airbnb/css

## 웹마스터 가이드
- (구글) 웹마스터 가이드라인 : https://support.google.com/webmasters/answer/35769?hl=ko
- (네이버) 웹마스터 도구 : https://support.webmastertool.naver.com/
  - HTTP 프로토콜 : https://webmastertool.naver.com/guide/basic_http.naver
  - 네이버 로봇 차단 설정/변경 가이드 : https://webmastertool.naver.com/guide/basic_optimize.naver#chapter1.1
  - 로봇 메타 태그 설정/변경 가이드 : https://webmastertool.naver.com/guide/basic_markup.naver#chapter1.2
  - 사이트 제목 설정/변경 가이드 : https://webmastertool.naver.com/guide/basic_markup.naver#chapter2.1
  - 사이트 설명 설정/변경 가이드 : https://webmastertool.naver.com/guide/basic_markup.naver#chapter2.2
  - Open Graph 제목 설정/변경 가이드 : https://webmastertool.naver.com/guide/basic_markup.naver#chapter2.3
  - Open Graph 설명 설정/변경 가이드 : https://webmastertool.naver.com/guide/basic_markup.naver#chapter2.3
- (Bing) 웹 마스터 도구 : https://www.bing.com/toolbox/webmaster

## 모바일 최적화
- (구글) 모바일 친화적인 사이트 만들기 가이드 : https://developers.google.com/search/mobile-sites/

## 검색엔진 최적화
- (구글) 검색엔진 최적화(SEO) 초보자 가이드 : https://support.google.com/webmasters/answer/7451184
  - (구글) Search Console : https://search.google.com/search-console/about
- (네이버) 웹 표준 최적화 기본 가이드 : https://webmastertool.naver.com/guide/basic_optimize.naver
- (구글) PageSpeed Insights 규칙 : https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery

## 이미지 최적화
- (구글) 이미지 최적화 : https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization
- (구글) 반응형 이미지 기술 : https://developers.google.com/web/fundamentals/design-and-ux/responsive/images

## 기타 가이드
- 인터넷 이용환경 개선 기술 안내서(2016. 12.) : https://www.koreahtml5.kr/front/reference/referenceList.do?bbsId=BBS_00000000003
- 민간 웹사이트 플러그인 개선가이드라인 (2018. 11., 과학기술정보통신부한국인터넷진흥원) : https://www.koreahtml5.kr/front/reference/referenceList.do?bbsId=BBS_00000000011

# 분석 및 설계
- 트래픽 폭주 시 대비 방안 강구 (최소 콘텐츠, 임시 페이지, 오토스케일링 등)
- 보안이나 개인정보 등과 관련 없는 서비스나 콘텐츠는 회원가입 없이 자유롭게 이용
- 콘텐츠 지적재산권 고려

# 구현
- 웹 표준 및 호환성
  - [ ] HTML5
  - [ ] CSS3 
  - [ ] DOM
  - [ ] ECMA-262 
  - [ ] UTF-8 사용
  - 모바일 서비스 호환성(확장성) 확보
  - 반응형 웹
- 정보보안
  - 웹 서버 보안
  - [ ] SW 개발보안 (Secure Coding)
  - 보안서버 구축
- [ ] 지적재산권 보호
- [ ] 표준프레임워크 활용
- [ ] 검색엔진 최적화 (SEO)
  - [ ] title 테그 : 페이지마다 고유하게 설명하는 페이지 제목
  - [ ] Description 메타 태그 : 페이지 요약 정보 1~2문장 (150~250자)
  - [ ] URL 구조 : 핵심 키워드 포함
    - 웹페이지 파일 명명 규칙을 변경해야 하는 부분!

# 진단
- 공공기관 웹사이트 UX 제공
  - 사용자 친화적 UI/UX 적용
- 개발 보안
  - 공개SW를 활용한 소프트웨어 개발보안 점검가이드 
    - https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000012&nttId=48386  
- 부하 테스트    
  - [ ] 응답시간
  - [ ] 시간당 처리량
  - [ ] 자원 사용량
- [ ] 범정부EA포털에 등록  
- [ ] 기타 고려사항
  - [ ] 문자 입력창에 한글 입력 우선
- 웹로그 수집 및 분석
  - Piwik 이용
  - OWA (Open Web Analytics) 이용
  
# 웹 개발 단계별 검토 내역
- 개발환경
  - 구현도구
    - (프론트엔드) Visual Studio Code
    - (백엔드) Eclipse
  - 테스트도구
    - JUnit
  - 형상관리도구
    - Git
  - 배포도구
    - Maven
    - Nexus Repository
    - Hudson    
- 운영환경
  - 모니터링 도구
  - 소프트웨어 개발보안 점검
  - 커뮤니케이션 도구
- 관리환경
  - 서비스 요청관리
  - 변경관리
  - 현황  관리
  - 표준관리

# 개발자 지원
- (MDN) 모질라 개발자 : https://developer.mozilla.org/ko/
- 구글 개발자 (웹) : https://developers.google.com/web/
- 네이버 개발자 센터 : https://developers.naver.com/
- 카카오 개발자 센터 : https://developers.kakao.com/

<!-- # 기본 원칙
- 빅데이터, 맞춤형 서비스, 모바일
- 웹페이지 경량화
- 정보 접근성, 웹표준 및 호환성, 정보보안, 개인정보보호 
- 비표준 기술 배제 및 제거
- URL, 로고, 인터페이스 
- 검색 용이
- 정보보호 취약점, 웹사이트 최적화 등 성능 테스트 
- 이미지 이름의 폴더
  - 폴더 별 large, medium, small size 준비 -->
