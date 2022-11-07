let ccb1 = document.getElementById("casse_but_1");
let ccb2 = document.getElementById("casse_but_2");
let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");

ccb1.addEventListener('click', () => {
    ccb1.classList.add("active");
    tab1.classList.add("active");

    ccb2.classList.remove("active");
    tab2.classList.remove("active");
});

ccb2.addEventListener('click', () => {
    ccb2.classList.add("active");
    tab2.classList.add("active");

    ccb1.classList.remove("active");
    tab1.classList.remove("active");
});



let vb1 = document.getElementById("videos_but_1");
let vb2 = document.getElementById("videos_but_2");
let cb1 = document.getElementById("casses_but_1");
let cb2 = document.getElementById("casses_but_2");
let fb1 = document.getElementById("feedback_but_1");
let fb2 = document.getElementById("feedback_but_2");
let vcards = document.getElementsByClassName("video_card");
let ccards = document.getElementsByClassName("casse_card");
let fcards = document.getElementsByClassName("feedback_card");

let vpage = 1,
    cpage = 1,
    fpage = 1;
let countPage = 2;
let countItems = 6;

const VShow = function(){
    for(let i = 0; i < vcards.length; i++) 
        vcards[i].classList.remove("active");
    let items = (countItems / countPage);
    let StartPosition = (vpage - 1) * items;
    for(let i = StartPosition; i < StartPosition + items; i++)
        vcards[i].classList.add("active");
    if(vpage == 1) vb1.classList.remove("active");
    else vb1.classList.add("active");

    if(vpage == countPage) vb2.classList.remove("active");
    else vb2.classList.add("active");
}

const CShow = function(){
    for(let i = 0; i < ccards.length; i++) 
        ccards[i].classList.remove("active");
    let items = (countItems / countPage);
    let StartPosition = (cpage - 1) * items;
    for(let i = StartPosition; i < StartPosition + items; i++)
        ccards[i].classList.add("active");
    if(cpage == 1) cb1.classList.remove("active");
    else cb1.classList.add("active");

    if(cpage == countPage) cb2.classList.remove("active");
    else cb2.classList.add("active");
}

const FShow = function(){
    for(let i = 0; i < fcards.length; i++) 
        fcards[i].classList.remove("active");
    let items = (countItems / countPage);
    let StartPosition = (fpage - 1) * items;
    for(let i = StartPosition; i < StartPosition + items; i++)
        fcards[i].classList.add("active");
    if(fpage == 1) fb1.classList.remove("active");
    else fb1.classList.add("active");

    if(fpage == countPage) fb2.classList.remove("active");
    else fb2.classList.add("active");
}

const F = function() { //about videos
    let mql = window.matchMedia("(orientation: portrait)");

    if(mql.matches) {  
        // Портретная ориентация
        countPage = 3;
    } else {  
        // Горизонтальная ориентация
        countPage = 2;
        if(cpage > countPage) cpage--;
        if(vpage > countPage) vpage--;
        if(fpage > countPage) fpage--;
    }
    VShow();
    CShow();
    FShow();
}

cb1.addEventListener('click', () => { if(cpage > 1) cpage -= 1; CShow();});
cb2.addEventListener('click', () => { if(cpage < countPage) cpage += 1; CShow();});

vb1.addEventListener('click', () => { if(vpage > 1) vpage -= 1; VShow();});
vb2.addEventListener('click', () => { if(vpage < countPage) vpage += 1; VShow();});

fb1.addEventListener('click', () => { if(fpage > 1) fpage -= 1; FShow();});
fb2.addEventListener('click', () => { if(fpage < countPage) fpage += 1; FShow();});

window.addEventListener('load', () => F());
window.addEventListener("resize", () => F());
