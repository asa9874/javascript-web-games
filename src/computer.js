import $ from 'jquery'

//짝꿍을 찾았다
export function FairComputer(ComputerCountBrain){
    const firstElementWithLengthTwo = Object.entries(ComputerCountBrain)
    .filter(([key, value]) => value.length === 2)
    .map(([key, value]) => value)[0]
    console.log("짝꿍을 찾았다");
    return firstElementWithLengthTwo ? firstElementWithLengthTwo : false
}

//무작위 카드로 선택되었다.
export function randomComputer(CardList){
    var twocards=[];
    for (var i=0;i<2;i++){
        const zeroIndices = CardList.map((value, index) => value === 0 ? index : -1)
        .filter(index => index !== -1);
        const randomIndex = Math.floor(Math.random() * zeroIndices.length);
        const selectedIndex = zeroIndices[randomIndex];
        twocards.push(selectedIndex)
    }
    console.log("무작위카드로선택됨");
    return twocards
}


export function SmartComputer(intelligence){
    const randomValue = Math.random()
    if(randomValue <= intelligence){
        console.log("똑똑함")
        return true
    }
    else{
        console.log("멍청함")
        return false
    }

}