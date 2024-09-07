import $ from 'jquery';


  
const $popup= $('.popup')

$('.nobtn').on('click', function() {
    $('.yesbtn').hide()
    $('.nobtn').hide()
    $('.captcha').show()
})

$(".nobtn").on("mouseenter", function() {
    // 마우스가 요소 위에 있을 때
    $(this).text("네");
});

$(".nobtn").on("mouseleave", function() {
    // 마우스가 요소를 벗어났을 때
    $(this).text("아니요");
});

$(".yesbtn").on("mouseenter", function() {
    // 마우스가 요소 위에 있을 때
    $(this).text("아니요");
});

$(".yesbtn").on("mouseleave", function() {
    // 마우스가 요소를 벗어났을 때
    $(this).text("네");
});

$(".form-check-input").on("change", function() {
if ($(this).is(":checked")) {
    $(this).prop("disabled", true);
    $('.captchacontainer').show()
    // 체크되었을 때
    
    $('.warningtext').hide()
    setTimeout(() => {
        $(this).prop("checked", false); // 10초 후 체크 해제
        $(this).prop("disabled", false);
        $('.warningtext').show()
        $('.captchacontainer').hide()
    }, 10000); //
    }
})