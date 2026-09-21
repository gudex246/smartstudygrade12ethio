import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2016_EC_PART3: Question[] = [
  {
    id: 'math-2016-q31',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Linear Programming: Feasible Region Optimization',
    questionText: '31. What is the maximum value of z = 2x + 3y subjected to the constraints { x + y ≤ 6, 2x - y ≤ 6, x ≥ 0, y ≥ 0 }?',
    options: [
      '14',
      '22',
      '12',
      '18'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Find the corner points of the feasible region:
1. Origin: (0, 0)
2. Intersection of 2x - y = 6 with y = 0: x = 3  =>  (3, 0)
3. Intersection of x + y = 6 with x = 0: y = 6  =>  (0, 6)
4. Intersection of x + y = 6 and 2x - y = 6:
   Adding the two equations: 3x = 12  =>  x = 4
   Then y = 6 - 4 = 2  =>  (4, 2)

Step 2: Evaluate the objective function z = 2x + 3y at each corner point:
• At (0, 0): z = 2(0) + 3(0) = 0
• At (3, 0): z = 2(3) + 3(0) = 6
• At (4, 2): z = 2(4) + 3(2) = 8 + 6 = 14
• At (0, 6): z = 2(0) + 3(6) = 18

The maximum value of z is 18 at (0, 6).`,
    hint: 'Test the vertices (0,0), (3,0), (4,2), and (0,6). At (0,6), z = 3(6) = 18.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q32',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Sequences and Series: Sum of Finite Geometric Series',
    questionText: '32. Which one of the following is equal to the sum ∑_{k=1}⁷ 729(3^(1 - k))?',
    options: [
      '1092',
      '1079',
      '1093',
      '1088'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Write out the terms of the geometric series:
• k = 1: 729 * 3⁰ = 729
• k = 2: 729 * 3⁻¹ = 243
• k = 3: 729 * 3⁻² = 81
• k = 4: 729 * 3⁻³ = 27
• k = 5: 729 * 3⁻⁴ = 9
• k = 6: 729 * 3⁻⁵ = 3
• k = 7: 729 * 3⁻⁶ = 1

Step 2: Calculate the sum:
Sum = 729 + 243 + 81 + 27 + 9 + 3 + 1
Sum = 972 + 108 + 12 + 1 = 1093

Using the sum formula: S₇ = a₁(1 - r⁷) / (1 - r) with a₁ = 729 and r = 1/3:
S₇ = 729 * (1 - 1/2187) / (2/3) = 729 * (2186 / 2187) * (3/2) = 1093`,
    hint: 'Sum = 729 + 243 + 81 + 27 + 9 + 3 + 1 = 1093.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q33',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Conic Sections: Equation of a Parabola',
    questionText: '33. Which one of the following is an equation of the parabola with vertex V(0, 0) and focus F(2, 0)?',
    options: [
      'y² = (1/8)x',
      'x² = (1/8)y',
      'y² = 8x',
      'x² = 8y'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Identify the orientation of the parabola:
• The vertex is at (0, 0) and the focus is at (2, 0) on the positive x-axis.
• The axis of symmetry is the x-axis (y = 0), and the parabola opens to the right.

Step 2: Use the standard equation for a horizontal parabola opening to the right:
y² = 4px

Step 3: Substitute the focal distance p = 2:
y² = 4(2)x
y² = 8x`,
    hint: 'Focus at (p, 0) = (2, 0) gives p = 2. Equation is y² = 4px = 8x.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q34',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Trigonometry: Properties of the Tangent Function',
    questionText: '34. Which one of the following is true about the function f(x) = tan x?',
    options: [
      'The range of f is the set of real numbers, R.',
      'The graph of f intersects y-axis at (π/2, 0).',
      'The domain of f is R \\ (-π/2, π/2).',
      'f is a periodic function with period π/2.'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Review the fundamental properties of f(x) = tan x:
• Range: (-∞, ∞) = R (all real numbers).
• Period: π (not π/2).
• Domain: All real numbers except odd multiples of π/2: R \\ {x : x = π/2 + kπ, k in Z}.
• Y-intercept: (0, 0).

Therefore, the statement "The range of f is the set of real numbers, R" is true.`,
    hint: 'The tangent function takes all real values from -∞ to +∞, so its range is R.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q35',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Polynomials: Polynomial Equality',
    questionText: '35. Which one of the following is equal to the polynomial function f(x) = x² + 4x + 4?',
    options: [
      'h(x) = (x² + 6x + 8) - (2x - 4)',
      'l(x) = (x² + 10x + 3) + (-6x + 1)',
      'g(x) = (x⁴ + 4x² + 4) / (x² + 2)',
      'k(x) = (x - 2)(x + 2)'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Simplify each option expression:
• Option A: h(x) = (x² + 6x + 8) - (2x - 4) = x² + 4x + 12 ≠ x² + 4x + 4
• Option B: l(x) = (x² + 10x + 3) + (-6x + 1) = x² + (10x - 6x) + (3 + 1) = x² + 4x + 4
• Option C: g(x) = (x² + 2)² / (x² + 2) = x² + 2 ≠ x² + 4x + 4
• Option D: k(x) = (x - 2)(x + 2) = x² - 4 ≠ x² + 4x + 4

Option B simplifies exactly to f(x) = x² + 4x + 4.`,
    hint: 'Simplify option B: (x² + 10x + 3) + (-6x + 1) = x² + 4x + 4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q36',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Sets: Set Operations and Properties',
    questionText: '36. Let S, R and T be any three sets. Which one of the following is NOT true about the union of the sets?',
    options: [
      'S ∪ T = T',
      'S ∪ S = S',
      'S ∪ R = R ∪ S',
      '(S ∪ R) ∪ T = T ∪ (R ∪ S)'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Review universal set properties:
• Option B (Idempotent Law): S ∪ S = S (Always true for any set S).
• Option C (Commutative Law): S ∪ R = R ∪ S (Always true).
• Option D (Associative & Commutative Laws): (S ∪ R) ∪ T = T ∪ (R ∪ S) (Always true).

Step 2: Evaluate Option A:
• S ∪ T = T holds only if S is a subset of T (S ⊆ T). For arbitrary sets S and T, S ∪ T is not necessarily equal to T.

Therefore, Option A is NOT true in general.`,
    hint: 'S ∪ T = T is only true when S is a subset of T, not for any arbitrary sets.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q37',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Algebra: Vieta\'s Formulas for Quadratic Equations',
    questionText: '37. Let r₁ and r₂ be the roots of a quadratic equation ax² + bx + c = 0, such that r₁ + r₂ = -2.5 and r₁ * r₂ = 1.5, where a, b, and c are real numbers with a ≠ 0. Which one of the following can be the values of a, b, and c respectively?',
    options: [
      '2, 5 and 3',
      '2, 3 and 5',
      '1, 5, and 6',
      '1, 6 and 5'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: State Vieta's formulas for ax² + bx + c = 0:
• Sum of roots: r₁ + r₂ = -b / a
• Product of roots: r₁ * r₂ = c / a

Step 2: Substitute the given values:
• -b / a = -2.5 = -5 / 2  =>  b / a = 5 / 2
• c / a = 1.5 = 3 / 2

Step 3: Choose integer coefficients with a = 2:
• If a = 2, then b = 5 and c = 3.
The equation is 2x² + 5x + 3 = 0.

Therefore, the values of a, b, and c are 2, 5, and 3 respectively.`,
    hint: '-b/a = -5/2 and c/a = 3/2. For a = 2, we have b = 5 and c = 3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q38',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Statistics: Standard Deviation of Ungrouped Data',
    questionText: '38. The following data gives the scores of 10 students in a Mathematics examination: 6, 10, 8, 5, 9, 8, 5, 10, 10, 9. Which one of the following is the standard deviation of the given data?',
    options: [
      '√5.8',
      '√3.6',
      '5.8',
      '3.6'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Calculate the mean (x̄):
Sum = 6 + 10 + 8 + 5 + 9 + 8 + 5 + 10 + 10 + 9 = 80
Mean x̄ = 80 / 10 = 8

Step 2: Calculate squared deviations from the mean (x - x̄)²:
• (6 - 8)² = 4
• (10 - 8)² = 4
• (8 - 8)² = 0
• (5 - 8)² = 9
• (9 - 8)² = 1
• (8 - 8)² = 0
• (5 - 8)² = 9
• (10 - 8)² = 4
• (10 - 8)² = 4
• (9 - 8)² = 1

Step 3: Find the sum of squared deviations:
Sum of (x - x̄)² = 4 + 4 + 0 + 9 + 1 + 0 + 9 + 4 + 4 + 1 = 36

Step 4: Compute variance and standard deviation:
Variance σ² = 36 / 10 = 3.6
Standard Deviation σ = √3.6`,
    hint: 'Mean = 8. Sum of squared deviations = 36. Variance = 3.6, so Standard Deviation = √3.6.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q39',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Coordinate Geometry: Parallel Lines',
    questionText: '39. Which of the following pairs of lines with the given equations are parallel?',
    options: [
      'l₁: x - 2y + 1 = 0 and l₂: x + 2y - 1 = 0',
      'l₁: 4x - y = 2 and l₂: -x + 4y - 3 = 0',
      'l₁: 2x + 3y = 5 and l₂: 3x + 2y = 4',
      'l₁: x - y + 3 = 0 and l₂: -x + y - 9 = 0'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Two lines are parallel if and only if they have equal slopes (m₁ = m₂) and different y-intercepts.

Step 2: Find the slopes for each pair:
• Option A: l₁ has slope m₁ = 1/2; l₂ has slope m₂ = -1/2 (Not parallel).
• Option B: l₁ has slope m₁ = 4; l₂ has slope m₂ = 1/4 (Not parallel).
• Option C: l₁ has slope m₁ = -2/3; l₂ has slope m₂ = -3/2 (Not parallel).
• Option D:
  l₁: x - y + 3 = 0  =>  y = x + 3 (slope m₁ = 1)
  l₂: -x + y - 9 = 0  =>  y = x + 9 (slope m₂ = 1)

Since m₁ = m₂ = 1 and 3 ≠ 9, the lines in Option D are parallel.`,
    hint: 'Express both lines in slope-intercept form y = mx + b. In option D, both slopes are 1.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q40',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Rational Functions: Range of a Rational Function',
    questionText: '40. Which one of the following is the range of the function f(x) = (2x - 1)/(x + 3)?',
    options: [
      'R \\ {1/2}',
      'R \\ {2}',
      'R \\ {-1/3}',
      'R \\ {-3}'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Set y = f(x) and solve for x in terms of y:
y = (2x - 1) / (x + 3)
y(x + 3) = 2x - 1
yx + 3y = 2x - 1
yx - 2x = -3y - 1
x(y - 2) = -(3y + 1)
x = -(3y + 1) / (y - 2)

Step 2: Determine values for which x is defined:
The expression for x is defined for all real numbers y except where the denominator is zero (y - 2 = 0 => y = 2).

Therefore, the range of f is R \\ {2}.`,
    hint: 'Horizontal asymptote of (2x - 1)/(x + 3) is y = 2/1 = 2, so range is R \\ {2}.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q41',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Complex Numbers: Equality of Complex Numbers',
    questionText: '41. Let z = -a + 2i and w = 5 - bi be two complex numbers, where a and b are real numbers. If z = w, then which one of the following pairs of numbers are equal to a and b respectively?',
    options: [
      '-5 and 2',
      '-5 and -2',
      '5 and 2',
      '5 and -2'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Equate the real parts of z and w:
Real(z) = Real(w)
-a = 5  =>  a = -5

Step 2: Equate the imaginary parts of z and w:
Imag(z) = Imag(w)
2 = -b  =>  b = -2

Therefore, a = -5 and b = -2.`,
    hint: 'Two complex numbers are equal if their real parts match (-a = 5) and imaginary parts match (2 = -b).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q42',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Statistics: Mean / Average Calculation',
    questionText: '42. The table presents the number of traffic accidents in a certain city per year from 2019 to 2023: 3500 (2019), 2750 (2020), 2850 (2021), 3500 (2022), and 3750 (2023). What is the average number of accidents per year for the given five years?',
    options: [
      '3210',
      '3270',
      '3200',
      '3250'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Calculate the total sum of accidents over the 5 years:
Total = 3500 + 2750 + 2850 + 3500 + 3750
Total = 16,350

Step 2: Divide by the number of years (n = 5):
Average = 16,350 / 5 = 3,270 accidents per year.`,
    hint: 'Average = (3500 + 2750 + 2850 + 3500 + 3750) / 5 = 16350 / 5 = 3270.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q43',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Statistics: Coefficient of Range',
    questionText: '43. Consider the dataset: 10, 8, 10, 2, 12, 6, 12, 18, 3, 7, 10, 8, 8. Which one of the following is the coefficient of range of the data?',
    options: [
      '4/5',
      '20',
      '16',
      '5/4'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Identify the maximum (L) and minimum (S) values in the dataset:
• Maximum value (L) = 18
• Minimum value (S) = 2

Step 2: Use the coefficient of range formula:
Coefficient of Range = (L - S) / (L + S)

Step 3: Substitute the values:
Coefficient of Range = (18 - 2) / (18 + 2)
Coefficient of Range = 16 / 20 = 4/5`,
    hint: 'Coefficient of Range = (Max - Min) / (Max + Min) = (18 - 2) / (18 + 2) = 16/20 = 4/5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q44',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Matrices: Scalar Multiplication of Matrices',
    questionText: '44. Let M = [[9, 24, 6], [-12, 18, 15], [0, 27, 3]]. Which one of the following matrices is equal to (2/3)M?',
    options: [
      '[[6, 8, 4], [-8, 6, 10], [0, 9, 2]]',
      '[[6, 16, 4], [-8, 12, 10], [0, 18, 2]]',
      '[[3, 8, 2], [-4, 6, 5], [0, 9, 1]]',
      '[[6, 16, 2], [-8, 12, 10], [0, 18, 2]]'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Multiply every entry of matrix M by the scalar (2/3):
• Row 1:
  (2/3) * 9 = 6
  (2/3) * 24 = 16
  (2/3) * 6 = 4
• Row 2:
  (2/3) * (-12) = -8
  (2/3) * 18 = 12
  (2/3) * 15 = 10
• Row 3:
  (2/3) * 0 = 0
  (2/3) * 27 = 18
  (2/3) * 3 = 2

The resulting matrix is [[6, 16, 4], [-8, 12, 10], [0, 18, 2]].`,
    hint: 'Multiply each element in M by 2/3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q45',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Functions: Onto (Surjective) Functions',
    questionText: '45. Which one of the following is an onto function from R onto R?',
    options: [
      'f(x) = √(x² + 1)',
      'f(x) = 5x³ + 1',
      'f(x) = |x - 1|',
      'f(x) = 2x - 3x²'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Define an onto (surjective) function from R to R:
A function f: R -> R is onto if its range is the entire set of real numbers R (every y in R has at least one pre-image x in R).

Step 2: Analyze each option:
• f(x) = √(x² + 1) has range [1, ∞) ≠ R (Not onto).
• f(x) = |x - 1| has range [0, ∞) ≠ R (Not onto).
• f(x) = 2x - 3x² is a parabola with a maximum at y = 1/3, range (-∞, 1/3] ≠ R (Not onto).
• f(x) = 5x³ + 1 is an odd-degree polynomial. As x -> ∞, f(x) -> ∞; as x -> -∞, f(x) -> -∞. For any y in R, x = ∛((y - 1)/5) is a real solution. Its range is (-∞, ∞) = R.

Therefore, f(x) = 5x³ + 1 is an onto function.`,
    hint: 'Cubic polynomial functions f(x) = 5x³ + 1 have range (-∞, ∞) = R and are surjective onto R.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
