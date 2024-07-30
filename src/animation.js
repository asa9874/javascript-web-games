//애니메이션 시작
export function StartAnimation(target,animationname,animationduration){
    
    target.addClass(animationname)
    target.css('animation-duration', `${animationduration}ms`);
    setTimeout(function() {
        target.removeClass(animationname);
        void target[0].offsetWidth; 
    }, animationduration);
}

