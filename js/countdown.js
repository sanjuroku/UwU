$("#theWorldBox").hover(
    function () {
        $(this).css("opacity", "1");
    },
    function () {
        $(this).css("opacity", "0.2");
    }
)

let counter = 0; // To count how many times the alert pops up
let compareTime = new Date();
let endTime = new Date();
endTime.setHours(18, 0, 0, 0);
console.log("*** compareTime = " + compareTime + " *** \r\n*** endTime = " + endTime + " ***");
if (compareTime >= endTime) {
    console.log("compareTime >= endTime");
    clearInterval(timer);
    counter = 2;
}

// UpdateTime function
function updateTime() {

    var currentTime = new Date();
    var remainingTime = endTime - currentTime;

    if (remainingTime < 0) {
        clearInterval(timer);
        if (++counter < 2) { // Make sure the alert pops up only once
            console.log("counter = " + counter);
            console.log("remainingTime = " + remainingTime);
            alert("yeah! (∩ˊ꒳​ˋ∩)･* It's time to go home and play video games!! \r\n ** You can adjust the off work hour at any time ** ∩( ・ω・)∩");
        }
        return;
    }

    var hours = Math.floor(remainingTime / 3600000);
    remainingTime = remainingTime % 3600000;
    var minutes = Math.floor(remainingTime / 60000);
    remainingTime = remainingTime % 60000;
    var seconds = Math.floor(remainingTime / 1000);

    // show timer
    $('#offWorkCountdown').html(hours + ":" + minutes + ":" + seconds);

    counter = 0;

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

    timer = setInterval(updateTime, 1000);
})

var timer = setInterval(updateTime, 1000);