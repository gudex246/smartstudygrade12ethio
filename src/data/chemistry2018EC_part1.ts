import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2018_EC_PART1: Question[] = [
  {
    id: 'chem-2018-q01',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Electrochemistry: Faraday\'s Laws of Electrolysis',
    questionText: '1. The masses of different substances, liberated or deposited by the same amount of electricity, are proportional to their equivalent masses. This statement is ______.',
    options: [
      "Faraday's first law of electrolysis",
      'the law of definite proportion',
      "Faraday's second law of electrolysis",
      'the law of multiple proportion'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Recall Faraday's Laws of Electrolysis:
• Faraday's First Law states that the mass of a substance deposited or liberated at any electrode is directly proportional to the quantity of electricity (charge Q) passed through the electrolyte: m ∝ Q.
• Faraday's Second Law states that when the same quantity of electricity is passed through different electrolytes connected in series, the masses of the substances liberated or deposited are directly proportional to their equivalent weights (equivalent masses): m₁/m₂ = E₁/E₂.
Step 2: Compare with the problem statement:
"The masses of different substances, liberated or deposited by the same amount of electricity, are proportional to their equivalent masses."
This is the exact definition of Faraday's Second Law of Electrolysis.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የፋራዳይ የኤሌክትሮላይሲስ ህጎችን እናስታውስ፡
• የፋራዳይ 1ኛ ህግ፡ በአንድ ኤሌክትሮድ ላይ የሚጠራቀመው የንጥረ ነገር መጠን የሚያልፈው የኤሌክትሪክ ክፍያ መጠን (Q) ጋር በቀጥታ ተመጣጣኝ (m ∝ Q) ነው።
• የፋራዳይ 2ኛ ህግ፡ ተመሳሳይ መጠን ያለው የኤሌክትሪክ ክፍያ በተለያዩ ኤሌክትሮላይቶች ውስጥ ሲያልፍ የሚጠራቀሙት ንጥረ ነገሮች መጠኖች ከአቻ ክብደታቸው (equivalent masses) ጋር በቀጥታ ተመጣጣኝ (m₁/m₂ = E₁/E₂) ናቸው።
ስለዚህ የተሰጠው አረፍተ ነገር የፋራዳይ 2ኛ የኤሌክትሮላይሲስ ህግ (Faraday's second law of electrolysis) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Seerota elektiroolaayisii Faaraadaay haa yaadannu:
• Seerri Faaraadaay 1ffaa: Hangi wanta elektiroodii irratti kuufamuu ykn gadhiifamu hamma elektirikii (chaarjii Q) darbuun kallattiin wal-gita (m ∝ Q).
• Seerri Faaraadaay 2ffaa: Hangi elektirikii walfakkaataan yommuu elektiroolaayitoota adda addaa keessa darbu, hangi wantoota kuufamanii ykn gadhiifamanii ulfaatina wal-gitiinsa (equivalent mass) isaanii wajjin kallattiin wal-gita (m₁/m₂ = E₁/E₂).
Kanaafuu, himni kun Seera Elektiroolaayisii Faaraadaay Lammaffaa (Faraday's second law) ibsa.`,
    hint: "Faraday's 2nd law relates the masses of different substances deposited by the same electric charge to their equivalent weights: m ∝ E.",
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q02',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Periodic Table: Electron Configuration, Period and Group',
    questionText: '2. An unknown element has the following electronic configuration: 1s² 2s² 2p⁶ 3s² 3p³. To which period and group do this element belongs in the periodic table, respectively?',
    options: [
      '3 and VA',
      '5 and IIIA',
      '3 and IIIA',
      '4 and IIA'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Determine the highest principal quantum number (n):
The valence electrons occupy the n = 3 shell (3s² 3p³). The highest value of n indicates the Period number:
Period = 3.
Step 2: Determine the Group number:
The number of valence electrons in the outermost shell is:
2 (from 3s) + 3 (from 3p) = 5 valence electrons.
In the IUPAC/Main Group system, 5 valence electrons in s and p subshells corresponds to Group VA (or Group 15).
Therefore, the period and group are 3 and VA respectively (the element is Phosphorus, Z = 15).

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የዋናውን የኢነርጂ ደረጃ (n) እንወስን፡
የውጪው ሼል ኤሌክትሮኖች የሚገኙት n = 3 ላይ (3s² 3p³) ነው። ከፍተኛው የn ዋጋ ፔሬድን (Period) ያሳያል፤ ስለዚህ Period = 3 ነው።
ደረጃ 2፡ ግሩፑን እንወስን፡
በውጪው ሼል ውስጥ ያሉት የቫሌንስ ኤሌክትሮኖች ድምር 2 + 3 = 5 ነው። ይህም Group VA (ግሩፕ 15) ያደርገዋል።
ንጥረ ነገሩ ፎስፈረስ (Phosphorus, Z = 15) ሲሆን ፔሬዱ 3 እና ግሩፑ VA ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Sadarkaa anniisaa isa ol'aanaa (n) baruu:
Elektiroononni vaalaansii qola n = 3 keessatti argamu (3s² 3p³). Gatiin n ol'aanaan Piriyeedii agarsiisa: Piriyeedii = 3.
Tarkaanfii 2: Garee (Group) murteessuu:
Baay'inni elektiroonota vaalaansii qola alaa keessaa: 2 (3s irraa) + 3 (3p irraa) = 5 dha. Kunis Garee VA (Group 15) ta'uu agarsiisa.
Kanaafuu, piriyeediin 3 fi gareen VA dha (elementiin kun Foosfarasii, Z = 15 dha).`,
    hint: 'Highest n = 3 means Period 3; total valence electrons in 3s² 3p³ = 2 + 3 = 5 means Group VA.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q03',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Reactions: Reaction of Aluminum with Hydrochloric Acid',
    questionText: '3. Which of the following reaction represents the chemical equation for the reaction that takes place between aluminum metal and solution of hydrochloric acid?',
    options: [
      '2AlCl3(aq) + 3H2(g) → 2Al(s) + 6HCl(aq)',
      '2Al(s) + 6HCl(aq) → 2AlCl3(aq) + 3H2(g)',
      '2Al + 6HCl(aq) → 2AlCl3(aq)',
      'Al + HCl → AlCl3'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Write the reactants and products:
Aluminum metal reacts with aqueous hydrochloric acid in a single displacement reaction to produce aluminum chloride and hydrogen gas:
Al(s) + HCl(aq) → AlCl3(aq) + H2(g)
Step 2: Balance the equation:
• Aluminum forms Al³⁺ requiring 3 Cl⁻ ions per Al: AlCl3.
• Hydrogen gas is diatomic: H2.
To balance Cl and H:
2Al(s) + 6HCl(aq) → 2AlCl3(aq) + 3H2(g).
Option B correctly displays the balanced stoichiometric equation with physical states.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ አጸግብ አድራጊዎችንና ውጤቶችን እንጻፍ፡
የአሉሚኒየም ብረት ከሃይድሮክሎሪክ አሲድ ጋር በሚያደርገው የነጠላ መተካካት አጸግብ (single displacement) አሉሚኒየም ክሎራይድ እና የሃይድሮጂን ጋዝ ይፈጥራል፡
Al(s) + HCl(aq) → AlCl3(aq) + H2(g)
ደረጃ 2፡ እኩልዮሹን ማመጣጠን፡
የክሎሪንና ሃይድሮጂን አተሞችን ለማመጣጠን፡
2Al(s) + 6HCl(aq) → 2AlCl3(aq) + 3H2(g).
ይህም አማራጭ B ላይ በትክክል ተገልጿል።

🌳 Afaan Oromoo:
Tarkaanfii 1: Re'aaktantoota fi oomishoota barreessuu:
Sibiilli Alumiiniyeemii asiidii haayidirookiloorikii wajjin yeroo wal-nyaatu alumiiniyeem kilooraayidii fi gaasii haayidiroojiinii kenna:
Al(s) + HCl(aq) → AlCl3(aq) + H2(g)
Tarkaanfii 2: Hiriira qixxeesuu (Balancing):
2Al(s) + 6HCl(aq) → 2AlCl3(aq) + 3H2(g).
Filannoon B hiriira wal-qixxaa'aa ta'e sirriitti agarsiisa.`,
    hint: 'Single displacement: Aluminum displaces hydrogen from HCl: 2Al + 6HCl → 2AlCl3 + 3H2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q04',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Electrochemistry: Faraday\'s Second Law Calculations',
    questionText: '4. A cell containing AlCl3 as an electrolyte, is placed in series with another cell containing AgNO3 as an electrolyte. What mass of Ag is deposited, when 18g of Al is deposited at the cathode electrode? (MAg=108g/mol and MAl=27g/mol)',
    options: [
      '36g',
      '24g',
      '216g',
      '72g'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Calculate equivalent weights of Al and Ag:
• In AlCl3, Al is Al³⁺ (valence n = 3):
  Equivalent weight of Al = M_Al / n = 27 / 3 = 9 g/eq.
• In AgNO3, Ag is Ag⁺ (valence n = 1):
  Equivalent weight of Ag = M_Ag / n = 108 / 1 = 108 g/eq.
Step 2: Apply Faraday's Second Law:
(Mass of Al) / (Equivalent weight of Al) = (Mass of Ag) / (Equivalent weight of Ag)
18 / 9 = (Mass of Ag) / 108
2 = (Mass of Ag) / 108
Mass of Ag = 2 × 108 = 216 g.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የአሉሚኒየም እና የብር (Ag) አቻ ክብደት (Equivalent weight) ማስላት፡
• በአሉሚኒየም (Al³⁺)፡ Eq wt = 27 / 3 = 9 g/eq.
• በብር (Ag⁺)፡ Eq wt = 108 / 1 = 108 g/eq.
ደረጃ 2፡ የፋራዳይ 2ኛ ህግ ቀመርን መጠቀም፡
(የአሉሚኒየም ክብደት) / (የአሉሚኒየም አቻ ክብደት) = (የብር ክብደት) / (የብር አቻ ክብደት)
18 / 9 = (የብር ክብደት) / 108
2 = (የብር ክብደት) / 108
የብር ክብደት = 2 × 108 = 216 g።

🌳 Afaan Oromoo:
Tarkaanfii 1: Ulfaatina wal-gitiinsaa (Equivalent weight) shallaguu:
• Alumiiniyeemii (Al³⁺): Eq wt = 27 / 3 = 9 g/eq.
• Meetii / Silver (Ag⁺): Eq wt = 108 / 1 = 108 g/eq.
Tarkaanfii 2: Seera Faaraadaay 2ffaa hojiirra oolchuu:
(Ulfaatina Al) / (Eq wt Al) = (Ulfaatina Ag) / (Eq wt Ag)
18 / 9 = (Ulfaatina Ag) / 108
2 = (Ulfaatina Ag) / 108
Ulfaatina Ag = 2 × 108 = 216 g.`,
    hint: 'Ratio of masses = ratio of equivalent weights: m(Ag) = m(Al) × [E(Ag)/E(Al)] = 18 × (108 / 9) = 216 g.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q05',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Inorganic Chemistry: Decomposition of Nitric Acid',
    questionText: '5. Nitric acid is a colorless fuming liquid with a boiling point of 83°C. However, it turns yellow as it stays for long time. Which of the following accounts for the observed property of nitric acid?',
    options: [
      'NO3⁻',
      'NO2',
      'NO2⁻',
      'NO'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Understand the chemical stability of concentrated nitric acid (HNO3):
Pure concentrated nitric acid is a colorless liquid. However, upon exposure to sunlight or warmth over time, it undergoes slow photochemical decomposition:
4HNO3(aq) → 4NO2(g) + O2(g) + 2H2O(l)
Step 2: Identify the coloring agent:
Nitrogen dioxide (NO2) is a reddish-brown gas. As it dissolves in the remaining liquid acid, it imparts a characteristic yellow to brownish-yellow color.
Therefore, NO2 accounts for the observed yellow coloration.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የናይትሪክ አሲድ ኬሚካላዊ ባህሪ፡
ንጹህ ናይትሪክ አሲድ (HNO3) ቀለም አልባ ፈሳሽ ነው። ነገር ግን ለረጅም ጊዜ ሲቀመጥ በብርሃንና ሙቀት አማካኝነት ቀስ በቀስ ይበሰብሳል፡
4HNO3(aq) → 4NO2(g) + O2(g) + 2H2O(l)
ደረጃ 2፡ ቀለሙን የቀየረው ንጥረ ነገር፡
የሚፈጠረው ናይትሮጅን ዳይኦክሳይድ (NO2) ቀይ-ቡናማ ጋዝ ሲሆን በአሲዱ ውስጥ በሚሟሟበት ጊዜ አሲዱ ቢጫ ቀለም እንዲይዝ ያደርገዋል። ስለዚህ ተጠያቂው NO2 ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Amala asiidii naayitiriikii (HNO3):
Asiidiin naayitiriikii qulqulluun dhangala'aa bifa hin qabneedha. Haa ta'u malee, yeroo dheeraaf yommuu taa'u ifaa fi oo'aan caccaba:
4HNO3(aq) → 4NO2(g) + O2(g) + 2H2O(l)
Tarkaanfii 2: Wanta bifa keelloo fidu baruu:
Gaasiin naayitiroojiin daayooksaayidii (NO2) gaasii bifa diimaa-bunaa qabu yoo ta'u, asiidichatti yeroo baqu bifa keelloo kennaaf. Kanaafuu, deebiin NO2 dha.`,
    hint: 'Concentrated HNO3 decomposes slowly in light to form dissolved nitrogen dioxide (NO2) gas, giving it a yellow color.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q06',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Formulas: Empirical vs. Molecular Formula',
    questionText: '6. Which of the following tells the exact number of atoms of different elements present in a molecule?',
    options: [
      'Molecular mass',
      'Empirical formula',
      'Formula mass',
      'Molecular formula'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Distinguish chemical formula definitions:
• Empirical Formula: Represents the simplest whole-number ratio of atoms of each element in a compound (e.g., CH2O for glucose).
• Molecular Formula: Gives the actual, exact number of atoms of each element present in one molecule of a compound (e.g., C6H12O6 for glucose).
• Molecular mass and Formula mass are numerical masses in atomic mass units (amu) or g/mol, not formula notations.
Therefore, the molecular formula tells the exact number of atoms.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የኬሚካል ፎርሙላዎችን ትርጓሜ እንለይ፡
• ኢምፔሪካል ፎርሙላ (Empirical formula)፡ በሞለኪውል ውስጥ ያሉ የአቶሞችን ቀላሉን የሙሉ ቁጥር ንፅፅር (simplest whole-number ratio) ብቻ ያሳያል።
• ሞለኪውላር ፎርሙላ (Molecular formula)፡ በአንድ ሞለኪውል ውስጥ የሚገኙትን ትክክለኛ የአቶሞች ብዛት (exact number of atoms) ያሳያል።
ስለዚህ ትክክለኛው መልስ ሞለኪውላር ፎርሙላ (Molecular formula) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Hiika foormulaalee keemikaalaa adda baasuu:
• Foormulaa Empiirikaalaa: Reeshoo lakkoofsa guutuu salphaa atoomota kompaawundii keessatti argamanii agarsiisa.
• Foormulaa Moolakiyuulaaraa: Baay'ina atoomota sirrii ta'an kanneen moolakiyuulii tokko keessatti argaman agarsiisa.
Kanaafuu, deebiin foormulaa moolakiyuulaaraa (Molecular formula) dha.`,
    hint: 'Molecular formula gives the exact number of atoms; empirical formula gives only the simplest ratio.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q07',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Acid-Base Equilibria: Hydrogen Ion Concentration of Weak Acid',
    questionText: '7. What is the concentration of hydrogen ion in a solution of 0.1 M nicotinic acid, HC6H4NO2, at 25°C? (Ka = 1.4 × 10⁻⁵)',
    options: [
      '1.2 × 10⁻⁵ M',
      '1.2 × 10⁻³ M',
      '1.4 × 10⁻⁵ M',
      '1.4 × 10⁻⁶ M'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Identify given values:
• Initial weak acid concentration C = 0.1 M
• Acid dissociation constant Ka = 1.4 × 10⁻⁵
Step 2: Set up the equilibrium expression for a monoprotic weak acid (HA ⇌ H⁺ + A⁻):
Ka = [H⁺][A⁻] / [HA] ≈ x² / C  (since Ka << 1, C - x ≈ C)
Step 3: Solve for [H⁺]:
[H⁺] = √(Ka × C)
[H⁺] = √(1.4 × 10⁻⁵ × 0.1) = √(1.4 × 10⁻⁶)
[H⁺] = √1.4 × 10⁻³ ≈ 1.183 × 10⁻³ M ≈ 1.2 × 10⁻³ M.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የተሰጡትን መረጃዎች መለየት፡
• የደካማ አሲድ ክምችት C = 0.1 M
• የአሲድ መፍረስ ቋሚ Ka = 1.4 × 10⁻⁵
ደረጃ 2፡ የሃይድሮጂን አዮን ክምችት [H⁺] ቀመር፡
[H⁺] = √(Ka × C)
[H⁺] = √(1.4 × 10⁻⁵ × 0.1) = √(1.4 × 10⁻⁶)
[H⁺] ≈ 1.18 × 10⁻³ M ≈ 1.2 × 10⁻³ M.
ስለዚህ ትክክለኛው መልስ B (1.2 × 10⁻³ M) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Qabxiilee kennaman:
• Qabeenya asiidii dadhabaa C = 0.1 M
• Dhaabbataa asiidichaa Ka = 1.4 × 10⁻⁵
Tarkaanfii 2: Qindoomina ayoonii haayidiroojiinii [H⁺] shallaguu:
[H⁺] = √(Ka × C)
[H⁺] = √(1.4 × 10⁻⁵ × 0.1) = √(1.4 × 10⁻⁶)
[H⁺] ≈ 1.18 × 10⁻³ M ≈ 1.2 × 10⁻³ M.`,
    hint: 'For a weak monoprotic acid, [H⁺] = √(Ka × C) = √(1.4×10⁻⁵ × 0.1) = √(1.4×10⁻⁶) ≈ 1.2×10⁻³ M.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q08',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Atomic Structure: Average Atomic Mass of Isotopes',
    questionText: '8. Chlorine has two naturally occurring isotopes. In a sample of chlorine, 25% of the atoms are Cl-37 and 75% of the atoms are Cl-35. What is the average atomic mass of chlorine?',
    options: [
      '26.25',
      '25.75',
      '35.5',
      '36.0'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Formula for weighted average atomic mass:
Average Atomic Mass = (abundance₁ × mass₁) + (abundance₂ × mass₂)
Step 2: Substitute isotopic data:
• Cl-35: 75% abundance = 0.75, mass = 35 amu
• Cl-37: 25% abundance = 0.25, mass = 37 amu
Step 3: Calculate:
Average Atomic Mass = (0.75 × 35) + (0.25 × 37)
= 26.25 + 9.25 = 35.5 amu.
Hence, the average atomic mass of chlorine is 35.5.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የአይሶቶፖች አማካይ የአቶሚክ ክብደት ቀመር፡
አማካይ የአቶሚክ ክብደት = (% ብዛት₁ × ክብደት₁) + (% ብዛት₂ × ክብደት₂)
ደረጃ 2፡ ቁጥሮቹን መተካት፡
• Cl-35፡ 75% = 0.75, ክብደት = 35
• Cl-37፡ 25% = 0.25, ክብደት = 37
ደረጃ 3፡ ማስላት፡
አማካይ ክብደት = (0.75 × 35) + (0.25 × 37)
= 26.25 + 9.25 = 35.5 amu።

🌳 Afaan Oromoo:
Tarkaanfii 1: Foormulaa ulfaatina atoomawaa giddu-galeessaa:
Ulfaatina Giddu-galeessaa = (% baay'ina₁ × ulfaatina₁) + (% baay'ina₂ × ulfaatina₂)
Tarkaanfii 2: Shallaggii:
• Cl-35: 0.75 × 35 = 26.25
• Cl-37: 0.25 × 37 = 9.25
Ida'ama = 26.25 + 9.25 = 35.5 amu.`,
    hint: 'Average atomic mass = (0.75 × 35) + (0.25 × 37) = 26.25 + 9.25 = 35.5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q09',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Oxides & Redox: Peroxides as Oxidizing Agents with Iodide',
    questionText: '9. A student performs an experiment to distinguish different oxides by doing the following experiment. He/she put 100 mL KI solution in to four different test tubes. He/she acidified each of these solutions with 10 drops of dilute H2SO4 solution. He/she added a spatula full of CaO in the first, Al2O3 in the second, Na2O2 in the third and P4O10 in the fourth test tubes. Finally, he/she added 10 mL starch solution to each of the four test tubes. In which test tube will he/she observe a color change? In the test tube that contains',
    options: [
      'Test tube 2',
      'Test tube 1',
      'Test tube 3',
      'Test tube 4'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Analyze the chemical nature of the oxides:
• Test tube 1 (CaO): Basic oxide; neutralizes acid to form CaSO4 + H2O.
• Test tube 2 (Al2O3): Amphoteric oxide; dissolves in acid without oxidation.
• Test tube 3 (Na2O2): Sodium peroxide is a powerful oxidizing agent! In acidic medium (H2SO4), it produces hydrogen peroxide (H2O2) which oxidizes colorless iodide ions (I⁻) to elemental iodine (I2):
  Na2O2 + H2SO4 + 2KI → I2 + Na2SO4 + K2SO4 + 2H2O
• Test tube 4 (P4O10): Acidic oxide; forms phosphoric acid.
Step 2: Starch test:
Free iodine (I2) reacts specifically with starch solution to form an intense deep blue-black complex.
Therefore, a distinct color change occurs only in Test tube 3 (containing Na2O2).

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የኦክሳይዶቹን ኬሚካላዊ ባህሪ መረዳት፡
• የሙከራ ቱቦ 1 (CaO)፡ ቤዚክ ኦክሳይድ ነው።
• የሙከራ ቱቦ 2 (Al2O3)፡ አምፎቴሪክ ኦክሳይድ ነው።
• የሙከራ ቱቦ 3 (Na2O2)፡ ሶዲየም ፐርኦክሳይድ በጣም ጠንካራ ኦክሳይድ አድራጊ (oxidizing agent) ነው። በአሲዳማ አካባቢ የአዮዳይድ አዮኖችን (I⁻) ወደ አዮዲን (I2) ኦክሲዳይዝ ያደርጋል።
ደረጃ 2፡ የስታርች (Starch) ምርመራ፡
የተፈጠረው ነፃ አዮዲን (I2) ከስታርች ጋር ሲገናኝ ደማቅ ሰማያዊ-ጥቁር (blue-black) ቀለም ይሰጣል።
ስለዚህ የቀለም ለውጥ የሚታየው በሙከራ ቱቦ 3 (Test tube 3) ውስጥ ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Amala ooksaayidootaa adda baasuu:
Na2O2 (soodiyeem peroogsaayidiin) ooksaayidii wantoota biroo oksidaayizii gochuu danda'u (strong oxidizing agent) dha.
Tarkaanfii 2: Wal-nyaatinsa ayoodaayidii fi istaarjii:
Asiidii keessatti ayoonii I⁻ gara I2 tti jijjiira. Ayoodiiniin (I2) ammoo furmaata istaarjii wajjin yeroo walitti dhufe bifa cuquliisa-gurraacha (blue-black) uuma.
Kanaafuu, jijjiiramni bifa kan mul'atu Qodaa Qormaataa 3ffaa (Test tube 3) keessatti.`,
    hint: 'Na2O2 is a peroxide and strong oxidizing agent that oxidizes I⁻ to I2, which turns starch solution blue-black.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q10',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Hydrocarbons: Classification of Acetylene (Alkynes)',
    questionText: '10. Combustion of acetylene at about 3000°C with oxygen produces an intense hot flame. In which group of hydrocarbons is this compound classified?',
    options: [
      'Alkanes',
      'Aromatics',
      'Alkenes',
      'Alkynes'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Identify the chemical identity of acetylene:
Acetylene is the common name for ethyne, with molecular formula C2H2 and structural formula H-C≡C-H.
Step 2: Classify based on functional group:
Hydrocarbons containing at least one carbon-carbon triple bond (-C≡C-) belong to the Alkyne family (general formula CnH2n-2).
In oxy-acetylene torches, ethyne burns in pure oxygen at temperatures exceeding 3000°C to weld metals.
Therefore, acetylene is classified under Alkynes.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የአሲቲሊንን ኬሚካላዊ መዋቅር መለየት፡
አሲቲሊን (Acetylene) የኢታይን (Ethyne, C2H2) የተለመደ ስም ሲሆን በሁለቱ ካርቦኖች መካከል ባለሶስትዮሽ ትስስር (triple bond, H-C≡C-H) አለው።
ደረጃ 2፡ የሃይድሮካርቦን ምድብ፡
ባለሶስትዮሽ ትስስር (triple bond) ያላቸው ሃይድሮካርቦኖች አልካይን (Alkynes) ይባላሉ።
ስለዚህ አሲቲሊን የሚመደበው በአልካይን (Alkynes) ስር ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Caasaa Aseetiliinii baruu:
Aseetiliiniin maqaa beekamaa 'Ithaayinii' (Ethyne, C2H2) yoo ta'u, hidhoo sadii (triple bond, H-C≡C-H) qaba.
Tarkaanfii 2: Ramaddii haayidirookaarboonii:
Haayidirookaarboononni hidhoo sadii qaban garee 'Alkaayinootaa' (Alkynes) jedhaman keessatti ramadamu.`,
    hint: 'Acetylene is ethyne (H-C≡C-H), which contains a carbon-carbon triple bond and is an alkyne.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q11',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Bonding: Expanded Octet in Phosphorus Pentafluoride',
    questionText: '11. Phosphorus pentafluoride, PF5 is one example of exception to the octet rule. Why does PF5 is considered to be exceptional to the octate rule? This is because the',
    options: [
      'central atom has more than eight valence electrons.',
      'atoms attached to P have more than eight valence electrons.',
      'central atom has less than eight valence electrons.',
      'central atom has eight valence electrons.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: State the Octet Rule:
The octet rule states that main-group atoms tend to gain, lose, or share electrons so as to have eight valence electrons in their outer shell.
Step 2: Analyze PF5:
In phosphorus pentafluoride (PF5), the central phosphorus atom forms 5 single covalent bonds with 5 fluorine atoms.
Since each single bond shares 2 electrons:
Total electrons around central P = 5 × 2 = 10 valence electrons.
Having 10 electrons (more than 8) constitutes an expanded octet (hypervalent molecule), which is possible because phosphorus has available empty 3d orbitals.
Therefore, option A is correct.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የኦክቴት ህግን እናስታውስ፡
የኦክቴት ህግ (octet rule) አተሞች በውጪ ሼላቸው 8 ኤሌክትሮኖችን በማግኘት እንዲረጋጉ ይደነግጋል።
ደረጃ 2፡ በPF5 ውስጥ ያለውን ሁኔታ መመልከት፡
ማዕከላዊው የፎስፈረስ አቶም ከአምስቱ የፍሎሪን አቶሞች ጋር 5 ነጠላ ትስስሮችን ይፈጥራል።
እያንዳንዱ ትስስር 2 ኤሌክትሮኖችን ስለሚይዝ፣ በማዕከላዊው ፎስፈረስ ዙሪያ 5 × 2 = 10 ቫሌንስ ኤሌክትሮኖች ይኖራሉ።
ይህ ከ8 ኤሌክትሮን በላይ በመሆኑ (expanded octet) ልዩ ሁኔታ (exception) ያደርገዋል።

🌳 Afaan Oromoo:
Tarkaanfii 1: Seera Okteetii:
Seerri okteetii atoomonni qola alaa isaanii irratti elektiroonota 8 qabaachuu akka qaban ibsa.
Tarkaanfii 2: Moolakiyuulii PF5 qorachuu:
PF5 keessatti atoomiin Foosfarasii giddu-galeessaa atoomota Filaawuriinii 5 wajjin hidhoo kovaalantii 5 uuma.
Kanaafuu, elektiroononni naannoo P jiran = 5 × 2 = 10 dha. Kunis elektiroonota 8 ol waan ta'eef 'expanded octet' jedhama.`,
    hint: 'Central phosphorus forms 5 single bonds, surrounding it with 10 valence electrons (more than eight).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q12',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Environmental Chemistry: Carbon Cycle and Global Warming Mitigation',
    questionText: '12. In the atmospheric carbon cycle diagram, which of the following does NOT contribute to global warming? (A: Automobile emissions, B: Livestock respiration/methane, C: Forest/Tree photosynthesis, D: Factory industrial emissions)',
    options: [
      'B',
      'A',
      'D',
      'C'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Understand sources and sinks of atmospheric carbon dioxide:
• A (Automobiles): Burn fossil fuels and release CO2 into the atmosphere.
• B (Livestock / Cattle): Release methane (CH4) and respiration CO2, which are potent greenhouse gases.
• D (Industrial Factories): Burn vast amounts of fossil fuels, releasing major quantities of CO2.
• C (Trees / Forests): Trees are carbon sinks! Through photosynthesis, they absorb CO2 from the atmosphere:
  6CO2 + 6H2O + sunlight → C6H12O6 + 6O2
Therefore, trees (C) actively mitigate and do NOT contribute to global warming.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ በካርቦን ዑደት ውስጥ የነገሮችን ሚና መረዳት፡
• A (መኪኖች)፡ የነዳጅ ማቃጠል CO2 ይለቃሉ።
• B (የከብት እርባታ)፡ ሚቴን (CH4) እና CO2 ጋዞችን በመልቀቅ ሙቀትን ይጨምራሉ።
• D (ፋብሪካዎች)፡ ከፍተኛ መጠን ያለው ካርቦን ዳይኦክሳይድ ያመነጫሉ።
• C (ዛፎች/ደን)፡ በፎቶሲንተሲስ (photosynthesis) አማካኝነት ካርቦን ዳይኦክሳይድን ከአየር ላይ በመውሰድ ያከማቻሉ፤ ስለሆነም የአለም ሙቀትን አይጨምሩም (ይቀንሳሉ)።
ስለዚህ ትክክለኛው መልስ C (አማራጭ d) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Gahee wantoota adda addaa baruu:
• A (Konkolaattota) fi D (Warshaalee): Boba'aa gubanii CO2 heddumminaan gara qilleensaatti gatu.
• B (Beeyladoota): Gaasii miiteenii (CH4) baasu.
• C (Mukkeen / Bosona): Adeemsa footoosinteesitiin CO2 qilleensa keessaa xuuxuudhaan qilleensa qabbaneessu.
Kanaafuu, mukti (C) o'a addunyaa hin dabalu, kanaaf deebiin filannoo d (C) dha.`,
    hint: 'Trees and plants absorb CO2 through photosynthesis (acting as carbon sinks) rather than releasing greenhouse gases.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q13',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Solutions & Electrochemistry: Electrolytes vs. Non-Electrolytes',
    questionText: '13. You are supposed to test the conductivity of the substances using a conductivity apparatus. Which of the following aqueous solutions does NOT cause the bulb to glow when the switch turns on?',
    options: [
      'Sodium hydroxide solution',
      'Copper sulphate solution',
      'Table salt solution',
      'Sugar solution'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Principle of electrical conductivity in solution:
An electric current can only pass through an aqueous solution if mobile ions are present to carry the electric charge (electrolytes).
Step 2: Evaluate the given substances:
• Sodium hydroxide (NaOH): Strong base, completely dissociates into Na⁺ and OH⁻ ions (conducts electricity, bulb glows).
• Copper sulphate (CuSO4): Soluble salt, completely dissociates into Cu²⁺ and SO4²⁻ ions (conducts electricity, bulb glows).
• Table salt (NaCl): Strong electrolyte, dissociates into Na⁺ and Cl⁻ ions (conducts electricity, bulb glows).
• Sugar (sucrose, C12H22O11): A covalent molecular compound that dissolves as intact neutral molecules, producing zero ions (non-electrolyte).
Therefore, sugar solution does not conduct electricity and the bulb will not glow.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ በፈሳሾች ውስጥ የኤሌክትሪክ ዝውውር መርህ፡
አንድ ፈሳሽ ኤሌክትሪክ እንዲያስተላልፍ በውስጡ ተንቀሳቃሽ አዮኖች (free-moving ions) ሊኖሩት ይገባል (ኤሌክትሮላይት)።
ደረጃ 2፡ የተሰጡትን አማራጮች መገምገም፡
• ሶዲየም ሃይድሮክሳይድ (NaOH)፣ ኮፐር ሰልፌት (CuSO4)፣ እና የገበታ ጨው (NaCl) በሙሉ በአዮኖች ተከፋፍለው ኤሌክትሪክ ስለሚያስተላልፉ መብራቱ ይበራል።
• የስኳር መፍትሄ (Sugar solution)፡ ስኳር የኮቫለንት ሞለኪውል በመሆኑ በውሃ ውስጥ ሲሟሟ ሞለኪውል ሆኖ እንጂ አዮን አይፈጥርም (non-electrolyte)።
ስለዚህ የስኳር መፍትሄ ኤሌክትሪክ አያስተላልፍም፤ መብራቱም አይበራም።

🌳 Afaan Oromoo:
Tarkaanfii 1: Dandeettii elektirikii dabarsuu:
Furmaanni tokko elektirikii dabarsuuf ayoonota bilisa ta'anii socho'an qabaachuu qaba (elektiroolaayitii).
Tarkaanfii 2: Wantoota kennaman madaaluu:
• NaOH, CuSO4, fi NaCl (soogidda nyaataa) hundi isaanii ayoonotatti caccabuudhaan elektirikii dabarsu.
• Sukkaari (Sugar): Kompaawundii kovaalantii waan ta'eef bishaan keessatti moolakiyuula ta'ee hafa malee ayoonii hin uumu (non-electrolyte).
Kanaafuu, furmaanni sukkaaraa ampuulii hin ibsu.`,
    hint: 'Sugar is a molecular covalent substance that dissolves as intact neutral molecules without forming ions (non-electrolyte).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q14',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Chemical Equations: Balancing Redox Reactions of Copper with Sulfuric Acid',
    questionText: '14. Copper metal reacts with sulfuric acid to produce copper sulphate, sulfur dioxide and water. Which of the following is the coefficient of H2SO4 after balancing this chemical reaction?',
    options: [
      '6',
      '1',
      '2',
      '3'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Write the unbalanced equation:
Cu + H2SO4 → CuSO4 + SO2 + H2O
Step 2: Balance using redox oxidation numbers:
• Cu is oxidized from 0 to +2: Cu → Cu²⁺ + 2e⁻
• S is reduced from +6 (in H2SO4) to +4 (in SO2): SO4²⁻ + 4H⁺ + 2e⁻ → SO2 + 2H2O
• One additional mole of H2SO4 supplies the spectator sulfate ion SO4²⁻ in CuSO4.
Step 3: Combine and balance:
Cu + 2H2SO4 → CuSO4 + SO2 + 2H2O
Check atom balances:
• Cu: 1 on both sides.
• S: 2 on reactants = 1 (in CuSO4) + 1 (in SO2) = 2.
• H: 4 on reactants (2 × 2) = 4 on products (2 × 2).
• O: 8 on reactants (2 × 4) = 4 + 2 + 2 = 8.
Thus, the stoichiometric coefficient of H2SO4 is 2.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ ያልተመጣጠነውን እኩልዮሽ መጻፍ፡
Cu + H2SO4 → CuSO4 + SO2 + H2O
ደረጃ 2፡ የሬዶክስ አሰራርን በመጠቀም ማመጣጠን፡
Cu + 2H2SO4 → CuSO4 + SO2 + 2H2O
ደረጃ 3፡ አተሞችን መፈተሽ፡
• Cu፡ 1 በግራ = 1 በቀኝ
• S፡ 2 በግራ = 1 (በCuSO4) + 1 (በSO2) = 2 በቀኝ
• H፡ 4 በግራ = 4 በቀኝ (2H2O)
• O፡ 8 በግራ = 4 + 2 + 2 = 8 በቀኝ
ስለዚህ የተመጣጠነው የH2SO4 ኮፊሸንት 2 ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Hiriira wal-nyaatinsaa barreessuu:
Cu + H2SO4 → CuSO4 + SO2 + H2O
Tarkaanfii 2: Qixxeesuu (Balancing):
Cu + 2H2SO4 → CuSO4 + SO2 + 2H2O
Atoomota lamaan gamaa yoo mirkaneeffannu hundi wal-qixa.
Kanaafuu, ko'efisiyentiin H2SO4 2 dha.`,
    hint: 'Balanced equation: Cu + 2H2SO4 → CuSO4 + SO2 + 2H2O. The coefficient of H2SO4 is 2.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2018-q15',
    subject: 'Chemistry',
    year: '2018 E.C.',
    topic: 'Atomic Structure: Rydberg Formula for Energy of Electronic Transitions',
    questionText: '15. What is the amount of energy emitted when an electron moves from the n = 4 to n = 2 energy level? (RH = 2.18 × 10⁻¹⁸ J)',
    options: [
      '-6.54 × 10⁻¹⁸ J',
      '-4.09 × 10⁻¹⁹ J',
      '4.09 × 10⁻¹⁹ J',
      '6.54 × 10⁻¹⁸ J'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: State the Bohr/Rydberg energy equation for hydrogen electronic transition:
The magnitude of energy emitted when an electron transitions from a higher level n₂ to a lower level n₁ is:
ΔE = RH × (1/n₁² - 1/n₂²)
Step 2: Substitute n₁ = 2, n₂ = 4, and RH = 2.18 × 10⁻¹⁸ J:
ΔE = 2.18 × 10⁻¹⁸ J × (1/2² - 1/4²)
ΔE = 2.18 × 10⁻¹⁸ J × (1/4 - 1/16)
ΔE = 2.18 × 10⁻¹⁸ J × (3/16)
ΔE = 2.18 × 10⁻¹⁸ J × 0.1875 = 4.0875 × 10⁻¹⁹ J ≈ 4.09 × 10⁻¹⁹ J.
Since the question asks for the "amount of energy emitted" (magnitude of emitted photon energy), it is expressed as a positive quantity: 4.09 × 10⁻¹⁹ J.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ የቦህር የኢነርጂ ቀመር፡
ኤሌክትሮን ከከፍተኛ ደረጃ (n₂ = 4) ወደ ዝቅተኛ ደረጃ (n₁ = 2) ሲወርድ የሚለቀቀው የኢነርጂ መጠን፡
ΔE = RH × (1/n₁² - 1/n₂²)
ደረጃ 2፡ ቁጥሮቹን መተካት፡
ΔE = 2.18 × 10⁻¹⁸ × (1/4 - 1/16)
ΔE = 2.18 × 10⁻¹⁸ × (3/16)
ΔE = 4.0875 × 10⁻¹⁹ J ≈ 4.09 × 10⁻¹⁹ J።
የሚለቀቀው የኢነርጂ መጠን አወንታዊ (positive) በመሆኑ ትክክለኛው መልስ C (4.09 × 10⁻¹⁹ J) ነው።

🌳 Afaan Oromoo:
Tarkaanfii 1: Foormulaa anniisaa elektiroonii gadi bu'uu:
ΔE = RH × (1/n₁² - 1/n₂²)
Tarkaanfii 2: Shallaggii (n₁ = 2 fi n₂ = 4):
ΔE = 2.18 × 10⁻¹⁸ × (1/2² - 1/4²)
ΔE = 2.18 × 10⁻¹⁸ × (1/4 - 1/16) = 2.18 × 10⁻¹⁸ × (3/16)
ΔE ≈ 4.09 × 10⁻¹⁹ J.
Hammi anniisaa gadhiifamee poozatiiviidhaan ibsama: 4.09 × 10⁻¹⁹ J.`,
    hint: 'ΔE = RH × (1/2² - 1/4²) = 2.18×10⁻¹⁸ × (3/16) ≈ 4.09×10⁻¹⁹ J.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
