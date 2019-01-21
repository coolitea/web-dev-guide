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
    headerName: "참고",
    children: [
      { headerName: "품질인증(GS인증) 등급", field: "" },
      { headerName: "전자정부표준프레임워크 호환성", field: "" }
    ]
  },
  {
    headerName: "반응형 웹 여부",
    children: [
      { headerName: "디자인 구분", field: "designType" },
      { headerName: "가변 그리드", field: "fluidGrid" },
      { headerName: "유연한 이미지", field: "flexibleImage" },
      { headerName: "미디어 쿼리", field: "mediaQuery" }
    ]
  },
  {
    headerName: "호환성 확보",
    children: [
      { headerName: "사용자 HW", field: "" },
      { headerName: "사용자 OS", field: "" },
      { headerName: "크로스 브라우징", field: "" }
    ]
  },
  {
    headerName: "웹표준 준수",
    children: [
      { headerName: "시각적 속성 (CSS 표준)", field: "" },
      { headerName: "웹페이지 동적 구성 (DOM표준)", field: "" },
      { headerName: "웹페이지 제어 (ECMA-262표준)", field: "" },
      { headerName: "소프트웨어 설치", field: "" }
    ]
  },
  {
    headerName: "비표준 기술 제거",
    children: [
      { headerName: "액티브X 제거", field: "" },
      { headerName: "EXE 제거", field: "" },
      { headerName: "비표준 멀티미디어 제거", field: "" },
      { headerName: "모바일(HW, SW)에서 비표준기술 제거", field: "" },
      { headerName: "기타 소프트웨어 미설치", field: "" }
    ]
  },
  {
    headerName: "최신 기술 여부",
    children: [
      { headerName: "HTML5 지원", field: "html5Support" },
      { headerName: "CSS3 지원", field: "css3Support" },
      { headerName: "ECMAScript8 지원", field: "ecmaScript8Support" }
    ]
  },
  // {
  //   headerName: "인터페이스",
  //   children: [
  //     { headerName: "Restful", field: "restful" },
  //     { headerName: "SOAP, WSDL, XML", field: "soap" },
  //     { headerName: "uddi", field: "uddi" }
  //   ]
  // },
  {
    headerName: "개발 환경",
    children: [
      { headerName: "개발환경 종속성 ", field: "devEnvironmentDependence" },
      { headerName: "개발도구", field: "devEnvironment" },
      { headerName: "화면개발스펙", field: "devSpec" },
      { headerName: "UI컴포넌트", field: "uiComponent" }
    ]
  },
  {
    headerName: "운영 환경",
    children: [
      { headerName: "벤더 기술지원 의존도", field: "vendorDependence" },
      { headerName: "멀티 OS", field: "multiOs" },
      { headerName: "멀티 브라우저", field: "multiBrowser" },
      { headerName: "화면 배포방식", field: "deploySpec" },
      { headerName: "개발/운영 소스 동일", field: "sourceEquality" },
      { headerName: "지원스펙(통신 등)", field: "supportSkill" }
    ]
  },
  // {
  //   headerName: "성능",
  //   children: [
  //     { headerName: "메모리 사용", field: "memoryUsage" },
  //     { headerName: "브라우저 기본메모리", field: "browserMemory" },
  //     { headerName: "대용량 데이터", field: "bigData" }
  //   ]
  // },
  {
    headerName: "편의성",
    children: [
      { headerName: "버전 관리", field: "versionControl" },
      { headerName: "디버깅 도구", field: "debugTool" },
      { headerName: "3rd 파티 연동", field: "3rd" },
      { headerName: "지역화", field: "localize" }
    ]
  },
  {
    headerName: "업체 정보",
    children: [
      { headerName: "직원수", field: "empNum" },
      { headerName: "레퍼런스", field: "ref" },
      { headerName: "기술지원", field: "homepage" }
    ]
  }
];

// 그리드 데이터 세팅
var rowData = [
  {
    company: "인젠트",
    solution: "아이젭2",
    designType: "반응형",
    devSpec: "HTML5",
    devEnvironment: "업체도구",
    deploySpec: "HTML5"
  },
  {
    company: "소프트보울",
    solution: "SBUx 2.5",
    designType: "반응형",
    devSpec: "HTML5",
    deploySpec: "HTML5"
  },
  {
    company: "인스웨이브",
    solution: "웹스퀘어5",
    designType: "반응형(일부)",
    devSpec: "xForm-HTML 혼용",
    deploySpec: "XML 및 자바스크립트"
  },
  {
    company: "투비소프트",
    solution: "넥사크로플랫폼17",
    designType: "적응형",
    devSpec: "업체고유스펙",
    deploySpec: "업체고유스펙"
  },
  {
    company: "소프트베이스",
    solution: "엑스프레임5",
    designType: "반응형",
    devSpec: "업체고유스펙",
    deploySpec: "XML 및 자바스크립트"
  }
  // {
  //   company: "토마토시스템",
  //   solution: "엑스빌더6",
  //   design: "적응형",
  //   devSpec: "업체고유스펙",
  //   deploySpec: "업체고유스펙"
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
