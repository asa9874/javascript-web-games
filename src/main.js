import './assets/reset.css';
import './assets/style.css';
import './assets/animation.css';
import $ from 'jquery'
import { FlipCard, ReFlipCard } from './animation';


//0 안뒤집어짐 ,1뒤집어짐, -1 없어짐
const CardList=[]                           //카드인덱스는 0~29까지임
const CardFairList = generateRandomList()   //짝카드 리스트

var CountSeletedCard=0;
var SeletedCard1;
var SeletedCard2;




$(function(){
    var cardnumber=0
    for (var row=1;row<=5;row++){
        $('.cardbox').append(`<div class="cardrow cardrow${row}"></div>`)
        for (var col=1;col<=6;col++){
            CardList[cardnumber]=0
            $(`.cardrow${row}`).append(`<div class="card card${cardnumber}">
            <div class="card-side card-side-front">${CardFairList[cardnumber]}</div>
            <div class="card-side card-side-back"></div>
            </div>`);
            cardnumber++;
        }
    }
});


//카드 섞기
function generateRandomList() {
    const numbers = [];
    for (let i = 1; i <= 15; i++) {
        numbers.push(i, i); 
    }
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}

//카드 선택하기
function SelectCard(target){
    FlipCard(target);
    CardList[target.attr('class').match(/\d+/g)]=1
    CountSeletedCard++;
    if(!SeletedCard1){SeletedCard1=target}
    else{SeletedCard2=target}
    if(CountSeletedCard===2){CheckFairCard()}
    console.log(SeletedCard1,SeletedCard2)
}

//페어카드 확인
function CheckFairCard(){
    CountSeletedCard=0
    if(CardFairList[SeletedCard1.attr('class').match(/\d+/g)]===CardFairList[SeletedCard2.attr('class').match(/\d+/g)]){
        SeletedCard1.css('visibility','hidden')
        SeletedCard2.css('visibility','hidden')
        
    }
    else{
        ReFlipAll()
    }
    SeletedCard1=""
    SeletedCard2=""
}

//뒤집어진 카드 돌리기
function ReFlipAll(){
    ButtonDisable()
    ButtonAble()
    CardList.forEach((value, index) => {
        if (value === 1) {
            ReFlipCard(index);
            CardList[index]=0;
        }
    });
}

//버튼 활성화
function ButtonAble(){
    setTimeout(function() {
    $('.card').each(function(){
        $(this).css('pointer-events', 'auto');
    })
    }, 800);
}

//버튼 비활성화
function ButtonDisable(){
    $('.card').each(function(){
        $(this).css('pointer-events', 'none');
    })
}



//카드 클릭
$('.cardbox').on('click', '.card', function() {
    SelectCard($(this))
    $(this).css('pointer-events', 'none');
});







//setInterval(ComputerPlay,1000)

function ComputerPlay(){
    const zeroIndices = CardList.map((value, index) => value === 0 ? index : -1)
                                .filter(index => index !== -1);
    const randomIndex = Math.floor(Math.random() * zeroIndices.length);
    const selectedIndex = zeroIndices[randomIndex];
    console.log(selectedIndex)
    SelectCard($(`.card${selectedIndex}`))
}