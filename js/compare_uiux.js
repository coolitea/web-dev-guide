// specify the columns
var columnDefs = [
  { headerName: "업체", field: "company" },
  { headerName: "제품명", field: "solution" },
  { headerName: "디자인", field: "design" },
  { headerName: "화면개발스펙", field: "devSpec" }
];

// specify the data
var rowData = [
  {
    company: "인스웨이브",
    solution: "웹스퀘어",
    design: "-",
    devSpec: "xForm-HTML 혼용"
  },
  {
    company: "투비소프트",
    solution: "넥사크로플랫폼17",
    design: "적응형",
    devSpec: "업체 고유스펙"
  },
  {
    company: "소프트베이스",
    solution: "엑스프레임5",
    design: "-",
    devSpec: "-"
  },
  { company: "토마토시스템", solution: "엑스빌더6", design: "-", devSpec: "-" },
  { company: "인젠트", solution: "아이젭", design: "-", devSpec: "HTML5" },
  {
    company: "소프트보울",
    solution: "SBUx",
    design: "반응형",
    devSpec: "HTML5"
  }
];

// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

// lookup the container we want the Grid to use
var eGridDiv = document.querySelector("#myGrid");

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);
