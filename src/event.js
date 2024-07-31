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
export const ChoiceList={
  'hospital':{
    1:{"text":"상자열기"},
    2:{"text":"지나가기"},
    3:{"text":"함정해제"}}
}


export function SuccessChoice(){
  var successRate = 0.5
  const random = Math.random();
  return random < successRate ? "success" : "failure";
}
