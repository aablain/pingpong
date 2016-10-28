//Business End Logic



//Use Interface Log
$(document).ready(function() {
  $("form").submit(function (event) {
    event.preventDefault();
    $("#output").empty();
    var countTo = $("#countTo").val();
    var countBy = 1
    var size;
    var yayaya;
    for (i = countBy; i <= countTo; i += countBy) {
      if (i % 3 === 0 && i % 5 === 0) {
        debugger;
        size = Math.floor(Math.random()*500);
        if (size < 125) {
          yayaya = "small";
        } else if (size >= 125 && size < 250 ) {
          yayaya = "medium";
        } else if (size >= 250 && size < 375) {
          yayaya = "big"
        } else if (size >= 375) {
          yayaya = "biggest"
        }
        $("#output").append("<div>" + "<p>" + "pingpong" + "</p>" + "</div>").find('div:last').addClass(yayaya);
        // $("#output div").addclass("4");
      } else if (i % 3 === 0) {
        size = Math.floor(Math.random()*500);
        if (size < 125) {
          yayaya = "small";
        } else if (size >= 125 && size < 250 ) {
          yayaya = "medium";
        } else if (size >= 250 && size < 375) {
          yayaya = "big"
        } else if (size >= 375) {
          yayaya = "biggest"
        }
        $("#output").append("<div>" + "<p>" + "ping" + "</p>" + "</div>").find('div:last').addClass(yayaya);
      } else if (i % 5 === 0) {
        size = Math.floor(Math.random()*500);
        if (size < 125) {
          yayaya = "small";
        } else if (size >= 125 && size < 250 ) {
          yayaya = "medium";
        } else if (size >= 250 && size < 375) {
          yayaya = "big"
        } else if (size >= 375) {
          yayaya = "biggest"
        }
        $("#output").append("<div>" + "<p>" + "pong" + "</p>" + "</div>").find('div:last').addClass(yayaya);
      } else {
        size = Math.floor(Math.random()*500);
        if (size < 125) {
          yayaya = "small";
        } else if (size >= 125 && size < 250 ) {
          yayaya = "medium";
        } else if (size >= 250 && size < 375) {
          yayaya = "big"
        } else if (size >= 375) {
          yayaya = "biggest"
        }
        $("#output").append("<div>" + "<p>" + i + "</p>" + "</div>").find('div:last').addClass(yayaya);
      }
    };

    // color = Math.floor(Math.random()*500);
    // size = Math.floor(Math.random()*500);
    // if (color < 175) {
    //   .addClass()
    // } else if (color >= 175 && color < 350 ) {
    //   .addClass()
    // } else if (color >= 350) {
    //   .addClass()
    // }
    // if (size < 125) {
    //   $("#output").find('div:last').addClass("1");
    // } else if (size >= 125 && size < 250 ) {
    //   $("#output").find('div:last').addClass("2");
    // } else if (size >= 250 && size < 375) {
    //   $("#output").find('div:last').addClass("3");
    // } else if (size >= 375) {
    //   $("#output").find('div:last').addClass("4");
    // }

  });
});
