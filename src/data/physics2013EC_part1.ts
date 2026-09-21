import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2013_EC_PART1: Question[] = [
  {
    id: 'phy-2013-q1',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Circuit Theory: Kirchhoff\'s Junction Law',
    questionText: 'Kirchhoff\'s junction law states that:',
    options: [
      'Current traversing any closed loop at a particular time is zero.',
      'The potential drop at a given junction equals the electromotive force at that particular point.',
      'Charge entering the junction equals the charge leaving that junction at a particular time.',
      'The sum of the voltage drops across any closed loop equals the sum of the electromotive force.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Kirchhoff's Junction Law (Current Law, Σ I_in = Σ I_out) is a direct consequence of the Conservation of Electric Charge:
The total rate of electric charge entering any electrical junction must be equal to the total rate of charge leaving that junction (I = ΔQ/Δt).

🇪🇹 አማርኛ (Amharic):
የኪርቾፍ የመገጣጠሚያ ሕግ (Junction Law) የኤሌክትሪክ ቻርጅ ጥበቃ መርህ ሲሆን፣ ወደ መገጣጠሚያው የሚገባው ጠቅላላ ቻርጅ ከመገጣጠሚያው ከሚወጣው ጠቅላላ ቻርጅ ጋር እኩል ነው።

🌳 Afaan Oromoo:
Seerri walqunnamtii Kirchoof (Junction Law): Chaarjiin yeroo murtaa'aa keessatti gara qaphxii walqunnamtiitti galu chaarjii qaphxichaa keessaa ba'u waliin qixa ta'a.`,
    hint: 'Kirchhoff\'s junction law represents the principle of conservation of electric charge (Σ I_in = Σ I_out).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q2',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Magnetism: Magnetic Properties of Matter',
    questionText: 'Which one of the following statements is NOT correct about the magnetic properties of matter?',
    options: [
      'There is a tendency to oppose the applied magnetic field in a diamagnetic substance.',
      'The unpaired electrons in diamagnetic materials will align with the applied magnetic field and parallel to each other.',
      'The unpaired electrons in ferromagnetic materials will align with the applied magnetic field and parallel to each other.',
      'The unpaired electrons in paramagnetic substances will tend to align themselves in the same direction as the applied magnetic field.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• Diamagnetic materials have ALL paired electrons (no net permanent magnetic dipole moments) and create an induced magnetic field in the opposite direction, weakly repelling external magnetic fields.
• Paramagnetic and ferromagnetic materials have unpaired electrons that align with an external field.
Therefore, the statement claiming diamagnetic materials have unpaired electrons aligning parallel is false and is the correct answer.

🇪🇹 አማርኛ (Amharic):
ዳያማግኔቲክ (Diamagnetic) ቁሶች ያልተጣመሩ (unpaired) ኤሌክትሮኖች የሏቸውም፤ ሁሉም ኤሌክትሮኖቻቸው የተጣመሩ ስለሆኑ ከውጫዊ ማግኔቲክ መስክ ጋር ተቃራኒ ባህሪ ያሳያሉ። ስለዚህ አማራጭ B ስህተት ነው።

🌳 Afaan Oromoo:
Meeshaaleen 'diamagnetic' elektiroonota qeenxee (unpaired) hin qaban; kanaafuu dirree maagneetawaa alaatiin wal-mormu malee walsimee hin dhaabbatu.`,
    hint: 'Diamagnetic materials have all paired electrons and repel external magnetic fields.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q3',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Electromagnetism: Magnetic Force on a Current-Carrying Conductor',
    questionText: 'Suppose a conductor of length l carrying a current I is placed in a uniform magnetic field of magnitude B. When the conductor makes an angle θ with the magnetic field, the vector magnetic force experienced by the conductor is given by:',
    options: [
      'F_vec = I (B_vec × l_vec)',
      'F_vec = B I l cos θ',
      'F_vec = B I l tan θ',
      'F_vec = I (l_vec × B_vec)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The magnetic force acting on a straight segment of current-carrying wire in a uniform magnetic field is given by the cross product:
F_vec = I (l_vec × B_vec)
The magnitude is F = I · l · B · sin(θ), and its direction is determined by the right-hand rule from l_vec to B_vec.

🇪🇹 አማርኛ (Amharic):
በማግኔቲክ መስክ ውስጥ ባለ የኤሌክትሪክ አስተላላፊ ሽቦ ላይ የሚያርፈው የማግኔቲክ ኃይል ቬክተር ቀመር: F_vec = I (l_vec × B_vec) ነው።

🌳 Afaan Oromoo:
Humni maagneetawaa shiboo dhangala'aa elektiriikii baatu irratti raawwatamu: F_vec = I (l_vec × B_vec) dha.`,
    hint: 'Force is current multiplied by the cross product of length vector and magnetic field vector: I(l × B).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q4',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Electromagnetism: Tangent Galvanometer Working Principle',
    questionText: 'Which one of the following statements is correct about a tangent galvanometer?',
    options: [
      'The current through the coil of the wire generates a magnetic field at the center of the coil.',
      'It consists of a coil of insulated copper wire on a circular magnetic frame.',
      'The current is inversely proportional to the tangent of the angle of the needle\'s deflection.',
      'It is a device used to measure the electric current in terms of the electric field it produces.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A tangent galvanometer measures steady electric current by utilizing the magnetic field produced at the center of a circular coil:
B_coil = (μ₀ · N · I) / (2R)
When aligned with Earth's horizontal magnetic field component (B_H), the compass needle deflects by angle θ such that B_coil = B_H · tan(θ) ⇒ I ∝ tan(θ). Statement A correctly describes the fundamental physical mechanism.

🇪🇹 አማርኛ (Amharic):
ታንጀንት ጋልቫኖሜትር (Tangent Galvanometer) በክብ ሽቦው መሃል ላይ በሚፈጠረው የማግኔቲክ መስክ እና በመግነጢሳዊ ኮምፓስ መርፌ መዞር (I ∝ tan θ) አማካኝነት የኤሌክትሪክ ጅረትን የሚለካ መሳሪያ ነው።

🌳 Afaan Oromoo:
Tainjeent gaalvaanomeetiriin dhangala'aa elektiriikii shiboo geengoo keessa darbuun dirree maagneetawaa wiirtuu irratti uumamu fayyadamee hojjeta.`,
    hint: 'The instrument operates by producing a magnetic field at the center of a circular coil, deflecting a magnetic compass needle.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q5',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Electromagnetism: Magnetic Field of a Straight Conductor',
    questionText: 'A long straight conductor carries a current I. Which statement is NOT correct about the magnetic field produced by this current-carrying conductor?',
    options: [
      'Doubling the current through the conductor doubles the field strength.',
      'Reversing the current direction will reverse the direction of the magnetic field.',
      'The magnetic field encircles the conductor.',
      'The field strength is directly proportional to the distance from the conductor.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
By Ampere's Law and Biot-Savart Law, the magnetic field at distance r from a long straight wire carrying current I is:
B = (μ₀ · I) / (2π · r)
Thus:
• B is directly proportional to current I (doubling I doubles B).
• Field lines form concentric circles around the wire.
• B is INVERSELY proportional to distance r (as distance increases, B decreases).
Therefore, statement D ("directly proportional to distance") is false.

🇪🇹 አማርኛ (Amharic):
የቀጥታ ሽቦ ማግኔቲክ መስክ B = (μ₀ · I) / (2π · r) ስለሆነ፣ ከርቀቱ r ጋር በተቃራኒ ተመጣጣኝ (inversely proportional) ነው እንጂ በቀጥታ ተመጣጣኝ አይደለም። ስለዚህ አማራጭ D ስህተት ነው።

🌳 Afaan Oromoo:
Dirreen maagneetawaa B = (μ₀ · I) / (2π · r) waan ta'eef fageenya 'r' waliin faallaa wal-simata (inversely proportional).`,
    hint: 'Magnetic field weakens as you move farther from the wire: B ∝ 1/r (inversely proportional).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q6',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Electromagnetic Induction: Faraday\'s Law of Induced EMF',
    questionText: 'A coiled copper wire has 50 turns and a cross-sectional area of 9 × 10⁻⁴ m². This coil is initially placed in a uniform magnetic field of 0.02 T and pulled out of the field completely (where the field is zero) in 0.5 seconds. What is the magnitude of the induced electromotive force?',
    options: [
      '3.2 mV',
      '9.0 mV',
      '18 mV',
      '1.8 mV'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to Faraday's Law of Electromagnetic Induction:
|ε| = N · (ΔΦ / Δt) = N · (A · ΔB / Δt)

Given:
• N = 50 turns
• A = 9 × 10⁻⁴ m²
• ΔB = 0.02 T - 0 T = 0.02 T
• Δt = 0.5 s

|ε| = 50 × (9 × 10⁻⁴ m² × 0.02 T) / 0.5 s
|ε| = 50 × (1.8 × 10⁻⁵ Wb) / 0.5 s = (9.0 × 10⁻⁴) / 0.5 = 1.8 × 10⁻³ V = 1.8 mV.

🇪🇹 አማርኛ (Amharic):
በፋራዴይ ሕግ መሰረት:
|ε| = N · (A · ΔB) / Δt = 50 × (9 × 10⁻⁴ × 0.02) / 0.5 = 1.8 × 10⁻³ V = 1.8 mV።

🌳 Afaan Oromoo:
Seera Faaraadeeyiin: |ε| = 50 × (9 × 10⁻⁴ × 0.02) / 0.5 = 1.8 mV ta'a.`,
    hint: 'Use Faraday\'s formula |ε| = N·A·ΔB / Δt = 50 × (9×10⁻⁴ × 0.02) / 0.5 = 1.8 mV.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q7',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Electromagnetic Induction: Self-Inductance & Rate of Current Change',
    questionText: 'A 15 mH inductor experiences an induced electromotive force of 5.0 mV. What is the rate of change of the current through the inductor?',
    options: [
      '3.0 A/s',
      '0.30 A/s',
      '0.33 A/s',
      '3.3 A/s'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The self-induced EMF in an inductor is given by:
|ε| = L · |ΔI / Δt|

Given:
• L = 15 mH = 15 × 10⁻³ H
• |ε| = 5.0 mV = 5.0 × 10⁻³ V

Rate of change of current:
|ΔI / Δt| = |ε| / L = (5.0 × 10⁻³ V) / (15 × 10⁻³ H) = 5.0 / 15 = 1/3 A/s ≈ 0.33 A/s.

🇪🇹 አማርኛ (Amharic):
በኢንዳክተር ቀመር: |ε| = L · (ΔI/Δt)
ΔI/Δt = ε / L = 5.0 mV / 15 mH = 5/15 = 0.33 A/s።

🌳 Afaan Oromoo:
Jijjiiramni dhangala'aa yeroo keessatti: ΔI/Δt = ε / L = 5.0 mV / 15 mH = 0.33 A/s.`,
    hint: 'Divide induced EMF by inductance: 5.0 mV / 15 mH = 1/3 ≈ 0.33 A/s.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q8',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Electromagnetic Induction: Factors Affecting Induced EMF',
    questionText: 'A coil and a permanent magnet are set in relative motion. Which one of the following statements is NOT correct about the induced electromotive force?',
    options: [
      'A coil with a larger number of turns produces greater induced electromotive force.',
      'Moving a magnet relative to the coil and moving the coil relative to the magnet with equal speed produces the same electromotive force.',
      'The magnitude of the induced electromotive force is directly proportional to the relative velocity between the two.',
      'The direction in which the coil moves relative to the magnetic field does not have any effect on the induced electromotive force.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to Lenz's Law and Faraday's Law:
• The polarity (direction) of the induced EMF directly depends on whether the magnetic flux is increasing or decreasing (i.e. whether the coil is moving toward or away from the magnet).
• Changing the direction of relative motion reverses the direction of the induced current.
Therefore, statement D is incorrect.

🇪🇹 አማርኛ (Amharic):
በሌንዝ ሕግ (Lenz's Law) መሰረት፣ ሽቦው ወደ ማግኔቱ ሲጠጋ እና ከማግኔቱ ሲርቅ የሚፈጠረው የኤሌክትሪክ ጅረት አቅጣጫ ይገለበጣል። ስለዚህ የእንቅስቃሴው አቅጣጫ ተፅዕኖ የለውም የሚለው አማራጭ D ስህተት ነው።

🌳 Afaan Oromoo:
Seera Leenzii bu'uura godhachuun kallattiin sochiitiin kallattiin dhangala'aa elektiriikii uumamu ni jijjiirama. Kanaafuu himni D sirrii miti.`,
    hint: 'By Lenz\'s Law, reversing the direction of motion reverses the polarity and direction of induced EMF.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q9',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'AC Circuits & Power Transmission: Role of Transformers',
    questionText: 'What is the primary advantage of using alternating current (AC) in electrical energy transmission?',
    options: [
      'It enables electricity to reach the consumers at very high voltage.',
      'It enables a transformer to increase or decrease the voltage as required.',
      'It completely avoids energy loss due to heating.',
      'It uses very high current in the transmission line.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The fundamental advantage of alternating current (AC) over direct current (DC) in grid power transmission is that AC voltages can be easily stepped up to very high voltages for long-distance transmission (reducing I²R Joule heating losses) and stepped down to safe levels for domestic consumers using transformers.

🇪🇹 አማርኛ (Amharic):
የተለዋዋጭ ጅረት (AC) ዋነኛ ጠቀሜታ ትራንስፎርመርን በመጠቀም ቮልቴጁን በቀላሉ ከፍ (Step-up) እና ዝቅ (Step-down) ማድረግ ማስቻሉ ነው።

🌳 Afaan Oromoo:
Faayidaan guddaan dhangala'aa jijjiiramaa (AC) tiraanisfoormarii fayyadamuun voolteejii barbaadameetti ol-kaasuu fi gadi-buusuun danda'amuu isaati.`,
    hint: 'AC allows transformers to step up voltage for efficient transmission and step down for safety.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q10',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'AC Circuits: Capacitive Reactance Definition',
    questionText: 'Capacitive reactance is defined as:',
    options: [
      'The equivalent quantity to resistance when discussing capacitors in an AC circuit.',
      'The equivalent quantity to impedance in an RLC circuit.',
      'The equivalent quantity to resistance when discussing inductors.',
      'The equivalent quantity to resistance when discussing resistors.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Capacitive reactance (X_C = 1 / (2π · f · C)) is the measure of opposition that a capacitor presents to the flow of alternating current (AC). It is measured in Ohms (Ω) and acts as the AC equivalent of resistance for a capacitive element.

🇪🇹 አማርኛ (Amharic):
ካፓሲቲቭ ሪአክታንስ (Capacitive reactance) በ AC ሰርኪዩት ውስጥ ካፓሲተር ለኤሌክትሪክ ጅረት ፍሰት የሚያሳየው ተቃውሞ (Resistance equivalent) ነው።

🌳 Afaan Oromoo:
'Capacitive reactance' sirna AC keessatti kaapaasitariin dhangala'aa elektiriikiitiif mormii (resistance) inni kennuudha.`,
    hint: 'Capacitive reactance X_C = 1/(ωC) is the AC equivalent of electrical resistance for capacitors.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q11',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Thermodynamics: Second Law & Entropy Statement',
    questionText: 'The Second Law of Thermodynamics states that:',
    options: [
      'The increase in the internal energy of a system is equal to the sum of the heat energy entering the system and the work done on the system.',
      'Two bodies that are separately in thermal equilibrium with a third body must be in thermal equilibrium with each other.',
      'No process is possible in which there is an overall decrease in the entropy of the universe.',
      'No process is possible in which there is an overall increase in the entropy of the universe.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The Second Law of Thermodynamics (in terms of entropy) states that in any spontaneous or natural thermodynamic process, the total entropy of the universe always increases or remains constant (ΔS_universe ≥ 0). No process can ever result in an overall decrease in universal entropy.
(Option A is the First Law; Option B is the Zeroth Law).

🇪🇹 አማርኛ (Amharic):
ሁለተኛው የቴርሞዳይናሚክስ ሕግ የጽንፈ-ዓለሙ አጠቃላይ ኢንትሮፒ (Entropy / የኢ-ስርዓት መጠን) በማንኛውም የተፈጥሮ ሂደት ውስጥ ሊቀንስ እንደማይችል (ΔS_universe ≥ 0) ይደነግጋል።

🌳 Afaan Oromoo:
Seerri lammaffaan Teermoodaayinaamiksii: Adeemsa kamiyyuu keessatti 'entropy' uumama cufaa (universe) gadi bu'uu hin danda'u (ΔS ≥ 0).`,
    hint: 'The entropy of the universe never decreases: ΔS_total ≥ 0 in all spontaneous processes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q12',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Oscillations: Energy of Mass-Spring Oscillator',
    questionText: 'A mass-spring system is set to oscillate in simple harmonic motion over a frictionless horizontal surface with an amplitude of 20 cm. A second identical mass-spring system (with the same spring constant k) is set to oscillate with an amplitude of 10 cm. The energy of the:',
    options: [
      'First mass-spring system is four times that of the second one.',
      'Second mass-spring system is the square of the first one.',
      'First mass-spring system is twice that of the second one.',
      'Second mass-spring system is half that of the first one.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The total mechanical energy of a simple harmonic oscillator is given by:
E = 1/2 · k · A²

For the two systems:
• E₁ = 1/2 · k · (0.20 m)² = 0.02 · k
• E₂ = 1/2 · k · (0.10 m)² = 0.005 · k

Ratio:
E₁ / E₂ = (A₁ / A₂)² = (20 cm / 10 cm)² = (2)² = 4.
Therefore, the first system has 4 times the energy of the second system.

🇪🇹 አማርኛ (Amharic):
የሃርሞኒክ እንቅስቃሴ ኃይል E = 1/2 · k · A² ነው።
የአምፕሊቲዩድ ጥምርታ 20 cm / 10 cm = 2 ስለሆነ፣ የኃይል ጥምርታው (2)² = 4 እጥፍ ይሆናል።

🌳 Afaan Oromoo:
Anniisaan E = 1/2 · k · A² dha. Amplitiyuudiin dachaa 2 waan ta'eef, anniisaan isaa dachaa 4 (2² = 4) ta'a.`,
    hint: 'Energy is proportional to the square of the amplitude: (20/10)² = 2² = 4 times.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2013-q13',
    subject: 'Physics',
    year: '2013 E.C.',
    topic: 'Wave Interference: Superposition of Antiphase Waves',
    questionText: 'Suppose you are given two travelling waves that have the same frequency, the same amplitude A, but are in complete anti-phase (180° phase difference) with each other. Which description represents the superposition of the two waves?',
    options: [
      'A wave with amplitude +A',
      'A wave with amplitude +2A',
      'A standing wave with oscillating loops of amplitude 2A',
      'A flat line with zero resultant amplitude (complete destructive cancellation)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
By the Principle of Superposition:
y_net(t) = y₁(t) + y₂(t) = A · sin(ωt) + A · sin(ωt + π) = A · sin(ωt) - A · sin(ωt) = 0.
When two identical waves are in exact antiphase (phase difference Δφ = 180° or π rad), they undergo 100% destructive interference, producing zero net displacement at all times (a flat horizontal line).

🇪🇹 አማርኛ (Amharic):
ተመሳሳይ አምፕሊቲዩድ A ያላቸው ሁለት ሞገዶች ሙሉ በሙሉ በተቃራኒ ፌዝ (180° anti-phase) ሲገናኙ ሙሉ አጥፊ ጣልቃ-ገብነት (complete destructive interference) ተፈጥሮ ውጤቱ ዜሮ (ጠፍጣፋ መስመር) ይሆናል።

🌳 Afaan Oromoo:
Danbaaleen lama wal-faallaa ta'anii (180° anti-phase) yoo walirra bu'an guutumaan guutuutti wal barbadeessuun bu'aan isaanii zeeroo ta'a.`,
    hint: 'Two equal waves 180° out of phase completely cancel each other: A - A = 0.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  }
];
