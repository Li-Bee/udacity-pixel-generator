// Select color input
var colorGrid = document.getElementById("colorPicker");

// Select size input - assign elements to the variables
var sizeHeight = document.getElementById("inputHeight");
var sizeWidth = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
const form = document.getElementById("sizePicker");
form.addEventListener("submit", makeGrid);

function makeGrid(event) {
  // stop automatic reset of form
  event.preventDefault();

  const table = document.getElementById("pixelCanvas");
  const tableBody = document.createElement("tbody");

  // reset the table HTML
  table.innerHTML = "";

  // add listener to table element which calls
  // `handleClick` function
  table.addEventListener("click", handleClick);

  // `handleClick` function
  // checks to see if element that fired event is a table cell
  // then it sets the background color to value of
  // `colorGrid` input

  function handleClick(event) {
    if (event.target.matches("td")) {
      event.target.style.backgroundColor = colorGrid.value;
    }
  }

  // cells creation
  // using the value of `sizeHeight`
  for (let i = 1; i <= sizeHeight.value; i++) {
    // create table row
    const tableRow = document.createElement("tr");

    // using the value of `sizeWidth`
    for (let i = 1; i <= sizeWidth.value; i++) {
      // create table cells (cols) within each row - loop within loop
      const tableCell = document.createElement("td");
      // append (add) cell to the row
      tableRow.appendChild(tableCell);
    }

    // append to the tableBody element rather than
    // the table element
    tableBody.appendChild(tableRow);
  }

  // append table body to table
  table.appendChild(tableBody);
}

// table.addEventListener("click", function (event) {
//   if (event.target.tagName === "td") {
//     event.target.style.backgroundColor = colorGrid;
//   }
// });

// Code references used to support creation:
// https://stackoverflow.com/questions/14643617/create-table-using-javascript
// https://stackoverflow.com/questions/73881505/cell-in-table-wont-color-on-click-codenewbie/73882273#73882273
