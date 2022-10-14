let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let sound1= new Audio("./audio/114 (1).mp3");
let sound2=new Audio("./audio/113.mp3");
let sound3=new Audio("./audio/106.mp3");
function man1(){
    sound1.play();
    sound2.pause();
    sound3.pause();
}
btn1.onclick= man1;

btn2.onclick=function(){
    sound2.play();
    sound1.pause();
    sound3.pause();
}
btn3.onclick=function(){
    sound3.play();
    sound1.pause();
    sound2.pause();
}