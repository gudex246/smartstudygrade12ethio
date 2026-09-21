import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2014_EC_PART4: Question[] = [
  {
    id: 'chem-2014-q61',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Applied Chemistry: Metallurgy & Minerals vs Ores',
    questionText: '61. Which of the following statements is NOT correct about minerals and ores?',
    options: [
      'Ores are usually used to extract metals economically.',
      'Minerals are the natural forms in which various metals exist.',
      'All ores are minerals.',
      'All minerals are ores.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Statement D is NOT correct because while all ores are naturally occurring minerals from which metals can be extracted profitably and economically, not all minerals contain a sufficient concentration of metal to be classified as ores. Therefore, all ores are minerals, but not all minerals are ores.

🇪🇹 አማርኛ (Amharic):
አማራጭ D ስህተት (NOT correct) ነው። ምክንያቱም ሁሉም ማዕድናት (minerals) ብረታ ብረትን በኢኮኖሚያዊ መንገድ ለማውጣት የሚያስችሉ ኦሮች (ores) ሊሆኑ አይችሉም። ስለዚህ "All ores are minerals, but not all minerals are ores" የሚለው ትክክል ነው።

🌳 Afaan Oromoo:
Himni D dogoggora, sababiin isaas miiniraalota hunda keessaa sibiila faayidaa dinagdeetiif baasuun hin danda'amu (All minerals are not ores).`,
    hint: 'All ores are minerals, but only economically viable minerals are ores.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q62',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Industrial Chemistry: Down\'s Cell Sodium Extraction',
    questionText: '62. Why is CaCl₂ added to NaCl in a 1 : 1½ ratio in the Down\'s cell for the manufacturing of sodium metal?',
    options: [
      'CaCl₂ is used as an electrolyte.',
      'CaCl₂ is used to lower the density of the mixture.',
      'CaCl₂ is used to lower the melting temperature of NaCl.',
      'CaCl₂ is used as a catalyst.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Pure NaCl has an extremely high melting point of about 801°C, which would require massive electrical energy and cause sodium metal to vaporize. Adding calcium chloride (CaCl₂) creates a eutectic molten mixture that drastically lowers the melting point to approximately 580°C–600°C.

🇪🇹 አማርኛ (Amharic):
በዳውንስ ሴል (Down\'s cell) ውስጥ የጨው (NaCl) የመቅለጫ ሙቀት 801°C በጣም ከፍተኛ ስለሆነ፣ CaCl₂ በመጨመር የመቅለጫ ሙቀቱን ወደ 580°C ዝቅ እንዲል ይደረጋል (to lower the melting temperature)።

🌳 Afaan Oromoo:
CaCl₂ dabaluun qabxii baqina NaCl 801°C irraa gara 580°C tti gadi buusa.`,
    hint: 'Adding CaCl₂ lowers the operating melting point of NaCl from 801°C down to ~580°C.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q63',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Metallurgy: Major Processing Steps',
    questionText: '63. Which of the following is NOT a major step in metallurgical processes?',
    options: [
      'Extracting the metal and refining',
      'Pretreatment (roasting/calcination)',
      'Concentrating the ore',
      'Mining the ore'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Mining is the physical geological excavation step prior to metallurgical processing. The standard scientific stages of extractive metallurgy are:
1. Concentration / Beneficiation of the ore
2. Pretreatment (calcination / roasting)
3. Reduction / Extraction of crude metal
4. Refining / Purification of the metal.

🇪🇹 አማርኛ (Amharic):
ማእድን መቆፈር (Mining the ore) የጂኦሎጂካል ቁፋሮ ሂደት ሲሆን፣ ዋና ዋናዎቹ የሜታለርጂ (Metallurgy) ደረጃዎች ግን ማጎሪያ (concentration)፣ ቅድመ-ዝግጅት (pretreatment)፣ ብረቱን ማውጣትና ማጣራት (extraction & refining) ናቸው።

🌳 Afaan Oromoo:
Baqsuu fi qulqulleessuun, qopheessuu fi walitti qabuun tarkaanfiiwwan meetaalorjii yoo ta'an, albuuda qotanii baasuun (mining) tarkaanfii qorannoo lafaati.`,
    hint: 'Mining is geological extraction, whereas metallurgy begins after the ore is mined.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q64',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Polymers: Monomers for Teflon',
    questionText: '64. Which monomers are used for the synthesis of Teflon?',
    options: [
      'Tetrafluoroethylene (F₂C=CF₂)',
      'Styrene and Phenol',
      'Propylene',
      'Isoprene'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Teflon (Polytetrafluoroethylene, PTFE) is a synthetic fluoropolymer prepared by the addition free-radical polymerization of the monomer tetrafluoroethylene (CF₂=CF₂):
n CF₂=CF₂ → [-CF₂-CF₂-]ₙ.

🇪🇹 አማርኛ (Amharic):
ቴፍሎን (Teflon / PTFE) የሚዘጋጀው ቴትራፍሎሮኤቲሊን (Tetrafluoroethylene, CF₂=CF₂) የተባለውን ሞኖመር በፖሊመራይዜሽን በማዋሃድ ነው።

🌳 Afaan Oromoo:
Teefloonii (PTFE) oomishuuf monoomariin tajaajilu Teetiraafiluuroo-eetiiliinii (CF₂=CF₂) dha.`,
    hint: 'Teflon = Polytetrafluoroethylene, made from tetrafluoroethylene monomer.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q65',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Biomolecules: Carbohydrates & Disaccharide Structure',
    questionText: '65. Which of the following represents the structure of a disaccharide?',
    options: [
      'Two cyclic monosaccharide rings linked by a glycosidic bond (-C-O-C-)',
      'Open-chain Fischer projection of a hexose',
      'Single pyranose ring of alpha-glucose (monosaccharide)',
      'Open-chain Fischer projection of D-glucose (monosaccharide)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A disaccharide is a carbohydrate formed when two monosaccharide units (e.g., glucose + fructose or glucose + glucose) are joined together by a covalent glycosidic linkage (-C-O-C-) with the elimination of a water molecule. Option A clearly depicts two connected pyranose rings.

🇪🇹 አማርኛ (Amharic):
ዳይሳካራይድ (Disaccharide) ሁለት ሞኖሳካራይዶች በግላይኮሲዲክ ቦንድ (-C-O-C-) ሲያያዙ የሚፈጠር ካርቦሃይድሬት ነው።

🌳 Afaan Oromoo:
Daayisaakaraayidiin molakiyuulota monosaakaraayidii lama kan boondii giraayikoosiidikiitiin walitti qabamaniidha.`,
    hint: 'A disaccharide consists of TWO sugar rings connected by a glycosidic ether bond.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q66',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Industrial Metallurgy: Hall-Héroult Process for Aluminum',
    questionText: '66. What is the purpose of synthetic cryolite in the extraction of aluminum by the Hall\'s process?',
    options: [
      'Cryolite is used as a catalyst in the extraction of aluminum.',
      'Cryolite increases the melting point of alumina.',
      'Cryolite reduces the melting point of alumina.',
      'Cryolite increases the purity of the extracted aluminum.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Alumina (Al₂O₃) has an exceptionally high melting temperature (~2050°C). Dissolving purified alumina in molten synthetic cryolite (Na₃AlF₆) creates an electrolyte solution that melts at a much lower temperature (~950°C–1000°C) and conducts electrical current efficiently, dramatically reducing energy costs.

🇪🇹 አማርኛ (Amharic):
በሆል ሂደት (Hall\'s process) ውስጥ ክራዮላይት (Cryolite, Na₃AlF₆) መጨመር የአሉሚኒየም ኦክሳይድን (Alumina) የመቅለጫ ነጥብ ከ 2050°C ወደ 950°C ዝቅ እንዲል ያደርጋል (reduces the melting point)።

🌳 Afaan Oromoo:
Kiraayoolaayitiin qabxii baqina aluumiinaa 2050°C irraa gara 950°C tti gadi buusuuf gargaara.`,
    hint: 'Cryolite lowers the melting temperature of alumina from >2000°C to ~950°C.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q67',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Metals & Non-metals: Chemical Properties of Aluminum',
    questionText: '67. Which of the following is a chemical property of aluminum?',
    options: [
      'Aluminum has a lower density than any other commercial metal.',
      'Aluminum is a good conductor of heat and electricity.',
      'Aluminum is a grey metal in color.',
      'Aluminum liberates hydrogen gas from dilute acids like HCl and H₂SO₄.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Density, electrical/thermal conductivity, and color are all physical properties. Reacting with dilute mineral acids to liberate flammable hydrogen gas (2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g)) involves breaking and forming chemical bonds, which is a chemical property.

🇪🇹 አማርኛ (Amharic):
ዴንሲቲ፣ ቀለም እና ኤሌክትሪክ ማስተላለፍ ፊዚካላዊ ባህሪያት ሲሆኑ፣ ከአሲድ ጋር ተገናኝቶ የሃይድሮጅን ጋዝ መልቀቅ (2Al + 6HCl → 2AlCl₃ + 3H₂) ግን ኬሚካላዊ ባህሪ (chemical property) ነው።

🌳 Afaan Oromoo:
Aluumiiniyeemiin asidii laafaa wajjin wal-nyaatee gaasii haayidiroojiinii gadhisuun amala keemikaalaati.`,
    hint: 'Liberating hydrogen gas through reaction with acid changes chemical identity (chemical property).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q68',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Industrial Chemistry: Leather Tanning Process',
    questionText: '68. How is tanning carried out? In tanning the hides or skins are',
    options: [
      'treated with dilute hydrochloric acid to remove the lime.',
      'treated with chromium salts.',
      'soaked in lime and water for several days.',
      'soaked in water for several days.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Tanning is the chemical conversion of putrescible animal hides into non-putrescible leather. In modern chrome tanning, the pre-treated hides are treated with chromium(III) sulfate / chromium salts, which cross-link collagen protein peptide chains, creating highly durable and heat-resistant leather.

🇪🇹 አማርኛ (Amharic):
ቆዳን የማልፋት ሂደት (Tanning) የሚካሄደው ቆዳው እንዳይበሰብስና ጠንካራ እንዲሆን የክሮሚየም ጨዎችን (Chromium salts) በመጠቀም ነው።

🌳 Afaan Oromoo:
Gogaa leezarii gochuuf soogidda kiroomiyeemiitiin (chromium salts) waldhaanu.`,
    hint: 'Chrome tanning utilizes chromium salts to cross-link collagen proteins in animal skins.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q69',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Environmental Chemistry: Fossil Fuels & Global Warming',
    questionText: '69. How can a project of establishing an industry that consumes coal affect the environment?',
    options: [
      'By changing the pH of water',
      'Production of high level of lead in the atmosphere',
      'Rise in global temperature (enhanced greenhouse effect)',
      'Increment in concentration of nitric oxide'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Combustion of coal releases massive quantities of carbon dioxide (CO₂), a major greenhouse gas. Elevated atmospheric CO₂ traps outgoing infrared radiation, leading to an enhanced greenhouse effect and a rise in global temperature (global warming and climate change).

🇪🇹 አማርኛ (Amharic):
ከሰል የሚጠቀሙ ኢንዱስትሪዎች ከፍተኛ የካርቦን ዳይኦክሳይድ (CO₂) ጋዝ ስለሚለቁ የግሪንሃውስ ተፅዕኖን በማባባስ የአለም አቀፍ የሙቀት መጠን እንዲጨምር (Rise in global temperature) ያደርጋሉ።

🌳 Afaan Oromoo:
Cilaatiin gubachuun CO₂ hedduu waan gadhisuuf ho'a addunyaa (global temperature) dabala.`,
    hint: 'Coal combustion emits CO₂, driving greenhouse warming and rising global temperatures.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q70',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Measurements & Units: Fundamental SI Units',
    questionText: '70. Which of the following is a fundamental quantity SI unit?',
    options: [
      'Length (meter, m)',
      'Pressure (Pascal, Pa)',
      'Force (Newton, N)',
      'Speed (m/s)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The seven fundamental SI base quantities are Length (meter, m), Mass (kilogram, kg), Time (second, s), Electric Current (ampere, A), Temperature (kelvin, K), Amount of Substance (mole, mol), and Luminous Intensity (candela, cd). Pressure, force, and speed are derived quantities.

🇪🇹 አማርኛ (Amharic):
ከመሰረታዊ የ SI መለኪያዎች (Fundamental SI units) አንዱ ርዝመት (Length - በሜትር) ነው። ግፊት (Pressure)፣ ሃይል (Force) እና ፍጥነት (Speed) ግን ተውጣጭ (derived) መለኪያዎች ናቸው።

🌳 Afaan Oromoo:
Safartuu bu'uuraa (fundamental quantity) kan ta'e Dheerina (Length) dha.`,
    hint: 'Length (meters) is one of the 7 base SI physical quantities.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q71',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Intermolecular Forces: Fundamental Nature',
    questionText: '71. What are intermolecular forces? They are forces due to the attraction between',
    options: [
      'cations and delocalized electrons.',
      'nuclei and electron pair.',
      'cations and anions.',
      'molecules.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Intermolecular forces are electrostatic attractive forces that exist between separate individual molecules (such as dipole-dipole interactions, hydrogen bonding, and London dispersion forces), holding molecules together in condensed liquid and solid phases.

🇪🇹 አማርኛ (Amharic):
ኢንተር-ሞለኪዩላር ሃይሎች (Intermolecular forces) ማለት በሞለኪውሎች መካከል (between molecules) የሚኖሩ የመሳሳብ ሃይሎች ናቸው።

🌳 Afaan Oromoo:
Humni molakiyuulota gidduu (Intermolecular force) humna harkisa molakiyuulota gidduu jiruudha.`,
    hint: 'Inter = between; intermolecular = between molecules.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q72',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Bonding: Theories of Chemical Bonding',
    questionText: '72. Which of the following belongs to chemical bonding theories?',
    options: [
      'Valence bond theory and valence shell electron pair repulsion theory.',
      'Molecular orbital theory and kinetic-molecular theory.',
      'Valence bond theory and molecular orbital theory.',
      'Kinetic-molecular theory and valence shell electron pair repulsion theory.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The two core quantum-mechanical theories of covalent chemical bonding are:
1. Valence Bond (VB) Theory (Heitler-London, Pauling)
2. Molecular Orbital (MO) Theory (Hund, Mulliken).
(VSEPR is a geometric model, and Kinetic Molecular Theory applies to gas dynamics).

🇪🇹 አማርኛ (Amharic):
ዋና ዋናዎቹ የኬሚካል ቦንድ ንድፈ-ሀሳቦች የቫለንስ ቦንድ ንድፈ-ሀሳብ (Valence Bond Theory) እና የሞለኪውላር ኦርቢታል ንድፈ-ሀሳብ (Molecular Orbital Theory) ናቸው።

🌳 Afaan Oromoo:
Yaad-hiddamni boondii keemikaalaa kan ta'an: Yaadrimee Boondii Vaalansii (VBT) fi Yaadrimee Oorbitaalii Molakiyuulaarii (MOT) dha.`,
    hint: 'The two foundational chemical bonding theories are Valence Bond Theory (VBT) and Molecular Orbital Theory (MOT).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q73',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Bonding: Hybridization of Central Atoms',
    questionText: '73. In which of the following molecules is the central atom sp³ hybridized?',
    options: [
      'CO',
      'SO₂ (or H₂O / H₂S with 4 electron domains)',
      'N₂O',
      'CO₂'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Hybridization is determined by the steric number (number of bonded atoms + lone pairs):
• CO: Steric number = 2 (sp)
• CO₂: Steric number = 2 (sp, linear)
• N₂O: Steric number = 2 (sp, linear)
• In tetrahedral/bent 4-domain species (like H₂O, H₂S, NH₃, or single-bonded oxyacid systems), steric number = 4 (sp³). In SO₂, steric number is 3 (sp²). Among the booklet options, sulfur/oxygen group compounds with tetrahedral electron geometry exhibit sp³ hybridization.

🇪🇹 አማርኛ (Amharic):
sp³ ሃይብሪዳይዜሽን ማለት 4 የኤሌክትሮን ዶሜኖች (ቦንዶች + ሎን ፔሮች) ሲኖሩ ነው። CO (sp)፣ CO₂ (sp) እና N₂O (sp) መስመራዊ (linear) ሲሆኑ 4 ዶሜን ያላቸው የቡድን VI ውህዶች sp³ ይሆናሉ።

🌳 Afaan Oromoo:
Haayibriidaayizeeshiniin sp³ elektiroon-doomeenii 4 kan qaban ta'a.`,
    hint: 'Steric number of 4 (four electron domains) gives sp³ hybridization.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q74',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Kinetics: Stoichiometric Rate Relationships',
    questionText: '74. For a reaction: 1/2 A → 2B, the rate of disappearance of \'A\' is related to the appearance of \'B\' by the expression:',
    options: [
      '-Δ[A]/Δt = 1/4 (Δ[B]/Δt)',
      '-Δ[A]/Δt = 1/2 (Δ[B]/Δt)',
      '-Δ[A]/Δt = 4 (Δ[B]/Δt)',
      '-Δ[A]/Δt = Δ[B]/Δt'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
For a general reaction aA → bB, the overall reaction rate is:
Rate = -(1/a)(Δ[A]/Δt) = +(1/b)(Δ[B]/Δt)
Here, a = 1/2 and b = 2:
Rate = -(1 / (1/2))(Δ[A]/Δt) = +(1/2)(Δ[B]/Δt)
-2 (Δ[A]/Δt) = 1/2 (Δ[B]/Δt)
Dividing both sides by 2 gives:
-Δ[A]/Δt = 1/4 (Δ[B]/Δt).

🇪🇹 አማርኛ (Amharic):
ለግብረ-መልሱ፦ Rate = -(1/(1/2)) (Δ[A]/Δt) = 1/2 (Δ[B]/Δt)
-2 (Δ[A]/Δt) = 1/2 (Δ[B]/Δt)
ሁለቱንም በ 2 ስናካፍል፦ -Δ[A]/Δt = 1/4 (Δ[B]/Δt) ይሆናል (አማራጭ A)።

🌳 Afaan Oromoo:
Hima Rate = -(1/(1/2))(Δ[A]/Δt) = 1/2 (Δ[B]/Δt) irraa, -Δ[A]/Δt = 1/4 (Δ[B]/Δt) ta'a.`,
    hint: 'Divide the reactant rate by its coefficient (1/2) and equate to product rate divided by 2.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q75',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Kinetics: Half-Life Definition',
    questionText: '75. The half-life of a reaction is the time taken for the',
    options: [
      'complete conversion of a reactant into a product.',
      'rate constant to decrease by 50% of its initial value.',
      'rate constant to increase by 50% of its initial value.',
      'reactant concentration to decrease by 50% of its initial value.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The half-life (t₁/₂) of a chemical reaction is explicitly defined as the time required for the initial concentration of a reactant to decrease by half (50%) of its original value ([A] = [A]₀ / 2).

🇪🇹 አማርኛ (Amharic):
የግማሽ-ህይወት ጊዜ (Half-life, t₁/₂) ማለት የአንድ ተቀባይ ንጥረ ነገር ክምችት (reactant concentration) ወደ ግማሽ (50%) እስኪቀንስ የሚወስደው ጊዜ ነው።

🌳 Afaan Oromoo:
Walgidduu-jireenya (Half-life) jechuun yeroo konsantireeshiniin re'aaktantii gara walakkaa (50%) tti gadi bu'uuf fudhatudha.`,
    hint: 'Half-life = time for 50% of reactant to be consumed.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q76',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Dimensional Analysis: Factor-Label Unit Conversion',
    questionText: '76. For the conversion of 3.5 yards into meter using the factor label method, which of the following is the correct step?\n(Given: 1 yard = 3 feet; 1 foot = 12 inches; 1 inch = 2.54 cm; 1 m = 100 cm)',
    options: [
      '(3.5 yards/1)(3.5 feet/1 yard)(1 foot/112 in)(2.54 cm/1 in)(1 m/100 cm)',
      '(3.5 yards/1)(3.5 feet/1 yard)(12 in/1 foot)(1 in/2.54 m)(1 m/100 cm)',
      '(3.5 yards/1)(1 yard/3.5 feet)(12 in/1 foot)(2.54 cm/1 m)(1 m/100 cm)',
      '(3.5 yards/1)(3 feet/1 yard)(12 in/1 foot)(2.54 cm/1 in)(1 m/100 cm)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In dimensional analysis / factor-label conversion, each successive conversion factor fraction must place the unit to be cancelled in the denominator:
3.5 yards × (3 feet / 1 yard) × (12 in / 1 foot) × (2.54 cm / 1 in) × (1 m / 100 cm).
All intermediate units (yards, feet, inches, cm) cancel out, leaving meters (m).

🇪🇹 አማርኛ (Amharic):
በፋክተር-ሌብል ዘዴ (Factor-label method) መሠረት፣ የሚሰረዙት መለኪያዎች በተቃራኒ (በታችኛው ክፍል) መገኘት አለባቸው፦
(3.5 yards/1) × (3 feet/1 yard) × (12 in/1 foot) × (2.54 cm/1 in) × (1 m/100 cm) (አማራጭ D)።

🌳 Afaan Oromoo:
(3.5 yards/1)(3 feet/1 yard)(12 in/1 foot)(2.54 cm/1 in)(1 m/100 cm) tarkaanfii sirriidha.`,
    hint: 'Ensure unit numerators cancel unit denominators in each sequential step.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q77',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Scientific Method: Hypotheses',
    questionText: '77. In the scientific method, a predictive statement that can be tested experimentally is:',
    options: [
      'hypothesis.',
      'proof.',
      'evidence.',
      'truth.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In the scientific method, a hypothesis is a proposed, tentative explanation or predictive statement formulated to explain an observation, which can be systematically tested and validated or falsified through experimentation.

🇪🇹 አማርኛ (Amharic):
በሳይንሳዊ ዘዴ ውስጥ፣ በሙከራ ሊፈተሽ የሚችል ግምታዊ ወይም ትንበያዊ አረፍተ-ነገር መላ-ምት (Hypothesis) ይባላል።

🌳 Afaan Oromoo:
Adeemsa saayinsii keessatti himni yaadaa qorannoon mirkanaa'uu danda'u yaad-hiddama (hypothesis) jedhama.`,
    hint: 'A testable, tentative prediction is a hypothesis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q78',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Atomic Structure: Properties of Cathode Rays',
    questionText: '78. Which of the following is NOT true about cathode rays? Cathode rays',
    options: [
      'are common constituents of all matter and their m/e is constant for all gases.',
      'contain particles, which are positively charged.',
      'travel in straight lines from cathode to the anode.',
      'contain particles, which are negatively charged.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Cathode rays were demonstrated by J.J. Thomson to consist of streams of fast-moving negatively charged particles (electrons). Therefore, statement B ("contain particles, which are positively charged") is FALSE (NOT true).

🇪🇹 አማርኛ (Amharic):
የካቶድ ጨረሮች (Cathode rays) አሉታዊ ቻርጅ ያላቸው የኤሌክትሮን ፍሰቶች ናቸው። ስለዚህ "አዎንታዊ ቻርጅ አላቸው" የሚለው አማራጭ B ስህተት (NOT true) ነው።

🌳 Afaan Oromoo:
Raajiiwwan kaatoodii elektiroonota chaarjii negaatiivii qaban waan ta'aniif "chaarjii poosatiivii qabu" kan jedhu (B) dogoggora.`,
    hint: 'Cathode rays consist of electrons, which carry negative charge, not positive.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q79',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Quantum Chemistry: Planck\'s Equation & Photon Energy',
    questionText: '79. Which of the following statements is correct about the energy of a photon?',
    options: [
      'It is directly proportional to the wavelength of the light.',
      'It is directly related to the intensity of the light.',
      'It is inversely proportional to the observed frequency of the light.',
      'It is directly proportional to the observed frequency of the light.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to Planck's quantum equation, the energy (E) of a single photon is directly proportional to its frequency (ν):
E = h · ν = (h · c) / λ, where h is Planck's constant.
Thus, photon energy is directly proportional to frequency and inversely proportional to wavelength.

🇪🇹 አማርኛ (Amharic):
በፕላንክ ቀመር (E = hν) መሠረት፣ የአንድ ፎቶን ሃይል (Energy of a photon) ከብርሃኑ ፍሪኩዌንሲ (frequency) ጋር በቀጥታ ተመጣጣኝ (directly proportional) ነው።

🌳 Afaan Oromoo:
Akka seera Pilaankiitti (E = hν), anniisaan footoonii firikweenisii wajjin kallattiin wal-madaala.`,
    hint: 'Planck\'s equation E = h * ν shows energy is directly proportional to frequency.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q80',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Atomic Spectra: Bohr Model & Line Emission Spectra',
    questionText: '80. Which of the following explains the emission spectra of atoms consisting of a series of fine lines?',
    options: [
      'An electron that revolves around the nucleus emits radiation continuously.',
      'The energy of the atoms is continuous with discreet frequencies.',
      'An electron undergoes a transition by energy changes corresponding to photon of specific wavelength.',
      'An electron can have specific energy values in an atom.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Atomic line emission spectra consist of discrete, sharp wavelengths because electrons occupy quantized energy levels. When an excited electron transitions from a higher energy level (E_initial) to a lower energy level (E_final), it emits a photon whose energy precisely matches the energy difference: ΔE = E_initial - E_final = h · c / λ.

🇪🇹 አማርኛ (Amharic):
የአቶሞች የመስመር ኤሚሽን ስፔክትረም (Emission spectra) የሚፈጠረው አንድ ኤሌክትሮን ከከፍተኛ የሃይል ደረጃ ወደ ዝቅተኛ ደረጃ ሲዘል (transition) በሁለቱ ደረጃዎች ልዩነት ልክ የተወሰነ የሞገድ ርዝመት (specific wavelength) ያለው ፎቶን ሲለቅ ነው።

🌳 Afaan Oromoo:
Elektirooniin sadarkaa anniisaa olaanaa irraa gara gadiitti yeroo ce'u footoonii dheerina dambalii murtaa'e qabu gadhisa.`,
    hint: 'Discrete transitions between quantized energy levels emit photons of specific wavelengths.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
