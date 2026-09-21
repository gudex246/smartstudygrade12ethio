import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2018_EC_PART3: Question[] = [
  {
    id: 'phy-2018-q31',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Work & Energy: Work Done by Applied Force vs. Gravity',
    questionText: '31. A packed set of books of mass 3 kg is lying on the surface of a 0.90 m high table. If you pick it up and place it on a bookshelf 2.0 m above the floor at constant speed, the work done by you and the work done by gravity, respectively, are (take g = 10 m/s²):',
    options: [
      '60 J and 60 J',
      '33 J and -33 J',
      '33 J and 33 J',
      '60 J and -60 J'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Determine the vertical displacement Δy:
Δy = y_final - y_initial = 2.0 m - 0.90 m = 1.10 m.

Step 2: Calculate the work done by you (applied upward lifting force F_app = mg):
Since the books are lifted at constant speed:
F_app = m * g = 3 kg * 10 m/s² = 30 N upward.
W_you = F_app * Δy = 30 N * 1.10 m = +33 J.

Step 3: Calculate the work done by gravity:
The gravitational force acts downward (F_g = -30 N), opposite to the upward displacement (+1.10 m):
W_gravity = -m * g * Δy = -30 N * 1.10 m = -33 J.

Therefore, the work done by you and by gravity are 33 J and -33 J, respectively.`,
    hint: 'Displacement is Δh = 2.0 - 0.9 = 1.1 m. Work done by you is +mgh = +33 J, and work done by gravity is -mgh = -33 J.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q32',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Physics & Technology: Bidirectional Influence of Science and Tech',
    questionText: '32. Which one of the following statements does NOT correctly explain the contribution of technology to the advancement of physics?',
    options: [
      'The invention of space shuttles enabled experiments in space.',
      'The development of light detectors enabled spectral analysis.',
      'The invention of x-rays enabled proper medical imaging.',
      'The development of x-rays enabled study of atomic structure.'
    ],
    correctOptionIndex: 2,
    explanation: `The question asks for technology advancing physics (tech ⟹ physics):
• Space shuttles (technological engineering) enabled microgravity physics experiments in orbit.
• Optical electronic detectors (engineering technology) enabled high-resolution spectroscopy in astrophysics and quantum mechanics.
• X-ray diffraction apparatus (technological instrumentation) enabled crystallographic analysis of atomic lattices and DNA structure.
In contrast, using X-rays for medical diagnostic imaging is an example of physics discoveries serving society and medicine (physics ⟹ medicine/technology), rather than technology driving the conceptual advancement of physics.`,
    hint: 'Medical imaging is an application of physics to medicine, not a technological tool developed to advance physics research.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q33',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Kinematics: Distance vs. Displacement',
    questionText: '33. For an athlete who runs on a curved or closed track for a specified time interval, her distance and displacement can be different in that distance:',
    options: [
      'Can be negative whereas displacement cannot be.',
      'Is less than the magnitude of displacement.',
      'Can be zero whereas the displacement cannot be.',
      'Is greater than the magnitude of displacement.'
    ],
    correctOptionIndex: 3,
    explanation: `By fundamental definitions:
• Distance is the total actual path length traversed; it is a scalar and is strictly non-negative (d ≥ 0).
• Displacement is the straight-line vector from the initial to the final position.
• By the triangle inequality in geometry, the straight-line distance is always the shortest path between two points. Consequently:
  Distance ≥ |Displacement|.
Whenever an athlete curves, turns, or loops around a track, the total distance traveled is strictly greater than the magnitude of displacement.`,
    hint: 'Distance is the actual path length traveled, which is greater than or equal to the straight-line displacement.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q34',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Geometrical Optics: Human Eye Defects & Correction (Hypermetropia)',
    questionText: '34. For a person with the visual defect known as hypermetropia (farsightedness):',
    options: [
      'Close objects cannot be clearly seen, so the defect can be corrected by concave lenses.',
      'Far objects cannot be clearly seen, so the defect can be corrected by convex lenses.',
      'Far objects cannot be clearly seen, so the defect can be corrected by concave lenses.',
      'Close objects cannot be clearly seen, so the defect can be corrected by convex lenses.'
    ],
    correctOptionIndex: 3,
    explanation: `In physiological optics:
• Hypermetropia (hyperopia or farsightedness) is an optical defect where the eyeball is too short or the lens system is too weak, causing light rays from nearby objects to converge behind the retina.
• Consequently, close objects cannot be clearly focused, while distant objects can be focused clearly.
• To correct this defect, a converging lens (convex lens) of appropriate focal length is placed in front of the eye to provide additional convergence and shift the focal plane forward onto the retina.`,
    hint: 'Hypermetropia means close objects appear blurry; it is corrected using converging (convex) lenses.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q35',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Magnetic Forces: Parallel Current-Carrying Conductors',
    questionText: '35. Given two parallel straight conductors C₁ and C₂ carrying currents in the same direction. The force between the two conductors is attractive because the:',
    options: [
      'Magnitude of the magnetic field produced by I₁ at C₂ is the same as that produced by I₂ at C₁.',
      'Direction of the magnetic field produced by I₁ at C₂ is opposite to that produced by I₂ at C₁.',
      'Magnitude of the magnetic field produced by I₁ at C₂ is different from that produced by I₂ at C₁.',
      'Direction of the magnetic field produced by I₁ at C₂ is the same as that produced by I₂ at C₁.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Determine the magnetic field direction generated by each conductor using the right-hand grip rule:
• Let both currents flow horizontally to the right.
• The magnetic field B₁ produced by wire C₁ at the location of wire C₂ (below it) is directed INTO the page (⊗).
• The magnetic field B₂ produced by wire C₂ at the location of wire C₁ (above it) is directed OUT OF the page (⊙).

Step 2: Compare field directions:
The magnetic fields produced by each wire at the position of the other wire point in OPPOSITE spatial directions (into the page vs. out of the page).

Step 3: Apply the magnetic Lorentz force rule F = I(L × B):
• For C₂: I₂ points right, B₁ points into page ⟹ force F₂ is directed UPWARD (toward C₁).
• For C₁: I₁ points right, B₂ points out of page ⟹ force F₁ is directed DOWNWARD (toward C₂).
Thus, both conductors experience mutually attractive forces toward each other.`,
    hint: 'The magnetic field generated by wire 1 at wire 2 is into the page, while wire 2 produces a field out of the page at wire 1 (opposite directions).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q36',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: "Electromagnetic Induction: Faraday's Law & Induced EMF",
    questionText: '36. A square wire loop with a side length of 12 cm is placed in such a way that its area vector makes an angle of 60° with a magnetic field of 10 T. If the loop is slowly pulled out of the magnetic field in 6 s, how much electromotive force (EMF) is induced in the loop during this time?',
    options: [
      '24 mV',
      '17.2 mV',
      '12 mV',
      '20.9 mV'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Calculate the area A of the square loop:
Side length s = 12 cm = 0.12 m.
Area A = s² = (0.12 m)² = 0.0144 m².

Step 2: Calculate the initial magnetic flux Φ_initial through the loop:
Φ = B * A * cos(θ)
Given B = 10 T and angle θ = 60° (between field B and the normal area vector):
Φ_initial = 10 * 0.0144 * cos(60°)
Φ_initial = 0.144 * 0.5 = 0.072 Wb (Weber).

Step 3: Calculate the final magnetic flux:
When completely removed from the field, Φ_final = 0 Wb.
Change in flux |ΔΦ| = 0.072 Wb.

Step 4: Apply Faraday's Law of Induction:
Induced EMF ε = |ΔΦ| / Δt
ε = 0.072 Wb / 6 s = 0.012 V = 12 mV.`,
    hint: 'Initial flux Φ = B * A * cos(60°) = 10 * (0.12)^2 * 0.5 = 0.072 Wb. Induced EMF = ΔΦ / Δt = 0.072 / 6 = 12 mV.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q37',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Fluid Statics: Hydrostatic Pressure Dependence on Depth',
    questionText: '37. Three different shapes of containers are filled with water at different levels and opened to the atmosphere. Container B has the highest water column height. At which point in the system does a student measure the highest hydrostatic pressure?',
    options: [
      'At point A',
      'At point B (bottom of tallest liquid column)',
      'At point C',
      'At point D (near top of tube B)'
    ],
    correctOptionIndex: 1,
    explanation: `According to the fundamental equation of hydrostatic fluid pressure:
P = P_atm + ρ * g * h,
where:
• P_atm is the ambient atmospheric pressure
• ρ is fluid density (water)
• g is acceleration due to gravity
• h is the vertical depth below the free open liquid surface.

Hydrostatic pressure is strictly a function of vertical liquid depth h and is completely independent of the shape, surface area, or cross-section of the vessel (the Hydrostatic Paradox).
Since the water column in container B extends vertically highest, point B at the base of container B has the greatest vertical depth h below the open surface, resulting in the maximum total pressure.`,
    hint: 'Hydrostatic pressure P = P_atm + ρgh depends purely on depth h below the free water surface.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q38',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Geometric Optics: Principal Ray Tracing Rules for Lenses',
    questionText: '38. Lenses form images by refraction of incident light rays. According to the standard geometric ray tracing rules, after refraction through a thin lens, an incident light ray that passes:',
    options: [
      'Through the optical center will emerge parallel to the principal axis.',
      'Through the principal focus will emerge parallel to the principal axis.',
      'Parallel to the principal axis will emerge without any deviation.',
      'Parallel to the principal axis will emerge through the optical center.'
    ],
    correctOptionIndex: 1,
    explanation: `The three principal rules for ray tracing through thin spherical lenses are:
1. A ray entering parallel to the principal axis refracts such that it passes through (or appears to diverge from) the principal focal point F.
2. A ray directed through (or toward) the principal focus F refracts through the lens and emerges parallel to the principal axis (the principle of reversibility of light).
3. A ray passing directly through the optical center (center of the lens) emerges undeflected along its straight path without deviation.

Therefore, statement B correctly describes standard ray behavior.`,
    hint: 'By light reversibility, a ray directed through the principal focus emerges parallel to the principal axis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q39',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: "Elasticity: Young's Modulus and Elongation of Suspended Wire",
    questionText: '39. The top end of a 6 m long wire with cross-sectional area 3 × 10⁻⁶ m² is attached to a ceiling, and the wire is suspended vertically downward. If a 120 kg mass is attached to the bottom end, and the wire\'s Young\'s modulus is 6 × 10¹⁰ N/m², what will be the elongation (change in length) of the wire? (take g = 10 m/s²)',
    options: [
      '0.05 m',
      '0.04 m',
      '0.06 m',
      '0.02 m'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Calculate the applied stretching tensile force (weight of hanging mass):
F = m * g = 120 kg * 10 m/s² = 1200 N.

Step 2: Recall the formula relating Young's modulus Y to tensile stress and strain:
Y = (F / A) / (ΔL / L₀)  ⟹  ΔL = (F * L₀) / (A * Y).

Step 3: Substitute the known values:
• F = 1200 N
• L₀ = 6 m
• A = 3 × 10⁻⁶ m²
• Y = 6 × 10¹⁰ N/m²

ΔL = (1200 * 6) / [(3 × 10⁻⁶) * (6 × 10¹⁰)]
ΔL = 7200 / [18 × 10⁴]
ΔL = 7200 / 180,000 = 72 / 1800 = 0.04 m (4 cm).`,
    hint: 'Use ΔL = (F * L₀) / (A * Y). With F = 1200 N, L₀ = 6 m, A = 3×10⁻⁶ m², and Y = 6×10¹⁰ N/m², ΔL = 0.04 m.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q40',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Wave Motion & Sound: Temperature Dependence of the Speed of Sound',
    questionText: '40. The speed of sound in air at 0°C is 331.0 m/s. What is the approximate speed of sound in air at 27°C?',
    options: [
      '346.4 m/s',
      '358.0 m/s',
      '434.9 m/s',
      '331.0 m/s'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: The speed of sound in an ideal gas depends on absolute thermodynamic temperature T (in Kelvin):
v(T) = v₀ * √(T / T₀).

Step 2: Convert Celsius temperatures to Kelvin:
• T₀ = 0°C = 273.15 K
• T = 27°C = 300.15 K

Step 3: Compute the speed of sound at 27°C:
v(27°C) = 331.0 * √(300.15 / 273.15)
v(27°C) = 331.0 * √(1.0988)
v(27°C) = 331.0 * 1.04825 ≈ 346.97 m/s ≈ 346.4 m/s.

(Alternatively, using the standard linear empirical approximation v ≈ 331 + 0.6 * T_C = 331 + 16.2 = 347.2 m/s, which closely corresponds to option A: 346.4 m/s).`,
    hint: 'Use v = v₀ √(T/T₀) with T₀ = 273 K and T = 300 K to get approximately 346.4 m/s.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q41',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Thermal Physics: Relationship Between Thermal Expansion Coefficients',
    questionText: '41. If the coefficients of thermal expansion of an isotropic solid are designated by α for linear expansion, β for surface (area) expansion, and γ for volume expansion, these parameters are related by:',
    options: [
      'γ = 2α',
      '2β = 3γ',
      '3β = 2γ',
      'β = 3α'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: State the fundamental relationships for isotropic solids under thermal expansion:
• Linear expansion coefficient: α
• Surface (area) expansion coefficient: β ≈ 2α
• Volume (cubical) expansion coefficient: γ ≈ 3α

Step 2: Relate β and γ by eliminating α:
From β = 2α  ⟹  α = β / 2.
From γ = 3α  ⟹  α = γ / 3.

Equating both expressions for α:
β / 2 = γ / 3.

Cross-multiplying yields:
3β = 2γ.`,
    hint: 'Since β = 2α and γ = 3α, α = β/2 = γ/3, which cross-multiplies to 3β = 2γ.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q42',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Electrostatics: Quantization of Electric Charge',
    questionText: '42. The amount of net electric charge on any observed particle or object is always an integral multiple of the elementary charge of an electron (q = n * e, where n is an integer). This fundamental property indicates:',
    options: [
      'Charge creation.',
      'Charge induction.',
      'Charge quantization.',
      'Charge conservation.'
    ],
    correctOptionIndex: 2,
    explanation: `In physics:
• Charge quantization is the principle that electric charge does not occur in continuous amounts, but rather exists in discrete indivisible packets called quanta. The elementary quantum of charge is e ≈ 1.602 × 10⁻¹⁹ C. Any observable charge is q = ±n * e (n = 0, 1, 2, 3...).
• Charge conservation means net charge in an isolated system remains constant over time.
• Charge induction is the redistribution of charges caused by nearby external fields.`,
    hint: 'When a physical quantity exists only in discrete integral multiples of a base unit, it is quantized.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q43',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Medical Physics & Acoustics: Ultrasound Imaging (Anechoic Tissues)',
    questionText: '43. Which of the following is true about anechoic images of biological tissues in ultrasound diagnostic imaging? They appear on the screen as:',
    options: [
      'Black because the tissues do not reflect any sound wave.',
      'Light gray because the tissues do not reflect any sound wave.',
      'Black because the tissues reflect intense sound waves.',
      'Light gray because the tissues reflect intense sound waves.'
    ],
    correctOptionIndex: 0,
    explanation: `In medical ultrasound sonography:
• The term "anechoic" literally translates to "without echoes" (an- = without, echoic = echo).
• Homogeneous fluid-filled structures (such as simple cysts, the urinary bladder, gallbladder, or amniotic fluid) allow ultrasound sound waves to pass directly through without encountering acoustic impedance mismatch boundaries.
• Because virtually no sound is reflected back to the transducer, the ultrasound detector receives zero return signal from within the fluid, which the display maps as pure black.`,
    hint: 'Anechoic means without echoes. Fluid-filled structures do not reflect sound, so they appear black on ultrasound displays.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q44',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: 'Fluid Dynamics: Continuity Equation & Velocity Changes',
    questionText: '44. A steady stream of water from a wide river enters a narrower and shallower gate of a lake. Which one of the following statements is true regarding the flow?',
    options: [
      'The speed of the water decreases as it enters the gate of the lake.',
      'The speed of the water increases as it enters the gate of the lake.',
      'The density of the water entering the lake is higher than the water leaving the river.',
      'The volume of the water entering the lake is higher than the water leaving the river.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: State the equation of continuity for incompressible fluids:
A₁ * v₁ = A₂ * v₂ = constant volumetric flow rate.

Step 2: Analyze the geometric cross-sectional area:
• In the wide river, the cross-sectional area A₁ is large.
• At the narrower and shallower gate, the cross-sectional area A₂ is significantly smaller (A₂ < A₁).

Step 3: Deduce the effect on water flow speed:
v₂ = (A₁ / A₂) * v₁.
Because A₂ < A₁, it follows that v₂ > v₁.
Thus, the speed of the water increases as it passes through the constricted narrow gate.`,
    hint: 'By the continuity equation (A * v = constant), fluid velocity increases when cross-sectional area decreases.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2018-q45',
    subject: 'Physics',
    year: '2018 E.C.',
    topic: "Optics & Refraction: Snell's Law",
    questionText: '45. A light ray passes from a layer of benzene of refractive index n₁ = 1.50 to water of refractive index n₂ = 1.33. If the angle of incidence is 37°, what will be the angle of refraction θ₂? (take sin 37° ≈ 0.60)',
    options: [
      'sin⁻¹(0.90)',
      'sin⁻¹(0.80)',
      'sin⁻¹(0.53)',
      'sin⁻¹(0.68)'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: State Snell's Law of Refraction:
n₁ * sin(θ₁) = n₂ * sin(θ₂).

Step 2: Substitute the given optical parameters:
• n₁ (benzene) = 1.50
• θ₁ (angle of incidence) = 37°, with sin(37°) ≈ 0.60
• n₂ (water) = 1.33

Step 3: Solve for sin(θ₂):
1.50 * sin(37°) = 1.33 * sin(θ₂)
1.50 * 0.60 = 1.33 * sin(θ₂)
0.90 = 1.33 * sin(θ₂)
sin(θ₂) = 0.90 / 1.33 ≈ 0.6767 ≈ 0.68.

Step 4: Express the refraction angle:
θ₂ = sin⁻¹(0.68).`,
    hint: 'Apply Snell\'s Law: n₁ sin(θ₁) = n₂ sin(θ₂). 1.50 * 0.60 = 1.33 sin(θ₂), giving sin(θ₂) = 0.90 / 1.33 ≈ 0.68.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
