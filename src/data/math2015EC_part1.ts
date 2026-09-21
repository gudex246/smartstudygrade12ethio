import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2015_EC_PART1: Question[] = [
  {
    id: 'math-2015-01',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Exponents and Logarithms',
    questionText: 'What is the value of x that satisfies the equation 5(125/8)^((1/3)x² - (2/3)x) = 2?',
    options: [
      '1',
      '-3/2',
      '3/2',
      '4'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Divide both sides by 5:
(125/8)^((1/3)x² - (2/3)x) = 2/5

Step 2: Express both sides with a common base (5/2):
• 125/8 = (5/2)³
• 2/5 = (5/2)⁻¹

Step 3: Simplify the left-hand side exponent using the power-of-a-power rule ((aᵐ)ⁿ = aᵐⁿ):
[(5/2)³]^((1/3)(x² - 2x)) = (5/2)^(3 · (1/3)(x² - 2x)) = (5/2)^(x² - 2x)

Step 4: Equate the exponents of equal bases:
x² - 2x = -1
x² - 2x + 1 = 0
(x - 1)² = 0  ⇒  x = 1`,
    hint: 'Rewrite 125/8 as (5/2)³ and 2/5 as (5/2)⁻¹, then equate the exponents: x² - 2x = -1.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-02',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Quadratic Inequalities',
    questionText: 'The solution set of the inequality (2x - 3)(x + 5) ≤ 0 is',
    options: [
      '(-5, 3/2)',
      '(-∞, -5] ∪ [3/2, ∞)',
      '(-∞, -3/2] ∪ [5, ∞)',
      '[-5, 3/2]'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Find the critical roots of the quadratic equation:
(2x - 3)(x + 5) = 0  ⇒  x = 3/2 or x = -5

Step 2: Determine the sign of the parabola:
Expanding yields 2x² + 7x - 15 ≤ 0.
Since the leading coefficient (a = 2) is positive, the parabola opens upwards.

Step 3: Identify the non-positive region (≤ 0):
The parabola is on or below the x-axis between the two roots.
Therefore, the solution set is the closed interval: [-5, 3/2].`,
    hint: 'Find the roots x = -5 and x = 3/2. Since the inequality is ≤ 0, the solution is the closed interval between them.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-03',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Descriptive Statistics',
    questionText: 'The histogram shows the recorded temperature (in °C) of a certain town in Ethiopia for the first 15 days of March 2023. Which one of the following statements is true about the data represented by the histogram?',
    options: [
      'The temperature was 24°C for two days.',
      'The mode of the data is 22°C.',
      'The highest frequency is 3.',
      'For 45% of the days, the temperature was more than 19°C.'
    ],
    correctOptionIndex: 1,
    explanation: `In a frequency distribution histogram, the mode corresponds to the data value (or class midpoint) having the highest frequency (the tallest bar).

• In the given histogram, the tallest bar has a frequency of 5 and is centered at 22°C.
• Therefore, the mode of the recorded temperature dataset is 22°C.`,
    hint: 'The mode corresponds to the value or class with the highest peak in the histogram.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-04',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Similar Triangles and Proportions',
    questionText: 'A 20m high building casts a shadow of 4m, at the same time a 35m tree casts a shadow of x m. What is the value of x?',
    options: [
      '8m',
      '11m',
      '7m',
      '15m'
    ],
    correctOptionIndex: 2,
    explanation: `Because the sun angle of elevation is identical for both objects at the same time, the two right triangles formed are similar:

Height / Shadow Length = constant
20 / 4 = 35 / x
5 = 35 / x
x = 35 / 5 = 7 m.`,
    hint: 'Set up the proportion: 20 / 4 = 35 / x  ⇒  5 = 35 / x.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-05',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Coordinate Geometry and Vectors',
    questionText: 'A car started moving 9 km to the East then moved 4 km to the North and then 12 km towards West to reach its destination. How far is the car from its starting point?',
    options: [
      '25 km',
      '12 km',
      '4 km',
      '5 km'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Compute net horizontal (East-West) displacement:
Δx = 9 km (East) - 12 km (West) = -3 km (3 km West).

Step 2: Compute net vertical (North-South) displacement:
Δy = +4 km (4 km North).

Step 3: Calculate the straight-line distance d using the Pythagorean theorem:
d = √((Δx)² + (Δy)²)
d = √((-3)² + 4²) = √(9 + 16) = √25 = 5 km.`,
    hint: 'Calculate net horizontal displacement (-3 km) and vertical displacement (4 km), then apply d = √((-3)² + 4²).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-06',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Polynomial Remainder Theorem',
    questionText: 'When the polynomial p(x) = 3x⁶ + 5x⁴ - 7x³ + 2kx² + 3 is divided by x + 1, the remainder is 4. What is the value of k?',
    options: [
      '-5',
      '-7',
      '3',
      '6'
    ],
    correctOptionIndex: 1,
    explanation: `By the Polynomial Remainder Theorem, when a polynomial p(x) is divided by (x - c), the remainder is R = p(c).
Here the divisor is x + 1 = x - (-1), so c = -1:

p(-1) = 3(-1)⁶ + 5(-1)⁴ - 7(-1)³ + 2k(-1)² + 3
= 3(1) + 5(1) - 7(-1) + 2k(1) + 3
= 3 + 5 + 7 + 2k + 3
= 18 + 2k

Given that remainder R = 4:
18 + 2k = 4
2k = 4 - 18
2k = -14
k = -7.`,
    hint: 'Apply the Remainder Theorem: compute p(-1) = 18 + 2k and set it equal to 4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-07',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Logarithmic Equations',
    questionText: 'The solution set of the equation 5 log₉(x) - 2 log₉(x²) - log₄(8) = -1 is',
    options: [
      '{4}',
      '{3}',
      '{9}',
      '{3/2}'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Simplify log₄(8):
log₄(8) = log_(2²)(2³) = 3/2.

Step 2: Simplify the log₉ terms using power properties:
2 log₉(x²) = 4 log₉(x)
5 log₉(x) - 4 log₉(x) = log₉(x).

Step 3: Substitute back into the equation:
log₉(x) - 3/2 = -1
log₉(x) = -1 + 3/2 = 1/2.

Step 4: Convert to exponential form:
x = 9^(1/2) = √9 = 3.

Since x = 3 > 0 satisfies the domain of logarithm, the solution set is {3}.`,
    hint: 'Use the power rule 2 log₉(x²) = 4 log₉(x) and evaluate log₄(8) = 3/2.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-08',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Quadratic Functions',
    questionText: 'Which of the following statements is true about f(x) = x² - 6x + 10?',
    options: [
      'f(x) ≥ 2 for all x in the domain of f.',
      'The line x = 1 is the axis of symmetry of the graph of f.',
      'The graph of f opens downward.',
      'The vertex of the graph of f is (3, 1).'
    ],
    correctOptionIndex: 3,
    explanation: `Rewrite f(x) in vertex form by completing the square:
f(x) = (x² - 6x + 9) - 9 + 10
f(x) = (x - 3)² + 1

From vertex form f(x) = a(x - h)² + k:
• Vertex (h, k) = (3, 1)
• Axis of symmetry is the vertical line x = 3
• Leading coefficient a = 1 > 0, so the parabola opens upward with minimum value f(3) = 1.

Therefore, statement D is correct.`,
    hint: 'Complete the square: f(x) = (x - 3)² + 1 gives the vertex (3, 1).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-09',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Plane Geometry (Regular Polygons)',
    questionText: 'What is the area of a regular hexagon inscribed in a circle of radius 6 cm?',
    options: [
      '48√3 cm²',
      '54√3 cm²',
      '48 cm²',
      '36√3 cm²'
    ],
    correctOptionIndex: 1,
    explanation: `A regular hexagon inscribed in a circle of radius R = 6 cm consists of 6 congruent equilateral triangles, each having side length s = R = 6 cm.

Area of one equilateral triangle:
A₁ = (√3 / 4) · s²
A₁ = (√3 / 4) · 6² = (√3 / 4) · 36 = 9√3 cm²

Total Area of the regular hexagon:
A = 6 · A₁ = 6 · 9√3 = 54√3 cm².`,
    hint: 'A regular hexagon with circumradius R consists of 6 equilateral triangles of side length R: Area = 6 · (√3/4 · R²).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-10',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Number Theory',
    questionText: 'Which of the following defines a prime number?',
    options: [
      'It is a number that has more than two positive factors.',
      'It is a number whose only factor is 1.',
      'It is a number that has only two positive factors.',
      'It is a number whose only factor is itself.'
    ],
    correctOptionIndex: 2,
    explanation: `By standard mathematical definition:
A prime number is an integer greater than 1 that has exactly two distinct positive divisors (factors): 1 and itself (e.g., 2, 3, 5, 7, 11...).`,
    hint: 'Prime numbers have exactly two distinct positive factors: 1 and the number itself.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-11',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Scientific Notation',
    questionText: 'Which of the following rational numbers is written in its standard form (scientific notation)?',
    options: [
      '10.1 × 10⁻²',
      '0.8 × 10²',
      '0.09 × 10⁵',
      '5 × 10⁵'
    ],
    correctOptionIndex: 3,
    explanation: `A number is in standard scientific notation when expressed in the form:
a × 10ⁿ, where 1 ≤ a < 10 and n is an integer.

Checking the options:
• 10.1 × 10⁻² has a = 10.1 ≥ 10 (invalid)
• 0.8 × 10² has a = 0.8 < 1 (invalid)
• 0.09 × 10⁵ has a = 0.09 < 1 (invalid)
• 5 × 10⁵ has a = 5, which satisfies 1 ≤ 5 < 10 (valid standard form).`,
    hint: 'Standard scientific form requires the leading coefficient a to satisfy 1 ≤ a < 10.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-12',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Exponential Equations',
    questionText: 'What is the value of x in the equation √(125ˣ · 5²ˣ⁻¹) = 25³ˣ⁺¹?',
    options: [
      '-5',
      '-5/7',
      '5',
      '5/7'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Express all powers with base 5:
• 125ˣ = (5³)ˣ = 5³ˣ
• 25³ˣ⁺¹ = (5²)³ˣ⁺¹ = 5⁶ˣ⁺²

Step 2: Simplify inside the square root:
5³ˣ · 5²ˣ⁻¹ = 5^(3x + 2x - 1) = 5^(5x - 1)

Step 3: Apply the square root:
√(5^(5x - 1)) = (5^(5x - 1))^(1/2) = 5^((5x - 1)/2)

Step 4: Equate powers of base 5:
5^((5x - 1)/2) = 5^(6x + 2)
(5x - 1) / 2 = 6x + 2
5x - 1 = 12x + 4
-1 - 4 = 12x - 5x
-5 = 7x  ⇒  x = -5/7.`,
    hint: 'Convert both sides to base 5, then equate the exponents: (5x - 1)/2 = 6x + 2.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-13',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Absolute Value Equations',
    questionText: 'The solution set of the equation 3|2x - 4| = 6 - 2|1 - 5x| is',
    options: [
      '{1/2, 5/4}',
      '{-1, 1/2, 5/4}',
      '{}',
      '{-1, 1/2}'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Simplify common factors:
3|2(x - 2)| + 2|5x - 1| = 6
6|x - 2| + 2|5x - 1| = 6
Divide by 2:
3|x - 2| + |5x - 1| = 3

Step 2: Test across critical intervals (x = 1/5 and x = 2):

1. For x ≥ 2:
3(x - 2) + (5x - 1) = 3  ⇒  8x - 7 = 3  ⇒  x = 10/8 = 5/4
(5/4 = 1.25, which contradicts the domain x ≥ 2).

2. For 1/5 ≤ x < 2:
3(2 - x) + (5x - 1) = 3  ⇒  6 - 3x + 5x - 1 = 3  ⇒  2x + 5 = 3  ⇒  x = -1
(-1 contradicts the domain 1/5 ≤ x < 2).

3. For x < 1/5:
3(2 - x) + (1 - 5x) = 3  ⇒  6 - 3x + 1 - 5x = 3  ⇒  7 - 8x = 3  ⇒  x = 4/8 = 1/2
(1/2 = 0.5 contradicts the domain x < 1/5 = 0.2).

None of the candidate values lie in their respective valid intervals.
Therefore, no real solution exists and the solution set is the empty set {}.`,
    hint: 'Rearrange to 3|x - 2| + |5x - 1| = 3 and verify solutions across intervals x ≥ 2, 1/5 ≤ x < 2, and x < 1/5.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-14',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Set Theory & Cartesian Product',
    questionText: 'Given A = {x ∈ ℕ : x < 3} and B is the set of all positive factors of 13. Which one of the following is equal to B × A?',
    options: [
      '{(1, 1), (2, 1), (1, 13), (2, 13)}',
      '{(1, 1), (1, 2), (13, 1), (13, 2)}',
      '{(1, 1), (13, 2)}',
      '{(1, 2), (13, 1), (13, 2)}'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: List the elements of set A:
A = {x ∈ ℕ : x < 3} = {1, 2}.

Step 2: List the positive factors of 13:
Since 13 is a prime number, B = {1, 13}.

Step 3: Form the Cartesian product B × A:
B × A = {(b, a) : b ∈ B, a ∈ A}
B × A = {(1, 1), (1, 2), (13, 1), (13, 2)}.`,
    hint: 'Find A = {1, 2} and B = {1, 13}, then form all ordered pairs (b, a) where b ∈ B and a ∈ A.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-15',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Solid Geometry (Mensuration)',
    questionText: 'An object made of wood has a top hemisphere and a cylindrical bottom of base diameter 6 cm and height 12 cm. From the bottom of the cylinder, a right circular cone of height 8 cm is cut off. What is the total volume of the solid in cubic centimeters?',
    options: [
      '102π',
      '72π',
      '96π',
      '126π'
    ],
    correctOptionIndex: 0,
    explanation: `Base radius r = diameter / 2 = 6 / 2 = 3 cm.

1. Volume of solid hemisphere:
V_hemisphere = (2/3) · π · r³ = (2/3) · π · 3³ = (2/3) · 27π = 18π cm³

2. Volume of cylinder:
V_cylinder = π · r² · h_cyl = π · 3² · 12 = 9 · 12 · π = 108π cm³

3. Volume of cutout cone:
V_cone = (1/3) · π · r² · h_cone = (1/3) · π · 3² · 8 = (1/3) · 9 · 8 · π = 24π cm³

Total Volume = V_hemisphere + V_cylinder - V_cone
Total Volume = 18π + 108π - 24π = 102π cm³.`,
    hint: 'Add the volume of the hemisphere and the cylinder, then subtract the volume of the cutout cone: 18π + 108π - 24π = 102π.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
