import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2016_EC_PART2: Question[] = [
  {
    id: 'phy-2016-q21',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Fluid Statics: Gauge Pressure vs. Absolute Pressure',
    questionText: 'The gauge pressure at a point in a fluid at rest is defined as',
    options: [
      'the pressure difference between the absolute pressure and the atmospheric pressure.',
      'the atmospheric pressure difference between sea level and the local area at which the fluid exists.',
      'the actual pressure at a given point relative to absolute vacuum.',
      'the sum of absolute pressure and atmospheric pressure.'
    ],
    correctOptionIndex: 0,
    explanation: 'Gauge pressure (P_gauge) is the pressure measured relative to the ambient atmospheric pressure: P_gauge = P_absolute - P_atm. It represents the pressure excess above local atmospheric pressure.',
    hint: 'P_gauge = P_absolute - P_atmospheric.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q22',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Fluid Statics: Manometers and Hydrostatic Equilibrium',
    questionText: 'How do we use a manometer to measure the pressure of a given gas? We use it in such a way that',
    options: [
      'the gauge pressure equals the atmospheric pressure.',
      'the gauge pressure in a fluid in the open end equals the gas pressure in closed tube.',
      'the principle of the hydrostatic equilibrium is considered to measure the pressure of unknown gas.',
      'the pressure at the surface of open end manometer is the same as the gas pressure in closed tube.'
    ],
    correctOptionIndex: 2,
    explanation: 'Manometers utilize the fundamental principle of hydrostatic equilibrium: in a continuous, stationary, incompressible fluid under gravity, the pressure is identical at all points along the same horizontal reference level (P₁ = P₂ = P_atm + ρgh).',
    hint: 'Hydrostatic equilibrium states pressure is uniform at the same horizontal level in a static liquid.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q23',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Projectile Motion: Complementary Launch Angles',
    questionText: 'Consider two balls A and B are projected with the same velocity, v₀ at angles θ₁ and θ₂, respectively, 0 < θ₁ < 45° and 45° < θ₂ < 90°. Which one of the following statements is correct about the motion of the balls?',
    options: [
      'Both balls have equal speed at their respective maximum height.',
      'The two balls cover equal ranges when θ₁ + θ₂ = 90°.',
      'The range of ball A is smaller than its maximum height.',
      'Ball A takes longer time than ball B to reach its maximum height.'
    ],
    correctOptionIndex: 1,
    explanation: 'Horizontal range is given by R = (v₀² sin 2θ) / g. For complementary angles (where θ₁ + θ₂ = 90°, so θ₂ = 90° - θ₁), sin(2θ₂) = sin(180° - 2θ₁) = sin(2θ₁). Therefore, projectiles launched with equal initial speed at complementary angles have identical horizontal ranges.',
    hint: 'Projectiles launched with the same speed achieve equal horizontal range if θ₁ + θ₂ = 90°.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q24',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Rotational Kinematics: Deceleration and Tire Revolutions',
    questionText: 'A car initially traveling at speed of 20 m/s undergoes a constant deceleration of magnitude 1.5 m/s². If the radius of each tire is 0.3 m, how many revolutions does each tire make, without slipping, before the car comes to rest? (π = 3.14)',
    options: [
      '44.44 rev',
      '133.33 rev',
      '444.4 rev',
      '70.77 rev'
    ],
    correctOptionIndex: 3,
    explanation: 'Step 1: Calculate total linear stopping distance (s):\nv² = u² - 2as => 0 = (20)² - 2(1.5)s => 3s = 400 => s = 400 / 3 ≈ 133.33 m.\n\nStep 2: Calculate circumference of one tire revolution:\nC = 2πr = 2 × 3.14 × 0.3 m = 1.884 m.\n\nStep 3: Total revolutions (N):\nN = s / C = 133.333 m / 1.884 m ≈ 70.77 rev.',
    hint: 's = u² / (2a) = 400 / 3 = 133.33 m; N = s / (2πr) = 133.33 / 1.884 = 70.77 rev.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q25',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Rotational Dynamics: Torque on a Solid Disk',
    questionText: 'A constant tangential force is applied on a rim of uniform solid disk of mass m = 50 kg and radius r = 0.5 m. If the angular speed of the disk changes by 1 rev/s within 2.0 s, what is the magnitude of the torque produced by the force? (moment of inertia of disk I = ½ m r², π = 3.14)',
    options: [
      '3.125 Nm',
      '8.25 Nm',
      '19.6 Nm',
      '39.3 Nm'
    ],
    correctOptionIndex: 2,
    explanation: 'Step 1: Calculate moment of inertia of disk:\nI = ½ m r² = ½ × 50 × (0.5)² = 25 × 0.25 = 6.25 kg·m².\n\nStep 2: Convert Δω to rad/s and find angular acceleration (α):\nΔω = 1 rev/s = 2π rad/s = 2 × 3.14 = 6.28 rad/s.\nα = Δω / Δt = 6.28 / 2.0 = 3.14 rad/s².\n\nStep 3: Calculate torque (τ = I · α):\nτ = 6.25 kg·m² × 3.14 rad/s² = 19.625 N·m ≈ 19.6 N·m.',
    hint: 'I = ½(50)(0.5²) = 6.25 kg·m²; α = 2π / 2 = 3.14 rad/s²; τ = 6.25 × 3.14 = 19.6 N·m.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q26',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Electromagnetism: Magnetic Flux through a Circular Loop',
    questionText: 'A loop of 0.1 m wide in diameter is placed in xy-plane in uniform magnetic field of 0.6 T that is perpendicular to the plane of the loop. What is the net magnetic flux through the coil? (π = 3.14)',
    options: [
      '4.7 × 10⁻³ Wb',
      '9.4 × 10⁻³ Wb',
      '1.9 × 10⁻² Wb',
      '5.6 × 10⁻² Wb'
    ],
    correctOptionIndex: 0,
    explanation: 'Step 1: Radius r = diameter / 2 = 0.1 m / 2 = 0.05 m.\n\nStep 2: Area of loop A = π r² = 3.14 × (0.05)² = 3.14 × 0.0025 = 7.85 × 10⁻³ m².\n\nStep 3: Magnetic flux Φ = B · A · cos(0°) = 0.6 T × 7.85 × 10⁻³ m² = 4.71 × 10⁻³ Wb ≈ 4.7 × 10⁻³ Wb.',
    hint: 'Φ = B · A = 0.6 × (π × 0.05²) = 0.6 × 7.85 × 10⁻³ = 4.7 × 10⁻³ Wb.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q27',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Fluid Mechanics: Density, Sinking and Floating Principles',
    questionText: 'The densities of several substances at 20°C are given: Water (1000 kg/m³), Seawater (1025 kg/m³), Blood (1060 kg/m³), Gasoline (680 kg/m³), Ice (916 kg/m³), Bone (1800 kg/m³), Iron (7860 kg/m³), Copper (8920 kg/m³), Gold (19300 kg/m³). Based on this data, which statement is correct regarding sinking and floating?',
    options: [
      'gold, blood and copper floats in gasoline.',
      'water, gasoline and ice will sink into seawater.',
      'bone, iron and seawater will sink in water.',
      'gasoline, ice and blood floats on the surface of water.'
    ],
    correctOptionIndex: 2,
    explanation: 'An object or fluid sinks in water (density = 1000 kg/m³) if its density is greater than 1000 kg/m³. Bone (1800 kg/m³), iron (7860 kg/m³), and seawater (1025 kg/m³) all have densities greater than 1000 kg/m³, so all three sink when placed in fresh water.',
    hint: 'Substances with ρ > 1000 kg/m³ (Bone: 1800, Iron: 7860, Seawater: 1025) sink in water.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q28',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Semiconductor Electronics: BJT Transistor Doping Levels',
    questionText: 'Which one of the following statements differentiates emitter, collector and base of a transistor?',
    options: [
      'The three parts; emitter, base and collector are equally doped.',
      'The base region is heavily doped as compared with base and collector.',
      'The collector region is heavily doped as compared with emitter and base.',
      'The emitter region is heavily doped as compared with base and collector.'
    ],
    correctOptionIndex: 3,
    explanation: 'In a Bipolar Junction Transistor (BJT):\n• Emitter: Heavily doped to inject a large concentration of majority charge carriers into the base.\n• Base: Lightly doped and extremely thin to minimize carrier recombination.\n• Collector: Moderately doped and physically larger to collect charge carriers and dissipate thermal energy.',
    hint: 'The emitter is the most heavily doped region of a transistor to supply charge carriers.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q29',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Digital Electronics: Switching Circuit Logic Equivalents',
    questionText: 'A circuit consists of a battery source, two parallel switches represented by letters A and B, and a light bulb Y in series. Which logic gate is represented by this equivalent switch circuit?',
    options: [
      'AND',
      'OR',
      'NAND',
      'NOR'
    ],
    correctOptionIndex: 1,
    explanation: 'In electrical switching logic:\n• Two switches connected in parallel form an OR gate: closing switch A OR switch B (or both) completes the conductive path to illuminate bulb Y (Output = A + B).\n• (In contrast, two switches in series represent an AND gate).',
    hint: 'Parallel switches represent the OR operation; series switches represent the AND operation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q30',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Electromagnetism: Transformer Voltage Equation',
    questionText: 'A 12 V voltage source is connected across the primary coil of a transformer having 600 turns. If the secondary coil of a transformer has 1000 turns, what voltage appears across the secondary coil?',
    options: [
      '12.0 V',
      '20.0 V',
      '72.0 V',
      '7.2 V'
    ],
    correctOptionIndex: 1,
    explanation: 'Using the ideal transformer turns ratio formula:\nV_s / V_p = N_s / N_p\nV_s = V_p × (N_s / N_p) = 12 V × (1000 / 600) = 12 × (5 / 3) = 20.0 V.',
    hint: 'V_s = 12 × (1000 / 600) = 20.0 V.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q31',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Fluid Mechanics: Pascal\'s Principle',
    questionText: 'A pressure applied to one point in an enclosed incompressible fluid is transmitted to all parts of the fluid without reducing in value. This is the principle of',
    options: [
      'Continuity.',
      'Bernoulli.',
      'Archimedes.',
      'Pascal.'
    ],
    correctOptionIndex: 3,
    explanation: 'Pascal\'s Principle states that a change in pressure applied at any point to an enclosed, incompressible static fluid is transmitted undiminished and equally to all portions of the fluid and to the walls of the containing vessel.',
    hint: 'Pascal\'s Principle explains how hydraulic jacks and brakes multiply force through transmitted pressure.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q32',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Kinematics: Uniform Rectilinear Motion',
    questionText: 'Which of the following statement describes uniform motion?',
    options: [
      'An object moving with constant speed of 30 m/s in a straight line',
      'An object, starting from rest, moving on a straight line to attain a velocity of 30 m/s',
      'An object moving at 30 m/s toward East and then 30 m/s toward North',
      'An object moving around a circular track with constant speed of 30 m/s'
    ],
    correctOptionIndex: 0,
    explanation: 'Uniform motion is defined as motion at constant velocity (zero acceleration), requiring both constant speed and an unchanging straight-line direction.',
    hint: 'Uniform motion requires constant speed in a straight line (constant vector velocity).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q33',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Newtonian Dynamics: Concept of Inertia',
    questionText: 'Which of the following statement describes inertia of an object? It',
    options: [
      'makes to change state of rest of the object.',
      'is a physical quantity which has a unit of mass.',
      'increases with increasing mass of the object.',
      'increases with an increasing velocity of the object.'
    ],
    correctOptionIndex: 2,
    explanation: 'Inertia is the inherent resistance of an object to any change in its state of rest or uniform motion. Mass is the quantitative physical measure of inertia: a body with greater mass possesses greater inertia and requires greater net force to accelerate.',
    hint: 'Mass is the quantitative measure of inertia; greater mass means greater inertia.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q34',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Work & Energy: Gravitational Potential Energy Comparison',
    questionText: 'Two objects, object A of mass m and object B of mass 2m are placed at heights of h₁ and h₂, respectively, from the surface of the earth. Assuming that the gravitational field strength is constant, the potential energy of object A is twice of that of object B, if',
    options: [
      'h₁ = ¼ h₂',
      'h₁ = 4 h₂',
      'h₁ = ½ h₂',
      'h₁ = 2 h₂'
    ],
    correctOptionIndex: 1,
    explanation: '• PE_A = m · g · h₁\n• PE_B = (2m) · g · h₂ = 2 m g h₂\n\nGiven that PE_A = 2 · PE_B:\nm g h₁ = 2 · (2 m g h₂) = 4 m g h₂\nDividing both sides by mg:\nh₁ = 4 h₂.',
    hint: 'm g h₁ = 2(2m g h₂) => h₁ = 4 h₂.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q35',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Vectors: Perpendicular Vector Displacement',
    questionText: 'A car travels 60 m north and then 80 m west. What is the magnitude of the resultant displacement of the car from its starting point?',
    options: [
      '20 m',
      '4800 m',
      '100 m',
      '140 m'
    ],
    correctOptionIndex: 2,
    explanation: 'Since North and West are mutually perpendicular (90°):\nR = √[(60 m)² + (80 m)²] = √(3600 + 6400) = √10000 = 100 m.',
    hint: 'R = √(60² + 80²) = 100 m (standard 3-4-5 right triangle scaled by 20).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q36',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Kinematics: Velocity-Time Graph Area and Displacement',
    questionText: 'The velocity-time graph of an object moving along a straight line toward east shows a constant velocity of 30 m/s from t = 0 to t = 15 s, followed by a linear deceleration to rest at t = 20 s. What is the total displacement moved by the object?',
    options: [
      '525 m East',
      '600 m East',
      '450 m East',
      '375 m East'
    ],
    correctOptionIndex: 0,
    explanation: 'Displacement equals the area under the v-t graph (a trapezoid):\nArea = ½ × (top base + bottom base) × height\n= ½ × (15 s + 20 s) × 30 m/s\n= ½ × 35 × 30 = 35 × 15 = 525 m East.\n(Alternatively: Rectangle [0 to 15s] = 30 × 15 = 450 m; Triangle [15 to 20s] = ½ × 5 × 30 = 75 m; Total = 450 + 75 = 525 m East).',
    hint: 'Area = (30 × 15) + ½(5 × 30) = 450 + 75 = 525 m East.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q37',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Newtonian Dynamics: Apparent Weight in an Accelerating Elevator',
    questionText: 'A person of mass 75 kg experiences a net force of 400 N when placed in an upward accelerating lift. What is its apparent weight? (g = 10 m/s²)',
    options: [
      '400 N',
      '750 N',
      '350 N',
      '1150 N'
    ],
    correctOptionIndex: 3,
    explanation: '• True weight W = mg = 75 kg × 10 m/s² = 750 N.\n• For upward acceleration: F_net = N - W = 400 N.\n• Apparent weight is the normal supporting force N:\nN = W + F_net = 750 N + 400 N = 1150 N.',
    hint: 'Apparent weight N = mg + F_net = 750 N + 400 N = 1150 N.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q38',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Work & Energy: Work Done by Friction',
    questionText: 'A block of mass 20 kg is pushed horizontally, at constant speed, along a rough horizontal floor over a distance of 5 m. If coefficient of kinetic friction between the block and the surface is 0.4, what is the amount of work done by friction? (g = 10 m/s²)',
    options: [
      '-40 J',
      '-400 J',
      '1000 J',
      '-100 J'
    ],
    correctOptionIndex: 1,
    explanation: 'Step 1: Calculate kinetic friction force:\nf_k = μ_k · m · g = 0.4 × 20 kg × 10 m/s² = 80 N.\n\nStep 2: Calculate work done by friction (opposing motion, θ = 180°):\nW_friction = -f_k · d = -80 N × 5 m = -400 J.',
    hint: 'W_f = -(μ_k m g) · d = -(0.4 × 20 × 10) × 5 = -400 J.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q39',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Simple Machines: Mechanical Advantage and Efficiency of a Lever',
    questionText: 'A 200 N force is required to be applied at one end of a 1 m long lever, 80 cm from its fulcrum, in order to lift a load of 600 N placed at the other end (20 cm from fulcrum). What is the efficiency of the lever?',
    options: [
      '17%',
      '25%',
      '83%',
      '75%'
    ],
    correctOptionIndex: 3,
    explanation: 'Step 1: Ideal Mechanical Advantage (IMA):\nIMA = effort arm / load arm = 80 cm / 20 cm = 4.0.\n\nStep 2: Actual Mechanical Advantage (AMA):\nAMA = Load / Effort = 600 N / 200 N = 3.0.\n\nStep 3: Efficiency (η):\nη = (AMA / IMA) × 100% = (3.0 / 4.0) × 100% = 75%.',
    hint: 'IMA = 80/20 = 4; AMA = 600/200 = 3; Efficiency = 3/4 × 100% = 75%.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q40',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Fluid Statics: Density and Relative Density (Specific Gravity)',
    questionText: 'A substance with a mass of 2 kg has a volume of 2.5 × 10⁻³ m³. What is the relative density of the substance? (Density of water = 1000 kg/m³)',
    options: [
      '8.0',
      '80',
      '1.25',
      '0.8'
    ],
    correctOptionIndex: 3,
    explanation: 'Step 1: Density of the substance:\nρ = mass / volume = 2 kg / (2.5 × 10⁻³ m³) = 800 kg/m³.\n\nStep 2: Relative density (specific gravity):\nRelative Density = ρ_substance / ρ_water = 800 kg/m³ / 1000 kg/m³ = 0.8.',
    hint: 'ρ = 2 / 0.0025 = 800 kg/m³; Relative Density = 800 / 1000 = 0.8.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
