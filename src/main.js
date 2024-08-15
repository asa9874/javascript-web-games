import './assets/reset.css'
import './assets/style.css'
import $ from 'jquery'


$('.studentcardimg').css('background-image',"url('./img/1.png')")
$('.characterbox').css('background-image',"url('./img/door.png')")


$('.choosebutton').on('click', function() {
    var $button = $(this);

    $button.addClass('click');

    // 클릭 클래스를 0.2초 후 제거
    setTimeout(function() {
      $button.removeClass('click');
    }, 200);
});


$('.yesbutton').on('click', function() {
  var $studentCard = $('.studentcard');
  $studentCard.removeClass('hide').addClass('show');
});

$('.nobutton').on('click', function() {
  var $studentCard = $('.studentcard');
    $studentCard.removeClass('show').addClass('hide');
});