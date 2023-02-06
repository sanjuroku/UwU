// Click for fun : change text color randomly
function clickForFun() {
    $(".buttonText").each(function () {
        $(this).css("color", randomColor());
    });
    $(".text").each(function () {
        $(this).css("color", randomColor());
    });
    $(".plainText").each(function () {
        $(this).css("color", randomColor());
    });

    //noFunButton appears only when the funButton is turned on
    $("#noFunButton").css("display", "block");
}

// Function to roll a random color
function randomColor() {
    var randomRGB = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return randomRGB;
}

// Reset text color
function nofun() {
    if ($("#darkChangeButton").html() == "Too bright?") {
        $(".text").css("color", "#264040");
        $(".plainText").css("color", "#264040");
    } else {
        $(".text").css("color", "#faebd7");
        $(".plainText").css("color", "#faebd7");
    }

    $(".buttonText").css("color", "#faebd7");

    //noFunButton display:none
    $("#noFunButton").css("display", "none");
}

// Change to the dark theme
$("#darkChangeButton").on('click', function () {
    if ($("#darkChangeButton").html() == "Too bright?") {
        document.body.style.background = "#262626";
        if (($('#noFunButton').css('display') == 'none')) {
            $(".text").css("color", "#faebd7");
            $(".plainText").css("color", "#faebd7");
        }
        $("#darkChangeButton").html("Too dark?");
        gameData.themeMemo = "dark";
    } else {// Change back to the light theme
        document.body.style.background = "#f2f2f2";
        if (($('#noFunButton').css('display') == 'none')) {
            $(".text").css("color", "#264040");
            $(".plainText").css("color", "#264040");
        }
        $("#darkChangeButton").html("Too bright?");
        gameData.themeMemo = "white";
    }
});