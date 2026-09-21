import { Question } from '../types';

export const GEOGRAPHY_2015_EC_PART1: Question[] = [
  {
    id: 'geo-2015-q1',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Physiography of Ethiopia: Western Lowlands',
    questionText: '1. Which of the following is the southern limit of the Western lowlands?',
    options: [
      'Baro-Akobo lowlands',
      'Abay-Dinder lowlands',
      'Omo-Ghibe lowlands',
      'Tekezze-Angereb lowlands'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The Western Lowlands of Ethiopia extend along the Ethio-Sudanese border from north to south. They are subdivided into the Tekeze-Setit lowlands in the north, the Abay-Dinder lowlands in the center, and the Baro-Akobo lowlands in the south. Therefore, the southern limit of the Western lowlands is the Baro-Akobo lowlands (the Omo-Ghibe lowlands belong to the southeastern/southern rift valley system).

🇪🇹 አማርኛ (Amharic):
የኢትዮጵያ ምዕራባዊ ቆላማ አካባቢዎች (Western lowlands) በኢትዮ-ሱዳን ድንበር በኩል ከሰሜን ወደ ደቡብ የተዘረጉ ሲሆኑ፡ በሰሜን የተከዜ-ሰቲት፣ በመሀል የአባይ-ዲንደር፣ እና በደቡብ የባሮ-አኮቦ ቆላማ ቦታዎች ናቸው። ስለዚህ የምዕራባዊ ቆላዎች ደቡባዊ ወሰን የባሮ-አኮቦ ቆላማ አካባቢ ነው።

🌳 Afaan Oromoo:
Dacheewwan gadi-aanoon dhiha Itoophiyaa (Western lowlands) kaabaa hanga kibbaatti kan diriiran yoo ta'u, koonni kibbaa dachee gadi-aanaa Baaroo-Akooboo ti.`,
    hint: 'The Baro-Akobo lowlands form the southernmost subdivision of the Western lowland belt.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q2',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Drainage Systems: Characteristics of Ethiopian Rivers',
    questionText: '2. Which one describes the general characteristics of Ethiopian rivers?',
    options: [
      'They are very suitable for water transportation.',
      'Most rivers originate from lowland areas.',
      'They are perennial with steady volume of water.',
      'They serve as domestic and international boundaries.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Major Ethiopian rivers flow through rugged gorges, have rapids and waterfalls, and experience extreme seasonal volume fluctuations, making them generally unsuitable for navigation. Almost all originate in high-altitude highlands. However, they frequently serve as domestic administrative boundaries (e.g., Abay separating Gojjam and Shewa) and international borders (e.g., Baro, Dawa, Mereb).

🇪🇹 አማርኛ (Amharic):
የኢትዮጵያ ወንዞች አብዛኞቹ ከከፍተኛ ቦታዎች የሚመነጩ፣ ፏፏቴና ገደላማ ቦታዎች የበዛባቸው በመሆናቸው ለውሃ ትራንስፖርት አይመቹም፤ እንዲሁም የውሃ መጠናቸው በክረምትና በበጋ ይለያያል። ሆኖም የሀገር ውስጥ ክልሎችን እንዲሁም ዓለም አቀፍ ድንበሮችን (ለምሳሌ መረብ፣ ዳዋ፣ ባሮ) ለመካለል እንደ ድንበር ያገለግላሉ።

🌳 Afaan Oromoo:
Lageen Itoophiyaa baay'een isaanii lafa gaarrenii irraa waan maddaniif, dambalii fi kufaatii bishaanii waan qabaniif geejjibaaf hin mijatan. Haa ta'u malee, daangaa biyya keessaa fi daangaa idil-addunyaa ta'anii tajaajilu.`,
    hint: 'Ethiopian rivers frequently delineate regional and international political borders.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q3',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Drainage Systems: The Inland (Rift Valley) Drainage System',
    questionText: '3. What characterizes the inland drainage system of Ethiopia?',
    options: [
      'It drains most parts of the northwestern Ethiopia.',
      'It includes the river basins of the Omo-Ghibe.',
      'Its rivers join the Red sea during the summer season.',
      'It is the largest in terms of the discharge of water.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The Inland (Rift Valley / Endorheic) Drainage System consists of rivers that do not reach the open sea or ocean, but instead empty into closed tectonic rift lakes or sink into inland depressions. Key river basins belonging to this closed inland system include the Awash River (flowing into Lake Abbe) and the Omo-Ghibe River (flowing into Lake Turkana).

🇪🇹 አማርኛ (Amharic):
የስምጥ ሸለቆ (የውስጥ) ተፋሰስ ስርዓት (Inland drainage system) ወንዞቹ ወደ ውቅያኖስ የማይደርሱና በውስጥ ሀይቆች ወይም ረግረጋማ ስፍራዎች የሚያልቁ ናቸው። ዋነኛ ተፋሰሶቹ የአዋሽ ወንዝ (ሐይቅ አቤ) እና የኦሞ-ጊቤ ወንዝ (ቱርካና ሐይቅ) ናቸው።

🌳 Afaan Oromoo:
Sirni dhangala'aa bishaanii keessaa (Inland drainage system) laggeen galaanatti hin dhangalaane kan of keessatti qabatu yoo ta'u, laggawwan Oomoo-Gibe (gara Haroo Turkanaatti) fi Awaash of keessaa qaba.`,
    hint: 'The Omo-Ghibe river terminates into Lake Turkana, making it part of the inland/closed drainage system.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q4',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Climate of Ethiopia: Temporal Variation of Rainfall',
    questionText: '4. Which one of the following explains the temporal variation of rainfall in Ethiopia?',
    options: [
      'Spring is the rainy season in most parts of Ethiopia.',
      'In Autumn, many places in Ethiopia receive the highest rainfall.',
      'There is little seasonal variation in the amount of rain in Ethiopia.',
      'The lowlands of Afar typically receive rain in summer.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Temporal rainfall variation refers to distribution across seasons. While the highlands receive heavy summer (Kiremt - June to August) monsoon rains, the arid northeastern and Afar lowlands receive their limited rainfall mainly during summer when the Inter-Tropical Convergence Zone (ITCZ) reaches its northernmost position and convective storms develop.

🇪🇹 አማርኛ (Amharic):
በኢትዮጵያ የዝናብ ወቅት ስርጭትን (temporal variation) በተመለከተ፣ የአፋር ቆላማ አካባቢዎች ውስን የሆነውን የዝናብ መጠናቸውን በዋናነት የሚያገኙት በክረምት (Summer) ወቅት ITCZ ወደ ሰሜን በሚያልፍበት ወቅት ነው።

🌳 Afaan Oromoo:
Garaagarummaa yeroo roobaa Itoophiyaa keessatti, dacheen gadi-aanaa Afaar rooba isaanii isa xiqqaatu yeroo gannaa (summer) keessa argatu.`,
    hint: 'The summer season brings precipitation across northern and northeastern lowlands like Afar due to the ITCZ shift.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q5',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Natural Vegetation: Ethiopian Woodland Savanna',
    questionText: '5. Which one is correct about the Ethiopian Woodland Savanna vegetation?',
    options: [
      'It is very similar to European Alpine vegetation.',
      'It is known for dense acacia trees.',
      'It grows mainly along the river banks.',
      'It is found both in the highlands and lowlands.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The Ethiopian Woodland Savanna (Acacia-Commiphora and broad-leaved deciduous woodlands) is predominantly characterized by scattered to dense drought-resistant thorny acacia trees, deciduous shrubs, and coarse grasses adapted to semi-arid and sub-humid zones.

🇪🇹 አማርኛ (Amharic):
የኢትዮጵያ ዉድላንድ ሳቫና (Woodland Savanna) የተፈጥሮ እፅዋት በዋናነት የሚታወቀው ድርቅን በሚቋቋሙ ጥቅጥቅ ባሉ የግራር (Acacia) ዛፎች እና ሳሮች ነው።

🌳 Afaan Oromoo:
Biqiltoonni Saavaanaa Wudlaandii Itoophiyaa (Woodland Savanna) mukeen laaftoo (Acacia) fi biqiltoota qoreeyyii dhabachuu danda'aniin beekama.`,
    hint: 'Acacia trees and thorny shrubs are the hallmark of woodland savanna.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q6',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Wild Animals: Endemic Species & National Parks',
    questionText: '6. If you were asked by a tourist who wanted to see Chelada baboon in Ethiopia, which specific national park would be your recommendation?',
    options: [
      'The Bale Mountains',
      'The Nechsar Park',
      'The Semein Highlands',
      'The Awash Park'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The Gelada/Chelada baboon (Theropithecus gelada) is an endemic primate found primarily on the high-altitude afro-alpine cliff escarpments and plateau grasslands of the Semien Mountains National Park in northern Ethiopia.

🇪🇹 አማርኛ (Amharic):
የጭላዳ ዝንጀሮ (Chelada baboon) በኢትዮጵያ ብቻ የሚገኝ ዝርያ ሲሆን በዋናነት በስሜን ተራሮች ብሔራዊ ፓርክ (Semien Mountains National Park) ከፍተኛ ገደሎችና ሜዳዎች ላይ በብዛት ይገኛል።

🌳 Afaan Oromoo:
Jaldeessi Qamalee/Cilaadaa (Chelada baboon) Itoophiyaa keessatti baay'inaan Paarkii Biyyoolessaa Gaarren Saamen (Semien Highlands) keessatti argama.`,
    hint: 'The Semien Mountains National Park is world-famous for endemic Gelada baboons and Walia Ibex.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q7',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Wildlife Conservation: Categories of Protected Areas',
    questionText: '7. If you are asked to propose a strategy for conservation of wildlife where hunting is strictly forbidden, what would be your suggestion as conservation area?',
    options: [
      'National parks',
      'Sanctuaries',
      'Game reserves',
      'Zoological gardens'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In a National Park, the entire natural ecosystem is legally protected by the state, and all forms of commercial exploitation, human settlement, deforestation, and hunting are strictly prohibited. In contrast, Game Reserves and Controlled Hunting Areas allow licensed trophy hunting under specific regulations.

🇪🇹 አማርኛ (Amharic):
በብሔራዊ ፓርኮች (National parks) ውስጥ ማንኛውም አይነት አደን (hunting)፣ የተፈጥሮ ሀብት ማውደም እና ህገወጥ ሰፈራ በህግ በጥብቅ የተከለከለ ነው። በጌም ሪዘርቭ (Game reserves) ግን ፈቃድ ያለው ቁጥጥር የሚደረግበት አደን ይፈቀዳል።

🌳 Afaan Oromoo:
Paarkiiwwan Biyyoolessaa (National parks) keessatti adamsiin bineensotaa guutummaatti seeraan kan dhorgameedha.`,
    hint: 'National parks provide total legal protection where hunting is entirely prohibited.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q8',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Soil Conservation: Measures in Arid & Semi-Arid Lands',
    questionText: '8. Which measure of soil conservation should be widely used against soil erosion in arid and semi-arid areas of the Horn?',
    options: [
      'Terracing',
      'Intercropping',
      'Check dams',
      'Shelter belts'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In arid and semi-arid regions where the land is dry and flat, wind erosion is the predominant cause of soil degradation. Shelterbelts (or windbreaks) — linear rows of drought-resistant trees and shrubs planted across prevailing wind directions — reduce wind velocity and prevent topsoil loss.

🇪🇹 አማርኛ (Amharic):
በደረቅና ከፊል ደረቅ (arid and semi-arid) አካባቢዎች ዋነኛው የአፈር መሸርሸር ምክንያት ኃይለኛ ንፋስ በመሆኑ፣ የንፋስ መከላከያ የዛፍ አጥሮች (Shelter belts / Windbreaks) መትከል በጣም ውጤታማ የአፈር ጥበቃ ዘዴ ነው።

🌳 Afaan Oromoo:
Naannolee gogaa fi gammoojjii keessatti dhiqama biyyee qilleensa jabaadhaan dhufu ittisuuf, dawoo muka dhaabuu (Shelter belts) fayyadamuun filatamaadha.`,
    hint: 'Shelter belts (windbreaks) reduce wind speed and prevent topsoil loss in arid plains.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q9',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Geology: Types of Igneous Rocks',
    questionText: '9. Which of the following igneous rock has clearly observed crystals and coarse grain?',
    options: [
      'Obsidian',
      'Granite',
      'Marble',
      'Basalt'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Granite is an intrusive (plutonic) igneous rock that cooled slowly deep beneath the Earth's surface, allowing large mineral crystals (quartz, feldspar, mica) to form, giving it a coarse-grained (phaneritic) texture. Basalt and obsidian cool quickly at the surface (fine-grained and glassy), while marble is metamorphic.

🇪🇹 አማርኛ (Amharic):
ግራናይት (Granite) በመሬት ውስጥ ቀስ ብሎ በመቀዝቀዝ የሚፈጠር ውስጣዊ የእሳተ ገሞራ አለት (intrusive igneous rock) ስለሆነ፣ ትላልቅ እና በግልጽ የሚታዩ ክሪስታሎችና ሸካራ ጥንቅር (coarse grain) አለው።

🌳 Afaan Oromoo:
Giraanaayitii (Granite) dhagaa 'igneous' keessoo lafaatti suuta qabbanaa'ee uumamu waan ta'eef, kiristaalota gurguddoo fi ifatti mul'atan (coarse grain) qaba.`,
    hint: 'Plutonic rocks like granite cool slowly underground, forming coarse, visible crystals.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q10',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Soils: Soil Texture & Drainage Characteristics',
    questionText: '10. One of the following is a poorly drained and aerated soil type. Which one is it?',
    options: [
      'Loam soils',
      'Silt soils',
      'Clay soils',
      'Sandy soils'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Clay soils consist of extremely fine microscopic particles tightly packed together with tiny pore spaces. As a result, clay holds water very tightly, drains very slowly, becomes waterlogged easily, and suffers from poor aeration.

🇪🇹 አማርኛ (Amharic):
የሸክላ አፈር (Clay soil) ቅንጣቶቹ እጅግ በጣም ደቂቅና የተጠጋጉ በመሆናቸው ውሃን በቀላሉ አያሳልፍም (poorly drained) እንዲሁም የአየር ዝውውሩ ደካማ (poorly aerated) ነው።

🌳 Afaan Oromoo:
Biyyeen suphee (Clay soil) qaawwaa xixiqqoo waan qabuuf bishaan qabatee tura, dafee hin dhangalaasu (poorly drained) fi qilleensa gahaa hin qabu.`,
    hint: 'Fine-textured clay retains excessive water and has poor internal drainage.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q11',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Climatology: Natural Causes of Climate Change',
    questionText: '11. Which of the following is correct about natural causes of climate change?',
    options: [
      'Continental drift changes the flow of ocean currents and winds.',
      'Volcanic eruption leads to atmospheric heating.',
      'Natural causes are becoming the major causes of climate change.',
      'Ocean currents via releasing water vapor have a net cooling effect.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Continental drift rearranges the positions of continents and ocean basins over geological timescales. This rearrangement alters global atmospheric wind patterns and global ocean conveyor currents, significantly shifting climate zones. Volcanic ash actually causes net cooling (not heating) by reflecting solar radiation.

🇪🇹 አማርኛ (Amharic):
የአህጉራት መንሸራተት (Continental drift) የአህጉራትንና የውቅያኖሶችን አቀማመጥ ስለሚቀይር፣ የውቅያኖስ ሞገድ እና የአየር ንፋስ ፍሰት ስርዓትን በመቀየር የአየር ንብረት ለውጥ እንዲከሰት ያደርጋል።

🌳 Afaan Oromoo:
Sochiin ardilee (Continental drift) teessuma ardilee fi garbootaa waan jijjiiruuf, daddarbiinsa dambalii garbaa fi qilleensaa jijjiiruun qilleensa addunyaa jijjiira.`,
    hint: 'Continental drift alters ocean basins and global wind/ocean circulation patterns.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q12',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Climate of Ethiopia: Temperature Distribution Patterns',
    questionText: '12. How do you explain the spatio-temporal distribution of temperature in Ethiopia?',
    options: [
      'Annual range of temperature is greater than the daily range.',
      'Temperature decreases from the center to the peripheries.',
      'Daily range of temperature is the highest during winter season.',
      'Highlands exhibit the highest annual range of temperature.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In tropical highland countries like Ethiopia, the diurnal (daily) range of temperature is greater than the annual range (a characteristic of the tropics). During the clear-sky Bega/winter season (December to February), strong daytime solar heating followed by intense nighttime terrestrial radiational cooling causes the daily temperature range to reach its maximum.

🇪🇹 አማርኛ (Amharic):
በኢትዮጵያ በበጋ (Bega/winter) ወቅት ደመና ባለመኖሩ በቀን ከፍተኛ የፀሐይ ሙቀት ሲኖር፣ በሌሊት ደግሞ ከፍተኛ ቅዝቃዜ ስለሚፈጠር የቀንና የሌሊት የሙቀት ልዩነት (Daily range of temperature) ከፍተኛው ደረጃ ላይ ይደርሳል።

🌳 Afaan Oromoo:
Itoophiyaa keessatti yeroo Begaa (ganna qulqulluu) duumessi waan hin jirreef, guyyaa baay'ee o'ee halkan baay'ee waan qabbanaa'uuf garaagarummaan teempireechara guyyaa (daily range) olaanaa ta'a.`,
    hint: 'Clear cloudless skies in dry winter (Bega) produce the highest diurnal (daily) temperature range.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q13',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Agro-Ecological Zones: Bereha Characteristics',
    questionText: '13. Which climatic zone of Ethiopia experiences hot temperature, small cloud cover and very windy conditions throughout the year?',
    options: [
      'Woina Dega',
      'Bereha',
      'Dega',
      'Wurch'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Bereha (the hot arid/desert climatic zone below 500m elevation, such as the Danakil/Afar depression and Ogaden lowlands) is characterized by high year-round temperatures (>30°C), minimal cloud cover, intense solar radiation, and strong dry winds.

🇪🇹 አማርኛ (Amharic):
በረሃ (Bereha) ከ500 ሜትር በታች የሚገኝ ሞቃታማ የቆላ ዞን ሲሆን ዓመቱን ሙሉ ከፍተኛ ሙቀት፣ አነስተኛ የደመና ሽፋን እና ኃይለኛ ንፋስ ይታይበታል።

🌳 Afaan Oromoo:
Gammoojjiin yookiin 'Bereha' ol-ka'iinsa meetira 500 gadi kan qabu yoo ta'u, teempireechara ho'aa, duumessa xiqqaatee fi qilleensa jabaa qabaachuun beekama.`,
    hint: 'Bereha represents the true arid lowland desert zone of Ethiopia below 500 meters.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q14',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Population Geography: Population Distribution Factors',
    questionText: '14. Why are some regions of the world more sparsely populated than others? This is because of the',
    options: [
      'availability of fertile soil.',
      'presence of a favorable climate.',
      'practice of farm economic activity.',
      'existence of rugged topography.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Sparsely populated areas are regions where human settlement is very low. Physical deterrents such as steep and rugged mountainous topography, severe desert aridity, and permafrost make infrastructure, agriculture, and living conditions difficult, leading to sparse population densities.

🇪🇹 አማርኛ (Amharic):
አንዳንድ የዓለም አካባቢዎች እጅግ አነስተኛ የህዝብ ቁጥር (sparsely populated) ያላቸው ወጣ ገባና ገደላማ መልክዓ-ምድር (rugged topography) ለእርሻና ለትራንስፖርት እንዲሁም ለመኖሪያ አመቺ ስላልሆነ ነው።

🌳 Afaan Oromoo:
Naannoleen addunyaa tokko tokko baay'ina ummataa xiqqa (sparsely populated) kan qabaataniif teessumni lafaa qilee fi gaarren dadhabaa (rugged topography) ta'uu isaatiini.`,
    hint: 'Rugged terrain and extreme environments discourage dense human habitation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q15',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Human Migration: Types and Planned Resettlement',
    questionText: '15. What type of migration results when governments move war and natural disaster-affected people to new places?',
    options: [
      'Evacuee',
      'Resettlement',
      'Transhumance',
      'Refugee'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Resettlement (or planned relocation) is the organized, state-sponsored transfer and establishment of communities displaced by war, drought, famine, or environmental disasters into new viable agricultural areas.

🇪🇹 አማርኛ (Amharic):
መንግሥት በጦርነት ወይም በተፈጥሮ አደጋ የተጎዱ ዜጎችን በታቀደ መንገድ ወደ አዲስ አካባቢ አዛውሮ ሲያሰፍር ሰፈራ (Resettlement) ይባላል።

🌳 Afaan Oromoo:
Yeroo mootummaan ummata waraana fi balaa uumamaatiin miidhaman gara iddoo haaraatti godaansisee qubsiisu 'Resettlement' (qubannaa/deebisanii qubsiisuu) jedhama.`,
    hint: 'Government-organized relocation of disaster-affected populations is called resettlement.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q16',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Urban Geography: Global Urbanization Trends',
    questionText: '16. How do we generalize the level of the world\'s urbanization across continents?',
    options: [
      'Africa has the highest level of urbanization.',
      'Asia has a higher level of urbanization than Latin America.',
      'North America is the most urbanized continent.',
      'There is a high level of urbanization in the developing world.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
North America is the most urbanized continent globally (over 82-83% of its population resides in urban centers), followed by Latin America and Europe. Africa and Asia have the lowest levels of urbanization (~43-50%), though they have the highest rates of urban growth.

🇪🇹 አማርኛ (Amharic):
በዓለማችን ከፍተኛ የከተሜነት ደረጃ (highest level of urbanization) ያለው አህጉር ሰሜን አሜሪካ (North America) ሲሆን ከ82% በላይ የሚሆነው ህዝቡ በከተሞች ውስጥ ይኖራል።

🌳 Afaan Oromoo:
Sadarkaa magaalummaa addunyaa irratti, Ameerikaan Kaabaa (North America) ardii harka 82% ol ummata magaalaa qabduu fi hunda caalaa magaaloofteedha.`,
    hint: 'North America has the highest proportion (>82%) of urban population among continents.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q17',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Settlement Geography: Rural vs Urban Characteristics',
    questionText: '17. How do we describe rural and urban settlements?',
    options: [
      'Rural settlements have defined shapes.',
      'Rural areas are known by dense population.',
      'Urban settlements have planned streets.',
      'Urban areas have a low division of labor.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Urban settlements are characterized by structured town planning, engineered grid/radial road and street layouts, high population density, and complex divisions of labor (secondary and tertiary economic sectors).

🇪🇹 አማርኛ (Amharic):
የከተማ ሰፈራዎች (Urban settlements) በዋናነት የሚታወቁት በተቀናጀ ፕላን በተሰሩ መንገዶች (planned streets)፣ ከፍተኛ የህዝብ ጥግግት እና ልዩ ልዩ የአገልግሎት ዘርፎች ነው።

🌳 Afaan Oromoo:
Qubannaan magaalaa (Urban settlements) daandilee sirnaan toora qabatanii fi karoorfaman (planned streets) qabaachuun beekama.`,
    hint: 'Urban centers feature planned street networks and non-agricultural employment.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q18',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Historical Urbanization of Ethiopia: Strategic Hilltop Settlements',
    questionText: '18. Why was hilltops mainly preferred for the establishment of old urban centers of Ethiopia? This was due to their',
    options: [
      'water resources.',
      'defensive locations.',
      'fertile alluvial soil.',
      'natural beauty.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Historic Ethiopian towns (such as Gondar, Ankober, Mekelle, Harar, and early Addis Ababa) were typically founded on elevated hilltops and plateaus primarily for military defense, commanding views against invaders, and protection against malaria and lowland diseases.

🇪🇹 አማርኛ (Amharic):
የቀድሞ የኢትዮጵያ ከተሞች በኮረብታዎችና ከፍተኛ ቦታዎች ላይ ይመሰረቱ የነበረው ለውጊያና ለመከላከያ አመቺ (defensive locations) ስለነበሩ እንዲሁም ጠላትን በሩቅ ለመከታተል ስለሚረዱ ነው።

🌳 Afaan Oromoo:
Magaalonni durii Itoophiyaa tulloota gubbaatti kan hundoofaniif diina irraa of ittisuuf (defensive locations) fi kallattii maraan diina to'achuuf waan gargaaraniifi.`,
    hint: 'Hilltops offered strategic military defense and natural disease protection for early rulers.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q19',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Regional Geography: Size & Position of Africa',
    questionText: '19. What is the size of Africa compared to the sizes of other continents?',
    options: [
      'It is the largest continent next to the Asian continent.',
      'It constitutes half of the total land surface of the earth.',
      'It nearly doubles the total size of North America.',
      'It is four times larger than the size of Antarctica.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
With a total surface area of approximately 30.3 million km² (constituting about 20.4% of the Earth's total land area), Africa is the second largest continent in the world, surpassed only by Asia (44.5 million km²).

🇪🇹 አማርኛ (Amharic):
አፍሪካ በ30.3 ሚሊዮን ካሬ ኪ.ሜ የቆዳ ስፋት ከእስያ ቀጥሎ በዓለማችን ላይ በስፋቷ ሁለተኛዋ ትልቅ አህጉር (largest continent next to Asia) ናት።

🌳 Afaan Oromoo:
Afirikaan bal'ina lafaa ishee kkm² miiliyoona 30.3n Eeshiyaatti aantee ardii guddittii lammaffaa addunyaa ti.`,
    hint: 'Africa is the second largest continent in the world after Asia.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'geo-2015-q20',
    subject: 'Geography',
    year: '2015 E.C.',
    topic: 'Physical Geography of Africa: Coastline and Compact Shape',
    questionText: '20. How do the relative compact shape and unbroken coastline of Africa impact its development?',
    options: [
      'Its compact shape discourages intra-continental movements.',
      'Its unbroken coastline makes the continent rich in natural harbors.',
      'Its unbroken coastline encourages external communications.',
      'Its compact shape relatively eases administration and defense.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Africa has a compact, massive shape with a smooth, unbroken coastline that lacks deep bays, inlets, and natural harbors (making ocean maritime navigation harder). Geographically, a compact shape minimizes peripheral border distances relative to internal land area, making centralized defense and territorial administration relatively easier.

🇪🇹 አማርኛ (Amharic):
የአፍሪካ አህጉር የተጣበበ (compact) ቅርፅ ያለው መሆኑ ከዳርቻዎች ወደ መሀል ያለውን ርቀት በማሳጠር ለሀገር አስተዳደር እና ለመከላከያ (eases administration and defense) አንጻራዊ ጠቀሜታ ይሰጣል።

🌳 Afaan Oromoo:
Bocni kompaaktii (compact shape) Afiriikaa giddu-galeessarraa gara daangaatti fageenya gabaabaa waan uumuuf bulchiinsaa fi ittisa waraanaaf mijataadha.`,
    hint: 'A compact shape shortens internal communication lines and simplifies defense and administration.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  }
];
