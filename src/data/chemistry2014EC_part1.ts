import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2014_EC_PART1: Question[] = [
  {
    id: 'chem-2014-q1',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Atomic Structure: Electron Probability & Quantum Model',
    questionText: '1. What is the significance of electron probability distribution? It tells us about',
    options: [
      'the probability of finding an electron is very far away from the nucleus.',
      'finding the electron very close to the nucleus at all times.',
      'finding the electron in its orbit at a particular time.',
      'the uncertainty to assign fixed path for electrons.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to the Quantum Mechanical model and the Heisenberg Uncertainty Principle, it is impossible to simultaneously determine both the exact position and momentum of an electron. Hence, electrons do not travel in fixed circular planetary orbits (as in the Bohr model), and electron probability distribution (atomic orbitals) reflects the fundamental uncertainty in assigning a fixed trajectory/path for electrons.

🇪🇹 አማርኛ (Amharic):
በኳንተም ሜካኒካል ሞዴል እና በሃይዘንበርግ እርግጠኛ ያለመሆን መርህ (Heisenberg Uncertainty Principle) መሠረት፣ የኤሌክትሮንን ትክክለኛ ቦታና ፍጥነት በአንድ ጊዜ በትክክል ማወቅ አይቻልም። ስለዚህ የኤሌክትሮን ፕሮባብሊቲ ስርጭት (Electron probability distribution) ለኤሌክትሮኖች የተወሰነ ቋሚ ምህዋር (fixed path) መመደብ ያለውን አለመቻልና እርግጠኛ አለመሆን (uncertainty) ያሳያል።

🌳 Afaan Oromoo:
Akka moodeela makaaniksii kuwaantamiitti, elektiroonotaaf daandii dhaabbataa (fixed path) kennuun hin danda'amu; kanaanis bakki elektiroonii itti argamu carraan (probability) ibsama.`,
    hint: 'Heisenberg Uncertainty Principle states electrons do not have fixed, deterministic orbital paths.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q2',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Periodic Table: Valence Electron Configurations',
    questionText: '2. Which group in the periodic table contains elements with the valence electron configuration of ns²np¹?',
    options: [
      'Group IV',
      'Group III (Group 13 / IIIA)',
      'Group V',
      'Group VI'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The valence configuration ns²np¹ has a total of 2 + 1 = 3 valence electrons. In the periodic table, elements with 3 valence electrons belong to Group IIIA (Group 13 / Boron family, consisting of B, Al, Ga, In, Tl).

🇪🇹 አማርኛ (Amharic):
የቫለንስ ኤሌክትሮን ቅንብር ns²np¹ በውጫዊ ሼል ውስጥ 2 + 1 = 3 ቫለንስ ኤሌክትሮኖች አሉት። ይህም በፔሪዮዲክ ሰንጠረዥ ውስጥ ግሩፕ III (ግሩፕ 13 ወይም IIIA - የቦሮን ቤተሰብ) ነው።

🌳 Afaan Oromoo:
Qindaa'inni elektiroonii ns²np¹ elektiroonota vaalansii 3 (2 + 1) qaba. Kunis garee III (Garee 13) keessatti argama.`,
    hint: 'Add the s and p electrons: 2 + 1 = 3 valence electrons, which indicates Group III (13).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q3',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Bonding: Lewis Structures & Resonance',
    questionText: '3. Which of the following is a correct Lewis structure for diazomethane (CH₂N₂)?',
    options: [
      'H₂C = C = N ⋯',
      'H₂C = N = N ⋯ with invalid octets',
      'H₂C⁻ - N⁺ ≡ N: (with formal charge on carbon and central nitrogen)',
      'H₂C = C = N:'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Diazomethane (CH₂N₂) has 16 valence electrons (4 from C + 2 from 2H + 10 from 2N = 16). The valid resonance structures satisfy the octet rule for all heavy atoms:
1. H₂C=N⁺=N̈⁻ (methylene double-bonded to central nitrogen)
2. H₂C̈⁻ - N⁺ ≡ N: (carbanion single-bonded to central nitrogen with a terminal triple bond).
Option C correctly depicts this major resonance contributor with formal charges: C (-1), central N (+1), terminal N (0).

🇪🇹 አማርኛ (Amharic):
ዳያዞሜቴን (CH₂N₂) በድምሩ 16 የቫለንስ ኤሌክትሮኖች አሉት። ትክክለኛው የሌዊስ መዋቅር H₂C̈⁻ - N⁺ ≡ N: ሲሆን ካርቦን ፎርማል ቻርጅ (-1) እና መሃከለኛው ናይትሮጅን (+1) ይኖራቸዋል።

🌳 Afaan Oromoo:
Caasaa Liiwis sirrii Daayaazomeeteenii (CH₂N₂) keessatti kaarbooniin chaarjii foormaalii (-1) fi naayitiroojiiniin gidduu (+1) qabaata (H₂C⁻ - N⁺ ≡ N:).`,
    hint: 'Count total valence electrons (16) and verify formal charges and complete octets.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q4',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Bonding: Properties of Covalent Compounds',
    questionText: '4. Which of the following is a property of covalent compounds? Covalent compounds',
    options: [
      'is crystalline solids at room temperature.',
      'is generally insoluble in water.',
      'has high melting and boiling points.',
      'is non-volatile.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Most nonpolar covalent (molecular) compounds are held together by weak intermolecular forces (van der Waals forces). As a result, they are generally insoluble in polar solvents like water ("like dissolves like"), have relatively low melting/boiling points, and are volatile.

🇪🇹 አማርኛ (Amharic):
ኮቫለንት ውህዶች (Covalent compounds) በደካማ የሞለኪውሎች መሳሳብ (intermolecular forces) የተያያዙ በመሆናቸው በአብዛኛው በውሃ (ፖላር ሶልቨንት) ውስጥ አይሟሟም (insoluble in water)፣ ዝቅተኛ የመፍላትና የመቅለጥ ነጥብ አላቸው።

🌳 Afaan Oromoo:
Kompaawundoonni kovaalantii humna molakiyuulii gidduu laafaa waan qabaniif yeroo baay'ee bishaan keessatti hin bulbulaman (insoluble in water).`,
    hint: 'Nonpolar covalent molecules do not interact favorably with polar water molecules.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q5',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Bonding: Molecular vs Ionic Species',
    questionText: '5. Which of the following is a covalent molecule?',
    options: [
      'CO₃²⁻',
      '[NH₄]⁺',
      'NaCl',
      'PCl₅'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
PCl₅ (phosphorus pentachloride) is a neutral covalent molecule formed exclusively between non-metal atoms (P and Cl) sharing electron pairs. In contrast, NaCl is an ionic compound, and CO₃²⁻ and NH₄⁺ are polyatomic ions.

🇪🇹 አማርኛ (Amharic):
PCl₅ (ፎስፈረስ ፔንታክሎራይድ) በብረት ባልሆኑ አተሞች (P እና Cl) የጋራ ኤሌክትሮን መጋራት የሚፈጠር ገለልተኛ የኮቫለንት ሞለኪውል ነው። NaCl አዮኒክ ሲሆን፣ CO₃²⁻ እና NH₄⁺ ደግሞ አዮኖች ናቸው።

🌳 Afaan Oromoo:
PCl₅ (Foosfaras peentaakilooraayid) molakiyuulii kovaalantii yoo ta'u, NaCl ammoo kompaawundii ayooniikiidha.`,
    hint: 'Identify the neutral species composed entirely of nonmetals sharing covalent bonds.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q6',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Atomic Theory: Dalton\'s Postulates & Modern Modifications',
    questionText: '6. Which of the following postulates of Dalton\'s atomic theory was modified by the modern atomic theory?',
    options: [
      'Compounds are formed when atoms of more than one element combine.',
      'Atoms are neither created nor destroyed in chemical reactions.',
      'Atoms are indivisible and indestructible.',
      'Atoms are the smallest particles of all elements.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Dalton proposed that atoms are indivisible and indestructible solid spheres. This postulate was modified following the discovery of subatomic particles (electrons, protons, neutrons) and the occurrence of nuclear reactions (fission and fusion), proving that atoms can indeed be divided.

🇪🇹 አማርኛ (Amharic):
የዳልተን አቶሚክ ንድፈ-ሀሳብ "አቶሞች የማይከፋፈሉና የማይጠፉ ናቸው" (Atoms are indivisible and indestructible) የሚለው ነጥብ ንዑሳን የአቶም ቅንጣቶች (ኤሌክትሮን፣ ፕሮቶን፣ ኒውትሮን) እና የኒውክሌር ግብረ-መልሶች ሲገኙ ተሻሽሏል።

🌳 Afaan Oromoo:
Yaad-hiddama Daaltan keessaa "atoomonni kan hin qoodamnee fi hin badne" kan jedhu argannoo elektiroonii, pirootonii fi niwutirooniin fooyya'ee jira.`,
    hint: 'Subatomic particles proved that atoms can be divided into smaller components.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q7',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'History of Atomic Models',
    questionText: '7. Which of the following includes all of the known historical atomic models?',
    options: [
      'Bohr Model, Thomson Model, Rutherford Model, Dalton\'s Atomic Model, de Broglie Model',
      'Bohr Model, the Quantum Mechanical Model, Rutherford Model, Thomson Model, Dalton\'s Atomic Model',
      'Bohr Model, the Quantum Mechanical Model, Thomson Model, Rutherford Model',
      'Bohr Model, Quantum Mechanical Model, Dalton\'s Atomic Model, Valence Bond Model'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The chronological development of atomic models encompasses:
1. Dalton's Solid Sphere Model (1803)
2. Thomson's Plum Pudding Model (1904)
3. Rutherford's Nuclear Planetary Model (1911)
4. Bohr's Quantized Orbit Model (1913)
5. Modern Quantum Mechanical / Wave Model (Schrödinger, 1926).
Option B contains all five major atomic models.

🇪🇹 አማርኛ (Amharic):
ዋና ዋናዎቹ የአቶም ሞዴሎች፦ የዳልተን ሞዴል፣ የቶምሰን ሞዴል፣ የራዘርፎርድ ሞዴል፣ የቦህር ሞዴል እና የኳንተም ሜካኒካል ሞዴል ናቸው (አማራጭ B)።

🌳 Afaan Oromoo:
Moodeelota atoomaa beekamoo hunda kan of keessatti qabatu: Moodeela Daaltan, Toomsan, Raazarfoordi, Boorii fi Makaaniika Kuwaantamiiti.`,
    hint: 'Look for the option listing Dalton, Thomson, Rutherford, Bohr, and Quantum Mechanical models.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q8',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Electronic Configuration: Transition Metals & Anomalies',
    questionText: '8. The electron configuration of Cu (Z=29) is:',
    options: [
      '[Ar] 4s¹ 3d¹⁰',
      '[Kr] 4s² 3d⁹',
      '[Ar] 4s² 4d⁹',
      '[Ar] 4s² 3p⁸'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Copper (Z=29) exhibits an anomalous electron configuration. An electron from the 4s orbital shifts to the 3d orbital because a completely filled 3d subshell (3d¹⁰) provides enhanced thermodynamic and exchange-energy stability: [Ar] 4s¹ 3d¹⁰.

🇪🇹 አማርኛ (Amharic):
የመዳብ (Copper, Z=29) የኤሌክትሮን ቅንብር ልዩ ነው። ሙሉ በሙሉ የተሞላ የ 3d ሰብ-ሼል (3d¹⁰) ከፍተኛ መረጋጋት ስለሚሰጥ ትክክለኛው ቅንብር [Ar] 4s¹ 3d¹⁰ ይሆናል።

🌳 Afaan Oromoo:
Koppariin (Z=29) sababa 3d¹⁰ guutuu ta'ee tasgabbii guddaa qabuuf qindaa'ina [Ar] 4s¹ 3d¹⁰ qabaata.`,
    hint: 'A completely filled d-subshell (d¹⁰) is exceptionally stable, taking one electron from 4s.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q9',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Periodic Table: Mendeleev\'s Periodic Law',
    questionText: '9. What does Mendeleev\'s Periodic Law state? Properties of elements are periodic functions of their',
    options: [
      'atomic radius.',
      'electron configurations.',
      'atomic masses.',
      'atomic numbers.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Dmitri Mendeleev formulated the original Periodic Law in 1869, stating that the physical and chemical properties of elements are periodic functions of their atomic masses (atomic weights). In contrast, the Modern Periodic Law (Moseley) arranges elements by atomic numbers.

🇪🇹 አማርኛ (Amharic):
የሜንዴሌቭ የፔሪዮዲክ ሕግ (Mendeleev\'s Periodic Law) እንደሚደነግገው የንጥረ ነገሮች ኬሚካላዊና ፊዚካላዊ ባህሪያት በአቶሚክ ክብደታቸው (atomic masses) መሠረት በየጊዜው የሚደጋገሙ ዑደቶች ናቸው።

🌳 Afaan Oromoo:
Seerri Meendeliiv akka jedhutti amalli elementootaa ulfaatina atoomaa (atomic mass) isaanii irratti hundaa'a.`,
    hint: 'Mendeleev arranged elements by atomic mass, whereas Henry Moseley later used atomic number.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q10',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Chemical Bonding: Coordinate Covalent (Dative) Bonds',
    questionText: '10. Among the following reactions which one shows a coordinate covalent bond formation?',
    options: [
      'H• + •H → H:H',
      'H• + •C̈l: → H:C̈l:',
      'BF₃ + :NH₃ → F₃B : NH₃',
      ':N• + 3H• → NH₃'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In the Lewis acid-base adduct reaction BF₃ + :NH₃ → F₃B:NH₃, the nitrogen atom in ammonia donates a lone pair of electrons to the electron-deficient boron atom (which has an incomplete octet and an empty 2p orbital), forming a coordinate covalent (dative) bond.

🇪🇹 አማርኛ (Amharic):
በኮኦርዲኔት ኮቫለንት ቦንድ (Coordinate covalent bond) ውስጥ ለቦንዱ የሚያስፈልጉትን ሁለቱንም ኤሌክትሮኖች የሚለግሰው አንድ አተም ብቻ ነው። በ BF₃ + :NH₃ ግብረ-መልስ ውስጥ ናይትሮጅን የብቻውን የኤሌክትሮን ጥንድ ለቦሮን በመስጠት ዳቲቭ ቦንድ ይፈጥራል።

🌳 Afaan Oromoo:
Re'aakshinii BF₃ + :NH₃ → F₃B:NH₃ keessatti Naayitiroojiiniin kophummaa elektiroonii isaa Borooniif kennuun boondii koodineetii (dative bond) uuma.`,
    hint: 'A coordinate covalent bond forms when one species donates both shared electrons to an electron-deficient partner.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q11',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Hydrocarbons: Intermolecular Forces in Alkenes & Alkynes',
    questionText: '11. Which of the following statements is correct regarding alkenes and alkynes?',
    options: [
      'The molecules of alkenes and alkynes are held together by weak intermolecular force.',
      'Alkynes have longer bond length and less surface area than alkenes.',
      'Alkenes are soluble in polar solvents, while alkynes are not soluble in polar solvents.',
      'Alkenes and alkynes are soluble in polar solvents.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Alkenes and alkynes are nonpolar hydrocarbon molecules. As nonpolar substances, the only intermolecular attractions between their molecules are weak London dispersion forces. They are virtually insoluble in polar solvents such as water.

🇪🇹 አማርኛ (Amharic):
አልኪኖችና አልካይኖች ፖላር ያልሆኑ (nonpolar) ሃይድሮካርቦኖች ስለሆኑ በሞለኪውሎቻቸው መካከል ያለው መሳሳብ ደካማ የለንደን ዲስፐርሽን ሃይል (weak intermolecular force) ብቻ ነው።

🌳 Afaan Oromoo:
Alkiinonni fi alkaayinoonni kompaawundoota nooni-poolaarii waan ta'aniif humna laafaa molakiyuulota gidduutiin (weak intermolecular force) walqabatu.`,
    hint: 'Nonpolar hydrocarbons interact exclusively through weak dispersion forces.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q12',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Hydrocarbons: General Formula of Alkynes',
    questionText: '12. What is the general formula of alkynes?',
    options: [
      'CₙH₂ₙ₊₂',
      'CₙH₂ₙ',
      'CₙHₙ₋₂ (n > 2)',
      'CₙH₂ₙ₋₂ (n ≥ 2)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Alkynes are unsaturated hydrocarbons containing one carbon-carbon triple bond (C≡C). Their general homologous molecular formula is CₙH₂ₙ₋₂ where n ≥ 2 (e.g., ethyne C₂H₂, propyne C₃H₄).

🇪🇹 አማርኛ (Amharic):
አልካይኖች (Alkynes) የሶስትዮሽ ቦንድ (C≡C) ያላቸው ሃይድሮካርቦኖች ሲሆኑ አጠቃላይ ቀመራቸው CₙH₂ₙ₋₂ (n ≥ 2) ነው።

🌳 Afaan Oromoo:
Foormulaan waliigalaa alkaayinootaa CₙH₂ₙ₋₂ (n ≥ 2) dha.`,
    hint: 'Alkynes contain one triple bond and have two fewer hydrogens than alkenes: C_n H_{2n-2}.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q13',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Organic Chemistry: IUPAC Nomenclature & Functional Groups',
    questionText: '13. Which functional group containing compound is named using the suffix "-ol"?',
    options: [
      'Phenyl',
      'Hydroxyl (-OH, Alcohols)',
      'Aryl',
      'Carboxyl (-COOH)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Compounds containing the hydroxyl functional group (-OH) attached to a saturated carbon atom are alcohols. In IUPAC nomenclature, alcohols are named by replacing the "-e" ending of the parent alkane with the suffix "-ol" (e.g., ethanol, propanol).

🇪🇹 አማርኛ (Amharic):
ሃይድሮክሲል ፈንክሽናል ግሩፕ (-OH) ያላቸው ውህዶች አልኮሆሎች (Alcohols) ሲባሉ በ IUPAC ስያሜ መሠረት የመጨረሻ ቅጥያቸው "-ol" ይሆናል (ለምሳሌ፦ ኤታኖል፣ ሜታኖል)።

🌳 Afaan Oromoo:
Gareen faankishinaalaa haayidirooksiilii (-OH) qaban alkoolota jedhamu, maqaan isaaniis dhumarratti "-ol" jedhee xumurama.`,
    hint: 'Alcohols containing the -OH group end with the suffix -ol.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q14',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Organic Chemistry: General Formula of Monohydric Alcohols',
    questionText: '14. Which of the following represents the general formula of monohydric alcohols?',
    options: [
      'CₙH₂ₙ₊₁OH',
      'CₙH₂ₙOH',
      'CₙHₙ₋₂(OH)₂',
      'CₙH₂ₙ₋₂OH'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Monohydric alcohols are alcohols containing exactly one hydroxyl group (-OH) attached to an alkyl chain (R-OH). The general formula for saturated monohydric aliphatic alcohols is CₙH₂ₙ₊₁OH (or CₙH₂ₙ₊₂O).

🇪🇹 አማርኛ (Amharic):
ሞኖሃይድሪክ አልኮሆሎች አንድ የሃይድሮክሲል ግሩፕ ብቻ የያዙ ሲሆኑ አጠቃላይ ፎርሙላቸው CₙH₂ₙ₊₁OH (R-OH) ነው።

🌳 Afaan Oromoo:
Foormulaan waliigalaa alkoolota monohaayidiriikii (kan -OH tokko qofaa qaban) CₙH₂ₙ₊₁OH dha.`,
    hint: 'Alkyl group (C_n H_{2n+1}) + hydroxyl group (-OH) = C_n H_{2n+1}OH.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q15',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Acid-Base Concepts: Lewis Theory',
    questionText: '15. What is a Lewis acid? It is',
    options: [
      'a proton acceptor.',
      'an electron pair donor.',
      'an electron pair acceptor.',
      'a proton donor.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
According to the Lewis acid-base theory:
• A Lewis acid is any chemical species that can accept a pair of non-bonding electrons (electron pair acceptor).
• A Lewis base is an electron pair donor.
• (Proton donor/acceptor defines Brønsted-Lowry acids/bases).

🇪🇹 አማርኛ (Amharic):
በሌዊስ ንድፈ-ሀሳብ መሠረት፣ ሌዊስ አሲድ (Lewis acid) ማለት የኤሌክትሮን ጥንድ ተቀባይ (electron pair acceptor) ነው። የኤሌክትሮን ጥንድ ሰጪ ደግሞ ሌዊስ ቤዝ ይባላል።

🌳 Afaan Oromoo:
Akka yaadrimee Liiwisitti, Asidiin Liiwis wantoota cimdiin elektiroonii fudhatan (electron pair acceptor) dha.`,
    hint: 'Lewis defined acids in terms of electron pairs: acids ACCEPT electron pairs, bases DONATE them.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q16',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Thermodynamics: Definition of Enthalpy Change',
    questionText: '16. What is enthalpy change? It is',
    options: [
      'the amount of heat absorbed in a reaction.',
      'the amount of heat given out or absorbed in a reaction at constant pressure and volume.',
      'the amount of heat given out or absorbed in a reaction at constant pressure.',
      'the amount of heat given out in a reaction.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Enthalpy (H) is defined as H = E + PV. The change in enthalpy (ΔH) represents the heat energy exchanged (released or absorbed) between a thermodynamic system and its surroundings during a process occurring at constant pressure (q_p = ΔH).

🇪🇹 አማርኛ (Amharic):
የኢንታልፒ ለውጥ (Enthalpy change, ΔH) ማለት ቋሚ በሆነ የከባቢ አየር ግፊት (at constant pressure) ውስጥ በአንድ ኬሚካላዊ ግብረ-መልስ የሚለቀቅ ወይም የሚመጠጥ የሙቀት ሃይል መጠን ነው።

🌳 Afaan Oromoo:
Jijjiiramni eentaalpii (ΔH) jechuun re'aakshinii keessatti dhiibbaa dhaabbataa (constant pressure) irratti ho'a ba'u ykn xuuxamudha.`,
    hint: 'Enthalpy change is precisely the heat of reaction measured at constant pressure (q_p).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q17',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Electrochemistry: Definition of Oxidation',
    questionText: '17. What is oxidation? Oxidation is',
    options: [
      'the reduction of the oxidation state of the oxidizing agent.',
      'the addition of electron(s) to the oxidizing agent.',
      'the loss of electron(s) by a species, accompanied by an increase in oxidation number.',
      'the addition of hydrogen to a substance and the removal of oxygen from a substance.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In modern electronic redox theory:
• Oxidation is the loss of one or more electrons by an atom, ion, or molecule, resulting in an increase (more positive) in its oxidation number (OIL: Oxidation Is Loss).
• Reduction is the gain of electrons resulting in a decrease in oxidation number (RIG: Reduction Is Gain).

🇪🇹 አማርኛ (Amharic):
ኦክሳይዴሽን (Oxidation) ማለት አንድ ንጥረ ነገር ኤሌክትሮን(ዎችን) አጥቶ የኦክሳይዴሽን ቁጥሩ መጨመር (loss of electrons accompanied by an increase in oxidation number) ነው።

🌳 Afaan Oromoo:
Oksideeshiniin elektiroonii dhabuu fi daballii lakkoofsa oksideeshiniiti (loss of electrons).`,
    hint: 'Remember OIL RIG: Oxidation Is Loss of electrons, leading to an increased oxidation state.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q18',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Electrochemistry: Preferential Discharge of Ions',
    questionText: '18. What is meant by preferential discharge, if a number of ions are present in a solution? It means that the one which requires',
    options: [
      'highest energy will be liberated last at a given electrode.',
      'highest energy will be liberated first at a given electrode.',
      'least energy will be liberated last at a given electrode.',
      'least energy will be liberated first at a given electrode.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
During electrolysis of an aqueous solution containing multiple competing cations or anions, preferential discharge dictates that the ion requiring the lowest energy (lowest discharge potential / standard reduction or oxidation potential) will be preferentially discharged (liberated) first at the electrode.

🇪🇹 አማርኛ (Amharic):
በኤሌክትሮሊሲስ ወቅት በርካታ አዮኖች ባሉበት መፍትሄ ውስጥ፣ ዝቅተኛ የሃይል መጠን የሚጠይቀው (least energy required) አዮን በቅድሚያ በኤሌክትሮዱ ላይ ይለቀቃል (liberated first)።

🌳 Afaan Oromoo:
Ayooniin ho'a ykn anniisaa xiqqaa barbaadu elektroodii irratti dursaa gadhiifama (least energy liberated first).`,
    hint: 'Thermodynamics favors the pathway requiring the minimum energy to discharge an ion first.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q19',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Electrochemistry: Faraday\'s Laws of Electrolysis',
    questionText: '19. Faraday\'s Second Law states:',
    options: [
      'the amount of a substance consumed or produced at an electrode is inversely proportional to the quantity of electricity passing through the solution.',
      'the amount of a substance consumed or produced at an electrode is directly proportional to the quantity of electricity passing through the solution.',
      'passing the same quantity of electricity through solutions of different electrolytes produces masses of substances that are directly proportional to their equivalent masses.',
      'passing the same quantity of electricity through solutions of different electrolytes produces masses of substances that are directly proportional to their molecular masses.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Faraday's Second Law of Electrolysis states that when the same quantity of electricity is passed through several different electrolytes connected in series, the masses of the liberated/deposited substances are directly proportional to their chemical equivalent weights (Equivalent mass = Molar mass / Valence factor): m₁/m₂ = E₁/E₂.

🇪🇹 አማርኛ (Amharic):
የፋራዴይ ሁለተኛ ሕግ (Faraday's Second Law)፦ እኩል መጠን ያለው የኤሌክትሪክ ፍሰት በተለያዩ የኤሌክትሮላይት መፍትሄዎች ውስጥ ሲያልፍ፣ በኤሌክትሮዶች ላይ የሚፈጠሩት የንጥረ ነገሮች ክብደት ከኬሚካላዊ አቻ ክብደታቸው (equivalent masses) ጋር በቀጥታ ተመጣጣኝ ነው።

🌳 Afaan Oromoo:
Seerri lammaffaan Faaraadaay: Hangi elektiroodii irratti oomishamu ulfaatina ikkwiivaalantii (equivalent mass) isaanii wajjin kallattiin wal-madaala.`,
    hint: 'Faraday\'s 2nd law connects mass produced to equivalent mass (m ∝ E).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q20',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Galvanic Cells: Daniell (Zn-Cu) Cell Operations',
    questionText: '20. Which of the following is true about Zn-Cu voltaic cell?',
    options: [
      'As the cell operates, electrons are continuously generated at the cathode and consumed at the anode.',
      'The electrons flow from right to left through the external circuit.',
      'After the cell runs for several hours, the Zn electrode weighs less.',
      'The anode half-cell consists of Cu electrode dipped into a Cu²⁺ solution.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In a Zn-Cu galvanic (Daniell) cell:
• Anode (Oxidation): Zn(s) → Zn²⁺(aq) + 2e⁻ (Zinc metal electrode dissolves into solution, thereby losing mass and weighing less over time).
• Cathode (Reduction): Cu²⁺(aq) + 2e⁻ → Cu(s) (Copper electrode gains mass).
• Electrons flow spontaneously from Zn (anode) to Cu (cathode) through the external wire.

🇪🇹 አማርኛ (Amharic):
በ Zn-Cu ቮልታይክ ሴል ውስጥ፣ ዚንክ በአኖድ ላይ ኦክሲዳይዝድ በመሆን (Zn → Zn²⁺ + 2e⁻) ወደ መፍትሄው ስለሚሟሟ ከጥቂት ሰዓታት በኋላ የዚንክ ኤሌክትሮድ ክብደት ይቀንሳል (Zn electrode weighs less)።

🌳 Afaan Oromoo:
Seelii Zn-Cu keessatti Ziinkiin waan baqee gara furmaataatti makamuuf ulfaatinni elektroodii Ziinkii ni xiqqaata.`,
    hint: 'Zinc is oxidized at the anode (Zn → Zn²⁺ + 2e⁻), causing the zinc electrode to dissolve and lose weight.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
