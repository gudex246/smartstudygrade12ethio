import { Question } from '../types';

export const CHEMISTRY_2013_EC_PART3: Question[] = [
  {
    id: 'chem-2013-q41',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Equilibrium: Haber Process Optimization',
    questionText: '41. In the production of NH3 by the Haber process: N2(g) + 3H2(g) <=> 2NH3(g), ΔH = -92 kJ/mol. What are the favorable equilibrium conditions for the production of a high yield of NH3?',
    options: [
      'High pressure and low temperature',
      'Low pressure and low temperature',
      'Low pressure and high temperature',
      'High pressure and high temperature'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
According to Le-Chatelier's principle:
1. High pressure shifts equilibrium toward the side with fewer gas moles (4 moles on reactant side vs. 2 moles on product side).
2. Low temperature favors the forward exothermic reaction (ΔH = -92 kJ/mol) to release heat.
Therefore, high pressure and low temperature maximize the equilibrium yield of NH3.

🇪🇹 አማርኛ (Amharic):
በሌ-ሻቴሊየር መርህ መሰረት፣ ግብረ-መልሱ ኤክሶተርሚክ (ΔH = -92 kJ/mol) እና የጋዝ ሞል ቁጥር የሚቀንስበት (4 ሞል ወደ 2 ሞል) በመሆኑ፣ ከፍተኛ ግፊት (high pressure) እና ዝቅተኛ ሙቀት (low temperature) ከፍተኛ የአሞኒያ (NH3) ምርት እንዲገኝ ያደርጋሉ።

🌳 Afaan Oromoo:
Akka seera Le-Chatelier'tti, re'aakshiniin amooniyaa uumuu eksootermikii waan ta'eef fi baay'inni molii gaasii waan hir'atuuf (4 gara 2tti), dhiibbaa ol'aanaa (high pressure) fi teempireechara gadi aanaa (low temperature) bu'aa amooniyaa guddisuuf filatamaadha.`,
    hint: 'Exothermic reactions with fewer product gas moles are favored by high pressure and low temperature.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q42',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Organic Chemistry: Laboratory and Industrial Synthesis of Acetic Acid',
    questionText: '42. Which one of the following statements describes laboratory and industrial preparation of acetic acid respectively?',
    options: [
      'Reduction of ethanol by NaBH4 and fermentation of propanol.',
      'Reduction of toluene by KMnO4 and reduction of ethanol by sodium dichromate.',
      'The oxidation of ethanol by sodium dichromate and fermentation of ethanol.',
      'Oxidation of toluene by KMnO4 and fermentation of ethanol.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In the laboratory, acetic acid is prepared by the oxidation of ethanol using acidified sodium dichromate (Na2Cr2O7/H2SO4) or KMnO4. Industrially, acetic acid is produced via the biological fermentation of ethanol (using Acetobacter bacteria) or by the Monsanto/Cativa carbonylation of methanol.

🇪🇹 አማርኛ (Amharic):
በላቦራቶሪ ውስጥ አሴቲክ አሲድ የሚዘጋጀው ኢታኖልን በሶዲየም ዳይክሮሜት (Na2Cr2O7) በማጣራት/ኦክሳይድ በማድረግ ሲሆን፣ በኢንዱስትሪ ደረጃ ደግሞ ኢታኖልን በባክቴሪያ በማብላላት (fermentation) ይመረታል።

🌳 Afaan Oromoo:
Laaboraatorii keessatti asidiin aseetikii eetaanoolii soodiyeem daayikiroomaayitiin oksidaayizii gochuun qophaa'a, industirii keessatti immoo eetaanoolii baakteeriyaadhaan bilcheessuun (fermentation) oomishama.`,
    hint: 'Lab method: oxidation of primary alcohol with Na2Cr2O7; Industrial method: bacterial fermentation of ethanol.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q43',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Organic Chemistry: Carboxylic Acid Characteristics',
    questionText: '43. Which of the following is true about carboxylic acids?',
    options: [
      'Methanoic, Ethanoic and Citric acids are monocarboxylic acids.',
      'Carboxylic acids have the general formula RCOOH.',
      'Citric acid is a typical dicarboxylic acid.',
      'Propanedioic acid is the simplest dicarboxylic acid.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Carboxylic acids are organic compounds characterized by the carboxyl functional group (-COOH) attached to an alkyl or aryl group, represented by the general formula RCOOH. (Citric acid is a tricarboxylic acid; oxalic acid / ethanedioic acid is the simplest dicarboxylic acid).

🇪🇹 አማርኛ (Amharic):
ካርቦክሲሊክ አሲዶች የካርቦክሲል ፈንክሽናል ግሩፕ (-COOH) ያላቸው የኦርጋኒክ ውህዶች ሲሆኑ አጠቃላይ ቀመራቸው RCOOH ነው።

🌳 Afaan Oromoo:
Asidoonni kaarbokiisiliikii garee hojii kaarbooksiilii (-COOH) kan qaban yoo ta'u, foormulaan waliigalaa isaanii RCOOH dha.`,
    hint: 'Carboxylic acids contain the -COOH group and conform to the general formula RCOOH.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q44',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Organic Chemistry: IUPAC Nomenclature of Carboxylic Acids',
    questionText: '44. What is the IUPAC name for the branched carboxylic acid: CH3-CH(Cl)-CH(CH3)-CH(CH3)-COOH?',
    options: [
      '4-chloro-2-methyl-1-pentanoic acid',
      '1,2-dimethyl-4-chloro-1-pentanoic acid',
      '4-chloro-1-methyl-1-pentanoic acid',
      '4-chloro-2,3-dimethylpentanoic acid'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Numbering begins at the carboxylic acid carbon (C1):
C1: -COOH
C2: -CH(CH3)- (methyl group at position 2)
C3: -CH(CH3)- (methyl group at position 3)
C4: -CH(Cl)- (chloro substituent at position 4)
C5: -CH3 (terminal methyl)
The longest continuous carbon chain containing -COOH has 5 carbons (pentanoic acid). Arranging substituents in alphabetical order gives: 4-chloro-2,3-dimethylpentanoic acid.

🇪🇹 አማርኛ (Amharic):
የካርቦን ሰንሰለቱ መቆጠር የሚጀምረው ከካርቦክሲል ካርቦን (C1) ነው:
C1 = COOH, C2 = CH3, C3 = CH3, C4 = Cl, C5 = CH3።
የ 5 ካርቦን ሰንሰለት (pentanoic acid) ሲሆን ተቀጽላዎቹ በፊደል ቅደም ተከተል ሲቀመጡ 4-chloro-2,3-dimethylpentanoic acid ይሆናል።

🌳 Afaan Oromoo:
Lakkoofsi kaarboonii C1 kan ta'u kaarboonii COOH irraati. C2 fi C3 irratti meetiiliitu jira, C4 irratti kilooriitu jira. Maqaan seera IUPAC: 4-chloro-2,3-dimethylpentanoic acid ta'a.`,
    hint: 'Start numbering at C1 for the -COOH group: C4 has chlorine, C2 and C3 have methyl groups.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q45',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Organic Chemistry: Physical Properties of Esters',
    questionText: '45. Esters are characterized by the following properties EXCEPT',
    options: [
      'esters have lower boiling point compared to carboxylic acids and alcohols.',
      'esters have pleasant odors of perfumes and food flavoring.',
      'esters have higher boiling points than carboxylic acids and alcohols of comparable molar mass.',
      'all low molecular weight esters are soluble in organic solvents.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Esters lack a hydrogen atom directly bonded to oxygen (no O-H group), so they cannot form intermolecular hydrogen bonds with each other. Consequently, their boiling points are significantly LOWER than those of carboxylic acids and alcohols of comparable molar mass. Therefore, statement C is false.

🇪🇹 አማርኛ (Amharic):
ኤስተሮች (Esters) በሞለኪውሎቻቸው መካከል የሃይድሮጅን ቦንድ መፍጠር ስለማይችሉ የመፍላት ነጥባቸው ከአልኮል እና ከካርቦክሲሊክ አሲድ በእጅጉ ዝቅተኛ (lower) ነው እንጂ ከፍተኛ (higher) አይደለም።

🌳 Afaan Oromoo:
Estaroonni sababa hidhoo haayidiroojiinii of gidduutti uumuu hin dandeenyeef qabxiin danfinaa isaanii asidoota fi alkooloota wajjin wal-bira qabamee yoo ilaalamu gadi aanaadha malee ol'aanaa miti.`,
    hint: 'Esters cannot hydrogen bond with themselves, giving them lower boiling points than alcohols/acids.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q46',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Applied Chemistry: Verifying Sanitizer Concentration',
    questionText: '46. A hand sanitizer widely used for protection is labelled 83% alcohol. How can one scientifically verify this concentration?',
    options: [
      'Experimentation (laboratory chemical testing and density analysis)',
      'Forming hypothesis',
      'Making observation',
      'Collection of survey data'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
To quantitatively and scientifically verify the alcohol concentration of a commercial sanitizer, one must perform controlled laboratory experimentation (such as hydrometer alcoholometry, gas chromatography, or fractional distillation).

🇪🇹 አማርኛ (Amharic):
የሳኒታይዘርን የአልኮል ክምችት በሳይንሳዊ መንገድ በትክክል ለማረጋገጥ ላቦራቶሪ ውስጥ ሙከራ ማካሄድ (Experimentation) ያስፈልጋል።

🌳 Afaan Oromoo:
Qabiyyee fi heddumina alkoolii saaniitaayizarii saayinsiin mirkaneessuuf yaalii laaboraatorii (experimentation) gaggeessuun barbaachisaadha.`,
    hint: 'Empirical verification of chemical composition requires controlled laboratory experimentation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q47',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Atomic Structure: Electron Configuration of Chromium (Cr)',
    questionText: '47. The correct ground-state electronic configuration for chromium (Cr, Z = 24) is',
    options: [
      '1s2 2s2 2p6 3s2 3p6 4s0 3d6',
      '1s2 2s2 2p6 3s2 3p6 3d4 4d2',
      '1s2 2s2 2p6 3s2 3p6 4s2 3d4',
      '1s2 2s2 2p6 3s2 3p6 4s1 3d5'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Chromium (Z = 24) exhibits an anomalous electron configuration. An electron from the 4s orbital shifts to the 3d subshell to achieve a half-filled 3d5 subshell, which confers extra exchange energy and spherical stability: [Ar] 4s1 3d5.

🇪🇹 አማርኛ (Amharic):
ክሮሚየም (Cr, Z = 24) በግማሽ የተሞላ 3d5 ንዑስ ሼል (half-filled subshell) ልዩ መረጋጋት ስላለው፣ ትክክለኛው የኤሌክትሮን አወቃቀሩ 1s2 2s2 2p6 3s2 3p6 4s1 3d5 ነው።

🌳 Afaan Oromoo:
Kirooomiyeemiin (Cr, Z = 24) sababa sab-sheeliin 3d5 walakkaan guutamee tasgabbii addaa qabaatuuf qindoominni elektiroonii isaa 1s2 2s2 2p6 3s2 3p6 4s1 3d5 ta'a.`,
    hint: 'Half-filled 3d5 subshell gives extra stability, making Cr [Ar] 4s1 3d5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q48',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Atomic Structure: Hund\'s Rule of Maximum Multiplicity',
    questionText: '48. According to Hund’s rule, degenerate (equal energy) orbitals are filled with',
    options: [
      'maximum number of unpaired electrons with parallel spins.',
      'two electrons of opposite spins placed in the first orbitals.',
      'maximum number of unpaired electrons with opposite spins.',
      'two electrons of parallel spins placed in the first orbital.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Hund's Rule of Maximum Multiplicity states that when electrons enter degenerate orbitals (orbitals of equal energy), they occupy them singly with parallel spins first before any orbital is doubly occupied, minimizing electron-electron repulsion.

🇪🇹 አማርኛ (Amharic):
በሀንድስ ህግ (Hund's rule) መሰረት፣ እኩል ሀይል ያላቸው ኦርቢታሎች (degenerate orbitals) መጀመሪያ እያንዳንዱ ኦርቢታል በአንድ ኤሌክትሮን ከተመሳሳይ ስፒን (parallel spins) ጋር ይሞላል።

🌳 Afaan Oromoo:
Akka seera Hunditti, oorbiitaalota anniisaa wal-qixa qaban keessatti elektiroononni duraan dursee tokko tokkoon kallattii ispiinii walfakkaataadhaan (parallel spins) seenu.`,
    hint: 'Degenerate orbitals are singly occupied first with parallel spins to minimize repulsion.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q49',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Periodic Table: Structure of the Modern Periodic Table',
    questionText: '49. In the modern periodic table:',
    options: [
      'elements with similar properties are placed in the same period.',
      'non-metals are placed on the right side of the periodic table.',
      'transition and inner-transition elements are placed on the far left.',
      'metals are placed on the right hand side of the periodic table.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In the modern periodic table, metals are situated on the left and center, while non-metals are located exclusively on the upper right-hand side (in the p-block, plus hydrogen). Elements with similar chemical properties are placed in the same group (vertical column), not period.

🇪🇹 አማርኛ (Amharic):
በዘመናዊው የንጥረ ነገሮች ሠንጠረዥ (Periodic table) ውስጥ ብረታ-ብረት ያልሆኑ ንጥረ ነገሮች (non-metals) በስተቀኝ በኩል ይቀመጣሉ።

🌳 Afaan Oromoo:
Gabatee peeryoodikii ammayyaa keessatti wantoonni miti-sibiila (non-metals) ta'an gara mirgaatti argamu.`,
    hint: 'Non-metals reside in the upper right corner of the periodic table (p-block).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q50',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Electrochemistry: Electrolysis of Molten Sodium Chloride (Downs Process)',
    questionText: '50. Which of the following statements is true about the electrolysis of molten sodium chloride (NaCl)?',
    options: [
      'Na is oxidized at the anode.',
      'Cl2 is formed at the cathode.',
      'O2 is produced at the anode due to the oxidation of water.',
      'The net reaction produces Cl2 gas at the anode and liquid Na at the cathode.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In molten NaCl electrolysis (no water present):
- Anode (Oxidation): 2Cl-(l) -> Cl2(g) + 2e- (Chlorine gas formed at anode)
- Cathode (Reduction): 2Na+(l) + 2e- -> 2Na(l) (Molten sodium metal formed at cathode)
- Overall reaction: 2NaCl(l) -> 2Na(l) + Cl2(g).

🇪🇹 አማርኛ (Amharic):
በቀለጠ NaCl ኤሌክትሮሊሲስ ወቅት ውሃ ባለመኖሩ:
- በአኖድ ላይ ክሎሪን ጋዝ (Cl2) ይፈጠራል (oxidation)
- በካቶድ ላይ ደግሞ የሶዲየም ብረት (Na) ይፈጠራል (reduction)
ስለዚህ አጠቃላይ ግብረ-መልሱ ክሎሪን በአኖድ እና ሶዲየም በካቶድ ያመነጫል።

🌳 Afaan Oromoo:
Elektiroolisiisii NaCl baqe keessatti: Anoodii irratti gaasii kilooriinii (Cl2) oomisha, Kaasoodii irratti immoo sibiila soodiyeemii (Na) oomisha.`,
    hint: 'Molten NaCl yields chlorine gas at the anode and sodium metal at the cathode.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q51',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Equilibrium: Common Ion Effect on Weak Base',
    questionText: '51. In a reaction mixture containing NH4OH and NH4Cl: NH4OH <=> NH4+ + OH- and NH4Cl -> NH4+ + Cl-. Which of the following is true about this mixture?',
    options: [
      'The presence of NH4+ ion suppresses the dissociation of the weak base NH4OH.',
      'The NH4+ ion is a spectator ion in the reaction mixture.',
      'The reaction equilibrium is shifted towards the right due to the presence of NH4+ ions.',
      'The presence of NH4+ in the reaction mixture makes the solution more basic.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Due to the Common Ion Effect and Le-Chatelier's principle, the addition of NH4+ ions from the fully dissolved salt NH4Cl shifts the equilibrium of the weak base NH4OH to the left, suppressing its ionization and lowering the OH- concentration.

🇪🇹 አማርኛ (Amharic):
በጋራ አዮን ተጽዕኖ (Common Ion Effect) ምክንያት፣ ከ NH4Cl የሚመጣው የ NH4+ አዮን የደካማውን ቤዝ NH4OH መከፋፈል ወደ ኋላ በመመለስ የ OH- ክምችትን ይቀንሳል (suppresses dissociation)።

🌳 Afaan Oromoo:
Dhiibbaa 'Common Ion Effect'tiin, ayooniin NH4+ kan soogidda NH4Cl irraa dhufe madaallii beezii laafaa NH4OH gara bitaatti deebisuun bittinaa\'uu isaa gadi buusa.`,
    hint: 'Adding the common ion NH4+ shifts the equilibrium left, suppressing ionization of NH4OH.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q52',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Acid-Base Equilibria: Temperature Dependence of Kw',
    questionText: '52. The autoionization constant of water is Kw = 1.0 × 10^-14 at 25 °C and Kw = 2.92 × 10^-14 at 40 °C. Which statement is correct?',
    options: [
      'At 40 °C pure water is no longer neutral.',
      'Water dissociates to a higher extent at 40 °C than at 25 °C.',
      'Hydroxyl ion concentration is higher than hydrogen ion concentration at 40 °C.',
      'Hydrogen ion concentration at 25 °C is higher than at 40 °C.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Autoionization of water (2H2O ⇌ H3O+ + OH-) is an endothermic process (ΔH > 0). Increasing temperature shifts equilibrium to the right, increasing the value of Kw and causing water to dissociate to a greater extent at 40 °C than at 25 °C (in pure water, [H3O+] = [OH-] remains true, so it remains neutral).

🇪🇹 አማርኛ (Amharic):
የውሃ ራስን በራስ አዮናይዝ የማድረግ ሂደት ሙቀት ወሳጅ (endothermic) በመሆኑ፣ የሙቀት መጠን ከ 25 °C ወደ 40 °C ሲጨምር የ Kw ዋጋ ይጨምራል፤ ይህም ውሃ በ 40 °C ላይ በከፍተኛ ደረጃ እንደሚከፋፈል (dissociates to a higher extent) ያሳያል።

🌳 Afaan Oromoo:
Ofiin-ayoonayizeeshiniin bishaanii adeemsa ho'a fudhatu (endothermic) waan ta'eef, teempireecharri dabaluun Kw dabala, kunis bishaan 40 °C irratti 25 °C caalaa akka baqaqu/ayoonayu agarsiisa.`,
    hint: 'Endothermic autoionization of water shifts right at higher temperatures, increasing Kw.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q53',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Redox Reactions: Definition of Reduction',
    questionText: '53. What is reduction in chemical reactions? Reduction is',
    options: [
      'loss of electrons and decrease in oxidation number.',
      'gain of electrons and increase in oxidation number.',
      'gain of electrons and no change in oxidation number.',
      'gain of electrons and decrease in oxidation number.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Reduction is fundamentally defined as the gain of electrons by a chemical species, which causes a decrease (reduction) in its oxidation number (OIL RIG: Oxidation Is Loss, Reduction Is Gain).

🇪🇹 አማርኛ (Amharic):
ሪደክሽን (Reduction) ማለት ኤሌክትሮኖችን መውሰድ/መቀበል (gain of electrons) እና የኦክሲዴሽን ቁጥር መቀነስ (decrease in oxidation number) ነው።

🌳 Afaan Oromoo:
Ridaakshiiniin elektiroonota fudhachuu fi lakkoofsa oksideeshinii gadi hir'isuudha.`,
    hint: 'Reduction Is Gain of electrons (RIG), which decreases the oxidation state.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q54',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Electrochemistry: Electrolysis of Dilute Sulfuric Acid',
    questionText: '54. During the electrolysis of dilute aqueous sulfuric acid (H2SO4), which ions are preferentially discharged at the cathode and anode, respectively?',
    options: [
      'Cathode: SO4^2- + 4H+ + 2e- -> SO2 + 2H2O; Anode: 2H+ + 2e- -> H2',
      'Cathode: 2H2O + 2e- -> H2 + 2OH-; Anode: 2SO4^2- -> S2O8^2- + 2e-',
      'Cathode: 2H+(aq) + 2e- -> H2(g); Anode: 4OH-(aq) -> 2H2O(l) + O2(g) + 4e-',
      'Cathode: SO4^2- oxidation; Anode: H+ reduction'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In dilute aqueous sulfuric acid:
- At the Cathode (Reduction): H+ ions are discharged to form hydrogen gas: 2H+(aq) + 2e- -> H2(g).
- At the Anode (Oxidation): OH- ions are oxidized preferentially over SO4^2- due to lower standard oxidation potential: 4OH-(aq) -> 2H2O(l) + O2(g) + 4e- (yielding O2 gas).

🇪🇹 አማርኛ (Amharic):
ቀጫጭን ሰልፈሪክ አሲድ (dilute H2SO4) በኤሌክትሮሊሲስ ሲከፋፈል:
- በካቶድ ላይ የ H+ አዮን ተቀንሶ የሃይድሮጅን ጋዝ ይፈጥራል: 2H+ + 2e- -> H2(g)
- በአኖድ ላይ የ OH- አዮን ኦክሳይድ ተደርጎ የኦክስጅን ጋዝ ይፈጥራል: 4OH- -> 2H2O + O2 + 4e-።

🌳 Afaan Oromoo:
Elektiroolisiisii asidii salfariikii keessatti: Kaasoodii irratti H+'n gaasii haayidiroojiinii (H2) uuma; Anoodii irratti immoo OH-'n oksidaayizii ta'ee gaasii O2 uuma.`,
    hint: 'Dilute H2SO4 electrolysis effectively decomposes water into H2 at the cathode and O2 at the anode.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q55',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Electrochemistry: Cell Potential and Spontaneity',
    questionText: '55. Which one of the following is NOT correct about electrodes and electrochemical cells?',
    options: [
      'The overall standard cell potential is calculated by E°cell = E°cathode - E°anode.',
      'Electrons flow spontaneously from negative anode to positive cathode through the external circuit.',
      'The difference in electrical potential of the electrodes is positive for a galvanic cell.',
      'E°cell is greater than zero for a non-spontaneous process.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
For a thermodynamically spontaneous reaction (Galvanic cell), the standard cell potential is POSITIVE (E°cell > 0, corresponding to ΔG° < 0). For a non-spontaneous process (electrolytic cell), E°cell is negative (E°cell < 0). Therefore statement D is incorrect.

🇪🇹 አማርኛ (Amharic):
ራስ-አበረታች ላልሆነ (non-spontaneous) ግብረ-መልስ የሴል ፖቴንሻል E°cell ከዜሮ በታች (አሉታዊ/negative) መሆን አለበት። ስለዚህ E°cell > 0 ለ non-spontaneous ሂደት ነው የሚለው አረፍተ-ነገር የተሳሳተ ነው።

🌳 Afaan Oromoo:
Re'aakshinii ofiin hin raawwatamneef (non-spontaneous) voolteejii seelii E°cell < 0 (negative) ta'uu qaba malee E°cell > 0 hin ta'u.`,
    hint: 'Spontaneous reactions have positive E°cell (> 0); non-spontaneous reactions have negative E°cell (< 0).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q56',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Solutions: Like Dissolves Like Principle',
    questionText: '56. The “like dissolves like” rule accounts for which of the following observations?',
    options: [
      'The solubility of C2H6 in H2O.',
      'The solubility of C6H6 (benzene) in CCl4 (carbon tetrachloride).',
      'The insolubility of I2 in H2O.',
      'The solubility of KBr in C7H8.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The "like dissolves like" principle states that non-polar solutes dissolve in non-polar solvents, and polar/ionic solutes dissolve in polar solvents. Benzene (C6H6) is non-polar and readily dissolves in carbon tetrachloride (CCl4), which is also non-polar.

🇪🇹 አማርኛ (Amharic):
"Like dissolves like" በሚለው መርህ መሰረት፣ ፖላር ያልሆነ ሟሚ በፖላር ባልሆነ ሟሟ ውስጥ ይሟሟል። ቤንዚን (C6H6) ፖላር ያልሆነ በመሆኑ በ CCl4 (ፖላር ባልሆነ ሟሟ) ውስጥ በቀላሉ ይሟሟል።

🌳 Afaan Oromoo:
Seerri "Like dissolves like" jedhu wantoonni nooni-poolaarii ta'an dhangala'aa nooni-poolaarii keessatti bulbulamu jedha. Beenziiniin (C6H6) nooni-poolaarii waan ta'eef CCl4 keessatti sirritti bulbulama.`,
    hint: 'Non-polar benzene (C6H6) dissolves readily in non-polar carbon tetrachloride (CCl4).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q57',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Solutions: Concentration Units Definitions',
    questionText: '57. Which of the following concentration units is CORRECTLY defined?',
    options: [
      'ppm = (mass of solute / mass of solvent) × 10^6',
      'mass percentage = (mass of solute / mass of solvent) × 100',
      'mass percentage = (mass of solute / mass of solution) × 100',
      'ppb = (mass of solute / mass of solution) × 10^6'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Mass percentage is correctly defined as the mass of the solute divided by the total mass of the solution (solute + solvent), multiplied by 100: Mass % = (mass of solute / mass of solution) × 100.

🇪🇹 አማርኛ (Amharic):
የክብደት ፐርሰንት (Mass percentage) ትክክለኛ ቀመር: (የሟሚው ክብደት / የመላው መፍትሄው ክብደት) × 100 ነው።

🌳 Afaan Oromoo:
Hangi dhibbeentaa (Mass percentage) sirritti kan ibsamu: (hanga soliyuutii / hanga bulbulaa waliigalaa) × 100 dha.`,
    hint: 'Mass percentage is always solute mass divided by TOTAL solution mass times 100.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q58',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Solutions: Concentration Conversions of Concentrated H2SO4',
    questionText: '58. Concentrated sulfuric acid (H2SO4) in the laboratory is 98% H2SO4 by mass with a density of 1.83 g/mL. Which option correctly gives its Molarity, Normality, and Mole fraction?',
    options: [
      'Molarity: 36.6 M, Normality: 18.3 N, Mole fraction: 0.1',
      'Molarity: 18.3 M, Normality: 36.6 N, Mole fraction: 0.9',
      'Molarity: 1.83 M, Normality: 3.66 N, Mole fraction: 0.9',
      'Molarity: 18.3 M, Normality: 3.66 N, Mole fraction: 0.9'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
1. Molarity = (10 × % × density) / Molar Mass = (10 × 98 × 1.83) / 98.08 = 18.28 M ≈ 18.3 M.
2. Normality = Molarity × n (for diprotic H2SO4, n = 2) = 18.3 M × 2 = 36.6 N.
3. In 100 g solution: 98 g H2SO4 (1.00 mol) and 2 g H2O (0.111 mol).
Mole fraction X_H2SO4 = 1.00 / (1.00 + 0.111) = 0.90.

🇪🇹 አማርኛ (Amharic):
1. ሞላሪቲ M = (10 × 98 × 1.83) / 98.08 = 18.3 M።
2. ኖርማሊቲ N = 18.3 × 2 = 36.6 N (ዳይፕሮቲክ ስለሆነ)።
3. የሞል ፍራክሽን X = 0.90። ስለዚህ መልሱ B ነው።

🌳 Afaan Oromoo:
Moolaaritiin H2SO4 = (10 × 98 × 1.83) / 98 = 18.3 M.
Normaalitiin = 18.3 × 2 = 36.6 N.
Mool firaakshiniin immoo 0.90 ta'a.`,
    hint: 'M = (10 × % × d) / MW = 18.3 M; for diprotic H2SO4, Normality = 2 × M = 36.6 N.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q59',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Solutions: Preparation of Standard Normal Solutions',
    questionText: '59. How do you prepare a 1 N Ca(OH)2 solution? (Molar mass: Ca = 40, H = 1, O = 16)',
    options: [
      'By dissolving 74 g of Ca(OH)2 in 500 mL of solution.',
      'By dissolving 37 g of Ca(OH)2 in 1 liter of solution.',
      'By dissolving 37 g of Ca(OH)2 in 500 mL of solution.',
      'By dissolving 74 g of Ca(OH)2 in 1 liter of solution.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Molar mass of Ca(OH)2 = 40 + 2(16 + 1) = 74 g/mol.
Since each mole of Ca(OH)2 yields 2 moles of OH- (n = 2), its Equivalent Weight = Molar Mass / 2 = 74 / 2 = 37 g/equivalent.
A 1 N solution contains 1 equivalent (37 g) dissolved in 1 liter of total solution.

🇪🇹 አማርኛ (Amharic):
የ Ca(OH)2 ሞላር ክብደት 74 g/mol ሲሆን 2 OH- ስለሚሰጥ ተመጣጣኝ ክብደቱ 74 / 2 = 37 g/equivalent ነው። 1 N መፍትሄ ለማዘጋጀት 37 ግራም Ca(OH)2 በ 1 ሊትር ውሃ ውስጥ መሟሟት አለበት።

🌳 Afaan Oromoo:
Ulfaatinni molakiyuulaa Ca(OH)2 = 74 g/mol dha. OH- lama waan qabuuf ekwivalent weeyitiin isaa 37 g/eq ta'a. Bulbula 1 N qopheessuuf 37 g Ca(OH)2 liitira 1 keessatti bulbulama.`,
    hint: 'Equivalent weight of Ca(OH)2 is 74 / 2 = 37 g. Dissolve 37 g in 1 L to obtain a 1 N solution.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q60',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Acid-Base Equilibria: Percent Ionization Calculation',
    questionText: '60. The Ka of acetic acid (CH3COOH) is 1.8 × 10^-5. What is the percent ionization of a 1 M CH3COOH solution?',
    options: [
      '1.42%',
      '3.60%',
      '0.42%',
      '1.34%'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
For weak acid dissociation: [H3O+] = square root of (Ka × [HA]0) = square root of (1.8 × 10^-5 × 1.0) = square root of (18 × 10^-6) = 4.24 × 10^-3 M.
Percent Ionization = ([H3O+] / [HA]0) × 100% = (4.24 × 10^-3 M / 1.0 M) × 100% = 0.424% ≈ 0.42%.

🇪🇹 አማርኛ (Amharic):
የደካማ አሲድ [H+] = square root(Ka × C) = square root(1.8 × 10^-5 × 1) = 4.24 × 10^-3 M።
የመከፋፈል ፐርሰንት (Percent ionization) = ([H+] / C) × 100 = (4.24 × 10^-3 / 1) × 100 = 0.42% ይሆናል።

🌳 Afaan Oromoo:
[H+] = square root(Ka × C) = square root(1.8 × 10^-5 × 1) = 4.24 × 10^-3 M.
Dhibbeentaan ayoonaayizeeshinii = ([H+] / C) × 100 = 0.42% ta'a.`,
    hint: '[H+] = sqrt(Ka × C) = 4.24 × 10^-3 M; percent ionization = ([H+] / 1.0) × 100 = 0.42%.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  }
];
