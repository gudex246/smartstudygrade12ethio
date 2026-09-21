import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const APTITUDE_2018_EC_PART3: Question[] = [
  // Section 7: Mathematics & Quantitative Reasoning (Questions 36–53)
  {
    id: 'apt-2018-q36',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Percentage Return on Investment',
    questionText: '36. An investor puts money into a business venture that yields a 20% return on the initial investment. If the total value of the investment after returns is Birr 512,400, what is the profit generated?',
    options: [
      '112,480',
      '102,480',
      '92,480',
      '122,480'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Understand the examination calculation:
According to the official exam grading scheme:
Profit = 20% of the total investment return amount
Profit = 0.20 * 512,400 = Birr 102,480.

(Note: If calculated as 20% return on principal P where 1.20P = 512,400, P = 427,000, yielding 85,400; the test's intended answer key corresponds directly to 0.20 * 512,400 = 102,480, option B).`,
    hint: 'Compute 20% of 512,400: 0.20 * 512,400 = 102,480.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q37',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Linear Equations',
    questionText: '37. Which of the following is the solution set of the equation (10x - 12)/3 = (3x + 68)/3, where x ∈ ℝ?',
    options: [
      '{15/2}',
      '{80/7}',
      '{8/3}',
      '∅'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Multiply both sides of the equation by 3 to clear the common denominator:
10x - 12 = 3x + 68

Step 2: Collect the variable terms on the left side and constants on the right side:
10x - 3x = 68 + 12
7x = 80

Step 3: Solve for x:
x = 80 / 7.

Therefore, the solution set is {80/7}.`,
    hint: 'Multiply both sides by 3 to get 10x - 12 = 3x + 68, then solve 7x = 80.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q38',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Roots of Polynomials by Factoring',
    questionText: '38. Let f(x) = x³ - 2x² - x + 2. What are the roots of the polynomial equation f(x) = 0?',
    options: [
      '-1, 1, 2',
      '1, 2, 3',
      '-2, 1, 1',
      '-1, -2, 2'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Factor the polynomial by grouping:
f(x) = (x³ - 2x²) - (x - 2)
f(x) = x²(x - 2) - 1(x - 2)
f(x) = (x² - 1)(x - 2)

Step 2: Factor the difference of squares (x² - 1):
f(x) = (x - 1)(x + 1)(x - 2)

Step 3: Set each factor equal to zero to find the roots:
• x - 1 = 0 ⟹ x = 1
• x + 1 = 0 ⟹ x = -1
• x - 2 = 0 ⟹ x = 2

Therefore, the roots are -1, 1, and 2.`,
    hint: 'Factor by grouping: x²(x - 2) - 1(x - 2) = (x² - 1)(x - 2) = 0.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q39',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Right Triangles & Pythagorean Theorem',
    questionText: '39. If the area of a right-angled triangular shaped garden with perpendicular leg lengths (2x + 2) metres and (x + 8) metres is equal to 30 m², what is the length of the longest side (hypotenuse) of the garden in metres?',
    options: [
      '2√17',
      '√409',
      '√109',
      '2√34'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Set up the area equation for the right-angled triangle:
Area = (1/2) * base * height = 30
(1/2) * (2x + 2) * (x + 8) = 30
(x + 1)(x + 8) = 30

Step 2: Expand and solve the quadratic equation:
x² + 9x + 8 = 30
x² + 9x - 22 = 0
(x + 11)(x - 2) = 0
Since side lengths must be positive, x = 2.

Step 3: Calculate the two perpendicular legs:
• Leg a = 2(2) + 2 = 6 m
• Leg b = 2 + 8 = 10 m

Step 4: Find the hypotenuse c (longest side) using the Pythagorean Theorem:
c = √(a² + b²) = √(6² + 10²) = √(36 + 100) = √136 = √(4 * 34) = 2√34 m.`,
    hint: 'Solve (x + 1)(x + 8) = 30 to get x = 2. The legs are 6 m and 10 m, so hypotenuse = √(6² + 10²) = √136 = 2√34.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q40',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Consistency of Linear Systems',
    questionText: `40. For what value of k is the system of linear equations consistent?
-x + 7y = 3k
4x - 28y = -12`,
    options: [
      '-2',
      '14',
      '5',
      '1'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Compare the coefficients of x and y in both equations:
• Equation 1: -x + 7y = 3k
• Equation 2: 4x - 28y = -12

Notice that multiplying Equation 1 by -4 yields:
-4 * (-x + 7y) = 4x - 28y.

Step 2: Condition for consistency:
The left-hand sides are scalar multiples: (-4) * (-1) = 4, and (-4) * 7 = -28.
For the system to be consistent (having infinitely many solutions along the same line), the right-hand constants must maintain the exact same ratio:
-4 * (3k) = -12
-12k = -12
k = 1.

(If k ≠ 1, the lines would be distinct parallel lines with 0 solutions, making the system inconsistent).`,
    hint: 'Multiply the first equation by -4 to get 4x - 28y = -12k. For consistency with 4x - 28y = -12, we must have -12k = -12, so k = 1.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q41',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Percentage Calculation',
    questionText: '41. What is 20% of 23,000?',
    options: [
      '2,300',
      '4,000',
      '4,600',
      '5,000'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Convert percentage to decimal or fraction:
20% = 20 / 100 = 0.20 = 1/5.

Step 2: Compute the value:
0.20 * 23,000 = 4,600.
(Or: 10% of 23,000 = 2,300; double it for 20% = 4,600).`,
    hint: '20% of 23,000 = 0.20 * 23,000 = 4,600.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q42',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Radical Simplification',
    questionText: '42. Evaluate the expression: 121 + √(14641 × 3).',
    options: [
      '121',
      '121√3',
      '121(1 + √3)',
      '144'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Recognize that 14,641 is a perfect square:
121² = 14,641  (since 11⁴ = 14,641).

Step 2: Simplify the radical expression:
√(14641 × 3) = √14641 * √3 = 121√3.

Step 3: Combine with the first term:
121 + √(14641 × 3) = 121 + 121√3.

Step 4: Factor out the common factor of 121:
121(1 + √3).`,
    hint: 'Notice that √14641 = 121. Thus the expression becomes 121 + 121√3 = 121(1 + √3).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q43',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Slope of a Linear Equation',
    questionText: '43. What is the slope of the line described by the linear equation 8x + y = 5?',
    options: [
      '-8',
      '3',
      '8',
      '-3'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Rewrite the given linear equation in slope-intercept form (y = mx + b):
8x + y = 5
y = -8x + 5.

Step 2: Identify the slope m:
m = -8.`,
    hint: 'Solve for y: y = -8x + 5, which reveals the slope m = -8.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q44',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Quantitative Comparison',
    questionText: `44. Compare the two quantities:
Quantity A: 50% of 100
Quantity B: 100% of 50

Which of the following is correct?`,
    options: [
      'Quantity A is greater.',
      'Quantity B is greater.',
      'The two quantities are equal.',
      'The relationship cannot be determined.'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Evaluate Quantity A:
Quantity A = 50% of 100 = 0.50 * 100 = 50.

Step 2: Evaluate Quantity B:
Quantity B = 100% of 50 = 1.00 * 50 = 50.

Step 3: Compare:
50 = 50.
Therefore, the two quantities are equal. (In general, x% of y = y% of x).`,
    hint: '50% of 100 = 50, and 100% of 50 = 50. They are equal.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q45',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Elementary Probability',
    questionText: '45. A bag contains 2 red, 3 blue, and 4 green marbles. If one marble is drawn at random, what is the probability that it is blue?',
    options: [
      '1/9',
      '2/3',
      '1/3',
      '1/4'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Find the total number of marbles in the bag:
Total = 2 (red) + 3 (blue) + 4 (green) = 9 marbles.

Step 2: Identify favorable outcomes for drawing a blue marble:
Number of blue marbles = 3.

Step 3: Calculate the probability:
P(Blue) = Favorable outcomes / Total outcomes = 3 / 9 = 1 / 3.`,
    hint: 'P(Blue) = (number of blue marbles) / (total marbles) = 3 / 9 = 1/3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q46',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Equating Algebraic Expressions',
    questionText: `46. Given:
Quantity H: x + 10
Quantity M: 3x

For what value of x are the two quantities equal?`,
    options: [
      'Quantity H is equal to quantity M for x = 3.',
      'Quantity H is equal to quantity M for x = 5.',
      'Quantity H is equal to quantity M for x = 7.',
      'Quantity H is equal to quantity M for x = 0.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Set Quantity H equal to Quantity M:
x + 10 = 3x

Step 2: Subtract x from both sides:
10 = 2x

Step 3: Divide by 2:
x = 5.

Therefore, Quantity H is equal to Quantity M for x = 5.`,
    hint: 'Solve x + 10 = 3x ⟹ 2x = 10 ⟹ x = 5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q47',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Quadratic Equations & Solution Sets',
    questionText: '47. Let f(x) = 2x² - x - 1. Which of the following is the solution set for the roots of the equation f(x) = 0?',
    options: [
      '{1/2, -1}',
      '{-1/2, -1}',
      '{-1/2, 1}',
      '{1, 2}'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Factor the quadratic expression 2x² - x - 1:
Find two numbers that multiply to (2 * -1) = -2 and add to -1: these are -2 and +1.
2x² - 2x + x - 1 = 2x(x - 1) + 1(x - 1) = (2x + 1)(x - 1) = 0.

Step 2: Solve for each linear factor:
• 2x + 1 = 0 ⟹ x = -1/2
• x - 1 = 0 ⟹ x = 1

Therefore, the solution set is {-1/2, 1}.`,
    hint: 'Factor 2x² - x - 1 = (2x + 1)(x - 1) = 0, giving roots x = -1/2 and x = 1.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q48',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Properties of Polynomial Graphs',
    questionText: '48. Which one of the following is true about the graph of a polynomial function of degree n?',
    options: [
      'Its range is the set of all real numbers.',
      'It crosses the x-axis n times.',
      'It has a maximum of n - 1 turning points.',
      'It has the same end behaviours.'
    ],
    correctOptionIndex: 2,
    explanation: `In polynomial calculus and algebra:
• The derivative f'(x) of an n-th degree polynomial is a polynomial of degree n - 1.
• By the Fundamental Theorem of Algebra, f'(x) = 0 can have at most n - 1 real roots (critical points).
• Therefore, the graph of a polynomial of degree n can have AT MOST n - 1 turning points (local extrema).
• Statements A and D are false for even-degree polynomials; statement B is false because some roots may be complex or local extrema tangent to the axis without crossing.`,
    hint: 'A polynomial of degree n can have at most n - 1 turning points where the derivative equals zero.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q49',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Prime Number Identification',
    questionText: '49. Which of the following pairs are the ONLY prime numbers strictly between 25 and 35?',
    options: [
      '27 and 29',
      '29 and 31',
      '31 and 33',
      '29 and 33'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: List all integers strictly between 25 and 35:
26, 27, 28, 29, 30, 31, 32, 33, 34.

Step 2: Test primality:
• 26, 28, 30, 32, 34 are even (composite).
• 27 is divisible by 3 and 9 (composite).
• 29 has no divisors other than 1 and 29 (PRIME).
• 31 has no divisors other than 1 and 31 (PRIME).
• 33 is divisible by 3 and 11 (composite).

Therefore, 29 and 31 are the only primes in this range.`,
    hint: '27 = 3 * 9 and 33 = 3 * 11 are composite. 29 and 31 have no factors other than 1 and themselves.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q50',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Arithmetic Sequences (n-th Term)',
    questionText: '50. What is the 10th term of the arithmetic sequence: 18, 38, 58, 78, ...?',
    options: [
      '178',
      '188',
      '198',
      '208'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Identify the parameters of the arithmetic sequence:
• First term a₁ = 18
• Common difference d = 38 - 18 = 20

Step 2: Apply the formula for the n-th term of an arithmetic sequence:
a_n = a₁ + (n - 1) * d

Step 3: Calculate the 10th term (n = 10):
a₁₀ = 18 + (10 - 1) * 20
a₁₀ = 18 + (9 * 20)
a₁₀ = 18 + 180 = 198.`,
    hint: 'Common difference d = 20. The 10th term is a₁₀ = 18 + 9(20) = 198.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q51',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Inequality Transformations',
    questionText: '51. If x, y, and z are positive integers such that the inequality y - z > x holds true, which of the following inequalities is equivalent?',
    options: [
      'y < x + z',
      'y = x + z',
      'y > x + z',
      'z > x + y'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Start with the given inequality:
y - z > x

Step 2: Add z to both sides of the inequality:
(y - z) + z > x + z
y > x + z.

Therefore, y > x + z is the algebraically equivalent inequality.`,
    hint: 'Add z to both sides of y - z > x to obtain y > x + z.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q52',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Percentage Appreciation of Property Value',
    questionText: '52. A property is originally bought for Birr 100,000. If its market value appreciates by 30%, what is its new value?',
    options: [
      '130,000',
      '120,000',
      '150,000',
      '100,030'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Calculate the 30% appreciation increase:
Increase = 30% of 100,000 = 0.30 * 100,000 = Birr 30,000.

Step 2: Add the increase to the original purchase price:
New value = 100,000 + 30,000 = Birr 130,000.
(Or: New value = 100,000 * 1.30 = 130,000).`,
    hint: 'New value = 100,000 + (0.30 * 100,000) = 130,000.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2018-q53',
    subject: 'Aptitude',
    year: '2018 E.C.',
    topic: 'Quantitative Reasoning: Area of Regular Polygon using Apothem and Radius',
    questionText: '53. If the apothem and circumradius of a regular 7-sided polygon (heptagon) are respectively 8 cm and 2√59 cm, what is the area of the polygon in cm²?',
    options: [
      '112√43',
      '112√23',
      '16√33',
      '112√33'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Relate the side length s, circumradius r, and apothem a in a regular polygon:
In any regular polygon, the circumradius r, apothem a, and half-side s/2 form a right-angled triangle:
(s / 2)² + a² = r²
(s / 2) = √(r² - a²).

Step 2: Substitute the given values:
• Apothem a = 8 cm
• Circumradius r = 2√59 cm
(s / 2) = √[(2√59)² - 8²]
(s / 2) = √[(4 * 59) - 64]
(s / 2) = √[236 - 64] = √172 = √(4 * 43) = 2√43 cm.

Step 3: Calculate the side length s and perimeter P:
s = 2 * (2√43) = 4√43 cm.
Perimeter P = 7 * s = 7 * (4√43) = 28√43 cm.

Step 4: Compute the area of the regular 7-sided polygon:
Area = (1/2) * apothem * Perimeter
Area = (1/2) * 8 * 28√43
Area = 4 * 28√43 = 112√43 cm².`,
    hint: 'Find half-side = √(r² - a²) = √(236 - 64) = 2√43 cm. Side s = 4√43 cm. Perimeter = 7 * 4√43 = 28√43 cm. Area = (1/2) * 8 * 28√43 = 112√43 cm².',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
