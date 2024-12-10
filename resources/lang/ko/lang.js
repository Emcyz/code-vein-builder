// # 한국어 TRANSLATION  By 清羽？ or  Qingyu510
// Language file for the entire application which can be used for translations.
window._lang = {
  // general placeholders
  na : 'N/A', // English abbreviation for "Not Available"; Japanese typically use "なし" (so use your equiv.)
  none : '(조건 없음)',
  
  
  // titles/labels
  weapon : "무기",
  blood_veil : "흡혈아장",
  transform : "성질 변경한다",
  blood_code : "BloodCode",
  gift_type : "연혈 타입",
  passive : "패시브",
  active : "액티브",
  options : "OPTIONS",
  code_owner : "Code owner",
  origin : "획득 경로:",
  companion_rank : "협력자의 공적",
  rv_mastery : "Rv 마스터리",
  exclusive : "독점적인",
  dlc : "DLC",
  
  
  // modal
  modal_ok : "결정",
  modal_close : "닫는다",
  modal_title_default : "Popup", // Please translate this
  
  
  // preset selector
  preset_default : 'Select a Preset Build', // Please translate this
  preset_windows : 'Load Preset?' // Please translate this
  preset_empty : 'Empty Build', // Please translate this
  preset_random : 'Random Build', // Please translate this
  preset_warn : 'Do you want to load the "%{PRESET_NAME}" build? Your current build will be overwritten.', // Please translate this
  preset_stop_warning : 'Stop showing this warning', // Please translate this
  preset_submit : 'Submit a Build', // Please translate this
  preset_submit_confirm : 'Do you want to submit a build? You will leave the current page. Please make sure to save your build before proceeding.', // Please translate this
  preset_author : 'Author', // Please translate this
  preset_origin : 'Source', // Please translate this
  preset_desc : 'Description', // Please translate this
  
  // preset groups
  preset_group : {
    initial : "위약",
    '1h' : "한손검",
    '2h' : "양손검",
    halberd : "도끼창",
    hammer : "대형 해머",
    bayonet : "총검",
    light_gifts : "[양]연혈",
    dark_gifts : "[음]연혈",
    debuff : "디버프",
    misc : "미스켈렌"
  },
  
  
  // language selector
  lang_select : 'Language', // Please translate this
  submit_translation : 'Submit a Translation', // Please translate this
  submit_translation_confirm : 'Do you want to submit a translation? You will leave the current page. Please make sure to save your build before proceeding.', // Please translate this
  
  
  // save build
  save_build : 'Save Build', // Please translate this
  save_build_desc : 'Copy the URL or Code for your build to save it or share it with others online.', // Please translate this
  copy_url : 'Copy URL', // Please translate this
  copy_code : 'Copy Code', // Please translate this
  copy_success : 'Copied!', // Please translate this
  
  // load build
  load_build : 'Load Build', // Please translate this
  load_build_label : 'Build URL/Code', // Please translate this
  load_build_desc : 'Paste your Build URL or Code into the textarea below and click the "Load Build" button to load the build. Please note that this will overwrite your current build.', // Please translate this
  load_build_error : 'Please insert a build URL or Code to load a build.', // Please translate this

  
  // stats
  status : "스테이터스",
  lv : "레벨",
  hp : "HP",
  sta : "ST",
  ichor : "명혈 스톡",
  str : "완력",
  dex : "재주",
  mnd : "정신",
  wil : "의지",
  vit : "활력",
  for : "인내",
  
  
  // weight
  weight : "중량",
  total_weight : "총 중량",
  weight_limit : "허용 중량",
  
  
  // attack stats
  attack : "공격력",
  drain_attack : "흡혈 공격력",
  physical : "물리", // weapon damage
  base : "기본", // base damage
  scaling : "보정", // damage from scaling
  drain_rating : "흡혈 성능",
  
  
  // defense stats
  defense : "방어력",
  stamina_reduction : "ST 경감",
  balance : "견고",
  base_balance : "기본 견고",
  
  
  // resistances
  status_effects : "상태 이상 부여",
  resistances : "상태 이상 내성",
  venom : "베놈",
  stun : "스턴",
  inhibit : "배니시",
  slow : "슬로우",
  leak : "리크",
  
  
  // misc menu options
  passive_effect : "패시브 효과",
  on : "ON",
  off : "OFF",
  hint : "탐색의 힌트를 읽는다",
  
  
  // info group titles (stuff shown in the bottom info window when hovering over an item/skill)
  stat_scaling : "능력치 보정",
  required_stats : "필요 파라미터",
  
  
  // mobility
  mobility : "기동력",
  mobi : {
    base : "기본 회피 성능", // label for blood code mobility type (also used in the status display)
    slow : "HeavyRolling",
    normal : "Rolling",
    quick : "Step"
  },

  
  // skill tree
  // used for actives, but is also used for passives (dunno know why, but I included it anyway to be identical to the game)
  tree : {
    title : "계통",
    dark : "음",
    light : "양",
    skill : "기술"
  },
  
  // weapon names/tooltips for weapon icons next to tree: skill
  '1h' : "한손검",
  '2h' : "양손검",
  halberd : "도끼창",
  hammer : "대형 해머",
  bayonet : "총검",
  
  
  // attack attributes
  attr : {
    // physical (mainly for weapons, but also present on some actives)
    slash : "절단",
    crush : "파쇄",
    pierce : "관통",
    
    // elemental (typically used in magic, but can be present on enchan- *ahem* transformed weapons)
    blood : "피",
    fire : "불",
    ice : "얼음",
    lightning : "전기"
  },
  
  
  // gift stats
  gift : "연혈", // singular
  gifts : "연혈", // plural
  
  ichor_cost : "소비 명혈",
  cooldown : "재사용까지",
   seconds : "초", // displayed after the cooldown number
  physical : "공격 속성",
  elemental : "비물리 속성",
  usage_req : "사용 조건",
  
  
  // removal (of skills/equipment)
  remove : "등록을 해제한다",
  remove_desc : "현재 장비의 스킬 또는 장비를 제거합니다",
  
  
  // equip error
  equip_error : "You do not meet the requirements to use one or more Gifts/Items you have equipped.", // Please translate this
  
  
  // # DATA SECTION #
  // Mostly names and descriptions for items and skills
  // I recommend booting up Code Vein and copying the texts from the game for these
  /*------------------------------
  * 1. BLOOD CODES
  * 2. PASSIVE SKILLS
  * 3. ACTIVE SKILLS
  * 4. WEAPONS
  * 5. BLOOD VEILS
  * 6. TRANSFORMATIONS
  *------------------------------*/
  data : {
    // # 1. BLOOD CODES #
    blood_code : {
      A0 : {
        name : "여왕 살해",
        desc : "과거에 퀸과 싸우면서 잃어버렸던<br>자기 자신의 블러드 코드<br>HP와 내구성이 뛰어난 근접 전투 타입<br>전체적으로 밸런스가 잡힌 안정된 탐색이 가능<br><br>새겨져있던 당시의 기억이<br>자신에게 말을 걸어온다<br>이번에야말로, 확실한 평온을 되찾자고",
        owner : "플레이어"
      },
      
      A1 : {
        name : "파이터",
        desc : "자신의 키만한 대검을 휘두르는<br>전사의 블러드 코드<br>근접 전투가 주체인 내구성 타입<br>전투에 도움이 되는 기본적인 연혈을 갖추었다<br><br>과거의 퀸 토벌전에서, 힘이 다할 때까지<br>목숨을 걸고 저항했던<br>강한 자의 의지가 깃들어있다",
        owner : "신원 불명"
      },
      
      A2 : {
        name : "레인저",
        desc : "경쾌한 움직임으로 전장을 달리는 흡혈귀의 블러드 코드<br>탐색 보조가 특징인 타입<br>방어나 지원에 관련한 연혈을 갖추었다<br><br>헤매이는 타귀에게 겁먹은 자들을<br>구하고, 혈루를 찾아서 전장에 나서는<br>자상한 자의 의지가 깃들어있다",
        owner : "신원 불명"
      },
      
      A3 : {
        name : "캐스터",
        desc : "마신 피를 강력한 힘으로 바꾸는<br>흡혈귀의 블러드 코드<br>윤택한 명혈로 강력한 연혈 공격이 가능한 타입<br>위력이 강한 원거리 연혈을 갖추었다<br><br>복잡한 연혈을 교묘하게 조종해<br>수많은 타귀를 안개로 만들어온<br>지혜로운 자의 의지가 깃들어 있다",
        owner : "신원 불명"
      },
      
      A4 : {
        name : "광전사",
        desc : "혈영핵을 입수하면서 계승하게 된 블러드 코드<br>강한 완력과 내구성으로 전황을 압도하는 타입<br>극히 적은 명혈량조차 중장비로 보완한다<br><br>과거에 저지른 실수를 극복하고, 피의 갈증에<br>괴로워하면서도 타인을 구하기 위해<br>힘을 쥐어짠 강인한 의지가 깃들어있다",
        owner : "올리버 콜린스"
      },
      
      A5 : {
        name : "프로메테우스",
        desc : "루이가 맡긴 블러드 코드<br>안정된 전투 능력과 약간의 저항력을 갖춘 타입<br>흘려넘기기나 회피 행동에 은혜를 주는 연혈을 지녔다<br><br>흡혈귀를 구제하기 위해<br>수많은 고난을 극복하면서 쌓아올린<br>확고한 의지가 깃들어있다",
        owner : "루이"
      },
      
      A6 : {
        name : "사냥꾼",
        desc : "혈영핵을 입수하면서 계승하게 된 블러드 코드<br>원거리 공격이 장기인 타입<br>총검 사격을 보조하는 연혈을 갖추었다<br><br>1회용 장기말처럼 취급되며 지옥 같은<br>나날을 견뎌온 비통한 마음을 가졌으면서도<br>어딘가 희망에 가득찬 의지가 깃들어있다",
        owner : "케빈"
      },
      
      A7 : {
        name : "메르쿠리우스",
        desc : "코코가 맡긴 블러드 코드<br>평균적인 능력으로 안정된 탐색이 가능한 타입<br>ST나 헤이즈에 관한 연혈로 탐색을 보조한다<br><br>폭주와 싸움에 대한 공포를 없애기 위해,<br>황폐한 대지를 떠돌며 유익한 자원을 찾아<br>싸우는 의지가 깃들어있다",
        owner : "코코"
      },
      
      A8 : {
        name : "헤르메스",
        desc : "데이비스가 맡긴 블러드 코드<br>근접과 연혈을 정교히 다룰 수 있는 밸런스 타입<br>연혈[양]에 비견할 수 있는 유용한 연혈을 갖추었다<br><br>가혹한 환경 속에서, 한가닥의 희망을 찾기 위해<br>위험한 구역에 몸을 던져, 새로운 희망을 이어가는<br>흔들림 없는 의지가 깃들어있다",
        owner : "데이비스"
      },
      
      A9 : {
        name : "어둠의 탐구자",
        desc : "혈영핵을 입수하면서 계승하게 된 블러드 코드<br>연혈의 취급에 특화된 연혈 전투 타입<br>상태 이상 “베놈”에 특화된 연혈을 갖추었다<br><br>잊혀져가는 가치를 찾고자<br>필사적으로 주어진 사명을 살아간<br>비통한 기억이 깃들어있다",
        owner : "이름 없는 계승자"
      },
      
      A10 : {
        name : "아틀라스",
        desc : "야쿠모가 맡긴 블러드 코드<br>중장비가 가능하며 내구성이 뛰어난 근접 타입<br>위협에 맞서기에 좋은 연혈을 갖추었다<br><br>자신의 희생을 두려워않고 소중한 자를 지키기 위해<br>목숨을 걸고 싸우는 강한 의지가 깃들어있다",
        owner : "야쿠모 시노노메"
      },
      
      A11 : {
        name : "어쌔신",
        desc : "혈영핵을 입수하면서 계승하게 된 블러드 코드<br>근접 전투에 우수한 공격 타입<br>기습 공격을 주체로 하는 연혈을 갖추었다<br><br>자유를 손에 넣기 위해, 혼돈의 세계를<br>살아남으려 하는 결사의 각오가 깃들어있다",
        owner : "리키"
      },
      
      A12 : {
        name : "아르테미스",
        desc : "미아가 맡긴 블러드 코드<br>뛰어난 ST와 공격형 연혈이 장기인 반면, 내구성이<br>약한 타입. 흡혈 성능이 향상되는 연혈을 갖추었다<br><br>가혹한 운명을 극복하고 사람들을<br>고통에서 해방시키기 위해 싸워온<br>용맹한 의지가 깃들어있다",
        owner : "미아 카른슈타인"
      },
      
      A13 : {
        name : "이시스",
        desc : "아우로라가 맡긴 블러드 코드<br>연혈을 이용한 전술이 장기인 원거리 타입<br>풍부한 명혈을 사용한 파장 공격으로 적을 농락한다<br><br>흡혈귀를 지키기 위해 자기 희생을<br>선택한 자를 지키고, 고통에서 해방하기 위해<br>분투하는 의지가 깃들어있다",
        owner : "아우로라 발렌티노"
      },
      
      A14 : {
        name : "여왕의 늑해",
        desc : "아우로라에게서 신해를 계승해 손에 넣은<br>퀸의 힘이 깃든 블러드 코드<br>연혈 공격에 특화된 원거리 타입<br>공격형 연혈을 다용해 적을 압도한다<br><br>안쪽에서 무언가에게 침식되는 듯한<br>위화감에 괴로워하면서도, 솟아오르는 힘은<br>무서울 정도로 모든 피를 빨아들인다",
        owner : "퀸"
      },
      
      A15 : {
        name : "에오스",
        desc : "이오가 맡긴 블러드 코드<br>지원계 연혈과 뛰어난 내구성을 자랑하는 보조 타입<br>윤택한 명혈을 구사하며 임기응변이 가능<br><br>단순한 반려가 아니라,<br>자신의 의지로 함께 싸울 것을 선택한<br>굳은 결의가 깃들어있다",
        owner : "이오"
      },
      
      A16 : {
        name : "핀",
        desc : "니콜라가 맡긴 블러드 코드<br>뛰어난 내구성과 장비 중량을 자랑하는 근접 타입<br>적은 명혈량조차 강인한 장비로 보완한다<br><br>사랑하는 자가 평온한 세계에서 살아갈 수 있도록,<br>괴로움을 견디며 자기 자신과 싸워온<br>상냥함이 가득한 의지가 깃들어있다",
        owner : "니콜라 카른슈타인"
      },
      
      A17 : {
        name : "여왕의 폐해",
        desc : "니콜라에게서 신해를 계승해 손에 넣은<br>퀸의 힘이 깃든 블러드 코드<br>강화 연혈을 이용한 전술이 장기인 타입<br>낮은 능력을 다양한 연혈도 보완한다<br><br>안쪽에서 무언가에게 침식되는 듯한<br>위화감에 괴로워하면서도, 솟아오르는 힘은<br>무서울 정도로 모든 피를 빨아들인다",
        owner : "퀸"
      },
      
      A18 : {
        name : "서바이버",
        desc : "혈영핵을 입수하면서 계승하게 된 블러드 코드<br>재주를 중시한 전투가 장기인 타입<br>전투에 도움이 되는 연혈을 갖추었다<br><br>새로운 세대에 확실한 미래를 맡기기 위해<br>한 번은 포기했던 목숨을 걸고 싸워나간,<br>굽히지 않는 마음이 깃들어있다",
        owner : "카밀라"
      },
      
      A19 : {
        name : "다크 나이트",
        desc : "혈영핵을 입수하면서 계승하게 된 블러드 코드<br>뛰어난 내구성과 완력 중시의 전투가 장기인 타입<br>도끼창 장비에 유용한 연혈을 갖추었다<br><br>미도의 꼭두각시로서 비정한 인체 실험을<br>받은 끝에, 결국은 타귀가 되고 만<br>원통한 마음이 깃들어있다",
        owner : "미겔 가르시아"
      },
      
      A20 : {
        name : "스카아하",
        desc : "에밀리가 맡긴 블러드 코드<br>물리와 연혈을 조합한 전술이 장기인 타입<br>불 속성에 특화한 연혈을 갖추었다<br><br>눈뜨지 못하는 자들을 대신해,<br>동료를 지키기 위해 싸워나간<br>강한 의지가 깃들어있다",
        owner : "에밀리 수"
      },
      
      A21 : {
        name : "여왕의 조해",
        desc : "에밀리에게서 신해를 계승해 손에 넣은<br>퀸의 힘이 깃든 블러드 코드<br>물리와 연혈의 파장 공격으로 적을 압도하는 타입<br>윤택한 명혈을 구사하며 전장을 지배한다<br><br>안쪽에서 무언가에게 침식되는 듯한<br>위화감에 괴로워하면서도, 솟아오르는 힘은<br>무서울 정도로 모든 피를 빨아들인다",
        owner : "퀸"
      },
      
      A22 : {
        name : "하르모니아",
        desc : "에바가 맡긴 블러드 코드<br>집중에 관련된 보정이 높아진다<br>연혈[음]의 취급에 뛰어난 연혈 전투 타입<br>낮은 맷집도 윤택한 명혈로 보완한다<br><br>인간 노예로 갇혀있던 자신을 구해주고<br>인간으로 대해준 은혜를 갚기 위해<br>자신의 목숨을 바치려 한 결의가 깃들어있다",
        owner : "에바 루"
      },
      
      A23 : {
        name : "여왕의 후해",
        desc : "에바에게서 신해를 계승해 손에 넣은<br>퀸의 힘이 깃든 블러드 코드<br>연혈을 사용하는 전술에 능한 연혈 전투 타입<br>보조계 연혈을 구사해 전장을 유린한다<br><br>안쪽에서 무언가에게 침식되는 듯한<br>위화감에 괴로워하면서도,  솟아오르는 힘은<br>무서울 정도로 모든 피를 빨아들인다",
        owner : "퀸"
      },
      
      A24 : {
        name : "헤임달",
        desc : "잭이 맡긴 블러드 코드<br>근접 전투에 특화된 초공격 타입<br>장비 중량이 매우 낮으므로 주의<br><br>사명에 살며, 균형을 유지하기 위해<br>모든 것을 희생할 수 있는<br>결사의 각오가 깃들어있다",
        owner : "잭 러더포드"
      },
      
      A25 : {
        name : "헤파이스토스",
        desc : "무라사메가 맡긴 블러드 코드<br>재주 중시의 무기를 정교히 다루는 기교 타입<br>상대를 농락하는 트리키한 연혈을 갖추었다<br><br>가혹한 전장에 몸을 던진 자들을 돕고<br>귀환하는 동료의 미소를 지키기 위한<br>뜨거운 정신이 깃들어있다",
        owner : "린 무라사메"
      },
      
      A26 : {
        name : "워리어",
        desc : "혈영핵을 입수하면서 계승하게 된 블러드 코드<br>완력에 특화된 전투가 장기인 타입<br>생존률을 높여주는 연혈을 갖추었다<br><br>역전의 용사로서 무기를 쥐고,<br>마지막까지 전사로서 긍지를 가지며<br>싸워나갔던 의지가 깃들어있다",
        owner : "무라사메의 부하"
      },
      
      A27 : {
        name : "스카우트",
        desc : "혈영핵을 입수하면서 계승하게 된 블러드 코드<br>뛰어난 흡혈 성능을 이용한 연혈 전술에 특화된 타입<br>경량 장비로 경쾌하게 전장을 누빈다<br><br>자신의 마음을 가슴 속에 숨기고,<br>소중한 사람을 위해 그 일생을 바친<br>자애의 마음이 깃들어있다",
        owner : "나오미"
      },
      
      A28 : {
        name : "퀸",
        desc : "모든 신해를 받아들이고 퀸이 되었을 때에<br>탄생한 블러드 코드<br>연혈을 이용해 능숙하게 전황을 다루는 연혈 특화 타입<br>압도적인 명혈량과 연혈 능력으로 모든 이를 능가한다<br><br>거기에 깃들어있는 마음은<br>분노도 증오도 아닌<br>끝없는 고독… 그것 뿐이었다",
        owner : "퀸"
      },
      
      A29 : {
        name : "하데스",
        desc : "실바가 맡긴 블러드 코드<br>완력, 재주에 중점을 둔 압도적인 공격력을 자랑하는<br>근접 전투 타입. 강인한 장비로 모든 적을 매장한다 <br><br>인류의 미래를 지키기 위해, 희생을 마다치 않고<br>모든 것을 격리하고 유지하는 것을 선택한<br>자기희생의 각오가 깃들어있다",
        owner : "그레고리오 실바"
      },
      
      A30 : {
        name : "데메테르",
        desc : "카렌이 맡긴 블러드 코드<br>윤택한 연혈로 다양한 지원이 가능한 타입<br>완력을 이용해 강한 화력으로 근접 전투도 가능하다<br><br>참혹한 상황을 빚어낸 죄를 짊어지고,<br>갈증에 고통 받는 자들을 구하기 위해<br>그 몸을 바친 경애로운 마음이 깃들어있다",
        owner : "카렌"
      },
      
      A31 : {
        name : "이슈타르",
        desc : "쿠루스의 혈영핵에서 계승한 블러드 코드<br>뛰어난 연혈 성능으로 공수를 보조하는 타입<br>자기 희생을 감수하는 특이한 연혈을 갖추었다<br><br>위협을 떨쳐내고 약자들을 돕고 싶다는,<br>Q.U.E.E.N. 계획에 지원했을 당시의<br>강한 결의가 깃들어있다",
        owner : "쿠루스 실바"
      },
      
      A32 : {
        name : "선구자",
        desc : "넘쳐나는 야심을 가슴에 품고, 흡혈귀로서<br>눈을 뜬 자의 블러드 코드<br>압도적인 맷집을 자랑하는 강인 타입<br>각오를 다진 자만이 사용할 수 있는 독특한 연혈을 갖추었다<br><br>안개의 감옥 베인에서 그 존재를 알리고자<br>경이로운 힘으로 타인을 압도하려 한<br>용맹과감한 의지가 깃들어있다",
        owner : "신원 불명"
      },
      
      A33 : {
        name : "아스트라이아",
        desc : "축복을 바라는 미아의 마음이<br>형태가 되어 나타난 블러드 코드<br>안정된 전투 능력이 특징적인 밸런스 타입<br>동행자와의 탐색에 도움이 되는 연혈을 갖추었다<br><br>동료의 생환을 기도하며, 마모된 마음에<br>치유를 전하는 구제의 심정이<br>깃들어있다",
        owner : "미아 카른슈타인"
      },
      
      // Hellfire Knight DLC
      A34 : {
        name : "아스클레피오스",
        desc : "과거, 잭의 버디였던<br>발레리오의 혈영핵에서 계승한<br>높은 HP와 스태미너가 특징인 블러드 코드<br><br>공격에 직결된 능력은 낮지만,<br>HP와 스태미너가 높아 생존율이 올라간다<br><br>모두를 보호하고자 한 강한 의지가 깃들어있다",
        owner : "발레리오"
      },
      
      A35 : {
        name : "아킬레우스",
        desc : "혈영핵을 입수하면서 계승하게 된,<br>뛰어난 재주와 스태미너가 특징인 블러드 코드<br><br>풍부한 스태미너로 분주히 행동하며 가벼운<br>무기로 많은 공격을 가하는 전투에 적합하다<br><br>수많은 전장을 극복한<br>불굴의 의지가 깃들어있다",
        owner : "신원 불명"
      },
      
      A36 : {
        name : "수르트",
        desc : "심층 깊은 곳에 봉인된 괴물을 토벌하고<br>입수한 블러드 코드<br><br>강한 완력과 높은 인내가 특징이며<br>풍부한 스태미너를 가지고 행동한다<br><br>겁화 같은 그것은, 오랫동안 잠들어<br>있었음에도 어떠한 접촉도 거절하며<br>모든 것을 분쇄한다",
        owner : "겁화의 기사왕"
      },
      
      // Frozen Empress DLC
      A37 : {
        name : "폴룩스",
        desc : "혈영핵을 입수하면서 계승하게 된,<br>강한 완력과 HP가 특징인 블러드 코드<br><br>가드와 내구성으로 적의 공격을 버티면서<br>강력한 일격을 먹이는 초공격 타입<br><br>힘을 가지고 동료와 함께 싸웠던<br>마음 착한 강자의 의지가 깃들어있다",
        owner : "신원 불명"
      },
      
      A38 : {
        name : "위미르",
        desc : "심층 깊은 곳에 봉인된 괴물을 토벌하고<br>입수한 블러드 코드<br><br>강한 의지와 활력이 특징으로<br>음 속성의 연혈 공격력과 HP가 높다<br><br>얼음꽃 같은 그것은, 오랫동안 잠들어<br>있었음에도 혜안으로 기회를 놓치지 않고<br>모든 것을 격멸한다",
        owner : "얼음꽃의 여황제"
      },
      
      // Lord of Thunder DLC
      A39 : {
        name : "페르세우스",
        desc : "혈영핵을 입수하면서 계승하게 된,<br>강한 의지와 정신이 특징인 블러드 코드<br><br>윤택한 명혈과 강력한 연혈 공격력으로<br>적을 섬멸하는 연혈 전투 타입<br><br>모든 국면을 지배한<br>현자의 의지가 깃들어있다",
        owner : "신원 불명"
      },
      
      A40 : {
        name : "발리",
        desc : "심층 깊은 곳에 봉인된 괴물을 토벌하고<br>입수한 블러드 코드<br><br>뛰어난 재주와 정신이 특징으로<br>풍부한 연혈[양]의 강화 지원에 특화되었다<br><br>천둥 같은 그것은, 오랫동안 잠들어<br>있었음에도 자신을 강화하며<br>모든 것을 유린한다",
        owner : "천둥의 황제"
      },
      
      A41 : {
        name : "오리온",
        desc : "혈영핵을 입수하면서 계승하게 된,<br>강한 의지와 재주가 특징인 블러드 코드<br><br>의지로 총탄의 공격력을 올리는<br>사격 중시의 행동에 특화되었다<br><br>화려하게 전장을 달린<br>천재 사수의 의지가 깃들어있다",
        owner : "신원 불명"
      }
    },
    
    
    // # 2. PASSIVE SKILLS #
    passive : {
      // # GENERAL BOOSTS #
      A0 : {
        name : "체력 증가",
        desc : "최대 HP가 증가한다"
      },
      
      A1 : {
        name : "체력 활성",
        desc : "최대 HP가 증가한다"
      },
      
      A2 : {
        name : "스태미너 증가",
        desc : "최대 스태미너가 증가한다"
      },
      
      A3 : {
        name : "스태미너 활성",
        desc : "최대 스태미너가 증가한다"
      },
      
      A4 : {
        name : "질주",
        desc : "대시할 때 소비 스태미너가 경감한다"
      },
      
      A5 : {
        name : "숙달된 송곳니",
        desc : "받아넘기기/백 어택에서 이어지는 특별한 흡혈로<br>주는 대미지가 증가한다"
      },
      
      A6 : {
        name : "인내의 송곳니",
        desc : "띄우기 흡혈에서 파생되는 흡혈로<br>주는 대미지가 증가한다"
      },
      
      A7 : {
        name : "호걸의 송곳니",
        desc : "모으기 흡혈로 주는 대미지가<br>증가한다"
      },
      
      A8 : {
        name : "스피드 어태커",
        desc : "기동력이 높을수록 적에게 가하는 대미지가 증가한다"
      },
      
      A9 : {
        name : "생존 본능",
        desc : "HP가 일정 수치 이하로 내려가 있는 동안,<br>무기와 흡혈 공격력, 연혈의 성능이 증가한다"
      },
      
      A10 : {
        name : "기피의 비책",
        desc : "회피 행동으로 적의 공격을 피할 때<br>집중 게이지가 보다 많이 증가한다"
      },
      
      A11 : {
        name : "피격 시 집중 향상",
        desc : "적에게 대미지를 입었을 때,<br>집중 게이지가 보다 많이 증가한다"
      },
      
      A12 : {
        name : "무기 흡혈 성능 향상",
        desc : "무기 공격을 할 때 흡혈 성능이 증가한다"
      },
      
      A13 : {
        name : "탐식",
        desc : "흡혈 공격으로 얻는 명혈이 증가한다"
      },
      
      A14 : {
        name : "명혈의 계약",
        desc : "최대 HP가 줄어드는 대신 명혈 스톡이 증가한다"
      },
      
      A15 : {
        name : "명혈 스톡 증가",
        desc : "보유할 수 있는 명혈 스톡이 증가한다"
      },
      
      A16 : {
        name : "연혈 발동 단축",
        desc : "연혈의 사용 속도가 빨라진다"
      },
      
      A17 : {
        name : "차지 스피드",
        desc : "모으기 행동 속도가 증가한다"
      },
      
      A18 : {
        name : "상태 이상 축적",
        desc : "적에게 거는 상태 이상 축적량이 증가한다"
      },
      
      A19 : {
        name : "허용 중량 상승",
        desc : "보다 무거운 무기나 흡혈아장을 장비할 수 있게 된다"
      },
      
      A20 : {
        name : "추격 지원",
        desc : "상태 이상인 적에 대한<br>무기 공격 대미지가 증가한다"
      },
      
      // Lord of Thunder DLC
      A21 : {
        name : "매거진 벨트",
        desc : "명혈의 최대치가 증가하는 대신에<br>연혈 능력의 감소와 스태미너 회복 속도가 감소한다"
      },


      // # DEFENSE BOOSTS #
      B0 : {
        name : "견고 향상",
        desc : "견고가 증가한다"
      },
      
      B1 : {
        name : "받아넘기기의 공로",
        desc : "적의 공격을 성공적으로 받아넘겼을 때<br>스태미너가 전부 회복한다"
      },
      
      B2 : {
        name : "가드 시 흡혈 성능 향상",
        desc : "적의 공격을 가드하면<br>흡혈 성능이 증가한다"
      },
      
      B3 : {
        name : "버티기",
        desc : "HP가 일정치 이상이면<br>치명적인 공격을 받아도 HP 1이 남는다",
        usage_req : "아틀라스 블러드 코드"
      },
      
      B4 : {
        name : "블러드 스내치",
        desc : "회피 행동으로 적의 공격을 피하면<br>무기의 흡혈 성능에 따라 명혈을 빼앗는다",
        usage_req : "아르테미스 블러드 코드"
      },
      
      B5 : {
        name : "엔들리스 트릭",
        desc : "회피 행동으로 적의 공격을 피할 때, 명혈을<br>소비해 접촉한 자를 공격하는 탄환을 만든다",
        usage_req : "헤파이스토스 블러드 코드"
      },
      
      B6 : {
        name : "베놈 내성",
        desc : "베놈 내성이 증가한다"
      },
      
      B7 : {
        name : "스턴 내성",
        desc : "스턴 내성이 증가한다"
      },
      
      B8 : {
        name : "배니시 내성",
        desc : "배니시 내성이 증가한다"
      },
      
      B9 : {
        name : "슬로우 내성",
        desc : "슬로우 내성이 증가한다"
      },
      
      B10 : {
        name : "리크 내성",
        desc : "리크 내성이 증가한다"
      },


      // # STAT BOOSTS #
      C0 : {
        name : "완력 향상",
        desc : "완력이 증가한다"
      },
      
      C1 : {
        name : "재주 향상",
        desc : "재주가 증가한다"
      },
      
      C2 : {
        name : "정신 향상",
        desc : "정신이 증가한다"
      },
      
      C3 : {
        name : "의지 향상",
        desc : "의지가 증가한다"
      },
      
      C4 : {
        name : "활력 향상",
        desc : "활력이 증가한다"
      },
      
      C5 : {
        name : "인내 향상",
        desc : "인내가 증가한다"
      },
      
      C6 : {
        name : "완력 재주 향상",
        desc : "완력과 재주가 증가한다"
      },
      
      C7 : {
        name : "완력 의지 향상",
        desc : "완력과 의지가 증가한다"
      },
      
      C8 : {
        name : "완력 활력 향상",
        desc : "완력과 활력이 증가한다"
      },
      
      C9 : {
        name : "재주 의지 향상",
        desc : "재주와 의지가 증가한다"
      },
      
      C10 : {
        name : "재주 인내 향상",
        desc : "재주와 인내가 증가한다"
      },
      
      C11 : {
        name : "정신 의지 향상",
        desc : "정신과 의지가 증가한다"
      },
      
      C12 : {
        name : "정신 활력 향상",
        desc : "정신과 활력이 증가한다"
      },
      
      C13 : {
        name : "정신 인내 향상",
        desc : "정신과 인내가 증가한다"
      },

      // Hellfire Knight DLC
      C14 : {
        name : "완력 인내 향상",
        desc : "완력과 인내가 증가한다"
      },
      
      // Frozen Empress DLC
      C15 : {
        name : "의지 활력 향상",
        desc : "의지와 활력이 증가한다"
      },
      
      // Lord of Thunder DLC
      C16 : {
        name : "재주 정신 향상",
        desc : "재주와 정신이 증가한다"
      },
      

      // # FOCUS BOOSTS #
      D0 : {
        name : '<span style="font-family:GEZFont;"></span>음의 충동',
        desc : "집중 상태일 때, 연혈[음]의 성능이 증가한다"
      },
      
      D1 : {
        name : '<span style="font-family:GEZFont;"></span>양의 충동',
        desc : "집중 상태일 때, 연혈[양]의 성능이 증가한다"
      },
      
      D2 : {
        name : '<span style="font-family:GEZFont;"></span>가드 시 ST경감',
        desc : "집중 상태일 때, 가드 시의<br>스태미너 소비가 줄어든다"
      },
      
      D3 : {
        name : '<span style="font-family:GEZFont;"></span>가드 성능 향상',
        desc : "집중 상태일 때, 물리 공격에 대한<br>가드 성능이 증가한다"
      },
      
      D4 : {
        name : '<span style="font-family:GEZFont;"></span>소비 스태미너 경감',
        desc : "집중 상태일 때, 소비 스태미너가 줄어든다"
      },
      
      D5 : {
        name : '<span style="font-family:GEZFont;"></span>집중 지속',
        desc : "집중 상태일 때, 시간에 따른<br>집중 게이지 감소량이 경감한다"
      },
      
      D6 : {
        name : '<span style="font-family:GEZFont;"></span>집중 난무',
        desc : "집중 상태일 때, 공격 행동으로 인한<br>집중 게이지 감소량이 경감한다"
      },
      
      D7 : {
        name : '<span style="font-family:GEZFont;"></span>절약가',
        desc : "집중 상태일 때, 무기 공격을 사용한<br>명혈의 소비량이 경감한다"
      },
      
      D8 : {
        name : '<span style="font-family:GEZFont;"></span>소비 명혈 경감',
        desc : "집중 상태일 때, 명혈의 소비량이 경감한다",
        usage_req : "여왕의 후해 블러드 코드"
      },
      
      D9 : {
        name : '<span style="font-family:GEZFont;"></span>흡혈 성능 향상',
        desc : "집중 상태일 때, 모든 흡혈 성능이 증가한다"
      },
      
      D10 : {
        name : '<span style="font-family:GEZFont;"></span>연혈 발동 단축',
        desc : "집중 상태일 때, 연혈의 사용 속도가 빨라진다"
      },
      
      D11 : {
        name : '<span style="font-family:GEZFont;"></span>피 속성 부여',
        desc : "집중 상태일 때, 장비 중인 무기에<br>피 속성의 힘을 부여한다"
      },
      
      D12 : {
        name : '<span style="font-family:GEZFont;"></span>불 속성 부여',
        desc : "집중 상태일 때, 장비 중인 무기에<br>불 속성의 힘을 부여한다"
      },
      
      D13 : {
        name : '<span style="font-family:GEZFont;"></span>얼음 속성 부여',
        desc : "집중 상태일 때, 장비 중인 무기에<br>얼음 속성의 힘을 부여한다"
      },
      
      D14 : {
        name : '<span style="font-family:GEZFont;"></span>전기 속성 부여',
        desc : "집중 상태일 때, 장비 중인 무기에<br>전기 속성의 힘을 부여한다"
      },
      
      D15 : {
        name : '<span style="font-family:GEZFont;"></span>베놈 속성 부여',
        desc : "집중 상태일 때, 장비 중인 무기에<br>상태 이상 “베놈”의 힘을 부여한다"
      },
      
      D16 : {
        name : '<span style="font-family:GEZFont;"></span>스턴 속성 부여',
        desc : "집중 상태일 때, 장비 중인 무기에<br>상태 이상 “스턴”의 힘을 부여한다"
      },
      
      D17 : {
        name : '<span style="font-family:GEZFont;"></span>여신의 미소',
        desc : "집중 상태가 된 순간, HP가 회복한다"
      },
      
      // Frozen Empress DLC
      D18 : {
        name : '<span style="font-family:GEZFont;"></span>집중시 명혈 회복',
        desc : "집중 상태가 된 순간, 명혈이 회복한다"
      },
      
      // Lord of Thunder DLC
      D19 : {
        name : '<span style="font-family:GEZFont;"></span>집중시 능력 향상',
        desc : "집중 상태 동안<br>모든 능력치가 증가한다"
      },
      
      D20 : {
        name : '<span style="font-family:GEZFont;"></span>스토핑 파워',
        desc : "집중 상태 시, 총검의 탄환 공격으로<br>깎아내는 적의 견고치가 상승한다"
      },


      // # WEAPON MASTERY #
      E0 : {
        name : "한손검 마스터리",
        desc : "한손검 장비 시, 무기의 공격력이 증가한다"
      },
      
      E1 : {
        name : "양손검 마스터리",
        desc : "양손검 장비 시, 무기의 공격력이 증가한다"
      },
      
      E2 : {
        name : "도끼창 마스터리",
        desc : "도끼창 장비 시, 무기의 공격력이 증가한다"
      },
      
      E3 : {
        name : "대형 해머 마스터리",
        desc : "대형 해머 장비 시, 무기의 공격력이 증가한다"
      },
      
      E4 : {
        name : "총검 마스터리",
        desc : "총검 장비 시, 무기의 공격력이 증가한다"
      },


      // # MISC #
      F0 : {
        name : "재생력 변화",
        desc : "재생력의 사용횟수를 줄이고<br>1회의 재생량을 증가시킨다"
      },
      
      F1 : {
        name : "재생 효과 향상",
        desc : "재생력을 통한 재생량이 증가한다"
      },
      
      F2 : {
        name : "재생 횟수 증가",
        desc : "재생력의 사용횟수가 증가한다"
      },
      
      F3 : {
        name : "계승되는 유지",
        desc : "동행자의 HP가 0가 되어 안개화할 때<br>자신의 재생력을 회복한다",
        usage_req : "아스트라이아 블러드 코드"
      },
      
      F4 : {
        name : "라이프 스틸",
        desc : "적을 해치우면 HP가 회복된다"
      },
      
      F5 : {
        name : "흡혈 재생",
        desc : "흡혈 공격을 할 때 HP가 회복한다"
      },
      
      F6 : {
        name : "무간난무",
        desc : "연혈 「블레이드 댄스」의 효과 중에만 발동<br>회피로 적의 공격을 피하면 공격력이 증가한다",
        usage_req : "프로메테우스 블러드 코드"
      },
      
      F7 : {
        name : "피를 빠는 독",
        desc : "일정 범위 내에 존재하는 적이 베놈으로<br>대미지를 입을 때마다 명혈을 입수한다",
        usage_req : "어둠의 탐구자 블러드 코드"
      },
      
      F8 : {
        name : "획득 헤이즈 상승",
        desc : "적을 격파할 때 헤이즈 입수량이 증가한다"
      },
      
      F9 : {
        name : "아이템 입수율 상승",
        desc : "적을 격파할 때의 아이템 드롭률이<br>크게 증가한다"
      },
      
      F10 : {
        name : "선인의 가르침",
        desc : "연혈의 숙련도가 쉽게 올라간다"
      },
      
      F11 : {
        name : "낙하 대미지 경감",
        desc : "낙하 대미지를 경감한다"
      },
      
      F12 : {
        name : "리프레젠트",
        desc : "동행자가 치명적인 대미지를 입어도 HP 1이 남지만,<br>대신 자신이 나머지 대미지를 받는다<br><br>자신의 HP가 2 이상 남았을 경우에만 유효<br>※이 대미지로 쓰러지진 않는다",
        usage_req : "이슈타르 블러드 코드"
      },
      
      F13 : {
        name : "스태미너 회복 속도 상승",
        desc : "스태미너 회복 속도가 빨라진다"
      },
      
      F14 : {
        name : "어드밴스",
        desc : "안개화하며 떨어뜨린 헤이즈를 회수하면<br>재생력이 회복된다"
      },
      
      F15 : {
        name : "레버넌트의 칼",
        desc : "투척한 대거를 적에게 맞히면<br>명혈을 입수한다"
      },
      
      F16 : {
        name : "일심불란",
        desc : "모으기 흡혈을 맞히면<br>집중 게이지가 증가한다"
      },
      
      F17 : {
        name : "카리스마",
        desc : "동행자(플레이어는 대상 밖)의 능력이 향상한다"
      }
    },


    // # 3. ACTIVE SKILLS #
    active : {
      // # SPELLS #
      A0 : {
        name : "소닉 애로우",
        desc : "명혈을 탄환으로 바꿔 날린다<br><br>일격의 위력을 기대하는 자는 없다<br>다수의 적이 모여드는 장소에서<br>그 진가를 발휘한다"
      },
      
      A1 : {
        name : "블러드 샷",
        desc : "피의 힘을 거대한 탄환으로 바꿔 날린다<br><br>소닉 애로우를 개량해<br>성능의 대폭적인 개선에 성공했다"
      },
      
      A2 : {
        name : "블리드 로어",
        desc : "더러운 피의 탄환을 생성해 표적에게 날린다<br><br>직격을 맞은 자는 육체가 도려내지고<br>그 상처를 좀먹는 듯한 고통에<br>휩싸인다고 한다"
      },
      
      A3 : {
        name : "블레이즈 로어",
        desc : "타오르는 화염을 생성해 표적에게 날린다<br><br>직격 당한 자는 불길에 사로잡혀,<br>그림자만이 갈 곳을 잃은 것처럼<br>그 자리에 남는다고 한다"
      },
      
      A4 : {
        name : "프리즈 로어",
        desc : "얼어붙는 얼음을 생성해 표적에게 날린다<br><br>직격을 맞은 자는 몸 속의 열을 빼앗겨<br>사고가 정지해 정상적인 판단이 불가능해진다"
      },
      
      A5 : {
        name : "플라스마 로어",
        desc : "내리치는 번개를 생성해 표적에게 날린다<br><br>직격을 맞은 자는 순간적으로 전신의 피가<br>끓어올라 격렬한 통증을 겪게 된다고 한다"
      },
      
      A6 : {
        name : "블러드 쏜",
        desc : "꿰뚫는 명혈의 창을 생성해 표적에게 날린다<br><br>고압축된 그 덩어리는,<br>철구보다도 단단해 적의 육체를 파괴한다"
      },
      
      A7 : {
        name : "플레임 쏜",
        desc : "작열하는 화염을 생성해 표적에게 날린다<br><br>고압축된 그 덩어리는,<br>철구보다도 단단해 적의 육체를 파괴한다"
      },
      
      A8 : {
        name : "아이스 쏜",
        desc : "얼어붙는 얼음을 생성해 표적에게 날린다<br><br>고압축된 그 덩어리는,<br>철구보다도 단단해 적의 육체를 파괴한다"
      },
      
      A9 : {
        name : "라이트닝 쏜",
        desc : "마구 날뛰는 뇌광을 생성해 표적에게 날린다<br><br>고압축된 그 덩어리는,<br>철구보다도 단단해 적의 육체를 파괴한다"
      },
      
      A10 : {
        name : "블러드 파일",
        desc : "순식간에 형성한 명혈 탄환을<br>광범위하게 사출한다<br><br>위력은 억제되어 있지만,<br>연사 및 속사가 가능해<br>적을 견제할 때 효과를 발휘한다"
      },
      
      A11 : {
        name : "플레임 파일",
        desc : "순식간에 형성한 화염 탄환을<br>광범위하게 사출한다<br><br>위력은 억제되어 있지만,<br>연사 및 속사가 가능해<br>적을 견제할 때 효과를 발휘한다"
      },
      
      A12 : {
        name : "아이스 파일",
        desc : "순식간에 형성한 얼음 탄환을<br>광범위하게 사출한다<br><br>위력은 억제되어 있지만,<br>연사 및 속사가 가능해<br>적을 견제할 때 효과를 발휘한다"
      },
      
      A13 : {
        name : "라이트닝 파일",
        desc : "순식간에 형성한 전기 탄환을<br>광범위하게 사출한다<br><br>위력은 억제되어 있지만,<br>연사 및 속사가 가능해<br>적을 견제할 때 효과를 발휘한다"
      },
      
      A14 : {
        name : "보드니크의 핏덩어리",
        desc : "농축된 피의 힘을 해방해<br>적대하는 자를 해치운다<br><br>죽은 자가 깃든 저주받은 핏덩어리는<br>접촉한 자를 지옥으로 끌어들인다"
      },
      
      A15 : {
        name : "발푸루기스 파이어",
        desc : "탁월한 혈루를 조작해<br>강력한 업화를 해방한다<br><br>힘에 자신이 없는 흡혈귀는<br>강력한 기술을 사용해서는 안된다<br>제어를 잃은 힘은 사용자에게 돌아가<br>스스로의 육체를 파괴하고 말 것이다"
      },
      
      A16 : {
        name : "바바야가 게이즈",
        desc : "탁월한 혈루를 조작해<br>강력한 냉기를 해방한다<br><br>얼어붙은 몸의 일부를 남기고 안개화했을 경우,<br>얼음이 녹을 때까지 그 부위가 재생되지 않는다<br>이 특성을 활용해 고문에 사용하는<br>경우도 있다"
      },
      
      A17 : {
        name : "페르쿠나스의 분노",
        desc : "탁월한 혈루를 조작해<br>강력한 전격을 해방한다<br><br>그 분노를 잠재우기 위해선<br>죽음으로 갚는 수 밖에 없다"
      },
      
      A18 : {
        name : "황혼의 칼",
        desc : "명혈로 생성한 피의 칼을 휘둘러<br>전방의 적을 쓸어낸다<br><br>노을진 하늘에 한 줄기의 피가 스며들면,<br>그 피가 곧 한 자루의 검이 되어<br>길을 가로막는 자들을 몰살시킬 것이다"
      },
      
      A19 : {
        name : "크림슨 문",
        desc : "명혈로 생성한 작열의 칼날을 휘둘러<br>전방의 적을 불살라버린다<br><br>어두운 밤에 불길한 징조를 나타내는 붉은 달<br>그것을 본 자에겐 반드시 불길한 소식이 날아간다고 한다"
      },
      
      A20 : {
        name : "오로라 베기",
        desc : "명혈로 생성한 얼어붙은 칼날을 휘둘러<br>전방의 적을 찢어발긴다<br><br>허공에 뿌려진 피가 순식간에 얼음의 검으로 변한다<br>그 칼날은 7색으로 빛나며, 홀린 상대를<br>선혈의 붉은 색으로 물들인다"
      },
      
      A21 : {
        name : "유피테르 블레이드",
        desc : "명혈로 생성한 전기의 칼날을 휘둘러<br>전방의 적에게 참격과 뇌격을 먹인다<br><br>순간의 섬광과 마주하게 된 상대는 눈이 멀게 된다<br>다시 눈을 뚠 순간, 자신이 죽었다는 사실을<br>깨닫게 될 것이다"
      },
      
      A22 : {
        name : "익스큐션",
        desc : "불굴의 의지를 거대한 검으로 바꾸어<br>단두대처럼 내리친다<br><br>그 압도적인 칼날 앞에 서게 된 사람의<br>뇌리에는 체념이 스쳐 지나간다<br>차라리 받아들이면 편해질 거라고…"
      },
      
      A23 : {
        name : "버닝 크래시",
        desc : "단숨에 형성한 화염 탄환을 연속으로 사출해<br>적의 기를 꺾는다<br><br>한 발의 위력을 억제한 대신에<br>강인한 적의 자세를 무너뜨릴 정도의<br>묵직한 연격을 발사한다"
      },
      
      A24 : {
        name : "블래스트 볼트",
        desc : "전기의 탄환을 생성해 표적에게 연사한다<br><br>대지를 꿰뚫는 그 섬광은<br>튼튼한 갑옷조차 무시하고<br>그 육체를 관통한다"
      },
      
      A25 : {
        name : "가드 오브 오너",
        desc : "다수의 얼음 기둥을 생성해<br>시간차로 표적에게 날린다<br><br>일단 발동되면, 여러 차례 공격할 수 있는 자와<br>실패해선 안 되는 회피 행동을 반복하는 자의<br>우위 차이는 굉장히 크다"
      },
      
      A26 : {
        name : "댄싱 블레이즈",
        desc : "도탄하는 불의 탄환을 발사한다<br><br>튀어나간 탄환이 어디로 향할지는<br>술자조차도 알 수 없다<br>예측할 수 없는 움직임이 적을 농락한다"
      },
      
      A27 : {
        name : "용공의 말뚝",
        desc : "피를 거대한 말뚝으로 바꿔 표적을 꿰뚫는다<br><br>빠르고 강력한 화력을 자랑하며<br>실용성이 뛰어난 기술이다<br>그 말뚝이 박힌 자는<br>저승의 밑바닥에 영혼이 붙들린다고 한다"
      },
      
      A28 : {
        name : "인드라 코일",
        desc : "겨냥한 적의 발 밑에, 3연속으로<br>강력한 전기 기둥을 발사한다<br><br>직격한 자는<br>온 몸의 피가 순식간에 끓어올라,<br>안에서부터 폭발하는 듯한<br>충격을 받는다고 한다"
      },
      
      A29 : {
        name : "단죄의 콰르텟",
        desc : "겨냥한 표적을 끊임없이 추적하는<br>전기 속성의 탄환을 발사한다<br><br>신의 분노를 산 자는, 결코 그 죄로부터<br>도망칠 수 없다<br>그 분노가 사그라들 때까지<br>같은 연혈의 사용이 제한된다"
      },
      
      A30 : {
        name : "엘더 콘트랙트",
        desc : "농축한 피의 힘을 지면에 박아 넣어,<br>겨냥한 적의 발 밑에 피의 기둥을 분출한다<br><br>고위력의 연혈은 사용 난이도도 높다<br>힘에 익숙해져 자신의 것으로 삼으면<br>그 능력은 우수한 파트너가 될 것이다"
      },
      
      A31 : {
        name : "리플렉트 아이스",
        desc : "응축한 명혈을 수많은 강력한 얼음 덩어리로<br>만들어 해방해 표적을 꿰뚫는다<br><br>막대한 에너지의 방출은<br>술자인 흡혈귀 또한 부담이 커서<br>실현하기가 어려웠다<br>신해라는 촉매가 있기에 가능한 연혈이다"
      },
      
      A32 : {
        name : "트와일라이트",
        desc : "자신의 전방에 모든 것을 꿰뚫는<br>거대한 레이저를 발사한다<br><br>그 빛이 지나가면,<br>먼지 한 톨 남기지 않고 모든 것을 삼키고<br>사라진다고 한다",
        usage_req : "여왕의 늑해 블러드 코드"
      },
      
      A33 : {
        name : "화염백합",
        desc : "고속으로 투척날을 사출한다<br>박힌 날은 잠깐의 정숙 후, 폭발한다<br><br>적에게 찔러넣어도 좋고,<br>벽이나 지면에 박아두고 함정으로 써도 좋다<br>술자의 발상과 경험을 살려 활용하면 된다"
      },
      
      A34 : {
        name : "샌드 에지",
        desc : "지면에서 고압 분사되는 모래 칼날로<br>표적을 날려버린다<br><br>명혈로 지면을 침식해, 모래와 같은 입자로<br>칼날을 만들어 사용하는 특이한 기술<br>순식간에 물질을 변화시키기에, 사용하려면<br>고도의 기술이 필요하다"
      },
      
      A35 : {
        name : "모탈 스톰",
        desc : "목표를 향해 모여드는 모래 칼날을 만든다<br>칼날은 모여든 다음에 폭발한다<br><br>다수의 압력원을 한 점에 모아 충돌시킴으로써<br>대폭발을 일으킨다. 휘몰아치는 모래 폭풍에서<br>도망가는 것은 무척 어려울 것이다"
      },
      
      A36 : {
        name : "세트의 팔",
        desc : "표적의 발밑에서 모래의 팔을 소환해<br>상대의 육체를 무자비하게 움켜쥔다<br><br>무한정에 가까운 모래알에 사로잡히면,<br>더 이상 도망칠 방법은 없다<br>겹겹이 압축된 그것은 강철보다 단단하며<br>물리적인 파괴는 불가능에 가깝다"
      },
      
      A37 : {
        name : "광사",
        desc : "표적 주변에 거대한 모래 폭풍을 일으킨다<br><br>어떤 때에도 경계를 풀어서는 안된다<br>전장에 있는 한, 피에 굶주린 자들이<br>그 목숨을 노리고 있는 것이다"
      },
      
      A38 : {
        name : "재앙의 재",
        desc : "적의 명혈을 빼앗는 흡혈탄을 쏜다<br><br>약자는 강자의 피와 살이 된다<br>빼앗는 것이 아니라 이용하는 것이다<br>흡혈귀의 미래를 위해서"
      },
      
      A39 : {
        name : "정숙의 가시",
        desc : "공중에 만들어낸 거대한 가시가 표적을 꿰뚫는다<br><br>과거의 싸움에서 이 가시에 목숨을 잃은<br>흡혈귀는 셀 수 없으며, 스며드는 공포는<br>지금도 그 색이 바래지 않았다"
      },
      
      A40 : {
        name : "백랑의 혈십자",
        desc : "십자 모양 피의 칼날을 표적에게 날린다<br><br>과거 백랑의 장이 사용했다는 공격 기술<br>십자의 칼날은 타락한 자를 향한 기도라고 하지만,<br>대상을 4등분으로 찢어 효율적으로 침묵시키는<br>냉철한 기능 또한 갖추고 있다"
      },
      
      A41 : {
        name : "섀도우 리프",
        desc : "자신의 주변에 충격파를 발생시켜<br>후방으로 순간 이동한다<br><br>순간적으로 자신의 육체를 안개화한 후<br>재결합시키는 것으로 능력을 실현했다",
        usage_req : "이시스 블러드 코드"
      },
      
      A42 : {
        name : "블러드 임팩트",
        desc : "명혈을 응축한 후 단숨에 방출할 때<br>발생하는 충격파로 주변의 적을 날려버린다<br><br>대미지를 기대할 수 있는 힘은 아니다<br>상대와 거리를 두고 상태를 점검하거나,<br>지형을 이용해 형세를 역전하는 등,<br>응용의 폭이 넓다"
      },
      
      A43 : {
        name : "올드맨 윈터",
        desc : "자신의 주변에 만물을 얼려버리는<br>겨울 바람을 구현한다<br><br>그 추위도, 거친 바람도,<br>침입자가 다가오는 것을 용납치 않는다<br>접근하는 순간 바람에 날려가<br>무방비한 모습을 드러내게 된다"
      },
      
      A44 : {
        name : "모란등불",
        desc : "거대한 폭염을 일으켜, 주변의 적을 불사른다<br><br>눈 앞에서 벌어지는 갑작스런 폭발을<br>피할 수 있는 자는 많지 않다<br>깊숙히 유인 당한 상태라면 더욱 그렇다",
        usage_req : "스카아하 블러드 코드"
      },
      
      A45 : {
        name : "도깨비불",
        desc : "술자의 후방을 커버하듯이 호를 그리는<br>명혈의 탄환을 날린다<br><br>공격력은 기대할 수 없지만<br>적의 교란에는 유효한 힘이 될 것이다"
      },
      
      A46 : {
        name : "불씨 날리기",
        desc  : "술자의 후방을 커버하듯이 호를 그리는<br>불의 탄환을 방출한다<br><br>발동까지 걸리는 시간이 무척 짧아,<br>적이 연혈의 불꽃을 확인한 순간엔 이미<br>그 육체가 불타기 시작할 것이다"
      },
      
      A47 : {
        name : "데스퍼리트 봄",
        desc : "체내에 축적한 막대한 에너지를 폭발시켜<br>주변에 극심한 대미지를 줄 수 있지만,<br>대신에 자신도 빈사 상태가 되는 필사의 연혈<br><br>죽음의 공포를 극복한 흡혈귀이기에<br>실현할 수 있는 최고의 기술<br>그 모습은, 보는 이의 마음에<br>영원히 새겨질 것이다"
      },
      
      A48 : {
        name : "장미화염",
        desc : "불꽃의 마름쇠를 뿌려두고, 잠시 뒤에<br>폭발시켜 주변에 대미지를 가한다<br><br>사방이 포위되어 도망칠 곳을 잃은 자는<br>이제 불발될 가능성을 믿을 수 밖에 없다<br>하지만 그런 일은 없을 것이다"
      },
      
      // Hellfire Knight DLC
      A49 : {
        name : "기어오는 겁화",
        desc : "표적이 된 대상을 노리는<br>불길한 화염을 내보낸다<br><br>작열하는 소용돌이는, 마치 의지를 가진 듯<br>표적을 집어삼키고자 천천히 다가온다<br>표적이 된 타귀는 더 이상 도망칠 수 없다"
      },
      
      A50 : {
        name : "염검전무",
        desc : "자기 주변에 회전하는 화염검을 소환한다<br><br>타오르는 칼날이 사용자의 주변을 고속으로 회전,<br>다가오는 적을 사정없이 찢어발긴다"
      },
      
      // Frozen Empress DLC
      A51 : {
        name : "얼음꽃의 빛줄기",
        desc : "얼어붙는 광선을 발사해 전방위를 쓸어버린다<br><br>접촉한 자를 얼리는 냉기의 빛줄기는<br>사용자의 주변을 전부 공격해, 저항하는<br>자들에게 죽음의 정적을 하사한다<br><br>여황제의 능력 일부를 블러드 코드로<br>계승한 것으로, 사용 부담이 크다"
      },
      
      A52 : {
        name : "프로스트 터릿",
        desc : "농축된 냉기의 덩어리를 생성하고<br>지속적으로 얼음덩어리를 사출한다<br><br>발사된 얼음덩어리들이 치명적인 일격을<br>먹이지는 못할 것이다. 하지만 그것이<br>축적되면 승리의 한걸음이 되는 것이다"
      },
      
      // Lord of Thunder DLC
      A53 : {
        name : "미티어 폴",
        desc : "자기 머리 위에 불타는 암석군을 생성해<br>운석처럼 적에게 쏟아붓는다<br><br>낙하하는 돌들은 어디까지나 운석을 흉내낸<br>것이지만, 쏟아지는 붉은 유성을 맞고도<br>굴복하지 않는 타귀는 그리 많지 않을 것이다"
      },
      
      A54 : {
        name : "아이스 웨이브",
        desc : "지면을 달리는 냉기를 만드는 공격 연혈<br><br>적의를 가진 자의 진격은<br>얼음 같은 파동에 막혀버릴 것이다"
      },
      
      A55 : {
        name : "갈증의 혈계",
        desc : "특수한 필드를 만들어<br>침입한 적의 명혈을 지속해서 빼앗는다<br><br>타귀에게 다가가지 않고 명혈을 빼앗아<br>위험에 처하는 일 없이 연혈을 행사할 수 있다<br><br>때로는 약간의 명혈이 운명을 가르는<br>경우도 있다. 연혈을 전투의 축으로 삼으려면<br>이 함정을 활용하는 것도 좋을 것이다"
      },
      
      A56 : {
        name : "천둥의 철퇴",
        desc : "그 자리에서 순식간에 뛰어올라,<br>착지와 동시에 벼락을 두른 폭발을 일으킨다<br><br>손에 전기를 집중해야 해서 발동까지 시간이<br>좀 걸리지만, 위력은 압도적이다<br><br>황제의 전기를 사용하는 연혈로, 어줍잖은<br>흡혈귀가 사용하면 순식간에 재로 변해버릴<br>정도의 전기가 사용자의 체내에 쌓인다"
      },


      // # DEBUFFS #
      B0 : {
        name : "베놈 샷",
        desc : "겨냥한 적을 향해,<br>상태 이상 “베놈”을 유발하는 탄환을 날린다<br><br>어둠에 숨어 어디에선가<br>날아드는 그 탄환은, 적을 공포로<br>몰아넣으며 착실히 그 체력을 빼앗는다"
      },
      
      B1 : {
        name : "스턴 샷",
        desc : "겨냥한 적을 향해,<br>상태 이상 “스턴”을 유발하는 탄환을 날린다<br><br>어둠에 숨어 어디에선가<br>날아드는 그 탄환은, 적을 공포로<br>몰아넣으며 착실히 그 자유를 빼앗는다"
      },
      
      B2 : {
        name : "슬로우 샷",
        desc : "겨냥한 적을 향해,<br>상태 이상 “슬로우”를 유발하는 탄환을 날린다<br><br>어둠에 숨어 어디에선가<br>날아드는 그 탄환은, 적을 공포로<br>몰아넣으며 착실히 그 기동력을 빼앗는다"
      },
      
      B3 : {
        name : "베놈 웹",
        desc : "다듬어진 명혈을 투척해, 낙하 지점에<br>침입자를 좀먹는 베놈 함정을 만든다<br><br>그 힘은 침입자의 피를 감지해<br>적대자에게만 효과를 적용한다"
      },
      
      B4 : {
        name : "스턴 웹",
        desc : "다듬어진 명혈을 투척해, 낙하 지점에<br>침입자의 자유를 빼앗는 스턴 함정을 만든다<br><br>모든 연혈은 이 감옥을 살아남기 위한 것이다<br>강대한 적이 나타났을 때, 이 힘을 이용해<br>해야할 일은 단 하나<br>뒤돌아보지 않고 도망치는 것이다"
      },
      
      B5 : {
        name : "슬로우 웁",
        desc : "다듬어진 명혈을 투척해, 낙하 지점에<br>침입자를 느리게 하는 슬로우 함정을 만든다<br><br>숙달된 흡혈귀는 명혈에 담긴 강한 의지와<br>이미지를 구현화하는 창조성을 가지고 있다<br>힘을 단련하려면 우선 자신과 마주해야 한다"
      },
      
      B6 : {
        name : "쇼크 웹",
        desc : "다듬어진 명혈을 이용해, 발 밑에<br>침입자를 위협하는 저화력의 함정을 설치한다<br><br>신속하고 화려하게 적을 속였을 때<br>그 진가를 발휘한다<br>작게 피어난 의심이 이윽고 마음을 속박하는<br>족쇄가 되어 말하기 힘든 불안과 공포를 가져온다"
      },
      
      B7 : {
        name : "분노의 화염",
        desc : "다듬어진 명혈을 이용해, 발 밑에<br>침입자를 불태우는 불의 함정을 만든다<br><br>타귀를 재화하기 위해서<br>다양한 수단이 검토되었다<br>같은 장소에서 죽음을 반복하는 타귀를<br>작열하는 불꽃으로 끝없이 불태웠으나,<br>거기에 재가 쌓이는 일은 없었다"
      },
      
      B8 : {
        name : "베놈 제일",
        desc : "사용자의 주위 일대에 명혈을 뿌려<br>침입자를 좀먹는 베놈 함정을 만든다<br><br>치안 유지 부대 서버러스가<br>고안한 연혈도 적지 않다<br>그 대부분은 이 힘처럼<br>간접적인 공격을 가하는 것이 많다"
      },
      
      B9 : {
        name : "스턴 제일",
        desc : "사용자의 주위 일대에 명혈을 뿌려<br>침입자의 자유를 빼앗는 스턴 함정을 만든다<br><br>치안 유지 부대 서버러스가<br>고안한 연혈도 적지 않다<br>그 대부분은 이 힘처럼<br>간접적인 공격을 가하는 것이 많다"
      },
      
      B10 : {
        name : "슬로우 제일",
        desc : "사용자의 주위 일대에 명혈을 뿌려<br>침입자의 움직임을 억제하는 슬로우 함정을 만든다<br><br>치안 유지 부대 서버러스가<br>고안한 연혈도 적지 않다<br>그 대부분은 이 힘처럼<br>간접적인 공격을 가하는 것이 많다"
      },
      
      B11 : {
        name : "히스테릭 패닉",
        desc : "집중 게이지를 깎는 탄환을 날린다<br><br>기다리고 있어도 길은 결코 열리지 않는다<br>방관자로 있지 말고,<br>스스로 길을 개척해야 하는 것이다"
      },


      // # BUFFS #
      C0 : {
        name : "블러드 웨폰",
        desc : "일정 시간, 자신과 동행자의 무기에 더러운 피를 발라<br>베인 상대의 체력을 깎는다<br><br>흡혈귀에게 피란 목숨을 연명하기 위한 식량이자,<br>위협으로부터 몸을 지키는 견고한 갑옷이자,<br>어떠한 고난도 이겨낼 강인한 검이기도 하다<br>그 활용법은 전부, 흡혈귀의 의지에 달려있다"
      },
      
      C1 : {
        name : "플레임 웨폰",
        desc : "일정 시간, 자신과 동행자의 무기에 화염을 휘감아<br>상대의 몸속부터 태워버린다<br><br>작열하는 도신에 타버린 상처는<br>흡혈귀의 재생력이 있다 하더라도<br>수복에 상당한 시간이 필요하다"
      },
      
      C2 : {
        name : "아이스 웨폰",
        desc : "일정 시간, 자신과 동행자의 무기를 얼려서<br>상대의 육체를 파괴한다<br><br>상처를 곧바로 얼려서<br>안개화를 막고 무한한 고통을 맛보게 한다"
      },
      
      C3 : {
        name : "라이트닝 웨폰",
        desc : "일정 시간, 자신과 동행자의 무기에 전기를 흐르게 하여<br>강인한 갑옷을 베어낸다<br><br>그 힘은 든든한 아군이기도 하지만,<br>자칫하면 위협이 될 수도 있는<br>위험을 안고 있다는 사실을<br>잊어서는 안 된다"
      },
      
      C4 : {
        name : "맹독의 표식",
        desc : "일정 시간, 장비한 무기에<br>상태 이상 “베놈”의 힘을 부여한다<br><br>상대를 베어버리면<br>강력한 독이 그 육체를 잠식한다<br>공포는 이미 시작된 것이다"
      },
      
      C5 : {
        name : "마비의 표식",
        desc : "일정 시간, 장비한 무기에<br>상태 이상 “스턴”의 힘을 부여한다<br><br>감각 기능을 유지한 채 자유를 빼앗겼다는<br>공포로 얼굴이 일그러진 자를 어떻게 처리할 것인가<br>모든 것은 그 표식을 새긴 자의 손에 달렸다"
      },
      
      C6 : {
        name : "봉혈의 표식",
        desc : "일정 시간, 장비한 무기에<br>상태 이상 “배니시”의 힘을 부여한다<br><br>연혈의 봉인은 대단히 큰 의미를 가진다<br>하지만 방심해서는 안된다<br>궁지에 몰린 생쥐일수록<br>예상외의 실력을 발휘하는 법이다"
      },
      
      C7 : {
        name : "둔화의 표식",
        desc : "일정 시간, 장비 중인 무기에<br>상태 이상 “슬로우”의 힘을 부여한다<br><br>슬로우 상태가 된 자는 온몸의 피가 무겁고<br>축축한 감각에 사로잡혀, 엄청난 권태감에<br>빠지게 된다. 때문에 움직임이 느려져<br>적에게 치명적인 빈틈을 내주고 만다"
      },
      
      C8 : {
        name : "스트라이크 라이저",
        desc : "일정 시간, 공격력이 증가한다<br><br>지상을 유린하는 괴물을 해치우려면<br>인지를 초월한 강대한 힘이 필요했다<br>연혈이라는 힘은 어느새인가 희망의 빛이 되었고,<br>현재도 흡혈귀의 앞날을 밝히고 있다"
      },
      
      C9 : {
        name : "영광의 가교",
        desc : "일정 시간, 공격력이 증가한다<br><br>불멸의 타귀는 피를 바라며<br>산자를 덮쳐 그 힘을 키워간다<br>쌓아온 지혜와 기술과 경험이<br>감옥에서 살아남는 원동력이 된다"
      },
      
      C10 : {
        name : "오버 드라이브",
        desc : "일정 시간, 자신과 동행자의 공격력이 증가한다<br>대미지를 입은 시점에서 효과가 끊긴다<br><br>적의 사각에서 선제 공격을<br>할 수 있는 상황에 있어야,<br>비로소 이 힘이 진가를 발휘한다"
      },
      
      C11 : {
        name : "슈팅 라이저",
        desc : "일정 시간, 무기를 사용한 사격 공격력이 증가한다<br><br>수없이 반복된 치열한 전투에서 살아남기<br>위해선, 체력 소모를 억제하는 것이<br>중요한 요소이다<br>적에게 다가가지 않고 그 체력을 깎을 수<br>있다면, 생존율이 더욱 올라갈 것이다"
      },
      
      C12 : {
        name : "크레이지 블로",
        desc : "연혈 발동 후의 일격에 한해, 공격력이 증가한다<br><br>무의식 중에 억제된 육체의 틀을 벗어나,<br>순간적으로 심리적 한계를 넘어선 힘을 낸다<br>인간이 아닌 흡혈귀이기에 가능해진 강대한 기술"
      },
      
      C13 : {
        name : "플래시 팽",
        desc : "연혈 발동 후의 일격에 한해, 공격력이 증가한다<br><br>명혈을 응축한 후, 이를 단숨에<br>방출하는 것으로 폭발적인 힘을<br>만드는 것에 성공했다"
      },
      
      C14 : {
        name : "제노사이드 리퍼",
        desc : "연혈 발동 후의 일격에 한해, 적의 방어력과<br>가드 성능을 일부 무시하고 대미지를 가한다<br><br>어떠한 장벽으로 몸을 지키려 해도<br>이 힘을 막을 수는 없다<br>이 칼날은 마치 평등하게 죽음을 전하는<br>사신의 낫과도 같다"
      },
      
      C15 : {
        name : "블랙 샤우트",
        desc : "연혈 발동 후의 일격에 한해,<br>연혈[음]의 성능이 크게 증가한다<br><br>마음을 북돋는 우렁찬 외침이<br>승리에 대한 의지를 되찾게 해,<br>한계를 넘어선 힘을 깨운다"
      },
      
      C16 : {
        name : "블레이드 댄스",
        desc : "일정 시간, 무기로 적에게 대미지를<br>줄 때마다 공격력이 증가한다<br><br>강대한 힘은, 얻는다고 해도<br>양날의 검이 될 위험성이 있다<br>책략에 빠져 물러설 때를 놓치게 되면,<br>언젠가 죽음이 찾아올 것이다",
        usage_req : "프로메테우스 블러드 코드"
      },
      
      C17 : {
        name : "양날의 태도",
        desc : "공격력이 크게 증가하는 대신<br>시간이 흐를 수록 HP가 줄어든다<br>남은 HP가 1이 된 시점에서 효과가 종료된다<br><br>대가도 없이 인지를 초월한 힘을 얻을 수는 없다<br>각오를 굳힌 자만이 확실한 승리를 쥐는 것이다",
        usage_req : "헤임달 블러드 코드"
      },
      
      C18 : {
        name : "포스 오버",
        desc : "일정 시간, 완력과 재주가 증가한다<br><br>순간적으로 공격력을 높일 수 있어서<br>많은 흡혈귀들이 자주 활용하고 있다"
      },
      
      C19 : {
        name : "스펠 오버",
        desc : "일정 시간, 정신과 의지가 증가한다<br><br>정신을 통일해 순간적으로 연혈의 능력을<br>끌어올릴 수 있어서, 많은 흡혈귀들이<br>자주 활용하고 있다"
      },
      
      C20 : {
        name : "갑옷 부수기",
        desc : "무기로 공격해서 일정 시간<br>적의 기를 쉽게 꺾을 수 있다<br><br>약간의 빈틈이 전황을 크게 바꾸는<br>중요한 기회가 될 수 있다<br>상대의 빈틈을 끌어낼 수 있다면,<br>생존율은 크게 올라갈 것이다"
      },
      
      C21 : {
        name : "헌팅 기어",
        desc : "일정 시간, 무기 공격을 사용한 흡혈 성능이 증가한다<br><br>전투에 있어 연혈이 가지는 역할은 대단히 크다<br>효율적으로 명혈을 확보하면,<br>전투의 폭이 크게 넓어지게 된다"
      },
      
      C22 : {
        name : "흡혈 태도",
        desc : "일정 시간, 무기 공격을 이용한<br>자신과 동행자의 흡혈 성능이 강해진다<br><br>이 기술로 무기에 탑재된 흡혈 기구를<br>일시적으로 활성화시켜서<br>보다 많은 흡혈이 가능해진다"
      },
      
      C23 : {
        name : "오소리티",
        desc : "일정 시간, 자신과 동행자의 연혈 사용 속도가 증가한다<br><br>긴 시간을 살아남아 숙련된 흡혈귀들은,<br>순식간에 다수의 연혈을 다루며<br>많은 전장을 넘어왔다고 한다"
      },
      
      C24 : {
        name : "오더라이즈",
        desc : "일정 시간, 자신과 동행자의<br>연혈 효과 시간이 증가한다<br><br>그것은 미미한 변화인지도 모른다<br>그러나 그로 인해 생기는 위화감은<br>이윽고 전황을 크게 좌우할 정도로,<br>전장에 큰 변화를 가져오게 된다"
      },
      
      C25 : {
        name : "액셀러레이션",
        desc : "명혈의 힘으로 반사 속도를 높여서<br>일시적으로 회피 성능을 향상시킨다<br><br>명혈의 소비량이 많고, 습득도 쉽지 않다<br>다만, 그 노력에 걸맞은 효과를<br>확실하게 얻을 수 있다"
      },
      
      C26 : {
        name : "어설트 랭커",
        desc : "일정 시간, 스태미너 소비가 경감한다<br>대미지를 입은 시점에서 효과가 끊긴다<br><br>이 힘은 적의 사각에서<br>선제 공격을 가할 수 있는 상황에서<br>진가를 발휘한다"
      },
      
      C27 : {
        name : "레드 슈즈",
        desc : "스태미너가 고갈되었을 때, 스태미너 대신<br>HP를 소비해 행동을 이어간다<br><br>한계를 넘어 사력을 다하는 자를,<br>용자 또는 머저리라고 부른다<br>진정한 용기를 추구한다면, 약간의<br>이성도 놓아서는 안된다",
        usage_req : "핀 블러드 코드"
      },
      
      C28 : {
        name : "발리언트 하트",
        desc : "명혈의 흐름으로 동체 시력, 반응 속도를 강화해<br>회피할 때의 스태미너 소비가 경감한다<br><br>그 어떠한 위협도 공격을 무효화<br>해버리면 두려울 것이 없다<br>빠른 판단력과 움직임으로 위험을 최소화한다"
      },
      
      C29 : {
        name : "액티브 레코드",
        desc : "일정 시간, 자신과 동행자의 최대 스태미너가<br>증가하고 스태미너를 최대로 회복한다<br><br>약간의 변화에도 바로 반응할 수 있도록<br>흡혈귀는 항상 주의를 기울여야 한다<br>쉴 틈도 없는 흡혈귀에게 있어,<br>이 기술은 필수품이라고 할 수 있다"
      },
      
      C30 : {
        name : "클락 어퍼",
        desc : "명혈의 힘을 써서 일시적으로 신체 능력을 높여,<br>모으기를 사용하는 공격 행동의 속도가 증가한다<br><br>시간의 어드밴티지가<br>전황을 크게 좌우한다<br>그 일격이 승리를 장식하는 선혈을 흩뿌린다"
      },
      
      C31 : {
        name : "마블 블러드",
        desc : "명혈이 다했다 해도, 명혈 대신<br>HP를 소비해 연혈을 발동한다<br><br>흡혈귀의 지혜, 그 중에서도 강력한 연혈은<br>모르는 새에 사용자의 정신을 매료한다<br>피와 살을 바쳐 이를 행사하겠다면,<br>몸이 파멸하는 것에 주의하라",
        usage_req : "하르모니아 블러드 코드"
      },
      
      C32 : {
        name : "임팩트 웨이브",
        desc : "일정 시간, 내리치는 공격을 성공하면<br>충격파를 생성해 적에게 추가 대미지를 가한다<br><br>습득하려면 일정 수준의 실력이 필요하지만,<br>얻을 수 있는 이득이 크다"
      },
      
      C33 : {
        name : "라스트 저니",
        desc : "자신의 재생력을 폭주 시켜 저승길로 향한다<br>HP를 즉시 전부 회복하고, 능력도 상승하지만<br>일정 시간이 지나면 목숨을 잃는다<br><br>흡혈귀는 불사에 가까운 존재라고 하지만,<br>안개화하면 잃는 것도 많다<br>그래도 목숨을 걸고 큰 승부를 거는 것이다<br>반드시 그에 맞는 배당을 얻어내라",
        usage_req : "여왕 살해 블러드 코드"
      },
      
      C34 : {
        name : "피지컬 오버",
        desc : "일정 시간, 인내와 활력이 증가한다<br><br>여러 차례 죽었다 살아난 흡혈귀라 해도,<br>높은 HP와 풍부한 스태미너가 있으면<br>죽음과 대면하는 공포가 줄어들 것이다"
      },

      // Frozen Empress DLC
      C35 : {
        name : "어택 오더",
        desc : "일시적으로 자신의 방어력을 낮추고<br>자신과 동행자의 공격력이 증가한다<br><br>자신의 몸을 희생하여<br>동료 전원의 공격력을<br>단숨에 끌어올릴 수 있다"
      },

      // Lord of Thunder DLC
      C36 : {
        name : "절약술",
        desc : "일정 시간, 무기 공격의<br>명혈 소비량이 줄어든다<br><br>명혈의 소비량을 염두에 두며 싸우는 자와<br>그렇지 않은 자는<br>생존 확률부터 차이가 난다"
      },


      // # DEFENSE BUFFS #
      D0 : {
        name : "아이언 윌",
        desc : "피의 장벽에 힘을 불어넣어<br>일정 시간, 대미지가 경감한다<br><br>대미지를 최소한으로 억제하는 것이<br>바로 생존율을 높이는 것에 직결한다"
      },
      
      D1 : {
        name : "더러운 피의 부적",
        desc : "명혈을 한계까지 응축해서,<br>1회에 한해 자신과 동행자 주변에<br>대미지를 크게 경감하는 배리어를 생성한다<br><br>설령 일시적인 방어라 해도,<br>그 순간 생겨나는 정신적 여유가<br>승리로 이어지는 자신감이 된다"
      },
      
      D2 : {
        name : "스케이프 블러드",
        desc : "일정 시간, 대미지를 받을 때마다<br>명혈을 소비해 그 대미지가 크게 경감한다<br><br>술자는 명혈의 보호를<br>받고 있다는 사실을 잊어서는 안된다<br>물러설 때를 계산하지 못하면,<br>금세 죽음이 찾아올 것이다",
        usage_req : "에오스 블러드 코드"
      },
      
      D3 : {
        name : "저거노트",
        desc : "자신의 공격 내성과 견고가 상승한다<br>그동안 기동력과 속성 내성은 저하한다<br><br>직접적인 공격 내성을 올리는 반면, 약점을 드러내는<br>이 연혈의 사용 기회를 찾는 것은 어렵다<br>그러나 적절히 사용하면, 사용자는<br>강대한 힘을 얻을 수 있을 것이다",
        usage_req : "여왕의 폐해 블러드 코드"
      },
      
      D4 : {
        name : "위대한 비호",
        desc : "일정 시간, 물리 공격에 대한<br>무기의 가드 성능이 증가한다<br><br>폭주한 흡혈귀를 제압하는 것은<br>쉬운 일이 아니다<br>수비를 굳히고 그것 또한 힘으로 바꿔가면서,<br>치안 유지 부대 서버러스는<br>수많은 전장을 넘어올 수 있었다"
      },
      
      D5 : {
        name : "가드 임펄스",
        desc : "일정 시간, 가드에 성공하면 공격을 튕겨내<br>적의 자세를 무너뜨릴 수 있다<br><br>적의 공격을 막은 후 허를 찔러 공격한다<br>단순하지만 확실하게 승리를 얻을 수 있는<br>전투 기술이다"
      },
      
      D6 : {
        name : "매시브 크래시",
        desc : "일정 시간, 적의 가드를 무너뜨리기 쉬워진다<br><br>적이 견고한 수비로 몸을 가리고 있어도<br>그걸 두려워할 필요가 없다<br>포기하지 않는 칼날이 승리로 가는 길을 연다"
      },
      
      D7 : {
        name : "가드 시프트",
        desc : "일정 시간, 가드할 때의 스태미너 소비가 경감한다<br><br>방어가 무너지게 되면,<br>그 순간부터 전황이 와해된다<br>방어를 유지하는 것이<br>전황을 유지하는 것이나 다름없다"
      },
      
      D8 : {
        name : "칠색 장벽",
        desc : "일정 시간, 속성 공격에 대한<br>무기의 가드 성능이 증가한다<br><br>폭주한 흡혈귀를 제압하는 것은<br>쉬운 일이 아니다<br>수비를 굳히고 그것 또한 힘으로 바꿔가면서,<br>치안 유지 부대 서버러스는<br>수많은 전장을 넘어올 수 있었다"
      },
      
      D9 : {
        name : "블러드 가드",
        desc : "일정 시간, 자신과 동행자 주변에 피의 힘을<br>막는 장벽을 치고 피 내성이 증가한다<br><br>명혈은 사용자의 강한 의지를 통해<br>그 성질을 바꿔간다<br>특정한 힘을 거절하는 것 정도는<br>어려운 일도 아니다"
      },
      
      D10 : {
        name : "플레임 프로텍션",
        desc : "일정 시간, 자신과 동행자의 주변에 불의 힘을<br>경감하는 장벽을 치고 불 내성이 증가한다<br><br>형성된 장벽은 화염 공격의 열을 빼앗아<br>그 대미지를 경감한다"
      },
      
      D11 : {
        name : "아이시클 스킨",
        desc : "일정 시간, 자신과 동행자의 주변에 얼음의 힘을<br>경감하는 장벽을 치고 얼음 내성이 증가한다<br><br>형성된 장벽은 얼어붙는 듯한 냉기를<br>무력화하고 그 대미지를 줄인다"
      },
      
      D12 : {
        name : "뇌신포",
        desc : "일정 시간, 자신과 동행자의 주변에 전기의 힘을<br>경감하는 장벽을 치고 전기 내성이 증가한다<br><br>설령 타귀가 되어버렸다 해도,<br>습득한 연혈은 사라지지 않고<br>가차 없이 흡혈귀에게 송곳니를 들이댄다<br>이를 계기로 다양한<br>연혈이 고안되기 시작했다"
      },
      
      D13 : {
        name : "엘리먼트 월",
        desc : "일정 시간, 자신과 동행자의 모든 속성 공격에 대한<br>내성이 증가한다<br><br>강자일수록 모든 상황에 임기 응변으로 <br>대응하고 만전의 체제로 전장에 임한다<br>방심이 죽음을 부르는 법이다"
      },
      
      D14 : {
        name : "로열 하트",
        desc : "일정 시간, 쉽게 밀리지 않는다<br><br>혼돈이 소용돌이치는 가혹한 전장에선,<br>흔들리지 않는 의지가 흡혈귀를<br>흡혈귀답게 만드는 중요한 힘이 된다<br>마음이 꺾인 자에게 미래는 없다"
      },
      
      D15 : {
        name : "불굴의 투지",
        desc : "일정 시간, 적의 공격을 버틸 수 있다<br><br>어떠한 공격에도 물러서지 않는<br>강인한 의지를 지닌 자만이<br>이 세계를 살아남을 수 있는 것이다"
      },
      
      D16 : {
        name : "퍼펙트 바디",
        desc : "연혈 발동 후의 일격에 한해, 거의 밀리지 않는다<br><br>위협에 굴하지 않고 전진하는 그 한 걸음이<br>미래로 이어지는 확실한 한 걸음이 될 것이다"
      },
      
      D17 : {
        name : "항체 생성",
        desc : "일정 시간, 모든 상태 이상에 대한<br>내성이 증가한다<br><br>연혈을 다루는 자에게 있어<br>상태 이상의 위협은 말할 필요도 없다<br>대비를 소홀히 했다간 재화가 기다릴 것이다"
      },
      
      D18 : {
        name : "카운터 트릭",
        desc : "일정 시간, 회피 행동으로 적의 공격을 피할 때<br>접촉한 자를 공격하는 탄환을 만든다<br><br>과감하게 파고 들 용기가 필요하지만,<br>그만큼 보상이 크다"
      },
      
      D19 : {
        name : "리텔리에이트 트릭",
        desc : "일정 시간, 대미지를 받을 경우,<br>접촉한 자를 공격하는 화염탄이 발생한다<br><br>분노의 화염은 적의 계속되는 공격을 막아,<br>흡혈귀의 목숨을 지키는 구제의 불이 된다",
        usage_req : "여왕의 조해 블러드 코드"
      },
      
      D20 : {
        name : "스트러글 타임",
        desc : "연혈 발동 후, HP가 일정치 이상이면<br>치명적인 대미지를 입어도 딱 한 번 HP가 1 남는다<br><br>어떠한 위협에도 맞서는 용기를 가지고<br>살아간다면, 가능성은 무한히 펼쳐질 것이다"
      },
      
      // Frozen Empress DLC
      D21 : {
        name : "체력 강장",
        desc : "연혈 능력이 감소하는 대신<br>일시적으로 최대 HP가 증가한다<br><br>연혈 능력의 감소를 대가로 얻은<br>풍부한 체력을 어떻게 이용할 지는<br>사용자의 재량에 달려있다"
      },
      
      D22 : {
        name : "팔면방벽",
        desc : "방어할 때, 정면만이 아니라<br>모든 방향에서 오는 공격을 막을 수 있게 된다<br><br>이제 어디에서 공격해도 두려울 일이 없다<br>단, 방어만 해서는<br>승리의 여신이 미소지어주진 않는다"
      },
      
      D23 : {
        name : "디펜스 오더",
        desc : "일시적으로 자신의 공격력을 낮추고<br>자신과 동행자의 방어력이 증가한다<br><br>자신의 몸을 희생하여<br>동료 전원의 방어력을<br>단숨에 끌어올릴 수 있다"
      },
      
      // # COMMUNAL GIFTS #
      E0 : {
        name : "팬텀 게인",
        desc : "루이 동행 시에 사용할 수 있는 공연혈. 방어력을 희생해<br>공격력이 증가하고, 회피 행동이 변화한다<br><br>흡혈귀의 피에 대한 갈망을 힘으로 바꾸기 위해,<br>자칫하면 타귀가 될 수도 있는 위험성을 감수한다<br>강한 의지를 가지지 않는다면,<br>그 정신을 유지하기 힘들 것이다",
        usage_req : "루이가 동행하고 있다"
      },
      
      E1 : {
        name : "루피너스 라이브",
        desc : "야쿠모 동행 시에 사용할 수 있는 공연혈, 회피 속도를<br>희생해 가드 시의 소비 스태미너가 감소하고,<br>적의 공격을 가드한 횟수에 따라<br>가드 직후의 일격에만 공격력이 증가한다<br><br>동료를 지켜내겠다는 각오가<br>흡혈귀의 피를 약동시켜, 확실한 힘으로 승화된다<br>각오를 짊어진 일격은, 모든 곤경을 박살낸다",
        usage_req : "야쿠모가 동행하고 있다"
      },
      
      E2 : {
        name : "흔들리지 않는 쐐기",
        desc : "이오 동행 시에 사용할 수 있는 공연혈, 흡혈 성능을<br>희생해 적의 공격에 계속 밀리지 않게 된다<br><br>그 몸에 싹튼 확고한 의지가<br>잠든 힘을 끌어낸다<br>사명을 완수한다, 단지 그것만을 위해",
        usage_req : "이오가 동행하고 있다"
      },
      
      E3 : {
        name : "트랜스 타임",
        desc : "미아 동행 시에 사용할 수 있는 공연혈, 근접 공격력을<br>희생해 소비 명혈이 감소, 연혈의 사용 효율이 오른다<br><br>텅빈 황야에서 살아남기 위해서<br>각성한 피를 전신에 퍼트린다<br>마치 마법의 세계에 흘러들어온 것처럼<br>사용자의 주변이 다른 세계로 변화한다",
        usage_req : "미아가 동행하고 있다"
      },
      
      E4 : {
        name : "페이탈 데이",
        desc : "잭 동행 시에 사용할 수 있는 공연혈, 재생력을<br>희생해 공격력이 상승하고, 소비 스태미너가 감소한다<br><br>안개의 감옥을 유지하기 위해 목숨을 걸고<br>모든 위험을 굴복시킨 그 경이로운 힘은,<br>많은 흡혈귀에게 저항할 수 없는 공포를 심어준다",
        usage_req : "잭이 동행하고 있다"
      },
      
      E5 : {
        name : "리미티드 송",
        desc : "에바 동행 시에 사용할 수 있는 공연혈, 보다 많은<br>명혈을 희생해 흡혈 성능과 연혈 성능이 증가한다<br><br>투명한 노랫소리에 감응하듯이<br>흡혈귀의 피가 춤을 춘다<br>붉게 물든 선혈이, 말라버린 마음을 채워준다",
        usage_req : "에바가 동행하고 있다"
      },
      
      
      // # MISC #
      F0 : {
        name : "기프트 힐",
        desc : "자신의 HP를 소비하는 대신<br>동행자의 HP를 회복한다<br><br>흡혈귀에게 있어, 죽음은 더 이상 공포의 대상이 아니다<br>가장 두려운 것은, 동료와의 인연을 잃고<br>고독하게 살아가게 되는 것이다",
        usage_req : "자신의 HP가 2 이상 있다"
      },
      
      F1 : {
        name : "자애의 가호",
        desc : "자신의 HP를 크게 소비하는 대신에<br>동행자의 HP를 크게 회복한다<br><br>목숨을 걸고 서로를 지키겠다는 확고한 의지가<br>위대한 축복이 되어 함께 싸우는 자의 상처를 회복한다",
        usage_req : "자신의 HP가 2 이상 있다"
      },
      
      F2 : {
        name : "오토 힐",
        desc : "동행자가 치명적인 대미지를 받으면<br>자동으로 기프트 힐을 발동한다<br>단, HP는 연혈 발동 시에 소비된다<br><br>타인을 돕기 위해 자신을 희생하기란<br>그리 쉽게 할 수 있는 일이 아니다<br>길게 뻗은 그 빛은,<br>깊은 인연의 증표라고도 할 수 있다",
        usage_req : "데메테르 블러드 코드<br>자신의 HP가 2 이상 있다"
      },
      
      F3 : {
        name : "프로텍트 힐",
        desc : "자신의 HP를 소비해 동행자의 HP를 회복하고,<br>일정 시간 방어력이 증가한다<br><br>협력자 없이 이 감옥에서 살아남기는 힘들다<br>일시적인 대가가, 때로는 궁지에서 벗어날<br>생명줄이 될 수도 있다",
        usage_req : "아스트라이아 블러드 코드<br>자신의 HP가 2 이상 있다"
      },
      
      F4 : {
        name : "정화의 빛",
        desc : "일정 시간, 연혈 발동 후에 입은 대미지의<br>일부가 자동으로 조금씩 회복된다<br><br>통증이란, 죽은 흡혈귀에게 생을 실감할 수<br>있게 하는 신의 축복이나 다름없다<br>관점을 조금 바꾸면, 그것은 다친 세포를<br>깨우는 약이 된다는 의미이기도 하다"
      },
      
      F5 : {
        name : "재생자",
        desc : "자신과 동행자의 자기 재생 능력을 상승해<br>HP의 재생량이 증가한다<br><br>약간의 체력 차이가<br>승패를 정하는 경우도 많다<br>안심감은 안정된 결과로 이어진다"
      },
      
      F6 : {
        name : "베놈 클리어",
        desc : "자신과 동행자의 베놈 상태를 회복한다<br>미리 사용하면 상태 이상을 예방한다<br><br>불사의 힘을 손에 넣은 흡혈귀조차도<br>역병의 전염을 피하진 못해, 치료법의<br>확립이 당시의 최중요 과제였다<br>흡혈귀의 현재는, 수많은 시행착오와<br>꾸준한 노력으로 세워진 것이다"
      },
      
      F7 : {
        name : "스턴 클리어",
        desc : "자신과 동행자의 스턴 상태를 회복한다<br>스턴 상태에서는 행동할 수 없으니 미리 사용할 것<br><br>불사의 힘을 손에 넣은 흡혈귀조차도<br>역병의 전염을 피하진 못해, 치료법의<br>확립이 당시의 최중요 과제였다<br>흡혈귀의 현재는, 수많은 시행착오와<br>꾸준한 노력으로 세워진 것이다"
      },
      
      F8 : {
        name : "배니시 클리어",
        desc : "자신과 동행자의 배니시 상태를 회복한다<br>배니시 상태에서는 사용할 수 없으니 미리 사용할 것<br><br>불사의 힘을 손에 넣은 흡혈귀조차도<br>역병의 전염을 피하진 못해, 치료법의<br>확립이 당시의 최중요 과제였다<br>흡혈귀의 현재는, 수많은 시행착오와<br>꾸준한 노력으로 세워진 것이다"
      },
      
      F9 : {
        name : "슬로우 클리어",
        desc : "자신과 동행자의 슬로우 상태를 회복한다<br>미리 사용하면 상태 이상을 예방한다<br><br>불사의 힘을 손에 넣은 흡혈귀조차도<br>역병의 전염을 피하진 못해, 치료법의<br>확립이 당시의 최중요 과제였다<br>흡혈귀의 현재는, 수많은 시행착오와<br>꾸준한 노력으로 세워진 것이다"
      },
      
      F10 : {
        name : "리크 클리어",
        desc : "자신과 동행자의 리크 상태를 회복한다<br>미리 사용하면 상태 이상을 예방한다<br><br>불사의 힘을 손에 넣은 흡혈귀조차도<br>역병의 전염을 피하진 못해, 치료법의<br>확립이 당시의 최중요 과제였다<br>흡혈귀의 현재는, 수많은 시행착오와<br>꾸준한 노력으로 세워진 것이다"
      },
      
      F11 : {
        name : "파나케이아 에센스",
        desc : "자신과 동행자의 모든 상태 이상을 회복한다<br>미리 사용하면 상태 이상을 예방한다<br><br>무너져내리는 일상 속에서, 싸워온 나날이<br>흐릿해져 가는 시간 속에서, 동료와의<br>신뢰와 정이, 자신이 인간이라는 사실을<br>상기시켜 망가진 마음을 치유해준다"
      },
      
      F12 : {
        name : "제물의 피",
        desc : "자신의 HP를 소비해 명혈을 입수한다<br><br>항상 전장에 몸을 던지는 흡혈귀에게,<br>명혈의 존재가 얼마나 중요한 것인지는<br>말할 필요도 없다<br>그 대가는, 확실한 힘이 되어<br>재의 공포에서 그 몸을 지켜준다"
      },
      
      F13 : {
        name : "메모리 오프",
        desc : "다음 발동까지 시간이 걸리는 모든 연혈을<br>곧바로 사용할 수 있게 된다<br><br>곤란한 순간에는 기억을 잃는 편이 낫다<br>잊어버리면 처음부터 다시<br>시작할 수 있으니까"
      },
      
      F14 : {
        name : "플로팅 라이트",
        desc : "발 밑에 표식이 될 빛의 구슬을 남긴다<br><br>케미컬 라이트가 주로 사용되던 당시,<br>탐색 중에 휴대품을 전부 써버려<br>충분한 탐색을 하지 못하는 문제가 많았다<br>연혈로 대용할 수 있게 된 이후,<br>보다 광범위한 탐색이 가능해졌다"
      },
      
      F15 : {
        name : "리턴",
        desc : "의도적으로 육체를 안개화시켜, 헤이즈를<br>잃지 않고 마지막으로 접촉한 겨우살이로 돌아간다<br><br>물러나는 것은 부끄러운 행위가 아니다<br>전략적 후퇴는 이 감옥에서 살아남기 위한<br>중요한 선택지 중 하나이다"
      },
      
      F16 : {
        name : "나이트 스토커",
        desc : "자신이 내는 소리를 줄여<br>적에게 잘 들키지 않게 된다<br><br>조금이라도 등 뒤가 꺼림칙하다면,<br>뒤돌아서 확인하는 편이 좋다<br>어둠에 숨어 다가오는 자도 있을 테니까"
      },
      
      F17 : {
        name : "밤 안개의 옷",
        desc : "밤 안개에 몸을 감싼 것처럼, 특별하게 변질된 피로<br>모습을 지우고 적에게 잘 들키지 않게 된다<br><br>이걸 다루는 자는 안개가 끼인 것처럼<br>외견이 흐릿해져서, 인식할 수 없게 된다"
      },
      
      F18 : {
        name : "아이템 서치",
        desc : "일정 거리 내에<br>미취득 아이템이 있는지 조사한다<br><br>흡혈귀의 욕망은<br>인간과는 차원이 다른 초감각을 이용해<br>대상 물질이 내뿜는 미약한 흔적을 탐지한다"
      },
      
      F19 : {
        name : "액티브 에너미 소나",
        desc : "일정 거리 이내에 있는 적을<br>레이더 위에 표시한다<br><br>불사의 몸이기에<br>죽음을 두려워하라<br>영겁의 고통을<br>맛보고 싶지 않다면…"
      },
      
      F20 : {
        name : "액티브 아이템 소나",
        desc : "일정 거리 내에 미취득 아이템이 있는 장소를<br>레이더 위에 표시한다<br><br>자신의 피를 미세한 안개로 변화시켜<br>주변을 꿰뚫어보는 손발이 되어준다<br>흡혈귀는 인간이 아니란 것을 가리킨다"
      },
      
      F21 : {
        name : "와이드 아이템 서치",
        desc : "자신이 있는 필드 내에<br>미취득 아이템이 있는지 조사한다<br><br>한계가 없는 흡혈귀의 욕망은<br>인간과는 차원이 다른 초감각을 이용해<br>대상 물질이 내뿜는 미약한 흔적을 탐지한다<br>모든 것을 손에 넣기 위하여…"
      },
      
      F22 : {
        name : "스플릿 어비스",
        desc : "도약해서 혼신의 힘을 실어 무기를 꽂아넣는다<br>한손검, 도끼창, 총검용 공격 연혈<br><br>짙은 심연을 찢을 듯이 도약하여<br>혼신의 일격을 꽂아넣는다<br><br>공격 전후의 동작이 커서 사용하기 어려우므로<br>활용할 때에는 적의 움직임을 끝까지 주시하는 게 중요하다"
      },
      
      F23 : {
        name : "팬텀 어설트",
        desc : "안개처럼 모습을 감추고 도약하여 참격을 내지른다<br>한손검, 도끼창, 총검용 공격 연혈<br><br>망령이 어둠에 몸을 숨기듯 모습을 감추고<br>표적과의 거리를 단숨에 좁혀 십자로 벤다<br><br>모습이 사라져 있는 동안에는 어떤 공격도 받지 않고<br>일방적으로 강습할 수 있다"
      },
      
      F24 : {
        name : "블러드 서큘러",
        desc : "눈앞의 적에게 고속 연격을 꽂아넣는다<br>한손검, 도끼창, 총검용 공격 연혈<br><br>붉은 용권이라 착각할 만한 고속 5연격을 펼쳐<br>압도적인 수치로 표적의 체력을 빼앗는다<br><br>무기에 다른 연혈 효과를 부여하면<br>이 연혈의 효과가 더욱 배증한다"
      },
      
      F25 : {
        name : "리전 퍼니셔",
        desc : "투척한 무기를 회전시켜 광범위하게 베어 넘긴다<br>양손검, 대형 해머용 공격 연혈<br><br>찌르듯이 던진 무기를 연혈의 힘으로 회전시켜<br>주위를 베어 넘기는, 집단 전투에 특화된 공격 연혈<br><br>공격 범위가 비상하게 넓은 반면, 예비 동작도 크므로<br>약한 무리의 적이라도 방심하지 말아야 한다"
      },
      
      F26 : {
        name : "마탄의 윤무",
        desc : "유도성이 높은 탄환을 연사한다<br>총검용 공격 연혈<br><br>회전을 통해 총검 내부의 명혈ㅇ르 고압축하여<br>표적을 확실하게 먹어치울 마탄을 4연사한다<br><br>동작 시간이 긴 기술이므로<br>사용할 타이밍에 주의를 기울여야 한다"
      },
      
      F27 : {
        name : "삼멸살",
        desc : "근거리의 적에게 연속 공격을 펼친다<br>양손검, 대형 해머용 공격 연혈<br><br>명혈을 사용해 순간적으로 근력을 마구 증강시켜서<br>중량 무기로 고속 3연격을 때려넣는다<br><br>공격 후에 생기는 틈도 작기 때문에<br>중량 무기를 이용한 근거리 전투에서 유용하다"
      },
      
      F28 : {
        name : "강룡복호",
        desc : "전방으로 단숨에 뛰어들어 강렬한 참격을 꽂아넣는다<br>양손검, 대형 해머용 공격 연혈<br><br>떨어져 있는 상태에서 표적에게 단숨에 접근하여<br>용을 떨어뜨리고 호랑이의 목을 잘라낼듯이<br>강렬한 연격을 내지른다<br>그 위력은 말할 필요도 없으나<br>동작이 길어 반격당하기 쉽다는 점에 주의해야 한다"
      },
      
      F29 : {
        name : "채리엇 레이브",
        desc : "안개화하여 돌진해 연속 공격을 펼친다<br>도끼창용 공격 연혈<br><br>몸을 안개화한 채로 고속으로 뛰어들어<br>찌르는 동작을 발판 삼아 연격을 펼친다<br><br>초격 이후, 공격과 회피로 파생이 가능하기 때문에<br>공격의 기점으로 유용하다"
      },
      
      F30 : {
        name : "시프팅 할로우",
        desc : "몸을 안개화하면서 전방으로 뛰어든다<br><br>어둠 속을 떠도는 망령처럼, 몸을 안개화하여<br>뛰어들어서 모든 공격에서 빠져나가는,<br>전투를 서포트하는 특수한 연혈"
      },
      
      F31 : {
        name : "그레이브 노커",
        desc : "지면에 강렬한 킥을 꽂아넣어 충격파를 일으킨다<br><br>연혈 에너지를 다리에 모아 차는 동시에<br>지면에 꽂아넣어, 적의 자세가 무너지도록<br>충격파를 발생시키는 공격연혈<br><br>땅속에 잠들어 있는 고인조차 두들겨 깨우는 충격은 타귀를<br>비틀거리게 만들어 치명적인 틈을 만들어낸다"
      },
      
      F32 : {
        name : "제비 떨어뜨리기",
        desc : "찰나에 내지르는 고속 일격<br>양손검, 대형 해머용 공격 연혈<br><br>무기를 쥔 자세에서 순식간에 몸을 비틀어<br>활공하는 제비조차 쏘아 떨어뜨리는 고속 일격을 내지른다<br><br>중량 무기로는 낼 수 없는 속도로 공격하여<br>적이 틈을 보였을 때 확실하게 대미지를 축적시킨다"
      },
      
      F33 : {
        name : "배니싱 할로우",
        desc : "몸을 순식간에 안개화하여 공격을 회피한다<br><br>그 자리에서 몸을 안개로 만들어 머리부터<br>다시 나타나는 회피용 연혈<br><br>죽어도 몸을 안개로 만들어 부활하는 흡혈귀의<br>재생 사이클을 기술 레벨로 구현시켰다<br>획기적인 연혈이지만 사용하려면 높은 기량이 필요하다"
      },
      
      F34 : {
        name : "토먼트 블래스트",
        desc : "뛰어들면서 전방으로 공격을 펼친다<br>양손검, 대형 해머용 공격 연혈<br><br>전방에 뛰어들면서 돌풍을 일으키듯 크게 휘둘러<br>2연격을 한다<br><br>공격 동작이 느린 중량 무기로 강력하게 밀어붙이는<br>수단으로서 유효하다"
      },
      
      F35 : {
        name : "섀도우 어설트",
        desc : "단거리를 고속으로 돌진하는 이동 공격<br>한손검, 도끼창, 총검용 공격 연혈<br><br>빛이 깜빡이는 동안 늘어나듯이<br>미끄러지는 고속 일격을 반복한다<br><br>약간 멀어진 사이를 좁혀, 근거리에서<br>전투를 유지하는 전법과 상성이 좋다"
      },
      
      F36 : {
        name : "리틀 기프트",
        desc : "자신의 HP를 약간 소비하는 대신<br>동행자의 HP를 약간 회복한다<br><br>기프트 힐에 비하면<br>자신이 소비하는 HP가 적지만,<br>그만큼 상대방이 회복하는 양도 적어진다",
        usage_req : "자신의 HP가 2 이상 있다"
      },
      
      // Hellfire Knight DLC
      F37 : {
        name : "명혈 공명 수",
        desc : "발동 중에는 자신도 동행자(플레이어는 대상 밖)가<br>얻은 명혈과 같은 양의 명혈을 획득한다<br><br>함께 싸우는 동료와의 공명이<br>자신의 피와 살이 되는 것이다<br>※「명혈 공명 송」과 동시 이용 불가"
      },
      
      F38 : {
        name : "명혈 공명 송",
        desc : "발동 중에는 자신이 얻은 명혈과<br>같은 양의 명혈을 동행자(플레이어는 대상 밖)에게 공급한다<br><br>신비롭게 고양되는 피의 공명이<br>함께 싸우는 동료를 구한다<br>※「명혈 공명 수」와 동시 이용 불가"
      },
      
      F39 : {
        name : "잔물결의 형태",
        desc : "빠르게 자세를 취하고 정신을 통일해<br>스태미너를 전부 회복한다<br><br>전투 중에 이 자세를 취하면,<br>연속 공격의 시간을 늘리거나<br>궁지에서 벗어날 수 있다"
      },
      
      F40 : {
        name : "사선의 호흡",
        desc : "효과 중, 적의 공격을 유인한 후 회피에<br>성공하면 스태미너가 회복한다<br><br>아무리 타귀라 해도, 공격 직후에는 틈이 생긴다<br>일격을 제대로 피하기만 한다면,<br>다음 기회는 금방 찾아온다"
      },
      
      F41 : {
        name : "허공의 태도",
        desc : "정자세에서 눈에 보이지 않는 참격을<br>날리는 한손검용 공격 연혈<br><br>찰나의 참격은 진공의 날을 만들어<br>범위 내의 모든 적을 베어버린다<br><br>전력을 다하는 검이기에, 발동까지<br>시간이 걸린다. 달인이 되면 기술을<br>사용할 순간 또한 자연히 떠오를 것이다"
      },
      
      F42 : {
        name : "라운드 클리버",
        desc : "도약하면서 회전 베기를 펼치는<br>한손검, 도끼창, 총검용 공격 연혈<br><br>회전 공격은 전후좌우를 전부 커버하며<br>주변의 모든 적을 베어버린다<br><br>적에게 포위된 상황은 물론이며,<br>위치를 파악하기 힘든 적을 눈대중으로<br>공격하는 용도로도 쓸 수 있다"
      },
      
      F43 : {
        name : "새비지 랜딩",
        desc : "공중에서 강습하여 적을 쓸어버리는<br>한손검, 도끼창용 공격 연혈<br><br>원거리에서 도약한 후 활공하여<br>단숨에 거리를 좁혀 적을 공격한다<br><br>기사왕의 전투법을 계승한 연혈이자<br>익숙해지려면 수련이 필요하다"
      },
      
      // Frozen Empress DLC
      F44 : {
        name : "부동격",
        desc : "쉽게 경직되지 않는 특성이 있는 일격을 날리는<br>양손검, 대형 해머용 공격 연혈<br><br>두려워하지 않고 전력을 다한 일격이야말로<br>승리를 부르는 필살의 한 수<br><br>그렇다고 목숨을 가벼이 여기다간 물거품이 된다<br>목숨을 거는 것도 눈치를 잘 살펴야하는 법이다"
      },
      
      F45 : {
        name : "찬탈의 칼날",
        desc : "적을 베면서 HP를 회복하는<br>도끼창용 공격 연혈<br><br>욕망이 향하는 대로, 피만이<br>아니라 그 목숨마저 바라는<br>것이 흡혈귀의 천성이다"
      },
      
      // Lord of Thunder DLC
      F46 : {
        name : "제로 리캐스트",
        desc : "동행자의 연혈 재사용 시간을 초기화한다<br><br>동료의 명혈량이 허용되는 한,<br>강력한 연혈을 발동한 직후 바로<br>같은 연혈로 추가 공격할 수도 있다"
      },
      
      F47 : {
        name : "증혈의 비법",
        desc : "무기 공격력과 방어력이 내려가는 대신<br>명혈이 점점 회복한다<br><br>단, 일정 시간이 지나면<br>명혈의 회복이 멎고 사라진 힘이 돌아온다"
      },
      
      F48 : {
        name : "보법 뇌화",
        desc : "신속하게 파고 들어 장타를 날린다<br><br>짐승의 사냥처럼, 단숨에 톱 스피드까지<br>가속해 원거리의 사냥감에 육박하는 공격 연혈<br><br>장타의 위력은 낮지만, 누구도 따라올 수 없는<br>고속 이동이 어떠한 무기도 이길 힘이 된다"
      },
      
      F49 : {
        name : "콘센트레이션",
        desc : "사용하면 집중 게이지가 조금 상승한다<br><br>상황에 따라선 바로 집중 상태가 되지 않으므로<br>사용할 타이밍을 고려하며<br>자신의 전술을 활용하는 것이 중요하다"
      },
      
      F50 : {
        name : "레이디언트 배럴",
        desc : "관통 성능을 가진 강력한 탄환을 사출하는<br>총검용 공격 연혈<br><br>탄은 단숨에 타깃에 도달하여<br>궤도 상의 모든 적을 관통한다<br><br>에너지를 모으는 데에 시간이 걸리므로<br>가까운 적에겐 쓰기 어렵다. 무리를 지은<br>적에게 진가를 발휘할 수 있을 것이다"
      }
    },
    
    
    // # 4. WEAPONS #
    weapon : {
      // # ONE-HANDED SWORDS #
      A0 : {
        name : "여왕 토벌대의 검",
        desc : "퀸 토벌을 위해 양산되어<br>토벌군 흡혈귀에게 지급된 외날검<br><br>생산 스피드가 우선되어 명혈 전도 기구가<br>드러난 조잡한 완성도이지만, 예리하게 갈아둔<br>날은 타귀의 육체를 가볍게 벨 수 있다"
      },
      
      A1 : {
        name : "예속의 철관",
        desc : "간소한 봉 무기<br><br>철로 만든 관에 흡혈 기구를 붙였을 뿐이라<br>그냥 검이라고도 하기 힘든 대용품<br><br>예속된 흡혈귀가 많이 들고 있는데<br>이 무기에 미약한 희망을 걸고 싸우는 것일까…"
      },
      
      A2 : {
        name : "브로드 소드",
        desc : "임시총독부에서 양산된 폭이 넓은 양날검<br><br>힘을 실어 후려치는 운용을 상정해 제작했으며,<br>혼신의 힘으로 휘두르면 거대한 타귀도 겁을 먹는다<br><br>다루기 쉽기에 인기가 있으며<br>선량한 사람부터 악당까지, 베인에서는<br>누구나 손에 넣을 수 있는 무기다"
      },
      
      A3 : {
        name : "하네무쿠로",
        desc : "일본도를 흉내 내어 제작된 외날검<br>무쿠로라는 이름의 흡혈귀가 만든 작품 중 하나로<br>도신에는 「발해」라고 새겨져 있다<br><br>베인에서 보급되는 일반적인 검과는 다른<br>기술로 제작된 것으로, 절단력을 끌어내기 위해선<br>사용자의 기량이 필요하다"
      },
      
      A4 : {
        name : "부동의 붉은 검",
        desc : "“붉은 검”이라는 이명을 가진 루이의 애검<br><br>붉은 도신에는 저주받은 연혈의 기술이 담겨 있어,<br>명혈을 담아 휘두르면 견고한 수비도 무너뜨린다<br><br>야쿠모와 함께, 어떤 흡혈귀에게 받은 물건으로<br>루이의 검 실력에 맞춰 조정이 되어 있다<br>거기에선 제작자의 긍지마저 느껴진다"
      },
      
      A5 : {
        name : "마체테",
        desc : "쇳덩어리나 다름없는 큰도끼<br><br>괴짜 기술자들의 제작소에서 만들어진<br>무기로, 한손검의 휴대성과 양손검의 위력을<br>결합하는 것을 목적으로 제작되었다<br><br>한손검치고는 대단히 무거우며, 진가를 발휘하려면<br>상당한 완력이 필요해, 다룰 수 있는 자가 드물다"
      },
      
      A6 : {
        name : "백랑의 검",
        desc : "치안 유지 부대 서버러스가 다루는 백금의 한손검<br><br>연혈 발동 기구를 갖췄으면서 중량도 평균적인,<br>양산품이지만 높은 수준을 자랑하는 무기<br><br>퀸 토벌전을 경험한 자로 결성된 치안 유지 부대는<br>고도의 훈련을 받은 전투 집단으로, 그 무구는<br>사용자의 능력이 뛰어날 수록 진가를 발휘한다"
      },
      
      A7 : {
        name : "조해의 화염검",
        desc : "조해의 계승자가 지니고 있던 장검<br><br>도신에 깃든 불꽃은 검을 휘두를 때마다<br>홍련의 궤적을 그리며 폭염을 일으킨다<br><br>신해의 힘으로 생겨난 그것은, 계승자의<br>뜻에 의해 만들어졌다고 하나, 이 한 자루에<br>담겨있는 것은 과연 어떠한 의지였던 것일까"
      },
      
      A8 : {
        name : "프로스트 블러드",
        desc : "미도의 꼭두각시가 된 얼음검의 종자의 자돌검 <br><br>가느다란 도신에 냉기의 연혈 발동 기구를 갖춰,<br>순식간에 얼음의 창을 만들어낸다<br><br>서버러스 내에서도 최상급 기량을 지닌 병사에게<br>주어졌던 원오프 무기로,<br>만족스럽게 다루려면 뛰어난 기술이 요구된다"
      },
      
      A9 : {
        name : "낙일의 검",
        desc : "독기의 침식으로 변모해버린 여왕 토벌대의 검<br><br>이전엔 검게 빛나던 도신은, 뒤틀리고 색이 바래<br>무기로서의 성능마저 변화하였다<br><br>퀸의 독기는 모든 것을 침식하고 변모시키며,<br>그것은 무기질이라도 예외는 아니다. 좋아서<br>이 무기를 드는 이는 없지만, 성능에 문제는 없다"
      },
      
      A10 : {
        name : "흑의의 곡도",
        desc : "칠흑의 도신을 가진 외날검<br><br>살을 도려내기 위한 굴곡진 날을 가졌으며,<br>사용자의 기량에 따라 그 성능이 더욱 강해진다<br><br>흑의의 사냥꾼이 지닌 무기는, 사용자의 부담을<br>고려하지 않았다. 따라서 절대적인 위력을 자랑하는<br>만큼 사용자에게 상당한 능력을 요구한다"
      },
      
      A11 : {
        name : "엑스큐셔너",
        desc : "관의 감시자, 잭의 한손검<br><br>날카롭게 단련된 날은 여전히 날이 빠지지 않았으며,<br>파고 든 후의 일격은 치명적인 참격이 된다<br><br>내력은 알 수 없지만 흑의의 사냥꾼들의 무기를 토대로<br>커스텀되었으며, 손질된 칼날에서는<br>관의 감시자의 말 못 할 과거를 엿볼 수 있다"
      },
      
      A12 : {
        name : "타락한 브로드 소드",
        desc : "타귀가 된 흡혈귀가 손에 든 한손검<br><br>독기의 영향을 받은 그것은, 원래의 무기하고는<br>다른 성질을 가지고 있다<br><br>타귀와 싸우기 위해 만들어졌음에도, 타락해서<br>흡혈귀의 피를 마시게 된 얄궂은 무기. 그러나<br>이런 무기는 베인에서는 흔해빠진 것이다"
      },
      
      A13 : {
        name : "진홍의 장검",
        desc : "자제심이 강한 신식자가 손에 쥔 장검<br>을 본따 만든 한손검<br><br>연혈 발동 기구를 갖춰 연혈의 날을 날리는<br>특수 공격으로 중거리 공격이 가능하다<br><br>고인 피가 튀어오르는 전장에서<br>신을 죽이는 붉은 칼은 더욱 선명하게 빛난다"
      },
      
      // Hellfire Knight DLC
      A14 : {
        name : "겁화의 철관",
        desc : "겁화로 인해 변질된 봉 무기<br><br>독기에 노출됐던 철관이<br>겁화를 머금고 변화를 거친 이색의 존재<br><br>힘든 시련을 통과한 자만이<br>손에 넣을 수 있다"
      },
      
      A15 : {
        name : "작검 인페르노",
        desc : "겁화에 더럽혀진 외날검<br><br>높은 완력 보정을 가졌음에도<br>무게가 가벼운 것이 특징이다<br><br>검붉게 타버린 도신에 화염이 깃들었으며,<br>모으기 강공격으로 화염 속성을 부여한다"
      },
      
      // Frozen Empress DLC
      A16 : {
        name : "얼음꽃의 철관",
        desc : "얼음꽃으로 인해 변질된 봉 무기<br><br>독기에 노출됐던 철관이<br>얼음꽃을 머금고 변화를 거친 이색의 존재<br><br>힘든 시련을 통과한 자만이<br>손에 넣을 수 있다"
      },
      
      // Lord of Thunder DLC
      A17 : {
        name : "천둥의 철관",
        desc : "천둥으로 인해 변질된 봉 무기<br><br>독기에 노출됐던 철관이<br>천둥을 머금고 변화를 거친 이색의 존재<br><br>힘든 시련을 통과한 자만이<br>손에 넣을 수 있다"
      },
      
      A18 : {
        name : "무쌍의 철관",
        desc : "최강이라는 이름이 어울리는 자에게만<br>주어지는 봉 무기<br><br>무적의 흡혈귀에게 더 이상의 어금니는<br>필요없다. 이 무기는 강자의 명예를<br>칭송하기 위해서만 존재하는 것이다"
      },
      
      A19 : {
        name : "뇌정검",
        desc : "천둥에 더럽혀진 한손검<br><br>다소 무겁지만, 가드 성능이 뛰어나고<br>재주 정신 보정이 높은 것이 특징<br><br>속에 품은 푸른 전격이 아름답게 빛을 내며<br>모으기 강공격으로 전기 속성을 부여한다"
      },
      
      
      // # TWO-HANDED SWORDS #
      B0 : {
        name : "여왕 토벌대의 양손검",
        desc : "퀸 토벌을 위해 양산되어<br>토벌군 흡혈귀에게 지급된 양손검<br><br>퀸의 육체를 잘라낼 목적으로 설계되었으며,<br>도신을 있는 그대로 때려박으면<br>타귀를 죽이기에도 충분한 위력을 발휘한다"
      },
      
      B1 : {
        name : "츠바이헨더",
        desc : "임시총독부에서 양산된 장대한 양손검<br><br>거대한 타귀를 토벌하기 위해 제작되어<br>대단히 튼튼하며, 가드 성능도 뛰어나다<br><br>명혈 전도 기구를 유닛화 하여 무기 구조체에<br>내장한 기술은, 퀸 토벌전 이후의 기술적<br>피드백 덕분이다"
      },
      
      B2 : {
        name : "나기무쿠로",
        desc : "참마도를 흉내내 제작된 거대한 검<br>무쿠로라는 이름의 흡혈귀가 만든 작품 중 하나로<br>도신에는 「체해」라고 새겨져있다<br><br>휘어있는 거대한 도신은 쓸어내듯이<br>휘두르는 것에 어울리며, 파고 든 후의 일섬은<br>돌풍을 일으킬 정도의 압력을 가한다"
      },
      
      B3 : {
        name : "귀신 잡는 대태도",
        desc : "수많은 사선을 넘어온 야쿠모의 애검<br><br>베인에 있는 무기들하고는 다른 제작법으로<br>만들어져, 중량 무기이면서도 파고들어<br>베어내는 검법을 상정하고 있다<br><br>루이와 함께 구해낸 흡혈귀가 건네준 물건으로,<br>야쿠모의 손에 딱 맞게 개량되었다"
      },
      
      B4 : {
        name : "이형의 저주검",
        desc : "늘어선 송곳니 같은 칼날을 가진 양손검<br><br>거대한 타귀의 몸을 잘라내어 만든 무기로,<br>도신에 남은 이형의 힘으로<br>강공격 시에 연혈과 흡사한 공격을 쓴다<br><br>불길한 도신은 약간의 열기를 품고 있으며,<br>피에 굶주려 남모르게 꿈틀거리고 있다고 한다"
      },
      
      B5 : {
        name : "흑의의 대검",
        desc : "칠흑의 사복도신을 가진 외날의 양손검<br><br>연달아 휘어진 날은 사냥감의 사지를 잡아<br>찢어발기기 위해 만들어졌다<br><br>흑의의 사냥꾼이 지닌 무기는, 사용자의 부담을<br>고려하지 않았다. 따라서 절대적인 위력을 자랑하는<br>만큼 사용자에게 상당한 능력을 요구한다"
      },
      
      B6 : {
        name : "백랑왕의 대검",
        desc : "폭주한 실바가 손에 든<br>금색의 양손검<br><br>신해의 힘에 영향을 받아, 직선상으로<br>강력한 참격을 방출한다<br><br>힘에 삼켜졌음에도 아름답고 강인한 외형을 남긴 검은<br>소유자가 가진 왕자의 자질을 보여주는 것일까"
      },
      
      B7 : {
        name : "심판의 칼",
        desc : "심연에 가까운 탐구심과 욕망에 삼켜진 흡혈귀,<br>미도가 만든 양손검<br><br>독자적인 변형 기구로 고출력의 연혈 칼날을<br>생성해, 심상치 않은 파괴력을 보여준다<br><br>지나칠 정도로 위력을 숨겨온 이유는,<br>실바와의 결전을 상정했기 때문으로 추측된다"
      },
      
      B8 : {
        name : "낙일의 양손검",
        desc : "독기의 침식으로 변모해버린 여왕 토벌대의 양손검<br><br>이전엔 검게 빛나던 도신은, 뒤틀리고 색이 바래<br>무기로서의 성능마저 변화하였다<br><br>퀸의 독기는 모든 것을 더럽히고 변모시키며,<br>그것은 무기질이라도 예외는 아니다. 좋아서<br>이 무기를 드는 이는 없지만, 성능에 문제는 없다"
      },
      
      B9 : {
        name : "타락한 츠바이헨더",
        desc : "타귀가 된 흡혈귀가 손에 든 대검<br><br>독기의 영향을 받은 그것은<br>원래의 무기하고는 다른 성질을 가지고 있다<br><br>타귀와 싸우기 위해 만들어졌음에도, 타락해서<br>흡혈귀의 피를 마시게 된 얄궂은 무기. 그러나<br>이런 무기는 베인에서는 흔해빠진 것이다"
      },
      
      B10 : {
        name : "백랑의 호검",
        desc : "치안 유지 부대 서버러스가 다루는 백금의 양손검<br><br>내리치는 식으로 다루는 중량 무기이면서도,<br>연혈 발동 기구를 갖춰 중거리 전투도 가능하다<br><br>퀸 토벌전을 경험한 자로 결성된 치안 유지 부대는<br>고도의 훈련을 받은 전투 집단으로, 그 무구는<br>사용자의 능력이 뛰어날 수록 진가를 발휘한다"
      },
      
      B11 : {
        name : "백아의 대검",
        desc : "숙명을 짊어진 신식자가 손에 쥔<br>거대한 톱을 본따 만든 양손검<br><br>힘을 실으면 푸른 빛을 발하는 강력한<br>내리치기를 사용한다<br><br>신조차 삼키는 톱날은, 사납게 빛을 내며<br>타락한 흡혈귀를 쓸어버릴 것이다"
      },
      
      // Hellfire Knight DLC
      B12 : {
        name : "역린의 그램",
        desc : "겁화에 더럽혀진 양손검<br><br>다소 무겁지만, 공격력과 가드 성능이<br>뛰어나며 재주 보정이 높은 것이 특징<br><br>불타버린 도신에는 아직도 열이 남아있으며,<br>모으기 강공격으로 화염 속성을 부여한다"
      },
      
      // Frozen Empress DLC
      B13 : {
        name : "빙창의 대검",
        desc : "얼음꽃에 더럽혀진 양손검<br><br>다소 무겁지만, 가드 성능이 뛰어나며<br>의지 보정이 높다<br><br>하얗게 얼어붙은 도신엔<br>절대영도의 힘이 있으며,<br>모으기 강공격으로 얼음 속성을 부여한다"
      },
      
      
      // # HALBERDS #
      C0 : {
        name : "여왕 토벌대의 도끼창",
        desc : "퀸 토벌을 위해 양산되어<br>토벌군 흡혈귀에게 지급된 도끼창<br><br>파괴력과 편이성을 갖춘 무기로<br>설계되었으며, 강대한 타귀를 상대하는<br>최전선의 병사에게 우선적으로 지급되었다"
      },
      
      C1 : {
        name : "바디시",
        desc : "임시총독부에서 양산된 자루가 긴 반월검<br><br>끝이 심플한 형태를 하고 있어, 힘을 실어<br>휘두르는 것 만으로 충분한 성능을 낼 수 있다<br><br>임시총독부의 무기는 일반 흡혈귀가 타귀로부터<br>몸을 지킬 수 있도록 지급한 물건이다. 재질은<br>검소하지만, 타귀를 죽이기에는 충분한 성능이다"
      },
      
      C2 : {
        name : "솔리드 피어서",
        desc : "끝부분이 예리한 가느다란 창<br><br>사람 키를 넘는 길이를 자랑하지만 재질이 가벼워<br>재빠르게 파고들어 찌를 수 있다<br><br>괴짜 기술자들이 심혈을 기울여 만든 무기는<br>하나같이 다루기 어려워 세간의 평판은 별로지만,<br>변덕 삼아 남는 재료로 만든 이 창은 인기가 높다"
      },
      
      C3 : {
        name : "양단의 가넷",
        desc : "은색과 적색의 중후감 있는 색조 덕분에<br>붉은 보석의 이름이 붙여진 도끼창<br><br>소형의 연혈 발동 기구가 내장되어<br>휘두르면 주변을 쓸어내는 칼날을 방출한다<br><br>귀족 사상을 가진 흡혈귀 일파가 만든 무구이며,<br>화려한 외형이면서도 무기로써의 성능이 뛰어나다"
      },
      
      C4 : {
        name : "뎀메룬그",
        desc : "순수한 소녀, 이오가 다루는 도끼창<br><br>이오를 위해 무라사메가 조정했으며,<br>휘두르면 방어를 높여주는 연혈이 발동한다<br><br>뜻을 가지고 길을 개척해, 손에 쥐는 것은<br>잃어버린 과거의 자신인가,<br>미래를 이어가는 동료들과의 추억인가"
      },
      
      C5 : {
        name : "흑의의 도끼창",
        desc : "칠흑의 도신을 가진 도끼창<br><br>낫처럼 휘어진 거대한 날은<br>타귀의 목을 치기 위한 것이다<br><br>흑의의 사냥꾼이 지닌 무기는, 사용자의 부담을<br>고려하지 않았다. 따라서 절대적인 위력을 자랑하는<br>만큼 사용자에게 상당한 능력을 요구한다"
      },
      
      C6 : {
        name : "침투하는 참수낫",
        desc : "거대 바람 구멍에 숨어사는 처형인의 참수낫<br><br>액체를 만드는 연혈의 힘을 품고 있어<br>휘두르면 물기둥을 발생시킨다<br><br>강대한 타귀의 유물은 결코 망가지지 않으며,<br>그 힘을 남긴 채 다음 소유자에게 전해진다고 한다<br>그것은 마지막으로 남긴 삶에 대한 집착인 것일까"
      },
      
      C7 : {
        name : "낙일의 도끼창",
        desc : "독기의 침식으로 변모해버린 여왕 토벌대의 도끼창<br><br>이전엔 검게 빛나던 창끝은, 뒤틀리고 색이 바래<br>무기로서의 성능마저 변화하였다<br><br>퀸의 독기는 모든 것을 더럽히고 변모시키며,<br>그것은 무기질이라도 예외는 아니다. 좋아서<br>이 무기를 드는 이는 없지만, 성능에 문제는 없다"
      },
      
      C8 : {
        name : "타락한 바디시",
        desc : "타귀가 된 흡혈귀가 손에 든 반월도<br><br>독기의 영향을 받은 그것은, 원래의 무기하고는<br>다른 성질을 가지고 있다<br><br>타귀와 싸우기 위해 만들어졌음에도, 타락해서<br>흡혈귀의 피를 마시게 된 얄궂은 무기. 그러나<br>이런 무기는 베인에서는 흔해빠진 것이다"
      },
      
      C9 : {
        name : "파멸의 도끼",
        desc : "치안 유지 부대 서버러스 내에서도<br>강한 힘의 소유자가 다루던 절단무기<br><br>소유자의 타귀화와 함께 이형의 무기가 되어<br>버렸으나, 그 위력은 불길할 정도로 강해져<br>전력의 일격은 모든 방어를 깨부수고 적을 때려눕힌다"
      },
      
      C10 : {
        name : "백랑의 도끼창",
        desc : "치안 유지 부대 서버러스가 다루는 백금의 도끼창<br><br>도끼창으로써의 성능은 더할 나위 없이 뛰어나며,<br>말이 필요 없는 기백을 엿볼 수 있다<br><br>퀸 토벌전을 통해 결성된 치안 유지 부대는<br>고도의 훈련을 받은 전투 집단으로, 그 무구는<br>사용자의 능력이 뛰어날 수록 진가를 발휘한다"
      },
      
      C11 : {
        name : "창궁의 돌격창",
        desc : "큰 소망을 품은 신식자가 손에 쥔 거대한 돌격창<br>을 본따 만든 도끼창<br><br>힘을 실으면 날 끝에서 연혈의 날을 발사해<br>창의 리치 이상의 거리에서 공격이 가능<br><br>신들을 꿰뚫는 푸르고 아름다운 창은<br>그 화려한 섬광으로 타귀를 재로 되돌린다"
      },
      
      // Frozen Empress DLC
      C12 : {
        name : "피보라의 얼음 도끼창",
        desc : "얼음꽃에 더럽혀진 도끼창<br><br>공격력이 세진 않지만 그만큼 가볍고<br>완력 보정이 높은 것이 특징<br><br>아직도 차가움을 잃지 않은 냉기가<br>모으기 강공격으로 얼음 속성을 부여한다"
      },
      
      // Lord of Thunder DLC
      C13 : {
        name : "천둥의 브류나크",
        desc : "천둥에 더럽혀진 도끼창<br><br>공격력과 가드 성능은 낮지만,<br>무게가 가볍고 얻을 수 있는 명혈량이 많다<br><br>전격을 두른 칼날이 푸른 빛을 띠며,<br>모으기 강공격으로 전기 속성을 부여한다"
      },
      
      
      // # HAMMERS #
      D0 : {
        name : "여왕 토벌대의 대형 해머",
        desc : "퀸 토벌을 위해 양산되어<br>토벌군 흡혈귀에게 지급된 대형 해머<br><br>퀸의 사지를 부수는 목적으로 제작되었으나,<br>파괴력을 추구한 결과, 사용자의 숙련도를 따지는<br>신경질적인 무기가 되고 말았다"
      },
      
      D1 : {
        name : "예속의 해머",
        desc : "간소한 돌 해머<br><br>흡혈귀의 무기로서 최소한의 조치만 해둔<br>해머 형태의 돌덩어리<br><br>예속된 흡혈귀가 많이 들고 있는데<br>이 무기에 미약한 소망을 담아 싸우는 것일까…"
      },
      
      D2 : {
        name : "불굴의 대형 해머",
        desc : "피의 갈증을 견디지 못하고 타귀가 되어버린<br>올리버가 사용하던 대형 해머<br><br>제대로 손질되어 있진 않지만 무기로써는<br>충분히 기능하며, 토벌전 당시의 파괴력도 건재하다<br><br>쓰다 버릴 목적으로 노예에게 지급된 무기지만,<br>이것을 받은 자는 약간이나마 희망을 걸었을 것이다"
      },
      
      D3 : {
        name : "헤비 액스",
        desc : "임시총독부에서 양산된 자루가 긴 배틀 액스<br><br>두꺼운 날은 절삭력이 뛰어나지는 않지만,<br>타귀를 때려베기에는 충분한 기능을 갖췄다<br><br>대형 타귀의 토벌을 상정하고 설계되었으나,<br>주거의 확보도 만족스럽지 않은 베인에서는<br>폐옥의 해체나 나무 벌채에까지 이용한다"
      },
      
      D4 : {
        name : "임펄스 앵커",
        desc : "투박하고 단단하게 만들어진 기계식 파괴 망치<br><br>연혈 발동 기구가 발하는 열파를 배기구에서 분출해<br>타격력을 배로 늘린다. 지면을 내리치면<br>지진 수준의 충격파를 발생시키는 위력을 지녔다<br><br>괴짜 기술자들이 혼신을 다해 만들었으며, 일부의<br>흡혈귀는 평생의 파트너로 삼아 애용했다고 한다"
      },
      
      D5 : {
        name : "휴즈 해머",
        desc : "독기로 인해 거체를 얻은 타귀가 손에 든<br>거대한 워해머<br><br>진한 독기로 변질된 타격면은 대단히 단단해,<br>혼신의 일격으로 모든 방어를 깨부순다<br><br>혈루를 찾기 위해 내보내진 노예 흡혈귀가<br>이형의 무기를 다루는 타귀가 되는 일은 드물지 않다"
      },
      
      D6 : {
        name : "백랑의 워해머",
        desc : "치안 유지 부대 서버러스가 다루는 백금의 워해머<br><br>독자적인 중심 조정 덕분에 중형 무기이면서도<br>재빠르게 파고 드는 것이 가능하다<br><br>퀸 토벌전을 경험한 자로 결성된 치안 유지 부대는<br>고도의 훈련을 받은 전투 집단으로, 그 무구는<br>사용자의 능력이 뛰어날수록 진가를 발휘한다"
      },
      
      D7 : {
        name : "폭군 라브리스",
        desc : "희미한 금색으로 빛나는 양날의 배틀 액스<br><br>겉보기보다도 중량이 무거워, 완력에 자신 있는<br>사람이 아니라면 만족스럽게 휘두를 수도 없다<br><br>날과 자루가 금색으로 빛나고 있지만<br>진짜 금은 아니며, 폭군이 탄생한 순간에<br>함께 만들어진 거짓된 황금이다"
      },
      
      D8 : {
        name : "낙일의 대형 워해머",
        desc : "독기의 침식으로 변모해버린 여왕 토벌대의 대형 해머<br><br>이전엔 검게 빛나던 쇳덩어리는, 뒤틀리고 색이 바래<br>무기로서의 성능마저 변화하였다<br><br>퀸의 독기는 모든 것을 더럽히고 변모시키며,<br>그것은 무기질이라도 예외는 아니다. 좋아서<br>이 무기를 드는 이는 없지만, 성능에 문제는 없다"
      },
      
      D9 : {
        name : "불타버린 워해머",
        desc : "격한 화염 속에 노출되어 짓물러진 워해머<br><br>꺼지지 않는 불꽃에 계속 노출된 결과,<br>그 무기는 비탄의 열기를 띠고, 뼈와 살을<br>깨부수고 태워버리는 쇳덩어리가 되었다"
      },
      
      D10 : {
        name : "타락한 헤비 액스",
        desc : "타귀가 된 흡혈귀가 손에 든 배틀 액스<br><br>독기의 영향을 받은 그것은, 원래의 무기하고는<br>다른 성질을 가지고 있다<br><br>타귀와 싸우기 위해 만들어졌음에도, 타락해서<br>흡혈귀의 피를 마시게 된 얄궂은 무기. 그러나<br>이런 무기는 베인에서는 흔해빠진 것이다"
      },
      
      // Hellfire Knight DLC
      D11 : {
        name : "격멸의 화염 망치",
        desc : "겁화에 더럽혀진 워해머<br><br>재주 보정이 특히나 높아<br>물리 공격과 흡혈 성능에 강한 영향을 끼친다<br><br>쇳덩어리에 가득한 겁화는<br>꺾이지 않는 기세를 보이며,<br>모으기 강공격으로 화염 속성을 부여한다"
      },
      
      // Frozen Empress DLC
      D12 : {
        name : "빙설의 샬루아",
        desc : "얼음꽃에 더럽혀진 워해머<br><br>가드 성능이 뛰어나고 무게는 약간 가볍다<br>완력 보정이 높은 것도 특징<br><br>절대영도의 냉기를 품고 있어,<br>모으기 강공격으로 얼음 속성을 부여한다"
      },
      
      
      // # BAYONETS #
      E0 : {
        name : "여왕 토벌대의 총검",
        desc : "퀸 토벌을 위해 양산되어<br>토벌군 흡혈귀에게 지급된 총검<br><br>연혈 발생 기구로 원거리 공격이<br>가능해졌으며, 그 위력도 충분하다<br>특히 근접 전투에 서투른 병사들이 애용했다"
      },
      
      E1 : {
        name : "브로디아",
        desc : "미아가 늘 몸에 지니고 다니던 총검<br><br>경량화가 이루어져 몸집이 작은 미아도 무리없이<br>들고 다닐 수 있도록 고려되어 있다<br><br>여기저기 생겨있는 흠집은 위험으로부터<br>두 생명을 지켜왔다는 증거이며, 꽃의 이름을<br>총에 붙인 것은 감사의 뜻이다"
      },
      
      E2 : {
        name : "라이어트 스매셔",
        desc : "버려진 무기, 쓰레기를 모아서<br>만든 총검<br><br>조잡한 완성도이지만 연혈 발동 기구는 문제없이<br>기능하며, 산탄식 연혈을 사출한다<br><br>베인에 사는 무법자들이 즐겨 사용하며,<br>그 총구는 항상 가진 자를 향해있다"
      },
      
      E3 : {
        name : "바요네트",
        desc : "임시총독부에서 양산된 톱날형 총검<br><br>연혈 발동 기구를 통해,<br>짧지만 광범위한 탄을 발사할 수 있다<br><br>거리의 흡혈귀들은 대다수가 병사로써 훈련을<br>받지 않았으므로, 숙련도가 낮은 자도 유효한<br>운용을 할 수 있도록 설계되었다"
      },
      
      E4 : {
        name : "꿰뚫는 루벨라이트",
        desc : "은색과 적색의 중후감 있는 색조 덕분에<br>붉은 보석의 이름이 붙여진 총검<br><br>아름답게 뻗은 총신에서는<br>사냥감을 추적하듯 휘어지는 탄이 발사된다<br><br>흡혈귀 사회에서 귀족 사상을 가진 일파가 소지한<br>무기이며, 한정된 범위에서 사치를 부린 한 자루이다"
      },
      
      E5 : {
        name : "백랑의 총검",
        desc : "치안 유지 부대 서버러스가 다루는 백금의 총검<br><br>총구를 사이에 둔 2장의 칼날은<br>격한 근접 전투를 상정한 것으로,<br>예리하게 파고들어 찌르는 운용법이 유효하다<br><br>퀸 토벌전을 경험한 자로 결성된 치안 유지 부대는<br>고도의 훈련을 받은 전투 집단으로, 그 무구는<br>사용자의 능력이 뛰어날 수록 진가를 발휘한다"
      },
      
      E6 : {
        name : "플레임 디재스터",
        desc : "미도의 꼭두각시가 된 화염포의 종자의 총기<br><br>화염의 연혈을 증폭시켜 방출하는 기구를 탑재해<br>초고온의 불꽃을 흩뿌린다<br><br>뛰어난 연혈 적성을 평가받은 포수를 위해<br>개발된 병기로, 불꽃의 사출 형태를 자유롭게<br>컨트롤하는 특수 기구가 심어져있다"
      },
      
      E7 : {
        name : "낙일의 총검",
        desc : "독기의 침식으로 변모해버린 여왕 토벌대의 총검<br><br>이전엔 검게 빛나던 총신은, 뒤틀리고 색이 바래<br>무기로서의 성능마저 변화하였다<br><br>퀸의 독기는 모든 것을 더럽히고 변모시키며,<br>그것은 무기질이라도 예외는 아니다. 좋아서<br>이 무기를 드는 이는 없지만, 성능에 문제는 없다"
      },
      
      E8 : {
        name : "흑의의 총검",
        desc : "칠흑의 총신과 도신을 갖춘 총검<br><br>휘어진 날로 그 어떠한 강인한 육체라 해도<br>베어내며, 강렬한 탄환을 발사한다<br><br>흑의의 사냥꾼이 지닌 무기는, 사용자의 부담을<br>고려하지 않았다. 따라서 절대적인 위력을 자랑하는<br>만큼 사용자에게 상당한 능력을 요구한다"
      },
      
      E9 : {
        name : "리베르타도르",
        desc : "관의 감시자, 에바의 총검<br><br>연혈 발동 기구가 커스텀 되어<br>유도성이 높은 탄을 발사한다<br><br>사명을 함께 하는 잭이 에바에게 준 총으로,<br>호신용치고는 과한 위력을 갖춘 것은 운명조차<br>함께 할 그의 각오를 나타낸 것이 아닐까"
      },
      
      E10 : {
        name : "타락한 바요네트",
        desc : "타귀가 된 흡혈귀가 손에 든 총검<br><br>독기의 영향을 받은 그것은, 원래의 무기하고는<br>다른 성질을 가지고 있다<br><br>타귀와 싸우기 위해 만들어졌음에도, 타락해서<br>흡혈귀의 피를 마시게 된 얄궂은 무기. 그러나<br>이런 무기는 베인에서는 흔해빠진 것이다"
      },
      
      // Frozen Empress DLC
      E11 : {
        name : "블러드 스노우",
        desc : "얼음꽃에 더럽혀진 총검<br><br>공격력과 가드 성능은 낮지만,<br>가볍고 얻을 수 있는 명혈량이 많은 것이 특징<br><br>짙은 냉기를 품은 총신은 모으기 강공격으로<br>얼음덩어리를 고속 연사하며,<br>총검에 얼음 속성을 부여한다"
      },
      
      // Lord of Thunder DLC
      E12 : {
        name : "선더볼트",
        desc : "천둥에 더럽혀진 총검<br><br>무게가 가볍고, 직접 공격해도<br>그럴싸한 공격력을 발휘한다<br><br>총신에 깃든 수상쩍은 번갯불이<br>모으기 강공격으로 유도탄을 사출하고<br>도신에 전기 속성을 부여한다"
      }
    },
    
    
    // # 5. BLOOD VEILS #
    blood_veil : {
      // # OGRE #
      A0 : {
        name : "암야의 갈고리",
        desc : "전승의 흡혈귀를 모티브로 한<br>오우거형의 흡혈아장<br><br>흡혈 기구의 성능이 높아, 흡혈의 공격 성능,<br>명혈 흡수량이 뛰어나다<br><br>실용성과 미를 겸비한 높은 코스트의 모델이며,<br>생산수가 한정된 귀중한 물품이다"
      },
      
      A1 : {
        name : "노블 실버",
        desc : "박쥐의 날개를 본딴 외투를 갖춘 흡혈아장<br><br>뼈처럼 보이는 은색 장식에는<br>보조의 연혈 효과를 높여주는 세공이 되어 있다<br><br>미에 중점을 두는 아장 장인이 제작했으나,<br>앞일을 알 수 없는 흡혈귀의 대부분은, 아쉽게도<br>그 사상을 이해하지 못했다"
      },
      
      A2 : {
        name : "GXM 배어리언트",
        desc : "프로텍터와 특수 섬유로 짜여진 흡혈아장<br><br>겉보기로도 알 수 있는 방어 성능을 가졌으며,<br>보조계 연혈의 효과를 높여주는 기능을 가졌다<br><br>과거에 군용 제품을 제작하던 장인의 물건<br>베인에 있어서 화학 섬유와 특수 합금류는<br>희소한 것으로, 이 아장을 지닌 자는 그리 많지 않다"
      },
      
      A3 : {
        name : "흑혈의 리버레이터",
        desc : "너덜거리는 외투를 늘어트린 흡혈아장<br><br>언뜻 보면 미덥지 않지만, 공격의 연혈 효과를 높여주고<br>상태 이상에 대한 유효한 방어 성능을 보인다<br><br>출처를 알 수 없는 아장이며, 빡빡한 조정 탓에<br>오른팔의 변형 기구가 불안정해졌다<br>따라서 운용하려면 보강용 구속천을 빼놓을 수 없다"
      },
      
      A4 : {
        name : "여왕 토벌대 아장/발톱형",
        desc : "퀸 토벌군에게 배치되었던 흡혈아장<br><br>종류를 가리지 않고 연혈의 효과를 보조하지만,<br>견고함에 있어서 약간 불안감이 남는다<br><br>낮은 코스트, 단기간의 양산을 추구한 결과<br>기존의 군용 택티컬 베스트에 흡혈 기구가<br>탑재되어, 전선의 흡혈귀들에게 배치되었다"
      },
      
      A5 : {
        name : "망식의 갈고리",
        desc : "피의 갈증을 버티지 못하고 타귀가 된 흡혈귀에게서<br>회수한 오우거형의 흡혈아장<br>폭주의 영향인지, 내구성이 약화됐지만, 이를<br>보충하고 남는 경이적인 가벼움을 자랑한다<br><br>폭주한 BOR 기생체의 침식으로<br>꺼림칙하게 튀어나온 촉수가, 타귀가 되는 것의<br>공포를 말해주고 있다"
      },
      
      // Hellfire Knight DLC
      A6 : {
        name : "멸망의 슈발리에",
        desc : "겁화에 침식된 흡혈아장<br><br>다소 무겁지만, 대미지 감소율이 높은<br>연혈[음] 사용에 특화된 것이 특징<br><br>과거의 어떠한 기억에도 남아있지 않은<br>이 미지의 아장에는,<br>새로운 가능성이 숨어있다"
      },
      
      // Lord of Thunder DLC
      A7 : {
        name : "트와일라이트 클로",
        desc : "천둥에 침식된 흡혈아장<br><br>적당한 무게와 대미지 감소율이 있고,<br>완력 보정이 높은 것이 특징<br><br>위대한 힘을 얻은 전사는,<br>최강이 되기 위해 이 어금니로<br>투쟁을 반복한다"
      },
      
      
      // # STINGER #
      B0 : {
        name : "암야의 돌격창",
        desc : "전승의 흡혈귀를 모티브로 한<br>스팅거형의 흡혈아장<br><br>같은 모델의 다른 아장에 비해 기동성은 떨어지지만,<br>모든 속성에 대해 높은 내성을 지녔다<br><br>실용성과 미를 겸비한 높은 코스트의 모델이며,<br>생산수가 한정된 귀중한 물품이다"
      },
      
      B1 : {
        name : "흑익의 군장",
        desc : "까마귀의 검은 깃털을 걸친 듯한 흡혈아장<br><br>마술적 디자인대로, 공격의 연혈 효과를<br>높여주는 기능을 지녔다<br><br>암야의 흡혈아장의 프로토타입으로서<br>제작되었지만 더욱 높은 범용성을 방침으로<br>삼았기에, 만들어진 것은 이 한 벌 뿐이다"
      },
      
      B2 : {
        name : "부동의 외투",
        desc : "극지 탐색용 방어구형의 흡혈아장<br><br>무척 움직이기 힘들지만 견고하게 제작되었으며,<br>보조의 연혈 효과를 크게 높여주는 기능을 지녔다<br><br>과거에 혈루를 찾아 극한의 산악을 탐색하고자<br>만들어진 아장이지만, 가혹한 길을 걸어온 끝에 혈루는<br>찾을 수 없었고, 어느샌가 이 아장도 잊혀졌다"
      },
      
      B3 : {
        name : "백은의 의장",
        desc : "백은의 갑주를 몸에 두른 기사와도 같은<br>분위기를 풍기는 흡혈아장<br><br>참격과 찌르기에 대해 높은 방어 성능을 자랑한다<br><br>사라져가는 인간의 감성을 잊지 않고자<br>미를 추구한 아장 장인의 작품. 흡혈귀가 인간의<br>감성을 추구하는 모습은, 결코 드문 일이 아니다"
      },
      
      B4 : {
        name : "여왕 토벌대 아장/가시형",
        desc : "퀸 토벌군에게 배치되었던 흡혈아장<br><br>종류를 가리지 않고 연혈의 효과를 보조하지만,<br>견고함에 있어서 약간 불안감이 남는다<br><br>스팅거형은 거리를 두고 싸울 수 있기 때문에<br>집단전에서 유용하지만, 흡혈 기구가 복잡하고<br>코스트적인 문제가 있어 생산수는 제한되었다"
      },
      
      // Hellfire Knight DLC
      B5 : {
        name : "그레이스 프로미넌스",
        desc : "겁화에 침식된 흡혈아장<br><br>경량이며 재주 보정이 높고,<br>대미지 감소율이 높은 것이 특징<br><br>결코 화려한 외형만을 추구하며<br>만든 아장이 아니며, 강함을 추구한<br>끝에 우아함이 생긴 것이다"
      },
      
      // Frozen Empress DLC
      B6 : {
        name : "절대영도의 겉옷",
        desc : "얼음꽃에 침식된 흡혈아장<br><br>다소 무겁지만, 대미지 감소율이 높은<br>연혈[음] 사용에 특화된 것이 특징<br><br>전신을 뒤덮는 그 두터운 장비는<br>보는 바와 같이 흡혈귀를 확실하게<br>보호할 것이다"
      },
      
      
      // # HOUNDS #
      C0 : {
        name : "암야의 낭아",
        desc : "전승의 흡혈귀를 모티브로 한<br>하운즈형의 흡혈아장<br><br>높은 수준의 방어 성능을 자랑하며, 싸우는 장소를<br>가리지 않는 높은 안정성을 갖추고 있다<br><br>실용성과 미를 겸비한 높은 코스트의 모델이며,<br>생산수가 한정된 귀중한 물품이다"
      },
      
      C1 : {
        name : "블루 하운즈",
        desc : "심플한 재킷의 모양을 한 흡혈아장<br><br>두드러지는 속성 내성은 없지만,<br>상태 이상에 대해 높은 내성을 지녔다<br><br>입기 편하고 가격이 저렴한 덕분에<br>흡혈귀들에게 인기가 좋다"
      },
      
      C2 : {
        name : "GXL 디펜더",
        desc : "프로텍터와 특수 섬유로 짜여진 흡혈아장<br><br>모든 속성에 대해 높은 내성을 지닌 요새와도<br>같은 옷이지만, 상태 이상에 대한 취약성을 보인다<br><br>과거에 군용 제품을 제작하던 장인의 물건<br>베인에 있어서 화학 섬유와 특수 합금류는<br>희소한 것으로, 이 아장을 지닌 자는 그리 많지 않다"
      },
      
      C3 : {
        name : "헤지호그 포트",
        desc : "강철의 가시로 뒤덮인 흡혈아장<br><br>보기와 달리 방어 성능은 평범하지만,<br>공격의 연혈 위력을 높여주는 기능을 지녔다<br><br>무법자가 아장 장인을 시켜 만들게 한 것이라고 하며,<br>의복으로 다루기엔 곤란한 점이 많다. 그러나 그 위용으로<br>다른 이를 압도할 수 있다면, 이 아장은 그걸로 충분한 것이다"
      },
      
      C4 : {
        name : "하얀 은혜의 로브",
        desc : "수도자를 생각나게 하는 로브형 흡혈아장<br><br>움직이기 힘들고 방어 성능도 미덥지 않지만,<br>보조의 연혈 효과를 크게 끌어올린다<br><br>과거에 신을 숭배하던 흡혈귀 일파가 입던<br>물건이지만, 이걸 걸치고 있던 자들이<br>어디로 사라졌는지는 아무도 모른다"
      },
      
      // Hellfire Knight DLC
      C5 : {
        name : "바이올렛 기어",
        desc : "겁화에 침식된 흡혈아장<br><br>연혈 보정 능력은 떨어지지만<br>무척 가볍고 완력 보정이 뛰어나다<br><br>가벼움을 손에 넣은 하운즈형 아장은<br>들에 풀어놓은 짐승처럼<br>전장을 방약무인하게 날뛴다"
      },
      
      // Lord of Thunder DLC
      C6 : {
        name : "여명의 뇌아",
        desc : "천둥에 침식된 흡혈아장<br><br>다소 무겁지만, 재주와 정신 보정이 높은 것이 특징<br>방어 성능이 뛰어나고 연혈[양] 사용에 특화되었다<br><br>항간에는 과거 최강의 흡혈귀가<br>착용하던 것이라는 소문도 있지만,<br>진위는 밝혀지지 않았다"
      },
      
      
      // # IVY #
      D0 : {
        name : "암야의 가시",
        desc : "전승의 흡혈귀를 모티브로 한<br>아이비형의 흡혈아장<br><br>어떠한 연혈의 효과도 충분히 끌어내며<br>비물리 속성의 방어도 안정된 고성능 외투<br><br>실용성과 미를 겸비한 높은 코스트의 모델이며,<br>생산수가 한정된 귀중한 물품이다"
      },
      
      D1 : {
        name : "화이트 그레이즈",
        desc : "은 세공같은 장식을 박아넣은 흡혈아장<br><br>방어구로서는 불안하지만, 연혈의 효과를<br>크게 끌어내는 효과를 지녔다<br><br>황폐한 베인에서 더 큰 아름다움을 추구한<br>이색적인 작품으로, 흡혈귀들이 잃어버린<br>감성을 형태로 만든 것이라고도 전해진다"
      },
      
      D2 : {
        name : "GXH 어설트",
        desc : "야전용 외투에 흡혈 기구를 넣은 흡혈아장<br><br>기동성을 유지하면서도 높은 물리 방어력을<br>지녔으며, 공격의 연혈 효과를 끌어올린다<br><br>과거에 군용 제품을 제작하던 장인의 물건<br>베인에서 화학 섬유와 특수 합금류는<br>희소한 것으로, 이 아장을 지닌 자는 그리 많지 않다"
      },
      
      D3 : {
        name : "기도하는 자의 숄",
        desc : "정교한 장식과 붉은 천이 특징인 흡혈아장<br><br>겉보기와 달리 어느 정도 방어 능력을 갖췄으며,<br>보조의 연혈 효과를 높여주는 효과를 지녔다<br><br>본래의 주인은 이 아장을 입고 신에게 구원을<br>바랬던 모양이다. 기도 끝에 찾아온 것이<br>무엇이었는지는, 이제는 알 수 없다"
      },
      
      D4 : {
        name : "수어사이드 쏜",
        desc : "가시를 목걸이처럼 늘어뜨린 흡혈아장<br><br>공격의 연혈 효과를 크게 높이는 기능을 지닌<br>한편, 물리 공격에 대해선 무척 약하다<br><br>공격이 최대의 방어라는 설을 구현한 아장으로,<br>그 제작에는 괴짜 무기 기술자가 관여했다는<br>소문도 있다. 따라서 좋아서 쓰는 사람은 별로 없다"
      },
      
      // Frozen Empress DLC
      D5 : {
        name : "환혹의 얼음가시",
        desc : "얼음꽃에 침식된 흡혈아장<br><br>적당한 무게와 대미지 감소율이 있고,<br>재주 보정이 높은 것이 특징<br><br>죽음의 입맞춤을 나눌 상대를 찾는,<br>피에 굶주린 그 날카로운 눈빛이<br>요염한 겉옷 아래에 감춰져 있다"
      },
      
      // Lord of Thunder DLC
      D6 : {
        name : "마스터 스파인스",
        desc : "천둥에 침식된 흡혈아장<br><br>연혈 보정치는 낮지만, 가볍고<br>재주와 의지 보정이 높은 것이 특징<br><br>이 아장을 착용한 흡혈귀는<br>마치 자신에게 날개가 달린 것 같은<br>착각에 사로잡히게 된다"
      }
    },
    
    
    // # 6. TRANSFORMATIONS #
    transform : {
      // # PHYSICAL #
      A0 : {
        name : "경",
        desc : "성질 변경하면 기본 성능이 저하하지만,<br>장비의 중량이 가벼워진다"
      },
      
      A1 : {
        name : "중",
        desc : "성질 변경하면 장비의 중량이 무거워지지만,<br>기본 성능을 향상시킬 수 있다"
      },
      
      A2 : {
        name : "예",
        desc : "성질 변경하면 각 장비와 연혈의 공격 성능이<br>감소하지만, 능력치의 보정 효과가 상승한다"
      },
      
      A3 : {
        name : "연",
        desc : "성질 변경하면 능력치 보정이 대폭으로 저하하지만,<br>공격력과 연혈 성능을 높이는 연혈의 효과가 대폭 상승"
      },
      
      A4 : {
        name : "교",
        desc : "성질 변경하면 각 장비와 연혈의 공격 성능이<br>감소하지만, 흡혈 성능이 상승한다"
      },
      
      
      // # ELEMENTAL #
      B0 : {
        name : "불",
        desc : "성질 변경하면 무기와 연혈의 공격 성능과 능력치<br>보정이 저하하지만, 불 속성에 특화된다"
      },
      
      B1 : {
        name : "얼음",
        desc : "성질 변경하면 무기와 연혈의 공격 성능과 능력치<br>보정이 저하하지만, 얼음 속성에 특화된다"
      },
      
      B2 : {
        name : "전기",
        desc : "성질 변경하면 무기와 연혈의 공격 성능과 능력치<br>보정이 저하하지만, 전기 속성에 특화된다"
      },
      
      
      // # AILMENTS #
      C0 : {
        name : "독",
        desc : "성질 변경하면 공격력과 연혈 성능이<br>저하하는 대신에 상태 이상 베놈에 특화된다"
      },
      
      C1 : {
        name : "비",
        desc : "성질 변경하면 공격력과 연혈 성능이<br>저하하는 대신에 상태 이상 스턴에 특화된다"
      },
      
      C2 : {
        name : "봉",
        desc : "성질 변경하면 공격력과 연혈 성능이<br>저하하는 대신에 상태 이상 배니시에 특화된다"
      },
      
      C3 : {
        name : "정",
        desc : "성질 변경하면 공격력과 연혈 성능이<br>저하하는 대신에 상태 이상 슬로우에 특화된다"
      }
    }
  }
};


// # DO NOT EDIT #
// these are special keys that are language dependent

// mobility key
// converts the translated string into a comparable value
CodeVeinBuilder.status.mobiKey[_lang.na]          = -1;
CodeVeinBuilder.status.mobiKey[_lang.mobi.slow]   = 0;
CodeVeinBuilder.status.mobiKey[_lang.mobi.normal] = 1;
CodeVeinBuilder.status.mobiKey[_lang.mobi.quick]  = 2;
