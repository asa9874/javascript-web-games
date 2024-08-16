import $ from 'jquery'
import { NextPerson } from './maingame';

$('.GameStartButton').on('click', function() {
    $('.gamestartbox').hide()
    $('.maingamebox').show()
    NextPerson()
});