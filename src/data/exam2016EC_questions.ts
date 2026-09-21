import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const EXAM_2016_EC_QUESTIONS: Question[] = [
  // ==========================================
  // MATHEMATICS (2016 E.C.)
  // ==========================================
  {
    id: 'math-2016-q1',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Differential Calculus: Derivatives of Trigonometric Functions',
    questionText: '1. What is the derivative of f(x) = sin(3x) + cos(2x) with respect to x?',
    options: [
      '3 cos(3x) - 2 sin(2x)',
      'cos(3x) - sin(2x)',
      '-3 cos(3x) + 2 sin(2x)',
      '3 sin(3x) + 2 cos(2x)'
    ],
    correctOptionIndex: 0,
    explanation: `Using the Chain Rule for differentiation:
• d/dx [sin(3x)] = 3 · cos(3x)
• d/dx [cos(2x)] = -2 · sin(2x)
Combining the two derivatives yields:
f'(x) = 3 cos(3x) - 2 sin(2x).`,
    hint: 'Apply d/dx [sin(kx)] = k cos(kx) and d/dx [cos(kx)] = -k sin(kx).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q2',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Integral Calculus: Definite Integrals',
    questionText: '2. Evaluate the definite integral: Integral from 0 to 2 of (3x² - 4x + 5) dx.',
    options: [
      '10',
      '8',
      '14',
      '12'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Find the indefinite antiderivative:
F(x) = x³ - 2x² + 5x
Step 2: Evaluate from x = 0 to x = 2:
F(2) = (2)³ - 2(2)² + 5(2) = 8 - 8 + 10 = 10
F(0) = 0
F(2) - F(0) = 10 - 0 = 10.`,
    hint: 'Integrate term-by-term to get x³ - 2x² + 5x, then evaluate at x = 2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q3',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Vectors: Dot Product and Angle Between Vectors',
    questionText: '3. If vector u = (3, 4) and vector v = (4, -3), what is the dot product u · v and the geometric relationship between the vectors?',
    options: [
      '0, they are perpendicular (orthogonal).',
      '24, they are parallel.',
      '0, they are parallel.',
      '-7, they are acute.'
    ],
    correctOptionIndex: 0,
    explanation: `Dot product calculation:
u · v = (3)(4) + (4)(-3) = 12 - 12 = 0.
When the dot product of two non-zero vectors is zero, the angle between them is 90° (cos θ = 0), which means they are perpendicular (orthogonal).`,
    hint: 'u · v = ux · vx + uy · vy. If result is 0, the vectors are orthogonal.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // PHYSICS (2016 E.C.)
  // ==========================================
  {
    id: 'phys-2016-q1',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Mechanics: Work-Energy Theorem & Kinetic Energy',
    questionText: '4. A 2 kg object initially moving at 4 m/s accelerates to a final velocity of 10 m/s. What is the total net work done on the object?',
    options: [
      '84 J',
      '100 J',
      '16 J',
      '68 J'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
By the Work-Energy Theorem:
Work done = Change in Kinetic Energy (ΔKE)
W = 1/2 · m · (v_final² - v_initial²)
W = 1/2 · (2 kg) · (10² - 4²)
W = 1 · (100 - 16) = 84 Joules.

🇪🇹 አማርኛ (Amharic):
በስራ እና ሃይል ህግ (Work-Energy Theorem) መሰረት፡
የተሰራው ስራ = የካይኔቲክ ኢነርጂ ለውጥ
W = 1/2 · m · (vf² - vi²) = 1/2 · (2) · (100 - 16) = 84 ጁል (J)።

🌳 Afaan Oromoo:
Akka seera 'Work-Energy Theorem'tti:
Hojii hojjetame = Jijjiirama anniisaa sochii (ΔKE)
W = 1/2 · (2 kg) · (10² - 4²) = 100 - 16 = 84 J.`,
    hint: 'W = 1/2 · m · (vf² - vi²).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phys-2016-q2',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Electromagnetism: Faraday\'s Law of Electromagnetic Induction',
    questionText: '5. According to Faraday\'s law of induction, the induced electromotive force (EMF) in a closed coil is directly proportional to:',
    options: [
      'The time rate of change of magnetic flux through the coil.',
      'The static magnitude of the magnetic field.',
      'The electric resistance of the conducting wire.',
      'The total surface area regardless of magnetic field.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Faraday\'s Law states that the magnitude of the induced electromotive force (EMF) in any closed circuit is directly proportional to the time rate of change of magnetic flux (dΦB/dt) passing through the circuit: EMF = -N (dΦB/dt).

🇪🇹 አማርኛ (Amharic):
የፋራዴይ ህግ (Faraday's Law) እንደሚደነግገው በሽቦ ዙሪያ የሚፈጠረው የኤሌክትሪክ ቮልቴጅ (induced EMF) በቀጥታ ተመጣጣኝ የሆነው የማግኔቲክ ፍሰት ለውጥ ፍጥነት (rate of change of magnetic flux) ጋር ነው።

🌳 Afaan Oromoo:
Seerri Faaraadaay akka jedhutti, humna elektiriikii uumamu (induced EMF) kan murteessu saffisa jijjiirama dhangala\'aa maagneetiiti (rate of change of magnetic flux).`,
    hint: 'Induced EMF equals the negative rate of change of magnetic flux with time.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // CHEMISTRY (2016 E.C.)
  // ==========================================
  {
    id: 'chem-2016-q1',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Equilibrium: Le Chatelier\'s Principle in Haber Process',
    questionText: '6. For the exothermic synthesis of ammonia: N2(g) + 3H2(g) <=> 2NH3(g) + Heat, which change will shift the equilibrium position to the right (toward more NH3 product)?',
    options: [
      'Increasing pressure and decreasing temperature',
      'Decreasing pressure and increasing temperature',
      'Adding a catalyst only',
      'Increasing volume of the container'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
By Le Chatelier\'s Principle:
1. Increasing pressure shifts equilibrium toward the side with fewer gas moles (4 moles on reactant side vs. 2 moles on product side -> shifts right).
2. Decreasing temperature favors the exothermic forward direction (shifts right).
Therefore, increasing pressure and decreasing temperature maximize ammonia yield.

🇪🇹 አማርኛ (Amharic):
በሌ ሻተሊየር መርህ (Le Chatelier's Principle) መሰረት፡
1. ጫናን (pressure) መጨመር ወደ አነስተኛ የጋዝ ሞል (ወደ ቀኝ) ያዛውረዋል።
2. ሙቀትን መቀነስ ወደ ኤክሶተርሚክ (ወደ ቀኝ) አቅጣጫ እንዲያመራ ያደርጋል። ስለዚህ ሁለቱም ለውጦች የአሞንያ ምርትን ይጨምራሉ።

🌳 Afaan Oromoo:
Akka qajeelfama \'Le Chatelier\'tti: Dhiibbaa dabaluun fi ho\'a hir\'isuun oomisha amooniyaa (NH3) gara mirgaatti dabala.`,
    hint: 'High pressure favors fewer gas moles (4 -> 2) and cooling favors exothermic reactions.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q2',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Electrochemistry: Standard Cell Potential Calculation',
    questionText: '7. A galvanic cell consists of Zn/Zn²⁺ (E° = -0.76 V) and Cu/Cu²⁺ (E° = +0.34 V). What is the standard cell potential (E°cell)?',
    options: [
      '+1.10 V',
      '+0.42 V',
      '-1.10 V',
      '+0.76 V'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Standard cell potential is calculated as:
E°cell = E°cathode (reduction) - E°anode (oxidation)
Here, Cu²⁺ is reduced at the cathode (+0.34 V) and Zn is oxidized at the anode (-0.76 V):
E°cell = (+0.34 V) - (-0.76 V) = +0.34 + 0.76 = +1.10 V.

🇪🇹 አማርኛ (Amharic):
የሴል ቮልቴጅ ስሌት፡
E°cell = E°cathode - E°anode
E°cell = (+0.34) - (-0.76) = +1.10 ቮልት (V)።

🌳 Afaan Oromoo:
E°cell = E°cathode - E°anode
E°cell = 0.34 V - (-0.76 V) = +1.10 V ta\'a.`,
    hint: 'E°cell = E°cathode - E°anode = 0.34 - (-0.76).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // BIOLOGY (2016 E.C.)
  // ==========================================
  {
    id: 'bio-2016-q1',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Molecular Genetics: DNA Transcription and RNA Polymerase',
    questionText: '8. During transcription in eukaryotic cells, which enzyme is responsible for synthesizing pre-mRNA using the DNA template strand?',
    options: [
      'RNA Polymerase II',
      'DNA Polymerase III',
      'DNA Ligase',
      'Reverse Transcriptase'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In eukaryotic cells, RNA Polymerase II is the primary enzyme that synthesizes precursor messenger RNA (pre-mRNA) by reading the DNA template strand in the 3' to 5' direction and polymerizing ribonucleotides in the 5' to 3' direction.

🇪🇹 አማርኛ (Amharic):
በዩካርዮቲክ ሴሎች ውስጥ የዲኤንኤን አብነት (template) አንብቦ የሜሴንጀር አርኤንኤ (mRNA) ሰንሰለትን የሚገነባው ዋናው ኢንዛይም አርኤንኤ ፖሊመሬዝ 2 (RNA Polymerase II) ነው።

🌳 Afaan Oromoo:
Seelota yuukaariyootii keessatti adeemsa tiraaniskiripshinii kan gaggeessuu fi mRNA kan uumu inzaayimii \'RNA Polymerase II\' dha.`,
    hint: 'RNA Polymerase II transcribes protein-coding genes into mRNA.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q2',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Human Physiology: Endocrine System & Blood Glucose Regulation',
    questionText: '9. When blood glucose concentration rises above normal physiological levels after a meal, which hormone is secreted by the beta cells of the islets of Langerhans?',
    options: [
      'Insulin',
      'Glucagon',
      'Adrenaline',
      'Cortisol'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Beta cells located in the pancreatic islets of Langerhans synthesize and secrete Insulin in response to elevated blood glucose levels. Insulin stimulates cellular glucose uptake and glycogen synthesis (glycogenesis) in liver and skeletal muscle cells to restore normal blood glucose.

🇪🇹 አማርኛ (Amharic):
ከምግብ በኋላ በደም ውስጥ የስኳር መጠን ሲጨምር፣ በቆሽት (pancreas) ውስጥ ከሚገኙ የቤታ ሴሎች የሚመነጨው ሆርሞን ኢንሱሊን (Insulin) ይባላል።

🌳 Afaan Oromoo:
Yeroo sukkaarri dhiiga keessaa dabalu seelonni beetaa paankiriyaasii keessaa hoormoonii inwuliinii (insulin) maddisiisuun gara sadarkaa sirriitti deebisu.`,
    hint: 'Insulin lowers elevated blood glucose; glucagon raises low blood glucose.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // ENGLISH (2016 E.C.)
  // ==========================================
  {
    id: 'eng-2016-q1',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Subjunctive Mood & Formal Wishes',
    questionText: '10. It is essential that every student ______ present at the national examination hall before 8:00 AM.',
    options: [
      'be',
      'is',
      'was',
      'are'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In formal English grammar, mandatory expressions with adjectives like "essential", "crucial", or "vital" followed by a "that"-clause trigger the present subjunctive mood, which requires the base form of the verb (bare infinitive "be", regardless of the singular subject "every student").

🇪🇹 አማርኛ (Amharic):
በእንግሊዝኛ ሰዋሰው "It is essential that..." የሚለው አገላለጽ ሰብጀንክቲቭ ሙድ (Subjunctive mood) የሚፈልግ በመሆኑ የግሱ መሰረታዊ ቅርጽ (Base form "be") መመረጥ አለበት።

🌳 Afaan Oromoo:
Seera afaan Ingiliffaa \'Subjunctive mood\' keessatti himoota "It is essential that..." jedhaniif gochi fayyadaman boca bu\'uuraa (base form "be") ta\'a.`,
    hint: 'Formal mandatory subjunctive clauses take the bare infinitive "be".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // SCHOLASTIC APTITUDE (2016 E.C.)
  // ==========================================
  {
    id: 'apt-2016-q1',
    subject: 'Aptitude',
    year: '2016 E.C.',
    topic: 'Quantitative Reasoning: Number Sequences and Difference Patterns',
    questionText: '11. Find the missing term in the sequence: 3, 7, 15, 31, 63, ___',
    options: [
      '127',
      '126',
      '128',
      '125'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Pattern analysis: Each term is obtained by multiplying the previous term by 2 and adding 1 (or adding 2^(n+1)):
• 3 · 2 + 1 = 7
• 7 · 2 + 1 = 15
• 15 · 2 + 1 = 31
• 31 · 2 + 1 = 63
• 63 · 2 + 1 = 127.

🇪🇹 አማርኛ (Amharic):
የቁጥሮቹ ቅደም ተከተል ህግ፡ እያንዳንዱ ቁጥር በ 2 ተባዝቶ 1 ሲደመርበት የሚቀጥለው ይገኛል፡
(63 × 2) + 1 = 126 + 1 = 127።

🌳 Afaan Oromoo:
Heera tartiibichaa: Lakkoofsa darbe lamaan baay\'isanii tokko irratti dabaluu:
(63 × 2) + 1 = 127 ta\'a.`,
    hint: 'Rule: multiply by 2 and add 1 (2x + 1).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // HISTORY (2016 E.C.)
  // ==========================================
  {
    id: 'hist-2016-q1',
    subject: 'History',
    year: '2016 E.C.',
    topic: 'Ethiopian History: The Battle of Adwa (1896)',
    questionText: '12. Which article of the 1889 Treaty of Wuchale contained a deliberate Italian mistranslation that served as the primary cause for the 1896 Battle of Adwa?',
    options: [
      'Article XVII (17)',
      'Article III (3)',
      'Article XII (12)',
      'Article VII (7)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Article XVII of the Treaty of Wuchale (1889) caused the confrontation: the Italian text stated that Ethiopia was obliged to conduct foreign relations through Italy (making Ethiopia an Italian protectorate), whereas the Amharic version stated Ethiopia "may" use Italy's good offices at its own option.

🇪🇹 አማርኛ (Amharic):
ለ1896ቱ የዓድዋ ጦርነት ዋነኛ መንስኤ የሆነው በውጫሌ ውል ላይ ሆን ተብሎ የተዛባው አንቀጽ 17 (Article XVII) ነበር። በአማርኛው "መጠቀም ይቻላቸዋል" ሲል በጣሊያንኛው ግን "ይገደዳሉ" በማለት የቅኝ ግዛት ለማድረግ ተሞክሮ ነበር።

🌳 Afaan Oromoo:
Waliigaltee Wucaalee (1889) keessatti keeyyanni 17 (Article XVII) kan xaliyaanotaan hiikaan isaa jallifame sababa guddaa waraana Adwaa bara 1896ti.`,
    hint: 'Article 17 had conflicting Amharic and Italian texts regarding foreign relations.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // GEOGRAPHY (2016 E.C.)
  // ==========================================
  {
    id: 'geo-2016-q1',
    subject: 'Geography',
    year: '2016 E.C.',
    topic: 'Physical Geography of Ethiopia: The Main Ethiopian Rift',
    questionText: '13. The Great East African Rift Valley divides the Ethiopian highlands into which two major structural plateaus?',
    options: [
      'The North-Western Highlands and South-Eastern (Southeastern) Highlands',
      'The Northern Plateau and Western Lowlands',
      'The Danakil Depression and Ogaden Plains',
      'The Central Plateau and Coastal Escarpment'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The Main Ethiopian Rift (MER) traverses diagonally across the country from northeast to southwest, dividing the Ethiopian landmass into two broad physiographic highlands: the North-Western Highlands (Shewan/Gojjam/Gondar/Tigray) and the South-Eastern Highlands (Arsi/Bale/Hararghe).

🇪🇹 አማርኛ (Amharic):
የታላቁ ስምጥ ሸለቆ የኢትዮጵያን ከፍተኛ ቦታዎች ለሁለት የሚከፍላቸው ሲሆን፤ እነሱም የሰሜን-ምዕራብ ከፍተኛ ቦታዎች (North-Western Highlands) እና የደቡብ-ምስራቅ ከፍተኛ ቦታዎች (South-Eastern Highlands) ናቸው።

🌳 Afaan Oromoo:
Dhooqni guddaan (Rift Valley) gaarren Itoophiyaa bakka lamatti qooda: Gaarren Kaaba-Dhihaa fi Gaarren Kibba-Bahaatti.`,
    hint: 'The Rift Valley bisects Ethiopia into North-Western and South-Eastern highland massifs.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // ECONOMICS (2016 E.C.)
  // ==========================================
  {
    id: 'econ-2016-q1',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Microeconomics: Price Elasticity of Demand',
    questionText: '14. If a 10% decrease in the price of a good results in a 25% increase in quantity demanded, what is the price elasticity of demand and how is it classified?',
    options: [
      '2.5, Elastic demand',
      '0.4, Inelastic demand',
      '1.0, Unitary elastic',
      '2.5, Inelastic demand'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Price Elasticity of Demand (PED) = (% Change in Quantity Demanded) / (% Change in Price)
PED = 25% / 10% = 2.5.
Because PED > 1, the demand is classified as Price Elastic (consumers are highly responsive to price changes).

🇪🇹 አማርኛ (Amharic):
የፍላጎት የዋጋ ቅልጥፍና (Price Elasticity of Demand) ስሌት፡
PED = 25% / 10% = 2.5።
ውጤቱ ከ 1 በላይ በመሆኑ ፍላጎቱ ኢላስቲክ (Elastic demand) ይባላል።

🌳 Afaan Oromoo:
Shallaggii PED: 25% / 10% = 2.5.
Gatiin isaa 1 ol waan ta\'eef \'Elastic demand\' jedhama.`,
    hint: 'PED = % ΔQ / % ΔP. Values greater than 1 are elastic.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // CIVICS & ETHICAL EDUCATION (2016 E.C.)
  // ==========================================
  {
    id: 'civ-2016-q1',
    subject: 'Economics & General',
    year: '2016 E.C.',
    topic: 'Constitutional Law: Principles of Rule of Law and Due Process',
    questionText: '15. Which fundamental democratic principle guarantees that every citizen, including government officials and lawmakers, is equally subject to the established law of the land?',
    options: [
      'Rule of Law',
      'Separation of Powers',
      'Authoritarianism',
      'Judicial Discretion'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The Rule of Law is the foundational democratic principle holding that all people, institutions, and government authorities are accountable to publicly promulgated, equally enforced, and independently adjudicated laws.

🇪🇹 አማርኛ (Amharic):
ማንኛውም ዜጋ፣ ባለስልጣንና መንግስታዊ ተቋም በእኩልነት ለህግ ተገዢ መሆኑን የሚያረጋግጠው መሰረታዊ የዴሞክራሲ መርህ የህግ የበላይነት (Rule of Law) ይባላል።

🌳 Afaan Oromoo:
Qajeelfamni bu\'uuraa namni kamiyyuu, mootummaa dabalatee seeraaf qofa bitamuu mirkaneessu Olaantummaa Seeraa (Rule of Law) jedhama.`,
    hint: 'The supremacy and equal application of the law to all citizens is the rule of law.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  }
];
