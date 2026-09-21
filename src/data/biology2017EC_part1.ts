import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2017_EC_PART1: Question[] = [
  {
    id: 'bio-2017-q1',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Biological Research in Ethiopia: Genetic Conservation and Gene Banks',
    questionText: '1. Which one of the following Ethiopian biological research institutes is widely known for housing a major national and international gene bank in Africa?',
    options: [
      'Addis Ababa University Biology Department',
      'Institute of Biodiversity Conservation (IBC)',
      'Aklilu Lemma Institute of Pathobiology',
      'Armauer Hansen Research Institute'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The Ethiopian Institute of Biodiversity Conservation (IBC / EBI) is internationally recognized for housing one of Africa's largest and most comprehensive gene banks, conserving indigenous crop landraces, wild plant genetic resources, and animal germplasms.

🇪🇹 አማርኛ (Amharic):
የኢትዮጵያ የብዝሃ-ህይወት ጥበቃ ኢንስቲትዩት (Institute of Biodiversity Conservation) በአፍሪካ ውስጥ ትልቁን እና እጅግ ታዋቂውን የሰብሎች እና የዕፅዋት የዘረ-መል ባንክ (gene bank) በማስተዳደር ይታወቃል።

🌳 Afaan Oromoo:
Dhaabbanni Eegumsa Baay\'oodeevarsitii Itoophiyaa (IBC) baankii jiinii (gene bank) sanyiiwwan biqiltootaa fi beelladaa addunyaa irratti beekamu qabachuun beekamaadha.`,
    hint: 'The Institute of Biodiversity Conservation (IBC) conserves national genetic plant and animal resources.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q2',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Microscopy: Magnification vs Resolution Power',
    questionText: '2. A grade 12 student marked two dots very close to each other using a fine pen on paper and observed them under a microscope. The two close dots appeared clearly separated and distinguished. This ability to distinguish two close points is due to:',
    options: [
      'Resolution (Resolving power)',
      'Magnification',
      'Staining',
      'Mounting'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Resolution (Resolving Power) is the minimum distance between two points at which they can be distinguished as separate distinct objects.
• Magnification refers only to the degree of enlargement of an object's image.

🇪🇹 አማርኛ (Amharic):
በማይክሮስኮፕ ውስጥ እጅግ ተቀራራቢ የሆኑ ሁለት ነጥቦችን ለይቶና አጥርቶ የማሳየት ችሎታ "ሬዞሉሽን" ወይም የመለየት አቅም (Resolution / Resolving power) ይባላል።

🌳 Afaan Oromoo:
Dandeettiin maaykirooskooppii qabxiilee walitti dhihoo ta\'an lama adda baasee qulqullinaan agarsiisuu \'Resolution\' (dandeettii addaan baasuu) jedhama.`,
    hint: 'Resolution is the ability of an optical instrument to distinguish two adjacent points as separate.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q3',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Cell Biology: Shared Organelles in Plant and Animal Cells',
    questionText: '3. From the following alternatives, select the common cellular features and organelles that are found in BOTH animal and plant cells:',
    options: [
      'Cell membrane, nucleus, cytoplasm, lysosome and Golgi apparatus',
      'Cell membrane, nucleus, cytoplasm, mitochondria and endoplasmic reticulum',
      'Cell membrane, nucleus, cytoplasm, chloroplast and Golgi apparatus',
      'Cell membrane, nucleus, cytoplasm, large permanent central vacuole and Golgi apparatus'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Both eukaryotic plant and animal cells possess:
1. Plasma membrane
2. Nucleus with chromatin
3. Cytoplasm / Cytosol
4. Mitochondria (for cellular aerobic respiration)
5. Endoplasmic reticulum (rough and smooth)
6. Golgi apparatus and 80S ribosomes.
* Chloroplasts and large central permanent vacuoles are exclusive to plant cells.

🇪🇹 አማርኛ (Amharic):
በሁለቱም በእፅዋት እና በእንስሳት ህዋሳት (cells) ውስጥ በአንድ ላይ የሚገኙት የህዋስ አካላት፡ የህዋስ ሽፋን (Cell membrane)፣ ኒውክሊየስ፣ ሳይቶፕላዝም፣ ማይቶኮንድሪያ እና ኢንዶፕላዝሚክ ሬቲኩለም ናቸው።

🌳 Afaan Oromoo:
Qaamoleen lubbiyyoo (organelles) biqiltootaa fi beellada lamaan keessattuu argaman: Membraanii lubbiyyoo, Niywukilasii, Saayitoopilaazimii, Maaytookondiriyaa fi Endoopilaasmiik reetiikulamii dha.`,
    hint: 'Both plant and animal cells share mitochondria, ER, nucleus, membrane, and cytoplasm.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q4',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Cell Physiology: Osmosis in Hypertonic vs Hypotonic Solutions',
    questionText: '4. A biology teacher ordered Group I to place a slice of fresh potato in a hypertonic concentrated salt solution, and Group II in a hypotonic pure water solution. What will happen to the potato slices in Group I and Group II, respectively?',
    options: [
      'Group I will be turgid while Group II will be flaccid.',
      'Group I will be haemolyzed while Group II will be flaccid.',
      'Group I will be flaccid (plasmolyzed) while Group II will be turgid.',
      'Group I will be turgid while for Group II there will be no change.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• In Hypertonic solution (Group I): Water moves out of the potato cells by exosmosis down the water potential gradient, causing cells to lose turgor pressure and become flaccid (soft/limp).
• In Hypotonic solution (Group II): Water enters the potato cells by endosmosis, building internal hydrostatic pressure against cell walls, making them turgid (firm/swollen).

🇪🇹 አማርኛ (Amharic):
• ግሩፕ 1 (Hypertonic - ጨዋማ ውህድ)፡ ውሃ ከድንቹ ህዋሳት ውስጥ በኦስሞሲስ ወደ ውጭ ስለሚወጣ ድንቹ ይጨማደዳል (flaccid ይሆናል)።
• ግሩፕ 2 (Hypotonic - ንፁህ ውሃ)፡ ውሃ ወደ ድንቹ ህዋሳት ውስጥ ስለሚገባ ድንቹ ይወጠራል (turgid ይሆናል)።

🌳 Afaan Oromoo:
• Garee 1 (Hypertonic): Bishaanni lubbiyyoo keessaa ba\'uun dhangala\'aa waan ta\'uuf \'flaccid\' ta\'a.
• Garee 2 (Hypotonic): Bishaanni gara lubbiyyootti waan seenuuf ni dhiita\'a (\'turgid\' ta\'a).`,
    hint: 'Hypertonic = water leaves cell (flaccid); Hypotonic = water enters plant cell (turgid).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q5',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Human Nutrition: Balanced Diet and Nutrient Classes',
    questionText: '5. A man eats only vegetables, beans, bananas, and oranges continuously for lunch and dinner for one week. For this man, which essential nutrient class is most likely critically lacking in his meal to make it a balanced diet?',
    options: [
      'Carbohydrates',
      'Lipids (Fats and Oils)',
      'Proteins',
      'Minerals'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The man consumes:
• Carbohydrates: Bananas, oranges, beans, vegetables
• Proteins: Beans (legumes)
• Vitamins & Minerals: Vegetables, oranges, bananas
• Dietary Fiber & Water: Fruits and vegetables
He is severely lacking Lipids (fats/oils), which are essential for cell membrane synthesis, steroid hormone production, and fat-soluble vitamin (A, D, E, K) absorption.

🇪🇹 አማርኛ (Amharic):
ሰውየው የተመገበው ምግብ ካርቦሃይድሬት (ሙዝ፣ ብርቱካን)፣ ፕሮቲን (ባቄላ) እና ቫይታሚንና ሚነራሎችን የያዘ ሲሆን፤ የተመጣጠነ ምግብ እንዲሆን ያነሰው ንጥረ-ነገር ቅባት/ሊፒድስ (Lipids/Fats) ነው።

🌳 Afaan Oromoo:
Namichi kun kaarboohayidireetii, pirootiinii fi vaayitaaminii nyaateera; garuu soorata madaalamaa ta\'uuf kan isa hanqate \'Lipids\' (cooma/zayitii) dha.`,
    hint: 'Vegetables, beans, and fruits provide protein, carbs, and vitamins, but lack lipids (fats).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q6',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Digestive System: Small Intestine Digestion and Bile Function',
    questionText: '6. Which of the following statements is correct regarding the biochemical process of digestion or absorption in the human small intestine?',
    options: [
      'Proteins are converted directly into amino acids by hydrochloric acid and amylase.',
      'Bile salts emulsify large lipid droplets into micro-droplets to increase surface area for pancreatic lipase.',
      'Water is completely reabsorbed into the small intestine and metabolic wastes are excreted.',
      'Glucose and non-hydrolyzed starch molecules are absorbed through the lymphatic lacteal.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Bile produced by the liver and stored in the gallbladder contains bile salts that mechanically emulsify large fat globules into tiny droplets. This dramatically increases the surface area for pancreatic lipase enzyme action, accelerating lipid breakdown into glycerol and fatty acids.

🇪🇹 አማርኛ (Amharic):
የሀሞት ፈሳሽ (Bile) ቅባቶችን በማድቀቅና በማሟሟት (emulsify በማድረግ) የላይኛውን ስፋት በመጨመር የሊፔዝ (lipase) ኢንዛይም ቅባቶችን በቀላሉ እንዲያፈርስ ያግዛል።

🌳 Afaan Oromoo:
Dhangala\'aan hadhooftuu (Bile) cooma cicciree bal\'ina dirra isaa dabaluun inzaayimiin \'lipase\' akka saffisaan bulleessu gargaara.`,
    hint: 'Bile emulsifies fats, multiplying surface area for lipase enzymes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q7',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Enzymes & Digestion: Salivary Amylase Activity Experiment',
    questionText: '7. In a laboratory experiment, students wanted to prove that enzymatic chemical digestion begins in the mouth using chewed food mixed with saliva. To obtain a positive test result, what food sample and chemical testing reagent should the students use?',
    options: [
      'Cooked potato (starch source) and Iodine solution (testing starch breakdown by salivary amylase)',
      'Meat and Benedict\'s solution',
      'Fish and sodium hydroxide solution',
      'Bread and copper sulphate solution'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Human saliva contains salivary amylase (ptyalin), which breaks down starch (present in boiled potato/bread) into maltose disaccharides. By using iodine solution (which turns blue-black with starch and yellow-brown when starch is completely digested), students can visually verify that starch digestion occurs in saliva.

🇪🇹 አማርኛ (Amharic):
የምግብ መፈጨት በአፍ ውስጥ መጀመሩን ለማረጋገጥ ስታርች ያለበትን ድንች (Potato) እና የስታርች መፈጨትን የሚያረጋግጠውን አዮዲን ሶሉሽን (Iodine solution) መጠቀም ተገቢ ነው።

🌳 Afaan Oromoo:
Bulleeffamni nyaataa afaan keessatti eegaluu isaa mirkaneessuuf dhangala\'aa \'Iodine solution\' fi soraata \'starch\' qabu (dinnicha) fayyadamuun barbaachisaadha.`,
    hint: 'Salivary amylase digests starch in potato; Iodine tests for starch presence/disappearance.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q8',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Respiratory System: Composition of Inhaled vs Exhaled Air',
    questionText: '8. Compared to atmospheric inhaled air, what are the approximate percentage proportions of nitrogen (N2), oxygen (O2), and carbon dioxide (CO2) in human exhaled air, respectively?',
    options: [
      '80% N2, 16% O2, and 4% CO2',
      '80% N2, 4% O2, and 16% CO2',
      '16% N2, 4% O2, and 80% CO2',
      '4% N2, 16% O2, and 80% CO2'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Gas composition comparison:
• Inhaled Air: ~78-79% Nitrogen, ~21% Oxygen, ~0.04% Carbon Dioxide
• Exhaled Air: ~79-80% Nitrogen (unchanged), ~16% Oxygen (consumed in cellular respiration), and ~4% Carbon Dioxide (produced in Krebs cycle/respiration).

🇪🇹 አማርኛ (Amharic):
ወደ ውጭ በሚተነፈስ አየር (Exhaled air) ውስጥ ያሉት ጋዞች መጠን፡ ናይትሮጅን 80%፣ ኦክስጅን 16% እና ካርቦን ዳይኦክሳይድ 4% አካባቢ ናቸው።

🌳 Afaan Oromoo:
Qabiyyee qilleensa baafamu keessatti: Naayitiroojiiniin 80%, Oksijiiniin 16%, fi Kaarboon daayi\'oksaayidiin 4% ta\'a.`,
    hint: 'Exhaled air contains approximately 80% N2, 16% O2, and 4% CO2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q9',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Respiration Experiments: Testing Water Vapor and Carbon Dioxide',
    questionText: '9. Three students set up experiments to test exhaled breath:\n• Student I: Uses a cold glass mirror and dry blue cobalt chloride paper\n• Student II: Uses ice cubes\n• Student III: Uses a test tube containing clear limewater (calcium hydroxide) and a straw\n\nWhich students plan to demonstrate the presence of water vapor and carbon dioxide in exhaled air, respectively?',
    options: [
      'Student II and Student III',
      'Student I and Student II',
      'Student II and Student I',
      'Student I and Student III'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Student I: Uses blue cobalt chloride paper (which turns pink upon contact with moisture/water vapor) and cold glass condensation to test for water vapor.
• Student III: Bubbles exhaled breath through clear limewater (Ca(OH)2), which turns milky white due to CaCO3 precipitate, confirming carbon dioxide.

🇪🇹 አማርኛ (Amharic):
• ተማሪ 1 (ኮባልት ክሎራይድ ወረቀት) የውሃ እንፋሎትን (water vapour) ያረጋግጣል (ሰማያዊ የነበረው ወደ ሮዝ ይቀየራል)።
• ተማሪ 3 (የኖራ ውሃ / limewater) ካርቦን ዳይኦክሳይድን (CO2) ያረጋግጣል (የኖራ ውሃው ወደ ነጭነት ይቀየራል)።

🌳 Afaan Oromoo:
Barataan 1 waraqaa \'cobalt chloride\' fayyadamuun hurka bishaanii agarsiisa; Barataan 3 dhangala\'aa nooraa (limewater) booromsuun Kaarboon daayi\'oksaayidii mirkaneessa.`,
    hint: 'Cobalt chloride turns pink with water vapor; Limewater turns cloudy with carbon dioxide.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q10',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Circulatory System: Anatomy of the Human Heart and Ventricular Pumping',
    questionText: '10. In a labeled diagram of the human heart, which heart chamber (labeled with thick muscular walls - Left Ventricle) is responsible for generating high pressure to force oxygenated blood out of the heart into the aorta and around the entire systemic body?',
    options: [
      'Part I (Right Atrium)',
      'Part II (Right Ventricle)',
      'Part III (Left Ventricle)',
      'Part IV (Left Atrium)'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Part III represents the Left Ventricle. It has the thickest myocardium (muscular wall) because it must contract forcefully to generate sufficient hydrostatic pressure to pump oxygenated blood through the aortic semilunar valve into the systemic circulation around the whole body.

🇪🇹 አማርኛ (Amharic):
ክፍል 3 (Left Ventricle / የግራ ታችኛው የልብ ክፍል) ወፍራም የጡንቻ ሽፋን ያለው ሲሆን፣ በኦክስጅን የበለፀገውን ደም በከፍተኛ ግፊት በኤኦርታ (aorta) በኩል ወደ መላው የሰውነት ክፍሎች የሚረጨው ይኸው ክፍል ነው።

🌳 Afaan Oromoo:
Kutaan III (Left Ventricle / Garaa-harka bitaa) maashaalee jabaa qabaachuu isaatiin dhiiga oksijiiniin badhaadhe qaama guutuutti dhiiba.`,
    hint: 'The left ventricle has the thickest muscular wall to pump oxygenated blood systemically.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q11',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Human Physiology: Hematopoiesis and Dietary Minerals for Anemia',
    questionText: '11. If a person\'s bone marrow cannot produce sufficient mature red blood cells (erythrocytes) leading to fatigue and anemia, which mineral-rich food is essential to correct this condition?',
    options: [
      'Iron-rich food (Fe)',
      'Calcium-rich food (Ca)',
      'Iodine-rich food (I)',
      'Sodium-rich food (Na)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Iron (Fe2+) is the central prosthetic element in the heme group of hemoglobin molecules within red blood cells. Iron deficiency impairs hemoglobin synthesis, leading to microcytic anemia. Consuming iron-rich foods (red meat, spinach, liver, beans) restores RBC production.

🇪🇹 አማርኛ (Amharic):
ቀይ የደም ህዋሳትን (Red blood cells) ለማምረት እና ሄሞግሎቢንን ለመገንባት የሚያስፈልገው ቁልፍ ማዕድን የብረት ማዕድን (Iron) ነው። የብረት ማዕድን እጥረት የደም ማነስን (anemia) ያስከትላል።

🌳 Afaan Oromoo:
Lubbiyyoo dhiiga diimaa (RBC) fi heemoogilobiinii oomishuuf albuudni baay\'ee barbaachisaa ta\'e \'Aayirenii\' (Iron) dha.`,
    hint: 'Iron is the core mineral required for hemoglobin synthesis in erythrocytes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q12',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Taxonomy: Binomial Nomenclature Formatting Rules',
    questionText: '12. A biology teacher asked students to write the correct scientific names for human being, dog, and housefly according to the rules of Carl Linnaeus\' Binomial Nomenclature. Which alternative demonstrates the correct scientific writing format?',
    options: [
      'Homo Sapiens, Canis Familiaris and Musca Domestica',
      'Homo sapiens, Canis familiaris and Musca domestica (Genus capitalized, specific epithet lowercase, italicized/underlined)',
      'homo sapiens, Canis familiaris and Musca domestica',
      'Homo sapiens, Canis familiaris and musca domestica'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Rules of Binomial Nomenclature (Linnaean system):
1. The Genus name is capitalized (Homo, Canis, Musca).
2. The specific epithet (species) begins with a lowercase letter (sapiens, familiaris, domestica).
3. The names are italicized in print or underlined when handwritten.

🇪🇹 አማርኛ (Amharic):
በባይኖሚል ኖመንክሌቸር (Binomial Nomenclature) ህግ መሰረት፡ የዝርያ መጠሪያው የመጀመሪያ ቃል (Genus) በካፒታል ሌተር ይጀምራል፤ ሁለተኛው ቃል (species) በስሞል ሌተር ተፅፎ በኢታሊክስ (Italics) ይቀመጣል (ለምሳሌ፡ Homo sapiens)።

🌳 Afaan Oromoo:
Seera moggaasa saayinsawaa (Binomial Nomenclature) keessatti jechi duraa (Genus) qubee guddaan (Capital), jechi lammaffaan (species) qubee xiqqaatiin barreeffama (Homo sapiens, Canis familiaris).`,
    hint: 'Genus capitalized, species lowercase (e.g., Homo sapiens).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q13',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Plant Diversity: Gymnosperms vs Angiosperms',
    questionText: '13. Identify the typical representative plant examples for division Gymnospermae (naked seeds) and division Angiospermae (flowering/enclosed seeds), respectively:',
    options: [
      'Mosses and ferns',
      'Liverworts and palm trees',
      'Grasses and legumes',
      'Juniper (Gymnosperm conifer) and roses (Angiosperm flowering plant)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Gymnosperms: Non-flowering vascular plants that produce naked seeds un-enclosed in an ovary/fruit, typically in cones (e.g., Juniper / Tid, Pine, Cedar, Cycads).
• Angiosperms: Flowering vascular plants whose seeds develop inside protective ovaries/fruits (e.g., Roses, Teff, Maize, Eucalyptus).

🇪🇹 አማርኛ (Amharic):
• ጂምኖስፐርም (Gymnosperms)፡ የአበባ አልባ እና ዘራቸው በኮን ውስጥ ክፍት ሆኖ የሚገኝ (እንደ ፅድ / Juniper)።
• አንጂዮስፐርም (Angiosperms)፡ አበቦችና ዘራቸው በፍሬ የተሸፈነ እፅዋት (እንደ ጽጌረዳ / Roses) ናቸው።

🌳 Afaan Oromoo:
Fakkeenyi \'Gymnosperm\' (sanyiin isaanii kan hin golgamin) \'Juniper\' (Tidii) yoo ta\'u, kan \'Angiosperm\' (biqiltoota daraaraa qaban) \'Roses\' (Daraaraa) dha.`,
    hint: 'Gymnosperms = conifers like Juniper/Pine; Angiosperms = flowering plants like Rose.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q14',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Plant Diversity: Monocotyledon Characteristics',
    questionText: '14. A student collected plants from his locality and observed that all specimens have a single cotyledon embryo, long narrow leaves with parallel venation, and scattered vascular bundles in their stems. Which group contains plants exclusively categorized under this monocotyledonous class?',
    options: [
      'Grasses, orchids, teff and roses',
      'Grasses, orchids, teff and beans',
      'Grasses, sunflowers, teff and maize',
      'Grasses, orchids, teff and maize (All Monocots)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Monocotyledons (Monocots) possess:
• Single seed cotyledon
• Parallel leaf venation
• Scattered vascular bundles in stem cross-section
• Fibrous root systems
• Floral parts in multiples of 3.
Grasses, orchids, teff, and maize (corn) are all monocots. Roses, beans, and sunflowers are dicotyledons.

🇪🇹 አማርኛ (Amharic):
አንድ የዘር ክፋይ (Monocot) ያላቸው እፅዋት መለያ ባህሪያት፡ ትይዩ የቅጠል ደምስር (parallel venation) እና የተበታተነ የቫስኩላር ህብረ-ህዋስ ናቸው። ሳር፣ ኦርኪድ፣ ጤፍ እና በቆሎ ሁሉም ሞኖኮቶች (Monocots) ናቸው።

🌳 Afaan Oromoo:
Biqiltoonni damee \'Monocot\' hidda qajjisaa, hidda baalaa wal-bira darbu (parallel veins) qabu. Fakkeenyaaf: Marga, Orchid, Xaafii fi Boqqolloo dha.`,
    hint: 'Grasses, orchids, teff, and maize are all monocots with parallel veins and 1 cotyledon.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q15',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Ecology: Pyramids of Biomass and Energy Loss Across Trophic Levels',
    questionText: '15. In an ecological pyramid of biomass (Producers -> Primary Consumers -> Secondary Consumers -> Tertiary Consumers), which of the following statements is correct regarding the transfer of biomass and energy?',
    options: [
      'The whole organism at the first trophic level is eaten completely by the organisms above.',
      'When organisms in stage II eat producers, 100% of the producer\'s materials are turned into new tissue.',
      'Much of the biomass and ingested energy from stage II is used by organisms to release metabolic energy for cellular respiration, heat loss, and excretion.',
      'At each higher trophic level, the amount of passed-on biomass supports an increasingly larger biomass of predators.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
According to Lindeman's 10% Ecological Efficiency Rule, only about 10% of energy/biomass is transferred from one trophic level to the next. Approximately 90% is dissipated as metabolic heat during cellular respiration, used for movement and living processes, or lost as undigested waste.

🇪🇹 አማርኛ (Amharic):
በስነ-ምህዳር የባዮማስ ፒራሚድ ውስጥ፣ ከአንዱ ደረጃ ወደ ሌላኛው የሚተላለፈው የጉልበት/የባዮማስ መጠን ዝቅተኛ ሲሆን፣ አብዛኛው ባዮማስ ለህይወታዊ እንቅስቃሴ (respiration) እና ለሙቀት ብክነት ይውላል።

🌳 Afaan Oromoo:
Sadarkaa soorataa tokko irraa gara isa itti aanutti baayoo-maasiin darbu muraasa (%10); baay\'een isaa anniisaa jireenyaaf (respiration) fi ho\'aan bittinaa\'a.`,
    hint: '90% of biomass/energy is consumed in respiration, life processes, and lost as heat.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q16',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Ecology: Food Chain Interdependence and Population Dynamics',
    questionText: '16. Consider the simple terrestrial food chain:\nLeaves (Producers) -> Grasshoppers (Primary Consumers) -> Rodents (Secondary Consumers) -> Leopards (Apex Predators)\n\nWhat will be the immediate ecological consequence if the population of rodents significantly decreases due to disease?',
    options: [
      'An increase in the population number of leopards.',
      'Fewer grasshoppers in the ecosystem.',
      'No change in the leopard population.',
      'An increase in the number of grasshoppers (due to reduced predation pressure).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In a direct linear food chain:
• Rodents prey upon grasshoppers.
• If the rodent population crashes, predation on grasshoppers sharply declines, causing the grasshopper population to rapidly increase and overgraze on leaves.

🇪🇹 አማርኛ (Amharic):
የአይጦች (Rodents) ቁጥር በድንገት ከቀነሰ፣ አንበጣዎችን የሚበላ ጠላት ስለሚቀንስ የአንበጣዎች (grasshoppers) ቁጥር በከፍተኛ ሁኔታ ይጨምራል።

🌳 Afaan Oromoo:
Yoo baay\'inni hantuutaa (rodents) hir\'ate, bineensi koraaphisa nyaatu waan hir\'atuuf baay\'inni koraaphisaa (grasshoppers) ni dabala.`,
    hint: 'Fewer rodent predators directly results in an increase in the grasshopper population.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q17',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Biogeochemical Cycles: Processes in the Carbon Cycle',
    questionText: '17. Which of the following physical and biological processes is NOT a component of the global Carbon Cycle?',
    options: [
      'Evaporation (Physical process in the Water Cycle)',
      'Cellular respiration',
      'Photosynthesis',
      'Decomposition'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• The Carbon Cycle involves photosynthesis (fixing CO2), cellular respiration (releasing CO2), combustion, and microbial decomposition.
• Evaporation is a phase change of water from liquid to vapor, belonging strictly to the Hydrological (Water) Cycle.

🇪🇹 አማርኛ (Amharic):
የካርቦን ዑደት (Carbon cycle) አካል ያልሆነው ትነት (Evaporation) ሲሆን፣ ትነት የውሃ ዑደት (Water cycle) ቁልፍ ሂደት ነው።

🌳 Afaan Oromoo:
Marsaa Kaarboonii (Carbon cycle) keessatti kan hin hirmaanne \'Evaporation\' (hurkuu bishaanii) yoo ta\'u, inni marsaa bishaaniiti.`,
    hint: 'Evaporation belongs to the water cycle, not the carbon cycle.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q18',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Cell Division: Definition of Mitosis',
    questionText: '18. Which of the following statements correctly defines mitosis?',
    options: [
      'Division of somatic cells to make daughter cells with half chromosome number.',
      'Division of sex cells to make identical daughter cells with doubled chromosome number.',
      'Division of somatic (body) cells to produce two genetically identical diploid daughter cells.',
      'Division of germ cells to make genetically diverse haploid daughter cells.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Mitosis is equational cell division in somatic (body) cells where a single diploid parent cell replicates its DNA and divides once to produce two genetically identical diploid daughter cells for growth, tissue repair, and asexual reproduction.

🇪🇹 አማርኛ (Amharic):
ማይቶሲስ (Mitosis) ማለት የአካል ህዋሳት (somatic cells) ተከፍለው ሁለት ተመሳሳይ የክሮሞዞም ቁጥር ያላቸውን ተመሳሳይ አዳዲስ ህዋሳት (identical daughter cells) የሚፈጥሩበት ሂደት ነው።

🌳 Afaan Oromoo:
\'Mitosis\' jechuun qoodama lubbiyyoo qaamaa (somatic cells) kan lubbiyyoolee lameen walfakkaatan (genetically identical) uumudha.`,
    hint: 'Mitosis produces two genetically identical diploid somatic cells.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q19',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Cell Division: Common Features of Mitosis and Meiosis',
    questionText: '19. Which one of the following cellular features is common to BOTH mitosis and meiosis cell division pathways?',
    options: [
      'Replication of nuclear DNA prior to cell division and formation of new daughter cells',
      'Production of daughter cells genetically identical to parent cell',
      'Formation of daughter cells with the exact same chromosome number as parent cell',
      'Exclusive occurrence during gametogenesis in gonads'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Both mitosis and meiosis are preceded by interphase, during which DNA replication occurs in the S phase, followed by nuclear division and cytokinesis to form new daughter cells.

🇪🇹 አማርኛ (Amharic):
በማይቶሲስ እና በሜዮሲስ የህዋስ ክፍፍል መካከል የሚያመሳስላቸው የጋራ ባህሪ፡ ሁለቱም ክፍፍል ከማድረጋቸው በፊት በኢንተርፌዝ የዲ ኤን ኤ ቅጂ ማባዛታቸው (DNA replication) እና አዳዲስ ህዋሳትን መፍጠራቸው ነው።

🌳 Afaan Oromoo:
Amalli walfakkataan \'mitosis\' fi \'meiosis\' gidduu jiru lamaanuu osoo hin qoodamin dura DNA baay\'isuu (DNA replication) fi lubbiyyoo haaraa uumuudha.`,
    hint: 'Both mitosis and meiosis require DNA replication in interphase and generate daughter cells.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q20',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Plant Anatomy: Leaf Tissues and Specialized Functions',
    questionText: '20. Which tissues in a dicot leaf are primarily responsible for waterproofing against transpirational water loss, major photosynthetic carbon fixation, and major internal gas exchange, respectively?',
    options: [
      'Guard cells, palisade mesophyll and epidermis',
      'Guard cells, palisade mesophyll and spongy mesophyll',
      'Waxy cuticle (waterproofing), palisade mesophyll (major photosynthesis), and spongy mesophyll (gas exchange)',
      'Waxy cuticle, palisade mesophyll and epidermis'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Waterproofing: Waxy cuticle secreted by the upper epidermis prevents desiccation.
• Major Photosynthesis: Palisade mesophyll cells packed with abundant chloroplasts.
• Gas Exchange: Spongy mesophyll layer with large intercellular air spaces allowing rapid diffusion of CO2 and O2.

🇪🇹 አማርኛ (Amharic):
• ውሃ እንዳይባክን መከላከል፡ ሰምናማ ሽፋን (Waxy cuticle)
• ዋነኛ የፎቶሲንተሲስ ማዕከል፡ ፓሊሴድ ሜሶፊል (Palisade mesophyll)
• የጋዝ ልውውጥ፡ ክፍተቶች ያሉት ስፖንጂ ሜሶፊል (Spongy mesophyll)።

🌳 Afaan Oromoo:
• Dhangala\'uu bishaanii ittisuuf: \'Waxy cuticle\'
• Faayidaa footosinteesisiif: \'Palisade mesophyll\'
• Jijjiirraa gaazotaaf: \'Spongy mesophyll\' tajaajilu.`,
    hint: 'Cuticle = waterproofing, Palisade = photosynthesis, Spongy mesophyll = gas exchange.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q21',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Plant Transport: Water Movement Across Root and Leaf Tissues',
    questionText: '21. Which of the following is correct regarding the pathway and driving force of water movement across root cortex and living plant tissues?',
    options: [
      'It moves actively against a water potential gradient.',
      'It moves across the phloem tissue by diffusion.',
      'It moves across the living tissues of a plant down a water potential gradient by osmosis (via apoplastic and symplastic pathways).',
      'It moves by continuous direct expenditure of ATP energy until it reaches xylem vessels.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Water moves passively from the soil through root hairs, cortex, and endodermis into xylem vessels down a water potential gradient (from higher water potential to lower water potential) by osmosis via symplast (cytoplasm) and apoplast (cell wall) pathways.

🇪🇹 አማርኛ (Amharic):
ውሃ በእፅዋት ህብረ-ህዋሳት ውስጥ የሚጓዘው ከከፍተኛ የውሃ ፖቴንሻል ወደ ዝቅተኛ የውሃ ፖቴንሻል በኦስሞሲስ (osmosis) አማካኝነት ያለምንም የሃይል ወጪ ነው።

🌳 Afaan Oromoo:
Bishaanni qaama biqiltootaa keessa kan socho\'u \'water potential gradient\' hordofee karaa \'osmosis\' tiini.`,
    hint: 'Water moves passively down a water potential gradient by osmosis.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q22',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Plant Hormones: Apical Dominance and Auxins (IAA)',
    questionText: '22. What morphological change will occur in the growth habit of a plant when the apical bud (the source of indole-3-acetic acid / auxin) is decapitated and removed from the main shoot?',
    options: [
      'The plant will bush out (lateral/axillary buds develop into bushy side branches).',
      'It stimulates rapid shedding and dropping of all leaves.',
      'The main stem shoot of the plant elongates twice as fast.',
      'The growth of all side lateral shoots will completely slow down.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In intact plants, the apical shoot tip produces high concentrations of auxin (IAA), which moves basipetally and suppresses the growth of dormant lateral/axillary buds (Apical Dominance). Removing the apical shoot bud removes this auxin inhibition, releasing lateral buds to grow and causing the plant to "bush out" with many side branches.

🇪🇹 አማርኛ (Amharic):
የእፅዋቱ ጫፍ (apical shoot) ሲቆረጥ የኦክሲን (auxin / IAA) ሆርሞን እገዳ ስለሚነሳ፣ የጎን ቅርንጫፎች (lateral shoots) በፍጥነት በማደግ ተክሉ ጎን ለጎን ተንሰራፍቶ እንዲያድግ (bush out እንዲያደርግ) ያደርገዋል።

🌳 Afaan Oromoo:
Fiixee biqiltuu yoo kutan hoormooniin \'auxin\' (IAA) waan dhabamuuf dameen cinaa saffisaan guddatee biqiltuun akka bal\'atu (bush out akka ta\'u) godha.`,
    hint: 'Decapitation removes apical dominance, releasing lateral buds to form bushy branches.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q23',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Kingdom Animalia: General Defining Characteristics',
    questionText: '23. In which one of the following alternatives does the complete list strictly contain universal defining characteristics of Kingdom Animalia?',
    options: [
      'Respire, excrete, autotrophic and reproduce',
      'Unicellular, excrete, heterotrophic and motility',
      'Heterotrophic, excrete, motility (at some life stage), and grow',
      'Respire, multicellular, autotrophic and reproduce'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
All animals (Kingdom Animalia) are eukaryotic, multicellular, ingestive heterotrophs (cannot produce their own food like autotrophs), show cellular excretion and growth, and exhibit motility (self-powered locomotion) during at least one stage of their life cycle.

🇪🇹 አማርኛ (Amharic):
የእንስሳት (Kingdom Animalia) መሰረታዊ መገለጫዎች፡ ሄትሮትሮፊክ (ምግብ የማይሰሩ)፣ ዝውውር/እንቅስቃሴ ማድረግ የሚችሉ (motility)፣ ቆሻሻ የሚያስወግዱ እና የሚያድጉ ናቸው።

🌳 Afaan Oromoo:
Amaloota beelladaa keessaa: Soorata ofii qopheeffachuu dhabuu (Heterotrophic), socho\'uu danda\'uu (motility), kosii dhabamsiisuu fi guddachuudha.`,
    hint: 'Animals are heterotrophic, motile at some life stage, multicellular, and ingestive.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q24',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Animal Diversity: Cephalopod Invertebrates (Squid)',
    questionText: '24. A grade 11 student observed and identified an advanced invertebrate animal possessing a closed circulatory system with systemic/branchial hearts, a centralized nervous system with a well-developed brain, and sophisticated image-forming eyes. Which animal belongs to this group?',
    options: [
      'Snails (Gastropoda)',
      'Earthworm (Annelida)',
      'Squid (Cephalopoda Mollusca)',
      'Hydra (Cnidaria)'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Squids and octopuses (Class Cephalopoda of Phylum Mollusca) are unique among mollusks and most invertebrates in possessing a closed circulatory system, three hearts, high metabolic rates, complex camera-type eyes, and a highly centralized brain supporting complex behaviors.

🇪🇹 አማርኛ (Amharic):
ስኩዊድ (Squid - የሞለስካ ዘር) ዝግ የደም ዝውውር ስርዓት (closed circulatory system)፣ የዳበረ አእምሮ እና ከፍተኛ የስሜት ህዋሳት ያሉት የውሃ ውስጥ እንስሳ ነው።

🌳 Afaan Oromoo:
\'Squid\' (mollusca) bineensa bishaanii sirna marsaa dhiigaa cufamaa (closed circulatory system) fi sammuu qaroomaa qabuudha.`,
    hint: 'Cephalopods like squids and octopuses have a closed circulatory system and complex brain.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2017-q25',
    subject: 'Biology',
    year: '2017 E.C.',
    topic: 'Homeostasis: Poikilothermic (Ectothermic) Animals',
    questionText: '25. What does it mean in physiological terms if an animal is classified as poikilothermic (ectothermic)?',
    options: [
      'Its internal body temperature fluctuates and changes directly with environmental ambient conditions.',
      'It drastically increases its metabolic rate during extreme cold and hot conditions.',
      'It constantly regulates and keeps its internal core temperature constant at 37°C.',
      'It produces substantial metabolic heat when temperature drops by activating the hypothalamus.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Poikilotherms (ectothermic or "cold-blooded" animals like reptiles, amphibians, and fish) lack physiological internal thermoregulation mechanisms, meaning their core body temperature varies passively in response to ambient environmental thermal changes.

🇪🇹 አማርኛ (Amharic):
ፖይኪሎተርሚክ (Poikilothermic / የቀዘቀዘ ደም ያላቸው እንስሳት) ማለት የሰውነታቸው የሙቀት መጠን ከአካባቢያቸው የአየር ሙቀት ጋር አብሮ የሚለዋወጥ (እንደ እባብና እንቁራሪት) ማለት ነው።

🌳 Afaan Oromoo:
Bineensonni \'Poikilothermic\' ho\'a qaama isaanii dhaabbataa gochuu hin danda\'an; ho\'i qaama isaanii haala qilleensa naannoo wajjin jijjiirama.`,
    hint: 'Poikilotherms have body temperatures that vary directly with the ambient environment.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
