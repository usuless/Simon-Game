// arrays
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

let level = 0;

// wybór losowego koloru

function nextSequence() {

  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  // dźwięk

  playSound(randomChosenColour);

  // animacja flasha

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  level++;
  return randomChosenColour;
}

// dźwięk funkcjonalność

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// dodanie wyboru gracza

$(".btn").click(function() {
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})

// szarość kafelka

$(".btn").click(function() {
  var self = $(this);
  self.addClass("pressed");
  setTimeout(function(){
    self.removeClass("pressed");
}, 100);
})

// wykrywanie przycisku

$(document).keydown(function(event) {
  if (gamePattern.length == 0) {
    nextSequence();
    $("h1").text("game level: " + level);
  }
})

// następny poziom

function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
    } else {
    startOver();
    console.log("żydzi");
    playSound("wrong");
    $(document.body).addClass("game-over");
    setTimeout(function(){
      $(document.body).removeClass("game-over");
  }, 100);
  $("h1").text("Game Over :( press any key to restart");
  }
}

// restart gry

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}