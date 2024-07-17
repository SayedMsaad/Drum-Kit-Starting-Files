 var number=document.querySelectorAll(".drum").length;
 var tom1=new Audio("sounds/tom-1.mp3");
 var tom2=new Audio("sounds/tom-2.mp3");
 var tom3=new Audio("sounds/tom-3.mp3");
 var tom4=new Audio("sounds/tom-4.mp3");
 var snare=new Audio("sounds/snare.mp3");
 var kick=new Audio("sounds/kick-bass.mp3");
 var crash=new Audio("sounds/crash.mp3");
for(var i=0;i<number;i++){

document.querySelectorAll("button")[i].addEventListener("click",function()
{
var innerHtmlval=this.innerHTML;
playsound(innerHtmlval);
keypress_animation(innerHtmlval);

});

}
document.addEventListener("keydown",function(event){
 
  playsound(event.key);
  keypress_animation(event.key);
  
});

function playsound (key){

  switch(key){


    case "w":
          tom1.play();
    break;
    case "a":
          tom2.play();
    break;
    case "s":
          tom3.play();
    break;
    case "d":
          tom4.play();
    break;
    case "j":
     snare.play();
    break;
    case "k":
     kick.play();
    break;
    case "l":
     crash.play();
    break;
 
  
  default:console.log(key);
   //   console.log(i);
   // alert("hello");
 }
}

function keypress_animation(input){

      document.querySelector("."+input).classList.add("pressed");
      setTimeout(function(){
      document.querySelector("."+input).classList.remove("pressed");
      console.log("working");
      },500);
}

// var myAudio=new Audio("/sounds/crash.mp3");
// myAudio.play();