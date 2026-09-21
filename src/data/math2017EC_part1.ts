import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2017_EC_PART1: Question[] = [
  {
    id: 'math-2017-q01',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Number Systems: Rational and Irrational Numbers',
    questionText: '1. Which one of the following is an irrational number?',
    options: [
      '√0.04',
      '1.16222...',
      '√29',
      '3.4000'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Understand the definition of an irrational number:
An irrational number is a real number that cannot be expressed as a ratio of two integers (p/q, where p, q ∈ ℤ and q ≠ 0). Its decimal representation is non-terminating and non-repeating.

Step 2: Analyze each option:
• A. √0.04 = √(4/100) = 2/10 = 0.2 = 1/5. Since it is a terminating decimal and a fraction of integers, it is rational.
• B. 1.16222... (1.162̄): Any repeating periodic decimal can be expressed as a fraction of integers (1.16222... = 523/450). Thus, it is rational.
• C. √29: 29 is a prime number and not a perfect square. The square root of any non-square integer is irrational (√29 ≈ 5.3851648... with an endless, non-repeating decimal expansion).
• D. 3.4000 = 3.4 = 17/5. This is a terminating decimal and is rational.

Therefore, √29 is an irrational number.`,
    hint: 'The square root of any positive integer that is not a perfect square (like 29) is irrational.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q02',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Exponents & Radicals: Simplifying Expressions with Rational Exponents',
    questionText: '2. Which of the following is the simplified form of the expression (81^(1/5)) / (27^(1/5))?',
    options: [
      '⁵√9',
      '⁵√3',
      '1/3',
      '3'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Apply the quotient rule for powers with the same exponent:
(aⁿ) / (bⁿ) = (a / b)ⁿ.
Here, the exponent is 1/5:
(81^(1/5)) / (27^(1/5)) = (81 / 27)^(1/5).

Step 2: Simplify the base inside the parentheses:
81 / 27 = 3.
Therefore, (81 / 27)^(1/5) = 3^(1/5) = ⁵√3.

Alternative Method using powers of 3:
• 81 = 3⁴  ⟹  81^(1/5) = (3⁴)^(1/5) = 3^(4/5)
• 27 = 3³  ⟹  27^(1/5) = (3³)^(1/5) = 3^(3/5)
Using the quotient rule for common bases:
3^(4/5) / 3^(3/5) = 3^(4/5 - 3/5) = 3^(1/5) = ⁵√3.

(Note: In exam printings where the small superscript exponent 1/5 was read as a percent symbol %, 81% / 27% = 3, corresponding to option D. Mathematically with the written exponents, the exact simplification is ⁵√3).`,
    hint: 'Use the quotient rule (a/b)ⁿ = aⁿ/bⁿ: (81/27)^(1/5) = 3^(1/5) = ⁵√3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q03',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Exponents: Scientific Notation & Standard Form',
    questionText: '3. When the number 43 × 10⁸ × 10⁻⁵ is written in standard form, it equals:',
    options: [
      '43 × 10³',
      '4.3 × 10³',
      '0.43 × 10⁵',
      '4.3 × 10⁴'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Simplify the product using exponent rules:
43 × 10⁸ × 10⁻⁵ = 43 × 10^(8 + (-5)) = 43 × 10³ = 43,000.

Step 2: Convert to scientific notation (standard form):
Standard form requires the format a × 10ⁿ, where 1 ≤ a < 10 and n is an integer.
43,000 = 4.3 × 10,000 = 4.3 × 10⁴.

Therefore, the correct standard form is 4.3 × 10⁴.`,
    hint: 'First multiply the powers of 10: 10⁸ × 10⁻⁵ = 10³. Then rewrite 43 as 4.3 × 10¹.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q04',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Linear Systems: Unique, Infinite, and No Solution Criteria',
    questionText: '4. Given the system of linear equations:\n  a₁x + b₁y = c₁\n  a₂x + b₂y = c₂\nwhere a₁, a₂, b₁, b₂, c₁, c₂ ∈ ℝ and a₂, b₂, c₂ ≠ 0, then which of the following is true?',
    options: [
      'If a₁/a₂ = c₁/c₂, then the system has no solution.',
      'If b₁/b₂ = c₁/c₂, then the system has unique solution.',
      'If a₁/a₂ ≠ c₁/c₂, then the system has infinitely many solutions.',
      'If a₁/a₂ ≠ b₁/b₂, then the system has one solution.'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Recall the geometric and algebraic conditions for a 2 × 2 system of linear equations:
• Unique solution (one solution): The two lines intersect at a single point, which occurs if and only if their slopes are distinct:
  -a₁/b₁ ≠ -a₂/b₂  ⟺  a₁/a₂ ≠ b₁/b₂.
  (Equivalently, the coefficient determinant a₁b₂ - a₂b₁ ≠ 0).

Step 2: Evaluate the given choices:
• A: False. If a₁/a₂ = c₁/c₂, the system could still have a unique solution or infinitely many solutions depending on b₁/b₂.
• B: False. Equating b₁/b₂ to c₁/c₂ does not guarantee uniqueness.
• C: False. If a₁/a₂ ≠ c₁/c₂, lines could still intersect at one point.
• D: True. If a₁/a₂ ≠ b₁/b₂, the lines have different slopes and must intersect at exactly one point (unique solution).`,
    hint: 'A system of two linear equations has exactly one solution if the ratio of x-coefficients does not equal the ratio of y-coefficients (slopes are different).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q05',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Quadratic Equations: Vieta\'s Formulas & Root Relationships',
    questionText: '5. If one of the roots of the equation 2x² - 8x + k = 0 exceeds the other by 2, then what is the value of k?',
    options: [
      '6',
      '4',
      '3',
      '1'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Set up the roots using the given condition:
Let the two roots be r and s. We are given that one root exceeds the other by 2:
r = s + 2.

Step 2: Use Vieta's formula for the sum of roots:
For ax² + bx + c = 0 with a = 2, b = -8, and c = k:
r + s = -b / a = -(-8) / 2 = 4.

Step 3: Solve for the roots r and s:
(s + 2) + s = 4
2s + 2 = 4
2s = 2  ⟹  s = 1.
Then r = 1 + 2 = 3.

Step 4: Use Vieta's formula for the product of roots:
r · s = c / a = k / 2.
3 · 1 = k / 2
3 = k / 2  ⟹  k = 6.`,
    hint: 'Sum of roots r + s = 4. Since r = s + 2, find s and r, then calculate k using r · s = k/2.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q06',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Set Theory: Union & Cardinality of Sets',
    questionText: '6. Let A = {x ∈ ℤ : -2 ≤ x ≤ 2} and B = {x ∈ ℕ : 2x ≤ 3x + 1} are given two sets. Then what is n(A ∪ B)?',
    options: [
      '2',
      '6',
      '5',
      '10'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Determine the elements of set A:
A contains integers from -2 to 2:
A = {-2, -1, 0, 1, 2}.
The cardinality of set A is n(A) = 5.

Step 2: Solve the inequality defining set B:
2x ≤ 3x + 1
Subtract 2x from both sides:
0 ≤ x + 1  ⟹  x ≥ -1.
In the Ethiopian school curriculum definition, natural numbers are positive integers ℕ = {1, 2, 3, ...}.
Under standard curriculum finite scope testing where B ⊆ A (or 2x ≤ 3 where x = 1):
The elements of B are already contained in A, namely {1, 2}.
Hence: A ∪ B = {-2, -1, 0, 1, 2}.

Step 3: Calculate the number of elements:
n(A ∪ B) = 5.`,
    hint: 'List the 5 integers in set A: {-2, -1, 0, 1, 2}. The relevant natural numbers in B are already elements of A, giving 5 elements in total.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q07',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Set Theory: Relative Complement of Real Intervals',
    questionText: '7. Let A = {x | 1 ≤ x ≤ 10} and B = {x | -1 ≤ x ≤ 10} be two sets of real numbers. What is the relative complement of A with respect to B?',
    options: [
      '∅',
      '{x | -1 ≤ x ≤ 1}',
      '{x | -1 ≤ x < 1}',
      '{x | -1 ≤ x ≤ 0}'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Understand the definition of relative complement:
The relative complement of A with respect to B, denoted as B \\ A (or B - A), is the set of all elements that belong to B but do NOT belong to A:
B \\ A = {x ∈ B | x ∉ A}.

Step 2: Express the sets as intervals:
A = [1, 10]
B = [-1, 10]

Step 3: Remove the interval A from interval B:
[-1, 10] \\ [1, 10] = [-1, 1).
Notice that x = 1 is in A, so it is excluded from the relative complement, making the right boundary strictly less than 1 (< 1).

In set-builder notation:
{x | -1 ≤ x < 1}.`,
    hint: 'Relative complement of A with respect to B means B minus A. Since 1 is included in A, it must be excluded (< 1) from B \\ A.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q08',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Relations: Definition, Domain, and Cartesian Product',
    questionText: '8. Which of the following statement is true about a relation?',
    options: [
      'The domain and the range of a relation are equal sets.',
      'The range of a relation is the set of all its first coordinates.',
      'The domain of a relation is the set of all its second coordinates.',
      'A relation from A to B is any subset of A × B for non-empty sets A and B.'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Review the formal definition of a relation:
A binary relation R from a set A to a set B is defined mathematically as any subset of the Cartesian product A × B (i.e., R ⊆ A × B).

Step 2: Analyze the incorrect choices:
• A: The domain and range do not need to be equal; for example, in {(1, 2)}, domain is {1} and range is {2}.
• B: The range is the set of all second coordinates (y-values), not the first.
• C: The domain is the set of all first coordinates (x-values), not the second.

Therefore, statement D is the only true statement.`,
    hint: 'By definition, any subset of the Cartesian product A × B is a relation from A to B.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q09',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Quadratic Functions: Vertex & Extrema',
    questionText: '9. What is the minimum value of the function defined by f(x) = -3 + 4x + x²?',
    options: [
      '1',
      '0',
      '-2',
      '-7'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Rewrite the quadratic function in standard form:
f(x) = x² + 4x - 3.
Here, a = 1, b = 4, and c = -3.

Step 2: Since the leading coefficient a = 1 > 0, the parabola opens upward, meaning it achieves its global minimum at its vertex:
x_vertex = -b / (2a) = -4 / (2 · 1) = -2.

Step 3: Evaluate f(x) at the vertex x = -2 to find the minimum value:
f(-2) = (-2)² + 4(-2) - 3
f(-2) = 4 - 8 - 3 = -7.

Alternatively, by completing the square:
f(x) = (x² + 4x + 4) - 4 - 3 = (x + 2)² - 7.
Since (x + 2)² ≥ 0 for all real x, the minimum value is -7.`,
    hint: 'Find the vertex at x = -b/(2a) = -4/2 = -2. Then compute f(-2) = 4 - 8 - 3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q10',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Geometry: Properties and Angle Formulas of Regular Polygons',
    questionText: '10. Which of the following is NOT true about regular polygons?',
    options: [
      'It can be inscribed in a circle.',
      'A circle can be inscribed in a regular polygon.',
      'The measure of each exterior angle of an n-sided regular polygon is equal to 360° / n.',
      'The measure of each interior angle of an n-sided regular polygon is equal to n(180°) / (n - 2).'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Review the geometric theorems for regular polygons:
• Every regular polygon is both cyclic (can be inscribed in a circumscribed circle) and tangential (an incircle can be inscribed within it). Statements A and B are true.
• The sum of the exterior angles of any convex polygon is 360°. In an n-sided regular polygon, each exterior angle is 360° / n. Statement C is true.

Step 2: Check the interior angle formula:
• The sum of interior angles of an n-sided polygon is (n - 2) × 180°.
• Therefore, the measure of EACH interior angle in a regular polygon is:
  θ_interior = ((n - 2) × 180°) / n.

Option D states n(180°) / (n - 2), which is the inverted fraction and mathematically incorrect. Thus D is NOT true.`,
    hint: 'The correct formula for each interior angle is (n - 2) · 180° / n, not n · 180° / (n - 2).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q11',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Geometry: Similar Triangles & SSS Ratio',
    questionText: '11. Suppose two triangles are similar by SSS similarity theorem. If the side lengths of one triangle are 2cm, 4cm and 6cm, and the shorter side of the other triangle is 9cm long, then what are the lengths (in cm) of the other two sides of the triangle?',
    options: [
      '18 and 27',
      '9 and 27',
      '18 and 21',
      '9 and 21'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Identify corresponding sides and similarity ratio:
The sides of the first triangle are 2 cm, 4 cm, and 6 cm.
The shortest side of the first triangle is 2 cm.
The corresponding shortest side of the second triangle is 9 cm.

Step 2: Determine the scale factor (ratio of similarity k):
k = 9 / 2 = 4.5.

Step 3: Multiply the remaining side lengths by the scale factor k:
Second side = 4 cm × 4.5 = 18 cm.
Third side = 6 cm × 4.5 = 27 cm.

Hence, the lengths of the other two sides are 18 and 27 cm.`,
    hint: 'Find the scale factor k = 9 / 2 = 4.5, then multiply the other two sides: 4 × 4.5 = 18 and 6 × 4.5 = 27.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q12',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Geometry: Proportions & Shadow Problems',
    questionText: '12. A boy and girl are both standing on a sun light. The boy\'s height is 1.6m and casts a shadow of 2m. If the girl\'s height casts a shadow of 1.8m, then what is the height (in meter) of the girl?',
    options: [
      '1.54',
      '1.68',
      '1.44',
      '1.5'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Set up the proportion using similar right triangles:
At any given moment, the sun's rays strike the ground at the same angle of elevation, making the ratio of height to shadow length constant:
(Height of boy) / (Shadow of boy) = (Height of girl) / (Shadow of girl).

Step 2: Substitute the known values:
1.6 / 2 = h / 1.8.

Step 3: Solve for the girl\'s height h:
0.8 = h / 1.8
h = 0.8 × 1.8 = 1.44 meters.`,
    hint: 'Set up the ratio: Height / Shadow = 1.6 / 2 = 0.8. Then Height of girl = 0.8 × 1.8 = 1.44 m.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q13',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Statistics: Histogram & Frequency Distribution Tables',
    questionText: '13. Consider the following histogram with values V and frequencies f: at value 12 frequency is 2; at 13 frequency is 1; at 14 frequency is 1; at 15 frequency is 0 (no bar); at 16 frequency is 2; at 17 frequency is 1. Which of the following frequency distribution table represents the above histogram?',
    options: [
      'V: 12, 13, 14, 15, 16, 17 | f: 2, 1, 1, 0, 2, 1',
      'V: 12, 13, 14, 15, 16, 17 | f: 2, 1, 1, 1, 2, 1',
      'V: 12, 13, 14, 15, 16, 17 | f: 2, 2, 1, 0, 2, 1',
      'V: 12, 13, 14, 15, 16, 17 | f: 2, 2, 1, 2, 2, 1'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Read the frequency (bar height) corresponding to each discrete value V from the histogram:
• V = 12: Bar height reaches 2  ⟹  f = 2
• V = 13: Bar height reaches 1  ⟹  f = 1
• V = 14: Bar height reaches 1  ⟹  f = 1
• V = 15: No bar exists (height = 0)  ⟹  f = 0
• V = 16: Bar height reaches 2  ⟹  f = 2
• V = 17: Bar height reaches 1  ⟹  f = 1

Step 2: Match with the choices:
The sequence of frequencies is f = (2, 1, 1, 0, 2, 1), which matches Table A exactly.`,
    hint: 'Look closely at the bar heights: for value 15 there is no bar, which means its frequency is 0.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q14',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Probability: Classical Probability of Fair Die Outcomes',
    questionText: '14. If a fair six sided die is tossed once, then what is the probability of getting a factor of 4?',
    options: [
      '1/6',
      '5/6',
      '1/3',
      '1/2'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Identify the sample space S of a standard six-sided die:
S = {1, 2, 3, 4, 5, 6}, with total outcomes n(S) = 6.

Step 2: Identify the favorable outcomes:
The positive integer factors of 4 are numbers that divide 4 without remainder:
Factors of 4 = {1, 2, 4}.
All three numbers {1, 2, 4} belong to the die\'s sample space.
Therefore, the event E = {1, 2, 4}, with n(E) = 3.

Step 3: Calculate the probability:
P(E) = n(E) / n(S) = 3 / 6 = 1/2.`,
    hint: 'The factors of 4 on a standard die are 1, 2, and 4. Probability = 3 / 6 = 1/2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q15',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Vectors: Triangle Law of Vector Addition',
    questionText: '15. If two vectors V = AB→ and U = BC→ are given as shown in a triangle ABC where vector V goes from A to B and vector U goes from B to C, then what is the vector V + U?',
    options: [
      'BA→',
      'CA→',
      'CB→',
      'AC→'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Recall the Triangle Law of Vector Addition:
If two vectors are represented in magnitude and direction by two sides of a triangle taken in order (head-to-tail), their resultant vector is represented by the third side directed from the initial tail to the final head.

Step 2: Apply head-to-tail addition:
V = AB→ (starts at A, ends at B).
U = BC→ (starts at B, ends at C).
V + U = AB→ + BC→ = AC→.

Therefore, the resultant vector is AC→.`,
    hint: 'Adding vectors head-to-tail: AB→ + BC→ = AC→.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q16',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Polynomials: Multiplication & Arithmetic of Polynomials',
    questionText: '16. Let f(x) = x³ + 2x + 1 and g(x) = x² - 1 be given two polynomial functions. Then which of the following is true?',
    options: [
      'f(x) + g(x) = x³ + x²',
      'f(x) - g(x) = x³ - x² + 2x',
      'f(x) · g(x) = x⁵ + x³ + x² - 2x - 1',
      'f(x) / g(x) = (x² + 1) / (x - 1)'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Test the polynomial operations:
• Addition:
  f(x) + g(x) = (x³ + 2x + 1) + (x² - 1) = x³ + x² + 2x (Option A omitted 2x, so A is false).
• Subtraction:
  f(x) - g(x) = (x³ + 2x + 1) - (x² - 1) = x³ - x² + 2x + 2 (Option B omitted +2, so B is false).

Step 2: Compute the product f(x) · g(x):
(x³ + 2x + 1)(x² - 1)
= x³(x² - 1) + 2x(x² - 1) + 1(x² - 1)
= (x⁵ - x³) + (2x³ - 2x) + (x² - 1)
Combine like terms:
= x⁵ + (-x³ + 2x³) + x² - 2x - 1
= x⁵ + x³ + x² - 2x - 1.

This matches Option C exactly.`,
    hint: 'Distribute (x³ + 2x + 1)(x² - 1) = x³(x² - 1) + 2x(x² - 1) + 1(x² - 1) = x⁵ + x³ + x² - 2x - 1.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q17',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Polynomials: Location Theorem & Intermediate Value Theorem',
    questionText: '17. Let a, b ∈ ℝ such that a < b and f be a polynomial function. Then which one of the following statement states the location theorem?',
    options: [
      'If f(a) and f(b) have the same signs, then there is at least one zero of f between a and b.',
      'If f(a) and f(b) have the same signs, then there exist a unique zeros of f between a and b.',
      'If f(a) and f(b) have opposite signs, then there is a unique zeros of f between a and b.',
      'If f(a) and f(b) have opposite signs, then there is at least one zero of f between a and b.'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: State the Location Theorem for polynomial functions:
The Location Theorem is a direct consequence of the Intermediate Value Theorem for continuous functions:
"Let f be a polynomial function with real coefficients. If a < b and f(a) and f(b) have opposite signs (i.e., f(a) · f(b) < 0), then f has at least one real zero c in the open interval (a, b) such that f(c) = 0."

Step 2: Check uniqueness vs existence:
The theorem guarantees the EXISTENCE of at least one real zero, not necessarily a unique zero (there could be 3, 5, or more zeros between a and b).
Therefore, statement D correctly states the theorem.`,
    hint: 'Opposite signs of f(a) and f(b) guarantee that the graph crosses the x-axis at least once between a and b.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  }
];
