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


let countOnPage = 3;
let vcur = 0;
let ccur = 0;
let fcur = 0;
let curW = 28.5;

const VShow = function(){
    for(let i = 0; i < vcards.length; i++){
        if(i < vcur){
            vcards[i].style.transform = "translateX(-" +  (i + 1) * 100 + "vw)";
        }else if (i < vcur + countOnPage){
            vcards[i].style.transform = "translateX(-" + curW * (i - (i - vcur)) + "vw)";
        }else{
            vcards[i].style.transform = "translateX(" + (i - vcur - 1) * 100 + "vw)";
        } 
    }
    if(vcur == 0) vb1.classList.remove("active");
    else vb1.classList.add("active");

    if(vcur == vcards.length - countOnPage) vb2.classList.remove("active");
    else vb2.classList.add("active");
}

const CShow = function(){
    for(let i = 0; i < ccards.length; i++){
        if(i < ccur){
            ccards[i].style.transform = "translateX(-" +  (i + 1) * 100 + "vw)";
        }else if (i < ccur + countOnPage){
            ccards[i].style.transform = "translateX(-" + curW * (i - (i - ccur)) + "vw)";
        }else{
            ccards[i].style.transform = "translateX(" + (i - ccur - 1) * 100 + "vw)";
        } 
    }
    if(ccur == 0) cb1.classList.remove("active");
    else cb1.classList.add("active");

    if(ccur == ccards.length - countOnPage) cb2.classList.remove("active");
    else cb2.classList.add("active");
}

const FShow = function(){
    for(let i = 0; i < fcards.length; i++){
        if(i < fcur){
            fcards[i].style.transform = "translateX(-" +  (i + 1) * 100 + "vw)";
        }else if (i < fcur + countOnPage){
            fcards[i].style.transform = "translateX(-" + curW * (i - (i - fcur)) + "vw)";
        }else{
            fcards[i].style.transform = "translateX(" + (i - fcur - 1) * 100 + "vw)";
        } 
    }
    if(fcur == 0) fb1.classList.remove("active");
    else fb1.classList.add("active");

    if(fcur == fcards.length - countOnPage) fb2.classList.remove("active");
    else fb2.classList.add("active");
}

const F = function() { //about videos
    let mql = window.matchMedia("(orientation: portrait)");

    if(!mql.matches) {  
        countPage = 3;
        countOnPage = 3;
        curW = 28.5;
    } else {  
        countPage = 2;
        countOnPage = 2;
        curW = 48;
    }
    VShow();
    CShow();
    FShow();
}

cb1.addEventListener('click', () => { if(ccur > 0) ccur--; CShow(); } );
cb2.addEventListener('click', () => { if(ccur < ccards.length - countOnPage) ccur++; CShow(); } );

vb1.addEventListener('click', () => { if(vcur > 0) vcur--; VShow(); });
vb2.addEventListener('click', () => { if(vcur < vcards.length - countOnPage) vcur++; VShow(); });

fb1.addEventListener('click', () => { if(fcur > 0) fcur--; FShow();});
fb2.addEventListener('click', () => { if(fcur < fcards.length - countOnPage) fcur++; FShow(); });

window.addEventListener('load', () => F());
window.addEventListener("resize", () => F());
