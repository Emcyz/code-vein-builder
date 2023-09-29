// # DATA FOR SKILLS, ITEMS, ETC. #
/*------------------------------
* 1. BLOOD CODES
* 2. PASSIVE SKILLS
* 3. ACTIVE SKILLS
* 4. WEAPONS
* 5. BLOOD VEILS
* 6. TRANSFORMATIONS
* 7. DATA SETUP
*------------------------------*/


// # 1. BLOOD CODES #
CodeVeinBuilder.data.blood_code = {
  A0 : { // Queenslayer
    image : 'T_BloodCode_Revenant',

    mobility : _lang.mobi.normal,
    weight : 100,

    stats : {
      str : 8,
      dex : 9,
      mnd : 7,
      wil : 6,
      vit : 6,
      for : 5
    },

    ichor : {
      min : 20,
      max : 40
    }
  },
  
  A1 : { // Fighter
    image : 'T_BloodCode_Fighter',

    mobility : _lang.mobi.normal,
    weight : 120,

    stats : {
      str : 8,
      dex : 7,
      mnd : 5,
      wil : 4,
      vit : 3,
      for : 3
    },

    ichor : {
      min : 16,
      max : 36
    }
  },

  A2 : { // Ranger
    image : 'T_BloodCode_Ranger',

    mobility : _lang.mobi.quick,
    weight : 70,

    stats : {
      str : 5,
      dex : 8,
      mnd : 4,
      wil : 5,
      vit : 3,
      for : 5
    },

    ichor : {
      min : 16,
      max : 36
    }
  },
  
  A3 : { // Caster
    image : 'T_BloodCode_Caster',

    mobility : _lang.mobi.normal,
    weight : 98,

    stats : {
      str : 4,
      dex : 5,
      mnd : 7,
      wil : 8,
      vit : 2,
      for : 2
    },

    ichor : {
      min : 30,
      max : 54
    }
  },
  
  A4 : { // Berserker
    image : 'T_BloodCode_Kyosenshi',

    mobility : _lang.mobi.slow,
    weight : 250,

    stats : {
      str : 9,
      dex : 3,
      mnd : 4,
      wil : 4,
      vit : 8,
      for : 8
    },

    ichor : {
      min : 10,
      max : 30
    }
  },
  
  A5 : { // Prometheus
    image : 'T_BloodCode_Prometheus',

    mobility : _lang.mobi.normal,
    weight : 103,

    stats : {
      str : 8,
      dex : 8,
      mnd : 6,
      wil : 6,
      vit : 6,
      for : 9
    },

    ichor : {
      min : 20,
      max : 40
    }
  },
  
  A6 : { // Hunter
    image : 'T_BloodCode_Karyudo',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 5,
      dex : 7,
      mnd : 6,
      wil : 8,
      vit : 6,
      for : 5
    },

    ichor : {
      min : 30,
      max : 50
    }
  },
  
  A7 : { // Mercury
    image : 'T_BloodCode_Mercurius',

    mobility : _lang.mobi.normal,
    weight : 95,

    stats : {
      str : 7,
      dex : 8,
      mnd : 6,
      wil : 6,
      vit : 5,
      for : 6
    },

    ichor : {
      min : 20,
      max : 40
    }
  },
  
  A8 : { // Hermes
    image : 'T_BloodCode_Hermes',

    mobility : _lang.mobi.normal,
    weight : 100,

    stats : {
      str : 7,
      dex : 5,
      mnd : 8,
      wil : 5,
      vit : 6,
      for : 6
    },

    ichor : {
      min : 24,
      max : 50
    }
  },
  
  A9 : { // Darkseeker
    image : 'T_BloodCode_YaminoTankyusha',

    mobility : _lang.mobi.normal,
    weight : 105,

    stats : {
      str : 4,
      dex : 7,
      mnd : 8,
      wil : 8,
      vit : 3,
      for : 3
    },

    ichor : {
      min : 24,
      max : 50
    }
  },
  
  A10 : { // Atlas
    image : 'T_BloodCode_Atlas',

    mobility : _lang.mobi.slow,
    weight : 247,

    stats : {
      str : 10,
      dex : 4,
      mnd : 4,
      wil : 5,
      vit : 10,
      for : 6
    },

    ichor : {
      min : 10,
      max : 30
    }
  },
  
  A11 : { // Assassin
    image : 'T_BloodCode_Assassin',

    mobility : _lang.mobi.quick,
    weight : 58,

    stats : {
      str : 6,
      dex : 8,
      mnd : 4,
      wil : 6,
      vit : 5,
      for : 8
    },

    ichor : {
      min : 10,
      max : 30
    }
  },
  
  A12 : { // Artemis
    image : 'T_BloodCode_Artemis',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 3,
      dex : 8,
      mnd : 6,
      wil : 9,
      vit : 6,
      for : 7
    },

    ichor : {
      min : 30,
      max : 50
    }
  },
  
  A13 : { // Isis
    image : 'T_BloodCode_Isis',

    mobility : _lang.mobi.slow,
    weight : 249,

    stats : {
      str : 5,
      dex : 7,
      mnd : 8,
      wil : 8,
      vit : 6,
      for : 6
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A14 : { // Queen's Ribcage
    image : 'T_BloodCode_JounoRokugai',

    mobility : _lang.mobi.normal,
    weight : 105,

    stats : {
      str : 4,
      dex : 6,
      mnd : 8,
      wil : 9,
      vit : 2,
      for : 3
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A15 : { // Eos
    image : 'T_BloodCode_Eos',

    mobility : _lang.mobi.normal,
    weight : 98,

    stats : {
      str : 7,
      dex : 5,
      mnd : 10,
      wil : 6,
      vit : 9,
      for : 5
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A16 : { // Fionn
    image : 'T_BloodCode_Fionn',

    mobility : _lang.mobi.slow,
    weight : 250,

    stats : {
      str : 9,
      dex : 5,
      mnd : 7,
      wil : 4,
      vit : 7,
      for : 6
    },

    ichor : {
      min : 14,
      max : 34
    }
  },
  
  A17 : { // Queen's Breath
    image : 'T_BloodCode_JounoHaigai',

    mobility : _lang.mobi.normal,
    weight : 95,

    stats : {
      str : 9,
      dex : 4,
      mnd : 9,
      wil : 4,
      vit : 6,
      for : 4
    },

    ichor : {
      min : 28,
      max : 60
    }
  },
  
  A18 : { // Survivor
    image : 'T_BloodCode_Survivor',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 5,
      dex : 9,
      mnd : 6,
      wil : 4,
      vit : 5,
      for : 7
    },

    ichor : {
      min : 24,
      max : 48
    }
  },
  
  A19 : { // Dark Knight
    image : 'T_BloodCode_DarkKnight',

    mobility : _lang.mobi.normal,
    weight : 102,

    stats : {
      str : 9,
      dex : 7,
      mnd : 5,
      wil : 5,
      vit : 6,
      for : 4
    },

    ichor : {
      min : 20,
      max : 40
    }
  },
  
  A20 : { // Scathach
    image : 'T_BloodCode_Scathach',

    mobility : _lang.mobi.normal,
    weight : 99,

    stats : {
      str : 6,
      dex : 8,
      mnd : 7,
      wil : 7,
      vit : 5,
      for : 7
    },

    ichor : {
      min : 30,
      max : 50
    }
  },
  
  A21 : { // Queen's Claw
    image : 'T_BloodCode_JounoSogai',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 8,
      dex : 9,
      mnd : 6,
      wil : 8,
      vit : 2,
      for : 5
    },

    ichor : {
      min : 30,
      max : 50
    }
  },
  
  A22 : { // Harmonia
    image : 'T_BloodCode_Harmonia',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 3,
      dex : 5,
      mnd : 7,
      wil : 10,
      vit : 5,
      for : 5
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A23 : { // Queen's Throat
    image : 'T_BloodCode_JounoKogai',

    mobility : _lang.mobi.quick,
    weight : 63,

    stats : {
      str : 3,
      dex : 3,
      mnd : 10,
      wil : 9,
      vit : 3,
      for : 4
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A24 : { // Heimdall
    image : 'T_BloodCode_Heimdal',

    mobility : _lang.mobi.quick,
    weight : 55,

    stats : {
      str : 6,
      dex : 10,
      mnd : 6,
      wil : 6,
      vit : 5,
      for : 10
    },

    ichor : {
      min : 16,
      max : 40
    }
  },
  
  A25 : { // Hephaestus
    image : 'T_BloodCode_Hephaestus',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 5,
      dex : 9,
      mnd : 5,
      wil : 8,
      vit : 7,
      for : 6
    },

    ichor : {
      min : 20,
      max : 40
    }
  },
  
  A26 : { // Warrior
    image : 'T_BloodCode_Warrior',

    mobility : _lang.mobi.slow,
    weight : 245,

    stats : {
      str : 10,
      dex : 6,
      mnd : 5,
      wil : 7,
      vit : 7,
      for : 2
    },

    ichor : {
      min : 10,
      max : 30
    }
  },
  
  A27 : { // Scout
    image : 'T_BloodCode_Scout',

    mobility : _lang.mobi.quick,
    weight : 60,

    stats : {
      str : 6,
      dex : 9,
      mnd : 7,
      wil : 6,
      vit : 6,
      for : 5
    },

    ichor : {
      min : 24,
      max : 44
    }
  },
  
  A28 : { // Queen
    image : 'T_BloodCode_Queen',

    mobility : _lang.mobi.normal,
    weight : 103,

    stats : {
      str : 6,
      dex : 5,
      mnd : 9,
      wil : 9,
      vit : 6,
      for : 5
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A29 : { // Hades
    image : 'T_BloodCode_Hades',

    mobility : _lang.mobi.slow,
    weight : 250,

    stats : {
      str : 10,
      dex : 7,
      mnd : 5,
      wil : 5,
      vit : 6,
      for : 7
    },

    ichor : {
      min : 14,
      max : 40
    }
  },
  
  A30 : { // Demeter
    image : 'T_BloodCode_Demeter',

    mobility : _lang.mobi.normal,
    weight : 99,

    stats : {
      str : 9,
      dex : 4,
      mnd : 9,
      wil : 6,
      vit : 8,
      for : 2
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A31 : { // Ishtar
    image : 'T_BloodCode_Ishtar',

    mobility : _lang.mobi.normal,
    weight : 100,

    stats : {
      str : 8,
      dex : 5,
      mnd : 9,
      wil : 7,
      vit : 5,
      for : 10
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A32 : { // Harbinger
    image : 'T_BloodCode_Yoyakusha',
    dlc : 1,

    mobility : _lang.mobi.normal,
    weight : 100,

    stats : {
      str : 6,
      dex : 5,
      mnd : 4,
      wil : 5,
      vit : 9,
      for : 8
    },

    ichor : {
      min : 20,
      max : 44
    }
  },
  
  A33 : { // Astrea
    image : 'T_BloodCode_Siromia',
    dlc : 1,

    mobility : _lang.mobi.normal,
    weight : 85,

    stats : {
      str : 5,
      dex : 6,
      mnd : 7,
      wil : 7,
      vit : 4,
      for : 5
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  // Hellfire Knight DLC
  A34 : { // Asclepius
    image : 'DLC/T_BloodCode_DLC_Support',
    dlc : 1,

    mobility : _lang.mobi.normal,
    weight : 110,

    stats : {
      str : 5,
      dex : 5,
      mnd : 5,
      wil : 4,
      vit : 12,
      for : 12
    },

    ichor : {
      min : 24,
      max : 48
    }
  },
  
  A35 : { // Achilles
    image : 'DLC/T_BloodCode_DLC_Dexterity',
    dlc : 1,

    mobility : _lang.mobi.quick,
    weight : 56,

    stats : {
      str : 4,
      dex : 12,
      mnd : 4,
      wil : 3,
      vit : 3,
      for : 12
    },

    ichor : {
      min : 14,
      max : 34
    }
  },
  
  A36 : { // Surt
    image : 'DLC/T_BloodCode_DLC_Hannibal',
    dlc : 1,

    mobility : _lang.mobi.quick,
    weight : 59,

    stats : {
      str : 11,
      dex : 5,
      mnd : 6,
      wil : 6,
      vit : 3,
      for : 11
    },

    ichor : {
      min : 16,
      max : 40
    }
  },
  
  // Frozen Empress DLC
  A37 : { // Pollux
    image : 'DLC/T_BloodCode_DLC_Strength',
    dlc : 1,

    mobility : _lang.mobi.slow,
    weight : 246,

    stats : {
      str : 12,
      dex : 3,
      mnd : 4,
      wil : 4,
      vit : 12,
      for : 3
    },

    ichor : {
      min : 12,
      max : 32
    }
  },
  
  A38 : { // Ymir
    image : 'DLC/T_BloodCode_DLC_Marduk',
    dlc : 1,

    mobility : _lang.mobi.slow,
    weight : 244,

    stats : {
      str : 6,
      dex : 3,
      mnd : 5,
      wil : 11,
      vit : 11,
      for : 6
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  // Lord of Thunder DLC
  A39 : { // Perseus
    image : 'DLC/T_BloodCode_DLC_Intention',
    dlc : 1,

    mobility : _lang.mobi.normal,
    weight : 72,

    stats : {
      str : 3,
      dex : 4,
      mnd : 12,
      wil : 12,
      vit : 4,
      for : 3
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A40 : { // Váli
    image : 'DLC/T_BloodCode_DLC_Vajura',
    dlc : 1,

    mobility : _lang.mobi.normal,
    weight : 101,

    stats : {
      str : 3,
      dex : 11,
      mnd : 11,
      wil : 6,
      vit : 6,
      for : 5
    },

    ichor : {
      min : 26,
      max : 56
    }
  },
  
  A41 : { // Orion
    image : 'DLC/T_BloodCode_DLC_Shooter',
    dlc : 1,

    mobility : _lang.mobi.normal,
    weight : 78,

    stats : {
      str : 3,
      dex : 12,
      mnd : 4,
      wil : 12,
      vit : 3,
      for : 4
    },

    ichor : {
      min : 26,
      max : 46
    }
  }
};
CodeVeinBuilder.data.order.blood_code = [
  'A0', // Queenslayer
  'A1', // Fighter
  'A2', // Ranger
  'A3', // Caster
  'A4', // Berserker
  'A5', // Prometheus
  'A6', // Hunter
  'A7', // Mercury
  'A8', // Hermes
  'A9', // Darkseeker
  'A10', // Atlas
  'A11', // Assassin
  'A12', // Artemis
  'A13', // Isis
  'A14', // Queen's Ribcage
  'A15', // Eos
  'A16', // Fionn
  'A17', // Queen's Breath
  'A18', // Survivor
  'A19', // Dark Knight
  'A20', // Scathach
  'A21', // Queen's Claw
  'A22', // Harmonia
  'A23', // Queen's Throat
  'A24', // Heimdall
  'A25', // Hephaestus
  'A26', // Warrior
  'A27', // Scout
  'A28', // Queen
  'A29', // Hades
  'A30', // Demeter
  'A31', // Ishtar
  'A34', // Asclepius
  'A35', // Achilles
  'A36', // Surt
  'A37', // Pollux
  'A38', // Ymir
  'A39', // Perseus
  'A40', // Váli
  'A41', // Orion
  'A32', // Harbinger
  'A33' // Astrea
];


// # 2. PASSIVE SKILLS #
// Group A = General Boosts
// Group B = Defense Boosts
// Group C = Stat Boosts
// Group D = Focus Boosts
// Group E = Weapon Mastery
// Group F = Misc
CodeVeinBuilder.data.passive = {
  // # GENERAL BOOSTS #
  A0 : { // Health Boost
    image : 'T_Passive_001',
    tree : _lang.tree.light,
    origin : 'A1'
  },

  A1 : { // Health Stimulant
    image : 'T_Passive_062',
    tree : _lang.tree.light,
    origin : 'A26'
  },

  A2 : { // Stamina Boost
    image : 'T_Passive_003',
    tree : _lang.tree.light,
    origin : 'A2'
  },
  
  A3 : { // Stamina Stimulant
    image : 'T_Passive_060',
    tree : _lang.tree.light,
    origin : 'A24'
  },
  
  A4 : { // Sprinter
    image : 'T_Passive_019',
    tree : _lang.tree.light,
    origin : 'A7'
  },
  
  A5 : { // Sharpened Fangs
    image : 'T_Passive_008',
    tree : _lang.tree.dark,
    origin : 'A11'
  },
  
  A6 : { // Tenacious Fang
    image : 'T_Passive_075',
    tree : _lang.tree.light,
    origin : 'rvm101'
  },
  
  A7 : { // Heroic Fang
    image : 'T_Passive_076',
    tree : _lang.tree.light,
    origin : 'A8'
  },
  
  A8 : { // Swift Destruction
    image : 'T_Passive_039',
    tree : _lang.tree.light,
    origin : 'A25'
  },
  
  A9 : { // Survival Instinct
    image : 'T_Passive_073',
    tree : _lang.tree.dark,
    origin : 'A29'
  },
  
  A10 : { // Savvy Evasion
    image : 'T_Passive_010',
    tree : _lang.tree.light,
    origin : 'A5'
  },
  
  A11 : { // Resilient Focus
    image : 'T_Passive_028',
    tree : _lang.tree.light,
    origin : 'A10'
  },
  
  A12 : { // Weapon Drain Rating Up
    image : 'T_Passive_005',
    tree : _lang.tree.dark,
    origin : 'A3'
  },
  
  A13 : { // Avarice
    image : 'T_Passive_037',
    tree : _lang.tree.light,
    origin : 'A25'
  },

  A14 : { // Vow of Ichor
    image : 'T_Passive_042',
    tree : _lang.tree.dark,
    origin : 'A13',
    
    ichor : {
      min : 6,
      max : 6
    }
  },

  A15 : { // Mac Ichor Boost
    image : 'T_Passive_056',
    tree : _lang.tree.dark,
    origin : 'A22',

    ichor : {
      min : 4,
      max : 4
    }
  },
  
  A16 : { // Increased Gift Speed
    image : 'T_Passive_055',
    tree : _lang.tree.light,
    origin : 'A21'
  },
  
  A17 : { // Charge Accelerator
    image : 'T_Passive_079',
    tree : _lang.tree.light,
    origin : 'A24'
  },
  
  A18 : { // Debuff Build-Up
    image : 'T_Passive_083',
    tree : _lang.tree.light,
    origin : 'rvm111'
  },
  
  A19 : { // Revenant's Ambition
    image : 'T_Passive_047',
    tree : _lang.tree.light,
    origin : 'A17',
    
    inc_max_weight : 1.30
  },
  
  A20 : { // Opportunism
    image : 'T_Passive_088',
    tree : _lang.tree.dark,
    origin : 'rvm116'
  },
  
  // Lord of Thunder DLC
  A21 : { // Rush of Blood
    image : 'T_Passive_096',
    tree : _lang.tree.dark,
    origin : 'A41',
    dlc : 1
  },
  
  
  // # DEFENSE BOOSTS #
  B0 : { // Balance Up
    image : 'T_Passive_007',
    tree : _lang.tree.light,
    origin : 'A4'
  },
  
  B1 : { // Deft Parry
    image : 'T_Passive_011',
    tree : _lang.tree.light,
    origin : 'A5'
  },
  
  B2 : { // Guard Drain Rating Up
    image : 'T_Passive_029',
    tree : _lang.tree.light,
    origin : 'A10'
  },
  
  B3 : { // Firm Stand
    image : 'T_Passive_032',
    tree : _lang.tree.light,
    origin : 'A10',
    blood_code_req : 'A10' // Atlas
  },
  
  B4 : { // Blood Grab
    image : 'T_Passive_036',
    tree : _lang.tree.dark,
    origin : 'A12',
    blood_code_req : 'A12' // Artemis
  },
  
  B5 : { // Evasive Snare
    image : 'T_Passive_041',
    tree : _lang.tree.dark,
    origin : 'A25',
    blood_code_req : 'A25' // Hephaestus
  },
  
  B6 : { // Venom Resistance
    image : 'T_Passive_051',
    tree : _lang.tree.light,
    origin : 'A7'
  },
  
  B7 : { // Stun Resistance
    image : 'T_Passive_009',
    tree : _lang.tree.light,
    origin : 'A8'
  },
  
  B8 : { // Inhibit Resistance
    image : 'T_Passive_038',
    tree : _lang.tree.light,
    origin : 'A25'
  },
  
  B9 : { // Slow Resistance
    image : 'T_Passive_018',
    tree : _lang.tree.light,
    origin : 'A7'
  },
  
  B10 : { // Leak Resistance
    image : 'T_Passive_049',
    tree : _lang.tree.light,
    origin : 'A18'
  },
  
  
  // # STAT BOOSTS #
  C0 : { // Strength Up
    image : 'T_Passive_022',
    tree : _lang.tree.light,
    origin : 'A8',

    stats : {
      str : 1
    }
  },
  
  C1 : { // Dexterity Up
    image : 'T_Passive_016',
    tree : _lang.tree.light,
    origin : 'A6',
    
    stats : {
      dex : 1
    }
  },
  
  C2 : { // Mind Up
    image : 'T_Passive_070',
    tree : _lang.tree.light,
    origin : 'A31',
    
    stats : {
      mnd : 1
    }
  },
  
  C3 : { // Willpower Up
    image : 'T_Passive_067',
    tree : _lang.tree.light,
    origin : 'A28',
    
    stats : {
      wil : 1
    }
  },
  
  C4 : { // Vitality Up
    image : 'T_Passive_048',
    tree : _lang.tree.light,
    origin : 'A18',
    
    stats : {
      vit : 1
    }
  },
  
  C5 : { // Fortitude Up
    image : 'T_Passive_044',
    tree : _lang.tree.light,
    origin : 'A16',
    
    stats : {
      for : 1
    }
  },
  
  C6 : { // Strength/Dexterity Up
    image : 'T_Passive_012',
    tree : _lang.tree.light,
    origin : 'A5',
    
    stats : {
      str : 1,
      dex : 1
    }
  },
  
  C7 : { // Strength/Willpower Up
    image : 'T_Passive_054',
    tree : _lang.tree.light,
    origin : 'A20',
    
    stats : {
      str : 1,
      wil : 1
    }
  },

  C8 : { // Strength/Vitality Up
    image : 'T_Passive_030',
    tree : _lang.tree.light,
    origin : 'A10',

    stats : {
      str : 1,
      vit : 1
    }
  },
  
  C9 : { // Dexterity/Willpower Up
    image : 'T_Passive_034',
    tree : _lang.tree.light,
    origin : 'A12',
    
    stats : {
      dex : 1,
      wil : 1
    }
  },
  
  C10 : { // Dexterity/Fortitude Up
    image : 'T_Passive_061',
    tree : _lang.tree.light,
    origin : 'A24',
    
    stats : {
      dex : 1,
      for : 1
    }
  },
  
  C11 : { // Mind/Willpower Up
    image : 'T_Passive_057',
    tree : _lang.tree.light,
    origin : 'A22',
    
    stats : {
      mnd : 1,
      wil : 1
    }
  },
  
  C12 : { // Mind/Vitality Up
    image : 'T_Passive_043',
    tree : _lang.tree.light,
    origin : 'A15',
    
    stats : {
      mnd : 1,
      vit : 1
    }
  },
  
  C13 : { // Mind/Fortitude Up
    image : 'T_Passive_074',
    tree : _lang.tree.light,
    origin : 'A30',
    
    stats : {
      mnd : 1,
      for : 1
    }
  },
  
  // Hellfire Knight DLC
  C14 : { // Strength/Fortitude Up
    image : 'T_Passive_090',
    tree : _lang.tree.light,
    origin : 'A36',
    dlc : 1,
    
    stats : {
      str : 1,
      for : 1
    }
  },
  
  // Frozen Empress DLC
  C15 : { // Willpower/Vitality Up
    image : 'T_Passive_091',
    tree : _lang.tree.light,
    origin : 'A38',
    dlc : 1,
    
    stats : {
      wil : 1,
      vit : 1
    }
  },
  
  // Lord of Thunder DLC
  C16 : { // Dexterity/Mind Up
    image : 'T_Passive_092',
    tree : _lang.tree.light,
    origin : 'A40',
    dlc : 1,
    
    stats : {
      dex : 1,
      mnd : 1
    }
  },
  
  
  // # FOCUS BOOSTS #
  D0 : { // Dark Impulse
    image : 'T_Passive_006',
    tree : _lang.tree.dark,
    origin : 'A3'
  },
  
  D1 : { // Light Impulse
    image : 'T_Passive_069',
    tree : _lang.tree.light,
    origin : 'A31'
  },
  
  D2 : { // Guard Stability
    image : 'T_Passive_004',
    tree : _lang.tree.light,
    origin : 'A2'
  },
  
  D3 : { // Focused Guard
    image : 'T_Passive_046',
    tree : _lang.tree.light,
    origin : 'A16'
  },
  
  D4 : { // Focused Stamina Usage
    image : 'T_Passive_002',
    tree : _lang.tree.light,
    origin : 'A1'
  },
  
  D5 : { // Maintained Focus
    image : 'T_Passive_021',
    tree : _lang.tree.light,
    origin : 'A7'
  },
  
  D6 : { // Focused Carnage
    image : 'T_Passive_024',
    tree : _lang.tree.light,
    origin : 'A8'
  },
  
  D7 : { // Ichor Strikes
    image : 'T_Passive_015',
    tree : _lang.tree.light,
    origin : 'A6'
  },
  
  D8 : { // Ichor Reduction
    image : 'T_Passive_058',
    tree : _lang.tree.dark,
    origin : 'A23',
    blood_code_req : 'A23' // Queen's Throat
  },
  
  D9 : { // Drain Boost
    image : 'T_Passive_064',
    tree : _lang.tree.light,
    origin : 'A0'
  },
  
  D10 : { // Focused Gift Speed
    image : 'T_Passive_033',
    tree : _lang.tree.dark,
    origin : 'A12'
  },
  
  D11 : { // Blood Buff
    image : 'T_Passive_082',
    tree : _lang.tree.dark,
    origin : 'rvm104'
  },
  
  D12 : { // Fire Buff
    image : 'T_Passive_053',
    tree : _lang.tree.dark,
    origin : 'A20'
  },
  
  D13 : { // Ice Buff
    image : 'T_Passive_080',
    tree : _lang.tree.dark,
    origin : 'rvm102'
  },
  
  D14 : { // Lightning Buff
    image : 'T_Passive_081',
    tree : _lang.tree.dark,
    origin : 'rvm103'
  },
  
  D15 : { // Venom Buff
    image : 'T_Passive_026',
    tree : _lang.tree.dark,
    origin : 'A9'
  },
  
  D16 : { // Stun Buff
    image : 'T_Passive_066',
    tree : _lang.tree.dark,
    origin : 'A27'
  },
  
  D17 : { // Goddess's Smile
    image : 'T_Passive_068',
    tree : _lang.tree.light,
    origin : 'A31'
  },
  
  // Frozen Empress DLC
  D18 : { // Ichor Focus
    image : 'T_Passive_094',
    tree : _lang.tree.light,
    origin : 'A38',
    dlc : 1
  },
  
  // Lord of Thunder DLC
  D19 : { // All Stats Up
    image : 'T_Passive_097',
    tree : _lang.tree.light,
    origin : 'A40',
    dlc : 1
  },
  
  D20 : { // Stopping Power
    image : 'T_Passive_095',
    tree : _lang.tree.dark,
    origin : 'A41',
    dlc : 1
  },
  
  
  // # WEAPON MASTERY #
  E0 : { // One-handed Sword Mastery
    image : 'T_Passive_013',
    tree : _lang.tree.light,
    origin : 'A5'
  },
  
  E1 : { // Two-handed Sword Mastery
    image : 'T_Passive_031',
    tree : _lang.tree.light,
    origin : 'A10'
  },
  
  E2 : { // Halberd Mastery
    image : 'T_Passive_052',
    tree : _lang.tree.light,
    origin : 'A19'
  },
  
  E3 : { // Hammer Mastery
    image : 'T_Passive_045',
    tree : _lang.tree.light,
    origin : 'A16'
  },
  
  E4 : { // Bayonet Mastery
    image : 'T_Passive_035',
    tree : _lang.tree.light,
    origin : 'A12'
  },
  
  
  // # MISC #
  F0 : { // Regeneration Shift
    image : 'T_Passive_059',
    tree : _lang.tree.light,
    origin : 'A24'
  },
  
  F1 : { // Improved Regeneration
    image : 'T_Passive_063',
    tree : _lang.tree.light,
    origin : 'A26'
  },
  
  F2 : { // Augmented Regeneration
    image : 'T_Passive_065',
    tree : _lang.tree.light,
    origin : 'A27'
  },
  
  F3 : { // Torchbearer
    image : 'T_Passive_084',
    tree : _lang.tree.light,
    origin : 'A33',
    dlc : 1,
    blood_code_req : 'A33' // Astrea
  },
  
  F4 : { // Life Steal
    image : 'T_Passive_050',
    tree : _lang.tree.dark,
    origin : 'A18'
  },
  
  F5 : { // Regenerative Drain
    image : 'T_Passive_072',
    tree : _lang.tree.dark,
    origin : 'A29'
  },
  
  F6 : { // Eternal Blade Dance
    image : 'T_Passive_014',
    tree : _lang.tree.light,
    origin : 'A5',
    blood_code_req : 'A5' // Prometheus
  },
  
  F7 : { // Blood-draining Venom
    image : 'T_Passive_027',
    tree : _lang.tree.dark,
    origin : 'A9',
    blood_code_req : 'A9' // Darkseeker
  },
  
  F8 : { // Revenant's Hunger
    image : 'T_Passive_020',
    tree : _lang.tree.light,
    origin : 'A7'
  },
  
  F9 : { // Revenant's Greed
    image : 'T_Passive_023',
    tree : _lang.tree.light,
    origin : 'A8'
  },
  
  F10 : { // Pioneer's Guidance
    image : 'T_Passive_040',
    tree : _lang.tree.light,
    origin : 'A25'
  },
  
  F11 : { // Fall Damage Reduction
    image : 'T_Passive_025',
    tree : _lang.tree.dark,
    origin : 'A9'
  },
  
  F12 : { // Deliverance
    image : 'T_Passive_071',
    tree : _lang.tree.light,
    origin : 'A31',
    blood_code_req : 'A31' // Ishtar
  },
  
  F13 : { // Tirelessness
    image : 'T_Passive_085',
    tree : _lang.tree.light,
    origin : 'rvm115'
  },
  
  F14 : { // Bolster
    image : 'T_Passive_086',
    tree : _lang.tree.light,
    origin : 'rvm113'
  },
  
  F15 : { // Revenant Dagger
    image : 'T_Passive_087',
    tree : _lang.tree.dark,
    origin : 'rvm117'
  },
  
  F16 : { // Complete Attention
    image : 'T_Passive_089',
    tree : _lang.tree.light,
    origin : 'rvm114'
  },
  
  F17 : { // Charisma
    image : 'T_Passive_093',
    tree : _lang.tree.light,
    origin : 'rvm124' // Tower of Trials I
  }
};
CodeVeinBuilder.data.order.passive = [
  'A0', // Health Boost
  'A1', // Health Stimulant
  'A2', // Stamina Boost
  'A3', // Stamina Stimulant
  'A4', // Sprinter
  'A5', // Sharpened Fangs
  'A6', // Tenacious Fang
  'A7', // Heroic Fang
  'A8', // Swift Destruction
  'A9', // Survival Instinct
  'A10', // Savvy Evasion
  'A11', // Resilient Focus
  'A12', // Weapon Drain Rating Up
  'A13', // Avarice
  'A14', // Vow of Ichor
  'A15', // Max Ichor Boost
  'A21', // Rush of Blood
  'A16', // Increased Gift Speed
  'A17', // Charge Accelerator
  'A18', // Debuff Build-Up
  'A19', // Revenant's Ambition
  'B0', // Balance Up
  'B1', // Deft Parry
  'B2', // Guard Drain Rating Up
  'B4', // Blood Grab
  'B5', // Evasive Snare
  'B3', // Firm Stand
  'B6', // Venom Resistance
  'B7', // Stun Resistance
  'B8', // Inhibit Resistance
  'B9', // Slow Resistance
  'B10', // Leak Resistance
  'C0', // Strength Up
  'C1', // Dexterity Up
  'C2', // Mind Up
  'C3', // Willpower Up
  'C4', // Vitality Up
  'C5', // Fortitude Up
  'C6', // Strength/Dexterity Up
  'C7', // Strength/Willpower Up
  'C8', // Strength/Vitality Up
  'C14', // Strength/Fortitude Up
  'C9', // Dexterity/Willpower Up
  'C10', // Dexterity/Fortitude Up
  'C16', // Dexterity/Mind Up
  'C11', // Mind/Willpower Up
  'C12', // Mind/Vitality Up
  'C13', // Mind/Fortitude Up
  'C15', // Willpower/Vitality Up
  'D0', // Dark Impulse
  'D1', // Light Impulse
  'D2', // Guard Stability
  'D3', // Focused Guard
  'D4', // Focused Stamina Usage
  'D5', // Maintained Focus
  'D6', // Focused Carnage
  'D7', // Ichor Strikes
  'D20', // Stopping Power
  'D8', // Ichor Reduction
  'D9', // Drain Boost
  'D10', // Focused Gift Speed
  'D11', // Blood Buff
  'D12', // Fire Buff
  'D13', // Ice Buff
  'D14', // Lightning Buff
  'D15', // Venom Buff
  'D16', // Stun Buff
  'D17', // Goddess's Smile
  'D18', // Ichor Focus
  'D19', // All Stats Up
  'E0', // One-handed Sword Mastery
  'E1', // Two-handed Sword Mastery
  'E2', // Halberd Mastery
  'E3', // Hammer Mastery
  'E4', // Bayonet Mastery
  'F0', // Regeneration Shift
  'F1', // Improved Regeneration
  'F2', // Augmented Regeneration
  'F3', // Torchbearer
  'F4', // Life Steal
  'F5', // Regenerative Drain
  'F7', // Blood-draining Venom
  'F6', // Eternal Blade Dance
  'F8', // Revenant's Hunger
  'F9', // Revenant's Greed
  'F10', // Pioneer's Guidance
  'F11', // Fall Damage Reduction
  'F12', // Deliverance
  'F13', // Tirelessness
  'F14', // Bolster
  'F15', // Revenant Dagger
  'A20', // Opportunism
  'F16', // Complete Attention
  'F17' // Charisma
];


// # 3. ACTIVE SKILLS #
// Group A = Spells
// Group B = Debuffs
// Group C = Buffs
// Group D = Defense Buffs
// Group E = Communal Gifts
// Group F = Misc
CodeVeinBuilder.data.active = {
  // # SPELLS #
  A0 : { // Sonic Arrow
    image : 'T_Ketsugi004',
    tree : _lang.tree.dark,
    origin : 'A2',

    ichor_cost : 1,
    cooldown : 2,
    physical : _lang.attr.pierce
  },

  A1 : { // Blood Shot
    image : 'T_Ketsugi006',
    tree : _lang.tree.dark,
    origin : 'A3',

    required : {
      wil : 5
    },

    ichor_cost : 2,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood,
  },
  
  A2 : { // Sanguine Roar
    image : 'T_Ketsugi129',
    tree : _lang.tree.dark,
    origin : 'A9',

    required : {
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.blood
  },
  
  A3 : { // Blazing Roar
    image : 'T_Ketsugi007',
    tree : _lang.tree.dark,
    origin : 'A3',

    required : {
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A4 : { // Freezing Roar
    image : 'T_Ketsugi127',
    tree : _lang.tree.dark,
    origin : 'A12',

    required : {
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.ice
  },
  
  A5 : { // Plasma Roar
    image : 'T_Ketsugi128',
    tree : _lang.tree.dark,
    origin : 'A13',

    required : {
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.lightning
  },
  
  A6 : { // Blood Spike
    image : 'T_Ketsugi121',
    tree : _lang.tree.light,
    origin : 'A19',

    required : {
      mnd : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood
  },
  
  A7 : { // Flame Spike
    image : 'T_Ketsugi120',
    tree : _lang.tree.light,
    origin : 'A6',
    
    required : {
      mnd : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.fire
  },
  
  A8 : { // Frost Spike
    image : 'T_Ketsugi025',
    tree : _lang.tree.light,
    origin : 'A8',

    required : {
      mnd : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.ice
  },
  
  A9 : { // Lightning Spike
    image : 'T_Ketsugi122',
    tree : _lang.tree.light,
    origin : 'A33',
    dlc : 1,

    required : {
      mnd : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.lightning
  },
  
  A10 : { // Blood Barrage
    image : 'T_Ketsugi116',
    tree : _lang.tree.light,
    origin : 'A27',

    required : {
      wil : 4
    },

    ichor_cost : 4,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood
  },
  
  A11 : { // Flame Barrage
    image : 'T_Ketsugi150',
    tree : _lang.tree.light,
    origin : 'rvm112',

    required : {
      wil : 4
    },

    ichor_cost : 4,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.fire
  },
  
  A12 : { // Ice Barrage
    image : 'T_Ketsugi115',
    tree : _lang.tree.light,
    origin : 'A16',

    required : {
      wil : 4
    },

    ichor_cost : 4,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.ice
  },
  
  A13 : { // Lightning Barrage
    image : 'T_Ketsugi117',
    tree : _lang.tree.light,
    origin : 'rvm105',

    required : {
      wil : 4
    },

    ichor_cost : 4,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.lightning
  },
  
  A14 : { // Vodnik Mass
    image : 'T_Ketsugi134',
    tree : _lang.tree.dark,
    origin : 'A14',

    required : {
      wil : 9
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.crush,
    elemental : _lang.attr.blood
  },
  
  A15 : { // Walpurgis Fire
    image : 'T_Ketsugi135',
    tree : _lang.tree.dark,
    origin : 'A28',

    required : {
      wil : 9
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A16 : { // Baba Yaga's Gaze
    image : 'T_Ketsugi136',
    tree : _lang.tree.dark,
    origin : 'A28',

    required : {
      wil : 9
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.crush,
    elemental : _lang.attr.ice
  },
  
  A17 : { // Rage of Perkunas
    image : 'T_Ketsugi137',
    tree : _lang.tree.dark,
    origin : 'A28',

    required : {
      wil : 9
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.crush,
    elemental : _lang.attr.lightning
  },
  
  A18 : { // Dusk Edge
    image : 'T_Ketsugi052',
    tree : _lang.tree.dark,
    origin : 'A14',

    required : {
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.blood
  },
  
  A19 : { // Crimson Moon
    image : 'T_Ketsugi074',
    tree : _lang.tree.dark,
    origin : 'A20',

    required : {
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.fire
  },
  
  A20 : { // Aurora Flash
    image : 'T_Ketsugi067',
    tree : _lang.tree.dark,
    origin : 'A17',

    required : {
      mnd : 7
    },

    ichor_cost : 5,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.ice
  },
  
  A21 : { // Jupiter's Blade
    image : 'T_Ketsugi123',
    tree : _lang.tree.dark,
    origin : 'rvm107',

    required : {
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.lightning
  },
  
  A22 : { // Execution
    image : 'T_Ketsugi103',
    tree : _lang.tree.dark,
    origin : 'A29',

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 6,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.blood
  },
  
  A23 : { // Fire Storm
    image : 'T_Ketsugi012',
    tree : _lang.tree.dark,
    origin : 'A5',

    required : {
      wil : 4
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A24 : { // Blast Bolt
    image : 'T_Ketsugi048',
    tree : _lang.tree.dark,
    origin : 'A13',

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush,
    elemental : _lang.attr.lightning
  },
  
  A25 : { // Guard of Honor
    image : 'T_Ketsugi043',
    tree : _lang.tree.dark,
    origin : 'A12',

    required : {
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.ice
  },
  
  A26 : { // Dancing Blaze
    image : 'T_Ketsugi046',
    tree : _lang.tree.dark,
    origin : 'A25',

    required : {
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.fire
  },
  
  A27 : { // Draconic Stake
    image : 'T_Ketsugi047',
    tree : _lang.tree.dark,
    origin : 'A13',

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 8,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood
  },
  
  A28 : { // Indra's Coil
    image : 'T_Ketsugi049',
    tree : _lang.tree.dark,
    origin : 'A13',

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 7,
    cooldown : 10,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.lightning
  },
  
  A29 : { // Fourfold Verdict
    image : 'T_Ketsugi050',
    tree : _lang.tree.dark,
    origin : 'A13',

    required : {
      mnd : 7,
      wil : 7
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.lightning
  },
  
  A30 : { // Elder Contract
    image : 'T_Ketsugi053',
    tree : _lang.tree.dark,
    origin : 'A14',

    required : {
      wil : 7
    },

    ichor_cost : 7,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.blood
  },
  
  A31 : { // Ichorous Ice
    image : 'T_Ketsugi054',
    tree : _lang.tree.dark,
    origin : 'A14',

    required : {
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.ice
  },
  
  A32 : { // Twilight
    image : 'T_Ketsugi055',
    tree : _lang.tree.dark,
    origin : 'A14',

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.lightning,
    blood_code_req : 'A14' // Queen's Ribcage
  },
  
  A33 : { // Fire Lily
    image : 'T_Ketsugi079',
    tree : _lang.tree.dark,
    origin : 'A21',

    required : {
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 3,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A34 : { // Sand Edge
    image : 'T_Ketsugi082',
    tree : _lang.tree.dark,
    origin : 'A22',
    
    required : {
      mnd : 5,
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 10,
    physical : _lang.attr.slash
  },
  
  A35 : { // Volatile Storm
    image : 'T_Ketsugi083',
    tree : _lang.tree.dark,
    origin : 'A22',

    required : {
      mnd : 5,
      wil : 7
    },

    ichor_cost : 7,
    cooldown : 10,
    physical : _lang.attr.slash
  },
  
  A36 : { // Arm of Set
    image : 'T_Ketsugi086',
    tree : _lang.tree.dark,
    origin : 'A23',

    required : {
      wil : 7
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.crush
  },
  
  A37 : { // Sands of Depravity
    image : 'T_Ketsugi087',
    tree : _lang.tree.dark,
    origin : 'A23',

    required : {
      wil : 7
    },

    ichor_cost : 8,
    cooldown : 10,
    physical : _lang.attr.slash
  },
  
  A38 : { // Chaotic Ash
    image : 'T_Ketsugi099',
    tree : _lang.tree.dark,
    origin : 'A28',

    required : {
      mnd : 7,
      wil : 7
    },

    ichor_cost : 1,
    cooldown : 30
  },
  
  A39 : { // Purging Thorn
    image : 'T_Ketsugi100',
    tree : _lang.tree.dark,
    origin : 'A28',

    required : {
      mnd : 7,
      wil : 7
    },

    ichor_cost : 10,
    cooldown : 30,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood
  },
  
  A40 : { // Argent Wolf Cross
    image : 'T_Ketsugi102',
    tree : _lang.tree.dark,
    origin : 'A29',

    required : {
      wil : 5
    },

    ichor_cost : 3,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.blood
  },
  
  A41 : { // Shadow Leap
    image : 'T_Ketsugi051',
    tree : _lang.tree.dark,
    origin : 'A13',
    
    ichor_cost : 3,
    cooldown : 2,
    physical : _lang.attr.crush,
    elemental : _lang.attr.blood,
    blood_code_req : 'A13' // Isis
  },
  
  A42 : { // Bloody Impact
    image : 'T_Ketsugi059',
    tree : _lang.tree.light,
    origin : 'A8',

    required : {
      mnd : 5
    },

    ichor_cost : 6,
    cooldown : 8,
    physical : _lang.attr.crush,
    elemental : _lang.attr.blood
  },
  
  A43 : { // Cloak of Winter
    image : 'T_Ketsugi066',
    tree : _lang.tree.light,
    origin : 'A17',

    required : {
      mnd : 7
    },

    ichor_cost : 5,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.ice
  },
  
  A44 : { // Peony Flash
    image : 'T_Ketsugi077',
    tree : _lang.tree.dark,
    origin : 'A20',

    ichor_cost : 5,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire,
    blood_code_req : 'A20' // Scathach
  },
  
  A45 : { // Will-o'-the-Wisp
    image : 'T_Ketsugi098',
    tree : _lang.tree.dark,
    origin : 'A27',

    required : {
      dex : 7,
      wil : 5
    },

    ichor_cost : 3,
    cooldown : 1,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood
  },
  
  A46 : { // Ember Reversal
    image : 'T_Ketsugi075',
    tree : _lang.tree.dark,
    origin : 'A20',

    required : {
      wil : 5
    },

    ichor_cost : 4,
    cooldown : 1,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.fire
  },
  
  A47 : { // Desperate Burst
    image : 'T_Ketsugi152',
    tree : _lang.tree.dark,
    origin : 'A32',
    dlc : 1,

    ichor_cost : 20,
    cooldown : 30,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A48 : { // Rose Flame
    image : 'T_Ketsugi078',
    tree : _lang.tree.dark,
    origin : 'A21',

    required : {
      dex : 7,
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  // Hellfire Knight DLC
  A49 : { // Homing Hellfire
    image : 'T_Ketsugi162',
    tree : _lang.tree.dark,
    origin : 'A36',
    dlc : 1,

    required : {
      wil : 6
    },

    ichor_cost : 8,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A50 : { // Dancing Fireblade
    image : 'T_Ketsugi169',
    tree : _lang.tree.dark,
    origin : 'A36',
    dlc : 1,

    required : {
      wil : 6
    },

    ichor_cost : 5,
    cooldown : 10,
    physical : _lang.attr.slash,
    elemental : _lang.attr.fire
  },
  
  // Frozen Empress DLC
  A51 : { // Hoarfrost Stream
    image : 'T_Ketsugi166',
    tree : _lang.tree.dark,
    origin : 'A38',
    dlc : 1,

    required : {
      wil : 9
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.ice
  },
  
  A52 : { // Frost Turret
    image : 'T_Ketsugi170',
    tree : _lang.tree.dark,
    origin : 'A38',
    dlc : 1,

    required : {
      wil : 9
    },

    ichor_cost : 7,
    cooldown : 20,
    physical : _lang.attr.crush,
    elemental : _lang.attr.ice
  },
  
  // Lord of Thunder DLC
  A53 : { // Meteor Crush
    image : 'T_Ketsugi165',
    tree : _lang.tree.dark,
    origin : 'A39',
    dlc : 1,

    required : {
      wil : 11
    },

    ichor_cost : 10,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A54 : { // Frost Wave
    image : 'T_Ketsugi163',
    tree : _lang.tree.light,
    origin : 'A39',
    dlc : 1,

    required : {
      mnd : 11
    },

    ichor_cost : 5,
    cooldown : 10,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.ice
  },
  
  A55 : { // Field of Thirst
    image : 'T_Ketsugi168',
    tree : _lang.tree.dark,
    origin : 'A39',
    dlc : 1,

    required : {
      wil : 11
    },

    ichor_cost : 2,
    cooldown : 20
  },
  
  A56 : { // Thunderbolt Impact
    image : 'T_Ketsugi158',
    tree : _lang.tree.light,
    origin : 'A40',
    dlc : 1,

    required : {
      mnd : 9
    },

    ichor_cost : 6,
    cooldown : 15,
    physical : _lang.attr.crush,
    elemental : _lang.attr.lightning
  },
  
  
  // # DEBUFFS #
  B0 : { // Venomous Shot
    image : 'T_Ketsugi028',
    tree : _lang.tree.dark,
    origin : 'A9',
    
    required : {
      wil : 5
    },

    ichor_cost : 3,
    cooldown : 8,
    physical : _lang.attr.pierce
  },
  
  B1 : { // Stun Shot
    image : 'T_Ketsugi119',
    tree : _lang.tree.dark,
    origin : 'rvm106',
    
    required : {
      wil : 5
    },

    ichor_cost : 3,
    cooldown : 8,
    physical : _lang.attr.pierce
  },
  
  B2 : { // Slowing Shot
    image : 'T_Ketsugi097',
    tree : _lang.tree.dark,
    origin : 'A27',

    required : {
      wil : 5
    },

    ichor_cost : 3,
    cooldown : 8,
    physical : _lang.attr.pierce
  },
  
  B3 : { // Venomous Web
    image : 'T_Ketsugi142',
    tree : _lang.tree.dark,
    origin : 'rvm108',

    required : {
      dex : 4,
      wil : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce
  },
  
  B4 : { // Stun Web
    image : 'T_Ketsugi143',
    tree : _lang.tree.dark,
    origin : 'rvm109',

    required : {
      dex : 4,
      wil : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce
  },
  
  B5 : { // Slow Web
    image : 'T_Ketsugi145',
    tree : _lang.tree.dark,
    origin : 'rvm110',

    required : {
      dex : 4,
      wil : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce
  },
  
  B6 : { // Shock Web
    image : 'T_Ketsugi040',
    tree : _lang.tree.dark,
    origin : 'A12',

    required : {
      wil : 7
    },

    ichor_cost : 3,
    cooldown : 5,
    physical : _lang.attr.crush
  },
  
  B7 : { // Flames of Rage
    image : 'T_Ketsugi045',
    tree : _lang.tree.dark,
    origin : 'A25',

    required : {
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  B8 : { // Venom Trap
    image : 'T_Ketsugi146',
    tree : _lang.tree.dark,
    origin : 'A9',
    
    required : {
      wil : 5
    },

    ichor_cost : 6,
    cooldown : 20,
    physical : _lang.attr.pierce
  },
  
  B9 : { // Stun Trap
    image : 'T_Ketsugi147',
    tree : _lang.tree.dark,
    origin : 'A11',
    
    required : {
      wil : 5
    },

    ichor_cost : 6,
    cooldown : 20,
    physical : _lang.attr.pierce
  },
  
  B10 : { // Slow Trap
    image : 'T_Ketsugi149',
    tree : _lang.tree.dark,
    origin : 'A27',
    
    required : {
      wil : 5
    },

    ichor_cost : 6,
    cooldown : 20,
    physical : _lang.attr.pierce
  },
  
  B11 : { // Frenzied Fire
    image : 'T_Ketsugi094',
    tree : _lang.tree.dark,
    origin : 'A0',

    ichor_cost : 4,
    cooldown : 2
  },
  
  
  // # BUFFS #
  C0 : { // Blood Weapon
    image : 'T_Ketsugi071',
    tree : _lang.tree.light,
    origin : 'A19',
    
    required : {
      mnd : 4
    },

    ichor_cost : 5,
    cooldown : 5,
    elemental : _lang.attr.blood
  },
  
  C1 : { // Flame Weapon
    image : 'T_Ketsugi014',
    tree : _lang.tree.light,
    origin : 'A5',
    
    required : {
      mnd : 4
    },

    ichor_cost : 5,
    cooldown : 5,
    elemental : _lang.attr.fire
  },
  
  C2 : { // Frost Weapon
    image : 'T_Ketsugi064',
    tree : _lang.tree.light,
    origin : 'A16',
    
    required : {
      mnd : 4
    },

    ichor_cost : 5,
    cooldown : 5,
    elemental : _lang.attr.ice
  },
  
  C3 : { // Lightning Weapon
    image : 'T_Ketsugi114',
    tree : _lang.tree.light,
    origin : 'A7',
    
    required : {
      mnd : 4
    },

    ichor_cost : 5,
    cooldown : 5,
    elemental : _lang.attr.lightning
  },
  
  C4 : { // Venom Mark
    image : 'T_Ketsugi005',
    tree : _lang.tree.dark,
    origin : 'A2',

    required : {
      dex : 5
    },

    ichor_cost : 4,
    cooldown : 30
  },
  
  C5 : { // Numbing Mark
    image : 'T_Ketsugi030',
    tree : _lang.tree.dark,
    origin : 'A11',

    required : {
      dex : 5
    },

    ichor_cost : 4,
    cooldown : 30
  },
  
  C6 : { // Warding Mark
    image : 'T_Ketsugi015',
    tree : _lang.tree.dark,
    origin : 'A5',

    required : {
      dex : 5
    },

    ichor_cost : 4,
    cooldown : 30
  },
  
  C7 : { // Binding Mark
    image : 'T_Ketsugi018',
    tree : _lang.tree.dark,
    origin : 'A6',

    required : {
      dex : 5
    },

    ichor_cost : 4,
    cooldown : 30
  },
  
  C8 : { // Adrenaline
    image : 'T_Ketsugi002',
    tree : _lang.tree.light,
    origin : 'A1',

    required : {
      str : 7
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C9 : { // Bridge to Glory
    image : 'T_Ketsugi023',
    tree : _lang.tree.light,
    origin : 'A15',

    required : {
      mnd : 8
    },

    ichor_cost : 5,
    cooldown : 10
  },
  
  C10 : { // Overdrive
    image : 'T_Ketsugi031',
    tree : _lang.tree.light,
    origin : 'A11',

    required : {
      dex : 5,
      for : 5
    },

    ichor_cost : 5,
    cooldown : 10
  },
  
  C11 : { // Ranged Impact
    image : 'T_Ketsugi017',
    tree : _lang.tree.light,
    origin : 'A6',

    required : {
      dex : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C12 : { // Blow of Madness
    image : 'T_Ketsugi008',
    tree : _lang.tree.light,
    origin : 'A4',

    required : {
      str : 7
    },

    ichor_cost : 5,
    cooldown : 15
  },
  
  C13 : { // Flashing Fang
    image : 'T_Ketsugi037',
    tree : _lang.tree.light,
    origin : 'A10',

    required : {
      str : 9
    },

    ichor_cost : 6,
    cooldown : 20
  },
  
  C14 : { // Merciless Reaper
    image : 'T_Ketsugi033',
    tree : _lang.tree.light,
    origin : 'A11',

    required : {
      dex : 5,
      for : 5
    },

    ichor_cost : 4,
    cooldown : 5
  },
  
  C15 : { // Dark Shout
    image : 'T_Ketsugi085',
    tree : _lang.tree.dark,
    origin : 'A23',

    required : {
      mnd : 5,
      wil : 7
    },

    ichor_cost : 4,
    cooldown : 2
  },
  
  C16 : { // Blade Dance
    image : 'T_Ketsugi013',
    tree : _lang.tree.light,
    origin : 'A5',

    ichor_cost : 10,
    cooldown : 15,
    blood_code_req : 'A5' // Prometheus
  },
  
  C17 : { // Sacrificial Edge
    image : 'T_Ketsugi091',
    tree : _lang.tree.dark,
    origin : 'A24',

    ichor_cost : 10,
    cooldown : 30,
    blood_code_req : 'A24' // Heimdall
  },
  
  C18 : { // Somatic Zeal
    image : 'T_Ketsugi073',
    tree : _lang.tree.light,
    origin : 'A19',

    required : {
      mnd : 4
    },

    ichor_cost : 4,
    cooldown : 5
  },
  
  C19 : { // Cognitive Zeal
    image : 'T_Ketsugi108',
    tree : _lang.tree.light,
    origin : 'cor5',

    required : {
      mnd : 4,
      wil : 4
    },

    ichor_cost : 4,
    cooldown : 5
  },
  
  C20 : { // Precision
    image : 'T_Ketsugi009',
    tree : _lang.tree.light,
    origin : 'A4',

    required : {
      str : 7
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C21 : { // Hunting Feast
    image : 'T_Ketsugi019',
    tree : _lang.tree.light,
    origin : 'A6',

    required : {
      mnd : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C22 : { // Bloodsucking Blades
    image : 'T_Ketsugi042',
    tree : _lang.tree.dark,
    origin : 'A12',

    required : {
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C23 : { // Gift Prowess
    image : 'T_Ketsugi081',
    tree : _lang.tree.dark,
    origin : 'A22',

    required : {
      mnd : 5,
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 30
  },
  
  C24 : { // Gift Extension
    image : 'T_Ketsugi107',
    tree : _lang.tree.light,
    origin : 'A33',
    dlc : 1,

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 8,
    cooldown : 30
  },
  
  C25 : { // Hasten
    image : 'T_Ketsugi016',
    tree : _lang.tree.light,
    origin : 'A5',

    required : {
      dex : 5,
      mnd : 4
    },

    ichor_cost : 10,
    cooldown : 60
  },
  
  C26 : { // Concentration
    image : 'T_Ketsugi032',
    tree : _lang.tree.light,
    origin : 'A11',

    required : {
      for : 5
    },

    ichor_cost : 5,
    cooldown : 30
  },
  
  C27 : { // Red Shoes
    image : 'T_Ketsugi065',
    tree : _lang.tree.light,
    origin : 'A16',

    ichor_cost : 10,
    cooldown : 5,
    blood_code_req : 'A16' // Fionn
  },
  
  C28 : { // Valiant Heart
    image : 'T_Ketsugi070',
    tree : _lang.tree.light,
    origin : 'A18',

    required : {
      mnd : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C29 : { // Morale Boost
    image : 'T_Ketsugi089',
    tree : _lang.tree.light,
    origin : 'A24',

    required : {
      dex : 7,
      mnd : 4,
      for : 7
    },

    ichor_cost : 6,
    cooldown : 30
  },
  
  C30 : { // Time Crunch
    image : 'T_Ketsugi076',
    tree : _lang.tree.dark,
    origin : 'A20',

    required : {
      dex : 5,
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C31 : { // Supernatural Blood
    image : 'T_Ketsugi084',
    tree : _lang.tree.dark,
    origin : 'A22',

    ichor_cost : 10,
    cooldown : 30,
    blood_code_req : 'A22' // Harmonia
  },
  
  C32 : { // Impact Wave
    image : 'T_Ketsugi039',
    tree : _lang.tree.light,
    origin : 'A10',

    required : {
      str : 7,
      vit : 7
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush
  },
  
  C33 : { // Final Journey
    image : 'T_Ketsugi096',
    tree : _lang.tree.light,
    origin : 'A0',
    
    ichor_cost : 10,
    cooldown : '0',
    blood_code_req : 'A0' // Queenslayer
  },
  
  C34 : { // Vigorous Zeal
    image : 'T_Ketsugi178',
    tree : _lang.tree.light,
    origin : 'rvm123', // Tower of Trials II

    required : {
      mnd : 4
    },

    ichor_cost : 4,
    cooldown : 5
  },
  
  // Frozen Empress DLC
  C35 : { // Offensive Order
    image : 'T_Ketsugi177',
    tree : _lang.tree.light,
    origin : 'A34', // Asclepius
    dlc : 1,

    required : {
      for : 11
    },

    ichor_cost : 5,
    cooldown : 30
  },
  
  // Lord of Thunder DLC
  C36 : { // Ichor Efficiency
    image : 'T_Ketsugi160',
    tree : _lang.tree.light,
    origin : 'A41',
    dlc : 1,

    required : {
      wil : 11
    },

    ichor_cost : 5,
    cooldown : 30
  },
  
  
  // # DEFENSE BUFFS #
  D0 : { // Iron Will
    image : 'T_Ketsugi011',
    tree : _lang.tree.light,
    origin : 'A4',
    
    required : {
      for : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  D1 : { // Foulblood Barrier
    image : 'T_Ketsugi035',
    tree : _lang.tree.light,
    origin : 'A10',
    
    required : {
      mnd : 4,
      vit : 7,
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  D2 : { // Ablative Blood
    image : 'T_Ketsugi062',
    tree : _lang.tree.light,
    origin : 'A15',

    ichor_cost : 10,
    cooldown : 30,
    blood_code_req : 'A15' // Eos
  },
  
  D3 : { // Juggernaut
    image : 'T_Ketsugi068',
    tree : _lang.tree.light,
    origin : 'A17',

    ichor_cost : 6,
    cooldown : 30,
    blood_code_req : 'A17' // Queen's Breath
  },
  
  D4 : { // Steady Bulwark
    image : 'T_Ketsugi026',
    tree : _lang.tree.light,
    origin : 'A8',

    required : {
      mnd : 5
    },

    ichor_cost : 5,
    cooldown : 15
  },
  
  D5 : { // Guard Reversal
    image : 'T_Ketsugi038',
    tree : _lang.tree.light,
    origin : 'A10',

    required : {
      vit : 7
    },

    ichor_cost : 4,
    cooldown : 2
  },
  
  D6 : { // Crushing Might
    image : 'T_Ketsugi063',
    tree : _lang.tree.light,
    origin : 'A16',

    required : {
      str : 7
    },

    ichor_cost : 4,
    cooldown : 5
  },
  
  D7 : { // Guard Stability
    image : 'T_Ketsugi069',
    tree : _lang.tree.light,
    origin : 'A18',

    required : {
      mnd : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  D8 : { // Prismatic Veil
    image : 'T_Ketsugi105',
    tree : _lang.tree.light,
    origin : 'A30',

    required : {
      mnd : 6,
      vit : 7
    },

    ichor_cost : 6,
    cooldown : 5
  },
  
  D9 : { // Blood Guard
    image : 'T_Ketsugi003',
    tree : _lang.tree.light,
    origin : 'A1',

    ichor_cost : 4,
    cooldown : 5
  },
  
  D10 : { // Flame Protection
    image : 'T_Ketsugi072',
    tree : _lang.tree.light,
    origin : 'A19',

    required : {
      mnd : 4
    },

    ichor_cost : 4,
    cooldown : 5,
    elemental : _lang.attr.fire
  },
  
  D11 : { // Ice Armor
    image : 'T_Ketsugi041',
    tree : _lang.tree.light,
    origin : 'A12',

    ichor_cost : 4,
    cooldown : 5,
    elemental : _lang.attr.ice
  },
  
  D12 : { // Raijin's Veil
    image : 'T_Ketsugi034',
    tree : _lang.tree.light,
    origin : 'A7',

    required : {
      mnd : 4
    },

    ichor_cost : 4,
    cooldown : 5,
    elemental : _lang.attr.lightning
  },
  
  D13 : { // Elemental Wall
    image : 'T_Ketsugi058',
    tree : _lang.tree.light,
    origin : 'A15',

    required : {
      mnd : 7
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  D14 : { // Royal Heart
    image : 'T_Ketsugi010',
    tree : _lang.tree.light,
    origin : 'A4',

    required : {
      for : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  D15 : { // Dogged Fighter
    image : 'T_Ketsugi036',
    tree : _lang.tree.light,
    origin : 'A10',

    required : {
      vit : 7
    },

    ichor_cost : 5,
    cooldown : 30
  },
  
  D16 : { // Perfect Balance
    image : 'T_Ketsugi092',
    tree : _lang.tree.light,
    origin : 'A26',

    required : {
      wil : 5
    },

    ichor_cost : 4,
    cooldown : 10
  },
  
  D17 : { // Antibody Generation
    image : 'T_Ketsugi057',
    tree : _lang.tree.light,
    origin : 'A15',
    
    required : {
      mnd : 7
    },

    ichor_cost : 6,
    cooldown : 5
  },
  
  D18 : { // Countermeasure
    image : 'T_Ketsugi044',
    tree : _lang.tree.dark,
    origin : 'A25',

    required : {
      dex : 7,
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  D19 : { // Sly Vengeance
    image : 'T_Ketsugi080',
    tree : _lang.tree.dark,
    origin : 'A21',

    ichor_cost : 10,
    cooldown : 30,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire,
    blood_code_req : 'A21' // Queen's Claw
  },
  
  D20 : { // Feral Tenacity
    image : 'T_Ketsugi093',
    tree : _lang.tree.light,
    origin : 'A26',

    required : {
      wil : 7
    },

    ichor_cost : 10,
    cooldown : 30
  },
  
  // Frozen Empress DLC
  D21 : { // Sturdy Body
    image : 'T_Ketsugi164',
    tree : _lang.tree.light,
    origin : 'A37',
    dlc : 1,

    required : {
      vit : 11
    },

    ichor_cost : 5,
    cooldown : 30
  },
  
  D22 : { // Circular Guard
    image : 'T_Ketsugi171',
    tree : _lang.tree.light,
    origin : 'A37',
    dlc : 1,

    required : {
      vit : 11
    },

    ichor_cost : 5,
    cooldown : 15
  },
  
  D23 : { // Defensive Order
    image : 'T_Ketsugi176',
    tree : _lang.tree.light,
    origin : 'A34',
    dlc : 1,

    required : {
      vit : 11
    },

    ichor_cost : 5,
    cooldown : 30
  },

  // # COMMUNAL GIFTS #
  E0 : { // Reckless Abandon
    image : 'Louis/T_BuddyKetsugiLouis00',
    tree : _lang.tree.dark,

    ichor_cost : 20,
    cooldown : 30
  },
  
  E1 : { // Lipinus Vita
    image : 'Yakumo/T_BuddyKetsugiYakumo00',
    tree : _lang.tree.light,

    ichor_cost : 20,
    cooldown : 30
  },
  
  E2 : { // Conviction Spike
    image : 'Io/T_BuddyKetsugiIo00',
    tree : _lang.tree.light,

    ichor_cost : 20,
    cooldown : 30
  },
  
  E3 : { // Blood Awakening
    image : 'Mia/T_BuddyKetsugiMia00',
    tree : _lang.tree.light,

    ichor_cost : 24,
    cooldown : 30
  },
  
  E4 : { // Fatal Surge
    image : 'Jack/T_BuddyKetsugiJack00',
    tree : _lang.tree.dark,

    ichor_cost : 20,
    cooldown : 30
  },
  
  E5 : { // Ephemeral Refrain
    image : 'Eva/T_BuddyKetsugiEva00',
    tree : _lang.tree.dark,

    ichor_cost : 20,
    cooldown : 30
  },
  
  
  // # MISC #
  F0 : { // Restorative Offering
    image : 'T_Ketsugi001',
    tree : _lang.tree.light,

    ichor_cost : 2,
    cooldown : 15
  },
  
  F1 : { // Sympathetic Boon
    image : 'T_Ketsugi056',
    tree : _lang.tree.light,
    origin : 'A15',

    required : {
      mnd : 7
    },
    
    ichor_cost : 2,
    cooldown : 15
  },
  
  F2 : { // Auto Heal
    image : 'T_Ketsugi106',
    tree : _lang.tree.light,
    origin : 'A30',

    ichor_cost : 10,
    cooldown : 30,
    blood_code_req : 'A30' // Demeter
  },
  
  F3 : { // Guardian Aid
    image : 'T_Ketsugi151',
    tree : _lang.tree.light,
    origin : 'A33',
    dlc : 1,

    ichor_cost : 2,
    cooldown : 15,
    blood_code_req : 'A33' // Astrea
  },
  
  F4 : { // Cleansing Light
    image : 'T_Ketsugi095',
    tree : _lang.tree.light,
    origin : 'A0',

    required : {
      mnd : 5,
      vit : 6
    },

    ichor_cost : 10,
    cooldown : 10
  },
  
  F5 : { // Regenerator
    image : 'T_Ketsugi060',
    tree : _lang.tree.light,
    origin : 'A15',

    required : {
      mnd : 7
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  F6 : { // Venom Removal
    image : 'T_Ketsugi113',
    tree : _lang.tree.light,
    origin : 'A7',

    required : {
      mnd : 4
    },

    ichor_cost : 2,
    cooldown : 2
  },
  
  F7 : { // Stun Removal
    image : 'T_Ketsugi110',
    tree : _lang.tree.light,
    origin : 'A8',

    required : {
      mnd : 4
    },

    ichor_cost : 2,
    cooldown : 2
  },
  
  F8 : { // Inhibit Removal
    image : 'T_Ketsugi111',
    tree : _lang.tree.light,
    origin : 'A25',

    required : {
      mnd : 4
    },

    ichor_cost : 2,
    cooldown : 2
  },
  
  F9 : { // Slow Removal
    image : 'T_Ketsugi022',
    tree : _lang.tree.light,
    origin : 'A7',

    required : {
      mnd : 4
    },

    ichor_cost : 2,
    cooldown : 2
  },
  
  F10 : { // Leak Removal
    image : 'T_Ketsugi112',
    tree : _lang.tree.light,
    origin : 'A18',

    required : {
      mnd : 4
    },

    ichor_cost : 2,
    cooldown : 2
  },
  
  F11 : { // Panacea's Essence
    image : 'T_Ketsugi061',
    tree : _lang.tree.light,
    origin : 'A15',

    required : {
      mnd : 7
    },

    ichor_cost : 3,
    cooldown : 5
  },
  
  F12 : { // Blood Sacrifice
    image : 'T_Ketsugi020',
    tree : _lang.tree.dark,
    origin : 'A6',

    required : {
      wil : 5
    },

    ichor_cost : '0',
    cooldown : 2
  },
  
  F13 : { // Disremember
    image : 'T_Ketsugi104',
    tree : _lang.tree.light,
    origin : 'A30',

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 10,
    cooldown : 90
  },
  
  F14 : { // Floating Light
    image : 'T_Ketsugi024',
    tree : _lang.tree.light,
    origin : 'A8',

    ichor_cost : 1,
    cooldown : 2
  },
  
  F15 : { // Vivification
    image : 'T_Ketsugi021',
    tree : _lang.tree.light,
    origin : 'A7',

    required : {
      mnd : 4
    },

    ichor_cost : 10,
    cooldown : 5
  },
  
  F16 : { // Nightstalker
    image : 'T_Ketsugi029',
    tree : _lang.tree.light,
    origin : 'A11',

    required : {
      dex : 5,
      for : 5
    },

    ichor_cost : 6,
    cooldown : 5
  },
  
  F17 : { // Night Fog Veil
    image : 'T_Ketsugi088',
    tree : _lang.tree.light,
    origin : 'A24',

    required : {
      dex : 7,
      wil : 4,
      for : 7
    },

    ichor_cost : 6,
    cooldown : 5
  },
  
  F18 : { // Spoils Spotter
    image : 'T_Ketsugi155',
    tree : _lang.tree.light,
    origin : 'A2',

    ichor_cost : 2,
    cooldown : 5
  },
  
  F19 : { // Active IFF
    image : 'T_Ketsugi157',
    tree : _lang.tree.light,
    origin : 'A6',

    ichor_cost : 1,
    cooldown : 5
  },
  
  F20 : { // Treasure Tracker
    image : 'T_Ketsugi156',
    tree : _lang.tree.light,
    origin : 'A18',

    ichor_cost : 2,
    cooldown : 5
  },
  
  F21 : { // Prize Perception
    image : 'T_Ketsugi154',
    tree : _lang.tree.light,
    origin : 'A27',

    ichor_cost : 4,
    cooldown : 5
  },
  
  F22 : { // Severing Abyss
    image : 'T_ActionKetsugi001',
    tree : _lang.tree.skill,
    origin : 'A24',
    
    weapon_req : ['A', 'C', 'E'], // letter refers to weapon group (see weapon list)
    
    ichor_cost : 6,
    cooldown : 15
  },
  
  F23 : { // Phantom Assault
    image : 'T_ActionKetsugi002',
    tree : _lang.tree.skill,
    origin : 'A5',

    weapon_req : ['A', 'C', 'E'],

    ichor_cost : 3,
    cooldown : 8
  },
  
  F24 : { // Circulating Pulse
    image : 'T_ActionKetsugi003',
    tree : _lang.tree.skill,
    origin : 'A0',

    weapon_req : ['A', 'C', 'E'],

    ichor_cost : 3,
    cooldown : 6
  },
  
  F25 : { // Legion Punisher
    image : 'T_ActionKetsugi004',
    tree : _lang.tree.skill,
    origin : 'A17',

    weapon_req : ['B', 'D'],

    ichor_cost : 5,
    cooldown : 10
  },
  
  F26 : { // Fusillade Rondo
    image : 'T_ActionKetsugi014',
    tree : _lang.tree.skill,
    origin : 'A12',

    weapon_req : ['E'],

    ichor_cost : 7,
    cooldown : 8
  },
  
  F27 : { // Triple Annihilator
    image : 'T_ActionKetsugi005',
    tree : _lang.tree.skill,
    origin : 'A1',

    weapon_req : ['B', 'D'],

    ichor_cost : 5,
    cooldown : 10
  },
  
  F28 : { // Dragon Lunge
    image : 'T_ActionKetsugi006',
    tree : _lang.tree.skill,
    origin : 'A4',

    weapon_req : ['B', 'D'],

    ichor_cost : 6,
    cooldown : 15
  },
  
  F29 : { // Chariot Rush
    image : 'T_ActionKetsugi015',
    tree : _lang.tree.skill,
    origin : 'A19',

    weapon_req : ['C'],

    ichor_cost : 4,
    cooldown : 9
  },
  
  F30 : { // Shifting Hollow
    image : 'T_ActionKetsugi013',
    tree : _lang.tree.skill,
    origin : 'A2',

    weapon_req : ['A', 'B', 'C', 'D', 'E'],

    ichor_cost : 1,
    cooldown : '0.5'
  },
  
  F31 : { // Grave Knocker
    image : 'T_ActionKetsugi007',
    tree : _lang.tree.skill,
    origin : 'A16',

    weapon_req : ['A', 'B', 'C', 'D', 'E'],

    ichor_cost : 3,
    cooldown : 5
  },
  
  F32 : { // Swallow Cutter
    image : 'T_ActionKetsugi009',
    tree : _lang.tree.skill,
    origin : 'A8',

    weapon_req : ['B', 'D'],

    ichor_cost : 5,
    cooldown : 10
  },
  
  F33 : { // Vanishing Hollow
    image : 'T_ActionKetsugi010',
    tree : _lang.tree.skill,
    origin : 'A25',

    weapon_req : ['A', 'B', 'C', 'D', 'E'],

    ichor_cost : 2,
    cooldown : 5
  },
  
  F34 : { // Tormenting Blast
    image : 'T_ActionKetsugi011',
    tree : _lang.tree.skill,
    origin : 'A10',

    weapon_req : ['B', 'D'],

    ichor_cost : 6,
    cooldown : 6
  },
  
  F35 : { // Shadow Assault
    image : 'T_ActionKetsugi012',
    tree : _lang.tree.skill,
    origin : 'A11',

    weapon_req : ['A', 'C', 'E'],

    ichor_cost : 4,
    cooldown : 6
  },
  
  F36 : { // Modest Offering
    image : 'T_Ketsugi179',
    tree : _lang.tree.light,
    origin : 'rvm122', // Tower of Trials III
    
    ichor_cost : 2,
    cooldown : 12
  },
  
  // Hellfire Knight DLC
  F37 : { // Ichor Resonance (Receive)
    image : 'T_Ketsugi173',
    tree : _lang.tree.light,
    origin : 'A34',
    dlc : 1,
    
    required : {
      vit : 11
    },
    
    ichor_cost : 5,
    cooldown : 60
  },
  
  F38 : { // Ichor Resonance (Send)
    image : 'T_Ketsugi174',
    tree : _lang.tree.light,
    origin : 'A34',
    dlc : 1,
    
    required : {
      for : 11
    },
    
    ichor_cost : 5,
    cooldown : 60
  },
  
  F39 : { // Serene Stance
    image : 'T_Ketsugi172',
    tree : _lang.tree.light,
    origin : 'A35',
    dlc : 1,
    
    required : {
      for : 11
    },
    
    ichor_cost : 5,
    cooldown : 10
  },
  
  F40 : { // Invigorating Rush
    image : 'T_Ketsugi167',
    tree : _lang.tree.light,
    origin : 'A35',
    dlc : 1,
    
    required : {
      for : 11
    },
    
    ichor_cost : 6,
    cooldown : 10
  },
  
  F41 : { // Tranquil Slice
    image : 'T_ActionKetsugi020',
    tree : _lang.tree.skill,
    origin : 'A35',
    dlc : 1,
    
    weapon_req : ['A'],
    
    ichor_cost : 7,
    cooldown : 12
  },
  
  F42 : { // Circular Cleaver
    image : 'T_ActionKetsugi019',
    tree : _lang.tree.skill,
    origin : 'A35',
    dlc : 1,
    
    weapon_req : ['A', 'C', 'E'],
    
    ichor_cost : 6,
    cooldown : 10
  },
  
  F43 : { // Savage Dive
    image : 'T_ActionKetsugi022',
    tree : _lang.tree.skill,
    origin : 'A36',
    dlc : 1,
    
    weapon_req : ['A', 'C'],
    
    ichor_cost : 4,
    cooldown : 15
  },
  
  // Frozen Empress DLC
  F44 : { // Steadfast Strike
    image : 'T_ActionKetsugi021',
    tree : _lang.tree.skill,
    origin : 'A37',
    dlc : 1,
    
    weapon_req : ['B', 'D'],
    
    ichor_cost : 6,
    cooldown : 15
  },
  
  F45 : { // Usurper's Blade
    image : 'T_ActionKetsugi018',
    tree : _lang.tree.skill,
    origin : 'A37',
    dlc : 1,
    
    weapon_req : ['C'],
    
    ichor_cost : 6,
    cooldown : 20
  },
  
  // Lord of Thunder DLC
  F46 : { // Zero Recast
    image : 'T_Ketsugi175',
    tree : _lang.tree.light,
    origin : 'A34',
    dlc : 1,

    required : {
      vit : 6,
      for : 6
    },
    
    ichor_cost : 10,
    cooldown : 90
  },
  
  F47 : { // Ichor Regeneration
    image : 'T_Ketsugi159',
    tree : _lang.tree.dark,
    origin : 'A39',
    dlc : 1,

    required : {
      wil : 11
    },
    
    ichor_cost : 4,
    cooldown : 60
  },
  
  F48 : { // Lightning Charge
    image : 'T_ActionKetsugi016',
    tree : _lang.tree.skill,
    origin : 'A40',
    dlc : 1,
    
    weapon_req : ['A', 'B', 'C', 'D', 'E'],
    
    ichor_cost : 2,
    cooldown : 10
  },
  
  F49 : { // Focus Recovery
    image : 'T_Ketsugi161',
    tree : _lang.tree.light,
    origin : 'A41',
    dlc : 1,

    required : {
      dex : 11
    },
    
    ichor_cost : 5,
    cooldown : 20
  },
  
  F50 : { // Radiant Barrel
    image : 'T_ActionKetsugi017',
    tree : _lang.tree.skill,
    origin : 'A41',
    dlc : 1,
    
    weapon_req : ['E'],
    
    ichor_cost : 10,
    cooldown : 15
  }
};
CodeVeinBuilder.data.order.active = [
  'A0', // Sonic Arrow
  'A1', // Blood Shot
  'A2', // Sanguine Roar
  'A3', // Blazing Roar
  'A4', // Freezing Roar
  'A5', // Plasma Roar
  'A6', // Blood Spike
  'A7', // Flame Spike
  'A8', // Frost Spike
  'A9', // Lightning Spike
  'A10', // Blood Barrage
  'A11', // Flame Barrage
  'A12', // Ice Barrage
  'A13', // Lightning Barrage
  'A14', // Vodnik Mass
  'A15', // Walpurgis Fire
  'A16', // Baba Yaga's Gaze
  'A17', // Rage of Perkunas
  'A18', // Dusk Edge
  'A19', // Crimson Moon
  'A20', // Aurora Flash
  'A21', // Jupiter's Blade
  'A22', // Execution
  'A23', // Fire Storm
  'A24', // Blast Bolt
  'A25', // Guard of Honor
  'A26', // Dancing Blaze
  'A27', // Draconic Stake
  'A28', // Indra's Coil
  'A29', // Fourfold Verdict
  'A53', // Meteor Crush
  'A30', // Elder Contract
  'A31', // Ichorous Ice
  'A32', // Twilight
  'A51', // Hoarfrost Stream
  'A33', // Fire Lily
  'A34', // Sand Edge
  'A54', // Frost Wave
  'A35', // Volatile Storm
  'A49', // Homing Hellfire
  'A36', // Arm of Set
  'A37', // Sands of Depravity
  'A38', // Chaotic Ash
  'A55', // Field of Thirst
  'A39', // Purging Thorn
  'A40', // Argent Wolf Cross
  'A41', // Shadow Leap
  'A42', // Bloody Impact
  'A43', // Cloak of Winter
  'A44', // Peony Flash
  'A56', // Thunderbolt Impact
  'A45', // Will-o'-the-Wisp
  'A46', // Ember Reversal
  'A50', // Dancing Fireblade
  'A47', // Desperate Burst
  'A48', // Rose Flame
  'A52', // Frost Turret
  'B0', // Venomous Shot
  'B1', // Stun Shot
  'B2', // Slowing Shot
  'B3', // Venomous Web
  'B4', // Stun Web
  'B5', // Slow Web
  'B6', // Shock Web
  'B7', // Flames of Rage
  'B8', // Venom Trap
  'B9', // Stun Trap
  'B10', // Slow Trap
  'B11', // Frenzied Fire
  'C0', // Blood Weapon
  'C1', // Flame Weapon
  'C2', // Frost Weapon
  'C3', // Lightning Weapon
  'C4', // Venom Mark
  'C5', // Numbing Mark
  'C6', // Warding Mark
  'C7', // Binding Mark
  'C8', // Adrenaline
  'C9', // Bridge to Glory
  'C10', // Overdrive
  'C35', // Offensive Order
  'C11', // Ranged Impact
  'C36', // Ichor Efficiency
  'C12', // Blow of Madness
  'C13', // Flashing Fang
  'C14', // Merciless Reaper
  'C15', // Dark Shout
  'C16', // Blade Dance
  'C17', // Sacrificial Edge
  'C18', // Somatic Zeal
  'C19', // Cognitive Zeal
  'C34', // Vigorous Zeal
  'C20', // Precision
  'C21', // Hunting Feast
  'C22', // Bloodsucking Blades
  'C23', // Gift Prowess
  'C24', // Gift Extension
  'C25', // Hasten
  'C26', // Concentration
  'C27', // Red Shoes
  'C28', // Valiant Heart
  'C29', // Morale Boost
  'C30', // Time Crunch
  'C31', // Supernatural Blood
  'C32', // Impact Wave
  'D21', // Sturdy Body
  'C33', // Final Journey
  'D0', // Iron Will
  'D1', // Foulblood Barrier
  'D2', // Ablative Blood
  'D3', // Juggernaut
  'D23', // Defensive Order
  'D4', // Steady Bulwark
  'D22', // Circular Guard
  'D5', // Guard Reversal
  'D6', // Crushing Might
  'D7', // Guard Stability
  'D8', // Prismatic Veil
  'D9', // Blood Guard
  'D10', // Flame Protection
  'D11', // Ice Armor
  'D12', // Raijin's Veil
  'D13', // Elemental Wall
  'D14', // Royal Heart
  'D15', // Dogged Fighter
  'D16', // Perfect Balance
  'D17', // Antibody Generation
  'D18', // Countermeasure
  'D19', // Sly Vengeance
  'D20', // Feral Tenacity
  'F0', // Restorative Offering
  'F1', // Sympathetic Boon
  'F2', // Auto Heal
  'F3', // Guardian Aid
  'F36', // Modest Offering
  'F4', // Cleansing Light
  'F5', // Regenerator
  'F6', // Venom Removal
  'F7', // Stun Removal
  'F8', // Inhibit Removal
  'F9', // Slow Removal
  'F10', // Leak Removal
  'F11', // Panacea's Essence
  'F12', // Blood Sacrifice
  'F47', // Ichor Regeneration
  'F13', // Disremember
  'F46', // Zero Recast
  'F49', // Focus Recovery
  'F39', // Serene Stance
  'F40', // Invigorating Rush
  'F37', // Ichor Resonance (Receive)
  'F38', // Ichor Resonance (Send)
  'F14', // Floating Light
  'F15', // Vivification
  'F16', // Nightstalker
  'F17', // Night Fog Veil
  'F18', // Spoils Spotter
  'F19', // Active IFF
  'F20', // Treasure Tracker
  'F21', // Prize Perception
  'E0', // Reckless Abandon
  'E1', // Lupinus Vita
  'E2', // Conviction Spike
  'E3', // Blood Awakening
  'E4', // Fatal Surge
  'E5', // Ephemeral Refrain
  'F22', // Severing Abyss
  'F23', // Phantom Assault
  'F24', // Circulating Pulse
  'F25', // Legion Punisher
  'F26', // Fusillade Rondo
  'F27', // Triple Annihilator
  'F28', // Dragon Lunge
  'F29', // Chariot Rush
  'F30', // Shifting Hollow
  'F31', // Grave Knocker
  'F32', // Swallow Cutter
  'F33', // Vanishing Hollow
  'F34', // Tormenting Blast
  'F35', // Shadow Assault
  'F41', // Tranquil Slice
  'F42', // Circular Cleaver
  'F43', // Savage Dive
  'F44', // Steadfast Strike
  'F45', // Usurper's Blade
  'F48', // Lightning Charge
  'F50' // Radiant Barrel
];


// # 4. WEAPONS #
// Group A = One-handed Swords
// Group B = Two-handed Swords
// Group C = Halberds
// Group D = Hammers
// Group E = Bayonets
CodeVeinBuilder.data.weapon = {
  // # ONE-HANDED SWORDS #
  A0 : { // Queenslayer Blade
    image : 'T_WeaponIcon_SingleSword_A',
    
    weight : 35,

    scaling : {
      str : 6,
      dex : 5
    },

    required : {
      str : 4,
      dex : 4
    }
  },

  A1 : { // Pipe of Thralldom
    image : 'T_WeaponIcon_IronPipe',
    
    weight : 5,

    scaling : {
      str : 6,
      dex : 5
    },

    required : {
      str : 4,
      dex : 4
    }
  },
  
  A2 : { // Broadsword
    image : 'T_WeaponIcon_SingleSword_B',
    
    weight : 43,

    scaling : {
      str : 6,
      dex : 5
    },

    required : {
      str : 4
    }
  },
  
  A3 : { // Hanemukuro
    image : 'T_WeaponIcon_SingleSword_C',
    
    weight : 32,

    scaling : {
      str : 5,
      dex : 8
    },

    required : {
      str : 3,
      dex : 6
    }
  },
  
  A4 : { // Enduring Crimson
    image : 'T_WeaponIcon_SingleSword_C_Col2',
    
    weight : 34,

    scaling : {
      str : 7,
      dex : 7
    },

    required : {
      str : 5,
      dex : 5
    }
  },
  
  A5 : { // Machete
    image : 'T_WeaponIcon_SingleSword_D',
    
    weight : 46,

    scaling : {
      str : 7,
      dex : 5
    },

    required : {
      str : 5,
      dex : 3
    }
  },
  
  A6 : { // Argent Wolf Blade
    image : 'T_WeaponIcon_SingleSword_E',
    
    weight : 35,

    scaling : {
      str : 5,
      dex : 5,
      mnd : 2,
      wil : 3
    },

    required : {
      str : 3,
      dex : 3
    }
  },
  
  A7 : { // Blazing Claw
    image : 'T_WeaponIcon_SingleSword_F',
    
    weight : 28,

    scaling : {
      str : 5,
      dex : 9,
      mnd : 5,
      wil : 7
    },

    required : {
      str : 3,
      dex : 7,
      mnd : 3,
      wil : 5
    }
  },
  
  A8 : { // Iceblood
    image : 'T_WeaponIcon_SingleSword_G',
    
    weight : 17,

    scaling : {
      str : 6,
      dex : 8,
      mnd : 7,
      wil : 5
    },

    required : {
      str : 4,
      dex : 6,
      mnd : 5,
      wil : 3
    }
  },
  
  A9 : { // Sunset Sword
    image : 'T_WeaponIcon_SingleSword_K',
    
    weight : 30,

    scaling : {
      str : 5,
      dex : 4
    },

    required : {
      str : 3
    }
  },
  
  A10 : { // Black Saber
    image : 'T_WeaponIcon_SingleSword_L',
    
    weight : 48,

    scaling : {
      str : 9,
      dex : 4
    },

    required : {
      str : 7
    }
  },
  
  A11 : { // Executioner
    image : 'T_WeaponIcon_SingleSword_L',
    
    weight : 38,

    scaling : {
      str : 6,
      dex : 9,
      mnd : 5,
      wil : 5
    },

    required : {
      str : 4,
      dex : 7,
      mnd : 3,
      wil : 3
    }
  },
  
  A12 : { // Lost Broadsword
    image : 'T_WeaponIcon_SingleSword_M',
    
    weight : 40,

    scaling : {
      str : 6,
      dex : 3
    },

    required : {
      str : 4,
      dex : 3
    }
  },
  
  A13 : { // Crimson Longsword
    image : 'T_WeaponIcon_SingleSword_N',
    dlc : 1,
    
    weight : 30,

    scaling : {
      str : 5,
      dex : 5,
      mnd : 5,
      wil : 6
    },

    required : {
      str : 3,
      dex : 3,
      mnd : 3,
      wil : 4
    }
  },
  
  // Hellfire Knight DLC
  A14 : { // Hellfire Pipe
    image : 'T_WeaponIcon_IronPipe_DLCHannnibal',
    dlc : 1,
    
    weight : 5,

    scaling : {
      str : 6,
      dex : 5
    },

    required : {
      str : 4,
      dex : 4
    }
  },
  
  A15 : { // Inferno Blade
    image : 'T_WeaponIcon_SingleSword_DLC_Hannibal',
    dlc : 1,
    
    weight : 33,

    scaling : {
      str : 10
    },

    required : {
      str : 9
    }
  },
  
  // Frozen Empress DLC
  A16 : { // Hoarfrost Pipe
    image : 'T_WeaponIcon_IronPipe_DLCMarduk',
    dlc : 1,
    
    weight : 5,

    scaling : {
      str : 6,
      dex : 5
    },

    required : {
      str : 4,
      dex : 4
    }
  },
  
  // Lord of Thunder DLC
  A17 : { // Thunderbolt Pipe
    image : 'T_WeaponIcon_IronPipe_DLC_Vajura',
    dlc : 1,
    
    weight : 5,

    scaling : {
      str : 6,
      dex : 5
    },

    required : {
      str : 4,
      dex : 4
    }
  },
  
  A18 : { // Pipe of the Unrivaled
    image : 'T_WeaponIcon_IronPipe_Gold',
    dlc : 1,
    
    weight : 5,

    scaling : {
      str : 6,
      dex : 5
    },

    required : {
      str : 4,
      dex : 4
    }
  },
  
  A19 : { // Fulmen Blade
    image : 'T_WeaponIcon_SingleSword_DLC_Vajura',
    dlc : 1,
    
    weight : 45,

    scaling : {
      dex : 10
    },

    required : {
      dex : 9,
      mnd : 7
    }
  },
  
  
  // # TWO-HANDED SWORDS #
  B0 : { // Queenslayer Greatsword
    image : 'T_WeaponIcon_LargeSword_A',
    
    weight : 73,

    scaling : {
      str : 7,
      dex : 4
    },

    required : {
      str : 5
    }
  },
  
  B1 : { // Zweihander
    image : 'T_WeaponIcon_LargeSword_B',
    
    weight : 87,

    scaling : {
      str : 7,
      dex : 2
    },

    required : {
      str : 5
    }
  },
  
  B2 : { // Nagimukuro
    image : 'T_WeaponIcon_LargeSword_C',
    
    weight : 75,

    scaling : {
      str : 6,
      dex : 7
    },

    required : {
      str : 4,
      dex : 5
    }
  },
  
  B3 : { // Oni Bane
    image : 'T_WeaponIcon_LargeSword_C_Col2',
    
    weight : 78,

    scaling : {
      str : 9,
      dex : 1
    },

    required : {
      str : 7
    }
  },
  
  B4 : { // Warped Blade
    image : 'T_WeaponIcon_LargeSword_D',
    
    weight : 72,

    scaling : {
      str : 7,
      dex : 4,
      mnd : 4,
      wil : 4
    },

    required : {
      str : 5
    }
  },
  
  B5 : { // Black Great Sword
    image : 'T_WeaponIcon_LargeSword_E',
    
    weight : 70,

    scaling : {
      str : 8,
      dex : 3,
      mnd : 4,
      wil : 5
    },

    required : {
      str : 6,
      wil : 3
    }
  },
  
  B6 : { // Argent Wolf King's Blade
    image : 'T_WeaponIcon_LargeSword_F',
    
    weight : 88,

    scaling : {
      str : 9,
      mnd : 5,
      wil : 4
    },

    required : {
      str : 7,
      mnd : 3
    }
  },
  
  B7 : { // Judgement Edge
    image : 'T_WeaponIcon_LargeSword_G',
    
    weight : 86,

    scaling : {
      str : 9,
      dex : 4
    },

    required : {
      str : 7
    }
  },
  
  B8 : { // Sunset Great Sword
    image : 'T_WeaponIcon_LargeSword_H',
    
    weight : 65,

    scaling : {
      str : 6,
      dex : 3
    },

    required : {
      str : 4
    }
  },
  
  B9 : { // Lost Zweihander
    image : 'T_WeaponIcon_LargeSword_I',
    
    weight : 80,

    scaling : {
      str : 6,
      dex : 3
    },

    required : {
      str : 4
    }
  },
  
  B10 : { // Argent Wolf Brand
    image : 'T_WeaponIcon_LargeSword_J',
    
    weight : 82,

    scaling : {
      str : 9,
      dex : 1
    },

    required : {
      str : 7
    }
  },
  
  B11 : { // Blanched Greatsword
    image : 'T_WeaponIcon_LargeSword_K',
    dlc : 1,
    
    weight : 90,

    scaling : {
      str : 9
    },

    required : {
      str : 7
    }
  },
  
  // Hellfire Knight DLC
  B12 : { // Wrathful Balmung
    image : 'T_WeaponIcon_LargeSword_DLC_Hannibal',
    dlc : 1,
    
    weight : 80,

    scaling : {
      dex : 10
    },

    required : {
      dex : 9
    }
  },
  
  // Frozen Empress DLC
  B13 : { // Azure Greatsword
    image : 'T_WeaponIcon_LargeSword_DLC_Marcuk',
    dlc : 1,
    
    weight : 85,

    scaling : {
      str : 7
    },

    required : {
      str : 5,
      wil : 7
    }
  },
  
  
  // # HALBERDS #
  C0 : { // Queenslayer Halberd
    image : 'T_WeaponIcon_WeaponHalberd_A',
    
    weight : 60,

    scaling : {
      str : 5,
      dex : 5
    },

    required : {
      str : 3,
      dex : 3
    }
  },
  
  C1 : { // Bardiche
    image : 'T_WeaponIcon_WeaponHalberd_B',
    
    weight : 52,

    scaling : {
      str : 6,
      dex : 6
    },

    required : {
      str : 4,
      dex : 4
    }
  },
  
  C2 : { // Impaler
    image : 'T_WeaponIcon_WeaponHalberd_C',
    
    weight : 47,

    scaling : {
      str : 4,
      dex : 7
    },

    required : {
      dex : 5
    }
  },
  
  C3 : { // Garnet Splitter
    image : 'T_WeaponIcon_WeaponHalberd_D',
    
    weight : 54,

    scaling : {
      str : 5,
      dex : 8,
      mnd : 5,
      wil : 4
    },

    required : {
      str : 3,
      dex : 6,
      mnd : 3
    }
  },
  
  C4 : { // Dammerung
    image : 'T_WeaponIcon_WeaponHalberd_D_Col2',
    
    weight : 57,

    scaling : {
      str : 7,
      dex : 5,
      mnd : 6,
      wil : 4,
      vit : 0,
      for : 0
    },

    required : {
      str : 5,
      dex : 3,
      mnd : 4
    }
  },
  
  C5 : { // Black Halberd
    image : 'T_WeaponIcon_WeaponHalberd_E',
    
    weight : 48,

    scaling : {
      str : 3,
      dex : 9,
      mnd : 5,
      wil : 4
    },

    required : {
      str : 1,
      dex : 7,
      mnd : 3
    }
  },
  
  C6 : { // Assassin's Sickle
    image : 'T_WeaponIcon_WeaponHalberd_F',
    
    weight : 42,

    scaling : {
      str : 5,
      dex : 9,
      mnd : 4,
      wil : 6
    },

    required : {
      str : 3,
      dex : 7,
      wil : 4
    }
  },
  
  C7 : { // Sunset Halberd
    image : 'T_WeaponIcon_WeaponHalberd_G',
    
    weight : 58,

    scaling : {
      str : 4,
      dex : 5
    },

    required : {
      dex : 3
    }
  },
  
  C8 : { // Lost Bardiche
    image : 'T_WeaponIcon_WeaponHalberd_H',
    
    weight : 50,

    scaling : {
      str : 5,
      dex : 4
    },

    required : {
      str : 3
    }
  },
  
  C9 : { // Obliterator Axe
    image : 'T_WeaponIcon_WeaponHalberd_I',
    
    weight : 70,

    scaling : {
      str : 9,
      dex : 3
    },

    required : {
      str : 7
    }
  },
  
  C10 : { // Argent Wolf Poleaxe
    image : 'T_WeaponIcon_WeaponHalberd_J',
    
    weight : 66,

    scaling : {
      str : 1,
      dex : 9
    },

    required : {
      dex : 7
    }
  },
  
  C11 : { // Cerulean Spear
    image : 'T_WeaponIcon_WeaponHalberd_K',
    dlc : 1,
    
    weight : 45,

    scaling : {
      str : 5,
      dex : 4,
      mnd : 5,
      wil : 6
    },

    required : {
      str : 3,
      mnd : 3,
      wil : 4
    }
  },
  
  // Frozen Empress DLC
  C12 : { // Blood Mist Halberd
    image : 'T_WeaponIcon_WeaponHalberd_DLC_Marduk',
    dlc : 1,
    
    weight : 50,

    scaling : {
      str : 10
    },

    required : {
      str : 9
    }
  },
  
  // Lord of Thunder DLC
  C13 : { // Lightning Brionac
    image : 'T_WeaponIcon_WeaponHalberd_DLC_Vajura',
    dlc : 1,
    
    weight : 30,

    scaling : {
      str : 4,
      dex : 4,
    },

    required : {
      wil : 9
    }
  },
  
  
  // # HAMMERS #
  D0 : { // Queenslayer Hammer
    image : 'T_WeaponIcon_WeaponHammer_A',
    
    weight : 74,

    scaling : {
      str : 8,
      dex : 3
    },

    required : {
      str : 6
    }
  },
  
  D1 : { // Hammer of Thralldom
    image : 'T_WeaponIcon_Hammer_Concrete',
    
    weight : 95,

    scaling : {
      str : 8,
      dex : 3
    },

    required : {
      str : 6
    }
  },
  
  D2 : { // Juggernaut Sledgehammer
    image : 'T_WeaponIcon_WeaponHammer_A_Col2',
    
    weight : 76,

    scaling : {
      str : 9,
      dex : 4
    },

    required : {
      str : 7
    }
  },
  
  D3 : { // Heavy Axe
    image : 'T_WeaponIcon_WeaponHammer_B',
    
    weight : 55,

    scaling : {
      str : 7,
      dex : 1
    },

    required : {
      str : 5
    }
  },
  
  D4 : { // Impulse Anchor
    image : 'T_WeaponIcon_WeaponHammer_C',
    
    weight : 78,

    scaling : {
      str : 6,
      dex : 2
    },

    required : {
      str : 4
    }
  },
  
  D5 : { // Huge Hammer
    image : 'T_WeaponIcon_WeaponHammer_D',
    
    weight : 87,

    scaling : {
      str : 9,
      dex : 3
    },

    required : {
      str : 7
    }
  },
  
  D6 : { // Argent Wolf Warhammer
    image : 'T_WeaponIcon_WeaponHammer_E',
    
    weight : 84,

    scaling : {
      str : 9,
      dex : 5
    },

    required : {
      str : 7,
      dex : 3
    }
  },
  
  D7 : { // Tyrant's Labrys
    image : 'T_WeaponIcon_WeaponHammer_F',
    
    weight : 58,

    scaling : {
      str : 9,
      dex : 4,
      mnd : 4,
      wil : 4
    },

    required : {
      str : 7
    }
  },
  
  D8 : { // Sunset Hammer
    image : 'T_WeaponIcon_WeaponHammer_G',
    
    weight : 68,

    scaling : {
      str : 6,
      dex : 4
    },

    required : {
      str : 4
    }
  },
  
  D9 : { // Burned Warhammer
    image : 'T_WeaponIcon_WeaponHammer_G_Col2',
    
    weight : 72,

    scaling : {
      str : 8,
      dex : 3,
      mnd : 5,
      wil : 4
    },

    required : {
      str : 6,
      mnd : 3
    }
  },
  
  D10 : { // Lost Heavy Axe
    image : 'T_WeaponIcon_WeaponHammer_H',
    
    weight : 50,

    scaling : {
      str : 9,
      dex : 5
    },

    required : {
      str : 7,
      dex : 3
    }
  },
  
  // Hellfire Knight DLC
  D11 : { // Hellfire Hammer
    image : 'T_WeaponIcon_WeaponHammer_DLC_Hannibal',
    dlc : 1,
    
    weight : 56,

    scaling : {
      dex : 9
    },

    required : {
      dex : 7,
      mnd : 5
    }
  },
  
  // Frozen Empress DLC
  D12 : { // Snowdrift Sharur
    image : 'T_WeaponIcon_WeaponHammer_DLC_Marduk',
    dlc : 1,
    
    weight : 58,

    scaling : {
      str : 10
    },

    required : {
      str : 9
    }
  },
  
  
  // # BAYONETS #
  E0 : { // Queenslayer Bayonet
    image : 'T_WeaponIcon_WeaponBayonet_A',
    
    weight : 15,

    scaling : {
      dex : 9,
      mnd : 6,
      wil : 7
    },

    required : {
      dex : 3,
      mnd : 4,
      wil : 4
    }
  },
  
  E1 : { // Brodiaea
    image : 'T_WeaponIcon_WeaponBayonet_A_Col2',
    
    weight : 10,

    scaling : {
      dex : 9,
      mnd : 5,
      wil : 7
    },

    required : {
      dex : 6,
      mnd : 3,
      wil : 5
    }
  },
  
  E2 : { // Riot Breaker
    image : 'T_WeaponIcon_WeaponBayonet_B',
    
    weight : 22,

    scaling : {
      str : 7,
      dex : 6,
      mnd : 5,
      wil : 7
    },

    required : {
      str : 4,
      dex : 3,
      mnd : 3,
      wil : 5
    }
  },
  
  E3 : { // Bayonet
    image : 'T_WeaponIcon_WeaponBayonet_C',
    
    weight : 14,

    scaling : {
      dex : 9,
      mnd : 5,
      wil : 8
    },

    required : {
      dex : 5,
      mnd : 3,
      wil : 6
    }
  },
  
  E4 : { // Rubellite Piercer
    image : 'T_WeaponIcon_WeaponBayonet_D',
    
    weight : 18,

    scaling : {
      dex : 9,
      mnd : 6,
      wil : 6
    },

    required : {
      dex : 3,
      mnd : 4,
      wil : 4
    }
  },
  
  E5 : { // Argent Wolf Bayonet
    image : 'T_WeaponIcon_WeaponBayonet_E',
    
    weight : 27,

    scaling : {
      dex : 7,
      mnd : 3,
      wil : 8
    },

    required : {
      dex : 5,
      wil : 6
    }
  },
  
  E6 : { // Burning Disaster
    image : 'T_WeaponIcon_WeaponBayonet_F',
    
    weight : 33,

    scaling : {
      str : 8,
      dex : 9,
      mnd : 7,
      wil : 2
    },

    required : {
      str : 6,
      dex : 7,
      mnd : 5
    }
  },
  
  E7 : { // Sunset Bayonet
    image : 'T_WeaponIcon_WeaponBayonet_G',
    
    weight : 8,

    scaling : {
      dex : 6,
      mnd : 5,
      wil : 3
    },

    required : {
      dex : 3,
      wil : 3
    }
  },
  
  E8 : { // Black Bayonet
    image : 'T_WeaponIcon_WeaponBayonet_H',
    
    weight : 24,

    scaling : {
      dex : 8,
      mnd : 3,
      wil : 8
    },

    required : {
      dex : 6,
      wil : 6
    }
  },
  
  E9 : { // Libertador
    image : 'T_WeaponIcon_WeaponBayonet_H_Col2',
    
    weight : 20,

    scaling : {
      dex : 6,
      mnd : 7,
      wil : 7
    },

    required : {
      dex : 4,
      mnd : 5,
      wil : 5
    }
  },
  
  E10 : { // Lost Bayonet
    image : 'T_WeaponIcon_WeaponBayonet_I',
    
    weight : 11,

    scaling : {
      dex : 5,
      mnd : 3,
      wil : 5
    },

    required : {
      wil : 3
    }
  },
  
  // Frozen Empress DLC
  E11 : { // Bloody Snow
    image : 'T_WeaponIcon_WeaponBayonet_DLC_Marduk',
    dlc : 1,
    
    weight : 12,

    scaling : {
      dex : 9,
      wil : 10
    },

    required : {
      dex : 7,
      wil : 9
    }
  },
  
  // Lord of Thunder DLC
  E12 : { // Thunderbolt
    image : 'T_WeaponIcon_WeaponBayonet_DLC_Vajura',
    dlc : 1,
    
    weight : 14,

    scaling : {
      dex : 6,
      wil : 9
    },

    required : {
      dex : 7,
      wil : 8
    }
  }
};
CodeVeinBuilder.data.order.weapon = [
  'A0', // Queenslayer Blade
  'A1', // Pipe of Thralldom
  'A14', // Hellfire Pipe
  'A16', // Hoarfrost Pipe
  'A17', // Thunderbolt Pipe
  'A18', // Pipe of the Unrivaled
  'A2', // Broadsword
  'A3', // Hanemukuro
  'A4', // Enduring Crimson
  'A5', // Machete
  'A6', // Argent Wolf Blade
  'A7', // Blazing Claw
  'A8', // Iceblood
  'A9', // Sunset Sword
  'A15', // Inferno Blade
  'A10', // Black Saber
  'A11', // Executioner
  'A12', // Lost Broadsword
  'A19', // Fulmen Blade
  'A13', // Crimson Longsword
  'B0', // Queenslayer Greatsword
  'B1', // Zweihander
  'B2', // Nagimukuro
  'B3', // Oni Bane
  'B4', // Warped Blade
  'B5', // Black Great Sword
  'B6', // Argent Wolf King's Blade
  'B7', // Judgement Edge
  'B8', // Sunset Great Sword
  'B12', // Wrathful Balmung
  'B9', // Lost Zweihander
  'B10', // Argent Wolf Brand
  'B13', // Azure Greatsword
  'B11', // Blanched Greatsword
  'C0', // Queenslayer Halberd
  'C1', // Bardiche
  'C2', // Impaler
  'C3', // Garnet Splitter
  'C4', // Dammerung
  'C5', // Black Halberd
  'C6', // Assassin's Sickle
  'C7', // Sunset Halberd
  'C8', // Lost Bardiche
  'C13', // Lightning Brionac
  'C9', // Obliterator Axe
  'C10', // Argent Wolf Poleaxe
  'C12', // Blood Mist Halberd
  'C11', // Cerulean Spear
  'D0', // Queenslayer Hammer
  'D1', // Hammer of Thralldom
  'D2', // Juggernaut Sledgehammer
  'D3', // Heavy Axe
  'D4', // Impulse Anchor
  'D5', // Huge Hammer
  'D6', // Argent Wolf Warhammer
  'D12', // Snowdrift Sharur
  'D7', // Tyrant's Labrys
  'D8', // Sunset Hammer
  'D9', // Burned Warhammer
  'D11', // Hellfire Hammer
  'D10', // Lost Heavy Axe
  'E0', // Queenslayer Bayonet
  'E1', // Brodiaea
  'E2', // Riot Breaker
  'E3', // Bayonet
  'E4', // Rubellite Piercer
  'E5', // Argent Wolf Bayonet
  'E11', // Bloody Snow
  'E6', // Burning Disaster
  'E7', // Sunset Bayonet
  'E8', // Black Bayonet
  'E9', // Libertador
  'E10', // Lost Bayonet
  'E12' // Thunderbolt
];


// # 5. BLOOD VEILS #
// Group A = Orge (claw)
// Group B = Stinger (tail)
// Group C = Hounds
// Group D = Ivy
CodeVeinBuilder.data.blood_veil = {
  // # OGRE #
  A0 : { // Night Claw
    image : 'T_CategoryIcon_Gauntlet_A',
    
    weight : 30,

    scaling : {
      dex : 9,
      mnd : 5,
      wil : 5
    },

    required : {
      dex : 4,
      mnd : 3,
      wil : 3
    }
  },
  
  A1 : { // Noble Silver
    image : 'T_CategoryIcon_Gauntlet_C',
    
    weight : 22,

    scaling : {
      str : 4,
      dex : 4,
      mnd : 9,
      wil : 3
    },

    required : {
      mnd : 7
    }
  },

  A2 : { // GXM Variant
    image : 'T_CategoryIcon_Gauntlet_E',
    
    weight : 63,

    scaling : {
      str : 6,
      dex : 1,
      mnd : 6,
      wil : 3
    },

    required : {
      str : 4,
      mnd : 4
    }
  },
  
  A3 : { // Blackblood Liberator
    image : 'T_CategoryIcon_Gauntlet_F',
    
    weight : 49,

    scaling : {
      str : 3,
      mnd : 4,
      wil : 9
    },

    required : {
      wil : 7
    }
  },
  
  A4 : { // Queenslayer Claw
    image : 'T_CategoryIcon_Gauntlet_H',
    
    weight : 55,

    scaling : {
      dex : 5,
      mnd : 6,
      wil : 6
    },

    required : {
      dex : 3,
      mnd : 4,
      wil : 4
    }
  },
  
  A5 : { // Venous Claw
    image : 'T_CategoryIcon_Gauntlet_ColEx',
    dlc : 1,
    
    weight : 18,

    scaling : {
      str : 5,
      dex : 8,
      mnd : 6,
      wil : 8
    },

    required : {
      str : 3,
      dex : 6,
      mnd : 4,
      wil : 6
    }
  },
  
  // Hellfire Knight DLC
  A6 : { // Ruinous Chevalier
    image : 'T_CategoryIcon_Gauntlet_F_Col4',
    dlc : 1,
    
    weight : 60,

    scaling : {
      str : 7,
      wil : 9
    },

    required : {
      str : 4,
      wil : 7
    }
  },
  
  // Lord of Thunder DLC
  A7 : { // Twilight Claw
    image : 'T_CategoryIcon_Gauntlet_A_Col4',
    dlc : 1,
    
    weight : 32,

    scaling : {
      str : 10
    },

    required : {
      str : 9
    }
  },
  
  
  // # STINGER #
  B0 : { // Night Spear
    image : 'T_CategoryIcon_LongCoat_A',
    
    weight : 65,

    scaling : {
      str : 2,
      dex : 6,
      mnd : 6,
      wil : 4
    },

    required : {
      dex : 4,
      mnd : 4
    }
  },
  
  B1 : { // Raven Fatigues
    image : 'T_CategoryIcon_LongCoat_B',
    
    weight : 38,

    scaling : {
      str : 5,
      dex : 2,
      mnd : 4,
      wil : 8
    },

    required : {
      str : 3,
      wil : 8
    }
  },
  
  B2 : { // Winter Mantle
    image : 'T_CategoryIcon_LongCoat_D',
    
    weight : 74,

    scaling : {
      str : 1,
      dex : 4,
      mnd : 8,
      wil : 4
    },

    required : {
      mnd : 6
    }
  },
  
  B3 : { // Silver Garb
    image : 'T_CategoryIcon_LongCoat_E',
    
    weight : 80,

    scaling : {
      str : 6,
      dex : 1,
      mnd : 6,
      wil : 3
    },

    required : {
      str : 4,
      mnd : 4
    }
  },
  
  B4 : { // Queenslayer Thorn
    image : 'T_CategoryIcon_LongCoat_H',
    
    weight : 47,

    scaling : {
      str : 3,
      dex : 2,
      mnd : 6,
      wil : 4
    },

    required : {
      mnd : 4
    }
  },
  
  // Hellfire Knight DLC
  B5 : { // Graceful Prominence
    image : 'T_CategoryIcon_LongCoat_B_Col4',
    dlc : 1,
    
    weight : 34,

    scaling : {
      str : 6,
      dex : 8
    },

    required : {
      dex : 8
    }
  },
  
  // Frozen Empress DLC
  B6 : { // Subzero Shroud
    image : 'T_CategoryIcon_LongCoat_D_Col4',
    dlc : 1,
    
    weight : 78,

    scaling : {
      wil : 10
    },

    required : {
      wil : 9
    }
  },
  
  
  // # HOUNDS #
  C0 : { // Night Fang
    image : 'T_CategoryIcon_Drape_A',
    
    weight : 60,

    scaling : {
      str : 6,
      dex : 1,
      mnd : 4,
      wil : 4
    },

    required : {
      str : 4
    }
  },
  
  C1 : { // Blue Hounds
    image : 'T_CategoryIcon_Drape_B',
    
    weight : 53,

    scaling : {
      dex : 6,
      mnd : 5,
      wil : 5
    },

    required : {
      dex : 4,
      mnd : 3,
      wil : 3
    }
  },
  
  C2 : { // GXL Defender
    image : 'T_CategoryIcon_Drape_C',
    
    weight : 88,

    scaling : {
      str : 2,
      dex : 7,
      mnd : 6,
      wil : 3
    },

    required : {
      dex : 5,
      mnd : 4
    }
  },
  
  C3 : { // Hedgehog Fort
    image : 'T_CategoryIcon_Drape_D',
    
    weight : 80,

    scaling : {
      str : 6,
      dex : 3,
      mnd : 5,
      wil : 8
    },

    required : {
      str : 4,
      mnd : 3,
      wil : 6
    }
  },
  
  C4 : { // White Vestment
    image : 'T_CategoryIcon_Drape_E',
    
    weight : 65,

    scaling : {
      dex : 5,
      mnd : 8,
      wil : 5
    },

    required : {
      dex : 3,
      mnd : 6,
      wil : 3
    }
  },
  
  // Hellfire Knight DLC
  C5 : { // Violet Gear
    image : 'T_CategoryIcon_Drape_B_Col4',
    dlc : 1,
    
    weight : 43,

    scaling : {
      str : 8,
      dex : 3
    },

    required : {
      str : 8
    }
  },
  
  // Lord of Thunder DLC
  C6 : { // Daybreak Thunderfang
    image : 'T_CategoryIcon_Drape_A_Col4',
    dlc : 1,
    
    weight : 77,

    scaling : {
      dex : 6,
      mnd : 10
    },

    required : {
      dex : 6,
      mnd : 8
    }
  },
  
  
  // # IVY #
  D0 : { // Night Thorn
    image : 'T_CategoryIcon_Muffler_A',
    
    weight : 24,

    scaling : {
      str : 4,
      dex : 4,
      mnd : 6,
      wil : 6
    },

    required : {
      mnd : 4,
      wil : 4
    }
  },
  
  D1 : { // Ivory Grace
    image : 'T_CategoryIcon_Muffler_C',
    
    weight : 12,

    scaling : {
      dex : 5,
      mnd : 8,
      wil : 8
    },

    required : {
      dex : 3,
      mnd : 6,
      wil : 6
    }
  },
  
  D2 : { // GXH Assault
    image : 'T_CategoryIcon_Muffler_D',
    
    weight : 40,

    scaling : {
      str : 7,
      dex : 1,
      mnd : 5,
      wil : 7
    },

    required : {
      str : 5,
      mnd : 3,
      wil : 5
    }
  },
  
  D3 : { // Prayer Shawl
    image : 'T_CategoryIcon_Muffler_E',
    
    weight : 48,

    scaling : {
      str : 4,
      dex : 4,
      mnd : 6,
      wil : 3
    },

    required : {
      mnd : 4
    }
  },
  
  D4 : { // Suicide Spur
    image : 'T_CategoryIcon_Muffler_F',
    
    weight : 35,

    scaling : {
      str : 4,
      dex : 2,
      mnd : 6,
      wil : 9
    },

    required : {
      mnd : 4,
      wil : 7
    }
  },
  
  // Frozen Empress DLC
  D5 : { // Bewitching Thorn
    image : 'T_CategoryIcon_Muffler_E_Col4',
    dlc : 1,
    
    weight : 23,

    scaling : {
      dex : 9
    },

    required : {
      dex : 9
    }
  },
  
  // Lord of Thunder DLC
  D6 : { // Master Spines
    image : 'T_CategoryIcon_Muffler_A_Col4',
    dlc : 1,
    
    weight : 12,

    scaling : {
      dex : 8,
      wil : 8
    },

    required : {
      dex : 8,
      wil : 8
    }
  }
};
CodeVeinBuilder.data.order.blood_veil = [
  'A0', // Night Claw
  'A7', // Twilight Claw
  'A1', // Noble Silver
  'A2', // GXM Variant
  'A3', // Blackblood Liberator
  'A6', // Ruinous Chevalier
  'A4', // Queenslayer Claw
  'A5', // Venous Claw
  'B0', // Night Spear
  'B1', // Raven Fatigues
  'B5', // Graceful Prominence
  'B2', // Winter Mantle
  'B6', // Subzero Shroud
  'B3', // Silver Garb
  'B4', // Queenslayer Thorn
  'C0', // Night Fang
  'C6', // Daybreak Thunderfang
  'C1', // Blue Hounds
  'C5', // Violet Gear
  'C2', // GXL Defender
  'C3', // Hedgehog Fort
  'C4', // White Vestment
  'D0', // Night Thorn
  'D6', // Master Spines
  'D1', // Ivory Grace
  'D2', // GXH Assault
  'D3', // Prayer Shawl
  'D5', // Bewitching Thorn
  'D4' // Suicide Spur
];


// # 6. TRANSFORMATIONS #
// Group A = Physical (affects weight, damage, etc..)
// Group B = Elemental
// Group C = Ailments
CodeVeinBuilder.data.transform = {
  // # PHYSICAL #
  A0 : { // Alleviation
    image : 'T_ItemIcon_chrome_mini8',
    dec_weight : 1.25
  },

  A1 : { // Fortification
    image : 'T_ItemIcon_chrome_mini9',
    inc_weight : {
      weapon : 1.15,
      blood_veil : 1.10
    }
  },
  
  A2 : { // Intensification
    image : 'T_ItemIcon_chrome_mini6'
  },

  A3 : { // Gifts
    image : 'T_ItemIcon_chrome_mini10'
  },
  
  A4 : { // Devour
    image : 'T_ItemIcon_chrome_mini4'
  },

  
  // # ELEMENTAL #
  B0 : { // Fire
    image : 'T_ItemIcon_chrome_mini1'
  },

  B1 : { // Ice
    image : 'T_ItemIcon_chrome_mini2'
  },

  B2 : { // Lightning
    image : 'T_ItemIcon_chrome_mini3'
  },
  
  
  // # AILMENTS #
  C0 : { // Venom
    image : 'T_ItemIcon_chrome_mini5'
  },

  C1 : { // Stun
    image : 'T_ItemIcon_chrome_mini11'
  },
  
  C2 : { // Inhibit
    image : 'T_ItemIcon_chrome_mini7'
  },

  C3 : { // Slow
    image : 'T_ItemIcon_chrome_mini12'
  }
};
CodeVeinBuilder.data.order.transform = [
  'A0', // Alleviation
  'A1', // Fortification
  'A2', // Intensification
  'A3', // Gifts
  'A4', // Devour
  'B0', // Fire
  'B1', // Ice
  'B2', // Lightning
  'C0', // Venom
  'C1', // Stun
  'C2', // Inhibit
  'C3' // Slow
];


// # 7. DATA SETUP #
// Sets up default values and properties that are located in _lang.data
(function () {
  var i, k, data, lang, scaling;
  
  for (i in CodeVeinBuilder.data) {
    if (i != 'dummy' && i != 'order') { // ignore dummy data
      for (k in CodeVeinBuilder.data[i]) {
        data = CodeVeinBuilder.data[i][k];
        lang = _lang.data[i][k];
        
        if (lang.name) data.name = lang.name;
        if (lang.desc) data.desc = lang.desc;
        if (lang.owner) data.owner = lang.owner;
        if (lang.usage_req) data.usage_req = lang.usage_req;
        
        // apply 0 stat scaling for comparisons
        if (/weapon|blood_veil/.test(i)) {
          scaling = data.scaling;
          
          if (!scaling.str) scaling.str = 0;
          if (!scaling.dex) scaling.dex = 0;
          if (!scaling.mnd) scaling.mnd = 0;
          if (!scaling.wil) scaling.wil = 0;
          if (!scaling.vit) scaling.vit = 0;
          if (!scaling.for) scaling.for = 0;
        }
      }
    }
  }
}());
