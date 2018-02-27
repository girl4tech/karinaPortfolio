//globals
var images = ["banana.png","candy.png","cherries.png","unicorn.png","money.jpg"]
var currentImage = [0];
var secondImage = [0];
var thirdImage = [0];
var total = 50;
// var newTotal = 50;
//PLAY FUNCTION
//ON CLICK, PLAY BTN, IMAGES (IN EACH DIV) UPDATE SRC ATTRIBUTE AT RANDOM
//MIN FUNCTION
$("#minBtn").on("click", function(event){
  getReels();
  total--;
  if(total<=0) total = 50;
  $("span").text("your total is now "+ total);
  //alert(total);
  //what updating are you updating the content of the tag, the attributes of the tag or the html
})
//MAX FUNCTION
$("#maxBtn").on("click", function(event){
  getReels();
  total-=5;
  if(total<=0) total = 50;
  $("span").text("your total is now "+ total);
})

function getReels(){
  currentImage = images[getRandomInt(0, images.length)];
  $(".firstSlot").attr("src", "imgs/"+currentImage);
  secondImage = images[getRandomInt(0, images.length)];
  $(".secondSlot").attr("src", "imgs/"+secondImage);
  thirdImage = images[getRandomInt(0, images.length)];
  $(".thirdSlot").attr("src", "imgs/"+thirdImage);
  win();
}
//GENERATE RANDOM PICTURE
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
//WIN FUNCTION
function win(){
  if( currentImage == secondImage && secondImage == thirdImage){
    alert("YOU'RE A WINNER!");
  }
}

//MAX FUNCTION
//ON CLICK, DECREMENT INPUT (TOTAL VALUE) BY 5

//MAX REACH FUNCTION
//IF REACH $25 LIMIT, DEDUCT $5 FROM $25 LIMIT

//WIN FUNCTION
//IF ALL RANDOM IMAGES ARE THE SAME, THEN ALERT JACKPOT
//AND INCREMENT TOTAL BY MULTIPLE OF 5

// <!-- events listeners: min max spin -->
// <!-- what can the user do?
// click on min or max (2 buttons)
// what does the user expect
// what can the user see
// 3 reels with 5 items, 2 buttons one for min the other for max-->
// <!-- 3 reels
// //each reel has 5 items on it
// //2 buttons min and max
// // running total
// if hit max, deduct $5 from 25
// if win, some multiple like 5*10 -->
