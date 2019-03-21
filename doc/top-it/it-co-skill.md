# IT 기업 시스템 구조

## 쿠팡 https://medium.com/coupang-tech

- 쿠팡 서비스 Cloud Migration을 통해 배운 것들 (2018.11.22.) https://tv.naver.com/v/4578268/list/279844
- Micro service architecture를 위한 쿠팡의 여정 (May 25, 2018)
  - [1. Micro service architecture를 위한 쿠팡의 여정](https://medium.com/coupang-tech/%ED%96%89%EB%B3%B5%EC%9D%84-%EC%B0%BE%EA%B8%B0-%EC%9C%84%ED%95%9C-%EC%9A%B0%EB%A6%AC%EC%9D%98-%EC%97%AC%EC%A0%95-94678fe9eb61)
    - Vitamin Framework, Provider helper library (api-adapter), Message Queue
  - [2. Micro service architecture를 지탱하는 쿠팡 플랫폼 서비스](https://medium.com/coupang-tech/%ED%96%89%EB%B3%B5%EC%9D%84-%EC%B0%BE%EA%B8%B0-%EC%9C%84%ED%95%9C-%EC%9A%B0%EB%A6%AC%EC%9D%98-%EC%97%AC%EC%A0%95-a31fc2d5a572)
    - Configuration Management DataBase, Coupang Deployment System, AB Test, Coupang API Gateway, Confidence System, Circuit Breaker System

## Twitter https://blog.twitter.com/engineering/

- How we built Twitter Lite (Thursday, 6 April 2017) https://blog.twitter.com/engineering/en_us/topics/open-source/2017/how-we-built-twitter-lite.html
  - Twitter Lite is a client-side JavaScript application and a small, simple **Node.js** server.
  - The client-side JavaScript application is developed, built, and tested with many open source libraries including **React, Redux, Normalizr, Globalize, Babel, Webpack, Jest, WebdriverIO,** and **Yarn**.
  - We have been able to achieve speed and reliability through a series of incremental performance improvements known as the PRPL pattern and by using the new capabilities of modern browsers on Android (e.g., Google Chrome) which include **Service Worker, IndexedDB, Web App Install Banners,** and **Web Push Notifications**.
  - Further improvements to perceived performance were possible by deferring non-critical rendering to idle periods using the **requestIdleCallback** API.

## Naver https://d2.naver.com

- React와 Apollo, Parcel 기반 서비스 개발 (2019.01.07) https://d2.naver.com/helloworld/2838729
  - 신규 서비스: **React와 Apollo, Node.js, Parcel**의 조합
  - 과거 2016년부터 React와 Redux, Node.js, webpack의 조합
- Spring Framework 3에서 **Spring Boot 1.5.8** 전환기 (2018.04.09) https://d2.naver.com/helloworld/5626759
- Spring-Test-MVC 프로젝트 소개 (2011.12.22) https://d2.naver.com/helloworld/1341
  hgvfc

## 우아한형제들 / 배달의민족 http://woowabros.github.io

- **Java 8** + **Spring Boot** + JPA 를 이용하여 프로젝트 후기 (Aug 2, 2016) http://woowabros.github.io/experience/2016/08/02/first_java_project.html

## VCNC / 비트윈, 타다 http://engineering.vcnc.co.kr/

- 타다 시스템 아키텍처 (January 28, 2019) http://engineering.vcnc.co.kr/2019/01/tada-system-architecture/
  - 사용 중인 기술들
    - Kotlin: Java는 불편한 점이 많지만, JVM에 대한 경험을 무시할 수는 없어 비교적 새로운 JVM 기반 언어인 Kotlin을 사용하기로 하였습니다. 다른 여러 JVM 기반의 대안 언어들이 있지만, Spring Boot에 쉽게 적용할 수 있고 커뮤니티에서 적극적으로 권장하고 있는 점 등 여러 이유로 Kotlin을 선택하게 되었습니다.
    - **Spring Boot**: 널리 쓰는 웹 프레임워크이며 이미 지원하는 기능 또한 많기 때문에 보일러 플레이트 코드 작성을 줄이고 서비스 개발에 집중할 수 있습니다. SQS 메시지 처리, HTTP 요청 및 응답으로 Protocol Buffers 메시지 사용 등 프레임워크에서 제공하는 기능을 많이 활용하고 있습니다.
    - Kubernetes: 컨테이너 오케스트레이션 플랫폼으로 배포 자동화와 스케일링 등 여러 가지 운영적인 편의성을 제공합니다. 처음에는 kops를 이용해 클러스터를 직접 띄웠지만, 지금은 EKS를 이용하고 있으며 직접 object를 만들기보다 helm을 이용하고 있습니다.
    - gRPC: 실시간성이 중요한 차량 위치나 운행 상태 변화 등은 Streaming을 이용하여 전달하고 있습니다. 직접 개발할 수도 있었지만, 서비스 개발에 집중하고 앞으로의 관리 오버헤드를 줄이기 위해 gRPC를 이용하기로 하였습니다.
    - Redis: 서버 간 메시징을 위해 Redis의 Pub/Sub 기능을 사용하고 있습니다. 메시지 브로커 기능을 제공하는 RabbitMQ, ActiveMQ, Kafka 등 여러 옵션이 있었지만, 개발을 시작하던 당시에는 Redis만이 ElastiCache를 이용하여 쉽게 띄우고 관리할 수 있어 Redis를 선택하게 되었습니다.
    - Protocol Buffers: gRPC 뿐만 아니라 HTTP/2로 주고받는 메시지를 정의할 때도 이용하고 있습니다. 덕분에 따로 문서화 하지 않고 proto파일을 공유하여 더욱 명확하고 편리하게 API 명세를 공유할 수 있었습니다.
    - Terraform: HCL을 이용해 인프라스트럭처 프로비저닝 및 관리를 편하게 해주는 도구입니다. AWS 서비스의 생성 및 관리를 콘솔에서 직접 하지 않고 Terraform을 이용하고 있습니다.
  - 사용 중인 **AWS** 서비스들
    - **EKS**: Kubernetes 클러스터의 마스터 노드들을 쉽게 띄우고 관리해주는 서비스입니다. 서울 리전에 EKS가 출시된 후에는 관리 오버헤드를 줄이기 위해 EKS로 옮겼습니다.
    - **ECR**: 타다 서버를 배포할 때는 Docker Gradle Plugin을 통해 docker 이미지를 만들고 ECR에 푸시합니다. 그 후 helm 명령을 통해 Kubernetes에 배포합니다.
    - **SQS**: 배차 요청을 처리하기 위해 SQS를 이용합니다. 배차 요청을 구현하는 방법에는 다양한 옵션이 있었지만 AWS 서비스를 최대한 활용하여 빠르게 개발할 수 있었습니다.
    - **RDS**: 타다의 대부분 데이터는 Aurora에 저장하고 있습니다. RDS를 이용하면 DB의 배포와 관리가 쉬우며, Aurora는 MySQL과 호환될 뿐만 아니라 같은 비용이면 성능이 더 좋습니다.
    - **Kinesis**: 실시간 차량 위치 정보 및 로그를 수집하기 위해 사용하고 있습니다. 다른 오픈소스 소프트웨어를 직접 이용하기보다는 AWS에서 제공하는 서비스를 최대한 이용하고 있습니다.
    - **Firehose**: 비트윈에서는 KCL를 활용해 Acheron이라는 프로그램을 직접 만들어 로그들을 S3에 저장하였지만, 이제는 서울 리전에서 Firehose를 사용할 수 있으므로 큰 고민 없이 사용하기로 하였습니다.
- 비트윈 PC 버전 개발기 (November 10, 2014) http://engineering.vcnc.co.kr/2014/11/between-pc-version/
  - 비트윈 PC 버전은 개발 비용을 줄이기 위해 웹 플랫폼 기반의 네이티브 애플리케이션으로 개발되었습니다.
  - 비트윈 서버에서 사용하는 Alfred 라이브러리에 WebSocket 프로토콜 지원을 추가하였습니다.
  - Chromium Embedded Framework를 브라우저 엔진으로 사용하여 웹 앱을 구동하고 웹 플랫폼에서 제공하지 않는 기능을 확장하여 사용했습니다.
  - 자바스크립트 코드의 복잡도를 줄이기 위해 **React, CommonJS, ECMAScript 6** 등의 기술을 활용하였습니다.

## NHN / Toast Meetup http://meetup.toast.com/

- spring-boot-starter 작성하기 https://meetup.toast.com/posts/152
- 요즘 잘나가는 프론트엔드 개발 환경 만들기(2018)
  - Webpack 4 https://meetup.toast.com/posts/153
  - ES6 https://meetup.toast.com/posts/157
