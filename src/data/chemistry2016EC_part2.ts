import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2016_EC_PART2: Question[] = [
  {
    id: 'chem-2016-q21',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Electronic Structure: Periodic Blocks & Electron Configurations',
    questionText: '21. The electronic configuration of an element in the periodic table is 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵. In which block does this element belong?',
    options: [
      'f-block',
      'd-block',
      'p-block',
      's-block'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
An element is categorized into a periodic block based on the subshell in which the differentiating (highest-energy valence) electron resides. Since the last electron enters the 4p orbital (4p⁵), this element (Bromine, Z = 35) belongs to the p-block.

🇪🇹 አማርኛ (Amharic):
አንድ ንጥረ ነገር የሚመደበው የመጨረሻው የቫለንስ ኤሌክትሮን በሚገባበት የኦርቢታል ምድብ ነው። እዚህ ላይ የመጨረሻው ኤሌክትሮን ወደ 4p ኦርቢታል (4p⁵) ስለሚገባ ንጥረ ነገሩ የ p-block አባል ነው።

🌳 Afaan Oromoo:
Elektirooniin isa dhumaa gara 'orbital' 4p (4p⁵) keessa waan galuuf, elementiin kun kutaalee gabatee piriyoodikii keessaa 'p-block' jalatti ramadama.`,
    hint: 'The highest-energy valence subshell is 4p, indicating the p-block.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q22',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Periodic Trends: Atomic Radius Variations',
    questionText: '22. Consider a periodic trend that decreases across a period (from left to right) and increases down a group (from top to bottom). Which of the following periodic properties CORRECTLY agrees with this trend?',
    options: [
      'Electronegativity',
      'Electron affinity',
      'Ionization energy',
      'Atomic radius'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Atomic radius decreases across a period from left to right because increasing effective nuclear charge (Z_eff) pulls the electron cloud closer to the nucleus. Atomic radius increases down a group because additional principal energy levels (shells) are added.

🇪🇹 አማርኛ (Amharic):
የአቶሚክ ራዲየስ (Atomic radius) ከግራ ወደ ቀኝ በፒሪየድ ውስጥ የኒውክሊየስ የመሳብ ሃይል ስለሚጨምር ይቀንሳል፤ በግሩፕ ውስጥ ወደ ታች ደግሞ አዳዲስ የሼል እርከኖች ስለሚጨመሩ ይጨምራል።

🌳 Afaan Oromoo:
'Atomic radius'n sarara (period) keessa yeroo gara mirgaatti deemu ni hir\'ata, garee (group) keessa immoo yeroo gara gadiitti deemu baqqaanni dabalataa waan uumamuuf ni dabala.`,
    hint: 'Atomic radius decreases across a period and increases down a group.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q23',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Bonding: Nature of Covalent Bonds',
    questionText: '23. Which of the following is CORRECT about the formation of a covalent bond? A covalent bond is formed:',
    options: [
      'between positively and negatively charged ions.',
      'between mobile and stationary electrons.',
      'by the sharing of valence electrons.',
      'by the transfer of valence electrons.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A covalent bond is a chemical bond formed by the mutual sharing of one or more pairs of valence electrons between two non-metal atoms with similar electronegativities.

🇪🇹 አማርኛ (Amharic):
ኮቫለንት ቦንድ (Covalent bond) የሚፈጠረው ሁለት አቶሞች የቫለንስ ኤሌክትሮኖቻቸውን እርስ በእርስ በጋራ በመጋራት (sharing) ሲተሳሰሩ ነው።

🌳 Afaan Oromoo:
Hidhoon kovaaleentii (covalent bond) atoomota gidduutti elektiroonota qooddachuudhaan (sharing of valence electrons) kan uumamudha.`,
    hint: 'Covalent bonds form by mutual sharing of valence electrons between atoms.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q24',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Molecular Geometry: Polarity and Dipole Moment of CCl4',
    questionText: '24. The molecule of carbon tetrachloride (CCl4) has four polar (C - Cl) bonds. However, CCl4 is a non-polar molecule. Which of the following explains the reason for the observed property of CCl4?',
    options: [
      'The molecule is non-polar because of the presence of four polar C - Cl bonds in the molecule.',
      'The molecule is non-polar because of the difference in electronegativity between carbon and chlorine.',
      'Even though the bond in CCl4 is polar, the net dipole moment of the molecule is different from zero.',
      'Even though the bond in CCl4 is polar, the net dipole moment of the molecule is zero.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In carbon tetrachloride (CCl4), carbon is sp³-hybridized with a symmetrical regular tetrahedral geometry. The four individual polar C-Cl bond dipole moments point toward the vertices of the tetrahedron, canceling each other out completely as vectors, resulting in a net molecular dipole moment of zero (μ_net = 0).

🇪🇹 አማርኛ (Amharic):
በ CCl4 ውስጥ አራቱ የ C-Cl ቦንዶች ፖላር ቢሆኑም፣ ሞለኪውሉ የተመጣጠነ ቴትራሄድራል (symmetrical tetrahedral) ቅርፅ ስላለው የቦንዶቹ ዳይፖል ሞመንቶች እርስ በእርስ ተሰራርዘው ጠቅላላው ዳይፖል ሞመንት ዜሮ (net dipole moment = 0) ይሆናል።

🌳 Afaan Oromoo:
Molakiyuuliin CCl4 bifa 'tetrahedral' wal-qixa ta\'e waan qabuuf, 'dipole moment'n hidhoota arfanii wal balleessuun 'net dipole moment'n isaa zeeroo (0) ta\'a.`,
    hint: 'Symmetrical tetrahedral geometry causes individual bond dipole vectors to cancel to zero.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q25',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Intermolecular Forces: Hydrogen Bonding in HF, H2O, NH3',
    questionText: '25. Which of the following is responsible for the unusual high boiling points of HF, H2O and NH3 compared to hydrides of other elements in their respective groups?',
    options: [
      'London dispersion forces',
      'Hydrogen bonding',
      'Covalent bonding',
      'Ionic bonding'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Hydrogen bonding is an unusually strong dipole-dipole attraction occurring when hydrogen is directly bonded to small, highly electronegative elements (F, O, N). The strong cohesive intermolecular hydrogen bonds require significantly more thermal energy to break, leading to anomalously elevated boiling points.

🇪🇹 አማርኛ (Amharic):
በ HF፣ H2O እና NH3 ውስጥ ሃይድሮጅን ከፍተኛ ኤሌክትሮኔጋቲቪቲ ካላቸው አቶሞች (F, O, N) ጋር ስለሚገናኝ ጠንካራ የሃይድሮጅን ቦንዲንግ (Hydrogen bonding) ይፈጠራል፤ ይህም ከፍተኛ የመፍላት ሙቀት እንዲኖራቸው ያደርጋል።

🌳 Afaan Oromoo:
Haayidiroojiiniin elementoota elektiroonegativiitii olaanaa qaban (F, O, N) waliin yeroo hidhamu hidhoo haayidiroojiinii cimaa uuma; kunis qabxiin danfifaa isaanii akka dabalu godha.`,
    hint: 'Hydrogen bonding with F, O, and N causes exceptionally high boiling points.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q26',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Acids and Bases: Lewis Acid-Base Definition',
    questionText: '26. Which of the following is a Lewis acid?',
    options: [
      'SO4²⁻',
      'SO3²⁻',
      'BF3',
      'NH3'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A Lewis acid is an electron-pair acceptor. Boron trifluoride (BF3) has only six valence electrons around the central boron atom (an incomplete octet) with an empty 2p orbital capable of accepting a lone pair of electrons from a Lewis base.

🇪🇹 አማርኛ (Amharic):
የሉዊስ አሲድ (Lewis acid) የኤሌክትሮን ጥንድ ተቀባይ (electron-pair acceptor) ነው። ቦሮን ትራይፍሎራይድ (BF3) ማዕከላዊው የቦሮን አቶም ክፍት 2p ኦርቢታል ስላለው ኤሌክትሮን ጥንድ በመቀበል እንደ ሉዊስ አሲድ ይሰራል።

🌳 Afaan Oromoo:
Asiidiin Liwiisii (Lewis acid) tuuta elektiroonii fudhataadha. BF3\'n atooma booroonii irratti elektiroonota 6 qofa waan qabuuf akka 'Lewis acid'tti tajaajila.`,
    hint: 'BF3 has an electron-deficient central boron atom (incomplete octet) that accepts electron pairs.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q27',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Acid-Base Equilibria: Weak Acid Ionization Constant (Ka)',
    questionText: '27. The pH of a 0.10 M aqueous solution of a certain monoprotic acid is 3. What is the value of the acid ionization constant (Ka) of this acid?',
    options: [
      '1.0 × 10⁻⁷',
      '1.0 × 10⁻⁵',
      '1.0 × 10⁻³',
      '1.0 × 10⁻¹'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Calculate [H⁺] from pH:
[H⁺] = 10^(-pH) = 10⁻³ M.

Step 2: For a weak monoprotic acid HA <=> H⁺ + A⁻:
[H⁺] = [A⁻] = 1.0 × 10⁻³ M.
[HA]_eq ≈ [HA]_initial = 0.10 M (since dissociation is negligible).

Step 3: Calculate Ka:
Ka = ([H⁺][A⁻]) / [HA] = (1.0 × 10⁻³)² / 0.10 = (1.0 × 10⁻⁶) / 10⁻¹ = 1.0 × 10⁻⁵.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ [H⁺] = 10⁻³ M
ደረጃ 2፡ የደካማ አሲድ ቀመር Ka = [H⁺]² / [HA]
Ka = (10⁻³)² / 0.10 = 10⁻⁶ / 10⁻¹ = 1.0 × 10⁻⁵።

🌳 Afaan Oromoo:
Tarkaanfii 1: [H⁺] = 10⁻³ M
Tarkaanfii 2: Ka = [H⁺]² / [HA] = (10⁻³)² / 0.10 = 1.0 × 10⁻⁵ ta\'a.`,
    hint: '[H⁺] = 10⁻³ M. Ka = [H⁺]² / [HA] = (10⁻³)² / 0.10 = 1.0 × 10⁻⁵.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q28',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Equilibrium: The Common-Ion Effect',
    questionText: '28. The shift in the position of equilibrium caused by the addition of an ion already involved in the chemical reaction is known as the:',
    options: [
      'common-ion effect',
      'buffer-ion effect',
      'hydrolysis-effect',
      'titration-effect'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The common-ion effect describes the suppression of the ionization of a weak electrolyte (or decrease in solubility of a sparingly soluble salt) when a strong electrolyte containing a common ion is added to the solution, in accordance with Le Chatelier's principle.

🇪🇹 አማርኛ (Amharic):
በአንድ ሚዛናዊነት ውስጥ ካሉት አየኖች ጋር ተመሳሳይ የሆነ የጋራ አየን (Common ion) ከውጭ ሲጨመር የሚፈጠረው የሚዛናዊነት መዛወር 'Common-ion effect' ይባላል።

🌳 Afaan Oromoo:
Ayoonii kanaan dura wal-nyaatinsa keessa jiru dabalataan yeroo naqamu qixxeeffamni gara duubaatti dhiibamuun 'common-ion effect' jedhama.`,
    hint: 'Adding an ion that is already present shifts equilibrium via the common-ion effect.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q29',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Solutions: Definition of Acid-Base Equivalent',
    questionText: '29. Which of the following is CORRECT about equivalents of acids and bases?',
    options: [
      'The volume of an acid or base required to reach equivalence point during acid-base titration reaction.',
      'The number of moles of an acid or base required to form a one molar aqueous acidic or basic solution.',
      'It is the amount of a substance that is required to react with one mole of hydroxide ions in redox reactions.',
      'It is the amount of a substance that is required to react with one mole of hydrogen ions in acid-base reactions.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In stoichiometry and quantitative volumetric analysis, one equivalent of an acid is the amount that supplies one mole of H⁺ ions, and one equivalent of a base is the amount of substance that consumes/reacts with one mole of hydrogen ions (or supplies one mole of OH⁻ ions).

🇪🇹 አማርኛ (Amharic):
በአሲድ-ቤዝ ኬሚስትሪ አንድ ኢክዊቫለንት (Equivalent) ማለት ከአንድ ሞል የሃይድሮጅን አየን (1 mole of H⁺) ጋር ሪአክት የሚያደርግ ወይም የሚለግስ የንጥረ ነገር መጠን ነው።

🌳 Afaan Oromoo:
Wal-nyaatinsa asiidii fi beezii keessatti 'equivalent' jechuun hamma wanta mooolii tokko ayoonii haayidiroojiinii (1 mole of H⁺) waliin wal-nyaatuudha.`,
    hint: 'One equivalent of a substance supplies or reacts with 1 mole of H⁺ ions in acid-base reactions.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q30',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Solutions: Normality and Equivalent Mass of H2SO4',
    questionText: '30. A 250 mL solution is formed by dissolving 24.5 g of sulfuric acid (H2SO4) in water. What is the normality of this solution? (Molar mass of H2SO4 = 98 g/mol)',
    options: [
      '4.00 N',
      '2.00 N',
      '0.250 N',
      '0.125 N'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Calculate moles of H2SO4:
Moles = Mass / Molar mass = 24.5 g / (98 g/mol) = 0.25 mol.

Step 2: Calculate molarity (M):
M = Moles / Volume(L) = 0.25 mol / 0.250 L = 1.00 M.

Step 3: Calculate normality (N):
Since H2SO4 is diprotic, it donates 2 H⁺ equivalents per mole (n-factor = 2):
Normality = Molarity × n = 1.00 M × 2 = 2.00 N.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ ሞል = 24.5 / 98 = 0.25 ሞል
ደረጃ 2፡ ሞላሪቲ = 0.25 / 0.250 L = 1.00 M
ደረጃ 3፡ ሰልፈሪክ አሲድ ሁለት H⁺ ስለሚሰጥ (n = 2)፡
Normality = Molarity × 2 = 1.00 × 2 = 2.00 N።

🌳 Afaan Oromoo:
Tarkaanfii 1: Moolii = 24.5 g / 98 g/mol = 0.25 mol
Tarkaanfii 2: Molarity = 0.25 mol / 0.250 L = 1.0 M
Tarkaanfii 3: H2SO4'n H⁺ lama waan qabuuf (n = 2):
Normality = 1.0 M × 2 = 2.00 N ta\'a.`,
    hint: 'M = 0.25 mol / 0.25 L = 1.0 M. For diprotic H2SO4, Normality = 2 × M = 2.00 N.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q31',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Polymers: Addition vs Condensation Polymerization',
    questionText: '31. What are the two fundamental classifications of polymerization reactions based on the mechanism of polymer synthesis?',
    options: [
      'Condensation and displacement polymerizations',
      'Addition and condensation polymerizations',
      'Condensation and substitution polymerizations',
      'Addition and decomposition polymerizations'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Synthetic and natural polymers are synthesized through two primary reaction types:
1. Addition (Chain-growth) polymerization: Monomers containing multiple bonds link together without eliminating any small molecule.
2. Condensation (Step-growth) polymerization: Monomers with bi- or poly-functional groups react with the elimination of small byproduct molecules like water or HCl.

🇪🇹 አማርኛ (Amharic):
ፖሊመሮች በዋነኝነት የሚመሰረቱባቸው ሁለት የፖሊመራይዜሽን አይነቶች አዲሽን (Addition) እና ኮንደንሴሽን (Condensation) ፖሊመራይዜሽን ይባላሉ።

🌳 Afaan Oromoo:
Gosa gurguddoo lamaan wal-nyaatinsa poolimariin ittiin uumamu 'Addition' fi 'Condensation' polymerization jedhamu.`,
    hint: 'The two main types of polymerizations are addition and condensation polymerizations.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q32',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Polymers: Natural Rubber Monomer',
    questionText: '32. Which of the following is the monomer of natural rubber?',
    options: [
      'Hexamethylene diamine',
      'Isoprene',
      'Ethylene terephthalate',
      'Styrene'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Natural rubber is a natural polymer known chemically as cis-1,4-polyisoprene. Its repeating monomer unit is isoprene (2-methyl-1,3-butadiene, C5H8).

🇪🇹 አማርኛ (Amharic):
የተፈጥሮ ጎማ (Natural rubber) የተገነባበት ሞኖመር አይሶፕሪን (Isoprene ወይም 2-methyl-1,3-butadiene) ይባላል።

🌳 Afaan Oromoo:
'Monomer'n gomee uumamaa (natural rubber) kan ijaaru 'Isoprene' (2-methyl-1,3-butadiene) jedhama.`,
    hint: 'Natural rubber is cis-1,4-polyisoprene, formed from isoprene monomers.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q33',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Environmental Chemistry: Earth Spheres',
    questionText: '33. The component of the environment consisting of the earth\'s solid upper outermost crust that is accessible to human beings is known as the:',
    options: [
      'hydrosphere',
      'atmosphere',
      'biosphere',
      'lithosphere'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The lithosphere is the rigid, solid outermost shell of the Earth, comprising the crust and the uppermost part of the mantle, containing minerals, soils, and rocks.

🇪🇹 አማርኛ (Amharic):
የመሬት የላይኛው ጠጣር ቅርፊት እና የአፈር/ድንጋይ ክፍል የሆነው የአካባቢ ክፍል ሊቶስፌር (Lithosphere) ይባላል።

🌳 Afaan Oromoo:
Qaamni naannoo kan baqqaana lafaa isa jabaataa ta\'ee fi dhagaa fi biyyee of keessaa qabu 'lithosphere' jedhama.`,
    hint: 'The solid outer crust of the Earth is the lithosphere.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q34',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Biogeochemical Cycles: Steps of the Nitrogen Cycle',
    questionText: '34. Consider the following biological and chemical steps in the nitrogen cycle:\nStep 1: Reduction of nitrate by microbial action (assimilation/reduction)\nStep 2: Fixation of atmospheric nitrogen by bacteria and algae\nStep 3: Nitrification by Nitrosomonas and Nitrobacter\nStep 4: Denitrification of nitrate returning nitrogen to the atmosphere\nWhich of the following is the CORRECT natural sequence of the nitrogen cycle?',
    options: [
      'Step 2 -> Step 3 -> Step 1 -> Step 4',
      'Step 1 -> Step 3 -> Step 4 -> Step 2',
      'Step 2 -> Step 3 -> Step 4 -> Step 1',
      'Step 1 -> Step 2 -> Step 3 -> Step 4'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The natural progression of the nitrogen cycle:
1. Nitrogen Fixation (Step 2): Atmospheric N2 converted to ammonia by Rhizobium/cyanobacteria.
2. Nitrification (Step 3): Ammonia oxidized to nitrites and nitrates by Nitrosomonas and Nitrobacter.
3. Assimilation/Reduction (Step 1): Plants reduce nitrates into organic nitrogen compounds.
4. Denitrification (Step 4): Anaerobic bacteria convert nitrates back into N2 gas.

🇪🇹 አማርኛ (Amharic):
የናይትሮጅን ዑደት ቅደም ተከተል፡
1. ናይትሮጅን ፊክሴሽን (Step 2)
2. ናይትሪፊኬሽን (Step 3)
3. ናይትሬትን መቀነስ/መጠቀም (Step 1)
4. ዲናይትሪፊኬሽን (Step 4)
ስለዚህ ትክክለኛው ቅደም ተከተል Step 2 -> Step 3 -> Step 1 -> Step 4 ነው።

🌳 Afaan Oromoo:
Tartiiba seera Naayitiroojiinii: 'Fixation' (Step 2) -> 'Nitrification' (Step 3) -> 'Reduction' (Step 1) -> 'Denitrification' (Step 4).`,
    hint: 'Nitrogen fixation -> Nitrification -> Assimilation/Reduction -> Denitrification.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q35',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Environmental Chemistry: Types of Environmental Hazards',
    questionText: '35. Some hazardous substances damage and create unwanted harmful changes in air, water, soil or any other natural resource. The resulting change created is known as:',
    options: [
      'greenhouse effect',
      'global warming',
      'afforestation',
      'pollution'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Pollution is the direct or indirect introduction of contaminants or hazardous pollutants into the natural environment that cause adverse, harmful changes to ecosystems, air, water, and soil.

🇪🇹 አማርኛ (Amharic):
ጎጂ ንጥረ ነገሮች በአየር፣ በውሃ ወይም በአፈር ላይ የሚያስከትሉት ያልተፈለገ ጉዳት እና ብክለት ፖሉሽን (Pollution/ብክለት) ይባላል።

🌳 Afaan Oromoo:
Wantoonni summaa\'oo ta\'an qilleensa, bishaan yookiin biyyee irratti miidhaa fi faalama yommuu geessisan 'pollution' (faalama) jedhama.`,
    hint: 'The introduction of harmful contaminants into the natural environment is pollution.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q36',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Kinetics: Reaction Mechanisms & Rate-Determining Step',
    questionText: '36. Consider the proposed mechanism for the thermal decomposition of N2O5:\nFirst step: 2N2O5(g) <=> N4O10(g) (fast equilibrium)\nSecond step: N4O10(g) -> N2O5(g) + 2NO2(g) + O2(g) (slow)\nThird step: N2O5(g) + O2(g) -> 2NO2(g) + O3(g) (fast)\nOverall: 2N2O5(g) -> 4NO2(g) + O2(g)\nWhich elementary step is the rate-determining step?',
    options: [
      'The overall step',
      'Second step',
      'Third step',
      'First step'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In a multi-step reaction mechanism, the rate-determining step (RDS) is the slowest elementary step in the sequence. Because it has the highest activation energy barrier, it dictates the overall rate of the chemical reaction. Here, the second step is marked as the slow step.

🇪🇹 አማርኛ (Amharic):
በአንድ ባለ ብዙ ደረጃ ሪአክሽን ውስጥ የሪአክሽኑን አጠቃላይ ፍጥነት የሚወስነው ደረጃ (Rate-determining step) ሁልጊዜ ዝግተኛው (slow step) ደረጃ ነው። ስለዚህ ሁለተኛው ደረጃ (Second step) ነው።

🌳 Afaan Oromoo:
Adeemsa wal-nyaatinsa sadarkaalee baay\'ee qabu keessatti sadarkaan saffisa wal-nyaatinsaa murteessu (rate-determining step) sadarkaa isa suuta deemu (slow step/Second step) dha.`,
    hint: 'The slowest elementary step is always the rate-determining step.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q37',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Equilibrium: Calculation of Equilibrium Constant (Kc)',
    questionText: '37. Consider the following gaseous equilibrium reaction:\nN2(g) + O2(g) <=> 2NO(g)\nThe equilibrium concentrations in a sealed container are: [N2] = 1 × 10⁻⁵ M, [O2] = 2 × 10⁻³ M, and [NO] = 4 × 10⁻⁴ M. What is the value of the equilibrium constant (Kc)?',
    options: [
      '16',
      '4',
      '8',
      '2'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Write the equilibrium constant expression:
Kc = [NO]² / ([N2][O2])

Step 2: Substitute the equilibrium concentrations:
Kc = (4 × 10⁻⁴)² / ((1 × 10⁻⁵)(2 × 10⁻³))
Kc = (16 × 10⁻⁸) / (2 × 10⁻⁸) = 16 / 2 = 8.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ Kc = [NO]² / ([N2][O2])
ደረጃ 2፡ ዋጋዎችን ማስገባት፡
Kc = (4 × 10⁻⁴)² / ((1 × 10⁻⁵)(2 × 10⁻³)) = 16 × 10⁻⁸ / 2 × 10⁻⁸ = 8።

🌳 Afaan Oromoo:
Tarkaanfii 1: Kc = [NO]² / ([N2][O2])
Tarkaanfii 2: Kc = (4 × 10⁻⁴)² / ((1 × 10⁻⁵) × (2 × 10⁻³)) = (16 × 10⁻⁸) / (2 × 10⁻⁸) = 8 ta\'a.`,
    hint: 'Kc = [NO]² / ([N2][O2]) = (4 × 10⁻⁴)² / (1 × 10⁻⁵ × 2 × 10⁻³) = 16 / 2 = 8.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q38',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Chemical Equilibrium: Reaction Quotient (Qc) vs Kc',
    questionText: '38. At a certain temperature, the reaction: N2(g) + 3H2(g) <=> 2NH3(g) has an equilibrium constant Kc = 12.4. If [N2] = 2.0 M, [H2] = 2.0 M and [NH3] = 10.0 M, to which direction will the reaction proceed to reach equilibrium?',
    options: [
      'The equilibrium is independent of the concentration.',
      'The reaction will proceed to the forward direction.',
      'The reaction will proceed to the reverse direction.',
      'The reaction is at a chemical equilibrium.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Compute the reaction quotient Qc:
Qc = [NH3]² / ([N2][H2]³)
Qc = (10.0)² / ((2.0)(2.0)³) = 100 / (2.0 × 8.0) = 100 / 16 = 6.25.

Step 2: Compare Qc with Kc:
Since Qc = 6.25 < Kc = 12.4, the ratio of products to reactants is less than at equilibrium. The system must produce more products by shifting in the forward direction.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1፡ ሪአክሽን ኮሸንት (Qc) ስሌት፡
Qc = (10.0)² / ((2.0)(2.0)³) = 100 / 16 = 6.25
ደረጃ 2፡ Qc (6.25) ከ Kc (12.4) ያነሰ በመሆኑ፣ ሚዛናዊነት ላይ ለመድረስ ሪአክሽኑ ወደ ፊት (ወደ ቀኝ/ወደ ምርቱ) ያመራል።

🌳 Afaan Oromoo:
Qc = 10² / (2 × 2³) = 100 / 16 = 6.25.
Qc < Kc waan ta\'eef (6.25 < 12.4), wal-nyaatinsi gara fuulduraatti (forward direction) deema.`,
    hint: 'Qc = 100 / 16 = 6.25. Since Qc < Kc (6.25 < 12.4), the reaction proceeds forward.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q39',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Organic Chemistry: Functional Groups of Carboxylic Acids',
    questionText: '39. Which of the following is the general structural formula for saturated monocarboxylic acids? (where R is an alkyl group or hydrogen)',
    options: [
      'R-COO-R\' (Ester)',
      'R-COOH (Carboxylic acid)',
      'R-CHO (Aldehyde)',
      'R-CO-R\' (Ketone)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Saturated monocarboxylic acids contain one carboxyl functional group (-COOH or -C(=O)OH) attached to an alkyl group R (or H in methanoic acid), giving the general formula R-COOH.

🇪🇹 አማርኛ (Amharic):
የሞኖካርቦክሲሊክ አሲዶች ጠቅላላ ፎርሙላ R-COOH (ወይም R-C(=O)OH) ነው።

🌳 Afaan Oromoo:
Foormulaan waliigalaa asiidota kaarbooksiiliikii R-COOH jedhama.`,
    hint: 'Carboxylic acids contain the -COOH carbonyl + hydroxyl group.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2016-q40',
    subject: 'Chemistry',
    year: '2016 E.C.',
    topic: 'Applied Chemistry: Oxidation of Ethanol in Traditional Beverages',
    questionText: '40. Upon standing exposed to air for a long period, traditional beverages like "Tella" or "Tej" turn sour. Which of the following is the CORRECT chemical explanation for the observed effect?',
    options: [
      'Addition reaction of alcohol with an acid.',
      'Decomposition reaction of alcohol.',
      'The reduction of alcohol to an acid.',
      'The oxidation of alcohol to an acid.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
When alcoholic drinks are exposed to atmospheric oxygen, airborne acetic acid bacteria (such as Acetobacter aceti) catalyze the aerobic oxidation of ethanol (CH3CH2OH) to ethanoic / acetic acid (CH3COOH):
CH3CH2OH + O2 -> CH3COOH + H2O.
Acetic acid imparts the distinct sour vinegar taste.

🇪🇹 አማርኛ (Amharic):
ጠላ ወይም ጠጅ አየር ላይ ለረጅም ጊዜ ሲቆይ፣ በውስጡ ያለው አልኮል (ኢታኖል) በአየር ኦክሲጅን እና በባክቴሪያ አማካኝነት ኦክሲዳይዝድ ሆኖ ወደ አሴቲክ አሲድ (CH3COOH) ስለሚቀየር ጣዕሙ ኮምጣጣ ይሆናል።

🌳 Afaan Oromoo:
Yeroo farsoon yookiin daadhiin qilleensa keessa yeroo dheeraaf turu, alkoohiliin keessa jiru gara asiidii aseetikitti waan 'oxidize' ta\'uuf mi\'aawuun isaa gara dhangagga\'aatti jijjiirama.`,
    hint: 'Ethanol is aerobically oxidized into acetic (ethanoic) acid, giving a sour taste.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
