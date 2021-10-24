let nb = document.getElementById("number");
let btndecrease = document.getElementById("decrease");
let btnreset = document.getElementById("reset");
let btnincrease = document.getElementById("increase");
let a = (parseInt)(nb.innerHTML);


btndecrease.addEventListener("click",function decrease(){
    a-=1;
    nb.textContent=a;
    if(a > 0){
        nb.style.color="green";}
        if(a < 0){
        nb.style.color="red";}
        if(a===0){
        nb.style.color="black";}
});

btnreset.addEventListener("click",function(){
    nb.textContent=0;
    nb.style.color="black";
});

btnincrease.addEventListener("click",function(){
    a+=1;
    nb.textContent=a;
    if(a > 0){
        nb.style.color="green";}
        if(a < 0){
        nb.style.color="red";}
        if(a===0){
        nb.style.color="black";}
});

