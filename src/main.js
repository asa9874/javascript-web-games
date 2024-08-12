import './assets/reset.css'
import './assets/style.css'
import $ from 'jquery'

const $GameImgBox=$('.GameImgBox')
const $AnswerBox=$('.AnswerBox')
const $InnerAnswerBox=$('.InnerAnswerBox')
const $character=$('.character')
const $Answer=$('.Answer')
const $heart=$('.heart')
const $QuestionText=$('.QuestionText')
$GameImgBox.css('background-image', 'url("./img/bar.png")');
$AnswerBox.css('background-image','linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),url("./img/wood2.png")');
$character.attr('src',"./img/character.png")
$Answer.css('background-image','linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),url("./img/button.png")');
$heart.attr('src',"./img/heart.png")

//타이핑관련
let Conversationtext  // 현재 나온 타이핑
let currentCharIndex  // 현재 타이핑 위치
let typingSpeed = 60; // 타이핑 속도 (밀리초)
let skiptext=false

//타이핑효과
function typeCharacter() {
    if (currentCharIndex < Conversationtext.length && !skiptext) {
      $QuestionText.text($QuestionText.text() + Conversationtext.charAt(currentCharIndex));
      currentCharIndex++;
      setTimeout(typeCharacter, typingSpeed);
    } 
    else {
      $QuestionText.text(Conversationtext); // 타이핑이 끝나면 전체 텍스트 표시
      $character.attr('src',"./img/character.png")
    }
}

//텍스트 출력 초기화시키는곳
function PrintText(text){
    $QuestionText.text('');
    currentCharIndex=0;
    Conversationtext=text
    $('.textbox').css('pointer-events', 'none');
    $character.attr('src',"./img/character2.png")
    typeCharacter();
}

PrintText(`웹 브라우저에서 서버로 요청할 때, 서로 다른 도메인 간의 리소스 공유를 
허용하거나 제한하기 위한 보안 기능입니다.
`)