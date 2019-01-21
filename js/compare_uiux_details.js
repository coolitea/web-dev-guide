// 컬럼 정의
var columnDefs = [
  {
    headerName: "업체 및 제품",
    children: [
      { headerName: "업체", field: "company", pinned: "left" },
      { headerName: "제품명", field: "solution", pinned: "left" }
    ]
  },
  {
    headerName: "반응형 웹 여부",
    children: [
      { headerName: "반응형 구분", field: "designType", sort: "asc" },
      { headerName: "모바일 개발", field: "mobileCoding" }
      // { headerName: "가변 그리드", field: "fluidGrid" },
      // { headerName: "유연한 이미지", field: "flexibleImage" },
      // { headerName: "미디어 쿼리", field: "mediaQuery" }
    ]
  },
  {
    headerName: "호환성 확보",
    children: [
      {
        headerName: "(멀티HW)모바일/태블릿/PC",
        field: "multiHw"
      },
      {
        headerName: "(멀티OS-모바일)안드로이드/iOS (삼성,윈도우,블랙베리)",
        field: "multiOsMobile"
      },
      {
        headerName: "(멀티OS-PC)윈도/OSX (리눅스,크롬OS)",
        field: "multiOsPC"
      },
      {
        headerName:
          "(크로스브라우징)크롬/사파리/IE/삼성인터넷/엣지 (파이어폭스,오페라)",
        field: "multiBrowser"
      }
    ]
  },
  {
    headerName: "웹표준 준수",
    children: [
      {
        headerName: "(CSS 표준)시각적 속성 분리",
        field: "cssStandard",
        sort: "asc"
      },
      {
        headerName: "(DOM표준)웹페이지 동적 구성",
        field: "htmlStandard",
        sort: "asc"
      },
      {
        headerName: "(ECMA-262표준)웹페이지 제어",
        field: "ecma262Standard",
        sort: "asc"
      }
    ]
  },
  {
    headerName: "비표준 기술 제거",
    children: [
      { headerName: "소프트웨어 미설치", field: "noPlugin" },
      { headerName: "액티브X 제거", field: "" },
      { headerName: "EXE 제거", field: "" }
      // { headerName: "비표준 멀티미디어 제거", field: "" },
      // { headerName: "모바일(HW, SW)에서 비표준기술 제거", field: "" },
      // { headerName: "기타 소프트웨어 미설치", field: "" }
    ]
  },

  {
    headerName: "최신 기술 여부",
    children: [
      { headerName: "HTML5 지원", field: "htmlSupport" },
      { headerName: "CSS3 지원", field: "cssSupport" },
      { headerName: "ECMAScript8 지원", field: "ecmaScriptSupport" }
    ]
  },
  {
    headerName: "참고",
    children: [
      { headerName: "품질인증(GS인증) (1등급)", field: "gsGrade", sort: "asc" },
      {
        headerName: "전자정부표준프레임워크 호환성 (레벨2)",
        field: "eGovFrameVersion",
        sort: "desc"
      }
    ]
  }
  // {
  //   headerName: "인터페이스",
  //   children: [
  //     { headerName: "Restful", field: "restful" },
  //     { headerName: "SOAP, WSDL, XML", field: "soap" },
  //     { headerName: "uddi", field: "uddi" }
  //   ]
  // },
  // {
  //   headerName: "개발 환경",
  //   children: [
  //     { headerName: "개발환경 종속성 ", field: "devEnvironmentDependence" },
  //     { headerName: "개발도구", field: "devEnvironment" },
  //     { headerName: "화면개발스펙", field: "devSpec" },
  //     { headerName: "UI컴포넌트", field: "uiComponent" }
  //   ]
  // },
  // {
  //   headerName: "운영 환경",
  //   children: [
  //     { headerName: "벤더 기술지원 의존도", field: "vendorDependence" },
  //     { headerName: "화면 배포방식", field: "deploySpec" },
  //     { headerName: "개발/운영 소스 동일", field: "sourceEquality" },
  //     { headerName: "지원스펙(통신 등)", field: "supportSkill" }
  //   ]
  // },
  // {
  //   headerName: "성능",
  //   children: [
  //     { headerName: "메모리 사용", field: "memoryUsage" },
  //     { headerName: "브라우저 기본메모리", field: "browserMemory" },
  //     { headerName: "대용량 데이터", field: "bigData" }
  //   ]
  // },
  // {
  //   headerName: "편의성",
  //   children: [
  //     { headerName: "버전 관리", field: "versionControl" },
  //     { headerName: "디버깅 도구", field: "debugTool" },
  //     { headerName: "3rd 파티 연동", field: "3rd" },
  //     { headerName: "지역화", field: "localize" }
  //   ]
  // },
  // {
  //   headerName: "업체 정보",
  //   children: [
  //     { headerName: "직원수", field: "empNum" },
  //     { headerName: "레퍼런스", field: "ref" }
  //     { headerName: "기술지원", field: "devGuide" }
  //   ]
  // }
];

