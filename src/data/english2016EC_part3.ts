import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

const FORMAL_LETTER_PROMPT = `Section Two: Letter Writing
Read the formal letter below carefully and answer the questions that follow:

P.O. Box 1024
Hawassa, Ethiopia
18 October 2023

The Human Resources Director
Green Valley Agricultural Development Enterprise
P.O. Box 5420
Addis Ababa, Ethiopia

Dear Sir/Madam,

(1) Re: Application for the Position of Senior Agronomist

(2) I am writing to formally express my keen interest in the Senior Agronomist vacancy advertised in The Ethiopian Herald on 10 October 2023. With an MSc in Crop Science from Hawassa University and eight years of field experience in sustainable horticulture, I am confident in my capacity to contribute meaningfully to your enterprise.

(3) During my tenure at the Southern Agricultural Research Institute, I successfully spearheaded an integrated pest-management initiative that increased grain yields by 28% among cooperative smallholder farmers. I possess proven expertise in soil fertility diagnostics, climate-resilient seed breeding, and team leadership.

(4) I have enclosed my comprehensive curriculum vitae, certified academic credentials, and three professional recommendation letters for your kind perusal. I welcome the opportunity to discuss my qualifications during an interview at your earliest convenience.

Yours faithfully,
(Signature)
Kassahun Worku
Enc: Curriculum Vitae, Testimonials`;

