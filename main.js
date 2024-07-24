import './reset.css'
import './style.css'
import './animation.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import $ from 'jquery'


//버튼 누를때
$('.box1').on('click', function() {
    $('.year1').toggleClass('visible');
    $('.year2').toggleClass('visible');
    setTimeout(function() {
        $('.year2').toggleClass('visible'); 
        $('.year1').toggleClass('visible');
    }, 3000);

    //에니매이션
    $(this).removeClass('animatemove1');
    $(this).removeClass('animatehidden');
    $('.box2').removeClass('animatehidden');
    void this.offsetWidth; 
    void $('.box2').offsetWidth; 
    $(this).addClass('animatemove1');
    $('.box2').addClass('animatehidden');

    
})

//버튼 누를때
$('.box2').on('click', function() {
    $('.year1').toggleClass('visible');
    $('.year2').toggleClass('visible');
    setTimeout(function() {
        $('.year2').toggleClass('visible'); 
        $('.year1').toggleClass('visible'); 
    }, 3000);

    
    //에니매이션
    $(this).removeClass('animatemove2');
    $(this).removeClass('animatehidden');
    $('.box1').removeClass('animatehidden');
    void this.offsetWidth; 
    void $('.box1').offsetWidth; 

    $(this).addClass('animatemove2');
    $('.box1').addClass('animatehidden');
})
