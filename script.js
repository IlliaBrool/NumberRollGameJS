'use strict';

let btn = document.querySelector('#btn-check');
let message = document.querySelector('#processMsg');
let numSign = document.querySelector('#guessedNum');
let btnAgain = document.querySelector('#btnAgain');
let input = document.querySelector('#guess'); //помещаем содержимое поля для ввода из хтмл в переменную
let score = document.querySelector('#score');
let highScore = document.querySelector('#highscore');


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; //minimum and maximum are included
};
let number = Math.trunc(Math.random()*20+1);; //set a random number between 1 and 20
console.log(number);

function CheckNumber(){//функция првоеряющая номер
    
    if (input.value == number) { //если введенное пользователем число равняется загаданному рандомом
        numSign.textContent = number; //тогда знак вопроса становится загаданным числом
        message.textContent ='Answer is correct ! :)' ; //появляется диалог об успешной попытке
        document.body.style.backgroundColor = "#60b347"; //меняется текст в стиле в цсс документе ( меняем цвет фона)       
        console.log('URAAA'); //отчитываемся в консоли об успехе
        if (Number(score.textContent) > Number(highScore.textContent)) {
            console.log('YOOOO');
            highScore.textContent = `${score.textContent}`;
        };
    }else { //если же пользователь не угадал
        score.textContent = `${Number(score.textContent)-1}`;
        console.log('Something went wrong');//появляется диалог шо типа произошла неудачная попытка
        console.log(score.value);  //уменьшается счетчик попыток
    };
      
};

function RefreshGame() {
    input.value = ''; // делаем пустым поле для ввода
    message.textContent = 'Start guessing... '; //меняем обратно диалоговое сообщение
    numSign.textContent = '?'; //откатываем знак по центру
    document.body.style.backgroundColor = "#222"; // возвращаем серый цвет фона
    number = getRandomIntInclusive(1,20);
    console.log(`new number is ${number}`);
    score.textContent = '20';
};

btn.addEventListener('click', function(){ //добавляем событие ('click') к указанному элементу ( в нашем случае кнопка Check!)
    CheckNumber();// проверяем номер
});

btnAgain.addEventListener('click', function() { //при нажатии на кнопку again 
    RefreshGame(); //игра обновляется
});