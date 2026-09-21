import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2015_EC_PART2: Question[] = [
  {
    id: 'math-2015-16',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Functions & Domain',
    questionText: 'The domain of the function f(x) = 2x^(2/3) is',
    options: [
      'ℝ \\ {0}',
      '[0, ∞)',
      'ℝ',
      '(0, 2)'
    ],
    correctOptionIndex: 2,
    explanation: `The function f(x) = 2x^(2/3) can be written as:
f(x) = 2(∛x)² = 2 · ∛(x²)

Because the cube root index is an odd integer (3), the radical is mathematically defined for every real number x (positive, zero, and negative):
• (∛(-8))² = (-2)² = 4
• (∛0)² = 0
• (∛8)² = 2² = 4

Therefore, the domain is the entire set of real numbers ℝ.`,
    hint: 'A cube root function (odd index) is defined for all real numbers without restriction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-17',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Coordinate Geometry (Slope of a Line)',
    questionText: 'The slope of the line that makes an angle of 135° with the positive x-axis is equal to',
    options: [
      '2',
      '-1',
      '1',
      '3'
    ],
    correctOptionIndex: 1,
    explanation: `The slope m of a line with angle of inclination θ with the positive x-axis is given by:
m = tan(θ)

For θ = 135°:
m = tan(135°) = tan(180° - 45°) = -tan(45°) = -1.`,
    hint: 'Slope m is given by tan(135°) = -tan(45°) = -1.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-18',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Trigonometric Functions',
    questionText: 'If tan(31°) = 0.81, then what is the value of tan(509°)?',
    options: [
      '0.19',
      '-0.81',
      '0.81',
      '-0.91'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Reduce the angle using its coterminal periodicity (period of tan is 180° or subtract 360°):
509° = 360° + 149°  ⇒  tan(509°) = tan(149°)

Step 2: Use the reference angle in Quadrant II:
tan(149°) = tan(180° - 31°) = -tan(31°)

Step 3: Substitute tan(31°) = 0.81:
tan(509°) = -0.81.`,
    hint: 'Subtract 360° to find the coterminal angle 149°, then use tan(180° - 31°) = -tan(31°).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-19',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Trigonometry (Quadrant Angles)',
    questionText: 'If sin(θ) = -3/5 and θ is a 4th quadrant angle, then what is the value of sec(θ)?',
    options: [
      '-5/3',
      '3/4',
      '5/3',
      '5/4'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: In the 4th quadrant, cosine and secant are positive:
cos(θ) = +√(1 - sin²(θ))
cos(θ) = √(1 - (-3/5)²) = √(1 - 9/25) = √(16/25) = 4/5

Step 2: Compute sec(θ):
sec(θ) = 1 / cos(θ) = 1 / (4/5) = 5/4.`,
    hint: 'In quadrant IV, cosine is positive: cos(θ) = 4/5, so sec(θ) = 1 / cos(θ) = 5/4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-20',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Plane Geometry (Quadrilaterals)',
    questionText: 'If ABCD is a parallelogram with P a mid-point of AB and Q a mid-point of CD, which of the following is NOT necessarily true?',
    options: [
      'ΔADQ is congruent to ΔCBP',
      'Segment AQ is equal to Segment PC',
      'APCD is a trapezium',
      'APCQ is a rhombus'
    ],
    correctOptionIndex: 3,
    explanation: `Because ABCD is a parallelogram:
• AB = CD and AB ∥ CD
• AP = (1/2)AB and QC = (1/2)CD  ⇒  AP = QC and AP ∥ QC
• Hence, APCQ is guaranteed to be a parallelogram.

Therefore:
• AQ = PC is True (opposite sides of parallelogram APCQ).
• ΔADQ ≅ ΔCBP is True by SAS congruency.
• APCD is a trapezium (since AP ∥ CD but AP ≠ CD).
• However, APCQ is only a rhombus if adjacent sides AP and AQ are equal in length, which is NOT necessarily true for general parallelograms.`,
    hint: 'A parallelogram is a rhombus only if adjacent sides are equal in length (AP = AQ).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-21',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Solid Geometry (Pyramids)',
    questionText: 'A regular pyramid has a hexagonal base whose side length is 12 cm. What is the lateral surface area of the pyramid in square centimeters if the length of each lateral edge is 10 cm?',
    options: [
      '360',
      '72',
      '288',
      '720'
    ],
    correctOptionIndex: 2,
    explanation: `A regular hexagonal pyramid has 6 congruent isosceles triangular lateral faces.

For each lateral face:
• Base b = 12 cm
• Lateral edge e = 10 cm
• Slant height l (altitude of the triangle):
  l = √(e² - (b/2)²)
  l = √(10² - 6²) = √(100 - 36) = √64 = 8 cm

Area of one lateral triangular face:
A₁ = (1/2) · b · l = (1/2) · 12 · 8 = 48 cm²

Total Lateral Surface Area:
LSA = 6 · A₁ = 6 · 48 = 288 cm².`,
    hint: 'Find the slant height using Pythagoras: l = √(10² - 6²) = 8 cm, then calculate LSA = 6 · (1/2 · 12 · 8) = 288.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-22',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Matrices & Matrix Multiplication',
    questionText: 'If [[2, -1], [a, 4]] · [[1, b], [-1, 3]] = [[3, 1], [-1, 18]], then what are the values of a and b respectively?',
    options: [
      '3, 2',
      '2, -2',
      '-1, 2',
      '0, -1'
    ],
    correctOptionIndex: 0,
    explanation: `Compute matrix product elements:

• Entry (1, 2):
2(b) + (-1)(3) = 1
2b - 3 = 1  ⇒  2b = 4  ⇒  b = 2

• Entry (2, 1):
a(1) + 4(-1) = -1
a - 4 = -1  ⇒  a = 3

• Verification on Entry (2, 2):
a(b) + 4(3) = 3(2) + 12 = 6 + 12 = 18 (matches).

Therefore, a = 3 and b = 2.`,
    hint: 'Multiply Row 1 by Col 2 to find b, and Row 2 by Col 1 to find a.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-23',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Matrices (Transpose)',
    questionText: 'Let Matrix A = [[1, -1], [0, 2], [-3, 6]]. Then the transpose Aᵀ is',
    options: [
      '[[1, 0, -3], [-1, 2, 6]]',
      '[[1, 0], [-1, 2], [-3, 6]]',
      '[[-1, 2, 6], [1, 0, -3]]',
      '[[-1, 1], [2, 0], [6, -3]]'
    ],
    correctOptionIndex: 0,
    explanation: `Matrix A is a 3 × 2 matrix:
A = [[ 1, -1],
     [ 0,  2],
     [-3,  6]]

The transpose Aᵀ is formed by converting rows into columns, yielding a 2 × 3 matrix:
Aᵀ = [[ 1,  0, -3],
      [-1,  2,  6]]`,
    hint: 'The transpose operation swaps rows into columns, converting a 3×2 matrix into a 2×3 matrix.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-24',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Mathematical Logic & Quantifiers',
    questionText: 'On the set of Natural numbers ℕ = {1, 2, 3, ...}, which one of the following propositions has truth value True?',
    options: [
      '(∃x)(∃y)(x - y = y - x)',
      '(∀x)(∀y)(x ≠ y ⇒ x > y)',
      '(∀x)(∃y)(x - y = 5)',
      '(∀x)(∃y)(xy < x)'
    ],
    correctOptionIndex: 0,
    explanation: `Evaluate statement A:
Choose x = 1 and y = 1 (both ∈ ℕ):
1 - 1 = 0 and 1 - 1 = 0  ⇒  x - y = y - x holds.
Since at least one such pair exists, (∃x)(∃y)(x - y = y - x) is True.

Counterexamples for the other choices:
• B is false for x = 1, y = 2 (1 ≠ 2, but 1 is not > 2).
• C is false for x = 1 (1 - y = 5 requires y = -4 ∉ ℕ).
• D is false because for any natural y ≥ 1 and x ≥ 1, xy ≥ x (never xy < x).`,
    hint: 'Test x = 1, y = 1 in natural numbers for statement A.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-25',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Cumulative Frequency',
    questionText: 'In a certain month, the temperature of a city was recorded: 10-14 (f = 2), 15-19 (f = 9), 20-24 (f = 11), 25-29 (f = 5), 30-34 (f = 3). Which one of the following is the cumulative frequency of the fourth class?',
    options: [
      '22',
      '27',
      '18',
      '20'
    ],
    correctOptionIndex: 1,
    explanation: `The cumulative frequency is the running sum of class frequencies:
• 1st class (10–14): cf = 2
• 2nd class (15–19): cf = 2 + 9 = 11
• 3rd class (20–24): cf = 11 + 11 = 22
• 4th class (25–29): cf = 22 + 5 = 27.`,
    hint: 'Sum the frequencies of the first 4 classes: 2 + 9 + 11 + 5 = 27.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-26',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Probability (Mutually Exclusive Events)',
    questionText: 'A fair die is rolled once: E1 = {2, 4, 6} (even), E2 = {2, 3, 5} (prime), E3 = {3, 6} (multiples of 3), E4 = {5} (multiples of 5). Which pair of events is mutually exclusive?',
    options: [
      'E1 and E3',
      'E3 and E4',
      'E1 and E2',
      'E2 and E4'
    ],
    correctOptionIndex: 1,
    explanation: `Two events A and B are mutually exclusive if they cannot occur simultaneously, meaning their intersection is empty (A ∩ B = ∅).

Testing pairs:
• E3 ∩ E4 = {3, 6} ∩ {5} = ∅ (Mutually exclusive!)
• E1 ∩ E3 = {6} ≠ ∅
• E1 ∩ E2 = {2} ≠ ∅
• E2 ∩ E4 = {5} ≠ ∅.`,
    hint: 'Check which pair has an empty intersection: {3, 6} and {5} have no common outcomes.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-27',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Statistics (Median of Grouped Data)',
    questionText: 'The distribution of weight of 40 students is: 40-48 (f = 8), 49-57 (f = 18), 58-66 (f = 7), 67-75 (f = 5), 76-84 (f = 2). What is the median weight in kg?',
    options: [
      '54.5',
      '55',
      '53',
      '53.8'
    ],
    correctOptionIndex: 0,
    explanation: `Total frequency N = 40, so N/2 = 20.

Step 1: Find the median class:
• 40–48: cf = 8
• 49–57: cf = 8 + 18 = 26 (contains the 20th observation, so 49–57 is the median class).

Step 2: Identify parameters:
• Lower boundary L = 48.5
• Cumulative frequency before median class cf_prev = 8
• Frequency of median class f_med = 18
• Class width w = 57.5 - 48.5 = 9

Step 3: Apply the grouped median formula:
Median = L + [((N/2) - cf_prev) / f_med] · w
Median = 48.5 + [(20 - 8) / 18] · 9
Median = 48.5 + (12 / 18) · 9 = 48.5 + 6 = 54.5 kg.`,
    hint: 'Median formula for grouped data: L + [((N/2) - cf_prev) / f_med] · w = 48.5 + (12/18) · 9 = 54.5.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-28',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Probability of Combined Events',
    questionText: 'A group of students has 5 from grade 10, 8 from grade 11 and 2 from grade 12. If a student is chosen randomly, what is the probability that the student is either from grade 10 or grade 12?',
    options: [
      '7/15',
      '5/15',
      '12/15',
      '1/7'
    ],
    correctOptionIndex: 0,
    explanation: `Total number of students:
N = 5 + 8 + 2 = 15

Favorable students (Grade 10 or Grade 12):
n(E) = 5 + 2 = 7

Probability:
P(Grade 10 or Grade 12) = n(E) / N = 7 / 15.`,
    hint: 'Favorable outcomes = 5 + 2 = 7; total outcomes = 15  ⇒  P = 7/15.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-29',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Conic Sections (Hyperbola)',
    questionText: 'What is the standard equation of the hyperbola with foci F₁ = (-2, 1), F₂ = (8, 1) and conjugate axis length of 8 units?',
    options: [
      '(y + 1)²/16 - (x - 3)²/9 = 1',
      '(x - 3)²/16 - (y - 1)²/25 = 1',
      '(x - 3)²/9 - (y - 1)²/16 = 1',
      '(x - 3)²/25 - (y - 1)²/15 = 1'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Identify center (h, k) and focal distance c:
The foci share y = 1, indicating a horizontal transverse axis:
Center (h, k) = ((-2 + 8)/2, 1) = (3, 1).
Focal distance: 2c = 8 - (-2) = 10  ⇒  c = 5.

Step 2: Find conjugate semi-axis b:
Length of conjugate axis = 2b = 8  ⇒  b = 4  ⇒  b² = 16.

Step 3: Calculate transverse semi-axis a:
For a hyperbola: c² = a² + b²
5² = a² + 4²
25 = a² + 16  ⇒  a² = 9.

Step 4: Formulate the standard horizontal hyperbola equation:
(x - h)² / a² - (y - k)² / b² = 1
(x - 3)² / 9 - (y - 1)² / 16 = 1.`,
    hint: 'Find center (3, 1), c = 5, b = 4, and calculate a² = c² - b² = 25 - 16 = 9.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-30',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Mathematical Logic (Truth Values)',
    questionText: 'If the truth value of proposition p is True (T), which of the following compound propositions has a truth value True for ANY proposition q?',
    options: [
      '¬p ⇔ (p ∨ ¬q)',
      '(¬p ∧ q) ⇒ q',
      '(p ∧ ¬p) ∧ q',
      '(p ⇔ q) ∧ ¬p'
    ],
    correctOptionIndex: 1,
    explanation: `Given p is True, the negation ¬p is False.

Evaluating option B:
The antecedent is (¬p ∧ q) = (False ∧ q) = False.
In mathematical logic, a conditional implication (A ⇒ B) with a False antecedent is vacuously True, regardless of the truth value of the consequent q.
Therefore, (¬p ∧ q) ⇒ q is always True.`,
    hint: 'A conditional implication with a false antecedent is always True.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
