import './assets/reset.css'
import './assets/style.css'
import $ from 'jquery'
import { playSound } from './playsound'
import { SCRIPT } from './Script'

const $maingamebox=$('.maingamebox')
const $startbox=$('.startbox')
const $endbox=$('.endbox')

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
const $heartbox=$('.heartbox')

$GameImgBox.css('background-image', 'url("./img/bar.png")');
$AnswerBox.css('background-image','linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),url("./img/wood2.png")');
$character.attr('src',"./img/character.png")
$Answer.css('background-image','linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),url("./img/button.png")');
$heart.attr('src',"./img/heart.png")
$OXEffect.attr('src',"./img/O.png")
$OXEffect.hide()

$maingamebox.hide()
$endbox.hide()
let Life=5

let NowScript
let Correct
let WrongText

//타이핑관련
let Conversationtext  // 현재 나온 타이핑
let currentCharIndex  // 현재 타이핑 위치
let typingSpeed = 50; // 타이핑 속도 (밀리초)
let skiptext=false
let WrongCheck=false
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
      if(WrongCheck){
        WrongCheck=false
        setTimeout(function() {
          ChangeQuestion();
        }, 1000);
      }
      else{
        $Answer.css("pointer-events", "auto");
      }
      
    }
}
//텍스트 출력 초기화시키는곳
function PrintText(text){
    updateLifeImages()
    $QuestionText.text('');
    currentCharIndex=0;
    Conversationtext=text
    $character.attr('src',"./img/character2.png")
    typeCharacter();
}

//시작버튼
$startbutton.on('click', function() {
  $startbox.hide()
  $maingamebox.show()
  ChangeQuestion()
  playSound('music',0.08,true)
})

//질문 바꾸기
function ChangeQuestion(){
  $OXEffect.hide()
  $Answer.css("pointer-events", "none");
  let randomIndex = Math.floor(Math.random() * SCRIPT.length);
  NowScript=SCRIPT[randomIndex]
  Correct=NowScript["correct"]
  PrintText(NowScript["text"])
  $Answer.text("")
}

//정답보이게
function ShowAnswer(){
  $Answer1.text(NowScript[1])
  $Answer2.text(NowScript[2])
  $Answer3.text(NowScript[3])
}


//정답 클릭
$Answer.on('click', function() {
  if(($(this).is($Answer1) && Correct===1) || ($(this).is($Answer2) && Correct===2) || ($(this).is($Answer3) && Correct===3)){
    $OXEffect.attr('src',"./img/O.png")
    playSound('Correct',0.5)
  }
  else{
    $OXEffect.attr('src',"./img/X.png")
    playSound('Wrong',0.4)
    WrongCheck=true
    Life--
  }
  $OXEffect.show()
  if(!EndCheck()){
    $Answer.css("pointer-events", "none");

    setTimeout(function() {
      if(WrongCheck){PrintText(NowScript["WrongText"]);}
      else{ChangeQuestion()}
      $OXEffect.hide();
    }, 1000);
  }
})



//생명 업데이트
function updateLifeImages() {
  $heartbox.empty()
  for (let i = 0; i < Life; i++) {
      $heartbox.append('<img class="heart" src="./img/heart.png">');
      console.log(1)
  }
}

function EndCheck(){
  if(Life===0){
    $endbox.show()
    $maingamebox.hide()
    return true
  }
  else{return false} 
}