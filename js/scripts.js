//Business End Logic
function deciding(yayaya) {
  size = Math.floor(Math.random()*500);
  if (size < 125) {
    yayaya = "small";
    return yayaya;
  } else if (size >= 125 && size < 250 ) {
    yayaya = "medium";
    return yayaya;
  } else if (size >= 250 && size < 375) {
    yayaya = "big"
    return yayaya;
  } else if (size >= 375) {
    yayaya = "biggest"
    return yayaya;
  }
};

function decidingColor(wawawa) {
  color = Math.floor(Math.random()*500);
  if (color < 125) {
    yayaya = "blue";
    return yayaya;
  } else if (color >= 125 && color < 250 ) {
    yayaya = "red";
    return yayaya;
  } else if (color >= 250 && color < 375) {
    yayaya = "white"
    return yayaya;
  } else if (color >= 375) {
    yayaya = "yellow"
    return yayaya;
  }
}


//Use Interface Log
$(document).ready(function() {
  $("form").submit(function (event) {
    event.preventDefault();
    $("#output").empty();
    var countTo = $("#countTo").val();
    var countBy = 1
    var size;
    var yayaya;
    var wawawa;
    for (i = countBy; i <= countTo; i += countBy) {
      if (i % 3 === 0 && i % 5 === 0) {
        debugger;
        var cat = deciding(yayaya);
        var dog = decidingColor(wawawa);
        $("#output").append("<div>" + "<p>" + "pingpong" + "</p>" + "</div>").find('div:last').addClass(cat).addClass(dog);
      } else if (i % 3 === 0) {
        var cat = deciding(yayaya);
        var dog = decidingColor(wawawa);
        $("#output").append("<div>" + "<p>" + "ping" + "</p>" + "</div>").find('div:last').addClass(cat).addClass(dog);
      } else if (i % 5 === 0) {
        var cat = deciding(yayaya);
        var dog = decidingColor(wawawa);
        $("#output").append("<div>" + "<p>" + "pong" + "</p>" + "</div>").find('div:last').addClass(cat).addClass(dog);
      } else {
        var cat = deciding(yayaya);
        var dog = decidingColor(wawawa);
        $("#output").append("<div>" + "<p>" + i + "</p>" + "</div>").find('div:last').addClass(cat).addClass(dog);
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
