import $ from 'jquery'
import { NextPerson } from './maingame';
import { PlayBgm } from './playsound';

$('.GameStartButton').on('click', function() {
    $('.gamestartbox').hide()
    $('.maingamebox').show()
    NextPerson()
    PlayBgm('bgm1')
});