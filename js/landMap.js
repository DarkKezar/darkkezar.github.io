

let topE = document.getElementById('top');

$(window).scroll(function (event) {
    var topH = $(window).scrollTop();
     if(topH >= 200){
        topE.classList.add('active');
     } else {
        topE.classList.remove('active');
     }
});

topE.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $(document.getElementsByTagName('body')[0]).offset().top
    }, {
        duration: 1000,   // по умолчанию «400»
        easing: "swing" // по умолчанию «swing»
    });
    return;
})

let buttons = document.getElementsByTagName('nav')[0].getElementsByTagName('button');
let article = document.getElementsByClassName('prof_view');

for(let i = 0; i < 12; i++){
    buttons[i].addEventListener('click', () =>{
        for(let j = 0; j < 12; j++){
            buttons[j].classList.remove('active');
            article[j].classList.remove('active');
        }
        buttons[i].classList.add('active');
        article[i].classList.add('active');

        $('html, body').animate({
            scrollTop: $(article[i]).offset().top
        }, {
            duration: 1000,   // по умолчанию «400»
            easing: "swing" // по умолчанию «swing»
        });
    });
}

let questions = document.getElementsByClassName('question');
let queButton = document.getElementsByClassName('question-title-button');
let answers = document.getElementsByClassName('question-answer');

for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', () => {
        if(answers[i].classList.contains('active')){
            answers[i].classList.remove('active');
            queButton[i].classList.remove('active');
        }
        else{
            answers[i].classList.add('active');  
            queButton[i].classList.add('active');
        } 
    })
}