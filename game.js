// arrays
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

let level = 0;

// wybór losowego koloru

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);

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
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
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
  } else {
    console.log("działa");
  }
})