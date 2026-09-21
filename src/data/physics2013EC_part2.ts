import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2013_EC_PART2: Question[] = [
  {
    id: 'phy-2013-q14',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Standing Waves: Harmonics on a Stretched String',
    questionText: 'A string vibrating with a wave speed of 110 m/s in its fourth harmonic has a frequency of 880 Hz. What is the length of the string?',
    options: [
      '25.0 cm',
      '12.5 cm',
      '50.0 cm',
      '31.3 cm'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
For a string fixed at both ends, the frequency of the nth harmonic is:
f_n = (n · v) / (2L)

Given:
• Harmonic number n = 4
• Wave speed v = 110 m/s
• Frequency f₄ = 880 Hz

Rearranging for length L:
L = (n · v) / (2 · f_n)
L = (4 × 110 m/s) / (2 × 880 Hz) = 440 / 1760 = 0.25 m = 25.0 cm.

🇪🇹 አማርኛ (Amharic):
በቋሚ ገመድ ላይ የሃርሞኒክ ርዝመት ቀመር: L = (n · v) / (2f) = (4 × 110) / (2 × 880) = 440 / 1760 = 0.25 m = 25.0 cm ይሆናል።

🌳 Afaan Oromoo:
Dheerina shiboo barbaaduuf: L = (n · v) / (2f) = (4 × 110) / (2 × 880) = 0.25 m = 25.0 cm ta'a.`,
    hint: 'Use L = n·v / (2f) = 4 × 110 / (2 × 880) = 440 / 1760 = 0.25 m = 25 cm.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q15',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Wave Optics: Single-Slit vs Double-Slit Central Maxima Width',
    questionText: 'Interference patterns are observed after a monochromatic beam of light passes through a single slit and a double slit. Which one of the following is correct about the width of the central maxima compared to higher-order maxima in single-slit diffraction and double-slit interference?',
    options: [
      'The width of the central maximum equals the width of the first-order maximum in single slit, while it is twice the width in double slit.',
      'The width of the central maximum is twice the width of the first-order maximum in both cases.',
      'The width of the central maximum and first-order maximum are equal in both cases.',
      'The width of the central maximum is twice the width of secondary maxima in single-slit diffraction, while all bright fringes have equal width in double-slit interference.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• In Single-Slit Diffraction: The central bright maximum spans between the first minima on either side, giving a total angular width of 2λ/a (twice the width of the subsequent subsidiary maxima, which have width λ/a).
• In Double-Slit Interference: All interference fringes (bright bands) have a uniform, equal separation width given by w = λD/d.
Therefore, statement D is correct.

🇪🇹 አማርኛ (Amharic):
በአንድ ስንጥቅ (Single slit diffraction) የመሃሉ ደማቅ ስፋት ከጎኑ ካሉት ሁለተኛ ደረጃ ደማቆች በእጥፍ (2 እጥፍ) ይሰፋል፤ በድርብ ስንጥቅ (Double slit interference) ግን ሁሉም ደማቆች እኩል ስፋት አላቸው።

🌳 Afaan Oromoo:
Bakkalcha tokko keessatti (Single slit) wiirtuun isaa dachaa lama ta'a; bakkalcha lama keessatti (Double slit) garuu hundinuu wal-qixa ta'u.`,
    hint: 'Single-slit central peak is twice as wide (2λD/a) as outer lobes; double-slit fringes are all equally spaced (λD/d).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q16',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Wave Optics: Young\'s Double-Slit Fringe Separation',
    questionText: 'A light wave of wavelength 590 nm passes through a narrow double slit with 0.2 mm separation. An interference pattern is formed on a screen at a distance of 1.5 m. What is the distance between consecutive bright fringes on the screen?',
    options: [
      '1.97 mm',
      '4.43 mm',
      '0.43 mm',
      '44.3 mm'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Fringe separation (fringe width w) in Young\'s double slit is given by:
w = (λ · D) / d

Given:
• λ = 590 nm = 5.90 × 10⁻⁷ m
• D = 1.5 m
• d = 0.2 mm = 2.0 × 10⁻⁴ m

w = (5.90 × 10⁻⁷ m × 1.5 m) / (2.0 × 10⁻⁴ m)
w = (8.85 × 10⁻⁷) / (2.0 × 10⁻⁴) = 4.425 × 10⁻³ m = 4.43 mm.

🇪🇹 አማርኛ (Amharic):
የፍሪንጅ ስፋት w = (λ · D) / d = (590 × 10⁻⁹ × 1.5) / (0.2 × 10⁻³) = 4.43 × 10⁻³ m = 4.43 mm ይሆናል።

🌳 Afaan Oromoo:
Fageenyi ifoota gidduu w = (λ · D) / d = (590 × 10⁻⁹ × 1.5) / (0.2 × 10⁻³) = 4.43 mm ta'a.`,
    hint: 'Use fringe width w = λ·D / d = (590×10⁻⁹ × 1.5) / (0.2×10⁻³) = 4.43 mm.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q17',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Electrostatics: Gauss\'s Law & Enclosed Charge',
    questionText: 'According to Gauss\'s law, the net electric flux through any hypothetical closed surface is directly proportional to the enclosed:',
    options: [
      'Electric field.',
      'Potential difference.',
      'Electric current.',
      'Electric charge.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Gauss's Law states that the net electric flux (Φ_E) passing through any closed Gaussian surface is equal to the total net electric charge (Q_enclosed) enclosed within the volume divided by the permittivity of free space (ε₀):
Φ_E = ∮ E · dA = Q_enclosed / ε₀
Thus, flux is directly proportional to the enclosed electric charge.

🇪🇹 አማርኛ (Amharic):
በጋውስ ሕግ (Gauss's law) መሰረት በማንኛውም ዝግ ገጽ ውስጥ የሚያልፈው የኤሌክትሪክ ፍሰት (Electric flux) በቀጥታ በውስጡ ከተዘጋው የኤሌክትሪክ ቻርጅ (Electric charge) ጋር ተመጣጣኝ ነው።

🌳 Afaan Oromoo:
Seera Gaawusiin: Dhangala'aan dirree elektiriikii (Electric flux) fuula cufamaa keessa darbu kallattiin chaarjii elektiriikii keessatti kuufame waliin wal-simata.`,
    hint: 'Gauss\'s law relates net electric flux directly to enclosed electric charge: Φ_E = Q_encl / ε₀.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q18',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Capacitors: Effect of Dielectric on Charge Storage',
    questionText: 'When a dielectric material is placed between two parallel metal plates connected to a power supply of constant potential difference, it enables the plates to store:',
    options: [
      'Much less charge at a different potential difference.',
      'The same charge at the same potential difference.',
      'Much more charge at the same potential difference.',
      'Much more charge at a different potential difference.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Inserting a dielectric of dielectric constant ε_r (or κ > 1) increases the capacitance from C₀ to C = ε_r · C₀.
At a constant potential difference V, the charge stored is Q = C · V = ε_r · C₀ · V.
Because ε_r > 1, the capacitor stores significantly MORE charge at the SAME potential difference.

🇪🇹 አማርኛ (Amharic):
በካፓሲተር ሳህኖች መካከል ዳይኤሌክትሪክ ቁስ ሲገባ ካፓሲታንሱ ስለሚጨምር (C = ε_r · C₀)፣ በተመሳሳይ ቮልቴጅ (potential difference) ላይ እጅግ የበዛ ቻርጅ (Much more charge) እንዲከማች ያስችላል።

🌳 Afaan Oromoo:
Meesshaan 'dielectric' yeroo kaapaasitarii keessa galu kaapaasitaansiin waan dabaluuf, voolteejii walfakkaataa irratti chaarjii baay'ee kuusuu dandeessisa.`,
    hint: 'Dielectric increases capacitance (C = ε_r·C₀), so at fixed voltage V, Q = C·V increases proportionally.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q19',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Capacitors: Electric Energy Density with Dielectric',
    questionText: 'A parallel plate capacitor with plate area A and plate separation d is completely filled with a dielectric material of dielectric constant ε_r. If E denotes the electric field between the plates, the energy density u stored by the capacitor is:',
    options: [
      'u = 1/2 ε₀ ε_r E²',
      'u = (ε₀ ε_r Q V²) / (A d)',
      'u = 1/2 ε_r E Q² V',
      'u = (ε₀ ε_r V² A) / (2 d E)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The electrostatic energy density (energy per unit volume, u = U / Volume) stored in the electric field of a dielectric medium is:
u = 1/2 · ε · E² = 1/2 · ε₀ · ε_r · E²
where ε₀ is the permittivity of free space, ε_r is the relative permittivity (dielectric constant), and E is the electric field strength.

🇪🇹 አማርኛ (Amharic):
በዳይኤሌክትሪክ ሚዲየም ውስጥ የሚከማቸው የኤሌክትሪክ ኃይል እፍጋት (Energy density) ቀመር: u = 1/2 · ε₀ · ε_r · E² ነው።

🌳 Afaan Oromoo:
Rukkinnii anniisaa elektiriikii (energy density): u = 1/2 · ε₀ · ε_r · E² ta'a.`,
    hint: 'Energy density is u = 1/2 ε E² = 1/2 ε₀ ε_r E².',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q20',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Current Electricity: Drift Velocity Formula',
    questionText: 'A uniform conductor of length L and cross-sectional area A carries a current I. If the number of free electrons per unit volume of the conductor is n, and the electron charge magnitude is e, then the drift velocity v_d of the electrons in the conductor is:',
    options: [
      'v_d = I / (e L A)',
      'v_d = I / (n e A)',
      'v_d = I / (n e L A)',
      'v_d = I / (n e L)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Electric current is related to microscopic charge carrier motion by:
I = n · e · A · v_d
Solving for drift velocity v_d gives:
v_d = I / (n · e · A)
where n is carrier number density, e is elementary charge, A is cross-sectional area, and I is current.

🇪🇹 አማርኛ (Amharic):
የኤሌክትሮን ድሪፍት ፍጥነት (Drift velocity) ቀመር: I = n e A v_d => v_d = I / (n e A) ይሆናል።

🌳 Afaan Oromoo:
Saffisni sochii elektiroonotaa (drift velocity): v_d = I / (n e A) dha.`,
    hint: 'Rearrange I = n·e·A·v_d to get v_d = I / (n·e·A).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q21',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Measurement: Selection of Measuring Instruments & Units',
    questionText: 'A student wants to measure the length and height of a school laboratory room. Which measuring instrument and unit is most appropriate for this measurement?',
    options: [
      'Meter tape and meter',
      'Vernier calipers and millimeter',
      'Micrometer screw gauge and millimeter',
      'Meter stick and centimeter'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Large room dimensions (length, width, height typically 5 to 15 meters) are properly and practically measured using a flexible measuring meter tape with the SI unit meter (m).
• Vernier calipers and micrometer screw gauges are for tiny millimeter-scale precision dimensions.

🇪🇹 አማርኛ (Amharic):
የላብራቶሪ ክፍልን ርዝመትና ቁመት ለመለካት ተስማሚው መሳሪያ የመለኪያ ቴፕ (Meter tape) ሲሆን ክፍሉም ሜትር (m) ነው።

🌳 Afaan Oromoo:
Dheerinaa fi olka'iinsa daree mana yaalii safaruuf 'meter tape' fi yuunitii 'meter' fayyadamuun filatamaadha.`,
    hint: 'Room dimensions in the multi-meter range are measured using a measuring tape in meters.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q22',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Data Reporting: Scientific Table Formatting',
    questionText: 'In reporting an experimental result, collected data must be clearly tabulated. Which convention correctly represents data table formatting?',
    options: [
      'Writing the unit symbol (e.g. 4 V, 6 V, 8 V) repeatedly inside every data cell',
      'Omitting all units completely from the header and cells',
      'Specifying the physical quantity and unit in the header (e.g., Voltage (V), Current (A)) with pure numerical values in the body cells',
      'Mixing unrelated units like Coulombs inside a current table'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
According to standard scientific and ISO data presentation standards:
The header of a column or row contains the quantity name followed by the unit in parentheses (or as a solidus, e.g., Voltage (V) or V / V, Current (A)), and the cells beneath contain only pure numbers to maintain clarity and ease of statistical analysis.

🇪🇹 አማርኛ (Amharic):
በሳይንሳዊ ሰንጠረዥ አቀራረብ ደንብ መሰረት ዩኒቶች (ለምሳሌ Voltage (V), Current (A)) በሰንጠረዡ ራስጌ (header) ላይ ብቻ ይጻፋሉ፤ በውስጡ ያሉት ቁጥሮች ግን ያለ ዩኒት ድግግሞሽ በንጹህ ቁጥር ይቀመጣሉ።

🌳 Afaan Oromoo:
Gabaasa saayinsaawaa keessatti yuunitiin mata-duree irratti qofa barreeffama (fakkeenyaaf Voltage (V)); lakkoofsonni keessaa garuu qulqulluu ta'anii taa'u.`,
    hint: 'Place the quantity and unit in the header (e.g., Voltage (V)) and write pure numeric values in the cells.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q23',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Vectors: Graphical Representation of Direction',
    questionText: 'A 10 N force is applied in the direction of North-East. Which graphical representation correctly depicts this force vector on a standard coordinate map (where North points up and East points to the right)?',
    options: [
      'An arrow pointing diagonally up and to the right at 45° (into Quadrant I)',
      'An arrow pointing diagonally down and to the left (into Quadrant III)',
      'An arrow pointing horizontally to the right (due East)',
      'An arrow pointing vertically downward (due South)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
On a standard Cartesian map orientation:
• North is along the positive y-axis (up).
• East is along the positive x-axis (right).
North-East (NE) lies exactly halfway between North and East at an angle of 45° above the positive x-axis, represented by an arrow pointing diagonally upward and to the right into the first quadrant.

🇪🇹 አማርኛ (Amharic):
ሰሜን-ምስራቅ (North-East) አቅጣጫ ማለት ወደ ላይ (ሰሜን) እና ወደ ቀኝ (ምስራቅ) መሃል በ45 ዲግሪ ወደ ላይ-ቀኝ የሚጠቁም ቬክተር ነው።

🌳 Afaan Oromoo:
Kallattiin Kaaba-Bahaa (North-East) gara ol-mirgaatti kofa 45°tiin kan agarsiisudha.`,
    hint: 'North-East lies in Quadrant I, pointing up and to the right at 45° between North and East.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q24',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Vectors: Head-to-Tail Vector Addition',
    questionText: 'Two vectors of magnitude 8 units directed East and 6 units directed North are added graphically. Which representation correctly shows their resultant vector?',
    options: [
      'A triangle where the tail of the 6-unit North vector is attached to the head of the 8-unit East vector, with the resultant vector pointing from the origin to the head of the North vector',
      'Two vectors arranged tail-to-tail with no closing hypotenuse',
      'The 8-unit vector pointing West and 6-unit vector pointing South',
      'A collinear line segment of length 14 units'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In the head-to-tail graphical vector addition method:
1. Draw vector A (8 units East horizontally).
2. From the head of vector A, draw vector B (6 units North vertically).
3. The resultant vector R connects the tail of A (origin) to the head of B.
Magnitude: |R| = √(8² + 6²) = √(64 + 36) = √100 = 10 units directed North of East.

🇪🇹 አማርኛ (Amharic):
በጭንቅላት-እስከ-ጭራ (Head-to-tail) የቬክተር ድመራ ዘዴ: 8 ዩኒት ወደ ምስራቅ ተስሎ፣ በጫፉ ላይ 6 ዩኒት ወደ ሰሜን ይቀጠላል፤ ውጤቱ ከመነሻው እስከ መጨረሻው ጫፍ የሚሰመር የ10 ዩኒት ቬክተር ነው።

🌳 Afaan Oromoo:
Mala 'head-to-tail'tiin: 8 bahaatti fiixee isaa irraa 6 kaabatti fiduun bu'aan isaa 10 ta'ee gara Kaaba-Bahaatti agarsiisa.`,
    hint: 'Connect the North vector to the tip of the East vector; the resultant connects origin to the final tip (Pythagorean 6-8-10 triangle).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q25',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Vectors: Collinear & Antiparallel Vectors',
    questionText: 'Which of the following pairs of 2D column vectors are collinear (parallel or anti-parallel)?',
    options: [
      '[4, 2]ᵀ and [-4, -2]ᵀ',
      '[4, 2]ᵀ and [-4, 2]ᵀ',
      '[4, 2]ᵀ and [4, -2]ᵀ',
      '[-4, -2]ᵀ and [4, -2]ᵀ'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Two vectors u and v are collinear if one is a scalar multiple of the other: v = k · u.
For [4, 2]ᵀ and [-4, -2]ᵀ:
[-4, -2]ᵀ = -1 · [4, 2]ᵀ
Because the scalar k = -1 is a real non-zero constant, these two vectors lie along the same line in opposite directions (antiparallel collinear vectors).

🇪🇹 አማርኛ (Amharic):
ሁለት ቬክተሮች ኮሊኒየር (collinear/ትይዩ) የሚባሉት አንዱ የሌላኛው ስኬላር ብዜት (v = k · u) ሲሆን ነው።
[-4, -2] = -1 × [4, 2] ስለሆነ አማራጭ A ትክክለኛ ኮሊኒየር ጥንድ ነው።

🌳 Afaan Oromoo:
Veektaroonni lama 'collinear' kan jedhaman yoo kolfi isaanii walsimeedha: [-4, -2] = -1 × [4, 2] waan ta'eef filannoon A sirriidha.`,
    hint: 'Check for a scalar multiplier: [-4, -2] = -1 × [4, 2], confirming they are antiparallel collinear vectors.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  }
];
