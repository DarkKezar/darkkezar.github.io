

let lButton = document.getElementById("left");
let rButton = document.getElementById("right");
let feedbacks = document.getElementsByClassName("feedback");

let fpage = 1;
let countPage = 2;
let countItems = feedbacks.length;

const FShow = function(){
    for(let i = 0; i < feedbacks.length; i++) 
        feedbacks[i].style.display = "none";
    let items = (countItems / countPage);
    let StartPosition = (fpage - 1) * items;

    for(let i = StartPosition; i < StartPosition + items; i++)
        feedbacks[i].style.display = "block";

    if(fpage == 1) lButton.classList.remove("active");
    else lButton.classList.add("active");

    if(fpage == countPage) rButton.classList.remove("active");
    else rButton.classList.add("active");
}

const F = function() { //about videos
    let mql = window.matchMedia("(orientation: portrait)");

    if(mql.matches) {  
        countPage = countItems;
    } else {  
        countPage = 2;
        fpage = 1;
    }
    FShow();
}

lButton.addEventListener('click', () => { if(fpage > 1) fpage -= 1; FShow();});
rButton.addEventListener('click', () => { if(fpage < countPage) fpage += 1; FShow();});

window.addEventListener('load', () => F());
window.addEventListener("resize", () => F());

let text1 = document.getElementById("cover-surname");
let text2 = document.getElementById("cover-name");

window.addEventListener('scroll', function() {
    text1.style.transform = "translateX(" + Math.round(this.window.scrollY * 0.5) + "px)";
    text2.style.transform = "translateX(-" + Math.round(this.window.scrollY * 0.5) + "px)";
});