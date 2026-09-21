import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const ECONOMICS_2017_EC_PART1: Question[] = [
  {
    id: 'econ-2017-q1',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Macroeconomics: Determinants of Aggregate Demand (AD)',
    questionText: '1. Which one of the following is a determinant of aggregate demand (AD)?',
    options: [
      'Availability of credit',
      'Cost of inputs',
      'State of technology',
      'Change in productivity'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Aggregate Demand (AD) represents total spending in an economy (AD = C + I + G + NX).
• Availability of credit directly determines household consumption expenditure (C) and business investment (I), shifting the AD curve.
• Cost of inputs, state of technology, and changes in productivity are determinants of Aggregate Supply (AS), not AD.

🇪🇹 አማርኛ (Amharic):
አጠቃላይ ፍላጎት (Aggregate Demand - AD) በአንድ ሀገር ውስጥ ያለውን አጠቃላይ ወጪ ይወክላል (AD = C + I + G + NX)። የብድር አቅርቦትና ተደራሽነት (Availability of credit) የሸማቾችን ፍጆታ እና የንግድ ኢንቨስትመንትን በቀጥታ የሚወስን የ AD ተፅዕኖ ፈጣሪ ነው። የቴክኖሎጂ ሁኔታ እና የግብዓት ዋጋ ግን የ Aggregate Supply (AS) ተፅዕኖ ፈጣሪዎች ናቸው።

🌳 Afaan Oromoo:
Fedhii Walii-galaa (Aggregate Demand - AD) baasii waliigalaa dinagdee keessaa agarsiisa (AD = C + I + G + NX). Argannoon liqii (Availability of credit) baasii maatii fi invastimantii daldalaa murteessuun AD jijjiira. Teeknooloojiin fi gatiin galteewwanii immoo dhiyeessii waliigalaa (AS) murteessu.`,
    hint: 'Credit availability influences consumer spending (C) and investment (I), shifting AD.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q2',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Fiscal Policy: Expansionary Government Spending and AD Shifts',
    questionText: '2. What is the macroeconomic effect of an exogenous increase in government spending (G)?',
    options: [
      'Aggregate demand shifts to the right increasing both output and price level.',
      'Aggregate demand shifts to the left increasing both output and price level.',
      'Aggregate demand shifts to the left decreasing output and increasing price level.',
      'Aggregate demand shifts to the right increasing output but decreasing price level.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
An increase in government spending (G) is an expansionary fiscal policy:
1. Because G is an autonomous component of Aggregate Demand (AD = C + I + G + NX), an increase in G directly shifts the AD curve to the right.
2. In the short run, along an upward-sloping short-run aggregate supply (SRAS) curve, a rightward AD shift leads to higher real output (GDP / Y) and an increased general price level (P).

🇪🇹 አማርኛ (Amharic):
የመንግስት ወጪ (G) መጨመር አጠቃላይ ፍላጎትን (AD) በቀጥታ ወደ ቀኝ ያዛውረዋል። ይህም በአጭር ጊዜ ውስጥ አጠቃላይ የሀገር ውስጥ ምርትን (output) እና አጠቃላይ የዋጋ ደረጃን (price level) በአንድ ላይ ይጨምራል።

🌳 Afaan Oromoo:
Daballiin baasii mootummaa (G) fedhii waliigalaa (AD) gara mirgaatti dhiiba. Kunis oomisha waliigalaa (output) fi sadarkaa gatii (price level) lamaanuu ni dabala.`,
    hint: 'Higher government spending increases AD (shifts right), increasing output and price level.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q3',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Macroeconomics: Factors Affecting Aggregate Supply (AS)',
    questionText: '3. Which one of the following is correct about factors affecting aggregate supply (AS)?',
    options: [
      'Higher price of imported raw materials leads to firms to produce more.',
      'Lower demand for commodities in the market initiates firms to produce more.',
      'Subsidizing domestic industry in technology leads to decrease production.',
      'Qualified high managerial ability leads to firms to produce more production.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Aggregate supply (AS) increases when production efficiency, management quality, or technology improves:
• Qualified and superior managerial ability increases labor productivity, reduces unit production costs, and encourages firms to expand overall output (shifting the AS curve to the right).
• Higher raw material costs increase production costs (shifting AS left); subsidies increase production, not decrease it.

🇪🇹 አማርኛ (Amharic):
ብቁ እና ከፍተኛ የማኔጅመንት ችሎታ (Qualified high managerial ability) የስራ ቅልጥፍናን በማሳደግ እና የምርት ወጪን በመቀነስ ድርጅቶች ብዙ ምርት እንዲያመርቱ (Aggregate Supply እንዲጨምር) ያደርጋል።

🌳 Afaan Oromoo:
Dandeettiin bulchiinsaa olaanaan fi qulqullina qabu oomishtummaa dabaluun dhaabbileen oomisha dabalataa akka oomishan taasisa (AS gara mirgaatti dhiiba).`,
    hint: 'Superior managerial skills enhance productivity and expand aggregate supply.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q4',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Macroeconomics: Definition of Short-Run Aggregate Supply (SRAS) Curve',
    questionText: '4. Among the following statements, which one is correct about the short-run aggregate supply (SRAS) curve?',
    options: [
      'It shows the quantity demanded at different price levels, ceteris paribus.',
      'It reveals that as price level rises, firms decrease the quantity supplied of goods.',
      'It shows the quantity supplied of output at various price levels, ceteris paribus.',
      'It reveals that as price level drops, firms increase the quantity supplied of goods.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The Short-Run Aggregate Supply (SRAS) curve illustrates the total quantity of real output (GDP) that domestic firms are willing and able to produce and supply at various overall price levels, holding all other determinants constant (ceteris paribus). It is typically upward-sloping.

🇪🇹 አማርኛ (Amharic):
የአጭር ጊዜ አጠቃላይ አቅርቦት ከርቭ (SRAS) ሌሎች ሁኔታዎች ሳይለወጡ (ceteris paribus) በተለያዩ አጠቃላይ የዋጋ ደረጃዎች ውስጥ ድርጅቶች ለማቅረብ ፈቃደኛ የሆኑትን አጠቃላይ የምርት መጠን ያሳያል።

🌳 Afaan Oromoo:
Koorviin dhiyeessii waliigalaa yeroo gabaabaa (SRAS) sadarkaa gatiiwwan adda addaa keessatti oomisha waliigalaa dhiyaachuu danda\'u agarsiisa (ceteris paribus).`,
    hint: 'SRAS shows total real output supplied at different price levels, ceteris paribus.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q5',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Macroeconomics: Short-Run Macroeconomic Equilibrium',
    questionText: '5. Which one of the following is true about short-run equilibrium in the economy?',
    options: [
      'The occurrence of a shortage of goods leads to firms decrease output and consumption decrease consumption.',
      'It is the intersection of aggregate demand and aggregate supply.',
      'The occurrence of a surplus of goods leads to firms decrease output and consumption increase consumption.',
      'It is the intersection of long-run and short-run aggregate supply curves.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Short-run macroeconomic equilibrium occurs at the point of intersection between the Aggregate Demand (AD) curve and the Short-Run Aggregate Supply (SRAS) curve, determining the equilibrium real output (Y) and equilibrium price level (P).

🇪🇹 አማርኛ (Amharic):
የአጭር ጊዜ ማክሮ ኢኮኖሚ ሚዛን (Short-run equilibrium) የሚፈጠረው አጠቃላይ ፍላጎት (AD) እና አጠቃላይ አቅርቦት (AS) በሚገናኙበት ነጥብ (intersection point) ላይ ነው።

🌳 Afaan Oromoo:
Wal-dhaabiinsi dinagdee yeroo gabaabaa kan uumamu qabxii fedhiin waliigalaa (AD) fi dhiyeessiin waliigalaa (AS) itti wal-qaxxaamuranidha.`,
    hint: 'Short-run equilibrium is where aggregate demand intersects aggregate supply.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q6',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Macroeconomics: Price Level Adjustments from Equilibrium',
    questionText: '6. Suppose the price level changed from the equilibrium of aggregate demand and short run aggregate supply in an economy. Which of the following is true about the result?',
    options: [
      'At a lower price level, there will be surplus, and the price level decreases.',
      'At a higher price level there will be shortage, and the price level increases.',
      'At a lower price level, there will be shortage and the price level rises.',
      'At a higher price level there will be surplus, and the price level increases.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
When the price level falls below macroeconomic equilibrium:
1. Aggregate quantity demanded exceeds aggregate quantity supplied (AD > AS), creating an excess demand or shortage.
2. The shortage exerts upward pressure on prices, driving the price level back up toward equilibrium.

🇪🇹 አማርኛ (Amharic):
የዋጋ ደረጃው ከኢኩሊብሪየም በታች ሲወርድ አጠቃላይ ፍላጎት ከአቅርቦት ይበልጣል፤ ይህም እጥረት (shortage) ይፈጥራል፤ እጥረቱ ደግሞ የዋጋ ደረጃው ወደ ሚዛናዊ ዋጋ እንዲያሻቅብ (price level rises) ያደርገዋል።

🌳 Afaan Oromoo:
Yeroo sadarkaan gatii gadi bu\'u hanqinni (shortage) ni uumama, kunis gatiin deebi\'ee gara wal-qixxummaatti akka ol-ka\'u taasisa.`,
    hint: 'Below equilibrium price level: AD > AS causes a shortage, driving price level up.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q7',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Microeconomics: Definition of Market Failure',
    questionText: '7. Which one of the following statements correctly describes market failure?',
    options: [
      'The individual incentives for rational behavior lead to rational outcomes for the group.',
      'The price mechanisms accounts for all the costs and benefits to provide and consume a good.',
      'The steady state equilibrium in which quantity supplied is equal to quantity demanded.',
      'The inefficient distribution of goods and services in the free market.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Market failure is a situation in economic theory wherein the free market mechanism fails to allocate resources efficiently, resulting in a net loss of economic welfare (deadweight loss). Causes include externalities, public goods, asymmetric information, and monopoly power.

🇪🇹 አማርኛ (Amharic):
የገበያ ውድቀት (Market failure) ማለት ነፃው ገበያ ሀብቶችንና አገልግሎቶችን በውጤታማነት መከፋፈል ሲያቅተው (inefficient distribution of goods and services) እና ማህበራዊ ኪሳራ ሲያስከትል ነው።

🌳 Afaan Oromoo:
Kufaatiin gabaa (market failure) haala gabaan bilisaa qabeenyaa fi tajaajiloota haala gahumsa qabuun qooduu dadhabuudha (inefficient distribution).`,
    hint: 'Market failure is the inefficient allocation of goods and services by the free market.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q8',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Externalities: Correcting Negative Externalities via Pigouvian Taxes',
    questionText: '8. Which one of the following is an appropriate economic solution for the market failure caused by a manufacturing firm that pollutes a river?',
    options: [
      'Taxing the polluting firm (Pigouvian Tax)',
      'Subsidizing the polluting firm',
      'Encouraging the polluting firm',
      'Renting the polluted river'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
River pollution generates a negative production externality (Marginal Social Cost > Marginal Private Cost). Imposing a Pigouvian tax equal to the marginal external damage internalizes the external cost, forcing the firm to reduce pollution and produce at the socially optimal output.

🇪🇹 አማርኛ (Amharic):
ወንዝን የሚበክል ፋብሪካ በህብረተሰብ ላይ ጉዳት (Negative externality) ስለሚያደርስ፣ መንግስት የካሳ ታክስ (Pigouvian Tax / Taxing the polluting firm) በመጣል የብክለት መጠኑ እንዲቀንስ ያደርጋል።

🌳 Afaan Oromoo:
Dhaabbata laga faaluuf furmaanni ta\'u gibira (Pigouvian tax) irratti kaffalchiisuun faalama akka hir\'isu gochuudha.`,
    hint: 'Imposing taxes on polluters internalizes negative externalities.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q9',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Public Goods: The Free-Rider Problem',
    questionText: '9. Which one of the following explains the free rider problem in an economy?',
    options: [
      'Free ridership is a problem that arises due to the excludable nature of public goods.',
      'Individuals get the benefits of public goods without contributing anything to the cost.',
      'All individuals have the incentive to pay for the public good.',
      'The free rider problem enables the markets operate efficiently for public goods.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Because public goods are non-excludable (it is impossible to prevent non-payers from enjoying them), individuals have an incentive to consume the benefits of the good without paying or contributing to its production cost, leading to private market under-provision (the Free-Rider Problem).

🇪🇹 አማርኛ (Amharic):
የፍሪ ራይደር ችግር (Free rider problem) የሚከሰተው የህዝብ አገልግሎቶች (Public goods) ማንንም የማያገሉ በመሆናቸው፣ ሰዎች ምንም አይነት ወጪ ሳያወጡና ሳይከፍሉ ጥቅሙን ብቻ ሲወስዱ ነው።

🌳 Afaan Oromoo:
Rakkoon \'Free rider problem\' kan uumamu yeroo namoonni baasii tokko malee faayidaa qabeenya uummataa argachuu barbaadanidha.`,
    hint: 'Free riders enjoy public goods without paying because non-payers cannot be excluded.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q10',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Externalities: Positive Consumption Externalities',
    questionText: '10. Among the following alternatives, which one represents a positive externality?',
    options: [
      'Playing loud music in the neighborhood',
      'Smoking in public places',
      'Vaccination program in the neighborhood',
      'Overgrazing cows in common pasture lands'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A vaccination program creates a positive consumption externality because vaccinating an individual not only protects that person but also provides external spillover benefits to the broader community through herd immunity (reducing disease transmission to others). The other options represent negative externalities or the tragedy of the commons.

🇪🇹 አማርኛ (Amharic):
አዎንታዊ ተፅዕኖ (Positive externality) ማለት የአንድ ግለሰብ ድርጊት ለሌሎች ያልተከፈለበት በጎ ጥቅም ሲሰጥ ነው፤ ሰፈር ውስጥ የሚሰጥ የክትባት መርሃ ግብር (Vaccination program) ሌሎችንም ከተላላፊ በሽታ ስለሚከላከል አዎንታዊ ተፅዕኖ ነው።

🌳 Afaan Oromoo:
\'Positive externality\' faayidaa namoota biroof dabalataan darbudha. Sagantaan talaallii (vaccination) namoota naannoo dhibee irraa waan eeguuf fakkeenya gaariidha.`,
    hint: 'Vaccines generate external herd immunity benefits for the community.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q11',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Information Economics: Definition of Asymmetric Information',
    questionText: '11. Asymmetric information is a market situation when:',
    options: [
      'Buyers and sellers have different types (or unequal access to) information.',
      'Buyers and sellers have the same type of information.',
      'Buyers and sellers want to be free riders.',
      'Buyers and sellers lack agreement on the price.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Asymmetric information occurs in an economic transaction when one party (either the buyer or the seller) possesses more or superior information relevant to the transaction than the other party, causing adverse selection or moral hazard.

🇪🇹 አማርኛ (Amharic):
የመረጃ አለመመጣጠን (Asymmetric information) የሚፈጠረው በግብይት ውስጥ አንደኛው ወገን (ሻጭ ወይም ገዢ) ከሌላኛው ወገን የበለጠ ወይም የተለየ መረጃ ሲኖረው (different types/amounts of info) ነው።

🌳 Afaan Oromoo:
\'Asymmetric information\' jechuun bittaa fi gurgurtaa keessatti qaamni tokko isa kaan caalaa odeeffannoo dabalataa yookiin addaa yoo qabaatedha.`,
    hint: 'Asymmetric information means unequal or different access to information between parties.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q12',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Labor Economics: Signaling Theory in Education',
    questionText: '12. When an individual builds on their skills by acquiring more education and advanced training credentials, the individual is primarily trying to:',
    options: [
      'Free ride the employer.',
      'Screen the employer.',
      'Create externality for the employer.',
      'Signal to the employer (Signaling Theory).'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
According to Michael Spence's Signaling Theory (Nobel Prize in Economics), acquiring higher educational credentials serves as a credible market signal to prospective employers to communicate innate high productivity, perseverance, and skill level in the presence of asymmetric information.

🇪🇹 አማርኛ (Amharic):
በሲግናሊንግ ቲዎሪ (Signaling theory) መሰረት አንድ ግለሰብ ከፍተኛ ትምህርት እና ስልጠና ሲወስድ፣ ለአሰሪው ድርጅት ብቃቱንና ከፍተኛ ምርታማነቱን የሚያሳይ ምልክት ለመስጠት (signal to the employer) ነው።

🌳 Afaan Oromoo:
Akka tiyoorii \'Signaling\'tti, namni tokko barnoota fi leenjii yoo fudhatu dandeettii fi gahumsa qabu hojjechiisaatti agarsiisuuf (signal gochuuf) yaala.`,
    hint: 'Higher education credentials signal high productivity and competence to employers.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q13',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Microeconomics: Necessity for Consumer Protection',
    questionText: '13. Why is there a necessary need for government consumer protection laws and regulations?',
    options: [
      'Consumers often do not exercise their rights (due to information gaps, unequal bargaining power, and deceptive practices).',
      'Sellers compete with each other aggressively.',
      'Consumers\' interest and business survival are unrelated.',
      'Consumers have the same information as sellers.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Consumer protection regulations are essential because consumers face asymmetric information, deceptive advertising, unsafe products, and lack the legal resources or awareness to effectively exercise and defend their rights against powerful corporations.

🇪🇹 አማርኛ (Amharic):
የሸማቾች ጥበቃ ህግ አስፈላጊ የሆነበት ዋነኛ ምክንያት ሸማቾች የመረጃ እጥረት ስላለባቸው እና መብቶቻቸውን በተገቢው መንገድ ለማስከበር (consumers often do not exercise their rights) አቅም ስለሚያንሳቸው ነው።

🌳 Afaan Oromoo:
Seerri eegumsa maamiltootaa barbaachisaa kan ta\'eef, maamiltoonni yeroo baay\'ee mirga isaanii beekanii hojiirra oolchuu waan hin dandeenyeefi.`,
    hint: 'Consumer protection shields vulnerable consumers from market abuses and information asymmetries.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q14',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Macroeconomics: General Macroeconomic Policy Goals',
    questionText: '14. Which one of the following is among the primary general objectives of macroeconomic policy?',
    options: [
      'Cost minimization',
      'Income inequality',
      'Healthy balance of payments (External Balance)',
      'Profit maximization'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The core objectives of national macroeconomic policy are:
1. High and sustainable economic growth (GDP)
2. Low and stable inflation (price stability)
3. Full employment (low unemployment)
4. Healthy and sustainable balance of payments (BOP external equilibrium).
Cost and profit maximization are microeconomic firm objectives.

🇪🇹 አማርኛ (Amharic):
የማክሮ ኢኮኖሚ ፖሊሲ ዋና ዋና ግቦች፡ ዘላቂ የኢኮኖሚ እድገት፣ የዋጋ መረጋጋት፣ የስራ እድል ፈጠራ እና ጤናማ የክፍያ ሚዛን (Healthy balance of payments) ናቸው።

🌳 Afaan Oromoo:
Kaayyolee gurguddoo poolisii maakroo-dinagdee keessaa tokko \'Healthy balance of payments\' (Madaallii kaffaltii nagaa qabu) mirkaneessuudha.`,
    hint: 'Healthy balance of payments, price stability, and high employment are macroeconomic goals.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q15',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Monetary Policy: Tools of the Central Bank',
    questionText: '15. Among the following alternatives, which one is a monetary policy tool used by central banks?',
    options: [
      'Taxation',
      'Discount rate (Central Bank lending rate)',
      'Transfer payments',
      'Grants in aid'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• Monetary policy tools (managed by the Central Bank): Discount rate, Reserve requirements, and Open Market Operations (OMO).
• Fiscal policy tools (managed by Ministry of Finance): Taxation, government spending, transfer payments, and grants-in-aid.

🇪🇹 አማርኛ (Amharic):
የገንዘብ ፖሊሲ መሳሪያ (Monetary policy tool) የሆነው የብሔራዊ ባንክ የቅናሽ ወለድ ተመን (Discount rate) ነው። ታክስ እና ትራንስፈር ክፍያዎች ግን የበጀት/ፊስካል (Fiscal) ፖሊሲ መሳሪያዎች ናቸው።

🌳 Afaan Oromoo:
Meeshaan poolisii maallaqaa (Monetary policy tool) kan Baankii Giddu-galeessaan to\'atamu \'Discount rate\' (reettii dhala liqii) dha. Gibirri fi kaffaltiin gargaarsaa kan poolisii faayinaansiiti (Fiscal policy).`,
    hint: 'Discount rate is a monetary policy instrument set by central banks.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q16',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Ethiopian Economy: Homegrown Economic Reform Agenda (HGER)',
    questionText: '16. Which one of the following is NOT a financial sector reform component of the macroeconomic reforms of Ethiopia\'s Home Grown Economic Reforms (HGER)?',
    options: [
      'Reduce the supply of credit to the private sector',
      'Promote market based interest rate',
      'Strengthen the capacity of the National Bank of Ethiopia',
      'Establish and expand capital markets'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Option A is FALSE / NOT a reform component: The HGER explicitly aims to *increase* and facilitate access to private sector credit. Key financial pillars include:
1. Transitioning to a market-based interest rate regime
2. Modernizing the National Bank of Ethiopia (NBE)
3. Launching the Ethiopian Securities Exchange (ESX) and capital markets.

🇪🇹 አማርኛ (Amharic):
የሀገር በቀል የኢኮኖሚ ማሻሻያ (HGER) ግብ ለግል ዘርፉ የሚሰጠውን ብድር መጨመር እንጂ መቀነስ አይደለም፤ ስለዚህ "Reduce the supply of credit to the private sector" የተሳሳተ ነው።

🌳 Afaan Oromoo:
Fooyya\'iinsi dinagdee biyya keessaa (HGER) dhiyeessii liqii sekteera dhuunfaaf kennamu dabaluu qaba malee hir\'isuu miti. Kanaafuu A dogoggora.`,
    hint: 'HGER expands private sector credit access rather than reducing it.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q17',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Public Finance: Advantages of Fiscal Decentralization',
    questionText: '17. Which one of the following is an advantage of fiscal decentralization in a federal system?',
    options: [
      'Local externalities',
      'Inefficient tax system',
      'Ineffectiveness of redistributing program',
      'Fostering intergovernmental competition and responsive public services'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Fiscal decentralization (devolution of tax and expenditure powers to regional/local governments) creates healthy competition among sub-national governments, fosters policy innovation, improves transparency, and tailors public services directly to local preferences.

🇪🇹 አማርኛ (Amharic):
የፊስካል ስልጣን ውክልና (Fiscal decentralization) አንዱ ዋነኛ ጠቀሜታ በክልሎች መካከል ጤናማ ውድድር በመፍጠር (Fostering intergovernmental competition) ቀልጣፋ የህዝብ አገልግሎት እንዲሰጥ ማድረጉ ነው።

🌳 Afaan Oromoo:
Faayidaan \'fiscal decentralization\' mootummoota naannoo gidduutti dorgommii gaarii uumuun tajaajila uummataa bu\'a-qabeessa taasisuudha.`,
    hint: 'Fiscal decentralization promotes intergovernmental competition and local efficiency.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q18',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Development Economics: Population Growth and Urban Environment',
    questionText: '18. Which one of the following is true regarding the link between rapid population growth and the environment?',
    options: [
      'Rapid population growth reduces disguised unemployment and increases per capita productivity.',
      'Rapid population growth accompanied by heavy rural-urban migration could lead to urban pollution and municipal strain.',
      'Rapid population growth leads to capital formation and accelerated rural development due to high propensity to save.',
      'Rapid population growth enables improvement in land to man ratio due to elastic supply of land.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Unchecked population growth combined with rapid rural-urban migration overwhelms urban sanitation, municipal waste management, and housing infrastructure, exacerbating air, water, and solid waste pollution in metropolitan areas.

🇪🇹 አማርኛ (Amharic):
ከፍተኛ የህዝብ ቁጥር እድገት ከገጠር ወደ ከተማ ከሚደረግ ፍልሰት ጋር ሲጣመር የከተማ መሰረተ-ልማቶችን በማጨናነቅ ለከፍተኛ የከተማ ብክለት (urban pollution) ይዳርጋል።

🌳 Afaan Oromoo:
Baay\'inni uummataa saffisaan dabaluun fi baqannaan baadiyyaa irraa gara magaalaatti taasifamu faalama naannoo magaalaa (urban pollution) fida.`,
    hint: 'Rapid urbanization and population growth strain infrastructure and increase pollution.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q19',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Development Economics: Rural Development Strategy in Developing Nations',
    questionText: '19. In developing agrarian economies, rural development is primarily a strategy focused on:',
    options: [
      'Capital intensive resources',
      'Technology intensive resources',
      'Increasing rural-urban migration',
      'The optimal utilization of natural resources and local labor'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Rural development strategies in agrarian countries focus on the sustainable mobilization and optimal utilization of abundant local natural resources (land, water, soil) and rural labor to enhance agricultural productivity and raise living standards.

🇪🇹 አማርኛ (Amharic):
የገጠር ልማት ስትራቴጂ (Rural development) ትኩረት የሚያደርገው የአካባቢውን የተፈጥሮ ሀብቶች (the utilization of natural resources) እና የሰው ኃይል በአግባቡ ስራ ላይ በማዋል የግብርና ምርታማነትን ማሳደግ ላይ ነው።

🌳 Afaan Oromoo:
Tarsiimoon misooma baadiyyaa qabeenya uumamaa jiru (utilization of natural resources) fayyadamuun jireenya hawaasa baadiyyaa fooyyessuu irratti xiyyeeffata.`,
    hint: 'Rural development focuses on the mobilization of local natural resources and land.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2017-q20',
    subject: 'Economics',
    year: '2017 E.C.',
    topic: 'Environmental Economics: Definition of Climate Change',
    questionText: '20. Which one of the following best describes climate change?',
    options: [
      'Persistent variation in the mean state of climate over extended periods (decades or longer)',
      'A short lived change in the weather from day to day',
      'A decline in forest coverage through deforestation',
      'Release of greenhouse gases into the atmosphere'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Climate change refers to statistically significant, persistent variations in the mean state of the climate or in its variability over extended periods of time (typically decades or centuries), unlike day-to-day weather fluctuations.

🇪🇹 አማርኛ (Amharic):
የአየር ንብረት ለውጥ (Climate change) ማለት ለረጅም አመታት (አስርት አመታት) የሚቆይ የአማካይ አየር ጠባይ ቋሚ ለውጥ (Persistent variation in the mean state of climate) ነው።

🌳 Afaan Oromoo:
Jijjiiramni qilleensaa (climate change) jijjiirama amala qilleensaa yeroo dheeraaf (waggoota hedduuf) itti fufiinsaan mul\'atudha.`,
    hint: 'Climate change is persistent variation in the mean state of climate over decades.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
