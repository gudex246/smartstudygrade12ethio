import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const ENGLISH_2015_EC_PART1: Question[] = [
  // Section One: Paragraph Coherence (1–4)
  {
    id: 'eng-2015-q01',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Paragraph Coherence (Accommodation Options)',
    questionText: `1. When you put in the correct order, sentences a–d make up a complete paragraph. Choose the correct order:
a. However, communal living can be a choice to reduce your rent.
b. You can do that in two different ways: communally or individually.
c. If you don't have financial worries, you can opt for the individual one.
d. That enables you enjoy more freedom with what to do in your own room.`,
    options: [
      'b - c - d - a',
      'a - b - c - d',
      'c - d - a - b',
      'd - b - c - a'
    ],
    correctOptionIndex: 0,
    explanation: `• Sentence (b) introduces the two living options ("communally or individually").
• Sentence (c) elaborates on the individual choice ("If you don't have financial worries, you can opt for the individual one").
• Sentence (d) explains the advantage of the individual option ("That enables you enjoy more freedom...").
• Sentence (a) introduces the contrasting communal alternative with "However" ("However, communal living can be a choice to reduce your rent").
• Therefore, the correct logical coherence is: b -> c -> d -> a.`,
    hint: 'Start with the general sentence presenting the two options (b), discuss the individual option and its perk (c, d), and contrast with communal living (a).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q02',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Paragraph Coherence (Computer Spell Checkers)',
    questionText: `2. When you put in the correct order, sentences a–d make up a complete paragraph. Choose the correct order:
a. However, they may not detect incorrect or misused words.
b. They may not also catch other language errors in our writing.
c. Our computers are made to alert us when we make spelling mistakes.
d. So, we don't have to hesitate to look up anything that we suspect is wrong.`,
    options: [
      'b - c - d - a',
      'a - b - c - d',
      'c - a - b - d',
      'd - c - a - b'
    ],
    correctOptionIndex: 2,
    explanation: `• Sentence (c) introduces the primary capability of computers ("alert us when we make spelling mistakes").
• Sentence (a) transitions with "However" to present their limitations regarding misused words.
• Sentence (b) adds another limitation ("They may not also catch other language errors...").
• Sentence (d) draws the conclusion ("So, we don't have to hesitate to look up anything...").
• Thus, the logical order is: c -> a -> b -> d.`,
    hint: 'Look for the topic sentence stating what computers do (c), followed by limitations introduced by "However" (a) and "also" (b), concluding with "So" (d).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q03',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Paragraph Coherence (Coffee Dependency and Commodity Shocks)',
    questionText: `3. When you put in the correct order, sentences a–d make up a complete paragraph. Choose the correct order:
a. A typical example is what happened in the late 1990s.
b. Dependence on coffee has thrown a lot of nations into crisis.
c. This usually happens when the world commodity price falls.
d. Coffee farmers' unions should be set up to resist the problem.`,
    options: [
      'd - b - c - a',
      'b - c - a - d',
      'c - d - a - b',
      'a - b - d - c'
    ],
    correctOptionIndex: 1,
    explanation: `• Sentence (b) states the general thesis: "Dependence on coffee has thrown a lot of nations into crisis."
• Sentence (c) explains when this occurs: "This usually happens when the world commodity price falls."
• Sentence (a) provides a concrete historical example: "A typical example is what happened in the late 1990s."
• Sentence (d) offers the solution/recommendation: "Coffee farmers' unions should be set up to resist the problem."
• Therefore, the sequence is: b -> c -> a -> d.`,
    hint: 'Begin with the main problem (b), explain when it happens (c), give the 1990s example (a), and conclude with the policy solution (d).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q04',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Paragraph Coherence (Global Climate Change)',
    questionText: `4. When you put in the correct order, sentences a–d make up a complete paragraph. Choose the correct order:
a. Most of the rise occurred in the 1990s.
b. There is a lot of evidence that the climate is changing.
c. In many parts of the world temperatures have risen by 0.7°C.
d. However, it is happening faster in some countries than in others.`,
    options: [
      'c - b - d - a',
      'c - d - b - a',
      'a - c - b - d',
      'b - d - c - a'
    ],
    correctOptionIndex: 3,
    explanation: `• Sentence (b) opens with the broad assertion: "There is a lot of evidence that the climate is changing."
• Sentence (d) qualifies the rate of change: "However, it is happening faster in some countries than in others."
• Sentence (c) supplies specific statistical evidence: "In many parts of the world temperatures have risen by 0.7°C."
• Sentence (a) references "the rise" directly from (c): "Most of the rise occurred in the 1990s."
• Hence, the coherent sequence is: b -> d -> c -> a.`,
    hint: 'Sentence (b) states the premise, (d) introduces geographic disparity, (c) gives temperature rise figures, and (a) dates "the rise".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Two: Jumbled Words (5–7)
  {
    id: 'eng-2015-q05',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Sentence Structure (Jumbled Words - Academic Integrity)',
    questionText: `5. Rearrange the following jumbled words into a correct English sentence:
"is their students like passing who actually failed in killing have a generation exams."`,
    options: [
      'Passing a generation is like killing students who have actually failed in their exams.',
      'Passing students who have actually failed in their exams is like killing a generation.',
      'Killing a generation is like passing students in their exams who have actually failed.',
      'Passing students in their exams is like a generation who have actually failed killing.'
    ],
    correctOptionIndex: 1,
    explanation: `• The subject is the gerund phrase "Passing students who have actually failed in their exams".
• The verb is "is", followed by the comparative phrase "like killing a generation".
• This makes meaningful grammatical sense: "Passing students who have actually failed in their exams is like killing a generation."`,
    hint: 'The sentence highlights the grave societal danger of passing unmerited, failing students.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q06',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Sentence Structure (Jumbled Words - Stories of Wealth)',
    questionText: `6. Rearrange the following jumbled words into a correct English sentence:
"be who stories learn there about are to many couldn't how rich people."`,
    options: [
      'There are many stories about people who couldn\'t learn how to be rich.',
      'Many rich people are there who couldn\'t learn about how to be stories.',
      'Stories are there about many rich people who couldn\'t learn how to be.',
      'Stories about how many people are there who couldn\'t learn to be rich.'
    ],
    correctOptionIndex: 0,
    explanation: `• The standard existential construction is: "There are many stories about people who couldn't learn how to be rich."
• All other arrangements violate standard English syntax and meaning.`,
    hint: 'Start with the existential subject "There are many stories about...".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q07',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Sentence Structure (Jumbled Words - Abebe Bikila Olympic Feat)',
    questionText: `7. Rearrange the following jumbled words into a correct English sentence:
"the take Bikila first to Abebe gold ever an was Olympic home African medal."`,
    options: [
      'The first African Abebe Bikila was ever to take home an Olympic gold medal.',
      'Abebe Bikila ever take an Olympic gold medal to home was the first African.',
      'Abebe Bikila was ever the first African gold to take home an Olympic medal.',
      'Abebe Bikila was the first African to ever take home an Olympic gold medal.'
    ],
    correctOptionIndex: 3,
    explanation: `• The subject is "Abebe Bikila", followed by the verb "was", the predicate noun phrase "the first African", and the infinitive modifier "to ever take home an Olympic gold medal."
• "Abebe Bikila was the first African to ever take home an Olympic gold medal." is grammatically sound.`,
    hint: 'Subject (Abebe Bikila) + was the first African + to ever take home an Olympic gold medal.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Three: Letter Writing (8–10)
  {
    id: 'eng-2015-q08',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Letter Writing: Opening Sentence Function',
    questionText: '8. What is your opening sentence in a formal letter supposed to do?',
    options: [
      'Greet the person you are writing the letter to.',
      'State clearly why you are writing the letter.',
      'Make your address known to the person you are writing to.',
      'Introduce yourself to the person you are writing to.'
    ],
    correctOptionIndex: 1,
    explanation: `• In professional formal correspondence, after the salutation, the very first sentence must clearly and directly state the purpose of the letter (e.g., "I am writing to apply for...", "I am writing to express my concern regarding...").`,
    hint: 'The first sentence of a formal letter must immediately state the purpose of the letter.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q09',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Letter Writing: Formal Salutation (Dear Sir/Madam)',
    questionText: '9. When do we use "Dear Sir/Madam" in a formal letter?',
    options: [
      'When we want to show respect to the person we are writing to.',
      'When we want to write about something that is very serious.',
      'When the person we are writing to is the head of an organization.',
      'When we do not know the name of the person to whom we write.'
    ],
    correctOptionIndex: 3,
    explanation: `• The generic formal salutation "Dear Sir/Madam" is used when the sender does not know the specific name or gender of the recipient.`,
    hint: 'Use "Dear Sir/Madam" when the recipient\'s name is unknown.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q10',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Letter Writing: Complimentary Close for Letters of Complaint',
    questionText: '10. Which of the following could be a typical ending to your letter of complaint to a company?',
    options: [
      'Many thanks,',
      'Yours truly,',
      'Yours faithfully,',
      'Kind regards,'
    ],
    correctOptionIndex: 2,
    explanation: `• A formal letter addressed to a company without a personal name (opened with "Dear Sir/Madam") conventionally concludes with the formal complimentary close "Yours faithfully,".`,
    hint: 'Formal letters addressed to an organization/Dear Sir or Madam end with "Yours faithfully,".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Four: Punctuation and Capitalization (11–14)
  {
    id: 'eng-2015-q11',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Capitalization of Commercial Names and Places',
    questionText: '11. Which of the following sentences is correctly capitalized and punctuated?',
    options: [
      'We used to stay at the Hilton Hotel and dine at Kokeb restaurant.',
      'We used to stay at the Hilton hotel and dine at Kokeb Restaurant.',
      'We used to stay at the Hilton Hotel and dine at Kokeb Restaurant.',
      'We used to stay at the Hilton hotel and dine at Kokeb restaurant.'
    ],
    correctOptionIndex: 2,
    explanation: `• Both "Hilton Hotel" and "Kokeb Restaurant" are specific proper names of commercial establishments, so both parts of each proper noun must be capitalized.`,
    hint: 'Both words in proper business names like "Hilton Hotel" and "Kokeb Restaurant" are capitalized.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q12',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Punctuation of Items in a Series',
    questionText: '12. Which of the following sentences is correctly punctuated?',
    options: [
      'We bought them blankets, bed sheets, cloths and some rice.',
      'We bought them blankets, bed sheets, cloths and, some rice.',
      'We bought them, blankets, bed sheets, cloths and some rice.',
      'We bought them blankets, bed sheets, cloths, and some rice.'
    ],
    correctOptionIndex: 0,
    explanation: `• In standard English punctuation, items in a list are separated by commas, with no comma before the conjunction in standard open punctuation: "blankets, bed sheets, cloths and some rice."
• Option B places an erroneous comma after "and", Option C incorrectly places a comma between the indirect object "them" and the direct objects, and Option A correctly presents the series.`,
    hint: 'Avoid inserting unnecessary commas after conjunctions or directly after indirect objects.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q13',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Punctuation of Latin Abbreviations (e.g. and etc.)',
    questionText: '13. Which of the following sentences is correctly punctuated?',
    options: [
      'At St. Paul Hospital, they train doctors in a variety of fields, eg., cardiology, neurology, etc.',
      'At St Paul Hospital, they train doctors in a variety of fields, e.g., cardiology, neurology, etc.',
      'At St. Paul Hospital, they train doctors in a variety of fields, e.g., cardiology, neurology, etc.',
      'At St. Paul Hospital, they train doctors in a variety of fields, e.g, cardiology, neurology, etc.'
    ],
    correctOptionIndex: 2,
    explanation: `• The abbreviation for "Saint" in American/standard formal style is "St." (with a period).
• The Latin abbreviation for "exempli gratia" (for example) is punctuated with periods after both letters and followed by a comma: "e.g.,".
• "etc." is followed by a period.
• Therefore, sentence C is fully and correctly punctuated.`,
    hint: '"e.g." requires a period after each letter and is followed by a comma: e.g.,',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q14',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Semicolon Usage in Complex Lists',
    questionText: '14. Which of the following sentences is correctly punctuated?',
    options: [
      'They donated money; gave out food; clothing and medication, and pledged a lot more.',
      'They donated money; gave out food, clothing and medication; and pledged a lot more.',
      'They donated money; gave out food, clothing; and medication; and pledged a lot more.',
      'They donated money, gave out food; clothing and medication; and pledged a lot more.'
    ],
    correctOptionIndex: 1,
    explanation: `• When items in a major series contain internal commas ("food, clothing and medication"), semicolons are used to separate the main items in the series:
  [Item 1: donated money] ; [Item 2: gave out food, clothing and medication] ; and [Item 3: pledged a lot more].
• Option B cleanly applies this rule.`,
    hint: 'Use semicolons to separate main items when an internal item contains commas of its own.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Five: Word Spelling (15–16)
  {
    id: 'eng-2015-q15',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Spelling: Correctly Spelled English Word',
    questionText: '15. Choose the one word which is correctly spelt:',
    options: [
      'consession',
      'recession',
      'compasion',
      'divission'
    ],
    correctOptionIndex: 1,
    explanation: `• "recession" is correctly spelled with one 'c' and double 's'.
• The others are misspelled: concession (not consession), compassion (not compasion), division (not divission).`,
    hint: 'Notice double "s" in recession: r-e-c-e-s-s-i-o-n.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q16',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Spelling: Irregular Past Tense Verbs',
    questionText: '16. Choose the one word which is correctly spelt:',
    options: [
      'thaught',
      'tought',
      'wraught',
      'sought'
    ],
    correctOptionIndex: 3,
    explanation: `• "sought" (past tense and past participle of seek) is correctly spelled.
• The others are erroneous: "thought" (misspelled as thaught), "taught" / "tough" (misspelled as tought), "wrought" (misspelled as wraught).`,
    hint: '"sought" is the correct past form of seek.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Six: Paragraph Development Techniques (17–18)
  {
    id: 'eng-2015-q17',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Descriptive Paragraph Characteristics',
    questionText: '17. Which one of the following sentences is most likely taken from a descriptive paragraph?',
    options: [
      'Paul was such a quiet chap who was always silent regardless of the bitter injustice.',
      'Paul says injustice kills your work spirit and demoralizes those who work hard.',
      'Paul understands that injustice is a practice that everybody should fight and eliminate.',
      'Paul finally convinced himself that he should rebel and then went straight to his boss.'
    ],
    correctOptionIndex: 0,
    explanation: `• Descriptive paragraphs paint a vivid sensory picture of a person, place, or object using sensory adjectives and characterizing attributes.
• Sentence A vividly describes Paul's demeanor and disposition ("such a quiet chap who was always silent...").`,
    hint: 'Look for the sentence that portrays personal demeanor and behavioral characteristics.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q18',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Writing Skills: Cause-Effect Paragraph Development',
    questionText: '18. Which one of the following sentences is most likely taken from a paragraph developed using cause-effect method?',
    options: [
      'Whenever she gets nervous and depressed, I try to calm her down.',
      'There are lots of things that make life in the area very difficult.',
      'Every morning, we clean the compound and make everything very neat.',
      'Robots are one of the most amazing inventions of the human mind.'
    ],
    correctOptionIndex: 1,
    explanation: `• Cause-effect writing examines the causal factors producing a particular state or consequence.
• Sentence B points to the factors/causes ("lots of things") that produce an adverse effect ("make life in the area very difficult").`,
    hint: 'Identify the sentence pointing to underlying reasons producing a specific negative outcome.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Two: Language Focus (19–30)
  {
    id: 'eng-2015-q19',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Double Comparative Correlative (The more... the more...)',
    questionText: '19. The more we help him, _______ sense of dependency he would develop. So, handle things cautiously.',
    options: [
      'more',
      'less',
      'the most',
      'the more'
    ],
    correctOptionIndex: 3,
    explanation: `• The parallel correlative comparative structure uses:
  "The + comparative ..., the + comparative ...".
• "The more we help him, the more sense of dependency he would develop."`,
    hint: 'Correlative comparatives follow the formula: The [comparative]..., the [comparative]...',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q20',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Relative Pronouns (Which for non-human antecedents)',
    questionText: '20. You don\'t seem to have ever seen the creature _______ I told you about. It looked nothing like a kangaroo except in the way it walked.',
    options: [
      'one',
      'who',
      'whom',
      'which'
    ],
    correctOptionIndex: 3,
    explanation: `• "Creature" is an animal/non-human entity, requiring the relative pronoun "which" (or "that").
• "Who" and "whom" are strictly reserved for human beings.`,
    hint: 'Non-human entities and animals take "which" as their relative pronoun.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q21',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Zero Conditional (General Biological Truth)',
    questionText: '21. If one doesn\'t sleep for days in a row, one _______ getting disturbed psychologically and may even die. Sleep is very important for normal functions of life.',
    options: [
      'will start',
      'starts',
      'is going to start',
      'may start'
    ],
    correctOptionIndex: 1,
    explanation: `• When expressing universal physiological facts or general scientific truths, the Zero Conditional is used:
  If + present simple, ... present simple.
• "If one doesn't sleep... one starts getting disturbed..." expresses an inevitable biological consequence.`,
    hint: 'Scientific and universal physiological truths use the zero conditional (simple present in both clauses).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q22',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Order of Adjectives (OSASCOMP)',
    questionText: '22. Mulugeta always adored the _______ Toyota car that his father drove at the beginning of the 80\'s.',
    options: [
      'red ugly old small',
      'old small red ugly',
      'ugly old small red',
      'small red ugly old'
    ],
    correctOptionIndex: 2,
    explanation: `• Standard English cumulative adjective ordering:
  Opinion -> Size/Age -> Color -> Origin -> Material.
• "ugly" is an opinion adjective and must precede factual descriptors like age ("old"), size ("small"), and color ("red").
• Option C ("ugly old small red") is the only choice correctly fronting the opinion adjective "ugly".`,
    hint: 'Opinion adjectives (ugly) always come before physical factual adjectives (color, age, size).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q23',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Vocabulary: Verb Collocations (Do a favour)',
    questionText: '23. They asked us to _______ them a favour of disclosing the company\'s secret but that was unacceptable to us. We cannot compromise our integrity.',
    options: [
      'bestow',
      'give',
      'make',
      'do'
    ],
    correctOptionIndex: 3,
    explanation: `• In standard English collocation, the correct verb to pair with "favour" is "do": "do someone a favour".
• Expressions like "make a favour" or "give a favour" are non-standard.`,
    hint: 'The fixed verb collocation in English is to "do" a favour.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q24',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Correlative Conjunctions and Determiners (Both... and...)',
    questionText: '24. _______ the pilot and his crew recognized the plane had a problem. However, they didn\'t say anything lest disturbing the passengers.',
    options: [
      'Together',
      'Either',
      'All',
      'Both'
    ],
    correctOptionIndex: 3,
    explanation: `• "Both" is used when referring to two coordinated parties connected by "and": "Both the pilot and his crew...".`,
    hint: 'Use "Both" when referring to two coordinated subjects linked by "and".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q25',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Communication: Expressing Concern and Offering Advice',
    questionText: '25. You\'ve been coughing the whole afternoon. _______?',
    options: [
      'Is syrup good for that',
      'Why do you do that',
      'Is that problem very common',
      'Why don\'t you see your doctor'
    ],
    correctOptionIndex: 3,
    explanation: `• When observing a friend suffering from persistent coughing, the most appropriate and supportive reaction is offering practical advice: "Why don't you see your doctor?".`,
    hint: '"Why don\'t you..." is a standard conversational formula for giving sensible advice.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q26',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Verb Patterns (Enjoy + Gerund)',
    questionText: '26. If you enjoy _______, you can register with us and trek around the city every Sunday in the afternoon.',
    options: [
      'walking',
      'to walk',
      'to have a walk',
      'to be walking'
    ],
    correctOptionIndex: 0,
    explanation: `• The verb "enjoy" is strictly complemented by a gerund (-ing form): "enjoy walking".
• Following "enjoy" with an infinitive ("to walk") is ungrammatical.`,
    hint: '"Enjoy" must always be followed by a gerund (-ing).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q27',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Causative / Permissive Verbs (Let vs Allow)',
    questionText: '27. We don\'t have to _______ them make off with such an irreplaceable heritage of the nation. They should be accountable for what they did.',
    options: [
      'allow',
      'let',
      'concede',
      'permit'
    ],
    correctOptionIndex: 1,
    explanation: `• The verb "let" takes a bare infinitive (base form of the verb without "to"): "let them make off".
• In contrast, "allow" and "permit" require a to-infinitive ("allow them to make off").`,
    hint: 'Look at the bare verb "make off" without "to". Only "let" takes a bare infinitive.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q28',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Subjunctive Wishes (Wish + Past Subjunctive)',
    questionText: '28. They have been clearing the forest for three days. _______ intervened to stop them.',
    options: [
      'Someone need',
      'I want someone',
      'How about you',
      'I wish someone'
    ],
    correctOptionIndex: 3,
    explanation: `• The structure "I wish someone intervened to stop them" expresses an unrealized desire/wish regarding an ongoing crisis.
• "Someone need" is ungrammatical (lacks third-person -s or to-infinitive), and "I want someone" requires a to-infinitive ("to intervene").`,
    hint: 'Use "I wish someone" followed by a past form to express a wish about an intervention.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q29',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Modals of Ability (Able to)',
    questionText: '29. He has been paralyzed for months and was literally bed-ridden. Thanks God, he now is _______ walk around in the house.',
    options: [
      'interested to',
      'able to',
      'turning able to',
      'feeling able to'
    ],
    correctOptionIndex: 1,
    explanation: `• "Able to" expresses restored physical capability after a period of illness: "he now is able to walk around in the house."`,
    hint: '"is able to" expresses physical ability.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q30',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Modal of Moral Obligation (Ought to)',
    questionText: '30. There are thousands of displaced people in different parts of the country who have no proper shelter, food or cloth. Don\'t you think we _______ help them?',
    options: [
      'ought to',
      'shall',
      'could',
      'might'
    ],
    correctOptionIndex: 0,
    explanation: `• "Ought to" expresses moral obligation and ethical duty towards vulnerable populations facing hardship.`,
    hint: '"Ought to" expresses moral obligation and civic duty.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
