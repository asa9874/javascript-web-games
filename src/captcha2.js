import $ from 'jquery';

$(".form-check-input2").on("change", function() {
    if ($(this).is(":checked")) {
        $(this).prop("disabled", true);
        $('.captchacontainer2').show()
    }
})


$('.captcha2img').css('background-image',"url('./Imrobot.png')")

$('#submitBtn').on('click', function() {
    // 입력된 텍스트 값을 가져옴
    var inputValue = $('.form-check-input3').val();
    if(inputValue==="나는robot이다"){
        $('.popup').hide()
        $('.captchacontainer').hide()
        $('.captchacontainer2').hide()
    }
});