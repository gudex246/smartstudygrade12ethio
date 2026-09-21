import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2014_EC_PART3: Question[] = [
  {
    id: 'phy-2014-q31',
    subject: 'Physics',
    topic: 'Vectors & Statics: Resultant of Coplanar Forces',
    questionText: 'Three forces, each having equal magnitudes of 10 N, are applied to an object on a horizontal surface. A force F1 makes an angle of 30° above positive x-axis, F2 makes 30° above the negative x-axis, and the third force F3 is directed along the positive y-axis. The magnitude and direction of their resultant force are, respectively:',
    options: [
      '20 N in the positive y-axis',
      '20 N 45° above positive x-axis',
      '20 N in the negative y-axis',
      '14.1 N in the positive y-axis'
    ],
    correctOptionIndex: 0,
    explanation: 'Resolve each 10 N force into orthogonal components:\n1. F1: F1ₓ = +10 cos 30° = +5√3 N,  F1ᵧ = +10 sin 30° = +5.0 N\n2. F2: F2ₓ = -10 cos 30° = -5√3 N,  F2ᵧ = +10 sin 30° = +5.0 N\n3. F3: F3ₓ = 0 N,  F3ᵧ = +10.0 N\n\nSum the components:\n• Rₓ = F1ₓ + F2ₓ + F3ₓ = 5√3 - 5√3 + 0 = 0 N\n• Rᵧ = F1ᵧ + F2ᵧ + F3ᵧ = 5.0 + 5.0 + 10.0 = 20.0 N\n\nResultant force vector:\nR = √(Rₓ² + Rᵧ²) = √(0² + 20²) = 20 N, pointing strictly along the positive y-axis.',
    hint: 'Horizontal components cancel out (+5√3 - 5√3 = 0). Vertical components add: 5 + 5 + 10 = 20 N along the +y axis.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q32',
    subject: 'Physics',
    topic: 'Kinematics: 1D Vertical Motion under Gravity',
    questionText: 'A student throws a ball vertically upward with a speed of 20 m/s. Taking g = 10 m/s², the maximum height reached by the ball and its velocity 3.0 s after it was thrown are, respectively:',
    options: [
      '20 m and 10 m/s downward',
      '20 m and 30 m/s upward',
      '15 m and 10 m/s downward',
      '105 m and 50 m/s upward'
    ],
    correctOptionIndex: 0,
    explanation: 'Given:\n• Initial upward velocity (v₀) = +20 m/s\n• Gravitational acceleration (g) = 10 m/s²\n\nStep 1: Calculate maximum height (H_max):\nAt maximum height, v = 0:\nv² = v₀² - 2g · H_max\n0 = (20)² - 2(10) · H_max\n20 · H_max = 400\nH_max = 20 m\n\nStep 2: Calculate velocity at t = 3.0 s:\nv(t) = v₀ - g · t\nv(3.0) = 20 - (10 × 3.0) = 20 - 30 = -10 m/s\nThe negative sign indicates a downward velocity of 10 m/s.',
    hint: 'H_max = v₀² / (2g) = 400 / 20 = 20 m. Velocity v = v₀ - gt = 20 - 30 = -10 m/s (downward).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q33',
    subject: 'Physics',
    topic: 'Dynamics: Static, Limiting and Kinetic Friction',
    questionText: 'Which one of the following statements describes the difference between different types of friction?',
    options: [
      'For an object at rest on a horizontal surface, static friction increases with the increase of the applied force and reaches a maximum value just before sliding occurs.',
      'Limiting friction is the minimum value of static friction that keeps an object stationary.',
      'If there is a constant force applied to a stationary object on a horizontal surface, the static friction becomes equal to the limiting friction.',
      'Limiting and kinetic frictions exist at the same time between two surfaces sliding over each other.'
    ],
    correctOptionIndex: 0,
    explanation: '• Static Friction (f_s): Is a self-adjusting reaction force that opposes relative impending motion. It starts at zero and increases in direct proportion to the applied horizontal force (f_s = F_applied) to maintain the body at rest.\n• Limiting Friction (f_s,max = μ_s · N): Represents the maximum threshold value of static friction just before slipping begins.\n• Kinetic Friction (f_k = μ_k · N): Acts once sliding motion commences, and its value is constant and slightly less than limiting friction.\nTherefore, option A accurately describes the self-adjusting nature of static friction.',
    hint: 'Static friction is self-adjusting, increasing with applied force until it reaches the maximum threshold (limiting friction).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q34',
    subject: 'Physics',
    topic: 'Newton\'s Laws: Apparent Weight in an Accelerating Elevator',
    questionText: 'The apparent weight of a 60 kg student standing inside a lift is:',
    options: [
      '480 N when the lift accelerates downward with 2 m/s².',
      '600 N when the lift accelerates with acceleration equal to gravitational acceleration.',
      '600 N when the lift accelerates upward with 2 m/s².',
      '720 N when the lift is at rest.'
    ],
    correctOptionIndex: 0,
    explanation: 'Apparent weight is the normal contact force (N) exerted by the floor/scale on the person:\n1. At rest or constant velocity (a = 0): N = mg = 60 × 10 = 600 N.\n2. Accelerating upward (a = 2 m/s²): N = m(g + a) = 60(10 + 2) = 720 N.\n3. Accelerating downward (a = 2 m/s²): N = m(g - a) = 60(10 - 2) = 60 × 8 = 480 N.\n4. Free fall downward (a = g): N = m(g - g) = 0 N (apparent weightlessness).\n\nTherefore, the student\'s apparent weight is 480 N when accelerating downward at 2 m/s².',
    hint: 'When accelerating downward, apparent weight is N = m(g - a) = 60(10 - 2) = 480 N.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q35',
    subject: 'Physics',
    topic: 'Energy Resources & Environmental Physics',
    questionText: 'Which of the following statements correctly describes the use of energy resources?',
    options: [
      'Solar energy produced by photovoltaic cells is free of greenhouse gases and has a very low running cost.',
      'Hydroelectric power generates a large amount of energy using small dam with little environmental impact and cheap initial cost of construction.',
      'Geothermal energy is the most accessible, environmental friendly and inexpensive source of energy.',
      'Wind energy, which is due to the pressure difference in space as the result of uneven sun heat, is a consistent and economical source of energy.'
    ],
    correctOptionIndex: 0,
    explanation: '• Photovoltaic (PV) solar panels directly convert solar radiation into electricity with zero greenhouse gas or pollutant emissions during operation, and require minimal operating/maintenance expenditure after installation.\n• Hydroelectric power projects involve substantial capital construction costs and can disrupt local river ecosystems.\n• Geothermal energy is geographically confined to tectonic fault zones and has high drilling/exploration costs.\n• Wind energy is intermittent and weather-dependent rather than strictly constant.',
    hint: 'Photovoltaic solar generation operates with zero direct greenhouse emissions and has very low operational maintenance costs.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q36',
    subject: 'Physics',
    topic: 'Simple Machines: Mechanical Advantage of an Inclined Plane',
    questionText: 'A student wants to raise an object of mass m through a height h using an inclined plane that makes an angle θ above the horizontal. If l is the length of the inclined surface, which one of the following is correct about the actual mechanical advantage (AMA) and ideal mechanical advantage (IMA) of the inclined plane?',
    options: [
      'Neglecting friction, its AMA is 1/sin θ.',
      'Neglecting friction, its IMA is 1/cos θ.',
      'In the presence of friction, its AMA is 1/sin θ.',
      'In the absence of friction, AMA is sin θ and its IMA is cos θ.'
    ],
    correctOptionIndex: 0,
    explanation: 'For an inclined plane with ramp length l, height h, and inclination angle θ:\n• Ideal Mechanical Advantage (IMA):\n  IMA = Effort Distance / Load Distance = l / h = l / (l sin θ) = 1 / sin θ\n• Actual Mechanical Advantage (AMA):\n  AMA = Load Force / Effort Force = F_load / F_effort\n• Under ideal, frictionless conditions (efficiency η = 100%):\n  AMA = IMA = 1 / sin θ\n\nTherefore, in the absence of friction, AMA equals 1 / sin θ.',
    hint: 'IMA = l / h = 1 / sin θ. Neglecting friction, AMA = IMA = 1 / sin θ.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q37',
    subject: 'Physics',
    topic: 'Fluid Mechanics: Archimedes\' Principle & Law of Flotation',
    questionText: 'According to the law of floatation, a floating object must displace a volume of fluid:',
    options: [
      'whose weight is equal to its own total weight.',
      'equal to the weight of undisplaced fluid.',
      'equal to its apparent weight.',
      'less than its own weight.'
    ],
    correctOptionIndex: 0,
    explanation: 'The Law of Flotation states that a body floating freely in static equilibrium displaces a volume of liquid whose weight is exactly equal to the total weight of the floating body:\nWeight of floating object (W) = Upward buoyant force (F_B) = Weight of displaced fluid\n\nBecause the buoyant force exactly balances the object\'s full weight, the apparent weight of a freely floating body is zero.',
    hint: 'A floating body displaces a volume of fluid whose weight equals the total weight of the body.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q38',
    subject: 'Physics',
    topic: 'Thermal Physics: Anomalous Expansion of Water',
    questionText: 'Which one of the following statements describes the unusual behavior of expansion of water?',
    options: [
      'The density of water at 0 °C is less than its density at 4 °C, since water molecules move further apart and form an open hydrogen-bonded structure.',
      'As the temperature of water increases above 4 °C, its density increases since water molecules move further apart.',
      'At 0 °C, water has larger density and smaller volume than its density and volume at 4 °C.',
      'As the temperature of water increases from 0 °C to 4 °C, its density decreases continuously.'
    ],
    correctOptionIndex: 0,
    explanation: 'Water exhibits an anomalous expansion behavior between 0 °C and 4 °C:\n• At 0 °C, ice and ice-like clusters have a spacious, open three-dimensional hexagonal lattice held by hydrogen bonds, giving it a lower density (0.917 g/cm³).\n• When warmed from 0 °C to 4 °C, these hydrogen bonds partially break, allowing water molecules to pack more tightly together, causing water to contract and reach its maximum density (1.000 g/cm³ or 1000 kg/m³) at 4 °C.\n• Above 4 °C, thermal agitation dominates and water expands normally with increasing temperature.',
    hint: 'Water has maximum density at 4 °C; at 0 °C its density is lower due to open hydrogen-bonded structures.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q39',
    subject: 'Physics',
    topic: 'Calorimetry: Thermal Equilibrium & Heat Transfer',
    questionText: 'A 40 g sample of water at 50 °C is poured into a well-insulated 30 g copper calorimeter at 20 °C. Taking specific heat capacity of water c_w = 4200 J/(kg·K) and copper c_cu = 420 J/(kg·K), the equilibrium temperature of the mixture is:',
    options: [
      '47.9 °C',
      '52.4 °C',
      '35.0 °C',
      '30.0 °C'
    ],
    correctOptionIndex: 0,
    explanation: 'By the law of conservation of thermal energy in an isolated system:\nHeat lost by warm water = Heat gained by copper calorimeter\nm_w · c_w · (T_w - T_eq) = m_cu · c_cu · (T_eq - T_cu)\n\nGiven:\n• m_w = 40 g,  c_w = 4.2 J/(g·°C),  T_w = 50 °C\n• m_cu = 30 g,  c_cu = 0.42 J/(g·°C),  T_cu = 20 °C\n\nCalculate heat capacities:\n• Water: C_w = 40 × 4.2 = 168 J/°C\n• Copper: C_cu = 30 × 0.42 = 12.6 J/°C\n\nSet up equation:\n168 · (50 - T_eq) = 12.6 · (T_eq - 20)\n8400 - 168 T_eq = 12.6 T_eq - 252\n8400 + 252 = 180.6 T_eq\n8652 = 180.6 T_eq\nT_eq = 8652 / 180.6 ≈ 47.91 °C ≈ 47.9 °C',
    hint: 'Heat lost by water = Heat gained by calorimeter. 168(50 - T) = 12.6(T - 20) => T = 47.9 °C.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q40',
    subject: 'Physics',
    topic: 'Electromagnetic Waves: Frequency, Wavelength & Speed',
    questionText: 'An FM radio signal is transmitted from a radio station at a frequency of 1.5 × 10⁸ Hz. If the wavelength of the radio wave is 2.00 m, the speed of the FM signal is:',
    options: [
      '3.0 × 10⁸ m/s',
      '6.00 × 10⁸ m/s',
      '1.33 × 10⁸ m/s',
      '0.75 × 10⁸ m/s'
    ],
    correctOptionIndex: 0,
    explanation: 'The fundamental wave speed relation is:\nv = f · λ\n\nGiven:\n• Frequency (f) = 1.5 × 10⁸ Hz = 1.5 × 10⁸ s⁻¹\n• Wavelength (λ) = 2.00 m\n\nCalculate wave speed:\nv = (1.5 × 10⁸ s⁻¹) × (2.00 m) = 3.0 × 10⁸ m/s\n(This equals the standard speed of electromagnetic radiation in air/vacuum, c = 3.0 × 10⁸ m/s).',
    hint: 'Use the wave equation v = f · λ = (1.5 × 10⁸ Hz) × (2.00 m) = 3.0 × 10⁸ m/s.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q41',
    subject: 'Physics',
    topic: 'Work & Energy: Conservation of Mechanical vs Total Energy',
    questionText: 'Which one of the following statements is correct about transformation of mechanical energy into other forms and the law of conservation of total energy?',
    options: [
      'Due to dissipative force, the mechanical energy of a wooden block sliding on a rough horizontal surface is not conserved.',
      'Mechanical energy of a wooden block sliding on a rough horizontal surface is conserved.',
      'Neglecting air resistance, an object moving vertically downward gains potential energy and loses an equal amount of kinetic energy.',
      'Neglecting air resistance, an object moving vertically upward gains kinetic energy and loses an equal amount of gravitational potential energy.'
    ],
    correctOptionIndex: 0,
    explanation: '• While total energy in any isolated system is always conserved (ΔE_total = 0), mechanical energy (E_mech = KE + PE) is only conserved when all forces performing work are conservative.\n• Friction is a non-conservative (dissipative) force. As a block slides along a rough horizontal surface, friction does negative mechanical work, converting mechanical energy irreversibly into thermal internal energy (heat) and sound. Thus, mechanical energy is NOT conserved.',
    hint: 'Friction is a dissipative force that converts mechanical energy into heat, so mechanical energy alone is not conserved.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q42',
    subject: 'Physics',
    topic: 'Rotational Kinematics: Angular Acceleration & Deceleration',
    questionText: 'A wheel rotating at an angular speed of 20 rev/s is brought to rest after 40 rev under a constant angular acceleration. The angular acceleration of a point on the wheel is:',
    options: [
      '-5 rev/s²',
      '5 rev/s²',
      '-0.5 rev/s²',
      '0.25 rev/s²'
    ],
    correctOptionIndex: 0,
    explanation: 'Given:\n• Initial angular velocity (ω_i) = 20 rev/s\n• Final angular velocity (ω_f) = 0 rev/s\n• Angular displacement (θ) = 40 rev\n\nUse the rotational kinematic equation:\nω_f² = ω_i² + 2 · α · θ\n0² = (20)² + 2 · α · (40)\n0 = 400 + 80 · α\n80 · α = -400\nα = -400 / 80 = -5 rev/s²\n\nThe negative sign indicates constant angular deceleration.',
    hint: 'Use ω_f² = ω_i² + 2αθ => 0 = 400 + 80α => α = -5 rev/s².',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q43',
    subject: 'Physics',
    topic: 'Rotational Dynamics: Parallel Axis Theorem',
    questionText: 'The parallel axis theorem states that if I_cm is the moment of inertia of a body of mass M about an axis passing through its center of mass (cm), its moment of inertia about any axis:',
    options: [
      'parallel to and at a distance d from the axis through the cm is I = I_cm + Md².',
      'perpendicular to and at a distance d from the axis through the cm is I = I_cm + (1/2)Md².',
      'perpendicular to and at a distance d from the axis through the cm is I = I_cm + Md².',
      'parallel to and at a distance d from the axis through the cm is I = I_cm + (1/2)Md².'
    ],
    correctOptionIndex: 0,
    explanation: 'The Parallel Axis Theorem (Steiner\'s Theorem) states that the moment of inertia (I) of a rigid body about any axis that is parallel to an axis passing through its center of mass is equal to:\nI = I_cm + M · d²\nwhere:\n• I_cm = moment of inertia about the parallel axis passing through the center of mass\n• M = total mass of the rigid body\n• d = perpendicular distance between the two parallel axes.',
    hint: 'The parallel axis theorem requires the axes to be parallel and gives I = I_cm + Md².',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q44',
    subject: 'Physics',
    topic: 'Statics & Rotational Equilibrium: Net Torque Comparison',
    questionText: 'Three forces of equal magnitude F are exerted at the center O of a uniform beam of length L and negligible mass. One force acts at 30° to the left, the second at 30° to the right, and the third acts downward. If τ_A, τ_B, and τ_O are net torques on the beam about an axis passing through point A (left end, distance L/2 from O), point B (intermediate point, distance r_B < L/2 from O), and point O (center), respectively, which one of the following expressions is correct?',
    options: [
      'τ_A > τ_B > τ_O',
      'τ_A = τ_B = τ_O = 0',
      'τ_A < τ_B < τ_O',
      'τ_O = 0, τ_A < τ_B'
    ],
    correctOptionIndex: 0,
    explanation: 'Torque is defined by τ = F_net,perp · r, where r is the perpendicular distance (lever arm) from the pivot axis to the point where the forces are applied (point O).\n\nSince all three forces act at the exact same location (the center point O):\n1. About axis at O: Lever arm r_O = 0  =>  τ_O = 0.\n2. About axis at B: Lever arm is r_B (distance from B to O) > 0  =>  τ_B = F_net,perp · r_B.\n3. About axis at A: Lever arm is r_A = L/2 (distance from A to O) > r_B  =>  τ_A = F_net,perp · (L/2).\n\nBecause r_A > r_B > r_O = 0, the magnitudes of the net torques satisfy: τ_A > τ_B > τ_O.',
    hint: 'All forces act at point O. Torque is directly proportional to distance from O: τ_A (distance L/2) > τ_B > τ_O (distance 0).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q45',
    subject: 'Physics',
    topic: 'Elasticity & Material Properties: Tensile Stress',
    questionText: 'Tensile stress is defined as the:',
    options: [
      'perpendicular component of the applied force divided by the cross sectional area of an object.',
      'parallel component of the applied force divided by the cross sectional area of an object.',
      'ratio of change in length of an object to the original length.',
      'ratio of original length to the change in length of the object.'
    ],
    correctOptionIndex: 0,
    explanation: '• Tensile Stress (σ): The restoring or deforming force applied perpendicular (normal) to the cross-sectional area of an object, divided by that cross-sectional area: σ = F_perp / A. (Measured in Pascals, Pa or N/m²).\n• Shear Stress: The force component applied parallel (tangential) to the surface divided by area: τ = F_parallel / A.\n• Tensile Strain: The fractional change in length (dimensionless ratio): ε = ΔL / L₀.',
    hint: 'Tensile stress is the normal force per unit cross-sectional area: σ = F_perp / A.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  }
];
