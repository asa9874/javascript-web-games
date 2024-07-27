import './reset.css'
import './style.css'
import $ from 'jquery'

const $gamebox=$('.gamebox')
const $backgroundimg=$('.backgroundimg')
const $conversation=$('.conversation')
const $character=$('.character')

$backgroundimg.css('background-image', 'url("https://img.freepik.com/free-photo/anime-night-sky-illustration_23-2151684354.jpg?t=st=1722092342~exp=1722095942~hmac=2a289c842d707f4eeb2c2d34c4e0163a4ad67367cf8fa925f0969f81dba59b06&w=1380")');
$gamebox.css('background-image', 'url("https://img.freepik.com/free-photo/cityscape-anime-inspired-urban-area_23-2151028639.jpg?t=st=1722092803~exp=1722096403~hmac=4fa1ebd54d37aeea219565d395c07cc8444e495e005e1d911a65ea171b9f0bf0&w=996")');
$conversation.text(`무기가 아니라, 고유결계라 불리는 특수 마술.
고유결계란 일정 시간, 현실을 술자가 지닌 심상세계로 바꾸는 것.
에미야의 경우, 지금까지 눈으로 본 무기, 그곳에 사용된 무기를 순식간에 복제해서 저장한다.`)


$character.attr('src','https://media1.tenor.com/m/5BYK-WS0__gAAAAd/cool-fun.gif')