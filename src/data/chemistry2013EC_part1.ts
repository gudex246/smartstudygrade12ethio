import { Question } from '../types';

export const CHEMISTRY_2013_EC_PART1: Question[] = [
  {
    id: 'chem-2013-q1',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Equilibrium: Equilibrium Constant Keq',
    questionText: '1. From the magnitude of the equilibrium constant, Keq one can deduce that',
    options: [
      'large Keq value indicates that the reaction reaches equilibrium with very little reactants remaining.',
      'small Keq values indicate the reaction yields very higher amounts of products near equilibrium.',
      'Keq will be larger when we have higher amounts of reactants over products.',
      'intermediate Keq value indicates that the reaction does proceed in the forward direction.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The equilibrium constant is defined as Keq = [Products]^coefficients / [Reactants]^coefficients. A very large Keq value (Keq >> 1) indicates that the equilibrium mixture contains predominantly products with very little reactants remaining, meaning the forward reaction proceeded almost to completion.

🇪🇹 አማርኛ (Amharic):
የተመጣጣኝ ሁኔታ ቋሚ (Keq) ማለት የውጤት ንጥረ ነገሮች ክምችት ለተቀባይ ንጥረ ነገሮች ክምችት ያለው ጥምርታ ነው። ከፍተኛ የ Keq ዋጋ (Keq >> 1) የሚያሳየው ግብረ-መልሱ ወደ ተመጣጣኝ ሁኔታ ሲደርስ አብዛኛው ወደ ውጤት (products) መቀየሩን እና በጣም አነስተኛ ተቀባይ (reactants) ብቻ መቅረቱን ነው።

🌳 Afaan Oromoo:
Dhaabataan madaallii keemikaalaa (Keq) reeshiyoo qabiyyee bu'aalee fi re'aaktantootaa agarsiisa. Gatiin Keq baay'ee guddaa ta'uun isaa re'aakshinichi gara madaalliitti yeroo dhufe bu'aaleen heddumminaan uumamanii re'aaktantonni muraasni qofti akka hafan agarsiisa.`,
    hint: 'Keq = [Products] / [Reactants]. Large Keq means products dominate heavily over reactants.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q2',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Equilibrium: Le-Chatelier\'s Principle',
    questionText: '2. The statement ‘If a system at equilibrium is subjected to a stress, the system will readjust itself to reduce the effects of the stress’ is known as',
    options: [
      'Avogadro\'s principle.',
      'Faradays law.',
      'Le-Chatelier\'s principle.',
      'Boyle\'s law.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Le-Chatelier's Principle states that when a chemical system at dynamic equilibrium is subjected to a disturbance or stress (change in concentration, temperature, or pressure), the system shifts in the direction that counteracts and relieves that stress.

🇪🇹 አማርኛ (Amharic):
የሌ-ሻቴሊየር መርህ (Le-Chatelier's Principle) በተመጣጣኝ ሁኔታ ላይ ያለ አንድ ስርአት ጫና (የሙቀት፣ የክምችት ወይም የግፊት ለውጥ) ሲደርስበት ያንን ጫና ለመቀነስ እና አዲስ ተመጣጣኝ ሁኔታ ለመፍጠር አቅጣጫውን ያስተካክላል የሚል መርህ ነው።

🌳 Afaan Oromoo:
Seerri Le-Chatelier jedha: Sirni madaallii irra jiru tokko yoo jijjiiramni (dhiibbaa, teempireechara, ykn qabiyyee) irratti dhufe, sirnichi dhiibbaa sana hir'isuuf jecha kallattii isaa ofiin sirreessa.`,
    hint: 'Systems in equilibrium shift to relieve external stresses such as changes in concentration, T, or P.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q3',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Kinetics: Law of Mass Action',
    questionText: '3. The law of mass action states that',
    options: [
      'the Keq expression is the ratio of the concentrations of reactants to the products raised to their coefficients.',
      'the rate of a reaction is directly proportional to the product of the concentration of reactants raised to the power of their respective coefficients in the balanced equation.',
      'for a reaction at equilibrium, the reaction quotient, Q is always less than the equilibrium constant, Keq.',
      'a chemical equilibrium is attained only when the reaction is started with reactants.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The Law of Mass Action (proposed by Guldberg and Waage) states that at a constant temperature, the rate of an elementary chemical reaction is directly proportional to the product of the active masses (molar concentrations) of the reacting substances, each raised to the power corresponding to its stoichiometric coefficient.

🇪🇹 አማርኛ (Amharic):
የቁስ እንቅስቃሴ ህግ (Law of Mass Action) በቋሚ የሙቀት መጠን ውስጥ የአንድ ኬሚካላዊ ግብረ-መልስ ፍጥነት ከተቀባይ ንጥረ ነገሮች ሞላር ክምችት ብዜት (በተመጣጠነው እኩልታ ውስጥ ባለው ኮፊሸንት ስኩዌር/ፓወር ተሰልቶ) ጋር በቀጥታ ተመጣጣኝ (directly proportional) ነው ይላል።

🌳 Afaan Oromoo:
Seerri 'Law of Mass Action' jedhu: Teempireechara dhaabbataa irratti saffisni re'aakshinii keemikaalaa baay'ina qabiyyee (concentration) re'aaktantootaa fi koo-effisiyentii isaanii waliin kallattiin wal-madaala.`,
    hint: 'Reaction rate is directly proportional to the product of reactant concentrations raised to stoichiometric powers.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q4',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Equilibrium: Equilibrium Constant Expression',
    questionText: '4. For the reaction between gaseous NO and O2 to form NO2(g), what will be the equilibrium constant expression: 2NO(g) + O2(g) <=> 2NO2(g)?',
    options: [
      'Kp = (P_NO2) / ((P_NO)(P_O2))',
      'Kc = [NO2]^2 / ([NO]^2 [O2])',
      'Kp = (P_NO)^2 (P_O2) / (P_NO2)',
      'Kp = (P_NO2)^2 / ([NO]^2 [O2])'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
For the balanced gaseous reaction 2NO(g) + O2(g) ⇌ 2NO2(g), the equilibrium concentration constant expression is Kc = [NO2]^2 / ([NO]^2 · [O2]). Products are in the numerator raised to their stoichiometric coefficient (2), and reactants are in the denominator raised to their coefficients (2 for NO and 1 for O2).

🇪🇹 አማርኛ (Amharic):
ለተመጣጠነው የጋዝ ግብረ-መልስ 2NO(g) + O2(g) ⇌ 2NO2(g)፣ የክምችት ተመጣጣኝነት ቋሚ (Kc) አገላለጽ Kc = [NO2]^2 / ([NO]^2 · [O2]) ነው። ውጤቶች በአሃዥ (numerator) ላይ በኮፊሸንታቸው ፓወር ሲቀመጡ፣ ተቀባዮች በመከፋፈያው (denominator) ላይ ይቀመጣሉ።

🌳 Afaan Oromoo:
Re'aakshinii 2NO(g) + O2(g) ⇌ 2NO2(g) jedhuuf, herregni dhaabbataa madaallii (Kc) kan ta'u Kc = [NO2]^2 / ([NO]^2 · [O2]) dha. Bu'aan oliitti koo-effisiyentii isaatiin baay'ifama, re'aaktantonni immoo gadiitti ta'u.`,
    hint: 'Kc = [Products]^coefficients / [Reactants]^coefficients.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q5',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Equilibrium: Relationship between Kp and Kc',
    questionText: '5. The equilibrium constant Kp for the reaction 2SO3(g) <=> 2SO2(g) + O2(g) is 3.8 × 10^-3 at 227 °C. What is the value of Kc for the reaction at the same temperature?',
    options: [
      '4.6 × 10^-4 mol m^-3',
      '1.8 × 10^-3 mol m^-3',
      '2.3 × 10^-4 mol m^-3',
      '9.1 × 10^-4 mol m^-3'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Relationship formula: Kp = Kc · (R · T)^Δn.
Here:
T = 227 °C + 273.15 = 500.15 K
Δn = moles of gaseous products - moles of gaseous reactants = (2 + 1) - 2 = 1.
Using R = 0.0821 L·atm/(mol·K):
Kc = Kp / (R · T) = (3.8 × 10^-3) / (0.0821 × 500.15) = (3.8 × 10^-3) / 41.06 = 9.25 × 10^-5 mol/L = 9.1 × 10^-4 mol/m^3 (approx).

🇪🇹 አማርኛ (Amharic):
የ Kp እና Kc ዝምድና: Kp = Kc · (R · T)^Δn ነው።
T = 227 + 273 = 500 K እና Δn = 3 - 2 = 1.
Kc = Kp / (R · T) = (3.8 × 10^-3) / (0.0821 × 500) ≈ 9.1 × 10^-4 mol/m^3።

🌳 Afaan Oromoo:
Walitti dhufeenyi Kp fi Kc: Kp = Kc · (R · T)^Δn dha.
T = 227 + 273 = 500 K fi Δn = (2+1) - 2 = 1.
Kc = Kp / (R · T) = (3.8 × 10^-3) / (0.0821 × 500) ≈ 9.1 × 10^-4 mol/m^3 ta'a.`,
    hint: 'Use Kc = Kp / (R × T)^Δn where Δn = (2 + 1) - 2 = 1 and T = 500 K.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q6',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Electrochemistry: Galvanic Cell Components',
    questionText: '6. In the Galvanic (voltaic) cell given in standard diagrams, identify the component parts correctly labelled for the letters a, b, c, d:',
    options: [
      'Copper anode, Zinc cathode, voltmeter, salt bridge',
      'Zinc anode, Copper cathode, Salt bridge, voltmeter',
      'Copper anode, Zinc anode, CuSO4(sol), voltmeter',
      'Zinc anode, Copper cathode, ZnSO4(sol), salt bridge'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In a standard Daniell / Galvanic cell:
- a = Zinc electrode acts as the Anode (where oxidation Zn -> Zn2+ + 2e- occurs).
- b = Copper electrode acts as the Cathode (where reduction Cu2+ + 2e- -> Cu occurs).
- c = Salt bridge (maintains electrical neutrality).
- d = Voltmeter (measures cell electrical potential difference).

🇪🇹 አማርኛ (Amharic):
በመደበኛ የጋልቫኒክ (ዳንኤል) ሴል ውስጥ:
- a = ዚንክ አኖድ (ኦክሳይድ የሚደረግበት ቦታ)
- b = ኮፐር ካቶድ (ሪደክሽን የሚካሄድበት ቦታ)
- c = የጨው ድልድይ / Salt bridge (የኤሌክትሪክ ገለልተኝነትን የሚጠብቅ)
- d = ቮልትሜትር / Voltmeter (የሴል ቮልቴጅን የሚለካ)

🌳 Afaan Oromoo:
Seelii Galvaaniikii idilee keessatti:
- a = Zinkii Anoodii (iddoo oksideeshiniin itti raawwatu)
- b = Kopharii Kaasoodii (iddoo ridaakshiniin itti raawwatu)
- c = Riqicha soogiddaa / Salt bridge
- d = Vooltmeetirii (dhiibbaa voolteejii seelii kan safaru).`,
    hint: 'Zinc is the negative anode (oxidation); copper is the positive cathode (reduction); salt bridge links solutions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q7',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Industrial Chemistry: Nitrogen Fixation',
    questionText: '7. The conversion of nitrogen gas into useful nitrogen compounds is known as',
    options: [
      'Photosynthesis.',
      'Respiration.',
      'Oxidation.',
      'Fixation.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Nitrogen Fixation is the chemical or biological process by which relatively unreactive atmospheric molecular nitrogen gas (N2) is converted into reactive and biologically useful nitrogen compounds such as ammonia (NH3), nitrates (NO3-), or nitrites (NO2-).

🇪🇹 አማርኛ (Amharic):
የናይትሮጅን ጋዝን (N2) ወደ ጠቃሚ የናይትሮጅን ውህዶች (እንደ አሞኒያ ወይም ናይትሬት) የመቀየር ሂደት ናይትሮጅን ፊክሴሽን (Nitrogen Fixation) ይባላል።

🌳 Afaan Oromoo:
Gaasii naayitiroojiinii (N2) gara kompaawundoota naayitiroojiinii fayyadamoo ta'aniitti (kan akka amooniyaa fi naayitireetii) jijjiiruun Naayitiroojiin Fikseeshiinii (Nitrogen Fixation) jedhama.`,
    hint: 'The biological or chemical transformation of N2 into plant-usable nitrogen forms is called fixation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q8',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Environmental Chemistry: Carbon Cycle',
    questionText: '8. CO2 is released into the atmosphere by one of the following processes:',
    options: [
      'Animals eat plants and release CO2 by photosynthesis.',
      'Plants consume atmospheric carbon dioxide during photosynthesis.',
      'Utilization of electrical energy as energy sources.',
      'Natural fires and volcanoes release CO2 into the air.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Combustion processes (natural forest fires) and volcanic eruptions release large quantities of trapped carbon as carbon dioxide (CO2) directly into the Earth's atmosphere. Photosynthesis consumes CO2 rather than releasing it.

🇪🇹 አማርኛ (Amharic):
የተፈጥሮ የደን ቃጠሎዎች እና የእሳተ-ገሞራ ፍንዳታዎች (volcanoes) ከፍተኛ መጠን ያለው ካርቦን ዳይኦክሳይድ (CO2) ወደ ከባቢ አየር ይለቃሉ። ፎቶሲንተሲስ ካርቦን ዳይኦክሳይድን የሚጠቀመው እንጂ የሚለቀው አይደለም።

🌳 Afaan Oromoo:
Gubannaan bosonaa fi dhohiinsi volkaanowwanii (volcanoes) gaasii kaarboon daayi'oksaayidii (CO2) baay'inaan gara qilleensaatti gadi lakkisu.`,
    hint: 'Volcanic activity and combustion of biomass naturally emit CO2 into the atmosphere.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q9',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Inorganic Chemistry: Properties and Uses of Silicon',
    questionText: '9. One of the following is NOT a common application of silicon:',
    options: [
      'in the control of the frequency of television transmissions.',
      'in the construction of transistors and microprocessors.',
      'in coating iron to prevent it from rusting.',
      'in the production of polish body parts cars.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Iron is coated with zinc (galvanization), tin, chrome, or paints to prevent rusting; silicon is NOT used as an anti-corrosion coating metal on iron. Silicon is predominantly used in microchips, transistors, quartz frequency oscillators, and silicone car polishes.

🇪🇹 አማርኛ (Amharic):
ብረትን (Iron) ከዝገት ለመከላከል በዚንክ (ጋልቫናይዜሽን)፣ በቆርቆሮ (ቲን) ወይም በቀለም ይቀባል እንጂ በሲሊከን አይቀባም። ስለዚህ ሲሊከን ብረትን ከዝገት ለመከላከል መቀቢያ ሆኖ አያገለግልም።

🌳 Afaan Oromoo:
Sibiilli akka hin zangiin zinkii (galvanization) ykn qalamiin dibama malee siilikooniin hin dibamu. Kanaafuu sibiila zangii irraa eeguuf siilikooniin hin tajaajilu.`,
    hint: 'Iron galvanization uses Zinc; silicon is a semiconductor and silicone base, not a metal plating agent.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q10',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Inorganic Chemistry: Chemical Properties of Silicon & Silica',
    questionText: '10. One of the following is NOT among the chemical properties of silicon:',
    options: [
      'Silica is resistant to attack by all acids except HF, which it reacts to give SiF4 and H2O2.',
      'Silicon reacts with CH3Cl at 300 °C in the presence of Cu catalyst to yield silicone polymers.',
      'Silicon occurs as silica (SiO2) and silicate compounds containing the silicate ion (SiO4^4-).',
      'Silica dissolves in hot molten Na2CO3 to give Na4SiO4 and CO2.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Silica (SiO2) reacts with hydrofluoric acid (HF) according to the equation: SiO2 + 4HF -> SiF4 + 2H2O (forming water, H2O, NOT hydrogen peroxide H2O2). Thus statement A is false and not a chemical property.

🇪🇹 አማርኛ (Amharic):
ሲሊካ (SiO2) ከሃይድሮፍሎሪክ አሲድ (HF) ጋር ሲገናኝ የሚፈጥረው ሲሊከን ቴትራፍሎራይድ እና ውሃ (H2O) ነው እንጂ ሃይድሮጅን ፐርኦክሳይድ (H2O2) አይደለም። ስለዚህ አረፍተ-ነገር A የተሳሳተ ነው።

🌳 Afaan Oromoo:
Siilikaan (SiO2) asidii haayidiroofiluwoorikii (HF) wajjin yoo re'aaktii godhu SiF4 fi bishaan (H2O) uuma malee H2O2 hin uumu. Kanaafuu himni A dogoggora.`,
    hint: 'The reaction between SiO2 and HF produces water (H2O), not hydrogen peroxide (H2O2).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q11',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Introduction to Chemistry: Branches of Chemistry',
    questionText: '11. The branch of chemistry that is involved in separation, identifying and determining the relative amounts of components in a sample of material is known as',
    options: [
      'analytical chemistry.',
      'biochemistry.',
      'inorganic chemistry.',
      'physical chemistry.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Analytical chemistry is the scientific branch focused on separating, identifying (qualitative analysis), and quantifying the relative amounts (quantitative analysis) of chemical components within natural and artificial materials.

🇪🇹 አማርኛ (Amharic):
አናሊቲካል ኬሚስትሪ (Analytical Chemistry) የአንድን ናሙና አካላት መለየት (Qualitative) እና አንጻራዊ መጠናቸውን መወሰን (Quantitative) ላይ የሚያተኩር የኬሚስትሪ ዘርፍ ነው።

🌳 Afaan Oromoo:
Keemistiriin xiinxalaa (Analytical Chemistry) damee keemistirii kan qaamolee wanta tokko keessa jiran addaan baasuu, beekuu fi hamma isaanii safaruu irratti xiyyeeffatudha.`,
    hint: 'Qualitative and quantitative determination of sample components belongs to analytical chemistry.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q12',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Measurement and Units: Significant Figures',
    questionText: '12. Significant figures are figures with',
    options: [
      'measured values with the highest accuracy.',
      'measured values with the highest precision.',
      'exactly known digits with the last digit uncertain.',
      'measured values with the highest uncertainty.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Significant figures in any measurement comprise all the reliably known (certain) digits plus one final estimated or uncertain digit reflecting the precision limit of the measuring instrument.

🇪🇹 አማርኛ (Amharic):
ጉልህ አሃዞች (Significant Figures) ማለት በመለኪያ የተገኙ በትክክል የሚታወቁ አሃዞች ሲደመሩ አንድ የመጨረሻው የተገመተ/እርግጠኛ ያልሆነ (uncertain) አሃዝ ናቸው።

🌳 Afaan Oromoo:
Lakkoofsota bu'uuraa (Significant Figures) jechuun lakkoofsota sirritti beekaman hunda dabalatee lakkoofsa isa dhumaa kan tilmaamame (uncertain) of keessaa qaba.`,
    hint: 'Significant figures contain all certain digits plus one single uncertain/estimated last digit.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q13',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Measurement and Calculations: Significant Figures in Density',
    questionText: '13. For the determination of the density of a new ceramic, a student measured the mass of a piece on an analytical balance and obtained 3.8056 gram and its volume 2.5 mL by displacement of water in a graduated cylinder. The correct reported density of the ceramic should be',
    options: [
      '1.5224 g/mL',
      '1.5222 g/mL',
      '3.5 g/mL',
      '1.5 g/mL'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Density = mass / volume = 3.8056 g / 2.5 mL = 1.52224 g/mL.
Under the rules of significant figures for multiplication and division, the result cannot have more significant figures than the measurement with the fewest significant figures. Here, volume (2.5 mL) has 2 significant figures, while mass (3.8056 g) has 5. Therefore, the result must be rounded to 2 significant figures: 1.5 g/mL.

🇪🇹 አማርኛ (Amharic):
ዴንሲቲ = ክብደት / ይዘት = 3.8056 g / 2.5 mL = 1.52224 g/mL።
በማባዛት እና ማካፈል ህግ መሰረት፣ ውጤቱ ዝቅተኛ ጉልህ አሃዝ ባለው ቁጥር ይወሰናል። 2.5 mL ሁለት ጉልህ አሃዞች ስላሉት፣ ውጤቱ ወደ 2 ጉልህ አሃዝ ሲጠጋ 1.5 g/mL ይሆናል።

🌳 Afaan Oromoo:
Densitii = Hanga / Qabiyyee = 3.8056 g / 2.5 mL = 1.52224 g/mL.
Seera lakkoofsa bu'uuraa baay'isuu fi hiruutiin, lakkoofsi bu'uuraa isa xiqqaa (2.5 mL = 2 sig figs) hordofee gabaafama, kunis 1.5 g/mL ta'a.`,
    hint: 'When dividing, round the final answer to match the least number of significant figures (2.5 has 2 sig figs).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q14',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Introduction to Science: The Scientific Method',
    questionText: '14. The scientific method is',
    options: [
      'a method of arriving at an organized body of knowledge based on reproducible experiments and observations.',
      'a collection of scientific guesses and hypotheses by seeking patterns in the observations.',
      'the result of fortunate, accidental discovery in the development of science.',
      'the sum total of unique guidelines for the practice of science in the world.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The scientific method is a systematic, empirical process for investigating phenomena, acquiring new knowledge, and correcting/integrating previous knowledge based on reproducible observations, hypothesis testing, and controlled experimentation.

🇪🇹 አማርኛ (Amharic):
ሳይንሳዊ ዘዴ (Scientific method) ማለት በተደጋጋሚ ሊረጋገጡ በሚችሉ ሙከራዎች እና ምልከታዎች ላይ የተመሰረተ የተደራጀ እውቀትን የማግኛ ስልታዊ መንገድ ነው።

🌳 Afaan Oromoo:
Mala Saayinsii (Scientific Method) jechuun mala qindaa'aa qorannoo, qorannoo irra-deebiin mirkanaa'uu danda'u fi yaalii irratti hundaa'ee beekumsa argachuuti.`,
    hint: 'Science is built upon systematic, reproducible experimentation and objective observation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q15',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Measurement: Sources of Uncertainty',
    questionText: '15. One of the following is NOT a cause of uncertainty in measurement?',
    options: [
      'The person doing the experiment',
      'The type of material measured',
      'The environment where the measurement is made',
      'The measuring device'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Uncertainties in experimental measurements arise from three primary sources: the limitations/skill of the experimenter (human error), environmental variations (fluctuating temperature/humidity), and the inherent calibration and precision limits of the measuring device. The identity of the material being measured is the subject of measurement and does not inherently cause measurement uncertainty.

🇪🇹 አማርኛ (Amharic):
በመለኪያ ውስጥ እርግጠኛ ያለመሆን (Uncertainty) የሚፈጠረው በሞካሪው ሰው ክህሎት ውስንነት፣ በመለኪያ መሳሪያው ጥራት/ትክክለኛነት እና በአካባቢ ሁኔታዎች (ሙቀት፣ ንፋስ) ምክንያት ነው። የሚለካው ቁስ አይነት ግን ራሱ የመለኪያ እርግጠኛ ያለመሆን መንስኤ አይደለም።

🌳 Afaan Oromoo:
Garaagarummaan ykn dogoggorri safaraa dandeettii nama safaruu, meeshaa safaraa fi haala qilleensa naannoo irraa madaala malee akaakuu wanta safaramaa jiru irraa miti.`,
    hint: 'Experimenter skills, instrument calibration, and environmental conditions cause uncertainty.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q16',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Bonding: Hydrogen Bonding',
    questionText: '16. Hydrogen bonding occurs in compounds that contain H-N, H-O and H-F bonds. These bonds are stronger than the ordinary dipole-dipole interactions because',
    options: [
      'the H-N, H-O and H-F bonds are less polar than ordinary covalent bonds.',
      'the partially positive H of one molecule is attracted to the partially negative lone pairs on the N, O or F of another molecule.',
      'the H-N, H-O and H-F bonds are non-polar and thus do not interact with neighboring molecules.',
      'the small sizes of N, O and F makes these atoms so electropositive that their covalently bonded H is highly negative.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Hydrogen bonds are exceptionally strong dipole-dipole attractions because nitrogen, oxygen, and fluorine are highly electronegative and very small, creating an intensely concentrated partial positive charge on hydrogen that strongly attracts lone pairs of adjacent N, O, or F atoms.

🇪🇹 አማርኛ (Amharic):
ሃይድሮጅን ቦንድ ከተለመደው ዳይፖል-ዳይፖል ግንኙነት የሚጠናከረው N፣ O እና F በጣም ኤሌክትሮኔጋቲቭ እና አነስተኛ መጠን ያላቸው በመሆናቸው በሃይድሮጅን ላይ ከፍተኛ ፖዘቲቭ ቻርጅ ስለሚፈጥሩ እና በጎረቤት N, O, F ሎን ፔየር ኤሌክትሮኖች በከፍተኛ ሁኔታ ስለሚሳቡ ነው።

🌳 Afaan Oromoo:
Hidiin Haayidiroojiinii (Hydrogen bond) kan cimuuf N, O fi F'n baay'ee elektiroonegaatiivii fi qinaaxii waan ta'aniif, haayidiroojiiniin chaarjii poozatiivii cimaa argatee liyoon-peeyarii N, O, F biroo wajjin wal-harkisa cimaa uuma.`,
    hint: 'High electronegativity and small sizes of N, O, F create a very strong attraction to polar H.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q17',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Bonding: Exceptions to the Octet Rule',
    questionText: '17. Which of the following is an example of exception to the octet rule?',
    options: [
      'CCl4',
      'NH3',
      'PCl5',
      'H2O'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In phosphorus pentachloride (PCl5), the central phosphorus atom shares 5 pairs of electrons with five chlorine atoms, accommodating 10 valence electrons in its outer shell (expanded octet using 3d orbitals), which is an exception to the octet rule.

🇪🇹 አማርኛ (Amharic):
በ PCl5 (ፎስፈረስ ፔንታክሎራይድ) ውስጥ ማዕከላዊው የፎስፈረስ አተም በውጫዊ ሼሉ 10 ኤሌክትሮኖችን በመያዝ የተስፋፋ ኦክቴት (expanded octet) ስለሚፈጥር የኦክቴት ህግ ልዩ ሁኔታ (exception) ነው።

🌳 Afaan Oromoo:
PCl5 keessatti atoomiin fosfarasii gidduu jiru elektiroonota 10 (expanded octet) waan qabaatuuf seera 'octet rule' irraa addadha ykn kan darbedha.`,
    hint: 'PCl5 has 10 valence electrons around phosphorus, expanding beyond 8 electrons.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q18',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'States of Matter: Types of Crystalline Solids',
    questionText: '18. Which of the following pair is true about the general properties of the different types of crystalline solids? (I. Ionic: Hard, High melting, Conducts in molten/solution; II. Covalent network: Hard, High melting, Poor electrical conduction; III. Molecular: Soft, Low melting, Poor; IV. Metallic: Soft to hard, Good electrical & thermal conduction)',
    options: [
      'II and III',
      'I and III',
      'I and IV',
      'I and II'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Ionic solids are hard with high melting points and conduct electricity when molten or dissolved (I is correct). Metallic solids range from soft to hard with variable melting points and are excellent conductors of both heat and electricity in solid and liquid states (IV is correct).

🇪🇹 አማርኛ (Amharic):
አዮኒክ ድፍኖች (Ionic solids) ጠጣር፣ ከፍተኛ የማቅለጫ ነጥብ ያላቸው እና በፈሳሽ/መፍትሄ ሁኔታ ኤሌክትሪክ የሚያስተላልፉ ናቸው (I ትክክል ነው)። ሜታሊክ ድፍኖች ደግሞ ሙቀትና ኤሌክትሪክን በከፍተኛ ሁኔታ የሚያስተላልፉ ናቸው (IV ትክክል ነው)።

🌳 Afaan Oromoo:
Jajjaboonni ayoonikii (I) jabaa fi qabxii baqinaa guddaa qabu, akkasumas bulbula keessatti elektiriikii dabarsu. Jajjaboonni meetaalawaan (IV) immoo elektiriikii fi ho\'a sirritti dabarsu. Kanaafuu I fi IV sirriidha.`,
    hint: 'Ionic solids conduct in solution/melt; metallic solids conduct in both solid and liquid states.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q19',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'States of Matter: Boiling Points of Group VIA Hydrides',
    questionText: '19. When the boiling points of hydrides of group VIA elements (H2O, H2S, H2Se, and H2Te) are compared, water has an anomalously high boiling point. This is due to',
    options: [
      'the basic different structures of each hydride.',
      'the small size of O compared to the other group VIA elements.',
      'hydrogen bonding present in H2O molecules.',
      'increasing boiling points with increasing molecular mass.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
While boiling points generally increase down group VIA due to increasing molar mass and London dispersion forces (H2S < H2Se < H2Te), water (H2O) has an unusually high boiling point (100 °C) because of strong intermolecular hydrogen bonds between water molecules.

🇪🇹 አማርኛ (Amharic):
የግሩፕ VIA ሃይድራይዶች የመፍላት ነጥብ በሞለኪውላር ክብደት ምክንያት (H2S < H2Se < H2Te) እየጨመረ ቢሄድም፣ ውሃ (H2O) ያልተለመደ ከፍተኛ የመፍላት ነጥብ (100 °C) ያለው በሞለኪውሎቹ መካከል ባለው ጠንካራ የሃይድሮጅን ቦንድ (Hydrogen bonding) ምክንያት ነው።

🌳 Afaan Oromoo:
Haayidiraayidonni garee VIA akkuma ulfaatinni molakiyuulaa dabaluun danfinni isaanii dabala (H2S < H2Se < H2Te), garuu bishaan (H2O) qabxii danfinaa baay'ee ol'aanaa qabaachuun isaa hidhoo haayidiroojiinii (Hydrogen bonding) cimee jiruuni.`,
    hint: 'Intermolecular hydrogen bonds require substantial thermal energy to break in water.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'chem-2013-q20',
    subject: 'Chemistry',
    year: '2013/2014 E.C.',
    topic: 'Chemical Kinetics: Homogeneous vs. Heterogeneous Catalysis',
    questionText: '20. Given the catalyzed reactions: Which reaction is an example of homogeneous catalysis?',
    options: [
      'II: OCl-(aq) + I-(aq) -> OI-(aq) + Cl-(aq) catalyzed in aqueous medium',
      'I and II',
      'IV: CO(g) + H2(g) -> HCHO(g); Cu(s)',
      'II and III'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In homogeneous catalysis, the catalyst and the reacting species exist in the very same physical phase. In reaction II, both reactants (OCl-, I-) and the catalyst/medium are in the aqueous (aq) liquid phase. In reactions I, III, and IV, the reactants are gases while the catalysts (V2O5, Ni, Cu) are solids (heterogeneous).

🇪🇹 አማርኛ (Amharic):
ሆሞጂኒየስ ካታሊሲስ (Homogeneous catalysis) ማለት አፋጣኙ (catalyst) እና ተቀባይ ንጥረ ነገሮቹ በተመሳሳይ የቁስ አካላዊ ምዕራፍ (phase) ውስጥ ሲገኙ ነው። በግብረ-መልስ II ውስጥ ተቀባዮች እና አፋጣኙ በፈሳሽ/አኳየስ (aq) ውስጥ ስለሚገኙ ሆሞጂኒየስ ነው።

🌳 Afaan Oromoo:
Kaataalisiisii Hoomojiniyeesii jechuun re'aaktantonni fi kaataalistiin kutaalee qaamaa (physical phase) walfakkaataa keessatti yeroo argamanidha. Re'aakshinii II keessatti hundi isaanii bishaan keessa (aq) waan jiraniif hoomojiniyeesii dha.`,
    hint: 'Homogeneous catalysis occurs when reactants and catalyst exist in the exact same phase (e.g., all aqueous).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19'
  }
];
