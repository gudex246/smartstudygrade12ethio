import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2015_EC_PART4: Question[] = [
  {
    id: 'phy-2015-q41',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Geometrical Optics: Power of Lens & Focal Length Relation',
    questionText: 'Which one of the following statements is NOT correct about power of a lens?',
    options: [
      'The power of a lens decreases as the focal length of the lens increases.',
      'The larger the focal length of the lens the greater is the power of the lens.',
      'The power of a lens is the measure of the strength of the lens.',
      'Optician gives the name diopters for the unit of power of a lens.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Power of a lens is defined as the reciprocal of its focal length in meters:
P = 1 / f (in Diopters, D = m⁻¹).
As the focal length increases, the optical power decreases (they are inversely related). Therefore, the assertion that "the larger the focal length, the greater the power" is false and is the correct answer.

🇪🇹 አማርኛ (Amharic):
የሌንስ ኃይል P = 1 / f ስለሆነ፣ የፎካል ርዝመት (focal length) በጨመረ ቁጥር የሌንሱ ኃይል ይቀንሳል እንጂ አይጨምርም። ስለዚህ አማራጭ B የተሳሳተ ነው።

🌳 Afaan Oromoo:
Aangoon leensii P = 1 / f dha. Dheerinni fookaalii (f) yeroo dabalu aangoon leensii ni hir'ata malee hin dabalu.`,
    hint: 'Power is the inverse of focal length (P = 1/f), meaning longer focal lengths yield lower optical power.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q42',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Vectors & Scalars: Classification of Physical Quantities',
    questionText: 'Which one of the following groups of physical quantities contains only vectors?',
    options: [
      'Work, Electric field, Displacement and Force',
      'Acceleration, Speed, Force and Electric field',
      'Momentum, Energy, Magnetic field and Force',
      'Displacement, Velocity, Magnetic field and Momentum'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Group A contains Work (a scalar).
• Group B contains Speed (a scalar).
• Group C contains Energy (a scalar).
• Group D: Displacement, Velocity, Magnetic field, and Momentum are ALL vector quantities with both magnitude and directional orientation.

🇪🇹 አማርኛ (Amharic):
በቡድን D ውስጥ ያሉት Displacement (መፈናቀል)፣ Velocity (ፍጥነት)፣ Magnetic field (ማግኔቲክ መስክ) እና Momentum (ሞመንተም) በሙሉ ቬክተሮች ናቸው።

🌳 Afaan Oromoo:
Garee D keessatti: 'Displacement', 'Velocity', 'Magnetic field', fi 'Momentum' hundinuu veektaroota (kallattii fi hamma qabu).`,
    hint: 'Work, speed, and energy are scalars. Displacement, velocity, magnetic field, and momentum are all vectors.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q43',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Measurement & Units: Rules of Significant Figures',
    questionText: 'Which rule about the number of significant figures is correct? Zeros in the number',
    options: [
      '450.0 are significant figures.',
      '0.0023 are significant figures.',
      '1.1000 are not significant figures.',
      '2.70018 are not significant figures.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• In 450.0: Trailing zeros after a non-zero digit and decimal point are significant. 450.0 has 4 significant figures (4, 5, 0, 0 are all significant).
• In 0.0023: Leading zeros are merely place holders and are NOT significant (2 sig figs).
• In 1.1000: Trailing zeros after the decimal are significant (5 sig figs).
• In 2.70018: Captive/embedded zeros between non-zero digits are significant (6 sig figs).

🇪🇹 አማርኛ (Amharic):
በ 450.0 ቁጥር ውስጥ ከዴሲማል ነጥብ በኋላ ያሉት ዜሮዎች በሙሉ ጉልህ ቁጥሮች (significant figures) ናቸው (አጠቃላይ 4 significant figures አለው)።

🌳 Afaan Oromoo:
Lakkoofsa 450.0 keessatti zeeroowwan hundi lakkoofsa hiika qaban (significant figures) dha.`,
    hint: 'Trailing zeros with an explicit decimal point (like in 450.0) are significant.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q44',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Vector Mathematics: Dot (Scalar) Product of Two Vectors',
    questionText: 'Given two vectors v₁ = 10 units along the positive y-axis and v₂ = 6 units at an angle of 37° above the positive x-axis. What is the scalar product of the vectors in square of units? (cos 37° = 0.80, sin 37° = 0.60).',
    options: [
      '45',
      '36',
      '48',
      '60'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Method 1 (Components):
• v₁ = 0 i + 10 j
• v₂ = (6 · cos 37°) i + (6 · sin 37°) j = (6 · 0.8) i + (6 · 0.6) j = 4.8 i + 3.6 j
Dot product:
v₁ · v₂ = (0 × 4.8) + (10 × 3.6) = 36.

Method 2 (Geometric angle):
The angle between the +y axis (90°) and vector v₂ (37°) is θ = 90° - 37° = 53°.
v₁ · v₂ = |v₁| · |v₂| · cos(53°) = 10 × 6 × 0.60 = 36.

🇪🇹 አማርኛ (Amharic):
የዶት ፕሮዳክት ስሌት:
v₁ = (0, 10), v₂ = (4.8, 3.6)
v₁ · v₂ = (0 × 4.8) + (10 × 3.6) = 36።

🌳 Afaan Oromoo:
Baqqaana 'dot product': v₁ · v₂ = (0 × 4.8) + (10 × 3.6) = 36 ta'a.`,
    hint: 'v₁ only has a y-component (10). v₂ has y-component 6·sin(37°) = 3.6. The dot product is 10 × 3.6 = 36.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q45',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: '2D Kinematics: Average Velocity Vector Calculation',
    questionText: 'An airplane takes off at airport A and travels 500 km due east within 1 hour, then turning south it flies for 20 minutes to land on airport B which is 100 km away from the turning point. The magnitude average velocity of the plane during its flight between the two airports is',
    options: [
      '75 √24 km/h.',
      '100 √34 km/h.',
      '450 km/h.',
      '75 √26 km/h.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Calculate total displacement magnitude (|Δr|):
Displacement components: dx = 500 km (East), dy = 100 km (South).
|Δr| = √(500² + 100²) = √(250,000 + 10,000) = √260,000 = 100 √26 km.

Step 2: Calculate total elapsed time (Δt):
Δt = 1 hour + 20 minutes = 1 + (20/60) h = 1 + 1/3 h = 4/3 hours.

Step 3: Average velocity magnitude:
v_avg = |Δr| / Δt = (100 √26 km) / (4/3 h) = (3/4) × 100 √26 = 75 √26 km/h.

🇪🇹 አማርኛ (Amharic):
1. አጠቃላይ መፈናቀል |Δr| = √(500² + 100²) = 100 √26 km።
2. የፈጀው ጊዜ Δt = 1 + 20/60 = 4/3 ሰዓት።
3. አማካይ ፍጥነት v_avg = (100 √26) / (4/3) = 75 √26 km/h።

🌳 Afaan Oromoo:
Fageenyi bu'uuraa |Δr| = 100 √26 km. Yeroon = 4/3 sa'aatii. Saffisni giddu-galeessaa v_avg = (100 √26) / (4/3) = 75 √26 km/h.`,
    hint: 'Average velocity is Total Displacement / Total Time: (100√26 km) / (4/3 h) = 75√26 km/h.',
    difficulty: 'hard',
    points: 20,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q46',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Projectile Motion: Maximum Height & Range Dynamics',
    questionText: 'A bullet is fired with an initial speed v at an angle θ with the horizontal. It takes time T to reach its maximum height h_max, and hits a target at distance R on the same horizontal level. Which statement is NOT correct about the motion?',
    options: [
      'The bullet hits the target at a time 2T after it was fired.',
      'h_max is directly proportional to the initial speed v.',
      'R will be maximum if cos θ = √2 / 2.',
      'θ should be different from 90° to hit the target at a distance R.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The formula for maximum height in projectile motion is:
h_max = (v · sin θ)² / (2g) = v² · sin²θ / (2g).
Therefore, h_max is directly proportional to the SQUARE of the initial speed (v²), NOT directly proportional to v. Hence statement B is incorrect and is the requested answer.
(Note: R is maximum at θ = 45°, where cos(45°) = √2/2; Total flight time is 2T).

🇪🇹 አማርኛ (Amharic):
ከፍተኛ ከፍታ h_max = v² sin²θ / (2g) ስለሆነ፣ ከፍጥነቱ ካሬ (v²) ጋር ነው ተመጣጣኝ የሚሆነው እንጂ በቀጥታ ከ v ጋር አይደለም። ስለዚህ አማራጭ B ትክክል አይደለም።

🌳 Afaan Oromoo:
Olka'insi guddaan h_max = v² sin²θ / (2g) waan ta'eef 'v' qofaan osoo hin taane 'v²' waliin wal-simata.`,
    hint: 'Maximum vertical height scales quadratically with initial launch velocity (h_max ∝ v²).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q47',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Newton\'s Laws & Incline Dynamics: Friction at Constant Velocity',
    questionText: 'A man pushes a 25.0 kg object with a 250 N force along an inclined plane inclined at an angle of 37° to the horizontal. If the object moves up the incline with constant speed, what is the friction force exerted on the block? (Use g = 10 m/s², sin 37° = 0.60, cos 37° = 0.80).',
    options: [
      '250.0 N, up the inclined plane.',
      '100.0 N, up the inclined plane.',
      '100.0 N, down the inclined plane.',
      '250.0 N, down the inclined plane.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Given:
• Mass m = 25.0 kg
• Applied force F_push = 250 N (up the incline)
• Downhill gravitational component: F_gx = m · g · sin(37°) = 25.0 kg × 10 m/s² × 0.60 = 150 N (down the incline)

Since the object moves with CONSTANT speed (acceleration a = 0):
Net force along the incline = 0:
F_push - F_gx - f_k = 0
250 N - 150 N - f_k = 0  ⇒  f_k = 100.0 N.

Because the block moves up the incline, kinetic friction opposes the motion and acts DOWN the inclined plane.

🇪🇹 አማርኛ (Amharic):
1. ወደ ታች የሚጎትተው የስበት ኃይል F_gx = 25 × 10 × sin(37°) = 150 N።
2. ወደ ላይ የሚገፋው ኃይል F_push = 250 N።
3. ፍጥነቱ ቋሚ (a = 0) ስለሆነ: 250 N - 150 N - f_k = 0 => f_k = 100.0 N ወደ ታች (down the incline)።

🌳 Afaan Oromoo:
Humni harkisaa gara gadii = 150 N, Humni dhiibbaa gara olii = 250 N. Humni ruggii = 250 - 150 = 100 N gara gadii (down the incline).`,
    hint: 'At constant speed: F_push = mg·sin(37°) + f_friction ⇒ 250 N = 150 N + f_k ⇒ f_k = 100 N acting down the slope.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q48',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Collisions & Momentum: Elastic vs Inelastic Collisions',
    questionText: 'The following three collisions occur in different systems: I. Billiard ball A collides elastically with identical ball B and comes to rest while B moves with the same velocity. II. A bullet hits and embeds in a suspended block. III. Two cars collide head-on and come to rest together. Which statement is correct?',
    options: [
      'II and III are inelastic collisions.',
      'I and II are elastic collisions.',
      'I, II and III are inelastic collisions.',
      'I and III are elastic collisions.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Collision I: Kinetic energy is fully conserved (Elastic collision).
• Collision II: The bullet sticks/embeds in the target (Perfectly Inelastic collision, maximum kinetic energy lost).
• Collision III: Both cars crumple and stop, losing all macroscopic kinetic energy to deformation and heat (Completely Inelastic collision).
Therefore, II and III are inelastic collisions.

🇪🇹 አማርኛ (Amharic):
ሁኔታ II (ጥይት ተክሎ ሲገባ) እና ሁኔታ III (መኪኖች ተጋጭተው ሲቆሙ) ሁለቱም ኢላስቲክ ያልሆኑ (Inelastic) ግጭቶች ናቸው። ሁኔታ I ግን ኢላስቲክ (Elastic) ነው።

🌳 Afaan Oromoo:
Wal-dhawiinsi II fi III lenuu 'inelastic' (anniisaan sochii kan bittinnaa'u) dha. Wal-dhawiinsi I qofti 'elastic' dha.`,
    hint: 'When objects stick together or crumple and lose kinetic energy, the collision is inelastic.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q49',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Simple Harmonic Motion: Energy Transformations in Spring Oscillator',
    questionText: 'An object of mass M is attached to a spring of constant K on a frictionless surface. If the mass is pulled to point P (distance A from equilibrium O) and released, which statement is correct about energy of the system? (Q is an intermediate point between O and P).',
    options: [
      'At point O, the system has both kinetic and potential energy.',
      'At point P, the system has both kinetic energy and potential energy.',
      'At point P, the mass attain its maximum velocity.',
      'At point Q the system has both kinetic energy and potential energy.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• At equilibrium point O (x = 0): Elastic potential energy U = 0, Kinetic energy is maximum (E_total = 1/2 M v_max²).
• At amplitude point P (x = A): Kinetic energy K = 0 (instantaneous turnaround), Potential energy is maximum (E_total = 1/2 K A²).
• At any intermediate point Q (0 < x < A): The total mechanical energy is shared between kinetic and potential energy (E_total = 1/2 M v² + 1/2 K x²).

🇪🇹 አማርኛ (Amharic):
በመሃከለኛ ነጥብ Q ላይ እቃው ሁለቱንም ማለትም የእንቅስቃሴ ኃይል (Kinetic energy) እና የቁስ ኃይል (Potential energy) በጋራ ይይዛል።

🌳 Afaan Oromoo:
Qabxii gidduu Q irratti sirnichii anniisaa sochii (Kinetic) fi anniisaa kuufamaa (Potential) lachanuu qabaata.`,
    hint: 'At the extreme amplitude P, energy is all potential. At equilibrium O, all kinetic. At intermediate point Q, it has both.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q50',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Vector Mechanics: Cross Product & Torque Vector Calculation',
    questionText: 'A force F_vec = (i - 3 k) N acts on a wooden bar and drags the bar through a position vector r_vec = 4 i m. What is the torque due to the force in N·m?',
    options: [
      '4 i + 12 j',
      '-12 j',
      '12 j',
      '12 k'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Torque is defined as the vector cross product of position and force:
τ_vec = r_vec × F_vec

Given:
• r_vec = 4 i + 0 j + 0 k
• F_vec = 1 i + 0 j - 3 k

Determinant expansion:
τ_vec = | i   j   k |
        | 4   0   0 |
        | 1   0  -3 |

• i component: (0 × -3) - (0 × 0) = 0
• j component: -((4 × -3) - (0 × 1)) = -(-12) = +12 j
• k component: (4 × 0) - (0 × 1) = 0

Therefore:
τ_vec = 12 j N·m.

🇪🇹 አማርኛ (Amharic):
የቶርክ ቬክተር ክሮስ ፕሮዳክት τ = r × F:
τ = (4 i) × (i - 3 k) = 4(i × i) - 12(i × k)
የቬክተር ሕግ: i × i = 0 እና i × k = -j
ስለዚህ τ = 0 - 12(-j) = +12 j N·m ይሆናል።

🌳 Afaan Oromoo:
Hojii 'cross product' fayyadamuun: τ = r × F = (4 i) × (i - 3 k) = -12(i × k) = +12 j N·m ta'a.`,
    hint: 'Use τ = r × F. Here (4 i) × (-3 k) = -12(i × k) = -12(-j) = +12 j N·m.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  }
];
