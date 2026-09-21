import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const CHEMISTRY_2014_EC_PART3: Question[] = [
  {
    id: 'chem-2014-q41',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Solutions: Definition of Concentration',
    questionText: '41. What is the concentration of a solution? It is',
    options: [
      'number of moles of solute and number of moles of solvent.',
      'the amount of solute needed to make a concentrated solution.',
      'the amount of solvent needed to dissolve a solute.',
      'the quantity of solute in a given quantity of solution.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Concentration is a fundamental chemical measure defined as the amount/quantity of solute dissolved in a given volume or mass of solution (or solvent) (e.g., Molarity = moles of solute / liters of solution).

🇪🇹 አማርኛ (Amharic):
የመፍትሄ ክምችት (Concentration of a solution) ማለት በተወሰነ የመፍትሄ መጠን (solution quantity) ውስጥ የተሟሟ የንጥረ ነገር (solute) መጠን ነው።

🌳 Afaan Oromoo:
Konseentireeshiniin bulbulamaa jechuun hammamtaan wanta bulbulamee (solute) bulbulama kenname keessatti argamuudha.`,
    hint: 'Concentration measures solute quantity per unit of solution or solvent.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q42',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Solutions: Molarity & Mole Calculation',
    questionText: '42. How many moles of C₁₂H₂₂O₁₁ (sucrose, Molecular weight = 342.91 g/mol) is needed to prepare 2.0 L of 0.3 M solution?',
    options: [
      '1.2 moles',
      '0.6 moles',
      '0.43 moles',
      '0.15 moles'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Molarity (M) = moles of solute (n) / Volume of solution in liters (V).
n = M × V
n = (0.3 mol/L) × 2.0 L = 0.6 moles.

🇪🇹 አማርኛ (Amharic):
ሞላሪቲ (M) = የሞል ብዛት (n) / ይዘት በሊትር (V)
n = M × V = 0.3 mol/L × 2.0 L = 0.6 ሞል (moles)።

🌳 Afaan Oromoo:
n = M × V = 0.3 mol/L × 2.0 L = 0.6 mol dha.`,
    hint: 'Multiply molarity by volume in liters: n = M * V = 0.3 * 2.0 = 0.6 mol.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q43',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Colligative Properties: Raoult\'s Law Vapor Pressure Lowering',
    questionText: '43. At 75°C, the vapor pressure of pure water is 39 kPa. Which one of the following is the vapor pressure of a solution obtained by dissolving 34.2 g sucrose in 180 mL of water? (Assume that the density of water is 1.000 g/mL)',
    options: [
      '44.5 kPa',
      '41.1 kPa',
      '38.6 kPa',
      '31.2 kPa'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
1. Mass of water = 180 mL × 1.0 g/mL = 180 g.
2. Moles of solvent (water, H₂O, M = 18 g/mol):
   n_water = 180 g / 18 g/mol = 10.0 mol.
3. Moles of non-volatile solute (sucrose, M = 342 g/mol):
   n_sucrose = 34.2 g / 342 g/mol = 0.10 mol.
4. Total moles = 10.0 + 0.10 = 10.10 mol.
5. Mole fraction of water (X_water) = 10.0 / 10.10 = 0.9901.
6. By Raoult's Law: P_solution = X_water × P°_water = 0.9901 × 39 kPa = 38.61 kPa ≈ 38.6 kPa.

🇪🇹 አማርኛ (Amharic):
የውሃ ሞል = 180/18 = 10 ሞል። የሱክሮስ ሞል = 34.2/342 = 0.1 ሞል።
የውሃ ሞል ክፍልፋይ (X_water) = 10 / 10.1 = 0.9901።
በራኦልት ሕግ፦ P_solution = 0.9901 × 39 kPa = 38.6 kPa።

🌳 Afaan Oromoo:
Moolii bishaanii = 10 mol, Moolii sukaaraa = 0.1 mol.
X_bishaanii = 10 / 10.1 = 0.9901.
P_bulbulamaa = 0.9901 × 39 kPa = 38.6 kPa.`,
    hint: 'Use Raoult\'s law: P_solution = X_water * P°_water. X_water = 10 / (10 + 0.1) = 0.99, P = 0.99 * 39 = 38.6 kPa.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q44',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Colligative Properties: Electrolytes vs Non-Electrolytes',
    questionText: '44. Which of the following statements is NOT true about the colligative properties of electrolytes and non-electrolytes?',
    options: [
      'The effect of non-electrolytes on colligative properties is the same as those of electrolytes.',
      'The effect of non-electrolytes on colligative properties is very low compared to electrolytes.',
      'The colligative properties of non-electrolytes are not considerably changed.',
      'The effect of electrolytes on colligative properties is very high compared to non-electrolytes.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Statement A is FALSE (NOT true) because colligative properties depend strictly on the total number of dissolved solute particles. Electrolytes dissociate into 2 or more ions (van 't Hoff factor i > 1), producing a significantly larger colligative effect (greater boiling point elevation, freezing point depression, osmotic pressure) than non-electrolytes (i = 1) at the same concentration.

🇪🇹 አማርኛ (Amharic):
አማራጭ A ስህተት (NOT true) ነው። ምክንያቱም ኤሌክትሮላይቶች በውሃ ውስጥ ሲሟሟ ወደ በርካታ አዮኖች ስለሚከፋፈሉ (i > 1) በኮሊጋቲቭ ባህሪያት ላይ የሚያሳድሩት ተፅዕኖ ኤሌክትሮላይት ካልሆኑት (non-electrolytes) በእጅጉ የላቀ ነው።

🌳 Afaan Oromoo:
Himni A sirrii miti, sababiin isaas elektiroolayitootni gara ayoonota hedduutti waan baqaniif dhiibbaan isaan amala koliigaatiivii irratti qaban non-elektiroolayitoota caala.`,
    hint: 'Colligative properties depend on the number of particles; electrolytes produce multiple ions, so their effect is higher.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q45',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Acid-Base Equilibria: Conjugate Acid-Base Pairs',
    questionText: '45. For the reaction shown below, which of the following is a conjugate acid-base pair?\nHC₂O₄⁻(aq) + H₂O(l) ⇌ H₃O⁺(aq) + C₂O₄²⁻(aq)',
    options: [
      'HC₂O₄⁻ and C₂O₄²⁻',
      'H₃O⁺ and HC₂O₄⁻',
      'H₂O and C₂O₄²⁻',
      'HC₂O₄⁻ and H₂O'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A Brønsted-Lowry conjugate acid-base pair consists of two species that differ by exactly one hydrogen ion (proton, H⁺). Here:
• HC₂O₄⁻ acts as the acid by donating a proton to form its conjugate base C₂O₄²⁻.
• H₂O acts as a base and forms conjugate acid H₃O⁺.
Thus, HC₂O₄⁻ and C₂O₄²⁻ is a conjugate acid-base pair.

🇪🇹 አማርኛ (Amharic):
ኮንጁጌት አሲድ-ቤዝ ጥንድ (Conjugate acid-base pair) በአንድ ፕሮቶን (H⁺) ብቻ የሚለያዩ ናቸው። HC₂O₄⁻ አሲድ ሲሆን ፕሮቶን አጥቶ ወደ ኮንጁጌት ቤዙ C₂O₄²⁻ ይቀየራል።

🌳 Afaan Oromoo:
Cimdiin asidii-beezii konjugeetii pirootonii (H⁺) tokko qofaan garaagarummaa qabu: HC₂O₄⁻ fi C₂O₄²⁻.`,
    hint: 'Conjugate acid-base pairs differ by exactly one H⁺ ion.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q46',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Kinetic Molecular Theory: Compressibility of Gases',
    questionText: '46. Which of the following assumptions of the kinetic molecular theory of gases explains the high compressibility of gases?',
    options: [
      'Different particles have different speeds.',
      'Particles are always in random motion.',
      'There is no force of attraction between gas molecules.',
      'The actual volume of gas molecules is negligible compared to the total volume.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Gases are highly compressible because gas molecules are separated by very large empty spaces; hence, the actual volume of the gas molecules themselves is negligible compared to the total volume occupied by the gas. Applying pressure easily pushes molecules closer together.

🇪🇹 አማርኛ (Amharic):
ጋዞች በከፍተኛ ሁኔታ የሚጨመቁበት (compressible) ምክንያት በሞለኪውሎቹ መካከል ሰፊ ባዶ ቦታ ስላለና የሞለኪውሎቹ ትክክለኛ መጠን ከጠቅላላው የጋዝ ይዘት አንጻር እጅግ በጣም አነስተኛ (negligible) በመሆኑ ነው።

🌳 Afaan Oromoo:
Gaasonni salphaatti dhiibamuu (compress) kan danda'aniif voliyumiin qolli molakiyuulota gaasii baay'ee xiqqaa waan ta'eef gidduu isaanii bakka duwwaa guddaatu jira.`,
    hint: 'Vast empty space between gas particles allows them to be compressed into smaller volumes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q47',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Phase Equilibrium: Effect of Temperature on Vapor Pressure',
    questionText: '47. Consider a bottle containing water, water vapor and air in equilibrium. If the temperature decreases slightly, the amount of water vapors',
    options: [
      'and vapor pressure will decrease.',
      'will decrease and the vapor pressure will increase.',
      'will increase and the vapor pressure will decrease.',
      'and vapor pressure will increase.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Evaporation is an endothermic process (H₂O(l) + heat ⇌ H₂O(g)). According to Le Chatelier's principle, lowering the temperature shifts the dynamic equilibrium toward condensation (to the left), which decreases both the number of water vapor molecules (amount) and the equilibrium vapor pressure.

🇪🇹 አማርኛ (Amharic):
የሙቀት መጠን ሲቀንስ የእንፋሎት ወደ ፈሳሽነት የመቀየር (condensation) ሂደት ስለሚፋጠን በእንፋሎት መልክ ያለው የውሃ መጠን እና የእንፋሎት ግፊቱ (vapor pressure) ሁለቱም ይቀንሳሉ (decrease)።

🌳 Afaan Oromoo:
Teempireecharri yoo xiqqaatu hurkaan dhangala'ootti deebi'a, kanaanis baay'inni hurkaa fi dhiibbaan hurkaa lamaanuu ni xiqqaatu.`,
    hint: 'Lowering temperature promotes condensation, reducing both vapor molecules and vapor pressure.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q48',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Phase Changes: Condensation',
    questionText: '48. Why do water droplets collect on the outside of a glass of water on a hot day?',
    options: [
      'There will be a sublimation of water vapor on the outside of a glass.',
      'There will be a condensation of water vapor on the glass.',
      'Water from the glass starts to vaporize.',
      'There is heat exchange between the water in the glass and the surrounding.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The outer surface of a glass containing cold water is cooler than the surrounding ambient air. When warm gaseous water vapor in the atmosphere touches the cold glass surface, it loses kinetic energy and condenses into liquid water droplets.

🇪🇹 አማርኛ (Amharic):
በሞቃት ቀን በቀዝቃዛ ውሃ ብርጭቆ ውጫዊ ክፍል ላይ የውሃ ጠብታዎች የሚፈጠሩት በአየር ላይ ያለው የውሃ እንፋሎት ከቀዝቃዛው ብርጭቆ ጋር ሲገናኝ ወደ ፈሳሽነት ስለሚቀየር (condensation of water vapor) ነው።

🌳 Afaan Oromoo:
Hurkaan qilleensa keessa jiru yeroo gilfaasa qabbanaa'aa tuqu gara dhangala'ootti jijjiirama (condensation).`,
    hint: 'Warm gaseous water vapor loses energy upon touching cold glass and condenses to liquid droplets.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q49',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Hydrocarbons: Fundamental Definition',
    questionText: '49. What are hydrocarbons? Compounds that contain',
    options: [
      'benzene and its derivatives only.',
      'benzene rings only.',
      'hydrogen and carbon only.',
      'hydrogen and carbon with no benzene rings.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Hydrocarbons are the fundamental class of organic chemical compounds composed exclusively of carbon and hydrogen atoms (e.g., alkanes, alkenes, alkynes, cycloalkanes, and aromatic hydrocarbons like benzene).

🇪🇹 አማርኛ (Amharic):
ሃይድሮካርቦኖች (Hydrocarbons) ከካርቦን እና ከሃይድሮጅን አተሞች ብቻ የተገነቡ ኦርጋኒክ ውህዶች ናቸው።

🌳 Afaan Oromoo:
Haayidirookaarboononni kompaawundoota kaarboonii fi haayidiroojiinii qofa irraa tolfamaniidha.`,
    hint: 'Hydro + carbon = compounds containing only hydrogen and carbon.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q50',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Alkanes: Physical Properties & Boiling Points',
    questionText: '50. Which of the following statements is INCORRECT regarding the boiling points of alkanes?',
    options: [
      'The boiling point of cycloalkanes is higher than that of linear alkanes.',
      'Boiling points of straight chain alkanes is greater than that of branched chain alkanes.',
      'Surface area is the only factor that determines the boiling points of alkanes.',
      'Boiling points increase with stronger Van der Waals forces.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Statement C is INCORRECT because boiling point is determined by both molecular mass (total number of electrons, which increases polarizability and London dispersion force strength) and molecular surface area / shape (branching vs straight chain). Surface area is NOT the only factor.

🇪🇹 አማርኛ (Amharic):
አማራጭ C ስህተት (INCORRECT) ነው። ምክንያቱም የአልካኖች የመፍላት ነጥብ የሚወሰነው በገጽታ ስፋት (surface area) ብቻ ሳይሆን በሞለኪውላዊ ክብደት (molecular mass) ጭምር ነው።

🌳 Afaan Oromoo:
Himni C dogoggora, sababiin isaas qabxiin danfina alkaanotaa ulfaatina molakiyuulii fi hamma humni Vaandar Waalsitiin murtaa'a malee bal'ina qofaani miti.`,
    hint: 'Boiling point depends on both molecular weight (number of electrons) and surface area, not surface area alone.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q51',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Aqueous Equilibria: Autoionization Constant of Water',
    questionText: '51. The self-ionization of water can be expressed by the equation:\nH₂O(l) + H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)\nWhich of the following is the correct expression of the ionic product of water?',
    options: [
      'K_w = [H₃O⁺][OH⁻] / [H₂O]',
      'K_w = [H₃O⁺][OH⁻]',
      'K_w = K_c[H₂O]',
      'K_w = K_c[H₂O]²'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In liquid water, the concentration of pure liquid water is effectively constant and incorporated into the equilibrium constant. The autoionization constant / ion-product of water is defined as K_w = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C.

🇪🇹 አማርኛ (Amharic):
የውሃ ራስ-አዮናይዜሽን ቋሚ ዋጋ (Ion-product of water, K_w) ቀመር K_w = [H₃O⁺][OH⁻] ሲሆን በ 25°C ላይ ዋጋው 1.0 × 10⁻¹⁴ ነው።

🌳 Afaan Oromoo:
K_w = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ (25°C irratti) dha.`,
    hint: 'Pure liquids are omitted from the equilibrium expression, giving K_w = [H₃O⁺][OH⁻].',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q52',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Solubility Equilibria: The Common Ion Effect',
    questionText: '52. What is the effect of a common ion in an electrolytic solution?',
    options: [
      'It has no effect on the pH of a solution.',
      'It decreases the solubility of a solute.',
      'It suppresses the ionization of a weak base and lowers the pOH.',
      'It suppresses the ionization of a weak acid and raises the pH.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
According to Le Chatelier's principle, introducing an ion that is already present in a solution (a common ion) shifts the dissolution equilibrium backward toward the undissolved solid, thereby decreasing the solubility of a sparingly soluble solute.

🇪🇹 አማርኛ (Amharic):
የጋራ አዮን ተጽዕኖ (Common ion effect)፦ በመፍትሄው ውስጥ ቀድሞ ያለን አዮን መጨመር የንጥረ ነገሩን የመሟሟት አቅም (solubility) ይቀንሳል (decreases solubility)።

🌳 Afaan Oromoo:
Ayooniin waloomaa (Common ion) dandeettii bulbulamuu (solubility) wanta bulbulamuu ni xiqqeessa.`,
    hint: 'Adding a common ion shifts equilibrium to the left, decreasing solute solubility.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q53',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Salts: Hydrolysis of Sodium Carbonate',
    questionText: '53. Sodium carbonate (Na₂CO₃) is a basic salt because it is a salt of',
    options: [
      'a strong acid and a weak base and the anion of the strong acid can be hydrolyzed.',
      'a weak acid and a weak base and the cation of the weak base can be hydrolyzed.',
      'a strong base and a strong acid and the anion of the strong acid can be hydrolyzed.',
      'a strong base and a weak acid and the anion of the weak acid can be hydrolyzed.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Na₂CO₃ is derived from a strong base (NaOH) and a weak acid (H₂CO₃). The carbonate anion (CO₃²⁻), being the conjugate base of a weak acid, undergoes hydrolysis in water:
CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻
This hydrolysis produces hydroxide ions (OH⁻), rendering the solution alkaline (pH > 7).

🇪🇹 አማርኛ (Amharic):
ሶዲየም ካርቦኔት (Na₂CO₃) የጠንካራ ቤዝ (NaOH) እና የደካማ አሲድ (H₂CO₃) ውህድ ሲሆን፣ የደካማ አሲዱ አናዮን (CO₃²⁻) ከውሃ ጋር ሃይድሮላይዝድ በመሆን OH⁻ ስለሚለቅ መፍትሄውን ቤዚክ ያደርገዋል።

🌳 Afaan Oromoo:
Na₂CO₃ soogidda beezawaadha, sababiin isaas beezii jabaa (NaOH) fi asidii laafaa (H₂CO₃) irraa tolfamee an-aayooniin isaa (CO₃²⁻) haayidiroolaayizii ta'uun OH⁻ uuma.`,
    hint: 'Salt of strong base + weak acid → anion hydrolyzes to release OH⁻, forming a basic solution.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q54',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Analytical Chemistry: Acid-Base Titration',
    questionText: '54. Which of the following statements is true for an acid-base titration?',
    options: [
      'An acid-base titration is a method of qualitative analysis for determining the concentration of an acid or base.',
      'An acid-base titration is a method of quantitative analysis for determining the concentration of an acid or base.',
      'Acid-base titrations cannot be carried out in the absence of indicators.',
      'Indicators catalyze an acid-base titration to show the inflection point of the titration curve.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Acid-base titration is a volumetric quantitative analytical technique used to determine the exact concentration of an unknown acidic or basic solution by reacting it stoichiometrically with a standard solution of known concentration.

🇪🇹 አማርኛ (Amharic):
የአሲድ-ቤዝ ታይትሬሽን (Acid-base titration) የአንድን አሲድ ወይም ቤዝ ትክክለኛ ክምችት (concentration) ለማወቅ የሚያገለግል የቁጥር መለኪያ የትንተና ዘዴ (quantitative analysis) ነው።

🌳 Afaan Oromoo:
Taayitireeshiniin asidii-beezii tooftaa xiinxala kantiiteetiivii (quantitative analysis) koncentireeshinii asidii ykn beezii murteessuuf gargaarudha.`,
    hint: 'Titrations yield precise numerical concentration values, making them quantitative analysis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q55',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Thermodynamics: First Law & Internal Energy Change',
    questionText: '55. What is the change in internal energy (ΔE) for a reaction, in which the system absorbs 650 J of heat and 125 J of work is done on the system?',
    options: [
      '-535 J',
      '-775 J',
      '535 J',
      '775 J'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to the First Law of Thermodynamics:
ΔE = q + w
• Heat absorbed by the system: q = +650 J
• Work done ON the system: w = +125 J
ΔE = (+650 J) + (+125 J) = +775 J.

🇪🇹 አማርኛ (Amharic):
የቴርሞዳይናሚክስ የመጀመሪያ ሕግ፦ ΔE = q + w
ሲስተሙ ሙቀት ሲመጥ q = +650 J፣ ስራ በሲስተሙ ላይ ሲሰራ w = +125 J።
ስለዚህ ΔE = 650 + 125 = +775 J ይሆናል።

🌳 Afaan Oromoo:
ΔE = q + w = (+650 J) + (+125 J) = +775 J dha.`,
    hint: 'First Law: ΔE = q + w. Both heat absorbed (+q) and work done on system (+w) are positive.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q56',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Hydrocarbons: Intermolecular Forces in Unsaturated Hydrocarbons',
    questionText: '56. Which of the following statements is correct regarding alkenes and alkynes?',
    options: [
      'The molecules of alkenes and alkynes are held together by weak intermolecular force.',
      'Alkynes have longer bond length and less surface area than alkenes.',
      'Alkenes are soluble in polar solvents, while alkynes are not soluble in polar solvents.',
      'Alkenes and alkynes are soluble in polar solvents.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Alkenes and alkynes are nonpolar hydrocarbon molecules held together solely by weak London dispersion forces. They are insoluble in polar solvents like water.

🇪🇹 አማርኛ (Amharic):
አልኪኖችና አልካይኖች ፖላር ያልሆኑ ውህዶች ስለሆኑ በሞለኪውሎቻቸው መካከል ያለው ደካማ የለንደን ዲስፐርሽን ሃይል (weak intermolecular force) ብቻ ነው።

🌳 Afaan Oromoo:
Molakiyuulonni alkiinii fi alkaayinii humna laafaa kanaan walitti qabamu.`,
    hint: 'Hydrocarbons interact solely through weak intermolecular dispersion forces.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q57',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Hydrocarbons: Homologous Series of Alkynes',
    questionText: '57. What is the general formula of alkynes?',
    options: [
      'CₙH₂ₙ₊₂',
      'CₙH₂ₙ',
      'CₙHₙ₋₂ (n > 2)',
      'CₙH₂ₙ₋₂ (n ≥ 2)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The general molecular formula for acyclic alkynes possessing one triple bond is CₙH₂ₙ₋₂ with n ≥ 2.

🇪🇹 አማርኛ (Amharic):
የአልካይኖች አጠቃላይ ቀመር CₙH₂ₙ₋₂ (n ≥ 2) ነው።

🌳 Afaan Oromoo:
Foormulaan waliigalaa alkaayinootaa CₙH₂ₙ₋₂ (n ≥ 2) dha.`,
    hint: 'Alkynes have formula C_n H_{2n-2}.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q58',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Functional Groups: IUPAC Suffix for Alcohols',
    questionText: '58. Which functional group containing compound is named using the suffix "-ol"?',
    options: [
      'Phenyl',
      'Hydroxyl (-OH, Alcohols)',
      'Aryl',
      'Carboxyl (-COOH)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Compounds containing the hydroxyl functional group (-OH) are classified as alcohols and named systematically using the suffix "-ol".

🇪🇹 አማርኛ (Amharic):
ሃይድሮክሲል (-OH) ግሩፕ የያዙ አልኮሆሎች ስያሜያቸው በ "-ol" ይጠናቀቃል።

🌳 Afaan Oromoo:
Gareen faankishinaalaa haayidirooksiilii (-OH) maqaan isaanii "-ol" jedhee xumurama.`,
    hint: 'Alcohols containing the -OH (hydroxyl) group use suffix -ol.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q59',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Alcohols: Monohydric Aliphatic Alcohols',
    questionText: '59. Which of the following represents the general formula of monohydric alcohols?',
    options: [
      'CₙH₂ₙ₊₁OH',
      'CₙH₂ₙOH',
      'CₙHₙ₋₂(OH)₂',
      'CₙH₂ₙ₋₂OH'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Monohydric saturated alcohols consist of one -OH attached to an alkyl group, yielding the formula CₙH₂ₙ₊₁OH.

🇪🇹 አማርኛ (Amharic):
የሞኖሃይድሪክ አልኮሆሎች አጠቃላይ ፎርሙላ CₙH₂ₙ₊₁OH ነው።

🌳 Afaan Oromoo:
Foormulaan alkoolota monohaayidiriikii CₙH₂ₙ₊₁OH dha.`,
    hint: 'R-OH where R = C_n H_{2n+1}.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'chem-2014-q60',
    subject: 'Chemistry',
    year: '2014 E.C.',
    topic: 'Acid-Base Definitions: Lewis Acid',
    questionText: '60. What is a Lewis acid? It is',
    options: [
      'a proton acceptor.',
      'an electron pair donor.',
      'an electron pair acceptor.',
      'a proton donor.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A Lewis acid is an electron pair acceptor, capable of accepting a nonbonding pair of electrons from a Lewis base.

🇪🇹 አማርኛ (Amharic):
ሌዊስ አሲድ ማለት የኤሌክትሮን ጥንድ ተቀባይ (electron pair acceptor) ነው።

🌳 Afaan Oromoo:
Asidiin Liiwis wanta cimdiin elektiroonii fudhatuudha.`,
    hint: 'Lewis acids accept electron pairs.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
