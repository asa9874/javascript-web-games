import './reset.css'
import './style.css'
import './animation.css'
import $ from 'jquery'
import { ANIMATIONS } from './animation'

const $box1 = $('.box1');
const $box2 = $('.box2');

const $year1 =$('.year1');
const $year2 =$('.year2');

let year1Date=new Date($year1.text()).getTime()
let year2Date=new Date($year2.text()).getTime()

const $LifeCount = $('.LifeCount')


$('.life').addClass('animatebounce');

//랜덤 애니 선택함수
function randomAnime(){
    $('.box').each(function() {
        const index = Math.floor(Math.random() * ANIMATIONS.length);
        $(this).find('.anime-img').attr('src', ANIMATIONS[index].AnimationImg);
        $(this).find('.anime-year').text(ANIMATIONS[index]['AnimationYear'])
        $(this).find('.anime-name').text(ANIMATIONS[index]['Animationname'])
    });
    year1Date=new Date($year1.text()).getTime()
    year2Date=new Date($year2.text()).getTime()
}


//애니 나온 년도 보이게하는 함수
function AnimeYearVisible(){
    $year1.toggleClass('visible');
    $year2.toggleClass('visible');
    setTimeout(function() {
        $year2.toggleClass('visible'); 
        $year1.toggleClass('visible');
        randomAnime();
        
    }, 3500);
}

//버튼 비활성화만들기
function Clickable(){
    $('.box1, .box2').css('pointer-events', 'none');
    setTimeout(function() {
        $('.box1, .box2').css('pointer-events', 'auto');
    }, 5000);
}



//애니메이션 지우는 작업
function RemoveAnimation(){
    setTimeout(function() {
        $box1.removeClass('animatemove1');
        $box1.removeClass('animatehidden');
        $box2.removeClass('animatemove2');
        $box2.removeClass('animatehidden');
        
        void $box1[0].offsetWidth; 
        void $box2[0].offsetWidth; 
    }, 5000);
    
}


//상자움직이기
function MoveBox(){
    if(year1Date<=year2Date){
        $box1.addClass('animatemove1');
        $box2.addClass('animatehidden');
    }
    else{
        $box2.addClass('animatemove2');
        $box1.addClass('animatehidden');
    }
}


//정답확인
function CheckCorrect(box){
    const $box = $(box);
    const lifeCountValue =parseInt($LifeCount.text(), 10)

    if($box.is($box1) && year1Date>year2Date){
        $LifeCount.text(lifeCountValue-1);
    }
    if($box.is($box2) && year2Date>year1Date){
        $LifeCount.text(lifeCountValue-1);
    }
    if (parseInt($LifeCount.text(), 10) === 0) {
        window.location.href = 'https://www.youtube.com/watch?v=khnNHHGR8jw';
    }
}


//버튼 누를때1
$('.box1').on('click', function() {
    Clickable();
    RemoveAnimation()
    AnimeYearVisible()
    MoveBox()
    CheckCorrect(this)
})

//버튼 누를때2
$('.box2').on('click', function() {
    Clickable();
    RemoveAnimation()
    AnimeYearVisible()
    MoveBox()   
    CheckCorrect(this)
})



//시작할때
$(function() {
    randomAnime()
    $box1.addClass('animatestartgamebox');
    $box2.addClass('animatestartgamebox');
    setTimeout(function() {
        $box1.removeClass('animatestartgamebox');
        $box2.removeClass('animatestartgamebox');
        void $box1[0].offsetWidth; 
        void $box2[0].offsetWidth; 
    }, 2000);
});
