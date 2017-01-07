// button for changing weather
var weatherButton = document.getElementById('weather-button');
var rain = document.getElementById('rain');
var snow = document.getElementById('snow');

var weatherTracker = 0;
var weatherTypes = new Array("rainy", "snowy", "cloudy");

weatherButton.onclick = function showWeather() {
    if (weatherTracker == 0) {
        smallCloud.style.backgroundImage = "none";
        rain.style.backgroundImage = "url('images/" + weatherTypes[weatherTracker] + ".png')";
        snow.style.backgroundImage = "none";
        weatherTracker++;
    } 
    else if (weatherTracker == 1) {
        smallCloud.style.backgroundImage = "none";
        rain.style.backgroundImage = "none";
        snow.style.backgroundImage = "url('images/" + weatherTypes[weatherTracker] + ".png')";
        weatherTracker++;
    }
    else if (weatherTracker == 2) {
        rain.style.backgroundImage = "none";
        snow.style.backgroundImage = "none";
        smallCloud.style.backgroundImage = "url('images/" + weatherTypes[weatherTracker] + ".png')";
        weatherTracker++;
    } else {
        weatherTracker = 0;
        rain.style.backgroundImage = "none";
        snow.style.backgroundImage = "none";
        smallCloud.style.backgroundImage = "none";
    }
};

var rainPos = 0;
function moveRain() {
    rainPos += 1;
    rain.style.backgroundPosition = "0px " + rainPos + "px";
}
setInterval(moveRain, 5);

var snowPos = 0;
function moveSnow() {
    snowPos += 1;
    snow.style.backgroundPosition = "0px " + snowPos + "px";
}
setInterval(moveSnow, 20);

// button for changing clock color
var colorButton = document.getElementById('color-button');
var clockColor = document.getElementById('clock-color'); // stylesheet link

var colorTracker = 0;
var colors = new Array("blue", "pink", "purple", "green");

colorButton.onclick = function switchColor() {
    if (colorTracker < colors.length) {
        clockColor.href = "css/colors/" + colors[colorTracker] + "-color.css";
        colorTracker++;
    } else {
        colorTracker = 0;
        clockColor.href = "css/main.css";
    }
};

// button for changing clock shape
var shapeButton = document.getElementById('shape-button');
var clockShape = document.getElementById('clock-shape'); // stylesheet link

var shapeTracker = 0;
var shapes = new Array("rectangle", "bendy", "bent", "oval");

shapeButton.onclick = function switchShape() {
    if (shapeTracker < shapes.length) {
        clockShape.href = "css/shapes/" + shapes[shapeTracker] + "-shape.css";
        shapeTracker++;
    } else {
        shapeTracker = 0;
        clockShape.href = "css/default-shape.css";
    }
};
