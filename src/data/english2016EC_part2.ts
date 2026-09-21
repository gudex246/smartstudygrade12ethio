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

const PASSAGE_2_ROAD_SAFETY = `Section Three: Reading Passage II
Road Safety and Traffic Accidents in Developing Nations

(1) Road traffic injuries represent a major global public health crisis and a leading cause of death and disability. Paradoxically, while low- and middle-income developing countries possess only approximately 60% of the world's registered motor vehicles, they account for disproportionately more than 90% of global road traffic fatalities. In rapidly urbanizing nations such as Ethiopia, the expansion of road networks and escalating vehicle numbers have not been accompanied by a corresponding growth in traffic safety awareness, rigorous vehicle inspections, or comprehensive pedestrian infrastructure.

(2) Epidemiological research reveals that road traffic accidents do not affect all population groups equally. Vulnerable road users—specifically pedestrians, cyclists, and riders of motorized two- and three-wheelers—bear the brunt of traffic collisions. In urban centers like Addis Ababa, pedestrians constitute over 70% of total accident casualties. This tragic imbalance stems from several interrelated factors: the scarcity of dedicated pedestrian walkways, inadequate street lighting, reckless speeding, non-compliance with zebra crossings, and pedestrians crossing multi-lane expressways amidst heavy vehicular flow.

(3) Human behavior remains the predominant contributing factor in vehicular crashes. Speeding, driving under the influence of alcohol or narcotics, mobile phone distractions while steering, and driver fatigue caused by excessively long working shifts without adequate rest are frequently documented by traffic police investigations. Furthermore, a substantial proportion of commercial freight trucks and public transport minibuses operate with mechanical defects, including worn-out tires and degraded braking systems, compounding the hazard on winding mountain roads and inter-regional corridors.

(4) Mitigating this devastating socio-economic burden requires an integrated "Safe System" approach rather than piecemeal measures. Governments must enforce stringent traffic laws regarding speed limits, seatbelt usage, and helmet wearing without exception. Concurrently, transport authorities must invest in robust road geometry engineering, construct safe pedestrian footbridges, mandate strict automated motor vehicle roadworthiness certifications, and conduct relentless educational campaigns across schools and media platforms. Only through concerted institutional dedication can preventable loss of young human lives on our roadways be eliminated.`;

