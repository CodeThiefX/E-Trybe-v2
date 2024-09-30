$(document).ready(function () {
  $("#mobileMenu").addClass("hidden");

  $("#openMenu").click(function () {
    $("#mobileMenu").removeClass("hidden");
  });

  $("#closeMenu").click(function () {
    $("#mobileMenu").addClass("hidden");
  });
});
