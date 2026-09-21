import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const GEOGRAPHY_2016_EC_PART4: Question[] = [
  {
    id: 'geo-2016-q76',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Qualitative Research: Focus Group Discussion (FGD)',
    questionText: '76. What is the advantage of using focus group discussion (FGD) in gathering geographic data?',
    options: [
      'It provides a platform to address individual concerns.',
      'It generates in-depth information about a topic.',
      'It allows for the collection of data on a large scale.',
      'It helps to collect confidential personal data easily.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Focus Group Discussion (FGD) brings together a small, diverse group of knowledgeable community participants, stimulating rich interactive discussions that generate deep, nuanced, in-depth qualitative insights and perspectives about geographical and socio-economic issues.

🇪🇹 አማርኛ (Amharic):
የቡድን ውይይት (FGD) በጂኦግራፊያዊ መረጃ አሰባሰብ ወቅት የሚሰጠው ዋነኛ ጠቀሜታ ስለ ተነሳው ርዕሰ-ጉዳይ ጥልቅ እና ዝርዝር መረጃዎችን ለማግኘት ማስቻሉ (generates in-depth information about a topic) ነው።

🌳 Afaan Oromoo:
Maree garee (Focus group discussion) fayyadamuun ragaa walitti qabuu keessatti faayidaan guddaan waa'ee mata-duree sanaa irratti ragaa gadi-fagoo fi bal'aa ta'e (in-depth information) argachuuf gargaaruu isaati.`,
    hint: 'FGD generates in-depth qualitative insights through structured group interaction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q77',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Geographical Research: Sampling Techniques',
    questionText: '77. Which sampling technique is most appropriate to ensure that various subgroups of a population are represented?',
    options: [
      'Stratified random sampling',
      'Simple random sampling',
      'Systematic sampling',
      'Cluster sampling'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Stratified random sampling is specifically designed for heterogeneous populations: it divides the population into distinct homogeneous subgroups (strata) based on specific characteristics (e.g., age, income, eco-zone) and draws representative random samples from each stratum.

🇪🇹 አማርኛ (Amharic):
የህዝቡ የተለያዩ ንዑሳን ክፍሎች (subgroups) በጥናቱ ውስጥ እኩል ውክልና እንዲኖራቸው ለማድረግ በጣም ተስማሚው የናሙና ዘዴ የተደለደለ የዕጣ ናሙና ዘዴ (Stratified random sampling) ይባላል።

🌳 Afaan Oromoo:
Kutaaleen hawaasaa adda addaa hundinuu qorannoo keessatti bakka bu'iinsa qixa akka qabaataniif tooftaan saamplii hundarra mijataan 'Stratified random sampling' dha.`,
    hint: 'Stratified sampling ensures all distinct sub-groups/strata are proportionally represented.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q78',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Quantitative Geography: Measures of Dispersion (Standard Deviation)',
    questionText: '78. Which of the following is true about standard deviation?',
    options: [
      'It is used to test qualitative research data.',
      'It is the average value of a given data set.',
      'It is the difference between maximum and minimum values.',
      'It shows how the data set is dispersed from the mean.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Standard deviation is a fundamental statistical measure of dispersion that quantifies the degree to which individual values in a numerical dataset are dispersed, spread out, or clustered around their arithmetic mean.

🇪🇹 አማርኛ (Amharic):
ስለ ስታንዳርድ ዲቪዬሽን (Standard deviation) ትክክለኛ የሆነው አገላለጽ፡ የተሰበሰቡ የቁጥር መረጃዎች ከአማካዩ (mean) ምን ያህል ተበታትነው እንደሚገኙ የሚያሳይ (shows how the data set is dispersed from the mean) መሆኑ ነው።

🌳 Afaan Oromoo:
'Standard deviation' ilaalchisee inni dhugaan, lakkoofsonni ragaa walitti qabamanii giddu-galeessa (mean) irraa hangam akka faffaca'anii jiran (dispersed from the mean) kan agarsiisu ta'uu isaati.`,
    hint: 'Standard deviation measures the spread or dispersion of data values around the mean.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q79',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'GIS & Spatial Data: Continuous vs Discrete Geographic Data',
    questionText: '79. Which of the following is an example of continuous geographic data?',
    options: [
      'Forest cover',
      'Urban areas',
      'Population density',
      'Country boundary'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Continuous geographic data represents phenomena that vary smoothly across geographic space without abrupt boundaries (such as population density, elevation, temperature, and air pressure). Country boundaries and urban parcels are discrete features.

🇪🇹 አማርኛ (Amharic):
ቀጣይነት ያለው ጂኦግራፊያዊ መረጃ (Continuous geographic data) ተብሎ የሚመደበው በየቦታው ቀጣይነት ባለው መልኩ የሚለዋወጠው የህዝብ ጥግግት (Population density) እንዲሁም ከፍታ እና ሙቀት ነው።

🌳 Afaan Oromoo:
Fakkeenya ragaa ji'oogiraafii itti-fufiinsa qabuu (continuous data) kan ta'u tuqamni ummataa (Population density), ol-ka'iinsa lafaa fi ho'a qilleensaa ti.`,
    hint: 'Population density, temperature, and elevation form continuous spatial surfaces.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q80',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Geographic Information Systems (GIS): Vector vs Raster Data Models',
    questionText: '80. Which GIS data model is best suited for representing discrete geographic features?',
    options: [
      'Triangular Irregular Network',
      'Raster data model',
      'Continuous data model',
      'Vector data model'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The Vector data model (using coordinate-based points, lines, and polygons) is ideal for representing discrete geographic features that possess sharp, well-defined spatial boundaries (e.g., roads, administrative borders, buildings, and land parcels).

🇪🇹 አማርኛ (Amharic):
ግልጽ እና የተወሰነ ድንበር ያላቸውን ጂኦግራፊያዊ ገጽታዎች (discrete features) በጂ.አይ.ኤስ (GIS) ለመወከል በጣም ተስማሚው የመረጃ ሞዴል የቬክተር ዳታ ሞዴል (Vector data model) ነው።

🌳 Afaan Oromoo:
Moodelli daataa GIS bocawwan daangaa ifa ta'e qaban (discrete features) bakka buusuuf hundarra mijatu Moodela Daataa Veektarii (Vector data model) dha.`,
    hint: 'The vector model represents discrete features using points, lines, and polygons.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q81',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Remote Sensing: Image Interpretation',
    questionText: '81. What is the process of extracting meaningful information from satellite imagery called?',
    options: [
      'Image resolution',
      'Image correction',
      'Image interpretation',
      'Image enhancement'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Image interpretation is the cognitive and technical process of examining remote sensing imagery to identify objects, judge their spatial patterns, and extract meaningful geographical information about Earth's features.

🇪🇹 አማርኛ (Amharic):
የሳተላይት ምስሎችን በመመርመር ጠቃሚ እና ትርጉም ያለው መልክዓ-ምድራዊ መረጃ የማውጣት ሂደት የምስል ትርጓሜ (Image interpretation) ይባላል።

🌳 Afaan Oromoo:
Fakkiiwwan saatalaayitii xiinxaluun ragaa hiika qabu fi barbaachisaa ta'e baasuun Hiika Fakkii (Image interpretation) jedhama.`,
    hint: 'Image interpretation extracts meaningful spatial data from remote sensing imagery.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q82',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Remote Sensing: Active vs Passive Remote Sensing Systems',
    questionText: '82. Which remote sensing system relies on external source of energy to capture data?',
    options: [
      'Microwave system',
      'Active system',
      'Radar system',
      'Passive system'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Passive remote sensing systems detect naturally occurring reflected sunlight or emitted thermal radiation from the Earth's surface, relying entirely on external natural energy sources (e.g., the Sun). In contrast, active systems (like RADAR or LiDAR) provide their own energy illumination.

🇪🇹 አማርኛ (Amharic):
መረጃዎችን ለመሰብሰብ በተፈጥሯዊ ውጫዊ የኃይል ምንጭ (እንደ ፀሐይ ብርሃን ነፀብራቅ) ላይ የሚደገፈው የርቀት መረጃ ቅበላ ሥርዓት ፓሲቭ ሲስተም (Passive system) ይባላል።

🌳 Afaan Oromoo:
Sirni 'Remote sensing' ragaa walitti qabuuf madda anniisaa alaa (fkn ifa aduu) irratti hirkatu Sirna Paasivii (Passive system) jedhama.`,
    hint: 'Passive sensors rely on external natural sunlight or emitted radiation to capture imagery.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q83',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Remote Sensing: Spatial Resolution',
    questionText: '83. What is the effect of having low spatial resolution in satellite imagery?',
    options: [
      'It provides fine details of the target area.',
      'It will be difficult to identify small features.',
      'It provides sharp details of ground objects.',
      'It accurately shows small objects on the ground.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In remote sensing, low spatial resolution means that each pixel represents a large ground area (e.g., 1 km × 1 km). Consequently, fine ground details blur together, making it difficult to discern and identify small physical and cultural features.

🇪🇹 አማርኛ (Amharic):
የሳተላይት ምስል ዝቅተኛ የስፔሻል ሬዞሉሽን (low spatial resolution) ሲኖረው የሚያስከትለው ተፅዕኖ በምድር ላይ ያሉ ጥቃቅን ነገሮችን ለይቶ ለማወቅ አስቸጋሪ መሆኑ (difficult to identify small features) ነው።

🌳 Afaan Oromoo:
Saatalaayitiin tokko qulqullina 'spatial resolution' gadi-aanaa yoo qabaate, bocawwan fi wantoota xixinnoo lafa irra jiran adda baasanii beekuun rakkisaa ta'a.`,
    hint: 'Coarse or low spatial resolution obscures small ground objects.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q84',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Cartography: Maps vs Globes',
    questionText: '84. Which of the following statement is true about maps?',
    options: [
      'Maps can give more detailed information than globes.',
      'Globe accurately shows a part of the earth\'s surface.',
      'Globe is easy to manipulate and carry compared to maps.',
      'A map shows the shape of the earth accurately than a globe.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Flat maps can be constructed at large scales to portray intricate, comprehensive local details (streets, topography, buildings, parcel data) that cannot possibly be displayed on a spherical globe of manageable size.

🇪🇹 አማርኛ (Amharic):
ስለ ካርታዎች ትክክለኛ የሆነው ሀቅ፡ ካርታዎች ከግሎብ ይልቅ ስለ አንድ የተወሰነ አካባቢ እጅግ ዝርዝር እና ጥልቅ መረጃ መስጠት መቻላቸው (Maps can give more detailed information than globes) ነው።

🌳 Afaan Oromoo:
Waa'ee kaartaalee ilaalchisee inni dhugaan, kaartaaleen giloobii caalaa ragaa gadi-fagoo fi bal'aa ta'e kennuu danda'u.`,
    hint: 'Large-scale flat maps can display detailed local features that cannot fit on globes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q85',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Map Reading: Marginal Information Elements',
    questionText: '85. Which one of the following is an element of marginal information of a map?',
    options: [
      'Altitude',
      'Settlement',
      'Legend',
      'Mountain'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Marginal information refers to the essential metadata framing the map margins that aid interpretation—including the Legend (key), Title, Scale, North Arrow, Projection, and Grid Index. Altitude, settlements, and mountains are interior thematic/topographic features.

🇪🇹 አማርኛ (Amharic):
ከቀረቡት አማራጮች መካከል የካርታ የዳርቻ መረጃ (Marginal information) አካል የሆነው የካርታ መፍቻ ወይም ሌጀንድ (Legend) ነው።

🌳 Afaan Oromoo:
Ragaalee qarqara kaartaa (Marginal information) keessatti kan ramadamu Ibsituu Kaartaa (Legend / Key) dha.`,
    hint: 'The legend, scale, and north arrow are key marginal information elements.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q86',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Cartography: Small-Scale vs Large-Scale Maps',
    questionText: '86. Which is true about small-scale maps?',
    options: [
      'They cover small area of the earth\'s surface.',
      'They are less generalized than large-scale maps.',
      'They show less detail of the earth\'s surface.',
      'They show physical features of an area with fine detail.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Small-scale maps (e.g., 1:1,000,000 or 1:50,000,000) cover vast geographical regions (such as continents or entire countries), requiring heavy cartographic generalization, and therefore show less spatial detail compared to large-scale maps.

🇪🇹 አማርኛ (Amharic):
አነስተኛ ስኬል ያላቸው ካርታዎች (Small-scale maps) ሰፊ የመሬት ሽፋን ስለሚይዙ በምድር ገጽ ላይ ያሉ ዝርዝር ነገሮችን በጥቂቱ ብቻ ያሳያሉ (They show less detail of the earth\'s surface)።

🌳 Afaan Oromoo:
Kaartaaleen iskeelii xiqqaa qaban (Small-scale maps) lafa bal'aa waan qabataniif bal'ina wantoota lafa irra jiranii xiqqeessanii (less detail) agarsiisu.`,
    hint: 'Small-scale maps cover vast territories but show fewer local details.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q87',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Climatic Data Analysis: Annual Temperature Range Calculation',
    questionText: `Questions 87 to 90 are based on the following climatic data table:

[CLIMATIC DATA TABLE]
Station F:
• Temp (°C): [J: 15, F: 16, M: 17, A: 18, M: 19, J: 20, J: 19, A: 18, S: 17, O: 16, N: 15, D: 14]
• Rainfall (mm): [J: 10, F: 15, M: 20, A: 45, M: 80, J: 120, J: 180, A: 170, S: 95, O: 30, N: 15, D: 10]

Station Y:
• Temp (°C): [J: 25, F: 26, M: 27, A: 28, M: 28, J: 27, J: 26, A: 26, S: 27, O: 27, N: 26, D: 25]
• Rainfall (mm): [J: 180, F: 190, M: 210, A: 230, M: 220, J: 200, J: 190, A: 185, S: 210, O: 225, N: 200, D: 190]

Station G:
• Temp (°C): [J: 18, F: 19, M: 21, A: 23, M: 25, J: 26, J: 25, A: 24, S: 23, O: 21, N: 19, D: 18]
• Rainfall (mm): [J: 110, F: 95, M: 80, A: 40, M: 15, J: 5, J: 0, A: 5, S: 15, O: 50, N: 85, D: 100]

87. What is the annual range of temperature for station F?`,
    options: [
      '8°C',
      '6°C',
      '14°C',
      '20°C'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Annual Range of Temperature = Maximum Monthly Temperature - Minimum Monthly Temperature.
For Station F:
• Maximum Temperature = 20°C (in June)
• Minimum Temperature = 14°C (in December)
Annual Range = 20°C - 14°C = 6°C.

🇪🇹 አማርኛ (Amharic):
የዓመታዊ የሙቀት ልዩነት (Annual range of temperature) = ከፍተኛው ወርሃዊ ሙቀት - ዝቅተኛው ወርሃዊ ሙቀት
ለጣቢያ F:
• ከፍተኛ ሙቀት = 20°C (ሰኔ)
• ዝቅተኛ ሙቀት = 14°C (ታህሳስ)
ልዩነት = 20°C - 14°C = 6°C።

🌳 Afaan Oromoo:
Garaagarummaa ho'a waggaa = Ho'a olaanaa - Ho'a gadi-aanaa
Teessoo F:
• Ho'a olaanaa = 20°C (Waxabajjii)
• Ho'a gadi-aanaa = 14°C (Muddee)
Garaagarummaa = 20°C - 14°C = 6°C.`,
    hint: 'Subtract the minimum monthly temperature (14°C) from the maximum monthly temperature (20°C).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q88',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Climatology: Identification of Mediterranean Climate',
    questionText: '88. Which climatic region is represented by station G?',
    options: [
      'Warm temperate',
      'Equatorial',
      'Mediterranean',
      'Tropical desert'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Station G exhibits warm/hot, dry summers (June = 5 mm, July = 0 mm, August = 5 mm) and mild, wet winters (November = 85 mm, December = 100 mm, January = 110 mm). This distinctive seasonal regime of dry summer and wet winter is the textbook diagnostic signature of the Mediterranean climate (Cs).

🇪🇹 አማርኛ (Amharic):
ጣቢያ G በበጋ ወራት (ሰኔ፣ ሐምሌ፣ ነሐሴ) እጅግ ደረቅ እና አነስተኛ ዝናብ (5mm, 0mm, 5mm) እንዲሁም በክረምት ወራት ከፍተኛ ዝናብ (85mm, 100mm, 110mm) የሚያገኝ በመሆኑ ሜዲትራኒያናዊ የአየር ንብረት (Mediterranean climate) ቀጠናን ይወክላል።

🌳 Afaan Oromoo:
Teessoon G yeroo gannaa bokkaa kan hin qabne/gogaa (Waxabajjii, Adooleessa, Hagayya = 5mm, 0mm, 5mm) fi yeroo bonaa bokkaa olaanaa kan qabu waan ta'eef Haala Qilleensa Meditiraaniyaanii (Mediterranean) agarsiisa.`,
    hint: 'Dry hot summers and mild rainy winters define the Mediterranean climate.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q89',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Biogeography: Tropical Rainforest Vegetation Association',
    questionText: '89. Which vegetation type is dominated by station Y?',
    options: [
      'Coniferous forest',
      'Deciduous forest',
      'Tropical rainforest',
      'Savanna grassland'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Station Y receives exceptionally heavy rainfall in all 12 months of the year (>180 mm every month, totaling 2,430 mm annually) alongside uniformly warm temperatures (25–28°C). This climatic profile is characteristic of the Tropical Rainforest biome.

🇪🇹 አማርኛ (Amharic):
ጣቢያ Y በሁሉም 12 ወራት ውስጥ እጅግ ከፍተኛ ዝናብ (>180 mm በየወሩ፣ በድምሩ 2,430 mm) እና ወጥ የሆነ ከፍተኛ ሙቀት (25–28°C) ስላለው ሞቃታማ የዝናብ ደን (Tropical rainforest) ይገኝበታል።

🌳 Afaan Oromoo:
Teessoon Y waggaa guutuu ji'oota 12nuu bokkaa olaanaa (ji'atti 180mm ol) fi ho'a madaalawaa waan qabuuf bosona roobaa tiroopikaalaa (Tropical rainforest) qabaata.`,
    hint: 'Year-round high precipitation and warmth foster tropical rainforest vegetation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q90',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Climatic Data Analysis: Total Annual Rainfall Calculation',
    questionText: '90. What is the total annual rainfall for station F?',
    options: [
      '650mm',
      '790mm',
      '800mm',
      '700mm'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Total Annual Rainfall = Sum of rainfall for all 12 months.
For Station F:
10 + 15 + 20 + 45 + 80 + 120 + 180 + 170 + 95 + 30 + 15 + 10 = 790 mm.

🇪🇹 አማርኛ (Amharic):
አጠቃላይ የዓመት ዝናብ = የ12ቱም ወራት የዝናብ ድምር
ለጣቢያ F:
10 + 15 + 20 + 45 + 80 + 120 + 180 + 170 + 95 + 30 + 15 + 10 = 790 ሚ.ሜ ነው።

🌳 Afaan Oromoo:
Ida'ama bokkaa waggaa = Bokkaa ji'oota 12 walitti ida'uu
Teessoo F:
10 + 15 + 20 + 45 + 80 + 120 + 180 + 170 + 95 + 30 + 15 + 10 = 790 mm.`,
    hint: 'Sum up the rainfall values of all twelve months for station F.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q91',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Demographic Measures: Crude Population Density',
    questionText: `Questions 91 to 94 are based on the following demographic data table:

[DEMOGRAPHIC DATA TABLE]
• Country R: Area = 500,000 km² | Total Pop = 50,000,000 | Under 15 = 20,000,000 | 15-64 = 28,000,000 | 65+ = 2,000,000 | Cultivated Area = 100,000 km²
• Country Z: Area = 1,000,000 km² | Total Pop = 80,000,000 | Under 15 = 30,000,000 | 15-64 = 46,000,000 | 65+ = 4,000,000 | Cultivated Area = 200,000 km²
• Country P: Area = 200,000 km² | Total Pop = 10,000,000 | Under 15 = 3,000,000 | 15-64 = 6,000,000 | 65+ = 1,000,000 | Cultivated Area = 50,000 km²

91. What is the crude population density of country R?`,
    options: [
      '100 persons/km²',
      '250 persons/km²',
      '500 persons/km²',
      '50 persons/km²'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Crude Population Density = Total Population / Total Land Area.
For Country R:
Crude Density = 50,000,000 persons / 500,000 km² = 100 persons/km².

🇪🇹 አማርኛ (Amharic):
ጠቅላላ የህዝብ ጥግግት (Crude population density) = አጠቃላይ የህዝብ ብዛት ÷ ጠቅላላ የመሬት ስፋት
ለሀገር R:
ጥግግት = 50,000,000 ሰዎች ÷ 500,000 ኪ.ሜ² = 100 ሰዎች በኪ.ሜ² (100 persons/km²).

🌳 Afaan Oromoo:
Tuqama ummataa waliigalaa (Crude density) = Baay'ina ummataa ÷ Bal'ina lafaa
Biyya R:
50,000,000 ÷ 500,000 km² = namoota 100 tokkoon tokkoo isquweer kiilomeetiraatti (100 persons/km²).`,
    hint: 'Divide total population (50,000,000) by total area (500,000 km²).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q92',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Demographic Measures: Physiological Population Density',
    questionText: '92. What is the physiological population density of country Z?',
    options: [
      '400 persons/km²',
      '80 persons/km²',
      '200 persons/km²',
      '500 persons/km²'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Physiological Population Density = Total Population / Cultivated (Arable) Land Area.
For Country Z:
Physiological Density = 80,000,000 persons / 200,000 km² = 400 persons/km².

🇪🇹 አማርኛ (Amharic):
ፊዚዮሎጂካል የህዝብ ጥግግት (Physiological density) = አጠቃላይ የህዝብ ብዛት ÷ የታረሰ/የሚታረስ የመሬት ስፋት
ለሀገር Z:
ጥግግት = 80,000,000 ÷ 200,000 ኪ.ሜ² = 400 ሰዎች በኪ.ሜ² (400 persons/km²).

🌳 Afaan Oromoo:
Tuqama ummataa fi lafa qonnaa (Physiological density) = Baay'ina ummataa ÷ Bal'ina lafa qotamu
Biyya Z:
80,000,000 ÷ 200,000 km² = namoota 400 tokkoon tokkoo km² lafa qotamuutti.`,
    hint: 'Divide total population (80,000,000) by cultivated arable area (200,000 km²).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q93',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Demographic Measures: Age Dependency Ratio Calculation',
    questionText: '93. What is the dependency ratio of country P?',
    options: [
      '60%',
      '50%',
      '66.7%',
      '40%'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Age Dependency Ratio = [(Population < 15 + Population 65+) / Population 15–64] × 100.
For Country P:
• Dependents = 3,000,000 (under 15) + 1,000,000 (65+) = 4,000,000
• Working Age (15–64) = 6,000,000
Dependency Ratio = (4,000,000 / 6,000,000) × 100 = 66.67% ≈ 66.7%.

🇪🇹 አማርኛ (Amharic):
የጥገኝነት ጥምርታ (Dependency ratio) = [(ከ15 ዓመት በታች + ከ65 ዓመት በላይ) ÷ (ከ15-64 ዕድሜ ክልል)] × 100
ለሀገር P:
ጥገኛ ህዝብ = 3,000,000 + 1,000,000 = 4,000,000
የአምራች ዕድሜ = 6,000,000
ጥምርታ = (4,000,000 ÷ 6,000,000) × 100 = 66.7%።

🌳 Afaan Oromoo:
Reeshiyoo hirkattummaa (Dependency ratio) = [(Umrii <15 + Umrii 65+) ÷ (Umrii 15-64)] × 100
Biyya P:
(4,000,000 ÷ 6,000,000) × 100 = 66.7%.`,
    hint: 'Add young (<15) and elderly (65+) populations, divide by working-age population (15–64), and multiply by 100.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q94',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Demographic Analysis: Comparison of Densities and Ratios',
    questionText: '94. Which statement is true based on the demographic data?',
    options: [
      'Country Z has the highest crude population density.',
      'Country R has the highest physiological density.',
      'Country P has the lowest dependency ratio.',
      'Country R has the lowest crude density.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Let us calculate the physiological densities (Total Pop / Cultivated Area):
• Country R: 50,000,000 / 100,000 km² = 500 persons/km²
• Country Z: 80,000,000 / 200,000 km² = 400 persons/km²
• Country P: 10,000,000 / 50,000 km² = 200 persons/km²
Therefore, Country R has the highest physiological density (500 persons/km²).

🇪🇹 አማርኛ (Amharic):
የሀገራቱን ፊዚዮሎጂካል ጥግግት ስናሰላ፡
• ሀገር R: 50,000,000 ÷ 100,000 = 500 ሰዎች በኪ.ሜ²
• ሀገር Z: 80,000,000 ÷ 200,000 = 400 ሰዎች በኪ.ሜ²
• ሀገር P: 10,000,000 ÷ 50,000 = 200 ሰዎች በኪ.ሜ²
ስለዚህ ሀገር R ከፍተኛ ፊዚዮሎጂካል ጥግግት አላት (Country R has the highest physiological density)።

🌳 Afaan Oromoo:
Tuqama lafa qonnaa (physiological density) yeroo shallagamu:
Biyyi R (500 persons/km²) biyya Z (400) fi P (200) caalaa tuqama lafa qonnaa isa olaanaa qabdi.`,
    hint: 'Compare physiological densities: Country R (500/km²) > Z (400/km²) > P (200/km²).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q95',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Topographic Map Reading: Contour Interval',
    questionText: `Questions 95 to 100 are based on the attached topographic contour map:

[TOPOGRAPHIC CONTOUR MAP SPECIFICATIONS]
• Map Scale: 1:50,000
• Labeled contour lines: 1400m, 1500m, 1600m, 1700m, 1800m, 1900m, 2000m, 2100m
• Point A is located on the 2000m contour line
• Point B is located on the 1600m contour line
• Point X is in the valley floor near 1500m; Point Y is at the ridge crest (2100m)

95. What is the contour interval of the map?`,
    options: [
      '50 meters',
      '100 meters',
      '150 meters',
      '200 meters'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The Contour Interval (CI) is the constant vertical elevation difference between two consecutive contour lines. On this map, the lines progress as 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100 m.
Difference = 1500 - 1400 = 100 meters.

🇪🇹 አማርኛ (Amharic):
የኮንቱር ልዩነት (Contour interval) በተከታታይ ኮንቱር መስመሮች መካከል ያለው የቁመት ልዩነት ሲሆን፤ በካርታው ላይ መስመሮቹ 1400፣ 1500፣ 1600፣ 1700 ሜትር በሚል በ100 ሜትር ልዩነት (100 meters) የተሰመሩ ናቸው።

🌳 Afaan Oromoo:
Garaagarummaan sarara kantuuraa (Contour interval) sararoota kantuuraa walitti aanan gidduu meetira 100 (1500m - 1400m = 100m) dha.`,
    hint: 'Subtract two adjacent contour line values (e.g., 1600 - 1500 = 100 m).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q96',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Topographic Map Reading: Spot Elevation Reading',
    questionText: '96. What is the elevation of point B?',
    options: [
      '1500 meters',
      '1600 meters',
      '1700 meters',
      '1800 meters'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Point B is positioned directly along the index contour line marked with an elevation value of 1,600 meters.

🇪🇹 አማርኛ (Amharic):
በኮንቱር ካርታው ላይ ነጥብ B በቀጥታ ያረፈው 1600 ሜትር ተብሎ በተሰየመው የኮንቱር መስመር ላይ ስለሆነ ከፍታው 1600 ሜትር (1600 meters) ነው።

🌳 Afaan Oromoo:
Kaartaa kantuuraa irratti qabxiin B sarara kantuuraa meetira 1600 jedhu irratti waan qubateef ol-ka'iinsi isaa meetira 1600 dha.`,
    hint: 'Read the contour line value passing directly through point B (1600 m).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q97',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Map Skills: Ground Distance Calculation from RF Scale',
    questionText: '97. If the distance between point A and point B on the map is 6 cm, what is the actual ground distance?',
    options: [
      '3 km',
      '6 km',
      '12 km',
      '1.5 km'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Map Scale = 1:50,000 (meaning 1 cm on the map represents 50,000 cm on the ground = 500 m = 0.5 km).
Given Map Distance = 6 cm:
Actual Ground Distance = 6 cm × 0.5 km/cm = 3.0 km.

🇪🇹 አማርኛ (Amharic):
የካርታው ስኬል = 1:50,000 (ማለትም 1 ሳ.ሜ በካርታው ላይ በመሬት ላይ 500 ሜትር ወይም 0.5 ኪ.ሜ ነው)።
በካርታው ላይ ያለው ርቀት = 6 ሳ.ሜ
ትክክለኛው የመሬት ላይ ርቀት = 6 × 0.5 ኪ.ሜ = 3 ኪ.ሜ (3 km)።

🌳 Afaan Oromoo:
Iskeelii kaartaa = 1:50,000 (1 cm kaartaa irraa = 0.5 km lafa irraa).
Fageenya kaartaa = 6 cm
Fageenya qabatamaa lafa irraa = 6 × 0.5 km = 3 km.`,
    hint: 'At 1:50,000, 1 cm = 0.5 km. Multiply 6 cm by 0.5 km.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q98',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Cartographic Skills: Vertical Exaggeration Calculation',
    questionText: '98. What is the vertical exaggeration of a cross-section drawn with a vertical scale of 1:10,000 from this map?',
    options: [
      '2 times',
      '5 times',
      '10 times',
      '2.5 times'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Vertical Exaggeration (VE) = Vertical Scale (VS) / Horizontal Scale (HS)
VE = (1 / 10,000) / (1 / 50,000) = 50,000 / 10,000 = 5 times.

🇪🇹 አማርኛ (Amharic):
የቨርቲካል ማጉላት (Vertical Exaggeration) = የሆሪዞንታል ስኬል አካፋይ ÷ የቨርቲካል ስኬል አካፋይ
VE = 50,000 ÷ 10,000 = 5 እጥፍ (5 times)።

🌳 Afaan Oromoo:
Guddisa ol-dhaabataa (Vertical Exaggeration) = Iskeelii dalgee ÷ Iskeelii ol-dhaabataa
VE = 50,000 ÷ 10,000 = dachaa 5 (5 times).`,
    hint: 'Divide the horizontal scale denominator (50,000) by the vertical scale denominator (10,000).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q99',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Topographic Interpretation: Contour Spacing and Slopes',
    questionText: '99. What type of landform is represented where contour lines are very close to each other near point Y?',
    options: [
      'Gentle slope',
      'Plain',
      'Steep slope / Cliff',
      'Valley floor'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
When contour lines are packed very closely together on a topographic map, it indicates a rapid change in elevation over a short horizontal distance, representing a steep slope, escarpment, or cliff face.

🇪🇹 አማርኛ (Amharic):
በኮንቱር ካርታ ላይ የኮንቱር መስመሮች እጅግ ተጠጋግተው (very close to each other) ሲሳሉ የሚያሳዩት ዳገታማ/ገደላማ መሬት (Steep slope / Cliff) መኖሩን ነው።

🌳 Afaan Oromoo:
Sararoonni kantuuraa yeroo baay'ee walitti dhihaatanii fi wal-tuqanii argaman lafa tulluu/kalloo fi qilee qaxxaamuraa (Steep slope / Cliff) agarsiisu.`,
    hint: 'Closely spaced contour lines indicate a steep slope or cliff.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'geo-2016-q100',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Topographic Map Reading: River Flow Direction from Contours',
    questionText: '100. In which general direction is the main river flowing on the map?',
    options: [
      'From Southeast to Northwest',
      'From Northwest to Southeast',
      'From Northeast to Southwest',
      'From Southwest to Northeast'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Rivers always flow downhill from higher elevation to lower elevation. On this topographic map, the river channel originates in the southeastern highlands (elevation > 1,700m) and flows toward the northwestern lowland depression (elevation < 1,400m). Additionally, V-shaped contours pointing upstream confirm flow from Southeast to Northwest.

🇪🇹 አማርኛ (Amharic):
ወንዞች ሁልጊዜም ከከፍተኛ ቦታ ወደ ዝቅተኛ ቦታ ይፈሳሉ። በካርታው ላይ ወንዙ የሚመነጨው በደቡብ-ምስራቅ ከሚገኘው ደጋማ ቦታ (ከ1700ሜ በላይ) ሲሆን የሚፈሰው ወደ ሰሜን-ምዕራብ ቆላማ ስምጥ (ወደ 1400ሜ) ስለሆነ የወንዙ አቅጣጫ ከደቡብ-ምስራቅ ወደ ሰሜን-ምዕራብ (From Southeast to Northwest) ነው።

🌳 Afaan Oromoo:
Laggeen yeroo hunda lafa ol-ka'aa irraa gara lafa gadi-aanaatti yaa'u. Kaartaa kana irratti lagichi baha-kibbaa (olka'iinsa >1700m) irraa ka'ee gara dhiha-kaabaatti (gadi-bu'iinsa <1400m) yaa'a.`,
    hint: 'Rivers flow from high elevation to low elevation (from SE high ground to NW low ground).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