export const ENGLISH_2016_EC_PART2: Question[] = [
  // Passage I Questions continued (26–28)
  {
    id: 'eng-2016-q26',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Causes of Chimpanzee Attacks (Paragraph 3)',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n26. According to Paragraph 3, under what circumstances are wild chimpanzees most likely to attack human beings?`,
    options: [
      'When humans enter and destroy their natural habitats, causing food shortages.',
      'When chimps are captured and kept in scientific research laboratories.',
      'When adult male humans challenge their authority in the wild.',
      'When chimps migrate into urban cities during the cold winter season.'
    ],
    correctOptionIndex: 0,
    explanation: `• Paragraph 3 explicitly states: "This usually happens when humans move into and destroy chimpanzee habitats, reducing their access to food. Chimpanzees may then take to stealing unprotected human food... and become more confident around humans."
• Therefore, habitat destruction and food scarcity are the direct causes of attacks.`,
    hint: 'Look at Paragraph 3 for what happens when humans move into chimps\' living areas and destroy their food sources.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q27',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Pronoun Reference (Paragraph 3)',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n27. In Paragraph 3, the pronoun "he" in the phrase "...before he was killed by humans..." refers to:`,
    options: [
      'a human baby',
      'a human adult male',
      'a particular male chimpanzee',
      'a researcher from National Geographic'
    ],
    correctOptionIndex: 2,
    explanation: `• The sentence states: "...one chimpanzee in the 1990s killed seven children before he was killed by humans..."
• The pronoun "he" refers back to the antecedent "one chimpanzee" (the specific rogue male chimpanzee responsible for the attacks).`,
    hint: 'Trace who killed the seven children before being killed by humans.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q28',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Contextual Vocabulary (Reckless)',
    questionText: `${PASSAGE_1_CHIMPANZEES}\n\n28. In Paragraph 3, the word "reckless" in "...isolated and seemingly reckless attacks..." is closest in meaning to:`,
    options: [
      'carefully planned',
      'wild and careless of danger or consequences',
      'gentle and playful',
      'defensive and justified'
    ],
    correctOptionIndex: 1,
    explanation: `• "Reckless" means heedless of consequences, rash, careless, or impulsive.
• In the context of unpredictable primate aggression toward humans, it describes rash, wild attacks without rational calculation.`,
    hint: 'Reckless behavior is impulsive, dangerous, and careless of consequences.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Passage II Questions (29–35)
  {
    id: 'eng-2016-q29',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Global Road Traffic Disparity (Paragraph 1)',
    questionText: `${PASSAGE_2_ROAD_SAFETY}\n\n29. According to Paragraph 1, what paradox exists regarding road traffic injuries globally?`,
    options: [
      'High-income countries have higher fatality rates despite possessing safer modern vehicles.',
      'Developing nations account for over 90% of traffic fatalities despite owning only around 60% of vehicles.',
      'Urban centers experience fewer road casualties than remote rural areas.',
      'Bicycle riders cause more fatal accidents than commercial transport trucks.'
    ],
    correctOptionIndex: 1,
    explanation: `• Paragraph 1 highlights the striking paradox: "while low- and middle-income developing countries possess only approximately 60% of the world's registered motor vehicles, they account for disproportionately more than 90% of global road traffic fatalities."`,
    hint: 'Look for the statistical disparity between vehicle ownership and death rates in Paragraph 1.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q30',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Vulnerable Road Users (Paragraph 2)',
    questionText: `${PASSAGE_2_ROAD_SAFETY}\n\n30. Based on Paragraph 2, which category of road users suffers the highest proportion of casualties in Addis Ababa?`,
    options: [
      'Commercial long-distance bus drivers',
      'Pedestrians',
      'Traffic police officers',
      'Passengers in private luxury automobiles'
    ],
    correctOptionIndex: 1,
    explanation: `• Paragraph 2 specifically notes: "In urban centers like Addis Ababa, pedestrians constitute over 70% of total accident casualties."
• Thus, pedestrians are by far the most severely impacted category.`,
    hint: 'Check the percentage statistic mentioned for Addis Ababa in Paragraph 2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q31',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Infrastructure Deficiencies (Paragraph 2)',
    questionText: `${PASSAGE_2_ROAD_SAFETY}\n\n31. Which of the following is NOT mentioned in Paragraph 2 as a reason for the high vulnerability of pedestrians?`,
    options: [
      'Lack of dedicated pedestrian walkways and sidewalks',
      'Inadequate street lighting along urban corridors',
      'Excessive speed of motor vehicles and zebra-crossing violations',
      'A complete national ban on imported private automobiles'
    ],
    correctOptionIndex: 3,
    explanation: `• Paragraph 2 explicitly mentions scarcity of walkways, poor lighting, reckless speeding, and non-compliance with zebra crossings.
• A "complete national ban on imported private automobiles" is never mentioned and is false.`,
    hint: 'Identify which statement is completely fabricated and absent from the text.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q32',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Human Factors in Accidents (Paragraph 3)',
    questionText: `${PASSAGE_2_ROAD_SAFETY}\n\n32. According to Paragraph 3, what is identified as the predominant contributing factor in vehicular crashes?`,
    options: [
      'Extreme unseasonal weather storms',
      'Human behavioral errors and driver negligence',
      'Poor manufacturing of foreign vehicle brands',
      'Excessive wild animal migration across roads'
    ],
    correctOptionIndex: 1,
    explanation: `• Paragraph 3 opens with: "Human behavior remains the predominant contributing factor in vehicular crashes", followed by examples such as speeding, drunk driving, phone distraction, and driver fatigue.`,
    hint: 'Paragraph 3 highlights behavior such as speeding, intoxication, and distraction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q33',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Pronoun Reference (Paragraph 1)',
    questionText: `${PASSAGE_2_ROAD_SAFETY}\n\n33. In Paragraph 1, the pronoun "they" in "...they account for disproportionately more than 90%..." refers to:`,
    options: [
      'registered motor vehicles',
      'low- and middle-income developing countries',
      'road traffic injuries',
      'high-income developed countries'
    ],
    correctOptionIndex: 1,
    explanation: `• In Paragraph 1: "...while low- and middle-income developing countries possess only approximately 60% of the world's registered motor vehicles, they account for disproportionately more than 90%..."
• "They" clearly refers to "low- and middle-income developing countries".`,
    hint: 'Look at the subject of the contrast clause right before the comma.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q34',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Vocabulary in Context (Stringent)',
    questionText: `${PASSAGE_2_ROAD_SAFETY}\n\n34. In Paragraph 4, the word "stringent" in "enforce stringent traffic laws" is closest in meaning to:`,
    options: [
      'lenient and flexible',
      'strict, rigorous, and precise',
      'temporary and optional',
      'outdated and obsolete'
    ],
    correctOptionIndex: 1,
    explanation: `• "Stringent" means strict, demanding, rigorous, and strictly enforced (e.g., stringent safety regulations).
• The context calls for strict enforcement of laws regarding speed limits and seatbelts.`,
    hint: '"Stringent" laws are rigorous, strict, and firmly upheld.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q35',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Reading Comprehension: Author Purpose and Proposed Solutions',
    questionText: `${PASSAGE_2_ROAD_SAFETY}\n\n35. What is the primary purpose of the author in Passage II?`,
    options: [
      'To discourage all citizens from ever driving motor vehicles.',
      'To praise the mechanical quality of imported commercial minibuses.',
      'To highlight the severity of traffic fatalities and advocate for an integrated Safe System approach.',
      'To argue that pedestrian sidewalks are unnecessary in modern city planning.'
    ],
    correctOptionIndex: 2,
    explanation: `• The author delineates the severe scale of road casualties in developing nations and concludes in Paragraph 4 by proposing an integrated "Safe System" encompassing engineering, enforcement, and education.`,
    hint: 'The author aims to present the crisis and call for multifaceted safety interventions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Four: Language Focus / Grammar (36–62)
  {
    id: 'eng-2016-q36',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Conditional Sentences (Type 3 / Unreal Past)',
    questionText: '36. If you _______ me your arrival schedule earlier, I would have driven to the bus terminal to pick you up.',
    options: [
      'sent',
      'had sent',
      'have sent',
      'would send'
    ],
    correctOptionIndex: 1,
    explanation: `• Third conditional structure expresses counterfactual or hypothetical past situations:
  If + past perfect (had + past participle), ... would have + past participle.
• Since the main clause has "would have driven", the if-clause must take "had sent".`,
    hint: 'Type 3 conditional: If + had + past participle, ... would have + V3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q37',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Inverted Conditionals (Had + Subject + V3)',
    questionText: '37. _______ to the financial advisor\'s recommendations, the company would not be facing bankruptcy today.',
    options: [
      'Had the manager listened',
      'If the manager listened',
      'Should the manager listen',
      'Were the manager listening'
    ],
    correctOptionIndex: 0,
    explanation: `• In formal English, conditional if-clauses can be inverted by omitting "if" and beginning with the auxiliary verb.
• "Had the manager listened" is the inverted form of "If the manager had listened" (mixed conditional: past action with present consequence).`,
    hint: 'Inverted third/mixed conditional replaces "If the manager had listened" with "Had the manager listened".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q38',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Passive Voice with Future Intention',
    questionText: '38. A state-of-the-art regional referral hospital _______ in Hawassa by the federal health authorities next year.',
    options: [
      'will be constructed',
      'is constructing',
      'has been constructing',
      'will construct'
    ],
    correctOptionIndex: 0,
    explanation: `• The hospital is the receiver of the action (it cannot construct itself), requiring the passive voice: "will be constructed".
• "Next year" indicates future time reference, making "will be constructed" the accurate grammatical form.`,
    hint: 'The subject "hospital" cannot build itself, so use the passive voice for future: will be + V3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q39',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Causative Verbs (Have someone do something)',
    questionText: '39. The school director had the chief technician _______ all computer laboratory systems before the national exam commenced.',
    options: [
      'inspected',
      'to inspect',
      'inspect',
      'inspecting'
    ],
    correctOptionIndex: 2,
    explanation: `• The active causative structure with "have" is:
  Subject + have (any tense) + person + bare infinitive (base form of verb).
• "The director had the chief technician inspect..." takes the bare infinitive "inspect" without "to".`,
    hint: 'Active causative with "have someone" takes the bare infinitive without "to".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q40',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Past Perfect Tense (Action prior to past reference)',
    questionText: '40. By the time the fire brigade reached the commercial warehouse, the raging blaze _______ most of the stored textile merchandise.',
    options: [
      'destroys',
      'has destroyed',
      'had destroyed',
      'was destroyed'
    ],
    correctOptionIndex: 2,
    explanation: `• When two past actions are related by "by the time + simple past", the earlier completed event must be in the past perfect (had + past participle).
• "Had destroyed" shows that the destruction happened before the firefighters arrived.`,
    hint: 'Use the past perfect (had + V3) for an action completed before another past event.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q41',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Present Perfect Continuous (Ongoing duration)',
    questionText: '41. Dr. Senait _______ research on geothermal energy sources in the Ethiopian Rift Valley for the last seven years.',
    options: [
      'is conducting',
      'has been conducting',
      'had been conducted',
      'conducts'
    ],
    correctOptionIndex: 1,
    explanation: `• The present perfect continuous ("has been conducting") is used for an activity that began in the past, has continued continuously, and is still ongoing up to the present.
• The time expression "for the last seven years" signals duration connecting to the present.`,
    hint: 'An ongoing action starting in the past and continuing into the present with "for..." takes the present perfect continuous.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q42',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Future Perfect Tense (Completion by future target)',
    questionText: '42. By the end of this academic year, all Grade 12 students _______ their university entrance examinations.',
    options: [
      'will have sat for',
      'sat for',
      'have been sitting for',
      'will be sat for'
    ],
    correctOptionIndex: 0,
    explanation: `• "By the end of + future time" requires the Future Perfect tense (will have + past participle).
• It indicates an action that will be completed prior to a specific deadline in the future.`,
    hint: 'Clauses introduced by "By + future time" take the future perfect: will have + V3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q43',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Modal Verbs of Past Deduction (Must have + V3)',
    questionText: '43. Look at all the puddles of water and the wet green lawns outside! It _______ heavily during the night.',
    options: [
      'should rain',
      'must have rained',
      'might rain',
      'can have rained'
    ],
    correctOptionIndex: 1,
    explanation: `• "Must have + past participle" expresses a logical conclusion or deduction about a past event based on strong, undeniable present evidence (the puddles and wet grass).`,
    hint: 'When present physical evidence makes a past occurrence virtually certain, use "must have + V3".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q44',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Modal Verbs of Negative Past Deduction (Can\'t / Couldn\'t have)',
    questionText: '44. Yohannes _______ at the staff meeting yesterday because he was undergoing surgery at St. Paul\'s Hospital all morning.',
    options: [
      'couldn\'t have been',
      'mustn\'t have been',
      'shouldn\'t be',
      'might have been'
    ],
    correctOptionIndex: 0,
    explanation: `• "Couldn't have been" (or "can't have been") expresses negative logical impossibility in the past.
• Since he was having surgery at the hospital, it was physically impossible for him to attend the staff meeting.`,
    hint: 'To express that something was impossible in the past based on facts, use "couldn\'t have + V3".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q45',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Modals of Obligation and Duty (Ought to)',
    questionText: '45. Every citizen _______ respect the national constitution and uphold the rule of law unconditionally.',
    options: [
      'ought to',
      'ought',
      'would rather',
      'had better to'
    ],
    correctOptionIndex: 0,
    explanation: `• "Ought to" expresses moral obligation, duty, and civic correctness followed by a base verb.
• "Ought" requires "to", and "had better" takes a bare infinitive without "to", making "ought to" the only correct option.`,
    hint: '"Ought" must be accompanied by "to" to express moral obligation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q46',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Relative Pronouns (Possessive - Whose)',
    questionText: '46. We met a prominent agricultural scientist _______ groundbreaking hybrid seed innovation won an African Union award.',
    options: [
      'whom',
      'whose',
      'which',
      'who\'s'
    ],
    correctOptionIndex: 1,
    explanation: `• "Whose" is the possessive relative pronoun modifying the noun "innovation" belonging to the scientist.
• "Who's" is a contraction for "who is" or "who has", which is incorrect here.`,
    hint: 'Use the possessive relative pronoun "whose" to show ownership of the innovation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q47',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Prepositional Relative Clauses (In which / On which)',
    questionText: '47. The international summit _______ the bilateral climate agreement was signed took place in Nairobi.',
    options: [
      'at which',
      'to which',
      'for which',
      'on which'
    ],
    correctOptionIndex: 0,
    explanation: `• One attends or signs an agreement "at a summit" or "at a conference".
• When the preposition is fronted before the relative pronoun, the correct collocation is "at which the bilateral climate agreement was signed".`,
    hint: 'Think of the preposition normally used with "summit": "at the summit" -> "at which".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q48',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Concession Connectors (Despite / In spite of)',
    questionText: '48. _______ facing severe macroeconomic headwinds, the newly established startup recorded a remarkable profit in its first fiscal quarter.',
    options: [
      'Although',
      'Despite',
      'Even though',
      'Whereas'
    ],
    correctOptionIndex: 1,
    explanation: `• "Despite" is a preposition followed directly by a noun phrase or a gerund phrase ("facing severe macroeconomic headwinds").
• "Although" and "even though" must introduce a full subject-verb clause.`,
    hint: '"Despite" is followed by a gerund (-ing phrase) or noun phrase without a finite verb clause.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q49',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Clauses of Purpose (So that / In order that)',
    questionText: '49. The regional government constructed modern irrigation canals _______ rural farmers could harvest crops twice every year.',
    options: [
      'so that',
      'in order to',
      'so as to',
      'because of'
    ],
    correctOptionIndex: 0,
    explanation: `• "So that" introduces an adverbial clause of purpose containing a subject and modal verb ("rural farmers could harvest").
• "In order to" and "so as to" are followed directly by base infinitives, not full subject-verb clauses.`,
    hint: 'Use "so that" when followed by a complete clause with subject + modal verb (could harvest).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q50',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Transitions of Result and Cause (Consequently / Therefore)',
    questionText: '50. The transport union members refused to accept the revised salary guidelines; _______, they decided to stage a peaceful demonstration.',
    options: [
      'consequently',
      'nevertheless',
      'on the contrary',
      'even though'
    ],
    correctOptionIndex: 0,
    explanation: `• "Consequently" (meaning as a result / therefore) expresses the logical consequence of rejecting the revised guidelines.
• "Nevertheless" and "on the contrary" indicate contrast, which does not fit the cause-and-effect relationship.`,
    hint: 'Choose the transitional adverb indicating a direct result or consequence.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q51',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Phrasal Verbs (Put off / Call off)',
    questionText: '51. Because several key delegates were unable to travel due to flight cancellations, the bilateral negotiation was _______ until next Monday.',
    options: [
      'called off',
      'put off',
      'broken off',
      'given off'
    ],
    correctOptionIndex: 1,
    explanation: `• "Put off" means to postpone or reschedule to a later time ("until next Monday").
• "Called off" means cancelled permanently. Since a new date (next Monday) is specified, "put off" is the correct phrasal verb.`,
    hint: 'To postpone an event to a later date is to "put off" (whereas "call off" means to cancel).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q52',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Phrasal Verbs Followed by Gerund (Look forward to)',
    questionText: '52. After four years of rigorous university study, all prospective graduates are looking forward to _______ their degrees at the graduation ceremony.',
    options: [
      'receive',
      'receiving',
      'have received',
      'be received'
    ],
    correctOptionIndex: 1,
    explanation: `• In the phrasal verb "look forward to", "to" is a preposition (not an infinitive marker).
• Prepositions must be followed by a gerund (noun form in -ing): "looking forward to receiving".`,
    hint: '"Look forward to" is followed by a gerund (-ing form), not a bare infinitive.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q53',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Gerunds after Specific Verbs (Admit / Deny / Avoid)',
    questionText: '53. During the police interrogation, the suspect admitted _______ confidential bank credentials from the database.',
    options: [
      'to steal',
      'stealing',
      'stolen',
      'steal'
    ],
    correctOptionIndex: 1,
    explanation: `• The verb "admit" is conventionally followed by a gerund (-ing form): "admitted stealing".
• Using a to-infinitive after "admit" in this context is ungrammatical.`,
    hint: 'Verbs like admit, deny, avoid, and enjoy are followed by a gerund (-ing).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q54',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Verb Complementation (Stop to do vs Stop doing)',
    questionText: '54. On their long drive from Bahir Dar to Gondar, the tour group stopped _______ photographs of the scenic mountain gorge.',
    options: [
      'taking',
      'to take',
      'taken',
      'take'
    ],
    correctOptionIndex: 1,
    explanation: `• "Stop + to-infinitive" means pausing or interrupting an activity in order to do something else (purpose).
• "Stop + gerund" means halting or quitting an ongoing habit/activity.
• The tourists interrupted their drive in order to take photos, so "stopped to take" is correct.`,
    hint: 'Stopping in order to perform an action requires "to + base verb".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q55',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Question Tags (Indefinite Pronouns - Nobody)',
    questionText: '55. Nobody in the lecture auditorium understood the complex theoretical proof, _______?',
    options: [
      'didn\'t they',
      'did they',
      'did he',
      'didn\'t he'
    ],
    correctOptionIndex: 1,
    explanation: `• "Nobody" is grammatically negative, so the tag must be affirmative ("did").
• Indefinite pronouns referring to persons (nobody, someone, everybody) take the plural pronoun "they" in question tags: "did they?".`,
    hint: 'Negative subjects like "nobody" take an affirmative question tag with the pronoun "they".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q56',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Question Tags with Suggestions (Let\'s)',
    questionText: '56. Let\'s review all the vocabulary flashcards one more time before the test starts, _______?',
    options: [
      'will you',
      'shall we',
      'don\'t we',
      'do we'
    ],
    correctOptionIndex: 1,
    explanation: `• Suggestions initiated with "Let's" (let us) always take the standard question tag "shall we?".`,
    hint: 'Sentences beginning with "Let\'s" take "shall we?" as their question tag.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q57',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Quantifiers (Few vs A few)',
    questionText: '57. The newly implemented public hygiene policy was an extraordinary success; _______ citizens reported cases of waterborne illnesses this rainy season.',
    options: [
      'a few',
      'few',
      'a little',
      'little'
    ],
    correctOptionIndex: 1,
    explanation: `• "Few" has a negative meaning (almost none, hardly any) used with countable plural nouns ("citizens").
• Since the policy was an "extraordinary success", almost nobody fell ill, which requires the negative quantifier "few".`,
    hint: '"Few" means hardly any or almost none with countable nouns, fitting the success context.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q58',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Negative Inversion (Hardly had... when)',
    questionText: '58. Hardly _______ into the exam hall when the proctor instructed everyone to turn over the test booklet.',
    options: [
      'had the candidates entered',
      'the candidates had entered',
      'have the candidates entered',
      'did the candidates enter'
    ],
    correctOptionIndex: 0,
    explanation: `• When a sentence begins with a negative or restrictive adverb like "Hardly", subject-auxiliary inversion is mandatory:
  Hardly + had + subject + past participle ... when ...
• Therefore, "had the candidates entered" is the only grammatically correct structure.`,
    hint: 'Inversion after "Hardly" takes: auxiliary (had) + subject + past participle.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q59',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Correlative Inversion (Not only... but also)',
    questionText: '59. Not only _______ the national athletic championship, but she also shattered the previous continental record.',
    options: [
      'she won',
      'did she win',
      'has she won',
      'she did win'
    ],
    correctOptionIndex: 1,
    explanation: `• Fronting "Not only" at the start of an independent clause triggers subject-verb inversion using an auxiliary verb.
• Since the second clause is in the simple past ("shattered"), the first clause uses simple past inversion: "did she win".`,
    hint: 'Fronting "Not only" requires inversion with "did + subject + base verb".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q60',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Unreal Past and Wishes (Wish + Past Perfect)',
    questionText: '60. Solomon received a very low score in physics. He now wishes he _______ more practice problems before the examination.',
    options: [
      'solved',
      'had solved',
      'has solved',
      'would solve'
    ],
    correctOptionIndex: 1,
    explanation: `• Expressing regret or a wish about a past event requires "wish + past perfect" (had + past participle).
• "Had solved" correctly reflects that Solomon regrets not solving more problems in the past.`,
    hint: 'Wishes about past regrets take the past perfect (had + V3).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q61',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Expressing Preferences (Prefer... to...)',
    questionText: '61. Most agricultural workers in the rural highlands prefer cultivating drought-resistant crops _______ relying on traditional rain-fed varieties.',
    options: [
      'than',
      'rather than',
      'to',
      'instead'
    ],
    correctOptionIndex: 2,
    explanation: `• The standard grammatical structure for "prefer" is:
  prefer [noun/gerund] + TO + [noun/gerund].
• Although "rather than" is used with "would rather", the verb "prefer" takes the preposition "to".`,
    hint: 'The verb "prefer" pairs with the preposition "to": prefer X to Y.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q62',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Grammar: Concessive Adverb Clauses (However + Adjective)',
    questionText: '62. _______ challenging the engineering problem seemed at first, the innovative student team persevered until they devised a viable solution.',
    options: [
      'Whatever',
      'However',
      'Although',
      'Despite'
    ],
    correctOptionIndex: 1,
    explanation: `• "However" followed directly by an adjective or adverb means "no matter how":
  "However challenging the problem seemed..."
• "Although" would require "Although the problem seemed challenging", and "Despite" would require a noun phrase or gerund.`,
    hint: 'Use "However + adjective" to mean "no matter how challenging".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
