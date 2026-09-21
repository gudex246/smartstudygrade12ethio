import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const ENGLISH_2017_EC_PART2: Question[] = [
  // II. LANGUAGE FOCUS (35–62)
  {
    id: 'eng-2017-q35',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Degrees of Comparison (Modifying Comparatives)',
    questionText: '35. Lidya is far ______ beautiful than her classmate, Hanna.',
    options: [
      'much',
      'little',
      'most',
      'more'
    ],
    correctOptionIndex: 3,
    explanation: `• "Beautiful" is a multi-syllable adjective requiring "more" to form the comparative degree: "more beautiful than".
• "Far" is an adverb of degree modifying the comparative adjective (meaning "much more"): "far more beautiful than".`,
    hint: 'Comparative degree for "beautiful" takes "more beautiful than", intensified by "far".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q36',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Passive Voice & Historical Past',
    questionText: '36. Modern education ______ in Ethiopia early in the twenty-first century.',
    options: [
      'is being introduced',
      'was introduced',
      'were introduced',
      'is introduced'
    ],
    correctOptionIndex: 1,
    explanation: `• "Modern education" is an uncountable singular noun phrase functioning as the subject.
• The event took place at a completed time in the past, requiring the simple past passive: "was + past participle" -> "was introduced".`,
    hint: 'A completed past historical event in the passive voice requires "was + past participle".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q37',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Reported Speech (Yes/No Questions)',
    questionText: '37. My friend asked me, "Do you like my shoes?" Later that day, I told my sister what he said:\nMy friend asked me ______',
    options: [
      'if I like your shoes',
      'whether I liked his shoes',
      'that he liked my shoes',
      'if I like my shoes'
    ],
    correctOptionIndex: 1,
    explanation: `• Direct question: "Do you like my shoes?" (Present simple, yes/no question).
• In indirect speech reporting past speech:
  1. The question connector is "whether" or "if".
  2. The pronoun "you" changes to "I".
  3. The possessive "my" changes to "his".
  4. The verb backshifts from present simple "like" to past simple "liked".
• Result: "whether I liked his shoes".`,
    hint: 'Yes/no reported questions use "if/whether", change pronouns to the 3rd person perspective, and backshift present simple to past simple.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q38',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Dependent Prepositions (Rely)',
    questionText: "38. Don't rely _______ the information you get from this website; it is usually fake.",
    options: [
      'of / on',
      'at',
      'about',
      'in'
    ],
    correctOptionIndex: 3,
    explanation: `• Official Exam Booklet Answer Key: D ("in").
• Linguistic note: In standard international English, the established preposition following the verb "rely" is "on" or "upon" ("rely on"). However, on the official Ethiopian 2017 E.C. booklet answer key, item 38 is officially credited as D.`,
    hint: 'Official exam key marks D (in), though standard English idiom is "rely on".',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q39',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Past Continuous Interrupted by Past Simple',
    questionText: '39. I _______ lunch at my favorite restaurant when I accidentally ran into a childhood friend I had not seen for ages.',
    options: [
      'would have had',
      'have been having',
      'had had',
      'was having'
    ],
    correctOptionIndex: 3,
    explanation: `• When an ongoing background action in the past is interrupted by a shorter, sudden event ("accidentally ran into"), the ongoing action takes the Past Continuous tense ("was having").
• Formula: [Past Continuous] + when + [Simple Past].`,
    hint: 'An ongoing background activity in the past interrupted by another event takes the past continuous.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q40',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Present Continuous for Future Arrangements',
    questionText: "40. Disasa: What ______ this Sunday?\nDinknesh: After coming back from church, I'm taking the children to the park. That's the plan.",
    options: [
      'can you do',
      'you will do',
      'are you doing',
      'did you do'
    ],
    correctOptionIndex: 2,
    explanation: `• The Present Continuous ("are you doing") is standardly used to ask about fixed future plans or personal arrangements.
• Dinknesh confirms with a planned arrangement: "That's the plan."`,
    hint: 'Present continuous is used to inquire about planned future schedules or arrangements.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q41',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Subjunctive with "Wish"',
    questionText: '41. As I was driving in the city last week, my son saw a beautiful house by the roadside and said, "I wish I ______ in this house."',
    options: [
      'live',
      'was living',
      'am living',
      'will live'
    ],
    correctOptionIndex: 1,
    explanation: `• To express a wish about a present or concurrent situation that is contrary to fact, English uses a past form after "wish" (past subjunctive / past continuous).
• Here, "was living" (or "were living") expresses the unreal desired state.`,
    hint: 'After "wish", verbs shift back to a past form to express an unreal desired situation.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q42',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Modals of Deduction (Must be)',
    questionText: "42. His face is pale and he hasn't been eating well in these last few days. He _______ sick! I think I should take him to the hospital.",
    options: [
      'must be',
      "can't be",
      'ought to be',
      'should have been'
    ],
    correctOptionIndex: 0,
    explanation: `• "Must be" expresses strong logical certainty based on observable evidence (pale face, loss of appetite, needing hospitalization).
• "He must be sick" means it is almost certainly true that he is sick.`,
    hint: 'To express a logical conclusion based on strong evidence, use the modal "must".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q43',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Modals of Possibility (May)',
    questionText: '43. He has a solid understanding of the Constitution; he ______ be a lawyer.',
    options: [
      'shall',
      "can't",
      'will',
      'may'
    ],
    correctOptionIndex: 3,
    explanation: `• "May" indicates possibility: based on his deep constitutional knowledge, it is possible that he is a lawyer (or he may be a lawyer).
• "Can't" would contradict the premise, and "shall" is ungrammatical here.`,
    hint: '"May" expresses possibility based on current facts.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q44',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Tag Questions',
    questionText: '44. The students studied hard, ______?',
    options: [
      'did they',
      'does they',
      'do they',
      "didn't they"
    ],
    correctOptionIndex: 3,
    explanation: `• The main statement is in the positive Past Simple tense ("studied hard").
• Rules for tag questions:
  1. A positive statement takes a negative tag.
  2. The auxiliary for the past simple is "did" -> negative tag: "didn't".
  3. The plural subject pronoun for "The students" is "they".
• Result: "didn't they?"`,
    hint: 'A positive past simple sentence requires the negative past tag "didn\'t they?".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q45',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Prepositions of Time (Specific Dates)',
    questionText: '45. Mr. Gemechu is already 65 years old. He was born ______ the tenth of March, 1960.',
    options: [
      'around',
      'in',
      'on',
      'at'
    ],
    correctOptionIndex: 2,
    explanation: `• In English, we use "in" for years and months alone (in 1960, in March).
• We use "at" for specific times of day (at 3:00 PM).
• We use "on" for specific calendar dates and days (on the tenth of March, 1960; on Monday).`,
    hint: 'Use the preposition "on" for specific calendar dates.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q46',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Conjunctions of Purpose (So that)',
    questionText: '46. He has been working so hard in the past four years ______ he could buy an electric car the coming year.',
    options: [
      'for',
      'in order to',
      'such that',
      'so that'
    ],
    correctOptionIndex: 3,
    explanation: `• "So that" introduces a subordinate clause of purpose containing a subject and a modal verb ("he could buy").
• "In order to" is followed directly by an infinitive verb (not a full clause).
• Therefore, "so that" is the correct conjunction of purpose.`,
    hint: '"So that" is followed by a full clause with subject and modal verb (he could...).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q47',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Adverb Placement (Frequency Adverbs)',
    questionText: '47. Which of the following sentences is most acceptable?',
    options: [
      'She told him always she would love him.',
      'She told him she always would love him.',
      'She told him she would love him always.',
      'She told him she would always love him.'
    ],
    correctOptionIndex: 3,
    explanation: `• Standard adverb position rule: Adverbs of frequency (such as "always", "never", "often") are placed between the auxiliary/modal verb ("would") and the main lexical verb ("love").
• Therefore: "She told him she would always love him." is the most natural, standard, and grammatically accepted sentence.`,
    hint: 'Place the adverb of frequency "always" between the modal "would" and the main verb "love".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q48',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Zero Conditional (Scientific Fact)',
    questionText: '48. Which of the following sentences is grammatically correct?',
    options: [
      'Water will evaporate if you are going to boil it.',
      'If you will boil water, it may evaporate.',
      'If you boiled water, it will evaporate.',
      'Water evaporates if you boil it.'
    ],
    correctOptionIndex: 3,
    explanation: `• Scientific truths, natural laws, and general facts are expressed using the Zero Conditional:
  "If/when + present simple, present simple".
• "Water evaporates if you boil it" correctly uses present simple in both the condition and result clauses.`,
    hint: 'Scientific facts and natural laws use the zero conditional (Present Simple in both clauses).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q49',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Relative Pronouns (Subject for Persons)',
    questionText: '49. The captain ______ met you in the meeting we had yesterday is my cousin.',
    options: [
      'who',
      'which',
      'whose',
      'whom'
    ],
    correctOptionIndex: 0,
    explanation: `• "The captain" is a human antecedent.
• The relative pronoun functions as the subject of the relative clause verb "met".
• "Who" is the subject relative pronoun for persons.
• "Whom" is used for objects, "whose" for possession, and "which" for things.`,
    hint: 'Use "who" as the subject pronoun referring to a person.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q50',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Passive Voice (Modal / Regular Present)',
    questionText: '50. Students ______ to respect the regulations of their schools.',
    options: [
      'will be advising',
      'are advising',
      'are advised',
      'advised'
    ],
    correctOptionIndex: 2,
    explanation: `• The students do not give the advice; they receive the advice from authorities/teachers.
• Thus, the sentence requires the present simple passive: "are + past participle" -> "are advised to respect...".`,
    hint: 'Students receive the advice; this requires the passive voice "are advised".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q51',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Modals of Obligation (Have to)',
    questionText: '51. We ______ obey our parents without questions since we have a moral obligation to do so.',
    options: [
      'do not need to',
      'have to',
      'will',
      'can'
    ],
    correctOptionIndex: 1,
    explanation: `• The second clause establishes a compelling moral obligation: "since we have a moral obligation to do so."
• "Have to" expresses strong necessity and obligation.`,
    hint: '"Have to" expresses obligation and necessity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q52',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Complete Sentence Structure (Dummy "it")',
    questionText: '52. Which of the following sentences is grammatically correct?',
    options: [
      'Though I liked the video kept watching.',
      'Unless the police investigate the crime.',
      'I find it difficult to swim.',
      'She arrived before I.'
    ],
    correctOptionIndex: 2,
    explanation: `• Option A is missing a subject in the main clause ("kept watching").
• Option B is an incomplete dependent subordinate clause fragment.
• Option D ends awkwardly/incorrectly where "before me" (preposition) or "before I did" (conjunction + clause) is required.
• Option C is grammatically sound, using the preparatory object "it": Subject + verb + it + adjective + to-infinitive ("I find it difficult to swim").`,
    hint: '"I find it difficult to swim" is a complete, grammatically correct sentence using dummy "it".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q53',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Gerunds after Specific Verbs (Enjoy)',
    questionText: '53. He enjoys ______ historical books whenever he has time.',
    options: [
      'to reading',
      'to read',
      'reading',
      'read'
    ],
    correctOptionIndex: 2,
    explanation: `• The verb "enjoy" is obligatorily followed by a gerund (-ing form), never by a to-infinitive.
• Therefore: "He enjoys reading historical books..."`,
    hint: 'The verb "enjoy" is always followed by a gerund (-ing).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q54',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Inverted Third Conditional',
    questionText: '54. Had I studied hard, I ______ the exam easily.',
    options: [
      'could have passed',
      'had passed',
      'could pass',
      'have passed'
    ],
    correctOptionIndex: 0,
    explanation: `• "Had I studied hard" is an inverted Third Conditional clause equivalent to "If I had studied hard".
• The main clause of a Third Conditional requires a past modal auxiliary + have + past participle: "could have passed" (or "would have passed").`,
    hint: 'An inverted conditional with "Had + subject + V3" requires "would/could have + V3" in the main clause.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q55',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Past Simple vs Past Perfect',
    questionText: '55. When she ______ at the station, the plane had already left.',
    options: [
      'should have arrived',
      'had arrived',
      'has arrived',
      'arrived'
    ],
    correctOptionIndex: 3,
    explanation: `• When two actions occur sequentially in the past:
  - The earlier action takes the Past Perfect ("had already left").
  - The later action takes the Simple Past ("arrived").
• Therefore: "When she arrived at the station, the plane had already left."`,
    hint: 'The later action in the past takes the Simple Past tense.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q56',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Causative Verbs (Make + Bare Infinitive)',
    questionText: "56. You cannot ______ me ______ what I don't believe in doing!",
    options: [
      'let/doing',
      'make/do',
      'made/do',
      'let/to do'
    ],
    correctOptionIndex: 1,
    explanation: `• Following the modal verb "cannot", the base form "make" must be used.
• The causative verb "make" takes an object followed by a bare infinitive (base form without "to"): "make me do".
• Therefore, "make/do" is correct.`,
    hint: 'After the modal "cannot", use base verb "make" + object + bare infinitive "do".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q57',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Participial Clauses (Past Participle)',
    questionText: '57. ______ by the war, Gaza will take years to recover.',
    options: [
      'Being devastate',
      'Having devastated',
      'Devastated',
      'Devastating'
    ],
    correctOptionIndex: 2,
    explanation: `• The past participle "Devastated" functions as a reduced passive relative clause meaning "Having been devastated by the war" or "Because it was devastated by the war".
• "Devastated by the war, Gaza will take years to recover" is concise, standard, and grammatically correct.`,
    hint: 'A past participle phrase ("Devastated by...") functions as a passive participial adjective modifying the noun.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q58',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Passive Infinitive Patterns (Be allowed to)',
    questionText: '58. As a rule, university students are not allowed ______ the campus after 10 P.M.',
    options: [
      'to entering',
      'to enter',
      'entering',
      'enter'
    ],
    correctOptionIndex: 1,
    explanation: `• In passive constructions with "allow", the verb is followed by a full to-infinitive: "be allowed to + base verb".
• Result: "are not allowed to enter the campus".`,
    hint: 'The passive structure is "be allowed + to-infinitive".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q59',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Sentence Structure and Infinitives',
    questionText: '59. To keep healthy, you need to have balanced diet, enough sleep, and ______.',
    options: [
      'peaceful mind',
      'to do exercise',
      'working out',
      'to be peaceful'
    ],
    correctOptionIndex: 1,
    explanation: `• Official booklet answer key: B ("to do exercise").
• Structural explanation: The sentence coordinates the predicate verb complement: "you need [to have balanced diet, enough sleep] and [to do exercise]". The to-infinitive reinforces the action required to maintain health.`,
    hint: 'Official booklet answer key gives "to do exercise".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q60',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Parallelism with Gerunds',
    questionText: '60. Which one of the following sentences is grammatically correct?',
    options: [
      'Genet liked reading and to watch TV.',
      'Genet likes reading and watching TV.',
      'Genet liked to read and watching TV.',
      'Genet likes reading and to watch TV.'
    ],
    correctOptionIndex: 1,
    explanation: `• The grammatical principle of parallel structure requires that coordinating elements connected by "and" share identical grammatical forms.
• In Option B, both verbs are gerunds: "reading" and "watching".
• Mixing an infinitive with a gerund (as in A, C, and D) violates grammatical parallelism.`,
    hint: 'Ensure parallel grammatical form on both sides of "and" (gerund + gerund: reading and watching).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q61',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Correlative Adverbs (Too... to)',
    questionText: '61. Mulatu was hired only two weeks ago. So, it is ______ early to evaluate his performance.',
    options: [
      'very…to',
      'so…to',
      'too…to',
      'so…as'
    ],
    correctOptionIndex: 2,
    explanation: `• The structure "too + adjective + to-infinitive" indicates that a condition is excessive to the point of preventing an action or rendering it inappropriate.
• "It is too early to evaluate his performance" means because it is excessively early, one cannot evaluate him yet.`,
    hint: 'Use the pattern "too + adjective + to-infinitive" to express excessive degree.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q62',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Grammar: Concessive Prepositions (Despite vs Despite of)',
    questionText: '62. Mr. Tom reached his office on time ______ the crowd.',
    options: [
      'because of',
      'despite',
      'but for',
      'despite of'
    ],
    correctOptionIndex: 1,
    explanation: `• "Despite" is a preposition of concession followed directly by a noun phrase ("the crowd") without "of".
• "Despite of" is ungrammatical (the phrase with "of" is "in spite of").
• Semantically, reaching on time in the presence of a crowd represents concession, making "despite" the correct choice.`,
    hint: '"Despite" takes a noun phrase directly without "of". "In spite of" uses "of", but "despite of" does not exist.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
