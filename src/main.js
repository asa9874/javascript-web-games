import './assets/reset.css'
import './assets/style.css'
import './assets/animation.css'
import $ from 'jquery'
import { playListSound, playSound } from './playsound'
import { KeyBoxScale, StartAnimation } from './animation'

let ArrowList=[]
let NowArrow=0
let KeyAllow=false

$(document).on('keydown', function(event) {
    if(KeyAllow){
        var direction
        switch(event.key) {
            case 'ArrowUp':
                direction='up'
                break;
            case 'ArrowDown':
                direction='down'
                break;
            case 'ArrowLeft':
                direction='left'
                break;
            case 'ArrowRight':
                direction='right'
                break;
        }
        playSound('effect/'+direction)
        KeyBoxScale(direction)
        CheckCorrect(direction)

        NowArrow++
        console.log(NowArrow,ArrowList.length)
        if(NowArrow===ArrowList.length){
            NowArrow=0
            KeyDisable()
            setTimeout(function() {
                ComputerStart()
            }, 1000);
        }
    }
});

//정답인지아닌지 체크
function CheckCorrect(direction){
    const arrow={"up":1,"down":2,"left":3,"right":4}
    if(arrow[direction]!=ArrowList[NowArrow]){
        console.log("no")
    }

}



function MakeRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    return randomNumber
}


$('.bu').on('click', function() {
    ComputerStart()
});

function ComputerStart(){
    ArrowList.push(MakeRandomNumber())
    playListSound(ArrowList,500,ArrowList.length)
    setTimeout(function() {
        KeyDisable()
    }, ArrowList.length*500);
}


//버튼 비활성화
export function KeyDisable(){
    KeyAllow = !KeyAllow;
}

