var gameData = {
    gold: 0, 
    goldPerClick: 1, 
    goldPerClickCost: 10
}

function clickForGold(){
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldGained").innerHTML = "You have " + gameData.gold + " Gold"
}

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

const text1 = document.getElementById("goldGained");
const text2 = document.getElementById("yourTool");
const text3 = document.getElementById("clickButton");
const text4 = document.getElementById("perClickUpgrade");
const text5 = document.getElementById("funButton");
const text6 = document.getElementById("clearSaveButton");

const noFunButton = document.getElementById("noFunButton");

function clickForFun(){
    text1.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    text2.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    text3.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    text4.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    text5.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    text6.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    noFunButton.style.display = "block";
}

function nofun(){
    text1.style.color = "black";
    text2.style.color = "black";
    text3.style.color = "white";
    text4.style.color = "white";
    text5.style.color = "white";
    text6.style.color = "white";
    document.getElementById("noFunButton").style.display = "none";
}

var mainGameLoop = window.setInterval(function(){
    clickForGold()
}, 1000)

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