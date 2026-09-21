import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

const PASSAGE_1_CHIMPANZEES = `Section Three: Reading Passage I
Chimpanzees: Intelligent, Social and Violent

(1) Chimpanzees (Pan troglodytes), also known as chimps, are one of our closest living relatives and members of the great ape family, along with gorillas, orangutans, bonobos and humans. Chimps share 98.7% of their DNA with humans and have a lot of the same traits. They are known for being intelligent, social and violent animals that live in complex societies. Chimpanzees have suffered greatly from the increasing presence and influence of modern humans in their environment and are now threatened with extinction.

(2) How Big Is a Chimpanzee?
Chimpanzees are between 3 feet 3 inches and 5 feet 6 inches (1 to 1.7 meters) tall when standing upright like a human. However, they mostly walk on all fours using their knuckles and feet. Males are slightly bigger than females. A male can weigh up to about 154 lbs. (70 kilograms) compared with a maximum weight of about 110 lbs. (50 kg) for a female, according to the University of Michigan's Animal Diversity Web (ADW). Although currently categorized among endangered species, chimps can live up to about 50 years. They are stronger than humans, despite being smaller. In fact, they are about 1.35 times more powerful than humans as they have more fast-twitch muscle fibers, which are good for strength and speed, Live Science reported. These fast-twitch muscle fibers enable chimps to outperform people in tasks such as pulling and jumping. Humans evolved to have more slow-twitch muscle fibers that are better for endurance and traveling long distances.

(3) Do Chimpanzees Attack People?
Wild chimpanzees are usually fearful of humans and will keep their distance. However, there have been recorded incidents of chimpanzees attacking and killing people. This usually happens when humans move into and destroy chimpanzee habitats, reducing their access to food. Chimpanzees may then take to stealing unprotected human food, such as crops, and in the process become more confident around humans. Chimpanzees have attacked more than 20 people in the Western Region of Uganda over the past 20 years and killed at least three human infants since 2014, National Geographic reported in 2019. Chimpanzees typically direct their aggressive and sometimes predatory behavior toward children because the animals are more fearful of larger human adults, especially men, according to National Geographic. Chimps have also snatched and killed human babies. Most of the time these are isolated and seemingly reckless attacks by individual chimps, but one chimpanzee in the 1990s killed seven children before he was killed by humans, National Geographic reported.

Slightly adapted from Patrick Pester https://www.livescience.com/chimpanzee-facts.html`;

