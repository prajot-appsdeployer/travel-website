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
