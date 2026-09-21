import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const ENGLISH_2018_EC_PART1: Question[] = [
  // Communicative Activities (Questions 1–15)
  {
    id: 'eng-2018-q1',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Expressing Preferences',
    questionText: '1. Aster: Do you prefer reading books or watching movies?\nBilen: ______',
    options: [
      'I prefer read books.',
      "I'd rather watching movies.",
      'I prefer reading books to watching movies.',
      'I like better movies than books.'
    ],
    correctOptionIndex: 2,
    explanation: `The standard grammatical pattern for expressing preference between two actions or activities using "prefer" is:
prefer + gerund (-ing) + TO + gerund (-ing)
• "I prefer reading books to watching movies." (Correct)
• Option A is incorrect because "prefer" is followed by a bare verb instead of a gerund.
• Option B is incorrect because "would rather" takes a bare infinitive ("I'd rather watch movies").
• Option D has incorrect comparative word order.`,
    hint: 'Use the structure: prefer [doing X] to [doing Y].',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q2',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Expressing Agreement',
    questionText: '2. Teacher: Global warming is the most serious current issue we face today.\nStudent: ______. The climate changes are visible everywhere.',
    options: [
      'I totally agree with you',
      "I don't think so",
      'That makes no sense',
      'I completely disagree'
    ],
    correctOptionIndex: 0,
    explanation: `The student\'s following statement ("The climate changes are visible everywhere") provides supporting evidence that confirms the teacher\'s opinion.
Therefore, the student expresses strong agreement: "I totally agree with you."
Options B, C, and D express doubt, insult, or disagreement, which directly contradict the student\'s supportive comment.`,
    hint: 'The second sentence reinforces the teacher\'s point, indicating full agreement.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q3',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Congratulating & Sharing Joy',
    questionText: '3. Friend: I finally got the scholarship to study abroad!\nYou: ______',
    options: [
      'Oh no, I am so sorry for your grief.',
      "That's wonderful! I am so happy for you!",
      'Why did you do that?',
      'I disagree with your choice.'
    ],
    correctOptionIndex: 1,
    explanation: `Receiving an academic scholarship to study abroad is a significant achievement and happy event.
The socially and culturally appropriate communicative response is to congratulate the person and express joy: "That's wonderful! I am so happy for you!"
Option A offers misplaced condolences for grief, while options C and D are unsupportive or hostile.`,
    hint: 'Respond with congratulations and enthusiasm for good news.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q4',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Offering Condolences',
    questionText: '4. Sister: My pet dog just passed away last night.\nBrother: ______',
    options: [
      'Congratulations!',
      'I prefer cats anyway.',
      'Oh, I am so sorry to hear that. My deepest condolences.',
      "That's a great current issue."
    ],
    correctOptionIndex: 2,
    explanation: `The passing of a beloved pet is a sad loss.
The appropriate empathetic response is to express sorrow and offer heartfelt sympathy: "Oh, I am so sorry to hear that. My deepest condolences."`,
    hint: 'When someone shares news of death or bereavement, offer sincere condolences.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q5',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Expressing Disagreement',
    questionText: '5. John: I believe social media does more harm than good to teenagers.\nSara: ______. It helps them connect with peers globally.',
    options: [
      "I couldn't agree more",
      'I completely disagree',
      'You are absolutely right',
      'No doubt about it'
    ],
    correctOptionIndex: 1,
    explanation: `John claims social media is mostly harmful. Sara counters his claim by highlighting a positive benefit ("It helps them connect with peers globally").
Because her supporting statement argues against John\'s viewpoint, her response must express polite disagreement: "I completely disagree."
Options A, C, and D express strong agreement, which would contradict Sara\'s subsequent sentence.`,
    hint: 'Sara gives a reason opposing John\'s negative view, showing disagreement.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q6',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Ordering Food in a Restaurant',
    questionText: '6. Waiter: Are you ready to order, sir?\nCustomer: ______',
    options: [
      'Yes, I will have the roasted chicken, please.',
      'Yes, the kitchen is big.',
      'No, I prefer eating out.',
      'I bought this shirt yesterday.'
    ],
    correctOptionIndex: 0,
    explanation: `When a restaurant waiter asks if the customer is ready to order, the standard response is to confirm and state the desired dish: "Yes, I will have the roasted chicken, please."
Options B, C, and D are nonsensical or irrelevant in this dining context.`,
    hint: 'State your food order politely when the waiter asks.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q7',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Hotel Reception Requests',
    questionText: '7. Receptionist: Good morning, how can I help you?\nGuest: ______',
    options: [
      "I'd like to book a room for two nights.",
      'Yes, you can help me tomorrow.',
      "I don't know your name.",
      'The weather is nice.'
    ],
    correctOptionIndex: 0,
    explanation: `At a hotel front desk, a guest responding to a receptionist\'s greeting states the accommodation service required: "I'd like to book a room for two nights."`,
    hint: 'State your hotel booking request clearly.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q8',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Giving Directions',
    questionText: '8. Stranger: Excuse me, could you tell me where the nearest bank is?\nYou: ______',
    options: [
      'Yes, I need some money.',
      'Go straight and turn left at the corner.',
      'The bank is closed yesterday.',
      'I agree with you.'
    ],
    correctOptionIndex: 1,
    explanation: `When a pedestrian asks for the location of the nearest bank, the proper communicative reply provides directional guidance: "Go straight and turn left at the corner."`,
    hint: 'Provide clear street directions to the bank.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q9',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Explaining Lateness & Apologizing',
    questionText: '9. Manager: Why were you late for the meeting?\nEmployee: ______',
    options: [
      'Because I prefer meetings in the morning.',
      "I'm sorry, my car broke down on the way.",
      'Yes, the meeting was very productive.',
      'I am happy you asked.'
    ],
    correctOptionIndex: 1,
    explanation: `When asked by a supervisor for the reason for tardiness, an employee should offer an apology and an explanation: "I'm sorry, my car broke down on the way."`,
    hint: 'Give an apology and a valid explanation for being late.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q10',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Responding to "Would you mind...?"',
    questionText: '10. Ali: Would you mind opening the window?\nBeti: ______',
    options: [
      'Yes, please open it.',
      "No, not at all. I'll open it right away.",
      'I agree with you completely.',
      'Yes, I mind opening the door.'
    ],
    correctOptionIndex: 1,
    explanation: `In English etiquette, "Would you mind [doing something]?" literally asks "Does it cause you inconvenience or objection?"
• Answering "No" or "No, not at all" means "I do not mind; I am completely happy to do it."
• This is followed by immediate helpful action: "No, not at all. I'll open it right away."
• Saying "Yes" would indicate an objection or refusal.`,
    hint: 'To agree to a "Would you mind...?" request, say "No, not at all" to mean you have no objection.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q11',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Responding to Reminders',
    questionText: "11. Mother: Don't forget to wash your hands before dinner.\nSon: ______",
    options: [
      'I already did, mom.',
      "I don't like dinner.",
      'My hands are not in the kitchen.',
      'I prefer breakfast.'
    ],
    correctOptionIndex: 0,
    explanation: `The son appropriately informs his mother that he has already carried out the instructed hygiene action: "I already did, mom."`,
    hint: 'Confirm that the requested hygiene task has already been done.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q12',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Customer Service in a Shop',
    questionText: '12. Shopkeeper: ______\nCustomer: I am just browsing, thank you.',
    options: [
      'Can I help you find something?',
      'Do you want to leave?',
      'Are you buying or not?',
      'What is your name?'
    ],
    correctOptionIndex: 0,
    explanation: `The phrase "I am just browsing, thank you" is the standard response given to a retail shopkeeper who politely asks: "Can I help you find something?" or "May I help you?"
Options B and C are abrasive or rude, and D is socially inappropriate for shopping.`,
    hint: 'Choose the standard polite customer assistance question.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q13',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Medical Consultation',
    questionText: '13. Patient: Doctor, I have been suffering from a severe headache for two days.\nDoctor: ______',
    options: [
      'I prefer headaches to stomachaches.',
      'Take this medicine and get some rest.',
      'You should go to a restaurant.',
      'I completely disagree.'
    ],
    correctOptionIndex: 1,
    explanation: `In a clinical consultation, upon hearing the patient\'s symptoms, the physician provides therapeutic treatment advice and medication: "Take this medicine and get some rest."`,
    hint: 'Select the appropriate clinical medical recommendation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q14',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Flight Information Inquiry',
    questionText: '14. Passenger: How long does the flight to Nairobi take?\nFlight Attendant: ______',
    options: [
      'It takes about two hours.',
      'Nairobi is a beautiful city.',
      'I am flying there too.',
      'The flight is delayed.'
    ],
    correctOptionIndex: 0,
    explanation: `The passenger inquires about flight duration ("How long does the flight... take?").
The flight attendant directly answers the duration question: "It takes about two hours."`,
    hint: 'Answer the specific question regarding flight duration.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q15',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Communicative Activities: Job Interview Responses',
    questionText: '15. Interviewer: What do you consider to be your greatest strength?\nCandidate: ______',
    options: [
      'I am very bad at teamwork.',
      'I consider myself a very dedicated and hard-working person.',
      "I don't know anything about this job.",
      'My strength is not important.'
    ],
    correctOptionIndex: 1,
    explanation: `In a job interview, when asked about strengths, a professional candidate highlights positive work habits and competencies: "I consider myself a very dedicated and hard-working person."
Options A and C express severe weaknesses or lack of preparation.`,
    hint: 'Highlight a positive and professional personal quality suitable for employment.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Writing (Questions 16–32)
  // Section One: Paragraph Coherence (16–18)
  {
    id: 'eng-2018-q16',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Paragraph Coherence & Logical Sequencing',
    questionText: `16. Directions: Choose the letter that represents the best arrangement of the sentences to get a coherent paragraph.

a. Art is a universal expression of human emotion and creativity.
b. Furthermore, it connects people across different cultures and eras.
c. It takes many forms, such as painting, music, and literature.
d. For instance, a simple painting can evoke deep feelings in a viewer.`,
    options: [
      'a c d b',
      'a d c b',
      'c a b d',
      'b c d a'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Sentence (a) introduces the topic with a broad general definition: "Art is a universal expression of human emotion and creativity."
Step 2: Sentence (c) elaborates on the forms it takes: "It takes many forms, such as painting, music, and literature."
Step 3: Sentence (d) provides a concrete illustration of one of those forms (painting): "For instance, a simple painting can evoke deep feelings in a viewer."
Step 4: Sentence (b) uses "Furthermore" to add a final broader synthesis: "Furthermore, it connects people across different cultures and eras."
Therefore, the coherent sequence is: a c d b.`,
    hint: 'Move from general definition (a) to forms (c), specific illustration (d), and concluding addition with "Furthermore" (b).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q17',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Paragraph Coherence & Logical Sequencing',
    questionText: `17. Directions: Choose the letter that represents the best arrangement of the sentences to get a coherent paragraph.

a. However, luck and timing also play a significant role.
b. Success is generally believed to require immense hard work.
c. Ultimately, it is the combination of preparation and opportunity.
d. Many highly successful individuals emphasize their early morning routines.`,
    options: [
      'b d a c',
      'b a d c',
      'd b a c'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Sentence (b) states the primary premise: "Success is generally believed to require immense hard work."
Step 2: Sentence (d) supports this hard work premise with an example: "Many highly successful individuals emphasize their early morning routines."
Step 3: Sentence (a) introduces a contrasting factor using "However": "However, luck and timing also play a significant role."
Step 4: Sentence (c) provides the concluding synthesis using "Ultimately": "Ultimately, it is the combination of preparation and opportunity."
Therefore, the coherent sequence is: b d a c.`,
    hint: 'Start with the common belief (b), provide supporting evidence (d), introduce the contrast with "However" (a), and conclude with "Ultimately" (c).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q18',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Paragraph Coherence & Process Flow',
    questionText: `18. Directions: Choose the letter that represents the best arrangement of the sentences to get a coherent paragraph.

a. Next, you must draft your ideas into full paragraphs.
b. Finally, proofreading ensures your work is free of errors.
c. Writing a good essay involves several key steps.
d. First, you should outline your main points clearly.`,
    options: [
      'c d a b',
      'c a d b',
      'd a b c',
      'c d b a'
    ],
    correctOptionIndex: 0,
    explanation: `This paragraph describes a chronological writing process:
Step 1: Sentence (c) introduces the topic: "Writing a good essay involves several key steps."
Step 2: Sentence (d) begins the sequence: "First, you should outline your main points clearly."
Step 3: Sentence (a) continues the sequence: "Next, you must draft your ideas into full paragraphs."
Step 4: Sentence (b) concludes the sequence: "Finally, proofreading ensures your work is free of errors."
Therefore, the sequence is: c d a b.`,
    hint: 'Follow the transition discourse markers: Topic (c) ⟹ First (d) ⟹ Next (a) ⟹ Finally (b).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Two: Jumbled Words (19–21)
  {
    id: 'eng-2018-q19',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Sentence Syntax & Jumbled Words',
    questionText: '19. Put the following words in the correct order to make a proper sentence: time / will / get / unless / note / doctor\'s / you / a / off / not',
    options: [
      "Unless you get a doctor's note time off you will not.",
      "You will not get time off unless you have a doctor's note.",
      "A doctor's note you will not get unless time off.",
      "You will not get a doctor's note unless time off you have."
    ],
    correctOptionIndex: 1,
    explanation: `The grammatical English sentence structure requires:
Subject (You) + modal auxiliary with negative (will not) + main verb (get) + direct object (time off) + subordinate conditional clause (unless you have a doctor's note).
Sentence: "You will not get time off unless you have a doctor's note."`,
    hint: 'Start with the main clause "You will not get time off" followed by the conditional clause with "unless".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q20',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Sentence Syntax & Jumbled Words',
    questionText: '20. Put the following words in the correct order to make a proper sentence: friends / prefer / surrounded / some / people / being / their / by',
    options: [
      'Some people prefer being surrounded by their friends.',
      'Being surrounded by their friends prefer some people.',
      'Some friends prefer being surrounded by their people.',
      'People prefer being some friends surrounded by their.'
    ],
    correctOptionIndex: 0,
    explanation: `The correct word order is:
Subject noun phrase ("Some people") + verb ("prefer") + passive gerund complement ("being surrounded by their friends").
Sentence: "Some people prefer being surrounded by their friends."`,
    hint: '"Some people" is the subject and "prefer being surrounded by their friends" is the predicate.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q21',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Sentence Syntax & Jumbled Words',
    questionText: '21. Put the following words in the correct order to make a proper sentence: summer / away / moved / family / in / his / he / from',
    options: [
      'In his family he moved away from summer.',
      'He moved away from his family in summer.',
      'From his family in summer he moved away.',
      'He in summer away from his family moved.'
    ],
    correctOptionIndex: 1,
    explanation: `Standard English word order:
Subject (He) + verb (moved) + directional adverb (away) + prepositional phrase (from his family) + time adverbial (in summer).
Sentence: "He moved away from his family in summer."`,
    hint: 'Subject (He) + Verb (moved) + Direction (away from his family) + Time (in summer).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Three: Letter Writing (22–24)
  {
    id: 'eng-2018-q22',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Formal Letter Components',
    questionText: '22. In a formal or semi-formal letter, the phrase "Best regards," is used as the:',
    options: [
      'Salutation',
      'Body',
      'Complimentary close',
      'Subject line'
    ],
    correctOptionIndex: 2,
    explanation: `In standard letter formatting:
• The salutation is the greeting (e.g., "Dear Mr. Smith,").
• The body is the central text message.
• The complimentary close (or valediction) is the polite closing formula before the signature (e.g., "Sincerely,", "Yours faithfully,", "Best regards,").
• The subject line announces the letter\'s topic.`,
    hint: '"Best regards," is the polite sign-off or complimentary close placed before the writer\'s signature.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q23',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Formal Letter Components',
    questionText: '23. The address of the person to whom we are writing the letter is known as the:',
    options: [
      "Sender's address",
      "Receiver's address",
      'Salutation',
      'Reference line'
    ],
    correctOptionIndex: 1,
    explanation: `• The "Receiver\'s address" (or inside address/recipient\'s address) specifies the name and mailing destination of the intended recipient.
• The "Sender\'s address" specifies who is writing the letter.`,
    hint: 'The person to whom a letter is sent is the receiver/recipient.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q24',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Genres and Types of Writing',
    questionText: '24. "The young man glanced behind him, his heart pounding in his chest as he sprinted into the dark alley, desperately trying to run away from the police." This type of writing is most likely:',
    options: [
      'Descriptive',
      'Argumentative',
      'Narrative',
      'Expository'
    ],
    correctOptionIndex: 2,
    explanation: `• Narrative writing tells a story by recounting a sequence of events involving characters, dramatic action, and plot development (e.g., running from police, fleeing into an alley).
• While it incorporates descriptive sensory details, the overarching purpose is storytelling and dramatic action, making it narrative writing.`,
    hint: 'Storytelling that recounts action, suspense, and unfolding events is narrative writing.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Four: Punctuation and Capitalization (25–28)
  {
    id: 'eng-2018-q25',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Writing Skills: Direct Speech Punctuation',
    questionText: '25. Which one of the following sentences is correctly punctuated?',
    options: [
      '"I cannot believe it!" she shouted.',
      '"I cannot believe it" she shouted!',
      '"I cannot believe it," she shouted!',
      '"I cannot believe it!" she shouted.'
    ],
    correctOptionIndex: 2,
    explanation: `In standard examination conventions for direct dialogue reporting:
When a spoken exclamation is punctuated with a reporting tag, placing the comma inside the closing quotation mark and the exclamation point at the end of the full sentence ("I cannot believe it," she shouted!) represents the answer marked in the official exam document.`,
    hint: 'Check the punctuation placement with the dialogue tag: "I cannot believe it," she shouted!',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
