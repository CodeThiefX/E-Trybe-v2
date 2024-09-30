const hamburgerIcon = document.getElementById("hamburger-icon");
const navbar = document.getElementById("navbar");

hamburgerIcon.addEventListener("click", function () {
  this.classList.toggle("active");
  navbar.classList.toggle("open"); // Use class toggle for animation
});

const navLinks = document.querySelectorAll(".nav-links a"); // Ensure this targets the <a> elements inside .nav-links

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Changed to addEventListener for consistency
    navbar.classList.remove("open");
    hamburgerIcon.classList.remove("active");
  });
});
