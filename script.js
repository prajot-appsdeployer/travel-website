// too add Shadow on scroll
window.addEventListener("scroll", (e) => {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("add-shadow");
  } else {
    navbar.classList.remove("add-shadow");
  }
});

// Selection on the sidebar
// const sidebarItems = document.querySelectorAll(".sidebar-item");
// for (var i = 0; i < sidebarItems.length; i++) {
//   sidebarItems[i].addEventListener("click", function () {
//     var selected = document.querySelector(".active");
//     if (selected) {
//       selected.classList.remove("active");
//     }
//     console.log("");
//     this.classList.add("active");
//   });
// }
