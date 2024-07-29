//선택지가 있나요?
export function isChoiceScript(script) {
    if (script && typeof script === 'object') {
      return script.hasOwnProperty(1);
    }
    return false;
}

//선택지
export const ChoiceList={
  1:{1:"첫번째 화살을 날린다.",2:"달을 보며 기도한다.",3:"받아들인다."}
}


