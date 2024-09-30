const hamburger_addClients = document.getElementById("hamburger_addclients");
const closeMenu = document.getElementById("closemenu");

function openMenu() {
  navbar.style.transform = "translateY(0)";
  navbar.style.opacity = "1";
}

function closeMenuFn() {
  navbar.style.transform = "translateY(-100%)"; // Hide the navbar off-screen
  navbar.style.opacity = "0"; // Make the navbar completely invisible
}

hamburger_addClients.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFn);
