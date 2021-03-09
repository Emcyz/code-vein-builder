// # PRESET BUILD LIST
/* # SYNTAX #
* generic = 'BUILD_NAME' : 'BUILD_CODE'
* detailed = 
* 'BUILD_NAME' : [
*   'BUILD_CODE',
*   'BUILD_DESCRIPTION',
*   'AUTHOR|[OPTIONAL]AUTHOR_SOURCE'
* ]
*/
CodeVeinBuilder.presets = {
  // # ONE-HANDED SWORD #
  // builds based around one-handed swords
  '1h' : {
    'Blademaster' : [
      'IIBgPsDMECwQjApxEGEBsYCi5UE4xV5Ms4AxAJgrEvMl0miMIA5C8g',
      "Your basic one-handed sword non-dlc build. Good to use if you are heading into the DLC's.",
      'DarkWarrior7534|18'
    ],
    
    'Comfy Prometheus' : [
      'IIVgPsCMkQ7BNgAYwGFEuADjAURejOgMxgBixBAnOQEwAsaOF46AbGrbWiEA',
      "Good damaging build maining Jack's sword Executioner, and meant to use 3 buffs: Adrenaline, Bridge to Glory and Blade Dance which don't have any negative effects unlike Sacrificial Edge and Final Journey, or being somewhat conditional like Overdrive if you get hit often.<br><br>"+
      "When all hits connect, Pulsating Light quickly adds up 25% damage bonus on a single usage with Blade Dance active, making it an excellent damage racking tool. Bloodsucking Blades is an awesome support skill to execute the combat skills readily.<br><br>"+
      "Can also add Numbing Mark to a light Stun transformed weapon like Blazing Claw or Iceblood, maintaining quick mobility against bosses that can be stunned for an easier fight, or just add the corresponding elemental weakness weapon buff to the Executioner. However, since this requires player to manage 4 buffs simultaneously, which is obviously not very comfy, the general strategy should be to apply an elemental weapon buff only when Blade Dance runs out, giving it enough time for cooldown for the next usage.",
      'cooldudeachyut|10'
    ],
    
    'High Scepter' : [
      'IIJgDAPsDsUBxQKxQCyopAwgTnhAolgIxEQBiAzMsEbsBaWSCBDqyGmVs0A',
      'A build focused on high sustained damage from close and medium range with a variety of cc options and quick movement',
      'u/KyrianBlackwood|fcbr05h'
    ],

    'Knight of Ishtar' : [
      'IIZgjAPsCcWc8QQAxVQUVcAHHATHAGwQBiIArKXgCxVJmoDCujeSjsjYyQA',
      "In certain situations one of the skills can be swapped for elemental damage or Gift Speed passive for Stamina,Health steal etc, build is very fast and depends on how good you are dodging but can kill anything Don't use spacebar to dodge with this build, your dodge is Swifting Hallow, ALWAYS keep your stamina for swings, cleared ng+6 with this, Increased Gift Speed will help you execute skills way faster and greatly redurce your risk of getting hit while using a skill",
      'calypsoup|5'
    ],

    'Pipe Dream' : [
      'IIVgPsCMGQLGARax4AYzoKLuADjAMIDsYAYgGxkDM4psATIZJQfVU-gZ5Oq-UA',
      "Pipe dream.",
      'u/Soluden|fg839kj'
    ],

    'Pipe Meister' : [
      'IIJgLAPsCMEAxVgYVg4BmKAOKI0E4IUQIAxcIyU6E09BUyJQpAViOgHYg',
      "The trick to this build is buff swapping, most importantly Passive abilities. Don't get hit and your damage potential is insane even with the pipe!<br><br>"+
      "Side Note: If you plan on using the pipe GIFT NOBLE SILVER is stronger but if you plan on using any other sword GIFT IVORY GRACE is the way to go! Adrenaline and Overdrive are absolutely useless on this set so I took them off and added Stun Weapon. Your free to swap blood sacrifice and Poison Weapon with an elemental weapon if the boss is weak to certain elements. I'm going to let you figure out how to activate bridge to grace use the Description to help you! I would have a video of me killing Queen's Knight Reborn with this set on a +0 stun Pipe taking no damage but when I tried to save the clip it didn't save it. :(",
      'u/ProScopeZ|fey540j'
    ],

    'Sacrificial Edge' : [
      'IIJgLAPsCM0QDBAInUCqoBwQKKIMLQgSEDMEAYuJSMRUTefgJwnQDslkF8QA',
      'A build that utilizes Sacrificial Edge and Bridge to Glory to greatly increase damage. Cleansing light is used to help reduce the effects of Sacrificial Edge, whereas Blood Sacrifice is used to restore ichor after buffing so you can spam your attack Gifts.'
    ],

    'The Yaksha' : [
      'IIJgrAPsDsEAwQCIEYonmqAOCBRBAwsqgEKSgBsEJsAYgMz0S0gAsEBI6KOnqtcIA',
      'A build based on The Yaksha, Rin Murasame.<br><br>'+
      'Utilizes Evasive Snare and Countermeasure to burn enemies when you dodge them. Flames of Rage can be used to set traps or as a combo finisher. Dancing Blaze should be used in tandem with Circulating Pulse to deliver a devastating combo attack. Lastly, make sure to buff with Blood Sucking Blades and Hunting Feast to help maintain your ichor for Evasive Snare and your active Gifts.'
    ],

    'Venom Thorn' : [
      'IITgPsCMlgDGARGBhe8oXMAHBATPAGIDsmEAzKYXgCxgBCuy4ye5iBYyNQA',
      "This build has a strong emphasis on damage while still being able to poison effectively.<br><br>"+
      "With the venom buff and circulating pulse, you can poison enemies very effectively and you even get a damage boost from opportunism once enemies are afflicted with venom.<br><br>"+
      "This build can efficiently use Light and Dark gifts so equip whatever spell suits you and your situation. You also have feral tenacity that helps survival instincts as well as gift prowess for cast speed. Bridge to Glory also does wonders for the build while venom trap can make for interesting strategy setups as well as having a very good poison build up.<br><br>"+
      "Survival instinct and swift destruction powers up your spells so you can expect to do respectable damage while being able to poison the enemies and most bosses.<br><br>"+
      "Overall this build has damage, great mobility, and decent survivability.",
      'u/IC_Ivory280|feesklf'
    ]
  },

  
  // # TWO-HANDED SWORD #
  // builds based around two-handed swords 
  '2h' : {
    'Giantdad: The Legend is a Waifu' : [
      'IIRgDAPgQiGVBmCo7NlSBhAbBTAOCAUVk1MIBFIAxAJkpAFYJqmXISg',
      "Maximum balance. Maximum raw damage. Maximum DR. Swing hard, block anything, and rolling is for chumps. This is a meme build, yes, based on the well known Dark Souls meme build, but it is highly effective for all the same reasons as that build. Heavy Attack > Light Attack > Repeat is a combo that lasts as long as your stamina does, swinging from right to left and back again in wide arcs. The heavy attack grants a lot of hyper armor, and landing both hits will stagger most enemies, so you can tank through hits and cleave down mobs. Zweihander Fortification also has 100% physical DR when blocking.",
      'u/aptom203|fnbo2ou'
    ],
    
    'Hasty Combo Fighter' : [
      'IIZgjAPgQgLBAMFiUY5SwCYkA4kE4IBRSYANiRDwDEQ5hCARTRAYT1cNcwFYg',
      "This Build enables you to have quick Mobility while still having a two handed sword. On top of that it also has a good combo that is potentially a true combo. Not completely sure about it but it does have consistency.<br><br>"+
      '<a href="https://youtu.be/m75WRW7-mqI" target="_blank">https://youtu.be/m75WRW7-mqI</a><br><br>'+
      "The idea of this build is to use hasten for quick mobility and to gain full damage from swift destruction on top of buffing with Bridge to Glory and Adrenaline. You also gain even more damage from survival instinct, making this a heavy damage build.<br><br>"+
      "Chaotic Ash, although it has poor range, is still good for gaining ichor so you can easily go into tormenting blast when need. This skill gift can break through most enemy's guard. You also have lighting and blood spike for range attacks, which are good for attracting single enemies in case you want to avoid a horde.<br><br>"+
      "There is feral tenacity, which is a great gift for survivability and is also used survival instinct, since your health has to be below half to get the benefit.<br><br>"+
      "The reason why you need the warped blade is for the combo. For smaller enemies, you only need one hit to stagger them, which can allow you to go into the normal heavy attack. For slightly bigger foes, like the Argent wolf enemies, you'll need two hits to stagger them so you can combo into the heavy attack. For even bigger enemies, like the Argent wolf mini boss, you'll need three hits to stagger so you can go into the heavy attack. Boss enemies require more hits to stagger so be warned.<br><br>"+
      "This build can be used with the Black Great Sword but due to the animation of its normal heavy attack, it isn't as safe so I wouldn't recommend it. Alternatively you can stack charge accelerator and time crunch to increase your charge speed so you can combo into the heavy charged attack but investing a passive and active slot is just not worth it in my opinion.",
      'u/IC_Ivory280|feq338w'
    ],

    'Hyper-aggressive heavy caster' : [
      'IIJgbAPgQg7BAMEAiILEY4BGCBRHAwljtgKwREDMEAYiABxojmgCctlqBjwALNUVQ14QA',
      "A two handed build focused on mobility, heavy weapons and magic. The plan is simple, don't get hit, the spells are chosen so you can do a lot of damage with minimal cast time, or to cover you when surrounded. Use swallow cutter after an attack or two to drop large enemies to the ground giving you free hits, spells are used to chip down enemies at range and sweep in for the kill, and the rest is for you to do a lot of damage. You can swap out judgement edge for any 2 handed weapon that takes your fancy, I prefer it for the large amount of damage from the charged heavy attack combined with blow of madness.",
      'u/justicetree|fbfv950'
    ],

    'Immortal Blade' : [
      'IIRgrAPgQiEAwQMICYKnm2wDMEBiIuAorHgCz7IAclke2C9FAIqS43EA',
      'The fortified Zweihander has 100% defense when blocking, allowing you to withstand almost any attack. Throw on Iron Will and Cleansing Light to further boost your survivability, and save Foulblood Barrier for attacks that may one-shot you. For bosses, Life Steal can be swapped out for more health, balance, or a focus passive that boosts your defense.'
    ],

    'Improvise, Adapt, Overcome' : [
      'IIZgjAPgQgrBCiBOCw7ACwssS9P2wA4IBhANggDERNgAmOE5UZEuzNuSyNuoA',
      'As the name suggests, it is a build to overcome any obstacle with many options as your disposal. You can simply buff yourself and go ham with the 2H, or have a hard hitting bayonet shot or spells as ranged options. If you manage to land a backstab, parry or charged drain, the extra attack from Venous comes in handy as well.<br><br>'+
      'To recharge Ichor to keep up spells/buffs, the Devour mod in conjunction with Bloodsucking blade is enough.<br><br>'+
      "Not really optimized for boss fights, but it still manages to be somewhat viable in them. Just don't get careless with your Thorn of Judgement casts.",
      'u/Kzar96|f9odlyi'
    ],

    'Queen Knight Countermeasure' : [
      'IIBgPuBCCMYMICYJmLVYCis7ScAHCtAGxgBiChAIgKznThm7wCc8hcAzJ+QCxA',
      'Queen Knight / Queen Knight Reborn are especially weak to Guard Reversal as a lot of their attack are blockable and it took them longer to recover than other bosses. Each stun from Guard reversal allow player to land 2 Zweihander hits. His shield push (3rd hit of their normal combo) and his teleport are unblockable and therefore have to be dodged instead.<br><br>'+
      'For gear, using Fortified Zweihander for 100% block. Since a lot of his attack can 1shot player in lighter veil like Noble silver; a high defensive veil like the GXL is recommended to minimize the risk.',
      'u/srlynowwhat|fa9jsba'
    ],

    'Swift Blade Dancer' : [
      'IIZgDAPgQgHBkBECMFiUsATKuBRFAwgOypICcEAYpnNQKxWYmUgAsEBm2BFnKlYIA',
      'A two-handed sword build focused on quick mobility and attack spam. Buff up with Bridge to Glory and the two drain rating buffs to deal good damage while also draining tons of ichor. Due to this high drain rating, you should be able to spam all your attack Gifts, then following up with regular attacks to regain your ichor. Rinse and repeat for a decisive victory.'
    ]
  },

  
  // # HALBERD #
  // builds based around the halberd
  'halberd' : {
    'Dancing Scythe' : [
      'IIFgDAPgwgrBwEYCc0Bs9KI-AHBAogEzQIIQBiCAzBYSuSPDOlIXK2VCq461UA',
      "This build is for those who enjoy a good sparring with bosses rather than attempt to one-shot everything.<br><br>"+
      "Black Halbert has great move set, but Impaler also works as it has two consecutive piercing strikes and is highly effective in staggering enemies e.g. the Cerberus Troopers. Fulmen Blade Fortified is basically a shield as it has 100 defense all around, especially effective against Gilded Hunter's angry phase and the Virgin Born's massive lightning barrage (you know what I'm talking about).<br><br>"+
      "Chariot Rush has a rather long casting time, but it can be canceled halfway. Switch for Severing Abyss or other offensive skills to suit your playstyle. Thunderbolt impact is a great light AOE when surrounded by mobs, but consider switching between this and Cloak of Winter to match enemies' elemental weakness (There is no Blood/Fire counterparts sadly). It also deals crush damage which the Halbert class completely lacks. I don't recommend this during boss fights, but it is more than enough during exploring as it can one-shot basic mobs (euphoric soldiers, dogs, monkeys and alike) even in max difficulty using this setup. I personally find them annoying especially when surrounded by them so I always bring this with me, but you can switch to modest offering during boss fights to keep your partner alive or elemental damage buffs if you play solo.<br><br>"+
      "Special notes: In the city of falling flame, switch out Gift Accelerator and Hasten for Flame protection and Elemental wall for maximum fire resistance; plus I personally find being quick mobility in this area can sometimes be a hinderance as I constantly dash into the wall, but normal rolls are much more manageable.",
      'Powaifu|19'
    ],
    
    'Gliding Executioner' : [
      'IIJg7APgwgbBAMEAiBGCoHrcAHBAoiNCtipAGIgCcElRUAzIpQCzQ1Qj0rPxA',
      "This build focuses on spamming the Assassin's Sickle special heavy charged attack. Apply all the buffs, especially Time Crunch to speed up the charge attack. Then harness the power of the Invading Executioner's glide attack to devastate your foes."
    ],

    'One Hit Kill' : [
      'IIBgPgwgnG4CIEYzCeFyAcYCiAmZMEAbGAGK74QIAsZClCAzJAuBI8xFttUA',
      'A build that can kill bosses in one hit, at least on NG. Use all buffs before a fight with Jack as a partner and use Fatal Surge last. Once ready, enter the boss room and activate Severing Abyss near the boss to destroy them.'
    ],

    'Queenslayer Halberdier' : [
      'IIBgPgwgrGwIzgnWz63AMTgZjAUQCZIjhcIBOSADjAwMo2xgm1w0ziKziA',
      'This is basically a really reliable halberd build. The Black Halberd has a reliable move set compared to almost every other in its class, and with a Halberd passive, brings the damage up to at least 1519. With any Mind passive, you can get Bridge To Glory and Adrenaline can be used naturally. Shadow Assault is reliable for fast damage compared to Circulating Pulse, and Chariot Rush can be used in boss fights to really dish out damage. I recommend any veil with high Light Gift stats, but Dark Hounds is ok. Final Journey with both Adrenaline and Bridge to Glory combined with Shadow Assault and Chariot Rush gives some high damage numbers in a bosses down phase. And Panaceas Essence or Elemental Wall for whatever you need.',
      'u/Slowhellob|f8bpj0t'
    ],

    'The First Successor' : [
      'IIBgPuDCCsbAjHATGS5zABxgKIsgGyrwoBiSAnKlZNpAMz1ikAsqSb4pJQA',
      'A somewhat flexible build that could be used with most Halberds so long they have Venom, Intensification, or Fortification applied to them. A free slot is there for any elemental/status buff depending on enemy or boss weaknesses.',
      'u/TwistedDarkCloud|f9qt2e1'
    ]
  },

  
  // # HAMMER #
  // builds based around the hammer
  'hammer' : {
    'Shockwave Smasher' : [
      'IIZgDAPgIgTBlQIwWHSxnABwQKIggGEA2FRAdggDEYdCZJCQ4qQAWImZQgTiPGpggA',
      'This build uses Precision and Impact Wave in an attempt to keep enemies stunlocked. Make sure to buff up with the prior Gifts along with Time Crunch, then spam the heavy charged attack with the Juggernaut Sledgehammer to unleash three rapid shockwave attacks. If paired with Bridge to Glory, this should do a lot of damage and stunlock the enemy a few times.'
    ],

    'Swift Tyrant' : [
      'IIZgDAPgIg7BlQIwWJSxnABwQKIggGE4MBOCAMQCYdqBWSquCkAFiKqqPMKuQrBA',
      'A hammer build focused on quick mobility and attack spam. Buffing up with all the buffs will allow you to spam your attack Gifts along with draining tons of ichor with regular attacks to maintain this spam. Quick mobility will ensure you can easily dodge attacks with that sweet quick dodge.'
    ],

    'The Staggering Juggernaut' : [
      'IIRg7APgIgDBcGEBMFT1SCCCcWAcEAogMyq4BixALFknOUgQsSggVKcjTkA',
      "Have you ever wanted to establish complete immunity from damage in Code Vein? Do you want to stagger enemies with ease? Well this is the build for you. <a href='https://youtu.be/iCSHXmgIbQA' target='_blank'>https://youtu.be/iCSHXmgIbQA</a><br><br>"+
      "With Guardian aid from the Alternate Mia Ai, Juggernaut, and the defender veil, you can get 100% damage immunity from all enemies and, when you stack your gift extension with Mia's gift extension, you can achieve this for up to 90 seconds.<br><br>"+
      "Make sure your health is below half so you get the buff from survival instinct and with Adrenaline and Bridge to Glory, your damage is tolerable.<br><br>"+
      "There is also precision and impact wave so you can stagger enemies more efficiently.<br><br>"+
      "Overall this build is a total beast and would be almost game breaking if not for the hammer class being the worst in the game and the Ai being unpredictable at times.<br><br>"+
      "Have fun.",
      'u/IC_Ivory280|ff1evjd'
    ]
  },

  
  // # BAYONET #
  // builds based around the bayonet
  'bayonet' : {
    'Gunner' : [
      'IIFgjAPgognBAMEAiA2CwBMD1aRxSYAHNCBAMJgDMEAYhmrQKyLkY2EmVyWS0gB2OiBhA',
      'A build for someone wanting to run a pure gun only run. Use focus recovery along with ichor regeneration to keep ichor flowing.',
      'u/Soluden|fqjk7rp'
    ],
    
    'Revenant Thunder Gunner' : [
      'IIRgTAPgou0hwAMFmgcgwgTghk8oAWBADggDExjyBWZSgNgQGYy9N9cxmEaag',
      "This build focuses on sustained ranged damage with the bayonet using Chaotic Ash and Field of Thirst. The added ichor management both provide allows you to use normal shots freely, without sacrificing health. You will only need to melee enough to get one or two ichor for Chaotic Ash or Field of Thirst. Thunderbolt's excellent shotgun normal shots mow through groups of close range enemies while Brodiaea has better melee damage and long range capability. Overdrive and Ranged Impact will dramatically boost your damage as long as you don't get hit, and pairs well with Louis since his Overdrive buff stacks. Gift Prowess will help speed up the burst of Circulating Pulse and Fusillade Rondo making them less dangerous to use. Radiant Barrel will delete almost anything from afar, and can take out multiple enemies if positioned well. Night Claw can be switched out for Master Spines with devour if you desire more ichor gain but less damage resistance. Circulating Pulse is optional and can be switched out for anything you want. I include it because it has good damage for 3 ichor and completes my soldier aesthetic.<br><br>"+
      "Overall this build works well clearing areas, completing trials of blood, and in boss fights too. Open with Field of Thirst then a spam of charged lightning balls followed by a Radiant Barrel shot. This is especially useful against bosses that charge directly at you, as they will charge through your line of lightning balls to do it.",
      'Misterspanky|8'
    ],
    
    'Sacrificial Ranger' : [
      'IIJhB8FEE5wBnAEQIzzcVwAcUAs4BhWDAdkIGYFhycAxZCWkANkOQQJHwOVVriA',
      'A bayonet build primarily focued on shot attacks. Ranged Impact and Overdrive should be used to boost your shot damage, and Gift Extension to help extend these skills. If no DLC, you can supplement GE with Cognitive Zeal for a little extra damage. Blood Sacrifice will ensure you can regain your ichor without having to get close to enemies, so you can stand back and shoot all day!'
    ],

    'Supernatural Sniper' : [
      'IIJhB8FEE52WAiBGOLgBZXgMJIsADlQHYpNgVsBmFABhyvtyZEwDFNckg',
      'This build focuses on Supernatural blood from the Hermonia blood code so you can shoot your bayonet even after you run out of ichor.<br><br>'+
      '<a href="https://youtu.be/_xx2JnYD-Lg" target="_blank">https://youtu.be/_xx2JnYD-Lg</a><br><br>'+
      'Time crunch and charge accelerator helps with the speed of your charged shots while Overdrive and ranged impact helps with the overall damage.<br><br>'+
      "Cleansing light helps with the health loss of supernatural blood. The shots don't take much away though so you can benefit nicely from it. You can also use spells with this build although I recommend low cost ichor gifts like blood shot.<br><br>"+
      'You also have a free slot that you can equip anything you may need for certain situations, making this build very adaptable.<br><br>'+
      'When I buff, I often start with gift extension then Cleansing light and supernatural blood then follow up with the rest.<br><br>'+
      'Using your heals is necessary for this build so no damage runs are not recommended.<br><br>'+
      "Overall this build focuses on shooting enemies from afar and continual shooting even after you're out of ichor so you don't need to be near enemies to regain it. You need to be good at dodging as your defenses aren't the best and always have pure blood on hand. Although Supernatural Blood lasts a while and gets extended further with gift extension, it will run out as you progress to higher difficulties where enemies have a higher health pool and higher defenses so keep that in mind.",
      'u/IC_Ivory280|fdrl6ua'
    ],

    'Molten Cannoneer' : [
      'IIRgzAPgogbBAMEAiILAEwLa4AOaALBAMIDs25xYiwB+AYiJgEKUiLHpHEir3xA',
      "A build based on everyone's favorite Cannoneer. Focuses on devastating enemies with the flamethrower and fire Gifts. Use Ranged Impact, Overdrive, and Time Crunch, then spam Burning Disaster's flamethrower attack to your heart's content as you set the world on fire."
    ],

    'Vampiric Ranger' : [
      'IIJhB8FEE4oRnAEQQBnMALOhwAcUsBhWQuBUtTAZnFIQDEQA2WsWkkBlIA',
      'A bayonet build primarily focued on shot attacks. Ranged Impact and Overdrive should be used to boost your shot damage, and Gift Extension to help extend these skills. If no DLC, you can supplement GE with Cognitive Zeal for a little extra damage. Unlike the Sacrificial version, this one uses Brodiaea in close combat to restore ichor. Allowing you to save those tasty regenerations.'
    ]
  },

  
  // # DARK GIFTS #
  // builds that deal with offensive gifts which devastate foes
  'dark_gifts' : {
    'Blade Mage' : [
      'IIJgHAPsBsEKIE4oGYoBYoEYtdQYSTwHYpJhMlQQoRsAxABgj0wxcJAFYUwg',
      'It allows you to use three elemental blades on cooldown rotation after using the three buffs (hasten to enhance swift destruction). To use this build effectively you must never attack with your physical weapon to keep merciless reaper in effect. Recharge ichor with chaotic ash and backstabs as you travel through dungeons. Though this build can be used in boss fights it is not optimized for them. Weapon is transformed to drain weapon as a backup in case you run out of ichor and you are unable to backstab. Alternatively you can remove a blade attack and use blood sacrifice if you dont mind the loss of hp for ichor. Gun is just an ideal long range solution but not necessary for the build to function.',
      'u/doppledanger21|f84ratz'
    ],
    
    'Dark Fighter' : [
      'IIRgTAPgognBwHYIBETwCwfpYAOCAwiAMzQAMhIaAYsRcGPSHA2gXEWsMUgWGEA',
      'Just a simple build using Artemis and with ability to have strong dark gifts, bayonet usage and cqc with one handed sword. A jack of all trades!',
      'cooldudeachyut|9'
    ],

    'Frigid Blade Bearer' : [
      'IIJgHAPskAwQIgRiiCdjOhAonAwgJxSKqjogCsxAbFACwDMEeIqhzIyAYjEA',
      "A build based on the lovely Blade Bearer. It uses frigid Gifts to freeze your foes solid along with high draing rating buffs to unleash an endless stream of icy hell that's sure to trigger some bad memories."
    ],

    "Queen's Chaos" : [
      'IIJgHAPsBsEAwQCIEYoBZ5VcSxkggGFltlZQNgBmAViwHYorJCQDCBOIkVAMTiA',
      "This is a magic build with a heavy focus on ichor restoration. Use your ichor spells to destroy the lost, then to regenerate your ichor, simply use Chaotic Ash or attack with all drain rating buffs active. Use Bridge to Glory to do extra damage while draining ichor with melee attacks OR swap it out for Gift Extension for longer drain rating buffs or Dark Shout to increase dark Gift damage. Aside from Lightning, you can use the following spell sets for exploiting weaknesses or when the element you're using isn't viable.<br><br>"+
      '<b>Blood:</b> Sanguine Roar + Vodnik Mass OR Purging Thorn<br>'+
      '<b>Fire:</b> Fire Storm OR Blazing Roar + Walpurgis Fire<br>'+
      "<b>Ice:</b> Guard of Honor + Baba Yaga's Gaze<br>"+
      "<b>Physical:</b> Arm of Set + Sands of Depravity<br><br>"+
      'Volatile Storm is primarily used for large groups, so for bosses, you can swap it out for a single-target spell, a buff, resistance removal, etc.'
    ],

    "Raijin, God of Lightning" : [
      'IIFgDAPsBsGQIgRiiOVnEQJggYQJwQCikuiyAYiABxQCsswWGWquWOBezEFAzNCA',
      "This Build is highly based around lightning and fast cooldowns and high damage, you should always buff up before entering a fight, then you can just use all of your abilities as much as you want because they do high damage and are very cheap so you can always have a lot of ichor thanks to you drain buffs and as long as the enemy isn't immune to lughtning then they should go down pretty fast, even if they are resistant!",
      'dmkellison|17'
    ],

    'Sacrificial Storm Mage' : [
      'IIJgHAPgogDBcBEAs9WgsSwCMA2CAwtthtiqPqAJwYDMJwtkRKAYtiIdjazEA',
      'A build that uses the three elements to bring ruin upon the lost. To boost your spell damage, make sure to buff up with Merciless Reaper and Cognitive Zeal, after this you may destory the lost. To restore ichor, utilize either Chaotic Ash or Blood Sacrifice. You want to avoid attacking with this build as to maintain Merciless Reaper.'
    ],

    'Sandstorm Lancer' : [
      'IIRgLAPgDBDCBMEAiJoWDYjQDYIFFsRsAOCAMXgGZ1VgqB2deSWATjnkXOM6qA',
      "Impaler polearm has amazing light attack chain vs single target but poor tracking and almost no crowd control, so I cover it with AoE dark gift. The idea is to blast the enemies' face with Sand of Depravity to get rid of the fodder and finish the bigger one in melee, you should get all ichor back at the end of each fight. Add some long ranged spell like Blast bolt & blood shot to snipe bayonet lost from a distance. Bridge to glory & Swift destruction will keep melee damage very respectable.",
      'u/srlynowwhat|f9otaxj'
    ],

    'Successor of the Queen' : [
      'IIJgHAPgogLBBCIIBE7AAwWGpwCMAbFpAMJ55Z654CslA7JUcAMwCcEJISAYni5zxoWYIA',
      "Emphasizing the Code's native Gifts, this build uses those Dark Gifts to deal a lot of damage quickly, with a quick Disremember to one cast out with max Ichor. Even if you don't get the elemental weakness of the enemy, it can deal a LOT of damage to them.<br><br>"+
      "Before you get into a fight, always remember to have the Merciless Reaper buff active. As of the current Patch (1.20), it only goes away when any melee attack is used, but the Spell Gifts are free reign which does help damage more (about 4800 more damage with the buff active, from my personal testing in the Training Area)<br><br>"+
      "When Ichor is low, Bloodsucking Blades with a high Drain-transformed weapon and the Weapon Drain Up allows you to quickly recover Ichor. Normal Attacks build around Ichor, with Heavy Attacks giving around 9-10 Ichor if all attacks (depending on your weapon's heavy attack) can connect with all applicable buffs. Chaotic Ash's primary use is to cover for both Bloodsucking Blades' and Merciless Reaper's Ichor costs together. Even with 0 Ichor, a quick swing of the Drain weapon can quickly allow you to get Chaotic Ash for Bloodsucking Blades, and subsequently more Ichor. Though if you prefer, you can switch out Chaotic Ash for a different active Gift of your choice.<br><br>"+
      "The biggest weakness of this build is its relatively low defenses. This build can be described as a bit of a \"Glass Cannon.\" Eating attacks isn't really recommended. Especially if you choose a different Drain weapon with the Slow mobility. If you feel you're not too good with dodging in general, you can swap out Chaotic Ash for Cleansing Light to offset possible damage taken.<br><br>"+
      "Side note, the weapons listed were primarily chosen for the \"Fashion\" sense while also being practical. For a little more effectiveness for the weapon damage and Drain rating, a Queenslayer Bayonet (no Transformation) and a hammer with the Drain transformation serve as better alternatives if you want to maximise weapon damage (for lower mobs) and Drain Rating respectively. However, keep in mind that one weapon MUST be of the Quick mobility to ensure Swift Destruction's damage is at its max. Plus, it does cover a lot of ground when dodging, so it doesn't hurt having the extra mobility.<br><br>"+
      "The Veil being of Intensification transformation, if only barely, allows weapon Mobility to be better while also giving more damage (even if it's only 4 points), so it is important.<br><br>"+
      "Nagimukro Drain is legit a personal choice. It's the best blend of style, drain, and damage at the cost of Mobility. But it has managed to serve well. If you want a Normal-mobility high-Drain weapon, your choices are either Sunset Greatsword, or Heavy Axe.",
      'u/arachnidsGrip88|fejk3r6'
    ],

    'The Twilight Mage' : [
      'IIRgLAPsAcEAwQCKWJBDQDYq2ATihAFZCB2KAZgCYoqRbIBhKiiR4pKhZqoA',
      "This mage heavily focuses on dark gifts. Specifically lightning based spells. With Jupiter's Blade for close range to Perkunas for long range power, this mage is capable of casting very strong spells. Although Twilight is bugged, it's still nice to cast it and see it in action in my opinion. <a href='https://youtu.be/ENGzvxUcWek' target='_blank'>https://youtu.be/ENGzvxUcWek</a><br><br>"+
      "This build uses survival instincts as it powers up your spells so having feral tenacity allows you to better use that passive while you also have a powerup from swift destruction and dark shout, though dark shout only works for one attack. I prefer to use it on Perkunas but it also works well on Twilight. Feral Tenacity also lasts until you take fatal damage so I always have it activated before I start any run with this build.<br><br>"+
      "Iceblood is very light and allows you to be quick so you can benefit completely from swift destruction. It may not do the highest damage and the Argent Wolf out classes it but it's moveset still gets the job done as far as ichor collecting goes and it has a powerful regular strong attack, which is something I use often.<br><br>"+
      "Overall this build has great damage, good survivability, and reliable mobility.",
      'u/IC_Ivory280|fe38zz9'
    ],

    'Vampiric Mage' : [
      'IIJgHAPsBsEAwQCIEYoBZ5VcSxkggGFltlZQNgBmAVihAE4oqnCQDDWRUAxOIA',
      'This build focuses on attacking with both physical and magical attacks. Use your ichor spells to devastate the lost and your buffs to regenerate your lost ichor with melee attacks.'
    ],
    
    '极致吸血' : [
      'IIZgHAPgwgjCEAYICEBsFgCZEe8GekSxOJUmM0m2SAogKxA',
      "一个可以拉满自身吸血能力的配装，在此配装下推图可以达到一刀7冥血的吸血效率，在boss战时，这个数值可以翻倍，极限之歌可以增加自身50%的法术伤害和吸血，由于吸血能力也进行了强化，极限之歌下的法术消耗增加将会被抵消，且冥血会更为充足。绝对零度铠可以提供高额的防御和伤害。该配装也是法系配装最为通用的。空出来的技能可根据地图特性以及自身偏好进行携带",
      'YoumuMoe|14'
    ],
  },

  
  // # LIGHT GIFTS #
  // builds that deal with support and sometimes offensive gifts
  'light_gifts' : {
    'BBC Countermeasure' : [
      'IIRgzAPgDNs-FQCY62EgLBAIuHIR8YBhJFYgTglMIDEog',
      'A template build for countering Blade Bearer and Cannoneer. Utilize the elemental resist Gifts in conjunction with the elemental resist items to render their attacks useless. You can also go the extra mile and transform your Blood Veil with Fire or Ice resist.<br><br>'+
      'Lastly, high ichor drain will help you maintain ichor for casting your resist gifts and offensive spells. Fill out the rest of the slots with whatever you prefer!'
    ],
    
    'Blade Bearer' : [
      'IIBgPsAcYMICwQIwQExPVJaaIGxgFFwdoYVkzttEBOWOnYyIA',
      "this build is essentially stacking buffs on each other. the bridge to glory being the best of them. if you can avoid being hit, overdrive is also a major buff. tested at +9 (both weapon and blood veil) and with all the buffs active, it does around 2.5k damage per hit with the ice blood.<br><br>"+
      "The Dammerung is there in case something is resistant to ice and the ice buff can be changed for another element if needed.<br><br>"+
      "bloodsucking blades says it cant be used but if you use Cognitive Zeal before, it becomes available due to the increase to willpower and with all the drain upgrades, you can do strong attacks with the ice blood and still regen ichor making it a viable option in a fight without risking the ichor you need back to make sure to keep the buffs up and running.",
      'anidarkk|11'
    ],

    'Deliverance' : [
      'IIZgjAPgDNECKRjYkBiaBMEDCYvqyVhlQBYcBOCVAVmrCA',
      'This is a support build for co-op that helps keep the host alive at the cost of your own life. Use Cleansing Light in tandem with Regenerator to ensure you can quickly recover your health while the host is being thrown around.'
    ],

    'Vampiric Blitzer' : [
      'IIRgrAPsBsEAwQCIigFnlFwAcECiCAwiFiAEyakWgDMadhZFhAnBIygGJxA',
      'This build focuses on close range elemental barrage spells and high drain rating melee attacks. Simply run up to any boss, spam your barrage spells, then if it is still alive, attack it with melee to regain your ichor and repeat. BLITZKRIEG!'
    ]
  },

  
  // # DEBUFF #
  // builds that deal with applying debuffs to the enemy
  'debuff' : {
    'Lost Binder' : [
      'IIRgzAPsBsEAwQCIggYUg0UAcECimIuoATBAEJnkCsFICAYiQCxoCcaJZqA7BA3CA',
      'A build for slowing enemies. Apply your buffs, with Binding Mark being used last. Then run up to an enemy/boss and activate Circulating Pulse to quickly build up Slow. If the enemy is not yet afflicted, you can finish the build up off with another Circulating Pulse or a projectile/trap gift.'
    ],

    'Paralytic Blade' : [
      'IIRgzAPsBsEAwQCIggYRQ0UAcECimIuoATBAEIrkAsFAnBAGIm2oOolmoCsTcQA',
      'A build for stunning enemies. Apply your buffs, with Numbing Mark being used last. Then run up to an enemy/boss and activate Circulating Pulse to quickly build up Stun. If the enemy is not yet afflicted, you can finish the build up off with another Circulating Pulse or a projectile/trap gift.'
    ],

    'Swift Stunner' : [
      'IIBgPsAcYMICwXDAjLAzBBwBMTkDYwBRcKWAdlgFZ0MYBOCbaYZVFMAMWziA',
      "This build allows you to stun and slow with the Interesting weapons like the Damerung and Iceblood. These weapons aren't the best, but they do give versatility and damage reduction. It also comes with magic so you can space out your enemy if needed. You will do amazing damage with slow, stun, and swift destruction. It also comes with a Devour night to get ichor up as fast as possible. Comes with One Handed mastery for ultimate damage. Can be used for bosses but switch out the stun, slow, and magic spells to the right weaknesses of the boss.",
      'ReignDestroys|12'
    ],

    'Venomous Serpent' : [
      'IITgPsCMlgDGARGBhe8oQBxgKLstgGIDsYAQvGQMzlEBMALGMuMnXc04bEA',
      'A build for poisoning enemies. Apply your buffs, with Venom Mark being used last. Then run up to an enemy/boss and activate Circulating Pulse to quickly build up Venom. If the enemy is not yet afflicted, you can finish the build up off with another Circulating Pulse or a projectile/trap gift.'
    ]
  }
};

// preset list order
CodeVeinBuilder.presetsOrder = [
  '1h',
  '2h',
  'halberd',
  'hammer',
  'bayonet',
  'dark_gifts',
  'light_gifts',
  'debuff'
];
