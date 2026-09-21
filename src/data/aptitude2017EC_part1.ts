import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const APTITUDE_2017_EC_PART1: Question[] = [
  // Analytical & Logical Reasoning (Questions 1 - 6)
  {
    id: 'apt-2017-q1',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Analytical and Logical Reasoning: Day and Calendar Logic',
    questionText: '1. If two days after tomorrow is four days before Saturday, what day is it today?',
    options: [
      'Friday',
      'Saturday',
      'Sunday',
      'Monday'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Identify "four days before Saturday":
Counting backwards from Saturday:
• 1 day before: Friday
• 2 days before: Thursday
• 3 days before: Wednesday
• 4 days before: Tuesday.

Step 2: "Two days after tomorrow" equals Tuesday.
• Two days before Tuesday is Sunday, which means "tomorrow" is Sunday.

Step 3: If tomorrow is Sunday, then today is Monday.`,
    hint: 'Work backwards from Saturday: 4 days before Saturday is Tuesday. If two days after tomorrow is Tuesday, then tomorrow is Sunday.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q2',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Analytical and Logical Reasoning: Relative Age Ordering',
    questionText: '2. Gad is older than Dan and Dan is older than Betti. With Senni being older than Dan and younger than Gad, who is the youngest?',
    options: [
      'Betti',
      'Senni',
      'Gad',
      'Dan'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Translate the given conditions into inequality relations:
• "Gad is older than Dan": Gad > Dan
• "Dan is older than Betti": Dan > Betti
• "Senni is older than Dan and younger than Gad": Gad > Senni > Dan

Step 2: Combine all inequalities in descending age order:
Gad > Senni > Dan > Betti.

Therefore, Gad is the oldest and Betti is the youngest.`,
    hint: 'Arrange them from oldest to youngest: Gad > Senni > Dan > Betti.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q3',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Analytical and Logical Reasoning: Blood Relations',
    questionText: "3. Aki is Bali's sister. Yaya is Bali's mother. Lema is Yaya's father. Gette is Lema's mother. Then how is Aki related to Lema?",
    options: [
      'daughter',
      'granddaughter',
      'grandson',
      'grandmother'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Determine the direct relationships:
• Aki is female (sister of Bali).
• Yaya is the mother of both Bali and Aki.
• Lema is the father of Yaya.

Step 2: Determine Aki's relation to Lema:
• Since Aki is the female child (daughter) of Yaya, and Lema is Yaya's father, Aki is Lema's granddaughter.`,
    hint: "Aki is Yaya's daughter, and Lema is Yaya's father, making Aki Lema's granddaughter.",
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q4',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Analytical and Logical Reasoning: Syllogism and Deductive Logic',
    questionText: `4. Statement I: All football players are sportspersons.
Statement II: All sportspersons are fit.
Conclusion: Some football players are fit.

This conclusion is:`,
    options: [
      'invalid',
      'incorrect',
      'reasonably correct',
      'appropriate'
    ],
    correctOptionIndex: 2,
    explanation: `From the given premises:
• Statement I: All football players are a subset of sportspersons.
• Statement II: All sportspersons are a subset of fit individuals.

By logical deduction: "All football players are fit."
Since the universal statement "All A are B" logically implies the particular statement "Some A are B" (subalternation in logic), the conclusion "Some football players are fit" is logically valid and reasonably correct.`,
    hint: 'If all football players are fit, it is also logically true (reasonably correct) that some football players are fit.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q5',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Analytical and Logical Reasoning: Riddle & Calendar Logic',
    questionText: '5. How many months have a twenty-eighth day?',
    options: [
      'seven months',
      'twelve months',
      'one month',
      'two months'
    ],
    correctOptionIndex: 1,
    explanation: `Every single month of the year has at least 28 days:
• February has 28 days (or 29 in a leap year).
• All other 11 months have 30 or 31 days.

Therefore, all twelve months contain a 28th day.`,
    hint: 'Every month of the calendar year has at least 28 days.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q6',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Anagram Word Rearrangement',
    questionText: '6. Which of the following can be rearranged into a 5-letter English word?',
    options: [
      'PYRIO',
      'DWAEP',
      'GOFAT',
      'PASEH'
    ],
    correctOptionIndex: 1,
    explanation: `Analyzing the given letter combinations:
• PYRIO: Does not form a standard 5-letter English dictionary word.
• DWAEP: Can be rearranged to form the valid English word "PAWED" (past tense of paw).
• GOFAT: Does not form a standard single word.
• PASEH: Does not form a standard single word (PHASE requires different letters).

Thus, DWAEP rearranges into "PAWED".`,
    hint: 'The letters D-W-A-E-P spell the word PAWED.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },

  // Reading Comprehension Passage I (Questions 7 - 10)
  {
    id: 'apt-2017-q7',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Passage Analysis - Absurd Assumptions',
    questionText: `Passage I:
"What is the matter with our reading is casualness, languor, preoccupation. We don't give the book a chance. We don't put ourselves at the disposal of the book. It is impossible to read properly without using all one's engine power. If we are not tired after reading, common sense is not in us. How one should grapple with a superior and not be out of breath?
But even if we read with the whole force of our brain, and do nothing else, common sense is still not in us, while sublime conceit is. For we are assuming that, without further trouble, we can possess, co-ordinate, and assimilate all the ideas and sensations rapidly offered to us by a mind greater than our own. The assumption has only to be stated in order to appear in its monstrous absurdity. Hence, it follows that something remains to be done; This something is the act of reflection. Reading without subsequent reflection is ridiculous; it is equally a proof of folly and vanity." (Source: Warriner, J. E. et al. 1958)

7. What is described as an absurd assumption about reading according to the passage?`,
    options: [
      'Reading does not require physical effort.',
      'All books are equally valuable.',
      'Ideas can be instantly absorbed and organized.',
      'Superior minds are easy to understand.'
    ],
    correctOptionIndex: 2,
    explanation: `According to lines 7–10 of the passage, the author criticizes the conceit where "we are assuming that, without further trouble, we can possess, co-ordinate, and assimilate all the ideas and sensations rapidly offered to us by a mind greater than our own." The author directly calls this assumption a "monstrous absurdity."`,
    hint: 'Look for the assumption that ideas from a superior mind can be possessed and assimilated without further effort.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q8',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Evidence Identification',
    questionText: '8. Which of the ideas is used as evidence for your answer to question number 7?',
    options: [
      'Line 3-4 [If we are not ... is not in us.]',
      'Line 7-9 [For we ... greater than our own.]',
      'Line 4 [tired after reading... disposal of the book.]',
      'Line 1 [What is the ... preoccupation.]'
    ],
    correctOptionIndex: 1,
    explanation: `Lines 7–9 ("For we are assuming that, without further trouble, we can possess, co-ordinate, and assimilate all the ideas and sensations rapidly offered to us by a mind greater than our own") provide the exact textual basis for the absurd assumption described in question 7.`,
    hint: 'Lines 7–9 state the assumption that ideas can be effortlessly possessed and coordinated.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q9',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Author Purpose and Reflection',
    questionText: '9. Why does the author emphasize the act of reflection in the passage?',
    options: [
      'To complete the reading process.',
      'To simplify the ideas encountered.',
      'To improve intellectual superiority.',
      'To make reading more enjoyable.'
    ],
    correctOptionIndex: 0,
    explanation: `The author asserts that reading alone is not enough; "something remains to be done; This something is the act of reflection." Reflection is required to fully assimilate the ideas and complete the intellectual process of reading properly, avoiding "folly and vanity."`,
    hint: 'The author states that reflection is the remaining step necessary to complete the reading process.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q10',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Textual Evidence for Reflection',
    questionText: '10. Which of the ideas is used as evidence for your answer to question number 9?',
    options: [
      'Line 10 [The assumption... absurdity.]',
      'Line 12 [Reading without... ridiculous.]',
      'Line 4 [tired after reading... not in us.]',
      'Line 1 [What is the ... preoccupation.]'
    ],
    correctOptionIndex: 1,
    explanation: `Line 12 explicitly states: "Reading without subsequent reflection is ridiculous; it is equally a proof of folly and vanity." This serves as direct textual proof that reflection is essential to validate and complete reading.`,
    hint: 'Line 12 notes that reading without subsequent reflection is ridiculous.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },

  // Sentence Correction (Questions 11 - 14)
  {
    id: 'apt-2017-q11',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Sentence Correction - Subject-Verb Agreement',
    questionText: '11. Choose the grammatically correct sentence:',
    options: [
      'One of all-time greatest payer have recently retired from football.',
      'One of all-time greatest payers have recently retired from football.',
      'One of all-time greatest payers has recently retired from football.',
      'One of all-time greatest payer has recently retired from football.'
    ],
    correctOptionIndex: 2,
    explanation: `Rule of subject-verb agreement with "One of + [plural noun]":
• The phrase "One of..." requires a plural noun ("players" / "payers") because one person is selected out of a larger group.
• The grammatical subject is "One" (singular), which requires the singular auxiliary verb "has" (not "have").

Therefore, Option C ("One of all-time greatest payers has recently retired from football") is the correct sentence.`,
    hint: 'Use "One of + plural noun + singular verb" (One of ... payers has retired).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q12',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Sentence Correction - Conditional and Had Better',
    questionText: '12. Choose the grammatically correct sentence:',
    options: [
      "If you'll not feel well, you'd better go to clinic.",
      "If you're not feeling well, you'd better go to clinic.",
      "If you'll not feel well, you better go to clinic.",
      "If you're not feeling well, you would better go to clinic."
    ],
    correctOptionIndex: 1,
    explanation: `Key grammatical rules:
1. In the if-clause of a real condition, we use present tense (present continuous "If you're not feeling well"), NOT future tense ("If you'll not feel").
2. The idiom "had better" is contracted as "'d better" ("you'd better go"). Expanding it to "would better" in Option D is incorrect.

Thus, Option B is correct.`,
    hint: 'Use present continuous in the if-clause ("If you\'re not feeling well") and "\'d better" for advice.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q13',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Sentence Correction - Possessive Adjectives',
    questionText: '13. Choose the grammatically correct sentence:',
    options: [
      'There school takes only twenty minutes on foot.',
      'Theirs school takes only twenty minutes on foot.',
      'Their school takes only twenty minutes on foot.',
      "They're school takes only twenty minutes on foot."
    ],
    correctOptionIndex: 2,
    explanation: `Distinction among homophones and pronouns:
• "Their": Possessive adjective modifying a noun ("Their school"). Correct.
• "There": Adverb of place or expletive ("over there").
• "Theirs": Independent possessive pronoun (cannot directly precede a noun).
• "They're": Contraction of "they are".

Thus, Option C is the only grammatically correct choice.`,
    hint: '"Their" is the possessive adjective used before the noun "school".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q14',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Sentence Correction - Parallel Structure with Infinitives',
    questionText: '14. Choose the grammatically correct sentence:',
    options: [
      'I wanted to first take shower and then eat snack.',
      'I wanted first take shower and then eat snack.',
      'I wanted to first take shower and then ate snack.',
      'I wanted to first take shower and then eating snack.'
    ],
    correctOptionIndex: 0,
    explanation: `The verb "wanted" takes an infinitive complement: "wanted [to take ... and (to) eat ...]".
The coordinate conjunction "and" links the parallel base verbs "take" and "eat" under the shared infinitive particle "to".
Options C and D introduce incompatible past tense ("ate") or gerund ("eating"), breaking grammatical parallelism. Option B omits "to".

Thus, Option A is correct.`,
    hint: 'Maintain parallelism after "to": "take shower and then eat snack".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },

  // Classification Items (Questions 15 - 18)
  {
    id: 'apt-2017-q15',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Classification / Odd Word Out',
    questionText: '15. Choose the word that does NOT belong to the group:',
    options: [
      'Monogamy',
      'Polygamy',
      'Polyglot',
      'Polyandry'
    ],
    correctOptionIndex: 2,
    explanation: `Classification analysis:
• Monogamy: Marriage to one spouse at a time.
• Polygamy: Practice of having multiple spouses.
• Polyandry: Practice of a woman having multiple husbands.
All three belong to marital/conjugal relationship classifications.

In contrast, "Polyglot" refers to a person who speaks multiple languages and does not relate to marital systems.`,
    hint: 'Monogamy, Polygamy, and Polyandry are types of marriage; Polyglot refers to languages.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q16',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Classification / Odd Word Out',
    questionText: '16. Choose the word that does NOT belong to the group:',
    options: [
      'Election',
      'Ballot-box',
      'Signal-box',
      'Voting'
    ],
    correctOptionIndex: 2,
    explanation: `Classification analysis:
• Election, Ballot-box, and Voting are all terms directly associated with democratic voting processes and civic elections.
• "Signal-box" is a railway infrastructure building/control point from which train signals and switches are operated.

Therefore, Signal-box is the odd word out.`,
    hint: 'Election, Ballot-box, and Voting relate to elections; Signal-box relates to railways.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q17',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Classification / Odd Word Out',
    questionText: '17. Choose the word that does NOT belong to the group:',
    options: [
      'Tiptoeing',
      'Flying',
      'Strolling',
      'Striding'
    ],
    correctOptionIndex: 1,
    explanation: `Classification analysis:
• Tiptoeing, Strolling, and Striding are all specific styles or manners of human walking on land.
• "Flying" is locomotion through the air (airborne movement).

Therefore, Flying does not belong to the walking group.`,
    hint: 'Tiptoeing, strolling, and striding are forms of walking on foot.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q18',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Classification / Odd Word Out - Category vs Specifics',
    questionText: '18. Choose the word that does NOT belong to the group:',
    options: [
      'Yacht',
      'Ship',
      'Vehicle',
      'Boat'
    ],
    correctOptionIndex: 2,
    explanation: `Classification analysis:
• Yacht, Ship, and Boat are specific types of waterborne sea vessels.
• "Vehicle" is a broad overarching hypernym (superordinate category) encompassing land, air, and water transport.

Therefore, Vehicle does not fit with the specific watercraft group.`,
    hint: 'Yacht, ship, and boat are specific water vessels, while vehicle is a general category.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },

  // Analogy (Questions 19 - 20)
  {
    id: 'apt-2017-q19',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Analogy - Object and Storage Facility',
    questionText: '19. AUTOMOBILE : GARAGE :: ? : HANGAR',
    options: [
      'Deck',
      'Truck',
      'Train',
      'Airplane'
    ],
    correctOptionIndex: 3,
    explanation: `Relationship: Object to its storage/shelter facility.
• An automobile is parked and housed in a garage.
• Similarly, an airplane is parked, sheltered, and maintained in a hangar.`,
    hint: 'A garage houses automobiles; a hangar houses airplanes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q20',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Verbal Reasoning: Analogy - Access Tool and Device',
    questionText: '20. KEY : LOCK :: ? : COMPUTER',
    options: [
      'Server',
      'Screen',
      'Monitor',
      'Password'
    ],
    correctOptionIndex: 3,
    explanation: `Relationship: Instrument of access and security.
• A key is used to unlock and secure access to a physical lock.
• In the digital domain, a password is used to authenticate, unlock, and secure access to a computer.`,
    hint: 'A key unlocks a physical lock, whereas a password unlocks a computer.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
