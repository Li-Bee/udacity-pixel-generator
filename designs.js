// Select color input
var colorGrid = document.getElementById("colorPicker");

// Select size input
var sizeHeight = document.getElementById("inputHeight").value;
var sizeWidth = document.getElementById("inputWidth").value;

// When size is submitted by the user, call makeGrid()
const form = document.getElementById("sizePicker");
form.addEventListener("submit", makeGrid);

function makeGrid(event) {
  // stop automatic reset of form
  event.preventDefault();
  // body reference - get first <body></body>
  var body = document.getElementsByTagName("body")[0];

  // Your code goes here!
  var table = document.getElementById("pixelCanvas");
  var tableBody = document.createElement("tbody");

  // cells creation
  for (let i = 1; i <= sizeHeight; i++) {
    // create table row
    var tableRow = document.createElement("tr");

    for (let i = 1; i <= sizeWidth; i++) {
      // create table cells (cols) within each row - loop within loop
      var tableCell = document.createElement("td");
      // append cell to the row
      tableRow.appendChild(tableCell);
    }

    // add row to the table
    table.appendChild(tableRow);
  }
  // append the table body inside the table
  table.appendChild(tableBody);
}

table.addEventListener("click", function (event) {
  if (event.target.tagName === "td") {
    event.target.style.backgroundColor = colorGrid;
  }
});
