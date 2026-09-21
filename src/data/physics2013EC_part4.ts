import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2013_EC_PART4: Question[] = [
  {
    id: 'phy-2013-q39',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Thermodynamics: First Law & Internal Energy Change',
    questionText: 'If 25 J of heat is removed from a thermodynamic system (heat taken away) and the system simultaneously performs 20 J of expansion work on its surroundings, what is the change in internal energy of the system?',
    options: [
      '-45.0 J',
      '+45.0 J',
      '-5.0 J',
      '+5.0 J'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
According to the First Law of Thermodynamics:
ΔU = Q - W

Given:
• Heat removed from system: Q = -25 J
• Work done by system: W = +20 J

ΔU = (-25 J) - (+20 J) = -45.0 J.
The internal energy of the system decreases by 45.0 Joules.

🇪🇹 አማርኛ (Amharic):
በቴርሞዳይናሚክስ የመጀመሪያ ሕግ መሰረት:
ΔU = Q - W = -25 J - 20 J = -45.0 J። የሲስተሙ ውስጣዊ ኃይል በ 45 ጁል ይቀንሳል።

🌳 Afaan Oromoo:
Seera jalqabaa Teermoodaayinaamiksiin: ΔU = Q - W = -25 J - 20 J = -45.0 J. Anniisaan keessaa 45 Jtiin hir'ata.`,
    hint: 'Use ΔU = Q - W: with Q = -25 J and W = +20 J, ΔU = -25 - 20 = -45.0 J.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q40',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Thermal Physics: Dalton\'s Law of Partial Pressures',
    questionText: 'A sample mixture of gases contains 72% Hydrogen and 28% Helium by volume/mole fraction. What is the partial pressure exerted by Helium at a total atmospheric pressure of 76 cm of mercury (cm Hg)?',
    options: [
      '33.44 cm Hg',
      '76.00 cm Hg',
      '54.72 cm Hg',
      '21.28 cm Hg'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to Dalton's Law of Partial Pressures:
P_gas = (Fraction of gas) × P_total

Given:
• Helium fraction = 28% = 0.28
• Total atmospheric pressure P_total = 76 cm Hg

P_He = 0.28 × 76 cm Hg = 21.28 cm Hg.

🇪🇹 አማርኛ (Amharic):
በዳልተን ከፊል ጫና ሕግ መሰረት:
P_He = 0.28 × 76 cm Hg = 21.28 cm Hg ይሆናል።

🌳 Afaan Oromoo:
Dhiibbaa keessoo Heeliyami: P = 0.28 × 76 cm Hg = 21.28 cm Hg ta'a.`,
    hint: 'Multiply the fractional percentage by total pressure: 0.28 × 76 = 21.28 cm Hg.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q41',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Friction: Static vs Kinetic Friction Coefficients',
    questionText: 'Which one of the following statements is NOT correct concerning the properties and coefficients of friction?',
    options: [
      'The coefficient of friction is defined as the ratio of the frictional force to the normal contact force.',
      'The coefficient of static friction is always less than the coefficient of kinetic friction.',
      'The coefficient of static friction is a dimensionless ratio with no units.',
      'Friction coefficients are determined by the nature and roughness of the contacting surfaces.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Static friction coefficient (μ_s) is ALWAYS greater than or equal to the kinetic friction coefficient (μ_k) for any given pair of surfaces (μ_s ≥ μ_k) because more force is required to break microscopic surface asperities and initiate motion than to maintain motion. Therefore, statement B is false and is the correct answer.

🇪🇹 አማርኛ (Amharic):
የስታቲክ ግጭት ኮፊሸንት (μ_s) ሁልጊዜ ከካይኔቲክ ግጭት ኮፊሸንት (μ_k) ይበልጣል (μ_s > μ_k)። ስለዚህ ስታቲክ ከካይኔቲክ ያንሳል የሚለው አማራጭ B ፍጹም ስህተት ነው።

🌳 Afaan Oromoo:
Ko'effisiyantiin ruggii dhaabbataa (μ_s) yeroo hunda kan socho'aa (μ_k) caala (μ_s > μ_k). Kanaafuu filannoon B sirrii miti.`,
    hint: 'Static friction coefficient is always higher than kinetic friction (μ_s > μ_k).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q42',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Kinematics: Constant Velocity Motion Characteristics',
    questionText: 'A car travels at a constant velocity along a straight horizontal highway. Which statement is correct?',
    options: [
      'The displacement of the car increases linearly with time.',
      'The displacement of the car decreases quadratically with time.',
      'The net external horizontal force acting on the car is non-zero.',
      'The acceleration of the car opposes its direction of motion.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
For an object moving with constant velocity (v = const):
• Acceleration a = dv/dt = 0, and net force Σ F = m·a = 0 (Newton\'s First Law).
• Displacement follows the linear relation s(t) = v · t, which increases directly and linearly with elapsed time.

🇪🇹 አማርኛ (Amharic):
አንድ መኪና በቋሚ ፍጥነት (constant velocity) ሲጓዝ ፍጥንጥነቱ ዜሮ (a = 0) ሲሆን፣ የተጓዘው ርቀት/መፈናቀል (Displacement) ከጊዜ ጋር በቀጥታ መስመራዊ (linearly) ይጨምራል።

🌳 Afaan Oromoo:
Saffisa dhaabbataatiin (constant velocity) yeroo socho'u fageenyi isaa sarara qajeelaan (linearly) dabalaa deema.`,
    hint: 'At constant velocity, displacement s = v·t is a straight linear function of time.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q43',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Momentum & Impulse: Definition of Impulse',
    questionText: 'Which one of the following statements is correct regarding the impulse delivered to an object?',
    options: [
      'The impulse on an object changes when the net force acting on the object is zero.',
      'The area under a momentum-versus-time graph represents the impulse delivered.',
      'Impulse is the change in momentum produced when a force acts on an object over a time duration.',
      'Impulse is the rate of change of momentum with respect to time.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
By the Impulse-Momentum Theorem:
Impulse (J) is defined as the integral of force over time: J = ∫ F dt = F_avg · Δt = Δp = p_final - p_initial.
It represents the net change in momentum produced on the body.
(Note: The rate of change of momentum dp/dt is Force, not Impulse; Impulse is the area under a Force-vs-Time graph).

🇪🇹 አማርኛ (Amharic):
ኢምፐልስ (Impulse) ማለት አንድ ኃይል ለአጭር ጊዜ ሲያርፍ የሚፈጠረው የሞመንተም ለውጥ (J = F · Δt = Δp) ነው።

🌳 Afaan Oromoo:
'Impulse' jechuun jijjiirama moomantamiiti: J = F · Δt = Δp.`,
    hint: 'Impulse equals change in linear momentum: J = F·Δt = Δp.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q44',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Collisions: Elastic vs Inelastic Classification',
    questionText: 'Consider two collisions between two identical trollies of equal mass moving toward each other with equal speeds in opposite directions:\n• Collision 1: After collision, the two trollies bounce off each other and travel backward with the same original speed.\n• Collision 2: After collision, the two trollies lock together due to a magnetic coupler and come to a complete stop.\nWhich statement correctly classifies these collisions?',
    options: [
      'Both collisions are elastic.',
      'Collision 1 is elastic and Collision 2 is inelastic.',
      'Both collisions are inelastic.',
      'Collision 1 is inelastic and Collision 2 is elastic.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• Collision 1: Total kinetic energy is conserved before and after impact (KE_initial = KE_final), so it is a perfectly elastic collision.
• Collision 2: The objects stick/couple together and lose 100% of their macroscopic kinetic energy, classifying it as a perfectly inelastic collision.

🇪🇹 አማርኛ (Amharic):
ሁኔታ 1: እቃዎቹ ተጋጭተው በተመሳሳይ ፍጥነት ስለተመለሱ የእንቅስቃሴ ኃይል (KE) ተጠብቋል (Elastic collision)።
ሁኔታ 2: እቃዎቹ ተጣብቀው ስለቆሙ ሙሉ በሙሉ ኢላስቲክ ያልሆነ ግጭት (Inelastic collision) ነው።

🌳 Afaan Oromoo:
Walitti bu'iinsi 1ffaa 'elastic' yoo ta'u (anniisaan hin banne), 2ffaan immoo 'inelastic' (walitti qabamaniiru) dha.`,
    hint: 'Bouncing back with equal speed = elastic; sticking together = inelastic.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q45',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Oscillations: Energy Distribution in a Vertical Mass-Spring System',
    questionText: 'A mass attached to a vertical spring oscillates up and down between its upper and lower turning points. This mass-spring system attains maximum gravitational potential energy (GPE), maximum elastic potential energy (EPE), and maximum kinetic energy (KE) at which positions, respectively?',
    options: [
      'Middle, top, and bottom respectively',
      'Middle, bottom, and top respectively',
      'Bottom, middle, and top respectively',
      'Top, bottom, and middle respectively'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Gravitational Potential Energy (GPE = mgh) is maximum at the highest elevation (Top position).
• Elastic Potential Energy (EPE = 1/2 k x²) is maximum when the spring experiences its greatest elongation (Bottom position).
• Kinetic Energy (KE = 1/2 m v²) is maximum where velocity is greatest, which occurs at the equilibrium position (Middle position).

🇪🇹 አማርኛ (Amharic):
1. የስበት ኃይል (GPE) ከፍተኛ የሚሆነው ከላይ (Top) ነው።
2. የጸደይ መለጠጥ ኃይል (EPE) ከፍተኛ የሚሆነው ከስር (Bottom) ነው።
3. የእንቅስቃሴ ኃይል (KE) ከፍተኛ የሚሆነው በመሃል (Middle) ሚዛን ቦታ ላይ ነው።

🌳 Afaan Oromoo:
Anniisaan harkisaa (GPE) gubbaatti (Top), kan diriirsuu (EPE) jalaatti (Bottom), kan sochii (KE) immoo gidduutti (Middle) olaanaadha.`,
    hint: 'GPE is highest at the top, EPE is highest at maximum stretch (bottom), KE peaks at equilibrium (middle).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q46',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Conservation of Energy: Simple Pendulum Maximum Height',
    questionText: 'A simple pendulum of string length 2.5 m and bob mass m swings back and forth. When the bob passes its lowest equilibrium position A, it has a speed of 2.0 m/s. Neglecting air resistance, what is the maximum vertical height h reached by the bob at its turning points B and C? (g = 10 m/s²).',
    options: [
      '0.1 m',
      '2.5 m',
      '0.2 m',
      '0.4 m'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
By Conservation of Mechanical Energy between lowest point A and highest turning point B/C:
KE_bottom = GPE_top
1/2 · m · v² = m · g · h

Solving for height h:
h = v² / (2g) = (2.0 m/s)² / (2 × 10 m/s²) = 4.0 / 20 = 0.2 m.

🇪🇹 አማርኛ (Amharic):
በኃይል ጥበቃ ሕግ መሰረት:
1/2 m v² = m g h
h = v² / (2g) = (2.0)² / (2 × 10) = 4 / 20 = 0.2 m ይሆናል።

🌳 Afaan Oromoo:
Qusannaa anniisaatiin: h = v² / (2g) = (2.0)² / 20 = 0.2 m.`,
    hint: 'Set KE = GPE: h = v² / (2g) = (2.0)² / 20 = 0.2 m.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q47',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Conservation of Energy: Falling Object Potential Energy Partition',
    questionText: 'A 5.0 kg stone is dropped from rest from the top of a 30.0 m high building. At a height of 10.0 m above the ground, 60% of its initial gravitational potential energy has been converted into kinetic energy. Which statement is correct about the energy of the stone?',
    options: [
      'The stone has lost all its gravitational potential energy.',
      '6.7% of its gravitational potential energy is dissipated as thermal friction.',
      '60% of its original potential energy was dissipated as acoustic sound.',
      'The remaining 40% of the initial energy is still stored as gravitational potential energy.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Initial potential energy at h₁ = 30 m is E_total = mgh₁ = 5 × 10 × 30 = 1500 J (100%).
At h₂ = 10 m:
Remaining potential energy: GPE = mgh₂ = 5 × 10 × 10 = 500 J = (10/30) × 100% ≈ 33.3% - 40% (or directly by conservation: 100% - 60% = 40% remaining as gravitational potential energy).

🇪🇹 አማርኛ (Amharic):
ከመጀመሪያው 100% የቁስ ኃይል ውስጥ 60% ወደ እንቅስቃሴ ኃይል (Kinetic energy) ስለተቀየረ፣ የቀረው 40% የኃይል መጠን በስበት ኃይል (GPE) መልክ ይገኛል።

🌳 Afaan Oromoo:
Anniisaa 100% keessaa 60% gara anniisaa sochiitti waan jijjiirameef, 40%n hafe anniisaa harkisaa (GPE) ta'ee tura.`,
    hint: 'By energy conservation: 100% - 60% converted = 40% remaining potential energy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q48',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Vectors & Statics: Cross Product Torque in 2D Plane',
    questionText: 'A force vector F_vec = [3, 4]ᵀ N acts at a position vector r_vec = [4, 3]ᵀ m in the xy-plane. What is the magnitude and vector direction of the torque produced about the origin?',
    options: [
      '-7.0 N·m k',
      '-24.0 N·m k',
      '+24.0 N·m k',
      '+7.0 N·m k'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Torque in 3D coordinate space is given by the cross product τ_vec = r_vec × F_vec:
Given:
• r_vec = 4 i + 3 j + 0 k
• F_vec = 3 i + 4 j + 0 k

τ_vec = (r_x · F_y - r_y · F_x) k
τ_vec = (4 × 4 - 3 × 3) k = (16 - 9) k = +7.0 N·m k.

🇪🇹 አማርኛ (Amharic):
የቶርክ ክሮስ ፕሮዳክት ቀመር:
τ = (r_x · F_y - r_y · F_x) k = (4 × 4 - 3 × 3) k = (16 - 9) k = +7.0 N·m k።

🌳 Afaan Oromoo:
Toorkii koo-ordiniitii: τ = (4 × 4 - 3 × 3) k = (16 - 9) k = +7.0 N·m k.`,
    hint: 'Use 2D cross product: τ_z = x·F_y - y·F_x = 4(4) - 3(3) = 16 - 9 = +7.0 N·m k.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q49',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Rotational Kinematics: Angular Displacement Calculation',
    questionText: 'A flywheel starts rotating at a frequency of 1.2 Hz and uniformly accelerates to 1.8 Hz in 5.0 seconds. What is the total angular displacement covered by the flywheel in these 5 seconds?',
    options: [
      '10π rad',
      '3π rad',
      '30π rad',
      '15π rad'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Convert rotation frequencies to angular velocities (ω = 2π f):
• Initial angular speed: ω₁ = 2π × 1.2 Hz = 2.4π rad/s
• Final angular speed: ω₂ = 2π × 1.8 Hz = 3.6π rad/s

Step 2: Calculate angular displacement using average angular velocity:
θ = ((ω₁ + ω₂) / 2) · t
θ = ((2.4π + 3.6π) / 2) · 5 s = (6.0π / 2) · 5 = 3.0π · 5 = 15π rad.

🇪🇹 አማርኛ (Amharic):
1. ω₁ = 2π × 1.2 = 2.4π rad/s
2. ω₂ = 2π × 1.8 = 3.6π rad/s
3. አንግላር መፈናቀል θ = ((2.4π + 3.6π) / 2) × 5 = 3.0π × 5 = 15π rad።

🌳 Afaan Oromoo:
Jijjiirama kofaa: θ = ((2.4π + 3.6π)/2) × 5 = 3π × 5 = 15π rad.`,
    hint: 'Average angular velocity is 3π rad/s. Angular displacement = 3π × 5 = 15π rad.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q50',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Rotational Dynamics: Angular Momentum Definition',
    questionText: 'Given the following rotational quantities: torque (τ), linear momentum (p), moment of inertia (I), angular speed (ω), and angular acceleration (α). The angular momentum L of a rotating rigid body is defined as:',
    options: [
      'The product of moment of inertia and angular speed (L = I · ω).',
      'The ratio of moment of inertia to angular acceleration (L = I / α).',
      'The product of moment of inertia and torque (L = I · τ).',
      'The ratio of linear momentum to moment of inertia (L = p / I).'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In rotational dynamics, angular momentum (L) is the rotational analog of linear momentum (p = m·v). For a rigid body rotating about a fixed principal axis:
L = I · ω
where I is the moment of inertia and ω is the angular velocity.

🇪🇹 አማርኛ (Amharic):
አንግላር ሞመንተም (L) የሞመንት ኦፍ ኢነርሺያ (I) እና የአንግላር ፍጥነት (ω) ብዜት ነው: L = I · ω።

🌳 Afaan Oromoo:
Moomantamii naanna'aa (Angular momentum): L = I · ω dha.`,
    hint: 'Angular momentum is the rotational equivalent of p = mv, defined as L = I · ω.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  }
];
