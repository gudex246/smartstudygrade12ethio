import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2018_EC_PART1: Question[] = [
  {
    id: 'bio-2018-q1',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Biotechnology & Bioethics: Genetically Engineered Microorganisms',
    questionText: '1. A city Municipality following the ban of non-degradable plastic bags, proposed to use genetically engineered bacterium to degrade plastic wastes for making bags. However, an authority claims the use of bioengineered bacteria due to the fear of its negative consequences on the environment. Based on this scenario, which decision is valid?',
    options: [
      'accepted with stringent protocols to reduce its effect.',
      'rejected since the city can use already existing materials for packing.',
      'accepted whatever the environmental consequences it caused.',
      'rejected since the municipality can use the native species.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
While introducing genetically modified or bioengineered bacteria carries potential biosafety and ecological risks, completely rejecting innovative biotechnology stalls environmental remediation. The scientifically and bioethically sound decision is to accept the technology under stringent biosafety protocols, containment guidelines, and continuous risk monitoring to mitigate adverse effects while effectively degrading non-degradable plastic waste.

🇪🇹 አማርኛ (Amharic):
የተሻሻሉ (bioengineered) ባክቴሪያዎችን መጠቀም የአካባቢ ስጋት ሊኖረው ቢችልም፣ ቴክኖሎጂውን በጥብቅ የደህንነት ደንቦችና ፕሮቶኮሎች (stringent protocols) በመቆጣጠር መጠቀም የተከማቹ ፕላስቲኮችን ለማስወገድ ትክክለኛና ተቀባይነት ያለው ውሳኔ ነው።

🌳 Afaan Oromoo:
Baakteeriyaa jeneetikaniin fooyya'etti fayyadamuun balaa naannoo qabaachuu danda'us, qajeelfamoota of-eeggannoo fi to'annoo cimaa (stringent protocols) hordofanii itti fayyadamuun furmaata saayinsaawaa fudhatama qabuudha.`,
    hint: 'Strict biosafety regulations allow safe deployment of bioengineered organisms to solve environmental waste problems.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q2',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Sensory Organs: Path of Hearing in Human Ear',
    questionText: `2. This item is based on the following mechanism of hearing in human ear:
I. Nerve impulses produced by hair-like sensory cells are transmitted to, and interpreted by the brain.
II. Ear ossicles amplify vibrations and cause vibration of the ear fluid.
III. Sound wave from the air is collected by pinna and directs to the ear canal.
IV. Vibrations are magnified in eardrum and transmitted to oval window.
Then which of the following order summarizes correct path of hearing in human ear?`,
    options: [
      'III, I, II, IV',
      'III, II, IV, I',
      'III, IV, II, I',
      'III, IV, I, II'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The physiological sequence of auditory transmission is:
1. Pinna collects sound waves from the air and channels them into the auditory canal (III).
2. Sound waves strike the tympanic membrane (eardrum), causing it to vibrate (IV).
3. The ear ossicles (malleus, incus, stapes) amplify these mechanical vibrations and push against the oval window, vibrating the perilymph fluid in the cochlea (II).
4. Fluid ripples stimulate hair cells in the organ of Corti, generating electrical nerve impulses sent via the auditory nerve to the brain for interpretation (I).
Hence, the correct chronological path is III → IV → II → I.

🇪🇹 አማርኛ (Amharic):
የሰው ልጅ የመስማት ሂደት ቅደም ተከተል፡
1. የውጭ ጆሮ (Pinna) የድምፅ ሞገዶችን ሰብስቦ ወደ ጆሮ ቱቦ ያስተላልፋል (III)።
2. የጆሮ ታምቡር (eardrum) ተንቀጥቅጦ ድምፁን ያጎላል (IV)።
3. ጥቃቅን የጆሮ አጥንቶች (ossicles) ንዝረቱን አጉልተው በጆሮ ፈሳሽ ላይ ንዝረት ይፈጥራሉ (II)።
4. የስሜት ህዋሳት የነርቭ መልዕክት በማመንጨት ወደ አንጎል ያስተላልፋሉ (I)።
ስለዚህ ትክክለኛው ቅደም ተከተል III, IV, II, I (አማራጭ C) ነው።

🌳 Afaan Oromoo:
Tartiiba dhageettii gurra namaa:
1. Gurri alaa (Pinna) sagalee walitti qabee dabarsa (III).
2. Membireeniin gurraa (eardrum) socho'uun gara 'oval window'tti dabarsa (IV).
3. Lafeewwan gurraa (ossicles) sagalicha guddissuun dhangala'oo gurraa sochoosu (II).
4. Seelonni rifeensa fakkaatan ergaa narvii gara sammuutti ergu (I).
Kanaafuu, tartiibni sirriin III, IV, II, I dha.`,
    hint: 'Sound waves are collected by pinna (III), hit eardrum (IV), amplified by ossicles (II), and transmitted to the brain (I).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q3',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Applied Zoology: Economic and Industrial Importance of Insects',
    questionText: '3. Which one of the following is the industrial importance of insects?',
    options: [
      'Serving as pollinating agents for plants',
      'Producing silk fibers for textiles',
      'Controlling pests that attack crops',
      'Serving as the source of pain-relieving drugs'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Sericulture is the commercial rearing of silkworms (Bombyx mori) to harvest raw silk fibers spun in their cocoons. This raw silk is spun and woven into luxury fabric, representing a multi-billion dollar industrial sector. Pollination and biological pest control are ecological and agricultural benefits, not industrial production processes.

🇪🇹 አማርኛ (Amharic):
የሐር ትል (silkworm) ለጨርቃ ጨርቅ ኢንዱስትሪ የሚሆን የሐር ክር (silk fibers) በማምረት ቀጥተኛ የሆነ የኢንዱስትሪ ጠቀሜታ ይሰጣል። የአበባ ብናኝ ማዛወር እና የተባይ መቆጣጠር ስነ-ምህዳራዊና ግብርናዊ ጠቀሜታዎች ናቸው።

🌳 Afaan Oromoo:
Raammooleen harcaatuu (silkworms) warshaalee uffataaf kan oolu kirrii harcaa (silk fibers) oomishuun faayidaa industirii guddaa kennu.`,
    hint: 'Silkworms produce silk cocoons harvested for the textile industry.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q4',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Molecular Biology: Protein Synthesis (Transcription and Translation)',
    questionText: '4. Two processes were taking place inside a eukaryotic cell. In process A, a ribosome made a specific protein by reading the instructions from mRNA. In process B, an mRNA was synthesized inside the nucleus. Based on this scenario, which of the following processes correctly represents A and B respectively?',
    options: [
      'Translation and Replication',
      'Transcription and Translation',
      'Replication and Translation',
      'Translation and Transcription'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Process A: Synthesis of a polypeptide chain at the ribosome by decoding genetic codons on mRNA is called Translation.
• Process B: Synthesis of a complementary mRNA molecule from a DNA template in the nucleus by RNA polymerase is called Transcription.
Therefore, A represents Translation and B represents Transcription.

🇪🇹 አማርኛ (Amharic):
• ሂደት A፡ ራይቦሶም የmRNAን መረጃ አንብቦ ፕሮቲን የሚያዘጋጅበት ሂደት ትራንስሌሽን (Translation) ይባላል።
• ሂደት B፡ በኒውክሊየስ ውስጥ ከዲኤንኤ ላይ mRNA የሚዘጋጅበት ሂደት ትራንስክሪፕሽን (Transcription) ይባላል።
ስለዚህ A እና B ቅደም ተከተላቸው Translation እና Transcription ናቸው።

🌳 Afaan Oromoo:
• Adeemsi A: Raayiboosoomiin ergaa mRNA irraa dubbisuun pirootiinii ijaaruun 'Translation' jedhama.
• Adeemsi B: Niwukilasiitti DNA irraa mRNA oomishuun 'Transcription' jedhama.
Kanaafuu, deebiin sirriin Translation fi Transcription dha.`,
    hint: 'Ribosome assembling proteins = Translation; Nucleus synthesizing mRNA from DNA = Transcription.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q5',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Enzyme Regulation: Covalent Modification',
    questionText: '5. Which one of the following statements is correct about regulation of enzyme through covalent modification? It happens through the',
    options: [
      'permanent binding of effectors to the active site of an enzyme.',
      'addition or elimination of some molecules attaching of enzyme protein.',
      'reversible binding of effectors to the allosteric site of an enzyme.',
      'inhibition of the enzyme by the end product of a pathway.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Covalent modification involves the reversible addition or removal of specific chemical functional groups (such as phosphate groups via phosphorylation/dephosphorylation, adenylation, methylation, or acetylation) to particular amino acid residues on an enzyme protein, altering its catalytic activity or conformation. In contrast, allosteric regulation involves non-covalent binding.

🇪🇹 አማርኛ (Amharic):
ኢንዛይሞችን በኮቫለንት ሞዲፊኬሽን (covalent modification) መቆጣጠር የሚከናወነው እንደ ፎስፌት ያሉ ኬሚካላዊ ቡድኖችን ወደ ኢንዛይሙ ፕሮቲን በመጨመር ወይም በማስወገድ (addition or elimination of molecules) ነው።

🌳 Afaan Oromoo:
To'annoon inzaayimii 'covalent modification'tiin gaggeeffamu gareewwan keemikaalaa (fkn, foosfeetii) pirootiinii inzaayimichaatti dabalanii ykn irraa hir'isanii hojii isaa to'achuun raawwatama.`,
    hint: 'Covalent modification alters enzyme activity by adding or removing chemical groups like phosphate.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q6',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Digestive Enzymes: Optimum pH and Catalytic Functions',
    questionText: `6. This item is based on the following table that describes about the role of digestive enzymes and their optimum pH:
No. | Enzymes | The role of the enzyme | Optimum pH
1. | Pepsin | Hydrolyzes proteins to amino acids | 1
2. | Amylase | Converts starch to maltose | 4 - 6
3. | Nuclease | Converts nucleotides to nucleic acids | 1
4. | Lactase | Hydrolyzes lactose to glucose and galactose | 7 - 8
Which alternative contains the correct role of the enzyme and its optimum pH?`,
    options: [
      '2 and 4',
      '1 and 4',
      '1, 2 and 4',
      '1, 3 and 4'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Analyzing the table:
• 1. Pepsin: Secreted in the stomach, active in strongly acidic gastric juice (pH 1–2), hydrolyzing proteins into smaller polypeptide fragments. Correct.
• 2. Amylase: Hydrolyzes starch into maltose disaccharides (salivary amylase works near pH 6–7, fungal/dietary ranges 4–6). Correct.
• 3. Nuclease: Hydrolyzes nucleic acids (DNA/RNA) into nucleotides (NOT nucleotides into nucleic acids), functioning in the neutral/alkaline small intestine (pH ~7–8), so row 3 is completely incorrect.
• 4. Lactase: Found in the brush border of the small intestine (optimum pH 7–8), hydrolyzing milk sugar lactose into glucose and galactose. Correct.
Therefore, rows 1, 2, and 4 are correct.

🇪🇹 አማርኛ (Amharic):
• 1. ፔፕሲን (Pepsin)፡ በጨጓራ ውስጥ በከፍተኛ አሲዳማነት (pH 1) ፕሮቲንን ይሰብራል (ትክክል)።
• 2. አሚሌዝ (Amylase)፡ ስታርችን ወደ ማልቶስ ይቀይራል (ትክክል)።
• 3. ኒውክሊየስ (Nuclease)፡ ኒውክሊክ አሲዶችን ወደ ኒውክሊዮታይድ እንጂ በተቃራኒው አይሰራም፤ ስለዚህ 3 ስህተት ነው።
• 4. ላክቴዝ (Lactase)፡ ላክቶስን ወደ ግሉኮስና ጋላክቶስ በpH 7-8 ይሰብራል (ትክክል)።
ስለዚህ 1, 2 እና 4 ትክክለኛ ጥንዶች ናቸው።

🌳 Afaan Oromoo:
Inzaayimiin Nuclease jedhamu asiidota niwukiliik gara niwukilootaayidiitti caccabsa malee faallaa isaa hin dalagu (lakkoofsa 3 dogoggora). Pepsin (1), Amylase (2), fi Lactase (4) sirriitti ibsamaniiru. Kanaafuu, deebiin 1, 2 fi 4 dha.`,
    hint: 'Nuclease breaks down nucleic acids into nucleotides, not the reverse, making entry 3 incorrect.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q7',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Mendelian Genetics: Monohybrid Testcross Probability',
    questionText: '7. A farmer crossed a heterozygous insect-resistant maize with a non-insect resistant maize variety, where insect-resistance gene is dominant over non-resistance one. What is the probability of the offspring resulted from this cross?',
    options: [
      '75% resistant and 25% are non-resistant to insect infestation.',
      '50% resistant and 50% are non-resistant to insect infestation.',
      '25% resistant and 75% are non-resistant to insect infestation.',
      '100% of the offspring are resistant to insect infestation.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Let R represent the dominant insect-resistance allele, and r represent the recessive non-resistance allele:
• Heterozygous parent: Rr (insect-resistant)
• Non-resistant parent: rr (homozygous recessive)
Punnett Square cross (Rr × rr):
• Offspring genotypes: 1/2 Rr (heterozygous resistant), 1/2 rr (homozygous non-resistant).
Phenotypic ratio: 50% resistant and 50% non-resistant to insect infestation.

🇪🇹 አማርኛ (Amharic):
• የተቃውሞ ባህሪ ያለው ሄትሮዛይገስ በቆሎ፡ Rr
• ተቃውሞ የሌለው በቆሎ፡ rr
የማዳቀሉ ውጤት (Rr × rr)፡
- 50% Rr (ተባይን መቋቋም የሚችሉ)
- 50% rr (ተባይን መቋቋም የማይችሉ)
ስለዚህ ውጤቱ 50% resistant and 50% non-resistant ይሆናል።

🌳 Afaan Oromoo:
Wal-nyaatinsa qaxxaamuraa Rr fi rr:
Gama jeneetikiitiin 50% Rr (kan ilbiisa danda'u) fi 50% rr (kan ilbiisa hin dandeenye) uuma.
Kanaafuu, deebiin 50% resistant fi 50% non-resistant dha.`,
    hint: 'A cross between Rr and rr yields a 1:1 ratio (50% resistant, 50% non-resistant).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q8',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Biology and Society: Applications and Boundaries of Biological Sciences',
    questionText: '8. Which statement does NOT show the role of biological discoveries for the society?',
    options: [
      'Detection of cancer cells through advanced instruments',
      'Collecting and analyzing evidences from crime scene',
      'Studying of microorganisms that cause disease to humans',
      'Resolving conflict that happens as a result of over population'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Biological discoveries directly empower medicine (diagnosing malignant cancer cells), forensic science (DNA profiling and forensic entomology at crime scenes), and pathology/microbiology (identifying pathogens and formulating vaccines). Resolving political, territorial, or resource conflicts arising from overpopulation belongs to social sciences, governance, law, and politics, not direct biological science discoveries.

🇪🇹 አማርኛ (Amharic):
ካንሰርን ማወቅ፣ ወንጀልን በዲኤንኤ መርምሮ ማስረጃ ማግኘት እና በሽታ አምጪ ህዋሳትን ማጥናት ባዮሎጂ ለህብረተሰቡ የሚያበረክታቸው ቀጥተኛ አስተዋጽኦዎች ናቸው። በህዝብ ቁጥር መጨመር ምክንያት የሚፈጠሩ ማህበራዊ ግጭቶችን መፍታት ግን የማህበራዊ ሳይንስና የፖለቲካ ዘርፍ እንጂ የባዮሎጂ ቀጥተኛ ግኝት አይደለም።

🌳 Afaan Oromoo:
Walitti bu'iinsa uummata baay'achuu irraa dhalatu furuun dhimma saayinsii hawaasummaa fi siyaasaati malee hojii qorannoo baayoloojii miti.`,
    hint: 'Conflict resolution is a political and socio-economic responsibility, not a biological discipline.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q9',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Human Reproduction: Endocrine Functions of Ovaries vs. Testes',
    questionText: '9. The function of ovaries in female reproductive system differs from testes in the male reproductive system in which ovaries produce',
    options: [
      'estrogen that initiates pregnancy, whereas testes produce LH and sperm.',
      'progesterone that initiates ovulation, whereas testes produce FSH and sperm.',
      'estrogen that promotes the maturation of the ovum, whereas testes produce testosterone and sperm.',
      'androgen that develops a mature ovum, whereas testes produce estrogen and sperm.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The ovaries produce female gametes (ova) and steroid sex hormones (estrogen and progesterone). Estrogen stimulates secondary sexual characteristics, endometrial proliferation, and follicular development/maturation of the ovum. The testes produce male gametes (spermatozoa) and the androgen testosterone, which governs male sexual development and spermatogenesis. (LH and FSH are pituitary gonadotropins, not gonadal hormones).

🇪🇹 አማርኛ (Amharic):
የሴት እንቁልፍጢት (ovaries) እንቁላል እንዲበስል የሚረዳውን ኤስትሮጅን (estrogen) እና የሴት ጋሜትን ሲያዘጋጁ፣ የወንድ የዘር ፍሬ (testes) ደግሞ ቴስቶስትሮን (testosterone) ሆርሞን እና ስፐርምን ያመርታሉ።

🌳 Afaan Oromoo:
Oovaariin hormoonii 'estrogen' kan bilchina hanqaaquu gargaaru fi hanqaaquu oomisha; kormaan (testes) ammoo hormoonii 'testosterone' fi sanyii kormaa (sperm) oomisha.`,
    hint: 'Ovaries secrete estrogen and ova; testes secrete testosterone and spermatozoa.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q10',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Endocrine System: Hormonal Control of the Menstrual Cycle',
    questionText: '10. Which pituitary hormone surges sharply around day 14 of the human female ovarian cycle to directly induce ovulation (release of the secondary oocyte)?',
    options: [
      'Follicle-stimulating hormone (FSH)',
      'Luteinizing hormone (LH)',
      'Progesterone',
      'Human chorionic gonadotropin (hCG)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Around mid-cycle (day 14), rising estradiol levels from the mature Graafian follicle exert positive feedback on the anterior pituitary gland, triggering a dramatic spike in Luteinizing Hormone (the "LH surge"). This LH surge triggers rupture of the follicle and release of the mature oocyte (ovulation), transforming the remaining follicular cells into the corpus luteum.

🇪🇹 አማርኛ (Amharic):
በሴቶች የወር አበባ ዑደት 14ኛው ቀን አካባቢ የሉቲናይዚንግ ሆርሞን (Luteinizing Hormone - LH) በከፍተኛ መጠን መጨመር የበሰለውን እንቁላል ከእንቁልፍጢት እንዲወጣ (ovulation) ቀጥተኛ ምክንያት ይሆናል።

🌳 Afaan Oromoo:
Marsaa laguu guyyaa 14ffaa irratti dhangala'insi hormoonii 'Luteinizing Hormone' (LH) baay'ee dabaluudhaan hanqaaquun akka gad-lakkifamu (ovulation) taasisa.`,
    hint: 'The mid-cycle LH surge is the definitive hormonal trigger for ovulation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q11',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cell Biology & Osmosis: Plasmolysis in Plant Cells',
    questionText: '11. A biology guide prepared a thin slice of onion epidermal cells and placed it in a hypertonic solution for 15 minutes. What would be the result of the experiment? They',
    options: [
      'become crenated due to damage to the cell walls by the water pressure.',
      'burst as the vacuoles presses against the cytoplasm and cell membrane.',
      'get plasmolyzed due to excessive loss of water from the vacuole.',
      'become turgid due to net inflow of water from the external solution.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
When plant cells (such as onion epidermal cells) are immersed in a hypertonic solution (which has a lower water potential than the cell sap), water leaves the large central vacuole by exosmosis. As the vacuole loses volume, the protoplast shrinks and the plasma membrane pulls away from the rigid cellulose cell wall. This condition is called plasmolysis. (Crenation occurs only in wall-less animal red blood cells).

🇪🇹 አማርኛ (Amharic):
የሽንኩርት ሴሎች በሃይፐርቶኒክ መፍትሄ (hypertonic solution) ውስጥ ሲቀመጡ፣ ውሃ በኦስሞሲስ ከቫኪዩል ውስጥ በብዛት ስለሚወጣ ሳይቶፕላዝሙና የሴል ሜምብሬኑ ከግድግዳው ተለይተው ወደ ውስጥ ይኮማተራሉ፤ ይህም ፕላዝሞላይሲስ (plasmolysis) ይባላል።

🌳 Afaan Oromoo:
Seeliin qullubbii yommuu furmaata 'hypertonic' keessa kaa'amu bishaan vakiyoolii keessaa ba'ee baqachuun qabiyyee seelichaa gara keessaatti dacha'a; adeemsi kunis 'plasmolysis' jedhama.`,
    hint: 'Exosmosis in plant cells causes the cytoplasm and membrane to shrink away from the cell wall (plasmolysis).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q12',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Physiology: Photorespiration',
    questionText: '12. Which of the following is correct regarding photorespiration? It is a process of',
    options: [
      'balancing O₂ and CO₂ concentration in the cell.',
      'oxidizing organic compounds to release CO₂.',
      'respiration common in plants during the daytime.',
      'reduction of organic compounds to generate ATP.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Photorespiration is a light-dependent wasteful metabolic pathway in C3 plants that occurs when the enzyme RuBisCO oxygenates RuBP (ribulose-1,5-bisphosphate) instead of carboxylating it. This results in the oxygenation and oxidation of organic compounds, breaking them down to release CO₂ without producing ATP or NADPH, thereby significantly decreasing photosynthetic efficiency.

🇪🇹 አማርኛ (Amharic):
ፎቶሬስፒሬሽን (Photorespiration) በC3 ዕፅዋት ውስጥ የሩቢስኮ (RuBisCO) ኢንዛይም ከካርቦን ዳይኦክሳይድ ይልቅ ኦክስጅንን ሲያስተሳስር ኦርጋኒክ ውህዶችን በማቃጠል (oxidizing) ካርቦን ዳይኦክሳይድን የሚያስወጣና ኃይልን የሚያባክን ሂደት ነው።

🌳 Afaan Oromoo:
'Photorespiration' adeemsa inzaayimiin RuBisCO O₂ qabachuun kompaawundoota orgaanikii oksaayidaayizii gochuudhaan CO₂ gad-lakkisu yoo ta'u, ATP utuu hin oomishin qabeenya balleessa.`,
    hint: 'Photorespiration oxidizes organic compounds and releases CO₂ without generating ATP.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q13',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Homeostasis: Behavioral vs. Physiological Thermoregulation',
    questionText: '13. Which alternative contains the behavioral method of thermoregulation with its example?',
    options: [
      'Honey bees - stay in hive to survive cold seasons',
      'Cats - use involuntary muscle contraction to generate heat',
      'Foxes - narrow blood vessels to prevent heat loss',
      'Rodents - sweat to maintain body temperature'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Behavioral thermoregulation involves conscious, voluntary actions or habitat modifications undertaken to regulate thermal balance, such as honey bees clustering inside their hive during winter and vibrating their flight muscles collectively.
• Shivering (muscle contraction in cats), vasoconstriction (narrowing blood vessels in foxes), and sweating (evaporative cooling) are involuntary physiological/anatomical responses, not behavioral adaptations.

🇪🇹 አማርኛ (Amharic):
የባህሪ ሙቀት መቆጣጠሪያ (behavioral thermoregulation) እንስሳት በራሳቸው ውሳኔ የሚያደርጉትን ተግባር ያሳያል፤ ለምሳሌ ንቦች በቀዝቃዛ ወቅት ሙቀትን ለመጠበቅ በጎጇቸው ውስጥ መሰባሰባቸው የባህሪ ዘዴ ነው። መንቀጥቀጥና የደም ቧንቧ ማጥበብ ግን ፊዚዮሎጂካዊ ናቸው።

🌳 Afaan Oromoo:
Kannisoonni yeroo qorraa hoo'a ofii eeggachuuf manasaanii (gaagura) keessatti walitti qabamuun mala amalaa (behavioral adaptation) dha.`,
    hint: 'Bees grouping inside their hive is a voluntary behavioral mechanism to conserve heat.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q14',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ecology & Conservation: Physical Soil Conservation Methods',
    questionText: '14. Why hillside terracing is considered as a mechanical soil conservation measure? Because it',
    options: [
      'is constructed to intercept runoff water that drain from the slopy area.',
      'breaks largely the speed of wind to avoid wind erosion.',
      'is a reservoir of rainwater to use the water for irrigation purpose.',
      'is constructed to divert the rainwater to other area with higher slope.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Hillside terracing is classified as a physical/mechanical engineering soil conservation technique because earthen or stone ridges and stepped benches are physically constructed across the slope to intercept, break the velocity of, and safely collect surface runoff water flowing down steep gradients, thereby preventing sheet and gully erosion.

🇪🇹 አማርኛ (Amharic):
እርከን (terracing) እንደ ሜካኒካል የአፈር ጥበቃ ዘዴ የሚቆጠረው ቁልቁል የሚወርደውን የጎርፍ ፍሰት (runoff water) ፍጥነት ለመቀነስና አፈሩን እንዳያጥበው በአካላዊ ግንባታ ስለሚዘጋ ነው።

🌳 Afaan Oromoo:
Dallaa ykn daagaa (terracing) hojjechuun lolaa fi dhangala'a bishaanii tabba irraa gadi yaa'u waan ittisuuf mala meekaanikaalaa biyyootti lakkaa'ama.`,
    hint: 'Terraces physically intercept and slow down downhill surface runoff water.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q15',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Biological Molecules: Properties of Water (Specific Heat Capacity)',
    questionText: '15. The amount of energy required to raise the temperature of one gram of water by one degree Celsius is',
    options: [
      'cohesion force.',
      'surface tension.',
      'latent heat of vaporization.',
      'specific heat capacity.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Specific heat capacity is formally defined as the amount of thermal energy required to raise the temperature of one gram of a substance by 1°C (for water, this is 1 calorie or 4.184 Joules). Water has an exceptionally high specific heat capacity due to extensive intermolecular hydrogen bonding, which buffers aquatic ecosystems against rapid temperature fluctuations.

🇪🇹 አማርኛ (Amharic):
አንድ ግራም ውሃን በ1 ዲግሪ ሴልሺየስ ሙቀት ለመጨመር የሚያስፈልገው የሙቀት ኃይል መጠን "ስፔሲፊክ ሂት ካፓሲቲ" (Specific heat capacity) ይባላል።

🌳 Afaan Oromoo:
Hoo'a giraama bishaanii tokko dabalata digrii seentigireedii tokkoon ol-kaasuuf barbaachisu dandeettii hoo'a murtaa'aa (Specific heat capacity) jedhama.`,
    hint: 'Specific heat capacity is the energy needed to heat 1 g of water by 1 °C.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q16',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Biomolecules: Classification and Monomers of Organic Molecules',
    questionText: `16. This item is based on the following table about the classification of organic molecules:
No. | Organic molecules | Elemental composition | Monomers
1. | Sucrose | Carbon, hydrogen and oxygen | Glucose and fructose
2. | Starch | Carbon, hydrogen and oxygen | Glucose and galactose
3. | Proteins | Carbon, hydrogen and oxygen | Amino acids
4. | Lipids | Carbon, hydrogen and oxygen | Fatty acid and glycerol
Which numbers in the above table correspond to the correct elemental composition and monomers of the organic molecules?`,
    options: [
      '1, 2 and 4',
      '1, 3 and 4',
      '1 and 3',
      '1 and 4'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Evaluating each entry:
• 1. Sucrose: Disaccharide composed of C, H, O formed from monomers glucose and fructose. Correct.
• 2. Starch: Polysaccharide composed exclusively of repeating α-glucose monomers (galactose is NOT a monomer of starch). Incorrect.
• 3. Proteins: Made of amino acids, but fundamentally contain Nitrogen (C, H, O, N and often S); omitting nitrogen makes the elemental composition incorrect. Incorrect.
• 4. Lipids: Composed of C, H, O (triglycerides consist of glycerol and fatty acids). Correct.
Therefore, rows 1 and 4 accurately match elemental composition and building units.

🇪🇹 አማርኛ (Amharic):
• 1. ሱክሮስ (Sucrose)፡ ከC, H, O የተሰራ ሲሆን ሞኖመሮቹ ግሉኮስ እና ፍሩክቶስ ናቸው (ትክክል)።
• 2. ስታርች (Starch)፡ ሞኖመሩ ግሉኮስ ብቻ እንጂ ጋላክቶስ አይደለም (ስህተት)።
• 3. ፕሮቲን፡ ናይትሮጅን (N) የለውም ተብሎ ተጽፏል፤ ናይትሮጅን የፕሮቲን መሰረታዊ አባል ስለሆነ ስህተት ነው።
• 4. ሊፒድ (Lipids)፡ ከC, H, O እና ከፋቲ አሲድና ግሊሰሮል የተሰራ ነው (ትክክል)።
ስለዚህ 1 እና 4 ብቻ ትክክለኛ ናቸው።

🌳 Afaan Oromoo:
Istaarkiin (2) giluukoosii qofarraa tolfama malee gaalaaktoosii hin qabu. Pirootiiniin (3) ammoo naayitiroojiinii qabaachuun dirqama. Kanaafuu, lakkoofsi 1 fi 4 qofti sirriidha.`,
    hint: 'Starch contains only glucose units, and proteins must contain nitrogen; rows 1 and 4 are fully correct.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q17',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Bioethics: Definition and Moral Dimensions of Biological Discoveries',
    questionText: '17. What are ethical issues in biology? They are issues linked to',
    options: [
      'use of microscope to observe human check cells.',
      'study the interaction between organisms.',
      'use of scientific discoveries for human wellbeing.',
      'study the role of evolution in speciation.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Ethical issues in biology (Bioethics) encompass the moral principles, standards of conduct, and social responsibilities associated with the applications of biological research and scientific discoveries (such as human gene editing, reproductive cloning, stem cell therapy, and GMOs) to ensure they serve human wellbeing without causing moral harm or exploitation.

🇪🇹 አማርኛ (Amharic):
በባዮሎጂ ውስጥ የስነ-ምግባር (Ethical issues) ጉዳዮች የሚያተኩሩት ሳይንሳዊ ግኝቶችንና ቴክኖሎጂዎችን ለሰው ልጅ ደህንነት እና ጥቅም እንዴት በሃላፊነትና በፍትሃዊነት መጠቀም እንደሚገባ በሚነሱ የሞራል ጥያቄዎች ላይ ነው።

🌳 Afaan Oromoo:
Dhimmoonni naamusaa (ethical issues) qorannoo baayoloojii keessatti argannoo saayinsii nageenyaa fi faayidaa ilmaan namaatiif karaa sirrii ta'een itti fayyadamuu wajjin wal-qabata.`,
    hint: 'Bioethics governs the moral use of scientific discoveries for the wellbeing and safety of humanity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q18',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Infectious Diseases: Sexually Transmitted Infections (Gonorrhea)',
    questionText: '18. Which of the following is a symptom of gonorrhea infection?',
    options: [
      'Painful urination and abnormal discharge from the penis',
      'Necrotizing genital ulcer accompanied by lymphadenopathy',
      'Sores around the anus that leads to cancer through time',
      'Rash on hands and soles of feet with late neurological complication'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Gonorrhea (caused by Neisseria gonorrhoeae) characteristically manifests in infected males as acute dysuria (a painful, burning sensation during urination) accompanied by a thick, yellowish-green purulent penile urethral discharge. Genital chancres and rash on palms/soles are characteristic of syphilis (Treponema pallidum).

🇪🇹 አማርኛ (Amharic):
የጨብጥ (gonorrhea) በሽታ ዋና መገለጫ ምልክት በወንዶች ላይ በሽንት ጊዜ ከፍተኛ የማቃጠል ስሜት (painful urination) እና ከብልት የሚወጣ ያልተለመደ ፈሳሽ (abnormal discharge) መኖር ነው።

🌳 Afaan Oromoo:
Mallattoon dhukkuba dhibee dhangala'aa (gonorrhea) kan beekamu yeroo fincaanii dhukkubbii gubaa fi dhangala'aa malaa fakkaatu qaama saalaa dhiiraa irraa yaa'uudha.`,
    hint: 'Gonorrhea causes severe burning upon urination and abnormal purulent discharge.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q19',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cell Physiology: Metabolism (Anabolism and Catabolism)',
    questionText: '19. All the synthesis and breakdown chemical reactions together occurred in our cells is',
    options: [
      'catabolism.',
      'anabolism.',
      'respiration.',
      'metabolism.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Metabolism represents the totality of all biochemical reactions taking place within an organism's cells. It consists of two complementary branches:
• Anabolism: Constructive reactions that consume energy to synthesize complex molecules from simpler precursors.
• Catabolism: Degradative reactions that break down complex molecules into simpler compounds, releasing cellular energy.
Together, anabolism + catabolism = metabolism.

🇪🇹 አማርኛ (Amharic):
በሰውነታችን ህዋሳት ውስጥ የሚከናወኑ የሁሉም መገንባት (አናቦሊዝም) እና የመፈራረስ (ካታቦሊዝም) ኬሚካላዊ አጸግቦች አጠቃላይ ድምር ሜታቦሊዝም (Metabolism) ይባላል።

🌳 Afaan Oromoo:
Ida'amni wal-nyaatinsa keemikaalaa ijaarsaa (anabolism) fi caccabiinsaa (catabolism) seelota qaama keenya keessatti raawwatamuu marti 'metabolism' jedhama.`,
    hint: 'Metabolism encompasses all constructive (anabolism) and destructive (catabolism) reactions in a cell.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q20',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Circulatory System: Human Heart Anatomy and Blood Circulation',
    questionText: '20. Based on the diagram of the human heart, which statement correctly identifies the anatomical function of the labeled vessels?',
    options: [
      'Left atrium receives deoxygenated blood',
      'Right ventricle pumps oxygenated blood',
      'Aorta distributes oxygenated blood to the body',
      'Pulmonary vein carries deoxygenated blood'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In human cardiovascular circulation:
• The Aorta arises from the powerful left ventricle to distribute oxygen-rich (oxygenated) blood under systemic pressure to all systemic capillary beds throughout the body.
• The left atrium receives oxygenated blood from the pulmonary veins (not deoxygenated).
• The right ventricle pumps deoxygenated blood into the pulmonary artery to the lungs.
• Pulmonary veins carry oxygenated blood from the lungs back to the left atrium.
Hence, Option C is anatomically and physiologically correct.

🇪🇹 አማርኛ (Amharic):
አኦርታ (Aorta) በኦክስጅን የበለጸገውን ደም ከግራው ልብ ክፍል (left ventricle) ተቀብሎ ወደ መላ ሰውነት የሚያሰራጭ ትልቁ የደም ቧንቧ ነው። ሌሎች አማራጮች ተቃራኒ ናቸው።

🌳 Afaan Oromoo:
Ujummoon dhiigaa Aorta jedhamu dhiiga oksijiinii qabu 'left ventricle' irraa fuudhee gara qaama guutuutti raabsa.`,
    hint: 'The aorta carries oxygen-rich blood from the left ventricle to systemic tissues.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q21',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Cell Division: Stages of Meiosis II (Metaphase II and Anaphase II)',
    questionText: '21. A biologist observed the sister chromatids that lined up end-to-end at the equator of the cell in a sample taken from Test tube 1, whereas in another cell sample (Test tube 2) she observed the sister chromatids are pulled to opposite poles of the equator. Based on this information, which stages of meiosis are observed in test tube 1 and 2?',
    options: [
      'Prophase I and Metaphase I',
      'Metaphase II and Anaphase II',
      'Anaphase II and Telophase II',
      'Prophase I and Telophase I'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• In Test tube 1: Individual sister chromatids aligning single-file at the cell equator (metaphase plate) defines Metaphase II (in Metaphase I, homologous pairs align as tetrads).
• In Test tube 2: Centromeres dividing and sister chromatids being separated and pulled toward opposite spindle poles defines Anaphase II.
Therefore, Test tube 1 is in Metaphase II, and Test tube 2 is in Anaphase II.

🇪🇹 አማርኛ (Amharic):
• በምስል/ቴስት ቲዩብ 1 ላይ፡ ሲስተር ክሮማቲዶች በማዕከል መደርደራቸው ሜታፌዝ II (Metaphase II) መሆኑን ያሳያል።
• በቴስት ቲዩብ 2 ላይ፡ ሲስተር ክሮማቲዶች ተለያይተው ወደ ተቃራኒ ጫፎች መሳባቸው አናፌዝ II (Anaphase II) መሆኑን ያሳያል።
ስለዚህ ትክክለኛው መልስ Metaphase II and Anaphase II ነው።

🌳 Afaan Oromoo:
Seelii keessatti 'sister chromatids' sarara qixxee irratti hiriiruun Metaphase II yoo ta'u, gara pooleewwan faallaatti addaan harkifamuun ammoo Anaphase II dha.`,
    hint: 'Sister chromatids at the equator = Metaphase II; sister chromatids separating = Anaphase II.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q22',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Nutrition & Health: Vitamin Deficiencies (Vitamin C and Scurvy)',
    questionText: '22. Suppose the fibers in the connective tissue of the skin and blood vessels do not form properly and causes bleeding gums and poor healing of wounds. This problem is related with deficiency of',
    options: [
      'Vitamin D.',
      'Vitamin A.',
      'Vitamin B.',
      'Vitamin C.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Vitamin C (ascorbic acid) acts as an essential cofactor for prolyl and lysyl hydroxylase enzymes during the post-translational modification and cross-linking of collagen fibers. Without Vitamin C, defective, fragile collagen synthesis causes scurvy, clinically marked by fragile capillaries, bleeding gums, subcutaneous bruising, and impaired wound healing.

🇪🇹 አማርኛ (Amharic):
ቫይታሚን ሲ (Vitamin C) ለኮላጅን (collagen) ግንባታ እጅግ ወሳኝ ነው። የቫይታሚን ሲ እጥረት የድድ መድማት፣ የደም ስሮች መሰበር እና የቁስል ቶሎ አለመዳን (ስከርቪ / scurvy) ያስከትላል።

🌳 Afaan Oromoo:
Hanqinni Vaayitaaminii C pirootiinii 'collagen' ijaaruuf dhibee waan uumuuf hir'inni isaa dhiiguu irriidaa fi madaan dafee fayyuu dhabuu (scurvy) fida.`,
    hint: 'Vitamin C is required for collagen cross-linking; deficiency causes bleeding gums and scurvy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q23',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Plant Responses: Phototropism and Auxin Action',
    questionText: '23. What would happen to a plant placed in areas with unilateral light?',
    options: [
      'The light exposed side would produce more root hairs.',
      'The light exposed parts would produce more plant hormones.',
      'The plant would bend towards the light source.',
      'The plant would immediately stop growth.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
When a growing shoot receives unilateral (directional) light, the plant hormone auxin (IAA) undergoes lateral redistribution toward the darker, shaded side of the stem. The higher auxin concentration on the shaded side stimulates greater cell elongation than on the lighted side, creating differential growth that causes the shoot to bend towards the light source (positive phototropism).

🇪🇹 አማርኛ (Amharic):
ዕፅዋት ከአንድ አቅጣጫ ብቻ ብርሃን (unilateral light) ሲያገኙ ኦክሲን (auxin) የተባለው ሆርሞን ወደ ጥላው ክፍል በማፈግፈግ የዚያን ወገን ህዋሳት እንዲረዝሙ ያደርጋል፤ በዚህም ተክሉ ወደ ብርሃኑ አቅጣጫ ይጎነበሳል (phototropism)።

🌳 Afaan Oromoo:
Biqiltuun ifa kallattii tokko qofaa yoo argate, hormooniin 'auxin' gara kutaa dukkanooftuutti baqatee seelonni sun akka dheeratan gochuun biqiltichi gara ifaatti akka micciiramu (phototropism) taasisa.`,
    hint: 'Auxin accumulates on the shaded side, causing cell elongation that bends the shoot toward light.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q24',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Ecology: Population Growth Dynamics (Logistic Growth Model)',
    questionText: '24. In a grassland, the gazelle population initially increase in fast pace, then the growth rate reduces gradually and finally levels-off when the population reaches its maximum. This population growth model shows',
    options: [
      'exponential because the gazelle experiences maximum per capita rate of increase.',
      'logistic because the size of gazelle population reaches the carrying capacity.',
      'logistic because the per capita rate increase decreases as the population decreases.',
      'exponential since the growth rate of the gazelle reach maximum at the carrying capacity.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Logistic population growth (represented by a sigmoid or S-shaped curve) occurs when resources become limiting. The population initially exhibits rapid growth, which progressively slows due to density-dependent environmental resistance (food shortages, space, predators), eventually leveling off at the ecosystem's carrying capacity (K).

🇪🇹 አማርኛ (Amharic):
የህዝብ ቁጥር እድገት መጀመሪያ በፍጥነት አድጎ፣ ከዚያም የምግብና የቦታ ውስንነት ሲመጣ ፍጥነቱ ቀንሶ በካሪዪንግ ካፓሲቲ (Carrying capacity) ደረጃ ላይ ሲረጋጋ ሎጂስቲክ ግሮውዝ (logistic growth model) ይባላል።

🌳 Afaan Oromoo:
Baay'inni bineensotaa jalqaba saffisaan dabalee erga 'carrying capacity' qaqqabeen booda tasgabbaa'uun gosa guddina 'logistic growth' jedhamuudha.`,
    hint: 'Growth slowing and leveling off at carrying capacity characterizes the logistic growth model.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2018-q25',
    subject: 'Biology',
    year: '2018 E.C.',
    topic: 'Animal Taxonomy: Diagnostic Characteristics of Arthropoda',
    questionText: '25. Grade 9 students identified an organism using dichotomous keys. The organism was poikilothermic, invertebrate and had six jointed legs. To which phylum would the students group this organism?',
    options: [
      'Arthropoda',
      'Mollusca',
      'Porifera',
      'Cnidaria'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Phylum Arthropoda is distinguished by an exoskeleton made of chitin, bilateral symmetry, a segmented body, and jointed appendages. An invertebrate possessing specifically six jointed walking legs belongs to the Class Insecta within the Phylum Arthropoda.

🇪🇹 አማርኛ (Amharic):
የጀርባ አጥንት የሌለው (invertebrate) እና ስድስት የተጣመሩ እግሮች (six jointed legs) ያሉት እንስሳ በአርተርፖዳ (Phylum Arthropoda - ክፍል Insecta) ስር ይመደባል።

🌳 Afaan Oromoo:
Uumamni lafee dugdaa hin qabnee fi miilawwan qoodamoo ja'a (6) qabu faayilamii 'Arthropoda' (Garee Ilbiisotaa) keessatti ramadama.`,
    hint: 'Organisms with jointed appendages and six legs belong to Phylum Arthropoda.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
