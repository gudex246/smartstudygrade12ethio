import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2014_EC_PART2: Question[] = [
  {
    id: 'bio-2014-q26',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Plant Physiology: Plant Hormones & Seed Dispersal',
    questionText: '26. Which one of the following may NOT be regulated by a plant hormone?',
    options: [
      'Seed dispersal (carried by wind, animals, or water)',
      'Cell division (Cytokinins)',
      'Cell elongation (Auxins and Gibberellins)',
      'Fruit ripening (Ethylene)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Plant hormones (phytohormones) chemically regulate internal physiological and developmental events such as cell division (cytokinins), stem elongation (auxins/gibberellins), and fruit ripening (ethylene). In contrast, seed dispersal is a physical/mechanical process driven by external agents such as wind, water, gravity, animals, or explosive pod tension.

🇪🇹 አማርኛ (Amharic):
የዘር መበተን (Seed dispersal) በውጫዊ ኃይሎች (ንፋስ፣ ውሃ፣ እንስሳት) የሚከናወን እንጂ በእጽዋት ሆርሞን በቀጥታ የሚቆጣጠር የፊዚዮሎጂ ሂደት አይደለም። የሴል ክፍፍል፣ ማራዘም እና የፍራፍሬ መብሰል ግን በሆርሞኖች ይቆጣጠራሉ።

🌳 Afaan Oromoo:
Facaatiin sanyii (seed dispersal) qilleensa, bishaan ykn bineensotaan kan raawwatu malee hoormoonii biqiltootaatiin hin to'atamu.`,
    hint: 'Dispersal relies on physical or animal transport, not internal phytohormones.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q27',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Plant Physiology: Apical Dominance & Auxin Inhibition',
    questionText: '27. Bushing of a plant results from',
    options: [
      'cancellation of the positive effect of apical dominance.',
      'removal of the inhibitory effect of auxin (pruning apical shoot).',
      'decreased production of auxin by side shoots.',
      'increased production of auxin by the main shoot.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Apical dominance occurs when high concentrations of auxin synthesized in the terminal apical bud travel downward and inhibit the growth of lateral axillary buds. When the apical shoot tip is cut off (pruned), this auxin-mediated inhibition is removed, allowing lateral buds to develop into dense side branches, producing a bushy plant.

🇪🇹 አማርኛ (Amharic):
ተክሎች ወደ ጎን ቅርንጫፍ አውጥተው እንዲደነድኑ (bushing) የሚደረገው የላይኛው ቡቃያ ሲቆረጥ የኦክሲን ሆርሞን የጎን ቡቃያዎችን የማፈን ተፅዕኖ ስለሚወገድ (removal of inhibitory effect of auxin) ነው።

🌳 Afaan Oromoo:
Biqiltoonni damee hedduu akka baasan kan godhu, gubbee isaanii kuffisuun dhiibbaa hoormooniin ooksinii dameewwan cinaa irratti qabu hambisuudhaani (removal of inhibitory effect of auxin).`,
    hint: 'Pruning the top removes apical auxin, lifting inhibition on lateral buds.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q28',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Conservation Biology: Strategies of Biodiversity Conservation',
    questionText: '28. Actions such as protection of individual species, reduction of pollution, and reduction of deforestation can collectively be taken as methods of',
    options: [
      'agricultural expansion.',
      'biodiversity conservation.',
      'fighting global warming.',
      'fighting soil erosion.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Biodiversity conservation is the comprehensive practice of protecting, maintaining, and restoring biological diversity at the genetic, species, and ecosystem levels through species legal protection, habitat preservation, pollution control, and preventing deforestation.

🇪🇹 አማርኛ (Amharic):
ዝርያዎችን መጠበቅ፣ ብክለትን መቀነስ እና የደን ጭፍጨፋን መግታት በአንድ ላይ የስነ-ህይወት ብዝሃነት ጥበቃ (Biodiversity conservation) ዘዴዎች ናቸው።

🌳 Afaan Oromoo:
Ittisi lubbu-qabeeyyii, xurii hir'isuu fi manca'iinsa bosonaa ittisuun waliigalatti toftaa eegumsa baayoodaayivarsitii (biodiversity conservation) ti.`,
    hint: 'Protecting living species and their natural habitats constitutes biodiversity conservation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q29',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Flora of Ethiopia: Endemic and Introduced Plant Species',
    questionText: '29. Which one of the following plants is NOT endemic to Ethiopia?',
    options: [
      'Mango (Mangifera indica)',
      'Zigba (Afrocarpus falcatus)',
      'Noug (Guizotia abyssinica)',
      'Enset (Ensete ventricosum)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Mango (Mangifera indica) originated in South Asia (India and Myanmar) and was introduced to tropical regions worldwide. Enset (false banana), Noug (niger seed), and Zigba are indigenous/endemic or culturally centered crops deeply native to the Ethiopian highlands.

🇪🇹 አማርኛ (Amharic):
ማንጎ (Mango) መነሻው ደቡብ እስያ ሲሆን ወደ ኢትዮጵያ ከውጭ የገባ ተክል ነው። እንሰት፣ ኑግ እና ዝግባ ግን የኢትዮጵያ ሀገር በቀል/ኤንደሚክ እፅዋት ናቸው።

🌳 Afaan Oromoo:
Maanjoon biqiltuu biyya alaa irraa dhufe malee Itoophiyaa keessatti kan uumame (endemic) miti. Qochon, Nuugiin fi Zigbaan biqiltoota dhalootaan Itoophiyaa keessa jiraniidha.`,
    hint: 'Mango is native to tropical Asia and introduced to East Africa.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q30',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Ethiopian Protected Areas: Mago National Park Fauna',
    questionText: '30. Which one of the following national parks is characterized by the presence of wildlife such as elephant, lion, cheetah and giraffe?',
    options: [
      'Bale mountains national park',
      'Awash national park',
      'Mago national park',
      'Simien mountains national park'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Mago National Park, located in the lower Omo Valley of southwestern Ethiopia, features savanna grasslands and riverine acacia woodlands that host large classic African savanna game including African elephants, lions, cheetahs, giraffes, and Cape buffaloes.

🇪🇹 አማርኛ (Amharic):
በደቡባዊ ኢትዮጵያ የሚገኘው የማጎ ብሔራዊ ፓርክ (Mago National Park) እንደ ዝሆን፣ አንበሳ፣ አቦሸማኔ እና ቀጭኔ ያሉ የዱር እንስሳት የሚገኙበት ፓርክ ነው።

🌳 Afaan Oromoo:
Paarkiin Biyyooleessaa Maagoo (Mago National Park) bineensota akka arba, leenca, qeerransa fi satawwaa qabaachuun beekama.`,
    hint: 'Mago National Park in the South Omo basin is famous for large savanna wildlife.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q31',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Animal Kingdom: Phylum Coelenterata (Cnidaria) & Cnidocytes',
    questionText: '31. In kingdom animalia, which phylum poisons its prey by tentacles that contain stinging cells?',
    options: [
      'Nematoda',
      'Coelenterata (Cnidaria)',
      'Annelida',
      'Porifera'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Phylum Coelenterata (also called Cnidaria, including jellyfish, Hydra, sea anemones, and corals) is characterized by tentacles surrounding the mouth that bear specialized stinging cells (cnidocytes/nematocysts) used to inject paralyzing toxins into prey.

🇪🇹 አማርኛ (Amharic):
በእንስሳት ስርአት ውስጥ የሚያቃጥሉ/የሚናደፉ ህዋሳትን (stinging cells / nematocysts) የያዙ እጆችን (tentacles) በመጠቀም አደን የሚያደነዝዘው ፋይለም ኮለንተሬታ ወይም ናይዳሪያ (Coelenterata / Cnidaria) ነው።

🌳 Afaan Oromoo:
Faayilamiin Kooleentereetaa (Cnidaria) seelota summii qaban (stinging cells) fayyadamuun bineensota adamsu.`,
    hint: 'Jellyfish and sea anemones belong to Coelenterata and possess stinging cnidocytes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q32',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Plant Kingdom: Division Bryophyta Characteristics',
    questionText: '32. Mosses are grouped under division Bryophyta because they',
    options: [
      'lack true root system and vascular tissue (non-vascular).',
      'have true leaves, stems and roots.',
      'have flat and broad leaves.',
      'are evergreen and photosynthesize all year round.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Bryophytes (mosses, liverworts, hornworts) are non-vascular land plants that lack specialized conducting tissues (xylem and phloem) and true roots, stems, or leaves, absorbing moisture directly across their thin body surfaces and anchoring by filamentous rhizoids.

🇪🇹 አማርኛ (Amharic):
ሞሶች (Mosses) በብራዮፋይታ (Bryophyta) ክፍል የሚመደቡበት ምክንያት እውነተኛ ሥር እና የውሃ/ምግብ ማስተላለፊያ የደም ስር መሰል ቲሹዎች (vascular tissue - xylem and phloem) ስለሌላቸው ነው።

🌳 Afaan Oromoo:
Mosiin kutaa Biraayoofaayitaa (Bryophyta) keessatti kan ramadamuuf hidda dhugaa fi tishuu geejjibaa (vascular tissue) waan hin qabneefi.`,
    hint: 'Bryophytes are non-vascular plants lacking xylem, phloem, and true roots.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q33',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Ecology: Ecological Pyramids & Trophic Hierarchy',
    questionText: '33. If you are asked to draw a pyramid of biomass of an aquatic habitat that contains zooplanktons, herrings, sea lions and phytoplankton, which organisms should be placed at the top of the pyramid?',
    options: [
      'Phytoplankton',
      'Zooplanktons',
      'Herrings',
      'Sea lions'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In this aquatic marine food chain:
Phytoplankton (primary producers) → Zooplankton (primary consumers) → Herrings (secondary consumers) → Sea lions (tertiary/apex consumers).
The top apex trophic level of the biomass pyramid is occupied by Sea lions.

🇪🇹 አማርኛ (Amharic):
በዚህ የውሃ ስነ-ምህዳር ውስጥ የፒራሚዱ አናት ላይ የሚቀመጠው ከፍተኛው አዳኝ የባህር አንበሳ (Sea lions) ነው።

🌳 Afaan Oromoo:
Piraamidii baayoomaasii kana keessatti sadarkaa olaanaa (apex predator) irratti kan argamu Leenca Galaanaa (Sea lions) dha.`,
    hint: 'Apex predators sit at the topmost level of trophic pyramids.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q34',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Plant Adaptations: Xerophytic Adaptations to Reduce Transpiration',
    questionText: '34. Which one of the following is an adaptation to reduce water loss in plants?',
    options: [
      'Having a single layered epidermis in leaves',
      'Having thin broad leaves',
      'Having large and wide stomata',
      'Having leaves covered with waxy cuticle'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
A thick hydrophobic, waxy cuticle layer over the epidermal surface of plant leaves acts as an impermeable physical barrier to water evaporation, significantly minimizing cuticular transpiration in arid habitats.

🇪🇹 አማርኛ (Amharic):
ተክሎች የውሃ ብክነትን (transpiration) ለመቀነስ ከሚጠቀሟቸው ፊዚዮሎጂካዊ ማስተካከያዎች አንዱ ቅጠሎቻቸው በሰም መሰል ወፍራም ሽፋን (waxy cuticle) መሸፈናቸው ነው።

🌳 Afaan Oromoo:
Biqiltoonni dhangala'ina bishaanii hir'isuuf baallin isaanii qola dhabamaa (waxy cuticle) tiin uwwifama.`,
    hint: 'Waxy cuticles prevent cuticular water evaporation from leaves.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q35',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Ecology & Thermoregulation: Bergmann\'s Rule & Surface-to-Volume Ratio',
    questionText: '35. Why are arctic animals such as seals, walruses and whales large in body size? To',
    options: [
      'reduce heat loss (lower surface-area-to-volume ratio).',
      'move in the water bodies easily.',
      'capture their prey without challenges.',
      'increase their surface area.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
According to Bergmann\'s Rule, animals inhabiting cold polar climates evolve larger body sizes because a larger volume relative to surface area (smaller surface area to volume ratio, SA:V) minimizes the rate of thermal dissipation and heat loss to the freezing environment.

🇪🇹 አማርኛ (Amharic):
በአርክቲክ ቀዝቃዛ አካባቢ የሚኖሩ እንደ ዌል እና ሲል ያሉ እንስሳት ትልቅ የሰውነት መጠን ያላቸውበት ምክንያት ከሰውነታቸው የሚወጣውን የሙቀት ብክነት ለመቀነስ (to reduce heat loss) ነው።

🌳 Afaan Oromoo:
Bineensonni naannoo qabbanaawaa Arkiitikii keessa jiraatan dhabama ho'aa hir'isuuf (reduce heat loss) qaama guddaa qabaatu.`,
    hint: 'Large body volume minimizes relative surface area, reducing thermal heat loss.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q36',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Ethiopian Research Institutes: IBC Genetic Mandate',
    questionText: '36. The Institute of Biodiversity Conservation (IBC) is one of the biological research institutes of Ethiopia attempting to conserve the genetic resources of the country. As such, the institute\'s major research efforts focus on all of the following EXCEPT',
    options: [
      'microorganism conservation.',
      'animal conservation.',
      'soil conservation (abiotic physical management).',
      'plant conservation.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The Ethiopian Institute of Biodiversity Conservation (IBC) is mandated with the collection, ex-situ and in-situ conservation, and genetic research of biological germplasm (plant, animal, and microbial genetic diversity). Soil conservation is an abiotic physical land management discipline handled by agricultural and natural resource ministries.

🇪🇹 አማርኛ (Amharic):
የኢትዮጵያ የብዝሃ ህይወት ጥበቃ ኢንስቲትዩት (IBC) ትኩረት በሕያዋን ፍጥረታት (ተክሎች፣ እንስሳት እና ረቂቅ ህዋሳት) ጀነቲክ ጥበቃ ላይ ሲሆን የአፈር ጥበቃ (soil conservation) ግን አቢዮቲክ የመሬት አጠባበቅ ነው።

🌳 Afaan Oromoo:
Dhaabbanni Eegumsa Baayoodaayivarsitii Itoophiyaa (IBC) qabeenya jeneetikii biqiltootaa, bineensotaa fi maayikiroobotaa irratti hojjeta malee eegumsa biyyoo (soil conservation) irratti miti.`,
    hint: 'IBC manages biological genetic resources, whereas soil is an abiotic component.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q37',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Microscopy: Role of Biological Stains',
    questionText: '37. The importance of stains in microscopic investigations is explained by their effect in',
    options: [
      'increasing resolution.',
      'creating contrast.',
      'increasing magnification.',
      'decreasing air bubbles.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Most living cellular structures are colorless, transparent, and have similar refractive indices. Biological stains (e.g., methylene blue, iodine, eosin) chemically bind to specific organelles, absorbing light and creating visual contrast between internal cell features and the surrounding background.

🇪🇹 አማርኛ (Amharic):
በማይክሮስኮፕ ምርመራ ወቅት ቀለሞች (stains) የሚያገለግሉት የሴል ክፍሎችን ከጀርባው በግልጽ ለመለየት የሚያስችል ንፅፅር በመፍጠር (creating contrast) ነው።

🌳 Afaan Oromoo:
Qorannoo maayikirooskoopii keessatti halluuwwan (stains) kutaa seelii adda baasanii mul'isuuf garaagarummaa ifaa (contrast) uumu.`,
    hint: 'Stains color specific cellular structures, creating visual contrast.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q38',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Human Digestion: Liver Dysfunction & Fat Emulsification',
    questionText: '38. One of the following problems can occur if the liver does NOT properly carry out its digestive functions.',
    options: [
      'Increased alkalinity of the intestine',
      'Incomplete digestion of polysaccharides',
      'Partial absorption of digested foods',
      'Partial digestion of fats (impaired bile emulsification)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The liver synthesizes bile salts, which are stored in the gallbladder and secreted into the duodenum to mechanically emulsify large insoluble lipid globules into tiny micelles, dramatically increasing the surface area for pancreatic lipase to digest fats into fatty acids and glycerol. Without proper liver function, fat digestion and absorption are severely impaired.

🇪🇹 አማርኛ (Amharic):
ጉበት የሀሞት ፈሳሽ (bile) በማመንጨት ቅባቶችን የመሰባበርና የማሟሟት (emulsification) ስራ ስለሚያከናውን፣ ጉበት በትክክል ካልሰራ የስብ መፈጨት ሂደት ይስተጓጎላል (impaired fat digestion)።

🌳 Afaan Oromoo:
Tiruun dhangala'aa hadhooftuu (bile) oomishuun zayitootaa fi cooma waan bulbuluuf, yoo hojii isaa dhabe dhabama daakamuu coomaa (partial digestion of fats) uuma.`,
    hint: 'Liver bile salts emulsify fats for digestion by pancreatic lipase.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q39',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Human Digestion: Gastric Protease & Protein Hydrolysis',
    questionText: '39. Which of the following is the correct order of food substance, enzyme, and breakdown product of the digestive process in the stomach respectively?',
    options: [
      'Starch, lipase, glucose',
      'Fat, trypsin, glycerol',
      'Protein, pepsin, amino acid (peptides)',
      'Lipid, amylase, fatty acid'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In the gastric mucosa of the stomach, chief cells secrete inactive pepsinogen, which is activated by hydrochloric acid (HCl) into the protease enzyme pepsin. Pepsin cleaves dietary protein substrates into shorter polypeptide chains, peptides, and amino acid fragments.

🇪🇹 አማርኛ (Amharic):
በጨጓራ ውስጥ የሚካሄደው ትክክለኛ የምግብ መፈጨት ሂደት፦ ፕሮቲን (Protein) በፔፕሲን ኢንዛይም (pepsin) አማካኝነት ወደ ፔፕታይዶች/አሚኖ አሲዶች (amino acids / peptides) ይሰባበራል።

🌳 Afaan Oromoo:
Garaacha keessatti: Pirootiiniin (Protein) inzaayimii peepsiiniin (pepsin) gara amiinoo asidiitti/peepsiidotaatti jijjiirama.`,
    hint: 'The stomach secretes pepsin to break down proteins.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q40',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Respiratory Mechanics: Bell Jar Model & Diaphragm Action',
    questionText: '40. Assume you are trying to demonstrate breathing movements using artificial lung and you pulled down the rubber sheet. This action of pulling represents which step of the actual breathing process?',
    options: [
      'Exhalation and contraction of the diaphragm',
      'Inhalation and relaxation of the diaphragm',
      'Inhalation and contraction of the diaphragm',
      'Exhalation and relaxation of the diaphragm'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In the bell-jar model of the thoracic cavity, pulling down the flexible rubber sheet represents the active contraction and flattening of the diaphragm muscle. This increases internal volume, lowers the intrathoracic air pressure below atmospheric pressure, causing air to rush in (inhalation / inspiration).

🇪🇹 አማርኛ (Amharic):
በሰው ሰራሽ ሳንባ ሞዴል ውስጥ የላስቲክ ሽፋኑን ወደ ታች መሳብ በሰውነታችን ውስጥ ዲያፍራም ሲኮማተር (contraction of the diaphragm) ወደ ውስጥ አየር መሳብን (inhalation) ይወክላል።

🌳 Afaan Oromoo:
Moodeela sombaa keessatti qola laastikii gara gadiitti harkisuun, daayaafiraamiin kottoonfatee qilleensa gara keessaatti harkisuu (Inhalation and contraction of diaphragm) bakka bu'a.`,
    hint: 'Pulling down expands volume and lowers pressure, representing diaphragm contraction during inhalation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q41',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Biochemistry: Triglyceride Synthesis & Ester Linkages',
    questionText: '41. When three fatty acid molecules and a glycerol molecule undergo condensation reaction, they form',
    options: [
      'peptide bond and protein.',
      'ester bond and triglyceride.',
      'glycosidic bond and polysaccharide.',
      'phosphate bond and phospholipid.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
One glycerol molecule condenses with three fatty acid chains in an esterification reaction, eliminating three water molecules to form three covalent ester bonds (-COO-) and a neutral fat molecule known as a triglyceride (triacylglycerol).

🇪🇹 አማርኛ (Amharic):
አንድ ግሊሰሮል ከሶስት ቅባት አሲዶች (fatty acids) ጋር በኮንደንሴሽን ምላሽ ሲዋሃድ የኤስተር ቦንድ (ester bond) በመፍጠር ትራይግሊሰራይድ (triglyceride) ይሰጣል።

🌳 Afaan Oromoo:
Gilisarooliin tokko molakiyuulota faatii asidii sadii wajjin wal-nyaachuun boondii eesterii (ester bond) fi tiraayigilisaraayidii (triglyceride) uuma.`,
    hint: 'Glycerol + 3 fatty acids form ester bonds in triglycerides.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q42',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Cell Biology: Membrane Phospholipid Bilayer Orientation',
    questionText: '42. In water, phospholipids become organized into a bilayer configuration, which part of the bilayer faces towards the water?',
    options: [
      'Hydrocarbon tail',
      'Fatty acid tail',
      'Phosphate head (polar hydrophilic head)',
      'Glycerol head'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Phospholipids are amphipathic molecules possessing a polar, hydrophilic (water-attracting) phosphate head and non-polar, hydrophobic (water-repelling) fatty acid hydrocarbon tails. In an aqueous environment, they spontaneously organize into a bilayer with the hydrophilic phosphate heads oriented outward towards the water on both sides.

🇪🇹 አማርኛ (Amharic):
በውሃ ውስጥ ፎስፎሊፒዶች ድርብ ሽፋን ሲፈጥሩ፣ ከውሃ ጋር የሚገናኘው ውጫዊው ክፍል ውሃ ወዳድ የሆነው የፎስፌት ራስ (polar hydrophilic phosphate head) ነው።

🌳 Afaan Oromoo:
Baayileeyariin fosfooliipiidii yeroo bishaan keessa jiru kutan bishaan jaallatu (hydrophilic) mataa fosfeetiiti (Phosphate head).`,
    hint: 'Hydrophilic phosphate heads face external water, shielding hydrophobic tails.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q43',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Biochemical Tests: Emulsion Test for Lipids',
    questionText: '43. Four students wanted to conduct chemical tests on unknown food particles and used the following chemicals and materials.\nStudent A: Test tubes and biuret solution\nStudent B: Test tubes, ethanol, water, filter paper\nStudent C: Test tubes, benedict\'s solution, water bath\nStudent D: Test tubes and iodine solution\nWhich of the above students planned a test for lipids?',
    options: [
      'Student B (Ethanol emulsion test)',
      'Student D (Iodine test for starch)',
      'Student C (Benedict\'s test for reducing sugars)',
      'Student A (Biuret test for proteins)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Student B designed the ethanol emulsion test for lipids: lipids dissolve in pure ethanol, and when poured into cold water, the insoluble lipids precipitate out to form a cloudy white emulsion. Student A tests for proteins (Biuret), Student C tests for reducing sugars (Benedict\'s), and Student D tests for starch (Iodine).

🇪🇹 አማርኛ (Amharic):
የስብ ወይም የቅባት (lipids) ምርመራ ለማካሄድ ኢታኖል እና ውሃ በመጠቀም የኢመልሽን ምርመራ (ethanol emulsion test) ያቀደው ተማሪ B (Student B) ነው።

🌳 Afaan Oromoo:
Qorannoo dhangala'aa zayitaa (lipids) gochuuf etaanoonii fi bishaan fayyadamee kan qopheesse Barataa B dha.`,
    hint: 'Ethanol emulsion test is the standard qualitative chemical test for lipids.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q44',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Cellular Respiration: Coenzymes & Vitamin Precursors',
    questionText: '44. Niacin (Vitamin B₃) is used to make the coenzyme',
    options: [
      'FAD (from Riboflavin / B₂).',
      'ADP.',
      'NAD (Nicotinamide Adenine Dinucleotide).',
      'AMP.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Niacin (vitamin B₃ or nicotinic acid) is the biochemical precursor used to synthesize the essential redox coenzymes Nicotinamide Adenine Dinucleotide (NAD⁺) and Nicotinamide Adenine Dinucleotide Phosphate (NADP⁺). Riboflavin (vitamin B₂) synthesizes FAD.

🇪🇹 አማርኛ (Amharic):
ኒያሲን (ቫይታሚን B₃) ሴሎች ኤን ኤ ዲ (NAD - Nicotinamide Adenine Dinucleotide) የተባለውን የመተንፈስ ረዳት ኢንዛይም (coenzyme) ለመገንባት የሚያገለግል ንጥረ ነገር ነው።

🌳 Afaan Oromoo:
Vaayitaaminiin Naayaasiin (Vitamin B₃) koo-inzaayimii NAD (Nicotinamide Adenine Dinucleotide) ijaaruuf tajaajila.`,
    hint: 'Niacin is nicotinic acid, which forms NAD.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q45',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Enzymology: Enzyme Classification & Catalyzed Reactions',
    questionText: '45. The following are reaction types catalyzed by different classes of enzymes.\n1. Transfering hydrogen and oxygen atoms\n2. Changing of the molecular form of the substrate\n3. Joining of two molecules by the formation of new bonds\nWhich classes of enzymes catalyze the above reactions according to their consecutive order?',
    options: [
      'Transferases, hydrolases, lyases',
      'Oxidoreductases, isomerases, ligases',
      'Oxidoreductases, hydrolases, lyases',
      'Transferases, isomerases, ligases'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
1. Transfer of H/O atoms or electrons (oxidation-reduction) = Oxidoreductases (dehydrogenases, oxidases).
2. Structural rearrangement to convert a molecule into its isomer = Isomerases.
3. Joining two molecules together coupled with ATP cleavage = Ligases (synthetases).
Thus, the sequence is: Oxidoreductases, isomerases, ligases.

🇪🇹 አማርኛ (Amharic):
1. ሃይድሮጅንና ኦክስጅን ማስተላለፍ ፦ ኦክሲዶሬዳክቴስ (Oxidoreductases)
2. የሞለኪውል ቅርፅ መቀየር ፦ አይሶሜሬስ (Isomerases)
3. ሁለት ሞለኪውሎችን ማያያዝ ፦ ላይጌስ (Ligases)
ትክክለኛው ቅደም ተከተል አማራጭ B ነው።

🌳 Afaan Oromoo:
1. Oksidoreedaakteezii, 2. Aayisoomeereezii, 3. Laayigeezii.`,
    hint: 'Oxidation-reduction = oxidoreductases; isomerization = isomerases; joining = ligases.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q46',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Cellular Respiration: Chemiosmosis & Proton Source for ATP Synthase',
    questionText: '46. The hydrogen ions (protons) that used to turn the rotor of ATP synthase come from',
    options: [
      'phosphorylation of ADP.',
      'oxidation of NADH and FADH₂.',
      'hydrolysis of ATP.',
      'reduction of NADH and FADH₂.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
During oxidative phosphorylation, the oxidation of reduced electron carriers (NADH and FADH₂) by the inner mitochondrial membrane respiratory complexes releases electrons and pumps protons (H⁺) into the intermembrane space. The flow of these protons back through the F₀ rotor of ATP synthase powers ATP synthesis.

🇪🇹 አማርኛ (Amharic):
የ ATP ሲንቴዝ ሞተርን የሚያሽከረክሩት የሃይድሮጅን አዮኖች (H⁺) የሚመነጩት NADH እና FADH₂ በኤሌክትሮን ማስተላለፊያ ሰንሰለት ላይ ኦክሲዳይዝ በሚሆኑበት ጊዜ (oxidation of NADH and FADH₂) ነው።

🌳 Afaan Oromoo:
Ayoononni haayidiroojiinii (H⁺) inzaayimii ATP synthase naannessuuf gargaaran ooksideeshinii NADH fi FADH₂ irraa maddan.`,
    hint: 'Oxidation of NADH and FADH2 deposits protons across the membrane to drive chemiosmosis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q47',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Cellular Respiration: Muscle Anaerobic Fermentation Trigger',
    questionText: '47. What triggers fermentation during exercise?',
    options: [
      'Shortage of oxygen (hypoxic muscle demand).',
      'Over activity of respiratory enzymes.',
      'Production of ATP beyond the cells demand.',
      'Presence of excess glucose.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
During vigorous physical exercise, muscle energy demands exceed the rate at which the circulatory system can supply oxygen for aerobic oxidative phosphorylation. This severe local oxygen shortage (hypoxia) triggers anaerobic lactic acid fermentation to regenerate NAD⁺ from NADH, sustaining ATP generation via glycolysis.

🇪🇹 አማርኛ (Amharic):
በጠንካራ የአካል ብቃት እንቅስቃሴ ወቅት በጡንቻዎች ውስጥ የላክቲክ አሲድ ፈርመንቴሽን እንዲቀሰቀስ የሚያደርገው የኦክስጅን እጥረት መከሰት (Shortage of oxygen) ነው።

🌳 Afaan Oromoo:
Yeroo sochiin qaamaa jabaan taasifamu hanqinni oksijiinii (shortage of oxygen) faarmanteeshiiniin laaktiik asidii akka uumamu godha.`,
    hint: 'Inadequate oxygen delivery forces muscle cells into anaerobic fermentation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q48',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Cellular Respiration: Lactate Dehydrogenase & Pyruvate Reduction',
    questionText: '48. Which of the following processes explains lactate production during anaerobic respiration in animal cells?',
    options: [
      'Oxidation of pyruvate',
      'Decarboxylation of pyruvate',
      'Phosphorylation of pyruvate',
      'Reduction of pyruvate (Pyruvate + NADH + H⁺ → Lactate + NAD⁺)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In anaerobic lactic acid fermentation, pyruvate acts as the terminal electron acceptor and is reduced by NADH (catalyzed by the cytosolic enzyme lactate dehydrogenase) into lactate (lactic acid), oxidizing NADH back into NAD⁺ so that glycolysis can continue producing ATP.

🇪🇹 አማርኛ (Amharic):
በእንስሳት ሴሎች ውስጥ አናይሮቢክ የመተንፈስ ሂደት ወቅት ላክቴት የሚመረተው ፓይሩቬት ከ NADH ኤሌክትሮኖችን በመቀበል ወደ ላክቲክ አሲድ ሪዲዩስ ሲሆን (Reduction of pyruvate) ነው።

🌳 Afaan Oromoo:
Marsaa faarmanteeshiinii keessatti paayiruveetiin gara laakteetiitti kan jijjiiramu adeemsa riidaakshiinii (Reduction of pyruvate) tiini.`,
    hint: 'Pyruvate gains electrons from NADH to become lactate (reduction).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q49',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Cellular Respiration: The Link Reaction (Pyruvate Decarboxylation)',
    questionText: '49. Which one of the following descriptions holds true for the link reaction of respiration?',
    options: [
      'Pyruvate reacts with coenzyme A to form acetyl coenzyme A.',
      'Glucose is converted to pyruvate through a chain of reactions.',
      'Hydrogen ion and ATP are synthesized.',
      'Reduced NAD and reduced FAD are produced.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In the mitochondrial matrix, the link reaction (pyruvate dehydrogenase complex) oxidatively decarboxylates 3-carbon pyruvate into a 2-carbon acetyl group, releasing CO₂, reducing NAD⁺ to NADH, and attaching the acetyl group to Coenzyme A to form Acetyl-CoA.

🇪🇹 አማርኛ (Amharic):
በመተንፈስ ሂደት ውስጥ የአገናኝ ምላሽ (Link reaction) ማለት 3-ካርቦን ያለው ፓይሩቬት ከኮኤንዛይም ኤ (CoA) ጋር ተገናኝቶ አሴቲል ኮኤንዛይም ኤ (Acetyl-CoA) እና ካርቦን ዳይኦክሳይድ የሚፈጠርበት ሂደት ነው።

🌳 Afaan Oromoo:
Marsaa ri'aakshinii hidhataatti (link reaction), paayiruveetiin koo-inzaayimii A wajjin walitti makamuun Aseetiil koo-inzaayimii A (Acetyl CoA) uuma.`,
    hint: 'Link reaction joins 2-carbon acetate with Coenzyme A to create Acetyl-CoA.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q50',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Evolution: The Modern Synthesis (Neo-Darwinism)',
    questionText: '50. Which one of the following is the neo-Darwinian idea of evolution? Evolutionary changes occur due to',
    options: [
      'inheritance of acquired characteristics (Lamarckism).',
      'natural selection operating on genetic variation and mutations.',
      'use and disuse of anatomical structures (Lamarckism).',
      'competitions between living organisms only.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Neo-Darwinism (the Modern Evolutionary Synthesis) unifies Darwinian natural selection with Mendelian genetics, population genetics, DNA mutations, and chromosomal recombination, establishing that evolution is the change in allele frequencies in a gene pool over successive generations driven by natural selection.

🇪🇹 አማርኛ (Amharic):
ኒዮ-ዳርዊኒዝም (Neo-Darwinism) የዳርዊንን የተፈጥሮ ምርጫ ንድፈ-ሀሳብ ከዘረመል (ጀነቲክስ)፣ ሚውቴሽን እና የጂን ለውጦች ጋር በማጣመር የዝግመተ ለውጥ መሰረት አድርጎ ያብራራል።

🌳 Afaan Oromoo:
Yaadrimee Niyo-Daarwiiniizimii (Neo-Darwinism) keessatti jijjiiramni jijjiirama sanyii kan dhufu filannoo uumamaa fi jeneetiksii/muuteeshinii irratti hundaa'eeti.`,
    hint: 'Neo-Darwinism combines Darwin\'s natural selection with genetics and mutation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
