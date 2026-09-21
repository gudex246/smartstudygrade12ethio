import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

const APPLICATION_LETTER_TEXT = `Section Two: Letter Writing
Read the letter of application below carefully and answer the questions accordingly:

21 June 2025
Dear Mr. Tadios,

(1) I would appreciate an opportunity to discuss with you in greater detail about my qualification and experience. Please don't hesitate to contact me if you need additional information.

(2) I graduated from Addis Ababa University, School of Commerce in Business Management ten years ago and have been working on a project at an international organization for the past five years. The project is now being completed and it is time for me to extend my vast experience to similar organizations such as yours. As you can see from my enclosed CV, I have the relevant experience and qualification for the post advertised.

(3) I enjoy working in a team. I can also work under pressure. I am an outgoing person and can easily relate to people, which I believe are important traits for a manager.

(4) I am writing in response to the position of Manager advertised on your website on 15 June 2025.

Yours sincerely,
Tesfa Bihonegn`;

export const ENGLISH_2017_EC_PART3: Question[] = [
  // Section One: Punctuation and Capitalization (63–65)
  {
    id: 'eng-2017-q63',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Capitalization Rules for Proper Nouns',
    questionText: '63. Choose the statement which is correctly punctuated and capitalized:',
    options: [
      'His plan is to do his first degree at Addis Ababa University and then move to the united kingdom.',
      'His plan is to do his first degree at addis ababa university and then move to the United Kingdom.',
      'His plan is to do his first degree at Addis Ababa University and then move to the United Kingdom.',
      'His plan is to do his first degree at Addis ababa university and then move to the united kingdom.'
    ],
    correctOptionIndex: 2,
    explanation: `• "Addis Ababa University" is a specific educational institution and proper noun; all three words must be capitalized.
• "United Kingdom" is the name of a sovereign nation; both words must be capitalized.
• Option C is the only choice that correctly capitalizes both proper nouns.`,
    hint: 'Both "Addis Ababa University" and "United Kingdom" are proper nouns and must be capitalized.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q64',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Semicolons and Conjunctive Adverbs (Otherwise)',
    questionText: '64. Choose the statement which is correctly punctuated and capitalized:',
    options: [
      'Personal computers should be updated periodically; otherwise, computer virus could destroy data.',
      'Personal computers should be updated periodically; otherwise computer virus could destroy data.',
      'Personal computers should be updated periodically, otherwise, computer virus could destroy data.',
      'Personal computers should be updated periodically; otherwise, computer virus could destroy data'
    ],
    correctOptionIndex: 0,
    explanation: `• When connecting two independent clauses with a conjunctive adverb such as "otherwise", standard punctuation requires:
  1. A semicolon (;) before the conjunctive adverb.
  2. A comma (,) immediately after the conjunctive adverb.
  3. A terminal period (.) at the end of the complete sentence.
• Option A satisfies all these punctuation rules.`,
    hint: 'Use a semicolon before the transition word "otherwise" followed by a comma, and end with a period.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q65',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Punctuation of Conditional and Compound Imperatives',
    questionText: '65. Choose the statement which is correctly punctuated and capitalized:',
    options: [
      "If you can't go to sleep, don't just toss and turn in bed; get up and do something!",
      "If you can't go to sleep; don't just toss and turn in bed. Get up and do something!",
      "If you can't go to sleep, don't just toss and turn in bed get up and do something!",
      "If you can't go to sleep don't just toss and turn in bed, get up and do something!"
    ],
    correctOptionIndex: 0,
    explanation: `• The introductory dependent conditional clause ("If you can't go to sleep,") must be followed by a comma.
• The two closely linked imperative clauses ("don't just toss and turn in bed" and "get up and do something!") are effectively coordinated using a semicolon.
• The sentence ends emphatically with an exclamation mark.
• Option A is properly punctuated.`,
    hint: 'Use a comma after the introductory "if" clause and a semicolon to separate two closely linked imperative thoughts.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Two: Letter Writing (66–68)
  {
    id: 'eng-2017-q66',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Application Letter Functions (Interview Request)',
    questionText: `${APPLICATION_LETTER_TEXT}\n\n66. Paragraph 1 in the above letter ______`,
    options: [
      'indicates that the applicant and the employer know each other',
      'invites the employer for an informal meeting outside work',
      'expresses assurance that the applicant will get the job',
      'asks for a possible interview with the employer'
    ],
    correctOptionIndex: 3,
    explanation: `Paragraph 1 states: "I would appreciate an opportunity to discuss with you in greater detail about my qualification and experience. Please don't hesitate to contact me if you need additional information."
This is the standard formal convention in cover letters used to request an employment interview.`,
    hint: 'An opportunity to discuss qualifications in greater detail refers to a job interview.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q67',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Application Letter Content (Personal Traits)',
    questionText: `${APPLICATION_LETTER_TEXT}\n\n67. Paragraph 3 in the above letter ______`,
    options: [
      'gives irrelevant information as it is not related to the job',
      'describes the qualifications the applicant has earned',
      'outlines the work experience of the applicant',
      "describes aspects of the writer's personality"
    ],
    correctOptionIndex: 3,
    explanation: `Paragraph 3 highlights: "I enjoy working in a team. I can also work under pressure. I am an outgoing person and can easily relate to people, which I believe are important traits for a manager."
These describe soft skills and personal traits/attributes essential for management.`,
    hint: 'Being outgoing, working under pressure, and teamwork are personality traits.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q68',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Application Letter Structure and Ordering',
    questionText: `${APPLICATION_LETTER_TEXT}\n\n68. The four paragraphs in the above letter are not in the right order. Which one of the following contains the correct order?`,
    options: [
      '2, 4, 1, 3',
      '2, 3, 4, 1',
      '4, 2, 3, 1',
      '4, 1, 3, 2'
    ],
    correctOptionIndex: 2,
    explanation: `The standard logical structure of a formal job application letter is:
1. Paragraph 4: Statement of purpose (reason for writing and specific post applied for).
2. Paragraph 2: Educational qualifications and relevant professional work experience.
3. Paragraph 3: Personal qualities, interpersonal strengths, and suitability for the role.
4. Paragraph 1: Concluding call to action (request for an interview and contact availability).
Therefore, the correct sequential order is 4, 2, 3, 1.`,
    hint: 'First state the position applied for (4), then qualifications/experience (2), personality traits (3), and request an interview (1).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Three: Jumbled Words (69–71)
  {
    id: 'eng-2017-q69',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Sentence Syntax (Sizes and Semicolons)',
    questionText: '69. Reorder the jumbled words into a correct sentence:\n"medium / three / large / There / are / and / sizes / small / of / shirt."',
    options: [
      'There are small, medium and large three sizes of shirt.',
      'There are three sizes of shirt; small, medium and large.',
      'There are three shirt of small, medium and large sizes.',
      'There are small, medium and large three shirt of sizes.'
    ],
    correctOptionIndex: 1,
    explanation: `• The existential construction starts with "There are three sizes of shirt;".
• The subsequent clause lists the three specific sizes: "small, medium and large."
• This forms a grammatically clear and natural English sentence.`,
    hint: 'Start with the main clause "There are three sizes of shirt" followed by the list.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q70',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Embedded Question Word Order',
    questionText: '70. Reorder the jumbled words into a correct sentence:\n"refused / she / from / where / is / him / she / tell / to."',
    options: [
      'To tell him from where she is she refused.',
      'She refused to tell him where she is from.',
      'She refused him to tell from where she is.',
      'She refused to tell him where is she from.'
    ],
    correctOptionIndex: 1,
    explanation: `• Subject + verb + infinitive phrase + indirect object + noun clause:
  "She refused to tell him where she is from."
• In noun clauses acting as embedded questions ("where she is from"), normal subject-verb order is maintained (not inversion like "where is she from").`,
    hint: 'Maintain standard subject-verb order in the embedded clause: "where she is from".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q71',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Sentence Construction (Subject-Verb-Complement)',
    questionText: '71. Reorder the jumbled words into a correct sentence:\n"is / Mekdonia / for / a / residential / home / the / elderly."',
    options: [
      'A residential home the elderly is for Mekdonia.',
      'Mekdonia is a residential home for the elderly.',
      'Home for the elderly Mekdonia is a residential.',
      'Mekdonia is a residential for the elderly home.'
    ],
    correctOptionIndex: 1,
    explanation: `• Subject: "Mekdonia"
• Linking verb: "is"
• Predicate noun phrase: "a residential home for the elderly".
• Result: "Mekdonia is a residential home for the elderly."`,
    hint: 'Subject (Mekdonia) + verb (is) + complement (a residential home for the elderly).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Four: Paragraph Coherence (72–75)
  {
    id: 'eng-2017-q72',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Paragraph Coherence (Rhetorical Questions & Debate)',
    questionText: `72. When put in the correct order, sentences (a - d) make up a complete paragraph. Choose the correct order:
a. A lot of people these days will disagree because they see educated people struggling to survive.
b. Is education the right path out of poverty?
c. A few will still argue that these people are not successful because they are unable to use their expertise creatively.
d. Different people will answer this question differently.`,
    options: [
      'a b d a',
      'b d c a',
      'd b a c',
      'a c d b'
    ],
    correctOptionIndex: 1,
    explanation: `• b: Opens with the central thematic question: "Is education the right path out of poverty?"
• d: Introduces the differing perspectives: "Different people will answer this question differently."
• c & a: Follow up with specific contrasting counter-arguments and explanations.
• According to the official exam booklet key, option B (b d c a) represents the intended sequence.`,
    hint: 'The paragraph starts with the opening question (b), followed by the observation that people answer it differently (d).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q73',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Paragraph Coherence (Spatial Descriptive Order)',
    questionText: `73. When put in the correct order, sentences (a - d) make up a complete paragraph. Choose the correct order:
a. The house has a bedroom, a living room and a kitchen.
b. In the bedroom, there is a big cupboard with doors and shelves.
c. Roman lives in Akaki and she has a beautiful house.
d. The living room contains dining tables and a sofa whereas the kitchen has an oven, a coal burner, a table and a small kitchen cupboard.`,
    options: [
      'a d c b',
      'c a b d',
      'd b a c',
      'c d b a'
    ],
    correctOptionIndex: 1,
    explanation: `• c: Introduces Roman, where she lives, and her house.
• a: Outlines the components of the house (bedroom, living room, kitchen).
• b: Details the first room mentioned (the bedroom).
• d: Details the remaining rooms (the living room and kitchen).
Therefore, the coherent spatial order is c -> a -> b -> d.`,
    hint: 'Introduce the person and house (c), overview the rooms (a), then detail the bedroom (b) and other rooms (d).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q74',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Paragraph Coherence (Expository Definition & Elaboration)',
    questionText: `74. When put in the correct order, sentences (a - d) make up a complete paragraph. Choose the correct order:
a. These skills are developed by children when they become in the age range of 4-6.
b. Before joining primary education, children learn basic social and academic skills in it.
c. With regard to teachers, they are advised to be females who are kind-hearted and love children.
d. A kindergarten is a place where children are made ready for the formal school system.`,
    options: [
      'c d b a',
      'b d c a',
      'a d c b',
      'd b a c'
    ],
    correctOptionIndex: 3,
    explanation: `• d: Topic sentence defining kindergarten as preparing children for formal school.
• b: Explains what children learn in it ("in it" refers back to kindergarten; introduces "basic social and academic skills").
• a: "These skills" directly refers back to the skills introduced in sentence b.
• c: Concludes with guidelines regarding kindergarten teachers.
Therefore, the sequence is d -> b -> a -> c.`,
    hint: 'Start with the definition (d), refer to skills learned in it (b), specify "these skills" (a), and conclude with teachers (c).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q75',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Paragraph Coherence (Procedural Guidance)',
    questionText: `75. When put in the correct order, sentences (A - D) make up a complete paragraph. Choose the correct order:
A. As you read, you think of the questions and will be able to answer some of them in your first reading.
B. Before you start reading the passage, you need to know why you are reading it.
C. If you want to get good marks in reading comprehension questions, you need to approach the reading task methodically.
D. This means you have to go through the questions first.`,
    options: [
      'A B D C',
      'B D C A',
      'C B D A',
      'D B A C'
    ],
    correctOptionIndex: 2,
    explanation: `• C: The overarching topic sentence (how to score high by approaching reading methodically).
• B: The first methodical step (knowing why you are reading before starting).
• D: Clarifies what step B means in practice ("This means you have to go through the questions first").
• A: Explains the positive outcome during actual reading ("As you read, you think of the questions...").
Hence, the coherent procedural sequence is C -> B -> D -> A.`,
    hint: 'State the general goal (C), the prerequisite mindset (B), the specific action (D), and the reading benefit (A).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Five: Paragraph Writing (76–78)
  {
    id: 'eng-2017-q76',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Paragraph Types (Narrative)',
    questionText: `76. The paragraph below is taken from a piece of writing that is most likely:
"I have a fresh memory of my childhood experience. I traced my history back to my childhood. I was a son of a poor family. I kept a herd of cows in the field. I had to walk a lot of miles to fetch water for my parents. I collected fire wood used for cooking meals."`,
    options: [
      'argumentative',
      'descriptive',
      'expository',
      'narrative'
    ],
    correctOptionIndex: 3,
    explanation: `• Narrative writing tells a story or recounts past personal experiences, typically organized chronologically with first-person perspective ("I kept...", "I had to walk...", "I collected...").
• This autobiographical recollection is a classic narrative paragraph.`,
    hint: 'A personal recounting of past life events in chronological order is narrative writing.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q77',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Topic Sentences for Cause-and-Effect',
    questionText: '77. Which of the following statements is most appropriate to serve as a topic sentence for a cause-and-effect paragraph?',
    options: [
      'There are many factors that pave the way for economic development.',
      'For many people in the village, Jalane is more beautiful than Lalise.',
      'The term democracy can mean different things for different people.',
      'People can be classified into four groups by their political views.'
    ],
    correctOptionIndex: 0,
    explanation: `• "Factors that pave the way for economic development" explicitly focuses on causal agents (factors/causes) that produce a specific outcome/result (economic development).
• Option B is comparative, C is expository/definitional, and D is classification.`,
    hint: 'Look for the sentence that links causes ("factors") with their result ("economic development").',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q78',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Argumentative Claims',
    questionText: '78. Which one of the following sentences is most likely taken from an argumentative piece of writing?',
    options: [
      'After mixing the flour, salt and oil, I baked the dough in the oven.',
      'The teacher claimed that good behaviors are born but not made.',
      'The beauty of the park, which is surrounded by trees, is so amazing.',
      'I was born in Hawassa and I was raised in Dire Dawa.'
    ],
    correctOptionIndex: 1,
    explanation: `• Argumentative writing revolves around assertions, debates, and disputable claims.
• "The teacher claimed that good behaviors are born but not made" addresses a contentious nature-versus-nurture debate requiring evidence and logical persuasion.
• A is process, C is descriptive, and D is narrative/biographical.`,
    hint: 'An argumentative sentence presents a debatable claim (e.g. nature vs. nurture).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Six: Word Spelling (79–80)
  {
    id: 'eng-2017-q79',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Word Spelling (Misspelled Words)',
    questionText: '79. Which one of the following is spelt WRONGLY?',
    options: [
      'catastrophi',
      'liberty',
      'illicit',
      'caution'
    ],
    correctOptionIndex: 0,
    explanation: `• "catastrophi" is spelled incorrectly. The correct English spelling is "catastrophe" (ending in -e).
• "liberty", "illicit", and "caution" are all spelled correctly.`,
    hint: 'The word meaning disaster ends in "e", not "i".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q80',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Writing: Word Spelling (Correctly Spelled Words)',
    questionText: '80. Which one of the following words is spelt correctly?',
    options: [
      'impateint',
      'unconcscious',
      'enormuos',
      'casualty'
    ],
    correctOptionIndex: 3,
    explanation: `• In the exam options:
  - "impateint" is misspelled (correct: "impatient").
  - "unconcscious" is misspelled (correct: "unconscious").
  - "enormuos" is misspelled (correct: "enormous").
  - "casualty" is spelled completely correctly.
• Note: On the answer key summary sheet, the answer guide notes that option A had intended the word "impatient", but among the printed test options, "casualty" (D) is the accurately spelled word. Both points are noted.`,
    hint: 'Examine each word carefully: "casualty" is free of any typos or transposed letters.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
