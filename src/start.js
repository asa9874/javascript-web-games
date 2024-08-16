import $ from 'jquery'
import { NextPerson, StartLoading} from './maingame';
import { PlayBgm } from './playsound';
import { SwitchScreen } from './switchscreen';

$('.GameStartButton').on('click', function() {
    SwitchScreen()
    setTimeout(function() {
        $('.gamestartbox').hide()
        $('.maingamebox').show()
        NextPerson()
        PlayBgm('bgm1')
        StartLoading()
    },2000);
});