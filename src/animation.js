import $ from 'jquery'


//애니메이션 시작
export function StartAnimation(target,animationname,animationduration){
    target.addClass(animationname)
    target.css('animation-duration', `${animationduration}ms`);

}

export function FlipCard(target){
    StartAnimation(target,'cardflip',100)
}


export function ReFlipCard(index){
    var target=$(`.card${index}`)
    target.removeClass('cardflip')
    StartAnimation(target,'cardBackflip',800)
    setTimeout(function() {
        target.removeClass('cardBackflip');
        void target[0].offsetWidth; 
    }, 800);
}
