// 컬럼 정의
var columnDefs = [
  {
    headerName: "업체",
    field: "company",
    pinned: "left"
  },
  {
    headerName: "제품명",
    field: "solution",
    pinned: "left"
  },
  {
    headerName: "디자인",
    field: "design"
  },
  {
    headerName: "화면개발스펙",
    field: "devSpec"
  },
  {
    headerName: "화면배포방식",
    field: "deploySpec"
  },
  {
    headerName: "HTML5적합도",
    field: "html5Match"
  },
  {
    headerName: "기반기술",
    field: "baseSkill"
  },
  {
    headerName: "브라우저 기본메모리",
    field: "browserMemory"
  },
  {
    headerName: "메모리 사용",
    field: "memoryUsage"
  },
  {
    headerName: "지원스펙(통신 등)",
    field: "supportSkill"
  },
  {
    headerName: "소스 동일",
    field: "sourceEquality"
  },
  {
    headerName: "멀티 OS",
    field: "multiOs"
  },
  {
    headerName: "멀티 브라우저",
    field: "multiBrowser"
  },
  {
    headerName: "UI컴포넌트",
    field: "uiComponent"
  },
  {
    headerName: "개발환경",
    field: "devEnvironment"
  },
  {
    headerName: "대용량 데이터",
    field: "bigData"
  },
  {
    headerName: "반응형 웹 지원 방식",
    field: "RWDsupport"
  },
  {
    headerName: "CSS 지원",
    field: "cssSupport"
  },
  {
    headerName: "모바일",
    field: "mobile"
  },
  {
    headerName: "벤더 기술지원 의존도",
    field: "vendorDependence"
  }
];

// 그리드 데이터 세팅
var rowData = [
  {
    company: "인젠트",
    solution: "아이젭",
    design: "반응형",
    devSpec: "HTML5",
    deploySpec: "HTML5"
  },
  {
    company: "소프트보울",
    solution: "SBUx",
    design: "반응형",
    devSpec: "HTML5",
    deploySpec: "HTML5"
  },
  {
    company: "인스웨이브",
    solution: "웹스퀘어",
    design: "반응형",
    devSpec: "xForm-HTML 혼용",
    deploySpec: "업체고유스펙"
  },
  {
    company: "투비소프트",
    solution: "넥사크로플랫폼17",
    design: "적응형",
    devSpec: "업체고유스펙",
    deploySpec: "업체고유스펙"
  },
  {
    company: "소프트베이스",
    solution: "엑스프레임5",
    design: "적응형",
    devSpec: "업체고유스펙",
    deploySpec: "업체고유스펙"
  },
  {
    company: "토마토시스템",
    solution: "엑스빌더6",
    design: "적응형",
    devSpec: "업체고유스펙",
    deploySpec: "업체고유스펙"
  }
];

// 컬럼 속성 세팅
var gridOptions = {
  defaultColDef: {
    resizable: true,
    sort: "asc",
    sortable: true,
    filter: true
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
