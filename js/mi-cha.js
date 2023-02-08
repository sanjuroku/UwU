const miChanImgsLength = 45; // how many imgs in the img/ folder. !important.
const nekoChan = ["39", "40", "41", "42"];
const pepe = ["43", "44"];

// Gacha simulator
function miChaCha() {

    const miChaResult = miChaPay();

    if (miChaResult == true) {
        // Randomly generate the index number
        let randomIndex = Math.floor(Math.random() * miChanImgsLength);

        if (randomIndex < 10) {
            randomIndex = String("0" + randomIndex);
        } else {
            randomIndex = String(randomIndex);
        }

        // show the img No.
        if (nekoChan.includes(randomIndex)) {
            $("#miChaLog").html("!!! \\nekochan_" + randomIndex + " GET DAZE/ !!!").css("display", "block").css("font-weight", "bold");
            showImgs(randomIndex);
        } else if (pepe.includes(randomIndex)) {
            $("#miChaLog").html("!!! \\pepecat_" + randomIndex + " GET DAZE/ !!!").css("display", "block").css("font-weight", "bold");
            if (randomIndex == "44") {
                $("#miChanImage").attr("src", "img/mi" + randomIndex + ".png").css("display", "inline-block"); //show png
            } else {
                showImgs(randomIndex);
            }
        } else if (randomIndex == "38") {
            $("#miChaLog").html("!!! \\confused_cat GET DAZE/ !!!").css("display", "block").css("font-weight", "bold");
            showImgs(randomIndex);
        } else {
            $("#miChaLog").html("!!! \\michan_" + randomIndex + " GET DAZE/ !!!").css("display", "block").css("font-weight", "bold");
            showImgs(randomIndex);
        }

        miChanCollectionCheck(randomIndex);
    } else {
        // Show the img
        $("#miChanImage").attr("src", "img/feelssadman.png").css("display", "inline-block");
        $("#miChaLog").html("No gold, no mi-chan").css("display", "block").css("font-weight", "800");
    }

    // show the progress of miCollection
    $('#miChanCollection').html("mi-chan Collection (" + miCollection.length + "/" + miChanImgsLength + ")").css("display", "block");
};

// pay some gold per micha
function miChaPay() {
    if (gameData.gold < 100) {
        return false;
    } else {
        gameData.gold -= 100;
        return true;
    }
}

// Show the img
// img's name must be [mi**.jpg] (**=index)
function showImgs(x) {
    let randomIndex = x;
    $("#miChanImage").attr("src", "img/mi" + randomIndex + ".jpg").css("display", "inline-block");
}

// Check the collection
function miChanCollectionCheck(index) {
    const randomIndex = index;
    let checkResult = true;
    if (miCollection.length == 0) {
        miCollection.push(randomIndex);
        return;
    } else {
        checkResult = miCollection.includes(randomIndex);
        if (checkResult == false) { // If not exist then push to the Array
            miCollection.push(randomIndex);
        } else {
            return;
        }
    }
};
