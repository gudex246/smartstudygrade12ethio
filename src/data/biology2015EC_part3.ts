import { Question } from '../types';

export const BIOLOGY_2015_EC_PART3: Question[] = [
  {
    id: 'bio-2015-q71',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Metabolism: Allosteric End-Product Feedback Inhibition',
    questionText: '71. In a metabolic pathway, the end-product inhibition occurs when the',
    options: [
      'last product of the pathway inhibits the last enzymatic reaction.',
      'first product of the pathway inhibits the last enzymatic reaction.',
      'first product of the pathway inhibits the third enzyme of the reaction.',
      'last product of the pathway inhibits the first enzymatic reaction.'
    ],
    correctOptionIndex: 3,
    explanation: 'In negative feedback (end-product inhibition), the final accumulated product of a multi-step biosynthetic pathway binds allosterically to the first committed enzyme in the sequence, shutting down further unnecessary synthesis.',
    hint: 'The end-product binds to and inhibits the first enzyme of the pathway to prevent resource waste.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q72',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Enzyme Kinetics: Saturation & Vmax Turnover Rate',
    questionText: '72. From a reaction velocity curve of catalase enzyme at constant temperature against substrate concentration (0% to 0.6%), catalase reaches its maximal plateau (maximum turnover rate) from substrate concentration of:',
    options: [
      '0.4 to 0.5%.',
      '0.1 to 0.2%.',
      '0.5 to 0.6%.',
      '0.3 to 0.4%.'
    ],
    correctOptionIndex: 2,
    explanation: 'As substrate concentration rises, reaction velocity increases asymptotically until active sites become saturated (Vmax), producing the maximum plateau of turnover velocity between 0.5% and 0.6% substrate concentration.',
    hint: 'Active site saturation and peak steady-state reaction rate occur at the highest plateau (0.5 to 0.6%).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q73',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Cell Theory: Classical vs Modern Cell Theory',
    questionText: '73. Which one of the following statements is correct about the description of cell theory?',
    options: [
      'Schleiden and Schwann stated that all cells come from pre-existing cells.',
      'Virchow stated that cell is the unit of structure, physiology and organization of living things.',
      'Modern cell theory states that cells contain hereditary information that passes from cell to cell.',
      'Spontaneous generation theory states that all cells have basically different chemical composition.'
    ],
    correctOptionIndex: 2,
    explanation: 'Modern cell theory tenets include: all living organisms are composed of one or more cells, the cell is the basic structural and functional unit of life, all cells arise from pre-existing cells (Virchow), and cells contain hereditary genetic information (DNA) passed to daughter cells during division.',
    hint: 'Modern additions to cell theory emphasize the genetic material (DNA) passed on through cell division.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q74',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Microscopy: Field of View & Cell Size Calculation',
    questionText: '74. A student measured the diameter of onion epidermal cells at a magnification of 100X using a field of view adjusted to 2mm by stage micrometer. What would be the diameter of individual cells if 8 cells fit into the field of view of the microscope at 100X magnification?',
    options: [
      '250µm',
      '200µm',
      '150µm',
      '300µm'
    ],
    correctOptionIndex: 0,
    explanation: 'Field diameter = 2 mm = 2,000 µm.\nIf 8 cells line up end-to-end across the field of view, the diameter of a single cell = Total field diameter / Number of cells = 2,000 µm / 8 = 250 µm.',
    hint: 'Convert 2 mm to micrometers (2,000 µm) and divide by 8 cells.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q75',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Prokaryotes vs Eukaryotes: Cellular Characteristics',
    questionText: '75. Which of the following characteristics of cells is found ONLY in prokaryotic cells?',
    options: [
      'Division of labor within the cell',
      'Continuous loop of DNA (single circular chromosome)',
      '10 - 100 µm long size',
      'Higher level of complexity'
    ],
    correctOptionIndex: 1,
    explanation: 'Prokaryotic cells (bacteria and archaea) possess a single, closed circular loop of double-stranded DNA located in the nucleoid region without a nuclear envelope or histone complexes. Eukaryotes possess linear chromosomes with histone proteins.',
    hint: 'Prokaryotes have a single continuous circular loop of chromosomal DNA without a nuclear membrane.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q76',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Virology: Viral Genome Classification (DNA vs RNA)',
    questionText: '76. Which one of the following sentences is true about viruses?',
    options: [
      'AIDS is caused by a DNA virus.',
      'Corona virus is a DNA virus.',
      'Swine flu is caused by an RNA virus.',
      'Herpes simplex is an RNA virus.'
    ],
    correctOptionIndex: 2,
    explanation: 'Swine flu (Influenza A virus / H1N1) is an enveloped, single-stranded segmented RNA virus. (Note: HIV is an RNA retrovirus; Coronaviruses are positive-sense RNA viruses; Herpes simplex is a double-stranded DNA virus). Hence C is correct.',
    hint: 'Influenza viruses (including swine flu) contain single-stranded segmented RNA genomes.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q77',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Immunology & Virology: HIV Life Cycle Stages',
    questionText: '77. The following steps are involved when HIV infects its host cell in the human body:\n1. Conversion of viral RNA into DNA and its incorporation into cell\'s DNA.\n2. Viral DNA\'s transcription into viral RNA and production of proteins.\n3. Assemblage of new viral particles from RNA, proteins and Reverse Transcriptase.\n4. The binding of gp120 of HIV to CD4 of a T-Lymphocyte.\n5. Fusion of HIV with the plasma membrane of the host cell.\n6. Release of its RNA and reverse transcriptase into the cell.\nThe logical order of the steps is:',
    options: [
      '4, 5, 6, 1, 2, 3.',
      '4, 2, 5, 6, 1, 3.',
      '4, 6, 5, 2, 1, 3.',
      '4, 1, 2, 5, 6, 3.'
    ],
    correctOptionIndex: 0,
    explanation: 'Sequential HIV replication cycle:\n1st: (4) gp120 binds to CD4 receptor.\n2nd: (5) Viral envelope fuses with host cell membrane.\n3rd: (6) Capsid uncoats, releasing RNA & reverse transcriptase into cytoplasm.\n4th: (1) Reverse transcription converts RNA into cDNA and integrase inserts provirus into host genome.\n5th: (2) Transcription and translation produce viral proteins.\n6th: (3) Assembly and budding of new viral particles.\nCorrect Sequence: 4 -> 5 -> 6 -> 1 -> 2 -> 3.',
    hint: 'Attachment (4) -> Fusion (5) -> Entry (6) -> Reverse Transcription/Integration (1) -> Synthesis (2) -> Assembly (3).',
    difficulty: 'hard',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q78',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Microbiology & Agriculture: Biological Nitrogen Fixation',
    questionText: '78. Which one of the following bacteria produces ammonium ions by forming a symbiotic nitrogen-fixing association with root nodules of peas and beans?',
    options: [
      'Klebsiella',
      'Azotobacter',
      'Pseudomonas',
      'Rhizobium'
    ],
    correctOptionIndex: 3,
    explanation: 'Rhizobium bacteria enter into a mutualistic symbiotic relationship with legume root hairs (peas, beans, lentils, clover), forming root nodules where nitrogenase enzymes reduce atmospheric N2 into ammonium (NH4+). Azotobacter is free-living.',
    hint: 'Rhizobium forms symbiotic root nodules in leguminous plants.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q79',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Hydrological Cycle: Water Cycle Processes',
    questionText: '79. In a hydrological cycle diagram:\n• A = Oceanic water converting to vapor\n• B = Water vapor released by terrestrial vegetation\n• C = Cloud formation in the upper atmosphere\n• D = Rain and snowfall returning to surface reservoirs\nThe letters A, B, C and D respectively represent:',
    options: [
      'evaporation, transpiration, condensation, precipitation.',
      'evaporation, precipitation, transpiration, condensation.',
      'evaporation, transpiration, precipitation, condensation.',
      'evaporation, precipitation, condensation, transpiration.'
    ],
    correctOptionIndex: 0,
    explanation: 'A: Evaporation from open ocean water body.\nB: Transpiration from terrestrial plant leaves.\nC: Condensation of water vapor into cloud droplets.\nD: Precipitation (rain, snow, hail) falling back to earth.',
    hint: 'A: Evaporation, B: Transpiration from trees, C: Condensation into clouds, D: Precipitation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q80',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Ecology: Ecological Succession Comparison',
    questionText: '80. Which one of the following comparisons is true about primary and secondary successions? Secondary succession has',
    options: [
      'reduced species diversity.',
      'reduced total biomass of the community.',
      'slower progress to reach to the climax.',
      'faster progress to reach a stable climax community because soil is already present.'
    ],
    correctOptionIndex: 3,
    explanation: 'Unlike primary succession which begins on bare sterile rock or volcanic ash lacking soil, secondary succession initiates in disturbed areas (after fires or logging) where fertile soil and seed banks are already established, allowing faster progression to climax equilibrium.',
    hint: 'Secondary succession proceeds much faster than primary succession because fertile topsoil already exists.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q81',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Biomes: Tropical Rainforest Soil Dynamics',
    questionText: '81. Which one of the following sentences describes the tropical rainforest biome? It has',
    options: [
      'poor and thin soil.',
      'sparse - succulent plants.',
      'frozen and rocky soil.',
      'migrating animals.'
    ],
    correctOptionIndex: 0,
    explanation: 'Despite supporting dense biodiversity, tropical rainforest soils (oxisols/ultisols) are thin, acidic, and nutrient-poor because heavy continuous rainfall causes intense nutrient leaching, and decomposing nutrients are immediately absorbed by dense shallow root systems.',
    hint: 'Rainforest soils are nutrient-poor and heavily leached by continuous tropical rains.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q82',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Aquatic Ecology: Freshwater Biomes Organisms',
    questionText: '82. Fresh water biomes like streams, rivers, and ponds are characterized by the presence of',
    options: [
      'corals, crabs and planktons.',
      'algae, planktons and fish.',
      'corals, kelps and angler fish.',
      'angler fish, algae and crabs.'
    ],
    correctOptionIndex: 1,
    explanation: 'Freshwater ecosystems (lotic and lentic habitats) are dominated by freshwater microalgae, phytoplankton, zooplankton, aquatic insects, and freshwater fish (e.g. tilapia, trout). Corals, kelp forests, and angler fish are strictly marine.',
    hint: 'Corals and angler fish are marine; freshwater biomes feature algae, freshwater plankton, and fish.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q83',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Ecology: Intra-specific vs Inter-specific Competition',
    questionText: '83. Which one of the following statements correctly describes intra-specific and inter-specific competitions? In intra-specific competition the',
    options: [
      'competition is less severe but in inter-specific competition it is more.',
      'competition is for all requirements because organisms share the exact same ecological niche.',
      'competing individuals have similar adaptation but in inter-specific competition the adaptation is different.',
      'competing individuals belong to different species but in inter-specific competition the individuals are of the same species.'
    ],
    correctOptionIndex: 1,
    explanation: 'Intraspecific competition (between members of the exact same species) is the most intense form of competition because all individuals share identical resource requirements, food sources, nesting sites, and mates within the identical ecological niche.',
    hint: 'Individuals of the same species compete for 100% of the exact same requirements and territory.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q84',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Cell Division: Meiosis II Chromosomal Events',
    questionText: '84. Which one of the following stages of cell division is correctly described in meiosis II?',
    options: [
      'Prophase II - pairs of homologous chromosomes split up',
      'Anaphase II - chromatids from each chromosome separate',
      'Metaphase II - chromosomes pair and exchange segments',
      'Telophase II - two haploid cells are produced'
    ],
    correctOptionIndex: 1,
    explanation: 'During Anaphase II of meiosis, the centromeres divide and sister chromatids separate, being pulled to opposite spindle poles as individual daughter chromosomes.',
    hint: 'In Anaphase II, sister chromatids separate and move towards opposite poles.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q85',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Genetics: Sex-Influenced vs Sex-Linked Inheritance',
    questionText: '85. Which one of the following events is an example of a sex-influenced trait?',
    options: [
      'Pattern baldness',
      'Lactation',
      'Retinitis pigmentosa',
      'Undescended testicles'
    ],
    correctOptionIndex: 0,
    explanation: 'Pattern baldness (androgenic alopecia) is an autosomal sex-influenced trait. The allele behaves as dominant in males in the presence of higher testosterone levels, but as recessive in females.',
    hint: 'Pattern baldness is expressed differently in males vs females due to circulating sex hormones.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q86',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Cellular Respiration: Lactic Acid Fermentation',
    questionText: '86. Which of the following processes takes place when lactate is produced in muscle cells during anaerobic respiration?',
    options: [
      'NAD and FAD are regenerated from reduced NAD and FAD.',
      'ATP is produced through oxidative phosphorylation.',
      'Protons accumulation created in the inter-membrane space.',
      'Reduced NAD supplies hydrogen and becomes oxidized itself.'
    ],
    correctOptionIndex: 3,
    explanation: 'During lactate fermentation, lactate dehydrogenase transfers hydrogen from NADH (reduced NAD) to pyruvate, reducing pyruvate into lactic acid and oxidizing NADH back to NAD+, which is recycled for continuous glycolysis.',
    hint: 'NADH (reduced NAD) donates hydrogen to pyruvate, re-oxidizing NAD+ so glycolysis can continue.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q87',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Photosynthesis: Photosystem Components & Reaction Centers',
    questionText: '87. Which one of the following structures of the photosystem is correctly related with its function?',
    options: [
      'Chlorophyll a - a reaction center molecule',
      'Antenna complex -light dependent reaction begins',
      'Carotenoid - provides the hydrogen ions',
      'Thylakoid - absorbs blue and red pigments'
    ],
    correctOptionIndex: 0,
    explanation: 'In photosystems (PSI and PSII), special pairs of Chlorophyll a molecules (P700 in PSI and P680 in PSII) serve as the reaction center molecules where photochemically excited electrons are transferred to the primary electron acceptor.',
    hint: 'Specialized Chlorophyll a molecules form the photochemical reaction center of photosystems.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q88',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Cellular Respiration: Electron Transport Chain (ETC)',
    questionText: '88. What happens during the electron transport system of respiration? The',
    options: [
      'four-carbon compound undergoes molecular transformation to generate oxaloacetate.',
      'hydrogen atoms carried by FADH and NADH are released and split into protons and electrons.',
      'citrate losses a carbon atom to form a five-carbon atom compound and CO2.',
      'five carbon compound is further decarboxylated to form a four-carbon compound.'
    ],
    correctOptionIndex: 1,
    explanation: 'At the inner mitochondrial membrane, Complex I and Complex II oxidize NADH and FADH2, splitting the transferred hydrogen into high-energy electrons (which travel along electron carriers) and protons (pumped across into the intermembrane space).',
    hint: 'Coenzymes NADH and FADH2 release electrons and protons into the respiratory chain.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q89',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Photosynthesis: The Calvin Cycle (Light-Independent Phase)',
    questionText: '89. During light independent reactions of photosynthesis, glucose is synthesized through',
    options: [
      'synthesis of reduced NADP that provides hydrogen ion.',
      'six turns of the Calvin cycle to make one molecule of glucose.',
      'release of hydrogen ions at the electron transport chain.',
      'transmission of electrons to the inside of the thylakoid.'
    ],
    correctOptionIndex: 1,
    explanation: 'Because one turn of the Calvin cycle fixes one molecule of CO2, six turns of the Calvin cycle (fixing 6 CO2 molecules) are required to generate two net molecules of G3P/TP, which combine to form one 6-carbon molecule of glucose (C6H12O6).',
    hint: 'Synthesizing one 6-carbon glucose molecule requires 6 turns of the Calvin cycle fixing 6 CO2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q90',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Photosynthesis: Limiting Factors & RuBisCO',
    questionText: '90. Which one of the following factors of photosynthesis is correctly matched with its effect?',
    options: [
      'CO2 concentration - limits the reactions by influencing rate of initial reaction with RuBP',
      'Low temperature - limits the rate of reactions by reducing the number of electrons in the chlorophyll',
      'Low Rubisco - limits the number of reactions in the light dependent reaction',
      'Light intensity - limits the rate of ATP synthase enzyme action in light dependent reactions'
    ],
    correctOptionIndex: 0,
    explanation: 'Carbon dioxide concentration directly limits the initial carbon fixation reaction where RuBisCO catalyzes the carboxylation of ribulose-1,5-bisphosphate (RuBP) into two molecules of 3-PGA in the Calvin stroma.',
    hint: 'CO2 concentration governs the rate of RuBP carboxylation by RuBisCO.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q91',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Genetics: Test Cross Principles',
    questionText: '91. Which one of the following monohybrid crosses can be a test cross?',
    options: [
      'Rr X Rr',
      'RR X Rr',
      'RR X rr',
      'RR X RR'
    ],
    correctOptionIndex: 2,
    explanation: 'A test cross is a cross between an individual of dominant phenotype (homozygous or heterozygous) with a homozygous recessive tester (rr) to determine the unknown genotype based on the progeny phenotypic distribution.',
    hint: 'A test cross always crosses an individual with a homozygous recessive (rr) genotype.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q92',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Conservation Biology: Biodiversity & Invasive Exotic Species',
    questionText: '92. Which of the following is DIFFERENT from the rest with regard to conservation of natural vegetation?',
    options: [
      'Using local practices for conservation',
      'Replanting of land with endemic species',
      'Replanting indigenous tree species',
      'Large scale introduction of exotic plants'
    ],
    correctOptionIndex: 3,
    explanation: 'Introducing exotic (alien/invasive) plant species disrupts native ecological balance, depletes groundwater, and outcompetes indigenous flora, threatening local vegetation rather than conserving it.',
    hint: 'Massive introduction of non-native exotic species threatens indigenous forest biodiversity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q93',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Nervous System: Synaptic Transmission Structure',
    questionText: '93. In the nervous co-ordination system, which of the following statements explains the synapse? It is a',
    options: [
      'chemical that transmits nerve impulses across the nervous system.',
      'part of the skull that encloses brain for the purpose of protection.',
      'junction between two neurons or a neuron and a muscle.',
      'short term change in the electrical potential on the surface of cells.'
    ],
    correctOptionIndex: 2,
    explanation: 'A synapse is the functional junction or gap across which a nerve impulse passes from an axon terminal of a presynaptic neuron to a postsynaptic neuron, muscle fiber (neuromuscular junction), or gland.',
    hint: 'A synapse is the microscopic junction connecting two neurons or a motor neuron and muscle.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q94',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Nervous System: Reflex Arc & The Knee-Jerk Reflex',
    questionText: '94. Two students demonstrate the knee jerk reflex by tapping just below the patella on the crossed leg. Which of the following situations will happen during this demonstration?',
    options: [
      'impulse travels to the brain.',
      'hit ligament stretches the muscle.',
      'lower leg to jerk downwards and inwards.',
      'impulse travels to quadriceps muscle from the brain.'
    ],
    correctOptionIndex: 1,
    explanation: 'Tapping the patellar tendon/ligament below the kneecap briefly stretches the quadriceps femoris muscle, stimulating muscle spindle stretch receptors and firing a monosynaptic spinal reflex arc causing leg extension.',
    hint: 'Tapping the patellar ligament mechanically stretches the quadriceps extensor muscle.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q95',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Sensory Organs: Anatomy of the Eye',
    questionText: '95. Which of the following eye structures is correctly matched with its function?',
    options: [
      'Pupil - serves as the eye\'s protective outer layer.',
      'Iris - controls the amount of light entering the eye.',
      'Cornea - provides nutrition to the retina.',
      'Choroid - bends the light into the eye.'
    ],
    correctOptionIndex: 1,
    explanation: 'The iris is the pigmented muscular diaphragm that regulates the aperture of the pupil via circular and radial muscles, controlling the quantity of light that enters the eye under varying illuminations.',
    hint: 'The colored muscular iris dilates and constricts to control light entry through the pupil.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q96',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Plant Physiology: CAM Photosynthesis (Temporal Separation)',
    questionText: '96. In the CAM (Crassulacean Acid Metabolism) photosynthetic pathway,',
    options: [
      'malate is stored in the mesophyll cells during the day.',
      'glucose is synthesized in the bundle sheath cell during night.',
      'ATP and NADPH are produced during the night.',
      'the C4 stage and the Calvin cycle are separated in time.'
    ],
    correctOptionIndex: 3,
    explanation: 'In CAM plants (e.g. pineapple, cacti), stomata open at night to fix CO2 into malate (C4 stage) stored in vacuoles, and close during the day when sunlight generates ATP/NADPH to run the Calvin cycle. Thus C4 fixation and Calvin cycle are separated in time (temporal separation).',
    hint: 'CAM plants separate carbon fixation (night) and the Calvin cycle (day) temporally by time.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q97',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Microbiology: Gram Staining Principles',
    questionText: '97. In Gram staining, if some bacteria retain the primary crystal violet-iodine complex after alcohol decolorization and counterstaining, then the bacteria is',
    options: [
      'Gram positive.',
      'Gram negative.',
      'Gram intermediate.',
      'Gram variable.'
    ],
    correctOptionIndex: 0,
    explanation: 'Gram-positive bacteria possess a thick peptidoglycan cell wall that retains the primary crystal violet-iodine dye complex upon alcohol washing, appearing deep purple under microscopy.',
    hint: 'Bacteria that retain crystal violet purple stain are Gram-positive.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q98',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Pathogenic Microbiology: Bacterial Pathogenicity',
    questionText: '98. Which one of the following sentences explains the mechanism of pathogenic bacterium to produce disease in a host?',
    options: [
      'Its hyphae secrets enzymes which digest substances in the tissue.',
      'It enters into the living cells and disrupts the metabolic systems.',
      'It attaches with white blood cells and destroy the immune system.',
      'Its genetic material is incorporated into the cell for instruction.'
    ],
    correctOptionIndex: 1,
    explanation: 'Bacterial pathogens colonize host tissues, invade cellular environments, and produce exotoxins or endotoxins that disrupt cellular metabolism and physiological functioning.',
    hint: 'Bacteria cause disease by invading host tissues and disrupting cellular metabolism with toxins.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q99',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Genetic Engineering & Recombinant DNA Plasmids',
    questionText: '99. Which one of the following sentences explains the role of bacteria in genetic engineering? They are used to',
    options: [
      'isolate genes from donor DNA.',
      'open up a plasmid.',
      'cut genes from donor DNA.',
      'contain and replicate recombinant plasmids.'
    ],
    correctOptionIndex: 3,
    explanation: 'Bacteria (such as E. coli) serve as host transformation vehicles that harbor recombinant plasmid vectors, replicating the foreign cloned gene rapidly during binary fission and expressing proteins.',
    hint: 'Bacterial host cells harbor, clone, and replicate recombinant plasmids.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q100',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Virology: Acellular Nature of Viruses',
    questionText: '100. Which one of the following sentences describes a virus? It',
    options: [
      'has differentiated organelles.',
      'is saprophytic.',
      'is acellular.',
      'undergoes respiration.'
    ],
    correctOptionIndex: 2,
    explanation: 'Viruses are acellular (non-cellular) biological entities consisting solely of nucleic acid (DNA or RNA) enclosed inside a protein capsid coat. They lack cytoplasm, cell membranes, ribosomes, and metabolic machinery.',
    hint: 'Viruses are acellular particles without cellular structure or organelles.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  }
];
