import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2018_EC_PART2: Question[] = [
  {
    id: 'bio-2018-q26',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Immunology: Characteristics of Innate Immunity',
    questionText: '26. Which one of the following statements is correct about innate immunity? It',
    options: [
      'produces antibody that neutralizes antigens in the blood.',
      'responds better after the second encounter of a pathogens.',
      'has memory to recognize pathogens.',
      'is a non-specific host defense system.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Innate (natural) immunity is the organism's non-specific first line of host defense present from birth. It responds immediately and uniformly to all foreign invaders regardless of antigenic specificity, utilizing physical barriers, phagocytic cells, and inflammation without immunological memory. Generating specific antibodies and immunological memory are hallmarks of adaptive (acquired) immunity.

🇪🇹 አማርኛ (Amharic):
የተፈጥሮ በሽታ የመከላከል አቅም (Innate immunity) የተለየ በሽታ አምጪን ሳይለይ ሁሉንም በእኩል ደረጃ የሚከላከል nonspecific መከላከያ ነው። ፀረ-እንግዳ አካላትን (antibodies) ማመንጨት እና የበሽታውን ታሪክ ማስታወስ የአዳፕቲቭ ኢሚዩኒቲ ባህሪ ነው።

🌳 Afaan Oromoo:
'Innate immunity'n sirna ittisa qaamaa dhalootaan jiru ta'ee, baakteeriyaa ykn vaayirasii adda baasuu malee hunda isaanii karaa walfakkaataan ittisa (non-specific defense system).`,
    hint: 'Innate immunity provides non-specific, immediate defense without immunological memory.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q27',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Reproduction: Agents of Pollination',
    questionText: '27. Which of the following is NOT a pollinating agent?',
    options: [
      'Birds',
      'Insects',
      'Wind',
      'Microbes'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Pollination is the transfer of pollen grains from an anther to a receptive stigma. Common biotic and abiotic pollinating vectors include wind (anemophily), insects like bees and butterflies (entomophily), birds like hummingbirds (ornithophily), bats, and water. Microscopic organisms (microbes like bacteria and microscopic fungi) do not serve as pollination agents.

🇪🇹 አማርኛ (Amharic):
የአበባ ብናኝ ማስተላለፍ (pollination) በነፋስ፣ በነፍሳት፣ በአእዋፋት እና በውሃ ይከናወናል። ጥቃቅን ህዋሳት (Microbes) ግን የአበባ ብናኝ አያስተላልፉም።

🌳 Afaan Oromoo:
Poolineeshiniin qilleensa, ilbiisota, fi allaattotaan raawwatama malee maayikiroobotaan (microbes) hin adeemsifamu.`,
    hint: 'Microbes do not act as vectors for pollen transfer between flowers.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q28',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Evolution & Genetics: Sources of Genetic Variation (Mutation)',
    questionText: '28. Which of the following is the major causes of evolution that results from a sudden, and random change of DNA sequence?',
    options: [
      'Artificial selection',
      'Induced mutation',
      'Environmental stability',
      'Acquired characteristic'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Mutation (whether induced by physical/chemical mutagens or spontaneous) is a sudden, random, heritable change in the nucleotide sequence of an organism's DNA. Mutations are the ultimate and primary source of novel alleles and genetic variation that fuel evolutionary change through natural selection.

🇪🇹 አማርኛ (Amharic):
በዲኤንኤ ቅደም ተከተል ላይ በድንገት እና በዘፈቀደ የሚከሰት ለውጥ ሚውቴሽን (Mutation) ተብሎ የሚጠራ ሲሆን ለአዳዲስ ባህሪያት መፈጠር እና ለዝግመተ-ለውጥ (evolution) ዋነኛ መነሻ ነው።

🌳 Afaan Oromoo:
Jijjiiramni tasaa fi akkuma ta'etti seensaa DNA keessatti uumamu 'mutation' jedhama; kunis madda jalqabaa adda-addummaa jeneetikii fi jijjiirama tirannaa (evolution)ti.`,
    hint: 'A mutation is a sudden, random alteration in the DNA nucleotide sequence.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q29',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ecology & Biodiversity: Threats to Biodiversity (Invasive Species)',
    questionText: '29. Gardener brings an ornamental plant from other country and plant it in urban parks. This species through time moved into conservation area and caused a loss for many other plant species. This is a loss of biodiversity due to',
    options: [
      'invasive species.',
      'climate change.',
      'deforestation.',
      'overexploitation.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
An exotic (non-native or introduced) plant that escapes cultivation, spreads aggressively into natural ecosystems, and outcompetes endemic flora for nutrients, water, and sunlight is defined as an invasive alien species. Invasive species are recognized globally as one of the leading drivers of biodiversity loss.

🇪🇹 አማርኛ (Amharic):
ከውጭ ሀገር የመጣ የጌጥ ተክል ተስፋፍቶ የአካባቢውን ነባር ዝርያዎች ሲያጠፋና ብዝሃ-ህይወትን ሲጎዳ ወራሪ ዝርያ (invasive species) ይባላል።

🌳 Afaan Oromoo:
Biqiltuun biyya ormaatii dhufe tokko babal'atee sanyiiwwan naannoo sana duraan turan yommuu miidhu 'invasive species' (sanyii weerartuu) jedhamuun beekama.`,
    hint: 'Non-native organisms that outcompete native wildlife are called invasive species.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q30',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Human Respiratory System: Anatomy and Protective Structures',
    questionText: '30. Which one of the following breathing structures and its function is correctly matched?',
    options: [
      'Trachea - prevents the collapse of respiratory structures',
      'Bronchioles - deliver air from the nasal cavity to the bronchi',
      'Bronchi - exchange gases between capillaries in the lungs',
      'Larynx - prevents choking by covering the opening in the trachea'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The human trachea (windpipe) is reinforced along its entire length with C-shaped rings of hyaline cartilage. These rigid cartilage rings keep the tracheal lumen continuously patent and prevent the airway from collapsing under negative intrathoracic pressures generated during deep inhalation. (Gas exchange occurs at the alveoli, and the epiglottis covers the glottis during swallowing).

🇪🇹 አማርኛ (Amharic):
የመተንፈሻ ቱቦ (Trachea) በውስጡ ባሉት የቅርጫት አጥንት (cartilage) ቀለበቶች አማካኝነት በአየር መሳብ ወቅት እንዳይጣበቅና እንዳይዘጋ ይከላከላል።

🌳 Afaan Oromoo:
Ujummoon qilleensaa (Trachea) qubeellaawwan 'cartilage' of keessaa waan qabuuf akka hin cufamne fi hin walitti hin maxxannee eega.`,
    hint: 'Cartilaginous rings support the trachea to prevent airway collapse during breathing.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q31',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Human Health & Nutrition: Body Mass Index (BMI) Assessment',
    questionText: "31. Suppose a person's height and body mass are 1.81 m and 68 kg, respectively. Which one of the following categories best describes the person? She is",
    options: [
      'overweight.',
      'normal.',
      'obese.',
      'underweight.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Calculate Body Mass Index (BMI):
BMI = Mass (kg) / [Height (m)]²
BMI = 68 / (1.81)² = 68 / 3.2761 ≈ 20.76 kg/m²
Step 2: Compare with standard WHO BMI categories:
• Underweight: < 18.5
• Normal weight: 18.5 – 24.9
• Overweight: 25.0 – 29.9
• Obese: ≥ 30.0
Since 20.76 falls well within 18.5 to 24.9, the individual has a normal weight.

🇪🇹 አማርኛ (Amharic):
የቢኤምአይ (BMI) ስሌት፡
BMI = ኪሎግራም / (ቁመት በሜትር)² = 68 / (1.81)² = 68 / 3.276 ≈ 20.76 kg/m²
የBMI ደንብ፡
• ከ18.5 በታች = Underweight
• ከ18.5 እስከ 24.9 = Normal (መደበኛ ጤናማ ክብደት)
• ከ25 እስከ 29.9 = Overweight
ስለዚህ ሰውየዋ Normal ክብደት አላት።

🌳 Afaan Oromoo:
Shallaggii BMI:
BMI = 68 / (1.81)² ≈ 20.76 kg/m²
Gatiin kun gidduu 18.5 fi 24.9 waan jiruuf, ulfaatina qaamaa fayyaalessa (normal) agarsiisa.`,
    hint: 'BMI = 68 / (1.81)² ≈ 20.76 kg/m², which falls in the normal weight range (18.5 - 24.9).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q32',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Entomology: Complete vs. Incomplete Metamorphosis',
    questionText: '32. Which one of the following statements is correct about complete metamorphosis? The',
    options: [
      'larvae develop directly into adult',
      'larvae develop into nymph',
      'eggs hatch into larvae after few days',
      'nymph develops into adult'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Complete metamorphosis (holometabolous development, seen in butterflies, flies, and beetles) consists of four morphologically distinct stages:
Egg → Larva → Pupa → Adult.
In complete metamorphosis, eggs hatch into active, feeding worm-like larvae (e.g., caterpillars or maggots), which later form an inactive pupa before emerging as an adult. (Nymph stages occur in incomplete/hemimetabolous metamorphosis).

🇪🇹 አማርኛ (Amharic):
ሙሉ ሜታሞርፎሲስ (Complete metamorphosis) አራት ደረጃዎች አሉት፡ እንቁላል (egg) → እጭ (larva) → ሙሽሬ (pupa) → አዋቂ (adult)። እንቁላሎች ከተወሰኑ ቀናት በኋላ ተፈልፍለው ወደ እጭ (larva) ይቀየራሉ።

🌳 Afaan Oromoo:
Jijjiirama guutuu (complete metamorphosis) keessatti hanqaaquun cabee gara 'larva'tti jijjiirama; sadarkaan kunis: Hanqaaquu → Laarvaa → Piyoophaa → Ga'eessa ta'a.`,
    hint: 'In complete metamorphosis, eggs hatch into larvae before entering the pupal stage.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q33',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cell Biology: Ultrastructural Differences between Plant and Animal Cells',
    questionText: '33. Plant cells differ from animal cells in that, they have',
    options: [
      'larger ribosomes for protein synthesis.',
      'large central vacuoles in their cells.',
      'cell membrane with double layers.',
      'a pair of centrioles for cell division.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Mature plant cells are uniquely characterized by a prominent, membrane-bound large central vacuole (surrounded by the tonoplast) that occupies up to 90% of cellular volume, maintaining turgor pressure and cell rigidity. Both plant and animal cells possess 80S cytosolic ribosomes and phospholipid bilayer membranes, while centrioles are typically restricted to animal cells.

🇪🇹 አማርኛ (Amharic):
የዕፅዋት ህዋሳት ከእንስሳት ህዋሳት የሚለዩት በውስጣቸው ትልቅ ማዕከላዊ ቫኪዩል (large central vacuole) በመያዛቸው ነው። ሴንትሪዮል የሚገኘው በእንስሳት ህዋሳት ውስጥ ነው።

🌳 Afaan Oromoo:
Seelonni biqiltootaa seelota bineensotaa irraa kan adda ba'an 'large central vacuole' (vakiyoolii guddicha giddu-galeessaa) qabaachuu isaaniitiini.`,
    hint: 'Mature plant cells possess a single large central vacuole that maintains turgor pressure.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q34',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ecology: Trophic Levels and Food Chains',
    questionText: `34. This item is based on the following table about food chain:
No. | Characteristics | Trophic level | Feeding level | Example
1. | Make their own food | First | Producers | Grass
2. | Feeds on herbivores | Third | Tertiary consumer | Frog
3. | Feeds on another carnivore | Fourth | Tertiary consumer | Snake
4. | Feeds on green plants | Second | Primary consumer | Grasshopper
Which numbers in the above table contain the correct description of a food chain with its examples?`,
    options: [
      '1, 2 and 3',
      '1 and 2',
      '2 and 4',
      '1, 3 and 4'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Analyzing each trophic relationship:
• 1. Grass synthesizes organic food via photosynthesis → First trophic level, Autotrophic Producer. Correct.
• 2. Frog feeding on herbivorous insects is a Secondary consumer at the 3rd trophic level (NOT a Tertiary consumer). Incorrect.
• 3. Snake feeding on a secondary consumer carnivore (frog) → Fourth trophic level, Tertiary consumer. Correct.
• 4. Grasshopper eating green vegetation → Second trophic level, Primary consumer. Correct.
Thus, numbers 1, 3, and 4 present accurate descriptions and ecological designations.

🇪🇹 አማርኛ (Amharic):
• 1. ሳር (Grass)፡ 1ኛ ትሮፊክ ደረጃ፣ አምራች (ትክክል)
• 2. እንቁራሪት፡ ሄርቢቮሮችን ስለምትመገብ ሰከንዳሪ ኮንሲዩመር እንጂ ተርሺያሪ አይደለችም (ስህተት)
• 3. እባብ (Snake)፡ ካርኒቮሮችን ስለሚመገብ 4ኛ ደረጃና ተርሺያሪ ኮንሲዩመር ነው (ትክክል)
• 4. ፌንጣ (Grasshopper)፡ ዕፅዋትን ስለሚመገብ 2ኛ ደረጃና ፕራይመሪ ኮንሲዩመር ነው (ትክክል)
ስለዚህ 1፣ 3 እና 4 ትክክለኛ መግለጫዎች ናቸው።

🌳 Afaan Oromoo:
Raachi (2) bineensota biqiltuu nyaatan waan sooratuuf 'Secondary consumer' dha malee 'Tertiary' miti. Kanaafuu, lakkoofsi 1, 3 fi 4 sirriidha.`,
    hint: 'Frogs feeding on herbivores are secondary consumers, making row 2 false; 1, 3, and 4 are correct.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q35',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Microbiology: Morphological Classification of Bacteria',
    questionText: '35. Which one of the following bacteria are correctly grouped into their category based on their shape?',
    options: [
      'Bacilli - rod shaped bacteria',
      'Cholera - spiral shaped bacteria',
      'Spirochaetes - spherical bacteria',
      'Cocci - corkscrew shaped bacteria'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Bacteria are fundamentally classified by cell morphology:
• Bacilli: Rod-shaped or cylindrical bacterial cells (e.g., Bacillus anthracis, E. coli).
• Cocci: Spherical or ovoid bacterial cells (e.g., Streptococcus, Staphylococcus).
• Spirilla / Spirochaetes: Spiral, corkscrew-shaped, or coiled bacterial cells.
• Vibrio: Comma-shaped bacteria (e.g., Vibrio cholerae).
Therefore, "Bacilli - rod shaped bacteria" is the correct classification.

🇪🇹 አማርኛ (Amharic):
ባክቴሪያዎች በቅርጻቸው ሲመደቡ፡
• ባሲላይ (Bacilli)፡ የበትር ቅርጽ (rod-shaped) ያላቸው ናቸው (ትክክለኛ ምድብ)።
• ኮካይ (Cocci)፡ ክብ (spherical) ናቸው።
• ስፓይሮኬትስ (Spirochaetes)፡ ጠመዝማዛ (corkscrew/spiral) ናቸው።

🌳 Afaan Oromoo:
Baasiilaayiin (Bacilli) baakteeriyaa bifa ulee (rod-shaped) qaban yoo ta'u, kookkaayiin (cocci) geengoo, ispaayirookeetiin ammoo kan marameedha.`,
    hint: 'Bacilli are rod-shaped bacteria.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q36',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Human Nutrition: Mineral Deficiencies (Calcium and Rickets)',
    questionText: '36. Which one of the following nutrients is correctly paired with its deficiency diseases?',
    options: [
      'Phosphorous - kwashiorkor',
      'Protein - marasmus',
      'Calcium - rickets',
      'Iron - bleeding gums'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Calcium (in conjunction with Vitamin D) is essential for mineralization and structural rigidity of bones and teeth. Deficiency of calcium during skeletal growth in children causes rickets, characterized by soft, weakened, bowed long bones. (Kwashiorkor is caused by acute protein deficiency, marasmus by overall protein-calorie starvation, and iron deficiency leads to anemia).

🇪🇹 አማርኛ (Amharic):
ካልሲየም (Calcium) ለአጥንት ጥንካሬ አስፈላጊ የሆነ ማዕድን ሲሆን እጥረቱ በህፃናት ላይ የአጥንት መሳሳትና መጣመም (ሪኬትስ / rickets) ያስከትላል።

🌳 Afaan Oromoo:
Kaalsiyeemiin lafee ijaaruuf murteessaa yoo ta'u, hanqinni isaa dhibee lafeen daa'immanii akka dacha'u taasisu (rickets) fida.`,
    hint: 'Calcium and Vitamin D deficiency causes rickets in growing children.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q37',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cellular Respiration: Oxidative Phosphorylation via the ETS',
    questionText: '37. In the presence of oxygen, the cell theoretically yields approximately 36-38 ATP per glucose. Justify why the majority of this energy is harvested by electron transport system (ETS) rather than by glycolysis or the Krebs cycle? Because ETS',
    options: [
      'is the sole stage where glucose is directly converted into ATP through substrate level phosphorylation.',
      'uses the stored potential energy of NADH and FADH₂ to create proton gradient that drives ATP synthase.',
      'occurs in the cytosol where there is more space to produce ATP abundantly.',
      'utilizes oxygen that plugs the leak in the membrane, leading to produce more metabolic energy.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Glycolysis and the citric acid (Krebs) cycle yield only 4 ATP combined through direct substrate-level phosphorylation. However, they extract high-energy electrons, storing their potential energy in 10 NADH and 2 FADH₂ electron carrier molecules. The Electron Transport System (ETS) on the mitochondrial inner membrane oxidizes these cofactors, using electron transfer to pump protons into the intermembrane space. This electrochemical proton gradient drives ATP synthase (chemiosmosis) to generate ~32–34 ATP.

🇪🇹 አማርኛ (Amharic):
ግላይኮላይሲስ እና ክሬብስ ሳይክል የሚያመነጩት 4 ATP ብቻ ሲሆን አብዛኛውን ኃይል በNADH እና FADH₂ ሞለኪውሎች ውስጥ ያከማቻሉ። የኤሌክትሮን ትራንስፖርት ሲስተም (ETS) እነዚህን በመጠቀም የፕሮቶን ግሬዲየንት (proton gradient) በመፍጠር በATP synthase አማካኝነት እጅግ ብዙ ATP ያመነጫል።

🌳 Afaan Oromoo:
Sirni 'ETS' humna kuufamaa NADH fi FADH₂ fayyadamee garaagarummaa pirootoonii (proton gradient) uumuudhaan inzaayimii ATP synthase sochoosa; kunis ATP baay'ee oomisha.`,
    hint: 'The ETS uses electrons from NADH and FADH₂ to establish a proton gradient driving ATP synthase.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q38',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Biotechnology: Principles of Gene Therapy',
    questionText: '38. Which of the following is correct about gene therapy? It is a genetic technique that helps to',
    options: [
      'replace the whole genome of a person with genetic disorder.',
      'enhance transfer of genetic disorders from parents to their offsprings.',
      'identify disorders that passes from parents to offsprings.',
      'treat genetic disorders by transferring sections of DNA to patient\'s cells.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Gene therapy is an advanced biomedical technology designed to treat, cure, or alleviate genetic disorders by introducing functional, therapeutic genes (sections of DNA) into a patient's somatic cells to replace, supplement, or silence mutated pathogenic genes (often mediated via viral vectors).

🇪🇹 አማርኛ (Amharic):
ጂን ቴራፒ (Gene therapy) ጤናማ የዲኤንኤ ክፍሎችን (sections of DNA) ወደ ታማሚው ህዋሳት በማስተላለፍ በዘረ-መል ጉድለት ምክንያት የተከሰቱ በሽታዎችን ለማከም የሚረዳ የባዮቴክኖሎጂ ዘዴ ነው።

🌳 Afaan Oromoo:
Wal'aansi jiinii (Gene therapy) kutaalee DNA fayyaaleessa gara seelota dhukkubsataatti daddabarsuun dhukkuboota jeneetikii wal'aanuuf kan gargaaruudha.`,
    hint: 'Gene therapy delivers functional DNA sequences into target cells to treat genetic diseases.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q39',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Human Digestion: Dental Anatomy and Mechanical Digestion',
    questionText: '39. Which structure and function of the types of teeth is correctly matched?',
    options: [
      'Molars - broader teeth specialized for grinding foods',
      'Premolars - flat teeth specialized for tearing foods',
      'Incisors - flattened teeth specialized for crushing foods',
      'Canine - sharp teeth specialized for cutting foods'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The human dentition consists of four specialized tooth types:
• Incisors: Chisel-shaped front teeth specialized for biting, cutting, and slicing food.
• Canines: Pointed, conical teeth specialized for tearing and ripping tough food.
• Premolars (bicuspids): Teeth with two cusps designed for crushing and shearing.
• Molars: Broad, multi-cusped posterior teeth with large grinding surfaces designed for crushing and grinding food into a fine bolus.
Therefore, Option A correctly matches molars with grinding.

🇪🇹 አማርኛ (Amharic):
መንጋጋ ጥርሶች (Molars) ሰፊና ጠፍጣፋ ገጽታ ያላቸው ሲሆን ዋና ተግባራቸው ምግብን ማድቀቅ እና መፍጨት (grinding foods) ነው። የመቁረጫ ጥርሶች (Incisors) ለመቁረጥ፣ ውሻ ጥርሶች (Canines) ለመቅደድ ያገለግላሉ።

🌳 Afaan Oromoo:
Ilkaan a'oo (Molars) bal'aa waan ta'aniif soorata daakuu fi bulleessuuf (grinding) kan qophaa'aniidha.`,
    hint: 'Molars possess broad occlusal surfaces specialized for crushing and grinding food.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q40',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Biological Kingdoms: Nutritional Mode of Kingdom Fungi',
    questionText: '40. Among the following features, which one describes kingdom fungi? They',
    options: [
      'are multicellular and have chemoautotrophic mode of nutrition.',
      'ingest and digest their food by enzymes in their body.',
      'undergo extracellular digestion to obtain their nutrition.',
      'are prokaryotic and cosmopolitan in their distribution.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Fungi are eukaryotic, non-photosynthetic heterotrophs with cell walls composed of chitin. They exhibit absorptive heterotrophy (osmotrophy): hyphae secrete hydrolytic digestive enzymes directly into the external organic substrate (extracellular digestion), degrading complex polymers into soluble monomers, which are then absorbed across their fungal cell walls.

🇪🇹 አማርኛ (Amharic):
ፈንገሶች (Kingdom Fungi) የምግብ መፈጨት ኢንዛይሞችን ወደ ውጭ በማፍሰስ ምግብን ከሰውነታቸው ውጭ በማድቀቅና ንጥረ-ነገሮችን በመምጠጥ (extracellular digestion) ይመገባሉ።

🌳 Afaan Oromoo:
Fangasoonni inzaayimii gara alaatti dhangalaasuun nyaata qaama isaaniitii alatti bulleeffatanii ergasii xuuxu (extracellular digestion).`,
    hint: 'Fungi secrete digestive enzymes externally and absorb the digested nutrients (extracellular digestion).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q41',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Genetics: Definition of Mutation',
    questionText: '41. Which of the following is the correct definition of mutation? It is a',
    options: [
      'spontaneous variation in the spatial distribution of organisms.',
      'random change in genetic information of organisms.',
      'gradual change in the phenotype of the organisms.',
      'gradual variation in the spatial distribution of organisms.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A mutation is scientifically defined as a sudden, heritable, random change in the nucleotide sequence of the genetic material (DNA, or RNA in RNA viruses) of an organism. Mutations can occur spontaneously due to replication errors or be induced by physical or chemical mutagens.

🇪🇹 አማርኛ (Amharic):
ሚውቴሽን (Mutation) ማለት በአንድ ህይወት ባለው ፍጡር የዘረ-መል መረጃ (DNA sequence) ላይ የሚከሰት ድንገተኛና የዘፈቀደ ለውጥ (random change in genetic information) ነው።

🌳 Afaan Oromoo:
Miyuuteeshiniin jijjiirama tasaa fi akkuma ta'etti odeeffannoo jeneetikii (DNA) orgaanizimii keessatti uumamuudha.`,
    hint: 'Mutation is any random, permanent change in the nucleotide sequence of genomic DNA.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q42',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Microbiological Techniques: Pure Culture Isolation of Bacteria',
    questionText: '42. Suppose a biology teacher take a sample of bacteria from a food and dissolve in a distilled water. If she wants to isolate the bacterium, what is the next direct procedure to accomplish her task?',
    options: [
      'Conduct gram staining to identify their feature',
      'Count a colony and harvest target product',
      'Perform serial dilution and grow in media',
      'Identify bacterial morphology and grow in media'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In microbiology, food suspensions contain extremely dense concentrations of mixed bacterial cells. To isolate pure, individual bacterial colonies, the standard direct procedure is to perform serial dilutions (10-fold serial dilutions in sterile water/broth) followed by streak-plating or spread-plating onto solid agar nutrient media. Individual isolated colonies can then be subcultured and stained.

🇪🇹 አማርኛ (Amharic):
ከምግብ ናሙና ላይ ባክቴሪያን ለይቶ ለማውጣት (isolate) ቀጣዩ ቀጥተኛ እርምጃ ተከታታይ ቅልጠትን (serial dilution) በማካሄድ ባክቴሪያውን በአጋር ሚዲያ (agar media) ላይ ማብቀል ነው።

🌳 Afaan Oromoo:
Makaa baakteeriyaa keessaa baakteeriyaa qulqulluu adda baasanii qopheessuuf tarkaanfiin itti aanu bishaan qulqulluun dhangalaasanii (serial dilution) miidiyaa irratti biqilchuu dha.`,
    hint: 'Serial dilution lowers bacterial density to allow isolated colony growth on agar culture media.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q43',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Endocrine System: Hormonal Functions (Oxytocin and Parturition)',
    questionText: '43. In which of the following options, a hormone is correctly paired with its function?',
    options: [
      'Norepinephrine - facilitate the secretion of glucagon',
      'Oxytocin - helps during delivery of the baby',
      'Parathyroid - control iodine levels in blood stream',
      'Aldosterone - increase heart rate and force of contraction'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Oxytocin (synthesized by the hypothalamus and secreted by the posterior pituitary) stimulates rhythmic, powerful contractions of the uterine myometrium during labor and childbirth (positive feedback), as well as stimulating milk ejection from mammary glands. (Parathyroid hormone regulates serum calcium, aldosterone regulates renal sodium retention, and norepinephrine is a fight-or-flight catecholamine).

🇪🇹 አማርኛ (Amharic):
ኦክሲቶሲን (Oxytocin) በምጥ ወቅት የማህፀን ጡንቻዎች እንዲኮማተሩ በማድረግ ህፃኑ በቀላሉ እንዲወለድ (delivery of the baby) የሚያግዝ ሆርሞን ነው።

🌳 Afaan Oromoo:
Hormooniin 'Oxytocin' jedhamu yeroo ciniinsuu fi da'umsaa maashaan gadameessaa akka kottoonfatu gochuun daa'imni salphaatti akka dhalatu gargaara.`,
    hint: 'Oxytocin stimulates uterine contractions during labor and childbirth.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q44',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Osmoregulation: Antidiuretic Hormone (ADH) and Water Homeostasis',
    questionText: `44. This item is based on the following events of maintaining water balance in the body:
I. Second coiled tubules of kidney become permeable to reabsorb more water from the kidney
II. High ADH is released into the blood
III. Produce large volume of diluted urine due to less reabsorption of water by kidney
IV. Very few ADH released to the blood
Based on the above list, which of the following numbers shows the mechanism of water balance in our body correctly? Numbers`,
    options: [
      'I and IV are for water conserving, II and III are for water removing.',
      'III and IV are for water conservation, I and II are for water removing.',
      'I and IV are for water removing, II and III are for water conserving.',
      'III and IV are for water removing, I and II are for conserving water.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• When the body is dehydrated (low blood volume/high osmolarity): High ADH is secreted (II), making the collecting duct and DCT highly permeable to water, increasing renal water reabsorption (I) → Water Conserving Mechanism (I and II).
• When the body is overhydrated: ADH secretion is inhibited (IV), decreasing tubular water reabsorption and producing large volumes of dilute urine (III) → Water Removing Mechanism (III and IV).
Therefore, III and IV are for water removing, while I and II are for conserving water.

🇪🇹 አማርኛ (Amharic):
• ውሃን ለማስቀረት (water conserving)፡ ከፍተኛ ADH ይመነጫል (II)፤ የኩላሊት ቱቦዎች ውሃን መልሰው ይመጣሉ (I)።
• ከመጠን በላይ ውሃን ለማስወገድ (water removing)፡ የADH መጠን ይቀንሳል (IV)፤ ኩላሊት ብዙ ቀጭን ሽንት ያወጣል (III)።
ስለዚህ III እና IV ውሃን ለማስወገድ ሲሆኑ፤ I እና II ውሃን በሰውነት ውስጥ ለማስቀረት ያገለግላሉ።

🌳 Afaan Oromoo:
Yeroo qaamni bishaan qusatu: ADH olaanaan gad-lakkifama (II) fi bishaan dabalataa deebi'ee xuuxama (I). Yeroo bishaan gahaan jiru ammoo ADH xiqqaatee (IV) fincaan bal'aan yaa'a (III). Kanaafuu, III fi IV bishaan dhabamsiisuuf, I fi II ammoo bishaan qusachuuf tajaajilu.`,
    hint: 'High ADH (II) promotes water reabsorption (I) to conserve water; low ADH (IV) causes dilute urine (III) to excrete excess water.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q45',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ecology: Definition of Trophic Level',
    questionText: '45. What is the trophic level? It is the',
    options: [
      'complex interaction between organisms in a food web.',
      'interaction of organisms with the abiotic components.',
      'linear feeding relationship between organisms.',
      'specific position an organism occupies in a food chain.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
A trophic level refers specifically to the functional rank or feeding position that an organism occupies within an ecological food chain or energy pyramid (e.g., primary producers at Level 1, primary consumers at Level 2, secondary consumers at Level 3, and tertiary consumers at Level 4).

🇪🇹 አማርኛ (Amharic):
ትሮፊክ ሌቨል (Trophic level) ማለት አንድ ህይወት ያለው ፍጡር በምግብ ሰንሰለት (food chain) ውስጥ የሚይዘው የተወሰነ የአመጋገብ ደረጃ ወይም ቦታ ነው።

🌳 Afaan Oromoo:
Sadarkaan soorataa (trophic level) sadarkaa ykn bakka murtaa'aa orgaanizimiin tokko daandii soorataa (food chain) keessatti qabatuudha.`,
    hint: 'A trophic level is the specific feeding position of an organism within a food chain.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q46',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Sensory Biology: Optical Path of Light through the Eye',
    questionText: '46. A grade 12 teacher demonstrated how light travelled through the eye to form an image on the retina using an eye model. Which one of the following results shows the correct sequence of this process?',
    options: [
      'Reflected light → pupil → lens → optic nerve → retina → auditory nerve → brain',
      'Reflected light → sclera → choroid → lens → retina → optic nerve → brain',
      'Reflected light → cornea → pupil → lens → retina → optic nerve → brain',
      'Reflected light → cornea → pupil → lens → retina → olfactory nerve → brain'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Light entering the human eye traverses the ocular media in the following precise sequence:
1. Reflected light enters through the transparent Cornea (refracting light).
2. Passes through the aqueous humor and the Pupil (the central aperture of the iris).
3. Enters the biconvex crystalline Lens (focusing the image).
4. Travels through the vitreous humor onto the photoreceptors of the Retina.
5. Action potentials are relayed via the Optic nerve to the visual cortex of the Brain.
Therefore, sequence C is correct.

🇪🇹 አማርኛ (Amharic):
ብርሃን በሰው አይን ውስጥ የሚያልፍበት ትክክለኛ ቅደም ተከተል፡
የተንጸባረቀ ብርሃን → ኮርኒያ (cornea) → ብሌን (pupil) → ሌንስ (lens) → ሬቲና (retina) → ኦፕቲክ ነርቭ (optic nerve) → አንጎል (brain)።

🌳 Afaan Oromoo:
Tartiiba ifti ija keessa darbu:
Iftii deebi'e → Korneyaa → Puuppilii (iilaa) → Leensii → Reetiinaa → Narvii Optikii → Sammuu.`,
    hint: 'Light passes through cornea → pupil → lens → retina, then signals travel via optic nerve to brain.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q47',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cell Biology: Functions of the Plasma Membrane',
    questionText: '47. What is the main function of the cell membrane? It controls',
    options: [
      'transport of molecules.',
      'reproduction of cells.',
      'synthesis of lipids.',
      'protein synthesis.',
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The plasma (cell) membrane is a selectively permeable phospholipid bilayer embedded with transport proteins. Its principal biological function is regulating and controlling the transport of ions, nutrients, gases, and waste molecules entering and exiting the cell via passive and active transport mechanisms.

🇪🇹 አማርኛ (Amharic):
የሴል ሜምብሬን (cell membrane) ዋና ተግባር ወደ ሴል የሚገቡትንና የሚወጡትን ንጥረ ነገሮች ዝውውር (transport of molecules) መቆጣጠር ነው።

🌳 Afaan Oromoo:
Hojiin bu'uuraa membireenii seelii daddabarsa molakiyuulotaa (transport of molecules) gara keessaatti fi alaatti to'achuudha.`,
    hint: 'The semi-permeable cell membrane controls the transport of substances into and out of the cell.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q48',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Biochemistry: Levels of Protein Structure',
    questionText: `48. A scientist isolated three different protein molecules (X, Y and Z) from a medicinal plant as follows:
X molecule - is a segment of a protein folded into alpha-helix and beta-pleated sheet.
Y molecule - is an enzyme with its protein folded into three-dimensional structure.
Z molecule - is a linear protein with specific amino acid sequence.
Which molecule contains primary, secondary and tertiary structures of protein, respectively?`,
    options: [
      'Y, Z and X',
      'Y, X and Z',
      'X, Z and Y',
      'Z, X and Y'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Matching the protein descriptions to the structural hierarchy:
• Z: The linear sequence of amino acids joined by peptide bonds corresponds to the Primary structure.
• X: Local regular spatial folding maintained by backbone hydrogen bonds into α-helices and β-pleated sheets corresponds to the Secondary structure.
• Y: The overall 3-dimensional globular folding of a polypeptide chain (characteristic of functional catalytic enzymes) corresponds to the Tertiary structure.
Therefore, the respective order (Primary, Secondary, Tertiary) is Z, X, and Y.

🇪🇹 አማርኛ (Amharic):
• ሞለኪውል Z፡ የመስመራዊ የአሚኖ አሲድ ቅደም ተከተል = የመጀመሪያ ደረጃ (Primary structure)
• ሞለኪውል X፡ አልፋ-ሄሊክስ እና ቤታ-ፕሌትድ ሺት = ሁለተኛ ደረጃ (Secondary structure)
• ሞለኪውል Y፡ ባለ 3-ልኬት (3D) ቅርጽ ያለው ኢንዛይም = ሶስተኛ ደረጃ (Tertiary structure)
ስለዚህ Primary, Secondary እና Tertiary ቅደም ተከተሉ Z, X እና Y ነው።

🌳 Afaan Oromoo:
• Z: Tartiiba qajeelaa asiidota aminoo = Primary structure
• X: Kottaa alpha-helix fi beta-sheet = Secondary structure
• Y: Boca 3D qabaachuu inzaayimii = Tertiary structure
Tartiibni isaanii Z, X fi Y dha.`,
    hint: 'Linear amino acid sequence = Primary (Z); α-helix/β-sheet = Secondary (X); 3D enzyme = Tertiary (Y).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q49',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Laboratory Techniques: Testing for Starch in Plant Leaves',
    questionText: '49. A student, following appropriate laboratory procedures, testing for the presence of starch in green plant leaves. He immersed the leaf in hot water for 30 seconds in one of the steps just before adding iodine. Why did he immerse the leaf into the hot water? To',
    options: [
      'remove the debris and facilitate gas exchange',
      'decolorize the leaf and make it easy for the test',
      'denature the enzyme and make the leaf permeable',
      'improve the visibility of various pigment colors'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Immersing the green leaf into boiling/hot water for 30–60 seconds accomplishes two vital physiological objectives:
1. It immediately kills the cells and denatures internal plant enzymes (halting all ongoing chemical reactions, including starch degradation).
2. It breaks down the waxy cuticle and cell membranes, rendering cell walls and membranes fully permeable so that ethanol (for chlorophyll extraction) and later iodine stain can freely penetrate into the mesophyll cells to react with stored starch.

🇪🇹 አማርኛ (Amharic):
የቅጠል ስታርችን ለመመርመር ቅጠሉን በሚፈላ ውሃ ውስጥ ለ30 ሰከንዶች የመንከር አላማ ህዋሳቱን በመግደል ኢንዛይሞችን ማቦዘን (denature the enzyme) እና የሴል ሜምብሬን ክፍትና በቀላሉ አዮዲን ዘልቆ የሚገባበት እንዲሆን (make the leaf permeable) ማድረግ ነው።

🌳 Afaan Oromoo:
Baala bishaan ho'aa keessa daqiiqaa muraasaaf kaa'uun inzaayimoota baalichaa ajjeesuun (denature) fi membireeniin seelichaa ayoodiinii akka seensisuuf (permeable taasisuuf) oola.`,
    hint: 'Boiling water halts enzymatic reactions by denaturing enzymes and permeabilizes the leaf tissues.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q50',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Human Health & Substance Abuse: Physiological and Social Impacts of Alcohol',
    questionText: '50. Which one of the following statements explains the effects of drinking too much alcohol? It',
    options: [
      'exposes to constipation and esophageal disease.',
      'makes hyperactive and constricts the blood vessels in the heart.',
      'enables to make the right decision without fear.',
      'exposes to convict domestic violence incidents.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Chronic or acute excessive alcohol consumption acts as a central nervous system depressant that disrupts neurotransmission (enhancing GABA and depressing glutamate). This leads to frontal lobe impairment, severe disinhibition, loss of emotional control, and impaired risk assessment, which statistically and clinically correlates with a drastically heightened incidence of domestic violence, aggression, and criminal offenses.

🇪🇹 አማርኛ (Amharic):
ከመጠን በላይ አልኮል መጠጣት የአንጎልን ማሰብና ራስን የመቆጣጠር አቅም በማዳከም ለቤት ውስጥ ጥቃትና ሁከት (domestic violence incidents) መከሰት ዋነኛ ምክንያት ይሆናል።

🌳 Afaan Oromoo:
Alkoolii garmalee dhuguun sammuu waan adoochuuf to'annoo ofii dhabsiisuun gochoota jeequmsaa fi miidhaa maatii (domestic violence)tiif nama saaxila.`,
    hint: 'Excess alcohol impairs behavioral inhibition and judgment, strongly correlating with domestic violence.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
