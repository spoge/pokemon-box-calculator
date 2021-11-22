const JohtoDex: { [id: string]: { nationalId: string; name: string } } = {
  "001": { nationalId: "152", name: "Chikorita" },
  "002": { nationalId: "153", name: "Bayleef" },
  "003": { nationalId: "154", name: "Meganium" },
  "004": { nationalId: "155", name: "Cyndaquil" },
  "005": { nationalId: "156", name: "Quilava" },
  "006": { nationalId: "157", name: "Typhlosion" },
  "007": { nationalId: "158", name: "Totodile" },
  "008": { nationalId: "159", name: "Croconaw" },
  "009": { nationalId: "160", name: "Feraligatr" },
  "010": { nationalId: "016", name: "Pidgey" },
  "011": { nationalId: "017", name: "Pidgeotto" },
  "012": { nationalId: "018", name: "Pidgeot" },
  "013": { nationalId: "021", name: "Spearow" },
  "014": { nationalId: "022", name: "Fearow" },
  "015": { nationalId: "163", name: "Hoothoot" },
  "016": { nationalId: "164", name: "Noctowl" },
  "017": { nationalId: "019", name: "Rattata" },
  "018": { nationalId: "020", name: "Raticate" },
  "019": { nationalId: "161", name: "Sentret" },
  "020": { nationalId: "162", name: "Furret" },
  "021": { nationalId: "172", name: "Pichu" },
  "022": { nationalId: "025", name: "Pikachu" },
  "023": { nationalId: "026", name: "Raichu" },
  "024": { nationalId: "010", name: "Caterpie" },
  "025": { nationalId: "011", name: "Metapod" },
  "026": { nationalId: "012", name: "Butterfree" },
  "027": { nationalId: "013", name: "Weedle" },
  "028": { nationalId: "014", name: "Kakuna" },
  "029": { nationalId: "015", name: "Beedrill" },
  "030": { nationalId: "165", name: "Ledyba" },
  "031": { nationalId: "166", name: "Ledian" },
  "032": { nationalId: "167", name: "Spinarak" },
  "033": { nationalId: "168", name: "Ariados" },
  "034": { nationalId: "074", name: "Geodude" },
  "035": { nationalId: "075", name: "Graveler" },
  "036": { nationalId: "076", name: "Golem" },
  "037": { nationalId: "041", name: "Zubat" },
  "038": { nationalId: "042", name: "Golbat" },
  "039": { nationalId: "169", name: "Crobat" },
  "040": { nationalId: "173", name: "Cleffa" },
  "041": { nationalId: "035", name: "Clefairy" },
  "042": { nationalId: "036", name: "Clefable" },
  "043": { nationalId: "174", name: "Igglybuff" },
  "044": { nationalId: "039", name: "Jigglypuff" },
  "045": { nationalId: "040", name: "Wigglytuff" },
  "046": { nationalId: "175", name: "Togepi" },
  "047": { nationalId: "176", name: "Togetic" },
  "048": { nationalId: "027", name: "Sandshrew" },
  "049": { nationalId: "028", name: "Sandslash" },
  "050": { nationalId: "023", name: "Ekans" },
  "051": { nationalId: "024", name: "Arbok" },
  "052": { nationalId: "206", name: "Dunsparce" },
  "053": { nationalId: "179", name: "Mareep" },
  "054": { nationalId: "180", name: "Flaaffy" },
  "055": { nationalId: "181", name: "Ampharos" },
  "056": { nationalId: "194", name: "Wooper" },
  "057": { nationalId: "195", name: "Quagsire" },
  "058": { nationalId: "092", name: "Gastly" },
  "059": { nationalId: "093", name: "Haunter" },
  "060": { nationalId: "094", name: "Gengar" },
  "061": { nationalId: "201", name: "Unown" },
  "062": { nationalId: "095", name: "Onix" },
  "063": { nationalId: "208", name: "Steelix" },
  "064": { nationalId: "069", name: "Bellsprout" },
  "065": { nationalId: "070", name: "Weepinbell" },
  "066": { nationalId: "071", name: "Victreebel" },
  "067": { nationalId: "187", name: "Hoppip" },
  "068": { nationalId: "188", name: "Skiploom" },
  "069": { nationalId: "189", name: "Jumpluff" },
  "070": { nationalId: "046", name: "Paras" },
  "071": { nationalId: "047", name: "Parasect" },
  "072": { nationalId: "060", name: "Poliwag" },
  "073": { nationalId: "061", name: "Poliwhirl" },
  "074": { nationalId: "062", name: "Poliwrath" },
  "075": { nationalId: "186", name: "Politoed" },
  "076": { nationalId: "129", name: "Magikarp" },
  "077": { nationalId: "130", name: "Gyarados" },
  "078": { nationalId: "118", name: "Goldeen" },
  "079": { nationalId: "119", name: "Seaking" },
  "080": { nationalId: "079", name: "Slowpoke" },
  "081": { nationalId: "080", name: "Slowbro" },
  "082": { nationalId: "199", name: "Slowking" },
  "083": { nationalId: "043", name: "Oddish" },
  "084": { nationalId: "044", name: "Gloom" },
  "085": { nationalId: "045", name: "Vileplume" },
  "086": { nationalId: "182", name: "Bellossom" },
  "087": { nationalId: "096", name: "Drowzee" },
  "088": { nationalId: "097", name: "Hypno" },
  "089": { nationalId: "063", name: "Abra" },
  "090": { nationalId: "064", name: "Kadabra" },
  "091": { nationalId: "065", name: "Alakazam" },
  "092": { nationalId: "132", name: "Ditto" },
  "093": { nationalId: "204", name: "Pineco" },
  "094": { nationalId: "205", name: "Forretress" },
  "095": { nationalId: "029", name: "Nidoran♀" },
  "096": { nationalId: "030", name: "Nidorina" },
  "097": { nationalId: "031", name: "Nidoqueen" },
  "098": { nationalId: "032", name: "Nidoran♂" },
  "099": { nationalId: "033", name: "Nidorino" },
  "100": { nationalId: "034", name: "Nidoking" },
  "101": { nationalId: "193", name: "Yanma" },
  "102": { nationalId: "469", name: "Yanmega" },
  "103": { nationalId: "191", name: "Sunkern" },
  "104": { nationalId: "192", name: "Sunflora" },
  "105": { nationalId: "102", name: "Exeggcute" },
  "106": { nationalId: "103", name: "Exeggutor" },
  "107": { nationalId: "185", name: "Sudowoodo" },
  "108": { nationalId: "202", name: "Wobbuffet" },
  "109": { nationalId: "048", name: "Venonat" },
  "110": { nationalId: "049", name: "Venomoth" },
  "111": { nationalId: "123", name: "Scyther" },
  "112": { nationalId: "212", name: "Scizor" },
  "113": { nationalId: "127", name: "Pinsir" },
  "114": { nationalId: "214", name: "Heracross" },
  "115": { nationalId: "109", name: "Koffing" },
  "116": { nationalId: "110", name: "Weezing" },
  "117": { nationalId: "088", name: "Grimer" },
  "118": { nationalId: "089", name: "Muk" },
  "119": { nationalId: "081", name: "Magnemite" },
  "120": { nationalId: "082", name: "Magneton" },
  "121": { nationalId: "100", name: "Voltorb" },
  "122": { nationalId: "101", name: "Electrode" },
  "123": { nationalId: "190", name: "Aipom" },
  "124": { nationalId: "424", name: "Ambipom" },
  "125": { nationalId: "209", name: "Snubbull" },
  "126": { nationalId: "210", name: "Granbull" },
  "127": { nationalId: "037", name: "Vulpix" },
  "128": { nationalId: "038", name: "Ninetales" },
  "129": { nationalId: "058", name: "Growlithe" },
  "130": { nationalId: "059", name: "Arcanine" },
  "131": { nationalId: "234", name: "Stantler" },
  "132": { nationalId: "183", name: "Marill" },
  "133": { nationalId: "184", name: "Azumarill" },
  "134": { nationalId: "050", name: "Diglett" },
  "135": { nationalId: "051", name: "Dugtrio" },
  "136": { nationalId: "056", name: "Mankey" },
  "137": { nationalId: "057", name: "Primeape" },
  "138": { nationalId: "052", name: "Meowth" },
  "139": { nationalId: "053", name: "Persian" },
  "140": { nationalId: "054", name: "Psyduck" },
  "141": { nationalId: "055", name: "Golduck" },
  "142": { nationalId: "066", name: "Machop" },
  "143": { nationalId: "067", name: "Machoke" },
  "144": { nationalId: "068", name: "Machamp" },
  "145": { nationalId: "236", name: "Tyrogue" },
  "146": { nationalId: "106", name: "Hitmonlee" },
  "147": { nationalId: "107", name: "Hitmonchan" },
  "148": { nationalId: "237", name: "Hitmontop" },
  "149": { nationalId: "203", name: "Girafarig" },
  "150": { nationalId: "128", name: "Tauros" },
  "151": { nationalId: "241", name: "Miltank" },
  "152": { nationalId: "240", name: "Magby" },
  "153": { nationalId: "126", name: "Magmar" },
  "154": { nationalId: "238", name: "Smoochum" },
  "155": { nationalId: "124", name: "Jynx" },
  "156": { nationalId: "239", name: "Elekid" },
  "157": { nationalId: "125", name: "Electabuzz" },
  "158": { nationalId: "122", name: "Mr. Mime" },
  "159": { nationalId: "235", name: "Smeargle" },
  "160": { nationalId: "083", name: "Farfetch'd" },
  "161": { nationalId: "177", name: "Natu" },
  "162": { nationalId: "178", name: "Xatu" },
  "163": { nationalId: "211", name: "Qwilfish" },
  "164": { nationalId: "072", name: "Tentacool" },
  "165": { nationalId: "073", name: "Tentacruel" },
  "166": { nationalId: "098", name: "Krabby" },
  "167": { nationalId: "099", name: "Kingler" },
  "168": { nationalId: "213", name: "Shuckle" },
  "169": { nationalId: "120", name: "Staryu" },
  "170": { nationalId: "121", name: "Starmie" },
  "171": { nationalId: "090", name: "Shellder" },
  "172": { nationalId: "091", name: "Cloyster" },
  "173": { nationalId: "222", name: "Corsola" },
  "174": { nationalId: "223", name: "Remoraid" },
  "175": { nationalId: "224", name: "Octillery" },
  "176": { nationalId: "170", name: "Chinchou" },
  "177": { nationalId: "171", name: "Lanturn" },
  "178": { nationalId: "086", name: "Seel" },
  "179": { nationalId: "087", name: "Dewgong" },
  "180": { nationalId: "108", name: "Lickitung" },
  "181": { nationalId: "463", name: "Lickilicky" },
  "182": { nationalId: "114", name: "Tangela" },
  "183": { nationalId: "465", name: "Tangrowth" },
  "184": { nationalId: "133", name: "Eevee" },
  "185": { nationalId: "134", name: "Vaporeon" },
  "186": { nationalId: "135", name: "Jolteon" },
  "187": { nationalId: "136", name: "Flareon" },
  "188": { nationalId: "196", name: "Espeon" },
  "189": { nationalId: "197", name: "Umbreon" },
  "190": { nationalId: "116", name: "Horsea" },
  "191": { nationalId: "117", name: "Seadra" },
  "192": { nationalId: "230", name: "Kingdra" },
  "193": { nationalId: "207", name: "Gligar" },
  "194": { nationalId: "225", name: "Delibird" },
  "195": { nationalId: "220", name: "Swinub" },
  "196": { nationalId: "221", name: "Piloswine" },
  "197": { nationalId: "473", name: "Mamoswine" },
  "198": { nationalId: "216", name: "Teddiursa" },
  "199": { nationalId: "217", name: "Ursaring" },
  "200": { nationalId: "231", name: "Phanpy" },
  "201": { nationalId: "232", name: "Donphan" },
  "202": { nationalId: "226", name: "Mantine" },
  "203": { nationalId: "227", name: "Skarmory" },
  "204": { nationalId: "084", name: "Doduo" },
  "205": { nationalId: "085", name: "Dodrio" },
  "206": { nationalId: "077", name: "Ponyta" },
  "207": { nationalId: "078", name: "Rapidash" },
  "208": { nationalId: "104", name: "Cubone" },
  "209": { nationalId: "105", name: "Marowak" },
  "210": { nationalId: "115", name: "Kangaskhan" },
  "211": { nationalId: "111", name: "Rhyhorn" },
  "212": { nationalId: "112", name: "Rhydon" },
  "213": { nationalId: "198", name: "Murkrow" },
  "214": { nationalId: "228", name: "Houndour" },
  "215": { nationalId: "229", name: "Houndoom" },
  "216": { nationalId: "218", name: "Slugma" },
  "217": { nationalId: "219", name: "Magcargo" },
  "218": { nationalId: "215", name: "Sneasel" },
  "219": { nationalId: "200", name: "Misdreavus" },
  "220": { nationalId: "137", name: "Porygon" },
  "221": { nationalId: "233", name: "Porygon2" },
  "222": { nationalId: "113", name: "Chansey" },
  "223": { nationalId: "242", name: "Blissey" },
  "224": { nationalId: "131", name: "Lapras" },
  "225": { nationalId: "138", name: "Omanyte" },
  "226": { nationalId: "139", name: "Omastar" },
  "227": { nationalId: "140", name: "Kabuto" },
  "228": { nationalId: "141", name: "Kabutops" },
  "229": { nationalId: "142", name: "Aerodactyl" },
  "230": { nationalId: "143", name: "Snorlax" },
  "231": { nationalId: "001", name: "Bulbasaur" },
  "232": { nationalId: "002", name: "Ivysaur" },
  "233": { nationalId: "003", name: "Venusaur" },
  "234": { nationalId: "004", name: "Charmander" },
  "235": { nationalId: "005", name: "Charmeleon" },
  "236": { nationalId: "006", name: "Charizard" },
  "237": { nationalId: "007", name: "Squirtle" },
  "238": { nationalId: "008", name: "Wartortle" },
  "239": { nationalId: "009", name: "Blastoise" },
  "240": { nationalId: "144", name: "Articuno" },
  "241": { nationalId: "145", name: "Zapdos" },
  "242": { nationalId: "146", name: "Moltres" },
  "243": { nationalId: "243", name: "Raikou" },
  "244": { nationalId: "244", name: "Entei" },
  "245": { nationalId: "245", name: "Suicune" },
  "246": { nationalId: "147", name: "Dratini" },
  "247": { nationalId: "148", name: "Dragonair" },
  "248": { nationalId: "149", name: "Dragonite" },
  "249": { nationalId: "246", name: "Larvitar" },
  "250": { nationalId: "247", name: "Pupitar" },
  "251": { nationalId: "248", name: "Tyranitar" },
  "252": { nationalId: "249", name: "Lugia" },
  "253": { nationalId: "250", name: "Ho-Oh" },
  "254": { nationalId: "150", name: "Mewtwo" },
  "255": { nationalId: "151", name: "Mew" },
  "256": { nationalId: "251", name: "Celebi" },
};
export default JohtoDex;
