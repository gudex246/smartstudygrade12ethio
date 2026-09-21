import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2017_EC_PART2: Question[] = [
  {
    id: 'chem-2017-q21',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Laws of Chemical Combination: Law of Definite Proportions',
    questionText: '21. Which law governs the fact that the ratio of the amount of hydrogen to oxygen by weight will be the same in a drop of water and a lake of water?',
    options: [
      'Law of relative composition',
      'Law of conservation of mass',
      'Law of multiple proportions',
      'Law of definite composition (definite proportions)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The Law of Definite Composition (Proust's Law) states that a given chemical compound always contains its component elements in fixed, definite proportions by mass, regardless of the source or sample size. Pure water (H2O) is always 11.19% hydrogen and 88.81% oxygen by mass (a fixed 1:8 mass ratio).

🇪🇹 አማርኛ (Amharic):
የቋሚ ውድር ህግ (Law of Definite Composition / Proportions) እንደሚደነግገው ማንኛውም ንጹህ የኬሚካል ውህድ ከተሰሩበት ንጥረ ነገሮች ሁልጊዜ በቋሚ የክብደት መጠን ይዋሃዳል። በአንድ የውሃ ጠብታም ሆነ በሙሉ ሀይቅ ውስጥ የሃይድሮጅን እና ኦክስጅን የክብደት ንፅፅር (1:8) ተመሳሳይ ነው።

🌳 Afaan Oromoo:
Seerri \'Law of Definite Composition\' jedhu qabiyyee keemikaalaa kamiyyuu keessatti hamma ulfaatina elementoota waldhabdee hin qabneen yeroo hunda reeshoo dhaabbataa ta\'een walitti qabamu ibsa.`,
    hint: 'A pure chemical compound always contains its elements in a fixed ratio by mass.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q22',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Equilibrium: Dynamic Nature of Chemical Equilibrium',
    questionText: '22. Which statement below CORRECTLY describes the characteristics of chemical equilibrium?',
    options: [
      'A reaction stops when it reaches equilibrium.',
      'A reaction stops if sufficient amount of time is given.',
      'The rates of the forward and reverse reactions are equal.',
      'A new substance or substances are formed when equilibrium is attained.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Chemical equilibrium is dynamic:
1. The forward and reverse reactions do NOT stop; they continue occurring simultaneously.
2. The rate of the forward reaction equals the rate of the reverse reaction (Rate_forward = Rate_reverse).
3. The concentrations of all reactants and products remain constant over time.

🇪🇹 አማርኛ (Amharic):
የኬሚካላዊ ሚዛን (Chemical equilibrium) ዋነኛ መገለጫው ወደፊት የሚሄደው ምላሽ ፍጥነት ወደ ኋላ ከሚመለሰው ምላሽ ፍጥነት ጋር እኩል መሆኑ (Rate of forward = Rate of reverse) እና የሪአክታንትና ፕሮዳክት መጠኖች ቋሚ ሆነው መቆየታቸው ነው።

🌳 Afaan Oromoo:
Amalli guddaan \'Chemical Equilibrium\' saffisi wal-nyaatinsa fuulduraa fi kan duubaa wal-qixa (Rate_forward = Rate_reverse) ta\'uudha.`,
    hint: 'At dynamic equilibrium, forward rate equals reverse rate.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q23',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Organic Nomenclature: IUPAC Naming of Haloalkanes',
    questionText: '23. What is the CORRECT IUPAC nomenclature of the following alkane: CH3-CH(CH3)-CH2-CH(Cl)-CH2-CH(Cl)-CH2-CH(CH2CH3)-CH3?',
    options: [
      '5,7-dichloro-3,9-dimethyldecane',
      '4,6-dichloro-2,8-dimethyldecane',
      '4,6-dichloro-2-ethyl-8-methylnonane',
      '4,6-dichloro-8-ethyl-2-methylnonane'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
IUPAC rules for branched haloalkanes:
1. Longest continuous carbon chain has 10 carbons -> decane.
2. Numbering from left gives substituents at positions 2 (methyl), 4 (chloro), 6 (chloro), and 8 (methyl).
3. Alphabetical ordering: "chloro" precedes "methyl".
Full name: 4,6-dichloro-2,8-dimethyldecane.

🇪🇹 አማርኛ (Amharic):
የ IUPAC ስያሜ ህግጋት፡
1. ረጅሙ የካርቦን ሰንሰለት 10 ካርቦኖች አሉት (decane)።
2. ቁጥሩ ከግራ ሲጀምር በ 2, 4, 6, 8 ላይ ተቀጣጣዮች ይገኛሉ።
3. በፊደል ቅደም ተከተል "dichloro" ከ "dimethyl" ይቀድማል -> 4,6-dichloro-2,8-dimethyldecane።

🌳 Afaan Oromoo:
Moggaasa IUPAC: Sanyiin dheeraan kaarboonii 10 qaba (decane). Qabattoonni lakkoofsa 2, 4, 6, 8 irratti argamu. Akka tartiiba qubeetti: 4,6-dichloro-2,8-dimethyldecane ta\'a.`,
    hint: '10-carbon longest chain is decane; numbering gives 4,6-dichloro-2,8-dimethyldecane.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q24',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Hydrocarbons: Saturated vs Unsaturated Hydrocarbons',
    questionText: '24. What is the name given to compounds of carbon and hydrogen containing multiple bonds (double or triple bonds)?',
    options: [
      'Aliphatic hydrocarbons',
      'Aromatic hydrocarbons',
      'Saturated hydrocarbons',
      'Unsaturated hydrocarbons'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Unsaturated hydrocarbons contain at least one carbon-carbon double bond (alkenes) or triple bond (alkynes).
• Saturated hydrocarbons (alkanes) contain only carbon-carbon single bonds.

🇪🇹 አማርኛ (Amharic):
ድርብ ወይም ሶስትዮሽ የካርቦን ቦንድ (double or triple bonds) የያዙ የሃይድሮካርቦን ውህዶች ያልጠገቡ ሃይድሮካርቦኖች (Unsaturated hydrocarbons) ይባላሉ።

🌳 Afaan Oromoo:
Haayidirookaarboononni hidhoo dachaa (double bond) yookiin hidhoo sadii (triple bond) qaban \'Unsaturated hydrocarbons\' jedhamu.`,
    hint: 'Hydrocarbons with double or triple bonds are unsaturated.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q25',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Organic Chemistry: Isomers of Alkenes',
    questionText: '25. 2-methyl-1-butene is one of the isomers of C5H10. Which of the following is the CORRECT structural formula of this isomer?',
    options: [
      'CH2=C(CH3)-CH2-CH3',
      'CH3-CH2-C≡C-CH3',
      'CH3-C≡C-CH3',
      'CH3-CH=CH-CH2-CH3'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
2-methyl-1-butene consists of a 4-carbon parent alkene chain (butene) with a terminal double bond at C1 and a methyl branch at C2:
CH2=C(CH3)-CH2-CH3 (molecular formula C5H10).

🇪🇹 አማርኛ (Amharic):
2-methyl-1-butene ባለ 4 ካርቦን ሰንሰለት ሲሆን በካርቦን 1 ላይ ድርብ ቦንድ እና በካርቦን 2 ላይ የሜቲል ቅርንጫፍ አለው፡ CH2=C(CH3)-CH2-CH3።

🌳 Afaan Oromoo:
Boci caasaa \'2-methyl-1-butene\': CH2=C(CH3)-CH2-CH3 dha.`,
    hint: '2-methyl-1-butene has a double bond at C1 and a methyl branch at C2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q26',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Industrial Chemistry: Industrial Synthesis of Ethylene Glycol',
    questionText: '26. Which of the following organic compounds is used as the primary chemical precursor for the industrial production of 1,2-ethanediol (ethylene glycol)?',
    options: [
      'Ethene',
      'Ethane',
      'Ethyne',
      'Ethanol'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In chemical industry, 1,2-ethanediol (ethylene glycol, automotive antifreeze) is commercially produced by catalytic oxidation of ethene (ethylene) to ethylene oxide, followed by hydrolysis:
C2H4 + 1/2 O2 -> C2H4O --[H2O]--> HO-CH2-CH2-OH.

🇪🇹 አማርኛ (Amharic):
በኢንዱስትሪ ደረጃ 1,2-ethanediol (ethylene glycol) ለማምረት የሚያገለግለው ዋናው ጥሬ እቃ ኤቲን (Ethene) ነው።

🌳 Afaan Oromoo:
Oomisha \'1,2-ethanediol\' keessatti keemikaalli bu\'uuraa \'Ethene\' dha.`,
    hint: 'Ethene (ethylene) is oxidized and hydrolyzed into ethylene glycol.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q27',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Fossil Fuels: Composition of Natural Gas',
    questionText: '27. Which of the following is the main constituent (70% to 90%) of natural gas?',
    options: [
      'Ethane',
      'Butane',
      'Propane',
      'Methane'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Natural gas is a fossil fuel gaseous mixture consisting primarily of methane (CH4, typically 70–90%), with smaller percentages of ethane, propane, butane, and nitrogen.

🇪🇹 አማርኛ (Amharic):
የተፈጥሮ ጋዝ (Natural gas) ዋናው እና ዋነኛው አካል (ከ 70% እስከ 90% የሚሆነው) ሚቴን (Methane - CH4) ነው።

🌳 Afaan Oromoo:
Qabiyyee guddaan gaazii uumamaa (harka 70-90%) \'Methane (CH4)\' dha.`,
    hint: 'Methane (CH4) makes up the vast majority of natural gas.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q28',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Applied Chemistry: Industrial Solvents for Dry Cleaning',
    questionText: '28. In order to avoid the decrease in quality of some clothes after washing with water, which of the following non-polar chemicals is widely used for commercial dry cleaning?',
    options: [
      'CH4',
      'CH2Cl2',
      'C2H4',
      'C2Cl4 (Tetrachloroethylene)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Tetrachloroethylene (perchloroethylene / "perc", C2Cl4 / Cl2C=CCl2) is the standard synthetic non-polar solvent used in dry cleaning because it dissolves greasy soils, oils, and waxes effectively without swelling or shrinking delicate fabric fibers.

🇪🇹 አማርኛ (Amharic):
ልብሶችን በውሃ በማጠብ ጥራታቸው እንዳይበላሽ በደረቅ እጥበት (Dry cleaning) ውስጥ በስፋት የሚያገለግለው ኬሚካል ቴትራክሎሮኤቲሊን (C2Cl4 / Tetrachloroethylene) ይባላል።

🌳 Afaan Oromoo:
Uffata \'dry cleaning\' dhiquuf keemikaalli bal\'inaan tajaajilu \'Tetrachloroethylene (C2Cl4)\' dha.`,
    hint: 'Perchloroethylene / Tetrachloroethylene (C2Cl4) is the universal dry cleaning solvent.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q29',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Inorganic Chemistry: Properties of Acidic Oxides',
    questionText: '29. Which of the following properties is characteristic of an acidic oxide? An acidic oxide reacts with:',
    options: [
      'Salts to form acids.',
      'Water to form acids.',
      'Bases to form basic hydroxide and water.',
      'Basic oxides to form hydroxides and water.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
An acidic oxide (non-metallic oxide, acid anhydride) reacts with water to form an acid:
• CO2(g) + H2O(l) -> H2CO3(aq) (carbonic acid)
• SO3(g) + H2O(l) -> H2SO4(aq) (sulfuric acid).
Acidic oxides also neutralize bases to form salt and water.

🇪🇹 አማርኛ (Amharic):
አሲዲክ ኦክሳይዶች (Acidic oxides - የብረት ያልሆኑ ኦክሳይዶች) ከውሃ ጋር ሲዋሃዱ አሲድ ይፈጥራሉ (ምሳሌ፡ CO2 + H2O -> H2CO3)።

🌳 Afaan Oromoo:
Ooksaayidoonni asiidawaan bishaan wajjin wal-nyaatanii asiidii uumu (fakkeenyaaf: CO2 + H2O -> H2CO3).`,
    hint: 'Acidic oxides (nonmetal oxides) dissolve in water to produce acids.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q30',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Acids and Bases: Classification of Weak vs Strong Acids',
    questionText: '30. What is the name given to an acid that dissociates (ionizes) only to a slight extent in aqueous solution?',
    options: [
      'Dilute acid',
      'Strong acid',
      'Weak acid',
      'Concentrated acid'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Weak acid: Ionizes only partially/slightly (< 5%) in aqueous solution, establishing an equilibrium (e.g., CH3COOH, HF, HNO2).
• Strong acid: Completely ionizes (100%) into ions in water (e.g., HCl, HNO3, H2SO4).

🇪🇹 አማርኛ (Amharic):
በውሃ ውስጥ በከፊል ወይም በትንሽ መጠን ብቻ አዮናይዝ የሚያደርግ (dissociates only slightly) አሲድ ደካማ አሲድ (Weak acid) ይባላል።

🌳 Afaan Oromoo:
Asiidiin bishaan keessatti muraasa qofa ayoonaayizii ta\'u \'Weak acid\' (asiidii dadhabaa) jedhama.`,
    hint: 'Weak acids only partially dissociate into ions in water.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q31',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Acids and Bases: pH Scale and Classification of Solutions',
    questionText: '31. Solutions can be classified based upon their pH values. What is a solution whose pH value is 13?',
    options: [
      'Amphoteric solution',
      'Acidic solution',
      'Neutral solution',
      'Basic (alkaline) solution'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
On the standard aqueous pH scale at 25°C:
• pH < 7: Acidic solution
• pH = 7: Neutral solution
• pH > 7: Basic (alkaline) solution
A solution with pH = 13 has high [OH-] concentration and is strongly basic.

🇪🇹 አማርኛ (Amharic):
በ pH መለኪያ መሰረት የ pH መጠኑ 13 የሆነ ውህድ ጠንካራ ቤዚክ (Basic / alkaline) ሶሉሽን ነው።

🌳 Afaan Oromoo:
Sadarkaa pH irratti falli pH = 13 qabu \'Basic solution\' (beezii cimaa) dha.`,
    hint: 'pH > 7 indicates a basic (alkaline) solution.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q32',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Metals: Reaction of Calcium with Water and Litmus Test',
    questionText: '32. During a laboratory class, a student placed clean water in a beaker and added pieces of calcium metal using tongs. After the reaction is completed, he/she tested the solution using red litmus paper. Which of the following will be observed?',
    options: [
      'The litmus paper turns to blue.',
      'The litmus paper turns to red.',
      'The litmus paper maintains its color.',
      'The litmus paper turns to colorless.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Calcium reacts with water to produce calcium hydroxide (a strong alkaline base) and hydrogen gas:
Ca(s) + 2 H2O(l) -> Ca(OH)2(aq) + H2(g)
Because the resulting Ca(OH)2 solution is basic (alkaline), it turns red litmus paper blue.

🇪🇹 አማርኛ (Amharic):
ካልሲየም ከውሃ ጋር ሲዋሃድ ካልሲየም ሃይድሮክሳይድ የተባለ ቤዝ ይፈጥራል፡ Ca + 2H2O -> Ca(OH)2 + H2። ይህ ቤዚክ ሶሉሽን ቀይ የሊትመስ ወረቀትን ወደ ሰማያዊ (blue) ይቀይረዋል።

🌳 Afaan Oromoo:
Kaalsiyeemiin bishaan wajjin wal-nyaatee beezii Ca(OH)2 uuma. Beeziin immoo waraqaa liitmasii diimaa gara cuquliisaatti (blue) jijjiira.`,
    hint: 'Ca + 2H2O -> Ca(OH)2 (basic solution) turns red litmus paper blue.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q33',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Electrochemistry: Electrolysis of Molten Lead(II) Bromide',
    questionText: '33. In an activity during a laboratory session, a small amount of lead(II) bromide (PbBr2) crystals were placed in a beaker with two inert electrodes. When the PbBr2 crystals in the beaker are gently heated until molten, which of the following will be observed?',
    options: [
      'Bromine gas is evolved at the anode',
      'Bromide ion is oxidized at the cathode',
      'Lead(II) ion is reduced at the anode',
      'Lead(II) ion is oxidized at the cathode'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In the electrolysis of molten PbBr2:
• Anode (positive electrode, oxidation): 2 Br-(l) -> Br2(g) + 2 e- (brown reddish bromine vapor is evolved).
• Cathode (negative electrode, reduction): Pb2+(l) + 2 e- -> Pb(l) (silvery molten lead metal deposits).

🇪🇹 አማርኛ (Amharic):
የቀለጠ PbBr2 ኤሌክትሮላይሲስ ሲደረግ፡
በአኖድ (Anode) ላይ ብሮማይድ አዮኖች ኦክሲዳይዝድ በመሆን ቀይ-ቡናማ የብሮሚን ጋዝ (Bromine gas) ይወጣል (2Br- -> Br2 + 2e-)።

🌳 Afaan Oromoo:
Elekiroolayisisiisii \'molten PbBr2\' keessatti, anoodii irratti gaaziin boroomeenii (Br2) uumama: 2Br- -> Br2 + 2e-.`,
    hint: 'At the anode (+), bromide ions lose electrons to evolve Br2 gas.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q34',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Environmental Chemistry: Land and Soil Pollution',
    questionText: '34. What is the name given to the environmental degradation caused by the indiscriminate dumping of non-biodegradable synthetic wastes (such as plastics) into the terrestrial environment?',
    options: [
      'Air pollution',
      'Land (soil) pollution',
      'Sound pollution',
      'Water pollution'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Dumping non-biodegradable materials (such as synthetic plastics, polymers, and heavy metals) directly onto the land causes land (soil) pollution, degrading soil fertility, destroying habitats, and persisting for centuries.

🇪🇹 አማርኛ (Amharic):
በተፈጥሮ የማይበሰብሱ ሰው ሰራሽ ፕላስቲኮችና ቆሻሻዎችን በመሬት ላይ መጣል የሚያስከትለው የአካባቢ ብክለት የመሬት/አፈር ብክለት (Land pollution) ይባላል።

🌳 Afaan Oromoo:
Kosiilee akka pilaastikaa lafarratti gatuun faalama lafaa (land pollution) fida.`,
    hint: 'Dumping solid waste on the ground causes land pollution.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q35',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Industrial Chemistry: Metallurgy of Iron and Steel Production',
    questionText: '35. What is the primary purpose of the conversion of pig iron to steel in a basic oxygen furnace?',
    options: [
      'To remove impurities (excess carbon, silicon, phosphorus) by oxidation',
      'To remove impurities by reduction',
      'To increase the concentration of iron in the pig iron',
      'To decrease the concentration of iron in the pig iron'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Pig iron from the blast furnace contains 4–5% carbon along with silicon, phosphorus, and sulfur, making it brittle. In the steelmaking process (Basic Oxygen Furnace), pure oxygen is blown through molten pig iron to oxidize and remove excess carbon (as CO/CO2 gas) and impurities as slag (SiO2, P2O5).

🇪🇹 አማርኛ (Amharic):
ፒግ አይረንን (pig iron) ወደ ብረት (steel) የመቀየር ዋናው አላማ በኦክስጅን አማካኝነት በውስጡ ያሉትን አላስፈላጊ ቆሻሻዎችና የተትረፈረፈ ካርቦን በኦክሲዴሽን (oxidation) ማስወገድ ነው።

🌳 Afaan Oromoo:
\'Pig iron\' gara \'steel\'tti jijjiiruuf kaayyoon guddaan kaarboonii fi kosiilee jiran ooksidiyeeshiniin balleessuudha.`,
    hint: 'Oxygen oxidizes excess carbon, sulfur, and phosphorus to refine pig iron into steel.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q36',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Laws of Chemical Combination: Law of Conservation of Mass',
    questionText: '36. Which of the following statements CORRECTLY describes Lavoisier\'s Law of Conservation of Mass?',
    options: [
      'The total mass of substances varies during a chemical reaction.',
      'Mass is neither created nor destroyed during a chemical reaction.',
      'A particular compound is composed of the same elements in the same parts by mass.',
      'Pure compounds always contain the elements in the same percentage by mass.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The Law of Conservation of Mass (formulated by Antoine Lavoisier in 1789) states that in a closed chemical system, mass is neither created nor destroyed during a chemical reaction: Total mass of reactants = Total mass of products.

🇪🇹 አማርኛ (Amharic):
የማስ ጥበቃ ህግ (Law of Conservation of Mass) እንደሚደነግገው በኬሚካላዊ ምላሽ ጊዜ ማስ አይፈጠርም እንዲሁም አይጠፋም (Mass is neither created nor destroyed)።

🌳 Afaan Oromoo:
Seerri \'Law of Conservation of Mass\' akka jedhutti, wal-nyaatinsa keemikaalaa keessatti hangii (mass) hin uumamu akkasumas hin badu.`,
    hint: 'Mass cannot be created or destroyed in chemical reactions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q37',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Atomic Structure: Electromagnetic Spectrum and Wavelength Calculation',
    questionText: '37. A mineral absorbs purple light of frequency 7.11 × 10¹⁴ Hz. What is the wavelength (in nm) of the absorbed light? (Speed of light c = 3.00 × 10⁸ m/s)',
    options: [
      '184.4 nm',
      '237.5 nm',
      '421.9 nm',
      '514.5 nm'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Using the wave equation c = λ · ν:
λ = c / ν
λ = (3.00 × 10⁸ m/s) / (7.11 × 10¹⁴ s⁻¹)
λ = 4.219 × 10⁻⁷ m
Convert meters to nanometers (1 nm = 10⁻⁹ m):
λ = 4.219 × 10⁻⁷ × 10⁹ = 421.9 nm.

🇪🇹 አማርኛ (Amharic):
የሞገድ ርዝመት ስሌት (λ = c / ν)፡
λ = (3.00 × 10⁸) / (7.11 × 10¹⁴) = 4.219 × 10⁻⁷ ሜትር
ወደ ናኖሜትር ሲቀየር፡ 421.9 nm ይሆናል።

🌳 Afaan Oromoo:
Shallaggii dheerina dambalii:
λ = c / ν = (3.00 × 10⁸) / (7.11 × 10¹⁴) = 421.9 nm ta\'a.`,
    hint: 'λ = c / f = (3.00 x 10⁸) / (7.11 x 10¹⁴) = 421.9 nm.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q38',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Atomic Structure: Electronic Transitions and Energy Absorption',
    questionText: '38. Why do atoms absorb energy when their electrons undergo transitions from a lower energy level to a higher energy level?',
    options: [
      'The electrons of the atoms move from one orbit of lower radius to another one having larger radius.',
      'The electrons of the atoms move from one orbit of higher radius to another one having lower radius.',
      'The electrons of the atoms do not have allowable energy levels.',
      'Electrons of the atoms absorb energy when they go from higher to lower energy.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In Bohr's atomic theory, higher energy levels correspond to orbits located farther from the positive nucleus (larger orbital radius). To overcome electrostatic attraction and move from an inner orbit (lower radius) to an outer orbit (larger radius), the electron must absorb a discrete photon of energy (ΔE = hν).

🇪🇹 አማርኛ (Amharic):
ኤሌክትሮን ከዝቅተኛ ወደ ከፍተኛ የሃይል እርከን ሲዘል ሃይል የሚስበው ከኒውክሊየስ ርቆ ወደሚገኝ ሰፊ ራዲየስ ወዳለው ምህዋር (larger radius orbit) ለመሸጋገር የኒውክሊየሱን ስበት ማሸነፍ ስላለበት ነው።

🌳 Afaan Oromoo:
Elektirooniin orbiitii xiqqaa irraa gara orbiitii raadiyeesii bal\'aa qabuutti ce\'uuf anniisaa xuuxa.`,
    hint: 'Higher energy levels are farther from the nucleus (larger orbit radius).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q39',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Quantum Chemistry: Quantum Numbers of Atomic Orbitals',
    questionText: '39. What are the correct four quantum numbers that describe an electron in the 5s orbital?',
    options: [
      'n = 5, l = 0, ml = -1, ms = ±1/2',
      'n = 5, l = 1, ml = -2, ms = ±1/2',
      'n = 5, l = 2, ml = -2, ms = ±1/2',
      'n = 5, l = 0, ml = 0, ms = ±1/2'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
For a 5s orbital:
• Principal quantum number n = 5
• Azimuthal/angular momentum quantum number l = 0 (for s orbitals, l is always 0)
• Magnetic quantum number ml = 0 (since ml ranges from -l to +l)
• Spin quantum number ms = +1/2 or -1/2.

🇪🇹 አማርኛ (Amharic):
ለ 5s ኦርቢታል የኳንተም ቁጥሮች፡
n = 5 (ዋና እርከን)
l = 0 (ለ s ኦርቢታል)
ml = 0 (ማግኔቲክ ኳንተም ቁጥር)
ms = ±1/2 (ስፒን ኳንተም ቁጥር)።

🌳 Afaan Oromoo:
Orbiitaalii 5s\'f lakkoofsonni kuwaantami: n = 5, l = 0, ml = 0, ms = ±1/2 dha.`,
    hint: 'For any s-orbital, l = 0 and ml = 0.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q40',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Quantum Mechanics: Pauli Exclusion Principle in Helium',
    questionText: '40. Which of the following is CORRECT about the set of quantum numbers assigned to the two electrons of the helium atom (1s²)?',
    options: [
      'Both electrons have the same four quantum numbers.',
      'The second electron occupies the same orbital as the first with the same spin quantum number.',
      'The second electron occupies the same orbital as the first with the opposite spin quantum number.',
      'The magnetic quantum numbers of both electrons are different.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
By the Pauli Exclusion Principle: No two electrons in an atom can have the same four quantum numbers.
In Helium (1s²), both electrons share n = 1, l = 0, and ml = 0, so their spin quantum numbers MUST be opposite:
First electron: ms = +1/2; Second electron: ms = -1/2.

🇪🇹 አማርኛ (Amharic):
በፓውሊ ህግ (Pauli Exclusion Principle) መሰረት በሄሊየም አቶም (1s²) ውስጥ ያሉት ሁለቱ ኤሌክትሮኖች በአንድ ኦርቢታል ውስጥ ሲቀመጡ ተቃራኒ ስፒን (opposite spin: +1/2 እና -1/2) ሊኖራቸው ይገባል።

🌳 Afaan Oromoo:
Akka seera \'Pauli Exclusion Principle\'tti, elektiroononni lamaan heeliyeemii (1s²) orbiitaalii tokko keessa kan taa\'an \'spin\' faallaa (opposite spin) qabaachuuni.`,
    hint: 'Pauli exclusion principle requires electrons in the same orbital to have opposite spins.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
