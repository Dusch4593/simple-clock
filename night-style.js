var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

function checkNight(h) {
    if (h < 4 || h > 18) {
    	// after 6PM or before 4 AM
        return "night";
    } else {
    	return "day";
    }
}

function changeStyle() {
    var clock = document.getElementById('clock');
    var body = document.getElementById('main');
    var timeOfDay = checkNight(hours);

    if (timeOfDay == "night") {
        body.style.backgroundImage = "url('stars.jpg')";
        clock.style.color = "#00ff00";
        updateStyle();
    } else {
        body.style.backgroundImage = "url('clouds.jpg')";
        clock.style.color = "white";
        updateStyle();
    }
}

function updateStyle() {
    if (minutes == "00" && seconds == "00") {
        changeStyle();
    } else {
        // check time every hour so scenery automatically updates
        setTimeout(changeStyle, (60*(60-minutes)+(60-seconds))*1000);
    }
}

changeStyle();