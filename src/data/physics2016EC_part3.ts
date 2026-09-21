import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2016_EC_PART3: Question[] = [
  {
    id: 'phy-2016-q41',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Electromagnetic Induction: Lenz\'s Law',
    questionText: 'Lenz\'s law states that the direction of the induced current in a loop is in such a way that the current',
    options: [
      'creates a magnetic field that opposes the change in magnetic flux through the loop.',
      'creates a magnetic field that reinforces the change in magnetic flux through the loop.',
      'is in opposite direction to that of the applied magnetic field that is causing it.',
      'is in the same direction as that of the applied magnetic field that is causing it.'
    ],
    correctOptionIndex: 0,
    explanation: 'Lenz\'s law (consistent with the conservation of energy) states that an induced electromotive force always generates an electric current whose secondary magnetic field opposes the original rate of change in magnetic flux passing through the loop.',
    hint: 'Induced currents always act to oppose the change in magnetic flux that induced them.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q42',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Current Electricity: Factors Affecting Resistance of a Conductor',
    questionText: 'Which one of the following statements is correct about the resistance of a conducting wire? The resistance of the wire is',
    options: [
      'inversely proportional to its cross-sectional area.',
      'inversely proportional to its length.',
      'directly proportional to the square of its length.',
      'directly proportional to the square of its cross-sectional area.'
    ],
    correctOptionIndex: 0,
    explanation: 'The electrical resistance of a uniform conductor is given by Pouillet\'s law: R = ρ · (L / A). Therefore, resistance is directly proportional to length (L) and inversely proportional to cross-sectional area (A).',
    hint: 'R = ρL / A, meaning resistance is inversely proportional to cross-sectional area A.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q43',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Electromagnetism: Ideal Transformer Ratio',
    questionText: 'Consider an ideal transformer having N_p and N_s turns, and voltages V_p and V_s in its primary and secondary coils, respectively. Which one of the following is the correct ideal transformer equation?',
    options: [
      'N_s / N_p = (V_s / V_p)²',
      'V_s / V_p = N_s / N_p',
      'V_p = (N_p / N_s)² V_s',
      'V_s / V_p = N_p / N_s'
    ],
    correctOptionIndex: 1,
    explanation: 'By Faraday\'s law of induction applied to both windings with identical mutual core flux, the ratio of secondary to primary induced voltage is directly equal to the turns ratio: V_s / V_p = N_s / N_p.',
    hint: 'Voltage ratio directly equals the turns ratio: V_s / V_p = N_s / N_p.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q44',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Atomic & Solid State: Electrical Conductivity Classification',
    questionText: 'Which one of the following statements is correct about the electrical conductivity of materials? Materials in which all the',
    options: [
      'inner and outer most shell electrons are tightly bound to its parent atom are insulators.',
      'inner and outer most shell electrons are free to move within the material are conductors.',
      'outer most shell electrons are free to move within the material are semiconductors.',
      'outer most shell electrons are tightly bound to its parent atom are conductors.'
    ],
    correctOptionIndex: 0,
    explanation: 'In electrical insulators (such as rubber, glass, and quartz), the valence band is completely full and separated by a wide energy bandgap (E_g > 5 eV) from the conduction band, meaning all inner and outer electrons remain tightly bound to their parent nuclei with virtually no free charge carriers.',
    hint: 'Insulators have tightly bound valence electrons and cannot conduct electricity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q45',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Measurement & Error: Precision vs. Accuracy',
    questionText: 'Which one of the following statements distinguishes precision from accuracy?',
    options: [
      'Precision is a measure of the closeness of repeatedly measured values to each other, whereas accuracy refers to the closeness of measured values to the true value.',
      'Precision is a measure of the closeness of repeatedly measured values to each other, whereas accuracy is related to the number of significant figures.',
      'Accuracy measures how exact a value is whereas precision indicates how close a measured value is to the true value.',
      'Precision indicates how close a measured value is to the true value, whereas accuracy refers to the closeness of repeatedly measured values to each other.'
    ],
    correctOptionIndex: 0,
    explanation: '• Precision denotes the repeatability and agreement among repeated measurements under identical conditions.\n• Accuracy describes the degree of closeness of a measured value to the true, accepted standard value.',
    hint: 'Precision = repeatability/closeness to each other; Accuracy = closeness to true value.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q46',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Electromagnetic Waves: Transverse Nature & Field Oscillations',
    questionText: 'Which of the following statements about the nature of electromagnetic waves is correct? Electromagnetic waves are transverse waves produced when',
    options: [
      'charges are placed at rest in an electric and magnetic fields that are parallel to each other.',
      'electric and magnetic fields are oscillating parallel to each other.',
      'charges are placed at rest in an electric and magnetic fields that are perpendicular to each other.',
      'electric and magnetic fields are oscillating perpendicular to each other.'
    ],
    correctOptionIndex: 3,
    explanation: 'Electromagnetic waves are transverse waves characterized by sinusoidal, self-propagating electric (E⃗) and magnetic (B⃗) fields oscillating in phase at right angles (perpendicular) to each other and perpendicular to the direction of propagation (c⃗ = E⃗ × B⃗ / (μ₀ ε₀)).',
    hint: 'In EM waves, E and B fields oscillate perpendicular to each other and to the wave velocity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q47',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Current Electricity: Parallel Resistor Networks',
    questionText: 'Three resistors with values 3 kΩ, 6 kΩ, and 2 kΩ are connected in parallel between points a and b. The effective resistance of the circuit is',
    options: [
      '11.0 kΩ',
      '1.0 kΩ',
      '11.0 Ω',
      '1.0 Ω'
    ],
    correctOptionIndex: 1,
    explanation: 'For resistors connected in parallel:\n1 / R_eq = 1/R₁ + 1/R₂ + 1/R₃\n1 / R_eq = 1/3 + 1/6 + 1/2 = (2 + 1 + 3) / 6 = 6 / 6 = 1.0 kΩ⁻¹\nR_eq = 1.0 kΩ.',
    hint: '1/R_eq = 1/3 + 1/6 + 1/2 = 6/6 = 1 kΩ⁻¹ => R_eq = 1.0 kΩ.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q48',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Geometrical Optics: Concave Mirror Magnification and Object Distance',
    questionText: 'A concave mirror has a radius of curvature of 30.0 cm. It is positioned so that the upright image of an object is 2.0 times the size of the object. How far is the object from the mirror?',
    options: [
      '7.5 cm',
      '22.5 cm',
      '15.0 cm',
      '10.0 cm'
    ],
    correctOptionIndex: 0,
    explanation: 'Step 1: Focal length of concave mirror:\nf = R / 2 = +30.0 cm / 2 = +15.0 cm.\n\nStep 2: Upright image indicates a virtual image with magnification m = +2.0:\nm = -d_i / d_o = +2.0 => d_i = -2.0 d_o.\n\nStep 3: Mirror equation:\n1/f = 1/d_o + 1/d_i\n1 / 15.0 = 1/d_o - 1/(2 d_o) = 1 / (2 d_o)\n2 d_o = 15.0 cm => d_o = 7.5 cm.',
    hint: 'f = 15 cm; m = +2 => d_i = -2 d_o; 1/15 = 1/(2 d_o) => d_o = 7.5 cm.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q49',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Magnetism: Right-Hand Rule for Straight Current-Carrying Wire',
    questionText: 'A long straight wire carries a current directed out of the page. A small compass is placed at point P directly to the left of the wire. The magnetic needle (north pole) of the compass will point',
    options: [
      'upward.',
      'to the left.',
      'downward.',
      'to the right.'
    ],
    correctOptionIndex: 2,
    explanation: 'According to the Right-Hand Grip Rule: pointing the right thumb out of the page (towards the observer), the curled fingers indicate circular magnetic field lines directed counter-clockwise around the wire. At point P (located to the left of the wire), the tangent to the counter-clockwise circle points vertically downward.',
    hint: 'Current out of the page creates counter-clockwise circular field lines; to the left of the wire, the field points downward.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q50',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Digital Electronics: Compound Logic Gates (NAND + OR)',
    questionText: 'A combination logic circuit consists of a NAND gate with inputs P and Q, whose output is fed together with input Q into an OR gate. What is the truth table output for (P, Q) = (0,0), (0,1), (1,0), (1,1)?',
    options: [
      'Output = 1, 0, 0, 1',
      'Output = 1, 1, 1, 1',
      'Output = 0, 0, 0, 0',
      'Output = 0, 1, 1, 0'
    ],
    correctOptionIndex: 1,
    explanation: 'Let NAND output X = (P · Q)\' and Final Output Y = X + Q = (P · Q)\' + Q.\nBy Boolean algebra: (P\' + Q\') + Q = P\' + (Q\' + Q) = P\' + 1 = 1.\nEvaluating for each input pair:\n• (P=0, Q=0): NAND = 1 => OR(1, 0) = 1\n• (P=0, Q=1): NAND = 1 => OR(1, 1) = 1\n• (P=1, Q=0): NAND = 1 => OR(1, 0) = 1\n• (P=1, Q=1): NAND = 0 => OR(0, 1) = 1\nHence, the output is always 1 for all combinations.',
    hint: 'Boolean expression: (P·Q)\' + Q = P\' + Q\' + Q = P\' + 1 = 1 for all inputs.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q51',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Acoustics & Waves: Reflection of Sound',
    questionText: 'What do you call the sound wave that is heard after reflection from a hard surface?',
    options: [
      'Pitch',
      'Timbre',
      'Echo',
      'Loudness'
    ],
    correctOptionIndex: 2,
    explanation: 'An echo is a sound heard as a distinct repetition after reflecting off an acoustic obstacle or hard boundary (such as a cliff wall, building, or cavern) with sufficient time delay (> 0.1 s) for human auditory perception.',
    hint: 'An echo is the reflected repetition of a sound wave from a surface.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q52',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Rotational Dynamics: Definition of Angular Momentum',
    questionText: 'The angular momentum of a rotating object is defined as the product of its',
    options: [
      'mass and one-half of the square of the angular velocity.',
      'moment of inertia and angular velocity.',
      'moment of inertia and the square of the angular velocity.',
      'mass and the angular velocity.'
    ],
    correctOptionIndex: 1,
    explanation: 'In rotational mechanics, angular momentum (L) is the rotational analog of linear momentum (p = mv) and is defined as the product of moment of inertia (I) and angular velocity (ω): L = I · ω.',
    hint: 'L = I · ω (moment of inertia × angular velocity).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q53',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Wave Motion: Classification of Longitudinal Waves',
    questionText: 'Which one of the following waves is identified as a longitudinal wave?',
    options: [
      'S-wave of Earthquake',
      'Wave on a vibrating string',
      'Sound wave',
      'Deep water wave'
    ],
    correctOptionIndex: 2,
    explanation: 'In sound waves, particle displacement is parallel to the direction of wave energy propagation, forming successive compressions and rarefactions, which defines a longitudinal mechanical wave. (In contrast, S-waves and vibrating strings are transverse).',
    hint: 'Sound waves are longitudinal mechanical waves in fluids and air.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q54',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Projectile Motion: Velocity Components',
    questionText: 'Which of the following statements is correct about the components of the velocity of a ball projected up at an angle of θ with the horizontal? Neglecting air resistance,',
    options: [
      'the horizontal velocity of the ball is equal to zero at the maximum height.',
      'the horizontal component of the velocity remains constant throughout its journey.',
      'the vertical component of velocity increases while the horizontal component of velocity decreases.',
      'the vertical component of the velocity remains constant throughout its journey.'
    ],
    correctOptionIndex: 1,
    explanation: 'In ideal 2D projectile motion, gravitational acceleration acts exclusively in the vertical direction (a_y = -g, a_x = 0). Because there is zero net horizontal force, the horizontal velocity component remains constant throughout the entire trajectory (v_x = v₀ cos θ).',
    hint: 'Zero horizontal acceleration means the horizontal velocity component v_x remains constant.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q55',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Electrostatics: Electric Field of a Charged Solid Conductor',
    questionText: 'Which one of the following statements is correct about the electric field due to a charged spherical solid conductor?',
    options: [
      'It is parallel to the surface of the sphere.',
      'It is non-zero constant inside the sphere.',
      'It is non-zero constant outside the sphere.',
      'It is zero inside the sphere.'
    ],
    correctOptionIndex: 3,
    explanation: 'Under electrostatic equilibrium, mobile charges repel and redistribute entirely onto the outermost exterior surface of a solid conductor. By Gauss\'s Law, the enclosed charge inside any Gaussian surface internal to the sphere is zero, resulting in an electrostatic field E = 0 everywhere inside the conductor.',
    hint: 'The electric field inside any charged solid conductor in electrostatic equilibrium is zero.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q56',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Thermal Physics: Linear Thermal Expansion Formula',
    questionText: 'A metal wire made of coefficient of linear expansion α is heated so that its temperature is changed by ΔT. If the length of the wire before heating is L₀, which one of the following expressions is correct for the final length of the wire after heating?',
    options: [
      'L₀ / (1 - α ΔT)',
      'L₀ (1 + α ΔT)',
      'L₀ / (1 + α ΔT)',
      'L₀ α ΔT'
    ],
    correctOptionIndex: 1,
    explanation: 'The change in length due to thermal expansion is ΔL = α · L₀ · ΔT. The final length L is the initial length plus the extension: L = L₀ + ΔL = L₀ + L₀ α ΔT = L₀ (1 + α ΔT).',
    hint: 'L = L₀ + ΔL = L₀(1 + α ΔT).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q57',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Calorimetry: Latent Heat of Fusion of Ice',
    questionText: 'What amount of heat energy is required to completely melt 200 g of ice at 0 °C? (Take specific latent heat of melting for ice, L_f = 3.3 × 10⁵ J/kg)',
    options: [
      '1.65 × 10³ J',
      'Zero',
      '6.60 × 10⁴ J',
      '1.65 × 10⁷ J'
    ],
    correctOptionIndex: 2,
    explanation: 'Using the latent heat formula Q = m · L_f:\n• m = 200 g = 0.200 kg\n• L_f = 3.3 × 10⁵ J/kg\n\nQ = 0.200 kg × 3.3 × 10⁵ J/kg = 0.66 × 10⁵ J = 6.60 × 10⁴ J.',
    hint: 'Q = m · L_f = 0.2 × 3.3 × 10⁵ = 6.60 × 10⁴ J.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q58',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Gravitation & Orbital Mechanics: Period of an Earth Satellite',
    questionText: 'The orbital speed of a satellite at a height of 780 km from the surface of the earth is 7,465 m/s. What is the period of the satellite? (Radius of Earth R_E = 6.4 × 10⁶ m, π = 3.14)',
    options: [
      '6.60 × 10² s',
      '6.60 × 10³ s',
      '6.04 × 10³ s',
      '6.04 × 10² s'
    ],
    correctOptionIndex: 2,
    explanation: 'Step 1: Calculate total orbital radius (r = R_E + h):\nr = 6.4 × 10⁶ m + 780 × 10³ m = 6.4 × 10⁶ m + 0.78 × 10⁶ m = 7.18 × 10⁶ m.\n\nStep 2: Calculate orbital circumference:\nC = 2πr = 2 × 3.14 × 7.18 × 10⁶ m = 4.50904 × 10⁷ m.\n\nStep 3: Orbital period (T = C / v):\nT = (4.50904 × 10⁷ m) / (7,465 m/s) = 6039.97 s ≈ 6.04 × 10³ s.',
    hint: 'r = 6.4×10⁶ + 0.78×10⁶ = 7.18×10⁶ m; T = 2πr / v = (2 × 3.14 × 7.18×10⁶) / 7465 ≈ 6.04 × 10³ s.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q59',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Electrostatics: Capacitance Definition',
    questionText: 'The charge of 20.0 μC is stored on a capacitor when the potential difference between its two parallel plates is 200.0 V. What is the capacitance of the capacitor?',
    options: [
      '4.0 mF',
      '0.1 μF',
      '10.0 μF',
      '1.0 μF'
    ],
    correctOptionIndex: 1,
    explanation: 'Using the definition of capacitance C = Q / V:\n• Q = 20.0 μC = 20.0 × 10⁻⁶ C\n• V = 200.0 V\n\nC = (20.0 × 10⁻⁶ C) / (200.0 V) = 0.10 × 10⁻⁶ F = 0.1 μF.',
    hint: 'C = Q / V = 20 μC / 200 V = 0.1 μF.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2016-q60',
    subject: 'Physics',
    year: '2016 E.C.',
    topic: 'Electrostatics: Energy Stored in a Parallel Plate Capacitor',
    questionText: 'An air-filled parallel plate capacitor is connected to a potential difference V to store electric charge. If the area of the plates is A and the separation between the plates is d, then the electrical energy stored on the capacitor is (ε₀ is permittivity of vacuum)',
    options: [
      '(½ ε₀ A V²) / d',
      '(ε₀ d V²) / A',
      '(ε₀ A V²) / d',
      '(½ ε₀ d V²) / A'
    ],
    correctOptionIndex: 0,
    explanation: 'The capacitance of an air-dielectric parallel plate capacitor is C = (ε₀ · A) / d.\nThe electrostatic potential energy U stored in a charged capacitor is:\nU = ½ C V² = ½ · [(ε₀ · A) / d] · V² = (1 ε₀ A V²) / (2 d).',
    hint: 'U = ½ C V² = ½ (ε₀ A / d) V² = (1 ε₀ A V²) / (2 d).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
