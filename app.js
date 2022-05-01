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


