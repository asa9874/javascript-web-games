import { SCRIPT } from "./Script";
import $ from 'jquery'
//게임 요소
export let health=100
export let money=30

//이벤트 이동, 
//병원,착한로봇,야생의 습격
export let eventlist=getEventIndices(SCRIPT)

//이벤트 시작리스트 리턴해주기
function getEventIndices(scriptArray) {
  let eventIndices = [];
  for (let i = 0; i < scriptArray.length; i++) {
      if (scriptArray[i].hasOwnProperty('event') &&  scriptArray[i].event!='death'){
          eventIndices.push(i);
      }
  }
  return eventIndices;
}



//event= 랜덤이벤트 || 숫자면 해당번호 스크립트로 이동
export function goEvent(event){
    var script
    if(event==="death"){death()}
    else if(health<=0){return 6} //뒤짐
    else if(event==="event"){
        //스크립트번호의 -1로 이동해야함
        script=eventlist[Math.floor(Math.random()*eventlist.length)]-1;
        $('.character').hide();
    }
    else{
        script=event
    }
    return script
}

//죽으면 되는함수
function death(){
  window.location.href ='https://www.youtube.com/watch?v=caf-CLksQCk'
}


//성공 or 실패 확인

export function SuccessChoice(nowScript,event){
  if(NoMoneyCheck(nowScript,event)){ 
    return "failure"
  }

  var successRate = event.successRate
  const random = Math.random();
  return random < successRate ? "success" : "failure";
}

//돈이 없어요
//다음 스크립트의 선택지 효과를 읽음
export function NoMoneyCheck(nowScript,event){
  if(event.shop){
    if(money+nowScript["success"].effect.money<0){
      return true
    }
  }
}



//게임요소 변화주기
export function ChoiceEffect(effect){
  if(effect.health){
    health=health+effect.health
  }
  if(effect.money){
    money=money+effect.money
  }

  if(money<=0){money=0}
  if(health<=0){health=0}
}

//선택지
//text: 선택지 글씨, successRate:성공확률
export const ChoiceList={
  'hospital': {
    1:{"text":"상자를 연다","successRate":0.7},           // 상자를 열 때 성공 확률 70%
    2:{"text":"무시하고 지나가기","successRate":1},       // 상자를 무시할 때 성공 확률 100%
    3:{"text":"상자를 분석한다.","successRate":0.5}       // 상자를 분석할 때 성공 확률 50%
  },
  "wildlife_attack": {
    1: {"text":"동물의 공격을 피한다.", "successRate":0.6},   // 공격을 피할 때 성공 확률 60%
    2: {"text":"동물과 싸운다.", "successRate":0.4},         // 동물과 싸울 때 성공 확률 40%
    3: {"text":"도망친다.", "successRate":0.5}              // 도망칠 때 성공 확률 50%
  },
  "bandit_attack": {
    1: {"text":"저항한다", "successRate":0.5}, // 저항하기 성공 확률 50%
    2: {"text":"도망친다", "successRate":0.6}, // 도망가기 성공 확률 60%
    3: {"text":"협상한다", "successRate":0.4}  // 협상하기 성공 확률 40%
  },
  "machine_fight": {
    1: {"text":"기계의 공격을 피한다", "successRate":0.5},
    2: {"text":"기계와 싸운다", "successRate":0.4},
    3: {"text":"기계를 제어하려 한다", "successRate":0.3}
  },
  "shelter_found": {
    1: {"text":"쉼터에서 휴식한다", "successRate":1},
    2: {"text":"쉼터 주변을 탐색한다", "successRate":0.8},
    3: {"text":"쉼터를 무시하고 계속 이동한다", "successRate":0.2}
  },
  "merchant_purchase": {
    1: {"text":"응급처치 키트를 구매한다", "successRate":1,'shop':true},
    2: {"text":"식량을 구매한다", "successRate":1,'shop':true},
    3: {"text":"아무것도 사지 않는다", "successRate":1}
  }
}


