import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2018_EC_PART3: Question[] = [
  {
    id: 'bio-2018-q51',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Human Physiology: Metabolic Roles of the Liver',
    questionText: '51. Which of the following statements correctly summarizes the physiological functions of the human liver?',
    options: [
      'It secretes digestive proteases directly into the stomach lumen',
      'It produces bile to emulsify lipids, deaminates excess amino acids to urea, and stores glycogen',
      'It stores bile continuously and absorbs monosaccharides into lymphatic lacteals',
      'It produces insulin and glucagon to directly control pancreatic enzymatic secretion'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The liver is the body's chief metabolic factory with multifaceted roles:
1. Exocrine/Digestive: Produces bile containing bile salts to emulsify dietary lipids and neutralize acidic gastric chyme in the duodenum.
2. Nitrogen metabolism: Deaminates surplus amino acids, converting toxic ammonia into urea via the urea cycle.
3. Carbohydrate & storage: Synthesizes and stores glycogen from glucose, storing fat-soluble vitamins (A, D, E, K), vitamin B12, and ferritin (iron).

🇪🇹 አማርኛ (Amharic):
የጉበት ዋና ዋና ተግባራት፡ ቅባቶችን የሚያላላ (emulsify) ሃሞት (bile) ማመንጨት፣ ትርፍ አሚኖ አሲዶችን ወደ ዩሪያ (urea) መቀየር፣ እና ግሉኮስን በግላይኮጅን መልክ ማከማቸት ናቸው።

🌳 Afaan Oromoo:
Hojiileen bu'uuraa tiruu (liver): dhangala'aa 'bile' kan cooma bullessu maddisiisuu, asiidota aminoo hafan gara yuuriyaatti jijjiiruu, fi giluukoosii akka gilaayikoojiiniitti kuusuudha.`,
    hint: 'The liver produces bile, deaminates excess amino acids into urea, and stores glycogen.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q52',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Homeostasis: Concept of Internal Dynamic Equilibrium',
    questionText: '52. The physiological ability of an organism to regulate and maintain a stable, relatively constant internal environment despite fluctuating external environmental changes is called',
    options: [
      'Metabolism',
      'Homeostasis',
      'Osmoregulation',
      'Thermoregulation'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Homeostasis (derived from Greek homoios = similar, stasis = standing still) is the coordinated physiological regulation by which biological systems actively maintain internal physical and chemical parameters (such as core temperature, blood pH, glucose concentration, and fluid osmolarity) within tight dynamic limits through negative feedback mechanisms.

🇪🇹 አማርኛ (Amharic):
አንድ ህይወት ያለው ፍጡር የውጭ አካባቢ ሁኔታዎች ቢለዋወጡም እንኳ የውስጥ የሰውነት ሁኔታውን (የደም ስኳር፣ ሙቀትና ፒኤች) ተመጣጣኝና ቋሚ አድርጎ የመጠበቅ ችሎታው ሆሚዮስታሲስ (Homeostasis) ይባላል።

🌳 Afaan Oromoo:
Dandeettiin orgaanizimiin tokko jijjiirama naannoo alaa danda'ee haala qabatamaa qaama keessaa tasgabbaa'aa taasisee eeguu 'Homeostasis' jedhama.`,
    hint: 'Homeostasis is the maintenance of a stable internal environment despite external fluctuations.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q53',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Molecular Genetics: Semi-Conservative DNA Replication',
    questionText: '53. DNA replication is described as semi-conservative because each newly replicated double-stranded DNA molecule consists of',
    options: [
      'one original parental strand and one newly synthesized complementary strand.',
      'two newly synthesized strands joined together after replication.',
      'interspersed patches of old parental and new synthesized DNA nucleotides.',
      'two conserved parental strands that rejoin after acting as templates.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
As proven by the Meselson-Stahl experiment (1958), DNA replicates via a semi-conservative mechanism: the parental double helix unwinds, and each individual parental strand acts as a template for synthesizing a new complementary strand. Consequently, each daughter double helix contains one intact original parental strand and one newly polymerized daughter strand.

🇪🇹 አማርኛ (Amharic):
የዲኤንኤ መባዛት (DNA replication) ሴሚ-ኮንሰርቫቲቭ የሚባለው እያንዳንዱ አዲስ የተሰራ የዲኤንኤ ድርብ ክር አንድ የመጀመሪያ የወላጅ ክር (parental strand) እና አንድ አዲስ የተሰራ ክር (newly synthesized strand) ስላለው ነው።

🌳 Afaan Oromoo:
DNA'n 'semi-conservative' kan jedhamu molakiyuuliin DNA haaraa uumamu hundinuu luqqeettii takka kan warraa (parental) fi luqqeettii takka kan haaraa ijaaramee (new strand) of keessaa waan qabuufi.`,
    hint: 'Semi-conservative replication preserves one original parental strand paired with one newly synthesized strand.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q54',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Nervous System: Synaptic Transmission',
    questionText: '54. What is a chemical synapse in the nervous system?',
    options: [
      'An insulating myelin sheath covering peripheral axon segments',
      'The electrical junction connecting cell body to dendrites',
      'A microscopic gap between two neurons where neurotransmitters transmit impulses',
      'A receptor cell converting physical touch into mechanical vibrations'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A synapse is the specialized junction across which a nerve impulse is transmitted between two excitable cells (e.g., between an axon terminal of a presynaptic neuron and the dendrite or soma of a postsynaptic neuron). At a chemical synapse, action potentials trigger the exocytosis of chemical neurotransmitters (like acetylcholine) into the synaptic cleft, which diffuse across and bind to postsynaptic receptors.

🇪🇹 አማርኛ (Amharic):
ሳይናፕስ (Synapse) በሁለት የነርቭ ህዋሳት (neurons) መካከል የሚገኝ ክፍተት ሲሆን የነርቭ መልእክቶች በኒውሮትራንስሚተር (neurotransmitters) ኬሚካሎች አማካኝነት ከአንዱ ወደ ሌላው የሚተላለፉበት መገናኛ ነው።

🌳 Afaan Oromoo:
'Synapse'n gidduu seelota narvii lamatti qaawwa xiqqoo jiru ta'ee, keemikaalota 'neurotransmitter' jedhamaniin ergaan narvii seelii tokkorraa gara kan biraatti kan darbuudha.`,
    hint: 'A synapse is the microscopic junction across which neurons communicate chemically using neurotransmitters.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q55',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Biogeochemical Cycles: Biological Nitrogen Fixation',
    questionText: '55. In the global nitrogen cycle, the biological conversion of inert atmospheric nitrogen gas (N₂) into bioavailable ammonia (NH₃) or ammonium ions by symbiotic bacteria like Rhizobium is termed',
    options: [
      'Nitrogen fixation',
      'Nitrification',
      'Denitrification',
      'Ammonification'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Nitrogen fixation is the reduction of atmospheric gaseous dinitrogen (N₂) into reactive nitrogen forms (ammonia, NH₃) catalyzed by the nitrogenase enzyme complex. This process is carried out by free-living diazotrophs (e.g., Azotobacter) and symbiotic bacteria (such as Rhizobium residing in root nodules of leguminous plants). (Nitrification converts NH₄⁺ to NO₂⁻ and NO₃⁻; denitrification reduces NO₃⁻ back to N₂).

🇪🇹 አማርኛ (Amharic):
በከባቢ አየር ውስጥ ያለውን ነፃ ናይትሮጅን ጋዝ (N₂) ራይዞቢየም (Rhizobium) የተባሉ ባክቴሪያዎች ዕፅዋት ሊጠቀሙበት ወደሚችሉበት ወደ አሞኒያ (NH₃) የሚቀይሩበት ሂደት ናይትሮጅን ፊክሴሽን (Nitrogen fixation) ይባላል።

🌳 Afaan Oromoo:
Gaasii naayitiroojiinii qilleensa keessaa baakteeriyaan 'Rhizobium' gara kompaawundii biqiltoonni xuuxuu danda'aniitti (Amooniyaatti) jijjiiruun 'Nitrogen fixation' jedhama.`,
    hint: 'Nitrogen fixation converts atmospheric N₂ into bioavailable ammonia (NH₃).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q56',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Endocrine Coordination: The Pituitary Gland (Master Gland)',
    questionText: '56. Which endocrine gland is referred to as the "master gland" because it secretes numerous trophic hormones (such as TSH, ACTH, FSH, and LH) that regulate the hormonal output of other endocrine glands?',
    options: [
      'Thyroid gland',
      'Pituitary gland (Hypophysis)',
      'Adrenal cortex',
      'Pancreatic islets'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The pituitary gland (hypophysis), positioned at the base of the brain under hypothalamic control, is termed the "master endocrine gland." Its anterior lobe secretes tropic hormones (including Thyroid-Stimulating Hormone [TSH], Adrenocorticotropic Hormone [ACTH], Follicle-Stimulating Hormone [FSH], and Luteinizing Hormone [LH]) that orchestrate the activity of the thyroid, adrenal cortex, and gonads.

🇪🇹 አማርኛ (Amharic):
ፒቱታሪ ግላንድ (Pituitary gland) ሌሎች የሆርሞን አመንጪ እጢዎችን (እንደ ታይሮይድ፣ አድሬናል እና ጎናድስ) የሚቆጣጠሩ ሆርሞኖችን በማመንጨቱ "ዋና እጢ" ወይም "Master gland" በመባል ይጠራል።

🌳 Afaan Oromoo:
Xannachi 'Pituitary gland' xannachoota biroo hedduu to'achuuf hormoonota kan akka TSH, ACTH fi LH waan maddisiisuuf "xannacha angafa" (master gland) jedhama.`,
    hint: 'The pituitary gland produces tropic hormones that regulate other endocrine glands.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q57',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cell Division: Genetic Recombination in Meiosis I',
    questionText: '57. Crossing over, the physical reciprocal exchange of non-sister chromatid genetic segments between homologous chromosomes, takes place during which stage of meiosis?',
    options: [
      'Metaphase I',
      'Anaphase I',
      'Telophase II',
      'Prophase I'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Crossing over occurs during Prophase I of meiosis (specifically during the pachytene sub-stage). Homologous chromosomes undergo synapsis to form four-chromatid tetrad complexes. Non-sister chromatids break and rejoin at contact points called chiasmata, producing novel recombinant allelic combinations that drive genetic diversity in sexual reproduction.

🇪🇹 አማርኛ (Amharic):
ክሮሲንግ ኦቨር (Crossing over) ወይም የዘረ-መል መለዋወጥ ሂደት የሚካሄደው በመጀመሪያው የሴል ክፍፍል ፕሮፌዝ 1 (Prophase I) ደረጃ ላይ ነው። ይህም ለአዳዲስ የዘረ-መል ጥንቅሮችና ልዩነቶች መፈጠር ምክንያት ነው።

🌳 Afaan Oromoo:
Wal-jijjiirraan qooda jeneetikii (crossing over) kutaalee kuroomaatidii gidduutti raawwatamu sadarkaa meeyoosisii 'Prophase I' keessatti gaggeeffama.`,
    hint: 'Crossing over between homologous chromosomes occurs during Prophase I of meiosis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q58',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cellular Respiration: Glycolysis End Products',
    questionText: '58. What is the primary 3-carbon organic end product formed at the conclusion of glycolysis in the cytosol before entering the mitochondrion for aerobic respiration?',
    options: [
      'Pyruvate (Pyruvic acid)',
      'Acetyl-Coenzyme A',
      'Lactic acid',
      'Citrate'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Glycolysis is a ten-step cytosolic enzymatic pathway that cleaves one 6-carbon glucose molecule into two 3-carbon molecules of pyruvate (pyruvic acid), while producing a net yield of 2 ATP and 2 NADH. Under aerobic conditions, pyruvate is transported across the mitochondrial membranes and oxidatively decarboxylated into Acetyl-CoA by the pyruvate dehydrogenase complex.

🇪🇹 አማርኛ (Amharic):
በሳይቶፕላዝም ውስጥ በሚከናወነው የግላይኮላይሲስ (glycolysis) ሂደት መጨረሻ ላይ ባለ 6-ካርቦን ግሉኮስ ተሰብሮ ወደ ሁለት ባለ 3-ካርቦን ፓይሩቬት (Pyruvate / Pyruvic acid) ሞለኪውሎች ይቀየራል።

🌳 Afaan Oromoo:
Adeemsa gilaayikoolayisiisii keessatti giluukoosiin tokko caccabee gara molakiyuulota paayiruveetii (pyruvate) lamatti jijjiirama.`,
    hint: 'Glycolysis breaks down glucose into two 3-carbon molecules of pyruvate.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q59',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Renal Physiology: Microscopic Functional Unit of the Kidney',
    questionText: '59. What is the microscopic, functional filtration and urine-forming unit of the human kidney?',
    options: [
      'Renal pelvis',
      'Urinary bladder',
      'Nephron',
      'Medullary pyramid'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The nephron is the microscopic structural and functional unit of the vertebrate kidney. Each human kidney contains roughly one million nephrons. A nephron consists of a renal corpuscle (Bowman\'s capsule enclosing the glomerulus for ultrafiltration) and an extensive renal tubule system (proximal convoluted tubule, loop of Henle, and distal convoluted tubule) for selective reabsorption and tubular secretion.

🇪🇹 አማርኛ (Amharic):
የሰው ልጅ ኩላሊት መሰረታዊ የደም ማጣሪያ እና ሽንት አዘጋጅ ጥቃቅን መዋቅር ኔፍሮን (Nephron) ይባላል። እያንዳንዱ ኩላሊት ወደ አንድ ሚሊዮን የሚጠጉ ኔፍሮኖች አሉት።

🌳 Afaan Oromoo:
Kutaan xiqqaa bu'uuraa dhiiga calaluu fi fincaan oomishu kan kalee namaa keessatti argamu 'Nephron' jedhama.`,
    hint: 'The nephron is the microscopic functional filtration unit of the kidney.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q60',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Physiology: Phloem Translocation Mechanism',
    questionText: '60. Which scientific model best explains the long-distance translocation of photosynthesized organic solutes (sucrose) through plant phloem sieve tubes from source to sink?',
    options: [
      'Cohesion-Tension theory',
      'Pressure-Flow (Mass-Flow) hypothesis',
      'Root pressure hypothesis',
      'Capillarity theory'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Ernst Münch\'s Pressure-Flow (Mass-Flow) hypothesis explains phloem transport: active loading of sucrose at source leaves reduces water potential in sieve tubes, drawing water from adjacent xylem by osmosis and generating high hydrostatic pressure. At metabolic sinks (roots, fruits), sucrose is unloaded, water exits back into xylem, and the resulting hydrostatic pressure gradient drives mass flow through the phloem.

🇪🇹 አማርኛ (Amharic):
በዕፅዋት ፍሎይም (phloem) ውስጥ የተዘጋጁ ምግቦች (ሱክሮስ) ከቅጠል ወደ ሌሎች ክፍሎች የሚጓጓዙበትን ሳይንሳዊ ሂደት የሚያስረዳው የፕሬሸር ፍሎው መላ ምት (Pressure-Flow / Mass-Flow hypothesis) ይባላል።

🌳 Afaan Oromoo:
Sochiin soorataa fi sukkaaraa (sucrose) ujummoo 'phloem' keessaan kallattii maddarraa gara kuusaatti yaa'u yaada saayinsaawaa 'Pressure-Flow hypothesis' jedhamuun ibsama.`,
    hint: 'Münch proposed the Pressure-Flow (Mass-Flow) hypothesis to explain phloem translocation.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q61',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Taxonomy: Linnaean Hierarchical Classification',
    questionText: '61. In biological classification, which taxonomic rank contains individual organisms that are most closely related and capable of interbreeding under natural conditions to produce fertile offspring?',
    options: [
      'Genus',
      'Family',
      'Order',
      'Species'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The biological species concept defines a species as the most fundamental and specific taxon in the Linnaean hierarchy. It comprises a group of morphologically and genetically similar natural populations whose members can interbreed among themselves in nature to produce viable, fertile offspring, and are reproductively isolated from other such groups.

🇪🇹 አማርኛ (Amharic):
በስነ-ህይወት ምደባ ውስጥ እርስ በእርሳቸው ተዋልደው የሚራቡ እና የመራባት አቅም ያላቸው ልጆችን መውለድ የሚችሉ ፍጡራን የሚመደቡበት ዝቅተኛው እና መሰረታዊው ደረጃ ዝርያ (Species) ይባላል።

🌳 Afaan Oromoo:
Sadarkaan taaksoonoomii wal-nyaatanii dhaloota akka isaanii horaa ta'e oomishuu danda'an 'Species' (Gosa) jedhama.`,
    hint: 'Species is the lowest, most specific taxon whose members interbreed to produce fertile offspring.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q62',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Biology: Photosynthesis Photochemical Reactions',
    questionText: '62. In green plant chloroplasts, where do the light-dependent reactions of photosynthesis (including photolysis of water, electron transport, and ATP/NADPH synthesis) take place?',
    options: [
      'Thylakoid membranes (grana)',
      'Aqueous stroma',
      'Outer chloroplast membrane',
      'Intermembrane space'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The light-dependent reactions of photosynthesis occur exclusively within the thylakoid membranes (stacked into disc-like grana) of the chloroplast. The thylakoid membranes house Photosystems II and I, chlorophyll and carotenoid pigments, electron transport complexes (cytochrome b6f), and ATP synthase enzymes. (The light-independent Calvin cycle takes place in the fluid stroma).

🇪🇹 አማርኛ (Amharic):
የብርሃን ጥገኛ የሆነው የፎቶሲንተሲስ ክፍል (ውሃን በብርሃን መሰበር፣ ኤሌክትሮን ማስተላለፍ እና ATP/NADPH ማመንጨት) የሚከናወነው በክሎሮፕላስት ታይላኮይድ ሜምብሬን (Thylakoid membranes / grana) ላይ ነው።

🌳 Afaan Oromoo:
Wal-nyaatinsi ifa irratti hirkatu kan adeemsa footosinteesisiitiif oolu 'Thylakoid membrane' (grana) kiliroopilaastii keessatti raawwatama.`,
    hint: 'Photosystems and ATP synthase of light-dependent reactions are embedded in the thylakoid membrane.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q63',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Hematology: ABO and Rhesus Blood Typing',
    questionText: '63. Why is an individual with blood type AB positive (AB+) designated as the universal recipient in blood transfusions?',
    options: [
      'Their red blood cells lack both A and B surface antigens',
      'Their blood plasma contains both anti-A and anti-B antibodies',
      'Their blood plasma lacks both anti-A and anti-B antibodies, and their RBCs have the Rh antigen',
      'Their red blood cells are immune to agglutination by donor plasma antibodies'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Individuals with AB+ blood express both A and B glycoprotein antigens as well as the Rhesus (RhD) antigen on their erythrocyte membranes. As a direct result, their blood plasma naturally lacks both anti-A and anti-B isoantibodies and does not produce anti-Rh antibodies, allowing them to safely receive red blood cells from any ABO/Rh donor group without triggering hemolytic agglutination.

🇪🇹 አማርኛ (Amharic):
የደም አይነት AB ፖዘቲቭ (AB+) ያላቸው ሰዎች በፕላዝማቸው ውስጥ ፀረ-A (anti-A) ወይም ፀረ-B (anti-B) አንቲቦዲ ስለሌላቸው እና የRh አንቲጅን ስላላቸው ከማንኛውም የደም አይነት ደም መቀበል ይችላሉ (Universal recipient)።

🌳 Afaan Oromoo:
Dhiigni gosa AB+ dhangala'aa dhiigaa (plasma) isaa keessatti 'anti-A' ykn 'anti-B' waan hin qabneef gosa dhiigaa kamirraayyuu fudhachuu danda'a (universal recipient).`,
    hint: 'Type AB+ plasma lacks anti-A and anti-B antibodies, preventing agglutination of incoming donor RBCs.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q64',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Enzymology: Competitive vs. Non-Competitive Inhibition',
    questionText: '64. How does a competitive enzyme inhibitor decrease the rate of an enzymatic reaction?',
    options: [
      'It binds covalently to the enzyme substrate to permanently alter its shape',
      'It closely resembles the substrate and binds reversibly to the enzyme active site',
      'It binds to an allosteric site to denature the tertiary structure of the enzyme',
      'It permanently hydrolyzes the polypeptide backbone of the catalytic subunit'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A competitive inhibitor possesses a chemical and steric structure that closely mimics the natural substrate of an enzyme. It directly competes with the substrate for binding to the enzyme's catalytic active site. This inhibition is reversible and can be completely overcome by increasing the substrate concentration (which raises the apparent Km without altering Vmax).

🇪🇹 አማርኛ (Amharic):
ኮምፒቲቲቭ ኢንሂቢተር (Competitive inhibitor) ከትክክለኛው ንጥረ-ነገር (substrate) ጋር ተመሳሳይ ቅርጽ ስላለው በቀጥታ ከኢንዛይሙ አክቲቭ ሳይት (active site) ጋር በመፎካከር ይተሳሰራል፤ የንጥረ-ነገሩን መጠን በመጨመር ይህን ፉክክር ማሸነፍ ይቻላል።

🌳 Afaan Oromoo:
'Competitive inhibitor'n boca 'substrate' fakkaatu qabaachuun kallattiin bakka hojii inzaayimii (active site) irratti dorgomuun hidhata; dhangala'aa 'substrate' dabaluun dhiibbaa isaa mo'uun ni danda'ama.`,
    hint: 'Competitive inhibitors share structural similarity with the substrate and bind to the active site.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q65',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ecology: Ecological Succession (Primary vs. Secondary)',
    questionText: '65. Which of the following environmental scenarios initiates primary ecological succession?',
    options: [
      'Colonization of freshly cooled volcanic lava or exposed bare bedrock',
      'Regrowth of vegetation in an abandoned agricultural farmland',
      'Recovery of an aquatic community following seasonal lake flooding',
      'Regeneration of a temperate forest following a clearing wildfire'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Primary succession occurs in lifeless barren areas where no pre-existing biological community or soil substrate exists—such as cooled volcanic basalt lava flows, newly emerged sand dunes, or retreat of glacial bedrock. Pioneer species (lichens and mosses) must first weather rock into primitive soil. (Regrowth in burned forests or abandoned farmlands where soil already exists is secondary succession).

🇪🇹 አማርኛ (Amharic):
ፕራይመሪ ሰክሴሽን (Primary succession) የሚጀምረው ምንም ዓይነት አፈርና ቀደም ሲል የነበረ ህይወት በሌለበት አካባቢ ነው፤ ለምሳሌ በደረቀ የእሳተ ገሞራ ላቫ ወይም በባዶ አለት ላይ አዳዲስ ፈር-ቀዳጅ ዝርያዎች (lichens) አፈር ማዘጋጀት ሲጀምሩ።

🌳 Afaan Oromoo:
'Primary succession'n lafa duraan dachee qullaa ture, biyyoofi lubbu-qabeessa hin qabne kan akka dhagaa laavaa volkaanoo irraa eegala.`,
    hint: 'Primary succession begins in areas devoid of soil, such as bare rock or cooled volcanic lava.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q66',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Physiology: Gaseous Plant Hormones (Ethylene)',
    questionText: '66. Which gaseous plant hormone is primarily responsible for triggering and accelerating the climacteric ripening of fleshy fruits and promoting leaf abscission?',
    options: [
      'Gibberellic acid',
      'Abscisic acid (ABA)',
      'Cytokinin',
      'Ethylene (Ethene)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Ethylene (C₂H₄) is a unique gaseous phytohormone synthesized by ripening fruit tissues, senescing leaves, and nodal regions. It coordinates fruit ripening by upregulating cellulases, pectinases (softening cell walls), and amylases (converting starches into sugars), as well as triggering enzyme synthesis in the petiole abscission layer causing leaf drop.

🇪🇹 አማርኛ (Amharic):
ፍራፍሬዎች በፍጥነት እንዲበስሉ (fruit ripening) እና የደረቁ ቅጠሎች ከቅርንጫፍ እንዲረግፉ የሚያደርገው በጋዝ መልክ የሚገኘው የዕፅዋት ሆርሞን ኤትሊን (Ethylene) ይባላል።

🌳 Afaan Oromoo:
Hormooniin biqiltootaa bifa gaasiitiin argamuufi firiiwwan akka bilchaatanii fi baalli akka harca'u taasisu 'Ethylene' jedhama.`,
    hint: 'Ethylene is the gaseous phytohormone that promotes fruit ripening.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q67',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cardiovascular Physiology: Mechanics of Heart Sounds',
    questionText: '67. During the cardiac cycle, what mechanical event causes the first heart sound ("lub" or S₁)?',
    options: [
      'Closure of the aortic and pulmonary semilunar valves at ventricular diastole',
      'Closure of the tricuspid and bicuspid (mitral) atrioventricular valves at ventricular systole',
      'Turbulent inflow of blood into relaxed ventricular chambers during passive diastole',
      'Vibration of the atrial myocardium during contraction of the sinoatrial node'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The first heart sound ("lub" / S₁) is produced at the onset of ventricular systole when the contracting ventricular myocardium causes intraventricular pressure to exceed atrial pressure. This pressure differential snaps shut the atrioventricular (AV) valves—the tricuspid and mitral/bicuspid valves—reverberating blood against closed leaflets. (The second sound, "dub" / S₂, is caused by semilunar valve closure).

🇪🇹 አማርኛ (Amharic):
የመጀመሪያው የልብ ድምፅ ("lub" ወይም S₁) የሚሰማው በልብ መኮማተር ወቅት ደም ወደ አትሪየም እንዳይመለስ የአትሪዮቬንትሪኩላር ቫልቮች (Tricuspid and Mitral valves) በድንገት ሲዘጉ በሚፈጠር ንዝረት ነው።

🌳 Afaan Oromoo:
Sagaleen onnee jalqabaa ("lub") kan dhaga'amu yeroo kottoonfannaa onneetti cufamuu vaalvota 'tricuspid' fi 'bicuspid' irraan kan ka'eedha.`,
    hint: 'The "lub" sound (S₁) is produced by the closure of the atrioventricular (AV) valves.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q68',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Genetic Engineering: Restriction Enzymes (Molecular Scissors)',
    questionText: '68. In recombinant DNA technology, which enzymes act as "molecular scissors" by cleaving phosphodiester bonds at specific palindromic nucleotide sequences?',
    options: [
      'DNA Ligases',
      'DNA Polymerases',
      'Restriction Endonucleases',
      'Reverse Transcriptases'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Restriction endonucleases (restriction enzymes, e.g., EcoRI, HindIII) are bacterial defensive enzymes utilized as "molecular scissors" in molecular biology. They recognize specific palindromic DNA sequences (usually 4–8 base pairs long) and hydrolyze phosphodiester bonds within both strands, yielding sticky or blunt ends for gene insertion. (DNA ligase acts as "molecular glue").

🇪🇹 አማርኛ (Amharic):
በጀነቲክ ኢንጂነሪንግ ውስጥ የዲኤንኤ ሞለኪውልን በተወሰኑ የተመረጡ ቦታዎች ላይ ቆርጠው የሚያወጡ ኢንዛይሞች ሬስትሪክሽን ኢንዶኒውክሊየስ (Restriction Endonucleases) ይባላሉ።

🌳 Afaan Oromoo:
Inzaayimonni akka maqasii ta'uun bakka murtaa'aa irratti DNA kutan 'Restriction Endonucleases' jedhamuun beekamu.`,
    hint: 'Restriction endonucleases cut DNA at specific palindromic recognition sites.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q69',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Human Nervous System: Functional Anatomy of the Brain (Cerebellum)',
    questionText: '69. Which anatomical division of the human hindbrain coordinates voluntary muscle movements, posture, and equilibrium?',
    options: [
      'Cerebellum',
      'Hypothalamus',
      'Cerebrum',
      'Medulla oblongata'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The cerebellum (located dorsally in the hindbrain underneath the occipital lobes) is the master coordinator of motor activity. It integrates sensory proprioceptive inputs from muscles, tendons, joints, and vestibular semicircular canals to calibrate smooth voluntary skeletal movements, maintain posture, and preserve equilibrium and balance.

🇪🇹 አማርኛ (Amharic):
ሴሬቤለም (Cerebellum) በሰው ልጅ ጭንቅላት ጀርባ የሚገኝ የአንጎል ክፍል ሲሆን ዋና ተግባሩ የጡንቻዎች እንቅስቃሴን፣ የሰውነት ሚዛንን እና አቋምን (balance and posture) ማስተባበር ነው።

🌳 Afaan Oromoo:
Kutaan sammuu duubaa 'Cerebellum' jedhamu soochii maashaalee, qajeelummaa fi madaallii qaama namaa (balance) to'achuun beekama.`,
    hint: 'The cerebellum fine-tunes motor coordination, posture, and physical balance.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q70',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cell Transport: Active Transport in Plant Root Hairs',
    questionText: '70. The uptake of essential mineral ions (such as nitrates and potassium) from low soil concentrations into plant root hair cells against a steep concentration gradient occurs via',
    options: [
      'Simple diffusion',
      'Osmosis',
      'Facilitated diffusion',
      'Active transport'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The concentration of dissolved mineral ions in soil water is typically substantially lower than within root hair cell sap. Root epidermal cells must transport these essential nutrients uphill against their chemical concentration gradient, utilizing specialized transmembrane carrier proteins and metabolically derived ATP energy—a process defined as active transport.

🇪🇹 አማርኛ (Amharic):
የዕፅዋት ስሮች በአፈር ውስጥ በዝቅተኛ መጠን የሚገኙትን ማዕድናት ወደ ስራቸው ህዋሳት ወደተከማቸበት ከፍተኛ መጠን ለማስገባት ኃይል (ATP) በመጠቀም የሚያካሂዱት ዝውውር አክቲቭ ትራንስፖርት (Active transport) ይባላል።

🌳 Afaan Oromoo:
Biqiltoonni albuudota xiqqaatanii biyyoo keessa jiran humna (ATP) fayyadamuun gara seelota hiddaatti kan ol-xuuxan mala 'active transport' jedhamuuni.`,
    hint: 'Movement of substances against a concentration gradient requiring ATP is active transport.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q71',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Respiratory Physiology: Oxygen Transport via Hemoglobin',
    questionText: '71. How is approximately 98.5% of total molecular oxygen transported in the human systemic bloodstream from pulmonary alveoli to respiring tissues?',
    options: [
      'Physically dissolved in blood plasma water',
      'Reversibly bound to hemoglobin as oxyhemoglobin inside red blood cells',
      'Chemically bound to plasma bicarbonate ions',
      'Carried as carbamino compounds on leukocyte surfaces'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Because oxygen has very low physical solubility in aqueous solutions (only ~1.5% dissolves directly in plasma), approximately 98.5% of blood oxygen is transported reversibly bound to the four iron (Fe²⁺) heme moieties of hemoglobin tetramers inside erythrocytes as oxyhemoglobin (HbO₈).

🇪🇹 አማርኛ (Amharic):
በሰው ደም ውስጥ ወደ 98.5% የሚሆነው ኦክስጅን ከሳንባ ወደ መላ ሰውነት የሚጓጓዘው በቀይ የደም ህዋሳት ውስጥ ባለው ሄሞግሎቢን (hemoglobin) ፕሮቲን ጋር በኬሚስትሪ ተሳስሮ እንደ ኦክሲሄሞግሎቢን (oxyhemoglobin) በመሆን ነው።

🌳 Afaan Oromoo:
Oksijiiniin dhiiga namaa keessatti dhibbeentaa 98.5% kan ta'u seelota dhiiga diimaa keessatti pirootiinii hiimoogilobiinii wajjin wal-qabatee akka 'oxyhemoglobin'tti geeffama.`,
    hint: 'Over 98% of oxygen in human blood is carried as oxyhemoglobin in red blood cells.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q72',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Human Genetics: Molecular Basis of Sickle Cell Anemia',
    questionText: '72. Sickle cell anemia is a hereditary hemoglobinopathy caused by a single point missense mutation (GAG to GTG) in the β-globin gene, substituting which amino acid in place of normal glutamic acid at codon position 6?',
    options: [
      'Alanine',
      'Lysine',
      'Valine',
      'Glycine'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In the human β-globin gene on chromosome 11, a point mutation converts the sixth codon from GAG (coding for negatively charged hydrophilic glutamic acid) to GTG (coding for non-polar hydrophobic valine). The hydrophobic valine residue creates sticky hydrophobic patches on deoxygenated hemoglobin (HbS), causing them to polymerize into rigid fibrous strands that deform red blood cells into a sickle shape.

🇪🇹 አማርኛ (Amharic):
የሲክል ሴል አኒሚያ (Sickle cell anemia) በሽታ በዘረ-መል ላይ በሚፈጠር የአንድ ቤዝ ለውጥ ምክንያት ግሉታሚክ አሲድ (glutamic acid) በቫሊን (valine) የተባለ አሚኖ አሲድ ሲተካ የሚከሰት ህመም ነው።

🌳 Afaan Oromoo:
Dhukkubni dhiigaa 'Sickle cell anemia' bakka asiidii amiinoo 'glutamic acid' jedhamu jijjiiramuun 'valine'n bakka bu'uu irraan kan ka'eedha.`,
    hint: 'Valine replaces glutamic acid at position 6 of the β-globin chain in sickle cell disease.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q73',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ecosystem Energetics: The Ten Percent Law of Energy Transfer',
    questionText: '73. According to Lindeman\'s 10% rule in ecology, why is only approximately 10% of the energy stored in biomass transferred from one trophic level to the next consecutive level?',
    options: [
      'Most energy is dissipated as metabolic heat during cellular respiration, excretion, and unconsumed biomass',
      'Primary consumers destroy chemical bonds through incomplete mechanical digestion',
      'Solar radiation decreases linearly as organisms move up the food chain',
      'Decomposers consume all available kinetic energy before consumers feed'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In ecosystems, the trophic transfer efficiency averages only about 10% (the 10% Law). The remaining ~90% of ingested energy is lost at each step due to metabolic work (cellular respiration generating metabolic heat according to the second law of thermodynamics), locomotion, excretion of feces/urine, and parts of organisms that die without being consumed.

🇪🇹 አማርኛ (Amharic):
በምግብ ሰንሰለት ከአንዱ ደረጃ ወደ ቀጣዩ ደረጃ የሚተላለፈው 10% ኃይል ብቻ ሲሆን ቀሪው 90% የሚሆነው ኃይል በእንቅስቃሴ፣ በመተንፈስ፣ በቆሻሻ አወጋገድ እና በሙቀት መልክ (metabolic heat) ይባክናል።

🌳 Afaan Oromoo:
Sadarkaa soorataa tokkorraa gara isa biraatti anniisaan darbu 10% qofa kan ta'eef, anniisaan hafe 90% kan ta'u hojii qaamaa, qisaasama hoo'aa (metabolic heat) fi xurii baasuudhaan waan baduufi.`,
    hint: 'Roughly 90% of energy is lost as metabolic heat, respiration, and waste products.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q74',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Immunology: Humoral Immunity and Antibody Production',
    questionText: '74. In humoral adaptive immunity, activated B-lymphocytes differentiate into terminally differentiated effector cells called plasma cells whose primary biological function is to synthesize and secrete massive quantities of',
    options: [
      'Histamines and heparins',
      'Antibodies (Immunoglobulins)',
      'Interferons and granzymes',
      'Perforins and interleukins'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
When a naive B lymphocyte encounters its specific antigen and receives helper T-cell costimulation, it proliferates and differentiates into memory B cells and effector plasma cells. Plasma cells possess an extensive rough endoplasmic reticulum dedicated to producing and secreting up to 2,000 antigen-specific antibody (immunoglobulin) molecules per second into blood and lymph.

🇪🇹 አማርኛ (Amharic):
በሰውነታችን በሽታ መከላከል ስርአት ውስጥ ፕላዝማ ሴሎች (plasma cells) የተባሉት ህዋሳት ዋና ተግባራቸው ባዕድ ነገሮችንና ባክቴሪያዎችን የሚያጠቁ በብዙ ሺህ የሚቆጠሩ ፀረ-እንግዳ አካላትን (Antibodies / Immunoglobulins) ማመንጨት ነው።

🌳 Afaan Oromoo:
Seelonni ittisa qaamaa 'Plasma cells' jedhaman hojiin isaanii inni guddaan eegduu qaamaa 'Antibodies' (Immunoglobulins) baay'inaan oomishanii dhiigatti gad-lakkisuudha.`,
    hint: 'Plasma cells are specialized B-cells that produce and secrete antibodies.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q75',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Anatomy & Physiology: Stomatal Regulation Mechanisms',
    questionText: '75. The physiological opening and closing of foliar stomata for gas exchange and transpiration is directly regulated by changes in the turgidity and osmotic pressure of which specialized epidermal cells?',
    options: [
      'Mesophyll parenchyma cells',
      'Companion cells',
      'Guard cells',
      'Lenticel cork cells'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Each stoma is bordered by a pair of specialized bean-shaped epidermal guard cells. When guard cells actively accumulate potassium (K⁺) ions and malate, water enters by osmosis, making them turgid. Because their inner cellulose walls are thicker and less elastic than their thin outer walls, turgid guard cells bow outward, opening the stomatal pore. Water loss causes flaccidity, closing the pore.

🇪🇹 አማርኛ (Amharic):
የቅጠል ስቶማታ (stomata) እንዲከፈትና እንዲዘጋ በቀጥታ የሚቆጣጠሩት በሁለቱም በኩል የሚገኙት ጠባቂ ህዋሳት (Guard cells) በሚያገኙት የውሃ ግፊትና እብጠት (turgidity) አማካኝነት ነው።

🌳 Afaan Oromoo:
Bananuu fi cufamuu qawwee baalaa (stomata) kan kallattiin to'atu dhiibbaa bishaanii seelota eegdotaa (Guard cells) keessatti uumamuuni.`,
    hint: 'Guard cells change turgidity through ion fluxes to open and close stomata.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
