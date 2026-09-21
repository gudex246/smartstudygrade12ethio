import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2017_EC_PART3: Question[] = [
  {
    id: 'phy-2017-q41',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Work, Energy & Power: Power Calculation in Lifting',
    questionText: 'A crane at port is used to lift a 10,000 kg object to a height of 20 m. If the power developed by the crane is 50,000 W, how long does it take to lift the object? (Acceleration due to gravity, g = 10 m/s²)',
    options: [
      '400 s',
      '40 s',
      '4 s',
      '2 s'
    ],
    correctOptionIndex: 1,
    explanation: 'Step 1: Compute work done (gravitational potential energy gained):\nW = m · g · h = 10,000 kg × 10 m/s² × 20 m = 2,000,000 J (2.0 × 10⁶ J).\n\nStep 2: Calculate time from power formula (P = W / t):\nt = W / P = 2,000,000 J / 50,000 W = 40 seconds.',
    hint: 't = (m · g · h) / P = (10,000 × 10 × 20) / 50,000 = 40 s.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q42',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Center of Mass: 2D Multi-Particle Systems',
    questionText: 'A system of four masses m₁ = 4 kg, m₂ = 4 kg, m₃ = 5 kg and m₄ = 3 kg are located in the xy-plane at the coordinates of (0, 0), (30 cm, 0), (-40 cm, 0) and (0, 20 cm), respectively. What is the coordinate of the center of mass of the system?',
    options: [
      '(20 cm, 3.75 cm)',
      '(-6.7 cm, 5 cm)',
      '(-5 cm, 10 cm)',
      '(-5 cm, 3.75 cm)'
    ],
    correctOptionIndex: 3,
    explanation: 'Total mass M = 4 + 4 + 5 + 3 = 16 kg.\n\nCalculate x-coordinate of center of mass:\nx_cm = [m₁x₁ + m₂x₂ + m₃x₃ + m₄x₄] / M\nx_cm = [4(0) + 4(30) + 5(-40) + 3(0)] / 16 = [0 + 120 - 200 + 0] / 16 = -80 / 16 = -5 cm.\n\nCalculate y-coordinate of center of mass:\ny_cm = [m₁y₁ + m₂y₂ + m₃y₃ + m₄y₄] / M\ny_cm = [4(0) + 4(0) + 5(0) + 3(20)] / 16 = 60 / 16 = 3.75 cm.\n\nTherefore, (x_cm, y_cm) = (-5 cm, 3.75 cm).',
    hint: 'x_cm = (120 - 200)/16 = -5 cm, y_cm = 60/16 = 3.75 cm.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q43',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Applied Physics & Engineering Branches',
    questionText: 'Which of the following concepts of physics are the primary focus points in mechanical engineering?',
    options: [
      'Dynamics, Thermodynamics, Force, and Stress',
      'Geometric optics, Electrostatics, Thermodynamics, and Stress',
      'Molecular physics, Dynamics, Nuclear physics, and Force',
      'Nuclear physics, Geometric optics, Dynamics, and Force'
    ],
    correctOptionIndex: 0,
    explanation: 'Mechanical engineering is primarily grounded in classical solid mechanics, kinematics, dynamics, thermodynamics, fluid dynamics, and mechanics of materials (forces, stress, strain, and heat transfer).',
    hint: 'Mechanical systems analyze motion (dynamics), loads (force/stress), and heat engines (thermodynamics).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q44',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Applications of Physics in Defense & Security',
    questionText: 'Which one of the following defense technologies is correctly matched with its working principle?',
    options: [
      'A radar is a rocket propelled weapon designed to deliver an explosive weapon with a great accuracy at high speed.',
      'Missiles radiate electromagnetic signal and examine the echo received to identify the location of the target.',
      'Drones radiate electromagnetic signal and examine the echo received to identify the location of the target.',
      'Infrared device uses heat emission to identify objects that cannot be detected using available light sources.'
    ],
    correctOptionIndex: 3,
    explanation: 'Thermal imaging and infrared surveillance equipment detect electromagnetic radiation in the infrared band (heat emitted spontaneously by objects, vehicles, and human bodies), enabling detection in total darkness or through smoke without requiring visible ambient illumination.',
    hint: 'Infrared sensors passively detect blackbody thermal radiation emitted by warm objects.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q45',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Thermodynamics: Latent Heat & Phase Transitions',
    questionText: 'Which one of the following phenomena occurs during change of phases of a matter? During a phase change from',
    options: [
      'solid to liquid, heat energy is released from a substance while its temperature remains constant.',
      'gas to liquid, heat energy is absorbed by a substance while its temperature remains constant.',
      'liquid to gas, heat energy is absorbed by a substance while its temperature remains constant.',
      'liquid to solid, heat energy is released from a substance while its temperature changes uniformly.'
    ],
    correctOptionIndex: 2,
    explanation: 'During the liquid-to-gas phase transition (boiling/vaporization), latent heat of vaporization is absorbed from the surroundings to break intermolecular attractive bonds, while the temperature of the substance remains constant at the boiling point.',
    hint: 'Vaporization requires thermal energy absorption at constant temperature.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q46',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Kinematics: 2D Projectile Motion',
    questionText: 'Assume that a ball is thrown horizontally from a building of height h above the ground with initial speed v₀. Which one of the following statements is correct about the motion of the object?',
    options: [
      'Its vertical component velocity remains constant.',
      'Its horizontal component acceleration is zero.',
      'Its horizontal component velocity uniformly increases.',
      'Its vertical component acceleration is zero.'
    ],
    correctOptionIndex: 1,
    explanation: 'In horizontal projectile motion (neglecting air resistance), no horizontal forces act on the object after release. Therefore, its horizontal acceleration is zero (a_x = 0), and its horizontal velocity component remains constant (v_x = v₀) throughout the flight.',
    hint: 'Gravity acts only vertically (a_y = g), leaving horizontal acceleration a_x = 0.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q47',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Projectile Motion: Range and Maximum Height Relationship',
    questionText: 'A projectile is thrown from level ground with an initial velocity v₀ making an angle of θ above the horizontal. If the maximum height reached by the projectile is H, what is the horizontal range of the projectile in terms of H and θ?',
    options: [
      '(H tan θ) / 4',
      'H / tan θ',
      'H / (4 tan θ)',
      '(4 H) / tan θ'
    ],
    correctOptionIndex: 3,
    explanation: '• Maximum height: H = (v₀² sin²θ) / (2g) => v₀² / g = 2H / sin²θ.\n• Horizontal range: R = (v₀² sin 2θ) / g = (v₀² / g) (2 sin θ cos θ).\n\nSubstitute (v₀² / g):\nR = (2H / sin²θ) · (2 sin θ cos θ) = (4H cos θ) / sin θ = (4H) / tan θ.',
    hint: 'R = 4H / tan θ derived from H = (v₀² sin²θ)/(2g) and R = (v₀² sin 2θ)/g.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q48',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Rotational Dynamics: Moment of Inertia of Point Masses',
    questionText: 'Four point masses m₁ = 4 kg, m₂ = 1 kg, m₃ = 3 kg and m₄ = 5 kg are attached to a massless rod located on the x-axis at positions x₁ = 5 m, x₂ = 2 m, x₃ = -1 m, and x₄ = -4 m, respectively. How much is the moment of inertia of the system about the y-axis?',
    options: [
      '184 kg·m²',
      '187 kg·m²',
      '84 kg·m²',
      '190 kg·m²'
    ],
    correctOptionIndex: 1,
    explanation: 'The moment of inertia of discrete point masses rotating about the y-axis is given by:\nI_y = Σ (m_i · x_i²)\nI_y = m₁ x₁² + m₂ x₂² + m₃ x₃² + m₄ x₄²\nI_y = 4(5)² + 1(2)² + 3(-1)² + 5(-4)²\nI_y = 4(25) + 1(4) + 3(1) + 5(16)\nI_y = 100 + 4 + 3 + 80 = 187 kg·m².',
    hint: 'I = 4(25) + 1(4) + 3(1) + 5(16) = 100 + 4 + 3 + 80 = 187 kg·m².',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q49',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Fluid Dynamics: Definition of Volumetric Flow Rate',
    questionText: 'The flow rate of a fluid is defined as',
    options: [
      'the speed with which the fluid flowing through a pipe.',
      'the volume of the fluid crossing an area per unit time taken.',
      'the rate of change of the speed with which fluid flowing through a pipe.',
      'the mass of the fluid crossing an area per unit time taken.'
    ],
    correctOptionIndex: 1,
    explanation: 'The volumetric flow rate (Q) of a fluid is defined as the volume of fluid (V) passing through a given cross-sectional area per unit of time (t): Q = V / t = A · v, typically measured in m³/s (or L/s).',
    hint: 'Flow rate measures the volume of fluid moving past a cross section per second.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q50',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'States of Matter: Molecular Structure of Solids',
    questionText: 'At normal condition, solids are almost incompressible compared to liquids and gases. The reason is that',
    options: [
      'their atoms are relatively fixed distance apart and held together.',
      'their atoms are free to slide about and interact with neighbors.',
      'there is much space and little force between atoms.',
      'their atoms vibrate and free to move.'
    ],
    correctOptionIndex: 0,
    explanation: 'In the solid state, atoms or molecules are tightly bound in fixed, orderly equilibrium lattice positions by strong interatomic forces with negligible free intermolecular volume, preventing significant compression under normal pressures.',
    hint: 'Fixed interatomic distances and rigid structural bonding resist compression.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q51',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Magnetism: Magnetic Dipoles and Inseparability of Poles',
    questionText: 'Which of the following statements is correct about magnets?',
    options: [
      'Like electric charges, magnetic poles exist in a single isolated form.',
      'The north pole of one magnet repels the south pole of another magnet.',
      'If you cut a bar magnet into two, each piece has both north and south poles.',
      'Unlike permanent magnets, electromagnets are magnets without poles.'
    ],
    correctOptionIndex: 2,
    explanation: 'Magnetic monopoles do not exist in classical physics; magnetic dipoles always occur in inseparable pairs. When a bar magnet is cut in half, magnetic domain alignment ensures each newly created piece possesses its own North and South poles.',
    hint: 'Cutting a magnet produces two smaller complete magnets, each with North and South poles.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q52',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Rotational Kinematics: Angular vs. Tangential Speed',
    questionText: 'A wheel of radius r = 50 cm rotates about a fixed perpendicular axis passing through its center. If the angular speed is ω = 200 rad/s, how much is the tangential speed of a point on the rim of the wheel?',
    options: [
      '800 m/s',
      '10,000 m/s',
      '100 m/s',
      '80,000 m/s'
    ],
    correctOptionIndex: 2,
    explanation: 'The relationship between linear (tangential) speed v and angular speed ω is:\nv = r · ω\nGiven r = 50 cm = 0.50 m and ω = 200 rad/s:\nv = 0.50 m × 200 rad/s = 100 m/s.',
    hint: 'v = r · ω = 0.50 m × 200 rad/s = 100 m/s.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q53',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: "Gravitation: Newton's Universal Law of Gravitation",
    questionText: 'Suppose your mass is measured to be 50 kg. If your friend having a mass of 55 kg is at a distance 2 m apart from you, what is the magnitude of gravitational force between you and your friend? (G = 6.67 × 10⁻¹¹ N·m²/kg²)',
    options: [
      '9.2 × 10⁻¹¹ N',
      '9.2 × 10⁻⁸ N',
      '4.6 × 10⁻¹¹ N',
      '4.6 × 10⁻⁸ N'
    ],
    correctOptionIndex: 3,
    explanation: 'By Newton\'s law of universal gravitation:\nF = G (m₁ · m₂) / r²\nF = (6.67 × 10⁻¹¹ N·m²/kg² × 50 kg × 55 kg) / (2 m)²\nF = (6.67 × 10⁻¹¹ × 2750) / 4\nF = (1.83425 × 10⁻⁷) / 4 = 4.5856 × 10⁻⁸ N ≈ 4.6 × 10⁻⁸ N.',
    hint: 'F = (6.67×10⁻¹¹ × 50 × 55) / 4 = 4.59 × 10⁻⁸ N.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q54',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: "Fluid Mechanics: Pascal's Principle & Hydraulic Lift",
    questionText: 'A 10 N force is applied to the smaller circular piston of a hydraulic lift of radius 0.1 m to lift a 2500 N load placed on the larger piston. What is the area of the larger piston? (Take π = 3.14)',
    options: [
      '0.25 m²',
      '2.50 m²',
      '7.85 m²',
      '3.14 m²'
    ],
    correctOptionIndex: 2,
    explanation: 'By Pascal\'s principle, pressure is transmitted equally throughout an enclosed fluid:\nP₁ = P₂ => F₁ / A₁ = F₂ / A₂ => A₂ = A₁ · (F₂ / F₁)\n\nCalculate area of smaller piston:\nA₁ = π · r₁² = 3.14 × (0.1 m)² = 3.14 × 0.01 m² = 0.0314 m².\n\nCalculate area of larger piston:\nA₂ = 0.0314 m² × (2500 N / 10 N) = 0.0314 × 250 = 7.85 m².',
    hint: 'A₂ = A₁ × (F₂ / F₁) = [3.14 × (0.1)²] × (2500 / 10) = 7.85 m².',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q55',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Electromagnetism: Magnetic Field Geometry Around a Conductor',
    questionText: 'The magnetic field created by a long straight current carrying wire',
    options: [
      'is directly proportional to the distance from the wire.',
      'is inversely proportional to the current in the wire.',
      'is directed in the same direction as the current.',
      'forms circular pattern around the wire.'
    ],
    correctOptionIndex: 3,
    explanation: 'According to Ampere\'s law and the Right-Hand Rule, magnetic field lines surrounding a straight current-carrying conductor form concentric circular closed loops in planes perpendicular to the wire.',
    hint: 'Right-Hand Rule shows concentric circular magnetic field lines looping around the straight conductor.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q56',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Semiconductors: Doping with Group III Impurities',
    questionText: 'What will happen on a pure semiconductor when it is doped by group III element?',
    options: [
      'It becomes N-type semiconductor.',
      'It becomes P-type semiconductor.',
      'It becomes intrinsic semiconductor.',
      'It gets extra free electrons.'
    ],
    correctOptionIndex: 1,
    explanation: 'Group III elements (trivalent elements like Boron, Gallium, and Indium) possess three valence electrons. When doped into a tetravalent semiconductor (like Silicon or Germanium), they create electron deficiencies known as holes (positive charge carriers), forming a P-type semiconductor.',
    hint: 'Trivalent (Group III) dopants produce excess holes, creating a P-type semiconductor.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q57',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Current Electricity: Insulating Properties of Plastics',
    questionText: 'We usually use plastic materials to cover metallic wires that carry electricity to protect living things from danger. Which of the following statement correctly describes the nature of the plastic to use for this purpose?',
    options: [
      'Since it has free electrons, it facilitates the easy flow of electric current in the metallic wires.',
      'Since it has no free electrons, it directs the electrons in the wire to flow in the same direction.',
      'Since every electron in plastic is slightly bound to the parent atom, it becomes poor conductor.',
      'Since every electron in plastic is tightly bound to the parent atom, it becomes poor conductor.'
    ],
    correctOptionIndex: 3,
    explanation: 'Plastics are electrical insulators because their valence electrons are tightly bound in strong covalent molecular bonds with very large forbidden energy band gaps, leaving virtually no free mobile electrons to conduct electric current.',
    hint: 'Insulators have electrons tightly bound to atoms with no free conduction electrons.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q58',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Semiconductors: P-N Junction Diode I-V Characteristics',
    questionText: 'Which one of the following statements is correct about the current-voltage (I-V) characteristics of a typical semiconductor diode?',
    options: [
      'The current due to the minority charge carriers is represented in the forward bias region of the I-V curve.',
      'The current due to the majority charge carriers is represented in the reverse bias region of the I-V curve.',
      'The region of the I-V curve that rises very rapidly after the voltage exceeds the cut-in voltage is the forward bias region.',
      'The region of the I-V curve that increases very rapidly after the bias voltage exceeds the breakdown voltage is in the forward bias region.'
    ],
    correctOptionIndex: 2,
    explanation: 'In a semiconductor p-n diode under forward bias, once the applied forward voltage exceeds the cut-in (knee/threshold) voltage (≈ 0.7 V for silicon, 0.3 V for germanium), the potential barrier is overcome and majority charge carriers cross the junction, causing current to rise steeply.',
    hint: 'Current rises sharply once forward voltage overcomes the barrier/cut-in voltage.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q59',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Electronics: Half-Wave Rectifier Operation',
    questionText: 'Consider a circuit containing a diode and load resistor (R_L) connected to an AC voltage source. If initially, polarity of terminal "a" is positive while "b" is negative, which of the following is correct?',
    options: [
      'During the first half-cycle, the diode is forward biased and voltage is developed across the load resistor.',
      'During the second half-cycle, the diode is reverse biased and no current flow in the load resistor.',
      'During the second half-cycle, the diode is forward biased and current flows in the load resistor.',
      'During the first half-cycle, the diode is reverse biased and voltage is developed across the load resistor.'
    ],
    correctOptionIndex: 0,
    explanation: 'In the half-wave rectifier configuration, during the positive first half-cycle when terminal \'a\' is positive relative to \'b\', the diode is forward-biased (anode positive with respect to cathode), allowing current to conduct through the load resistor R_L and developing a rectified output voltage across it.',
    hint: 'When terminal a is positive, the diode is forward-biased and conducts current through the load.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2017-q60',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: "Electromagnetic Induction: Faraday's Law of Induction",
    questionText: 'A circular coil is located in a uniform magnetic field of magnitude 0.50 T directed perpendicular to the plane of the coil. If the area of the coil changes with uniform rate, in such a way that it increases by 4.0 × 10⁻³ m² in 2 s, what is the magnitude of the induced electromotive force (emf) in the coil?',
    options: [
      '1.0 × 10⁻³ V',
      '4.0 × 10⁻³ V',
      '1.0 × 10³ V',
      '2.5 × 10² V'
    ],
    correctOptionIndex: 0,
    explanation: 'According to Faraday\'s law of electromagnetic induction:\n|ε| = |ΔΦ / Δt| = B · |ΔA / Δt|\nGiven B = 0.50 T, ΔA = 4.0 × 10⁻³ m², and Δt = 2 s:\n|ε| = 0.50 T × (4.0 × 10⁻³ m² / 2 s) = 0.50 × (2.0 × 10⁻³ V) = 1.0 × 10⁻³ V.',
    hint: 'emf = B · (ΔA / Δt) = 0.50 × (4.0×10⁻³ / 2) = 1.0 × 10⁻³ V.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
