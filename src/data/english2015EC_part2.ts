import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const ENGLISH_2015_EC_PART2: Question[] = [
  // Section Two: Language Focus (31–56)
  {
    id: 'eng-2015-q31',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Definite Article (The for specific identification)',
    questionText: '31. _______ gentleman we saw at the gate as we were coming in is the new school director. I heard he was a teacher at Burame Secondary School.',
    options: [
      'Which',
      'Some',
      'The',
      'A'
    ],
    correctOptionIndex: 2,
    explanation: `• The noun "gentleman" is uniquely identified and specified by the restrictive relative clause "we saw at the gate as we were coming in".
• When a noun is clearly defined and known to both speaker and listener, the definite article "The" is mandatory.`,
    hint: 'Use the definite article "The" when a specific person is defined by a descriptive clause.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q32',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Correlative Conjunctions (Neither... nor)',
    questionText: '32. _______ Berhe _______ Umod tampered with this computer. I haven\'t seen them around and I think they were out of office the whole day.',
    options: [
      'Either...or',
      'Neither...nor',
      'Not only...but also',
      'Both...and'
    ],
    correctOptionIndex: 1,
    explanation: `• The context explains that both Berhe and Umod were out of office all day, ruling them both out as suspects.
• The correlative conjunction pair "Neither...nor" indicates that neither of the two persons committed the act.`,
    hint: 'Use "Neither...nor" to express that neither of the two people did the action.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q33',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Past Continuous with Simple Past (Interrupted Action)',
    questionText: '33. When Debela arrived, she _______ doro wot. But he didn\'t have the time to wait and enjoy it.',
    options: [
      'had been making',
      'has been making',
      'was making',
      'is making'
    ],
    correctOptionIndex: 2,
    explanation: `• The past continuous ("was making") describes an ongoing action in progress at the specific moment when another past event occurred ("When Debela arrived").`,
    hint: 'Use the past continuous (was/were + -ing) for an ongoing background action when another event took place.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q34',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Conditional / Precautionary Clauses (In case)',
    questionText: '34. Their plane is expected to land slightly after 3:00 pm. _______ it gets late, give me a call and I\'ll see what I can do.',
    options: [
      'But for',
      'Probably',
      'Unless',
      'In case'
    ],
    correctOptionIndex: 3,
    explanation: `• "In case" introduces a possible future contingency or precautionary situation ("In case it gets late, give me a call...").`,
    hint: 'Use "In case" to mean "if it should happen that" or as a precaution.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q35',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Past Perfect Tense (Action completed before another past event)',
    questionText: '35. When the police arrived, the burglars _______ away with the money. But there is hope that they would be caught.',
    options: [
      'are already making',
      'have been making',
      'have already made',
      'had already made'
    ],
    correctOptionIndex: 3,
    explanation: `• When an action was completed before a specific point in the past ("When the police arrived"), the past perfect tense (had + past participle) must be used: "had already made away".`,
    hint: 'The burglars escaped before the police arrived, so use the past perfect (had + V3).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q36',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Infinitive Clauses of Purpose (So as to)',
    questionText: '36. They took off early morning _______ make it in time. Otherwise, they would be late.',
    options: [
      'in order that',
      'so as to',
      'with the intention of',
      'in the interest of to'
    ],
    correctOptionIndex: 1,
    explanation: `• "So as to" is followed directly by a bare infinitive verb ("make") to express purpose: "so as to make it in time".
• "In order that" requires a full finite clause with subject and modal verb (e.g., in order that they would make it).
• "With the intention of" must be followed by a gerund ("of making").`,
    hint: 'Look at the base verb "make". Only "so as to" connects directly with a bare infinitive.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q37',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Concessive Clauses (Although)',
    questionText: '37. _______ prices are still on the rise, we hope they will come down in the near future.',
    options: [
      'Although',
      'Even if',
      'Nevertheless',
      'In contrast to'
    ],
    correctOptionIndex: 0,
    explanation: `• "Although" is a subordinating conjunction introducing a concessive clause of contrast ("Although prices are still on the rise...").
• "Nevertheless" is an adverb and cannot subordinate a clause in this syntactic position.`,
    hint: 'Use "Although" to introduce a dependent clause showing contrast.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q38',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Conjunctive Adverbs of Time (Meanwhile)',
    questionText: '38. She was packing all morning as her flight was scheduled for the evening of that same day. _______ her husband was arranging stuff in his office.',
    options: [
      'Contrarily',
      'Meanwhile',
      'What is more',
      'Supposedly'
    ],
    correctOptionIndex: 1,
    explanation: `• "Meanwhile" indicates that two activities were occurring simultaneously during the same period of time: while she was packing, her husband was simultaneously arranging things at his office.`,
    hint: '"Meanwhile" means at the same time.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q39',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Concessive Connectors (Despite the fact that)',
    questionText: '39. _______ it has drastically changed the world in many positive ways, modernization has also spoiled the cultures of many nations and created undisciplined citizens.',
    options: [
      'However',
      'In spite of',
      'In comparison',
      'Despite the fact that'
    ],
    correctOptionIndex: 3,
    explanation: `• "Despite the fact that" is a complex subordinating conjunction capable of introducing a full subject-verb clause ("it has drastically changed the world...").
• "In spite of" requires a noun or gerund unless followed by "the fact that".
• "However" cannot function as a subordinating conjunction introducing an adverbial clause here.`,
    hint: 'Use "Despite the fact that" when followed by a complete finite clause.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q40',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Causative Verbs (Make someone do something)',
    questionText: '40. Never borrow money from this group of loaners. They\'ll _______ you pay back double.',
    options: [
      'make',
      'do',
      'force',
      'let'
    ],
    correctOptionIndex: 0,
    explanation: `• The causative verb "make" is followed by an object and a bare infinitive (base form of the verb without "to"): "make you pay back".
• The verb "force" requires a to-infinitive ("force you to pay back").`,
    hint: 'Look at the bare verb "pay" without "to". Only "make" takes a bare infinitive in this coercive sense.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q41',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Modals of Tentative Possibility (Could)',
    questionText: '41. You shouldn\'t expect us exactly at 6:00 pm. We _______ make it but if we happen to be a bit late, just take it easy and start the programme.',
    options: [
      'shall',
      'must',
      'could',
      'can'
    ],
    correctOptionIndex: 2,
    explanation: `• "Could" expresses tentative possibility or likelihood regarding arriving on time, tempered by the possibility of being delayed.`,
    hint: '"Could" expresses tentative future possibility.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q42',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Vocabulary: Adverbs of Manner and Timing (Suddenly)',
    questionText: '42. She was telling me the story of her ex-boyfriend who died in a car crash ten years ago. Then she _______ burst into tears and screams and I could never stop her.',
    options: [
      'silently',
      'suddenly',
      'romantically',
      'sensibly'
    ],
    correctOptionIndex: 1,
    explanation: `• "Suddenly" describes an unexpected, abrupt outbreak of emotional distress ("burst into tears and screams").`,
    hint: 'An abrupt and unexpected action is described by "suddenly".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q43',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Inverted Third Conditional (Had + Subject + V3, Could have + V3)',
    questionText: '43. It is a pity she didn\'t see her brother. Had she arrived a day earlier, she _______ met him and enjoyed a bit of time with him.',
    options: [
      'must have',
      'will have',
      'could have',
      'should have'
    ],
    correctOptionIndex: 2,
    explanation: `• In inverted third conditional constructions ("Had she arrived..."), the main clause expresses past unreal possibility/ability with "could have + past participle" or "would have + past participle".
• "Could have met him" indicates that she would have had the opportunity to meet him.`,
    hint: 'Third conditional result clauses expressing past opportunity use "could have + V3".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q44',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Clauses of Purpose (So that)',
    questionText: '44. Everybody understands that most of you worked very hard _______ you would pass this test. But you don\'t have to lose hope if the result happens to be against your expectation.',
    options: [
      'despite',
      'so that',
      'as a result of which',
      'which means'
    ],
    correctOptionIndex: 1,
    explanation: `• "So that" introduces an adverbial clause of purpose followed by a subject and modal verb ("you would pass this test").`,
    hint: '"So that" introduces a purpose clause stating the goal of working hard.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q45',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: First Conditional (Real Condition with Immediate Decision)',
    questionText: '45. If what you are telling me is true, then I _______ straight away and register with them. I don\'t want to miss the opportunity.',
    options: [
      'will go',
      'must go',
      'am going to go',
      'am going'
    ],
    correctOptionIndex: 0,
    explanation: `• In a real first conditional context ("If what you are telling me is true..."), a spontaneous decision made at the moment of speaking takes "will + base verb": "will go".`,
    hint: 'Use "will go" for an immediate decision triggered by the condition.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q46',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Modals of Advisability and Criticism (Ought to have)',
    questionText: '46. You _______ submitted this essay without being edited. I know how serious the instructor is with deadlines and he could give you a zero.',
    options: [
      'had better',
      'ought to',
      'would',
      'might'
    ],
    correctOptionIndex: 1,
    explanation: `• "Ought to" (or "ought not to have") expresses moral advisability/obligation regarding submission standards.
• In standard modal usage, "ought to have submitted" or "ought not to have submitted" reflects duty, while "had better" requires a bare infinitive.`,
    hint: '"Ought to" is paired with obligation regarding academic requirements.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q47',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Past Simple Passive with Specific Time Reference',
    questionText: '47. The house _______ into last night and they have already reported it to the police. I\'ll try to follow up the progress.',
    options: [
      'was being broken',
      'has been broken',
      'has broken',
      'was broken'
    ],
    correctOptionIndex: 3,
    explanation: `• The time expression "last night" specifies a completed past point in time, requiring the Past Simple tense.
• Because the house was the receiver of the break-in, the passive voice is needed: "was broken into".`,
    hint: 'The time marker "last night" requires the simple past passive: was/were + V3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q48',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Third Conditional (Past Unreal Condition)',
    questionText: '48. If it _______ for at least a month or so during the last three years, their cattle would have resisted the drought to a certain degree and perhaps survived in a better number.',
    options: [
      'has rained',
      'had rained',
      'had been raining',
      'did rain'
    ],
    correctOptionIndex: 1,
    explanation: `• The conditional expresses an unreal hypothetical past event with a past hypothetical outcome ("would have resisted... and survived").
• In the third conditional if-clause, the past perfect tense (had + past participle) is required: "had rained".`,
    hint: 'Type 3 conditional: If + had + V3, ... would have + V3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q49',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Irregular Adverbs (Fast vs Fastly)',
    questionText: '49. Her father walks very _______ but she is like a tortoise. She saunters very slowly.',
    options: [
      'urgently',
      'quick',
      'fastly',
      'fast'
    ],
    correctOptionIndex: 3,
    explanation: `• In English, "fast" is both an adjective and an adverb (there is no word "fastly").
• "Her father walks very fast" correctly modifies the verb "walks".`,
    hint: '"Fast" is an irregular adverb; the form "fastly" does not exist in standard English.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q50',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Unreal Present Wishes (Wish + Past Simple)',
    questionText: '50. I wish that we _______ today. It is really freezing and wet.',
    options: [
      'didn\'t need to work',
      'have not worked',
      'will not need to work',
      'are not working'
    ],
    correctOptionIndex: 0,
    explanation: `• To express a wish or desire about a current, present situation that is contrary to fact ("today"), standard English uses the past simple: "didn't need to work".`,
    hint: 'Wishes about present situations use the past simple tense.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q51',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Articles and Determiners (A reasonable fund)',
    questionText: '51. I was offered _______ reasonable fund for helping them organize the competition but I did not accept it because I just wanted to make my own contribution.',
    options: [
      'much',
      'the',
      'an',
      'a'
    ],
    correctOptionIndex: 3,
    explanation: `• "Fund" in this context is a singular countable noun referring to a monetary amount/grant, preceded by the consonant-sound adjective "reasonable".
• The indefinite article "a" is required: "a reasonable fund".`,
    hint: '"reasonable" begins with a consonant sound, taking the indefinite article "a".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q52',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Time Conjunctions (When)',
    questionText: '52. _______ she came home, I made her coffee. Then we sat together and had hours of talk and talk.',
    options: [
      'While',
      'When',
      'Suddenly',
      'Prior'
    ],
    correctOptionIndex: 1,
    explanation: `• "When" introduces a specific completed past time event ("When she came home") that immediately triggered the subsequent past action ("I made her coffee").
• "While" would require a continuous background state.`,
    hint: 'Use "When" to introduce a point in time when an event took place.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q53',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Possessive Interrogative Determiner (Whose)',
    questionText: '53. Can anyone tell me _______ book this is? It has been lying here for months.',
    options: [
      'of who',
      'which',
      'what about',
      'whose'
    ],
    correctOptionIndex: 3,
    explanation: `• "Whose" is the interrogative possessive determiner used to ask about ownership of an object: "whose book this is".`,
    hint: 'Use "whose" to ask about possession or ownership.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q54',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Affirmative Agreement (So + auxiliary + subject)',
    questionText: '54. She likes chatting with children and _______. We actually have a lot in common but unlike her, I hate playing with dogs.',
    options: [
      'so do I',
      'I too like',
      'also do I',
      'also I like'
    ],
    correctOptionIndex: 0,
    explanation: `• To express agreement with an affirmative statement in the simple present tense ("She likes..."), English uses the inverted structure "so + auxiliary do + subject": "so do I".`,
    hint: 'Use "so do I" to agree with an affirmative simple present statement.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q55',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Past Simple for Completed Past Action (Forgot)',
    questionText: '55. The school director sent you a message but apparently, your sister _______ to tell you. You were supposed to report to his office this morning.',
    options: [
      'is forgetting',
      'has forgot',
      'forgot',
      'forgets'
    ],
    correctOptionIndex: 2,
    explanation: `• The failure to relay the message occurred at a definite point in the past before the morning appointment, requiring the simple past tense "forgot".`,
    hint: 'Use the simple past "forgot" for a completed failure in the past.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q56',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Grammar: Subordinating Conjunction of Simultaneous Actions (While)',
    questionText: '56. He was doing the washing up _______ she was cleaning the house. We like that they help one another.',
    options: [
      'during',
      'before',
      'since',
      'while'
    ],
    correctOptionIndex: 3,
    explanation: `• "While" connects two continuous past actions occurring concurrently and simultaneously: "He was doing the washing up while she was cleaning the house."`,
    hint: 'Use "while" to link two actions happening at the same time.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Three: Communicative Activities (57–60)
  {
    id: 'eng-2015-q57',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Communication: Discussing Employment and Job Offers',
    questionText: `57. Complete the conversation:
Chuchu: Your friend has got a good job, hasn't she?
Meklit: _______`,
    options: [
      'Yes, she\'s got a job. I heard it is out of town.',
      'Getting a job is not very easy these days.',
      'I feel that the offer is rather too low, birr 2500 a month.',
      'She graduated about five years back, you know.'
    ],
    correctOptionIndex: 2,
    explanation: `• Chuchu's tag question specifically asks for evaluation of the job's quality ("a good job, hasn't she?").
• Meklit disputes that it is a good job by citing the inadequate compensation: "I feel that the offer is rather too low, birr 2500 a month."`,
    hint: 'Meklit evaluates whether the job is actually good by commenting on the low salary.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q58',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Communication: Describing a Person (What is someone like?)',
    questionText: `58. Complete the conversation:
Eyob: What is your grandma like?
Sisu: _______`,
    options: [
      'She\'s now been ill for a year.',
      'She likes eating shiro wot.',
      'She had a checkup yesterday. Right move!',
      'She\'s very old and weak. She is 92.'
    ],
    correctOptionIndex: 3,
    explanation: `• The question "What is [someone] like?" asks for a description of the person's physical appearance, character, or general state.
• "She's very old and weak. She is 92." answers with descriptive physical characteristics. (In contrast, "What does she like?" would describe preferences).`,
    hint: '"What is she like?" asks for a general description of appearance, age, or character.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q59',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Communication: Explaining Whereabouts / Location',
    questionText: `59. Complete the conversation:
Teacher: Where is the boy sitting over there?
Fola: _______`,
    options: [
      'He always fights with people and no one likes him.',
      'He is locked up. What I mean is, ... he is jailed.',
      'His name is Zekarias. I don\'t know his father\'s name.',
      'He is very intelligent. You don\'t know that, do you?'
    ],
    correctOptionIndex: 1,
    explanation: `• The teacher asks about the whereabouts/location of the boy ("Where is the boy...?").
• Fola clarifies his current whereabouts: "He is locked up. What I mean is, ... he is jailed."`,
    hint: 'Answer the question "Where is..." with his physical location/status.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2015-q60',
    subject: 'English',
    year: '2015 E.C.',
    topic: 'Communication: Apologizing and Explaining Absence',
    questionText: `60. Complete the conversation:
Telila: Why didn't you come to my party?
Aster: _______`,
    options: [
      'Was it held at your home or ...?',
      'Did everyone else come?',
      'I apologize for that. I was on-duty.',
      'I could imagine it was so lavish.'
    ],
    correctOptionIndex: 2,
    explanation: `• Telila asks why Aster missed her party.
• Aster provides a courteous apology paired with a valid justification: "I apologize for that. I was on-duty."`,
    hint: 'Provide a polite apology and explanation for not attending.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
