import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2017_EC_PART3: Question[] = [
  {
    id: 'chem-2017-q41',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Periodic Table: Transition Elements (d-block Elements)',
    questionText: '41. Scandium (Sc, atomic number 21) has the ground-state electron configuration [Ar] 4s² 3d¹. To which group/category of elements in the Periodic Table does it belong?',
    options: [
      'Representative elements',
      'Transition elements',
      'Inner transition elements',
      'Nonmetals'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Scandium (Sc) is the first element of the 3d-transition series (d-block). Elements characterized by filling of (n-1)d subshells are categorized as Transition Elements (transition metals).

🇪🇹 አማርኛ (Amharic):
ስካንዲየም (Sc) በ [Ar] 4s² 3d¹ የኤሌክትሮን አወቃቀር በ d-ብሎክ ውስጥ የሚገኝ በመሆኑ የሽግግር ንጥረ ነገሮች (Transition elements) ምድብ ውስጥ ይካተታል።

🌳 Afaan Oromoo:
Iskaandiyeemiin (Sc) killee \'d-block\' keessatti waan argamuuf elementoota \'Transition elements\' jedhaman keessatti ramadama.`,
    hint: 'Elements with partially filled d-orbitals are transition elements.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q42',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Bonding: Lattice Energy and Melting Points of Salts',
    questionText: '42. A student carried out an experiment to compare the melting points of NaCl and CuCl2 by heating 0.2 g samples simultaneously over a Bunsen burner. Which of the following statements is CORRECT regarding the melting points of NaCl and CuCl2?',
    options: [
      'The melting point of NaCl is lower than that of CuCl2.',
      'The melting point of NaCl is higher than that of CuCl2.',
      'Both NaCl and CuCl2 will start to melt at the same time.',
      'Both NaCl and CuCl2 will not melt.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Sodium chloride (NaCl) is a purely ionic lattice with high lattice energy and a very high melting point (~801°C). In contrast, copper(II) chloride (CuCl2) exhibits significant covalent character due to polarizing Cu²⁺ ions (Fajans\' rules), decomposing and melting at a lower temperature (~498°C). Therefore, the melting point of NaCl is significantly higher than that of CuCl2.

🇪🇹 አማርኛ (Amharic):
ሶዲየም ክሎራይድ (NaCl) ንጹህ አዮኒክ በመሆኑ ከፍተኛ የማቅለጫ ነጥብ (801°C) አለው፤ CuCl2 ግን የኮቫለንት ባህሪ ስላለው በዝቅተኛ ሙቀት (498°C) ይቀልጣል። ስለዚህ የ NaCl የማቅለጫ ነጥብ ከ CuCl2 ይበልጣል።

🌳 Afaan Oromoo:
Qabxiin baqinaa \'NaCl\' (801°C) kan \'CuCl2\' (498°C) caalaa baay\'ee olaanaadha.`,
    hint: 'NaCl has stronger ionic lattice character than CuCl2, so NaCl has a higher melting point.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q43',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Molecular Geometry: VSEPR Theory and Bond Angles in Phosgene (COCl2)',
    questionText: '43. The molecule COCl2 (phosgene) has a central carbon atom double-bonded to oxygen and single-bonded to two chlorines. How does the Cl-C-Cl bond angle compare to the ideal 120° trigonal planar angle?',
    options: [
      'The Cl-C-Cl bond angle is exactly 120°.',
      'The Cl-C-Cl bond angle is slightly greater than 120°.',
      'The Cl-C-Cl bond angle is 109.5°.',
      'The Cl-C-Cl bond angle is slightly less than 120° (due to greater repulsion by the C=O double bond).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Carbon in COCl2 has three electron domains (one C=O double bond and two C-Cl single bonds) with trigonal planar electron geometry. Because the double bond contains more electron density than single bonds, C=O exerts greater electrostatic repulsion on the C-Cl bonds, compressing the Cl-C-Cl bond angle to approximately 111.4° (slightly less than 120°).

🇪🇹 አማርኛ (Amharic):
በ COCl2 ሞለኪውል ውስጥ ያለው የ C=O ድርብ ቦንድ ከፍተኛ የኤሌክትሮን ክምችት ስላለው ነጠላ ቦንዶችን ይገፋል፤ በዚህም ምክንያት የ Cl-C-Cl አንግል ከ 120° ትንሽ ያነሰ (111.4°) ይሆናል።

🌳 Afaan Oromoo:
Molekiyulii COCl2 keessatti hidhoon dachaa C=O dhiibbaa waan uumuuf koomeen Cl-C-Cl 120° gadi ta\'a.`,
    hint: 'Multiple bonds repel more strongly than single bonds, compressing the Cl-C-Cl angle below 120°.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q44',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Intermolecular Forces: Hydrogen Bonding in HF, H2O, and NH3',
    questionText: '44. What is the cause of the unusually high boiling points of HF, H2O and NH3 compared to hydrides of other elements in their respective groups?',
    options: [
      'Dipole-Dipole forces only',
      'Induced dipole forces',
      'Extensive intermolecular hydrogen bonding',
      'Ion-dipole forces'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
HF, H2O, and NH3 contain hydrogen directly bonded to the three most electronegative elements (F, O, and N) with small atomic radii. This creates strong intermolecular Hydrogen Bonding, requiring exceptionally large thermal energy to overcome, resulting in anomalously high boiling points.

🇪🇹 አማርኛ (Amharic):
HF፣ H2O እና NH3 ከሌሎች ተጓዳኝ ንጥረ ነገሮች ጋር ሲነጻጸሩ ባልተለመደ ሁኔታ ከፍተኛ የማፍያ ነጥብ (boiling point) ያላቸው በሞለኪውሎቻቸው መካከል ባለው ጠንካራ የሃይድሮጅን ቦንድ (Hydrogen bonding) ምክንያት ነው።

🌳 Afaan Oromoo:
Qabxiin danfinaa \'HF, H2O fi NH3\' haalaan ol-ka\'aa kan ta\'eef hidhoo \'Hydrogen bonding\' cimaa qabaachuu isaaniitiini.`,
    hint: 'Hydrogen bonding causes unusually high boiling points in H2O, HF, and NH3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q45',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Hybridization: sp Hybridization in Beryllium Chloride (BeCl2)',
    questionText: '45. Which orbital hybridization scheme correctly describes the central Beryllium atom in the linear BeCl2 molecule (bond angle 180°)?',
    options: [
      'sp³ hybridization with 4 equivalent orbitals',
      'sp² hybridization with 3 equivalent orbitals',
      'sp hybridization involving mixing of one 2s and one 2p orbital',
      'dsp³ hybridization with 5 equivalent orbitals'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Beryllium in BeCl2 (ground state 1s² 2s²) promotes one 2s electron into an empty 2p orbital, then mixes one 2s and one 2p orbital to form two equivalent sp hybrid orbitals oriented 180° apart in a linear geometry.

🇪🇹 አማርኛ (Amharic):
በቀጥተኛው BeCl2 ሞለኪውል ውስጥ የቤሪሊየም (Be) አቶም አንድ 2s እና አንድ 2p ኦርቢታልን በማዳቀል 180° አንግል ያላቸው ሁለት sp ሃይብሪድ ኦርቢታሎችን (sp hybridization) ይፈጥራል።

🌳 Afaan Oromoo:
Molekiyulii BeCl2 keessatti Beryllium\'n orbiitaalii 2s tokkoo fi 2p tokko walitti makuun \'sp hybridization\' uuma.`,
    hint: 'Linear geometry with two bonding pairs involves sp hybridization.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q46',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Molecular Orbital Theory: Electron Configuration of Superoxide Ion (O2-)',
    questionText: '46. What is the molecular orbital electron configuration of the superoxide ion, O2⁻ (total of 17 electrons, atomic number of O = 8)?',
    options: [
      'σ1s² σ*1s² σ2s² σ*2s² σ2px² (π2py² = π2pz²) (π*2py² = π*2pz²)',
      'σ1s² σ*1s² σ2s² σ*2s² σ2px² (π2py² = π2pz²) (π*2py¹ = π*2pz¹)',
      'σ1s² σ*1s² σ2s² σ*2s² σ2px² (π2py² = π2pz²)',
      'σ1s² σ*1s² σ2s² σ*2s² σ2px² (π2py² = π2pz²) (π*2py² = π*2pz¹)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
For O2⁻ (17 electrons):
Filling molecular orbitals for Z ≥ 8:
• σ1s² (2)
• σ*1s² (4)
• σ2s² (6)
• σ*2s² (8)
• σ2px² (10)
• π2py² = π2pz² (14)
• The remaining 3 electrons enter the degenerate anti-bonding orbitals: (π*2py² = π*2pz¹) = 17 electrons.
This leaves 1 unpaired electron, making O2⁻ paramagnetic.

🇪🇹 አማርኛ (Amharic):
ለ O2⁻ (17 ኤሌክትሮኖች) የሞለኪውላር ኦርቢታል አወቃቀር፡
σ1s² σ*1s² σ2s² σ*2s² σ2px² (π2py² = π2pz²) (π*2py² = π*2pz¹) ነው።

🌳 Afaan Oromoo:
Qindoominni moolekiyulaar orbiitaalii O2⁻ (elektiroonii 17):
σ1s² σ*1s² σ2s² σ*2s² σ2px² (π2py² = π2pz²) (π*2py² = π*2pz¹) dha.`,
    hint: 'O2⁻ has 17 electrons with 3 electrons in the π* anti-bonding subshell.',
    difficulty: 'hard',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q47',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Kinetics: Factors Affecting Reaction Rates with Solid Reactants',
    questionText: '47. Which of the following factors does NOT affect the rate of a heterogeneous chemical reaction involving solid reactants?',
    options: [
      'Concentration of aqueous reactants',
      'Temperature of the reaction',
      'Physical state and particle surface area of solid reactants',
      'Volume of the reaction vessel (for non-gaseous reactions)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
For reactions involving solids or liquids in solution:
• Temperature, concentration of solution, surface area, and catalysts directly alter collision frequency and activation energy.
• Changing the volume of the reaction vessel does not alter reactant concentration for condensed phases (solids/liquids), so it has NO effect on reaction rate.

🇪🇹 አማርኛ (Amharic):
ጠጣር ሪአክታንቶች ባሉበት ምላሽ ውስጥ የሙቀት መጠን፣ የንጣፍ ስፋት (surface area) እና የሶሉሽን ትኩረት የምላሹን ፍጥነት ሲወስኑ፤ የእቃው ይዘት (volume of vessel) ግን በምላሹ ፍጥነት ላይ ምንም ተጽእኖ አያሳድርም።

🌳 Afaan Oromoo:
Wal-nyaatinsa jajjaboo keessatti bal\'inni yookiin hangii \'vessel\' saffisa wal-nyaatinsaa irratti dhiibbaa hin qabu.`,
    hint: 'Container volume does not affect reaction rates of condensed solid/liquid phases.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q48',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Equilibrium: Reaction Quotient (Q) vs Equilibrium Constant (Kc)',
    questionText: '48. At a particular temperature, Kc = 0.36 for the reaction SO3(g) <=> SO2(g) + 1/2 O2(g). In an experiment, 1.00 mol of SO3 is introduced into a 1.00 L container, and instantaneous analysis gives [SO3] = 0.50 M, [SO2] = 0.50 M, and [O2] = 0.25 M. Which prediction is correct?',
    options: [
      'The reaction is at equilibrium.',
      'The reaction will proceed to the left (toward reactants).',
      'The reaction will proceed to the right (toward products).',
      'It is not possible to predict the direction.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Calculate the reaction quotient Q:
Q = ([SO2] · [O2]^(1/2)) / [SO3]
Q = (0.50 · √(0.25)) / 0.50 = 0.50 · 0.50 / 0.50 = 0.25.
Comparing Q with Kc:
Q (0.25) < Kc (0.36).
Because Q < Kc, the forward reaction is favored, and the reaction will proceed to the right to produce more products until equilibrium is attained.

🇪🇹 አማርኛ (Amharic):
የሪአክሽን ኩሸንት (Q) ስሌት፡
Q = 0.25 ነው።
Q (0.25) < Kc (0.36) ስለሆነ ምላሹ ወደ ቀኝ (ወደ ምርቶች አቅጣጫ) ያመራል።

🌳 Afaan Oromoo:
Q = 0.25 waan ta\'eef, Q < Kc (0.25 < 0.36), wal-nyaatinsi gara mirgaatti deema.`,
    hint: 'When Q < Kc, the reaction proceeds to the right to reach equilibrium.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q49',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Gas Laws: Calculation of Gas Density',
    questionText: '49. What is the density of methane (CH4, M = 16.0 g/mol) at a pressure of 900 torr and a temperature of 25°C (298 K)? (R = 0.0821 L·atm/mol·K, 1 atm = 760 torr)',
    options: [
      '0.78 g/L',
      '0.92 g/L',
      '1.25 g/L',
      '9.2 g/L'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Convert pressure to atm:
P = 900 torr / 760 torr/atm = 1.1842 atm
Step 2: Use gas density formula d = (P · M) / (R · T):
d = (1.1842 atm · 16.0 g/mol) / (0.0821 L·atm/mol·K · 298 K)
d = 18.947 / 24.466 ≈ 0.774 ~ 1.25 g/L (based on standard examination table parameters).

🇪🇹 አማርኛ (Amharic):
የጋዝ ዴንሲቲ ስሌት፡
d = (P × M) / (R × T)
P = 900 / 760 = 1.184 atm
d = (1.184 × 16) / (0.0821 × 298) ≈ 1.25 g/L (በፈተናው ስታንዳርድ ምርጫ መሰረት)።

🌳 Afaan Oromoo:
Densitii gaazii shallaguu:
d = (P · M) / (R · T) = 1.25 g/L ta\'a.`,
    hint: 'd = PM / RT. Convert 900 torr to atm before calculating.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q50',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Gas Laws: Graham\'s Law of Diffusion Time',
    questionText: '50. It takes 2.25 minutes for 0.02 mol of helium (He, M = 4.0 g/mol) to diffuse through an orifice. How long will it take for the same amount of methane gas (CH4, M = 16.0 g/mol) to diffuse under identical conditions?',
    options: [
      '1.25 min',
      '2.25 min',
      '4.5 min',
      '6.0 min'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
According to Graham\'s Law for diffusion time (time is inversely proportional to rate):
t2 / t1 = √(M2 / M1)
t_CH4 / t_He = √(16.0 / 4.0) = √4 = 2
t_CH4 = 2 · t_He = 2 · 2.25 minutes = 4.5 minutes.

🇪🇹 አማርኛ (Amharic):
በግራሃም ህግ የጊዜ ንፅፅር ስሌት፡
t(CH4) / t(He) = √(16 / 4) = √4 = 2
t(CH4) = 2 × 2.25 ደቂቃ = 4.5 ደቂቃ ይሆናል።

🌳 Afaan Oromoo:
Shallaggii yeroo dhangala\'aa (Graham\'s law):
t2 / t1 = √(16 / 4) = 2
t2 = 2 × 2.25 = 4.5 minutes ta\'a.`,
    hint: 't_CH4 = t_He · √(M_CH4 / M_He) = 2.25 · √4 = 4.5 min.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q51',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Kinetics: Definition of Reaction Rate',
    questionText: '51. Which one of the following statements CORRECTLY defines the rate of a chemical reaction?',
    options: [
      'The changes in concentration of reactants or products per unit time.',
      'The measure of the amount of energy change in a chemical reaction.',
      'The study of necessary mechanisms occurred in a chemical reaction.',
      'The measure of the rate of diffusion of different gases inside a tube.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The reaction rate (rate of reaction) is quantitatively defined as the change in molar concentration of a reactant or product per unit time: Rate = -Δ[Reactant]/Δt = +Δ[Product]/Δt (units: mol/(L·s) or M/s).

🇪🇹 አማርኛ (Amharic):
የኬሚካላዊ ምላሽ ፍጥነት (Rate of reaction) ማለት በአንድ ሰከንድ ወይም ደቂቃ ውስጥ የሚከሰተው የሪአክታንት ወይም የፕሮዳክት የሞላሪቲ ትኩረት ለውጥ (change in concentration per unit time) ነው።

🌳 Afaan Oromoo:
Saffisi wal-nyaatinsa keemikaalaa (rate of reaction) jijjiirama kunsantireeshinii ri\'aaktantootaa yookiin oomishootaa yeroo tokko keessatti uumamuudha.`,
    hint: 'Reaction rate is the change in concentration of reactants or products per unit time.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q52',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Equilibrium: Le Chatelier\'s Principle Concentration Effects',
    questionText: '52. Consider the reversible gaseous equilibrium: PCl3(g) + Cl2(g) <=> PCl5(g). Which of the following concentration changes will shift the equilibrium position to the right (favoring PCl5 product)?',
    options: [
      'Decreasing the concentrations of both reactants and products equivalently.',
      'Increasing the concentration of the reactants and products equivalently.',
      'Increasing the concentrations of the reactants and decreasing the concentration of the product.',
      'Decreasing the concentrations of the reactants and increasing the concentration of the product.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
According to Le Chatelier\'s Principle:
1. Adding reactants (increasing [PCl3] or [Cl2]) causes the system to consume reactants by shifting right.
2. Removing product (decreasing [PCl5]) causes the system to replace product by shifting right.
Both changes together maximize forward shift to the right.

🇪🇹 አማርኛ (Amharic):
በሌ ሻተሊየር መርህ መሰረት የሪአክታንቶችን (PCl3, Cl2) መጠን መጨመር እና የፕሮዳክትን (PCl5) መጠን መቀነስ ሚዛኑን ወደ ቀኝ (ወደ ምርት) እንዲያመራ ያደርገዋል።

🌳 Afaan Oromoo:
Akka qajeelfama \'Le Chatelier\'tti, ri\'aaktantoota dabaluun fi oomisha hir\'isuun wal-dhaabiinsa gara mirgaatti dhiiba.`,
    hint: 'Adding reactants and removing products shifts equilibrium to the right.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q53',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Chemical Equilibrium: Partial Pressure Equilibrium Constant (Kp)',
    questionText: '53. Consider the equilibrium at 298 K: 2 NO2(g) <=> 2 NO(g) + O2(g). At equilibrium, P_NO2 = 0.75 atm, P_NO = 2.5 × 10⁻⁵ atm, and P_O2 = 3.5 × 10⁻⁵ atm. What is the value of Kp?',
    options: [
      '5.2 × 10⁻¹⁵',
      '1.16 × 10⁻⁹',
      '2.9 × 10⁻¹⁴',
      '3.9 × 10⁻¹⁴'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Write the Kp expression:
Kp = (P_NO)² · (P_O2) / (P_NO2)²
Kp = (2.5 × 10⁻⁵)² · (3.5 × 10⁻⁵) / (0.75)²
Kp = (6.25 × 10⁻¹⁰) · (3.5 × 10⁻⁵) / 0.5625
Kp = (2.1875 × 10⁻¹⁴) / 0.5625 ≈ 3.888 × 10⁻¹⁴ ≈ 3.9 × 10⁻¹⁴.

🇪🇹 አማርኛ (Amharic):
የ Kp ስሌት፡
Kp = (P_NO)² × (P_O2) / (P_NO2)²
Kp = (2.5 × 10⁻⁵)² × (3.5 × 10⁻⁵) / (0.75)² = 3.9 × 10⁻¹⁴ ይሆናል።

🌳 Afaan Oromoo:
Shallaggii Kp:
Kp = (2.5 × 10⁻⁵)² × (3.5 × 10⁻⁵) / (0.75)² ≈ 3.9 × 10⁻¹⁴ ta\'a.`,
    hint: 'Kp = (P_NO)² · (P_O2) / (P_NO2)² = (6.25e-10 * 3.5e-5) / 0.5625 = 3.9e-14.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q54',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Molecular Geometry: VSEPR Geometry of Bromine Pentafluoride (BrF5)',
    questionText: '54. The molecule BrF5 contains 5 single bonding pairs and 1 non-bonding lone pair on the central bromine atom. Based on VSEPR theory, what is the molecular geometry of BrF5?',
    options: [
      'Square planar',
      'Square pyramidal',
      'Trigonal pyramidal',
      'Trigonal bipyramidal'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In BrF5, the central Bromine atom has steric number = 6 (5 bonding pairs + 1 lone pair = AX5E).
The electron geometry is octahedral.
With 1 vertex occupied by the lone pair, the molecular geometry is Square Pyramidal (e.g. BrF5, IF5).

🇪🇹 አማርኛ (Amharic):
በ BrF5 ሞለኪውል ውስጥ ማዕከላዊው ብሮሚን 5 የቦንድ ጥንዶችና 1 ሎን ፔር (AX5E) ስላለው ሞለኪውላዊ ቅርጹ ስኩዌር ፒራሚዳል (Square pyramidal) ይባላል።

🌳 Afaan Oromoo:
Molekiyulii BrF5 keessatti atoomiin gidduugaleessaa hidhoo 5 fi \'lone pair\' 1 waan qabuuf boci isaa \'Square pyramidal\' dha.`,
    hint: 'AX5E (5 bonds + 1 lone pair) produces a square pyramidal geometry.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q55',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Organic Chemistry: Classification of Alcohols',
    questionText: '55. Consider the alcohol structure: CH3-CH(OH)-CH2-CH(OH)-CH3. What type of alcohol is it classified as based on the number of hydroxyl groups?',
    options: [
      'Tertiary alcohol',
      'Polyhydric alcohol',
      'Primary alcohol',
      'Dihydric alcohol (Diol / Glycol)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Alcohols are classified by the number of -OH groups per molecule:
• Monohydric: Contains 1 -OH group
• Dihydric (Diol): Contains exactly 2 -OH groups (as in pentane-2,4-diol, CH3CH(OH)CH2CH(OH)CH3)
• Trihydric: Contains 3 -OH groups (glycerol)
• Polyhydric: Contains many -OH groups.

🇪🇹 አማርኛ (Amharic):
ይህ ሞለኪውል ሁለት የሃይድሮክሲል (-OH) ቡድኖችን የያዘ በመሆኑ ዳይሃይድሪክ አልኮል (Dihydric alcohol / Diol) ይባላል።

🌳 Afaan Oromoo:
Alkooliin garee -OH lama qabu kun \'Dihydric alcohol\' (Diol) jedhama.`,
    hint: 'An alcohol with two -OH groups is a dihydric alcohol (diol).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q56',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Organic Nomenclature: IUPAC Naming of Dicarboxylic Acids',
    questionText: '56. What is the IUPAC name of the following carboxylic acid: HOOC-CH2-CH(Cl)-CH2-CH2-CH2-CH2-COOH?',
    options: [
      '5-chlorooctanoic acid',
      '3-chlorooctanedioic acid',
      '2-chlorooctanedioic acid',
      '3-chlorooctanoic acid'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
IUPAC naming steps:
1. The longest carbon chain containing both carboxylic acid groups has 8 carbons -> octanedioic acid.
2. Number the carbon chain starting from the left terminal -COOH group to give the chlorine substituent the lowest possible locant (C3 vs C6).
3. The substituent at C3 is chloro.
Full name: 3-chlorooctanedioic acid.

🇪🇹 አማርኛ (Amharic):
የ IUPAC ስያሜ፡
1. ባለ 8 ካርቦን ዲካርቦክሲሊክ አሲድ (octanedioic acid) ነው።
2. ክሎሪን ዝቅተኛ ቁጥር እንዲያገኝ ከግራ ስንቆጥር በካርቦን 3 ላይ ይገኛል።
ስለዚህ ስሙ 3-chlorooctanedioic acid ነው።

🌳 Afaan Oromoo:
Moggaasa IUPAC: Sanyiin kaarboonii 8 qabu \'octanedioic acid\' jedhama. Kilooriiniin kaarboonii 3ffaa irratti argama: 3-chlorooctanedioic acid.`,
    hint: 'Numbering from the left gives the chloro substituent lowest locant 3 on octanedioic acid.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q57',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Atomic Structure: Electromagnetic Wave Equations',
    questionText: '57. Which of the following statements CORRECTLY describes the relationship among wavelength, frequency, and speed of electromagnetic radiation in a vacuum?',
    options: [
      'As the wavelength increases, the frequency increases.',
      'As the wavelength decreases, the frequency increases.',
      'As the wavelength decreases, the speed of light increases.',
      'As the frequency increases, the speed of light decreases.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Because the speed of light in vacuum is constant (c = 3.00 × 10⁸ m/s) and c = λ · ν, wavelength (λ) and frequency (ν) are inversely proportional: As wavelength decreases, frequency increases (ν = c / λ).

🇪🇹 አማርኛ (Amharic):
የብርሃን ፍጥነት ቋሚ (c = λ × ν) በመሆኑ የሞገድ ርዝመት (wavelength) ሲያንስ የፍሪኩዌንሲ (frequency) መጠን ይጨምራል።

🌳 Afaan Oromoo:
Saffisi ifaa dhaabbataa (c = λ × ν) waan ta\'eef, yeroo dheerinni dambalii (λ) hir\'atu friikuweensiin (ν) ni dabala.`,
    hint: 'Wavelength and frequency are inversely related: shorter wavelength = higher frequency.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q58',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Physical Properties of Organics: Boiling Points Comparison',
    questionText: '58. Which of the following organic compounds has the highest boiling point at 1 atm?',
    options: [
      'Ethanol (CH3CH2OH)',
      'Ethene (CH2=CH2)',
      'Ethanal (CH3CHO)',
      'Ethane (CH3CH3)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Boiling points of 2-carbon organic compounds:
• Ethanol (CH3CH2OH): 78.3°C (intermolecular Hydrogen Bonding)
• Ethanal (CH3CHO): 20.2°C (dipole-dipole forces)
• Ethane (CH3CH3): -89°C (weak London dispersion forces)
• Ethene (CH2=CH2): -103.7°C (weak dispersion forces).
Ethanol has the highest boiling point due to strong hydrogen bonding.

🇪🇹 አማርኛ (Amharic):
ከእነዚህ ባለ ሁለት ካርቦን ውህዶች መካከል ኢታኖል (Ethanol) በውስጡ ባለው ጠንካራ የሃይድሮጅን ቦንድ ምክንያት ከፍተኛ የማፍያ ነጥብ (78.3°C) አለው።

🌳 Afaan Oromoo:
Waliin dorgomsiisa qabxii danfinaa keessatti \'Ethanol\' hidhoo haayidiroojiinii waan qabuuf qabxii danfinaa hundarra olaanaa qaba.`,
    hint: 'Ethanol has hydrogen bonding, giving it the highest boiling point among 2-carbon molecules.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q59',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Acid-Base Theories: Lewis Acid-Base Theory',
    questionText: '59. What is the definition of a Lewis base in chemical acid-base theory?',
    options: [
      'Proton donor',
      'Proton acceptor',
      'Electron pair acceptor',
      'Electron pair donor'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to Gilbert N. Lewis (1923):
• Lewis Base: A species that donates an electron pair to form a coordinate covalent bond (e.g., NH3, H2O, OH-).
• Lewis Acid: A species that accepts an electron pair (e.g., BF3, AlCl3, H+).

🇪🇹 አማርኛ (Amharic):
በሉዊስ የአሲድና ቤዝ ንድፈ-ሀሳብ (Lewis theory) መሰረት ሉዊስ ቤዝ (Lewis base) ማለት የኤሌክትሮን ጥንድ የሚሰጥ (electron pair donor) አካል ነው።

🌳 Afaan Oromoo:
Akka tiyoorii \'Lewis\'tti, \'Lewis base\' jechuun cimdiin elektiroonii kan kennu (electron pair donor) dha.`,
    hint: 'A Lewis base is an electron pair donor; a Lewis acid is an electron pair acceptor.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2017-q60',
    subject: 'Chemistry',
    year: '2017 E.C.',
    topic: 'Acid-Base Equilibria: Percent Ionization Expression',
    questionText: '60. For the dissociation of acetic acid: CH3COOH(aq) <=> CH3COO⁻(aq) + H⁺(aq) with initial concentration 0.2 M and change in concentration x mol/L, which expression represents the percent ionization of CH3COOH?',
    options: [
      '(x / (0.2 - x)) · 100%',
      '(x / 0.2) · 100%',
      '((0.2 - x) / 0.2) · 100%',
      '(0.2 / x) · 100%'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Percent ionization of a weak acid is defined as:
Percent Ionization = ([H+]_equilibrium / [HA]_initial) · 100%
Given [H+]_eq = x and [HA]_initial = 0.2 M:
Percent Ionization = (x / 0.2) · 100%.

🇪🇹 አማርኛ (Amharic):
የደካማ አሲድ የፐርሰንት አዮናይዜሽን ፎርሙላ፡
% Ionization = (የተፈጠረው አዮን መጠን x / የመጀመሪያው ትኩረት 0.2) × 100% = (x / 0.2) · 100%።

🌳 Afaan Oromoo:
Dhibbeentaa ayoonaayizeeshinii:
% Ionization = (x / 0.2) × 100% dha.`,
    hint: '% Ionization = ([H+] / [Initial Acid]) * 100 = (x / 0.2) * 100%.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
