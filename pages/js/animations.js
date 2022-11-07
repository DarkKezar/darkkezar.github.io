

let objPack1 = document.getElementsByClassName('objPack1');
let objPack2 = document.getElementsByClassName('objPack2');
let objPack3 = document.getElementsByClassName('objPack3');
let objPack4 = document.getElementsByClassName('objPack4');
let objPack5 = document.getElementsByClassName('objPack5');


anime({
    targets: objPack5,
    translateX: "5%",
    translateY: "5%",
    duration: 2000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});

const anime1 = anime({
    targets: objPack1,
    translateX: `5%`,
    translateY: `5%`,
    rotate: `30deg`,
    duration: 2000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});
const anime2 = anime({
    targets: objPack2,
    translateX: 0,
    translateY: `5%`,
    duration: 2000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});
const anime3 = anime({
    targets: objPack3,
    translateX: `5%`,
    translateY: 0,
    duration: 2000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});
const anime4 = anime({
    targets: objPack4,
    translateX: `5%`,
    translateY: `5%`,
    duration: 2000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});



const A = function() {
    let mql = window.matchMedia("(orientation: portrait)");
    if(!mql.matches){
        anime1.pause();
        anime2.pause();
        anime3.pause();
        anime4.pause();
    }else{
        anime1.restart();
        anime2.restart();
        anime3.restart();
        anime4.restart();
    }
}

window.addEventListener('load', () => A());
window.addEventListener("resize", () => A());

window.addEventListener('mousemove', e => {
    for(let i = 0; i < objPack1.length; i++){
        objPack1[i].style.transform = `translate(${(e.clientX) * 0.01}%, ${(e.clientY) * 0.01}%) rotate(${(e.clientX) / (e.clientY) * 2.5}deg)`;
    }
    for(let i = 0; i < objPack2.length; i++){
        objPack2[i].style.transform = `translate(0, ${(e.clientY) * 0.01}%)`;
    }
    for(let i = 0; i < objPack3.length; i++){
        objPack3[i].style.transform = `translate(${(e.clientX) * 0.01}%, 0`;
    }
    for(let i = 0; i < objPack4.length; i++){
        objPack4[i].style.transform = `translate(${(e.clientX) * 0.01}%, ${(e.clientY) * 0.01}%)`;
    }
});




	
    

  
