const sidebarToggleBtn = document.getElementById("sidebar-toggler");
const sidebarLinks = document.querySelectorAll("#sidebar a");
const sections = document.querySelectorAll(".section");
const navbar = document.getElementById("navbar");
const sidebarMenu = document.getElementById("sidebarMenu");
const sidebarPageContainer = document.getElementById("sidebar-page-container");
//sidebartoggler

sidebarToggleBtn.addEventListener("click", () => {
  sidebarMenu.classList.toggle("hide");

  if (sidebarMenu.classList.contains("hide")) {
    sidebarToggleBtn.classList.add("st-left", "sbt-notactive");
    sidebarPageContainer.classList.add("only-content");
  } else {
    sidebarToggleBtn.classList.remove("st-left", "sbt-notactive");
    sidebarPageContainer.classList.remove("only-content");
  }
});

// too add Shadow on scroll
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 0) {
    navbar.classList.add("add-shadow");
  } else {
    navbar.classList.remove("add-shadow");
  }
});

// to show content of the selected section in the sidebar
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

// Email validation for contact form
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Form Submited");
    document.contact.email.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.contact.email.focus();
    return false;
  }
}

//Singup form

const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (e) => {
  let FullName = document.getElementById("full-name");
  let Email = document.getElementById("email");
  let pass = document.getElementById("password");

  let name = FullName.value;
  let email = Email.value;
  let password = pass.value;

  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  let regName = /\d+$/g;

  if (name == "" || regName.test(name)) {
    alert("Please enter your name properly.");
    FullName.focus();
    return false;
  } else if (email == "" || !regEmail.test(email)) {
    alert("Please enter a valid e-mail address.");
    Email.focus();
    return false;
  } else if (password == "") {
    alert("Please enter your password");
    pass.focus();
    return false;
  } else if (password.length < 6) {
    alert("Password should be atleast 6 character long");
    pass.focus();
    return false;
  } else {
    alert("User Registered");
    return true;
  }
});

// Login
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  let userName = document.getElementById("username");
  let pass = document.getElementById("lpassword");

  let username = userName.value;
  let password = pass.value;

  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

  if (username == "" || !regEmail.test(username)) {
    alert("Please enter a valid e-mail address.");
  } else if (password == "") {
    alert("Please enter your password");
  } else if (password.length < 6) {
    alert("Password should be atleast 6 character long");
  } else {
    alert("User Logged in.");
  }
});
