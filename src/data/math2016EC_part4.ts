import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2016_EC_PART4: Question[] = [
  {
    id: 'math-2016-q46',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Quadratic Functions: Quadratic Inequalities from Graph',
    questionText: '46. A downward-opening parabola graph of f(x) = ax² + bx + c has x-intercepts at x = 2 and x = 6. Which one of the following is the solution set of the inequality f(x) ≤ 0?',
    options: [
      '{x : x ≥ 2 and x ≤ 6}',
      '{x : x ≤ -4 or x ≥ 0}',
      '{x : x ≤ 2 or x ≥ 6}',
      '{x : x ≤ 0 and x ≥ -4}'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Analyze the graph of the parabola:
• The parabola opens downward (a < 0) and has x-intercepts at x = 2 and x = 6.
• Between the roots (2 < x < 6), the graph is above the x-axis, so f(x) > 0.
• At the roots (x = 2 and x = 6), f(x) = 0.
• Outside the roots (x < 2 or x > 6), the graph is below the x-axis, so f(x) < 0.

Step 2: Determine where f(x) ≤ 0:
f(x) ≤ 0 holds when x is less than or equal to 2, or greater than or equal to 6.
Solution set: {x : x ≤ 2 or x ≥ 6}.`,
    hint: 'A downward-opening parabola is on or below the x-axis outside its roots: x ≤ 2 or x ≥ 6.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q47',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Geometry: Heron\'s Formula for Area of Triangle',
    questionText: '47. If the lengths of the sides of a triangle are 8 cm, 6 cm, and 4 cm, then which one of the following is the area of the triangle?',
    options: [
      '12 cm²',
      '1.5√15 cm²',
      '24 cm²',
      '3√15 cm²'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Calculate the semi-perimeter (s):
s = (a + b + c) / 2
s = (8 + 6 + 4) / 2 = 18 / 2 = 9 cm

Step 2: Apply Heron's formula:
Area = √(s * (s - a) * (s - b) * (s - c))

Step 3: Substitute the side lengths:
Area = √(9 * (9 - 8) * (9 - 6) * (9 - 4))
Area = √(9 * 1 * 3 * 5)
Area = √(9 * 15)
Area = 3√15 cm²`,
    hint: 's = 9. Area = √(9 * 1 * 3 * 5) = √(9 * 15) = 3√15 cm².',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q48',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Exponents and Radicals: Simplifying Rational Exponents',
    questionText: '48. Which one of the following is equal to the expression ((125)^(2/3) * (81)^(-3/4)) / ((27)^(-4/3) * (625)^(3/4))?',
    options: [
      '5/3',
      '15',
      '3/5',
      '1/15'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Express each base in terms of prime factors (3 and 5):
• 125^(2/3) = (5³)^(2/3) = 5² = 25
• 81^(-3/4) = (3⁴)^(-3/4) = 3⁻³ = 1/27
• 27^(-4/3) = (3³)^(-4/3) = 3⁻⁴ = 1/81
• 625^(3/4) = (5⁴)^(3/4) = 5³ = 125

Step 2: Simplify the numerator and denominator:
• Numerator = 5² * 3⁻³ = 25 / 27
• Denominator = 3⁻⁴ * 5³ = 125 / 81

Step 3: Divide numerator by denominator:
Value = (25 / 27) / (125 / 81)
Value = (25 / 27) * (81 / 125)
Value = (25 / 125) * (81 / 27)
Value = (1 / 5) * 3 = 3/5`,
    hint: 'Convert to powers of 3 and 5: (5² * 3⁻³) / (3⁻⁴ * 5³) = 5^(2-3) * 3^(-3-(-4)) = 5⁻¹ * 3¹ = 3/5.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q49',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Number Theory: Least Common Multiple (LCM)',
    questionText: '49. Which one of the following numbers is a common multiple of 324 and 1152?',
    options: [
      '7776',
      '20736',
      '5184',
      '13824'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Find the prime factorizations:
• 324 = 4 * 81 = 2² * 3⁴
• 1152 = 2 * 576 = 2 * 24² = 2 * (2³ * 3)² = 2 * 2⁶ * 3² = 2⁷ * 3²

Step 2: Calculate the Least Common Multiple (LCM):
LCM(324, 1152) = 2^(max(2, 7)) * 3^(max(4, 2))
LCM = 2⁷ * 3⁴ = 128 * 81 = 10,368

Step 3: Test multiples of 10,368:
• 10,368 * 1 = 10,368
• 10,368 * 2 = 20,736

Check division:
• 20,736 / 324 = 64 (Exact integer)
• 20,736 / 1152 = 18 (Exact integer)

Therefore, 20736 is a common multiple of 324 and 1152.`,
    hint: 'LCM(324, 1152) = 10368. The second multiple is 10368 * 2 = 20736.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q50',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Geometry: Inscribed and Central Angles of a Circle',
    questionText: '50. In a circle with center O, chords AB, AC, and BC form triangle ABC. If m(∠ABC) = 60° and m(∠ACB) = 40°, what is m(∠BOC)?',
    options: [
      '80°',
      '160°',
      '100°',
      '120°'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Find the third interior angle of triangle ABC:
m(∠BAC) = 180° - (m(∠ABC) + m(∠ACB))
m(∠BAC) = 180° - (60° + 40°) = 180° - 100° = 80°

Step 2: Relate the inscribed angle to the central angle:
By the Inscribed Angle Theorem, the central angle ∠BOC subtended by arc BC is twice the inscribed angle ∠BAC subtended by the same arc:
m(∠BOC) = 2 * m(∠BAC)

Step 3: Calculate m(∠BOC):
m(∠BOC) = 2 * 80° = 160°`,
    hint: 'm(∠BAC) = 180° - (60° + 40°) = 80°. Central angle m(∠BOC) = 2 * 80° = 160°.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q51',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Exponents and Logarithms: Exponential Equation',
    questionText: '51. Which one of the following is the solution of the equation (243)^(2x - 3) = ((81)^(-3x + 2)) / 3 in the set of real numbers?',
    options: [
      '1',
      '-2',
      '-1',
      '2'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Rewrite both sides using base 3:
• 243 = 3⁵  =>  (243)^(2x - 3) = (3⁵)^(2x - 3) = 3^(10x - 15)
• 81 = 3⁴  =>  (81)^(-3x + 2) = (3⁴)^(-3x + 2) = 3^(-12x + 8)

Step 2: Simplify the right-hand side:
((81)^(-3x + 2)) / 3 = 3^(-12x + 8) / 3¹ = 3^(-12x + 7)

Step 3: Equate the exponents of equal bases:
10x - 15 = -12x + 7
10x + 12x = 7 + 15
22x = 22
x = 1

The solution is x = 1.`,
    hint: '3^(10x - 15) = 3^(-12x + 7) => 10x - 15 = -12x + 7 => 22x = 22 => x = 1.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q52',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Geometry: Total Surface Area of a Pyramid',
    questionText: '52. What is the total surface area of a regular square pyramid with slant height 8 cm and base area 25 cm²?',
    options: [
      '90 cm²',
      '65 cm²',
      '105 cm²',
      '80 cm²'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Find the side length of the square base:
Base Area B = s² = 25 cm²  =>  s = √25 = 5 cm

Step 2: Calculate the perimeter of the base:
Perimeter P = 4 * s = 4 * 5 = 20 cm

Step 3: Calculate the lateral surface area:
Lateral Area = (1/2) * P * l
where l = 8 cm is the slant height.
Lateral Area = (1/2) * 20 * 8 = 80 cm²

Step 4: Compute the total surface area:
Total Surface Area = Base Area + Lateral Area
Total Surface Area = 25 + 80 = 105 cm²`,
    hint: 'Base side s = 5 cm. Lateral area = 4 * (1/2 * 5 * 8) = 80 cm². Total area = 25 + 80 = 105 cm².',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q53',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Statistics: Median of Grouped Frequency Distribution',
    questionText: '53. The table presents the scores of Grade 11 students in a Mathematics examination: [31-40: 10, 41-50: 9, 51-60: 15, 61-70: 12, 71-80: 10, 81-90: 4, 91-100: 2]. What is the median of the data?',
    options: [
      '55.5',
      '60.5',
      '50.5',
      '58.5'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Find the total frequency (N) and cumulative frequencies:
• 31-40: f = 10, cf = 10
• 41-50: f = 9, cf = 19
• 51-60: f = 15, cf = 34
• 61-70: f = 12, cf = 46
• 71-80: f = 10, cf = 56
• 81-90: f = 4, cf = 60
• 91-100: f = 2, cf = 62

Total frequency N = 62.
Median rank = N / 2 = 62 / 2 = 31.

Step 2: Identify the median class:
The 31st value falls into the class 51-60 (where cf reaches 34).
• Lower class boundary (L) = 50.5
• Cumulative frequency preceding median class (cf_b) = 19
• Frequency of median class (f_m) = 15
• Class width (w) = 60.5 - 50.5 = 10

Step 3: Apply the grouped median formula:
Median = L + ((N/2 - cf_b) / f_m) * w
Median = 50.5 + ((31 - 19) / 15) * 10
Median = 50.5 + (12 / 15) * 10
Median = 50.5 + (4 / 5) * 10
Median = 50.5 + 8 = 58.5`,
    hint: 'Median = 50.5 + ((31 - 19) / 15) * 10 = 50.5 + 8 = 58.5.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q54',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Calculus: Area Bounded by a Curve and the X-axis',
    questionText: '54. What is the area of the region bounded by the graph of f(x) = x³ and the x-axis on the interval [-4, 2]?',
    options: [
      '68 Square units',
      '136 Square units',
      '60 Square units',
      '120 Square units'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Set up the total geometric area integral:
Total Area = ∫_{-4}² |x³| dx

Step 2: Split the integral at the root x = 0:
• On [-4, 0], x³ ≤ 0, so |x³| = -x³:
  Area₁ = ∫_{-4}⁰ (-x³) dx = [ -x⁴ / 4 ]_{-4}⁰
  Area₁ = 0 - (-(-4)⁴ / 4) = 256 / 4 = 64

• On [0, 2], x³ ≥ 0, so |x³| = x³:
  Area₂ = ∫₀² x³ dx = [ x⁴ / 4 ]₀²
  Area₂ = 2⁴ / 4 - 0 = 16 / 4 = 4

Step 3: Sum the two areas:
Total Area = Area₁ + Area₂ = 64 + 4 = 68 square units.`,
    hint: 'Area = ∫_{-4}⁰ (-x³) dx + ∫₀² (x³) dx = 64 + 4 = 68 square units.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q55',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Functions: Operations on Functions',
    questionText: '55. Let f(x) = (x + 1)/(x - 1) and g(x) = √(x + 2) be two functions. Which one of the following is true about the combination values of f and g at x = 2?',
    options: [
      '(f - g)(2) = -1',
      '(f / g)(2) = 2/3',
      '(f + g)(2) = 3',
      '(f · g)(2) = 6'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Evaluate f(2) and g(2):
• f(2) = (2 + 1) / (2 - 1) = 3 / 1 = 3
• g(2) = √(2 + 2) = √4 = 2

Step 2: Check each option:
• (f - g)(2) = f(2) - g(2) = 3 - 2 = 1 ≠ -1
• (f / g)(2) = f(2) / g(2) = 3 / 2 ≠ 2/3
• (f + g)(2) = f(2) + g(2) = 3 + 2 = 5 ≠ 3
• (f · g)(2) = f(2) · g(2) = 3 · 2 = 6

Therefore, (f · g)(2) = 6 is true.`,
    hint: 'f(2) = 3 and g(2) = 2. Then (f · g)(2) = 3 * 2 = 6.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q56',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Functions: Definition of Exponential Function',
    questionText: '56. Which one of the following defines an exponential function?',
    options: [
      'f: (0, ∞) -> R defined by f(x) = x^b, where b > 0 and b ≠ 1.',
      'f: R -> (0, ∞) defined by f(x) = x^b, where b > 0 and b ≠ 1.',
      'f: (0, ∞) -> R defined by f(x) = b^x, where b > 0 and b ≠ 1.',
      'f: R -> (0, ∞) defined by f(x) = b^x, where b > 0 and b ≠ 1.'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: State the formal definition of an exponential function:
An exponential function with base b (where b > 0 and b ≠ 1) is defined by the formula f(x) = b^x.

Step 2: Identify its domain and range:
• Domain: All real numbers, R = (-∞, ∞).
• Range: All strictly positive real numbers, (0, ∞).

Therefore, f: R -> (0, ∞) defined by f(x) = b^x, where b > 0 and b ≠ 1, is the correct definition.`,
    hint: 'An exponential function has the variable in the exponent: f(x) = b^x with domain R and range (0, ∞).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q57',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Geometry: Angles formed by Secants in a Circle',
    questionText: '57. In a circle with center O, secants AB and AC intersect the circle at D and E respectively. If m(∠ACD) = 30° and m(∠BEC) = 50°, then which one of the following is equal to m(∠BAC)?',
    options: [
      '30°',
      '80°',
      '20°',
      '70°'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Identify subtended arcs and inscribed angles:
Both inscribed angle ∠ABE (or ∠ABD) and inscribed angle ∠ACD (or ∠ECD) subtend the exact same arc ED on the circle.
Therefore, by the Inscribed Angle Theorem:
m(∠ABE) = m(∠ACD) = 30°

Step 2: Use the exterior angle theorem on triangle ABE:
In triangle ABE, angle ∠BEC is an exterior angle at vertex E to triangle ABE:
m(∠BEC) = m(∠BAC) + m(∠ABE)

Step 3: Solve for m(∠BAC):
50° = m(∠BAC) + 30°
m(∠BAC) = 50° - 30° = 20°`,
    hint: 'Inscribed angle ∠ABE = ∠ACD = 30°. Then in triangle ABE, exterior angle 50° = m(∠BAC) + 30° => m(∠BAC) = 20°.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q58',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Mathematical Logic: Tautologies',
    questionText: '58. Let p and q be propositions. Which one of the following propositions is a tautology?',
    options: [
      '(p ∨ q) ⇒ (p ∧ q)',
      '(¬p ⇒ q) ⇒ (p ∧ q)',
      '(p ∧ q) ⇒ (p ∨ q)',
      '(p ⇒ q) ⇔ (p ∧ q)'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Define a tautology:
A proposition is a tautology if it evaluates to True under all possible truth value assignments of its component variables.

Step 2: Test Option C: (p ∧ q) ⇒ (p ∨ q):
• Case 1: When p ∧ q is False, the implication False ⇒ (anything) is automatically True.
• Case 2: When p ∧ q is True, both p and q must be True. Consequently, p ∨ q is True, giving True ⇒ True = True.

In all possible cases, (p ∧ q) ⇒ (p ∨ q) is True. Thus, it is a tautology.`,
    hint: 'If both p and q are true, then p ∨ q is true; if p ∧ q is false, an implication with a false premise is always true.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q59',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Calculus: Geometric Meaning of the Derivative',
    questionText: '59. Let f be a differentiable function at a number "a" in its domain. In the expression (f(a + h) - f(a))/h for h ≠ 0, as h approaches 0 from both sides, the limit f\'(a) represents:',
    options: [
      'The gradient of the tangent line to the graph of f at the point (a, f(a)).',
      'The gradient of the vertical line to the graph of f at the point (a, f(a)).',
      'The gradient of the secant line to the graph of f at the point (a, f(a)).',
      'The gradient of the normal line to the graph of f at the point (a, f(a)).'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Geometric interpretation of difference quotient:
The expression (f(a + h) - f(a)) / h represents the slope (gradient) of the secant line passing through (a, f(a)) and (a + h, f(a + h)).

Step 2: Geometric interpretation of the derivative:
As h approaches 0, the secant line approaches the tangent line to the curve at the point (a, f(a)).
Therefore, the limit f'(a) = lim_{h -> 0} (f(a + h) - f(a))/h is the gradient (slope) of the tangent line to the graph of f at (a, f(a)).`,
    hint: 'The derivative f\'(a) is defined geometrically as the slope (gradient) of the tangent line at (a, f(a)).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q60',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Applied Mathematics: Proportions and Work-Rate Problems',
    questionText: '60. If 180 individuals can complete a job in 15 days by working 10 hours a day, how many individuals are needed to complete the job in 10 days if they work 12 hours a day?',
    options: [
      '220',
      '144',
      '225',
      '200'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Calculate the total workload in person-hours:
Total Work = (Number of individuals) * (Number of days) * (Hours per day)
Total Work = 180 * 15 * 10 = 27,000 person-hours

Step 2: Set up the equation for the new schedule:
Let N be the required number of individuals:
N * (10 days) * (12 hours/day) = 27,000 person-hours
N * 120 = 27,000

Step 3: Solve for N:
N = 27,000 / 120
N = 2,700 / 12 = 225 individuals`,
    hint: 'Total work = 180 * 15 * 10 = 27,000 person-hours. N = 27,000 / (10 * 12) = 225.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
