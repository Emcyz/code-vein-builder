// # Italiano TRANSLATION  By 清羽？ or  Qingyu510
// Language file for the entire application which can be used for translations.
window._lang = {
  // general placeholders
  na : 'N/A', // English abbreviation for "Not Available"; Japanese typically use "なし" (so use your equiv.)
  none : '(Nessuno)',
  
  
  // titles/labels
  weapon : "Arma",
  blood_veil : "Velo di sangue",
  transform : "Trasformazione",
  blood_code : "Codice sanguigno",
  gift_type : "Tipi dono",
  passive : "Passivo",
  active : "Attivo",
  options : "Opzioni",
  code_owner : "Detentore del codice",
  origin : "Accesso:",
  companion_rank : "Meriti come compagno",
  rv_mastery : "Maestria Rv",
  exclusive : "Esclusivo",
  dlc : "DLC",
  
  
  // modal
  modal_ok : "Conferma",
  modal_close : "Chiudi",
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
    initial : "Predefinito",
    '1h' : "Spada a una mano",
    '2h' : "Spada a due mani",
    halberd : "Alabarda",
    hammer : "Martello",
    bayonet : "Baionetta",
    light_gifts : "Luce Doni",
    dark_gifts : "Ombra Doni",
    debuff : "Debuff",
    misc : "Misto"
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
  status : "Statistiche",
  lv : "Livello",
  hp : "PF",
  sta : "Vigore",
  ichor : "Icore",
  str : "Forza",
  dex : "Destrezza",
  mnd : "Senno",
  wil : "Forza di volontà",
  vit : "Vitalità",
  for : "Fermezza",
  
  
  // weight
  weight : "Peso",
  total_weight : "Peso totale",
  weight_limit : "Limite di peso",
  
  
  // attack stats
  attack : "Attacco",
  drain_attack : "Attacco prosc.",
  physical : "Fisico", // weapon damage
  base : "Base", // base damage
  scaling : "Bilanciamento", // damage from scaling
  drain_rating : "Indice di prosciug.",
  
  
  // defense stats
  defense : "Difesa",
  stamina_reduction : "Riduzione vigore",
  balance : "Equilibrio",
  base_balance : "Equilibrio base",
  
  
  // resistances
  status_effects : "Effetti di stato",
  resistances : "Resistenze",
  venom : "Veleno",
  stun : "Stordimento",
  inhibit : "Inibizione",
  slow : "Lentezza",
  leak : "Falla",
  
  
  // misc menu options
  passive_effect : "Effetti passivi",
  on : "Sì",
  off : "No",
  hint : "Leggi suggerimento",
  
  
  // info group titles (stuff shown in the bottom info window when hovering over an item/skill)
  stat_scaling : "Bilanciamento stat.",
  required_stats : "Statistiche richieste",
  
  
  // mobility
  mobility : "Mobilità",
  mobi : {
    base : "Mobilità base", // label for blood code mobility type (also used in the status display)
    slow : "Lenta",
    normal : "Normale",
    quick : "Veloce"
  },

  
  // skill tree
  // used for actives, but is also used for passives (dunno know why, but I included it anyway to be identical to the game)
  tree : {
    title : "Albero",
    dark : "Ombra",
    light : "Luce",
    skill : "Abilità"
  },
  
  // weapon names/tooltips for weapon icons next to tree: skill
  '1h' : "Spada a una mano",
  '2h' : "Spada a due mani",
  halberd : "Alabarda",
  hammer : "Martello",
  bayonet : "Baionetta",
  
  
  // attack attributes
  attr : {
    // physical (mainly for weapons, but also present on some actives)
    slash : "Fendente",
    crush : "Schiacciante",
    pierce : "Perforante",
    
    // elemental (typically used in magic, but can be present on enchan- *ahem* transformed weapons)
    blood : "Sangue",
    fire : "Fuoco",
    ice : "Ghiaccio",
    lightning : "Elettricità"
  },
  
  
  // gift stats
  gift : "Dono", // singular
  gifts : "Doni", // plural
  
  ichor_cost : "Costo in icore",
  cooldown : "Ricarica",
   seconds : "sec.", // displayed after the cooldown number
  physical : "Tipo di attacco",
  elemental : "Non fisico",
  usage_req : "Req. utilizzo",
  
  
  // removal (of skills/equipment)
  remove : "Rimuovi",
  remove_desc : "Rimuovere l'abilità o il dispositivo dall'attrezzatura corrente.",
  
  
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
        name : "Destituzione",
        desc : "Il tuo codice sanguigno, che sembrava fosse<br>andato perso tempo fa quando affrontasti la <br>Regina, rievoca in te vecchi sentimenti.<br><br>Questa volta, devi ottenere una pace duratura.<br><br>Questo codice è ben equilibrato per esplorare e<br>combattere in mischia e conferisce resistenza e<br>PF elevati.",
        owner : "Giocatore"
      },
      
      A1 : {
        name : "Combattente",
        desc : "Il codice sanguigno di un guerriero che brandisce una<br>spada più lunga di lui.<br><br>Racchiude la volontà di chi ha rischiato la vita e dedicato<br>ogni sua forza per l'Operazione Destituzione.<br><br>Questo codice sanguigno rafforza chi combatte in mischia.<br>Migliora le abilità basate su forza e destrezza.",
        owner : "Sconosciuto"
      },
      
      A2 : {
        name : "Ranger",
        desc : "Il codice sanguigno di un redivivo che si muoveva<br>agilmente per il campo di battaglia.<br><br>Racchiude la volontà di chi ha difeso gli afflitti e <br>raccolto gocce di sangue da condividere.<br><br>Questo codice eccelle nel fornire supporto e <br>potenziamenti difensivi con i doni.",
        owner : "Sconosciuto"
      },
      
      A3 : {
        name : "Occultista",
        desc : "Il codice sanguigno di un redivivo che trasforma il<br>sangue assorbito in abilità devastanti.<br><br>Racchiude la volontà di chi ha usato doni complessi<br>per decimare orde di Corrotti.<br><br>Questo codice si specializza in potenti doni d'attacco<br>utilizzabili a distanza.",
        owner : "Sconosciuto"
      },
      
      A4 : {
        name : "Berserker",
        desc : "Codice sanguigno ereditato dal nucleo di un Vestigio<br>riparato. Racchiude la volontà ferrea di chi ha fatto<br>ammenda per gli errori passati e ha lottato fino alla fine<br>contro la sete per salvare gli altri.<br><br>Conferisce forza e resistenza elevate e la sua bassa<br>riserva di icore è compensata da un'armatura pesante.",
        owner : "Oliver Collins"
      },
      
      A5 : {
        name : "Prometeo",
        desc : "Codice sanguigno ricevuto da Louis. Racchiude la sua<br>volontà, acquisita e rafforzata superando innumerevoli<br>difficoltà per la salvezza dei redivivi.<br><br>Questo codice è ben equilibrato per il combattimento,<br>ma per certi versi fragile. I suoi doni supportano schivate<br>e parate.",
        owner : "Louis"
      },
      
      A6 : {
        name : "Cacciatore",
        desc : "Codice sanguigno ereditato dal nucleo di un Vestigio<br>riparato. Racchiude la volontà di un'anima che non ha<br>perso la speranza, nonostante sia stata usata e abbia<br>dovuto superare innumerevoli avversità.<br><br>Questo codice eccelle nel combattimento a distanza e<br>conferisce doni che supportano gli attacchi con baionetta.",
        owner : "Kevin"
      },
      
      A7 : {
        name : "Mercurio",
        desc : "Codice sanguigno ricevuto da Coco. Racchiude la sua<br>volontà combattiva, che scaccia via la paura della follia e della<br>battaglia per consentire l'esplorazione del mondo in rovina,<br>alla ricerca di materiali per ricostruire la civiltà.<br><br>Grazie alle statistiche equilibrate e ai doni legati a vigore<br>e foschia, permette di esplorare in sicurezza.",
        owner : "Coco"
      },
      
      A8 : {
        name : "Ermes",
        desc : "Codice sanguigno ricevuto da Davis.<br><br>Racchiude la sua incrollabile volontà di non cedere<br>mai allo sconforto e di gettarsi nel pericolo per far<br>rinascere negli altri la speranza.<br><br>Conferisce il giusto equilibrio tra combattimento in<br>mischia e vari doni di utilità.",
        owner : "Davis"
      },
      
      A9 : {
        name : "Oscuratore",
        desc : "Codice sanguigno ereditato dal nucleo di un Vestigio<br>riparato. Racchiude la dura volontà di un'anima ligia al<br>dovere, dedicata a preservare i valori anche quando<br>sembrano essere perduti.<br><br>Include diversi doni per il combattimento, con<br>specializzazione per quelli legati al veleno.",
        owner : "Erede senza nome"
      },
      
      A10 : {
        name : "Atlante",
        desc : "Codice sanguigno ricevuto da Yakumo.<br>Racchiude la sua fervida volontà di rischiare persino<br>la vita per proteggere chi gli è caro.<br><br>Consente l'uso di armature pesanti per un'eccellente<br>resistenza in combattimento negli scontri ravvicinati.<br>Inoltre, include doni utili per contrastare le minacce<br>potenti.",
        owner : "Yakumo Shinonome"
      },
      
      A11 : {
        name : "Assassino",
        desc : "Codice sanguigno ereditato dal nucleo di un Vestigio<br>riparato. Racchiude la volontà e la determinazione di<br>sopravvivere in un mondo caotico per riguadagnarsi la<br>libertà.<br><br>È ottimale per il combattimento in mischia e include<br>doni pensati per gli attacchi a sorpresa.",
        owner : "Riki"
      },
      
      A12 : {
        name : "Artemide",
        desc : "Codice sanguigno ricevuto da Mia.<br><br>Racchiude la sua intrepida volontà che spinge ad<br>affrontare un destino crudele per salvare chi soffre.<br><br>Conferisce vigore elevato e doni di attacco, ma poca<br>resistenza. Inoltre, include doni che potenziano le<br>abilità di prosciugamento.",
        owner : "Mia Karnstein"
      },
      
      A13 : {
        name : "Iside",
        desc : "Codice sanguigno ricevuto da Aurora.<br><br>Racchiude la sua volontà risoluta di proteggere e liberare<br>chi ha scelto la sofferenza affinché i redivivi potessero<br>vivere in pace.<br><br>Questo codice è indicato per il combattimento a distanza<br>e per sopraffare il nemico con attacchi d'icore.",
        owner : "Aurora Valentino"
      },
      
      A14 : {
        name : "Cassa toracica regale",
        desc : "Codice sanguigno ricevuto dal cimelio di Aurora che<br>racchiude una parte del potere della Regina.<br><br>Provoca la sensazione inquietante di essere divorati da<br>dentro, ma fa scorrere nelle vene un potere strabiliante.<br><br>Questo codice è indicato per il combattimento a distanza<br>e per sopraffare i nemici con vari doni d'attacco.",
        owner : "Regina"
      },
      
      A15 : {
        name : "Eos",
        desc : "Codice sanguigno ricevuto da Io.<br><br>Racchiude la sua ferma volontà di opporsi e compiere<br>le sue scelte, invece di limitarsi ad accettare il suo ruolo<br>di Custode.<br><br>Questo codice potenzia doni di supporto e conferisce<br>resistenza e icore elevati.",
        owner : "Io"
      },
      
      A16 : {
        name : "Fionn",
        desc : "Codice sanguigno ricevuto da Nicola.<br>Racchiude la sua volontà generosa di sopportare il<br>tormento di lottare contro se stesso, affinché chi gli<br>è caro possa vivere in un mondo più pacifico.<br><br>Questo codice conferisce resistenza e peso totale<br>elevati, ed è ottimo per il combattimento in mischia.<br>La sua bassa riserva di icore è compensata dall'armatura<br>pesante.",
        owner : "Nicola Karnstein"
      },
      
      A17 : {
        name : "Respiro regale",
        desc : "Codice sanguigno ricevuto dal cimelio di Nicola che<br>racchiude parte del potere della Regina.<br>Provoca la sensazione inquietante di essere divorati da<br>dentro, ma fa scorrere nelle vene un potere strabiliante.<br><br>Indicato per stili di combattimento che usano doni migliorati.<br>Compensa le statistiche basse con i doni.",
        owner : "Regina"
      },
      
      A18 : {
        name : "Sopravvissuto",
        desc : "Codice sanguigno ereditato dal nucleo di un Vestigio<br>riparato. Racchiude la volontà di rischiare la vita<br>combattendo per garantire un futuro alle nuove<br>generazioni.<br><br>Questo codice è incentrato sulla destrezza e<br>conferisce doni molto utili in battaglia.",
        owner : "Carmilla"
      },
      
      A19 : {
        name : "Cavaliere nero",
        desc : "Codice sanguigno ereditato dal nucleo di un Vestigio riparato.<br>Racchiude la tragica volontà di chi ha<br>subito esperimenti disumani fino a diventare la marionetta<br>di Mido e, infine, uno dei Corrotti.<br><br>Questo codice è incentrato su forza e resistenza elevate,<br>ma conferisce anche doni efficaci con l'alabarda.",
        owner : "Miguel García"
      },
      
      A20 : {
        name : "Scáthach",
        desc : "Codice sanguigno ricevuto da Emily.<br><br>Racchiude la volontà poderosa di chi ha preso il posto<br>dei compagni dormienti e ha lottato per proteggerli.<br><br>Questo codice è ben equilibrato sia per<br>i doni che per gli attacchi fisici, ed è specializzato nei<br>doni di fuoco.",
        owner : "Emily Su"
      },
      
      A21 : {
        name : "Artiglio regale",
        desc : "Codice sanguigno ricevuto dal cimelio di Emily che<br>racchiude parte del potere della Regina.<br><br>Provoca la sensazione inquietante di essere divorati da<br>dentro, ma fa scorrere nelle vene un potere strabiliante.<br><br>Questo codice consente di controllare il campo di battaglia<br>e di sopraffare i nemici con l'uso di doni e attacchi fisici.",
        owner : "Regina"
      },
      
      A22 : {
        name : "Armonia",
        desc : "Codice sanguigno ricevuto da Eva.<br><br>Racchiude la sua volontà di ripagare e dedicare la vita<br>a chi l'ha salvata dalla schiavitù.<br><br>Questo codice migliora i bonus di concentrazione e include<br>eccellenti doni ombra. Rende vulnerabili agli sbilanciamenti,<br>ma fornisce grandi quantità di icore.",
        owner : "Eva Roux"
      },
      
      A23 : {
        name : "Gola regale",
        desc : "Codice sanguigno ricevuto dal cimelio di Eva che<br>racchiude parte del potere della Regina.<br><br>Provoca la  sensazione inquietante di essere divorati da<br>dentro, ma fa scorrere nelle vene un potere strabiliante.<br><br>Questo codice è eccellente nel combattimento con i doni<br>e include molti doni di supporto.",
        owner : "Regina"
      },
      
      A24 : {
        name : "Heimdall",
        desc : "Codice sanguigno ricevuto da Jack.<br><br>Racchiude il suo senso del dovere e il suo voto al sacrificio<br>per preservare l'equilibrio.<br><br>Questo codice è indicato per i combattimenti in mischia<br>particolarmente aggressivi, ma consente di trasportare<br>poco peso.",
        owner : "Jack Rutherford"
      },
      
      A25 : {
        name : "Efesto",
        desc : "Codice sanguigno ricevuto da Murasame.<br><br>Racchiude la sua ardente volontà di assistere gli alleati<br>nelle difficoltà delle battaglie e di accoglierli col sorriso<br>quando fanno ritorno.<br><br>Questo codice è incentrato sulle armi basate su destrezza<br>e sfrutta doni ingannevoli che confondono il nemico.",
        owner : "Rin Murasame"
      },
      
      A26 : {
        name : "Guerriero",
        desc : "Codice sanguigno ereditato dal nucleo di un Vestigio<br>riparato. Racchiude la fiera volontà di un guerriero<br>veterano che ha combattuto fino al suo ultimo respiro.<br><br>Questo codice è ideale per stili di combattimento incentrati<br>sulla forza e conferisce doni che aiutano a sopravvivere.",
        owner : "Assistente di Murasame"
      },
      
      A27 : {
        name : "Ricognitore",
        desc : "Codice sanguigno ereditato dal nucleo di un Vestigio riparato.<br>Racchiude la generosità di chi ha sacrificato i propri<br>desideri e la propria vita per coloro che amava.<br><br>Questo codice conferisce eccellenti capacità prosciuganti nel combattimento<br>con i doni; permette di indossare armature leggere<br>e di muoversi più velocemente.",
        owner : "Naomi"
      },
      
      A28 : {
        name : "Regina",
        desc : "Codice sanguigno creato recuperando tutti i cimeli<br>e diventando la Regina.<br><br>La volontà che racchiude non presenta tracce di ira<br>o dolore, ma è fatta di pura solitudine.<br><br>Questo codice è incentrato sui doni e vanta un'ampia<br>riserva di icore con cui sopraffare i nemici.",
        owner : "Regina"
      },
      
      A29 : {
        name : "Ade",
        desc : "Codice sanguigno ricevuto da Silva.<br><br>Racchiude la volontà e la determinazione di chi si è<br>isolato abbandonando tutto per salvare l'umanità.<br><br>Questo codice vanta un elevato potere d'attacco<br>derivante da forza e destrezza, ed è indicato per<br>l'uso di equipaggiamento pesante.",
        owner : "Gregorio Silva"
      },
      
      A30 : {
        name : "Demetra",
        desc : "Codice sanguigno ricevuto da Karen.<br>Racchiude la volontà misericordiosa di chi si è sacrificato<br>per chi soffre il tormento della sete e si è fatto carico dei<br>peccati derivati da un destino crudele.<br><br>Grazie all'ampia riserva di icore, consente di fornire supporto<br>con i doni. Inoltre, consente di infliggere ingenti danni basati<br>sulla forza.",
        owner : "Karen"
      },
      
      A31 : {
        name : "Ishtar",
        desc : "Codice sanguigno ereditato dal nucleo del Vestigio<br>riparato di Cruz. Racchiude la determinazione di chi<br>ha eliminato una minaccia e salvato i più deboli fin<br>dagli albori del Progetto QUEEN.<br><br>Questo codice include doni che aiutano l'attacco e la<br>difesa, ma anche altri che richiedono il sacrificio di sé.",
        owner : "Cruz Silva"
      },
      
      A32 : {
        name : "Araldo",
        desc : "Il codice sanguigno di un individuo il cui cuore era stato<br>divorato da ambizioni segrete prima che diventasse un<br>redivivo.<br>È colmo di una inesorabile volontà di distruggere ogni cosa<br>con una forza sovrumana e di manifestarla ovunque a Vein,<br>il Carcere della foschia.<br><br>Include doni unici utilizzabili solo con determinazione.",
        owner : "Sconosciuto"
      },
      
      A33 : {
        name : "Astrea",
        desc : "Codice sanguigno nato come manifestazione del desiderio di<br>felicità di Mia.<br>È alimentato dalle sue preghiere di un rientro sicuro per i suoi<br>alleati e dalla volontà di confortarli e assisterli al loro ritorno.<br><br>Questo codice fornisce equilibrio e stabilità in combattimento,<br>e include doni utili nell'esplorazione.",
        owner : "Mia Karnstein"
      },
      
      // Hellfire Knight DLC
      A34 : {
        name : "Asclepio",
        desc : "Un codice sanguigno incentrato su vigore e PF <br>ereditato dal nucleo del Vestigio riparato di Valerio, <br>vecchio compagno di Jack.<br><br>Racchiude una ferrea volontà di sostenere <br>e proteggere ogni cosa.<br><br>Anche se non ha molte opzioni per il combattimento <br>diretto, migliora le possibilità di sopravvivenza<br>donando vigore e PF elevati.",
        owner : "Valerio"
      },
      
      A35 : {
        name : "Achille",
        desc : "<br><br>Un codice sanguigno che infonde grande destrezza<br>e vigore, ereditato dal nucleo di un Vestigio riparato.<br><br>Racchiude una strenua volontà di prevalere su ogni<br>campo di battaglia.<br><br>Vigore, armi leggere e attacchi rapidi sono il fulcro<br>di questo codice perfetto per mettere pressione <br>nel combattimento ravvicinato.",
        owner : "Sconosciuto"
      },
      
      A36 : {
        name : "Surt",
        desc : "Un codice sanguigno strappato a un orrore sigillato<br>nelle profondità.<br><br>Il fulgore delle fiamme al suo interno abbaglia ancora <br>nonostante il suo lungo sonno, donando una spaventosa <br>potenza in grado di polverizzare chiunque osi avvicinarsi.<br><br>È perfetto per i combattimenti dinamici dati gli elevati <br>livelli di forza, fermezza e vigore.",
        owner : "Cavaliere infernale"
      },
      
      // Frozen Empress DLC
      A37 : {
        name : "Polluce",
        desc : "Un codice sanguigno incentrato su forza e PF<br>ereditato dal nucleo di un Vestigio riparato.<br><br>Racchiude la volontà di un guerriero gentile <br>che ha lottato al fianco dei suoi amici.<br><br>Permette di sopportare gli attacchi nemici con<br>difesa e resistenza elevate per poi sferrare <br>colpi potentissimi.",
        owner : "Sconosciuto"
      },
      
      A38 : {
        name : "Ymir",
        desc : "Un codice sanguigno strappato a un orrore sigillato<br>nelle profondità.<br><br>I boccioli ghiacciati al suo interno splendono nonostante<br>il suo lungo sonno, aumentando la capacità di trovare il <br>momento giusto per annientare i nemici in un solo colpo.<br><br>Possiede elevati livelli di forza di volontà e vitalità che <br>aumentano i PF e la potenza dei doni ombra.",
        owner : "Imperatrice gelida"
      },
      
      // Lord of Thunder DLC
      A39 : {
        name : "Perseo",
        desc : "Un codice sanguigno che infonde grande forza <br>di volontà e senno, ereditato dal nucleo di un <br>Vestigio riparato.<br><br>Racchiude la volontà di un sagace guerriero in <br>grado di prendere il controllo di molte battaglie.<br><br>Grazie a potenti doni e molto icore, questo codice <br>permette di annientare un avversario dopo l'altro.",
        owner : "Sconosciuto"
      },
      
      A40 : {
        name : "Váli",
        desc : "Un codice sanguigno strappato ad un orrore sigillato<br>nelle profondità.<br><br>Il suo lungo sonno non ha quietato i tuoni che <br>ruggiscono al suo interno, donando il potere di <br>potenziarsi a piacimento e travolgere ogni cosa.<br><br>Dotato di grande destrezza e senno, si specializza<br> in un vasto numero di doni luce che supportano<br> il combattimento con vari potenziamenti.",
        owner : "Signore del tuono"
      },
      
      A41 : {
        name : "Orione",
        desc : "Un codice sanguigno che infonde grande destrezza <br>e forza di volontà, <br>ereditato dal nucleo di un Vestigio riparato.<br><br>Racchiude la volontà di un abile tiratore che un tempo<br>danzava con eleganza sul campo di battaglia.<br><br>È perfetto per il combattimento a distanza, dato che l'elevata<br>forza di volontà dona grande potenza d'attacco ai proiettili.",
        owner : "Sconosciuto"
      }
    },
    
    
    // # 2. PASSIVE SKILLS #
    passive : {
      // # GENERAL BOOSTS #
      A0 : {
        name : "Incremento di salute",
        desc : "Aumenta i PF massimi."
      },
      
      A1 : {
        name : "Stimolatore di salute",
        desc : "Aumenta i PF massimi."
      },
      
      A2 : {
        name : "Incremento di vigore",
        desc : "Aumenta il vigore massimo."
      },
      
      A3 : {
        name : "Stimolatore di vigore",
        desc : "Aumenta il vigore massimo."
      },
      
      A4 : {
        name : "Velocista",
        desc : "Riduce il consumo di vigore delle schivate."
      },
      
      A5 : {
        name : "Zanne affilate",
        desc : "Infliggi più danni eseguendo un prosciugamento<br>speciale dopo una parata o colpendo alle spalle."
      },
      
      A6 : {
        name : "Zanna tenace",
        desc : "Aumenta il danno degli attacchi prosciuganti eseguiti<br>dopo un attacco lancio."
      },
      
      A7 : {
        name : "Zanna eroica",
        desc : "Aumenta il danno delle abilità prosciuganti<br>caricate."
      },
      
      A8 : {
        name : "Distruzione rapida",
        desc : "Aumenta i danni inflitti proporzionalmente<br>alla tua mobilità."
      },
      
      A9 : {
        name : "Istinto di sopravvivenza",
        desc : "Doni e potenza d'attacco di armi e prosciugamento<br>migliorati se i PF sono sotto una certa soglia."
      },
      
      A10 : {
        name : "Schivata abile",
        desc : "Aumenta la quantità di concentrazione<br>generata schivando gli attacchi."
      },
      
      A11 : {
        name : "Concentrazione tenace",
        desc : "Aumenta la quantità di concentrazione generata<br>subendo danni."
      },
      
      A12 : {
        name : "Attacchi prosciuganti +",
        desc : "Aumenta l'indice di prosciugamento degli<br>attacchi con arma."
      },
      
      A13 : {
        name : "Avarizia",
        desc : "Aumenta l'icore ottenuto con gli attacchi prosciuganti."
      },
      
      A14 : {
        name : "Votato all'icore",
        desc : "Riduce i PF massimi per aumentare la quantità di icore<br>accumulabile."
      },
      
      A15 : {
        name : "Scorte di icore",
        desc : "Aumenta la quantità massima di icore accumulabile."
      },
      
      A16 : {
        name : "Doni veloci",
        desc : "Aumenta la velocità dono."
      },
      
      A17 : {
        name : "Acceleratore di carica",
        desc : "Aumenta la velocità delle azioni caricate."
      },
      
      A18 : {
        name : "Accumulo debuff",
        desc : "Migliora l'accumulo dei debuff contro<br>gli avversari."
      },
      
      A19 : {
        name : "Ambizione del redivivo",
        desc : "Consente di equipaggiare armi e veli di sangue più pesanti."
      },
      
      A20 : {
        name : "Opportunismo",
        desc : "Aumenta i danni inflitti dall'arma contro i nemici con<br>alterazioni di stato."
      },
      
      // Lord of Thunder DLC
      A21 : {
        name : "Impeto di sangue",
        desc : "Aumenta molto il limite massimo d'icore, ma riduce <br>molto la potenza dei doni e la velocità di recupero del vigore."
      },


      // # DEFENSE BOOSTS #
      B0 : {
        name : "Equilibrio +",
        desc : "Aumenta l'equilibrio."
      },
      
      B1 : {
        name : "Parata abile",
        desc : "Rigenera tutto il vigore quando si para un attacco."
      },
      
      B2 : {
        name : "Guardia prosciugante +",
        desc : "Aumenta l'indice di prosciugamento quando pari un<br>attacco nemico."
      },
      
      B3 : {
        name : "Schierata risoluta",
        desc : "Subire danni letali mentre i tuoi PF sono oltre una<br>certa soglia ti lascerà con 1 PF.",
        usage_req : "Atlante Codici sanguigni"
      },
      
      B4 : {
        name : "Furto sanguigno",
        desc : "Quando schivi prosciughi l'icore nemico in base all'indice<br>di prosciugamento della tua arma.",
        usage_req : "Artemide Codici sanguigni"
      },
      
      B5 : {
        name : "Tranello evasivo",
        desc : "Quando schivi gli attacchi, consumi icore per generare<br>dei proiettili che attaccano il nemico al contatto.",
        usage_req : "Efesto Codici sanguigni"
      },
      
      B6 : {
        name : "Resistenza veleno",
        desc : "Aumenta la resistenza al veleno."
      },
      
      B7 : {
        name : "Resistenza stordimento",
        desc : "Aumenta la resistenza allo stordimento."
      },
      
      B8 : {
        name : "Resistenza inibizione",
        desc : "Aumenta la resistenza all'inibizione."
      },
      
      B9 : {
        name : "Resistenza lentezza",
        desc : "Aumenta la resistenza alla lentezza."
      },
      
      B10 : {
        name : "Resistenza falle",
        desc : "Aumenta la resistenza alle falle."
      },


      // # STAT BOOSTS #
      C0 : {
        name : "Forza +",
        desc : "Aumenta la forza."
      },
      
      C1 : {
        name : "Destrezza +",
        desc : "Aumenta la destrezza."
      },
      
      C2 : {
        name : "Senno +",
        desc : "Aumenta il senno."
      },
      
      C3 : {
        name : "Forza di volontà +",
        desc : "Aumenta la forza di volontà."
      },
      
      C4 : {
        name : "Vitalità +",
        desc : "Aumenta la vitalità."
      },
      
      C5 : {
        name : "Fermezza +",
        desc : "Aumenta la fermezza."
      },
      
      C6 : {
        name : "Forza/Destrezza +",
        desc : "Aumenta la forza e la destrezza."
      },
      
      C7 : {
        name : "Forza/Volontà +",
        desc : "Aumenta la forza e la forza di volontà."
      },
      
      C8 : {
        name : "Forza/Vitalità +",
        desc : "Aumenta la forza e la vitalità."
      },
      
      C9 : {
        name : "Destrezza/Volontà +",
        desc : "Aumenta la destrezza e la forza di volontà."
      },
      
      C10 : {
        name : "Destrezza/Fermezza +",
        desc : "Aumenta la destrezza e la fermezza."
      },
      
      C11 : {
        name : "Senno/Volontà +",
        desc : "Aumenta il senno e la forza di volontà."
      },
      
      C12 : {
        name : "Senno/Vitalità +",
        desc : "Aumenta il senno e la vitalità."
      },
      
      C13 : {
        name : "Senno/Fermezza +",
        desc : "Aumenta il senno e la fermezza."
      },

      // Hellfire Knight DLC
      C14 : {
        name : "Forza/Fermezza +",
        desc : "Aumenta la forza e la fermezza."
      },
      
      // Frozen Empress DLC
      C15 : {
        name : "Forza volontà/Vitalità +",
        desc : "Aumenta la forza di volontà e la vitalità."
      },
      
      // Lord of Thunder DLC
      C16 : {
        name : "Destrezza/Senno +",
        desc : "Aumenta destrezza e senno."
      },
      

      // # FOCUS BOOSTS #
      D0 : {
        name : '<span style="font-family:GEZFont;"></span> Impulso d&#39;ombra',
        desc : "Aumenta l'efficacia dei doni ombra mentre si è concentrati."
      },
      
      D1 : {
        name : '<span style="font-family:GEZFont;"></span> Impulso di luce',
        desc : "Aumenta l'efficacia dei doni luce mentre si è concentrati."
      },
      
      D2 : {
        name : '<span style="font-family:GEZFont;"></span> Guardia stabile',
        desc : "Riduce il consumo di vigore durante la guardia mentre<br>si è concentrati."
      },
      
      D3 : {
        name : '<span style="font-family:GEZFont;"></span> Guardia concentrata',
        desc : "Aumenta la difesa dell'arma contro gli attacchi fisici<br>mentre si è concentrati."
      },
      
      D4 : {
        name : '<span style="font-family:GEZFont;"></span> Vigore concentrato',
        desc : "Riduce il consumo di vigore mentre si è<br>concentrati."
      },
      
      D5 : {
        name : '<span style="font-family:GEZFont;"></span> Concentrazione ferrea',
        desc : "Riduce il consumo della concentrazione nel tempo<br>mentre si è concentrati."
      },
      
      D6 : {
        name : '<span style="font-family:GEZFont;"></span> Carneficina concentrata',
        desc : "Riduce la concentrazione consumata dagli attacchi<br>mentre si è concentrati."
      },
      
      D7 : {
        name : '<span style="font-family:GEZFont;"></span> Attacchi d&#39;icore',
        desc : "Riduce il costo in icore degli attacchi con arma mentre<br>si è concentrati."
      },
      
      D8 : {
        name : '<span style="font-family:GEZFont;"></span> Riduzione icore',
        desc : "Riduce il consumo di icore mentre si è concentrati.",
        usage_req : "Gola regale Codici sanguigni"
      },
      
      D9 : {
        name : '<span style="font-family:GEZFont;"></span> Potenzia prosciugamenti',
        desc : "Aumenta tutti gli indici di prosciugamento mentre<br>si è concentrati."
      },
      
      D10 : {
        name : '<span style="font-family:GEZFont;"></span> Velocità concentrata',
        desc : "Aumenta la velocità dei tuoi doni mentre si è concentrati."
      },
      
      D11 : {
        name : '<span style="font-family:GEZFont;"></span> Buff sangue',
        desc : "Quando si è concentrati, l'arma equipaggiata infligge<br>danni da sangue."
      },
      
      D12 : {
        name : '<span style="font-family:GEZFont;"></span> Buff fuoco',
        desc : "Quando si è concentrati, l'arma equipaggiata infligge<br>danni da fuoco aggiuntivi."
      },
      
      D13 : {
        name : '<span style="font-family:GEZFont;"></span> Buff ghiaccio',
        desc : "Quando si è concentrati, l'arma equipaggiata infligge<br>danni da ghiaccio."
      },
      
      D14 : {
        name : '<span style="font-family:GEZFont;"></span> Buff fulmine',
        desc : "Quando si è concentrati, l'arma equipaggiata infligge<br>danni da fulmine."
      },
      
      D15 : {
        name : '<span style="font-family:GEZFont;"></span> Buff veleno',
        desc : "Avvelena temporaneamente l'arma attuale mentre<br>si è concentrati."
      },
      
      D16 : {
        name : '<span style="font-family:GEZFont;"></span> Buff stordimento',
        desc : "Mentre si è concentrati, l'arma attuale è in grado di<br>stordire temporaneamente."
      },
      
      D17 : {
        name : '<span style="font-family:GEZFont;"></span> Sorriso di dea',
        desc : "Rigenera PF quando si diventa concentrati."
      },
      
      // Frozen Empress DLC
      D18 : {
        name : '<span style="font-family:GEZFont;"></span> Concentrazione icore',
        desc : "Ripristina l'icore quando entri in uno stato di concentrazione."
      },
      
      // Lord of Thunder DLC
      D19 : {
        name : '<span style="font-family:GEZFont;"></span> Tutte le stat. +',
        desc : "Aumenta tutte le statistiche quando sei in uno stato di concentrazione."
      },
      
      D20 : {
        name : '<span style="font-family:GEZFont;"></span> Potere d&#39;arresto',
        desc : "Aumenta le probabilità che i nemici perdano <br>l'equilibrio per via dei colpi di baionetta <br>quando sei in uno stato di concentrazione."
      },


      // # WEAPON MASTERY #
      E0 : {
        name : "Maestria a una mano",
        desc : "Aumenta la potenza d'attacco quando si brandisce una spada a una mano."
      },
      
      E1 : {
        name : "Maestria a due mani",
        desc : "Aumenta la potenza d'attacco quando si brandisce una spada a due mani."
      },
      
      E2 : {
        name : "Maestria dell'alabarda",
        desc : "Aumenta la potenza d'attacco quando si brandisce<br>un'alabarda."
      },
      
      E3 : {
        name : "Maestria del martello",
        desc : "Aumenta la potenza d'attacco quando si brandisce un<br>grande martello."
      },
      
      E4 : {
        name : "Maestria della baionetta",
        desc : "Aumenta la potenza d'attacco quando si brandisce una baionetta."
      },


      // # MISC #
      F0 : {
        name : "Rigenerazione modificata",
        desc : "La rigenerazione si può utilizzare meno volte, ma<br>ripristina più salute."
      },
      
      F1 : {
        name : "Rigenerazione migliorata",
        desc : "Aumenta la quantità di PF ripristinata dagli<br>oggetti rigenerativi."
      },
      
      F2 : {
        name : "Rigenerazione potenziata",
        desc : "Aumenta il numero degli utilizzi della rigenerazione."
      },
      
      F3 : {
        name : "Passaggio di testimone",
        desc : "Ripristina la rigenerazione quando il compagno resta<br>senza PF e si disperde.",
        usage_req : "Astrea Codici sanguigni"
      },
      
      F4 : {
        name : "Furto vitale",
        desc : "Rigenera PF quando sconfiggi i nemici."
      },
      
      F5 : {
        name : "Prosciuga e rigenera",
        desc : "Gli attacchi prosciuganti rigenerano PF."
      },
      
      F6 : {
        name : "Danza di spade eterna",
        desc : "Versione migliorata di Danza di spade. Aumenta la<br>potenza d'attacco quando schivi.",
        usage_req : "Prometeo Codici sanguigni"
      },
      
      F7 : {
        name : "Veleno sanguisuga",
        desc : "Ottieni icore quando i nemici entro una certa distanza<br>ricevono danno da veleno.",
        usage_req : "Oscuratore Codici sanguigni"
      },
      
      F8 : {
        name : "Brama del redivivo",
        desc : "Aumenta la foschia guadagnata eliminando i nemici."
      },
      
      F9 : {
        name : "Avidità del redivivo",
        desc : "Aumenta la probabilità di ottenere oggetti dai nemici sconfitti."
      },
      
      F10 : {
        name : "Guida del pioniere",
        desc : "Rende più facile padroneggiare i doni."
      },
      
      F11 : {
        name : "Danni da caduta ridotti",
        desc : "Riduce i danni subiti cadendo."
      },
      
      F12 : {
        name : "Redenzione",
        desc : "Quando un alleato riceve danni fatali, i suoi PF si <br>riducono a 1 e i danni restanti vengono inflitti a te.<br><br>Questo effetto si attiva solo se hai 2 o più PF.<br>I danni che ricevi non possono ridurre i tuoi PF a 0.",
        usage_req : "Ishtar Codici sanguigni"
      },
      
      F13 : {
        name : "Infaticabilità",
        desc : "Aumenta il tasso di rigenerazione del<br>vigore."
      },
      
      F14 : {
        name : "Tempra",
        desc : "Aumenta la rigenerazione quando raccogli foschia persa<br>post-dispersione."
      },
      
      F15 : {
        name : "Daga del redivivo",
        desc : "Tira un coltello che conferisce icore quando colpisce<br>un avversario."
      },
      
      F16 : {
        name : "Completa attenzione",
        desc : "Conferisce concentrazione quando colpisci<br>con un'abilità prosciugante caricata."
      },
      
      F17 : {
        name : "Carisma",
        desc : "Incrementa le statistiche del tuo partner (non si applica al giocatore)."
      }
    },


    // # 3. ACTIVE SKILLS #
    active : {
      // # SPELLS #
      A0 : {
        name : "Freccia sonica",
        desc : "Spara un dardo generato con l'icore.<br><br>Una singola raffica non ha un grande effetto, ma<br>mostra la sua efficacia contro i nemici."
      },
      
      A1 : {
        name : "Colpo del sangue",
        desc : "Spara un grosso dardo generato con il potere del sangue.<br><br>Questa versione migliorata della Freccia sonica produce<br>un impatto maggiore."
      },
      
      A2 : {
        name : "Ruggito sanguinoso",
        desc : "Scaglia un proiettile di sangue immondo verso il bersaglio.<br><br>Un colpo diretto provoca ferite profonde che continuano a<br>divorare la vittima infliggendo grande dolore."
      },
      
      A3 : {
        name : "Ruggito incendiante",
        desc : "Investe il bersaglio con una fiammata intensa.<br><br>Si dice che le fiamme siano tanto roventi da<br>incenerire chiunque ne venga colpito."
      },
      
      A4 : {
        name : "Ruggito congelante",
        desc : "Spara un dardo gelido al bersaglio.<br><br>Un colpo diretto congela la vittima, annebbiandone<br>la mente e impedendole di pensare."
      },
      
      A5 : {
        name : "Ruggito folgorante",
        desc : "Scaglia una scarica elettrica verso il bersaglio.<br><br>Un colpo diretto fa ribollire il sangue del nemico,<br>provocandogli un dolore atroce."
      },
      
      A6 : {
        name : "Dardo insanguinato",
        desc : "Spara un dardo di icore al bersaglio.<br><br>La forza prodotta è molto concentrata e travolge<br>i nemici come una palla di cannone."
      },
      
      A7 : {
        name : "Dardo rovente",
        desc : "Spara un dardo incendiario al bersaglio.<br><br>La forza prodotta è molto concentrata e travolge<br>i nemici come una palla di cannone."
      },
      
      A8 : {
        name : "Dardo gelido",
        desc : "Spara un dardo gelido al bersaglio.<br><br>La forza prodotta è molto concentrata e travolge i nemici<br>come una palla di cannone."
      },
      
      A9 : {
        name : "Dardo elettrico",
        desc : "Spara un dardo folgorante al bersaglio.<br><br>La forza prodotta è molto concentrata e travolge<br>i nemici come una palla di cannone."
      },
      
      A10 : {
        name : "Raffica insanguinata",
        desc : "Scatena una raffica di dardi insanguinati che<br>bombardano i nemici in un'area vasta.<br><br>Con le sue raffiche rapide e continue, questa<br>abilità, seppur poco potente, può mettere alle<br>strette il nemico."
      },
      
      A11 : {
        name : "Raffica ardente",
        desc : "Scatena una raffica di dardi incendiari che bombardano<br>i nemici in un'area vasta.<br><br>Con le sue raffiche rapide e continue, questa abilità,<br>seppur poco potente, è capace di mettere alle strette<br>il nemico."
      },
      
      A12 : {
        name : "Raffica gelida",
        desc : "Scatena una raffica di dardi gelidi che bombardano<br>i nemici in un'area vasta.<br><br>Con le sue raffiche rapide e continue, questa abilità,<br>seppur poco potente, è capace di mettere alle strette<br>il nemico."
      },
      
      A13 : {
        name : "Raffica elettrica",
        desc : "Scatena una raffica di dardi elettrici che bombardano i<br>nemici in un'area vasta.<br><br>Con le sue raffiche rapide e continue, questa abilità,<br>seppur poco potente, può mettere alle strette il nemico."
      },
      
      A14 : {
        name : "Grumo del Vodnik",
        desc : "Annienta i nemici scatenando del sangue concentrato.<br><br>Il sangue maledetto dei morti condanna le sue vittime<br>all'inferno."
      },
      
      A15 : {
        name : "Fuoco di Valpurga",
        desc : "Controlla accuratamente il flusso sanguigno per scatenare<br>una vampata poderosa.<br><br>I redivivi che dubitano della propria forza non dovrebbero<br>usare tecniche avanzate. La loro potenza potrebbe sopraffarli<br>e distruggerli."
      },
      
      A16 : {
        name : "Sguardo di Baba Yaga",
        desc : "Controlla accuratamente il flusso sanguigno per scatenare<br>un'ondata di gelo poderosa.<br><br>Chi si disperde mentre una parte del corpo è congelata, non<br>può rigenerarla finché essa non si scongela. Spesso questo<br>punto debole viene sfruttato negli interrogatori."
      },
      
      A17 : {
        name : "Ira di Perkunas",
        desc : "Controlla accuratamente il flusso sanguigno per scatenare<br>una scossa poderosa.<br><br>La morte è l'unica salvezza dall'ira di un dio furibondo."
      },
      
      A18 : {
        name : "Fendente del crepuscolo",
        desc : "Usa l'icore per creare una lama di sangue che fende<br>i nemici in un arco di fronte a te.<br><br>Si apre uno squarcio nel cielo nebuloso e una lama<br>letale appare per annientare gli avversari."
      },
      
      A19 : {
        name : "Luna cremisi",
        desc : "Crea una lama di fuoco mediante l'icore che fende i<br>nemici in un arco di fronte a te.<br><br>Una luna rossa è un oscuro presagio. Si dice chiunque<br>la veda, presto o tardi, verrà colpito da una tremenda<br>sventura."
      },
      
      A20 : {
        name : "Fendente boreale",
        desc : "Usa l'icore per creare una lama di ghiaccio che fende<br>i nemici in un arco di fronte a te.<br><br>Si apre uno squarcio in aria e appare una lama di ghiaccio<br>scintillante. La luce la attraversa come un prisma e distrae<br>i nemici che presto la macchieranno con il loro sangue."
      },
      
      A21 : {
        name : "Lama di Giove",
        desc : "Usa l'icore per creare una lama elettrica che fende<br>i nemici in un arco di fronte a te.<br><br>Quando la vittima riapre gli occhi dopo il lampo<br>accecante, si accorge di essere già morta."
      },
      
      A22 : {
        name : "Esecuzione",
        desc : "Grazie alla tua volontà indomabile, evochi una<br>spada gigantesca che si abbatte sul nemico come<br>una ghigliottina.<br><br>Questa lama condanna a un destino ineluttabile.<br><br>Sarebbe più saggio accettarlo, invece che opporsi."
      },
      
      A23 : {
        name : "Tempesta di fuoco",
        desc : "Lancia una raffica di proiettili infuocati che sbilanciano<br>il nemico.<br><br>I singoli proiettili sono poco potenti, ma insieme riescono<br>a far barcollare anche i nemici più resistenti."
      },
      
      A24 : {
        name : "Folgore tonante",
        desc : "Spara una raffica di proiettili infusi con l'elettricità al<br>al bersaglio.<br><br>Questa saetta penetra persino nel terreno e nessuna<br>armatura può impedirle di penetrare fino alle ossa."
      },
      
      A25 : {
        name : "Guardia d'onore",
        desc : "Genera dei piloni di ghiaccio che bombardano senza sosta<br>il bersaglio.<br><br>Tra chi può lanciare ripetutamente un solo attacco e chi<br>deve schivarlo senza mai sbagliare, il vincitore è certo."
      },
      
      A26 : {
        name : "Scheggia danzante",
        desc : "Spara un proiettile rimbalzante.<br><br>È impossibile stabilire dove rimbalzerà un proiettile, ma <br>questo può aiutare a colpire i nemici più imprevedibili."
      },
      
      A27 : {
        name : "Paletto draconico",
        desc : "Tramuta il tuo sangue in un gigantesco paletto che<br>infilza il bersaglio.<br><br>Le vittime di questa tecnica rapida e potente si dice<br>finiscano direttamente all'oltretomba."
      },
      
      A28 : {
        name : "Spira di Indra",
        desc : "Scaglia tre potenti dardi elettrici ai piedi del bersaglio.<br><br>Questa tecnica vaporizza istantaneamente il sangue dei<br>malcapitati che hanno ricevuto un colpo diretto,  e ne fa<br>implodere l'organismo."
      },
      
      A29 : {
        name : "Verdetto inasprito",
        desc : "Scatena una raffica incessante di proiettili elettrici contro<br>il bersaglio.<br><br>Chi è colpevole agli occhi di un dio, non può mai sottrarsi<br>alla sua punizione. Questo dono non può essere utilizzato<br>di nuovo finché quell'ira sacra non si sarà placata."
      },
      
      A30 : {
        name : "Lascito del saggio",
        desc : "Accumula del sangue e lo scaglia verso il suolo, facendo<br>eruttare una colonna di sangue ai piedi del bersaglio.<br><br>Sebbene sia difficile da apprendere, questo dono è un<br>alleato prezioso se usato adeguatamente."
      },
      
      A31 : {
        name : "Ghiaccio d'icore",
        desc : "Condensa l'icore e lo trasforma in potenti schegge di<br>ghiaccio dirette sul nemico.<br><br>Lanciare questo dono richiederebbe un'energia e uno<br>sforzo enorme, devi quindi impiegare un cimelio come<br>catalizzatore."
      },
      
      A32 : {
        name : "Crepuscolo",
        desc : "Sprigiona un enorme raggio che trapassa ogni cosa che<br>si trova fronte a te.<br><br>Quando la luce svanisce, non resta neanche un granello<br>di polvere. Tutto viene disintegrato.",
        usage_req : "Cassa toracica regale Codici sanguigni"
      },
      
      A33 : {
        name : "Giglio fiammante",
        desc : "Scaglia una lama a tutta velocità che esplode poco dopo<br>aver infilzato qualcosa.<br><br>Oltre a bersagliare i nemici, i veterani usano questa <br>tecnica contro pareti e suolo per creare delle trappole."
      },
      
      A34 : {
        name : "Lama delle sabbie",
        desc : "Crea una lama di sabbia altamente pressurizzata che<br>scaglia via i nemici.<br><br>Questa tecnica sfrutta l'icore per degradare il suolo e<br>creare una lama di particelle sabbiose. Poichè chiede<br>di alterare rapidamente una sostanza, bisogna essere<br>molto abili per usare questo dono."
      },
      
      A35 : {
        name : "Tempesta instabile",
        desc : "Genera una lama di sabbia che converge sul bersaglio<br>ed esplode.<br><br>Un'esplosione tanto vasta si ottiene concentrando più<br>fonti di pressione su un singolo punto. Sfuggire ad una<br>tempesta di sabbia del genere è difficile, per non dire<br>impossibile."
      },
      
      A36 : {
        name : "Grinfie di Seth",
        desc : "Crea un braccio di sabbia che schiaccia senza<br>pietà il bersaglio.<br><br>Non si può sfuggire a questa trappola perché<br>i diversi strati di sabbia compressa la rendono<br>più dura dell'acciaio e fisicamente impossibile<br>da distruggere."
      },
      
      A37 : {
        name : "Sabbie della malvagità",
        desc : "Crea un'enorme tempesta di sabbia attorno al<br>bersaglio.<br><br>I veterani sanno di non dover mai abbassare<br>la guardia, poiché non si sa mai quale bestia <br>assetata di sangue potrebbe essere in agguato."
      },
      
      A38 : {
        name : "Cenere caotica",
        desc : "Spara un dardo prosciugante che assorbe icore<br>dal bersaglio.<br><br>I deboli diventano la linfa vitale dei più forti.<br>Non si tratta di un furto, ma di uno stratagemma<br>per garantire la sopravvivenza dei redivivi."
      },
      
      A39 : {
        name : "Spina purificatrice",
        desc : "Evoca una spina gigantesca che trapassa il bersaglio.<br><br>Questi spuntoni hanno ucciso miriadi di redivivi e per<br>questo sono tutt'ora molto temuti."
      },
      
      A40 : {
        name : "Croce del lupo argentato",
        desc : "Scaglia una lama di sangue a forma di croce verso il<br>bersaglio.<br><br>Un tempo questa tecnica veniva usata dal capo dei<br>Lupi Argentati, la croce dovrebbe simboleggiare una<br>preghiera per i caduti. Il paradosso sta nell'efficacia<br>di questo dono, tanto da fare a pezzi i suoi bersagli."
      },
      
      A41 : {
        name : "Balzo delle ombre",
        desc : "Sprigiona un'onda d'urto attorno a te, poi ti trasporta<br>istantaneamente indietro.<br><br>Questo dono fa disperdere il corpo per poi ricomporlo<br>immediatamente.",
        usage_req : "Iside Codici sanguigni"
      },
      
      A42 : {
        name : "Impatto sanguinolento",
        desc : "Investe i nemici in un'area con un'onda d'urto generata<br>dal rilascio improvviso di icore condensato.<br><br>Pur non infliggendo molti danni, questo dono permette<br>di avvicinarsi o distanziarsi dal nemico, e se viene usato<br>con astuzia, può ribaltare le sorti di una battaglia."
      },
      
      A43 : {
        name : "Manto invernale",
        desc : "Scatena una bufera glaciale e congela ogni cosa nei paraggi.<br><br>Nessun nemico può resistere al freddo e ai venti di questa<br>tormenta, che lascia inermi e indifesi."
      },
      
      A44 : {
        name : "Scoppio improvviso",
        desc : "Scatena un'esplosione gigantesca che investe i nemici<br>nell'area.<br><br>Pochi possono scampare ad una improvvisa esplosione,<br>specialmente se attirati vicino al punto d'origine.",
        usage_req : "Scáthach Codici sanguigni"
      },
      
      A45 : {
        name : "Fuoco fatuo",
        desc : "Evoca un dardo di icore che copre le spalle di chi<br>lo utilizza.<br><br>Sebbene infligga pochi danni, questo dono crea<br>trambusto tra le linee nemiche."
      },
      
      A46 : {
        name : "Brace difensiva",
        desc  : "Evoca un dardo di fuoco che copre le spalle di chi lo<br>utilizza.<br><br>Bastano pochi attimi per preparare questo dono ed<br>esso colpisce prima ancora che il nemico si accorga<br>della fiamma."
      },
      
      A47 : {
        name : "Scarica disperata",
        desc : "Dono pericoloso che sprigiona una grande quantità<br>di energia, infliggendo danni ingenti nell'area che ti<br>circonda e lasciandoti a un passo dalla morte.<br><br>Solo i redivivi che hanno sconfitto la paura della morte<br>sono in grado di usare questa tecnica. È uno spettacolo<br>macabro che provoca sgomento."
      },
      
      A48 : {
        name : "Rosa incendiaria",
        desc : "Lancia bombe incendiarie che esplodono dopo poco<br>danneggiando ogni cosa nell'area.<br><br>Quando ci si trova circondati senza una via di fuga,<br>l'unica cosa che si può fare è sperare di escogitare<br>qualcosa. È una situazione decisamente da evitare."
      },
      
      // Hellfire Knight DLC
      A49 : {
        name : "Fiammata tracciante",
        desc : "Sprigiona un minaccioso vortice di fuoco <br>che insegue il bersaglio.<br><br>Questo ciclone infuocato insegue il Corrotto <br>come se fosse dotato di volontà propria, <br>poi lo ingloba tra le fiamme senza dargli <br>possibilità di scampo."
      },
      
      A50 : {
        name : "Lama infuocata danzante",
        desc : "Evoca una spada fiammeggiante che vortica <br>attorno al tuo corpo.<br><br>Una lama di fuoco rotea velocemente attorno <br>all'utilizzatore, squarciando senza pietà <br>chiunque si avvicini."
      },
      
      // Frozen Empress DLC
      A51 : {
        name : "Flusso di brina",
        desc : "Emette raggi congelanti multidirezionali che colpiscono <br>ogni nemico sulla traiettoria.<br><br>I raggi ghiacciano tutto ciò che toccano, si diramano in <br>ogni direzione e imprigionano gli avversari circostanti <br>nel freddo abbraccio della morte.<br><br>Questo dono è tratto dal codice sanguigno dell'Imperatrice <br>e sviluppato dal suo potere, quindi grava molto sull'utilizzatore."
      },
      
      A52 : {
        name : "Torretta glaciale",
        desc : "Crea un ammasso di ghiaccio che scaglia <br>frammenti gelidi a intervalli regolari.<br><br>Anche se prese singolarmente le schegge sono <br>tutt'altro che letali, i loro danni totali sono notevoli."
      },
      
      // Lord of Thunder DLC
      A53 : {
        name : "Schianto meteorico",
        desc : "Genera massi infuocati nel cielo e li scaglia sui nemici <br>come una pioggia di meteoriti.<br><br>Potrà anche sembrare una semplice gragnuola di sassi, <br>ma sono molto pochi i Corrotti in grado di rimanere in <br>piedi dopo essere stati colpiti da uno sciame di meteore."
      },
      
      A54 : {
        name : "Onda polare",
        desc : "Richiama un gelo estremo che si espande sul terreno.<br><br>Chiunque ti si avvicini con cattive intenzioni verrà <br>bloccato da questa ondata di gelo."
      },
      
      A55 : {
        name : "Campo di cupidigia",
        desc : "Crea un campo che prosciuga ad intervalli regolari <br>l'icore dei nemici al suo interno.<br><br>Ti permette di sottrarre icore ai Corrotti senza <br>neppure avvicinarti a loro.<br><br>Anche una singola goccia d'icore può fare la <br>differenza fra la vita e la morte. Questa trappola <br>è perfetta per ribaltare la situazione usando i doni."
      },
      
      A56 : {
        name : "Impatto fulmineo",
        desc : "Balzi in aria e torni a terra generando <br>un'esplosione elettrica.<br><br>Questo attacco richiede tempo per concentrare <br>l'elettricità nella mano dell'utilizzatore, <br>ma sprigiona una potenza enorme.<br><br>Questo dono incanala il potere del <br>Signore del tuono nel corpo dell'utilizzatore e <br>può incenerire un redivivo debole in un istante."
      },


      // # DEBUFFS #
      B0 : {
        name : "Colpo velenoso",
        desc : "Spara un proiettile che avvelena il bersaglio.<br><br>Questo proiettile agisce nell'ombra, gettando le sue<br>vittime nel panico quando ne sottrae l'energia vitale."
      },
      
      B1 : {
        name : "Colpo stordente",
        desc : "Spara un proiettile al bersaglio e lo stordisce.<br><br>Questo proiettile agisce nell'ombra, gettando le<br>sue vittime nel panico perchè gli impedisce di<br>agire."
      },
      
      B2 : {
        name : "Colpo rallentante",
        desc : "Spara un proiettile che rallenta il bersaglio.<br><br>Questo proiettile agisce nell'ombra, gettando<br>le sue vittime nel panico quando ne ostacola i<br>movimenti."
      },
      
      B3 : {
        name : "Ragnatela velenosa",
        desc : "Piazza una trappola di icore modificato che avvelena<br>chiunque la calpesti.<br><br>Questa tecnica rileva il sangue degli assalitori e si attiva<br>solo contro di loro."
      },
      
      B4 : {
        name : "Ragnatela stordente",
        desc : "Piazza una trappola di icore modificato che stordisce<br>chiunque la calpesti.<br><br>Ogni dono è stato pensato come uno strumento per<br>sopravvivere. Quando ti trovi in difficoltà, usa questa<br>tecnica e poi scappa senza esitare."
      },
      
      B5 : {
        name : "Ragnatela rallentante",
        desc : "Piazza una trappola di icore modificato che rallenta i<br>movimenti di chiunque la calpesti.<br><br>I redivivi abili sono in grado di imprimere la propria<br>volontà nell'icore e controllarlo. Per diventare davvero<br>potenti bisogna innanzitutto comprendere se stessi."
      },
      
      B6 : {
        name : "Rete d'urto",
        desc : "Genera una trappola di icore poco potente ai tuoi piedi<br>che sbilancia gli assalitori.<br><br>L'inganno è più efficace quando eseguito velocemente e<br>completamente; basta un piccolo sospetto nel cuore per<br>generare grande paura e irrequietezza."
      },
      
      B7 : {
        name : "Fiamme dell'ira",
        desc : "Genera una trappola di icore ai tuoi piedi che investe gli<br>assalitori con una nube di fuoco.<br><br>Data la necessità di ridurre i Corrotti in cenere, sono stati<br>fatti numerosi esperimenti a riguardo. Bruciarli più volte<br>non ha mai dato esiti positivi."
      },
      
      B8 : {
        name : "Trappola velenosa",
        desc : "Sparge icore nell'area, creando una trappola velenosa<br>che tormenta gli assalitori.<br><br>L'unità di sicurezza Cerbero ha creato diversi doni, molti<br>dei quali con effetti indiretti."
      },
      
      B9 : {
        name : "Trappola stordente",
        desc : "Sparge icore nell'area, creando una trappola che stordisce<br>gli assalitori.<br><br>L'unità di sicurezza Cerbero ha creato diversi doni, molti dei<br>quali con effetti indiretti."
      },
      
      B10 : {
        name : "Trappola rallentante",
        desc : "Sparge icore nell'area, creando una trappola che rallenta<br>gli assalitori.<br><br>L'unità di sicurezza Cerbero ha creato diversi doni, molti dei<br>quali con effetti indiretti."
      },
      
      B11 : {
        name : "Sparo furioso",
        desc : "Scaglia un dardo che riduce la concentrazione del<br>nemico.<br><br>Le porte non si aprono a chi resta immobile a fissarle.<br>Avanza e spalancale."
      },


      // # BUFFS #
      C0 : {
        name : "Arma sanguinosa",
        desc : "Le armi attuali infliggono temporaneamente danni da<br>sangue aggiuntivi.<br><br>Per i redivivi, il sangue è una fonte di nutrimento, la <br>corazza che li protegge e una lama robusta che spazza<br>via ogni ostacolo. Per questo, tutti i redivivi vogliono<br>padroneggiarlo."
      },
      
      C1 : {
        name : "Arma infuocata",
        desc : "La tua attuale arma e quella del tuo compagno infliggono<br>temporaneamente danni da fuoco aggiuntivi.<br><br>Le ferite inferte con lame ustionanti sono di difficile<br>guarigione, persino per i redivivi."
      },
      
      C2 : {
        name : "Arma gelida",
        desc : "La tua arma attuale e quella del tuo compagno infliggono<br>temporaneamente danni da ghiaccio aggiuntivi.<br><br>Congelando una ferita, la dispersione viene rallentata<br>e la sofferenza prolungata."
      },
      
      C3 : {
        name : "Arma fulminea",
        desc : "Le armi attuali infliggono temporaneamente danni<br>da elettricità aggiuntivi.<br><br>Questo dono è un alleato prezioso, ma anche un<br>nemico temibile.<br><br>Ricorda: ciò che usi può essere usato anche contro<br>di te."
      },
      
      C4 : {
        name : "Marchio velenoso",
        desc : "Avvelena temporaneamente l'arma attuale.<br><br>Basta un fendente per iniettare una tossina che<br>distrugge la vittima dall'interno. La morte è certa,<br>ma solo dopo terribili sofferenze."
      },
      
      C5 : {
        name : "Marchio stordente",
        desc : "L'arma attuale è temporaneamente in grado di stordire<br>i nemici.<br><br>I sensi funzionano, ma il resto del corpo no. Come<br>comportarsi, allora, con una vittima col volto contorto<br>dal terrore? È tutto nelle mani di chi ha inciso questo<br>marchio."
      },
      
      C6 : {
        name : "Marchio protettivo",
        desc : "L'arma attuale è temporaneamente in grado di inibire<br>i nemici.<br><br>L'abilità di sigillare i doni è molto importante. Quando <br>viene messo all'angolo, chi può dire cosa potrebbe fare<br>un topo?"
      },
      
      C7 : {
        name : "Marchio vincolante",
        desc : "L'arma attuale è temporaneamente in grado di rallentare<br>i nemici.<br><br>Le vittime di questo effetto sono colte da un improvviso<br>senso di affaticamento. Il loro sangue diventa pesante e<br>i loro movimenti risultano goffi, lasciandole esposte agli<br>attacchi."
      },
      
      C8 : {
        name : "Adrenalina",
        desc : "Aumenta temporaneamente la potenza d'attacco.<br><br>Per spazzare via gli orrori che avevano invaso il mondo,<br>l'umanità aveva bisogno di un potere inimmaginabile.<br>Molto presto i doni divennero il barlume di speranza<br>che tutt'oggi illumina il cammino dei redivivi."
      },
      
      C9 : {
        name : "Via per la gloria",
        desc : "Aumenta per poco la potenza d'attacco.<br><br>I Corrotti immortali ottengono forza bevendo il sangue<br>dei viventi.<br>Saggezza, abilità ed esperienza sono fattori chiave per<br>sopravvivere a un mondo di prigionia."
      },
      
      C10 : {
        name : "Sovraccarico",
        desc : "Aumenta per un po' la potenza d'attacco tua e del tuo<br>partner. L'effetto termina appena subisci danno.<br><br>Questa abilità è  particolarmente indicata per lanciare <br>attacchi preventivi contro il nemico."
      },
      
      C11 : {
        name : "Impatto a distanza",
        desc : "Aumenta temporaneamente la potenza d'attacco dei<br>colpi sparati con le armi.<br><br>Dovendo affrontare battaglie accese una dopo l'altra,<br>un redivivo deve saper dosare le proprie energie.<br>Occuparsi dei nemici dalla distanza è un ottimo metodo<br>per conservarle."
      },
      
      C12 : {
        name : "Sussurro folle",
        desc : "Aumenta la potenza dell'attacco successivo.<br><br>Spezzare inconsciamente le catene che lo trattengono <br>e generare una forza che va oltre le barriere psicologiche<br>è impossibile per un umano, ma una questione di pratica<br>per un redivivo."
      },
      
      C13 : {
        name : "Zanna scattante",
        desc : "Aumenta la potenza dell'attacco successivo.<br><br>Condensando l'icore e liberandolo al momento opportuno,<br>si può ottenere un'improvvisa scarica di energia."
      },
      
      C14 : {
        name : "Mietitrice spietata",
        desc : "L'attacco successivo ignora parte della difesa fisica e<br>dell'arma del nemico.<br><br>Anche le armature più robuste vengono perforate da<br>questo colpo. È come la falce della nera mietitrice che,<br>in qualsiasi circostanza, non risparmia niente e nessuno."
      },
      
      C15 : {
        name : "Grido delle ombre",
        desc : "Aumenta di molto l'efficacia dei doni ombra per l'attacco<br>successivo.<br><br>Un grido di guerra risolleva il morale e aiuta a ritrovare la<br>forza di superare qualsiasi sfida."
      },
      
      C16 : {
        name : "Danza di spade",
        desc : "Aumenta temporaneamente la potenza d'attacco<br>quando danneggi un nemico con un'arma.<br><br>Pensa sempre a una via di fuga o le tue tattiche<br>potrebbero costare caro anche a te.",
        usage_req : "Prometeo Codici sanguigni"
      },
      
      C17 : {
        name : "Patto sacrificale",
        desc : "Aumenta di molto la potenza d'attacco, ma prosciuga<br>i PF nel tempo. L'effetto termina quando i PF sono<br>ridotti a 1.<br><br>Il potere assoluto ha un prezzo e solo a chi è disposto<br>a pagarlo è assicurata la vittoria.",
        usage_req : "Heimdall Codici sanguigni"
      },
      
      C18 : {
        name : "Fervore somatico",
        desc : "Aumenta temporaneamente la forza e la destrezza.<br><br>Il potenziamento offensivo conferito da questo dono<br>è molto apprezzato dai redivivi."
      },
      
      C19 : {
        name : "Fervore cognitivo",
        desc : "Aumenta temporaneamente senno e forza di<br>volontà.<br><br>Poiché potenzia i doni questa tecnica è molto<br>apprezzata dai redivivi."
      },
      
      C20 : {
        name : "Precisione",
        desc : "Rende temporaneamente più facile sbilanciare i nemici<br>con l'arma che usi.<br><br>Un piccolo vantaggio può ribaltare le sorti di una battaglia e<br>saperselo creare è fondamentale per riuscire a sopravvivere."
      },
      
      C21 : {
        name : "Banchetto di caccia",
        desc : "Aumenta temporaneamente l'indice di prosciugamento<br>degli attacchi con arma.<br><br>I doni giocano un ruolo fondamentale nelle battaglie.<br>Garantendo un apporto continuo di icore, l'efficacia<br>aumenta esponenzialmente."
      },
      
      C22 : {
        name : "Lame sanguisuga",
        desc : "Aumenta temporaneamente l'indice di prosciugamento<br>degli attacchi con arma tuoi e del tuo compagno.<br><br>Questo dono migliora l'efficienza dei meccanismi di<br>prosciugamento delle armi."
      },
      
      C23 : {
        name : "Maestria dei doni",
        desc : "Aumenta temporaneamente la velocità dono tua e quella<br>del tuo compagno.<br><br>I redivivi veterani sono capaci di destreggiarsi in battaglia<br>scatenando doni in rapida successione."
      },
      
      C24 : {
        name : "Doni prolungati",
        desc : "Prolunga temporaneamente l'effetto dei doni usati<br>da te e dal tuo compagno.<br><br>Può sembrare una cosa da poco, ma anche il  minimo<br>vantaggio può ribaltare le sorti di una battaglia."
      },
      
      C25 : {
        name : "Accelera",
        desc : "Sfrutta il potere dell'icore per migliorare le schivate<br>temporaneamente.<br><br>Questa tecnica consuma grandi quantità di icore e non<br>è facile da apprendere, ma la sua efficacia è innegabile."
      },
      
      C26 : {
        name : "Concentrazione",
        desc : "Riduce temporaneamente il consumo di vigore. L'effetto<br>termina appena subisci danno.<br><br>Questa abilità è particolarmente indicata per lanciare<br>attacchi preventivi contro il nemico."
      },
      
      C27 : {
        name : "Sforzo disperato",
        desc : "Quando esaurisci il vigore, ti consente di continuare a<br>svolgere azioni consumando PF.<br><br>Chi si spinge oltre i propri limiti nei momenti disperati <br>può diventare un eroe o uno sventurato.<br>Il vero coraggio richiede una certa dose di sfrontatezza.",
        usage_req : "Fionn Codici sanguigni"
      },
      
      C28 : {
        name : "Cuore valoroso",
        desc : "Migliora la vista e i riflessi, riducendo il costo in vigore<br>delle schivate.<br><br>Di fronte a qualunque pericolo, la prontezza mentale <br>e dei movimenti riduce al minimo i rischi."
      },
      
      C29 : {
        name : "Iniezione di morale",
        desc : "Aumenta il vigore massimo tuo e del tuo compagno e<br>lo ripristina completamente a entrambi.<br><br>I redivivi devono sempre stare all'erta per far fronte a<br>qualunque cambiamento ambientale. Per le creature<br>che non possono permettersi di riposare, questa è una<br>tecnica di prima necessità."
      },
      
      C30 : {
        name : "Tempi stretti",
        desc : "Sfrutta l'icore per velocizzare temporaneamente le<br>azioni caricate.<br><br>Avere più tempo a disposizione è un grande vantaggio<br>in battaglia. Un attacco in più può significare vittoria."
      },
      
      C31 : {
        name : "Sangue soprannaturale",
        desc : "Consente di sacrificare PF per usare i doni quando si<br>esaurisce l'icore.<br><br>L'intelligenza di un redivivo è incredibile, soprattutto<br>quando si tratta di usare doni potenti. Chi sacrifica la<br>propria forza vitale per raggiungere uno scopo, infatti,<br>può provocare facilmente la propria rovina.",
        usage_req : "Armonia Codici sanguigni"
      },
      
      C32 : {
        name : "Onda d'urto",
        desc : "Gli attacchi sono temporaneamente seguiti da un'onda <br>d'urto che provoca ulteriori danni.<br><br>Serve talento per acquisire questo dono, ma è una vera<br>manna."
      },
      
      C33 : {
        name : "Ultimo viaggio",
        desc : "Manda in crisi i tuoi poteri rigenerativi, portandoti alla<br>morte lentamente. Rigenera tutti i PF e potenzia tutte<br>le abilità, ma ti uccide dopo un certo periodo di tempo.<br><br>I redivivi sono praticamente immortali, ma disperdersi<br>può avere conseguenze gravi. Assicurati che ne valga la<br>pena.",
        usage_req : "Destituzione Codici sanguigni"
      },
      
      C34 : {
        name : "Fervore vigoroso",
        desc : "Aumenta temporaneamente fermezza e vitalità.<br><br>I redivivi possono tornare più e più volte dal regno dei morti, ma con più PF e una gran quantità di vigore non dovranno più finirci."
      },

      // Frozen Empress DLC
      C35 : {
        name : "Ordine offensivo",
        desc : "Riduce temporaneamente la tua difesa e aumenta <br>la potenza d'attacco tua e del tuo compagno.<br><br>Sacrificando la tua sicurezza puoi aumentare <br>le capacità offensive dei tuoi alleati in un attimo."
      },

      // Lord of Thunder DLC
      C36 : {
        name : "Icore efficiente",
        desc : "Riduce il costo in icore degli attacchi con arma per <br>un tempo limitato.<br><br>C'è chi fa attenzione al proprio icore mentre lotta <br>e chi non lo fa, ma una cosa è certa: uno dei due <br>sopravvive sicuramente di più."
      },


      // # DEFENSE BUFFS #
      D0 : {
        name : "Volontà di ferro",
        desc : "Riduce temporaneamente i danni subiti intessendo una<br>barriera attorno al sangue.<br><br>Evitare anche le ferite più lievi può incrementare di molto<br>le probabilità di sopravvivere."
      },
      
      D1 : {
        name : "Barriera immonda",
        desc : "Crea una barriera di icore densissimo che riduce<br>di molto il danno inflitto a te e al tuo compagno<br>dall'attacco successivo.<br><br>Anche una barriera temporanea può fungere da<br>vantaggio psicologico e portare al trionfo."
      },
      
      D2 : {
        name : "Sangue ablativo",
        desc : "Per un certo tempo, i danni subiti vengono notevolmente<br>ridotti consumando icore.<br><br>L'utilizzatore deve ricordare che è l'icore a tenerlo in vita.<br>Battere in ritirata è un'opzione più valida rispetto a morire.",
        usage_req : "Eos Codici sanguigni"
      },
      
      D3 : {
        name : "Colosso",
        desc : "Aumenta equilibrio e resistenza contro gli attacchi diretti,<br>ma riduce la mobilità e la resistenza agli elementi.<br><br>Questo dono rimuove una debolezza ma ne genera altre,<br>rendendone difficile l'utilizzo. Tuttavia, se usato in modo<br>corretto risulta molto efficace.",
        usage_req : "Respiro regale Codici sanguigni"
      },
      
      D4 : {
        name : "Baluardo saldo",
        desc : "Aumenta temporaneamente la difesa dell'arma contro<br>gli attacchi fisici.<br><br>Un redivivo che ha ceduto alla follia non è un avversario<br>facile. L'unità Cerbero ha imparato ad affidarsi a una difesa<br>solida capace di tramutarsi in una risorsa offensiva."
      },
      
      D5 : {
        name : "Guardia e contrattacco",
        desc : "Consente temporaneamente di deviare gli attacchi<br>e sbilanciare gli avversari dopo una guardia riuscita.<br><br>Bloccare un attacco nemico e poi colpirlo mentre è<br>ancora scoperto è una tattica semplice, ma non per<br>questo poco efficace."
      },
      
      D6 : {
        name : "Forza frantumante",
        desc : "Rende momentaneamente più facile spezzare la guardia<br>di un avversario.<br><br>Non bisogna temere il nemico che pensa solo a difendersi.<br>Una lama salda si aprirà un varco e trionferà."
      },
      
      D7 : {
        name : "Guardia stabile",
        desc : "Riduce temporaneamente il costo in vigore della guardia.<br><br>Una volta spezzate le difese, lo scontro può considerarsi<br>concluso, ma fintanto che reggono, non è ancora finita."
      },
      
      D8 : {
        name : "Velo prismatico",
        desc : "Aumenta temporaneamente la difesa dell'arma contro gli<br>attacchi elementali.<br><br>Un redivivo che ha ceduto alla follia non è un avversario<br>facile. L'unità Cerbero ha imparato a affidarsi a una difesa<br>potente capace di tramutarsi in una risorsa offensiva."
      },
      
      D9 : {
        name : "Barriera sanguigna",
        desc : "Crea una barriera temporanea nell'area che attenua la<br>potenza del sangue, aumentando la tua resistenza a esso.<br><br>L'icore modifica le sue proprietà in base a quanto è forte la<br>volontà dell'utilizzatore. Tramutarlo in una barriera è un <br>compito facile."
      },
      
      D10 : {
        name : "Barriera ignifuga",
        desc : "Crea una barriera temporanea nell'area che attenua la<br>potenza del fuoco, aumentando la tua resistenza.<br><br>Il campo generato riduce la forza delle fiamme e i danni<br>da calore."
      },
      
      D11 : {
        name : "Barriera anti-gelo",
        desc : "Crea una barriera temporanea nell'area che attenua la<br>potenza del ghiaccio, aumentando la tua resistenza a esso.<br><br>Il campo generato impedisce di congelare e riduce i danni<br>da ghiaccio."
      },
      
      D12 : {
        name : "Velo di Raijin",
        desc : "Crea una barriera temporanea nell'area che attenua la<br>potenza dell'elettricità, aumentando la tua resistenza.<br><br>Anche se diventa un Corrotto, un redivivo non dimentica<br>come usare i doni e scatenarli senza pietà sui propri vecchi<br>compagni. Per questo sono necessarie tali contromisure."
      },
      
      D13 : {
        name : "Bastione elementale",
        desc : "Aumenta temporaneamente la tua resistenza e quella del tuo<br>compagno a tutti gli elementi.<br><br>Un guerriero abile è capace di adattarsi a qualunque evenienza.<br>Essere troppo superbi conduce a una morte prematura."
      },
      
      D14 : {
        name : "Cuore regale",
        desc : "Aumenta temporaneamente la resistenza agli<br>sbilanciamenti.<br><br>Nel caos della battaglia, una mente salda è ciò che<br>tiene in vita un redivivo. Senza di essa, è inutile<br>sperare in un futuro."
      },
      
      D15 : {
        name : "Combattente tenace",
        desc : "Aumenta temporaneamente la resistenza allo<br>sbilanciamento degli attacchi nemici.<br><br>Solo i guerrieri tenaci abbastanza da resistere a<br>qualunque attacco sopravvivono in questo mondo."
      },
      
      D16 : {
        name : "Equilibrio perfetto",
        desc : "Aumenta di molto la resistenza agli sbilanciamenti per<br>un attacco.<br><br>Lanciarsi all'attacco senza timore è un passo deciso verso<br>il futuro."
      },
      
      D17 : {
        name : "Generazione di anticorpi",
        desc : "Aumenta temporaneamente la resistenza a tutti i debuff.<br><br>Inutile dire che gli effetti di stato sono un problema serio<br>per chi utilizza i doni. Un errore di preparazione potrebbe<br>portare a una morte repentina."
      },
      
      D18 : {
        name : "Contromisura",
        desc : "Per un tempo limitato, schivare gli attacchi genera dei<br>proiettili che attaccano il nemico al contatto.<br><br>Il coraggio di farsi avanti senza esitazione è importante,<br>ma non bisogna mai dimenticare i rischi."
      },
      
      D19 : {
        name : "Vendetta astuta",
        desc : "Per un tempo limitato, subire danni genera dei dardi<br>infuocati che attaccano il nemico al contatto.<br><br>Queste fiamme furiose prevengono altri attacchi e per<br>i redivivi sono fiamme di salvezza.",
        usage_req : "Artiglio regale Codici sanguigni"
      },
      
      D20 : {
        name : "Tenacia selvaggia",
        desc : "Dopo aver usato questo dono, se subisci danni letali<br>mentre i tuoi PF sono oltre una certa soglia, resterai<br>con 1 PF.<br><br>Questo effetto si attiva una volta sola. Affidati al tuo<br>coraggio, qualunque sia il pericolo. Aggrappati alla vita<br>e niente potrà fermarti."
      },
      
      // Frozen Empress DLC
      D21 : {
        name : "Corpo d'acciaio",
        desc : "Riduce l'efficacia del tuo dono ma aumenta <br>temporaneamente i tuoi PF massimi.<br><br>Sta a te decidere come utilizzare la grande <br>quantità di PF offerta da questo dono."
      },
      
      D22 : {
        name : "Guardia circolare",
        desc : "Permette di usare la guardia su tutti i lati invece che solo di fronte.<br><br>Ora non hai più nulla da temere, chiunque siano i tuoi nemici. <br>Ricorda però che la fortuna non sorride a chi si limita a parare"
      },
      
      D23 : {
        name : "Ordine difensivo",
        desc : "Riduce temporaneamente la tua potenza d'attacco <br>e aumenta la difesa tua e del tuo compagno.<br><br>Sacrificando la tua sicurezza puoi aumentare le <br>capacità difensive dei tuoi alleati in un attimo."
      },
      
      // # COMMUNAL GIFTS #
      E0 : {
        name : "Abbandono temerario",
        desc : "Dono in comune con Louis che aumenta l'attacco<br>a scapito della riduzione danni e modifica le tue<br>manovre evasive.<br><br>Questo dono sfrutta la sete dei redivivi e genera<br>potenza, perciò ogni passo falso può facilmente<br>portare alla follia. Per questo richiede una forte<br>determinazione.",
        usage_req : "Attualmente in coppia con Louis"
      },
      
      E1 : {
        name : "Lupinus vita",
        desc : "Dono comune con Yakumo che riduce il consumo di<br>vigore in guardia e potenzia il primo attacco in base<br>ai colpi parati, ma riduce anche la velocità di schivata.<br><br>L'istinto di proteggere e assistere gli alleati infonde il<br>sangue di rinnovato vigore. Gli ostacoli si sgretolano se<br>colpiti con il peso della responsabilità.",
        usage_req : "Attualmente in coppia con Yakumo"
      },
      
      E2 : {
        name : "Dardo del risoluto",
        desc : "Dono comune con Io che rende resistenti agli<br>sbilanciamenti, ma riduce l'efficacia del prosciugamento.<br><br>Allo scopo di compiere il proprio destino, una volontà forte<br>e radicata è capace di risvegliare qualsiasi potere dormiente.",
        usage_req : "Attualmente in coppia con Io"
      },
      
      E3 : {
        name : "Risveglio sanguigno",
        desc : "Dono comune con Mia che riduce i costi in icore e<br>aumenta l'efficacia dei doni a scapito della potenza<br>d'attacco in mischia.<br><br>Il sangue risvegliato conferisce la forza di sopravvivere<br>in questo mondo desolato. Sotto il suo effetto, ciò che<br>ti circonda inizia ad assumere tratti fiabeschi.",
        usage_req : "Attualmente in coppia con Mia"
      },
      
      E4 : {
        name : "Impeto fatale",
        desc : "Dono comune con Jack che aumenta la potenza d'attacco,<br>riduce il consumo di vigore e il numero di rigenerazioni.<br><br>Preservare il Carcere della foschia implica rischiare la vita<br>propria per scongiurare qualsiasi minaccia. Solo i redivivi<br>più intrepidi osano svolgere questo compito.",
        usage_req : "Attualmente in coppia con Jack"
      },
      
      E5 : {
        name : "Melodia effimera",
        desc : "Dono comune con Eva che migliora il prosciugamento<br>e l'efficacia dei doni, ma aumenta il consumo di icore.<br><br>Il sangue dei redivivi danza nelle vene, come se fosse<br>ispirato da una magnifica canzone che trafigge il cuore<br>e disseta l'anima con un fiotto di nettare rosso.",
        usage_req : "Attualmente in coppia con Eva"
      },
      
      
      // # MISC #
      F0 : {
        name : "Offerta rigenerativa",
        desc : "Sacrifica parte dei tuoi PF per rigenerare quelli dei compagni.<br><br>Un redivivo non ha più paura della morte.<br>Ciò che teme di più, invece, è perdere il legame di fiducia che<br>lo lega agli altri e ritrovarsi a vivere una vita solitaria.",
        usage_req : "Hai 2 o più PF"
      },
      
      F1 : {
        name : "Benedizione solidale",
        desc : "Consuma una quantità considerevole dei tuoi PF per<br>rigenerare quelli del compagno.<br><br>La volontà di chi rischia la vita al proprio fianco è una<br>benedizione capace di sanare le ferite degli alleati.",
        usage_req : "Hai 2 o più PF"
      },
      
      F2 : {
        name : "Auto-cura",
        desc : "Userai in automatico Offerta rigenerativa quando<br>il tuo compagno subisce danni critici.<br><br>Tuttavia consumerai in anticipo i PF.<br><br>Sacrificare se stessi per salvare la vita degli altri,<br>non è cosa facile. E la luce della salvezza è il frutto<br>di un rapporto profondo.",
        usage_req : "Demetra Codici sanguigni<br>Hai 2 o più PF"
      },
      
      F3 : {
        name : "Intervento salvifico",
        desc : "Sacrifica PF per curare il tuo compagno e potenzia<br>temporaneamente la difesa.<br><br>Non si sopravvive alla prigione della realtà da soli e<br>ciò che adesso è doloroso, in futuro potrebbe rivelarsi<br>un'ancora di salvezza.",
        usage_req : "Astrea Codici sanguigni<br>Hai 2 o più PF"
      },
      
      F4 : {
        name : "Luce purificatrice",
        desc : "Per un tempo limitato, parte del danno ricevuto si<br>rigenererà lentamente da solo.<br><br>Il dolore ricorda ai redivivi la vita che hanno perduto.<br>Da un certo punto di vista, è una benedizione. Questi<br>pensieri stimolano le loro cellule a rigenerarsi da sole."
      },
      
      F5 : {
        name : "Rigeneratore",
        desc : "Potenzia le capacità rigenerative tue e del tuo compagno,<br>aumentando la quantità di PF ripristinata attraverso la<br>rigenerazione.<br><br>Anche una minima differenza in resistenza può decidere<br>le sorti di molte battaglie. Una maggiore sicurezza inoltre<br>mantiene alto il morale."
      },
      
      F6 : {
        name : "Rimuovi veleno",
        desc : "Cura te e il tuo compagno dal veleno.<br>Può essere usato preventivamente.<br><br>Nonostante la natura immortale dei redivivi, le<br>malattie rimangono un problema e la medicina<br>un campo di studi fondamentale.<br>Ancora oggi, le loro vite dipendono dagli sforzi<br>assidui dei ricercatori."
      },
      
      F7 : {
        name : "Rimuovi stordimento",
        desc : "Cura te e il tuo compagno dallo stordimento.<br>È consigliabile usarlo preventivamente.<br><br>Nonostante la natura immortale dei redivivi, le<br>malattie rimangono un problema e la medicina<br>un campo di studi fondamentale.<br>Ancora oggi, le loro vite dipendono dagli sforzi<br>assidui dei ricercatori."
      },
      
      F8 : {
        name : "Rimuovi inibizione",
        desc : "Cura te e il tuo compagno dall'inibizione.<br>Può essere usato preventivamente.<br><br>Nonostante la natura immortale dei redivivi, le<br>malattie rimangono un problema e la medicina<br>un campo di studi fondamentale.<br>Ancora oggi, le loro vite dipendono dagli sforzi<br>assidui dei ricercatori."
      },
      
      F9 : {
        name : "Rimuovi lentezza",
        desc : "Cura te e il tuo compagno dalla lentezza.<br>Può essere usato preventivamente.<br><br>Nonostante la natura immortale dei redivivi, le malattie<br>rimangono un problema e la medicina un campo di studi<br>fondamentale. Ancora oggi, le loro vite dipendono dagli<br>sforzi assidui dei ricercatori."
      },
      
      F10 : {
        name : "Rimuovi falla",
        desc : "Cura te e il tuo compagno dalle falle.<br>Può essere usato preventivamente.<br><br>Nonostante la natura immortale dei redivivi, le<br>malattie rimangono un problema e la medicina<br>un campo di studi fondamentale.<br>Ancora oggi, le loro vite dipendono dagli sforzi<br>assidui dei ricercatori."
      },
      
      F11 : {
        name : "Essenza di panacea",
        desc : "Rimuove ogni debuff da te e dal tuo compagno.<br>Può impedirne l'applicazione se usato preventivamente.<br><br>Ridere insieme ai tuoi compagni e ricordare la fiducia e<br>l'affetto che vi lega sono un ottimo toccasana per i cuori<br>stremati dalle continue battaglie."
      },
      
      F12 : {
        name : "Sacrificio di sangue",
        desc : "Consuma i tuoi PF per conferirti icore.<br><br>Per i redivivi che passano molto tempo a combattere,<br>l'importanza dell'icore è innegabile. Grazie alla sua forza,<br>quella di finire polverizzati è solo una paura remota."
      },
      
      F13 : {
        name : "Dimenticare",
        desc : "Tutti i doni che richiedono tempo per essere<br>lanciati diventano istantanei.<br><br>Se la situazione si fa tragica, è meglio scordare<br>tutto e ricominciare dall'inizio."
      },
      
      F14 : {
        name : "Luce fluttuante",
        desc : "Crea una sfera luminosa ai tuoi piedi.<br><br>Quando ancora si utilizzavano le luci chimiche, molte<br>spedizioni si interrompevano quando terminavano le<br>scorte.<br><br>Poter utilizzare i doni, invece, permette di ovviare a<br>questo problema."
      },
      
      F15 : {
        name : "Vivificazione",
        desc : "Provoca una dispersione spontanea, facendoti tornare<br>all'ultimo vischio toccato senza farti perdere foschia.<br><br>Ritirarsi non è da codardi. Saper scegliere quando<br>combattere è importante in questo mondo spietato."
      },
      
      F16 : {
        name : "Persecutore notturno",
        desc : "Attenua i rumori che produci, rendendo più difficile<br>individuarti.<br><br>Se avverti un rumore, anche minimo, voltati sempre a<br>controllare. Non puoi mai sapere chi o cosa nascosto<br>nell'ombra  si possa avvicinare."
      },
      
      F17 : {
        name : "Coltre nebbiosa",
        desc : "Avvolge il corpo in una bruma sanguigna, rendendo più<br>difficile ai nemici notarti.<br><br>Non è facile avvistare qualcosa in mezzo a questa fitta<br>foschia."
      },
      
      F18 : {
        name : "Cercatore di bottino",
        desc : "Scopri se ci sono oggetti non raccolti entro un certo raggio.<br><br>Fiuti le deboli tracce del tuo bersaglio grazie ai sensi<br>sovrumani garantiti dalla fame dei redivivi."
      },
      
      F19 : {
        name : "IFF attivo",
        desc : "Sul tuo radar vengono mostrati i nemici presenti entro<br>un certo raggio.<br><br>Gli immortali dovrebbero temere la morte più di chiunque<br>altro, se non desiderano sperimentare le pene di un eterno<br>tormento."
      },
      
      F20 : {
        name : "Rilevatore di tesori",
        desc : "Sul tuo radar vengono mostrati gli oggetti non raccolti entro<br>un certo raggio.<br><br>Disperdi piccole quantità del tuo stesso sangue e lo usi per<br>perlustrare l'area. Questa capacità va be oltre i limiti umani."
      },
      
      F21 : {
        name : "Fiuto per le ricompense",
        desc : "Scopri se ci sono oggetti non raccolti entro un certo<br>raggio sulla mappa attuale.<br><br>Fiuti le deboli tracce del tuo bersaglio grazie ai sensi<br>sovrumani garantiti dalla fame incessante dei redivivi.<br>Completa la tua collezione."
      },
      
      F22 : {
        name : "Abisso lancinante",
        desc : "Salti e colpisci con tutta la tua potenza.<br>Abilità offensiva eseguita con spada a una mano/alabarda/baionetta.<br><br>Fai un salto in aria e sferri un fendente come per aprire un<br>baratro sotto di te.<br><br>È difficile eseguire questo movimento prima e dopo l'attacco,<br>che va quindi coordinato con i movimenti del nemico."
      },
      
      F23 : {
        name : "Assalto fantasma",
        desc : "Svanisci e sferri un fendente in salto.<br>Abilità offensiva eseguita con spada a una mano/alabarda/baionetta.<br><br>Svanisci nell'ombra come uno spettro, poi scatti verso il bersaglio e<br>sferri un fendente incrociato.<br><br>Quando sei in forma spettrale non subisci danni e puoi quindi attaccare<br>senza paura."
      },
      
      F24 : {
        name : "Impulso rotante",
        desc : "Sferri una raffica di colpi.<br>Abilità offensiva eseguita con spada a una mano/alabarda/baionetta.<br><br>Tempesti l'avversario con una combinazione turbinante di cinque attacchi.<br><br>Applica prima un dono alla tua arma per aumentare notevolmente la potenza<br>di questo dono."
      },
      
      F25 : {
        name : "Punitore della legione",
        desc : "Lanci la tua arma, facendola roteare.<br>Abilità offensiva eseguita con spada a due mani/martello.<br><br>Lanci la tua arma davanti a te, poi usi il potere del dono per<br>farla roteare e spazzare via gruppi di nemici.<br><br>L'attacco colpisce una vasta area ma richiede tempo per essere<br>eseguito. Usalo con cautela, anche contro avversari più deboli."
      },
      
      F26 : {
        name : "Raffica corale",
        desc : "Spari una scarica di proiettili a ricerca.<br>Abilità offensiva eseguita con la baionetta.<br><br>Sfrutti la rotazione per incanalare icore nella baionetta,<br>poi spari quattro proiettili che inseguono il bersaglio.<br><br>L'esecuzione di questo attacco richiede tempo, quindi<br>va usato nelle giuste circostanze."
      },
      
      F27 : {
        name : "Triplo annientamento",
        desc : "Scateni una combo contro un bersaglio vicino.<br>Abilità offensiva eseguita con spada a due mani/martello.<br><br>Usi l'icore per accrescere notevolmente la tua muscolatura<br>per un breve istante e sferri tre colpi con un'arma pesante<br>in rapida successione.<br><br>È un attacco rapido, indispensabile negli scontri ravvicinati."
      },
      
      F28 : {
        name : "Scatto del drago",
        desc : "Scatti in avanti e sferri un attacco potente dall'alto.<br>Abilità offensiva eseguita con spada a due mani/martello.<br><br>Balzi in avanti verso un nemico distante, per poi attaccare con la furia<br>inesorabile di un drago che cerca di spezzare il collo a una tigre.<br><br>È un attacco devastante, ma può renderti vulnerabile.<br>Fai attenzione ai contrattacchi quando lo usi."
      },
      
      F29 : {
        name : "Carica frontale",
        desc : "Scatti in avanti in forma spettrale e sferri una combo.<br>Abilità offensiva eseguita con l'alabarda.<br><br>Ti disperdi e scatti in avanti, dando inizio a una serie<br>di attacchi con una spinta.<br><br>Il primo attacco può essere seguito da altri o da una<br>schivata, il che lo rende un buon innesco di combo."
      },
      
      F30 : {
        name : "Scatto spettrale",
        desc : "Scatti in avanti in forma spettrale.<br><br>Disperdi momentaneamente il tuo corpo come un oscuro<br>fantasma e scatti in avanti, schivando tutti gli attacchi."
      },
      
      F31 : {
        name : "Rintocco dei sepolcri",
        desc : "Sbatti il piede per terra, generando un'onda d'urto.<br><br>Carichi potenza nelle gambe, poi colpisci il terreno<br>provocando un'onda di energia distruttiva.<br><br>La forza di questo attacco risveglia i morti dal loro riposo<br>e sbilancia i corrotti, permettendoti di sferrare un colpo<br>in successione."
      },
      
      F32 : {
        name : "Sdoppiamento rapido",
        desc : "Sferri un attacco veloce come un battito di ciglia.<br>Abilità offensiva eseguita con spada a due mani/martello.<br><br>Ruoti il corpo in un rapido istante, sferrando un colpo improvviso in grado<br>di colpire una rondine in volo.<br><br>Questa velocità è insolita per un'arma pesante, e permette di<br>infliggere danni alla minima apertura della guardia."
      },
      
      F33 : {
        name : "Schivata spettrale",
        desc : "Schivi gli attacchi trasformandoti in spettro.<br><br>Dono che permette di schivare i pericoli disperdendoti<br>e riapparendo in un punto più alto di dove ti trovavi.<br><br>È un dono semplice e dirompente, che sfrutta al massimo<br>il ciclo vitale dei redivivi, ma difficile da padroneggiare."
      },
      
      F34 : {
        name : "Esplosione straziante",
        desc : "Balzi in avanti e sferri due colpi.<br>Abilità offensiva eseguita con spada a due mani/martello.<br><br>Salti verso il nemico e sferri due attacchi rapidi e pesanti.<br><br>Le armi pesanti possono essere lente, quindi un'offensiva schiacciante<br>è spesso il tuo migliore alleato."
      },
      
      F35 : {
        name : "Assalto spettrale",
        desc : "Esegui una rapida carica a breve distanza.<br>Abilità offensiva eseguita con spada a una mano/baionetta.<br><br>Scivoli in avanti come un'ombra e sferri un rapido attacco.<br><br>Questa tecnica è ottima per coprire brevi distanze ed è particolarmente<br>utile per chi predilige gli scontri ravvicinati."
      },
      
      F36 : {
        name : "Offerta modesta",
        desc : "Consuma una piccola quantità dei tuoi PF per ripristinare una piccola quantità dei PF dei tuoi compagni. Questo dono consuma meno PF di Offerta rigenerativa e ne ripristina una quantità minore al bersaglio.",
        usage_req : "Hai 2 o più PF"
      },
      
      // Hellfire Knight DLC
      F37 : {
        name : "Risonanza d'icore (ric.)",
        desc : "Quando il tuo compagno (non il giocatore) guadagna icore tu ne <br>guadagni la stessa quantità.<br><br>Il legame fra te e i tuoi compagni diventa sangue <br>nelle tue vene, una forza che ti attraversa il corpo.<br><br>Non utilizzabile con &quot;Risonanza d'icore (don.)&quot;."
      },
      
      F38 : {
        name : "Risonanza d'icore (don.)",
        desc : "Quando guadagni icore il tuo compagno ne <br>guadagna la stessa quantità (non si applica <br>al giocatore).<br><br>Il tuo sangue ribolle di una strana eccitazione. <br>La risonanza con il tuo corpo sarà la salvezza <br>dei tuoi compagni.<br><br>Non utilizzabile con &quot;Risonanza d'icore (ric.)&quot;."
      },
      
      F39 : {
        name : "Postura placida",
        desc : "Assumi immediatamente una posizione che calma <br>la tua mente e ripristina tutto il vigore.<br><br>Questa posizione raddoppia il tempo di attacco <br>combo in battaglia e può salvarti da morte certa."
      },
      
      F40 : {
        name : "Impeto rinvigorente",
        desc : "Mentre è attivo, l'effetto ripristina il vigore ogni <br>volta che schivi un attacco nemico.<br><br>Anche i Corrotti sono vulnerabili dopo aver attaccato. <br>Se riesci a schivare i loro colpi, avrai la possibilità <br>di contrattaccare."
      },
      
      F41 : {
        name : "Fendente placido",
        desc : "Esegui un attacco supersonico da una posizione immobile. <br>Abilità offensiva per spada a una mano.<br><br>Questo fendente fulmineo genera una lama di vuoto che <br>colpisce tutti i nemici nel suo raggio d'azione.<br><br>Una tecnica che richiede l'intera anima di chi la usa <br>e molto tempo per padroneggiarla."
      },
      
      F42 : {
        name : "Mannaia rotante",
        desc : "Balzi in avanti eseguendo un fendente rotante. Abilità <br>offensiva per spada a una mano/alabarda/baionetta.<br><br>Questa tecnica ti protegge da ogni lato mentre <br>colpisci i nemici vicini.<br><br>Oltre al suo uso più ovvio, cioè quando i nemici ti <br>circondano, è utile anche per colpire <br>quelli in posizioni difficili da individuare."
      },
      
      F43 : {
        name : "Picchiata feroce",
        desc : "Sferri un attacco a mezz'aria che falcia il nemico. <br>Abilità offensiva per spada a una mano/alabarda.<br><br>Le tecniche marziali dei cavalieri reali richiedono <br>addestramento per essere apprese. Questo dono <br>è perfetto per ridurre la distanza dal nemico perché<br>ti permette di balzare in aria e scagliarti contro di lui."
      },
      
      // Frozen Empress DLC
      F44 : {
        name : "Assalto tenace",
        desc : "Sferri un singolo colpo con alta resistenza allo sbilanciamento. <br>Abilità offensiva per spada a due mani/martello.<br><br>Un singolo colpo risoluto può ribaltare le sorti di una battaglia <br>e garantire la vittoria, ma avere poca considerazione della <br>propria vita può rendere tutto inutile. <br>L'equilibrio è una linea sottile che va attraversata con prudenza."
      },
      
      F45 : {
        name : "Lama dell'usurpatore",
        desc : "<br>Colpisci il nemico con un fendente e recuperi PF. <br>Abilità offensiva per alabarda.<br><br>La natura dei redivivi li porta a bramare non solo <br>il sangue, ma la vita stessa. Abbandonati ai tuoi desideri."
      },
      
      // Lord of Thunder DLC
      F46 : {
        name : "Rilancio zero",
        desc : "Azzera il tempo di ricarica del dono del tuo compagno.<br><br>Finché l'icore glielo permetterà, il tuo compagno potrà <br>incalzare i nemici usando ripetutamente un dono <br>potente senza dover aspettare."
      },
      
      F47 : {
        name : "Rigenerazione icore",
        desc : "Ripristina gradualmente l'icore riducendo la potenza <br>d'attacco dell'arma e la difesa.<br><br>Tuttavia, dopo un certo periodo di tempo, il ripristino <br>dell'icore si interrompe e recuperi la potenza persa."
      },
      
      F48 : {
        name : "Carica elettrica",
        desc : "Corri verso i nemici alla velocità <br>della luce e realizza un attacco col <br>palmo della mano.  <br><br>Accerchia la tua preda in un istante, <br>come un feroce predatore.<br><br>Questa tecnica non infligge gravi danni, <br>ma la rapidità che dona permette di vincere<br>contro qualsiasi arma."
      },
      
      F49 : {
        name : "Recupero concentrazione",
        desc : "Quando viene usato riempie parzialmente <br>la barra concentrazione.<br><br>Questo dono non ti farà sempre entrare in stato <br>di concentrazione, quindi è importante scegliere<br>il momento giusto in cui usarlo."
      },
      
      F50 : {
        name : "Canna abbagliante",
        desc : "Scaglia potenti proiettili che infliggono danni perforanti. <br>Un'abilità offensiva eseguita con una baionetta.<br><br>I tuoi proiettili raggiungeranno istantaneamente il bersaglio, <br>trapassando tutti gli avversari sulla traiettoria.<br><br>Tuttavia, dovuto al tempo necessario per caricare l'energia, questa <br>tecnica è poco efficace contro i nemici vicini,<br> ma è perfetta per abbattere avversari numerosi."
      }
    },
    
    
    // # 4. WEAPONS #
    weapon : {
      // # ONE-HANDED SWORDS #
      A0 : {
        name : "Lama della Destituzione",
        desc : "Una spada a taglio singolo<br>prodotta in massa per i soldati dell’Operazione Destituzione.<br><br>Per velocizzarne la produzione, il conduttore di icore di<br>questa spada è stato lasciato scoperto ma, nonostante<br>l’aspetto grezzo, la sua lama affilata trapassa qualsiasi<br>Corrotto."
      },
      
      A1 : {
        name : "Tubo della Schiavitù",
        desc : "Un'arma rozza simile a un randello.<br><br>È un semplice tubo con un'abilità di prosciugamento integrata e<br>può essere brandito come una spada.<br><br>Viene usato soprattutto da redivivi soggiogati e offre un barlume<br>di speranza in più in combattimento."
      },
      
      A2 : {
        name : "Spada larga",
        desc : "Una lama grande a taglio doppio<br>prodotta in massa dal governo provvisorio.<br><br>Ideata per una potenza bruta, se viene brandita con tutto il<br>corpo, può annientare anche gli esemplari giganteschi dei<br>Corrotti.<br><br>Il suo facile impiego la rende spettacolare nelle mani sia di<br>eroi che di malvagi nel mondo di Vein."
      },
      
      A3 : {
        name : "Hanemukuro",
        desc : "Una lama ricurva a taglio singolo a forma di katana.<br>Fu creata dal redivivo Mukuro, che incise il suo nome sulla lama.<br>Significa &quot;Cadavere respinto&quot;.<br><br>L'arma differisce dalle spade ordinarie viste su Vein e per trarne<br>i massimi vantaggi colui che la impugna deve essere abile."
      },
      
      A4 : {
        name : "Cremisi durevole",
        desc : "È l'arma fidata di Louis.<br><br>La sua lama rossa è incisa con un dono d'incantesimo<br>e quando alimentata da icore, può annientare le difese<br>più forti in un colpo solo.<br><br>Gli è stata donata dallo stesso redivivo che diede a<br>Yakumo la sua arma e fu creata da mani esperte con la<br>tecnica di Louis in mente."
      },
      
      A5 : {
        name : "Machete",
        desc : "Una grande mannaia ricavata da un solo pezzo di acciaio.<br><br>Creata da un pazzo gruppo di ingegneri, combina il manico di<br>una spada a una mano con la potenza di una spada a due mani.<br><br>Ma per maneggiarla occorre molta forza proprio a causa del suo<br>grande peso ed è per questo che sono in pochi coloro che la<br>utilizzano."
      },
      
      A6 : {
        name : "Lama del lupo argentato",
        desc : "Una spada a una mano d'argento<br>usata dall'unità Cerbero.<br><br>Sebbene dotata di un grilletto per i doni, è ben equilibrata e di<br>ottima qualità per essere un'arma prodotta in massa.<br><br>Cerbero è una forza d'élite, formatasi dopo l'Operazione Destituzione.<br>Il vero valore delle loro armi si mostra in mani esperte."
      },
      
      A7 : {
        name : "Artiglio incendiante",
        desc : "Una lama lunga<br>usata dall'Erede dell'artiglio.<br><br>Il calore all'interno rilascia archi cremisi nell'aria e infiamma<br>qualsiasi cosa colpisca.<br><br>Si dice che sia stata ideata dai pensieri dell'Erede, ma quale<br>intenzione c'era dietro?"
      },
      
      A8 : {
        name : "Sangue ghiacciato",
        desc : "È l'arma di sfondamento<br>usata dalla Portatrice della lama, una delle<br>marionette di Mido.<br><br>Un grilletto per doni di tipo freddo è intagliato<br>sulla lunghezza, così da generare una lancia di<br>ghiaccio all'istante.<br><br>È un oggetto unico fatto per l'élite Cerbero,<br>che richiede una tecnica delicata per maneggiarla<br>correttamente."
      },
      
      A9 : {
        name : "Spada del tramonto",
        desc : "Un'antica Lama della Destituzione<br>ossidata dal miasma.<br><br>Neanche la materia inorganica è immune alla corruzione<br>della Regina, che ha opacizzato il nero bagliore di<br>quest'arma e alterato le proprietà.<br><br>Sebbene nessuno la brandisca senza esitare, la sua<br>efficacia è fuori discussione."
      },
      
      A10 : {
        name : "Sciabola nera",
        desc : "Una spada nero corvino a taglio singolo.<br><br>La lama ricurva è ideale per squarciare la carne e se<br>chi la brandisce è abile, può sfruttare al meglio il<br>suo effetto.<br><br>I Cacciatori in Nero non guardano al peso delle armi<br>e sono assetati di potere, quindi sono essenziali delle<br>mani addestrate."
      },
      
      A11 : {
        name : "Boia",
        desc : "La spada preferita da Jack, il Guardiano della Cripta.<br><br>La sua lama affilata non mostra segni di usura e un solo affondo<br>può causare morte immediata.<br><br>La sua storia è ignota: forse è una versione artigianale delle armi<br>usate dai Cacciatori in Nero e la cura con cui è stata realizzata la<br>dice lunga sul Guardiano misterioso."
      },
      
      A12 : {
        name : "Spada larga dei Corrotti",
        desc : "Una spada a una mano usata dai redivivi<br>che fallirono e si unirono ai Corrotti.<br><br>Il tempo trascorso nel miasma ne ha alterato le proprietà.<br><br>Creata per eliminare i Corrotti, si è poi nutrita del sangue dei redivivi.<br>Un paradosso sin troppo comune nel mondo di Vein."
      },
      
      A13 : {
        name : "Spada lunga cremisi",
        desc : "Spada a una mano simile a una lama lunga<br>brandita da un divoratore di dei con auto-controllo di ferro.<br><br>Ha un meccanismo per i doni che consente a chi la impugna di squarciare<br>i nemici.<br><br>Questa lama cremisi brilla tantissimo se intorno ci sono schizzi di sangue."
      },
      
      // Hellfire Knight DLC
      A14 : {
        name : "Tubo infernale",
        desc : "Un'arma simile a un randello corrotta dal fuoco infernale.<br>Questo tubo è stato esposto al miasma e immerso nel <br>fuoco infernale, il che ne ha alterato il colore. Solo chi <br>ha superato le prove più estenuanti può impadronirsene."
      },
      
      A15 : {
        name : "Lama dell'inferno",
        desc : "Una spada a taglio singolo arsa dal fuoco infernale.<br><br>Nonostante l'elevato bilanciamento di forza, è molto leggera.<br><br>La sua lama cremisi imbriglia una potente fiamma che viene <br>scatenata durante gli attacchi caricati."
      },
      
      // Frozen Empress DLC
      A16 : {
        name : "Tubo della brina",
        desc : "Un'arma simile a un randello corrotta dalla brina.<br><br>Questo tubo è stato esposto al miasma e immerso nella brina, <br>il che ne ha alterato il colore.<br>Solo chi ha superato le prove più estenuanti può impadronirsene."
      },
      
      // Lord of Thunder DLC
      A17 : {
        name : "Tubo di Fulmine",
        desc : "Un'arma simile ad un randello deformata da un fulmine.<br><br>Questo tubo è stato esposto al miasma e colpito da un fulmine,<br>che ne ha alterato il colore. Solo coloro che hanno superato<br>le prove piu’ estenuanti possono ottenerlo."
      },
      
      A18 : {
        name : "Tubo dell'Incomparabile.",
        desc : "Un'arma simile ad un randello affidata solo a chi <br>desidera diventare il migliore.<br><br>Un redivivo dalla potenza estrema non ha bisogno <br>d'altre armi; quest'oggetto esiste solo per onorare i più forti."
      },
      
      A19 : {
        name : "Lama del fulmine",
        desc : "Spada ad una mano galvanizzata da un fulmine.<br><br>Seppur pesante, vanta un'elevata potenza difensiva <br>ed un ottimo bilanciamento di destrezza e senno.<br><br>Il fulmine blu racchiuso in questa lama brilla con <br>incredibile bellezza ed accompagna ogni suo <br>attacco caricato."
      },
      
      
      // # TWO-HANDED SWORDS #
      B0 : {
        name : "Spadone della Destituzione",
        desc : "Una spada a due mani prodotta in massa<br>per i redivivi dell'Operazione Destituzione.<br><br>La sua lama è stata creata appositamente per ferire il corpo della<br>Regina stessa, perciò è più che adeguata per decimare i Corrotti."
      },
      
      B1 : {
        name : "Zweihander",
        desc : "Una spada lunga a due mani<br>prodotta in massa dal governo provvisorio.<br><br>Creata per decimare gli esemplari più grandi dei Corrotti,<br>è molto durevole e protegge. <br><br>I feedback dell'Operazione Destituzione hanno portato a<br>delle migliorie tecnologiche come un conduttore di icore<br>singolo, montato internamente."
      },
      
      B2 : {
        name : "Nagimukuro",
        desc : "Una lama larga ideata su modello di una spada giapponese.<br><br>Fu creata da un redivivo chiamato Mukuro, che incise il suo<br>nome sulla lama. Significa &quot;Cadavere che falcia&quot;.<br><br>Progettata per colpi ampi e rapidi, è abbastanza forte da<br>sprigionare una raffica di vento se viene agitata con forza."
      },
      
      B3 : {
        name : "Rovina di Oni",
        desc : "La spada che Yakumo ha impugnato in tante battaglie.<br><br>Fatta con una tecnica diversa per il mondo di Vein, fu sviluppata<br>per essere agitata ampiamente in movimento, nonostante le<br>sue grandi dimensioni.<br><br>Yakumo l'ha ricevuta dallo stesso redivivo che diede a Louis<br>la sua arma, e l'ha personalizzata secondo il suo stile."
      },
      
      B4 : {
        name : "Lama deformata",
        desc : "Una spada a due mani<br>con una lama simile a grandi zanne.<br><br>Creata dal corpo di un tremendo esemplare dei Corrotti,<br>questa strana arma ha il potere di scatenare qualcosa come<br>un dono quando agitata alla massima potenza.<br><br>Trattiene poco il calore e pare abbia voglia di assaggiare<br>il sangue."
      },
      
      B5 : {
        name : "Spadone nero",
        desc : "Una spada a due mani<br>a lama nera, a catena e a taglio singolo.<br><br>Quest'arma lunga e ricurva è stata fatta per tagliare gli arti<br>dei nemici.<br><br>I Cacciatori in Nero non guardano al peso delle loro armi e<br>sono soprattutto assetati di potere, quindi sono essenziali<br>delle mani addestrate."
      },
      
      B6 : {
        name : "Lama del re lupo argentato",
        desc : "Una spada dorata a due mani<br>brandita da Silva dopo che divenne folle.<br><br>Mantiene alcuni dei poteri legati ai cimeli e può sferrare colpi<br>potenti lungo una linea retta a una velocità incredibile.<br><br>Il suo design suggerisce una bellezza quasi potente e conferisce<br>al suo portatore un'aura imperiosa."
      },
      
      B7 : {
        name : "Lama del giudizio",
        desc : "Una spada a due mani fatta da Mido,<br>il redivivo estremamente inquisitorio e corrotto.<br><br>Il suo meccanismo interno di trasformazione può generare<br>un dono ad alta potenza sotto forma di lama, per un potere<br>altamente distruttivo probabilmente destinato allo scontro<br>finale con Silva."
      },
      
      B8 : {
        name : "Spadone del tramonto",
        desc : "Un antico Spadone della Destituzione<br>ossidato dal miasma.<br><br>Neanche la materia inorganica è immune alla corruzione della<br>Regina, che ha opacizzato il nero bagliore di quest'arma e poi<br>alterato le sue proprietà.<br><br>Sebbene nessuno la brandisca senza esitare, la sua efficacia è<br>fuori discussione."
      },
      
      B9 : {
        name : "Zweihander dei Corrotti",
        desc : "Una spada a due mani<br>usata dai redivivi che fallirono e si unirono ai Corrotti.<br><br>Il tempo trascorso nel miasma ne ha alterato le proprietà.<br><br>Creata per eliminare i Corrotti, si è poi nutrita del sangue dei<br>redivivi. Un paradosso sin troppo comune nel mondo di Vein."
      },
      
      B10 : {
        name : "Spada del lupo argentato",
        desc : "Una spada a due mani d'argento<br>usata dall'unità di sicurezza Cerbero.<br><br>È ideale per gli assalti ravvicinati, ma consente anche di<br>avvicinarsi ai nemici con dei fendenti devastanti.<br><br>Cerbero è una forza d'élite, formatasi dopo l'Operazione<br>Destituzione. Il vero valore delle loro armi si mostra in<br>mani esperte."
      },
      
      B11 : {
        name : "Spadone candido",
        desc : "Spada a due mani<br>sulla falsariga della sega brandita da un divoratore di dei che reggeva<br>il peso del destino.<br><br>Se la si agita con tutta la forza emette luce blu e colpisce con potenza.<br><br>L'arma è avvolta dalle fiamme e farà piazza pulita dei Corrotti."
      },
      
      // Hellfire Knight DLC
      B12 : {
        name : "Balmung iraconda",
        desc : "Una spada a due mani arsa dal fuoco infernale.<br><br>È pesante ma con grande potenza d'attacco e difesa, <br>oltre a vantare un elevato bilanciamento di destrezza.<br><br>La lama bruciata possiede ancora la potenza della <br>fiamma, che si mostra negli attacchi caricati."
      },
      
      // Frozen Empress DLC
      B13 : {
        name : "Spadone azzurro",
        desc : "Una spada a due mani gelata dalla brina.<br><br>È pesante, ma eccelle in bilanciamento di difesa <br>dell'arma e forza di volontà.<br><br>La sua lama bianca e purissima racchiude il potere <br>dello zero assoluto, che si scatena durante gli attacchi caricati."
      },
      
      
      // # HALBERDS #
      C0 : {
        name : "Alabarda della Destituzione",
        desc : "Un'arma inastata prodotta in massa<br>per i redivivi dell'Operazione Destituzione.<br><br>Potente e facile da maneggiare, coloro che affrontavano<br>i giganti dei Corrotti furono i primi a ricevere nuovi modelli."
      },
      
      C1 : {
        name : "Bardiche",
        desc : "Un'arma lunga<br>prodotta in massa dal governo provvisorio.<br><br>Il design della testa risulta efficace quando agitata con<br>abbastanza forza. <br><br>Le armi del governo provvisorio sono sviluppate per la<br>difesa dei civili, quindi anche se sembrano semplici e<br>dai materiali comuni, sono ben capaci di distruggere<br>i Corrotti."
      },
      
      C2 : {
        name : "Impalatore",
        desc : "Una lancia sottile con una testa affilata.<br><br>La sua lunghezza supera quella di una persona media, ma è<br>abbastanza leggera per affondi improvvisi.<br><br>È stata progettata da ingegneri eccentrici i cui prodotti erano<br>tutti difficili da gestire, eccetto quest'arma, che venne fatta<br>per un capriccio."
      },
      
      C3 : {
        name : "Sdoppiatore rosso granato",
        desc : "Una maestosa arma rossa e d'argento<br>col nome di un gioiello rosso.<br><br>Contiene un grilletto per i doni in miniatura che emette delle<br>ampie lame quando viene agitata.<br><br>Creata da una setta di redivivi che considera se stessa la nuova<br>nobiltà, è molto funzionale nonostante l'aspetto appariscente."
      },
      
      C4 : {
        name : "Dammerung ",
        desc : "L'arma inastata usata dall'innocente Io.<br><br>È stata personalizzata da Murasame per attivare un dono<br>che assicura a chi la brandisce ulteriore protezione quando<br>viene agitata. <br><br>Quando costruisci il tuo destino, troverai il tuo passato<br>o spererai di creare un futuro con gli amici?"
      },
      
      C5 : {
        name : "Alabarda nera",
        desc : "Un'arma inastata con una lama nero corvino.<br><br>Con la sua testa larga a forma di falce si raccolgono le teste dei Corrotti.<br><br>I Cacciatori in Nero non guardano al peso delle loro armi e sono<br>soprattutto assetati di potere, quindi sono essenziali delle mani<br>addestrate."
      },
      
      C6 : {
        name : "Falce dell'assassino",
        desc : "Lo strumento di un boia<br>che risiedeva nella Fossa ululante.<br><br>Il grilletto per doni può produrre liquidi e sparare colonne<br>d'acqua quando agitato. <br><br>I Corrotti che la possedevano sono stati ridotti in cenere, ma<br>il suo potere resta e si trasmette al nuovo possessore, come<br>se afferrasse ciò che rimane della vita."
      },
      
      C7 : {
        name : "Alabarda del tramonto",
        desc : "Un'antica Alabarda della Destituzione ossidata dal miasma.<br><br>Neanche la materia inorganica è immune alla corruzione della<br>Regina, che ha opacizzato il nero bagliore di quest'arma e poi<br>alterato le sue proprietà.<br><br>Sebbene nessuno la brandisca senza esitare, la sua efficacia<br>è fuori discussione."
      },
      
      C8 : {
        name : "Bardiche dei Corrotti",
        desc : "Un'arma inastata usata dai redivivi<br>che fallirono e si unirono ai Corrotti.<br><br>Il tempo trascorso nel miasma ne ha alterato le proprietà.<br>Creata per eliminare i Corrotti, si è poi nutrita del sangue<br>dei redivivi.<br><br>Un paradosso sin troppo comune nel mondo di Vein."
      },
      
      C9 : {
        name : "Ascia Obliterator",
        desc : "Un'arma distruttiva<br>brandita da un membro particolarmente forte di Cerbero.<br><br>La sua forma cambia quando chi la possiede è uno dei<br>Corrotti, conferendole un nuovo e terribile potere<br>che consente di sfondare le difese e trapassare i nemici."
      },
      
      C10 : {
        name : "Ascia del lupo argentato",
        desc : "Un'arma inastata d'argento<br>usata dall'unità di sicurezza Cerbero.<br><br>È un'arma formidabile che emana un'aura  autorevole.<br><br>Cerbero è una forza d'élite, formatasi dopo l'Operazione Destituzione.<br>Il vero valore delle loro armi si mostra in mani esperte."
      },
      
      C11 : {
        name : "Lancia cerulea",
        desc : "Alabarda simile alla lancia<br>brandita da un divoratore di dei con tante aspirazioni.<br><br>Se la si agita con tutta la forza, dalla punta salta fuori una lama Dono che fa<br>colpire più lontano.<br><br>Questa elegante arma blu ha penetrato anche degli dei e ridurrà in cenere i Corrotti."
      },
      
      // Frozen Empress DLC
      C12 : {
        name : "Alabarda nebbia rossa",
        desc : "Un'alabarda gelata dalla brina.<br><br>Ha poca potenza d'attacco ma è molto leggera <br>e vanta un ottimo bilanciamento della forza.<br><br>Il gelo perenne intrappolato in quest'arma <br>potenzia con il ghiaccio i suoi attacchi caricati."
      },
      
      // Lord of Thunder DLC
      C13 : {
        name : "Brionac elettrica",
        desc : "Alabarda galvanizzata da un fulmine.<br><br>Nonostante la sua potenza d'attacco e la sua difesa siano scarse, <br>è leggera ed aumenta il guadagno d'icore.<br><br>La luce bluastra che ricopre la sua lama elettrica dona il potere <br>del fulmine ai suoi attacchi caricati."
      },
      
      
      // # HAMMERS #
      D0 : {
        name : "Martello della Destituzione",
        desc : "Un martello prodotto in massa<br>per i redivivi dell'Operazione Destituzione.<br><br>Creato per frantumare gli arti della Regina. La necessità di<br>renderlo più potente lo ha reso poco maneggevole e per<br>padroneggiarlo è richiesto molto addestramento."
      },
      
      D1 : {
        name : "Martello della Schiavitù",
        desc : "Un'arma primitiva simile a un martello.<br><br>È un semplice manico con un mattone di cemento pesante come testa.<br>Possiede le minime capacità che la rendono idonea ai redivivi.<br><br>Viene usata soprattutto da redivivi soggiogati e offre un tenue barlume<br>di speranza in combattimento."
      },
      
      D2 : {
        name : "Martello del Colosso",
        desc : "Un grande martello usato da Oliver,<br>che si arrese alla sete e si unì ai Corrotti.<br><br>Anche se non integro, funziona ancora e conserva tutto il potere<br>che aveva durante l'Operazione Destituzione.<br><br>È stato donato perché considerato inutile, ma offre un piccolo<br>raggio di speranza allo schiavo che lo ha ricevuto."
      },
      
      D3 : {
        name : "Ascia pesante",
        desc : "Un'arma inastata<br>prodotta dal governo provvisorio.<br><br>La sua lama spessa non è fatta per attacchi di precisione, ma è<br>adatta a quelli squarcianti.<br><br>Ideata per eliminare i Corrotti giganti, la mancanza di strumenti<br>nel mondo ostile di Vein l'ha resa un'arma per demolire vecchi<br>edifici e per eliminare la vegetazione."
      },
      
      D4 : {
        name : "Ancora pulsante",
        desc : "Un martello meccanico ben costruito.<br><br>Ha un grilletto per doni che emana onde di calore dal suo<br>portello di scarico, così ha più potere frantumante.<br>Colpendo il suolo in tal modo, la terra trema e si genera<br>un'onda d'urto.<br><br>Capolavoro di un gruppo di ingegneri mezzi matti, è il partner<br>eterno di alcuni redivivi."
      },
      
      D5 : {
        name : "Martello enorme",
        desc : "Un martello massiccio usato dai Corrotti<br>che s'ingrandirono per l'esposizione al miasma.<br><br>La faccia si è indurita col miasma e un colpo a piena potenza<br>può spezzare la guardia di chiunque.<br><br>Sono molti gli schiavi redivivi che in cerca di gocce di sangue<br>vanno a subire una trasformazione terribile per possedere<br>una tale arma."
      },
      
      D6 : {
        name : "Martello del lupo argentato",
        desc : "Un martello da guerra<br>usato dall'unità di sicurezza Cerbero.<br><br>Il suo centro di gravità è una punta che permette a chi lo usa di<br>oscillare l'arma come vuole.<br><br>Cerbero è una forza d'élite, formatasi dopo l'Operazione Destituzione.<br>Il vero valore delle loro armi si mostra in mani esperte."
      },
      
      D7 : {
        name : "Ascia del tiranno",
        desc : "Un'ascia a doppia lama che luccica d'oro.<br><br>Persino più pesante di quanto sembra,<br>solo il più forte può brandirla al meglio.<br><br>La lama splendente e il manico non sono<br>d'oro vero, ma di un'imitazione creata<br>in occasione della nascita di un tiranno."
      },
      
      D8 : {
        name : "Martello del tramonto",
        desc : "Un antico Martello della Destituzione<br>ossidato dal miasma.<br><br>Neanche la materia inorganica è immune alla corruzione<br>della Regina, che ha opacizzato il nero bagliore di quest'arma<br>e alterato le sue proprietà.<br><br>Sebbene nessuno la brandisca senza esitare, la sua efficacia è<br>fuori discussione."
      },
      
      D9 : {
        name : "Martello da guerra bruciato",
        desc : "Un martello da guerra<br>deformato dall'esposizione prolungata alle fiamme.<br><br>Trasformato in una palla demolitrice che spacca la<br>carne e le ossa, anche quando le riduce in cenere<br>con il calore."
      },
      
      D10 : {
        name : "Ascia pesante dei Corrotti",
        desc : "Un'ascia usata dai redivivi<br>che fallirono e si unirono ai Corrotti.<br><br>Il tempo trascorso nel miasma ne ha alterato le proprietà.<br><br>Creata per eliminare i Corrotti, si è poi nutrita del sangue dei redivivi.<br>Un paradosso sin troppo comune nel mondo di Vein."
      },
      
      // Hellfire Knight DLC
      D11 : {
        name : "Martello infernale",
        desc : "Un martello da guerra arso dal fuoco infernale.<br><br>Il suo bilanciamento della destrezza è eccezionale, <br>e aumenta notevolmente la potenza d'attacco fisico <br>e l'indice di prosciugamento.<br><br>Il fuoco infernale al suo interno brucia per l'eternità, <br>potenziando gli attacchi caricati."
      },
      
      // Frozen Empress DLC
      D12 : {
        name : "Sharur della valanga",
        desc : "Un martello da guerra gelato dalla brina.<br><br>Specializzato in bilanciamento di difesa e forza, <br>vanta anche una certa leggerezza.<br><br>Quest'arma sfrutta il potere dello zero assoluto <br>per infliggere danni glaciali con gli attacchi caricati."
      },
      
      
      // # BAYONETS #
      E0 : {
        name : "Baionetta della Destituzione",
        desc : "Una baionetta prodotta in massa per i<br>redivivi dell'Operazione Destituzione.<br><br>Il suo generatore di doni la rende efficace  negli attacchi a lunga<br>distanza e diffusa  tra i guerrieri non avvezzi al corpo a corpo."
      },
      
      E1 : {
        name : "Brodiaea",
        desc : "La baionetta che Mia teneva sempre con sé.<br><br>È stata alleggerita e personalizzata affinché persino una<br>persona piccola potesse usarla.<br><br>Le ammaccature e i graffi sulla superficie raccontano la<br>storia di come abbia protetto due vite importanti. È stata<br>chiamata col nome di un fiore come ringraziamento."
      },
      
      E2 : {
        name : "Rompirivolta",
        desc : "Baionetta ricavata dalle parti di recupero di armi e materiali<br>di scarto.<br><br>Nonostante l'aspetto grezzo, il grilletto per doni funziona<br>bene, generando attacchi in rapida successione.<br><br>È l'arma preferita tra i fuorilegge e spesso mette sotto tiro<br>chi sfoggia la propria ricchezza."
      },
      
      E3 : {
        name : "Baionetta",
        desc : "Una baionetta con lama seghettata<br>prodotta in massa dal governo provvisorio.<br><br>Il grilletto per doni può sparare colpi a breve distanza che<br>ricoprono un'area intera.<br><br>Molti redivivi non hanno un addestramento ufficiale con<br>le armi, perciò fu progettata per essere efficace anche in<br>mani inesperte."
      },
      
      E4 : {
        name : "Perforatore a rubellite",
        desc : "Una baionetta rossa e argento<br>col nome di un gioiello rosso.<br><br>La lunga canna elegante spara proiettili che sembrano inseguire<br>i loro bersagli.<br><br>Una setta dei redivivi considera se stessi la nobiltà e pensa che<br>le sue armi meritino qualsiasi lusso possano conferirle."
      },
      
      E5 : {
        name : "Baionetta del lupo argentato",
        desc : "Una baionetta d'argento<br>usata dall'unità di sicurezza Cerbero.<br><br>Le lame su entrambi i lati della canna sono state fatte<br>per attacchi iniziali in intensi scontri  ravvicinati.<br><br>Cerbero è una forza d'élite, formatasi dopo l'Operazione<br>Destituzione. Il vero valore delle loro armi si mostra in<br>mani esperte."
      },
      
      E6 : {
        name : "Disastro bruciante",
        desc : "L'arma del Cannoniere, una delle marionette di Mido.<br><br>Usa un meccanismo che amplifica i doni ed emette fiamme<br>incandescenti. <br><br>Fu sviluppata per un mitragliere con alta compatibilità ai<br>doni e permette a chi la usa di adattare la forma del fuoco<br>che spara."
      },
      
      E7 : {
        name : "Baionetta del tramonto",
        desc : "Un'antica Baionetta della Destituzione<br>ossidata dal miasma.<br><br>Neanche la materia inorganica è immune alla corruzione della<br>Regina, che ha opacizzato il nero bagliore di quest'arma e poi<br>alterato le sue proprietà.<br><br>Sebbene nessuno la brandisca senza esitare, la sua efficacia<br>è fuori discussione."
      },
      
      E8 : {
        name : "Baionetta nera",
        desc : "Una baionetta con canna e lama nere.<br><br>La sua lama curva può penetrare anche la carne più dura e<br>prepara i nemici per il feroce colpo successivo.<br><br>I Cacciatori in Nero non guardano al peso delle loro armi e<br>sono soprattutto assetati di potere, quindi sono essenziali<br>delle mani addestrate."
      },
      
      E9 : {
        name : "Libertador",
        desc : "La baionetta usata da Eva, la guardiana della Cripta.<br><br>Ha un grilletto per doni che spara proiettili auto-guidati.<br><br>L'arma è stata data a Eva dal suo partner Jack e la sua<br>incredibile potenza dimostra la profonda fiducia di<br>Jack verso Eva."
      },
      
      E10 : {
        name : "Baionetta dei Corrotti",
        desc : "Una baionetta usata dai redivivi<br>che fallirono e si unirono ai Corrotti.<br><br>Il tempo trascorso nel miasma ne ha alterato le proprietà.<br><br>Creata per eliminare i Corrotti, si è poi nutrita del sangue<br>dei redivivi.<br>Un paradosso sin troppo comune nel mondo di Vein."
      },
      
      // Frozen Empress DLC
      E11 : {
        name : "Neve di sangue",
        desc : "Una baionetta gelata dalla brina.<br><br>Compensa la scarsa potenza d'attacco e la bassa difesa <br>dell'arma con una grande leggerezza ed un incremento <br>nel guadagno d'icore.<br><br>Quest'arma è intrisa d'un gelo intenso, e durante gli attacchi <br>caricati spara potenti proiettili glaciali in rapida <br>successione, mentre la lama guadagna la potenza del ghiaccio."
      },
      
      // Lord of Thunder DLC
      E12 : {
        name : "Fulmine",
        desc : "Baionetta galvanizzata da un fulmine.<br><br>È leggera, ed in grado d'infliggere danni notevoli <br>anche negli attacchi in mischia.<br><br>Una misteriosa luce viola pervade l'arma, e trasforma le sue munizioni <br>in proiettili guidati durante i colpi caricati."
      }
    },
    
    
    // # 5. BLOOD VEILS #
    blood_veil : {
      // # OGRE #
      A0 : {
        name : "Artiglio notturno",
        desc : "Un velo di sangue di tipo Orco con stile tradizionale.<br><br>Il suo meccanismo è molto efficiente e aumenta la<br>quantità di icore ottenuta con gli attacchi.<br><br>Questo modello è eccellente nella forma e nel<br>funzionamento ed è molto ricercato perché<br>prodotto in numero limitato."
      },
      
      A1 : {
        name : "Argento nobile",
        desc : "Velo di sangue con mantello a forma di ali di pipistrello.<br><br>Le linee d'argento delle ossa contengono dei sistemi<br>che potenziano i doni di sostegno.<br><br>I suoi creatori hanno messo molta enfasi nello stile ma,<br>purtroppo, la maggior parte dei redivivi è troppo presa<br>a sopravvivere per accorgersene."
      },
      
      A2 : {
        name : "Variante GXM",
        desc : "Un velo di sangue fatto di una placcatura corazzata<br>e di tessuto trattato. <br>Protegge e include delle funzioni che potenziano<br>i doni di sostegno. <br><br>Fu sviluppato da un ex fabbricante militare, ma la<br>scarsità di fibre sintetiche e di leghe Vein fa sì che<br>pochi redivivi siano in grado di indossarlo."
      },
      
      A3 : {
        name : "Liberatore del sangue nero",
        desc : "Un velo di sangue con mantello stracciato.<br>A prima vista sembra trasandato, ma migliora i doni<br>d'attacco e la resistenza agli effetti di stato.<br><br>Non si sa chi l'ha realizzato. Molto delicato e con un<br>meccanismo di trasformazione del braccio destro<br>instabile, necessita di ulteriore rafforzamento."
      },
      
      A4 : {
        name : "Artiglio della Destituzione",
        desc : "Un velo di sangue usato da forze impegnate nell'Operazione<br>Destituzione.<br><br>Migliora tutti i tipi di doni, ma non è molto resistente.<br><br>Fu progettato per la produzione di massa a basso costo, con<br>una veste tattica in più per il prosciugamento affinché i<br>redivivi potessero essere equipaggiati e mandati in prima linea."
      },
      
      A5 : {
        name : "Artiglio venoso",
        desc : "Un velo di sangue di tipo Orco recuperato da un redivivo<br>trasformato in Corrotto dalla sete. <br><br>Forse è per questo che risulta meno resistente del solito,<br>difetto che però compensa con la sua leggerezza.<br><br>I tentacoli che sprigiona sono un esempio lampante<br>dell'orrore della corruzione."
      },
      
      // Hellfire Knight DLC
      A6 : {
        name : "Cavaliere di sventura",
        desc : "Un Velo di sangue lacerato dal fuoco infernale.<br><br>Seppur pesante, questo indumento fornisce a chi lo indossa <br>un'elevata riduzione dei danni e bilanciamento per i doni ombra.<br><br>La storia non parla di questo Velo di sangue; ma proprio <br>questa sua essenza misteriosa fa presagire che nasconda <br>altri segreti e poteri."
      },
      
      // Lord of Thunder DLC
      A7 : {
        name : "Artiglio del crepuscolo",
        desc : "Velo di sangue lacerato da un fulmine feroce.<br><br>Il suo peso notevole è compensato da una grande <br>riduzione dei danni ed un elevato bilanciamento della forza.<br><br>I guerrieri che hanno ottenuto tanta forza continuano a cercare <br>il conflitto per raggiungere l'apice del potere con questo velo."
      },
      
      
      // # STINGER #
      B0 : {
        name : "Lancia notturna",
        desc : "Un velo di sangue di tipo Aculeo dallo stile tradizionale<br>per i redivivi.<br><br>Offre meno mobilità rispetto alle sue controparti, ma è<br>ottimo in difesa contro ogni danno.<br><br>Modello eccellente nella forma e nel funzionamento,<br>è molto ricercato perché la produzione è limitata."
      },
      
      B1 : {
        name : "Uniforme corvina",
        desc : "Un velo di sangue che ricorda molto le ali di un corvo.<br><br>Come suggerisce il suo design mistico, aumenta la<br>potenza dei doni d'attacco.<br><br>Originalmente fu sviluppato  come prototipo per i veli<br>di sangue delle  serie notturne, ma la necessità di <br>equilibrio fece sì che fosse l'unico esemplare prodotto."
      },
      
      B2 : {
        name : "Mantello invernale",
        desc : "Un velo di sangue sotto forma di abito per esplorare le<br>regioni polari.<br><br>Ostacola fortemente la mobilità, ma assicura una<br>protezione solida e potenzia di molto i doni di sostegno.<br><br>Sviluppato per le spedizioni sulle montagne alla ricerca di<br>gocce di sangue, questo modello è stato lasciato da parte."
      },
      
      B3 : {
        name : "Abito d'argento",
        desc : "Un velo di sangue che ricorda la corazza scintillante dei<br>cavalieri.<br><br>Molto resistente ad attacchi squarcianti e perforanti.<br><br>Fu progettato da artigiani che volevano conservare il<br>senso umano della bellezza. Molti redivivi hanno lo<br>stesso desiderio."
      },
      
      B4 : {
        name : "Spina della Destituzione",
        desc : "Un velo di sangue delle forze impegnate nell'Operazione<br>Destituzione.<br><br>Migliora ogni tipo di dono, ma non resiste molto.<br><br>Quelli di tipo Aculeo possono essere usati a distanza e<br>sono adatti alle contese, ma il complesso meccanismo di<br>prosciugamento rende difficile la produzione di massa."
      },
      
      // Hellfire Knight DLC
      B5 : {
        name : "Apogeo della grazia",
        desc : "Un Velo di sangue lacerato dal fuoco infernale.<br><br>È estremamente leggero, aumenta molto la <br>destrezza e riduce notevolmente i danni.<br><br>Questo velo non è solamente splendido alla <br>vista: la sua eleganza riflette la sete di potere <br>del suo creatore."
      },
      
      // Frozen Empress DLC
      B6 : {
        name : "Manto glaciale",
        desc : "Un Velo di sangue liso dalla brina.<br><br>Il suo peso notevole è compensato da una grande <br>riduzione dei danni e dal bilanciamento dei doni ombra.<br><br>L'aspetto solenne e maestoso di questo indumento <br>indica un'incrollabile volontà di difendere la vita <br>del redivivo che lo indossa."
      },
      
      
      // # HOUNDS #
      C0 : {
        name : "Zanna notturna",
        desc : "Un velo di sangue di tipo Segugi con uno stile<br>tradizionale per i redivivi.<br><br>Vanta forti capacità difensive, rendendolo<br>affidabile su ogni campo di battaglia.<br><br>Questo modello è eccellente sia nella forma<br>che nel funzionamento ed è molto ricercato<br>perché la produzione è limitata."
      },
      
      C1 : {
        name : "Segugi blu",
        desc : "Un velo di sangue che sembra solo una giacca.<br><br>Non è molto resistente agli elementi, ma offre<br>un alto livello di resistenza agli effetti di stato.<br><br>La sua economicità e il suo stile che si abbina con<br>tutto, lo rendono gettonato tra i redivivi."
      },
      
      C2 : {
        name : "Difensore GXL",
        desc : "Velo di sangue con placcatura corazzata e tessuto trattato.<br><br>Per le sue qualità protettive è una fortezza, però è<br>molto vulnerabile agli effetti di stato.<br><br>Sviluppato da un ex fabbricante militare, la scarsità di <br>fibre sintetiche e di leghe Vein fa sì che pochi redivivi<br>siano in grado di indossarlo."
      },
      
      C3 : {
        name : "Forte Istrice",
        desc : "Un velo di sangue con spuntoni in metallo.<br><br>Protegge meno di quanto sembri, ma aumenta la<br>potenza dei doni d'attacco.<br><br>Pare sia stato sviluppato dai fabbricanti del mercato<br>nero. Non è molto funzionale come i normali vestiti,<br>ma ciò che conta è che intimidisca il nemico."
      },
      
      C4 : {
        name : "Paramento bianco",
        desc : "Un velo di sangue che ricorda una toga monacale.<br><br>Impedisce un po' i movimenti e offre poca difesa, ma<br>aumenta molto l'efficacia dei doni di sostegno.<br><br>Di solito era indossato da una setta di redivivi religiosi,<br>ma un giorno scomparvero senza dire una parola."
      },
      
      // Hellfire Knight DLC
      C5 : {
        name : "Ingranaggio viola",
        desc : "Un Velo di sangue lacerato dal fuoco infernale.<br><br>Sopperisce ad un basso bilanciamento dei doni con <br>un'incredibile leggerezza ed un ottimo bilanciamento della forza.<br><br>Chi indossa questi leggerissimi veli di sangue di tipo Segugi diventa una <br>bestia che si scatena senza freni sul campo di battaglia."
      },
      
      // Lord of Thunder DLC
      C6 : {
        name : "Zanna tonante dell'alba",
        desc : "Velo di sangue lacerato da un fulmine feroce.<br><br>È molto pesante, ma eccelle nel bilanciamento <br>di destrezza e senno ed è ottimizzato per i doni luce.<br><br>Sembra che questo velo sia appartenuto al più potente <br>redivivo del passato, ma potrebbe essere solo una diceria."
      },
      
      
      // # IVY #
      D0 : {
        name : "Spina notturna",
        desc : "Un velo di sangue di tipo Edera con uno stile<br>tradizionale per i redivivi.<br><br>Potenzia gli effetti di qualsiasi dono e assicura<br>una difesa stabile contro attacchi non fisici.<br><br>Questo modello è eccellente sia nella forma che<br>nel funzionamento ed è molto ricercato perché la<br>produzione è limitata."
      },
      
      D1 : {
        name : "Grazia di avorio",
        desc : "Un velo di sangue con decorazioni d'argento.<br><br>Non protegge molto, ma aumenta di tanto l'efficacia<br>dei doni.<br><br>È un oggetto che cerca di dare un tocco di bellezza al<br>mondo in rovina di Vein e rappresenta quel senso<br>estetico che i redivivi stanno per perdere del tutto."
      },
      
      D2 : {
        name : "Assalto GXH",
        desc : "Velo di sangue ottenuto da un cappotto militare<br>con funzione di prosciugamento. Fornisce elevata<br>protezione senza sacrificare la maneggevolezza,<br>oltre a migliorare i doni d'attacco.<br><br>Fu sviluppato da un ex fabbricante militare, ma la<br>scarsità di fibre sintetiche e leghe a Vein lo rende<br>difficile da ottenere."
      },
      
      D3 : {
        name : "Scialle della preghiera",
        desc : "Un velo di sangue caratterizzato da un design elaborato<br>e un colore rosso intenso.<br><br>È super protettivo e migliora l'efficacia dei doni di sostegno.<br><br>Il suo proprietario originario pregò per la salvezza, ma<br>nessuno sa se arrivò una risposta."
      },
      
      D4 : {
        name : "Sperone del suicidio",
        desc : "Un velo di sangue simile a un collare di spine. Aumenta di<br>molto la potenza dei doni d'attacco, ma non offre grande<br>difesa fisica.<br><br>Pare che il suo fabbricante fosse un ingegnere dall'indole<br>contorta, convinto che l'unica vera difesa fosse uccidere<br>prima il nemico, quindi in pochi lo usano volentieri."
      },
      
      // Frozen Empress DLC
      D5 : {
        name : "Spina ammaliante",
        desc : "Un Velo di sangue liso dalla brina.<br><br>Malgrado il suo grande peso, offre riduzione dei<br>danni ed un elevato bilanciamento della destrezza.<br><br>L'elegante cappuccio nasconde lo sguardo di chi <br>brama il bacio della morte ed il dolce sapore del sangue."
      },
      
      // Lord of Thunder DLC
      D6 : {
        name : "Signore degli aculei",
        desc : "Velo di sangue lacerato da un fulmine feroce.<br><br>Sopperisce ad un basso bilanciamento dei doni con <br>un'incredibile leggerezza ed un ottimo bilanciamento<br>di destrezza e forza di volontà.<br><br>Si dice che indossando questo velo un redivivo <br>riesca a provare l'ebbrezza di avere le ali."
      }
    },
    
    
    // # 6. TRANSFORMATIONS #
    transform : {
      // # PHYSICAL #
      A0 : {
        name : "Alleggerimento",
        desc : "Riduce il peso d'un equipaggiamento<br>a scapito delle statistiche base."
      },
      
      A1 : {
        name : "Fortificazione",
        desc : "Aumenta il peso d'un equipaggiamento,<br>ma anche le sue statistiche base."
      },
      
      A2 : {
        name : "Intensificazione",
        desc : "Migliora il bilanciamento statistiche. Riduce le <br>proprietà d'attacco dell'arma e dei doni."
      },
      
      A3 : {
        name : "Doni",
        desc : "Aumenta di molto la potenza d'attacco d'un'arma o l'efficacia<br>d'un Velo di sangue. Riduce molto il bilanciamento statistiche."
      },
      
      A4 : {
        name : "Divorazione",
        desc : "Migliora il prosciugamento. Riduce le<br>proprietà d'attacco dell'arma e dei doni."
      },
      
      
      // # ELEMENTAL #
      B0 : {
        name : "Fuoco",
        desc : "Dona proprietà di fuoco. Riduce l'attacco<br>dell'arma e dei doni e il bilanciamento."
      },
      
      B1 : {
        name : "Ghiaccio",
        desc : "Dona proprietà di ghiaccio. Riduce l'attacco<br>dell'arma e dei doni e il bilanciamento."
      },
      
      B2 : {
        name : "Elettricità",
        desc : "Dona proprietà elettriche. Riduce l'attacco<br>dell'arma e dei doni e il bilanciamento."
      },
      
      
      // # AILMENTS #
      C0 : {
        name : "Veleno",
        desc : "Crea un equipaggiamento che avvelena i nemici,<br>ma riduce le proprietà dei doni e l'attacco."
      },
      
      C1 : {
        name : "Stordimento",
        desc : "Crea un oggetto che stordisce i nemici,<br>ma riduce le proprietà dei doni e l'attacco."
      },
      
      C2 : {
        name : "Inibizione",
        desc : "Crea un oggetto che inibisce i nemici,<br>ma riduce le proprietà dei doni e l'attacco."
      },
      
      C3 : {
        name : "Lentezza",
        desc : "Crea un oggetto che rallenta i nemici,<br>ma riduce le proprietà dei doni e l'attacco."
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
