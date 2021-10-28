let buttonright=document.getElementById("right");
let buttonleft=document.getElementById("left");
let buttonsurprise=document.getElementById("surpriseme");
let reviews=document.getElementsByClassName("reviews");
let images=document.getElementsByClassName("images");
let j=0;

buttonright.addEventListener("click", function(){
    for(i=0;i<reviews.length;i++){
        reviews[i].style.display="none";
        images[i].style.display="none";
    }
    j++;
    if(j>reviews.length - 1)
    j=0;
    reviews[j].style.display="block";
    images[j].style.display="block";
});

buttonleft.addEventListener("click", function(){
    for(i=0;i<reviews.length;i++){
        reviews[i].style.display="none";
    }
    j--;
    if(j<0)
    j=reviews.length - 1;
    reviews[j].style.display="block";
});

buttonsurprise.addEventListener("click", function(){
    for(i=0;i<reviews.length;i++){
        reviews[i].style.display="none";
    }
    let k=Math.floor(Math.random() * 4);
    reviews[k].style.display="block";
});