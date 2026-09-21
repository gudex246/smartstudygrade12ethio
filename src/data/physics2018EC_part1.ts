import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2018_EC_PART1: Question[] = [
  {
    id: 'phy-2018-q1',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Work, Energy & Power: Work Done by a Constant Force Vector',
    questionText: '1. A 25 kg box is dragged on a rough horizontal x-y plane from r₁ = (1.3 i + 1.4 j) m to r₂ = (8.3 i + 2.9 j) m by a force F = (4 i - 6 j) N. How much work is done by the force?',
    options: [
      '19.0 J',
      '37.0 J',
      '15.8 J',
      '-75.6 J'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Calculate the displacement vector Δr from initial position r₁ to final position r₂:
Δr = r₂ - r₁
Δr = (8.3 - 1.3)i + (2.9 - 1.4)j = (7.0 i + 1.5 j) m.

Step 2: Recall the definition of work done by a constant vector force:
W = F · Δr = (F_x * Δx) + (F_y * Δy).

Step 3: Compute the scalar (dot) product:
W = (4)(7.0) + (-6)(1.5)
W = 28.0 - 9.0 = 19.0 J.

Therefore, the work done by the force is 19.0 J.`,
    hint: 'Find the displacement vector Δr = r₂ - r₁, then evaluate the dot product W = F · Δr.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q2',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Current Electricity: Resistors in Series and Parallel Combinations',
    questionText: '2. Two resistors with resistance of 3 Ω and 6 Ω are connected in parallel, and their combination is connected in series to a 4 Ω resistor. If the overall combination of the resistors is connected to a 12 V source, how much is the voltage drop across the 6 Ω resistor?',
    options: [
      '8 V',
      '4 V',
      '2 V',
      '12 V'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Find the equivalent resistance of the parallel branch (3 Ω and 6 Ω):
1 / R_p = 1/3 + 1/6 = 3/6 = 1/2  ⟹  R_p = 2 Ω.

Step 2: Calculate the total equivalent resistance of the entire circuit:
R_eq = R_p + R_series = 2 Ω + 4 Ω = 6 Ω.

Step 3: Find the total current supplied by the 12 V battery:
I_total = V / R_eq = 12 V / 6 Ω = 2 A.

Step 4: Determine the potential difference (voltage drop) across the parallel branch:
V_p = I_total * R_p = (2 A) * (2 Ω) = 4 V.

Since components in parallel experience the exact same voltage drop, the voltage across the 6 Ω resistor is 4 V.`,
    hint: 'First find the equivalent resistance of the 3 Ω and 6 Ω parallel pair (2 Ω), then find total circuit current and apply V = I * R_p.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q3',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: "Newton's Laws of Motion: Second Law of Motion",
    questionText: '3. A constant force of 250.0 N is applied horizontally on a box that lays on a horizontal frictionless surface. If the box accelerates with 4.0 m/s², what is its mass?',
    options: [
      '125.0 kg',
      '41.7 kg',
      '10.4 kg',
      '62.5 kg'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Identify the known parameters:
• Applied horizontal force, F = 250.0 N
• Acceleration, a = 4.0 m/s²
• The surface is frictionless, so net force F_net = F = 250.0 N.

Step 2: Apply Newton's Second Law of Motion:
F_net = m * a  ⟹  m = F_net / a.

Step 3: Calculate the mass:
m = 250.0 N / 4.0 m/s² = 62.5 kg.`,
    hint: "Use Newton's second law: m = F / a.",
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q4',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Rotational Motion & Dynamics: Center of Mass of a 2D System',
    questionText: '4. Four masses are placed on the corners of a square on the x-y plane of side 50 cm, where m₁ = m₂ = 200 g and m₃ = m₄ = 500 g. If m₁ is at (0, 0), m₂ at (0, 50), m₃ at (50, 50), and m₄ at (50, 0), where is the center of mass (x_cm, y_cm) of the system?',
    options: [
      '(25, 37.14) cm',
      '(25, 25) cm',
      '(37.14, 50) cm',
      '(35.71, 25) cm'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Determine the total mass M of the four-particle system:
M = m₁ + m₂ + m₃ + m₄ = 200 + 200 + 500 + 500 = 1400 g.

Step 2: Coordinates of the four corner particles:
• m₁ = 200 g at (0, 0)
• m₂ = 200 g at (0, 50)
• m₃ = 500 g at (50, 50)
• m₄ = 500 g at (50, 0)

Step 3: Calculate x_cm:
x_cm = (m₁*x₁ + m₂*x₂ + m₃*x₃ + m₄*x₄) / M
x_cm = (200*0 + 200*0 + 500*50 + 500*50) / 1400
x_cm = (0 + 0 + 25000 + 25000) / 1400 = 50000 / 1400 ≈ 35.71 cm.

Step 4: Calculate y_cm:
y_cm = (m₁*y₁ + m₂*y₂ + m₃*y₃ + m₄*y₄) / M
y_cm = (200*0 + 200*50 + 500*50 + 500*0) / 1400
y_cm = (0 + 10000 + 25000 + 0) / 1400 = 35000 / 1400 = 25.0 cm.

Therefore, the center of mass is located at (35.71, 25) cm.`,
    hint: 'Use the center of mass formula: x_cm = ∑(m_i * x_i)/M and y_cm = ∑(m_i * y_i)/M.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q5',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Physics & Society: Professional Scientific Associations',
    questionText: '5. The Ethiopian Physical Society (EPS) was established by interested Ethiopian physics professionals to:',
    options: [
      'Prepare physics curriculum under the ministry of education directives.',
      'Contribute its own share to promote physics education and research.',
      'Take part in election and participate in government formation.',
      'Monitor and supervise the curriculum implementation in Ethiopian high schools.'
    ],
    correctOptionIndex: 1,
    explanation: `The Ethiopian Physical Society (EPS) is a non-governmental, non-profit professional organization founded to promote physics education, foster high-level physical research, advance scientific literacy, and encourage collaboration among physicists and science educators across Ethiopia. Curriculum design and school supervision are direct mandates of the Ministry of Education, not of professional academic societies.`,
    hint: 'Professional societies exist to advance education, research, and scientific culture in their discipline.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q6',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Electromagnetism: Magnetic Field of a Current Loop & Right-Hand Rule',
    questionText: '6. A rectangular wire loop is connected to a 3 V battery. What will happen to the direction of the magnetic field inside the loop if the terminals of the battery are reversed?',
    options: [
      'It will change from into the plane to out of the plane.',
      'It will change from out of the plane to into the plane.',
      'It will change from counterclockwise to clockwise.',
      'It will change from clockwise to counterclockwise.'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Analyze the current flow using the initial battery connection:
In the initial orientation, the positive terminal is connected such that conventional current flows clockwise around the loop. By the right-hand grip rule, a clockwise current produces a magnetic field directed into the plane of the page inside the loop.

Step 2: Reversing the battery terminals:
Reversing the battery terminals reverses the polarity and reverses the direction of current flow to counterclockwise.

Step 3: Determine the new magnetic field direction:
According to the right-hand grip rule, curling fingers counterclockwise around the perimeter causes the thumb to point perpendicularly outward, directed out of the plane.
Hence, the magnetic field changes from into the plane to out of the plane.`,
    hint: 'Reversing current polarity reverses the resulting magnetic field direction (Right-Hand Rule).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q7',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Electromagnetism: Biot-Savart Law & Magnetic Field of a Long Straight Wire',
    questionText: '7. The magnetic field created by a current-carrying wire at a point from the wire will:',
    options: [
      'Increase exponentially with the increase in the magnitude of the current.',
      'Decrease linearly with the increase in the magnitude of the current.',
      'Decrease exponentially with the increase in the magnitude of the current.',
      'Increase linearly with the increase in the magnitude of the current.'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: State Ampere's Law / Biot-Savart Law for the magnetic field B at a perpendicular distance r from a long, straight current-carrying wire:
B = (μ₀ * I) / (2π * r).

Step 2: Analyze the relationship between B and the current I:
Since μ₀, 2, π, and the distance r are constant, B is directly proportional to I (B ∝ I).

Step 3: Conclusion:
An increase in the magnitude of the current causes a directly linear increase in the magnetic field strength.`,
    hint: 'B = (μ₀ * I) / (2π * r), which shows direct linear proportionality to current I.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q8',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Nuclear Physics: Radioactive Decay Constant & Half-Life',
    questionText: '8. The iodine isotope ¹³¹I, which has an eight-day half-life, is used in nuclear medicine. What is the decay constant of the isotope? (given ln 2 = 0.693)',
    options: [
      '5.64 day⁻¹',
      '8.66 × 10⁻² day⁻¹',
      '1.17 × 10⁻² day⁻¹',
      '12.5 day⁻¹'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: State the relationship between radioactive half-life T_{1/2} and the decay constant λ:
T_{1/2} = ln(2) / λ  ⟹  λ = ln(2) / T_{1/2}.

Step 2: Substitute the given values:
• ln(2) = 0.693
• T_{1/2} = 8 days

Step 3: Calculate λ:
λ = 0.693 / 8 days
λ = 0.086625 day⁻¹ = 8.66 × 10⁻² day⁻¹.`,
    hint: 'Use the formula λ = ln(2) / T_{1/2} = 0.693 / 8.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q9',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Kinematics: 1D Relative Velocity',
    questionText: '9. The velocity of car B with respect to a passenger in car A is 80 km/hr towards West. If the velocity of car A with respect to the ground is 30 km/hr towards East, what would be the velocity of car B with respect to the ground?',
    options: [
      '50 km/hr towards West',
      '50 km/hr towards East',
      '110 km/hr towards East',
      '110 km/hr towards West'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Set up a 1-dimensional coordinate system:
Let East be the positive direction (+x) and West be the negative direction (-x).

Step 2: Write the given relative velocities:
• Velocity of car A relative to ground: v_{A/G} = +30 km/h
• Velocity of car B relative to car A: v_{B/A} = -80 km/h

Step 3: Apply the relative velocity vector addition rule:
v_{B/G} = v_{B/A} + v_{A/G}
v_{B/G} = -80 km/h + 30 km/h = -50 km/h.

Step 4: Interpret the result:
The negative sign indicates that car B travels at 50 km/hr towards West relative to the ground.`,
    hint: 'Relative velocity equation: v_{B/G} = v_{B/A} + v_{A/G}. Taking East as positive: -80 + 30 = -50 (West).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q10',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Rotational Kinematics: Angular Acceleration & Velocity Directions',
    questionText: '10. Which one of the following statements correctly describes the rotation of an object around a fixed axis?',
    options: [
      'Angular acceleration is perpendicular to the plane of rotation and in the same direction as angular velocity if the rotation rate is increasing.',
      'Particles in the object that are closer to the axis will have different angular displacement from particles that are far from it.',
      'Particles in the object closer to the axis will have larger angular velocity than particles that are farther from the axis.',
      'Particles that are closer to the axis will have similar translational displacement from particles that are far from it.'
    ],
    correctOptionIndex: 0,
    explanation: `For a rigid body rotating about a fixed axis:
1. By the right-hand rule, the angular velocity vector ω and angular acceleration vector α lie along the axis of rotation, which is perpendicular to the plane of rotation.
2. If the rotation rate (angular speed) is speeding up (increasing), angular acceleration α points in the same direction as angular velocity ω. If slowing down, α points opposite to ω.
3. Every particle on a rigid body undergoes the identical angular displacement Δθ and has the same angular velocity ω, regardless of their radial distance r from the axis (though their linear/tangential quantities s = rΔθ and v = rω vary directly with r).

Therefore, option A is the only correct statement.`,
    hint: 'For speeding-up rotation, the angular acceleration vector points along the axis in the exact same direction as the angular velocity vector.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q11',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Digital Electronics: Logic Gates & Truth Tables',
    questionText: '11. The logic circuit consists of an OR gate followed by a NAND gate, where inputs A and B feed the OR gate, and input B together with the OR gate output feed the NAND gate to produce output C. Which of the following represents the correct truth table for the circuit?',
    options: [
      'A: 0,0->1 | 0,1->0 | 1,0->0 | 1,1->1',
      'B: 0,0->0 | 0,1->1 | 1,0->0 | 1,1->1',
      'C: 0,0->0 | 0,1->1 | 1,0->1 | 1,1->0',
      'D: 0,0->1 | 0,1->0 | 1,0->1 | 1,1->0'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Write the Boolean expression for the circuit:
• The OR gate output is: X = A OR B (A + B).
• The NAND gate receives X and input B.
• The final output is: C = NOT(X AND B) = NOT((A + B) · B).

Step 2: Simplify using Boolean algebra:
By absorption law, (A + B) · B = B.
Thus, C = NOT(B) = B'.

Step 3: Evaluate for all four input combinations:
• A = 0, B = 0: X = 0 + 0 = 0. C = NAND(0, 0) = 1.
• A = 0, B = 1: X = 0 + 1 = 1. C = NAND(1, 1) = 0.
• A = 1, B = 0: X = 1 + 0 = 1. C = NAND(1, 0) = 1.
• A = 1, B = 1: X = 1 + 1 = 1. C = NAND(1, 1) = 0.

The resulting output column C is (1, 0, 1, 0), which matches table D.`,
    hint: 'Trace the gate outputs step by step: (A+B) AND B simplifies to B, so the NAND gate produces NOT(B).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q12',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Wave Optics: Primary Colors of Light',
    questionText: '12. Which one of the following sets contains only primary colors of light?',
    options: [
      '{red, blue, orange}',
      '{blue, green, red}',
      '{green, blue, black}',
      '{red, green, yellow}'
    ],
    correctOptionIndex: 1,
    explanation: `In optics and color science, the three primary colors of visible light in the additive color mixing model are Red, Green, and Blue (RGB).
• Combining red and green yields yellow (secondary color).
• Combining green and blue yields cyan (secondary color).
• Combining red and blue yields magenta (secondary color).
• Combining all three at full intensity produces white light.

Therefore, {blue, green, red} contains only primary additive colors.`,
    hint: 'Think of standard RGB display technology: Red, Green, and Blue.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q13',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Kinematics: Velocity from Displacement-Time Graphs',
    questionText: '13. A displacement-time graph shows a car moving along a straight line. From t = 0 to t = 4 s, the displacement increases linearly from 0 m to 80 m. From t = 4 s to t = 10 s, the displacement remains essentially constant at 80 m. What are the magnitudes of the velocities of the car for the first 4 seconds and the last 4 seconds, respectively?',
    options: [
      '0 m/s and 20 m/s',
      '20 m/s and 0 m/s',
      '20 m/s and 20 m/s',
      '10 m/s and 0 m/s'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: The slope of a displacement versus time graph represents instantaneous velocity:
v = Δx / Δt.

Step 2: For the first 4 seconds (from t = 0 to t = 4 s):
x(0) = 0 m, x(4) = 80 m
v₁ = (80 - 0) / (4 - 0) = 80 / 4 = 20 m/s.

Step 3: For the last interval (t = 6 to 10 s):
The graph is a horizontal plateau where displacement does not change (Δx = 0 m).
v₂ = Δx / Δt = 0 m / 4 s = 0 m/s.

Hence, the velocities are 20 m/s and 0 m/s respectively.`,
    hint: 'Slope of displacement-time graph = velocity. Slope = 80/4 = 20 m/s initially, and 0 when the line is horizontal.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q14',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Semiconductor Devices: Schematic Symbols of Transistors',
    questionText: '14. Which of the following describes the correct schematic symbol for an NPN bipolar junction transistor (BJT) with its labelled terminals?',
    options: [
      'Base on the middle straight line, Collector at the top lead, and Emitter at the bottom lead with an arrow pointing OUTWARD.',
      'Base at the bottom, Collector at the top, and Emitter with an arrow pointing INWARD toward the base.',
      'Emitter on the middle straight bar, with Collector having an arrow pointing outward.',
      'Base on the middle bar, with an arrow on the Collector pointing inward.'
    ],
    correctOptionIndex: 0,
    explanation: `In standard electronics schematic diagrams for a Bipolar Junction Transistor (BJT):
• The flat vertical/middle bar represents the Base (B).
• The slanted lead without an arrow represents the Collector (C).
• The slanted lead containing an arrow represents the Emitter (E).
• For an NPN transistor, the arrow on the Emitter points OUTWARD (mnemonic: "Not Pointing iN"). For a PNP transistor, the arrow points inward.

Therefore, option A correctly defines the NPN transistor symbol.`,
    hint: 'In an NPN transistor, the emitter arrow points outward (Not Pointing iN).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q15',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Fluid Mechanics: Continuity Equation and Volumetric Flow Rate',
    questionText: '15. A water hose of diameter 4 cm is connected to a tap of diameter 6 cm. The water flow rate from the tap is 1.57 × 10⁻⁴ m³/s. What will be the speed of the water in the hose?',
    options: [
      '0.125 m/s',
      '0.393 m/s',
      '0.174 m/s',
      '0.560 m/s'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: By the equation of continuity for an incompressible fluid:
The volumetric flow rate Q remains constant throughout the pipeline:
Q = A_hose * v_hose = 1.57 × 10⁻⁴ m³/s.

Step 2: Calculate the cross-sectional area of the hose:
• Hose diameter d = 4 cm = 0.04 m  ⟹  radius r = d / 2 = 0.02 m.
• Area A_hose = π * r² = 3.1416 * (0.02)² = 3.1416 * 0.0004 = 1.2566 × 10⁻³ m².

Step 3: Solve for the flow speed v_hose:
v_hose = Q / A_hose
v_hose = (1.57 × 10⁻⁴ m³/s) / (1.2566 × 10⁻³ m²) ≈ 0.12494 m/s ≈ 0.125 m/s.`,
    hint: 'Use Q = A * v. With hose radius r = 0.02 m, A = π(0.02)^2 = 1.257 × 10^-3 m^2, so v = Q / A = 0.125 m/s.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
