import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2016_EC_PART4: Question[] = [
  {
    id: 'chem-2016-q61',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Hydrocarbons: Homologous Series of Alkenes and Alkynes',
    questionText: '61. What are the molecular formulae of an alkene and an alkyne containing seven carbon atoms, respectively?',
    options: [
      'C7H14 and C7H12',
      'C7H16 and C7H14',
      'C7H14 and C7H16',
      'C7H12 and C7H14'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• General formula for alkenes (with one double bond): CnH2n. For n = 7: C7H2(7) = C7H14 (Heptene).
• General formula for alkynes (with one triple bond): CnH2n-2. For n = 7: C7H2(7)-2 = C7H12 (Heptyne).
Therefore, the formulae are C7H14 and C7H12, respectively.

🇪🇹 አማርኛ (Amharic):
• የአልኪን (Alkene) ጠቅላላ ፎርሙላ CnH2n ነው፡ n=7 ሲሆን C7H14 (ሄፕቲን)
• የአልካይን (Alkyne) ጠቅላላ ፎርሙላ CnH2n-2 ነው፡ n=7 ሲሆን C7H12 (ሄፕታይን)
ስለሆነም C7H14 እና C7H12 ይሆናሉ።

🌳 Afaan Oromoo:
• 'Alkene': CnH2n -> C7H14 (heptene)
• 'Alkyne': CnH2n-2 -> C7H12 (heptyne).
Kanaafuu, deebiin sirriin C7H14 fi C7H12 dha.`,
    hint: 'Alkene = CnH2n (C7H14), Alkyne = CnH2n-2 (C7H12).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q62',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Organic Chemistry: Laboratory Preparation of Alkenes',
    questionText: '62. Which of the following is the standard laboratory method for the preparation of alkenes?',
    options: [
      'Alkylation of sodium acetylide with a primary alkyl halide.',
      'Heating of sodium salt of an organic acid with soda lime.',
      'Reaction of halogenated alkane with sodium.',
      'Dehydration of alcohols with concentrated sulfuric acid.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Alkenes are routinely prepared in the laboratory by the acid-catalyzed dehydration of alcohols (an elimination reaction) using a strong dehydrating agent like concentrated sulfuric acid (H2SO4) or phosphoric acid (H3PO4) at elevated temperature (~170 °C):
CH3-CH2-OH -> CH2=CH2 + H2O.

🇪🇹 አማርኛ (Amharic):
አልኪኖችን (Alkenes) በቤተ ሙከራ ውስጥ ለማዘጋጀት ተመራጩ ዘዴ አልኮሎችን በተከማቸ ሰልፈሪክ አሲድ (concentrated H2SO4) አማካኝነት ውሃቸውን በማስወገድ (Dehydration of alcohols) ማመንጨት ነው።

🌳 Afaan Oromoo:
'Alkenes' laabraatoorii keessatti qopheessuuf alkoohilii keessaa molakiyuulii bishaanii baasuun (dehydration) asiidii sulfiirikii (H2SO4) faayidaarra oola.`,
    hint: 'Dehydration of alcohols with concentrated H2SO4 produces alkenes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q63',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Aromatic Hydrocarbons: Resonance Hybrid Structure of Benzene',
    questionText: '63. Which of the following represents the correct delocalized resonance hybrid structure of benzene (C6H6)?',
    options: [
      'Hexagonal ring with a localized open double bond chain',
      'Cyclohexane ring with two isolated double bonds',
      'Planar hexagonal carbon ring with an inscribed circle representing delocalized π-electrons',
      'Saturated cyclohexane ring without any double bonds'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The most accurate representation of the benzene ring is a regular planar hexagon with a circle inscribed in the center. The circle signifies the six completely delocalized pi-electrons uniformly distributed across the six carbon p-orbitals in the conjugated aromatic ring system.

🇪🇹 አማርኛ (Amharic):
የቤንዚን (Benzene) ይበልጥ ትክክለኛ የቅርጽ ውክልና በውስጡ ክብ ያለው ባለ ስድስት ጎን ሄክሳጎን ሲሆን፤ ውስጡ ያለው ክብ የሚያሳየው 6ቱ ፓይ-ኤሌክትሮኖች በጠቅላላው ቀለበት ላይ መሰራጨታቸውን (delocalized π-electrons) ነው።

🌳 Afaan Oromoo:
Caasaan sirriin beenziinii (C6H6) rog-jaffaa (hexagon) gidduu isaa geengoo qabu yoo ta\'u, geengoon kun elektiroonota 'pi' ja\'an faca\'anii jiran agarsiisa.`,
    hint: 'A hexagon with an inscribed circle represents the delocalized pi-electron cloud of benzene.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q64',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Industrial Chemistry: Petroleum Refining & Fractional Distillation',
    questionText: '64. Which of the following is a direct petroleum fraction obtained from the industrial fractional distillation of crude oil?',
    options: [
      'Producer gas',
      'Naphthalene',
      'Water gas',
      'Kerosene'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Kerosene (paraffin oil) is a primary petroleum distillate boiling between 150 °C and 275 °C, containing C10 to C16 hydrocarbons, commonly used as jet fuel and domestic lamp/heating fuel. Producer gas and water gas are synthetic industrial fuel gases derived from coal.

🇪🇹 አማርኛ (Amharic):
ከድፍድፍ ነዳጅ (Crude oil) ክፍልፋይ ማጣራት (Fractional distillation) ከሚገኙት ቀጥተኛ የነዳጅ ውጤቶች መካከል ኬሮሲን (Kerosene / የጋዝ ዘይት) አንዱ ነው።

🌳 Afaan Oromoo:
Kuullii zayitii dhangala\'aa (crude oil) irraa gosa dhangala\'oo addaan baafamu keessaa tokko Keerosiinii (Kerosene / gaazii) dha.`,
    hint: 'Kerosene is a major hydrocarbon fraction obtained directly from petroleum refining.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q65',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Organic Chemistry: IUPAC Nomenclature of Carboxylic Acids',
    questionText: '65. What is the molecular formula and IUPAC name of a saturated monocarboxylic acid containing a total of six carbon atoms?',
    options: [
      'C5H11COOH, heptanoic acid',
      'C6H13COOH, heptanoic acid',
      'C5H11COOH, hexanoic acid',
      'C6H13COOH, hexanoic acid'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A saturated monocarboxylic acid with 6 carbon atoms has 5 carbons in its alkyl chain and 1 carbon in the carboxyl group (-COOH):
Formula: C5H11COOH (or CH3-(CH2)4-COOH, C6H12O2).
The IUPAC name for a 6-carbon alkane derivative is hexanoic acid.

🇪🇹 አማርኛ (Amharic):
ስድስት የካርቦን አቶሞች ያሉት ሳቹሬትድ ሞኖካርቦክሲሊክ አሲድ 5 ካርቦን በአልኪል ሰንሰለት እና 1 በካርቦክሲል ግሩፕ ይይዛል፡ C5H11COOH። የ IUPAC ስሙ ሄክሳኖይክ አሲድ (Hexanoic acid) ይባላል።

🌳 Afaan Oromoo:
Asiidiin kaarbooksiiliikii atooma kaarboonii 6 qabu: C5H11COOH yoo ta\'u, maqaan isaa sirriin 'hexanoic acid' jedhama.`,
    hint: 'Total 6 carbons: C5H11 + COOH = hexanoic acid (C5H11COOH).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q66',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Bonding: General Properties of Covalent Compounds',
    questionText: '66. Which of the following descriptions regarding the physical properties of molecular covalent compounds is CORRECT?',
    options: [
      'Covalent compounds have low melting and boiling points.',
      'Most covalent compounds are solids at room temperature.',
      'Most covalent compounds are soluble in water.',
      'Covalent compounds are non-volatile.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Molecular covalent compounds consist of discrete molecules held together by relatively weak intermolecular forces (London dispersion, dipole-dipole). Breaking these weak interactions requires comparatively low thermal energy, resulting in low melting and boiling points.

🇪🇹 አማርኛ (Amharic):
የኮቫለንት ውህዶች (Covalent compounds) በሞለኪውሎቻቸው መካከል ያለው የመሳሳብ ሃይል ደካማ በመሆኑ ዝቅተኛ የመቅለጫ እና የመፍላት የሙቀት መጠን (Low melting and boiling points) አላቸው።

🌳 Afaan Oromoo:
Kompaawundonni kovaaleentii humna harkisa molakiyuulota gidduu jiru laafaa waan qabaniif, qabxii baqiinsaa fi danfifaa gadi aanaa (low melting and boiling points) qabu.`,
    hint: 'Weak intermolecular forces give molecular covalent compounds low melting and boiling points.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q67',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Intermolecular Forces: Classification of Forces',
    questionText: '67. The attractive electrostatic force operating between neighboring individual molecules is known as:',
    options: [
      'nuclear force',
      'intermolecular force',
      'lattice force',
      'intramolecular force'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• Intermolecular forces are forces of attraction or repulsion between neighboring independent molecules (e.g., hydrogen bonds, dipole-dipole, London dispersion).
• Intramolecular forces are the chemical bonds (covalent, ionic, metallic) holding atoms together within a single molecule.

🇪🇹 አማርኛ (Amharic):
በአጎራባች ሞለኪውሎች መካከል የሚኖረው የመሳሳብ ሃይል ኢንተርሞለኪዩላር ሃይል (Intermolecular force) ይባላል።

🌳 Afaan Oromoo:
Humni harkisaa molakiyuulota adda addaa gidduutti uumamu humna 'intermolecular force' jedhama.`,
    hint: 'Forces between distinct molecules are intermolecular forces.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q68',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Bonding: Hybridization & Molecular Geometry of XeF4',
    questionText: '68. The hybridization of the central xenon (Xe) atom in xenon tetrafluoride, XeF4, is sp³d². Which of the following is the molecular shape of XeF4?',
    options: [
      'Octahedral',
      'Square planar',
      'Tetrahedral',
      'Seesaw shape'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In XeF4:
• Central Xe atom has 8 valence electrons + 4 electrons from Fluorine atoms = 12 electrons = 6 electron pairs (Steric Number = 6, sp³d² hybridization).
• Electron geometry: Octahedral (4 bonding pairs + 2 lone pairs).
• The two lone pairs occupy opposite axial positions to minimize 90° repulsions, giving a Square Planar molecular geometry with bond angles of 90°.

🇪🇹 አማርኛ (Amharic):
በ XeF4 ውስጥ ሴኖን (Xe) 4 የቦንድ ጥንዶች እና 2 ያልተጣመሩ ጥንዶች (lone pairs) አሉት። የኤሌክትሮን ቅርጹ octahedral ሲሆን፤ ሁለቱ lone pairs ተቃራኒ አቅጣጫ ስለሚይዙ የሞለኪውሉ ትክክለኛ ቅርጽ ስኩዌር ፕላናር (Square planar) ይሆናል።

🌳 Afaan Oromoo:
XeF4 keessatti atooma Xe irratti hidhoon 4 fi elektiroononni qeenxee (lone pairs) 2 waan jiraniif, bifti molakiyuulicha 'Square planar' ta\'a.`,
    hint: 'AB4E2 system with sp³d² hybridization has a Square Planar molecular geometry.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q69',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Molecular Orbital Theory: Electron Configuration of Peroxide Ion (O2²⁻)',
    questionText: '69. Which of the following is the CORRECT Molecular Orbital (MO) electronic configuration for the peroxide ion, O2²⁻?',
    options: [
      '(σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2pz)² (π2px = π2py)⁴ (π*2px = π*2py)⁴',
      '(σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2pz)² (π2px = π2py)⁴ (π*2px = π*2py)²',
      '(σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2pz)² (π2px = π2py)² (π*2px = π*2py)⁴',
      '(σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2pz)² (π2px = π2py)⁴ (σ*2pz)²'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A neutral O2 molecule has 16 valence/core electrons. The peroxide ion (O2²⁻) has 16 + 2 = 18 electrons.
Filling molecular orbitals according to the Aufbau principle:
(σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2pz)² (π2px = π2py)⁴ (π*2px = π*2py)⁴.
Bond order = (10 - 8) / 2 = 1 (diamagnetic, single bond).

🇪🇹 አማርኛ (Amharic):
የፐርኦክሳይድ አየን (O2²⁻) በአጠቃላይ 18 ኤሌክትሮኖች አሉት። በሞለኪዩላር ኦርቢታል (MO) ሲሞላ፡
(σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2pz)² (π2px = π2py)⁴ (π*2px = π*2py)⁴ ይሆናል።

🌳 Afaan Oromoo:
Ayooniin 'peroxide' (O2²⁻) elektiroonota 18 qaba. Tartiibni 'Molecular Orbital' isaa: (σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2pz)² (π2px = π2py)⁴ (π*2px = π*2py)⁴ dha.`,
    hint: 'O2²⁻ has 18 electrons; all bonding and antibonding π orbitals up to (π*2p)⁴ are filled.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q70',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Kinetics: Reaction Rates and Stoichiometry',
    questionText: '70. Consider the following gas-phase reaction:\nN2(g) + O2(g) -> 2NO(g)\nIf the rate of disappearance of N2 is 2.5 × 10⁻⁶ M/s, what is the rate of formation of NO?',
    options: [
      '5.0 × 10⁻⁶ M/s',
      '1.25 × 10⁻⁶ M/s',
      '2.50 × 10⁻³ M/s',
      '2.50 × 10⁻⁶ M/s'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
From the stoichiometry of the reaction:
Rate = -d[N2]/dt = -d[O2]/dt = (1/2) · d[NO]/dt
Therefore:
Rate of formation of NO = d[NO]/dt = 2 × (-d[N2]/dt)
d[NO]/dt = 2 × (2.5 × 10⁻⁶ M/s) = 5.0 × 10⁻⁶ M/s.

🇪🇹 አማርኛ (Amharic):
ከሪአክሽኑ ስቶይኪያሜትሪ መሰረት፡
የ NO የመፈጠር ፍጥነት = 2 × (የ N2 የመጥፋት ፍጥነት)
= 2 × (2.5 × 10⁻⁶ M/s) = 5.0 × 10⁻⁶ M/s።

🌳 Afaan Oromoo:
Saffisa uumamuu NO = 2 × (saffisa baduu N2) = 2 × (2.5 × 10⁻⁶ M/s) = 5.0 × 10⁻⁶ M/s ta\'a.`,
    hint: 'd[NO]/dt = 2 × (-d[N2]/dt) = 2 × (2.5 × 10⁻⁶ M/s) = 5.0 × 10⁻⁶ M/s.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q71',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Inorganic Chemistry: Classification of Oxides (Peroxides)',
    questionText: '71. Which of the following compounds is classified as a peroxide?',
    options: [
      'K2O',
      'CaO2',
      'ZnO',
      'FeO'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A peroxide is a compound containing an oxygen-oxygen single bond (the peroxide group, O2²⁻) where oxygen has an oxidation number of -1. In calcium peroxide (CaO2), calcium is +2 and oxygen is -1. In contrast, K2O, ZnO, and FeO are normal basic oxides with oxygen in the -2 oxidation state.

🇪🇹 አማርኛ (Amharic):
ፐርኦክሳይድ (Peroxide) በውስጡ የ O2²⁻ አየን የያዘ እና የኦክሲጅን ኦክሲዴሽን ቁጥር -1 የሆነበት ውህድ ነው። ካልሲየም ፐርኦክሳይድ (CaO2) ውስጥ ኦክሲጅን -1 በመሆኑ ፐርኦክሳይድ ነው።

🌳 Afaan Oromoo:
'Peroxide' kompaawundii lakkoofsi oksideeshinii oksijiinii -1 (O2²⁻) qabuudha; CaO2 (calcium peroxide) keessatti oksijiiniin -1 waan ta\'eef 'peroxide' dha.`,
    hint: 'In CaO2 (calcium peroxide), oxygen has an oxidation state of -1.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q72',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Acids and Bases: Binary vs Ternary (Oxy) Acids',
    questionText: '72. Among the following, which one is a ternary acid (an acid composed of three different elements)?',
    options: [
      'H2SO4',
      'H2S',
      'HBr',
      'HCl'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Ternary acids (also called oxoacids) are composed of three different elements: hydrogen, oxygen, and a central nonmetal. H2SO4 contains Hydrogen (H), Sulfur (S), and Oxygen (O).
• Binary acids contain only two elements (e.g., H2S, HBr, HCl).

🇪🇹 አማርኛ (Amharic):
ተርነሪ አሲድ (Ternary acid) ከሶስት የተለያዩ ንጥረ ነገሮች የተገነባ አሲድ ነው። ሰልፈሪክ አሲድ (H2SO4) ሃይድሮጅን፣ ሰልፈር እና ኦክሲጅን ስላሉት ተርነሪ አሲድ ነው።

🌳 Afaan Oromoo:
Asiidiin 'ternary' jedhamu elementoota garaagaraa sadii of keessaa qaba: H2SO4 (H, S, fi O) qabaachuun isaa 'ternary acid' isa taasisa.`,
    hint: 'Ternary acids contain three elements (H, non-metal, O), such as H2SO4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q73',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Acids and Bases: Litmus Indicator Reactions',
    questionText: '73. A student squeezed fresh lemons to prepare lemon juice in a beaker. When a few drops of the lemon juice were tested with both red and blue litmus papers, what was the correct observation?',
    options: [
      'The red litmus paper will turn to blue and the blue litmus paper will maintain its color.',
      'The blue litmus paper will turn red and the red litmus paper will maintain its color.',
      'The blue litmus paper as well as the red litmus paper will maintain their color.',
      'The blue litmus paper and the red litmus paper will turn colorless.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Lemon juice contains citric acid (an aqueous acidic solution with pH ~ 2.2). Acids turn blue litmus paper red, while red litmus paper remains red.

🇪🇹 አማርኛ (Amharic):
የሎሚ ጭማቂ ሲትሪክ አሲድ የያዘ አሲዳማ ፈሳሽ ነው። አሲድ ሰማያዊ ሊትመስ ወረቀትን ወደ ቀይ የሚቀይር ሲሆን ቀዩ ግን ቀይ እንደሆነ ይቆያል።

🌳 Afaan Oromoo:
Dhangala\'aan lomiin asiidii siitiriikii waan qabuuf, waraqaa liitmasii cuquliisa gara diimaatti jijjiira, diimaan garuu diimuma ta\'ee hafa.`,
    hint: 'Acids turn blue litmus paper red, while red litmus remains red.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q74',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Ionic Equilibria: Autoionization of Water & pOH at 37 °C',
    questionText: '74. What is the pOH of pure neutral water at human physiological body temperature of 37 °C, where Kw = 2.5 × 10⁻¹⁴ and its pH is 6.8? (Given log 2.5 = 0.4)',
    options: [
      '6.8',
      '7.5',
      '8.8',
      '8.2'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In pure neutral water at any temperature:
[H⁺] = [OH⁻]
Taking the negative logarithm of both sides:
pH = pOH.
Since pH is 6.8, the pOH of neutral water at 37 °C must also be exactly 6.8.
(Check: pKw = -log(2.5 × 10⁻¹⁴) = 14 - 0.4 = 13.6; pH + pOH = 6.8 + 6.8 = 13.6).

🇪🇹 አማርኛ (Amharic):
ንጹህ ውሃ ውስጥ በማንኛውም የሙቀት መጠን የ [H⁺] እና [OH⁻] መጠን እኩል ስለሆነ pH = pOH ነው።
ስለዚህ pH = 6.8 ከሆነ፣ pOH = 6.8 ይሆናል።

🌳 Afaan Oromoo:
Bishaan qulqulluu keessatti yeroo hunda [H⁺] = [OH⁻] waan ta\'eef pH = pOH dha. Kanaafuu pOH = 6.8 ta\'a.`,
    hint: 'In neutral pure water, [H⁺] = [OH⁻], so pH = pOH = 6.8.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q75',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Ionic Equilibria: pH and pOH Calculations at 25 °C',
    questionText: '75. The hydrogen ion concentration [H⁺] in a certain aqueous solution at 25 °C is 1.0 × 10⁻⁸ M. What is the pOH of this solution?',
    options: [
      '2',
      '6',
      '8',
      '10'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Calculate pH:
pH = -log[H⁺] = -log(1.0 × 10⁻⁸) = 8.0.

Step 2: Use the relationship pH + pOH = 14.0 at 25 °C:
pOH = 14.0 - pH = 14.0 - 8.0 = 6.0.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ pH = -log(1.0 × 10⁻⁸) = 8
ደረጃ 2፡ በ 25 ዲግሪ ሴልሺየስ pH + pOH = 14 ስለሆነ፡
pOH = 14 - 8 = 6 ይሆናል።

🌳 Afaan Oromoo:
Tarkaanfii 1: pH = -log(10⁻⁸) = 8
Tarkaanfii 2: pH + pOH = 14 waan ta\'eef, pOH = 14 - 8 = 6 ta\'a.`,
    hint: 'pH = 8. At 25 °C, pOH = 14 - pH = 14 - 8 = 6.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q76',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Types of Reactions: Thermal Decomposition of Metal Carbonates',
    questionText: '76. Consider the following reaction of zinc carbonate:\nZnCO3(s) -> ZnO(s) + CO2(g)\nThe chemical reaction that takes place during the thermal conversion of ZnCO3 is classified as a:',
    options: [
      'double displacement reaction',
      'single displacement reaction',
      'decomposition reaction',
      'combination reaction'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A decomposition reaction is a chemical process in which a single reactant compound breaks down into two or more simpler substances upon heating or energy input: AB -> A + B. Here, ZnCO3 decomposes into ZnO and CO2 gas.

🇪🇹 አማርኛ (Amharic):
አንድ ውህድ በሙቀት አማካኝነት ወደ ሁለት ወይም ከዚያ በላይ ወደሆኑ ቀላል ንጥረ ነገሮች ሲፈራርስ ዲኮምፖዚሽን (Decomposition reaction) ይባላል።

🌳 Afaan Oromoo:
Wal-nyaatinsi kompaawundii tokko gara wantoota xixxiqqoo lama yookiin isaa olitti caccabsu 'decomposition reaction' jedhama.`,
    hint: 'A single compound breaking into simpler substances is a decomposition reaction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q77',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Stoichiometry: Limiting and Excess Reactants',
    questionText: '77. Given the balanced reaction:\nCaCO3 + 2HCl -> CaCl2 + CO2 + H2O\nIf 40 g of CaCO3 reacts with 50 g of HCl, which substance is the limiting reactant and which is the excess reactant? (Molar masses: CaCO3 = 100 g/mol, HCl = 36.5 g/mol)',
    options: [
      'CaCO3 is limiting and CaCl2 is excess reactants',
      'CaCO3 is limiting and HCl is excess reactants',
      'HCl is limiting and CaCl2 is excess reactants',
      'HCl is limiting and CaCO3 is excess reactants'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Calculate available moles:
• Moles of CaCO3 = 40 g / (100 g/mol) = 0.40 mol.
• Moles of HCl = 50 g / (36.5 g/mol) ≈ 1.37 mol.

Step 2: Stoichiometric ratio:
1 mol of CaCO3 requires 2 mol of HCl.
0.40 mol of CaCO3 requires: 0.40 × 2 = 0.80 mol of HCl.

Step 3: Compare required vs available:
We need 0.80 mol of HCl, but we have 1.37 mol of HCl available.
Therefore, CaCO3 is completely consumed first (Limiting Reactant) and HCl remains in excess (Excess Reactant).

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ ሞል ማስላት፡
• CaCO3 = 40 / 100 = 0.40 ሞል
• HCl = 50 / 36.5 = 1.37 ሞል
ደረጃ 2፡ 0.40 ሞል CaCO3 የሚያስፈልገው 0.80 ሞል HCl ብቻ ነው።
ስለዚህ CaCO3 ቀድሞ የሚያልቅ (Limiting reactant) ሲሆን HCl ደግሞ ትርፍ (Excess reactant) ነው።

🌳 Afaan Oromoo:
Mooliin CaCO3 = 0.40 mol; kan HCl = 1.37 mol.
0.40 mol CaCO3 waan barbaadu 0.80 mol HCl qofa waan ta\'eef, CaCO3\'n 'limiting reactant' yoo ta\'u HCl\'n 'excess reactant' dha.`,
    hint: '0.40 mol CaCO3 requires only 0.80 mol HCl. Since 1.37 mol HCl is present, CaCO3 is limiting and HCl is excess.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q78',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Gas Laws: Combined Gas Law Calculations',
    questionText: '78. A sample of gas has a volume of 100 L at 27 °C and 750 torr. The gas is expanded to a new volume of 250 L at a reduced pressure of 200 torr. What is the final temperature of the gas in °C?',
    options: [
      '-173 °C',
      '-273 °C',
      '-83 °C',
      '-73 °C'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Convert initial temperature to Kelvin:
T1 = 27 + 273 = 300 K.

Step 2: Apply the Combined Gas Law:
(P1 · V1) / T1 = (P2 · V2) / T2
(750 torr · 100 L) / 300 K = (200 torr · 250 L) / T2
75,000 / 300 = 50,000 / T2
250 = 50,000 / T2
T2 = 50,000 / 250 = 200 K.

Step 3: Convert final temperature to Celsius:
T2(°C) = 200 - 273 = -73 °C.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ T1 = 27 + 273 = 300 K
ደረጃ 2፡ የጋዝ ህግ ቀመር፡ (P1 · V1) / T1 = (P2 · V2) / T2
(750 × 100) / 300 = (200 × 250) / T2
250 = 50000 / T2  -> T2 = 200 K
ደረጃ 3፡ ወደ ሴልሺየስ መቀየር፡ 200 - 273 = -73 °C።

🌳 Afaan Oromoo:
T1 = 300 K.
(750 × 100) / 300 = (200 × 250) / T2 -> T2 = 200 K.
Gara °Ctti yoo jijjiiramu: 200 - 273 = -73 °C ta\'a.`,
    hint: '(P1 · V1) / T1 = (P2 · V2) / T2 -> T2 = 200 K = 200 - 273 = -73 °C.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q79',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'States of Matter: Liquids & Vapor Pressure at Boiling Point',
    questionText: '79. Which of the following is the scientifically CORRECT definition of boiling point?',
    options: [
      'Normal boiling point is the temperature at which the liquid starts to be converted to the gaseous state.',
      'Heat of vaporization is the energy required to convert one gram of a solid to a gas at its boiling point.',
      'Boiling point is the temperature at which the vapor pressure of the liquid equals the external atmospheric pressure.',
      'Condensation is the process by which a liquid changes to a gas at the boiling point of the liquid.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The boiling point of a liquid is precisely defined as the temperature at which its saturated vapor pressure equals the surrounding external atmospheric pressure exerted on the liquid surface.

🇪🇹 አማርኛ (Amharic):
የመፍላት ነጥብ (Boiling point) ማለት የአንድ ፈሳሽ የትነት ጫና (Vapor pressure) ከአካባቢው የከባቢ አየር ጫና (Atmospheric pressure) ጋር እኩል የሚሆንበት የሙቀት መጠን ነው።

🌳 Afaan Oromoo:
Qabxiin danfifaa (boiling point) jechuun ho\'a dhiibbaan hurka dhangala\'ichaa (vapor pressure) dhiibbaa qilleensaa (atmospheric pressure) waliin qixxee ta\'udha.`,
    hint: 'Boiling occurs when the liquid\'s vapor pressure equals the prevailing atmospheric pressure.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q80',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Hydrocarbons: General Molecular Formula of Alkenes',
    questionText: '80. Which of the following is the general molecular formula for acyclic alkenes containing a single carbon-carbon double bond?',
    options: [
      'CnHn',
      'CnH2n',
      'CnH2n-2',
      'CnH2n+2'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Acyclic mono-alkenes (olefins) contain one carbon-carbon double bond (C=C), giving them two fewer hydrogen atoms than their corresponding alkanes. Their general molecular formula is CnH2n (where n ≥ 2).

🇪🇹 አማርኛ (Amharic):
አንድ የካርቦን-ካርቦን ድርብ ቦንድ (C=C) ያላቸው አልኪኖች (Alkenes) ጠቅላላ ሞለኪዩላር ፎርሙላ CnH2n (n ≥ 2) ነው።

🌳 Afaan Oromoo:
Foormulaan waliigalaa 'alkenes' hidhoo dachaa tokko qabanii CnH2n (n ≥ 2) dha.`,
    hint: 'Alkanes = CnH2n+2, Alkenes = CnH2n, Alkynes = CnH2n-2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
