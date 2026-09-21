import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2016_EC_PART1: Question[] = [
  {
    id: 'bio-2016-q1',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biotechnology: Transgenic Organisms & Genetic Engineering',
    questionText: '1. A transgenic organism is an organism that',
    options: [
      'can undergo chromosomal non-disjunction.',
      'replicates its DNA without control.',
      'has received genetic material of another organism.',
      'is artificially cultured and harvested.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A transgenic organism (Genetically Modified Organism, GMO) is one that has had DNA/genes from another species or organism artificially introduced into its genome through recombinant DNA technology.

🇪🇹 አማርኛ (Amharic):
ትራንስጄኒክ ኦርጋኒዝም (Transgenic organism) ማለት በዘረ-መል ኢንጂነሪንግ አማካኝነት ከሌላ ፍጡር የተገኘ የጄኔቲክ ቁስ (DNA/Gene) ወደ ራሱ አካል የተቀበለ እና ያስገባ ፍጡር ነው።

🌳 Afaan Oromoo:
Uumamnii 'transgenic' jedhamu uumama teeknooloojii jiiniitiiksiitiin jiinii (DNA) sanyii yookiin uumama biraa irraa fudhatee qaama isaa keessatti qabatee dha.`,
    hint: 'Transgenic organisms contain foreign DNA inserted from another organism.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q2',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biotechnology: Biosensors & Environmental Monitoring',
    questionText: '2. Which of the following explains how biology takes part in biosensor technology? Using microorganism to',
    options: [
      'develop vaccines',
      'monitor pollutants',
      'extract metals from ores',
      'produce antibiotics'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Biosensors integrate biological elements (such as microorganisms, enzymes, or antibodies) with a transducer to detect specific chemical substances or monitor environmental pollutants (like heavy metals, pesticides, or toxins) in real time.

🇪🇹 አማርኛ (Amharic):
ባዮሴንሰር (Biosensor) ውስጥ ረቂቅ ተሕዋስያን በአካባቢ ውስጥ ያሉ በካይ ንጥረ ነገሮችን እና መርዞችን (pollutants) ለመለካትና ለመቆጣጠር ያገለግላሉ።

🌳 Afaan Oromoo:
Teeknooloojii 'biosensor' keessatti maaykiroo-oorgaanizimoota faayidaarra oolchuun faalama naannoo fi kemikaalota summaa\'oo (pollutants) to\'achuuf gargaara.`,
    hint: 'Biosensors use microbes as biological recognition elements to detect and monitor pollutants.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q3',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biotechnology: Industrial Enzymes & Biocatalysis',
    questionText: '3. In a textile industry, microorganism\'s commercial products play a significant role in removing stains like grease by changing',
    options: [
      'the temperature of insoluble large stain molecules.',
      'the acidic or basic nature of the stain molecules.',
      'the color of stain molecules to another color.',
      'large insoluble stain molecules into small and soluble ones.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Microbial industrial enzymes (such as lipases and proteases) catalyze the breakdown of complex, water-insoluble stain molecules (like lipids, grease, and proteins) into smaller, water-soluble products that can easily be rinsed away.

🇪🇹 አማርኛ (Amharic):
በጨርቃ ጨርቅና ማጠቢያ ኢንዱስትሪ ውስጥ ረቂቅ ተሕዋስያን የሚያመነጩዋቸው ኢንዛይሞች ትልልቅና በውሃ የማይሟሙ ቅባቶችን (grease) ወደ ትናንሽ እና በውሃ የሚሟሙ ንጥረ ነገሮች በመሰባበር ያጸዳሉ።

🌳 Afaan Oromoo:
Indaastirii uffataa keessatti inzaayimoonni baakteeriyaa irraa oomishan xurii fi zayitii guddaa hin baqne gara molakiyuulota xixxiqqoo bishaanitti baqaniitti caccabsuun qulqulleessu.`,
    hint: 'Enzymes enzymatically hydrolyze large insoluble stains into small, water-soluble molecules.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q4',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biotechnology: Biopesticides & Biological Pest Control',
    questionText: '4. Which one of the following statements is correct about application of bio-pesticide in agriculture? It',
    options: [
      'breakdowns glyphosate by an enzyme introduced into plant cell culture.',
      'uses bacteria and fungi or their metabolites to kill insects.',
      'produces insect resistant crops through modification of the plant genes using bacterial plasmids.',
      'produces toxic chemicals by crops through modification of their genes.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Biopesticides are biological pest control agents derived from natural sources, specifically utilizing beneficial microorganisms (such as Bacillus thuringiensis bacteria, entomopathogenic fungi, or viruses) and their metabolites to selectively control or kill agricultural insect pests.

🇪🇹 አማርኛ (Amharic):
ባዮ-ፀረ-ተባይ (Biopesticide) ማለት ተባዮችን ለማጥፋት እንደ ባክቴሪያ እና ፈንገስ ያሉ ረቂቅ ተሕዋስያንን ወይም የሚያመነጩዋቸውን መርዞች በቀጥታ በመጠቀም በግብርና ተባዮችን መቆጣጠር ነው።

🌳 Afaan Oromoo:
'Biopesticide' jechuun baakteeriyaa, fangasii yookiin oomisha isaanii fayyadamuun ilbiisota miidhaa geessisan ajjeesuu fi to\'achuudha.`,
    hint: 'Biopesticides utilize microorganisms (bacteria/fungi) or their natural metabolites to control insect pests.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q5',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Microbiology: Characteristics of Bacteria (Monera)',
    questionText: '5. Which one of the following statements correctly describes bacteria? They are',
    options: [
      'single celled prokaryotic organisms.',
      'multicellular eukaryotic organisms.',
      'single celled eukaryotic organisms.',
      'multicellular prokaryotic organisms.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Bacteria are single-celled (unicellular) prokaryotic organisms belonging to Kingdom Monera/Domain Bacteria. They lack a membrane-bound nucleus and membrane-bound organelles.

🇪🇹 አማርኛ (Amharic):
ባክቴሪያዎች ባለ አንድ ህዋስ (single celled) እና ሽፋን ያለው ኒውክሊየስ የሌላቸው ፕሮካርዮቲክ (prokaryotic) ኦርጋኒዝሞች ናቸው።

🌳 Afaan Oromoo:
Baakteeriyaan uumama lubbiyyoo-qeenxee (single celled) fi niwukilasii hin qabne (prokaryotic) dha.`,
    hint: 'Bacteria are unicellular prokaryotes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q6',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Evolution: Mechanisms of Evolution (Gene Flow)',
    questionText: '6. Gene flow is the movement of genetic material',
    options: [
      'that drives a population towards perfection.',
      'without altering the allele frequencies.',
      'without affecting the balance of gene pool of a population.',
      'where organisms either join or leave a population.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Gene flow (gene migration) is the transfer of genetic material (alleles) between populations occurring when fertile individuals immigrate (join) or emigrate (leave) a population.

🇪🇹 አማርኛ (Amharic):
የጂን ፍሰት (Gene flow) ማለት ግለሰቦች ወደ አንድ ማህበረሰብ ሲቀላቀሉ (immigration) ወይም ለቀው ሲወጡ (emigration) የሚከሰት የዘረ-መል ዝውውር ነው።

🌳 Afaan Oromoo:
'Gene flow' jechuun yeroo uumammoonni gara hawaasa tokkootti dhufan yookiin keessaa ba\'an sanyiin (jiiniin) kan daddarbuudha.`,
    hint: 'Gene flow occurs through immigration and emigration (individuals joining or leaving populations).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q7',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Human Biology & Nervous System: Peripheral Nervous System (PNS)',
    questionText: '7. Which one of the following options is a constituent of peripheral nervous system?',
    options: [
      'Somatic sensory nerves, spinal cord and efferent nerves',
      'Afferent nerves, brain and automatic motor nerves',
      'Afferent nerves, efferent nerves and somatic motor nerves',
      'Spinal cord, afferent nerves and somatic sensory nerves'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The Central Nervous System (CNS) consists of the brain and spinal cord. The Peripheral Nervous System (PNS) comprises all nerves outside the CNS: afferent (sensory) nerves, efferent (motor) nerves, and autonomic/somatic motor divisions. Options containing the brain or spinal cord contain CNS elements.

🇪🇹 አማርኛ (Amharic):
የከባቢያዊ ነርቭ ስርዓት (PNS) የአንጎልንና ህብለ-ሰረሰርን ሳይጨምር አፈረንት (afferent/sensory)፣ ኤፈረንት (efferent/motor) እና ሶማቲክ ነርቮችን ያካትታል። አንጎልና ህብለ-ሰረሰር የማዕከላዊ ነርቭ (CNS) አካላት ናቸው።

🌳 Afaan Oromoo:
Sirni narvii qaamaa (PNS) narviiwwan sammuu fi lafee dugdaa ala jiran kanneen akka 'afferent', 'efferent' fi 'somatic motor nerves' of keessatti qabata.`,
    hint: 'The brain and spinal cord are CNS; afferent, efferent, and somatic motor nerves are PNS.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q8',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Nervous System: Structure and Function of Neurons',
    questionText: '8. Which one of the following structures of neurons is correctly paired with its function?',
    options: [
      'Cell body - maintains structure and supply energy',
      'Axon - receives signal from muscle',
      'Dendrites - protects the neuron and insulate it',
      'Myelin sheath - reduces nerve impulse transmission'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Cell body (Soma): Contains the nucleus, mitochondria, and metabolic machinery that maintains structural integrity and supplies metabolic energy.
• Dendrites: Receive incoming chemical/electrical signals.
• Axon: Conducts impulses away from the cell body.
• Myelin sheath: Insulates the axon and speeds up (increases) nerve impulse transmission.

🇪🇹 አማርኛ (Amharic):
የሴል አካል (Cell body / Soma) ኒውክሊየስን እና ኦርጋኔሎችን በመያዝ ለነርቭ ሴሉ አጠቃላይ አወቃቀርና የሃይል አቅርቦት ድጋፍ ያደርጋል።

🌳 Afaan Oromoo:
Qaamni lubbiyyoo (Cell body) niwukilasii fi orgaaneloota qabachuun lubbiyyichaaf anniisaa dhiyeessaa fi caasaa isaa eega.`,
    hint: 'The neuron cell body (soma) contains metabolic organelles that maintain structure and supply energy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q9',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Nervous System: Action Potential & Nerve Impulse Generation',
    questionText: '9. Which one of the following statements explains how nerve impulse is occurred? It occurs as a result of',
    options: [
      'the movement of neurotransmitter molecules into myelin sheath.',
      'charge difference across the membrane of axon.',
      'balanced charge across the membrane of dendrites.',
      'the movement of neurotransmitter molecules out of cell body.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A nerve impulse (action potential) is generated and propagated by transient changes in electrical potential and ionic distribution (charge difference) across the axonal membrane caused by the rapid flux of Na⁺ and K⁺ ions through voltage-gated ion channels.

🇪🇹 አማርኛ (Amharic):
የነርቭ ግፊት (Nerve impulse / Action potential) የሚፈጠረው በአክሰን ሽፋን (membrane of axon) በኩል በሚፈጠረው የኤሌክትሪክ ክፍያ ልዩነት (charge difference / Na+ and K+ flux) ምክንያት ነው።

🌳 Afaan Oromoo:
Tursiisi narvii (nerve impulse) kan uumamu sababa garaagarummaa chaarjii (charge difference) xuubii akkizoonii (axon membrane) irratti uumamuuni.`,
    hint: 'Nerve impulses occur due to charge differences across the axonal membrane (ion gradients).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q10',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Nervous System: Synaptic Transmission',
    questionText: '10. Which one of the following statements is an acceptable justification of importance of synapse? Synapse is',
    options: [
      'facilitator of the reverse flow of neurotransmitter chemical in neuron',
      'the mechanism of protecting the axon from external damage.',
      'a connection between the appendages of consecutive neurons.',
      'a conductor of action potential towards the end of the dendrite.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A synapse is the specialized junction or functional connection between the terminal end of an axon of one neuron and the dendrite or cell body of a consecutive neuron, mediating communication between neurons.

🇪🇹 አማርኛ (Amharic):
ሳይናፕስ (Synapse) በተከታታይ ነርቮች መካከል የሚገኝ የመገናኛ ነጥብ (connection between consecutive neurons) ሲሆን መረጃዎችን በኬሚካል አስተላላፊዎች አማካኝነት ያስተላልፋል።

🌳 Afaan Oromoo:
'Synapse' jechuun iddoo wal-qunnnamtii narviiwwan wal-hordofanii gidduutti ergaa dabarsuuf tajaajiluudha.`,
    hint: 'A synapse is the functional connection/junction between consecutive neurons.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q11',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Enzymes: Allosteric and Non-competitive Inhibition',
    questionText: '11. Which one the following statements explains how the allosteric inhibitors affect enzymes activities? By binding to the',
    options: [
      'site other than the active site and altering the shape of the active site',
      'substrate and preventing it from binding to the active site',
      'active site of an enzyme and blocking the substrate',
      'active site and altering the shape of the enzyme'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Allosteric inhibitors bind to a specific regulatory site (allosteric site) separate from the enzyme's active site. This induces a conformational change that alters the 3D shape of the active site so that the substrate cannot bind effectively.

🇪🇹 አማርኛ (Amharic):
አሎስቴሪክ ኢንሂቢተሮች (Allosteric inhibitors) ከዋናው ንቁ ቦታ (active site) ውጭ ባለው ሌላ ቦታ ላይ በመያያዝ የንቁ ቦታውን ቅርጽ በመለወጥ ኢንዛይሙ ከንጥረ ነገሩ (substrate) ጋር እንዳይገናኝ ያደርጋሉ።

🌳 Afaan Oromoo:
'Allosteric inhibitors' iddoo 'active site' hin taane irratti qabamuun bifa 'active site' inzaayimichaa jijjiiruun akka 'substrate' wajjin wal hin simne godhu.`,
    hint: 'Allosteric inhibitors bind to a non-active site and change the active site conformation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q12',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Enzymes: Biological Catalysis and Cellular Metabolism',
    questionText: '12. Why are enzymes considered special molecules in metabolism? Because',
    options: [
      'enzymes facilitate metabolic reactions under controlled physiological conditions.',
      'metabolic processes can produce special products in the presence of enzymes.',
      'enzymes are protein molecules that act as a source of energy.',
      'reactions can\'t totally take place in the absence of enzymes.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Enzymes are unique biological catalysts that dramatically accelerate metabolic biochemical reactions under mild, finely controlled physiological conditions (moderate body temperature, neutral pH, and cellular regulation) without being consumed.

🇪🇹 አማርኛ (Amharic):
ኢንዛይሞች ልዩ የሆኑበት ምክንያት በሰውነት ውስጥ ያሉ ውስብስብ የሜታቦሊዝም ኬሚካላዊ ሂደቶች በተመጣጣኝ እና ቁጥጥር ስር ባለ የሰውነት ሁኔታ (physiological conditions) በፍጥነት እንዲካሄዱ ስለሚያደርጉ ነው።

🌳 Afaan Oromoo:
Inzaayimoonni adda kan ta\'aniif wal-nyaatinsa 'metabolism' qaama keessaa haala to\'atamee fi mijataa ta\'een (physiological conditions) saffisiisuu danda\'uu isaaniitiini.`,
    hint: 'Enzymes speed up specific metabolic reactions under mild physiological conditions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q13',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cell Biology: Historical Milestones & Molecular Genetics',
    questionText: '13. Which of the following is the most advanced and recent event in the history of cell biology?',
    options: [
      'Enovation of the first scanning electron microscope',
      'Discovery of the double-helix structure of DNA',
      'Description of the Golgi apparatus',
      'Sequencing of the human genome'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Timeline of events:
• Description of Golgi apparatus: Camillo Golgi (1898)
• First Scanning Electron Microscope (SEM): 1930s-1960s
• Discovery of DNA double-helix: Watson and Crick (1953)
• Sequencing of the human genome: Completed in 2003 (Human Genome Project).
Thus, sequencing the human genome is the most recent and technologically advanced event.

🇪🇹 አማርኛ (Amharic):
በስነ-ህይወት ታሪክ ውስጥ እጅግ ዘመናዊና የቅርብ ጊዜ ክስተት የሰው ልጅ የዘረ-መል ቅደም ተከተልን ሙሉ ለሙሉ መለየት (Sequencing of the human genome - 2003 G.C.) ነው።

🌳 Afaan Oromoo:
Seenaa baayoloojii keessatti dhiheenyatti kan raawwatamee fi teeknooloojii olaanaadhaan kan argame tartiiba jiinii namaa adda baasuu (Sequencing of the human genome) dha.`,
    hint: 'Human Genome Project sequencing was completed in 2003, far more recent than SEM (1930s) or DNA structure (1953).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q14',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biochemistry: Properties of Water & Hydrogen Bonding',
    questionText: '14. Which one of the following properties permits insects to freely walk on water? Its high',
    options: [
      'adhesive force',
      'specific heat capacity',
      'latent heat of vaporization',
      'surface tension'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
High surface tension, resulting from strong cohesive hydrogen bonds between water molecules at the air-water interface, creates an elastic film that supports the weight of light insects (such as water striders) walking on the surface.

🇪🇹 አማርኛ (Amharic):
ነፍሳት በውሃ ወለል ላይ በቀላሉ እንዲራመዱ የሚያስችለው የውሃ ከፍተኛ የሆነ የገጽታ ውጥረት (Surface tension) ባህሪ ነው።

🌳 Afaan Oromoo:
Ilbiisonni bishaan gubbaa akka deemaniif kan gargaaru 'surface tension' (harkisa fuula bishaanii) ol\'aanaa ta\'uu isaati.`,
    hint: 'High surface tension creates an elastic surface film that supports light insects.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q15',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Microscopy: Field of View and Cell Size Measurement',
    questionText: '15. A student focused a slide of an onion epidermal cell on pre-estimated width of 2 millimeter field of view under a microscope. What will be the width of each individual cell if you count 8 cells that fit to the field of view during your observation?',
    options: [
      '16 millimeter',
      '0.40 millimeter',
      '4 millimeter',
      '0.25 millimeter'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
To determine the average width of one cell:
Cell Width = Field of View Diameter / Number of Cells
Cell Width = 2 mm / 8 = 0.25 mm (or 250 µm).

🇪🇹 አማርኛ (Amharic):
የአንድ ህዋስ ስፋት = የዕይታ ክበብ ስፋት / የህዋሶች ብዛት
ስፋት = 2 mm / 8 = 0.25 mm ይሆናል።

🌳 Afaan Oromoo:
Bal\'ina lubbiyyoo tokkoo = Bal\'ina iddoo mul\'atu (FOV) / Baay\'ina lubbiyyoolee
Bal\'ina = 2 mm / 8 = 0.25 mm ta\'a.`,
    hint: 'Width = 2 mm / 8 = 0.25 mm.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q16',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cell Biology: Prokaryotic vs. Eukaryotic Cell Structure',
    questionText: '16. Which one of the following statements is correct about the differences between eukaryotic and prokaryotic cells? Prokaryotic cells have',
    options: [
      'small ribosomes whereas eukaryotic cells have large ribosomes.',
      'membrane bound organelles whereas eukaryotic cells don\'t have it.',
      'cell wall whereas eukaryotic cells don\'t have cell wall.',
      'division of labor whereas eukaryotic cells don\'t have it.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Prokaryotic cells have smaller 70S ribosomes (consisting of 30S and 50S subunits), whereas eukaryotic cells have larger 80S ribosomes (consisting of 40S and 60S subunits) in their cytoplasm.

🇪🇹 አማርኛ (Amharic):
ፕሮካርዮቶች ትናንሽ 70S ራይቦዞሞች ሲኖሯቸው፤ ዩካርዮቶች ደግሞ ትልልቅ 80S ራይቦዞሞች አሏቸው።

🌳 Afaan Oromoo:
Lubbiyyooleen 'prokaryotic' raayiboosomoota xixxiqqoo (70S) kan qaban yoo ta\'u, 'eukaryotic' immoo raayiboosomoota gurguddoo (80S) qabu.`,
    hint: 'Prokaryotes contain 70S (smaller) ribosomes, while eukaryotes possess 80S (larger) cytoplasmic ribosomes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q17',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biology Laboratory Tools & Scientific Equipment',
    questionText: '17. Which biological tool is correctly matched with its function?',
    options: [
      'Burette - to measure mass of a substance',
      'Petri dishes - to culture microorganisms',
      'Centrifuges - to collect insects',
      'Theodolite - to measure the rate of water flow'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Petri dishes are shallow transparent cylindrical dishes with fitted lids designed specifically for culturing microorganisms (bacteria, molds) on nutrient agar plates.

🇪🇹 አማርኛ (Amharic):
ፔትሪ ዲሽ (Petri dishes) ረቂቅ ተሕዋስያንን በቤተ ሙከራ ውስጥ ለማራባትና ለማሳደግ (culture microorganisms) የሚያገለግል የላብራቶሪ ዕቃ ነው።

🌳 Afaan Oromoo:
'Petri dish' maaykiroo-oorgaanizimoota laabraatoorii keessatti baay\'isuuf (culture) tajaajila.`,
    hint: 'Petri dishes are used to culture bacteria and fungi on solid nutrient media.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q18',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cell Biology: Differential Centrifugation & Cell Fractionation',
    questionText: '18. A student centrifuge a solution containing plant material in order to separate them based on their mass. After 10 minutes of centrifugation some of the components move to the bottom (A), others to the middle layer (B) and the remaining once to the top layer (C). Which alternative shows the mass of the components in decreasing order?',
    options: [
      'C > A > B',
      'A > B > C',
      'A = B = C',
      'B > A > C'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
During centrifugation, heavier (denser) components experience the greatest centrifugal force and sediment to the bottom (pellet, A), intermediate mass components settle in the middle (B), and the lightest particles remain suspended in the top layer (supernatant, C). Therefore, in decreasing order of mass: A > B > C.

🇪🇹 አማርኛ (Amharic):
በሴንትሪፊዩጅ ወቅት ክብደት ያላቸው ንጥረ ነገሮች ወደ ታች ይዘቅጣሉ (A)፣ መካከለኛዎቹ መሃል (B) ላይ፣ ቀላል የሆኑት ደግሞ ላይ (C) ይቀራሉ። ስለዚህ በክብደት ቅደም ተከተል፡ A > B > C ይሆናል።

🌳 Afaan Oromoo:
Yeroo 'centrifuge' godhamu wanti ulfaatina qabu gara gadiitti kuufama (A), giddu galeessi (B), salphaan immoo gubbaatti hafa (C). Tartiba ulfaatinatiin: A > B > C ta\'a.`,
    hint: 'Heaviest sediment to bottom (A), intermediate in middle (B), lightest on top (C). So A > B > C.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q19',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Applied Biology: Stem Cell Research & Regenerative Medicine',
    questionText: '19. Which one of the following statements shows the future promise of biological sciences?',
    options: [
      'Using stem cells to repair damaged organs and grow new organ',
      'Finding alternative living place for human population',
      'Finding the adaptation mechanism of plant in new condition',
      'Advising the government on how to conserve environment'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Stem cell technology and regenerative medicine hold major biomedical promise for the future by utilizing undifferentiated stem cells to replace damaged tissues, treat degenerative diseases, and bioengineer transplantable human organs.

🇪🇹 አማርኛ (Amharic):
የስቴም ሴል (Stem cells) ቴክኖሎጂ የተጎዱ የሰውነት ክፍሎችን ለመጠገን እና አዳዲስ የሰውነት አካላትን ለማሳደግ መቻል የወደፊቱ የስነ-ህይወት ሳይንስ ትልቅ ተስፋ ነው።

🌳 Afaan Oromoo:
'Stem cells' fayyadamuun qaamolee miidhaman haaromsuu fi qaamolee haaraa oomishuun abdii guddaa damee baayoloojiiti.`,
    hint: 'Stem cells for organ repair and tissue engineering represent a premier future frontier of biological science.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q20',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biological Molecules: Organic vs. Inorganic Compounds',
    questionText: '20. Which one of the following alternatives contains only organic molecules?',
    options: [
      'Methane, calcium carbonate, linoleic acid and glucose',
      'Glucose, carbon dioxide, glycine and linoleic acid',
      'Methane, glycine, linoleic acid and glucose',
      'Linoleic acid, glucose, calcium carbonate and methane'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Organic molecules contain carbon covalently bonded to hydrogen (hydrocarbons and their biological derivatives).
• Methane (CH4), glycine (amino acid, C2H5NO2), linoleic acid (fatty acid, C18H32O2), and glucose (monosaccharide, C6H12O6) are all organic molecules.
• Note: Calcium carbonate (CaCO3) and Carbon dioxide (CO2) are classified as inorganic.

🇪🇹 አማርኛ (Amharic):
ሚቴን (Methane)፣ ግላይሲን (Glycine)፣ ሊኖሌይክ አሲድ (Linoleic acid) እና ግሉኮስ (Glucose) ሁሉም ኦርጋኒክ ሞለኪውሎች ናቸው። ካልሲየም ካርቦኔት (CaCO3) እና ካርቦን ዳይኦክሳይድ (CO2) ኢንኦርጋኒክ ናቸው።

🌳 Afaan Oromoo:
'Methane', 'glycine', 'linoleic acid' fi 'glucose' hundi isaanii molakiyuulota orgaanikii dha. CaCO3 fi CO2 garuu inorgaanikii dha.`,
    hint: 'CaCO3 and CO2 are inorganic; Methane, glycine, linoleic acid, and glucose are all organic.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q21',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cellular Respiration: Oxidative Phosphorylation & Electron Transport Chain',
    questionText: '21. During oxidative phosphorylation, ATP is produced by combining ADP and inorganic phosphate using energy released from',
    options: [
      'dehydrogenation of pyruvate to acetyl CoA.',
      'transport of electrons from complex IV to complex I.',
      'decarboxylation of citrate to oxaloacetate.',
      'transfer of electrons from NADH/FADH2 to O2.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Oxidative phosphorylation synthesizes ATP using the electrochemical proton gradient created by the electron transport chain, which is powered by the exergonic transfer of high-energy electrons from NADH and FADH2 through protein complexes to oxygen (the terminal electron acceptor).

🇪🇹 አማርኛ (Amharic):
በኦክሲዴቲቭ ፎስፎራይሌሽን ወቅት ATP የሚመረተው ኤሌክትሮኖች ከ NADH/FADH2 ተነስተው በኤሌክትሮን ማስተላለፊያ ሰንሰለት በኩል ወደ ኦክስጅን በሚተላለፉበት ጊዜ በሚወጣው ሃይል ነው።

🌳 Afaan Oromoo:
'Oxidative phosphorylation' keessatti ATP'n kan uumamu anniisaa elektiroononni NADH/FADH2 irraa gara oksijiiniitti daddarban irraa argamuuni.`,
    hint: 'Electron transfer from NADH and FADH2 to oxygen drives proton pumping and ATP synthesis.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q22',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cellular Respiration: Substrate-Level vs. Oxidative Phosphorylation',
    questionText: '22. Which one of the following comparisons between substrate level and oxidative phosphorylation is correct? During substrate-level phosphorylation',
    options: [
      'ATP is made in the cytosol and matrix, but in oxidative phosphorylation it is made on the inner membrane of mitochondria.',
      '34 ATP molecules are produced, but in oxidative phosphorylation ATP molecules are produced per glucose molecule.',
      'protons are pumped into the inter-membrane space, but in oxidative phosphorylation they are pumped into the cytosol.',
      'oxygen is the final electron acceptor, but in oxidative phosphorylation NAD is the electron acceptor.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Substrate-level phosphorylation directly generates ATP in the cytoplasm (during glycolysis) and in the mitochondrial matrix (during the Krebs cycle).
• Oxidative phosphorylation occurs at ATP synthase complexes located on the inner mitochondrial membrane (cristae) driven by the proton gradient.

🇪🇹 አማርኛ (Amharic):
በሰብስትሬት-ደረጃ ፎስፎራይሌሽን (Substrate-level phosphorylation) ATP የሚመረተው በሳይቶሶል (በግላይኮላይሲስ) እና በማይቶኮንድሪያ ማትሪክስ (በክሬብስ ዑደት) ውስጥ ሲሆን፤ በኦክሲዴቲቭ ፎስፎራይሌሽን ደግሞ በማይቶኮንድሪያ የውስጠኛ ሽፋን (inner membrane) ላይ ይመረታል።

🌳 Afaan Oromoo:
'Substrate-level phosphorylation' irratti ATP'n kan hojjetamu saayitoosoolii fi maatriksii keessatti yoo ta\'u, 'oxidative phosphorylation' irratti immoo narqa keessoo maayitookondiriyaa irratti ta\'a.`,
    hint: 'Substrate-level phosphorylation occurs in cytosol and matrix; oxidative phosphorylation occurs on the inner mitochondrial membrane.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q23',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Infectious Diseases: Pathogens and Modes of Transmission',
    questionText: '23. Which one of the following diseases and their mode of transmission is correctly matched?',
    options: [
      'Candidiasis - droplet infection',
      'Salmonellosis - contaminated food',
      'Chicken pox - fecal-oral route',
      'Common cold - direct contact'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Salmonellosis is a bacterial gastrointestinal disease primarily transmitted through the ingestion of food or water contaminated with Salmonella bacteria (such as undercooked eggs, poultry, or unpasteurized dairy).

🇪🇹 አማርኛ (Amharic):
ሳልሞኔሎሲስ (Salmonellosis) በተበከለ ምግብ ወይም ውሃ (contaminated food/water) አማካኝነት የሚተላለፍ የባክቴሪያ በሽታ ነው።

🌳 Afaan Oromoo:
Dhukkubni 'Salmonellosis' nyaata yookiin bishaan faalame fayyadamuun kan daddarbuudha.`,
    hint: 'Salmonellosis is a food-borne bacterial infection transmitted via contaminated food.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q24',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cellular Respiration: Anaerobic Respiration & Lactic Acid Fermentation',
    questionText: '24. Which one of the following determines the cause and effect of lactate production during physical exercise? The demand for',
    options: [
      'an easily absorbable molecule leads to the production of lactate that results in muscle fatigue.',
      'a substrate that can easily release energy leads to production of lactate which results in muscle fatigue.',
      'lower pH in muscle tissues leads to fermentation of respiratory substrates leading to muscle fatigue.',
      'more energy causes muscle cells to ferment respiratory substrates leading to muscle fatigue.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
During intense physical exercise, the cellular demand for ATP exceeds the rate at which oxygen can be delivered to muscles. To maintain rapid energy production, muscle cells switch to anaerobic lactic acid fermentation, regenerating NAD+ while producing lactate, whose accumulation contributes to muscle fatigue.

🇪🇹 አማርኛ (Amharic):
በከባድ የአካል ብቃት እንቅስቃሴ ወቅት ፈጣን የሃይል ፍላጎት መጨመር የጡንቻ ህዋሳት ያለ ኦክስጅን በማፍላት (ferment) ላክቲክ አሲድ እንዲያመርቱ ስለሚያደርግ የጡንቻ መድከምን (muscle fatigue) ያስከትላል።

🌳 Afaan Oromoo:
Sochii qaamaa cimaa keessatti fedhiin anniisaa dabalamee lubbiyyooleen maashaa oksijiinii malee anniisaa akka oomishan taasisa, kunis 'lactate' baay\'isee maashaan akka dadhabu (fatigue) godha.`,
    hint: 'High energy demand during intense exercise triggers lactic fermentation, leading to muscle fatigue.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q25',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Origin of Life: Biochemical Evolution Theory (Oparin-Haldane)',
    questionText: '25. The view of biochemical origin of life hypothesized that the first life-forms appeared in warm primitive ocean and were heterotrophic. Which one of the following statements can support this idea?',
    options: [
      'The appearance of dust of unknown source with microbial spores that can feed on organic molecules.',
      'Life is the inherent property of the universe which permits unlimited existence through usage of resource in it.',
      'The formation of abundant organic molecules due to radiations and the absence of oxygen led to the primitive living organisms.',
      'Resistant spores from meteorites reached to the earth and used organic molecules to survive in the environment.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The Oparin-Haldane biochemical evolution theory posits that in the primitive, oxygen-free reducing atmosphere, energy from lightning and solar UV radiation synthesized a rich prebiotic soup of organic molecules in primordial oceans, which nourished the first heterotrophic, anaerobic life-forms.

🇪🇹 አማርኛ (Amharic):
የስነ-ህይወት አመጣጥ ፅንሰ-ሀሳብ (Biochemical evolution) እንደሚያስረዳው ኦክስጅን ባልነበረበት ጥንታዊ ምድር ላይ በጨረር እና በመብረቅ አማካኝነት የበለጸጉ ኦርጋኒክ ሞለኪውሎች መፈጠራቸው የመጀመሪያዎቹ ህይወት ያላቸው ፍጥረታት እንዲፈጠሩ መሰረት ጥሏል።

🌳 Afaan Oromoo:
Yaad-rimeen uumama lubbuu (biochemical evolution) akka ibsutti, lafa durii oksijiinii hin qabne keessatti raadiyaashiniin molakiyuulota orgaanikii baay\'ee uumuun orgaanizimoota jalqabaatiif bu\'uura ta\'e.`,
    hint: 'Synthesis of abundant prebiotic organic molecules without oxygen supported the first heterotrophs in primordial seas.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
