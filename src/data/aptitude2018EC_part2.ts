import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const APTITUDE_2018_EC_PART2: Question[] = [
  // Coding & Deciphering (Question 19)
  {
    id: 'apt-2018-q19',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Coding & Decoding: Letter Pattern Substitution',
    questionText: '19. If the word SYNONYM is coded as TZPOPZN, what could be the code for the word ANTONYM?',
    options: [
      'BOUPOZN',
      'BPUQOZN',
      'TZPOPZN',
      'CQUOAO'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Analyze the letter shifts from SYNONYM to TZPOPZN:
• S (19) ⟹ T (20): +1
• Y (25) ⟹ Z (26): +1
• N (14) ⟹ P (16): +2
• O (15) ⟹ O (15) or P (16)
• N (14) ⟹ P (16): +2
• Y (25) ⟹ Z (26): +1
• M (13) ⟹ N (14): +1

Step 2: Apply the identical sequence of shifts to ANTONYM:
• A (1) + 1 = B (2)
• N (14) + 2 = P (16)
• T (20) + 1 = U (21)
• O (15) + 2 = Q (17)
• N (14) + 1 = O (15)
• Y (25) + 1 = Z (26)
• M (13) + 1 = N (14)

Step 3: Combine the encrypted characters:
Result: BPUQOZN.`,
    hint: 'Apply the pattern of letter shifts to each letter of ANTONYM to obtain BPUQOZN.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Cause and Effect (Question 20)
  {
    id: 'apt-2018-q20',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Logical Reasoning: Cause and Effect Relationships',
    questionText: `20. Statement I: The skin-colour variation among the people of the world is attributed to climate and hereditary traits.
Statement II: People living in the tropical zones have predominantly a darker skin.
Statement III: People living in the polar regions have predominantly a fair skin.

What is the relationship among the above statements?`,
    options: [
      'Statement II cause; statement I effect',
      'Statement I cause; statements II and III effects',
      'No relationship exists among the three statements',
      'Statement II effect; statement I cause'
    ],
    correctOptionIndex: 1,
    explanation: `• Statement I articulates the underlying biological cause: climatic exposure (solar ultraviolet radiation) and genetic hereditary adaptations determine skin melanin pigmentation.
• Statements II and III describe specific global manifestations (outcomes) of this fundamental adaptation: tropical populations develop darker protective pigmentation, whereas polar populations retain fair pigmentation to facilitate vitamin D synthesis.
• Therefore, Statement I is the cause, while Statements II and III are its direct effects.`,
    hint: 'Climatic and genetic adaptation (Statement I) is the cause that produces darker skin in tropics and lighter skin in polar regions (effects).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section 4: Analogies (Questions 21–24)
  {
    id: 'apt-2018-q21',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Verbal Aptitude: Word Analogies',
    questionText: '21. GOLD : ORNAMENT :: Deodorant : ?',
    options: [
      'Bracelet',
      'Necklace',
      'Jewellery',
      'Perfume'
    ],
    correctOptionIndex: 3,
    explanation: `• Gold is a substance utilized to produce items that adorn and enhance visual appeal (ornaments).
• Similarly, a deodorant is a personal grooming substance used to provide fragrance and olfactory enhancement, functioning in the same cosmetic category as perfume.
Therefore, the corresponding analogy pair is Deodorant : Perfume.`,
    hint: 'Gold is used for ornamentation, just as deodorant functions alongside personal fragrance and perfume.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q22',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Verbal Aptitude: Unit of Measurement Analogies',
    questionText: '22. MINUTE is to TIME as ______ is to Weight.',
    options: [
      'Light',
      'Heavy',
      'Gram',
      'Measure'
    ],
    correctOptionIndex: 2,
    explanation: `• A "Minute" is a standard unit of measurement used to quantify the physical dimension of "Time".
• In parallel, a "Gram" is a standard unit of measurement used to quantify "Weight" (mass).
Therefore, "Gram" is the correct analogous word.`,
    hint: 'A minute measures time; a gram measures weight/mass.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q23',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Verbal Aptitude: Biological Classification Analogies',
    questionText: '23. WHALE is to FISH as Crow is to:',
    options: [
      'Feather',
      'Land',
      'Bird',
      'Sky'
    ],
    correctOptionIndex: 2,
    explanation: `• Although a whale lives in the aquatic environment alongside fish (and is commonly classified with marine fauna), a crow is a member of the avian taxonomic class: "Bird".
Therefore, Crow is to Bird.`,
    hint: 'Identify the broader animal group: a crow belongs to the bird family.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q24',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Verbal Aptitude: Zoological Adjective Analogies',
    questionText: '24. BIRD is to AVIAN as DOG is to:',
    options: [
      'Canine',
      'Feline',
      'Bovine',
      'Equine'
    ],
    correctOptionIndex: 0,
    explanation: `• "Avian" is the zoological adjective relating to or characteristic of birds.
• The corresponding adjective relating to or characteristic of dogs is "Canine".
• (Feline relates to cats, Bovine to cattle, and Equine to horses).`,
    hint: 'Avian refers to birds; canine refers to dogs.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section 5: Reading Comprehension – Passages (Questions 25–31)
  {
    id: 'apt-2018-q25',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Migration Dynamics',
    questionText: `Passage I: Migration Dynamics
"Migration is a complex global phenomenon driven by various historical and modern factors. Historically, the main types of migration include invasion, conquest, colonization, and emigration/migration. Today, individuals move primarily due to the search for political stability and sense of security, rather than purely economic gain. Demographic factors also play a massive role, with an individual's age group being the variable most likely associated with the propensity to migrate. Furthermore, in international law, there is a clear distinction between voluntary migrants and forced refugees: specifically, refugees are granted a legal status that affords them certain protections and rights not automatically given to economic migrants."

25. According to the passage, what is the difference between migrants and refugees?`,
    options: [
      'Migrants are legally recognized.',
      'There is no difference whatsoever.',
      'Migrants and immigrants enjoy equal privileges.',
      'Refugees are granted a legal status.'
    ],
    correctOptionIndex: 3,
    explanation: `The final sentence of the passage states directly:
"specifically, refugees are granted a legal status that affords them certain protections and rights not automatically given to economic migrants."
Therefore, refugees are granted a distinct legal status.`,
    hint: 'Look at the last sentence: refugees are granted a legal status that affords them specific protections.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q26',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Migration Dynamics',
    questionText: '26. Based on the passage "Migration Dynamics", which one of the following variables is most likely associated with migration?',
    options: [
      'educational qualification',
      'age group',
      'social class',
      'prevalence of security'
    ],
    correctOptionIndex: 1,
    explanation: `The text states explicitly:
"Demographic factors also play a massive role, with an individual's age group being the variable most likely associated with the propensity to migrate."
Therefore, "age group" is the variable most strongly associated with the propensity to migrate.`,
    hint: 'The passage explicitly mentions "an individual\'s age group being the variable most likely associated".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q27',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Migration Dynamics',
    questionText: '27. Based on the context of the passage "Migration Dynamics", what are the primary driving forces of modern internal and external migrations?',
    options: [
      'the quest for individualism',
      'poverty reduction and religious persecution',
      'political stability and sense of security',
      'gender diversity'
    ],
    correctOptionIndex: 2,
    explanation: `The passage notes:
"Today, individuals move primarily due to the search for political stability and sense of security, rather than purely economic gain."
Therefore, political stability and a sense of security are the primary driving forces.`,
    hint: 'The passage directly points to the search for "political stability and sense of security".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q28',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Migration Dynamics',
    questionText: '28. What are the main historical types of migration according to the passage "Migration Dynamics"?',
    options: [
      'invasion, conquest, colonization and emigration/migration',
      'immigration, repatriation, asylum and refugees',
      'displacement, persecution, resettlement and evacuation',
      'exodus, immigration, conquest and dislocation'
    ],
    correctOptionIndex: 0,
    explanation: `The second sentence states:
"Historically, the main types of migration include invasion, conquest, colonization, and emigration/migration."
Option A verbatim matches this historical enumeration.`,
    hint: 'Check the second sentence: "invasion, conquest, colonization, and emigration/migration".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q29',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: The Ethiopian Intellectuals',
    questionText: `Passage II: The Ethiopian Intellectuals
"The history of Ethiopian intellectuals can be divided into distinct generations. The writer often contrasts First World and Third World intellectuals in an attempt to define their societal impacts. A key difference highlighted is that Third World intellectuals are known to have assumed political power, taking active roles in government, unlike their First World counterparts who often remain strictly in academia. The writer's reference to Third World intellectuals like Kwame Nkrumah serves as supportive evidence for this political transition. The writer seems to heavily undermine the role of the second generation of Ethiopian intellectuals, criticising them."

29. According to the passage, what is the key difference between First World and Third World intellectuals?`,
    options: [
      'There is no difference between Third World and First World intellectuals.',
      'The responsibility of Third World intellectuals is restricted to political leadership.',
      'The Third World intellectuals are known to have assumed political power.',
      'The Third World intellectuals are more educated than those of the First World intellectuals.'
    ],
    correctOptionIndex: 2,
    explanation: `The passage states:
"A key difference highlighted is that Third World intellectuals are known to have assumed political power, taking active roles in government, unlike their First World counterparts who often remain strictly in academia."
Therefore, option C is correct.`,
    hint: 'Third World intellectuals actively assumed political power in government.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q30',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: The Ethiopian Intellectuals',
    questionText: '30. What supportive evidence does the writer provide for the assertion that Third World intellectuals assumed political power?',
    options: [
      'the example of the post-war Ethiopian intellectuals',
      'the case of the pre-war Ethiopian intellectuals',
      "the writer's sole emphasis on the First World intellectuals",
      "The writer's reference to Third World intellectuals like Kwame Nkrumah"
    ],
    correctOptionIndex: 3,
    explanation: `The passage notes:
"The writer's reference to Third World intellectuals like Kwame Nkrumah serves as supportive evidence for this political transition."
Kwame Nkrumah was an intellectual who became the head of state of Ghana.`,
    hint: 'The author explicitly cites Kwame Nkrumah as supportive historical evidence.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q31',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: The Ethiopian Intellectuals',
    questionText: '31. The writer seems to undermine the role of the second generation of Ethiopian intellectuals. What is the justification for his disapproval?',
    options: [
      'the intervention of student movement that led monarchy to power',
      'the adoption of socialist ideology and the separation of Eritrea',
      'the overthrow of the oldest monarchy in Africa',
      'the Fascist liquidation of the pre-war progressive intellectuals'
    ],
    correctOptionIndex: 1,
    explanation: `In the historical critique of the 1960s/70s Ethiopian student movement (the second generation of intellectuals), scholars criticized their dogmatic adoption of Marxist-Leninist socialist ideology and the eventual secession/separation of Eritrea.
Option B accurately reflects this historical basis for disapproval.`,
    hint: 'The critique centers on the dogmatic adoption of socialist ideology and the geopolitical separation of Eritrea.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section 6: Sentence Rearrangement (Questions 32–35)
  {
    id: 'apt-2018-q32',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Verbal Aptitude: Sentence Rearrangement',
    questionText: '32. Rearrange the following jumbled parts to form a grammatically correct and meaningful sentence: / travel to / Jerusalem and Mecca / pilgrims / at least once a year /',
    options: [
      'Pilgrims travel to Jerusalem and Mecca at least once a year.',
      'At least once a year Jerusalem and Mecca travel to pilgrims.',
      'Jerusalem and Mecca travel to pilgrims at least once a year.',
      'Pilgrims to Jerusalem and Mecca travel at least once a year.'
    ],
    correctOptionIndex: 0,
    explanation: `Standard English Subject-Verb-Object-Adverbial structure:
• Subject: "Pilgrims"
• Verb: "travel to"
• Object: "Jerusalem and Mecca"
• Time adverbial: "at least once a year"
Sentence: "Pilgrims travel to Jerusalem and Mecca at least once a year."`,
    hint: 'The logical agent performing the travel is "Pilgrims".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q33',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Verbal Aptitude: Sentence Rearrangement',
    questionText: '33. Rearrange the following jumbled parts to form a grammatically correct and meaningful sentence: / was the first / black president / of the USA / Barack Obama /',
    options: [
      'Barack Obama was the first black president of the USA.',
      'The first black president of the USA was the Barack Obama.',
      'Of the USA the first black president was Barack Obama.',
      'Black president of the USA was the first Barack Obama.'
    ],
    correctOptionIndex: 0,
    explanation: `Standard English syntax:
• Subject: "Barack Obama"
• Linking verb: "was"
• Subject complement: "the first black president of the USA"
Sentence: "Barack Obama was the first black president of the USA."`,
    hint: 'The proper noun Barack Obama functions naturally as the sentence subject.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q34',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Verbal Aptitude: Sentence Rearrangement',
    questionText: '34. Rearrange the following jumbled parts to form a grammatically correct and meaningful sentence: / ancient civilization / the Nile valleys were / the cradles of /',
    options: [
      'The Nile valleys were the cradles of ancient civilization.',
      'The cradles of the Nile valleys were ancient civilization.',
      'Ancient civilization were the cradles of the Nile valleys.',
      'The Nile valleys were ancient civilization of the cradles.'
    ],
    correctOptionIndex: 0,
    explanation: `Standard grammatical syntax:
• Plural subject: "The Nile valleys"
• Plural verb: "were"
• Complement phrase: "the cradles of ancient civilization"
Sentence: "The Nile valleys were the cradles of ancient civilization."`,
    hint: 'The geographical region "The Nile valleys" is the subject that served as the cradle.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q35',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Verbal Aptitude: Sentence Rearrangement',
    questionText: '35. Rearrange the following jumbled parts to form a grammatically correct and meaningful sentence: / in 1497 / and / renamed it the New World / Columbus discovered America /',
    options: [
      'Columbus discovered America and renamed it the New World in 1497.',
      'In 1497 Columbus renamed it the New World and discovered America.',
      'Columbus discovered America in 1497 and renamed it the New World.',
      'Renamed it the New World in 1497 and Columbus discovered America.'
    ],
    correctOptionIndex: 2,
    explanation: `Chronological and narrative syntax:
• First action with time marker: "Columbus discovered America in 1497"
• Coordinated subsequent action: "and renamed it the New World"
Sentence: "Columbus discovered America in 1497 and renamed it the New World." (Option C).`,
    hint: 'Discovery occurs before renaming, placing the time adjunct in 1497 after discovered America.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
