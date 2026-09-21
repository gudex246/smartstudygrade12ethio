import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2017_EC_PART3: Question[] = [
  {
    id: 'bio-2017-q51',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Biotechnology: Purpose of Transgenic Organisms (GMOs)',
    questionText: '51. What is the primary purpose of genetic engineering in creating transgenic organisms (Genetically Modified Organisms)?',
    options: [
      'To generate virulent pathogenic microorganisms that fight against non-pathogenic ones',
      'To produce organisms that clone human cognitive behaviors in every single aspect',
      'To promote the expression of desired foreign genes that improve crop yield, pest resistance, and nutritional quality (e.g., Golden Rice, Bt crops)',
      'To produce novel organisms that disrupt reproductive viability across all related species'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Transgenic organisms are created by inserting specific foreign recombinant genes (transgenes) into host genomes to express beneficial traits such as enhanced micronutrient content (e.g., pro-vitamin A in Golden Rice), pest resistance (Bt toxin), drought tolerance, or industrial enzyme synthesis.

🇪🇹 አማርኛ (Amharic):
ትራንስጄኒክ ፍጥረታትን (Transgenic organisms / GMOs) የመፍጠር ዋነኛ አላማ፡ ተፈላጊ የሆኑ ጠቃሚ ጂኖችን በማስገባት የተመጣጠነ የምግብ ጥራትን፣ የበሽታ መቋቋም አቅምን እና ከፍተኛ ምርትን ለማግኘት ነው።

🌳 Afaan Oromoo:
Kaayyoon \'Transgenic organisms\' (GMO) uumuu inni guddaan jiinota barbaadaman dabaluun oomisha midhaanii dabaluu, dhibee ittisuu fi qabiyyee soorataa fooyyessuudha.`,
    hint: 'Transgenic organisms express desired genes to improve nutrition, yields, and pest resistance.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q52',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Applied Biology: Forensic Science and Biological Evidence',
    questionText: '52. What is the indispensable role of biology in modern forensic criminal investigation?',
    options: [
      'To synthesize artificial flavor compounds in commercial foods',
      'To examine and profile biological evidence (DNA profiling from blood, semen, saliva, epithelial cells, and hair follicles) to identify suspects and victims',
      'To sense soil herbicide traces using immunochemical probes',
      'To determine industrial antibiotic production from mold fungi'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Forensic biology utilizes STR DNA profiling, serological blood typing, and microscopic forensic analysis of biological trace materials (blood, saliva, semen, skin cells, hair roots) recovered at crime scenes to establish positive identity matches with suspects.

🇪🇹 አማርኛ (Amharic):
በፎረንሲክ የወንጀል ምርመራ ውስጥ የባዮሎጂ ሚና፡ ከደም፣ ምራቅ፣ የሰውነት ፈሳሽ እና ፀጉር ላይ የዲ ኤን ኤ (DNA) ምርመራ በማድረግ ወንጀለኞችንና ተጎጂዎችን ለይቶ ማወቅ ነው።

🌳 Afaan Oromoo:
Qorannoo yakkaa (Forensic science) keessatti faayidaan baayoloojii qorannoo dhiigaa, dhangala\'aa qaamaa fi rifeensa irraa DNA qorachuun yakkamtoota adda baasuudha.`,
    hint: 'Forensic biology analyzes DNA from blood, saliva, and hair to identify individuals in criminal cases.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q53',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Biotechnology: Biological Washing Powders and Energy Conservation',
    questionText: '53. How do biological washing powders (detergents containing enzymes) effectively save electrical energy in households and commercial laundries?',
    options: [
      'They utilize lipase enzyme in isolation without any other formulation to dissolve mineral rust stains.',
      'They contain thermophilic/mesophilic enzymes (proteases, lipases, amylases) that efficiently digest organic stains at lower water temperatures (30°C–40°C) without requiring boiling water.',
      'They dissolve heavy metal ores from fabrics using concentrated acidic solutions.',
      'They replace all surfactants completely with inactive protease powders.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Biological detergents incorporate immobilized enzymes (proteases for protein stains like blood/egg, lipases for grease/oils, and amylases for starches) which catalyze hydrolytic stain breakdown rapidly at moderate wash temperatures ($30^\\circ\\text{C}-40^\\circ\\text{C}$), eliminating the need to boil wash water and saving energy.

🇪🇹 አማርኛ (Amharic):
ባዮሎጂካዊ የልብስ ማጠቢያ ዱቄቶች (Biological washing powders) ኢንዛይሞችን ስለሚይዙ ውሃን በከፍተኛ ሁኔታ ሳያፈሉ በዝቅተኛ የሙቀት መጠን (low temperature) ልብሶችን በፍጥነት በማፅዳት የኤሌክትሪክ ሃይልን ይቆጥባሉ።

🌳 Afaan Oromoo:
Saamuunaan \'biological washing powder\' inzaayimoota qabaachuun bishaan osoo hin danfisin ho\'a gadi-aanaa irratti xurii qulqulleessuun anniisaa elektirikii qusata.`,
    hint: 'Biological detergents use enzymes to clean effectively at lower temperatures without boiling.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q54',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Applied Microbiology: Biological Warfare Definition',
    questionText: '54. What is the military and international definition of Biological Warfare (Bioterrorism)?',
    options: [
      'The selective breeding of agricultural crop plants using molecular marker-assisted selection',
      'The use of nuclear transfer cloning techniques to duplicate domestic livestock',
      'The controlled application of predatory ladybugs to eradicate farm aphid pests',
      'The deliberate, hostile use of pathogenic biological agents (viruses, bacteria, fungi, or biological toxins like Anthrax/Botulinum) to sicken or kill humans, livestock, or agricultural crops'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Biological warfare involves the weaponized dissemination of harmful pathogens (e.g., *Bacillus anthracis*, Smallpox virus, Ebola, Botulinum neurotoxin) with malicious intent to cause mass mortality, incapacitation, or agricultural collapse in civilian/military populations.

🇪🇹 አማርኛ (Amharic):
ባዮሎጂካዊ ጦርነት (Biological warfare) ማለት በሰዎች፣ በእንስሳት ወይም በእፅዋት ላይ ሞትና ጉዳት ለማድረስ ሆን ተብሎ ገዳይ የሆኑ ቫይረሶችን፣ ባክቴሪያዎችን ወይም መርዞችን (Toxins) እንደ ጦር መሳሪያ መጠቀም ነው።

🌳 Afaan Oromoo:
Waraana baayoloojikaalaa (Biological warfare) jechuun namoota, beellada yookiin midhaan miidhuuf jecha baakteeriyaa, vaayirasii yookiin summii akka meeshaa waraanaatti fayyadamuudha.`,
    hint: 'Biological warfare is the deliberate use of infectious agents or toxins as weapons.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q55',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Microbiology: General Structural and Nutritional Features of Bacteria',
    questionText: '55. Which of the following statements correctly describes the universal biological features of bacteria (Domain Eubacteria)?',
    options: [
      'They possess a true membrane-bound nucleus and linear chromosomes wrapped in histones.',
      'They are microscopic prokaryotic unicellular organisms featuring a peptidoglycan cell wall, 70S ribosomes, circular nucleoid DNA, and diverse nutritional modes (autotrophic and heterotrophic).',
      'They contain double-membrane mitochondria and specialized eukaryotic chloroplasts.',
      'They possess membrane-bound Golgi complexes and undergo standard mitotic spindle division.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Bacteria are prokaryotes lacking membrane-bound organelles and a true nucleus. They possess a rigid peptidoglycan cell wall, circular plasmid/genomic DNA, 70S ribosomes, and exhibit diverse nutritional modes (photoautotrophs, chemoautotrophs, saprophytes, parasites).

🇪🇹 አማርኛ (Amharic):
ባክቴሪያዎች (Bacteria) ኒውክሊየስ የሌላቸው ፕሮካሪዮት ህዋሳት ሲሆኑ፣ ጠንካራ የፔፕቲዶግላይካን ህዋስ ግድግዳ (cell wall) እና የተለያዩ የምግብ አሰራር ዘዴዎችን (autotrophic እና heterotrophic) ይከተላሉ።

🌳 Afaan Oromoo:
Baakteeriyaan lubbiyyoo tokkee (unicellular prokaryotes) ta\'ee dallaa lubbiyyoo (peptidoglycan cell wall) fi mala soorata adda addaa qabaachuun beekama.`,
    hint: 'Bacteria are prokaryotes with peptidoglycan walls and diverse nutritional modes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q56',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Microbiology: Extremophile Archaea (Hyperthermophiles)',
    questionText: '56. Which ecological group of Archaea thrives in extreme environments such as hydrothermal deep-sea volcanic vents, hot springs, and boiling geysers at temperatures above 80°C to 110°C?',
    options: [
      'Hyperthermophiles (Extreme thermophiles)',
      'Acidophiles',
      'Halophiles',
      'Psychrophiles'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Hyperthermophiles (e.g., *Thermus aquaticus*, *Methanopyrus*) flourish in boiling volcanic hydrothermal vents ($>80^\circ\text{C}$).
• Halophiles thrive in hyper-saline salt lakes.
• Psychrophiles thrive in sub-zero freezing Arctic environments.
• Acidophiles thrive in extremely low pH ($<2.0$).

🇪🇹 አማርኛ (Amharic):
በእሳተ-ጎመራ ፍልውሃዎች እና እጅግ ከፍተኛ በሆነ የሙቀት መጠን (ከ 80°C በላይ) ውስጥ በህይወት መኖር የሚችሉት የአርኪዮባክቴሪያ ዝርያዎች ሃይፐርተርሞፋይልስ (Hyperthermophiles) ይባላሉ።

🌳 Afaan Oromoo:
Garee Arkiyaa (Archaea) keessaa kanneen bakka ho\'a daraan olaanaa (hydrothermal vents/volcanic) keessa jiraatan \'Hyperthermophiles\' jedhamu.`,
    hint: 'Hyperthermophiles thrive in boiling hydrothermal volcanic vents and extreme heat.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q57',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Microbiology & Pathology: Fungal Infections (Candidiasis)',
    questionText: '57. Which opportunistic fungal disease, caused by dimorphic yeast overgrowth, can be transmitted sexually or via disruption of natural mucosal microflora?',
    options: [
      'Candidiasis (Yeast infection caused by *Candida albicans*)',
      'Aspergillosis',
      'Tinea capitis (Scalp ringworm)',
      'Dermatophytosis'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
*Candida albicans* is an opportunistic yeast that colonizes mucosal membranes. Vaginal or genital candidiasis (thrush) causes pruritus and discharge, and can be transmitted through sexual contact or triggered by antibiotic-induced microflora disruption.

🇪🇹 አማርኛ (Amharic):
በግብረ-ስጋ ግንኙነት ሊተላለፍ የሚችለው እና በፈንገስ አማካኝነት በብልት አካባቢ የሚያሳክክ ፈሳሽ የሚያመጣው የፈንገስ በሽታ ካንዲዲያስስ (Candidiasis / Candida albicans) ይባላል።

🌳 Afaan Oromoo:
Dhukkuboota fangasii keessaa kan wal-qunnamtii saalaatiin daddarbuu danda\'u \'Candidiasis\' (Candida albicans) jedhama.`,
    hint: 'Candidiasis (Candida albicans) is an opportunistic genital yeast infection.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q58',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Microbiology: Nutritional Diversity in Protozoa (Protista)',
    questionText: '58. Consider the following nutritional strategies exhibited across diverse living organisms:\nI. Absorbing dissolved organic nutrients from the liquid medium (Saprozoic/Osmotrophic)\nII. Manufacturing organic sugars by photosynthesis using chloroplasts (Photoautotrophic - e.g., *Euglena*)\nIII. Ingesting and phagocytosing other living cells/plants/bacteria (Holozoic/Heterotrophic - e.g., *Amoeba*, *Paramecium*)\n\nWhich of these feeding modes are utilized across the phylum Protozoa?',
    options: [
      'I only',
      'I and II only',
      'II and III only',
      'I, II, and III (All of them)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Protozoans exhibit remarkable nutritional flexibility:
• Holozoic (Phagotrophic): Ingesting food particles (e.g., *Amoeba* phagocytosis, *Paramecium* cytostome).
• Saprozoic (Osmotrophic): Absorbing dissolved solutes through pinocytosis.
• Photoautotrophic / Mixotrophic: *Euglena* carries chloroplasts for photosynthesis in light, but shifts to heterotrophy in darkness.

🇪🇹 አማርኛ (Amharic):
ፕሮቶዞዋዎች (Protozoa) የተለያየ የአመጋገብ ዘዴ ያላቸው ሲሆን፡ በኦስሞሲስ ንጥረ-ነገር በመምጠጥ (I)፣ በፎቶሲንተሲስ ምግብ በማዘጋጀት እንደ ዩግሌና (II) እና ሌሎች ህዋሳትን በመዋጥ (III) ይመገባሉ። ስለዚህ መልሱ I, II እና III ነው።

🌳 Afaan Oromoo:
Pirootozoowaan (Protozoa) mala soorata sadanuu ni fayyadamu: Xuuxuudhaan (I), Footosinteesisii fayyadamuun (II - Euglena), fi lubbu-qabeeyyii biroo liqimsuun (III - Amoeba).`,
    hint: 'Protozoans can be holozoic, saprozoic, and photoautotrophic (mixotrophic).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q59',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Infectious Diseases: Poliovirus Symptoms and Fecal-Oral Route',
    questionText: '59. Which of the following infectious diseases is correctly matched with its clinical manifestation and primary mode of transmission?',
    options: [
      'Chickenpox - Runny and stuffy nasal rhinitis - Airborne dust vector',
      'Measles - Hydrophobia and flaccid muscle paralysis - Direct carnivore bite',
      'Polio (Poliomyelitis) - Often subclinical or asymptomatic in initial phases, but can cause acute flaccid paralysis - Transmitted primarily via the fecal-oral route through contaminated water and food',
      'Rabies - Bilateral swelling of parotid salivary glands - Inhaled droplet nuclei'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Poliovirus is an enterovirus transmitted via the fecal-oral route through contaminated drinking water or food. Over 90% of infections are asymptomatic or cause mild flu-like symptoms, but in ~1% of cases, the virus enters the motor neurons of the spinal cord, destroying anterior horn cells and leading to acute flaccid paralysis.

🇪🇹 አማርኛ (Amharic):
ፖሊዮ (Poliomyelitis) በዋናነት በቆሸሸ ውሃ እና ምግብ በሰገራ-አፍ መንገድ (Fecal-oral route) የሚተላለፍ ሲሆን፣ መጀመሪያ ላይ ምልክት ላያሳይ ወይም አከርካሪን በማጥቃት ሽባነትን ሊያስከትል ይችላል።

🌳 Afaan Oromoo:
Dhibeen \'Polio\' kan daddarbu karaa qulqullina dhabuu nyaataa fi bishaanii (fecal-oral route) yoo ta\'u, yeroo baay\'ee mallattoo malee eegalee laamsha\'uu (paralysis) fida.`,
    hint: 'Poliovirus spreads via the fecal-oral route and can cause flaccid paralysis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q60',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'History of Microbiology: Robert Koch\'s Postulates',
    questionText: '60. In establishing the Germ Theory of Disease, Robert Koch isolated anthrax bacilli (*Bacillus anthracis*) from diseased cattle, cultivated a pure culture, injected it into healthy mice to reproduce the exact anthrax symptoms, and re-isolated the bacterium. Which step corresponds to his classic Second Postulate?',
    options: [
      'The microorganism must be found in abundance in all organisms suffering from the disease.',
      'The suspected pathogen must be isolated from the diseased host and grown in pure culture in the laboratory.',
      'The cultured microorganism should cause the specific disease when inoculated into a healthy, susceptible host animal.',
      'The pathogen must be re-isolated from the experimentally infected host.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Koch's Four Postulates:
1. The specific microorganism must be present in every case of the disease.
2. The microorganism must be isolated from the diseased host and grown in pure laboratory culture.
3. Inoculation of the pure culture into a susceptible host must reproduce the specific disease.
4. The same microorganism must be recovered and re-isolated from the experimentally inoculated host.

🇪🇹 አማርኛ (Amharic):
የሮበርት ኮክ (Robert Koch) ሁለተኛው መርህ (Second Postulate)፡ በሽታ አምጪው ተህዋስ ከታመመው እንስሳ ተለይቶ ወጥቶ በቤተ-ሙከራ ውስጥ በንፁህ ሁኔታ መራባት (pure culture) አለበት የሚለው ነው።

🌳 Afaan Oromoo:
Dhugaa bu\'uuraa lammaffaan (Second Postulate) \'Robert Koch\': Miikroobii dhibee fide sana qaama dhukkubsataa keessaa baasanii laabraatoorii keessatti addatti horsiisuu (\'pure culture\') dha.`,
    hint: 'Koch\'s Second Postulate states the pathogen must be isolated and grown in pure culture.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q61',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Parasitology: African Trypanosomiasis (Sleeping Sickness)',
    questionText: '61. African Sleeping Sickness (Human African Trypanosomiasis), caused by flagellated protozoan *Trypanosoma brucei*, is biologically transmitted through the bite of:',
    options: [
      'Tsetse flies (*Glossina* species)',
      'Direct sexual intercourse',
      'Eating poorly cooked contaminated pork',
      'Airborne respiratory droplet spray'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
African Sleeping Sickness is transmitted by the bite of an infected tsetse fly (*Glossina* spp.), which injects metacyclic trypomastigotes into the mammalian bloodstream during a blood meal. The parasite crosses the blood-brain barrier, disrupting the sleep-wake cycle.

🇪🇹 አማርኛ (Amharic):
የእንቅልፍ በሽታ (Sleeping sickness / Trypanosomiasis) በዋናነት የሚተላለፈው በፀሴ ዝንብ (Tsetse fly) ንክሻ አማካኝነት ነው።

🌳 Afaan Oromoo:
Dhukkubni \'Sleeping sickness\' kan daddarbu dhangala\'aa bookee tsee-tsee (\'Tsetse fly\') nama hidduudhaani.`,
    hint: 'Trypanosoma protozoa causing sleeping sickness are transmitted by tsetse flies.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q62',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Microbiology: Ecological and Industrial Importance of Microbes',
    questionText: '62. Evaluating the overall ecological, physiological, and industrial impact of microorganisms on the biosphere, which conclusion is most accurate?',
    options: [
      'Microorganisms provide immense, indispensable benefits (photosynthetic oxygenation, nitrogen fixation, decomposition, and human gut microbiome) essential for all life on Earth, vastly outweighing their pathogenic role.',
      'Microorganisms provide solely great disadvantages and zero environmental advantages.',
      'Microorganisms have negligible impact on global geochemical nutrient cycles.',
      'Microorganisms have negligible application in biotechnology and human medicine.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
While a small minority of microbes cause disease (<1%), the vast majority of microorganisms perform critical biosphere-sustaining roles: global nitrogen and carbon fixation, organic decomposition, oxygen generation (cyanobacteria), antibiotic synthesis, and symbiotic digestive functions.

🇪🇹 አማርኛ (Amharic):
በአጠቃላይ ረቂቅ ተህዋሲያን (Microorganisms) በምድር ላይ ህይወት እንዲቀጥል የሚያስችሉ እጅግ በርካታ ጥቅሞች (የናይትሮጅን ቅመራ፣ ንጥረ-ነገሮችን ማዳቀልና ማበስበስ፣ ፀረ-ተህዋስያን ማምረት) አሏቸው።

🌳 Afaan Oromoo:
Miikroobonni faayidaa baay\'ee guddaa jireenya lafaatiif murteessaa ta\'e (soorata bilcheessuu, naayitiroojiinii qabsiisuu fi qoricha oomishuu) qabu.`,
    hint: 'Microbes provide indispensable global ecological benefits essential for all life on Earth.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q63',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Infection Control: Biohazard Waste Disposal (Incineration)',
    questionText: '63. A clinical healthcare worker used a sharp syringe needle to draw blood from an HIV-positive patient. What is the standard biomedical protocol for safely and permanently eliminating such biohazardous infectious sharps?',
    options: [
      'High-temperature Incineration (Thermal combustion in a biomedical incinerator)',
      'Fractional Tyndallization',
      'Surface chemical sanitization with alcohol wipe',
      'Cold chemical preservation'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Contaminated sharp biomedical waste (syringes, needles, lancets) must be collected in puncture-proof biohazard sharps containers and subjected to high-temperature Incineration ($>1000^\circ\text{C}$), which completely destroys pathogens and melts metals into harmless ash.

🇪🇹 አማርኛ (Amharic):
ለኤች አይ ቪ ወይም ለሌሎች ተላላፊ በሽታዎች ያገለገሉ የመርፌ መውጊያዎችን ሙሉ በሙሉ አቃጥሎ አመድ በማድረግ ኢንፌክሽንን ለመከላከል ተመራጩ መንገድ ኢንሲነሬሽን (Incineration / ማቃጠል) ነው።

🌳 Afaan Oromoo:
Lilmoolee qorannoo dhiiga dhibee qabuuf fayyadaman guutummaatti barbadeessuuf malli sirriin gubuu (\'Incineration\') dha.`,
    hint: 'Incineration safely and completely destroys contaminated clinical sharps waste.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q64',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Microbiology Techniques: Colony Morphology of Isolated Microbes',
    questionText: '64. A food microbiologist isolates distinct microbial colonies on nutrient agar plates following serial dilution. How are these isolated single colonies initially identified and characterized macroscopic on the culture plate?',
    options: [
      'By counting the total number of genetic strains in a liquid broth',
      'By cross-checking against museum taxidermy specimens',
      'By observing and characterizing colony morphological features (elevation, margin, pigmentation, opacity, diameter, and surface texture)',
      'By inoculating whole petri dishes directly into live animals'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Colony morphology on agar plates involves observing macroscopic physical traits: form/shape (circular, irregular), elevation (flat, raised, convex), margin/edge (entire, undulate), surface texture (smooth, rough, mucoid), and chromogenic pigmentation.

🇪🇹 አማርኛ (Amharic):
በአጋር ፕሌት (agar plate) ላይ የበቀሉትን የባክቴሪያ ቅኝ ግዛቶች (colonies) መጀመሪያ ለይቶ ለማወቅ የውጫዊ ቅርፃቸውን፣ ቀለማቸውን እና ሸካራነታቸውን (morphological features) በመመልከት ነው።

🌳 Afaan Oromoo:
Lubbiyyoolee bakteeriyaa \'agar plate\' irratti biqilan jalqaba adda baasuuf bifa isaanii, guddinaa fi halluu (morphological features) ilaaluun beekama.`,
    hint: 'Colonies on agar plates are characterized by observing distinct morphological features.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q65',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Cellular Metabolism: Anabolism vs Catabolism',
    questionText: '65. What is the fundamental thermodynamic and biochemical distinction between Anabolic and Catabolic metabolic pathways?',
    options: [
      'Anabolism absorbs/requires energy (endergonic constructive synthesis of macromolecules) while Catabolism releases energy (exergonic breakdown of complex fuel molecules into simpler ones).',
      'Anabolism is destructive degradation while Catabolism is constructive biosynthesis.',
      'Anabolism occurs only during mitochondrial respiration while Catabolism occurs only in chloroplast photosynthesis.',
      'Anabolism breaks down macromolecules into monomers while Catabolism builds ATP from ADP.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Anabolism (Constructive metabolism): Endergonic reactions that consume ATP energy to synthesize complex macromolecules from simple precursor subunits (e.g., protein synthesis, photosynthesis).
• Catabolism (Degradative metabolism): Exergonic reactions that break down complex molecules, liberating free energy stored as ATP (e.g., glycolysis, cellular respiration).

🇪🇹 አማርኛ (Amharic):
አናቦሊዝም (Anabolism) ጉልበትን በመጠቀም ቀላል ነገሮችን ወደ ውስብስብ ሞለኪውል የሚገነባ (Constructive) ሲሆን፤ ካታቦሊዝም (Catabolism) ደግሞ ውስብስብ ሞለኪውሎችን በመሰባበር ጉልበትን (Energy) ወደ ውጭ የሚለቅ ሂደት ነው።

🌳 Afaan Oromoo:
\'Anabolism\' anniisaa fayyadamuun molakiyuulota gurguddoo ijaara; \'Catabolism\' immoo molakiyuulota gurguddoo diiguun anniisaa gadi-lakkisa.`,
    hint: 'Anabolism builds up and absorbs energy; Catabolism breaks down and releases energy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q66',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Photosynthesis: Biosphere Sustainability and Energy Flow',
    questionText: '66. In a hypothetical ecological scenario where all photosynthetic activity permanently ceased on Earth, what would be the unavoidable long-term outcome on global life?',
    options: [
      'Global life would remain unaffected because alternative geothermal sources could replace all autotrophic energy.',
      'Global trophic energy flow and oxygen replenishment would collapse, leading to mass extinction of almost all heterotrophic life and aerobic organisms.',
      'Atmospheric CO2 and O2 concentrations would remain perfectly balanced by animal breathing.',
      'Animal ecosystems would flourish exponentially without plant competition.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Photosynthesis is the fundamental bioenergetic foundation of Earth\'s biosphere. Primary producers fix solar radiation into chemical energy (glucose) and continuously release biogenic oxygen. If photosynthesis stopped, atmospheric O2 would deplete, food chains would collapse, and global mass extinction would ensue.

🇪🇹 አማርኛ (Amharic):
በምድር ላይ ፎቶሲንተሲስ (Photosynthesis) ሙሉ በሙሉ ቢቆም፡ የምግብ ሰንሰለቱ ይበጠሳል፣ የኦክስጅን ምርት ያበቃል፣ ይህም በመላው ዓለም ላይ የህይወት መጥፋትንና ጭፍጨፋን (mass extinction) ያስከትላል።

🌳 Afaan Oromoo:
Osoo adeemsi \'Photosynthesis\' lafa irratti guutummaatti dhaabbatee, madda soorataa fi oksijiinii waan dhabamuuf lubbu-qabeeyyiin hundi ni dhumu (mass extinction).`,
    hint: 'Ceasing photosynthesis would cut off energy and oxygen supplies, causing mass extinction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q67',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Photosynthesis: Functional Compartmentalization of Grana and Stroma',
    questionText: '67. What are the specialized functional roles of the Thylakoid Grana stacks and the fluid Stroma within the chloroplast, respectively?',
    options: [
      'Grana is the site for the cyclic light pathway while Stroma is the exclusive site for non-cyclic photophosphorylation.',
      'Grana (Thylakoids) is the site for the Light-Dependent reactions (Photolysis of water, electron transport, and ATP/NADPH generation) while Stroma is the site for the Light-Independent Calvin Cycle (Carbon dioxide fixation into sugars).',
      'Grana is the site for generating hexose sugar while Stroma is the site for water photolysis.',
      'Grana produces NADPH only while Stroma carries out chemiosmotic ATP synthesis.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• Grana (Thylakoid membranes): Contain chlorophylls, electron transport chains, and ATP synthase for the Light Reactions (photolysis of $H_2O$, $O_2$ evolution, ATP and NADPH synthesis).
• Stroma (Aqueous matrix): Contains RuBisCO enzyme and Calvin Cycle enzymes for fixing $CO_2$ into triose phosphate carbohydrates.

🇪🇹 አማርኛ (Amharic):
በክሎሮፕላስት ውስጥ ግራና (Grana) የብርሃን ምላሽ እና የውሃ መሰበር (Photolysis of water) የሚካሄድበት ሲሆን፤ ስትሮማ (Stroma) ደግሞ ካርቦን ዳይኦክሳይድ ተቀይሮ ስኳር የሚመረትበት የካልቪን ሳይክል ማዕከል ነው።

🌳 Afaan Oromoo:
Kilooropilaastii keessatti \'Grana\' bakka wal-nyaatinsa ifaa (bishaanni caccabee O2 baasu) yoo ta\'u, \'Stroma\'n immoo bakka Kaarboon daayi\'oksaayidiin gara sukkaaraatti jijjiiramuudha.`,
    hint: 'Grana performs light-dependent photolysis of water; Stroma conducts Calvin cycle CO2 fixation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q68',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Photosynthesis: Cyclic vs Non-Cyclic Photophosphorylation',
    questionText: '68. Which one of the following comparisons between Non-Cyclic and Cyclic photophosphorylation is correct?',
    options: [
      'Non-cyclic produces only ATP, while cyclic produces ATP, NADPH and oxygen.',
      'Non-cyclic uses oxygen as the final electron acceptor, while cyclic uses cytochrome b6f.',
      'Non-cyclic uses Photosystem I as initial electron donor, while cyclic uses photolyzed water.',
      'Non-cyclic photophosphorylation involves both Photosystem II (P680) and Photosystem I (P700), whereas cyclic photophosphorylation utilizes only Photosystem I (P700).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Non-Cyclic (Z-Scheme): Involves both PS II and PS I, photolyzes water, and produces ATP, NADPH, and molecular $O_2$.
• Cyclic: Involves only PS I (electrons cycle from ferredoxin back to cytochrome b6f), does not photolyze water, releases no $O_2$, and synthesizes ATP only.

🇪🇹 አማርኛ (Amharic):
ሳይክሊክ ያልሆነው (Non-cyclic) የብርሃን ምላሽ ሁለቱንም ፎቶሲስተም I እና II ን የሚጠቀም ሲሆን፤ ሳይክሊክ (Cyclic) የሆነው ግን ፎቶሲስተም I (PS I) ን ብቻ ይጠቀማል።

🌳 Afaan Oromoo:
Adeemsi \'Non-cyclic\' footoosisteemota lameen (PS I fi PS II) kan fayyadamu yoo ta\'u, \'Cyclic\'n garuu footoosisteemii tokkoffaa (PS I) qofa fayyadama.`,
    hint: 'Non-cyclic uses both PS I and PS II; Cyclic uses only PS I.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q69',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Photosynthesis: Stages of the Calvin Cycle (Reduction vs Fixation)',
    questionText: '69. All of the following biochemical events occur during the Reduction phase of the Calvin cycle EXCEPT:',
    options: [
      'Enzymatic Carboxylation of Ribulose-1,5-bisphosphate (RuBP) by Carbon Dioxide (This occurs during the Carbon Fixation stage catalyzed by RuBisCO).',
      'Phosphorylation using ATP molecules from light reactions.',
      'Reduction of 1,3-bisphosphoglycerate using NADPH electrons.',
      'Conversion of 3-carbon phosphoglycerate intermediates into Glyceraldehyde-3-Phosphate (G3P) sugar.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The Calvin cycle has 3 distinct stages:
1. Carbon Fixation: $CO_2$ combines with RuBP catalyzed by RuBisCO to form 3-PGA.
2. Reduction Phase: ATP and NADPH reduce 3-PGA into G3P (triose phosphate).
3. Regeneration: G3P rearranges using ATP to regenerate RuBP.
Combining $CO_2$ with RuBP belongs strictly to Stage 1 (Fixation), NOT Stage 2 (Reduction).

🇪🇹 አማርኛ (Amharic):
ካርቦን ዳይኦክሳይድን ከ RuBP ጋር ማዋሃድ (Carbon fixation) የመጀመሪያው ምዕራፍ እንጂ የቅነሳ (Reduction) ምዕራፍ አካል አይደለም።

🌳 Afaan Oromoo:
Kaarboon daayi\'oksaayidii RuBP wajjin walitti makuun sadarkaa \'Carbon Fixation\' jalatti raawwatama malee sadarkaa \'Reduction\' miti.`,
    hint: 'Combining CO2 with RuBP is Carbon Fixation (Stage 1), not Reduction.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q70',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Plant Physiology: C2 Photorespiration in Mitochondria',
    questionText: '70. During the C2 photorespiration pathway in C3 plants under hot, dry conditions, what enzymatic reaction occurs specifically inside the mitochondrion?',
    options: [
      'Two molecules of Glycine are condensed into one molecule of Serine with the simultaneous release of $CO_2$ and Ammonia ($NH_3$).',
      'Glycolate is oxidized to glyoxylate producing hydrogen peroxide ($H_2O_2$) in peroxisomes.',
      'Glycerate is directly phosphorylated into 3-PGA inside the chloroplast.',
      'Phosphoglycolate is dephosphorylated into glycolate in the chloroplast stroma.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In C2 photorespiration:
• Chloroplast: Oxygenation of RuBP yields 2-phosphoglycolate $\\rightarrow$ glycolate.
• Peroxisome: Glycolate oxidized to glyoxylate $\\rightarrow$ transaminated to glycine.
• Mitochondria: Two glycine molecules are converted by glycine decarboxylase complex into one serine molecule, with the release of $CO_2$ and $NH_3$.

🇪🇹 አማርኛ (Amharic):
በፎቶሬስፒሬሽን (Photorespiration) ወቅት በማይቶኮንድሪያ ውስጥ፡ ሁለት ግላይሲን (Glycine) ሞለኪውሎች ተቀናጅተው አንድ ሴሪን (Serine) ሲፈጥሩ፣ ካርቦን ዳይኦክሳይድ ($CO_2$) እና አሞኒያ ($NH_3$) ይወገዳሉ።

🌳 Afaan Oromoo:
Yeroo \'Photorespiration\' maaytookondiriyaa keessatti \'Glycine\'n gara \'Serine\'tti yoo jijjiiramu $CO_2$ fi $NH_3$ gadi-lakkifamu.`,
    hint: 'In mitochondria, two glycines form one serine, releasing CO2 and NH3.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q71',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Ecology: Photosynthesis in Maintaining Global Atmospheric Balance',
    questionText: '71. How does global photosynthesis directly safeguard the continuity and homeostasis of aerobic life on Earth?',
    options: [
      'By constantly accumulating excess greenhouse carbon dioxide in the upper troposphere',
      'By maintaining dynamic equilibrium and atmospheric balance between carbon dioxide ($CO_2$) consumption and oxygen ($O_2$) replenishment',
      'By systematically removing all dissolved oxygen from aquatic ecosystems',
      'By releasing fossil natural gas deposits into the oceans'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Photosynthesis acts as the planet\'s primary carbon sink and oxygen generator. By absorbing vast volumes of anthropogenic and biogenic $CO_2$ and continuously generating $O_2$, it maintains atmospheric gas equilibrium necessary for aerobic cellular respiration.

🇪🇹 አማርኛ (Amharic):
ፎቶሲንተሲስ ካርቦን ዳይኦክሳይድን ከአየር ላይ በመውሰድና ኦክስጅንን ወደ አየር በመልቀቅ በምድር ላይ የጋዞችን ሚዛን (Atmospheric balance) ጠብቆ ያቆያል።

🌳 Afaan Oromoo:
Adeemsi \'Photosynthesis\' Kaarboon daayi\'oksaayidii xuuxee Oksijiinii gadi-lakkisuun madaallii qilleensa naannoo eega.`,
    hint: 'Photosynthesis maintains the delicate balance between CO2 and O2 in the atmosphere.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q72',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Cellular Respiration: Substrate-Level vs Oxidative Phosphorylation',
    questionText: '72. What is the fundamental enzymatic and energetic distinction between Substrate-Level Phosphorylation and Oxidative Phosphorylation?',
    options: [
      'Substrate-level phosphorylation occurs exclusively on the mitochondrial inner cristae, while oxidative occurs in the cytosol.',
      'Substrate-Level Phosphorylation synthesizes ATP directly from phosphorylated metabolic intermediates during Glycolysis and the Krebs Cycle, whereas Oxidative Phosphorylation utilizes electrochemical proton gradients driving ATP synthase during the Electron Transport Chain.',
      'Both mechanisms rely entirely on the same chemical source of radiant photonic energy.',
      'Substrate-level occurs only in aerobic states, while oxidative occurs during anaerobic fermentation.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• Substrate-Level Phosphorylation: Direct transfer of a high-energy phosphate group from a phosphorylated substrate (e.g., PEP in glycolysis, Succinyl-CoA in Krebs) to ADP.
• Oxidative Phosphorylation: Chemiosmotic ATP synthesis by ATP synthase driven by proton gradient across inner mitochondrial membrane powered by redox reactions in ETC.

🇪🇹 አማርኛ (Amharic):
ሰብስቴት ሌቭል ፎስፎራይሌሽን በግላይኮላይሲስ እና በክሬብስ ዑደት ውስጥ ቀጥታ ፎስፌትን በማስተላለፍ ATP ሲፈጥር፤ ኦክሲዴቲቭ ፎስፎራይሌሽን ደግሞ በኤሌክትሮን ትራንስፖርት ቼይን (ETC) በፕሮቶን ግፊት አማካኝነት ATP ያመርታል።

🌳 Afaan Oromoo:
\'Substrate-level phosphorylation\' adeemsa \'Glycolysis\' fi \'Krebs cycle\' keessatti kallattiin ATP yoo uumu; \'Oxidative phosphorylation\' immoo \'Electron Transport Chain\' keessatti hojjeta.`,
    hint: 'Substrate-level produces ATP directly in glycolysis/Krebs; Oxidative phosphorylation uses the ETC.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q73',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Cellular Respiration: Energy Payoff Phase of Glycolysis',
    questionText: '73. Which of the following statements correctly quantifies the molecular products generated during the Energy Liberation (Payoff) phase of the Glycolytic pathway per glucose molecule?',
    options: [
      'It hydrolyzes two ATP molecules to phosphorylate glucose into fructose-1,6-bisphosphate.',
      'It cleaves six-carbon glucose into two inactive carbon dioxide molecules.',
      'It releases water and dihydroxyacetone phosphate only.',
      'It produces four gross ATP molecules (2 net ATP), two molecules of reduced NADH, and two molecules of pyruvate.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In the energy payoff phase of glycolysis (from two molecules of G3P):
• 4 ATP molecules are produced via substrate-level phosphorylation (Gross yield).
• Since 2 ATP were invested in the preparatory phase, Net ATP yield = 2 ATP.
• 2 $NAD^+$ are reduced to $2 NADH + 2 H^+$.
• 2 Pyruvate molecules (3-carbon) are formed.

🇪🇹 አማርኛ (Amharic):
በግላይኮላይሲስ ሁለተኛ ምዕራፍ (Energy liberation phase) ውስጥ በአጠቃላይ 4 ATP (የተጣራ 2 ATP)፣ 2 NADH እና 2 ፒሩቬት (Pyruvate) ሞለኪውሎች ይመረታሉ።

🌳 Afaan Oromoo:
Sadarkaa lammaffaa \'Glycolysis\' keessatti: ATP 4 (qulqulluu ATP 2), NADH 2 fi Paayiruuveetii (Pyruvate) molakiyuulii 2 tu oomishama.`,
    hint: 'Glycolysis payoff phase produces 4 gross ATP (2 net ATP), 2 NADH, and 2 Pyruvates.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q74',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Cellular Respiration: Role of Molecular Oxygen in Electron Transport Chain',
    questionText: '74. Which of the following statements correctly describes a key mechanism of the mitochondrial Electron Transport System (ETS)?',
    options: [
      'Molecular Oxygen ($O_2$) acts as the terminal electron and proton acceptor, forming metabolic water ($H_2O$) and maintaining electron flow.',
      'Thirteen ATP molecules are expended when electrons transfer from NADH/FADH2 to oxygen.',
      'More than 90% of cellular ATP is produced strictly by substrate-level phosphorylation.',
      'Proton pumping acidifies the mitochondrial matrix relative to the intermembrane space.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
At Complex IV (Cytochrome c oxidase) of the electron transport chain, molecular oxygen ($O_2$) acts as the final terminal electron acceptor, combining with electrons and free matrix protons to form metabolic water ($H_2O$). This continuous reduction of $O_2$ maintains the electron flow and proton gradient.

🇪🇹 አማርኛ (Amharic):
በኤሌክትሮን ትራንስፖርት ስርዓት (ETS) መጨረሻ ላይ ኦክስጅን የመጨረሻውን ኤሌክትሮን እና ፕሮቶን በመቀበል ወደ ውሃ ($H_2O$) ይቀየራል።

🌳 Afaan Oromoo:
Sirna \'Electron Transport System\' keessatti Oksijiiniin fudhataa dhumaa (terminal electron acceptor) ta\'uun bishaan ($H_2O$) uuma.`,
    hint: 'Oxygen serves as the terminal electron acceptor in the electron transport chain to form water.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q75',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Cellular Respiration: Net ATP from Substrate-Level Phosphorylation',
    questionText: '75. In the complete aerobic oxidation of one single glucose molecule ($C_6H_{12}O_6$), how many total net ATP molecules are synthesized exclusively via Substrate-Level Phosphorylation?',
    options: [
      '2 ATP molecules',
      '4 ATP molecules (2 ATP from Glycolysis + 2 ATP/GTP from Krebs Cycle)',
      '8 ATP molecules',
      '10 ATP molecules'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Substrate-level ATP synthesis per glucose molecule:
• Glycolysis: 4 gross ATP - 2 invested = **2 Net ATP**
• Link Reaction: 0 ATP
• Krebs (Citric Acid) Cycle: **2 ATP (or GTP)** (1 per turn $\\times$ 2 turns)
Total Net ATP via Substrate-Level Phosphorylation = $2 + 2 = 4\\text{ ATP}$.

🇪🇹 አማርኛ (Amharic):
አንድ የግሉኮስ ሞለኪውል ሙሉ በሙሉ ሲቃጠል በሰብስቴት ሌቭል ፎስፎራይሌሽን (Substrate-level phosphorylation) ብቻ የሚገኘው የተጣራ ATP መጠን፡
- ከግላይኮላይሲስ = 2 ATP
- ከክሬብስ ዑደት = 2 ATP
ድምር = 4 Net ATP ነው።

🌳 Afaan Oromoo:
Adeemsa \'Substrate-level\' qofaan molakiyuulii gilukoosii tokko irraa ATPn argamu: Glycolysis irraa 2 + Krebs cycle irraa 2 = walumatti ATP 4 dha.`,
    hint: '2 ATP from glycolysis + 2 ATP from Krebs cycle = 4 net ATP from substrate-level phosphorylation.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
