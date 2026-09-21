import { StudyNote } from '../types';

export const ECONOMICS_GRADE_12_NOTES: StudyNote[] = [
  {
    id: 'econ-g12-u1-note',
    title: 'Unit 1: Fundamental Concepts of Macroeconomics (Complete Revision Summary)',
    subject: 'Economics',
    topic: 'Macroeconomic Concepts & Schools of Thought',
    summary: 'Comprehensive short notes for Grade 12 Economics Unit 1: Macroeconomics vs microeconomics, macroeconomic goals and variables, GDP and GNP measurement approaches, consumer price index (CPI) and inflation calculations, types of unemployment, business cycles, balance of payments, and schools of macroeconomic thought.',
    readTimeMinutes: 14,
    isFreePreview: true,
    tags: ['Economics', 'Grade 12', 'Macroeconomics', 'GDP', 'Inflation', 'Unemployment', 'Business Cycles', 'Economic Thought'],
    keyTakeaways: [
      'Microeconomics vs Macroeconomics: Micro studies individual economic agents; Macro studies aggregate behavior (total output, price level, national employment).',
      'GDP vs GNP: GDP measures market value of final goods/services within domestic borders; GNP = GDP + Net Factor Income from abroad (NFI).',
      'Measuring GDP: Product/Value-Added, Expenditure (GDP = C + I + G + (X - M)), and Income (wages, rent, interest, profit).',
      'Inflation: Continuous rise in general price level. Inflation Rate = [(Current CPI - Past CPI) / Past CPI] × 100%. Types: Creeping (<3%), Walking (3-10%), Running (10-20%), Galloping (double/triple-digit), Hyperinflation (>50%/month).',
      'Unemployment: Rate = (Number of Unemployed / Labour Force) × 100%. Types: Frictional (job transitions), Cyclical (demand deficiency during recessions), Structural (skills/geographic mismatch).',
      'Business Cycle: 4 phases: Expansion, Peak, Contraction (Recession), and Trough.',
      'Schools of Thought: Classical (Say\'s Law, self-correcting markets, flexible prices/wages, money neutrality), Keynesian (sticky wages, demand deficiency, active fiscal policy), Monetarism (Friedman, constant money supply growth), New Classical (rational expectations, Policy Ineffectiveness Proposition), New Keynesian (wage rigidities under rational expectations).'
    ],
    contentMarkdown: `GRADE 12 ECONOMICS — UNIT 1: THE FUNDAMENTAL CONCEPTS OF MACROECONOMICS

1. DEFINITION AND FOCUS AREAS OF MACROECONOMICS

• Definition:
  Macroeconomics is the branch of economics that studies the structure, performance, and behavior of the economy as a whole. It examines aggregate variables such as national output, total employment, general price level, and economic growth.
  - Emergence: Formalized following the 1936 publication of John Maynard Keynes's landmark work, "The General Theory of Employment, Interest and Money", in response to the Great Depression.

• Core Macroeconomic Goals:
  1. High and sustained economic growth (growth in real GDP).
  2. Full employment (minimizing involuntary unemployment).
  3. Price stability (controlling high inflation and deflation).
  4. Balance of payments equilibrium (sustainable trade and capital flows).
  5. Equitable distribution of income and wealth.

============================================================

2. MEASURING NATIONAL OUTPUT: GDP AND GNP

• Gross Domestic Product (GDP):
  The total market value of all final goods and services produced within the geographic borders of a country during a specified time period (usually one year).
  GDP = Sum(Price_i × Quantity_i)

• Gross National Product (GNP):
  The total market value of all final goods and services produced by domestically owned factors of production, regardless of their physical location.
  GNP = GDP + Net Factor Income from Abroad (NFI)
  where NFI = Factor income earned abroad by domestic citizens - Factor income earned domestically by foreign residents.

• Three Measurement Approaches for GDP:
  1. Product (Value-Added) Approach: Sum of the gross value added by all productive sectors of the economy (Agriculture, Industry, Services), counting only final goods to prevent double counting.
  2. Expenditure Approach: Sum of all final expenditures in the economy:
     GDP = C + I + G + (X - M)
     where:
     - C = Personal consumption expenditure of households
     - I = Gross private domestic investment
     - G = Government expenditure on goods and services
     - (X - M) = Net Exports (Exports - Imports)
  3. Income Approach: Sum of all factor incomes generated in production:
     GDP = Wages and Salaries + Rental Income + Net Interest + Corporate Profits + Depreciation + Indirect Business Taxes - Subsidies.

• Nominal vs. Real GDP:
  - Nominal GDP: Valued at current market prices (includes inflationary changes).
  - Real GDP: Valued at constant base-year prices (measures actual physical output changes).
  - GDP Deflator = (Nominal GDP / Real GDP) × 100.

============================================================

3. INFLATION AND THE CONSUMER PRICE INDEX (CPI)

• Inflation: A continuous and persistent increase in the general price level of goods and services in an economy.
• Deflation: A persistent decline in the general price level.

• Consumer Price Index (CPI):
  Measures the average change over time in prices paid by consumers for a representative market basket of consumer goods and services:
  CPI = (Current cost of market basket / Base-period cost of market basket) × 100

• Inflation Rate Formula:
  Inflation Rate (Year t) = [(CPI_t - CPI_(t-1)) / CPI_(t-1)] × 100%

• Classification by Speed of Occurrence:
  1. Creeping Inflation: Slow, predictable price rise of 3% or less annually.
  2. Walking Inflation: Single-digit annual inflation between 3% and 10%.
  3. Running Inflation: Rapid price rise between 10% and 20% per year.
  4. Galloping (Jumping) Inflation: Extreme double- or triple-digit annual inflation (e.g. 50% to 500%).
  5. Hyperinflation: Uncontrolled price acceleration exceeding 50% per month (e.g., Hungary 1946 with monthly inflation of 41.9 quadrillion percent; Zimbabwe 2007-2009).

• Primary Causes of Inflation:
  - Demand-Pull Inflation: Aggregate demand exceeds aggregate supply at full employment ("too much money chasing too few goods").
  - Cost-Push Inflation: Rising production costs (wages, raw materials, imported oil) shift aggregate supply upward.
  - Money Supply Expansion & Seigniorage: Excessive printing of currency by governments to finance fiscal budget deficits, acting as an "inflation tax" on money holders.

============================================================

4. UNEMPLOYMENT

• Definitions in Ethiopian Labour Law:
  - Working Age Population: Persons aged 14 to 60 years (formal employment minimum age is 18).
  - Labour Force = Employed Persons + Unemployed Persons.
  - Unemployment Rate = (Number of Unemployed / Total Labour Force) × 100%
  - Labour Force Participation Rate = (Labour Force / Adult Working-Age Population) × 100%

• Major Types of Unemployment:
  1. Frictional Unemployment: Short-term unemployment arising from workers transitioning between jobs or recent graduates searching for their first job.
  2. Cyclical Unemployment: Caused by deficiency of aggregate effective demand during economic downturns and recessions.
  3. Structural Unemployment: Involuntary unemployment resulting from a mismatch between the skills workers possess and the requirements of available jobs, technological changes, or geographical immobility.
  4. Underemployment & Disguised Unemployment: Workers forced to accept jobs below their qualification level or working on small farms where marginal productivity is close to zero.

============================================================

5. BUSINESS CYCLES & BALANCE OF TRADE

• The Four Phases of a Business Cycle:
  1. Expansion (Recovery): Real GDP, employment, income, and business investments increase; upward pressure on prices.
  2. Peak: Highest point of economic activity; economy operates near potential full employment capacity with strong inflationary pressure.
  3. Contraction (Recession): Real GDP falls, business profits decline, unemployment rises, and inflation eases.
  4. Trough: Lowest point of the economic downturn, where contraction ends and the next expansion begins.

• Balance of Trade (BOT) vs. Balance of Payments (BOP):
  - Balance of Trade = Dollar value of Exports (X) - Dollar value of Imports (M). Trade Surplus when X > M; Trade Deficit when M > X.
  - Balance of Payments: Comprehensive record of all economic transactions between domestic residents and the rest of the world (Current Account + Capital/Financial Account).

============================================================

6. SCHOOLS OF THOUGHT IN MACROECONOMICS

• Classical & Neoclassical Economics (Adam Smith, David Ricardo, J.B. Say, Alfred Marshall):
  - Say\'s Law: "Supply creates its own demand."
  - Flexible prices and wages ensure the economy automatically self-adjusts to full employment.
  - Money Neutrality: Money supply changes only affect the nominal price level, not real output.
  - Policy: Laissez-faire; fiscal and monetary interventions are unnecessary and distortive.

• Keynesian Economics (John Maynard Keynes):
  - Rejects automatic self-correction due to Sticky Wages and Prices.
  - Aggregate Demand determines the level of employment and output in the short run.
  - Policy: Active countercyclical fiscal policy (government spending and tax cuts) is required to pull an economy out of recession.

• Monetarism (Milton Friedman):
  - Money supply is the primary determinant of national income and inflation.
  - Discretionary fiscal policy causes crowding out of private investment.
  - Policy: Central banks should adopt a constant money growth rule and avoid discretionary fine-tuning due to long and variable policy lags.

• New Classical Macroeconomics (Robert Lucas, Thomas Sargent, Robert Barro):
  - Rational Expectations Hypothesis (REH) with continuous market clearing.
  - Policy Ineffectiveness Proposition (PIP): Anticipated systematic monetary and fiscal policies have no impact on real output and employment.

• New Keynesian Economics (George Akerlof, Joseph Stiglitz, Gregory Mankiw):
  - Accepts rational expectations but provides microeconomic foundations for nominal wage/price rigidities (contract terms, menu costs, imperfect competition).
  - Validates government stabilization policies even under rational expectations.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'econ-g12-u2-note',
    title: 'Unit 2: Aggregate Demand and Aggregate Supply Analysis (Complete Revision Summary)',
    subject: 'Economics',
    topic: 'Aggregate Demand & Aggregate Supply (AD-AS)',
    summary: 'Comprehensive short notes for Grade 12 Economics Unit 2: Concepts and components of aggregate demand (AD), why the AD curve slopes downward, shifts in AD, Short-Run Aggregate Supply (SRAS) sticky wage explanations, Long-Run Aggregate Supply (LRAS), and macroeconomic equilibrium with demand and supply shocks.',
    readTimeMinutes: 12,
    isFreePreview: true,
    tags: ['Economics', 'Grade 12', 'Aggregate Demand', 'Aggregate Supply', 'AD-AS Model', 'Macroeconomic Equilibrium'],
    keyTakeaways: [
      'Aggregate Demand (AD): Total spending in the economy; AD = C + I + G + (X - M).',
      'Downward Slope of AD: Explained by Real Balance (Wealth) Effect, Interest Rate Effect, and International Trade Effect.',
      'Shifts in AD: Caused by changes in consumer wealth, expectations, income taxes, interest rates, government purchases, or net exports.',
      'Aggregate Supply (AS): Keynesian (horizontal), Classical (vertical at full employment), and Short-Run AS (upward sloping).',
      'SRAS Slope Explanations: Sticky wages (contract agreements lock in nominal wages) and Worker misperceptions of real wage changes.',
      'LRAS: Vertical at natural potential real GDP (QN) where prices and wages are fully flexible.',
      'Equilibrium & Shocks: Positive AD shock increases both P and Y; Negative supply shock shifts SRAS left, increasing P and reducing Y (Stagflation).'
    ],
    contentMarkdown: `GRADE 12 ECONOMICS — UNIT 2: AGGREGATE DEMAND AND AGGREGATE SUPPLY ANALYSIS

1. AGGREGATE DEMAND (AD)

• Concept and Formula:
  Aggregate demand represents the total quantity of all domestic goods and services that households, businesses, the government, and foreign buyers willingly purchase at different price levels.
  AD = C + I + G + (X - M)
  where C = Consumption, I = Investment, G = Government Purchases, and (X - M) = Net Exports.

• Why the Aggregate Demand Curve Slopes Downward:
  There is an inverse relationship between the general price level (P) and real GDP demanded (Y). This is driven by three macroeconomic mechanisms:
  1. Real Balance (Monetary Wealth) Effect: As the general price level rises, the real purchasing power of accumulated cash and financial assets declines, reducing consumer spending.
  2. Interest Rate Effect: A higher price level increases money demand. With a fixed money supply, higher money demand drives up interest rates, raising borrowing costs and curtailing interest-sensitive investment (I) and consumer durables spending (C).
  3. International Trade Effect: A rise in domestic price level makes domestic goods relatively more expensive than foreign substitutes, reducing exports (X) and increasing imports (M), thereby decreasing net exports (X - M).

• Change in Quantity Demanded vs. Shift in Aggregate Demand:
  - Movement along AD Curve: Occurs solely due to a change in the general price level (P).
  - Shift in AD Curve: Occurs when non-price determinants change total spending at any given price level.

• Factors Shifting Aggregate Demand:
  - Consumption (C): Increases with higher household wealth, optimistic future expectations, lower real interest rates, and income tax cuts (shifts AD right).
  - Investment (I): Increases with lower interest rates, optimistic business sales expectations, and reductions in corporate business taxes.
  - Government Spending (G): Direct increases in public infrastructure, defense, or social spending shift AD right.
  - Net Exports (X - M): Increases with higher foreign national incomes, or depreciation of the domestic currency (making exports cheaper to foreign buyers).

============================================================

2. AGGREGATE SUPPLY (AS)

• Concept:
  Aggregate supply represents the total real output of goods and services that firms in the national economy are willing and able to produce and sell at different price levels.

• Three Perspectives on Aggregate Supply:
  1. Keynesian AS Curve: Perfectly horizontal at the existing price level during depression/recession due to high unemployment and idle capacity.
  2. Classical AS Curve: Perfectly vertical at the natural full-employment level of output, assuming instant wage and price flexibility.
  3. Short-Run Aggregate Supply (SRAS): Upward-sloping curve showing that higher price levels incentivize firms to expand real output in the short run.

• Why the SRAS Curve Slopes Upward:
  - Sticky Wage Theory: Nominal wages are fixed in the short run by multi-year labor contracts and social conventions. When the price level rises, real wages (Nominal Wage / Price Level) fall, reducing labor costs per unit and increasing firm profitability, inducing firms to hire more workers and produce more output.
  - Worker Misperception Theory: When nominal wages fall, workers may temporarily miscalculate their purchasing power and mistakenly reduce their labor supply, causing output to fall when price levels decline.

• Determinants Shifting the SRAS Curve:
  - Input Costs & Resource Prices: Rising wage rates, imported oil price hikes, or raw material shortages shift SRAS to the left.
  - Productivity & Technology: Technological improvements and higher labor productivity lower unit production costs, shifting SRAS to the right.
  - Government Policies: Lower business taxes and production subsidies shift SRAS to the right; strict regulatory compliance costs shift SRAS to the left.
  - Agricultural Supply Conditions: Good rainfall and favorable weather shift agricultural SRAS right; severe droughts shift SRAS left.

• Long-Run Aggregate Supply (LRAS):
  In the long run, all input prices and wages become fully flexible. The economy naturally produces at its full-employment potential real GDP (Natural Real GDP, QN). The LRAS curve is a vertical line at QN.

============================================================

3. MACROECONOMIC EQUILIBRIUM & ECONOMIC SHOCKS

• Short-Run Macroeconomic Equilibrium:
  Occurs at the price level and real output where the Aggregate Demand curve intersects the Short-Run Aggregate Supply curve (AD = SRAS).
  - If Price > Equilibrium: Quantity supplied exceeds quantity demanded (Surplus); prices fall.
  - If Price < Equilibrium: Quantity demanded exceeds quantity supplied (Shortage); prices rise.

• Long-Run Macroeconomic Equilibrium:
  Occurs where AD, SRAS, and LRAS all intersect simultaneously at the Natural Real GDP (QN).

• Macroeconomic Shocks and Effects:
  1. Positive Demand Shock (e.g., expansionary fiscal/monetary stimulus):
     - Shifts AD to the right.
     - Outcome: Both general price level (P) and real GDP (Y) increase in the short run.
  2. Negative Demand Shock (e.g., sharp consumer pessimism, spending cuts):
     - Shifts AD to the left.
     - Outcome: Both general price level (P) and real GDP (Y) decrease (recessionary gap).
  3. Negative Supply Shock (e.g., major drought, global oil price surge):
     - Shifts SRAS to the left.
     - Outcome: General price level rises (inflation) while real output falls (unemployment rises), creating Stagflation.
  4. Positive Supply Shock (e.g., major technological breakthrough, bumper harvest):
     - Shifts SRAS to the right.
     - Outcome: General price level falls while real output increases.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'econ-g12-u3-note',
    title: 'Unit 3: Market Failure and Consumer Protection (Complete Revision Summary)',
    subject: 'Economics',
    topic: 'Market Failure & Consumer Welfare',
    summary: 'Comprehensive short notes for Grade 12 Economics Unit 3: Causes of market failure, allocative efficiency, pure vs impure public goods, free rider problem, negative vs positive externalities (Pigouvian taxes and Coase theorem), asymmetric information (adverse selection and moral hazard), and Ethiopian consumer protection legislation.',
    readTimeMinutes: 11,
    isFreePreview: false,
    tags: ['Economics', 'Grade 12', 'Market Failure', 'Public Goods', 'Externalities', 'Asymmetric Information', 'Consumer Protection'],
    keyTakeaways: [
      'Market Failure: Occurs when free market price mechanisms fail to achieve allocative efficiency (MSB = MSC).',
      'Public Goods Characteristics: Non-rivalry (consumption by one doesn\'t reduce availability to others; MC = 0) and Non-excludability (cannot exclude non-payers). Pure public goods lead to the Free Rider problem.',
      'Four Types of Goods: Private goods (rival, excludable), Public goods (non-rival, non-excludable), Club goods (non-rival, excludable), Common pool resources (rival, non-excludable, subject to Tragedy of the Commons).',
      'Negative Externalities: External cost of pollution (MSC > MPC); free market leads to Overproduction. Corrected by Pigouvian per-unit tax (t = MEC) or Coase property rights bargaining.',
      'Positive Externalities: External benefit (MSB > MPB); free market leads to Underproduction. Corrected by government subsidies (s = MEB) or public provision.',
      'Asymmetric Information: Adverse Selection (hidden information before transaction; lemons problem, resolved by signaling and screening); Moral Hazard (hidden action after transaction; reckless behavior, resolved by deductibles and monitoring).',
      'Consumer Protection in Ethiopia: Trade Competition and Consumer Protection Proclamation No. 813/2013 safeguards rights to safety, accurate information, choice, and compensation.'
    ],
    contentMarkdown: `GRADE 12 ECONOMICS — UNIT 3: MARKET FAILURE AND CONSUMER PROTECTION

1. MARKET FAILURE & ALLOCATIVE EFFICIENCY

• Market Failure Definition:
  An economic situation where the competitive free market price mechanism fails to allocate scarce resources efficiently or equitably, resulting in a net welfare loss (deadweight loss) to society.

• Allocative Efficiency Condition:
  Allocative efficiency is achieved when resources are allocated such that Marginal Social Benefit (MSB) equals Marginal Social Cost (MSC):
  MSB = MSC
  where:
  - MSB = Marginal Private Benefit (MPB) + Marginal External Benefit (MEB)
  - MSC = Marginal Private Cost (MPC) + Marginal External Cost (MEC)

• Common Causes of Market Failure:
  1. Public Goods (non-rivalry and non-excludability).
  2. Externalities (spillover costs or benefits).
  3. Asymmetric Information (adverse selection and moral hazard).
  4. Market Power and Monopolies.
  5. Factor Immobility.

============================================================

2. PUBLIC GOODS AND THE FREE RIDER PROBLEM

• Characteristics of Goods:
  - Excludability: Property where individuals can be prevented from consuming a good unless they pay for it.
  - Rivalry: Property where one person\'s consumption reduces the quantity available for others.

• Fourfold Classification of Goods:
  1. Pure Private Goods: Both Rival and Excludable (e.g., food, clothing, mobile phones, cars).
  2. Pure Public Goods: Both Non-Rival and Non-Excludable (e.g., national defense, street lighting, clean air, flood control dams).
  3. Club Goods (Toll Goods): Non-Rival but Excludable (e.g., cinemas, toll roads, subscription television).
  4. Common Pool Resources: Rival but Non-Excludable (e.g., open-access fisheries, community grazing pastures, wild timber), leading to the "Tragedy of the Commons".

• The Free Rider Problem:
  Occurs when individuals enjoy the benefits of a non-excludable public good without contributing to the cost of its provision. Because private producers cannot force beneficiaries to pay, the private market will underprovide or completely fail to supply public goods, necessitating government tax-financed provision.

============================================================

3. EXTERNALITIES AND EFFICIENCY

• Definition:
  An externality is a cost or benefit generated by the production or consumption of a good that affects third parties who are not directly involved in the market transaction, without corresponding market compensation.

• Negative Externalities (e.g., factory pollution, vehicle emissions, smoking):
  - Marginal Social Cost exceeds Marginal Private Cost: MSC > MPC (MSC = MPC + MEC).
  - Market Outcome: Private equilibrium leads to Overproduction relative to the socially optimal level, causing Deadweight Loss.
  - Solutions:
    1. Pigouvian Tax: Imposing a per-unit tax equal to the marginal external cost (Tax = MEC) to internalize the externality.
    2. Coase Theorem: If property rights are clearly defined and transaction costs are negligible, private parties can bargain to an efficient social outcome.
    3. Tradable Pollution Permits / Emissions Caps.

• Positive Externalities (e.g., education, vaccination, agricultural research, beekeeping):
  - Marginal Social Benefit exceeds Marginal Private Benefit: MSB > MPB (MSB = MPB + MEB).
  - Market Outcome: Private equilibrium leads to Underproduction relative to the social optimum.
  - Solutions:
    1. Pigouvian Subsidies: Providing per-unit government subsidies equal to marginal external benefit (Subsidy = MEB).
    2. Direct Government Provision (free primary healthcare, public schooling).

============================================================

4. ASYMMETRIC INFORMATION: ADVERSE SELECTION & MORAL HAZARD

• Definition:
  A situation in which one party to an economic transaction possesses more or superior information compared to the other party, distorting market decisions.

• Adverse Selection ("Hidden Information" — Pre-Contractual):
  - Occurs when asymmetric information leads to the selection of undesirable or high-risk participants before a contract is signed.
  - Classic Example: George Akerlof\'s "Market for Lemons" (used car sellers have superior knowledge; buyers offer low average prices, driving high-quality cars out of the market).
  - Insurance: High-risk individuals are more likely to purchase health or life insurance than healthy individuals.
  - Solutions:
    1. Signaling: Informed party reveals credible signals (e.g., university degrees, product warranties, brand reputation).
    2. Screening: Uninformed party conducts assessments (e.g., medical exams by insurers, bank credit history checks).

• Moral Hazard ("Hidden Action" — Post-Contractual):
  - Occurs after a contract is signed when an individual insulated from risk behaves more recklessly because another party bears the negative financial consequences.
  - Example: A driver with comprehensive car insurance taking fewer precautions against car theft or driving less carefully.
  - Solutions: Deductibles, copayments, performance-based bonuses, and direct monitoring.

============================================================

5. CONSUMER PROTECTION IN ETHIOPIA

• Objectives of Consumer Protection:
  To prevent unethical business malpractices such as selling adulterated goods, expired products, false weights and measures, hoarding, predatory pricing, and deceptive advertisements.

• Trade Competition and Consumer Protection Proclamation No. 813/2013 (Ethiopia):
  Guarantees fundamental consumer rights:
  1. Right to receive sufficient, truthful, and accurate information on product quality, quantity, and safety.
  2. Right to freedom of choice in purchasing goods and services.
  3. Right to be treated with dignity, respect, and free from intimidation.
  4. Right to claim legal compensation against manufacturers, importers, or retailers for damages caused by defective products or deficient services.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'econ-g12-u4-note',
    title: 'Unit 4: Macroeconomic Policy Instruments (Complete Revision Summary)',
    subject: 'Economics',
    topic: 'Macroeconomic Policy: Fiscal, Monetary & Exchange Rates',
    summary: 'Comprehensive short notes for Grade 12 Economics Unit 4: Fiscal policy tools and types, monetary policy instruments (OMO, discount rate, reserve ratio), income policy (wage controls, price ceilings and price floors), and foreign exchange regimes (fixed vs floating, devaluation vs depreciation).',
    readTimeMinutes: 13,
    isFreePreview: false,
    tags: ['Economics', 'Grade 12', 'Fiscal Policy', 'Monetary Policy', 'Price Controls', 'Exchange Rates', 'NBE'],
    keyTakeaways: [
      'Fiscal Policy Tools: Government Expenditure (G), Transfer Payments, and Taxation (direct and indirect taxes). Managed by Ministry of Finance.',
      'Fiscal Types: Expansionary (increase G, cut taxes to combat recession) vs Contractionary (decrease G, raise taxes to cool down inflation).',
      'Monetary Policy Tools: Open Market Operations (buying/selling treasury securities), Discount Rate (interest rate on central bank loans to banks), and Required Reserve Ratio (RRR). Managed by the National Bank of Ethiopia (NBE).',
      'Monetary Types: Expansionary / Loose (buy securities, lower discount rate, reduce RRR $\to$ money supply rises $\to$ interest rate falls $\to$ AD shifts right) vs Contractionary / Tight.',
      'Income & Pricing Policies: Price Ceilings (maximum legal price below equilibrium, causes shortages) vs Price Floors (minimum legal price above equilibrium, causes surpluses, e.g. minimum wage).',
      'Foreign Exchange Systems: Fixed (government peg; Devaluation / Revaluation) vs Floating (market supply & demand; Depreciation / Appreciation).',
      'Currency Devaluation: Lowers foreign price of exports and raises domestic price of imports, improving net trade balance but creating inflationary pressures.'
    ],
    contentMarkdown: `GRADE 12 ECONOMICS — UNIT 4: MACROECONOMIC POLICY INSTRUMENTS

1. MACROECONOMIC POLICY GOALS & DIVISIONS

• Overall Objectives of Macroeconomic Policy:
  - Achieve full employment of economic resources.
  - Maintain general price stability (low inflation).
  - Sustain high, broad-based economic growth.
  - Maintain a sustainable balance of payments and stable foreign exchange rate.

============================================================

2. FISCAL POLICY

• Definition:
  The manipulation of government spending (expenditure) and taxation revenues by the government to influence the level of aggregate demand, employment, and national output.

• Tools of Fiscal Policy:
  1. Government Spending (G): Direct purchases of goods, civil servant wages, and capital infrastructure (roads, energy, education).
  2. Transfer Payments: Direct entitlement welfare assistance (pensions, food subsidies, safety nets).
  3. Taxation (T): Direct taxes (income, business profit) and indirect taxes (VAT, excise duties).

• Types of Fiscal Policy:
  - Expansionary Fiscal Policy: Applied during recessions with deficient demand. Increases government spending (G) and/or cuts tax rates (T) to boost disposable income and shift the AD curve to the right toward potential GDP.
  - Contractionary Fiscal Policy: Applied during economic overheating and high inflation with excess demand. Cuts government spending (G) and/or raises tax rates (T) to cool demand and shift AD to the left.

============================================================

3. MONETARY POLICY

• Definition:
  The process by which the central bank or monetary authority (such as the National Bank of Ethiopia - NBE) controls the money supply, credit availability, and the cost of borrowing (interest rates) to stabilize the macroeconomy.

• The Three Key Tools of Monetary Policy:
  1. Open Market Operations (OMO): The buying and selling of government treasury bills and bonds in the financial market.
     - Buying bonds injects cash reserves into commercial banks, expanding the money supply.
     - Selling bonds absorbs liquidity from the banking system, contracting the money supply.
  2. Discount Rate (Bank Rate): The interest rate charged by the central bank when lending emergency funds to commercial banks through the discount window.
  3. Required Reserve Ratio (RRR / Cash Reserve Ratio): The legally mandated minimum percentage of customer deposits that commercial banks must hold in reserve at the central bank.

• Types of Monetary Policy:
  - Expansionary (Loose / Easy) Monetary Policy:
    Used to combat recessions: Central bank buys government securities, lowers the discount rate, and reduces the required reserve ratio. This expands bank liquidity, lowers market interest rates, stimulates private investment (I) and consumption (C), and shifts AD rightward.
  - Contractionary (Tight) Monetary Policy:
    Used to curb high inflation: Central bank sells government securities, raises the discount rate, and increases the required reserve ratio. This reduces bank liquidity, drives interest rates up, discourages borrowing, and shifts AD leftward.

============================================================

4. INCOME POLICY AND PRICE CONTROLS

• Income Policies:
  Economy-wide government regulations on wages and prices aimed at breaking inflationary spirals without inducing high unemployment.

• Price Ceilings (Maximum Price Control):
  - A legally established maximum price set below the free-market equilibrium price.
  - Purpose: To protect low-income consumers from soaring prices on essential staples (e.g. bread, sugar, fuel, rent).
  - Economic Consequence: Quantity demanded exceeds quantity supplied, creating chronic Shortages, long queues, rationing, and black markets.

• Price Floors (Minimum Price Control):
  - A legally established minimum price set above the free-market equilibrium price.
  - Purpose: To guarantee fair remuneration for producers or workers (e.g. minimum wage laws, agricultural support prices).
  - Economic Consequence: Quantity supplied exceeds quantity demanded, creating a persistent Market Surplus and deadweight loss.

============================================================

5. FOREIGN EXCHANGE POLICIES

• Foreign Exchange Market:
  The international market where currencies are bought and sold against one another. The exchange rate is the price of one national currency in terms of another.

• Exchange Rate Regimes:
  1. Fixed Exchange Rate Regime:
     - The currency value is pegged by the government to a major foreign currency (e.g., US dollar or gold).
     - Devaluation: Official government decision to lower the value of domestic currency against foreign currencies.
     - Revaluation: Official government decision to raise the value of domestic currency.
  2. Flexible (Floating) Exchange Rate Regime:
     - The exchange rate is determined freely by market supply and demand forces without direct central bank pegging.
     - Depreciation: Market-driven decrease in the value of domestic currency.
     - Appreciation: Market-driven increase in the value of domestic currency.

• Economic Impacts of Currency Devaluation / Depreciation:
  - Exports become cheaper and more competitive in foreign markets, encouraging higher export volumes.
  - Imports become more expensive in domestic currency terms, discouraging foreign imports.
  - Net exports (X - M) and current account balances improve, but domestic inflationary pressures increase due to costlier imported fuel and capital equipment.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'econ-g12-u5-note',
    title: 'Unit 5: Tax Theory and Practice (Complete Revision Summary)',
    subject: 'Economics',
    topic: 'Taxation Theory & Ethiopian Tax System',
    summary: 'Comprehensive short notes for Grade 12 Economics Unit 5: Definitions and canons of taxation (Adam Smith), tax base, tax rate, impact vs incidence, tax equity (benefits vs ability-to-pay, horizontal vs vertical equity), progressive, proportional, and regressive taxes, direct vs indirect taxes, Ethiopian tax schedules A-E, and tax evasion vs avoidance.',
    readTimeMinutes: 13,
    isFreePreview: false,
    tags: ['Economics', 'Grade 12', 'Taxation', 'Canons of Tax', 'Direct Tax', 'Indirect Tax', 'VAT', 'Ethiopian Tax System'],
    keyTakeaways: [
      'Tax Definition: Compulsory, unrequited payment to general government without direct quid pro quo.',
      'Adam Smith\'s Canons of Taxation: Equity/Ability, Certainty, Convenience, Economy, and Fiscal Adequacy.',
      'Tax Impact (initial statutory liability) vs Tax Incidence (final resting place of tax burden after tax shifting).',
      'Tax Equity: Benefits Approach (tax according to services received) vs Ability-to-Pay Approach (Horizontal equity: equals pay equal; Vertical equity: unequals pay proportionally more).',
      'Tax Progression: Progressive (higher income pays higher percentage), Proportional (flat percentage), Regressive (higher income pays lower percentage).',
      'Ethiopian Tax Schedules (Proclamation No. 286/2002): Schedule A (Employment income tax 10-35%), Schedule B (Rental income), Schedule C (Business profits 30% bodies / 10-35% individuals), Schedule D (Other incomes: royalties, dividends), Schedule E (Exempt incomes).',
      'Indirect Taxes in Ethiopia: Value Added Tax (VAT 15%), Turnover Tax (TOT 2% or 10%), Excise Tax (5% to 500%), Surtax (10%), Customs Duties.',
      'Tax Compliance: Tax Avoidance (legal tax planning using loopholes) vs Tax Evasion (illegal non-reporting, underreporting, or falsification).'
    ],
    contentMarkdown: `GRADE 12 ECONOMICS — UNIT 5: TAX THEORY AND PRACTICE

1. DEFINITION AND TERMINOLOGIES IN TAXATION

• Definition:
  According to the OECD, a tax is a compulsory, unrequited payment to the general government. It is compulsory because payment is legally mandatory, and unrequited because benefits provided by the government are not in direct proportion to the payment made (no direct quid pro quo).

• Core Taxation Terminology:
  - Tax Rate: The percentage rate or per-unit dollar amount at which the economic activity is taxed.
  - Tax Base: The physical object, transaction, or financial amount (income, property, sales) upon which the tax is levied.
  - Impact of a Tax: The initial statutory point of contact where the legal responsibility to pay the tax rests.
  - Incidence of a Tax: The ultimate economic resting place of the tax burden after all shifting mechanisms have occurred.
  - Tax Shifting: The process by which the statutory taxpayer transfers the burden of the tax to another party (Forward Shifting to consumers via higher prices, or Backward Shifting to suppliers/workers via lower input prices/wages).

• Adam Smith's Classical Canons of Taxation (1776):
  1. Canon of Equity: Subjects should contribute in proportion to their ability to pay.
  2. Canon of Certainty: Tax liability, due date, and payment method must be clear and non-arbitrary.
  3. Canon of Convenience: Taxes should be levied at the time and manner most convenient for the contributor (e.g., Pay-As-You-Earn withholding at payday).
  4. Canon of Economy: Collection and administrative costs should be minimized so maximum revenue reaches the public treasury.
  5. Canon of Fiscal Adequacy: The tax system must generate sufficient revenue to avoid reliance on inflationary deficit financing.

============================================================

2. APPROACHES TO TAX EQUITY & CLASSIFICATION BY IMPACT

• Principles of Tax Equity:
  - Benefits Received Approach: Taxes should be distributed according to the direct benefits individuals receive from public expenditures. Limitation: Public goods (defense, police, justice) cannot be accurately apportioned to individual beneficiaries.
  - Ability-to-Pay Approach: Taxes should be assessed based on the financial capacity of the taxpayer.
    1. Horizontal Equity: Taxpayers in identical economic circumstances should pay equal taxes.
    2. Vertical Equity: Taxpayers in different economic circumstances should be treated differently (those with greater capacity should pay proportionally more).

• Tax Structure Classification by Impact:
  1. Progressive Tax: The average tax rate increases as taxable income rises. Higher income earners pay a larger percentage of their income in tax (e.g., personal income tax).
  2. Proportional (Flat) Tax: The average tax rate remains constant across all income levels. All taxpayers pay the exact same percentage of their income in tax.
  3. Regressive Tax: The average tax rate decreases as taxable income rises. Lower income earners pay a higher proportion of their income in tax (e.g., indirect sales taxes on basic consumption staples).

============================================================

3. DIRECT VS. INDIRECT TAXES

• Direct Taxes:
  Taxes levied directly on the income, wealth, or property of individuals and corporations, where the statutory impact and ultimate incidence fall on the same entity (cannot be shifted).
  - Employment income tax, business profit tax, rental income tax, capital gains tax, inheritance/gift tax.

• Indirect Taxes:
  Taxes imposed on transactions, production, or consumption of goods and services, where the initial impact is on the seller/producer but the final incidence is shifted to the ultimate consumer in the form of higher prices.
  - Value Added Tax (VAT), Turnover Tax (TOT), Excise Tax, Surtax, Customs Import/Export Duties, Stamp Duty.

============================================================

4. THE TAX SYSTEM AND ACCOUNTING IN ETHIOPIA

• Legal Framework:
  Tax Proclamation No. 286/2002, Regulations No. 78/2002, and the FDRE Constitution (Article 51 & 52 revenue-sharing between Federal Government and Regional States). The Ministry of Revenues (MoR) is the federal collection authority.

• Ethiopian Direct Tax Schedules:
  1. Schedule A — Income from Employment:
     - Monthly Income (0 to 600 ETB): 0% (Tax exempt)
     - Monthly Income (601 to 1,650 ETB): 10% (Deduction: 60 ETB)
     - Monthly Income (1,651 to 3,200 ETB): 15% (Deduction: 142.50 ETB)
     - Monthly Income (3,201 to 5,250 ETB): 20% (Deduction: 302.50 ETB)
     - Monthly Income (5,251 to 7,800 ETB): 25% (Deduction: 565 ETB)
     - Monthly Income (7,801 to 10,900 ETB): 30% (Deduction: 955 ETB)
     - Monthly Income (Above 10,900 ETB): 35% (Deduction: 1,500 ETB)
  2. Schedule B — Rental Income from Buildings: Taxable rental income after permissible deductions (depreciation, repairs).
  3. Schedule C — Income from Business Operations:
     - Corporate bodies: Flat rate of 30%.
     - Individual sole proprietors: Progressive schedule of 10% to 35%.
  4. Schedule D — Other Sources of Income: Royalties (5%), technical services outside Ethiopia (10%), dividends (10%), lottery winnings/games (15%), casual rentals, non-business capital gains.
  5. Schedule E — Exempt Incomes: Medical allowances, hardship allowances, domestic worker wages, alimony/child support, employer pension contributions (11% employer, 7% employee).

• Major Indirect Taxes in Ethiopia:
  - Value Added Tax (VAT): Introduced on January 1, 2003 at a standard rate of 15% on taxable transactions by businesses with annual turnover exceeding 500,000 ETB.
  - Turnover Tax (TOT): Equalization tax for businesses not registered for VAT (2% on local contractors, grain mills, agricultural machinery; 10% on other services).
  - Excise Tax: Levied on luxury items, demand-inelastic goods, and health-hazardous demerit goods (rates range from 5% to 500%).
  - Surtax: Additional 10% levy on imported goods (excluding capital goods, fertilizers, petroleum, and pharmaceuticals).
  - Withholding Tax: 2% deducted on domestic commercial transactions.

============================================================

5. PROBLEMS OF TAXATION IN ETHIOPIA

• Tax Compliance Issues:
  - Tax Avoidance: The legal arrangement of financial affairs to minimize tax liability by taking full advantage of exemptions, deductions, and tax code provisions.
  - Tax Evasion: The illegal non-payment or underpayment of tax by deliberately concealing income, maintaining fraudulent accounts, or operating in the unregistered underground/contraband economy.

• Administrative Challenges:
  - Large informal sector and cash-based transactions.
  - Complex administrative procedures and high compliance costs for small businesses.
  - Contraband trade and porous borders.
  - Limited tax awareness and low voluntary compliance culture among taxpayers.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'econ-g12-u6-note',
    title: 'Unit 6: Poverty and Inequality (Complete Revision Summary)',
    subject: 'Economics',
    topic: 'Poverty Measurement & Inequality Analysis',
    summary: 'Comprehensive short notes for Grade 12 Economics Unit 6: Multidimensional poverty concepts, absolute vs relative poverty, poverty headcount index, Total Poverty Gap (TPG), Foster-Greer-Thorbecke (FGT) index, Multidimensional Poverty Index (MPI), Amartya Sen\'s Capability Approach, Lorenz curve, Gini coefficient, women and poverty, and Ethiopian indigenous institutions (Idir, Iqub, Debo).',
    readTimeMinutes: 12,
    isFreePreview: false,
    tags: ['Economics', 'Grade 12', 'Poverty', 'Inequality', 'Lorenz Curve', 'Gini Coefficient', 'Capability Approach', 'Idir', 'Iqub'],
    keyTakeaways: [
      'Poverty Dimensions: Multidimensional deprivation of wellbeing encompassing hunger, lack of basic services, voicelessness, and vulnerability.',
      'Absolute vs Relative Poverty: Absolute is inability to satisfy minimal basic biological subsistence needs ($1.90/day PPP); Relative is deprivation compared to the average standard of living.',
      'Poverty Measures: Headcount Index (H / N), Total Poverty Gap (TPG), Average Poverty Gap (APG), and Multidimensional Poverty Index (MPI across Health, Education, Standard of Living).',
      'Amartya Sen\'s Capability Approach: Defines poverty as capability deprivation; focuses on real freedoms to achieve valuable "functionings" (beings and doings) rather than income alone.',
      'Measuring Inequality: Personal/size distribution (Kuznets Ratio: top 20% / bottom 40%) vs Functional factor share distribution.',
      'Lorenz Curve & Gini Coefficient: Lorenz curve plots cumulative % of population against cumulative % of income. Gini Coefficient = Area A / (Area A + Area B), ranging from 0 (perfect equality) to 1 (perfect inequality).',
      'Women and Poverty: Female-headed households suffer disproportionately due to wage gaps, informal sector concentration, and unremunerated care work.',
      'Ethiopian Indigenous Safety Nets: Idir (traditional mutual aid & burial insurance), Iqub (rotating savings and credit association), Debo (communal agricultural labor sharing), and traditional cottage industries.'
    ],
    contentMarkdown: `GRADE 12 ECONOMICS — UNIT 6: POVERTY AND INEQUALITY

1. CONCEPT AND MEASUREMENT OF POVERTY

• Multidimensional Nature of Poverty:
  The World Bank defines poverty as the pronounced deprivation in wellbeing. Beyond low income, it includes hunger, lack of shelter, lack of access to clean water and healthcare, illiteracy, voicelessness, powerlessness, and vulnerability to economic shocks.

• Types of Poverty:
  - Absolute Poverty: A state in which an individual or household cannot afford the minimum basic subsistence necessities of life (food, clothing, shelter). Quantified by international poverty thresholds (such as living on less than $1.90 or $2.00 per day in Purchasing Power Parity).
  - Relative Poverty: A condition where an individual\'s income or consumption is substantially below the average living standard in their given society, reflecting income inequality rather than biological starvation.

• Unidimensional Quantitative Measures of Poverty:
  1. Headcount Index (H / N): The proportion of the total population (N) whose income or consumption falls below the absolute poverty line (H).
     Headcount Ratio = H / N
  2. Total Poverty Gap (TPG): The total amount of income necessary to bring all individuals living below the poverty line up to that line:
     TPG = Sum(Poverty Line - Actual Income_i) for all poor individuals.
  3. Average Poverty Gap (APG): TPG divided by the total population: APG = TPG / N.
  4. Foster-Greer-Thorbecke (FGT) Index: A generalized class of poverty metrics capturing poverty incidence, depth, and severity (inequality among the poor).

• Multidimensional Poverty Index (MPI):
  Developed by Oxford (OPHI) and the UNDP, evaluating poverty across three equally weighted dimensions (Health, Education, Standard of Living) comprising 10 indicators:
  - Health (1/3 total weight): Child mortality (1/6) and Nutrition (1/6).
  - Education (1/3 total weight): Years of schooling (1/6) and Child school attendance (1/6).
  - Standard of Living (1/3 total weight): Electricity, Sanitation, Safe Drinking Water, Housing Flooring, Cooking Fuel, and Asset Ownership (each 1/18).

============================================================

2. AMARTYA SEN'S CAPABILITY APPROACH

• Core Thesis (1998 Nobel Laureate):
  Poverty should be understood as Capability Deprivation rather than merely low income. Commodities and income are not ends in themselves, but instruments that enable human functioning.
  - Functionings: The valuable states of being and doing that an individual achieves (e.g., being well-nourished, healthy, literate, socially respected).
  - Capabilities: The substantive real freedoms and opportunities a person has to choose among different functioning combinations.
  - Conversion Factors: The personal, socio-political, and environmental factors that determine how effectively an individual can transform resources into actual functionings.

============================================================

3. MEASURING ECONOMIC INEQUALITY

• Income Distribution Concepts:
  - Functional (Factor Share) Distribution: The share of national income received by each factor of production (Labor wages, Land rent, Capital interest, Entrepreneurial profit).
  - Personal (Size) Distribution: The distribution of total income among individual persons or households, regardless of the source.

• The Kuznets Ratio:
  The ratio of the total income received by the richest 20% (top quintile) of the population to that received by the poorest 40% (bottom two quintiles).

• The Lorenz Curve:
  A graphical curve that plots the cumulative percentage of the population on the horizontal axis against the cumulative percentage of national income received on the vertical axis.
  - Line of Complete Equality (45-Degree Diagonal Line): Represents perfectly equal distribution (e.g., 20% of population earns 20% of income).
  - The greater the curvature or sag of the Lorenz curve away from the 45-degree line, the higher the degree of income inequality.

• The Gini Coefficient:
  A numerical measure of inequality derived directly from the Lorenz curve:
  Gini Coefficient = Area A / (Area A + Area B)
  where:
  - Area A = Area between the 45-degree line of equality and the Lorenz curve.
  - Area B = Area under the Lorenz curve.
  - Scale: Ranges from 0 (perfect equality) to 1 (perfect inequality where one person receives all national income).

============================================================

4. WOMEN AND POVERTY (FEMINIZATION OF POVERTY)

• Factors Driving Female Poverty:
  - Concentration in low-productivity, informal sector jobs with lower average wages.
  - Unequal intra-household resource allocation favoring males in nutrition, education, and inheritance.
  - Burden of unremunerated care work (childcare, cooking, fetching water and firewood).
  - Restricted legal and customary access to land ownership, credit, and extension services.

============================================================

5. INDIGENOUS INSTITUTIONS & POVERTY REDUCTION IN ETHIOPIA

• Traditional Social Capital Institutions:
  1. Idir: Traditional mutual aid burial association serving as informal group life insurance, providing immediate financial, social, and emotional solidarity during bereavement.
  2. Iqub (Ikub): Traditional rotating savings and credit association (ROSCA) where members make periodic contributions into a pooled fund awarded to members sequentially. Provides accessible, zero-collateral investment capital for micro-enterprises, farming inputs, and housing.
  3. Debo (Wonfel): Traditional reciprocal agricultural labor-sharing cooperative where community members pool labor for plowing, weeding, and harvesting.
  4. Traditional Cottage Industries: Small-scale labor-intensive manufacturing (weaving, pottery, blacksmithing, leather tanning, basketry) providing vital non-farm rural self-employment.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'econ-g12-u7-note',
    title: 'Unit 7: Macroeconomic Reforms in Ethiopia (Complete Revision Summary)',
    subject: 'Economics',
    topic: 'Ethiopian Economic History & Development Plans',
    summary: 'Comprehensive short notes for Grade 12 Economics Unit 7: Historical review of Ethiopian development plans (Imperial Five-Year Plans, Derg Socialist command economy, EPRDF ADLI/SDPRP/PASDEP/GTP I & II), the Ten-Year Perspective Plan (2021-2030), the Home-Grown Economic Reform (HGER), and fiscal decentralization.',
    readTimeMinutes: 14,
    isFreePreview: false,
    tags: ['Economics', 'Grade 12', 'Ethiopian Economy', 'HGER', 'ADLI', 'GTP', 'Fiscal Decentralization'],
    keyTakeaways: [
      'Imperial Period (1950-74): Three 5-Year Development Plans prioritizing infrastructure, agro-industry, and commercial farms; limited by feudal land tenure.',
      'Derg Regime (1974-91): Centrally planned command economy, nationalization of land and industries, Agricultural Marketing Corporation (AMC) price quotas, high defense spending.',
      'EPRDF Era (1991-2018): Transition to market economy, Agricultural Development-Led Industrialization (ADLI 1994), PADETES extension, SDPRP, PASDEP, GTP I (2010-15), and GTP II (2015-20) averaging 9.2% GDP growth.',
      'Major Macroeconomic Challenges: External debt distress, high inflation (peaked at 55.2% in 2008), widening trade deficit (15.8% GDP resource gap), and low domestic savings.',
      'Ten-Year Development Plan (2021-2030): Vision of Ethiopia as an "African Beacon of Prosperity" through private-sector-led growth, digital economy, and institutional transformation.',
      'Home-Grown Economic Reform (HGER): 3-pillar strategy (Macroeconomic stability, Sectoral growth in agriculture/mining/tourism/ICT, and Structural reforms in ease of doing business and SOE privatization).',
      'Fiscal Decentralization: Devolution of revenue and expenditure powers to regional states; fiscal equalization grant formulas to bridge regional public service disparities.'
    ],
    contentMarkdown: `GRADE 12 ECONOMICS — UNIT 7: MACROECONOMIC REFORMS IN ETHIOPIA

1. HISTORICAL REVIEW OF ETHIOPIAN DEVELOPMENT STRATEGIES

• The Imperial Period (1950–1974):
  - Transitioned toward centrally administered multi-year planning under Emperor Haile Selassie I.
  - First Five-Year Plan (1957–1961): Focused on physical infrastructure (roads, communications) and processing industries to reduce import dependence.
  - Second Five-Year Plan (1962–1967): Prioritized large-scale commercial agro-industrial farming (cotton, sugar, coffee).
  - Third Five-Year Plan (1968–1973): Focused on comprehensive agricultural development (Integrated Rural Development packages) to address food shortages.
  - Limitations: Feudal land tenure system disenfranchised rural peasant tenant farmers, ultimately triggering the 1974 revolution.

• The Socialist Derg Regime (1974–1991):
  - Centrally planned command economy with state ownership of all production factors.
  - Key Policies: "Land to the Tiller" proclamation nationalized all rural and urban land; commercial farms converted to State Farms; private enterprise restricted; Agricultural Marketing Corporation (AMC) enforced fixed grain quotas at suppressed prices; currency pegged at 2.07 ETB/USD.
  - Four Planning Phases:
    1. 1974–1978: Economic dislocation, nationalization shock, and civil conflict (GDP growth averaged 0.4%).
    2. 1978–1980: Economic recovery through Development Campaign ("Zemecha", GDP grew 5.7%).
    3. 1980–1985: Severe economic crisis driven by devastating nationwide droughts (1984/85) and massive military defense spending.
    4. 1985–1990: Ten-Year Perspective Plan promoting collectivization and producer cooperatives, undermined by drought aftermath and command failures.

• The EPRDF Period (1991–2018):
  - Transition from command socialism to a market-oriented state-led development model with structural adjustment programs (SAPs) and privatization.
  - Key Strategies and Successive Development Plans:
    1. Agricultural Development-Led Industrialization (ADLI, 1994): Core long-term strategy using agricultural productivity expansion to supply raw materials, food, and domestic demand for industry. Supported by PADETES agricultural extension.
    2. Sustainable Development and Poverty Reduction Programme (SDPRP, 2002/03–2004/05): Focused on food security, capacity building, and civil service reform.
    3. Plan for Accelerated and Sustained Development to End Poverty (PASDEP, 2005/06–2009/10): Commercialization of smallholder agriculture, infrastructure push, and private sector development.
    4. Growth and Transformation Plan I (GTP I, 2010/11–2014/15) & GTP II (2015/16–2019/20): Massive public infrastructure investments (roads, railway, energy, GERD, industrial parks). Real GDP grew at an average of 9.2% annually.

============================================================

2. MAJOR DEVELOPMENT CHALLENGES (2010–2020)

• Debt Distress & External Imbalances:
  Heavy public investment financed through external commercial loans and foreign debt created severe debt servicing vulnerabilities. Merchandize trade deficit averaged 15.8% of GDP due to export stagnation in unrefined agricultural commodities.

• Persistent High Inflation:
  High inflation peaked at 55.2% in 2008 and remained elevated (annual headline inflation reached 19.9% in 2019/20), driven by money supply growth, foreign exchange shortages, and supply bottlenecks.

• Investment-Savings Gap:
  High gross domestic investment (34.1% of GDP in 2017/18) far outstripped domestic savings (24.3% of GDP), creating structural financing deficits.

• Jobless Growth and Youth Unemployment:
  Rapid GDP growth failed to generate sufficient formal manufacturing jobs, leaving urban youth unemployment at 25.7% in 2019/20.

============================================================

3. THE TEN-YEAR DEVELOPMENT PLAN (2021–2030)

• Vision: Making Ethiopia an "African Beacon of Prosperity".
• Core Strategic Pillars:
  1. Quality economic growth and shared prosperity.
  2. Economic productivity and competitiveness.
  3. Technological capability and digital economy.
  4. Sustainable development financing.
  5. Private sector-led economic growth.
  6. Resilient green economy.
  7. Institutional transformation and good governance.
  8. Gender and social inclusion.
  9. Access to justice and civil service efficiency.
  10. Regional peace-building and economic integration.

============================================================

4. HOME-GROWN ECONOMIC REFORMS (HGER)

• Objectives:
  Sustain rapid growth, restore macroeconomic stability, correct structural trade and debt imbalances, and shift the growth driver from debt-fueled public spending to private sector dynamism.

• Three Core Pillars of HGER:
  1. Macroeconomic Reforms:
     - Fiscal discipline and public expenditure control.
     - Modernizing tax administration and revenue mobilization.
     - Restructuring external public commercial debt into concessional terms.
     - Phased transition toward market-oriented exchange rate determination and establishing capital markets.
  2. Sectoral Reforms:
     - Agriculture: Small-to-large scale irrigation, input supply, research and mechanization.
     - Manufacturing: Maximizing industrial park capacity and local raw material linkages.
     - Mining: Reforming legal frameworks and releasing geological data to attract investment.
     - Tourism & ICT: Developing tourism destinations and liberalizing telecommunications.
  3. Structural Reforms:
     - Improving Ease of Doing Business by slashing bureaucratic red tape.
     - Privatization and partial divestment of large state-owned enterprises (SOEs).
     - Logistics and transport corridor efficiency improvements (dry ports).
     - Ratification of the African Continental Free Trade Area (AfCFTA) and WTO accession.

============================================================

5. FISCAL DECENTRALIZATION IN ETHIOPIA

• Concept:
  The devolution of taxing, revenue collection, and expenditure decision-making powers from the federal government to sub-national regional states and municipal administrations.

• Advantages of Decentralization:
  - Tailoring public services to specific local tastes and community preferences.
  - Fostering healthy intergovernmental efficiency and responsiveness.
  - Policy experimentation and local innovation.

• Disadvantages:
  - Loss of economies of scale in specialized public goods provision and tax collection.
  - Inter-jurisdictional spillover externalities.
  - Regional capacity constraints.

• Fiscal Equalization Grants:
  Federal budget subsidies allocated to regional states based on a formula (taking into account population size, revenue generation capacity, and development gaps) to equalize public service delivery across all regions.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'econ-g12-u8-note',
    title: 'Unit 8: Economy, Environment and Climate Change (Complete Revision Summary)',
    subject: 'Economics',
    topic: 'Environmental Economics & Sustainable Development',
    summary: 'Comprehensive short notes for Grade 12 Economics Unit 8: Economy-environment linkages, renewable vs non-renewable environmental assets, Environmental Kuznets Curve (EKC), poverty-environment nexus, rural and urban environmental challenges, economics of climate change mitigation and adaptation, green economy, and Ethiopia\'s Climate-Resilient Green Economy (CRGE) strategy.',
    readTimeMinutes: 11,
    isFreePreview: false,
    tags: ['Economics', 'Grade 12', 'Environment', 'Climate Change', 'Green Economy', 'CRGE', 'Green Legacy', 'Sustainable Development'],
    keyTakeaways: [
      'Environmental Economics: Economy as an open subsystem within the finite global biosphere (planetary sources provide raw materials; planetary sinks absorb wastes).',
      'Sustainable Development: Development meeting current needs without compromising future generations\' ability to meet their own needs (Brundtland Report 1987).',
      'Environmental Kuznets Curve (EKC): Inverted-U relationship where environmental degradation initially increases with income growth, then declines after a threshold income level.',
      'Poverty-Environment Nexus: The poor are simultaneously victims and unintended agents of environmental degradation due to lack of economic alternatives.',
      'Economics of Climate Change: Global warming caused by anthropogenic greenhouse gases (CO2 77%, CH4 14%, N2O 8%).',
      'Policy Responses: Mitigation (preventive reduction of emissions via carbon taxes, cap-and-trade, REDD+, clean energy) vs Adaptation (adjusting to inevitable climate impacts).',
      'Green Growth: Economic development decoupling growth from environmental destruction and resource depletion.',
      'Ethiopian Climate Strategy: Climate-Resilient Green Economy (CRGE 2011) targeting carbon-neutral middle-income status by 2025; Green Legacy Initiative reforestation (GLI); GERD clean hydro.'
    ],
    contentMarkdown: `GRADE 12 ECONOMICS — UNIT 8: ECONOMY, ENVIRONMENT AND CLIMATE CHANGE

1. ECONOMY AND THE ENVIRONMENT

• Economic Role of the Environment:
  The global ecosystem interacts with the human economy in two fundamental ways:
  1. Planetary Source: Provides scarce biological and physical natural resources (energy, minerals, timber, soil, water) as production inputs.
  2. Planetary Sink: Acts as an environmental repository absorbing and assimilating the by-products and waste residues generated by economic production and consumption.

• Resource Classifications:
  - Biologically Renewable Resources: Living stocks capable of natural reproduction (forests, fisheries, wildlife populations, biomass).
  - Physical Renewable Resources: Naturally regenerating physical stocks (soil fertility, water cycle, ozone layer).
  - Non-Renewable Resources: Fixed finite reserves that deplete permanently through extraction (fossil fuels: coal, crude oil, natural gas; minerals and metals).

• Sustainable Development:
  Defined by the Brundtland Commission Report "Our Common Future" (1987) as development that meets the needs of the present without compromising the ability of future generations to meet their own needs.

• The Environmental Kuznets Curve (EKC):
  Hypothesizes an inverted-U shaped relationship between economic development (measured by per capita income) and environmental degradation. In the early stages of industrialization, pollution rises rapidly; as national income exceeds a threshold, technological efficiency, environmental regulations, and willingness to pay for cleaner environments cause degradation to decline.

• The Poverty-Environment Nexus:
  In developing countries, poverty and environmental degradation form a self-reinforcing vicious cycle. Impoverished rural households, lacking credit, modern inputs, and property security, are forced into unsustainable farming on marginal lands, causing deforestation, overgrazing, and soil erosion, which further deepens poverty.

============================================================

2. RURAL, URBAN, AND POPULATION PRESSURES

• Rural Environmental Dynamics:
  - Land Intensification: Excessive continuous cropping and chemical fertilizer use depleting soil organic matter and water-holding capacity.
  - Land Extensification: Expanding farming frontiers into forests and semi-arid lands, accelerating deforestation, habitat loss, and desertification.

• Urban Environmental Dynamics:
  - Rapid urbanization in developing countries creates severe infrastructure strains in clean water supply, sewage disposal, and solid waste management.
  - Growth of informal urban slums (shantytowns) and elevated respiratory illnesses from vehicular emissions and biomass smoke.

============================================================

3. GLOBAL WARMING AND CLIMATE CHANGE

• The Greenhouse Effect & Global Warming:
  Anthropogenic emissions of greenhouse gases (GHGs) trap outgoing terrestrial infrared thermal radiation in the atmosphere.
  - Primary Greenhouse Gases: Carbon Dioxide (CO₂: contributes ~77% to global warming, from fossil fuels and deforestation), Methane (CH₄: ~14%, from livestock and landfills), Nitrous Oxide (N₂O: ~8%), and Fluorinated gases.

• Impacts on Developing Nations:
  - Increased frequency and severity of extreme weather disasters (prolonged droughts, devastating floods).
  - Decline in agricultural crop yields and pasture carrying capacity.
  - Shifts in vector-borne disease ranges (expansion of malaria into highland zones).
  - Sea-level rise threatening coastal and island populations.

• Vulnerability to Climate Change:
  A function of a system\'s exposure, sensitivity, and adaptive capacity. Developing countries in Sub-Saharan Africa have high vulnerability due to heavy reliance on rain-fed agriculture and limited financial resources for disaster response.

============================================================

4. CLIMATE POLICY: MITIGATION VS. ADAPTATION

• Mitigation (Addressing the Causes):
  Anticipatory policies designed to reduce greenhouse gas emissions or enhance carbon sinks to prevent dangerous interference with the climate system.
  - Mechanisms: Carbon pricing (carbon taxes and cap-and-trade emissions permit markets), renewable energy subsidies, Clean Development Mechanism (CDM), and REDD+ (Reducing Emissions from Deforestation and Forest Degradation).

• Adaptation (Addressing the Consequences):
  Reactive and planned strategies enabling human and ecological systems to adjust to actual or expected climate impacts and moderate damage.
  - Adaptation Strategies: Spatial mobility, grain and water storage, agricultural crop diversification, drought-resistant seeds, and communal risk-pooling safety nets.

============================================================

5. GREEN ECONOMY & ETHIOPIAN CLIMATE STRATEGY

• Green Economy and Green Growth:
  An economic paradigm that fosters economic growth and poverty eradication while significantly reducing environmental risks, carbon emissions, and natural capital depletion (OECD, UNEP).
  - Core Renewable Energy Drivers: Solar, wind, geothermal, biomass, and hydroelectricity.

• Ethiopia's Climate Policy Frameworks:
  1. Climate-Resilient Green Economy (CRGE) Strategy (2011):
     - A national roadmap aiming to achieve middle-income economic status by 2025 through carbon-neutral, green growth.
     - Four Core Pillars:
       a) Improving crop and livestock agricultural practices for higher food security and lower emissions.
       b) Protecting and re-establishing forests for their economic and ecological value (carbon sequestration).
       c) Expanding clean renewable electricity generation (hydropower, wind, solar, geothermal).
       d) Leapfrogging to modern, energy-efficient technologies in transport, industry, and building sectors.
  2. Green Legacy Initiative (GLI):
     - Massive national tree-planting initiative launched in 2019, planting tens of billions of seedlings to reverse deforestation and combat watershed degradation.
  3. Grand Ethiopian Renaissance Dam (GERD):
     - Clean, zero-emission flagship hydroelectric power project generating renewable energy for Ethiopia and the Horn of Africa.
`,
    createdAt: '2026-08-19'
  }
];
