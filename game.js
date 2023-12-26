// arrays
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

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
  return randomChosenColour;
}

nextSequence();
// dodanie wyboru gracza

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function() {
  var userChosenColour = $(this).attr('id');
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
})

$(".btn").click(function() {
  var self = $(this);
  self.addClass("pressed");
  setTimeout(function(){
    self.removeClass("pressed");
}, 100);
})