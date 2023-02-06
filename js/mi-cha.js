// Storing imgs
var miChanImgs = [
    "img/mi01.jpg",
    "img/mi02.jpg",
    "img/mi03.jpg",
    "img/mi04.jpg",
    "img/mi05.jpg",
    "img/mi06.jpg",
    "img/mi07.jpg",
    "img/mi08.jpg",
    "img/mi09.jpg",
    "img/mi10.jpg",
    "img/mi11.jpg",
    "img/mi12.jpg",
    "img/mi13.jpg",
    "img/mi14.jpg",
];

// Gacha simulator
function miChaCha() {

    var miChaResult = miChaPay();

    if (miChaResult == true) {
        // Randomly generate the index number
        var randomIndex = Math.floor(Math.random() * miChanImgs.length);

        // Show the img
        $("#miChanImage").attr("src", miChanImgs[randomIndex]).css("display", "inline-block");
        // hide the log
        $("#miChaLog").html("").css("display", "none");
    } else {
        // Show the img
        $("#miChanImage").attr("src", "img/feelssadman.png").css("display", "inline-block");
        $("#miChaLog").html("No gold, no mi-chan").css("display", "block").css("font-weight","800");
    }

}

// pay some gold per micha
function miChaPay() {
    if (gameData.gold < 100) {
        return false;
    } else {
        gameData.gold -= 100;
        return true;
    }

}