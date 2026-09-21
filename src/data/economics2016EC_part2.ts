import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const ECONOMICS_2016_EC_PART2: Question[] = [
  {
    id: 'econ-2016-q21',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Microeconomics: Negative Externalities & Social Cost',
    questionText: '21. Which one of the following differences is the cause for efficiency loss in the presence of negative externality?',
    options: [
      'Between marginal social benefit and marginal private benefit',
      'Between marginal social cost and marginal private cost',
      'Between private marginal cost and marginal external cost',
      'Between private marginal benefit and marginal external benefit'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A negative externality occurs when an economic activity imposes an uncompensated cost on third parties.
• Marginal Social Cost (MSC) = Marginal Private Cost (MPC) + Marginal External Cost (MEC).
• The divergence/difference between Marginal Social Cost and Marginal Private Cost leads to overproduction in the free market and deadweight welfare loss.

🇪🇹 አማርኛ (Amharic):
አሉታዊ የውጭ ተፅዕኖ (Negative Externality) በሚኖርበት ጊዜ የውጤታማነት ማጣት የሚከሰተው በማህበራዊ ህዳግ ወጪ እና በግል ህዳግ ወጪ መካከል ባለው ልዩነት (Difference between marginal social cost and marginal private cost) ምክንያት ነው። ገበያው ከሚገባው በላይ እንዲያመርት ያደርጋል።

🌳 Afaan Oromoo:
Dhiibbaa alaa miidhaa qabu (negative externality) keessatti, hanqinni bu\'a-qabeessummaa kan uumamu garaagarummaa baasii hawaasummaa (MSC) fi baasii dhuunfaa (MPC) gidduu jiruuni. Kunis oomishni gabaa baay\'ee akka oomishamu taasisa.`,
    hint: 'Negative externality creates a gap where Marginal Social Cost exceeds Marginal Private Cost.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q22',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Microeconomics: Information Asymmetry & Adverse Selection',
    questionText: '22. When an insurance company provides fringe benefits on the basis of an average rate over a set of employees and guarantees them to participate in the program, then this can be seen as a solution for which one of the following problems?',
    options: [
      'Adverse selection',
      'Moral hazard',
      'Signalling',
      'Screening'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Adverse selection arises before a transaction when high-risk individuals are more likely to buy insurance than low-risk individuals.
• By insuring an entire mandatory group/pool of employees at an average group rate, the insurer combines low-risk and high-risk individuals, neutralizing adverse selection.

🇪🇹 አማርኛ (Amharic):
የኢንሹራንስ ኩባንያዎች ሁሉንም ሰራተኞች በአማካይ ተመን በቡድን አባልነት በማካተት የሚያቀርቡት አገልግሎት ተገቢ ያልሆነ ምርጫን (Adverse Selection) ለመፍታት የሚደረግ የመፍትሔ እርምጃ ነው። ከፍተኛ ስጋት ያለባቸው ሰዎች ብቻ ኢንሹራንስ እንዳይገዙ ያደርጋል።

🌳 Afaan Oromoo:
Dhaabbanni inshuuraansii hojjettoota hunda waliin madaallii giddu-galeessaatiin yeroo inshuuraansii keessa galchu, kun rakkoo filannoo faallaa (Adverse selection) furuuf gargaara.`,
    hint: 'Group insurance pooling solves the adverse selection problem in insurance markets.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q23',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Monetary Policy Definition',
    questionText: '23. Which of the following macroeconomic policies involves management of money supply and interest rate?',
    options: [
      'Fiscal policy',
      'Exchange rate policy',
      'Monetary policy',
      'Income policy'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Monetary policy is the policy conducted by a nation's central bank to control the money supply and regulate interest rates to achieve macroeconomic stability (price stability, economic growth, and high employment).

🇪🇹 አማርኛ (Amharic):
የገንዘብ ፖሊሲ (Monetary Policy) በሀገር ብሔራዊ ባንክ የሚመራ ሆኖ፣ የገንዘብ አቅርቦት መጠንንና የወለድ ምጣኔን (Money supply and interest rate) የመቆጣጠር እና የማስተዳደር ተግባር ነው።

🌳 Afaan Oromoo:
Imaammanni maallaqaa (Monetary policy) imaammata baankii giddu-galeessatiin dhiyeessii maallaqaa fi dhala maallaqaa (interest rate) to\'achuuf hojiirra ooludha.`,
    hint: 'Managing money supply and interest rates is the core domain of monetary policy.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q24',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Open Market Operations',
    questionText: '24. Which one of the following is the monetary policy tool that involves the purchase and sale of securities by the nation\'s central bank?',
    options: [
      'Discount rate',
      'Open market operation',
      'Required reserve ratio',
      'Government spending'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Open Market Operations (OMO) is the buying and selling of government securities (such as treasury bills and bonds) in the open secondary market by the central bank to adjust the liquidity and monetary reserves in the banking system.

🇪🇹 አማርኛ (Amharic):
የክፍት ገበያ እንቅስቃሴ (Open Market Operation - OMO) የሀገሪቱ ብሔራዊ ባንክ የገንዘብ መጠንን ለመቆጣጠር የመንግስት የሰነድ መዋዕለ ንዋዮችን (bonds/treasury bills) የሚገዛበትና የሚሸጥበት የገንዘብ ፖሊሲ መሳሪያ ነው።

🌳 Afaan Oromoo:
Hojiin Gabaa Banaa (Open Market Operation) baankiin giddu-galeessaa boondii fi sanadoota mootummaa gabaa keessatti bituu fi gurguruudhaan dhiyeessii maallaqaa kan ittiin to\'atudha.`,
    hint: 'Buying and selling government securities by the central bank is called Open Market Operations.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q25',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Macroeconomics: Tools of Fiscal Policy',
    questionText: '25. One of the following is considered to be a fiscal policy tool. Which one is it?',
    options: [
      'Taxation',
      'Investment',
      'Discount rate',
      'Transfer payments'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The primary instruments of fiscal policy are government taxation and government spending (expenditure). Taxation directly alters disposable personal income and business after-tax profits.
• Discount rate and reserve ratios are monetary policy tools.

🇪🇹 አማርኛ (Amharic):
ታክስ ወይም ግብር (Taxation) የመንግስት ዋነኛ የፊስካል ፖሊሲ መሳሪያ ነው። የመንግስት ወጪ እና የታክስ ህጎች የፊስካል ፖሊሲ ምሰሶዎች ናቸው።

🌳 Afaan Oromoo:
Taaksiin (Taxation) meeshaa gurguddaa imaammata fiiskaalaa mootummaati. Baasii mootummaa fi taaksiin fedhii waliigalaa to\'achuuf tajaajilu.`,
    hint: 'Taxation and government spending are the main fiscal policy instruments.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q26',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Microeconomics: Price Ceiling Regulation',
    questionText: '26. Which one of the following is correct about price ceilings?',
    options: [
      'It is one of the income policies that keeps a price from declining below a certain limit.',
      'It is a maximum price set by law to make basic consumption goods affordable to buyers.',
      'It should be set above the equilibrium price to make it more effective.',
      'It discourages consumers from buying goods and services since they are now paying higher price.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A price ceiling is a legally established maximum price that sellers are allowed to charge for a good or service.
• It is set below the market equilibrium price to protect consumers by making essential necessities affordable, though binding price ceilings typically create shortages.

🇪🇹 አማርኛ (Amharic):
የዋጋ ጣሪያ (Price Ceiling) መሰረታዊ ሸቀጦች ለሸማቾች በተመጣጣኝ ዋጋ እንዲቀርቡ በመንግስት ህግ የሚደነገግ ከፍተኛው ህጋዊ የመሸጫ ዋጋ (Maximum price set by law) ነው። ውጤታማ እንዲሆን ከገበያ ሚዛን ዋጋ በታች ይደረጋል።

🌳 Afaan Oromoo:
Gatii ol\'aanaa seeraan murtaa\'u (Price ceiling) jechuun shaqaxootni bu\'uuraa akka hin mi\'oofneef gatii ol\'aanaa gurgurtootni gaafachuu danda\'an kan seeraan murtaa\'udha.`,
    hint: 'A price ceiling is a statutory maximum price to keep essential goods affordable.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q27',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'International Trade: Currency Appreciation and Exports',
    questionText: '27. Suppose the value of an Ethiopian birr in terms of Kenyan Shilling is getting higher. What is the impact of this on Ethiopian exports to Kenya?',
    options: [
      'It will make the price of Ethiopian goods in the Kenyan market cheaper.',
      'It will make the Price of Kenyan import in the Ethiopian market expensive.',
      'It will increase Ethiopia\'s export earnings.',
      'It will reduce Ethiopia\'s export earnings.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
When the Ethiopian Birr appreciates relative to the Kenyan Shilling:
• Ethiopian goods become more expensive for Kenyan buyers.
• Kenyan demand for Ethiopian exports falls.
• Consequently, Ethiopia's export volume and overall export earnings will decrease (reduce Ethiopia's export earnings).

🇪🇹 አማርኛ (Amharic):
የኢትዮጵያ ብር ዋጋ ከኬንያ ሽልንግ አንፃር ሲጨምር (Appreciation)፡
• የኢትዮጵያ ምርቶች በኬንያ ገበያ ውድ ይሆናሉ።
• የኬንያ ገዢዎች ፍላጎት ስለሚቀንስ የኢትዮጵያ የኤክስፖርት ገቢ ይቀንሳል (It will reduce Ethiopia\'s export earnings)።

🌳 Afaan Oromoo:
Gatiin Birrii Itoophiyaa yeroo Shiliingii Keeniyaa caalaa olka\'u:
• Shaqaxoonni Itoophiyaa Keeniyaa keessatti ni mi\'aa\'u.
• Kanaanis bittootni Keeniyaa waan hir\'isaniif galiin ergisaa Itoophiyaa ni hir\'ata.`,
    hint: 'A stronger domestic currency makes exports expensive abroad, reducing export earnings.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q28',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Public Finance: Definition and Nature of Taxation',
    questionText: '28. Which one of the following clearly defines taxation?',
    options: [
      'It is a voluntary payment.',
      'It is the only source of government revenue.',
      'It is levied without anything in direct return.',
      'It encourages inexistence of government.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Taxation is a compulsory contribution levied by the government on individuals and businesses according to legislative authority, without any direct quid pro quo (direct return of a specific good or service to the taxpayer).

🇪🇹 አማርኛ (Amharic):
ታክስ (ግብር) ማለት ዜጎችና ድርጅቶች ለመንግስት የሚከፍሉት አስገዳጅ ክፍያ ሲሆን፣ በቀጥታ ተመላሽ የሚሆን የተለየ የግል ጥቅም ወይም አገልግሎት (without anything in direct return) ሳይጠበቅ የሚሰበሰብ ነው።

🌳 Afaan Oromoo:
Taaksiin kaffaltii dirqamaa mootummaan lammiilee irraa walitti qabuudha; kunis faayidaa kallattii battalatti deebi\'u tokko malee (without anything in direct return) kan kaffalamudha.`,
    hint: 'Taxes are compulsory levies paid without direct individual return or quid pro quo.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q29',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Public Finance: Adam Smith\'s Canon of Economy',
    questionText: '29. Which one of the following explains the tax principle called "canon of economy"?',
    options: [
      'Everyone should pay tax according to his ability.',
      'The amount of tax that we are supposed to pay should be known in advance.',
      'Every tax payer should pay the tax in his own convenient time.',
      'The cost of tax collection should be as minimum as possible.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Adam Smith's four canons of taxation:
1. Canon of Equity/Ability: Tax paid according to ability to pay.
2. Canon of Certainty: Tax liability known clearly in advance.
3. Canon of Convenience: Paid at the time most convenient for the taxpayer.
4. Canon of Economy: The administrative and collection costs of tax should be kept to a minimum so that the majority of revenue reaches the state treasury.

🇪🇹 አማርኛ (Amharic):
የቁጠባ ህግ (Canon of Economy) የሚያስረዳው ታክስን ለመሰብሰብ የሚወጣው አስተዳደራዊ ወጪ በተቻለ መጠን ዝቅተኛ መሆን አለበት (The cost of tax collection should be as minimum as possible) የሚለውን ነው።

🌳 Afaan Oromoo:
Qajeeltoo Qusannaa Taaksii (Canon of economy) jechuun baasiin taaksicha walitti qabuuf ba\'u baay\'ee xiqqaa ta\'uu qaba kan jedhudha.`,
    hint: 'Canon of economy states tax administrative/collection costs must be minimized.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q30',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Public Finance: Broad-Based Tax System',
    questionText: '30. Which of the following is the implication of a good tax system that is referred to as "broad based"?',
    options: [
      'The system should impose tax on all people without discrimination.',
      'The system should ensure that income inequality is reduced.',
      'The system should impose tax on income, properties, and commodities.',
      'The system should ascertain that national income and living standard is increasing.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A broad-based tax system spreads the tax liability across a wide variety of economic bases—including individual income, business profits, property, and consumption commodities (goods and services)—allowing the government to generate sufficient revenue while maintaining relatively lower tax rates.

🇪🇹 አማርኛ (Amharic):
ሰፊ መሰረት ያለው የታክስ ስርዓት (Broad-based tax system) ማለት ታክስ በተለያዩ ዘርፎች ላይ ማለትም በገቢ፣ በንብረት እና በሸቀጦች (income, properties, and commodities) ላይ ተደራሽ እንዲሆን በማድረግ የገቢ ምንጭን የማስፋት ዘዴ ነው።

🌳 Afaan Oromoo:
Sirni taaksii bal\'aa (broad-based tax system) kan jedhamu taaksiin galii, qabeenya fi shaqaxoota (commodities) hunda irratti wal-qixa bal\'inaan akka kaffalamu taasisuudha.`,
    hint: 'Broad-based tax covers multiple bases: income, wealth/property, and commodity consumption.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q31',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Public Finance: Advantages of Fiscal Decentralization',
    questionText: '31. Which one of the following is the advantage of fiscal decentralization?',
    options: [
      'Provide scale economies in the collection of taxes.',
      'Provide scale economies in the provision of public goods.',
      'Provision of public goods and services desired by local residents.',
      'Effective to implement equity measures.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The fundamental economic rationale for fiscal decentralization (Oates' Decentralization Theorem) is that local governments have superior information regarding local tastes and needs, allowing them to tailor and provide public goods and services that directly match the preferences of local residents.

🇪🇹 አማርኛ (Amharic):
የፊስካል ስልጣን ውክልና (Fiscal Decentralization) ዋነኛ ጠቀሜታ የአካባቢ መስተዳድሮች የአካባቢውን ህብረተሰብ ፍላጎት ጠንቅቀው ስለሚያውቁ ህዝቡ የሚፈልጋቸውን የህዝብ አገልግሎቶችና ሸቀጦች በተሻለ ሁኔታ ማቅረብ መቻላቸው ነው (Provision of public goods desired by local residents)።

🌳 Afaan Oromoo:
Faayidaan guddaan fiiskaalaa gara naannootti gadi-buusuu (Fiscal decentralization) mootummaan naannoo fedhii ummata naannichaa sirriitti waan beekuuf tajaajiloota ummatichi barbaadu sirriitti dhiyeessuu danda\'uudha.`,
    hint: 'Local governments can tailor public services directly to local preferences.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q32',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Public Finance: Objectives of Fiscal Decentralization',
    questionText: '32. One of the following is considered to be the aim of fiscal decentralization. Which one is it?',
    options: [
      'Promoting regional partnership',
      'Enhancing the role of private sector',
      'Encouraging free movement of labour',
      'Ensuring equity and efficiency'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Fiscal decentralization aims to enhance allocative efficiency (by aligning public expenditures with local priorities) and ensure geographic equity in the delivery of core public infrastructure and services across all regional jurisdictions.

🇪🇹 አማርኛ (Amharic):
የፊስካል ያልተማከለ አስተዳደር (Fiscal Decentralization) ዋና አላማ ፍትሃዊነትን እና ቀልጣፋ የሀብት አጠቃቀምን ማረጋገጥ (Ensuring equity and efficiency) ነው።

🌳 Afaan Oromoo:
Kaayyoon guddaan sirna fiiskaalaa gadi-buusuu (fiscal decentralization) haqaa fi bu\'a-qabeessummaa (equity and efficiency) mirkaneessuudha.`,
    hint: 'The dual core objectives of fiscal decentralization are efficiency and equity.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q33',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Public Finance: Intergovernmental Fiscal Equalization Grants',
    questionText: '33. Which one of the following is the reason for the federal government to make fiscal equalization payments to local governments?',
    options: [
      'To enhance intergovernmental competition',
      'To discourage fiscal centralization',
      'To encourage innovation in those goods and services provided locally',
      'To narrow regional gaps in the provision of basic public services'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Fiscal equalization grants are transfers from the central/federal government to regional or local governments designed to reduce horizontal fiscal disparities, ensuring that less-wealthy regions can provide comparable standards of basic public services (health, education, roads) without having to impose disproportionately heavy tax burdens.

🇪🇹 አማርኛ (Amharic):
የፌደራል መንግስት ለክልሎችና አካባቢ መስተዳድሮች የበጀት ድጎማ (Equalization payments) የሚያደርግበት ዋነኛ ምክንያት በክልሎች መካከል ያለውን የመሰረታዊ አገልግሎቶች አቅርቦት ልዩነት ለማጥበብ (To narrow regional gaps in the provision of basic public services) ነው።

🌳 Afaan Oromoo:
Mootummaan federaalaa mootummoota naannoof deeggarsa baajataa (fiscal equalization) kan kennuuf garaagarummaa naannolee gidduu jiru dhiphisuun tajaajila bu\'uuraa wal-qixa akka dhiyeessaniifi.`,
    hint: 'Equalization transfers reduce regional disparities in delivering basic public services.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q34',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Environmental Economics: Scarcity of Natural Resources',
    questionText: '34. What is the reason for the growing need for conservation of environmental resources?',
    options: [
      'These resources are underutilized.',
      'These resources are finite.',
      'Their use is less costly.',
      'Most of these resources are infinite.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
The critical need for environmental resource conservation stems from the fundamental reality of scarcity: natural resources (fossil fuels, minerals, fertile soil, fresh water, and biodiversity) are finite and subject to depletion or irreversible degradation if overexploited.

🇪🇹 አማርኛ (Amharic):
የተፈጥሮ እና የአካባቢ ሀብቶችን የመንከባከብና የመቆጠብ ፍላጎት የጨመረበት ዋናው ምክንያት እነዚህ የተፈጥሮ ሀብቶች ውስን (finite/scarce) በመሆናቸውና ካለቁ በቀላሉ የማይተኩ በመሆናቸው ነው።

🌳 Afaan Oromoo:
Qabeenya uumamaa kunuunsuun kan barbaachiseef qabeenyi kun murtaa\'aa (finite/scarce) waan ta\'eef yoo manca\'e deebisuun rakkisaa waan ta\'eefi.`,
    hint: 'Environmental conservation is necessary because natural resources are finite and scarce.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q35',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Environmental Economics: Greenhouse Gas Drivers',
    questionText: '35. What is the cause for rising greenhouse gases in the earth\'s atmosphere?',
    options: [
      'An increase in afforestation program',
      'A decrease in deforestation due to government policy',
      'An increase in hydropower generation',
      'The decomposition and disposal of waste'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The decomposition and anaerobic disposal of municipal solid waste in landfills produces substantial amounts of methane (CH4) and carbon dioxide (CO2), which are potent greenhouse gases that trap heat in the atmosphere.
• Afforestation, reducing deforestation, and hydropower decrease GHG emissions.

🇪🇹 አማርኛ (Amharic):
የቆሻሻ መበስበስ እና አወጋገድ (The decomposition and disposal of waste) ከፍተኛ የሆነ የሚቴን እና የካርቦን ዳይኦክሳይድ ጋዞችን ስለሚለቅ ለግሪንሃውስ ጋዞች መጨመር አንደኛው ምክንያት ነው። የደን ልማት እና የውሃ ሃይል ግን ጋዝን ይቀንሳሉ።

🌳 Afaan Oromoo:
Balfa dhabamsiisuu fi tortoruun kosii (Decomposition and disposal of waste) gaasota akka meeteenii fi kaarboonii uumuun faalama qilleensaa fi daballii ho\'aa addunyaaf sababa ta\'a.`,
    hint: 'Waste decomposition in landfills releases significant greenhouse gases like methane.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q36',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Public Finance: Direct Taxes and Property Tax',
    questionText: '36. Among the following direct taxes, which one is a tax that is imposed on land and buildings?',
    options: [
      'Income tax',
      'Property tax',
      'Transfer tax',
      'Capital gain tax'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Property tax is a direct ad valorem tax assessed specifically on real estate property—primarily land, residential buildings, and commercial structures.

🇪🇹 አማርኛ (Amharic):
በመሬት እና በህንፃዎች ላይ የሚጣለው የቀጥታ ታክስ የንብረት ታክስ (Property tax) ይባላል።

🌳 Afaan Oromoo:
Taaksiin kallattii lafaa fi manneen ijaaraman (buildings) irratti kaffalamu Taaksii Qabeenyaa (Property tax) jedhama.`,
    hint: 'A tax levied directly on immovable real estate (land and buildings) is property tax.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q37',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Public Finance: Socio-Economic Objectives of Taxation',
    questionText: '37. Which one of the following is an objective of taxation?',
    options: [
      'Reducing income disparity',
      'Promoting consumption of harmful products',
      'Widening regional imbalance',
      'Encouraging import'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
One of the primary socio-economic goals of progressive taxation is the redistribution of wealth and income to reduce income disparity (inequality) between the rich and the poor, while financing social safety nets and public goods.

🇪🇹 አማርኛ (Amharic):
የታክስ ስርዓት አንደኛው ዋና ማህበራዊና ኢኮኖሚያዊ አላማ በሀብታሞችና በድሆች መካከል ያለውን የገቢ ልዩነት መቀነስ (Reducing income disparity) እና ፍትሃዊ የሀብት ክፍፍል መፍጠር ነው።

🌳 Afaan Oromoo:
Kaayyolee gurguddoo taaksii keessaa tokko garaagarummaa galii lammiilee gidduu jiru hir\'isuudha (Reducing income disparity).`,
    hint: 'Progressive taxation is designed to reduce income disparities.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q38',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Public Finance: Tax Burden vs Tax Incidence in Indirect Taxes',
    questionText: '38. The burden and incidence are imposed on different individuals in one of the following tax categories. Which one is it?',
    options: [
      'Payroll tax',
      'Corporate income tax',
      'Value added tax',
      'Rental income tax'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Value Added Tax (VAT) is an indirect tax. In indirect taxes:
• The statutory/legal burden of collecting and remitting the tax is on registered businesses/sellers.
• The economic incidence (final burden) is shifted forward onto final consumers through higher retail prices.

🇪🇹 አማርኛ (Amharic):
በተጨማሪ እሴት ታክስ (VAT / Value Added Tax) ላይ የታክሱ ህጋዊ ከፋይ (ድርጅቱ ወይም ነጋዴው) እና ትክክለኛው የዋጋ ጫና የሚያርፍበት ግለሰብ (የመጨረሻው ሸማች) የተለያዩ ግለሰቦች ናቸው። ይህ የተዘዋዋሪ ታክስ (Indirect Tax) መለያ ባህሪ ነው።

🌳 Afaan Oromoo:
Taaksii Dabalata Qabeenyaa (VAT) keessatti dirqamni seeraa kan daldalaati, garuu dhiibbaan kaffaltii dhumaa kan gahu fayyadamaa dhumaa irratti. Kun amala taaksii al-kallattiiti.`,
    hint: 'In VAT (indirect tax), the statutory burden is on sellers, but final incidence is shifted to consumers.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q39',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Ethiopian Economy: Tax Administration Institutions',
    questionText: '39. In Ethiopia, which one of the following institutions is responsible for collecting tax on behalf of the government?',
    options: [
      'The Ministry of Finance',
      'The Central Bank',
      'The Commercial bank',
      'The Ministry of Revenue'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
In Ethiopia, the Ministry of Revenues (formerly the Ethiopian Revenues and Customs Authority - ERCA) is the dedicated federal executive institution mandated to assess, collect, and enforce domestic and international trade taxes on behalf of the government.

🇪🇹 አማርኛ (Amharic):
በኢትዮጵያ ውስጥ በመንግስት ስም ታክስና ጉምሩክ ቀረጥ የመሰብሰብ ህጋዊ ስልጣን የተሰጠው ተቋም የገቢዎች ሚኒስቴር (The Ministry of Revenue) ነው።

🌳 Afaan Oromoo:
Itoophiyaa keessatti mootummaa bakka bu\'uudhaan taaksii fi gibira walitti qabuuf itti gaafatamummaa kan qabu Ministeera Galiiwwaniiti (The Ministry of Revenue).`,
    hint: 'The Ministry of Revenues is Ethiopia\'s primary tax collecting authority.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'econ-2016-q40',
    subject: 'Economics',
    year: '2016 E.C.',
    topic: 'Public Finance: Excise Tax on Luxury and Inelastic Goods',
    questionText: '40. Which one is the type of indirect tax imposed on luxury items and other goods that are demand inelastic when the goods are imported or produced locally?',
    options: [
      'Value added tax',
      'Turnover tax',
      'Excise tax',
      'Withholding tax'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Excise tax is a selective indirect tax levied on specific commodities, notably luxury items, products with negative social externalities (demerit goods like tobacco, alcohol), and demand-inelastic goods to raise state revenue and discourage harmful consumption.

🇪🇹 አማርኛ (Amharic):
የኤክሳይዝ ታክስ (Excise tax) በቅንጦት እቃዎች (luxury items)፣ ጎጂ በሆኑ ሸቀጦች እና የፍላጎት ተለዋዋጭነታቸው ዝቅተኛ በሆኑ የተወሰኑ ሸቀጦች ላይ የሚጣል የተዘዋዋሪ ታክስ አይነት ነው።

🌳 Afaan Oromoo:
Taaksiin Ekisaayizii (Excise tax) taaksii al-kallattii shaqaxoota mi\'ooftuu fi faayidaa hin qabne (luxury and demerit goods) irratti addatti kaffalamudha.`,
    hint: 'Excise tax targets luxury and demand-inelastic goods specifically.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
