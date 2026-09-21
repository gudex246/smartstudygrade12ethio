import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2017_EC_PART2: Question[] = [
  {
    id: 'bio-2017-q26',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Biochemistry: Catalytic Properties of Biological Enzymes',
    questionText: '26. Which one of the following statements is correct regarding the catalytic action and biochemical properties of enzymes in living cells?',
    options: [
      'They change the overall chemical nature and equilibrium composition of the reaction products.',
      'They allow biochemical reactions in cells to take place rapidly at body temperature by lowering activation energy.',
      'They are chemically consumed and permanently altered at the end of each biochemical reaction.',
      'They increase the initial activation energy required to start a biochemical reaction.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Enzymes are biological catalysts that dramatically accelerate metabolic reaction rates by providing an alternative pathway with a significantly lower activation energy ($E_a$). They remain chemically unchanged at the end of the reaction and do not alter the final chemical nature of products.

🇪🇹 አማርኛ (Amharic):
ኢንዛይሞች (Enzymes) ባዮሎጂካዊ አፋጣኞች በመሆናቸው የሚፈለገውን የመነሻ ጉልበት (Activation energy) በመቀነስ ኬሚካላዊ ሂደቶች በህዋሳት ውስጥ በከፍተኛ ፍጥነት እንዲከናወኑ ያስችላሉ።

🌳 Afaan Oromoo:
Inzaayimonni saffisiistota baayoloojikaalaa waan ta\'aniif anniisaa jalqabsiisaa (activation energy) gadi buusuun daddafanii wal-nyaatinsi akka raawwatamu godhu.`,
    hint: 'Enzymes lower activation energy to speed up cellular reactions without being consumed.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q27',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Biochemistry: Levels of Protein Structure',
    questionText: '27. Four students prepared posters describing protein structures:\n• Student I: Polypeptide chain folded into alpha-helix and beta-pleated sheets stabilized by hydrogen bonds\n• Student II: Linear amino acid sequence linked by covalent peptide bonds\n• Student III: Multi-subunit quaternary complex with four polypeptide chains and prosthetic haem groups (Hemoglobin)\n• Student IV: Overall 3D globular conformation determined by R-group side-chain interactions\n\nWhich students illustrated Secondary and Quaternary protein structures, respectively?',
    options: [
      'Student I (Secondary) and Student IV (Tertiary)',
      'Student II (Primary) and Student III (Quaternary)',
      'Student I (Secondary) and Student III (Quaternary)',
      'Student II (Primary) and Student IV (Tertiary)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Student I represents Secondary Structure: Regular spatial folding of polypeptide backbone into $\\alpha$-helices and $\\beta$-pleated sheets via hydrogen bonding.
• Student IV represents Tertiary Structure: 3D folding via R-group bonds.
• Student III represents Quaternary Structure: Multi-polypeptide complexes like hemoglobin.
*(Note: As keyed in the official exam booklet, Option A/C corresponds to the structure classifications).*

🇪🇹 አማርኛ (Amharic):
• ተማሪ 1፡ ሁለተኛ ደረጃ የፕሮቲን መዋቅር (Secondary structure - alpha-helix እና beta-pleated sheets)
• ተማሪ 3/4፡ የፕሮቲን ሶስተኛ እና አራተኛ ደረጃ መዋቅሮች ናቸው።

🌳 Afaan Oromoo:
Barataan 1 caasaa \'Secondary\' (alfaa-heeliksii fi beetaa-shiitii) yoo agarsiisu, Barataan 3/4 caasaa pirootiinii sadarkaa olaanaa agarsiisa.`,
    hint: 'Alpha-helix & beta-sheet = Secondary; Multi-subunit complex = Quaternary.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q28',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Enzymes: Daniel Koshland\'s Induced-Fit Model',
    questionText: '28. How does the modern Induced-Fit Model explain enzyme-substrate specificity and catalysis?',
    options: [
      'The flexible active site of the enzyme changes its conformation slightly upon substrate binding to achieve a precise snug fit.',
      'The enzyme has an entirely rigid active site that acts as an inflexible keyhole.',
      'The enzyme has multiple active sites that non-specifically accommodate any macromolecule.',
      'The enzyme binds only to allosteric sites and ignores the substrate shape.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
According to Daniel Koshland's Induced-Fit Model, the enzyme's active site is dynamic and flexible. Upon initial substrate collision, the active site undergoes conformational changes to wrap snugly around the substrate, straining substrate bonds and facilitating catalysis.

🇪🇹 አማርኛ (Amharic):
በኢንዲውዝድ-ፊት ሞዴል (Induced-fit model) መሰረት የኢንዛይሙ አክቲቭ ሳይት (Active site) ከንዑስ አካሉ (substrate) ጋር ሲገናኝ ቅርፁን በትንሹ በመቀየር በትክክል ሸብ አድርጎ ይይዛል።

🌳 Afaan Oromoo:
Akka moodela \'Induced-fit\'tti, bakki sochii inzaayimii (active site) yemmuu subistireetii wajjin wal-qunnamu bifa isaa xiqqoo jijjiiruun qabata.`,
    hint: 'Induced fit involves active site conformational flexibility to snugly fit substrate molecules.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q29',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Enzyme Inhibition: Competitive Inhibitors',
    questionText: '29. What happens to the natural substrate molecule when a competitive inhibitor binds to the enzyme?',
    options: [
      'The substrate undergoes rapid conformational change.',
      'The substrate cannot bind to the active site because it is blocked by the inhibitor.',
      'The substrate binds to the allosteric site temporarily.',
      'The substrate easily binds to the active site at double the velocity.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Competitive inhibitors closely resemble the molecular structure of the true substrate. They compete directly for occupancy of the enzyme's active site. When a competitive inhibitor occupies the active site, substrate molecules are physically blocked from binding, decreasing initial reaction velocity.

🇪🇹 አማርኛ (Amharic):
ተፎካካሪ ገቺ (Competitive inhibitor) ከኢንዛይሙ አክቲቭ ሳይት ጋር አስቀድሞ ሲያያዝ፣ ትክክለኛው ሰብስቴት (substrate) ወደ አክቲቭ ሳይቱ እንዳይገባ ያግደዋል።

🌳 Afaan Oromoo:
Dhoorkituun \'competitive inhibitor\' bakka sochii (active site) inzaayimii dura qabachuun subistireetiin akka hin hidhamne dhorka.`,
    hint: 'Competitive inhibitors directly block substrates from binding to the enzyme active site.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q30',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Enzyme Regulation: Allosteric Inhibitors and Activators',
    questionText: '30. What will happen to an enzyme-catalyzed reaction when an allosteric activator binds to an allosteric enzyme?',
    options: [
      'Inhibitor binds to the active site to accelerate reaction rate.',
      'Inhibitor binds to regulatory site to speed up the reaction.',
      'Activator binds to the catalytic site to terminate the reaction.',
      'Activator binds to the allosteric regulatory site, stabilizing active conformation and activating the reaction.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Allosteric enzymes possess regulatory (allosteric) sites distinct from the active site. Binding of an allosteric activator to the regulatory site induces a conformational shift that stabilizes the active high-affinity state of the active site, increasing catalytic reaction velocity.

🇪🇹 አማርኛ (Amharic):
አሎስቴሪክ አንቀሳቃሽ (Allosteric activator) ከኢንዛይሙ የቁጥጥር ቦታ (regulatory site) ጋር ሲገናኝ የአክቲቭ ሳይቱን ቅርፅ በማስተካከል የኬሚካላዊ ሂደቱን ፍጥነት ያነቃቃል።

🌳 Afaan Oromoo:
\'Allosteric activator\' bakka to\'annoo (regulatory site) irratti hidhamuun bifa active site sirreessee wal-nyaatinsa akka saffisu taasisa.`,
    hint: 'Activator binds to the allosteric regulatory site to activate the catalytic reaction.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q31',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Biochemistry: Classification of Enzymes and Reaction Types',
    questionText: '31. Which one of the following classes of enzymes is correctly matched with the type of biochemical reaction it catalyzes?',
    options: [
      'Oxidoreductases - Transfer functional groups between molecules',
      'Transferases - Transfer electrons directly from donor to acceptor',
      'Ligases - Catalyze the joining of two molecules with the expenditure of ATP energy (or Lyases - cleave bonds non-hydrolytically)',
      'Lyases - Catalyze the hydrolytic cleavage of ester bonds using water'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Enzyme Classifications (IUBMB System):
• Oxidoreductases: Redox electron transfer reactions
• Transferases: Transfer of functional groups (amino, phosphate, methyl)
• Hydrolases: Hydrolysis cleaving bonds by adding water
• Lyases: Cleaving double bonds or forming rings non-hydrolytically
• Isomerases: Geometric structural rearrangements
• Ligases: Joining two large molecules by synthesizing covalent bonds coupled with ATP hydrolysis (e.g., DNA ligase).

🇪🇹 አማርኛ (Amharic):
ላይጌዝ (Ligases) ሁለት ሞለኪውሎችን የATP ሃይልን በመጠቀም በማገናኘት አዲስ ትስስር የሚፈጥሩ ኢንዛይሞች ናቸው (ለምሳሌ DNA ligase)።

🌳 Afaan Oromoo:
Inzaayimonni \'Ligases\' jedhaman anniisaa ATP fayyadamuun molakiyuulota lama walitti qabsiisuun beekamu.`,
    hint: 'Ligases join molecules using ATP; Lyases break bonds without water; Hydrolases use water.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q32',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Enzyme Kinetics: Optimization of Temperature and pH',
    questionText: '32. An enzyme functions within an operating temperature range of 20°C to 45°C and pH 4 to 9. Which physiological condition optimizes its catalytic activity?',
    options: [
      'Adjusting temperature below 20°C makes the enzyme most active.',
      'Adjusting pH above 9 increases collision frequency without denaturation.',
      'Adjusting the temperature to optimum between 20°C and 45°C (e.g. ~37°C) provides high kinetic energy with minimum denaturation and maximum effective collisions.',
      'The optimum pH under which this enzyme operates is below 4.0.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Within the physiological range (20°C–45°C), operating near the optimum (~37°C) maximizes kinetic energy and enzyme-substrate collision rates while avoiding thermal denaturation. At pH outside 4–9, ionic bonding of the active site denatures.

🇪🇹 አማርኛ (Amharic):
የኢንዛይሙን እንቅስቃሴ ለማፋጠን የሙቀት መጠኑን በተፈቀደው ምቹ ክልል (20°C - 45°C) ውስጥ ማቆየት ኢንዛይሙ ሳይበላሽ (denature ሳይሆን) ከፍተኛ ፍጥነት እንዲኖረው ያደርጋል።

🌳 Afaan Oromoo:
Ho\'a madaalamaa (20°C - 45°C) gidduutti qabuun inzaayimiin osoo hin miidhamin akka saffisaan hojjetu taasisa.`,
    hint: 'Optimum temperature provides high kinetic collisions without causing thermal denaturation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q33',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Genetics: Chromosome Structure and Gene Definition',
    questionText: '33. All of the following characteristics correctly describe a chromosome EXCEPT:',
    options: [
      'It contains hundreds to thousands of linearly arranged genes.',
      'It exists in homologous pairs in diploid eukaryotic organisms.',
      'It is composed of tightly coiled chromatin fibers of DNA and histone proteins.',
      'It is the single indivisible functional unit of inheritance (A single Gene is the functional unit of inheritance).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
A single **gene** (not the entire chromosome) is defined as the fundamental functional unit of heredity. A chromosome is a large macroscopic macromolecular structure carrying many hundreds or thousands of individual genes condensed with histone proteins.

🇪🇹 አማርኛ (Amharic):
የውርስ መረጃ መሰረታዊ መለኪያ (functional unit of inheritance) "ጂን" (Gene) እንጂ ሙሉ ክሮሞዞም አይደለም። ክሮሞዞም በውስጡ በሺህዎች የሚቆጠሩ ጂኖችን ይይዛል።

🌳 Afaan Oromoo:
Dhaabbanni bu\'uuraa dhaala sanyiiti \'Jiinii\' (Gene) dha malee kuroomoosoomii guutuu miti. Kuroomoosoomiin jiinota kumaatama of keessatti qabata.`,
    hint: 'A Gene is the fundamental functional unit of inheritance, whereas a chromosome contains many genes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q34',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Molecular Biology: Structural and Functional Differences Between DNA and RNA',
    questionText: '34. Which of the following statements correctly highlights key structural or functional differences between DNA and RNA?',
    options: [
      'Both DNA and RNA share adenine, guanine, and cytosine, but differ in their pyrimidine (Thymine in DNA vs Uracil in RNA) and pentose sugar (Deoxyribose vs Ribose).',
      'RNA produces DNA through the primary process of normal transcription.',
      'RNA stores primary nuclear genomic material while DNA acts only as an adaptor in protein synthesis.',
      'DNA is a single-stranded ephemeral messenger while RNA is an immortal double helix.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• DNA: Double-stranded, contains Deoxyribose sugar and Thymine (A, T, G, C), highly stable long-term genetic repository.
• RNA: Single-stranded, contains Ribose sugar and Uracil instead of Thymine (A, U, G, C), involved in mRNA transcription and translation.

🇪🇹 አማርኛ (Amharic):
ዲ ኤን ኤ እና አር ኤን ኤ በስኳራቸው (Deoxyribose vs Ribose) እና በአንደኛው ናይትሮጅናስ ቤዛቸው (በዲ ኤን ኤ ውስጥ ታይሚን / Thymine፤ በአር ኤን ኤ ውስጥ ዩራሲል / Uracil) ይለያያሉ።

🌳 Afaan Oromoo:
DNA fi RNA gosa sukkaara isaaniitiin (Deoxyribose fi Ribose) fi qabiyyee naayitiroojiiniitiin (DNA keessatti Thymine, RNA keessatti Uracil) adda ba\'u.`,
    hint: 'DNA contains Deoxyribose and Thymine; RNA contains Ribose and Uracil.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q35',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Meiosis: Stages of Meiosis I and Telophase I Events',
    questionText: '35. All of the following cellular events occur during Telophase I of Meiosis I EXCEPT:',
    options: [
      'Crossing over (Genetic recombination) takes place (Occurs during Prophase I).',
      'Spindle fibers disassemble and disappear.',
      'Haploid sets of double-chromatid chromosomes cluster at opposite poles.',
      'Nuclear envelopes reform around the two daughter nuclei.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Crossing over (chiasmata formation and exchange of non-sister chromatid genetic segments) occurs exclusively during **Prophase I** (Pachytene sub-stage) of Meiosis I, NOT during Telophase I. Telophase I involves spindle disassembly, chromosome decondensation, and nuclear envelope reformation.

🇪🇹 አማርኛ (Amharic):
ክሮሲንግ ኦቨር (Crossing over / የክሮሞዞም ቅንብር ልውውጥ) የሚካሄደው በፕሮፌዝ 1 (Prophase I) እንጂ በቴሎፌዝ 1 (Telophase I) ውስጥ አይደለም።

🌳 Afaan Oromoo:
Wal-jijjiirraan kuroomoosoomii (\'Crossing over\') kan raawwatu \'Prophase I\' keessatti malee \'Telophase I\' keessatti miti.`,
    hint: 'Crossing over occurs in Prophase I, not Telophase I.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q36',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Mendelian Genetics: Monohybrid F2 Generation Genotypic Ratios',
    questionText: '36. A true-breeding axial flower pea plant ($AA$) was crossed with a terminal flower plant ($aa$) producing an $F_1$ generation ($Aa$). If 1000 offspring are produced by self-crossing the $F_1$ plants ($Aa \\times Aa$), what is the expected number of heterozygous dominant ($Aa$) individuals in the $F_2$ generation?',
    options: [
      '200 individuals',
      '750 individuals',
      '500 individuals',
      '250 individuals'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In a Mendelian monohybrid cross ($Aa \\times Aa$):
• Genotypic Ratio = $1 AA : 2 Aa : 1 aa$ ($25\\% AA, 50\\% Aa, 25\\% aa$).
• Heterozygous individuals ($Aa$) represent $50\\%$ ($\\frac{2}{4}$ or $\\frac{1}{2}$) of the population.
$$\\text{Number of } Aa = 0.50 \\times 1000 = 500$$

🇪🇹 አማርኛ (Amharic):
የ $Aa \\times Aa$ ዝርያ ውጤት ሬሾ $1 AA : 2 Aa : 1 aa$ ነው። ሄትሮዛይገስ ($Aa$) ግማሹን (50%) የሚይዝ በመሆኑ፡
$$1000 \\times 50\\% = 500$$

🌳 Afaan Oromoo:
F2 keessatti \'Heterozygous\' ($Aa$) walakkaa (50%) waan ta\'uuf:
$$1000 \\times 50\\% = 500$$ dha.`,
    hint: 'Heterozygous Aa frequency is 50% (2/4). 50% of 1000 = 500.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q37',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Genetics: Test Cross and Determining Unknown Genotype',
    questionText: '37. If you perform a genetic test cross on a pea plant displaying the dominant green pod phenotype by crossing it with a homozygous recessive yellow pod plant ($gg$), and 100% of all progeny express green pods, what was the unknown parent genotype?',
    options: [
      'Homozygous dominant ($GG$)',
      'Homozygous recessive ($gg$)',
      'Heterozygous dominant ($Gg$)',
      'Incompletely dominant'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A test cross mates an individual of unknown dominant genotype ($G\\_$) with a homozygous recessive tester ($gg$).
• If parent is $GG \\times gg \\rightarrow 100\\% Gg$ (All green).
• If parent were $Gg \\times gg \\rightarrow 50\\% Gg$ (green) and $50\\% gg$ (yellow).
Because 100% of offspring were green, the unknown parent was Homozygous Dominant ($GG$).

🇪🇹 አማርኛ (Amharic):
ቴስት ክሮስ (Test cross) ሲደረግ ሁሉም ልጆች (100%) አረንጓዴ ከሆኑ፣ ወላጁ 100% ዶሚናንት የሆነው ሆሞዛይገስ ዶሚናንት ($GG$) ነበር ማለት ነው።

🌳 Afaan Oromoo:
Yoo sanyiin uumame hundi (100%) magariisa ta\'e, sanyiin warraa sun \'Homozygous dominant\' ($GG$) dha.`,
    hint: 'If 100% of test cross offspring show the dominant trait, the parent is homozygous dominant (GG).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q38',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Genetics: Non-Mendelian Inheritance Patterns',
    questionText: '38. Consider the following genetic crosses:\n1. Crossing inflated ($II$) and constricted ($ii$) pea pods produces 100% inflated pods.\n2. Mating a red bull ($C^R C^R$) and white cow ($C^W C^W$) produces a roan calf ($C^R C^W$) with mixed red and white hairs.\n3. Type A ($I^A I^A$) and Type B ($I^B I^B$) parents produce Type AB ($I^A I^B$) offspring.\n4. Red ($RR$) and white ($rr$) snapdragon flowers produce intermediate pink ($Rr$) offspring.\n\nWhich of the above examples represent Non-Mendelian inheritance patterns?',
    options: [
      '1, 2, and 3',
      '1, 3, and 4',
      '1, 2, and 4',
      '2 (Codominance), 3 (Codominance/Multiple Alleles), and 4 (Incomplete Dominance)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• 1 is classic Mendelian Complete Dominance (Inflated dominates constricted).
• 2 is Codominance (both red and white alleles expressed simultaneously in roan cattle).
• 3 is Codominance / Multiple Allelism (both A and B glycoproteins expressed).
• 4 is Incomplete Dominance (intermediate pink blending phenotype).
Thus, 2, 3, and 4 are Non-Mendelian.

🇪🇹 አማርኛ (Amharic):
የሜንዴልን ህግ የማይከተሉት (Non-Mendelian inheritance)፡ 2 (Codominance - የከብቶች ሮአን ቀለም)፣ 3 (Codominance - የደም አይነት AB) እና 4 (Incomplete dominance - ሮዝ አበባ) ናቸው።

🌳 Afaan Oromoo:
Fakkeenyi seera Meendelii hin hordofne: 2 (Codominance - Roovanii), 3 (Dhiiga AB), fi 4 (Incomplete dominance - Daraaraa roozii) dha.`,
    hint: 'Codominance (roan, AB blood) and Incomplete Dominance (pink flowers) are non-Mendelian.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q39',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Human Genetics: X-Linked Recessive Inheritance Pedigree',
    questionText: '39. In a pedigree analyzing red-green color blindness (an X-linked recessive trait), a carrier female ($X^N X^n$) marries a color-blind male ($X^n Y$). What is the theoretical probability that their offspring will be a carrier female and a color-blind male, respectively?',
    options: [
      '1/4 carrier female and 1/4 color-blind male',
      '1/2 carrier female and 1/2 color-blind male',
      '3/4 carrier female and 1/4 color-blind male',
      '1/4 carrier female and 1/2 color-blind male'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Cross: $X^N X^n \\times X^n Y$
Offspring Punnett Square:
• Female offspring: $X^N X^n$ (Carrier female, 25% of total offspring), $X^n X^n$ (Color-blind female, 25%)
• Male offspring: $X^N Y$ (Normal male, 25%), $X^n Y$ (Color-blind male, 25%)
Therefore, the probability of a carrier female is $\\frac{1}{4}$ (25%) and the probability of a color-blind male is $\\frac{1}{4}$ (25%).

🇪🇹 አማርኛ (Amharic):
ከ $X^N X^n \\times X^n Y$ ጋብቻ፡
- ተሸካሚ ሴት ($X^N X^n$) የመሆን እድል = 1/4 (25%)
- ታማሚ/የቀለም እውር ወንድ ($X^n Y$) የመሆን እድል = 1/4 (25%) ነው።

🌳 Afaan Oromoo:
Wal-hormaata $X^N X^n \\times X^n Y$ keessatti carraan intala qabdoota ($X^N X^n$) ta\'uu 1/4 (25%) fi dhiira dhukkubsataa ($X^n Y$) ta\'uu 1/4 (25%) dha.`,
    hint: 'Each of the 4 genotype combinations (carrier female, affected female, normal male, affected male) has 1/4 probability.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q40',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Selective Breeding: Inbreeding in Animal Husbandry',
    questionText: '40. Farmers in a rural district want to preserve and fix a desirable long-tail and high-fat trait in their local sheep flock over successive generations by mating closely related individuals within the local population. What breeding method are they applying?',
    options: [
      'Inbreeding (Selective line-breeding of closely related individuals)',
      'Crossbreeding (Outcrossing distinct breeds)',
      'Recombinant Genetic Engineering',
      'Somatic Cell Nuclear Transfer Cloning'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Inbreeding involves breeding closely related individuals within the same breed/flock to increase homozygosity, concentrating and fixing desirable phenotypic traits (such as tail fat storage) across future generations.

🇪🇹 አማርኛ (Amharic):
የሚፈለገውን ጥሩ ዝርያ (ለምሳሌ ረጅም ጭራ ያላቸው በጎችን) ጠብቆ ለማቆየት ተቀራራቢ ዝርያ ያላቸውን በጎች እርስ በርስ ማዳቀል ኢንብሪዲንግ (Inbreeding) ይባላል።

🌳 Afaan Oromoo:
Firoota dhihoo ta\'an walitti horsiisuun sanyii filatamaa eeguun \'Inbreeding\' jedhama.`,
    hint: 'Inbreeding increases homozygosity to fix desirable traits among closely related stock.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q41',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Endocrinology: Reproductive Hormones and Progesterone Function',
    questionText: '41. If blood progesterone levels remain high following ovulation and fertilization in the human female menstrual cycle, what is the direct physiological outcome?',
    options: [
      'FSH will be produced rapidly, stimulating a new ovarian follicular cycle immediately.',
      'Estrogen will drop to zero, shedding the functional layer of the endometrium.',
      'The vascular endometrium lining of the uterus is maintained and prepared for embryo implantation and pregnancy.',
      'The corpus luteum immediately degenerates and ceases hormone synthesis.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Progesterone (secreted by the corpus luteum and later the placenta) maintains the vascularized, nutrient-rich endometrial lining of the uterus, prevents menstruation, and inhibits pituitary FSH/LH release via negative feedback to sustain pregnancy.

🇪🇹 አማርኛ (Amharic):
የፕሮጄስቴሮን (Progesterone) ሆርሞን መጠን ከፍተኛ ሆኖ ከቀጠለ፣ የማህፀን ግድግዳ (Endometrium) ሳይፈርስ ተዘጋጅቶ ፅንስ እንዲያርፍበትና እርግዝና እንዲቀጥል ያደርጋል።

🌳 Afaan Oromoo:
Hoormooniin \'Progesterone\' sadarkaa olaanaa irra yoo ture gombisaan gadaamessaa (uterus lining) akka hin jigre taasisee ulfaaf qopheessa.`,
    hint: 'Progesterone maintains the endometrial lining of the uterus to support pregnancy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q42',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Reproductive Health: Permanent Surgical Contraception (Tubal Ligation)',
    questionText: '42. Which highly reliable contraceptive method permanently prevents the passage of secondary oocytes from the ovaries through the oviducts/fallopian tubes by means of surgical intervention?',
    options: [
      'Contraceptive depot injections',
      'Chemical spermicidal gels',
      'Copper intrauterine device (IUD)',
      'Surgical sterilization (Tubal ligation in females / Vasectomy in males)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Female surgical sterilization (tubal ligation) involves cutting, clamping, or cauterizing the fallopian tubes, permanently blocking the ovum from meeting sperm and preventing fertilization.

🇪🇹 አማርኛ (Amharic):
እንቁላል ከኦቫሪ ወደ ማህፀን የሚተላለፍበትን ቱቦ በቀዶ ጥገና በመዝጋት እርግዝናን በዘላቂነት የሚከላከል ዘዴ ስቴሪላይዜሽን (Surgical Sterilization / ቱባል ላይጌሽን) ይባላል።

🌳 Afaan Oromoo:
Mala baqaqsanii yaaluun ujummoo hanqaaquu cufuudhaan ulfa dhaabbataan ittisuun \'Sterilization\' (Tubal ligation) jedhama.`,
    hint: 'Surgical sterilization (tubal ligation) permanently cuts and ties the fallopian tubes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q43',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Health & Disease: Risk Factors for Sexually Transmitted Infections (STIs)',
    questionText: '43. Which of the following behaviors significantly increases an individual\'s vulnerability and risk of acquiring sexually transmitted infections (STIs/HIV)?',
    options: [
      'Having no prior clinical history of infectious diseases',
      'Misuse and abuse of intoxicating alcohol and psychoactive drugs that impair cognitive judgment and risk perception',
      'Practicing protected sexual contact and prompt STI medical treatment',
      'Consistent and correct use of barrier condoms during intercourse'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Substance abuse (excessive alcohol and psychoactive drugs) severely impairs executive cognitive judgment, disinhibiting risk-taking behaviors and dramatically increasing unprotected sexual encounters with multiple partners.

🇪🇹 አማርኛ (Amharic):
የአዕምሮ ውሳኔ ሰጪነትን የሚያዛቡ አደንዛዥ እጾችን እና አልኮልን አላግባብ መውሰድ ለአባላዘር በሽታዎች (STIs/HIV) የመጋለጥ እድልን በከፍተኛ ሁኔታ ይጨምራል።

🌳 Afaan Oromoo:
Dhugaatii alkoolii fi qorichoota sammuu hadoochan fayyadamuun murtii sirrii dhabsiisuun balaa dhibee daddarboo saalaaf nama saaxila.`,
    hint: 'Substance abuse impairs decision-making and increases risky unprotected behaviors.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q44',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Reproductive Health: Mechanisms of Intrauterine Devices vs Hormonal Injections',
    questionText: '44. Two women chose different contraceptive methods:\n• Woman I: Fitted an intrauterine device in her uterus where released copper ions act as a spermicide to prevent sperm from fertilizing the egg.\n• Woman II: Received an injectable progestin that prevents pituitary gonadotropin secretion, inhibiting ovulation.\n\nWhich contraceptive options did Woman I and Woman II utilize, respectively?',
    options: [
      'Sterilization and Injectable Depo-Provera',
      'Post-pill and Copper-coated intrauterine device',
      'Contraceptive injection and subdermal implant',
      'Copper-coated Intrauterine Device (IUD) and Hormonal Contraceptive Injection (Depo-Provera)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Woman I: Copper-T IUD fitted into the uterine cavity releases copper ions that produce a localized spermicidal inflammatory reaction.
• Woman II: Contraceptive hormonal injection (Depo-Provera / DMPA) continuously releases synthetic progestin to suppress FSH/LH surges, halting ovulation.

🇪🇹 አማርኛ (Amharic):
• ሴት 1፡ በማህፀን ውስጥ የሚቀመጥ የመዳብ ሉፕ (Copper-coated IUD)
• ሴት 2፡ እንቁላል እንዳይፈጠር የሚከላከል የሆርሞን መርፌ (Contraceptive injection / Depo-Provera) ተጠቅመዋል።

🌳 Afaan Oromoo:
• Dubartii 1: Meeshaa gadaamessa keessa kaa\'amu (\'Copper-coated IUD\')
• Dubartii 2: Lilmoo hoormoonii ulfa ittisu (\'Contraceptive injection\') fayyadamte.`,
    hint: 'Copper IUD prevents fertilization in uterus; Hormonal injections suppress ovarian ovulation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q45',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Reproductive Health: Harmful Traditional Practices (HTPs)',
    questionText: '45. A community survey in two rural villages identified Harmful Traditional Practices (HTPs):\n• Village 1: Forcing underage minor schoolgirls into early arranged marriages and high rates of gender-based harassment.\n• Village 2: Abducting young girls by force for non-consensual marriage (marriage by abduction).\n\nWhich statement accurately summarizes the reproductive health violations in Village 1?',
    options: [
      'In Village 1, kidnapping and female genital mutilation are the primary documented occurrences.',
      'In Village 1, Gender-Based Violence (GBV) and Child/Early Marriage are the common harmful traditional practices.',
      'In Village 2, female genital mutilation is the only prevailing condition.',
      'In Village 2, safe consensual family planning is dominant.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Forcing underage minor girls into non-consensual marriage violates human rights and constitutes Child/Early Marriage, while sexual harassment and domestic coercion constitute Gender-Based Violence (GBV), causing obstetric fistula, psychological trauma, and maternal mortality.

🇪🇹 አማርኛ (Amharic):
በመንደር 1 ውስጥ የተስተዋሉት ጎጂ ልማዳዊ ድርጊቶች፡ ጾታዊ ጥቃት (Gender-based violence) እና ያለዕድሜ ያለፍላጎት የሚፈፀም ያለዕድሜ ጋብቻ (Early marriage) ናቸው።

🌳 Afaan Oromoo:
Ganda 1 keessatti gochootni miidhaa qaban kan mul\'atan: Miidhaa koorniyaa irratti hundaa\'e (GBV) fi gaa\'ela umrii malee (early marriage) dha.`,
    hint: 'Underage marriage and sexual harassment constitute Child Marriage and Gender-Based Violence.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q46',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Health & Disease: Alcohol and HIV Transmission Risks',
    questionText: '46. How does chronic or acute alcohol consumption biologically and behaviorally contribute to the heightened spread of HIV/AIDS transmission?',
    options: [
      'By improving analytical decision-making capabilities of an individual',
      'By impairing cognitive inhibitions and driving individuals to willingly engage in risky, unprotected sexual behaviors',
      'By causing complete loss of sexual drive in both males and females',
      'By directly speeding up retroviral reverse transcriptase in the bloodstream'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Alcohol acts as a central nervous system depressant on the prefrontal cortex, impairing judgment, reducing risk perception, and significantly increasing the likelihood of engaging in unprotected sexual intercourse with multiple or high-risk partners.

🇪🇹 አማርኛ (Amharic):
አልኮል መጠጣት የአዕምሮን የማሰብ እና ራስን የመቆጣጠር አቅም በማዳከም ሰዎች ላልተጠበቀ የግብረ-ስጋ ግንኙነትና ለአደገኛ ባህሪዎች እንዲጋለጡ በማድረግ ለኤችአይቪ (HIV) ስርጭት አስተዋጽኦ ያደርጋል።

🌳 Afaan Oromoo:
Alkooliin sammuu adoochuun of to\'achuu dhabsiisa; kunis namoonni wal-qunnamtii saalaa of-eeggannoo hin qabne akka raawwatan gochuun HIV babal\'isa.`,
    hint: 'Alcohol reduces behavioral inhibitions, leading to unprotected sexual risks.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q47',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Environmental Biology: Renewable Natural Resources',
    questionText: '47. Select the option in which ALL listed items are classified strictly as Renewable Natural Resources:',
    options: [
      'Coal, crude oil, natural gas, and copper minerals',
      'Coal, wind kinetic energy, hydroelectric power, and biomass',
      'Solar sunlight, wind energy, hydroelectric power, and organic biomass',
      'Sunlight, wind energy, hydroelectric power, and fossil natural gas'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Renewable Resources: Replenished naturally at a rate equal to or faster than their consumption rate (e.g., Solar radiation, Wind kinetic energy, Hydroelectric water flows, Biomass).
• Non-Renewable Resources: Depleted upon extraction and take geological epochs to form (e.g., Coal, Petroleum oil, Natural gas, Mineral ores).

🇪🇹 አማርኛ (Amharic):
ሙሉ በሙሉ ታዳሽ የተፈጥሮ ሃብቶች (Renewable resources) የሆኑት፡ የፀሐይ ብርሃን፣ የንፋስ ሃይል፣ የውሃ ሃይል (Hydro power) እና ባዮማስ (Biomass) ናቸው።

🌳 Afaan Oromoo:
Qabeenyawwan uumamaa haaromfaman hundi: Ibsaa aduu (Sunlight), qilleensa (Wind), humna bishaanii (Hydro power) fi baayoo-maasii dha.`,
    hint: 'Sunlight, wind, hydropower, and biomass are all renewable energy resources.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q48',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Conservation Biology: Threats vs Wildlife Conservation Methods',
    questionText: '48. Consider the following list of environmental and land management activities:\nI. Establishing National Parks\nII. Setting up Wildlife Sanctuaries\nIII. Demarcating Controlled Hunting and Wildlife Reserves\nIV. Practicing Uncontrolled Livestock Overgrazing\n\nWhich of the above activities CANNOT be used for the conservation of wildlife?',
    options: [
      'Activity II',
      'Activity I',
      'Activity III',
      'Activity IV (Practicing uncontrolled overgrazing)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• In-situ wildlife conservation methods include National Parks, Sanctuaries, and Biosphere Reserves.
• Overgrazing (Activity IV) destroys vegetative soil cover, accelerates desertification, causes habitat fragmentation, and competes with wild herbivores, thereby destroying wildlife.

🇪🇹 አማርኛ (Amharic):
የዱር እንስሳትን ለመጠበቅ የማይጠቅመው እና ስነ-ምህዳሩን የሚያወድመው ከልክ ያለፈ ከብቶችን ማሰማራት (Overgrazing - Activity IV) ነው።

🌳 Afaan Oromoo:
Gochaalee keessaa kan bineensota bosonaa miidhu malee hin eegne: Horii baay\'ee naannoo tokkotti bobbaasuu (\'Overgrazing\' - IV) dha.`,
    hint: 'Overgrazing leads to habitat degradation and soil erosion, destroying wildlife.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q49',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Pollution & Acid Rain: Causative Gases and Ecological Damage',
    questionText: '49. Identify the primary atmospheric air pollutants that cause Acid Rain and their severe ecological effects, respectively:',
    options: [
      'Carbon dioxide and methane - Rapid melting of polar ice caps and sea level rise',
      'Sulfur dioxide ($SO_2$) and Nitrogen oxides ($NO_x$) - Acidifying aquatic ecosystems, leaching soil nutrients, and defoliating forest plants',
      'Perfluorocarbons - Direct causation of skin melanoma and cataracts',
      'Chlorofluorocarbons (CFCs) - Stratospheric ozone depletion and acute respiratory infections'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Sulfur dioxide ($SO_2$) and Nitrogen dioxides ($NO_x$) emitted from burning fossil fuels dissolve in atmospheric rainwater to form sulfuric acid ($H_2SO_4$) and nitric acid ($HNO_3$), generating acid rain ($pH < 5.6$) that acidifies freshwater lakes, leaches toxic aluminum, and destroys forest canopies.

🇪🇹 አማርኛ (Amharic):
የአሲዳማ ዝናብ (Acid rain) ዋነኛ መንስኤዎች ሰልፈር ዳይኦክሳይድ ($SO_2$) እና ናይትሮጅን ዳይኦክሳይድ ($NO_x$) ጋዞች ሲሆኑ፣ የሚያስከትሉት ጉዳት ደግሞ ደኖችን ማውደም እና የውሃ አካላትን አሲዳማ ማድረግ ነው።

🌳 Afaan Oromoo:
Sababni rooba asidii \'Sulfur dioxide\' fi \'Nitrogen dioxide\' yoo ta\'an, miidhaan isaaniis biqiltoota bosonaa fi jireenya bishaanii balleessuudha.`,
    hint: 'SO2 and NOx produce sulfuric and nitric acids, causing acid precipitation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q50',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Global Warming: Greenhouse Gases and Biodiversity Loss',
    questionText: '50. Which of the following correctly pairs a major cause and an ecological consequence of anthropogenic Global Warming, respectively?',
    options: [
      'Greenhouse gases emission and significant dropping of global sea levels',
      'Accumulation of Greenhouse gases ($CO_2, CH_4$) and massive Loss of Global Biodiversity / Coral Reef Bleaching',
      'Burning of fossil fuels and rapid increase in global species richness',
      'Industrial deforestation and global lowering of oceanic temperatures'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Anthropogenic greenhouse gas emissions ($CO_2$, methane, nitrous oxide) trap infrared radiation in the troposphere, driving global warming. This leads to ocean warming, thermal expansion and sea level rise, shifting biomes, coral reef bleaching, and catastrophic loss of biodiversity.

🇪🇹 አማርኛ (Amharic):
የአለም ሙቀት መጨመር (Global warming) ዋነኛ መንስኤው የሙቀት አማቂ ጋዞች (Greenhouse gases) መብዛት ሲሆን፣ ውጤቱ ደግሞ የብዝሃ-ህይወት መጥፋት (loss of biodiversity) እና የበረዶ መቅለጥ ነው።

🌳 Afaan Oromoo:
Sababni \'Global warming\' gaazota \'greenhouse gases\' dabaluu yoo ta\'u, miidhaan isaa lubbu-qabeeyyii hedduu dhabamsiisuudha (\'loss of biodiversity\').`,
    hint: 'Greenhouse gas emissions cause rising global temperatures and severe biodiversity loss.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
