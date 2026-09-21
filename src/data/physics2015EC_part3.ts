import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2015_EC_PART3: Question[] = [
  {
    id: 'phy-2015-q31',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Wave Optics: Coherent Light Properties & Interference',
    questionText: 'Which one of the following statements does NOT describe coherent light or interference of coherent light?',
    options: [
      'Two waves which maintain constant phase relationship can produce sustained interference.',
      'Sustainable interference pattern can be formed by two waves with variable phase difference.',
      'In order for two waves to be coherent, they must be the same type of wave.',
      'Coherent light waves have the same frequency and wavelength.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Two sources of light are coherent if and only if they maintain a CONSTANT (fixed) phase difference, identical frequency, and identical wavelength. Two sources with a variable (randomly fluctuating) phase difference will wash out any stable interference fringes into uniform illumination. Hence, statement B is false.

🇪🇹 አማርኛ (Amharic):
ኮሂረንት (Coherent) የሆኑ የብርሃን ሞገዶች ሁልጊዜ ቋሚ የሆነ የፌዝ ልዩነት (Constant phase difference) ሊኖራቸው ይገባል። ተለዋዋጭ የፌዝ ልዩነት (variable phase difference) ቋሚ የሆነ ጣልቃ-ገብነት ስርዓት መፍጠር አይችልም።

🌳 Afaan Oromoo:
Danbaaleen ifaa kooheerantii ta'an yeroo hunda garaagarummaa 'phase' dhaabbataa qabaachuu qabu. Kan jijjiiramu yoo ta'e 'interference' dhaabbataa uumuu hin danda'an.`,
    hint: 'Sustained interference requires a constant, unwavering phase difference over time.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q32',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Circuit Theory: Kirchhoff\'s Junction Rule & Conservation Laws',
    questionText: 'Kirchhoff\'s junction rule is a direct consequence of conservation of',
    options: [
      'momentum.',
      'mass.',
      'charge.',
      'electrical energy.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Kirchhoff's Junction Rule (Current Law, Σ I_in = Σ I_out) states that no charge can accumulate or disappear at a circuit junction, which is a direct consequence of the Conservation of Electric Charge.
• Kirchhoff's Loop Rule (Voltage Law, Σ ΔV = 0) is a consequence of the Conservation of Energy.

🇪🇹 አማርኛ (Amharic):
የኪርቾፍ የመገጣጠሚያ ሕግ (Kirchhoff\'s junction rule) የኤሌክትሪክ ቻርጅ ጥበቃ ሕግ (Conservation of charge) ውጤት ነው።

🌳 Afaan Oromoo:
Seerri walqunnamtii Kirchoof (Kirchhoff\'s junction rule) bu\'uura seera qusannaa chaarjiiti (Conservation of charge).`,
    hint: 'Junction rule = Conservation of Charge; Loop rule = Conservation of Energy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q33',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Quantum Physics: Einstein\'s Photoelectric Effect',
    questionText: 'Which one of the following statements describes the photoelectric effect interaction of radiation with matter?',
    options: [
      'When radiation of certain frequency f, interact with atoms of a material, electrons will be emitted with energies proportional to the radiation energy.',
      'Any value of energy of photons (radiations) is capable of producing photoelectrons from a metal.',
      'In photoelectric effect, the photoelectron energy is directly proportional to the wavelength of incident radiation.',
      'The intensity of radiation incident on a material can affect the energy of photoelectrons emitted from the metal surface.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Einstein's photoelectric equation states:
K_max = h·f - Φ
The maximum kinetic energy of emitted photoelectrons depends directly and linearly on the photon frequency f and radiation energy (E = hf), provided f exceeds the threshold frequency f₀. Radiation intensity increases the emission rate (number of photoelectrons), not their individual kinetic energy.

🇪🇹 አማርኛ (Amharic):
በፎቶኤሌክትሪክ ሂደት ውስጥ የሚወጡት ኤሌክትሮኖች ኃይል በቀጥታ ከተጋረጠው የብርሃን ጨረር ፍሪኩዌንሲ እና የፎቶን ኃይል (E = hf) ጋር ተመጣጣኝ ነው።

🌳 Afaan Oromoo:
Adeemsa 'photoelectric' keessatti anniisaan elektiroonota ba'anii kallattiin anniisaa fi firiikuweensii ifa dhufuutiin (E = hf) murtaa'a.`,
    hint: 'Photoelectron maximum kinetic energy depends on photon frequency/energy (E = hf), not on intensity.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q34',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Electrostatics: Coulomb\'s Law Net Force Superposition',
    questionText: 'A positive point charge of +2 µC is placed on the x-axis at the origin (x = 0). A positive charge of +6 µC and a negative point charge of -4 µC are placed at x = -3 cm and x = +3 cm, respectively. What is the net electric force on the +2 µC charge?',
    options: [
      '200 N toward the negative x-axis',
      '200 N toward the positive x-axis',
      '40 N toward the positive x-axis',
      '40 N toward the negative x-axis'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Let q₀ = +2 µC at x = 0.
1. Force from q₁ (+6 µC at x = -3 cm = -0.03 m):
Since both charges are positive, q₁ repels q₀ to the right (+x direction):
F₁ = k · |q₁ · q₀| / r₁² = (9 × 10⁹) × (6 × 10⁻⁶ × 2 × 10⁻⁶) / (0.03)²
F₁ = (9 × 10⁹ × 12 × 10⁻¹²) / (9 × 10⁻⁴) = 120 N (+x direction).

2. Force from q₂ (-4 µC at x = +3 cm = +0.03 m):
Since q₂ is negative and q₀ is positive, q₂ attracts q₀ to the right (+x direction):
F₂ = k · |q₂ · q₀| / r₂² = (9 × 10⁹) × (4 × 10⁻⁶ × 2 × 10⁻⁶) / (0.03)²
F₂ = (9 × 10⁹ × 8 × 10⁻¹²) / (9 × 10⁻⁴) = 80 N (+x direction).

Net Force:
F_net = F₁ + F₂ = 120 N + 80 N = 200 N toward the positive x-axis.

🇪🇹 አማርኛ (Amharic):
1. በግራ በኩል ያለው +6 µC ቻርጅ የ+2 µC ቻርጁን ወደ ቀኝ (+x) በ120 N ይገፋዋል።
2. በቀኝ በኩል ያለው -4 µC ቻርጅ ደግሞ ወደ ቀኝ (+x) በ80 N ይስበዋል።
ድምር ኃይል = 120 N + 80 N = 200 N ወደ ፖዘቲቭ x-ዘንግ።

🌳 Afaan Oromoo:
Humni +6 µC irraa dhufu 120 N gara mirgaati (+x). Humni -4 µC irraa harkisus 80 N gara mirgaati (+x). Walitti: 120 + 80 = 200 N gara +x.`,
    hint: 'Both forces push/pull in the same direction: Repulsion from the left charge (120 N right) + Attraction from the right charge (80 N right) = 200 N right.',
    difficulty: 'hard',
    points: 20,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q35',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Fields & Potentials: Gravitational vs Electrostatic Fields',
    questionText: 'Consider a point charge Q in an electrostatic field and a point mass m in a gravitational field. Which one of the following statements is correct about the potential energy of the objects?',
    options: [
      'The electric potential decreases as a positive charge moves opposite to the electric field while the gravitational potential of the mass increases when it moves along the gravitational field.',
      'The potential energy of the point charge and that of the point mass changes as they move over equipotential surfaces in their respective fields.',
      'The potential energies at distance r, from the field sources for both Q and m vary inversely with r².',
      'The gravitational force on mass m is in the same direction of gravitational field while electric force on Q in the same or opposite directions of electric field depending the sign of the charge.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Gravitational force is always in the direction of the gravitational field: F_g = m·g (since mass is always positive).
• Electric force F_e = q·E is in the direction of E if q is positive, and opposite to E if q is negative.
Statement D is completely accurate.

🇪🇹 አማርኛ (Amharic):
የስበት ኃይል ሁልጊዜ ከስበት መስኩ ጋር በተመሳሳይ አቅጣጫ ሲሆን፣ የኤሌክትሪክ ኃይል ግን እንደ ቻርጁ ምልክት (ፖዘቲቭ ወይም ኔጌቲቭ) የመስኩን አቅጣጫ ወይም የተቃራኒ አቅጣጫ ይከተላል።

🌳 Afaan Oromoo:
Humni harkisa lafaa yeroo hunda kallattii dirrichaa hordofa; humni elektiriikii garuu akkuma mallattoo chaarjichaatti kallattii dirrichaa ykn faallaa isaa ta'a.`,
    hint: 'Mass is always positive (F_g along g), whereas charge can be positive (F_e along E) or negative (F_e opposite E).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q36',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Electric Circuits: Resistor Network Analysis',
    questionText: 'Four resistors are connected to a 14 V voltage source: a parallel pair of (3 Ω and 6 Ω) is connected in series with a 4 Ω resistor and a 1 Ω resistor. What are the current through the 3 Ω resistor and the voltage drop across the 4 Ω resistor, respectively?',
    options: [
      '(2/3) A and 4 V',
      '2 A and (3/4) V',
      '(4/3) A and 8 V',
      '(3/4) A and 8 V'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Equivalent resistance of the parallel combination:
R_p = (3 × 6) / (3 + 6) = 18 / 9 = 2 Ω.

Step 2: Total series resistance of the complete circuit:
R_total = R_p + 4 Ω + 1 Ω = 2 + 4 + 1 = 7 Ω.

Step 3: Total circuit current:
I_total = V_total / R_total = 14 V / 7 Ω = 2 A.

Step 4: Voltage across parallel pair:
V_p = I_total × R_p = 2 A × 2 Ω = 4 V.
Current through 3 Ω resistor:
I_3Ω = V_p / 3 Ω = 4/3 A.

Step 5: Voltage drop across 4 Ω resistor:
V_4Ω = I_total × 4 Ω = 2 A × 4 Ω = 8 V.

Therefore: Current through 3 Ω is 4/3 A, and voltage across 4 Ω is 8 V.

🇪🇹 አማርኛ (Amharic):
1. R_parallel = (3×6)/(3+6) = 2 Ω።
2. R_total = 2 + 4 + 1 = 7 Ω።
3. I_total = 14 V / 7 Ω = 2 A።
4. የ3 Ω ተቃውሞ ቮልቴጅ 4 V ስለሆነ፣ በእሱ የሚያልፈው ጅረት I = 4/3 A።
5. በ4 Ω ላይ የሚጣለው ቮልቴጅ V = 2 A × 4 Ω = 8 V።

🌳 Afaan Oromoo:
R_waliigalaa = 7 Ω, I_waliigalaa = 2 A. V_paaraaleelii = 4 V => I_3Ω = 4/3 A. V_4Ω = 2 × 4 = 8 V.`,
    hint: 'Total current is 14V / 7Ω = 2A. Parallel voltage is 2A × 2Ω = 4V (so I_3Ω = 4/3A). Voltage on 4Ω is 2A × 4Ω = 8V.',
    difficulty: 'hard',
    points: 20,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q37',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Electromagnetism: Lorentz Magnetic Force on Electron',
    questionText: 'An electron moving with a speed of 2.2 × 10⁷ m/s east enters in the region of magnetic field strength of 5 × 10⁻⁴ T directed north. What is the magnetic force experienced by the electron?',
    options: [
      '1.76 × 10⁻¹⁵ N, perpendicular to north and east directions',
      '8 × 10⁻¹⁵ N, perpendicular to north and east directions.',
      '3.64 × 10⁻³⁰ N, towards east direction',
      '1.76 × 10⁻¹⁵ N towards north direction'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Magnitude of magnetic Lorentz force:
F_B = |q| · v · B · sin(90°)

Given:
• |q| = 1.60 × 10⁻¹⁹ C
• v = 2.2 × 10⁷ m/s (east)
• B = 5 × 10⁻⁴ T (north)

F_B = (1.60 × 10⁻¹⁹) × (2.2 × 10⁷) × (5 × 10⁻⁴)
F_B = 1.60 × 2.2 × 5 × 10⁻¹⁶ = 17.6 × 10⁻¹⁶ = 1.76 × 10⁻¹⁵ N.

Direction: By the right-hand rule, v (east) × B (north) points upwards out of the page (+z). Since an electron carries a negative charge, the force is directed downwards into the page (-z), which is perpendicular to both north and east directions.

🇪🇹 አማርኛ (Amharic):
የሎሬንትዝ ኃይል F = q·v·B = (1.60 × 10⁻¹⁹) × (2.2 × 10⁷) × (5 × 10⁻⁴) = 1.76 × 10⁻¹⁵ N። አቅጣጫው ከምስራቅና ሰሜን ጋር ፐርፔንዲኩላር (ወደ ታች) ነው።

🌳 Afaan Oromoo:
Humni maagneetawaa F = q·v·B = 1.76 × 10⁻¹⁵ N ta'a. Kallattiin isaas kallattii kaabaa fi bahaatiin walqaxxaamureeti (perpendicular).`,
    hint: 'Calculate F = q·v·B = 1.60×10⁻¹⁹ × 2.2×10⁷ × 5×10⁻⁴ = 1.76×10⁻¹⁵ N, pointing vertically perpendicular to the horizontal plane.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q38',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Electromagnetic Induction: Faraday\'s Law of Induced EMF',
    questionText: 'A magnetic field intensity of 4 × 10⁻⁴ T crosses a coil having face area 100 cm² and 5 × 10⁴ turns perpendicular to the face of the coil. If the magnetic flux in the coil is set to zero within 2 ms, what is the magnitude of the induced emf in the coil?',
    options: [
      '4 × 10⁻⁴ V',
      '100 V',
      '10 V',
      '2 × 10⁻⁵ V'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
According to Faraday's Law of Electromagnetic Induction:
|ε| = N · (ΔΦ / Δt) = N · (B · A / Δt)

Given:
• N = 5 × 10⁴ turns
• A = 100 cm² = 100 × 10⁻⁴ m² = 10⁻² m²
• B = 4 × 10⁻⁴ T
• Δt = 2 ms = 2 × 10⁻³ s

ΔΦ = B · A = (4 × 10⁻⁴ T) × (10⁻² m²) = 4 × 10⁻⁶ Wb

|ε| = (5 × 10⁴) × (4 × 10⁻⁶ Wb) / (2 × 10⁻³ s)
|ε| = (20 × 10⁻²) / (2 × 10⁻³) = 0.20 / 0.002 = 100 V.

🇪🇹 አማርኛ (Amharic):
በፋራዴይ ሕግ መሰረት: |ε| = N · (ΔΦ / Δt) = (5 × 10⁴) × (4 × 10⁻⁴ × 10⁻²) / (2 × 10⁻³) = 0.20 / 0.002 = 100 V ይሆናል።

🌳 Afaan Oromoo:
Seera Faaraadeeyiin: |ε| = N · (ΔΦ / Δt) = (5 × 10⁴) × (4 × 10⁻⁶) / (2 × 10⁻³) = 100 V ta'a.`,
    hint: 'Use Faraday\'s Law: EMF = N·(B·A)/Δt = 50000 × (4×10⁻⁶) / 0.002 = 100 V.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q39',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'AC Circuits: Series RLC Resonant Angular Frequency',
    questionText: 'In a simple a.c. circuit, an inductor of 4 µH and a capacitor of 9 pF are connected in series to each other and the combination is connected to an a.c. source. What is the angular frequency at resonance of the circuit?',
    options: [
      '3.8 × 10⁸ rad/s',
      '2.7 × 10⁵ rad/s',
      '3.6 × 10⁷ rad/s',
      '1.67 × 10⁸ rad/s'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The resonant angular frequency (ω₀) in an LC circuit is:
ω₀ = 1 / √(L · C)

Given:
• L = 4 µH = 4 × 10⁻⁶ H
• C = 9 pF = 9 × 10⁻¹² F

L · C = (4 × 10⁻⁶) × (9 × 10⁻¹²) = 36 × 10⁻¹⁸ s²
√(L · C) = 6 × 10⁻⁹ s

ω₀ = 1 / (6 × 10⁻⁹ s) = (1/6) × 10⁹ rad/s ≈ 0.1667 × 10⁹ = 1.67 × 10⁸ rad/s.

🇪🇹 አማርኛ (Amharic):
የሬዞናንስ አንግላር ፍሪኩዌንሲ ω₀ = 1 / √(LC) = 1 / √(4×10⁻⁶ × 9×10⁻¹²) = 1 / (6×10⁻⁹) = 1.67 × 10⁸ rad/s ይሆናል።

🌳 Afaan Oromoo:
Firiikuweensii koofii rezoonaansii: ω₀ = 1 / √(LC) = 1 / (6 × 10⁻⁹) = 1.67 × 10⁸ rad/s ta'a.`,
    hint: 'Resonant angular frequency is ω₀ = 1/√(LC) = 1/√(36×10⁻¹⁸) = 1/(6×10⁻⁹) = 1.67×10⁸ rad/s.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q40',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Atomic Physics: Bohr Model Photon Emission Frequency',
    questionText: 'Electrons in a Sodium atom emit radiation when they move from a higher energy level of -0.81 eV to a lower energy level of -2.21 eV. What is the frequency of radiation emitted in the process? (h = 6.626 × 10⁻³⁴ J·s, 1 eV = 1.602 × 10⁻¹⁹ J).',
    options: [
      '3.38 × 10¹⁴ Hz',
      '1.40 × 10¹⁵ Hz',
      '8.10 × 10¹⁵ Hz',
      '2.21 × 10¹⁴ Hz'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Energy of emitted photon:
ΔE = E_initial - E_final = -0.81 eV - (-2.21 eV) = +1.40 eV

Convert photon energy to Joules:
ΔE = 1.40 eV × 1.602 × 10⁻¹⁹ J/eV = 2.2428 × 10⁻¹⁹ J

Calculate frequency using Planck\'s relation (E = h·f):
f = ΔE / h = (2.2428 × 10⁻¹⁹ J) / (6.626 × 10⁻³⁴ J·s)
f ≈ 0.3385 × 10¹⁵ Hz = 3.38 × 10¹⁴ Hz.

🇪🇹 አማርኛ (Amharic):
የተለቀቀው የፎቶን ኃይል ΔE = -0.81 - (-2.21) = 1.40 eV = 2.243 × 10⁻¹⁹ J።
ፍሪኩዌንሲ f = ΔE / h = (2.243 × 10⁻¹⁹) / (6.626 × 10⁻³⁴) = 3.38 × 10¹⁴ Hz።

🌳 Afaan Oromoo:
Anniisaan footoonii ΔE = 1.40 eV = 2.243 × 10⁻¹⁹ J. Firiikuweensiin f = ΔE / h = 3.38 × 10¹⁴ Hz ta'a.`,
    hint: 'Photon energy ΔE = 1.40 eV = 2.243×10⁻¹⁹ J. Frequency f = ΔE / h = 2.243×10⁻¹⁹ / 6.626×10⁻³⁴ = 3.38×10¹⁴ Hz.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  }
];
