import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2018_EC_PART2: Question[] = [
  {
    id: 'chem-2018-q16',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Electrochemistry: Electrolytic Refining of Copper (Anode Mud)',
    questionText: "16. Consider the diagram used for the electrolytic refining of copper. What is the name of species indicated by letter 'C' (insoluble sludge at the bottom below the anode)?",
    options: [
      'Copper sulphate solution',
      'Strip of pure copper',
      'Cathode mud',
      'Anode mud'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Understand electrolytic refining of copper:
• Anode (+): Impure blister copper block that oxidizes (Cu → Cu²⁺ + 2e⁻).
• Cathode (-): Thin sheet of pure copper where Cu²⁺ deposits as pure copper.
• Electrolyte: Acidified copper(II) sulfate solution (CuSO4 + H2SO4).
Step 2: Identify the species indicated by 'C':
Impurities in the blister copper that are less electropositive than copper (such as silver Ag, gold Au, and platinum Pt) do not oxidize. They detach and settle beneath the anode as an insoluble sludge known as "anode mud" (or anode slime), which is collected for valuable precious metal recovery.
Therefore, 'C' represents anode mud.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የኮፐር የኤሌክትሮላይቲክ ማጣራት (electrolytic refining) ሂደት፡
• አኖድ (+)፡ ያልጠራው ኮፐር (impure copper) ሲሆን ወደ Cu²⁺ አዮንነት ይቀየራል።
• ካቶድ (-)፡ ንጹህ ኮፐር የሚጠራቀምበት ስስ ንጣፍ ነው።
ደረጃ 2፡ 'C' ምን እንደሆነ መለየት፡
ያልጠራው ኮፐር ውስጥ የሚገኙ እና ከኮፐር ያነሰ የመስጠት ባህሪ ያላቸው ውድ ማዕድናት (እንደ ወርቅ፣ ብር እና ፕላቲነም) ሳይሟሟ ወደ ታች ከአኖዱ ስር ይዘቅጣሉ። ይህ ዝቃጭ "የአኖድ ጭቃ" (anode mud) ይባላል።
ስለዚህ 'C' የሚያመለክተው Anode mud (አማራጭ d) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Qulqulleessuu koopparii (Electrolytic refining of copper):
• Anoodii (+): Koopparii hin qulqulloofne kan baquudha.
• Kaasoodii (-): Koopparii qulqulluu kuufamuudha.
Tarkaanfii 2: Mallattoo 'C' baruu:
Xuriin koopparii hin qulqulloofne keessa jiran kanneen akka warqee (Au) fi meetii (Ag) hin baqan; anoodii jala bu'anii caccabaa ta'anii kuufamu. Kunis "dhoqqee anoodii" (Anode mud) jedhama.
Kanaafuu, 'C'n Anode mud agarsiisa.`,
    hint: 'Insoluble precious metal impurities that fall to the bottom below the anode are called anode mud.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q17',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Equilibrium & Acids: Percent Ionization Expression',
    questionText: '17. Consider the following equilibrium reaction of a certain weak acid, RCOOH: RCOOH(aq) + H2O(l) ⇌ RCOO⁻(aq) + H3O⁺(aq). Which of the following is the CORRECT expression of the percent ionization of RCOOH?',
    options: [
      '(Equilibrium concentration of H3O⁺ / Initial concentration of the acid) × 100',
      '(Initial concentration of the acid / Equilibrium concentration of the acid) × 100',
      '(Initial concentration of RCOO⁻ / Initial concentration of the acid) × 100',
      '(Equilibrium concentration of the acid / Initial concentration of the acid) × 100'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Define percent ionization:
Percent ionization of a weak acid is the fraction of acid molecules that dissociate into ions at equilibrium, expressed as a percentage.
Step 2: Write the mathematical expression:
Percent Ionization = ([Acid ionized at equilibrium] / [Initial acid concentration]) × 100%
Since each molecule of RCOOH that ionizes yields one H3O⁺ (and one RCOO⁻):
[Acid ionized] = [H3O⁺]equilibrium
Therefore:
Percent Ionization = (Equilibrium concentration of H3O⁺ / Initial concentration of the acid) × 100.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የፐርሰንት አዮናይዜሽን (Percent ionization) ትርጓሜ፡
የአንድ ደካማ አሲድ ፐርሰንት አዮናይዜሽን ማለት ከተጨመረው አጠቃላይ አሲድ ውስጥ ወደ አዮንነት የተለወጠው ክፍል በመቶኛ ሲሰላ ነው።
ደረጃ 2፡ የሒሳብ ቀመር፡
Percent Ionization = ([H3O⁺]equilibrium / [HA]initial) × 100
ይህም በቃላት፡ (Equilibrium concentration of H3O⁺ / Initial concentration of the acid) × 100 ይሆናል።

🌳 Afaan Oromoo:
Tarkaanfii 1: Hiika 'Percent ionization':
Dhibbeentaan ayoonaayizeeshinii hamma asiidichaa gara ayooniitti caccabee qindoomina asiidii isa jalqabaatiin yoo hiramee 100n baay'atamuudha.
Tarkaanfii 2: Foormulaa:
Percent Ionization = ([H3O⁺]equilibrium / [Asiidii]initial) × 100.
Kanaafuu, filannoon sirriin A dha.`,
    hint: 'Percent ionization = ([H3O⁺] at equilibrium / [HA] initial) × 100%.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q18',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Kinetics: Collision Theory and Molecular Orientation',
    questionText: '18. Consider the reaction given below: AB2C + C → AB2 + C2. Which of the following successful collisions are effective in the formation of the products?',
    options: [
      'The collision that results in the A and C atoms are directly facing each other.',
      'The collision that results in the C atoms are directly facing each other.',
      'The collision that results in the B and C atoms are directly facing each other.',
      'The collision that results in the A and B atoms are directly facing each other.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Apply Collision Theory:
For a collision between reactant molecules to lead to product formation (an effective collision), two conditions must be met:
1. Particles must collide with energy greater than or equal to the activation energy (E ≥ Ea).
2. Particles must collide with the correct spatial orientation so that the new chemical bonds can form.
Step 2: Inspect bonds broken and formed:
In the reaction AB2C + C → AB2 + C2, the bond between AB2 and C breaks, and a new covalent bond forms between the incoming free C atom and the C atom bonded in AB2C.
Therefore, the collision is effective only when the incoming C atom directly strikes/faces the C atom of the AB2C molecule.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የግጭት ንድፈ ሃሳብን (Collision Theory) መረዳት፡
አንድ ኬሚካላዊ አጸግብ ውጤታማ ሆኖ አዲስ ምርት እንዲፈጥር ቅንጣቶች ተገቢው አቅጣጫና በቂ ኢነርጂ ይዘው መጋጨት አለባቸው።
ደረጃ 2፡ የተፈጠረውን አዲስ ትስስር መመልከት፡
በአጸግቡ AB2C + C → AB2 + C2 ውስጥ አዲሱ ትስስር የተፈጠረው በሁለቱ C አተሞች መካከል (C2) ነው።
ስለዚህ አጸግቡ እንዲካሄድ ነፃው የC አቶም ከAB2C ውስጥ ካለው የC አቶም ጋር ፊት ለፊት መጋጨት አለበት።

🌳 Afaan Oromoo:
Tarkaanfii 1: Tiyooriin wal-itti bu'iinsaa (Collision theory):
Wal-nyaatinsi keemikaalaa tokko oomisha kennuuf kallattii sirriin walitti bu'uun dirqama.
Tarkaanfii 2: Hidhoo uumame baruu:
Wal-nyaatinsa kana keessatti hidhoon haaraan uumamu hidhoo atoomota C lamaan gidduuti (C2).
Kanaafuu, atoomonni C lamaan fuulaa-fuulatti yoo walitti bu'an qofa oomishni uumama.`,
    hint: 'A new C-C bond is formed to make C2, so the incoming C atom must directly collide with the C atom of AB2C.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q19',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Solutions: Henry\'s Law of Gas Solubility',
    questionText: '19. At 0°C and 1.0 atm, the solubility of O2 gas in water is 48.4 mole per liter. What is the molar solubility of O2 in a saturated water solution at a partial pressure of 0.20 atm?',
    options: [
      '1.20 × 10⁻³ M',
      '9.68 M',
      '4.10 × 10⁻³ M',
      '2.44 M'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: State Henry's Law:
Henry's Law states that at a constant temperature, the solubility (S) of a gas in a liquid is directly proportional to the partial pressure (P) of the gas above the liquid:
S ∝ P  =>  S₁ / P₁ = S₂ / P₂
Step 2: Substitute given values:
• Initial state: P₁ = 1.0 atm, S₁ = 48.4 mol/L
• New state: P₂ = 0.20 atm, S₂ = ?
Step 3: Calculate S₂:
S₂ = S₁ × (P₂ / P₁)
S₂ = 48.4 mol/L × (0.20 atm / 1.0 atm)
S₂ = 48.4 × 0.20 = 9.68 mol/L (9.68 M).

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የሄነሪ ህግ (Henry's Law)፡
በአንድ ፈሳሽ ውስጥ የሚሟሟ የጋዝ መጠን ከጋዙ ከፊል ጫና (partial pressure) ጋር በቀጥታ ተመጣጣኝ ነው፡
S₁ / P₁ = S₂ / P₂
ደረጃ 2፡ የተሰጡትን ቁጥሮች መተካት፡
• S₁ = 48.4 M, P₁ = 1.0 atm
• P₂ = 0.20 atm, S₂ = ?
S₂ = 48.4 × (0.20 / 1.0) = 9.68 M።
ስለዚህ ትክክለኛው መልስ B (9.68 M) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Seera Henrii (Henry's Law):
Baqumsi gaasii dhangala'aa keessatti dhiibbaa gaasichaa wajjin kallattiin wal-gita:
S₁ / P₁ = S₂ / P₂
Tarkaanfii 2: Shallaggii:
S₂ = 48.4 × (0.20 / 1.0) = 9.68 M.
Kanaafuu, deebiin 9.68 M dha.`,
    hint: "Henry's Law: S₂ = S₁ × (P₂ / P₁) = 48.4 × 0.20 / 1.0 = 9.68 M.",
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q20',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Inorganic Chemistry: Properties and Reactions of Acidic Oxides',
    questionText: '20. Which one of the following does NOT explain the chemical properties of acidic oxides? Acidic oxides react with:',
    options: [
      'acids to form salt and water.',
      'basic oxides to form salts.',
      'water to form acids.',
      'base to form salt and water.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Understand acidic oxides (acid anhydrides):
Acidic oxides are generally non-metal oxides (such as SO2, SO3, CO2, N2O5).
Step 2: Recall their characteristic chemical reactions:
1. Reaction with water: Non-metal oxide + H2O → Acid (e.g., SO3 + H2O → H2SO4).
2. Reaction with bases: Acidic oxide + Base → Salt + Water (e.g., CO2 + 2NaOH → Na2CO3 + H2O).
3. Reaction with basic oxides: Acidic oxide + Basic oxide → Salt (e.g., CO2 + CaO → CaCO3).
Step 3: Identify the false statement:
Acidic oxides are already acidic in chemical nature; they do NOT react with other acids. (Only basic oxides react with acids to form salt and water).
Therefore, option A does not describe acidic oxides.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የአሲዳማ ኦክሳይዶችን (Acidic oxides) ባህሪያት መረዳት፡
አሲዲክ ኦክሳይዶች የብረት ያልሆኑ (non-metal) ኦክሳይዶች ናቸው።
ደረጃ 2፡ ኬሚካላዊ አጸግቦቻቸው፡
• ከውሃ ጋር ሲደባለቁ አሲድ ይፈጥራሉ (SO3 + H2O → H2SO4)።
• ከመሰረታዊ ቤዞች ጋር ጨው እና ውሃ ይሰጣሉ (CO2 + 2NaOH → Na2CO3 + H2O)።
• ከመሰረታዊ ኦክሳይዶች ጋር ጨው ይፈጥራሉ (CO2 + CaO → CaCO3)።
ደረጃ 3፡ የተሳሳተውን መለየት፡
አሲዲክ ኦክሳይዶች እራሳቸው አሲድ ባህሪ ስላላቸው ከአሲድ ጋር አጸግብ አያደርጉም። ከአሲድ ጋር አጸግብ አድርገው ጨውና ውሃ የሚሰጡት ቤዚክ ኦክሳይዶች (basic oxides) ናቸው።
ስለዚህ አማራጭ A የተሳሳተ ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Amala ooksaayidoota asiidawaa:
Ooksaayidonni asiidawaa ooksaayidoota al-sibiilotaati.
Tarkaanfii 2: Wal-nyaatinsa isaanii:
• Bishaan wajjin asiidii uumu.
• Beezii wajjin soogidda fi bishaan uumu.
• Ooksaayidii beezawaa wajjin soogidda uumu.
Tarkaanfii 3: Dogoggora baasuu:
Ooksaayidiin asiidawaa ofii isaatii asiidii waan ta'eef asiidii wajjin wal hin nyaatu.
Kanaafuu, filannoon A amala ooksaayidii asiidawaa miti.`,
    hint: 'Acidic oxides react with bases, basic oxides, and water, but they do NOT react with acids.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q21',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Atomic Structure: Main Energy Level Electron Configuration of Potassium',
    questionText: '21. What is the electronic configuration of an element with atomic number of 19, on the main energy levels?',
    options: [
      '2, 8, 7, 2',
      '2, 8, 9',
      '2, 9, 8',
      '2, 8, 8, 1'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Identify the element:
Atomic number Z = 19 corresponds to Potassium (K).
Step 2: Subshell electronic configuration (Aufbau principle):
1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹
Step 3: Group electrons by main energy levels (n = 1, 2, 3, 4):
• Shell 1 (K shell, n = 1): 1s² → 2 electrons
• Shell 2 (L shell, n = 2): 2s² 2p⁶ → 8 electrons
• Shell 3 (M shell, n = 3): 3s² 3p⁶ → 8 electrons
• Shell 4 (N shell, n = 4): 4s¹ → 1 electron
Because the 4s subshell is lower in energy than the 3d subshell, the 19th electron enters the 4s orbital rather than 3d.
Thus, the main energy level configuration is 2, 8, 8, 1.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ ንጥረ ነገሩን መለየት፡
አቶሚክ ቁጥሩ 19 የሆነው ንጥረ ነገር ፖታሲየም (Potassium, K) ነው።
ደረጃ 2፡ የኤሌክትሮን አቀማመጥ በሳብሼል፡
1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹
ደረጃ 3፡ በዋና ዋና የኢነርጂ ደረጃዎች (K, L, M, N) መመደብ፡
• 1ኛ ሼል (n=1)፡ 2
• 2ኛ ሼል (n=2)፡ 8
• 3ኛ ሼል (n=3)፡ 8
• 4ኛ ሼል (n=4)፡ 1
ስለዚህ የፖታሲየም ኤሌክትሮን ውቅር 2, 8, 8, 1 ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Elementicha baruu:
Lakkoofsa atoomawaa 19 kan qabu Potaasiyeemii (K) dha.
Tarkaanfii 2: Seera Aufbau'tiin elektiroonota qooduu:
1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹
Tarkaanfii 3: Sadarkaalee anniisaa gurguddoo irratti:
• Sadarkaa 1ffaa: 2
• Sadarkaa 2ffaa: 8
• Sadarkaa 3ffaa: 8
• Sadarkaa 4ffaa: 1
Kanaafuu, tartiibni isaa 2, 8, 8, 1 dha.`,
    hint: 'Z = 19 (Potassium) fills as 2 (1st shell), 8 (2nd shell), 8 (3rd shell), 1 (4th shell).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q22',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Environmental Chemistry: Lake Tana Water Hyacinth (Emboch) as Water Pollution',
    questionText: '22. Recently, Lake Tana was invaded by a surface water plant commonly known as "Emboch". Which one of the following describes this phenomenon?',
    options: [
      'Industrial pollution',
      'Water pollution',
      'Soil pollution',
      'Air pollution'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Understand the nature of "Emboch" (Water Hyacinth):
Eichhornia crassipes (commonly known in Ethiopia as "Emboch") is an invasive aquatic weed that forms dense mats over freshwater bodies such as Lake Tana.
Step 2: Ecological consequences:
It blankets the water surface, blocking sunlight penetration, suffocating aquatic flora, and depleting dissolved oxygen through eutrophication and biological decay, which threatens fish species and disrupts the aquatic ecosystem.
Since this biological hazard severely degrades the quality and life of the water body, it is a clear manifestation of Water pollution.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ "እምቦጭ" (Water Hyacinth) ምንድን ነው?
እምቦጭ በጣና ሐይቅ ላይ የተከሰተ ወራሪ የውሃ አረም ነው።
ደረጃ 2፡ የሚያስከትለው ተጽዕኖ፡
የሐይቁን ገጽታ በመሸፈን የፀሐይ ብርሃን እንዳይገባ ያግዳል፤ በውሃው ውስጥ ያለውን ኦክሲጅን ያሟጥጣል፤ የአሳና የሌሎች የውሃ ውስጥ ህይወት ያላቸውን ፍጥረታት አደጋ ላይ ይጥላል።
ይህ በቀጥታ የውሃን ጥራት እና ስነ-ምህዳር ስለሚጎዳ የውሃ ብክለት (Water pollution) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Biqiltuu "Inbooc" (Water Hyacinth):
Inbooc biqiltuu haroo Xaanaa irratti baay'atee lubbuu qabeeyyii bishaan keessaa miidhuudha.
Tarkaanfii 2: Miidhaa inni fidu:
Ifa aduu dhorkuudhaan fi qabiyyee oksijiinii bishaan keessaa xiqqeessuun qurxummiilee fi biqiltoota bishaanii miidha.
Kun faalama bishaanii (Water pollution) jedhama.`,
    hint: 'Emboch (Water Hyacinth) infests aquatic ecosystems and depletes dissolved oxygen, representing water pollution.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q23',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Atomic Theory: Discontinuous Nature of Matter (Democritus)',
    questionText: '23. Which one of the following philosophers believed that matter is NOT continuous?',
    options: [
      'Plato',
      'Democritus',
      'Empedocles',
      'Aristotle'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Historical perspectives on the nature of matter:
• Continuous theory of matter (Aristotle, Plato, Empedocles): Held that matter can be infinitely divided into smaller and smaller pieces without limit.
• Discontinuous / Discontinuous particulate theory (Democritus and Leucippus, ~400 BC): Proposed that matter is composed of indivisible, discrete particles called "atomos" (meaning indivisible or uncuttable), separated by empty space (void). Thus, matter cannot be divided infinitely.
Therefore, Democritus believed that matter is discontinuous (particulate).

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ ስለ ቁስ (Matter) ፍልስፍናዊ አስተሳሰቦች፡
• አርስቶትልና ፕሌቶ ቁስ ያለማቋረጥ ሊከፋፈል ይችላል (matter is continuous) ብለው ያምኑ ነበር።
• ዴሞክሪተስ (Democritus) ግን ቁስ ወደ ትናንሽ፣ የማይከፋፈሉ ቅንጣቶች (atomos) እንደተሰራና ያለማቋረጥ ሊከፈል እንደማይችል (matter is discontinuous) አስተምሯል።
ስለዚህ ትክክለኛው መልስ ዴሞክሪተስ (Democritus) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Yaada falaasama durii:
• Aristootil fi Pilaatoon maatiiriin walitti fufaa ta'ee dhuma malee qoodamuu danda'a (continuous) jedhanii amanu turan.
• Deemokiritas (Democritus) garuu maatiiriin kutaalee xixinnoo caccabuu hin dandeenye (atomos) irraa ijaaramee addaan citiinsa qaba (not continuous / discontinuous) jedhe.
Kanaafuu, deebiin Democritus dha.`,
    hint: 'Democritus proposed that matter consists of indivisible discrete particles called "atomos" (discontinuous).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q24',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Oxides: Oxidation States of Oxygen in Peroxides',
    questionText: '24. Which of the following oxides has oxygen with negative one (-1) oxidation state in its molecule?',
    options: [
      'Basic oxide',
      'Super oxide',
      'Acidic oxide',
      'Peroxide'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Oxidation states of oxygen in different classes of oxides:
• Normal oxides (Basic and Acidic oxides): Contain the oxide ion O²⁻ where oxygen has an oxidation number of -2 (e.g., CaO, CO2).
• Peroxides: Contain the peroxide ion [O-O]²⁻ (O2²⁻) where each oxygen atom has an oxidation number of -1 (e.g., H2O2, Na2O2, BaO2).
• Superoxides: Contain the superoxide ion O2⁻ where each oxygen atom has an oxidation number of -1/2 (e.g., KO2).
Therefore, peroxides have oxygen with an oxidation state of -1.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የኦክስጅን የኦክሳይዴሽን ቁጥሮች በተለያዩ ኦክሳይዶች ውስጥ፡
• መደበኛ ኦክሳይዶች (ቤዚክ እና አሲዲክ ኦክሳይድ)፡ ኦክስጅን -2 የኦክሲዴሽን ቁጥር አለው (O²⁻)።
• ፐርኦክሳይድ (Peroxide)፡ ኦክስጅን -1 የኦክሲዴሽን ቁጥር አለው (እንደ H2O2, Na2O2)።
• ሱፐርኦክሳይድ (Superoxide)፡ ኦክስጅን -1/2 የኦክሲዴሽን ቁጥር አለው (እንደ KO2)።
ስለዚህ የኦክስጅን ኦክሲዴሽን ቁጥር -1 የሆነበት ፐርኦክሳይድ (Peroxide) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Lakkoofsa oksideeshinii oksijiinii:
• Ooksaayidii idilee (Basic fi Acidic oxide): Oksijiiniin -2 dha.
• Peroogsaayidii (Peroxide): Oksijiiniin -1 dha (fkn, H2O2, Na2O2).
• Suupperoogsaayidii (Superoxide): Oksijiiniin -1/2 dha (fkn, KO2).
Kanaafuu, lakkoofsa oksideeshinii -1 kan qabu peroogsaayidii (Peroxide) dha.`,
    hint: 'In peroxides (like H2O2 or Na2O2), the O-O single bond results in an oxidation state of -1 for oxygen.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q25',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Thermochemistry: Combustion of Methane and Reaction Enthalpy',
    questionText: '25. Combustion of methane results in a release of heat. Which of the following statements describe these chemical phenomena? The release of heat is attributed to the energy change:',
    options: [
      'due to the emission of light.',
      'that accompanies the reaction process.',
      'that resists changes in the reaction process.',
      'due to the absorption of light.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Understand chemical enthalpy change:
In the combustion of methane (CH4 + 2O2 → CO2 + 2H2O), chemical bonds in reactants are broken (requiring energy) and stronger bonds in products are formed (releasing energy).
Step 2: Relate to the thermodynamic process:
Because the energy released during product bond formation is significantly greater than the energy required to break reactant bonds, a net amount of thermal energy (enthalpy of reaction, ΔH < 0) is released to the surroundings.
This release of heat is an intrinsic property of the energy change that accompanies the chemical reaction process.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የኬሚካል አጸግብ የሙቀት ለውጥ፡
ሚቴን በሚቃጠልበት ጊዜ (CH4 + 2O2 → CO2 + 2H2O) የነባር ቦንዶች መሰበር እና የአዳዲስ ጠንካራ ቦንዶች መፈጠር የኢነርጂ ልዩነት ይፈጥራል።
ደረጃ 2፡ የሙቀት መልቀቅ መንስኤ፡
አዲሶቹ ቦንዶች ሲፈጠሩ የሚለቀቀው ኢነርጂ ቦንዶቹን ለመስበር ከፈጀው ስለሚበልጥ አጸግቡ ኤክሶተርሚክ (exothermic) ሆኖ ሙቀት ይለቀቃል።
ይህ የሙቀት መለቀቅ ከአጸግቡ ሂደት ጋር አብሮ የሚከሰት የኢነርጂ ለውጥ (energy change that accompanies the reaction process) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Wal-nyaatinsa gubama miiteenii:
Miiteeniin yeroo gubatu (CH4 + 2O2 → CO2 + 2H2O) hidhoon haarawaan uumamu anniisaa guddaa gadhiisa.
Kunis jijjiirama anniisaa adeemsa wal-nyaatinsichaa wajjin wal-qabateedha (energy change that accompanies the reaction process).`,
    hint: 'The release of heat in exothermic combustion arises from the net thermodynamic enthalpy change accompanying the reaction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q26',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Polymers: Synthetic vs. Natural Polymers (Teflon)',
    questionText: '26. Which one of the following is a synthetic polymer?',
    options: [
      'Teflon',
      'Enzymes',
      'Starch',
      'Cotton'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Distinguish natural vs. synthetic polymers:
• Natural polymers: Produced by living organisms (plants, animals, microbes).
  - Enzymes: Biological protein catalysts synthesized in living cells.
  - Starch: Polysaccharide carbohydrate produced by plants.
  - Cotton: Natural cellulose fiber obtained from the cotton plant.
• Synthetic polymers: Man-made polymers produced through industrial chemical synthesis.
  - Teflon (polytetrafluoroethylene, PTFE): Synthesized by addition polymerization of tetrafluoroethene (CF2=CF2).
Therefore, Teflon is the synthetic polymer.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ ተፈጥሯዊና ሰው ሰራሽ ፖሊመሮችን መለየት፡
• ተፈጥሯዊ ፖሊመሮች፡ በህይወት ባላቸው ፍጥረታት የሚመረቱ (ኤንዛይሞች፣ ስታርች፣ ጥጥ) ናቸው።
• ሰው ሰራሽ ፖሊመሮች (Synthetic polymers)፡ በፋብሪካ ወይም በላብራቶሪ በኬሚካላዊ መንገድ የሚመረቱ ናቸው።
ቴፍሎን (Teflon / Polytetrafluoroethylene) ሰው ሰራሽ ፖሊመር ሲሆን ድስቶች ምግብ እንዳይዝባቸው ለማድረግና ለሌሎች አገልግሎቶች ይውላል።

🌳 Afaan Oromoo:
Tarkaanfii 1: Boolimeerota uumamaa fi nam-tolchee:
• Boolimeerota uumamaa: Inzaayimoota, Istaarjii, fi Jirbii (Cotton) lubbu-qabeeyyii keessatti kan uumamanidha.
• Boolimeera nam-tolchee (Synthetic polymer): Teefloon (Teflon) boolimeera laaboraatoorii fi warshaa keessatti qophaa'uudha.
Kanaafuu, deebiin Teflon dha.`,
    hint: 'Teflon (polytetrafluoroethylene) is synthetic; enzymes, starch, and cotton are naturally occurring polymers.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q27',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Bonding & Molecular Geometry: Polar Covalent Molecules (SO2)',
    questionText: '27. Which one of the following is a polar covalent molecule?',
    options: [
      'CO2',
      'CCl4',
      'CH4',
      'SO2'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Check molecular symmetry and dipole moments:
• CO2: Linear geometry (O=C=O). The two equal C=O bond dipoles point in exactly opposite directions (180°) and cancel each other out: μ = 0 (nonpolar).
• CH4: Symmetrical tetrahedral geometry. Four C-H dipoles cancel out: μ = 0 (nonpolar).
• CCl4: Symmetrical tetrahedral geometry. Four C-Cl dipoles cancel out: μ = 0 (nonpolar).
• SO2: Bent / angular geometry due to a lone pair on sulfur (AX2E). The two S-O bond dipoles do NOT cancel, resulting in a permanent net dipole moment (μ ≠ 0).
Therefore, SO2 is a polar covalent molecule.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የሞለኪውሎችን ቅርጽና የዳይፖል ሞመንት መመልከት፡
• CO2፡ መስመራዊ (linear) በመሆኑ ሁለቱ ዳይፖሎች እርስ በእርስ ይሰረዛሉ (nonpolar)።
• CH4 እና CCl4፡ ቴትራሄድራል ቅርጽ ያላቸውና የተመጣጠኑ በመሆናቸው ዳይፖላቸው ዜሮ ነው (nonpolar)።
• SO2፡ በማዕከላዊው ሰልፈር ላይ ያልተጣመረ ኤሌክትሮን (lone pair) ስላለ የታጠፈ (bent) ቅርጽ አለው። ስለዚህ የቦንድ ዳይፖሎቹ እርስ በእርስ ስለማይሰረዙ ፖላር ሞለኪውል (polar molecule) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Boca moolakiyuulotaa fi boolariitii isaanii ilaaluu:
• CO2, CCl4, fi CH4: Bocni isaanii wal-qixxaataa (symmetrical) waan ta'eef daayipooliin isaanii wal balleessa (nonpolar).
• SO2: Sababa elektiroonota qofaa (lone pair) salfarii irra jiraniif bocni isaa kan gombifame (bent) dha; daayipooliin wal hin balleessu.
Kanaafuu, SO2 moolakiyuulii boolaarii (polar molecule) dha.`,
    hint: 'SO2 has a bent geometry with a lone pair on sulfur, so its bond dipoles do not cancel out, making it polar.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q28',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Electrochemistry: Nernst Equation and Cell Potential Shift',
    questionText: '28. Consider the following electrochemical reaction: Cu(s) + 2Ce⁴⁺(aq) ⇌ Cu²⁺(aq) + 2Ce³⁺(aq). Which of the following effects increases the cell potential of the reaction?',
    options: [
      'Decreasing concentration of Cu(s)',
      'Increasing concentration of Cu²⁺',
      'Increasing concentration of Ce³⁺',
      'Increasing concentration of Ce⁴⁺'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Write the Nernst equation for the cell reaction:
E_cell = E°_cell - (0.0592 / n) × log(Q)
where Q = ([Cu²⁺] × [Ce³⁺]²) / [Ce⁴⁺]²  (solids like Cu(s) do not appear in Q).
Step 2: Determine conditions that increase E_cell:
To increase E_cell, the reaction quotient Q must decrease (or by Le Chatelier's principle, the equilibrium must be driven towards products).
• Increasing [Ce⁴⁺] (a reactant) increases the denominator of Q, making Q smaller.
• As Q decreases, the subtracted term becomes smaller, which increases E_cell.
Therefore, increasing the concentration of Ce⁴⁺ increases the cell potential.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የኔርንስት ቀመርን (Nernst equation) እንመልከት፡
E_cell = E°_cell - (0.0592 / n) × log(Q)
Q = ([Cu²⁺] × [Ce³⁺]²) / [Ce⁴⁺]²
ደረጃ 2፡ E_cell እንዲጨምር ምን መሆን አለበት?
የሴል ቮልቴጁ (E_cell) እንዲጨምር የQ ዋጋ መቀነስ ወይም አጸግቡ ወደ ቀኝ (ወደ ውጤት) መገፋፋት አለበት።
አጸግብ አድራጊ የሆነውን የCe⁴⁺ ክምችት መጨመር አጸግቡን ወደ ቀኝ በማሸጋገር የሴሉን ቮልቴጅ ይጨምራል።
ስለዚህ ትክክለኛው መልስ d (Increasing concentration of Ce⁴⁺) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Foormulaa Nernst:
E_cell = E°_cell - (0.0592 / n) × log(Q)
Q = ([Cu²⁺] × [Ce³⁺]²) / [Ce⁴⁺]²
Tarkaanfii 2: Dandeettii seelii (E_cell) dabaluuf:
Re'aaktaantii kan ta'e [Ce⁴⁺] yoo daballu, madaallichi gara oomishaatti socho'a, kunis dandeettii seelichaa (voltage) dabala.
Kanaafuu, deebiin filannoo d dha.`,
    hint: 'Increasing reactant concentration ([Ce⁴⁺]) shifts the equilibrium to the right and increases cell potential.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q29',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Industrial Chemistry: The Contact Process for Sulfuric Acid',
    questionText: '29. In the schematic diagram for the industrial Contact process, what are the compounds represented by letters A, B and C, respectively?',
    options: [
      'SO2, H2SO4 and SO4²⁻',
      'SO3, SO2 and H2SO4',
      'SO2, SO3 and H2SO4',
      'SO2, H2SO4 and SO3'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Trace the steps of the industrial Contact Process for sulfuric acid (H2SO4):
1. Sulfur burner / furnace: Sulfur is burned in dry air to form sulfur dioxide gas:
   S(s) + O2(g) → SO2(g)  => Compound A is SO2.
2. Catalytic converter: SO2 is oxidized by O2 over a vanadium pentoxide (V2O5) catalyst at 450-500°C:
   2SO2(g) + O2(g) ⇌ 2SO3(g)  => Compound B is SO3.
3. Absorption tower: SO3 is absorbed into concentrated H2SO4 to produce oleum (H2S2O7), which is then safely diluted with water to produce concentrated sulfuric acid:
   H2S2O7 + H2O → 2H2SO4  => Compound C is H2SO4.
Therefore, A, B, and C are SO2, SO3, and H2SO4 respectively.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የኮንታክት ፕሮሰስን (Contact process) ቅደም ተከተል እንመልከት፡
1. በእቶኑ (furnace) ውስጥ ሰልፈር ከአየር ጋር ተቃጥሎ ሰልፈር ዳይኦክሳይድ ይፈጥራል፡
   S + O2 → SO2 => ስለዚህ A = SO2 ነው።
2. በካታሊቲክ ኮንቨርተር ውስጥ SO2 በV2O5 አማካኝነት ወደ SO3 ይቀየራል፡
   2SO2 + O2 → 2SO3 => ስለዚህ B = SO3 ነው።
3. በአምቡላንስ ታወር ውስጥ SO3 ወደ ኦሊየም ተቀይሮ ውኃ ሲጨመርበት ሰልፈሪክ አሲድ ይሰጣል፡
   => ስለዚህ C = H2SO4 ነው።
ስለዚህ ትክክለኛው መልስ SO2, SO3 and H2SO4 (አማራጭ c) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Adeemsa warshaa 'Contact Process' hordofuu:
1. Bakka gubinsaatti (furnace): S + O2 → SO2 => A = SO2 dha.
2. Bakka jijjiirraatti (catalytic converter): 2SO2 + O2 → 2SO3 => B = SO3 dha.
3. Bakka xuuxamaatti: SO3 bishaan wajjin asiidii salfariikii uuma => C = H2SO4 dha.
Kanaafuu, tartiibni sirriin SO2, SO3 and H2SO4 dha.`,
    hint: 'Contact process steps: S → SO2 (A) → SO3 (B) → H2SO4 (C).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q30',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Metallurgy & Alloys: Composition of Gun Metal',
    questionText: '30. Which one of the following is an alloy of 87% copper, 10% tin and 3% zinc?',
    options: [
      'Solder',
      'Gun metal',
      'Bronze',
      'Gold alloys'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Review alloy compositions:
• Solder: Alloy of lead and tin (typically ~60% Sn, 40% Pb).
• Bronze: Primarily copper (~88-90%) and tin (~10-12%), without essential zinc.
• Gun metal (also known as red brass): A specific, tough bronze alloy traditionally consisting of approximately 87% copper, 10% tin, and 3% zinc. It is known for high corrosion resistance and steam resistance.
• Gold alloys: Mixtures of gold with copper, silver, or nickel.
Therefore, an alloy of 87% Cu, 10% Sn, and 3% Zn is Gun metal.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የብረት ቅይጦችን (Alloys) ቅንብር መመልከት፡
• ሶልደር (Solder)፡ የሊድና የቆርቆሮ (Pb + Sn) ቅይጥ ነው።
• ነሐስ (Bronze)፡ በአብዛኛው የኮፐርና ቆርቆሮ (Cu + Sn) ቅይጥ ነው።
• ጋን ሜታል (Gun metal)፡ 87% ኮፐር (Cu)፣ 10% ቆርቆሮ (Sn) እና 3% ዚንክ (Zn) የያዘ ጠንካራ የነሐስ አይነት ሲሆን ለመድፍና ለከባድ ማሽነሪዎች ይውላል።
ስለዚህ ትክክለኛው መልስ Gun metal (አማራጭ b) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Qabiyyee aloyootaa baruu:
• Solder: Liidii fi Tiinii (Pb + Sn).
• Bronze: Koopparii fi Tiinii (Cu + Sn).
• Gun metal: Koopparii 87%, Tiinii 10%, fi Zinkii 3% irraa kan tolfamuudha.
Kanaafuu, deebiin Gun metal dha.`,
    hint: 'Gun metal is an alloy of 87% copper, 10% tin, and 3% zinc.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