export const ENGLISH_2016_EC_PART3: Question[] = [
  // Section One: Punctuation and Capitalization (63–66)
  {
    id: 'eng-2016-q63',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Punctuation of Direct Speech',
    questionText: '63. Which one of the following sentences is correctly punctuated?',
    options: [
      '"Where did you put the laboratory keys?" asked the instructor.',
      '"Where did you put the laboratory keys"? asked the instructor.',
      '"Where did you put the laboratory keys," asked the instructor?',
      'Where did you put the laboratory keys, "asked the instructor?"'
    ],
    correctOptionIndex: 0,
    explanation: `• In direct speech punctuation, question marks and exclamation points that belong to the quoted sentence must be placed INSIDE the quotation marks.
• The reporting clause ("asked the instructor.") follows with a lowercase initial unless it begins with a proper name, and ends with a period.
• Therefore, '"Where did you put the laboratory keys?" asked the instructor.' is punctuated correctly.`,
    hint: 'The question mark must be inside the quotation marks when quoting direct speech.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q64',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Apostrophe for Possession vs Contraction',
    questionText: '64. Which of the following sentences uses the apostrophe correctly?',
    options: [
      'The company increased it\'s market share because of the customers\' loyalty.',
      'The company increased its market share because of the customers\' loyalty.',
      'The company increased its market share because of the customer\'s loyalty\'s.',
      'The company increased its\' market share because of the customers loyalty.'
    ],
    correctOptionIndex: 1,
    explanation: `• "Its" is the possessive determiner (no apostrophe), while "it's" is a contraction for "it is" or "it has".
• "Customers'" is the plural possessive (apostrophe placed after the final 's' of plural regular nouns).
• Sentence B correctly uses "its" for possession and "customers'" for plural possessive.`,
    hint: 'Remember that the possessive pronoun is "its" (without apostrophe), and regular plural possessives end with s\'.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q65',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Punctuation with Conjunctive Adverbs (Semicolon & Comma)',
    questionText: '65. Which one of the following sentences demonstrates correct semicolon and comma usage?',
    options: [
      'The regional rainfall was severely delayed, however; the farmers successfully irrigated their fields.',
      'The regional rainfall was severely delayed; however, the farmers successfully irrigated their fields.',
      'The regional rainfall was severely delayed, however, the farmers successfully irrigated their fields.',
      'The regional rainfall was severely delayed; however; the farmers successfully irrigated their fields.'
    ],
    correctOptionIndex: 1,
    explanation: `• When joining two independent clauses with a conjunctive adverb (such as however, therefore, moreover, consequently), the standard punctuation rule is:
  [Independent Clause] ; however , [Independent Clause].
• Using a comma before "however" between two independent clauses creates a comma splice error.`,
    hint: 'Use a semicolon before the conjunctive adverb and a comma immediately after it.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q66',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Capitalization of Titles and Proper Nouns',
    questionText: '66. Which sentence is correctly capitalized according to standard English conventions?',
    options: [
      'last week, prime minister Abiy visited the simien national park in Northern Ethiopia.',
      'Last week, Prime Minister Abiy visited the Simien National Park in northern Ethiopia.',
      'Last week, prime minister Abiy visited the Simien national park in northern ethiopia.',
      'Last week, Prime Minister Abiy visited the Simien national Park in Northern ethiopia.'
    ],
    correctOptionIndex: 1,
    explanation: `• "Prime Minister Abiy": Official titles preceding a personal name are capitalized.
• "Simien National Park": The official full proper name of a national park is capitalized.
• "northern Ethiopia": Compass directions indicating general geographic zones (northern, southern) are lowercase unless part of a geopolitical entity.
• "Ethiopia" is a country name and must be capitalized.`,
    hint: 'Titles preceding names and full official park names are capitalized, while general directional adjectives are lowercase.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Two: Letter Writing (67–72)
  {
    id: 'eng-2016-q67',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Letter Writing: Salutation and Complimentary Close Matching',
    questionText: `${FORMAL_LETTER_PROMPT}\n\n67. In the letter above, why does the writer conclude with "Yours faithfully" rather than "Yours sincerely"?`,
    options: [
      'Because the writer is personally acquainted with the Human Resources Director.',
      'Because the letter opens with the impersonal salutation "Dear Sir/Madam".',
      'Because "Yours faithfully" is only used in informal personal letters to friends.',
      'Because "Yours sincerely" is no longer permitted in modern business correspondence.'
    ],
    correctOptionIndex: 1,
    explanation: `• In British and standard international business writing conventions:
  - If you do not know the recipient's name ("Dear Sir/Madam"), you close with "Yours faithfully".
  - If you address the recipient by name ("Dear Mr. Bekele"), you close with "Yours sincerely".`,
    hint: 'When the recipient\'s name is unknown and you write "Dear Sir/Madam", close with "Yours faithfully".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q68',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Letter Writing: Purpose of Opening Paragraph',
    questionText: `${FORMAL_LETTER_PROMPT}\n\n68. What is the principal function of Paragraph 2 in this job application letter?`,
    options: [
      'To negotiate salary, annual bonuses, and health insurance benefits.',
      'To state the specific position applied for and the source of the vacancy advertisement.',
      'To criticize previous employers and explain reasons for resigning.',
      'To list all personal hobbies and recreational activities.'
    ],
    correctOptionIndex: 1,
    explanation: `• Paragraph 2 serves as the opening statement of purpose: identifying the specific vacant role (Senior Agronomist), where it was advertised (The Ethiopian Herald on 10 October 2023), and a brief statement of qualification.`,
    hint: 'The first paragraph of a job application introduces the role being applied for and where it was seen.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q69',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Letter Writing: Business Letter Abbreviations (Enc. / Encl.)',
    questionText: `${FORMAL_LETTER_PROMPT}\n\n69. At the end of the letter, the notation "Enc:" indicates that:`,
    options: [
      'the letter has been copied to another executive.',
      'additional accompanying documents are enclosed in the envelope.',
      'the writer requests an urgent electronic reply.',
      'the letter has been approved by an external legal counsel.'
    ],
    correctOptionIndex: 1,
    explanation: `• "Enc." or "Encl." is standard business correspondence shorthand for "Enclosure(s)".
• It notifies the recipient that supplementary physical documents (such as a CV or certificates) accompany the primary letter.`,
    hint: '"Enc." stands for Enclosures—extra documents included with the letter.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q70',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Letter Writing: Tone and Register Appropriateness',
    questionText: '70. Which of the following sentences would be INAPPROPRIATE in a formal job application letter?',
    options: [
      'I possess five years of progressive accounting experience in the manufacturing sector.',
      'I look forward to discussing how my skills align with your organizational objectives.',
      'Drop me a quick text if you guys think I\'m cool enough for this gig.',
      'Thank you for your time and consideration of my application.'
    ],
    correctOptionIndex: 2,
    explanation: `• Sentence C uses highly informal colloquial slang ("Drop me a quick text", "you guys", "cool enough for this gig") which violates professional formal register.`,
    hint: 'Identify the choice that uses casual street slang instead of polite professional language.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q71',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Letter Writing: Structural Sequence in Formal Correspondence',
    questionText: '71. What is the standard order of elements in a formal business letter layout?',
    options: [
      'Date -> Salutation -> Sender\'s Address -> Body -> Recipient\'s Address -> Close',
      'Sender\'s Address -> Date -> Recipient\'s Address -> Salutation -> Subject Line -> Body -> Close -> Signature',
      'Salutation -> Subject Line -> Date -> Body -> Recipient\'s Address -> Sender\'s Address',
      'Recipient\'s Address -> Signature -> Body -> Salutation -> Date -> Sender\'s Address'
    ],
    correctOptionIndex: 1,
    explanation: `• Standard formal block layout:
  1. Sender\'s address
  2. Date
  3. Inside recipient\'s address
  4. Salutation (Dear Sir/Madam)
  5. Subject line (Re: ...)
  6. Body paragraphs
  7. Complimentary close (Yours faithfully/sincerely)
  8. Signature and typed name.`,
    hint: 'A formal letter begins with the sender\'s address, followed by the date and recipient\'s address.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q72',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Letter Writing: Professional Email Etiquette',
    questionText: '72. When composing a formal professional email, what should be written in the Subject line?',
    options: [
      'A vague, one-word greeting such as "Hello" or "Urgent".',
      'A clear, concise phrase specifying the exact topic or purpose of the message.',
      'The entire body text of the message copied into one long sentence.',
      'A list of everyone included in the CC field.'
    ],
    correctOptionIndex: 1,
    explanation: `• A professional email subject line must be clear, concise, and specific (e.g., "Inquiry Regarding EUEE Admission Requirements"), allowing the recipient to immediately discern the email\'s purpose and priority.`,
    hint: 'The subject line should clearly and concisely state the specific topic of the email.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Three: Paragraph Organization & Coherence (73–80)
  {
    id: 'eng-2016-q73',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Identifying the Best Topic Sentence',
    questionText: `73. Read the following supporting sentences:
(1) Terracing on steep mountain slopes decelerates downhill water runoff and traps fertile topsoil.
(2) Planting deep-rooted indigenous vetiver grasses along hillside contours stabilizes vulnerable earth against erosion.
(3) Periodic crop rotation with leguminous beans naturally restores depleted nitrogen nutrients to degraded soil beds.

Which one of the following sentences would serve as the most effective topic sentence for this paragraph?`,
    options: [
      'Highland farmers face devastating consequences when heavy summer downpours wash away crops.',
      'A variety of proactive conservation techniques can effectively prevent soil erosion and restore soil fertility.',
      'Commercial fertilizers are too expensive for smallholder farmers to purchase every planting season.',
      'Terraces were originally built thousands of years ago in ancient Mediterranean civilizations.'
    ],
    correctOptionIndex: 1,
    explanation: `• The supporting sentences outline specific techniques (terracing, vetiver grass planting, crop rotation) used to conserve soil and replenish fertility.
• Sentence B provides the comprehensive controlling idea that encompasses all three supporting details.`,
    hint: 'The topic sentence must broadly encompass all the specific soil conservation techniques mentioned.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q74',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Identifying Irrelevant Sentence (Paragraph Unity)',
    questionText: `74. Read the following paragraph carefully:
(1) Renewable solar energy provides numerous economic and environmental advantages for remote rural communities.
(2) Photovoltaic panels generate clean electricity without producing toxic greenhouse gases or atmospheric pollution.
(3) In addition, decentralized solar mini-grids spare rural households from spending exorbitant portions of income on kerosene fuel.
(4) Many teenagers in modern European cities prefer buying expensive wireless headphones to stream pop music.
(5) Consequently, widespread solar adoption accelerates rural electrification while protecting ecological biodiversity.

Which numbered sentence disrupts the unity of the paragraph and should be eliminated?`,
    options: [
      'Sentence (2)',
      'Sentence (3)',
      'Sentence (4)',
      'Sentence (5)'
    ],
    correctOptionIndex: 2,
    explanation: `• The paragraph is unified around the economic and environmental benefits of rural solar energy.
• Sentence (4) discusses teenage music streaming preferences in European cities, which is completely irrelevant to rural solar electrification and breaks paragraph unity.`,
    hint: 'Find the sentence that departs entirely from rural solar energy benefits.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q75',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Jumbled Sentences (Coffee Processing Sequence)',
    questionText: `75. What is the most logical order of the following jumbled sentences to form a coherent paragraph?
(a) After being picked, the ripe red cherries are transported to local wet mills for pulping and washing.
(b) Finally, the dry beans are graded, packed into burlap sacks, and transported to Addis Ababa for international export.
(c) The meticulous process of harvesting high-quality Ethiopian Arabica coffee begins in late autumn.
(d) Once pulped, the coffee beans are fermented in water tanks and spread evenly across raised African beds to dry in the sun.
(e) Experienced farmers hand-pick only fully ripened crimson cherries from the lush forest canopy.`,
    options: [
      'c -> e -> a -> d -> b',
      'c -> a -> e -> b -> d',
      'e -> c -> a -> d -> b',
      'a -> d -> e -> c -> b'
    ],
    correctOptionIndex: 0,
    explanation: `• (c) introduces the overarching topic: harvesting Ethiopian Arabica coffee in late autumn.
• (e) describes the initial step: hand-picking ripe crimson cherries.
• (a) follows with transporting the cherries to wet mills for pulping.
• (d) describes fermenting and drying the pulped beans on raised beds.
• (b) marks the culmination with "Finally", grading and exporting the dry beans.
• Hence, the correct logical sequence is: c -> e -> a -> d -> b.`,
    hint: 'Start with the introductory statement (c), follow the chronological harvest and processing steps, ending with "Finally" (b).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q76',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Jumbled Sentences (Scientific Water Purification)',
    questionText: `76. Choose the correct chronological sequence to assemble a coherent expository paragraph:
(1) Next, chlorine or ultraviolet light is introduced to destroy pathogenic bacteria and viruses.
(2) First, raw river water passes through coarse screens to filter out large debris, weeds, and gravel.
(3) Providing safe, potable municipal drinking water involves multiple rigorous purification stages.
(4) Then, coagulants are added to induce sedimentation, settling fine suspended clay particles to the bottom of the basin.
(5) Lastly, the fully treated, pure water is pumped into elevated storage reservoirs for community distribution.`,
    options: [
      '3 -> 2 -> 4 -> 1 -> 5',
      '3 -> 1 -> 2 -> 4 -> 5',
      '2 -> 4 -> 1 -> 5 -> 3',
      '3 -> 4 -> 2 -> 1 -> 5'
    ],
    correctOptionIndex: 0,
    explanation: `• (3) is the topic sentence introducing the multi-stage water purification process.
• (2) begins the chronological sequence with the transition "First" (coarse screening).
• (4) continues with "Then" (coagulation and sedimentation).
• (1) proceeds with "Next" (chlorine/UV disinfection).
• (5) concludes with "Lastly" (pumping into elevated reservoirs).
• Sequence: 3 -> 2 -> 4 -> 1 -> 5.`,
    hint: 'Follow the transition signposts: General introduction (3) -> First (2) -> Then (4) -> Next (1) -> Lastly (5).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q77',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Transitional Connectors between Sentences',
    questionText: '77. "Many rural regions possess abundant solar radiation and reliable wind currents. _______, the high upfront capital cost of energy storage batteries prevents rapid private adoption." Which transitional word best fills the blank?',
    options: [
      'Furthermore',
      'However',
      'Consequently',
      'Similarly'
    ],
    correctOptionIndex: 1,
    explanation: `• The first sentence describes favorable conditions (abundant solar and wind).
• The second sentence introduces an obstacle/limitation (high capital costs of batteries).
• "However" is the appropriate adversative transition to introduce a contrasting limitation.`,
    hint: 'The second sentence presents an obstacle contrasting with the natural advantage.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q78',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Concluding Sentence in Persuasive Essay',
    questionText: '78. In an argumentative essay advocating for girls\' education and STEM empowerment in rural schools, which of the following serves as the strongest concluding sentence?',
    options: [
      'There are many schools in Ethiopia that teach both boys and girls.',
      'Some students find physics and mathematics quite difficult in Grade 12.',
      'Ultimately, investing in girls\' education not only unleashes immense untapped scientific potential, but also acts as a catalyst for holistic national development.',
      'Computers and laboratories require electricity to function properly.'
    ],
    correctOptionIndex: 2,
    explanation: `• An effective concluding sentence in a persuasive essay synthesizes the core arguments, reinforces the thesis, and leaves a memorable impression.
• Sentence C powerfully synthesizes the societal and scientific benefits of empowering girls in STEM.`,
    hint: 'Choose the sentence that summarizes the broad positive impact and reinforces the central thesis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q79',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Cohesive Devices and Pronoun Reference in Paragraphs',
    questionText: '79. "The Ministry of Health initiated a nationwide vaccination drive. _______ deployed thousands of trained healthcare workers across remote kebeles." Which pronoun or noun phrase creates the smoothest cohesive link?',
    options: [
      'It',
      'They',
      'These',
      'Which'
    ],
    correctOptionIndex: 0,
    explanation: `• "The Ministry of Health" is a singular collective institutional noun (an entity).
• In standard formal grammar, singular organizations and government bodies are referred to by the singular pronoun "It".`,
    hint: 'An institution or ministry is a single collective entity, replaced by "It".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2016-q80',
    subject: 'English',
    year: '2016 E.C.',
    topic: 'Writing Skills: Paragraph Types (Expository vs Narrative vs Descriptive)',
    questionText: '80. A writing passage that systematically explains the chemical process of photosynthesis, detailing how chlorophyll captures photons to synthesize glucose from carbon dioxide and water, is classified as:',
    options: [
      'Narrative writing',
      'Expository writing',
      'Persuasive writing',
      'Poetic writing'
    ],
    correctOptionIndex: 1,
    explanation: `• Expository writing is non-fiction prose whose primary objective is to inform, explain, clarify, or describe a scientific or technical process objectively without relying on fiction or personal persuasion.`,
    hint: 'Writing that explains facts, concepts, or scientific processes objectively is expository writing.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
