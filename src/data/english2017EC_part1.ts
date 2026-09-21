import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

const PASSAGE_1_IMMIGRATION = `Section Three: Reading Passage I
Immigration

(1) Migration takes many forms. People migrate as manual workers, highly qualified specialists, entrepreneurs, refugees or as family members of previous migrants. Whether the initial intention is temporary or permanent movement, many migrants become settlers. Migration has been part of human history from the earliest times, but it has grown in volume and significance, and may be one of the most important factors in global change.

(2) No single cause can explain why people choose to leave their country and settle in another. It is hardly ever a simple individual action, in which a person decides to move in search of a better life, leaves the home country and quickly becomes assimilated into the new country. Much more often, the process of migration and settlement stretches over a long period, affecting the rest of the migrant's life and also later generations. It is a collective action, caused by social change and affecting the whole society of both countries.

(3) While some theories about migration emphasize individual choice, and others focus on the influence of governments and business, it is more realistic to understand migration in terms of a complex interaction among all these elements. Large-scale institutional factors, such as international relations, political economy and government policies, play a part in any decision to emigrate, as do the informal social networks, practices, and beliefs of the migrants themselves.

(4) Migration generally arises from the existence of previous links between home and new countries, based on colonization, political influence, trade, investment or cultural ties. For instance, migration from some North and West African countries to France is linked to earlier French colonization, leaving French as a major language of the countries concerned.

(5) Typically, migration is started by an external factor, such as a shortage of labor in the new country. Once the initial movement is by young people, usually men. Once a path has been established, relatives and friends follow, and are assisted by those already there. Social networks based on family or a common place of origin help to provide housing, work, assistance in coping with bureaucratic procedures and support in personal difficulties. These social networks make the process of migration safer and more manageable for the migrants and their families.

(6) Migrant groups develop their own social and economic infrastructure: places of worship, associations, shops, cafes, lawyers, doctors, and other services. This is linked to families being reunited; the longer the original migrants stay, the more likely they are to bring their partners and children in, or to start new families. People begin to see their life as being based in the new country. This is particularly true of migrants' children: once they go to school in the new country, learn the language and make friends, it becomes more and more difficult for the parents to return to their homeland.

(7) While the links between immigrant community and area of origin may sometimes be weakened, they are more likely to continue over generations. Family and cultural links remain, and new business links may be developed.

Source: Slightly adapted from Self-Study Students' Book (2006) by Michael Black and Wendy Sharp: Cambridge University Press.`;

