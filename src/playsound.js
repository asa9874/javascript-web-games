
//베이스 사운드 함수
export function playSound(name,vol=1, loop = false) {
    const audio = new Audio('./sound/'+name+'.mp3');
    audio.volume = vol;
    audio.loop = loop;
    audio.play();
    return audio;
}

