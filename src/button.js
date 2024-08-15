import $ from 'jquery'

//모든 버튼 애니메이션
$('.choosebutton').on('click', function() {
    var $button = $(this);
    $button.addClass('click');
    setTimeout(function() {
      $button.removeClass('click');
    }, 200);
});


$('.yesbutton').on('click', function() {
  $('.studentcard').removeClass('show').addClass('hide');
  $('.character').removeClass('come').addClass('pass');
  setTimeout(function() {NextPerson()},1000)
});

$('.nobutton').on('click', function() {
  $('.studentcard').removeClass('show').addClass('hide');
  $('.character').removeClass('come').addClass('unpass');
  setTimeout(function() {NextPerson()},1000)
});


$('.selectbutton5').on('click', function() {
  NextPerson()
});


function NextPerson(){
    $('.studentcard').removeClass('hide').addClass('show');
    $('.character').hide()
    $('.character').removeClass('come').addClass('unpass');
    setTimeout(function() {
      $('.character').show()
      $('.character').removeClass('unpass').removeClass('pass').addClass('come');
      $('.studentcard').removeClass('hide').addClass('show');
    }, 100);
  }