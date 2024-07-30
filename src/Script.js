//대화
//id:아이디
//name:이름
//voice: 목소리 이름
//choice:선택지 열기여부 true false임
//bgm : bgm 이름
//background : background "url('./img/ryoiki.png')" 형식
//character : 케릭터 이미지
//characterposition : 캐릭터 위치 왼쪽%기준, hidden이면숨김
export const SCRIPT=[
    {
        "id":0,
        "name":"애옹이",
        "Scripttext":"첫번째 테스트 문장인거시다",
        "voice":'000',
        "bgm":"peaceful",
        'character':'./character/emotionless.png',
        'characterposition':30
    },
    {
        "id":1,
        "name":"애옹이",
        "Scripttext":"선택지중 하나를 골라보는거다",
        "voice":'001',
        "choice":true,
        'characterposition':50,
        'background':"url('./backgroundimg/street.png')",
    },
    
    {
        "id":2,
        1:{
            "name":"애옹이",
            "Scripttext":"화살을 날리는걸 고른거다",
            "voice":'002-1',
            'characterposition':'hidden',
            'character':'./character/smile.png',
        },
        2:{
            "name":"애옹이",
            "Scripttext":"달을 보며 기도한것이다.",
            "voice":'002-2',
            'character':'./character/angry.png'
        },
        3:{
            "name":"애옹이",
            "Scripttext":"받아들인것이다.",
            "voice":'002-3',
            'character':'./character/angry.png'
        },
    },
    {
        "id":3,
        "name":"애옹이",
        "Scripttext":"상황전환 테스트인것이다.",
        "voice":'002',
        "bgm":"surprise",
        'character':'./character/smile.png',
        'characterposition':50,
        "voice":'003',
        'background':"url('./backgroundimg/classroom.png')"
    },
]