export const ENGLISH_2016_EC_PART1: Question[] = [
  // Section One: Vocabulary - A. Completion (1–6)
  {
    id: 'eng-2016-q1',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Industrial Manufacturing (Assembled)',
    questionText: '1. Nowadays, many vehicles are _______ in Ethiopia by importing parts from Europe or Asia. However, prices of cars are still soaring from time to time.',
    options: [
      'organized',
      'assembled',
      'prepared',
      'purchased'
    ],
    correctOptionIndex: 1,
    explanation: `• "Assembled" means putting parts together to make a finished machine or vehicle (e.g., automobile assembly plants).
• In manufacturing terminology, importing completely knocked-down (CKD) components and putting them together locally is described as vehicles being "assembled".`,
    hint: 'Putting imported parts together to produce complete vehicles is called assembling.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q2',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Theological vs Non-Religious (Secular)',
    questionText: '2. We hardly have any _______ courses in our curriculum. This college, after all, trains spiritual leaders to be assigned to the different regions of the country.',
    options: [
      'science',
      'specialty',
      'secular',
      'divine'
    ],
    correctOptionIndex: 2,
    explanation: `• "Secular" means non-religious or worldly, distinct from religious or spiritual matters.
• Since the theological college specifically trains spiritual leaders, it focuses almost entirely on religious/divine education and hardly includes any "secular" courses.`,
    hint: 'The word meaning non-religious or worldly subjects is secular.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q3',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Child Labor and Rights (Exploit)',
    questionText: '3. The government should take measures on companies that _______ children under 18 by allowing their employment with them. Such practice is globally unacceptable.',
    options: [
      'sympathize',
      'absorb',
      'entertain',
      'exploit'
    ],
    correctOptionIndex: 3,
    explanation: `• To "exploit" someone means to take unfair advantage of them or their work for one\'s own benefit, especially in an abusive or unlawful manner (such as illegal child labor).
• Therefore, companies that illegally employ minors "exploit" children.`,
    hint: 'To take unfair, unlawful advantage of vulnerable workers or children is to exploit them.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q4',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Social Equality & Civil Rights (Discrimination)',
    questionText: '4. We tolerate no _______ of any kind on our premise. Everybody is treated equally as a human being.',
    options: [
      'entertainment',
      'discrimination',
      'nepotism',
      'condemnation'
    ],
    correctOptionIndex: 1,
    explanation: `• "Discrimination" is the unjust or prejudicial treatment of different categories of people (on grounds of race, gender, ethnicity, or religion).
• The sentence emphasizes equal human treatment ("Everybody is treated equally as a human being"), indicating that "discrimination" of any kind is prohibited.`,
    hint: 'Unfair treatment of people based on prejudice is discrimination.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q5',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Distribution Adjectives (Scattered)',
    questionText: "5. My friends are _______ all over the country and I don't have any problem wherever I go. I have no worries of where to stay or what to eat.",
    options: [
      'scattered',
      'concentrated',
      'located',
      'disarrayed'
    ],
    correctOptionIndex: 0,
    explanation: `• "Scattered" means dispersed widely in various directions or locations across a large geographic area ("scattered all over the country").
• "Concentrated" would mean clustered in one single spot.
• Therefore, "scattered" is the appropriate descriptive adjective.`,
    hint: 'Spread across various distant locations throughout the country means scattered.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q6',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Interruption and Chaos (Disrupted)',
    questionText: '6. The noise made by a group of revolting students _______ our discussion and we had to call the police.',
    options: [
      'endangered',
      'blocked',
      'disrupted',
      'stifled'
    ],
    correctOptionIndex: 2,
    explanation: `• To "disrupt" an event or discussion means to interrupt its normal progress or flow by causing disturbance or disorder.
• Noise and commotion caused the meeting to be "disrupted".`,
    hint: 'To interrupt or disturb the progress of a meeting or activity is to disrupt it.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section One: B. Substitution (7–12)
  {
    id: 'eng-2016-q7',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Development Terms (Viable)',
    questionText: '7. Unless VIABLE solutions are sought for our development problems, the people will keep suffering under poverty. So, let us get together and find the way out. (Choose the best substitute for the capitalized word)',
    options: [
      'productive',
      'sustainable',
      'sensible',
      'promotable'
    ],
    correctOptionIndex: 1,
    explanation: `• "Viable" in the context of economic development means capable of working successfully, feasible, and sustainable over the long term.
• "Sustainable" is the closest synonymous term used in economic and development planning.`,
    hint: 'A viable long-term solution in socioeconomic development is a sustainable solution.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q8',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Social Exclusion (Alienated / Stigmatized)',
    questionText: '8. AIDS patients used to be ALIENATED for having HIV in their blood. Today, however, things have changed and they are treated like any healthy person. (Choose the best substitute for the capitalized word)',
    options: [
      'stigmatized',
      'involved',
      'preserved',
      'disappointed'
    ],
    correctOptionIndex: 0,
    explanation: `• To be "alienated" in a social or health context means to be isolated, shunned, or treated with prejudice and social disapproval.
• "Stigmatized" directly corresponds to this condition of being branded, shunned, and discriminated against due to a medical condition.`,
    hint: 'Being socially excluded and discriminated against due to an illness is being stigmatized.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q9',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Military Collocations (Opened an attack / Launched)',
    questionText: '9. The troop OPENED AN ATTACK on the enemy in a bid to capture the garrison. I know it is not going to take long. (Choose the best substitute for the capitalized phrase)',
    options: [
      'realized',
      'designed',
      'launched',
      'dropped'
    ],
    correctOptionIndex: 2,
    explanation: `• The established military idiom for beginning or executing an offensive strike is to "launch an attack" (equivalent to "open an attack").
• Therefore, "launched" is the exact substitute.`,
    hint: 'The military phrase for starting or executing an attack is to launch an attack.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q10',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Teamwork & Cooperation (Combined effort / Synergy)',
    questionText: '10. It appears the COMBINED EFFORT exerted by the team significantly contributed to their success. In fact, we need to take a lesson and reshape our strategy. (Choose the best substitute for the capitalized phrase)',
    options: [
      'power',
      'dismay',
      'disarray',
      'synergy'
    ],
    correctOptionIndex: 3,
    explanation: `• "Synergy" is the interaction or cooperation of two or more organizations, substances, or agents to produce a combined effect greater than the sum of their separate parts.
• Thus, a productive "combined effort" by a team is referred to as "synergy".`,
    hint: 'The cooperative combined effort that yields great collective output is synergy.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q11',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Perseverance & Endeavor (Trying hard / Struggling)',
    questionText: '11. They kept TRYING HARD to bring him to the position of chairmanship. Unfortunately, however, members chose someone else so much unexpected. (Choose the best substitute for the capitalized phrase)',
    options: [
      'struggling',
      'propagating',
      'working',
      'manipulating'
    ],
    correctOptionIndex: 0,
    explanation: `• "Trying hard" with determination against obstacles is synonymous with "struggling" or striving vigorously.
• In this context, "struggling" conveys the strenuous, contested effort to achieve a leadership position.`,
    hint: 'Striving or exerting continuous forceful effort against challenges means struggling.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q12',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Diplomatic Assemblies (Meeting / Summit)',
    questionText: '12. The AU MEETING to be held next month is expected to pass resolutions pertaining to the relationship between the two warring parties. We are looking forward to it. (Choose the best substitute for the capitalized phrase)',
    options: [
      'cluster',
      'seminar',
      'mediation',
      'summit'
    ],
    correctOptionIndex: 3,
    explanation: `• A high-level conference or official diplomatic meeting between heads of state or governmental leaders (such as the African Union assembly) is formally termed a "summit".`,
    hint: 'A high-level conference of international leaders or heads of state is a summit.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section One: C. Analogy (13–14)
  {
    id: 'eng-2016-q13',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Analogies (Antonym Pairs)',
    questionText: '13. Clean : Dirty :: Controlled : _______',
    options: [
      'Stagnant',
      'Expanded',
      'Rampant',
      'Extended'
    ],
    correctOptionIndex: 2,
    explanation: `• Relationship: "Clean" is the antonym of "Dirty".
• Therefore, we need the antonym of "Controlled" (kept under restraint or limits).
• "Rampant" means flourishing or spreading unchecked, uncontrolled, or unrestrained.
• Hence, Controlled is to Rampant as Clean is to Dirty.`,
    hint: 'Look for the antonym of "controlled" (unrestrained, spreading unchecked).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q14',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Vocabulary: Analogies (Tool to its Primary Function)',
    questionText: '14. Pen : Write :: Rubber : _______',
    options: [
      'Eliminate',
      'Sweep',
      'Remove',
      'Erase'
    ],
    correctOptionIndex: 3,
    explanation: `• Relationship: A pen is an instrument whose primary functional purpose is to write.
• Analogously, a rubber (eraser) is an instrument whose primary functional purpose is to erase markings.
• Therefore, Rubber is to Erase as Pen is to Write.`,
    hint: 'A pen is used to write; a rubber (eraser) is used to erase.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Two: Sentence Comprehension (15–16)
  {
    id: 'eng-2016-q15',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Comprehension: Idiomatic Negation ("Anything but")',
    questionText: '15. Choose the sentence with the closest meaning to the head sentence:\n"Whether you go this time of the year is your decision but the weather is anything but sunny."',
    options: [
      'You can go there this year and enjoy the weather.',
      'The weather this time is terrible.',
      'The weather this time is not sunny at all.',
      'The weather is very sunny and could be warm.'
    ],
    correctOptionIndex: 2,
    explanation: `• The English idiom "anything but [X]" is an emphatic negative expression meaning "not at all [X]" or "the opposite of [X]".
• Thus, "the weather is anything but sunny" means the weather is definitely not sunny at all.`,
    hint: 'The idiom "anything but" means "definitely not" or "not at all".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q16',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Comprehension: Inverted Third Conditional Paraphrase',
    questionText: '16. Choose the sentence with the closest meaning to the head sentence:\n"Had we met him when he came, we could have convinced him."',
    options: [
      "Unfortunately we didn't meet him.",
      'We were away when he came.',
      'We were able to convince him.',
      "I am happy we didn't meet him."
    ],
    correctOptionIndex: 0,
    explanation: `• The inverted Third Conditional ("Had we met him...") describes a counterfactual past hypothesis (an unreal past scenario).
• It implies the real past fact: we did NOT meet him, and consequently we were unable to convince him.
• Option A accurately expresses this underlying reality: "Unfortunately we didn't meet him."`,
    hint: 'A third conditional expresses an unreal past condition; the actual reality is that we did not meet him.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Three: Reading Passage I - Chimpanzees (17–25)
  {
    id: 'eng-2016-q17',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Taxonomy of Hominidae (Great Apes)',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n17. Which one of the following sentences, according to the passage, is true about the great ape family?`,
    options: [
      'Chimps are the most intelligent of all members of its family group.',
      'Chimps are closer to humans than any other living relative.',
      'Except chimps, other apes close to humans have gone extinct.',
      'In terms of family categorization, humans do not differ from apes.'
    ],
    correctOptionIndex: 1,
    explanation: `Paragraph 1 states: "Chimpanzees (Pan troglodytes), also known as chimps, are one of our closest living relatives and members of the great ape family... Chimps share 98.7% of their DNA with humans..."
This confirms that chimps are our closest living relatives among the great apes.`,
    hint: 'Review paragraph 1 regarding DNA similarity and closest living evolutionary relatives.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q18',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Pronoun Antecedent Analysis',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n18. Who does 'our' as used in Paragraph 1 Line 1 refer to?`,
    options: [
      'The writers',
      'Friends talking',
      'Chimps',
      'Human beings'
    ],
    correctOptionIndex: 3,
    explanation: `Paragraph 1 opens: "Chimpanzees... are one of our closest living relatives... Chimps share 98.7% of their DNA with humans..."
Here, "our closest living relatives" is written from the scientific standpoint of Homo sapiens, referring directly to "Human beings".`,
    hint: 'The author writes from the perspective of human beings comparing DNA with chimps.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q19',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Identifying Contradictory Traits',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n19. What could be taken as contradictory about chimps in the passage, in Paragraph 1?`,
    options: [
      'That chimps and humans belong to the same family.',
      'That chimps live in complex societies but are just apes.',
      'That chimps are intelligent and social but violent.',
      'That chimps are apes but still share a lot with humans.'
    ],
    correctOptionIndex: 2,
    explanation: `Paragraph 1 explicitly notes: "They are known for being intelligent, social and violent animals that live in complex societies."
Being highly intelligent and social while simultaneously exhibiting severe violence represents a notable behavioral contradiction.`,
    hint: 'Look at the combination of behavioral traits: intelligent, social, and violent.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q20',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Chimpanzee-Human Interactions',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n20. Which one of the following sentences best describes the relationship of chimps with humans?`,
    options: [
      'Wild chimps are fearful of humans and do not attack.',
      'Chimps can leave their habitats in the interest of humans.',
      'Chimps can kill if humans get into their territory.',
      'It is usual for chimps to steal unprotected human food.'
    ],
    correctOptionIndex: 2,
    explanation: `Paragraph 3 explains: "Wild chimpanzees are usually fearful of humans and will keep their distance. However, there have been recorded incidents of chimpanzees attacking and killing people. This usually happens when humans move into and destroy chimpanzee habitats..."
When humans encroach upon and destroy chimpanzee territory, chimps can attack and kill.`,
    hint: 'Attacks and killings typically occur when humans move into and disrupt chimp habitats.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q21',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Regional Incident Analysis (Uganda)',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n21. Which one of the following is true about chimpanzees in the Western Region of Uganda?`,
    options: [
      'They attack children more than they do adults.',
      'When stealing food, they become more confident than humans.',
      'They obviously kill one person per year.',
      'They are aggressive and usually attack human beings.'
    ],
    correctOptionIndex: 0,
    explanation: `Paragraph 3 states: "Chimpanzees have attacked more than 20 people in the Western Region of Uganda... Chimpanzees typically direct their aggressive and sometimes predatory behavior toward children because the animals are more fearful of larger human adults, especially men..."
This verifies that attacks are targeted more toward children than adults.`,
    hint: 'Chimps fear larger human adults and thus direct aggressive attacks toward children.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q22',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Behavioral Interpretation (Predatory Behavior)',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n22. What does 'predatory behavior' as used in Paragraph 3 mean?`,
    options: [
      'Killing and eating human beings.',
      'Being afraid of larger human beings.',
      'Attacking individual children consistently.',
      'Taking advantage of vulnerable situations.'
    ],
    correctOptionIndex: 3,
    explanation: `• In the context of paragraph 3, the passage explains that chimps are fearful of adult men and selectively target helpless human babies and children when opportunities arise.
• Thus, predatory behavior here refers to opportunistically taking advantage of vulnerable, defenseless targets and situations.`,
    hint: 'Targeting helpless, defenseless children when opportunities arise means taking advantage of vulnerability.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q23',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Quantitative Average Height Calculation',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n23. How tall could an average chimpanzee be when standing upright?`,
    options: [
      'Around 5 feet 3 inches',
      'Around 4 feet 4.5 inches',
      'Around 4 feet 7 inches',
      'Around 4 feet 2 inches'
    ],
    correctOptionIndex: 1,
    explanation: `Paragraph 2 states: "Chimpanzees are between 3 feet 3 inches and 5 feet 6 inches tall when standing upright..."
• 3 feet 3 inches = 39 inches.
• 5 feet 6 inches = 66 inches.
• Average = (39 + 66) / 2 = 105 / 2 = 52.5 inches.
• Converting 52.5 inches to feet and inches: 52.5 / 12 = 4 feet with 4.5 inches remaining.
• Thus, the mathematical average height is exactly around 4 feet 4.5 inches.`,
    hint: 'Calculate the midpoint between 3 ft 3 in (39 inches) and 5 ft 6 in (66 inches).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q24',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Physical Comparisons in Paragraph 2',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n24. According to Paragraph 2, which one of the following is true about chimps?`,
    options: [
      'Chimpanzees are more powerful, but smaller than human beings.',
      'These days, most chimpanzees live as long as human beings do.',
      'Female chimpanzees do not weigh as much as human beings do.',
      'Chimps are now given special attention so they grow in number.'
    ],
    correctOptionIndex: 0,
    explanation: `Paragraph 2 states: "They are stronger than humans, despite being smaller. In fact, they are about 1.35 times more powerful than humans as they have more fast-twitch muscle fibers..."
This directly proves that chimpanzees are more powerful, despite being smaller than human beings.`,
    hint: 'Paragraph 2 highlights that chimps are 1.35 times more powerful than humans despite being smaller.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q25',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Institutional Dedication (ADW Mission)',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n25. What can we deduce from Paragraph 2 about the mission of the University of Michigan's Animal Diversity Web (ADW)?`,
    options: [
      'It specializes in chimps and has comprehensive information on them.',
      'It is among the top institutions in the world that studies the apes family.',
      'It offers courses on various animals found in different parts of the world.',
      'It provides information on different animal species to foster comparisons.'
    ],
    correctOptionIndex: 3,
    explanation: `Paragraph 2 cites the Animal Diversity Web (ADW) for comparative weight metrics between male and female primates, and comparative physiology across animal species.
Its overarching mission is to catalog and disseminate rich biological data on diverse animal taxa to foster comparative zoological understanding.`,
    hint: 'An "Animal Diversity Web" database compiles comparative species data.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
