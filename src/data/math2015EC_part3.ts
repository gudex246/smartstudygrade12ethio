import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2015_EC_PART3: Question[] = [
  {
    id: 'math-2015-31',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Functions (One-to-One)',
    questionText: 'Which of the following functions is one-to-one (injective)?',
    options: [
      'f = {(1, 5), (2, 3), (5, 4), (6, 5)}',
      'f: (0, ∞) → ℝ, f(x) = |x| - 1',
      'f: ℝ → ℝ, f(x) = x² - 1',
      'f = {(x, y) : y is the biological mother of x}'
    ],
    correctOptionIndex: 1,
    explanation: `On the domain (0, ∞), x is strictly positive, so |x| = x.
Thus, f(x) = x - 1.
This is a strictly increasing linear function with constant positive derivative f'(x) = 1 > 0 throughout (0, ∞). Hence, every distinct input produces a unique output (one-to-one).

Why other options fail:
• Option A: f(1) = 5 and f(6) = 5 (two distinct inputs map to the same output).
• Option C: f(-1) = (-1)² - 1 = 0 and f(1) = 1² - 1 = 0.
• Option D: A single mother can have multiple children, so multiple x values map to the same y.`,
    hint: 'On (0, ∞), f(x) = |x| - 1 simplifies to f(x) = x - 1, which is strictly increasing and passes the horizontal line test.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-32',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Partial Fraction Decomposition',
    questionText: 'If (x² + 14) / ((x + 2)(x - 1)²) = A / (x + 2) + B / (x - 1) + C / (x - 1)², what are the values of A, B, and C respectively?',
    options: [
      '1, -1, 3',
      '3, -2, 6',
      '2, -2, -5',
      '2, -1, 5'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Clear the denominators by multiplying both sides by (x + 2)(x - 1)²:
x² + 14 = A(x - 1)² + B(x + 2)(x - 1) + C(x + 2)

Step 2: Solve for C by setting x = 1:
1² + 14 = C(1 + 2)
15 = 3C  ⇒  C = 5

Step 3: Solve for A by setting x = -2:
(-2)² + 14 = A(-2 - 1)²
4 + 14 = 9A
18 = 9A  ⇒  A = 2

Step 4: Solve for B by matching the coefficient of x²:
x² coefficient: 1 = A + B
1 = 2 + B  ⇒  B = -1

Therefore, A = 2, B = -1, C = 5.`,
    hint: 'Use the Heaviside method: plug in x = 1 for C, x = -2 for A, and equate the x² coefficients for B.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-33',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Rational Functions (Symmetry)',
    questionText: 'Which of the following is true about the graph and symmetry of f(x) = (x³ - 3x) / (x² - 6)?',
    options: [
      'The graph is symmetrical with respect to the y-axis.',
      'Its y-intercept is 3.',
      'Its x-intercepts are ±√6.',
      'The graph is symmetrical with respect to the origin.'
    ],
    correctOptionIndex: 3,
    explanation: `Test f(-x) for symmetry:
f(-x) = ((-x)³ - 3(-x)) / ((-x)² - 6)
f(-x) = (-x³ + 3x) / (x² - 6)
f(-x) = -(x³ - 3x) / (x² - 6) = -f(x)

Because f(-x) = -f(x) for all x in its domain, f(x) is an odd function.
The graph of every odd function possesses rotational point symmetry with respect to the origin (0, 0).`,
    hint: 'Test for odd symmetry: f(-x) = -f(x) demonstrates rotational symmetry with respect to the origin.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-34',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Coordinate Geometry (Angle Between Two Lines)',
    questionText: 'Consider the lines L₁: y = 2x + 3 and L₂: y = 1 - 3x. What is the acute angle between L₁ and L₂?',
    options: [
      'π/4',
      '3π/2',
      'π/2',
      'π/6'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Identify the slopes:
m₁ = 2 and m₂ = -3.

Step 2: Apply the formula for the acute angle θ between two straight lines:
tan(θ) = |(m₁ - m₂) / (1 + m₁ · m₂)|
tan(θ) = |(2 - (-3)) / (1 + 2 · (-3))|
tan(θ) = |5 / (1 - 6)| = |5 / -5| = |-1| = 1.

Step 3: Solve for θ:
θ = arctan(1) = π/4 radians (45°).`,
    hint: 'Formula: tan(θ) = |(m₁ - m₂) / (1 + m₁ · m₂)| = |5 / -5| = 1  ⇒  θ = π/4.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-35',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Conic Sections (Parabola)',
    questionText: 'The equation of the parabola with vertex V(2, -1) and focus F(-1, -1) is',
    options: [
      '(x + 1)² = -12(y + 1)',
      '(y + 1)² = -12(x - 2)',
      '(y + 1)² = 12(x - 2)',
      '(x - 2)² = -12(y + 1)'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Determine orientation and focal parameter p:
Vertex (h, k) = (2, -1) and Focus (h + p, k) = (-1, -1).
Since the y-coordinates are equal, the axis of symmetry is horizontal (y = -1).
Focal distance: p = -1 - 2 = -3 (parabola opens leftward).

Step 2: Formulate standard horizontal parabola equation:
(y - k)² = 4p(x - h)
(y - (-1))² = 4(-3)(x - 2)
(y + 1)² = -12(x - 2).`,
    hint: 'Use the standard horizontal parabola form: (y - k)² = 4p(x - h) where (h, k) = (2, -1) and p = -3.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-36',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Limits & Calculus',
    questionText: 'What is the value of lim_(x → 1) (x² - 1) / (x² + 1)?',
    options: [
      '3',
      '1',
      '2',
      '0'
    ],
    correctOptionIndex: 3,
    explanation: `Direct substitution since the rational function is continuous at x = 1 (denominator 1² + 1 = 2 ≠ 0):

lim_(x → 1) (x² - 1) / (x² + 1) = (1² - 1) / (1² + 1) = (1 - 1) / (1 + 1) = 0 / 2 = 0.`,
    hint: 'Direct substitution gives (1 - 1)/(1 + 1) = 0/2 = 0 without any indeterminate form.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-37',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Continuity of Functions',
    questionText: 'Which one of the following is the value of a so that f(x) = { ax + 1 for x ≥ 1; x² - 4 for x < 1 } is continuous at x = 1?',
    options: [
      '4',
      '-4',
      '-1',
      '1'
    ],
    correctOptionIndex: 1,
    explanation: `For f(x) to be continuous at x = 1, the left-hand limit, right-hand limit, and function value at x = 1 must be identical:

• Left-hand limit:
  lim_(x → 1⁻) f(x) = 1² - 4 = -3

• Right-hand limit:
  lim_(x → 1⁺) f(x) = a(1) + 1 = a + 1

Equating both limits:
a + 1 = -3  ⇒  a = -4.`,
    hint: 'Equate the left-hand limit (1² - 4 = -3) with the right-hand limit (a(1) + 1): a + 1 = -3  ⇒  a = -4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-38',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Trigonometric Graphing (Period & Phase Shift)',
    questionText: 'Let f(x) = -(1/3) cos((3/2)x - π/3) + 1. What are the period and phase shift of the graph of f respectively?',
    options: [
      '4π/3 and 2π/9',
      '2π/3 and 2π/9',
      '3π/2 and 4π/9',
      'π/9 and 4π/9'
    ],
    correctOptionIndex: 0,
    explanation: `Compare with the canonical form f(x) = A cos(Bx - C) + D:
B = 3/2 and C = π/3.

1. Period:
T = 2π / |B| = 2π / (3/2) = (2π · 2) / 3 = 4π/3.

2. Phase Shift:
Phase Shift = C / B = (π/3) / (3/2) = (π/3) · (2/3) = 2π/9 to the right.`,
    hint: 'Period = 2π / B = 4π/3; Phase shift = C / B = (π/3) / (3/2) = 2π/9.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-39',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Sequences & Series',
    questionText: 'What is the fifth term of the sequence {2ⁿ + 4n - 5} starting from index n = 0?',
    options: [
      '27',
      '17',
      '47',
      '15'
    ],
    correctOptionIndex: 0,
    explanation: `Because the sequence indexing begins at n = 0:
• 1st term (n = 0): 2⁰ + 4(0) - 5 = 1 + 0 - 5 = -4
• 2nd term (n = 1): 2¹ + 4(1) - 5 = 2 + 4 - 5 = 1
• 3rd term (n = 2): 2² + 4(2) - 5 = 4 + 8 - 5 = 7
• 4th term (n = 3): 2³ + 4(3) - 5 = 8 + 12 - 5 = 15
• 5th term (n = 4): 2⁴ + 4(4) - 5 = 16 + 16 - 5 = 27.`,
    hint: 'Since n starts at 0, the 5th term corresponds to index n = 4: 2⁴ + 4(4) - 5 = 16 + 16 - 5 = 27.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-40',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Arithmetic Progressions',
    questionText: 'If the 6th and 11th terms of an arithmetic sequence are 35 and 75 respectively, what is the sum of the first 31 terms?',
    options: [
      '3565',
      '724',
      '2635',
      '846'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Find common difference d:
a₆ = a₁ + 5d = 35
a₁₁ = a₁ + 10d = 75
Subtracting equations: 5d = 40  ⇒  d = 8.

Step 2: Find first term a₁:
a₁ = 35 - 5(8) = 35 - 40 = -5.

Step 3: Calculate sum S₃₁:
S₃₁ = (n / 2) · [2a₁ + (n - 1)d]
S₃₁ = (31 / 2) · [2(-5) + 30(8)]
S₃₁ = (31 / 2) · [-10 + 240] = (31 / 2) · 230 = 31 · 115 = 3565.`,
    hint: 'Find common difference d = 8, first term a₁ = -5, then compute S₃₁ = (31/2)(2(-5) + 30 · 8) = 3565.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-41',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Bounded Sequences',
    questionText: 'Which one of the following numbers is an upper bound of the sequence {(2n + 1) / (n + 1)} for n ≥ 1?',
    options: [
      '3/2',
      '0',
      '1',
      '4'
    ],
    correctOptionIndex: 3,
    explanation: `Rewrite the general sequence term:
aₙ = (2n + 1) / (n + 1) = (2(n + 1) - 1) / (n + 1) = 2 - 1 / (n + 1)

For every positive integer n ≥ 1:
1 / (n + 1) > 0  ⇒  aₙ < 2

Since all terms are strictly less than 2, the least upper bound (supremum) is 2.
Any real number M ≥ 2 is a valid upper bound.
Among the available choices, 4 is the only valid upper bound.`,
    hint: 'The sequence terms are all strictly less than 2. Any number ≥ 2 (such as 4) is a valid upper bound.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-42',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Limit of Sequences',
    questionText: 'If the sequence {aₙ} converges to 3 while {bₙ} converges to -1, then the sequence {aₙ - bₙ} converges to',
    options: [
      '1',
      '4',
      '3',
      '1/3'
    ],
    correctOptionIndex: 1,
    explanation: `By the algebraic difference law for convergent sequence limits:
lim_(n → ∞) (aₙ - bₙ) = lim_(n → ∞) aₙ - lim_(n → ∞) bₙ
= 3 - (-1) = 3 + 1 = 4.`,
    hint: 'Apply limit subtraction: 3 - (-1) = 4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-43',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Formal Logic & Deductive Arguments',
    questionText: 'Which of the following deductive arguments is valid?',
    options: [
      'p ∨ q, p ⇒ q ⊢ ¬q',
      'p, p ⇒ q, r ∨ ¬q ⊢ p ∧ ¬r',
      'p ⇒ q, q, r ⇒ p ⊢ r',
      'p ⇒ q, ¬q ⊢ ¬p'
    ],
    correctOptionIndex: 3,
    explanation: `By Modus Tollens (a classical rule of valid deductive inference):
From premises:
1. p ⇒ q (If p, then q)
2. ¬q (q is False)
We can validly deduce ¬p (p must be False).

The remaining options are invalid logical fallacies (such as affirming the consequent).`,
    hint: 'Modus Tollens: if p implies q and q is false, then p must be false (¬p).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-44',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Mathematical Induction',
    questionText: 'Which of the following statements is true for all integers n ≥ 0 by the Principle of Mathematical Induction?',
    options: [
      '1 + 2 + 2² + ... + 2ⁿ = 2ⁿ⁺¹ - 1 for n ≥ 0',
      'n! ≥ 2ⁿ for n ≥ 0',
      '2 + 3 + 4 + ... + n = (n(n + 1))/2 + 1 for n ≥ 2',
      '3 + 5 + 7 + ... + (2n + 1) = n² for n ≥ 1'
    ],
    correctOptionIndex: 0,
    explanation: `Statement A represents the geometric series sum formula for base 2:
∑_(k=0)ⁿ 2ᵏ = 1 + 2 + 2² + ... + 2ⁿ = (2ⁿ⁺¹ - 1) / (2 - 1) = 2ⁿ⁺¹ - 1.

Proof by Mathematical Induction:
1. Base Step (n = 0):
   LHS = 2⁰ = 1
   RHS = 2⁰⁺¹ - 1 = 2 - 1 = 1 (True).

2. Inductive Step:
   Assume Sₖ = 2ᵏ⁺¹ - 1 is true.
   Then Sₖ₊₁ = Sₖ + 2ᵏ⁺¹ = (2ᵏ⁺¹ - 1) + 2ᵏ⁺¹ = 2 · 2ᵏ⁺¹ - 1 = 2ᵏ⁺² - 1.
   Thus, the proposition holds for all integers n ≥ 0.`,
    hint: 'Geometric sum: 1 + 2 + 4 + ... + 2ⁿ = 2ⁿ⁺¹ - 1.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2015-45',
    subject: 'Mathematics',
    year: '2015 E.C.',
    topic: 'Integral Calculus (Indefinite Integrals)',
    questionText: 'Which of the following is equal to ∫ 3 cos(3x) dx?',
    options: [
      '(1/3) sin(3x) + c',
      'sin(3x) + c',
      'sin(x) + c',
      '-sin(x) + c'
    ],
    correctOptionIndex: 1,
    explanation: `Using u-substitution:
Let u = 3x  ⇒  du = 3 dx.

∫ 3 cos(3x) dx = ∫ cos(u) du = sin(u) + c = sin(3x) + c.

Verification by differentiation:
d/dx [sin(3x) + c] = 3 cos(3x).`,
    hint: 'The derivative of sin(3x) is 3 cos(3x), so ∫ 3 cos(3x) dx = sin(3x) + c.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
