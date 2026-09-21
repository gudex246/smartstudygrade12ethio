import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const ENGLISH_2018_EC_PART2: Question[] = [
  // Section Four Continued: Capitalization & Punctuation (26–28)
  {
    id: 'eng-2018-q26',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Capitalization Rules for Proper Nouns',
    questionText: '26. Which one of the following sentences has correct capitalization?',
    options: [
      'My uncle speaks English, french, and Amharic.',
      'My uncle speaks english, French, and Amharic.',
      'My uncle speaks English, French, and Amharic.',
      'my uncle speaks English, French, and amharic.'
    ],
    correctOptionIndex: 2,
    explanation: `Grammatical capitalization rules:
1. The first word of a sentence must always begin with a capital letter ("My").
2. Names of specific languages and nationalities are proper nouns and must always be capitalized ("English", "French", "Amharic").
Therefore, Option C is the only option with all four words capitalized properly.`,
    hint: 'All language names (English, French, Amharic) are proper nouns and must begin with a capital letter.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q27',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Punctuation of Non-Restrictive Appositives',
    questionText: '27. Which sentence is correctly punctuated?',
    options: [
      'Addis Ababa the capital of Ethiopia is growing fast.',
      'Addis Ababa, the capital of Ethiopia, is growing fast.',
      'Addis Ababa the capital of Ethiopia, is growing fast.',
      'Addis Ababa, the capital of Ethiopia is growing fast.'
    ],
    correctOptionIndex: 1,
    explanation: `In grammar, an appositive phrase that provides extra, non-essential information about a proper noun must be enclosed by a pair of commas:
• "the capital of Ethiopia" describes "Addis Ababa".
• Because it is non-restrictive, a comma must precede it and another comma must follow it:
"Addis Ababa, the capital of Ethiopia, is growing fast."`,
    hint: 'Set off the non-essential appositive phrase with commas on both sides.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q28',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Punctuation of Items in a Series',
    questionText: '28. Choose the correctly punctuated sentence.',
    options: [
      'We need to buy: milk, bread and sugar.',
      'We need to buy milk, bread, and sugar.',
      'We need to buy; milk, bread and sugar.',
      'We need to buy milk bread and, sugar.'
    ],
    correctOptionIndex: 1,
    explanation: `Rules for punctuating lists:
• In a series of three or more coordinate items, separate items with commas: "milk, bread, and sugar."
• Never separate a transitive verb ("buy") from its direct object list with a colon or semicolon.
Therefore, option B is correctly punctuated.`,
    hint: 'Use commas to separate items in a list without an unnecessary colon after the verb.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Five: Spelling & Paragraph Type (29–32)
  {
    id: 'eng-2018-q29',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: English Orthography & Spelling',
    questionText: '29. Choose the word which is written in correct spelling.',
    options: [
      'spectacular',
      'spectaculer',
      'procrastinate',
      'procrastinite'
    ],
    correctOptionIndex: 2,
    explanation: `The word "procrastinate" (meaning to delay or postpone action habitually) is spelled p-r-o-c-r-a-s-t-i-n-a-t-e.
In the official examination key, "procrastinate" (option C) was designated as the target correctly spelled term.`,
    hint: 'The word meaning to postpone action is spelled "procrastinate".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q30',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: English Orthography & Vocabulary Spelling',
    questionText: '30. Which of the following groups of words is spelled entirely correctly?',
    options: [
      'economy, nominet, substantive',
      'economy, nominate, substantiv',
      'economy, nominate, substantive (Option C)',
      'economy, nominate, substantive'
    ],
    correctOptionIndex: 3,
    explanation: `Evaluating the spellings:
• "economy" is spelled correctly.
• "nominate" (to propose for an office or award) is spelled correctly (unlike "nominet").
• "substantive" (having a firm basis in reality and real importance) is spelled correctly (unlike "substantiv").
All three words in option D are spelled accurately.`,
    hint: 'Check that nominate ends in -ate and substantive ends in -ive.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q31',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Paragraph Types (Descriptive Writing)',
    questionText: '31. "She was a tall, blonde girl with careless hair that blew wildly in the wind, and her bright blue eyes sparkled under the afternoon sun." What kind of paragraph is this?',
    options: [
      'Narrative',
      'Descriptive',
      'Argumentative',
      'Expository'
    ],
    correctOptionIndex: 1,
    explanation: `• Descriptive writing aims to paint a vivid mental picture of a person, place, or object using rich sensory details (e.g., "tall, blonde girl", "hair that blew wildly", "bright blue eyes sparkled").
• It focuses on appearances and sensory imagery rather than advancing a plot (narrative) or arguing a thesis (argumentative).`,
    hint: 'The text uses sensory details and visual imagery to depict a person\'s physical appearance.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q32',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Essay Types (Argumentative Writing)',
    questionText: '32. "Teachers should take more responsibility for shaping the moral character of their students, as they spend a majority of their waking hours in the classroom." This sentence is most likely taken from an ______ essay.',
    options: [
      'Argumentative',
      'Descriptive',
      'Narrative',
      'Instructional'
    ],
    correctOptionIndex: 0,
    explanation: `• The sentence states a debatable claim ("Teachers should take more responsibility...") supported by a justification ("as they spend a majority of their waking hours...").
• Stating a persuasive thesis statement and defending it with reasons is the defining feature of argumentative (persuasive) essay writing.`,
    hint: 'Making a claim using "should" backed by a reason is typical of an argumentative essay.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // II. Language Focus (Questions 33–65)
  {
    id: 'eng-2018-q33',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Prepositions with Verbs (suffer from)',
    questionText: '33. After the accident, he suffered severe back pain ______ months. (Preposition collocation for suffering)',
    options: [
      'with',
      'from',
      'of',
      'by'
    ],
    correctOptionIndex: 1,
    explanation: `In standard English grammar, the verb "suffer" takes the dependent preposition "from" when indicating the illness, condition, or source of pain:
"suffer from an illness / condition / back pain."
Therefore, Option B ("from") is the correct preposition.`,
    hint: 'The standard dependent preposition with the verb "suffer" is "from".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q34',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Phrasal Verbs (move away from)',
    questionText: '34. In summer, she usually moves away ______ her family to attend a special camp.',
    options: [
      'from',
      'of',
      'in',
      'at'
    ],
    correctOptionIndex: 0,
    explanation: `The phrasal verb "move away from" means to leave a home, origin, or person to live or travel elsewhere:
"moves away from her family."
Therefore, Option A ("from") is correct.`,
    hint: 'The preposition that pairs with "move away" to indicate point of origin is "from".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q35',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Passive Voice Agent Preposition (surrounded by)',
    questionText: '35. Extroverts typically prefer being surrounded ______ their friends.',
    options: [
      'with',
      'by',
      'around',
      'among'
    ],
    correctOptionIndex: 1,
    explanation: `In the passive construction "being surrounded by [agent]", the preposition "by" is required to denote the agents who surround the subject:
"being surrounded by their friends."`,
    hint: 'In passive voice constructions, the agent is introduced by the preposition "by".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q36',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Dependent Prepositions (consist of)',
    questionText: '36. The committee ______ seven experienced members.',
    options: [
      'consists in',
      'consists of',
      'consists with',
      'consists from'
    ],
    correctOptionIndex: 1,
    explanation: `• "Consists of" means is composed of, made up of, or formed from specific constituents or members.
• "The committee consists of seven experienced members."
("Consist in" means to have something as its essential feature, which does not fit here).`,
    hint: 'Use "consists of" to mean "is composed of".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q37',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Third Conditional (Past Unreal Condition)',
    questionText: '37. If she had studied harder, she ______ the exam.',
    options: [
      'would pass',
      'will pass',
      'would have passed',
      'passed'
    ],
    correctOptionIndex: 2,
    explanation: `The third conditional expresses an unreal past condition and its hypothetical past outcome:
Structure: If + past perfect (had studied), would have + past participle (would have passed).
Therefore, Option C ("would have passed") is grammatically correct.`,
    hint: 'Third conditional pattern: If + had + V3, would have + V3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q38',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Zero Conditional (Scientific & General Truths)',
    questionText: '38. If you mix red and yellow, you ______ orange. (Zero Conditional)',
    options: [
      'will get',
      'would get',
      'get',
      'got'
    ],
    correctOptionIndex: 2,
    explanation: `Zero conditional sentences express universal scientific truths, physical facts, or general certainties:
Structure: If + simple present, simple present.
"If you mix (present simple) red and yellow, you get (present simple) orange."`,
    hint: 'Zero conditional uses present simple in both the condition and result clauses.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q39',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: First Conditional (Real Future Possibility)',
    questionText: '39. If it rains tomorrow, we ______ the picnic.',
    options: [
      'would cancel',
      'will cancel',
      'canceled',
      'cancel'
    ],
    correctOptionIndex: 1,
    explanation: `The first conditional expresses a real, possible future event dependent on a condition:
Structure: If + simple present (rains), will + base verb (will cancel).
Therefore, Option B ("will cancel") is correct.`,
    hint: 'First conditional pattern: If + present simple, will + base form.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q40',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Reported Speech (Backshifting of Tenses in Questions)',
    questionText: '40. "Do you clean your room?" my mother asked. In reported speech: My mother asked me if I ______ my room.',
    options: [
      'clean',
      'cleaned',
      'was cleaning',
      'had cleaned'
    ],
    correctOptionIndex: 1,
    explanation: `When converting direct speech into reported speech with a past-tense reporting verb ("asked"):
• Present simple ("clean") backshifts to past simple ("cleaned").
• The auxiliary "do" is dropped in the affirmative reported clause:
"My mother asked me if I cleaned my room."`,
    hint: 'Backshift the present simple verb "clean" to past simple "cleaned".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q41',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Reported Speech (Modal Transformation)',
    questionText: '41. "I will call you later," he said. In reported speech: He said that he ______ call me later.',
    options: [
      'will',
      'would',
      'can',
      'shall'
    ],
    correctOptionIndex: 1,
    explanation: `In reported speech governed by a past-tense reporting verb ("said"):
• The modal "will" backshifts to "would".
Sentence: "He said that he would call me later."`,
    hint: 'In reported speech with past reporting verbs, "will" shifts to "would".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q42',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Unreal Wishes (Past Subjunctive "were")',
    questionText: '42. I am so short. I wish I ______ taller.',
    options: [
      'am',
      'was',
      'were',
      'had been'
    ],
    correctOptionIndex: 2,
    explanation: `To express an unreal or hypothetical wish about a present situation contrary to fact:
We use the past subjunctive form "were" for all grammatical persons (including "I" and "he/she/it"):
"I wish I were taller."`,
    hint: 'Use the subjunctive "were" after "wish" to describe a present contrary-to-fact condition.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q43',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Verb Patterns (Verbs Followed by Gerunds)',
    questionText: '43. The manager decided to delay ______ the new software until next month.',
    options: [
      'launch',
      'launching',
      'to launch',
      'launched'
    ],
    correctOptionIndex: 1,
    explanation: `The verb "delay" is always followed by a gerund (-ing form), never by a to-infinitive:
delay + doing something ⟹ "delay launching the new software."`,
    hint: 'The verb "delay" takes a gerund (-ing form) as its direct object.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q44',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Verb Patterns (Verbs Followed by Infinitives)',
    questionText: '44. Despite the challenges, she really wants ______ her degree this year.',
    options: [
      'finish',
      'finishing',
      'to finish',
      'finished'
    ],
    correctOptionIndex: 2,
    explanation: `The verb "want" is followed by a to-infinitive (want + to + base verb):
"wants to finish her degree."`,
    hint: 'The verb "want" is followed by the to-infinitive: want to do something.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q45',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Subject-Verb Agreement with Parenthetical Phrases',
    questionText: '45. The manager, along with his assistants, ______ attending the conference right now.',
    options: [
      'is',
      'are',
      'were',
      'have been'
    ],
    correctOptionIndex: 0,
    explanation: `When a singular subject ("The manager") is accompanied by parenthetical prepositional phrases such as "along with", "as well as", or "together with":
• The parenthetical phrase does not alter the grammatical number of the true subject.
• Since "The manager" is singular, the verb must be singular: "is".
Furthermore, the present time marker "right now" confirms present tense.`,
    hint: 'The subject is singular ("The manager"). Phrases like "along with" do not make the subject plural.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q46',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Connectors & Coordinating Additions (as well as)',
    questionText: '46. We need to buy more fruits, ______ some vegetables for the salad.',
    options: [
      'as well as',
      'also',
      'in addition',
      'beside'
    ],
    correctOptionIndex: 0,
    explanation: `"As well as" functions as a coordinating connective meaning "in addition to":
"We need to buy more fruits, as well as some vegetables..."
• "Also" is an adverb that cannot directly link noun phrases this way.
• "In addition" requires "to" when taking a direct object noun phrase.
• "Beside" means next to (physical location).`,
    hint: 'Use "as well as" to add items to a list in this sentence structure.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q47',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Phrasal Verbs in Employment (lay off)',
    questionText: '47. Due to the economic crisis, the company had to lay ______ fifty workers.',
    options: [
      'out',
      'down',
      'off',
      'over'
    ],
    correctOptionIndex: 2,
    explanation: `The phrasal verb "lay off" means to terminate or dismiss workers from employment, especially due to economic downturns or lack of work:
"lay off fifty workers."`,
    hint: 'To dismiss workers due to economic difficulties is to "lay off".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q48',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Subject-Verb Agreement with "Neither... nor"',
    questionText: '48. Neither the students nor the teacher ______ aware of the sudden schedule change.',
    options: [
      'was',
      'were',
      'are',
      'have been'
    ],
    correctOptionIndex: 0,
    explanation: `With the correlative conjunction "neither... nor":
The verb agrees in person and number with the subject closest (proximate) to it:
• Subjects: "the students" (plural) and "the teacher" (singular).
• The closest subject to the verb is "the teacher" (singular).
Therefore, the singular past verb "was" is required.`,
    hint: 'In "neither... nor" constructions, the verb agrees with the subject closest to it ("the teacher" ⟹ was).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q49',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Past Perfect Tense with Time Clauses (By the time...)',
    questionText: '49. By the time the police arrived, the thief ______ away.',
    options: [
      'ran',
      'runs',
      'has run',
      'had run'
    ],
    correctOptionIndex: 3,
    explanation: `When two actions occurred in the past:
• The earlier completed past action takes the past perfect tense (had + past participle: "had run").
• The later past action takes the simple past ("arrived").
"By the time the police arrived, the thief had run away."`,
    hint: 'Use the past perfect (had run) for the earlier past event that occurred before another past event.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q50',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Relative Pronouns for Inanimate Objects',
    questionText: '50. The book ______ I borrowed from the library is very interesting.',
    options: [
      'who',
      'whom',
      'whose',
      'which'
    ],
    correctOptionIndex: 3,
    explanation: `Relative pronoun selection:
• "Who" and "whom" refer to human beings.
• "Whose" indicates possession.
• "Which" (or "that") refers to inanimate things, objects, and concepts.
Since "The book" is an inanimate object, "which" is the correct relative pronoun.`,
    hint: 'Use "which" to refer to non-human objects and things like a book.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
