import { Question, VideoLesson, StudyNote, SubscriptionPlan, User, PaymentTransaction, PromoCode } from '../types';
import { ADMIN_EMAIL } from './constants';
import { ENGLISH_2018_EC_QUESTIONS } from './english2018EC';
import { ENGLISH_2017_EC_QUESTIONS } from './english2017EC';
import { ENGLISH_2016_EC_QUESTIONS } from './english2016EC';
import { ENGLISH_2015_EC_QUESTIONS } from './english2015EC';
import { APTITUDE_2018_EC_QUESTIONS } from './aptitude2018EC';
import { PHYSICS_2018_EC_QUESTIONS } from './physics2018EC';
import { MATH_2018_EC_QUESTIONS } from './math2018EC';
import { BIOLOGY_2018_EC_QUESTIONS } from './biology2018EC';
import { CHEMISTRY_2018_EC_QUESTIONS } from './chemistry2018EC';
import { BIOLOGY_2017_EC_QUESTIONS } from './biology2017EC';
import { BIOLOGY_2016_EC_QUESTIONS } from './biology2016EC';
import { APTITUDE_2017_EC_QUESTIONS } from './aptitude2017EC';
import { HISTORY_2017_EC_QUESTIONS } from './history2017EC';
import { HISTORY_2016_EC_QUESTIONS } from './history2016EC';
import { BIOLOGY_2015_EC_QUESTIONS } from './biology2015EC';
import { BIOLOGY_2014_EC_QUESTIONS } from './biology2014EC';
import { BIOLOGY_2013_EC_QUESTIONS } from './biology2013EC';
import { EXAM_2016_EC_QUESTIONS } from './exam2016EC_questions';
import { EXAM_2017_EC_QUESTIONS } from './exam2017EC_questions';
import { CHEMISTRY_2017_EC_QUESTIONS } from './chemistry2017EC';
import { CHEMISTRY_2016_EC_QUESTIONS } from './chemistry2016EC';
import { ECONOMICS_2017_EC_QUESTIONS } from './economics2017EC';
import { ECONOMICS_2016_EC_QUESTIONS } from './economics2016EC';
import { CHEMISTRY_2015_EC_QUESTIONS } from './chemistry2015EC';
import { CHEMISTRY_2014_EC_QUESTIONS } from './chemistry2014EC';
import { CHEMISTRY_2013_EC_QUESTIONS } from './chemistry2013EC';
import { GEOGRAPHY_2015_EC_QUESTIONS } from './geography2015EC';
import { GEOGRAPHY_2016_EC_QUESTIONS } from './geography2016EC';
import { GEOGRAPHY_2017_EC_QUESTIONS } from './geography2017EC';
import { MATH_2015_EC_QUESTIONS } from './math2015EC';
import { MATH_2016_EC_QUESTIONS } from './math2016EC';
import { MATH_2017_EC_QUESTIONS } from './math2017EC';
import { HISTORY_2015_EC_QUESTIONS } from './history2015EC';
import { APTITUDE_2015_EC_QUESTIONS } from './aptitude2015EC';
import { PHYSICS_2014_EC_QUESTIONS } from './physics2014EC';
import { PHYSICS_2015_EC_QUESTIONS } from './physics2015EC';
import { PHYSICS_2016_EC_QUESTIONS } from './physics2016EC';
import { PHYSICS_2017_EC_QUESTIONS } from './physics2017EC';
import { PHYSICS_2013_EC_QUESTIONS } from './physics2013EC';
import { CHEMISTRY_GRADE_12_NOTES } from './chemistryNotes';
import { BIOLOGY_GRADE_12_NOTES } from './biologyNotes';
import { ECONOMICS_GRADE_12_NOTES } from './economicsNotes';
import { GEOGRAPHY_GRADE_12_NOTES } from './geographyNotes';
import { PHYSICS_GRADE_12_NOTES } from './physicsNotes';
import { HISTORY_GRADE_12_NOTES } from './historyNotes';
import { ENGLISH_GRADE_12_NOTES } from './englishNotes';
import { MATH_GRADE_12_NOTES } from './mathNotes';
import { COMPREHENSIVE_VIDEO_LESSONS } from './videoLessons';
import { SMART_STUDY_MODEL_EXAM_QUESTIONS } from './smartStudyModelExam';

export { ADMIN_EMAIL };


export const PAYMENT_ACCOUNTS = {
  cbeAccount: '1000521750255',
  cbeBankName: 'Commercial Bank of Ethiopia (CBE)',
  telebirrPhone: '0953201048',
  eBirrPhone: '0953201048',
  accountHolder: 'Guduru Alemayehu',
  semesterFeeText: '300 ETB for One Semester'
};

export const INITIAL_ADMIN_USER: User = {
  id: 'admin-alemayehu',
  email: ADMIN_EMAIL,
  name: 'Guduru Alemayehu (Admin)',
  role: 'admin',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  subscription: {
    status: 'active',
    planName: 'Super Admin Lifetime Pass',
    activatedAt: '2025-01-01',
    expiresAt: '2099-12-31'
  },
  createdAt: '2025-01-01'
};

export const ADMIN_USER = INITIAL_ADMIN_USER;

export const INITIAL_STUDENT_USER: User = {
  id: 'student-demo',
  email: 'student.sample@smartstudy.edu',
  name: 'Sarah Jenkins',
  role: 'student',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  subscription: {
    status: 'none' // starts with none to test subscription fee screen, but can subscribe or switch to free preview
  },
  createdAt: '2026-08-01',
  bookmarkedNoteIds: ['note-1'],
  completedVideoIds: ['vid-1']
};

export const DEMO_STUDENT = INITIAL_STUDENT_USER;

