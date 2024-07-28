import './reset.css'
import './style.css'
import $ from 'jquery'
import { SCRIPT } from './Script'
import { playSound,stopSound } from './playsound'
import { BGMLIST,ChoiceList,CharacterList } from './gamechange'

const $gamebox=$('.gamebox')
const $backgroundimg=$('.backgroundimg')
const $conversation=$('.conversation')
const $character=$('.character')
const $namebox=$('.namebox')
const $choicebox=$('.choicebox')
const $choice1=$('.choice1')
const $choice2=$('.choice2')
const $choice3=$('.choice3')
$backgroundimg.css('background-image', 'url("https://img.freepik.com/free-photo/anime-night-sky-illustration_23-2151684354.jpg?t=st=1722092342~exp=1722095942~hmac=2a289c842d707f4eeb2c2d34c4e0163a4ad67367cf8fa925f0969f81dba59b06&w=1380")');
$gamebox.css('background-image', 'url("https://img.freepik.com/free-photo/cityscape-anime-inspired-urban-area_23-2151028639.jpg?t=st=1722092803~exp=1722096403~hmac=4fa1ebd54d37aeea219565d395c07cc8444e495e005e1d911a65ea171b9f0bf0&w=996")');
$character.attr('src','https://media1.tenor.com/m/5BYK-WS0__gAAAAd/cool-fun.gif')

//현재 대화순서
let NowConversation=-1;

//게임 변화요소 리스트
let ChoiceindexList=Object.keys(ChoiceList).map(Number);
let BgmindexList=Object.keys(BGMLIST).map(Number);
let CharacterindexList=Object.keys(CharacterList).map(Number);

let currentBgm;

//타이핑관련
let Conversationtext  // 현재 나온 타이핑
let currentCharIndex  // 현재 타이핑 위치
let typingSpeed = 60; // 타이핑 속도 (밀리초)

$choicebox.hide();

//타이핑효과
function typeCharacter() {
  if (currentCharIndex < Conversationtext.length) {
    playSound('type',0.3)
    $conversation.text($conversation.text() + Conversationtext.charAt(currentCharIndex));
    currentCharIndex++;
    setTimeout(typeCharacter, typingSpeed);
  } 
  else {
    $conversation.text(Conversationtext); // 타이핑이 끝나면 전체 텍스트 표시
    $('.textbox').css('pointer-events', 'auto');
    if(ChoiceindexList.includes(NowConversation) && $namebox.text()!="댕댕이"){
      ShowChoicebox()
  }
  }
}

//선택지 열기
function ShowChoicebox(){
    $choicebox.show();
    $choice1.text(ChoiceList[NowConversation][1])
    $choice2.text(ChoiceList[NowConversation][2])
    $choice3.text(ChoiceList[NowConversation][3])
}

//텍스트 출력 초기화시키는곳
function PrintText(name,text){
    $conversation.text('');
    currentCharIndex=0;
    $namebox.text(name)
    Conversationtext=text
    $('.textbox').css('pointer-events', 'none');
    typeCharacter();
    
}

//브금 바꾸는곳
function ChangeBgm(bgmname,volume){
  if (currentBgm) {
    currentBgm.pause();
    currentBgm.currentTime = 0;
  }
  currentBgm=playSound(bgmname,volume)
}

//선택지 고름
$('.choice').on('click', function() {
    playSound('choice',0.3)
    PrintText("댕댕이",$(this).text());
    $choicebox.hide();
});



//텍스트 란 클릭
$('.textbox').on('click', function() {
    NowConversation+=1;
    PrintText(SCRIPT[NowConversation].name,SCRIPT[NowConversation].Scripttext)
    
    //노래바꾸기
    if (BgmindexList.includes(NowConversation)){
      ChangeBgm(BGMLIST[NowConversation],0.1)
    }
    //캐릭터 바꾸기
    if (CharacterindexList.includes(NowConversation)){
      $character.attr('src',CharacterList[NowConversation])
    }
});


ChangeBgm('back_peacful',0.5)