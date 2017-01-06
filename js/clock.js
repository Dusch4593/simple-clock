var meridiem = "AM";

function startTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    hours = checkHours(hours);
    hours = insertZero(hours);
    minutes = insertZero(minutes);
    seconds = insertZero(seconds);

    var clock = document.getElementById('clock');
    clock.innerHTML = hours + " : " + minutes + " : " + seconds + " " + meridiem;

    setTimeout(startTime, 1000);
}

function insertZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function checkHours(h) {
    if (h > 12) {
        meridiem = "PM";
        h -= 12;
    }
    else if (h == 0) {
        h = 12;
    }
    return h;
}

startTime();