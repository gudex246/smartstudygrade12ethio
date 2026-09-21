import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2016_EC_PART3: Question[] = [
  {
    id: 'chem-2016-q41',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Industrial Chemistry: Industrial Synthesis of Ammonia (Haber Process)',
    questionText: '41. Consider the following three sequential operations:\nStep 1: Electrolysis of water and fractional distillation of air (to obtain pure H2 and N2)\nStep 2: Passing the hot equilibrium mixture of gases through a condenser (to liquefy NH3)\nStep 3: Introducing hydrogen and nitrogen gases into a reaction chamber containing iron catalyst particles at a temperature of 300 - 500 °C and a pressure of 15 - 25 MPa\nWhich of the following is the CORRECT sequence of steps involved during the industrial production of ammonia using the Haber process?',
    options: [
      'Step 1 -> Step 3 -> Step 2',
      'Step 2 -> Step 3 -> Step 1',
      'Step 2 -> Step 1 -> Step 3',
      'Step 1 -> Step 2 -> Step 3'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In the Haber-Bosch process for industrial ammonia synthesis:
1. Feedstock preparation (Step 1): Pure N2 is obtained from fractional distillation of liquid air, and H2 is obtained from natural gas reforming or water electrolysis.
2. Catalytic reaction (Step 3): Reactant gases are compressed to 15-25 MPa and heated to 300-500 °C over an iron catalyst: N2 + 3H2 <=> 2NH3.
3. Separation (Step 2): The output mixture is passed through a condenser where ammonia liquefies (-33 °C) and is collected, while unreacted N2 and H2 are recycled.
Thus, the correct sequence is: Step 1 -> Step 3 -> Step 2.

🇪🇹 አማርኛ (Amharic):
የሃበር ፕሮሰስ (Haber process) ትክክለኛ የቅደም ተከተል ደረጃዎች፡
1. ጥሬ እቃዎችን (N2 እና H2) ማዘጋጀት (Step 1)
2. በከፍተኛ ጫና እና የብረት ካታሊስት አማካኝነት አሞንያን ማምረት (Step 3)
3. የተፈጠረውን ጋዝ በኮንደንሰር ውስጥ በማሳለፍ ፈሳሽ አሞንያን መለየት (Step 2)
ስለሆነም ትክክለኛው ቅደም ተከተል Step 1 -> Step 3 -> Step 2 ነው።

🌳 Afaan Oromoo:
Tartiiba oomisha amooniyaa (Haber process): Jalqaba gaasota N2 fi H2 qopheessuu (Step 1) -> Kataliistii fi dhiibbaa fayyadamuun wal-nyaachisuu (Step 3) -> Dhangala\'oo gochuun addaan baasuu (Step 2). Tartiibni sirriin: Step 1 -> Step 3 -> Step 2.`,
    hint: 'Feedstock preparation (Step 1) -> Catalytic reaction in chamber (Step 3) -> Condensation/collection (Step 2).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q42',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Inorganic Chemistry: Physical Properties of Nitric Acid (HNO3)',
    questionText: '42. Which of the following is a physical property of pure nitric acid, HNO3?',
    options: [
      'On exposure to light, it turns brown.',
      'Nitric acid is a corrosive chemical.',
      'Nitric acid has a pungent smell.',
      'It forms large number of salts.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A physical property can be observed or measured without changing the chemical composition of the substance. Having a suffocating, pungent, sharp odor is an intrinsic physical property of nitric acid. (Turning brown is photochemical decomposition; corrosiveness and salt formation are chemical properties/reactions).

🇪🇹 አማርኛ (Amharic):
የፊዚካል ባህሪ (Physical property) የኬሚካሉን ይዘት ሳይቀይሩ የሚታይ ባህሪ ነው። ናይትሪክ አሲድ (HNO3) የሚያፍን እና የሚጎነትል ሽታ (pungent smell) ያለው ሲሆን፤ ይህ ፊዚካላዊ ባህሪው ነው። ሌሎች የተዘረዘሩት ኬሚካላዊ ባህሪያት ናቸው።

🌳 Afaan Oromoo:
Amalli fiizikaalaa wanta tokkoo qabiyyee keemikaalaa isaa osoo hin jijjiirin kan beekamudha; asiidiin naayitiirikii (HNO3) foolii cimaa fi miidhaa qabu (pungent smell) qabaachuun amala fiizikaalaati.`,
    hint: 'Pungent odor is a physical property; decomposition, corrosion, and reaction to form salts are chemical properties.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q43',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Agricultural Chemistry: Mechanism and Function of Herbicides',
    questionText: '43. Which of the following is the CORRECT explanation regarding agricultural herbicides?',
    options: [
      'Selective herbicides control specific weed species, leaving the desired crop unharmed.',
      'Organochlorine compounds are the most common herbicide substances.',
      'Herbicides are substances that are used to control unwanted insects.',
      'Herbicides are substances that are used to enhance the growth of important plants.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Herbicides are chemical pesticides designed to destroy or inhibit unwanted weeds. Selective herbicides (e.g., 2,4-D) target specific weed species while leaving the cultivated crop unharmed through differential absorption, translocation, or metabolic breakdown.

🇪🇹 አማርኛ (Amharic):
አረም ማጥፊያዎች (Herbicides) አረሞችን ለማጥፋት የሚያገለግሉ ሲሆኑ፤ መራጭ አረም ማጥፊያዎች (Selective herbicides) ሰብሉን ሳይጎዱ የታለሙትን አረሞች ብቻ ለይተው ያጠፋሉ።

🌳 Afaan Oromoo:
Qorichi aramaa filatamaa ta\'e (selective herbicides) oomisha qonnaa osoo hin miidhin aramaa adda baasee balleessa.`,
    hint: 'Selective herbicides eliminate targeted weed species without harming the primary crop.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q44',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Applied Chemistry: Traditional Distillation & Araki Production',
    questionText: '44. A student collected the following steps from the community regarding the traditional preparation of the local distilled alcoholic beverage "ARAKI":\nStep 1: Distillation of the fermented liquid mixture in traditional clay/metal apparatus\nStep 2: Adding a proportional amount of water to liquefy the thick dough-like mixture and leaving for 1-2 days for secondary fermentation\nStep 3: Preparation of "Bikel" from germinated barley and "Tinses" starter by mixing Bikel with Gesho (Rhamnus prinoides) powder and initial fermentation\nStep 4: Baking unleavened bread (Kita) from flour, breaking it into pieces, and mixing it into the fermented starter mash for main fermentation\nWhich of the following is the CORRECT sequential procedure for the preparation of Araki?',
    options: [
      'Step 2 -> Step 4 -> Step 3 -> Step 1',
      'Step 2 -> Step 3 -> Step 4 -> Step 1',
      'Step 3 -> Step 4 -> Step 2 -> Step 1',
      'Step 4 -> Step 3 -> Step 2 -> Step 1'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The traditional Ethiopian distillation process for Araki follows four distinct biochemical and physical stages:
1. Starter / Tinses preparation (Step 3): Germinating barley into malt (Bikel), pulverizing with Gesho, and initiating primary fermentation.
2. Mash preparation (Step 4): Baking coarse bread (Kita), breaking it into pieces, and adding it to the starter for primary saccharification/fermentation.
3. Liquefaction (Step 2): Adding water to dilute the thick mash (Ersho/Difdif) and allowing secondary fermentation.
4. Fractional Distillation (Step 1): Heating the fermented mash in an airtight clay pot connected to a condenser to distill and collect the concentrated ethanol distillate (Araki).
Therefore, the correct sequence is: Step 3 -> Step 4 -> Step 2 -> Step 1.

🇪🇹 አማርኛ (Amharic):
የባህላዊ አረቄ ዝግጅት ቅደም ተከተል፡
1. ብቅል እና የጌሾ ጥንሰስ ማዘጋጀት (Step 3)
2. ቂጣ ጋግሮ ቆራርሶ ከጥንሰሱ ጋር ማብላት (Step 4)
3. ውሃ ጨምሮ ለሁለተኛ ማብላት ማቆየት (Step 2)
4. የበሰለውን ድፍድፍ አጥሎ በባህላዊ መንገድ ማጣራት/ማንጠብጠብ (Distillation) (Step 1)
ትክክለኛው ቅደም ተከተል Step 3 -> Step 4 -> Step 2 -> Step 1 ነው።

🌳 Afaan Oromoo:
Tartiiba qophii araqee aadaa: Bikila fi geeshoo qopheessuu (Step 3) -> Qixxaa tolchanii itti makuu (Step 4) -> Bishaan itti dabalanii bilcheessuu (Step 2) -> Yeroo dhumaa kuullii/distillation gaggeessuu (Step 1).`,
    hint: 'Bikel & Tinses starter (3) -> Adding bread mash (4) -> Diluting with water for fermentation (2) -> Distillation (1).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q45',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Polymers: Uses and Commercial Applications of Polyethylene',
    questionText: '45. Which one of the following synthetic polymers is widely used to manufacture squeeze bottles, plastic wrapping films, and electrical wire insulation?',
    options: [
      'Polypropylene',
      'Polymethyl methacrylate',
      'Polyvinylchloride',
      'Polyethylene'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Polyethylene (both low-density LDPE and high-density HDPE) is a flexible, chemically inert, non-polar thermoplastic polymer extensively used for flexible squeeze bottles, plastic food wraps/bags, and electrical wire insulation due to its high dielectric strength.

🇪🇹 አማርኛ (Amharic):
ፖሊኤትሊን (Polyethylene) በቀላሉ የሚታጠፉ የፕላስቲክ ጠርሙሶችን፣ ላስቲኮችን እና የኤሌክትሪክ ሽቦ መከላከያ ሽፋኖችን ለማምረት በስፋት የሚያገለግል ፖሊመር ነው።

🌳 Afaan Oromoo:
'Polyethylene'n qaruurawwan dhangala\'aa, xombora laastikii fi haguugduu shiboo elektiriikii tolchuuf kan oomishamudha.`,
    hint: 'Polyethylene (LDPE/HDPE) is used for squeeze bottles, films, and wire insulation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q46',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Acids, Bases, and Salts: Laboratory Preparation of Bases',
    questionText: '46. Which of the following chemical reactions is commonly used for the preparation of soluble bases (alkalis)?',
    options: [
      'Reaction of metal hydroxides with dilute acids.',
      'Reaction of active metal oxides with water.',
      'Heating of a salt with a non-volatile acid.',
      'Heating of carbonates with dilute acids.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Basic metal oxides (the anhydrides of bases, such as Na2O, K2O, CaO) react with water to form soluble metal hydroxides (bases/alkalis):
Na2O(s) + H2O(l) -> 2NaOH(aq)
CaO(s) + H2O(l) -> Ca(OH)2(aq).

🇪🇹 አማርኛ (Amharic):
ቤዞችን (Bases) ለማዘጋጀት የሚያገለግለው ዋነኛ ዘዴ የብረታብረት ኦክሳይዶች (Basic metal oxides) ከውሃ ጋር የሚፈጥሩት ሪአክሽን ነው፡
CaO + H2O -> Ca(OH)2.

🌳 Afaan Oromoo:
Oksaayidonni sibiilaa yeroo bishaan waliin wal-nyaatan beezii (alkali) uumu: fakkeenyaaf CaO + H2O -> Ca(OH)2.`,
    hint: 'Active metal oxides react with water to produce basic metal hydroxides.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q47',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Industrial Chemistry: Salts in Municipal Water & Wastewater Treatment',
    questionText: '47. Which of the following inorganic salts is commonly used as a coagulant and flocculating agent in the treatment of wastewater?',
    options: [
      'CaCO3',
      'BaSO4',
      'FeCl3',
      'KNO3'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Iron(III) chloride (ferric chloride, FeCl3) is an effective coagulant used in wastewater treatment. When added to water, Fe³⁺ hydrolyzes to form gelatinous Fe(OH)3 precipitates that neutralize negative surface charges on colloidal particles, aggregating them into settleable flocs.

🇪🇹 አማርኛ (Amharic):
የቆሸሸ ፍሳሽ ውሃን (Wastewater) ለማጣራት በብዛት የሚያገለግለው ጨው አይረን ክሎራይድ (FeCl3) ሲሆን፤ ጥቃቅን ቆሻሻዎችን አሰባስቦ በዝናብ መልክ እንዲዘቅጡ (coagulation/flocculation) ያደርጋል።

🌳 Afaan Oromoo:
FeCl3 (ferric chloride) bishaan faalame qulqulleessuuf akka qoricha xurii walitti qabee gadi buusuutti (coagulant) tajaajila.`,
    hint: 'Ferric chloride (FeCl3) is used as a flocculant/coagulant in water purification.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q48',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Acids and Bases: Strong vs Weak Electrolyte Dissociation',
    questionText: '48. A student prepared two beakers, each containing 100 mL of water. The student dissolved 10 mL of concentrated HCl in the first beaker and 10 mL of concentrated CH3COOH in the second beaker. Which of the following would occur in the solutions?',
    options: [
      'In the first beaker, a large fraction of HCl dissociates into ions and in the second beaker, a small fraction of CH3COOH dissociates into ions.',
      'In the first beaker, a small fraction of HCl dissociates into ions and in the second beaker, a large fraction of CH3COOH dissociates into ions.',
      'There is no dissociation or ionization of the HCl and CH3COOH in both the first and second beakers.',
      'The amount of HCl dissociated in the first beaker and the amount of CH3COOH dissociated in the second beaker are identical.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Hydrochloric acid (HCl) is a strong acid that ionizes virtually completely (~100% dissociation) in aqueous solution into H⁺ and Cl⁻ ions.
• Acetic acid (CH3COOH) is a weak electrolyte that establishes an equilibrium where only a small fraction (< 5% dissociation) ionizes into H⁺ and CH3COO⁻ ions.

🇪🇹 አማርኛ (Amharic):
ሃይድሮክሎሪክ አሲድ (HCl) ጠንካራ አሲድ በመሆኑ በውሃ ውስጥ ሙሉ በሙሉ ማለት ይቻላል ወደ አየኖች ይተነተናል (100% ionization)። አሴቲክ አሲድ (CH3COOH) ግን ደካማ አሲድ በመሆኑ በጣም ጥቂቱ ክፍል ብቻ ወደ አየኖች ይተነተናል።

🌳 Afaan Oromoo:
HCl'n asiidii cimaa waan ta\'eef dhibbeentaa guutuu gara ayooniitti faca\'a; asiidiin aseetikii (CH3COOH) immoo asiidii dadhabaa waan ta\'eef kutaan xiqqaatte qofti gara ayooniitti jijjiirama.`,
    hint: 'HCl is a strong acid (nearly 100% ionized); CH3COOH is a weak acid (slightly ionized).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q49',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Metallurgy: Bayer Process and Hall–Héroult Extraction of Aluminum',
    questionText: '49. Consider the following five steps involved in the extraction of aluminum from bauxite ore:\nI. Treating the aluminate solution with acid / CO2 to precipitate aluminum hydroxide\nII. Heating aluminum hydroxide strongly in a rotary furnace (calcination) to produce anhydrous alumina\nIII. Digestion: Heating crude bauxite ore with hot concentrated sodium hydroxide solution under pressure\nIV. Separation and conversion of amphoteric aluminum oxide to soluble sodium aluminate\nV. Hall–Héroult Process: Electrolysis of molten mixture of alumina dissolved in cryolite (Na3AlF6)\nWhich of the following represents the CORRECT sequential flow of aluminum production?',
    options: [
      'III, IV, I, II and V',
      'IV, II, I, III and V',
      'V, I, II, IV and III',
      'II, I, III, IV and V'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The metallurgical extraction of aluminum proceeds via the Bayer Process followed by the Hall-Héroult Electrolysis:
1. Step III: Bauxite is digested with hot aqueous NaOH at high pressure.
2. Step IV: Amphoteric Al2O3 dissolves to form soluble sodium tetrahydroxoaluminate, leaving insoluble iron oxides (red mud).
3. Step I: The solution is neutralized/seeded to precipitate pure Al(OH)3.
4. Step II: Al(OH)3 is calcined at ~1100 °C in a furnace to produce dry pure Al2O3.
5. Step V: Molten Al2O3 dissolved in liquid cryolite is electrolyzed at ~950 °C to yield metallic aluminum at the cathode.
Sequence: III, IV, I, II, V.

🇪🇹 አማርኛ (Amharic):
የአሉሚኒየም ማውጫ ቅደም ተከተል (Bayer and Hall Process)፡
1. ቦክሳይትን በጋለ ናኦህ (NaOH) ማሟሟት (III)
2. አልሙኒየም ወደ ሶዲየም አልሙኔት መቀየር (IV)
3. በአሲድ አክሞ Al(OH)3 ማዝቀጥ (I)
4. በማሞቂያ ውስጥ አግሎ አልሙናን (Al2O3) ማግኘት (II)
5. ክራዮላይት ውስጥ ቀልጦ በኤሌክትሮላይሲስ አሉሚኒየም ማውጣት (V)
ትክክለኛው ቅደም ተከተል III, IV, I, II እና V ነው።

🌳 Afaan Oromoo:
Tartiiba oomisha alumiiniyeemii: Bauxite fi NaOH walitti ho\'isuu (III) -> Gara 'sodium aluminate'tti jijjiiruu (IV) -> Al(OH)3 gadi buusuu (I) -> Ho\'isaan Al2O3 qulqulluu gochuu (II) -> 'Electrolysis' fayyadamuun alumiiniyeemii baasuu (V).`,
    hint: 'Digestion with NaOH (III) -> Solubilization (IV) -> Precipitation (I) -> Calcination (II) -> Electrolysis (V).',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q50',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Food Chemistry: Freeze-Drying & Quality Preservation',
    questionText: '50. Which of the following food preservation methods removes moisture by sublimation under vacuum, preserving the original structure, aroma, and flavor without thermal degradation?',
    options: [
      'Vacuum-packing',
      'Freeze-drying',
      'Freezing',
      'Melting'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Freeze-drying (lyophilization) involves freezing the food product and then reducing the surrounding pressure to allow the frozen water to sublimate directly from the solid phase to the gas phase. Because it avoids high temperatures, delicate volatile aromatic flavor compounds, nutrients, and textures are preserved intact.

🇪🇹 አማርኛ (Amharic):
ፍሪዝ-ድራይንግ (Freeze-drying / Lyophilization) ውሃን በበረዶ መልክ በቀጥታ ወደ ጋዝ (Sublimation) በማስወጣት የምግቡን ጣዕም፣ መዓዛ እና ቫይታሚኖች ሳይጎዳ የሚያቆይ ምርጥ ቴክኖሎጂ ነው።

🌳 Afaan Oromoo:
'Freeze-drying'n adeemsa cabbii keessaa kallattiin gara hurkaatti (sublimation) jijjiiruun dhangaggaa\'aa, foolii fi qabiyyee nyaataa osoo hin miidhin yeroo dheeraaf tursiisudha.`,
    hint: 'Freeze-drying (lyophilization) removes water by ice sublimation, preserving flavor and aroma.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q51',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Laws of Chemical Combination: Law of Conservation of Mass',
    questionText: '51. A student added 25 mL of AgNO3 solution to a beaker and weighed the total mass as m1. He/she added 50 mL of saturated NaCl into a second beaker and weighed it as m2. Finally, the two solutions were mixed together, producing a white precipitate of AgCl, and the combined mass was recorded as m3. If the experiment confirmed that m3 = m1 + m2, which chemical law was demonstrated?',
    options: [
      'Law of conservation of energy',
      'Law of conservation of mass',
      'Law of definite composition',
      'Law of multiple proportions'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The Law of Conservation of Mass (formulated by Antoine Lavoisier) states that matter cannot be created or destroyed in a chemical reaction. The total mass of the reactants before the reaction equals the total mass of the products and remaining contents after the reaction (m3 = m1 + m2).

🇪🇹 አማርኛ (Amharic):
የክብደት መጠበቅ ህግ (Law of Conservation of Mass) በአንድ ኬሚካላዊ ሪአክሽን ወቅት ማተር አይፈጠርም አይጠፋም ይላል። የሪአክታንቶች ጠቅላላ ክብደት (m1 + m2) ከተገኘው ውጤት ክብደት (m3) ጋር እኩል መሆኑ የክብደት መጠበቅ ህግን ያረጋግጣል።

🌳 Afaan Oromoo:
Seerri 'Law of Conservation of Mass' jedhu wal-nyaatinsa keemikaalaa keessatti ulfaatinni wantoota jalqabaa (m1 + m2) fi kan boodaa (m3) qixxee ta\'uu mirkaneessa.`,
    hint: 'Total mass before reaction equals total mass after reaction (m3 = m1 + m2), demonstrating conservation of mass.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q52',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Thermochemistry: Exothermic vs Endothermic Reactions',
    questionText: '52. A chemical reaction that releases heat energy into its surrounding environment is known as an:',
    options: [
      'decomposition reaction',
      'combination reaction',
      'exothermic reaction',
      'endothermic reaction'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
An exothermic reaction is a chemical process that releases thermal energy to its surroundings, characterized by a negative change in enthalpy (ΔH < 0), causing the temperature of the surrounding medium to rise.

🇪🇹 አማርኛ (Amharic):
ሙቀትን ወደ ውጭ አካባቢ የሚለቅ ኬሚካላዊ ሪአክሽን ኤክሶተርሚክ ሪአክሽን (Exothermic reaction) ይባላል (ΔH < 0)።

🌳 Afaan Oromoo:
Wal-nyaatinsi keemikaalaa ho\'a gara naannootti gadi dhiisu 'exothermic reaction' jedhama (ΔH < 0).`,
    hint: 'Exothermic reactions release thermal energy (heat) to the surroundings.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q53',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Types of Chemical Reactions: Double Displacement (Metathesis)',
    questionText: '53. A type of reaction in which two compounds react together by exchanging their constituent cations and anions to form two new products is known as a:',
    options: [
      'Double Displacement reaction',
      'Single Displacement reaction',
      'Decomposition reaction',
      'Combination reaction'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In a double displacement (metathesis) reaction, the positive and negative ions of two distinct ionic compounds exchange partners in aqueous solution according to the general equation: AB + CD -> AD + CB.

🇪🇹 አማርኛ (Amharic):
ሁለት ውህዶች አየኖቻቸውን እርስ በእርስ በመቀያየር አዳዲስ ውህዶችን የሚፈጥሩበት የሪአክሽን አይነት ድርብ መተካካት (Double Displacement reaction) ይባላል።

🌳 Afaan Oromoo:
Wal-nyaatinsi kompaawundonni lama ayoonota isaanii wal-jijjiiruun oomisha haaraa uuman 'Double displacement reaction' jedhama.`,
    hint: 'AB + CD -> AD + CB represents a double displacement (ion exchange) reaction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q54',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Gas Laws: Avogadro\'s Hypothesis',
    questionText: '54. "At a given constant temperature and pressure, equal volumes of all different gases contain equal numbers of molecules." This fundamental gas relationship is known as:',
    options: [
      'Gay-Lussac\'s law',
      'Avogadro\'s law',
      'Charles\' law',
      'Boyle\'s law'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Avogadro\'s Law states that under identical conditions of temperature and pressure, equal volumes of ideal gases contain an equal number of moles (or molecules): V ∝ n.

🇪🇹 አማርኛ (Amharic):
በቋሚ የሙቀት እና የጫና መጠን ላይ ተመሳሳይ ይዘት (volume) ያላቸው የተለያዩ ጋዞች እኩል የሞለኪውሎች ቁጥር ይይዛሉ የሚለው ህግ የአቮጋድሮ ህግ (Avogadro\'s law) ይባላል።

🌳 Afaan Oromoo:
Dhiibbaa fi ho\'a dhaabbataa irratti hanga (volume) wal-qixa kan qaban gaasonni hundi lakkoofsa molakiyuulotaa wal-qixa qabu kan jedhu Seera Avoogaadiroo (Avogadro\'s law) dha.`,
    hint: 'Equal volumes of gases contain equal numbers of particles under the same T and P by Avogadro\'s Law.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q55',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Kinetics: Collision Theory & Reaction Preconditions',
    questionText: '55. According to the collision theory of chemical kinetics, which of the following combinations represents the essential preconditions required for an effective reaction to occur?',
    options: [
      'Activation energy, proper orientation and collision between reactants',
      'Activation energy, pressure and collision between reactants',
      'Temperature, activation energy, proper orientation',
      'Temperature, pressure and proper orientation'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
For a chemical collision to be fruitful (effective collision):
1. Reactant particles must physically collide.
2. Colliding particles must possess kinetic energy equal to or greater than the activation energy (E ≥ Ea).
3. Particles must collide with the proper steric/spatial orientation so that reactive bonds can break and new bonds can form.

🇪🇹 አማርኛ (Amharic):
በግጭት ንድፈ-ሃሳብ (Collision theory) መሰረት ውጤታማ ሪአክሽን እንዲካሄድ 3 ቅድመ-ሁኔታዎች ያስፈልጋሉ፡
1. ቅንጣቶች እርስ በእርስ መጋጨት አለባቸው
2. የግጭቱ ሃይል ከአክቲቬሽን ኢነርጂ (Activation energy) ጋር እኩል ወይም መብለጥ አለበት
3. ትክክለኛ የቦታ አቀማመጥ/አቅጣጫ (Proper orientation) ሊኖራቸው ይገባል።

🌳 Afaan Oromoo:
Akka 'collision theory'tti wal-nyaatinsi tokko akka raawwatamuuf: Wal-itti bu\'iinsa qaamolee, anniisaa kajeeltoo (activation energy), fi kallattii sirrii (proper orientation) qabaachuu qabu.`,
    hint: 'Three conditions: physical collision + energy ≥ Ea + proper spatial orientation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q56',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Kinetics: Catalysts and Activation Energy',
    questionText: '56. How does the addition of a positive catalyst increase the rate of a chemical reaction?',
    options: [
      'By providing an alternative pathway with a lower activation energy.',
      'By increasing the total enthalpy change (ΔH) of the reaction.',
      'By increasing the average kinetic energy of the reactant molecules.',
      'By shifting the equilibrium position towards the product side.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A catalyst increases reaction rate by providing an alternative reaction mechanism with a lower activation energy (Ea) barrier, allowing a greater fraction of colliding molecules to have sufficient energy to react without changing ΔH or equilibrium position.

🇪🇹 አማርኛ (Amharic):
ካታሊስት የሪአክሽን ፍጥነትን የሚጨምረው ዝቅተኛ አክቲቬሽን ኢነርጂ (Lower activation energy) ያለው አማራጭ መንገድ በማዘጋጀት ነው።

🌳 Afaan Oromoo:
Kataliistiin daandii anniisaa kajeeltoo (activation energy) gadi aanaa qabu uumuudhaan saffisa wal-nyaatinsaa dabala.`,
    hint: 'Catalysts lower the activation energy barrier without altering ΔH.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q57',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Equilibrium: Effect of Inert Gas Addition',
    questionText: '57. What is the effect of adding an inert gas (such as Helium or Argon) to an equilibrium gaseous system at constant volume?',
    options: [
      'It has no effect on the equilibrium position or concentrations.',
      'It shifts the equilibrium toward the side with fewer moles of gas.',
      'It shifts the equilibrium toward the side with more moles of gas.',
      'It increases the value of the equilibrium constant Kc.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
When an inert gas is added to a gaseous equilibrium at constant volume, the total pressure increases, but the partial pressures and molar concentrations ([A] = n/V) of the reacting gases remain completely unchanged. Therefore, by Le Chatelier's principle, there is no shift in equilibrium.

🇪🇹 አማርኛ (Amharic):
በቋሚ ይዘት (Constant volume) ላይ የማይሳተፍ ጋዝ (Inert gas) መጨመር የሪአክታንቶችን እና ውጤቶችን ከፊል ጫና እና ኮንሰንትሬሽን ስለማይቀይር በሚዛናዊነቱ ላይ ምንም አይነት ለውጥ አያመጣም።

🌳 Afaan Oromoo:
Iddoo bal\'ina dhaabbataa (constant volume) irratti gaasii socho\'aa hin taane (inert gas) dabaluun qabiyyee fi qixxeeffama wal-nyaatinsichaa irratti jijjiirama hin fidu.`,
    hint: 'At constant volume, adding an inert gas does not change reactant partial concentrations, so no shift occurs.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q58',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Atomic Theory: Quantum Numbers and Orbital Designations',
    questionText: '58. Which quantum number designates the 3D spatial orientation of an atomic orbital around the nucleus?',
    options: [
      'Magnetic quantum number (ml)',
      'Principal quantum number (n)',
      'Azimuthal / Angular momentum quantum number (l)',
      'Spin quantum number (ms)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Principal quantum number (n): size and energy level of the orbital.
• Azimuthal quantum number (l): shape of the orbital (s, p, d, f).
• Magnetic quantum number (ml): spatial orientation of the orbital in 3D space (-l to +l).
• Spin quantum number (ms): electron spin orientation (+1/2, -1/2).

🇪🇹 አማርኛ (Amharic):
ማግኔቲክ ኳንተም ቁጥር (ml) የአቶሚክ ኦርቢታሎችን ባለ ሶስት አቅጣጫዊ (3D) የቦታ አቀማመጥ ይወስናል።

🌳 Afaan Oromoo:
'Magnetic quantum number'n (ml) kallattii orbiitaaliin atoomaa qilleensa keessatti (3D spatial orientation) qabaatu murteessa.`,
    hint: 'Magnetic quantum number (ml) describes the 3D spatial orientation of orbitals.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q59',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Transition Metals: Electron Configuration of Ferric Ion (Fe³⁺)',
    questionText: '59. Which of the following is the core electron configuration of the metal cation present in ferric sulfate, Fe2(SO4)3? (Atomic number of Fe = 26)',
    options: [
      '[Ar] 3d⁵',
      '[Ar] 3d⁶',
      '[Ar] 4s² 3d³',
      '[Ar] 4s² 3d⁶'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Determine the oxidation state of iron in Fe2(SO4)3:
Sulfate is SO4²⁻, so 2(Fe) + 3(-2) = 0 -> Fe is in the +3 oxidation state (Ferric ion, Fe³⁺).

Step 2: Write neutral Fe (Z = 26) configuration:
Fe = [Ar] 4s² 3d⁶.

Step 3: Ionization removes the outermost 4s electrons first, then 3d electrons:
Fe³⁺ loses two 4s electrons and one 3d electron:
Fe³⁺ = [Ar] 3d⁵.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ በ Fe2(SO4)3 ውስጥ የአይረን ቻርጅ +3 (Fe³⁺) ነው
ደረጃ 2፡ የ Fe (Z=26) ኤሌክትሮን ኮንፊግሬሽን፡ [Ar] 4s² 3d⁶
ደረጃ 3፡ 3 ኤሌክትሮኖችን ሲያጣ (ሁለቱ ከ 4s አንዱ ከ 3d ይወጣሉ)፡ [Ar] 3d⁵ ይቀራል።

🌳 Afaan Oromoo:
Atoomii Fe (Z=26) = [Ar] 4s² 3d⁶.
Fe³⁺ elektiroonota 3 (lama 4s irraa fi tokko 3d irraa) yoo dhabu: Fe³⁺ = [Ar] 3d⁵ ta\'a.`,
    hint: 'Fe is [Ar] 4s² 3d⁶. Fe³⁺ loses the two 4s electrons and one 3d electron to give [Ar] 3d⁵.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q60',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Bonding: Nature of Covalent Bonds',
    questionText: '60. A chemical bond that results from the electrostatic attractive force between shared electron pairs and the positively charged nonmetal nuclei is called a:',
    options: [
      'hydrogen bond',
      'metallic bond',
      'covalent bond',
      'ionic bond'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A covalent bond is defined as the electrostatic force of attraction between the shared localized pair of valence electrons and the positive nuclei of the two bonded nonmetal atoms.

🇪🇹 አማርኛ (Amharic):
በጋራ በተጋሩ ኤሌክትሮኖች እና በሁለቱ ኒውክሊየሶች መካከል ባለው የመሳሳብ ሃይል የሚፈጠረው ቦንድ ኮቫለንት ቦንድ (Covalent bond) ይባላል።

🌳 Afaan Oromoo:
Humna harkisaa elektiroonota qooddamanii fi niwukilasoota sibiila-alootaa gidduu jiruun hidhoon uumamu hidhoo kovaaleentii (covalent bond) jedhama.`,
    hint: 'Attraction between shared electron pairs and nonmetal nuclei constitutes a covalent bond.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
