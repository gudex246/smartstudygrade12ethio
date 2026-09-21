import { Question } from '../types';

export const CHEMISTRY_2015_EC_PART4: Question[] = [
  {
    id: 'chem-2015-q61',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Hydrocarbons: Properties of Benzene',
    questionText: '61. Which one of the following is a colorless, flammable volatile liquid and miscible with non-polar solvents?',
    options: [
      'Benzene',
      'Ethanol',
      'Methanol',
      'Methane'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Benzene (C₆H₆) is an aromatic hydrocarbon that is a colorless, volatile, highly flammable liquid with a characteristic sweet odor. Being non-polar, it is completely miscible with non-polar organic solvents. Ethanol and methanol are polar liquids, while methane is a gas at room temperature.

🇪🇹 አማርኛ (Amharic):
ቤንዚን (Benzene - C₆H₆) ቀለም የሌለው፣ በቀላሉ የሚተን (volatile) እና የሚቀጣጠል ፈሳሽ ሲሆን ከኢ-ፖላር (non-polar) አሟሚዎች ጋር በቀላሉ ይደባለቃል። ሜቴን ጋዝ ሲሆን ኢታኖልና ሜታኖል ደግሞ ፖላር ፈሳሾች ናቸው።

🌳 Afaan Oromoo:
Beenziiniin (Benzene) dhangala'oo bifa hin qabne, kan dafee qabatuu fi dafee hurku (volatile) yoo ta'u, solveentota noori-poolaaraa wajjin wal-maka.`,
    hint: 'A non-polar aromatic liquid hydrocarbon that dissolves in non-polar solvents is Benzene.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q62',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Organic Chemistry: IUPAC Nomenclature of Branched Alkanes',
    questionText: '62. The IUPAC name of the compound with the following structure is:\nCH₃ - CH(CH₂-CH₃) - CH(CH₃) - CH(CH₃) - CH₃',
    options: [
      '3, 4, 5-Trimethylhexane',
      '2-Ethyl-3, 4-dimethylpentane',
      '4-Ethyl-2, 3-dimethylpentane',
      '2, 3, 4-Trimethylhexane'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
1. Identify the longest continuous carbon chain: Including the ethyl group (CH₂-CH₃) gives a 6-carbon chain (hexane).
2. Number the carbon chain from the right end to give the lowest possible substituent locants:
   - C1: Rightmost -CH₃
   - C2: -CH(CH₃)- (methyl at C-2)
   - C3: -CH(CH₃)- (methyl at C-3)
   - C4: -CH(CH₃)- with continuing chain (methyl at C-4)
   - C5: -CH₂-
   - C6: -CH₃
3. Combining all groups gives: 2, 3, 4-Trimethylhexane.

🇪🇹 አማርኛ (Amharic):
1. ረጅሙን የካርቦን ሰንሰለት ሲፈለግ 6 ካርቦን (ሄክሴን) ይገኛል።
2. ከአነስተኛ ቁጥር ለመጀመር ከቀኝ ወደ ግራ ሲቆጠር በካርቦን 2, 3 እና 4 ላይ ሶስት ሜቲል (methyl) ቡድኖች ይገኛሉ።
3. ትክክለኛው የIUPAC ስም፡ 2, 3, 4-Trimethylhexane ነው።

🌳 Afaan Oromoo:
Sarara kaarboonii dheeraa filachuun (kaarboonii 6 = hexane) fi mirga irraa lakkoofsa xiqqaadhaan lakkaa'uun: 2, 3, 4-Trimethylhexane ta'a.`,
    hint: 'Find the longest 6-carbon chain and number from the end giving lowest substituent locants (2,3,4-trimethylhexane).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q63',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Industrial Chemistry: Petroleum Fractions & Dry Cleaning',
    questionText: '63. Which one of the following petroleum products is used as a solvent and in dry cleaning?',
    options: [
      'kerosene',
      'Petroleum ether',
      'Paraffin wax',
      'Diesel oil'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Petroleum ether (a low-boiling light hydrocarbon fraction containing pentanes and hexanes) and mineral spirits are non-polar volatile solvents widely utilized in laboratories and dry cleaning to dissolve oils, grease, and fats without damaging fabric fibers.

🇪🇹 አማርኛ (Amharic):
ፔትሮሊየም ኢተር (Petroleum ether) ቀላልና ተለዋዋጭ የፔትሮሊየም ክፍልፋይ ሲሆን ቅባቶችንና ዘይቶችን በቀላሉ ስለሚያሟሟ በደረቅ ጽዳት (dry cleaning) እና በቤተ-ሙከራ አሟሚነት በስፋት ያገለግላል።

🌳 Afaan Oromoo:
Petrooliyeem eeteer (Petroleum ether) dhangala'oo petrooliyeemii irraa qophaa'u yoo ta'u, albuudota fi zayitoota uffatarraa qulqulleessuuf (dry cleaning) akka solveentiitti tajaajila.`,
    hint: 'Petroleum ether is the light hydrocarbon solvent utilized for dry cleaning.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q64',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Hydrocarbons: Ethylene Preparation & Properties',
    questionText: '64. Which one of the following is NOT TRUE about laboratory preparation of ethylene by dehydration of ethanol?',
    options: [
      'The collected ethylene gas in the experiment decolorizes Br₂ in CCl₄.',
      'Concentrated sulphuric acid is used as a dehydrating agent.',
      'Combustion of ethylene produces a non-luminous flame.',
      'The collected ethylene gas in the experiment decolorizes alkaline KMnO₄.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Ethylene (C₂H₄), due to its relatively high carbon-to-hydrogen ratio and unsaturation, burns in air with a smoky, luminous (yellow) flame rather than a non-luminous blue flame (which is typical of saturated methane). Thus, stating that combustion of ethylene produces a non-luminous flame is NOT true. Statements A, B, and D are all correct laboratory facts.

🇪🇹 አማርኛ (Amharic):
ኢትሊን (Ethylene) ያልጠገበ (unsaturated) ሃይድሮካርቦን በመሆኑ በቃጠሎ ጊዜ ጭስ ያለበት ደማቅ ቢጫ ነበልባል (luminous flame) ያመነጫል እንጂ የማያንጸባርቅ (non-luminous) ነበልባል አይሰጥም። ስለዚህ C የተሳሳተ ነው።

🌳 Afaan Oromoo:
Iitiliiniin (C₂H₄) reeshiyoo kaarboonii ol'aanaa waan qabuuf yeroo gubatu arraba ibiddaa ifaa/keelloo (luminous flame) kenna malee 'non-luminous' miti. Kanaaf C n dogoggora.`,
    hint: 'Unsaturated alkenes like ethylene burn with a luminous, smoky yellow flame.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q65',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Agricultural Chemistry: Essential Plant Macronutrients',
    questionText: '65. Which one of the following is an essential nutrient of plants?',
    options: [
      'Aluminum',
      'Lead',
      'Sodium',
      'Potassium'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Potassium (K) is one of the three primary essential macronutrients for plant growth (along with Nitrogen and Phosphorus, forming NPK fertilizers). It regulates stomatal opening, enzyme activation, and water balance. Lead and aluminum are toxic heavy metals.

🇪🇹 አማርኛ (Amharic):
ፖታስየም (Potassium, K) ለእጽዋት እድገት እጅግ አስፈላጊ ከሆኑት ሶስቱ ዋነኛ ማክሮ-ንጥረ ነገሮች (NPK) አንዱ ነው። እርሳስ (Lead) እና አሉሚኒየም ለእጽዋት መርዛማ ናቸው።

🌳 Afaan Oromoo:
Potaasiyeemiin (K) soorata bu'uuraa biqiltootaaf baay'ee barbaachisan keessaa isa tokkodha (soorata NPK keessatti).`,
    hint: 'Potassium (K) is a primary N-P-K plant macronutrient.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q66',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Bonding: Molecular Geometry & Dipole Moments',
    questionText: '66. Which one of the following is the main reason for the large difference in dipole-moment between the triatomic molecules water (H₂O) and carbon dioxide (CO₂)?',
    options: [
      'The presence of lone pairs of electrons in water (H₂O) partially reinforces bond polarities.',
      'The higher electronegativity difference among atoms in water than in CO₂.',
      'The presence of multiple bonds in carbon dioxide while single bonds in water.',
      'The bonds in carbon dioxide (CO₂) are directed 180° and cancel out, while water has a bent geometry where bond dipoles reinforce.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Carbon dioxide (CO₂) has a linear geometry (180° bond angle, O=C=O) where the two equal and opposite C=O bond dipole vectors cancel each other out completely, resulting in a net zero dipole moment (μ = 0 D). In contrast, water (H₂O) has a bent V-shape (104.5° bond angle) due to two lone pairs, causing the polar O-H bond dipole moments to add up vectorially, giving water a large net dipole moment (μ = 1.85 D).

🇪🇹 አማርኛ (Amharic):
ካርቦን ዳይኦክሳይድ (CO₂) ቀጥተኛ መስመራዊ (linear, 180°) ቅርጽ ስላለው ሁለቱ የዳይፖል አቅጣጫዎች እርስ በርሳቸው ተሰርዘው ዜሮ (μ = 0) ይሆናሉ፤ ውሃ (H₂O) ግን የታጠፈ (bent) ቅርጽ ስላለው ፖላሪቲው ተደምሮ ከፍተኛ የዳይፖል ሞመንት ይኖረዋል (ዲያግራም D)።

🌳 Afaan Oromoo:
Kaarboon daayooksaayidiin (CO₂) sarara qajeelaa (180°) waan ta'eef daayipooliin boondii wal-dhabamsiisa (μ = 0); bishaan (H₂O) ammoo boca dabsamaa waan qabuuf daayipooliin isaa walitti ida'amee ol'aanaa ta'a.`,
    hint: 'Linear CO2 cancels bond dipoles to zero, whereas bent H2O yields a permanent dipole.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q67',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Bonding: Lone Pairs in ClF₃ (VSEPR)',
    questionText: '67. How many non-bonding pairs of electrons are present in the valence shell of the central atom in ClF₃?',
    options: [
      '1',
      '0',
      '3',
      '2'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
1. Central atom Chlorine (Cl) has 7 valence electrons.
2. Chlorine shares 3 electrons to form 3 single covalent bonds with three Fluorine atoms (3 bonding pairs).
3. Remaining valence electrons on chlorine = 7 - 3 = 4 non-bonding electrons.
4. Number of non-bonding lone pairs = 4 / 2 = 2 lone pairs (giving ClF₃ a T-shaped geometry based on sp³d trigonal bipyramidal electron geometry).

🇪🇹 አማርኛ (Amharic):
1. ማእከላዊው ክሎሪን (Cl) 7 የቫለንስ ኤሌክትሮኖች አሉት።
2. ከ3 ፍሎሪኖች ጋር 3 ቦንዶችን ሲፈጥር 3 ኤሌክትሮኖችን ይጠቀማል።
3. የሚቀሩት ነጻ ኤሌክትሮኖች = 7 - 3 = 4 ኤሌክትሮኖች = 2 ያልተሳሰሩ ጥንዶች (2 lone pairs)።

🌳 Afaan Oromoo:
Kilooriiniin (Cl) elektiroonota vaaleensii 7 qaba. Fluriinii 3 wajjin boondii 3 uumuuf 3 fayyadama. Kan hafe 4 / 2 = cimdiilee 2 (2 lone pairs) dha.`,
    hint: 'Cl has 7 valence electrons: 3 used in bonds, leaving 4 electrons = 2 lone pairs.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q68',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Organic Chemistry: Physical Properties of Naphthalene',
    questionText: '68. Which one would be observed in a laboratory activity that is applied on naphthalene?',
    options: [
      'It is soluble in benzene.',
      'It conducts electricity in molten state.',
      'It shows relatively high melting point.',
      'It is soluble in water.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Naphthalene (C₁₀H₈) is a non-polar aromatic molecular solid. Following the "like dissolves like" solubility rule, it readily dissolves in non-polar organic solvents such as benzene, toluene, and petroleum ether, while being completely insoluble in polar water and non-conductive.

🇪🇹 አማርኛ (Amharic):
ናፍታሊን (Naphthalene - C₁₀H₈) ኢ-ፖላር (non-polar) ኦርጋኒክ ውህድ በመሆኑ፣ "ተመሳሳይ ተመሳሳይን ያሟሟል" በሚለው መርህ መሰረት እንደ ቤንዚን ባሉ ኢ-ፖላር አሟሚዎች ውስጥ በቀላሉ ይሟሟል (soluble in benzene)።

🌳 Afaan Oromoo:
Naaftaaliiniin (C₁₀H₈) kompaawundii noori-poolaaraa waan ta'eef, seera 'walfakkaataan walfakkaataa baqsa' jedhuun solveentota noori-poolaaraa kanneen akka beenziinii keessatti ni baqa.`,
    hint: 'Non-polar naphthalene dissolves in non-polar benzene ("like dissolves like").',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q69',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Theories of Chemical Bonding: Valence Bond Model',
    questionText: '69. Which one of the following statements is CORRECT?',
    options: [
      'Valence bond model simply shows the linkage between atoms and the presence of lone pairs.',
      'Lewis model predicts the shapes of molecules based on electron-pair repulsions around a central atom.',
      'In Lewis model, electrons repel one another and a pair of bonding electrons lies far apart as possible.',
      'Valence bond model explain molecular shape from the interaction of atomic orbitals.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The Valence Bond (VB) model explains molecular shapes and bonding geometry through the spatial overlap and orbital hybridization (sp, sp², sp³) of atomic orbitals with specific directional orientations in space.

🇪🇹 አማርኛ (Amharic):
የቫለንስ ቦንድ ሞዴል (Valence bond model) የሞለኪውሎችን የቦታ ቅርጽና ጥንካሬ የሚያስረዳው የአቶሚክ ኦርቢታሎች በቦታ ውስጥ በሚያደርጉት አቅጣጫዊ መደራረብና ሃይብሪዳይዜሽን አማካኝነት ነው።

🌳 Afaan Oromoo:
Moodelliin Vaaleensii Boondii (Valence bond model) boca molakiyuulotaa wal-nyaatinsa fi wal-irra bu'insa oorbiitaalota atoomawaa (orbital hybridization) irraa ka'uun ibsa.`,
    hint: 'Valence bond theory connects molecular shape with atomic orbital overlap and hybridization.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q70',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Bonding: Definition of Lattice Energy',
    questionText: '70. The energy required to completely separate one mole of a solid ionic compound into gaseous ions is a/an',
    options: [
      'Ionization energy',
      'Activation energy',
      'Lattice energy',
      'Bond energy'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Lattice energy is defined as the energy required to completely dissociate one mole of a crystalline solid ionic compound into its separated gaseous cations and anions (e.g., NaCl(s) → Na⁺(g) + Cl⁻(g)).

🇪🇹 አማርኛ (Amharic):
አንድ ሞል ጠጣር አዮናዊ ክሪስታልን ወደ ተለያዩ ጋዛዊ አዮኖች ሙሉ በሙሉ ለመበተን የሚያስፈልገው ጉልበት ላቲስ ኢነርጂ (Lattice energy) ይባላል።

🌳 Afaan Oromoo:
Anniisaan moolii 1 kompaawundii ayoonikii jajjabaa gara ayoonota gaasawaatti guutummaatti addaan baasuuf barbaachisu Anniisaa Laatiisii (Lattice energy) jedhama.`,
    hint: 'Energy to separate 1 mole of solid ionic lattice into gaseous ions is Lattice energy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q71',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Acids and Bases: Reactions of Basic Oxides',
    questionText: '71. Which of the following compounds reacts with basic oxide to form salt and water?',
    options: [
      'Acid',
      'Acidic oxide',
      'Base',
      'Neutral oxide'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A basic metal oxide (e.g., CaO, Na₂O, CuO) acts as a base and undergoes neutralization when reacting with an acid to produce a salt and water:
Basic Oxide + Acid → Salt + Water (e.g., CuO(s) + 2HCl(aq) → CuCl₂(aq) + H₂O(l)).

🇪🇹 አማርኛ (Amharic):
ቤዚክ ኦክሳይድ (Basic oxide) ከአሲድ (Acid) ጋር ሲዋሃድ የጨውና ውሃ ገለልተኛ ውህደት (neutralization) በማካሄድ ጨው እና ውሃ ይሰጣል (CuO + 2HCl → CuCl₂ + H₂O)።

🌳 Afaan Oromoo:
Ooksaayidiin beezawaan (Basic oxide) asiidii (Acid) wajjin yeroo wal-nyaatu soogiddaa fi bishaan uuma.`,
    hint: 'Basic Oxide + Acid = Salt + Water.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q72',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Preparation of Acids: Displacement from Salt by Non-Volatile Acid',
    questionText: '72. Which one of the following reaction represents formation of an acid from its salt?',
    options: [
      'CH₃COOH(aq) + CH₃OH(aq) → CH₃CO₂CH₃(aq) + H₂O(l)',
      'P₂O₅(s) + 6NaOH(aq) → 2Na₃PO₄(s) + 3H₂O(l)',
      'NaNO₃(s) + H₂SO₄(l) → NaHSO₄(s) + HNO₃(l)',
      'AgNO₃(aq) + NaCl(aq) → NaNO₃(aq) + AgCl(s)'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Reaction C demonstrates the laboratory preparation of volatile nitric acid (HNO₃) by heating its solid salt (sodium nitrate, NaNO₃) with concentrated non-volatile sulfuric acid (H₂SO₄):
NaNO₃(s) + H₂SO₄(l) → NaHSO₄(s) + HNO₃(g/l).

🇪🇹 አማርኛ (Amharic):
ግብረ-መልስ C የናይትሪክ አሲድ (HNO₃) ዝግጅት ሲሆን፣ የናይትሬት ጨው (NaNO₃) ከሰልፈሪክ አሲድ ጋር ሲሞቅ አሲዱ ከጨው የሚመረትበትን ሂደት ያሳያል።

🌳 Afaan Oromoo:
Re'aakshiniin C qophii asiidii naayitiriikii (HNO₃) soogidda isaa (NaNO₃) irraa asiidii salfariikiin fayyadamuun uumamuu agarsiisa.`,
    hint: 'NaNO3 (salt) + H2SO4 yields HNO3 (acid) and NaHSO4.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q73',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Acid-Base Equilibria: Definition of pH',
    questionText: '73. The negative logarithm of the molar concentration of hydrogen ion to the base ten is known as',
    options: [
      'pH',
      'Kw',
      'Ka',
      'pOH'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
By Søren Sørensen\'s foundational definition, pH is the negative decimal logarithm of the hydrogen/hydronium ion molar concentration: pH = -log₁₀[H⁺].

🇪🇹 አማርኛ (Amharic):
የሃይድሮጅን አዮን ክምችት [H⁺] ኔጌቲቭ ሎጋሪዝም ወደ ቤዝ 10 ፒኤች (pH = -log₁₀[H⁺]) በመባል ይታወቃል።

🌳 Afaan Oromoo:
Loogaariizimiin neegaatiiviin kunsantireeshinii ayoonota haayidiroojiinii (base 10) pH jedhama (pH = -log₁₀[H⁺]).`,
    hint: 'pH = -log[H+].',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q74',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Electrochemistry: Secondary (Rechargeable) Electrochemical Cells',
    questionText: '74. Which one of the following galvanic cell is an example of secondary cell?',
    options: [
      'Daniel\'s cell',
      'Lead storage cell',
      'Leclanche dry cell',
      'Zinc-carbon dry cell'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A secondary cell is a rechargeable electrochemical battery whose cell reaction can be reversed by passing an external electrical current in the opposite direction. The lead storage battery (Pb-acid car battery) is a classic secondary cell. Daniell, Leclanché, and zinc-carbon cells are non-rechargeable primary cells.

🇪🇹 አማርኛ (Amharic):
ሁለተኛ ደረጃ ሴል (Secondary cell) ማለት በድጋሚ ቻርጅ ሊደረግ የሚችል ባትሪ ሲሆን፣ የመኪና ባትሪ የሆነው ሊድ ስቶሬጅ ሴል (Lead storage cell) ዋነኛው ምሳሌ ነው።

🌳 Afaan Oromoo:
Seeliin sadarkaa lammaffaa (Secondary cell) seelii deebisanii chaarjii gochuun danda'amu yoo ta'u, baatriin konkolaataa (Lead storage cell) fakkeenya bu'uuraati.`,
    hint: 'Rechargeable lead-acid storage battery is a secondary cell.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q75',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Electrochemistry: Charge Carriers in Electrolytes',
    questionText: '75. Which one of the following is responsible for electrolytic conductivity?',
    options: [
      'Ions strongly held in a fixed position.',
      'Free electrons.',
      'Electrons held in a fixed position.',
      'Movement of ions.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Electrolytic conductivity in solutions or molten salts is made possible by the physical migration and movement of freely moving charged ions (cations moving to cathode, anions moving to anode).

🇪🇹 አማርኛ (Amharic):
በኤሌክትሮላይቲክ መፍትሄዎች ውስጥ የኤሌክትሪክ ፍሰት እንዲኖር የሚያደርገው የአዮኖች ነጻ እንቅስቃሴ (Movement of ions) ነው።

🌳 Afaan Oromoo:
Daddarbiinsa elektirikiitiif elektiroolaayitii keessatti sochiin ayoonota bilisaa (Movement of ions) itti gaafatamaadha.`,
    hint: 'Electrolytic conduction requires movement of mobile ions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q76',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'States of Matter: Properties of Gases',
    questionText: '76. Which one of the following statement is TRUE about gases?',
    options: [
      'The particles of gases are closely packed together.',
      'The volume of a gas is kept constant as pressure increases.',
      'When a gas sample is heated at constant pressure, its volume decreases.',
      'The volume of a gas is equal to the volume of its container.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Because gaseous particles have negligible intermolecular forces and high kinetic energy, gases expand freely in all directions to completely and uniformly fill whatever container they occupy. Thus, the volume of a gas is always equal to the volume of its container.

🇪🇹 አማርኛ (Amharic):
የጋዝ ቅንጣቶች እርስ በርሳቸው እጅግ የተራራቁ በመሆናቸው ጋዞች የተያዙበትን እቃ ሙሉ በሙሉ ይሞላሉ፤ ስለዚህ የጋዝ ይዘት (volume) ሁልጊዜ ከተያዘበት እቃ ይዘት ጋር እኩል ነው።

🌳 Afaan Oromoo:
Gaasonni bakka jiran hunda waan qabataniif dhangala'inni (volume) gaasii yeroo hunda dhangala'ina meeshaa inni keessa jiruutiin wal-qixa ta'a.`,
    hint: 'Gases expand indefinitely to assume the total volume of their container.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q77',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Gas Laws: Ideal Gas Equation Derivation',
    questionText: '77. Which one of the following mathematical expressions is derived from the combination of Boyle\'s law, Charles\' law and Avogadro\'s law?',
    options: [
      'V ∝ (nT) / P',
      'V ∝ T / (nP)',
      'V ∝ (nP) / T',
      'V ∝ P / (nT)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Combining the fundamental empirical gas laws:
- Boyle\'s Law: V ∝ 1/P
- Charles\'s Law: V ∝ T
- Avogadro\'s Law: V ∝ n
Combined: V ∝ (n × T) / P, which leads to the Ideal Gas Law: PV = nRT.

🇪🇹 አማርኛ (Amharic):
የቦይል ሕግ (V ∝ 1/P)፣ የቻርልስ ሕግ (V ∝ T) እና የአቮጋድሮ ሕግ (V ∝ n) ሲጣመሩ፡
V ∝ (nT) / P (ከዚህም PV = nRT ይገኛል)።

🌳 Afaan Oromoo:
Seerota gaasii yeroo walitti maku: V ∝ (nT) / P uuma; kunis gara seera gaasii idileetti (PV = nRT) geessa.`,
    hint: 'V is proportional to n and T, inversely proportional to P: V ∝ nT/P.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q78',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Stoichiometry: Calculating Limiting Reagent',
    questionText: '78. 180 g of calcium carbonate (CaCO₃) is allowed to react with 156 gram of hydrochloric acid (HCl), according to the following reaction. Which of the following substances is the limiting reagent?\n(Atomic masses: Ca=40, Cl=35.5, O=16, C=12, H=1)\nCaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O',
    options: [
      'HCl',
      'CaCO₃',
      'H₂O',
      'CO₂'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
1. Molar mass of CaCO₃ = 40 + 12 + 3(16) = 100 g/mol.
   Moles of CaCO₃ available = 180 g / 100 g/mol = 1.80 mol.
2. Molar mass of HCl = 1 + 35.5 = 36.5 g/mol.
   Moles of HCl available = 156 g / 36.5 g/mol = 4.27 mol.
3. According to stoichiometry: 1 mole CaCO₃ requires 2 moles HCl.
   Therefore, 1.80 moles CaCO₃ requires 1.80 × 2 = 3.60 moles HCl.
4. Because we have 4.27 moles HCl (which is greater than 3.60 moles required), HCl is in excess and CaCO₃ will be completely consumed first. Thus, CaCO₃ is the limiting reagent.

🇪🇹 አማርኛ (Amharic):
1. የCaCO₃ ሞል = 180 g / 100 g/mol = 1.80 mol።
2. የHCl ሞል = 156 g / 36.5 g/mol = 4.27 mol።
3. 1.80 mol CaCO₃ የሚያስፈልገው 1.80 × 2 = 3.60 mol HCl ብቻ ነው።
4. በእጃችን 4.27 mol HCl ስላለ HCl ትርፍ ሲሆን፣ CaCO₃ አስቀድሞ የሚያልቀው ወሳኝ ንጥረ ነገር (Limiting reagent) ነው።

🌳 Afaan Oromoo:
1. Moolii CaCO₃ = 180 / 100 = 1.80 mol.
2. Moolii HCl = 156 / 36.5 = 4.27 mol.
3. CaCO₃ mooliin 1.80 HCl moolii 3.60 qofa barbaada.
4. HCl n moolii 4.27 waan jiruuf dabalata; CaCO₃n ammoo dafee waan dhumuuf re'aaktantii murteessaa (Limiting reagent) dha.`,
    hint: 'Compare mole ratio: 1.80 mol CaCO3 requires only 3.60 mol HCl (4.27 available), so CaCO3 is limiting.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q79',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Organic Chemistry: Types of Isomerism (Chain Isomers)',
    questionText: '79. Which one of the following isomers differs in the arrangement of carbon atoms in the longest continuous carbon chain?',
    options: [
      'Geometric',
      'Position',
      'Cis-trans',
      'Structural'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Chain isomers (a primary category of structural/constitutional isomers) differ specifically in the branching and skeletal arrangement of carbon atoms in the continuous carbon backbone chain (e.g., butane vs. isobutane / 2-methylpropane).

🇪🇹 አማርኛ (Amharic):
በካርቦን ሰንሰለት አደረጃጀትና ቅርንጫፍ (carbon chain arrangement) ልዩነት ያላቸው አይሶመሮች የስትራክቸራል/ቼይን አይሶመሮች (Structural/chain isomers) ይባላሉ (ለምሳሌ butane እና 2-methylpropane)።

🌳 Afaan Oromoo:
Aayisoomaroonni caasaa qajeelaa fi damee sarara kaarboonii irratti garaagarummaa qaban Aayisoomaroota caasaa (Structural/Chain isomers) jedhamu.`,
    hint: 'Chain isomerism is a subtype of structural isomerism differing in carbon skeleton.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q80',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Hydrocarbons: Laboratory Preparation of Alkynes',
    questionText: '80. Which one of the following methods can be used in the laboratory for the preparation of alkynes?',
    options: [
      'Dehydration of alcohols with concentrated sulphuric acid.',
      'Heating of sodium salt of an organic acid with soda lime.',
      'Dehydrohalogenation of adjacent dihalides with sodium hydroxide.',
      'Hydrogenation of alkenes with a metal catalyst.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Alkynes (containing carbon-carbon triple bonds -C≡C-) are synthesized in the laboratory by the double dehydrohalogenation (removal of 2 HX molecules) of vicinal/adjacent dihalides using strong bases like hot alcoholic NaOH/KOH or sodium amide (NaNH₂):
R-CH(X)-CH(X)-R\' + 2NaOH → R-C≡C-R\' + 2NaX + 2H₂O.

🇪🇹 አማርኛ (Amharic):
አልካይኖች (Alkynes - የሶስትዮሽ ቦንድ ያላቸው) በቤተ-ሙከራ ውስጥ የሚዘጋጁት ጎን ለጎን ካሉ ዳይሃላይዶች (adjacent dihalides) ላይ በጠንካራ ቤዝ አማካኝነት ሃይድሮጅንና ሃሎጅን በማስወገድ (Dehydrohalogenation) ነው።

🌳 Afaan Oromoo:
Alkaayinoonni (boondii sadii qaban) laaboraatorii keessatti daayihalaayidota wal-cinaa jiran irraa beezii cimaatiin adeemsa 'dehydrohalogenation' tiin qophaa'u.`,
    hint: 'Double dehydrohalogenation of vicinal/adjacent dihalides produces alkynes.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  }
];
