$(document).ready(function () {
  $("#agent").addClass("bg-[#093155]");
  $("#agent").addClass("text-white");
  $("#role").val("agent");
  $("#developer").removeClass("bg-white");
  $("#developer").removeClass("text-[#093155]");
  $("#landlord").removeClass("bg-white");
  $("#landlord").removeClass("text-[#093155]");
  $("#user").removeClass("bg-white");
  $("#user").removeClass("text-[#093155]");

  $("#agent").click(function () {
    $("#agent").addClass("bg-[#093155]");
    $("#agent").addClass("text-white");
    $("#role").val("agent");
    $("#developer").removeClass("bg-[#093155]");
    $("#developer").removeClass("text-white");
    $("#landlord").removeClass("bg-[#093155]");
    $("#landlord").removeClass("text-white");
    $("#user").removeClass("bg-[#093155]");
    $("#user").removeClass("text-white");
  });

  $("#developer").click(function () {
    $("#developer").addClass("bg-[#093155]");
    $("#developer").addClass("text-white");
    $("#role").val("developer");
    $("#agent").removeClass("bg-[#093155]");
    $("#agent").removeClass("text-white");
    $("#landlord").removeClass("bg-[#093155]");
    $("#landlord").removeClass("text-white");
    $("#user").removeClass("bg-[#093155]");
    $("#user").removeClass("text-white");
  });

  $("#landlord").click(function () {
    $("#landlord").addClass("bg-[#093155]");
    $("#landlord").addClass("text-white");
    $("#role").val("landlord");
    $("#agent").removeClass("bg-[#093155]");
    $("#agent").removeClass("text-white");
    $("#developer").removeClass("bg-[#093155]");
    $("#developer").removeClass("text-white");
    $("#user").removeClass("bg-[#093155]");
    $("#user").removeClass("text-white");
  });

  $("#user").click(function () {
    $("#user").addClass("bg-[#093155]");
    $("#user").addClass("text-white");
    $("#role").val("user");
    $("#agent").removeClass("bg-[#093155]");
    $("#agent").removeClass("text-white");
    $("#developer").removeClass("bg-[#093155]");
    $("#developer").removeClass("text-white");
    $("#landlord").removeClass("bg-[#093155]");
    $("#landlord").removeClass("text-white");
  });
});
