

let buttons = document.getElementsByTagName('button');
let article = document.getElementsByClassName('prof_view');

for(let i = 0; i < 12; i++){
    buttons[i].addEventListener('click', () =>{
        for(let j = 0; j < 12; j++){
            buttons[j].classList.remove('active');
            article[j].classList.remove('active');
        }
        buttons[i].classList.add('active');
        article[i].classList.add('active');
    });
}

let questions = document.getElementsByClassName('question');
let answers = document.getElementsByClassName('question-answer');

for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', () => {
        if(answers[i].classList.contains('active'))
            answers[i].classList.remove('active');
        else
            answers[i].classList.add('active');    
    })
}