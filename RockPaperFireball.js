//user makes a choice
  var userChoice = 0;
  var comChoice = 0;

  window.userChoice = userChoice;
  window.comChoice = comChoice;

  //userScore.parseInt();
  //userScore.parseInt();



window.onload = function(){
  //var userScoreNum = document.getElementById("userScore").innerHTML;
  //var comScoreNum = document.getElementById("comScore").innerHTML;
  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("comScore").innerHTML = comScore;
  document.getElementById("text").innerHTML = text;
};

var userScore = 0;
var comScore = 0;

//userScoreNum = userScore;
//comScoreNum = comScore;

  //com random choice
  function computerChoice(){
    comChoice = Math.ceil(Math.random() * (3-0));
    if (comChoice === 1){
      document.getElementById("comRock").style.visibility = "visible";
    } else if (comChoice === 2){
      document.getElementById("comPaper").style.visibility = "visible";
    } else {
      document.getElementById("comFireball").style.visibility = "visible";
    }

  }

  //console.log(comChoice);

  //display results
  function compare() {
  if (userChoice === 1 && comChoice === 3){
    document.getElementById("youWin").style.visibility = "visible";
    userScore ++;
    document.getElementById("userScore").innerHTML = userScore;
  };
  if (userChoice === 1 && comChoice === 2){
    document.getElementById("youLose").style.visibility = "visible";
    comScore ++;
    document.getElementById("comScore").innerHTML = comScore;
  };
  if (userChoice === 2 && comChoice === 1){
    document.getElementById("youWin").style.visibility = "visible";
    userScore ++;
    document.getElementById("userScore").innerHTML = userScore;
  };
  if (userChoice === 2 && comChoice === 3){
    document.getElementById("youLose").style.visibility = "visible";
    comScore ++;
    document.getElementById("comScore").innerHTML = comScore;
  };
  if (userChoice === 3 && comChoice === 2){
    document.getElementById("youWin").style.visibility = "visible";
    userScore ++;
    document.getElementById("userScore").innerHTML = userScore;
  };
  if (userChoice === 3 && comChoice === 1){
    document.getElementById("youLose").style.visibility = "visible";
    comScore ++;
    document.getElementById("comScore").innerHTML = comScore;
  };
  if (userChoice === comChoice){
    document.getElementById("draw").style.visibility = "visible";
  };
  }

  //play Again
  function again(){
    //document.getElementById("display").style.visibility = "hidden";
    //document.getElementById("result").style.visibility = "hidden";
    document.getElementById("youWin").style.visibility = "hidden";
    document.getElementById("youLose").style.visibility = "hidden";
    document.getElementById("draw").style.visibility = "hidden";

    document.getElementById("userRock").style.visibility = "hidden";
    document.getElementById("userPaper").style.visibility = "hidden";
    document.getElementById("userFireball").style.visibility = "hidden";

    document.getElementById("comRock").style.visibility = "hidden";
    document.getElementById("comPaper").style.visibility = "hidden";
    document.getElementById("comFireball").style.visibility = "hidden";

    document.getElementById("selectionMenu").style.visibility = "visible";
    document.getElementById("playAgain").style.visibility = "hidden";
  }

  var text = "";
  //text function
  function textChange(){
    if (userScore > comScore && (userScore-comScore)>=1){
      document.getElementById("bubble").style.visibility = "visible";
      text = "You're in the lead!";
    };
    if (userScore > comScore && (userScore-comScore)>=3){
      text = "Dang! <br> You're super lucky!";
    };
    if (userScore > comScore && (userScore-comScore)>=5){
        text = "WOW! You are <br> absolutely frickin'<br> AMAZEBALLS!!! ";
    };
    if (userScore < comScore && (comScore-userScore)>=1){
      document.getElementById("bubble").style.visibility = "visible";
      text = "Oh no! <br> You're losing!";
    };
    if (userScore < comScore && (comScore-userScore)>=3){
      text = "Dang...<br> Not so lucky, are we?";
    };
    if (userScore < comScore && (comScore-userScore)>=5){
      text = "Wow. Your losing streak...<br> It's so bad, it's impressive. <br> I ain't even mad.";
    };
    if (userScore === comScore && userScore !== 0) {
      text = "Ooh...It's a tie! <br> (sweat drop)";
    };
    document.getElementById("text").innerHTML = text;
  }


  //reset function
  function reset(){
      userScore = 0;
      comScore = 0;
      text = "";
      document.getElementById("comScore").innerHTML = comScore;
      document.getElementById("userScore").innerHTML = userScore;
      document.getElementById("text").innerHTML = text;
      document.getElementById("bubble").style.visibility = "hidden";
  }

  //button functions
  function chooseRock() {
    userChoice = 1;
    document.getElementById("userRock").style.visibility = "visible";
    computerChoice();
    compare();
    textChange();
    document.getElementById("selectionMenu").style.visibility = "hidden";
    document.getElementById("playAgain").style.visibility = "visible";
  }

  function choosePaper() {
    userChoice = 2;
    document.getElementById("userPaper").style.visibility = "visible";
    computerChoice();
    compare();
    textChange();
    document.getElementById("selectionMenu").style.visibility = "hidden";
    document.getElementById("playAgain").style.visibility = "visible";
  }

  function chooseFireball() {
    userChoice = 3;
    document.getElementById("userFireball").style.visibility = "visible";
    computerChoice();
    compare();
    textChange();
    document.getElementById("selectionMenu").style.visibility = "hidden";
    document.getElementById("playAgain").style.visibility = "visible";
  }
