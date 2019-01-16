// specify the columns
var columnDefs = [
  {
    headerName: "디자인",
    field: "design",
    sort: "asc",
    sortable: true,
    filter: true,
    width: 150
  },
  {
    headerName: "화면개발스펙",
    field: "devSpec",
    sort: "asc",
    sortable: true,
    filter: true,
    width: 150
  },
  {
    headerName: "화면배포방식",
    field: "deploySpec",
    sort: "asc",
    sortable: true,
    filter: true,
    width: 150
  },
  {
    headerName: "업체",
    field: "company",
    sort: "asc",
    sortable: true,
    filter: true,
    width: 200
  },
  {
    headerName: "제품명",
    field: "solution",
    sortable: true,
    filter: true
  }
];

// specify the data
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

// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

// lookup the container we want the Grid to use
var eGridDiv = document.querySelector("#compareUiUxGrid");

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);
