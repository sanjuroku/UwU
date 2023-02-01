var gameData = {
    gold: 0, 
    goldPerClick: 1, 
    goldPerClickCost: 10
}

// save and load and clear
var saveGameLoop = window.setInterval(function(){
    localStorage.setItem("clickGameSave", JSON.stringify(gameData))
}, 1000)

var savegame = JSON.parse(localStorage.getItem("clickGameSave"))
if(savegame !== null){
    gameData = savegame
}

function clearSave() {
    localStorage.clear();
    location.reload();
}

//main logic
function clickForGold(){
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldGained").innerHTML = "You have " + gameData.gold + " Gold"
}

var mainGameLoop = window.setInterval(function(){
    clickForGold()
    refreshData()
}, 1000)

function buyUpgrade(){
    if(gameData.gold >= gameData.goldPerClickCost){
        gameData.gold -= gameData.goldPerClickCost
        gameData.goldPerClick += 1
        gameData.goldPerClickCost *= 2
        document.getElementById("goldGained").innerHTML = "You have " + gameData.gold + " Gold"
        document.getElementById("yourTool").innerHTML = "Your Mouse (Currently Level " + gameData.goldPerClick + ")"
        document.getElementById("perClickUpgrade").innerHTML = "UwUpgrade Your Mouse (Cost: " + gameData.goldPerClickCost + " gold)"
    }
}

function refreshData(){
    document.getElementById("goldGained").innerHTML = "You have " + gameData.gold + " Gold"
    document.getElementById("yourTool").innerHTML = "Your Mouse (Currently Level " + gameData.goldPerClick + ")"
    document.getElementById("perClickUpgrade").innerHTML = "UwUpgrade Your Mouse (Cost: " + gameData.goldPerClickCost + " gold)"
}