# Node.js 교과서 - 기본부터 프로젝트 실습까지

by 제로초(ZeroCho.com)

- 동영상 : https://www.inflearn.com/course/node-js-%EA%B5%90%EA%B3%BC%EC%84%9C/dashboard
  - 145강 
  - 시간 : 1394분 (23시간)

## 목차

### 인트로

- [ ] 인트로

### 1. 노드 시작하기
- [ ] 노드란 무엇인가 & 설치 방법
- [ ] REPL과 헬로 노드
- [ ] 호출 스택과 이벤트 루프
- [ ] 이벤트기반, 싱글쓰레드, 논블러킹IO

### 2. ES2018

- [ ] const와 let
- [ ] 템플릿 문자열(백틱, `)
- [ ] 객체 리터럴의 변화
- [ ] 화살표 함수
- [ ] 비구조화 할당(destructuring)
- [ ] rest 문법과 Q&A
- [ ] 콜백과 프로미스(Promise) 비교
- [ ] 프로미스(Promise) 이해하기
- [ ] 프로미스(Promise) API
- [ ] async/await

### 3. 노드 기능 알아보기

- [ ] 노드 모듈 시스템
- [ ] global 객체
- [ ] console 객체
- [ ] 타이머(setTimeout, setInterval, setImmediate)
- [ ] __filename, __dirname, process
- [ ] os 모듈
- [ ] path 모듈
- [ ] url 모듈
- [ ] querystring 모듈
- [ ] crypto 단방향 암호화(해시)
- [ ] crypto 양방향 암호화
- [ ] util 모듈(deprecate, promisify)
- [ ] fs 모듈(동기와 비동기)
- [ ] 버퍼와 스트림
- [ ] 기타 fs 메서드
- [ ] events 모듈
- [ ] 예외 처리하기

### 4. http 모듈로 웹 서버 만들기

- [ ] http 모듈, localhost, 포트
- [ ] 응답으로 파일 읽어 보내기
- [ ] 쿠키 설정하기, req.url
- [ ] 라우터 분기 처리와 쿠키
- [ ] 메모리 세션 구현해보기
- [ ] REST API의 개념과 프론트 코드 설명
- [ ] HTTP 메서드(req.method)로 분기 처리하기
- [ ] 요청 본문 처리하기(POST, PUT, PATCH, DELETE
- [ ] 라우터 리팩토링
- [ ] https, http2
- [ ] cluster로 멀티 프로세싱 하기

### 5 패키지 매니저

- [ ] npm 설명과 패키지 만들기(package.json)
- [ ] 패키지 설치하기
- [ ] SemVer 버전 이해하기
- [ ] npm 명령어 알아보기
- [ ] 패키지 배포하기

### 6. 익스프레스 웹 서버 만들기

- [ ] express-generator, npm scripts, bin/www
- [ ] express app.js 이해하기
- [ ] 미들웨어 이해하기
- [ ] 유명한 미들웨어들(morgan, body-parser, cookie-parser, express-session, flash)
- [ ] 라우팅 미들웨어(라우터도 미들웨어다!)
- [ ] 404 처리 미들웨어와 에러 처리 미들웨어
- [ ] pug 기본 문법
- [ ] pug 심화(조건, 반복, include, layout)
- [ ] EJS 문법
- [ ] 미들웨어 꿀팁들

### 7. MySQL과 시퀄라이즈

- [ ] 시퀄라이즈(sequelize)와 MySQL 설치
- [ ] 워크벤치 소개와 시퀄라이즈로 데이터베이스 만들기
- [ ] 시퀄라이즈 테이블 정의하기
- [ ] 시퀄라이즈 관계 설정하기
- [ ] 라우터 만들기(req.params)
- [ ] 시퀄라이즈 쿼리 사용하기
- [ ] 실행 & 에러 디버깅

### 8. 몽고디비와 몽구스

- [ ] MongoDB 설치와 프로젝트 세팅
- [ ] MongoDB 특징과 컴퍼스
- [ ] Mongoose 스키마 만들기
- [ ] Mongoose 쿼리 수행하기
- [ ] Mongoose populate

### 9. CLI 프로그램 만들기

- [ ] 노드 CLI 프로그램 만들기
- [ ] CLI 프로그램 구현하기 1
- [ ] CLI 프로그램 구현하기 2 & 실행
- [ ] CLI 상호작용 추가하기
- [ ] commander 사용하기
- [ ] inquirer, chalk 사용하기
- [ ] 스스로 해보기1(파일 복사 명령어 만들기)
- [ ] 스스로 해보기2(파일 지우기 만들기)
- [ ] 스스로 해보기3(DB와 연동해서 가계부1)
- [ ] 스스로 해보기3(DB와 연동해서 가계부2)

### 10. SNS 서비스 만들기

- [ ] SNS(NodeBird) 프로젝트 구조 세팅
- [ ] dotenv 사용하기
- [ ] 기본 라우터와 pug 파일 세팅
- [ ] 모델/테이블 만들기
- [ ] 다대다 관계 이해하기
- [ ] passport 세팅과 passport-local 전략
- [ ] 회원가입 구현
- [ ] 로그인 로그아웃 구현
- [ ] passport serializeUser/deserializeUser
- [ ] 카카오 로그인하기(passport-kakao)
- [ ] 카카오 앱 등록 & 실행 & 디버깅
- [ ] multer로 이미지 업로드하기
- [ ] 게시글 업로드 구현하기
- [ ] 해시태그 검색 & 팔로잉 구현 & 마무리
- [ ] 스스로 해보기1&2(팔로잉 취소, 프로필 수정)
- [ ] 스스로 해보기3(좋아요, 좋아요 취소)
- [ ] 스스로 해보기4(게시글 삭제)

### 11. API 서버 만들기

- [ ] API 서버의 개념과 필요성
- [ ] NodeBird-API 프로젝트 세팅하기
- [ ] clientSecret과 UUID
- [ ] JWT와 jsonwebtoken 패키지
- [ ] API 호출 서버 만들기
- [ ] API 작성 및 호출하기
- [ ] 스스로 해보기1(팔로잉, 팔로워 API)
- [ ] API 사용량 제한 구현하기
- [ ] CORS 해결하기
- [ ] 스스로 해보기2(무료/유료에 따라 사용량 차등 제한)
- [ ] 스스로 해보기3(클라이언트/서버 비밀키 구분하기)

### 12. 실시간 GIF 채팅방 만들기

- [ ] 웹소켓 설명과 프로젝트 세팅
- [ ] ws 패키지
- [ ] Socket.IO 패키지
- [ ] 실시간 GIF 채팅방 DB & pug 세팅
- [ ] Socket.IO 네임스페이스
- [ ] color-hash, app.set, io.use
- [ ] 실시간 GIF 채팅방 라우터 구현
- [ ] 실시간 채팅 구현
- [ ] 실시간 이미지 업로드 구현
- [ ] 스스로 해보기1(참여자 인원 수 표시)
- [ ] 스스로 해보기2(시스템 메시지 디비 저장)
- [ ] 스스로 해보기3(귓속말 보내기)
- [ ] 스스로 해보기4&5(방장, 강퇴)

### 13. 실시간 경매 시스템

- [ ] 실시간 경매 시스템 프로젝트 세팅1
- [ ] 실시간 경매 시스템 프로젝트 세팅2
- [ ] 서버센트이벤트(SSE)
- [ ] 입찰 라우터 구축하기
- [ ] 스케줄링 구현하기
- [ ] 스스로 해보기1(등록자 경매 참여 금지)
- [ ] 스스로 해보기2(경매 시간 자유 조정)
- [ ] 스스로 해보기3(스케줄러 재시작)
- [ ] 스스로 해보기4(낙찰자 없을 때 처리)

### 14. 구글 지도 API 장소 검색 서비스

- [ ] 구글 지도 API 장소 검색 서비스
- [ ] 구글 지도 API 키 발급하기
- [ ] @google/maps API 사용하기
- [ ] 구글 지도와 연동하기
- [ ] GPS 주변 검색 구현하기
- [ ] 즐겨찾기 구현하기
- [ ] 스스로 해보기1(즐겨찾기 삭제)
- [ ] 스스로 해보기2(검색내역 표시)
- [ ] 스스로 해보기3(다른 API 사용)

### 15. 서비스 배포하기

- [ ] 패키지 배포 환경으로 전환하기
- [ ] cross-env, pm2
- [ ] winston, helmet, hpp
- [ ] connect-redis
- [ ] nvm, n
- [ ] GCP, AWS에 배포하기(feat. GitHub)
