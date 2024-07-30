import $ from 'jquery'

//캐릭터 모습,위치 바꾸기
export function ChangeCharactor(character,image,position){
    if(position){
        if(position==='hidden'){
            character.hide()
        }
        else{
            character.show()
            character.css('left',position+'%')
        }
    }
    if(image){
        character.attr('src',image)
    }
}