export const ENGLISH_2017_EC_PART1: Question[] = [
  // Section One: Vocabulary - A. Completion (1–6)
  {
    id: 'eng-2017-q1',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Financial Terminology (Banking vs Investment)',
    questionText: '1. An economist will advise you to invest your money in some kind of business instead of putting it in the bank because the ______ you earn on it at the end of the month is very small.',
    options: [
      'amount',
      'interest',
      'profit',
      'dividend'
    ],
    correctOptionIndex: 1,
    explanation: `• "Interest" is the specific financial term for money paid regularly at a particular rate for the use of money lent, or for delaying the repayment of a debt, or earned on money deposited in a bank savings account.
• "Profit" is made from business operations, and "dividend" is paid to company shareholders.
Therefore, "interest" is the correct word.`,
    hint: 'Money earned on a bank savings deposit is called interest.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q2',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Addiction and Cessation (Withdrawal)',
    questionText: '2. He used to smoke cigarettes when he was younger but the ______ time was long; it took him years to stop it completely.',
    options: [
      'decision',
      'smoking',
      'withdrawal',
      'thinking'
    ],
    correctOptionIndex: 2,
    explanation: `• "Withdrawal" refers to the process of ceasing to take an addictive substance (such as nicotine in cigarettes) and the associated period of physical and psychological adjustment.
• The sentence refers to the prolonged process of quitting: "the withdrawal time was long; it took him years to stop it completely."`,
    hint: 'The period or process of quitting an addictive substance is referred to as withdrawal.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q3',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Phrasal Verbs (Run out of)',
    questionText: '3. He has spent all his money in a couple of days. Now, he ______ money.',
    options: [
      'runs out of',
      'saves',
      'gets',
      'gets rid of'
    ],
    correctOptionIndex: 0,
    explanation: `• The phrasal verb "run out of" means to exhaust one's supply of something, so that none is left.
• Because he spent all his money in a couple of days, he has exhausted his funds: "he runs out of money."`,
    hint: 'To completely exhaust or have no remaining supply of something is to run out of it.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q4',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Advanced Adjectives (Omnipresent)',
    questionText: '4. Owing to the surveillance camera, it is possible to say that the manager is ______ in every corner of the organization.',
    options: [
      'dictator',
      'omnipresent',
      'absent',
      'democrat'
    ],
    correctOptionIndex: 1,
    explanation: `• "Omnipresent" means present everywhere at the same time; ubiquitous.
• Because surveillance cameras monitor every corner, the manager effectively has eyes everywhere and is "omnipresent".
• Furthermore, the sentence structure requires a predicate adjective following "is": "omnipresent" fits grammatically and semantically.`,
    hint: 'The adjective meaning "present everywhere at all times" is omnipresent.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q5',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Educational Allocation (Allotted)',
    questionText: '5. In our English courses, plenty of time has been ______ to learning grammar, which shows that the less emphasis given to some of the practical skills.',
    options: [
      'spent',
      'allotted',
      'allowed',
      'provided'
    ],
    correctOptionIndex: 1,
    explanation: `• "Allotted" means distributed, assigned, or designated as a share or for a particular purpose (e.g., time allotted to an academic subject or curriculum topic).
• While "spent" requires "on" (spent on learning), "allotted" correctly collocates with "to": "allotted to learning grammar."`,
    hint: 'The verb that pairs with the preposition "to" to mean designated or allocated is allotted.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q6',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Complex Concepts (Elusive)',
    questionText: "6. The word 'Democracy' is an ______ term which cannot be defined easily.",
    options: [
      'elaborated',
      'explained',
      'elusive',
      'enlarged'
    ],
    correctOptionIndex: 2,
    explanation: `• "Elusive" means difficult to capture, define, grasp, or pin down conceptually.
• Since democracy is complex, multifaceted, and hard to define easily, it is described as an "elusive" term.`,
    hint: 'An adjective that describes something difficult to define or grasp is elusive.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section One: B. Substitution (7–12)
  {
    id: 'eng-2017-q7',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Synonyms (Compulsory)',
    questionText: '7. In some countries, national service is COMPULSORY to every citizen. (Choose the best substitute for the capitalized word)',
    options: [
      'necessary',
      'complementary',
      'voluntary',
      'obligatory'
    ],
    correctOptionIndex: 3,
    explanation: `• "Compulsory" means required by law, regulation, or a rule; mandatory.
• "Obligatory" is its exact direct synonym, meaning legally or morally binding and required.
• "Voluntary" is its opposite (antonym).`,
    hint: 'Something required by legal mandate or duty is obligatory.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q8',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Medical Terminology (Diagnosis)',
    questionText: '8. The doctor prescribed the wrong medicine to the patient due to faulty DIAGNOSIS. (Choose the best substitute for the capitalized word)',
    options: [
      'examination',
      'information',
      'treatment',
      'consultation'
    ],
    correctOptionIndex: 0,
    explanation: `• "Diagnosis" is the identification of the nature of an illness or other problem by examination of the symptoms.
• In this clinical context, "examination" is the closest synonym corresponding to the clinical assessment process.`,
    hint: 'Medical diagnosis involves the clinical examination and identification of a condition.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q9',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Moral & Emotional Qualities (Compassion)',
    questionText: '9. Despite the suffering of the victims in the Middle East, the world has never shown COMPASSION. (Choose the best substitute for the capitalized word)',
    options: [
      'kindness',
      'negotiation',
      'cruelty',
      'diplomacy'
    ],
    correctOptionIndex: 0,
    explanation: `• "Compassion" is sympathetic pity and concern for the sufferings or misfortunes of others, accompanied by benevolence or kindness.
• Among the choices, "kindness" is the direct synonym.`,
    hint: 'Compassion means sympathetic pity, empathy, and kindness.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q10',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Phrasal Verbs (Search / Look for)',
    questionText: '10. There are thousands of people in the stadium and parents should SEARCH their own children on time before the crowd disperses. (Choose the best substitute for the capitalized word)',
    options: [
      'find out',
      'look into',
      'go out',
      'look for'
    ],
    correctOptionIndex: 3,
    explanation: `• To "search" for someone or something means to attempt to locate them.
• "Look for" is the direct phrasal verb synonym meaning to search or seek.
• "Look into" means to investigate; "find out" means to discover information.`,
    hint: 'To search for someone is to "look for" them.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q11',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Environmental Synonyms (Conservation)',
    questionText: '11. CONSERVATION of the environment should be a priority for both developed and developing countries. (Choose the best substitute for the capitalized word)',
    options: [
      'modernization',
      'preservation',
      'utilization',
      'consumption'
    ],
    correctOptionIndex: 1,
    explanation: `• "Conservation" is the protection, preservation, or careful management of the environment, natural resources, and wildlife.
• "Preservation" is the direct synonym meaning keeping safe from harm, destruction, or decay.`,
    hint: 'Conservation of nature is preservation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q12',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Religious Synonyms (Sacred)',
    questionText: "12. In the Ethiopian religious culture, the Bible and the Qur'an are SACRED Scriptures. (Choose the best substitute for the capitalized word)",
    options: [
      'secular',
      'religious',
      'holy',
      'worldly'
    ],
    correctOptionIndex: 2,
    explanation: `• "Sacred" means connected with God or dedicated to a religious purpose; deserving veneration.
• "Holy" is the exact synonym used for revered divine texts and scriptures.
• "Secular" and "worldly" are antonyms (meaning non-religious).`,
    hint: 'Sacred scriptures are holy scriptures.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section One: C. Analogy (13–14)
  {
    id: 'eng-2017-q13',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Analogies (Individual to Collective Group)',
    questionText: '13. Tree :: Woods :: Animal : ______',
    options: [
      'Oxen',
      'Herd',
      'Wildlife',
      'Calves'
    ],
    correctOptionIndex: 1,
    explanation: `• Relationship: A collection/group of trees forms a wood/woods.
• Analogous relationship: A group or collection of animals moving together forms a "herd".
Therefore, Tree is to Woods as Animal is to Herd.`,
    hint: 'Individual to collective group: Many trees make woods; many animals make a herd.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q14',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Vocabulary: Analogies (Antonym Pairs)',
    questionText: '14. Invaluable :: Worthless :: Enthusiastic : ______',
    options: [
      'Emotional',
      'Unrealistic',
      'Indifferent',
      'Energetic'
    ],
    correctOptionIndex: 2,
    explanation: `• Relationship: "Invaluable" (extremely valuable, beyond price) is the opposite of "Worthless" (having no value). This is an antonym relationship.
• To complete the analogy, we need the antonym of "Enthusiastic" (showing intense eagerness or interest).
• The opposite of enthusiastic is "Indifferent" (having no interest, unconcerned, or apathetic).`,
    hint: 'The analogy is based on antonyms. What is the opposite of enthusiastic?',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Two: Sentence Comprehension (15–16)
  {
    id: 'eng-2017-q15',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Comprehension: Prepositional Exclusion (All... but)',
    questionText: '15. Choose the sentence with the closest meaning to the head sentence:\n"All the students but Daniel failed the grammar test."',
    options: [
      'Daniel is an exceptionally good student and passes all the time.',
      "The test was so hard that even Daniel couldn't pass it.",
      'Only Daniel passed the grammar test.',
      'All the students failed the test, including Daniel.'
    ],
    correctOptionIndex: 2,
    explanation: `• In English syntax, "All... but [person]" means "all except [person]".
• Therefore, every student failed except Daniel, which means Daniel was the sole person who did not fail (he passed).
• Hence: "Only Daniel passed the grammar test."`,
    hint: '"All but Daniel failed" means everyone failed except Daniel.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q16',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Comprehension: Participial Phrases',
    questionText: '16. Choose the sentence with the closest meaning to the head sentence:\n"Born in Addis Ababa, Hagos is a well-known artist."',
    options: [
      'Hagos is a well-known artist and has children born in Addis Ababa.',
      'Hagos is a well-known artist because he was born in Addis Ababa.',
      'Hagos was born in Addis Ababa and is a well-known artist.',
      'Children born in Addis Ababa like Hagos are well-known artists.'
    ],
    correctOptionIndex: 2,
    explanation: `• The past participial modifier "Born in Addis Ababa" describes the subject "Hagos".
• It states two factual coordinate attributes about Hagos: he was born in Addis Ababa, and he is a well-known artist.
• It does not state a cause-and-effect relationship (Option B is incorrect).
• Option C accurately combines both facts without altering meaning.`,
    hint: 'The sentence gives two facts about Hagos: his birthplace and his profession.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Three: Reading Passage I (Immigration) (17–25)
  {
    id: 'eng-2017-q17',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Contextual Vocabulary (Ties)',
    questionText: `${PASSAGE_1_IMMIGRATION}\n\n17. What is the contextual meaning of the word 'ties' in paragraph 4?`,
    options: [
      'similarities',
      'conflicts',
      'relations',
      'barriers'
    ],
    correctOptionIndex: 2,
    explanation: `Paragraph 4 states: "Migration generally arises from the existence of previous links between home and new countries, based on colonization, political influence, trade, investment or cultural ties."
Here, "ties" refers to connections, bonds, or relations between nations.`,
    hint: 'In international contexts, cultural or economic ties mean relations.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q18',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Detail Identification in Paragraph 2',
    questionText: `${PASSAGE_1_IMMIGRATION}\n\n18. According to the information in paragraph 2, which of the following is true?`,
    options: [
      'Migrants have similar reasons for leaving their homeland.',
      'It is the individual migrant who usually makes the decision to migrate.',
      'The country that receives immigrants can only benefit from the new arrivals.',
      "A migrant's decision to migrate affects not only his/her own life but also that of his/her family."
    ],
    correctOptionIndex: 3,
    explanation: `Paragraph 2 states: "Much more often, the process of migration and settlement stretches over a long period, affecting the rest of the migrant's life and also later generations. It is a collective action, caused by social change and affecting the whole society of both countries."
This affirms that a migrant's decision extends beyond the individual to affect family and future generations.`,
    hint: 'Paragraph 2 highlights that migration affects the migrant\'s life and later generations/family.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q19',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Contextual Vocabulary (Assimilated)',
    questionText: `${PASSAGE_1_IMMIGRATION}\n\n19. What does the word 'assimilated' in the phrase, "...quickly becomes assimilated into the new country" (paragraph 2) mean?`,
    options: [
      'isolated by',
      'part of',
      'lost into',
      'swallowed by'
    ],
    correctOptionIndex: 1,
    explanation: `To become "assimilated" into a new society means to absorb and integrate into the cultural tradition and community, effectively becoming an accepted part of that society.
Therefore, "part of" best represents the contextual meaning.`,
    hint: 'To be assimilated into a new society means to become integrated and part of it.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q20',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Stated Facts in Paragraph 5',
    questionText: `${PASSAGE_1_IMMIGRATION}\n\n20. It is stated in paragraph 5 that:`,
    options: [
      'earlier migrants usually provide assistance to the new comers.',
      'there is little cooperation among migrants coming from the same area.',
      'young women are always the ones that migrate first.',
      'migration is rarely initiated by shortage of labor in the new country.'
    ],
    correctOptionIndex: 0,
    explanation: `Paragraph 5 states: "Once a path has been established, relatives and friends follow, and are assisted by those already there. Social networks based on family or a common place of origin help to provide housing, work, assistance in coping with bureaucratic procedures..."
This directly proves that earlier migrants provide assistance to new arrivals.`,
    hint: 'Review paragraph 5 regarding how relatives and friends are assisted by those already there.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q21',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Main Ideas in Paragraph 1',
    questionText: `${PASSAGE_1_IMMIGRATION}\n\n21. Which of the following is true, according to the information in paragraph 1?`,
    options: [
      'Most people migrate due to political problems in their own countries.',
      'Most migrants stay in the new country for good.',
      'The reasons for migration are varied.',
      'Migration is a recent phenomenon in human history.'
    ],
    correctOptionIndex: 2,
    explanation: `Paragraph 1 states: "Migration takes many forms. People migrate as manual workers, highly qualified specialists, entrepreneurs, refugees or as family members of previous migrants."
This demonstrates that the reasons and forms of migration are diverse and varied.`,
    hint: 'Paragraph 1 emphasizes that migration takes many different forms and diverse motivations.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q22',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Pro-Verb Substitution (do)',
    questionText: `${PASSAGE_1_IMMIGRATION}\n\n22. Which of the following words or phrases can replace the word 'do' in the phrase "... as do the informal social networks..." (paragraph 3)?`,
    options: [
      'focus on',
      'understand',
      'emphasize',
      'play a part'
    ],
    correctOptionIndex: 3,
    explanation: `Looking at the full sentence in paragraph 3:
"Large-scale institutional factors... play a part in any decision to emigrate, as do the informal social networks..."
The auxiliary verb "do" is a pro-verb substituting for the preceding verb phrase "play a part". Thus, informal social networks also play a part.`,
    hint: '"Do" acts as an ellipsis replacing the earlier verb phrase "play a part".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q23',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Pronoun Reference Analysis',
    questionText: `${PASSAGE_1_IMMIGRATION}\n\n23. What does the pronoun 'they' refer to in the phrase "...once they go to school..." (paragraph 6)?`,
    options: [
      "migrants' children",
      "migrants' friends",
      'migrants',
      'people'
    ],
    correctOptionIndex: 0,
    explanation: `In paragraph 6, the sentence reads:
"This is particularly true of migrants' children: once they go to school in the new country, learn the language and make friends, it becomes more and more difficult for the parents to return to their homeland."
"They" directly refers to "migrants' children".`,
    hint: 'Look at the antecedent preceding the colon in paragraph 6: "migrants\' children: once they go to school...".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q24',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Inferences in Paragraph 4',
    questionText: `${PASSAGE_1_IMMIGRATION}\n\n24. Which one of the following is true based on the information in paragraph 4?`,
    options: [
      'A history of colonization is one of the reasons for migration.',
      'Colonizers push people from their former colonies to migrate.',
      'Former colonizers made it difficult for people to migrate into their country.',
      'All countries in West and North Africa speak French as their mother tongue due to colonization.'
    ],
    correctOptionIndex: 0,
    explanation: `Paragraph 4 states: "Migration generally arises from the existence of previous links between home and new countries, based on colonization, political influence, trade, investment or cultural ties."
This confirms that historical colonial links form one of the reasons/pathways for migration.`,
    hint: 'Paragraph 4 links migration patterns to earlier colonization and cultural ties.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2017-q25',
    subject: 'English',
    year: '2017 E.C.',
    topic: 'Reading Comprehension: Broad Passage Inferences',
    questionText: `${PASSAGE_1_IMMIGRATION}\n\n25. Which of the following can be inferred from the reading passage?`,
    options: [
      'People who migrate are not patriotic.',
      'Migration is not always a consequence of oppression.',
      'We can stop migration by enhancing democracy in every country.',
      'People will stop migrating in the near future.'
    ],
    correctOptionIndex: 1,
    explanation: `The passage explains that people migrate for many different reasons: as highly qualified specialists, entrepreneurs, manual workers, and family members, often driven by labor demands or trade links.
Therefore, migration is not exclusively driven by political oppression; it is not always a consequence of oppression.`,
    hint: 'People migrate for diverse economic, family, and professional reasons, not only oppression.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