// 그리드 데이터 세팅
var rowData = [
  {
    company: "소프트보울",
    solution: "SBUx 2.0",
    gsGrade: "1등급" /*(v2.0)*/,
    eGovFrameVersion: "레벨 정보없음",
    designType: "반응형",
    mobileCoding: "One Source",
    cssStandard: "O",
    htmlStandard: "O",
    ecma262Standard: "O",
    htmlSupport: "HTML5.2",
    cssSupport: "CSS3",
    ecmaScriptSupport: "ES6",
    noPlugin: "O",
    multiHw: "O/O/O",
    multiOsMobile: "O/O",
    multiOsPC: "O/O",
    multiBrowser: "O/O/O/O/O"
    // devSpec: "HTML5",
    // deploySpec: "HTML5"
  },
  {
    company: "인젠트",
    solution: "아이젭2",
    gsGrade: "1등급" /*(v1.0)*/,
    eGovFrameVersion: "레벨 정보없음",
    designType: "반응형",
    mobileCoding: "One Source",
    cssStandard: "O",
    htmlStandard: "O",
    ecma262Standard: "O",
    htmlSupport: "HTML5.2",
    cssSupport: "CSS3",
    ecmaScriptSupport: "",
    noPlugin: "O",
    multiHw: "O/O/O",
    multiOsMobile: "O/O",
    multiOsPC: "O/O",
    multiBrowser: "O/O/O/O/O"
    // devSpec: "HTML5",
    // devEnvironment: "업체도구",
    // deploySpec: "HTML5"
  },
  {
    company: "인스웨이브",
    solution: "웹스퀘어5",
    gsGrade: "1등급" /*(v5.0)*/,
    eGovFrameVersion: "레벨1 (v3.5) (2017.12.21)",
    designType: "적응형",
    mobileCoding: "(별도 하이브리드 개발)",
    cssStandard: "X",
    htmlStandard: "X (Javascript기반 웹스퀘어5 엔진)",
    ecma262Standard: "X (Javascript기반 웹스퀘어5 엔진)",
    htmlSupport: "HTML5.2",
    cssSupport: "CSS3",
    ecmaScriptSupport: "",
    noPlugin: "",
    multiHw: "O/O/O",
    multiOsMobile: "",
    multiOsPC: "",
    multiBrowser: ""
    // devSpec: "xForm-HTML 혼용",
    // deploySpec: "XML 및 자바스크립트"
  },
  {
    company: "투비소프트",
    solution: "넥사크로플랫폼17",
    gsGrade: "1등급" /*(v17)*/,
    eGovFrameVersion: "레벨1 (v3.6) (2018.07.12)",
    designType: "적응형",
    mobileCoding: "기기별 템플릿 개발(별도 하이브리드 개발)",
    cssStandard: "X",
    htmlStandard: "X (투비소프트 자체개발 Unified.js)",
    ecma262Standard: "X (투비소프트 자체개발 Unified.js)",
    htmlSupport: "HTML5",
    cssSupport: "별도 코딩필요",
    ecmaScriptSupport: "",
    noPlugin: "",
    multiHw: "O/X/O",
    multiOsMobile: "O/O",
    multiOsPC: "O/O",
    multiBrowser:
      "" /*IE8, IE9, IE10, IE11, Edge, Chrome, Safari, Firefox, Opera*/

    // devSpec: "업체고유스펙",
    // deploySpec: "업체고유스펙"
  },
  {
    company: "소프트베이스",
    solution: "엑스프레임5",
    gsGrade: "등급없음",
    eGovFrameVersion: "레벨 정보없음",
    designType: "반응형",
    mobileCoding: "One Source",
    cssStandard: "X",
    htmlStandard: "",
    ecma262Standard: "",
    noPlugin: "",
    multiHw: "O/O/O",
    multiOsMobile: "",
    multiOsPC: "",
    multiBrowser: ""
    // devSpec: "업체고유스펙",
    // deploySpec: "XML 및 자바스크립트"
  }
  // {
  //   company: "토마토시스템",
  //   solution: "엑스빌더6",
  //   gsGrade: "1등급" /* (v1.0) */,
  //   eGovFrameVersion: "레벨2 (v3.6) (2018.02.19)",
  //   designType: "반응형",
  //   mobileCoding: "",
  //   cssStandard: "미확인",
  //   htmlStandard: "",
  //   ecma262Standard: "",
  //   noPlugin: "",
  //   devSpec: "업체고유스펙",
  //   deploySpec: "XML 및 자바스크립트"
  // }
];

// 컬럼 속성 세팅
var gridOptions = {
  defaultColDef: {
    resizable: true,
    sortable: true
    // sort: "asc",
    // filter: true
  },
  columnDefs: columnDefs,
  rowData: rowData,
  onColumnResized: function(params) {
    console.log(params);
  }
};

// 그리드가 사용할 컨테이너 지정
var compareUiUxDetailsGridDiv = document.querySelector(
  "#compareUiUxDetailsGrid"
);

// 그리드 생성
new agGrid.Grid(compareUiUxDetailsGridDiv, gridOptions);

// 컬럼 사이즈 자동 조절
function autoSizeAll() {
  var allColumnIds = [];
  gridOptions.columnApi.getAllColumns().forEach(function(column) {
    allColumnIds.push(column.colId);
  });
  gridOptions.columnApi.autoSizeColumns(allColumnIds);
}

autoSizeAll();
