// Database
const words = [
    'mathematician',
    'scientist',
    'document',
    'object',
    'model',
    'smart',
    'nice',
    'intelligent',
    'committee',
    'enterprise',
    'python',
    'public',
    'server',
    'parser',
    'monitor',
    'editor',
    'revelation',
    'intense',
    'memoization',
    'cookies',
    'string',
    'boolean',
    'number',
    'undefined',
    'null',
    'float',
    'tough',
    'javascript',
    'whack',
    'paypal',
    'tesla',
    'faraday',
    'google',
    'space',
    'exploration',
    'solar',
    'universal',
    'class',
    'experience',
    'software',
    'infinity',
    'electron',
    'python',
    'developer',
    'enterpreneur',
    'internet',
    'intellegence',
    'artificial'
];

// Variables
let word = null;
let result = null;
let wordDom = document.querySelector('#word');
let inputDom = document.getElementById('result');
let easy = document.querySelector('#easy');
let intermediate = document.querySelector('#hard');
let time = parseInt(document.querySelector('#time').textContent);
// Events
document.getElementById('result').addEventListener('keyup', function(e){
    timer();
    checkTime();
    checkAnswer();
});
// Functions
function checkTime(){
    if (time == 0 || time < 0 ){
        /**When the time is less than 0 , we'll update the DOM * and stop Timer*/
        document.querySelector('#time').textContent = 'ended'
        document.querySelector('#word').textContent = 'Game Over . Your score is ' + document.getElementById('score').textContent;
        window.clearInterval(easyTimer);
    } else {
        console.log('Game hasn\'t ended!!!');
    }
}
function checkAnswer(){
    word = document.getElementById('word').textContent;
    result = document.querySelector('input').value;
    if( word === result ){
        addScore();
        changeWord();
        if (easy.selected){
            time += 10;
        } else if (intermediate.selected) {
            time += 4;
        } else if (hard.selected) {
            time += 3;
        } else {
            console.log('Something Went Wrong!!!');
        }
        console.log('complete');
        inputDom.value = null;
    }else {
        console.log('not yet');
    }
}

function addScore(){
    let val = document.getElementById('score').textContent;
    document.getElementById('score').textContent = parseInt(val) + 2;
}

function changeWord(){
    wordDom.textContent = words[Math.floor(words.length*Math.random())];
    //inputDom.value = null;
};

function timer(){
    let time = document.querySelector('#time').textContent;
    if(easy.selected){
        easyTimer();
    }else if(intermediate.selected){
        mediumTimer();
    } else if (hard.selected){
        hardTimer();
    }
};

function easyTimer(){
    let timeLoop = window.setInterval(function(){
        if (time <= 0){
            time == 'It\'s over'
        } else {
            time--
        }
        document.querySelector('#time').textContent = time;
    },10000);
    return timeLoop;
};

function mediumTimer(){
    let timeLoop = window.setInterval(function(){
        if (time <= 0){
            time == 'It\'s over'
        } else {
            time--
        }
        document.querySelector('#time').textContent = time;
    },10000);
    return timeLoop;
};

function hardTimer(){
    let timeLoop = window.setInterval(function(){
        if (time <= 0){
            time == 'It\'s over'
        } else {
            time--
        }
        document.querySelector('#time').textContent = time;
    },10000);
    return timeLoop;
};

// //Quiz
// function checkString(s){
//     for (const elem of s){
//         console.log(elem);
//     }
// };
// checkString('o2p1e3m i p o');