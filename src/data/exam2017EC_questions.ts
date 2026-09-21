import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const EXAM_2017_EC_QUESTIONS: Question[] = [
  // ==========================================
  // PHYSICS (2017 E.C.)
  // ==========================================
  {
    id: 'phys-2017-q1',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Thermodynamics: Efficiency of a Carnot Heat Engine',
    questionText: '3. A Carnot heat engine absorbs heat from a hot reservoir at 500 K and exhausts waste heat to a cold reservoir at 300 K. What is the maximum theoretical efficiency (η) of this engine?',
    options: [
      '40%',
      '60%',
      '20%',
      '50%'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Carnot efficiency is defined as:
η = 1 - (T_cold / T_hot)
η = 1 - (300 K / 500 K) = 1 - 0.60 = 0.40 = 40%.

🇪🇹 አማርኛ (Amharic):
የካርኖት ሞተር ቅልጥፍና (Efficiency) ስሌት፡
η = 1 - (T_cold / T_hot) = 1 - (300 / 500) = 0.40 = 40%።

🌳 Afaan Oromoo:
Gahumsa Karnosii shallaguu:
η = 1 - (300 / 500) = 1 - 0.6 = 0.4 = 40%.`,
    hint: 'Carnot efficiency η = 1 - (T_cold / T_hot) = 1 - (300/500).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'phys-2017-q2',
    subject: 'Physics',
    year: '2017 E.C.',
    topic: 'Optics: Snell\'s Law and Refraction Index',
    questionText: '4. A ray of light travels from air (n1 = 1.0) into water (n2 = 1.33) at an angle of incidence of 30°. According to Snell\'s law, what is sin(θ_refraction)?',
    options: [
      '0.376',
      '0.500',
      '0.665',
      '0.250'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
By Snell\'s Law of Refraction:
n1 · sin(θ1) = n2 · sin(θ2)
1.0 · sin(30°) = 1.33 · sin(θ2)
1.0 · (0.500) = 1.33 · sin(θ2)
sin(θ2) = 0.500 / 1.33 ≈ 0.376.

🇪🇹 አማርኛ (Amharic):
የስኔል ህግ (Snell's Law)፡
n1 · sin(θ1) = n2 · sin(θ2)
1.0 · 0.5 = 1.33 · sin(θ2) -> sin(θ2) = 0.5 / 1.33 = 0.376።

🌳 Afaan Oromoo:
Seera \'Snell\'s Law\':
n1 · sin(θ1) = n2 · sin(θ2)
sin(θ2) = 0.5 / 1.33 ≈ 0.376.`,
    hint: 'sin(θ2) = (n1 / n2) · sin(θ1) = (1.0 / 1.33) · 0.5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // ENGLISH (2017 E.C.)
  // ==========================================
  {
    id: 'eng-2017-q1',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Inverted Negative Adverbials',
    questionText: '9. Seldom ______ such extraordinary dedication in an introductory laboratory course.',
    options: [
      'have I seen',
      'I have seen',
      'did I saw',
      'I saw'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
When a sentence begins with a restrictive or negative adverbial (such as "Seldom", "Rarely", "Hardly", or "Scarcely"), subject-auxiliary inversion is mandatory: Adverbial + Auxiliary Verb + Subject + Main Verb ("Seldom have I seen...").

🇪🇹 አማርኛ (Amharic):
አረፍተ ነገር በኔጌቲቭ ቃል (እንደ Seldom, Rarely, Hardly) ሲጀምር የቃላት ግልባጭ (Inversion: ረዳት ግስ + ባለቤት) መከተል አለበት፤ ስለዚህ "Seldom have I seen..." ትክክለኛ ምርጫ ነው።

🌳 Afaan Oromoo:
Yeroo himni jecha akka \'Seldom\' jedhuun jalqabu qindoominni gochaa \'inversion\' (Auxiliary + Subject) hordofa: "Seldom have I seen...".`,
    hint: 'Negative introductory adverbs like "Seldom" require auxiliary inversion.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },



  // ==========================================
  // GEOGRAPHY (2017 E.C.)
  // ==========================================
  {
    id: 'geo-2017-q1',
    subject: 'Geography',
    year: '2017 E.C.',
    topic: 'Geographical Information Systems: GIS and Remote Sensing',
    questionText: '12. In Geographic Information Systems (GIS), spatial data represented as discrete points, lines (arcs), and polygons is classified as:',
    options: [
      'Vector data model',
      'Raster data model',
      'Satellite imagery',
      'Digital elevation model (DEM)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In GIS, spatial geographic features are structured in two primary models:
• Vector model: Uses points (X,Y coordinates), lines, and closed polygons to represent discrete features (e.g. roads, cities, country boundaries).
• Raster model: Uses grids of equal-sized pixels/cells (e.g. satellite images).

🇪🇹 አማርኛ (Amharic):
በጂኦግራፊክ ኢንፎርሜሽን ሲስተም (GIS) ውስጥ ነጥቦች፣ መስመሮችና ፖሊጎኖችን (polygons) ተጠቅሞ መረጃን የሚይዘው የቬክተር ዳታ ሞዴል (Vector data model) ይባላል።

🌳 Afaan Oromoo:
Sirna GIS keessatti daataa qabxiilee, sararootaa fi pooliigooniin ibsamu \'Vector data model\' jedhama.`,
    hint: 'Points, lines, and polygons comprise the vector data format.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  },

  // ==========================================
  // CIVICS & ETHICAL EDUCATION (2017 E.C.)
  // ==========================================
  {
    id: 'civ-2017-q1',
    subject: 'Economics & General',
    year: '2017 E.C.',
    topic: 'Human Rights: Universal Declaration of Human Rights (UDHR 1948)',
    questionText: '14. Which landmark international document adopted by the United Nations General Assembly in 1948 established the fundamental human rights to be universally protected for all peoples?',
    options: [
      'The Universal Declaration of Human Rights (UDHR)',
      'The Magna Carta',
      'The Geneva Conventions',
      'The Treaty of Versailles'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Adopted on December 10, 1948, by the United Nations General Assembly in Paris, the Universal Declaration of Human Rights (UDHR) is the foundational global charter enshrining 30 inalienable rights and freedoms entitled to all human beings without discrimination.

🇪🇹 አማርኛ (Amharic):
በ1948 እ.ኤ.አ በተባበሩት መንግስታት ድርጅት የፀደቀውና የሰውን ልጅ ሁለንተናዊ መሰረታዊ መብቶች የሚያረጋግጠው አለም አቀፍ ሰነድ የአለም አቀፍ የሰብዓዊ መብቶች ድንጋጌ (UDHR) ይባላል።

🌳 Afaan Oromoo:
Bara 1948 Dhaabbata Mootummoota Gamtoomaniin kan ragga\'e Labsiin Mirga Namoomaa Addunyaa (UDHR) mirga bu\'uuraa nama hundaaf eegumsa kenna.`,
    hint: 'The UN charter adopted in 1948 is the Universal Declaration of Human Rights.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-19',
    createdBy: ADMIN_EMAIL
  }
];
