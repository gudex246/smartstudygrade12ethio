import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2016_EC_PART2: Question[] = [
  {
    id: 'bio-2016-q26',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Evolution: Lamarckism vs. Darwinism',
    questionText: '26. Which statement shows the correct comparison between the Lamarck\'s and Darwin\'s theory of evolution?',
    options: [
      'Darwin recognized the origin of species was through mutation while Lamarck believed it was through effect of the environment.',
      'Lamarck believed in the development of new traits due to variation while Darwin believed in their occurrence due to use and disuse of organs.',
      'Lamarck believed the gradual occurrence of changes while Darwin believed in the immediate change of species.',
      'Darwin claimed that variation is heritable while Lamarck considers variation as acquired traits.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Darwin\'s theory of natural selection relies on pre-existing, inheritable genetic variations within populations. In contrast, Lamarck\'s theory was based on the inheritance of acquired characteristics resulting from the use and disuse of organs during an organism\'s lifetime.

🇪🇹 አማርኛ (Amharic):
ዳርዊን በህዝቦች ውስጥ ያሉ ልዩነቶች በውርስ የሚተላለፉ (heritable) ናቸው ብሎ ሲያምን፤ ላማርክ ግን ፍጥረታት በህይወት ዘመናቸው ባካበቱት ልምድና የአካላት አጠቃቀም የሚያገኟቸውን ባህሪያት (acquired traits) ያስተላልፋሉ ብሎ ያምን ነበር።

🌳 Afaan Oromoo:
Daarwiin garaagarummaan sanyii dhalootaan kan daddarbu (heritable) dha jedhee yoo amanu, Laamaarki immoo amala jireenya keessatti argame (acquired traits) dhalootatti darba jedhee amane.`,
    hint: 'Darwin emphasized heritable genetic variations; Lamarck believed in the inheritance of acquired characteristics.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q27',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Microbiology: Bacterial Genetic Recombination & Conjugation',
    questionText: '27. Identify the correct mechanism of bacterial reproduction by conjugation.',
    options: [
      'The recipient bacteria use their pili to pull the donor bacteria during plasmid transfer.',
      'Mitotic spindles are produced to separate bacterial DNA into two equal pairs.',
      'Bacteria take up genetic materials of dead organisms and integrate into their DNA.',
      'A pair of bacteria come together and exchanges their plasmids.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Bacterial conjugation is a mechanism of horizontal gene transfer where two bacterial cells temporarily connect via a conjugation bridge (sex pilus) and transfer genetic material (such as plasmids) from donor to recipient.

🇪🇹 አማርኛ (Amharic):
ኮንጁጌሽን (Conjugation) ሁለት ባክቴሪያዎች በአካላዊ ግንኙነት (sex pilus) ተቀራርበው ፕላዝሚዶችን (plasmids) የሚለዋወጡበትና የዘረ-መል ውህደት የሚያካሂዱበት ሂደት ነው።

🌳 Afaan Oromoo:
'Conjugation' keessatti baakteeriyaan lama walitti dhufuun koonjugeeshinii uumuun 'plasmids' (DNA) wal-jijjiiru.`,
    hint: 'Conjugation involves physical contact between two bacterial cells to transfer plasmid DNA.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q28',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Fungi: Characteristics and Nutrition of Kingdom Fungi',
    questionText: '28. Which one of the following features is NOT the characteristic feature of fungi? They',
    options: [
      'reproduce asexually through spore production.',
      'have haploid nuclei and multinucleate hypha.',
      'are either autotrophic, parasitic or saprophytic.',
      'exhibit apical growth of networked hypha.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Fungi are strictly heterotrophic organisms (either saprophytic decomposers, parasites, or mutualists). Fungi lack chlorophyll and chloroplasts, and therefore NO fungi are autotrophic (photosynthetic).

🇪🇹 አማርኛ (Amharic):
ፈንገሶች (Fungi) ክሎሮፊል ስለሌላቸው በራሳቸው ምግብ ማዘጋጀት አይችሉም (ኦቶትሮፊክ ፈጽሞ ሊሆኑ አይችሉም)። ሳፕሮፋይቲክ ወይም ፓራሳይቲክ ሄትሮትሮፎች ናቸው።

🌳 Afaan Oromoo:
Fangasoonni 'chlorophyll' waan hin qabneef gonkumaa ofiin nyaata hin qopheessan ('autotrophic' miti). Isaan 'heterotrophs' (saprophytic ykn parasitic) qofaadha.`,
    hint: 'Fungi are strictly heterotrophic; no fungus can ever be autotrophic.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q29',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Virology: Characteristics & Obligate Intracellular Nature of Viruses',
    questionText: '29. What is the argument behind the need of appropriate host cell for viruses to replicate themselves? Because viruses',
    options: [
      'have cell surface antigen specific to a given cell type.',
      'are obligate saprophyte that can only replicate inside a cell.',
      'lack metabolic capacity to produce energy outside cells.',
      'lack of double strand DNA to duplicate themselves.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Viruses are non-cellular obligate intracellular parasites that lack metabolic enzymes, ribosomes, and ATP-generating machinery. They are metabolically inert outside a host and completely rely on host cell metabolic machinery to produce energy and synthesize viral proteins.

🇪🇹 አማርኛ (Amharic):
ቫይረሶች ከህያው አስተናጋጅ ህዋስ (host cell) ውጭ ራሳቸውን ችለው ሃይል የሚያመነጩበትና ሜታቦሊዝም የሚያካሂዱበት ኦርጋኔሎች ስለሌላቸው የግድ አስተናጋጅ ህዋስ ያስፈልጋቸዋል።

🌳 Afaan Oromoo:
Vaayirasoonni lubbiyyoo keessoo qofaatti baay\'atu, sababiin isaas lubbiyyoo kireessituu (host cell) ala anniisaa fi meetaaboolizimii gaggeessuu waan hin dandeenyeefi.`,
    hint: 'Viruses lack metabolic enzymes and ribosomes, requiring host machinery to generate energy and proteins.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q30',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Metabolism: Anabolism vs. Catabolism',
    questionText: '30. What is the basic difference between anabolism and catabolism?',
    options: [
      'Catabolism is condensation while anabolism is hydrolysis reaction.',
      'Anabolism is related to respiration while catabolism is to photosynthesis.',
      'Anabolism is energy absorbing while catabolism is energy releasing process.',
      'Catabolism is a constructive while anabolism is destructive reaction.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Anabolism: Biosynthetic, constructive metabolic reactions that synthesize complex molecules from simpler ones, requiring/absorbing energy (endergonic, e.g., photosynthesis, protein synthesis).
• Catabolism: Degradative, breakdown reactions that cleave complex molecules into simpler ones, releasing energy (exergonic, e.g., cellular respiration).

🇪🇹 አማርኛ (Amharic):
አናቦሊዝም (Anabolism) ቀላል ሞለኪውሎችን ወደ ትላልቅ ሞለኪውሎች ለመገንባት ሃይል የሚወስድ (energy absorbing) ሲሆን፤ ካታቦሊዝም (Catabolism) ደግሞ ውስብስብ ሞለኪውሎችን በመሰባበር ሃይል የሚለቅ (energy releasing) ሂደት ነው።

🌳 Afaan Oromoo:
'Anabolism' anniisaa fudhachuun molakiyuulota gurguddoo ijaara (energy absorbing), 'catabolism' immoo caccabsuun anniisaa baasa (energy releasing).`,
    hint: 'Anabolism builds molecules (absorbs energy); catabolism breaks molecules (releases energy).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q31',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Human Biology & Integumentary System: Functions of the Dermis',
    questionText: '31. What is the main function of the dermis of the skin?',
    options: [
      'Prevention of the entry of pathogens',
      'Production of skin pigments',
      'Synthesis of hair and nail proteins',
      'Temperature regulation in homeostasis'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The dermis contains blood capillaries (which undergo vasodilation/vasoconstriction), sweat glands (for evaporative cooling), and arrector pili muscles, making it essential for thermoregulation and temperature homeostasis. Pathogen barrier and pigmentation (melanocytes) are primarily epidermal.

🇪🇹 አማርኛ (Amharic):
የቆዳው ደርሚስ (Dermis) ክፍል የደም ቧንቧዎችንና ላብ አመንጪ እጢዎችን በመያዝ የሰውነትን የሙቀት መጠን በመቆጣጠር (Temperature regulation in homeostasis) ቁልፍ ሚና ይጫወታል።

🌳 Afaan Oromoo:
Kutaan 'dermis' gogaa ujummoolee dhiigaa fi xannachoota dafqaa qabachuun ho\'a qaamaa to\'achuu (thermoregulation) keessatti shoora guddaa qaba.`,
    hint: 'The dermis houses sweat glands and cutaneous blood vessels that regulate body temperature.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q32',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Human Biology: Structure of the Human Eye',
    questionText: '32. In the anatomical diagram of the eye structure, the letter "Y" represents which part of the eye that adjusts the shape of the lens?',
    options: [
      'iris.',
      'ciliary muscle.',
      'optic nerve.',
      'pupil.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In the cross-sectional diagram of the eye, "Y" points to the ciliary body/ciliary muscle, which contracts or relaxes to alter the tension on suspensory ligaments and change the curvature of the crystalline lens for accommodation.

🇪🇹 አማርኛ (Amharic):
በአይን ስዕላዊ መግለጫ ላይ "Y" የተወከለው ክፍል የሲሊያሪ ጡንቻ (Ciliary muscle) ሲሆን የሌንሱን ውፍረትና ቅርጽ በማስተካከል እይታን ያጠራል።

🌳 Afaan Oromoo:
Fakkii ijaa irratti qubeen "Y" 'ciliary muscle' kan agarsiisu yoo ta\'u, bifa fi dhedheerina 'lens' sirreessuun iji akka ifatti argu godha.`,
    hint: 'The ciliary muscle controls accommodation by changing the focal length of the lens.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q33',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Nervous System & Sensory Organs: Balance and Equilibrium (Semicircular Canals)',
    questionText: '33. A man observed elementary school students spinning around, and realized that none of them could properly walk upright after sudden interruption of the spinning. Which one of the following is the correct reason for this condition?',
    options: [
      'The sensory cells were unable to detect stimulus after the spinning was quitted.',
      'The fluid in the semi secular canal stopped immediately when the body stopped spinning.',
      'The fluid in the semicircular canal kept moving after the spinning was interrupted.',
      'The nerve impulse was transmitted after the spinning was stopped.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Dynamic balance is detected by the endolymph fluid within the three semicircular canals of the inner ear. When spinning abruptly stops, the inertia of the endolymph causes it to keep swirling, continuing to bend the cupula and hair cells, which sends conflicting balance signals to the brain and causes dizziness.

🇪🇹 አማርኛ (Amharic):
አንድ ሰው ዞሮ ዞሮ ድንገት ሲቆም ሚዛኑን የሚስተው በውስጠኛው ጆሮ ውስጥ ባሉ ሴሚሰርኩላር ካናሎች (semicircular canals) ውስጥ ያለው ፈሳሽ ሰውነቱ ከቆመ በኋላም በእንቅስቃሴ መቀጠሉ የአንጎልን ሚዛን ስለሚያዛባ ነው።

🌳 Afaan Oromoo:
Yeroo naanna\'anii dhaabbatan, dhangala\'aan 'semicircular canals' gurra keessaa jiru waan socho\'aa turuuf ergaa sobaa gara sammuutti ergee madaallii dhabsiisa.`,
    hint: 'Endolymph fluid in the semicircular canals keeps moving due to inertia even after body rotation stops.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q34',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Endocrine System: Nature and Functions of Hormones',
    questionText: '34. Which of the following is the correct description of hormones? They are chemical messengers that',
    options: [
      'regulates many physiological process.',
      'transmit message faster than the nerve system.',
      'targets only the site of secretion.',
      'are produced in glands that contain ducts.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Hormones are chemical signaling molecules produced by ductless endocrine glands and secreted into the bloodstream, where they travel to target tissues to regulate diverse physiological, metabolic, and developmental processes throughout the body.

🇪🇹 አማርኛ (Amharic):
ሆርሞኖች (Hormones) በደም ዝውውር አማካኝነት ወደ ተለያዩ የሰውነት ክፍሎች በመጓዝ በርካታ የፊዚዮሎጂ ሂደቶችን (physiological processes) የሚቆጣጠሩ የኬሚካል መልእክተኞች ናቸው።

🌳 Afaan Oromoo:
Hoormoononni ergaa-dabarsitoota keemikaalaa xannachoota dhangala\'aa keessoo irraa madduun dhiigaan deemuun adeemsa fiiziyooloojii qaamaa hedduu to\'ataniidha.`,
    hint: 'Hormones are chemical messengers transported in blood that regulate various physiological processes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q35',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Homeostasis: Principles and Physiological Regulation',
    questionText: '35. Homeostasis is a mechanism of',
    options: [
      'adjusting the environment relative to body condition.',
      'keeping internal body environment constant.',
      'keeping external environment stable.',
      'protecting the body from pathogens.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Homeostasis is the biological process and mechanism through which an organism maintains a dynamic, relatively constant internal environment (e.g., body temperature, blood glucose, water-electrolyte balance) despite external environmental changes.

🇪🇹 አማርኛ (Amharic):
ሆሚዮስታሲስ (Homeostasis) ማለት የውጭው አካባቢ ቢለዋወጥም የሰውነትን ውስጣዊ ሁኔታ ቋሚና የተረጋጋ (constant internal environment) አድርጎ የመጠበቅ ሂደት ነው።

🌳 Afaan Oromoo:
'Homeostasis' jechuun haalli naannoo yoo jijjiiramellee haala keessoo qaamaa dhaabbataa (constant internal environment) taasisuun eeguudha.`,
    hint: 'Homeostasis maintains a stable, constant internal environment.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q36',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Evolution: Molecular and Genetic Evidence of Evolution',
    questionText: '36. Which of the following is true concerning the evidences of evolution?',
    options: [
      'Organisms which live in the same area have similar evolutionary history.',
      'Organisms which have little genetic relationship show similar behavior.',
      'Species that are closely related share the most similar DNA sequences.',
      'Species that live in the same geographic area have the same genetic makeup.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Molecular genetic evidence shows that species sharing a recent common ancestor share a high degree of nucleotide sequence identity in their DNA and amino acid sequence similarity in their proteins.

🇪🇹 አማርኛ (Amharic):
የዝግመተ-ለውጥ ማስረጃዎች እንደሚያረጋግጡት በቅርብ የተዛመዱ ዝርያዎች (closely related species) በጣም ተመሳሳይ የሆነ የዲኤንኤ (DNA) ቅደም ተከተል ይጋራሉ።

🌳 Afaan Oromoo:
Ragaan jijjiirama sanyii (evolution) akka agarsiisutti, sanyiin walitti dhiheenya qaban walfakkeenya tartiiba DNA olaanaa qabu.`,
    hint: 'Closely related species share greater DNA and protein sequence homology.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q37',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Evolution: Modes of Natural Selection (Disruptive Selection)',
    questionText: '37. In a fox population, foxes with thicker fur survived better in cold climate compared to those with thinner fur, however, foxes with thinner fur survived better when the climate was very hot. What type of natural selection is described in this scenario?',
    options: [
      'Stabilizing selection',
      'Diversifying selection',
      'Disruptive selection',
      'Directional selection'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Disruptive selection (or diversifying selection) occurs when environmental conditions favor individuals at both phenotypic extremes (e.g., thick fur in severe cold and thin fur in extreme heat) over individuals with intermediate phenotypes.

🇪🇹 አማርኛ (Amharic):
ይህ ሁኔታ ዲስራፕቲቭ የተፈጥሮ ምርጫ (Disruptive selection) ይባላል፤ ምክንያቱም ሁለቱም ጽንፈኛ የሆኑ ባህሪያት (በብርድ ወቅት ወፍራም ፀጉር፣ በሙቀት ወቅት ደግሞ ቀጭን ፀጉር) ተጠቃሚ ይሆናሉ።

🌳 Afaan Oromoo:
Gosti filannoo uumamaa kun 'Disruptive selection' jedhama, sababiin isaas amalloota fiixee lamaan jiran (rifeensa yabbuu qabbanaaf, qalloo ho\'aaf) fayyada waan ta\'eef.`,
    hint: 'Disruptive selection favors both extremes over the intermediate phenotype.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q38',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Genetics: Gene Mutations & Sickle-Cell Anemia',
    questionText: '38. The type of gene mutation that results in the change of a triplet (GAG) in a normal hemoglobin to another triplet (GTG) in sickle-cell hemoglobin is',
    options: [
      'insertion mutation.',
      'deletion mutation.',
      'substitution mutation.',
      'non-disjunction.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Sickle-cell anemia is caused by a base-pair substitution point mutation in the beta-globin gene, where a single adenine (A) is replaced by thymine (T) (changing GAG to GTG, resulting in valine instead of glutamic acid at position 6).

🇪🇹 አማርኛ (Amharic):
በሲክል ሴል አኒሚያ (Sickle-cell anemia) ውስጥ አንድ ነጠላ ቤዝ (A) በሌላ ቤዝ (T) ስለሚተካ (GAG ወደ GTG) ይህ የሰብስቲትዩሽን ሚውቴሽን (Substitution mutation) ይባላል።

🌳 Afaan Oromoo:
Dhukkuba 'sickle-cell anemia' keessatti 'triplet' GAG gara GTG jijjiiramuun 'substitution mutation' (bakka-bu\'iinsa) jedhama.`,
    hint: 'Replacing one nucleotide base with another is a substitution mutation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q39',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Evolution: Human Evolution & Cranial Capacity',
    questionText: '39. In human evolution brain size increased over the courses of evolution. Which alternative contains hominids arranged in an increasing order of brain size?',
    options: [
      'Homo erectus -> Homo habilis -> Homo neandertalensis -> Homo sapiens',
      'Homo neandertalensis -> Homo erectus -> Homo habilis -> Homo sapiens',
      'Homo erectus -> Homo neandertalensis -> Homo habilis -> Homo sapiens',
      'Homo habilis -> Homo erectus -> Homo neandertalensis -> Homo sapiens'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Approximate cranial capacities in hominid evolutionary progression:
• Homo habilis: ~600–700 cm³
• Homo erectus: ~900–1100 cm³
• Homo neanderthalensis: ~1400–1600 cm³
• Homo sapiens: ~1350–1400 cm³ (in typical high-school curricula arranged chronologically/by complexity as H. habilis -> H. erectus -> H. neanderthalensis -> H. sapiens).

🇪🇹 አማርኛ (Amharic):
የቅድመ አያቶቻችን የአንጎል መጠን በዝግመተ-ለውጥ ሂደት ከትንሽ ወደ ትልቅ ሲደረደር፡ Homo habilis -> Homo erectus -> Homo neandertalensis -> Homo sapiens ይሆናል።

🌳 Afaan Oromoo:
Gudddina sammuu nama durii xiqqaarraa gara guddaatti: Homo habilis -> Homo erectus -> Homo neandertalensis -> Homo sapiens ta\'a.`,
    hint: 'Evolutionary order from smallest to largest cranial volume: H. habilis -> H. erectus -> H. neanderthalensis -> H. sapiens.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q40',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Evolution: Mechanisms of Evolution (Genetic Drift)',
    questionText: '40. Which one of the following statements correctly explains the genetic drift? It is a change in allele frequency due to',
    options: [
      'non-random mating of individuals in a population.',
      'independent assortment of chromosomes.',
      'chance based sampling error.',
      'relocation of species into other areas.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Genetic drift is the change in allele frequencies in a population from generation to generation that occurs entirely as a result of random chance events or sampling error, which has the greatest impact in small populations.

🇪🇹 አማርኛ (Amharic):
ጄኔቲክ ድሪፍት (Genetic drift) ማለት በአጋጣሚ እና በእድል (chance-based sampling error) ምክንያት በህዝብ ውስጥ የዘረ-መል ድግግሞሽ (allele frequency) መለዋወጥ ነው።

🌳 Afaan Oromoo:
'Genetic drift' jechuun sababa tasaatiin (carraadhaan / sampling error) baay\'ina fi daddarba jiinii jijjiiramuudha.`,
    hint: 'Genetic drift represents random, chance-based fluctuations in allele frequency.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q41',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Photosynthesis: Calvin Cycle (Light-Independent Reactions)',
    questionText: '41. Which one among the following processes occurs during the light independent phase of photosynthesis?',
    options: [
      'Excitation of electrons from chlorophyll molecules',
      'Cyclic photophosphorylation of ADP in the thylakoid',
      'Splitting of water molecules into its components',
      'Reduction of triose molecules by hydrogen from NADPH'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
During the light-independent phase (Calvin cycle) occurring in the chloroplast stroma, 3-phosphoglycerate molecules are phosphorylated by ATP and reduced by NADPH (transferring electrons and hydrogen) into glyceraldehyde-3-phosphate (triose phosphate). The other three choices occur in the light-dependent reactions.

🇪🇹 አማርኛ (Amharic):
ብርሃን በማያስፈልገው የፎቶሲንተሲስ ክፍል (Light-independent phase / Calvin cycle) ትራይኦስ ሞለኪውሎች ከ NADPH በሚገኝ ሃይድሮጅን አማካኝነት ሪዲውስ ይደረጋሉ (Reduction of triose molecules)።

🌳 Afaan Oromoo:
Sadarkaa ifa hin barbaanne (Calvin cycle) keessatti molakiyuulonni 'triose' haayidiroojiinii NADPH irraa argamuun ni xiqqaatu (reduction).`,
    hint: 'Reduction of triose phosphates by NADPH occurs in the stroma during the Calvin cycle.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q42',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Photosynthesis: Cyclic vs. Non-Cyclic Photophosphorylation',
    questionText: '42. As compared to non-cyclic photophosphorylation, the cyclic photophosphorylation uses the',
    options: [
      'photosystem I to produce ATP and reduced NADP in the stroma.',
      'photosystem I as the last electron acceptor.',
      'hydrolysis of water to replace electrons lost from photosystem II.',
      'photosystem II as the first electron donor to NADP.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In cyclic photophosphorylation, only Photosystem I (PS I) is involved. Excited electrons from PS I are passed through an electron transport chain and cycled back to PS I (making PS I both the electron donor and the final electron acceptor), synthesizing ATP without generating NADPH or photolyzing water.

🇪🇹 አማርኛ (Amharic):
በሳይክሊክ ፎቶፎስፎራይሌሽን ውስጥ ፎቶሲስተም I (Photosystem I) ብቻ የሚሳተፍ ሲሆን ኤሌክትሮኖች ተዘዋውረው ተመልሰው ወደ PS I ስለሚገቡ PS I የመጨረሻው ኤሌክትሮን ተቀባይ (last electron acceptor) ይሆናል።

🌳 Afaan Oromoo:
'Cyclic photophosphorylation' keessatti 'photosystem I' (PS I) qofatu hojjeta, elektiroononnis gara isaatti waan deebi\'aniif inni elektiroonii fudhataa dhumaa ta\'a.`,
    hint: 'In cyclic photophosphorylation, electrons cycle back to Photosystem I as the final acceptor.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q43',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Photosynthesis: Overall Chemical Equation & Energy Transformation',
    questionText: '43. Which one of the following chemical reactions summarizes the process of photosynthesis?',
    options: [
      '6CO2 + 6H2O -> C6H12O6 + 6O2 + ATP',
      'C6H12O6 + 6O2 -> 6CO2 + 12O2 + 12H2O',
      'C6H12O6 + 6O2 -> 6CO2 + 6H2O + ATP',
      '6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The complete biochemical stoichiometric equation for oxygenic photosynthesis uses 6 molecules of CO2 and 12 molecules of H2O to produce 1 glucose molecule (C6H12O6), 6 oxygen molecules (O2), and 6 regenerated water molecules (H2O):
6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O.

🇪🇹 አማርኛ (Amharic):
የፎቶሲንተሲስ ትክክለኛ ኬሚካላዊ ቀመር፡ 6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O ነው።

🌳 Afaan Oromoo:
Wal-nyaatinsi keemikaalaa footoosinteesisii guutuu ta\'e: 6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O dha.`,
    hint: 'Photosynthesis uses 6 CO2 and 12 H2O to synthesize 1 glucose, 6 O2, and 6 H2O.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q44',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Biochemistry: Structure and Energetics of ATP',
    questionText: '44. Which one of the following statements properly describes the structure of ATP? It is made up of',
    options: [
      'two adenine bases attached to a hexose sugar and three phosphate groups.',
      'one adenine base attached to a pentose sugar and three phosphate groups.',
      'two adenine bases attached to a deoxyribose sugar and two phosphate groups.',
      'one adenine base attached to a ribose sugar and two phosphate groups.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Adenosine Triphosphate (ATP) is composed of:
1. One purine nitrogenous base (Adenine)
2. One 5-carbon pentose sugar (Ribose)
3. Three inorganic phosphate groups linked by high-energy phosphoanhydride bonds.

🇪🇹 አማርኛ (Amharic):
ATP ከአንድ የአዴኒን ቤዝ (adenine)፣ ከአንድ ባለ 5-ካርቦን ፔንቶስ ስኳር (pentose/ribose sugar) እና ከሶስት የፎስፌት ግሩፖች (three phosphate groups) የተገነባ ነው።

🌳 Afaan Oromoo:
ATP'n 'adenine base' tokko, sukkaara peentoosii (ribose) tokko fi 'phosphate groups' sadii irraa ijaarame.`,
    hint: 'ATP = 1 Adenine + 1 Pentose (Ribose) + 3 Phosphate groups.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q45',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Cellular Respiration: Glycolytic Pathway',
    questionText: '45. Which one of the following descriptions about glycolysis is correct? It is a process',
    options: [
      'that produces a net of 4 ATP through substrate level phosphorylation.',
      'of producing acetyl CoA from pyruvate by releasing CO2.',
      'of breaking down of a glucose molecule to two pyruvates.',
      'that takes place in the cytosol with high demand of oxygen.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Glycolysis is the initial cytoplasmic metabolic pathway of cellular respiration that cleaves one 6-carbon glucose molecule into two 3-carbon pyruvate molecules (producing a net gain of 2 ATP and 2 NADH), operating independently of oxygen.

🇪🇹 አማርኛ (Amharic):
ግላይኮላይሲስ (Glycolysis) በሳይቶፕላዝም ውስጥ አንድ ባለ 6-ካርቦን የግሉኮስ ሞለኪውል ወደ ሁለት ባለ 3-ካርቦን ፓይሩቬት የሚሰባበርበት ሂደት ነው።

🌳 Afaan Oromoo:
'Glycolysis' jechuun adeemsa molakiyuulii gulukoosii tokko gara molakiyuulota 'pyruvate' lamaatti caccabsuudha.`,
    hint: 'Glycolysis splits 1 glucose (6C) into 2 pyruvates (3C).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q46',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Excretory System: Nephron Structure & Ultrafiltration',
    questionText: '46. Which one of the following is the main function of Bowman\'s capsule of the human kidneys?',
    options: [
      'Prevent back flow of urine',
      'Mineral reabsorption',
      'Ultrafiltration of blood',
      'Water preservation'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Bowman\'s capsule encloses the glomerulus in the renal cortex. High hydrostatic capillary pressure forces water, urea, ions, and small solutes across the glomerular filtration membrane into Bowman\'s space—a process termed ultrafiltration.

🇪🇹 አማርኛ (Amharic):
በኩላሊት ውስጥ የቦውማንስ ካፕሱል (Bowman\'s capsule) ዋና ስራው ደምን በከፍተኛ ግፊት በማጣራት (Ultrafiltration of blood) የመጀመሪያውን ሽንት (filtrate) ማመንጨት ነው።

🌳 Afaan Oromoo:
Hojiin guddaan 'Bowman\'s capsule' dhiiga dhiibbaa guddaan calaluu (Ultrafiltration of blood) dha.`,
    hint: 'Bowman\'s capsule is the primary site of blood ultrafiltration in the nephron.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q47',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Thermoregulation: Evaporative Cooling and Humidity',
    questionText: '47. What is the justification for feeling warm while sweating a lot in a very humid condition?',
    options: [
      'Closure of the glands in the epidermal layer of the skin',
      'The lower rate of evaporation of water from the skin surfaces',
      'An increase in metabolic rate as temperature increases',
      'Unequal distribution of ions on membrane of cells'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Sweat cools the body exclusively when it evaporates, taking away latent heat of vaporization. In humid air, high atmospheric moisture decreases the water vapor gradient between the skin and air, sharply reducing the rate of evaporation and preventing cooling.

🇪🇹 አማርኛ (Amharic):
እርጥበታማ (humid) በሆነ አየር ውስጥ ላብ ቢወጣንም የሚሞቀንበት ምክንያት አየሩ አስቀድሞ በውሃ ትነት የተሞላ በመሆኑ ላቡ ከቆዳችን ላይ የመተንነቱ ፍጥነት ዝቅተኛ (lower rate of evaporation) ስለሚሆን ነው።

🌳 Afaan Oromoo:
Qilleensa jiidha qabu (humid) keessatti dafqaan kan ho\'inuuf, saffisni dhangala\'aan dafqaa gogaarraa hurkuu gadi aanaa (lower rate of evaporation) waan ta\'eefi.`,
    hint: 'High humidity reduces sweat evaporation, preventing evaporative cooling.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q48',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Ecology & Environmental Science: Climate Change Concepts',
    questionText: '48. Among the following statements, one briefly describes the concept of climate change. It is the',
    options: [
      'radical change of local weather condition that sustain for less than a year.',
      'sudden change in an average rainfall of a limited area.',
      'gradual change of atmospheric temperature over a short period of time.',
      'global change in the temperature, precipitation and wind conditions.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Climate change refers to long-term, significant alterations in global climate patterns, encompassing shifts in global average temperatures, rainfall/precipitation patterns, and atmospheric wind systems over decades or centuries.

🇪🇹 አማርኛ (Amharic):
የአየር ንብረት ለውጥ (Climate change) ማለት በአለም አቀፍ ደረጃ በሙቀት መጠን፣ በዝናብ ስርጭት እና በነፋስ ሁኔታዎች ላይ የሚከሰት ዘላቂ አለም አቀፋዊ ለውጥ ነው።

🌳 Afaan Oromoo:
Jijjiiramni qilleensaa (Climate change) jechuun sadarkaa addunyaatti ho\'a, bokkaa fi haala qilleensaarratti jijjiirama yeroo dheeraa uumamuudha.`,
    hint: 'Climate change represents long-term global shifts in temperature, precipitation, and atmospheric conditions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q49',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Ecology & Environmental Biology: Greenhouse Effect & Global Warming',
    questionText: '49. As a result of human activities, huge amount of carbon dioxide has been accumulated in the atmosphere. What is the consequence of this phenomenon?',
    options: [
      'Increased rate of uptake of carbon dioxide by green plants',
      'Drop in temperature of the earth and death of aquatic organisms',
      'Preventing certain amount of heat escaping back to the space',
      'Reduction in the sea level and death of aquatic animals'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Accumulation of anthropogenic carbon dioxide (a greenhouse gas) enhances the greenhouse effect by absorbing outgoing terrestrial infrared radiation and preventing heat from escaping back into space, driving global warming.

🇪🇹 አማርኛ (Amharic):
በከባቢ አየር ውስጥ የካርቦን ዳይኦክሳይድ ክምችት መጨመር ሙቀት ወደ ጠፈር እንዳይመለስ አግዶ በመያዝ (Preventing heat escaping to space) የአለም ሙቀት እንዲጨምር ያደርጋል።

🌳 Afaan Oromoo:
Kuusamuun CO2 ho\'i lafarraa gara samii (space) akka hin deebine ittisuun lafti akka ho\'itu (global warming) godha.`,
    hint: 'Greenhouse gases like CO2 absorb infrared radiation, preventing heat from escaping into outer space.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2016-q50',
    subject: 'Biology',
    year: '2016 E.C.',
    topic: 'Environmental Science: International Environmental Treaties (UNFCCC)',
    questionText: '50. What was the main objective of the United Nations Framework Convention on Climate Change (UNFCCC)?',
    options: [
      'Prevention of dangerous man-made interference with the climate system',
      'Reduction of the monopole utilization of border crossing rivers to prevent climate change',
      'Donation of high carbon projects related to climate change by the developed countries',
      'Prohibition of developing countries from setting up big industries that could affect the climate'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Article 2 of the UNFCCC defines its primary objective: "to achieve stabilization of greenhouse gas concentrations in the atmosphere at a level that would prevent dangerous anthropogenic (man-made) interference with the climate system."

🇪🇹 አማርኛ (Amharic):
የተባበሩት መንግስታት የአየር ንብረት ስምምነት (UNFCCC) ዋና አላማ በሰው ሰራሽ ተግባራት ምክንያት በአየር ንብረት ስርዓት ላይ የሚደርሰውን አደገኛ ጣልቃ ገብነት መከላከል (Prevention of dangerous man-made interference) ነው።

🌳 Afaan Oromoo:
Kaayyoon guddaan 'UNFCCC' dhiibbaa fi balaa gochi namaa sirna qilleensaarraan geessisu ittisuudha.`,
    hint: 'UNFCCC aims to prevent dangerous anthropogenic interference with the Earth\'s climate system.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
