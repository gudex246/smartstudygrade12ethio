import { Question } from '../types';

export const BIOLOGY_2015_EC_PART1: Question[] = [
  {
    id: 'bio-2015-q1',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Human Biology: Circulatory System & Cardiac Cycle',
    questionText: '1. Which one of the following sentences is correct about the activities of the heart?',
    options: [
      'The noise of heartbeat one hears through a stethoscope is the sound of valves.',
      'As the heart beats blood travels through the arteries with a uniform pressure.',
      'Diastole is when the heart muscles contract and force the blood out.',
      'Systole is when the heart muscles relax and it fills with blood.'
    ],
    correctOptionIndex: 0,
    explanation: 'The characteristic "lub-dub" sounds heard through a stethoscope during a cardiac cycle are produced by the closing of the heart valves. The first sound ("lub") is caused by the closure of the atrioventricular (tricuspid and bicuspid) valves during ventricular systole, and the second sound ("dub") is caused by the closure of the semilunar (aortic and pulmonary) valves at the beginning of ventricular diastole.',
    hint: 'Think about what physically creates the distinct "lub-dub" heartbeat sounds when the chambers pump.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q2',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Microbiology & Laboratory Techniques',
    questionText: '2. During culturing micro-organisms, all of the following activities are important EXCEPT',
    options: [
      'tilting the lid of the Petri dish during inoculation.',
      'adding distilled water to a sterilized agar.',
      'sterilizing the inoculating loops.',
      'transferring target micro-organisms into an agar medium.'
    ],
    correctOptionIndex: 1,
    explanation: 'Adding unsterilized distilled water to already sterilized agar will introduce contaminants and dilute the nutrient solidifying medium. Aseptic techniques require sterilizing loops with a flame, keeping Petri dish lids tilted at a narrow angle to prevent airborne contaminants, and direct streak/pour plate inoculation.',
    hint: 'Identify which action violates aseptic culture protocol and introduces contamination.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q3',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Infectious Diseases & Pathogens',
    questionText: '3. Which one of the following diseases can be caused by more than one type of microorganisms?',
    options: [
      'Cholera',
      'Gastroenteritis',
      'Typhoid',
      'Tuberculosis'
    ],
    correctOptionIndex: 1,
    explanation: 'Gastroenteritis (inflammation of the stomach and intestines) is a syndrome caused by diverse pathogens: viruses (Rotavirus, Norovirus), bacteria (Salmonella, E. coli, Campylobacter, Shigella), and protozoan parasites (Giardia lamblia, Entamoeba histolytica). Cholera is strictly caused by Vibrio cholerae, Typhoid by Salmonella Typhi, and Tuberculosis by Mycobacterium tuberculosis.',
    hint: 'Consider which condition is a general gastrointestinal syndrome triggered by both viruses and various bacteria.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q4',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Reproductive Health: Sexually Transmitted Infections',
    questionText: '4. Which one of the following diseases is correctly explained with its causes or symptoms?',
    options: [
      'Syphilis is caused by Neisseria gonorrhoeae.',
      'Gonorrhoea has a burning sensation symptom while urinating.',
      'Gonorrhoea is caused by Treponema pallidum.',
      'Syphilis has sore ulceration on the genitals as a symptom.'
    ],
    correctOptionIndex: 1,
    explanation: 'Gonorrhoea (caused by the bacterium Neisseria gonorrhoeae) presents with severe dysuria (burning sensation during urination) and thick urethral/vaginal discharge. Syphilis is caused by Treponema pallidum and features a painless primary chancre ulcer.',
    hint: 'Match the specific symptom of dysuria (pain/burning during urination) to the correct bacterial STI.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q5',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Taxonomy & Binomial Nomenclature',
    questionText: '5. The names of which two taxa are used in binomial nomenclature?',
    options: [
      'The two lowest units of classification',
      'The two middle units of classification',
      'The highest and the lowest unit of classification',
      'The two highest units of classification'
    ],
    correctOptionIndex: 0,
    explanation: 'Carl Linnaeus\'s binomial nomenclature uses the Genus (capitalized) and Species (lowercase), which represent the two lowest, most specific ranks in the taxonomic hierarchy (Domain -> Kingdom -> Phylum -> Class -> Order -> Family -> Genus -> Species).',
    hint: 'Binomial means two names (Genus and species). Where do these sit in the Linnaean hierarchy?',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q6',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Genetics: Dihybrid Cross & Mendelian Ratios',
    questionText: '6. In a dihybrid self-crossing of a plant with genotype DdCc, 3600 offspring were produced. How many of the offspring will have the ddcc genotype?',
    options: [
      '300',
      '450',
      '150',
      '225'
    ],
    correctOptionIndex: 3,
    explanation: 'In a self-cross of a double heterozygote (DdCc x DdCc):\n• Probability of dd = 1/4\n• Probability of cc = 1/4\n• Probability of double homozygous recessive (ddcc) = 1/4 * 1/4 = 1/16.\nTotal expected ddcc offspring = 3600 * (1/16) = 225.',
    hint: 'Multiply the individual probability of each homozygous recessive gene: (1/4) * (1/4) * Total Offspring.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q7',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Molecular Biology: Protein Translation',
    questionText: '7. Identify the correct statement regarding translation in eukaryotic cells. The',
    options: [
      'helicase enzyme begins to unwind a section of DNA.',
      'polymerase assembles free RNA nucleotides into a chain.',
      'first two codons of the mRNA enter the ribosome.',
      'RNA polymerase moves along the antisense strand.'
    ],
    correctOptionIndex: 2,
    explanation: 'During the initiation phase of translation, mRNA binds to the small ribosomal subunit, aligning the start codon at the P site and the second codon at the A site so the first two codons are positioned inside the ribosome to begin peptide bond formation. Options A, B, and D describe transcription or DNA replication.',
    hint: 'Look for the event that specifically takes place at the ribosome during protein synthesis.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q8',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Cell Division: Meiosis & Genetic Variation',
    questionText: '8. Which of the following sentences explains how crossing over brings variation?',
    options: [
      'In meiosis I, there is splitting up of pairs of homologous chromosomes and line up.',
      'In meiosis I, there is exchange of a section of DNA between chromatids.',
      'In meiosis II, homologous chromosomes align themselves independent of other pairs.',
      'In meiosis II, chromatids from each chromosome are separated at random.'
    ],
    correctOptionIndex: 1,
    explanation: 'Crossing over (genetic recombination) occurs during prophase I of meiosis I when non-sister chromatids of homologous chromosome pairs form chiasmata and exchange corresponding segments of DNA, creating novel combinations of maternal and paternal alleles.',
    hint: 'Crossing over involves physical exchange of chromosomal pieces between non-sister chromatids during Prophase I.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q9',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Molecular Biology: Semi-Conservative DNA Replication',
    questionText: '9. Consider the model of DNA replication where parent double helix C unwinds to synthesize two daughter DNA molecules A and B. Which one of the following is true about A, B and C?',
    options: [
      'A and B are identical with each other but not with C.',
      'C is not identical with A and B.',
      'B and C are not identical with each other.',
      'A, B and C are identical with each other.'
    ],
    correctOptionIndex: 3,
    explanation: 'Because DNA replication operates semi-conservatively using complementary base pairing (A-T, G-C), each newly synthesized double-stranded DNA molecule (A and B) has the exact same base sequence as the original parent DNA molecule (C).',
    hint: 'Semi-conservative replication ensures high fidelity so daughter helices match the parental sequence exactly.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q10',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Molecular Biology: Transfer RNA & Translation',
    questionText: '10. What is the central role of tRNA in translation?',
    options: [
      'Carrying genetic information from DNA in the nucleus to ribosomes',
      'Recognizing the codon of mRNA and bring the correct amino acid to the ribosomes',
      'Acting as a template for converting a genetic code into amino acid sequence',
      'Assembling the amino acid into a polypeptide chain'
    ],
    correctOptionIndex: 1,
    explanation: 'Transfer RNA (tRNA) acts as an adaptor molecule: its anticodon loop matches specific three-base mRNA codons, while its 3\' CCA terminal end is charged with the corresponding amino acid, delivering it precisely to the growing polypeptide chain.',
    hint: 'tRNA acts as a bridge between the mRNA codon language and the amino acid building blocks.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q11',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Biotechnology: Traditional vs Modern Biotechnology',
    questionText: '11. Which one of the following sentences explains the traditional use of biotechnology? Production of',
    options: [
      'insulin using transgenic bacteria',
      'dairy products at household level',
      'myco-proteins under a laboratory',
      'vinegar using industrial fermenter'
    ],
    correctOptionIndex: 1,
    explanation: 'Traditional biotechnology uses naturally occurring microorganisms for indigenous food processing and preservation at household level (e.g., fermenting milk into yogurt/ergo, cheese, injera dough, and traditional beer/tella) without genetic engineering or sterile bioreactors.',
    hint: 'Traditional biotechnology refers to age-old household fermentation practices before recombinant DNA era.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q12',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Ecology: Ecological Pyramids of Energy',
    questionText: '12. Consider a diagram demonstrating the pyramid of energy across trophic levels (Producers A -> Primary B -> Secondary C -> Tertiary D). Which of the following is INCORRECT about the pyramid of energy?',
    options: [
      'The organisms of each trophic level use large proportion of the energy to build their body.',
      'The organisms of the first trophic level convert light energy into chemical energy.',
      'The energy lost as heat to the surrounding in each trophic level is insignificant.',
      'The amount of energy transferred through the trophic levels drops with each step up of the pyramid.'
    ],
    correctOptionIndex: 2,
    explanation: 'According to Lindeman\'s 10% law and thermodynamic principles, approximately 90% of energy is dissipated as metabolic heat and respiration at each step. Therefore, stating that heat loss is "insignificant" is completely false and incorrect.',
    hint: 'Energy loss due to cellular respiration and metabolic heat is approximately 90% (very high).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q13',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Cell Division: Mitosis vs Meiosis',
    questionText: '13. Which one of the following sentences is correct about mitosis? It',
    options: [
      'is the division of sex cells resulting in identical daughter cells.',
      'produces four different daughter cells from a single cell.',
      'is the division of somatic cells to make identical daughter cells.',
      'produces half number of chromosomes from the original cell.'
    ],
    correctOptionIndex: 2,
    explanation: 'Mitosis is the process of somatic (body) cell division in which one diploid parent cell replicates its DNA and divides into two genetically identical daughter cells with the same chromosome number (2n).',
    hint: 'Mitosis occurs in body (somatic) cells to produce two clones with preserved chromosome numbers.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q14',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Genetics: Monohybrid Cross Genotypic Ratios',
    questionText: '14. A cross between pea plants having heterozygous genotype (Rr) has been made. Which of the following is correct about the offspring according to Mendelian inheritance? The genotypic probability of getting',
    options: [
      'Rr is 25%.',
      'Rr is 75%.',
      'RR is 50%.',
      'rr is 25%.'
    ],
    correctOptionIndex: 3,
    explanation: 'In a monohybrid cross between two heterozygotes (Rr x Rr), the genotypic ratio is:\n• 1/4 RR (25%)\n• 2/4 Rr (50%)\n• 1/4 rr (25%).\nHence, the probability of obtaining homozygous recessive (rr) is exactly 25%.',
    hint: 'Draw a Punnett square for Rr x Rr: RR, Rr, Rr, rr.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q15',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Biomolecules: DNA Structure & Nucleotides',
    questionText: '15. Which one of the following is correct about DNA? It is',
    options: [
      'smaller molecule and coding for only protein.',
      'made of phosphate, sugar and bases.',
      'a single stranded molecule.',
      'less stable and degrades quickly.'
    ],
    correctOptionIndex: 1,
    explanation: 'DNA (Deoxyribonucleic acid) is a polymer of nucleotides. Each nucleotide building block is composed of three components: a phosphate group, a deoxyribose pentose sugar, and a nitrogenous base (Adenine, Thymine, Guanine, or Cytosine).',
    hint: 'Recall the 3 chemical sub-units that make up every nucleotide.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q16',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Animal Kingdom: Phylum Chordata Characteristics',
    questionText: '16. Which one of the following phyla is characterized by a flexible cartilaginous rod-like structure, that runs along the dorsal side of the body?',
    options: [
      'Phylum Mollusca',
      'Phylum Chordata',
      'Phylum Annelida',
      'Phylum Arthropoda'
    ],
    correctOptionIndex: 1,
    explanation: 'Phylum Chordata is defined by four anatomical features present at some developmental stage: a notochord (a flexible cartilaginous rod running along the dorsal side), a dorsal hollow nerve cord, pharyngeal gill slits, and a post-anal tail.',
    hint: 'The notochord is the defining dorsal skeletal rod in this phylum.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q17',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Animal Diversity: Classification of Invertebrates',
    questionText: '17. Which one of the following groups of organisms is correctly matched with its phylum?',
    options: [
      'Starfish - Phylum Echinodermata',
      'Fish - Phylum Arthropoda',
      'Snail - Phylum Annelida',
      'Earthworm - Phylum Mollusca'
    ],
    correctOptionIndex: 0,
    explanation: 'Starfish belongs to Phylum Echinodermata (spiny-skinned marine invertebrates with pentaradial symmetry and water vascular system). Fish belongs to Chordata, snails to Mollusca, and earthworms to Annelida.',
    hint: 'Echinodermata includes marine spiny-skinned animals like sea stars and sea urchins.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q18',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Biogeochemical Cycles: The Carbon Cycle',
    questionText: '18. Which one of the following events happens during carbon cycle? Carbon dioxide is',
    options: [
      'transferred from plants to animals by their feeding relationship.',
      'absorbed from air when microbes decompose plants and animals.',
      'removed from the air by animals during respiration.',
      'returned into the air by plants during photosynthesis.'
    ],
    correctOptionIndex: 0,
    explanation: 'Autotrophs (plants) fix atmospheric CO2 into carbon-based organic carbohydrates via photosynthesis. This organic carbon is subsequently transferred through food chains to primary and secondary consumers through feeding relationships.',
    hint: 'Organic carbon fixed into plant tissues moves along trophic levels as herbivores consume plants.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q19',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Human Biology: Liver Functions & Metabolism',
    questionText: '19. Which one of the following is NOT the primary function of the liver?',
    options: [
      'Controlling blood cholesterol synthesis and excretion',
      'Storing glucose as glycogen',
      'Metabolizing monosaccharides',
      'Synthesizing digestive enzymes for the stomach'
    ],
    correctOptionIndex: 3,
    explanation: 'The liver produces bile salts for lipid emulsification in the duodenum, but it does NOT synthesize digestive enzymes for the stomach (gastric juice enzymes like pepsinogen are secreted by the gastric mucosa/chief cells).',
    hint: 'The stomach secretes its own gastric juices; the liver does not send enzymes into the stomach cavity.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q20',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Vertebrate Zoology: Five Classes of Vertebrates',
    questionText: '20. A zoologist studied 5 vertebrate species:\n• spA: Smooth moist skin; pass parts of their lives in water and on land\n• spB: Streamlined bodies with scales; gills for gaseous exchange\n• spC: Feathers over the body and scales on legs; endothermic; horny beak\n• spD: Dry skin with scales; ectothermic; lungs for respiration\n• spE: Mammary glands; endothermic; higher internal body temperature\nThese species (spA, spB, spC, spD, spE) belong respectively to:',
    options: [
      'Amphibia, Reptilia, Aves, Mammalia, and Pisces.',
      'Pisces, Aves, Reptilia, Mammalia, and Amphibia.',
      'Pisces, Amphibia, Aves, Reptilia, and Mammalia.',
      'Amphibia, Pisces, Aves, Reptilia, and Mammalia.'
    ],
    correctOptionIndex: 3,
    explanation: '• spA (moist skin, amphibious) = Amphibia\n• spB (streamlined, gills) = Pisces\n• spC (feathers, beak, endotherm) = Aves (birds)\n• spD (dry scaly skin, ectotherm) = Reptilia\n• spE (mammary glands, endotherm) = Mammalia.\nCorrect order: Amphibia, Pisces, Aves, Reptilia, and Mammalia.',
    hint: 'Match feathers to Aves, gills to Pisces, and mammary glands to Mammalia.',
    difficulty: 'easy',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q21',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Plant Ecology: Xerophytic Adaptations',
    questionText: '21. Which of the following plant adaptation mechanisms helps cactus to adapt in the desert environment?',
    options: [
      'Spreading its seeds in wider areas',
      'Increasing number of stomata in its leaves',
      'Having broad leaves',
      'Storing water in its tissue'
    ],
    correctOptionIndex: 3,
    explanation: 'Cacti are succulents (xerophytes) that possess extensive parenchymal water-storage tissue in their thick, fleshy green stems to survive long droughts, combined with modified spine-like leaves to minimize transpiration.',
    hint: 'Succulence in arid plants enables survival through water storage in stems and tissues.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q22',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Human Anatomy: Structure of the Skin (Dermis)',
    questionText: '22. What is the function of dermis of the skin? It',
    options: [
      'acts as protection against heat loss.',
      'protects the entry of pathogens into the body.',
      'forms a waterproof around the body tissue.',
      'contains blood vessels and sweat glands.'
    ],
    correctOptionIndex: 3,
    explanation: 'The dermis is the vascular connective tissue layer beneath the epidermis that contains blood capillary networks (for thermoregulation), sweat glands (sudoriferous glands), sebaceous glands, nerve endings, and hair follicles.',
    hint: 'Unlike the outer dead cornified epidermis, the dermis is packed with blood vessels and sweat glands.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q23',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Sensory Organs: Balance & Semicircular Canals',
    questionText: '23. Children who play by spinning round and round fast, when they stop, they feel dizzy. Why?',
    options: [
      'The otoliths round in the same direction with the head.',
      'The optic nerves reports that the children are still moving.',
      'The fluid in their semicircular canals keeps on moving after they stop.',
      'The sensory hairs vibrate highly in response to movement of their body.'
    ],
    correctOptionIndex: 2,
    explanation: 'The semicircular canals in the inner ear detect rotational movement. When someone spins and abruptly stops, the endolymph fluid continues circulating due to inertia, continuing to bend the cupula hair cells and sending false movement signals to the brain.',
    hint: 'Fluid momentum (inertia) in the inner ear semicircular canals persists briefly after stopping.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q24',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Human Reproduction: Menstrual Cycle',
    questionText: '24. When does menstruation start in women with no obvious reproductive health problem? It happens when',
    options: [
      'the fertilized ovum reaches the uterus and attaches into the thick, spongy lining.',
      'the FSH stimulates the development of a follicle in the ovary and the egg ripens.',
      'pregnancy occurs and the embryo obtains nourishment and oxygen.',
      'thick spongy lining of the uterus detaches in the absence of pregnancy.'
    ],
    correctOptionIndex: 3,
    explanation: 'If fertilization does not occur, the corpus luteum degenerates, leading to a sharp drop in progesterone and estrogen. This causes the vascularized functional layer of the endometrium (the spongy uterine lining) to break down and shed through menstruation.',
    hint: 'Menstruation is the shedding of the uterine lining when fertilization has not occurred.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q25',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Excretory System: Nephron Structure & Function',
    questionText: '25. Which one of the following sentences is correctly matched with the function of kidney structures?',
    options: [
      'Bowman\'s capsule - acts as a filter to produce urine',
      'Cortex - monitors the osmotic pressure of the blood',
      'Glomerulus - concentrates urine and conserves water',
      'Loop of Henle - involved in ultrafiltration'
    ],
    correctOptionIndex: 0,
    explanation: 'The Bowman\'s capsule surrounds the glomerulus and acts as the ultrafiltration funnel that collects glomerular filtrate (water, urea, glucose, salts) into the renal tubule.',
    hint: 'Bowman\'s capsule and the glomerulus are the site of ultrafiltration under high hydrostatic pressure.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q26',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Homeostasis: Behavioral vs Physiological Thermoregulation',
    questionText: '26. Which of the following temperature controlling mechanisms in homoiotherms is categorized into behavioral method?',
    options: [
      'Sweating when the temperature increases',
      'Constriction of capillaries when the temperature falls',
      'Shivering as a result of drop in temperature',
      'Seeking shade when the temperature rises'
    ],
    correctOptionIndex: 3,
    explanation: 'Seeking shade, moving into the sun, huddling, or putting on clothes are conscious behavioral actions to regulate body temperature. Sweating, vasoconstriction, and shivering are automatic physiological/autonomic reflex responses.',
    hint: 'Behavioral adaptations involve intentional physical actions rather than automatic body reflexes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q27',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Enzymes in Medicine & Diagnostic Biosensors',
    questionText: '27. Industries in the medicine sector use glucose oxidase in clinistix strips for',
    options: [
      'restoring blood supply to area of heart muscle.',
      'detecting toxic metabolites in the blood.',
      'easy diagnosis of diabetes by examining a urine sample.',
      'reducing the viscosity of mucus.'
    ],
    correctOptionIndex: 2,
    explanation: 'Clinistix strips contain immobilized glucose oxidase and peroxidase enzymes. When dipped in urine, glucose is oxidized to produce hydrogen peroxide, causing a color change used for rapid screening of glucosuria in diabetic patients.',
    hint: 'Clinistix and dipsticks are classic diagnostic test strips for urinary glucose detection in diabetes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q28',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Enzymes: IUBMB / EC Enzyme Nomenclature',
    questionText: '28. In the systematic naming of enzymes, assume an enzyme is designated as EC 3.4.11.1. Which of the following correctly describes this enzyme?',
    options: [
      '11 - gives a sub-subclass to which the enzyme belongs.',
      '1 - a reference of Enzyme Commission.',
      '4 - shows to which main class the enzyme belongs.',
      '3 - indicates a subclass to which the enzyme belongs.'
    ],
    correctOptionIndex: 0,
    explanation: 'In the 4-digit EC naming system (EC a.b.c.d):\n• First digit (3) = Main Class (Hydrolases)\n• Second digit (4) = Subclass\n• Third digit (11) = Sub-subclass\n• Fourth digit (1) = Individual serial number of the specific enzyme.',
    hint: 'The four EC numbers represent: Class, Subclass, Sub-subclass, and specific Serial number.',
    difficulty: 'hard',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q29',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Enzymes: Mechanism of Enzyme Action Models',
    questionText: '29. Which one of the following sentences explains the lock-and-key model of enzyme action? The',
    options: [
      'attached substrate- the enzyme complex enters into a transition state.',
      'model explains enzyme inhibition in a complete manner.',
      'shapes of the substrate is complementary to the active site.',
      'attachment of substrate to an enzyme produces a conformational change.'
    ],
    correctOptionIndex: 2,
    explanation: 'Emil Fischer\'s lock-and-key model posits that the active site of the enzyme has a rigid, pre-formed geometric shape that is precisely complementary to the shape of the substrate molecule, just like a specific key fits into a lock.',
    hint: 'In the lock-and-key model, the shapes fit together with exact pre-existing spatial complementarity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q30',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Enzymes: Apoenzymes & Coenzymes',
    questionText: '30. Which one of the following sentences is correct about apo-enzymes? They are',
    options: [
      'cofactors that give an enzyme its catalytic activity.',
      'proteins that combine with cofactors to form active enzymes.',
      'organic molecules and many are derived from vitamins.',
      'inorganic molecules that bind loosely with the cofactors.'
    ],
    correctOptionIndex: 1,
    explanation: 'An apoenzyme is the catalytically inactive protein portion of a conjugated enzyme that requires a non-protein cofactor or coenzyme to become a fully active holoenzyme (Apoenzyme + Cofactor = Holoenzyme).',
    hint: 'Apoenzyme is the protein part that must bind with a cofactor to become active.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q31',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Enzymes: Competitive Enzyme Inhibition',
    questionText: '31. How does a competitive inhibitor affect an enzyme catalyzed reaction? By',
    options: [
      'denaturing the active site of the enzyme',
      'producing conformational change of the enzyme',
      'binding to the allosteric site of the enzyme',
      'blocking the active site of the enzyme'
    ],
    correctOptionIndex: 3,
    explanation: 'A competitive inhibitor possesses a chemical structure very similar to the normal substrate. It binds directly and reversibly to the enzyme\'s active site, physically blocking the substrate from entering.',
    hint: 'Competitive inhibitors compete directly with the substrate for the active site binding pocket.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q32',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Plant Anatomy: Leaf Tissues & Photosynthesis',
    questionText: '32. Which one of the following leaf structures is correctly matched with its function?',
    options: [
      'Palisade mesophyll - the main photosynthetic tissue of the leaf',
      'Waxy cuticle - controls the entry of carbon dioxide into the leaf',
      'Guard cells - have lots of air space and gas exchange area of the leaf',
      'Spongy mesophyll - helps to prevent water loss from the leaf'
    ],
    correctOptionIndex: 0,
    explanation: 'The palisade mesophyll consists of tightly packed, columnar cells located directly beneath the upper epidermis, containing the highest density of chloroplasts, making it the primary site of photosynthetic carbon assimilation.',
    hint: 'Palisade mesophyll is the main chlorophyll-rich layer specialized for light absorption.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q33',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Plant Physiology: Transport in Xylem vs Phloem',
    questionText: '33. Which one of the following statements correctly describes the movement of materials in plants?',
    options: [
      'Passive transport can takes place in the phloem.',
      'The transport of organic materials is due to transpiration.',
      'Water is transported in dead tissue.',
      'Active transport can take place in the xylem.'
    ],
    correctOptionIndex: 2,
    explanation: 'Water and dissolved mineral ions are transported upward from roots to leaves via xylem vessels and tracheids, which are hollow, lignified, non-living (dead) cell conduits driven by transpirational pull.',
    hint: 'Mature functional xylem vessel elements are hollow, non-living dead cells.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q34',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Plant Hormones: Gibberellins & Stem Elongation',
    questionText: '34. What will happen if an agriculture extension worker injects gibberellins into a dwarf plant? The',
    options: [
      'leaves will fall.',
      'stem will grow.',
      'roots will elongate.',
      'side shoots will grow fast.'
    ],
    correctOptionIndex: 1,
    explanation: 'Gibberellins (GA) promote internode cell elongation and cell division. Applying gibberellic acid to genetically dwarf mutant plants (such as dwarf pea or corn) overcomes the genetic block and stimulates rapid stem elongation to normal height.',
    hint: 'Gibberellins promote dramatic internode elongation in dwarf plant varieties.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'bio-2015-q35',
    subject: 'Biology',
    year: '2015 E.C.',
    topic: 'Plant Reproduction: Epigeal vs Hypogeal Germination',
    questionText: '35. A biologist collected two types of seeds (SA and SB):\n• SA: The seedling emerged curved; hypocotyl straightened and carried cotyledons and plumule above soil surface.\n• SB: The plumule pushed out while cotyledon remained underground; did not form a hook.\nWhich is correct regarding SA and SB?',
    options: [
      'Both SA and SB are of monocots.',
      'SA is of a monocot, while SB is of a dicot.',
      'Both SA and SB are of dicots.',
      'SA is of a dicot, while SB is of a monocot.'
    ],
    correctOptionIndex: 3,
    explanation: 'SA exhibits epigeal germination (hypocotyl elongates into a hook carrying cotyledons above ground, characteristic of many dicots like beans). SB exhibits hypogeal germination (epicotyl elongates while cotyledon remains buried underground, characteristic of monocots like maize).',
    hint: 'Epigeal (cotyledons above ground) is typical of dicots like beans; hypogeal is typical of monocots like maize.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  }
];
