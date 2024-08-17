import $ from 'jquery'
import { NextPerson, StartLoading} from './maingame';
import { PlayBgm } from './playsound';
import { SwitchScreen } from './switchscreen';

$('.GameStartButton').on('click', function() {
    SwitchScreen()
    setTimeout(function() {
        $('.gamestartbox').hide()
        $('.maingamebox').show()
        PlayBgm('bgm1')
    },2000);
});