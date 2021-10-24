let simplecolors = ["red", "#F15025", "green", "Rgba(133,122,200)"];
let hexcolor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.querySelector("#button");
let changedbg = document.getElementById("bgc");
let nameofcolor = document.querySelector("span");
let sh = document.querySelectorAll("button");

btn.addEventListener("click",changesimplecolors);
    
    function randomnumber() {
        return Math.floor(Math.random() * simplecolors.length);
}
function changesimplecolors(){
    let randomnb = randomnumber();
    changedbg.style.backgroundColor=simplecolors[randomnb];
    nameofcolor.innerHTML=simplecolors[randomnb];
}

sh[1].addEventListener("click",function(){
    sh[0].classList.remove("active");
    sh[1].classList.add("active");
    changedbg.style.backgroundColor="lightgray";
    nameofcolor.innerHTML="#F15025";
    if(sh[1].classList.contains("active")){
    btn.addEventListener("click",changehexcolors);
    function randomindex() {
        return Math.floor(Math.random() * hexcolor.length);
    }
    function changehexcolors(){
        let hc="#";
        for(let i=0;i<6;i++){
            hc+=hexcolor[randomindex()];
        }
        changedbg.style.backgroundColor=`${hc}`;
        nameofcolor.innerHTML=`${hc}`;
    }
    }
});

sh[0].addEventListener("click",function(){
    sh[1].classList.remove("active");
    sh[0].classList.add("active");
    changedbg.style.backgroundColor="lightgray";
    nameofcolor.innerHTML="#F15025";
    if(sh[0].classList.contains("active")){
        
    btn.addEventListener("click",changesimplecolors);
    
    function randomnumber() {
        return Math.floor(Math.random() * simplecolors.length);
}
function changesimplecolors(){
    let randomnb = randomnumber();
    changedbg.style.backgroundColor=simplecolors[randomnb];
    nameofcolor.innerHTML=simplecolors[randomnb];
}
}
});