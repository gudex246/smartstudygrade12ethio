import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2017_EC_PART2: Question[] = [
  {
    id: 'math-2017-q18',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Logarithms: Solving Exponential Equations',
    questionText: '18. Which one of the following is the solution set of 5ˣ = 11.2? [Use log 5 = 0.6990 and log 1.12 = 0.0485]',
    options: [
      '1.5',
      '1.2',
      '1.69',
      '1.12'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Take the common logarithm (base 10) of both sides:
log(5ˣ) = log(11.2)
x · log(5) = log(11.2).

Step 2: Express log(11.2) using the given values:
11.2 = 10 × 1.12
log(11.2) = log(10) + log(1.12) = 1 + 0.0485 = 1.0485.

Step 3: Solve for x:
x = log(11.2) / log(5) = 1.0485 / 0.6990 ≈ 1.50.

Exam Note: While the exact quotient 1.0485 / 0.6990 = 1.50 aligns with Option A, the official examination booklet key records Option C (1.69) for this item.`,
    hint: 'Use the power rule: x = log(11.2) / log(5). Express log(11.2) as log(10) + log(1.12) = 1.0485.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q19',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Logarithms: Evaluating Square Roots Using Log Tables',
    questionText: '19. Given that log 4.8 = 0.6812, log 6.93 = 0.8406 and log 6.84 = 0.8351. Then what is the value of √48?',
    options: [
      '6.71',
      '6.93',
      '6.84',
      '6.83'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Express the square root in exponential form:
Let y = √48 = 48^(1/2).

Step 2: Take the logarithm of y:
log(y) = log(48^(1/2)) = (1/2) · log(48).

Step 3: Write 48 in terms of 4.8:
48 = 4.8 × 10
log(48) = log(4.8) + log(10) = 0.6812 + 1 = 1.6812.

Step 4: Compute log(y):
log(y) = (1/2) × 1.6812 = 0.8406.

Step 5: Match with the given antilogarithm:
We are given that log(6.93) = 0.8406.
Therefore: y = √48 ≈ 6.93.`,
    hint: 'log(√48) = (1/2) log(48) = (1/2)(log 4.8 + 1) = (1/2)(1.6812) = 0.8406 = log(6.93).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q20',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Logarithmic Equations: Extraneous Roots & Domain Checks',
    questionText: '20. Consider the equation log x + log(x - 3) = 1. Then what is its solution set?',
    options: [
      '{2, -5}',
      '{-2, 5}',
      '{6}',
      '{5}'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Combine the logarithms using the product rule:
log[x(x - 3)] = 1.

Step 2: Convert from logarithmic to exponential form (base 10):
x(x - 3) = 10¹
x² - 3x - 10 = 0.

Step 3: Factor the quadratic equation:
(x - 5)(x + 2) = 0  ⟹  x = 5 or x = -2.

Step 4: Check the domain of the original logarithmic expression:
• For log x to be defined, x > 0.
• For log(x - 3) to be defined, x - 3 > 0  ⟹  x > 3.
Thus the valid domain is x > 3.
• x = -2 is extraneous because log(-2) is undefined for real numbers.
• x = 5 satisfies 5 > 3.

Therefore, the only valid solution is {5}.`,
    hint: 'Combine into log(x² - 3x) = 1  ⟹  x² - 3x = 10. Solve for x and discard the negative extraneous root.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q21',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Exponential Growth: Population Growth Models',
    questionText: '21. If the number of bacteria in a certain laboratory colony grows at the rate of 5% per day and assuming that there are 1000 bacteria present initially, then what would be the approximate number of bacteria present after 3 days?',
    options: [
      '1102',
      '1158',
      '1050',
      '1105'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Identify the exponential growth formula:
N(t) = N₀(1 + r)ᵗ
where:
• N₀ = 1000 (initial population)
• r = 5% = 0.05 (daily growth rate)
• t = 3 days (time elapsed)

Step 2: Substitute the parameters into the equation:
N(3) = 1000 × (1 + 0.05)³
N(3) = 1000 × (1.05)³.

Step 3: Calculate (1.05)³:
(1.05)² = 1.1025
(1.05)³ = 1.1025 × 1.05 = 1.157625.

Step 4: Multiply by the initial population:
N(3) = 1000 × 1.157625 = 1157.625 ≈ 1158 bacteria.`,
    hint: 'Use N = N₀(1 + r)ᵗ = 1000(1.05)³ = 1000(1.157625) ≈ 1158.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q22',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Coordinate Geometry: Internal Division Section Formula',
    questionText: '22. Consider the line segment PQ with P = (1, -1) and Q = (4, 2). Then which of the following point divides PQ internally in the ratio of 2:1?',
    options: [
      '(2, 0)',
      '(2, 1)',
      '(3, 0)',
      '(3, 1)'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: State the Section Formula for internal division in ratio m : n:
x = (m·x₂ + n·x₁) / (m + n)
y = (m·y₂ + n·y₁) / (m + n).

Step 2: Identify the given coordinates and ratio:
P(x₁, y₁) = (1, -1)
Q(x₂, y₂) = (4, 2)
m = 2, n = 1.

Step 3: Calculate the x-coordinate:
x = (2 · 4 + 1 · 1) / (2 + 1) = (8 + 1) / 3 = 9 / 3 = 3.

Step 4: Calculate the y-coordinate:
y = (2 · 2 + 1 · (-1)) / (2 + 1) = (4 - 1) / 3 = 3 / 3 = 1.

Thus, the dividing point is (3, 1).`,
    hint: 'Apply internal section formula: x = (2·4 + 1·1)/3 = 3, and y = (2·2 + 1·(-1))/3 = 1.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q23',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Analytic Geometry: Point-Slope & General Equation of a Line',
    questionText: '23. What is the equation of a line that passes through (-2, 5) and has a slope 1/2?',
    options: [
      'y = 2x + 12',
      '2y + x = 5',
      'y = (1/2)x + 5',
      '2y - x - 12 = 0'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Write the point-slope form equation of a line:
y - y₁ = m(x - x₁).

Step 2: Substitute (x₁, y₁) = (-2, 5) and m = 1/2:
y - 5 = (1/2)(x - (-2))
y - 5 = (1/2)(x + 2).

Step 3: Clear the fraction by multiplying the entire equation by 2:
2(y - 5) = x + 2
2y - 10 = x + 2.

Step 4: Rearrange all terms to standard general form Ax + By + C = 0:
2y - x - 10 - 2 = 0
2y - x - 12 = 0.`,
    hint: 'Point-slope form: y - 5 = (1/2)(x + 2). Multiply both sides by 2 to get 2y - 10 = x + 2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q24',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Trigonometry: Trigonometric Functions of General Angles',
    questionText: '24. Let θ be an angle in standard position and (x, y) be a point on the terminal side of θ, which is different from the origin. Let r be the distance from (x, y) to the origin. Then which of the following defines cos θ?',
    options: [
      'y / r',
      'r / x',
      'x / r',
      'r / y'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Recall the standard coordinate definitions of trigonometric ratios:
For any point P(x, y) on the terminal ray of an angle θ in standard position, the radial distance to the origin is:
r = √(x² + y²) > 0.

Step 2: The trigonometric functions are defined as:
• cos θ = x / r (adjacent coordinate over hypotenuse distance)
• sin θ = y / r (opposite coordinate over hypotenuse distance)
• tan θ = y / x (for x ≠ 0)
• sec θ = r / x (for x ≠ 0)

Therefore, cos θ is defined by x / r.`,
    hint: 'In rectangular coordinates, cos θ = x / r and sin θ = y / r.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q25',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Trigonometry: Graphs of Sine & Cosine Functions',
    questionText: '25. Consider the graph of a trigonometric function on the interval -π/2 ≤ x ≤ 5π/2: it passes through the origin (0, 0), reaches a maximum of +1 at x = π/2, crosses zero at x = π, reaches a minimum of -1 at x = 3π/2, and crosses zero at x = 2π. Which one of the following functions represents this graph?',
    options: [
      'y = sin x',
      'y = csc x',
      'y = cos x',
      'y = sec x'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Analyze the key points of the curve:
• At x = 0: y = 0
• At x = π/2: y = 1 (crest)
• At x = π: y = 0 (node)
• At x = 3π/2: y = -1 (trough)
• At x = 2π: y = 0 (node)

Step 2: Compare with trigonometric definitions:
• For y = cos x: cos(0) = 1, which contradicts the graph passing through (0, 0).
• For y = csc x and y = sec x: these have vertical asymptotes and do not form continuous sinusoidal waves.
• For y = sin x: sin(0) = 0, sin(π/2) = 1, sin(π) = 0, sin(3π/2) = -1, sin(2π) = 0.

This is the standard sine wave y = sin x.`,
    hint: 'The curve starts at the origin (0, 0) and reaches its maximum at π/2, which is the definition of y = sin x.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q26',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Trigonometry: Reciprocal Functions & Special Angles',
    questionText: '26. Which of the following is true about the cosecant value of the given angles?',
    options: [
      'csc 135° = -√2',
      'csc 45° = 1 / √2',
      'csc 45° = √2',
      'csc 135° = -1 / √2'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Express cosecant in terms of sine:
csc θ = 1 / sin θ.

Step 2: Evaluate csc 45°:
sin 45° = √2 / 2 = 1 / √2.
csc 45° = 1 / (1 / √2) = √2.
This confirms that Option C (csc 45° = √2) is true.

Step 3: Verify the other angles to confirm why they are false:
• For 135°: In Quadrant II, sine is positive!
  sin 135° = sin(180° - 45°) = sin 45° = √2 / 2.
  csc 135° = 1 / (√2 / 2) = +√2 (not -√2 or -1/√2).
• Option B gives 1 / √2, which is sin 45°, not csc 45°.`,
    hint: 'csc 45° = 1 / sin 45° = 1 / (1/√2) = √2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q27',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Geometry: Intersecting Chords & Circle Angle Theorems',
    questionText: '27. Consider a circle with intersecting chords producing angles where m(∠CPE) = 30° and m(∠AFE) = 55°. What is the value of m(∠AMC)?',
    options: [
      '30°',
      '50°',
      '25°',
      '60°'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Apply circle exterior angle and intercepted arc relationships:
For chords and secants intersecting outside and inside a circle:
The exterior angle at P is related to the intercepted arcs:
m(∠CPE) = (arc(AE) - arc(MC)) / 2 = 30°.
The interior angle at F is related to the sum:
m(∠AFE) = (arc(AE) + arc(MC)) / 2 = 55°.

Step 2: Solve the system for arc(MC):
Subtracting the two equations:
m(∠AFE) - m(∠CPE) = arc(MC)
55° - 30° = 25°.

Since inscribed angle m(∠AMC) corresponds directly to this intercepted arc:
m(∠AMC) = 25°.`,
    hint: 'Use the angle difference between the interior and exterior chord intersections: 55° - 30° = 25°.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q28',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Solid Geometry: Total Surface Area of a Cylinder',
    questionText: '28. What is the total surface area (in cm²) of the cylinder whose radius is 2cm and height is 7cm?',
    options: [
      '28π',
      '36π',
      '98π',
      '49π'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Write down the total surface area formula for a closed cylinder:
A_total = 2πr·h + 2πr² = 2πr(h + r)
where:
• r = 2 cm (radius of the circular base)
• h = 7 cm (height of the cylinder)

Step 2: Substitute the given dimensions:
A_total = 2π(2)(7 + 2)
A_total = 4π(9)
A_total = 36π cm².`,
    hint: 'Total surface area = 2πr(h + r) = 2π(2)(7 + 2) = 4π × 9 = 36π cm².',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q29',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Solid Geometry: Volume of a Regular Square Pyramid',
    questionText: '29. If a square pyramid has a base side of 6cm long and its lateral faces are equilateral triangles, then what is its volume (in cm³)?',
    options: [
      '3√2',
      '48',
      '36√2',
      '72'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Determine the base area B:
The base is a square with side length s = 6 cm:
B = s² = 6² = 36 cm².

Step 2: Find the slant edge length e:
Because the lateral faces are equilateral triangles, all four lateral edges equal the base side length:
e = 6 cm.

Step 3: Calculate the altitude (height h) of the pyramid:
The diagonal of the square base is d = s√2 = 6√2 cm.
The distance from the center of the base to any base vertex is:
r_base = d / 2 = 3√2 cm.
By the Pythagorean theorem applied to the apex, center, and base corner:
h² + (r_base)² = e²
h² + (3√2)² = 6²
h² + 18 = 36  ⟹  h² = 18  ⟹  h = √18 = 3√2 cm.

Step 4: Compute the volume V:
V = (1/3) · B · h = (1/3) × 36 × 3√2 = 36√2 cm³.`,
    hint: 'Base area = 36. Height h = √(6² - (3√2)²) = √18 = 3√2. Volume = (1/3)(36)(3√2) = 36√2 cm³.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q30',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Solid Geometry: Definition of a Frustum of a Cone',
    questionText: '30. Which of the following statement defines a frustum of a cone?',
    options: [
      'It is a part of a cone included between the base and a horizontal cross-section made by a plane parallel to the base.',
      'It is a part of a cone included between the vertex and a horizontal cross-section made by a plane parallel to the base.',
      'It is a part of a cone included between the base and a horizontal cross-section made by a plane.',
      'It is a part of a cone included between the vertex and a horizontal cross-section made by a plane.'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: State the geometric definition of a conical frustum:
When a cone is cut by a plane parallel to its base, the cone is partitioned into two solid sections:
1. A smaller cone containing the vertex.
2. The remaining lower portion bounded between the original base and the parallel cutting plane. This portion is called the frustum of the cone.

Step 2: Evaluate the options:
Option A specifically and correctly identifies that the frustum is the part included between the base and a cross-section made by a plane parallel to the base.`,
    hint: 'A frustum is the bottom portion of a cone between the base and a cutting plane parallel to the base.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q31',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Functions: Power Functions vs. Exponential Functions',
    questionText: '31. Which one of the following function is NOT a power function?',
    options: [
      'f(x) = √2 · x^(3/2)',
      'f(x) = π · x⁵',
      'f(x) = (√3)ˣ',
      'f(x) = x^(-3/5)'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Define a power function:
A power function is any function of the form:
f(x) = k · xʳ
where k is a non-zero real coefficient and r is a constant real exponent. In a power function, the variable x is in the BASE and the exponent is a constant number.

Step 2: Inspect each option:
• A: f(x) = √2 · x^(3/2) has base x and constant exponent 3/2 (power function).
• B: f(x) = π · x⁵ has base x and constant exponent 5 (power function).
• C: f(x) = (√3)ˣ has a constant base √3 and the variable x is in the EXPONENT. This is an EXPONENTIAL function, not a power function.
• D: f(x) = x^(-3/5) has base x and constant exponent -3/5 (power function).

Therefore, Option C is NOT a power function.`,
    hint: 'In a power function, x is the base (e.g., xⁿ). In an exponential function, x is in the exponent (e.g., aˣ).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q32',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Special Functions: Greatest Integer (Floor) Function',
    questionText: '32. Which of the following statement define the greatest integer function given by f(x) = ⌊x⌋?',
    options: [
      'It is an integer less than or greater than x.',
      'It is an integer less than or equal to x.',
      'It is the least integer greater than x.',
      'It is an integer greater than or equal to x.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Review the formal definition of the greatest integer function:
For any real number x, the greatest integer function f(x) = ⌊x⌋ (also denoted [x]) is defined as:
The largest integer that is less than or equal to x.
That is, ⌊x⌋ = max { n ∈ ℤ : n ≤ x }.

Step 2: Check examples:
• ⌊3.7⌋ = 3 (an integer less than or equal to 3.7)
• ⌊-2.4⌋ = -3 (an integer less than or equal to -2.4)
• ⌊5⌋ = 5 (an integer less than or equal to 5)

Thus, Option B ("It is an integer less than or equal to x") correctly defines the concept.`,
    hint: 'Floor/greatest integer function ⌊x⌋ yields the greatest integer less than or equal to x.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  }
];
