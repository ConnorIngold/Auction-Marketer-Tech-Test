let seconds = 1872801;
function timer() {
    let days        = Math.floor(seconds/24/60/60);
    let hoursLeft   = Math.floor((seconds) - (days*86400));
    let hours       = Math.floor(hoursLeft/3600);
    let minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    let minutes     = Math.floor(minutesLeft/60);
    let remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = days + "d " + hours + ":" + minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Completed";
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('timer()', 1000);
