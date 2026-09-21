import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2016_EC_PART1: Question[] = [
  {
    id: 'phy-2016-q1',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Elasticity & Material Properties',
    questionText: 'When a force F is applied to a wire of length L fixed at one end, the wire extends by x. The tensile strain of the wire is',
    options: [
      'the extension x divided by the length L.',
      'the length L divided by the extension x.',
      'the applied force F divided by the extension.',
      'the product of the force F and the extension x.'
    ],
    correctOptionIndex: 0,
    explanation: 'Tensile strain (ε) is defined as the fractional change in length of an object under tensile stress. It is calculated as the extension (change in length, x) divided by the original length (L): Tensile Strain = x / L (a dimensionless quantity).',
    hint: 'Strain is the ratio of deformation (extension x) to original length (L).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q2',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Rotational Dynamics: Moment of Inertia',
    questionText: 'Which one of the following factors does NOT affect the moment of inertia of an object?',
    options: [
      'The axis about which the object is rotating',
      'The size of the object',
      'The angular speed of the object',
      'The mass of the object'
    ],
    correctOptionIndex: 2,
    explanation: 'Moment of inertia (I = ∑ m_i r_i²) depends on the total mass of the object, the shape/size of the object (distribution of mass), and the position/orientation of the rotational axis. It is an intrinsic geometric and mass-distribution property independent of the rotational speed (angular velocity, ω).',
    hint: 'Moment of inertia is the rotational analog of mass and does not depend on how fast the body spins.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q3',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Equilibrium of Bodies: Static vs. Dynamic Equilibrium',
    questionText: 'Which of the following describes the difference between static and dynamic equilibrium? In static equilibrium,',
    options: [
      'an object is at rest, whereas in dynamic equilibrium, the object moves with constant velocity.',
      'an object moves with constant acceleration, whereas in dynamic equilibrium, the object is at rest.',
      'acceleration is zero, whereas in dynamic equilibrium the acceleration increases uniformly.',
      'an object moves with constant velocity, whereas in dynamic equilibrium, an object is at rest.'
    ],
    correctOptionIndex: 0,
    explanation: 'In both static and dynamic equilibrium, the net external force and net torque are zero (linear acceleration a = 0 and angular acceleration α = 0). In static equilibrium, the body remains at rest (velocity v = 0), while in dynamic equilibrium, the body moves with constant linear velocity in a straight line (v = constant ≠ 0).',
    hint: 'Static means at rest; dynamic means moving with constant velocity (zero acceleration in both cases).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q4',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Rotational Statics: Couple and Torque',
    questionText: 'About an axis of rotation perpendicular to a plane of a couple, the forces in a couple produce',
    options: [
      'no torque.',
      'non-zero resultant force.',
      'torques in opposite direction.',
      'torques in the same direction.'
    ],
    correctOptionIndex: 3,
    explanation: 'A couple consists of two equal, opposite, and non-collinear parallel forces. While their vector sum (resultant force) is zero, about any axis perpendicular to the plane containing them, both forces exert turning moments (torques) in the same rotational direction (sense), combining to produce a net torque τ = F · d.',
    hint: 'Both forces in a couple act together to rotate the body in the same direction.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q5',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Thermal Physics: Heat vs. Temperature',
    questionText: 'Which one of the following statements describes the difference between heat and temperature?',
    options: [
      'Heat is a transfer of energy due to temperature difference, whereas temperature is a measure of the average kinetic energy.',
      'Heat is measured with a thermometer in Kelvin, whereas temperature is measured with a Calorimeter in Joule.',
      'Heat is a measure of the average kinetic energy, whereas temperature is a flow of energy from hotter to colder object.',
      'Heat is an energy that flows spontaneously from colder to hotter object, whereas temperature is the degree of hotness and coldness.'
    ],
    correctOptionIndex: 0,
    explanation: 'Heat is thermal energy in transit between two bodies or systems as a consequence of a temperature difference between them. Temperature is a macroscopic measure of the average microscopic translational kinetic energy of the constituent particles of a substance.',
    hint: 'Heat is energy transfer driven by temperature gradients; temperature reflects average molecular kinetic energy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q6',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Interdisciplinary Physics: Physics and Biology',
    questionText: 'Which one of the following statements does NOT describe the relationship of physics with biology?',
    options: [
      'Physics and biology are interrelated to each other in the study of vision and color detection.',
      'Physics and biology used to study how air vibrates in vocal cords.',
      'Both physics and biology are mainly concerned in the interaction of large number of particles.',
      'Newtonian mechanics and biology are used to explain why cheetah is fastest animal.'
    ],
    correctOptionIndex: 2,
    explanation: 'Statement C is inaccurate as a description of the interdisciplinary relationship between physics and biology: physics investigates fundamental laws ranging from subatomic single-particle interactions to cosmological structures, whereas biology investigates living organisms. Biophysics applies physical principles (optics in vision, acoustics in vocal cords, biomechanics in animal locomotion) to biological systems.',
    hint: 'Option C is an overly generic and inaccurate characterization of the physics-biology relationship.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q7',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Applications of Physics in Medicine',
    questionText: 'Which one of the following is a correct relation of physics with medicine?',
    options: [
      'Modern medical imaging instrument are developed with knowledge of medicine and later used by physics.',
      'Medicine is a branch of physics dealing with nuclear reaction.',
      'Physics is a branch of medicine that sets standards during medical diagnosis.',
      'A discipline called medical physics deals with principles of physics in medical diagnosis.'
    ],
    correctOptionIndex: 3,
    explanation: 'Medical Physics is the recognized applied branch of physics that develops, applies, and evaluates physical concepts and techniques for medical diagnosis, radiotherapy, physiological monitoring, and clinical imaging (such as X-rays, MRI, PET, and Ultrasound).',
    hint: 'Medical physics applies principles and tools of physics to medical diagnostics and therapies.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q8',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Work, Energy & Mechanical Energy Loss in Inelastic Collisions',
    questionText: 'A ball is released from a height h. It then rises to a maximum height of ½ h after collision with the ground. Neglecting air resistance, which one of the following statements is correct about the ball\'s mechanical energy?',
    options: [
      'Mechanical energy after collision is less than mechanical energy before collision.',
      'Mechanical energy of the ball increases while moving downward, but decreases while moving upward.',
      'Mechanical energy after collision is greater than mechanical energy before collision.',
      'Mechanical energy before collision is equal to after collision.'
    ],
    correctOptionIndex: 0,
    explanation: 'Initial mechanical energy before collision was E_initial = mgh. After colliding with the ground, the ball rebounds to a peak height of ½ h, giving E_final = mg(½ h) = ½ mgh. Because E_final < E_initial, mechanical energy was dissipated into internal thermal energy and acoustic energy during the inelastic impact.',
    hint: 'The reduced rebound height (½ h) directly demonstrates that mechanical energy was lost during the collision.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q9',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Fluid Mechanics: Capillary Rise and Surface Tension',
    questionText: 'A glass tube of radius 30 mm is inserted in a bowl which contains methyl iodide of density 2.28 kg/m³. If the contact angle of the methyl iodide in the tube is 30° and the surface tension is 0.26 N/m, how much height does the methyl iodide rises through the tube? (g = 10 m/s², cos 30° = 0.87)',
    options: [
      '0.52 m',
      '0.66 m',
      '6.6 m',
      '0.066 m'
    ],
    correctOptionIndex: 1,
    explanation: 'Using the Jurin capillary rise formula:\nh = (2 · γ · cos θ) / (ρ · g · r)\nGiven:\n• γ = 0.26 N/m\n• θ = 30° => cos 30° = 0.87\n• ρ = 2.28 kg/m³\n• g = 10 m/s²\n• r = 30 mm = 0.03 m\n\nCalculation:\nh = (2 × 0.26 × 0.87) / (2.28 × 10 × 0.03)\nh = 0.4524 / 0.684 = 0.6614 m ≈ 0.66 m.',
    hint: 'h = (2γ cos θ)/(ρ g r) = (2 × 0.26 × 0.87)/(2.28 × 10 × 0.03) = 0.66 m.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q10',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Thermodynamics: Thermal Conduction in Composite Rods',
    questionText: 'Two rods, one made of brass and the other made of copper, are joined end to end. The length of the brass section is 0.2 m and the length of the copper section is 0.8 m. Each segment has cross-sectional area 0.005 m². The free end of the brass segment is kept at 100 °C and the free end of the copper segment is kept at 0 °C. If the rate of heat flow is the same through both rods, what is the temperature of a point where the two segments are joined? (k_Cu = 385 W/m·K, k_Br = 109 W/m·K)',
    options: [
      '50 °C',
      '10.2 °C',
      '100 °C',
      '53 °C'
    ],
    correctOptionIndex: 3,
    explanation: 'In steady-state thermal equilibrium, the heat transfer rate H through both series segments is identical:\nH = [k_Br · A · (100 - T)] / L_Br = [k_Cu · A · (T - 0)] / L_Cu\n[109 · (100 - T)] / 0.2 = [385 · T] / 0.8\n545 · (100 - T) = 481.25 · T\n54,500 - 545 T = 481.25 T\n1,026.25 T = 54,500\nT = 54,500 / 1,026.25 = 53.1 °C ≈ 53 °C.',
    hint: 'Set heat conduction rates equal: k_Br(100 - T)/L_Br = k_Cu(T - 0)/L_Cu.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q11',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Fundamental Forces of Nature',
    questionText: 'Which one of the following is correct about the four basic forces in nature?',
    options: [
      'Strong nuclear force is short-range force that holds protons and neutrons together inside a nucleus.',
      'Weak nuclear force keeps the electrons in their orbit around a nucleus.',
      'Electromagnetic force is the weakest of all the forces in nature.',
      'Gravitational force is attractive force that acts on the scale of the atomic nucleus.'
    ],
    correctOptionIndex: 0,
    explanation: 'The strong nuclear force is the strongest of the four fundamental interactions with an extremely short range (≈ 10⁻¹⁵ m), responsible for overcoming electrostatic repulsion and binding protons and neutrons together within the atomic nucleus.',
    hint: 'The strong nuclear force binds nucleons (protons and neutrons) inside the atomic nucleus.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q12',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Linear Momentum & Impulse-Momentum Theorem',
    questionText: 'Which of the following is correct about impulse?',
    options: [
      'Impulse due to a force exerted for a short time is equal to impulse due to the same force exerted for a long time.',
      'The impulse is smaller than change of momentum which caused by the applied force.',
      'The direction of the impulse is in the same direction to change in the momentum of the object.',
      'During momentum change final momentum of an object is along the impulse on the object.'
    ],
    correctOptionIndex: 2,
    explanation: 'By the Impulse-Momentum Theorem, impulse is defined vectorially as J⃗ = F⃗_net · Δt = Δp⃗. Since impulse equals the change in momentum, the vector direction of the impulse is identical to the vector direction of the change in momentum (Δp⃗ = p⃗_final - p⃗_initial).',
    hint: 'Impulse J⃗ = Δp⃗, meaning its vector direction is always that of the change in momentum.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q13',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Vectors: 2D Component Addition & Net Displacement',
    questionText: 'A person walked 10 m in a direction 53° North of East, 10 m North, and finally 20 m in a direction 37° North of West. The magnitude of the person\'s displacement is (sin 53° = cos 37° = 0.8, cos 53° = sin 37° = 0.6)',
    options: [
      '40.0 m',
      '20.0 m',
      '30.0 m',
      '31.6 m'
    ],
    correctOptionIndex: 3,
    explanation: 'Break down each displacement into East-West (+x) and North-South (+y) components:\n1. d⃗₁ (10 m, 53° N of E): x₁ = 10 cos 53° = 6.0 m; y₁ = 10 sin 53° = 8.0 m.\n2. d⃗₂ (10 m North): x₂ = 0.0 m; y₂ = 10.0 m.\n3. d⃗₃ (20 m, 37° N of W): x₃ = -20 cos 37° = -16.0 m; y₃ = 20 sin 37° = 12.0 m.\n\nSum of components:\nR_x = 6.0 + 0 - 16.0 = -10.0 m\nR_y = 8.0 + 10.0 + 12.0 = 30.0 m\n\nResultant magnitude:\nR = √[(-10.0)² + (30.0)²] = √(100 + 900) = √1000 ≈ 31.62 m ≈ 31.6 m.',
    hint: 'R_x = 6 - 16 = -10 m, R_y = 8 + 10 + 12 = 30 m; R = √(10² + 30²) = √1000 ≈ 31.6 m.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q14',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Vectors: Collinear Vectors',
    questionText: 'Which of the following pair of vectors is collinear?',
    options: [
      'E⃗ = -î + ĵ and F⃗ = 3î - 3ĵ',
      'G⃗ = 2î + 3ĵ and F⃗ = 3î + 2ĵ',
      'C⃗ = î + ĵ and D⃗ = î - ĵ',
      'A⃗ = 2î + 3ĵ and B⃗ = -4î + 6ĵ'
    ],
    correctOptionIndex: 0,
    explanation: 'Collinear vectors lie along the same or parallel lines of action, meaning one is a scalar multiple of the other (F⃗ = k · E⃗). In option A, F⃗ = 3î - 3ĵ = -3(-î + ĵ) = -3 E⃗, which proves that E⃗ and F⃗ are anti-parallel and strictly collinear.',
    hint: 'Two vectors are collinear if they are scalar multiples of each other (F⃗ = -3 E⃗).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q15',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Kinematics: Vertical Free Fall Motion',
    questionText: 'A ball is thrown vertically upward with 12 m/s from the ground. Its speed when the ball is 4.0 m above the ground is (take g = 10 m/s²)',
    options: [
      '15 m/s',
      '12 m/s',
      '8 m/s',
      '10 m/s'
    ],
    correctOptionIndex: 2,
    explanation: 'Using the kinematic equation v² = u² - 2gh:\n• u = 12 m/s\n• g = 10 m/s²\n• h = 4.0 m\n\nv² = (12)² - 2(10)(4.0) = 144 - 80 = 64\nv = √64 = 8 m/s.',
    hint: 'v² = u² - 2gh = 144 - 80 = 64 => v = 8 m/s.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q16',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Projectile Motion: Relationship between Maximum Height and Range',
    questionText: 'An object is projected at angle θ from the horizontal with initial velocity v₀. Which one of the following expressions represents the relationship between maximum height, h_max, and range of the projectile, R?',
    options: [
      'R = (2 h_max) / tan θ',
      'R = (4 h_max) / tan θ',
      'R = h_max (tan θ / 2)',
      'R = 4 h_max tan θ'
    ],
    correctOptionIndex: 1,
    explanation: '• Maximum height: h_max = (v₀² sin²θ) / (2g)\n• Horizontal range: R = (v₀² sin 2θ) / g = (2 v₀² sin θ cos θ) / g\n\nDividing h_max by R:\nh_max / R = [(v₀² sin²θ) / (2g)] / [(2 v₀² sin θ cos θ) / g] = (sin θ) / (4 cos θ) = (tan θ) / 4\n\nRearranging for R:\nR = (4 h_max) / tan θ.',
    hint: 'Divide h_max by R to get h_max / R = (tan θ) / 4, which yields R = (4 h_max) / tan θ.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q17',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Dynamics: Coefficient of Kinetic Friction',
    questionText: 'A 0.5 kg block moving with an initial speed of 5.0 m/s slides 2.5 m on a rough horizontal surface before coming to rest. The coefficient of kinetic friction is (g = 10 m/s²)',
    options: [
      '0.1',
      '0.4',
      '0.5',
      '0.3'
    ],
    correctOptionIndex: 2,
    explanation: 'Step 1: Calculate deceleration using v² = u² - 2as:\n0 = (5.0)² - 2a(2.5) => 5.0 a = 25 => a = 5.0 m/s².\n\nStep 2: Relate deceleration to friction (f_k = μ_k mg = ma):\nμ_k · g = a => μ_k · 10 = 5.0 => μ_k = 0.5.',
    hint: 'a = u² / (2s) = 25 / 5 = 5 m/s²; μ_k = a / g = 5 / 10 = 0.5.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q18',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Work & Energy: Speed in 2D Projectile Trajectory',
    questionText: 'A 0.2 kg ball is kicked from the ground at 16 m/s in a direction making an angle θ above the horizontal. Neglecting air resistance, the magnitude of velocity of the ball when it is 3.0 m from the ground is (g = 10 m/s²)',
    options: [
      '14 m/s',
      '16 m/s',
      '7 m/s',
      '2 m/s'
    ],
    correctOptionIndex: 0,
    explanation: 'By the law of conservation of mechanical energy:\n½ m v₀² = ½ m v² + mgh\nv² = v₀² - 2gh\nv² = (16)² - 2(10)(3.0) = 256 - 60 = 196\nv = √196 = 14 m/s.',
    hint: 'By conservation of energy: v = √(v₀² - 2gh) = √(256 - 60) = 14 m/s.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q19',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Rotational Dynamics: Torque and Angular Acceleration',
    questionText: 'The angular speed of a disk rotating about its axis increases by 2000 rad/s in a time interval of 3.0 s. If the moment of inertia of the disk is 0.6 kg·m², what is the average torque on the disk?',
    options: [
      '6000 Nm',
      '400 Nm',
      '670 Nm',
      '1200 Nm'
    ],
    correctOptionIndex: 1,
    explanation: 'Step 1: Compute angular acceleration (α):\nα = Δω / Δt = 2000 rad/s / 3.0 s = (2000 / 3) rad/s².\n\nStep 2: Calculate torque (τ = I · α):\nτ = 0.6 kg·m² × (2000 / 3 rad/s²) = 0.2 × 2000 = 400 N·m.',
    hint: 'τ = I · (Δω / Δt) = 0.6 × (2000 / 3) = 400 N·m.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q20',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Circular Dynamics: Vertical Circular Motion',
    questionText: 'A small ball of mass m tied to a rope of length l is moving along a vertical circle about a point O (A is top, B is right, C is bottom, D is left). Which one of the following is correct about the force exerted on the ball at these points?',
    options: [
      'At point A, the radial force is in opposite direction to the gravitational force on a ball.',
      'At point B, the radial force is equal to the gravitational force on the ball.',
      'At point C, the radial force and the tension on the rope are in opposite direction.',
      'At point D, the radial force is equal to the tension on the rope.'
    ],
    correctOptionIndex: 3,
    explanation: 'At the horizontal positions of a vertical circular trajectory (points B and D), the force of gravity (mg) acts strictly vertically downward (tangential to the path). The only radial force directed horizontally toward the rotational center O is the string tension T. Thus, at point D, F_radial = T.',
    hint: 'At horizontal points (B and D), gravity is tangential, so centripetal/radial force comes solely from tension.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
