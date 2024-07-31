import { SCRIPT } from "./Script";

//게임 요소
export let health=100


//이벤트 이동, 
//병원,착한로봇,야생의 습격
let eventlist=getEventIndices(SCRIPT)

//이벤트 시작리스트 리턴해주기
function getEventIndices(scriptArray) {
  let eventIndices = [];
  for (let i = 0; i < scriptArray.length; i++) {
      if (scriptArray[i].hasOwnProperty('event')) {
          eventIndices.push(i);
      }
  }
  return eventIndices;
}

//event= 랜덤이벤트 숫자면 해당번호 스크립트로 이동
export function goEvent(event){
    var script
    if(event==="event"){
        //스크립트번호의 -1로 이동해야함
        script=eventlist[Math.floor(Math.random()*eventlist.length)]-1;
    }
    else{
        script=event
    }
    return script
}


//선택지
//text: 선택지 글씨, successRate:성공확률
export const ChoiceList={
  'hospital':{
    1:{"text":"상자를 연다","successRate":0},
    2:{"text":"무시하고 지나가기","successRate":1},
    3:{"text":"상자를 분석한다.","successRate":1}
  },
  "wildlife_attack": {
    1: {"text":"동물의 공격을 피한다.", "successRate":0},
    2: {"text":"동물과 싸운다.", "successRate":1},
    3: {"text":"도망친다.", "successRate":1}
}

}


//성공 or 실패 확인
export function SuccessChoice(event){
  var successRate = event.successRate
  const random = Math.random();
  return random < successRate ? "success" : "failure";
}

//게임요소 변화주기
export function ChoiceEffect(effect){
  if(effect.health){
    health=health+effect.health
  }
}