import './assets/reset.css'
import './assets/style.css'
import $ from 'jquery'
import { playSound } from './playsound'
import { SCRIPT } from './Script'

const $maingamebox=$('.maingamebox')
const $startbox=$('.startbox')

const $GameImgBox=$('.GameImgBox')
const $AnswerBox=$('.AnswerBox')
const $InnerAnswerBox=$('.InnerAnswerBox')
const $character=$('.character')
const $Answer=$('.Answer')
const $heart=$('.heart')
const $OXEffect=$('.OXEffect')
const $QuestionText=$('.QuestionText')
const $startbutton=$('.startbutton')
const $Answer1=$('.Answer1')
const $Answer2=$('.Answer2')
const $Answer3=$('.Answer3')

$GameImgBox.css('background-image', 'url("./img/bar.png")');
$AnswerBox.css('background-image','linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),url("./img/wood2.png")');
$character.attr('src',"./img/character.png")
$Answer.css('background-image','linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),url("./img/button.png")');
$heart.attr('src',"./img/heart.png")
$OXEffect.attr('src',"./img/O.png")
$OXEffect.hide()

$maingamebox.hide()

let NowScript
let Correct

//타이핑관련
let Conversationtext  // 현재 나온 타이핑
let currentCharIndex  // 현재 타이핑 위치
let typingSpeed = 50; // 타이핑 속도 (밀리초)
let skiptext=false

//타이핑효과
function typeCharacter() {
    if (currentCharIndex < Conversationtext.length && !skiptext) {
      $QuestionText.text($QuestionText.text() + Conversationtext.charAt(currentCharIndex));
      currentCharIndex++;
      setTimeout(typeCharacter, typingSpeed);
      playSound('typing',0.1)
    } 
    else {
      $QuestionText.text(Conversationtext); // 타이핑이 끝나면 전체 텍스트 표시
      $character.attr('src',"./img/character3.png")
      ShowAnswer()
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


$startbutton.on('click', function() {
  $startbox.hide()
  $maingamebox.show()
  ChangeQuestion()
})


function ChangeQuestion(){
  NowScript=SCRIPT[0]
  Correct=NowScript["correct"]
  PrintText(NowScript["text"])
  $Answer.text("")
}

function ShowAnswer(){
  $Answer1.text(NowScript[1])
  $Answer2.text(NowScript[2])
  $Answer3.text(NowScript[3])
}


$Answer.on('click', function() {
  if(($(this).is($Answer1) && Correct===1) || ($(this).is($Answer2) && Correct===2) || ($(this).is($Answer3) && Correct===3)){
    $OXEffect.attr('src',"./img/O.png")
  }
  else{
    $OXEffect.attr('src',"./img/X.png")
  }
  $OXEffect.show()
  
})

//playSound('music',0.08,true)
