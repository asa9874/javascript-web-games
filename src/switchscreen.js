import $ from 'jquery'

export function ShowSwitchScreen(){
    $('.switchscreenbox').show()
    $('.switchscreen').removeClass('hide').addClass('show');
}

export function HideSwitchScreen(){
    $('.switchscreen').removeClass('show').addClass('hide');
    setTimeout(function() {
        $('.switchscreenbox').hide()
    }, 1000);
}

export function SwitchScreen(){
    ShowSwitchScreen()
    setTimeout(function() {
        HideSwitchScreen()
    }, 2000);
}