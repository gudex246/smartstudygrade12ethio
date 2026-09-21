import { Question } from '../types';

export const CHEMISTRY_2013_EC_PART4: Question[] = [
  {
    id: 'chem-2013-q61',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Electrochemistry: Faraday\'s First Law Mathematical Form',
    questionText: '61. The mathematical expression for Faraday’s first law of electrolysis is summarized as',
    options: [
      'm = (M × I × t) / (n × F)',
      'n = (m × I × t) / (M × F)',
      'm = (I × t) / F',
      'M = (m × I × t) / (n × F)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Faraday's first law states that mass (m) deposited is proportional to charge Q = I × t: m = Z × I × t. Since the electrochemical equivalent Z = M / (n × F), the comprehensive formula is m = (M × I × t) / (n × F), where M = molar mass, I = current in Amperes, t = time in seconds, n = number of electrons transferred, and F = Faraday constant (96,500 C/mol).

🇪🇹 አማርኛ (Amharic):
የፋራዳይ አንደኛ የኤሌክትሮሊሲስ ህግ የሒሳብ ቀመር: m = (M × I × t) / (n × F) ሲሆን፣ m = የተከማቸው ብረት ክብደት፣ M = ሞላር ክብደት፣ I = የኤሌክትሪክ ፍሰት (Ampere)፣ t = ጊዜ በሰከንድ፣ n = የኤሌክትሮኖች ቁጥር እና F = የፋራዳይ ቋሚ (96500 C/mol) ናቸው።

🌳 Afaan Oromoo:
Seerri tokkoffaan Faaraadaayii herregaan yeroo ibsamu: m = (M × I × t) / (n × F) dha. Bakka m = hanga meetaalaa kuufamee, M = ulfaatina molakiyuulaa, I = yaa'a elektiriikii, t = yeroo (sekondii), n = baay'ina elektiroonii fi F = dhaabbataa Faaraadaayiti.`,
    hint: 'm = (M × I × t) / (n × F) calculates the mass of substance deposited during electrolysis.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q62',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Electrochemistry: Electrolysis with Active Copper Electrodes',
    questionText: '62. In the electrolysis of CuSO4 solution using copper electrodes (active electrodes), what occurs at the anode and cathode?',
    options: [
      'At the anode H2 is liberated, whereas copper is deposited at the cathode.',
      'At the anode the copper electrode dissolves (oxidizes), and copper metal is deposited at the cathode.',
      'No electrochemical reaction takes place involving copper.',
      'At the anode copper is reduced, whereas copper is oxidized at the cathode.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
When CuSO4 is electrolyzed using active copper electrodes (as in copper refining):
- Anode (Oxidation): Cu(s) -> Cu2+(aq) + 2e- (the copper anode dissolves into the solution).
- Cathode (Reduction): Cu2+(aq) + 2e- -> Cu(s) (pure copper metal plates out onto the cathode).

🇪🇹 አማርኛ (Amharic):
የ CuSO4 መፍትሄን በንቁ የኮፐር ኤሌክትሮዶች (active copper electrodes) ኤሌክትሮላይዝ ስናደርግ:
- በአኖድ ላይ የኮፐር ኤሌክትሮዱ ይቀልጣል (Cu -> Cu2+ + 2e-)
- በካቶድ ላይ ደግሞ የኮፐር ብረት ይከማቻል (Cu2+ + 2e- -> Cu)።

🌳 Afaan Oromoo:
Elektiroolisiisii CuSO4 keessatti elekiitiroodii kopharii yoo fayyadamne: Anoodii irratti kophariin baqee bulbulama (oksidaayizii ta'a), Kaasoodii irratti immoo sibiilli kopharii kuufama.`,
    hint: 'With active copper electrodes, the copper anode dissolves while pure copper deposits at the cathode.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q63',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Electrochemistry: Faraday\'s First Law of Electrolysis',
    questionText: '63. The statement ‘the amount of a substance consumed or produced in an electrolytic cell is directly proportional to the amount of electricity that passes through the cell’ is known as',
    options: [
      'Raoult\'s law.',
      'Dalton\'s law.',
      'Henry\'s law.',
      'Faraday\'s law.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Michael Faraday's First Law of Electrolysis states that the chemical deposition or liberation of a substance at an electrode during electrolysis is directly proportional to the quantity of electricity (electric charge Q = I × t) passed through the electrolyte.

🇪🇹 አማርኛ (Amharic):
በኤሌክትሮሊሲስ ወቅት በኤሌክትሮዶች ላይ የሚከማቸው ወይም የሚመረተው ንጥረ ነገር መጠን በሴሉ ውስጥ ከሚያልፈው የኤሌክትሪክ መጠን (electric charge) ጋር በቀጥታ ተመጣጣኝ ነው የሚለው ህግ የፋራዳይ ህግ (Faraday's law) ይባላል።

🌳 Afaan Oromoo:
Hangi wanta elektiroolisiisii keessatti elektiroodii irratti kuufamu hamma elektiriikii (chaarjii) darbu waliin kallattiin wal-madaala kan jedhu Seera Faaraadaayiiti.`,
    hint: 'Faraday\'s 1st law relates mass deposited directly to electric charge (current × time).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q64',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Electrochemistry: Standard Reduction Potentials & Reducing Strength',
    questionText: '64. Given the standard reduction potentials: Cu (+0.34 V), Pb (-0.13 V), Ni (-0.25 V), Cd (-0.40 V), Zn (-0.76 V), Al (-1.66 V), Ca (-2.87 V), K (-2.93 V). Which statement is correct?',
    options: [
      'Potassium (K) is the strongest reducing agent in the group.',
      'Cu is the strongest reducing agent in the group.',
      'Pb is more easily oxidized than Al.',
      'The reaction Cu + Zn2+ -> Cu2+ + Zn is spontaneous.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The metal with the most negative standard reduction potential (E° = -2.93 V for Potassium, K) possesses the greatest tendency to lose electrons (undergo oxidation) and is therefore the strongest reducing agent among the listed elements.

🇪🇹 አማርኛ (Amharic):
በጣም አነስተኛ/አሉታዊ የሪደክሽን ፖቴንሻል (E° = -2.93 V) ያለው ፖታሲየም (K) በቀላሉ ኤሌክትሮን አጥቶ ኦክሳይድ ስለሚሆን ከተዘረዘሩት ንጥረ ነገሮች ሁሉ በጣም ጠንካራው ሪዲውሲንግ ኤጀንት (strongest reducing agent) ነው።

🌳 Afaan Oromoo:
Pootaasiyeemiin (K) pooteenshaala ridaakshinii baay'ee xiqqaa (E° = -2.93 V) waan qabuuf salphaatti oksidaayizii ta'ee 'reducing agent' baay'ee cimaa ta'a.`,
    hint: 'The most negative reduction potential indicates the strongest reducing agent.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q65',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Electrochemistry: Corrosion Characteristics',
    questionText: '65. One of the following is NOT true about the effects of corrosion:',
    options: [
      'It causes enormous damage to buildings, bridges, ships and cars.',
      'It causes deterioration of metals by spontaneous chemical processes.',
      'Ordinary corrosion forms protective oxide layers that automatically prevent further damage to iron structures.',
      'Damage from corrosion costs billions of dollars annually.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Unlike aluminum or chromium which form self-passivating protective oxide skins, iron rust (Fe2O3·xH2O) is highly porous and flakes off continually, exposing fresh iron beneath to ongoing corrosion and structural failure. Thus statement C is false.

🇪🇹 አማርኛ (Amharic):
የብረት ዝገት (Rust) እንደ አልሙኒየም መከላከያ ሽፋን አይፈጥርም፤ ይልቁንም እየተላጠ ተጨማሪው የብረት አካል ለዝገት እንዲጋለጥ በማድረግ ከፍተኛ ጉዳት ያደርሳል። ስለዚህ አረፍተ-ነገር C የተሳሳተ ነው።

🌳 Afaan Oromoo:
Zangiin sibiilaa (rust) akkuma uumameen qunca'aa waan deemuuf sibiila eeguu hin danda'u, kanaafuu himni C sobaadha.`,
    hint: 'Iron rust is porous and flakes off rather than forming a protective barrier.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q66',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Kinetics: Function and Role of Catalysts',
    questionText: '66. Which statement is true about catalysts?',
    options: [
      'A positive catalyst decreases the rate of a reaction by increasing the activation energy.',
      'A catalyst slows down or speeds up a reaction, itself being consumed.',
      'The role of a catalyst is to modify the reaction rate by providing an alternate pathway with lower (or altered) activation energy without being consumed.',
      'A negative catalyst increases the rate of a reaction by decreasing the value of activation energy.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A catalyst changes the rate of a chemical reaction by providing an alternative reaction mechanism with a different activation energy (lowering Ea for positive catalysts), and it remains chemically unchanged at the conclusion of the reaction.

🇪🇹 አማርኛ (Amharic):
አፋጣኝ (Catalyst) ራሱ በግብረ-መልሱ ሳይበላሽ የመነሻ ሀይልን (Activation energy) በመቀነስ ዝቅተኛ የኃይል አማራጭ መንገድ በመፍጠር የግብረ-መልስ ፍጥነትን ይጨምራል።

🌳 Afaan Oromoo:
Kaataalistiin osoo ofii hin dhumatin anniisaa ka'umsaa (activation energy) gadi buusuun daandii re'aakshinii saffisiisu uuma.`,
    hint: 'Catalysts provide alternative pathways with lower activation energy without being permanently consumed.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q67',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Kinetics: Transition State Theory and Activated Complex',
    questionText: '67. According to transition state theory:',
    options: [
      'in the activated complex, the original reactant bonds are weakened and new product bonds are partially formed.',
      'the collision between two reacting species results in an activated complex that has less energy than both reactants and products.',
      'the standard reaction enthalpy (ΔH°) depends strictly on the magnitude of the activation energy (Ea).',
      'the activation energy is the energy released by reactants to reach the ground state.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Transition State Theory models the activated complex as an unstable, high-energy intermediate configuration occurring at the potential energy peak where reactant bonds are in the process of breaking (weakened) and new product bonds are simultaneously in the process of forming (partially formed).

🇪🇹 አማርኛ (Amharic):
በሽግግር ሁኔታ ፅንሰ-ሀሳብ (Transition state theory) መሰረት፣ አክቲቬትድ ኮምፕሌክስ (Activated complex) ላይ የቀደሙት ቦንዶች እየተላቀቁ እና አዳዲሶቹ ቦንዶች በከፊል እየተፈጠሩ ያሉበት ከፍተኛ የኃይል ደረጃ ነው።

🌳 Afaan Oromoo:
Akka 'Transition State Theory'tti, 'activated complex' keessatti hidhoonni duraanii laafanii hidhoonni haaraa immoo walakkaan uumamaa jiru.`,
    hint: 'At the transition state, old bonds are breaking while new bonds are partially formed.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q68',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Kinetics: Significance of the Rate Constant (k)',
    questionText: '68. Which of the following is true about the reaction rate constant (k)?',
    options: [
      'The magnitude of the rate constant (k) indicates how inherently fast or slow a reaction is at a given temperature.',
      'It expresses the relationship between the rate of a chemical reaction and the volume of reacting species.',
      'A small rate constant indicates a faster reaction and a larger rate constant indicates a slower reaction.',
      'The value of a rate constant is independent of temperature.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The specific rate constant (k) is a direct intrinsic measure of reaction speed under standard concentration conditions (when all reactant concentrations are 1 M). A large value of k signifies a fast reaction, while a small value of k indicates a slow reaction.

🇪🇹 አማርኛ (Amharic):
የፍጥነት ቋሚ (rate constant, k) ዋጋ የአንድ ኬሚካላዊ ግብረ-መልስ ምን ያህል ፈጣን ወይም አዝጋሚ እንደሆነ በቀጥታ ያሳያል (ትልቅ k = ፈጣን ግብረ-መልስ፣ ትንሽ k = አዝጋሚ ግብረ-መልስ)።

🌳 Afaan Oromoo:
Gatiin dhaabbataa saffisaa (k) re'aakshiniin tokko hammam ariifataa ykn suuta akka ta'e kallattiin agarsiisa (k guddaan = re'aakshinii saffisaa).`,
    hint: 'Large rate constant k implies a fast reaction; small k implies a slow reaction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q69',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Kinetics: First-Order Reaction Half-Life Calculation',
    questionText: '69. For a first-order reaction with initial concentration \'a\' and a half-life of 1 hour, after how many hours will the concentration of the reactant be reduced to a / 32?',
    options: [
      '4 hr',
      '1 hr',
      '3 hr',
      '5 hr'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Fraction remaining = [A]_t / [A]_0 = (1/2)^n = 1 / 32 = (1/2)^5.
Thus, exactly n = 5 half-lives have elapsed.
Total time = n × t_1/2 = 5 × 1 hour = 5 hours.

🇪🇹 አማርኛ (Amharic):
የቀረው ክምችት መጠን = a / 32 = a / (2^5) ሲሆን፣ ይህ የሚያሳየው 5 የግማሽ-ዘመን (half-lives) ማለፋቸውን ነው።
አጠቃላይ የፈጀው ጊዜ = 5 × 1 ሰዓት = 5 ሰዓታት ይሆናል።

🌳 Afaan Oromoo:
Qabiyyee hafe = a / 32 = a / (2^5). Kana jechuun walakkaa yeroo (half-life) 5 darbeera.
Yeroo waliigalaa = 5 × sa'aatii 1 = sa'aatii 5 ta'a.`,
    hint: 'Reducing to 1/32 requires 5 half-lives: 5 × 1 hr = 5 hours.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q70',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Kinetics: Arrhenius Equation Linear Form',
    questionText: '70. The mathematical expression log k = (-Ea / 2.303R)(1/T) + log A derived from the Arrhenius equation is important because it shows:',
    options: [
      'for a given value of activation energy, the rate constant (k) increases as temperature (T) increases.',
      'reactions with larger activation energies inherently have higher values of k and are faster.',
      'for a given value of activation energy, the rate constant decreases as temperature increases.',
      'reactions with larger activation energies have rate constants that decrease with temperature.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In the Arrhenius equation log k = (-Ea / 2.303R)(1/T) + log A, as temperature (T) increases, 1/T decreases, causing the negative exponent term to become less negative. Consequently, log k and the rate constant k increase with rising temperature for all reactions with positive activation energy.

🇪🇹 አማርኛ (Amharic):
በአሬኒየስ እኩልታ መሰረት የሙቀት መጠን (T) ሲጨምር፣ 1/T ስለሚቀንስ የኔጌቲቭ እሴቱ ይቀንሳል፤ በዚህም ምክንያት የፍጥነት ቋሚው (k) ዋጋ ከሙቀት መጨመር ጋር አብሮ ይጨምራል።

🌳 Afaan Oromoo:
Akka herrega Arrhenius'tti teempireecharri (T) dabaluun gatii k (dhaabbataa saffisaa) ni dabala, kunis saffisni re'aakshinii akka dabalu godha.`,
    hint: 'Higher temperature increases the fraction of molecules with E >= Ea, increasing k.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q71',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Atomic Structure: Definition of Isotopes',
    questionText: '71. Which of the following is true about isotopes? Isotopes of an element have',
    options: [
      'different number of neutrons and same number of protons.',
      'the same number of electrons and neutrons.',
      'the same atomic mass but different atomic numbers.',
      'different chemical properties.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Isotopes are defined as atoms of the exact same chemical element that have the same atomic number (same number of protons and electrons) but different mass numbers due to differing numbers of neutrons in their nuclei.

🇪🇹 አማርኛ (Amharic):
አይሶቶፖች (Isotopes) ማለት የአንድ ንጥረ ነገር አተሞች ሆነው እኩል የፕሮቶን ቁጥር (atomic number) ነገር ግን የተለያየ የኒውትሮን ቁጥር (atomic mass) ያላቸው ናቸው።

🌳 Afaan Oromoo:
Aayisootooponni atoomota elementii tokkoo ta'anii lakkoofsa pirootonii wal-qixa qaban garuu baay'ina niwutiroonii adda addaa qabanidha.`,
    hint: 'Isotopes: Same protons (atomic number), different neutrons (mass number).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q72',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Atomic Structure: Shapes of d Orbitals (dz^2)',
    questionText: '72. In quantum mechanics and atomic orbital representations, which shape uniquely represents the dz^2 orbital?',
    options: [
      'Cloverleaf in the xy-plane (dxy)',
      'Cloverleaf with lobes along x and y axes (dx2-y2)',
      'Cloverleaf in the xz-plane (dxz)',
      'Dumbbell oriented along the z-axis with a central doughnut-shaped torus in the xy-plane (dz^2)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The dz^2 orbital has a unique spatial boundary surface consisting of two lobes directed along the z-axis surrounded by a ring or doughnut-shaped torus of electron probability density in the xy-plane.

🇪🇹 አማርኛ (Amharic):
የ dz^2 ኦርቢታል ልዩ ቅርጽ ያለው ሲሆን፣ በ z-አክሲስ ላይ ወደ ላይና ወደ ታች የተዘረጉ ሁለት ሎቦች እና በመሀል በ xy-ፕሌን ላይ ቀለበት የመሰለ (doughnut torus) ቅርጽ አለው።

🌳 Afaan Oromoo:
Oorbiitaaliin dz^2 qoffaa isaa sarara z irratti loobsii lama qabaatee gidduu isaatti qubeelaa fakkaatu (doughnut torus) qabaachuun adda ba'a.`,
    hint: 'dz^2 has two lobes along the z-axis surrounded by a donut-like ring in the xy-plane.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q73',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Atomic Structure: Relative Atomic Mass from Isotopic Abundances',
    questionText: '73. Silver (Z = 47) has two natural isotopes: 107Ag (mass 106.90509 amu, 51.84% abundance) and 109Ag (mass 108.90476 amu, 48.16% abundance). Calculate the average atomic mass of silver:',
    options: [
      '107.94 amu',
      '108.90 amu',
      '107.86 amu',
      '107.40 amu'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Average Atomic Mass = (fraction1 × mass1) + (fraction2 × mass2)
= (0.5184 × 106.90509 amu) + (0.4816 × 108.90476 amu)
= 55.4196 amu + 52.4485 amu = 107.868 amu ≈ 107.86 amu.

🇪🇹 አማርኛ (Amharic):
አማካይ የአቶሚክ ክብደት = (0.5184 × 106.90509) + (0.4816 × 108.90476) = 55.4196 + 52.4485 = 107.86 amu።

🌳 Afaan Oromoo:
Giddu-galeessi ulfaatina atoomawaa = (0.5184 × 106.90509) + (0.4816 × 108.90476) = 107.86 amu ta'a.`,
    hint: 'Average mass = (0.5184 × 106.91) + (0.4816 × 108.90) = 107.86 amu.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q74',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Quantum Mechanics: Heisenberg\'s Uncertainty Principle',
    questionText: '74. Which statement correctly describes Heisenberg’s uncertainty principle?',
    options: [
      'A particle with a mass moving at a given speed can be described by the wave characteristic of material particles.',
      'If we measure the momentum of a particle precisely then its position will be correspondingly precise.',
      'Both the exact location and the momentum (or velocity) of a microscopic subatomic particle like an electron cannot be simultaneously determined with arbitrary precision.',
      'A small particle can behave both as a particle and a wave simultaneously.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Heisenberg's Uncertainty Principle (Δx · Δp >= h / (4π)) states that it is fundamentally impossible to simultaneously determine both the precise position (x) and the precise linear momentum (p) of a subatomic particle like an electron.

🇪🇹 አማርኛ (Amharic):
የሃይዘንበርግ እርግጠኛ ያለመሆን መርህ (Heisenberg\'s uncertainty principle) የአንድን ጥቃቅን ቅንጣት (እንደ ኤሌክትሮን) ትክክለኛ ቦታ (position) እና ትክክለኛ ሞመንተም (momentum) በአንድ ጊዜ በእርግጠኝነት ማወቅ እንደማይቻል ያስረዳል (Δx · Δp >= h / 4π)።

🌳 Afaan Oromoo:
Seerri 'Heisenberg\'s Uncertainty Principle' jedhu bakka (position) fi saffisa/moomentamii elektiroonii tokkoo yeroo tokkotti sirrii taasisanii beekuun hin danda\'amu jedha.`,
    hint: 'Simultaneous exact measurement of position and momentum is fundamentally impossible: Δx · Δp >= h / (4π).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q75',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Atomic Structure: Bohr Model & Energy Absorption/Emission',
    questionText: '75. Which statement is correct regarding energy changes during electronic transitions?',
    options: [
      'When an electron falls from a higher energy level to a lower energy level, energy is absorbed.',
      'When an electron jumps from a lower energy level to a higher level, a photon is emitted.',
      'When an electron falls from a higher energy level to a lower energy level, the energy emitted is higher than the energy difference.',
      'When an electron jumps from a lower energy level to a higher energy level, energy exactly equal to the difference between the two energy levels (ΔE = hν) is absorbed.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to the Bohr model and quantum theory, when an electron transitions (jumps) from a lower energy orbit to a higher energy orbit, it must absorb a discrete quantum of photon energy precisely equal to the energy gap between the two levels: ΔE = E_final - E_initial = hν = hc/λ.

🇪🇹 አማርኛ (Amharic):
ኤሌክትሮን ከዝቅተኛ የኃይል ደረጃ ወደ ከፍተኛ የኃይል ደረጃ ሲዘል (excitation)፣ በሁለቱ የኃይል ደረጃዎች መካከል ካለው ልዩነት ጋር በትክክል እኩል የሆነ የፎቶን ኃይል ይወስዳል/ይመጣል (energy is absorbed)።

🌳 Afaan Oromoo:
Elektirooniin sadarkaa anniisaa gadi aanaa irraa gara sadarkaa anniisaa ol'aanaatti yeroo utaalu, anniisaa fiyootonii garaagarummaa sadarkaa lameenii wajjin wal-qixa ta'e ofitti fudhata (absorbed).`,
    hint: 'Jumping to a higher level requires ABSORPTION of energy equal to ΔE = hν.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q76',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Acid-Base Theories: Lewis Definition of an Acid',
    questionText: '76. According to the Lewis definition, an acid is a substance that',
    options: [
      'accepts an H+ ion.',
      'dissociates in water to yield H3O+.',
      'accepts a pair of electrons.',
      'donates an OH- ion.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Under Gilbert N. Lewis's electronic definition:
- A Lewis Acid is an electron-pair acceptor (has an accessible empty orbital, e.g., BF3, AlCl3, H+, Cu2+).
- A Lewis Base is an electron-pair donor (has a lone pair of electrons, e.g., NH3, H2O, OH-).

🇪🇹 አማርኛ (Amharic):
በሉዊስ (Lewis) ፍቺ መሰረት፣ አሲድ ማለት የኤሌክትሮን ጥንድ ተቀባይ (electron pair acceptor) ነው።

🌳 Afaan Oromoo:
Akka hiika Luwiisitti (Lewis), asidiin wanta cimdiin elektiroonotaa (electron pair) fudhachuu danda'uudha.`,
    hint: 'Lewis acid = electron pair acceptor; Lewis base = electron pair donor.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q77',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Acid-Base Equilibria: Water as a Weak Electrolyte',
    questionText: '77. Water is classified as a very weak electrolyte because',
    options: [
      'it can accept a proton from an acid and donate a proton to a base.',
      'it has a very high ionic product, Kw.',
      'it acts both as Brønsted-Lowry acid and base.',
      'it undergoes a slight reversible dissociation with an extremely small ion-product constant (Kw = 1.0 × 10^-14 at 25 °C).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Water is a very weak electrolyte because only an extremely minute fraction of water molecules self-ionize in the reversible autoionization equilibrium (2H2O ⇌ H3O+ + OH-), resulting in very low ion concentrations and a tiny ion product (Kw = 1.0 × 10^-14 at 25 °C).

🇪🇹 አማርኛ (Amharic):
ውሃ በጣም ደካማ ኤሌክትሮላይት (weak electrolyte) የሚባለው እጅግ በጣም አነስተኛ ቁጥር ያላቸው የውሃ ሞለኪውሎች ብቻ ወደ አዮን ስለሚከፋፈሉ እና የ Kw ዋጋው እጅግ በጣም ትንሽ (1.0 × 10^-14) በመሆኑ ነው።

🌳 Afaan Oromoo:
Bishaan elektiroolaayitii baay'ee laafaa kan jedhamuuf sababa baay'ee xiqqoon isaa gara ayooniitti bittinaa'uufi dhaabbataan ayoonii isaa Kw baay'ee gadi aanaa (1.0 × 10^-14) waan ta'eefi.`,
    hint: 'Water only weakly autoionizes with Kw = 1.0 × 10^-14, producing few conducting ions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q78',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Acid-Base Theories: Amphiprotic Behavior of Water',
    questionText: '78. Which of the following pairs of reactions represents the amphiprotic (amphoteric) behavior of water?',
    options: [
      'HCl + H2O <=> H3O+ + Cl- (water acts as base) and NH3 + H2O <=> NH4+ + OH- (water acts as acid)',
      'HCl + H2O -> H+ + Cl- and NaOH + H2O -> Na+ + OH-',
      'H2O + H+ <=> H3O+ and NH3 + H+ <=> NH4+',
      'H3O+ + OH- -> 2H2O and H+ + OH- -> H2O'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
An amphiprotic substance can both accept and donate protons. In the reaction with HCl, H2O accepts a proton to become H3O+ (acting as a base). In the reaction with NH3, H2O donates a proton to become OH- (acting as an acid).

🇪🇹 አማርኛ (Amharic):
አምፊፕሮቲክ (Amphiprotic) ማለት ፕሮቶን መቀበልም መስጠትም የሚችል ማለት ነው። ውሃ ከ HCl ጋር ሲገናኝ ፕሮቶን በመቀበል እንደ ቤዝ ይሰራል፤ ከ NH3 ጋር ሲገናኝ ደግሞ ፕሮቶን በመስጠት እንደ አሲድ ይሰራል (ስለዚህ A ትክክል ነው)።

🌳 Afaan Oromoo:
Amaloota Amfipirootikii bishaanii: HCl wajjin yeroo re'aaktii godhu pirootonii fudhatee akka beeziitti tajaajila, NH3 wajjin immoo pirootonii kennee akka asidiitti tajaajila.`,
    hint: 'Amphiprotic water acts as a base with HCl (accepts H+) and as an acid with NH3 (donates H+).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q79',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Acid-Base Equilibria: Properties of Acidic Solutions',
    questionText: '79. For an acidic solution at 25 °C, which of the following relationships is CORRECT?',
    options: [
      'pH > pOH and pKw - pH < 7',
      'pH = pOH and pH = 1/2 pKw = 7',
      'pH < 7 and [H+] < 1 × 10^-7 M',
      'pH < pOH and (pKw - pH) > 7'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In any acidic solution at 25 °C:
- [H3O+] > 1.0 × 10^-7 M
- pH < 7.0 and pOH > 7.0
- Therefore, pH < pOH
- Since pKw = pH + pOH = 14, pOH = pKw - pH > 7.
Hence, statement D is completely correct.

🇪🇹 አማርኛ (Amharic):
በአሲዳማ መፍትሄ ውስጥ: pH < 7 እና pOH > 7 በመሆኑ pH < pOH ይሆናል። እንዲሁም pOH = pKw - pH > 7 ስለሆነ አማራጭ D ትክክለኛ ዝምድና ነው።

🌳 Afaan Oromoo:
Bulbula asidaawaa keessatti: pH < 7 fi pOH > 7 waan ta'eef pH < pOH ta'a. Akkasumas pOH = pKw - pH > 7 waan ta'uuf filannoon D sirriidha.`,
    hint: 'In acid, pH < 7 and pOH > 7, so pH < pOH and pKw - pH = pOH > 7.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q80',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Acid-Base Equilibria: pH Calculation for Weak Acid (HF)',
    questionText: '80. What is the pH of a 0.25 M hydrofluoric acid (HF) solution at 25 °C? The ionization of the weak acid is HF(aq) + H2O(l) <=> H3O+(aq) + F-(aq), Ka = 6.8 × 10^-4.',
    options: [
      '1.89',
      '12.1',
      '1.74',
      '12.3'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
For the weak acid HF:
[H3O+] ≈ square root of (Ka × [HF]0) = square root of (6.8 × 10^-4 × 0.25)
[H3O+] = square root of (1.70 × 10^-4) = 1.3038 × 10^-2 M.
pH = -log[H3O+] = -log(1.3038 × 10^-2) = 2 - log(1.3038) = 2 - 0.1152 = 1.885 ≈ 1.89.

🇪🇹 አማርኛ (Amharic):
የደካማ አሲድ HF የ H3O+ ክምችት:
[H3O+] = square root(Ka × C) = square root(6.8 × 10^-4 × 0.25) = 1.304 × 10^-2 M።
pH = -log(1.304 × 10^-2) = 1.89 ይሆናል።

🌳 Afaan Oromoo:
[H3O+] = square root(Ka × C) = square root(6.8 × 10^-4 × 0.25) = 1.304 × 10^-2 M.
pH = -log(1.304 × 10^-2) = 1.89 ta'a.`,
    hint: '[H+] = sqrt(Ka × C) = sqrt(6.8 × 10^-4 × 0.25) = 1.304 × 10^-2 M; pH = -log(1.304 × 10^-2) = 1.89.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  }
];
