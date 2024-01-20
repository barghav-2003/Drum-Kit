
// For detecting button press 
var arr=document.querySelectorAll(".drum");
for(var i=0;i<arr.length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var t=this.innerHTML; 
   makeSound(t);
    boxAnimate(t);
});

// for detecting key press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    boxAnimate(event.key);
});

function makeSound(t){

    if(t=="w")
    {
        
        var audio= new Audio('sounds/tom-1.mp3');
    }
    else if(t=="a")
    {
        var audio= new Audio('sounds/tom-2.mp3');
    }
    else if(t=="s")
    {
        var audio= new Audio('sounds/tom-3.mp3');
    }
    else if(t=="d")
    {
        var audio= new Audio('sounds/tom-4.mp3');
    }
    else if(t=="j")
    {
        var audio= new Audio('sounds/snare.mp3');
    }
    else if(t=="k")
    {
        var audio= new Audio('sounds/crash.mp3');
    }
    else
    {
        var audio= new Audio('sounds/kick-bass.mp3');
    }
   
    audio.play();
}

function boxAnimate(key){

    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");

    },100);
}

}