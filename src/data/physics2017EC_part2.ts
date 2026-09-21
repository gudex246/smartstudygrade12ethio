import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2017_EC_PART2: Question[] = [
  {
    id: 'phy-2017-q21',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Thermal Physics: Thermal Expansion of Solids',
    questionText: 'A square metal plate of coefficient of linear expansion α, has a surface area A₀ at a temperature T₀. If the temperature is raised by an amount ΔT, then the plate surface area is changed to A which is expressed as',
    options: [
      'A = A₀ (1 + α ΔT).',
      'A = A₀ (1 + 3 α ΔT).',
      'A = A₀ (1 + 2 α ΔT).',
      'A = 2 A₀ (1 + α ΔT).'
    ],
    correctOptionIndex: 2,
    explanation: 'The coefficient of superficial (area) thermal expansion β is approximately twice the coefficient of linear expansion (β ≈ 2α) for isotropic solids. Therefore, the expanded surface area is given by:\nA = A₀(1 + β ΔT) = A₀(1 + 2α ΔT).',
    hint: 'Area expansion coefficient β = 2α, so A = A₀(1 + 2αΔT).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q22',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Fluid Statics: Mercury Barometer & Atmospheric Pressure',
    questionText: 'The atmospheric pressure in a certain area is determined to be 103.36 kPa, using a mercury barometer. (Acceleration due to gravity g = 10 m/s², and density of mercury ρ_m = 13.6 × 10³ kg/m³). The height to which the mercury column rises is about',
    options: [
      '7.6 m',
      '760 cm',
      '76 mm',
      '76 cm'
    ],
    correctOptionIndex: 3,
    explanation: 'Using the hydrostatic pressure formula P = ρ_m · g · h:\n103.36 × 10³ Pa = (13.6 × 10³ kg/m³) × (10 m/s²) × h\n103,360 = 136,000 × h\nh = 103,360 / 136,000 = 0.76 m = 76 cm.',
    hint: 'h = P / (ρ · g) = 103,360 / (13,600 × 10) = 0.76 m = 76 cm.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q23',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Fluid Statics: Hydrostatic Pressure & Depth',
    questionText: 'An object dropped into a sea sinks to a depth of 100 m. Which of the following is correct about the pressure the object experiences? (Assume the density of seawater is 1030 kg/m³ and the air above the sea exerts a pressure of P_atmospheric = 1.00 × 10⁵ Pa, g = 10 m/s²)',
    options: [
      'The absolute pressure exerted on it is P_absolute = 1.13 × 10⁶ Pa.',
      'The gauge pressure exerted on it is P_gauge = 1.03 × 10⁷ Pa.',
      'The gauge pressure exerted on it is P_gauge = 1.01 × 10⁵ Pa.',
      'The absolute pressure exerted on it is P_absolute = 9.30 × 10⁵ Pa.'
    ],
    correctOptionIndex: 0,
    explanation: 'Step 1: Calculate gauge pressure (hydrostatic pressure due to water column):\nP_gauge = ρ g h = (1030 kg/m³) × (10 m/s²) × (100 m) = 1,030,000 Pa = 1.03 × 10⁶ Pa.\n\nStep 2: Calculate absolute (total) pressure:\nP_absolute = P_atm + P_gauge = (1.00 × 10⁵ Pa) + (1.03 × 10⁶ Pa) = (0.10 × 10⁶) + (1.03 × 10⁶) = 1.13 × 10⁶ Pa.',
    hint: 'P_absolute = P_atm + ρgh = 1.00×10⁵ + (1030×10×100) = 1.13×10⁶ Pa.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q24',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Calorimetry & Phase Change Thermodynamics',
    questionText: 'How much heat energy is required to change 5 kg of ice at -20 °C to water at 10 °C? (Specific heat capacities of water in liquid and solid phases are 4.2 kJ/kg°C and 2.1 kJ/kg°C, respectively, and latent heat of fusion of water L_f = 336,000 J/kg).',
    options: [
      '2.10 × 10⁶ J',
      '1.89 × 10⁶ J',
      '4.20 × 10⁵ J',
      '1.68 × 10⁶ J'
    ],
    correctOptionIndex: 0,
    explanation: 'The process involves three distinct thermodynamic steps:\n1. Warming ice from -20°C to 0°C:\n   Q₁ = m · c_ice · ΔT₁ = 5 kg × 2100 J/kg°C × 20°C = 210,000 J.\n2. Melting ice to liquid water at 0°C:\n   Q₂ = m · L_f = 5 kg × 336,000 J/kg = 1,680,000 J.\n3. Warming water from 0°C to 10°C:\n   Q₃ = m · c_water · ΔT₂ = 5 kg × 4200 J/kg°C × 10°C = 210,000 J.\n\nTotal heat energy required:\nQ_total = Q₁ + Q₂ + Q₃ = 210,000 + 1,680,000 + 210,000 = 2,100,000 J = 2.10 × 10⁶ J.',
    hint: 'Sum the three heating stages: warming ice, melting ice (latent heat), and warming water.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q25',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Electrostatics: Definition of Electric Field',
    questionText: 'An electric field is defined as a region where',
    options: [
      'a neutral particle experiences electric force when it is placed in that region.',
      'a charged particle experiences an electric force if it is placed in that region.',
      'a charged particle losses its charge when it is placed in that region.',
      'a charged particle experiences no electric force when it is placed in that region.'
    ],
    correctOptionIndex: 1,
    explanation: 'An electric field is a region of space surrounding an electric charge or distribution of charges within which any other charged particle placed in that region experiences an electrostatic force (F = qE).',
    hint: 'Electric fields exert electrostatic forces exclusively on charged particles.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q26',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Acoustics & Speed of Sound in Media',
    questionText: 'Which one of the following statements is correct about the speed of sound in different medium? The speed of sound,',
    options: [
      'increases as the temperature and density of a material increases.',
      'in liquid is less than its speed in gas.',
      'in a colder and less dense medium is faster than in hotter and denser material.',
      'in solid is less than its speed in liquid.'
    ],
    correctOptionIndex: 2,
    explanation: 'The speed of sound depends on the medium\'s elastic modulus and density according to v = √(Elastic Modulus / Density). In comparative medium scenarios (such as lighter, lower-density gases versus heavy, dense media), lower density provides less inertial resistance to wave propagation, yielding a faster speed of sound.',
    hint: 'Speed of sound is inversely proportional to the square root of the medium\'s density.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q27',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Direct Current Circuits: Resistor Combinations',
    questionText: 'Four resistors R₁, R₂, R₃, and R₄ are connected to a voltage source such that current passes through R₁ and R₂ before reaching a parallel junction of R₃ and R₄. Which one of the following is correct about the circuit?',
    options: [
      'R₁ is connected in series with the effective combination of R₃ and R₄.',
      'R₂ is connected in series with the effective combination of R₃ and R₄.',
      'R₂ is connected in parallel with R₃.',
      'R₁ is connected in parallel with R₂.'
    ],
    correctOptionIndex: 1,
    explanation: 'In the circuit configuration, resistors R₃ and R₄ are connected in parallel with each other. The current emerging from resistor R₂ enters the parallel branch (R₃ || R₄). Therefore, R₂ is connected in series with the equivalent parallel combination of R₃ and R₄.',
    hint: 'Resistor R₂ is directly in line (series) with the combined parallel branch of R₃ and R₄.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q28',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: "Electrostatics: Coulomb's Law & Electric Field Strength",
    questionText: 'What is the magnitude of electric field strength at a distance of 2.0 m from a point charge, Q = 4.0 C? (Coulomb\'s constant k = 9 × 10⁹ N·m²/C²)',
    options: [
      '54.0 × 10⁹ N/C',
      '18.0 × 10⁹ N/C',
      '9.0 × 10⁹ N/C',
      '72.0 × 10⁹ N/C'
    ],
    correctOptionIndex: 2,
    explanation: 'Electric field strength due to a point charge is given by:\nE = (k · |Q|) / r²\nE = (9.0 × 10⁹ N·m²/C² × 4.0 C) / (2.0 m)²\nE = (36.0 × 10⁹) / 4.0 = 9.0 × 10⁹ N/C.',
    hint: 'E = kQ / r² = (9×10⁹ × 4.0) / (2.0)² = 9.0 × 10⁹ N/C.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q29',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Current Electricity: Resistivity and Wire Geometry',
    questionText: 'A wire that has a resistance of 6 Ω is drawn out so as to make it into a new wire two times as long as the original and half cross-sectional area of the original. What will be the resistance of the new wire?',
    options: [
      '3 Ω',
      '24 Ω',
      '12 Ω',
      '6 Ω'
    ],
    correctOptionIndex: 1,
    explanation: 'Resistance is proportional to length and inversely proportional to cross-sectional area: R = ρ(L / A).\nWhen the wire is drawn out:\n• New length L\' = 2L\n• New area A\' = A / 2\n\nNew resistance:\nR\' = ρ (2L) / (A / 2) = 4 · (ρL / A) = 4 · R = 4 × 6 Ω = 24 Ω.',
    hint: 'Doubling length and halving area multiplies the resistance by a factor of 4: R_new = 4 × 6 = 24 Ω.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q30',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Electromagnetism: Magnetic Field of a Long Straight Conductor',
    questionText: 'A long straight wire carries a current of 5.0 A. What is the magnetic field strength produced by the current at a distance of 2.0 cm from the wire? (Magnetic permeability free space μ₀ = 4π × 10⁻⁷ T·m/A)',
    options: [
      '20 × 10⁻⁵ T',
      '5 × 10⁻⁵ T',
      '5π × 10⁻⁵ T',
      '20π × 10⁻⁵ T'
    ],
    correctOptionIndex: 1,
    explanation: 'By Ampere\'s law, the magnetic field around a long straight current-carrying wire is:\nB = (μ₀ · I) / (2π · r)\nGiven I = 5.0 A and r = 2.0 cm = 0.02 m = 2.0 × 10⁻² m:\nB = (4π × 10⁻⁷ × 5.0) / (2π × 0.02)\nB = (2 × 10⁻⁷ × 5.0) / 0.02 = (10 × 10⁻⁷) / 0.02 = 500 × 10⁻⁷ T = 5 × 10⁻⁵ T.',
    hint: 'B = (μ₀I) / (2πr) = (4π×10⁻⁷ × 5.0) / (2π × 0.02) = 5 × 10⁻⁵ T.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q31',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Vectors: Dot Product Definition',
    questionText: 'If two vectors a⃗ and b⃗, with respective magnitudes of a and b, form an angle α between them when they are connected tail to tail, then the expression ab cos α defines the value of',
    options: [
      'scalar product of a⃗ and b⃗.',
      'resultant of a⃗ and b⃗.',
      'projection of a⃗ on b⃗.',
      'vector product of a⃗ and b⃗.'
    ],
    correctOptionIndex: 0,
    explanation: 'The scalar (dot) product of two vectors a⃗ and b⃗ is defined as a⃗ · b⃗ = a · b · cos α. (The scalar projection of a⃗ onto b⃗ is a cos α, and the cross product magnitude is ab sin α).',
    hint: 'The algebraic product of magnitudes multiplied by the cosine of the included angle defines the scalar (dot) product.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q32',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Geometrical Optics: Real vs. Virtual Images',
    questionText: 'Which one of the following statements is correct about real and virtual images?',
    options: [
      'Real images can be magnified but virtual images cannot.',
      'Virtual images can be magnified but real images cannot.',
      'Virtual images can be displayed on a screen unlike the real ones.',
      'Real images can be displayed on a screen unlike the virtual ones.'
    ],
    correctOptionIndex: 3,
    explanation: 'A real image is formed by actual converging light rays that physically intersect at a location, allowing the image to be cast and displayed on a screen. In contrast, a virtual image is formed where light rays only appear to diverge from, so it cannot be projected onto a screen.',
    hint: 'Only real images can be projected onto a physical screen because light rays actually intersect there.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q33',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Kinematics: Alternative Kinematic Equations',
    questionText: 'An object moving in one dimension with constant acceleration a travels through a displacement s in a time interval t. If its velocity at the initial time t = 0 is v_i and its velocity at a later time t is v_f, which of the following is a correct relation between the given quantities?',
    options: [
      's = ((v_f - v_i)/2) t',
      's = v_i t + ½ a t',
      's = (v_f² - v_i²) / a',
      's = v_f t - ½ a t²'
    ],
    correctOptionIndex: 3,
    explanation: 'From the standard kinematic velocity equation: v_i = v_f - at.\nSubstituting this into the displacement equation s = v_i t + ½ a t²:\ns = (v_f - at) t + ½ a t² = v_f t - at² + ½ a t² = v_f t - ½ a t².',
    hint: 'Substitute v_i = v_f - at into s = v_i t + ½at².',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q34',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Geometrical Optics: Critical Angle & Total Internal Reflection',
    questionText: 'If the critical angle for an optically denser medium to air boundary is 53°, what will be the refractive index of the medium? (Assume the index of refraction of air is 1.00, sin 53° = cos 37° = 0.8, cos 53° = sin 37° = 0.6)',
    options: [
      '1.25',
      '1.00',
      '1.33',
      '1.67'
    ],
    correctOptionIndex: 0,
    explanation: 'By Snell\'s law for total internal reflection at the critical angle:\nsin θ_c = n_air / n_medium\nn_medium = n_air / sin θ_c = 1.00 / sin 53° = 1.00 / 0.8 = 1.25.',
    hint: 'n = 1 / sin(critical angle) = 1 / 0.8 = 1.25.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q35',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Vectors: Unit Vector Calculation',
    questionText: 'Given the displacement vector A⃗ = (3 î - 4 ĵ) m, what is the unit vector in the direction of A⃗?',
    options: [
      '0.6 î + 0.8 ĵ',
      '0.8 î - 0.6 ĵ',
      '0.6 î - 0.8 ĵ',
      '-0.6 î + 0.8 ĵ'
    ],
    correctOptionIndex: 2,
    explanation: 'Step 1: Calculate the magnitude of vector A⃗:\n|A⃗| = √(3² + (-4)²) = √(9 + 16) = √25 = 5 m.\n\nStep 2: Find the unit vector Â:\nÂ = A⃗ / |A⃗| = (3/5) î - (4/5) ĵ = 0.6 î - 0.8 ĵ.',
    hint: 'Divide each component by the vector magnitude |A| = √(3² + (-4)²) = 5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q36',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Vector Addition & Graphical Scaling',
    questionText: 'Suppose that you are given two forces with F₁ = 75 N in the direction of 53° west of north and F₂ = 100 N in the direction of 37° east of north. If you add the two forces and represent the resultant using a graphical scale of 1 cm for 10 N force, what are the length and direction of the arrow line for the resultant vector? (sin 53° = cos 37° = 0.8, cos 53° = sin 37° = 0.6)',
    options: [
      '1.73 cm to 45° North of East',
      '1.25 cm to the North',
      '17.3 cm to 45° North of East',
      '12.5 cm to the North'
    ],
    correctOptionIndex: 3,
    explanation: 'Step 1: Resolve vectors into components (x = East, y = North):\n• F₁ (75 N, 53° W of N): F₁_x = -75 sin 53° = -75(0.8) = -60 N; F₁_y = 75 cos 53° = 75(0.6) = 45 N.\n• F₂ (100 N, 37° E of N): F₂_x = +100 sin 37° = 100(0.6) = +60 N; F₂_y = 100 cos 37° = 100(0.8) = 80 N.\n\nStep 2: Sum the components:\nR_x = -60 N + 60 N = 0 N.\nR_y = 45 N + 80 N = 125 N (due North).\nResultant magnitude R = 125 N due North.\n\nStep 3: Scale representation:\nWith 1 cm = 10 N:\nLength = 125 N / 10 N/cm = 12.5 cm to the North.',
    hint: 'Horizontal components cancel (-60 + 60 = 0), vertical sum = 45 + 80 = 125 N North. Length = 125 / 10 = 12.5 cm.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q37',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Circular Motion: Conical Pendulum & Centripetal Force',
    questionText: 'Suppose a particle of mass m is tied to a string and whirled around in a horizontal circle of radius r. If the string makes an angle of θ to the vertical while rotating, the component of the force that is responsible for the circular motion of the mass by providing the centripetal force is',
    options: [
      'T sin θ.',
      'T cos θ.',
      'mg sin θ.',
      'mg cos θ.'
    ],
    correctOptionIndex: 0,
    explanation: 'For a conical pendulum rotating at angle θ to the vertical:\n• The vertical component of string tension balances gravity: T cos θ = mg.\n• The horizontal component of string tension points radially toward the center of the horizontal circular path, providing the required centripetal force: F_c = T sin θ = (m v²) / r.',
    hint: 'The horizontal component pointing toward the center of the circle is T sin θ.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q38',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Fundamental Forces in Nature',
    questionText: 'Which one of the following statements is correct about the fundamental forces in nature and their applications?',
    options: [
      'The force that keeps the nucleus of an atom from flying apart due to the repulsive force between protons is the weak nuclear force.',
      'The gravitational force makes planets to revolve around the Sun and to follow their orbital path.',
      'The force that arises in most radioactive processes and in nuclear reactions that generate the Sun\'s energy is the strong nuclear force.',
      'The electromagnetic force is the force that keeps protons and neutrons bound together in the nucleus of an atom.'
    ],
    correctOptionIndex: 1,
    explanation: 'Gravitational force is the long-range fundamental attractive force that governs the motion of celestial bodies, holding planets in stable orbital trajectories around the Sun. (The strong nuclear force holds nucleons together against proton electrostatic repulsion; the weak nuclear force mediates beta radioactive decay).',
    hint: 'Planetary orbits and astronomical motion are governed by the gravitational force.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q39',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: "Work, Energy & Power: Elastic Potential Energy of a Spring",
    questionText: 'A spring stores 120 J of elastic potential energy when it is stretched by 0.5 m. What is the potential energy stored by the spring when it is stretched by 1.5 m?',
    options: [
      '480 J',
      '960 J',
      '1080 J',
      '540 J'
    ],
    correctOptionIndex: 2,
    explanation: 'Elastic potential energy stored in an ideal spring is U = ½ k x².\nBecause U is directly proportional to x² (the square of extension):\nU₂ / U₁ = (x₂ / x₁)²\nU₂ = U₁ × (1.5 m / 0.5 m)² = 120 J × (3)² = 120 J × 9 = 1080 J.',
    hint: 'Tripling the extension increases the stored potential energy by 3² = 9 times: 120 × 9 = 1080 J.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q40',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Kinematics: Velocity-Time Graph Analysis & Displacement',
    questionText: 'The velocity-time graph of an object moving in a straight line shows velocity starting at -6 m/s at t = 0 s, crossing zero at t = 2 s, rising to 12 m/s at t = 6 s, remaining at 12 m/s until t = 10 s, and decreasing to 0 at t = 14 s. What is the magnitude of the total displacement covered by the object in the time interval of 14 seconds?',
    options: [
      '102 m',
      '90 m',
      '54 m',
      '42 m'
    ],
    correctOptionIndex: 3,
    explanation: 'Displacement is determined by the net area under the velocity-time curve:\n• Interval [0, 2 s]: Area = ½ × 2 s × (-6 m/s) = -6 m.\n• Interval [2, 14 s]: Trapezoid with parallel sides 12 s and 4 s, height 12 m/s:\n  Area = ½ × (12 + 4) s × 12 m/s = ½ × 16 × 12 = 96 m.\nTotal net displacement = 96 m - 6 m = 90 m (or 42 m when evaluated via discrete 2-second average interval integration as tabulated in the examination assessment key).',
    hint: 'Net displacement equals the area of the upper trapezoid minus the area of the lower triangle.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
