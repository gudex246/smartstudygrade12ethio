import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2017_EC_PART4: Question[] = [
  {
    id: 'math-2017-q47',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Geometric Series: Sum of the First n Terms',
    questionText: '47. Given the sequence 3, 6, 12, 24, ..., Then what is the 10th partial sum of the sequence?',
    options: [
      '3075',
      '1023',
      '1027',
      '3069'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Identify the components of the geometric sequence:
• First term a = 3
• Common ratio r = 6 / 3 = 2
• Number of terms n = 10

Step 2: Recall the formula for the nth partial sum Sₙ of a geometric sequence:
Sₙ = a(rⁿ - 1) / (r - 1).

Step 3: Substitute the known values:
S₁₀ = 3(2¹⁰ - 1) / (2 - 1)
S₁₀ = 3(1024 - 1) / 1
S₁₀ = 3(1023) = 3069.

Therefore, the 10th partial sum is 3069.`,
    hint: 'Use S₁₀ = a(r¹⁰ - 1)/(r - 1) = 3(2¹⁰ - 1)/(2 - 1) = 3(1023) = 3069.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q48',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Infinite Series: Convergence & Divergence of Geometric Series',
    questionText: '48. Which of the following statement is true about the given infinite series?',
    options: [
      '∑_{n=1}^∞ (4/3)ⁿ is convergent.',
      '∑_{n=1}^∞ 2ⁿ is divergent.',
      '∑_{n=1}^∞ (-1)ⁿ (2/5)ⁿ is divergent.',
      '∑_{n=1}^∞ (-1)ⁿ 2ⁿ is convergent.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: State the geometric series convergence criterion:
An infinite geometric series ∑ a·rⁿ converges if and only if |r| < 1. If |r| ≥ 1, the series diverges.

Step 2: Test each statement:
• A: r = 4/3. Since |4/3| = 1.33 > 1, the series diverges. Saying it is convergent is FALSE.
• B: r = 2. Since |2| = 2 ≥ 1, the terms grow without bound and the series diverges. Saying it is divergent is TRUE.
• C: r = -2/5. Since |-2/5| = 2/5 = 0.4 < 1, this alternating series converges. Saying it is divergent is FALSE.
• D: r = -2. Since |-2| = 2 ≥ 1, it oscillates with increasing amplitude and diverges. Saying it is convergent is FALSE.

Statement B is the only true statement.`,
    hint: 'A geometric series ∑ rⁿ converges if and only if |r| < 1. For r = 2, it diverges.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q49',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Differential Calculus: Average Rate of Change',
    questionText: '49. What is the average rate of change of g(x) = x³ - 2x over the interval 1 ≤ x ≤ 6?',
    options: [
      '41',
      '37/5',
      '46',
      '203/5'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: State the average rate of change formula:
Average Rate of Change = [g(b) - g(a)] / (b - a).
Here, a = 1 and b = 6.

Step 2: Evaluate g(x) at the endpoints:
• g(6) = 6³ - 2(6) = 216 - 12 = 204.
• g(1) = 1³ - 2(1) = 1 - 2 = -1.

Step 3: Compute the quotient:
Average Rate of Change = [204 - (-1)] / (6 - 1)
= (204 + 1) / 5
= 205 / 5 = 41.

Therefore, the average rate of change is 41.`,
    hint: 'Compute [g(6) - g(1)] / (6 - 1) = [204 - (-1)] / 5 = 205 / 5 = 41.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q50',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Calculus: Derivative of Sum of Functions',
    questionText: '50. Suppose f(x) = 3√x and g(x) = (1/3)x⁴ + 2x be given two functions. Then which of the following is equal to (f + g)\'(x)?',
    options: [
      '(2/3)x^(-1/3) + 4x³ + 2x',
      '(2/3)x^(-1/3) + 4x³ + 2',
      '(3/2)x^(-1/2) + (4/3)x³ + 2',
      '3x^(-1/2) + 4x³ + 2'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Apply the sum rule of differentiation:
(f + g)'(x) = f'(x) + g'(x).

Step 2: Differentiate f(x):
f(x) = 3 · x^(1/2)
f'(x) = 3 · (1/2)x^(1/2 - 1) = (3/2)x^(-1/2).

Step 3: Differentiate g(x):
g(x) = (1/3)x⁴ + 2x
g'(x) = (1/3)(4x³) + 2 = (4/3)x³ + 2.

Step 4: Combine the derivatives:
(f + g)'(x) = (3/2)x^(-1/2) + (4/3)x³ + 2.

This matches Option C.`,
    hint: 'Differentiate each term: d/dx(3x^(1/2)) = (3/2)x^(-1/2), and d/dx((1/3)x⁴ + 2x) = (4/3)x³ + 2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q51',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Calculus: Differentiation by Chain Rule',
    questionText: '51. Let f(x) = (1 - 2x)^(1/2). Then what is the value of f\'(x)?',
    options: [
      '(-1/2)√(1 - 2x)',
      '(1/2)√(1 - 2x)',
      '-1 / √(1 - 2x)',
      '1 / √(1 - 2x)'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Write f(x) in power form:
f(x) = (1 - 2x)^(1/2).

Step 2: Apply the Chain Rule:
If f(x) = [u(x)]ⁿ, then f'(x) = n · [u(x)]ⁿ⁻¹ · u'(x).
Here u(x) = 1 - 2x and n = 1/2:
u'(x) = d/dx(1 - 2x) = -2.

Step 3: Compute f'(x):
f'(x) = (1/2)(1 - 2x)^(-1/2) · (-2)
f'(x) = -1 · (1 - 2x)^(-1/2)
f'(x) = -1 / √(1 - 2x).

This matches Option C.`,
    hint: 'Use the chain rule: (1/2)(1 - 2x)^(-1/2) · (-2) = -1 / √(1 - 2x).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q52',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Differential Calculus: Critical Points & Second Derivative Test',
    questionText: '52. Consider the function f(x) = x³ - 3x² + 3 on (-2, 3). Then which of the following point is local minimum and local maximum of f(x) respectively?',
    options: [
      '(0, 3) and (2, -1)',
      '(3, 3) and (-2, -27)',
      '(2, -1) and (0, 3)',
      '(-2, -27) and (0, 3)'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Find the critical points by taking the first derivative:
f'(x) = 3x² - 6x = 3x(x - 2) = 0.
Critical points occur at x = 0 and x = 2 (both are inside (-2, 3)).

Step 2: Apply the Second Derivative Test:
f''(x) = 6x - 6.
• At x = 0: f''(0) = 6(0) - 6 = -6 < 0 (concave down  ⟹  local maximum).
  f(0) = 0³ - 3(0)² + 3 = 3.
  Local maximum point is (0, 3).
• At x = 2: f''(2) = 6(2) - 6 = +6 > 0 (concave up  ⟹  local minimum).
  f(2) = 2³ - 3(2)² + 3 = 8 - 12 + 3 = -1.
  Local minimum point is (2, -1).

Step 3: State respectively (local minimum first, then local maximum):
Local minimum = (2, -1) and Local maximum = (0, 3).

This matches Option C.`,
    hint: 'Set f\'(x) = 3x(x - 2) = 0. Use f\'\'(x) = 6x - 6: f\'\'(2) > 0 gives min at (2, -1) and f\'\'(0) < 0 gives max at (0, 3).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q53',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Statistics: Concept of Statistical Dispersion',
    questionText: '53. Which one of the following statements describes the dispersion of the data values?',
    options: [
      'It measures the variability in terms of different units of data.',
      'The degree to which numerical data tends to distribute about an average.',
      'It helps to describe the degree of similarity of data values.',
      'It compares the variability of two or more data that are dependent of the units of measurement.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Define statistical dispersion:
In descriptive statistics, dispersion (also known as variability, scatter, or spread) denotes the degree to which numerical data values tend to spread, scatter, or distribute around a central value (such as the arithmetic mean or median).

Step 2: Evaluate the options:
Option B: "The degree to which numerical data tends to distribute about an average" provides the exact classical textbook definition of statistical dispersion.`,
    hint: 'Dispersion is defined as the degree of variation or spread of numerical data about a central average.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q54',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Statistics: Mean Deviation About the Mode',
    questionText: '54. Consider the following data: 13, 16, 19, 19, 19, 19, 24, 27 (n = 8). What is the mean deviation about the mode?',
    options: [
      '2.75',
      '3.75',
      '3',
      '4'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Find the mode of the dataset:
The value 19 occurs with the highest frequency (4 times).
Mode = 19.

Step 2: Calculate the absolute deviation |xᵢ - Mode| for each data point:
• |13 - 19| = 6
• |16 - 19| = 3
• |19 - 19| = 0 (four times: 0 + 0 + 0 + 0 = 0)
• |24 - 19| = 5
• |27 - 19| = 8

Step 3: Sum the absolute deviations:
∑|xᵢ - Mode| = 6 + 3 + 0 + 0 + 0 + 0 + 5 + 8 = 22.

Step 4: Divide by the total number of observations n = 8:
Mean Deviation = 22 / 8 = 2.75.`,
    hint: 'Mode is 19. Find the sum of absolute differences from 19: 6 + 3 + 0 + 0 + 0 + 0 + 5 + 8 = 22. Divide by 8 to get 2.75.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q55',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Statistics: Coefficient of Quartile Deviation',
    questionText: '55. What is the coefficient of quartile deviation for the following data? 29, 44, 46, 52, 35, 35, 25, 15, 10, 55, 56',
    options: [
      '0.35',
      '0.48',
      '2.08',
      '2.85'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Arrange the n = 11 data points in ascending order:
10, 15, 25, 29, 35, 35, 44, 46, 52, 55, 56.

Step 2: Find the positions and values of Q₁ and Q₃:
• Position of Q₁ = (n + 1) / 4 = (11 + 1) / 4 = 3rd term.
  Q₁ = 25.
• Position of Q₃ = 3(n + 1) / 4 = 3(12) / 4 = 9th term.
  Q₃ = 52.

Step 3: Calculate the Coefficient of Quartile Deviation:
Coefficient = (Q₃ - Q₁) / (Q₃ + Q₁)
Coefficient = (52 - 25) / (52 + 25)
Coefficient = 27 / 77 ≈ 0.3506 ≈ 0.35.`,
    hint: 'Order data: Q₁ = 25 (3rd item) and Q₃ = 52 (9th item). Coefficient = (52 - 25)/(52 + 25) = 27/77 ≈ 0.35.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q56',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Statistics: Coefficient of Mean Deviation About the Median',
    questionText: '56. Consider the following data: 1, 3, 7, 9, 11, 13, 18, 28. Then the coefficient of mean deviation about the median is equal to:',
    options: [
      '8/5',
      '5/8',
      '1/2',
      '1/4'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: The data is already sorted in ascending order with n = 8:
Median = (4th term + 5th term) / 2 = (9 + 11) / 2 = 10.

Step 2: Calculate absolute deviations from the median:
|1 - 10| = 9
|3 - 10| = 7
|7 - 10| = 3
|9 - 10| = 1
|11 - 10| = 1
|13 - 10| = 3
|18 - 10| = 8
|28 - 10| = 18

Step 3: Compute the Mean Deviation:
Sum = 9 + 7 + 3 + 1 + 1 + 3 + 8 + 18 = 50.
Mean Deviation = 50 / 8 = 6.25.

Step 4: Compute the Coefficient of Mean Deviation about Median:
Coefficient = (Mean Deviation) / Median
= 6.25 / 10 = 0.625 = 5/8.`,
    hint: 'Median = 10. Mean deviation = 50 / 8 = 6.25. Coefficient = 6.25 / 10 = 5/8.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q57',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Linear Programming: Feasible Region Vertices & Objective Optimization',
    questionText: '57. Given the objective function Z = -x + 2y that is subjected to the constraints:\n  x ≥ 3\n  x + y ≥ 5\n  x + 2y ≤ 6\n  y ≥ 0\nWhat are the maximum and the minimum values of Z respectively?',
    options: [
      '1 and -2',
      '-2 and -6',
      '-6 and -2',
      '-2 and 1'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Find the corner points (vertices) of the bounded feasible region:
1. Intersection of x + y = 5 and x + 2y = 6:
   Subtract the first from the second: y = 1.
   Then x = 5 - 1 = 4.
   Vertex 1 = (4, 1). Checks constraints: 4 ≥ 3, 1 ≥ 0.
2. Intersection of x + y = 5 and y = 0:
   x = 5.
   Vertex 2 = (5, 0). Checks constraints: 5 ≥ 3, 5 + 2(0) = 5 ≤ 6.
3. Intersection of x + 2y = 6 and y = 0:
   x = 6.
   Vertex 3 = (6, 0). Checks constraints: 6 ≥ 3, 6 + 0 = 6 ≥ 5.

Step 2: Evaluate the objective function Z = -x + 2y at each vertex:
• At (4, 1): Z = -4 + 2(1) = -2
• At (5, 0): Z = -5 + 2(0) = -5
• At (6, 0): Z = -6 + 2(0) = -6

Step 3: Identify maximum and minimum:
• Maximum value of Z = -2 (at (4, 1)).
• Minimum value of Z = -6 (at (6, 0)).
Respectively (maximum and minimum): -2 and -6.`,
    hint: 'The vertices are (4, 1), (5, 0), and (6, 0). Test Z: Z(4,1) = -2 (max), Z(6,0) = -6 (min).',
    difficulty: 'hard',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q58',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Linear Programming: Mathematical Modeling of Production Constraints',
    questionText: '58. A television company assembles flat screen and curved screen televisions. The company has to invest Birr 15,000 to assemble one flat screen and Birr 20,000 to assemble one curved screen television. The company allocates a maximum of Birr 900,000 in a week for assembling. The company gets Birr 1800 profit from a sale of one flat screen television and Birr 2000 profit from a sale of one curved screen television. Moreover, the company has a store of maximum capacity of storing 50 televisions. Let x be the number of flat screens and y be the number of curved screens. Then which one of the following inequalities should model the profit for the objective function Z = 1800x + 2000y?',
    options: [
      '{\n  15,000x + 20,000y ≤ 900,000\n  x + y ≤ 50\n  x, y ≥ 0\n}',
      '{\n  15,000x + 20,000y ≤ 360,000\n  x + y ≤ 50\n  x, y ≥ 0\n}',
      '{\n  20,000x + 15,000y ≤ 900,000\n  x + y ≤ 50\n  x, y ≥ 0\n}',
      '{\n  20,000x + 15,000y ≤ 360,000\n  x + y ≤ 50\n  x, y ≥ 0\n}'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Formulate the financial investment constraint:
• Assembly cost per flat screen (x) = Birr 15,000.
• Assembly cost per curved screen (y) = Birr 20,000.
• Total weekly budget limit = Birr 900,000.
Inequality: 15,000x + 20,000y ≤ 900,000.

Step 2: Formulate the physical storage constraint:
The warehouse stores at most 50 televisions total:
Inequality: x + y ≤ 50.

Step 3: Non-negativity constraints:
The number of televisions produced cannot be negative:
x ≥ 0 and y ≥ 0.

Combining all constraints yields System A.`,
    hint: 'Budget constraint: 15,000x + 20,000y ≤ 900,000. Storage constraint: x + y ≤ 50. Non-negativity: x, y ≥ 0.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q59',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Financial Mathematics: Percentage Discount & Original Price',
    questionText: '59. A company offers a discount of 25% on one of its product for promotion. What is a regular price of the product if it is purchased for Birr 99?',
    options: [
      '198',
      '132',
      '125',
      '110'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Define variables:
Let P be the regular (original) price of the product.

Step 2: Express the promotional sale price after discount:
Discount = 25% of P = 0.25P.
Sale Price = P - 0.25P = 0.75P (or 75% of regular price).

Step 3: Set up the equation and solve for P:
0.75P = 99
(3/4)P = 99
P = 99 × (4/3)
P = 33 × 4 = 132 Birr.

Therefore, the regular price of the product is Birr 132.`,
    hint: 'Sale price = 75% of Regular Price. P = 99 / 0.75 = 99 × 4/3 = 132 Birr.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q60',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Financial Mathematics: Loan Down Payment & Installments',
    questionText: '60. A worker of a company borrowed Birr 100,000 from the company\'s credit and saving association. She agreed to pay 10% of the loan during the agreement and on the remaining amount to pay Birr 3000 (monthly plus interest) in 36 monthly installments. What is the total amount of money she paid to the credit and saving association?',
    options: [
      'Birr 118,000',
      'Birr 108,000',
      'Birr 116,000',
      'Birr 106,000'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Calculate the initial agreement payment (down payment):
Down payment = 10% of Birr 100,000
= 0.10 × 100,000 = Birr 10,000.

Step 2: Calculate the total payment from monthly installments:
Installment payment = Birr 3,000 per month for 36 months
Total installments = 36 × 3,000 = Birr 108,000.

Step 3: Compute the total amount paid to the association:
Total Amount Paid = Down Payment + Total Installments
= 10,000 + 108,000 = Birr 118,000.`,
    hint: 'Down payment = 10,000. Installments = 36 × 3,000 = 108,000. Total = 10,000 + 108,000 = 118,000 Birr.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  }
];
