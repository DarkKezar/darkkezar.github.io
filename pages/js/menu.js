let burgerBtn = document.getElementById("burger");
let burgerImg = document.getElementById("burger_img");
let menu = document.getElementsByClassName('nav-menu')[0];
let isMenuOn = false;

burgerBtn.addEventListener("click", () => {
    if(isMenuOn){
        isMenuOn = false;
        burgerBtn.style.transform = "rotate(0deg)";
        menu.style.transform = "translateY(calc(-100% - 8vh))";
    }else{
        isMenuOn = true;
        burgerBtn.style.transform = "rotate(90deg)";
        menu.style.transform = "translateY(0%)";
    }
       
    
});
window.addEventListener("resize", () => {
    let mql = window.matchMedia("(orientation: portrait)");
    if(!mql.matches){
        menu.style.transform = "translateY(0)";
    }else{
        isMenuOn = false;
        burgerBtn.style.transform = "rotate(0deg)";
        menu.style.transform = "translateY(calc(-100% - 8vh))";
    }
    
});