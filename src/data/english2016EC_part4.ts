import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const ENGLISH_2016_EC_PART4: Question[] = [
  // Section Five: Communicative Activities (81–100)
  {
    id: 'eng-2016-q81',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Asking for and Giving Advice',
    questionText: `81. Complete the conversation:
Kidus: I'm really struggling to balance my exam revision schedule across seven subjects. What do you think I should do?
Marta: _______`,
    options: [
      'If I were you, I would design a structured daily timetable prioritizing weaker topics first.',
      'Revision is completely unnecessary if you paid attention in class.',
      'Why don\'t you simply skip studying the subjects you find difficult?',
      'Examinations are set by the educational assessment agency.'
    ],
    correctOptionIndex: 0,
    explanation: `• Kidus asks for advice on managing his revision load across multiple subjects.
• Marta provides constructive, polite advice using the standard conditional formula: "If I were you, I would...".`,
    hint: 'Use the standard advice formula "If I were you, I would..." with constructive practical advice.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q82',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Polite Requests (Would you mind...?)',
    questionText: `82. Complete the conversation:
Passenger: Excuse me, would you mind lowering the window slightly? The bus is getting quite warm.
Driver: _______`,
    options: [
      'Yes, I mind a lot.',
      'Not at all, go right ahead.',
      'Why do you always complain about warm air?',
      'The windows are manufactured from tempered glass.'
    ],
    correctOptionIndex: 1,
    explanation: `• When replying affirmatively to polite requests framed with "Would you mind...?", answering "Not at all" or "No, of course not" indicates that you do not object and willingly grant permission.`,
    hint: 'Answering "Not at all" to "Would you mind...?" means "I don\'t mind; you are free to do so."',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q83',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Expressing Sympathy and Condolences',
    questionText: `83. Complete the conversation:
Almaz: I received some terrible news this morning; my grandmother passed away peacefully in Harar.
Tadesse: _______`,
    options: [
      'Congratulations on hearing from your family.',
      'I am so deeply sorry for your loss; please accept my heartfelt condolences.',
      'People pass away every single day across the world.',
      'Are you planning to travel to Harar by airplane or bus?'
    ],
    correctOptionIndex: 1,
    explanation: `• When someone shares grief over the bereavement of a family member, the socially appropriate and empathetic response is expressing sincere condolences: "I am so deeply sorry for your loss; please accept my heartfelt condolences."`,
    hint: 'Respond to news of bereavement with words of sympathy and condolence.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q84',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Diplomatic Disagreement',
    questionText: `84. Complete the conversation:
Tolosa: Digital online learning will completely replace traditional physical classrooms within two years.
Hana: _______ Physical interaction with instructors and lab experiments remain irreplaceable.`,
    options: [
      'I couldn\'t agree more with your assessment.',
      'I see where you\'re coming from, but I\'m afraid I have to disagree.',
      'That is the most brilliant prediction I have ever heard.',
      'You are entirely right without question.'
    ],
    correctOptionIndex: 1,
    explanation: `• Hana introduces a counterargument ("Physical interaction... remain irreplaceable"), showing polite disagreement.
• "I see where you're coming from, but I'm afraid I have to disagree" is the standard diplomatic formula for expressing disagreement.`,
    hint: 'Hana disagrees with Tolosa\'s extreme prediction, so choose the polite disagreement response.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q85',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Hotel Room Reservation',
    questionText: `85. Complete the conversation:
Guest: Good afternoon. I\'d like to book a quiet double room for three nights starting next Thursday.
Receptionist: _______`,
    options: [
      'Certainly, sir. Let me check our availability system for those dates.',
      'Why didn\'t you arrive yesterday instead?',
      'Hotels in this city are generally quite busy on weekends.',
      'You can sleep in any unoccupied room you find.'
    ],
    correctOptionIndex: 0,
    explanation: `• Professional hotel hospitality requires welcoming customer booking inquiries politely and checking reservation schedules: "Certainly, sir. Let me check our availability system for those dates."`,
    hint: 'Choose the courteous, professional response appropriate for a hotel front desk receptionist.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q86',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Telephone Etiquette (Taking a Message)',
    questionText: `86. Complete the conversation:
Caller: Hello, could I speak with Engineer Daniel, please?
Secretary: I\'m afraid he\'s in an executive management meeting right now. _______
Caller: Yes, please. Could you ask him to call Biruk regarding the structural blueprint?`,
    options: [
      'Can you call back when he is less busy?',
      'Would you like to leave a message for him?',
      'Why are you calling his office phone number?',
      'He never answers phone calls in the morning.'
    ],
    correctOptionIndex: 1,
    explanation: `• When the requested party is unavailable, professional telephone protocol dictates offering to take a message: "Would you like to leave a message for him?". The caller confirms: "Yes, please...".`,
    hint: 'The caller replies "Yes, please...", so the secretary must have asked if they would like to leave a message.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q87',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Expressing Preference (Would rather)',
    questionText: `87. Complete the conversation:
Bethlehem: Shall we take a taxi to the cultural hall, or would you like to take the express bus?
Dawit: _______ I find the scenic walking path much more refreshing in the cool afternoon breeze.`,
    options: [
      'I\'d actually rather walk if you don\'t mind.',
      'Taxis are manufactured in several different countries.',
      'Bus fares have increased significantly across all lines.',
      'I always take the bus to work every single day.'
    ],
    correctOptionIndex: 0,
    explanation: `• Dawit explains why walking is more refreshing ("I find the scenic walking path much more refreshing...").
• His response politely states his preference using "would rather": "I'd actually rather walk if you don't mind."`,
    hint: 'Dawit explains the benefits of walking in the next sentence, so he expresses a preference to walk.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q88',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Asking for Repetition and Clarification',
    questionText: `88. Complete the conversation:
Lecturer: The thermodynamic entropy of an isolated system never decreases over time according to the Second Law.
Student: _______ The acoustic echo in the lecture theater made that difficult to hear.`,
    options: [
      'That sounds like common knowledge to everyone.',
      'Pardon me, Professor, could you please repeat that last statement?',
      'I have memorized all laws of modern physics.',
      'Why are you teaching thermodynamics today?'
    ],
    correctOptionIndex: 1,
    explanation: `• The student notes that the room's echo prevented them from hearing properly.
• The standard polite request for repetition in academic discourse is: "Pardon me, Professor, could you please repeat that last statement?"`,
    hint: 'Look for a polite request asking the professor to repeat what was said.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q89',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Giving Warnings and Enforcing Safety Rules',
    questionText: `89. Complete the conversation:
Intern: Can I handle the concentrated nitric acid bottles without wearing rubber safety gloves?
Lab Supervisor: _______ You must always wear protective gloves, safety goggles, and a lab coat!`,
    options: [
      'Absolutely not! That is strictly prohibited and extremely dangerous.',
      'Yes, it is entirely up to your personal discretion.',
      'Nitric acid is a common reagent in secondary schools.',
      'Safety equipment is stored in the wooden storage cabinet.'
    ],
    correctOptionIndex: 0,
    explanation: `• The supervisor enforces laboratory safety protocols against handling concentrated acid bare-handed.
• "Absolutely not! That is strictly prohibited and extremely dangerous" clearly communicates strong prohibition and hazard warning.`,
    hint: 'Handling concentrated acid without gloves is dangerous and strictly prohibited.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q90',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Responding to Expressions of Gratitude',
    questionText: `90. Complete the conversation:
Rahel: Thank you ever so much for tutoring me in organic chemistry; I passed the entrance exam with great marks!
Robel: _______ I'm truly delighted to see your hard work pay off!`,
    options: [
      'Don\'t mention it, it was a pleasure!',
      'You must pay me back immediately.',
      'Organic chemistry is a challenging branch of science.',
      'I don\'t like chemistry at all.'
    ],
    correctOptionIndex: 0,
    explanation: `• The standard, gracious response to sincere expressions of gratitude is "Don't mention it, it was a pleasure!" or "You are most welcome!".`,
    hint: '"Don\'t mention it, it was a pleasure!" is the customary warm response to "Thank you".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q91',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Medical Consultation with a Doctor',
    questionText: `91. Complete the conversation:
Doctor: Good morning, Mrs. Aster. What seems to be the trouble today?
Patient: _______`,
    options: [
      'Hospitals should recruit more specialist physicians.',
      'I\'ve had a severe throbbing headache and a persistent high fever for three days.',
      'Medicine was invented many centuries ago.',
      'I work as a senior accountant at a private commercial bank.'
    ],
    correctOptionIndex: 1,
    explanation: `• When a medical doctor asks "What seems to be the trouble today?", the patient describes their physical symptoms and complaints: "I've had a severe throbbing headache and a persistent high fever for three days."`,
    hint: 'The patient must answer the doctor by describing their medical symptoms.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q92',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Inquiring about Public Transportation',
    questionText: `92. Complete the conversation:
Commuter: Excuse me, how frequently does the Light Rail train arrive at this station during peak hours?
Transit Officer: _______`,
    options: [
      'The train was constructed through international bilateral cooperation.',
      'They typically arrive every six to eight minutes during morning peak periods.',
      'You must purchase your paper ticket before boarding.',
      'Light rail transit is powered by electricity from national grids.'
    ],
    correctOptionIndex: 1,
    explanation: `• The commuter asks about train frequency ("how frequently does the train arrive...?").
• The transit officer answers directly with arrival intervals: "They typically arrive every six to eight minutes during morning peak periods."`,
    hint: 'Answer the question about frequency with the time intervals between arriving trains.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q93',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Expressing Certainty and Confidence',
    questionText: `93. Complete the conversation:
Semir: Are you confident our school team will triumph in the inter-school science innovation contest?
Blen: _______ Our automated solar irrigation model outperformed every other prototype during regional trials.`,
    options: [
      'I have serious reservations and doubt our chances completely.',
      'Without a shadow of a doubt, I am absolutely certain we will win.',
      'Contests are hosted annually across regional state capitals.',
      'Science fairs were established several decades ago.'
    ],
    correctOptionIndex: 1,
    explanation: `• Blen cites evidence of prior trial dominance ("outperformed every other prototype"), demonstrating complete confidence and certainty.
• "Without a shadow of a doubt, I am absolutely certain we will win" expresses emphatic certainty matching the context.`,
    hint: 'Blen provides strong proof that their model is the best, showing total certainty.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q94',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Apologizing and Accepting Apologies',
    questionText: `94. Complete the conversation:
Colleague: I am terribly sorry for arriving late to our project briefing; heavy traffic along Ring Road was completely gridlocked.
Team Leader: _______ The critical agenda items haven\'t started yet.`,
    options: [
      'That\'s quite alright, don\'t worry about it at all.',
      'You should never use Ring Road ever again.',
      'Traffic congestion is a consequence of urban population growth.',
      'I refuse to listen to any of your explanations.'
    ],
    correctOptionIndex: 0,
    explanation: `• When accepting a courteous apology gracefully, especially when no harm was done, the appropriate conversational formula is: "That's quite alright, don't worry about it at all."`,
    hint: 'Choose the polite, understanding acceptance of an apology.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q95',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Congratulating on Academic Success',
    questionText: `95. Complete the conversation:
Yared: Guess what! I received a letter of full scholarship admission to study Software Engineering at university!
Friend: _______ That is phenomenal news; you truly earned it!`,
    options: [
      'Software engineering requires a capable laptop.',
      'Hearty congratulations to you, my friend!',
      'Universities usually charge high tuition fees.',
      'Are you sure the admission letter is authentic?'
    ],
    correctOptionIndex: 1,
    explanation: `• When a peer shares triumphant academic news like winning a full university scholarship, the standard response is heartfelt congratulations: "Hearty congratulations to you, my friend!".`,
    hint: 'Congratulate the friend warmly on their scholarship achievement.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q96',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Making a Polite Customer Complaint',
    questionText: `96. Complete the conversation:
Customer: Excuse me, waiter. _______ I explicitly ordered roasted vegetables without any dairy or butter.
Waiter: My sincere apologies, madam. I will take this back to the chef and have it remade for you immediately.`,
    options: [
      'You are the worst server in this entire restaurant.',
      'I\'m afraid there has been a mix-up with my dish;',
      'Vegetables are nutritious and contain vitamins.',
      'I always eat dinner at seven o\'clock in the evening.'
    ],
    correctOptionIndex: 1,
    explanation: `• In polite English discourse, complaints are softened using phrases like "I'm afraid there has been a mix-up with my dish..." before specifying the discrepancy constructively.`,
    hint: 'Polite complaints begin with polite softening expressions like "I\'m afraid there has been a mix-up...".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q97',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Offering and Accepting Assistance',
    questionText: `97. Complete the conversation:
Abinet: Those reference textbooks look exceptionally heavy. Shall I give you a hand carrying them up to the library?
Hiwot: _______ That is so kind and thoughtful of you!`,
    options: [
      'Yes, please, I would really appreciate that!',
      'Books are printed on durable paper.',
      'The library closes at five o\'clock sharp.',
      'No, books should never be touched by anyone.'
    ],
    correctOptionIndex: 0,
    explanation: `• Hiwot responds enthusiastically to the helpful offer ("That is so kind and thoughtful of you!").
• The natural polite acceptance is: "Yes, please, I would really appreciate that!".`,
    hint: 'Accept the kind offer of help with "Yes, please, I would really appreciate that!".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q98',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Asking for and Giving Street Directions',
    questionText: `98. Complete the conversation:
Tourist: Pardon me, could you tell me how to get to the National Museum from here?
Local Resident: _______`,
    options: [
      'The National Museum houses the famous Lucy hominid fossil.',
      'Walk two blocks straight ahead, take a left at the post office, and you will see the museum entrance on your right.',
      'Museums are educational institutions of cultural preservation.',
      'Addis Ababa has several museums located in different sub-cities.'
    ],
    correctOptionIndex: 1,
    explanation: `• The tourist asks for navigational directions ("could you tell me how to get to...?").
• The local resident gives clear step-by-step spatial directions: "Walk two blocks straight ahead, take a left at the post office, and you will see the museum entrance on your right."`,
    hint: 'Provide clear, step-by-step navigational directions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q99',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Discussing Career and University Plans',
    questionText: `99. Complete the conversation:
Guidance Counselor: What academic field do you intend to pursue once you complete your national examinations?
Student: _______`,
    options: [
      'I am planning to specialize in Civil Engineering because I want to design sustainable transport infrastructure.',
      'Engineering is a difficult field that requires several years of intense study.',
      'Universities across Ethiopia admit thousands of freshmen each year.',
      'Secondary school was established many years ago.'
    ],
    correctOptionIndex: 0,
    explanation: `• The counselor asks about the student\'s personal academic and career aspirations.
• The student directly articulates their goal and motivation: "I am planning to specialize in Civil Engineering because I want to design sustainable transport infrastructure."`,
    hint: 'State the chosen career field and the personal motivation for choosing it.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q100',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Communication: Expressing Surprise and Amazement',
    questionText: `100. Complete the conversation:
Nebiyu: You won\'t believe this, but our village primary school was named the best performing public school in the entire zone!
Abebe: _______ That is truly an astounding and inspiring achievement!`,
    options: [
      'Really? Wow, that\'s incredible!',
      'Zonal administrations manage several districts.',
      'Schools require books, desks, and blackboards.',
      'I went to school when I was seven years old.'
    ],
    correctOptionIndex: 0,
    explanation: `• Nebiyu shares surprising and uplifting news ("You won't believe this...").
• Abebe responds with genuine astonishment and joy: "Really? Wow, that's incredible!", followed by praise.`,
    hint: 'Express surprise and delight with "Really? Wow, that\'s incredible!".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
