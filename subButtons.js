//click for fun : change text color randomly
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

    //noFunButton appears only when the funButton is turned on
    noFunButton.style.display = "block";
}

// reset text color
function nofun(){
    if ($("#darkChangeButton").html() == "Too bright?"){
        text1.style.color = "#264040";
        text2.style.color = "#264040";
    }else{
        text1.style.color = "#faebd7";
        text2.style.color = "#faebd7";
    }
    text3.style.color = "#faebd7";
    text4.style.color = "#faebd7";
    text5.style.color = "#faebd7";
    text6.style.color = "#faebd7";

    //noFunButton display:none
    noFunButton.style.display = "none";
}

// change to dark theme
$("#darkChangeButton").on('click', function() {
    if ($("#darkChangeButton").html() == "Too bright?"){
        document.body.style.background = "#262626";
        if(($('#noFunButton').css('display') == 'none')){
            text1.style.color = "#faebd7";
            text2.style.color = "#faebd7";
        }
        $("#darkChangeButton").html("Too dark?");
    }else{
        document.body.style.background = "#f2f2f2";
        if(($('#noFunButton').css('display') == 'none')){
            text1.style.color = "#264040";
            text2.style.color = "#264040";
        }
        $("#darkChangeButton").html("Too bright?");
    }
});