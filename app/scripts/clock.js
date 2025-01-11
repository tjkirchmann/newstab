function updateClock() {
    console.log("Updating Clock...")
    var currentTime = new Date(),
        currentHours = currentTime.getHours(),
        currentMinutes = ('0' + currentTime.getMinutes()).slice(-2);
    document.getElementById("clock").innerHTML = currentHours + ':' + currentMinutes;
}

updateClock();
var intervalID = window.setInterval(updateClock, 10000);