export const INITIAL_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan-termly',
    name: 'One Semester Full Pass',
    price: 300,
    currency: 'ETB ',
    durationMonths: 4,
    billingCycle: '300 ETB / One Semester',
    description: 'Complete tutorial, video lectures, notes & AI tutor for 1 full semester.',
    features: [
      'Full Access to 1,500+ Practice Questions',
      'All HD Video Tutorial Lectures',
      'Downloadable Study Notes & Summaries',
      'AI Smart Tutor (24/7 Explanations)',
      'Timed Mock Exams & Instant Feedback',
      'Offline PWA Learning Mode'
    ],
    popular: true,
    badge: '300 ETB SEMESTER'
  },
  {
    id: 'plan-monthly',
    name: 'Monthly Revision Pass',
    price: 100,
    currency: 'ETB ',
    durationMonths: 1,
    billingCycle: '100 ETB / Month',
    description: 'Quick revision for upcoming monthly tests & quizzes.',
    features: [
      'Access to Question Practice Bank',
      'Standard Video Lessons',
      'AI Tutor Basic Explanations',
      'Study Notes Reading'
    ],
    popular: false
  },
  {
    id: 'plan-annual',
    name: 'Full Academic Year Pass',
    price: 550,
    currency: 'ETB ',
    durationMonths: 12,
    billingCycle: '550 ETB / Full Year',
    description: 'Two semesters + summer break complete access and priority tutoring.',
    features: [
      'Everything in Semester Pass',
      'Full Year 12-Month Access',
      'Priority AI Tutor Response',
      'All Future Video Lectures & Question Packs',
      'Direct Admin Support from Guduru Alemayehu'
    ],
    popular: false,
    badge: 'SAVE 100 ETB'
  }
];

