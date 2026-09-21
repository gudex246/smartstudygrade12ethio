import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2017_EC_PART4: Question[] = [
  {
    id: 'bio-2017-q76',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Cellular Respiration: Aerobic vs Anaerobic Respiration Energy Yield',
    questionText: '76. What is the fundamental energetic difference between Aerobic cellular respiration and Anaerobic fermentation?',
    options: [
      'Aerobic respiration ends with different products while anaerobic produces identical products.',
      'Proteins are the only respiratory substrate utilized in both pathways.',
      'Aerobic cellular respiration produces vastly more energy (30–32 ATP per glucose) through complete oxidation than anaerobic respiration (only 2 ATP per glucose).',
      'Glycolysis is the initial pathway for aerobic respiration, while the Krebs cycle is the starting step for anaerobic fermentation.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Aerobic respiration fully oxidizes glucose into $CO_2$ and $H_2O$ through the Krebs cycle and oxidative phosphorylation, yielding ~30–32 ATP per glucose. Anaerobic respiration/fermentation stops at glycolysis with incomplete oxidation, yielding only a net of 2 ATP per glucose.

🇪🇹 አማርኛ (Amharic):
ኤሮቢክ (ኦክስጅን የሚጠቀም) አተነፋፈስ ግሉኮስን ሙሉ በሙሉ በማቃጠል እጅግ ከፍተኛ የሆነ ጉልበት (ከ 30 እስከ 32 ATP) ሲያመነጭ፤ አናኤሮቢክ (ያለ ኦክስጅን) ግን 2 ATP ብቻ ያመርታል።

🌳 Afaan Oromoo:
Hargansuun oksijiinii fayyadamu (Aerobic) anniisaa guddaa (ATP 30-32) kan kennu yoo ta\'u; kan oksijiinii hin fayyadamne (Anaerobic) immoo ATP 2 qofa kenna.`,
    hint: 'Aerobic respiration produces 30–32 ATP per glucose compared to only 2 ATP in anaerobic fermentation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q77',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Origin of Life: Disproving Spontaneous Generation (Biogenesis)',
    questionText: '77. Which scientific principle, conclusively demonstrated by Louis Pasteur\'s swan-neck flask experiments and Francesco Redi\'s meat jars, disproved the ancient Theory of Spontaneous Generation (Abiogenesis)?',
    options: [
      'Life is an inherent permanent property of the cosmos.',
      'Diverse biological organisms were created simultaneously in six literal days.',
      'All living organisms (both macroscopic animals and microscopic microbes) arise only from pre-existing living organisms through reproduction (*Biogenesis / Omne vivum ex vivo*).',
      'Life arrived on Earth encapsulated inside meteoric cosmic dust particles.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Louis Pasteur's sterile swan-neck flask experiments decisively disproved Spontaneous Generation (the idea that life emerges spontaneously from non-living matter). He proved the Law of Biogenesis: living organisms arise only from preexisting living cells and microorganisms (*Omne vivum ex vivo*).

🇪🇹 አማርኛ (Amharic):
ስፖንታኒየስ ጄነሬሽንን (ህይወት ከኢ-ህይወታዊ ነገር በድንገት ይፈጠራል የሚለውን የተሳሳተ እምነት) ውድቅ ያደረገው ሳይንሳዊ መርህ፡ ሁሉም ህይወት ያላቸው ነገሮች አስቀድመው ከነበሩ ህይወት ካላቸው ፍጥረታት ብቻ ይገኛሉ (Biogenesis) የሚለው ነው።

🌳 Afaan Oromoo:
Yaada \'Spontaneous generation\' kan kuffise: Lubbu-qabeeyyiin hundi lubbu-qabeeyyii duraan turan irraa qofa dhalatu (\'Biogenesis\') kan jedhudha.`,
    hint: 'Biogenesis proves that all living organisms arise only from pre-existing living cells.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q78',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Evolutionary Biology: Molecular Evidence of Primate Relatedness',
    questionText: '78. Based on molecular biology and comparative biochemical analysis, chimpanzees are established as the closest living evolutionary relatives to modern humans because of:',
    options: [
      'Haemoglobin amino acid differences in aquatic organisms',
      'Identical fossil mineral formations',
      'Extreme similarity in their genomic DNA sequence (greater than 98.5% identical sequence homology)',
      'Shared pentadactyl limb structures with amphibians'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Comparative genomics demonstrates that humans and chimpanzees (*Pan troglodytes*) share over 98.5% identical genomic DNA sequence homology, identical cytochrome c amino acid sequences, and nearly identical hemoglobin chains, providing conclusive molecular evidence of a recent common ancestor.

🇪🇹 አማርኛ (Amharic):
በሞለኪውላር ባዮሎጂ እና በዲ ኤን ኤ ቅደም ተከተል (DNA sequence) ጥናት መሰረት ቺምፓንዚዎች ከሰው ልጅ ጋር ከ 98.5% በላይ ተመሳሳይ የዲ ኤን ኤ ቅደም ተከተል ስላላቸው የቅርብ የዝምድና ተጋሪ ናቸው።

🌳 Afaan Oromoo:
Qorannoo saayinsii \'DNA sequence\'tiin \'Chimpanzee\'n dhibbeentaa 98.5% ol walfakkeenya DNA namaa wajjin qabaachuun fira dhihoo namaati.`,
    hint: 'Chimpanzees share >98.5% DNA sequence homology with humans, proving close evolutionary kinship.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q79',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Speciation & Plant Evolution: Polyploidy in Plant Speciation',
    questionText: '79. Which evolutionary and chromosomal mechanism commonly allows sterile, infertile interspecific plant hybrids to instantaneously double their chromosomes and become fertile new species (Allopolyploidy)?',
    options: [
      'Reproductive behavioral isolation',
      'Gradual ecological sympatric speciation without chromosomal changes',
      'Polyploidy (Allopolyploidy through non-disjunction and genome duplication)',
      'Geographical allopatric separation by physical barriers'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Interspecific plant hybrids are usually sterile because their chromosomes cannot form homologous bivalent pairs during Meiosis I. Polyploidy (specifically allopolyploidy, where chromosome doubling occurs via meiotic non-disjunction) provides homologous matching pairs for every chromosome, instantaneously restoring hybrid fertility and establishing a new species.

🇪🇹 አማርኛ (Amharic):
በእፅዋት ውስጥ መካን የነበሩ የተዳቀሉ ዝርያዎች የክሮሞዞም ቁጥራቸውን በእጥፍ በመጨመር የመዋለድ አቅም እንዲኖራቸው እና አዲስ ዝርያ እንዲፈጥሩ የሚያስችለው ፖሊፕሎይዲ (Polyploidy) ይባላል።

🌳 Afaan Oromoo:
Biqiltoonni wal-makan kuroomoosoomii isaanii dachaa gochuudhaan sanyii haaraa hormaata danda\'u kan uuman \'Polyploidy\' dhaani.`,
    hint: 'Polyploidy doubles chromosomes, restoring meiosis and fertility in sterile plant hybrids.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q80',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Human Evolution: Chronological Sequence of Hominid Milestones',
    questionText: '80. Consider the following key evolutionary milestones in hominid evolutionary history:\n1. Controlled use of fire and stone Acheulean tool manufacturing\n2. Substantial expansion and encephalization in cranial brain volume\n3. Emergence of anatomically modern humans (*Homo sapiens*)\n4. Obligate bipedal locomotion and upright walking on two legs\n\nWhich of the following represents the correct chronological timeline order from earliest to most recent?',
    options: [
      '2, 1, 3, 4',
      '1, 3, 4, 2',
      '3, 2, 4, 1',
      '4 (Bipedal walking) -> 2 (Brain size increase) -> 1 (Use of fire and tools) -> 3 (Emergence of *Homo sapiens*)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Chronological Hominid Timeline:
1. Bipedalism (4): Evolved early in *Australopithecus* (~4.2–3.5 mya) before significant brain enlargement.
2. Brain Expansion (2): Accelerated in *Homo habilis* and *Homo erectus* (~2.0–1.5 mya).
3. Fire & Tools (1): Mastered by *Homo erectus* (~1.5–0.5 mya).
4. Anatomically Modern *Homo sapiens* (3): Emerged in East Africa ~300,000–200,000 years ago.
Correct Sequence: 4 -> 2 -> 1 -> 3.

🇪🇹 አማርኛ (Amharic):
የሰው ልጅ የዝግመተ-ለውጥ ትክክለኛ የጊዜ ቅደም ተከተል፡
4. በሁለት እግር መቆምና መራመድ (Bipedal walking) $\\rightarrow$
2. የአእምሮ መጠን መጨመር (Brain enlargement) $\\rightarrow$
1. የእሳት እና የመሳሪያዎች አጠቃቀም $\\rightarrow$
3. የሆሞ ሳፒያንስ (ዘመናዊ ሰው) መፈጠር ነው። (4, 2, 1, 3)

🌳 Afaan Oromoo:
Tartiibni sirrii jijjiirama namaa: 4 (Luka lamaan deemuu) -> 2 (Sammuun guddachuu) -> 1 (Abiddaa fi meeshaa fayyadamuu) -> 3 (\'Homo sapiens\' mul\'achuu) dha.`,
    hint: 'Bipedal walking occurred first, followed by cranial expansion, fire/tools, and Homo sapiens.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q81',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Genetics: Point Mutation Types (Base Substitution)',
    questionText: '81. A diagram illustrates a mutation in a coding nucleotide triplet sequence:\nOriginal sequence: GAC GGG ATT GAG GAG (Asp - Gly - Ile - Glu - Glu)\nMutated sequence: GAC GGG ATG GAG GAG (Asp - Gly - Met - Glu - Glu)\n\nWhich type of gene mutation occurred in this nucleotide sequence?',
    options: [
      'Base Deletion',
      'Chromosomal Inversion',
      'Base Insertion / Addition',
      'Base Substitution (Single Nucleotide Transition from T to G)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In the third codon, the single base 'T' in ATT was replaced/substituted with 'G' to become ATG, changing the codon from Isoleucine to Methionine without altering reading frame length. This is a Base Substitution (Point Mutation / Missense mutation). *(Note: If indexed as deletion/substitution in standard text, base substitution describes the one-for-one exchange).*

🇪🇹 አማርኛ (Amharic):
በሶስተኛው ኮዶን ላይ የነበረው ATT ወደ ATG ሲቀየር ታይሚን (T) በጓኒን (G) ስለተተካ ይህ የውህድ መተካት ወይም ሰብስቲትዩሽን (Base Substitution) ይባላል።

🌳 Afaan Oromoo:
Koodonii sadaffaa irratti \'ATT\'n gara \'ATG\'tti jijjiiramuun \'T\'n bakka \'G\'ti bu\'uun \'Base substitution\' jedhama.`,
    hint: 'Replacing one nucleotide base with another is a Base Substitution mutation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q82',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Genetics: Environmental Mutagens vs Normal Physiology',
    questionText: '82. Which of the following is NOT a recognized environmental mutagen or cause of genetic mutations?',
    options: [
      'Exposure to high-energy Ultra-Violet (UV) solar radiation',
      'Uncorrected spontaneous enzymatic errors during DNA replication',
      'Extensive routine physical aerobic exercise',
      'Exposure to mutagenic alkylating chemical substances (e.g., benzene, tobacco nitrosamines)'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Mutagens are physical or chemical agents that alter DNA sequences (e.g., ionizing/UV radiation, reactive oxygen species, mutagenic chemicals, replication slippage). Routine physical exercise is a healthy physiological activity that does NOT cause genetic mutations.

🇪🇹 አማርኛ (Amharic):
የዘረ-መል ሚውቴሽን (Genetic mutation) የማያመጣው መደበኛ የአካል ብቃት እንቅስቃሴ (Physical exercise) ማድረግ ነው። የፀሐይ ጨረርና ኬሚካሎች ሚውቴሽን ያመጣሉ።

🌳 Afaan Oromoo:
Kanneen keessaa wanti jijjiirama dhaala sanyiitiif (mutation) sababa hin taane sochii qaamaa (physical exercise) hojjechuudha.`,
    hint: 'Physical exercise does not cause genetic mutations; radiation and chemicals are mutagens.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q83',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Population Genetics: Genetic Drift in Bottleneck and Founder Effects',
    questionText: '83. Which fundamental population genetics mechanism is common to BOTH the Population Bottleneck Effect and the Founder Effect?',
    options: [
      'Extremely high mutation rates that rapidly enhance evolutionary adaptation',
      'Genetic Drift acting on small populations, drastically reducing overall genetic diversity and altering allele frequencies by random sampling chance',
      'Massive gene flow and outbreeding that increases disease resistance',
      'Gradual natural selection over millions of generations'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Both the Bottleneck Effect (drastic population reduction from a disaster) and the Founder Effect (colonization of a new area by a few individuals) involve Genetic Drift acting in very small populations, causing random loss of rare alleles, reduced genetic diversity, and non-adaptive shifts in allele frequencies.

🇪🇹 አማርኛ (Amharic):
በቦትልኔክ ኢፌክት (Bottleneck effect) እና በፋውንደር ኢፌክት (Founder effect) መካከል ያለው የጋራ ክስተት፡ የህዝብ ቁጥር ሲያንስ በዘፈቀደ የዘረ-መል መጥፋትን የሚያመጣው ጀነቲክ ድሪፍት (Genetic drift) ነው።

🌳 Afaan Oromoo:
\'Bottleneck\' fi \'Founder effect\' lamaanuu \'Genetic drift\' baay\'ina uummata xiqqaate keessatti garaagarummaa jiinii (diversity) akka hir\'atu godhu.`,
    hint: 'Both founder and bottleneck effects are forms of genetic drift that reduce genetic diversity.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q84',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Population Genetics: Gene Flow and Immigration into Isolated Populations',
    questionText: '84. If a population of black lions migrates from the mainland territory and immigrates into an isolated island inhabited only by white lions to interbreed, what is the direct population genetic outcome?',
    options: [
      'A permanent decrease in the black lion gene pool on the isolated island',
      'Genetic variation in the mainland population strictly due to immigration',
      'Gene Flow: The introduction and integration of new alleles into the isolated island lion population, altering island gene frequencies',
      'Allele frequencies change only on the mainland and remain completely frozen on the island'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Immigration of individuals carrying distinct alleles into an isolated population followed by interbreeding represents **Gene Flow (Gene Migration)**. This introduces new novel alleles into the recipient island gene pool, increasing genetic variation and changing allele frequencies.

🇪🇹 አማርኛ (Amharic):
አዳዲስ አንበሶች ከዋናው ምድር ወደ ገለልተኛ ደሴት በመሄድ ከተዳቀሉ ጂን ፍሰት (Gene Flow) ይፈጠራል፤ ይህም ወደ ደሴቱ አዳዲስ አሌሎችንና ዘረ-መሎችን ያስገባል።

🌳 Afaan Oromoo:
Leenci dachee gurguddoo irraa gara odolaatti godaanuun wal-hormaata yoo raawwate \'Gene Flow\' uumuun jiinota haaraa gara odolichaatti galcha.`,
    hint: 'Immigration and interbreeding introduce new alleles through Gene Flow.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q85',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Conservation Biology: Anthropogenic Drivers of Species Extinction',
    questionText: '85. Which of the following is an Anthropogenic (human-induced) direct driver contributing to global biodiversity loss and species extinction?',
    options: [
      'Tectonic earthquake tremors',
      'Submarine volcanic eruptions',
      'Large-scale expansion of agricultural deforestation and habitat destruction',
      'Naturally occurring lightning-induced wildfires'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
"Anthropogenic" refers to factors originating from human activity. The expansion of industrial agriculture, clear-cutting forests, and urbanization is the number one human-driven cause of global habitat destruction and modern species extinctions.

🇪🇹 አማርኛ (Amharic):
በሰው ሰራሽ ምክንያት (Anthropogenic) ለዝርያዎች መጥፋት ዋነኛ መንስኤ የሆነው፡ የግብርና መስፋፋት (Expansions of agriculture) እና የደን መጨፍጨፍ ነው።

🌳 Afaan Oromoo:
Sababoota namaan dhufan (Anthropogenic) kan lubbu-qabeeyyii dhabamsiisan keessaa: Qonna babal\'isuuf bosona ciruu dha.`,
    hint: 'Agricultural expansion is a major human-induced (anthropogenic) driver of habitat loss.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q86',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Nervous System: Core Functions of the Nervous System',
    questionText: '86. Which one of the following statements correctly describes the fundamental physiological function of the human Nervous System?',
    options: [
      'It moves air in and out of thoracic cavities to supply oxygen and eliminate carbon dioxide.',
      'It uses muscular vessels to propel liquid blood continuously throughout the body.',
      'It consists exclusively of exocrine cells that secrete digestive fluids via ducts.',
      'It detects, receives, coordinates, and processes sensory information from internal and external environments and orchestrates rapid muscular and glandular responses.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The nervous system is the primary electrical communication and control network of the body. Sensory receptors gather internal and external stimuli, the central nervous system (brain and spinal cord) integrates and processes the information, and motor efferents trigger rapid responses via muscles and glands.

🇪🇹 አማርኛ (Amharic):
የነርቭ ስርዓት (Nervous system) ዋነኛ ተግባር፡ ከውስጥና ከውጭ አካባቢ የሚመጡ መረጃዎችን መቀበል፣ ማቀናበር (process ማድረግ) እና ፈጣን ምላሽ መስጠት ነው።

🌳 Afaan Oromoo:
Hojiin bu\'uuraa sirna narvii: Odeeffannoo naannoo keessaa fi alaa fudhachuu, qindeessuu fi qaamaaf deebii saffisaa kennuudha.`,
    hint: 'The nervous system detects, processes sensory information, and coordinates rapid responses.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q87',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Neurophysiology: Voltage-Gated Channels and Action Potentials',
    questionText: '87. What is the precise physiological mechanism of voltage-gated ion channels ($Na^+ / K^+$) in generating and transmitting nerve action potentials?',
    options: [
      'They open actively in response to membrane potential voltage changes, allowing rapid influx of sodium ions ($Na^+$) leading to membrane depolarization.',
      'They permanently seal the axonal membrane against all ionic flow to preserve resting potential.',
      'They pump potassium ions inward to initiate instantaneous repolarization before threshold.',
      'They hydrolyze ATP directly to transport sodium across Schwann cells.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
When an axon membrane is depolarized to its threshold voltage (~-55mV), voltage-gated $Na^+$ channels undergo a conformational shift and open rapidly. Sodium ions ($Na^+$) rush down their electrochemical gradient into the axoplasm, causing rapid depolarization and initiating an all-or-none action potential.

🇪🇹 አማርኛ (Amharic):
ቮልቴጅ-ጌትድ ቻናሎች (Voltage-gated channels) በሜምብሬን የቮልቴጅ ለውጥ አማካኝነት ተከፍተው ሶዲየም ($Na^+$) በፍጥነት ወደ ውስጥ እንዲገባ በማድረግ ዲፖላራይዜሽን (Depolarization) እና የነርቭ መልዕክት እንዲተላለፍ ያደርጋሉ።

🌳 Afaan Oromoo:
Ujummoolleen \'voltage-gated\' jijjiirama voolteesii hordofanii banamuun Soodiyeemiin ($Na^+$) akka seenu gochuun ergaan narvii akka darbu taasisan.`,
    hint: 'Voltage-gated sodium channels open upon threshold depolarization, causing rapid Na+ influx.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q88',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Neurophysiology: Synaptic Transmission and Calcium Ions ($Ca^{2+}$)',
    questionText: '88. Which inorganic ion plays the essential role at presynaptic axon terminals by triggering the exocytosis and release of neurotransmitter vesicles into the synaptic cleft?',
    options: [
      'Calcium ions ($Ca^{2+}$)',
      'Magnesium ions ($Mg^{2+}$)',
      'Potassium ions ($K^+$)',
      'Chloride ions ($Cl^-$)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
When an action potential reaches the presynaptic knob, it triggers the opening of voltage-gated calcium channels. The influx of $Ca^{2+}$ ions causes synaptic vesicles to fuse with the presynaptic membrane (exocytosis), releasing neurotransmitters (e.g., acetylcholine) into the synaptic cleft.

🇪🇹 አማርኛ (Amharic):
የነርቭ መልዕክት አስተላላፊ ኬሚካሎች (Neurotransmitters) ከፕሪሲናፕቲክ ተርሚናል ወደ ሲናፕቲክ ክፍተት እንዲለቀቁ የሚያደርገው የካልሲየም አዮን ($Ca^{2+}$) ወደ ውስጥ መግባት ነው።

🌳 Afaan Oromoo:
Kemiikaalotni narvii (\'Neurotransmitters\') \'synaptic cleft\' keessatti akka gad-lakkifamaniif albuudni murteessaan \'Calcium\' ($Ca^{2+}$) dha.`,
    hint: 'Influx of Calcium ions (Ca2+) triggers exocytosis of neurotransmitter vesicles at the synapse.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q89',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Nervous System: Pathway of the Somatic Spinal Reflex Arc',
    questionText: '89. Which of the following represents the correct sequential neural pathway of a spinal withdrawal reflex arc when a person inadvertently touches a burning hot stove plate?',
    options: [
      'Interneuron -> Receptor -> Motor neuron -> Effector muscle',
      'Sensory neuron -> Motor neuron -> Spinal cord -> Effector',
      'Sensory Receptor/Neuron -> Spinal Cord Interneuron (CNS) -> Motor Neuron -> Effector Muscle',
      'Interneuron -> Spinal cord -> Sensory neuron -> Effector'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Reflex Arc Pathway:
1. Thermoreceptor / Nociceptor in skin detects heat.
2. Sensory (Afferent) Neuron conducts action potential to dorsal horn of spinal cord.
3. Relay (Interneuron) in spinal cord gray matter integrates signal.
4. Motor (Efferent) Neuron transmits impulse via ventral root to effector muscle.
5. Effector (Biceps muscle) contracts to withdraw hand.

🇪🇹 አማርኛ (Amharic):
የሪፍሌክስ አርክ (Reflex arc) ትክክለኛ ቅደም ተከተል፡
የስሜት ነርቭ (Sensory neuron) $\\rightarrow$ የአከርካሪ ህብለ-ሰረሰር (Spinal cord) $\\rightarrow$ ሞተር ነርቭ (Motor neuron) $\\rightarrow$ ምላሽ ሰጪ ጡንቻ (Effector) ነው።

🌳 Afaan Oromoo:
Tartiiba sirrii \'Reflex Arc\': Narvii Miiraa (Sensory) -> Handhura Dugdaa (Spinal cord) -> Narvii Sochii (Motor) -> Maashaa (Effector) dha.`,
    hint: 'Receptor/Sensory neuron -> Spinal cord (Interneuron) -> Motor neuron -> Effector muscle.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q90',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Sense Organs: Anatomy of the Eye and Pupil Regulation',
    questionText: '90. In the anatomical diagram of the human eye, which labeled structure (the pigmented circular and radial smooth muscle layer of the Iris) is responsible for adjusting the aperture diameter of the pupil in response to changing light intensity?',
    options: [
      'Part I (Sclera)',
      'Part II (Cornea)',
      'Part III (Lens)',
      'Part IV (Iris muscles)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Part IV represents the Iris. The iris contains circular (sphincter) and radial (dilator) smooth muscles that constrict or dilate the central aperture (the pupil) in response to light intensity (Pupillary Light Reflex).

🇪🇹 አማርኛ (Amharic):
በአይን ውስጥ የብርሃን መጠንን ለማስተካከል የብሌን (pupil) ስፋትና ጥበት የሚቆጣጠረው የቀለም ክፍል አይሪስ (Iris - Part IV) ይባላል።

🌳 Afaan Oromoo:
Kutaan ijaa bal\'ina buubbuu ijaa (pupil) ifaa wajjin wal-simsiisee to\'atu \'Iris\' (Kutaa IV) jedhama.`,
    hint: 'The Iris controls the size and diameter of the pupil depending on lighting conditions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q91',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Sense Organs: Ear Anatomy and Eustachian Tube Function',
    questionText: '91. Select the option that correctly matches a component of the human ear with its physiological function:',
    options: [
      'Eustachian tube - Equalizing air pressure between the middle ear cavity and the atmospheric pharynx/throat',
      'Semicircular canals - Direct production of acoustic sound nerve impulses for hearing',
      'Ear ossicles - Detecting dynamic rotation of head movement',
      'Cochlea - Transmitting sound vibrations mechanically from incus directly to tympanic membrane'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Eustachian Tube: Connects middle ear to nasopharynx, equalizing pneumatic pressure across the tympanic membrane.
• Semicircular Canals: Dynamic rotational equilibrium.
• Ear Ossicles (Malleus, Incus, Stapes): Mechanical amplification of sound vibrations.
• Cochlea: Organ of Corti transduces fluid pressure waves into auditory nerve impulses.

🇪🇹 አማርኛ (Amharic):
ዩስታቺያን ቲዩብ (Eustachian tube) በመካከለኛው ጆሮ እና በጉሮሮ መካከል ያለውን የአየር ግፊት እኩል በማስተካከል የታምቡር ሽፋን እንዳይቀደድ ይከላከላል።

🌳 Afaan Oromoo:
\'Eustachian tube\' dhiibbaa qilleensaa gurra gidduu fi qoonqo\'o gidduu jiru wal-qixxeessuun beekama.`,
    hint: 'The Eustachian tube equalizes air pressure between the middle ear and the throat.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q92',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Sense Organs: Sequential Mechanism of Human Auditory Hearing',
    questionText: '92. Consider the following physiological events occurring during sound reception and hearing:\nI. Transmission and mechanical amplification of sound vibrations across middle ear ossicles (malleus, incus, stapes)\nII. Displacement of basilar membrane and shearing of hair cells in the cochlear Organ of Corti\nIII. Propagation of action potentials along the auditory nerve to the auditory cortex of the temporal lobe\nIV. The outer ear pinna funnels acoustic sound waves down the auditory canal to vibrate the tympanic membrane\n\nWhich sequence represents the correct chronological order of the hearing process?',
    options: [
      'IV -> III -> II -> I',
      'I -> II -> III -> IV',
      'I -> IV -> II -> III',
      'IV -> I -> II -> III'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Hearing Sequence:
1. (IV) Pinna collects sound waves and directs them to vibrate the tympanic membrane (eardrum).
2. (I) Malleus, incus, and stapes amplify vibrations onto the oval window.
3. (II) Perilymph/endolymph fluid waves stimulate cochlear hair cells.
4. (III) Hair cell depolarization generates nerve impulses along cranial nerve VIII to the auditory cortex.
Correct Sequence: IV -> I -> II -> III.

🇪🇹 አማርኛ (Amharic):
የመስማት ትክክለኛ የሂደት ቅደም ተከተል፡
IV (የውጭ ጆሮ ድምፅ መሰብሰብ) $\\rightarrow$ I (የመሃል ጆሮ አጥንቶች ድምፅ ማጉላት) $\\rightarrow$ II (በኮክሊያ ውስጥ የፀጉር ህዋሳት መነቃቃት) $\\rightarrow$ III (የነርቭ መልዕክት ወደ አእምሮ መጓዝ)። (IV -> I -> II -> III)

🌳 Afaan Oromoo:
Tartiiba dhageettii: IV (Gurra alaa) -> I (Lafeewwan gurra gidduu) -> II (Lubbiyyoo rifeensaa kookliyaa) -> III (Ergaan gara sammuutti darbuu).`,
    hint: 'Sound funneled by Pinna (IV) -> Ossicles amplify (I) -> Cochlear hair cells vibrate (II) -> Auditory nerve to brain (III).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q93',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Endocrine System: Congenital Hypothyroidism and Cretinism',
    questionText: '93. In a rural community, infants frequently suffer from low basal metabolic rate, stunted physical growth, severe cognitive impairment, and puffy facial edema (Cretinism). Which endocrine malfunction is responsible for this condition?',
    options: [
      'Extreme Congenital Hypothyroidism (Severe deficiency of thyroid hormones / Thyroxine $T_4/T_3$ or dietary iodine deficiency)',
      'Malfunction and atrophy of the adrenal cortex',
      'Hypersecretion of parathyroid hormone (PTH)',
      'Total deficiency of adrenaline synthesis in the adrenal medulla'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Congenital hypothyroidism (or severe maternal iodine deficiency leading to endemic cretinism) causes a deficiency of thyroid hormones (Thyroxine / $T_4$ and $T_3$), leading to stunted skeletal growth, irreversibly impaired neurological brain development, and abnormally low metabolic rates.

🇪🇹 አማርኛ (Amharic):
በህፃናት ላይ የታይሮይድ ሆርሞን (ታይሮክሲን/አዮዲን) እጥረት ሲያጋጥም የአካል እና የአእምሮ እድገት ወደ ኋላ መቅረትና ዝቅተኛ ሜታቦሊዝምን የሚያመጣው ክሬቲኒዝም (Cretinism / Extreme Hypothyroidism) ይባላል።

🌳 Afaan Oromoo:
Hanqinni hoormoonii Taayirooyidii (\'Thyroxine\') daa\'imman irratti guddinni sammuu fi qaamaa akka duubatti hafu (\'Cretinism / Hypothyroidism\') taasisa.`,
    hint: 'Severe congenital hypothyroidism causes cretinism, stunted growth, and low metabolic rate.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q94',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Endocrine System: Posterior Pituitary Hormones (Oxytocin)',
    questionText: '94. When a pregnant woman enters labor, which neurohypophyseal peptide hormone stimulates vigorous rhythmic contractions of the myometrium and triggers milk ejection during lactation?',
    options: [
      'Vasopressin (Antidiuretic Hormone / ADH)',
      'Aldosterone',
      'Oxytocin (Stimulating uterine labor contractions and milk let-down reflex)',
      'Progesterone'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Oxytocin (synthesized in the hypothalamus and released from the posterior pituitary) acts on uterine myometrium smooth muscle via positive feedback during parturition, driving labor contractions and stimulating mammary myoepithelial cells for milk ejection ("let-down").

🇪🇹 አማርኛ (Amharic):
በወሊድ ወቅት የማህፀን ጡንቻዎች እንዲኮማተሩ በማድረግ ምጥን የሚያፋጥን እና የጡት ወተት እንዲረጭ የሚረዳው ሆርሞን ኦክሲቶሲን (Oxytocin) ይባላል።

🌳 Afaan Oromoo:
Hoormooniin yeroo ciniinsuu gadaamessi akka heddumminaan kottoonfatu gochuun da\'umsa saffisiisu fi aannan harmaa gadi-lakkisiisu \'Oxytocin\' dha.`,
    hint: 'Oxytocin stimulates uterine contractions during labor and milk ejection.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q95',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Renal Physiology: Ultrafiltration in the Glomerulus and Bowman\'s Capsule',
    questionText: '95. How does the primary process of renal Ultrafiltration occur across the Malpighian body in the human kidney nephron?',
    options: [
      'By concentrating hypertonic urea in the collecting duct using countercurrent multipliers',
      'By generating high glomerular hydrostatic blood pressure in the knot of capillaries (glomerulus) within Bowman\'s capsule due to the afferent arteriole being wider than the efferent arteriole',
      'By simple diffusion of glucose into proximal convoluted tubules',
      'By active pumping of water through descending loops of Henle'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Ultrafiltration occurs because the afferent arteriole entering the glomerulus is wider in diameter than the exiting efferent arteriole. This structural bottleneck creates high hydrostatic blood pressure (~55 mmHg), forcing water, ions, glucose, amino acids, and urea across the fenestrated podocyte filtration barrier into Bowman\'s space.

🇪🇹 አማርኛ (Amharic):
በኩላሊት ውስጥ አልትራፊልትሬሽን (Ultrafiltration) የሚከናወነው ወደ ግሎሜሩለስ ደም የሚያስገባው የደም ቧንቧ (Afferent) ከሚያወጣው (Efferent) ሰፋ ያለ በመሆኑ ከፍተኛ የደም ግፊት በቦውማንስ ካፕሱል ውስጥ ስለሚፈጠር ነው።

🌳 Afaan Oromoo:
Adeemsi \'Ultrafiltration\' kukkullee keessatti dhiibbaa dhiigaa olaanaa \'Glomerulus\' keessatti uumamuun bishaan, soorata fi kosii gara \'Bowman\'s capsule\'tti calala.`,
    hint: 'High glomerular hydrostatic pressure forces small molecules into Bowman\'s capsule.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q96',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Endocrine System: Insulin and Blood Glucose Regulation (Glycogenesis)',
    questionText: '96. When a patient with high postprandial blood glucose undergoes exercise to upregulate insulin sensitivity, how does insulin act on hepatocytes and myocytes to lower elevated blood glucose?',
    options: [
      'It stimulates anaerobic glycolysis to convert all glucose into lactic acid.',
      'It stimulates Glycogenesis (the polymerization and storage of glucose into glycogen in liver and muscle cells) and promotes cellular glucose uptake.',
      'It stimulates Lipolysis, breaking triglycerides into free fatty acids and glucose.',
      'It accelerates hepatic Gluconeogenesis from amino acid precursors.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Insulin (secreted by pancreatic $\\beta$-cells) binds to tyrosine kinase receptors, translocating GLUT4 glucose transporters to cell membranes, and activating glycogen synthase to promote **Glycogenesis** (converting excess glucose into glycogen storage in liver and skeletal muscles).

🇪🇹 አማርኛ (Amharic):
ኢንሱሊን (Insulin) በደም ውስጥ ያለውን ከፍተኛ የስኳር መጠን ለመቀነስ፡ ህዋሳት ስኳርን እንዲወስዱ እና ትርፍ ግሉኮስ በጉበትና በጡንቻ ውስጥ ወደ ግላይኮጅን እንዲቀየር (Glycogenesis) ያደርጋል።

🌳 Afaan Oromoo:
Insuuliiniin sukkaara dhiiga keessaa gadi buusuuf \'Glycogenesis\' kakaasuun gilukoosii gara \'Glycogen\'tti jijjiiree tiruu fi maashaa keessatti kuusa.`,
    hint: 'Insulin stimulates glycogenesis, converting excess glucose into glycogen.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q97',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Osmoregulation: Antidiuretic Hormone (ADH / Vasopressin) Action',
    questionText: '97. When blood osmolarity increases (water content decreases following heavy dietary salt intake), what osmoregulatory homeostatic response occurs to conserve water?',
    options: [
      'Adrenal cortex releases adrenaline to convert glycogen into glucose.',
      'Hypothalamus releases aldosterone to excrete water into urine.',
      'Hypothalamic osmoreceptors stimulate the posterior pituitary gland to secrete Antidiuretic Hormone (ADH / Vasopressin), increasing aquaporin water permeability in renal collecting ducts to reabsorb water back into the blood.',
      'Kidney nephrons shut down completely to prevent water filtration.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
When blood water content drops (hyperosmolarity), hypothalamic osmoreceptors trigger the posterior pituitary to secrete ADH (vasopressin). ADH inserts aquaporin-2 water channels into the collecting ducts and distal convoluted tubules, stimulating water reabsorption back into the blood and producing concentrated urine.

🇪🇹 አማርኛ (Amharic):
በደም ውስጥ የውሃ መጠን ሲያንስ (ጨዋማ ሲሆን)፡ ፒቱታሪ ግላንድ አንቲዳይዩሬቲክ ሆርሞን (ADH) እንዲለቅ ይደረጋል፤ ADH ደግሞ ኩላሊት ውሃን መልሶ ወደ ደም እንዲመጥ (reabsorb እንዲያደርግ) ያዛል።

🌳 Afaan Oromoo:
Yoo qabiyyee bishaanii dhiiga keessaa hir\'ate \'pituitary gland\' hoormoonii ADH gad-lakkisuun kukkulleen bishaan deebisee gara dhiigaatti akka xuuxu godha.`,
    hint: 'ADH from the posterior pituitary stimulates water reabsorption in collecting ducts.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q98',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Environmental Biology: Major Anthropogenic Greenhouse Gas and Sources',
    questionText: '98. Which greenhouse gas is overwhelmingly responsible for the largest radiative forcing of human-induced global warming, and what are its primary industrial sources, respectively?',
    options: [
      'Methane - Aluminum smelting and microchip semiconductor etching',
      'Carbon dioxide ($CO_2$) - Combustion of fossil fuels (coal, petroleum, natural gas), massive deforestation, and industrial cement processing',
      'Sulfur hexafluoride - Domestic cattle rumination only',
      'Perfluorocarbons - Agricultural rice paddy wetlands'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Carbon dioxide ($CO_2$) accounts for over 75% of total anthropogenic greenhouse gas radiative forcing. Its major sources are fossil fuel combustion in energy/transportation sectors, industrial cement manufacturing, and tropical deforestation reducing carbon sinks.

🇪🇹 አማርኛ (Amharic):
ለአለም ሙቀት መጨመር በሰው ሰራሽ መንገድ በከፍተኛ መጠን የተለቀቀው ዋነኛ ጋዝ ካርቦን ዳይኦክሳይድ ($CO_2$) ሲሆን፣ ምንጩም የድንጋይ ከሰልና ነዳጅ ማቃጠል (fossil fuel combustion) እና የደን መጨፍጨፍ ነው።

🌳 Afaan Oromoo:
Gaazii \'Greenhouse\' isa guddaa fi balaa fidaa jiru \'Carbon dioxide\' ($CO_2$) yoo ta\'u, maddoottan isaas boba\'aa (fossil fuels) gubuu fi bosona ciruudha.`,
    hint: 'Carbon dioxide from fossil fuel combustion and deforestation is the main greenhouse gas.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q99',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Climate Change: Impact of Climate Vulnerability on Agricultural Productivity',
    questionText: '99. In developing agrarian ecosystems, what is the most severe and direct impact of escalating climate change on food crop productivity and biological biodiversity?',
    options: [
      'Expansion of monoculture systems that automatically yield high yields',
      'Agroforestry systems expanding indigenous canopy cover',
      'Wildfires burning exclusively polar tundra regions',
      'Severe alteration of hydrological rainfall patterns and reduction of available freshwater, causing prolonged droughts, desertification, and loss of biological resources'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Climate change disrupts the hydrological cycle, causing erratic rainfall, extended recurrent droughts, and soil moisture depletion in agrarian economies, leading to acute crop failures, water shortages, and direct destruction of biological and livestock resources.

🇪🇹 አማርኛ (Amharic):
የአየር ንብረት ለውጥ በግብርና ምርታማነት ላይ የሚያደርሰው አስከፊ ጉዳት፡ የውሃ እጥረትን፣ ድርቅን እና የተፈጥሮ ሃብቶች መመናመንን ማስከተሉ ነው።

🌳 Afaan Oromoo:
Miidhaan jijjiirama qilleensaa qonna irratti fidu: Hir\'ina bishaanii, hongee fi qabeenya baayoloojikaalaa mancaasuudha.`,
    hint: 'Reduced available water and severe droughts cause acute declines in biological productivity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q100',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Environmental Action: Green Legacy Initiative in Ethiopia',
    questionText: '100. Which national environmental campaign and community practice in Ethiopia is internationally recognized as a major climate change mitigation initiative for carbon sequestration and reforestation?',
    options: [
      'Promoting luxury tourism infrastructure without tree planting',
      'Traditional conflict resolution assemblies',
      'Planting billions of tree seedlings under the nationwide Green Legacy Initiative (Atsede Meskerem / Reforestation)',
      'Harvesting wild medicinal herbs for local markets'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Ethiopia's nationwide **Green Legacy Initiative** has mobilized millions of citizens to plant billions of tree seedlings across watersheds and degraded lands. This restores forest cover, curbs soil erosion, enriches biodiversity, and sequesters millions of tons of atmospheric carbon dioxide (Climate Change Mitigation).

🇪🇹 አማርኛ (Amharic):
በኢትዮጵያ ውስጥ የአየር ንብረት ለውጥን ለመከላከልና የተራቆቱ መሬቶችን መልሶ ለማልማት በቢሊዮን የሚቆጠሩ ችግኞችን የመትከል ተግባር የአረንጓዴ አሻራ መርሃ-ግብር (Green Legacy Initiative) ይባላል።

🌳 Afaan Oromoo:
Itoophiyaa keessatti jijjiirama qilleensaa ittisuuf biqiltuuwwan biliyoonaan lakkaa\'aman dhaabuun \'Asheeta Magariisaa\' (Green Legacy Initiative) jedhama.`,
    hint: 'Planting billions of tree seedlings under the Green Legacy Initiative mitigates climate change.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
