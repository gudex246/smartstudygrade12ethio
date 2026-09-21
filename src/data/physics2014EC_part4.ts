import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const PHYSICS_2014_EC_PART4: Question[] = [
  {
    id: 'phy-2014-q46',
    subject: 'Physics',
    topic: 'Fluid Mechanics: Capillarity & Surface Tension',
    questionText: 'A certain fluid has a density of 1080 kg/m³ and is observed to rise to a height of 2.1 cm in a 1.0 mm diameter tube. If the contact angle between the wall and the surface is zero and g = 10 m/s², the surface tension of the fluid is:',
    options: [
      '0.0567 N/m',
      '5670 N/m',
      '0.02835 N/m',
      '0.1134 N/m'
    ],
    correctOptionIndex: 0,
    explanation: 'Capillary rise formula:\nh = (2 · γ · cos θ) / (ρ · g · r)\n=>  γ = (ρ · g · r · h) / (2 · cos θ)\n\nGiven:\n• Density (ρ) = 1080 kg/m³\n• Tube diameter (d) = 1.0 mm  =>  radius r = 0.5 mm = 0.5 × 10⁻³ m\n• Height of rise (h) = 2.1 cm = 0.021 m\n• Contact angle (θ) = 0°  =>  cos 0° = 1\n• Gravitational acceleration (g) = 10 m/s²\n\nCalculate surface tension (γ):\nγ = [1080 × 10 × (0.5 × 10⁻³) × 0.021] / [2 × 1]\nγ = [10800 × 0.0005 × 0.021] / 2\nγ = [5.4 × 0.021] / 2 = 0.1134 / 2 = 0.0567 N/m',
    hint: 'Use γ = (ρ · g · r · h) / (2 cos θ). Make sure to use radius r = 0.5 mm = 0.0005 m and h = 0.021 m.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q47',
    subject: 'Physics',
    topic: 'Heat Transfer: Thermal Conduction through a Slab',
    questionText: 'A slab of thermal insulator has a cross-section of 0.1 m², a length of 2 cm, and thermal conductivity of 0.1 J/(m·s·°C). If the temperature difference between the opposite faces of the insulator is 100 °C, the amount of heat flowing through the slab in 24 h is:',
    options: [
      '4.32 × 10⁶ J',
      '1.2 × 10³ J',
      '7.2 × 10⁴ J',
      '5.0 × 10¹ J'
    ],
    correctOptionIndex: 0,
    explanation: 'Fourier\'s Law of Thermal Conduction:\nRate of heat transfer H = Q / t = k · A · (ΔT / L)\n\nGiven:\n• Thermal conductivity (k) = 0.1 J/(m·s·°C) = 0.1 W/(m·K)\n• Area (A) = 0.1 m²\n• Thickness / length (L) = 2 cm = 0.02 m\n• Temperature difference (ΔT) = 100 °C\n• Time duration (t) = 24 hours = 24 × 3600 s = 86,400 s\n\nStep 1: Calculate heat transfer rate (H):\nH = (0.1 × 0.1 × 100) / 0.02 = 1.0 / 0.02 = 50 J/s (Watts)\n\nStep 2: Calculate total heat transferred (Q):\nQ = H · t = 50 J/s × 86,400 s = 4,320,000 J = 4.32 × 10⁶ J',
    hint: 'Q = (k · A · ΔT / L) · t. Rate H = (0.1 × 0.1 × 100)/0.02 = 50 W. Q = 50 × 86400 = 4.32 × 10⁶ J.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q48',
    subject: 'Physics',
    topic: 'Thermodynamics: First Law of Thermodynamics',
    questionText: 'A 100 J of work is done on a system and 418.6 J of heat is extracted from it. According to the first law of thermodynamics, the change in the internal energy of the system is:',
    options: [
      '-318.6 J',
      '-518.6 J',
      '318.6 J',
      '518.6 J'
    ],
    correctOptionIndex: 0,
    explanation: 'First Law of Thermodynamics:\nΔU = Q - W_by = Q + W_on\n\nGiven:\n• Heat extracted from system: Q = -418.6 J (negative because heat leaves the system)\n• Work done ON the system: W_on = +100 J (positive energy input into system)\n\nCalculate change in internal energy (ΔU):\nΔU = Q + W_on = -418.6 J + 100 J = -318.6 J\n\nInternal energy of the system decreases by 318.6 J.',
    hint: 'Apply ΔU = Q + W_on where Q = -418.6 J and W_on = +100 J => ΔU = -318.6 J.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q49',
    subject: 'Physics',
    topic: 'Thermodynamics: Reversible vs Irreversible Processes',
    questionText: 'Which of the following statements correctly describes the difference between reversible and irreversible processes?',
    options: [
      'A system undergoing a reversible process is always close to thermodynamic equilibrium, whereas a system undergoing an irreversible process is not in thermal equilibrium.',
      'In an irreversible process, a system can move from one thermodynamic state to another and back to its initial state; whereas a system in a reversible process cannot move back to its initial state.',
      'Ice at 0 °C placed in a metallic can at 40 °C undergoes a reversible process; whereas ice at 0 °C placed in a metal can at 0 °C undergoes an irreversible process.',
      'A process is reversible if its entropy increases, but irreversible if its entropy is constant.'
    ],
    correctOptionIndex: 0,
    explanation: '• Reversible Process: An idealized quasi-static thermodynamic change that occurs infinitely slowly through a continuous sequence of equilibrium states. At any point, the process can be reversed by an infinitesimal change in external parameters without generating entropy in the universe (ΔS_univ = 0).\n• Irreversible Process: Occurs spontaneously and at finite rates with non-equilibrium intermediate states, involving dissipation such as friction, turbulence, or finite temperature differences. Total entropy strictly increases (ΔS_univ > 0).',
    hint: 'A reversible process is quasi-static and remains in continuous thermodynamic equilibrium throughout.',
    difficulty: 'medium',
    points: 15,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phy-2014-q50',
    subject: 'Physics',
    topic: 'Oscillations & Waves: Resonance Condition',
    questionText: 'Which one of the following statements is correct about resonance in an oscillating object?',
    options: [
      'At resonance, the driving frequency is equal to the natural frequency and the amplitude becomes maximum.',
      'Damping increases the amplitude and natural frequency of the oscillator.',
      'Resonance occurs when the frequency of a periodic driving force is greater than the natural frequency of the oscillator.',
      'Resonance occurs when the oscillator is subject to a constant driving force.'
    ],
    correctOptionIndex: 0,
    explanation: '• Resonance occurs in a driven oscillator when the frequency of the external periodic driving force (f_drive) equals the natural frequency (f₀) of the oscillating system (f_drive = f₀).\n• Under resonance, energy transfer from the driving source to the oscillating system is most efficient, resulting in maximum amplitude of oscillation.\n• Damping (dissipation) absorbs energy, thereby decreasing the peak resonant amplitude.',
    hint: 'Resonance occurs when driving frequency matches the natural frequency of the system, creating maximum oscillation amplitude.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-18',
    createdBy: ADMIN_EMAIL
  }
];
