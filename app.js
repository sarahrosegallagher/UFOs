//import data.js
const tableData = data;

//ref html table using d3
    // declare var tbody, loc <tbody> tag 
var  tbody = d3.select("tbody");

// start dynamic table
function buildTable(data){

    //clear 
    tbody.html("");

    //loop thru each obj, append a row and cells for each val in row
    data.forEach((dataRow) => {

        //append a row
        let row = tbody.append("tr");

        //loop thru dataRow and addd each value as td
        Object.values(dataRow).forEach((val) =>{
        let cell = row.append("td");
        cell.text(val);
        });
    });
}

// start date filter

//handle click
function handleClick(){
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //if filter strict equ date data 
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);

    }

    // build filtered table (call buildTable fxn)
    buildTable(filteredData);
}

//listen for click
    //selector string # tag for HTML id 
d3.selectAll("#filter-btn").on("click", handleClick);

//load unfiltered table upon page load 
buildTable(tableData);