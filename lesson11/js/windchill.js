
var temp = 28;
var speed = 5;

if ((temp < 50) && (speed > 3)) {
    var wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    document.getElementById("windchill").innerHTML = parseInt(wc);
}

else {document.getElementById("windchill").innerHTML = temp};

document.getElementById("degrees").innerHTML = temp;
document.getElementById("wind").innerHTML = speed;