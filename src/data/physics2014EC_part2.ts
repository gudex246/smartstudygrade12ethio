import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2014_EC_PART2: Question[] = [
  {
    id: 'phy-2014-q16',
    subject: 'Physics',
    topic: 'Magnetism: Magnetic Field of an Ideal Solenoid',
    questionText: 'Consider a long and tightly wound solenoid carrying current I, having length L and N turns of winding. If n is the number of turns per unit length, which of the following describes the magnetic field produced by the solenoid?',
    options: [
      'The magnetic field inside the solenoid is constant and is parallel to the solenoid\'s axis, whereas the field outside is negligible.',
      'The magnetic field inside the solenoid is zero, whereas the field outside is perpendicular to the length of the solenoid.',
      'The magnetic field inside the solenoid is uniform and perpendicular to the axis of the solenoid.',
      'The magnetic field outside the solenoid is as strong as the field inside it.'
    ],
    correctOptionIndex: 0,
    explanation: 'For a long, ideal, closely wound solenoid carrying steady current I:\n1. Inside the solenoid: Magnetic field lines are closely spaced, uniform, and parallel to the longitudinal axis of the solenoid. The field magnitude is constant: B = μ₀ · n · I = μ₀ · (N/L) · I.\n2. Outside the solenoid: Field lines spread out into a very large volume in space, making the external magnetic field practically zero (negligible).',
    hint: 'Inside a long solenoid, the magnetic field is uniform, constant (B = μ₀ · n · I), and parallel to the axis; outside it is nearly zero.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q17',
    subject: 'Physics',
    topic: 'Electromagnetic Induction: Faraday\'s Law',
    questionText: 'According to the law of electromagnetic induction, which of the following is correct?',
    options: [
      'the magnitude of emf induced in a circuit is directly proportional to the rate of change of the magnetic flux crossing any surface bounded by the circuit.',
      'a changing magnetic field parallel to the plane of a circuit induces an emf in it.',
      'a constant magnetic flux crossing the surface of a circuit induces an emf in the circuit.',
      'an emf is induced in a circuit when a constant magnetic field crosses its surface.'
    ],
    correctOptionIndex: 0,
    explanation: 'Faraday\'s Law of Electromagnetic Induction states that the magnitude of the electromotive force (emf, ℰ) induced in a closed circuit is directly proportional to the time rate of change of magnetic flux (Φ_B) passing through the area bounded by the circuit:\nℰ = -N · (dΦ_B / dt)\n\nA constant magnetic field or constant flux produces no induced emf (dΦ_B / dt = 0). A field parallel to the circuit plane produces zero flux (Φ_B = B · A · cos 90° = 0) and thus induces no emf.',
    hint: 'Induced electromotive force depends strictly on the rate of change of magnetic flux (ℰ = -dΦ/dt).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q18',
    subject: 'Physics',
    topic: 'AC Circuits: Series RLC Circuit & Power Dissipation',
    questionText: 'A resistor R, a capacitor C, and inductor L are connected in series to an AC voltage source that generates a sinusoidal voltage, V(t) = V_p sin(ωt), with V_p and ω being the peak voltage and angular frequency of the source. If X_C, X_L, and Z are capacitive reactance, inductive reactance, and impedance, respectively; I_rms and V_rms are the root-mean-square (rms) values of the current and voltage, the average power dissipated in the series RLC circuit is given by:',
    options: [
      'I_rms · V_rms · [R / √(R² + (X_L - X_C)²)]',
      '2 I_p · V_p · [R / √(R² + (X_L - X_C)²)]',
      'I_rms · V_rms',
      'I_rms² · Z'
    ],
    correctOptionIndex: 0,
    explanation: 'The average power dissipated in an AC circuit is given by:\nP_avg = V_rms · I_rms · cos φ\nwhere cos φ is the power factor of the circuit.\n\nIn a series RLC circuit:\n• Impedance: Z = √(R² + (X_L - X_C)²)\n• Power factor: cos φ = R / Z = R / √(R² + (X_L - X_C)²)\n\nSubstituting cos φ into the power equation:\nP_avg = I_rms · V_rms · [R / √(R² + (X_L - X_C)²)] = I_rms · V_rms · (R / Z) = I_rms² · R',
    hint: 'Average AC power is P = V_rms · I_rms · cos φ, where the power factor is cos φ = R / Z.',
    difficulty: 'hard',
    points: 20,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q19',
    subject: 'Physics',
    topic: 'Quantum Physics: Heisenberg\'s Uncertainty Principle',
    questionText: 'According to Heisenberg\'s uncertainty principle, which of the following is correct?',
    options: [
      'the more precisely we measure the position of a particle, we become less precise of its momentum and vice versa.',
      'the larger the position uncertainty, the larger the momentum uncertainty.',
      'if the uncertainty in position decreases, the momentum uncertainty decreases, too.',
      'we can measure both the position and momentum of a particle simultaneously with unlimited precision.'
    ],
    correctOptionIndex: 0,
    explanation: 'Heisenberg\'s Uncertainty Principle states that it is fundamentally impossible to measure both the position (x) and linear momentum (p) of a particle simultaneously with infinite precision. The mathematical expression is:\nΔx · Δp ≥ ℏ / 2\n\nBecause their product has a fundamental lower limit (ℏ/2), reducing the uncertainty in position (Δx → 0) inherently increases the uncertainty in momentum (Δp → ∞), and vice versa.',
    hint: 'Δx · Δp ≥ ℏ / 2. Higher precision in position measurement results in lower precision in momentum.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q20',
    subject: 'Physics',
    topic: 'Nuclear Physics: Binding Energy per Nucleon Curve',
    questionText: 'The graph of nuclear binding energy per nucleon (BE/A) versus mass number (A) has its peak near an atomic weight A = 56. Which of the following statements is true about the graph?',
    options: [
      'Iron (A = 56) has the highest binding energy per nucleon, making it the most stable nucleus.',
      'Uranium (A = 235), which has larger total binding energy than iron (A = 56), is more stable than iron.',
      'Nuclei with larger number of neutrons are always more stable than nuclei of the same atom with smaller number of neutrons.',
      'For heavier nuclei (A > 56), the binding energy per nucleon increases with the increase of mass number.'
    ],
    correctOptionIndex: 0,
    explanation: 'The curve of nuclear binding energy per nucleon (BE/A) versus mass number (A):\n• Reaches its global peak at A ≈ 56 (specifically Iron-56, ⁵⁶Fe) at approximately 8.8 MeV per nucleon.\n• A higher binding energy per nucleon signifies greater nuclear stability because more energy is required to pull nucleons apart.\n• For lighter nuclei (A < 56), nuclear fusion moves nuclei up the curve toward Iron-56, releasing energy.\n• For heavier nuclei (A > 56), nuclear fission splits large nuclei into medium-sized fragments closer to Iron-56, releasing energy.',
    hint: 'The binding energy per nucleon curve peaks at A = 56 (Iron), which represents the most tightly bound and stable nucleus.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q21',
    subject: 'Physics',
    topic: 'Sound Waves: Reflection, Refraction & Applications',
    questionText: 'Which of the following statements is NOT correct about reflection and refraction of sound waves and their applications?',
    options: [
      'Reflection of sound (echo) is formed when sound enters a medium of varying densities.',
      'In pre-natal scanning, reflection and refraction of sound allows doctors to monitor the progress of a developing baby.',
      'Reflection and refraction of sound are used to detect flaws in metals and to help people park their cars.',
      'Refraction of sound is the change in its direction as it travels through a medium having different densities.'
    ],
    correctOptionIndex: 0,
    explanation: '• Statement A is NOT correct (and therefore the correct answer): An echo is produced by the reflection of sound when it strikes a distinct boundary or hard surface between two media. When sound travels through a continuous medium with gradually varying density or temperature gradients (e.g. warm vs cool air layers), it undergoes refraction (curving/bending), not echo reflection.\n• Ultrasound diagnostic scanning, non-destructive materials testing, and ultrasonic parking sensors all utilize reflection at acoustic impedance interfaces.',
    hint: 'An echo is produced by reflection at an acoustic boundary; sound traveling through layers of varying density undergoes refraction.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q22',
    subject: 'Physics',
    topic: 'Rotational Dynamics: Work Done by a Torque',
    questionText: 'A torque τ rotates an object of mass m and moment of inertia I through an angle θ. The work done on the object by the torque is ____.',
    options: [
      'τθ',
      'Iθ',
      'mθ',
      'τI'
    ],
    correctOptionIndex: 0,
    explanation: 'In linear mechanics, work is defined as W = F · d (Force × linear displacement).\nIn rotational mechanics, the rotational equivalent of force is torque (τ), and the rotational equivalent of linear displacement is angular displacement (θ in radians).\n\nTherefore, the work done by a constant torque τ rotating a rigid body through an angle θ is:\nW = τ · θ\n(Unit: Joules, J).',
    hint: 'Rotational work is analogous to linear work: W = τ · θ (Torque × angular displacement).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q23',
    subject: 'Physics',
    topic: 'Gravitation: Orbital Period of a Satellite',
    questionText: 'A satellite revolves around the Earth in a circular orbit of radius r = 4 × 10¹⁶ m. Taking G = 6.67 × 10⁻¹¹ N·m²/kg² and M_e = 6 × 10²⁴ kg, the orbital period of the satellite is:',
    options: [
      '2.5 × 10¹⁸ s',
      '2.5 × 10¹⁹ s',
      '3.7 × 10²⁷ s',
      '3.7 × 10²⁶ s'
    ],
    correctOptionIndex: 0,
    explanation: 'Kepler\'s Third Law formula for circular orbit period:\nT = 2π · √(r³ / (G · M_e))\n\nGiven:\n• r = 4 × 10¹⁶ m  =>  r³ = (4 × 10¹⁶)³ = 64 × 10⁴⁸ m³\n• G · M_e = (6.67 × 10⁻¹¹) · (6 × 10²⁴) ≈ 4.0 × 10¹⁴ m³/s²\n\nCalculate the ratio inside the square root:\nr³ / (G · M_e) = (64 × 10⁴⁸) / (4.0 × 10¹⁴) = 16 × 10³⁴ s²\n\nTake the square root:\n√(r³ / (G · M_e)) = √(16 × 10³⁴) = 4.0 × 10¹⁷ s\n\nCalculate period T:\nT = 2π × (4.0 × 10¹⁷ s) = 8π × 10¹⁷ s ≈ 8 × 3.1416 × 10¹⁷ s = 25.13 × 10¹⁷ s = 2.513 × 10¹⁸ s ≈ 2.5 × 10¹⁸ s',
    hint: 'Use T = 2π · √(r³ / GM). r³ = 64 × 10⁴⁸, GM = 4.0 × 10¹⁴, √(16 × 10³⁴) = 4 × 10¹⁷, T = 8π × 10¹⁷ ≈ 2.5 × 10¹⁸ s.',
    difficulty: 'hard',
    points: 20,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q24',
    subject: 'Physics',
    topic: 'Electrostatics: Conduction vs Induction Charging Methods',
    questionText: 'Which of the following statements is a correct description of the charging processes?',
    options: [
      'When a positively charged object is momentarily brought into contact with a neutral metallic sphere, the sphere acquires a net positive charge.',
      'During charging a neutral object by induction using a negatively charged rod, charge flows from the rod to the object.',
      'When a neutral metallic sphere is charged by induction using a negatively charged rod, the sphere acquires a net negative charge.',
      'When a plastic rod is rubbed with wool, the two objects acquire a net charge of the same sign.'
    ],
    correctOptionIndex: 0,
    explanation: '• Charging by Conduction (Contact): Involves direct physical contact where electrons transfer between objects. Bringing a positively charged rod into contact with a neutral sphere attracts free electrons from the sphere into the rod, leaving the sphere with a net positive charge (the same sign as the charging rod).\n• Charging by Induction: There is no physical contact or charge transfer from the rod; grounding allows charges of the same sign to escape, leaving the object with the OPPOSITE sign of charge (a negative rod induces a POSITIVE charge).\n• Triboelectric charging (rubbing) transfers electrons such that one body becomes positive and the other negative (opposite signs).',
    hint: 'Charging by contact gives the object the same sign of charge as the charging body.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q25',
    subject: 'Physics',
    topic: 'Capacitance & Dielectrics: Isolated Capacitor with Dielectric',
    questionText: 'A parallel plate capacitor is charged with a battery. The battery is then disconnected, and a dielectric material is inserted between the plates of the capacitor. Which of the following is correct about the effect of the dielectric?',
    options: [
      'The electric field between the plates and the energy stored decrease.',
      'The potential difference between the plates remains the same and the charge increases.',
      'The charge on the plates decreases and the energy stored increases.',
      'The capacitance remains the same and the electric field between the plates increases.'
    ],
    correctOptionIndex: 0,
    explanation: 'When the battery is disconnected before inserting the dielectric material (dielectric constant κ > 1):\n1. Charge (Q): Remains constant (Q = Q₀) because the isolated plates cannot gain or lose charge.\n2. Capacitance (C): Increases by factor κ (C = κ · C₀).\n3. Voltage (V): Decreases (V = Q / C = Q₀ / (κ C₀) = V₀ / κ).\n4. Electric Field (E): Decreases (E = V / d = E₀ / κ) due to dielectric polarization opposing the original field.\n5. Stored Potential Energy (U): Decreases (U = Q² / (2C) = Q₀² / (2κ C₀) = U₀ / κ).\n\nTherefore, both the electric field between the plates and the stored energy decrease.',
    hint: 'With the battery disconnected, charge Q is constant. Adding a dielectric increases capacitance C, reducing voltage V = Q/C, field E = V/d, and energy U = Q²/(2C).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q26',
    subject: 'Physics',
    topic: 'Current Electricity: Resistance & Conductor Dimensions',
    questionText: 'Which one of the following statements is correct about the resistance of a conductor with a circular cross-section?',
    options: [
      'The resistance of the conductor increases as its length increases and its diameter decreases.',
      'At a given temperature, the resistance of copper and silver wires of the same length and diameter is the same.',
      'The resistance of the conductor increases as its length and diameter increases.',
      'The resistance of the conductor decreases as it is heated.'
    ],
    correctOptionIndex: 0,
    explanation: 'The electrical resistance R of a cylindrical conductor of length L, cross-sectional area A, and diameter d is:\nR = ρ · (L / A) = ρ · [L / (π (d/2)²)] = (4 · ρ · L) / (π · d²)\n\n• Resistance is directly proportional to length (R ∝ L): longer wires have higher resistance.\n• Resistance is inversely proportional to cross-sectional area and diameter squared (R ∝ 1/d²): narrower wires have higher resistance.\n\nTherefore, resistance increases as length increases and diameter decreases.',
    hint: 'R = ρ L / A = 4ρ L / (π d²). Longer length and smaller diameter increase resistance.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q27',
    subject: 'Physics',
    topic: 'Practical Electricity: Experimental Setup for Ohm\'s Law',
    questionText: 'A student wants to investigate Ohm\'s law using an ammeter (A) and a voltmeter (V) to measure current through and potential difference across a resistor R. Moreover, she employs a rheostat to vary the potential difference across the resistor. Which of the following connections is the correct set up of the circuit to perform the experiment?',
    options: [
      'Voltmeter connected in parallel across resistor R, Ammeter connected in series with R, and Rheostat in series with the power supply.',
      'Voltmeter connected in series with resistor R, Ammeter in parallel across R, and Rheostat in series.',
      'Both Voltmeter and Ammeter connected in parallel across resistor R.',
      'Both Voltmeter and Ammeter connected in series with resistor R and the power supply.'
    ],
    correctOptionIndex: 0,
    explanation: 'To properly measure the electrical characteristics in an Ohm\'s law verification circuit:\n1. An Ammeter (very low internal resistance) must be connected in series with the resistor R so that the entire current passing through R flows through the ammeter.\n2. A Voltmeter (very high internal resistance) must be connected in parallel across resistor R to measure the voltage drop without drawing current from the main branch.\n3. A Rheostat (variable resistor) is connected in series with the battery and circuit loop to continuously vary the circuit current and voltage across R.',
    hint: 'Ammeters are connected in series; voltmeters are connected in parallel across the component.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q28',
    subject: 'Physics',
    topic: 'Magnetism: Trajectory of Charged Particles in Magnetic Field',
    questionText: 'Circular paths followed by two charges q1 and q2 moving with the same speed in a uniform magnetic field directed into the page (x) are observed. The path of q1 has a larger radius than q2 (r1 > r2). Charge q1 rotates clockwise and q2 rotates counterclockwise. If the two charges have the same mass, which of the following is correct about the sign and the magnitude of charges?',
    options: [
      'q1 is negative, q2 is positive and |q1| < |q2|',
      'q1 is negative, q2 is positive and |q1| > |q2|',
      'q1 is positive, q2 is negative and |q1| < |q2|',
      'q1 is positive, q2 is negative and |q1| > |q2|'
    ],
    correctOptionIndex: 0,
    explanation: '1. Magnitude of charge:\nThe radius of circular orbit for a charged particle in a magnetic field is:\nr = (m · v) / (|q| · B)  =>  |q| = (m · v) / (r · B)\nBecause mass m, speed v, and field B are identical, charge magnitude is inversely proportional to radius (|q| ∝ 1/r).\nSince r1 > r2, we have |q1| < |q2|.\n\n2. Sign of charge:\nBy the Lorentz force rule F = q(v × B) for field directed into the page:\n• For a rightward-moving particle, v × B points upward (+y).\n• Charge q1 is deflected downward (clockwise orbit), so the force opposes v × B, indicating q1 is NEGATIVE.\n• Charge q2 is deflected upward (counterclockwise orbit), so the force aligns with v × B, indicating q2 is POSITIVE.',
    hint: 'Radius r = mv / (|q|B) means larger radius has smaller charge (|q1| < |q2|). Use right-hand rule for charge sign.',
    difficulty: 'hard',
    points: 20,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q29',
    subject: 'Physics',
    topic: 'Electromagnetism: Ideal Transformer Equations',
    questionText: 'The primary coil of a transformer has 250 turns and its secondary coil consists of 1500 turns. If 220 V is applied to its primary coil, the voltage induced in the secondary coil and the ratio of current in the primary coil to the current in the secondary coil, respectively, are:',
    options: [
      '1320 V and 6',
      '1330 V and 6',
      '1220 V and 60',
      '1320 V and 60'
    ],
    correctOptionIndex: 0,
    explanation: 'Given:\n• Primary turns (N_p) = 250\n• Secondary turns (N_s) = 1500\n• Primary voltage (V_p) = 220 V\n\nStep 1: Calculate turns ratio:\nTurns ratio = N_s / N_p = 1500 / 250 = 6\n\nStep 2: Calculate induced secondary voltage (V_s):\nV_s / V_p = N_s / N_p\nV_s = V_p · (N_s / N_p) = 220 V × 6 = 1320 V\n\nStep 3: Calculate primary-to-secondary current ratio (I_p / I_s):\nFor an ideal transformer (input power = output power, V_p · I_p = V_s · I_s):\nI_p / I_s = V_s / V_p = N_s / N_p = 6',
    hint: 'V_s = V_p · (N_s / N_p) = 220 × 6 = 1320 V. In ideal transformers, current ratio I_p / I_s = N_s / N_p = 6.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q30',
    subject: 'Physics',
    topic: 'Electronics: Semiconductor Diodes & Rectification',
    questionText: 'A diode is an electronic component that:',
    options: [
      'allows electric current to pass through it in one direction.',
      'is useful to convert a DC voltage to AC voltage.',
      'allows the flow of current when its p-type region is connected to the negative terminal of a cell.',
      'allows current to pass through it either from cathode to anode or from anode to cathode.'
    ],
    correctOptionIndex: 0,
    explanation: 'A semiconductor p-n junction diode is a two-terminal electronic device that exhibits asymmetric conductance:\n• Forward Bias: When the p-type anode is connected to the positive terminal and the n-type cathode to the negative terminal, the depletion barrier narrows and electric current flows freely.\n• Reverse Bias: When the p-type region is connected to the negative terminal, the depletion barrier expands, presenting extremely high resistance and blocking current flow.\nTherefore, a diode permits electric current to pass through it in only one forward direction (anode to cathode).',
    hint: 'A diode is a semiconductor device that allows current to flow primarily in one forward direction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  }
];
