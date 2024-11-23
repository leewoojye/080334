

master 브랜치의 소스코드는 개정판 소스코드입니다. 초판 소스코드는 old 브랜치에 있습니다.

소스코드를 받으신 후에는 터미널에서 코드의 루트경로(package.json이 있는)로 이동하신 후 npm i를 입력해서 node_modules를 설치하셔야 합니다. node_modules는 이 소스 코드에 포함되어 있지 않습니다.

책이나 깃허브 코드에 오탈자가 있다면 출판사 웹 사이트나 저자 블로그로 문의해주세요.  
● 저자 블로그: https://www.zerocho.com/books  
● 길벗출판사 독자 문의: 웹 사이트(http://www.gilbut.co.kr/) 접속 > 고객센터 > 1:1 문의 선택(로그인 필요)  

# 목차
**1장 노드 시작하기**  
__1.1 핵심 개념 이해하기  
____1.1.1 서버  
____1.1.2 자바스크립트 런타임   
____1.1.3 이벤트 기반  
____1.1.4 논블로킹 I/O   
____1.1.5 싱글 스레드  
__1.2 서버로서의 노드  
__1.3 서버 외의 노드  
__1.4 개발 환경 설정하기  
____1.4.1 노드 설치하기  
____1.4.2 npm 버전 업데이트하기  
____1.4.3 비주얼 스튜디오 코드 설치하기  
__1.5 함께 보면 좋은 자료  

**2장 알아둬야 할 자바스크립트**  
__2.1 ES2015+  
____2.1.1 const, let  
____2.1.2 템플릿 문자열  
____2.1.3 객체 리터럴  
____2.1.4 화살표 함수  
____2.1.5 구조 분해 할당  
____2.1.6 클래스  
____2.1.7 프로미스  
____2.1.8 async/await  
____2.1.9 Map/Set  
____2.1.10 널 병합/옵셔널 체이닝  
__2.2 프런트엔드 자바스크립트  
____2.2.1 AJAX  
____2.2.2 FormData  
____2.2.3 encodeURIComponent, decodeURIComponent  
____2.2.4 데이터 속성과 dataset  
__2.3 함께 보면 좋은 자료  

**3장 노드 기능 알아보기**  
__3.1 REPL 사용하기  
__3.2 JS 파일 실행하기  
__3.3 모듈로 만들기  
____3.3.1 CommonJS 모듈  
____3.3.2 ECMAScript 모듈  
____3.3.3 다이내믹 임포트  
____3.3.4 __filename, __dirname  
__3.4 노드 내장 객체 알아보기  
____3.4.1 global  
____3.4.2 console  
____3.4.3 타이머  
____3.4.4 process  
____3.4.5 기타 내장 객체  
__3.5 노드 내장 모듈 사용하기  
____3.5.1 os  
____3.5.2 path  
____3.5.3 url  
____3.5.4 dns  
____3.5.5 crypto  
____3.5.6 util  
____3.5.7 worker_threads  
____3.5.8 child_process  
____3.5.9 기타 모듈들  
__3.6 파일 시스템 접근하기  
____3.6.1 동기 메서드와 비동기 메서드  
____3.6.2 버퍼와 스트림 이해하기  
____3.6.3 기타 fs 메서드 알아보기  
____3.6.4 스레드 풀 알아보기  
__3.7 이벤트 이해하기  
__3.8 예외 처리하기  
____3.8.1 자주 발생하는 에러들  
__3.9 함께 보면 좋은 자료  

**4장 http 모듈로 서버 만들기**  
__4.1 요청과 응답 이해하기  
__4.2 REST와 라우팅 사용하기  
__4.3 쿠키와 세션 이해하기  
__4.4 https와 http2  
__4.5 cluster  
__4.6 함께 보면 좋은 자료  

**5장 패키지 매니저**  
__5.1 npm 알아보기  
__5.2 package.json으로 패키지 관리하기  
__5.3 패키지 버전 이해하기  
__5.4 기타 npm 명령어  
__5.5 패키지 배포하기  
__5.6 함께 보면 좋은 자료  

**6장 익스프레스 웹 서버 만들기**  
__6.1 익스프레스 프로젝트 시작하기  
__6.2 자주 사용하는 미들웨어  
____6.2.1 morgan  
____6.2.2 static  
____6.2.3 body-parser  
____6.2.4 cookie-parser  
____6.2.5 express-session  
____6.2.6 미들웨어의 특성 활용하기  
____6.2.7 multer  
__6.3 Router 객체로 라우팅 분리하기  
__6.4 req, res 객체 살펴보기  
__6.5 템플릿 엔진 사용하기  
____6.5.1 퍼그(제이드)  
____6.5.2 넌적스  
____6.5.3 에러 처리 미들웨어  
__6.6 함께 보면 좋은 자료  

**7장 MySQL**  
__7.1 데이터베이스란?  
__7.2 MySQL 설치하기  
____7.2.1 윈도  
____7.2.2 맥  
____7.2.3 리눅스(우분투)  
__7.3 워크벤치 설치하기  
____7.3.1 윈도  
____7.3.2 맥  
____7.3.3 리눅스(우분투)  
____7.3.4 커넥션 생성하기  
__7.4 데이터베이스 및 테이블 생성하기  
____7.4.1 데이터베이스 생성하기  
____7.4.2 테이블 생성하기  
__7.5 CRUD 작업하기  
____7.5.1 Create(생성)  
____7.5.2 Read(조회)  
____7.5.3 Udate(수정)  
____7.5.4 Delete(삭제)  
__7.6 시퀄라이즈 사용하기  
____7.6.1 MySQL 연결하기  
____7.6.2 모델 정의하기  
____7.6.3 관계 정의하기  
____7.6.4 쿼리 알아보기  
____7.6.5 쿼리 수행하기  
__7.7 함께 보면 좋은 자료  

**8장 몽고디비**  
__8.1 NoSQL vs. SQL  
__8.2 몽고디비 설치하기  
____8.2.1 윈도  
____8.2.2 맥  
____8.2.3 리눅스(우분투)  
__8.3 컴퍼스 설치하기  
____8.3.1 윈도  
____8.3.2 맥  
____8.3.3 리눅스(우분투)  
____8.3.4 커넥션 생성하기  
__8.4 데이터베이스 및 컬렉션 생성하기  
__8.5 CRUD 작업하기  
____8.5.1 Create(생성)  
____8.5.2 Read(조회)  
____8.5.3 Update(수정)  
____8.5.4 Delete(삭제)  
__8.6 몽구스 사용하기  
____8.6.1 몽고디비 연결하기  
____8.6.2 스키마 정의하기  
____8.6.3 쿼리 수행하기  
__8.7 함께 보면 좋은 자료  

**9장 익스프레스로 SNS 서비스 만들기**  
__9.1 프로젝트 구조 갖추기  
__9.2 데이터베이스 세팅하기  
__9.3 Passport 모듈로 로그인 구현하기  
____9.3.1 로컬 로그인 구현하기  
____9.3.2 카카오 로그인 구현하기  
__9.4 multer 패키지로 이미지 업로드 구현하기  
__9.5 프로젝트 마무리하기  
____9.5.1 스스로 해보기  
____9.5.2 핵심 정리  
__9.6 함께 보면 좋은 자료  

**10장 웹 API 서버 만들기**  
__10.1 API 서버 이해하기  
__10.2 프로젝트 구조 갖추기  
__10.3 JWT 토큰으로 인증하기  
__10.4 다른 서비스에서 호출하기  
__10.5 SNS API 서버 만들기  
__10.6 사용량 제한 구현하기  
__10.7 CORS 이해하기  
__10.8 프로젝트 마무리하기  
____10.8.1 스스로 해보기  
____10.8.2 핵심 정리  
____10.8.3 함께 보면 좋은 자료  

**11장 노드 서비스 테스트하기**  
__11.1 테스트 준비하기  
__11.2 유닛 테스트  
__11.3 테스트 커버리지  
__11.4 통합 테스트  
__11.5 부하 테스트  
__11.6 프로젝트 마무리하기  
____11.6.1 스스로 해보기  
____11.6.2 핵심 정리  
____11.6.3 함께 보면 좋은 자료  

**12장 웹 소켓으로 실시간 데이터 전송하기**  
__12.1 웹 소켓 이해하기  
__12.2 ws 모듈로 웹 소켓 사용하기  
__12.3 Socket.IO 사용하기  
__12.4 실시간 GIF 채팅방 만들기  
__12.5 미들웨어와 소켓 연결하기  
__12.6 채팅 구현하기  
__12.7 프로젝트 마무리하기  
____12.7.1 스스로 해보기  
____12.7.2 핵심 정리  
____12.7.3 함께 보면 좋은 자료  

**13장 실시간 경매 시스템 만들기**  
__13.1 프로젝트 구조 갖추기  
__13.2 서버센트 이벤트 사용하기  
__13.3 스케줄링 구현하기  
__13.4 프로젝트 마무리하기  
____13.4.1 스스로 해보기  
____13.4.2 핵심 정리  
____13.4.3 함께 보면 좋은 자료  

**14장 CLI 프로그램 만들기**  
__14.1 간단한 콘솔 명령어 만들기  
__14.2 Commander, Inquirer 사용하기  
__14.3 프로젝트 마무리하기  
____14.3.1 스스로 해보기  
____14.3.2 핵심 정리  
____14.3.3 함께 보면 좋은 자료  

**15장 AWS와 GCP로 배포하기**  
__15.1 서비스 운영을 위한 패키지  
____15.1.1 morgan과 express-session  
____15.1.2 시퀄라이즈  
____15.1.3 cross-env  
____15.1.4 sanitize-html, csurf  
____15.1.5 pm2  
____15.1.6 winston  
____15.1.7 helmet, hpp  
____15.1.8 connect-redis  
____15.1.9 nvm, n  
__15.2 깃과 깃허브 사용하기  
____15.2.1 깃 설치하기  
____15.2.2 깃허브 사용하기  
__15.3 AWS 시작하기  
__15.4 AWS에 배포하기  
__15.5 GCP 시작하기  
__15.6 GCP에 배포하기  
__15.7 함께 보면 좋은 자료  

**16장 서버리스 노드 개발**  
__16.1 서버리스 이해하기  
__16.2 AWS S3 사용하기  
__16.3 AWS 람다 사용하기  
__16.4 구글 클라우드 스토리지 사용하기  
__16.5 구글 클라우드 펑션스 사용하기  
__16.6 함께 보면 좋은 자료  

**17장 타입스크립트 노드 개발**  
__17.1 타입스크립트 기본 문법  
__17.2 커뮤니티 타입 정의 적용하기  
__17.3 라이브러리 코드 타이핑하기  
__17.4 내가 작성한 코드 타이핑하기  
__17.5 함께 보면 좋은 자료  

찾아보기  
