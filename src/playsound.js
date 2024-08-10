//베이스 사운드 함수
export function playSound(name,vol, loop = false) {
    const audio = new Audio('./'+name+'.mp3');
    audio.volume = vol;
    audio.loop = loop;
    audio.play();
    return audio;
}



//소리이름,간격ms ,개수
export function playSecondSound(effectname,Interval,count){
    let countnow=0
    let nIntervId
    nIntervId=setInterval(playEffectSound,Interval)
    function playEffectSound(effectname='Blop',effectvolume=1) {
        countnow++
        if(countnow===count){clearInterval(nIntervId)}
        playSound("effect/"+effectname,effectvolume)
    }
}