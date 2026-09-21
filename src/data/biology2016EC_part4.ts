import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2016_EC_PART4: Question[] = [
  {
    id: 'bio-2016-q76',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Enzymes: Effect of Temperature on Catalase Enzyme Activity',
    questionText: '76. A student conducted an experiment to observe the effect of temperature on catalase activity of mashed potato, measuring the time taken to collect 33 cm³ of oxygen gas across three trials:\n• 10 °C: Mean time = 48 s (Rate = 0.69 cm³/s)\n• 20 °C: Mean time = 14 s (Rate = 2.36 cm³/s)\n• 30 °C: Mean time = 5 s (Rate = 6.60 cm³/s)\n• 45 °C: Mean time = 12 s (Rate = 2.75 cm³/s)\n• 50 °C: Mean time = 67 s (Rate = 0.50 cm³/s)\n• 55 °C: Mean time = 120 s (Rate = 0.27 cm³/s)\nAt which temperature was the enzymatic reaction fastest?',
    options: [
      '30 °C',
      '10 °C',
      '50 °C',
      '55 °C'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
From the experimental data, the enzyme reaction achieved its highest rate (6.60 cm³/s) and lowest reaction time (5 seconds) at 30 °C, indicating that 30 °C is the optimum temperature for potato catalase under these experimental conditions.

🇪🇹 አማርኛ (Amharic):
ከቀረበው የሙከራ መረጃ መረዳት እንደሚቻለው በ 30 °C ላይ ሪአክሽኑ ከፍተኛውን ፍጥነት (6.60 cm³/s) እና አነስተኛውን ጊዜ (5 ሰከንድ) በማስመዝገብ ፈጣኑ ሆኖ ተገኝቷል።

🌳 Afaan Oromoo:
Oodeeffannoo qorannichaa irraa akka hubatamutti, ho\'a 30 °C irratti inzaayimiin saffisa olaanaa (6.60 cm³/s) fi yeroo gabaabaa (sekondii 5) keessatti hojjete.`,
    hint: 'Highest rate of 6.60 cm³/s occurred at 30 °C.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q77',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Genetics: Mendel\'s Law of Dominance',
    questionText: '77. Gregor Mendel crossed two pure-breeding traits of pea plants in his experiment and found only one of the traits expressed in the first generation (F1). This shows that the',
    options: [
      'two traits in the F1 generation were equally expressed.',
      'expressed trait must be determined by the recessive allele.',
      'alleles masked in the F1 generation were lost due to mutation.',
      'expressed trait must be determined by the dominant allele.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to Mendel\'s Law of Dominance, when two homozygous organisms with contrasting traits are crossed, the trait that appears and is expressed in the heterozygous F1 generation is determined by the dominant allele, while the masked unexpressed trait is recessive.

🇪🇹 አማርኛ (Amharic):
በሜንደል የበላይነት ህግ (Law of Dominance) መሰረት በ F1 ትውልድ ላይ ብቅ ያለውና የታየው ባህሪ በበላይ አሊል (Dominant allele) የሚወሰን ሲሆን ያልታየው ደግሞ የበታች (recessive) ነው።

🌳 Afaan Oromoo:
Akka seera 'Law of Dominance'tti amalli dhaloota F1 keessatti ifatti mul\'ate 'dominant allele'dhaan kan murtaa\'uudha.`,
    hint: 'The trait expressed in the F1 hybrid generation is governed by the dominant allele.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q78',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Genetics & Molecular Biology: Chromosome Structure & Histones',
    questionText: '78. Which one of the following statements correctly describes chromosome structure?',
    options: [
      'Chromosomes are similar to a gene in structure.',
      'The pair of chromosomes is heterozygous in nature.',
      'The DNA is wrapped with ribose sugar to form a chromosome.',
      'Chromosomes are made up of histone bounded DNA.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Eukaryotic chromosomes consist of chromatin fibers, in which long double-stranded DNA molecules are tightly coiled and wrapped around octamers of basic histone proteins to form repeating structural units called nucleosomes.

🇪🇹 አማርኛ (Amharic):
የክሮሞዞም አወቃቀር የሚያሳየው ረጅም የዲኤንኤ (DNA) ሞለኪውል ሂስቶን (Histone) ከተባሉ ፕሮቲኖች ጋር በጥብቅ በመጠቅለል ክሮማቲንን እንደሚፈጥር ነው።

🌳 Afaan Oromoo:
Caasaan kiroomoosoomii kan ijaarame DNA\'n pirootiinii 'histone' jedhamuun maramuun (histone-bounded DNA) dha.`,
    hint: 'Eukaryotic chromosomes are composed of DNA complexed with histone proteins (chromatin/nucleosomes).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q79',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Genetics & Applied Breeding: Selective Breeding',
    questionText: '79. The breeding mechanism that improves the performance of animals or plants using particular traits is',
    options: [
      'selective breeding.',
      'self-breeding.',
      'test cross.',
      'combination of traits.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Selective breeding (artificial selection) is the intentional process by which humans select and cross individual plants or animals with desirable genetic traits to enhance agricultural yield, growth rate, pest resistance, or productivity in successive generations.

🇪🇹 አማርኛ (Amharic):
ተፈላጊ ባህሪያትን የያዙ እንስሳትንና እፅዋትን በመምረጥና በማዳቀል ምርታማነታቸውን የማሻሻል ሂደት ሴሌክቲቭ ብሪዲንግ (Selective breeding) ይባላል።

🌳 Afaan Oromoo:
'Selective breeding' jechuun mala filatamaa uumammota amala gaarii qaban filachuun wal-hortiisa isaanii fooyyessuudha.`,
    hint: 'Selective breeding chooses parents with desirable traits to enhance offspring performance.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q80',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Reproductive Health: Contraception Methods',
    questionText: '80. Which one of the following birth control methods is correctly matched with its function?',
    options: [
      'Physical method - reduces the lining of the uterus',
      'Hormonal method - prevents follicle development and ovulation',
      'Surgical method - avoids early embryo implantation',
      'Natural method - prevent the ovum from reaching to the uterus'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Hormonal contraceptives (such as birth control pills, implants, or injections containing synthetic estrogen and progesterone) function primarily by suppressing the secretion of pituitary gonadotropins (FSH and LH), thereby inhibiting ovarian follicle maturation and preventing ovulation.

🇪🇹 አማርኛ (Amharic):
የሆርሞን የወሊድ መከላከያ ዘዴዎች (Hormonal methods) የኦቫሪ ፎሊክል እንዳይበስልና እንቁላል እንዳይፈጠር/እንዳይወጣ (prevents follicle development and ovulation) በማድረግ እርግዝናን ይከላከላሉ።

🌳 Afaan Oromoo:
Malli ittisa da\'umsaa hoormoonii (hormonal method) bilchina hanqaaquu fi gad-lakkifamuu isaa (ovulation) ittisuun hojjeta.`,
    hint: 'Hormonal birth control prevents ovarian follicle development and ovulation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q81',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biochemistry: Lipids & Ester Bonds',
    questionText: '81. Which one of the following organic molecules has ester bonds in its molecular structure?',
    options: [
      'Glycogen',
      'Triglyceride',
      'Amino acid',
      'Cellulose'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Triglycerides (neutral fats) are lipids synthesized when one molecule of glycerol forms three covalent ester bonds (-COO-) with three fatty acid chains through condensation (dehydration synthesis) reactions. Glycogen and cellulose contain glycosidic bonds.

🇪🇹 አማርኛ (Amharic):
ትራይግሊሰራይድ (Triglyceride) በሞለኪውላዊ አወቃቀሩ ውስጥ በግሊሰሮል እና በፋቲ አሲዶች መካከል የኤስተር ቦንድ (ester bonds) የያዘ የቅባት አይነት ነው።

🌳 Afaan Oromoo:
'Triglyceride'n kompaawundii liipidii yoo ta\'u, caasaa isaa keessatti 'ester bonds' qaba.`,
    hint: 'Triglycerides contain three ester bonds linking glycerol to fatty acids.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q82',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biochemistry: Protein Structure & Hemoglobin Quaternary Structure',
    questionText: '82. Which one of the following statement is correct about the structural organization of hemoglobin? It is formed',
    options: [
      'through the association of two or more polypeptide chains.',
      'when a polypeptide chain folds itself during protein synthesis.',
      'through folding of secondary structure of a polypeptide chain.',
      'by hydrogen bonding between quaternary and tertiary structures.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Hemoglobin possesses a quaternary protein structure composed of the assembly of four separate polypeptide subunits (two alpha-globin and two beta-globin chains) non-covalently associated together around iron-containing heme groups.

🇪🇹 አማርኛ (Amharic):
የሄሞግሎቢን (Hemoglobin) መዋቅር ኳተርነሪ (Quaternary structure) ሲሆን ሁለት ወይም ከዚያ በላይ የሆኑ የፖሊፔፕታይድ ሰንሰለቶች (two or more polypeptide chains) እርስ በእርስ በመያያዝ የተገነባ ነው።

🌳 Afaan Oromoo:
Heemoogiloobiiniin caasaa pirootiinii 'quaternary' kan qabu yoo ta\'u, hidhata hidhoo 'polypeptide' lamaa fi isaa olii irraa ijaarama.`,
    hint: 'Hemoglobin has a quaternary structure formed by the assembly of four polypeptide chains.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q83',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biochemistry: Functions of Lipids (Buoyancy)',
    questionText: '83. The presence of large amount of lipid reduces the density of an animal. Which function of triglycerides is related to this fact?',
    options: [
      'Buoyancy',
      'Thermal insulation',
      'Waterproofing',
      'Respiratory substrate'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Lipids (fats and oils) have a lower specific density (~0.9 g/cm³) than water (~1.0 g/cm³). Consequently, large stores of triglycerides in marine and aquatic animals (such as whales, seals, and sharks) reduce overall body density and provide buoyancy, allowing them to float and swim with minimal energy expenditure.

🇪🇹 አማርኛ (Amharic):
ቅባቶች ከውሃ ያነሰ ጥግግት ስላላቸው በሰውነታቸው ውስጥ ከፍተኛ ቅባት ያላቸው የውሃ ውስጥ እንስሳት በቀላሉ በውሃ ላይ እንዲንሳፈፉና እንዲዋኙ የመንሳፈፍ አቅም (Buoyancy) ይሰጣቸዋል።

🌳 Afaan Oromoo:
Liipidiin dhangala\'aa irra salphaa (low density) waan ta\'eef bineensonni bishaan keessaa akka bishaan gubbaa ol yaa\'an (buoyancy) gargaara.`,
    hint: 'Low-density lipid reserves provide buoyancy in aquatic animals.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q84',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biochemistry: Carbohydrates & Disaccharide Formula (Maltose)',
    questionText: '84. The missing number represented by the letter "n" in the molecular formula of maltose (C12HnO11) is',
    options: [
      '11.',
      '12.',
      '24.',
      '22.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Maltose is a disaccharide formed by the condensation of two glucose molecules (C6H12O6):
C6H12O6 + C6H12O6 -> C12H22O11 + H2O
Thus, the molecular formula of maltose is C12H22O11, meaning n = 22.

🇪🇹 አማርኛ (Amharic):
ማልቶስ (Maltose) ሁለት የግሉኮስ ሞለኪውሎች በኮንደንሴሽን ተቀላቅለው አንድ የውሃ ሞለኪውል (H2O) ሲለቁ የሚፈጠር በመሆኑ ፎርሙላው C12H22O11 ነው። ስለሆነም n = 22 ይሆናል።

🌳 Afaan Oromoo:
Maaltoosiin wal-nyaatinsa molakiyuulota gulukoosii lamaatiin bishaan tokko baasuun uumama: C6H12O6 + C6H12O6 -> C12H22O11 + H2O. Kanaafuu n = 22 dha.`,
    hint: 'Disaccharide formula: C12H22O11 (n = 22).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q85',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biochemistry: Biochemical Food Tests (Benedict\'s, Biuret, Ethanol, Iodine)',
    questionText: '85. A student conducted food tests on three unknown food samples with the following results:\n• Benedict\'s test: Sample 1: Blue, Sample 2: Red, Sample 3: Yellow\n• Ethanol emulsion test: Sample 1: Colourless, Sample 2: Colourless, Sample 3: Colourless\n• Biuret test: Sample 1: Mauve (violet), Sample 2: Mauve, Sample 3: Mauve\n• Iodine test: Sample 1: Brown, Sample 2: Brown, Sample 3: Brown\nWhat is the valid conclusion from this experiment?',
    options: [
      'Proteins and reducing sugars are found in all the food samples at equal concentrations.',
      'Lipids and reducing sugars are absent from all the three food samples tested.',
      'Non-reducing sugars are present in all the food samples at different concentrations.',
      'Reducing sugars are found in two of the samples and proteins are found in all the samples.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Benedict\'s test: Blue in Sample 1 (negative); Red in Sample 2 (high concentration) and Yellow in Sample 3 (moderate concentration) -> Reducing sugars are present in Samples 2 and 3 (2 samples).
• Biuret test: Mauve/violet in all three samples -> Proteins are present in all 3 samples.
• Ethanol (colourless = no lipids) and Iodine (brown = no starch).
Therefore, reducing sugars are found in two samples and proteins are found in all samples.

🇪🇹 አማርኛ (Amharic):
• በቤኔዲክት ምርመራ ሳምፕል 2 (ቀይ) እና ሳምፕል 3 (ቢጫ) በመሆናቸው በሁለቱ ውስጥ ሪዲዩሲንግ ስኳር አለ።
• በባዮሬት ምርመራ ሶስቱም ሳምፕሎች ወይን ጠጅ (Mauve) በመሆናቸው በሁሉም ውስጥ ፕሮቲን ይገኛል።
ስለዚህ ሪዲዩሲንግ ስኳር በሁለቱ ውስጥ ሲገኝ ፕሮቲን ደግሞ በሁሉም ውስጥ ይገኛል።

🌳 Afaan Oromoo:
Qorannoo 'Benedict'tiin saampila 2 fi 3 qofatu sukkaara qaba; qorannoo 'Biuret'tiin immoo saampiloonni sadanuu pirootiinii qabu. Kanaafuu sukkaarnii lama keessatti, pirootiiniin immoo sadan keessattuu argama.`,
    hint: 'Biuret showed mauve in all 3 samples (proteins present in all); Benedict\'s showed color change in Samples 2 and 3 (reducing sugars in 2 samples).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q86',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Respiratory System: Structure and Function of Respiratory Organs',
    questionText: '86. According to biological scenario, structure is related to function. Which one of the following is correctly described?',
    options: [
      'Alveoli - supported by cartilage for swallowing food',
      'Trachea - millions of air sacs for diffusion of O2 and CO2',
      'Nasal passage - large surface area with hairs for filtration of air',
      'Larynx - hair like strictures for mucus production'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The nasal passages are lined with ciliated epithelium, vascularized mucous membranes, and coarse hairs (vibrissae) that provide a large surface area to warm, humidify, and filter incoming air by trapping dust and airborne microorganisms.

🇪🇹 አማርኛ (Amharic):
የአፍንጫ መተላለፊያ (Nasal passage) ሰፋ ያለ የገጽታ ስፋትና ፀጉሮችን በመያዝ ወደ ሳንባ የሚገባውን አየር የማጣራት፣ የማሞቅ እና የማርጠብ ስራ ያከናውናል።

🌳 Afaan Oromoo:
Ujummoon qeensaa (Nasal passage) rifeensaa fi bal\'ina qabaachuun qilleensa seenu calaluu fi qulqulleessuuf tajaajila.`,
    hint: 'The nasal cavity provides hairs and mucosal surface area for air filtration.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q87',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Respiratory System: Composition of Inhaled vs. Exhaled Air',
    questionText: '87. As compared to exhaled air, the inhaled atmospheric air contains approximately',
    options: [
      '16% oxygen, 4% carbon dioxide and 80% nitrogen.',
      '70% oxygen, 0.03% carbon dioxide and 30% nitrogen.',
      '80% oxygen, 20% carbon dioxide and 0.04% nitrogen.',
      '21% oxygen, 0.04% carbon dioxide and 80% nitrogen.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Inhaled ambient atmospheric air is composed of approximately:
• Oxygen: ~21%
• Carbon dioxide: ~0.04% (0.03–0.04%)
• Nitrogen: ~78–80%.
(In contrast, exhaled air contains ~16% oxygen and ~4% carbon dioxide).

🇪🇹 አማርኛ (Amharic):
ወደ ውስጥ የሚሳበው ንጹህ አየር (Inhaled air) በግምት 21% ኦክስጅን፣ 0.04% ካርቦን ዳይኦክሳይድ እና 80% ናይትሮጅን ይይዛል።

🌳 Afaan Oromoo:
Qilleensi gara keessaatti fudhatamu (inhaled air) tilmaamaan oksijiinii 21%, kaarboondaayoksaayidii 0.04% fi naayitiroojiinii 80% qaba.`,
    hint: 'Inhaled air: ~21% O2, 0.04% CO2, ~80% N2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q88',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Physiology & High Altitude Acclimatization: Erythropoietin & RBCs',
    questionText: '88. What is the scientific reason behind the preference of high altitude areas for endurance training by Ethiopian athletes?',
    options: [
      'it helps them to adapt to the high atmospheric pressure of mountains.',
      'the RBCs produced are more efficient than those at low altitude.',
      'the oxygen density is higher than the low altitude.',
      'it helps them to increase their lung capacities.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
At high altitudes, the lower partial pressure of atmospheric oxygen triggers renal hypoxia, stimulating erythropoietin (EPO) secretion. This increases erythrocyte (RBC) count, hematocrit, and blood hemoglobin density, enhancing oxygen transport efficiency to working muscles when competing.

🇪🇹 አማርኛ (Amharic):
አትሌቶች በከፍተኛ ቦታዎች ላይ ልምምድ የሚያደርጉበት ምክንያት በአየሩ ውስጥ ያለው ዝቅተኛ የኦክስጅን ግፊት ሰውነታቸው የተሻለ የኦክስጅን ማጓጓዝ አቅም ያላቸውን ቀይ የደም ህዋሶች (RBCs) እንዲያመርት ስለሚያነሳሳ ነው።

🌳 Afaan Oromoo:
Atileetota Itoophiyaa bakka ol-ka\'aa irratti leenji\'uun kan gargaaruuf, dhiigni diimaan (RBC) oomishamu dandeettii oksijiinii dabarsuu caalmaa qabaachuufi.`,
    hint: 'High altitude triggers erythropoietin (EPO), boosting RBC mass and oxygen transport capacity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q89',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Circulatory & Respiratory Systems: Oxygen Transport & Hemoglobin',
    questionText: '89. How is oxygen primarily transported throughout the human body?',
    options: [
      'from the red blood cells to actively respiring tissues by facilitated diffusion.',
      'by simple diffusion along concentration gradient from the lungs to the heart.',
      'from the lungs to actively respiring tissue by hemoglobin of RBC.',
      'by the blood plasma from lower concentration to higher concentration.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Approximately 98.5% of oxygen transported in human blood is reversibly bound to the iron atoms of hemoglobin molecules inside erythrocytes (red blood cells) as oxyhemoglobin (HbO8), delivering oxygen from the alveolar capillaries of the lungs to actively respiring tissues.

🇪🇹 አማርኛ (Amharic):
ኦክስጅን በሰውነታችን ውስጥ በዋነኝነት የሚጓጓዘው ከሳንባ ተነስቶ ወደ ተለያዩ የሰውነት ህዋሳት በቀይ የደም ህዋሳት ውስጥ በሚገኘው ሄሞግሎቢን (Hemoglobin of RBC) አማካኝነት ነው።

🌳 Afaan Oromoo:
Oksijiiniin qaama namaa keessatti kan daddarbu lubbiyyoolee dhiiga diimaa keessatti 'hemoglobin' wajjin hidhamuun gara kutaalee qaamaatti geeffamuuni.`,
    hint: 'Hemoglobin in red blood cells binds and transports ~98.5% of blood oxygen.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q90',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Human Biology & Circulatory System: Heart Anatomy & Left Ventricle',
    questionText: '90. Which one of the following statements is well justified for why the muscular wall of the left ventricle is thicker and tougher in nature? Because it',
    options: [
      'returns deoxygenated blood to the heart.',
      'forces oxygenated blood out of the heart.',
      'returns oxygenated blood to the heart.',
      'forces deoxygenated blood out of the heart.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The myocardial wall of the left ventricle is significantly thicker and more muscular than that of the right ventricle because it must generate high systolic hydrostatic pressure to pump oxygenated blood out through the aorta into the entire high-resistance systemic circulatory circuit.

🇪🇹 አማርኛ (Amharic):
የግራ ቬንትሪክል (Left ventricle) የጡንቻ ግድግዳ እጅግ ወፍራም የሆነበት ምክንያት ኦክስጅን የበለፀገበትን ደም በከፍተኛ ግፊት በመግፋት ወደ መላው የሰውነት ክፍሎች ስለሚረጭ (forces oxygenated blood out of the heart) ነው።

🌳 Afaan Oromoo:
Giddu-galeessi garaa bitaa onnee (left ventricle) furdaa kan ta\'eef dhiiga qulqulluu oksijiinii qabu dhiibbaa guddaan gara kutaalee qaama hundaatti dhiibuufi.`,
    hint: 'The left ventricle pumps oxygenated blood through the aorta to the systemic circulation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q91',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Ecology & Conservation: Ethiopian National Parks & UNESCO World Heritage Sites',
    questionText: '91. Which one of the following national parks of Ethiopia is declared as a UNESCO World Heritage site and comprises endemic animals like the Walia ibex?',
    options: [
      'Simien Mountain National Park',
      'Yangudi Rassa National Park',
      'Rift Valley National Park',
      'Bale Mountain National Park'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Simien Mountains National Park, located in northern Ethiopia, is a UNESCO World Heritage Site renowned for harboring globally threatened endemic wildlife, including the Walia Ibex (Capra walie), Gelada baboon, and Ethiopian wolf.

🇪🇹 አማርኛ (Amharic):
በዩኔስኮ (UNESCO) የአለም ቅርስነት የተመዘገበውና የዋልያ አይቤክስ (Walia ibex) መኖሪያ የሆነው የኢትዮጵያ ብሔራዊ ፓርክ የሰሜን ተራሮች ብሔራዊ ፓርክ (Simien Mountain National Park) ነው።

🌳 Afaan Oromoo:
Paarkiin bioolessaa Itoophiyaa UNESCO\'n galmaa\'ee fi bineensa 'Walia ibex' qabatee jiru Paarkii Biyyooleessaa Gaarreen Semeeniiti (Simien Mountains).`,
    hint: 'Simien Mountains National Park is a UNESCO site and the exclusive home of the Walia ibex.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q92',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Plant Biology & Biodiversity: Endemic Ethiopian Plants (Guizotia abyssinica)',
    questionText: '92. Which one of the following plant species is native/endemic to Ethiopia?',
    options: [
      'Auracaria baramileta',
      'Persea papaya',
      'Eucaliptus globulose',
      'Guizotia abyssinica'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Guizotia abyssinica (commonly known as "Nug" in Amharic / Niger seed) is an indigenous oilseed crop originating in the Ethiopian highlands that has been domesticated and traditionally cultivated in Ethiopia for centuries.

🇪🇹 አማርኛ (Amharic):
ኑግ (Guizotia abyssinica) የኢትዮጵያ ሀገር በቀል የቅባት እህል ሰብል ነው።

🌳 Afaan Oromoo:
'Guizotia abyssinica' (Nuugii) biqiltuu oomisha zayitii biyya keenya Itoophiyaa keessatti dhalatee beekamuudha.`,
    hint: 'Guizotia abyssinica (Nug) is native/indigenous to the Ethiopian highlands.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q93',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Scientific Method: Steps of Scientific Inquiry',
    questionText: '93. A mother milks her cow every morning and the milk usually forms curd after three days. What is the first step to investigate why this change happens?',
    options: [
      'Read scientific articles about the reason for curdling of milk',
      'Take action to prevent the milk from curdling',
      'Formulate hypothesis about the reason for milk curdling',
      'Ask a question why the milk forms curd'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In the systematic scientific method, after observing a natural phenomenon, the fundamental first step of scientific inquiry is to formulate a specific, testable scientific question (e.g., "Why does the fresh milk curdle after three days?").

🇪🇹 አማርኛ (Amharic):
በሳይንሳዊ የምርምር ዘዴ ውስጥ አንድን ክስተት ከተመለከቱ በኋላ የመጀመሪያው እርምጃ ክስተቱ ለምን እንደተከሰተ ጥያቄ መጠየቅ (Ask a question) ነው።

🌳 Afaan Oromoo:
Adeemsa saayinsii keessatti waan tokko erga arganii booda tarkaanfiin inni duraa 'gaaffii gaafachuu' (Ask a question) dha.`,
    hint: 'The scientific method begins with observation and asking a testable question.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q94',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Scientific Inquiry: Controlled Experiments & Drug Efficacy Testing',
    questionText: '94. A drug efficacy test was conducted under identical conditions on two groups of infected mice: Group A was the control group (given a placebo) and Group B was the experimental group (given the drug). At the end, the experimental group recovered. Which statement is true about the result?',
    options: [
      'The drug has an effect.',
      'Conclusion cannot be reached.',
      'The experiment was wrong.',
      'Placebo has better effect.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In a controlled double-blind experiment, if the experimental group receiving the test drug exhibits significant clinical recovery compared to the control group receiving an inactive placebo under identical controlled variables, the valid conclusion is that the drug has a positive therapeutic effect.

🇪🇹 አማርኛ (Amharic):
መድሃኒቱ የተሰጠው የሙከራ ቡድን (Group B) ፕላሴቦ ከተሰጠው የቁጥጥር ቡድን (Group A) በተሻለ ሁኔታ ስለዳነ መድሃኒቱ ውጤታማ መሆኑን (The drug has an effect) ያረጋግጣል።

🌳 Afaan Oromoo:
Kutaan qorichi kennameef (Group B) kutaa qorichi hin kennamneef (Group A) caalaa waan fayyaniif, qorichi sun bu\'aa gaarii akka qabu (The drug has an effect) mirkaneessa.`,
    hint: 'Improvement in the experimental group over the placebo control confirms drug efficacy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q95',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biology Laboratory Skills: Scientific Report Writing',
    questionText: '95. Suppose you performed an experiment in a biology laboratory and need to report your findings. Which sequence represents the correct standard order for writing a scientific report?',
    options: [
      'Title -> Hypothesis -> Procedure -> Prediction -> Conclusion -> Result -> Evaluation -> Acknowledgment',
      'Title -> Procedure -> Result -> Hypothesis -> Prediction -> Evaluation -> Conclusion -> Acknowledgment',
      'Title -> Hypothesis -> Prediction -> Procedure -> Result -> Conclusion -> Evaluation -> Acknowledgment',
      'Title -> Prediction -> Procedure -> Hypothesis -> Result -> Conclusion -> Evaluation -> Acknowledgment'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The standardized structure of a scientific laboratory report proceeds logically:
1. Title
2. Hypothesis
3. Prediction
4. Procedure (Methods)
5. Result (Data & Observations)
6. Conclusion
7. Evaluation
8. Acknowledgment.

🇪🇹 አማርኛ (Amharic):
የሳይንሳዊ ላብራቶሪ ሪፖርት ትክክለኛ ቅደም ተከተል፡ Title -> Hypothesis -> Prediction -> Procedure -> Result -> Conclusion -> Evaluation -> Acknowledgment ነው።

🌳 Afaan Oromoo:
Tartiibni gabaasa qorannoo saayinsii: Title -> Hypothesis -> Prediction -> Procedure -> Result -> Conclusion -> Evaluation -> Acknowledgment ta\'a.`,
    hint: 'Correct report flow: Title -> Hypothesis -> Prediction -> Procedure -> Result -> Conclusion -> Evaluation -> Acknowledgment.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q96',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cell Biology: Fluid Mosaic Model of Plasma Membrane',
    questionText: '96. Which one of the following arrangement of molecules in the fluid mosaic model of the cell membrane is correct?',
    options: [
      'Phospholipid molecules are peripherally attached to proteins.',
      'Phospholipids fill the protein like a sandwich to retain its rigidity.',
      'Phospholipids are inserted into the bilayer of protein molecules.',
      'Protein molecules are studded between the phospholipid bilayers.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to the Fluid Mosaic Model (Singer & Nicolson, 1972), biological membranes consist of a fluid, dynamic phospholipid bilayer matrix in which diverse integral, transmembrane, and peripheral protein molecules are studded and embedded like a mosaic.

🇪🇹 አማርኛ (Amharic):
በፍሉይድ ሞዛይክ ሞዴል (Fluid mosaic model) መሰረት የተለያዩ የፕሮቲን ሞለኪውሎች በፎስፎሊፒድ ድርብርብ ሽፋን ውስጥ ተሰክተውና ተበትነው (Protein molecules are studded between the phospholipid bilayers) ይገኛሉ።

🌳 Afaan Oromoo:
Moodeela 'fluid mosaic' keessatti pirootiinoonni garaagaraa baqaana 'phospholipid bilayer' keessa faca\'anii (studded) argamu.`,
    hint: 'Proteins are studded and floating within the phospholipid bilayer.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q97',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cell Membrane Structure: Function of Cholesterol',
    questionText: '97. What is the role of cholesterol in the animal cell membrane?',
    options: [
      'reduce the fluidity of the cell membrane.',
      'anchors integral proteins to the cytoskeleton.',
      'acts as receptor site for hormones and other signaling molecules.',
      'transports hydrophilic molecules into the cell.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Cholesterol functions as a bidirectional membrane fluidity buffer. At normal and warm physiological temperatures, cholesterol intercalates between phospholipid fatty acyl chains, restricting their lateral movement and reducing excessive membrane fluidity and permeability.

🇪🇹 አማርኛ (Amharic):
ኮሌስትሮል በእንስሳት ሴል ሽፋን ውስጥ የሚገኝ ሲሆን በሞቃት ሁኔታዎች የሴል ሽፋኑ ከመጠን በላይ እንዳይቀጥንና እንዳይፈስ በማድረግ ቅልጥፍናውን ይቀንሳል (reduce the fluidity of the cell membrane)።

🌳 Afaan Oromoo:
'Cholesterol' narqa lubbiyyoo bineensotaa keessatti 'fluidity' (dhangala\'ummaa) dabaluu ykn gadi bu\'uu to\'ata; ho\'a keessatti 'fluidity' ni xiqqeessa.`,
    hint: 'Cholesterol stabilizes membrane structure and restricts phospholipid movement at moderate temperatures.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q98',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cell Biology: Structure and Functions of Cellular Organelles',
    questionText: '98. In a comparative evaluation of cellular organelles:\n1. Site of protein synthesis (Mitochondria: NO, Golgi: YES [incorrect], Lysosomes: NO, Ribosomes: YES)\n2. Modifies and distributes molecules (Mitochondria: NO, Golgi: YES, Lysosomes: NO, Ribosomes: NO)\n3. Site of aerobic respiration (Mitochondria: YES, Golgi: NO, Lysosomes: NO, Ribosomes: NO)\n4. Digest foreign cells (Mitochondria: NO, Golgi: NO, Lysosomes: YES, Ribosomes: YES [incorrect])\nWhich numbers correctly describe the functions of the given organelles?',
    options: [
      '2 and 3',
      '2 and 4',
      '1 and 4',
      '1 and 3'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Statement 2 is correct: Golgi body modifies, sorts, and packages macromolecules for distribution.
• Statement 3 is correct: Mitochondria are the powerhouse and site of aerobic cellular respiration (Krebs cycle & oxidative phosphorylation).
• Statement 1 is incorrect because Golgi does not synthesize proteins (ribosomes do).
• Statement 4 is incorrect because ribosomes do not digest foreign cells (lysosomes do).
Therefore, statements 2 and 3 are correct.

🇪🇹 አማርኛ (Amharic):
• ቁጥር 2 ትክክል ነው፡ ጎልጂ ቦዲ ሞለኪውሎችን ያሻሽላል እና ያሰራጫል።
• ቁጥር 3 ትክክል ነው፡ ማይቶኮንድሪያ የኤሮቢክ ሬስፒሬሽን ማዕከል ነው።
ስለዚህ ትክክለኞቹ 2 እና 3 ናቸው።

🌳 Afaan Oromoo:
• Lakkoofsi 2 sirriidha: 'Golgi body' molakiyuulota jijjiiruun raabsa.
• Lakkoofsi 3 sirriidha: 'Mitochondria' bakka 'aerobic respiration'ti.
Kanaafuu deebiin sirriin '2 and 3' dha.`,
    hint: 'Statements 2 (Golgi distributes molecules) and 3 (Mitochondria perform aerobic respiration) are correct.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q99',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cell Physiology & Osmosis: Water Potential in Plant Tissues',
    questionText: '99. Potato slices of equal initial weight were immersed in four different concentrations of salt solutions (1.5 M, 1.0 M, 0.5 M, and 0.1 M). After 24 hours, which potato slice will weigh the least?',
    options: [
      '1.5 molars',
      '0.1 molars',
      '0.5 molars',
      '1.0 molars'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The 1.5 M salt solution has the highest solute concentration (lowest water potential, most hypertonic). Water will leave the potato cells by osmosis down the steep water potential gradient, causing maximum plasmolysis and the greatest loss of mass, so this slice will weigh the least.

🇪🇹 አማርኛ (Amharic):
1.5 M የጨው ሙሟት ከፍተኛ የጨው ክምችት (Hypertonic) ስላለው፤ ከድንቹ ሴሎች ውስጥ ከፍተኛ ውሃ በኦስሞሲስ አማካኝነት ስለሚወጣ ድንቹ እጅግ አነስተኛ ክብደት (weighs the least) ይኖረዋል።

🌳 Afaan Oromoo:
Furmaanni soogiddaa '1.5 M' dhiibbaa 'hypertonic' olaanaa waan qabuuf, bishaan baay\'een 'osmosis'tiin dhangala\'ee dhiitichi dinichaa ulfaatina xiqqaatti gadi bu\'a.`,
    hint: 'The most hypertonic solution (1.5 M) causes greatest osmotic water loss, resulting in the lowest weight.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q100',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Osmosis: Semipermeable Membranes & Water Potential',
    questionText: '100. Suppose a container is divided into two halves by a selectively permeable membrane (permeable to water only), with hypertonic solution in "A" and hypotonic solution in "B". What will be the expected result?',
    options: [
      '"B" decrease.',
      '"A" remains constant.',
      'both "A" and "B" rise up.',
      '"B" rise up.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Osmosis is the net diffusion of water molecules from a region of higher water potential (the hypotonic solution in B) across a semipermeable membrane to a region of lower water potential (the hypertonic solution in A). As water leaves side B, the water level in B will decrease (while the level in A rises).

🇪🇹 አማርኛ (Amharic):
ውሃ በኦስሞሲስ አማካኝነት ከፍተኛ የውሃ ክምችት ካለበት ሃይፖቶኒክ (B) ወደ ዝቅተኛ የውሃ ክምችት ወዳለው ሃይፐርቶኒክ (A) ስለሚጓዝ፤ በ "B" በኩል ያለው የውሃ መጠን ይቀንሳል ("B" decrease)።

🌳 Afaan Oromoo:
Bishaan 'osmosis'tiin iddoo baay\'inarratti argamu (hypotonic 'B') irraa gara iddoo xiqqaatti (hypertonic 'A') waan daddarbuuf, sadarkaan bishaanii 'B' ni xiqqaata ('B' decrease).`,
    hint: 'Water moves from hypotonic (B) to hypertonic (A), causing the water level of B to decrease.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
