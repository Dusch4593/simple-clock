var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

var clock = document.getElementById('clock');
var body = document.getElementById('main');
var smallCloud = document.getElementById('small-cloud');
var header = document.getElementById('header')

function checkNight(h) {
    if (h < 4 || h >= 18 || h==15) {
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
        themeButton.style.boxShadow = "0px 5px gray, 0px 10px 15px rgba(0, 0, 0, .25)";
        clock.style.color = "#00ff00";
    } else { // daytime styles
        body.style.backgroundImage = "url('images/med_clouds.png')";
        smallCloud.style.backgroundImage = "url('images/small_clouds.png')";
        timeButton.innerHTML = "Switch to night";
        weatherButton.style.boxShadow = "0px 5px #5f9daf, 0px 10px 15px rgba(0, 0, 0, .25)";
        timeButton.style.boxShadow = "0px 5px #5f9daf, 0px 10px 15px rgba(0, 0, 0, .25)";
        themeButton.style.boxShadow = "0px 5px #5f9daf, 0px 10px 15px rgba(0, 0, 0, .25)";
        clock.style.color = "#26fcff";
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

// buttons **************************************************************************************

var weatherButton = document.getElementById('weather-button');
var themeButton = document.getElementById('theme-button');

// button for changing time
var timeButton = document.getElementById('time-button');
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


