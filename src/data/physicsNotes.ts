import { StudyNote } from '../types';

export const PHYSICS_GRADE_12_NOTES: StudyNote[] = [
  {
    id: 'phys-g12-u1-note',
    title: 'Unit 1: Application of Physics in Other Fields (Complete Revision Summary)',
    subject: 'Physics',
    topic: 'Interdisciplinary Applications of Physics',
    summary: 'Comprehensive short notes for Grade 12 Physics Unit 1: Physics and other sciences (chemistry, biology, astronomy, geology), engineering disciplines (civil, mechanical, electrical, chemical), medical physics diagnostics and therapies (MRI, CT scans, ultrasound, radiotherapy), defense technologies (radar range formula, missiles, infrared night vision), and communication systems.',
    readTimeMinutes: 14,
    isFreePreview: true,
    tags: ['Physics', 'Grade 12', 'Medical Physics', 'MRI', 'CT Scan', 'Radar', 'Astrophysics', 'Engineering Physics'],
    keyTakeaways: [
      'Physics and Chemistry: Atomic/molecular physics explains covalent/ionic bonding, thermodynamics governs reaction spontaneity and equilibrium, spectroscopy probes atomic energy levels.',
      'Physics and Biology: Biomechanics of motion and center of gravity stability, fluid dynamics in blood flow, vocal cord acoustics, neuron electrical action potentials, and optical vision.',
      'Physics and Astronomy: Newton\'s law of gravitation, electromagnetic spectrum telescopes, inverse square law of apparent brightness (apparent brightness proportional to luminosity / distance squared), and stellar atomic spectra.',
      'Physics and Geology: Geophysics utilizes wave reflection/refraction, rock density, magnetism, and radioactivity to explore minerals, oil reserves, and geothermal fields.',
      'Medical Physics Diagnostics: Wilhelm Roentgen discovered X-rays (1895). MRI utilizes nuclear magnetic resonance of water protons in magnetic fields; CT scan uses rotating X-ray tomograms; Ultrasound (3.5 to 10 MHz) uses acoustic reflection (anechoic black, hypoechoic gray, hyperechoic white).',
      'Radiation Therapy: Controlled ionizing radiation (Cobalt-60 gamma rays, X-ray beams) destroys malignant cancer tumors while minimizing exposure to healthy tissues.',
      'Defense Technologies: RADAR (Radio Detection And Ranging) calculates target distance using R = (c × t) / 2. Cruise missiles (jet-propelled) vs Ballistic missiles (rocket-propelled initial boost, free-flight gravitational arc). Infrared night vision detects thermal radiation displayed on green phosphor screens.'
    ],
    contentMarkdown: `GRADE 12 PHYSICS — UNIT 1: APPLICATION OF PHYSICS IN OTHER FIELDS

1. PHYSICS AND OTHER NATURAL SCIENCES

• Physics and Chemistry:
  - Atomic & Molecular Physics: Explains the electronic configuration of elements, the nature of chemical bonds (ionic, covalent, metallic), and molecular geometry.
  - Thermodynamics: Governs chemical energetics, heat flow, reaction spontaneity (Gibbs free energy), and chemical equilibrium composition.
  - Spectroscopy: The study of the interaction between matter and electromagnetic radiation as a function of wavelength or frequency, providing fundamental insights into molecular structures.

• Physics and Biology (Biophysics & Biomechanics):
  - Newtonian Mechanics: Explains animal locomotion, athletic movement, and body equilibrium. A body is in stable equilibrium when its center of mass is directly above its base of support.
  - Fluid Dynamics: Explains blood circulation, arterial blood pressure, viscous drag, and Pascal\'s hydrostatic principle in soft-bodied organisms (earthworms, sea anemones).
  - Sound and Acoustics: Vocal cords vibrate during lung air exhalation, producing pressure waves that propagate through air to vibrate the tympanic eardrum.
  - Electrophysiology: Nerve impulses in neurons propagate as electrical action potential pulses across cell membranes via sodium and potassium ion gradients.
  - Optics: Light refraction through the cornea and lens forms inverted images on the retina.

• Physics and Astronomy (Astrophysics):
  - Gravitational Dynamics: Newton\'s universal gravitation explains planetary orbits, moon revolutions, and satellite trajectories.
  - Electromagnetic Astronomy: Telescopes detect radiation across the full spectrum (radio, infrared, visible, ultraviolet, X-ray, gamma rays) to study stellar evolution.
  - Inverse Square Law of Brightness:
    Apparent Brightness is proportional to True Brightness (Luminosity) / Distance squared.
  - Atomic Transitions in Stars: Electrons jumping between Bohr energy orbits emit or absorb photons of specific wavelengths, revealing stellar chemical compositions, temperatures, and radial velocities.

• Physics and Geology (Geophysics):
  - Applies mechanical stress-strain, heat flow, seismology, and electromagnetism to study Earth\'s interior.
  - Seismic wave propagation locates petroleum, mineral deposits, aquifer reservoirs, and geothermal fields without destructive excavation.

============================================================

2. PHYSICS AND ENGINEERING DISCIPLINES

• Civil Engineering:
  Applies statics, mechanics of materials, structural tension, compression, harmonic oscillation, and fluid statics to design skyscrapers, suspension bridges (e.g. Abay Bridge), dams, and highways.

• Mechanical Engineering:
  Utilizes kinematics, dynamics, thermodynamics, fluid mechanics, stress analysis, and aerodynamics to engineer engines, vehicles, aircraft, robotics, and hydraulic machinery.

• Electrical & Electronic Engineering:
  Applies Maxwell\'s electromagnetic field theory, circuit analysis, and solid-state semiconductor physics to design power grids, motors, generators, and microchips.

• Chemical Engineering:
  Applies molecular dynamics, thermodynamics, and transport phenomena to design industrial chemical synthesis, oil refining, and materials manufacturing.

============================================================

3. MEDICAL PHYSICS: DIAGNOSTIC AND THERAPEUTIC APPLICATIONS

• Medical Imaging Modalities:
  1. Conventional X-Ray:
     - Discovered by Wilhelm Conrad Roentgen in 1895.
     - Denser tissues with high atomic numbers (calcium in bones) absorb X-rays strongly and appear white; low-density tissues (air-filled lungs) allow X-rays to pass and appear dark.
  2. X-Ray Computed Tomography (CT Scan):
     - Uses rotating X-ray sources and opposite detectors to capture multiple cross-sectional tomographic slices, reconstructed into high-resolution 3D images by computers.
  3. Magnetic Resonance Imaging (MRI):
     - Developed by Felix Bloch, Edward Purcell, Paul Lauterbur, and Peter Mansfield.
     - Operates on Nuclear Magnetic Resonance: Hydrogen protons in tissue water align with a strong constant magnetic field. A radiofrequency (RF) pulse tips protons; when turned off, protons relax back to alignment, releasing RF signals characteristic of specific tissue types (resolving soft tissue down to 0.5 mm).
  4. Diagnostic Ultrasound:
     - Uses high-frequency sound waves (3.5 MHz to 10 MHz) beyond human hearing (>20 kHz).
     - Transducer pulses penetrate tissue and reflect back: Anechoic (fluid-filled, black echoless), Hypoechoic (low echo, dark gray), Hyperechoic (dense boundary, bright white).

• Radiation Therapy (Radiotherapy):
  - High-energy ionizing gamma rays (from Cobalt-60 or linear accelerators) or X-ray beams damage cancer cell DNA, destroying tumors without invasive surgery. Multiple beam angles are cross-fired to maximize tumor dose while sparing surrounding healthy tissue.

============================================================

4. PHYSICS IN DEFENSE TECHNOLOGY & COMMUNICATIONS

• RADAR (RAdio Detection And Ranging):
  - Electronic system that emits radio/microwave pulses and detects the reflected echo from distant targets (aircraft, ships, missiles).
  - Target Range Formula:
    R = (c × t) / 2
    where c = speed of light (3 × 10^8 m/s) and t = round-trip signal transit time.

• Missile Technology:
  - Cruise Missiles: Jet-propelled throughout flight, operating within the atmosphere using aerodynamic lift and guidance control.
  - Ballistic Missiles: Rocket-powered during initial boost phase, after which they follow an unpowered parabolic orbital trajectory governed by gravity and Newtonian mechanics.

• Infrared Night Vision:
  - Detects invisible thermal infrared radiation emitted proportionally to object temperature. Night vision goggles convert thermal patterns into visible green light images (green is optimal for human eye visual acuity).

• Communication Physics:
  - Information transmission via wired systems (copper cables, optical fibers using total internal reflection) and wireless systems (ground waves, sky waves, satellite microwaves).
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'phys-g12-u2-note',
    title: 'Unit 2: Two-Dimensional Motion (Complete Revision Summary)',
    subject: 'Physics',
    topic: '2D Kinematics, Rotational Dynamics & Gravitation',
    summary: 'Comprehensive short notes for Grade 12 Physics Unit 2: Horizontal and inclined projectile motion derivations, rotational kinematics (angular velocity, acceleration, kinematic equations), rotational dynamics (torque, moment of inertia, Newton\'s second law for rotation), Kepler\'s three laws of planetary motion, and Newton\'s law of universal gravitation.',
    readTimeMinutes: 16,
    isFreePreview: true,
    tags: ['Physics', 'Grade 12', 'Projectile Motion', 'Rotational Motion', 'Torque', 'Moment of Inertia', 'Kepler Laws', 'Universal Gravitation'],
    keyTakeaways: [
      'Projectile Motion: Horizontal motion (vx = v0*cos(theta) = constant) and vertical motion (vy = v0*sin(theta) - gt) are completely independent.',
      'Key Projectile Formulas: Time of flight t_total = (2*v0*sin(theta)) / g; Maximum Height H = (v0^2 * sin^2(theta)) / (2*g); Horizontal Range R = (v0^2 * sin(2*theta)) / g. Maximum range occurs at 45°. Complementary angles (theta and 90 - theta) yield identical range.',
      'Relationship between Range and Height: H = (R * tan(theta)) / 4.',
      'Rotational Kinematics: Angular displacement Delta theta (rad), angular velocity omega (rad/s), angular acceleration alpha (rad/s^2). Linear links: s = r*theta, v = r*omega, a_t = r*alpha.',
      'Rotational Dynamic Equations: Torque tau = r*F*sin(theta); Moment of Inertia I = sum(m_i * r_i^2); Newton\'s 2nd Law for rotation tau_net = I*alpha.',
      'Kepler\'s Three Laws: 1st Law of Ellipses (Sun at one focus); 2nd Law of Equal Areas (planets move fastest at perihelion, slowest at aphelion); 3rd Harmonic Law (T^2 / R^3 = constant K).',
      'Universal Gravitation: F_g = (G * m1 * m2) / r^2 where G = 6.67 × 10^-11 N m^2/kg^2. Surface gravitational acceleration g = (G * M_E) / r_E^2 = 9.8 m/s^2.',
      'Derivation of Kepler\'s 3rd Law from Gravitation: Centripetal force provided by gravity (m*v^2/r = G*M*m/r^2) yields T^2 / r^3 = (4*pi^2) / (G*M_S) = 2.97 × 10^-19 s^2/m^3.'
    ],
    contentMarkdown: `GRADE 12 PHYSICS — UNIT 2: TWO-DIMENSIONAL MOTION

1. PROJECTILE MOTION

• Basic Assumptions:
  1. Acceleration due to gravity (g = 9.8 m/s^2 or 10 m/s^2) is constant downward throughout flight.
  2. Air resistance is neglected.
  3. Horizontal velocity component remains constant (a_x = 0).
  4. The resultant trajectory is a Parabola.

• Motion Components (Initial launch velocity v0 at angle theta above horizontal):
  - Horizontal initial velocity: v0x = v0 × cos(theta)
  - Vertical initial velocity: v0y = v0 × sin(theta)

• Kinematic Equations at Time t:
  - Horizontal velocity: vx = v0x = v0 × cos(theta) (Constant)
  - Horizontal displacement: Delta x = v0x × t = (v0 × cos(theta)) × t
  - Vertical velocity: vy = v0y - g × t = (v0 × sin(theta)) - g × t
  - Vertical displacement: Delta y = (v0 × sin(theta)) × t - 0.5 × g × t^2
  - Resultant speed at time t: v = square root(vx^2 + vy^2)

• Horizontal Launch Special Case (from height h, theta = 0):
  - Time of flight: t = square root(2 × h / g)
  - Horizontal range: R = v0x × square root(2 × h / g)

• Key Parameters for Inclined Launch on Level Ground:
  1. Time to Reach Maximum Height:
     t_peak = (v0 × sin(theta)) / g
  2. Total Time of Flight:
     t_total = 2 × t_peak = (2 × v0 × sin(theta)) / g
  3. Maximum Vertical Height (H):
     At apex, vy = 0:
     H = (v0^2 × sin^2(theta)) / (2 × g)
  4. Horizontal Range (R):
     R = v0x × t_total = (v0^2 × sin(2 × theta)) / g
  5. Maximum Range Condition:
     Occurs when sin(2 × theta) = 1, i.e., theta = 45 degrees.
     R_max = v0^2 / g
  6. Complementary Angle Rule:
     Two launch angles theta1 and theta2 that sum to 90 degrees (e.g., 30° and 60°, or 37° and 53°) produce identical horizontal ranges for the same launch speed.
  7. Fundamental Range-Height Identity:
     H = (R × tan(theta)) / 4

============================================================

2. ROTATIONAL MOTION KINEMATICS

• Angular Motion Quantities:
  - Angular Displacement (Delta theta): Angle swept by a rotating radius, measured in radians (1 rev = 2*pi rad = 360°).
  - Angular Velocity (omega): Rate of change of angular displacement:
    omega_av = Delta theta / Delta t (rad/s)
  - Angular Acceleration (alpha): Rate of change of angular velocity:
    alpha_av = Delta omega / Delta t (rad/s^2)

• Right-Hand Rule for Rotational Vectors:
  Curl fingers of the right hand in the direction of rotation; the extended thumb points along the axis of rotation in the direction of omega.

• Linear (Translational) and Angular Equivalents:
  - Arc length / linear distance: s = r × theta
  - Tangential speed: v = r × omega
  - Tangential acceleration: a_t = r × alpha
  - Centripetal (radial) acceleration: a_c = v^2 / r = r × omega^2

• Constant Angular Acceleration Kinematic Equations:
  1. omega_f = omega_0 + alpha × t
  2. Delta theta = omega_0 × t + 0.5 × alpha × t^2
  3. omega_f^2 = omega_0^2 + 2 × alpha × Delta theta
  4. Delta theta = [(omega_0 + omega_f) / 2] × t

============================================================

3. ROTATIONAL DYNAMICS

• Torque (tau):
  The quantitative rotational turning effect of a force about a pivot axis:
  tau = r × F × sin(theta) (Unit: N m)
  where r is distance from pivot to point of force application, and theta is the angle between position vector r and force vector F.

• Moment of Inertia (I):
  The measure of an object\'s rotational inertia (resistance to angular acceleration):
  - For discrete point masses: I = Sum(m_i × r_i^2) (Unit: kg m^2)
  - Depends on total mass, shape, and mass distribution relative to rotation axis.

• Newton\'s Second Law for Rotation:
  tau_net = I × alpha

• Rotational Kinetic Energy and Work:
  - Rotational Kinetic Energy: KE_rot = 0.5 × I × omega^2
  - Work done by torque: W = tau × Delta theta
  - Rotational Power: P = tau × omega

============================================================

4. PLANETARY MOTION AND KEPLER\'S LAWS

• Historical Transition: Ptolemaic geocentric model replaced by Copernican heliocentric model (1543), mathematically proven by Johannes Kepler using Tycho Brahe\'s observational data.

• Kepler\'s Three Empirical Laws:
  1. Kepler\'s First Law (Law of Ellipses):
     The orbit of each planet around the Sun is an ellipse with the Sun located at one of the two foci.
  2. Kepler\'s Second Law (Law of Equal Areas):
     A line segment joining a planet and the Sun sweeps out equal areas in equal intervals of time. Therefore, planets travel fastest at Perihelion (closest approach to Sun) and slowest at Aphelion (furthest distance).
  3. Kepler\'s Third Law (Harmonic Law):
     The square of the orbital period (T) of a planet is directly proportional to the cube of the semi-major axis / average orbital radius (R) of its orbit:
     T^2 / R^3 = K (where K is constant for all bodies orbiting the same central mass).

============================================================

5. NEWTON\'S LAW OF UNIVERSAL GRAVITATION

• Law Statement:
  Every point mass attracts every other point mass with a gravitational force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers:
  F_g = (G × m1 × m2) / r^2
  where Universal Gravitational Constant G = 6.673 × 10^-11 N m^2/kg^2.

• Surface Gravity and Planetary Mass:
  At Earth\'s surface (radius r_E, mass M_E):
  m × g = (G × M_E × m) / r_E^2
  g = (G × M_E) / r_E^2 = 9.8 m/s^2

• Gravitational Origin of Kepler\'s Third Law:
  Gravitational pull supplies the required centripetal force for orbital circular motion:
  F_c = (m_p × v^2) / r = (G × M_s × m_p) / r^2
  Substituting orbital speed v = (2 × pi × r) / T yields:
  T^2 / r^3 = (4 × pi^2) / (G × M_s) = 2.97 × 10^-19 s^2/m^3
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'phys-g12-u3-note',
    title: 'Unit 3: Fluid Mechanics (Complete Revision Summary)',
    subject: 'Physics',
    topic: 'Fluid Statics, Dynamics & High-Pressure Systems',
    summary: 'Comprehensive short notes for Grade 12 Physics Unit 3: Fluid states of matter, density and specific gravity, pressure definitions and conversions, Pascal\'s principle and hydraulic presses, variation of pressure with depth, barometers and manometers, Archimedes\' principle and buoyancy, fluid flow dynamics, equation of continuity, Bernoulli\'s principle, and high-pressure safety systems.',
    readTimeMinutes: 15,
    isFreePreview: false,
    tags: ['Physics', 'Grade 12', 'Fluid Mechanics', 'Pascal Principle', 'Archimedes Principle', 'Bernoulli Principle', 'Hydraulic Press', 'Manometer'],
    keyTakeaways: [
      'Fluid Definition: Substance that flows and deforms continuously under shear stress (liquids and gases). Liquids are practically incompressible; gases are highly compressible.',
      'Density and Specific Gravity: Density rho = m / V (kg/m^3). Specific Gravity SG = rho / rho_water (where rho_water = 1000 kg/m^3).',
      'Pressure Units & Conversions: P = F / A (Pascal, Pa = N/m^2). 1 atm = 101.3 kPa = 760 mmHg = 760 torr = 14.7 psi.',
      'Absolute vs Gauge Pressure: P_abs = P_atm + P_gauge. Pressure gauges measure excess pressure relative to atmospheric baseline.',
      'Pascal\'s Principle: Pressure applied to an enclosed static fluid is transmitted undiminished to every portion of the fluid and container walls. Hydraulic press: F1 / A1 = F2 / A2 with work conservation F1*d1 = F2*d2.',
      'Hydrostatic Pressure with Depth: P = P0 + rho*g*h. Pressure depends only on depth and fluid density, independent of container shape.',
      'Archimedes\' Principle: Buoyant upthrust force F_B = weight of displaced fluid = rho_fluid * g * V_disp. Sinking (rho_obj > rho_fluid), Floating equilibrium (V_disp / V_obj = rho_obj / rho_fluid).',
      'Equation of Continuity: For steady incompressible flow, volume flow rate Q = A*v = constant, meaning A1*v1 = A2*v2.',
      'Bernoulli\'s Principle: As fluid flow speed increases along a streamline, internal fluid pressure decreases.',
      'High-Pressure Systems & Safety: Pressures >50 atm require pressure relief valves, bursting discs, regular inspection, and safe handling of LPG cylinders and pressure washers.'
    ],
    contentMarkdown: `GRADE 12 PHYSICS — UNIT 3: FLUID MECHANICS

1. FLUID STATICS: PROPERTIES, DENSITY, AND PRESSURE

• States of Matter & Fluid Properties:
  - Solids: Atoms tightly bound in fixed crystalline/amorphous lattice; resist shear and compression.
  - Liquids: Molecules closely packed but free to slide over one another; fixed volume, takes shape of container, nearly incompressible.
  - Gases: Molecules widely separated with negligible intermolecular forces; expands to fill container, highly compressible.
  - Fluid: Any substance that yields to shearing forces and flows (liquids and gases).

• Density (rho) and Specific Gravity (SG):
  - Density: Mass per unit volume:
    rho = m / V (SI unit: kg/m^3)
    (Density of fresh water at 4°C = 1,000 kg/m^3; Mercury = 13,600 kg/m^3; Air at STP = 1.29 kg/m^3).
  - Specific Gravity (Relative Density):
    SG = rho_substance / rho_water
    (Dimensionless number; if SG < 1, object floats in water; if SG > 1, object sinks).

• Pressure (P):
  - The normal force exerted per unit surface area:
    P = F / A (SI unit: Pascal, Pa = 1 N/m^2)
  - Unit Conversion Equivalences:
    1 atm = 101.325 kPa = 1.013 × 10^5 N/m^2 = 760 mmHg = 760 torr = 14.7 psi

• Absolute, Gauge, and Atmospheric Pressure:
  - Atmospheric Pressure (P_atm): The weight of the atmospheric air column per unit area above Earth\'s surface (101.3 kPa at sea level, decreases with altitude).
  - Gauge Pressure (P_gauge): Pressure relative to local atmospheric pressure.
  - Absolute Pressure (P_abs): Total pressure measured relative to absolute vacuum zero:
    P_abs = P_atm + P_gauge

============================================================

2. PRESSURE IN FLUIDS AT REST & MEASURING INSTRUMENTS

• Pascal\'s Principle (Blaise Pascal, 1653):
  A change in pressure applied to an enclosed incompressible static fluid is transmitted undiminished to every point in the fluid and to the container walls.

• The Hydraulic Press (Force Multiplier):
  P1 = P2  implies  F1 / A1 = F2 / A2
  F2 = F1 × (A2 / A1)
  - A small force F1 applied on a small piston of area A1 lifts a heavy load F2 on a large piston of area A2.
  - Conservation of Work (Energy): W1 = W2  implies  F1 × d1 = F2 × d2 (small piston moves a larger distance d1).

• Variation of Hydrostatic Pressure with Depth:
  P = P0 + rho × g × h
  - Hydrostatic pressure increases linearly with depth h.
  - Hydrostatic Paradox: Pressure at any given depth depends solely on vertical depth h and fluid density rho, completely independent of the shape, volume, or cross-sectional area of the container.

• Pressure Measuring Devices:
  1. Mercury Barometer (Evangelista Torricelli, 1643):
     - Glass tube filled with mercury inverted in a mercury dish.
     - P_atm = rho_Hg × g × h (Standard atmospheric height h = 760 mm = 0.76 m).
  2. U-Tube Manometer:
     - Measures gas pressure trapped in a container:
       a) Closed-end manometer: P_gas = rho × g × h
       b) Open-end manometer (P_gas > P_atm): P_gas = P_atm + rho × g × h
       c) Open-end manometer (P_gas < P_atm): P_gas = P_atm - rho × g × h

============================================================

3. ARCHIMEDES\' PRINCIPLE AND BUOYANCY

• Principle Statement:
  Any object completely or partially submerged in a fluid experiences an upward Buoyant Force (Upthrust) equal to the weight of the fluid displaced by the object:
  F_B = W_displaced = m_disp × g = rho_fluid × g × V_disp

• Floating and Sinking Equilibrium Conditions:
  - If rho_object > rho_fluid: Downward gravitational weight exceeds buoyant force; unsupported object sinks.
  - If rho_object = rho_fluid: Net force is zero; object remains neutrally buoyant suspended at any depth.
  - If rho_object < rho_fluid: Buoyant force exceeds weight; object rises to surface and floats in static equilibrium.
• Submerged Fraction of a Floating Body:
  Weight of object = Buoyant force
  rho_object × g × V_object = rho_fluid × g × V_disp
  V_disp / V_object = rho_object / rho_fluid
  (e.g., Iceberg in seawater: 917 / 1030 = 89% submerged below water, 11% visible above).

============================================================

4. FLUID DYNAMICS AND BERNOULLI\'S PRINCIPLE

• Types of Fluid Flow:
  - Steady (Laminar) Flow: Smooth flow where adjacent fluid layers slide past each other without mixing; every particle passing a point follows the exact same streamline path.
  - Turbulent Flow: Chaotic, irregular flow characterized by eddies and whirlpools occurring above a critical velocity.
  - Viscosity: Internal fluid friction resisting relative motion between adjacent fluid layers.

• Flow Rate (Q) and Equation of Continuity:
  - Volume Flow Rate: Q = V / t = A × v (SI unit: m^3/s)
  - Continuity Equation for Incompressible Fluids:
    Mass entering per second equals mass exiting per second:
    Q1 = Q2  implies  A1 × v1 = A2 × v2
    (As pipe cross-sectional area narrows, fluid flow velocity increases proportionally).

• Bernoulli\'s Principle (Daniel Bernoulli, 1738):
  As the speed of a moving fluid increases along a streamline, the internal pressure exerted by the fluid decreases simultaneously.
  - Applications: Aerodynamic lift on aircraft airfoils, atomizers/spray guns, chimney draft, and blood flow through constricted arteries.

============================================================

5. HIGH-PRESSURE SYSTEMS AND SAFETY

• Applications: High-pressure compressors, Liquefied Petroleum Gas (LPG) cylinders, autoclaves, hydraulic jacks, and Pascalization (high-pressure non-thermal food preservation).
• Safety Protocols: Pressure safety relief valves, bursting discs, regular hydrostatic tank testing, keeping gas cylinders upright in ventilated areas away from heat, and wearing PPE for high-pressure washers.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'phys-g12-u4-note',
    title: 'Unit 4: Electromagnetism (Complete Revision Summary)',
    subject: 'Physics',
    topic: 'Magnetic Fields, Induction & Transformers',
    summary: 'Comprehensive short notes for Grade 12 Physics Unit 4: Magnets and magnetic fields (dipoles), magnetic field lines, Oersted\'s discovery, Ampere\'s law and magnetic field of long straight wires, Fleming\'s right-hand grip rule, electromagnetic induction (Faraday\'s law, Lenz\'s law, magnetic flux), transformers (step-up vs step-down, turns ratio, efficiency), and applications (electric bells, magnetic relays, DC motors, AC generators).',
    readTimeMinutes: 15,
    isFreePreview: false,
    tags: ['Physics', 'Grade 12', 'Electromagnetism', 'Magnetic Field', 'Faraday Law', 'Lenz Law', 'Transformers', 'Electric Motor'],
    keyTakeaways: [
      'Magnetic Poles: Always exist in dipole pairs (North and South). Like poles repel; opposite poles attract.',
      'Magnetic Field Lines: Continuous closed loops emerging from North and entering South outside the magnet, and South to North inside. Field density represents strength; lines never intersect.',
      'Current and Magnetism: Hans Christian Oersted (1819) discovered current-carrying wires create magnetic fields. Ampere\'s Law gives field around a long straight wire: B = (mu0 * I) / (2*pi*r) where mu0 = 4*pi × 10^-7 T m/A. Direction given by Right-Hand Grip Rule.',
      'Magnetic Flux: Total magnetic field passing through area A: Phi_B = B * A * cos(theta) (Unit: Weber, Wb = T m^2).',
      'Faraday\'s Law of Induction: Induced emf E = -N * (Delta Phi_B / Delta t).',
      'Lenz\'s Law: Induced current flows in a direction such that its magnetic field opposes the change in magnetic flux that created it (Law of Conservation of Energy).',
      'Transformers: Transfer AC electrical energy between circuits via mutual induction without changing frequency. Turns ratio: Vp / Vs = Np / Ns = Is / Ip. Step-Up (Vs > Vp, Ns > Np) vs Step-Down (Vs < Vp, Ns < Np). Cannot operate on steady DC.',
      'Electromagnetic Applications: Electric bells (make-and-break circuit), magnetic reed relays, DC motors (split-ring commutator producing unidirectional torque), AC generators (slip rings producing alternating sinusoidal emf).'
    ],
    contentMarkdown: `GRADE 12 PHYSICS — UNIT 4: ELECTROMAGNETISM

1. MAGNETS AND MAGNETIC FIELDS

• Fundamentals of Magnetism:
  - A magnetic field is the region of space surrounding a magnet or moving electric charge where magnetic forces are exerted.
  - Magnetic Dipole Law: Magnetic poles always exist in pairs (North and South). Isolated magnetic monopoles do not exist in nature; cutting a magnet in half creates two complete smaller magnets.
  - Permanent Magnets (maintain ferromagnetic domain alignment long-term) vs. Electromagnets (magnetic field created only when electric current energizes a coil around a soft ferromagnetic iron core).

• Comparison between Electric and Magnetic Fields:
  - Electric Field (E): Originates on positive charges and terminates on negative charges (SI unit: N/C or V/m). Monopoles exist.
  - Magnetic Field (B): Forms continuous unbroken closed loops with no beginning or end (SI unit: Tesla, T; 1 T = 10^4 Gauss). No monopoles.

• Properties of Magnetic Field Lines:
  1. Emerge from the North pole and enter the South pole in the external space; travel from South to North inside the magnet.
  2. The tangent to a field line at any point gives the direction of the magnetic field vector B.
  3. Field line density is directly proportional to magnetic field strength (crowded near poles).
  4. Magnetic field lines never cross or intersect each other.

============================================================

2. ELECTRIC CURRENT AND MAGNETISM

• Oersted\'s Discovery (1819):
  Demonstrated that an electric current flowing through a conductor deflects a magnetic compass needle, proving that moving electric charges generate magnetic fields.

• Ampere\'s Law & Magnetic Field of a Long Straight Wire:
  B = (mu0 × I) / (2 × pi × r)
  where:
  - B = Magnetic field strength (Tesla)
  - mu0 = Permeability of free space = 4*pi × 10^-7 T m/A
  - I = Current in amperes (A)
  - r = Perpendicular distance from wire (m)

• Fleming\'s / Right-Hand Grip Rule:
  Grasp the wire with the right hand with the thumb pointing in the direction of conventional electric current (+ to -); the curled fingers indicate the circular direction of magnetic field lines.

============================================================

3. ELECTROMAGNETIC INDUCTION: FARADAY\'S AND LENZ\'S LAWS

• Magnetic Flux (Phi_B):
  A measure of the total number of magnetic field lines passing through a given surface area A:
  Phi_B = B × A × cos(theta) (SI unit: Weber, Wb; 1 Wb = 1 T m^2)
  where theta is the angle between magnetic field B and the normal vector to surface A.
  - Maximum flux when plane is perpendicular to B (theta = 0°, cos 0° = 1).
  - Zero flux when plane is parallel to B (theta = 90°, cos 90° = 0).

• Faraday\'s Law of Electromagnetic Induction (Michael Faraday, 1831):
  The magnitude of the induced electromotive force (emf) in a closed circuit is directly proportional to the time rate of change of magnetic flux through the circuit:
  emf (E) = -N × (Delta Phi_B / Delta t)
  where N is the number of coil turns.

• Lenz\'s Law:
  The direction of the induced current is always such that its own magnetic field opposes the original magnetic flux change that produced it.
  - Lenz\'s law is a direct consequence of the Law of Conservation of Energy (mechanical work must be done against opposing magnetic forces to generate electrical energy).

============================================================

4. TRANSFORMERS

• Operating Principle:
  A static electrical device that transfers alternating current (AC) electrical energy from one circuit to another via mutual electromagnetic induction without changing frequency.
  - Construction: Two electrically insulated coils (Primary coil Np and Secondary coil Ns) wound on a laminated soft iron core.

• Transformer Equations (Ideal 100% efficient transformer):
  Np / Ns = Vp / Vs = Is / Ip
  where V = voltage, N = number of turns, I = current.
  - Turns Ratio: Np / Ns

• Transformer Types:
  1. Step-Up Transformer: Ns > Np and Vs > Vp (increases output voltage, decreases output current; used at power generating plants for long-distance grid transmission to minimize I^2*R heat losses).
  2. Step-Down Transformer: Ns < Np and Vs < Vp (decreases output voltage, increases output current; used in phone chargers, substations, and household appliances).

• Transformer Efficiency (eta):
  eta = (Output Power / Input Power) × 100% = [(Vs × Is) / (Vp × Ip)] × 100%

• Note: Transformers cannot operate on steady Direct Current (DC) because DC produces a constant magnetic flux (Delta Phi_B / Delta t = 0), inducing zero emf in the secondary coil.

============================================================

5. PRACTICAL APPLICATIONS OF ELECTROMAGNETISM

• Electric Bell:
  Electromagnet attracts soft iron armature, driving hammer against gong and opening contact screw to interrupt current; spring returns armature to complete circuit, creating continuous ringing.

• Magnetic Relay:
  Electrically operated switch using an electromagnet to safely control a high-power circuit using a low-voltage control signal.

• DC Electric Motor:
  Converts electrical energy into mechanical rotational kinetic energy. Consists of an armature coil in a magnetic field, split-ring Commutator, and carbon Brushes that reverse current every half-turn to maintain continuous unidirectional torque.

• AC Generator (Dynamo):
  Converts mechanical energy into electrical energy. Coil rotated in magnetic field cuts flux lines, generating sinusoidal alternating emf through continuous Slip Rings.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'phys-g12-u5-note',
    title: 'Unit 5: Basics of Electronics (Complete Revision Summary)',
    subject: 'Physics',
    topic: 'Semiconductors, Diodes, Transistors & Logic Gates',
    summary: 'Comprehensive short notes for Grade 12 Physics Unit 5: Semiconductor physics (intrinsic vs extrinsic, N-type vs P-type doping), P-N junction diodes and biasing (forward vs reverse), half-wave and full-wave bridge rectifiers, capacitor filters, LEDs, photodiodes, Bipolar Junction Transistors (BJT NPN/PNP, terminal doping, current gain beta, CE configuration), Integrated Circuits (Jack Kilby & Robert Noyce), analog vs digital signals, and digital logic gates (OR, AND, NOT, NAND, NOR truth tables and boolean algebra).',
    readTimeMinutes: 16,
    isFreePreview: false,
    tags: ['Physics', 'Grade 12', 'Electronics', 'Semiconductors', 'Diodes', 'Transistors', 'Logic Gates', 'Rectification'],
    keyTakeaways: [
      'Semiconductors: Conductivity between conductors and insulators. Pure Intrinsic (Si, Ge) act as insulators at 0 K and conduct at higher temperatures.',
      'Doping: Adding impurity atoms. N-type (doped with Group V pentavalent donors: P, As, Sb; majority carriers are electrons); P-type (doped with Group III trivalent acceptors: B, Al, Ga, In; majority carriers are positive holes).',
      'P-N Junction Diode: Barrier potential (0.7 V for Si, 0.3 V for Ge). Forward Bias (anode to P, cathode to N: thin depletion, conducts above cut-in voltage); Reverse Bias (widens depletion, blocks majority current, high breakdown voltage).',
      'Rectification: Converting AC to DC. Half-wave (1 diode, conducts on positive half-cycle only); Full-wave bridge (4 diodes, conducts on both half-cycles with 2x efficiency); Smoothing capacitor filters voltage ripples.',
      'Special Diodes: Light Emitting Diode (LED: emits photons during forward-bias electron-hole recombination); Photodiode (reverse-biased diode converting incident photons into electrical photocurrent).',
      'BJT Transistor (NPN and PNP): 3 terminals: Emitter (heavily doped), Base (very thin, lightly doped), Collector (moderately doped, largest area). Active mode: Emitter-Base forward biased, Collector-Base reverse biased. Current formula: I_E = I_B + I_C. Current gain beta = I_C / I_B.',
      'Integrated Circuits (ICs): Revolutionized by Jack Kilby and Robert Noyce; thousands to millions of transistors, diodes, resistors fabricated on a single silicon chip.',
      'Digital Logic Gates: OR (Y = A + B), AND (Y = A * B), NOT (Y = NOT A), NAND (Y = NOT(A * B)), NOR (Y = NOT(A + B)). NAND and NOR are universal gates.'
    ],
    contentMarkdown: `GRADE 12 PHYSICS — UNIT 5: BASICS OF ELECTRONICS

1. SEMICONDUCTORS AND DOPING

• Conductor vs. Insulator vs. Semiconductor:
  - Conductors (Metals): High electrical conductivity with abundant free conduction electrons.
  - Insulators (Glass, Rubber, Plastic): Extremely low conductivity; valence electrons are tightly bound in covalent bonds with large forbidden energy bandgaps.
  - Semiconductors (Silicon Si, Germanium Ge, Gallium Arsenide GaAs): Electrical conductivity between metals and insulators. At absolute zero (0 K), semiconductors act as perfect insulators; at room temperature, thermal agitation frees valence electrons, creating electron-hole pairs for conduction.

• Crystal Lattice and Charge Carriers:
  - Silicon (Group IV) has 4 valence electrons forming covalent bonds with 4 neighboring atoms.
  - Free Electron: Conduction electron in the conduction band carrying negative charge (-e).
  - Hole: The vacancy left in the valence bond by an escaped electron, acting as an effective positive charge carrier (+e).

• Intrinsic vs. Extrinsic Semiconductors:
  - Intrinsic Semiconductor: Chemically pure, undoped crystal (equal electron and hole concentrations: n = p).
  - Extrinsic Semiconductor: Doped semiconductor crystal whose conductivity is engineered by intentionally adding trace impurity atoms (dopants).

• Types of Extrinsic Semiconductors:
  1. N-Type Semiconductor:
     - Formed by doping pure Silicon with Group V Pentavalent donor impurities (Phosphorus P, Arsenic As, Antimony Sb, Bismuth Bi).
     - 4 valence electrons form bonds with Si; the 5th electron becomes a free conduction electron.
     - Majority Charge Carriers: Free Electrons.
     - Minority Charge Carriers: Holes.
  2. P-Type Semiconductor:
     - Formed by doping pure Silicon with Group III Trivalent acceptor impurities (Boron B, Aluminum Al, Gallium Ga, Indium In).
     - 3 valence electrons form bonds with Si, leaving one incomplete bond (a hole).
     - Majority Charge Carriers: Holes.
     - Minority Charge Carriers: Electrons.

============================================================

2. P-N JUNCTION DIODES AND BIASING

• Formation of the P-N Junction:
  When P-type and N-type semiconductor layers are joined, majority electrons from the N-side diffuse into the P-side and recombine with holes. This leaves unneutralized positive donor ions on the N-side and negative acceptor ions on the P-side, creating a narrow charge-free Depletion Region and an internal Barrier Potential (0.7 V for Silicon; 0.3 V for Germanium).

• Diode Biasing:
  1. Forward Bias:
     - Positive battery terminal connected to P-side (Anode); negative terminal to N-side (Cathode).
     - External voltage opposes and overcomes the barrier potential, narrowing the depletion region and allowing high forward current to flow once voltage exceeds the cut-in threshold (0.7 V for Si).
  2. Reverse Bias:
     - Positive battery terminal connected to N-side; negative terminal to P-side.
     - Widens the depletion region, blocking majority carrier flow. Only a tiny temperature-dependent reverse leakage current flows until catastrophic Reverse Breakdown occurs.

• Diode Symbol: Arrowhead indicates the P-side (Anode) pointing in the direction of conventional current flow toward the vertical bar N-side (Cathode).

============================================================

3. RECTIFICATION AND SPECIAL DIODES

• Rectification Definition:
  The process of converting alternating current (AC) voltage into unidirectional pulsating direct current (DC) voltage using diodes.

• Types of Rectifiers:
  1. Half-Wave Rectifier:
     - Uses a single diode in series with load resistor.
     - Conducts only during positive input half-cycles; blocks negative half-cycles. Output frequency equals input frequency (50/60 Hz).
  2. Full-Wave Bridge Rectifier:
     - Uses four diodes (D1, D2, D3, D4) in a bridge configuration.
     - Diodes conduct in diagonal pairs (D1-D2 on positive half-cycle, D3-D4 on negative half-cycle), providing continuous unidirectional load current across both half-cycles with twice the efficiency of a half-wave rectifier.
  3. Filter Capacitors:
     - Placed in parallel with load resistor; charges during peak voltage and discharges when voltage falls, smoothing pulsating DC into a steady DC output voltage.

• Special Purpose Diodes:
  - Light Emitting Diode (LED): Forward-biased P-N junction where recombining electron-hole pairs release energy as visible light photons. Highly energy efficient.
  - Photodiode: Reverse-biased P-N junction where incident light photons generate electron-hole pairs in the depletion region, producing a proportional photocurrent.

============================================================

4. TRANSISTORS (BIPOLAR JUNCTION TRANSISTORS - BJT)

• Construction & Types:
  A three-terminal semiconductor device consisting of two P-N junctions:
  - NPN Transistor: Thin P-type base sandwiched between two N-type regions.
  - PNP Transistor: Thin N-type base sandwiched between two P-type regions.

• The Three Terminals:
  1. Emitter (E): Heavily doped to supply majority carriers. Arrow on schematic symbol points in direction of conventional current flow.
  2. Base (B): Centrally located, ultra-thin, and lightly doped to minimize carrier recombination.
  3. Collector (C): Moderately doped, largest physical area to dissipate operating heat.

• Active Mode Biasing Rule:
  - Emitter-Base junction must be Forward Biased.
  - Collector-Base junction must be Reverse Biased.

• Current Relationship in Transistors:
  I_Emitter = I_Base + I_Collector
  (Since base current I_B is very small micro-amperes, I_C is approximately equal to I_E).

• Current Amplification Factor (beta):
  beta = I_Collector / I_Base
  (Typically ranges from 50 to 300; small changes in base current control large collector currents).

• Circuit Configurations:
  - Common Emitter (CE): Highest power and voltage gain; most widely used for signal amplification and electronic switching.
  - Common Base (CB): Voltage gain, no current gain (current gain alpha < 1).
  - Common Collector (CC / Emitter Follower): High current gain, unity voltage gain.

============================================================

5. INTEGRATED CIRCUITS (ICs) & DIGITAL LOGIC GATES

• Integrated Circuits (Invented by Jack Kilby and Robert Noyce):
  Microscopic fabrication of complete circuits (transistors, diodes, resistors, capacitors) onto a single silicon chip (microchip). Enables computing miniaturization, low power consumption, and high operational reliability.

• Analog vs. Digital Signals:
  - Analog Signal: Continuous voltage or current waveform varying smoothly over time.
  - Digital Signal: Discrete binary signal taking only two distinct voltage levels: Logic 0 (Low / 0 V / False) and Logic 1 (High / +5 V / True).

• Basic Digital Logic Gates and Boolean Expressions:
  1. OR Gate:
     - Boolean Expression: Y = A + B
     - Function: Output Y = 1 if input A = 1 OR input B = 1.
  2. AND Gate:
     - Boolean Expression: Y = A . B
     - Function: Output Y = 1 only if input A = 1 AND input B = 1.
  3. NOT Gate (Inverter):
     - Boolean Expression: Y = NOT A
     - Function: Inverts binary input (0 becomes 1; 1 becomes 0).

• Universal Logic Gates:
  1. NAND Gate: AND gate followed by NOT gate:
     Y = NOT(A . B) (Output is 0 only when all inputs are 1).
  2. NOR Gate: OR gate followed by NOT gate:
     Y = NOT(A + B) (Output is 1 only when all inputs are 0).
  - NAND and NOR gates are called universal gates because any digital logic circuit or microprocessor can be constructed entirely from combinations of them.
`,
    createdAt: '2026-08-19'
  }
];
