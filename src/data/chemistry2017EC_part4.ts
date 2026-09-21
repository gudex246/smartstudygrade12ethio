import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2017_EC_PART4: Question[] = [
  {
    id: 'chem-2017-q61',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Analytical Chemistry: Equivalence Point vs End Point in Titration',
    questionText: '61. Which statement below correctly distinguishes the equivalence point from the end point in an acid-base neutralization titration?',
    options: [
      'Equivalence point is a point at which reactants start to evaporate whereas end point is where a product starts to condense.',
      'Equivalence point is a point at which reactants start to melt whereas end point is where products start to freeze.',
      'Equivalence point is a point at which the indicator changes color whereas end point is the point where an acid has completely reacted with a base.',
      'End point is the point at which the chemical indicator changes color, whereas equivalence point is the theoretical stoichiometric point where moles of acid exactly equal moles of base.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Equivalence Point: The exact theoretical stoichiometric point where the number of equivalents (moles of H+) of acid exactly neutralizes the number of equivalents (moles of OH-) of base.
• End Point: The experimental point in the titration where the visual indicator undergoes a distinct color change.
Ideally, the indicator is chosen so that the end point coincides as closely as possible with the equivalence point.

🇪🇹 አማርኛ (Amharic):
በአሲድና ቤዝ ታይትሬሽን ውስጥ፡
• ኢኩቫለንስ ፖይንት (Equivalence point)፡ አሲዱ እና ቤዙ በእኩል የሞል መጠን ሙሉ በሙሉ የተጣጣሙበት ቲዎሬቲካዊ ነጥብ ነው።
• ኤንድ ፖይንት (End point)፡ ኢንዲኬተሩ (indicator) ቀለሙን የሚቀይርበት የተግባር ነጥብ ነው።

🌳 Afaan Oromoo:
Taayitireeshinii keessatti \'Equivalence point\' qabxii asiidiin fi beeziin wal-qixa itti wal-nyaatan yoo ta\'u, \'End point\' immoo qabxii \'indicator\'n bifa itti jijjiirudha.`,
    hint: 'End point is where the indicator changes color; equivalence point is where stoichiometric moles equal.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q62',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Electrochemistry: Faraday\'s First Law of Electrolysis Formula',
    questionText: '62. Which one is the mathematical expression for Faraday’s first law of electrolysis?',
    options: [
      'm1 / E1 = m2 / E2',
      'M = n / V(liter)',
      'm = MPV / RT',
      'm = (M · I · t) / (n · F)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Faraday's First Law of Electrolysis states that the mass (m) of a substance liberated or deposited at an electrode is directly proportional to the total electrical charge (Q = I · t) passed:
m = Z · Q = Z · I · t = (M · I · t) / (n · F)
where M = molar mass, I = current (A), t = time (s), n = number of electrons transferred, and F = Faraday's constant (96,485 C/mol).

🇪🇹 አማርኛ (Amharic):
የፋራዴይ የመጀመሪያው የኤሌክትሮላይሲስ ህግ ቀመር፡
m = (M × I × t) / (n × F) ነው።
(m = የተቀመጠው ንጥረ ነገር ማስ፣ I = ከረንት፣ t = ሰከንድ፣ F = የፋራዴይ ቁጥር 96500 C)።

🌳 Afaan Oromoo:
Foormulaan seera Faaraadaay isa duraa:
m = (M · I · t) / (n · F) dha.`,
    hint: 'm = (M · I · t) / (n · F) relates deposited mass to current, time, and Faraday constant.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q63',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Industrial Chemistry: Principles of Chemical Manufacturing',
    questionText: '63. Which of the following describes the process of manufacturing valuable products in industrial chemistry?',
    options: [
      'Designing and executing processes to produce desired valuable outputs from raw materials using energy through systematic steps.',
      'Discharging solid, liquid or gaseous substances into an environment that causes unwanted ecological changes.',
      'Carrying out unwanted corrosion reactions that result in dissolution of construction materials.',
      'Using exclusively inorganic chemicals in the production of consumer products.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Chemical manufacturing (chemical engineering) is the systematic industrial design, optimization, and conversion of raw materials (feedstocks) into high-value consumer and industrial products through multi-step physical and chemical processes using controlled energy inputs.

🇪🇹 አማርኛ (Amharic):
የኢንዱስትሪ ኬሚስትሪ የማምረት ሂደት ማለት ጥሬ ዕቃዎችን (raw materials) ጉልበትና ደረጃ በደረጃ የተቀናጁ ኬሚካላዊ ሂደቶችን በመጠቀም ወደ ጠቃሚ የተጠናቀቁ ምርቶች መለወጥ ነው።

🌳 Afaan Oromoo:
Adeemsi oomishaa keemikaalaa meeshaalee dheedhii irraa anniisaa fi sadarkaalee fayyadamuun oomishaalee gatii qaban oomishuudha.`,
    hint: 'Industrial manufacturing systematically converts raw materials into valuable products using energy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q64',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Inorganic Chemistry: Sulfuric Acid as an Oxidizing Agent',
    questionText: '64. Which of the following reactions demonstrates the chemical action of concentrated H2SO4 acting as an oxidizing agent?',
    options: [
      'SO3(g) + H2O(l) -> H2SO4(aq)',
      '2 KOH(aq) + H2SO4(aq) -> K2SO4(aq) + 2 H2O(l)',
      'Cu(s) + 2 H2SO4(aq) -> CuSO4(aq) + SO2(g) + 2 H2O(l)',
      'Mg3N2(s) + 4 H2SO4(aq) -> 3 MgSO4(aq) + (NH4)2SO4(aq)'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In Cu(s) + 2 H2SO4(aq) -> CuSO4(aq) + SO2(g) + 2 H2O(l):
• Copper metal is oxidized from 0 to +2 (loses electrons).
• Sulfur in H2SO4 is reduced from +6 to +4 (in SO2 gas, gaining electrons).
Here, sulfuric acid acts as a powerful oxidizing agent. (Option B is acid-base neutralization; Option A is hydration; Option D is acid salt formation).

🇪🇹 አማርኛ (Amharic):
በ Cu + 2H2SO4 -> CuSO4 + SO2 + 2H2O ምላሽ ውስጥ ኮፐር ከ 0 ወደ +2 ሲያድግ (ኦክሲዳይዝድ ሲሆን)፣ በሰልፈሪክ አሲድ ውስጥ ያለው ሰልፈር ከ +6 ወደ +4 ዝቅ ብሏል (ሪዲዩስድ ሆኗል)፤ ይህም ሰልፈሪክ አሲድ እንደ ኦክሲዳይዚንግ ኤጀንት መስራቱን ያረጋግጣል።

🌳 Afaan Oromoo:
Wal-nyaatinsa Cu(s) + 2H2SO4(aq) -> CuSO4 + SO2 + 2H2O keessatti H2SO4 akka \'oxidizing agent\'tti tajaajiluun salfarii +6 irraa gara +4tti hir\'isa.`,
    hint: 'Concentrated H2SO4 oxidizes copper to Cu²⁺ while reducing itself to SO2 gas.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q65',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Industrial Chemistry: Composition of Soda-Lime Glass',
    questionText: '65. Which commercial type of glass is manufactured by melting a mixture of silica (SiO2), sodium carbonate (soda ash, Na2CO3), and limestone (CaCO3)?',
    options: [
      'Quartz glass',
      'Borosilicate glass (Pyrex)',
      'Lead crystal glass',
      'Soda-lime glass (Soft glass)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Soda-lime glass is the most widely produced commercial glass (used for windows, bottles, and jars). It is made by fusing:
1. Silica sand (SiO2, ~70%)
2. Soda ash (Na2CO3, to lower melting temperature)
3. Limestone (CaCO3, to provide chemical durability and insolubility in water).

🇪🇹 አማርኛ (Amharic):
ሶዳ-ላይም ብርጭቆ (Soda-lime glass) የሚዘጋጀው ሲሊካ (SiO2)፣ ሶዲየም ካርቦኔት (Na2CO3) እና የኖራ ድንጋይ (CaCO3) በከፍተኛ ሙቀት በማቅለጥ ሲሆን ለመስኮትና ጠርሙስ ያገለግላል።

🌳 Afaan Oromoo:
Garaachi \'Soda-lime glass\' jedhamu \'silica (SiO2)\', \'sodium carbonate (Na2CO3)\', fi \'limestone (CaCO3)\' walitti baqsuun hojjetama.`,
    hint: 'Silica + soda ash + limestone produces common soda-lime glass.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q66',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Electrochemistry: Standard Reduction Potential Calculation in Galvanic Cells',
    questionText: '66. In a galvanic cell, a zinc strip (anode, E°_Zn²⁺/Zn = -0.76 V) is connected to metal B (cathode) at 25°C, yielding a standard cell potential (E°cell) reading of 0.51 V. What is the standard reduction potential of metal B (E°_B²⁺/B)?',
    options: [
      'E°_B²⁺/B = -0.25 V',
      'E°_B²⁺/B = -1.27 V',
      'E°_B²⁺/B = +0.25 V',
      'E°_B²⁺/B = +1.27 V'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Using the cell potential formula:
E°cell = E°cathode - E°anode
0.51 V = E°_B²⁺/B - (-0.76 V)
0.51 V = E°_B²⁺/B + 0.76 V
E°_B²⁺/B = 0.51 V - 0.76 V = -0.25 V (e.g., corresponding to the Ni²⁺/Ni or similar electrode).

🇪🇹 አማርኛ (Amharic):
የሴል ቮልቴጅ ስሌት፡
E°cell = E°cathode - E°anode
0.51 = E°_B - (-0.76)
0.51 = E°_B + 0.76
E°_B = 0.51 - 0.76 = -0.25 ቮልት (V)።

🌳 Afaan Oromoo:
E°cell = E°cathode - E°anode
0.51 = E°_B - (-0.76)
E°_B = 0.51 - 0.76 = -0.25 V ta\'a.`,
    hint: 'E°cathode = E°cell + E°anode = 0.51 + (-0.76) = -0.25 V.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q67',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Polymers: Synthetic Polyamides (Nylon)',
    questionText: '67. Which of the following synthetic condensation polymers is widely used to manufacture high-tensile ropes, fabrics, hair combs, fishing nets, and stockings?',
    options: [
      'Perspex (PMMA)',
      'Nylon (Polyamide)',
      'Teflon (PTFE)',
      'Bakelite'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Nylon (such as Nylon-6,6) is a synthetic thermoplastic polyamide formed by condensation polymerization of diamines with dicarboxylic acids. Its high tensile strength, elasticity, and abrasion resistance make it ideal for textiles, ropes, climbing gear, stockings, and combs.

🇪🇹 አማርኛ (Amharic):
ከፍተኛ የመሳብ ጥንካሬ ያለውና ገመዶችን፣ ጨርቆችን፣ ማበጠሪያዎችንና ስቶኪንጎችን ለመስራት በስፋት የሚያገለግለው ሰው ሰራሽ ፖሊመር ናይለን (Nylon) ይባላል።

🌳 Afaan Oromoo:
Pooliimariin humna qabatuuf tajaajilu kanneen akka haada, uffataa fi qoma hojjechuuf oolu \'Nylon\' jedhama.`,
    hint: 'Nylon is a strong polyamide polymer used for ropes and textiles.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q68',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Industrial Chemistry: Catalysts in Ostwald Process for Nitric Acid',
    questionText: '68. Which of the following catalysts is used in the first stage of the Ostwald process for the commercial oxidation of ammonia to nitric acid (HNO3)?',
    options: [
      'Platinum-Rhodium gauze (Pt/Rh)',
      'Vanadium(V) oxide (V2O5)',
      'Finely divided Iron (Fe)',
      'Copper(II) oxide (CuO)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In the industrial Ostwald process for manufacturing nitric acid (HNO3):
Stage 1: Catalytic oxidation of ammonia to nitric oxide uses a Platinum (Pt) or Platinum-Rhodium alloy gauze catalyst at ~850°C:
4 NH3(g) + 5 O2(g) --[Pt, 850°C]--> 4 NO(g) + 6 H2O(g).
(Note: V2O5 is used in Contact process; Fe is used in Haber process).

🇪🇹 አማርኛ (Amharic):
ናይትሪክ አሲድ (HNO3) ለማምረት በሚደረገው የኦስትዋልድ ሂደት (Ostwald process) የመጀመሪያ ደረጃ ላይ አሞንያን በኦክስጅን ለማቃጠል የሚያገለግለው ካታሊስት ፕላቲነም (Pt / Platinum gauze) ነው።

🌳 Afaan Oromoo:
Adeemsa \'Ostwald process\' keessatti asiidii naayitiriikii oomishuuf katalistiin tajaajilu \'Platinum (Pt)\' dha.`,
    hint: 'Platinum (Pt) catalyzes ammonia oxidation in the Ostwald process.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q69',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Environmental Chemistry: Earth Spheres and Biosphere',
    questionText: '69. In which of the following global environmental spheres do living organisms carry out photosynthesis and biochemical carbon fixation?',
    options: [
      'Atmosphere only',
      'Hydrosphere only',
      'Lithosphere only',
      'Biosphere'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The Biosphere is the global ecological system integrating all living organisms (plants, algae, cyanobacteria, animals) and their relationships, where photosynthesis and biochemical energy transformations occur.

🇪🇹 አማርኛ (Amharic):
ህይወት ያላቸው እፅዋት ፎቶሲንቴሲስን በማካሄድ የፀሐይ ብርሃንን ወደ ምግብነት የሚቀይሩበት ምህዳራዊ ክፍል ባዮስፌር (Biosphere - የህይወት ምህዳር) ይባላል።

🌳 Afaan Oromoo:
Kutaan naannoo kan lubbu-qabeeyyiin adeemsa \'photosynthesis\' gaggeessan \'Biosphere\' jedhama.`,
    hint: 'The biosphere is the zone of all living organisms on Earth.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q70',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Environmental Chemistry: Greenhouse Gases and Global Warming',
    questionText: '70. Which of the following statements is NOT true regarding the greenhouse effect and atmospheric greenhouse gases?',
    options: [
      'Greenhouse effect is the trapping of terrestrial infrared radiation by certain atmospheric gases.',
      'Carbon dioxide (CO2) and water vapor (H2O) are prominent naturally occurring greenhouse gases.',
      'Diatomic oxygen (O2) and nitrogen (N2) are transparent to infrared radiation and do not trap heat.',
      'The greater the percentage of greenhouse gases in the atmosphere, the cooler the Earth becomes.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Statement D is FALSE: An increased concentration of greenhouse gases traps more infrared radiation, causing enhanced warming (Global Warming) rather than cooling. Statements A, B, and C are all scientifically accurate.

🇪🇹 አማርኛ (Amharic):
ስህተት የሆነው አረፍተ ነገር "D" ነው፤ ምክንያቱም በከባቢ አየር ውስጥ የግሪንሀውስ ጋዞች መጠን ሲጨምር ምድር አትቀዘቅዝም፤ ይልቁንም የሙቀት መጠኗ በከፍተኛ ሁኔታ ይጨምራል (Global Warming)።

🌳 Afaan Oromoo:
Himni sirrii hin taane \'D\' dha: Gaazonni \'greenhouse\' yoo dabalan ho\'i lafaa ni dabala malee hin qabbanaa\'u.`,
    hint: 'More greenhouse gases trap more heat and warm the planet, not cool it.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q71',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Natural Resources: Renewable vs Non-Renewable Resources',
    questionText: '71. In which of the following choices is the type of natural resource and its example CORRECTLY paired?',
    options: [
      'Renewable resources; copper mineral ore',
      'Renewable resources; agricultural crops and biomass',
      'Non-renewable resources; sheep animal wool',
      'Non-renewable resources; freshwater hydrological cycle'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• Renewable resources naturally replenish over short human timescales (e.g., agricultural crops, timber, solar energy, animal wool).
• Non-renewable resources exist in finite geological quantities and cannot be replenished once depleted (e.g., copper ore, fossil fuels).

🇪🇹 አማርኛ (Amharic):
በትክክል የተጣመረው አማራጭ B ነው፡ የግብርና ሰብሎችና እፅዋት (crops) በተፈጥሮ የሚተኩ ታዳሽ የተፈጥሮ ሀብት (Renewable resources) ናቸው።

🌳 Afaan Oromoo:
Qabeenya uumamaa haaromfamu (Renewable resource) kan ta\'an oomishaalee qonnaati (agricultural crops).`,
    hint: 'Crops and biological biomass are renewable resources.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q72',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Acids and Bases: Brønsted-Lowry Base Definition',
    questionText: '72. Which of the following compounds behaves as a Brønsted-Lowry base in aqueous systems?',
    options: [
      'BF3',
      'NH3 (Ammonia)',
      'HCl',
      'H2S'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
According to the Brønsted-Lowry theory:
A base is a proton (H⁺) acceptor.
Ammonia (NH3) accepts a proton via its nitrogen lone pair:
NH3 + H⁺ <=> NH4⁺ (ammonium cation).
(HCl and H2S are proton donors / acids; BF3 is a Lewis acid).

🇪🇹 አማርኛ (Amharic):
በብሮንስተድ-ሎውሪ (Brønsted-Lowry) ንድፈ-ሀሳብ መሰረት ቤዝ ማለት ፕሮቶን ተቀባይ (proton acceptor) ነው፤ አሞንያ (NH3) ፕሮቶን በመቀበል NH4+ ስለሚፈጥር ብሮንስተድ ቤዝ ነው።

🌳 Afaan Oromoo:
Akka tiyoorii \'Brønsted-Lowry\'tti beeziin pirootoonii (H⁺) fudhata. \'NH3\' pirootoonii fudhatee NH4⁺ uuma.`,
    hint: 'NH3 accepts a proton (H⁺) to become NH4⁺, making it a Brønsted-Lowry base.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q73',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Acid-Base Equilibria: Percent Ionization Calculation of Nitrous Acid',
    questionText: '73. For the dissociation of nitrous acid: HNO2(aq) <=> NO2⁻(aq) + H⁺(aq), what is the percent ionization in a 0.50 M HNO2 solution? (Acid dissociation constant Ka of HNO2 = 7.1 × 10⁻⁴)',
    options: [
      '0.2%',
      '1.8%',
      '3.8%',
      '9.1%'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
For a weak acid: [H+] ≈ √(Ka · C)
[H+] = √(7.1 × 10⁻⁴ · 0.50) = √(3.55 × 10⁻⁴) ≈ 1.884 × 10⁻² M = 0.01884 M
Calculate percent ionization:
% Ionization = ([H+] / C_initial) · 100%
% Ionization = (0.01884 M / 0.50 M) · 100% ≈ 3.77% ≈ 3.8%.

🇪🇹 አማርኛ (Amharic):
የፐርሰንት አዮናይዜሽን ስሌት፡
[H+] = √(Ka × C) = √(7.1 × 10⁻⁴ × 0.5) = 0.01884 M
% Ionization = (0.01884 / 0.5) × 100% = 3.8% ይሆናል።

🌳 Afaan Oromoo:
Shallaggii % ionization:
[H+] = √(7.1 × 10⁻⁴ × 0.5) = 0.01884 M
% Ionization = (0.01884 / 0.5) × 100% ≈ 3.8% ta\'a.`,
    hint: '% Ionization = sqrt(Ka / C) * 100% = sqrt(7.1e-4 / 0.5) * 100% = 3.8%.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q74',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Acid-Base Equilibria: Base Dissociation Constant (Kb) Calculation',
    questionText: '74. A 0.47 M aqueous solution of a weak monoprotic base has a pOH of 2.0. What is the base dissociation constant (Kb) for this weak base?',
    options: [
      '2.13 × 10⁻⁴',
      '3.14 × 10⁻³',
      '1.0 × 10⁻²',
      '4.4 × 10⁻¹'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Calculate [OH-]:
pOH = 2.0 -> [OH-] = 10^(-pOH) = 10^(-2.0) = 0.01 M
Step 2: Calculate Kb:
Kb = [OH-]² / [Base]_eq = (0.01)² / (0.47 - 0.01) = 1.0 × 10⁻⁴ / 0.46 ≈ 2.13 × 10⁻⁴ (or 2.17 × 10⁻⁴).

🇪🇹 አማርኛ (Amharic):
የ Kb ስሌት፡
pOH = 2 -> [OH-] = 0.01 M
Kb = (0.01)² / 0.47 = 2.13 × 10⁻⁴ ይሆናል።

🌳 Afaan Oromoo:
Shallaggii Kb:
[OH-] = 10⁻² = 0.01 M
Kb = (0.01)² / 0.47 = 2.13 × 10⁻⁴ ta\'a.`,
    hint: 'pOH = 2 -> [OH-] = 0.01 M. Kb = [OH-]² / C = (0.01)² / 0.47 = 2.13 x 10⁻⁴.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q75',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Electrochemistry: Operation of Daniell Voltaic Cell (Zn-Cu)',
    questionText: '75. A standard Zn(s)/Zn²⁺(aq) || Cu²⁺(aq)/Cu(s) galvanic cell generates 1.10 V cell potential with Zn acting as the anode. Which of the following statements is NOT correct regarding the operation of this cell?',
    options: [
      'The mass of the copper cathode increases during cell operation as Cu²⁺ ions are reduced.',
      'The internal circuit is completed by the migration of anions toward the anode and cations toward the cathode through the salt bridge.',
      'The zinc anode electrode dissolves and the blue color of the CuSO4 solution fades over time.',
      'Electrons travel through the external circuit from the copper cathode to the zinc anode.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Statement D is INCORRECT (False):
In a galvanic cell, oxidation occurs at the zinc anode (Zn -> Zn²⁺ + 2e⁻), releasing electrons that travel through the external wire FROM the zinc anode TO the copper cathode (where reduction Cu²⁺ + 2e⁻ -> Cu takes place), never the reverse.

🇪🇹 አማርኛ (Amharic):
ስህተት የሆነው አረፍተ ነገር "D" ነው፤ ምክንያቱም በጋልቫኒክ ሴል ውስጥ ኤሌክትሮኖች በውጫዊ ሽቦ የሚጓዙት ከዚንክ አኖድ (anode) ተነስተው ወደ ኮፐር ካቶድ (cathode) እንጂ ከተቃራኒው አይደለም።

🌳 Afaan Oromoo:
Himni dogoggoraa \'D\' dha: Elektiroononni sarara alaa keessa kan yaa\'an \'anode (Zn)\' irraa gara \'cathode (Cu)\'tti dha.`,
    hint: 'Electrons flow from the anode (Zn) to the cathode (Cu) in the external circuit.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q76',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Polymers: Repeat Unit of Polypropylene (Polypropene)',
    questionText: '76. Which of the following polymer repeating unit structures represents polypropylene (polypropene)?',
    options: [
      '-[CH2-CH2]_n- (Polyethylene)',
      '-[CH2-CH(Cl)]_n- (Polyvinyl chloride)',
      '-[CH2-CH(CH3)]_n- (Polypropylene)',
      '-[CH2-CH(COOCH3)]_n- (Poly(methyl acrylate))'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Polypropylene (polypropene) is an addition polymer synthesized from the monomer propene (CH2=CH-CH3). Its repeating polymer unit is -[CH2-CH(CH3)]_n-, characterized by a methyl (-CH3) branch attached to every alternating carbon on the backbone.

🇪🇹 አማርኛ (Amharic):
ፖሊፕሮፒሊን (Polypropylene) ከፕሮፒን (CH2=CH-CH3) የሚሰራ አዲሽን ፖሊመር ሲሆን የሪፒቲንግ ዩኒት ቅርጹ -[CH2-CH(CH3)]_n- ነው።

🌳 Afaan Oromoo:
Caasaan \'Polypropylene\' -[CH2-CH(CH3)]_n- dha.`,
    hint: 'Polypropylene has repeating unit -[CH2-CH(CH3)]_n-.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q77',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Green Chemistry: Calculation of Percentage Atom Economy',
    questionText: '77. For the elimination reaction used to synthesize 2-butene: CH3CH2CHBrCH3 + CH3S⁻ -> CH3CH=CHCH3 (desired product, M = 56) + CH3SH (M = 48) + Br⁻ (M = 80). What is the percent atom economy of this reaction? (Atomic masses: H=1, C=12, S=32, Br=80)',
    options: [
      '30.43%',
      '48.00%',
      '56.00%',
      '80.00%'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Atom Economy measures the efficiency of a chemical reaction in converting reactant mass into desired products:
% Atom Economy = (Molar mass of desired product / Total molar mass of all reactants) · 100%
Desired product (2-butene, C4H8) = 4(12) + 8(1) = 56 g/mol
Reactants: CH3CH2CHBrCH3 (137 g/mol) + CH3S⁻ (47 g/mol) = 184 g/mol (or products: 56 + 48 + 80 = 184 g/mol)
% Atom Economy = (56 / 184) · 100% ≈ 30.43%.

🇪🇹 አማርኛ (Amharic):
የአተም ኢኮኖሚ (Atom Economy) ስሌት፡
% Atom Economy = (የተፈለገው ምርት ሞላር ማስ 56 / የሁሉም ሪአክታንቶች ድምር 184) × 100% = 30.43%።

🌳 Afaan Oromoo:
Shallaggii \'Atom Economy\':
% Atom Economy = (56 / 184) × 100% = 30.43% ta\'a.`,
    hint: '% Atom Economy = (56 / 184) * 100% = 30.43%.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q78',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Food Chemistry: Methods of Food Preservation',
    questionText: '78. Which of the following technological processes specifically involves inhibiting microbial growth (bacteria and fungi) and minimizing rancidity and lipid oxidation of fats in food products?',
    options: [
      'Haber-Bosch process',
      'Leather tanning process',
      'Food preservation (canning, pickling, refrigeration, and antioxidants)',
      'Contact process'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Food preservation encompasses physical methods (canning, dehydration, pasteurization, refrigeration) and chemical preservatives (benzoates, sorbates, antioxidants) designed to prevent microbial decomposition by bacteria/fungi and prevent oxidative lipid rancidity.

🇪🇹 አማርኛ (Amharic):
በባክቴሪያና ፈንገስ ምክንያት ምግብ እንዳይበላሽና ቅባቶች በኦክሲጅን እንዳይበላሹ (rancidity) የሚደረገው ጥበቃ የምግብ ማቆየት/ማቀነባበር (Food preservation) ይባላል።

🌳 Afaan Oromoo:
Midhaan nyaataa baakteeriyaa fi fangasii irraa eeguun akka hin badne taasisuun \'Food preservation\' jedhama.`,
    hint: 'Food preservation prevents spoilage from microbes and lipid oxidation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q79',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Electrochemistry: Electrolysis of Molten Sodium Chloride (Downs Cell)',
    questionText: '79. Which of the following represents the correct net overall reaction for the industrial electrolysis of molten sodium chloride (NaCl) in a Downs cell?',
    options: [
      'Na(l) + 1/2 Cl2(g) -> Na⁺(l) + Cl⁻(l)',
      'Na⁺(l) + Cl⁻(l) -> Na(l) + 1/2 Cl2(g)',
      'H2(g) + 1/2 O2(g) -> H2O(g)',
      'H2O(l) -> H2(g) + 1/2 O2(g)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In the Downs process for molten NaCl electrolysis:
• Cathode (reduction): Na⁺(l) + e⁻ -> Na(l) (liquid sodium metal)
• Anode (oxidation): Cl⁻(l) -> 1/2 Cl2(g) + e⁻ (chlorine gas)
Net overall cell reaction:
Na⁺(l) + Cl⁻(l) -> Na(l) + 1/2 Cl2(g)  [or 2 NaCl(l) -> 2 Na(l) + Cl2(g)].

🇪🇹 አማርኛ (Amharic):
የቀለጠ NaCl ኤሌክትሮላይሲስ አጠቃላይ ቀመር፡
Na⁺(l) + Cl⁻(l) -> Na(l) + 1/2 Cl2(g) ነው። (በካቶድ ሶዲየም ብረት፣ በአኖድ ክሎሪን ጋዝ ይፈጠራል)።

🌳 Afaan Oromoo:
Wal-nyaatinsi waliigalaa \'molten NaCl electrolysis\':
Na⁺(l) + Cl⁻(l) -> Na(l) + 1/2 Cl2(g) dha.`,
    hint: 'Molten NaCl electrolysis produces liquid sodium at cathode and chlorine gas at anode.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q80',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Electrochemistry: Electrolysis of Dilute Sulfuric Acid',
    questionText: '80. Which of the following electrode events occurs during the electrolysis of dilute sulfuric acid (H2SO4) using inert platinum electrodes?',
    options: [
      'Sulfate ion (SO4²⁻) is discharged at the anode.',
      'The overall reaction produces H2O gas from H2 and O2.',
      'H⁺ ions are discharged (reduced to H2 gas) at the negative cathode electrode.',
      'The solution becomes basic as electrolysis proceeds.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
During the electrolysis of dilute H2SO4 (Hoffman voltameter):
• At the cathode (negative electrode, reduction): Hydrogen ions are preferential over water: 2 H⁺(aq) + 2 e⁻ -> H2(g) (H⁺ is discharged).
• At the anode (positive electrode, oxidation): Water is oxidized preferentially over sulfate: 2 H2O(l) -> O2(g) + 4 H⁺(aq) + 4 e⁻.
Net reaction: 2 H2O(l) -> 2 H2(g) + O2(g) (electrolysis of water).

🇪🇹 አማርኛ (Amharic):
ቀላጭ የሰልፈሪክ አሲድ (dilute H2SO4) ኤሌክትሮላይሲስ ሲደረግ፡ በኔጌቲቭ ኤሌክትሮድ (Cathode) ላይ የ H+ አዮኖች ኤሌክትሮን በመውሰድ ወደ ሃይድሮጅን ጋዝ (H2) ይቀየራሉ (discharged)።

🌳 Afaan Oromoo:
Yeroo \'dilute H2SO4\'n elekiroolayisisiisii ta\'u \'cathode (negative electrode)\' irratti ayoononni H⁺ gara gaazii haayidiroojiiniitti (H2) jijjiiramu.`,
    hint: 'At the negative cathode, H⁺ ions gain electrons to produce H2 gas.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
