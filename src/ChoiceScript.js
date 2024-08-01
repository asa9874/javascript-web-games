//선택지
//text: 선택지 글씨, 
//successRate:성공확률
//shop : true 돈없으면 실패하는 이벤트
export const ChoiceList = {
    'hospital': {
        1: { "text": "상자를 연다", "successRate": 0.7 },           // 상자를 열 때 성공 확률 70%
        2: { "text": "무시하고 지나가기", "successRate": 1 },       // 상자를 무시할 때 성공 확률 100%
        3: { "text": "상자를 분석한다.", "successRate": 0.5 }       // 상자를 분석할 때 성공 확률 50%
    },
    "wildlife_attack": {
        1: { "text": "동물의 공격을 피한다.", "successRate": 0.6 },   // 공격을 피할 때 성공 확률 60%
        2: { "text": "동물과 싸운다.", "successRate": 0.4 },         // 동물과 싸울 때 성공 확률 40%
        3: { "text": "도망친다.", "successRate": 0.5 }              // 도망칠 때 성공 확률 50%
    },
    "bandit_attack": {
        1: { "text": "저항한다", "successRate": 0.5 }, // 저항하기 성공 확률 50%
        2: { "text": "도망친다", "successRate": 0.6 }, // 도망가기 성공 확률 60%
        3: { "text": "협상한다", "successRate": 0.4 }  // 협상하기 성공 확률 40%
    },
    "machine_fight": {
        1: { "text": "기계의 공격을 피한다", "successRate": 0.5 },
        2: { "text": "기계와 싸운다", "successRate": 0.4 },
        3: { "text": "기계를 제어하려 한다", "successRate": 0.3 }
    },
    "shelter_found": {
        1: { "text": "쉼터에서 휴식한다", "successRate": 1 },
        2: { "text": "쉼터 주변을 탐색한다", "successRate": 0.8 },
        3: { "text": "쉼터를 무시하고 계속 이동한다", "successRate": 0.2 }
    },
    "merchant_purchase": {
        1: { "text": "응급처치 키트를 구매한다", "successRate": 1, 'shop': true },
        2: { "text": "식량을 구매한다", "successRate": 1, 'shop': true },
        3: { "text": "아무것도 사지 않는다", "successRate": 1 }
    },
    "bandit_loot": {
        1: { "text": "저항하기", "successRate": 0.5 },
        2: { "text": "도망가기", "successRate": 0.6 },
        3: { "text": "협상하기", "successRate": 0.8 }
    },
    "medical_expense": {
        1: { "text": "치료 받기", "successRate": 1, 'shop': true },
        2: { "text": "치료 포기", "successRate": 1 },
        3: { "text": "대안 찾기", "successRate": 0.5 }
    },
    "clean_water": {
        1: { "text": "물 마시기", "successRate": 0.8 },
        2: { "text": "물 지나치기", "successRate": 0.7 },
        3: { "text": "물 분석하기", "successRate": 0.9 }
    },
    "artifact_found": {
        1: { "text": "유물 판매", "successRate": 0.7 },
        2: { "text": "유물로 체력 회복", "successRate": 0.8 },
        3: { "text": "유물 분석", "successRate": 0.4 }
    },
    "safe_found": {
        1: { "text": "금고를 연다", "successRate": 0.7 },
        2: { "text": "금고 주변을 탐색한다", "successRate": 0.6 },
        3: { "text": "그냥 무시한다.", "successRate": 1 }
    },
    "girl_encounter": {
        1: { "text": "돈을 기부한다", "successRate": 1},
        2: { "text": "돈을 뺏는다", "successRate": 0.5 },
        3: { "text": "무시하고 지나친다", "successRate": 1 }
    },
    "food_discovery": {
        1: { "text": "식량을 먹는다", "successRate": 0.8 }, 
        2: { "text": "무시한다.", "successRate": 1 }, 
        3: { "text": "식량을 교환한다", "successRate": 0.7 } 
    }
}
