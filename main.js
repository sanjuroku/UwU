var gameData = {
    clicked: 0, //the number of how many clicks you have
    clicksPerClick: 1, //the number of how many clicks you can get per click
    clicksPerClickCost: 10
}

function clickButton(){
    gameData.clicked += gameData.clicksPerClick //click the button and the number of clicks goes up
    document.getElementById("clicksGained").innerHTML = gameData.clicked + " clicked"
}

function buyGoldPerClick(){
    if(gameData.clicked >= gameData.clicksPerClickCost){
        gameData.clicked -= gameData.clicksPerClickCost
        gameData.clicksPerClick += 1
        gameData.clicksPerClickCost *= 2
        document.getElementById("clicksGained").innerHTML = gameData.clicked + " clicked"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Your Mouse (Currently Level " + gameData.clicksPerClick + ") Cost: " + gameData.clicksPerClickCost + " clicks"
    }
}

var mainGameLoop = window.setInterval(function(){
    clickButton()
}, 1000)

var saveGameLoop = window.setInterval(function(){
    localStorage.setItem("clickGameSave", Json.stringfy(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("clickGameSave"))
if(savegame !== null){
    gameData = savegame
}