import $ from 'jquery';
import './styles/style.css';



const $advertise = $('.advertise')

$('.captchaimg').css('background-image',"url('./captcha.png')")
//$('.btn').hide()
$('.captcha').hide()
$('.warningtext').hide()
$('.captchacontainer').hide()
$('.captchawrongtext').hide()
$('.captchacontainer2').hide()

$('.popup').hide()



$advertise.on('click', function() {
  window.open(`https://www.youtube.com/watch?v=1AHzBNLA6mY`);
})

setTimeout(function() {
  $('.popupbox').addClass('show');
}, 0);



