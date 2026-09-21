import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2014_EC_PART1: Question[] = [
  {
    id: 'phy-2014-q1',
    subject: 'Physics',
    topic: 'Geometrical Optics: Plane Mirrors & Image Formation',
    questionText: 'Suppose a triangular object (O) is placed in front of a plane mirror and its image is observed at position (X). Which one of the following diagrams represents the image (I) formed by the mirror when it is observed from position (X)?',
    options: [
      'The virtual image (I) is behind the mirror at equal perpendicular distance, upright, same size, and laterally inverted (left-right reversed).',
      'The image is inverted vertically upside down behind the mirror.',
      'The image is shifted diagonally along the observer’s line of sight.',
      'The image is formed with the same lateral orientation without left-right reversal.'
    ],
    correctOptionIndex: 0,
    explanation: 'In a plane mirror:\n1. The image formed is virtual, erect, and laterally inverted (left-right reversed).\n2. The image distance behind the mirror equals the object distance in front of the mirror (dᵢ = dₒ), measured along the line perpendicular to the reflecting surface.\n3. The size of the image is equal to the size of the object (magnification m = 1).\nTherefore, the correct diagram shows the image located at an equal perpendicular distance behind the mirror with lateral inversion.',
    hint: 'Plane mirror images are virtual, erect, laterally inverted, and located at the exact same perpendicular distance behind the mirror as the object is in front.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q2',
    subject: 'Physics',
    topic: 'Geometrical Optics: Concave Mirrors & Magnification',
    questionText: 'An object is placed 25.0 cm in front of a concave mirror having focal length of 10.0 cm. The magnification of the mirror is ____.',
    options: [
      '0.67',
      '2.5',
      '16.7',
      '1.5'
    ],
    correctOptionIndex: 0,
    explanation: 'Given:\n• Object distance (dₒ) = 25.0 cm\n• Focal length (f) = 10.0 cm (concave mirror, so f > 0)\n\nStep 1: Use the mirror equation to calculate the image distance (dᵢ):\n1/f = 1/dₒ + 1/dᵢ\n1/10.0 = 1/25.0 + 1/dᵢ\n1/dᵢ = 1/10 - 1/25 = (5 - 2)/50 = 3/50 cm⁻¹\ndᵢ = 50/3 cm ≈ 16.67 cm\n\nStep 2: Calculate linear magnification (m):\nm = |dᵢ / dₒ| = (50/3) / 25 = 50 / 75 = 2/3 ≈ 0.67\n\nSince m = 0.67 < 1, the image is real, inverted, and diminished.',
    hint: 'Apply the mirror equation 1/f = 1/dₒ + 1/dᵢ to find dᵢ, then use m = |dᵢ/dₒ|.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: true,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q3',
    subject: 'Physics',
    topic: 'Measurement & Error Analysis: Systematic vs Random Errors',
    questionText: 'Which of the following statements distinguishes between random and systematic errors?',
    options: [
      'Systematic error makes measured values to be always above or always below the true value; whereas random error causes measured values to be sometimes above and sometimes below the true value.',
      'Systematic error can be minimized by taking several readings and averaging; whereas random error cannot be minimized.',
      'Random error makes measured values to be always above or always below the true value; whereas systematic error causes measured values to be sometimes above and sometimes below the true value.',
      'Random error is biased, whereas systematic error does not show bias.'
    ],
    correctOptionIndex: 0,
    explanation: '• Systematic Errors: Result from consistent biases in instruments (e.g. zero error, miscalibration) or experimental design. They consistently shift all measurements in one direction (always higher or always lower than true value) and cannot be eliminated by averaging.\n• Random Errors: Arise from unpredictable fluctuations in environmental conditions or human estimation limits. Measurements scatter unpredictably above and below the true value, and their effect can be minimized by calculating the arithmetic mean of multiple trials.',
    hint: 'Systematic errors shift measurements with a constant bias in one direction, while random errors fluctuate unpredictably above and below the true value.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q4',
    subject: 'Physics',
    topic: 'Vector Algebra: Unit Vectors',
    questionText: 'The unit vector in the direction of A = 3î + 4ĵ is ____.',
    options: [
      '(3/5)î + (4/5)ĵ',
      '2î - ĵ',
      '(3/2)î + (4/2)ĵ',
      'î + ĵ'
    ],
    correctOptionIndex: 0,
    explanation: 'Given vector A = 3î + 4ĵ.\n\nStep 1: Calculate the magnitude of vector A:\n|A| = √(Aₓ² + Aᵧ²) = √(3² + 4²) = √(9 + 16) = √25 = 5\n\nStep 2: Find the unit vector û in the direction of A:\nû = A / |A| = (3î + 4ĵ) / 5 = (3/5)î + (4/5)ĵ',
    hint: 'A unit vector is found by dividing the vector by its magnitude: û = A / |A|.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q5',
    subject: 'Physics',
    topic: 'Vector Algebra: Collinear & Parallel Vectors',
    questionText: 'Which of the following pair of vectors are collinear?',
    options: [
      '2î + 3ĵ and -4î - 6ĵ',
      '2î - 3ĵ and -4î - 6ĵ',
      'î + ĵ and -î + ĵ',
      '2î + 3ĵ and -4î + 6ĵ'
    ],
    correctOptionIndex: 0,
    explanation: 'Two vectors u and v are collinear (parallel or anti-parallel) if one vector is a scalar multiple of the other (v = k · u), meaning the ratio of their corresponding components is equal:\nvₓ / uₓ = vᵧ / uᵧ = k\n\nFor u = 2î + 3ĵ and v = -4î - 6ĵ:\n• x-component ratio: -4 / 2 = -2\n• y-component ratio: -6 / 3 = -2\n\nSince v = -2 · u, the vectors lie along the same straight line pointing in opposite directions (anti-parallel), and are therefore collinear.',
    hint: 'Two vectors are collinear if they are scalar multiples of each other (v = k · u).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q6',
    subject: 'Physics',
    topic: 'Two-Dimensional Kinematics: Horizontal Projectile Motion',
    questionText: 'A projectile is launched horizontally from the top of an 80.0 m high cliff with an initial speed of 30.0 m/s. Taking g = 10 m/s², what is the horizontal distance (range) from the base of the cliff to where the projectile strikes the ground?',
    options: [
      '120 m',
      '240 m',
      '60 m',
      '90 m'
    ],
    correctOptionIndex: 0,
    explanation: 'Given:\n• Initial vertical velocity (v₀ᵧ) = 0 m/s\n• Height of cliff (h) = 80.0 m\n• Horizontal velocity (vₓ) = 30.0 m/s (constant)\n• Acceleration due to gravity (g) = 10 m/s²\n\nStep 1: Calculate the time of flight (t):\nh = (1/2) · g · t²\n80 = (1/2) · (10) · t² = 5t²\nt² = 80 / 5 = 16\nt = 4.0 s\n\nStep 2: Calculate the horizontal range (R):\nR = vₓ · t = 30.0 m/s × 4.0 s = 120 m',
    hint: 'Calculate the time to fall h = 80 m using t = √(2h/g), then find horizontal range R = vₓ · t.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q7',
    subject: 'Physics',
    topic: 'Circular Motion: Centripetal Acceleration & Force Direction',
    questionText: 'A car moves along a circular horizontal track of radius 20 m at a constant speed of 10 m/s. What is the magnitude of its centripetal acceleration and the direction of the net force acting on the car?',
    options: [
      '5.0 m/s² directed radially toward the center of the circle',
      '5.0 m/s² directed tangentially along the path of motion',
      '0.5 m/s² directed radially away from the center',
      '10 m/s² directed radially toward the center of the circle'
    ],
    correctOptionIndex: 0,
    explanation: 'Given:\n• Radius of curvature (r) = 20 m\n• Linear speed (v) = 10 m/s\n\nStep 1: Calculate centripetal acceleration (a꜀):\na꜀ = v² / r = (10)² / 20 = 100 / 20 = 5.0 m/s²\n\nStep 2: Determine the force direction:\nIn uniform circular motion, acceleration is strictly perpendicular to the velocity vector and directed radially inward toward the center of the circle. By Newton\'s second law (F_net = m · a꜀), the net centripetal force is also directed radially toward the center.',
    hint: 'Centripetal acceleration is given by a꜀ = v² / r and always points radially toward the center.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q8',
    subject: 'Physics',
    topic: 'Newton\'s Laws & Friction: Inclined Applied Force',
    questionText: 'A block of mass m is placed on a horizontal surface. The coefficient of static friction between the block and the surface is μ. A force of magnitude F acts on the block pushing downward at an angle θ below the horizontal. The minimum magnitude of the force F required to slide the block on the surface is:',
    options: [
      'μmg / (cos θ - μ sin θ)',
      'μmg / (cos θ + μ sin θ)',
      'μmg / (cos θ - sin θ)',
      'μmg / (cos θ + sin θ)'
    ],
    correctOptionIndex: 0,
    explanation: 'Resolving forces acting on the block:\n1. Vertical forces in equilibrium (ΣFᵧ = 0):\n   N - mg - F sin θ = 0  =>  N = mg + F sin θ\n\n2. Horizontal driving force and maximum static friction:\n   The horizontal forward component is F cos θ.\n   The maximum static friction opposing motion is f_s(max) = μ · N = μ (mg + F sin θ).\n\n3. Setting driving force equal to maximum static friction for impending motion:\n   F cos θ = μ (mg + F sin θ)\n   F cos θ = μmg + μF sin θ\n   F (cos θ - μ sin θ) = μmg\n   F = μmg / (cos θ - μ sin θ)',
    hint: 'Because the force pushes downward at angle θ, normal force is N = mg + F sin θ. Then equate F cos θ = μ N.',
    difficulty: 'hard',
    points: 20,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q9',
    subject: 'Physics',
    topic: 'Impulse & Momentum: Elastic Reflection from a Wall',
    questionText: 'A ball of mass m moving with a speed v strikes a hard wall at an angle θ with the wall. It is reflected with the same speed at the same angle. If the ball is in contact with the wall for time t, then the average force acting on the wall is given by ____.',
    options: [
      '(2mv / t) sin θ',
      '(mv / t) cos θ',
      '(mv / t) sin θ',
      '(2mv / t) cos θ'
    ],
    correctOptionIndex: 0,
    explanation: 'Let the wall lie in the y-z plane and the normal to the wall be along the x-axis.\nGiven that θ is the angle with the wall (glancing angle):\n• The component of velocity parallel to the wall: v_parallel = v cos θ (remains unchanged after reflection: Δp_parallel = 0).\n• The component of velocity perpendicular to the wall: v_perp = v sin θ.\n• After elastic reflection, the perpendicular velocity reverses direction: v_perp\' = -v sin θ.\n\nChange in perpendicular momentum:\nΔp_perp = p_final - p_initial = -mv sin θ - (mv sin θ) = -2mv sin θ\n\nBy Newton\'s second and third laws, the average force exerted on the wall is:\nF_avg = |Δp| / t = (2mv / t) sin θ',
    hint: 'Since θ is the angle with the wall, the normal velocity component is v sin θ. Momentum change is 2mv sin θ.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q10',
    subject: 'Physics',
    topic: 'Work, Energy & Power: Work-Energy Theorem',
    questionText: 'According to the work-energy theorem, which of the following statements is correct?',
    options: [
      'work done by gravity on an object thrown upward and moving upward is negative.',
      'work done by tension on an object tied to a string and moving in a horizontal circle is negative.',
      'work done by gravity on an object thrown downward is negative.',
      'work done by gravitational force on a satellite moving around the earth in a circular orbit is positive.'
    ],
    correctOptionIndex: 0,
    explanation: '• Work is defined by W = F · d · cos θ.\n• When an object is thrown upward and moving upward, its displacement d is directed upward while the gravitational force F_g = mg acts downward (θ = 180°).\n• Therefore, W_gravity = mg · d · cos(180°) = -mgd < 0 (negative work), which decreases kinetic energy as potential energy increases.\n• For objects moving in circular orbits (tension in horizontal circle, gravity on circular satellites), force is perpendicular to displacement (θ = 90°, cos 90° = 0), so work done is zero.',
    hint: 'When force and displacement act in opposite directions (θ = 180°), work done is negative.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q11',
    subject: 'Physics',
    topic: 'Wave Motion: Superposition & Standing Waves',
    questionText: 'Standing wave is formed when two identical waves travelling in opposite directions in the same medium interfere with each other. If y1 and y2 are the interfering waves and y = y1 + y2 is the resulting standing wave, which of the following is a correct combination?',
    options: [
      'y1 = A sin(kx - ωt), y2 = A sin(kx + ωt), y = 2A sin(kx) cos(ωt)',
      'y1 = A sin(kx - ωt), y2 = A sin(kx + ωt), y = A sin(kx) cos(2ωt)',
      'y1 = A sin(kx - ωt), y2 = -A sin(kx - ωt), y = 2A sin(kx) cos(ωt)',
      'y1 = A sin(kx - ωt), y2 = A cos(kx + ωt), y = 2A sin(kx - ωt)'
    ],
    correctOptionIndex: 0,
    explanation: 'Using the trigonometric identity: sin α + sin β = 2 sin((α + β)/2) cos((α - β)/2).\n\nFor two identical waves travelling in opposite directions:\ny1 = A sin(kx - ωt)  (travelling in +x direction)\ny2 = A sin(kx + ωt)  (travelling in -x direction)\n\nSuperposition yields:\ny = y1 + y2 = A [sin(kx - ωt) + sin(kx + ωt)]\ny = 2A sin(((kx - ωt) + (kx + ωt)) / 2) cos(((kx - ωt) - (kx + ωt)) / 2)\ny = 2A sin(kx) cos(-ωt) = 2A sin(kx) cos(ωt)\n\nThis describes a standing wave where the spatial amplitude envelope 2A sin(kx) oscillates harmonically with frequency ω.',
    hint: 'Adding sin(kx - ωt) + sin(kx + ωt) gives 2 sin(kx) cos(ωt) using the sum-to-product trigonometric identity.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q12',
    subject: 'Physics',
    topic: 'Physical Optics: Young\'s Double Slit Interference',
    questionText: 'A Young double slit experiment consists of two narrow slits separated by 0.06 mm and 1.2 m away from a screen. If the slits are illuminated with a light of wavelength 563 nm, the location of the fourth bright fringe on the screen is:',
    options: [
      '4.5 cm',
      '0.394 cm',
      '0.45 cm',
      '3.94 cm'
    ],
    correctOptionIndex: 0,
    explanation: 'Given:\n• Slit separation (d) = 0.06 mm = 6.0 × 10⁻⁵ m\n• Distance to screen (L) = 1.2 m\n• Wavelength (λ) = 563 nm = 563 × 10⁻⁹ m\n• Order of bright fringe (m) = 4\n\nFormula for the position of the m-th bright fringe:\ny_m = (m · λ · L) / d\n\nCalculate y₄:\ny₄ = (4 × 563 × 10⁻⁹ m × 1.2 m) / (6.0 × 10⁻⁵ m)\ny₄ = (2702.4 × 10⁻⁹) / (6.0 × 10⁻⁵)\ny₄ = 450.4 × 10⁻⁴ m = 0.04504 m = 4.504 cm ≈ 4.5 cm',
    hint: 'Use y_m = (m · λ · L) / d. Convert d = 0.06 × 10⁻³ m, λ = 563 × 10⁻⁹ m, and express result in cm.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q13',
    subject: 'Physics',
    topic: 'Electrostatics: Electric Dipole in Uniform Field',
    questionText: 'An electric dipole consists of a negative charge -q placed at (-2, -2) and a positive charge +q at (2, 2). The dipole is placed in a uniform electric field E directed in the positive x direction. If the dipole axis makes an angle θ with the field, which of the following is true about the dipole?',
    options: [
      'The field rotates the dipole in the direction of decreasing the angle θ, until the dipole becomes parallel to the field.',
      'The field rotates it in the direction of increasing the angle θ, until the dipole is perpendicular to the field.',
      'It is in both translational and rotational equilibrium.',
      'It travels in the direction of the electric field.'
    ],
    correctOptionIndex: 0,
    explanation: '1. The electric dipole moment p points from negative charge (-q at (-2, -2)) to positive charge (+q at (2, 2)).\n2. In a uniform electric field E, equal and opposite electrostatic forces act on the two charges (F_+ = +qE, F_- = -qE), so the net translational force is zero (F_net = 0).\n3. However, these forces create a net torque: τ = p × E, with magnitude τ = pE sin θ.\n4. This restoring torque acts to align the dipole moment p parallel with the electric field E, which decreases the angle θ toward 0° (stable equilibrium position).',
    hint: 'A uniform electric field exerts zero net force on a dipole but produces a torque τ = p × E that rotates it to align parallel with the field.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q14',
    subject: 'Physics',
    topic: 'Electrostatics: Electric Potential of a Point Charge',
    questionText: 'The electric potential at a distance of 2 cm from a -1.6 × 10⁻⁹ C point charge is:',
    options: [
      '-720 V',
      '-14.4 V',
      '720 V',
      '4.4 V'
    ],
    correctOptionIndex: 0,
    explanation: 'Given:\n• Point charge (q) = -1.6 × 10⁻⁹ C\n• Distance (r) = 2 cm = 0.02 m = 2.0 × 10⁻² m\n• Coulomb constant (k) = 9.0 × 10⁹ N·m²/C²\n\nFormula for electric potential due to a point charge:\nV = k · q / r\nV = (9.0 × 10⁹ N·m²/C² × -1.6 × 10⁻⁹ C) / 0.02 m\nV = -14.4 / 0.02 = -720 V',
    hint: 'Electric potential is a scalar V = k q / r. Don\'t forget to include the negative sign of the charge.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q15',
    subject: 'Physics',
    topic: 'Current Electricity: Series-Parallel Resistor Circuits',
    questionText: 'Two resistors R1 = 1 Ω and R2 = 4 Ω are connected in parallel to each other and their combination is connected in series with a third resistor R3 = 2 Ω. The whole combination is connected to a voltage source of potential difference 14 V. The potential difference across R1 is:',
    options: [
      '4 V',
      '10 V',
      '14 V',
      '5 V'
    ],
    correctOptionIndex: 0,
    explanation: 'Step 1: Calculate equivalent resistance of parallel resistors R1 and R2:\nR_parallel = (R1 · R2) / (R1 + R2) = (1 × 4) / (1 + 4) = 4/5 = 0.8 Ω\n\nStep 2: Calculate total circuit resistance:\nR_total = R_parallel + R3 = 0.8 Ω + 2.0 Ω = 2.8 Ω\n\nStep 3: Calculate total circuit current (I_total):\nI_total = V_source / R_total = 14 V / 2.8 Ω = 5.0 A\n\nStep 4: Calculate potential difference across the parallel combination (across R1):\nV_R1 = I_total · R_parallel = 5.0 A × 0.8 Ω = 4.0 V',
    hint: 'Find R_parallel = 0.8 Ω, R_total = 2.8 Ω, total current I = 14/2.8 = 5 A, then V_parallel = 5 × 0.8 = 4 V.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  }
];
