//게임 요소
export let health=100


//이벤트 이동, 
//event= 랜덤이벤트 숫자면 해당번호 스크립트로 이동
export function goEvent(event){
    var script
    if(event==="event"){
        script=Math.floor(Math.random()*5);
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
    1:{"text":"상자열기","successRate":0},
    2:{"text":"지나가기","successRate":1},
    3:{"text":"함정해제","successRate":1}}
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