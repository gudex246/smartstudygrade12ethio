import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2016_EC_PART2: Question[] = [
  {
    id: 'math-2016-q16',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Trigonometry: Trigonometric Functions of General Angles',
    questionText: '16. Let θ be an angle in standard position and P(-3, 4) be a point on the terminal side of θ. Which one of the following is true about the corresponding trigonometric functions?',
    options: [
      'cos θ = 4/5',
      'sin θ = -4/5',
      'sin θ = 3/5',
      'cos θ = -3/5'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Identify the coordinates of the point P:
x = -3, y = 4.

Step 2: Calculate the distance r from the origin:
r = √(x² + y²) = √((-3)² + 4²) = √(9 + 16) = √25 = 5.

Step 3: Evaluate the trigonometric ratios:
• cos θ = x / r = -3 / 5
• sin θ = y / r = 4 / 5
• tan θ = y / x = -4 / 3

Therefore, cos θ = -3/5 is true.`,
    hint: 'r = √((-3)² + 4²) = 5. Then cos θ = x / r = -3/5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q17',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Vectors: Position Vector from Two Points',
    questionText: '17. Which one of the following is the position vector of the vector with initial point A(1, -1) and terminal point B(2, -3)?',
    options: [
      'i - 2j',
      'i - 4j',
      '3i - 4j',
      '3i + 4j'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Formula for vector AB given initial point A(x₁, y₁) and terminal point B(x₂, y₂):
Vector AB = (x₂ - x₁)i + (y₂ - y₁)j

Step 2: Substitute the coordinates A(1, -1) and B(2, -3):
Vector AB = (2 - 1)i + (-3 - (-1))j
Vector AB = 1i + (-3 + 1)j
Vector AB = i - 2j`,
    hint: 'Vector AB = (2 - 1)i + (-3 - (-1))j = i - 2j.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q18',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Sets: Inclusion-Exclusion Principle',
    questionText: '18. Let A and B be two sets that contain 15 and 17 elements respectively. If A ∩ B contains 10 elements, what is the number of elements in A ∪ B?',
    options: [
      '32',
      '12',
      '42',
      '22'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Use the principle of inclusion-exclusion for two sets:
n(A ∪ B) = n(A) + n(B) - n(A ∩ B)

Step 2: Substitute the given values:
n(A) = 15
n(B) = 17
n(A ∩ B) = 10

n(A ∪ B) = 15 + 17 - 10
n(A ∪ B) = 32 - 10 = 22`,
    hint: 'n(A ∪ B) = 15 + 17 - 10 = 22.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q19',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Statistics: Sampling Techniques',
    questionText: '19. Which one of the following is a simple random sampling?',
    options: [
      'Selecting a group randomly from groups formed by dividing the population into groups.',
      'First divide a city into ten groups and choose the secondary school principals from the randomly selected 3 groups.',
      'Selecting five students from grade 12 students of the same school randomly.',
      'First the population is divided into homogenous groups and a sample is selected from each homogenous group.'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Define Simple Random Sampling (SRS):
In simple random sampling, every individual member in the target population has an equal and independent probability of being chosen directly without dividing into strata or clusters first.

Step 2: Evaluate the options:
• Option A describes cluster sampling.
• Option B describes multi-stage cluster sampling.
• Option C describes simple random sampling, where students are chosen directly at random with equal probability from the target grade 12 population.
• Option D describes stratified random sampling.

Therefore, Option C is simple random sampling.`,
    hint: 'Simple random sampling directly selects individuals randomly from the target population without grouping.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q20',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Matrices: 3x3 Determinant',
    questionText: '20. Which one of the following numbers is the determinant of the matrix M = [[1, 2, 3], [4, 5, 6], [7, 8, 10]]?',
    options: [
      '3',
      '6',
      '-6',
      '-3'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Expand the determinant along the first row:
det(M) = 1 * det([[5, 6], [8, 10]]) - 2 * det([[4, 6], [7, 10]]) + 3 * det([[4, 5], [7, 8]])

Step 2: Compute each 2x2 minor determinant:
• det([[5, 6], [8, 10]]) = (5 * 10) - (6 * 8) = 50 - 48 = 2
• det([[4, 6], [7, 10]]) = (4 * 10) - (6 * 7) = 40 - 42 = -2
• det([[4, 5], [7, 8]]) = (4 * 8) - (5 * 7) = 32 - 35 = -3

Step 3: Combine the results:
det(M) = 1(2) - 2(-2) + 3(-3)
det(M) = 2 + 4 - 9 = -3`,
    hint: 'det(M) = 1(50 - 48) - 2(40 - 42) + 3(32 - 35) = 2 + 4 - 9 = -3.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q21',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Functions: Inverse Functions',
    questionText: '21. Which one of the following pairs of functions is an inverse of each other in their respective domains?',
    options: [
      'f(x) = (x + 1)/(x - 1) and g(x) = (x - 1)/(x + 1)',
      'f(x) = x⁵ and g(x) = 1/x⁵',
      'f(x) = x³ - 1 and g(x) = ∛(x + 1)',
      'f(x) = √(x + 3) and g(x) = x² - 9'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Find the inverse of f(x) = x³ - 1:
Let y = x³ - 1
Solve for x in terms of y:
x³ = y + 1
x = ∛(y + 1)

Step 2: Switch variables to get g(x):
g(x) = ∛(x + 1)

Step 3: Verify with composition:
f(g(x)) = (∛(x + 1))³ - 1 = x + 1 - 1 = x
g(f(x)) = ∛((x³ - 1) + 1) = ∛(x³) = x

Therefore, f(x) = x³ - 1 and g(x) = ∛(x + 1) are inverse functions.`,
    hint: 'Set y = x³ - 1 => x = ∛(y + 1). Hence g(x) = ∛(x + 1).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q22',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Coordinate Geometry: Section Formula',
    questionText: '22. Which one of the following ordered pairs of numbers gives the coordinates of the point that divides a line segment with end points A(1, 1) and B(-6, 8) in the ratio of 3:4?',
    options: [
      '(-2, 4)',
      '(-2, -4)',
      '(2, 4)',
      '(2, -4)'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Use the section formula for internal division in ratio m : n = 3 : 4:
x = (m*x₂ + n*x₁) / (m + n)
y = (m*y₂ + n*y₁) / (m + n)

Step 2: Substitute the coordinates A(1, 1), B(-6, 8), m = 3, n = 4:
x = (3 * (-6) + 4 * 1) / (3 + 4) = (-18 + 4) / 7 = -14 / 7 = -2
y = (3 * 8 + 4 * 1) / (3 + 4) = (24 + 4) / 7 = 28 / 7 = 4

The coordinates of the point are (-2, 4).`,
    hint: 'x = (3(-6) + 4(1))/7 = -2 and y = (3(8) + 4(1))/7 = 4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q23',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Statistics: Primary vs Secondary Data',
    questionText: '23. Which one of the following is a primary data?',
    options: [
      'The data obtained from a document prepared by the MOE regarding the achievements of students in National Examination.',
      'The data obtained by reading a journal regarding the opinion of the society about holidays.',
      'The data obtained by measuring the weights of students in a certain school.',
      'The data obtained from a chart prepared by Ministry of Health regarding the spread of HIV/AIDS.'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Define primary and secondary data:
• Primary data: Original data collected firsthand by the investigator specifically for the purpose of the study (e.g., direct measurements, interviews, experiments).
• Secondary data: Data collected and published previously by another entity or organization (e.g., reports, published journals, ministry charts).

Step 2: Evaluate the options:
• Options A, B, and D are secondary data taken from existing documents, journals, and reports.
• Option C involves direct, firsthand measurement of student weights, which is primary data.`,
    hint: 'Primary data is collected directly by the researcher via direct observation, measurement, or survey.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q24',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Exponents and Radicals: Exponential Equations',
    questionText: '24. Which one of the following is the solution set of the equation (√16)^(2x + 1) = (∛4096)^(3x - 5)?',
    options: [
      '{11/4}',
      '{9/2}',
      '{11/2}',
      '{9/4}'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Simplify the base values:
• √16 = 4 = 2²
• 4096 = 2¹² = 16³  =>  ∛4096 = 16 = 2⁴

Step 2: Express both sides in base 2 (or base 4):
Left side: (4)^(2x + 1) = (2²)^(2x + 1) = 2^(4x + 2)
Right side: (16)^(3x - 5) = (2⁴)^(3x - 5) = 2^(12x - 20)

Step 3: Equate the exponents:
4x + 2 = 12x - 20
2 + 20 = 12x - 4x
22 = 8x
x = 22 / 8 = 11 / 4

Therefore, the solution set is {11/4}.`,
    hint: 'Write √16 = 4 and ∛4096 = 16 = 4². Then 4^(2x + 1) = 4^(6x - 10) => 2x + 1 = 6x - 10 => x = 11/4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q25',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Geometry: Interior Angles and Lines of Symmetry of Regular Polygons',
    questionText: '25. If the measure of each interior angle of a regular polygon is 135°, then which one of the following is the number of lines of symmetry of the polygon?',
    options: [
      '8',
      '6',
      '9',
      '7'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Find the measure of each exterior angle:
Exterior angle = 180° - Interior angle = 180° - 135° = 45°

Step 2: Determine the number of sides (n) of the regular polygon:
n = 360° / Exterior angle = 360° / 45° = 8 sides (a regular octagon).

Step 3: Determine the number of lines of symmetry:
A regular polygon with n sides has exactly n lines of symmetry.
For a regular octagon (n = 8), there are 8 lines of symmetry.`,
    hint: 'Exterior angle = 180° - 135° = 45°. Number of sides = 360° / 45° = 8, so lines of symmetry = 8.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q26',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Functions: Graph of Exponential Function',
    questionText: '26. A graph of an exponential function passes through the points (0, -1), (1, 0), and (2, 2) with horizontal asymptote y = -2. Which one of the following functions represents this graph?',
    options: [
      'f(x) = (1/2)^x - 2',
      'f(x) = (1/2)^(x - 2)',
      'f(x) = 2^x - 2',
      'f(x) = 2^(x - 2)'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Test points on f(x) = 2^x - 2:
• For x = 0: f(0) = 2⁰ - 2 = 1 - 2 = -1 (Matches (0, -1))
• For x = 1: f(1) = 2¹ - 2 = 2 - 2 = 0 (Matches (1, 0))
• For x = 2: f(2) = 2² - 2 = 4 - 2 = 2 (Matches (2, 2))

Step 2: Check the horizontal asymptote:
As x -> -∞, 2^x -> 0, so f(x) -> -2.
The horizontal asymptote is y = -2.

Therefore, the function is f(x) = 2^x - 2.`,
    hint: 'f(0) = 2⁰ - 2 = -1, f(1) = 2¹ - 2 = 0, and f(2) = 2² - 2 = 2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q27',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Geometry: Perimeter of a Regular Hexagon',
    questionText: '27. What is the perimeter of a regular hexagon of radius 6 cm?',
    options: [
      '36√3 cm',
      '18 cm',
      '36 cm',
      '18√3 cm'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Relate the radius to the side length of a regular hexagon:
A regular hexagon is composed of 6 congruent equilateral triangles. Therefore, the side length (s) is equal to the radius (r) of the circumscribed circle:
s = r = 6 cm

Step 2: Compute the perimeter:
Perimeter = 6 * s = 6 * 6 cm = 36 cm`,
    hint: 'For a regular hexagon, side length equals circumradius: s = 6 cm. Perimeter = 6 * 6 = 36 cm.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q28',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Statistics: Quantitative vs Qualitative Data',
    questionText: '28. Which one of the following is a quantitative data?',
    options: [
      'Checking the quality of a new product.',
      'Determining the tastes of foods in a restaurant.',
      'Identifying the social status of individuals.',
      'Measuring the heights of each students in the given class.'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Define quantitative data:
Quantitative data represents numerical values resulting from counts or measurements (e.g., length, weight, height, temperature).

Step 2: Evaluate the options:
• Quality, taste, and social status are qualitative (categorical) attributes.
• Measuring heights produces numeric measurements on a continuous numerical scale.

Therefore, measuring the heights of students is quantitative data.`,
    hint: 'Quantitative data consists of numerical measurements.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q29',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Calculus: Definition of Indefinite Integral',
    questionText: '29. Which one of the following is true about the integral of a function f(x) with respect to a variable x?',
    options: [
      '∫ f(x) dx is the set of all derivatives of f.',
      '∫ f\'(x) dx is the set of all derivatives of f.',
      '∫ f(x) dx is the set of all anti-derivatives of f.',
      '∫ f\'(x) dx is the set of all anti-derivatives of f.'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Define the indefinite integral:
The indefinite integral of a function f(x) with respect to x, written as ∫ f(x) dx, represents the general family (set) of all antiderivatives F(x) + C such that F'(x) = f(x).

Therefore, "∫ f(x) dx is the set of all anti-derivatives of f" is the correct definition.`,
    hint: 'Integration is the reverse process of differentiation; ∫ f(x) dx gives all antiderivatives.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2016-q30',
    subject: 'Mathematics',
    year: '2016 E.C.',
    topic: 'Financial Mathematics: Reasons for Saving',
    questionText: '30. Which one of the following is NOT a valid reason for saving?',
    options: [
      'For the time of retirement',
      'For vacation',
      'To maximize interest',
      'For betting in football'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Understand sound financial savings goals:
• Saving for retirement provides financial security in old age.
• Saving for a vacation plans for planned future recreational expenditure without debt.
• Saving to maximize interest or returns is an investment goal.

Step 2: Identify risky speculative expenditure:
• Betting/gambling on sports is speculative, carries negative expected returns, and represents consumption/risk rather than a disciplined reason for saving.

Therefore, betting in football is NOT a valid reason for saving.`,
    hint: 'Saving is disciplined wealth preservation and growth, whereas gambling involves financial risk and loss.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
