// Storing game data
var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    themeMemo: "white"
};
var miCollection = [];

// Save game per second
$(document).ready(function () {
    var saveGameLoop = window.setInterval(function () {
        localStorage.setItem("clickGameSave", JSON.stringify(gameData));
        localStorage.setItem("miCollection", JSON.stringify(miCollection));
    }, 1000);

    // Load the game file if it exists
    var savegame = JSON.parse(localStorage.getItem("clickGameSave"));
    var saveMi = JSON.parse(localStorage.getItem("miCollection"));

    if (savegame !== null) {
        gameData = savegame;
    };
    if (saveMi !== null) {
        miCollection = saveMi;
    };

    // Load the theme data (in case the theme doesn't change when the page is refreshed) 
    if (gameData.themeMemo == "dark") {
        document.body.style.background = "#262626";
        $(".text").css("color", "#faebd7");
        $(".plainText").css("color", "#faebd7");
        $("#darkChangeButton").html("Too dark?");
    }

    // Update data according to the gameData
    refreshData();
});

// Clear the save data
function clearSave() {
    localStorage.clear();
    location.reload();
};

// >>> Main Logic <<<
// Click for gold
function clickForGold() {
    gameData.gold += gameData.goldPerClick;
    $('#goldGained').html("You have " + gameData.gold + " Gold");
};

// Gold are added every second (the amount is based on the upgrade level).
var mainGameLoop = window.setInterval(function () {
    clickForGold();
}, 1000);

// When the gold is less than 100, always check if the gold is more than 100. if yes, the gameBox will be shown and no need to check again.
if (gameData.gold < 100) {
    var boxesShowCheck = window.setInterval(function () {
        // check gold and show the gameBox
        if (gameData.gold >= 100) {
            $("#gameBox").css("visibility", "visible");
        }
    }, 0);
} else {
    $("#gameBox").css("visibility", "visible");
}

// Purchase upgrades and update texts
function buyUpgrade() {
    if (gameData.gold >= gameData.goldPerClickCost) {
        gameData.gold -= gameData.goldPerClickCost;
        gameData.goldPerClick += 1;
        gameData.goldPerClickCost *= 2
        refreshData();
    }
};

// Update data function
function refreshData() {
    $('#goldGained').html("You have " + gameData.gold + " Gold");
    $('#yourTool').html("Your Mouse (Currently Level " + gameData.goldPerClick + ")");
    $('#perClickUpgrade').html("UwUpgrade Your Mouse (Cost: " + gameData.goldPerClickCost + " gold)");
};