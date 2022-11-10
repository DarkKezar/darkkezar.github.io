
function waitForScrollEnd () {let last_changed_frame = 0;let last_x = window.scrollX;let last_y = window.scrollY;return new Promise( resolve => {function tick(frames) {if (frames >= 500 || frames - last_changed_frame > 20) {resolve();} else {if (window.scrollX != last_x || window.scrollY != last_y) {last_changed_frame = frames;last_x = window.scrollX;last_y = window.scrollY}requestAnimationFrame(tick.bind(null, frames + 1))}}tick(0)})}

let text1 = document.getElementById("cover-surname");
let text2 = document.getElementById("cover-name");
let screen1 = document.getElementById("first_screen");
let screen2 = document.getElementById("second_screen");
let screen3 = document.getElementById("third_screen");
let screen4 = document.getElementById("fourth_screen");

let coin_ctr_1 = document.getElementById("coint_ctr_1");
let coin_ctr_2 = document.getElementById("coint_ctr_2");
let coin_ctr_3 = document.getElementById("coint_ctr_3");	

let mario_run = document.getElementById("mario_run");
let mario_jmp = document.getElementById("mario_jmp");
let goldblock = document.getElementById("gold_block");
let coin = document.getElementById("sc4obj8");

const mario_run_src = [ "img/mario/mario_run/1.webp", "img/mario/mario_run/2.webp", "img/mario/mario_run/3.webp", "img/mario/mario_run/4.webp", "img/mario/mario_run/5.webp", "img/mario/mario_run/6.webp", "img/mario/mario_run/7.webp", "img/mario/mario_run/8.webp"];
const mario_jmp_src = [ "img/mario/mario_jump/1.webp", "img/mario/mario_jump/2.webp", "img/mario/mario_jump/3.webp", "img/mario/mario_jump/4.webp", "img/mario/mario_jump/5.webp", "img/mario/mario_jump/6.webp", "img/mario/mario_jump/7.webp"];

let i_run = 1, i_jmp = 1;
let isMarioOn = true;
let last_position = 0;
let currentX = 35; let speedX = 1; let startX = 35; let finishX = 100;
let currentY = 12.5; let speedY = 1; let startY = 12.5; let finishY = 18.5;
let isMarioPlayedTop = false;
let isMarioPlayedBottom = true;
let jump = true;
let lastFrameTime = 0;

window.addEventListener('scroll', function() {
    text1.style.transform = "translateX(" + Math.round(this.window.scrollY * 0.5) + "px)";
    text2.style.transform = "translateX(-" + Math.round(this.window.scrollY * 0.5) + "px)";

    if(this.window.scrollY >  screen2.clientHeight + screen3.clientHeight * 0.6 &&
        this.window.scrollY <  screen2.clientHeight + screen3.clientHeight + screen4.clientHeight){

        coin_ctr_1.style.transform = "translateY(" + (this.window.scrollY - (screen2.clientHeight + screen3.clientHeight * 0.6)) * 1.25 + "px)";
        coin_ctr_2.style.transform = "translateY(" + (this.window.scrollY - (screen2.clientHeight + screen3.clientHeight * 0.6)) * 1.15 + "px)";
        coin_ctr_3.style.transform = "translateY(" + (this.window.scrollY - (screen2.clientHeight + screen3.clientHeight * 0.6)) * 1.05 + "px)";
    }


    if(isMarioOn){
        if(Math.sign(last_position - this.window.scrollY) < 0){
            if(this.window.scrollY > screen2.clientHeight + screen3.clientHeight + screen4.clientHeight * .8){
                //if(!isMarioPlayedTop) window.scrollTo(0, screen2.clientHeight + screen3.clientHeight + screen4.clientHeight + screen1.clientHeight * .2); 
                if(currentX == 63 && !isMarioPlayedTop){
                    mario_run.classList.remove("active");
                    mario_jmp.classList.add("active");
        
                    if(currentY < finishY && jump){
                        currentY += speedY;
                        mario_jmp.style.bottom = currentY + "vw";
                    } else if(currentY > startY){
                        coin.style.transform = "translateY(-13vh)";
                        goldblock.style.transform = "translateY(-50%)";
                        jump = false;
        
                        currentY -= speedY;
                        mario_jmp.style.bottom = currentY + "vh";
                    } else {
                        mario_run.classList.add("active");
                        mario_jmp.classList.remove("active");
                        isMarioPlayedTop = true;
                        isMarioPlayedBottom = false;
                    }
        
                } else if(currentX < finishX){
                    mario_run.classList.add("active");
                    mario_jmp.classList.remove("active");
        
                    currentX += speedX;
                    mario_run.style.left = currentX + "vw";
                }
            }
        }else{
            if( this.window.scrollY <= screen2.clientHeight + screen3.clientHeight + screen4.clientHeight + screen1.clientHeight * .5){
                if(!isMarioPlayedBottom) {
                    //window.scrollTo(0, screen2.clientHeight + screen3.clientHeight + screen4.clientHeight + screen1.clientHeight * .2);
                    if(currentX == 63 && !isMarioPlayedBottom){
                        mario_run.classList.remove("active");
                        mario_jmp.classList.add("active");
            
                        if(currentY < finishY && !jump){
                            currentY += speedY;
                            mario_jmp.style.bottom = currentY + "vh";
                        } else if(currentY > startY){
                            coin.style.transform = "translateY(0%)";
                            goldblock.style.transform = "translateY(0%)";
                            jump = true;
                            
                            currentY -= speedY;
                            mario_jmp.style.bottom = currentY + "vh";
                        } else {
                            mario_run.classList.add("active");
                            mario_jmp.classList.remove("active");
                            isMarioPlayedTop = false;
                            isMarioPlayedBottom = true;
    
                            //mario_run.style.left = startX + "vw";
                        }
                    } else if(currentX > startX){
                        mario_run.classList.add("active");
                        mario_jmp.classList.remove("active");
            
                        currentX -= (speedX);
                        mario_run.style.left = currentX + "vw";
                    }
                }else if(currentX > startX && !isMarioPlayedTop){
                    mario_run.classList.add("active");
                    mario_jmp.classList.remove("active");
        
                    currentX -= (speedX);
                    mario_run.style.left = currentX + "vw";
                }
            }
        }
    }
   
    let currentTime = Date.now();
    if(currentTime - lastFrameTime >= 33){
        mario_run.src = mario_run_src[i_run]; i_run++;
        mario_jmp.src = mario_jmp_src[i_jmp]; i_jmp++;
        if(i_run == 8) i_run = 0;
        if(i_jmp == 7) i_jmp = 0;

        lastFrameTime = currentTime;
    }

    last_position = this.window.scrollY;
});
/*
setInterval(() => {
    
}, 66);*/
