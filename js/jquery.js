// $(document).ready(function () {
// $("#btn").click(function () {
//   console.log("You Clicked on", this);

//   //   $("#we").hide();
//   $("p:first").click(function () {
//     console.log("clicked on", this);
//   });
// });

// console.log("a new file starts here");

// Events in jQuery
// MouseEventS=click,dblclick,mouseleave,mouseenter
// KeyboardEvents=keypress,keydown,
// form events=submit,change,focus,blur
// document/window events=load,resize,scroll,unload

// $("#btn").click(function () {
//   console.log("clicked");
// });

// $("#btn").dblclick(function () {
//   console.log("you double clicked on", this);
//   $("p.wer").hide();
// });

//   $("#btn").mouseenter(function () {
//     console.log("mouse has entered");
//   });
// });

// $("p").click(function () {
//   console.log("hovered");
// });

// $("#btn").click(function () {
//   $("#wiki").hide(2000, function () {
//     console.log("hidden");
//   });
//   $("#wiki").show(2000, function () {
//     console.log("hidden");
//   });
// });

$("p").hide(2000, function () {
  $("p").show(2000);
});
$("p").show(2000, function () {
  $("p").hide(2000);
  // $("p").fadeToggle(1000);
  $("p").show(2000);
});

$("#btn1").click(function () {
  $("p").fadeIn(1000);
});
$("#btn2").click(function () {
  $("p").fadeOut(1000);
});
$("#btn3").click(function () {
  $("p").fadeTo(1000);
});
$("#btn4").click(function () {
  $("p").fadeToggle(1000);
});
$("#btn5").click(function () {
  $("#wiki1").slideDown(1000, function () {
    $("p").fadeOut(2000);
  });
});
$("#btn6").click(function () {
  $("#wiki1").slideUp(1000, function () {
    $("p").fadeIn(2000);
  });
});
$("#btn7").click(function () {
  $("#wiki3").animate(
    {
      opacity: 0.3,
      height: "150px",
      width: "350px",
    },
    2000
  );
});

$("#btn8").click(function () {
  $("#wiki2").text("We changed the text of the paragraph2");
});
$("#btn9").click(function () {
  $("#wiki3").text("We changed the text of the paragraph3");
});
$("#btn10").click(function () {
  $("p").html("<b>Advertise Here");
});
$("#btn11").click(function () {
  $("body").html("<b>Gayab");
  $("body").css("background-color", " green");
});

$("#inp").val("Click on Get Request Button");
$("#ta").val("FETCHED DATA GOES HERE...");

$("#btn12").click(function () {
  $("#wiki1").empty();
});

$("#wiki1").addClass("myclass");
$("#wiki1").addClass("myclass1");
$("#wiki1").addClass("myclass2");
// $("#wiki1").removeClass("myclass1");
$("#wiki1").toggleClass("myclass1");

$("#btn13").click(function () {
  $("#wiki1").css("background-color", "red");
  $("#wiki2").css("background-color", "blue");
  $("#wiki2").css("background-color", "green");
  $("p").css("background-color", "yellow");
});
$("#btn14").click(function () {
  $.get("https://code.jquery.com/jquery-3.6.0.js", function (data, status) {
    $("#ta").val(data);
    $("#inp").val("Your Fetched Data Is below");
    alert(status);
    $("#ta").css("background-color", "yellow");
    $("#ta").css("font-size", 10);
    $("#inp").css("background-color", "grey");
  });
});

// $.post(
//   "https://code.jquery.com/jquery-3.6.0.js",
//   { name: "kartik", type: "webdev " },
//   function (data, status) {
//     alert(status);
//   }
// );

$("#all").click(function () {
  $("#btn1").click();
  $("#btn2").click();
  $("#btn3").click();
  $("#btn4").click();
  $("#btn5").click();
  $("#btn6").click();
  $("#btn7").click();
  $("#btn8").click();
  $("#btn9").click();
  $("#btn10").click();
  // $("#btn11").click();
  $("#btn12").click();
  $("#btn13").click();
  $("#btn14").click();
});
