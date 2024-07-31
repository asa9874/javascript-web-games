import $ from 'jquery'

//애니메이션 시작
export function StartAnimation(target,animationname,animationduration){
    target.addClass(animationname)
    target.css('animation-duration', `${animationduration}ms`);
    setTimeout(function() {
        target.removeClass(animationname);
        void target[0].offsetWidth; 
    }, animationduration);
}


export function Animation(animation){
    var name=animation[0]
    var len=animation[1]
    if(name==='fadeinbackground'){
        StartAnimation($('.gamebackgroundimg'),'exampleAnimation',len)
    }
    else if(name==='fadeoutbackground'){
        StartAnimation($('.gamebackgroundimg'),'exampleAnimation',len)
    }
}