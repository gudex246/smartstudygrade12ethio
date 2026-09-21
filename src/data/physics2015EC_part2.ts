import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2015_EC_PART2: Question[] = [
  {
    id: 'phy-2015-q16',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Fluid Dynamics: Continuity Equation & Flow Rate',
    questionText: 'Water flows at the rate of 500.0 cm³/s at small cross-section A₁ = 5 cm². The larger cross-section is A₂ = 25 cm². What is the ratio of the speed of the water at A₁ to A₂?',
    options: [
      '5',
      '100',
      '0.2',
      '20'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
According to the Equation of Continuity for incompressible fluid flow:
Flow rate Q = A₁ · v₁ = A₂ · v₂ = constant

Therefore:
v₁ / v₂ = A₂ / A₁
v₁ / v₂ = 25 cm² / 5 cm² = 5.

🇪🇹 አማርኛ (Amharic):
በኮንቲኒዩቲ ቀመር መሠረት: A₁ · v₁ = A₂ · v₂ => v₁/v₂ = A₂/A₁ = 25/5 = 5 ይሆናል።

🌳 Afaan Oromoo:
Qajeeltoo itti-fufiinsaatiin: A₁ · v₁ = A₂ · v₂ waan ta'eef saffisni v₁/v₂ = A₂/A₁ = 25/5 = 5 ta'a.`,
    hint: 'Apply the continuity equation A₁v₁ = A₂v₂. The velocity ratio v₁/v₂ is the inverse of the area ratio A₂/A₁ = 25/5 = 5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q17',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Thermodynamics: Adiabatic Expansion of Monoatomic Gas',
    questionText: 'An ideal monoatomic gas expands adiabatically from an initial volume of 2 liters at a temperature of 300 K to 16 liters of volume. What is the final temperature of the gas? (Use ratio of specific heats γ = 5/3).',
    options: [
      '37.5 K',
      '75 K',
      '2400 K',
      '1200 K'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
For a reversible adiabatic expansion of an ideal gas:
T₁ · V₁^(γ - 1) = T₂ · V₂^(γ - 1)

Given:
• T₁ = 300 K
• V₁ = 2 L, V₂ = 16 L  ⇒  V₁/V₂ = 2/16 = 1/8
• γ = 5/3  ⇒  γ - 1 = 5/3 - 1 = 2/3

T₂ = T₁ · (V₁ / V₂)^(2/3)
T₂ = 300 K · (1/8)^(2/3) = 300 · ((1/8)^(1/3))² = 300 · (1/2)² = 300 · (1/4) = 75 K.

🇪🇹 አማርኛ (Amharic):
በአዲያባቲክ ሂደት: T₂ = T₁ · (V₁/V₂)^(γ-1) = 300 · (2/16)^(2/3) = 300 · (1/4) = 75 K ይሆናል።

🌳 Afaan Oromoo:
Adeemsa adiyabaatikii keessatti: T₂ = T₁ · (V₁/V₂)^(2/3) = 300 × (1/8)^(2/3) = 300 × 1/4 = 75 K.`,
    hint: 'Use the adiabatic relation T·V^(γ-1) = const. With (1/8)^(2/3) = 1/4, T₂ = 300 / 4 = 75 K.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q18',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Oscillations: Simple Harmonic Motion & Circular Projection',
    questionText: 'Consider a particle performing a circular motion around a circle of radius r, with an angular velocity ω and the particle\'s projection on the horizontal diameter QR. Which one of the following statements is correct about the motion of the particle and its projection on QR?',
    options: [
      'The projection of the particle on QR swings between points Q and R with constant speed.',
      'The circular motion of the particle can be taken as a simple harmonic motion.',
      'The projection of the particle on QR demonstrates simple harmonic motion.',
      'The projection of the particle on QR demonstrates motion with constant acceleration.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
When a particle moves in uniform circular motion with radius r and constant angular frequency ω, the projection of its position onto any diameter executes Simple Harmonic Motion (SHM) governed by x(t) = r·cos(ωt) and acceleration a(t) = -ω²·x(t).

🇪🇹 አማርኛ (Amharic):
አንድ ቅንጣት በክብ ዙሪያ በቋሚ ፍጥነት ሲዞር፣ በዲያሜትር መስመር (QR) ላይ የሚያርፈው ጥላ/ፕሮጀክሽን ሲምፕል ሃርሞኒክ እንቅስቃሴ (Simple Harmonic Motion) ያሳያል።

🌳 Afaan Oromoo:
Sochiin geengoo dhaabbataa gaaddisni isaa sarara diyametirii irratti socho'u sochii harmoonikii salphaa (SHM) agarsiisa.`,
    hint: 'The one-dimensional projection of uniform circular motion along a diameter is pure Simple Harmonic Motion (SHM).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q19',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Acoustics & Standing Waves: Closed-End Organ Pipe Harmonics',
    questionText: 'Air molecules vibrate in a pipe of length L closed at one end but open at the other. If the speed of sound through the pipe is V, which one of the following statements is correct about the resonance effects of vibration of air molecules in the pipe?',
    options: [
      'The fundamental resonance frequency is V / (4L).',
      'The fundamental wave length of resonance is equal to 2L.',
      'The resonance frequency of the first harmonics is V / L.',
      'The wavelength of the third harmonic is equal to L.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
For an organ pipe closed at one end and open at the other:
• Fundamental resonance (n = 1): λ₁ = 4L, and frequency f₁ = V / (4L).
• Only odd harmonics exist: f_n = n·V / (4L) for n = 1, 3, 5, ...
• The fundamental frequency is always V / (4L).

🇪🇹 አማርኛ (Amharic):
በአንድ በኩል ዝግ በሌላ በኩል ክፍት ለሆነ ቱቦ የመሰረታዊ ድምፅ ፍሪኩዌንሲ (Fundamental frequency) f₁ = V / (4L) ነው።

🌳 Afaan Oromoo:
Ujummoo gara tokkoon cufameef firiikuweensiin bu'uuraa (fundamental frequency) f₁ = V / (4L) ta'a.`,
    hint: 'For a pipe closed at one end, the fundamental standing wave has a node at the closed end and an antinode at the open end: L = λ/4 ⇒ f = V/(4L).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q20',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Wave Optics: Double Slit Interference Conditions',
    questionText: 'A monochromatic light of wavelength λ passes through double slits separated by a distance d. If the path difference between the lights is p and n being an integer (0, 1, 2, 3, ...), which one of the following would be observed on screen behind the slits?',
    options: [
      'constructive interference if p = (n + 1/2) λ.',
      'constructive interference if p = n λ',
      'destructive interference if p = 2 n λ',
      'destructive interference if p = 0'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In Young's double-slit experiment:
• Constructive interference (bright fringes) occurs when the path difference is an integer multiple of wavelength: p = n·λ (where n = 0, 1, 2, ...).
• Destructive interference (dark fringes) occurs when the path difference is a half-integer multiple: p = (n + 1/2)·λ.

🇪🇹 አማርኛ (Amharic):
በድርብ ስንጥቅ ሙከራ ገንቢ ጣልቃ-ገብነት (Constructive interference) የሚፈጠረው የጎዳና ልዩነት p = n·λ ሲሆን ነው።

🌳 Afaan Oromoo:
Wal-nyaatinsa ijaaraa (Constructive interference) uumuuf garaagarummaan daandii p = n·λ ta'uu qaba.`,
    hint: 'Constructive interference happens when waves arrive in phase: path difference p = n·λ.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q21',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Newton\'s Laws: Action-Reaction Pairs',
    questionText: 'Suppose you are standing on a horizontal floor in a room with one of your feet, and leaning against the wall of the room with the other foot. The number of action-reaction pair of forces you experience is',
    options: [
      '1.',
      '3.',
      '2.',
      '4.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
By Newton's Third Law (Action-Reaction pairs):
1. Normal force between foot and floor (pair 1).
2. Friction force between foot and floor (pair 2).
3. Normal force between second foot and wall (pair 3).
4. Gravitational force between Earth and your mass (pair 4).
Thus, there are 4 distinct action-reaction force pairs acting between the person and the environment.

🇪🇹 አማርኛ (Amharic):
በኒውተን ሶስተኛ ሕግ መሰረት 4 የተግባር እና ግብረ-መልስ ጥንዶች (Action-Reaction pairs) አሉ: (1) የወለል ኖርማል ኃይል፣ (2) የወለል ግጭት፣ (3) የግድግዳ ኖርማል ኃይል፣ (4) የምድር ስበት ኃይል።

🌳 Afaan Oromoo:
Seera Niwutan 3ffaa bu'uura godhachuun humnoonni gochaa fi deebii (Action-Reaction pairs) 4 ta'u.`,
    hint: 'Count the contact and field interactions: floor normal force, floor friction, wall normal force, and gravity (4 pairs).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q22',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Thermal Physics: Phase Change Latent Heat Definition',
    questionText: 'The amount of heat energy required to change a substance from a liquid to a gaseous state without temperature change is known as',
    options: [
      'specific heat capacity.',
      'quantity of heat.',
      'latent heat of fusion.',
      'latent heat of vaporization.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Latent heat of vaporization: Heat required to change a substance from liquid to gas phase at its boiling point.
• Latent heat of fusion: Heat required to change from solid to liquid at melting point.
• Specific heat capacity: Heat required to raise temperature of 1 kg of a substance by 1 K.

🇪🇹 አማርኛ (Amharic):
አንድን ንጥረ ነገር ከፈሳሽ ወደ ጋዝነት ለመቀየር የሚያስፈልገው የሙቀት ኃይል የትነት ድብቅ ሙቀት (Latent heat of vaporization) ይባላል።

🌳 Afaan Oromoo:
Humni ho'aa dhangala'aa gara gaaziitti jijjiiruuf barbaachisu 'latent heat of vaporization' jedhama.`,
    hint: 'Vaporization corresponds to the transition from liquid to gas.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q23',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Wave Mechanics: Characteristics & Terminology of Waves',
    questionText: 'Which one of the following is correct about mechanical waves?',
    options: [
      'The maximum height in a transverse wave is known as the trough of the wave.',
      'The time taken for one complete wave to pass a given point is called the frequency of the wave.',
      'The distance between two identical points on adjacent waves is known as the wavelength of the wave.',
      'The number of complete waves that passes a given point per time is called the period of the wave.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Wavelength (λ): The physical distance between two identical successive points in phase on adjacent wave cycles (e.g. crest to crest or trough to trough).
• Period (T): The time taken for one complete oscillation/wave cycle.
• Frequency (f): The number of complete wave cycles passing a point per second.
• Crest: Maximum positive displacement; Trough: Maximum negative displacement.

🇪🇹 አማርኛ (Amharic):
በሁለት ተከታታይ ተመሳሳይ የሞገድ ነጥቦች (ለምሳሌ ከጫፍ እስከ ጫፍ) መካከል ያለው ርቀት የሞገድ ርዝመት (Wavelength) ይባላል።

🌳 Afaan Oromoo:
Fageenyi qabxiilee walfakkaatan lamaan gidduu jiru dheerina danbaa (Wavelength) jedhama.`,
    hint: 'Wavelength is defined as the distance between two consecutive in-phase points on a wave.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q24',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Vectors & Kinematics: 2D Resultant Displacement',
    questionText: 'A boy in a journey covers his route by travelling 3.0 km east and 4.0 km north. What is the magnitude of his resultant displacement?',
    options: [
      '5.0 km',
      '1.0 km',
      '7.0 km',
      '2.7 km'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
East and North form perpendicular vector components (angle 90°).
Using the Pythagorean theorem:
|d| = √(dx² + dy²) = √(3.0² + 4.0²) = √(9.0 + 16.0) = √25.0 = 5.0 km.

🇪🇹 አማርኛ (Amharic):
ምስራቅ እና ሰሜን በ90 ዲግሪ ስለሚገናኙ የፓይታጎረስን ቀመር በመጠቀም:
d = √(3² + 4²) = √(9 + 16) = √25 = 5.0 km ይሆናል።

🌳 Afaan Oromoo:
Herrega Paayitaagoras fayyadamuun: d = √(3² + 4²) = √25 = 5.0 km ta'a.`,
    hint: 'Use the 3-4-5 right triangle Pythagorean theorem: √(3² + 4²) = 5 km.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q25',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Kinematics: Velocity-Time Graph Interpretation',
    questionText: 'The velocity-time graph shows a motorcyclist: from t=0 to 6 s velocity is constant at 20 m/s (region I), from t=6 to 10 s velocity increases to 50 m/s (region II), from t=10 to 14 s velocity decreases to 0 m/s (region III). Which statement is correct?',
    options: [
      'The displacement during the time interval from t = 6 s to t = 14 s is equal to the area of region II minus the area of region III.',
      'The displacement during the time intervals t = 0 to t = 6 s is equal to the area under the velocity-time graph in the given interval.',
      'The acceleration during the time interval from t = 6 s to t = 10 s is equal to the gradient of the curve in the given interval and it is negative.',
      'The acceleration in the first 6 s is equal to the gradient of the curve in the given interval and it is positive.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In any velocity-time (v-t) graph:
1. The area under the curve represents the total displacement over that time interval (Displacement = Area of region I = 20 m/s × 6 s = 120 m).
2. The slope (gradient) of the curve represents acceleration.

🇪🇹 አማርኛ (Amharic):
በፍጥነት-ጊዜ (v-t) ግራፍ ላይ ከግራፉ ስር ያለው ስፋት (Area under curve) የርቀት/መፈናቀል (displacement) መጠንን ይወክላል።

🌳 Afaan Oromoo:
Giraafii saffisaa fi yeroo (v-t graph) irratti bal'inni giraafichaa jala jiru fageenya jijjiiramaa (displacement) agarsiisa.`,
    hint: 'The integral/area beneath a velocity-time graph equals the total displacement in that interval.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q26',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Impulse & Momentum: Rebound Collision Average Force',
    questionText: 'A car of mass 1.50 × 10³ kg collides with a wall and rebounds. The initial and final velocities of the car are v_i = -15.0 m/s and v_f = 2.60 m/s, respectively. If the collision lasts for 0.15 s, what is the magnitude of the average force exerted on the car?',
    options: [
      '2.60 × 10⁴ N',
      '3.96 × 10³ N',
      '2.64 × 10⁴ N',
      '1.76 × 10⁵ N'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Using the Impulse-Momentum Theorem:
F_avg · Δt = m · Δv = m · (v_f - v_i)

Given:
• m = 1.50 × 10³ kg = 1500 kg
• Δv = 2.60 m/s - (-15.0 m/s) = 2.60 + 15.0 = 17.60 m/s
• Δt = 0.15 s

F_avg = (1500 kg × 17.60 m/s) / 0.15 s = 26,400 / 0.15 = 176,000 N = 1.76 × 10⁵ N.

🇪🇹 አማርኛ (Amharic):
የፍጥነት ለውጥ Δv = 2.60 - (-15.0) = 17.60 m/s ነው።
አማካይ ኃይል F = m · Δv / Δt = (1500 × 17.60) / 0.15 = 1.76 × 10⁵ N ይሆናል።

🌳 Afaan Oromoo:
Jijjiiramni saffisaa Δv = 17.60 m/s. Humni giddu-galeessaa F = (1500 × 17.60) / 0.15 = 1.76 × 10⁵ N ta'a.`,
    hint: 'Remember velocity is a vector: Δv = v_f - v_i = 2.60 - (-15.0) = 17.6 m/s. Then F = m·Δv / Δt.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q27',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Work, Energy & Power: Work Done by Kinetic Friction on Incline',
    questionText: 'Starting from rest, a block of mass 5.0 kg slides 2.5 m down a rough 37° incline. The coefficient of kinetic friction between the block and the incline is µ_k = 0.44. What is the work done by the friction force on block? (Use g = 10 m/s², cos 37° = 0.80).',
    options: [
      '-75.00 J',
      '-18.92 J',
      '-44.00 J',
      '-59.00 J'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Calculate Normal force (N):
N = m · g · cos(37°) = 5.0 kg × 10 m/s² × 0.80 = 40.0 N.

Step 2: Calculate magnitude of kinetic friction (f_k):
f_k = µ_k · N = 0.44 × 40.0 N = 17.6 N.

Step 3: Calculate work done by friction (W_f):
Because friction acts opposite to the 2.5 m displacement down the incline (θ = 180°):
W_f = -f_k · d = -17.6 N × 2.5 m = -44.00 J.

🇪🇹 አማርኛ (Amharic):
1. ኖርማል ኃይል N = 5 × 10 × 0.80 = 40 N።
2. የግጭት ኃይል f_k = 0.44 × 40 = 17.6 N።
3. ግጭቱ የሰራው ስራ W_f = -17.6 × 2.5 m = -44.00 J።

🌳 Afaan Oromoo:
Humni N = 40 N, Humni ruggii f_k = 17.6 N. Hojiin ruggiitiin hojjetame W_f = -17.6 × 2.5 = -44.00 J.`,
    hint: 'Normal force N = mg·cos(37°) = 40 N. Friction f_k = 0.44 × 40 = 17.6 N. Work = -17.6 N × 2.5 m = -44 J.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q28',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Simple Machines: Efficiency of an Inclined Plane',
    questionText: 'An inclined plane is 20 m long and is inclined at an angle of 15° to the horizontal. If the effort required to push a block of weight 3,000 N up the slope is 900 N, what is the efficiency of the inclined plane? (sin 15° = 0.2588).',
    options: [
      '100 %',
      '86.7 %',
      '25.9 %',
      '30.0 %'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Vertical height lifted:
h = L · sin(15°) = 20 m × 0.2588 = 5.176 m.

Step 2: Useful work output:
W_out = Load × h = 3000 N × 5.176 m = 15,528 J.

Step 3: Total work input:
W_in = Effort × Distance = 900 N × 20 m = 18,000 J.

Step 4: Efficiency (η):
η = (W_out / W_in) × 100% = (15,528 / 18,000) × 100% = 86.27% ≈ 86.7%.

🇪🇹 አማርኛ (Amharic):
ውጤታማ ስራ W_out = 3000 × (20 × sin 15°) = 15,528 J።
የገባው ስራ W_in = 900 × 20 = 18,000 J።
ብቃት (Efficiency) = (15,528 / 18,000) × 100% ≈ 86.7%።

🌳 Afaan Oromoo:
Ga'umsa (Efficiency) = (Hojii ba'e / Hojii gale) × 100% = (15528 / 18000) × 100% ≈ 86.7%.`,
    hint: 'Efficiency = (Load × sin θ / Effort) × 100% = (3000 × 0.2588 / 900) × 100% ≈ 86.7%.',
    difficulty: 'hard',
    points: 20,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q29',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Fluid Statics: Archimedes\' Principle & Floating Density',
    questionText: 'A wooden block of volume 5.00 × 10⁻⁴ m³ floats partially submerged in water, and a small steel object of mass m = 0.25 kg is placed on top of the block. When the system is in equilibrium, the top of the wooden block is flush with the water surface. What is the density of the wood? (Density of water = 1000 kg/m³).',
    options: [
      '1000 kg·m⁻³',
      '1500 kg·m⁻³',
      '500 kg·m⁻³',
      '800 kg·m⁻³'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
When the block is just fully submerged, the total buoyant force equals the weight of displaced water:
F_b = ρ_water · V_block · g = (1000 kg/m³) × (5.00 × 10⁻⁴ m³) × g = 0.50 kg · g

For equilibrium (floating):
F_b = (m_wood + m_steel) · g
0.50 kg = m_wood + 0.25 kg  ⇒  m_wood = 0.25 kg

Density of wood:
ρ_wood = m_wood / V_block = 0.25 kg / (5.00 × 10⁻⁴ m³) = 500 kg/m³.

🇪🇹 አማርኛ (Amharic):
የእንጨቱ ይዘት ሙሉ ለሙሉ ሲሰምጥ የሚፈናቀለው ውሃ ክብደት 0.50 kg ነው። 0.50 kg = m_wood + 0.25 kg => m_wood = 0.25 kg።
የእንጨቱ እፍጋት ρ = 0.25 kg / (5.00 × 10⁻⁴ m³) = 500 kg/m³ ይሆናል።

🌳 Afaan Oromoo:
Ulfaatinni bishaan bakka bu'e = 0.50 kg. Ulfaatinni mukaa = 0.50 - 0.25 = 0.25 kg. Rukkinnii mukaa ρ = 0.25 / (5 × 10⁻⁴) = 500 kg/m³.`,
    hint: 'Total displaced water mass is 1000 × (5×10⁻⁴) = 0.50 kg. Wood mass = 0.50 - 0.25 = 0.25 kg. Density = 0.25 / (5×10⁻⁴) = 500 kg/m³.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q30',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Thermal Expansion: Bimetallic Strip Curvature',
    questionText: 'A bimetallic strip made of iron (α_iron = 1.1 × 10⁻⁵ /K) and brass (α_brass = 1.9 × 10⁻⁵ /K) bonded together is used in a thermostat. Which one of the following phenomena occurs when the temperature changes?',
    options: [
      'When the temperature decreases, the brass section of the bimetallic strip contracts slowly than the iron and the strip bends towards the brass section.',
      'When the temperature increases, the iron section of the bimetallic strip expands faster than the brass and the strip bends towards the brass section.',
      'When the temperature increases, the brass section of the bimetallic strip expands faster than the iron and the strip bends towards the iron section.',
      'When the temperature decreases, the iron section of the bimetallic strip contracts faster than the brass and the strip bends towards the iron section.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Because brass has a higher coefficient of linear expansion (α_brass = 1.9 × 10⁻⁵ /K > α_iron = 1.1 × 10⁻⁵ /K):
• When heated (temperature increases), brass expands significantly more than iron, forming the outer convex curve and causing the strip to bend towards the iron section.
• When cooled, brass contracts more, bending towards the brass section.

🇪🇹 አማርኛ (Amharic):
የናስ (brass) የመለጠጥ መጠን ከብረት (iron) ስለሚበልጥ፣ ሙቀት ሲጨምር ናስ በይበልጥ ተለጥጦ ቆርቆሮው ወደ ብረቱ (iron) አቅጣጫ እንዲታጠፍ ያደርገዋል።

🌳 Afaan Oromoo:
Wahiitti ho'i yeroo dabalu nahaasni (brass) sibiila (iron) caalaa waan diriiruuf gara sibiilaatti akka dacha'u godha.`,
    hint: 'The metal with the larger expansion coefficient (brass) expands more upon heating and forms the outside arc, bending toward iron.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  }
];
