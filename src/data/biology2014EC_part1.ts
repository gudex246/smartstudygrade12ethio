import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const BIOLOGY_2014_EC_PART1: Question[] = [
  {
    id: 'bio-2014-q1',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Microbiology: Bacterial Cell Wall Characteristics',
    questionText: '1. Bacterial cell wall is unique due to its',
    options: [
      'chemical composition (peptidoglycan / murein).',
      'freely permeability.',
      'selective permeability.',
      'mechanical support.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The bacterial cell wall is chemically unique in the living world because it is composed of peptidoglycan (also known as murein), a rigid mesh polymer of alternating amino sugars (NAG and NAM) cross-linked by short amino acid chains. Plant cell walls contain cellulose and fungal cell walls contain chitin.

🇪🇹 አማርኛ (Amharic):
የባክቴሪያ ሴል ግድግዳ (Bacterial cell wall) ልዩ የሚያደርገው ኬሚካላዊ ይዘቱ (chemical composition) ሲሆን፣ ከፔፕቲዶግላይካን (peptidoglycan / murein) የተገነባ መሆኑ ነው።

🌳 Afaan Oromoo:
Qolli seelii baakteeriyaa kan adda isa godhu qabiyyee keemikaalaa isaati (peptidoglycan irraa ijaarama).`,
    hint: 'Bacterial cell walls contain peptidoglycan, which is found in no other group of organisms.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q2',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Biogeochemical Cycles: Sulfur-Oxidizing Bacteria',
    questionText: '2. Which genus of bacteria oxidize hydrogen sulphide to sulphate and make sulphate ions available to be taken by plant roots from the soil?',
    options: [
      'Klebsiella',
      'Desulphovibrio',
      'Azotobacter',
      'Thiobacillus'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Thiobacillus (sulfur bacteria) are chemoautotrophic bacteria that oxidize reduced sulfur compounds such as hydrogen sulfide (H₂S) and elemental sulfur into sulfate ions (SO₄²⁻), which plant roots can readily absorb as essential nutrients. Desulphovibrio reduces sulfate, and Azotobacter fixes nitrogen.

🇪🇹 አማርኛ (Amharic):
ሃይድሮጅን ሰልፋይድን (H₂S) ወደ ሰልፌት አዮን (SO₄²⁻) ኦክሲዳይዝ በማድረግ ለተክሎች ሥሮች እንዲደርስ የሚያደርገው የባክቴሪያ ዝርያ ታዮባሲለስ (Thiobacillus) ነው።

🌳 Afaan Oromoo:
Gosti baakteeriyaa haayidiroojiin salfaayidii gara salfeetiitti jijjiiruun biqiltootaaf akka mijatu godhu Taayobaasiles (Thiobacillus) dha.`,
    hint: 'Thio- means sulfur; Thiobacillus oxidizes sulfur compounds to sulfate.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q3',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Infectious Diseases: Food Poisoning Bacteria',
    questionText: '3. Which one of the following diseases is caused by food poisoning bacteria?',
    options: [
      'Candidiasis',
      'Salmonellosis',
      'Tuberculosis',
      'Pneumonia'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Salmonellosis is a common bacterial food-borne infection caused by Salmonella enterica species, contracted by ingesting contaminated, undercooked poultry, eggs, meat, or dairy products. Candidiasis is fungal, whereas TB and pneumonia are respiratory infections.

🇪🇹 አማርኛ (Amharic):
በተበከለ ምግብ አማካኝነት ከሚከሰቱ የባክቴሪያ በሽታዎች (food poisoning) አንዱ ሳልሞኔሎሲስ (Salmonellosis) ነው። ካንዲዲያሲስ የፈንገስ ሲሆን፣ ቲቢ እና ኒውሞኒያ የመተንፈሻ አካላት በሽታዎች ናቸው።

🌳 Afaan Oromoo:
Dhukkuboota summaa'ina nyaataatiin (food poisoning) baakteeriyaadhaan dhufan keessaa tokko Saalmooneloosis (Salmonellosis) dha.`,
    hint: 'Salmonella species contaminate undercooked poultry and food, leading to salmonellosis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q4',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Virology: Viral Replication Cycles (Lytic vs Lysogenic)',
    questionText: '4. Which one of the following is correct concerning the reproductive cycles of viruses?',
    options: [
      'Both lytic and lysogenic life cycles release new viruses without the genetic alteration of the host cell.',
      'In lysogenic life cycle the DNA of the virus integrates with the host cell\'s DNA.',
      'Both lytic and lysogenic life cycles undergo the same life cycle but ending with different results.',
      'In lytic life cycle, viruses are released without killing the host cell.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In the lysogenic cycle, the viral genome integrates directly into the host bacterium\'s DNA genome, existing in a dormant state as a prophage (or provirus) and replicating synchronously along with host cell division. In contrast, the lytic cycle actively degrades host DNA and lyses (destroys) the host cell to release progeny virions.

🇪🇹 አማርኛ (Amharic):
በላይሶጄኒክ ዑደት (Lysogenic cycle) ውስጥ የቫይረሱ ዲ ኤን ኤ (DNA) ከአስተናጋጁ ሴል DNA ጋር ተቀላቅሎ (integrates) ያለምንም ጉዳት አብሮ ይባዛል።

🌳 Afaan Oromoo:
Marsaa laayisoojeniikii (lysogenic cycle) keessatti DNA\'n vaayirasichaa DNA seelii keessummeessaa wajjin walitti makama (integrates).`,
    hint: 'In the lysogenic cycle, viral DNA integrates as a prophage into the host chromosome.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q5',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Virology: Nature of Viruses',
    questionText: '5. Unlike free living cells, viruses are completely',
    options: [
      'pathogenic to a living cell.',
      'mutual to a living cell.',
      'parasitic to a living cell (obligate intracellular parasites).',
      'harmful to a living cell.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Viruses lack cellular machinery, cytoplasm, and metabolic enzymes; therefore, they are obligate intracellular parasites, completely reliant on infecting and hijacking the biochemical machinery of a living host cell in order to replicate.

🇪🇹 አማርኛ (Amharic):
ቫይረሶች ራሳቸውን ችለው ከሚኖሩ ህዋሳት በተለየ መልኩ፣ ህይወት ባለው ህዋስ ውስጥ ብቻ ተጠግተው የሚባዙ ፍጹም ጥገኛ (obligate intracellular parasites) ናቸው።

🌳 Afaan Oromoo:
Vaayirasoonni seelota bilisaan jiraatan irraa adda kan ta'an guutummaatti seelii jiraataa keessatti maxxantummaadhaan (parasitic) jiraatu.`,
    hint: 'Viruses cannot metabolize or reproduce on their own; they are obligate intracellular parasites.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q6',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Immunology: Function of Vaccines',
    questionText: '6. Why are vaccines important? Because they help to',
    options: [
      'trigger the immune system.',
      'kill pathogens.',
      'prevent functional diseases.',
      'heal wounds.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Vaccines contain weakened, killed, or subunit antigens from pathogens that stimulate the body\'s immune system to produce antibodies and antigen-specific memory B and T cells without causing the disease itself, providing acquired immunity against future infections.

🇪🇹 አማርኛ (Amharic):
ክትባቶች (Vaccines) ጠቃሚ የሆኑበት ምክንያት የሰውነታችንን በሽታ የመከላከል ስርአት (immune system) በማነቃቃት ፀረ-እንግዳ አካላት (antibodies) እና የማስታወሻ ሴሎች (memory cells) እንዲያዘጋጅ ስለሚያደርጉ ነው።

🌳 Afaan Oromoo:
Talaalliin qaama keenya sirna ittisa dhibee (immune system) kakaasuun akka qaamni farra dhibee oomishu waan gargaaruuf baay'ee barbaachisaadha.`,
    hint: 'Vaccines prime and trigger adaptive immunity by presenting antigens.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q7',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Human Biology: ABO Blood Group Compatibility & Agglutination',
    questionText: '7. Assume you wanted to demonstrate compatibility of blood groups. You took four test tubes labeled O, A, B, and AB based on the blood group that each test tube contains. Then you added unknown blood sample into each test tube and no agglutination was observed in each test tube. From this, you can conclude that the unknown blood sample was',
    options: [
      'blood group B.',
      'blood group O.',
      'blood group A.',
      'blood group AB.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Blood group O red blood cells lack both A and B surface antigens (agglutinogens). When group O red blood cells are added into recipients of any ABO blood type (containing anti-A, anti-B, or no antibodies), no antigen-antibody binding occurs; thus, no agglutination (clumping) is observed in any tube. Group O is the universal red blood cell donor.

🇪🇹 አማርኛ (Amharic):
የደም አይነት ኦ (Blood group O) በቀይ የደም ሴሎቹ ላይ A ወይም B አንቲጅን ስለሌለው፣ በማንኛውም የደም አይነት መፍትሄ ውስጥ ቢጨመርም ምንም አይነት የደም መርጋት/ማጣበቅ (agglutination) አይታይበትም።

🌳 Afaan Oromoo:
Dhiigni gosa 'O' wanta faallaa (antigen) waan hin qabneef dhiiga kamiyyuu wajjin yoo makame itituun (agglutination) hin mul'atu.`,
    hint: 'Type O red blood cells lack A and B antigens, causing zero agglutination when transfused into any blood type.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q8',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Infectious Diseases: STIs and HIV Vulnerability',
    questionText: '8. Which one of the following diseases increases the likelihood of contracting HIV?',
    options: [
      'Syphilis',
      'Chancroid',
      'Tuberculosis',
      'Gonorrhoea'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Sexually transmitted genital ulcer diseases, particularly Chancroid (caused by Haemophilus ducreyi) and Syphilis, create open painful genital lesions and mucosal epithelial breaks that allow the Human Immunodeficiency Virus (HIV) direct access to target CD4+ T lymphocytes, dramatically increasing the risk of HIV transmission and acquisition. In the Ethiopian national syllabus, Chancroid is emphasized as a primary cofactor.

🇪🇹 አማርኛ (Amharic):
የብልት ቁስለትን (ulcers) የሚያስከትሉ እንደ ቻንክሮይድ (Chancroid) እና ሲፊሊስ ያሉ የአባለዘር በሽታዎች የኤችአይቪ (HIV) ቫይረስ ወደ ደም ስርአት በቀላሉ እንዲገባ በማድረግ የመያዝ እድልን በከፍተኛ ደረጃ ይጨምራሉ።

🌳 Afaan Oromoo:
Dhukkuboonni qunnamtii saalaatiin daddarban kanneen akka Chaankiroyidii (Chancroid) madaa uumuudhaan vaayirasiin HIV salphaatti akka qaama keessa galu taasisu.`,
    hint: 'Genital ulcer diseases like Chancroid cause open epithelial lesions that facilitate HIV transmission.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q9',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Food Preservation: Principles of Pasteurization',
    questionText: '9. Even though pasteurization is a technique used to heat milk, beer and other foods, it cannot preserve food unspoiled for years because it',
    options: [
      'cannot kill pathogenic microorganisms.',
      'reduces the nutritional content of the food.',
      'is conducted in containers that are not properly sealed.',
      'uses mild temperature that kills most but not all bacteria (spores survive).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Pasteurization utilizes mild heat treatment (e.g., 72°C for 15 seconds or 63°C for 30 minutes) designed to destroy vegetative pathogenic microorganisms and reduce spoilage organisms without altering food quality. However, it is not sterilization; bacterial endospores and heat-tolerant (thermoduric) microbes survive, eventually causing spoilage if not refrigerated.

🇪🇹 አማርኛ (Amharic):
ፓስቸራይዜሽን (Pasteurization) ወተትን እና መጠጦችን ለዓመታት ሳይበላሹ ማቆየት የማይችለው መካከለኛ ሙቀትን ስለሚጠቀም በሽታ አምጪ ህዋሳትን ቢያጠፋም ሁሉንም ባክቴሪያዎችና ስፖሮችን (endospores) ሙሉ በሙሉ ስለማያጠፋ ነው (kills most but not all bacteria)።

🌳 Afaan Oromoo:
Paascherayizeeshiniin ho'a giddu galeessaa waan fayyadamuuf baakteeriyaa hunda fi ispooroota (endospores) guutummaatti hin ajjeesu.`,
    hint: 'Pasteurization uses mild heat to kill pathogens, leaving bacterial endospores intact.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q10',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Taxonomy: Rules of Binomial Nomenclature',
    questionText: '10. Which one of the following statements is correct about the binomial nomenclature?',
    options: [
      'The genus name is written in full while the species name is abbreviated.',
      'Both genus and species names are capitalized and italicized when printed.',
      'The first letter of genus name is capitalized while the species name is written in small letters.',
      'The genus name is written in English while the species name is written in Latin.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Under the Linnaean system of binomial nomenclature:
1. The scientific name consists of two Latin words: Genus and species epithet.
2. The genus name begins with an uppercase (capitalized) letter.
3. The species name is written entirely in lowercase (small) letters.
4. Both words are italicized when printed or underlined when handwritten (e.g., Homo sapiens).

🇪🇹 አማርኛ (Amharic):
በሳይንሳዊ ስያሜ ሕግ (Binomial nomenclature) መሠረት፣ የጄነስ (genus) የመጀመሪያ ፊደል በትልቅ (capital) ሲጻፍ፣ የስፒሺስ (species) ስም ደግሞ በሙሉ በትንሽ ፊደላት (small letters) ይጻፋል።

🌳 Afaan Oromoo:
Seera moggaasa saayinsaawaa (Binomial nomenclature) keessatti qubeen jalqabaa maqaa jeneesii qubee guddaan (capital) barreeffama, maqaan ispishisii immoo qubee xiqqaadhaan barreeffama.`,
    hint: 'Genus starts with a capital letter, species is entirely in lowercase (e.g., Homo sapiens).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q11',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Human Biology: Alveolar Gas Exchange & Diffusion Gradients',
    questionText: '11. During gas exchange between the alveoli and blood capillaries, oxygen is absorbed by the blood while carbon dioxide is removed. This opposite direction of gas exchange occurs due to',
    options: [
      'difference in the concentration gradient of oxygen and carbon dioxide.',
      'difference in the molecular size of oxygen and carbon dioxide.',
      'thicker layer of the capillaries.',
      'the small surface area of the alveoli.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Respiratory gas exchange in pulmonary alveoli occurs entirely by passive diffusion driven by partial pressure / concentration gradients. Oxygen has a higher partial pressure in the alveoli than in deoxygenated blood, diffusing into the capillaries. Carbon dioxide has a higher partial pressure in blood than in alveolar air, diffusing outward into the alveoli.

🇪🇹 አማርኛ (Amharic):
በአልቪዮላይ እና በደም ስሮች መካከል የጋዝ ልውውጥ በተቃራኒ አቅጣጫ የሚካሄደው በኦክስጅን እና በካርቦን ዳይኦክሳይድ የክምችት ልዩነት (difference in concentration gradient / partial pressure) ምክንያት ነው።

🌳 Afaan Oromoo:
Jijjiirraan gaasotaa sambaa keessatti akkaataa faallaa kanaan kan adeemsifamu garaagarummaa dhiibbaa fi baay'ina gaasota lameenii (concentration gradient) irratti hundaa'eeti.`,
    hint: 'Gases diffuse down their individual partial pressure / concentration gradients.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q12',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Human Physiology: Effects of Exercise on Respiration',
    questionText: '12. Identify the correct statement about the effect of exercise on breathing rate.',
    options: [
      'The vital capacity of the lungs decrease during heavy exercise.',
      'The tidal volume of air at rest is greater than the tidal volume of air during exercise.',
      'Fast and deep breathing are the result of demanding less oxygen.',
      'Exercise and getting fit makes the lungs efficient.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Regular aerobic exercise and physical fitness strengthen respiratory muscles (diaphragm and intercostal muscles), expand lung elasticity and capillary density around alveoli, making pulmonary ventilation and gas exchange much more efficient.

🇪🇹 አማርኛ (Amharic):
አካላዊ እንቅስቃሴ ማድረግ እና የሰውነት ብቃትን ማሳደግ የሳንባዎችን የመተንፈስ ብቃት እና ቅልጥፍና ይጨምራል (Exercise and getting fit makes the lungs efficient)።

🌳 Afaan Oromoo:
Sochiin qaamaa dandeettii fi gahumsa sombaa guddisa (makes the lungs efficient).`,
    hint: 'Physical conditioning improves respiratory muscle strength and gas exchange efficiency.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q13',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Human Biology: Functions of Blood Components',
    questionText: '13. The following is a list of functions of the components of blood.\n1. Transport of oxygen\n2. Fight against diseases\n3. Cause blood clotting\nWhich one of the following is a correct order of blood components responsible for the above functions respectively?',
    options: [
      'White blood cells, platelets, red blood cells',
      'Platelets, white blood cells, red blood cells',
      'Red blood cells, white blood cells, platelets',
      'Red blood cells, platelets, white blood cells'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
1. Transport of oxygen: Red blood cells (Erythrocytes containing hemoglobin).
2. Fight against diseases / immunity: White blood cells (Leukocytes, lymphocytes, phagocytes).
3. Blood clotting / coagulation: Platelets (Thrombocytes).
Thus, the correct respective sequence is: Red blood cells, white blood cells, platelets.

🇪🇹 አማርኛ (Amharic):
1. ኦክስጅን ማጓጓዝ ፦ ቀይ የደም ሴሎች (Red blood cells)
2. በሽታን መከላከል ፦ ነጭ የደም ሴሎች (White blood cells)
3. ደም እንዲረጋ ማድረግ ፦ ፕሌትሌቶች (Platelets)
ስለዚህ ትክክለኛው ቅደም ተከተል አማራጭ C ነው።

🌳 Afaan Oromoo:
1. Oksijiinii geejjibuu: Seelota dhiiga diimaa
2. Dhukkuba ittisuu: Seelota dhiiga adii
3. Dhiiga itichuu: Pilaatleetota.`,
    hint: 'RBCs carry oxygen, WBCs fight infection, and platelets form clots.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q14',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Human Biology: Cardiovascular Valves and Regurgitation',
    questionText: '14. What is the cause of the back flow of blood into the atria from the ventricles? It could be damage of the',
    options: [
      'aorta.',
      'pulmonary artery.',
      'pulmonary vein.',
      'valves (atrioventricular valves: tricuspid / bicuspid).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The atrioventricular (AV) valves (tricuspid valve on the right and bicuspid/mitral valve on the left) prevent blood from flowing backward into the atria during ventricular contraction (systole). If these valves become damaged or incompetent, blood regurgitates back into the atria.

🇪🇹 አማርኛ (Amharic):
ከታችኛው የልብ ክፍሎች (ventricles) ደም ወደ ላይኞቹ ክፍሎች (atria) እንዳይመለስ የሚከላከሉት የልብ ቫልቮች (valves) ናቸው። እነዚህ ቫልቮች ሲጎዱ ደም ወደ ኋላ ይመለሳል።

🌳 Afaan Oromoo:
Dhiigni ventirikilii irraa gara atiriyeemiitti akka duubatti hin deebine kan ittisu vaalvota (valves) dha; yoo miidhaman dhiigni duubatti deebi'a.`,
    hint: 'Heart valves ensure unidirectional blood flow and prevent backflow.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q15',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Human Biology: Capillary Structure and Function',
    questionText: '15. The capillaries are blood vessels that have thin wall and large surface area since their function is',
    options: [
      'transport of oxygenated blood.',
      'exchange of substances (nutrients, gases, and metabolic wastes).',
      'to return blood to the heart.',
      'transport of deoxygenated blood.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Capillaries possess one-cell-thick endothelial walls and branch into vast capillary beds with huge total surface area specifically adapted to optimize rapid diffusion and exchange of respiratory gases (O₂, CO₂), nutrients, and wastes between blood plasma and interstitial tissue fluids.

🇪🇹 አማርኛ (Amharic):
የጥቃቅን የደም ስሮች (Capillaries) ግድግዳ ቀጭን መሆንና ሰፊ የገጽታ ስፋት መያዝ ዋነኛ አላማው በደም እና በቲሹዎች መካከል የምግብ፣ የጋዝ እና የቆሻሻ ንጥረ ነገሮች ልውውጥን (exchange of substances) ለማቀላጠፍ ነው።

🌳 Afaan Oromoo:
Kaappilaariin qalloo fi bal'aa kan ta'eef dhiiga fi tishuuwwan gidduutti jijjiirraa wantootaa (exchange of substances) saffisiisuufi.`,
    hint: 'Thin single-cell walls minimize diffusion distance for substance exchange.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q16',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Sensory Organs: Refraction and Image Focusing in the Human Eye',
    questionText: '16. During image formation, light is refracted twice before it is focused on the retina. This phenomenon happens at the',
    options: [
      'aqueous humour and lens.',
      'iris and lens.',
      'lens and vitreous humour.',
      'cornea and lens.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In the human eye, light rays entering from air undergo primary refraction at the curved air-cornea interface (which provides ~70% of optical power). Light then undergoes adjustable fine-tuning refraction as it passes through the biconvex crystalline lens to focus sharply onto the photoreceptors of the retina.

🇪🇹 አማርኛ (Amharic):
በሰው ዓይን ውስጥ ብርሃን ሬቲና ላይ ከማረፉ በፊት በሁለት ዋና ዋና ቦታዎች ላይ አቅጣጫውን ይቀይራል (refracted)፦ እነሱም ኮርኒያ (cornea) እና ሌንስ (lens) ናቸው።

🌳 Afaan Oromoo:
Ifni gara reetiinaatti osoo hin dhufin yeroo lama dhabama (refract ta'a), kunis korniyaa (cornea) fi leensii (lens) irratti raawwatama.`,
    hint: 'The cornea provides the primary fixed refraction, while the lens provides dynamic adjustable focusing.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q17',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Sensory Biology: Experimental Design on Gustation and Olfaction',
    questionText: '17. Three students designed the following experimental settings to understand the actual taste of a food.\nStudent 1: Blind folded two students, one of them tightly holding the nose while the other without holding the nose and tasting the food.\nStudent 2: Blind folded one student and the other left with open eyes, both holding their nose tightly while tasting the food.\nStudent 3: None of the participants blind folded and only one of them holding her nose tightly while tasting the food.\nStudent 4: None of the participants blind folded and both of them taste the food without holding the nose.\nWhich student designed the most appropriate experiment?',
    options: [
      'Student 1',
      'Student 2',
      'Student 4',
      'Student 3'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In scientific investigations of flavor perception (which combines taste buds and olfactory smell), visual bias must be controlled by blindfolding both participants. Student 1 isolates the single test variable (olfactory sensory input) by having one blindfolded subject hold their nose closed while the other keeps the airway open.

🇪🇹 አማርኛ (Amharic):
ትክክለኛውን የምግብ ጣዕም ስሜት (taste vs smell) ለመመርመር ሁለቱንም ተሳታፊዎች አይናቸውን በመሸፈን የእይታ ተጽዕኖን በማስወገድ፣ አንደኛው አፍንጫውን ይዞ ሌላኛው ሳይይዝ እንዲቀምሱ ያደረገው ተማሪ 1 (Student 1) ትክክለኛ ሳይንሳዊ ሙከራ አዘጋጅቷል።

🌳 Afaan Oromoo:
Barataa 1 ija isaanii lamaanuu hidhuun, tokko funyaan qabatee tokko immoo osoo hin qabatin akka dhandhaman gochuun qorannoo sirrii taaseera.`,
    hint: 'Blindfolding controls visual cues while holding vs releasing the nose tests olfactory contribution.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q18',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Sensory Organs: Visual Defects & Myopia Correction',
    questionText: '18. Short sightedness (myopia) is corrected by a concave lens because the problem arises due to a',
    options: [
      'weak eye lens that converges light slightly.',
      'powerful eye lens that diverges light.',
      'weak eye lens that diverges light.',
      'strong eye lens that converges light too soon (in front of the retina).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Short-sightedness (myopia) occurs when the eyeball is too elongated or the refractive power of the lens/cornea is too strong, converging incoming light rays too soon (in front of the retina rather than directly on it). A diverging (concave) lens slightly spreads the rays before they hit the eye so they focus precisely on the retina.

🇪🇹 አማርኛ (Amharic):
የቅርብ እይታ ችግር (Short sightedness / myopia) የሚፈጠረው የዓይን ሌንስ ከመጠን በላይ ጠንካራ በመሆኑ ብርሃን ሬቲና ላይ ከመድረሱ በፊት ቀድሞ ስለሚሰበሰብ (converges light too soon) ነው፤ ችግሩም በኮንኬቭ ሌንስ (concave lens) ይስተካከላል።

🌳 Afaan Oromoo:
Dhibeen fagootti argu dadhabuu (short sightedness) kan uumamu leensiin qaama ijaa ifa osoo reetiinaa hin gahin dafee waan walitti qabuuf (converges too soon), kanaanis leensii konkaveetiin sirreeffama.`,
    hint: 'In myopia, rays converge prematurely in front of the retina; a concave lens diverges them.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q19',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Endocrine System: Hyperthyroidism Symptoms',
    questionText: '19. A patient exhibited symptoms of weight loss, sweating, and irritability and the doctor suspected an endocrine malfunction that can be related to the',
    options: [
      'pancreas.',
      'adrenal gland.',
      'thyroid gland (hyperthyroidism).',
      'gonads.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The thyroid gland secretes thyroxine (T₄) and triiodothyronine (T₃), which regulate basal metabolic rate (BMR). Hyperthyroidism (excessive thyroid hormone secretion) accelerates cellular metabolism, causing elevated body heat and excessive sweating, rapid weight loss despite normal appetite, and neurological irritability/restlessness.

🇪🇹 አማርኛ (Amharic):
የሰውነት ክብደት መቀነስ፣ ከልክ ያለፈ ላብ እና የመበሳጨት ስሜቶች የታይሮይድ እጢ (Thyroid gland) ከልክ በላይ ሆርሞን በማመንጨቱ (Hyperthyroidism) የሚከሰቱ ምልክቶች ናቸው።

🌳 Afaan Oromoo:
Ulfaatina qaamaa hir'isuu, dafqisiisuu fi aariin mallattoolee xannacha taayirooyidii (thyroid gland) hojii isaa garmalee dabaluu irraa dhufaniidha.`,
    hint: 'Hyperactivity of the thyroid increases basal metabolic rate, causing heat intolerance and weight loss.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q20',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Endocrine System: Endocrine vs Exocrine Gland Organization',
    questionText: '20. Secretions of endocrine glands require receptors on cell membrane to be picked by their targets while exocrine secretions do not. This is because',
    options: [
      'exocrine glands secrete hormone directly to the blood stream.',
      'endocrine glands are ductless (secrete into blood).',
      'exocrine glands are controlled by the nervous system.',
      'endocrine glands produce protein-based hormones.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Endocrine glands are ductless; they release hormones directly into the bloodstream, which circulates them everywhere throughout the body. Therefore, only specific target cells equipped with matching membrane or intracellular receptors can recognize and respond to the hormone. In contrast, exocrine glands secrete their fluids through designated ducts directly to localized target surfaces.

🇪🇹 አማርኛ (Amharic):
ኢንዶክሪን እጢዎች (Endocrine glands) ቱቦ የሌላቸው (ductless) በመሆናቸው ሆርሞኖችን በቀጥታ ወደ ደም ይለቃሉ፤ ደም ደግሞ ወደ ሁሉም የሰውነት ክፍል ስለሚያደርሳቸው ኢላማ የሆኑ ሴሎች ብቻ ልዩ ተቀባይ (receptors) ያስፈልጋቸዋል።

🌳 Afaan Oromoo:
Xannachoonni endookiriinii ujummoo kan hin qabne (ductless) waan ta'aniif hoormoonii gara dhiigaatti gadhisu; kanaanis seelonni barbaadaman qofti fudhachuuf riisepterii barbaadu.`,
    hint: 'Endocrine glands are ductless and distribute hormones systemically via blood.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q21',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Virology: DNA Viruses vs RNA Viruses',
    questionText: '21. Which of the following diseases is caused by a DNA virus?',
    options: [
      'Cold sore (Herpes Simplex Virus)',
      'AIDS (HIV)',
      'Swine flu (Influenza A virus)',
      'Corona (SARS-CoV-2)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Cold sores are caused by Herpes Simplex Virus Type 1 (HSV-1), which is an enveloped, double-stranded DNA virus. In contrast, HIV is a retrovirus (single-stranded RNA), Swine flu is an Influenza virus (negative-sense RNA), and Coronavirus (SARS-CoV-2) is a positive-sense single-stranded RNA virus.

🇪🇹 አማርኛ (Amharic):
ከቀረቡት ውስጥ በዲ ኤን ኤ ቫይረስ (DNA virus) የሚከሰተው በሽታ የከንፈር ቁስለት ወይም ኸርፐስ (Cold sore - Herpes simplex virus) ነው። ኤድስ፣ የጉንፋን ቫይረስ እና ኮሮና ሁሉም የ አር ኤን ኤ (RNA) ቫይረሶች ናቸው።

🌳 Afaan Oromoo:
Dhukkuboota armaan gadii keessaa vaayirasii DNA tiin kan dhufu Madaa afaanii/hidhii (Cold sore / Herpes) dha. AIDS, Kaangroo/Swine flu fi Koronaan vaayirasii RNA ti.`,
    hint: 'Herpes simplex virus (cold sore) possesses a double-stranded DNA genome.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q22',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Ecology & Conservation: Waste Management & Resource Conservation',
    questionText: '22. Currently, natural resources are being depleted at increasing rate and waste materials are accumulated and discharged freely into water bodies. What is the best strategy to overcome these problems?',
    options: [
      'Decomposition',
      'Succession',
      'Fossilization',
      'Recycling'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Recycling is the most sustainable environmental strategy because it repurposes waste materials into new useful products, simultaneously reducing the exploitation and depletion of raw natural resources and drastically decreasing landfill and aquatic waste pollution.

🇪🇹 አማርኛ (Amharic):
የተፈጥሮ ሃብት መመናመንን ለመግታት እና የቆሻሻ መከማቸትን ለመቀነስ ከሁሉ የተሻለው ስትራቴጂ ቆሻሻን መልሶ መጠቀም ወይም ማቀነባበር (Recycling) ነው።

🌳 Afaan Oromoo:
Qabeenya uumamaa qusachuu fi xurii hir'isuuf tooftaan hunda caalu deebisanii fayyadamuu (Recycling) dha.`,
    hint: 'Recycling conserves raw materials and reduces solid/water pollution.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q23',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Biogeochemical Cycles: Nitrogen Cycle & Rhizobium',
    questionText: '23. Which stage of the nitrogen cycle needs the role of Rhizobium?',
    options: [
      'Decomposition',
      'Denitrification',
      'Nitrogen fixation',
      'Nitrification'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Rhizobium is a genus of symbiotic, Gram-negative soil bacteria that inhabit root nodules of leguminous plants, where they catalyze biological nitrogen fixation—converting unreactive atmospheric nitrogen gas (N₂) into bioavailable ammonia (NH₃) using the enzyme nitrogenase.

🇪🇹 አማርኛ (Amharic):
ራይዞቢየም (Rhizobium) የተባለው ባክቴሪያ በናይትሮጅን ዑደት ውስጥ የሚያገለግለው በአየር ላይ ያለውን ናይትሮጅን ጋዝ ወደ አሞኒያ በመቀየር የናይትሮጅን ማሰር ሂደት (Nitrogen fixation) ላይ ነው።

🌳 Afaan Oromoo:
Baakteeriyaan Raayizoobiyeemii marsaa naayitiroojiinii keessatti naayitiroojiinii qilleensaa gara kompaawundiitti jijjiiruuf (Nitrogen fixation) tajaajila.`,
    hint: 'Rhizobium fixes atmospheric nitrogen gas into plant-usable nitrogen compounds.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q24',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Ecology: Ecological Succession Principles',
    questionText: '24. A key aspect in the process of recovery of an ecosystem through succession is that',
    options: [
      'pioneer species always make the environment better (more suitable for successors).',
      'higher organisms colonize the environment first.',
      'a climax community of lichens and mosses is established at the end.',
      'pioneer species always tend to be lower animals.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
During primary or secondary ecological succession, pioneer species (such as lichens, mosses, or hardy grasses) colonize barren substrates, weather rocks, and contribute organic humus upon dying. This gradually enriches the soil and modifies the microclimate, making the environment more hospitable for later, more complex successor species.

🇪🇹 አማርኛ (Amharic):
በስነ-ምህዳር ተከታታይ እድገት (Ecological succession) ውስጥ የጀማሪ ዝርያዎች (pioneer species) ዋና ሚና አካባቢውን በማሻሻልና አፈር በመፍጠር ለቀጣይ ውስብስብ ዝርያዎች ምቹ ማድረግ ነው (make the environment better)።

🌳 Afaan Oromoo:
Marsaa sukkeseeshinii keessatti gosti jalqaba bu'uureffamu (pioneer species) naannicha fooyyessuun biqiltoota itti aananiif mijataa taasisa.`,
    hint: 'Pioneer species alter abiotic conditions to facilitate colonization by later species.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'bio-2014-q25',
    subject: 'Biology',
    year: '2014 E.C.',
    topic: 'Ecology: Biomes & The Boreal Forest (Taiga)',
    questionText: '25. What are the common plants of the boreal forest?',
    options: [
      'Deciduous trees',
      'Conifers (gymnosperms like pines, firs, spruces)',
      'Mosses',
      'Epiphytes'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The boreal forest (also known as the taiga) is characterized by long, sub-arctic freezing winters and short summers. It is dominated by evergreen coniferous trees (gymnosperms) such as pines, spruces, larches, and firs, which have needle-shaped leaves and thick waxy cuticles to withstand cold and minimize snow load.

🇪🇹 አማርኛ (Amharic):
የቦሪያል ደን ወይም ታይጋ (Boreal forest / Taiga) ዋነኛ ተክሎች ኮኒፈሮች (Conifers - እንደ ጥድ ያሉ ሾጣጣ ዛፎች) ናቸው።

🌳 Afaan Oromoo:
Biqiltoonni bosona booriyaalii (Boreal forest / Taiga) keessatti baay'inaan argaman koonifaroota (Conifers) dha.`,
    hint: 'Taiga/boreal forests are dominated by cone-bearing evergreen coniferous trees.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
