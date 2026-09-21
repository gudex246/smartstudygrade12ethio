import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2017_EC_PART3: Question[] = [
  {
    id: 'math-2017-q33',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Rational Expressions: Partial Fraction Decomposition',
    questionText: '33. Which one of the following expression is the correct decomposition of the rational expression (2x - 3) / (x² + x - 2)?',
    options: [
      '1/(3 - 3x) + 7/(3x + 6)',
      '1/(1 - x) + 5/(3x + 6)',
      '7/(3x + 2) - 1/(x + 1)',
      '5/(3x + 2) + 1/(x + 1)'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Factor the quadratic denominator:
x² + x - 2 = (x + 2)(x - 1).

Step 2: Set up the partial fraction decomposition:
(2x - 3) / [(x + 2)(x - 1)] = A / (x + 2) + B / (x - 1).

Step 3: Clear the denominators:
2x - 3 = A(x - 1) + B(x + 2).

Step 4: Solve for coefficients A and B using convenient substitution:
• Set x = 1:
  2(1) - 3 = A(0) + B(1 + 2)
  -1 = 3B  ⟹  B = -1/3.
• Set x = -2:
  2(-2) - 3 = A(-2 - 1) + B(0)
  -7 = -3A  ⟹  A = 7/3.

Step 5: Write out the decomposed fractions:
(7/3) / (x + 2) + (-1/3) / (x - 1)
= 7 / (3(x + 2)) - 1 / (3(x - 1))
= 7 / (3x + 6) + 1 / (3(1 - x))
= 7 / (3x + 6) + 1 / (3 - 3x)
= 1 / (3 - 3x) + 7 / (3x + 6).

This matches Option A.`,
    hint: 'Factor the denominator into (x + 2)(x - 1). Decompose into (7/3)/(x + 2) - (1/3)/(x - 1) = 7/(3x + 6) + 1/(3 - 3x).',
    difficulty: 'hard',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q34',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Rational Functions: Asymptotes, Symmetry, and Graphs',
    questionText: '34. Consider the graph of a rational function with vertical asymptotes at x = -1 and x = 1, a horizontal asymptote at y = 0, passing through the origin (0, 0), and showing odd symmetry f(-x) = -f(x). Which of the following rational functions is represented by this graph?',
    options: [
      'f(x) = x / (x² - 1)',
      'f(x) = x / (x² + 1)',
      'f(x) = x² / (x² - 1)',
      'f(x) = x² / (1 - x²)'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Check the vertical asymptotes:
Vertical asymptotes occur where the denominator is zero and the numerator is non-zero:
• For f(x) = x / (x² - 1): Denominator x² - 1 = 0  ⟹  x = ±1 (matches the graph).
• For f(x) = x / (x² + 1): x² + 1 > 0 for all real x (no real vertical asymptotes, so B is eliminated).

Step 2: Check the horizontal asymptote and behavior as x → ±∞:
• For f(x) = x / (x² - 1): Degree of numerator (1) < degree of denominator (2), so horizontal asymptote is y = 0 (matches the graph).
• For Options C and D: Degree of numerator equals degree of denominator, yielding horizontal asymptotes y = 1 and y = -1 respectively. These do not equal 0.

Step 3: Check symmetry and intercept:
• f(0) = 0 / (-1) = 0 (passes through origin).
• f(-x) = -x / ((-x)² - 1) = -x / (x² - 1) = -f(x) (odd function, origin-symmetric).

Therefore, the function is f(x) = x / (x² - 1).`,
    hint: 'Vertical asymptotes at x = ±1 require x² - 1 in the denominator, and horizontal asymptote at y = 0 requires numerator degree < denominator degree.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q35',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Matrices: Equality of Matrices & Linear Systems',
    questionText: '35. If [ [x + y, 2], [5, 3] ] = [ [7, 2], [5, x - y] ], then what is the value of x?',
    options: [
      '-5',
      '5',
      '2',
      '-2'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Apply the definition of matrix equality:
Two matrices are equal if and only if their corresponding entries in identical rows and columns are equal.

Step 2: Equate corresponding entries:
• Entry (1, 1): x + y = 7
• Entry (2, 2): x - y = 3

Step 3: Solve the system of two linear equations:
Add the two equations:
(x + y) + (x - y) = 7 + 3
2x = 10
x = 5.

(Plugging x = 5 back into x + y = 7 yields y = 2).
Thus, the value of x is 5.`,
    hint: 'Equate corresponding elements: x + y = 7 and x - y = 3. Add them together: 2x = 10  ⟹  x = 5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q36',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Linear Systems: Homogeneous vs. Non-Homogeneous Systems',
    questionText: '36. Which of the following statement is true about the given system of linear equations?',
    options: [
      '{ 2x + y = 0; x - 4y = 0 } is a non-homogeneous system.',
      '{ x + 3y = 2; 2x - 5y = 1 } is a non-homogeneous system.',
      '{ 3x - y = 1; x + 3y = 0 } is a homogeneous system.',
      '{ x + 3y = 6; 2x - 5y = 2 } is a homogeneous system.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Understand the definitions of homogeneous and non-homogeneous systems:
• A system of linear equations Ax = b is called HOMOGENEOUS if all constant terms on the right-hand side are zero (b = 0).
• A system of linear equations Ax = b is called NON-HOMOGENEOUS if at least one constant term on the right-hand side is non-zero (b ≠ 0).

Step 2: Evaluate the statements:
• A: { 2x + y = 0, x - 4y = 0 } has constants 0 and 0. It is homogeneous, so calling it non-homogeneous is FALSE.
• B: { x + 3y = 2, 2x - 5y = 1 } has constants 2 and 1 (both ≠ 0). It is non-homogeneous, so statement B is TRUE.
• C: Has constant 1 ≠ 0, so it is non-homogeneous (calling it homogeneous is FALSE).
• D: Has constants 6 and 2, so it is non-homogeneous (calling it homogeneous is FALSE).`,
    hint: 'A system is non-homogeneous if at least one constant on the right-hand side is non-zero.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q37',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Matrices: Determinant of a 3x3 Matrix & Linear Dependency',
    questionText: '37. What is the determinant of the matrix:\n[ [1/2, 1, 3/2],\n  [2, 5/2, 3],\n  [7/2, 4, 9/2] ] ?',
    options: [
      '0',
      '1/2',
      '1/8',
      '1'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Inspect the rows of the matrix:
R₁ = [1/2, 1, 3/2]
R₂ = [2, 5/2, 3]
R₃ = [7/2, 4, 9/2]

Step 2: Perform elementary row operations to test for linear dependency:
• Compute R₂ - R₁:
  [2 - 1/2, 5/2 - 1, 3 - 3/2] = [3/2, 3/2, 3/2].
• Compute R₃ - R₂:
  [7/2 - 2, 4 - 5/2, 9/2 - 3] = [3/2, 3/2, 3/2].

Step 3: Combine row differences:
Notice that (R₃ - R₂) - (R₂ - R₁) = [0, 0, 0].
This means:
R₃ - 2R₂ + R₁ = 0  ⟹  R₃ = 2R₂ - R₁.

Since one row is an exact linear combination of the other two rows, the rows are linearly dependent.
A square matrix with linearly dependent rows has a determinant equal to 0.`,
    hint: 'Notice that R₃ - R₂ = R₂ - R₁ = [3/2, 3/2, 3/2]. Since the rows form an arithmetic progression, the rows are linearly dependent and the determinant is 0.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q38',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Matrices: Inverse of a 3x3 Matrix',
    questionText: '38. Which of the following matrix is the inverse of the matrix A = [ [1, -1, 2], [1, 0, 1], [3, 1, 3] ]?',
    options: [
      '[ [1, 5, -1], [-3, 0, 1], [-4, -1, 1] ]',
      '[ [-1, 5, -1], [0, -3, 1], [1, -4, 1] ]',
      '[ [-1, 0, 1], [5, 3, 4], [1, -1, 1] ]',
      '[ [-1, 0, 1], [5, -3, -4], [-1, 1, 1] ]'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Test candidate inverse B by verifying A · B = I₃:
Let B = [ [-1, 5, -1], [0, -3, 1], [1, -4, 1] ].

Step 2: Multiply row by column:
• Row 1 of A · Col 1 of B: 1(-1) + (-1)(0) + 2(1) = -1 + 0 + 2 = 1.
• Row 1 of A · Col 2 of B: 1(5) + (-1)(-3) + 2(-4) = 5 + 3 - 8 = 0.
• Row 1 of A · Col 3 of B: 1(-1) + (-1)(1) + 2(1) = -1 - 1 + 2 = 0.

• Row 2 of A · Col 1 of B: 1(-1) + 0(0) + 1(1) = -1 + 1 = 0.
• Row 2 of A · Col 2 of B: 1(5) + 0(-3) + 1(-4) = 5 - 4 = 1.
• Row 2 of A · Col 3 of B: 1(-1) + 0(1) + 1(1) = -1 + 1 = 0.

• Row 3 of A · Col 1 of B: 3(-1) + 1(0) + 3(1) = -3 + 3 = 0.
• Row 3 of A · Col 2 of B: 3(5) + 1(-3) + 3(-4) = 15 - 3 - 12 = 0.
• Row 3 of A · Col 3 of B: 3(-1) + 1(1) + 3(1) = -3 + 1 + 3 = 1.

The product is the 3×3 identity matrix I₃:
[ [1, 0, 0], [0, 1, 0], [0, 0, 1] ].

Therefore, the inverse matrix is Option B.`,
    hint: 'Multiply matrix A by option B: the product produces the 3×3 identity matrix I₃.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q39',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Vectors: Distinction Between Scalars and Vectors',
    questionText: '39. Which of the following statement describes the difference between scalar and vector quantities?',
    options: [
      'Physical quantities that only have magnitude are scalars, while that have both magnitude and direction are vectors.',
      'Physical quantities that only have magnitude are vectors, while that have both magnitude and direction are scalars.',
      'Physical quantities that only have direction are vectors, while that have both magnitude and direction are scalars.',
      'Physical quantities that only have direction are scalars, while that have only magnitude are vectors.'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: State the definition of a scalar quantity:
A scalar is a physical quantity that is fully characterized by a numerical value (magnitude) and its corresponding unit of measurement (for example: distance, speed, mass, time, temperature).

Step 2: State the definition of a vector quantity:
A vector is a physical quantity that has both magnitude and a spatial direction, obeying vector addition rules (for example: displacement, velocity, acceleration, force).

Therefore, Option A provides the exact correct distinction.`,
    hint: 'Scalars have magnitude only; vectors have both magnitude and direction.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q40',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Statistics: Quantitative vs. Qualitative Data Types',
    questionText: '40. Which of the following statement is true about types of data?',
    options: [
      'The height of students in a class is a qualitative data.',
      'The weight of students in class is a qualitative data.',
      'The gender of students in a class is a quantitative data.',
      'The age of students in a class is a quantitative data.'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Distinguish between data types:
• Quantitative data: Data expressed numerically that results from counting or measuring (e.g., age, height, weight, test score).
• Qualitative (categorical) data: Non-numerical data consisting of attributes, categories, or labels (e.g., gender, eye color, nationality).

Step 2: Analyze each option:
• A: False. Height is numerical (continuous measurement), hence quantitative.
• B: False. Weight is numerical, hence quantitative.
• C: False. Gender is categorical (male/female), hence qualitative.
• D: True. Age is numerical (discrete/continuous measurement), hence quantitative data.`,
    hint: 'Quantitative data deals with numbers that can be measured or counted, such as age.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q41',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Statistics: Grouped Frequency Distribution & Class Midpoints',
    questionText: '41. Consider the following grouped frequency distribution table:\nClasses (X): [0-9: f=4], [10-19: f=3], [20-29: f=6], [30-39: f=5], [40-49: f=2]\nThen what is the class midpoint of the fourth class?',
    options: [
      '34.5',
      '35.5',
      '24.5',
      '55.5'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Identify the fourth class interval from the table:
1st class: 0 - 9
2nd class: 10 - 19
3rd class: 20 - 29
4th class: 30 - 39

Step 2: Calculate the class midpoint:
Midpoint = (Lower Class Limit + Upper Class Limit) / 2
Midpoint = (30 + 39) / 2 = 69 / 2 = 34.5.

Therefore, the class midpoint of the fourth class is 34.5.`,
    hint: 'The 4th class is 30–39. Midpoint = (30 + 39) / 2 = 69 / 2 = 34.5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q42',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Statistics: Mean of Grouped Frequency Distribution',
    questionText: '42. The table given below shows the ages distribution of children in a small village in years:\nAge interval: [2-4: f=4], [5-7: f=1], [8-10: f=2], [11-13: f=3]\nThen what is the mean age of the children (in years)?',
    options: [
      '6.9',
      '7.5',
      '7.2',
      '6.6'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Find the midpoint (xᵢ) for each class interval:
• For 2 - 4: x₁ = (2 + 4) / 2 = 3
• For 5 - 7: x₂ = (5 + 7) / 2 = 6
• For 8 - 10: x₃ = (8 + 10) / 2 = 9
• For 11 - 13: x₄ = (11 + 13) / 2 = 12

Step 2: Calculate the product of frequency and midpoint (fᵢ · xᵢ):
• f₁ · x₁ = 4 × 3 = 12
• f₂ · x₂ = 1 × 6 = 6
• f₃ · x₃ = 2 × 9 = 18
• f₄ · x₄ = 3 × 12 = 36

Step 3: Sum the frequencies and products:
• Total frequency n = ∑f = 4 + 1 + 2 + 3 = 10.
• Total product ∑(f·x) = 12 + 6 + 18 + 36 = 72.

Step 4: Compute the mean:
Mean = ∑(f·x) / ∑f = 72 / 10 = 7.2 years.`,
    hint: 'Multiply each class midpoint by its frequency (3×4=12, 6×1=6, 9×2=18, 12×3=36), sum them to 72, and divide by total frequency 10 to get 7.2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q43',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Statistics: Multimodal Frequency Distributions',
    questionText: '43. Which one of the following distribution is multimodal?',
    options: [
      '6, 10, 9, 6, 10, 4',
      '8, 7, 11, 13, 17, 9, 8, 7, 6, 11',
      '12, 13, 26, 15, 25, 38, 28, 27, 32',
      '18, 14, 15, 10, 11, 3, 18, 12'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Understand modes in statistics:
• A mode is the value that appears with the greatest frequency.
• Unimodal: Exactly one mode.
• Bimodal: Exactly two modes with the same maximum frequency.
• Multimodal: More than two modes (e.g., trimodal).

Step 2: Count frequencies for each distribution:
• A: {4, 6, 6, 9, 10, 10} ⟹ Modes are 6 and 10 (bimodal).
• B: {6, 7, 7, 8, 8, 9, 11, 11, 13, 17} ⟹ The numbers 7, 8, and 11 all appear 2 times each (maximum frequency). With 3 modes, this distribution is trimodal (multimodal).
• C: All values appear once (no mode).
• D: Value 18 appears twice, all others once (unimodal).

Therefore, distribution B is multimodal.`,
    hint: 'Count the repetitions in option B: 7, 8, and 11 all appear twice, making it a trimodal (multimodal) dataset.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q44',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Combinatorics: Permutations vs. Combinations',
    questionText: '44. Suppose that we have 4 objects chosen 3 at a time. Then which of the following statement is true?',
    options: [
      'The number of combinations is 24.',
      'The number of permutations is 24.',
      'The number of permutations is 6.',
      'The number of combinations is 6.'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Calculate the number of permutations of 4 objects taken 3 at a time:
P(n, r) = n! / (n - r)!
P(4, 3) = 4! / (4 - 3)! = 24 / 1! = 24.

Step 2: Calculate the number of combinations of 4 objects taken 3 at a time:
C(n, r) = n! / [r! · (n - r)!]
C(4, 3) = 4! / [3! · 1!] = 24 / 6 = 4.

Step 3: Evaluate the choices:
• The number of combinations is 4 (not 24 or 6).
• The number of permutations is 24 (Option B is true).`,
    hint: 'Permutations P(4, 3) = 4 × 3 × 2 = 24. Combinations C(4, 3) = 4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q45',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Probability: Definition of Favorable Outcomes',
    questionText: '45. Which one of the following statements defines favorable outcomes in a random experiment?',
    options: [
      'The outcomes containing all sample elements.',
      'The outcomes containing only one sample element.',
      'The outcomes that have equal chance of being chosen.',
      'The outcomes that insure the occurrence of a particular result.'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Define favorable outcomes in probability theory:
In a random experiment, an event E is a specified subset of the sample space S.
The outcomes belonging to event E that ensure or satisfy the occurrence of that particular specified condition are called favorable outcomes.

Step 2: Examine the alternatives:
• A describes the entire sample space S.
• B describes a simple event (elementary outcome).
• C describes equally likely outcomes.
• D describes favorable outcomes (those that ensure the occurrence of the particular result/event).`,
    hint: 'Favorable outcomes are the specific experimental outcomes that result in the event of interest occurring.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2017-q46',
    subject: 'Mathematics',
    year: '2017 E.C.',
    topic: 'Sequences: Definition of Geometric Progression',
    questionText: '46. Which of the following statement defines geometric progression?',
    options: [
      'It is a sequence in which the difference between consecutive terms is a positive constant.',
      'It is a sequence in which the difference between consecutive terms is a non-zero constant.',
      'It is a sequence in which the ratio between consecutive terms is a positive constant.',
      'It is a sequence in which the ratio between consecutive terms is a non-zero constant.'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: State the formal definition of a Geometric Progression (GP):
A geometric progression is a sequence of non-zero numbers in which each term after the first is obtained by multiplying the preceding term by a fixed non-zero constant r (known as the common ratio):
aₙ₊₁ / aₙ = r (where r ≠ 0).

Step 2: Why not just "positive constant"?
The common ratio can be negative (e.g., 2, -4, 8, -16, ... has r = -2), which is still a valid geometric progression. Therefore, the ratio must be a non-zero constant, not restricted to positive numbers.

Hence, statement D is the correct and comprehensive definition.`,
    hint: 'A geometric progression has a constant ratio r between consecutive terms, where r can be positive or negative (non-zero constant).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-18',
    createdBy: ADMIN_EMAIL
  }
];
