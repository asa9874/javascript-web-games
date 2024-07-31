//대화
//id:아이디
//name:이름   "" -> 숨기기
//voice: 목소리 이름
//choice:선택지 열기여부 번호로 작성
//"success":{내용} 성공 
//"failure":{내용} 실패
//"effect":{"데이터":숫자} 데이터에 숫자더하기
//bgm : bgm 이름
//background : background "url('./img/ryoiki.png')" 형식
//character : {img:케릭터 이미지,position:위치} postion:'hidden' -> 숨기기
//typingSpeed : defalt 60
//animation : [애니메이션이름,길이]
//goscript: 숫자 스크립트 번호로  event=> 랜덤이벤트로
//"event":"hospital" 이벤트 시작부분을 나타냄
export const SCRIPT=[
    {   //0 프롤로그 시작
        "Scripttext":"2040년, 인류는 역사상 가장 참혹한 비극을 맞이했다.",
        "typingSpeed":100,
        'background':"url('./backgroundimg/opening1.png')",
        'animation':['fadeinbackground',10000],
    },
    {   //1
        "Scripttext":"제3차 세계 대전이 발발하며 핵무기와 생화학 무기가 동원된 전쟁은 전 지구를 순식간에 황폐화시켰다.",
        "typingSpeed":100,
    },
    {   //2
        "Scripttext":"도시들은 잿더미로 변했고, 방사능이 대기를 가득 채워 생명체가 살아가기 어려운 환경이 되었다.",
        "typingSpeed":100,
    },
    {   //3
        "Scripttext":"전쟁의 여파로 대부분의 정부와 사회 구조는 붕괴했고, 생존자들은 혼란과 공포 속에서 새로운 삶을 이어가야 했다.",
        "typingSpeed":100,
    },
    {   //4
        "Scripttext":"그러나 희망을 잃지 않은 사람들은 잿더미 속에서도 새로운 시작을 꿈꾸며, 잃어버린 인류의 가치를 되찾기 위해 발버둥치고 있었다.",
        "typingSpeed":100,
    },
    {   //5
        "Scripttext":"이 혼란과 절망 속에서 다시 일어설 수 있을 것인가? 그 답은 당신의 손에 달려 있다. 이곳에서 새로운 이야기가 시작된다.",
        "typingSpeed":100,
    },


    //event
    {   //6: 병원이벤트
        "name":"주인공",
        "Scripttext":"폐허가 된 도시를 탐험하던 중, 나는 버려진 병원을 발견했다.",
        'background':"url('./backgroundimg/hospital.png')",
        "event":"hospital"
    },
    {   //7
        "Scripttext":"병원 내부는 어두컴컴하고 음침했지만, 나는 혹시 모를 의약품을 찾아 들어갔다."
    },
    {   //8
        "name":"주인공",
        "Scripttext":"여기서 응급처치 키트를 찾을 수 있으면 좋을 텐데..."
    },
    {   //9
        "Scripttext":"나는 조심스럽게 병원의 각 방을 뒤지기 시작했다."
    },
    {   //10
        "Scripttext":"몇 분 후, 오래된 진료실에서 희미한 빛을 발하는 상자를 발견했다.",
        "choice":'hospital'
    },
    {   //11: hospital 선택지
        1:{//상자 열기
            "success":{
                "Scripttext":"상자를 열어보니, 다행히도 응급처치 키트가 들어 있었다! 체력이 증가합니다.", //2
                "effect":{"health":20}
            },
            "failure":{
                "Scripttext":"상자를 열었지만, 안에는 쓸모 없는 오래된 약들 뿐이었다. 실망스럽게도 체력에는 변화가 없다." //5
            }
        },
        2:{//상자 지나가기
            "success":{
                "Scripttext":"나는 상자를 그냥 두고 더 안전한 물품을 찾아 나섰다. 하지만 뒤돌아보니 후회가 밀려온다." //2
            }
        },
        3:{//상자를 분석하기
            "success":{
                "Scripttext":"상자를 분석해본 결과, 상자에 숨겨진 비밀이 있었다. 상자 밑에서 추가적인 의약품과 유용한 장비를 발견했다! 체력이 증가합니다.", //2
                "effect":{"health":20}
            },
            "failure":{
                "Scripttext":"상자를 분석하는 동안 시간이 지체되었고, 결국 상자에 있는 장비들이 손상되었다. 체력이 감소합니다.", //5
                "effect":{"health":-10}
            }
        }
    },
    {   //12
        "Scripttext":"나는 다음목적지를 향해 걷기 시작했다.",
        "goscript":"event"
    },



    //event
    {   //13: 기계의 도움이벤트
        "name":"주인공",
        "Scripttext":"폐허가 된 도시에서 탐험을 마치고, 나는 인공지능 의료 기계를 발견했다. 이 기계는 전쟁 이후에도 여전히 작동하고 있었다.", 
        'background':"url('./backgroundimg/robot_help.png')",
        "event":"robot_help"
    },
    {   //14
        "Scripttext":"기계는 나를 인식하고 자동으로 진단을 시작했다. 무언가 유용한 치료를 받을 수 있을 것 같은 느낌이 들었다." 
    },
    {   //15
        "Scripttext":"기계가 진단을 끝낸 후, 나에게 필요한 치료를 제공하기 시작했다."
    },
    {   //16
        "Scripttext":"몇 분 후, 치료가 완료되었고, 기계의 도움 덕분에 체력이 회복되었다." 
    },
    {   //17
        "Scripttext":"이 기계 덕분에 회복된 체력으로, 나는 다시 모험을 계속할 준비가 되었다.", 
        "effect":{"health":20} 
    },
    {   //18
        "Scripttext":"나는 다음목적지를 향해 걷기 시작했다.",
        "goscript":"event"
    },






    //event
    {   //19: 야생 동물의 공격 
        "name":"주인공",
        "Scripttext":"정글을 탐험하던 중, 갑자기 야생 동물의 공격을 받았다! 포악한 동물이 눈앞에 나타났고, 나는 즉각적으로 반응해야 했다.",
        "evnet":'wildlife_attack'
    },
    {   //20
        "Scripttext":"야생 동물은 매우 공격적이며, 빠르게 움직이며 나를 위협하고 있다. 상황이 매우 위험하다."
    },
    {   //21
        "Scripttext":"나는 어떻게 대처할지 결정해야 했다."
    },
    {   //22
        "Scripttext":"어떤 선택을 하겠는가?",
        "choice":'wildlife_attack'
    },
    {   //23: wildlife_attack 선택지
        1:{//동물 공격 피하기
            "success":{
                "Scripttext":"재빠르게 몸을 움츠려 동물의 공격을 피했다. 동물은 공격에 실패하며 자리를 떠났다. 체력이 증가합니다.",
                "effect":{"health":10}
            },
            "failure":{
                "Scripttext":"동물의 공격을 피하지 못하고 부상을 입었다. 체력이 감소합니다.",
                "effect":{"health":-15}
            }
        },
        2:{//동물과 싸우기
            "success":{
                "Scripttext":"동물과의 싸움에서 승리했다! 체력이 증가합니다.",
                "effect":{"health":15}
            },
            "failure":{
                "Scripttext":"동물과의 싸움에서 패배했다. 심각한 부상을 입어 체력이 감소한다.",
                "effect":{"health":-25}
            }
        },
        3:{//도망가기
            "success":{
                "Scripttext":"동물의 공격을 피해 가까운 안전한 장소로 도망쳤다. 큰 부상을 피할 수 있었다. 체력이 소폭 증가합니다.",
                "effect":{"health":5}
            },
            "failure":{
                "Scripttext":"도망치는 도중 동물에게 몇 번 물려 체력을 다소 잃었다.",
                "effect":{"health":-10}
            }
        }
    },
    {   //24
        "Scripttext":"나는 다음목적지를 향해 걷기 시작했다.",
        "goscript":"event"
    },





]





