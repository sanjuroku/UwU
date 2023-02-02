var miniGameData = {
    betGold : 0
}

//number check
$(function(){
    $('#numberInput').on('blur', function(e){
      var bet = parseInt($(this).val());
      var betMax = parseInt($(this).attr('max'));
      var betMin = parseInt($(this).attr('min'));
      if(bet > betMax){ $(this).val(betMax); }
      if(bet < betMin){ $(this).val(betMin); }
      if(isNaN(bet)){ $(this).val('100'); }
    });
  });

function betSomeGold(){

    miniGameData.betGold = $("#numberInput").val();

    betLogWrite();
    //log show
    $("#rpsGame").css("display","block");
}

function betLogWrite(){
    $("#betLog").html("You bet "+ miniGameData.betGold + " Gold >w<")
}