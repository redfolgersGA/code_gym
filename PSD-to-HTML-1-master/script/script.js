$(document).ready(function(){
  alert("jquery loaded");

  $("#lead-banner p");
  $("h3").css({border: "3px solid blue"});

  $(".wrapper").css({border: "3px solid red"})

  $("#clients").css({border: "3px solid yellow"})

  $("header nav li:first").css({border: "2px solid red"});
  $("header nav li:last").css({border: "2px solid red"});

  $("#contact ul:first").css({border: "2px solid red"});
  $("#contact ul:last").css({border: "2px solid red"});

  $("header nav li:even").css({border: "2px solid blue"})

  $("header .wrapper").removeClass("wrapper");
  $("header .wrapper").addClass("wrapper")




});
