var MAX_BETS = 2;
var MAX_BET = 150000;
var BetCount = 0;
var Ballance = 1000;
var Red = 0;
var Green = 0;
var Black = 0;
var Result;

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ShowBallance(){
    document.getElementById("ball").innerHTML = Ballance;
}
window.onload = function(){
    ShowBallance();
}

function roll(){
    Result = getRandomInt(0, 14);
    if(Result == 0){
        Ballance+=(Green*14);
    }
    if(Result <= 7 && Result > 0){
        Ballance+=(Red*2);
    }
    if(7<Result && Result<=14){
        Ballance+=(Black*2);
    }
    roll_wheel();
    ShowBallance();
    document.getElementById("timer").innerHTML = Result;
    BetCount = 0;
    Red = 0;
    Green = 0;
    Black = 0;
    document.getElementById('roulette').classList.add("anim");

}

function makebet(color){
  if (document.getElementById('ammount').value <= Ballance){
        if (BetCount < MAX_BETS){
            if(document.getElementById('ammount').value<=MAX_BET) {
                if (document.getElementById('ammount').value > 0 && document.getElementById('ammount').value%1 == 0){
            Ballance-=document.getElementById('ammount').value;
                if(color == 1){Green = document.getElementById('ammount').value;}
                if(color == 2){ Red = document.getElementById('ammount').value;}
                if(color == 3){ Black = document.getElementById('ammount').value;}
            BetCount++;
                ShowBallance();} else{alert("Wrong amount!")}
                    }
            else {alert("Max bet is" + MAX_BET);}
        }else {
            alert("Maximum bets is " + MAX_BETS);
            return 0;
        }}else {
     alert("Not enought balance!");
      return 0;}

}
function roll_wheel() {
    alert(Result);
    switch (Result) {
        case'0':
        {
            document.getElementById('roulette').class.add('anim0');
            //setTimeout(document.getElementById('roulette').class.remove('anim0'), 12000);
            break;
        }
        case '1':
        {
            document.getElementById('roulette').class.add('anim1');
           // setTimeout(document.getElementById('roulette').class.remove('anim1'), 12000);
            break;
        }
        case(2):
        {
            document.getElementById('roulette').class.add('anim2');
          //  setTimeout(document.getElementById('roulette').class.remove('anim2'), 12000);
            break;
        }
        case(3):
        {
            document.getElementById('roulette').class.add('anim3');
          //  setTimeout(document.getElementById('roulette').class.remove('anim3'), 12000);
            break
        }
        case(4):
        {
            document.getElementById('roulette').class.add('anim4');
           // setTimeout(document.getElementById('roulette').class.remove('anim4'), 12000);
            break;
        }

    }
}
function maxbet(){
    document.getElementById('ammount').value = Ballance;

}
function betx2(){
    document.getElementById('ammount').value*=2;
}
function betd2(){
    document.getElementById('ammount').value = Math.round(document.getElementById('ammount').value/2);
}

function sanya(){
    alert("LOX"):
}
