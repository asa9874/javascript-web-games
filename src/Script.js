//대화
//id:아이디
//name:이름   "" -> 숨기기
//voice: 목소리 이름
//choice:선택지 열기여부 번호로 작성
//bgm : bgm 이름
//background : background "url('./img/ryoiki.png')" 형식
//character : {img:케릭터 이미지,position:위치} postion:'hidden' -> 숨기기
//typingSpeed : defalt 60
//animation : [애니메이션이름,길이]
//goscript: 숫자 스크립트 번호로  event=> 랜덤이벤트로
export const SCRIPT=[
    {   //0
        "Scripttext":"2040년, 인류는 역사상 가장 참혹한 비극을 맞이했다.",
        "typingSpeed":100,
        'background':"url('./backgroundimg/opening1.png')",
        'animation':['fadeinbackground',10000],
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
        "name":"주인공",
        "Scripttext":"폐허가 된 도시를 탐험하던 중, 나는 버려진 병원을 발견했다.",
        "character1":{"img":'./character/emotionless.png',"position":50}
    },
    {
        "Scripttext":"병원 내부는 어두컴컴하고 음침했지만, 나는 혹시 모를 의약품을 찾아 들어갔다."
    },
    {
        "name":"주인공",
        "Scripttext":"여기서 응급처치 키트를 찾을 수 있으면 좋을 텐데..."
    },
    {
        "Scripttext":"나는 조심스럽게 병원의 각 방을 뒤지기 시작했다."
    },
    {
        "Scripttext":"몇 분 후, 오래된 진료실에서 희미한 빛을 발하는 상자를 발견했다.",
        "choice":'hospital'
    },
    {
        1:{
            "success":{
                "Scripttext":"상자를 열어보니, 다행히도 응급처치 키트가 들어 있었다! 체력이 증가합니다.",

            },
            "failure":{
                "Scripttext":"상자를 열었지만, 안에는 쓸모 없는 오래된 약들 뿐이었다. 실망스럽게도 체력에는 변화가 없다."
            }
        },
        2:{
            "success":{
                "Scripttext":"나는 상자를 그냥 두고 더 안전한 물품을 찾아 나섰다. 하지만 뒤돌아보니 후회가 밀려온다."
            },
        },
        3:{
            "success":{
                "Scripttext":"조심스럽게 상자를 열어 함정을 해제했다. 안에는 응급처치 키트가 들어 있었다! 체력이 증가합니다.",

            },
            "failure":{
                "Scripttext":"함정을 해제하려다가 오히려 작동시켜버렸다. 체력이 감소합니다.",

            }
        }
    }
]





