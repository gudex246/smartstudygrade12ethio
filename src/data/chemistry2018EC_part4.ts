import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2018_EC_PART4: Question[] = [
  {
    id: 'chem-2018-q46',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Equilibrium: Factors Affecting Equilibrium Constant (Kc)',
    questionText: '46. Consider the following equilibrium reaction: aA + bB ⇌ cC + dD. Which of the following is CORRECT about the given reaction?',
    options: [
      'Removing both reactants and products decrease the value of Kc.',
      'Adding products to the system decreases the value of Kc.',
      'Adding reactants to the system increases the value of Kc.',
      'Kc is not affected by removing both reactants and products.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Fundamental property of the equilibrium constant (Kc):
The equilibrium constant (Kc) is a thermodynamic constant whose numerical value depends exclusively on temperature for a specific balanced chemical reaction.
Step 2: Effect of changes in concentration:
According to Le Chatelier's principle, adding or removing reactants or products shifts the equilibrium position (changing the individual concentrations) to re-establish the ratio [C]^c[D]^d / [A]^a[B]^b. However, the equilibrium constant Kc itself remains completely unchanged as long as the temperature is kept constant.
Therefore, Kc is not affected by removing or adding reactants and products.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የኢኩሊብሪየም ቋሚ (Kc) መሰረታዊ ባህሪ፡
የኢኩሊብሪየም ቋሚ (Kc) ዋጋ በሙቀት (temperature) ላይ ብቻ የተመሰረተ ነው።
ደረጃ 2፡ የክምችት ለውጥ ተጽዕኖ፡
አጸግብ አድራጊዎችን ወይም ውጤቶችን መጨመርም ሆነ መቀነስ የኢኩሊብሪየም አቅጣጫን (position) ይቀይራል እንጂ የKcን ዋጋ ፈጽሞ አይለውጠውም። የሙቀት መጠን ካልተቀየረ Kc ቋሚ ነው።
ስለዚህ ትክክለኛው አረፍተ ነገር Kc is not affected by removing both reactants and products (አማራጭ d) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Amala Dhaabbataa Madaallii (Kc):
Gatiin Kc qilleensa oo'aa (temperature) irratti qofa hundaa'a.
Tarkaanfii 2: Dhiibbaa qindoominaa (Concentration):
Re'aaktantoota ykn oomishoota dabaluun ykn hir'isuun kallattii madaallichaa jijjiira malee gatii Kc hin jijjiiru.
Kanaafuu, deebiin filannoo d dha.`,
    hint: 'The equilibrium constant Kc depends ONLY on temperature; changes in concentration do not alter Kc.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q47',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Bonding & VSEPR: Molecular Shape of Phosphorus Trichloride (PCl3)',
    questionText: '47. What is the molecular shape of phosphorus trichloride, PCl3? (Atomic number P=15, Cl=17)',
    options: [
      'Trigonal planar',
      'Trigonal pyramidal',
      'Square planar',
      'Tetrahedral'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Determine valence electrons and Lewis structure of PCl3:
• Central atom: Phosphorus (Group 15 / VA) has 5 valence electrons.
• Surrounding atoms: 3 Chlorine atoms, each forming a single covalent bond with P.
Step 2: Apply VSEPR Theory:
• Bonding pairs (BP) = 3 (three P-Cl single bonds).
• Lone pairs (LP) on central P = (5 - 3) / 2 = 1 lone pair.
• Steric number = 3 + 1 = 4 (tetrahedral electron-pair geometry).
Step 3: Determine molecular geometry:
An AX3E molecule with 3 bonding pairs and 1 lone pair has a Trigonal pyramidal molecular shape (bond angles ~100° due to lone pair repulsion).
Therefore, PCl3 is trigonal pyramidal.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የPCl3 የቫሌንስ ኤሌክትሮኖች ብዛት፡
ፎስፈረስ (P) በውጭ ሼሉ 5 ኤሌክትሮኖች አሉት። ከ3ቱ የክሎሪን አተሞች ጋር 3 ነጠላ ቦንዶችን ይፈጥራል።
ደረጃ 2፡ የVSEPR ንድፈ ሃሳብ፡
በማዕከላዊው ፎስፈረስ ላይ 3 ቦንዶች እና 1 ያልተጣመረ ኤሌክትሮን ጥንድ (lone pair) ይኖራል (AX3E)።
ደረጃ 3፡ የሞለኪውሉ ቅርጽ፡
አንድ ሎን ፔርና 3 ቦንድ ያለው ሞለኪውል ቅርጽ ትራይጎናል ፒራሚዳል (Trigonal pyramidal) ይባላል።
ስለዚህ የPCl3 ቅርጽ Trigonal pyramidal ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Caasaa PCl3 baruu:
Atoomiin giddu-galeessaa Foosfarasii (P) elektiroonota vaalaansii 5 qaba. Kilooriinii 3 wajjin hidhoo kovaalantii 3 uuma.
Tarkaanfii 2: Tiyooriin VSEPR:
PCl3 hidhoo 3 fi elektiroonii qofaa (lone pair) 1 qaba (AX3E).
Kunis boca moolakiyuulawaa Tiraayigonaal Piraamidaala (Trigonal pyramidal) kennaaf.`,
    hint: 'PCl3 has 3 bonding pairs and 1 lone pair on phosphorus (AX3E), which produces a trigonal pyramidal geometry.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q48',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Kinetics: Reaction Rate from Concentration vs. Time Curves',
    questionText: '48. Looking at the curve of reactant concentration [D] versus Time, which of the following is CORRECT about the rate of reaction of reactant D?',
    options: [
      'The rate for this reaction is constant at all points',
      'The instantaneous rate at point A is greater than at point B',
      'The instantaneous rate at point A is equal to that at point B',
      'The instantaneous rate at point A is less than at point B'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Relate curve slope to reaction rate:
For a reactant D whose concentration decreases over time, the instantaneous rate of reaction at any given time is equal to the negative of the slope of the tangent to the concentration-time curve:
Rate = -d[D]/dt = |slope of tangent|
Step 2: Compare slopes at points A and B:
• Point A occurs early in the reaction when reactant concentration is high and collisions are frequent; the curve is significantly steeper (large slope).
• Point B occurs later in the reaction as reactant is consumed; the curve flattens out (small slope).
Because the slope is steeper at point A than at point B, the instantaneous rate at point A is greater than at point B.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የግራፍ ዳገት (slope) እና የአጸግብ ፍጥነት ግንኙነት፡
የአንድ አጸግብ አድራጊ የቅጽበት ፍጥነት (instantaneous rate) በግራፉ ላይ በሚሰመረው ታንጀንት ዳገት (slope) ይለካል፡
ፍጥነት = -d[D]/dt።
ደረጃ 2፡ ነጥብ A እና B ማወዳደር፡
• ነጥብ A ላይ አጸግቡ ገና በጅምር ላይ ስለሆነ የአጸግብ አድራጊው ክምችት ከፍተኛ ነው፤ ግራፉም በጣም ቁልቁለት (steeper) ነው።
• ነጥብ B ላይ አጸግብ አድራጊው እያለቀ ስለመጣ ግራፉ እየተስተካከለ (ጠፍጣፋ) ይሄዳል።
ስለዚህ በነጥብ A ላይ ያለው ፍጥነት በነጥብ B ላይ ካለው ፍጥነት ይበልጣል (አማራጭ b)።

🌳 Afaan Oromoo:
Tarkaanfii 1: Rukkina giraafii fi saffisa wal-nyaatinsaa:
Saffisni yeroo murtaa'aa (instantaneous rate) daandii giraafichaa (slope) wajjin wal-qabata.
Tarkaanfii 2: Qabxii A fi B wal-bira qabuu:
Qabxii A irratti giraafichi baay'ee qilee (steeper) dha; qabxii B irratti garuu gara lafaatti dacha'eera.
Kanaafuu, saffisni qabxii A irratti qabxii B caala.`,
    hint: 'The slope of the [D] vs. time curve is steeper at earlier point A than at point B, so the rate is greater at A.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q49',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Atomic Structure: Subatomic Particles and Relative Charge of Neutron',
    questionText: '49. Neutron is one of the fundamental sub-atomic particles of an atom. What is the relative charge of a neutron in an atom?',
    options: [
      '0',
      '+1',
      '-1',
      '+2'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Recall the three fundamental subatomic particles:
• Proton: Discovered by Rutherford; carries a relative charge of +1.
• Electron: Discovered by J.J. Thomson; carries a relative charge of -1.
• Neutron: Discovered by James Chadwick (1932); has no electrical charge (electrically neutral), so its relative charge is 0.
Therefore, the relative charge of a neutron is 0.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የንዑሳን ቅንጣቶች የኤሌክትሪክ ክፍያ፡
• ፕሮቶን (Proton)፡ +1 አንጻራዊ ክፍያ አለው።
• ኤሌክትሮን (Electron)፡ -1 አንጻራዊ ክፍያ አለው።
• ኒውትሮን (Neutron)፡ ምንም አይነት የኤሌክትሪክ ክፍያ የለውም (ገለልተኛ ነው)፤ ስለዚህ አንጻራዊ ክፍያው 0 ነው።
ትክክለኛው መልስ 0 (አማራጭ a) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Chaarjii atoomota bu'uuraa:
• Pirootoonii: +1
• Elektiroonii: -1
• Niiwutiroonii: Chaarjii hin qabu (neutral); chaarjiin isaa 0 dha.
Kanaafuu, deebiin 0 dha.`,
    hint: 'Neutrons are electrically neutral particles with a relative charge of 0.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q50',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Electrochemistry: Electrodes in Voltaic Cells (Cathode)',
    questionText: '50. In the Zn-Cu voltaic cell diagram, what does letter B (the copper strip where Cu²⁺ ions are reduced to copper metal) represent?',
    options: [
      'Cathode',
      'Voltameter',
      'Anode',
      'Salt bridge'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Identify components of the Zn-Cu galvanic (voltaic) cell:
• Anode (A): The Zinc (Zn) electrode undergoes oxidation: Zn(s) → Zn²⁺(aq) + 2e⁻ (negative electrode).
• Cathode (B): The Copper (Cu) electrode is the site where reduction occurs: Cu²⁺(aq) + 2e⁻ → Cu(s) (positive electrode).
• Electrons flow through the external wire from anode (A) to cathode (B).
By international electrochemical definition, the electrode at which reduction takes place is always the Cathode.
Therefore, B represents the Cathode.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የቮልታይክ ሴል ክፍሎችን መለየት፡
• A (የዚንክ ኤሌክትሮድ)፡ ኦክሲዴሽን የሚካሄድበት አኖድ (Anode) ነው።
• B (የኮፐር ኤሌክትሮድ)፡ የኮፐር አዮኖች ኤሌክትሮን ተቀብለው የሚቀነሱበት (ሪዳክሽን የሚካሄድበት) ካቶድ (Cathode) ነው።
ሁልጊዜ ሪዳክሽን የሚካሄድበት ኤሌክትሮድ ካቶድ ይባላል።
ስለዚህ ፊደል B የሚያመለክተው ካቶድን (Cathode) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Kutaalee seelii vooltaayikii (Zn-Cu):
• Anoodii (A): Bakka oksideeshiniin Zinkiiti raawwatuudha.
• Kaasoodii (B): Bakka ridakshiiniin Koopparii (Cu²⁺ + 2e⁻ → Cu) itti raawwatuudha.
Yeroo hunda elektiroodiin bakka ridakshiiniin itti raawwatu Kaasoodii (Cathode) jedhama.
Kanaafuu, qubeen B Kaasoodii agarsiisa.`,
    hint: 'Reduction always occurs at the cathode (Cu²⁺ + 2e⁻ → Cu), so electrode B is the cathode.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q51',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Organic Chemistry: IUPAC Nomenclature of Alkynes',
    questionText: '51. Consider the following structure: CH3-CH2-CH(CH3)-CH2-C≡C-CH2-CH3. Which one of the following is the IUPAC name for the given organic compound?',
    options: [
      '2-Ethyl-6-heptyne',
      '6-Ethyl-3-heptyne',
      '3-Methyl-5-octyne',
      '6-Methyl-3-octyne'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Find the longest continuous carbon chain containing the triple bond:
Writing out the chain:
CH3(C8) - CH2(C7) - CH(CH3)(C6) - CH2(C5) - C(C4) ≡ C(C3) - CH2(C2) - CH3(C1)
The longest chain containing the triple bond has 8 carbons, making the parent root an octyne.
Step 2: Number the parent chain to give the triple bond the lowest possible locant:
• Numbering from left to right: Triple bond starts at C4 (between C4 and C5).
• Numbering from right to left:
  C1: CH3
  C2: CH2
  C3 ≡ C4: Triple bond begins at Carbon-3!
  C5: CH2
  C6: CH with a -CH3 (methyl) substituent branch!
  C7: CH2
  C8: CH3
Numbering from right gives the triple bond locant 3 (3-octyne), which is lower than 4.
Step 3: Combine substituent and parent name:
Methyl group is at position 6: 6-methyl-3-octyne.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ ረጅሙን የካርቦን ሰንሰለት መፈለግ፡
የባለሶስትዮሽ ትስስሩን (triple bond) የያዘው ረጅሙ ሰንሰለት 8 ካርቦኖች አሉት (ስለዚህ root name = octyne)።
ደረጃ 2፡ ቁጥር መስጠት፡
ለትስስሩ አነስተኛ ቁጥር ለመስጠት ከቀኝ ወደ ግራ እንቆጥራለን፡
C1(CH3) - C2(CH2) - C3≡C4 (ትስስሩ C3 ላይ ይጀምራል) - C5(CH2) - C6(ሜቲል ግሩፕ ያለበት) - C7(CH2) - C8(CH3)።
ደረጃ 3፡ ስያሜውን ማዋሃድ፡
በካርቦን 6 ላይ ሜቲል አለ፤ ትስስሩ በC3 ላይ ነው፡ 6-Methyl-3-octyne።
ስለዚህ ትክክለኛው መልስ አማራጭ d ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Hojjaa kaarboonii isa dheeraa filachuu:
Hojiin kaarboonii hidhoo sadii qabatee dheeraan atoomota kaarboonii 8 qaba (octyne).
Tarkaanfii 2: Mirgaa gara bitaatti lakkaa'uu:
Hidhoon sadii kaarboonii 3ffaa irratti argama (3-octyne).
Gareen meetiilii (-CH3) ammoo kaarboonii 6ffaa irratti argama.
Kanaafuu, maqaansaa 6-Methyl-3-octyne ta'a.`,
    hint: '8 carbons in longest chain with triple bond at C3 and methyl at C6: 6-methyl-3-octyne.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q52',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Reactions: Direct Combination Reaction of Iron and Sulfur',
    questionText: '52. In an experiment, iron filings and sulfur powder are heated together in a test tube with a Bunsen burner. Which of the following reactions takes place in this experiment?',
    options: [
      'Decomposition reaction',
      'Direct combination reaction',
      'Double displacement reaction',
      'Single displacement reaction'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Write the chemical equation for the experiment:
When gray iron filings (Fe) and yellow sulfur powder (S) are heated together, they undergo an exothermic reaction to synthesize a single compound, black iron(II) sulfide (FeS):
Fe(s) + S(s) --(heat)--> FeS(s)
Step 2: Classify the reaction type:
In this reaction, two separate pure elemental reactants combine chemically to form a single compound as product:
A + B → AB
This is defined as a Direct combination reaction (or Synthesis reaction).

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የሙከራውን ኬሚካላዊ እኩልዮሽ መጻፍ፡
የብረት ዱቄት (Fe) እና ሰልፈር (S) በቡንሰን በርነር ሲሞቁ ተዋህደው አይረን(II) ሰልፋይድ የተባለ አንድ ነጠላ አዲስ ውህድ ይፈጥራሉ፡
Fe(s) + S(s) → FeS(s)
ደረጃ 2፡ የአጸግቡ አይነት፡
ሁለት የተለያዩ ንጥረ ነገሮች ተጣምረው አንድ ምርት ሲሰጡ ቀጥተኛ ውህደት ወይም Direct combination reaction ይባላል።
ስለዚህ ትክክለኛው መልስ Direct combination reaction ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Hiriira wal-nyaatinsichaa:
Yommuu sibiilli (Fe) fi salfariin (S) oo'ifaman, walitti makamuudhaan wanta tokko kan FeS jedhamu uumu:
Fe(s) + S(s) → FeS(s)
Tarkaanfii 2: Gosa wal-nyaatinsaa:
Wantoonni lama walitti dhu 기술tokko yoo uuman 'Direct combination reaction' (synthesis) jedhama.
Kanaafuu, deebiin Direct combination reaction dha.`,
    hint: 'Fe(s) + S(s) → FeS(s) is a direct combination (synthesis) reaction where two elements combine into one product.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q53',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Equilibrium: Calculation of Equilibrium Concentration using Kc',
    questionText: '53. An equilibrium mixture contains 0.30 mol CO, 0.10 mol H2, 0.020 mol H2O and an unknown concentration of CH4, in 1.0 L container at 1200 K. In this mixture, what is the molar concentration of CH4 at equilibrium? CO(g) + 3H2(g) ⇌ CH4(g) + H2O(g), Kc = 3.92',
    options: [
      '0.059 mol/L',
      '0.015 mol/L',
      '0.197 mol/L',
      '0.001 mol/L'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Determine molar concentrations in the 1.0 L container:
Since Volume V = 1.0 L, molarity M = moles / 1.0 L:
• [CO] = 0.30 mol/L
• [H2] = 0.10 mol/L
• [H2O] = 0.020 mol/L
• [CH4] = x mol/L
Step 2: Write the equilibrium constant expression:
Kc = ([CH4] × [H2O]) / ([CO] × [H2]³)
Step 3: Substitute known values:
3.92 = (x × 0.020) / (0.30 × (0.10)³)
(0.10)³ = 0.001
Denominator = 0.30 × 0.001 = 0.0003
Step 4: Solve for x ([CH4]):
3.92 × 0.0003 = 0.020 × x
0.001176 = 0.020 × x
x = 0.001176 / 0.020 = 0.0588 mol/L ≈ 0.059 mol/L.
Therefore, the equilibrium concentration of CH4 is 0.059 mol/L.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ በ1.0 L ውስጥ ያሉትን ክምችቶች መለየት፡
መጠኑ 1.0 ሊትር ስለሆነ ሞል እና ሞላሪቲ እኩል ናቸው፡
[CO] = 0.30 M, [H2] = 0.10 M, [H2O] = 0.020 M
ደረጃ 2፡ የKc ቀመርን ማዘጋጀት፡
Kc = ([CH4] × [H2O]) / ([CO] × [H2]³)
3.92 = ([CH4] × 0.020) / (0.30 × (0.10)³)
ደረጃ 3፡ ማስላት፡
3.92 = ([CH4] × 0.020) / 0.0003
0.020 × [CH4] = 3.92 × 0.0003 = 0.001176
[CH4] = 0.001176 / 0.020 = 0.0588 M ≈ 0.059 mol/L።
ስለዚህ ትክክለኛው መልስ 0.059 mol/L (አማራጭ a) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Qindoomina moolarii shallaguu (V = 1.0 L):
[CO] = 0.30 M, [H2] = 0.10 M, [H2O] = 0.020 M
Tarkaanfii 2: Foormulaa Kc:
Kc = ([CH4] × [H2O]) / ([CO] × [H2]³)
3.92 = ([CH4] × 0.020) / (0.30 × 0.001)
3.92 × 0.0003 = 0.020 × [CH4]
[CH4] = 0.001176 / 0.020 ≈ 0.059 mol/L.
Kanaafuu, deebiin 0.059 mol/L dha.`,
    hint: 'Kc = ([CH4][H2O]) / ([CO][H2]³) => [CH4] = (3.92 × 0.30 × 0.001) / 0.020 = 0.059 mol/L.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q54',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Salt Hydrolysis: Basic Solutions from Carbonate Ion Hydrolysis',
    questionText: '54. Which one of the following is the reason why hydrolysis of sodium carbonate gives a basic solution? This is due to',
    options: [
      'CO3²⁻ is hydrolyzed',
      'H⁺ is hydrolyzed',
      'OH⁻ is hydrolyzed',
      'Na⁺ is hydrolyzed'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Dissociation of sodium carbonate (Na2CO3):
Na2CO3 is the salt of a strong base (NaOH) and a weak diprotic acid (carbonic acid, H2CO3):
Na2CO3(s) → 2Na⁺(aq) + CO3²⁻(aq)
Step 2: Behavior of ions in water (hydrolysis):
• Na⁺ is the spectator conjugate cation of a strong base; it does NOT hydrolyze in water.
• CO3²⁻ is the conjugate base of a weak acid (HCO3⁻); it is a relatively strong conjugate base that reacts with water molecules (hydrolysis):
  CO3²⁻(aq) + H2O(l) ⇌ HCO3⁻(aq) + OH⁻(aq)
Because CO3²⁻ hydrolyzes and generates an excess of hydroxide ions (OH⁻), the resulting aqueous solution is basic (pH > 7).
Therefore, the reason is that CO3²⁻ is hydrolyzed.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የሶዲየም ካርቦኔት (Na2CO3) መፈራረስ፡
ሶዲየም ካርቦኔት በውሃ ውስጥ ሲሟሟ Na⁺ እና CO3²⁻ አዮኖችን ይፈጥራል፡
Na2CO3 → 2Na⁺ + CO3²⁻
ደረጃ 2፡ የሃይድሮላይሲስ ሂደት፡
• Na⁺ ከጠንካራ ቤዝ (NaOH) ስለመጣ ከውሃ ጋር አጸግብ አያደርግም።
• የካርቦኔት አዮን (CO3²⁻) ግን ከደካማ አሲድ (H2CO3) የመጣ ቤዝ ስለሆነ ከውሃ ጋር ተጸጋግቦ (hydrolyze አድርጎ) OH⁻ አዮን ይፈጥራል፡
  CO3²⁻ + H2O ⇌ HCO3⁻ + OH⁻
ይህ የOH⁻ መፈጠር መፍትሄው ቤዚክ እንዲሆን ያደርገዋል። ስለዚህ ምክንያቱ CO3²⁻ is hydrolyzed ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Furmaata Na2CO3 xiinxaluu:
Na2CO3 beezii cimaa (NaOH) fi asiidii dadhabaa (H2CO3) irraa uumama.
Tarkaanfii 2: Adeemsa haayidiroolaayisii:
Ayooniin kaarbooneetii (CO3²⁻) bishaan wajjin wal-nyaachuudhaan (hydrolyze ta'uun) ayoonota OH⁻ uuma:
CO3²⁻ + H2O ⇌ HCO3⁻ + OH⁻
Baay'achuun OH⁻ furmaaticha beezawaa taasisa.
Kanaafuu, sababni isaa ayooniin CO3²⁻ haayidiroolaayizii ta'uu isaati.`,
    hint: 'CO3²⁻ is the conjugate base of a weak acid and hydrolyzes in water to produce OH⁻, making the solution basic.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q55',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Green Chemistry: Atom Economy in Lime Preparation',
    questionText: '55. The thermal decomposition of calcium carbonate during the commercial preparation of lime (CaO) is: CaCO3(s) → CaO(s) + CO2(g). What is the atom economy for preparation of lime based on the above reaction? (Atomic masses: Ca = 40 g/mol, C = 12 g/mol, O = 16 g/mol)',
    options: [
      '56%',
      '49.1%',
      '44%',
      '100%'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Define Atom Economy:
Atom Economy = (Molar mass of desired product / Total molar mass of all reactants) × 100%
Step 2: Calculate molar masses:
• Reactant CaCO3: 40 + 12 + (3 × 16) = 40 + 12 + 48 = 100 g/mol
• Desired product CaO: 40 + 16 = 56 g/mol
• By-product CO2: 12 + 32 = 44 g/mol
Step 3: Calculate Atom Economy:
Atom Economy = (56 g/mol / 100 g/mol) × 100% = 56%.
Therefore, the atom economy for the reaction is 56%.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የአቶም ኢኮኖሚ (Atom Economy) ቀመር፡
Atom Economy = (የተፈለገው ምርት የሞላር ክብደት / የአጸግብ አድራጊዎች አጠቃላይ የሞላር ክብደት) × 100%
ደረጃ 2፡ የሞላር ክብደቶችን ማስላት፡
• CaCO3 (አጸግብ አድራጊ) = 40 + 12 + 48 = 100 g/mol
• CaO (የተፈለገው ምርት - ኖራ) = 40 + 16 = 56 g/mol
ደረጃ 3፡ ማስላት፡
Atom Economy = (56 / 100) × 100% = 56%።
ስለዚህ ትክክለኛው መልስ 56% (አማራጭ a) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Foormulaa 'Atom Economy':
Atom Economy = (Ulfaatina moolarii oomisha barbaadamee / Ulfaatina moolarii re'aaktantootaa) × 100%
Tarkaanfii 2: Shallaggii:
• CaCO3 = 40 + 12 + 48 = 100 g/mol
• CaO = 40 + 16 = 56 g/mol
Atom Economy = (56 / 100) × 100% = 56%.
Kanaafuu, deebiin 56% dha.`,
    hint: 'Atom economy = [M(CaO) / M(CaCO3)] × 100% = [56 / 100] × 100% = 56%.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q56',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Kinetics: Arrhenius Equation and Activation Energy Calculation',
    questionText: '56. The rate constant of a reaction increases by a factor of 4 when the temperature is increased from 300 K to 320 K. What is the approximate activation energy of the reaction? (R = 8.314 J/(mol·K), ln(4) ≈ 1.386)',
    options: [
      '27.6 kJ/mol',
      '55.3 kJ/mol',
      '110.6 kJ/mol',
      '8.31 kJ/mol'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: State the two-point form of the Arrhenius equation:
ln(k₂ / k₁) = (Ea / R) × (1/T₁ - 1/T₂) = (Ea / R) × [(T₂ - T₁) / (T₁ × T₂)]
Step 2: Substitute given data:
• k₂ / k₁ = 4 => ln(k₂ / k₁) = ln(4) ≈ 1.386
• T₁ = 300 K, T₂ = 320 K
• R = 8.314 J/(mol·K)
Step 3: Set up and solve for Ea:
1.386 = (Ea / 8.314) × [(320 - 300) / (300 × 320)]
1.386 = (Ea / 8.314) × [20 / 96,000]
1.386 = (Ea / 8.314) × [1 / 4,800]
Ea = 1.386 × 8.314 × 4,800
Ea = 55,311.8 J/mol ≈ 55.3 kJ/mol.
Therefore, the activation energy is approximately 55.3 kJ/mol.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የአሬኒየስን ቀመር (Arrhenius equation) መጠቀም፡
ln(k₂ / k₁) = (Ea / R) × (1/T₁ - 1/T₂)
ደረጃ 2፡ ቁጥሮቹን መተካት፡
1.386 = (Ea / 8.314) × [(320 - 300) / (300 × 320)]
1.386 = (Ea / 8.314) × [20 / 96,000] = Ea / (8.314 × 4,800)
Ea = 1.386 × 8.314 × 4,800 = 55,312 J/mol ≈ 55.3 kJ/mol።
ስለዚህ የአክቲቬሽን ኢነርጂው 55.3 kJ/mol (አማራጭ b) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Foormulaa Arrehenihiyisii:
ln(k₂ / k₁) = (Ea / R) × (1/T₁ - 1/T₂)
Tarkaanfii 2: Shallaggii:
1.386 = (Ea / 8.314) × [(320 - 300) / (300 × 320)]
Ea = 1.386 × 8.314 × 4800 = 55,312 J/mol ≈ 55.3 kJ/mol.
Kanaafuu, deebiin 55.3 kJ/mol dha.`,
    hint: 'Ea = ln(4) × R × (T₁T₂) / (T₂ - T₁) = 1.386 × 8.314 × (96000 / 20) ≈ 55.3 kJ/mol.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q57',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Electrochemistry: Nernst Equation Non-Standard EMF Calculation',
    questionText: '57. Calculate the electromotive force (EMF) of the cell Zn | Zn²⁺(0.01 M) || Cu²⁺(1.0 M) | Cu at 25°C. (E°cell = 1.10 V)',
    options: [
      '1.10 V',
      '1.04 V',
      '1.16 V',
      '1.22 V'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Write the overall cell reaction:
Zn(s) + Cu²⁺(aq) ⇌ Zn²⁺(aq) + Cu(s)
Number of electrons transferred, n = 2.
Step 2: Apply the Nernst Equation at 25°C:
E_cell = E°_cell - (0.0592 / n) × log(Q)
where Q = [Zn²⁺] / [Cu²⁺] = 0.01 / 1.0 = 10⁻²
Step 3: Calculate:
log(10⁻²) = -2
E_cell = 1.10 V - (0.0592 / 2) × (-2)
E_cell = 1.10 V - 0.0296 × (-2)
E_cell = 1.10 V + 0.0592 V = 1.1592 V ≈ 1.16 V.
Therefore, the EMF of the cell is 1.16 V.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የሴሉን አጠቃላይ አጸግብ መጻፍ፡
Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)  (የኤሌክትሮን ቁጥር n = 2)
ደረጃ 2፡ የኔርንስት ቀመር (Nernst equation)፡
E_cell = E°_cell - (0.0592 / n) × log([Zn²⁺] / [Cu²⁺])
ደረጃ 3፡ ማስላት፡
E_cell = 1.10 - (0.0592 / 2) × log(0.01 / 1.0)
log(0.01) = log(10⁻²) = -2
E_cell = 1.10 - 0.0296 × (-2)
E_cell = 1.10 + 0.0592 = 1.1592 V ≈ 1.16 V።
ስለዚህ ትክክለኛው መልስ 1.16 V (አማራጭ c) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Foormulaa Nernst fayyadamuu (n = 2):
E_cell = E°_cell - (0.0592 / n) × log([Zn²⁺] / [Cu²⁺])
Tarkaanfii 2: Shallaggii:
E_cell = 1.10 - (0.0592 / 2) × log(0.01 / 1.0)
log(0.01) = -2
E_cell = 1.10 - (0.0296 × -2) = 1.10 + 0.0592 ≈ 1.16 V.
Kanaafuu, deebiin 1.16 V dha.`,
    hint: 'E = E° - (0.0592/2) × log(0.01/1.0) = 1.10 - 0.0296(-2) = 1.10 + 0.0592 = 1.16 V.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q58',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Acid-Base & Buffers: Buffer pH after Partial Neutralization',
    questionText: '58. What is the pH of a buffer solution prepared by mixing 50.0 mL of 0.20 M CH3COOH and 50.0 mL of 0.10 M NaOH? (Ka for CH3COOH = 1.8 × 10⁻⁵)',
    options: [
      '2.87',
      '4.74',
      '5.04',
      '9.26'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Calculate initial moles of acid and base:
• moles of CH3COOH = Volume × Molarity = 0.050 L × 0.20 mol/L = 0.010 mol
• moles of NaOH = 0.050 L × 0.10 mol/L = 0.005 mol
Step 2: Stoichiometry of neutralization:
CH3COOH + NaOH → CH3COONa + H2O
• NaOH is the limiting reactant and is completely consumed (0.005 mol reacted).
• moles of conjugate base formed (CH3COO⁻) = 0.005 mol
• moles of unreacted CH3COOH remaining = 0.010 - 0.005 = 0.005 mol
Step 3: Apply the Henderson-Hasselbalch equation:
Since [CH3COOH] = [CH3COO⁻] = 0.005 mol / 0.100 L:
pH = pKa + log([Conjugate Base] / [Acid])
pH = pKa + log(1) = pKa + 0 = pKa
pKa = -log(1.8 × 10⁻⁵) = 5 - log(1.8) = 5 - 0.255 = 4.745 ≈ 4.74.
Therefore, the pH of the buffer solution is 4.74.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የመጀመሪያ ሞሎችን ማስላት፡
• የአሲድ ሞል (CH3COOH) = 0.050 L × 0.20 M = 0.010 mol
• የቤዝ ሞል (NaOH) = 0.050 L × 0.10 M = 0.005 mol
ደረጃ 2፡ ከኒውትራላይዜሽን በኋላ የሚቀረው፡
NaOH አሲዱን በከፊል ኒውትራላይዝ ያደርጋል፡
• የተፈጠረው ኮንጁጌት ቤዝ (CH3COO⁻) = 0.005 mol
• የቀረው ያልተሟሟ አሲድ (CH3COOH) = 0.010 - 0.005 = 0.005 mol
ደረጃ 3፡ የሄንደርሰን-ሃስልባልች ቀመር፡
የአሲዱና የቤዙ ክምችት እኩል በመሆናቸው pH = pKa ይሆናል፡
pH = pKa = -log(1.8 × 10⁻⁵) ≈ 4.74።
ስለዚህ ትክክለኛው መልስ 4.74 (አማራጭ b) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Moolii jalqabaa shallaguu:
• Moolii CH3COOH = 0.050 × 0.20 = 0.010 mol
• Moolii NaOH = 0.050 × 0.10 = 0.005 mol
Tarkaanfii 2: Moolii hafe baruu:
NaOH asiidichaa walakkaa balleessa:
• CH3COO⁻ uumame = 0.005 mol
• CH3COOH hafe = 0.005 mol
Tarkaanfii 3: Foormulaa Henderson-Hasselbalch:
Qindoominni isaanii wal-qixa waan ta'eef, pH = pKa ta'a:
pH = -log(1.8 × 10⁻⁵) ≈ 4.74.
Kanaafuu, deebiin 4.74 dha.`,
    hint: 'At half-neutralization ([Acid] = [Base]), pH = pKa = -log(1.8×10⁻⁵) ≈ 4.74.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q59',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Thermochemistry: Standard Enthalpy of Formation from Enthalpies of Combustion',
    questionText: '59. Calculate the standard enthalpy of formation of liquid benzene C6H6 given the following standard enthalpies of combustion: C(s) = -394 kJ/mol, H2(g) = -286 kJ/mol, C6H6(l) = -3268 kJ/mol.',
    options: [
      '-46 kJ/mol',
      '+46 kJ/mol',
      '+3222 kJ/mol',
      '-3268 kJ/mol'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Write the target formation reaction of benzene:
6C(s) + 3H2(g) → C6H6(l)    ΔH°f = ?
Step 2: Express ΔH°f in terms of combustion enthalpies:
For any reaction: ΔH°_rxn = Σ ΔH°c(reactants) - Σ ΔH°c(products)
ΔH°f(C6H6) = [6 × ΔH°c(C) + 3 × ΔH°c(H2)] - [ΔH°c(C6H6)]
Step 3: Substitute the combustion values:
ΔH°f = [6 × (-394 kJ/mol) + 3 × (-286 kJ/mol)] - [-3268 kJ/mol]
ΔH°f = [-2364 - 858] - [-3268]
ΔH°f = -3222 + 3268 = +46 kJ/mol.
Therefore, the standard enthalpy of formation of liquid benzene is +46 kJ/mol.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የቤንዚን መፈጠር እኩልዮሽ፡
6C(s) + 3H2(g) → C6H6(l)  (ΔH°f = ?)
ደረጃ 2፡ የቃጠሎ ሙቀት ቀመርን በመጠቀም፡
ΔH°f = [የአጸግብ አድራጊዎች የቃጠሎ ሙቀት ድምር] - [የምርቱ የቃጠሎ ሙቀት]
ΔH°f = [6 × ΔH°c(C) + 3 × ΔH°c(H2)] - [ΔH°c(C6H6)]
ደረጃ 3፡ ቁጥሮቹን መተካት፡
ΔH°f = [6(-394) + 3(-286)] - (-3268)
ΔH°f = [-2364 - 858] + 3268
ΔH°f = -3222 + 3268 = +46 kJ/mol።
ስለዚህ ትክክለኛው መልስ +46 kJ/mol (አማራጭ b) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Hiriira uumama beenziinii:
6C(s) + 3H2(g) → C6H6(l)
Tarkaanfii 2: Entaalpii gubamaatiin shallaguu:
ΔH°f = [6 × ΔH°c(C) + 3 × ΔH°c(H2)] - ΔH°c(C6H6)
Tarkaanfii 3: Shallaggii:
ΔH°f = [6(-394) + 3(-286)] - (-3268)
ΔH°f = [-2364 - 858] + 3268
ΔH°f = -3222 + 3268 = +46 kJ/mol.
Kanaafuu, deebiin +46 kJ/mol dha.`,
    hint: 'ΔHf = 6(-394) + 3(-286) - (-3268) = -3222 + 3268 = +46 kJ/mol.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q60',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Organic Reaction Mechanisms: Alkyl Halide Reactivity in SN1 Reactions',
    questionText: '60. Which of the following alkyl halides is most reactive towards an SN1 substitution reaction mechanism?',
    options: [
      '1-Chlorobutane',
      '2-Chlorobutane',
      '2-Chloro-2-methylpropane',
      'Chloromethane'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Understand the rate-determining step of the SN1 mechanism:
The SN1 (unimolecular nucleophilic substitution) mechanism proceeds via a two-step process in which the rate-determining step is the loss of the leaving group to generate a carbocation intermediate:
R-X → R⁺ + X⁻ (slow, rate-determining step)
Step 2: Classify the degree of the given alkyl halides:
• Chloromethane (CH3Cl): Methyl halide (extremely unstable cation, SN1 does not occur).
• 1-Chlorobutane (CH3CH2CH2CH2Cl): Primary (1°) alkyl halide (forms unstable primary carbocation).
• 2-Chlorobutane (CH3CH2CH(Cl)CH3): Secondary (2°) alkyl halide.
• 2-Chloro-2-methylpropane ((CH3)3C-Cl): Tertiary (3°) alkyl halide.
Step 3: Relate carbocation stability to reaction rate:
Carbocation stability order: 3° > 2° > 1° > methyl.
The tertiary carbocation formed by 2-chloro-2-methylpropane is exceptionally stable due to electron-donating inductive effects and hyperconjugation from the three neighboring methyl groups.
Therefore, 2-chloro-2-methylpropane is the most reactive towards an SN1 mechanism.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የSN1 አሰራርን (SN1 mechanism) መረዳት፡
በSN1 ምትክ አጸግብ ውስጥ የፍጥነት ወሳኙ እርምጃ የካርቦኬታዮን (carbocation intermediate) መፈጠር ነው።
ደረጃ 2፡ የአልኪል ሃላይዶችን ደረጃ መመደብ፡
• Chloromethane: ሜቲል ሃላይድ
• 1-Chlorobutane: የመጀመሪያ ደረጃ (1°) አልኪል ሃላይድ
• 2-Chlorobutane: ሁለተኛ ደረጃ (2°) አልኪል ሃላይድ
• 2-Chloro-2-methylpropane: ሶስተኛ ደረጃ (3° / tertiary) አልኪል ሃላይድ
ደረጃ 3፡ የካርቦኬታዮን መረጋጋት፡
የካርቦኬታዮን መረጋጋት ቅደም ተከተል፡ 3° > 2° > 1° > methyl ነው።
3° የሆነው 2-chloro-2-methylpropane በጣም የተረጋጋ ካርቦኬታዮን ስለሚፈጥር ለSN1 አጸግብ ከሁሉም ይበልጥ ፈጣንና ንቁ ነው።
ስለዚህ ትክክለኛው መልስ 2-Chloro-2-methylpropane (አማራጭ c) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Adeemsa SN1 baruu:
Wal-nyaatinsa SN1 keessatti sadarkaan murteessituun uumama 'carbocation' ti.
Tarkaanfii 2: Sadarkaa alkil halaayidootaa:
• 1-Chlorobutane: 1° (primary)
• 2-Chlorobutane: 2° (secondary)
• 2-Chloro-2-methylpropane: 3° (tertiary)
Tarkaanfii 3: Tasgabbii kaarbokeetaayoonii:
Kaarbokeetaayooniin 3° hunda caalaa tasgabbaa'aa waan ta'eef saffisaan wal-nyaata (3° > 2° > 1°).
Kanaafuu, 2-Chloro-2-methylpropane caalmaatti re'aaktiividha.`,
    hint: 'SN1 reactivity follows carbocation stability: 3° > 2° > 1°. 2-Chloro-2-methylpropane is a tertiary (3°) alkyl halide and is most reactive.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
