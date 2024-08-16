import './assets/style.css'
import $ from 'jquery'

//시작화면
//$('.gamestartbox').hide()
$('.startimg').css('background-image',"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),url('./img/startimg.png')")
$('.starttitle').attr('src',"./img/title.png")


//메인게임
$('.maingamebox').hide()
$('.studentcardimg').css('background-image',"url('./img/character/witch/witch (4).png')")
$('.characterbox').css('background-image',"linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)),url('./img/wall3.png')")
$('.character').attr('src',"./img/character/witch/witch (4).png")
$('.yesimg').attr('src',"./img/yes.png")
$('.noimg').attr('src',"./img/no.png")
$('.angrychairman').attr('src',"./img/angry.png")
$('.stamp').attr('src',"./img/nostamp.png")


//스크립트
$('.scriptbox').hide()