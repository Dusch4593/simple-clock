var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

var clock = document.getElementById('clock');
var body = document.getElementById('main');
var smallCloud = document.getElementById('small-cloud');

function checkNight(h) {
    if (h < 4 || h >= 18) {
    	// after 6PM or before 4 AM
        return "night";
    } else {
    	return "day";
    }
}

function changeStyle() {
    var timeOfDay = checkNight(hours);

    if (timeOfDay == "night") {
        body.style.backgroundImage = "url('images/stars.jpg')";
        clock.style.color = "#00ff00";
        setInterval(moveBg, 70);
        updateStyle();
    } else {
        body.style.backgroundImage = "url('images/med_clouds.png')";
        smallCloud.style.backgroundImage = "url('images/small_clouds.png')"
        clock.style.color = "#26fcff";
        setInterval(moveBg, 40);
        updateStyle();
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

function updateStyle() {
    // check time every hour so scenery automatically updates
    setInterval(changeStyle, (60*(60-minutes)+(60-seconds))*1000);
}

changeStyle();
