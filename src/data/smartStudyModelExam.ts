import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const SMART_STUDY_MODEL_EXAM_QUESTIONS: Question[] = [
  {
    id: 'model-exam-q1-math',
    subject: 'Smart Study Model Exam',
    year: '2017 E.C. Model Exam',
    topic: 'Mathematics: Differential Calculus & Optimization',
    questionText: '1. A rectangular agricultural field in the Awash Basin is to be fenced on three sides using 600 meters of fencing wire, with the fourth side bounded by an irrigation canal. What is the maximum possible area (in square meters) that can be enclosed?',
    options: [
      '45,000 m²',
      '90,000 m²',
      '30,000 m²',
      '60,000 m²'
    ],
    correctOptionIndex: 0,
    explanation: `Detailed Mathematical Derivation:
Let the two perpendicular sides have length x meters, and the side parallel to the canal have length y meters.
1. Constraint equation:
2x + y = 600  ==>  y = 600 - 2x
2. Area function:
A(x) = x · y = x(600 - 2x) = 600x - 2x²
3. Differentiate with respect to x and set to 0 for maximum:
A'(x) = 600 - 4x = 0
4x = 600  ==>  x = 150 meters
4. Calculate side y and maximum area:
y = 600 - 2(150) = 300 meters
Maximum Area A_max = 150 m × 300 m = 45,000 m².

[Amharic Explanation - አማርኛ]:
የታጠረውን መሬት ስፋት በሂሳብ ማመቻቸት (Optimization):
ሁለቱ ጎኖች x ቢሆኑ እና አንድ ጎን y ቢሆን:
2x + y = 600 ==> y = 600 - 2x
ስፋት A(x) = x(600 - 2x) = 600x - 2x²
የስፋት ደሪቬቲቭ (derivative) ወደ ዜሮ ሲቀየር:
A'(x) = 600 - 4x = 0 ==> x = 150 ሜትር
ስለዚህ y = 300 ሜትር ሲሆን ከፍተኛው ስፋት A = 150 × 300 = 45,000 ካሬ ሜትር ይሆናል።

[Afaan Oromoo Explanation]:
Bal\'ina lafa qonnaa shallaguuf (Optimization):
2x + y = 600 ==> y = 600 - 2x
A(x) = x(600 - 2x) = 600x - 2x²
Diriiveetivii (derivative) isaa gara eerootti jijjiiruun:
A'(x) = 600 - 4x = 0 ==> x = 150 m
Kanaaf y = 300 m ta\'a, bal\'inni olaanaan 150 × 300 = 45,000 m² ta\'a.`,
    hint: 'Set up the perimeter equation 2x + y = 600, express Area as A(x) = x(600 - 2x), and find the vertex where A\'(x) = 0.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'model-exam-q2-physics',
    subject: 'Smart Study Model Exam',
    year: '2017 E.C. Model Exam',
    topic: 'Physics: Electromagnetic Induction & Faraday\'s Law',
    questionText: '2. A square wire coil of 200 turns and side length 10 cm is placed perpendicular to a uniform magnetic field of 0.40 T. If the magnetic field collapses to zero uniformly in 0.05 seconds, what is the magnitude of the electromotive force (EMF) induced across the coil terminals?',
    options: [
      '16.0 V',
      '8.0 V',
      '32.0 V',
      '4.0 V'
    ],
    correctOptionIndex: 0,
    explanation: `Step-by-step Physics Solution:
1. Area of the square coil:
A = (0.10 m)² = 0.01 m²
2. Initial magnetic flux per turn:
Φ_initial = B · A = 0.40 T × 0.01 m² = 0.004 Wb (Webers)
3. Change in magnetic flux:
ΔΦ = Φ_final - Φ_initial = 0 - 0.004 = -0.004 Wb
4. According to Faraday's Law of Induction:
|ε| = N · |ΔΦ / Δt|
|ε| = 200 turns × (0.004 Wb / 0.05 s)
|ε| = 200 × 0.08 V = 16.0 Volts.

[Amharic Explanation - አማርኛ]:
እንደ ፋራዳይ የኤሌክትሮማግኔቲክ ኢንዳክሽን ህግ (Faraday\'s Law):
የቦቢኑ ስፋት A = (0.10)² = 0.01 m²
የመግነጢሳዊ ፍሰት ለውጥ ΔΦ = 0.40 × 0.01 = 0.004 Wb
የኢንዲዩስድ ኢ.ኤም.ኤፍ (EMF) መጠን:
|ε| = N × (ΔΦ / Δt) = 200 × (0.004 / 0.05) = 16.0 ቮልት።

[Afaan Oromoo Explanation]:
Seera Faradaay (Faraday\'s Law) fayyadamuun:
Bal\'ina coil: A = 0.01 m²
Jijjiirama flux maagneetii: ΔΦ = 0.004 Wb
Humna EMF uumamu:
|ε| = N × (ΔΦ / Δt) = 200 × (0.004 / 0.05) = 16.0 V ta\'a.`,
    hint: 'Use Faraday\'s Law: EMF = N * (ΔΦ / Δt), where magnetic flux Φ = B * A.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'model-exam-q3-chem',
    subject: 'Smart Study Model Exam',
    year: '2017 E.C. Model Exam',
    topic: 'Chemistry: Chemical Equilibrium & Le Chatelier\'s Principle',
    questionText: '3. Consider the exothermic Haber-Bosch synthesis reaction in equilibrium inside a rigid reactor vessel: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  [ΔH = -92.2 kJ/mol]. Which of the following simultaneous interventions will maximize the equilibrium yield of ammonia (NH₃)?',
    options: [
      'Decreasing the temperature and increasing total gas pressure',
      'Increasing the temperature and decreasing total gas pressure',
      'Increasing the temperature and adding a solid catalyst',
      'Decreasing total gas pressure while continuously removing N₂'
    ],
    correctOptionIndex: 0,
    explanation: `Le Chatelier\'s Principle Analysis:
1. Temperature Effect:
Because the forward reaction is exothermic (ΔH < 0), heat acts as a product. Lowering the reaction temperature shifts the equilibrium in the forward direction (towards products) to produce heat, thereby increasing NH₃ yield.
2. Pressure Effect:
Reactant side has 1 + 3 = 4 moles of gas, while product side has 2 moles of gas. Increasing pressure favors the side with fewer gas moles (forward direction to reduce stress/volume), driving more conversion of N₂ and H₂ into NH₃.
Conclusion: Decreasing temperature and increasing pressure maximizes ammonia synthesis yield.

[Amharic Explanation - አማርኛ]:
እንደ ለ-ሻተሊየር መርህ (Le Chatelier\'s Principle):
1. ሙቀትን መቀነስ፡ ሪአክሽኑ ሙቀት ሰጪ (exothermic) ስለሆነ ሙቀት ሲቀንስ ሚዛኑ ወደ አሞኒያ (NH₃) አፈጣጠር ያዘነብላል።
2. ጫናን መጨመር፡ በግራ በኩል 4 ሞል ጋዝ ሲኖር በቀኝ በኩል 2 ሞል ጋዝ ብቻ ስላለ፣ ጫና ሲጨምር ወደ አነስተኛ ሞል ቁጥር (ወደ NH₃) ይገፋል።
ስለዚህ ሙቀትን መቀነስ እና ጫናን መጨመር የአሞኒያን ምርት በከፍተኛ ሁኔታ ያሳድጋል።

[Afaan Oromoo Explanation]:
Akka seera Le Chatelier\'tti:
Re\'aakshiniin kun ho\'a kan gadi lakkisu (exothermic) waan ta\'eef, teempireechara gadi buusuun oomisha NH₃ dabala. Dhiibbaa dabaluun ammoo gara molii xiqqaatti (gara mirgaatti) geessa. Kanaaf teempireechara hir\'isuufi dhiibbaa dabaluun deebii sirriidha.`,
    hint: 'Exothermic reactions favor products at lower temperatures; higher pressure shifts equilibrium toward fewer gaseous moles (4 moles -> 2 moles).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'model-exam-q4-bio',
    subject: 'Smart Study Model Exam',
    year: '2017 E.C. Model Exam',
    topic: 'Biology: Molecular Genetics & DNA Replication Enzymes',
    questionText: '4. During eukaryotic DNA replication, which enzyme is specifically responsible for catalyzing the formation of phosphodiester bonds to join adjacent Okazaki fragments on the lagging strand?',
    options: [
      'DNA Ligase',
      'DNA Polymerase I',
      'Helicase',
      'Topoisomerase (Gyrase)'
    ],
    correctOptionIndex: 0,
    explanation: `Biological Mechanism:
• DNA Ligase: Catalyzes the crucial final step of joining the Okazaki fragments together by forming covalent phosphodiester bonds between the 3'-hydroxyl group of one nucleotide fragment and the 5'-phosphate group of the adjacent fragment.
• Helicase: Unwinds the double helix at the replication fork.
• Topoisomerase: Relieves supercoiling ahead of the replication fork.
• DNA Polymerase III/I: Synthesizes the complementary strand and removes RNA primers.

[Amharic Explanation - አማርኛ]:
በዲ ኤን ኤ (DNA) ድግግሞሽ ወቅት በኋለኛው ገመድ (lagging strand) ላይ የተቆራረጡትን ኦካዛኪ ፍራግመንቶች (Okazaki fragments) በፎስፎዲስተር ቦንድ (phosphodiester bond) አገናኝቶ አንድ ወጥ ገመድ የሚያደርገው ኢንዛይም 'DNA Ligase' ይባላል።

[Afaan Oromoo Explanation]:
Yeroo kooppii DNA (DNA replication), caccabaa Okazaki (Okazaki fragments) kanneen lagging strand irratti uumaman walitti qabsiisuuf kan tajaajilu inzaayimii 'DNA Ligase' dha.`,
    hint: 'Think of the enzyme as molecular "glue" that seals the nicks in the sugar-phosphate backbone.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'model-exam-q5-econ',
    subject: 'Smart Study Model Exam',
    year: '2017 E.C. Model Exam',
    topic: 'Economics: Macroeconomic Policy & National Income Determination',
    questionText: '5. In a closed Keynesian macroeconomic model with an economy operating below full employment, the marginal propensity to consume (MPC) is 0.80. If the government increases public infrastructure investment expenditure by 40 billion ETB, what will be the resulting total expansion in Equilibrium Real GDP (National Income)?',
    options: [
      '200 billion ETB',
      '160 billion ETB',
      '80 billion ETB',
      '50 billion ETB'
    ],
    correctOptionIndex: 0,
    explanation: `Keynesian Multiplier Calculation:
1. Formula for the Autonomous Expenditure Multiplier (k):
k = 1 / (1 - MPC) = 1 / MPS
Given MPC = 0.80:
k = 1 / (1 - 0.80) = 1 / 0.20 = 5
2. Total change in Equilibrium National Income (ΔY):
ΔY = k × ΔG
ΔY = 5 × 40 billion ETB = 200 billion ETB.
Hence, an initial injection of 40 billion ETB generates a total GDP expansion of 200 billion ETB through successive rounds of re-spending.

[Amharic Explanation - አማርኛ]:
የኬንሲያን መልቲፕላየር (Keynesian Multiplier) ቀመር፡
k = 1 / (1 - MPC) = 1 / (1 - 0.80) = 1 / 0.20 = 5
አጠቃላይ የብሔራዊ ገቢ (GDP) ጭማሪ:
ΔY = k × ΔG = 5 × 40 ቢሊዮን ብር = 200 ቢሊዮን ብር ይሆናል።

[Afaan Oromoo Explanation]:
Herrega Baay\'isaa Keensiyaanii (Keynesian Multiplier):
k = 1 / (1 - MPC) = 1 / (1 - 0.80) = 5
Guddina galii biyyaalessaa (GDP):
ΔY = 5 × 40 Biiliyoona Birrii = 200 Biiliyoona Birrii ta\'a.`,
    hint: 'First compute the multiplier k = 1 / (1 - MPC), then multiply by the government expenditure injection ΔG.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'model-exam-q6-aptitude',
    subject: 'Smart Study Model Exam',
    year: '2017 E.C. Model Exam',
    topic: 'Aptitude: Numerical Reasoning & Series Logic',
    questionText: '6. Determine the missing logical term in the following numerical progression sequence: 3, 7, 15, 31, 63, [ ? ], 255.',
    options: [
      '127',
      '125',
      '129',
      '131'
    ],
    correctOptionIndex: 0,
    explanation: `Pattern Recognition & Sequence Rules:
Examine the recursive relations between consecutive terms:
• Term 1: 3
• Term 2: 3 × 2 + 1 = 7 (or 2² - 1 = 3, 2³ - 1 = 7)
• Term 3: 7 × 2 + 1 = 15 (or 2⁴ - 1 = 15)
• Term 4: 15 × 2 + 1 = 31 (or 2⁵ - 1 = 31)
• Term 5: 31 × 2 + 1 = 63 (or 2⁶ - 1 = 63)
• Term 6: 63 × 2 + 1 = 127 (or 2⁷ - 1 = 128 - 1 = 127)
Check next term: 127 × 2 + 1 = 255 (or 2⁸ - 1 = 255).
The missing number is unambiguously 127.

[Amharic Explanation - አማርኛ]:
የቅደም ተከተሉ ሎጂክ፡
እያንዳንዱ ቁጥር በ 2 ተባዝቶ 1 ሲደመርበት የሚቀጥለው ይገኛል፡
63 × 2 + 1 = 126 + 1 = 127። (እንዲሁም 2^(n+1) - 1 ቀመርን ይከተላል፡ 2⁷ - 1 = 127)።

[Afaan Oromoo Explanation]:
Pattarnii lakkoofsaa:
Tokkoon tokkoon lakkoofsaa 2\'n baay\'atee 1 irratti ida\'ama:
63 × 2 + 1 = 127 ta\'a.`,
    hint: 'Notice each term is twice the previous term plus 1: T(n) = 2 * T(n-1) + 1.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'model-exam-q7-eng',
    subject: 'Smart Study Model Exam',
    year: '2017 E.C. Model Exam',
    topic: 'English: Advanced Grammatical Structures & Inversion',
    questionText: '7. Select the grammatically flawless sentence demonstrating standard formal English subject-auxiliary inversion:',
    options: [
      'Hardly had the national examination commenced when the invigilator noticed a power outage.',
      'Hardly the national examination had commenced than the invigilator noticed a power outage.',
      'Hardly did the national examination commenced when the invigilator noticed a power outage.',
      'Hardly had the national examination commenced then the invigilator noticed a power outage.'
    ],
    correctOptionIndex: 0,
    explanation: `Grammatical Rule of Negative Adverbial Inversion:
When negative or restrictive adverbials such as "Hardly", "Scarcely", or "Barely" head a clause for emphasis:
1. Inverted word order is mandatory: Auxiliary verb precedes the subject ("had" + subject + past participle).
2. The correct correlative conjunction pairing is "Hardly ... when" (NOT "than" or "then").
Therefore: "Hardly had the national examination commenced when..." is the only correct standard English construction.

[Amharic Explanation - አማርኛ]:
በእንግሊዝኛ ሰዋሰው 'Negative Inversion' ህግ መሰረት፡
አረፍተ ነገር በ 'Hardly', 'Scarcely' ሲጀምር ረዳት ግሱ (had) ከባለቤቱ (subject) ይቀድማል፣ እንዲሁም አጣማሪ ቃሉ ሁልጊዜ 'when' እንጂ 'than' ወይም 'then' አይሆንም።

[Afaan Oromoo Explanation]:
Seera \'Negative Inversion\' Afaan Ingiliffaa keessatti:
Yoo himni \'Hardly\' dhaan jalqabe, gargaaraan gochimaa (had) dursaa ta\'ee dhufeeti jechi walitti qabsiisu ammoo \'when\' ta\'a.`,
    hint: 'Correlative pairing rule: "Hardly ... when" and "No sooner ... than". The auxiliary verb must precede the subject.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'model-exam-q8-history',
    subject: 'Smart Study Model Exam',
    year: '2017 E.C. Model Exam',
    topic: 'History: Ethiopian Diplomatic History & The Wuchale Treaty',
    questionText: '8. What was the central controversy surrounding Article XVII (17) of the 1889 Treaty of Wuchale between Emperor Menelik II and Count Pietro Antonelli representing Italy?',
    options: [
      'The Amharic version stated Ethiopia \'could\' use Italy\'s good offices, while the Italian text made it mandatory, implying an Italian protectorate',
      'The Amharic version ceded the port of Assab, while the Italian text claimed Massawa exclusively',
      'The Italian version recognized full Ethiopian sovereignty over Eritrea, while the Amharic version surrendered the highlands',
      'The treaty disputed the border coordinates along the Mereb River without specifying demarcation dates'
    ],
    correctOptionIndex: 0,
    explanation: `Historical Background:
Article XVII of the Treaty of Wuchale (signed May 2, 1889):
• In the Amharic version: Emperor Menelik II could optionally utilize Italian diplomatic channels for relations with foreign powers if he wished ("ይቻላቸዋል" - permission/option).
• In the fraudulent Italian text: Italy claimed that Ethiopia was legally obligated to conduct all foreign relations through Rome, asserting an imperial protectorate over Ethiopia.
When Emperor Menelik discovered this deceptive discrepancy, he abrogated the treaty in 1893, directly leading to the confrontation that culminated in the historic Ethiopian victory at the Battle of Adwa on March 1, 1896.

[Amharic Explanation - አማርኛ]:
የውጫሌ ውል አንቀጽ 17 ውዝግብ፡
በአማርኛው ቅጂ ንጉሰ ነገስት ዳግማዊ ምኒልክ ከውጭ ሀገራት መንግስታት ጋር ግንኙነት ማድረግ ሲፈልጉ በኢጣሊያ እገዛ ማድረግ "ይቻላቸዋል" (አማራጭ) የሚል ሲሆን፤ በጣሊያንኛው ቅጂ ግን ኢትዮጵያ በጣሊያን ሞግዚትነት ስር እንደገባች አድርገው "ይገደዳሉ" (mandatory) በማለት ሉዓላዊነትን ለመንጠቅ ሞክረዋል።

[Afaan Oromoo Explanation]:
Waliigaltee Wucaalee keeyyata 17ffaa irratti:
Afaan Amaaraatiin Itoophiyaan yoo barbaadde gargaarsa Xaaliyaaniitiin hariiroo alaa gochuu \'dandeessi\' kan jedhu yoo ta\'u, Afaan Xaaliyaaniin garuu Itoophiyaan dirqamatti gargaarsa Xaaliyaaniitiin raawwatti jedhee gabrummaa itti fe\'uuf yaale.`,
    hint: 'Article 17 had two conflicting translations regarding foreign relations: discretionary option in Amharic vs obligatory protectorate in Italian.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'model-exam-q9-geo',
    subject: 'Smart Study Model Exam',
    year: '2017 E.C. Model Exam',
    topic: 'Geography: Remote Sensing & GIS Spatial Resolution',
    questionText: '9. In satellite remote sensing applications used for Ethiopian environmental monitoring, what does \'Spatial Resolution\' fundamentally quantify?',
    options: [
      'The smallest ground dimension or geographic area represented by an individual pixel on the sensor image',
      'The frequency of time that elapses between successive satellite revisits to the exact same geographical coordinates',
      'The specific number and width of electromagnetic spectral bands recorded by the onboard radiometer',
      'The sensitivity of the satellite sensor to minute variations in electromagnetic radiation brightness'
    ],
    correctOptionIndex: 0,
    explanation: `Remote Sensing Core Principles:
• Spatial Resolution: Measures the pixel size representing the smallest ground surface area resolvable by the optical sensor (e.g. Landsat has 30m spatial resolution; Sentinel-2 has 10m).
• Temporal Resolution: The revisit interval frequency of the satellite.
• Spectral Resolution: The number, location, and bandwidth of the electromagnetic spectrum intervals sampled.
• Radiometric Resolution: The bit-depth sensitivity to subtle radiance differences (e.g., 8-bit = 256 gray levels; 12-bit = 4096 levels).

[Amharic Explanation - አማርኛ]:
በሪሞት ሴንሲንግ (Remote Sensing) ውስጥ 'Spatial Resolution' ማለት ሳተላይቱ የሚያነሳው አንድ ፒክስል (pixel) በምድር ገጽ ላይ የሚሸፍነውን አነስተኛ ስፋት ወይም መጠን የሚለካበት ነው።

[Afaan Oromoo Explanation]:
Saayinsii \'Remote Sensing\' keessatti \'Spatial Resolution\' jechuun bal\'ina lafaa xiqqaa piiksiliin tokko bakka bu\'u (ground dimension) shallaguudha.`,
    hint: 'Spatial refers to physical ground area per pixel; temporal refers to revisit time; spectral refers to wavelength bands.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  }
];
