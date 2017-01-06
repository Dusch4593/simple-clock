var clock = document.getElementById('clock');
var body = document.getElementById('main');

var now = new Date();
var hour = now.getHours();

function checkNight(h) {
    if (h < 4 || h > 18) {
    	// after 6PM or before 4 AM
        return "night";
    } else {
    	return "day";
    }
}

var timeOfDay = checkNight(hour);

function nightStyle() {
    if (timeOfDay == "night") {
        body.style.backgroundColor = "black";
        clock.style.color = "#00ff00";
        clock.style.borderColor = "gray";
    }
}

nightStyle();