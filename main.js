var gameData = {
    gold: 0, 
    goldPerClick: 1, 
    goldPerClickCost: 10
}

function clickForGold(){
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldGained").innerHTML = gameData.gold + " Gold"
}

function buyUpgrade(){
    if(gameData.gold >= gameData.goldPerClickCost){
        gameData.gold -= gameData.goldPerClickCost
        gameData.goldPerClick += 1
        gameData.goldPerClickCost *= 2
        document.getElementById("goldGained").innerHTML = gameData.gold + " Gold"
        document.getElementById("perClickUpgrade").innerHTML = "UwUpgrade Your Mouse (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " gold"
    }
}

var mainGameLoop = window.setInterval(function(){
    clickForGold()
}, 1000)

var saveGameLoop = window.setInterval(function(){
    localStorage.setItem("clickGameSave", Json.stringfy(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("clickGameSave"))
if(savegame !== null){
    gameData = savegame
}