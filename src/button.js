import $ from 'jquery'

//모든 버튼 애니메이션
$('.choosebutton').on('click', function() {
    var $button = $(this);
    $button.addClass('click');
    setTimeout(function() {
      $button.removeClass('click');
    }, 200);
});

//예스버튼
$('.yesbutton').on('click', function() {
  $('.studentcard').removeClass('show').addClass('hide');
  $('.character').removeClass('come').addClass('pass');
  $('.choosebutton').css("pointer-events", "none");
  setTimeout(function() {NextPerson()},1000)
});


//노버튼
$('.nobutton').on('click', function() {
  $('.studentcard').removeClass('show').addClass('hide');
  $('.character').removeClass('come').addClass('unpass');
  $('.choosebutton').css("pointer-events", "none");
  setTimeout(function() {NextPerson()},1000)
});


//디버그버튼
$('.selectbutton5').on('click', function() {
  NextPerson()
});


function NextPerson(){
    $('.studentcard').removeClass('hide').addClass('show');
    $('.character').hide()
    $('.character').removeClass('come').addClass('unpass');
    ChangePerson()
    
    
    setTimeout(function() {
      $('.choosebutton').css("pointer-events", "auto");
    }, 800);

    setTimeout(function() {
      $('.character').show()
      $('.character').removeClass('unpass').removeClass('pass').addClass('come');
      $('.studentcard').removeClass('hide').addClass('show');
      
    }, 100);

    $('.angryNotification').removeClass('hide').addClass('show');
    setTimeout(function() {
      $('.angryNotification').removeClass('show').addClass('hide');
    },2000);

}


//사람바꾸기
function ChangePerson(){
  const school = ["maid", "soilder", "witch"];
  const backcolor={"maid":"rgb(209, 208, 208)", "soilder":"rgb(110, 219, 125)", "witch":"rgb(238, 149, 238)"}
  const randomSchool  = school[Math.floor(Math.random() * school.length)];
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  var studentimg=`./img/character/${randomSchool}/${randomSchool} (${randomNumber}).png`
  
  $('.studentcardimg').css('background-image',`url('${studentimg}')`)
  $('.studentcardimg').css('background-color',`${backcolor[randomSchool]}`)
  $('.character').attr('src',studentimg)
}
