//대화
//id:아이디
//name:이름   "" -> 숨기기
//voice: 목소리 이름
//choice:선택지 열기여부 true false임
//bgm : bgm 이름
//background : background "url('./img/ryoiki.png')" 형식
//character : {img:케릭터 이미지,position:위치} postion:'hidden' -> 숨기기
//typingSpeed : defalt 60
//animation : [애니메이션이름,길이]
//goscript: 숫자 스크립트 번호로 
export const SCRIPT=[
    {   //0
        "Scripttext":"2040년, 인류는 역사상 가장 참혹한 비극을 맞이했다.",
        "typingSpeed":100,
        'background':"url('./backgroundimg/clothshop.png')",
        'animation':['showbackground',10000],
    },
    {   
        "Scripttext":"제3차 세계 대전이 발발하며 핵무기와 생화학 무기가 동원된 전쟁은 전 지구를 순식간에 황폐화시켰다.",
        "typingSpeed":100,
    },
    {
        "Scripttext":"도시들은 잿더미로 변했고, 방사능이 대기를 가득 채워 생명체가 살아가기 어려운 환경이 되었다.",
        "typingSpeed":100,
    },
    {
        "Scripttext":"전쟁의 여파로 대부분의 정부와 사회 구조는 붕괴했고, 생존자들은 혼란과 공포 속에서 새로운 삶을 이어가야 했다.",
        "typingSpeed":100,
    },
    {
        "Scripttext":"그러나 희망을 잃지 않은 사람들은 잿더미 속에서도 새로운 시작을 꿈꾸며, 잃어버린 인류의 가치를 되찾기 위해 발버둥치고 있었다.",
        "typingSpeed":100,
    },
    {   //5
        "Scripttext":"이 혼란과 절망 속에서 다시 일어설 수 있을 것인가? 그 답은 당신의 손에 달려 있다. 이곳에서 새로운 이야기가 시작된다.",
        "typingSpeed":100,
    },


    {
        "name":"애옹이",
        "Scripttext":"첫번째 테스트 문장인거시다",
        "voice":'000',
        "bgm":"peaceful",
        'character1':{"img":'./character/emotionless.png',"position":30},
        'character2':{"img":'./character/emotionless.png',"position":60},
        
    },
    {
        "Scripttext":"선택지중 하나를 골라보는거다",
        "voice":'001',
        "choice":1,
        'character1':{"position":10},
        'background':"url('./backgroundimg/street.png')",
    },
    
    {
        1:{
            "name":"애옹이",
            "Scripttext":"화살을 날리는걸 고른거다",
            "voice":'002-1',
        },
        2:{
            "name":"애옹이",
            "Scripttext":"달을 보며 기도한것이다.",
            "voice":'002-2',
        },
        3:{
            "name":"애옹이",
            "Scripttext":"받아들인것이다.",
            "voice":'002-3',
            'goscript':5
        },
    },
    {
        "Scripttext":"상황전환 테스트인것이다.",
        'character1':{'position':'hidden'},
        "bgm":"surprise",
        "voice":'003',
        'background':"url('./backgroundimg/classroom.png')"
    },
]





