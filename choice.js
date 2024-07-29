export function isChoiceScript(script) {
    if (script && typeof script === 'object') {
      return script.hasOwnProperty(1);
    }
    return false;
}

//선택지
export const ChoiceList={
  1:{1:"캬오오오ㅗㅇㅇ",2:"기냐냐냐오옹",3:"케케케ㅔ에켁ㅇ"}
}
