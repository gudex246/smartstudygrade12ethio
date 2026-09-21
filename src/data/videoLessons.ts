import { VideoLesson } from '../types';

export const COMPREHENSIVE_VIDEO_LESSONS: VideoLesson[] = [
  // ==========================================
  // ORGANIC CHEMISTRY VIDEOS (CHEMISTRY)
  // ==========================================
  {
    id: 'vid-chem-org-1',
    title: '🇪🇹 Organic Chemistry: Introduction & Hydrocarbons in Amharic (የኦርጋኒክ ኬሚስትሪ መግቢያ)',
    subject: 'Chemistry',
    topic: 'Organic Chemistry: Hydrocarbons & Hybridization',
    language: 'Amharic',
    videoUrl: 'https://www.youtube.com/watch?v=0kGmpQJspw8',
    thumbnailUrl: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&auto=format&fit=crop&q=80',
    duration: '26:40',
    durationSec: 1600,
    description: 'በአማርኛ የተዘጋጀ የ11ኛ እና 12ኛ ክፍል የኦርጋኒክ ኬሚስትሪ መግቢያ፡ ስለ ካርቦን ልዩ ባህሪ፣ ሃይብሪዳይዜሽን (sp³, sp², sp)፣ አልኬን (Alkanes)፣ አልኪን (Alkenes) እና አልካይን (Alkynes) አወቃቀር እና ኬሚካዊ ምላሾች ዝርዝር ማብራሪያ።',
    chapters: [
      { time: 0, title: 'መግቢያ እና የካርቦን ባህሪያት (Carbon Bonding)' },
      { time: 320, title: 'ሃይብሪዳይዜሽን (sp³, sp², sp Hybridization)' },
      { time: 780, title: 'አልኬን እና አወቃቀር (Alkanes Structure)' },
      { time: 1140, title: 'አልኪን እና አልካይን (Alkenes & Alkynes)' },
      { time: 1420, title: 'የመግቢያ ጥያቄዎች አሰራር (Practice Questions)' }
    ],
    notesSummary: 'General formula for Alkanes: CnH2n+2, Alkenes: CnH2n, Alkynes: CnH2n-2. Carbon exhibits sp3 (tetrahedral, 109.5°), sp2 (trigonal planar, 120°), and sp (linear, 180°) hybridizations.',
    isFreePreview: true,
    orderIndex: 1,
    createdAt: '2026-08-01'
  },
  {
    id: 'vid-chem-org-2',
    title: '🇪🇹 Organic Chemistry: IUPAC Nomenclature Rules in Amharic (የስያሜ ህጎች)',
    subject: 'Chemistry',
    topic: 'Organic Chemistry: IUPAC Nomenclature',
    language: 'Amharic',
    videoUrl: 'https://www.youtube.com/watch?v=l2WQ_17vH6o',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80',
    duration: '28:15',
    durationSec: 1695,
    description: 'የኦርጋኒክ ውህዶች አለምአቀፍ የስያሜ ህጎች (IUPAC Nomenclature) በአማርኛ። ዋናውን ረጅም ሰንሰለት መምረጥ (Longest Carbon Chain)፣ ቅርንጫፎችን (Substituents) ቁጥር መስጠት እና የቅድሚያ ቅደም ተከተል (Priority of Functional Groups)።',
    chapters: [
      { time: 0, title: 'የIUPAC መሰረታዊ ህጎች (Basic Rules)' },
      { time: 420, title: 'ቅርንጫፎችን መሰየም (Alkyl Branches & Numbering)' },
      { time: 890, title: 'ድርብ እና ሶስትዮሽ ቦንዶች (Alkenes & Alkynes Naming)' },
      { time: 1350, title: 'የሳይክሎ ውህዶች ስያሜ (Cycloalkanes)' },
      { time: 1580, title: 'የፈተና ጥያቄዎች ምሳሌዎች (Exam Examples)' }
    ],
    notesSummary: 'Step 1: Identify longest continuous carbon chain containing primary functional group. Step 2: Number from the end closest to substituents/principal group. Step 3: Alphabetize substituent prefixes.',
    isFreePreview: true,
    orderIndex: 2,
    createdAt: '2026-08-02'
  },
  {
    id: 'vid-chem-org-3',
    title: 'Organic Chemistry: Reaction Mechanisms (SN1, SN2, E1, E2 Mastery)',
    subject: 'Chemistry',
    topic: 'Organic Chemistry: Reaction Mechanisms',
    language: 'English',
    videoUrl: 'https://www.youtube.com/watch?v=_JmY9HkUq-8',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&auto=format&fit=crop&q=80',
    duration: '32:10',
    durationSec: 1930,
    description: 'Comprehensive walkthrough of nucleophilic substitution (SN1 vs SN2) and elimination mechanisms (E1 vs E2). Covers carbocation stability, solvent polarity effects, leaving group ability, and inversion of configuration (Walden Inversion).',
    chapters: [
      { time: 0, title: 'Overview of Substitution vs Elimination' },
      { time: 380, title: 'SN2 Mechanism: Concerted Bimolecular Attack' },
      { time: 820, title: 'SN1 Mechanism: Carbocation Intermediate & Racemization' },
      { time: 1320, title: 'E2 vs E1 Mechanisms: Zaitsev vs Hofmann Products' },
      { time: 1750, title: 'Master Decision Matrix & Solved Exam Problems' }
    ],
    notesSummary: 'SN2 favors primary halides and strong nucleophiles in polar aprotic solvents. SN1 favors tertiary halides and weak nucleophiles in polar protic solvents with carbocation rearrangement possibilities.',
    isFreePreview: false,
    orderIndex: 3,
    createdAt: '2026-08-03'
  },
  {
    id: 'vid-chem-org-4',
    title: '🇪🇹 Functional Groups in Amharic: Alcohols, Carbonyls & Carboxylic Acids (ፈንክሽናል ግሩፖች)',
    subject: 'Chemistry',
    topic: 'Organic Chemistry: Functional Groups',
    language: 'Amharic',
    videoUrl: 'https://www.youtube.com/watch?v=H_7iLZZ8m48',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&auto=format&fit=crop&q=80',
    duration: '24:50',
    durationSec: 1490,
    description: 'የተለያዩ የኦርጋኒክ ፈንክሽናል ግሩፖች በአማርኛ ማብራሪያ፡ አልኮሆሎች (-OH)፣ አልዲሃይድ (-CHO)፣ ኪቶን (C=O)፣ ካርቦክሲሊክ አሲዶች (-COOH)፣ ኤስተር (-COOR) እና አሚኖች። የእያንዳንዳቸው ኬሚካዊ ባህሪያት እና የኦክሳይዴሽን ደረጃዎች።',
    chapters: [
      { time: 0, title: 'ፈንክሽናል ግሩፕ ምንድን ነው? (What are Functional Groups)' },
      { time: 350, title: 'አልኮሆል እና ፊኖል (Alcohols & Phenols)' },
      { time: 780, title: 'አልዲሃይድ እና ኪቶን (Aldehydes & Ketones)' },
      { time: 1150, title: 'ካርቦክሲሊክ አሲድ እና ኤስተር (Carboxylic Acids & Esters)' },
      { time: 1380, title: 'የሳሙና እና የኤስተሪፊኬሽን ምላሽ (Saponification & Esterification)' }
    ],
    notesSummary: 'Primary alcohol oxidizes to aldehyde then carboxylic acid. Secondary alcohol oxidizes to ketone. Tertiary alcohol resists oxidation.',
    isFreePreview: false,
    orderIndex: 4,
    createdAt: '2026-08-04'
  },
  {
    id: 'vid-chem-org-5',
    title: 'Aromatic Hydrocarbons: Benzene Structure & Electrophilic Substitution',
    subject: 'Chemistry',
    topic: 'Organic Chemistry: Aromaticity & Benzene',
    language: 'English',
    videoUrl: 'https://www.youtube.com/watch?v=8YFw0c47QcE',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=600&auto=format&fit=crop&q=80',
    duration: '21:30',
    durationSec: 1290,
    description: 'Master Hückel’s Rule (4n+2 π electrons), resonance stabilization of the benzene ring, and the major electrophilic aromatic substitution (EAS) mechanisms: Halogenation, Nitration, Sulfonation, and Friedel-Crafts reactions.',
    chapters: [
      { time: 0, title: 'Discovery & Kekulé Structure of Benzene' },
      { time: 260, title: 'Resonance Energy & Hückel’s 4n+2 Rule' },
      { time: 640, title: 'General EAS Mechanism (Arenium Ion Intermediate)' },
      { time: 980, title: 'Friedel-Crafts Alkylation & Acylation' },
      { time: 1180, title: 'Ortho/Para vs Meta Directing Substituents' }
    ],
    notesSummary: 'Activating groups (e.g. -OH, -NH2, -CH3) are ortho/para-directors. Deactivating groups (e.g. -NO2, -COOH, -SO3H) are meta-directors (except halogens which are deactivating but ortho/para-directing).',
    isFreePreview: false,
    orderIndex: 5,
    createdAt: '2026-08-05'
  },
  {
    id: 'vid-chem-org-6',
    title: '🇪🇹 Chemistry National Exam Solving: Organic Chemistry in Amharic (የብሔራዊ ፈተና አሰራር)',
    subject: 'Chemistry',
    topic: 'Organic Chemistry: Entrance Exam Walkthrough',
    language: 'Amharic',
    videoUrl: 'https://www.youtube.com/watch?v=H6OsqK7hK0Y',
    thumbnailUrl: 'https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=600&auto=format&fit=crop&q=80',
    duration: '35:20',
    durationSec: 2120,
    description: 'ከዚህ በፊት በኢትዮጵያ የ12ኛ ክፍል ብሔራዊ ፈተና (ESSLCE / EUEE) የወጡ የኦርጋኒክ ኬሚስትሪ፣ ሪአክሽን ኪኔቲክስ እና ኬሚካል ኢኩሊብሪየም ጥያቄዎች ደረጃ በደረጃ በአማርኛ ማብራሪያ የተሰሩበት የተሟላ የቪዲዮ ትምህርት።',
    chapters: [
      { time: 0, title: 'የፈተና አሰራር ስልቶች (Exam Strategies)' },
      { time: 300, title: 'የሃይድሮካርቦን ጥያቄዎች (Hydrocarbons Questions)' },
      { time: 820, title: 'የአልኮሆል እና ኤስተር ጥያቄዎች (Alcohols & Esters)' },
      { time: 1400, title: 'የፖሊመር እና ማክሮሞለኪውል ጥያቄዎች (Polymers)' },
      { time: 1950, title: 'የፍጥነት እና ትክክለኛነት ሚስጥሮች (Accuracy Tips)' }
    ],
    notesSummary: 'Key exam pattern: Questions frequently test IUPAC priority numbering, isomerism counting (structural vs stereoisomers), and functional group identification tests (e.g., Tollens, Fehling, Bromine water).',
    isFreePreview: true,
    orderIndex: 6,
    createdAt: '2026-08-06'
  },

  // ==========================================
  // AMHARIC VIDEO LESSONS (OTHER SUBJECTS)
  // ==========================================
  {
    id: 'vid-apt-amh-1',
    title: '🇪🇹 Aptitude in Amharic: Number Series & Fast Math Shortcuts (የአፕቲትዩድ ቁጥር ተከታታይ)',
    subject: 'Aptitude',
    topic: 'Quantitative Aptitude & Number Series',
    language: 'Amharic',
    videoUrl: 'https://www.youtube.com/watch?v=kqtD5dpn9C8',
    thumbnailUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80',
    duration: '30:15',
    durationSec: 1815,
    description: 'በአማርኛ የተዘጋጀ የብሔራዊ ፈተና አፕቲትዩድ ቁልፍ ዘዴዎች፡ የቁጥር ተከታታዮች (Prime squares, alternating series, geometric patterns)፣ የፐርሰንቴጅ አቋራጮች እና የጊዜ ቆጣቢ ስሌቶች።',
    chapters: [
      { time: 0, title: 'የአፕቲትዩድ ፈተና መዋቅር (Exam Overview)' },
      { time: 280, title: 'የቁጥር ተከታታዮች ሚስጥር (Number Series Patterns)' },
      { time: 750, title: 'የስኩዌር እና የፕራይም ቁጥሮች ዘዴ (Prime & Squares)' },
      { time: 1200, title: 'የፐርሰንቴጅ እና የሬሾ ፈጣን ስሌት (Speed Ratios)' },
      { time: 1600, title: 'ያለፉት የፈተና ጥያቄዎች አሰራር (Solved Exam Problems)' }
    ],
    notesSummary: 'Always check differences between terms first (1st difference, 2nd difference), then squares/cubes (n²±k, n³±k), and alternating operations.',
    isFreePreview: true,
    orderIndex: 7,
    createdAt: '2026-08-07'
  },
  {
    id: 'vid-phy-amh-1',
    title: '🇪🇹 Physics in Amharic: Vectors, 2D Motion & Projectiles (ፊዚክስ ቬክተር እና እንቅስቃሴ)',
    subject: 'Physics',
    topic: 'Mechanics: Vectors & Projectile Motion',
    language: 'Amharic',
    videoUrl: 'https://www.youtube.com/watch?v=kKKM8Y-u7ds',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80',
    duration: '27:45',
    durationSec: 1665,
    description: 'የ11ኛ እና 12ኛ ክፍል ፊዚክስ በአማርኛ፡ ቬክተሮችን መደመርና ማባዛት (Dot & Cross Product)፣ የ2D እንቅስቃሴ፣ የተወርዋሪ አካላት ፍጥነትና ከፍታ (Projectile Maximum Height & Range)።',
    chapters: [
      { time: 0, title: 'የቬክተር መሰረታዊ ፅንሰ ሃሳብ (Vector Fundamentals)' },
      { time: 340, title: 'Dot Product እና Cross Product' },
      { time: 820, title: 'የተወርዋሪ አካላት እንቅስቃሴ (Projectile Motion)' },
      { time: 1250, title: 'ከፍተኛ ከፍታ እና ርቀት ስሌት (Max Height & Range)' },
      { time: 1520, title: 'የብሔራዊ ፈተና ጥያቄዎች (Exam Questions)' }
    ],
    notesSummary: 'Range R = (u² sin 2θ)/g. Maximum height H = (u² sin²θ)/(2g). Time of flight T = (2u sin θ)/g. Horizontal velocity remains constant (ax = 0).',
    isFreePreview: true,
    orderIndex: 8,
    createdAt: '2026-08-08'
  },
  {
    id: 'vid-math-amh-1',
    title: '🇪🇹 Mathematics in Amharic: Matrices & Determinants (ማትሪክስ እና ዲተርሚናንት በአማርኛ)',
    subject: 'Mathematics',
    topic: 'Linear Algebra: Matrices & Determinants',
    language: 'Amharic',
    videoUrl: 'https://www.youtube.com/watch?v=WUvTyaaNkzM',
    thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80',
    duration: '25:30',
    durationSec: 1530,
    description: 'የ11ኛ እና 12ኛ ክፍል የሂሳብ ትምህርት ማትሪክስ፡ የ2x2 እና 3x3 ማትሪክስ ዲተርሚናንት፣ ኢንቨርስ ማትሪክስ (Inverse Matrix)፣ እና ክሬመርስ ሩል (Cramer’s Rule) በመጠቀም የሊኒየር ኢኩዌሽኖችን መፍታት።',
    chapters: [
      { time: 0, title: 'የማትሪክስ መግቢያ (Matrix Types & Operations)' },
      { time: 310, title: 'የዲተርሚናንት ስሌት (Calculating Determinants)' },
      { time: 790, title: 'ኢንቨርስ ማትሪክስ (Finding Inverse Matrix)' },
      { time: 1180, title: 'ክሬመርስ ሩል (Cramer’s Rule Step-by-Step)' },
      { time: 1420, title: 'የፈተና ጥያቄዎች አሰራር (Solved Practice Problems)' }
    ],
    notesSummary: 'For 2x2 matrix A=[[a,b],[c,d]], det(A) = ad - bc. Inverse A⁻¹ = (1/det(A)) * [[d,-b],[-c,a]]. A matrix is non-invertible (singular) if det(A) = 0.',
    isFreePreview: true,
    orderIndex: 9,
    createdAt: '2026-08-09'
  },
  {
    id: 'vid-bio-amh-1',
    title: '🇪🇹 Biology in Amharic: Genetics & DNA Replication (ጄኔቲክስ እና ዲኤንኤ በአማርኛ)',
    subject: 'Biology',
    topic: 'Genetics & Molecular Biology',
    language: 'Amharic',
    videoUrl: 'https://www.youtube.com/watch?v=8kK2zwjRV0M',
    thumbnailUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&auto=format&fit=crop&q=80',
    duration: '29:10',
    durationSec: 1750,
    description: 'የ12ኛ ክፍል ባዮሎጂ ጄኔቲክስ በአማርኛ፡ የሜንዴል የዘረመል ህጎች (Mendelian Inheritance)፣ የዲኤንኤ አወቃቀር (Double Helix)፣ ሴሚ-ኮንሰርቫቲቭ ሪፕሊኬሽን (Semi-conservative Replication) እና የፕሮቲን ውህደት (Transcription & Translation)።',
    chapters: [
      { time: 0, title: 'የሜንዴል ጄኔቲክስ ህጎች (Mendel’s Laws)' },
      { time: 360, title: 'የዲኤንኤ እና አርኤንኤ አወቃቀር (DNA & RNA Structure)' },
      { time: 820, title: 'ዲኤንኤ ሪፕሊኬሽን (DNA Replication Mechanism)' },
      { time: 1240, title: 'ትራንስክሪፕሽን እና ትራንስሌሽን (Protein Synthesis)' },
      { time: 1560, title: 'የጄኔቲክስ ፈተና ጥያቄዎች (Genetics Exam Problems)' }
    ],
    notesSummary: 'DNA replication is semi-conservative: DNA Helicase unwinds, DNA Polymerase III synthesizes 5\' to 3\', DNA Ligase seals Okazaki fragments on lagging strand.',
    isFreePreview: true,
    orderIndex: 10,
    createdAt: '2026-08-10'
  },

  // ==========================================
  // GENERAL SUBJECT MASTERY & ADVANCED TUTORIALS
  // ==========================================
  {
    id: 'vid-eng-1',
    title: 'English Language Mastery: Tenses, Conditionals & Inversion Rules',
    subject: 'English',
    topic: 'Grammar & Syntax Mastery',
    language: 'English',
    videoUrl: 'https://www.youtube.com/watch?v=kKKM8Y-u7ds',
    thumbnailUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80',
    duration: '24:15',
    durationSec: 1455,
    description: 'Comprehensive walkthrough of high-frequency English exam grammar rules: all 12 tenses, conditional structures, inverted clauses, reported speech, and active/passive transformations.',
    chapters: [
      { time: 0, title: 'Overview of English Exam Patterns' },
      { time: 240, title: 'Zero, First, Second & Third Conditionals' },
      { time: 680, title: 'Subject-Verb Agreement Traps' },
      { time: 1040, title: 'Direct & Indirect Speech Conversion' },
      { time: 1320, title: 'Top 10 Exam Error Identifications' }
    ],
    notesSummary: 'Full rules table for tense backshifts in reported speech and conditional structures with inversion.',
    isFreePreview: true,
    orderIndex: 11,
    createdAt: '2026-08-11'
  },
  {
    id: 'vid-geo-1',
    title: 'Geography of Ethiopia: Drainage Systems, River Basins & Topography',
    subject: 'Geography',
    topic: 'Physical Geography & Drainage',
    language: 'English',
    videoUrl: 'https://www.youtube.com/watch?v=kqtD5dpn9C8',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80',
    duration: '26:50',
    durationSec: 1610,
    description: 'In-depth visual review of the Ethiopian highlands, Great East African Rift Valley, river basins (Abay, Awash, Wabi Shebelle, Omo), and agro-ecological climatic zones from Bereha to Wurch.',
    chapters: [
      { time: 0, title: 'Geological Formation & Relief' },
      { time: 320, title: 'Three Major Drainage Systems' },
      { time: 740, title: 'The Great East African Rift Valley' },
      { time: 1100, title: 'Traditional Agro-Ecological Zones' },
      { time: 1400, title: 'Topographic Map Reading & Contours' }
    ],
    notesSummary: 'Complete summary of river lengths, drainage areas, catchment basins, and altitude-based temperature lapse rates.',
    isFreePreview: false,
    orderIndex: 12,
    createdAt: '2026-08-12'
  },
  {
    id: 'vid-his-1',
    title: '🇪🇹 Modern Ethiopian History: The Battle of Adwa & Sovereignty in Amharic',
    subject: 'History',
    topic: 'Modern Ethiopian History & Sovereign Treaties',
    language: 'Amharic',
    videoUrl: 'https://www.youtube.com/watch?v=gS6gW0W7w-8',
    thumbnailUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&auto=format&fit=crop&q=80',
    duration: '31:10',
    durationSec: 1870,
    description: 'የኢትዮጵያ ታሪክ በአማርኛ፡ ዘመነ መሳፍንት፣ የአጼ ቴዎድሮስ፣ አጼ ዮሐንስና ዳግማዊ አጼ ምኒልክ የሀገር አንድነት ጥረቶች፣ የውጫሌ ውል አንቀጽ 17 ውዝግብ፣ እና ታሪካዊው የ1896 የአድዋ ጦርነት ድል ዝርዝር ትንታኔ።',
    chapters: [
      { time: 0, title: 'የዘመነ መሳፍንት ማጠቃለያ (Zemene Mesafint)' },
      { time: 380, title: 'የሀገር አንድነት ግንባታ (Reunification)' },
      { time: 820, title: 'የውጫሌ ውል እና አንቀጽ 17 (Treaty of Wuchale)' },
      { time: 1240, title: 'የአድዋ ጦርነት እና ድል (Battle of Adwa 1896)' },
      { time: 1620, title: 'የድህረ-አድዋ ስምምነቶች (Post-Adwa Treaties)' }
    ],
    notesSummary: 'Article XVII of Wuchale (1889) was the main catalyst for Adwa: Amharic version gave option ("could"), Italian version falsely claimed mandate ("must").',
    isFreePreview: true,
    orderIndex: 13,
    createdAt: '2026-08-13'
  },
  {
    id: 'vid-eco-1',
    title: 'Economics: National Income Accounting, Fiscal & Monetary Policies',
    subject: 'Economics',
    topic: 'Macroeconomics: National Income & Monetary Policy',
    language: 'English',
    videoUrl: 'https://www.youtube.com/watch?v=d8uTB5XorBw',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
    duration: '22:40',
    durationSec: 1360,
    description: 'Master Gross Domestic Product (GDP) vs Gross National Product (GNP), expenditure vs income approach, fiscal policy stabilizers, central bank interest rates, and inflation controlling tools.',
    chapters: [
      { time: 0, title: 'GDP vs GNP Formulas' },
      { time: 320, title: 'Expenditure Approach: GDP = C + I + G + (X - M)' },
      { time: 710, title: 'Inflation & CPI Index Calculations' },
      { time: 1040, title: 'Expansionary vs Contractionary Fiscal Policy' },
      { time: 1280, title: 'National Exam Practice Problems' }
    ],
    notesSummary: 'Nominal GDP measures output at current prices; Real GDP adjusts for price changes using base year prices. GDP Deflator = (Nominal GDP / Real GDP) * 100.',
    isFreePreview: false,
    orderIndex: 14,
    createdAt: '2026-08-14'
  }
];
