import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2015_EC_PART1: Question[] = [
  {
    id: 'phy-2015-q1',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Electrostatics: Electric Field Strength Units & Dimensions',
    questionText: 'Which one of the following units is NOT a possible unit of electric field strength?',
    options: [
      'Newton/Coulomb',
      'Joule/Coulomb',
      'Volt/meter',
      'Joule/(Coulomb×meter)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Electric field strength is defined as force per unit charge (E = F/q) with SI unit Newton/Coulomb (N/C), or as the negative potential gradient (E = -dV/dx) with SI unit Volt/meter (V/m).
Since 1 Volt = 1 Joule/Coulomb:
• V/m = (Joule/Coulomb)/meter = Joule/(Coulomb·meter).
However, Joule/Coulomb = Volt, which is the unit of electric potential (voltage), NOT electric field strength.

🇪🇹 አማርኛ (Amharic):
የኤሌክትሪክ መስክ ጥንካሬ (Electric field strength) መለኪያ N/C, V/m ወይም J/(C·m) ነው። Joule/Coulomb ግን የኤሌክትሪክ ፖቴንሺያል (Electric potential / Volt) መለኪያ እንጂ የመስክ ጥንካሬ አይደለም።

🌳 Afaan Oromoo:
Safartuun humna dirree elektiriikii (Electric field strength) N/C, V/m ykn J/(C·m) dha. Joule/Coulomb garuu safartuu pooteenshiyaala elektiriikiiti (Volt).`,
    hint: 'Electric field is force per unit charge (N/C) or potential gradient (V/m). Joule per Coulomb is Electric Potential (Volt).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q2',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Magnetism: Magnetic Domains & Thermal Demagnetization',
    questionText: 'Which one of the following statements does NOT describe magnetic nature of a material?',
    options: [
      'There is no a single magnetic North or magnetic South Pole.',
      'Magnetic dipoles of a material aligned parallel when the magnetic material is placed in external magnetic field.',
      'Magnetic molecules in a magnet will align when they are heated or hammered.',
      'Magnetic molecules (dipoles) are oriented randomly when a material lose its magnetism.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Heating (above the Curie temperature) or mechanical hammering imparts thermal and kinetic agitation to the atoms, which disrupts domain alignment and causes magnetic dipoles to orient randomly (demagnetizing the material). It never causes them to align.

🇪🇹 አማርኛ (Amharic):
ማግኔት ሲሞቅ ወይም በመዶሻ ሲመታ በውስጡ ያሉት ማግኔቲክ ዲፖሎች ይበታተናሉ (ይረበሻሉ) እንጂ ወደ አንድ አቅጣጫ አይደረደሩም። ስለዚህ ማግኔቱ ኃይሉን ያጣል።

🌳 Afaan Oromoo:
Maagneetiin yoo oo'ifame ykn dhawame daayipooliin maagneetawaa bittinnaa'uun maagneetoomina dhabsiisa malee wal hin qajeelchu.`,
    hint: 'Heating and hammering provide random thermal kinetic energy that destroys magnetic alignment (demagnetization).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q3',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Semiconductors: Extrinsic Doping & Charge Carriers',
    questionText: 'Which one of the following statements is correct about conduction in semiconductors?',
    options: [
      'N-type semiconductor is made from half-filled shell atoms doped with accepter atoms.',
      'P-type semiconductors have holes as minority charge carriers in the crystal lattice of the material.',
      'The majority charge carriers in N-type semiconductors are electrons due to doping.',
      'When atoms with half-filled electrons are doped with atoms of five valance electrons, the majority charge carriers are holes.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In N-type semiconductors, tetravalent intrinsic semiconductor atoms (like Silicon or Germanium) are doped with pentavalent donor impurities (5 valence electrons, e.g. Phosphorus, Arsenic). The extra fifth electron becomes a free conduction electron, making electrons the majority charge carriers and holes the minority carriers.

🇪🇹 አማርኛ (Amharic):
በN-አይነት ሴሚኮንዳክተር ውስጥ አምስት የቫሌንስ ኤሌክትሮን ያላቸውን ንጥረ ነገሮች (Pentavalent donors) በመጨመር የተፈጠረ ስለሆነ፣ አብላጫዎቹ የኮንዳክሽን ተሸካሚዎች (majority charge carriers) ኤሌክትሮኖች ናቸው።

🌳 Afaan Oromoo:
Semiikondaaktara N-type keessatti elektiroononni kaffaltii baay'ee (majority charge carriers) ta'u sababiin isaas dooppiingii peentaavaaleentiitiin waan uumameefi.`,
    hint: 'N-type (Negative-type) semiconductors are doped with pentavalent donors, making free electrons the majority carriers.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: true,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q4',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Wave Motion & Sound: Inverse-Square Law for Spherical Waves',
    questionText: 'A small source emits sound waves which are spherical. The intensity of the sound wave measured at a distance r = 3.0 m from the source is I = 5 W/m². At what distance from the source would the intensity be one-fourth as much as it is at r = 3.0 m?',
    options: [
      '12.0 m',
      '9.0 m',
      '4.5 m',
      '6.0 m'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Sound intensity from a point source follows the inverse-square law:
I = P / (4πr²)  ⇒  I ∝ 1/r²

Therefore:
I₁ · r₁² = I₂ · r₂²
Given I₂ = I₁ / 4 and r₁ = 3.0 m:
I₁ · (3.0)² = (I₁ / 4) · r₂²
9.0 = r₂² / 4
r₂² = 36.0  ⇒  r₂ = 6.0 m.

🇪🇹 አማርኛ (Amharic):
የድምፅ ጥንካሬ ከርቀት ካሬ ጋር የተገላቢጦሽ ዝምድና አለው (I ∝ 1/r²)። ጥንካሬው ወደ 1/4 ዝቅ እንዲል ርቀቱ በ2 እጥፍ መጨመር አለበት: r₂ = 2 × 3.0 m = 6.0 m።

🌳 Afaan Oromoo:
Jabeesummaan sagalee fageenya waliin wal-faallessa (I ∝ 1/r²). Jabeesummaan gara 1/4tti gadi bu'uuf fageenyi dacha 2 ta'uu qaba: r₂ = 2 × 3.0 m = 6.0 m.`,
    hint: 'According to the inverse-square law (I ∝ 1/r²), reducing intensity by a factor of 4 requires doubling the distance (2 × 3.0 m).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q5',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Mechanics: Center of Mass of Two-Particle Systems',
    questionText: 'Consider a system of two point masses M₁ and M₂, with M₁ = 0.5 M₂. The two masses are located on the x-y plane at M₁(4, 5) cm and M₂(6, 3) cm. Which one of the following alternatives indicates the position of center of mass of the system?',
    options: [
      '(5, 4) cm',
      '(5/3, 7/3) cm',
      '(16/3, 11/3) cm',
      '(11/3, 16/3) cm'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Given M₁ = 0.5 M₂, let M₁ = 1 and M₂ = 2 (Total mass M_total = 1 + 2 = 3).
Coordinates:
• M₁: (x₁, y₁) = (4, 5) cm
• M₂: (x₂, y₂) = (6, 3) cm

Center of mass coordinates:
x_cm = (M₁x₁ + M₂x₂) / M_total = (1·4 + 2·6) / 3 = (4 + 12) / 3 = 16/3 cm
y_cm = (M₁y₁ + M₂y₂) / M_total = (1·5 + 2·3) / 3 = (5 + 6) / 3 = 11/3 cm

Position vector R_cm = (16/3, 11/3) cm.

🇪🇹 አማርኛ (Amharic):
የክብደት ማዕከል (Center of mass) ቀመርን በመጠቀም:
x_cm = (1×4 + 2×6)/3 = 16/3 cm
y_cm = (1×5 + 2×3)/3 = 11/3 cm
ስለዚህ (16/3, 11/3) cm ይሆናል።

🌳 Afaan Oromoo:
Iddoo walakkaa ulfaatinaa (Center of mass):
x_cm = (1×4 + 2×6)/3 = 16/3 cm
y_cm = (1×5 + 2×3)/3 = 11/3 cm.`,
    hint: 'Use the weighted average formulas: x_cm = (M₁x₁ + M₂x₂)/(M₁+M₂) and y_cm = (M₁y₁ + M₂y₂)/(M₁+M₂).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q6',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Gravitation: Acceleration Due to Gravity at Altitude',
    questionText: 'What is the acceleration due to gravity at an altitude twice the radius of the Earth? (g_E is the gravitational acceleration on the surface of the Earth).',
    options: [
      'g_E / 3',
      'g_E / 9',
      '3 g_E',
      'g_E / 4'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Gravitational acceleration at distance r from the Earth's center is:
g = G·M_E / r²

At the Earth's surface: r = R_E ⇒ g_E = G·M_E / R_E²
At altitude h = 2R_E:
The total distance from the center is r = R_E + h = R_E + 2R_E = 3R_E.
g_h = G·M_E / (3R_E)² = G·M_E / (9R_E²) = g_E / 9.

🇪🇹 አማርኛ (Amharic):
ከምድር ገጽታ በ2R_E ከፍታ ላይ ያለ አካል ከምድር እምብርት ያለው አጠቃላይ ርቀት r = R_E + 2R_E = 3R_E ነው። የስበት ማፍጠኛ g = G·M/r² = G·M/(3R_E)² = g_E / 9 ይሆናል።

🌳 Afaan Oromoo:
Fageenyi giddu-galeessa lafaa irraa r = R_E + 2R_E = 3R_E waan ta'eef: g = g_E / (3)² = g_E / 9 ta'a.`,
    hint: 'Measure distance r from the center of Earth: r = R_E + 2R_E = 3R_E, then square the denominator (3² = 9).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q7',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Capacitance: Series & Parallel Capacitor Networks',
    questionText: 'Four capacitors are connected in a capacitor network between terminals a and b: a capacitor of 3/7 µF is in series with a parallel pair of (2 µF and 1 µF), which is in series with 3/4 µF. The equivalent capacitance between terminals a and b in µF is:',
    options: [
      '3/4',
      '12',
      '4',
      '1/4'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Simplify the parallel combination of (2 µF and 1 µF):
C_parallel = 2 µF + 1 µF = 3 µF.

Step 2: Calculate equivalent capacitance of the three series components:
C₁ = 3/7 µF, C_parallel = 3 µF = 3/1 µF, C₃ = 3/4 µF.

1/C_eq = 1/C₁ + 1/C_parallel + 1/C₃
1/C_eq = 1/(3/7) + 1/3 + 1/(3/4) = 7/3 + 1/3 + 4/3 = (7 + 1 + 4) / 3 = 12/3 = 4 µF⁻¹.

Therefore:
C_eq = 1 / 4 µF = 0.25 µF.

🇪🇹 አማርኛ (Amharic):
1. በፓራላል የተያያዙት: C_p = 2 + 1 = 3 µF።
2. በሲሪስ የተያያዙት: 1/C_eq = 7/3 + 1/3 + 4/3 = 12/3 = 4 => C_eq = 1/4 µF።

🌳 Afaan Oromoo:
1. Paaraaleelii: C_p = 2 + 1 = 3 µF.
2. Siiriisii: 1/C_eq = 7/3 + 1/3 + 4/3 = 12/3 = 4 => C_eq = 1/4 µF.`,
    hint: 'Add parallel capacitors directly (2 + 1 = 3 µF), then sum reciprocals for the series circuit (7/3 + 1/3 + 4/3 = 12/3 = 4).',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q8',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'DC Circuits: Internal Resistance & Ohm\'s Law',
    questionText: 'A 64 V battery is connected to a series combination of 3 kΩ bulb and 4 kΩ electric iron. If the total current in the circuit is 8 mA, what is the internal resistance of the battery?',
    options: [
      '1 kΩ',
      '7 kΩ',
      '8 kΩ',
      '15 kΩ'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Total resistance in the circuit by Ohm's Law:
R_total = EMF / I = 64 V / (8 × 10⁻³ A) = 8000 Ω = 8 kΩ.

Step 2: Sum external resistances:
R_ext = R_bulb + R_iron = 3 kΩ + 4 kΩ = 7 kΩ.

Step 3: Calculate internal resistance (r):
R_total = R_ext + r
8 kΩ = 7 kΩ + r  ⇒  r = 8 kΩ - 7 kΩ = 1 kΩ.

🇪🇹 አማርኛ (Amharic):
ጠቅላላ ተቃውሞ R_total = 64 V / 8 mA = 8 kΩ ነው። የውጪው ተቃውሞ 3 kΩ + 4 kΩ = 7 kΩ ስለሆነ፣ የባትሪው ውስጣዊ ተቃውሞ r = 8 kΩ - 7 kΩ = 1 kΩ ይሆናል።

🌳 Afaan Oromoo:
Resiistaansii waliigalaa R_total = 64 V / 8 mA = 8 kΩ. Resiistaansiin alaa = 3 + 4 = 7 kΩ waan ta'eef, kan keessaa r = 8 - 7 = 1 kΩ ta'a.`,
    hint: 'Total resistance is V / I = 64 V / 8 mA = 8 kΩ. Subtract the external resistors (8 kΩ - 7 kΩ = 1 kΩ).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q9',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Electromagnetism: Solenoid Magnetic Field Calculation',
    questionText: 'A solenoid with 5000 turns and length 1 m carries 15 A of current. If no iron core is inserted in the solenoid, what is the magnetic field strength at the center of the solenoid?',
    options: [
      '20π × 10⁻² T',
      '6π × 10⁻² T',
      '3π × 10⁻² T',
      '4π × 10⁻² T'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The magnetic field B inside an air-core long solenoid is given by:
B = µ₀ · n · I = µ₀ · (N / L) · I

Given:
• µ₀ = 4π × 10⁻⁷ T·m/A
• N = 5000 turns
• L = 1 m
• I = 15 A

B = (4π × 10⁻⁷) × (5000 / 1) × 15
B = (4π × 10⁻⁷) × 75,000 = 300,000π × 10⁻⁷ = 3π × 10⁻² T (0.03π T ≈ 0.0942 T).

🇪🇹 አማርኛ (Amharic):
የሶሌኖይድ ማግኔቲክ ፊልድ B = µ₀ · (N/L) · I = (4π × 10⁻⁷) × 5000 × 15 = 3π × 10⁻² T ይሆናል።

🌳 Afaan Oromoo:
Dirreen maagneetii sooleenoyidii B = µ₀ · (N/L) · I = (4π × 10⁻⁷) × 5000 × 15 = 3π × 10⁻² T ta'a.`,
    hint: 'Apply Ampère\'s law for solenoids: B = µ₀ · (N/L) · I. Multiply 4π × 10⁻⁷ by 5000 and 15.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q10',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Optics: Snell\'s Law & Refractive Index',
    questionText: 'Light ray is allowed to enter from air medium (n_air = 1) into water medium (index of refraction n_w = 4/3) at an angle of 30° with the normal to air-water interface. Which one of the following is correct about the ray of light?',
    options: [
      'The sine of the angle of refraction of the light ray in water is equal to 0.5.',
      'The sine of the angle of refraction of the light ray in water is equal to 0.38.',
      'The speed of the light ray in water is 1.33 times that of its speed in air.',
      'The speed of the light ray in water is 0.9 times that of its speed in air.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Using Snell's Law of refraction:
n₁ · sin(θ₁) = n₂ · sin(θ₂)

Given n₁ = 1, θ₁ = 30°, n₂ = 4/3 = 1.333:
1 · sin(30°) = (4/3) · sin(θ₂)
0.5 = (4/3) · sin(θ₂)
sin(θ₂) = 0.5 × (3/4) = 3/8 = 0.375 ≈ 0.38.

Also, speed in water is v = c / n = c / (4/3) = 0.75 c (slower, not faster).

🇪🇹 አማርኛ (Amharic):
የስኔል ሕግን በመጠቀም:
n₁ sin(θ₁) = n₂ sin(θ₂)
1 × sin(30°) = (4/3) sin(θ₂)
0.5 = (4/3) sin(θ₂) => sin(θ₂) = 3/8 = 0.375 ≈ 0.38።

🌳 Afaan Oromoo:
Seera Snell fayyadamuun: 1 × sin(30°) = (4/3) sin(θ₂) => sin(θ₂) = 0.375 ≈ 0.38 ta'a.`,
    hint: 'Use Snell\'s law: 1 · sin(30°) = (4/3) · sin(θ₂), so sin(θ₂) = 0.5 × (3/4) = 0.375 ≈ 0.38.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q11',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Fluid Mechanics: Bernoulli\'s Principle & Dynamic Pressure',
    questionText: 'A fluid travelling over an object\'s surface exerts less pressure than if the fluid was static. This is a statement of',
    options: [
      'Bernoulli\'s principle.',
      'principle of continuity.',
      'Pascal\'s principle.',
      'Archimedes\' principle.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Bernoulli's Principle states that for an incompressible and non-viscous fluid, an increase in fluid speed occurs simultaneously with a decrease in static fluid pressure or fluid potential energy (P + 1/2 ρv² + ρgh = constant).

🇪🇹 አማርኛ (Amharic):
ፈሳሽ ወይም አየር በፍጥነት በሚንቀሳቀስበት ቦታ ላይ ያለው ጫና (Pressure) ይቀንሳል የሚለው የቤርኑሊ መርህ (Bernoulli's principle) ነው።

🌳 Afaan Oromoo:
Dhangala'aan yookiin qilleensi yeroo saffisaan deemu dhiibbaan isaa ni hir'ata kan jedhu Qajeeltoo Bernuulii (Bernoulli's principle) dha.`,
    hint: 'Faster fluid flow results in lower local static pressure (Bernoulli\'s principle, basis of aerodynamic lift).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q12',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Thermodynamics: Heat of Vaporization Calorimetry',
    questionText: 'Which one of the following activities of experiment is NOT necessary to determine the specific latent heat of vaporization of water?',
    options: [
      'Measuring temperature',
      'Measuring volume',
      'Measuring time',
      'Measuring mass'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
To measure specific latent heat of vaporization (L_v = Q / m = V·I·t / Δm), the essential parameters measured are:
1. Mass of water evaporated/condensed (using an analytical balance).
2. Electrical heating parameters: Voltage, Current, and Time (t).
3. Temperature (to verify boiling point equilibrium at 100°C).
Measuring volume is unnecessary and less accurate because mass is measured directly with high precision.

🇪🇹 አማርኛ (Amharic):
የውሃን የትነት ሙቀት (Latent heat of vaporization) በሙከራ ለማግኘት የውሃውን ክብደት (mass)፣ የሙቀት መጠን (temperature) እና የኤሌክትሪክ ማሞቂያውን ሰዓት (time) መለካት በቂ ሲሆን፣ የይዘት መጠን (volume) መለካት አያስፈልግም።

🌳 Afaan Oromoo:
Ho'a baqina bishaanii (Latent heat of vaporization) safaruuf ulfaatina (mass), ho'a (temperature) fi yeroo (time) safaruun gahaa yoo ta'u, qabiyyee dhangala'aa (volume) safaruun hin barbaachisu.`,
    hint: 'Direct mass measurement using a digital balance supersedes volume measurements in latent heat calorimetry.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q13',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Thermodynamics: Critical Point vs Boiling Point',
    questionText: 'Which one of the following statements is correct about critical and boiling points of a substance?',
    options: [
      'The critical point and the boiling point of a substance occur at the same specific temperature and pressure.',
      'Both critical temperature and boiling point of a substance can be increased or decreased based on the pressure of the surrounding.',
      'The boiling point of a substance can be different based on the pressure of the surrounding whereas critical point occurs at one specific pressure and temperature.',
      'The critical temperature of a substance can be increased or decreased based on the pressure of the surrounding whereas boiling point does not vary with the pressure of the surrounding.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Boiling Point: Varies directly with ambient pressure (e.g. water boils at 100°C at 1 atm, but boils at lower temperatures at high altitudes).
• Critical Point: An intrinsic, fixed thermodynamic property defined by a unique critical temperature (T_c) and critical pressure (P_c) above which distinct liquid and gas phases cannot exist.

🇪🇹 አማርኛ (Amharic):
የፈላ ሙቀት (Boiling point) እንደ አካባቢው አየር ጫና መጠን ይለያያል፤ ወሳኝ ነጥብ (Critical point) ግን ለእያንዳንዱ ንጥረ ነገር ቋሚ የሆነ አንድ የተወሰነ የሙቀትና ጫና ነጥብ ነው።

🌳 Afaan Oromoo:
Qabxiin danfinaa (Boiling point) dhiibbaa naannoo irratti hundaa'ee jijjiirama; qabxiin murteessaan (Critical point) garuu qabxii ho'aa fi dhiibbaa murtaa'aa tokko qofa qaba.`,
    hint: 'Boiling point depends on external pressure, but the critical point is a unique intrinsic thermodynamic constant.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q14',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Rotational Dynamics: Parallel Axis Theorem',
    questionText: 'A 30 kg rigid object has a moment of inertia 45 kg·m² about its center of mass. What is the object\'s moment of inertia when it rotates through an axis 2 m away and parallel to the axis through its center of mass?',
    options: [
      '90 kg·m²',
      '165 kg·m²',
      '180 kg·m²',
      '105 kg·m²'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
According to the Parallel Axis Theorem:
I = I_cm + M · d²

Given:
• Mass M = 30 kg
• Center of mass moment of inertia I_cm = 45 kg·m²
• Distance d = 2 m

I = 45 + (30 × 2²) = 45 + (30 × 4) = 45 + 120 = 165 kg·m².

🇪🇹 አማርኛ (Amharic):
የፓራላል አክሲስ ቴዎረምን በመጠቀም:
I = I_cm + M·d² = 45 + 30×(2)² = 45 + 120 = 165 kg·m²።

🌳 Afaan Oromoo:
Tiwooremii sarara waldorgommii (Parallel Axis Theorem):
I = I_cm + M·d² = 45 + 30×(2)² = 45 + 120 = 165 kg·m².`,
    hint: 'Use the Parallel Axis Theorem: I = I_cm + M·d² = 45 + 30·(2)² = 165 kg·m².',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2015-q15',
    subject: 'Physics',
    year: '2015 E.C.',
    topic: 'Equilibrium & Statics: Torque of a Couple',
    questionText: 'Two coplanar forces act on a uniform beam as shown in the figure: F₁ = 30 N acts downward at left end, F₂ = 30 N acts upward at right end, separated by a perpendicular distance of 0.80 m. The moment of force (torque of couple) on the beam is',
    options: [
      '48.0 Nm.',
      '12.0 Nm.',
      '30.0 Nm.',
      '24.0 Nm.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Two equal, opposite, and non-collinear parallel forces constitute a Couple.
The torque (moment) of a couple is the product of the magnitude of one force and the perpendicular distance between their lines of action:
τ = F · d = 30 N × 0.80 m = 24.0 N·m (counterclockwise).

🇪🇹 አማርኛ (Amharic):
ሁለት እኩል እና ተቃራኒ አቅጣጫ ያላቸው ኃይሎች ጥንድ (Couple) ይፈጥራሉ። የጥንዱ ቶርክ τ = F × d = 30 N × 0.80 m = 24.0 N·m ይሆናል።

🌳 Afaan Oromoo:
Humni wal-qixxaatuu fi kallattii faallaa qaban 'couple' uumu. Toorkiin isaa τ = F × d = 30 N × 0.80 m = 24.0 N·m ta'a.`,
    hint: 'Torque of a couple equals Force × perpendicular distance between forces: τ = 30 N × 0.80 m = 24.0 N·m.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  }
];
