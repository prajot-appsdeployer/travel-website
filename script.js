// too add Shadow on scroll
window.addEventListener("scroll", (e) => {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("add-shadow");
  } else {
    navbar.classList.remove("add-shadow");
  }
});

// to show content of the selected section in the sidebar
const sidebarLinks = document.querySelectorAll("#sidebar a");
const sections = document.querySelectorAll(".section");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Remove the show class from all links and sections
    sidebarLinks.forEach((link) => {
      link.classList.remove("show");
      link.classList.remove("active");
    });

    sections.forEach((section) => section.classList.remove("show"));

    // Add the active class to the clicked link and associated section
    link.classList.add("show");
    link.classList.add("active");
    document.querySelector(link.getAttribute("href")).classList.add("show");
  });
});

// Pagination
$(document).ready(function () {
  $("#table").DataTable();
});

// // Search Functionality
// const input = document.getElementById("searchInput");

// // Search
// function searchTable() {
//   let searchTerm = input.value.toLowerCase();

//   // Select all of the rows in the table
//   let rows = document.querySelectorAll("tbody tr");

//   // Loop through the rows
//   for (var i = 0; i < rows.length; i++) {
//     // Get the current row
//     let row = rows[i];

//     // Select all of the cells in the row
//     let cells = row.querySelectorAll("td");

//     // Set a flag to indicate whether the row matches the search term
//     let rowMatches = false;

//     // Loop through the cells
//     for (let j = 0; j < cells.length; j++) {
//       // Get the current cell
//       let cell = cells[j];

//       // Check if the cell's text content includes the search term
//       if (cell.textContent.toLowerCase().includes(searchTerm)) {
//         // If it does, set the rowMatches flag to true
//         rowMatches = true;
//         break;
//       }
//     }

//     if (!rowMatches) {
//       row.classList.add("hide");
//     }
//   }
// }

// // Remove hide class on back space from the rows
// function removeHide() {
//   // Check if the key that was pressed was the backspace key
//   input.addEventListener("keydown", function (event) {
//     const key = event.key; //
//     if (key === "Backspace" || key === "Delete") {
//       let rows = document.querySelectorAll("tbody tr");
//       for (let i = 0; i < rows.length; i++) {
//         rows[i].classList.remove("hide");
//       }
//     }
//   });
// }
