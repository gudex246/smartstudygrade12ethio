import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2018_EC_PART3: Question[] = [
  {
    id: 'chem-2018-q31',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Acid-Base Equilibria: pH and pOH Calculations',
    questionText: '31. What is the pH of a solution when the concentration of hydroxide ion is 1.0 × 10⁻⁹ M?',
    options: [
      '5',
      '1.8',
      '9',
      '7'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Calculate the pOH of the solution:
pOH = -log[OH⁻]
Given [OH⁻] = 1.0 × 10⁻⁹ M:
pOH = -log(1.0 × 10⁻⁹) = 9.0
Step 2: Calculate the pH using the relationship pH + pOH = 14 (at 25°C):
pH = 14 - pOH
pH = 14 - 9 = 5.
Alternatively, calculate [H⁺] first:
[H⁺] = Kw / [OH⁻] = (1.0 × 10⁻¹⁴) / (1.0 × 10⁻⁹) = 1.0 × 10⁻⁵ M
pH = -log[H⁺] = -log(1.0 × 10⁻⁵) = 5.
Therefore, the pH of the solution is 5.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የpOH ዋጋን ማስላት፡
pOH = -log[OH⁻]
pOH = -log(1.0 × 10⁻⁹) = 9
ደረጃ 2፡ የpH ዋጋን ከpH + pOH = 14 ግንኙነት ማስላት፡
pH = 14 - pOH
pH = 14 - 9 = 5።
ስለዚህ የመፍትሄው pH 5 (አማራጭ a) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: pOH shallaguu:
pOH = -log[OH⁻] = -log(1.0 × 10⁻⁹) = 9
Tarkaanfii 2: pH shallaguu (pH + pOH = 14):
pH = 14 - pOH
pH = 14 - 9 = 5.
Kanaafuu, deebiin 5 dha.`,
    hint: 'pOH = -log(10⁻⁹) = 9. Therefore, pH = 14 - 9 = 5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q32',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: "Gases: Graham's Law of Diffusion",
    questionText: '32. A chemistry teacher designed to fill three similar balloons with three different gases to compare the rate of diffusion of the gases. He/she filled the first balloon with helium gas, the second with hydrogen gas and the third with oxygen gas. Which balloon do you think fill first?',
    options: [
      'Second balloon',
      'Third balloon',
      'First balloon',
      'First and second balloon fills equal'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: State Graham's Law of Diffusion:
Under identical conditions of temperature and pressure, the rate of diffusion (r) of a gas is inversely proportional to the square root of its molar mass (M):
r ∝ 1 / √M
Step 2: Determine molar masses of the three gases:
• First balloon (Helium, He): M = 4.0 g/mol
• Second balloon (Hydrogen, H2): M = 2.0 g/mol
• Third balloon (Oxygen, O2): M = 32.0 g/mol
Step 3: Compare rates of diffusion:
Since hydrogen gas has the lowest molar mass (2.0 g/mol), it has the highest diffusion rate (diffuses fastest).
Therefore, the second balloon (containing hydrogen gas) fills first.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የግሬሃም የዲፊውዥን ህግ (Graham's Law)፡
የጋዞች የመሰራጨት (diffusion) ፍጥነት ከሞላር ክብደታቸው ስኩዌር ሩት ጋር በተገላቢጦሽ ይዛመዳል (r ∝ 1/√M)። ክብደቱ አነስተኛ የሆነው ጋዝ በፍጥነት ይሰራጫል።
ደረጃ 2፡ የሞላር ክብደታቸውን ማነጻጸር፡
• 1ኛ ፊኛ (ሂሊየም፣ He)፡ M = 4 g/mol
• 2ኛ ፊኛ (ሃይድሮጂን፣ H2)፡ M = 2 g/mol
• 3ኛ ፊኛ (ኦክሲጅን፣ O2)፡ M = 32 g/mol
ሃይድሮጂን ከሁሉም ቀላሉ ጋዝ በመሆኑ በጣም ፈጣኑ ነው፤ ስለዚህ ሁለተኛው ፊኛ (Second balloon) ቀድሞ ይሞላል።

🌳 Afaan Oromoo:
Tarkaanfii 1: Seera Giraahaam (Graham's Law):
Saffisi dhangala'uu (diffusion) gaasotaa ulfaatina moolarii isaanii wajjin faallaan wal-gita: gaasiin salphaan dafee dhangala'a.
Tarkaanfii 2: Ulfaatina moolarii ilaaluu:
• H2 = 2 g/mol
• He = 4 g/mol
• O2 = 32 g/mol
Haayidiroojiiniin (H2) hunda caalaa salphaa waan ta'eef saffisaan dhangala'a. Kanaafuu, buufata lammaffaa (second balloon) dafee guuta.`,
    hint: 'Hydrogen has the lowest molar mass (2 g/mol), so it diffuses fastest according to Graham’s Law.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q33',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Laws: Law of Conservation of Mass',
    questionText: '33. Oxygen reacts with sulfur to form sulfur dioxide. Experimentally, it was found that the total mass of the reactants (oxygen and sulfur) is equal to the mass of the product (sulfur dioxide). Which of the following laws illustrates this experiment? The law of:',
    options: [
      'constant composition',
      'conservation of mass',
      'multiple proportions',
      'definite proportions'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Define the Law of Conservation of Mass:
Proposed by Antoine Lavoisier (1789), the Law of Conservation of Mass states that in any chemical reaction, matter is neither created nor destroyed. The total mass of the products must equal the total mass of the reactants:
Total Mass of Reactants = Total Mass of Products
Step 2: Connect to the experimental observation:
"Mass of (Sulfur + Oxygen) = Mass of Sulfur dioxide"
This observation directly demonstrates the Law of Conservation of Mass.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የጅምላ ጥበቃ ህግ (Law of Conservation of Mass)፡
በአንቷን ላቮይዚየር የቀረበው የጅምላ ጥበቃ ህግ በማንኛውም ኬሚካላዊ አጸግብ ውስጥ ቁስ አይፈጠርም ወይም አይጠፋም፤ የአጸግብ አድራጊዎች አጠቃላይ ክብደት ከውጤቶች አጠቃላይ ክብደት ጋር እኩል ይሆናል ይላል።
ስለዚህ የሰልፈር እና ኦክስጅን ድምር ክብደት ከተፈጠረው ሰልፈር ዳይኦክሳይድ ጋር እኩል መሆኑ የጅምላ ጥበቃ ህግን ያረጋግጣል።

🌳 Afaan Oromoo:
Tarkaanfii 1: Seera tursiisa hangaa (Law of conservation of mass):
Wal-nyaatinsa keemikaalaa keessatti wanti haaraan hin uumamu, kan jirus hin badu. Hangi re'aaktantootaa hunda hangi oomishootaa wajjin wal-qixa.
Kanaafuu, yaalichi Seera Tursiisa Hangaa (conservation of mass) ibsa.`,
    hint: 'Mass of reactants = Mass of products demonstrates the Law of Conservation of Mass.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q34',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Classification of Matter: Heterogeneous Mixtures',
    questionText: '34. Which of the following is formed from the combinations of two or more substances with at least two visible phases?',
    options: [
      'Heterogeneous mixture',
      'Compound',
      'Homogeneous mixture',
      'Solution'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Classify types of matter:
• Homogeneous mixture (Solution): A uniform mixture having only one single visible phase throughout (e.g., salt dissolved in water).
• Compound: A pure substance composed of two or more elements chemically combined in fixed ratios, existing in a single phase.
• Heterogeneous mixture: A non-uniform physical combination of two or more substances with distinct boundaries and at least two physically visible, separate phases (e.g., oil and water, sand and water).
Therefore, a combination with at least two visible phases is a heterogeneous mixture.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የቁስ አካላትን ምደባ መረዳት፡
• ሆሞጂነስ ውህድ (Homogeneous mixture / Solution)፡ አንድ ወጥ የሆነ እና አንድ ብቻ የሚታይ ክፍል (single phase) ያለው ድብልቅ ነው።
• ሄትሮጂነስ ውህድ (Heterogeneous mixture)፡ በውስጡ ቢያንስ ሁለት ወይም ከዚያ በላይ የሚታዩ የተለያዩ ክፍሎች (phases) ያሉት ድብልቅ ነው (ለምሳሌ ዘይትና ውሃ፣ አሸዋና ውሃ)።
ስለዚህ ትክክለኛው መልስ Heterogeneous mixture ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Ramaddii maatiirii:
• Makaa walfakkaataa (Homogeneous mixture): Fuula ykn kutaalee adda ba'anii mul'atan tokko qofa qaba.
• Makaa wal-hin-fakkaanne (Heterogeneous mixture): Makaa wantoota lamaa fi isaa olii ta'ee kutaalee ijaan adda ba'anii mul'atan (visible phases) lamaa fi isaa ol qaba (fkn, zayitaa fi bishaan).
Kanaafuu, deebiin Heterogeneous mixture dha.`,
    hint: 'A mixture with two or more distinct, visibly separate phases is a heterogeneous mixture.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q35',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Gas Laws: Combined Gas Law at STP',
    questionText: '35. If a 50 cm³ sample of gas exerts a pressure of 60.0 kPa at 35°C, what volume will it occupy at STP (0°C and 1 atm) in cm³? (1 atm = 101.325 kPa)',
    options: [
      '226.86',
      '234.0',
      '26.24',
      '265.0'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Identify the initial and final states:
• Initial state (1):
  V₁ = 50 cm³
  P₁ = 60.0 kPa
  T₁ = 35°C = 35 + 273.15 = 308.15 K
• Final STP state (2):
  P₂ = 1 atm = 101.325 kPa
  T₂ = 0°C = 273.15 K
  V₂ = ?
Step 2: Apply the Combined Gas Law:
(P₁ × V₁) / T₁ = (P₂ × V₂) / T₂
Step 3: Solve for V₂:
V₂ = (P₁ × V₁ × T₂) / (P₂ × T₁)
V₂ = (60.0 kPa × 50 cm³ × 273.15 K) / (101.325 kPa × 308.15 K)
V₂ = (819,450) / (31,223.3) ≈ 26.24 cm³.
Therefore, the volume occupied at STP is 26.24 cm³.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የተሰጡትን መረጃዎች መመዝገብ፡
• P₁ = 60.0 kPa, V₁ = 50 cm³, T₁ = 35 + 273.15 = 308.15 K
• በSTP ላይ፡ P₂ = 101.325 kPa, T₂ = 273.15 K, V₂ = ?
ደረጃ 2፡ የጋዝ ህጎች ጥምር ቀመር (Combined Gas Law)፡
V₂ = (P₁ × V₁ × T₂) / (P₂ × T₁)
ደረጃ 3፡ ማስላት፡
V₂ = (60.0 × 50 × 273.15) / (101.325 × 308.15)
V₂ = 819,450 / 31,223.3 ≈ 26.24 cm³።
ስለዚህ ትክክለኛው መልስ 26.24 cm³ (አማራጭ c) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Qabxiilee kennaman:
• P₁ = 60.0 kPa, V₁ = 50 cm³, T₁ = 308.15 K
• STP irratti: P₂ = 101.325 kPa, T₂ = 273.15 K
Tarkaanfii 2: Foormulaa waloo gaasotaa fayyadamuu:
V₂ = (P₁ × V₁ × T₂) / (P₂ × T₁)
V₂ = (60.0 × 50 × 273.15) / (101.325 × 308.15) ≈ 26.24 cm³.`,
    hint: 'Use (P₁V₁)/T₁ = (P₂V₂)/T₂ where P₂ = 101.325 kPa, T₂ = 273.15 K, T₁ = 308.15 K.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q36',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Polymers: Monomers of Polyethylene Terephthalate (PET / Dacron)',
    questionText: '36. The polymer [-O-CH2-CH2-O-C(=O)-C6H4-C(=O)-]n is prepared by condensation polymerization. What are the monomers for this condensation polymer?',
    options: [
      'Adipic acid and hexamethylene diamine',
      'Ethylene glycol and terephthalic acid',
      'Ethylene glycol and adipic acid',
      'Terephthalic acid and hexamethylene diamine'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Analyze the repeating unit of the polymer:
The chemical formula shows an ester linkage (-COO-) formed between a diol and a dicarboxylic acid:
-[-O-CH2-CH2-O-] comes from a diol with 2 carbon atoms: Ethylene glycol (ethane-1,2-diol, HO-CH2-CH2-OH).
-[-C(=O)-C6H4-C(=O)-] comes from a benzene-1,4-dicarboxylic acid: Terephthalic acid (HOOC-C6H4-COOH).
Step 2: Identify the polymer:
This is Polyethylene terephthalate (PET or Dacron/Terylene), a polyester formed by the condensation polymerization of ethylene glycol and terephthalic acid with the elimination of water molecules.
Therefore, the monomers are ethylene glycol and terephthalic acid.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የፖሊመሩን ክፍሎች መመርመር፡
የተሰጠው ፖሊመር የኤስተር ትስስር (-COO-) ያለው ፖሊኤስተር (PET / Dacron) ነው።
• -O-CH2-CH2-O- ክፍል የመጣው ከኤትሊን ግላይኮል (Ethylene glycol, HO-CH2-CH2-OH) ነው።
• -C(=O)-C6H4-C(=O)- ክፍል የመጣው ከቴሬፍታሊክ አሲድ (Terephthalic acid, HOOC-C6H4-COOH) ነው።
እነዚህ ሁለት ሞኖመሮች ውሃን በማስወገድ በኮንደንሴሽን ፖሊመራይዜሽን ይጣመራሉ።
ስለዚህ ሞኖመሮቹ Ethylene glycol and terephthalic acid ናቸው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Kutaa boolimeerichaa ilaaluu:
Boolimeeriin kun 'Polyethylene terephthalate' (PET) jedhama.
• Kutaan -O-CH2-CH2-O- Ithiiliin gilaayikool (Ethylene glycol) irraa dhufe.
• Kutaan -C(=O)-C6H4-C(=O)- Asiidii teereeftaaliik (Terephthalic acid) irraa dhufe.
Kanaafuu, moonoomeeronni isaa Ithiiliin gilaayikoolii fi asiidii teereeftaaliikidha.`,
    hint: 'PET (polyester) is synthesized from ethylene glycol (HO-CH2-CH2-OH) and terephthalic acid (HOOC-C6H4-COOH).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q37',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Organic Chemistry: IUPAC Nomenclature and Structure of 2-Hexanol',
    questionText: '37. Which of the following is the molecular formula of 2-hexanol?',
    options: [
      'CH3CH2CH2CH2CH(OH)CH3',
      'CH3CH2CH2CH2C(OH)2CH3',
      'CH3CH2CH2C(OH)2CH2CH3',
      'CH3CH2CH2CH2CH2CH2OH'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Break down the IUPAC name "2-hexanol":
• "hexan" indicates a 6-carbon saturated alkane chain: C6H14.
• "-ol" indicates an alcohol containing one hydroxyl (-OH) functional group.
• "2-" indicates that the -OH group is attached to the 2nd carbon atom of the chain.
Step 2: Construct the condensed structural formula:
Numbering from right to left:
C1: CH3
C2: CH(OH)
C3: CH2
C4: CH2
C5: CH2
C6: CH3
Writing left-to-right: CH3-CH2-CH2-CH2-CH(OH)-CH3.
(Note: Option D is 1-hexanol; Options B and C are diols with two OH groups on the same carbon).
Therefore, Option A is the correct structure.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ 2-hexanol የሚለውን ስም መተንተን፡
• "hexan" 6 ካርቦን ያለው ሰንሰለት ያሳያል።
• "-ol" አልኮሆል መሆኑን (-OH ግሩፕ) ያሳያል።
• "2-" የ-OH ግሩፑ በሁለተኛው ካርቦን ላይ መያያዙን ያመለክታል።
ደረጃ 2፡ ፎርሙላውን መጻፍ፡
CH3-CH2-CH2-CH2-CH(OH)-CH3 (በካርቦን ቁጥር 2 ላይ -OH አለ)።
አማራጭ D የ1-hexanol ሲሆን፣ B እና C ሁለት -OH አላቸው።
ስለዚህ ትክክለኛው መልስ አማራጭ A ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Maqaa '2-hexanol' xiinxaluu:
• "hexan" atoomota kaarboonii 6 qaba.
• "2-ol" gareen haayidiroogsiilii (-OH) kaarboonii lakkoofsa 2ffaa irratti argama.
Tarkaanfii 2: Caasaa isaa:
CH3CH2CH2CH2CH(OH)CH3.
Kanaafuu, filannoon sirriin A dha.`,
    hint: '2-hexanol is a 6-carbon straight-chain monohydric alcohol with the -OH group on the second carbon: CH3CH2CH2CH2CH(OH)CH3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q38',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'States of Matter: Types of Crystalline Solids (Metallic Crystals)',
    questionText: '38. Crystalline solids are classified as covalent, ionic, molecular and metallic crystals. Which of the following is an example of a metallic crystal?',
    options: [
      'Diamond',
      'Gold',
      'KCl',
      'CaCO3'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Classify the crystal types of the given solids:
• Diamond: Covalent network crystal held together by a giant three-dimensional lattice of sp³ carbon-carbon covalent bonds.
• KCl (Potassium chloride): Ionic crystal composed of alternating K⁺ and Cl⁻ ions held by electrostatic ionic bonds.
• CaCO3 (Calcium carbonate): Ionic crystal composed of Ca²⁺ and polyatomic CO3²⁻ ions.
• Gold (Au): Metallic crystal consisting of a regular lattice of positive metal cations surrounded by a sea of delocalized valence electrons (metallic bonding).
Therefore, Gold is an example of a metallic crystal.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የክሪስታል አይነቶችን መለየት፡
• ዳይመንድ (Diamond)፡ ኮቫለንት ኔትወርክ ክሪስታል ነው።
• ፖታሲየም ክሎራይድ (KCl) እና CaCO3፡ አዮኒክ ክሪስታሎች ናቸው።
• ወርቅ (Gold, Au)፡ በብረታማ ትስስር (metallic bond) የተያዘ ሜታሊክ ክሪስታል (metallic crystal) ነው።
ስለዚህ ትክክለኛው መልስ ወርቅ (Gold) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Gosoota kireestaalotaa adda baasuu:
• Daayimondii: Kireestaala kovaalantii (Covalent network).
• KCl fi CaCO3: Kireestaala ayoonawaa (Ionic crystals).
• Warqee (Gold / Au): Sibiila waan ta'eef kireestaala sibiilawaa (Metallic crystal) dha.
Kanaafuu, deebiin Gold dha.`,
    hint: 'Gold (Au) is an elemental metal held by metallic bonds in a metallic crystal lattice.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q39',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Electrochemistry: Standard Cell Potential of Daniell Cell (Zn-Cu)',
    questionText: '39. A Grade-12 student is allowed to set-up a Zn-Cu cell containing 1.0 M ZnSO4 solution and 1.0 M CuSO4 solution to measure a cell potential using a voltmeter. What will be the reading of the voltmeter for his/her experiment?',
    options: [
      '0.34 V',
      '0.76 V',
      '0.42 V',
      '1.1 V'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Identify the standard reduction potentials for the Daniell cell electrodes:
• Cathode (reduction of copper):
  Cu²⁺(aq) + 2e⁻ → Cu(s)    E°_cathode = +0.34 V
• Anode (oxidation of zinc):
  Zn²⁺(aq) + 2e⁻ → Zn(s)    E°_anode = -0.76 V
Step 2: Calculate standard cell potential E°_cell:
E°_cell = E°_cathode - E°_anode
E°_cell = +0.34 V - (-0.76 V)
E°_cell = +0.34 V + 0.76 V = +1.10 V.
Since both solutions are 1.0 M at standard state (Q = 1), the voltmeter reading will be 1.1 V.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የዳንኤል ሴል የስታንዳርድ ፖቴንሺያሎችን መመልከት፡
• ካቶድ (የኮፐር ሪዳክሽን)፡ E° = +0.34 V
• አኖድ (የዚንክ ኦክሲዴሽን)፡ E° = -0.76 V
ደረጃ 2፡ የሴል ቮልቴጁን (E°_cell) ማስላት፡
E°_cell = E°_cathode - E°_anode
E°_cell = 0.34 V - (-0.76 V) = 0.34 + 0.76 = 1.10 V።
ስለዚህ የቮልትሜትር ንባቡ 1.1 V ይሆናል።

🌳 Afaan Oromoo:
Tarkaanfii 1: Dandeettii qulqulluu (Standard reduction potential):
• Kaasoodii (Cu): E° = +0.34 V
• Anoodii (Zn): E° = -0.76 V
Tarkaanfii 2: Dandeettii seelii guutuu shallaguu:
E°_cell = E°_cathode - E°_anode
E°_cell = +0.34 V - (-0.76 V) = 1.10 V.
Kanaafuu, dubbisni voltmeetiraa 1.1 V ta'a.`,
    hint: 'E°cell = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0.34 - (-0.76) = 1.10 V.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q40',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Electrochemistry: Factors Affecting Preferential Discharge',
    questionText: '40. Which of the following factors does NOT affect preferential discharge of ions during electrolysis?',
    options: [
      'Nature of ions',
      'Nature of electrodes',
      'Thickness of the electrodes',
      'Concentration of ions'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Review factors influencing preferential discharge at electrodes during electrolysis:
1. Relative position (nature) of the ions in the electrochemical series: Lower ions discharge more readily.
2. Concentration of the ions: Highly concentrated ions may discharge preferentially over lower-concentration ions (e.g., concentrated chloride vs hydroxide).
3. Nature of the electrodes: Inert electrodes (Pt, graphite) behave differently from active electrodes (Cu, Ag) which participate in the reaction.
Step 2: Identify the non-factor:
The physical thickness, width, or shape of the electrodes influences electrical resistance or surface current capacity, but has NO effect on the chemical thermodynamic preference of which ion discharges.
Therefore, thickness of the electrodes does not affect preferential discharge.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ በኤሌክትሮላይሲስ ወቅት አዮኖች ተመርጠው እንዲወጡ (preferential discharge) ተጽዕኖ የሚያደርጉ ነገሮች፡
1. የአዮኖች ተፈጥሮና በኤሌክትሮኬሚካል ተከታታይ ውስጥ ያላቸው ቦታ
2. የአዮኖች ክምችት (Concentration)
3. የኤሌክትሮዶች ተፈጥሮ (Nature of electrodes)
ደረጃ 2፡ ተጽዕኖ የሌለው ነገር፡
የኤሌክትሮዶች ውፍረት (Thickness of the electrodes) የኤሌክትሪክ ፍሰት መቋቋምን ሊነካ ይችላል እንጂ የትኛው አዮን ቀድሞ እንደሚወጣ ምንም ተጽዕኖ አያመጣም።
ስለዚህ ትክክለኛው መልስ Thickness of the electrodes ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Wantoota filannoo ayoonota elektiroodii irratti dhiibbaa geessisan:
1. Amala ayoonotaa (bakka isaan qaban)
2. Qindoomina ayoonotaa (Concentration)
3. Amala elektiroodotaa (Inert ykn Active)
Tarkaanfii 2: Wanta dhiibbaa hin qabne:
Furdinni elektiroodotaa (Thickness of the electrodes) filannoo ayoonotaa irratti dhiibbaa homaayyuu hin qabu.
Kanaafuu, deebiin filannoo c dha.`,
    hint: 'Physical dimensions (like thickness) of electrodes do not determine thermodynamic discharge preference.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q41',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Periodic Table & Ions: Ionization of Calcium (Group IIA)',
    questionText: "41. A given element 'M' has atomic number of 20. What is the common ion form of this element after ionization process?",
    options: [
      'M⁺',
      'M²⁺',
      'M⁻',
      'M²⁻'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Identify the element and its valence shell configuration:
Atomic number Z = 20 is Calcium (Ca), an alkaline earth metal in Group IIA (Group 2).
Its electron configuration is 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² (or [Ar] 4s²).
Step 2: Ionization process:
To achieve a stable noble gas configuration (isoelectronic with Argon, [Ar]), calcium readily loses its two outermost 4s valence electrons:
M → M²⁺ + 2e⁻
Therefore, the stable and common ion formed is M²⁺.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ ንጥረ ነገሩንና የኤሌክትሮን ውቅሩን መለየት፡
አቶሚክ ቁጥሩ 20 የሆነው ንጥረ ነገር ካልሲየም (Calcium, Ca) ሲሆን በግሩፕ IIA ውስጥ ይገኛል።
የኤሌክትሮን አቀማመጡ፡ [Ar] 4s² ነው።
ደረጃ 2፡ የአዮናይዜሽን ሂደት፡
የተረጋጋውን የአርጎን (Ar) ሼል ለማግኘት 2ቱን የውጭ ኤሌክትሮኖች አሳልፎ ይሰጣል፡
M → M²⁺ + 2e⁻
ስለዚህ የሚፈጠረው የተለመደው አዮን M²⁺ ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Elementicha baruu:
Lakkoofsi atoomawaa 20 Kaalsiyeemii (Ca) dha; Garee IIA keessatti argama.
Qindaa'ina elektiroonii: [Ar] 4s² qaba.
Tarkaanfii 2: Adeemsa ayoonaayizeeshinii:
Garee gaasota kabajamoo (Argon) wajjin wal-qixxaachuuf elektiroonota vaalaansii 2 ofirraa gata:
M → M²⁺ + 2e⁻
Kanaafuu, bifti ayoonii isaa M²⁺ dha.`,
    hint: 'Z = 20 is Calcium (Group IIA), which loses two valence electrons to form Ca²⁺ (M²⁺).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q42',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Periodic Table: Short vs. Long Periods in the Modern Periodic Table',
    questionText: '42. Which one of the following periods, is the short period in the modern periodic table?',
    options: [
      'Period 5',
      'Period 3',
      'Period 4',
      'Period 6'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Categorize periods by number of elements:
• Period 1: Very short period (contains 2 elements: H and He).
• Period 2: Short period (contains 8 elements: Li to Ne).
• Period 3: Short period (contains 8 elements: Na to Ar).
• Period 4: Long period (contains 18 elements: K to Kr).
• Period 5: Long period (contains 18 elements: Rb to Xe).
• Period 6: Very long period (contains 32 elements: Cs to Rn).
Step 2: Evaluate given options:
Among the choices (Period 5, Period 3, Period 4, Period 6), Period 3 is the only short period (having only 8 elements without transition d-block metals).
Therefore, Period 3 is the correct answer.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ በዘመናዊው ፒሪዮዲክ ቴብል ውስጥ ፔሬዶች እንዴት እንደሚመደቡ፡
• ፔሬድ 1፡ በጣም አጭር ፔሬድ (2 ንጥረ ነገሮች ብቻ)
• ፔሬድ 2 እና ፔሬድ 3፡ አጫጭር ፔሬዶች (short periods - 8 ንጥረ ነገሮች እያንዳንዳቸው)
• ፔሬድ 4 እና ፔሬድ 5፡ ረዣዥም ፔሬዶች (long periods - 18 ንጥረ ነገሮች እያንዳንዳቸው)
• ፔሬድ 6፡ በጣም ረጅም ፔሬድ (32 ንጥረ ነገሮች)
ከተሰጡት አማራጮች ውስጥ አጭር ፔሬድ (short period) የሆነው Period 3 ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Ramaddii piriyeedota taablee piriyeodikiiti:
• Piriyeedii 1: Baay'ee gabaabaa (elementoota 2)
• Piriyeedii 2 fi 3: Piriyeedota gabaaboo (elementoota 8 qabu)
• Piriyeedii 4 fi 5: Piriyeedota dhedheeroo (elementoota 18 qabu)
• Piriyeedii 6: Baay'ee dheeraa (elementoota 32 qabu)
Filannoowwan kennaman keessaa gabaabaan Piriyeedii 3 (Period 3) dha.`,
    hint: 'Periods 2 and 3 contain 8 elements each and are designated as short periods.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q43',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Reactions: Classification of Decomposition Reactions',
    questionText: '43. What is the reaction type that involves the breaking down of a single compound into two or more components?',
    options: [
      'Decomposition reaction',
      'Redox reaction',
      'Displacement reaction',
      'Combination reaction'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Define types of chemical reactions:
• Combination (Synthesis) reaction: Two or more substances combine to form a single product (A + B → AB).
• Single displacement reaction: An element displaces another from a compound (A + BC → AC + B).
• Decomposition reaction: A single reactant compound breaks down into two or more simpler elements or compounds (AB → A + B), often driven by heat, light, or electricity.
Therefore, breaking down a single compound into simpler components is a decomposition reaction.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የኬሚካል አጸግቦችን አይነቶች መለየት፡
• ኮምቢኔሽን (Combination)፡ ሁለትና ከዚያ በላይ ነገሮች ተጣምረው አንድ አዲስ ነገር ሲሰጡ (A + B → AB)።
• ዲስፕሌስመንት (Displacement)፡ አንድ ንጥረ ነገር ሌላውን ሲተካ (A + BC → AC + B)።
• ዲኮምፖዚሽን (Decomposition reaction)፡ አንድ ነጠላ ውህድ ተሰብሮ ወደ ሁለት ወይም ከዚያ በላይ ቀላል አካላት ሲከፋፈል (AB → A + B)።
ስለዚህ ትክክለኛው መልስ Decomposition reaction ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Gosoota wal-nyaatinsa keemikaalaa:
• Combination: Wantoonni walitti makamanii tokko yoo uuman (A + B → AB).
• Decomposition: Kompaawundiin tokkichi caccabee gara wantoota salphaa lama ykn isaa oliitti yommuu qoodamu (AB → A + B).
Kanaafuu, deebiin Decomposition reaction dha.`,
    hint: 'AB → A + B represents a decomposition reaction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q44',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Equations: Conservation of Mass in Precipitation Reactions',
    questionText: '44. A student carried out an experiment to test the reaction between silver nitrate solution and dilute hydrochloric acid under optimum reaction conditions. Which one of the following reactions will be obtained according to the law of conservation of mass?',
    options: [
      'HCl(aq) + AgNO3(aq) → AgCl(s) + HNO3(l)',
      'HCl(aq) + AgNO3(aq) → 2AgCl(s) + HNO3(l)',
      'HCl(aq) + AgNO3(aq) → AgCl(s) + 2HNO3(l)',
      '2HCl(aq) + AgNO3(aq) → AgCl(s) + HNO3(l)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Check stoichiometric atom balances on both sides:
Reaction: HCl + AgNO3 → AgCl + HNO3
• Reactants: 1 H, 1 Cl, 1 Ag, 1 N, 3 O.
• Products: 1 H, 1 Cl, 1 Ag, 1 N, 3 O.
Every atom is conserved 1:1 on both sides without any excess or missing atoms.
Step 2: Inspect other options:
• Option B: Has 2 Ag and 2 Cl on the product side but only 1 on the reactant side (violates conservation of mass).
• Option C: Has 2 H, 2 N, 6 O on the product side but only 1 H, 1 N, 3 O on the reactant side.
• Option D: Has 2 H and 2 Cl on reactants, but only 1 H and 1 Cl on products.
Therefore, Option A is the only equation that satisfies the Law of Conservation of Mass.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ በእኩልዮሹ ግራና ቀኝ ያሉትን አተሞች ማመጣጠን፡
HCl(aq) + AgNO3(aq) → AgCl(s) + HNO3(l)
• በግራ (አጸግብ አድራጊዎች)፡ 1 H, 1 Cl, 1 Ag, 1 N, 3 O
• በቀኝ (ውጤቶች)፡ 1 H, 1 Cl, 1 Ag, 1 N, 3 O
ሁለቱም ወገኖች እኩል ቁጥር ያላቸው አተሞች ስላሏቸው የጅምላ ጥበቃ ህግን ያሟላል። ሌሎቹ አማራጮች ሚዛናዊ አይደሉም።
ስለዚህ ትክክለኛው መልስ አማራጭ A ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Lakkoofsa atoomota gama lamaanii qorachuu:
HCl(aq) + AgNO3(aq) → AgCl(s) + HNO3(l)
Gama re'aaktantootaa fi gama oomishootaa irratti atoomonni hundi (H, Cl, Ag, N, O) wal-qixa jiru.
Filannoowwan biroo hiriira wal-qixxaataa hin qaban.
Kanaafuu, deebiin filannoo A dha.`,
    hint: 'Option A is balanced with 1:1 mole stoichiometry for all species, satisfying conservation of mass.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q45',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Natural Resources: Renewable vs. Non-Renewable Resources (Gold)',
    questionText: '45. Which of the following is a non-renewable natural resource?',
    options: [
      'Cotton',
      'Gold',
      'Silk',
      'Wood'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Define renewable and non-renewable natural resources:
• Renewable resources: Natural resources that can be replenished or regenerated naturally within a human timescale (e.g., biological resources like cotton, silk, wood/timber, agricultural crops).
• Non-renewable resources: Finite resources that exist in limited quantities and cannot be replenished within human lifespans because their formation requires millions of years of geological processes (e.g., mineral ores, metals like Gold, fossil fuels).
Therefore, Gold is a non-renewable natural resource.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ ታዳሽ እና ታዳሽ ያልሆኑ የተፈጥሮ ሀብቶች፡
• ታዳሽ ሀብቶች (Renewable resources)፡ በተፈጥሮ በፍጥነት ሊተኩ የሚችሉ እንደ ጥጥ (Cotton)፣ ሐር (Silk) እና እንጨት (Wood) የመሳሰሉ ህይወት ካላቸው ነገሮች የሚገኙ ናቸው።
• ታዳሽ ያልሆኑ ሀብቶች (Non-renewable resources)፡ በመሬት ውስጥ በውሱን መጠን የሚገኙ እና አንዴ ካለቁ በቀላሉ የማይተኩ እንደ ወርቅ (Gold)፣ ነዳጅ እና የከበሩ ማዕድናት ናቸው።
ስለዚህ ወርቅ (Gold) ታዳሽ ያልሆነ የተፈጥሮ ሀብት ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Qabeenya uumamaa haaromuu fi hin haaromne:
• Qabeenya haaromfamu (Renewable): Jirbii (Cotton), Silki (Silk), fi Muka (Wood) yeroo gabaabaa keessatti deebi'anii biqiluu fi omishamuu danda'u.
• Qabeenya hin haaromfamne (Non-renewable): Warqeen (Gold) albuuda lafa keessaa ba'u yoo ta'u, erga dhumee waggoota miliyoona hedduu malee hin haaromu.
Kanaafuu, deebiin Gold dha.`,
    hint: 'Gold is a metallic mineral resource formed over geological ages that cannot be replenished on human timescales.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
