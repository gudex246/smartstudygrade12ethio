import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

const PASSAGE_1_TEXT = `Passage 1: The Importance of Mental Health
(1) Mental health is a crucial component of overall well-being, yet it is frequently neglected in modern society. While physical health issues are easily identified and treated, mental health struggles often remain hidden due to societal stigma. Many individuals suffer in silence, believing that acknowledging their emotional or psychological pain is a sign of weakness. However, mental health is just as important as physical health, and neglecting it can severely impact a person's quality of life, relationships, and professional success.
(2) Various factors can negatively affect one's psychological well-being. Chronic stress from work, unresolved childhood trauma, and unhealthy relationships are known to aggravate underlying mental health conditions. Furthermore, in today's fast-paced digital world, excessive use of social media often leads to feelings of inadequacy and isolation. When these issues are left unaddressed, they can escalate into severe anxiety disorders or clinical depression, making everyday tasks feel insurmountable.
(3) Addressing mental health requires a proactive approach. Regular exercise, a balanced diet, and sufficient sleep form a strong foundation for emotional resilience. Additionally, engaging in mindfulness practices such as meditation can help manage stress. However, self-care is sometimes not enough. When individuals feel overwhelmed, it is vital to seek professional support. Ultimately, consulting therapists or counselors is the most effective way to navigate deep-rooted psychological challenges and achieve long-term mental stability.`;

const PASSAGE_2_TEXT = `Passage 2: The Value of Soft Skills
(1) In the modern workforce, the criteria for hiring have shifted significantly. Traditionally, employers placed a heavy emphasis on "hard skills"—the specific, teachable abilities and technical knowledge required to perform a job. For example, programming, accounting, and fluency in a foreign language are considered hard skills. While these abilities remain essential, extensive researches show that they are no longer sufficient on their own to guarantee career success in today's highly collaborative work environments.
(2) Enter "soft skills," which refer to interpersonal attributes, communication abilities, and personality traits that dictate how individuals interact with others. Soft skills include emotional intelligence, teamwork, adaptability, and problem-solving. Unlike hard skills, which are specific to a particular profession, soft skills are highly transferable across different industries. A software engineer, for instance, needs the hard skill of coding, but it is their soft skills that allow them to effectively communicate their progress to their team and adapt to sudden changes in a project.
(3) When comparing the two, many human resource experts argue that soft skills are actually more valuable for long-term growth in the current corporate world. An employee lacking a specific technical skill can easily be trained or sent to a workshop. However, it is much more difficult to teach an arrogant employee how to be empathetic or how to collaborate effectively. As artificial intelligence continues to automate routine tasks, the human-centric soft skills will increasingly separate great employees from average ones.`;

