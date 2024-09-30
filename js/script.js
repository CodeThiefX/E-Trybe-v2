const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active-question");
  });
});

// document.querySelectorAll(".browseFilesButton").forEach((button) => {
//   button.addEventListener("click", function () {
//     // Use the data-input-target attribute to find the associated input
//     const inputId = button.getAttribute("data-input-target");
//     document.getElementById(inputId).click();
//   });
// });

const add_clients = document.getElementById("add-clients");
const register_clients = document.getElementById("register-clients");

const clients_page = document.getElementById("clients_page");
const addclients_page = document.getElementById("addclients_page");

const showAddClientsPage = () => {
  clients_page.style.display = "none";
  addclients_page.classList.remove("addclients_page");
  addclients_page.classList.add("display");

  console.log("clicked");
};

add_clients.addEventListener("click", showAddClientsPage);
register_clients.addEventListener("click", showAddClientsPage);

const submit_btn = document.querySelector(".submit-btn");
submit_btn.addEventListener("click", () => {
  addclients_page.classList.add("addclients_page");
  clients_page.style.display = "flex";
  addclients_page.classList.remove("display");
});

const hamburgerIconClients = document.getElementById("hamburger_icon_clients");
const hamburgerIcon = document.getElementById("hamburger-icon");
const navbar_clients = document.getElementById("navbar_clients");
const navbar_clients_mobile = document.getElementById("navbar_clients_mobile");

hamburgerIconClients.addEventListener("click", function () {
  this.classList.toggle("active");
  navbar_clients.classList.toggle("open"); // Use class toggle for animation
});

hamburgerIcon.addEventListener("click", function () {
  this.classList.toggle("active");
  navbar_clients.classList.toggle("open"); // Use class toggle for animation
  navbar_clients_mobile.classList.toggle("open"); // Use class toggle for animation
});

const navLinks = document.querySelectorAll(".nav-links a"); // Ensure this targets the <a> elements inside .nav-links

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Changed to addEventListener for consistency
    navbar_clients.classList.remove("open");
    navbar_clients_mobile.classList.remove("open");
    hamburgerIcon.classList.remove("active");
    hamburgerIconClients.classList.remove("active");
  });
});
