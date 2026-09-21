import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const ECONOMICS_2016_EC_PART1: Question[] = [
  {
    id: 'econ-2016-q1',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Aggregate Supply & Price Level Changes',
    questionText: '1. Which one of the following represents the increase in the quantity supplied of real GDP due to the increase in the price level?',
    options: [
      'The right wards shifts of the aggregate supply curve',
      'The left wards shifts of the aggregate supply curve',
      'The downwards movements along the aggregate supply curve',
      'The upwards movements along the aggregate supply curve'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
A change in the price level causes a movement along the Short-Run Aggregate Supply (SRAS) curve:
• An increase in the general price level increases firms' revenues relative to sticky production costs, motivating them to produce more output.
• This is represented geometrically as an upward movement along the aggregate supply curve (change in quantity supplied of real GDP).
• Shifts in the AS curve (left or right) occur only when non-price determinants change (e.g., input prices, technology, productivity).

🇪🇹 አማርኛ (Amharic):
የአጠቃላይ የዋጋ ደረጃ (price level) መጨመር ምክንያት የሚፈጠር የሀገር ውስጥ አጠቃላይ ምርት (real GDP) አቅርቦት ጭማሪ በአጠቃላይ የአቅርቦት መስመር ላይ ወደ ላይ የሚደረግ እንቅስቃሴን (upward movement along the aggregate supply curve) ያሳያል። የ AS መስመር ወደ ቀኝ ወይም ወደ ግራ የሚዛወረው ከዋጋ ውጪ ያሉ ሌሎች ምክንያቶች (እንደ የግብዓት ዋጋ፣ ቴክኖሎጂ) ሲቀየሩ ብቻ ነው።

🌳 Afaan Oromoo:
Sababa daballii sadarkaa gatiitiin (price level) dhiyeessiin oomisha waliigalaa (real GDP) yeroo dabalu, kun sarara dhiyeessii waliigalaa (AS) irra gara oliitti socho\'uu (upward movement along the AS curve) agarsiisa. Jijjiiramni sararichaa gara mirgaa yookiin bitaatti kan ta\'u gatii malee sababoonni biroo yoo jijjiiramaniidha.`,
    hint: 'A change in price level causes movement along the curve, not a shift.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q2',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Long-Run Equilibrium and Natural Real GDP',
    questionText: '2. When the economy is in the long run, which of the following is correct?',
    options: [
      'Sticky wages and workers misperception still holds true.',
      'What the economy produces is the full employment real GDP.',
      'The short run and the long run real GDP will be the same.',
      'The level of real GDP the economy produces is less than the natural real GDP.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In the long run:
• All input prices, wages, and perceptions are fully flexible and have completely adjusted.
• The economy produces at its potential level of output, which is the full-employment real GDP (also known as Natural Real GDP).
• Long-Run Aggregate Supply (LRAS) is vertical at this full-employment level of output.

🇪🇹 አማርኛ (Amharic):
በተራዘመ ጊዜ (Long Run) ውስጥ፡
• ደመወዞች እና የግብዓት ዋጋዎች ሙሉ በሙሉ ተለዋዋጭና የተስተካከሉ ይሆናሉ።
• ኢኮኖሚው የሚያመርተው ምርት ሙሉ የሥራ ዕድል ባለበት ሁኔታ የሚገኘውን ትክክለኛ ምርት (Full Employment Real GDP / Natural Real GDP) ነው።

🌳 Afaan Oromoo:
Yeroo dheeraa (long run) keessatti:
• Mindaan fi gatiin galteewwanii hundi guutummaatti wal-sirreessu.
• Dinagdeen oomisha carraa hojii guutuu (full employment real GDP / Natural Real GDP) oomisha. Sararri LRAS dhaabbataa (vertical) ta\'a.`,
    hint: 'In the long run, output adjusts to the natural / full-employment level of real GDP.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q3',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Short-Run Price Pressures & Disequilibrium',
    questionText: '3. What is the pressure on price when the quantity demanded of real GDP is greater than the quantity supplied of real GDP during the short run?',
    options: [
      'The price level rises',
      'The price level drops',
      'No pressure at all',
      'Initially downwards'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
When the quantity demanded of real GDP exceeds the quantity supplied of real GDP in the short run (Excess Demand or Shortage):
• Buyers compete for the limited available output.
• Inventories deplete faster than expected, placing upward pressure on the general price level until macroeconomic equilibrium is restored.

🇪🇹 አማርኛ (Amharic):
በአጭር ጊዜ ውስጥ የተጠየቀው የሀገር ውስጥ ምርት መጠን ከቀረበው የምርት መጠን ሲበልጥ (Excess Demand / እጥረት ሲፈጠር)፡
• ገዢዎች ባለው ውስን ምርት ላይ ይወዳደራሉ፣ ይህም በአጠቃላይ የዋጋ ደረጃ ላይ ወደ ላይ የመጨመር ጫና (price level rises) ይፈጥራል።

🌳 Afaan Oromoo:
Yeroo gabaabaa keessatti hamma fedhii oomisha waliigalaa hamma dhiyeessii irra yoo caale (Excess Demand):
• Hanqinni waan uumamuuf, sadarkaa gatii irratti dhiibbaa daballii uuma; gatiin ni dabala (price level rises).`,
    hint: 'Excess demand creates shortage and forces the price level to rise.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q4',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Long-Run Equilibrium Definition',
    questionText: '4. Which one of the following is correct about the economy when it is in long run equilibrium?',
    options: [
      'The economy produces the real GDP which is called the natural real GDP.',
      'The short run aggregate demand curve intersects the short run aggregate supply curve.',
      'The long run aggregate demand curve intersects the short run aggregate supply curve.',
      'Price temporarily deviates from equilibrium even if aggregate demand and aggregate supply remain unchanged.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
An economy is in long-run macroeconomic equilibrium when the Aggregate Demand curve, the Short-Run Aggregate Supply curve, and the Long-Run Aggregate Supply curve all intersect simultaneously at a single point.
• At this point, actual real GDP produced equals Natural Real GDP (potential GDP / full employment output).

🇪🇹 አማርኛ (Amharic):
አንድ ኢኮኖሚ በተራዘመ ጊዜ ሚዛናዊነት (Long-run equilibrium) ላይ ሲገኝ፡
• ትክክለኛው ምርት ከተፈጥሮአዊው ወይም አቅም ከሚፈቅደው ሙሉ የምርት መጠን (Natural Real GDP) ጋር እኩል ይሆናል። AD፣ SRAS እና LRAS በአንድ ነጥብ ላይ ይገናኛሉ።

🌳 Afaan Oromoo:
Dinagdeen tokko madaallii yeroo dheeraa (long run equilibrium) irra jira kan jedhamu:
• Dinagdeen oomisha dandeettii isaatiin wal-gitu kan 'Natural Real GDP' jedhamu yeroo oomishudha. Sararoonni AD, SRAS fi LRAS qabxii tokkotti wal-qaxxaamuru.`,
    hint: 'In long-run equilibrium, the economy operates at its Natural Real GDP level.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q5',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Microeconomics: Market Failure & Resource Allocation',
    questionText: '5. Which of the following represents an economic situation where there is an inefficient distribution of goods and services in the free market?',
    options: [
      'Externalities',
      'Asymmetric information',
      'Market failure',
      'Free riding'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Market failure is the overarching broad economic term that describes a situation in which the free market fails to allocate resources efficiently, resulting in net social welfare loss.
• Externalities, asymmetric information, public goods, and market power (monopolies) are specific sources/causes of market failure.

🇪🇹 አማርኛ (Amharic):
የገበያ ውድቀት (Market Failure) በነፃ ገበያ ውስጥ የሀብትና የሸቀጦች ክፍፍል ፍትሃዊና ቀልጣፋ ሳይሆን ሲቀር የሚፈጠረውን አጠቃላይ የኢኮኖሚ ሁኔታ የሚገልጽ ጽንሰ-ሀሳብ ነው። ሌሎች የተዘረዘሩት (Externalities, Asymmetric info, Free riding) የገበያ ውድቀት መንስኤዎች ናቸው።

🌳 Afaan Oromoo:
Kufaatii Gabaa (Market Failure) jechuun gabaan bilisaa qabeenyaa fi tajaajiloota karaa bu\'a-qabeessa ta\'een raabsuu yoo dadhabu haala uumamuudha. Kanneen biroo akka externality fi odeeffannoo wal-hin-gittin sababoota kufaatii gabaati.`,
    hint: 'Market failure is the general term for inefficient allocation of resources in a market.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q6',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Foreign Economic Activity and Aggregate Demand',
    questionText: '6. What impacts on our aggregate demand do you expect if the level of economic activities in other countries increase?',
    options: [
      'Aggregate demand will increase.',
      'Aggregate demand will decrease.',
      'Aggregate demand remains unaffected.',
      'Aggregate demand first declines and then rises.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
When foreign economies expand and experience rising incomes:
• Foreign consumers and businesses purchase more imported goods from our country.
• Our exports (X) increase, which boosts Net Exports (NX = X - M).
• Because Aggregate Demand is AD = C + I + G + NX, an increase in net exports shifts the aggregate demand curve to the right (increases aggregate demand).

🇪🇹 አማርኛ (Amharic):
የሌሎች ሀገራት የኢኮኖሚ እንቅስቃሴ እና ገቢ ሲጨምር፡
• ከእኛ ሀገር የሚገዙት የኤክስፖርት (Export) መጠን ይጨምራል፣ ይህም የተጣራ የወጪ ንግድን (Net Exports = X - M) ያሳድጋል።
• AD = C + I + G + NX በመሆኑ አጠቃላይ ፍላጎታችን (Aggregate Demand) ይጨምራል (ወደ ቀኝ ይዛወራል)።

🌳 Afaan Oromoo:
Yeroo dinagdeen biyyoota alaa guddattu:
• Galii fi fedhiin isaanii waan dabaluuf shaqaxoota biyya keenyaa (ergisaa/export) baay\'isanii bitu.
• Kunis Net Exports waan dabaluuf fedhiin waliigalaa (Aggregate Demand) ni dabala.`,
    hint: 'Higher foreign income increases exports, which increases net exports (NX) and aggregate demand (AD).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q7',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Quantity Demanded vs Aggregate Demand',
    questionText: '7. Among the following, which one differentiates change in quantity demanded from change in aggregate demand?',
    options: [
      'As the price level falls, the quantity demanded of real GDP rises, ceteris paribus.',
      'It is represented as a movement from one point to another along different demand curve.',
      'A positive change in any factors causes a rightward shift in the AD curve.',
      'It is a shift in aggregate demand curve from AD1 to AD2 on different curve.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
• "Change in Quantity Demanded of Real GDP" is caused exclusively by a change in the price level (P), leading to a movement along the same AD curve (as price level falls, quantity demanded rises).
• "Change in Aggregate Demand" is caused by non-price determinants (changes in C, I, G, or NX), leading to a complete shift of the curve (from AD1 to AD2).

🇪🇹 አማርኛ (Amharic):
የተጠየቀው የሪል GDP መጠን ለውጥ (Change in quantity demanded) የሚፈጠረው በዋጋ ደረጃ (price level) ለውጥ ብቻ ሲሆን፣ በመስመሩ ላይ የሚደረግ እንቅስቃሴ ነው (የዋጋ ደረጃ ሲቀንስ የተጠየቀው ምርት ይጨምራል)። በአንፃሩ የአጠቃላይ ፍላጎት ለውጥ (Change in AD) የሚከሰተው ከዋጋ ውጭ ባሉ ምክንያቶች ሲሆን መላውን መስመር ያዛውራል።

🌳 Afaan Oromoo:
Jijjiiramni hamma fedhii oomisha waliigalaa sababa jijjiirama sadarkaa gatiitiin sarara fedhii irratti qofa socho\'uu agarsiisa (gatiin yoo gadi bu\'e hammi fedhii ni dabala). Jijjiiramni AD guutuu immoo sababoota birootiin sararicha guutummaatti jijjiira.`,
    hint: 'Change in quantity demanded is solely due to change in price level (movement along the curve).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q8',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Aggregate Demand Curve Definition',
    questionText: '8. Which of the following is correct about aggregate demand curve?',
    options: [
      'It represents the inverse relationship between the real GDP demanded and consumption expenditure, all else being equal.',
      'It is a schedule that represents the amount of real output that sellers collectively desire to sell at each price, ceteris paribus.',
      'It shows the inverse relationship between the amount of real output buyers desire to buy at each price, all else being equal.',
      'It shows the inverse relationship between the amount of real output sellers desire to sell at each price, all else being equal.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The Aggregate Demand (AD) curve shows the inverse (negative) relationship between the aggregate price level and the quantity of real GDP (real output) that all buyers (households, firms, government, and foreign buyers) desire to purchase, ceteris paribus.

🇪🇹 አማርኛ (Amharic):
የአጠቃላይ ፍላጎት መስመር (Aggregate Demand curve) በአጠቃላይ የዋጋ ደረጃ እና ገዢዎች በዚያ ዋጋ ለመግዛት በሚፈልጉት ትክክለኛ የሀገር ውስጥ ምርት መጠን (real output) መካከል ያለውን የተገላቢጦሽ (inverse) ግንኙነት ያሳያል።

🌳 Afaan Oromoo:
Sararri Fedhii Waliigalaa (AD curve) walitti dhufeenya faallaa (inverse relationship) sadarkaa gatii fi hamma oomisha waliigalaa bittotni bituu barbaadan gidduu jiru agarsiisa.`,
    hint: 'AD shows the inverse relationship between price level and total real output demanded by buyers.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q9',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Keynesian Horizontal Aggregate Supply Curve',
    questionText: '9. What is the implication of the Keynesian horizontal aggregate supply curve?',
    options: [
      'Firms can supply whatever amount demanded at the existing price because of unemployment.',
      'Firms can obtain much labour as they want as long as they pay more.',
      'As output level changes, the average cost of production increases.',
      'The labour market is in equilibrium with full employment of the labour force.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
In the Keynesian model during periods of deep recession or depression:
• There is massive unemployment and idle industrial capacity.
• Because resources are unemployed and prices/wages are sticky downward, firms can expand output and supply whatever amount is demanded at the existing price level without causing inflation (horizontal AS curve).

🇪🇹 አማርኛ (Amharic):
የኬኔዥያን አግድም የአቅርቦት መስመር (Keynesian horizontal AS curve) የሚያመለክተው በኢኮኖሚው ውስጥ ከፍተኛ የስራ አጥነት እና ያልተጠቀሙባቸው ሀብቶች በመኖራቸው፣ አምራቾች ያለ ምንም የዋጋ ጭማሪ በተመሳሳይ ነባር ዋጋ የተጠየቀውን ያህል ምርት ማቅረብ ይችላሉ ማለት ነው።

🌳 Afaan Oromoo:
Sararri dhiyeessii diriiraa (horizontal AS) kan Keynesian agarsiisu: sababa hanqina hojii fi qabeenyi hojii irra hin oolin jiruuf, dhaabbileen gatii jiruun oomisha barbaadame hunda daballii gatii tokko malee dhiyeessuu danda\'u.`,
    hint: 'Horizontal AS means high unemployment allows output to expand at constant prices.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q10',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Determinants of Real Output Supplied',
    questionText: '10. Which one of the following is the main factor that affects the amount of real output firms are willing to supply?',
    options: [
      'The price of related goods produced by other firms',
      'The price they receive for their goods',
      'The level of economic activity in other countries',
      'The price they anticipate to prevail in the future'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
In the short run, the primary factor determining the amount of real output firms are willing to produce and supply is the price they receive for their goods (the output price level) relative to their input costs. Higher output prices increase profit margins, incentivizing greater production.

🇪🇹 አማርኛ (Amharic):
አምራች ድርጅቶች የሚያቀርቡትን የሪል ምርት መጠን የሚወስነው ዋናው ነገር ለምርቶቻቸው የሚያገኙት የዋጋ ደረጃ (The price they receive for their goods) ነው። የዋጋ ደረጃ ሲጨምር የትርፍ ህዳጋቸው ስለሚሰፋ ብዙ ምርት ለማቅረብ ይነሳሳሉ።

🌳 Afaan Oromoo:
Wanti ijoon hamma oomisha dhaabbileen dhiyeessuu barbaadan murteessu gatii isaan oomisha isaaniif argataniidha (The price they receive for their goods). Gatiin yoo dabalu bu\'aan isaanii waan dabaluuf dhiyeessiin ni dabala.`,
    hint: 'Firms supply output based primarily on the price level they receive for their output.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q11',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Microeconomics: Causes of Market Failure',
    questionText: '11. Which of the following is NOT the cause of market failure?',
    options: [
      'Monopoly',
      'Externalities',
      'Factor immobility',
      'Private goods'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Private goods possess excludability and rivalry in consumption, allowing competitive free markets to price and allocate them efficiently without market failure.
• In contrast, monopoly (market power), externalities, public goods, and factor immobility prevent competitive allocation and cause market failure.

🇪🇹 አማርኛ (Amharic):
የግል ሸቀጦች (Private goods) ተፎካካሪነት እና ገላጋይነት (Rivalry and Excludability) ስላላቸው ገበያው ያለምንም ችግር በትክክለኛ ዋጋ ሊያሰራጫቸው ይችላል፤ ስለዚህ የገበያ ውድቀት መንስኤ አይደሉም። ሞኖፖሊ፣ የውጭ ተፅዕኖዎች (Externalities) እና የግብዓቶች አለመንቀሳቀስ ግን የገበያ ውድቀት መንስኤዎች ናቸው።

🌳 Afaan Oromoo:
Qabeenyi dhuunfaa (Private goods) amala dorgomtummaa fi dhowwamuu waan qabaniif gabaan bilisaa bu\'a qabeessummaan isaan raabsa; sababa kufaatii gabaa miti. Monopooliin, dhiibbaawwan alaa (externalities) fi socho\'uu dhabuun galteewwanii garuu sababoota kufaatii gabaati.`,
    hint: 'Private goods are efficiently allocated by free competitive markets.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q12',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Microeconomics: Solutions to Externalities and Market Failures',
    questionText: '12. Suppose Sol-tech company receives positive externalities from college-educated graduates and subsidizes computer education through scholarships. To which of the following groups is this type of solution for market failure classified?',
    options: [
      'Voluntary collective action solutions',
      'Government-imposed solutions',
      'Private market solutions',
      'Non-excludability'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
When private companies or individuals voluntarily solve externalities without direct government mandates (e.g., through private scholarships, internalizing benefits, charitable giving, or direct contracts), it is classified as a Private market solution (or private action to internalize externalities).

🇪🇹 አማርኛ (Amharic):
አንድ የግል ድርጅት (እንደ ሶል-ቴክ) ከመንግስት ትእዛዝ ውጭ በራሱ ተነሳሽነት ለትምህርት ስኮላርሺፕ በመስጠት የውጭ በጎ ተፅዕኖዎችን (positive externalities) ለማስተካከል የሚያደርገው ጥረት የግል ገበያ መፍትሔ (Private market solution) ተብሎ ይመደባል።

🌳 Afaan Oromoo:
Dhaabbanni dhuunfaa tokko kaka\'umsa mataa isaatiin barnootaaf iskoolaarshippii kennuun bu\'aa alaa (positive externality) ofitti fiduun kan furu taanaan, kun Furuu Gabaa Dhuunfaa (Private market solutions) jedhama.`,
    hint: 'Actions taken by private firms/individuals to internalize externalities are private market solutions.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q13',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Microeconomics: Examples of Public Goods',
    questionText: '13. Which one of the following is an example of public goods?',
    options: [
      'Houses',
      'Food items',
      'Wilderness',
      'Clothes'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Wilderness areas, national defense, clean air, and street lighting are classic examples of public goods because they are non-rival (one person's enjoyment doesn't diminish another's) and non-excludable (difficult or impossible to prevent people from accessing them).
• Houses, food items, and clothes are private goods (both rival and excludable).

🇪🇹 አማርኛ (Amharic):
የዱር ምድረ-በዳ/ተፈጥሮ (Wilderness)፣ ብሔራዊ መከላከያ እና የመንገድ መብራቶች የህዝብ ሸቀጥ (Public goods) ምሳሌዎች ናቸው፤ ምክንያቱም ተፎካካሪ ያልሆኑ እና ሰውን መከልከል የማይቻልባቸው (Non-rival & Non-excludable) በመሆናቸው ነው። ቤቶች፣ ምግብ እና ልብሶች የግል ሸቀጦች ናቸው።

🌳 Afaan Oromoo:
Bakkeewwan uumamaa bosonaa/lafa daggalaa (Wilderness), ittisa biyyaa fi ifti daandii fakkeenya Qabeenya Ummataati (Public goods). Sababni isaas dorgommii kan hin qabnee fi namoota dhowwuun kan hin danda\'amneedha.`,
    hint: 'Public goods are non-rival and non-excludable, like natural wilderness or national defense.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q14',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Microeconomics: Characteristics of Public Goods',
    questionText: '14. Which of the following characterize Public goods?',
    options: [
      'Rivalry and excludability',
      'Rivalry and non-excludability',
      'Non-rivalry and excludability',
      'Non-rivalry and non-excludability'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Pure public goods are defined by two essential characteristics:
1. Non-rivalry: One person's consumption of the good does not reduce its availability or benefit to others.
2. Non-excludability: It is practically impossible or prohibitively expensive to exclude non-payers from consuming the good.

🇪🇹 አማርኛ (Amharic):
የህዝብ ሸቀጦች (Public Goods) በሁለት ዋና ባህሪያት ይገለፃሉ፡
1. ተፎካካሪ አለመሆን (Non-rivalry)፡ የአንድ ሰው መጠቀም የሌላውን ሰው የመጠቀም ዕድል አይቀንሰውም።
2. ገላጋይ አለመሆን (Non-excludability)፡ ክፍያ ያልፈጸሙ ሰዎችን ከመጠቀም ማግለል ወይም መከልከል አይቻልም።

🌳 Afaan Oromoo:
Qabeenyi Ummataa (Public goods) amaloota gurguddoo lamaan beekama:
1. Dorgommii dhabuu (Non-rivalry): Fayyadamiinsi nama tokkoo kan nama biroo hin hir\'isu.
2. Dhowwuu dhabuu (Non-excludability): Namoota kaffaltii hin raawwanne fayyadama irraa dhowwuun hin danda\'amu.`,
    hint: 'Public goods are defined by non-rivalry in consumption and non-excludability.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q15',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Microeconomics: The Free-Rider Problem',
    questionText: '15. Which one of the following factors is the reason for market inefficiency in the provision of public goods?',
    options: [
      'Externality',
      'Free riding',
      'Divisibility',
      'High marginal cost'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Because public goods are non-excludable, individuals have an incentive to consume the good without paying for it (the Free-Rider problem).
• Since private markets cannot force non-payers to pay, private firms will underproduce or fail to provide public goods altogether, necessitating government provision through taxation.

🇪🇹 አማርኛ (Amharic):
የህዝብ ሸቀጦችን በግል ገበያ በኩል ለማቅረብ የሚፈጠረው ዋናው ችግር "ያለ ክፍያ የመጠቀም" ችግር (Free riding) ነው። ሰዎች ሳይከፍሉ የመጠቀም ዕድል ስላላቸው፣ የግል አቅራቢዎች ተገቢውን ትርፍ ማግኘት ስለማይችሉ በቂ አቅርቦት ማቅረብ አይችሉም።

🌳 Afaan Oromoo:
Sababni qabeenyi ummataa gabaa dhuunfaatiin dhiyaachuu dadhabuuf rakkoo kaffaltii malee fayyadamuu (Free-riding problem) waan qabuufi. Dhaabbileen dhuunfaa bu\'aa waan hin arganneef mootummaan taaksii irraa dhiyeessuu qaba.`,
    hint: 'Free-rider problem occurs because people can benefit from public goods without paying.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q16',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Fiscal Policy Definition',
    questionText: '16. Which of the following macroeconomic policies involves the government manipulating its expenditure and revenue side?',
    options: [
      'Monetary policy',
      'Fiscal policy',
      'Income policy',
      'Exchange rate policy'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Fiscal policy is the use of government spending (expenditure) and taxation (revenue) to influence macroeconomic conditions, such as aggregate demand, employment, inflation, and economic growth.
• Monetary policy is conducted by the central bank managing money supply and interest rates.

🇪🇹 አማርኛ (Amharic):
የፊስካል ፖሊሲ (Fiscal Policy) ማለት መንግስት የኢኮኖሚውን አጠቃላይ ፍላጎት፣ የዋጋ ግሽበትና የስራ እድል ለማስተካከል የራሱን ወጪዎች (expenditures) እና የገቢ ምንጮች (taxation/revenues) የሚቆጣጠርበት ፖሊሲ ነው።

🌳 Afaan Oromoo:
Imaammanni Faayinaansii/Fiiskaalaa (Fiscal policy) imaammata mootummaan baasii isaa fi galii taaksii isaa fayyadamuun dinagdee, oomisha fi hoji-dhabdummaa ittiin to\'atudha.`,
    hint: 'Government spending and taxation policies are called fiscal policies.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q17',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Contractionary Fiscal Policy Instruments',
    questionText: '17. Which one of the following instruments is considered by contractionary fiscal policy when there is excess demand and inflationary pressure in the economy?',
    options: [
      'A decrease in expenditure',
      'Reduction of taxes',
      'An increase in expenditure',
      'Reduction of revenue'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
When an economy experiences demand-pull inflation and excess aggregate demand, contractionary fiscal policy is enacted to cool down the economy by:
1. Decreasing government spending (A decrease in expenditure) and/or
2. Increasing taxes (raising tax rates).
Both actions shift Aggregate Demand to the left, alleviating inflationary pressures.

🇪🇹 አማርኛ (Amharic):
በኢኮኖሚ ውስጥ ከመጠን ያለፈ ፍላጎትና የዋጋ ግሽበት (Inflation) በሚኖርበት ጊዜ፣ አፋኝ ወይም ገዳቢ የፊስካል ፖሊሲ (Contractionary fiscal policy) የመንግስትን ወጪ መቀነስን (A decrease in expenditure) ወይም ታክስን መጨመርን ይጠቀማል።

🌳 Afaan Oromoo:
Yeroo dinagdeetti fedhiin baay\'ee dabalee fi gatiin mi\'aa olka\'u, imaammanni fiiskaalaa gadi-hir\'isaa (contractionary fiscal policy) baasii mootummaa hir\'isuu (decrease in expenditure) fi taaksii dabaluu fayyadama.`,
    hint: 'To fight inflation, contractionary fiscal policy cuts government expenditures.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q18',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Tight Monetary Policy Conditions',
    questionText: '18. A tight monetary policy is applied in circumstances where there is:',
    options: [
      'high inflation.',
      'high economic growth.',
      'high unemployment.',
      'slow economic growth.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
A tight (contractionary) monetary policy—raising interest rates, selling government securities in open market operations, or increasing the reserve requirement—is deployed specifically to curb money supply growth and restrain high inflation.

🇪🇹 አማርኛ (Amharic):
ጠበቅ ያለ የገንዘብ ፖሊሲ (Tight/Contractionary monetary policy) ስራ ላይ የሚውለው በሀገር ውስጥ ከፍተኛ የዋጋ ግሽበት (High inflation) በሚኖርበት ወቅት የገንዘብ ዝውውርን በመቀነስ የዋጋ ንረትን ለመግታት ነው።

🌳 Afaan Oromoo:
Imaammanni maallaqaa cimsamaa (Tight monetary policy) kan hojiirra oolu yeroo gatiin mi\'aa baay\'ee dabaluudha (high inflation). Kunis dhiyeessii maallaqaa hir\'isuun gatii tasgabbeessa.`,
    hint: 'Tight monetary policy reduces money supply to combat high inflation.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q19',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Incomes Policy and Price Stabilization',
    questionText: '19. If tight fiscal and monetary policies fail to address the problem of rising price level, what is the alternative policy that the government should consider?',
    options: [
      'Exchange rate policy',
      'Trade policy',
      'Income policy',
      'Interest rate policy'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
When traditional demand-management tools (fiscal and monetary policies) are inadequate to tame stubborn inflation (such as cost-push or wage-price spiral inflation), governments resort to Incomes Policy (direct wage and price controls or guidelines) to restrain wage increases and price escalation directly.

🇪🇹 አማርኛ (Amharic):
የፊስካል እና የገንዘብ ፖሊሲዎች የዋጋ ንረትን መቆጣጠር ሳይችሉ ሲቀሩ፣ መንግስት እንደ አማራጭ የሚጠቀመው የገቢና የዋጋ መቆጣጠሪያ ፖሊሲን (Income policy / Direct wage and price controls) ነው።

🌳 Afaan Oromoo:
Imaammanni fiiskaalaa fi maallaqaa gatii mi\'aa to\'achuu yoo dadhaban, mootummaan akka filannootti Imaammata Galii fi Gatii To\'achuu (Income policy) hojiirra oolcha.`,
    hint: 'Income policies set direct controls or guidelines on wages and commodity prices.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q20',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'International Economics: Exchange Rate Regimes',
    questionText: '20. Which of the following exchange rate regimes is the one that is determined by government political and economic decisions?',
    options: [
      'Floating exchange rate regime',
      'Fixed exchange rate regime',
      'Managed floating',
      'Crawling peg regime'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Under a Fixed Exchange Rate Regime (pegged exchange rate), the official value of the national currency is directly established, maintained, and determined by the government or central bank through official decrees and foreign reserve interventions rather than free market forces of supply and demand.

🇪🇹 አማርኛ (Amharic):
ቋሚ የውጭ ምንዛሬ ተመን (Fixed exchange rate regime) ማለት የሀገሪቱ ገንዘብ ምንዛሬ በነፃ ገበያ ፍላጎትና አቅርቦት ሳይሆን በመንግስትና በብሔራዊ ባንክ ፖለቲካዊና ኢኮኖሚያዊ ውሳኔዎች ተመን የሚወጣለት ስርአት ነው።

🌳 Afaan Oromoo:
Sirni jijjiirraa sharafa dhaabbataa (Fixed exchange rate regime) kan jedhamu gatiin sharafa biyya tokkoo fedhii fi dhiyeessii gabaatiin osoo hin taane murtee fi imaammata mootummaatiin kan murtaa\'udha.`,
    hint: 'Fixed exchange rates are officially decreed and pegged by government policy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
