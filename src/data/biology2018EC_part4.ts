import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2018_EC_PART4: Question[] = [
  {
    id: 'bio-2018-q76',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Evolutionary Biology: Homologous vs. Analogous Structures',
    questionText: '76. Which of the following defines homologous structures as anatomical evidence for common descent in evolution?',
    options: [
      'Structures that perform the same physiological function but possess different ancestral anatomy',
      'Structures with similar underlying skeletal architecture derived from a common ancestor, but adapted for different functions',
      'Non-functional vestigial organs undergoing gradual evolutionary regression',
      'Genetically identical traits that independently evolve in unrelated evolutionary lineages'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Homologous structures are anatomical features in different organisms that share a fundamental structural architecture and common developmental origin derived from a shared ancestor, even though they may perform divergent functions (e.g., the pentadactyl limb in human hands, bat wings, bird wings, and whale flippers). In contrast, analogous structures share functions due to convergent evolution without common ancestry (e.g., bird wing vs. insect wing).

🇪🇹 አማርኛ (Amharic):
ሆሞሎገስ አካላት (Homologous structures) ማለት ከመሰረታዊ ቅድመ-አያት የተወረሱ ተመሳሳይ አናቶሚካዊ ግንባታ ያላቸው፣ ነገር ግን ለተለያዩ ተግባራት (ለመብረር፣ ለመዋኘት፣ ለመሮጥ) የተላመዱ መዋቅሮች ናቸው።

🌳 Afaan Oromoo:
Qaamonni 'Homologous' jedhaman bu'uura lafee fi madda dhalootaa walfakkaataa irraa kan dhufan ta'anii, garuu hojii adda addaatiif kan tajaajilaniidha (fkn, harka namaa fi koochoo sinbiraa).`,
    hint: 'Homologous structures share common ancestral origin and structural anatomy, but differ in function.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q77',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cell Biology: Lysosomes and Autophagy',
    questionText: '77. Which membrane-bound cytoplasmic organelle contains acid hydrolase enzymes responsible for intracellular digestion, recycling of worn-out cellular organelles, and programmed cell death?',
    options: [
      'Peroxisome',
      'Golgi apparatus',
      'Lysosome',
      'Centrosome'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Lysosomes are spherical, membrane-bound organelles containing over 50 different hydrolytic acid enzymes (including proteases, nucleases, lipases, and phosphatases) operating at acidic pH (~4.5–5.0). They degrade phagocytosed microbes, digest endocytosed nutrients, recycle damaged cell organelles through autophagy, and participate in autolysis (programmed cell destruction).

🇪🇹 አማርኛ (Amharic):
ላይሶዞም (Lysosome) ጠንካራ አሲዳማ የምግብ መፈጨት ኢንዛይሞችን በውስጡ የያዘ የሴል አካል ሲሆን በሴል ውስጥ የገቡ ባዕድ ነገሮችን እና ያረጁ የሴል ክፍሎችን በማድቀቅና በማስወገድ ያገለግላል።

🌳 Afaan Oromoo:
'Lysosome'n qaama seelii inzaayimoota asiidaawaa of keessaa qabu ta'ee, seelii keessatti soorata caccabsuu, kutaalee seelii dullooman dhabamsiisuu fi alagaa ittisuuf oola.`,
    hint: 'Lysosomes contain digestive hydrolytic enzymes for intracellular digestion and autophagy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q78',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Reproduction: Double Fertilization in Angiosperms',
    questionText: '78. In the sexual reproduction of flowering plants (angiosperms), what are the two definitive products of double fertilization within the ovule embryo sac?',
    options: [
      'Diploid zygote (2n) and triploid endosperm (3n)',
      'Haploid spore (n) and diploid seed coat (2n)',
      'Triploid embryo (3n) and diploid cotyledon (2n)',
      'Diploid endosperm (2n) and polyploid pericarp (4n)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Double fertilization is unique to angiosperms:
1. One haploid sperm cell fuses with the haploid egg cell to form a diploid zygote (2n), which develops into the embryo.
2. The second haploid sperm cell fuses with the central cell containing two haploid polar nuclei to form a triploid primary endosperm nucleus (3n), which proliferates into nutrient-rich endosperm tissue feeding the developing seed.

🇪🇹 አማርኛ (Amharic):
በአበባማ ዕፅዋት (Angiosperms) ድርብ ማዳቀል (double fertilization) ውስጥ፡ አንደኛው ስፐርም ከእንቁላል ጋር ተዋህዶ ዲፕሎይድ ዛይጎት (2n) ሲፈጥር፣ ሁለተኛው ስፐርም ከፖላር ኒውክሊየሶች ጋር ተዋህዶ ትሪፕሎይድ ኢንዶስፐርም (3n) ይፈጥራል።

🌳 Afaan Oromoo:
Biqiltoota daraaraa qaban keessatti adeemsa 'double fertilization' jedhamuun: sanyii kormaa tokko hanqaaquu wajjin 'diploid zygote (2n)' yoo uumu, inni lammataa ammoo 'triploid endosperm (3n)' soorata biqiltichaaf oolu uuma.`,
    hint: 'One sperm fertilizes the egg (2n zygote); the other fuses with polar nuclei (3n endosperm).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q79',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Renal Physiology: Mechanism of Glomerular Ultrafiltration',
    questionText: '79. In the human nephron, where does non-selective glomerular ultrafiltration under high arterial hydrostatic pressure occur?',
    options: [
      'Loop of Henle',
      'Distal convoluted tubule',
      'Collecting duct',
      'Glomerulus within Bowman\'s capsule'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Ultrafiltration takes place across the filtration membrane of the renal corpuscle, composed of the fenestrated glomerular capillary endothelium, basement membrane, and podocyte slit diaphragms inside Bowman\'s capsule. High hydrostatic blood pressure forces water, glucose, amino acids, urea, and electrolytes into Bowman\'s space to form primary glomerular filtrate, retaining cellular elements and large plasma proteins.

🇪🇹 አማርኛ (Amharic):
በኩላሊት ውስጥ ደም በከፍተኛ ግፊት የሚጣራበት የመጀመሪያው ሂደት (Ultrafiltration) የሚከናወነው በቦውማንስ ካፕሱል (Bowman\'s capsule) ውስጥ በሚገኘው ግሎሜሩለስ (Glomerulus) የደም ስሮች ጥልፍልፍ ላይ ነው።

🌳 Afaan Oromoo:
Dhiigni dhiibbaa cimaadhaan kalee keessatti kan calalamu (ultrafiltration) kutaalee 'Glomerulus' fi 'Bowman\'s capsule' keessatti.`,
    hint: 'Ultrafiltration occurs across the glomerulus inside Bowman’s capsule.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q80',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Genetics: X-Linked Recessive Inheritance (Hemophilia)',
    questionText: '80. Hemophilia is an X-linked recessive bleeding disorder (Xʰ). If a phenotypically normal woman who is a carrier (XᴴXʰ) marries a normal male (XᴴY), what is the probability that their male offspring (sons) will suffer from hemophilia?',
    options: [
      '0% (None of the sons)',
      '50% (Half of the sons)',
      '75% (Three-quarters of the sons)',
      '100% (All of the sons)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Cross: Mother (XᴴXʰ) × Father (XᴴY).
The sons inherit their Y chromosome exclusively from their father, and inherit either Xᴴ or Xʰ with equal probability (50% each) from their mother:
• 50% of sons receive Xᴴ → XᴴY (Normal male)
• 50% of sons receive Xʰ → XʰY (Hemophiliac male)
Therefore, exactly 50% (1/2) of the sons will have hemophilia.

🇪🇹 አማርኛ (Amharic):
እናት የበሽታው አስተላላፊ (XᴴXʰ) ስትሆን አባት ጤነኛ (XᴴY) ነው፡
ወንዶች ልጆች Y ክሮሞዞምን ከአባታቸው ብቻ ሲቀበሉ ከእናታቸው Xᴴ ወይም Xʰ የመቀበል እኩል 50% ዕድል አላቸው። ስለዚህ 50% የሚሆኑት ወንዶች ልጆች ሄሞፊሊያ (XʰY) ይይዛቸዋል።

🌳 Afaan Oromoo:
Haati baattuu dhibee 'hemophilia' (XᴴXʰ) fi abbaan fayyaa (XᴴY) yoo ta'an, ilmaan dhiiraa keessaa dhibbeentaa 50% kan ta'an dhibee kanaan qabamu.`,
    hint: 'Sons inherit their X from the mother; with a carrier mother (XᴴXʰ), each son has a 50% chance of hemophilia.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q81',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ecology: Interspecific Symbiotic Interactions (Commensalism)',
    questionText: '81. What type of ecological interaction exists when one species derives nutritional or shelter benefit while the other partner species remains entirely unaffected (neither harmed nor helped)?',
    options: [
      'Mutualism (+/+)',
      'Parasitism (+/-)',
      'Commensalism (+/0)',
      'Amensalism (-/0)'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Commensalism is a symbiotic relationship in which one organism benefits (+), while the host organism experiences a neutral effect (0)—neither suffering harm nor receiving benefit. Classic examples include epiphytic orchids perched on high rainforest tree trunks for sunlight and remora fish hitching rides on sharks for protection and food scraps.

🇪🇹 አማርኛ (Amharic):
ኮመንሳሊዝም (Commensalism) አንደኛው ተጠቃሚ ሲሆን ሌላኛው የማይጎዳበት እንዲሁም የማይጠቀምበት (neutral) የሆነ የስነ-ምህዳር ግንኙነት ነው። ለምሳሌ በዛፍ ላይ የሚበቅሉ ኦርኪዶች።

🌳 Afaan Oromoo:
'Commensalism'n walitti dhufeenya uumamaa isa tokkoof bu'aa kennee (+), isa biraatiif ammoo bu'aas ta'e miidhaa homaa hin geessifne (0) dha.`,
    hint: 'Commensalism is a (+/0) relationship where one benefits and the other is unharmed.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q82',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Physiology: Cohesion-Tension Theory of Water Transport',
    questionText: '83. According to the Cohesion-Tension theory of xylem sap ascent, which intermolecular physical force holds adjacent water molecules tightly together to maintain an unbroken continuous water column inside xylem vessels?',
    options: [
      'Cohesion (Hydrogen bonding between water molecules)',
      'Adhesion to hydrophobic lignin walls',
      'Atmospheric vacuum suction',
      'Osmotic turgor push from root cortex'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The Cohesion-Tension theory (Dixon and Joly) states that transpiration pull creates continuous negative hydrostatic tension in leaf mesophyll. Because water molecules exhibit strong cohesion (due to extensive intermolecular hydrogen bonds between electronegative oxygen and electropositive hydrogen atoms), water possesses high tensile strength, enabling unbroken water columns to be pulled from roots to towering canopy heights.

🇪🇹 አማርኛ (Amharic):
በዕፅዋት የውሃ ቧንቧ (Xylem) ውስጥ ውሃ ሳይቆራረጥ እንደ አንድ ረጅም ገመድ ተያይዞ ወደ ላይ እንዲሳብ የሚያደርገው በውሃ ሞለኪውሎች መካከል ያለው ጠንካራ የመሳሳብ ሃይል ኮሂዥን (Cohesion) ይባላል።

🌳 Afaan Oromoo:
Molakiyuulonni bishaanii hiriira isaanii osoo hin kutan ujummoo 'xylem' keessaan gara samiitti akka ol-harkifaman kan godhu humna walitti harkisaa isaanii 'cohesion' jedhama.`,
    hint: 'Cohesion is the attraction between like water molecules via hydrogen bonding.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q83',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Endocrinology: The Sympathoadrenal Response (Epinephrine)',
    questionText: '83. During acute physiological emergency or perceived threat ("fight-or-flight" response), which hormone is rapidly released from the adrenal medulla into systemic circulation?',
    options: [
      'Cortisol',
      'Epinephrine (Adrenaline)',
      'Calcitonin',
      'Prolactin'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Acute stressors stimulate sympathetic preganglionic splanchnic nerves directly innervating the adrenal medulla. Chromaffin cells immediately exocytose epinephrine (adrenaline) and norepinephrine into the bloodstream, elevating heart rate, dilating bronchioles, increasing blood pressure, and stimulating glycogenolysis to flood muscles with glucose for intense physical action.

🇪🇹 አማርኛ (Amharic):
ድንገተኛ አደጋ፣ ፍርሃት ወይም ጭንቀት ሲያጋጥም (Fight or Flight) ከአድሬናል ሜዱላ (adrenal medulla) በከፍተኛ ፍጥነት በመመንጨት የልብ ምትን እና ጉልበትን የሚጨምረው ሆርሞን ኤፒኔፍሪን ወይም አድሬናሊን (Epinephrine / Adrenaline) ይባላል።

🌳 Afaan Oromoo:
Yeroo sodaa fi balaa tasaa hormooniin xannacha 'adrenal medulla' irraa dhangala'ee dha'annaa onnee dabalu 'Epinephrine' (Adrenaline) jedhama.`,
    hint: 'Epinephrine (adrenaline) triggers the acute fight-or-flight response.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q84',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Molecular Biology: The Genetic Code and Stop Codons',
    questionText: '84. In mRNA translation, which triplet codons function as stop (nonsense) codons to signal the termination of polypeptide chain elongation?',
    options: [
      'AUG, GUG, and UGG',
      'UAA, ACG, and CCG',
      'UGG, UGA, and UAU',
      'UAA, UAG, and UGA'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Of the 64 genetic code triplet codons, 61 code for amino acids (AUG serves as the universal start codon coding for methionine). The remaining three codons—UAA (ochre), UAG (amber), and UGA (opal)—do not code for any amino acid and are recognized by protein release factors, signaling the immediate termination and disassembly of the ribosomal translation complex.

🇪🇹 አማርኛ (Amharic):
በፕሮቲን ዝግጅት (Translation) ወቅት የፕሮቲን ሰንሰለቱ ማለቁን የሚያሳውቁትና ምንም አሚኖ አሲድ የማይወክሉት የማቆሚያ ኮዶኖች UAA፣ UAG እና UGA ናቸው።

🌳 Afaan Oromoo:
Koodonoonni adeemsa oomisha pirootiinii akka dhaabbatu ergaa dabarsan (stop codons): UAA, UAG fi UGA jedhamu.`,
    hint: 'The three universal termination codons in mRNA are UAA, UAG, and UGA.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q85',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Virology: Retroviral Replication and Reverse Transcriptase',
    questionText: '85. Retroviruses like Human Immunodeficiency Virus (HIV) carry an essential viral enzyme that transcribes their single-stranded RNA genome into complementary double-stranded proviral DNA. What is this enzyme?',
    options: [
      'Reverse transcriptase',
      'RNA replicase',
      'DNA helicase',
      'Topoisomerase'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Retroviruses possess a positive-sense single-stranded RNA genome. Upon entering a host helper T cell (CD4⁺), the viral enzyme reverse transcriptase (an RNA-dependent DNA polymerase) catalyzes the reverse transcription of viral RNA into complementary cDNA, which is subsequently integrated into the host genome by viral integrase.

🇪🇹 አማርኛ (Amharic):
እንደ ኤችአይቪ (HIV) ያሉ ሬትሮቫይረሶች የቫይረሱን አርኤንኤ (RNA) ወደ ዲኤንኤ (DNA) ለመገልበጥ የሚጠቀሙበት ልዩ ኢንዛይም ሪቨርስ ትራንስክሪፕቴዝ (Reverse transcriptase) ይባላል።

🌳 Afaan Oromoo:
Vaayirasoonni akka HIV jiran RNA ofii gara DNAtti jijjiiranii seelii namaa keessa seensisuuf inzaayimii 'Reverse transcriptase' jedhamutti fayyadamu.`,
    hint: 'Reverse transcriptase synthesizes DNA from an RNA viral template.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q86',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cell Division: Mitosis Stages (Anaphase)',
    questionText: '86. During which stage of somatic cell mitosis do the centromeres split, allowing sister chromatids to separate and be pulled toward opposite spindle poles as daughter chromosomes?',
    options: [
      'Prophase',
      'Metaphase',
      'Anaphase',
      'Telophase'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Anaphase commences when the enzyme separase cleaves cohesin protein complexes binding sister chromatids together. Centromeres divide synchronously, and kinetochore spindle microtubules depolymerize, pulling the separated individual chromatids (now considered independent daughter chromosomes) toward opposite centrosome poles.

🇪🇹 አማርኛ (Amharic):
በማይቶሲስ (Mitosis) የሴል ክፍፍል ወቅት ሴንትሮሜሮች ተከፍለው ሲስተር ክሮማቲዶች ወደ ተቃራኒ የሴሉ ጫፎች የሚሳቡበት ደረጃ አናፌዝ (Anaphase) ይባላል።

🌳 Afaan Oromoo:
Sadarkaa maayitoosisiitti yeroo 'centromere'n addaan ba'ee kuroomaatiidonni gara pooleewwan faallaatti harkifaman 'Anaphase' jedhama.`,
    hint: 'Sister chromatids separate and move toward opposite poles during anaphase.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q87',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Taxonomy: Characteristics of Kingdom Protista',
    questionText: '87. Unicellular, microscopic eukaryotic organisms that are neither true plants, animals, nor fungi (such as Amoeba, Paramecium, and Euglena) are classified within',
    options: [
      'Kingdom Monera',
      'Kingdom Protista',
      'Kingdom Plantae',
      'Kingdom Archaea'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In Whittaker\'s five-kingdom classification system, Kingdom Protista comprises predominantly unicellular (or simple colonial) eukaryotic organisms. They possess membrane-bound nuclei and complex organelles, but lack specialized tissue differentiation, including protozoans (Amoeba, Paramecium), slime molds, and unicellular algae (Euglena).

🇪🇹 አማርኛ (Amharic):
አንድ ህዋስ ያላቸው እና ኒውክሊየስ ያላቸው ጥቃቅን ዩካርዮቲክ ፍጡራን (እንደ አሜባ፣ ፓራሜሲየም እና ዩግሌና) በኪንግደም ፕሮቲስታ (Kingdom Protista) ስር ይመደባሉ።

🌳 Afaan Oromoo:
Uumamonni seel-tokkee niwukilasii qaban kanneen akka Amiibaa fi Paaraameesiyamiiti 'Kingdom Protista' keessatti ramadamu.`,
    hint: 'Unicellular eukaryotic microbes like Amoeba and Euglena belong to Kingdom Protista.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q88',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Digestive Physiology: Intestinal Villi and Microvilli',
    questionText: '88. The inner mucosal lining of the human small intestine possesses millions of macroscopic circular folds, finger-like villi, and microscopic brush-border microvilli. What primary physiological advantage does this structural adaptation provide?',
    options: [
      'It massively expands the surface area for rapid absorption of digested nutrients',
      'It physically churns acidic stomach contents into uniform chyme',
      'It stores undigested dietary fiber until eliminated by the colon',
      'It synthesizes bile salts to hydrolyze complex fats'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The small intestine is the primary organ of chemical digestion and nutrient absorption. The combined presence of plicae circulares (circular folds), villi, and apical enterocyte microvilli increases the internal luminal absorptive surface area by more than 600-fold (reaching an estimated ~250–300 square meters), maximizing the contact area and rate of passive and active absorption of monosaccharides, amino acids, and lipids.

🇪🇹 አማርኛ (Amharic):
በትንሹ አንጀት ውስጥ የሚገኙት ጣት መሳይ መዋቅሮች (Villi) እና ማይክሮቪሊዎች (microvilli) የተፈጨው ምግብና ንጥረ-ነገሮች በከፍተኛ ፍጥነት እንዲመጠጡ የመምጠጫውን ስፋት (surface area) በብዙ እጥፍ ያሳድጋሉ።

🌳 Afaan Oromoo:
Ujummoo mar\'umman qallaa keessatti 'villi' fi 'microvilli'n argamuun bal\'ina iddoo sooranni gara dhiigaatti xuuxamu (surface area) dachaadhaan dabala.`,
    hint: 'Villi and microvilli drastically increase the absorptive surface area of the small intestine.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q89',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Anaerobic Respiration: Alcoholic Fermentation in Yeasts',
    questionText: '89. In the absence of molecular oxygen, baker\'s and brewer\'s yeast (Saccharomyces cerevisiae) metabolize pyruvate via alcoholic fermentation to regenerate NAD⁺. What are the end products of this pathway?',
    options: [
      'Lactic acid and oxygen',
      'Acetic acid and methane',
      'Water and ozone',
      'Ethanol (ethyl alcohol) and carbon dioxide (CO₂)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Under anaerobic conditions, yeast cells cannot feed pyruvate into the mitochondrial Krebs cycle. To regenerate NAD⁺ required to sustain glycolysis, pyruvate is first decarboxylated by pyruvate decarboxylase into acetaldehyde, releasing carbon dioxide (CO₂). Acetaldehyde is then reduced by alcohol dehydrogenase (using NADH) into ethanol. Thus, the end products are ethanol and CO₂.

🇪🇹 አማርኛ (Amharic):
እርሾ (Yeast) ኦክስጅን በሌለበት ሁኔታ ግሉኮስን በፈርመንቴሽን (fermentation) ሲያቦካ የሚፈጠሩት የመጨረሻ ውጤቶች ኢታኖል ወይም አልኮል (Ethanol) እና ካርቦን ዳይኦክሳይድ (CO₂) ናቸው።

🌳 Afaan Oromoo:
Yeroo raawwii 'fermentation' yisitiin (yeast) oksijiinii malee paayiruveetii caccabsu oomishni dhumaa alkoolii (ethanol) fi gaasii kaarboon daayoksaayidii (CO₂) dha.`,
    hint: 'Yeast alcoholic fermentation produces ethanol and carbon dioxide.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q90',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ecotoxicology: Biological Magnification (Biomagnification)',
    questionText: '90. The ecological phenomenon where persistent, lipid-soluble chemical toxins (such as DDT or methylmercury) accumulate in progressively higher concentrations in top trophic level predators is called',
    options: [
      'Eutrophication',
      'Biomagnification (Biological amplification)',
      'Bioattenuation',
      'Thermal pollution'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Biological magnification (biomagnification) describes the process whereby persistent, fat-soluble (lipophilic), non-biodegradable synthetic chemicals (e.g., organochlorine pesticides like DDT, PCBs, heavy metals) increase in concentration at each successive trophic link in a food chain, reaching maximal, toxic concentrations in apex tertiary consumers (like eagles or predatory fish).

🇪🇹 አማርኛ (Amharic):
እንደ ዲዲቲ (DDT) እና ሜርኩሪ ያሉ የማይበሰብሱ መርዛማ ኬሚካሎች በምግብ ሰንሰለት ከታች ወደ ላይ በሄዱ ቁጥር በከፍተኛ አዳኝ እንስሳት ሰውነት ውስጥ በከፍተኛ መጠን እየተከማቹ መሄዳቸው ባዮማግኒፊኬሽን (Biomagnification) ይባላል።

🌳 Afaan Oromoo:
Summiin keemikaalaa kan hin badne (kan akka DDT) daandii soorataa keessa darbee sadarkaa soorataa olaanoo irratti garmalee kuufamaa deemuu 'Biomagnification' jedhama.`,
    hint: 'Biomagnification is the progressive buildup of persistent toxins at higher trophic levels.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q91',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Anatomy: Comparison of Xylem and Phloem Tissues',
    questionText: '91. In vascular plants, which statement correctly contrasts the structural and functional properties of xylem and phloem?',
    options: [
      'Xylem conducts sucrose bidirectionally; phloem conducts water unidirectionally',
      'Xylem consists of living sieve tubes; phloem consists of dead lignified tracheids',
      'Xylem conducts water and dissolved minerals unidirectionally; phloem translocates organic nutrients bidirectionally',
      'Xylem requires cellular metabolic energy to transport water; phloem transport is entirely passive'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In tracheophytes:
• Xylem consists of non-living, hollow, lignified vessels and tracheids that transport water and dissolved inorganic minerals unidirectionally from roots upward to shoots driven by transpiration pull.
• Phloem consists of living sieve tube elements and companion cells that translocate dissolved photoassimilates (sucrose) bidirectionally from source to sink tissues.
Therefore, Option C accurately contrasts both tissues.

🇪🇹 አማርኛ (Amharic):
ዛይለም (Xylem) ውሃንና ማዕድናትን ከስር ወደ ላይ ወደ አንድ አቅጣጫ ብቻ ሲያጓጉዝ፣ ፍሎይም (Phloem) በቅጠል የተዘጋጁ ምግቦችን ወደ ሁሉም አቅጣጫዎች (bidirectionally) ያጓጉዛል።

🌳 Afaan Oromoo:
Ujummoon 'Xylem' bishaanii fi albuuda gara gubbaatti kallattii tokko qofaan geejjiba; 'phloem' ammoo soorata biqiltuu kallattii hundaan (bidirectionally) daddabarsa.`,
    hint: 'Xylem conducts water unidirectionally upwards; phloem translocates sucrose bidirectionally.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q92',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Neurobiology: Myelination and Saltatory Conduction',
    questionText: '92. What is the multi-layered lipid-rich dielectric sheath produced by Schwann cells and oligodendrocytes that insulates vertebrate axons to facilitate rapid saltatory conduction?',
    options: [
      'Myelin sheath',
      'Neurilemma',
      'Synaptic cleft',
      'Endoneurium'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The myelin sheath is an insulating, lipid-dense bilayer membrane wrapped concentrically around axons by Schwann cells (in the peripheral nervous system) and oligodendrocytes (in the central nervous system). It drastically increases electrical membrane resistance and prevents ion leakage, allowing action potentials to rapidly jump between unmyelinated nodes of Ranvier (saltatory conduction).

🇪🇹 አማርኛ (Amharic):
የነርቭ መልዕክት በፍጥነት እንዲጓዝ በነርቭ አክሰን (axon) ዙሪያ የተጠቀለለው በስብ የበለፀገ መከላከያ ሽፋን ማይሊን ሺዝ (Myelin sheath) ይባላል።

🌳 Afaan Oromoo:
Uffanni dhangala'aa coomaa 'Myelin sheath' jedhamu kutaalee narvii (axon) irratti maramuun ergaan narvii saffisaan akka daddarbu (saltatory conduction) godha.`,
    hint: 'The myelin sheath insulates axons and enables fast saltatory impulse conduction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q93',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Molecular Genetics: Watson-Crick Base Pairing Rules',
    questionText: '93. In the double-helical structure of DNA, according to Chargaff\'s base-pairing rules, Adenine forms two hydrogen bonds with Thymine (A=T), while Guanine pairs with Cytosine (G≡C) via how many hydrogen bonds?',
    options: [
      'One hydrogen bond',
      'Three hydrogen bonds',
      'Four hydrogen bonds',
      'Two ionic bridges'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In double-stranded B-DNA, purine-pyrimidine base pairing is governed by Watson-Crick rules:
• Adenine (A) forms two hydrogen bonds with Thymine (T).
• Guanine (G) forms three hydrogen bonds with Cytosine (C).
Because G≡C base pairs share three hydrogen bonds, DNA segments with higher GC content require higher temperatures (melting temperature, Tm) to denature.

🇪🇹 አማርኛ (Amharic):
በዲኤንኤ ድርብ ክር ውስጥ አዲኒን (A) ከታይሚን (T) ጋር በሁለት ሃይድሮጅን ቦንዶች ሲጣመር፣ ጓኒን (G) ከሳይቶሲን (C) ጋር የሚጣመረው በሶስት ሃይድሮጅን ቦንዶች (Three hydrogen bonds) ነው።

🌳 Afaan Oromoo:
Molakiyuulii DNA keessatti Guwaaniiniin (G) fi Saayitoosiiniin (C) hidhoo haayidiroojiinii sadiin (3) walitti hidhatu.`,
    hint: 'Guanine and Cytosine are held together by three hydrogen bonds (G≡C).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q94',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ethiopian Biodiversity: Endemic Wildlife of Ethiopia',
    questionText: '94. The Ethiopian Wolf (Canis simensis) of the Bale and Simien Mountains and the Walia Ibex (Capra walie) of the Simien Mountains National Park are described biologically as',
    options: [
      'Invasive exotic species',
      'Cosmopolitan species',
      'Endemic species restricted naturally to Ethiopia',
      'Migratory aquatic mammals'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Endemic species are taxa that are naturally restricted to a defined geographic region or country and found nowhere else on Earth. Both the Ethiopian wolf (Canis simensis, Africa\'s most endangered canid) and the Walia ibex (Capra walie, an endangered wild mountain goat) are endemic exclusively to the afro-alpine highlands of Ethiopia.

🇪🇹 አማርኛ (Amharic):
የቀይ ቀበሮ (Ethiopian wolf) እና ዋልያ (Walia ibex) በኢትዮጵያ ከፍተኛ ተራሮች ብቻ የሚገኙ እና በሌላ በየትኛውም ዓለም የማይገኙ የሀገር በቀል ዝርያዎች (Endemic species) ናቸው።

🌳 Afaan Oromoo:
Jeedalli Diimaa (Ethiopian wolf) fi Waaliyaan (Walia ibex) biyya Itoophiyaa qofa keessatti kan argaman sanyiiwwan naannoo murtaa'aa (Endemic species) dha.`,
    hint: 'Endemic species are native organisms found exclusively within a particular geographic region.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q95',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Respiratory Control: Chemical Regulation of Breathing',
    questionText: '95. In human physiology, what chemical change in systemic arterial blood and cerebrospinal fluid is the primary, most sensitive stimulus that activates respiratory centers in the medulla oblongata to increase breathing rate?',
    options: [
      'An increase in carbon dioxide (CO₂) and hydrogen ion (H⁺) concentration',
      'A minor decrease in blood oxygen (O₂) saturation',
      'A decrease in blood osmotic pressure',
      'An increase in blood glucose concentration'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Central chemoreceptors located on the ventrolateral surface of the medulla oblongata respond to the pH of surrounding cerebrospinal fluid (CSF). Because CO₂ rapidly diffuses across the blood-brain barrier and forms carbonic acid (dissociating into H⁺ and HCO₃⁻), elevated arterial PCO₂ (hypercapnia) produces CSF acidosis, which is the most potent physiological trigger driving the respiratory centers to stimulate hyperventilation.

🇪🇹 አማርኛ (Amharic):
የሰውን ልጅ የመተንፈስ ፍጥነት እንዲጨምር የሚያደርገው ዋናው እና በጣም ፈጣኑ ምልክት በደም እና በአንጎል ፈሳሽ ውስጥ የካርቦን ዳይኦክሳይድ (CO₂) እና የሃይድሮጅን አዮን (H⁺) መጠን መጨመር ነው።

🌳 Afaan Oromoo:
Saffisa hafuura baafannaa namaa kan dabalu madda guddaan dhiiga keessatti dabaluu gaasii kaarboon daayoksaayidii (CO₂) fi asiidummaa (H⁺) dha.`,
    hint: 'Increased arterial CO₂ and acidity (H⁺) is the primary chemical trigger for ventilation.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q96',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Enzyme Mechanisms: Induced-Fit Model vs. Lock-and-Key',
    questionText: '96. How does Daniel Koshland\'s Induced-Fit model of enzyme action refine and improve upon Emil Fischer\'s classical Lock-and-Key hypothesis?',
    options: [
      'It proposes that the substrate changes its chemical bonds prior to encountering the enzyme',
      'It asserts that the active site is slightly flexible and changes conformation to fit snugly around the substrate upon binding',
      'It states that enzymes are consumed and irreversibly modified at the end of catalytic cycles',
      'It proves that coenzymes are strictly unnecessary for all biological catalysts'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
While the rigid Lock-and-Key model assumed a pre-formed, inflexible complementary active site, the modern Induced-Fit model recognizes enzyme dynamic plasticity: the active site is flexible, and substrate binding induces conformational rearrangements that mold the active site around the transition state, straining substrate chemical bonds to accelerate catalysis.

🇪🇹 አማርኛ (Amharic):
የኢንዲዩስድ ፊት ሞዴል (Induced-Fit model) የሚያስረዳው የኢንዛይሙ አክቲቭ ሳይት (active site) ልክ እንደ ጓንት ተጣጣፊ በመሆኑ ንጥረ-ነገሩ (substrate) ሲገባ ቅርፁን አስተካክሎ አጥብቆ እንደሚያቅፈው ነው።

🌳 Afaan Oromoo:
Yaadni 'Induced-Fit model' inzaayimiin iddoo hojii (active site) laafaa ta'e qabaatee, yeroo 'substrate'n itti dhufu boca isaa sirreessee akka qabatu ibsa.`,
    hint: 'The induced-fit model states that the active site flexes to fit the substrate snugly.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q97',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ecology: Ecological Pyramids and the Laws of Thermodynamics',
    questionText: '97. Which type of ecological pyramid is ALWAYS upright and can NEVER be inverted in any real, functional natural ecosystem?',
    options: [
      'Pyramid of Numbers',
      'Pyramid of Biomass in marine ecosystems',
      'Pyramid of Parasitic feeding links',
      'Pyramid of Energy'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to the First and Second Laws of Thermodynamics, energy cannot be created, and during every energy transformation, a substantial portion is dissipated as non-usable metabolic heat. Consequently, the rate of energy flow through higher trophic levels is always strictly less than that in preceding levels, making the Pyramid of Energy universally and permanently upright.

🇪🇹 አማርኛ (Amharic):
የኃይል ፒራሚድ (Pyramid of Energy) በየትኛውም ስነ-ምህዳር ውስጥ ምንጊዜም ቀጥ ያለ (upright) እንጂ ፈጽሞ ወደታች ሊገለበጥ (inverted) አይችልም፤ ምክንያቱም ኃይል ከአንዱ ደረጃ ወደ ቀጣዩ ሲተላለፍ ሁልጊዜ ይቀንሳል።

🌳 Afaan Oromoo:
Piraamiidiin Anniisaa (Pyramid of Energy) yoomiyyuu gadi garagaluu hin danda'u (always upright); sababiin isaas anniisaan sadarkaa soorataa tokkorraa isa biraatti yeroo darbu yeroo hunda waan hir'atuufi.`,
    hint: 'The pyramid of energy is always upright due to heat dissipation at each trophic step.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q98',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Diversity: Characteristics of Bryophytes',
    questionText: '98. Why are bryophytes (such as mosses and liverworts) restricted in size and confined predominantly to damp, shaded terrestrial habitats?',
    options: [
      'They lack specialized vascular conducting tissues (xylem and phloem) and require water for flagellated sperm motility',
      'They produce seeds with impermeable thick seed coats',
      'They are heterotrophic saprophytes unable to perform photosynthesis',
      'Their cell walls lack cellulose polymers'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Bryophytes are non-vascular embryophytes. Because they lack lignified xylem vessels and phloem sieve elements, water and dissolved nutrients must move slowly across cells via capillary diffusion and osmosis, severely limiting their stature. Furthermore, their flagellated male antherozoids require a film of environmental surface water to swim to the archegonium for fertilization.

🇪🇹 አማርኛ (Amharic):
ብራዮፋይቶች (እንደ mosses) በቁመት አጫጭር እና በእርጥበታማ ቦታዎች ብቻ የሚኖሩት እውነተኛ የውሃ እና የምግብ ማስተላለፊያ ቧንቧዎች (xylem እና phloem) ስለሌላቸው እና ለመራባት ውሃ ስለሚያስፈልጋቸው ነው።

🌳 Afaan Oromoo:
Biqiltoonni 'Bryophytes' ujummoo daddabarsituu (xylem fi phloem) waan hin qabnee fi sanyiin kormaa isaanii bishaan keessa daakee wal-horuuf bishaan waan barbaaduuf lafa jiidhaa qofa jiraatu.`,
    hint: 'Bryophytes lack vascular tissues and need water for flagellated sperm to reach the egg.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q99',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cardiovascular System: Structural Differences in Blood Vessels',
    questionText: '99. Which blood vessels contain internal semilunar pocket valves throughout their length to prevent retrograde backflow and ensure unidirectional blood return toward the heart under low hydrostatic pressure?',
    options: [
      'Systemic elastic arteries',
      'Arterioles',
      'Veins (Venules)',
      'Continuous blood capillaries'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Unlike arteries, which carry high-pressure blood pumped directly by the ventricles, systemic veins transport deoxygenated blood back to the heart under extremely low hydrostatic pressure. To overcome gravity and prevent retrograde blood pooling, veins feature inner endothelial semilunar pocket valves that open unidirectionally toward the heart, aided by the rhythmic squeeze of the skeletal muscle pump.

🇪🇹 አማርኛ (Amharic):
ደም በዝቅተኛ ግፊት ወደ ልብ ሲመለስ ወደ ኋላ እንዳይፈስ እና ወደ ልብ ብቻ እንዲጓዝ በውስጣቸው ቫልቮች (pocket valves) ያሏቸው የደም ስሮች ቬይንስ (Veins) ይባላሉ።

🌳 Afaan Oromoo:
Ujummooleen dhiigaa dhiibbaa xiqqaadhaan dhiiga gara onneetti deebisan kanneen akka dhiigni duubatti hin deebine vaalvii of keessaa qaban 'Veins' jedhamu.`,
    hint: 'Veins possess valves that maintain unidirectional blood flow under low pressure.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q100',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Evolutionary Cytology: The Endosymbiotic Theory',
    questionText: '100. According to Lynn Margulis\'s Endosymbiotic Theory, what is the evolutionary origin of eukaryotic mitochondria and chloroplasts?',
    options: [
      'Spontaneous de novo crystallization of nuclear ribonucleic acids',
      'Free-living aerobic and photosynthetic prokaryotes that were engulfed by ancestral host cells and became permanent endosymbionts',
      'Invaginations and budding of the outer nuclear membrane lipid bilayer',
      'Direct structural transformation of cytoplasmic vacuolar lysosomes'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The Endosymbiotic Theory states that modern eukaryotic organelles originated when ancestral anaerobic host cells engulfed primitive prokaryotes: mitochondria arose from engulfed aerobic alpha-proteobacteria, while chloroplasts evolved from engulfed photosynthetic cyanobacteria. Evidence includes their circular double-stranded DNA, 70S prokaryotic-like ribosomes, and double membrane envelopes.

🇪🇹 አማርኛ (Amharic):
የኢንዶሲምባዮቲክ ቲዮሪ (Endosymbiotic Theory) እንደሚያስረዳው ማይቶኮንድሪያ እና ክሎሮፕላስት ጥንት ነፃ ሆነው ይኖሩ የነበሩ ኤሮቢክ ባክቴሪያዎች እና ሲያኖባክቴሪያዎች በሌሎች ትላልቅ ሴሎች ውስጥ ገብተው በጋራ አብረው መኖር በመጀመራቸው የመጡ ናቸው።

🌳 Afaan Oromoo:
Yaadni saayinsaawaa 'Endosymbiotic Theory' akka jedhutti, maayitookondiriyaa fi kiliroopilaastiin dur baakteeriyaa bilisaan jiraatan turanii seelii biraan liqimfamuun qaama seelichaa ta'an.`,
    hint: 'Mitochondria and chloroplasts evolved from engulfed symbiotic prokaryotes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
