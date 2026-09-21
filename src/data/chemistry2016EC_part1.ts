import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2016_EC_PART1: Question[] = [
  {
    id: 'chem-2016-q1',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Introduction to Chemistry: Scientific Methods & Laboratory Safety',
    questionText: '1. In a scientific investigation, a tentative and testable explanation for an observed natural phenomenon is known as a:',
    options: [
      'Hypothesis',
      'Theory',
      'Scientific Law',
      'Conclusion'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A hypothesis is a tentative, testable, and falsifiable proposition formulated to explain an observed natural phenomenon, which can be evaluated through controlled experimentation.

🇪🇹 አማርኛ (Amharic):
ሃይፖተሲስ (Hypothesis) በሳይንሳዊ ምርምር ወቅት ለተስተዋለ የተፈጥሮ ክስተት የሚሰጥ ጊዜያዊ፣ በሙከራ ሊረጋገጥ ወይም ውድቅ ሊሆን የሚችል መላምት ነው።

🌳 Afaan Oromoo:
'Hypothesis'n ibsa yeroof kennamee fi yaaliidhaan mirkanaa\'uu danda\'u kan taatee uumamaa tokko ibsuuf dhiyaatudha.`,
    hint: 'A tentative explanation subject to experimental testing is a hypothesis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q2',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Measurements: Significant Figures & Precision',
    questionText: '2. How many significant figures are there in the measured value 0.04050 g?',
    options: [
      '4',
      '3',
      '5',
      '6'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Rules for significant figures:
• Leading zeros (0.0...) are place-holders and are NOT significant.
• Non-zero digits (4, 5) are significant.
• Captive zeros between non-zero digits (the zero between 4 and 5) are significant.
• Trailing zeros in a decimal number (the final 0) are significant.
Therefore, the digits 4, 0, 5, 0 give exactly 4 significant figures.

🇪🇹 አማርኛ (Amharic):
የሲግኒፊካንት ቁጥሮች (Significant figures) ህጎች፡
• ከመጀመሪያው ቁጥር በፊት ያሉ ዜሮዎች (0.0) አይቆጠሩም።
• ቁጥሮች (4 እና 5) እና በመካከላቸው ያለው ዜሮ (0) ይቆጠራሉ።
• በዴሲማል መጨረሻ ላይ የሚገኝ ዜሮ ይቆጠራል።
ስለዚህ 4, 0, 5, 0 በአጠቃላይ 4 ሲግኒፊካንት ቁጥሮች አሉት።

🌳 Afaan Oromoo:
Seera lakkoofsa murteessaa (significant figures): Zeeroon dura jiru hin lakkaa\'amu, garuu zeeroon gidduu fi dhumaa waan lakkaa\'amuuf lakkoofsi 0.04050 lakkoofsota murteessoo 4 qaba.`,
    hint: 'Leading zeros are not significant; captive and trailing decimal zeros are significant (4, 0, 5, 0 = 4).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q3',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Classification of Matter: Mixtures and Separation Techniques',
    questionText: '3. Which separation technique is most suitable for separating a mixture of two miscible liquids with significantly different boiling points?',
    options: [
      'Simple distillation',
      'Filtration',
      'Decantation',
      'Centrifugation'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Simple distillation is used to separate homogeneous mixtures of miscible liquids that have a significant difference in their boiling points (typically > 25 °C), utilizing vapor pressure differences.

🇪🇹 አማርኛ (Amharic):
ቀላል ዳይስቲሌሽን (Simple distillation) የተለያዩ የመፍላት ሙቀት (boiling points) ያላቸውን የተደባለቁ ፈሳሾች ለመነጠል የሚያገለግል ተመራጭ ዘዴ ነው።

🌳 Afaan Oromoo:
'Simple distillation'n dhangala\'oowwan walitti makaman kanneen qabxii danfifaa (boiling point) garaagaraa qaban addaan baasuuf gargaara.`,
    hint: 'Distillation separates miscible liquids based on differences in boiling points.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q4',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Solutions: Solubility and "Like Dissolves Like" Principle',
    questionText: '4. A student collected four beakers in his/her laboratory and added some small amounts of the following: naphthalene to the first, graphite to the second, iodine to the third and alcohol to the fourth. If they added equal volume of water to each of the above beakers and shake each beaker, which of the following will be their observation?',
    options: [
      'There will be dissolution in the first three beakers.',
      'Water will dissolve iodine rather than graphite.',
      'Water will dissolve the whole given chemicals in the four beakers.',
      'There will be dissolution of alcohol in the fourth beaker.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to the "like dissolves like" principle:
• Water is a highly polar protic solvent.
• Naphthalene (non-polar hydrocarbon), graphite (covalent network solid), and iodine (non-polar molecular solid) are practically insoluble in water.
• Alcohol (such as ethanol) contains a polar hydroxyl group (-OH) capable of forming strong hydrogen bonds with water molecules, making it completely miscible/soluble.
Thus, dissolution occurs only with alcohol in the fourth beaker.

🇪🇹 አማርኛ (Amharic):
"Like dissolves like" በሚለው የሙሟት መርህ መሰረት፡
• ውሃ ፖላር (polar) ፈሳሽ ነው።
• ናፍታሊን፣ ግራፋይት እና አዮዲን ፖላር ስላልሆኑ በውሃ ውስጥ አይሟሟም።
• አልኮል ግን የሃይድሮጅን ቦንድ ከውሃ ጋር ስለሚፈጥር በውሃ ውስጥ ሙሉ በሙሉ ይሟሟል (በአራተኛው ቢከር ብቻ ሙሟት ይታያል)።

🌳 Afaan Oromoo:
Bishaan dhangala\'aa \'polar\' waan ta\'eef, naafxaliinii, giraafaayitii fi ayoodiinii (non-polar) hin bulbulu. Garuu alkoohilii waliin hidhoo haayidiroojiinii waan uumuuf guutummaatti ni dhangala\'a (bikaarii 4ffaa keessatti).`,
    hint: 'Polar water dissolves polar substances that form hydrogen bonds (alcohol), not non-polar solids.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q5',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Equilibrium: Reversible vs Irreversible Reactions',
    questionText: '5. Which of the following explanations about reversible and irreversible reactions is CORRECT?',
    options: [
      'A reaction that has only a forward reaction or a reverse reaction is known as a reversible chemical reaction.',
      'A reaction that proceeds from reactant to product and from product to reactant is known as an irreversible reaction.',
      'Chemical reactions that proceed only towards the formation of a product are known as irreversible reactions.',
      'Chemical reactions that proceed only towards the formation of a product are known as reversible reactions.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Irreversible reactions proceed in only one direction (reactants are converted completely into products until the limiting reactant is exhausted).
• Reversible reactions proceed simultaneously in both the forward direction (reactants to products) and the reverse direction (products back to reactants).
Therefore, reactions that proceed only towards the formation of products are irreversible reactions.

🇪🇹 አማርኛ (Amharic):
• የማይቀለበስ ሪአክሽን (Irreversible reaction) ወደ ፊት አቅጣጫ ብቻ በመጓዝ ሪአክታንቶችን ሙሉ በሙሉ ወደ ውጤት (products) ይቀይራል።
• የሚቀለበስ ሪአክሽን (Reversible reaction) ወደ ፊትም ወደ ኋላም የሚካሄድ ነው።
ስለዚህ ወደ ውጤት ምስረታ ብቻ የሚያመሩ ሪአክሽኖች የማይቀለበሱ (irreversible) ይባላሉ።

🌳 Afaan Oromoo:
Jaarraan wal-nyaatinsaa kan gara fuulduraatti qofa deemuun oomisha uumu wal-nyaatinsa hin deebine (irreversible reaction) jedhama.`,
    hint: 'Reactions proceeding in one direction only towards completion are irreversible reactions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q6',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'States of Matter: Kinetic Molecular Theory of Gases',
    questionText: '6. From the assumption of kinetic molecular theory of gases, which of the following is CORRECT?',
    options: [
      'The pressure of a gas is the effect of the negligible volume of the gas compared to the total volume of the gas.',
      'The average kinetic energy of gas particles is inversely proportional to the absolute temperature of the gas.',
      'There are some forces of attraction or repulsion between gas particles.',
      'Under ordinary conditions, the total volume of gas molecules is much smaller than the total volume of gas.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
A fundamental postulate of the Kinetic Molecular Theory (KMT) of ideal gases is that gas molecules are separated by great distances relative to their size; hence, the actual volume of the gas molecules is negligible (much smaller) compared to the total container volume.

🇪🇹 አማርኛ (Amharic):
በካይኔቲክ ሞለኪዩላር ፅንሰ-ሃሳብ (KMT) መሰረት በጋዝ ሞለኪውሎች መካከል ያለው ርቀት እጅግ ሰፊ በመሆኑ፣ የጋዝ ሞለኪውሎቹ ትክክለኛ ይዘት (volume) ጋዙ ከያዘው ጠቅላላ ይዘት አንጻር እጅግ በጣም አነስተኛ (negligible) ነው።

🌳 Afaan Oromoo:
Akka yaad-hiddama KMTtti, bal\'inni qaama molakiyuulota gaasii yommuu bal\'ina iddoo gaasichi qabate waliin wal-bira qabamu baay\'ee xiqqaadha.`,
    hint: 'Gas particles are widely spaced, so individual particle volume is negligible compared to container volume.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q7',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Thermodynamics & Phase Changes: Heating Curve of Water',
    questionText: '7. Which of the following is CORRECT about the phase change observed in water?',
    options: [
      'Water starts to evaporate at the boiling point and condenses at the melting point.',
      'When a solid ice is heated, it is changed to liquid water without melting.',
      'At the boiling point temperature, water exists in three different physical states.',
      'At the melting point of ice, the temperature remains constant.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
During a phase transition (such as the melting of ice at 0 °C or boiling of water at 100 °C at 1 atm), the added thermal energy is absorbed as latent heat to overcome intermolecular forces rather than increasing the kinetic energy of the particles. Consequently, the temperature remains constant until the phase transition is complete.

🇪🇹 አማርኛ (Amharic):
በረዶ ወደ ውሃ በሚቀየርበት የመቅለጫ ነጥብ (melting point, 0 °C) ወቅት የሚጨመረው ሙቀት የሞለኪውሎችን ትስስር ለመበተን (Latent heat) ስለሚውል የመቅለጥ ሂደቱ እስኪጠናቀቅ ድረስ የሙቀት መጠኑ ቋሚ ሆኖ ይቆያል።

🌳 Afaan Oromoo:
Yeroo cabbiin baqu (melting point irratti), ho\'i dabalataan kennamu hidhoo diiguuf waan ooluuf, hanga baqee dhumutti ho\'i (temperature) dhaabbataa ta\'ee tura.`,
    hint: 'Temperature remains constant during a phase change due to latent heat.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q8',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Atomic Structure: Subatomic Particles & Absolute Masses',
    questionText: '8. Given the symbols of the three subatomic particles: electrons (e⁻), protons (p⁺) and neutrons (n⁰), which of the following is the CORRECT comparison of the absolute masses of protons, electrons and neutrons?',
    options: [
      'Mass of e⁻ > mass of p⁺ = mass of n⁰',
      'Mass of e⁻ = mass of p⁺ > mass of n⁰',
      'Mass of e⁻ < mass of p⁺ < mass of n⁰',
      'Mass of e⁻ > mass of p⁺ > mass of n⁰'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Comparison of absolute subatomic masses:
• Electron (e⁻): mass ≈ 9.109 × 10⁻³¹ kg (approx. 0.0005486 amu)
• Proton (p⁺): mass ≈ 1.6726 × 10⁻²⁷ kg (approx. 1.007276 amu)
• Neutron (n⁰): mass ≈ 1.6749 × 10⁻²⁷ kg (approx. 1.008665 amu)
Therefore: Mass of e⁻ < mass of p⁺ < mass of n⁰.

🇪🇹 አማርኛ (Amharic):
የንዑሳን አቶም ቅንጣቶች ክብደት ንጽጽር፡
• ኤሌክትሮን (e⁻) ፡ ~ 9.11 × 10⁻³¹ kg
• ፕሮቶን (p⁺) ፡ ~ 1.6726 × 10⁻²⁷ kg
• ኒውትሮን (n⁰) ፡ ~ 1.6749 × 10⁻²⁷ kg
ስለሆነም፡ Mass of e⁻ < mass of p⁺ < mass of n⁰.

🌳 Afaan Oromoo:
Ulfaatinni elektiroonii (e⁻) kan pirootoonii (p⁺) gadi, pirootooniin immoo kan niwutiroonii (n⁰) gadi waan ta\'eef: Mass of e⁻ < mass of p⁺ < mass of n⁰.`,
    hint: 'Electrons are lightest (~1/1836 of proton mass); neutrons are slightly heavier than protons.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q9',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Periodic Table: Group Trends & Electronegativity',
    questionText: '9. In the modern periodic table, what is the name of the group that contains the most electronegative elements?',
    options: [
      'Alkali',
      'Halogens',
      'Chalcogens',
      'Noble gases'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Group 17 (VIIA), the Halogens (F, Cl, Br, I, At), contains the most electronegative elements on the Pauling scale, with Fluorine (F) having the highest electronegativity value of 4.0.

🇪🇹 አማርኛ (Amharic):
በወቅታዊ የንጥረ ነገሮች ሰንጠረዥ (Periodic table) ውስጥ ከፍተኛ የኤሌክትሮኔጋቲቪቲ ዋጋ ያላቸው ንጥረ ነገሮች የሚገኙበት ግሩፕ 17 ሀሎጅንስ (Halogens) ይባላል። ፍሎሪን (Fluorine) የ 4.0 ከፍተኛ ዋጋ አለው።

🌳 Afaan Oromoo:
Gabatee piriyoodikii keessatti gareen elektiroonegativitii olaanaa qaban Haaloojinoota (Halogens, Garee 17) jedhamu; Fulooriiniin gatii olaanaa (4.0) qaba.`,
    hint: 'Group 17 elements (Fluorine, Chlorine, Bromine, Iodine) are called halogens.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q10',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Periodic Properties: Metallic Character & Reactivity of Cesium',
    questionText: '10. A given element has atomic number of 55 and mass number of 133. Which of the following describes CORRECTLY the property of this element?',
    options: [
      'The non-metallic character of the element is high.',
      'The metallic character of the element is high.',
      'The element has high electron affinity.',
      'The element has high electronegativity.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
An element with atomic number 55 is Cesium (Cs), located in Group 1 (Alkali Metals) and Period 6. Because metallic character increases down a group and to the bottom-left of the periodic table, Cesium has an extremely high metallic character, low ionization energy, and low electronegativity.

🇪🇹 አማርኛ (Amharic):
አቶሚክ ቁጥሩ 55 የሆነው ንጥረ ነገር ሲዚየም (Cesium - Cs) ሲሆን በግሩፕ 1 (አልካሊ ብረታብረት) ውስጥ ይገኛል። በሰንጠረዡ ግራና ታችኛው ክፍል የሚገኙ ንጥረ ነገሮች ከፍተኛ የብረታብረት ባህሪ (high metallic character) አላቸው።

🌳 Afaan Oromoo:
Elementiin lakkoofsi atoomaa isaa 55 ta\'e Seeziyeem (Cs) yoo ta\'u, garee 1ffaa keessatti waan argamuuf amalli sibiilummaa (metallic character) isaa baay\'ee olaanaadha.`,
    hint: 'Atomic number 55 is Cesium (Group 1 alkali metal), which has very high metallic character.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q11',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Redox Reactions: Oxidation Numbers & Oxidizing Agents',
    questionText: '11. Given the following oxidation-reduction reaction:\n3H2S + 2HNO3 -> 3S + 2NO + 4H2O\nWhich of the following is CORRECT from the given equation?',
    options: [
      'S is a reducing substance.',
      'HNO3 is an oxidizing agent.',
      'The oxidation number of N is increased.',
      'The oxidation number of S is decreased.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Assigning oxidation numbers:
• In H2S: S is -2; in elemental S: S is 0 (oxidation number increases from -2 to 0 -> S is oxidized; H2S is the reducing agent).
• In HNO3: N is +5; in NO: N is +2 (oxidation number decreases from +5 to +2 -> N is reduced; HNO3 is the oxidizing agent).
Therefore, HNO3 acts as the oxidizing agent.

🇪🇹 አማርኛ (Amharic):
የኦክሲዴሽን ቁጥሮችን ስንመረምር፡
• በ H2S ውስጥ የ S ኦክሲዴሽን ቁጥር ከ -2 ወደ 0 አድጓል (H2S ሪዲዩሲንግ ኤጀንት ነው)።
• በ HNO3 ውስጥ የ N ኦክሲዴሽን ቁጥር ከ +5 ወደ +2 ቀንሷል (HNO3 ተቀንሶ ሌላውን ኦክሲዳይዝ ስላደረገ ኦክሲዳይዚንግ ኤጀንት ነው)።

🌳 Afaan Oromoo:
Lakkoofsi oksideeshinii N keessatti HNO3 (+5) irraa gara NO (+2)tti waan hir\'ateef, HNO3\'n qaama oksidaayisii godhu (oxidizing agent) dha.`,
    hint: 'N goes from +5 in HNO3 to +2 in NO (gain of electrons/reduction), making HNO3 the oxidizing agent.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q12',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Electrochemistry: Electrolytic Cell Reactions in Molten MgCl2',
    questionText: '12. In an electrolytic cell containing molten magnesium chloride (MgCl2), which of the following statements is CORRECT regarding the electrode processes?',
    options: [
      'Magnesium ion acts as an oxidizing agent in the electrode reaction.',
      'There is a decrease in oxidation number of chloride ion.',
      'Oxidation takes place at the cathode.',
      'Reduction takes place at the anode.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In molten MgCl2 electrolysis:
• At the cathode (negative electrode): Mg²⁺ + 2e⁻ -> Mg(l) (reduction). Mg²⁺ accepts electrons from the external circuit, acting as the electron acceptor / oxidizing agent.
• At the anode (positive electrode): 2Cl⁻ -> Cl2(g) + 2e⁻ (oxidation). Chloride oxidation state increases from -1 to 0.

🇪🇹 አማርኛ (Amharic):
በቀለጠ MgCl2 ኤሌክትሮላይሲስ ወቅት፡
• ካቶድ (Cathode) ላይ፡ Mg²⁺ + 2e⁻ -> Mg (ሪዳክሽን ይካሄዳል፤ Mg²⁺ ኤሌክትሮን በመቀበል እንደ ኦክሲዳይዚንግ ኤጀንት ያገለግላል)።
• አኖድ ላይ የክሎራይድ ኦክሲዴሽን ይካሄዳል።

🌳 Afaan Oromoo:
Kaatoodii irratti ayooniin maaginiziyoimii (Mg²⁺) elektiroonii fudhachuun gara Mgtti jijjiirama (reduukshinii), kanaaf akka \'oxidizing agent\'tti tajaajila.`,
    hint: 'Mg²⁺ is reduced at the cathode by accepting electrons, acting as the oxidizing agent.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q13',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Electrochemistry: Molten vs Aqueous Electrolysis',
    questionText: '13. Which of the following is CORRECT about molten electrolytes and aqueous electrolytes?',
    options: [
      'An electrolyte that conducts electricity when dissolved in a certain liquid is molten electrolyte.',
      'During the electrolysis of a molten electrolyte, the reduction of cations occurs at the cathode.',
      'The possible half reactions in molten electrolytes are more compared to aqueous electrolytes.',
      'Both molten and aqueous electrolytes involve preferential discharge of ions at each electrode.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In all electrolytic cells (both molten and aqueous), reduction of cations (positive ions) always occurs at the cathode (the negative electrode). In molten electrolytes, no water is present, eliminating competing reactions and preferential discharge.

🇪🇹 አማርኛ (Amharic):
በማንኛውም የኤሌክትሮላይሲስ ሂደት (በቀለጠም ሆነ በውሃ በተበጠበጠ) ካታዮኖች (አዎንታዊ አየኖች) ወደ ካቶድ በመሄድ ኤሌክትሮን ይቀበላሉ (ሪዳክሽን ይካሄዳል)።

🌳 Afaan Oromoo:
Wal-nyaatinsa elektiroolayisii keessatti yeroo hunda reduukshiniin kaatoyoonotaa (cations) kaatoodii irratti raawwatama.`,
    hint: 'Reduction always occurs at the cathode (Red Cat) in any electrolytic cell.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q14',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Industrial Chemistry: Applications of Electrochemistry',
    questionText: '14. Which of the following is NOT an industrial application of electrochemistry?',
    options: [
      'Electromagnetism',
      'Electro synthesis',
      'Electrolytic refining',
      'Electroplating'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Electromagnetism is a fundamental physical phenomenon/branch of physics describing the interaction of electric currents and magnetic fields. Electroplating, electrosynthesis, and electrolytic refining are direct industrial applications of electrochemistry.

🇪🇹 አማርኛ (Amharic):
ኤሌክትሮማግኔቲዝም (Electromagnetism) የፊዚክስ ዘርፍ ሲሆን፤ የኤሌክትሮኬሚስትሪ የኢንዱስትሪ መተግበሪያዎች ግን ኤሌክትሮፕሌቲንግ፣ ኤሌክትሮላይቲክ ሪፋይኒንግ እና ኤሌክትሮ ሲንተሲስ ናቸው።

🌳 Afaan Oromoo:
'Electromagnetism'n damee fiiziksiiti malee faayidaa indaastirii elektirookeemistirii (kanneen akka electroplating fi refining) miti.`,
    hint: 'Electromagnetism is a branch of physics, not an industrial electrochemical process.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q15',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Industry: Manufacturing Sectors & Products',
    questionText: '15. Which of the following chemical industries is INCORRECTLY matched with its products?',
    options: [
      'Food industry - Biscuits',
      'Paper industry - cartons',
      'Textile industry - glasses',
      'Beverage industry - alcohols'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Glass manufacturing belongs to the silicate/ceramic industry (using silica, soda ash, and limestone), whereas the textile industry manufactures yarns, fabrics, clothing, and fibers.

🇪🇹 አማርኛ (Amharic):
መስተዋት (Glass) የሚመረተው በሲሊኬት/ሴራሚክ ኢንዱስትሪ ውስጥ እንጂ በጨርቃ ጨርቅ (Textile) ኢንዱስትሪ ውስጥ አይደለም።

🌳 Afaan Oromoo:
Fuulli/fayyidaan fuullee (glass) kan oomishamu indaastirii siilikeetii/siiraamikii keessatti malee indaastirii huccuu (textile) keessatti miti.`,
    hint: 'Glasses are produced by the glass and ceramics industry, not the textile industry.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q16',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Equilibrium: Heterogeneous Equilibrium Expression',
    questionText: '16. Given the following heterogeneous reaction:\nCaCO3(s) <=> CaO(s) + CO2(g)\nWhat is the equilibrium constant expression (Kc) for the above reaction?',
    options: [
      'Kc = [CO2]',
      'Kc = [CaO] / [CaCO3]',
      'Kc = [CaO][CO2]',
      'Kc = [CaO][CO2] / [CaCO3]'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In heterogeneous equilibria, the concentrations (activities) of pure solids and pure liquids are constant and defined as 1. Therefore, CaCO3(s) and CaO(s) are omitted from the equilibrium expression, giving:
Kc = [CO2].

🇪🇹 አማርኛ (Amharic):
በተለያዩ ምዕራፎች (Heterogeneous) ሚዛናዊነት ውስጥ የጠጣር (pure solid) ንጥረ ነገሮች ኮንሰንትሬሽን ቋሚ (1) ተደርጎ ስለሚወሰድ ከቀመሩ ውጪ ይደረጋሉ፡
ስለዚህ Kc = [CO2] ይሆናል።

🌳 Afaan Oromoo:
Wal-nyaatinsa jajjaboo fi gaasii qabu keessatti qabiyyeen jajjaboo (pure solid) hin barreeffamu; kanaaf Kc = [CO2] ta\'a.`,
    hint: 'Pure solids are excluded from equilibrium constant expressions: Kc = [CO2].',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q17',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Carboxylic Acids: Chemical Properties & Reactions',
    questionText: '17. Which of the following statements is CORRECT regarding the properties of monocarboxylic acids?',
    options: [
      'Carboxylic acids react with strong bases to form esters and water.',
      'Heating of carboxylic acid with alcohol produces salt and water.',
      'Carboxylic acids react with active metals to form salt and hydrogen gas.',
      'The hydrolysis of carboxylic acids in water produces an ester and water.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Monocarboxylic acids act as typical acids by reacting with electropositive active metals (such as Na, K, Mg, Zn) via single replacement to produce a metal carboxylate salt and liberate hydrogen gas:
2R-COOH + 2Na -> 2R-COONa + H2(g).

🇪🇹 አማርኛ (Amharic):
ካርቦክሲሊክ አሲዶች ከንቁ ብረታብረቶች (Active metals) ጋር ሲገናኙ ጨው እና የሃይድሮጅን ጋዝ (H2) ይፈጥራሉ፡
2RCOOH + 2Na -> 2RCOONa + H2(g).

🌳 Afaan Oromoo:
Asiidotaan kaarbooksiiliikii sibiilota sochii qaban waliin wal-nyaatanii ashaboo fi gaasii haayidiroojiinii (H2) uumu.`,
    hint: 'Carboxylic acids react with active metals to produce carboxylate salts and hydrogen gas.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q18',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Measurements: Scientific Notation',
    questionText: '18. What is the scientific notation for 0.0000055?',
    options: [
      '55 × 10⁻⁵',
      '5.5 × 10⁻⁶',
      '55 × 10⁷',
      '5.5 × 10⁶'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Scientific notation is expressed in the standard form M × 10ⁿ, where 1 ≤ M < 10.
For 0.0000055, the decimal point is moved 6 places to the right:
0.0000055 = 5.5 × 10⁻⁶.

🇪🇹 አማርኛ (Amharic):
ሳይንሳዊ አጻጻፍ (Scientific notation) በ M × 10ⁿ መልክ ሲጻፍ፡
የ 0.0000055 ዴሲማል ወደ ቀኝ 6 ቦታዎች ሲዘዋወር 5.5 × 10⁻⁶ ይሆናል።

🌳 Afaan Oromoo:
Boca saayinsaawaatiin yoo barreeffamu, qabxiin lakkoofsa 0.0000055 iddoo 6 gara mirgaatti waan siquuf 5.5 × 10⁻⁶ ta\'a.`,
    hint: 'Move the decimal point 6 places to the right to get 5.5 × 10⁻⁶.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q19',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Bonding: VSEPR Theory & Electron Pair Repulsion',
    questionText: '19. A water molecule has two bond pairs and two lone pairs of electrons. Which of the following is CORRECT about these pairs of electrons?',
    options: [
      'Bonding pair - lone pair repulsion is greater than lone pair - lone pair repulsion.',
      'Lone pair - lone pair repulsion is exactly identical with bonding pair - bonding pair repulsion.',
      'The repulsion between the two bonding pairs is greater than the repulsion between the two lone pairs.',
      'The repulsion between the two lone pairs is greater than the repulsion between the two bonding pairs.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to VSEPR theory, lone pairs occupy more spatial volume around the central atom because they are held by only one nucleus. Consequently, electron-pair repulsions decrease in the following order:
Lone Pair - Lone Pair > Lone Pair - Bond Pair > Bond Pair - Bond Pair.
Thus, lone pair - lone pair repulsion is greater than bonding pair - bonding pair repulsion.

🇪🇹 አማርኛ (Amharic):
በ VSEPR ቲዮሪ መሰረት ያልተጣመሩ ኤሌክትሮኖች (Lone pairs) ሰፊ ቦታ ስለሚይዙ በመካከላቸው ያለው የመገፋፋት ሃይል (repulsion) በተጣመሩት (bonding pairs) መካከል ካለው እጅግ ይበልጣል፡
Lone Pair - Lone Pair > Lone Pair - Bond Pair > Bond Pair - Bond Pair.

🌳 Afaan Oromoo:
Akka yaad-hiddama VSEPRtti, humanni dhiibbaa elektiroonota qeenxee (lone pairs) gidduu jiru kanneen hidhoo uuman (bonding pairs) gidduu jiru caala.`,
    hint: 'Order of repulsion in VSEPR: Lone Pair - Lone Pair > Lone Pair - Bond Pair > Bond Pair - Bond Pair.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q20',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Acids and Bases: Brønsted–Lowry Conjugate Pairs',
    questionText: '20. Which of the following CORRECTLY describes conjugate acids and conjugate bases according to the Brønsted–Lowry theory?',
    options: [
      'Conjugate acid has one fewer hydrogen and one more minus charge than the corresponding acid.',
      'Conjugate base has one more hydrogen and one fewer minus charge than the corresponding base.',
      'Conjugate acid is a species formed after a removal of a proton from a base whereas conjugate base is formed after addition of proton to an acid.',
      'Conjugate base is a species formed after removal of a proton from an acid whereas conjugate acid is formed after addition of a proton to a base.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to the Brønsted–Lowry acid-base theory:
• When an acid donates a proton (H⁺), the remaining chemical species is its conjugate base (Acid -> H⁺ + Conjugate Base).
• When a base accepts a proton (H⁺), the resulting species is its conjugate acid (Base + H⁺ -> Conjugate Acid).

🇪🇹 አማርኛ (Amharic):
በብሮንስተድ-ላውሪ (Brønsted–Lowry) ህግ መሰረት፡
• አሲድ ፕሮቶን (H⁺) ሲሰጥ ወደ ኮንጁጌት ቤዝ (Conjugate base) ይቀየራል።
• ቤዝ ፕሮቶን (H⁺) ሲቀበል ወደ ኮንጁጌት አሲድ (Conjugate acid) ይቀየራል።

🌳 Afaan Oromoo:
Akka yaad-hiddama Brønsted–Lowrytti: Asiidiin pirootonii (H⁺) yoo kenne gara 'conjugate base'tti jijjiirama, beezin pirootonii yoo fudhatu immoo gara 'conjugate acid'tti jijjiirama.`,
    hint: 'Acid minus H⁺ = Conjugate Base; Base plus H⁺ = Conjugate Acid.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
