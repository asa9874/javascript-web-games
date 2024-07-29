import './reset.css'
import './style.css'
import $ from 'jquery'
import { playSound,stopSound,ChangeBgm } from './playsound'
import { BGMLIST,ChoiceList,CharacterList,SCRIPT } from './SCRIPT'
import { isChoiceScript } from './choice'

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

let choicecheck;
let nowchoice=0;
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
    if(ChoiceindexList.includes(NowConversation) && choicecheck){
      ShowChoicebox()
      choicecheck=false
    }
  }
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


//선택지 열기
function ShowChoicebox(){
    $choicebox.show();
    $choice1.text(ChoiceList[NowConversation][1])
    $choice2.text(ChoiceList[NowConversation][2])
    $choice3.text(ChoiceList[NowConversation][3])
}


//선택지 고름
$('.choice').on('click', function() {
    playSound('choice',0.3)
    PrintText("댕댕이",$(this).text());
    $choicebox.hide();

  if ($(this).is($choice1)) {nowchoice = 1;} 
  else if ($(this).is($choice2)) {nowchoice = 2;} 
  else if ($(this).is($choice3)) {nowchoice = 3;} 
});





//텍스트 란 클릭
$('.textbox').on('click', function() {
    NowConversation+=1;
    choicecheck=true
    var nowScript=SCRIPT[NowConversation]
    if(isChoiceScript(nowScript)){
      PrintText(nowScript[nowchoice].name,nowScript[nowchoice].Scripttext)
    }
    else{
      PrintText(nowScript.name,nowScript.Scripttext)
    }
    
    
    //노래바꾸기
    if (BgmindexList.includes(NowConversation)){
      currentBgm=ChangeBgm(currentBgm,BGMLIST[NowConversation].name,BGMLIST[NowConversation].volume)
    }
    //캐릭터 바꾸기
    if (CharacterindexList.includes(NowConversation)){
      $character.attr('src',CharacterList[NowConversation])
    }
});