export const ENGLISH_2018_EC_PART4: Question[] = [
  // Passage 1 Continued (Questions 76–77)
  {
    id: 'eng-2018-q76',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Therapeutic Interventions',
    questionText: `${PASSAGE_1_TEXT}\n\n76. According to paragraph 3, what is suggested when self-care methods are not enough?`,
    options: [
      'To sleep more often.',
      "To quit one's job to avoid stress.",
      'To seek professional support from therapists.',
      'To delete all social media accounts immediately.'
    ],
    correctOptionIndex: 2,
    explanation: `Paragraph 3 explicitly states: "However, self-care is sometimes not enough. When individuals feel overwhelmed, it is vital to seek professional support. Ultimately, consulting therapists or counselors is the most effective way to navigate deep-rooted psychological challenges..."
This matches Option C.`,
    hint: 'Look at the recommendation when self-care is insufficient in paragraph 3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q77',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Negative Detail (NOT mentioned)',
    questionText: `${PASSAGE_1_TEXT}\n\n77. Which of the following is NOT mentioned as a foundational practice for emotional resilience?`,
    options: [
      'Regular exercise',
      'Sufficient sleep',
      'Taking strong medication',
      'A balanced diet'
    ],
    correctOptionIndex: 2,
    explanation: `Paragraph 3 identifies: "Regular exercise, a balanced diet, and sufficient sleep form a strong foundation for emotional resilience."
"Taking strong medication" is never listed as a foundational daily resilience lifestyle habit.`,
    hint: 'Check which item is absent from the three foundational lifestyle practices named in paragraph 3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Passage 2: The Value of Soft Skills (Questions 78–85)
  {
    id: 'eng-2018-q78',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Main Purpose of the Author',
    questionText: `${PASSAGE_2_TEXT}\n\n78. What is the main purpose of Passage 2?`,
    options: [
      'To explain why hard skills are completely obsolete.',
      'To compare hard skills and soft skills, highlighting the growing importance of soft skills.',
      'To teach readers how to write a computer program.',
      'To argue that artificial intelligence will replace all human workers.'
    ],
    correctOptionIndex: 1,
    explanation: `The passage explains the roles of both hard skills (technical knowledge) and soft skills (interpersonal abilities), demonstrating how modern workplaces and artificial intelligence have made soft skills increasingly vital for career longevity.
Thus, the primary purpose is to compare both skill sets and highlight the growing significance of soft skills (Option B).`,
    hint: 'The author compares technical hard skills with interpersonal soft skills to emphasize the rising value of soft skills.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q79',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Classification of Skills',
    questionText: `${PASSAGE_2_TEXT}\n\n79. Which of the following is an example of a hard skill according to the passage?`,
    options: [
      'Teamwork',
      'Emotional intelligence',
      'Accounting',
      'Adaptability'
    ],
    correctOptionIndex: 2,
    explanation: `Paragraph 1 states: "...employers placed a heavy emphasis on 'hard skills'—the specific, teachable abilities and technical knowledge required to perform a job. For example, programming, accounting, and fluency in a foreign language are considered hard skills."
Teamwork, emotional intelligence, and adaptability are soft skills listed in paragraph 2.`,
    hint: 'Look for the examples of hard skills given in paragraph 1.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q80',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Pronoun & Cleft Sentence Reference',
    questionText: `${PASSAGE_2_TEXT}\n\n80. In paragraph 2, the pronoun "it" in the sentence "...but it is their soft skills that allow them to effectively communicate..." refers to:`,
    options: [
      'The hard skill of coding.',
      'A software engineer.',
      'Their soft skills.',
      'A particular profession.'
    ],
    correctOptionIndex: 2,
    explanation: `In the cleft sentence construction ("it is X that..."), the anticipatory pronoun "it" introduces and emphasizes the focal element, which is "their soft skills."
Therefore, the emphasized reference is "Their soft skills."`,
    hint: 'In cleft sentences of the form "it is X that...", the focus is on X ("their soft skills").',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q81',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Human Resource Analysis',
    questionText: `${PASSAGE_2_TEXT}\n\n81. Why do human resource experts consider soft skills more valuable for long-term growth?`,
    options: [
      'Soft skills are much cheaper to learn than hard skills.',
      'Soft skills are harder to teach to an employee than technical skills.',
      'Artificial intelligence possesses high soft skills.',
      'Hard skills cannot be transferred to different industries.'
    ],
    correctOptionIndex: 1,
    explanation: `Paragraph 3 explains: "An employee lacking a specific technical skill can easily be trained or sent to a workshop. However, it is much more difficult to teach an arrogant employee how to be empathetic or how to collaborate effectively."
Because soft skills are deeply rooted in personality and much harder to train, HR experts consider them more valuable (Option B).`,
    hint: 'Paragraph 3 contrasts easily trainable technical skills with difficult-to-teach personality attributes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q82',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Technological Impact of AI',
    questionText: `${PASSAGE_2_TEXT}\n\n82. Based on the passage, what is the impact of artificial intelligence on the workforce?`,
    options: [
      'It makes human-centric soft skills more highly valued.',
      'It performs all the interpersonal communication for employees.',
      'It eliminates the need for problem-solving skills.',
      'It teaches hard skills to stubborn workers.'
    ],
    correctOptionIndex: 0,
    explanation: `The final sentence of paragraph 3 states: "As artificial intelligence continues to automate routine tasks, the human-centric soft skills will increasingly separate great employees from average ones."
This shows AI causes uniquely human soft skills to become even more highly prized and valued.`,
    hint: 'AI automates routine tasks, making human-centric soft skills more distinctive and valued.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q83',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Lexical Definition',
    questionText: `${PASSAGE_2_TEXT}\n\n83. Which word in paragraph 2 means "capable of being moved or applied from one place/job to another"?`,
    options: [
      'Interpersonal',
      'Transferable',
      'Collaborative',
      'Specific'
    ],
    correctOptionIndex: 1,
    explanation: `Paragraph 2 states: "...soft skills are highly transferable across different industries."
"Transferable" literally means able to be conveyed or transferred from one environment, job, or position to another.`,
    hint: 'The root "transfer" indicates moving from one job to another.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q84',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Logical Inference',
    questionText: `${PASSAGE_2_TEXT}\n\n84. What can be inferred about an employee with excellent hard skills but poor soft skills?`,
    options: [
      'They will easily become the CEO of the company.',
      'They might struggle to work effectively in a team environment.',
      'They will definitely be replaced by artificial intelligence tomorrow.',
      'They are highly adaptable to sudden project changes.'
    ],
    correctOptionIndex: 1,
    explanation: `The passage points out that modern workplaces are "highly collaborative" and that soft skills like communication and teamwork are necessary to communicate progress and collaborate effectively.
Therefore, someone with poor soft skills will likely struggle to function effectively within a collaborative team environment (Option B).`,
    hint: 'Without teamwork and communication abilities, collaborating with peers becomes difficult.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q85',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Distinguishing Concepts',
    questionText: `${PASSAGE_2_TEXT}\n\n85. How do hard skills differ from soft skills based on paragraph 2?`,
    options: [
      'Hard skills dictate how we interact with others, while soft skills do not.',
      'Hard skills are generally specific to a profession, while soft skills apply across industries.',
      'Hard skills involve emotional intelligence, whereas soft skills involve coding.',
      'There is no actual difference between the two in the modern workforce.'
    ],
    correctOptionIndex: 1,
    explanation: `Paragraph 2 states: "Unlike hard skills, which are specific to a particular profession, soft skills are highly transferable across different industries."
This matches Option B directly.`,
    hint: 'Paragraph 2 highlights that hard skills are profession-specific while soft skills transfer across industries.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // IV. Vocabulary (Questions 86–100)
  // Section One: Sentence Completion (86–93)
  {
    id: 'eng-2018-q86',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Phrasal Verbs in Business (lay off)',
    questionText: '86. Because of the sharp drop in sales, the factory had to ______ a large number of employees.',
    options: [
      'lay off',
      'put off',
      'take over',
      'bring up'
    ],
    correctOptionIndex: 0,
    explanation: `• "lay off" means to dismiss workers because of a shortage of work or economic downturn.
• "put off" means to postpone.
• "take over" means to assume control.
• "bring up" means to mention a topic or raise a child.
Therefore, Option A ("lay off") is correct.`,
    hint: 'The term for releasing workers due to poor sales is "lay off".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q87',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Dependent Preposition Collocations (consist of)',
    questionText: '87. The new diet plan mostly ______ of fresh vegetables, lean proteins, and whole grains.',
    options: [
      'consists',
      'contains',
      'involves',
      'comprises'
    ],
    correctOptionIndex: 0,
    explanation: `The verb "consist" pairs with the preposition "of" to mean "is composed of" or "is made up of":
"mostly consists of fresh vegetables..."
("Contains", "involves", and "comprises" take a direct object without "of").`,
    hint: 'Only "consists" is followed by the preposition "of" in this context.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q88',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Coordinating Expressions (as well as)',
    questionText: '88. The university offers scholarships for mathematics ______ physics students.',
    options: [
      'as well as',
      'also',
      'in addition',
      'beside'
    ],
    correctOptionIndex: 0,
    explanation: `"As well as" coordinates two parallel noun phrases ("mathematics as well as physics students") to signify "in addition to".`,
    hint: 'Use "as well as" to connect the two categories of students.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q89',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Article Usage with Academic Disciplines',
    questionText: '89. He is regarded as an expert in ______ economy.',
    options: [
      'the',
      'a',
      'an',
      'no article'
    ],
    correctOptionIndex: 3,
    explanation: `When referring to an academic subject, discipline, or area of study in a general sense, the zero article (no article) is used:
"an expert in economy" (referring to economics as a discipline).
(Using "the economy" would refer to a specific country\'s financial system).`,
    hint: 'Names of subjects and disciplines in a general sense take no article.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q90',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Academic & Professional Verbs (nominate)',
    questionText: '90. The committee decided to ______ her for the prestigious award because of her excellent performance.',
    options: [
      'terminate',
      'nominate',
      'procrastinate',
      'aggravate'
    ],
    correctOptionIndex: 1,
    explanation: `• "Nominate" means to formally propose or enter someone as a candidate for an honor, award, or election.
• "Terminate" means to end.
• "Procrastinate" means to delay action.
• "Aggravate" means to make worse.`,
    hint: 'To officially suggest someone for an award is to "nominate" them.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q91',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Action Delays (procrastinate)',
    questionText: '91. Instead of starting his assignment, he continued to ______ until the night before the deadline.',
    options: [
      'procrastinate',
      'fascinate',
      'accelerate',
      'nominate'
    ],
    correctOptionIndex: 0,
    explanation: `• "Procrastinate" means to habitually delay or postpone doing something that should be done.
Continuing to postpone until the night before a deadline is the classic definition of procrastinating.`,
    hint: 'Delaying tasks until the very last moment is called procrastinating.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q92',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Descriptive Adjectives for Scenic Views (spectacular)',
    questionText: '92. The view from the top of the mountain at sunrise was absolutely ______.',
    options: [
      'boring',
      'spectacular',
      'substantive',
      'terrible'
    ],
    correctOptionIndex: 1,
    explanation: `• "Spectacular" means beautiful in a dramatic and eye-catching way; breathtaking.
A mountain sunrise view is universally described as spectacular.`,
    hint: 'Choose the positive adjective meaning visually breathtaking.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q93',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Legal & Scholarly Adjectives (substantive)',
    questionText: '93. The lawyer presented ______ evidence that completely changed the outcome of the trial.',
    options: [
      'trivial',
      'substantive',
      'weak',
      'irrelevant'
    ],
    correctOptionIndex: 1,
    explanation: `• "Substantive" evidence is evidence that has firm basis in reality and is of substantial importance, weight, and validity in deciding a legal trial.
• "Trivial", "weak", and "irrelevant" mean insignificant and would not change the outcome.`,
    hint: '"Substantive" means substantial, meaningful, and legally significant.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Two: Word Substitution (94–100)
  {
    id: 'eng-2018-q94',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Synonyms for Demolished',
    questionText: '94. Choose the word or phrase that keeps the meaning of the given sentence if substituted for the underlined word:\nThe old building was DEMOLISHED to make way for a new shopping mall.',
    options: [
      'repaired',
      'constructed',
      'pulled down',
      'painted'
    ],
    correctOptionIndex: 2,
    explanation: `• "Demolished" means completely torn down or destroyed (especially a building).
• "Pulled down" is the direct phrasal verb synonym meaning demolished or knocked down.`,
    hint: 'To demolish a building is to pull it down.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q95',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Synonyms for Look Into',
    questionText: '95. Choose the word or phrase that keeps the meaning of the given sentence if substituted for the underlined word:\nYou should LOOK INTO the matter before making a final decision.',
    options: [
      'investigate',
      'ignore',
      'forget',
      'hide'
    ],
    correctOptionIndex: 0,
    explanation: `• The phrasal verb "look into" means to investigate, explore, or examine the facts of a situation.`,
    hint: 'To "look into" a matter means to investigate it thoroughly.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q96',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Synonyms for Annoy',
    questionText: '96. Choose the word or phrase that keeps the meaning of the given sentence if substituted for the underlined word:\nHer continuous complaints began to ANNOY everyone in the office.',
    options: [
      'please',
      'irritate',
      'entertain',
      'assist'
    ],
    correctOptionIndex: 1,
    explanation: `• "Annoy" means to make someone slightly angry, bothered, or displeased.
• "Irritate" is the exact direct synonym.`,
    hint: '"Annoy" and "irritate" both mean to bother or vex someone.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q97',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Synonyms for Contagious',
    questionText: '97. Choose the word or phrase that keeps the meaning of the given sentence if substituted for the underlined word:\nThe disease is highly CONTAGIOUS, so the patient must be isolated.',
    options: [
      'curable',
      'harmless',
      'infectious',
      'rare'
    ],
    correctOptionIndex: 2,
    explanation: `• "Contagious" refers to a disease spread from one person or organism to another by direct or indirect contact.
• "Infectious" is its direct medical synonym.`,
    hint: 'A contagious disease is an infectious communicable disease.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q98',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Synonyms for Hand In',
    questionText: '98. Choose the word or phrase that keeps the meaning of the given sentence if substituted for the underlined word:\nThe students were asked to HAND IN their exam papers when the bell rang.',
    options: [
      'distribute',
      'submit',
      'tear up',
      'hide'
    ],
    correctOptionIndex: 1,
    explanation: `• The phrasal verb "hand in" means to formally give or present work or documents to someone in authority.
• "Submit" is the formal equivalent synonym.`,
    hint: 'To "hand in" an exam paper means to submit it to the proctor or teacher.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q99',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Synonyms for Eradicate',
    questionText: '99. Choose the word or phrase that keeps the meaning of the given sentence if substituted for the underlined word:\nThe government is trying to ERADICATE poverty in rural areas.',
    options: [
      'increase',
      'eliminate',
      'support',
      'ignore'
    ],
    correctOptionIndex: 1,
    explanation: `• "Eradicate" means to destroy completely, wipe out, or put an end to something undesirable.
• "Eliminate" is the direct synonym.`,
    hint: 'To eradicate a social ill like poverty means to eliminate it completely.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q100',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Vocabulary: Synonyms for Vital',
    questionText: '100. Choose the word or phrase that keeps the meaning of the given sentence if substituted for the underlined word:\nIt is VITAL that you bring your identification card to the exam hall.',
    options: [
      'optional',
      'unnecessary',
      'crucial',
      'rare'
    ],
    correctOptionIndex: 2,
    explanation: `• "Vital" means absolutely necessary, indispensable, or essential.
• "Crucial" is the direct synonym.`,
    hint: '"Vital" means indispensable or crucial.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
