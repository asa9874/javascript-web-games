import $ from 'jquery'
import { playEffectSound } from './playsound';
import { NextPerson } from './maingame';
import { ShowSwitchScreen } from './switchscreen';

//모든 버튼 애니메이션
$('.btn').on('click', function() {
    var $button = $(this);
    $button.addClass('click');
    setTimeout(function() {
      $button.removeClass('click');
    }, 200);
});



$('.choosebutton').on('click', function() {
  playEffectSound('stamp',0.3)
  $('.stamp').show()
  $('.choosebutton').css("pointer-events", "none");
  setTimeout(function() {
    $('.studentcard').removeClass('show').addClass('hide');
  },500)
  setTimeout(function() {NextPerson()},1500)
});

//예스버튼
$('.yesbutton').on('click', function() {
  $('.stamp').attr('src',"./img/yesstamp.png")
  setTimeout(function() {
    $('.character').removeClass('come').addClass('pass');
  },500)
});


//노버튼
$('.nobutton').on('click', function() {
  setTimeout(function() {
    $('.character').removeClass('come').addClass('unpass');
  },500)
  $('.stamp').attr('src',"./img/nostamp.png")
});



$('.choosebutton').css("pointer-events", "none");

$('.selectbutton5').on('click', function() {
  NextPerson()
});

$('.selectbutton4').on('click', function() {
  ShowSwitchScreen()
});

$('.selectbutton1').on('click', function() {
  $('.notificationbox').show()
});

$('.notificationX').on('click', function() {
  $('.notificationbox').hide()
});