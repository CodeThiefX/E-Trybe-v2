$(document).ready(function () {
  $("#realtor_form").hide();
  $("#individual_button").addClass("border-b-2 border-[#0A2F55]");

  change_signup_eye = function (src) {
    document.getElementsByClassName("signup_eye").src = src;
  };
  change_signup_eye("../assets/eye-open.png");

  change_confirm_signup_eye = function (src) {
    document.getElementsByClassName("confirm_signup_eye").src = src;
  };
  change_confirm_signup_eye("../assets/eye-open.png");

  changebackground = function (Image) {
    document.getElementById("auth_banner").style.backgroundImage = Image;
  };
  changebackground("url(../assets/individual-banner.png)");

  $("#individual_button").click(function () {
    $("#individual_button").addClass("border-b-2 border-[#0A2F55]");
    $("#realtor_button").removeClass("border-b-2 border-[#0A2F55]");
    changebackground("url(../assets/individual-banner.png)");
    $("#individual_form").show();
    $("#realtor_form").hide();
  });
  $("#realtor_button").click(function () {
    $("#realtor_button").addClass("border-b-2 border-[#0A2F55]");
    $("#individual_button").removeClass("border-b-2 border-[#0A2F55]");
    changebackground("url(../assets/realtor-banner.png)");
    $("#realtor_form").show();
    $("#individual_form").hide();
  });

  $(".signup_eye").click(function () {
    if (
      document.getElementsByClassName("signup_eye").src.includes("eye-open")
    ) {
      change_signup_eye("../assets/eye-closed.png");
      document.getElementsByClassName("signup_password").type = "text";
    } else {
      change_signup_eye("../assets/eye-open.png");
      document.getElementsByClassName("signup_password").type = "password";
    }
  });
  $(".confirm_signup_eye").click(function () {
    if (
      document
        .getElementsByClassName("confirm_signup_eye")
        .src.includes("eye-open")
    ) {
      change_confirm_signup_eye("../assets/eye-closed.png");
      document.getElementsByClassName("confirm_signup_password").type = "text";
    } else {
      change_confirm_signup_eye("../assets/eye-open.png");
      document.getElementsByClassName("confirm_signup_password").type =
        "password";
    }
  });

  toggleconfirmpassword = function () {
    if (
      document.getElementsByClassName("confirm_signup_password").type ===
      "password"
    ) {
      document.getElementsByClassName("confirm_signup_password").type = "text";
    } else {
      document.getElementsByClassName("confirm_signup_password").type =
        "password";
    }
  };
});
