import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2017_EC_PART1: Question[] = [
  {
    id: 'phy-2017-q1',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Vectors & Physical Quantities',
    questionText: 'Vector quantities are represented by',
    options: [
      'magnitude and direction.',
      'direction only.',
      'magnitude only.',
      'dimensionless values.'
    ],
    correctOptionIndex: 0,
    explanation: 'Vector quantities (such as velocity, displacement, force, and acceleration) require both a numerical magnitude (with unit) and a spatial direction for a complete physical description. Scalar quantities require magnitude only.',
    hint: 'Physical quantities requiring both numerical value and direction are vectors.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q2',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: "Newton's Laws of Motion: First Law",
    questionText: "According to Newton's first law, an object that is in motion continues its state of motion with",
    options: [
      'a decreasing speed if the resultant force exerted on it is zero.',
      'constant velocity if the resultant force exerted on it is not zero.',
      'an increasing speed if the resultant force exerted on it is not zero.',
      'constant velocity if the resultant force exerted on it is zero.'
    ],
    correctOptionIndex: 3,
    explanation: "Newton's first law of motion (the Law of Inertia) states that an object at rest remains at rest, and an object in motion continues in its state of motion with constant velocity (constant speed in a straight line), unless acted upon by a non-zero resultant (net) external force.",
    hint: 'In the absence of a net external force (F_net = 0), acceleration is zero, maintaining constant velocity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q3',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Kinematics: Distance vs. Displacement',
    questionText: 'Which of the following correctly describes the difference between distance and displacement?',
    options: [
      'Distance can be described both in magnitude and direction, while displacement is described only by magnitude.',
      'Distance depends on the initial and final points, while displacement depends on the path followed by a moving body.',
      'Distance is always greater than or equal to the magnitude of displacement, while the magnitude of the displacement is always less than or equal to distance.',
      'Distance has either positive or negative values, while displacement has only positive value.'
    ],
    correctOptionIndex: 2,
    explanation: 'Distance is a scalar quantity measuring the total path length traveled by a body and is always non-negative. Displacement is a vector quantity representing the shortest straight-line distance from the initial position to the final position. Therefore, Distance ≥ |Displacement|.',
    hint: 'Displacement is the direct straight line between initial and final points, making it the minimum possible path length.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q4',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Kinematics: Uniformly Accelerated Motion',
    questionText: 'Which of the following statements is correct about a uniformly accelerated motion?',
    options: [
      'The velocity is constant.',
      'The acceleration is constant.',
      'The speed is constant but the direction is changing.',
      'The displacement increases at a uniform rate.'
    ],
    correctOptionIndex: 1,
    explanation: 'By definition, uniformly accelerated motion refers to rectilinear motion in which the acceleration remains constant in both magnitude and direction, meaning the velocity changes by equal amounts in equal intervals of time.',
    hint: 'Uniform acceleration means the acceleration vector does not vary with time.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q5',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Vector Addition & Resultant Range',
    questionText: 'Two displacement vectors have magnitudes 4 m and 3 m. Which one of the following is NOT the possible value of the magnitude of their resultant vector?',
    options: [
      '1 m',
      '7 m',
      '5 m',
      '12 m'
    ],
    correctOptionIndex: 3,
    explanation: 'The magnitude of the resultant R of two vectors of magnitudes A = 4 m and B = 3 m must fall within the range |A - B| ≤ R ≤ A + B. Here, |4 - 3| = 1 m ≤ R ≤ 4 + 3 = 7 m. Therefore, a resultant magnitude of 12 m is mathematically impossible.',
    hint: 'The maximum resultant is the arithmetic sum (7 m) and the minimum is the arithmetic difference (1 m).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q6',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Kinematics: Equations of Rectilinear Motion',
    questionText: 'A train is moving along a straight line with a constant acceleration of 5 m/s² when it passes by a traffic light point. From there on, if the time taken by the train to reach a velocity of 30 m/s is 4 seconds, then what is the distance of the train from the traffic light point after 8 seconds?',
    options: [
      '80 m',
      '160 m',
      '240 m',
      '320 m'
    ],
    correctOptionIndex: 2,
    explanation: 'Step 1: Determine initial velocity u at the traffic light (t = 0):\nFrom v = u + at, with v = 30 m/s, a = 5 m/s², and t = 4 s:\n30 = u + (5)(4) => 30 = u + 20 => u = 10 m/s.\n\nStep 2: Calculate total displacement after t = 8 s:\ns = ut + ½at² = (10)(8) + ½(5)(8)² = 80 + ½(5)(64) = 80 + 160 = 240 m.',
    hint: 'First use v = u + at to find u, then use s = ut + ½at² for t = 8 s.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q7',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Equilibrium of Forces: Translational Equilibrium',
    questionText: 'Which one of the following statements is a necessary condition for an object to be in linear equilibrium?',
    options: [
      'The net force acting on the object is non-zero constant.',
      'The linear acceleration of the object is zero.',
      'The linear speed of the object is constant.',
      'The linear acceleration of the object is non-zero constant.'
    ],
    correctOptionIndex: 1,
    explanation: 'An object is in linear (translational) equilibrium when the net external force acting on it is zero (ΣF = 0). By Newton\'s second law (ΣF = ma), this directly necessitates that the linear acceleration of the object must be zero (a = 0).',
    hint: 'Linear equilibrium implies zero net force, which means zero linear acceleration.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q8',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Dynamics: Microscopic Origin of Friction',
    questionText: 'When an object tends to slide over the surface of another object, tiny bumps at the surface of the two objects knocking and locking together. This causes',
    options: [
      'gravitational force.',
      'electrostatic force.',
      'normal force.',
      'frictional force.'
    ],
    correctOptionIndex: 3,
    explanation: 'At the microscopic level, all physical surfaces have asperities (microscopic ridges and valleys). When surfaces come into contact, the interlocking and mechanical interference of these asperities resist relative motion, producing the frictional force.',
    hint: 'Microscopic surface irregularities interlocking against relative motion generate friction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q9',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Work, Energy & Gravitational Work',
    questionText: 'Suppose a ball is thrown vertically upward and after reaching a maximum height, it returns back to its initial position. Which of the following statement is correct about energy changes and work done on the ball?',
    options: [
      'On its way up, work done by gravity is positive.',
      'On its way up, change in its kinetic energy is positive.',
      'On its way down, work done by gravity is positive.',
      'On its way down, change in its potential energy is positive.'
    ],
    correctOptionIndex: 2,
    explanation: 'Work done by a constant force is W = F · d · cos θ. On the ball\'s downward path, both the gravitational force and displacement point downward (θ = 0°, cos 0° = +1), meaning work done by gravity is positive. On the way up, gravity opposes displacement (θ = 180°), doing negative work.',
    hint: 'Work is positive when force and displacement are in the same direction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q10',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Oscillations & Mechanical Energy Conservation',
    questionText: 'The mechanical energy of an oscillating object at any point through its path is equal to',
    options: [
      'the sum of its kinetic and potential energies.',
      'the sum of its kinetic and internal energies.',
      'the sum of its potential and internal energies.',
      'the difference between its kinetic and potential energies.'
    ],
    correctOptionIndex: 0,
    explanation: 'The total mechanical energy (E) of an oscillating system at any point in its path is defined as the sum of its kinetic energy (KE) and its potential energy (PE): E = KE + PE.',
    hint: 'Mechanical energy consists purely of kinetic and potential energy components.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q11',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: "Newton's Second Law & Net Force",
    questionText: 'A 2 kg object accelerates with 1.5 m/s² to the right on a horizontal frictionless surface under the action of two horizontal forces, F₁ (to the right) and F₂ = 1 N (to the left). What should be the magnitude of F₁?',
    options: [
      '2 N',
      '1 N',
      '3 N',
      '4 N'
    ],
    correctOptionIndex: 3,
    explanation: 'According to Newton\'s second law:\nF_net = m · a\nF₁ - F₂ = m · a\nF₁ - 1 N = (2 kg)(1.5 m/s²) = 3 N\nF₁ = 3 N + 1 N = 4 N.',
    hint: 'F_net = F₁ - F₂ = m × a.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q12',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Momentum & Impulse',
    questionText: 'A tennis ball of mass 0.10 kg traveling horizontally at 40.0 m/s is struck back by a racket. If the ball returns back with a speed of 30.0 m/s in the opposite direction, what is the magnitude of the impulse delivered to the ball by the racket?',
    options: [
      '3.0 kg m/s',
      '4.0 kg m/s',
      '7.0 kg m/s',
      '1.0 kg m/s'
    ],
    correctOptionIndex: 2,
    explanation: 'Impulse J = Δp = m(v_f - v_i).\nTaking the initial horizontal direction as positive (+40.0 m/s), the return velocity is in the negative direction (-30.0 m/s):\nJ = 0.10 kg × [(-30.0) - (+40.0)] m/s = 0.10 × (-70.0) = -7.0 kg·m/s.\nMagnitude of impulse |J| = 7.0 kg·m/s.',
    hint: 'Remember that velocity is a vector. Reversing direction means Δv = v_final - v_initial = -30 - 40 = -70 m/s.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q13',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Simple Machines: Effort & Load',
    questionText: 'A force that is exerted on a simple machine in order to produce input work is called',
    options: [
      'friction.',
      'load.',
      'effort.',
      'normal.'
    ],
    correctOptionIndex: 2,
    explanation: 'Effort is the applied force exerted on a simple machine by an external agent to perform input work against the resistance force (the load).',
    hint: 'The applied input force on any simple machine is termed the effort.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q14',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Wave Motion: Transverse vs. Longitudinal Waves',
    questionText: 'Which one of the following statements is correct about transverse and longitudinal waves?',
    options: [
      'The directions of wave motion and vibration of the particles are parallel for transverse waves and perpendicular for longitudinal waves.',
      'Waves on a string are longitudinal whereas sound waves are transverse.',
      'The directions of wave motion and vibration of particles are parallel for longitudinal waves but perpendicular for transverse waves.',
      'A longitudinal wave comprises a series of crests and troughs, whereas a transverse wave comprises a series of compressions and rarefactions.'
    ],
    correctOptionIndex: 2,
    explanation: 'In longitudinal waves (such as sound waves), the particles of the medium oscillate parallel to the direction of energy propagation (creating compressions and rarefactions). In transverse waves (such as surface water ripples or waves on a string), particles oscillate perpendicular to the direction of wave propagation (creating crests and troughs).',
    hint: 'Longitudinal = parallel oscillation; Transverse = perpendicular oscillation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q15',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: "Fluid Mechanics: Archimedes' Principle & Apparent Weight",
    questionText: 'An object that is partially or fully submerged in a fluid experiences an upward force from the fluid. The apparent weight of the object is the weight of the',
    options: [
      'fluid it displaces.',
      'object in air minus the buoyant force.',
      'object in air.',
      'fluid it displaces minus the buoyant force.'
    ],
    correctOptionIndex: 1,
    explanation: 'According to Archimedes\' principle, a fluid exerts an upward buoyant force equal to the weight of the displaced fluid. The apparent weight of the submerged object is its actual weight in air (true weight) minus the upward buoyant force: W_apparent = W_air - F_buoyant.',
    hint: 'Apparent weight is the reduced weight measured when buoyant force opposes gravity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q16',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Simple Machines: Actual Mechanical Advantage of Inclined Plane',
    questionText: 'A force is used to push a box of mass m along the slope of an inclined plane of angle θ with constant velocity. If the coefficient of friction between the box and the inclined plane is μ, the actual mechanical advantage (AMA) of the inclined plane is',
    options: [
      '1/(cosθ + μsinθ)',
      '1/(sinθ + μcosθ)',
      '(cosθ + μsinθ)',
      '(sinθ + μcosθ)'
    ],
    correctOptionIndex: 1,
    explanation: 'Actual Mechanical Advantage (AMA) is defined as Load / Effort.\n• Load = mg (gravitational force of the object)\n• For constant velocity up the incline, the applied effort force F must balance the component of gravity down the incline and kinetic friction:\n  F = mg sin θ + f_k = mg sin θ + μ N = mg sin θ + μ mg cos θ = mg (sin θ + μ cos θ).\nTherefore:\nAMA = Load / Effort = mg / [mg (sin θ + μ cos θ)] = 1 / (sin θ + μ cos θ).',
    hint: 'AMA = Load / Effort, where Effort = mg(sinθ + μcosθ).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q17',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Simple Machines: Wheel and Axle Efficiency',
    questionText: 'A wheel and axle of radii 40 cm and 8 cm, respectively, is used to lift a bucket of 6 kg of water from a well by applying an effort of 20 N on the wheel. The percentage efficiency of this simple machine is (take g = 10 m/s²)',
    options: [
      '60 %',
      '66.7 %',
      '30 %',
      '80 %'
    ],
    correctOptionIndex: 0,
    explanation: 'Step 1: Calculate Ideal Mechanical Advantage (IMA):\nIMA = Radius of Wheel (R) / Radius of Axle (r) = 40 cm / 8 cm = 5.\n\nStep 2: Calculate Load and Actual Mechanical Advantage (AMA):\nLoad = mg = 6 kg × 10 m/s² = 60 N.\nEffort = 20 N.\nAMA = Load / Effort = 60 N / 20 N = 3.\n\nStep 3: Calculate Efficiency (η):\nEfficiency = (AMA / IMA) × 100% = (3 / 5) × 100% = 60%.',
    hint: 'Efficiency = (AMA / IMA) × 100%, where IMA = R/r = 5 and AMA = 60/20 = 3.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q18',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Linear Momentum & Collisions',
    questionText: 'Block A of mass m₁ = 8.0 kg travelling initially at u₁ = 6 m/s in the positive x-direction collides with block B of mass m₂ = 12 kg moving in the same direction at u₂ = 3 m/s. If the velocity of block A, immediately after the collision, is v₁ = 4 m/s to the positive x-axis, what is the velocity of block B immediately after the collision?',
    options: [
      '4.33 m/s to the negative x-axis',
      '3.71 m/s to the negative x-axis',
      '3.71 m/s to the positive x-axis',
      '4.33 m/s to the positive x-axis'
    ],
    correctOptionIndex: 3,
    explanation: 'By the law of conservation of linear momentum:\nm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂\n(8.0 kg × 6 m/s) + (12 kg × 3 m/s) = (8.0 kg × 4 m/s) + (12 kg × v₂)\n48 + 36 = 32 + 12 v₂\n84 = 32 + 12 v₂\n12 v₂ = 52\nv₂ = 52 / 12 = 4.33 m/s (in the positive x-direction).',
    hint: 'Apply conservation of linear momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q19',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Thermal Physics: Heat Capacity vs. Specific Heat',
    questionText: 'The amount of heat energy required to raise the temperature of a given substance by 1°C is',
    options: [
      'latent heat.',
      'heat capacity.',
      'quantity of heat.',
      'specific heat capacity.'
    ],
    correctOptionIndex: 1,
    explanation: 'Heat capacity (thermal capacity, C = Q / ΔT) is defined as the amount of heat energy required to raise the temperature of a given entire body/substance by 1°C (or 1 K). In contrast, specific heat capacity (c) is heat capacity per unit mass (per 1 kg).',
    hint: 'Heat capacity refers to the entire substance, whereas specific heat capacity is per unit mass.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q20',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Wave Optics & Wave Phenomena',
    questionText: 'Which one of the following statements is correct about the properties of waves?',
    options: [
      'When a wave is reflected, its speed and wavelength are changed.',
      'When a wave is refracted, its speed and wavelength remain the same.',
      'When two waves interfere destructively, the amplitude of the resultant wave is greater than the amplitude of each wave.',
      'Diffraction of a wave through a narrow gap is more observable than through a wider gap.'
    ],
    correctOptionIndex: 3,
    explanation: 'Diffraction (the bending and spreading of waves around obstacles or through openings) is most pronounced when the aperture width (gap) is comparable to or smaller than the wave\'s wavelength (narrow gap). Reflection maintains speed and wavelength in the same medium; refraction alters speed and wavelength across media boundaries; destructive interference reduces resultant amplitude.',
    hint: 'Diffraction is greatest when the gap width is small compared to wavelength.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
