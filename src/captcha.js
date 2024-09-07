import $ from 'jquery';

const elements = ['human1', 'human2', 'human3', 'human4', 'human5', 'robot1', 'robot2', 'robot3', 'robot4'];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // 0에서 i 사이의 무작위 인덱스
        [array[i], array[j]] = [array[j], array[i]];  // 요소 교환
    }
    return array;
}

let shuffledElements = shuffleArray(elements);

for (var i = 0; i < 9; i++) {
    $(`.select${i + 1}`).css('background-image', `url('./captcha/${shuffledElements[i]}.png')`);
}

