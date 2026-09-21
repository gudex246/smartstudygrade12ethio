import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2018_EC_PART4: Question[] = [
  {
    id: 'math-2018-q46',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Radical Equations: Solving Equations with Square Roots',
    questionText: '46. What is the solution set for the radical equation √(x² + 3x) = 2?',
    options: [
      '{1, -4}',
      '{1, 4}',
      '{-1, 4}',
      '{-1, -4}'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Square both sides of the equation to eliminate the radical:
[√(x² + 3x)]² = 2²
x² + 3x = 4.

Step 2: Set the quadratic equation to zero:
x² + 3x - 4 = 0.

Step 3: Factor the quadratic expression:
(x + 4)(x - 1) = 0.
This gives candidate roots: x = 1 and x = -4.

Step 4: Check for extraneous solutions in the original equation:
• For x = 1: √(1² + 3(1)) = √(1 + 3) = √4 = 2 (Valid).
• For x = -4: √((-4)² + 3(-4)) = √(16 - 12) = √4 = 2 (Valid).

Both roots satisfy the equation, so the solution set is {1, -4}.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: ሁለቱንም ወገን ስኩዌር ማድረግ:
x² + 3x = 4  ⟹  x² + 3x - 4 = 0።
ደረጃ 2: ማባዛት (Factoring):
(x + 4)(x - 1) = 0  ⟹  x = 1 ወይም x = -4።
ደረጃ 3: ሁለቱንም ቁጥሮች በዋናው ቀመር ስንፈትሽ ሁለቱም ትክክለኛ ናቸው:
x = 1: √(1 + 3) = 2
x = -4: √(16 - 12) = 2
ስለዚህ የመፍትሔ ስብስብ {1, -4} ነው።

🌳 Afaan Oromoo:
Gara lamaanuu isquweerii gochuun:
x² + 3x = 4  ⟹  x² + 3x - 4 = 0  ⟹  (x + 4)(x - 1) = 0.
Bu'aan x = 1 fi x = -4 lamaanuu qormaata ni darbu. Tuutni deebii {1, -4} dha.`,
    hint: 'Square both sides to obtain x^2 + 3x - 4 = 0, factor as (x + 4)(x - 1) = 0, and check both solutions.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q47',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Logarithmic Functions: Laws of Logarithms',
    questionText: '47. Using logarithm rules, which expression is equivalent to log₃(9x²)?',
    options: [
      '2 log₃(3x)',
      '2 + 2 log₃(x)',
      '9 log₃(x²)',
      '3 + 2 log₃(x)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Apply the product rule of logarithms (log_b(M * N) = log_b(M) + log_b(N)):
log₃(9x²) = log₃(9) + log₃(x²).

Step 2: Simplify log₃(9):
Since 9 = 3², log₃(9) = log₃(3²) = 2.

Step 3: Apply the power rule of logarithms (log_b(Mᵖ) = p * log_b(M)) for x > 0:
log₃(x²) = 2 log₃(x).

Step 4: Combine the simplified terms:
log₃(9x²) = 2 + 2 log₃(x).

🇪🇹 አማርኛ (Amharic):
የሎጋሪዝም ማባዛት ህግ: log₃(9x²) = log₃(9) + log₃(x²)
log₃(9) = log₃(3²) = 2
log₃(x²) = 2 log₃(x)
ስለዚህ: log₃(9x²) = 2 + 2 log₃(x) ይሆናል።

🌳 Afaan Oromoo:
Seera logaariitimiitiin:
log₃(9x²) = log₃(9) + log₃(x²)
log₃(9) = 2 fi log₃(x²) = 2 log₃(x).
Walumatti: 2 + 2 log₃(x) ta'a.`,
    hint: 'Split using product rule: log3(9) + log3(x^2). Since 9 = 3^2, log3(9) = 2 and log3(x^2) = 2 log3(x).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q48',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Exponential Functions: Monotonicity & Growth/Decay',
    questionText: '48. Given the exponential functions f(x) = 2^x and g(x) = 0.5^x, which statement describes their monotonicity?',
    options: [
      'Both functions are increasing.',
      'Both functions are decreasing.',
      'f(x) is decreasing and g(x) is increasing.',
      'f(x) is increasing and g(x) is decreasing.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
For any exponential function of the form y = b^x (where b > 0 and b ≠ 1):
1. If the base b > 1, the function is strictly increasing throughout its domain ℝ.
   For f(x) = 2^x, base b = 2 > 1, so f(x) is strictly increasing.
2. If the base 0 < b < 1, the function is strictly decreasing throughout its domain ℝ.
   For g(x) = 0.5^x = (1/2)^x, base b = 0.5 < 1, so g(x) is strictly decreasing.

Therefore, f(x) is increasing and g(x) is decreasing.

🇪🇹 አማርኛ (Amharic):
ኤክስፖነንሻል ፈንክሽን y = b^x ሲሆን:
• መሰረቱ b > 1 ከሆነ (ለምሳሌ f(x) = 2^x): ፈንክሽኑ ጨማሪ (Increasing) ነው።
• መሰረቱ 0 < b < 1 ከሆነ (ለምሳሌ g(x) = 0.5^x): ፈንክሽኑ ቀናሽ (Decreasing) ነው።
ስለዚህ f(x) ጨማሪ ሲሆን g(x) ደግሞ ቀናሽ ነው።

🌳 Afaan Oromoo:
Faankishiinii eksipoonenshiyaalaaf y = b^x:
• b > 1 yoo ta'e (f(x) = 2^x), faankishiinichi dabalaa (increasing) dha.
• 0 < b < 1 yoo ta'e (g(x) = 0.5^x), faankishiinichi hir'ataa (decreasing) dha.`,
    hint: 'If base > 1, the exponential function grows (increases). If base < 1, it decays (decreases).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q49',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Sequences & Series: Sum of Arithmetic Progression',
    questionText: '49. In an arithmetic progression, the first term is 11 and the common difference is -13. What is the sum of the first 7 terms?',
    options: [
      '-28',
      '-196',
      '-67',
      '196'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Identify the parameters of the arithmetic series:
• Number of terms: n = 7
• First term: a₁ = 11
• Common difference: d = -13.

Step 2: Use the formula for the sum of the first n terms of an arithmetic progression:
S_n = (n / 2) * [2a₁ + (n - 1)d].

Step 3: Substitute the parameters:
S₇ = (7 / 2) * [2(11) + (7 - 1)(-13)]
= (7 / 2) * [22 + 6(-13)]
= (7 / 2) * [22 - 78]
= (7 / 2) * (-56)
= 7 * (-28)
= -196.

🇪🇹 አማርኛ (Amharic):
የአሪትሜቲክ ተከታታይ ድምር ቀመር: S_n = (n / 2) * [2a₁ + (n - 1)d]
n = 7, a₁ = 11, d = -13
S₇ = (7 / 2) * [2(11) + 6(-13)]
= (7 / 2) * [22 - 78]
= (7 / 2) * (-56) = 7 * (-28) = -196 ይሆናል።

🌳 Afaan Oromoo:
Formulaa ida'ama seera herregaatiin:
S_n = (n / 2) * [2a₁ + (n - 1)d].
S₇ = (7 / 2) * [22 + 6(-13)] = (7 / 2) * (-56) = -196 ta'a.`,
    hint: 'Use S_n = (n/2)[2a_1 + (n-1)d]. Here n = 7, a_1 = 11, and d = -13.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q50',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Sequences & Series: Geometric Sequence General Term',
    questionText: '50. In a geometric sequence, the first term is g₁ = 2 and the fifth term is g₅ = 8 (assume the common ratio is positive). What is the value of the 13th term (g₁₃)?',
    options: [
      '32',
      '64',
      '128',
      '256'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Use the general formula for the n-th term of a geometric sequence:
g_n = g₁ * r^(n-1).

Step 2: Use the fifth term g₅ = 8:
g₅ = g₁ * r⁴  ⟹  8 = 2 * r⁴  ⟹  r⁴ = 4.

Step 3: Express the 13th term g₁₃:
g₁₃ = g₁ * r¹² = g₁ * (r⁴)³.

Step 4: Substitute g₁ = 2 and r⁴ = 4:
g₁₃ = 2 * (4)³
= 2 * 64
= 128.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: የጂኦሜትሪክ ተከታታይ ቀመር: g_n = g₁ * r^(n-1)
ደረጃ 2: 5ኛው ተርም g₅ = g₁ * r⁴  ⟹  8 = 2 * r⁴  ⟹  r⁴ = 4
ደረጃ 3: 13ኛው ተርም g₁₃ = g₁ * r¹² = g₁ * (r⁴)³
= 2 * (4)³ = 2 * 64 = 128 ይሆናል።

🌳 Afaan Oromoo:
g₅ = g₁ * r⁴  ⟹  8 = 2 * r⁴  ⟹  r⁴ = 4.
g₁₃ = g₁ * r¹² = g₁ * (r⁴)³ = 2 * (4)³ = 2 * 64 = 128 ta'a.`,
    hint: 'Notice that r^12 = (r^4)^3. Since r^4 = 8/2 = 4, g_13 = 2 * 4^3 = 2 * 64 = 128.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q51',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Number Systems: Converting Repeating Decimals to Fractions',
    questionText: '51. The infinite repeating decimal 0.373737... can be expressed as which rational fraction in lowest terms?',
    options: [
      '37/100',
      '37/99',
      '37/90',
      '1/3'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Set x equal to the repeating decimal:
x = 0.373737...

Step 2: Multiply by 100 (since 2 digits repeat):
100x = 37.373737...

Step 3: Subtract the first equation from the second equation:
100x - x = 37.373737... - 0.373737...
99x = 37
x = 37 / 99.

Step 4: Check if 37/99 is in lowest terms:
37 is a prime number and does not divide 99 (99 = 9 * 11). Thus, 37/99 is already in lowest terms.

🇪🇹 አማርኛ (Amharic):
x = 0.373737...
100x = 37.373737...
100x - x = 37  ⟹  99x = 37  ⟹  x = 37/99።
37 ፕራይም ቁጥር ስለሆነ 37/99 ቀለል ባለ ቅርጽ ተቀምጧል።

🌳 Afaan Oromoo:
x = 0.373737...
100x = 37.373737...
Hir'isuun: 99x = 37  ⟹  x = 37/99 ta'a.`,
    hint: 'Two repeating digits mean denominator of 99: 0.373737... = 37/99.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q52',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Integral Calculus: Linearity Properties of Indefinite Integrals',
    questionText: '52. According to the properties of integration, which of the following is equivalent to ∫(3f(x) - g(x)) dx?',
    options: [
      '3 ∫ f(x) dx - ∫ g(x) dx',
      '∫ 3f(x) dx - ∫ g(x) dx',
      '3(∫ f(x) dx - ∫ g(x) dx)',
      '∫ f(x) dx - 3 ∫ g(x) dx'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
By the linearity properties of integration:
1. Difference Rule: ∫[u(x) - v(x)] dx = ∫ u(x) dx - ∫ v(x) dx.
2. Constant Multiple Rule: ∫ c * u(x) dx = c * ∫ u(x) dx.

Applying both rules to ∫[3f(x) - g(x)] dx:
∫[3f(x) - g(x)] dx = ∫ 3f(x) dx - ∫ g(x) dx = 3 ∫ f(x) dx - ∫ g(x) dx.

🇪🇹 አማርኛ (Amharic):
የኢንቴግሬሽን ህጎች (Linearity properties):
ቋሚ ቁጥርን ወደ ውጭ ማውጣት እና የመቀነስ ህግን ስንጠቀም:
∫(3f(x) - g(x)) dx = 3 ∫ f(x) dx - ∫ g(x) dx ይሆናል።

🌳 Afaan Oromoo:
Seera intagiraalaatiin:
∫(3f(x) - g(x)) dx = 3 ∫ f(x) dx - ∫ g(x) dx ta'a.`,
    hint: 'Apply the constant multiple rule (pull out 3) and the difference rule of integration.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q53',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Coordinate Geometry: Properties of Parallelograms & Vectors',
    questionText: '53. Three vertices of a parallelogram ABCD are A(0,0), B(5,0), and C(7,4). If AD is parallel and equal to BC, what are the coordinates of vertex D?',
    options: [
      '(2, 4)',
      '(-2, 4)',
      '(12, 4)',
      '(2, -4)'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: In a parallelogram ABCD, opposite sides are parallel and congruent:
Vector AD = Vector BC.

Step 2: Calculate vector BC:
BC = ⟨x_C - x_B, y_C - y_B⟩
BC = ⟨7 - 5, 4 - 0⟩ = ⟨2, 4⟩.

Step 3: Find vertex D:
Since AD = D - A, and A is the origin (0, 0):
D = A + BC = (0 + 2, 0 + 4) = (2, 4).

Verification using midpoints of diagonals:
• Midpoint of AC = ((0 + 7)/2, (0 + 4)/2) = (3.5, 2).
• Midpoint of BD = ((5 + 2)/2, (0 + 4)/2) = (3.5, 2).
The diagonals bisect each other at (3.5, 2), confirming D = (2, 4).

🇪🇹 አማርኛ (Amharic):
በፓራሌሎግራም ABCD ውስጥ ተቃራኒ ጎኖች እኩልና ትይዩ ናቸው:
ቬክተር AD = ቬክተር BC
BC = ⟨7 - 5, 4 - 0⟩ = ⟨2, 4⟩
A(0, 0) ስለሆነ: D = A + BC = (0 + 2, 0 + 4) = (2, 4) ይሆናል።

🌳 Afaan Oromoo:
Paraaleloogiraamii ABCD keessatti:
Veektara AD = Veektara BC.
BC = ⟨7 - 5, 4 - 0⟩ = ⟨2, 4⟩.
D = (0 + 2, 0 + 4) = (2, 4) ta'a.`,
    hint: 'Vector AD must equal vector BC. Since BC = (7 - 5, 4 - 0) = (2, 4), D = A + (2, 4) = (2, 4).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q54',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Trigonometry: Co-function Identities for Complementary Angles',
    questionText: '54. If α and β are complementary angles (α + β = 90°), which of the following trigonometric relations is always true?',
    options: [
      'sin(α) = sin(β)',
      'tan(α) = tan(β)',
      'sin(α) = cos(β)',
      'sec(α) = cos(β)'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Express β in terms of α:
Since α + β = 90°, β = 90° - α.

Step 2: Apply the co-function identity:
cos(β) = cos(90° - α) = sin(α).
Equivalently, in any right-angled triangle with acute angles α and β, the opposite side to angle α is adjacent to angle β, so:
sin(α) = opposite / hypotenuse = adjacent_to_β / hypotenuse = cos(β).

Therefore, sin(α) = cos(β) is always true.

🇪🇹 አማርኛ (Amharic):
አሟይ አንግሎች (Complementary angles α + β = 90°) ሲሆኑ:
sin(α) = cos(90° - α) = cos(β) ይሆናል።
በቀኝ ማዕዘን ሶስት ማዕዘን ውስጥ ለአንዱ ተቃራኒ የሆነው ለሌላው አጠገብ ስለሚሆን sin(α) = cos(β) ሁልጊዜ እውነት ነው።

🌳 Afaan Oromoo:
Yoo kofootni dabaloo (complementary angles) ta'an (α + β = 90°):
sin(α) = cos(90° - α) = cos(β) yeroo hunda dhugaadha.`,
    hint: 'Co-function identity: the sine of an angle equals the cosine of its complement.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q55',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Statistics: Measures of Relative Standing & Deciles/Percentiles',
    questionText: '55. In descriptive statistics, the third decile (D₃) corresponds to which percentile?',
    options: [
      '3rd percentile',
      '30th percentile',
      '33rd percentile',
      '70th percentile'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• Deciles divide an ordered dataset into 10 equal parts (each representing 10% of the total distribution).
• Percentiles divide an ordered dataset into 100 equal parts (each representing 1%).
Therefore, the k-th decile D_k corresponds to the (10 * k)-th percentile P_{10k}:
D₃ = 3 * 10% = 30% of the distribution = 30th percentile (P₃₀).

🇪🇹 አማርኛ (Amharic):
ዴሳይል (Decile) መረጃን በ 10 እኩል ክፍሎች (በ 10%) ይከፍላል። ፐርሰንታይል (Percentile) ደግሞ በ 100 እኩል ክፍሎች ይከፍላል።
ስለዚህ 3ኛው ዴሳይል (D₃) ከ 30ኛው ፐርሰንታይል (30th percentile) ጋር እኩል ነው።

🌳 Afaan Oromoo:
Disaayiliin (decile) daataa bakka 10tti qooda (tokkoon tokkoo 10%). Parsantaayiliin immoo bakka 100tti qooda. Kanaafuu D₃ = parsantaayilii 30ffaa (30th percentile) dha.`,
    hint: 'Each decile is 10%. The 3rd decile represents 3 × 10% = 30th percentile.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q56',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Matrices: Definition of a Matrix',
    questionText: '56. Which one of the following statements defines a matrix?',
    options: [
      'A matrix is a rectangular array of numbers.',
      'A matrix is a vertical array of letters.',
      'A matrix is a horizontal array of letters.',
      'A matrix is a circular array of numbers.'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
By mathematical definition:
A matrix is a rectangular array (arrangement) of numbers, symbols, or expressions arranged in horizontal rows and vertical columns, enclosed in brackets or parentheses.

🇪🇹 አማርኛ (Amharic):
ማትሪክስ (Matrix) ማለት በረድፎች (Rows) እና በአምዶች (Columns) የተደረደረ አራት ማዕዘናዊ የቁጥሮች ሰንጠረዥ (Rectangular array of numbers) ነው።

🌳 Afaan Oromoo:
Maatriksiin tartiiba reektaangulaaraa lakkoofsota sararaa fi tarreedhaan qindaa'edha (rectangular array of numbers).`,
    hint: 'A matrix is arranged in m rows and n columns, forming a rectangular array.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q57',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Algebra: Partial Fraction Decomposition',
    questionText: '57. Which one of the following is the decomposition of the rational expression (3x² + 5x - 1) / [(x + 2)(x + 1)²] as a sum of partial fractions?',
    options: [
      '1/(x + 2) + 2/(x + 1) - 3/(x + 1)²',
      '3/(x + 2) - 3/(x + 1)²',
      '1/(x + 2) + 2/(x + 1) + 3/(x + 1)²',
      '5/(x + 2) + 4/(x + 1)²'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Set up the partial fraction template for linear and repeated linear factors:
(3x² + 5x - 1) / [(x + 2)(x + 1)²] = A / (x + 2) + B / (x + 1) + C / (x + 1)².

Step 2: Multiply both sides by (x + 2)(x + 1)²:
3x² + 5x - 1 = A(x + 1)² + B(x + 2)(x + 1) + C(x + 2).

Step 3: Solve for coefficients:
• Let x = -2:
  3(-2)² + 5(-2) - 1 = A(-2 + 1)² + 0 + 0
  12 - 10 - 1 = A(1)  ⟹  A = 1.
• Let x = -1:
  3(-1)² + 5(-1) - 1 = 0 + 0 + C(-1 + 2)
  3 - 5 - 1 = C(1)  ⟹  C = -3.
• Compare coefficients of x²:
  The coefficient of x² on the left is 3.
  On the right: A + B = 3  ⟹  1 + B = 3  ⟹  B = 2.

Step 4: Write the final decomposition:
1 / (x + 2) + 2 / (x + 1) - 3 / (x + 1)².

🇪🇹 አማርኛ (Amharic):
(3x² + 5x - 1) / [(x + 2)(x + 1)²] = A/(x + 2) + B/(x + 1) + C/(x + 1)²
• x = -2 ሲሆን: 1 = A(1)  ⟹  A = 1
• x = -1 ሲሆን: -3 = C(1)  ⟹  C = -3
• የ x² ኮፊሸንት A + B = 3  ⟹  1 + B = 3  ⟹  B = 2
ስለዚህ: 1/(x + 2) + 2/(x + 1) - 3/(x + 1)² ይሆናል።

🌳 Afaan Oromoo:
Qoodama paariyaalii (partial fractions):
A = 1, B = 2, C = -3 ta'a.
Kanaafuu: 1/(x + 2) + 2/(x + 1) - 3/(x + 1)² deebii sirriidha.`,
    hint: 'Set up A/(x+2) + B/(x+1) + C/(x+1)^2. Evaluate at x = -2 to find A = 1, and x = -1 to find C = -3.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q58',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Linear Programming: Mathematical Formulation of Word Problems',
    questionText: `58. A farmer having a total capital of Birr 400,000 bought oxen and sheep. An ox costs Birr 60,000 and a sheep Birr 5,000. He sold each ox at Birr 65,000 and each sheep at Birr 6,000. Which one of the following is a representation of the problem in order to maximize his profit, assuming uniform prices where x is the number of oxen and y is the number of sheep?`,
    options: [
      'Z(x,y) = 6000x + 5000y subject to x + y ≤ 35, 12x + y ≤ 80, x ≥ 0, y ≥ 0',
      'Z(x,y) = 60000x + 5000y subject to x + y ≤ 35, 12x + y ≤ 80, x ≥ 0, y ≥ 0',
      'Z(x,y) = 5000x + 1000y subject to x + y ≤ 35, 12x + y ≤ 800, x ≥ 0, y ≥ 0',
      'Z(x,y) = 5000x + 1000y subject to x + y ≤ 35, 12x + y ≤ 80, x ≥ 0, y ≥ 0'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Determine the profit per unit (Objective Function Z):
• Profit per ox = Selling price - Cost price = 65,000 - 60,000 = Birr 5,000.
• Profit per sheep = Selling price - Cost price = 6,000 - 5,000 = Birr 1,000.
Objective Function to maximize:
Z(x, y) = 5000x + 1000y.

Step 2: Formulate the budget capital constraint:
Total purchase cost = 60,000x + 5,000y ≤ 400,000.
Divide the entire inequality by 5,000:
(60,000 / 5,000)x + (5,000 / 5,000)y ≤ 400,000 / 5,000
12x + y ≤ 80.

Step 3: Quantity constraint & non-negativity:
x + y ≤ 35, x ≥ 0, y ≥ 0.

Therefore, the correct formulation is:
Z(x,y) = 5000x + 1000y subject to x + y ≤ 35, 12x + y ≤ 80, x ≥ 0, y ≥ 0.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: የትርፍ ቀመር (Objective function):
ከአንድ በሬ የሚገኝ ትርፍ = 65,000 - 60,000 = 5,000 ብር
ከአንድ በግ የሚገኝ ትርፍ = 6,000 - 5,000 = 1,000 ብር
Z(x, y) = 5000x + 1000y።
ደረጃ 2: የካፒታል ገደብ:
60,000x + 5,000y ≤ 400,000
ለሁሉም በ 5,000 ስናካፍል: 12x + y ≤ 80 ይሆናል።
ስለዚህ ትክክለኛው ሞዴል ምርጫ D ነው።

🌳 Afaan Oromoo:
Bu'aa sangaa tokkorraa: 65,000 - 60,000 = 5,000.
Bu'aa hoolaa tokkorraa: 6,000 - 5,000 = 1,000.
Z(x, y) = 5000x + 1000y.
Daangaa kaappitaalaa: 60,000x + 5,000y ≤ 400,000  ⟹  12x + y ≤ 80.
Kanaafuu filannoon D deebii sirriidha.`,
    hint: 'Profit = Selling price - Cost price. For ox: 65,000 - 60,000 = 5000. For sheep: 6000 - 5000 = 1000.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q59',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Real Number System: Completeness & One-to-One Correspondence',
    questionText: '59. Which one of the following statements is true about the given numbers and points on the number line?',
    options: [
      'There is a one-to-one correspondence between the set of natural numbers and points on the number line.',
      'There is a one-to-one correspondence between the set of rational numbers and points on the number line.',
      'There is a one-to-one correspondence between the set of irrational numbers and points on the number line.',
      'There is a one-to-one correspondence between the set of real numbers and points on the number line.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
By the Completeness Axiom (Cantor-Dedekind postulate) of real analysis:
There is a unique one-to-one and onto (bijective) correspondence between the set of all real numbers ℝ and the geometric points on a continuous coordinate line (the real number line).
• Natural numbers, integers, and rational numbers leave "holes" (gaps) on the line.
• Irrational numbers also omit all the rational points.
Only the set of real numbers ℝ completely fills the continuous number line without any gaps.

🇪🇹 አማርኛ (Amharic):
የእውነተኛ ቁጥሮች ሙላት (Completeness property): በእውነተኛ ቁጥሮች ስብስብ (Real numbers) እና በቁጥር መስመሩ ላይ ባሉ ነጥቦች መካከል አንድ ለአንድ (One-to-one correspondence) ግንኙነት አለ።

🌳 Afaan Oromoo:
Tuuta lakkoofsota dhugaa (real numbers) fi qabxilee sarara lakkoofsaa irratti argaman gidduu walitti-dhufeenyi qajeelaa tokko-gara-tokkoo (one-to-one correspondence) jira.`,
    hint: 'The real number line has no gaps: every real number represents a unique point, and every point represents a real number.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q60',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Solid Geometry: Surface Area of a Sphere',
    questionText: '60. A spherical ball has diameter 30cm. What is its surface area (in cm²)?',
    options: [
      '3600π',
      '1000π',
      '900π',
      '600π'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Calculate the radius r from the given diameter d:
r = d / 2 = 30 / 2 = 15 cm.

Step 2: Recall the formula for the total surface area of a sphere:
Surface Area = 4πr².

Step 3: Substitute r = 15 cm:
Surface Area = 4 * π * (15)²
= 4 * π * 225
= 900π cm².

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: ራዲየስ r = ዲያሜትር / 2 = 30 / 2 = 15 ሴ.ሜ
ደረጃ 2: የሉል የገጽታ ስፋት (Surface area of sphere) ቀመር = 4πr²
ደረጃ 3: Surface Area = 4 * π * (15)² = 4 * π * 225 = 900π ሴ.ሜ² ይሆናል።

🌳 Afaan Oromoo:
Raadiyeesiin: r = 30 / 2 = 15 cm.
Bal'ina qola isfeeraa: 4πr² = 4 * π * 15² = 4 * 225 * π = 900π cm² ta'a.`,
    hint: 'Radius is half the diameter (r = 15 cm). Use sphere surface area formula: 4πr^2 = 4π(15^2) = 900π.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
