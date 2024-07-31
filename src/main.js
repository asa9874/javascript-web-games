import '../reset.css'
import '../style.css'
import '../animation.css'
import $ from 'jquery'
import { SCRIPT } from './Script'
import { PlayBgm,PlayVoice,playEffectSound } from './playsound'
import { ChangeCharactor } from './charactor'
import { Animation } from './animation'
import { goEvent,ChoiceList, SuccessChoice, health, ChoiceEffect } from './event'

export const $test=$('.test')
export const $GameStartBox=$('.GameStartBox');
export const $OpeningSkipBox=$('.OpeningSkipBox')
export const $gamebox=$('.gamebox')
export const $gamebackgroundimg=$('.gamebackgroundimg')
export const $backgroundimg=$('.backgroundimg')
export const $conversation=$('.conversation')
export const $character=$('.character')
export const $character1=$('.character1')
export const $character2=$('.character2')
export const $character3=$('.character3')
export const $namebox=$('.namebox')
export const $choicebox=$('.choicebox')
export const $choice1=$('.choice1')
export const $choice2=$('.choice2')
export const $choice3=$('.choice3')

//현재 대화순서
export let NowConversation=-1;
export let nowScript;

//선택지
export let choicecheck;      //선택지 골랐는지 확인
export let choiceevent;      //어떤 선택지사항인지
export let choicenow=0;      //어떤 선택지고름?
export let choicesuccess           //선택지 성공여부


export let currentBgm;       //현재 Bgm 넣는 변수
export let currentVoice;     //현재 목소리 넣는 변수

//타이핑관련
export let Conversationtext  // 현재 나온 타이핑
export let currentCharIndex  // 현재 타이핑 위치
export let typingSpeed = 60; // 타이핑 속도 (밀리초)


//초기세팅
$backgroundimg.css('background-image', 'url("./backgroundimg/space.png")');
$gamebox.hide()
$character.hide();
$choicebox.hide();





//타이핑효과
export function typeCharacter() {
  if (currentCharIndex < Conversationtext.length) {
    //목소리 없으면 타이핑소리로 대체
    if(!nowScript.voice){
      playEffectSound('type',0.3)
    }
    $conversation.text($conversation.text() + Conversationtext.charAt(currentCharIndex));
    currentCharIndex++;
    setTimeout(typeCharacter, typingSpeed);
  } 
  else {
    $conversation.text(Conversationtext); // 타이핑이 끝나면 전체 텍스트 표시
    $('.textbox').css('pointer-events', 'auto');
    if((nowScript.choice)){
      ShowChoicebox(nowScript.choice)
    }
  }
}

//텍스트 출력 초기화시키는곳
export function PrintText(name,text){
  $conversation.text('');
  currentCharIndex=0;
  $namebox.text(name)
  Conversationtext=text
  $('.textbox').css('pointer-events', 'none');
  typeCharacter();
}


//선택지 열기
export function ShowChoicebox(choicenumber){
    $choicebox.show();
    choiceevent=ChoiceList[choicenumber]
    $choice1.text(choiceevent[1]["text"])
    $choice2.text(choiceevent[2]["text"])
    $choice3.text(choiceevent[3]["text"])
}


//선택지 고름
$('.choice').on('click', function() {
  playEffectSound('choice',0.3)
  nowScript.voice=null
  $choicebox.hide();

  if ($(this).is($choice1)) {choicenow = 1;} 
  else if ($(this).is($choice2)) {choicenow = 2;} 
  else if ($(this).is($choice3)) {choicenow = 3;} 
  
  choicesuccess=SuccessChoice(choiceevent[choicenow])
  NextConversation()
  
});





//바꾸기,체크 함수
export function ChangeElements(){
  currentVoice=PlayVoice(currentVoice,nowScript.voice,1)
  currentBgm=PlayBgm(currentBgm,nowScript.bgm)

  ChangeCharactor($character1,nowScript.character1)
  ChangeCharactor($character2,nowScript.character2)
  ChangeCharactor($character3,nowScript.character3)


  if(nowScript.background) {
    $gamebackgroundimg.css('background-image',nowScript.background)
  }
  if(nowScript.name){
    $namebox.text(nowScript.name)
    $namebox.show()
  }
  else{
    $namebox.hide()
  }

  if(nowScript.animation){
    Animation(nowScript.animation)
  }
  if(nowScript.goscript){
    
    NowConversation=goEvent(nowScript.goscript)
    
  }

  if(nowScript.typingSpeed){
    typingSpeed=nowScript.typingSpeed
  }
  else{
    typingSpeed=60
  }
  if(nowScript.effect){
    ChoiceEffect(nowScript.effect)
    $test.text(health)
  }
  
}


//다음대화로 이동하기
export function NextConversation(){
  NowConversation+=1;
  
  if(SCRIPT[NowConversation].Scripttext){
    nowScript=SCRIPT[NowConversation]
  }
  else{
    nowScript=SCRIPT[NowConversation][choicenow][choicesuccess]
  }


  PrintText(nowScript.name,nowScript.Scripttext)
  //바꾸기
  ChangeElements()
}



//텍스트 란 클릭
$('.textbox').on('click', function() {
  NextConversation()
});



//게임시작
$GameStartBox.on('click', function() {
  NextConversation();
  $GameStartBox.hide();
  $gamebox.show()
  $OpeningSkipBox.hide()
});

//오프닝스킵
$OpeningSkipBox.on('click', function() {
  NowConversation=5
  NextConversation();
  $GameStartBox.hide();
  $gamebox.show()
  $OpeningSkipBox.hide()
});