var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

var clock = document.getElementById('clock');
var body = document.getElementById('main');
var smallCloud = document.getElementById('small-cloud');
var header = document.getElementById('header')

var weatherButton = document.getElementById('weather-button');
var colorButton = document.getElementById('color-button');
var shapeButton = document.getElementById('shape-button');
var timeButton = document.getElementById('time-button');

function checkNight(h) {
    if (h < 4 || h >= 18) {
    	// after 6PM or before 4 AM
        return "night";
    } else {
    	return "day";
    }
}

var timeOfDay = checkNight(hours);
function changeStyle() {
    if (timeOfDay == "night") { // nighttime styles
        body.style.backgroundImage = "url('images/stars.jpg')";
        smallCloud.style.backgroundImage = "none";
        timeButton.innerHTML = "Switch to day";
        weatherButton.style.boxShadow = "0px 5px gray, 0px 10px 15px rgba(0, 0, 0, .25)";
        timeButton.style.boxShadow = "0px 5px gray, 0px 10px 15px rgba(0, 0, 0, .25)";
        colorButton.style.boxShadow = "0px 5px gray, 0px 10px 15px rgba(0, 0, 0, .25)";
        shapeButton.style.boxShadow = "0px 5px gray, 0px 10px 15px rgba(0, 0, 0, .25)";
    } else { // daytime styles
        body.style.backgroundImage = "url('images/med_clouds.png')";
        smallCloud.style.backgroundImage = "url('images/cloudy.png')";
        timeButton.innerHTML = "Switch to night";
        weatherButton.style.boxShadow = "0px 5px #5f9daf, 0px 10px 15px rgba(0, 0, 0, .25)";
        timeButton.style.boxShadow = "0px 5px #5f9daf, 0px 10px 15px rgba(0, 0, 0, .25)";
        colorButton.style.boxShadow = "0px 5px #5f9daf, 0px 10px 15px rgba(0, 0, 0, .25)";
        shapeButton.style.boxShadow = "0px 5px #5f9daf, 0px 10px 15px rgba(0, 0, 0, .25)";
    }
}

var medPos = 0;
var smallPos = 0;
function moveBg() {
    medPos ++;
    smallPos += 2;
    body.style.backgroundPosition = medPos + "px 0px";
    smallCloud.style.backgroundPosition = smallPos + "px 0px";
}
setInterval(moveBg, 40);

// check time every hour so scenery automatically updates
setInterval(changeStyle, (60*(60-minutes)+(60-seconds))*1000);

// button for changing time
timeButton.onclick = function switchTime() {
    if (timeOfDay == "day") {
        timeOfDay = "night";
        changeStyle();
    } else {
        timeOfDay = "day";
        changeStyle();
    }
};

changeStyle();