$(document).ready(function() {
    //  $("#submit").click(function() {
    var pixel = $('#pixels').val();
    pixels = (500 / pixel);
    $(".square").css("height", pixels + "px");
    $(".square").css("width", pixels + "px");
    x = 0;
    while (x < (pixel * pixel)) {
        $("#container").append("<div class='square'></div>");
        x++;
    }
    $(".square").css("height", pixels + "px");
    $(".square").css("width", pixels + "px");
    //   });
});