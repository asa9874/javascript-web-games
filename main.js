import './reset.css'
import './style.css'
import './animation.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import $ from 'jquery'
import { ANIMATIONS } from './animation'

const $box1 = $('.box1');
const $box2 = $('.box2');

const $year1 =$('.year1');
const $year2 =$('.year2');



//랜덤 애니 선택함수
function randomAnime(){
    $('.box').each(function() {
        const index = Math.floor(Math.random() * ANIMATIONS.length);
        $(this).find('.anime-img').attr('src', ANIMATIONS[index].AnimationImg);
        $(this).find('.anime-year').text(ANIMATIONS[index]['AnimationYear'])
        $(this).find('.anime-name').text(ANIMATIONS[index]['Animationname'])
    });
}


//애니 나온 년도 보이게하는 함수
function AnimeYearVisible(){
    $year1.toggleClass('visible');
    $year2.toggleClass('visible');
    setTimeout(function() {
        $year2.toggleClass('visible'); 
        $year1.toggleClass('visible');
        randomAnime();
    }, 3000);
}


//애니메이션 지우는 작업
function RemoveAnimation(){
    $box1.removeClass('animatemove1');
    $box1.removeClass('animatehidden');
    $box2.removeClass('animatemove2');
    $box2.removeClass('animatehidden');
    
    void $box1[0].offsetWidth; 
    void $box2[0].offsetWidth; 
}





//버튼 누를때1
$('.box1').on('click', function() {
    RemoveAnimation()
    AnimeYearVisible()

    $box1.addClass('animatemove1');
    $box2.addClass('animatehidden');

})

//버튼 누를때2
$('.box2').on('click', function() {
    RemoveAnimation()
    AnimeYearVisible()
    
    $box2.addClass('animatemove2');
    $box1.addClass('animatehidden');
})





