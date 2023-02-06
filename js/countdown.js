$("#theWorldBox").hover(
    function () {
        $(this).css("opacity", "1");
    },
    function () {
        $(this).css("opacity", "0.2");
    }
)

// TODO:去除打开窗口的时候的弹窗

var endTime = new Date();
var compareTime = new Date();
compareTime.setHours(18, 0, 0, 0);
if (endTime.getDate < compareTime.getDate) {
    endTime.setHours(18, 0, 0, 0);
}else{
    clearInterval(timer);
    timer = false;
}

// UpdateTime function
function updateTime() {

    var currentTime = new Date();
    var remainingTime = endTime - currentTime;

    if (remainingTime < 0) {
        clearInterval(timer);
        timer = false;

        alert("yeah! (∩ˊ꒳​ˋ∩)･* It's time to go home and play video games!! \r\n ** Refresh to reset the countdown ** ∩( ・ω・)∩");
        return;
    }

    var hours = Math.floor(remainingTime / 3600000);
    remainingTime = remainingTime % 3600000;
    var minutes = Math.floor(remainingTime / 60000);
    remainingTime = remainingTime % 60000;
    var seconds = Math.floor(remainingTime / 1000);

    // show timer
    $('#offWorkCountdown').html(hours + ":" + minutes + ":" + seconds);

}

// Change the off work hour
$("input[type=time]").on("change", function () {
    var inputTime = new Date(this.valueAsDate);
    var AdjustedInputTime = new Date(inputTime.getTime() + inputTime.getTimezoneOffset() * 60000); //timezone adjusted

    console.log("off hour = " + AdjustedInputTime.getHours() + ":" + AdjustedInputTime.getMinutes());
    var inputHour = AdjustedInputTime.getHours();
    var inputMinutes = AdjustedInputTime.getMinutes();
    var inputSec = AdjustedInputTime.getSeconds();
    var inputMS = AdjustedInputTime.getMilliseconds();

    endTime.setHours(inputHour, inputMinutes, inputSec, inputMS);

    if (timer == false) {
        timer = setInterval(updateTime, 1000);
    } else {
        updateTime();
    }
})

var timer = setInterval(updateTime, 1000);