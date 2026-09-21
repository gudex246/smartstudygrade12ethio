import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2013_EC_PART3: Question[] = [
  {
    id: 'phy-2013-q26',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Kinematics: Instantaneous vs Average Velocity',
    questionText: 'Instantaneous velocity is different from average velocity in that instantaneous velocity is:',
    options: [
      'The velocity of the object at a particular instant of time.',
      'In the opposite direction to the displacement of the moving object.',
      'The total displacement divided by the total time taken.',
      'The average velocity during the period of acceleration.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Average velocity is the overall displacement divided by the total elapsed time interval: v_avg = Δx / Δt.
• Instantaneous velocity is the derivative of position with respect to time (the limit of average velocity as Δt approaches zero: v = dx/dt), representing the velocity at a specific, exact instant of time.

🇪🇹 አማርኛ (Amharic):
ቅጽበታዊ ፍጥነት (Instantaneous velocity) ማለት በአንድ የተወሰነ ቅጽበት (particular instant of time) ላይ የሚገኝ ፍጥነት (v = dx/dt) ነው። አማካይ ፍጥነት ግን አጠቃላይ ርቀት ለፈጀው ጠቅላላ ጊዜ ሲካፈል ነው።

🌳 Afaan Oromoo:
Saffisni yerootoo (Instantaneous velocity) saffisa qabxii yeroo murtaa'e tokko irratti argamudha (v = dx/dt).`,
    hint: 'Instantaneous velocity is the velocity measured at a single specific instant: v(t) = dx/dt.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q27',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Kinematics: 1D Acceleration Calculation',
    questionText: 'A car travelling at 20 m/s starts to speed up. After 5 minutes its speed is 144 m/s. What is the acceleration of the car?',
    options: [
      '28.8 m/s²',
      '0.41 m/s²',
      '24.8 m/s²',
      '0.55 m/s²'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Acceleration is defined as the rate of change of velocity:
a = (v_f - v_i) / t

Given:
• Initial velocity v_i = 20 m/s
• Final velocity v_f = 144 m/s
• Time interval t = 5 minutes = 5 × 60 s = 300 s

a = (144 m/s - 20 m/s) / 300 s = 124 / 300 ≈ 0.413 m/s² ≈ 0.41 m/s².

🇪🇹 አማርኛ (Amharic):
የፍጥንጥነት ቀመር:
a = (v_f - v_i) / t = (144 - 20) / (5 × 60) = 124 / 300 = 0.413 m/s²።

🌳 Afaan Oromoo:
Saffisiisa (acceleration): a = (144 - 20) / 300 = 0.413 m/s² ta'a.`,
    hint: 'Convert 5 minutes to 300 seconds: a = (144 - 20) / 300 = 124 / 300 ≈ 0.41 m/s².',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q28',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: '2D Kinematics: Independence of Horizontal and Vertical Motions',
    questionText: 'A bullet of 200 g mass is fired horizontally from a 30.0 m high building. At the exact same time, an identical bullet is dropped from rest from the same height. Neglecting air resistance, what can be concluded about the motion of the two bullets?',
    options: [
      'The dropped bullet takes more time to strike the ground.',
      'Both bullets move with the same horizontal velocity.',
      'Both bullets strike the ground at the exact same time.',
      'The horizontally fired bullet takes more time to strike the ground.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Perpendicular horizontal and vertical motions in projectile kinematics are completely independent:
• Both bullets start with zero initial vertical velocity (v_0y = 0).
• Both bullets experience the identical downward gravitational acceleration g = 9.8 m/s².
• The time of fall depends purely on height: t = √(2h / g) = √(2 × 30 / 9.8) ≈ 2.47 s.
Therefore, both bullets hit the horizontal ground simultaneously.

🇪🇹 አማርኛ (Amharic):
አግድም የተተኮሰው ጥይት እና ወደታች የተለቀቀው ጥይት ሁለቱም የመነሻ ቁልቁል ፍጥነታቸው ዜሮ (v_0y = 0) ስለሆነ እና ሁለቱም በእኩል የስበት ኃይል ስለሚወድቁ መሬት ላይ በእኩል ጊዜ ይደርሳሉ።

🌳 Afaan Oromoo:
Sochiin sarara dalgee fi gadii walaba waan ta'eef, lachanuu yeroo wal-qixa keessatti lafa dha'u (t = √(2h/g)).`,
    hint: 'Vertical motion is independent of horizontal velocity: t = √(2h/g) is identical for both bullets.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q29',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Relative Velocity: 2D Vector Subtraction',
    questionText: 'A bird flies at a speed of 10 m/s South relative to the Earth. A wind blows at a speed of 4 m/s East relative to the Earth. What is the velocity of the bird relative to the wind?',
    options: [
      '6 m/s in the direction of North-East',
      '10.8 m/s in the direction of North-West',
      '6 m/s in the direction of South-West',
      '10.8 m/s in the direction of South-West'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Relative velocity formula:
v_bird/wind = v_bird/earth - v_wind/earth

Vector components:
• v_bird/earth = 0 i - 10 j m/s (South)
• v_wind/earth = +4 i + 0 j m/s (East)

v_bird/wind = (0 - 4) i + (-10 - 0) j = -4 i - 10 j m/s (West and South).

Magnitude:
|v_bird/wind| = √((-4)² + (-10)²) = √(16 + 100) = √116 ≈ 10.77 ≈ 10.8 m/s.
Direction: Negative x and negative y corresponds to South-West.

🇪🇹 አማርኛ (Amharic):
የአንጻራዊ ፍጥነት ስሌት: v_bw = v_be - v_we = -4 i - 10 j
መጠን = √(4² + 10²) = √116 = 10.8 m/s ወደ ደቡብ-ምዕራብ (South-West)።

🌳 Afaan Oromoo:
Saffisa wal-bira qabaa: v = √(4² + 10²) = 10.8 m/s gara Kibba-Dhihaatti (South-West).`,
    hint: 'Subtract vectors: v_bw = -4 i - 10 j. Magnitude = √(4² + 10²) = 10.8 m/s in the South-West direction.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q30',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Mechanics: Definition of Dynamics',
    questionText: 'Dynamics is the branch of classical mechanics concerned with the motion of bodies:',
    options: [
      'Under the action of forces and the causes of motion.',
      'Under the action of balanced forces only.',
      'Without regard to the forces or causes that produce the motion.',
      'Restricted strictly to objects moving with constant velocity.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• Dynamics is the study of why objects move, focusing on the relationships between forces, mass, and the resulting acceleration/motion.
• Kinematics describes motion geometrically (displacement, velocity, acceleration) without considering the forces causing it.

🇪🇹 አማርኛ (Amharic):
ዳይናሚክስ (Dynamics) ስለ ቁሶች እንቅስቃሴ እና እንቅስቃሴውን ስለሚፈጥሩት ኃይሎች (Forces) የሚያጠና የሜካኒክስ ዘርፍ ነው።

🌳 Afaan Oromoo:
Daayinaamiksiin damee makaaniksii kan waa'ee sochiitiifi humnoota sochii sana uuman qoratudha.`,
    hint: 'Dynamics deals with forces and their effect on motion, while kinematics describes motion without causes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q31',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Rotational Dynamics: Vector Torque & Axis of Rotation',
    questionText: 'Which one of the following statements is correct regarding a rigid bar on which an applied force acts at one end while pivoted at the other end?',
    options: [
      'The applied force is parallel to the angular acceleration produced.',
      'The applied force, angular velocity, and torque are all coplanar.',
      'The torque produced is perpendicular to the plane containing the position vector and the force vector.',
      'The applied force is collinear with the angular velocity vector.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
By definition, torque is the vector cross product:
τ_vec = r_vec × F_vec
The resulting torque vector τ_vec (and the angular acceleration α_vec = τ_vec / I) is always strictly perpendicular (orthogonal) to the plane defined by the displacement vector r_vec and the force vector F_vec, pointing along the rotational axis.

🇪🇹 አማርኛ (Amharic):
ቶርክ የቬክተር ክሮስ ብዜት (τ = r × F) ስለሆነ፣ የሚፈጠረው ቶርክ ሁልጊዜ ከቦታው ቬክተር (r) እና ከኃይሉ ቬክተር (F) ገጽታ ጋር ፐርፔንዲኩላር (perpendicular) ነው።

🌳 Afaan Oromoo:
Toorkiin τ = r × F waan ta'eef, kallattiin toorkii yeroo hunda fuula sarara 'r' fi 'F'tiin walqaxxaamuree (perpendicular) ta'a.`,
    hint: 'Torque is defined by the cross product τ = r × F, which is orthogonal to both r and F.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q32',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Equilibrium: Conditions for Rotational Equilibrium',
    questionText: 'What is the necessary condition for a rigid body to be in rotational equilibrium?',
    options: [
      'The net moment of all forces should be non-zero.',
      'The net torque acting on the object is different from zero.',
      'The net force acting on the object must be non-zero.',
      'The sum of clockwise torques must equal the sum of counter-clockwise torques (Net Torque Σ τ = 0).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
For a body to be in rotational equilibrium, the vector sum of all external torques acting about any pivot point must be zero:
Σ τ = 0  ⇔  Σ τ_clockwise = Σ τ_counterclockwise
(Translational equilibrium requires Σ F = 0).

🇪🇹 አማርኛ (Amharic):
አንድ አካል በማሽከርከር ሚዛን (Rotational equilibrium) ላይ እንዲሆን፣ በሰዓት አቅጣጫ የሚዞሩት ቶርኮች ድምር በተቃራኒ ሰዓት አቅጣጫ ከሚዞሩት ቶርኮች ድምር ጋር እኩል መሆን (Net torque = 0) አለበት።

🌳 Afaan Oromoo:
Qixa ta'iinsa naanna'aa (rotational equilibrium) keessatti: Toorkiin kallattii sa'aatii toorkii faallaa sa'aatii waliin wal-qixa ta'uu qaba (Σ τ = 0).`,
    hint: 'Rotational equilibrium requires zero net torque: Σ τ_CW = Σ τ_CCW.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q33',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Elasticity: Strain Energy of a Stretched Wire',
    questionText: 'An aluminum wire of initial length 2.0 m increases by 2.0 cm in length upon the application of a 9.0 N tensile force. What is the strain energy stored in the material?',
    options: [
      '0.18 J',
      '0.90 J',
      '9.0 × 10⁻² J',
      '4.5 × 10⁻² J'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Assuming the deformation is within the elastic limit, the strain energy (elastic potential energy stored) is equal to the work done:
U = 1/2 · F · Δx

Given:
• F = 9.0 N
• Extension Δx = 2.0 cm = 0.02 m

U = 1/2 × 9.0 N × 0.02 m = 0.09 J = 9.0 × 10⁻² J.

🇪🇹 አማርኛ (Amharic):
የመለጠጥ ኃይል (Strain energy) ስሌት:
U = 1/2 · F · Δx = 0.5 × 9.0 N × 0.02 m = 0.09 J = 9.0 × 10⁻² J።

🌳 Afaan Oromoo:
Anniisaa dhiibbaa (Strain energy): U = 1/2 · F · Δx = 0.5 × 9.0 × 0.02 = 9.0 × 10⁻² J.`,
    hint: 'Use Strain Energy = 1/2 · F · Δx = 0.5 × 9.0 × 0.02 = 0.09 J = 9.0 × 10⁻² J.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q34',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Fluid Mechanics: Capillary Rise Formula',
    questionText: 'Ethanol has a surface tension of 22 × 10⁻³ N/m and a density of 789 kg/m³. If the radius of the capillary tube is 0.015 m and the contact angle is 30°, what is the height rise of the liquid column? (g = 10 m/s², cos 30° = 0.866).',
    options: [
      '0.32 mm',
      '0.16 mm',
      '3.2 mm',
      '1.6 mm'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The height h of capillary rise is given by Jurin's Law:
h = (2 · γ · cos θ) / (ρ · g · r)

Given:
• Surface tension γ = 22 × 10⁻³ N/m
• Contact angle θ = 30° ⇒ cos(30°) ≈ 0.866
• Liquid density ρ = 789 kg/m³
• Tube radius r = 0.015 m
• g = 10 m/s²

h = (2 × 22 × 10⁻³ × 0.866) / (789 × 10 × 0.015)
h = (3.81 × 10⁻²) / (118.35) ≈ 3.22 × 10⁻⁴ m = 0.32 mm.

🇪🇹 አማርኛ (Amharic):
በካፒላሪ ቀመር: h = (2 · γ · cos θ) / (ρ · g · r)
h = (2 × 22×10⁻³ × 0.866) / (789 × 10 × 0.015) = 0.32 mm ይሆናል።

🌳 Afaan Oromoo:
Olka'iinsa dhangala'aa ujummoo keessatti: h = (2γ cos θ) / (ρ g r) = 0.32 mm.`,
    hint: 'Apply Jurin\'s law: h = 2γ cos(θ) / (ρ g r) ≈ 0.32 mm.',
    difficulty: 'hard',
    points: 20,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q35',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Fluid Dynamics: Factors Affecting Laminar Flow',
    questionText: 'When a stream of fluid flows past a submerged solid object, which one of the following factors does NOT affect the laminar/turbulent flow of the surrounding fluid?',
    options: [
      'The viscosity of the fluid',
      'The internal density of the solid object',
      'The aerodynamic/hydrodynamic shape of the solid object',
      'The relative speed of the solid object through the fluid'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
According to the Reynolds number (Re = ρ_fluid · v · L / μ):
Fluid flow characteristics (laminar vs turbulent) depend strictly on fluid density, fluid viscosity (μ), relative flow velocity (v), and the geometric shape/dimensions (L) of the object. The internal density of the solid object itself does not exert any aerodynamic/hydrodynamic influence on the fluid stream.

🇪🇹 አማርኛ (Amharic):
የፈሳሽ ላሚናር ፍሰት (Laminar flow) በፈሳሹ ቪስኮሲቲ፣ ፍጥነት እና በእቃው ቅርጽ ላይ የሚወሰን ሲሆን፣ የእቃው ውስጣዊ እፍጋት (density of the solid object) ግን በፈሳሹ ፍሰት ላይ ምንም ተፅዕኖ የለውም።

🌳 Afaan Oromoo:
Dhangala'uu qulqulluu (laminar flow) keessatti rukkinnii meeshaa jabaa (density of solid) dhiibbaa hin qabu.`,
    hint: 'The flow regime is governed by Reynolds number: fluid properties, relative speed, and shape—not the solid\'s inner density.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q36',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Fluid Dynamics: Continuity Equation & Area Ratio',
    questionText: 'Water flows through a tube of non-uniform cross-section. The speed at the entry of area A₁ is 12 m/s, and the speed becomes 4 m/s at the exit of area A₂. What is the ratio A₁ / A₂?',
    options: [
      '4',
      '1/4',
      '1/3',
      '3'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
By the Equation of Continuity for incompressible fluid flow:
A₁ · v₁ = A₂ · v₂

Rearranging for the ratio A₁ / A₂:
A₁ / A₂ = v₂ / v₁ = 4 m/s / 12 m/s = 1/3.

🇪🇹 አማርኛ (Amharic):
በኮንቲኒዩቲ ቀመር መሰረት: A₁ · v₁ = A₂ · v₂
A₁ / A₂ = v₂ / v₁ = 4 / 12 = 1/3 ይሆናል።

🌳 Afaan Oromoo:
Qajeeltoo itti fufiinsaatiin: A₁ / A₂ = v₂ / v₁ = 4 / 12 = 1/3 ta'a.`,
    hint: 'By continuity A₁v₁ = A₂v₂: A₁/A₂ = v₂/v₁ = 4/12 = 1/3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q37',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Thermal Physics: Triple Point Definition',
    questionText: 'The specific temperature and pressure at which the solid, liquid, and gaseous phases of a given substance coexist in thermodynamic equilibrium is known as the:',
    options: [
      'Triple point',
      'Heat capacity',
      'Critical temperature',
      'Boiling point'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The triple point of a pure substance is the unique thermodynamic state of temperature and pressure at which the three phases (solid, liquid, and gas) coexist in stable thermodynamic equilibrium (e.g. for pure water: 273.16 K at 611.65 Pa).

🇪🇹 አማርኛ (Amharic):
አንድ ንጥረ ነገር በሶስቱም ምዕራፎች (ጠጣር፣ ፈሳሽ እና ጋዝ) በአንድነት ሚዛን ላይ የሚገኝበት ነጥብ ትሪፕል ፖይንት (Triple point) ይባላል።

🌳 Afaan Oromoo:
Qabxiin wanti tokko bifa sadaniinuu (jabaa, dhangala'aa, gaazii) walsimee itti argamu 'Triple point' jedhama.`,
    hint: 'The triple point is the unique (T, P) condition where solid, liquid, and gas phases coexist simultaneously in equilibrium.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q38',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Thermal Physics: Microscopic Explanation of Thermal Expansion',
    questionText: 'Most solid materials expand upon heating. Which one of the following statements correctly explains this phenomenon at the microscopic atomic level?',
    options: [
      'An increase in temperature increases the vibrational kinetic energy and decreases the amplitude of oscillation.',
      'An increase in temperature decreases the vibrational kinetic energy of the crystal lattice.',
      'An increase in temperature decreases both vibrational kinetic energy and atomic spacing.',
      'An increase in temperature increases the vibrational kinetic energy and amplitude of atomic vibrations around asymmetric interatomic potential wells.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
When a solid absorbs heat energy, the kinetic energy of atomic vibrations increases. Because interatomic potential energy curves are asymmetric (steeper at small separations and flatter at larger distances), larger vibration amplitudes cause the mean equilibrium separation between atoms to increase, leading to overall thermal expansion.

🇪🇹 አማርኛ (Amharic):
ጠጣር አካል ሲሞቅ የሙቀት ኃይሉ የቅንጣቶቹን የመርገብገብ እንቅስቃሴ (Vibrational kinetic energy) እና አምፕሊቲዩድ ስለሚጨምር በቅንጣቶቹ መካከል ያለው አማካይ ርቀት ሰፍቶ እቃው እንዲለጠጥ ያደርገዋል።

🌳 Afaan Oromoo:
Ho'i yeroo dabalu anniisaan kirkira atamootaa waan dabaluuf fageenyi atamoota gidduu bal'atee wanti sun akka diriiru godha.`,
    hint: 'Heating increases atomic vibrational kinetic energy and vibration amplitude, shifting the average atomic spacing outward.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  }
];
