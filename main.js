import {Voca} from "./english.js"


const valuesList = Object.keys(Voca);
const buttons = document.querySelectorAll('#btn1, #btn2, #btn3, #btn4');
const englishVocaElement = document.getElementById('english-voca'); // id가 english-voca인 요소 선택

let corret="";
function englishinit(){
    buttons.forEach(button => {
        // VOCA 리스트에서 무작위로 요소 선택
        const randomIndex = Math.floor(Math.random() * valuesList.length);
        const randomWord = valuesList[randomIndex];
        
        // 버튼의 텍스트 설정
        button.innerText = randomWord;
        
    });
}

function koreaninit(){
    // 무작위로 하나의 버튼 선택
    const randomIndex = Math.floor(Math.random() * buttons.length);
    const randomButton = buttons[randomIndex];

    // 선택된 버튼의 텍스트(단어) 가져오기
    const randomWord = randomButton.innerText;

    // 선택된 단어의 (값) 가져오기
    const englishDefinition = Voca[randomWord];

    // english-voca 요소에 설정
    englishVocaElement.innerText = englishDefinition;
    corret=englishDefinition;
}


document.addEventListener('DOMContentLoaded', englishinit());
document.addEventListener('DOMContentLoaded', koreaninit());

buttons.forEach(button => {
    button.addEventListener('click', function() {
        checkCorrect(button);
    });
});

function checkCorrect(button) {
    if(Voca[button.innerText]===corret){
        englishinit();
        koreaninit();
    }
}