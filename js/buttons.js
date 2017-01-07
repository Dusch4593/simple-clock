// button for changing weather
var weatherButton = document.getElementById('weather-button');

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
