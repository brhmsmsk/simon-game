let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []
let level = -1;
let gameStart = false;



function makeSound(input){
let sound = new Audio("./sounds/"+input+".mp3");
sound.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100)
}

function wrongPressAnimate(){
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },100)
}


function nextSequence(){
  let newRandomNumber = Math.floor(Math.random()*4)
  let randomChosenColour = buttonColours[newRandomNumber]
  gamePattern.push(randomChosenColour)
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100)
  makeSound(randomChosenColour)
  level = level+1;
  $("h1").html("Level "+level)
  userClickedPattern = [];
}



$(".btn").click(function(){
  let userChosenColour = $(this).attr("id")
  userClickedPattern.push(userChosenColour)
  makeSound(userChosenColour)
  animatePress(userChosenColour)
  checkAnswer(userClickedPattern.length-1)
})
  


$(document).keypress(function(event){
  
  if(!gameStart){
  
  $("h1").text("Level "+level)
  nextSequence()
  gameStart=true
  }
})


function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length===userClickedPattern.length){
              setTimeout(function() {
                  nextSequence();
                    }, 1000);
        }
    
  }
  else{
    makeSound("wrong")
    wrongPressAnimate()
    startOver()
    

}

}

function startOver(){
level=-1;
gamePattern=[]
$("h1").text("Başlamak için bir tuşa bas")
gameStart=false;
}



















