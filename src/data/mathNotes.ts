import { StudyNote } from '../types';

export const MATH_GRADE_12_NOTES: StudyNote[] = [
  {
    id: 'math-g12-u1-note',
    title: 'Unit 1: Sequences and Series (Complete Revision Summary)',
    subject: 'Mathematics',
    topic: 'Arithmetic & Geometric Progressions, Sigma & Infinite Series',
    summary: 'Comprehensive short notes for Grade 12 Mathematics Unit 1: Definition of sequences, recursive relations (Fibonacci and Mulatu sequences), Arithmetic Progressions (general term, arithmetic mean, sum formulas), Geometric Progressions (general term, geometric mean, sum formulas), Sigma notation properties, sum of first n natural numbers (Gauss formula), convergence and divergence of infinite geometric series, recurring decimals conversion to fractions, and practical real-world applications.',
    readTimeMinutes: 16,
    isFreePreview: true,
    tags: ['Mathematics', 'Grade 12', 'Sequences', 'Series', 'Arithmetic Progression', 'Geometric Progression', 'Sigma Notation', 'Convergence'],
    keyTakeaways: [
      'Sequence Definition: A function whose domain is the set of positive integers {1, 2, 3, ...}. Finite if it has a last term; infinite if it continues without end.',
      'Recursive Sequences: Fibonacci sequence (F_0 = 1, F_1 = 1, F_n = F_{n-1} + F_{n-2} for n >= 2); Mulatu sequence by Ethiopian mathematician Prof. Mulatu Lemma (M_0 = 4, M_1 = 1, M_n = M_{n-1} + M_{n-2} for n >= 2).',
      'Arithmetic Sequence (AP): Constant difference d = A_{n+1} - A_n. General term: A_n = A_1 + (n - 1)d. Arithmetic mean between a and b: m = (a + b) / 2.',
      'Sum of Arithmetic Series: S_n = (n / 2) × [2A_1 + (n - 1)d] or S_n = n × [(A_1 + A_n) / 2]. Sum of first n natural numbers: S_n = n(n + 1) / 2.',
      'Geometric Sequence (GP): Constant ratio r = G_{n+1} / G_n (where r is non-zero). General term: G_n = G_1 × r^(n - 1). Geometric mean between a and b: m = plus or minus square root of (a × b).',
      'Sum of Geometric Series: Finite sum for r not equal to 1: S_n = G_1 × (1 - r^n) / (1 - r) = G_1 × (r^n - 1) / (r - 1). For r = 1, S_n = n × G_1.',
      'Infinite Geometric Series: Converges if absolute value of r is strictly less than 1 (|r| < 1) with sum S_infinity = G_1 / (1 - r). Diverges if |r| >= 1.',
      'Recurring Decimals: Pure and mixed repeating decimals represent infinite converging geometric series and can be converted into exact irreducible fractions.'
    ],
    contentMarkdown: `GRADE 12 MATHEMATICS — UNIT 1: SEQUENCES AND SERIES

1. SEQUENCES AND RECURSIVE FORMULAS

• Definition of a Sequence:
  - A sequence is a function whose domain is the set of positive integers {1, 2, 3, ..., n} or {0, 1, 2, ...}.
  - The functional values a_1, a_2, a_3, ..., a_n are called the terms of the sequence.
  - a_n is called the general term or the n-th term of the sequence.
  - Finite Sequence: A sequence with a definite last term.
  - Infinite Sequence: A sequence that continues indefinitely without a final term.

• Recursive Sequences:
  A sequence where each term is defined using one or more preceding terms.
  1. Fibonacci Sequence:
     - Definition: F_0 = 1, F_1 = 1, and F_n = F_{n-1} + F_{n-2} for all n >= 2.
     - Terms: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  2. Mulatu Sequence (Introduced by Ethiopian Mathematician Prof. Mulatu Lemma in 2011):
     - Definition: M_0 = 4, M_1 = 1, and M_n = M_{n-1} + M_{n-2} for all n >= 2.
     - Terms: 4, 1, 5, 6, 11, 17, 28, 45, 73, 118, ...

============================================================

2. ARITHMETIC SEQUENCES (AP)

• Definition:
  A sequence in which each term after the first is obtained by adding a constant number d (called the common difference) to the preceding term.
  - Common difference: d = A_{n+1} - A_n = A_2 - A_1 = A_3 - A_2

• General n-th Term Formula:
  A_n = A_1 + (n - 1)d

• Arithmetic Mean:
  If a, m, b are in arithmetic progression, m is the arithmetic mean between a and b:
  m = (a + b) / 2

• Sum of the First n Terms of an AP (Partial Sum S_n):
  Formula 1 (when first term and common difference are known):
  S_n = (n / 2) × [2A_1 + (n - 1)d]

  Formula 2 (when first term A_1 and last term A_n are known):
  S_n = n × [(A_1 + A_n) / 2]

• Sum of the First n Natural Numbers (Gauss Formula):
  S_n = 1 + 2 + 3 + ... + n = n(n + 1) / 2

============================================================

3. GEOMETRIC SEQUENCES (GP)

• Definition:
  A sequence in which the ratio between any two consecutive terms is a constant non-zero number r (called the common ratio).
  - Common ratio: r = G_{n+1} / G_n = G_2 / G_1 = G_3 / G_2

• General n-th Term Formula:
  G_n = G_1 × r^(n - 1)

• Geometric Mean:
  If a, m, b are consecutive terms in geometric progression, m is the geometric mean:
  m^2 = a × b  implies  m = plus or minus square root of (a × b)

• Sum of the First n Terms of a GP (Partial Sum S_n):
  - When r is not equal to 1:
    S_n = G_1 × (1 - r^n) / (1 - r)   or   S_n = G_1 × (r^n - 1) / (r - 1)
  - When r = 1:
    S_n = n × G_1

============================================================

4. SIGMA NOTATION AND ITS ALGEBRAIC PROPERTIES

• Definition:
  Sigma (capital Greek letter) denotes a compact sum of terms:
  Sum from k=1 to n of a_k = a_1 + a_2 + a_3 + ... + a_n

• Core Algebraic Properties:
  1. Sum of a constant c: Sum from k=1 to n of c = n × c
  2. Constant multiple rule: Sum from k=1 to n of (c × a_k) = c × [Sum from k=1 to n of a_k]
  3. Sum and difference rule: Sum from k=1 to n of (a_k plus or minus b_k) = [Sum from k=1 to n of a_k] plus or minus [Sum from k=1 to n of b_k]
  4. Splitting index range: Sum from k=1 to n of a_k = [Sum from k=1 to m of a_k] + [Sum from k=m+1 to n of a_k] (where 1 <= m < n)

============================================================

5. INFINITE SERIES AND CONVERGENCE

• Infinite Series:
  The sum of infinitely many terms of a sequence: a_1 + a_2 + a_3 + ... = Sum from n=1 to infinity of a_n

• Convergence vs. Divergence of Infinite Geometric Series:
  - Case 1: If absolute value of r is strictly less than 1 (|r| < 1), as n approaches infinity, r^n approaches 0.
    The series CONVERGES to the finite sum:
    S_infinity = G_1 / (1 - r)

  - Case 2: If |r| > 1, the series DIVERGES to infinity or negative infinity.
  - Case 3: If r = 1 or r <= -1, the series DIVERGES or oscillates.

• Converting Recurring Decimals into Fractions:
  - Example: Convert 0.333... to a fraction.
    0.333... = 3/10 + 3/100 + 3/1000 + ...
    Here first term G_1 = 3/10 and common ratio r = 1/10 (since |r| < 1, it converges).
    Sum = G_1 / (1 - r) = (3/10) / (1 - 1/10) = (3/10) / (9/10) = 3/9 = 1/3

  - Shortcut Rule for Pure Recurring Decimals:
    Write repeating digits in numerator and place as many 9s in the denominator as repeating digits.
    Example: 0.474747... = 47 / 99

============================================================

6. REAL-WORLD APPLICATIONS

• Bouncing Ball Problem:
  If a ball is dropped from initial height h and rebounds to a fraction r of its previous height on each bounce:
  Total downward distance = h + h × r + h × r^2 + ... = h / (1 - r)
  Total upward distance = h × r + h × r^2 + ... = (h × r) / (1 - r)
  Total vertical distance traveled = h × (1 + r) / (1 - r)

• Linear Growth vs. Exponential Growth:
  - Simple fixed annual salary increments or simple depreciation follow Arithmetic Sequences.
  - Population growth, compound bank interest, and radioactive decay follow Geometric Sequences.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'math-g12-u2-note',
    title: 'Unit 2: Introduction to Calculus (Complete Revision Summary)',
    subject: 'Mathematics',
    topic: 'Differential & Integral Calculus, Derivatives, Extrema & Areas',
    summary: 'Comprehensive short notes for Grade 12 Mathematics Unit 2: Rates of change (average vs instantaneous), gradient of curves, formal definition of derivative, differentiation rules (power, sum/difference, product, quotient, chain rule), equations of tangent and normal lines, critical numbers, first derivative test, absolute and local extrema, applications in business (marginal cost, revenue, profit optimization), and integral calculus (Riemann sums, indefinite integrals, Fundamental Theorem of Calculus, and area under curves).',
    readTimeMinutes: 18,
    isFreePreview: false,
    tags: ['Mathematics', 'Grade 12', 'Calculus', 'Derivatives', 'Integration', 'Optimization', 'Tangent Line', 'Fundamental Theorem of Calculus'],
    keyTakeaways: [
      'Rate of Change: Average rate of change of f over [a, b] = [f(b) - f(a)] / (b - a) = slope of secant line. Instantaneous rate of change at x_0 = limit as h approaches 0 of [f(x_0 + h) - f(x_0)] / h = f\'(x_0) = slope of tangent line.',
      'Derivative Rules: Power Rule: d/dx [x^n] = n × x^(n - 1); Constant Multiple: d/dx [k × f(x)] = k × f\'(x); Product Rule: (f × g)\' = f\'g + fg\'; Quotient Rule: (f / g)\' = [f\'g - fg\'] / g^2; Chain Rule: (f o g)\'(x) = f\'(g(x)) × g\'(x).',
      'Tangent and Normal Lines: At point (a, f(a)), slope of tangent line is m_tan = f\'(a). Equation: y - f(a) = f\'(a) × (x - a). Slope of normal line is m_norm = -1 / f\'(a) (when f\'(a) is non-zero).',
      'Critical Numbers & Extrema: A number c in domain of f is a critical number if f\'(c) = 0 or f\'(c) does not exist. First Derivative Test: f\' changes + to - at c implies local maximum; f\' changes - to + at c implies local minimum.',
      'Marginal Analysis in Business: Total Cost C(x), Revenue R(x), Profit P(x) = R(x) - C(x). Marginal Cost MC = C\'(x), Marginal Revenue MR = R\'(x), Marginal Profit MP = P\'(x). Maximum profit occurs when MR = MC (MP = 0).',
      'Definite Integral & Fundamental Theorem: Definite integral from a to b of f(x) dx = F(b) - F(a) where F\'(x) = f(x). Represents the net signed area between f(x) and x-axis from x = a to x = b.',
      'Indefinite Integration: Power rule: Integral of x^n dx = [x^(n + 1) / (n + 1)] + C (for n not equal to -1); Integral of k dx = k × x + C.'
    ],
    contentMarkdown: `GRADE 12 MATHEMATICS — UNIT 2: INTRODUCTION TO CALCULUS

1. RATES OF CHANGE AND THE DERIVATIVE

• Average Rate of Change:
  The average rate of change of a function y = f(x) over the closed interval [a, b] is:
  Average Rate of Change = Change in y / Change in x = Delta y / Delta x = [f(b) - f(a)] / (b - a)
  - Geometric Meaning: The slope of the secant line passing through points (a, f(a)) and (b, f(b)).

• Instantaneous Rate of Change and Derivative:
  The instantaneous rate of change at x = x_0 is the limit of the average rate of change as the interval width h approaches 0:
  f\'(x_0) = Limit as h approaches 0 of [f(x_0 + h) - f(x_0)] / h
  - Geometric Meaning: The slope (gradient) of the tangent line to the curve y = f(x) at point (x_0, f(x_0)).

============================================================

2. RULES OF DIFFERENTIATION

• Constant Rule:
  d/dx [k] = 0  (where k is any real constant)

• Power Rule:
  d/dx [x^n] = n × x^(n - 1)  (for any real number n)
  Example: d/dx [x^5] = 5x^4
  Example: d/dx [square root of x] = d/dx [x^(1/2)] = (1/2) × x^(-1/2) = 1 / [2 × square root of x]
  Example: d/dx [1 / x] = d/dx [x^(-1)] = -1 × x^(-2) = -1 / x^2

• Constant Multiple Rule:
  d/dx [k × f(x)] = k × f\'(x)

• Sum and Difference Rule:
  d/dx [f(x) plus or minus g(x)] = f\'(x) plus or minus g\'(x)

• Product Rule:
  d/dx [f(x) × g(x)] = f\'(x) × g(x) + f(x) × g\'(x)
  (Derivative of the first times second, PLUS first times derivative of the second).

• Quotient Rule:
  d/dx [f(x) / g(x)] = [f\'(x) × g(x) - f(x) × g\'(x)] / [g(x)]^2  (where g(x) is non-zero)
  (Low d-high minus High d-low, all over Low squared).

• Chain Rule (Derivative of Composite Functions):
  If y = f(g(x)), let u = g(x) then y = f(u):
  dy / dx = (dy / du) × (du / dx)  or  (f o g)\'(x) = f\'(g(x)) × g\'(x)
  - General Power Chain Rule:
    d/dx [(g(x))^n] = n × (g(x))^(n - 1) × g\'(x)

============================================================

3. TANGENT AND NORMAL LINES

• Point of Tangency: (a, f(a))
• Slope of Tangent Line: m_tan = f\'(a)
• Equation of Tangent Line:
  y - f(a) = f\'(a) × (x - a)   implies   y = f\'(a) × (x - a) + f(a)

• Slope of Normal Line (Perpendicular to Tangent):
  m_norm = -1 / f\'(a)  (provided f\'(a) is not equal to 0)
• Equation of Normal Line:
  y - f(a) = [-1 / f\'(a)] × (x - a)

• Horizontal Tangent Line: Occurs when f\'(a) = 0 (line equation is y = f(a)).
• Vertical Tangent Line: Occurs when f\'(a) is undefined / infinite (line equation is x = a).

============================================================

4. CURVE SKETCHING, CRITICAL NUMBERS & OPTIMIZATION

• Increasing and Decreasing Test:
  - If f\'(x) > 0 for all x in an interval, f is strictly INCREASING on that interval.
  - If f\'(x) < 0 for all x in an interval, f is strictly DECREASING on that interval.
  - If f\'(x) = 0 for all x in an interval, f is CONSTANT on that interval.

• Critical Numbers:
  A number c in the domain of f is a critical number if f\'(c) = 0 or if f\'(c) does not exist.

• First Derivative Test for Local Extrema:
  1. Local Maximum: If f\'(x) changes sign from positive (+) to negative (-) at c.
  2. Local Minimum: If f\'(x) changes sign from negative (-) to positive (+) at c.
  3. No Extrema (Inflection): If f\'(x) does not change sign at c (+ to + or - to -).

• Finding Absolute Maximum and Minimum on a Closed Interval [a, b]:
  Step 1: Find all critical numbers of f in the open interval (a, b).
  Step 2: Evaluate f(x) at all critical numbers.
  Step 3: Evaluate f(x) at the endpoints x = a and x = b.
  Step 4: The largest value is the Absolute Maximum; the smallest value is the Absolute Minimum.

============================================================

5. APPLICATIONS IN BUSINESS AND ECONOMICS

• Profit, Revenue, and Cost Functions:
  - Total Profit: P(x) = R(x) - C(x)
  - Marginal Cost (MC): MC = C\'(x) = rate of change of total cost with respect to output x.
  - Marginal Revenue (MR): MR = R\'(x) = rate of change of revenue with respect to output x.
  - Marginal Profit (MP): MP = P\'(x) = R\'(x) - C\'(x).
  - Profit Maximization Criterion: Set MP = 0  implies  Marginal Revenue = Marginal Cost (MR = MC).

============================================================

6. INTEGRAL CALCULUS AND AREAS

• Antiderivative (Indefinite Integral):
  If F\'(x) = f(x), then the indefinite integral is written as:
  Integral of f(x) dx = F(x) + C  (where C is the arbitrary constant of integration).

• Basic Indefinite Integration Rules:
  1. Power Rule: Integral of x^n dx = [x^(n + 1) / (n + 1)] + C  (for n not equal to -1)
  2. Constant Rule: Integral of k dx = k × x + C
  3. Constant Multiple Rule: Integral of [k × f(x)] dx = k × [Integral of f(x) dx]
  4. Sum/Difference Rule: Integral of [f(x) plus or minus g(x)] dx = [Integral of f(x) dx] plus or minus [Integral of g(x) dx]

• Riemann Sums and Area Approximation:
  Subdivide interval [a, b] into n subintervals of width Delta x = (b - a) / n.
  Approximate Area = Sum from i=1 to n of [f(x_i) × Delta x]

• Fundamental Theorem of Calculus:
  If f is a continuous function on [a, b] and F is any antiderivative of f (such that F\'(x) = f(x)):
  Definite Integral from a to b of f(x) dx = F(b) - F(a)

• Area of Regions Under Curves:
  - If f(x) >= 0 on [a, b]: Area = Definite Integral from a to b of f(x) dx
  - If f(x) <= 0 on [a, b]: Area = - [Definite Integral from a to b of f(x) dx]
  - If f(x) crosses the x-axis: Split the integral at the x-intercepts and take the absolute sum of positive and negative regions.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'math-g12-u3-note',
    title: 'Unit 3: Statistics (Complete Revision Summary)',
    subject: 'Mathematics',
    topic: 'Absolute & Relative Dispersion, Skewness & Sampling Methods',
    summary: 'Comprehensive short notes for Grade 12 Mathematics Unit 3: Measures of absolute dispersion (Range, Interquartile Range, Quartile Deviation, Mean Deviation about mean/median/mode, Variance, Standard Deviation), Measures of relative dispersion (Coefficient of Range, Coefficient of Quartile Deviation, Coefficient of Mean Deviation, Coefficient of Variation), Frequency curves and distribution shapes (symmetrical, positively skewed, negatively skewed), Pearson and Bowley Skewness coefficients, and Probability sampling methods (Simple random, Systematic, Stratified, Cluster, Multistage).',
    readTimeMinutes: 16,
    isFreePreview: false,
    tags: ['Mathematics', 'Grade 12', 'Statistics', 'Variance', 'Standard Deviation', 'Skewness', 'Sampling', 'Dispersion'],
    keyTakeaways: [
      'Absolute vs Relative Dispersion: Absolute dispersion measures spread in original measurement units (Range, IQR, QD, MD, Variance, SD). Relative dispersion is unitless ratio comparing variability across datasets (CR, CQD, CMD, CV).',
      'Range and Interquartile Range: Range = Largest (L) - Smallest (S). IQR = Q_3 - Q_1. Quartile Deviation QD = (Q_3 - Q_1) / 2.',
      'Mean Deviation (MD): MD(mean) = [Sum of |x_i - mean|] / n. For grouped data: MD(mean) = [Sum of f_i × |m_i - mean|] / Sum of f_i.',
      'Variance (sigma squared) and Standard Deviation (sigma): Variance is mean of squared deviations: sigma^2 = [Sum of (x_i - mean)^2] / n. Standard deviation is positive square root: sigma = square root of Variance.',
      'Coefficient of Variation (CV): CV = (sigma / mean) × 100%. Lower CV indicates greater consistency / stability; higher CV indicates greater variability.',
      'Skewness of Distributions: Symmetrical (Mean = Median = Mode, Skewness = 0); Positively Skewed (Mean > Median > Mode, tail to right, Skewness > 0); Negatively Skewed (Mean < Median < Mode, tail to left, Skewness < 0).',
      'Skewness Formulas: Pearson\'s alpha = 3 × (Mean - Median) / Standard Deviation. Bowley\'s beta = (Q_3 + Q_1 - 2 × Median) / (Q_3 - Q_1).',
      'Probability Sampling Techniques: 1. Simple Random; 2. Systematic (interval k = N / n); 3. Stratified (homogeneous strata); 4. Cluster (intact heterogeneous groups); 5. Multistage.'
    ],
    contentMarkdown: `GRADE 12 MATHEMATICS — UNIT 3: STATISTICS

1. MEASURES OF ABSOLUTE DISPERSION

• Range:
  - Ungrouped Data: Range = Largest Value (L) - Smallest Value (S)
  - Grouped Data: Range = Upper boundary of highest class - Lower boundary of lowest class

• Inter-Quartile Range (IQR) and Quartile Deviation (QD):
  - Inter-Quartile Range: IQR = Q_3 - Q_1
    (Measures the range of the middle 50% of the data; unaffected by extreme outliers).
  - Quartile Deviation (Semi-Interquartile Range):
    QD = (Q_3 - Q_1) / 2

• Mean Deviation (MD):
  The average of the absolute deviations from a central measure (mean, median, or mode).
  1. Mean Deviation about the Mean:
     - Ungrouped: MD(mean) = [Sum of |x_i - mean|] / n
     - Grouped: MD(mean) = [Sum of f_i × |m_i - mean|] / Sum of f_i  (where m_i is class midpoint)
  2. Mean Deviation about the Median:
     - Ungrouped: MD(median) = [Sum of |x_i - median|] / n
     - Grouped: MD(median) = [Sum of f_i × |m_i - median|] / Sum of f_i
  3. Mean Deviation about the Mode:
     - Ungrouped: MD(mode) = [Sum of |x_i - mode|] / n

• Variance (sigma squared) and Standard Deviation (sigma):
  - Population Variance for Ungrouped Data:
    sigma^2 = [Sum of (x_i - mean)^2] / n
  - Grouped / Frequency Distribution Variance:
    sigma^2 = [Sum of f_i × (m_i - mean)^2] / Sum of f_i
  - Standard Deviation:
    sigma = positive square root of Variance = square root of sigma^2

============================================================

2. MEASURES OF RELATIVE DISPERSION

Relative measures are pure, unitless numbers used to compare variability between datasets having different units or different means.

• Coefficient of Range (CR):
  CR = (L - S) / (L + S)

• Coefficient of Quartile Deviation (CQD):
  CQD = (Q_3 - Q_1) / (Q_3 + Q_1)

• Coefficient of Mean Deviation (CMD):
  - From Mean: CMD(mean) = MD(mean) / mean
  - From Median: CMD(median) = MD(median) / median
  - From Mode: CMD(mode) = MD(mode) / mode

• Coefficient of Variation (CV):
  CV = (Standard Deviation / Mean) × 100% = (sigma / mean) × 100%
  - Interpretation:
    - Lower CV implies greater consistency, uniformity, and stability.
    - Higher CV implies greater variability, dispersion, and inconsistency.

============================================================

3. FREQUENCY CURVES AND SKEWNESS

• Types of Frequency Curves:
  1. Symmetrical (Normal / Bell-shaped):
     - Values of mean, median, and mode coincide: Mean = Median = Mode
     - Skewness = 0
  2. Positively Skewed (Skewed to the Right):
     - Long tail stretches toward the higher values (right).
     - Relationship: Mean > Median > Mode
     - Skewness > 0 (positive)
  3. Negatively Skewed (Skewed to the Left):
     - Long tail stretches toward the lower values (left).
     - Relationship: Mean < Median < Mode
     - Skewness < 0 (negative)

• Formulas for Measuring Skewness:
  1. Pearson\'s Coefficient of Skewness (alpha):
     alpha = 3 × (Mean - Median) / Standard Deviation
     - If alpha = 0: Distribution is symmetrical.
     - If alpha > 0: Distribution is positively skewed.
     - If alpha < 0: Distribution is negatively skewed.

  2. Bowley\'s Quartile Coefficient of Skewness (beta):
     beta = (Q_3 + Q_1 - 2 × Median) / (Q_3 - Q_1)
     - If beta = 0: Symmetrical.
     - If beta > 0: Positively skewed.
     - If beta < 0: Negatively skewed.

============================================================

4. SAMPLING TECHNIQUES

• Probability (Random) Sampling Methods:
  1. Simple Random Sampling:
     Every member of the population has an equal chance of selection (Lottery method, Random Number Tables).
  2. Systematic Random Sampling:
     Calculate sampling interval k = N / n (Population size N divided by Sample size n). Select a random starting item r between 1 and k, then choose every k-th item: r, r + k, r + 2k, ...
  3. Stratified Random Sampling:
     Population is divided into non-overlapping homogeneous subgroups called strata (e.g. by gender, age, stream). Samples are drawn randomly from each stratum in proportion to their population size.
  4. Cluster Sampling:
     Population is divided into heterogeneous naturally occurring geographical clusters (e.g. woredas, schools). A random sample of entire clusters is chosen and all individuals within are surveyed.
  5. Multistage Sampling:
     Sampling carried out in successive hierarchical stages (e.g. Region -> Zone -> Woreda -> Kebele -> Household).
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'math-g12-u4-note',
    title: 'Unit 4: Introduction to Linear Programming (Complete Revision Summary)',
    subject: 'Mathematics',
    topic: 'Linear Inequalities, Feasible Region & Corner Point Optimization',
    summary: 'Comprehensive short notes for Grade 12 Mathematics Unit 4: System of linear inequalities in two variables, half-plane graphical graphing rules, non-negativity constraints, feasible region (bounded vs unbounded), definition of linear objective function, Fundamental Theorem of Linear Programming, Corner Point Method, and real-world linear programming formulation (diet, manufacturing, and transportation models).',
    readTimeMinutes: 15,
    isFreePreview: false,
    tags: ['Mathematics', 'Grade 12', 'Linear Programming', 'Optimization', 'Feasible Region', 'Corner Point Method', 'Inequalities'],
    keyTakeaways: [
      'Half-Planes and Boundary Lines: Strict inequalities (< or >) use dashed boundary lines. Slack/non-strict inequalities (<= or >=) use solid boundary lines.',
      'Feasible Region: The set of all points (x, y) satisfying all constraint inequalities simultaneously. Bounded if enclosed within a circle/polygon; unbounded if it extends infinitely.',
      'Linear Objective Function: A linear formula Z = ax + by to be maximized (e.g., profit, output) or minimized (e.g., cost, time, waste).',
      'Fundamental Theorem of Linear Programming: If an optimal solution exists for a linear programming problem over a bounded feasible region, it must occur at one of the corner points (vertices) of the region.',
      'Corner Point Method Steps: 1. Graph constraints including x >= 0, y >= 0; 2. Identify feasible region; 3. Calculate coordinates of all vertices; 4. Evaluate Z at each vertex; 5. Select maximum or minimum value.',
      'Unbounded Regions: If the feasible region is unbounded, maximum or minimum values may not exist unless verified by testing open half-planes (ax + by > M or ax + by < m).',
      'Real-World Formulation: 1. Identify decision variables (x, y); 2. Construct objective function Z; 3. Formulate linear constraint inequalities; 4. Add non-negativity restrictions (x >= 0, y >= 0).'
    ],
    contentMarkdown: `GRADE 12 MATHEMATICS — UNIT 4: INTRODUCTION TO LINEAR PROGRAMMING

1. GRAPHICAL SOLUTIONS OF LINEAR INEQUALITIES

• Linear Inequalities in Two Variables:
  Expressions of the form:
  ax + by < c,  ax + by > c,  ax + by <= c,  or  ax + by >= c  (where a and b are not both zero).

• Graphing Steps for Inequalities:
  Step 1: Replace inequality sign with an equals sign to get boundary line equation: ax + by = c.
  Step 2: Graph the line:
    - Use a SOLID line for inclusive inequalities (<= or >=).
    - Use a DASHED (broken) line for strict inequalities (< or >).
  Step 3: Test a convenient point not on the line (such as the origin (0, 0)):
    - If the test point makes the inequality true, shade the half-plane containing the point.
    - If false, shade the opposite half-plane.

============================================================

2. SYSTEMS OF LINEAR INEQUALITIES & FEASIBLE REGIONS

• Feasible Region (Solution Set):
  - The common intersection area of all half-planes determined by the system of linear inequalities.
  - Any point within or on the boundary of the feasible region is a feasible solution.
  - Any point outside is an infeasible solution.

• Types of Feasible Regions:
  1. Bounded Feasible Region: A closed region that can be completely enclosed inside a circle. It always has both an absolute maximum and an absolute minimum for any linear objective function.
  2. Unbounded Feasible Region: A region that extends infinitely in one or more directions. An optimal value (max or min) may or may not exist.

• Non-Negativity Constraints:
  In practical applications, decision variables represent physical quantities (items produced, hours, units) which cannot be negative:
  x >= 0,  y >= 0  (confining the feasible region to the First Quadrant).

============================================================

3. OPTIMIZATION AND THE CORNER POINT METHOD

• Linear Programming Terminology:
  - Decision Variables (x, y): Quantities to be determined.
  - Objective Function: Z = ax + by (linear function to be maximized or minimized).
  - Linear Constraints: System of linear inequalities representing resource, financial, or physical limitations.
  - Corner Point (Vertex): A point in the feasible region where two boundary lines intersect.

• Fundamental Theorem of Linear Programming:
  If a linear programming problem has an optimal solution (maximum or minimum), it must occur at a corner point (vertex) of the feasible region.

• Steps for the Corner Point Method:
  1. Formulate the mathematical model: Identify decision variables, objective function Z, and constraint inequalities.
  2. Graph all constraint lines and shade the overlapping feasible region.
  3. Find the exact coordinates (x, y) of all corner points (vertices) by solving intersection equations simultaneously.
  4. Evaluate the objective function Z = ax + by at each corner point.
  5. Compare the resulting values of Z:
     - The largest value is the Maximum.
     - The smallest value is the Minimum.

============================================================

4. PRACTICAL LINEAR PROGRAMMING MODELS

• Manufacturing / Production Problems:
  - Objective: Maximize Profit Z = p_1 × x + p_2 × y
  - Constraints: Machine hours, labor hours, raw material availability:
    a_1 × x + b_1 × y <= Total Machine Hours
    a_2 × x + b_2 × y <= Total Labor Hours
    x >= 0,  y >= 0

• Diet / Nutrition Problems:
  - Objective: Minimize Cost Z = c_1 × x + c_2 × y
  - Constraints: Minimum daily nutritional requirements:
    Protein: a_1 × x + b_1 × y >= Minimum Protein
    Iron/Vitamin: a_2 × x + b_2 × y >= Minimum Requirement
    x >= 0,  y >= 0

• Transportation and Allocation Models:
  - Minimizing shipping costs from warehouses/factories to destinations while satisfying demand quotas and supply capacities.
`,
    createdAt: '2026-08-19'
  },
  {
    id: 'math-g12-u5-note',
    title: 'Unit 5: Mathematical Applications in Business (Complete Revision Summary)',
    subject: 'Mathematics',
    topic: 'Business Math, Time Value of Money, Annuities, Depreciation & Taxation',
    summary: 'Comprehensive short notes for Grade 12 Mathematics Unit 5: Ratios, rates, direct/inverse proportions, percentage/markup/discount calculations, Simple Interest (I = Prt), Compound Interest (compounding frequencies, EAR), Ordinary Annuity vs Annuity Due (future and present values), Loan Amortization formulas and schedules, Depreciation models (Straight-Line vs Declining Balance), Investments (Stocks, Bonds, ROI), and the Ethiopian Taxation System (Schedules A, B, C, D direct income tax brackets and VAT/TOT indirect taxes).',
    readTimeMinutes: 18,
    isFreePreview: false,
    tags: ['Mathematics', 'Grade 12', 'Business Math', 'Compound Interest', 'Annuities', 'Amortization', 'Depreciation', 'Ethiopian Tax System'],
    keyTakeaways: [
      'Simple Interest: Interest I = P × r × t. Future Amount A = P + I = P × (1 + r × t).',
      'Compound Interest: Compounded m times per year: A = P × (1 + r/m)^(m × t). Conversion period rate i = r/m, total periods n = m × t.',
      'Equivalent / Effective Annual Rate (EAR): r_e = (1 + r/m)^m - 1. Allows fair comparison of loans/deposits with different compounding frequencies.',
      'Annuities: Ordinary Annuity (payments at end of period): Future Value FV = R × [((1 + i)^n - 1) / i]. Present Value PV = R × [(1 - (1 + i)^(-n)) / i]. Annuity Due (payments at beginning): multiply Ordinary FV or PV by (1 + i).',
      'Amortization Payment: Equal periodic repayment on loan PV: R = PV × [i / (1 - (1 + i)^(-n))].',
      'Depreciation Models: Straight-Line: Annual Depreciation = (Initial Cost - Residual Salvage Value) / Useful Life in years. Declining Balance: Book Value = Initial Cost × (1 - r)^t.',
      'Return on Investment (ROI): ROI = [(Current Value - Investment Cost) / Investment Cost] × 100%.',
      'Ethiopian Income Tax (Schedule A): First 600 Birr exempt (0%); 601-1650 at 10% (deduction 60); 1651-3200 at 15% (deduction 142.5); 3201-5250 at 20% (deduction 302.5); 5251-7800 at 25% (deduction 565); 7801-10900 at 30% (deduction 955); Over 10900 at 35% (deduction 1500). Formula: Tax = Taxable Income × Rate - Deduction.',
      'Value Added Tax (VAT): Standard 15% in Ethiopia. Turnover Tax (TOT): 2% on locally supplied goods/contractors; 10% on other services.'
    ],
    contentMarkdown: `GRADE 12 MATHEMATICS — UNIT 5: MATHEMATICAL APPLICATIONS IN BUSINESS

1. BASIC MATHEMATICAL CONCEPTS IN BUSINESS

• Ratio, Rate, and Proportion:
  - Ratio: Comparison of two quantities by division: a : b or a / b.
  - Rate: Comparison of two quantities with different units (e.g., speed in km/h, cost per kg). Unit rate has denominator 1.
  - Direct Proportion: Two variables increase or decrease together such that y / x = k  implies  y = k × x.
  - Inverse Proportion: One variable increases as the other decreases such that x × y = k  implies  y = k / x.

• Markup and Discount:
  - Markup = Selling Price - Cost Price
  - Markup Percentage on Cost = (Markup / Cost Price) × 100%
  - Markup Percentage on Selling Price = (Markup / Selling Price) × 100%
  - Selling Price with Discount = Regular Price × (1 - Discount Rate)
  - Discount Rate = (Discount Amount / Regular Price) × 100%

============================================================

2. TIME VALUE OF MONEY: SIMPLE & COMPOUND INTEREST

• Simple Interest:
  Interest calculated solely on the principal amount:
  - Interest Formula: I = P × r × t
    (P = Principal, r = annual interest rate as a decimal, t = time in years).
  - Accumulated Future Amount: A = P + I = P × (1 + r × t)

• Compound Interest:
  Interest calculated on initial principal plus accumulated interest from previous periods.
  - General Formula:
    A = P × (1 + r / m)^(m × t) = P × (1 + i)^n
    where:
    m = number of compounding periods per year
    (Annually: m = 1; Semi-annually: m = 2; Quarterly: m = 4; Monthly: m = 12; Weekly: m = 52; Daily: m = 365)
    i = interest rate per compounding period = r / m
    n = total number of conversion periods = m × t
  - Total Compound Interest (CI):
    CI = A - P = P × [(1 + i)^n - 1]

• Effective Annual Rate (EAR) / Equivalent Annual Rate (r_e):
  The simple annual rate that produces the same interest yield as a given compound rate:
  r_e = (1 + r / m)^m - 1

============================================================

3. ANNUITIES AND LOAN AMORTIZATION

• Definition of Annuity:
  A sequence of equal periodic payments made at regular equal time intervals (e.g. mortgage payments, pensions, savings deposits).

• Ordinary Annuity (Payments made at the END of each period):
  - Future Value of Ordinary Annuity (FV):
    FV = R × [((1 + i)^n - 1) / i] = R × S_{n|i}
    where R = periodic payment amount, S_{n|i} is the Future Value Annuity Factor.
  - Present Value of Ordinary Annuity (PV):
    PV = R × [(1 - (1 + i)^(-n)) / i] = R × a_{n|i}

• Annuity Due (Payments made at the BEGINNING of each period):
  - Future Value of Annuity Due = FV(ordinary) × (1 + i) = R × S_{n|i} × (1 + i)
  - Present Value of Annuity Due = PV(ordinary) × (1 + i) = R × a_{n|i} × (1 + i)

• Loan Amortization Formula:
  The equal periodic payment R required to pay off a loan of present value PV:
  R = PV × [i / (1 - (1 + i)^(-n))]
  - Amortization Schedule Table:
    Month | Beginning Balance | Periodic Payment | Interest Paid (Balance × i) | Principal Paid (Payment - Interest) | Ending Balance

============================================================

4. DEPRECIATION MODELS

• Straight-Line Depreciation:
  Equal monetary decline in asset value every year:
  - Annual Depreciation Amount = (Original Cost - Salvage Residual Value) / Useful Life in years
  - Book Value at year t = Original Cost - (Annual Depreciation Amount × t)

• Declining Balance (Percentage) Depreciation:
  Asset depreciates by a constant percentage r each year:
  - Book Value at year t = Original Cost × (1 - r)^t

============================================================

5. INVESTMENTS: STOCKS, BONDS & RETURN ON INVESTMENT (ROI)

• Stocks (Equity Financing):
  Shareholders receive dividends and capital gains; four basic shareholder rights: voting, dividends, liquidation share, and preemption.
• Bonds (Debt Financing):
  Issuer borrows funds; pays periodic coupon interest and returns par value at maturity:
  - Periodic Interest Payment = Par Value × (Coupon Rate / m)
• Return on Investment (ROI):
  ROI = [(Current Value of Investment - Initial Cost) / Initial Cost] × 100%

============================================================

6. ETHIOPIAN TAXATION SYSTEM

• Direct Taxes (Proclamation 979/2016):
  1. Schedule A: Employment Income Tax (Monthly progressive tax brackets):
     - Up to 600 Birr: Exempt (0% tax, Deduction = 0)
     - 601 to 1,650 Birr: 10% tax (Deduction = 60 Birr)
     - 1,651 to 3,200 Birr: 15% tax (Deduction = 142.50 Birr)
     - 3,201 to 5,250 Birr: 20% tax (Deduction = 302.50 Birr)
     - 5,251 to 7,800 Birr: 25% tax (Deduction = 565 Birr)
     - 7,801 to 10,900 Birr: 30% tax (Deduction = 955 Birr)
     - Over 10,900 Birr: 35% tax (Deduction = 1,500 Birr)

     - Quick Deduction Method Formula:
       Monthly Income Tax = (Taxable Monthly Income × Tax Rate) - Deduction

  2. Schedule B: Rental of Buildings (Tax on gross rental income minus allowable deductions; 30% flat for incorporated bodies).
  3. Schedule C: Business Income Tax (Category A > 1M turnover; Category B 500k-1M; Category C < 500k).
  4. Schedule D: Other Incomes (Royalties 5%, Dividends 10%, Bank Interest 5%, Lottery/Games of chance 15%, Immovable asset disposal 15%, Shares/Bonds disposal 30%, Casual rental 15%).

• Indirect Taxes:
  1. Value Added Tax (VAT): Standard rate is 15% on the value added at each transaction stage.
     - VAT Amount = Price without VAT × 0.15
     - Price with VAT = Price without VAT × 1.15
  2. Turnover Tax (TOT): Equalization tax for non-VAT registered businesses:
     - 2% on locally supplied goods, grain mills, tractors, combine harvesters.
     - 10% on other services.
`,
    createdAt: '2026-08-19'
  }
];
