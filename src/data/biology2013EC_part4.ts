import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2013_EC_PART4: Question[] = [
  {
    id: 'bio-2013-q76',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Photosynthesis: Thylakoid Membrane Architecture',
    questionText: '76. What structural arrangement makes chlorophyll suitable for its light-harvesting function?',
    options: [
      'The floating of the photosystems and the electron transport chain in the cytosol.',
      'The fixing of the photosystems and the electron transport chain on the thylakoid membrane.',
      'The structural differences between Photosystem I and Photosystem II.',
      'The long distance between Photosystem I and Photosystem II.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Photosystems I and II along with the photosynthetic electron transport chain complexes (cytochrome b6f, plastoquinone, ATP synthase) are rigidly anchored and ordered within the thylakoid lipid bilayer, allowing efficient resonance energy transfer and proton gradient generation across the thylakoid lumen.

🇪🇹 አማርኛ (Amharic):
ክሎሮፊልና የብርሃን ቅበላ ስርአት (photosystems) ከኤሌክትሮን ማስተላለፊያ ሰንሰለት ጋር በታይላኮይድ ሽፋን (thylakoid membrane) ላይ በጽኑ ተቀናጅተው መቀመጣቸው የብርሃን ሃይልን ወደ ኬሚካል ሃይል ለመቀየር አመቺ ያደርጋቸዋል።

🌳 Afaan Oromoo:
Fuulli Taayilaakooyidii (thylakoid membrane) pirootiinota ifa qabatanii fi daddabarsitoota elektiroonii ofirra qabaachuun ifa biiftuu gara anniisaa keemikaalaatti jijjiiruuf haalaan mijataadha.`,
    hint: 'Photosystems and electron transport chains are embedded in the thylakoid membrane.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q77',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Photosynthesis: Photorespiration and Stomatal Closure',
    questionText: '77. Why does photorespiration take place in a hot environment? Because plants close their stomata and face',
    options: [
      'H2O shortage.',
      'CO2 shortage.',
      'O2 accumulation.',
      'O2 shortage.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In hot and arid conditions, C3 plants close their stomata to prevent transpirational water loss. This blocks carbon dioxide entry, causing internal leaf CO2 levels to drop (CO2 shortage) while photosynthetic O2 accumulates, forcing the enzyme RuBisCO to oxygenate RuBP (initiating photorespiration).

🇪🇹 አማርኛ (Amharic):
በሞቃት አየር ውስጥ እፅዋት የውሃ ብክነትን ለመከላከል እስቶማታቸውን (stomata) ስለሚዘጉ በቅጠላቸው ውስጥ የካርቦን ዳይኦክሳይድ እጥረት (CO2 shortage) ይፈጠራል፤ ይህም ፎቶሬስፒሬሽን እንዲከሰት ያደርጋል።

🌳 Afaan Oromoo:
Ho\'a cimaa keessatti biqiltoonni bishaan qisaasessuu dhiisuuf istomaataa isaanii waan cufaniif hanqinni CO2 (CO2 shortage) uumamee \'photorespiration\'n akka ka\'u taasisa.`,
    hint: 'Stomatal closure traps O2 and starves leaf cells of CO2.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q78',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Photosynthesis: Chloroplast Anatomy (Photolysis vs Calvin Cycle)',
    questionText: '78. Based on the diagram of the chloroplast (where C = Stroma and E = Thylakoid lumen/grana), which letters represent the site where photolysis and the Calvin cycle take place, respectively?',
    options: [
      'D and F',
      'C and E',
      'B and A',
      'F and E'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In chloroplast biochemistry:
- Photolysis of water (light reactions) takes place on the thylakoid membranes/lumen (E).
- The Calvin cycle (light-independent carbon fixation) takes place in the fluid stroma (C).
Therefore, the corresponding locations are C and E.

🇪🇹 አማርኛ (Amharic):
በክሎሮፕላስት ውስጥ የውሃ መከፋፈል (photolysis) የሚካሄደው በታይላኮይድ (E) ሲሆን፣ የካልቪን ዑደት (Calvin cycle) ደግሞ በስትሮማ (C) ውስጥ ይካሄዳል (C and E)።

🌳 Afaan Oromoo:
Kilooropilaastii keessatti fotolayisisii bishaanii kan adeemsifamu taayilaakooyidii (E) keessatti yoo ta\'u, marsaan Kaalviin ammoo istiroomaa (C) keessatti gaggeeffama (C and E).`,
    hint: 'Photolysis occurs in thylakoids; Calvin cycle occurs in the stroma.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q79',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Photosynthesis: Calvin Cycle Reduction Phase',
    questionText: '79. Which of the following is correct about the process of glucose production in the light-independent reactions of photosynthesis?',
    options: [
      'A total of 9 ATP molecules are synthesized.',
      'CO2 reacts with GP to form RuBP.',
      'One TP is directly converted to one glucose molecule.',
      'GP is reduced to TP by reduced NADP.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In the reduction phase of the Calvin cycle, glycerate-3-phosphate (GP) is phosphorylated by ATP and reduced by reduced NADP (NADPH) to form triose phosphate (TP, glyceraldehyde-3-phosphate), which is subsequently used to synthesize hexose sugars like glucose.

🇪🇹 አማርኛ (Amharic):
በካልቪን ዑደት ውስጥ GP (glycerate-3-phosphate) በ NADPH አማካኝነት ተቀንሶ (reduced ሆኖ) ወደ TP (triose phosphate) ይቀየራል (GP is reduced to TP by reduced NADP)።

🌳 Afaan Oromoo:
Marsaa Kaalviin keessatti GP\'n (glycerate-3-phosphate) gargaarsa NADPH\'tiin gara TP\'tti (triose phosphate) jijjiirama.`,
    hint: 'NADPH supplies electrons/hydrogen to reduce GP to TP.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q80',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Photosynthesis: CAM Photosynthetic Pathway',
    questionText: '80. Which of the following is a correct description of the CAM pathway of photosynthesis?',
    options: [
      'CO2 is stored in the form of malate during the night.',
      'The Calvin cycle takes place during the night.',
      'The Calvin cycle takes place in the bundle sheath cells during the day.',
      'CO2 is stored in the bundle sheath cells during the night.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In Crassulacean Acid Metabolism (CAM) plants (e.g. desert succulents and pineapples), stomata open exclusively at night to absorb CO2, which PEP carboxylase fixes into 4-carbon malate (malic acid) and stores in large central vacuoles until daytime sunlight powers the Calvin cycle.

🇪🇹 አማርኛ (Amharic):
በCAM ተክሎች ውስጥ እስቶማታ በለሊት ስለሚከፈት CO2 በሌሊት ተወስዶ በማሌት (malate / malic acid) መልክ በቫኪዩል ውስጥ ተከማችቶ ያድራል (CO2 is stored as malate at night)።

🌳 Afaan Oromoo:
Biqiltoota CAM keessatti istomaataan halkan waan banamuuf CO2\'n halkan gara asiidii maalikii/maaletitti (malate) jijjiiramee kuufama.`,
    hint: 'CAM plants fix nocturnal CO2 into 4-carbon malate for daytime use.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q81',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Enzymology: Mechanism of Activation Energy Lowering',
    questionText: '81. Which one of the following statements explains how an enzyme lowers the activation energy of a reaction? By',
    options: [
      'enabling the reaction to occur at lower physiological temperature.',
      'making the individual substrate molecules more reactive.',
      'lowering the kinetic energy of the reacting molecules.',
      'changing its tertiary structure into secondary protein structure.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Enzymes lower activation energy by binding to substrate molecules, straining their chemical bonds, orienting them precisely, and stabilizing the transition state, thereby making the substrate molecules far more reactive.

🇪🇹 አማርኛ (Amharic):
ኢንዛይሞች የአክቲቬሽን ኢነርጂን የሚቀንሱት ሰብስParamNumትን ከአክቲቭ ሳይታቸው ጋር በማስተሳሰርና ቦንዶቻቸውን በማላላት የሰብስParamNum ሞለኪውሎች ይበልጥ ተቀጣጣይና ፈጣን ምላሽ እንዲሰጡ (more reactive) በማድረግ ነው።

🌳 Afaan Oromoo:
Inzaayimonni anniisaa re\'aakshinii (activation energy) kan hir\'isan molakiyuulota saabistireetii caalaatti akka re\'aaktii ta\'an (more reactive) gochuudhaani.`,
    hint: 'Enzymes strain chemical bonds and stabilize transition states, increasing substrate reactivity.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q82',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Enzyme Classification: Oxidoreductases',
    questionText: '82. Consider the chemical reaction: RH2 + A --[E]--> R + AH2. Based on this reaction, into which class of enzymes is enzyme "E" grouped?',
    options: [
      'Transferases',
      'Hydrolyases',
      'Isomerases',
      'Oxidoreductases'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The reaction involves the transfer of hydrogen atoms (electrons) from a donor RH2 (oxidation) to an acceptor A (reduction). Enzymes that catalyse biological oxidation-reduction (redox) reactions are classified as Oxidoreductases (such as dehydrogenases).

🇪🇹 አማርኛ (Amharic):
የተሰጠው ኬሚካላዊ ምላሽ የሃይድሮጅን መተላለፍ (Redox reaction) የሚያሳይ ሲሆን፤ የሬዶክስ ምላሾችን የሚያፋጥኑ ኢንዛይሞች ኦክሲዶሪዳክቴሴስ (Oxidoreductases) ይባላሉ።

🌳 Afaan Oromoo:
Re\'aakshiniin kun daddarbiinsa elektiroonii/haayidiroojiinii (Redox) waan agarsiisuuf inzaayimiin kun \'Oxidoreductases\' keessatti ramadama.`,
    hint: 'Dehydrogenation and hydrogen transfer reactions are catalysed by oxidoreductases.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q83',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Applied Enzymology: Enzymes in Detergents',
    questionText: '83. Which one of the following enzymes is used in biological washing powders?',
    options: [
      'Biochymosin',
      'Lipase',
      'Cellulase',
      'Pectinase'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Lipases (along with proteases) are incorporated into biological washing powders and laundry detergents to hydrolyze insoluble triglycerides, oils, fats, and grease stains on fabrics into soluble fatty acids and glycerol.

🇪🇹 አማርኛ (Amharic):
በልብስ ማጠቢያ ዱቄቶች ውስጥ የቅባት፣ የዘይትና የሰም እድፎችን ሰብሮ ለማጽዳት የሚያገለግለው ኢንዛይም ላይፔዝ (Lipase) ነው።

🌳 Afaan Oromoo:
Inzaayimiin dhangala\'aa fi zayita uffata irraa dhiqee qulqulleessuuf saamunaa keessatti itti fayyadaman Laayipeezii (Lipase) dha.`,
    hint: 'Lipase breaks down fat, lipid, and grease stains on laundry.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q84',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Enzymology: Induced Fit and Bond Distortion',
    questionText: '84. What happens when the substrate molecule binds to the active site of an enzyme?',
    options: [
      'The substrate and the enzyme will bond permanently.',
      'They form a stable intermediate substance.',
      'The amino acids in the active site become unreactive.',
      'The chemical bonds of the substrate are distorted.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to the Induced Fit model of enzyme action, binding of the substrate induces conformational adjustments in the catalytic amino acid residues of the active site, straining and distorting the substrate\'s chemical bonds toward the transition state configuration.

🇪🇹 አማርኛ (Amharic):
ሰብስParamNum ከኢንዛይሙ አክቲቭ ሳይት ጋር ሲጣመር (Induced fit) በሰብስParamNum ሞለኪውል ውስጥ ያሉ ኬሚካላዊ ቦንዶች እንዲወጠሩና እንዲላሉ ይደረጋል (bonds of substrate distorted)።

🌳 Afaan Oromoo:
Yeroo saabistireetiin bakka hojii (active site) inzaayimii qabatu, hidhoon keemikaalaa saabistireetii sanaa ni diriira/ni dadhaba (bonds distorted).`,
    hint: 'Induced fit distorts chemical bonds in the substrate to lower activation energy.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q85',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Biochemistry: Vitamins as Coenzymes / Cofactors',
    questionText: '85. Which of the following vitamins is used as a component of coenzymes/cofactors?',
    options: [
      'Thiamin',
      'Riboflavin',
      'Ascorbic acid',
      'Retinol'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Riboflavin (Vitamin B2) is the direct precursor and structural component of the crucial redox coenzymes FAD (flavin adenine dinucleotide) and FMN (flavin mononucleotide) in cellular respiration.

🇪🇹 አማርኛ (Amharic):
ራይቦፍላቪን (Riboflavin - Vitamin B2) በሴሉላር አተነፋፈስ ውስጥ እንደ FAD እና FMN ላሉት ኮኢንዛይሞች (cofactors) ዋና አካል ሆኖ ያገለግላል።

🌳 Afaan Oromoo:
Vaayitaaminiin koofaktara/ko-inzaayimii (FAD fi FMN) ijaaruuf gargaaru Raayiboofilaaviin (Riboflavin / Vit B2) dha.`,
    hint: 'Riboflavin (Vitamin B2) forms FAD and FMN coenzymes.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q86',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Genetics: Genetic Recombination in Meiosis',
    questionText: '86. How does crossing over during meiosis bring variation in species? By',
    options: [
      'increasing the amount of genes in one of the parents during meiosis.',
      'producing combinations of genes in the gametes that are not found in either parent.',
      'combining sex and somatic cell chromosomes.',
      'creating genes that are not found in both parents due to meiosis.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
During prophase I of meiosis, non-sister chromatids of homologous chromosomes exchange reciprocal DNA segments (crossing over), creating novel recombinant combinations of maternal and paternal alleles in gametes that were not present intact in either parent.

🇪🇹 አማርኛ (Amharic):
ክሮሲንግ ኦቨር (Crossing over) በክሮሞሶሞች መካከል የጂን ቅያሬ በማካሄድ በወላጆች ላይ ያልነበረ አዲስ የተዋሃደ የዘረ-መል ጥምረት በጋሜቶች ውስጥ እንዲፈጠር ያደርጋል (combinations of genes in gametes not found in either parent)።

🌳 Afaan Oromoo:
Kiroosing oovariin (crossing over) daddarbiinsa kutaalee kiroomaatiidii wal-jijjiiruun wal-makaa jiinii haaraa kan warra keessatti hin turre gaameetii keessatti uuma.`,
    hint: 'Crossing over shuffles parental alleles to generate new genetic combinations.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q87',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Cell Metabolism: Biosynthesis of Non-Essential Amino Acids',
    questionText: '87. How does our body synthesize some of the non-essential amino acids in our body? From',
    options: [
      'fatty acids we consume.',
      'intermediate molecules of different metabolic pathways.',
      'breaking down of pre-existing proteins.',
      'biological breakdown of our own cells.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Human cells synthesize non-essential amino acids by transamination and related biosynthetic routes using carbon skeletons derived from intermediate metabolites of glycolysis and the Krebs cycle (e.g. pyruvate, alpha-ketoglutarate, oxaloacetate).

🇪🇹 አማርኛ (Amharic):
ሰውነታችን አላስፈላጊ (non-essential) አሚኖ አሲዶችን የሚያመርተው ከተለያዩ የሜታቦሊዝም ሂደቶች በሚገኙ መካከለኛ ሞለኪውሎች (intermediate molecules of different metabolic pathways) ላይ ትራንስአሚኔሽን በማካሄድ ነው።

🌳 Afaan Oromoo:
Qaamni keenya asiidota amiinoo tokko tokko molakiyuulota giddu-galeessaa marsaalee meetaaboliizimii (glycolysis fi Krebs cycle) irraa uuma.`,
    hint: 'Metabolic intermediates from glycolysis and the citric acid cycle serve as carbon backbones.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q88',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Genetic Engineering: Gene Cloning Steps',
    questionText: '88. Consider steps in cloning human insulin: I. Obtaining insulin gene and bacterial plasmid; II. Cutting insulin gene and plasmid with restriction enzymes; III. Step X; IV. Inserting recombinant plasmid into bacteria; V. Production of insulin. Which best represents Step "X"?',
    options: [
      'Inserting the insulin gene into a bacterium',
      'Inserting the open plasmid into a bacterium',
      'Fusing the insulin and plasmid genes to the cell wall of bacteria',
      'Combining the insulin gene into the opened plasmid (ligation)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
After both the human insulin gene and bacterial plasmid are cleaved with complementary restriction endonucleases, Step X is the ligation step: combining and sealing the insulin gene insert into the linearized plasmid vector using DNA ligase.

🇪🇹 አማርኛ (Amharic):
በጂን ክሎኒንግ ሂደት የኢንሱሊን ጂን እና ፕላዝሚድ ከተቆረጡ በኋላ የሚቀጥለው ደረጃ (Step X) የኢንሱሊን ጂኑን በተከፈተው ፕላዝሚድ ውስጥ ማጣበቅ እና ማጣመር (Combining the insulin gene into the opened plasmid - ligation) ነው።

🌳 Afaan Oromoo:
Tartiiba jiin kiloniingii keessatti jiinii fi pilaasmiidiin erga qaramanii booda sadarkaan \'X\' jiinii inwuliinii pilaasmiidii baname keessatti walitti hidhuudha (ligation).`,
    hint: 'Ligation fuses the foreign gene fragment into the opened plasmid vector.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q89',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Molecular Biology: Semi-Conservative DNA Replication',
    questionText: '89. Consider the parent DNA duplex: Strand 1: T A C G T A / Strand 2: A T G C A T. What will be the complementary sequences of the daughter DNA molecules if the DNA replicates semi-conservatively?',
    options: [
      'ATGCAT and UACGUA',
      'TACGTA and ATGCAU',
      'ATGCAT and ATGCAT',
      'TACGTA paired with ATGCAT (two identical duplexes produced)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In semi-conservative DNA replication, the two parent strands separate, and each serves as a template to build a complementary daughter strand using DNA polymerase:
- Strand 1 (T-A-C-G-T-A) synthesizes new strand A-T-G-C-A-T.
- Strand 2 (A-T-G-C-A-T) synthesizes new strand T-A-C-G-T-A.
This yields two identical double-stranded DNA duplexes matching the parent sequence: TACGTA / ATGCAT.

🇪🇹 አማርኛ (Amharic):
በሴሚ-ኮንሰርቫቲቭ ዲኤንኤ ቅጂ (replication) ወቅት ሁለቱም የመጀመሪያ ክሮች ተለያይተው አዳዲስ አጋፋሪ ክሮችን ስለሚገነቡ የሚፈጠሩት ሁለት አዳዲስ ዲኤንኤዎች የወላጅ ዲኤንኤን (TACGTA እና ATGCAT) በትክክል የያዙ ናቸው።

🌳 Afaan Oromoo:
Waraabbii DNA (semi-conservative) keessatti tokkoon tokkoon kutaan dhuunfaa qola haaraa ijaaruun DNA dacha dachaa lama kan wal-fakkaatan (TACGTA fi ATGCAT) uuma.`,
    hint: 'Semi-conservative replication generates 2 identical DNA duplexes matching parent strands.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q90',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Molecular Biology: Protein Translation Mechanism',
    questionText: '90. During translation',
    options: [
      'tRNA serves as a template of the DNA molecule.',
      'ribosome moves forward over two codons at a time.',
      'mRNA brings amino acids into the ribosomes.',
      'tRNA with complementary anticodon binds on the codon of mRNA.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
During the elongation phase of translation, each aminoacyl-tRNA carrying its specific amino acid base-pairs via its complementary triplet anticodon with the corresponding mRNA codon inside the ribosomal A-site.

🇪🇹 አማርኛ (Amharic):
በትራንስሌሽን (Translation) ወቅት ተጓዳኝ አንቲኮዶን (anticodon) የያዘው tRNA በ mRNA ኮዶን (codon) ላይ በመቀመጥ አሚኖ አሲዱን ያቀርባል።

🌳 Afaan Oromoo:
Tiraanisileeshinii keessatti tRNA\'n \'anticodon\' qabu koodonii mRNA irratti walitti hidhama.`,
    hint: 'The tRNA anticodon base pairs complementarily with the mRNA codon.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q91',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Scientific Methodology: Hypotheses Evaluation',
    questionText: '91. The step of the scientific method that comes after analyzing results and drawing a conclusion is',
    options: [
      'doing background research.',
      'constructing hypothesis.',
      'designing and carrying out experiment.',
      'accepting or rejecting the hypothesis.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
After experimental data is analyzed and conclusions are drawn, the scientist determines whether the empirical evidence supports (accepting) or disproves (rejecting/modifying) the original scientific hypothesis.

🇪🇹 አማርኛ (Amharic):
ውጤትን ከመተንተንና መደምደሚያ ላይ ከመድረስ ቀጥሎ ያለው ደረጃ የቀረበውን መላ-ምት መቀበል ወይም ውድቅ ማድረግ (accepting or rejecting the hypothesis) ነው።

🌳 Afaan Oromoo:
Bu\'aa qorannoo erga xiinxalanii xumura irra gahanii booda yaada-dhaabaa (hypothesis) fudhachuu ykn dhabamsiisuudha (accepting or rejecting).`,
    hint: 'Conclusions determine whether you accept or reject your initial hypothesis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q92',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Scientific Experiments: Placebo-Controlled Drug Trials',
    questionText: '92. In a clinical trial where Group A is a control (given placebo) and Group B is the experimental group (given an unknown test drug), the experimental group showed recovery. Which is true about the result?',
    options: [
      'The drug has an effect.',
      'Placebo has better effect.',
      'The experiment was wrong.',
      'Conclusion cannot be reached.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Because the experimental group receiving the test drug improved significantly compared to the inactive placebo control group, the experiment demonstrates that the drug possesses true pharmacological therapeutic efficacy (the drug has an effect).

🇪🇹 አማርኛ (Amharic):
የሙከራው ቡድን (መድኃኒቱን የወሰደው) መሻሻል ማሳየቱ እና ፕላሴቦ የወሰደው አለመሻሻሉ የተሞከረው መድኃኒት እውነተኛ የፈውስ ውጤት እንዳለው (The drug has an effect) ያረጋግጣል።

🌳 Afaan Oromoo:
Gareen qoricha fudhate waan fayyeef qorichi sun dhukkubicha fayyisuuf bu\'aa qabaachuu isaa (The drug has an effect) mirkaneessa.`,
    hint: 'Outperforming the placebo control indicates the drug has real therapeutic effect.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q93',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Scientific Method: Dependent vs Independent Variables',
    questionText: '93. A biologist investigates the effect of pH on salivary amylase by adding amylase to starch and testing with iodine after 10 minutes (observing blue-black color formation). What is the dependent variable of this experiment?',
    options: [
      'Applying iodine treatment',
      'pH of the solution',
      'Adding salivary amylase',
      'Formation of blue-black color'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In this experiment, pH is the manipulated independent variable, while the measured response or outcome (the degree of starch breakdown indicated by the formation and intensity of the blue-black color with iodine) is the dependent variable.

🇪🇹 አማርኛ (Amharic):
በዚህ ሙከራ ውስጥ ተለዋዋጭ ምክንያት (Independent variable) የ pH መጠን ሲሆን፤ የሚለካው እና የሚታየው ውጤት (Dependent variable) የሰማያዊ-ጥቁር ቀለም መፈጠር (Formation of blue-black color) ነው።

🌳 Afaan Oromoo:
Qorannoo kana keessatti pH\'n jijjiiramaa of danda\'aa (independent) yoo ta\'u, uumamuu fi jijjiiramni halluu gurraacha-cuquliisaa (Formation of blue-black color) jijjiiramaa hirkataa (dependent variable) dha.`,
    hint: 'The dependent variable is the measured outcome (color change indicating starch digestion).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q94',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Laboratory Equipment: Functions of Biological Tools',
    questionText: '94. Which one of the following pairs of biological tools and their functions is FALSE?',
    options: [
      'Petri dish - used for culturing microorganisms',
      'Balances - used for measuring mass',
      'Quadrat - to separate solids from liquids',
      'Optical microscope - uses beam of light to produce magnified image'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A quadrat is a standardized square sampling frame used in ecology to sample, count, and estimate population density of plants or sessile organisms in an ecosystem. It is NOT used to separate solids from liquids (filtration funnels or centrifuges do that); hence pair C is FALSE.

🇪🇹 አማርኛ (Amharic):
ኳድራት (Quadrat) በስነ-ምህዳር ውስጥ የዕፅዋትን ብዛትና ስርጭት ለመቁጠር የሚያገለግል የናሙና ሳጥን እንጂ ጠጣርን ከፈሳሽ ለመለየት አያገለግልም፤ ስለዚህ C የተሳሳተ (FALSE) ነው።

🌳 Afaan Oromoo:
Kowaadirat (Quadrat) uumamtoota lafaa baay\'ina isaanii shallaguuf gargaara malee jajjaboo dhangala\'aa irraa adda baasuuf hin oolu; kanaaf C\'n dogoggora.`,
    hint: 'A quadrat is an ecological sampling square, not a liquid filter.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q95',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Botanical Tools: Plant Specimen Preservation',
    questionText: '95. Grade 12 students collected field plant specimens for laboratory identification and wanted to preserve and flatten them for subsequent analysis. Which biological tool is used for this purpose?',
    options: [
      'Plant press',
      'Pitfall traps',
      'Theodolite',
      'Quadrat'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A plant press consists of wooden frames, cardboard, and absorbent blotting papers used to flatten, dry, and preserve botanical plant specimens for herbarium archival and subsequent laboratory taxonomic identification.

🇪🇹 አማርኛ (Amharic):
የእፅዋትን ናሙናዎች አድርቆና አፍጥጦ ለረጅም ጊዜ ለማቆየትና በቤተ-ሙከራ ውስጥ ለማጥናት የሚያገለግለው መሳሪያ ፕላንት ፕሬስ (Plant press) ይባላል።

🌳 Afaan Oromoo:
Meeshaan biqiltoota qorachuuf qophaa\'an dachaasee gogsuun akka hin banne godhu \'Plant press\' jedhama.`,
    hint: 'A plant press dries and flattens botanical specimens for herbaria.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q96',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Metabolism: Anabolism vs Catabolism (Transamination)',
    questionText: '96. Some amino acids are synthesized using the transamination process in the cell. This activity describes the cell\'s',
    options: [
      'replication.',
      'catabolism.',
      'energy production.',
      'anabolism.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Anabolism refers to biosynthetic metabolic pathways that construct complex organic molecules (such as amino acids, proteins, and lipids) from simpler precursors, requiring energy input.

🇪🇹 አማርኛ (Amharic):
በትራንስአሚኔሽን አማካኝነት አዳዲስ አሚኖ አሲዶችን የመገንባት እና የማምረት ሂደት የሴሉ የግንባታ ሜታቦሊዝም (Anabolism) አካል ነው።

🌳 Afaan Oromoo:
Adeemsi taatota bu\'uuraa irraa asiidota amiinoo haaraa ijaaruu (transamination) Anaa-boolizimii (anabolism) jedhama.`,
    hint: 'Biosynthesis of biomolecules is anabolism.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q97',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Enzymology: Effects of pH on Ionic Bonds',
    questionText: '97. Identify the statement that correctly explains factors affecting enzyme activity.',
    options: [
      'Excessive heat breaks the ionic bonds that hold the tertiary structure of the enzyme protein.',
      'Hydrogen ion concentration affects the ionic bonds of an enzyme.',
      'Increasing concentration of substrates does not affect enzyme activity.',
      'Inhibitors increase enzyme activity by increasing their turnover rate.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Changes in hydrogen ion concentration (pH) alter the ionization state of acidic and basic amino acid R-groups within the enzyme, disrupting ionic bonds and salt bridges that maintain the catalytic 3D active site geometry.

🇪🇹 አማርኛ (Amharic):
የሃይድሮጅን አዮን ክምችት (pH) በኢንዛይሙ አሚኖ አሲዶች መካከል ያሉትን አዮኒክ ቦንዶች (ionic bonds) በማዛባት የኢንዛይሙን ስራ ይለውጣል (Hydrogen ion concentration affects ionic bonds of an enzyme)።

🌳 Afaan Oromoo:
Kuusaan ayoonii haayidiroojiinii (pH) hidhoo ayoonikii (ionic bonds) inzaayimoota gidduu jiru jeeqee boca isaanii jijjiira.`,
    hint: 'pH directly changes the charge on R-groups and disrupts ionic bonds.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q98',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Enzymology: Allosteric Regulation',
    questionText: '98. Which one of the following is true about allosteric regulation?',
    options: [
      'Enzymes are activated when activators attach to the active site.',
      'Inhibition by competitive inhibitors when it interacts on the allosteric site.',
      'Activation by activators when they interact with the allosteric site.',
      'Allosteric inhibition occurs when inhibitors attach to the active site.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Allosteric regulation occurs when effector molecules bind to a specific regulatory site (the allosteric site) separate from the active site. Allosteric activators bind to the allosteric site to stabilize the active catalytic conformation.

🇪🇹 አማርኛ (Amharic):
በአሎስቴሪክ ቁጥጥር (Allosteric regulation) ውስጥ አነቃቂ ሞለኪውሎች (activators) ከአክቲቭ ሳይት ውጭ ካለው የአሎስቴሪክ ሳይት (allosteric site) ጋር በመጣመር ኢንዛይሙን ያነቃቃሉ (Activation by activators on allosteric site)።

🌳 Afaan Oromoo:
To\'annoo aloosteerikii (allosteric regulation) keessatti molakiyuulonni si\'eessitootaa (activators) iddoo addaa (allosteric site) qabachuun inzaayimicha kakaasu.`,
    hint: 'Allosteric effectors bind to the allosteric site, not the active site.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q99',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Enzymology: Temperature and Collision Kinetics',
    questionText: '99. If an enzyme from thermophilic bacteria (which catalyses glucose 6-phosphate into fructose 6-phosphate) is subjected to temperatures below its optimum, the reaction rate decreases because',
    options: [
      'the particles have more kinetic energy.',
      'the enzyme is denatured.',
      'more collisions between enzyme and glucose 6-phosphate occur.',
      'less enzyme-glucose 6-phosphate complexes are formed.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
At temperatures below the optimum, molecules possess lower kinetic energy and move more slowly, resulting in fewer fruitful collisions between enzyme active sites and substrate molecules per second, forming fewer enzyme-substrate complexes. (The enzyme is NOT denatured at low temperatures; denaturation occurs at excessively high temperatures).

🇪🇹 አማርኛ (Amharic):
የሙቀት መጠን ከተገቢው (optimum) በታች ሲወርድ የሞለኪውሎች ፍጥነት ስለሚቀንስ በኢንዛይሙና በሰብስParamNum መካከል የሚፈጠረው ጥምረት ይቀንሳል (less enzyme-substrate complexes formed)።

🌳 Afaan Oromoo:
Ho\'i yeroo optimum gadi bu\'u anniisaan socho\'insaa waan xiqqaatuuf wal-qunnamtii fi ijaarsi inzaayimii-saabistireetii ni hir\'ata.`,
    hint: 'Low temperatures decrease kinetic collisions, forming fewer enzyme-substrate complexes.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2013-q100',
    subject: 'Biology',
    year: '2013 E.C.',
    topic: 'Enzyme Inhibition: Non-Competitive Inhibition by Ibuprofen',
    questionText: '100. Cyclooxygenase-2 converts arachidonic acid into pain/fever-promoting prostaglandins. Ibuprofen acts as a non-competitive inhibitor of cyclooxygenase-2. What would happen if the concentration of ibuprofen increased?',
    options: [
      'Pain in the body is decreased.',
      'Production of prostaglandin is increased.',
      'Concentration of arachidonic acid is decreased.',
      'Substrate affinity of cyclooxygenase-2 is higher.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Increasing the dosage/concentration of the inhibitor ibuprofen causes greater allosteric inhibition of cyclooxygenase-2, drastically suppressing prostaglandin synthesis, which in turn reduces inflammatory fever and decreases bodily pain sensations.

🇪🇹 አማርኛ (Amharic):
የኢቡፕሮፌን (ህመም ማስታገሻ) መጠን ሲጨምር የ COX-2 ኢንዛይም ስራ ይገታል፤ ፕሮስታግላንዲን እንዳይመረት ስለሚያደርግ የሰውነት ህመም ይቀንሳል (Pain of the body is decreased)።

🌳 Afaan Oromoo:
Ibuprofen baay\'isuun hojii inzaayimichaa waan dhowwuuf oomishni pirostaagilaandiinii hir\'atee dhukkubbiin qaamaa ni xiqqaata (Pain is decreased).`,
    hint: 'More ibuprofen inhibits COX-2, lowering prostaglandins and decreasing pain.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  }
];
