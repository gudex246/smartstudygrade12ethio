import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2016_EC_PART1: Question[] = [
  {
    id: 'math-2016-q01',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Statistics: Measures of Dispersion',
    questionText: '1. Which one of the following is true about the Range and Interquartile Range of a given data?',
    options: [
      'Both are measures of the variability of each item in the data.',
      'Both are measures of variation of the data.',
      'Both are affected by extreme values in the data.',
      'Both are considering only the middle 50% of the data.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Understand the definition of Range and Interquartile Range (IQR):
• Range = Maximum value - Minimum value. It measures the total spread across the entire dataset.
• Interquartile Range (IQR) = Q3 - Q1. It measures the spread of the middle 50% of the data.

Step 2: Evaluate the properties:
• Both Range and IQR are statistical measures of dispersion (variation/spread).
• Range is sensitive to extreme outliers, whereas IQR is resistant to outliers.
• Only IQR focuses solely on the middle 50%.

Therefore, the correct statement is that both are measures of variation of the data.`,
    hint: 'Range and Interquartile Range are both fundamental measures of dispersion/variation in statistics.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q02',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Algebra: Binomial Theorem',
    questionText: '2. Which one of the following numbers is the coefficient of x⁶y⁴ in the expansion of (x + y)¹⁰?',
    options: [
      '240',
      '1260',
      '210',
      '4860'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Use the Binomial Theorem formula for the general term:
The general term in the expansion of (x + y)ⁿ is:
T(k+1) = C(n, k) * x^(n - k) * y^k

Step 2: Match the powers to find k:
For x⁶y⁴ in (x + y)¹⁰:
n = 10, power of y is k = 4, power of x is 10 - 4 = 6.

Step 3: Calculate the binomial coefficient C(10, 4):
C(10, 4) = 10! / (4! * (10 - 4)!)
C(10, 4) = (10 * 9 * 8 * 7) / (4 * 3 * 2 * 1)
C(10, 4) = 5040 / 24 = 210

Thus, the coefficient is 210.`,
    hint: 'Use the combination formula C(10, 4) = 10! / (4! * 6!).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q03',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Geometry: Volume of a Frustum of a Pyramid',
    questionText: '3. The altitude of a frustum of a regular square pyramid is 9 cm. What is the volume of the frustum if the side length of the upper base is 6 cm and the side length of the lower base is 10 cm?',
    options: [
      '196 cm³',
      '324 cm³',
      '588 cm³',
      '108 cm³'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: State the volume formula for a frustum of a pyramid:
V = (1/3) * h * (A₁ + A₂ + √(A₁ * A₂))

Step 2: Calculate the base areas:
• Upper base area A₁ = 6² = 36 cm²
• Lower base area A₂ = 10² = 100 cm²
• Geometric mean √(A₁ * A₂) = √(36 * 100) = 6 * 10 = 60 cm²

Step 3: Substitute the height h = 9 cm into the volume formula:
V = (1/3) * 9 * (36 + 100 + 60)
V = 3 * 196
V = 588 cm³`,
    hint: 'Apply V = (1/3) * h * (A₁ + A₂ + √(A₁ * A₂)) with A₁ = 36 and A₂ = 100.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q04',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Algebra: Absolute Value Inequalities',
    questionText: '4. Which one of the following intervals is the solution set of the inequality |3 - (1/2)x| < 5?',
    options: [
      '(-2, 8)',
      '(-4, 16)',
      '(-8, 2)',
      '(-16, 4)'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Rewrite the absolute value inequality:
|3 - (1/2)x| < 5 is equivalent to:
-5 < 3 - (1/2)x < 5

Step 2: Subtract 3 from all parts:
-5 - 3 < -(1/2)x < 5 - 3
-8 < -(1/2)x < 2

Step 3: Multiply by -2 and reverse the inequality signs:
(-8) * (-2) > x > 2 * (-2)
16 > x > -4
-4 < x < 16

In interval notation, the solution set is (-4, 16).`,
    hint: '|u| < 5 means -5 < u < 5. Solve for x by isolating the variable.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q05',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Geometry: Area of a Sector of a Circle',
    questionText: '5. A sector of a circle of diameter 8 cm is formed by a central angle of 45°. What is the area of the sector?',
    options: [
      '(2π + 8) cm²',
      '2π cm²',
      'π cm²',
      '8π cm²'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Find the radius from the diameter:
Radius r = diameter / 2 = 8 / 2 = 4 cm.

Step 2: Use the formula for the area of a sector:
Area = (θ / 360°) * π * r²

Step 3: Substitute θ = 45° and r = 4 cm:
Area = (45° / 360°) * π * 4²
Area = (1/8) * π * 16
Area = 2π cm²`,
    hint: 'Radius is 4 cm. Area of sector = (45/360) * π * 4² = (1/8) * 16π = 2π.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q06',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Algebra: Radicals and Rationalization',
    questionText: '6. If a = 2 - 3√5 and b = 3 + 2√5, then which one of the following is true?',
    options: [
      'a - b = -1 - √5',
      '11(a/b) = -36 + 13√5',
      'a + b = 5',
      'ab = 36'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Find the quotient a / b:
a / b = (2 - 3√5) / (3 + 2√5)

Step 2: Rationalize the denominator by multiplying numerator and denominator by the conjugate (3 - 2√5):
a / b = [(2 - 3√5)(3 - 2√5)] / [(3 + 2√5)(3 - 2√5)]

Step 3: Expand the numerator:
(2 - 3√5)(3 - 2√5) = 6 - 4√5 - 9√5 + 6(5)
= 6 - 13√5 + 30 = 36 - 13√5

Step 4: Expand the denominator:
3² - (2√5)² = 9 - 4(5) = 9 - 20 = -11

Step 5: Simplify:
a / b = (36 - 13√5) / (-11) = (-36 + 13√5) / 11

Multiply both sides by 11:
11(a / b) = -36 + 13√5`,
    hint: 'Rationalize the denominator of a/b by multiplying by the conjugate (3 - 2√5).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q07',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Relations and Functions: Domain and Range of Shaded Region',
    questionText: '7. The shaded region bounded by the intersecting lines x - y + 1 = 0 and x + y = 0 extends indefinitely to the left (x ≤ -1/2). Which one of the following is the domain and range of R respectively?',
    options: [
      '(-∞, -1/2) and R',
      'R and (-∞, -1/2)',
      'R and (-∞, -1/2]',
      '(-∞, -1/2] and R'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Find the point of intersection of the boundary lines:
Line 1: y = x + 1
Line 2: y = -x

Setting them equal:
x + 1 = -x
2x = -1  =>  x = -1/2
y = -(-1/2) = 1/2
The lines intersect at (-1/2, 1/2).

Step 2: Determine the domain:
The shaded region includes the intersection point and all points to its left along the horizontal axis:
Domain = (-∞, -1/2]

Step 3: Determine the range:
As x goes to -∞, the upper line (y = -x) increases to +∞ and the lower line (y = x + 1) decreases to -∞. Therefore, all real values of y are covered:
Range = R (all real numbers)

Thus, Domain = (-∞, -1/2] and Range = R.`,
    hint: 'The region extends to the left from x = -1/2, covering all real values of y.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q08',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Polynomials: Division Algorithm Theorem',
    questionText: '8. Which one of the following statements is the polynomial division theorem?',
    options: [
      'If f is a non-constant polynomial and c is a real number, then x - c is a factor of f(x) if and only if f(c) = 0.',
      'If f(x) and d(x) are polynomials such that d(x) ≠ 0 and degree(d(x)) ≤ degree(f(x)), then there exist unique polynomials q(x) and r(x) such that f(x) = d(x)q(x) + r(x), where r(x) = 0 or degree of r(x) < degree of d(x).',
      'If f is a non-constant polynomial and c is a real number, then the remainder when f(x) divided by x - c is f(c).',
      'Let f is a non-constant polynomial with integer coefficients. If the rational number c/d in its lowest terms is a root of f, then c is a factor of the constant term of f and d is a factor of the leading coefficient.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Identify the standard polynomial theorems:
• Option A describes the Factor Theorem.
• Option B describes the Polynomial Division Theorem (Division Algorithm for Polynomials): f(x) = d(x)q(x) + r(x) where r(x) = 0 or degree(r(x)) < degree(d(x)).
• Option C describes the Remainder Theorem.
• Option D describes the Rational Root Theorem.

Therefore, Option B is the correct statement of the polynomial division theorem.`,
    hint: 'The division algorithm expresses f(x) = d(x)q(x) + r(x) with remainder degree strictly less than divisor degree.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q09',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Trigonometry: Cotangent of Large Angles',
    questionText: '9. Which one of the following is equal to cot(1755°)?',
    options: [
      '-1',
      '-√3',
      '1',
      '√3'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Use the periodicity of cotangent:
The cotangent function has a period of 180° (or 360° for full revolutions).
cot(θ) = cot(θ - k * 180°) for any integer k.

Step 2: Reduce 1755° by full revolutions (360°):
1755° = 4 * 360° + 315° = 1440° + 315°
So cot(1755°) = cot(315°).

Step 3: Evaluate cot(315°):
315° is in Quadrant IV (reference angle = 360° - 315° = 45°).
cot(315°) = -cot(45°) = -1.`,
    hint: '1755° = 4(360°) + 315°. cot(315°) = cot(315° - 180°) = cot(135°) = -1.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q10',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Mathematical Logic: Truth Values of Propositions',
    questionText: '10. Let p and q be propositions with truth values true (T) and false (F) respectively. Which one of the following statements is NOT correct?',
    options: [
      'p ∨ q is true.',
      'p ⇔ q is true.',
      'p ∧ q is false.',
      'p ⇒ q is false.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Given truth values:
p = True (T), q = False (F).

Step 2: Evaluate each logical compound statement:
• p ∨ q = T ∨ F = True (Correct)
• p ⇔ q = T ⇔ F = False (The option claims it is true, which is NOT correct)
• p ∧ q = T ∧ F = False (Correct)
• p ⇒ q = T ⇒ F = False (Correct)

Therefore, the statement "p ⇔ q is true" is the incorrect statement.`,
    hint: 'A biconditional (p ⇔ q) is true only when both propositions share the same truth value.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q11',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Sequences and Series: Sigma Notation',
    questionText: '11. Which one of the following is equal to the sum ∑_{n=1}⁵ 2n²?',
    options: [
      '2 + 8 + 18 + 32 + 50',
      '2 + 4 + 8 + 16 + 32',
      '2 + 4 + 6 + 8 + 10',
      '2 + 8 + 16 + 32 + 64'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Expand each term of 2n² for n = 1 to 5:
• For n = 1: 2(1)² = 2(1) = 2
• For n = 2: 2(2)² = 2(4) = 8
• For n = 3: 2(3)² = 2(9) = 18
• For n = 4: 2(4)² = 2(16) = 32
• For n = 5: 2(5)² = 2(25) = 50

Step 2: Write out the sum:
∑_{n=1}⁵ 2n² = 2 + 8 + 18 + 32 + 50`,
    hint: 'Substitute n = 1, 2, 3, 4, 5 into the formula 2n².',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q12',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Linear Programming: Maximum Profit Optimization',
    questionText: '12. A company produces shirts of black and white colors from polyester and cotton. The company has 6000 units of polyester and 3000 units of cotton in its store. A black shirt requires 5 units of polyester and 4 units of cotton whereas a white shirt requires 3 units of polyester and 3 units of cotton. If the factory gets a profit of Birr 120 from each black shirt and Birr 200 from each white shirt, what is the maximum profit of the company?',
    options: [
      'Birr 200,000',
      'Birr 120,000',
      'Birr 344,000',
      'Birr 144,000'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Set up the decision variables:
Let x = number of black shirts produced.
Let y = number of white shirts produced.

Step 2: Formulate constraints and objective function:
• Polyester constraint: 5x + 3y ≤ 6000
• Cotton constraint: 4x + 3y ≤ 3000
• Non-negativity: x ≥ 0, y ≥ 0
• Objective function (Profit): P = 120x + 200y

Step 3: Find the corner points of the feasible region:
• (0, 0): P = 0
• Setting x = 0 in cotton constraint: 3y ≤ 3000 => y = 1000.
  Check polyester: 5(0) + 3(1000) = 3000 ≤ 6000 (feasible).
  At (0, 1000): P = 120(0) + 200(1000) = 200,000 Birr.
• Setting y = 0 in cotton constraint: 4x ≤ 3000 => x = 750.
  Check polyester: 5(750) = 3750 ≤ 6000 (feasible).
  At (750, 0): P = 120(750) + 200(0) = 90,000 Birr.

Step 4: Compare profits:
The maximum profit is Birr 200,000 at (x = 0, y = 1000).`,
    hint: 'Find the feasible corner points. At (0, 1000), profit = 200 * 1000 = 200,000 Birr.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q13',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Linear Inequalities: System of Linear Inequalities from Graph',
    questionText: '13. Which one of the following system of linear inequalities is represented by the shaded region bounded by the lines passing through (0, 4), (2, 0) and (2, 0), (0, -6)?',
    options: [
      '{ 2x + y ≤ 4, 3x - y ≥ 6 }',
      '{ 2x + y ≥ 4, 3x - y ≤ 6 }',
      '{ 2x + y ≥ 4, 3x - y ≥ 6 }',
      '{ 2x + y ≤ 4, 3x - y ≤ 6 }'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Find the equation of the line through (0, 4) and (2, 0):
Slope m₁ = (0 - 4) / (2 - 0) = -2
Equation: y - 0 = -2(x - 2) => 2x + y = 4.

Step 2: Find the equation of the line through (2, 0) and (0, -6):
Slope m₂ = (0 - (-6)) / (2 - 0) = 3
Equation: y - 0 = 3(x - 2) => 3x - y = 6.

Step 3: Test a point inside the shaded region (e.g., (-2, 0)):
• For 2x + y: 2(-2) + 0 = -4 ≤ 4 (Satisfies 2x + y ≤ 4)
• For 3x - y: 3(-2) - 0 = -6 ≤ 6 (Satisfies 3x - y ≤ 6)

Therefore, the system is 2x + y ≤ 4 and 3x - y ≤ 6.`,
    hint: 'Find the boundary line equations and test a sample point in the shaded region.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q14',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Sequences and Series: Geometric Sequence',
    questionText: '14. If the fifth and the tenth terms of a geometric sequence are 640 and 20 respectively, then which of the following numbers are the first term and the common ratio of the given geometric sequence respectively?',
    options: [
      '10240 and 1/2',
      '1024 and 1/2',
      '10240 and 2',
      '1024 and 2'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Express the terms in terms of the first term a₁ and common ratio r:
• a₅ = a₁ * r⁴ = 640
• a₁₀ = a₁ * r⁹ = 20

Step 2: Divide a₁₀ by a₅ to eliminate a₁:
a₁₀ / a₅ = (a₁ * r⁹) / (a₁ * r⁴) = r⁵
r⁵ = 20 / 640 = 1 / 32
r = (1/32)^(1/5) = 1/2

Step 3: Solve for the first term a₁:
a₁ * (1/2)⁴ = 640
a₁ * (1/16) = 640
a₁ = 640 * 16 = 10,240

Thus, the first term is 10240 and the common ratio is 1/2.`,
    hint: 'r⁵ = 20 / 640 = 1/32 => r = 1/2. Then a₁ = 640 / (1/2)⁴ = 10240.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q15',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Conic Sections: Definition of Ellipse',
    questionText: '15. Which one of the following conic section is defined by "the set of points in a plane such that the sum of the distances from two given points is constant"?',
    options: [
      'Circle',
      'Hyperbola',
      'Parabola',
      'Ellipse'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Review the geometric definitions of conic sections:
• Ellipse: The locus of points where the sum of the distances to two fixed points (foci) is constant: |PF₁| + |PF₂| = 2a.
• Hyperbola: The locus of points where the absolute difference of the distances to two fixed points is constant: ||PF₁| - |PF₂|| = 2a.
• Parabola: The locus of points equidistant from a single focus point and a directrix line.
• Circle: The locus of points equidistant from a single center point.

Therefore, the conic section defined by the constant sum of distances is an Ellipse.`,
    hint: 'Constant sum of distances defines an ellipse; constant difference defines a hyperbola.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
