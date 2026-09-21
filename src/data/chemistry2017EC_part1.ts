import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2017_EC_PART1: Question[] = [
  {
    id: 'chem-2017-q1',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Atomic Structure: Subatomic Particles and Relative Charges',
    questionText: '1. Which one of the following CORRECTLY shows the relative charges of an electron, proton and neutron, respectively?',
    options: [
      '0, +1, -1',
      '0, -1, +1',
      '-1, +1, 0',
      '-1, 0, +1'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The fundamental subatomic particles have the following relative electrical charges:
• Electron: -1 relative unit charge
• Proton: +1 relative unit charge
• Neutron: 0 (neutral, no electrical charge)
Therefore, the correct sequence is -1, +1, 0.

🇪🇹 አማርኛ (Amharic):
የአቶም ንኡሳን ቅንጣቶች አንጻራዊ የኤሌክትሪክ ክፍያ (relative charge) እንደሚከተለው ነው፡
• ኤሌክትሮን (Electron)፡ -1
• ፕሮቶን (Proton)፡ +1
• ኒውትሮን (Neutron)፡ 0 (ገለልተኛ / ክፍያ የሌለው)
ስለዚህ ትክክለኛው ቅደም ተከተል -1, +1, 0 ነው።

🌳 Afaan Oromoo:
Chaajiiwwan maatirii bu\'uuraa atoomii kanneen armaan gadiiti:
• Elektiroonii: -1
• Pirootoonii: +1
• Niiwutiroonii: 0 (chaajii hin qabu)
Kanaafuu, tartiibni sirriin -1, +1, 0 dha.`,
    hint: 'Electrons are negative (-1), protons are positive (+1), and neutrons have no charge (0).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q2',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Atomic Models: Bohr Model of the Atom',
    questionText: '2. Which statement below CORRECTLY describes the Bohr\'s model of an atom?',
    options: [
      'Protons and electrons are found in the nucleus.',
      'Electrons and neutrons are found in the nucleus.',
      'Protons move in circular orbits around the nucleus.',
      'Electrons move in circular orbits around the nucleus.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to Niels Bohr's planetary model of the atom (1913):
1. Protons and neutrons are tightly concentrated in the central dense nucleus.
2. Negatively charged electrons revolve in fixed, concentric, quantized circular orbits (energy levels) around the nucleus without radiating energy.

🇪🇹 አማርኛ (Amharic):
በኒልስ ቦር (Bohr's model) የአቶም ሞዴል መሰረት፡ ፕሮቶኖችና ኒውትሮኖች በማዕከላዊ ኒውክሊየስ ውስጥ ሲገኙ፣ ኤሌክትሮኖች ደግሞ በኒውክሊየሱ ዙሪያ በተወሰነ የክብ ምህዋር (circular orbits) ይሽከረከራሉ።

🌳 Afaan Oromoo:
Akka moodeela atoomii \'Bohr\'tti, elektiroononni orbiitii naanna\'aa ta\'e keessa niwukilasiitti marsanii socho\'u. Pirootoononnii fi niiwutiroononni immoo niwukilasii keessatti argamu.`,
    hint: 'Bohr proposed that electrons travel in circular orbits around the central nucleus.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q3',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Periodic Table: Periodic Law and Periodicity',
    questionText: '3. Which statement below CORRECTLY describes periodicity? Periodicity is:',
    options: [
      'A regular repetition of chemical and physical properties in the Periodic Table.',
      'A row in the Periodic Table which contains elements with same number of shells.',
      'A measure of electronegativity which runs from least electronegative to most electronegative elements.',
      'A column of the Periodic Table which contains elements with similar chemical properties.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Periodicity in chemistry refers to the recurring, predictable periodic trends in chemical and physical properties of chemical elements as atomic number increases across the Periodic Table. (Option B describes a "period", and Option D describes a "group/family").

🇪🇹 አማርኛ (Amharic):
ፔሪዮዲሲቲ (Periodicity) ማለት በፔሪዮዲክ ሰንጠረዥ ውስጥ የአቶሚክ ቁጥር እየጨመረ ሲሄድ የንጥረ ነገሮች አካላዊና ኬሚካላዊ ባህሪያት በየተወሰነ ክፍተት በቋሚነት መደጋገም (regular repetition) ነው።

🌳 Afaan Oromoo:
\'Periodicity\' jechuun gabatee piriyoodikii keessatti irra-deddeebii amala keemikaalaa fi fiizikaalaa elementootaa kan agarsiisudha.`,
    hint: 'Periodicity means predictable repeating patterns of elemental properties across the table.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q4',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Bonding: Hydrogen Bonding',
    questionText: '4. Which statement below CORRECTLY expresses hydrogen bonding? It is formed by bonding:',
    options: [
      'A hydrogen atom to an element such as sodium.',
      'A hydrogen atom to an element such as oxygen.',
      'Two hydrogen atoms with equal sharing of electrons.',
      'Two hydrogen atoms with unequal sharing of electrons.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A hydrogen bond is a strong dipole-dipole attraction that occurs when a hydrogen atom covalently bonded to a highly electronegative atom with small atomic radius (specifically Nitrogen, Oxygen, or Fluorine - N, O, F) is electrostatically attracted to a lone pair of electrons on an adjacent electronegative atom.

🇪🇹 አማርኛ (Amharic):
ሃይድሮጅን ቦንድ (Hydrogen bonding) የሚፈጠረው ሃይድሮጅን ከፍተኛ ኤሌክትሮኔጋቲቪቲ ካላቸው ጥቃቅን አቶሞች (በተለይ ኦክስጅን፣ ናይትሮጅን ወይም ፍሎሪን) ጋር በኮቫለንት ቦንድ ሲያያዝ ነው።

🌳 Afaan Oromoo:
Hidhoon haayidiroojiinii (hydrogen bonding) yeroo haayidiroojiiniin elementoota elektiroonegaatiivii olaanaa qaban kanneen akka Oksiijiinii (O), Naayitiroojiinii (N), yookiin Filooriniitti (F) qabatu uumama.`,
    hint: 'Hydrogen bonds occur when H is bonded to N, O, or F.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q5',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Bonding: Types of Chemical Bonds',
    questionText: '5. What is the bond formed between two or more atoms by sharing of electrons?',
    options: [
      'Ionic bond',
      'Metallic bond',
      'Covalent bond',
      'Valence bond'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Covalent bond: Formed by the mutual sharing of one or more pairs of electrons between atoms (typically nonmetals).
• Ionic bond: Formed by the complete transfer of electrons from a metal to a nonmetal resulting in electrostatic attraction.
• Metallic bond: Attraction between a lattice of positive metal ions and a "sea" of delocalized valence electrons.

🇪🇹 አማርኛ (Amharic):
በአቶሞች መካከል ኤሌክትሮኖችን በጋራ በመጋራት (sharing of electrons) የሚፈጠረው የኬሚካል ቦንድ ኮቫለንት ቦንድ (Covalent bond) ይባላል።

🌳 Afaan Oromoo:
Hidhoon elektiroonota waloomaan qooddachuun (sharing of electrons) atoomota gidduutti uumamu hidhoo kovaalantii (covalent bond) jedhama.`,
    hint: 'Sharing electrons forms a covalent bond; transferring electrons forms an ionic bond.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q6',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Intermolecular Forces: Dipole-Dipole Attractions',
    questionText: '6. Which statement below CORRECTLY describes dipole-dipole forces? It is the force that exists:',
    options: [
      'In all molecules.',
      'Between polar molecules.',
      'Between non-polar molecules.',
      'Between polar and non-polar molecules.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Dipole-dipole forces are electrostatic attractive forces that exist between molecules possessing permanent electric dipole moments (polar molecules). The partially positive end (δ+) of one polar molecule is attracted to the partially negative end (δ-) of an adjacent polar molecule (e.g., in HCl or SO2).

🇪🇹 አማርኛ (Amharic):
ዳይፖል-ዳይፖል ሃይሎች (Dipole-dipole forces) የሚከሰቱት ቋሚ የኤሌክትሪክ ፖላሪቲ ባላቸው ፖላር ሞለኪውሎች (polar molecules) መካከል ብቻ ነው።

🌳 Afaan Oromoo:
Humnoonni \'Dipole-dipole\' kan uumaman molekiyuloota poolaarii (polar molecules) qabaniif qofadha.`,
    hint: 'Dipole-dipole forces occur specifically between polar molecules.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q7',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Intermolecular Forces: Relative Strengths of Intermolecular Attractions',
    questionText: '7. Comparing the forces between molecules of similar molar masses, which one of the following produces the weakest force?',
    options: [
      'Covalent bonds',
      'Hydrogen bonding',
      'Ionic forces',
      'Van der Waals forces'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Among intermolecular and intramolecular interactions for substances of comparable molar mass:
1. Ionic forces & Covalent bonds (Intramolecular, strongest: ~100 to 1000 kJ/mol)
2. Hydrogen bonding (Strong intermolecular: ~10 to 40 kJ/mol)
3. Dipole-dipole forces (~5 to 25 kJ/mol)
4. Van der Waals / London dispersion forces (Weakest intermolecular: ~0.05 to 5 kJ/mol).

🇪🇹 አማርኛ (Amharic):
ተቀራራቢ ሞላር ማስ ካላቸው ሞለኪውሎች መካከል ቫን ደር ዋልስ ሃይሎች (Van der Waals / London dispersion forces) በጣም ደካማው ሞለኪውላዊ ሃይል ናቸው።

🌳 Afaan Oromoo:
Humnoota molekiyuloota wal-bira qabamu keessatti humnoonni \'Van der Waals\' humna hundarra dadhabaa ta\'aniidha.`,
    hint: 'London dispersion / Van der Waals forces are the weakest intermolecular forces.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q8',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Stoichiometry: Limiting and Excess Reactants',
    questionText: '8. What is a limiting reactant? It is the reactant that:',
    options: [
      'Is regenerated at the end of the reaction.',
      'Remains unreacted as the reaction proceeds.',
      'Is present in excess when the reaction goes to completion.',
      'Is completely consumed when the reaction goes to completion.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The limiting reactant (or limiting reagent) is the substance that is completely consumed first in a chemical reaction, thereby determining and limiting the maximum theoretical yield of products that can be formed.

🇪🇹 አማርኛ (Amharic):
ወሰኝ ሪአክታንት (Limiting reactant) ማለት ኬሚካላዊ ምላሹ ተጠናቆ ሲያልቅ ሙሉ በሙሉ ተፈጅቶ የሚያልቀው (completely consumed) እና የምርቱን መጠን የሚወስነው ሪአክታንት ነው።

🌳 Afaan Oromoo:
Ri\'aaktantiin murteessaan (limiting reactant) wal-nyaatinsa keemikaalaa keessatti isa jalqaba guutummaatti dhumuun baay\'ina oomishaa murteessudha.`,
    hint: 'The limiting reactant runs out first and is completely consumed.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q9',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Redox Reactions: Characteristics of Redox vs Non-Redox',
    questionText: '9. Which statement below CORRECTLY distinguishes redox and non-redox reactions?',
    options: [
      'Electrons are transferred in redox reactions but not in non-redox reactions.',
      'Reduction occurs in redox reactions and oxidation takes place in non-redox reactions.',
      'Oxidation number remains the same in both redox and non-redox reactions.',
      'Acid-base reactions can be considered as both redox and non-redox reactions.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Redox reactions involve the transfer of electrons from a reducing agent (which undergoes oxidation, losing electrons) to an oxidizing agent (which undergoes reduction, gaining electrons), resulting in changes in oxidation states.
• Non-redox reactions (such as neutralization, precipitation, or double replacement) involve ion combinations without any net transfer of electrons or changes in oxidation numbers.

🇪🇹 አማርኛ (Amharic):
ሬዶክስ (Redox) ምላሾች የኤሌክትሮን ሽግግር (electron transfer) እና የአክሲዴሽን ቁጥር ለውጥ ያለባቸው ሲሆን፤ ኖን-ሬዶክስ ምላሾች ግን የኤሌክትሮን ሽግግር የለባቸውም።

🌳 Afaan Oromoo:
Wal-nyaatinsa \'Redox\' keessatti elektiroononni tokkorraa gara kan biraatti ni daddarbu (electron transfer), wal-nyaatinsa \'non-redox\' keessatti garuu jijjiiramni kun hin jiru.`,
    hint: 'Redox reactions involve electron transfer and oxidation number changes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q10',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Equilibrium: Heterogeneous Equilibrium Expression',
    questionText: '10. Given the reaction C(s) + CO2(g) <=> 2CO(g), what is the equilibrium constant expression for the reaction?',
    options: [
      '[CO]² / [C][CO2]',
      '[CO]² / [CO2]',
      '[CO]² / [C]',
      '[C][CO2] / [CO]²'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In heterogeneous equilibrium expressions, the concentrations of pure solids (like solid carbon, C(s)) and pure liquids are constant and have an activity of 1, so they are omitted from the equilibrium constant expression:
Kc = [CO]² / [CO2].

🇪🇹 አማርኛ (Amharic):
በተለያየ ምዕራፍ (Heterogeneous) ባሉ የኢኩሊብሪየም ስሌቶች ውስጥ፣ ንጹህ ጠጣሮች (እንደ C(s)) እና ፈሳሾች ትኩረታቸው ቋሚ በመሆኑ በኢኩሊብሪየም ቀመር ውስጥ አይካተቱም። ስለዚህ Kc = [CO]² / [CO2] ይሆናል።

🌳 Afaan Oromoo:
Wal-nyaatinsa \'heterogeneous equilibrium\' keessatti jajjaboon qulqulluun (C(s)) shallaggii Kc keessatti hin barreeffamu. Kanaafuu, Kc = [CO]² / [CO2] ta\'a.`,
    hint: 'Pure solids like C(s) are excluded from the equilibrium constant expression.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q11',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'States of Matter: Liquids at Standard Room Conditions',
    questionText: '11. Which of the following pair of substances can be considered as examples of the liquid state of matter at room temperature (25°C) and 1 atm pressure?',
    options: [
      'Carbon and mercury',
      'Water and carbon dioxide',
      'Water and mercury',
      'Carbon and carbon monoxide'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
At standard ambient temperature and pressure (25°C and 1 atm):
• Water (H2O) is a liquid (due to extensive hydrogen bonding).
• Mercury (Hg) is the only metal that exists in the liquid state at room temperature.
• Carbon is a solid; CO2 and CO are gases.

🇪🇹 አማርኛ (Amharic):
በመደበኛ የክፍል ሙቀት (25°C) እና 1 atm ጫና ውስጥ፡ ውሃ (H2O) እና ሜርኩሪ (Hg - ፈሳሽ ብረት) ሁለቱም በፈሳሽ ሁኔታ (liquid state) ይገኛሉ።

🌳 Afaan Oromoo:
Ho\'a kutaa (25°C) fi dhiibbaa 1 atm irratti: bishaan (H2O) fi meerkuriin (Hg) fakkeenya dhangala\'ootaati.`,
    hint: 'Mercury (liquid metal) and water are liquids at room temperature.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q12',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Gas Laws: Ideal Gas Equation Variables',
    questionText: '12. Which gas law describes the behavior of gases using the variables: temperature, volume, pressure and number of moles?',
    options: [
      'Ideal gas law',
      'Boyle\'s law',
      'Avogadro\'s law',
      'Combined gas law'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The Ideal Gas Law combines Boyle's, Charles's, and Avogadro's laws into the single equation:
P · V = n · R · T
which relates Pressure (P), Volume (V), number of moles (n), and absolute Temperature (T).

🇪🇹 አማርኛ (Amharic):
አራቱን ተለዋዋጮች ማለትም ጫና (P)፣ ይዘት (V)፣ የሞል ብዛት (n) እና ሙቀት (T) በአንድ ላይ አጣምሮ የሚገልጸው የጋዝ ህግ አይዲያል ጋዝ ህግ (Ideal gas law: PV = nRT) ይባላል።

🌳 Afaan Oromoo:
Seerri dhiibbaa (P), hanga (V), baay\'ina moolii (n) fi ho\'a (T) walitti hidhee ibsu \'Ideal gas law\' (PV = nRT) jedhama.`,
    hint: 'PV = nRT is the Ideal Gas Law.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q13',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'States of Matter: Kinetic Molecular Theory of Gases',
    questionText: '13. Which statement below describes CORRECTLY the assumptions in the kinetic theory of gases?',
    options: [
      'Gas molecules occupy a finite volume and have indefinite shape.',
      'Gas molecules are in random motion with no interactions.',
      'The average kinetic energies of gas molecules are independent of temperature.',
      'The average kinetic energies of gas molecules are independent of the amount of gas.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
According to the Kinetic Molecular Theory of ideal gases:
1. Gas particles are in continuous, rapid, random, straight-line motion.
2. There are no attractive or repulsive intermolecular forces between particles.
3. The volume of individual gas particles is negligible compared to the total container volume.
4. Average kinetic energy is directly proportional to absolute temperature (Kelvin).

🇪🇹 አማርኛ (Amharic):
በካይኔቲክ ሞለኪውላር ንድፈ-ሀሳብ (Kinetic Molecular Theory) መሰረት የጋዝ ሞለኪውሎች በዘፈቀደ ቀጥተኛ እንቅስቃሴ (random motion) ውስጥ ያሉ ሲሆኑ በመካከላቸው ምንም አይነት የመሳሳብ ወይም የመገፋፋት ሃይል እንደሌለ ይታሰባል።

🌳 Afaan Oromoo:
Akka tiyoorii \'Kinetic Molecular Theory\'tti, molekiyuloonni gaazii sochii addaan hin cinne keessa jiru, akkasumas humna wal-harkisaa wal gidduu hin qaban.`,
    hint: 'Ideal gas particles move randomly in straight lines with zero intermolecular attraction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q14',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Gas Laws: Graham\'s Law of Effusion/Diffusion',
    questionText: '14. If the rate of diffusion of a certain unknown gas is half times the rate of diffusion of helium, what will be the molar mass of the unknown gas? (Atomic mass of He = 4.0 g/mol)',
    options: [
      '2.0 g/mol',
      '8.0 g/mol',
      '16.0 g/mol',
      '32.0 g/mol'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
By Graham\'s Law of Diffusion:
(Rate_unknown / Rate_He) = √(M_He / M_unknown)
1/2 = √(4.0 / M_unknown)
Squaring both sides:
1/4 = 4.0 / M_unknown
M_unknown = 4.0 · 4 = 16.0 g/mol (which corresponds to methane, CH4).

🇪🇹 አማርኛ (Amharic):
በግራሃም የዲፊውዥን ህግ (Graham's Law) መሰረት፡
(Rate_unknown / Rate_He) = √(M_He / M_unknown)
1/2 = √(4 / M_unknown)
ሁለቱንም ወገን በስኩዌር ስናበዛ፡ 1/4 = 4 / M_unknown -> M_unknown = 16.0 g/mol ይሆናል።

🌳 Afaan Oromoo:
Akka seera \'Graham\'s Law\'tti:
(Rate1 / Rate2) = √(M2 / M1)
1/2 = √(4 / M)
(1/2)² = 4 / M -> 1/4 = 4 / M -> M = 16.0 g/mol ta\'a.`,
    hint: '(r1/r2)² = M2/M1 -> (1/2)² = 4/M -> M = 16 g/mol.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q15',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Laboratory Techniques: Boiling Chips and Anti-Bumping Granules',
    questionText: '15. A student added boiling chips into a beaker of water while carrying out an activity to determine the boiling point of water. Why do you think the boiling chips are necessary?',
    options: [
      'To ensure smooth rate of evaporation',
      'To speed up the rate of evaporation',
      'To maintain constant temperature and pressure',
      'To reach the boiling point with less consumption of heat'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Boiling chips (porous ceramic pieces) provide tiny nucleation cavities where vapor bubbles can form smoothly, preventing superheating and violent boiling/splattering (bumping) to ensure smooth, controlled boiling and evaporation.

🇪🇹 አማርኛ (Amharic):
በቤተ-ሙከራ ውስጥ ቦይሊንግ ቺፕስ (boiling chips) መጨመር የሚያስፈልገው ፈሳሹ ድንገት እንዳይገነፍልና በእኩል መጠን በተረጋጋ ሁኔታ እንዲተን (smooth rate of evaporation / prevent bumping) ለማድረግ ነው።

🌳 Afaan Oromoo:
\'Boiling chips\' dabaluun bishaan akka tasgabbaa\'aa ta\'een danfuu fi dhangala\'uun akka hin uumamne (bumping ittisuuf) gargaara.`,
    hint: 'Boiling chips provide nucleation sites to prevent violent bumping and ensure smooth boiling.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q16',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Redox Chemistry: Determination of Oxidation Numbers',
    questionText: '16. What is the oxidation number of manganese in potassium permanganate, KMnO4? (Atomic numbers: K = 19, Mn = 25, O = 8)',
    options: [
      '+5',
      '+6',
      '+7',
      '+8'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In a neutral compound, the sum of oxidation numbers equals zero:
(+1 for K) + (Oxidation state of Mn) + 4 · (-2 for O) = 0
+1 + Mn - 8 = 0
Mn - 7 = 0
Mn = +7.

🇪🇹 አማርኛ (Amharic):
በ KMnO4 ውህድ ውስጥ የማንጋኒዝ (Mn) የአክሲዴሽን ቁጥር ስሌት፡
(+1 ከፖታሲየም) + (Mn) + 4(-2 ከኦክስጅን) = 0
+1 + Mn - 8 = 0
Mn = +7 ይሆናል።

🌳 Afaan Oromoo:
Shallaggii lakkoofsa ooksidiyeeshinii Mn keessatti KMnO4:
(+1) + Mn + 4(-2) = 0
1 + Mn - 8 = 0
Mn = +7 ta\'a.`,
    hint: 'K = +1, O = -2 (x4 = -8). Thus, 1 + Mn - 8 = 0 -> Mn = +7.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q17',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Equations: Balancing Reaction Equations',
    questionText: '17. Aluminum reacts with oxygen to form aluminum oxide. What is the stoichiometric coefficient of aluminum after balancing the reaction?',
    options: [
      '2',
      '4',
      '6',
      '8'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Write the unbalanced reaction:
Al + O2 -> Al2O3
To balance oxygen, place coefficient 3 before O2 and 2 before Al2O3:
Al + 3 O2 -> 2 Al2O3
Now balance aluminum: 2 · 2 = 4 Al atoms on product side, so place 4 before Al:
4 Al + 3 O2 -> 2 Al2O3
The stoichiometric coefficient of aluminum (Al) is 4.

🇪🇹 አማርኛ (Amharic):
የተመጣጠነ የኬሚካል ቀመር፡
4 Al + 3 O2 -> 2 Al2O3
ስለዚህ የአሉሚኒየም (Al) ኮፊሸንት 4 ነው።

🌳 Afaan Oromoo:
Wal-nyaatinsa wal-qixxeessuu:
4 Al + 3 O2 -> 2 Al2O3
Kanaafuu, koo\'effishiyeentiin Al 4 dha.`,
    hint: '4 Al + 3 O2 -> 2 Al2O3 gives coefficient 4 for Aluminum.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q18',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Physical Properties: Crucible Heating and Melting Points',
    questionText: '18. What property of an ionic compound can be investigated by heating it strongly in a crucible?',
    options: [
      'Melting point',
      'Solubility',
      'Malleability',
      'Crystallization point'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Heating a solid substance strongly in a crucible directly tests its thermal stability and melting point (the temperature at which the rigid ionic crystal lattice breaks down into liquid). Ionic solids possess very high melting points due to strong electrostatic lattice energy.

🇪🇹 አማርኛ (Amharic):
ክሩሲብል (crucible) ውስጥ አንድን የአዮኒክ ውህድ በከፍተኛ ሙቀት በማሞቅ የሚፈተሸው ባህሪው የማቅለጫ ነጥብ (Melting point) ነው።

🌳 Afaan Oromoo:
Kuruusibilii (crucible) keessatti jajjaboo ayoonikii ho\'isuun qabxii baqinaa (melting point) isaa qorachuuf tajaajila.`,
    hint: 'Crucible heating measures thermal stability and melting point.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q19',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Atomic Structure: Relative Average Atomic Mass from Isotopes',
    questionText: '19. Silver has two naturally occurring isotopes: 107Ag (52% abundance) and 108Ag (48% abundance). What is the average atomic mass of silver?',
    options: [
      '107.89',
      '108.06',
      '107.48',
      '108.86'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Average atomic mass is calculated by weighted sum:
Average mass = (107 · 0.52) + (108 · 0.48)
= 55.64 + 51.84 = 107.48 amu.

🇪🇹 አማርኛ (Amharic):
አማካይ የአቶሚክ ክብደት ስሌት፡
(107 × 0.52) + (108 × 0.48) = 55.64 + 51.84 = 107.48 amu።

🌳 Afaan Oromoo:
Hanga atoomii giddu-galeessaa:
(107 × 0.52) + (108 × 0.48) = 55.64 + 51.84 = 107.48 amu ta\'a.`,
    hint: '(107 x 0.52) + (108 x 0.48) = 55.64 + 51.84 = 107.48.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q20',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Ionic Bonding: Ion Formation (Cation vs Anion)',
    questionText: '20. Which reaction scheme below illustrates the formation of a cation?',
    options: [
      'Na -> Na+ + e-',
      '2 Cl- -> Cl2 + 2 e-',
      'S + 2 e- -> S2-',
      'Mg2+ + 2 e- -> Mg'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A cation is a positively charged ion formed when a neutral atom loses one or more valence electrons (oxidation):
Na -> Na+ + e- (formation of the sodium cation).
Option C shows anion formation; Option B shows oxidation of an anion; Option D shows reduction of a cation back to metal.

🇪🇹 አማርኛ (Amharic):
ካትአየን (Cation - ፖዘቲቭ አዮን) የሚፈጠረው ገለልተኛ አቶም ኤሌክትሮን ሲያጣ (loss of electrons) ነው፡ Na -> Na+ + e-።

🌳 Afaan Oromoo:
Kaatiyooniin (ayoonii poozatiivii) kan uumamu yeroo atoomiin elektiroonii dhabudha: Na -> Na+ + e-.`,
    hint: 'Loss of electron by a neutral metal atom creates a positive cation (Na -> Na+ + e-).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
