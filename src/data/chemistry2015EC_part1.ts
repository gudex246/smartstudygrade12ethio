import { Question } from '../types';

export const CHEMISTRY_2015_EC_PART1: Question[] = [
  {
    id: 'chem-2015-q1',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Kinetics: Reaction Rate & Concentration',
    questionText: '1. In a kinetic experiment, a student placed crystals of iodine in a closed reaction vessel, introduced a given quantity of hydrogen gas, and collected data to calculate the rate of formation of hydrogen iodide. What would be the effect obtained on the rate of the reaction, if the student takes more amount of iodine from that used in the first experiment?',
    options: [
      'It speeds up the rate of the reaction.',
      'It lowers the rate of the reaction.',
      'The formation of hydrogen iodide will be decreased.',
      'The rate of the reaction will be constant.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
According to collision theory and reaction kinetics, increasing the concentration or amount of a reactant (iodine, I₂) increases the frequency of effective collisions between reactant molecules per unit time, thereby speeding up the rate of the forward reaction: H₂(g) + I₂(g) ⇌ 2HI(g).

🇪🇹 አማርኛ (Amharic):
በኬሚካላዊ ኪነቲክስ መርህ መሰረት፣ የአንድ ተቀባይ (ሬአክታንት) ንጥረ ነገር መጠን ወይም ክምችት ሲጨምር በንጥረ ነገሮች ሞለኪውሎች መካከል ያለው ውጤታማ ግጭት (collision frequency) ስለሚጨምር የግብረ-መልሱ ፍጥነት (rate of reaction) ይጨምራል (speeds up)።

🌳 Afaan Oromoo:
Akka seera kiineetiksii keemikaalaatti, baay'ina ykn heddumina re'aaktantii (Ayoodiinii) dabaluun wal-itti bu'iinsa bu'a qabeessa molakiyuulota gidduu jiru waan dabaluuf saffisa re'aakshinii ni dabalata ykn saffisiisa.`,
    hint: 'Increasing reactant concentration increases effective collision frequency and reaction rate.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q2',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'States of Matter: Vapor Pressure & Boiling Point',
    questionText: '2. Which of the following CORRECTLY relates the vapor pressure of a liquid with its boiling point? Boiling point is',
    options: [
      'the temperature at which all the three physical state co-exist.',
      'the temperature at which the vapor pressure becomes equal to the external pressure.',
      'the temperature at which molecules present in the vapor phase go back to the liquid state.',
      'the temperature at which the kinetic energy of molecules is much less than the intermolecular force.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The boiling point of a liquid is precisely defined as the temperature at which the equilibrium vapor pressure of the liquid equals the external surrounding atmospheric pressure.

🇪🇹 አማርኛ (Amharic):
የአንድ ፈሳሽ የመፍላት ነጥብ (Boiling point) ማለት የፈሳሹ የእንፋሎት ግፊት (vapor pressure) ከውጫዊው የከባቢ አየር ግፊት (external atmospheric pressure) ጋር እኩል የሚሆንበት የሙቀት መጠን ነው።

🌳 Afaan Oromoo:
Qabxiin danfina dhangala'oo (Boiling point) jechuun teempireechara dhiibbaan hurkaa dhangala'ichaa dhiibbaa qilleensaa ykn dhiibbaa alaa (external pressure) wajjin wal-qixa itti ta'udha.`,
    hint: 'Boiling occurs when vapor pressure matches external atmospheric pressure.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q3',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Equilibrium: Le Chatelier\'s Principle',
    questionText: '3. Consider this equilibrium system:\nCO(g) + Fe₃O₄(s) ⇌ CO₂(g) + 3FeO(s)\nWhich of the following disturbances shift the equilibrium position to the right?',
    options: [
      'Removing CO₂(g)',
      'Removing CO(g)',
      'Removing FeO(s)',
      'Adding Fe₃O₄(s)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
According to Le Chatelier\'s Principle, removing a gaseous product (CO₂) reduces its concentration; the system responds by shifting to the right (forward direction) to produce more CO₂. Note that adding or removing pure solids (Fe₃O₄, FeO) has no effect on the equilibrium position because pure solids have constant activity/concentration.

🇪🇹 አማርኛ (Amharic):
በሌ ሻቴሊየር መርህ (Le Chatelier\'s Principle) መሰረት፣ የተፈጠረውን ጋዛዊ ውጤት CO₂(g) ማስወገድ ስርዓቱ ሚዛኑን ለመመለስ ወደ ቀኝ (ወደ ፊት አቅጣጫ) እንዲያዘነብል ያደርገዋል። ደረቅ ጠጣር ነገሮችን (solids) መጨመር ወይም መቀነስ በሚዛን ላይ ለውጥ አያመጣም።

🌳 Afaan Oromoo:
Akka qajeelfama Le Chatelier\'tti, oomisha gaasii kan ta'e CO₂(g) sirnicharraa hir'isuun sirnichi gara mirgaatti (gara fuulduraatti) akka siqu taasisa. Jajjaboon qulqulluun (solids) qabxii madaallii hin jijjiiran.`,
    hint: 'Removing a product gas shifts equilibrium toward the products side (right).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q4',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Bonding: Molecular Orbital Theory',
    questionText: '4. Which one of the following resulted from interaction of the atomic orbitals of bonding atoms to produce new electron distribution associated with the entire molecule?',
    options: [
      'Hybrid orbital',
      'Molecular orbital',
      'Electron orbit',
      'Bohr orbit'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
According to Molecular Orbital (MO) Theory, when atomic orbitals of bonding atoms combine/overlap, they lose their individual identity and form molecular orbitals (bonding, antibonding) that spread over the entire molecule. Hybrid orbitals, by contrast, are formed within individual isolated atoms.

🇪🇹 አማርኛ (Amharic):
ሞለኪውላር ኦርቢታል (Molecular orbital) የሚፈጠረው የተሳሳሪ አተሞች አቶሚክ ኦርቢታሎች እርስ በእርስ ተደራርበው አዲስ የኤሌክትሮን ስርጭት በመላው ሞለኪውል ላይ ሲፈጥሩ ነው።

🌳 Afaan Oromoo:
Moolakiyuulaar oorbitaaliin (Molecular orbital) wal-nyaatinsa oorbiitaalota atoomota wal-qabatanii irraa kan uumamu yoo ta'u, raabsa elektiroonii guutuu moolakiyuulicha keessatti argamsiisa.`,
    hint: 'Combination of atomic orbitals across a whole molecule forms molecular orbitals.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q5',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Organic Chemistry: Esterification Reaction',
    questionText: '5. Which type of organic substances would be produced by heating a mixture of a carboxylic acid and an alcohol in the presence of H₂SO₄?',
    options: [
      'Ketones',
      'Aldehydes',
      'Esters',
      'Ethers'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The acid-catalyzed condensation reaction between a carboxylic acid (R-COOH) and an alcohol (R\'-OH) in the presence of concentrated sulfuric acid (H₂SO₄) produces an ester (R-COO-R\') and water: RCOOH + R\'OH ⇌ RCOOR\' + H₂O (Esterification).

🇪🇹 አማርኛ (Amharic):
ካርቦክሲሊክ አሲድ (carboxylic acid) እና አልኮል (alcohol) በሰልፈሪክ አሲድ (H₂SO₄) አነሳሽነት ሲሞቁ ኤስተር (Esters) እና ውሃ ይፈጥራሉ፤ ይህም ሂደት ኤስተሪፊኬሽን (esterification) ይባላል።

🌳 Afaan Oromoo:
Asiidii kaarboksilikii fi alkooliin dhangala'aa asiidii salfariikii (H₂SO₄) duratti yeroo ho'ifaman Esteerota (Esters) uumu; adeemsi kunis Esteerifikeeshinii jedhama.`,
    hint: 'Carboxylic acid + Alcohol in presence of acid catalyst yields an Ester.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q6',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Redox Reactions: Identifying Reducing Agent',
    questionText: '6. Which one of the following is the reducing agent in the following reaction?\n8NH₃(g) + 6NO₂(g) → 7N₂(g) + 12H₂O(l)',
    options: [
      'NO₂',
      'NH₃',
      'H₂O',
      'N₂'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In NH₃, the oxidation state of Nitrogen is -3. In the product N₂, Nitrogen has an oxidation state of 0. Nitrogen loses electrons (is oxidized) from -3 to 0. Therefore, NH₃ acts as the reducing agent (reductant). Meanwhile, in NO₂, Nitrogen goes from +4 to 0 (is reduced), making NO₂ the oxidizing agent.

🇪🇹 አማርኛ (Amharic):
በNH₃ ውስጥ የናይትሮጅን ኦክሲዴሽን ቁጥር -3 ሲሆን በውጤቱ N₂ ውስጥ 0 ይሆናል። ናይትሮጅን ኤሌክትሮኖችን በማጣት ኦክሲዳይዝድ ስለሆነ NH₃ ሪዲዩሲንግ ኤጀንት (reducing agent) ነው።

🌳 Afaan Oromoo:
NH₃ keessatti lakkoofsi ooksideeshinii Naayitiroojiinii -3 irraa gara 0tti N₂ keessatti ol guddachuun ooksidaayizii ta'eera; kanaafuu NH₃n rejiintii hir'isaa (reducing agent) dha.`,
    hint: 'The substance oxidized (loses electrons / increases oxidation number) is the reducing agent.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q7',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Fundamental Laws of Chemistry: Law of Multiple Proportions',
    questionText: '7. Carbon forms two stable compounds with oxygen, namely, carbon monoxide and carbon dioxide. For a fixed mass of carbon, the ratio of oxygen in carbon monoxide to oxygen in carbon dioxide is 1:2. This result is consistent with the law of',
    options: [
      'definite proportion.',
      'conservation of mass.',
      'constant composition.',
      'multiple proportion.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
John Dalton\'s Law of Multiple Proportions states that when two elements combine to form more than one compound (e.g., CO and CO₂), the masses of one element that combine with a fixed mass of the other are in ratios of small whole numbers (here 16g : 32g = 1:2).

🇪🇹 አማርኛ (Amharic):
ሁለት ንጥረ ነገሮች ከአንድ በላይ ውህዶችን በሚፈጥሩበት ጊዜ (እንደ CO እና CO₂) ከተወሰነ የአንዱ ንጥረ ነገር ግዝፈት ጋር የሚዋሃዱት የሌላኛው ንጥረ ነገር ግዝፈቶች ጥምርታ ቀላል ሙሉ ቁጥሮች (1:2) ይሆናል። ይህ የብዜት ምጥጥን ሕግ (Law of multiple proportion) ይባላል።

🌳 Afaan Oromoo:
Seerri heddummina qooddaa (Law of multiple proportions) elementoonni lama wal-nyaatanii kompaawundii tokkoo ol yeroo uuman, ulfaatinni elementii lammaffaa kan elementii isa duraa wajjin walitti dhufe ratios lakkoofsa guutuu xiqqaatiin (1:2) ta'a jedha.`,
    hint: 'Dalton\'s law for different compounds from the same elements with simple whole-number ratios.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q8',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Equilibrium: Le Chatelier\'s Principle Definition',
    questionText: '8. "When a system at equilibrium is disturbed by a change of variable, the system shifts the equilibrium position in a way that tends to counteract this change of variable." This is a statement for',
    options: [
      'Pauli\'s exclusion principle',
      'Aufbau principle',
      'Heisenberg uncertainty principle',
      'Le Chatelier Principle'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
This is the formal definition of Le Chatelier\'s Principle, which explains how chemical equilibrium systems adjust dynamically to relieve external stresses (temperature, concentration, pressure).

🇪🇹 አማርኛ (Amharic):
ይህ መግለጫ የሌ ሻቴሊየር መርህ (Le Chatelier Principle) ትርጓሜ ሲሆን፣ ሚዛን ላይ ያለ ስርዓት በሙቀት፣ ጫና ወይም ክምችት ለውጥ ሲረበሽ ጫናውን በሚቀንስ አቅጣጫ ራሱን ያስተካክላል።

🌳 Afaan Oromoo:
Kun ibsa qajeelfama Le Chatelier yoo ta'u, sirni madaallii irra jiru jijjiirama dhiibbaa, teempireecharaa ykn kunsantireeshiniitiin yeroo jeequmu gara jijjiirama sana ittisuutti siqa.`,
    hint: 'Equilibrium response to stress is governed by Le Chatelier\'s Principle.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q9',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Chemical Kinetics: Reactant Concentration vs Time Curve',
    questionText: '9. Which one of the following graphs illustrates the rate change in terms of change in reactant concentration with time?',
    options: [
      'A graph where reactant concentration drops sharply and stays flat at a constant line near zero',
      'A graph showing an asymptotic downward curved decay of reactant concentration over time (exponential/curve decay from [R]₀ toward zero)',
      'A straight diagonal line increasing upward with time',
      'A curve starting at zero and leveling off like product growth'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
As a chemical reaction progresses, reactant concentration continually decreases over time. The rate of disappearance is steep at the beginning (high concentration) and flattens out smoothly as reactants are consumed, producing a characteristic downward hyperbolic/exponential decay curve (Graph B).

🇪🇹 አማርኛ (Amharic):
የኬሚካል ግብረ-መልስ በሚካሄድበት ወቅት የተጠቃሚ ንጥረ ነገሮች ክምችት (reactant concentration) ከጊዜ ጋር ወደ ታች እየቀነሰ የሚሄድ ኩርባ ግራፍ (downward decay curve - B) ያሳያል።

🌳 Afaan Oromoo:
Re'aakshiniin yeroo adeemsifamu kunsantireeshiniin re'aaktantii yeroo wajjin gadi bu'aa deema; giraafiin isaas kooftuu gadi bu'aa (decay curve - B) agarsiisa.`,
    hint: 'Reactants are consumed over time, so their curve drops downward progressively.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q10',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Gas Laws: Charles\'s Law',
    questionText: '10. Which one of the following gas laws states the volume of a fixed amount of gas maintained at constant pressure is directly proportional to the absolute temperature of the gas?',
    options: [
      'Charles\' law',
      'Boyle\'s law',
      'Avogadro\'s law',
      'Combined gas law'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Charles\'s Law states that at constant pressure (P), the volume (V) of a given mass of gas is directly proportional to its absolute temperature (T in Kelvin): V ∝ T (or V₁/T₁ = V₂/T₂). Boyle\'s law relates P and V at constant T; Avogadro\'s law relates V and n.

🇪🇹 አማርኛ (Amharic):
የቻርልስ ሕግ (Charles\' law) ጫና (pressure) ቋሚ በሆነበት ሁኔታ የአንድ ጋዝ ይዘት (volume) ከአብሶሉት ቴምፕሬቸሩ (Kelvin temperature) ጋር በቀጥታ ተመጣጣኝ (V ∝ T) ነው ይላል።

🌳 Afaan Oromoo:
Seerri Charles (Charles\' law) dhiibbaa dhaabbataa irratti dhangala'ina (volume) gaasii fi teempireechara guutuu (Kelvin) gidduutti hariiroo qajeelaa (V ∝ T) jiraachuu ibsa.`,
    hint: 'Constant pressure with Volume proportional to Temperature is Charles\'s Law.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q11',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Acid-Base Equilibria: Calculating Ka from pH',
    questionText: '11. The pH of a 0.1 M solution of formic acid (HCOOH) is 3. What is the Ka of the acid?',
    options: [
      '1.01 × 10⁻⁵',
      '1.01 × 10⁻⁷',
      '9.99 × 10⁻⁴',
      '9.99 × 10⁻⁵'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
1. Given pH = 3 ⇒ [H⁺] = 10⁻³ M = 0.001 M.
2. For HCOOH ⇌ H⁺ + HCOO⁻: [H⁺] = [HCOO⁻] = 10⁻³ M.
3. At equilibrium, [HCOOH] = C₀ - [H⁺] = 0.1 - 0.001 = 0.099 M.
4. Ka = ([H⁺][HCOO⁻]) / [HCOOH] = (10⁻³ × 10⁻³) / 0.099 = 10⁻⁶ / 0.099 ≈ 1.01 × 10⁻⁵.

🇪🇹 አማርኛ (Amharic):
1. pH = 3 ሲሆን [H⁺] = 10⁻³ M ይሆናል።
2. [H⁺] = [HCOO⁻] = 1.0 × 10⁻³ M እና [HCOOH] = 0.1 - 0.001 = 0.099 M።
3. Ka = (10⁻³ × 10⁻³) / 0.099 = 1.01 × 10⁻⁵።

🌳 Afaan Oromoo:
1. pH = 3 yoo ta'e [H⁺] = 10⁻³ M ta'a.
2. Ka = [H⁺][HCOO⁻] / [HCOOH] = (10⁻³)² / (0.1 - 0.001) = 1.01 × 10⁻⁵.`,
    hint: 'Use [H+] = 10^(-pH) and Ka = [H+]^2 / (C - [H+]).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q12',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Thermodynamics: First Law of Thermodynamics',
    questionText: '12. A system does 15 J of work and no other changes take place. Which of the following function has fallen by 15 J?',
    options: [
      'Internal energy',
      'Specific heat',
      'Enthalpy',
      'Entropy'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
According to the First Law of Thermodynamics: ΔU = q - w (or ΔU = q + w depending on sign convention). When a system does 15 J of work on the surroundings in an adiabatic process (q = 0), ΔU = 0 - 15 J = -15 J. Thus, the system\'s internal energy (U) falls by 15 J.

🇪🇹 አማርኛ (Amharic):
በቴርሞዳይናሚክስ የመጀመሪያው ሕግ (ΔU = q - w) መሰረት፣ አንድ ስርዓት 15 ጁል ስራ ሲሰራ እና ምንም የሙቀት ልውውጥ ሳይኖር (q=0) የውስጣዊ ሃይል መጠኑ (Internal energy) በ15 ጁል ይቀንሳል።

🌳 Afaan Oromoo:
Seera tokkoffaa teermodaayinaamiksiitiin (ΔU = q - w), sirni tokko hojii 15 J yoo hojjete anniisaan keessoo (Internal energy) isaa 15 Jn gadi bu'a.`,
    hint: 'Energy conservation: doing work at expense of internal energy decreases ΔU.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q13',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Thermodynamics: Gibbs Free Energy & Reaction Spontaneity',
    questionText: '13. Which of the following is CORRECTLY stated about the spontaneity of a reaction?',
    options: [
      'For an endothermic reaction with negative reaction entropy, the reaction is spontaneous at all temperature.',
      'For an exothermic reaction with positive reaction entropy, the reaction is non-spontaneous at all temperature.',
      'For an endothermic reaction with positive reaction entropy, the reaction is non-spontaneous at low temperature.',
      'For an exothermic reaction with negative reaction entropy, the reaction is spontaneous at high temperature.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
From the Gibbs equation ΔG = ΔH - TΔS:
For an endothermic reaction (ΔH > 0) with positive entropy (ΔS > 0):
- At low temperatures: TΔS is small, making ΔG > 0 (non-spontaneous).
- At high temperatures: TΔS becomes large and dominates, making ΔG < 0 (spontaneous).
Thus, C is correct.

🇪🇹 አማርኛ (Amharic):
በጊብስ ቀመር (ΔG = ΔH - TΔS) መሰረት፡- ኤንዶተርሚክ (ΔH > 0) እና ፖዘቲቭ ኢንትሮፒ (ΔS > 0) ያለው ግብረ-መልስ በዝቅተኛ የሙቀት መጠን (low temperature) ላይ TΔS አነስተኛ ስለሚሆን ΔG > 0 ሆኖ ራሱን ችሎ የማይካሄድ (non-spontaneous) ይሆናል።

🌳 Afaan Oromoo:
Waliigala Gibbs tiin (ΔG = ΔH - TΔS), re'aakshinii ho'a xuuxaa (ΔH > 0) fi eentiroopii poozatiivii (ΔS > 0) qabuuf, teempireechara gadi aanaa irratti re'aakshinichi ofumaan kan hin raawwanne (non-spontaneous) ta'a.`,
    hint: 'ΔG = ΔH - TΔS: When ΔH > 0 and ΔS > 0, the reaction is non-spontaneous at low T and spontaneous at high T.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q14',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Thermodynamics: Definitions of System vs Surroundings',
    questionText: '14. In thermodynamics: solutions in a beaker, a gas in a cylinder, a reaction vessel, a biological cell are examples of a',
    options: [
      'thermodynamic variables',
      'state function',
      'path function',
      'thermodynamic system'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In thermodynamics, a thermodynamic system is the specific part of the universe selected for thermodynamic observation and study (e.g., solution in a beaker, gas inside a piston cylinder, living cell). Everything outside it is the surroundings.

🇪🇹 አማርኛ (Amharic):
በቴርሞዳይናሚክስ ጥናት ውስጥ፣ ለሙከራና ለምርመራ የተመረጠው የአጽናፈ ዓለሙ የተለየ ክፍል (ለምሳሌ በቢከር ውስጥ ያለ መፍትሄ፣ በሲሊንደር ውስጥ ያለ ጋዝ፣ ሕዋስ) የቴርሞዳይናሚክ ስርዓት (thermodynamic system) ይባላል።

🌳 Afaan Oromoo:
Teermodaayinaamiksii keessatti, kutan yuunibarsii qorannoof adda baafame (fakkeenyaaf dhangala'oo biikarii keessaa, gaasii silindarii keessaa) sirna teermodaayinaamiksii (thermodynamic system) jedhama.`,
    hint: 'The specific entity or region under study is the thermodynamic system.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q15',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Thermochemistry: Bond Energies & Enthalpy of Reaction',
    questionText: '15. Given the following bond energies (kJ/mol):\n• H-H: 436 kJ/mol\n• N-N: 193 kJ/mol\n• N=N: 409 kJ/mol\n• N≡N: 942 kJ/mol\nand the enthalpy for the reaction: 1/2 N₂(g) + 3/2 H₂(g) → NH₃(g); ΔH = -45 kJ/mol\nWhat is the bond energy for N-H (in NH₃)?',
    options: [
      '1125 kJ/mol',
      '1170 kJ/mol',
      '960 kJ/mol',
      '390 kJ/mol (Total for 3 N-H bonds is 1170, per bond is 390)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Reaction: 1/2 N≡N + 3/2 H-H → NH₃ (containing 3 N-H bonds).
ΔH_rxn = Σ(Bond energy of bonds broken) - Σ(Bond energy of bonds formed)
-45 = [ 1/2(BE of N≡N) + 3/2(BE of H-H) ] - 3(BE of N-H)
-45 = [ 1/2(942) + 3/2(436) ] - 3(BE of N-H)
-45 = [ 471 + 654 ] - 3(BE of N-H) = 1125 - 3(BE of N-H)
3(BE of N-H) = 1125 + 45 = 1170 kJ/mol
Total bond energy for NH₃ (3 bonds) is 1170 kJ/mol (average N-H single bond energy = 1170 / 3 = 390 kJ/mol).

🇪🇹 አማርኛ (Amharic):
የተሰበረ ቦንድ = 1/2(942) + 3/2(436) = 471 + 654 = 1125 kJ/mol።
-45 = 1125 - 3(N-H)
3(N-H) = 1170 kJ/mol (ለNH₃ አጠቃላይ 3 ቦንዶች 1170 ሲሆን፣ ለአንዱ N-H ቦንድ 390 kJ/mol ይሆናል)።

🌳 Afaan Oromoo:
ΔH = Boondii caccabe - Boondii uumame
-45 = [ 1/2(942) + 3/2(436) ] - 3(N-H) = 1125 - 3(N-H)
3(N-H) = 1170 kJ/mol (boondii tokkoof 390 kJ/mol).`,
    hint: 'Apply ΔH = Σ(Bonds broken) - Σ(Bonds formed). Total bond energy of NH3 is 1170 kJ/mol.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q16',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Reaction Mechanisms: Rate Determining Step',
    questionText: '16. The rate law for: (CH₃)₃C-Br(aq) + H₂O(l) → (CH₃)₃C-OH(aq) + H⁺ + Br⁻ is rate = k[(CH₃)₃C-Br].\nThe accepted mechanism for the reaction is:\nI. (CH₃)₃C-Br(aq) → (CH₃)₃C⁺(aq) + Br⁻(aq) [slow]\nII. (CH₃)₃C⁺(aq) + H₂O(l) → (CH₃)₃C-OH₂⁺(aq) [fast]\nIII. (CH₃)₃C-OH₂⁺(aq) → H⁺ + (CH₃)₃C-OH(aq) [fast]\nWhy DOES NOT H₂O appear in the rate law? Because',
    options: [
      'water is a catalyst in the reaction.',
      'water is an intermediate species.',
      'water exists in the liquid state in the reaction.',
      'water is missing in the rate determining step.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The rate law of an overall multi-step reaction is governed entirely by the slow step (the rate-determining step, Step I). Because water (H₂O) participates only in the subsequent fast steps (Step II) and does not take part in the slow rate-determining elementary step, its concentration does not appear in the rate law.

🇪🇹 አማርኛ (Amharic):
የአንድ ግብረ-መልስ የፍጥነት ሕግ (Rate law) የሚወሰነው በቀስታው ደረጃ (Rate determining step - Step I) ብቻ ነው። ውሃ (H₂O) የሚሳተፈው በቀጣዮቹ ፈጣን ደረጃዎች ውስጥ ስለሆነ በደረጃ 1 (rate-determining step) ውስጥ ስለሌለ በፍጥነት ሕጉ ውስጥ አይካተትም።

🌳 Afaan Oromoo:
Seerri saffisaa (Rate law) sadarkaa suutaawaa (rate determining step) irratti qofa hundaa'a. Bishaan (H₂O) sadarkaa suutaawaa keessatti waan hin hirmaanneef seera saffisaa keessatti hin barreeffamu.`,
    hint: 'Only species involved in the slow (rate-determining) step appear in the rate law.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q17',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Organic Chemistry: Structure of Triglycerides (Fats & Oils)',
    questionText: '17. Which type of substances has the general formula consisting of a glycerol backbone ester-linked to three fatty acid acyl groups: H₂C-O-CO-R₁, HC-O-CO-R₂, H₂C-O-CO-R₃ (where R₁, R₂, R₃ are hydrocarbon chains)?',
    options: [
      'Carboxylic acids',
      'Fats',
      'Alcohols',
      'Fatty acids'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The structural formula shown is a triglyceride (triester of glycerol and three long-chain fatty acids), which is the primary chemical structure of fats and vegetable oils.

🇪🇹 አማርኛ (Amharic):
የቀረበው የኬሚካል ቀመር ትራይግሊሰራይድ (Triglyceride - ግሊሰሮል ከሶስት ፋቲ አሲዶች ጋር የተዋሃደበት) ሲሆን የስብና የቅባት (Fats and oils) መሰረታዊ መዋቅር ነው።

🌳 Afaan Oromoo:
Foorimulaan kun Tiraayigiliisaraayidii (Triglyceride) kan agarsiisu yoo ta'u, qaama bu'uuraa dhangala'aa fi jajjaboo koompaawundoota Coomaa/Qubanyee (Fats) ti.`,
    hint: 'A triester formed by glycerol and three fatty acid chains represents a Fat (triglyceride).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q18',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Reaction Mechanisms: Deriving Rate Laws',
    questionText: '18. The rate law for the reaction:\nCO(g) + NO₂(g) → CO₂(g) + NO(g) is rate = k[NO₂]².\nWhich one of the following could be a plausible mechanism for the reaction?',
    options: [
      'NO₂(g) + NO₂(g) → NO₃(g) + NO(g) [slow]\nNO₃(g) + CO(g) → NO₂(g) + CO₂(g) [fast]',
      'NO₃(g) + NO(g) → NO₂(g) + NO₂(g) [slow]\nNO₃(g) + CO(g) → NO₂(g) + CO₂(g) [fast]',
      'NO₃(g) + NO(g) → NO₂(g) + NO₂(g) [slow]\nNO₂(g) + CO₂(g) → NO₃(g) + CO(g) [fast]',
      'NO₂(g) + NO₂(g) → NO₃(g) + NO(g) [fast]\nNO₃(g) + CO(g) → NO₂(g) + CO₂(g) [slow]'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Because the experimental rate law is rate = k[NO₂]², the slow (rate-determining) step must involve two molecules of NO₂ colliding: NO₂ + NO₂ → NO₃ + NO (rate = k[NO₂]²). Adding the fast second step NO₃ + CO → NO₂ + CO₂ yields the overall balanced equation CO + NO₂ → CO₂ + NO. Hence mechanism A is completely plausible.

🇪🇹 አማርኛ (Amharic):
የፍጥነት ሕጉ rate = k[NO₂]² ስለሆነ፣ ቀስታው ደረጃ ሁለት የNO₂ ሞለኪውሎች የሚጋጩበት መሆን አለበት (NO₂ + NO₂ → NO₃ + NO [slow])። ሁለተኛውን ፈጣን ደረጃ ሲደመር አጠቃላይ ግብረ-መልሱን ይሰጣል።

🌳 Afaan Oromoo:
Seerri saffisaa rate = k[NO₂]² waan ta'eef, sadarkaan suutaawaan molakiyuulota NO₂ lama qabaachuu qaba: NO₂ + NO₂ → NO₃ + NO [slow]. Kanaafuu filannoon A sirriidha.`,
    hint: 'The rate-determining step coefficients must match the rate law exponents ([NO2]^2 means 2 NO2 in slow step).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q19',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Solutions: Definitions of Dissolution Kinetics',
    questionText: '19. The speed with which a solute goes into solution is',
    options: [
      'degree of solvation',
      'heat of solution',
      'rate of dissolution',
      'extent of dissolution'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The rate of dissolution is defined as the speed or quantity of solute dissolving in a solvent per unit of time (influenced by surface area, stirring, and temperature).

🇪🇹 አማርኛ (Amharic):
የአንድ የሚሟሟ ንጥረ ነገር (solute) በአንድ አሟሚ (solvent) ውስጥ የመሟሟት ፍጥነት የመሟሟት ምጣኔ (rate of dissolution) ይባላል።

🌳 Afaan Oromoo:
Saffisni sooluutiin tokko solveentii keessatti itti baqu/makamu saffisa baqinaa (rate of dissolution) jedhama.`,
    hint: 'Speed of dissolving per unit time is the rate of dissolution.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17'
  },
  {
    id: 'chem-2015-q20',
    subject: 'Chemistry',
    year: '2015 E.C.',
    topic: 'Solutions: Dilution Formula Calculation',
    questionText: '20. Which one of the following explains how 2 L of 1 M NaOH aqueous stock solution is converted into a 0.25 M NaOH solution?',
    options: [
      'Adding 6 L water to the stock solution',
      'Adding 8 L water to the stock solution',
      'Evaporating 0.25 L of water from the stock solution',
      'Evaporating 1 L of water from the stock solution'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Using the dilution formula: M₁V₁ = M₂V₂
(1 M)(2 L) = (0.25 M)(V₂)
V₂ = (1 × 2) / 0.25 = 8 L (Final total volume needed).
Volume of water to ADD = V₂ - V₁ = 8 L - 2 L = 6 L of water.

🇪🇹 አማርኛ (Amharic):
የማቅጠን ቀመር፡ M₁V₁ = M₂V₂
(1 M)(2 L) = (0.25 M)(V₂) ⇒ V₂ = 8 L (የመጨረሻው አጠቃላይ ይዘት)።
የሚጨመረው የውሃ መጠን = 8 L - 2 L = 6 L ውሃ ወደ መጀመሪያው መፍትሄ መጨመር።

🌳 Afaan Oromoo:
Seera diilwushiniitiin: M₁V₁ = M₂V₂
(1)(2) = (0.25)(V₂) ⇒ V₂ = 8 L.
Bishaan dabalataan itti dabalamu = 8 L - 2 L = 6 L ta'a.`,
    hint: 'M1V1 = M2V2 gives V2 = 8 L. Subtract initial 2 L to find water to add (6 L).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-17'
  }
];