export const INITIAL_PROMO_CODES: PromoCode[] = [
  {
    code: 'SMART50',
    discountPercentage: 50,
    description: '50% off for new student registrations',
    isActive: true
  },
  {
    code: 'ALEMAYEHU29',
    discountPercentage: 100,
    description: '100% Free scholarship pass by Admin Guduru Alemayehu',
    isActive: true
  },
  {
    code: 'STUDY20',
    discountPercentage: 20,
    description: '20% Welcome discount',
    isActive: true
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  ...ENGLISH_2018_EC_QUESTIONS,
  ...ENGLISH_2017_EC_QUESTIONS,
  ...ENGLISH_2016_EC_QUESTIONS,
  ...ENGLISH_2015_EC_QUESTIONS,
  ...APTITUDE_2018_EC_QUESTIONS,
  ...PHYSICS_2018_EC_QUESTIONS,
  ...MATH_2018_EC_QUESTIONS,
  ...BIOLOGY_2018_EC_QUESTIONS,
  ...CHEMISTRY_2018_EC_QUESTIONS,
  ...BIOLOGY_2017_EC_QUESTIONS,
  ...BIOLOGY_2016_EC_QUESTIONS,
  ...APTITUDE_2017_EC_QUESTIONS,
  ...HISTORY_2017_EC_QUESTIONS,
  ...BIOLOGY_2015_EC_QUESTIONS,
  ...BIOLOGY_2014_EC_QUESTIONS,
  ...BIOLOGY_2013_EC_QUESTIONS,
  ...CHEMISTRY_2015_EC_QUESTIONS,
  ...CHEMISTRY_2014_EC_QUESTIONS,
  ...CHEMISTRY_2013_EC_QUESTIONS,
  ...GEOGRAPHY_2015_EC_QUESTIONS,
  ...GEOGRAPHY_2016_EC_QUESTIONS,
  ...GEOGRAPHY_2017_EC_QUESTIONS,
  ...MATH_2015_EC_QUESTIONS,
  ...MATH_2016_EC_QUESTIONS,
  ...MATH_2017_EC_QUESTIONS,
  ...HISTORY_2015_EC_QUESTIONS,
  ...HISTORY_2016_EC_QUESTIONS,
  ...APTITUDE_2015_EC_QUESTIONS,
  ...PHYSICS_2014_EC_QUESTIONS,
  ...PHYSICS_2015_EC_QUESTIONS,
  ...PHYSICS_2016_EC_QUESTIONS,
  ...PHYSICS_2017_EC_QUESTIONS,
  ...PHYSICS_2013_EC_QUESTIONS,
  ...CHEMISTRY_2017_EC_QUESTIONS,
  ...CHEMISTRY_2016_EC_QUESTIONS,
  ...ECONOMICS_2017_EC_QUESTIONS,
  ...ECONOMICS_2016_EC_QUESTIONS,
  ...EXAM_2016_EC_QUESTIONS,
  ...EXAM_2017_EC_QUESTIONS,
  ...SMART_STUDY_MODEL_EXAM_QUESTIONS
];

export const AVAILABLE_YEARS = [
  '2018 E.C.',
  '2017 E.C.',
  '2017 E.C. Model Exam',
  '2016 E.C.',
  '2015 E.C.',
  '2014 E.C.',
  '2013 E.C.',
  'General Practice'
];

export const INITIAL_VIDEOS: VideoLesson[] = COMPREHENSIVE_VIDEO_LESSONS;

export const INITIAL_NOTES: StudyNote[] = [
  {
    id: 'note-1',
    title: 'Complete Calculus & Differentiation Formula Cheat Sheet',
    subject: 'Mathematics',
    topic: 'Differential Calculus',
    summary: 'A fast-reference revision guide containing all major derivative rules, trigonometric identities, chain rule patterns, and common exam traps.',
    readTimeMinutes: 6,
    isFreePreview: true,
    tags: ['Formulas', 'Calculus', 'Derivatives', 'Exam Prep'],
    keyTakeaways: [
      'Power Rule: d/dx [x^n] = n*x^(n-1)',
      'Product Rule: (u*v)\' = u\'v + uv\'',
      'Quotient Rule: (u/v)\' = (u\'v - uv\') / v^2',
      'Chain Rule: d/dx [f(g(x))] = f\'(g(x)) * g\'(x)',
      'd/dx [sin(x)] = cos(x), d/dx [cos(x)] = -sin(x)'
    ],
    contentMarkdown: `COMPLETE CALCULUS DIFFERENTIATION GUIDE

1. FUNDAMENTAL RULES OF DIFFERENTIATION

Differentiation measures the instantaneous rate of change of a quantity. Below are the bedrock formulas every student must memorize:

• The Power Rule:
  For any real number n:
  d/dx [x^n] = n × x^(n - 1)
  Example: d/dx [5x^3] = 5 × 3x^2 = 15x^2

• The Product & Quotient Rules:
  - Product Rule: d/dx [u(x) × v(x)] = u'(x) × v(x) + u(x) × v'(x)
  - Quotient Rule: d/dx [u(x) / v(x)] = [u'(x) × v(x) - u(x) × v'(x)] / [v(x)]^2
  - Memory Tip for Quotient Rule: "Low d-High minus High d-Low, over the square of what is below."

• The Chain Rule:
  When differentiating composite functions:
  d/dx [f(g(x))] = f'(g(x)) × g'(x)

============================================================

2. COMMON TRIGONOMETRIC DERIVATIVES

• d/dx [sin x] = cos x
• d/dx [cos x] = -sin x
• d/dx [tan x] = sec^2 x
• d/dx [ln x] = 1 / x (for x > 0)
• d/dx [e^x] = e^x

============================================================

3. HIGH-FREQUENCY EXAM TRAPS

1. Forgetting the negative sign on cosine: Remember that all "Co-" trig functions have negative derivatives (cos, cot, csc).
2. Missing inner chain rule terms: When you see (3x^2 + 1)^4, do not forget to multiply by 6x at the end!
`,
    createdAt: '2026-08-01'
  },
  {
    id: 'note-2',
    title: 'Physics Mechanics: Newton\'s Laws & Work-Energy Theorem',
    subject: 'Physics',
    topic: 'Classical Mechanics',
    summary: 'Comprehensive notes covering forces, friction coefficients, conservation of momentum, kinetic & potential energy, and circular motion.',
    readTimeMinutes: 8,
    isFreePreview: false,
    tags: ['Physics', 'Mechanics', 'Newton Laws', 'Energy'],
    keyTakeaways: [
      'Newton I: Object stays at rest or uniform motion unless acted upon by F_net != 0',
      'Newton II: F_net = mass * acceleration (vector equation)',
      'Newton III: Action and reaction are equal in magnitude and opposite in direction',
      'Work = Force * displacement * cos(theta)',
      'Work-Energy Theorem: Total Work = Change in Kinetic Energy (W_net = ΔK)'
    ],
    contentMarkdown: `CLASSICAL MECHANICS & WORK-ENERGY GUIDE

1. NEWTON'S THREE LAWS OF MOTION

1. Law of Inertia: A body remains at rest or in uniform straight-line motion unless an external net force acts upon it.
2. Law of Acceleration: Net Force = mass × acceleration (F_net = m × a)
3. Law of Interaction: For every action, there is an equal and opposite reaction (F_AB = -F_BA).

============================================================

2. FRICTION MODELS

• Static Friction: f_s <= mu_s × N (matches applied force up to the threshold value).
• Kinetic Friction: f_k = mu_k × N (constant while moving, independent of velocity for ideal surfaces).

============================================================

3. WORK & ENERGY PRINCIPLES

• Work Done by a Constant Force:
  W = F × d × cos(theta)

• Kinetic & Potential Energy:
  - Kinetic Energy: K = 0.5 × m × v^2
  - Gravitational Potential Energy: U_g = m × g × h
  - Elastic (Spring) Potential Energy: U_s = 0.5 × k × x^2

• Work-Energy Theorem:
  Total Work = Change in Kinetic Energy (W_net = Delta K = K_f - K_i)

• Conservation of Mechanical Energy:
  In the absence of non-conservative forces (like friction or air resistance):
  E_initial = E_final implies K_i + U_i = K_f + U_f
`,
    createdAt: '2026-08-02'
  },
  {
    id: 'note-3',
    title: 'Scholastic Aptitude: Quantitative & Logical Reasoning Strategy Sheet',
    subject: 'Aptitude',
    topic: 'Quantitative & Analytical Aptitude',
    summary: 'High-speed problem-solving guide covering number series patterns, speed math shortcuts, deductive syllogisms, and spatial geometry logic.',
    readTimeMinutes: 9,
    isFreePreview: false,
    tags: ['Aptitude', 'SAT', 'Logic', 'Number Series', 'Reasoning'],
    keyTakeaways: [
      'Number Series: Check first differences, second differences, prime squares, and alternating sequences.',
      'Syllogisms: Use Venn Diagrams to verify "All A are B" and "Some B are C" conclusions.',
      'Speed Math: To multiply by 5, divide by 2 and add zero (e.g. 84 * 5 = 42 * 10 = 420).',
      'Direction Puzzles: Always sketch a compass with North upwards; net displacement = √(x² + y²).',
      'Time & Work: If A takes x days and B takes y days, together they take (x*y)/(x+y) days.'
    ],
    contentMarkdown: `SCHOLASTIC APTITUDE STRATEGY SHEET

1. HIGH-FREQUENCY NUMBER PATTERNS

• Prime Squares & Cubes: 4, 9, 25, 49, 121, 169, 289, 361... (p squared)
• Difference of Differences: When first differences are not constant, compute the delta between consecutive differences.
• Fibonacci Variants: Each term is the sum of the preceding two terms (or sum + constant).

============================================================

2. ANALYTICAL & DEDUCTIVE REASONING (SYLLOGISMS)

• Statement: All A are B.
  - Valid Deduction: Some B are A. Some A are B.
  - Invalid Deduction: All B are A (False).
• Statement: No A is B.
  - Valid Deduction: No B is A. Some A are not B.

============================================================

3. SPEED MATH & MENTAL FORMULAS

• Work & Time:
  Combined Time = (A × B) / (A + B)

• Relative Speed:
  - Opposite directions: S_relative = S1 + S2
  - Same direction: S_relative = |S1 - S2|

• Pythagorean Triples: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17), (9, 40, 41).
`,
    createdAt: '2026-08-03'
  },
  {
    id: 'note-4',
    title: 'English Language: Comprehensive Grammar, Tenses & Conditionals Guide',
    subject: 'English',
    topic: 'English Grammar & Syntax',
    summary: 'Essential English exam reference sheet covering all conditional types (including inversion), active/passive transformations, and reported speech rules.',
    readTimeMinutes: 7,
    isFreePreview: true,
    tags: ['English', 'Grammar', 'Conditionals', 'Tenses', 'Exam Prep'],
    keyTakeaways: [
      'Zero Conditional: If + Present Simple, Present Simple (Scientific facts)',
      'First Conditional: If + Present Simple, will + base verb (Realistic future)',
      'Second Conditional: If + Past Simple, would + base verb (Hypothetical present)',
      'Third Conditional: If + Past Perfect, would have + V3 (Unreal past)',
      'Inversion: "Had I known" = "If I had known"; "Should you need" = "If you need"'
    ],
    contentMarkdown: `ENGLISH GRAMMAR & SYNTAX MASTERY

1. THE FOUR CONDITIONAL STRUCTURES & INVERSIONS

• Zero Conditional (Facts & Truths):
  - Structure: If + Present Simple, Present Simple
  - Example: If you heat ice, it melts.

• First Conditional (Probable Future):
  - Structure: If + Present Simple, will + Verb
  - Example: If she studies consistently, she will pass the national exam.

• Second Conditional (Hypothetical / Unreal Present):
  - Structure: If + Past Simple (were), would + Verb
  - Example: If I were the minister of education, I would build more digital libraries.
  - Inverted Form: Were I the minister of education, I would build more digital libraries.

• Third Conditional (Unreal Past / Regret):
  - Structure: If + Past Perfect (had + V3), would have + V3
  - Example: If he had revised the chemistry formulas, he would have scored higher.
  - Inverted Form: Had he revised the chemistry formulas, he would have scored higher.

============================================================

2. REPORTED SPEECH (BACKSHIFT OF TENSES)

• Direct Speech to Reported Speech Rules:
  - Present Simple ("I write") -> Past Simple ("he wrote")
  - Present Continuous ("I am writing") -> Past Continuous ("he was writing")
  - Present Perfect ("I have written") -> Past Perfect ("he had written")
  - Past Simple ("I wrote") -> Past Perfect ("he had written")
  - Will ("I will write") -> Would ("he would write")
  - Can ("I can write") -> Could ("he could write")

============================================================

3. HIGH-FREQUENCY EXAM VOCABULARY & ANTONYMS

• Taciturn (quiet, reserved) <---> Loquacious / Voluble (talkative)
• Ephemeral (fleeting, short-lived) <---> Perennial / Permanent (lasting)
• Candid (frank, honest) <---> Evasive / Deceitful (misleading)
• Ubiquitous (found everywhere) <---> Scarce / Rare
`,
    createdAt: '2026-08-04'
  },
  {
    id: 'note-5',
    title: 'Ethiopian Geography: Physical Relief, Climate Zones & Drainage Basins',
    subject: 'Geography',
    topic: 'Physical Geography & Climatology',
    summary: 'Comprehensive revision guide for Ethiopian landforms, the Great Rift Valley, agro-ecological zones (Wurch to Bereha), and the three major drainage systems.',
    readTimeMinutes: 10,
    isFreePreview: true,
    tags: ['Geography', 'Ethiopia', 'Drainage', 'Climate', 'Rift Valley'],
    keyTakeaways: [
      'Western (Nile) Drainage System: Carries >60% of Ethiopian water discharge (Abay, Baro, Tekeze).',
      'South-Eastern Drainage System: Wabi Shebelle (longest river in Ethiopia ~1,340 km within Ethiopia) and Genale-Dawa into Indian Ocean.',
      'Rift Valley System: Internal/closed basin with tectonic lakes (Ziway, Langano, Abijatta, Shalla, Hawassa, Chamo, Abaya).',
      'Agro-Ecological Zones: Bereha (<500m), Kolla (500-1500m), Weyna Dega (1500-2300m), Dega (2300-3200m), Wurch (>3200m).',
      'Contour V-Rule: Apex of V-shaped contours points upstream toward higher elevation.'
    ],
    contentMarkdown: `GEOGRAPHY OF ETHIOPIA & THE HORN: COMPLETE SUMMARY

1. THE THREE MAJOR DRAINAGE SYSTEMS OF ETHIOPIA

• Western (Nile) Basin:
  - Major Rivers: Abay (Blue Nile), Baro, Akobo, Tekeze, Mereb.
  - Destination: Mediterranean Sea (via the Nile River).
  - Annual Discharge: Approximately 64% of total Ethiopian runoff.

• South-Eastern Basin:
  - Major Rivers: Wabi Shebelle (longest river within Ethiopia ~1,340 km), Genale, Dawa.
  - Destination: Indian Ocean.
  - Annual Discharge: Approximately 28% of total runoff.

• Rift Valley (Inland / Endorheic) Basin:
  - Major Rivers: Awash, Omo-Gibe, Bilate.
  - Destination: Closed lakes (Lake Chew Bahir, Lake Turkana, Lake Abbe).
  - Annual Discharge: Approximately 8% of total runoff.

============================================================

2. ETHIOPIAN TRADITIONAL AGRO-ECOLOGICAL ZONES

1. Wurch / Kur (Alpine / Cold High Altitude):
   - Elevation: Above 3,200 meters.
   - Mean Annual Temperature: Less than 10 degrees Celsius.
   - Typical Vegetation & Crops: Barley, cold-tolerant tubers, Afro-alpine moorland (Erica, Lobelia).

2. Dega (Temperate / Cool Highlands):
   - Elevation: 2,300 meters to 3,200 meters.
   - Mean Annual Temperature: 10 to 15 degrees Celsius.
   - Typical Crops: Barley, Wheat, Teff, Pulses. High human settlement density.

3. Weyna Dega (Sub-Tropical / Warm Moderate Highlands):
   - Elevation: 1,500 meters to 2,300 meters.
   - Mean Annual Temperature: 15 to 20 degrees Celsius.
   - Ideal zone for coffee (Coffea arabica), Teff, maize, enset, and livestock.

4. Kolla (Tropical / Hot Lowlands):
   - Elevation: 500 meters to 1,500 meters.
   - Mean Annual Temperature: 20 to 30 degrees Celsius.
   - Typical Crops: Sorghum, Millet, Cotton, Sesame, Pastoral livestock.

5. Bereha (Arid / Desert Lowlands):
   - Elevation: Below 500 meters (Danakil Depression / Afar, Ogaden).
   - Mean Annual Temperature: Greater than 30 degrees Celsius, extremely low erratic rainfall (<200 mm). Nomadic pastoralism.

============================================================

3. TOPOGRAPHIC MAP READING ESSENTIALS

• Gradient Calculation:
  Gradient = Vertical Interval (VI) / Horizontal Equivalent (HE)

• Contour Line Rules:
  - Closely spaced contour lines indicate steep slopes or cliffs.
  - Widely spaced contour lines indicate gentle slopes or flat plains.
  - V-shaped contour apex points upstream toward higher elevation.
`,
    createdAt: '2026-08-05'
  },
  {
    id: 'note-6',
    title: 'Ethiopian & World History: Complete Chronological Milestone Reference',
    subject: 'History',
    topic: 'Ethiopian State Formation & World History',
    summary: 'A structured timeline covering ancient civilizations, medieval sultanates and Christian kingdom interactions, the Zemene Mesafint, state reunification, and the anti-colonial victory at Adwa.',
    readTimeMinutes: 11,
    isFreePreview: false,
    tags: ['History', 'Adwa', 'Aksum', 'Treaty of Wuchale', 'Menelik II', 'Ethiopia'],
    keyTakeaways: [
      'Aksumite Kingdom: Traded via Port of Adulis on the Red Sea; converted to Christianity under King Ezana (c. 330 AD).',
      'Zemene Mesafint (1769–1855): Period of decentralized feudal regional lords begun with the assassination of Iyoas I by Ras Mikael Sehul.',
      'Emperor Tewodros II (1855–1868): Ended the Zemene Mesafint at the Battle of Deresge (1855), initiated modernization and centralized governance.',
      'Treaty of Wuchale (May 2, 1889): Signed between Emperor Menelik II and Count Pietro Antonelli; Article XVII disputed clause.',
      'Battle of Adwa (March 1, 1896): Decisive Ethiopian victory against Italian colonial forces led by General Baratieri.'
    ],
    contentMarkdown: `ETHIOPIAN HISTORY: KEY CHRONOLOGICAL LANDMARKS

1. MAJOR HISTORIC ERAS & RULERS

[Aksumite Empire] -> [Zagwe Dynasty (Lalibela)] -> [Solomonic Dynasty (1270, Yekuno Amlak)]
       |
       v
[Gondarine Period & Castle Architecture] -> [Zemene Mesafint (1769-1855)]
       |
       v
[Modern Reunification: Tewodros II -> Yohannes IV -> Menelik II -> Haile Selassie I]

============================================================

2. LANDMARK HISTORIC TREATIES

• Hewett (Adwa) Treaty (1884):
  - Signatories: Emperor Yohannes IV & Rear Admiral William Hewett (Britain) / Egypt.
  - Significance: Ethiopia assisted safe evacuation of Egyptian garrisons trapped by Mahdists in Sudan; Britain promised free transit of goods through Massawa.

• Treaty of Wuchale (1889):
  - Signatories: Emperor Menelik II & Count Pietro Antonelli (Italy).
  - Significance: Article 17 had disputed texts (Amharic: optional foreign diplomatic assistance; Italian: mandatory protectorate status).

• Treaty of Addis Ababa (1896):
  - Signatories: Emperor Menelik II & Italian Government.
  - Significance: Annulled the Treaty of Wuchale unconditionally; Italy recognized the absolute sovereignty and independence of Ethiopia.

• Tripartite Treaty (1906):
  - Signatories: Britain, France, and Italy.
  - Significance: European colonial powers divided Ethiopia into spheres of economic influence without Ethiopian consent.

============================================================

3. THE HISTORIC BATTLE OF ADWA (MARCH 1, 1896)

• Ethiopian Commanders: Emperor Menelik II, Empress Taytu Betul, Ras Makonnen, Ras Alula Engida, Ras Mengesha Yohannes, Fitawrari Gebeyehu.
• Italian Forces: General Oreste Baratieri leading four brigades (Albertone, Arimondi, Dabormida, Ellena).
• Global Significance: First decisive defeat of a modern European colonial power by an African nation in the 19th-century Scramble for Africa, becoming a permanent beacon of Pan-African liberty.
`,
    createdAt: '2026-08-06'
  },
  {
    id: 'note-7',
    title: 'Scholastic Aptitude Mastery: Verbal, Analytical & Quantitative Formulas',
    subject: 'Aptitude',
    topic: 'Verbal & Quantitative Reasoning',
    summary: 'A fast-review formula guide for national aptitude examinations: word analogies, antonyms/synonyms, logical syllogisms, sequence formulas, probability rules, and algebraic system solutions.',
    readTimeMinutes: 10,
    isFreePreview: true,
    tags: ['Aptitude', 'Quantitative Reasoning', 'Verbal Reasoning', 'Analogy', 'Probability', 'Sequences'],
    keyTakeaways: [
      'Analogy Relationships: Cause-effect, Part-to-whole, Category-member, Tool-to-function, Worker-to-creation.',
      'Arithmetic Sequence: a_n = a_1 + (n - 1)d; Sum S_n = (n/2)(a_1 + a_n).',
      'Geometric Sequence: G_n = G_1 * r^(n - 1); Sum S_n = a_1(r^n - 1)/(r - 1).',
      'Probability: P(A or B) = P(A) + P(B) - P(A and B). Counting Principle: Total = n_1 * n_2 * ... * n_k.',
      'Remainder Theorem: When polynomial f(x) is divided by x - c, the remainder is f(c).'
    ],
    contentMarkdown: `SCHOLASTIC APTITUDE TEST (SAT / ESSLCE): COMPLETE REVIEW SHEET

1. VERBAL & LOGICAL REASONING PATTERNS

• High-Frequency Analogy Relationships:
  1. Cause & Effect: Wildfire : Deforestation :: Drought : Desertification.
  2. Tool / Protection & Target: Eyes : Goggles :: Forehead : Helmet.
  3. Item to Collection: Spectra : Rainbow :: Star : Constellation.
  4. Role to Insignia: King : Crown :: Archpriest : Headgear.
  5. Trait to Domain: Ambitiousness : Behavioral :: Elegance : Physical.

============================================================

2. QUANTITATIVE REASONING CORE FORMULAS

• Arithmetic & Geometric Progressions:
  - Arithmetic Term: a_n = a_1 + (n - 1)d
  - Arithmetic Series Sum: S_n = (n / 2) × (a_1 + a_n) = (n / 2) × [2a_1 + (n - 1)d]
  - Geometric Term: G_n = G_1 × r^(n - 1)
  - Geometric Series Sum: S_n = G_1 × (r^n - 1) / (r - 1) (for r not equal to 1)

• Probability & Counting:
  - Addition Rule: P(A or B) = P(A) + P(B) - P(A and B)
  - Complement Rule: P(not A) = 1 - P(A)
  - Fundamental Counting Principle: For independent choices with n_1, n_2, ..., n_k options:
    Total Outcomes = n_1 × n_2 × ... × n_k

• Algebra & Polynomials:
  - Remainder Theorem: When f(x) is divided by x - c, Remainder R = f(c).
  - Factor Theorem: x - c is a factor of f(x) if and only if f(c) = 0.
  - Polynomial Intercepts: Any single-variable polynomial function y = f(x) has at most ONE y-intercept (y = f(0)).
`,
    createdAt: '2026-08-17'
  },
  {
    id: 'note-8',
    title: 'Grade 12 Chemistry: 2014 E.C. National Exam High-Yield Summary',
    subject: 'Chemistry',
    topic: 'Physical, Inorganic, Organic & Applied Chemistry',
    summary: 'Essential formulas, definitions, reaction pathways, and industrial processes tested in the 2014 E.C. national chemistry examination.',
    readTimeMinutes: 12,
    isFreePreview: true,
    tags: ['Chemistry', '2014 E.C.', 'Thermodynamics', 'Electrochemistry', 'Organic', 'Equilibrium'],
    keyTakeaways: [
      'Galvanic vs Electrolytic: Galvanic converts chemical to electrical (spontaneous, E° > 0); Electrolytic uses electrical to drive non-spontaneous reactions.',
      'Electrochemical Series: Higher standard reduction potential (E°) = stronger oxidizing agent / more easily reduced.',
      'Thermodynamics: First Law ΔE = q + w. Spontaneity at constant T, P: ΔG = ΔH - TΔS < 0.',
      'Aqueous Equilibrium: Pure liquids/solids are omitted from equilibrium expressions. Common ion decreases solubility.',
      'Industrial Processes: Down\'s cell (NaCl + CaCl₂ for Na metal), Hall-Héroult process (Al₂O₃ + cryolite for Al extraction).'
    ],
    contentMarkdown: `GRADE 12 CHEMISTRY: 2014 E.C. NATIONAL EXAM HIGH-YIELD REVIEW

1. ELECTROCHEMISTRY & REDOX REACTIONS

• Galvanic (Voltaic) vs. Electrolytic Cells:
  - Galvanic Cell: Converts chemical energy into electrical energy spontaneously (ΔG° < 0, E°cell > 0).
  - Electrolytic Cell: Uses external electrical energy to drive a non-spontaneous chemical change (ΔG° > 0, E°cell < 0).
• Anode vs Cathode:
  - Anode: Site of Oxidation (electron loss). Negative in galvanic, positive in electrolytic.
  - Cathode: Site of Reduction (electron gain). Positive in galvanic, negative in electrolytic.
• Cell Potential:
  E°cell = E°cathode - E°anode
• Nernst Equation (at 298 K):
  E = E° - (0.0592 / n) · log(Q)

============================================================

2. CHEMICAL THERMODYNAMICS & ENERGETICS

• First Law of Thermodynamics:
  ΔE = q + w
  - q > 0: Heat absorbed by system (endothermic).
  - q < 0: Heat released by system (exothermic).
  - w > 0: Work done ON the system (compression, w = -P·ΔV).
  - w < 0: Work done BY the system (expansion).

• Enthalpy, Entropy & Gibbs Free Energy:
  - Hess's Law: Overall ΔH°rxn = Sum(n·ΔH°f(products)) - Sum(m·ΔH°f(reactants)).
  - Gibbs Spontaneity:
    ΔG = ΔH - T·ΔS
    ΔG < 0: Spontaneous forward reaction.
    ΔG = 0: Dynamic equilibrium.
    ΔG > 0: Non-spontaneous (reverse reaction is spontaneous).

============================================================

3. CHEMICAL KINETICS & RATE LAWS

• General Reaction Rate:
  aA + bB → cC
  Rate = -(1/a)(Δ[A]/Δt) = -(1/b)(Δ[B]/Δt) = +(1/c)(Δ[C]/Δt)
• Differential Rate Law:
  Rate = k[A]^m[B]^n (Orders m and n determined experimentally only).
• Arrhenius Equation:
  k = A·e^(-Ea / RT)
  ln(k₂ / k₁) = (Ea / R) · (1/T₁ - 1/T₂)
• Catalysts:
  Lower the activation energy (Ea) by providing an alternate reaction pathway; do NOT change ΔH, ΔG, or equilibrium constant Kc.

============================================================

4. SOLUTIONS, COLLIGATIVE PROPERTIES & ACIDS/BASES

• Raoult's Law (Vapor Pressure): P_solution = X_solvent · P°_solvent
• Boiling Point Elevation: ΔTb = i · Kb · m
• Freezing Point Depression: ΔTf = i · Kf · m
• Osmotic Pressure: Π = i · M · R · T
• Autoionization of Water: Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C
• Buffer Solutions: Weak acid + conjugate base salt (or weak base + conjugate acid salt).
  pH = pKa + log([A⁻] / [HA])

============================================================

5. INDUSTRIAL METALLURGY & POLYMER SYNTHESIS

• Down's Cell: Molten NaCl + CaCl₂ additive (lowers melting point to ~580°C) → Pure Na(s) metal + Cl₂(g).
• Hall-Héroult Process: Purified Alumina (Al₂O₃) + Synthetic Cryolite (Na₃AlF₆) → Pure Al(l) metal.
• Contact Process: Sulfur / SO₂ over V₂O₅ catalyst at 450°C → Oleum → Sulfuric acid (H₂SO₄).
• Haber Process: N₂(g) + 3H₂(g) over Fe catalyst at 450°C, 200 atm → Ammonia (NH₃).
• Teflon Synthesis: Tetrafluoroethylene (F₂C=CF₂) via free-radical addition → Non-stick PTFE polymer.
• Chrome Tanning: Animal hides / collagen treated with chromium(III) sulfate salts → Stable leather.
`,
    createdAt: '2026-08-17'
  },
  {
    id: 'note-9',
    title: 'Grade 12 Biology: 2014 E.C. National Exam High-Yield Summary',
    subject: 'Biology',
    topic: 'Cellular Energetics, Genetics, Ecology & Physiology',
    summary: 'Comprehensive review of bacterial cell wall structures, sulfur and nitrogen cycles, Calvin cycle stoichiometry, enzymes, and genetic crosses tested in the 2014 E.C. national exam.',
    readTimeMinutes: 14,
    isFreePreview: true,
    tags: ['Biology', '2014 E.C.', 'Calvin Cycle', 'Peptidoglycan', 'Enzymes', 'Genetics', 'Ecology'],
    keyTakeaways: [
      'Bacterial Cell Wall: Built of peptidoglycan (murein) with NAG and NAM chains cross-linked by tetrapeptides.',
      'Calvin Cycle Stoichiometry: 3 turns (3 CO₂ fixed) yield 1 Triose Phosphate (TP/G3P); 6 turns yield 1 Glucose.',
      'Sulfur Cycle: Thiobacillus oxidizes H₂S to SO₄²⁻ for root absorption; Desulphovibrio reduces sulfate back to H₂S.',
      'Enzymes & Inhibition: Competitive inhibitors increase apparent Km (reversible by excess substrate); Non-competitive decrease Vmax.',
      'Immunity & Blood: Type O has no A/B antigens (universal red cell donor); Type AB has no antibodies in serum.'
    ],
    contentMarkdown: `GRADE 12 BIOLOGY: 2014 E.C. NATIONAL EXAM HIGH-YIELD REVIEW

1. MICROBIOLOGY & BIOCHEMICAL ARCHITECTURE

• Bacterial Cell Wall Structure:
  - Peptidoglycan (Murein): Found uniquely in bacterial cell walls. Alternating N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) chains cross-linked by oligopeptides.
• Gram-Positive vs Gram-Negative:
  - Gram-positive: Thick, multi-layered peptidoglycan and teichoic acids; retains crystal violet (appears purple/blue).
  - Gram-negative: Thin peptidoglycan surrounded by an outer lipopolysaccharide (LPS) membrane; counterstains pink/red with safranin.

============================================================

2. CELLULAR ENERGETICS & PHOTOSYNTHESIS

• Photosynthesis Stoichiometry:
  - Light-Dependent Phase (Thylakoid Membrane): Photolysis of water (2H₂O → 4H⁺ + 4e⁻ + O₂), generating ATP and NADPH.
  - Light-Independent Phase (Calvin Cycle / Stroma):
    1 Turn: Fixes 1 CO₂ via RuBisCO onto RuBP (5C).
    3 Turns: Fixes 3 CO₂ to net produce 1 Triose Phosphate (TP / G3P, 3C).
    6 Turns: Fixes 6 CO₂ to produce 1 Hexose Glucose (6C).

============================================================

3. BIOGEOCHEMICAL NUTRIENT CYCLING

• Thiobacillus (Sulfur Cycle): Chemoautotrophic oxidation: H₂S / S → SO₄²⁻ (plant usable sulfate).
• Desulphovibrio (Sulfur Cycle): Anaerobic sulfate reduction: SO₄²⁻ → H₂S.
• Rhizobium (Nitrogen Cycle): Symbiotic nitrogen fixation in legume root nodules.
• Nitrosomonas (Nitrogen Cycle): Nitrification step 1: NH₄⁺ → NO₂⁻ (nitrite).
• Nitrobacter (Nitrogen Cycle): Nitrification step 2: NO₂⁻ → NO₃⁻ (nitrate).
• Pseudomonas (Nitrogen Cycle): Denitrification: NO₃⁻ → N₂ gas.
`,
    createdAt: '2026-08-18'
  },
  {
    id: 'note-10',
    title: 'Grade 12 Physics: 2014 E.C. National Exam Comprehensive Summary',
    subject: 'Physics',
    topic: 'Optics, Mechanics, Electromagnetism & Modern Physics',
    summary: 'Essential formulas, core principles, and step-by-step problem-solving methods for the 2014 E.C. national physics examination.',
    readTimeMinutes: 16,
    isFreePreview: true,
    tags: ['Physics', '2014 E.C.', 'Optics', 'Electromagnetism', 'Thermodynamics', 'Mechanics', 'Quantum'],
    keyTakeaways: [
      'Refraction & Lenses: Snell\'s Law n₁ sin θ₁ = n₂ sin θ₂; Lensmaker\'s equation 1/f = (n - 1)(1/R₁ - 1/R₂).',
      'Rotational Dynamics: Parallel Axis Theorem I = I_cm + Md²; Work W = τ · θ; Angular momentum L = I · ω.',
      'Electromagnetism: Solenoid field B = μ₀ n I; Induced emf ℰ = -dΦ/dt; Transformer ratio V_s/V_p = N_s/N_p = I_p/I_s.',
      'Thermodynamics: First Law ΔU = Q - W_by = Q + W_on; Conduction rate H = k A ΔT / L.',
      'Modern Physics: Heisenberg uncertainty Δx · Δp ≥ ℏ/2; BE/A curve peaks at Iron-56 (most stable nucleus).'
    ],
    contentMarkdown: `GRADE 12 PHYSICS: 2014 E.C. HIGH-YIELD EXAM FORMULAS & PRINCIPLES

1. GEOMETRIC OPTICS & WAVE PHENOMENA

• Snell's Law of Refraction:
  n1 × sin(theta1) = n2 × sin(theta2)
  n2 / n1 = v1 / v2 = lambda1 / lambda2

• Critical Angle & Total Internal Reflection (n1 > n2):
  sin(theta_c) = n2 / n1

• Thin Lens & Mirror Equation:
  1 / f = (1 / d_o) + (1 / d_i)
  Magnification M = -d_i / d_o = h_i / h_o

• Lensmaker's Equation:
  1 / f = (n - 1) × [(1 / R1) - (1 / R2)]

============================================================

2. MECHANICS & ROTATIONAL DYNAMICS

• Gravitational & Orbital Motion:
  F_g = (G × M × m) / r^2
  v_orbit = square root(G × M / r)
  T = 2 × pi × square root(r^3 / (G × M))

• Parallel Axis Theorem:
  I = I_cm + M × d^2

• Rotational Work & Power:
  W = tau × theta
  P = tau × omega

• Rotational Kinematics:
  omega_f^2 = omega_i^2 + 2 × alpha × theta
  theta = omega_i × t + 0.5 × alpha × t^2

============================================================

3. ELECTROMAGNETISM & CIRCUITS

• Solenoid Magnetic Field:
  B = mu_0 × n × I = mu_0 × (N / L) × I

• Lorentz Force on Moving Charge:
  F = q × v × B × sin(theta)
  Orbital radius in magnetic field: r = (m × v) / (q × B)

• Faraday's Law of Electromagnetic Induction:
  emf = -N × (Delta Phi_B / Delta t) = -N × Delta(B × A × cos(theta)) / Delta t

• Series RLC Circuit Impedance & Power:
  Z = square root(R^2 + (X_L - X_C)^2)
  P_avg = V_rms × I_rms × cos(phi) = I_rms^2 × R

• Ideal Transformer Equations:
  Vs / Vp = Ns / Np = Ip / Is

============================================================

4. THERMAL PHYSICS & FLUIDS

• First Law of Thermodynamics:
  Delta U = Q - W_by = Q + W_on

• Thermal Conduction (Fourier's Law):
  H = Q / t = (k × A × Delta T) / L

• Capillary Rise (Surface Tension):
  h = (2 × gamma × cos(theta)) / (rho × g × r)

• Anomalous Expansion of Water:
  Water reaches maximum density at 4 degrees Celsius (1000 kg/m^3). Below 4 degrees Celsius, open hydrogen-bonded lattices decrease density.

============================================================

5. QUANTUM & NUCLEAR PHYSICS

• Heisenberg's Uncertainty Principle:
  Delta x × Delta p >= h_bar / 2

• Nuclear Binding Energy Curve (BE / A):
  - Global peak at Iron-56 (56Fe) with ~8.8 MeV/nucleon (maximum nuclear stability).
  - Fusion of light nuclei (A < 56) and fission of heavy nuclei (A > 56) both release energy by moving toward Iron-56.
`,
    createdAt: '2026-08-18'
  },
  ...CHEMISTRY_GRADE_12_NOTES,
  ...BIOLOGY_GRADE_12_NOTES,
  ...ECONOMICS_GRADE_12_NOTES,
  ...GEOGRAPHY_GRADE_12_NOTES,
  ...PHYSICS_GRADE_12_NOTES,
  ...HISTORY_GRADE_12_NOTES,
  ...ENGLISH_GRADE_12_NOTES,
  ...MATH_GRADE_12_NOTES
];

export const INITIAL_TRANSACTIONS: PaymentTransaction[] = [
  {
    id: 'tx-101',
    userId: 'student-demo',
    userEmail: 'student.sample@smartstudy.edu',
    userName: 'Sarah Jenkins',
    planId: 'plan-termly',
    planName: 'Semester / Term Pass',
    amount: 34.99,
    currency: '$',
    paymentMethod: 'Credit Card (Stripe)',
    status: 'completed',
    referenceNo: 'SST-TX-882910',
    createdAt: '2026-08-10'
  },
  {
    id: 'tx-102',
    userId: 'student-2',
    userEmail: 'alex.tadesse@example.com',
    userName: 'Alex Tadesse',
    planId: 'plan-annual',
    planName: 'Annual VIP Mastery',
    amount: 69.99,
    currency: '$',
    paymentMethod: 'Telebirr / Mobile Money',
    status: 'completed',
    referenceNo: 'SST-TX-991204',
    createdAt: '2026-08-12'
  },
  {
    id: 'tx-103',
    userId: 'student-3',
    userEmail: 'marcus.vance@school.org',
    userName: 'Marcus Vance',
    planId: 'plan-monthly',
    planName: 'Monthly Pro Pass',
    amount: 14.99,
    currency: '$',
    paymentMethod: 'PayPal',
    status: 'completed',
    referenceNo: 'SST-TX-338192',
    createdAt: '2026-08-14'
  }
];

export const ALL_SUBJECTS = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Economics',
  'English',
  'Aptitude',
  'Geography',
  'History',
  'Economics & General',
  'Smart Study Model Exam'
];
