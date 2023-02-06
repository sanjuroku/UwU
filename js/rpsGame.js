// Storing game data
var miniGameData = {
  betGold: 0
}

// Bet number check (min="100" max="100000")
$(function () {
  $('#numberInput').on('blur', function (e) { // onblur event
    var bet = parseInt($(this).val());
    var betMax = parseInt($(this).attr('max'));
    var betMin = parseInt($(this).attr('min'));
    if (bet > betMax) { $(this).val(betMax); } // input > max, value = max.
    if (bet < betMin) { $(this).val(betMin); } // input < min, value = min.
    if (isNaN(bet)) { $(this).val('100'); } // input = NaN, value = 100.
  });
});

// Bet gold event
function betSomeGold() {
  miniGameData.betGold = $("#numberInput").val();

  var checkResult = betGoldCheck();

  // If the checkResult is true, the miniGame is displayed
  if (checkResult == true) {
    betLogWrite();
    $("#rpsGame").css("display", "block");
    $("#gameMain").css("display", "block");
    betGameMain();
  } else {
    //display an error message and reset the JSON minigame data
    betErrorLog();
    $("#rpsGame").css("display", "block");
    $("#gameMain").css("display", "none");
    miniGameData.betGold = 0; //clear
  }
}

// Check if the gold held is less than betGold.
function betGoldCheck() {
  if (miniGameData.betGold > gameData.gold) {
    return false;
  }
  return true;
}

// game log displayed
function betLogWrite() {
  $("#betLog").html("You bet " + miniGameData.betGold + " Gold >w<");
}

// error log displayed
function betErrorLog() {
  $("#betLog").html("You bet " + miniGameData.betGold + " Gold UwU <br/> But you don't have enough gold. <br/> Oh no TwT");
}

function betGameMain() {
  //To Do
}