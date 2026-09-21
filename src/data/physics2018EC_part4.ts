import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2018_EC_PART4: Question[] = [
  {
    id: 'phy-2018-q46',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Kinematics: Equations of Uniformly Accelerated Rectilinear Motion',
    questionText: '46. Consider a car performing a motion with constant acceleration a starting from position x₀ at time t = 0 with initial velocity v₀. If v and x represent velocity and position at time t, which one of the following equations correctly governs the motion of the car?',
    options: [
      'x = -x₀ + 2(v + v₀) / t',
      'x = x₀ + ((v + v₀) / 2) t',
      'x = x₀ + (v² + v₀²) / (2a)',
      'x = x₀ + ((v - v₀) / 2) t'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Under uniform (constant) acceleration, the average velocity v_avg over a time interval t is given by the arithmetic mean of initial velocity v₀ and final velocity v:
v_avg = (v₀ + v) / 2.

Step 2: Displacement Δx during this time interval is:
Δx = x - x₀ = v_avg * t = ((v + v₀) / 2) * t.

Step 3: Solve for final position x:
x = x₀ + ((v + v₀) / 2) * t.

Therefore, equation B is a fundamental kinematic equation for uniform acceleration.`,
    hint: 'Average velocity for constant acceleration is (v + v₀)/2, so position is x = x₀ + ((v + v₀)/2)t.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q47',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Vectors: Graphical Representation of Vectors',
    questionText: '47. If an arrow is drawn to scale to describe a given physical vector, then its:',
    options: [
      'Length corresponds to the vector magnitude.',
      'Tail stands for the terminal point of the vector.',
      'Length corresponds to the vector direction.',
      'Head represents the initial point of the vector.'
    ],
    correctOptionIndex: 0,
    explanation: `In standard graphical vector representation:
• An arrow is used where the tail represents the initial starting point (origin) and the arrow tip (head) represents the terminal point.
• The direction in which the arrow points specifies the vector direction.
• The scaled geometric length of the arrow line segment is directly proportional to the vector's numerical magnitude.

Therefore, statement A is correct.`,
    hint: 'In a vector diagram, the arrow length represents magnitude, and the arrowhead indicates direction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q48',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Simple Machines: Identification and Classification',
    questionText: '48. From the given lists of machines, which one contains ONLY simple machines?',
    options: [
      'Gas-cylinder, Wedge, Screw, Lever',
      'Compound pulley, Wheel and axle, Seat belt, Inclined plane',
      'Washing machine, Car engine, Wedge, Lever',
      'Inclined plane, Screw, Wheel and axle, Wedge'
    ],
    correctOptionIndex: 3,
    explanation: `In classical mechanics, the six classical elementary simple machines that provide mechanical advantage without using an internal motor/engine are:
1. The Lever
2. The Wheel and axle
3. The Pulley
4. The Inclined plane
5. The Wedge
6. The Screw

In option D: {Inclined plane, Screw, Wheel and axle, Wedge} are all classical simple machines.
(In the other options, gas-cylinders, seat belts, washing machines, and car engines are storage containers, safety restraints, or complex motorized compound machines).`,
    hint: 'The six classical simple machines are lever, pulley, wheel and axle, inclined plane, wedge, and screw.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q49',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Wave Motion: The Fundamental Wave Speed Equation',
    questionText: '49. A traveling wave has a wave speed v, wavelength λ, period T, and frequency f. Which equation correctly states the universal wave equation?',
    options: [
      'v = λT',
      'f = 1 / (λv)',
      'v = λf',
      'T = 1 / (λf)'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: A periodic wave travels a distance equal to one wavelength λ in a time interval equal to one period T:
Wave speed v = distance / time = λ / T.

Step 2: Since frequency f is the reciprocal of period (f = 1 / T):
v = λ * (1 / T) = λ * f.

Therefore, the universal wave equation is v = λf.`,
    hint: 'Wave speed equals wavelength times frequency: v = λf.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q50',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Thermodynamics & Calorimetry: Heat Transfer & Phase Change (Ice Melting)',
    questionText: '50. A 200 g piece of ice at 0°C is placed in a certain amount of liquid water at 20°C in an insulated calorimeter of negligible heat capacity. What is the minimum mass of water required to completely melt all the ice into water at 0°C? (Latent heat of fusion of ice L_f = 3.33 × 10⁵ J/kg, specific heat capacity of water c_w ≈ 4190 J/(kg·°C))',
    options: [
      '666 g',
      '200 g',
      '400 g',
      '793 g'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Calculate the heat Q_gain required to completely melt 200 g (0.200 kg) of ice at 0°C:
Q_gain = m_ice * L_f
Q_gain = 0.200 kg * 3.33 × 10⁵ J/kg = 66,600 J.

Step 2: In order to find the MINIMUM mass of water, the water must cool all the way down from 20°C to 0°C, releasing:
Q_lost = m_water * c_w * ΔT
Q_lost = m_water * 4190 J/(kg·°C) * (20°C - 0°C)
Q_lost = m_water * 83,800 J/kg.

Step 3: Apply the Principle of Conservation of Energy (heat gained = heat lost):
66,600 J = m_water * 83,800 J/kg
m_water = 66,600 / 83,800 ≈ 0.7947 kg ≈ 793 g.

Therefore, the minimum mass of water needed is approximately 793 g.`,
    hint: 'Equate heat needed to melt ice (m_ice * L_f = 0.2 * 3.33×10^5 = 66,600 J) to heat lost by cooling water (m_w * c_w * 20).',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q51',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Work, Energy & Conservative vs. Non-Conservative Forces',
    questionText: '51. A conservative force differs from a non-conservative force in that the work done by a:',
    options: [
      'Conservative force along a closed path is non-zero unlike that by non-conservative force.',
      'Conservative force is path independent unlike that by non-conservative one.',
      'Non-conservative force is path independent unlike that by the conservative one.',
      'Non-conservative force along a closed path is zero unlike that by non-conservative force.'
    ],
    correctOptionIndex: 1,
    explanation: `In physics:
• A force is conservative if the work done by it in moving an object between two points depends ONLY on the initial and final positions and is completely independent of the path taken (e.g., gravity, electrostatic force, ideal spring force).
• Consequently, the work done by a conservative force along any closed round-trip path is strictly zero: ∮ F · dr = 0.
• In contrast, the work done by a non-conservative force (such as kinetic friction or air drag) is path dependent, dissipates mechanical energy as heat, and is non-zero over a closed loop.`,
    hint: 'Work done by a conservative force depends only on initial and final positions (path independent).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q52',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Kinematics: Multi-Stage Motion & Average Velocity Calculation',
    questionText: '52. Starting from rest, a car accelerates uniformly for 400 m, then continues for 600 m with constant velocity. It then decelerates uniformly at 1 m/s² until it stops after traveling for 200 m. What is the average velocity for the entire trip?',
    options: [
      '20.0 m/s',
      '6.5 m/s',
      '13.3 m/s',
      '10.0 m/s'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Calculate total displacement:
d_total = d₁ + d₂ + d₃ = 400 m + 600 m + 200 m = 1200 m.

Step 2: Analyze stage 3 (deceleration to rest from speed v with a = -1 m/s² over d₃ = 200 m):
v_final² = v² + 2*a*d₃
0 = v² + 2*(-1)*(200)  ⟹  v² = 400  ⟹  v = 20 m/s.
Time for stage 3: t₃ = (v_final - v) / a = (0 - 20) / (-1) = 20 s.

Step 3: Analyze stage 2 (cruising at constant velocity v = 20 m/s over d₂ = 600 m):
t₂ = d₂ / v = 600 m / 20 m/s = 30 s.

Step 4: Analyze stage 1 (accelerating uniformly from rest to 20 m/s over d₁ = 400 m):
Average speed in stage 1 is (0 + 20) / 2 = 10 m/s.
t₁ = d₁ / v_avg1 = 400 m / 10 m/s = 40 s.

Step 5: Calculate total travel time and overall average velocity:
t_total = t₁ + t₂ + t₃ = 40 s + 30 s + 20 s = 90 s.
Average velocity = d_total / t_total = 1200 m / 90 s = 40 / 3 ≈ 13.33 m/s.`,
    hint: 'Find the cruising speed from the stopping stage (v = 20 m/s). Then find times: t₁ = 40 s, t₂ = 30 s, t₃ = 20 s. Total time = 90 s. v_avg = 1200 / 90 = 13.3 m/s.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q53',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Vectors: Vector Addition & Resultant Displacement',
    questionText: '53. If a student walks 100 m due 37° North of East and then 120 m directly towards South, what is the net displacement of the student? (take cos 37° = 0.8, sin 37° = 0.6)',
    options: [
      '220 m 53° North of East',
      '100 m 53° North of East',
      '220 m 37° South of East',
      '100 m 37° South of East'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Resolve the first displacement vector d₁ = 100 m at 37° North of East into rectangular components:
• d₁x = 100 * cos(37°) = 100 * 0.8 = 80 m (East)
• d₁y = 100 * sin(37°) = 100 * 0.6 = +60 m (North)

Step 2: Resolve the second displacement vector d₂ = 120 m South:
• d₂x = 0 m
• d₂y = -120 m (South)

Step 3: Calculate the net resultant displacement components:
• R_x = d₁x + d₂x = 80 m + 0 m = 80 m
• R_y = d₁y + d₂y = 60 m - 120 m = -60 m

Step 4: Compute magnitude and direction of resultant R:
• Magnitude: |R| = √[R_x² + R_y²] = √[80² + (-60)²] = √[6400 + 3600] = √10000 = 100 m.
• Direction: tan(θ) = |R_y| / R_x = 60 / 80 = 0.75  ⟹  θ = 37° South of East.

Therefore, the displacement is 100 m at 37° South of East.`,
    hint: 'Resolve into components: x = 80 m East, y = 60 - 120 = -60 m (60 m South). Resultant = √(80² + 60²) = 100 m at 37° South of East.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q54',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Simple Machines: Mechanical Advantage of a Compound Pulley System',
    questionText: '54. A compound block-and-tackle pulley system consisting of two movable pulleys and two fixed pulleys is used to lift a 400 N object. If frictional resistance between the pulleys and rope is negligible, what is the ideal mechanical advantage (IMA) of the pulley system?',
    options: [
      '4',
      '2',
      '5',
      '1'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Determine the mechanical advantage of a block-and-tackle pulley system:
In an ideal frictionless pulley system, the Ideal Mechanical Advantage (IMA) equals the total number n of rope segments directly supporting the movable block and load.

Step 2: Count supporting strands:
With two movable pulleys and two fixed pulleys, the continuous rope loops under both movable pulleys, providing exactly 4 supporting strands of rope carrying the 400 N load.

Step 3: Conclusion:
IMA = 4.
Each supporting strand supports 100 N of tension, so an effort of only 100 N is needed to raise the 400 N load.`,
    hint: 'For a block and tackle with 2 movable and 2 fixed pulleys, 4 strands support the movable block, giving a mechanical advantage of 4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q55',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: "Fluid Statics: Archimedes' Principle & Buoyancy",
    questionText: '55. The net upward force that an object fully or partially immersed in a fluid experiences is known as the:',
    options: [
      'Weight of the object.',
      'Turbulent force.',
      'Buoyant force.',
      'Force of the fluid.'
    ],
    correctOptionIndex: 2,
    explanation: `According to Archimedes' Principle:
Any body completely or partially submerged in a fluid at rest experiences an upward hydrostatic force called the buoyant force (or upthrust).
The magnitude of this buoyant force is exactly equal to the weight of the fluid displaced by the submerged portion of the object:
F_b = ρ_fluid * V_displaced * g.`,
    hint: "The upward force exerted by a fluid on an immersed body is called the buoyant force (Archimedes' principle).",
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q56',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Magnetism: Magnetic Field Lines Between Opposite Magnetic Poles',
    questionText: '56. The magnetic field lines between two facing bar magnets are partially drawn as continuous lines leaving pole L and entering pole R. The two poles of the magnets indicated by L and R respectively are:',
    options: [
      'North and South poles.',
      'North and North poles.',
      'South and North poles.',
      'South and South poles.'
    ],
    correctOptionIndex: 0,
    explanation: `By standard physical convention:
• Magnetic field lines outside a permanent magnet always emerge from the North (N) pole and enter into the South (S) pole.
• When two opposite magnetic poles (North and South) face each other, the magnetic field lines pass continuously from the North pole across the gap directly into the South pole.
• Therefore, the source pole from which lines emerge (L) is a North pole, and the terminating pole into which lines converge (R) is a South pole.`,
    hint: 'Magnetic field lines emerge from the North pole and enter into the South pole.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q57',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Thermal Physics: Definition of Heat as Energy in Transit',
    questionText: '57. Which one of the following statements scientifically describes heat?',
    options: [
      'It is the form of energy that transfers when two objects of different temperatures are brought in thermal contact.',
      'It is the form of energy which is stored in an object and increases when the object\'s temperature increases.',
      'It is a property of a physical system which is related to the average kinetic energy of the particles of the system.',
      'It is a form of energy that transfers between two systems by doing work in the process to achieve mechanical equilibrium.'
    ],
    correctOptionIndex: 0,
    explanation: `In thermodynamics:
• Heat (Q) is strictly defined as thermal energy in transit across the boundary of a thermodynamic system as a result of a temperature gradient (difference) between the system and its surroundings.
• An object does NOT "contain heat"; instead, it possesses internal energy (U).
• The measure of average kinetic energy of particles is temperature, not heat.

Therefore, statement A is the correct definition of heat.`,
    hint: 'Heat is energy in transit between systems due solely to a temperature difference.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q58',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Thermal Experiments: Methods for Measuring Specific Heat Capacity',
    questionText: '58. To experimentally determine the specific heat capacity of an unknown solid, an experiment where electrical energy is supplied for a known time by an electric heater of known power is called the:',
    options: [
      'Mixture method with heat energy supplied to the solid for a known time by an electrical heater of known power.',
      'Electrical method with the heat energy supplied for a known time by an electrical heater of known power.',
      'Electrical method with heat energy supplied to the solid by mixing hot water and solid in a calorimeter.',
      'Mixture method with the heat energy supplied to the solid for unknown time by an electrical heater of known power.'
    ],
    correctOptionIndex: 1,
    explanation: `In experimental calorimetry:
• The Electrical Method uses an electric immersion heater of known electrical power P = V * I embedded in a cylindrical block of the solid. The electrical energy supplied over time t is Q = P * t = V * I * t. Measuring temperature rise ΔT allows direct calculation of specific heat capacity: c = (V * I * t) / (m * ΔT).
• The Method of Mixtures, by contrast, transfers a heated solid into a liquid (usually water) inside a calorimeter and measures equilibrium temperature without electrical heating during the mixing process.

Therefore, option B correctly names and describes the electrical method.`,
    hint: 'Using an electric heater of known power P for measured time t (Q = P * t) is called the electrical method.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q59',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Circular Motion: Kinematics of Uniform Circular Motion',
    questionText: '59. Which one of the following statements correctly describes the uniform circular motion of a particle in a horizontal plane? Its:',
    options: [
      'Centripetal acceleration is a non-zero constant vector.',
      'Tangential velocity is a non-zero constant vector.',
      'Angular velocity is a non-zero constant.',
      'Tangential acceleration is a non-zero constant.'
    ],
    correctOptionIndex: 2,
    explanation: `In uniform circular motion (UCM):
• Speed (magnitude of tangential velocity) is constant, but the direction of velocity changes continuously, so the tangential velocity vector v is NOT constant.
• Centripetal acceleration has constant magnitude a_c = v² / r, but its direction constantly rotates toward the center, so the acceleration vector is NOT constant.
• Because angular speed is constant (dθ/dt = constant) and the rotation axis is fixed perpendicular to the horizontal plane, the angular velocity vector ω is a non-zero constant vector.
• Tangential acceleration a_t = dv/dt is strictly zero since speed is constant.

Therefore, statement C is the only true statement.`,
    hint: 'In uniform circular motion, speed is constant, so angular velocity ω is a non-zero constant.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q60',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Geometric Optics: Principal Rays for Thin Lenses',
    questionText: '60. Lenses form optical images by the refraction of incident light rays. After refraction through a lens, an incident light ray that passes:',
    options: [
      'Through the optical center will emerge parallel to the principal axis.',
      'Through the principal focus will emerge parallel to the principal axis.',
      'Parallel to the principal axis will emerge without any deviation.',
      'Parallel to the principal axis will emerge through the optical center.'
    ],
    correctOptionIndex: 1,
    explanation: `By the fundamental principles of geometric optics for spherical thin lenses:
• Any light ray passing through (or directed toward) the principal focal point F before striking the lens refracts through the lens glass and emerges completely parallel to the principal axis.
• A ray incident parallel to the principal axis passes through the focal point after refraction.
• A ray passing through the optical center passes straight through without deviation.

Therefore, statement B is the correct geometric ray tracing rule.`,
    hint: 'A ray passing through the principal focus emerges parallel to the principal axis after refraction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
