export function playSound(name,vol) {
    const audio = new Audio('./'+name+'.mp3');
    audio.volume = vol;
    audio.play();
    return audio;
}

export function stopSound(audio) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // 재생 위치를 처음으로 되돌림
    }
}

