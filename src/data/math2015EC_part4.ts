import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2015_EC_PART4: Question[] = [
  {
    id: 'math-2015-46',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Applications of Integration (Area Under Curve)',
    questionText: 'What is the area of the region bounded by the graph of f(x) = x² - 4 and the x-axis in square units?',
    options: [
      '16',
      '32',
      '16/3',
      '32/3'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Find the x-intercepts by solving x² - 4 = 0:
x² = 4  ⇒  x = -2 and x = 2.

Step 2: Note the orientation of the curve:
Between x = -2 and x = 2, the parabola lies on or below the x-axis (y ≤ 0).

Step 3: Compute the bounded area:
Area = ∫_(-2)² (0 - (x² - 4)) dx
Area = ∫_(-2)² (4 - x²) dx
Area = [4x - x³/3]_(-2)²
Area = [4(2) - (2)³/3] - [4(-2) - (-2)³/3]
Area = [8 - 8/3] - [-8 + 8/3]
Area = 16/3 - (-16/3) = 32/3 square units.`,
    hint: 'Integrate (4 - x²) from -2 to 2: [4x - x³/3] yields 32/3 square units.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-47',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Fundamental Theorem of Calculus',
    questionText: 'Let f be a continuous function on [0, 1] and let F be an antiderivative of f with F(1) = -11 and F(0) = 11. Then ∫₀¹ f(x) dx is equal to',
    options: [
      '-22',
      '11',
      '0',
      '22'
    ],
    correctOptionIndex: 0,
    explanation: `By Part 2 of the Fundamental Theorem of Calculus (FTC):
∫₀¹ f(x) dx = F(1) - F(0)
= -11 - 11 = -22.`,
    hint: 'Apply the Fundamental Theorem of Calculus: ∫_a^b f(x) dx = F(b) - F(a) = -11 - 11 = -22.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-48',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: '3D Geometry (Coordinate Planes)',
    questionText: 'Which of the following set of equations defines the xz-plane in ℝ³ space?',
    options: [
      '{(x, y, z) | x, y, z ∈ ℝ and x = z = 0}',
      '{(x, y, z) | x, y, z ∈ ℝ and y = 0}',
      '{(x, y, z) | x, y, z ∈ ℝ and x = 0}',
      '{(x, y, z) | x, y, z ∈ ℝ and z = 0}'
    ],
    correctOptionIndex: 1,
    explanation: `In three-dimensional Cartesian space (ℝ³), the xz-coordinate plane contains all points where the perpendicular distance to the plane along the y-axis is zero.
Therefore, the defining equation is y = 0:
{(x, y, z) | x, y, z ∈ ℝ and y = 0}.`,
    hint: 'The xz-plane is characterized by having its y-coordinate equal to zero (y = 0).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-49',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: '3D Coordinate Geometry (Midpoint Formula)',
    questionText: 'What are the coordinates of the midpoint of the line segment joining (-1, 1, 3) and (-1, 5, 7) in 3D space?',
    options: [
      '(-1, 3, 9/2)',
      '(1, 4, 3)',
      '(-1, 1, -2)',
      '(-1, 3, 5)'
    ],
    correctOptionIndex: 3,
    explanation: `Using the 3D midpoint coordinate formula:
M = ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)
M = ((-1 + (-1))/2, (1 + 5)/2, (3 + 7)/2)
M = (-2/2, 6/2, 10/2) = (-1, 3, 5).`,
    hint: 'Average each coordinate: x = -1, y = 3, z = 5.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-50',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Trigonometric Graphs (Sign & Intervals)',
    questionText: 'Which of the following statements is true about the graph of y = 3 sin(4x)?',
    options: [
      'The graph completes one cycle on the interval [0, π].',
      'The graph lies below the x-axis on (π/4, π/2).',
      'The graph completes one cycle on the interval [0, π/4].',
      'The graph rises up on [0, π/4].'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Determine the fundamental period:
T = 2π / 4 = π/2.

Step 2: Analyze the interval (π/4, π/2):
When x ∈ (π/4, π/2), the angle 4x ranges across (π, 2π).
In the range (π, 2π) (Quadrants III and IV), sin(4x) is strictly negative.
Thus, y = 3 sin(4x) < 0 throughout (π/4, π/2), meaning the graph lies entirely below the x-axis.`,
    hint: 'For x in (π/4, π/2), the angle 4x lies in (π, 2π) where sine is negative.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-51',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Trigonometric Functions (Periodicity)',
    questionText: 'Which of the following functions has a graph that completes one full cycle on [-π/4, 11π/4]?',
    options: [
      'f(x) = 3 sin(3x + π/6)',
      'f(x) = 3 sin((4/3)x + π/2)',
      'f(x) = 2 sin((2/3)x + π/6)',
      'f(x) = 2 sin(2x - π/6)'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Calculate the length of the given interval:
Δx = 11π/4 - (-π/4) = 12π/4 = 3π.
Therefore, the required period is T = 3π.

Step 2: Find the angular frequency B from the period formula:
T = 2π / B
3π = 2π / B  ⇒  B = 2/3.

Step 3: Identify the matching option:
f(x) = 2 sin((2/3)x + π/6) has coefficient B = 2/3 and period 3π.`,
    hint: 'Interval width is 3π. Solve 2π / B = 3π  ⇒  B = 2/3.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-52',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Determinants & Elementary Row Operations',
    questionText: 'Let A be a square matrix of order n with det(A) = 10. Let B be obtained by multiplying one row of A by 2, and let C be obtained by adding one row of A to another row of A. What are det(B) and det(C) respectively?',
    options: [
      '20 and 10',
      '20 and 0',
      '10 and 20',
      '10 and 10'
    ],
    correctOptionIndex: 0,
    explanation: `By fundamental determinant theorems:
1. Scaling one row by constant k multiplies the determinant by k:
   det(B) = 2 · det(A) = 2 · 10 = 20.

2. Adding a multiple of one row to another row leaves the determinant completely unchanged:
   det(C) = det(A) = 10.

Therefore, det(B) = 20 and det(C) = 10.`,
    hint: 'Multiplying one row by 2 doubles the determinant; adding one row to another does not change the determinant.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-53',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Systems of Linear Equations',
    questionText: 'What is the solution set of the linear system:\n2x - y + 3z = 1\nx + y + 3z = 5\nx - y + z = -1?',
    options: [
      '{(-4 - 2k, k, 2 - k) : k ∈ ℝ}',
      '{(k + 1, 2k, k - 1) : k ∈ ℝ}',
      '{(2 - 2k, 3 - k, k) : k ∈ ℝ}',
      '{(k, k + 1, k - 1) : k ∈ ℝ}'
    ],
    correctOptionIndex: 2,
    explanation: `Label the equations:
(1) 2x - y + 3z = 1
(2) x + y + 3z = 5
(3) x - y + z = -1

Step 1: Subtract (3) from (1):
(2x - y + 3z) - (x - y + z) = 1 - (-1)
x + 2z = 2  ⇒  x = 2 - 2z.

Step 2: Subtract (3) from (2):
(x + y + 3z) - (x - y + z) = 5 - (-1)
2y + 2z = 6  ⇒  y + z = 3  ⇒  y = 3 - z.

Step 3: Parameterize by setting z = k (where k ∈ ℝ):
(x, y, z) = (2 - 2k, 3 - k, k).`,
    hint: 'Eliminate variables to express x and y in terms of z: x = 2 - 2z and y = 3 - z.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-54',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Complex Numbers (Properties)',
    questionText: 'Let z₁, z₂, and z₃ be arbitrary complex numbers. Which of the following is NOT necessarily true?',
    options: [
      'z₁ - (z₂ + z₃) = (z₁ - z₂) - z₃',
      'z₁ - (z₂ - z₃) = (z₁ - z₂) - z₃',
      '(z₁ · z₂) · z₃ = (z₂ · z₁) · z₃',
      '(z₁ · z₂) · z₃ = z₁ · (z₂ · z₃)'
    ],
    correctOptionIndex: 1,
    explanation: `Complex subtraction is NOT associative:
• Left-hand side: z₁ - (z₂ - z₃) = z₁ - z₂ + z₃
• Right-hand side: (z₁ - z₂) - z₃ = z₁ - z₂ - z₃

These two expressions differ by 2z₃ and are only equal if z₃ = 0. Hence, statement B is NOT generally true.`,
    hint: 'Subtraction is not associative: z₁ - (z₂ - z₃) = z₁ - z₂ + z₃ ≠ (z₁ - z₂) - z₃.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-55',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Complex Numbers (Argand Plane)',
    questionText: 'Which complex number corresponds to the point (-3, -1) in the Argand plane?',
    options: [
      '-3 + i',
      '3 + i',
      '-1 - 3i',
      '-3 - i'
    ],
    correctOptionIndex: 3,
    explanation: `In the Argand complex plane:
A point (x, y) represents the complex number z = x + yi, where x = Re(z) and y = Im(z).
For point (-3, -1):
z = -3 + (-1)i = -3 - i.`,
    hint: 'Point (x, y) in the Argand plane corresponds to x + iy = -3 - i.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-56',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Geometric Transformations (Translations)',
    questionText: 'If a translation T maps point (-1, 1) to (3, 2), what is the image equation of the circle x² + y² - 2x + 4y + 1 = 0 under T?',
    options: [
      '(x - 3)² + (y - 3)² = 4',
      '(x - 2)² + (y + 3)² = 4',
      '(x - 5)² + (y + 1)² = 4',
      '(x + 3)² + (y + 3)² = 4'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Compute translation shift vector v = (a, b):
v = (3 - (-1), 2 - 1) = (4, 1).

Step 2: Find center and radius of the original circle:
(x² - 2x + 1) + (y² + 4y + 4) = -1 + 1 + 4
(x - 1)² + (y + 2)² = 4
Original center C = (1, -2), radius r = 2.

Step 3: Translate the center by v:
C' = (1 + 4, -2 + 1) = (5, -1).

Step 4: Formulate the image circle equation (radius unchanged):
(x - 5)² + (y - (-1))² = 4
(x - 5)² + (y + 1)² = 4.`,
    hint: 'Find translation vector (4, 1), and translate the center from (1, -2) to (5, -1).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-57',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Vectors (Linear Combinations)',
    questionText: 'Let u = (-1, 6) and v = (2, 4) be 2D vectors. What is the vector 4u - 3v?',
    options: [
      '(-10, 12)',
      '(-10, 11)',
      '(-4, 24)',
      '(-15, 18)'
    ],
    correctOptionIndex: 0,
    explanation: `Perform scalar multiplication and vector subtraction:
4u = 4(-1, 6) = (-4, 24)
3v = 3(2, 4) = (6, 12)

4u - 3v = (-4 - 6, 24 - 12) = (-10, 12).`,
    hint: 'Compute component-wise: 4(-1) - 3(2) = -10, and 4(6) - 3(4) = 12.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-58',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Applications of Derivatives (Related Rates)',
    questionText: 'Water is running into an inverted conical tank (vertex pointed down) at a constant rate of 6π cm³/sec. The cone has height 10 cm and base radius 5 cm. How fast is the water level rising when the water is 2 cm deep?',
    options: [
      '(4/π) cm/sec',
      '6 cm/sec',
      '4 cm/sec',
      '(6/π) cm/sec'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Relate radius r and water depth h using similar triangles:
r / h = R / H = 5 / 10 = 1/2  ⇒  r = h / 2.

Step 2: Express volume V purely in terms of depth h:
V = (1/3) · π · r² · h
V = (1/3) · π · (h/2)² · h = (π/12) · h³.

Step 3: Differentiate with respect to time t:
dV/dt = (π/12) · 3h² · (dh/dt) = (π · h² / 4) · (dh/dt).

Step 4: Substitute dV/dt = 6π and h = 2 cm:
6π = (π · 2² / 4) · (dh/dt)
6π = π · (dh/dt)  ⇒  dh/dt = 6 cm/sec.`,
    hint: 'Use V = (π/12)h³ and dV/dt = (π · h²/4)(dh/dt). For h = 2: 6π = π · (dh/dt)  ⇒  dh/dt = 6 cm/s.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-59',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Differential & Integral Calculus Rules',
    questionText: 'Let F be an antiderivative of f. Which of the following is NOT true about F and f?',
    options: [
      'd/dx [∫ f(x) dx] = f(x)',
      'F\'(x) = f(x)',
      '∫ F(x) dx = f(x) + c',
      '∫ [d/dx f(x)] dx = f(x) + c'
    ],
    correctOptionIndex: 2,
    explanation: `By definition:
• F is an antiderivative of f, which means F'(x) = f(x) and ∫ f(x) dx = F(x) + c.
• Option C asserts that ∫ F(x) dx = f(x) + c, which is FALSE because integrating F(x) yields a second-order antiderivative, not the derivative f(x).`,
    hint: 'Integrating F(x) yields the second antiderivative, not f(x).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-60',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Calculus (Parallel Tangent Lines)',
    questionText: 'Let f(x) = 1/√x and g(x) = 2 - (1/6)x³. For what value of x > 0 do the tangent lines to the graphs of f and g have equal slopes?',
    options: [
      '√3/2',
      '1',
      '4',
      '1/4'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Compute derivatives (tangent slopes):
• f(x) = x^(-1/2)  ⇒  f'(x) = -1/2 · x^(-3/2)
• g(x) = 2 - (1/6)x³  ⇒  g'(x) = -(1/6) · 3x² = -1/2 · x²

Step 2: Equate the two slopes f'(x) = g'(x):
-1/2 · x^(-3/2) = -1/2 · x²
x^(-3/2) = x²
1 = x² · x^(3/2) = x^(2 + 3/2) = x^(7/2)
x = 1^(2/7) = 1.`,
    hint: 'Set derivatives equal: -(1/2)x^(-3/2) = -(1/2)x²  ⇒  x^(7/2) = 1  ⇒  x = 1.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-61',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Calculus (Mean Value Theorem)',
    questionText: 'What is the value of c in the open interval (0, 1) that satisfies the Mean Value Theorem for f(x) = 3x² - 5x + 1?',
    options: [
      '1/2',
      '3/5',
      '5/6',
      '1'
    ],
    correctOptionIndex: 0,
    explanation: `By the Mean Value Theorem on [0, 1]:
f'(c) = (f(1) - f(0)) / (1 - 0)

Step 1: Calculate endpoints:
f(1) = 3(1)² - 5(1) + 1 = 3 - 5 + 1 = -1
f(0) = 1
Average slope = (-1 - 1) / 1 = -2.

Step 2: Differentiate f(x):
f'(x) = 6x - 5.

Step 3: Solve f'(c) = -2:
6c - 5 = -2
6c = 3  ⇒  c = 3/6 = 1/2.
(c = 1/2 lies in (0, 1)).`,
    hint: 'MVT formula: f\'(c) = (f(1) - f(0))/(1 - 0) = -2. Solve 6c - 5 = -2  ⇒  c = 1/2.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-62',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Differential Calculus (Derivatives of Elementary Functions)',
    questionText: 'Let f(x) = 5x³ + 2x - sin(x) + eˣ. What is the value of f\'(0)?',
    options: [
      '2',
      '1',
      '-1',
      '4'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Find the first derivative:
f'(x) = 15x² + 2 - cos(x) + eˣ

Step 2: Evaluate at x = 0:
f'(0) = 15(0)² + 2 - cos(0) + e⁰
f'(0) = 0 + 2 - 1 + 1 = 2.`,
    hint: 'Differentiate each term: 15x² + 2 - cos(x) + eˣ, then evaluate at x = 0.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-63',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Differential Calculus (The Chain Rule)',
    questionText: 'Let f and g be differentiable functions with h(x) = g(f(3x + 1)). If f(1) = 2, f\'(1) = 2, and g\'(2) = 1, what is the value of h\'(0)?',
    options: [
      '2',
      '1',
      '6',
      '4'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Apply the composite Chain Rule:
h'(x) = g'(f(3x + 1)) · f'(3x + 1) · d/dx[3x + 1]
h'(x) = 3 · g'(f(3x + 1)) · f'(3x + 1)

Step 2: Evaluate at x = 0 (inner argument 3(0) + 1 = 1):
h'(0) = 3 · g'(f(1)) · f'(1)

Step 3: Substitute given values f(1) = 2, f'(1) = 2, and g'(2) = 1:
h'(0) = 3 · g'(2) · 2 = 3 · 1 · 2 = 6.`,
    hint: 'Chain Rule: h\'(0) = 3 · g\'(f(1)) · f\'(1) = 3 · 1 · 2 = 6.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-64',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Differential Calculus (Interpretation of Derivatives)',
    questionText: 'Which of the following describes the physical/mechanical meaning of a derivative?',
    options: [
      'Gradient of graphs of functions',
      'Area under the curve',
      'Instantaneous rate of change',
      'Slope of tangent line'
    ],
    correctOptionIndex: 2,
    explanation: `In physical and mechanical sciences:
• The derivative represents the instantaneous rate of change of a physical quantity with respect to time (e.g. velocity v(t) = ds/dt).
• Geometric terms like "slope of tangent line" or "gradient" describe its graphical representation, not its mechanical meaning.`,
    hint: 'The mechanical interpretation of derivative is the instantaneous rate of change (such as velocity v = ds/dt).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-65',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Polynomial Factor Theorem',
    questionText: 'Which of the following is true about the zero(s) of a polynomial function f(x)?',
    options: [
      'If f(a) = 0, then x - a is a factor of f(x).',
      'If f(a) = 0, then (x - a)² is a factor of f(x).',
      'If f(a) = 0, then a is not necessarily in the domain.',
      'If f(a) = 0, then y = a is the y-intercept.'
    ],
    correctOptionIndex: 0,
    explanation: `By the Polynomial Factor Theorem:
A real number a is a zero (root) of a polynomial f(x) (f(a) = 0) if and only if (x - a) is a linear factor of f(x).`,
    hint: 'Factor Theorem: f(a) = 0 if and only if (x - a) is a factor of f(x).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
