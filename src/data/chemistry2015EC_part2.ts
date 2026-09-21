import { Question } from '../types';

export const CHEMISTRY_2015_EC_PART2: Question[] = [
  {
    id: 'chem-2015-q21',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Atomic Structure: Isotopes & Chemical Properties',
    questionText: '21. Which one of the following is TRUE about isotopes?',
    options: [
      'Isotopes of an element are atoms that have different number of electrons and protons.',
      'Isotopes of an element are identical in mass number.',
      'Isotopes of the same elements contain the same number of neutrons.',
      'Isotopes of an element have the same chemical properties.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Isotopes are atoms of the same element that have the same atomic number (same number of protons and electrons) but different numbers of neutrons (different mass numbers). Because chemical properties are determined by electron configuration, isotopes of an element exhibit identical chemical properties.

🇪🇹 አማርኛ (Amharic):
አይሶቶፖች (Isotopes) ተመሳሳይ የአቶሚክ ቁጥር (እኩል የፕሮቶንና የኤሌክትሮን ቁጥር) ያላቸው ነገር ግን የተለያየ የኒውትሮን ቁጥር ያላቸው የአንድ ንጥረ ነገር አተሞች ናቸው። ኬሚካላዊ ባህሪያት በኤሌክትሮን ስርጭት ስለሚወሰኑ፣ የአንድ ንጥረ ነገር አይሶቶፖች ተመሳሳይ ኬሚካላዊ ባህሪ አላቸው።

🌳 Afaan Oromoo:
Aayisootooponni (Isotopes) atoomota elementii tokkoo kanneen lakkoofsa atoomawaa (pirootoonii fi elektiroonii) wal-fakkaataa qabanii fi lakkoofsa niwutiroonii garaagaraa qabaniidha. Amalli keemikaalaa elektiroonotaan waan murtaa'uuf aayisootooponni amala keemikaalaa wal-fakkaataa qabu.`,
    hint: 'Isotopes have identical electron arrangements and therefore identical chemical properties.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q22',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Atomic Models: Quantum Mechanical Model',
    questionText: '22. Which one of the following describes the quantum mechanical model?',
    options: [
      'The locations of electrons in an atom are described in terms of probability.',
      'An atom is represented by a solid indestructible sphere.',
      'An atom is a sphere with a positively charged matter, in which electrons are embedded.',
      'Electrons moved around the nucleus of an atom in circular orbits.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The Quantum Mechanical Model (Schrödinger and Heisenberg) treats electrons as having wave-particle duality and asserts that their exact positions cannot be known simultaneously; instead, electron locations are mapped as regions of probability (electron clouds/orbitals).

🇪🇹 አማርኛ (Amharic):
የኳንተም ሜካኒካል ሞዴል (Quantum mechanical model) በአቶም ውስጥ የኤሌክትሮኖችን መገኛ ቦታ የሚገልጸው በትክክለኛ ክብ መስመር ሳይሆን በይሆኔታ/በእድል (probability/electron cloud) ነው።

🌳 Afaan Oromoo:
Moodelliin kuwaantam mekaaniksii bakka elektiroononni itti argaman sirriitti murteessuu mannaa carraa/ta'uu danda'uu (probability) koodii oorbiitaaliitiin ibsa.`,
    hint: 'Quantum mechanics defines atomic orbitals as 3D regions of electron probability.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q23',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Atomic Structure: Subatomic Particles of Chlorine-35',
    questionText: '23. Which one of the following is the diagrammatic representation of ³⁵₁₇Cl?',
    options: [
      'Nucleus with 17p, 18n surrounded by electron shells with 2, 8, 8 electrons',
      'Nucleus with 18p, 17n surrounded by electron shells with 2, 8, 7 electrons',
      'Nucleus with 17p, 17n surrounded by electron shells with 2, 8, 7 electrons',
      'Nucleus with 17p, 18n surrounded by electron shells with 2, 8, 7 electrons'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
For neutral chlorine-35 (³⁵₁₇Cl):
- Atomic number Z = 17 ⇒ 17 protons (17p) and 17 electrons.
- Neutrons n = Mass number (35) - Z (17) = 18 neutrons (18n).
- Electron configuration in shells (K, L, M): 2, 8, 7.
Thus, the correct diagram has a nucleus with 17p, 18n and 3 concentric electron shells containing 2, 8, and 7 electrons respectively (Diagram D).

🇪🇹 አማርኛ (Amharic):
ለክሎሪን-35 (³⁵₁₇Cl)፡- የፕሮቶን ቁጥር = 17p፣ የኒውትሮን ቁጥር = 35 - 17 = 18n ሲሆን፣ በኤሌክትሮን ሼሎች ውስጥ 2, 8, 7 ኤሌክትሮኖች ይኖሩታል (ዲያግራም D)።

🌳 Afaan Oromoo:
Kilooriinii-35 (³⁵₁₇Cl) keessatti: Pirootoonii = 17p, Niwutiroonii = 35 - 17 = 18n, elektiroonota marsaa 2, 8, 7 qaba (Fakkii D).`,
    hint: 'Z = 17 (17p, 17e- with 2,8,7 distribution) and neutrons = 35 - 17 = 18n.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q24',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Bonding: Ionic vs Covalent Compounds',
    questionText: '24. Which one of the following is an ionic compound?',
    options: [
      'CaCl₂',
      'CO₂',
      'PCl₃',
      'H₂O₂'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
CaCl₂ (calcium chloride) is formed between a metal (calcium, Ca²⁺) and a nonmetal (chlorine, Cl⁻) through complete electron transfer, forming an ionic lattice. CO₂, PCl₃, and H₂O₂ are covalent compounds formed by sharing electrons between nonmetals.

🇪🇹 አማርኛ (Amharic):
CaCl₂ (ካልሲየም ክሎራይድ) በብረት (Ca) እና ኢ-ብረት (Cl) መካከል በኤሌክትሮን ልውውጥ የሚፈጠር አዮናዊ ውህድ (ionic compound) ነው። ሌሎቹ በሙሉ በጋራ ኤሌክትሮን መጋራት የሚፈጠሩ ኮቫለንት ውህዶች ናቸው።

🌳 Afaan Oromoo:
CaCl₂n sibiila (Ca²⁺) fi miti-sibiila (Cl⁻) gidduutti daddarbaa elektirooniitiin waan uumamuuf kompaawundii ayoonikii (ionic compound) dha.`,
    hint: 'Metal (Ca) bonded to non-metal (Cl) forms an ionic compound.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q25',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Periodic Table: Group VIIA Halogens Properties',
    questionText: '25. An element is located in Group VIIA and 3rd period of the modern periodic table. On the basis of this the element;',
    options: [
      'generally forms an ion with -2 charges.',
      'has very low ionization energy.',
      'forms an acidic oxide.',
      'has extremely low electron affinity.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
An element in Group VIIA (Halogens) and Period 3 is Chlorine (Cl). As a nonmetal, chlorine forms acidic oxides (e.g., Cl₂O, Cl₂O₇) that react with water to form strong acids (like HClO₄). It forms -1 ions (not -2) and has very high ionization energy and electron affinity.

🇪🇹 አማርኛ (Amharic):
በምድብ VIIA እና በ3ኛ ፒሪየድ ላይ የሚገኘው ንጥረ ነገር ክሎሪን (Cl) ነው። እንደ ኢ-ብረት (non-metal) ከአሲዳማ ኦክሳይዶች (acidic oxides) አንዱን ይፈጥራል፤ ከውሃ ጋር ሲዋሃድ አሲድ ይሰጣል።

🌳 Afaan Oromoo:
Elementiin garee VIIA fi piriyeedii 3ffaa keessatti argamu Kilooriinii (Cl) dha. Innis miti-sibiila waan ta'eef ooksaayidii asiidawaa (acidic oxide) uuma.`,
    hint: 'Halogens (like Cl) are nonmetals that form acidic oxides with oxygen.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q26',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Solutions: Colligative Properties vs Chemical Identity',
    questionText: '26. Which of the properties of solvents WOULD NOT be affected by the formation of a solution with a non-volatile solute?',
    options: [
      'Boiling Point',
      'Chemical potential',
      'Chemical identity',
      'Freezing Point'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Adding a non-volatile solute affects physical/colligative properties of the solvent (elevates boiling point, depresses freezing point, lowers vapor pressure and changes chemical potential), but the fundamental chemical identity (molecular formula and chemical structure) of the solvent molecules remains unchanged.

🇪🇹 አማርኛ (Amharic):
ተንሳፋፊ ያልሆነ ንጥረ ነገር (non-volatile solute) በአሟሚ ውስጥ ሲሟሟ አካላዊ ባህሪያትን (የመፍላት ነጥብ፣ የመርጋት ነጥብ፣ ኬሚካል ፖቴንሻል) ይለውጣል፤ ነገር ግን የአሟሚው መሰረታዊ ኬሚካላዊ ማንነት (Chemical identity) አይለወጥም።

🌳 Afaan Oromoo:
Sooluutii hin hurkine makun amaloota fiizikaalaa (qabxii danfinaa fi qorraa) kan jijjiiru ta'us, eenyummaa keemikaalaa (Chemical identity) solveentichaa hin jijjiiru.`,
    hint: 'Dissolving a solute changes colligative physical properties, not the molecular identity of the solvent.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q27',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Solutions: Henry\'s Law Calculation',
    questionText: '27. The partial pressure of acetylene, C₂H₂, in a container is 10 atm at 25°C. What is the solubility in molarity of C₂H₂, assume that C₂H₂ obeys Henry\'s law? (k_H = 1.04 mol/L·atm)',
    options: [
      '9.62',
      '0.104',
      '104',
      '10.4'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to Henry\'s Law:
Solubility (S) = k_H × P_gas
S = (1.04 mol/L·atm) × (10 atm) = 10.4 M (or 10.4 mol/L).

🇪🇹 አማርኛ (Amharic):
በሄንሪ ሕግ (Henry\'s Law) መሰረት፡
ሟሟት (S) = k_H × P = 1.04 mol/L·atm × 10 atm = 10.4 M (ሞላሪቲ)።

🌳 Afaan Oromoo:
Akka seera Henry\'tti:
Baqummaa (S) = k_H × P = 1.04 mol/L·atm × 10 atm = 10.4 M.`,
    hint: 'S = k_H * P = 1.04 * 10 = 10.4 M.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q28',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Solutions: Calculating Normality of H₂SO₄',
    questionText: '28. What is the normality of a solution that contains 19.6 g of H₂SO₄ in 20 mL of the solution?',
    options: [
      '0.02',
      '0.01',
      '20',
      '10'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
1. Molar mass of H₂SO₄ = 2(1) + 32 + 4(16) = 98 g/mol.
2. Equivalent mass = Molar mass / n-factor (basicity = 2 for H₂SO₄) = 98 / 2 = 49 g/equivalent.
3. Number of equivalents = Mass / Eq. mass = 19.6 g / 49 g/eq = 0.4 eq.
4. Volume in liters = 20 mL / 1000 = 0.020 L.
5. Normality (N) = Number of equivalents / Volume (L) = 0.4 eq / 0.020 L = 20 N.

🇪🇹 አማርኛ (Amharic):
1. የH₂SO₄ ሞላር ማስ = 98 g/mol፤ ኢክዊቫለንት ማስ = 98 / 2 = 49 g/eq።
2. የኢክዊቫለንት ብዛት = 19.6 / 49 = 0.4 eq።
3. ይዘት = 20 mL = 0.020 L።
4. ኖርማሊቲ N = 0.4 / 0.020 = 20 N።

🌳 Afaan Oromoo:
1. Ulfaatina ikwiivaaleentii H₂SO₄ = 98 / 2 = 49 g/eq.
2. Baay'ina ikwiivaaleentii = 19.6 / 49 = 0.4 eq.
3. Normality = 0.4 eq / 0.020 L = 20 N.`,
    hint: 'N = (mass / Eq mass) / V(L) = (19.6 / 49) / 0.020 = 20 N.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q29',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Thermodynamics: Extensive vs Intensive Properties',
    questionText: '29. Which one of the following illustrates an extensive property?',
    options: [
      'The electrode potential at standard condition for the half-reaction 2Cu²⁺ + 4e⁻ → 2Cu is the same as for Cu²⁺ + 2e⁻ → Cu.',
      'If a system is divided into parts and it is found that the property of the complete system has a value that is the sum of the values of the property of all the parts.',
      'Doubling the volume of a sample also doubles the mass; so the ratio of mass to volume remains the same.',
      'If water in two beakers at the same temperature are mixed to make a single quantity of water and the temperature of the combined quantity of water is the same as it was in the two separate beakers.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
An extensive property depends directly on the size or quantity of matter in the system (such as mass, volume, internal energy, enthalpy). When a system is divided into subsystems, the value of an extensive property for the whole system equals the sum of the values for the parts (additive property).

🇪🇹 አማርኛ (Amharic):
ኤክስቴንሲቭ ፕሮፐርቲ (Extensive property) በቁሱ መጠን ላይ የሚወሰን ሲሆን፣ ስርዓቱ በክፍሎች ሲከፋፈል አጠቃላይ እሴቱ የሁሉም ክፍሎች ድምር (sum of parts) ይሆናል (ለምሳሌ ግዝፈት፣ ይዘት፣ ኢንታልፒ)።

🌳 Afaan Oromoo:
Amalli ekisteensivii (Extensive property) hamma wantaa irratti kan hundaa'u yoo ta'u, sirnichi bakka hedduutti yoo qoodame gatiin waliigalaa ida'ama kutaa hundaatiin wal-qixa ta'a.`,
    hint: 'Extensive properties are additive across parts of a divided system.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q30',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Acid-Base Equilibria: Equivalence Point in Titration',
    questionText: '30. The point in a titration at which the number of moles of OH⁻ ions added to a solution is equal to the number of moles of H⁺ ions originally present is',
    options: [
      'Zero point',
      'End point',
      'Triple point',
      'Equivalence point'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The equivalence point (or stoichiometric point) in an acid-base titration is the exact theoretical point where the chemically equivalent stoichiometric amount of titrant base (moles of OH⁻) has been added to neutralize the analyte acid (moles of H⁺). The end point is when the indicator changes color.

🇪🇹 አማርኛ (Amharic):
በታይትሬሽን (Titration) ውስጥ የተጨመረው የOH⁻ ሞል መጠን ከመጀመሪያው የነበረው የH⁺ ሞል መጠን ጋር እኩል የሚሆንበት ትክክለኛ የኬሚካል ነጥብ ኢክዊቫለንስ ፖይንት (Equivalence point) ይባላል።

🌳 Afaan Oromoo:
Taayitireshinii keessatti qabxiin mooliin OH⁻ itti dabalame moolii H⁺ duraan ture wajjin wal-qixa itti ta'u qabxii ikwiivaaleensii (Equivalence point) jedhama.`,
    hint: 'Stoichiometrically equal moles of H+ and OH- defines the equivalence point.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q31',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Electrochemistry: Electrolysis of Molten Salts',
    questionText: '31. Which one of the following is TRUE about the electrolysis of a molten hypothetical electrolyte, MX?',
    options: [
      'X is produced at the negative electrode.',
      'M is produced at the anode.',
      'Electrons are not transferred from one species to the other.',
      'The overall reaction is redox reaction.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Electrolysis involves non-spontaneous oxidation-reduction reactions driven by electrical energy:
- Cathode (negative electrode): M⁺ + e⁻ → M (reduction of metal cation).
- Anode (positive electrode): X⁻ → 1/2 X₂ + e⁻ (oxidation of nonmetal anion).
Thus, M is produced at cathode, X is produced at anode, electron transfer occurs, and the overall cell process is a redox reaction.

🇪🇹 አማርኛ (Amharic):
የቀለጠ ጨው ኤሌክትሮላይሲስ (electrolysis of molten MX) በአኖድ ኦክሲዴሽን በካቶድ ደግሞ ሪዳክሽን የሚካሄድበት አጠቃላይ ሬዶክስ ግብረ-መልስ (redox reaction) ነው።

🌳 Afaan Oromoo:
Elektiroolaayisiisii MX baqeessaa keessatti kaatoodii irratti M⁺ n hir'ifama (reduction), aanoodii irratti X⁻ n ooksidaayizii ta'a; kanaafuu re'aakshiniin waliigalaa reedooksii (redox) dha.`,
    hint: 'All electrolysis reactions are forced oxidation-reduction (redox) processes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q32',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Industrial Chemistry: Metallurgy & Extraction of Chromium',
    questionText: '32. During the extraction of an unknown metal, the metallic ore was fused with NaOH in air and then dissolved in water to obtain the soluble unknown metal containing species. Reduction with carbon is followed after the solution is treated with HCl. Finally the obtained oxide is reduced to its metallic form by aluminum. The most probable unknown metal would be',
    options: [
      'Ca',
      'Zn',
      'Cr',
      'Pb'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
This sequence describes the industrial extraction of Chromium from chromite ore (FeCr₂O₄):
1. Chromite ore is fused with sodium hydroxide / sodium carbonate in air to produce sodium chromate (Na₂CrO₄).
2. Acidification with HCl yields sodium dichromate (Na₂Cr₂O₇), which is reduced with carbon/sulfur to Cr₂O₃ (chromium(III) oxide).
3. Finally, Cr₂O₃ is reduced to pure chromium metal using aluminum powder (the aluminothermic/Goldschmidt process: Cr₂O₃ + 2Al → 2Cr + Al₂O₃).

🇪🇹 አማርኛ (Amharic):
ይህ ሂደት የክሮሚየም (Cr) ብረታ-ብረት ማውጣት ሂደት ሲሆን፣ በመጨረሻው ደረጃ የተገኘው የክሮሚየም ኦክሳይድ (Cr₂O₃) በአሉሚኒየም ዱቄት አማካኝነት በቴርማይት ሂደት (aluminothermic process) ወደ ንጹህ ክሮሚየም ይቀየራል።

🌳 Afaan Oromoo:
Adeemsi kun baafannaa sibiila Kiroomiyeemii (Cr) kan agarsiisu yoo ta'u, dhuma irratti ooksaayidiin Cr₂O₃ aluumiiniyeemiin gara sibiila qulqulluu Kiroomiyeemiitti jijjiirama.`,
    hint: 'Reduction of oxide by aluminum (aluminothermic process) is used to extract Chromium.',
    difficulty: 'hard',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q33',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Metals & Reactivity Series: Reactivity with Water',
    questionText: '33. Why tin does NOT react with cold water but calcium reacts with cold water quite readily?',
    options: [
      'Due to its less reactive nature.',
      'Due to the formation of a thin oxide layer.',
      'Due to its physical state.',
      'Due to the pH of water.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In the electrochemical activity series of metals, calcium is an active alkaline earth metal located high up near the top of the series, giving it a strong tendency to lose electrons and react vigorously with cold water: Ca + 2H₂O → Ca(OH)₂ + H₂. Tin (Sn) is situated far lower in the activity series and is too unreactive to react with cold water.

🇪🇹 አማርኛ (Amharic):
በብረቶች የንቃት ቅደም ተከተል (Reactivity series) ውስጥ ቆርቆሮ (Tin, Sn) በጣም ዝቅተኛ ንቃት ያለው በመሆኑ ከቀዝቃዛ ውሃ ጋር አይገናኝም፤ በአንጻሩ ካልሲየም (Ca) በጣም ንቁ (reactive) በመሆኑ ከቀዝቃዛ ውሃ ጋር በፍጥነት ይገናኛል።

🌳 Afaan Oromoo:
Tarsimoo socho'iinsa sibiilotaa (activity series) keessatti tiiniin (Sn) sibiila sochii gadi aanaa qabu waan ta'eef bishaan qabbanaawaa wajjin hin wal-nyaatu; Kaalsiyeemiin garuu baay'ee socho'aa waan ta'eef dafee wal-nyaata.`,
    hint: 'Tin is far lower in the activity series than highly reactive calcium.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q34',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Polymers: Vulcanization of Natural Rubber',
    questionText: '34. Why is vulcanization performed in natural rubber?',
    options: [
      'To convert the monomer unit in natural rubber in to polymer.',
      'To establish cross-links between polymer chain in the natural rubber.',
      'To decrease the number of monomer unit in the natural rubber.',
      'To increase the number of monomer unit in the natural rubber.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Vulcanization is the chemical process invented by Charles Goodyear where raw natural rubber (polyisoprene) is heated with sulfur. Sulfur forms disulfide cross-links (-S-S-) between adjacent polyisoprene chains, preventing chains from sliding over each other and thereby vastly improving elasticity, tensile strength, hardness, and thermal resistance.

🇪🇹 አማርኛ (Amharic):
የተፈጥሮ ጎማ ቫልካናይዜሽን (Vulcanization) የሚካሄደው በሰልፈር አማካኝነት በፖሊመር ሰንሰለቶች መካከል ጠንካራ ማጣመሪያዎችን (cross-links) በመፍጠር የጎማውን ጥንካሬ፣ የመለጠጥ ብቃትና ሙቀት የመቋቋም አቅም ለመጨመር ነው።

🌳 Afaan Oromoo:
Hojimaanni Valkaanaayizeeshinii (Vulcanization) gommaa uumamaa keessatti kan raawwatamu salfariidhaan sanyiilee poolimariitii gidduutti boondiiwwan qaxxaamuraa (cross-links) uumuudhaan ciminnaa fi daddafina isaa fooyyessuufi.`,
    hint: 'Vulcanization uses sulfur to introduce cross-links between polymer chains.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q35',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Galvanic Cells: Daniell Cell Components & Salt Bridge',
    questionText: '35. Which one of the following explains the determination of the cell potential of Zn-Cu cell using voltmeter?',
    options: [
      'In the Cu half-cell, Cu metal will be dipped in ZnSO₄ solution.',
      'In the Zn half-cell, Zn metal will be dipped in CuSO₄ solution.',
      'Each U-tube served as a salt bridge that can be filled with saturated KCl.',
      'After the experiment the mass of zinc is increased.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In a standard Zn-Cu Daniell galvanic cell:
- Zn strip dips into ZnSO₄ solution (anode half-cell; Zn oxidizes so Zn mass decreases).
- Cu strip dips into CuSO₄ solution (cathode half-cell; Cu²⁺ reduces to Cu).
- The two half-cells are connected through a U-tube salt bridge containing an inert electrolyte such as saturated KCl (or KNO₃ in agar-agar) to maintain electrical neutrality and complete the internal circuit.

🇪🇹 አማርኛ (Amharic):
በZn-Cu ጋልቫኒክ ሴል (Daniell cell) ውስጥ ሁለቱን ግማሽ ሴሎች ለማገናኘትና የኤሌክትሪክ ክፍተቱን ለመሙላት በሳቹሬትድ የፖታስየም ክሎራይድ (KCl) የተሞላ የU-ቅርጽ የጨው ድልድይ (salt bridge) ያገለግላል።

🌳 Afaan Oromoo:
Seelii galvaanikii Zn-Cu keessatti kutaalee lamaan wal-qunnamsiisuu fi madaallii ayoonotaa eeguuf, ujummoon boca U qabu fi kan dhangala'oo KCl kunsantireetawaatiin guutame akka riqicha soogiddaatti (salt bridge) tajaajila.`,
    hint: 'A U-tube containing saturated KCl serves as the salt bridge.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q36',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Solid State: Classification of Crystalline Solids',
    questionText: '36. Which one of the following is an example of molecular crystals?',
    options: [
      'Diamond',
      'Sodium Chloride',
      'Solid carbon dioxide',
      'Magnesium'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
- Solid carbon dioxide (dry ice, CO₂) is a molecular crystal consisting of discrete neutral CO₂ molecules held together by weak intermolecular London dispersion forces.
- Diamond is a covalent network solid.
- Sodium chloride (NaCl) is an ionic crystal.
- Magnesium (Mg) is a metallic crystal.

🇪🇹 አማርኛ (Amharic):
ጠጣር ካርቦን ዳይኦክሳይድ (Dry ice - Solid CO₂) በደካማ የሞለኪውሎች መካከል መስህብ (intermolecular forces) የተያዙ ሞለኪውሎችን የያዘ ሞለኪውላር ክሪስታል (molecular crystal) ነው። ዳይመንድ ኮቫለንት ኔትወርክ ሲሆን NaCl አዮናዊ ነው፤ ማግኒዥየም ደግሞ ሜታሊክ ነው።

🌳 Afaan Oromoo:
Kaarboon daayooksaayidiin jajjabaan (Solid CO₂ / dry ice) molakiyuulota gidduutti humna laafaa qabuun kan walitti qabame kiristaala molakiyuulaawaa (molecular crystal) dha.`,
    hint: 'Solid CO2 consists of molecules bonded by weak intermolecular forces.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q37',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Kinetics: Factors Affecting Reaction Rates',
    questionText: '37. Which one of the following COULD NOT be considered as factor influencing the rate of chemical reaction?',
    options: [
      'Presence of catalyst',
      'Surface area of reactants',
      'The rate constant of the reaction',
      'Temperature of reactants'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The operational physical factors that directly affect the rate of a chemical reaction are temperature, reactant concentration/pressure, surface area, and catalysts. The rate constant (k) is an intrinsic proportionality constant determined by temperature and activation energy; it is a mathematical parameter of the rate law equation rather than an independent external operational factor that you change.

🇪🇹 አማርኛ (Amharic):
የኬሚካል ግብረ-መልስ ፍጥነትን የሚቀይሩ ተጨባጭ ሁኔታዎች ሙቀት፣ ካታሊስት፣ የንክኪ ስፋት (surface area) እና ክምችት ናቸው። የፍጥነት ቋሚ (Rate constant k) የሂሳብ ቀመሩ ውክልና እንጂ እራሱ እንደ ውጫዊ ተለዋዋጭ ምክንያት አይቆጠርም።

🌳 Afaan Oromoo:
Saffisa re'aakshinii kan jijjiiran ho'a, kunsantireeshinii, bal'ina fuulaa fi kataaliistiidha. Dhaabbataan saffisaa (rate constant k) herregaan lakkoofsa dhaabbataa ta'uu isaati malee akka wanta jijjiirama fiduutti hin lakkaa'amu.`,
    hint: 'Catalyst, surface area, temperature, and concentration are factors affecting rate; k is the proportionality constant.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q38',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Bonding: Hybridization of Oxygen in H₂O',
    questionText: '38. Which one of the following shows the hybridization scheme of the central atom in H₂O?',
    options: [
      'Scheme with sp² hybridization having 1 lone pair and 2 unpaired electrons',
      'Scheme with sp² hybridization having 2 lone pairs and 1 unpaired electron',
      'Scheme with sp³ hybridization having 1 lone pair and 3 unpaired electrons',
      'Scheme with sp³ hybridization having 2 filled hybrid orbitals (lone pairs: ↿⇂, ↿⇂) and 2 half-filled hybrid orbitals (unpaired electrons: ↿, ↿)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The central oxygen atom in water (H₂O) has electron configuration 1s² 2s² 2p⁴. It mixes its one 2s orbital and three 2p orbitals to form four equivalent sp³ hybrid orbitals. Two of these sp³ orbitals contain lone pairs of electrons (↿⇂, ↿⇂), and the other two contain single unpaired electrons (↿, ↿) that overlap with the 1s orbitals of hydrogen atoms to form O-H sigma bonds.

🇪🇹 አማርኛ (Amharic):
በውሃ (H₂O) ውስጥ ያለው ኦክስጅን አንድ 2s እና ሶስት 2p ኦርቢታሎችን በማደባለቅ አራት sp³ ሃይብሪድ ኦርቢታሎችን ይፈጥራል። ሁለቱ ሙሉ በሙሉ በኤሌክትሮን ጥንዶች (lone pairs) የተሞሉ ሲሆኑ፣ ሁለቱ ደግሞ ከሃይድሮጅን ጋር ለመተሳሰር ነጠላ ኤሌክትሮን ይይዛሉ (ዲያግራም D)።

🌳 Afaan Oromoo:
Oksijiiniin H₂O keessaa oorbiitaalota sp³ afur uuma; isaan keessaa lama cimdii elektiroonii qeenxee (lone pairs) yoo ta'an, lamaan hafan ammoo H wajjin boondii uumuuf elektiroonii tokko tokko qabu (Fakkii D).`,
    hint: 'Oxygen in H2O is sp3 hybridized with two lone pairs and two single bonding electrons.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q39',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Kinetics: Integrated Rate Laws & Graphical Methods',
    questionText: '39. In which of the following order of a reaction, a plot of ln [A]_t versus time is a straight line whose slope is -k?',
    options: [
      'First',
      'Zero',
      'Third',
      'Second'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
For a first-order reaction: ln[A]_t = -kt + ln[A]_0.
Comparing this with the linear equation y = mx + c:
Plotting y = ln[A]_t against x = time gives a straight line with slope m = -k and y-intercept = ln[A]_0.
(Note: Zero-order gives [A]_t vs t; Second-order gives 1/[A]_t vs t with slope +k).

🇪🇹 አማርኛ (Amharic):
ለአንደኛ ደረጃ ግብረ-መልስ (First-order reaction)፣ የተቀናጀው የፍጥነት ቀመር ln[A]_t = -kt + ln[A]_0 ነው። ስለዚህ የln[A]_t ከጊዜ (time) ጋር የሚሰጠው ግራፍ ቀጥተኛ መስመር ሲሆን ስሎፑም -k ይሆናል።

🌳 Afaan Oromoo:
Re'aakshinii sadarkaa tokkoffaa (First-order) keessatti, walsimsiifni ln[A]_t = -kt + ln[A]_0 waan ta'eef, giraafiin ln[A]_t fi yeroo sarara qajeelaa kan siiqbiin (slope) isaa -k ta'e kenna.`,
    hint: 'ln[A] vs time is linear with slope = -k for first-order reactions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q40',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Equilibrium: Definition of Dynamic Equilibrium',
    questionText: '40. "A forward and reverse reaction continues to take place at equal rate in microscopic level without change in composition at macroscopic level." This statement is the definition of',
    options: [
      'Chemical kinetics',
      'Dynamic equilibrium',
      'Degree of freedom',
      'The law of mass action'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Dynamic equilibrium refers to a state in a reversible chemical reaction where the rate of the forward reaction equals the rate of the reverse reaction. Because both processes continue simultaneously at equal speeds, the macroscopic concentrations of all reactants and products remain constant over time.

🇪🇹 አማርኛ (Amharic):
ተለዋዋጭ ሚዛን (Dynamic equilibrium) ማለት ወደ ፊት እና ወደ ኋላ የሚሄዱ ግብረ-መልሶች በማይክሮስኮፒክ ደረጃ በእኩል ፍጥነት የሚካሄዱበት እና በማክሮስኮፒክ ደረጃ የንጥረ ነገሮች መጠን የማይለወጥበት ሁኔታ ነው።

🌳 Afaan Oromoo:
Madaallii daayinaamikii (Dynamic equilibrium) jechuun re'aakshiniin gara fuulduraa fi gara duubaa saffisa wal-qixaatiin kan itti fufuu fi kunsantireeshiniin meeshaalee hin jijjiiramne jechuudha.`,
    hint: 'Equal microscopic forward and reverse rates with constant macroscopic composition is Dynamic Equilibrium.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  }
];
