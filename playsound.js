//효과음
export function playSound(name,vol) {
    const audio = new Audio('./'+name+'.mp3');
    audio.volume = vol;
    audio.play();
    return audio;
}


//효과음 중지
export function stopSound(audio) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // 재생 위치를 처음으로 되돌림
    }
}


//브금
export function ChangeBgm(currentBgm,bgmname,volume){
    if (currentBgm) {
        currentBgm.pause();
        currentBgm.currentTime = 0;
    }
    currentBgm=playSound(bgmname,volume)
    return currentBgm;
}