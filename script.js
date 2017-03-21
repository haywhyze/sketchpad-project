	function getRandomValue(start, range) {
	    value = Math.floor((Math.random() * range) + start);
	    return value;
	};

	function initializeBoard(pixel) {

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

	    $(".square").hover(function() {
	        $(this).css('background-color', "rgb(" + getRandomValue(0, 256) + "," + getRandomValue(0, 256) + "," + getRandomValue(0, 256) + ")");

	    });
	}


	$(document).ready(function() {

	    var pixel = 16;

	    initializeBoard(pixel);

	    $('button').click(function() {
	        $('#container').empty();
	        var pixel = prompt("How many squares per sides would you like to have in the new grid? ", "16");
	        initializeBoard(pixel);
	    })


	});