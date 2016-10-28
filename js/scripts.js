//Business End Logic
// function figureItOut(countTo) {
//   var countBy = 1
//   for (i = countBy; i <= countTo; i += countBy) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       $("#output").append("<li>" + "pingpong" + "</li>");
//     } else if (i % 3 === 0) {
//       $("#output").append("<li>" + "ping" + "</li>");
//     } else if (i % 5 === 0) {
//       $("#output").append("<li>" + "pong" + "</li>");
//     } else {
//       $("#output").append("<li>" + i + "</li>");
//     }
//   }
//   return;
// };





//Use Interface Log
$(document).ready(function() {
  $("form").submit(function (event) {
    event.preventDefault();
    $("#output").empty();
    var countTo = $("#countTo").val();
    var countBy = 1
    for (i = countBy; i <= countTo; i += countBy) {
      if (i % 3 === 0 && i % 5 === 0) {
        $("#output").append("<li>" + "pingpong" + "</li>");
      } else if (i % 3 === 0) {
        $("#output").append("<li>" + "ping" + "</li>");
      } else if (i % 5 === 0) {
        $("#output").append("<li>" + "pong" + "</li>");
      } else {
        $("#output").append("<li>" + i + "</li>");
      }
    };




  });
});
