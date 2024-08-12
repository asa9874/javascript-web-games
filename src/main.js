import './assets/reset.css'
import './assets/style.css'
import $ from 'jquery'

const $GameImgBox=$('.GameImgBox')
const $AnswerBox=$('.AnswerBox')
const $InnerAnswerBox=$('.InnerAnswerBox')
const $character=$('.character')
const $Answer=$('.Answer')
$GameImgBox.css('background-image', 'url("./img/bar.png")');
$AnswerBox.css('background-image','linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("./img/wood.png")');
$character.attr('src',"./img/character.png")
$Answer.css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("./img/button.png")');