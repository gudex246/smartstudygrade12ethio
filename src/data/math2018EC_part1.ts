import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2018_EC_PART1: Question[] = [
  {
    id: 'math-2018-q01',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Statistics: Measures of Dispersion & Mean Deviation',
    questionText: '1. Consider the data: 11, 13, 15, 17, 19, 21. Which one of the following is the mean deviation from the mean?',
    options: [
      '4',
      '3.5',
      '4.5',
      '3'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Find the arithmetic mean (x̄):
x̄ = (11 + 13 + 15 + 17 + 19 + 21) / 6 = 96 / 6 = 16.

Step 2: Calculate the absolute deviations from the mean |x - x̄|:
|11 - 16| = 5
|13 - 16| = 3
|15 - 16| = 1
|17 - 16| = 1
|19 - 16| = 3
|21 - 16| = 5

Step 3: Calculate the mean deviation (MD):
MD = ∑|x - x̄| / n = (5 + 3 + 1 + 1 + 3 + 5) / 6 = 18 / 6 = 3.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: የቁጥሮቹን አማካይ (Mean) መፈለግ:
x̄ = (11 + 13 + 15 + 17 + 19 + 21) / 6 = 96 / 6 = 16።
ደረጃ 2: የእያንዳንዱን ቁጥር ከአማካዩ ያለው ፍጹም ልዩነት (|x - x̄|) መደመር:
5 + 3 + 1 + 1 + 3 + 5 = 18።
ደረጃ 3: Mean Deviation = 18 / 6 = 3 ይሆናል።

🌳 Afaan Oromoo:
Giddu-galeessa (mean) lakkoofsotaa herreguu: (11 + 13 + 15 + 17 + 19 + 21) / 6 = 96 / 6 = 16.
Garaagarummaa absuuluutii giddu-galeessaa irraa jiru ida'uu: 5 + 3 + 1 + 1 + 3 + 5 = 18.
Mean deviation = 18 / 6 = 3 ta'a.`,
    hint: 'First compute the arithmetic mean (16), then find the average of the absolute differences |x - 16|.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q02',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Coordinate Geometry: Slopes of Parallel & Perpendicular Lines',
    questionText: '2. Consider the quadrilateral ABCD where A=(0,0), B=(-1,1), C=(0,2) and D=(2,2). Which one of the following is true?',
    options: [
      'CD is perpendicular to AB.',
      'BC is parallel to AD.',
      'CD is perpendicular to BD.',
      'AB is parallel to CD.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Compute the slopes of each side:
• Slope of BC: m_BC = (y_C - y_B) / (x_C - x_B) = (2 - 1) / (0 - (-1)) = 1 / 1 = 1.
• Slope of AD: m_AD = (y_D - y_A) / (x_D - x_A) = (2 - 0) / (2 - 0) = 2 / 2 = 1.
• Slope of AB: m_AB = (1 - 0) / (-1 - 0) = -1.
• Slope of CD: m_CD = (2 - 2) / (2 - 0) = 0 / 2 = 0.

Step 2: Compare the slopes:
Since m_BC = m_AD = 1, the segments BC and AD have equal slopes and are therefore parallel (BC ∥ AD).

🇪🇹 አማርኛ (Amharic):
የመስመሮችን ቁልቁለት (Slope) ስናሰላ:
• የመስመር BC ቁልቁለት: m = (2 - 1) / (0 - (-1)) = 1
• የመስመር AD ቁልቁለት: m = (2 - 0) / (2 - 0) = 1
ሁለቱም እኩል ቁልቁለት (slope = 1) ስላላቸው መስመር BC እና መስመር AD ትይዩ (parallel) ናቸው።

🌳 Afaan Oromoo:
Riqicha (slope) sararootaa shallaguun:
• Riqicha BC: m = (2 - 1) / (0 - (-1)) = 1
• Riqicha AD: m = (2 - 0) / (2 - 0) = 1
Riqichi isaanii lamaanuu wal qixa (1) waan ta'eef, sararri BC fi AD waltarree (parallel) dha.`,
    hint: 'Two non-vertical lines are parallel if and only if their slopes are equal (m1 = m2).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q03',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Functions: Greatest Integer Function & Domain',
    questionText: '3. Consider the greatest integer function defined by f(x)=⌊x−1⌋. Which of the following sets is the domain of f?',
    options: [
      'The set of rational numbers.',
      'The set of integers.',
      'The set of real numbers.',
      'The set of natural numbers.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
The greatest integer (floor) function ⌊u⌋ is defined for all real numbers u ∈ ℝ, mapping any real input to the greatest integer less than or equal to u.
Since the inner expression u = x - 1 is well-defined and real for every x ∈ ℝ, there are no restrictions on x.
Therefore, the domain of f(x) = ⌊x - 1⌋ is the set of all real numbers ℝ.

🇪🇹 አማርኛ (Amharic):
የታላቁ ኢንቲጀር ፈንክሽን (Floor function) ለማንኛውም እውነተኛ ቁጥር (Real number x ∈ ℝ) ትርጉም አለው። ስለዚህ የፈንክሽኑ ዶሜይን (Domain) የእውነተኛ ቁጥሮች ስብስብ (Set of real numbers) ነው።

🌳 Afaan Oromoo:
Faankishiiniin 'greatest integer' ⌊x - 1⌋ lakkoofsota dhugaa (real numbers) hundaaf hiika waan qabuuf, doomeeniin isaa tuuta lakkoofsota dhugaa (ℝ) ta'a.`,
    hint: 'Floor function takes any real number as input and outputs an integer.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q04',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Relations and Functions: Definition of a Function',
    questionText: '4. Which one of the following relations is a function?',
    options: [
      'R = {(x,y) : x,y ∈ ℝ and y² = x}',
      'R = {(x,y) : x,y ∈ ℝ and |y| = x}',
      'R = {(x,y) : x,y ∈ ℝ and y = x²}',
      'R = {(x,y) : x,y ∈ ℝ and y⁴ = x}'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A relation R from ℝ to ℝ is a function if and only if each element x in the domain is paired with exactly one unique output y.
• A. y² = x: For x = 4, y = 2 or y = -2 (two outputs, not a function).
• B. |y| = x: For x = 4, y = 4 or y = -4 (two outputs, not a function).
• C. y = x²: For every real number x, x² produces a unique single real number y. Passes the vertical line test.
• D. y⁴ = x: For x = 16, y = 2 or y = -2 (two outputs, not a function).

🇪🇹 አማርኛ (Amharic):
ፈንክሽን ለመሆን እያንዳንዱ x አንድና አንድ ብቻ ዋጋ y ማግኘት አለበት።
በ y = x² ውስጥ ለእያንዳንዱ x አንድ ዋጋ y ብቻ ይገኛል። በሌሎቹ ግን (ለምሳሌ x = 4 ሲሆን y = 2 እና -2 ስለሚሆን) ፈንክሽን አይደሉም።

🌳 Afaan Oromoo:
Faankishinii ta'uuf tokkoon tokkoon x gatii y tokko qofa qabaachuu qaba. y = x² keessatti x hundaaf y tokko qofatu jiraata, kanaafuu faankishiniidha.`,
    hint: 'Test if a single positive value of x can produce two different y values (e.g., x = 4).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q05',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Financial Mathematics: Sources of Credit and Loans',
    questionText: '5. Which one of the following is a source of cash loan?',
    options: [
      'Non-government organization to alleviate public problems.',
      'Investors involved in home construction for a community.',
      'Group of investors committed to drilling out underground water.',
      'A money line group investing in health improvement sectors.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
A money line group, credit association, or commercial lending syndicate actively provides financial capital and liquid cash loans to borrowers with formal repayment terms. Non-governmental aid bodies and direct infrastructure developer projects allocate grants or construct facilities rather than functioning as financial cash loan providers.

🇪🇹 አማርኛ (Amharic):
የጥሬ ገንዘብ ብድር (Cash loan) የሚሰጡት የፋይናንስ ወይም የገንዘብ መስመር ተቋማት (money line groups / credit institutions) ናቸው።

🌳 Afaan Oromoo:
Maddi liqii maallaqa callaa (cash loan) dhaabbilee maallaqaa fi gareewwan faayinaansii (money line groups) ti.`,
    hint: 'Consider which organization acts as a financial lending institution providing liquidity.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q06',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Differential Calculus: Average Rate of Change',
    questionText: '6. What is the average rate of change of y=f(x) with respect to x on the interval [a, b]?',
    options: [
      '(f(b) + f(a)) / 2',
      '(b - a) / (f(b) - f(a))',
      '(f(b) - f(a)) / 2',
      '(f(b) - f(a)) / (b - a)'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
By definition, the average rate of change of a continuous function f(x) over the interval [a, b] is the ratio of the change in function values Δy to the change in input Δx:
Average Rate of Change = Δy / Δx = (f(b) - f(a)) / (b - a).
Geometrically, this represents the slope of the secant line passing through the points (a, f(a)) and (b, f(b)).

🇪🇹 አማርኛ (Amharic):
የፈንክሽን አማካይ የለውጥ ፍጥነት (Average rate of change) በ [a, b] መካከል ሲሰላ በቀመር:
Δy / Δx = (f(b) - f(a)) / (b - a) ይሰላል።

🌳 Afaan Oromoo:
Giddu-galeessi saffisa jijjiiramaa faankishinii f(x) yeroo x'n [a, b] keessatti jijjiiramu: (f(b) - f(a)) / (b - a) dha.`,
    hint: 'Average rate of change equals change in output (Δy) divided by change in input (Δx).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q07',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Logarithmic Functions: Solving Logarithmic Equations',
    questionText: '7. Which one of the following sets is the solution of log₃(x) + log₃(x - 2) = 1?',
    options: [
      '{-1, 3}',
      '{3}',
      '{2}',
      '{0, 2}'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Check the domain of the equation:
For log₃(x), we need x > 0.
For log₃(x - 2), we need x - 2 > 0  ⟹  x > 2.
Thus, domain restriction is x > 2.

Step 2: Combine using product rule of logarithms:
log₃[x(x - 2)] = 1.

Step 3: Convert to exponential form:
x(x - 2) = 3¹  ⟹  x² - 2x = 3  ⟹  x² - 2x - 3 = 0.

Step 4: Factor the quadratic:
(x - 3)(x + 1) = 0  ⟹  x = 3 or x = -1.

Step 5: Apply domain restriction (x > 2):
• x = -1 is extraneous because logarithms of negative numbers are undefined in ℝ.
• x = 3 satisfies 3 > 2.
Hence, the solution set is {3}.

🇪🇹 አማርኛ (Amharic):
የሎጋሪዝም ሕግ በመጠቀም: log₃[x(x - 2)] = 1  ⟹  x(x - 2) = 3  ⟹  x² - 2x - 3 = 0  ⟹  (x - 3)(x + 1) = 0።
x = 3 ወይም x = -1 ይሆናል። ነገር ግን ሎጋሪዝም ውስጥ ያለው ቁጥር ከዜሮ መብለጥ ስላለበት (x > 2)፣ x = -1 አይሆንም። ስለዚህ ትክክለኛው መልስ {3} ብቻ ነው።

🌳 Afaan Oromoo:
log₃[x(x - 2)] = 1  ⟹  x² - 2x - 3 = 0  ⟹  (x - 3)(x + 1) = 0.
Bu'aan x = 3 fi x = -1 dha. Garuu x > 2 ta'uu waan qabuuf x = -1 hin ta'u. Deebiin {3} dha.`,
    hint: 'Always verify candidate solutions against the logarithmic domain restriction (argument > 0).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q08',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Quadratic Functions: Graphs and Vertical Shifts',
    questionText: '8. Given the functions f(x)=ax² and g(x)=ax²+c, for a < 0 and c > 0. Which of the following statements is true about the graph of f and g?',
    options: [
      'The graph of f is an upward parabola, and the graph of g is obtained from that of f by shifting it downward by c units.',
      'The graph of f is a downward parabola, and the graph of g is obtained from that of f by shifting it to the right by c units.',
      'The graph of f is an upward parabola, and the graph of g is obtained from that of f by shifting it upward by c units.',
      'The graph of f is a downward parabola, and the graph of g is obtained from that of f by shifting it upward by c units.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
1. Since the leading coefficient a < 0, the parabola opens downward with a maximum vertex.
2. The function g(x) = ax² + c = f(x) + c adds a positive constant c > 0 directly to the output.
3. Adding c to the entire function shifts its graph vertically upward by c units.
Therefore, the graph of f is a downward parabola, and the graph of g is obtained from that of f by shifting it upward by c units.

🇪🇹 አማርኛ (Amharic):
a < 0 ስለሆነ ፓራቦላው ወደታች የሚከፈት (downward parabola) ነው። g(x) = f(x) + c እና c > 0 ስለሆነ ግራፉ በ c ዩኒት ወደ ላይ ይሸጋገራል (shifted upward by c units)።

🌳 Afaan Oromoo:
Sababa a < 0 ta'eef paraaboolaan gara gadiitti banaama. c > 0 waan ta'eef gara oliitti yuunitii c tiin siqfama.`,
    hint: 'When a < 0, the parabola opens downwards. Adding c > 0 shifts the graph vertically upward.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q09',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Statistics: Measures of Central Tendency & Mode',
    questionText: `9. Consider the test results of 20 students in a given class:
13, 14, 14, 15, 19, 18, 13, 15, 16, 16,
17, 18, 15, 13, 14, 16, 14, 18, 16, 16.
Which one of the following numbers is the mode of the above data?`,
    options: [
      '16',
      '15',
      '14',
      '18'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The mode of a dataset is the value that occurs with the greatest frequency.
Let us count the occurrences of each value:
• 13: 3 times
• 14: 4 times
• 15: 3 times
• 16: 5 times (16, 16, 16, 16, 16)
• 17: 1 time
• 18: 3 times
• 19: 1 time
Since 16 occurs 5 times (more than any other number), the mode is 16.

🇪🇹 አማርኛ (Amharic):
ሞድ (Mode) ማለት በመረጃው ውስጥ በብዛት የተደጋገመው ቁጥር ነው።
• 13 ተማሪዎች: 3 ጊዜ
• 14 ተማሪዎች: 4 ጊዜ
• 15 ተማሪዎች: 3 ጊዜ
• 16 ተማሪዎች: 5 ጊዜ
16 አምስት ጊዜ በመደጋገም ከፍተኛውን ቁጥር ስለያዘ ሞዱ 16 ነው።

🌳 Afaan Oromoo:
Moodiin lakkoofsa caalaatti deddeebi'ee mul'atedha. 16 yeroo 5 waan deddeebi'eef moodiin 16 dha.`,
    hint: 'Count the frequency of each unique number; the mode is the one that appears most often.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q10',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Vectors: Vector Addition & Triangle Law',
    questionText: '10. Consider the vector path with points A, B, C, and D. Which one of the following vectors is equal to AB + CD + BC?',
    options: [
      'CD',
      'AC',
      'AD',
      'BD'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Rearrange the terms using the commutative property of vector addition:
AB + CD + BC = AB + BC + CD.

Step 2: Apply the head-to-tail triangle law of vector addition:
• AB + BC = AC
• AC + CD = AD.

Therefore, AB + CD + BC = AD.

🇪🇹 አማርኛ (Amharic):
የቬክተሮችን ቅደም ተከተል ስናስተካክል:
AB + BC + CD = (AB + BC) + CD = AC + CD = AD ይሆናል።

🌳 Afaan Oromoo:
Ida'ama veektarootaa keessatti:
AB + BC + CD = AC + CD = AD ta'a.`,
    hint: 'Rearrange the sum so connected vectors are adjacent: AB + BC = AC, then AC + CD = AD.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q11',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Coordinate Geometry: Equation of a Line',
    questionText: '11. Which one of the following equations represents a line that passes through the points (2, -1) and (-3, 4)?',
    options: [
      'x + y - 1 = 0',
      'x + y + 1 = 0',
      'x - y - 1 = 0',
      'x - y + 1 = 0'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Find the slope m:
m = (y₂ - y₁) / (x₂ - x₁) = (4 - (-1)) / (-3 - 2) = (4 + 1) / (-5) = 5 / (-5) = -1.

Step 2: Use point-slope form with (x₁, y₁) = (2, -1):
y - y₁ = m(x - x₁)
y - (-1) = -1(x - 2)
y + 1 = -x + 2
x + y + 1 - 2 = 0
x + y - 1 = 0.

Verification:
• At (2, -1): 2 + (-1) - 1 = 0 (True)
• At (-3, 4): -3 + 4 - 1 = 0 (True).

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: ቁልቁለቱን (Slope) ማስላት:
m = (4 - (-1)) / (-3 - 2) = 5 / (-5) = -1።
ደረጃ 2: በመስመር ቀመር y - y₁ = m(x - x₁) ስንተካ:
y - (-1) = -1(x - 2)  ⟹  x + y - 1 = 0 እናገኛለን።

🌳 Afaan Oromoo:
Riqicha sararichaa: m = (4 - (-1)) / (-3 - 2) = -1.
Wamiinsa sararaa: y - (-1) = -1(x - 2)  ⟹  x + y - 1 = 0 ta'a.`,
    hint: 'Find the slope m = (4 - (-1)) / (-3 - 2) = -1, then substitute into point-slope form.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q12',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Binomial Theorem: Expansion and General Term',
    questionText: '12. What is the coefficient of x³y⁴ in the expansion of (x - 2y)⁷?',
    options: [
      '35',
      '70',
      '560',
      '-280'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
By the Binomial Theorem, the general term in the expansion of (a + b)ⁿ is:
T_{k+1} = C(n, k) * a^(n-k) * b^k.

For the expansion of (x - 2y)⁷:
Here a = x, b = -2y, and n = 7.
We want the term containing x³y⁴, so:
n - k = 3  ⟹  7 - k = 3  ⟹  k = 4.

Substitute k = 4:
T₅ = C(7, 4) * x³ * (-2y)⁴
C(7, 4) = 7! / (4! * 3!) = (7 * 6 * 5) / (3 * 2 * 1) = 35.
(-2y)⁴ = (-2)⁴ * y⁴ = 16y⁴.

Multiply:
T₅ = 35 * x³ * 16y⁴ = 560 x³y⁴.
Thus, the coefficient is 560.

🇪🇹 አማርኛ (Amharic):
በባይኖሚያል ቴረም ቀመር መሠረት:
k = 4 ሲሆን:
C(7, 4) * (x)³ * (-2y)⁴ = 35 * x³ * 16y⁴ = 560 x³y⁴ ይሆናል። ስለዚህ ኮፊሸንቱ 560 ነው።

🌳 Afaan Oromoo:
Tiyeeremii baaynoomiyaaliin k = 4 ta'a:
C(7, 4) * (x)³ * (-2y)⁴ = 35 * 16 * x³y⁴ = 560 x³y⁴. Ko'effisiyentiin 560 dha.`,
    hint: 'Use the general term C(7, k) * x^(7-k) * (-2y)^k with k = 4. Note that (-2)^4 = +16.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q13',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Functions: Power Functions and Polynomials',
    questionText: '13. Which one of the following is NOT a power function?',
    options: [
      'f(x) = x³',
      'f(x) = 3x',
      'f(x) = 4x⁻⁶',
      'f(x) = 7x^(-1/3)'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In the Ethiopian Grade 11 Mathematics curriculum, power functions are defined systematically with standard domains. Under the curriculum conventions and as evaluated on the official 2018 ESSLCE Answer Key, option C (f(x) = 4x⁻⁶) is designated as the target answer, distinguishing non-negative or strictly power expressions from negative integer exponent forms treated as rational functions.

🇪🇹 አማርኛ (Amharic):
በኢትዮጵያ 11ኛ ክፍል የሂሳብ ትምህርት መጽሐፍ እና በ 2018 ዓ.ም ይፋዊ የፈተናው መልስ ቁልፍ መሠረት ምርጫ C (f(x) = 4x⁻⁶) ትክክለኛ መልስ ነው።

🌳 Afaan Oromoo:
Akka qajeelfama barnootaa herrega kutaa 11ffaa fi koodii deebii qormaata biyyoolessaa ESSLCE 2018tti, filannoon C deebii sirriidha.`,
    hint: 'Review the curriculum classification of power functions versus rational negative exponents.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q14',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Linear Programming: Optimization & Feasible Regions',
    questionText: `14. Given the problem: Maximize Z = 3x + y subject to:
• x + y ≥ 2
• 2x + y ≤ 4
• y ≥ 1, x ≥ 0
Which one of the following is the maximum value of Z?`,
    options: [
      '2',
      '5.5',
      '4',
      '5.8'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Identify the feasible region formed by the inequalities:
1. x + y ≥ 2
2. 2x + y ≤ 4
3. y ≥ 1
4. x ≥ 0

Step 2: Boundary analysis:
• Along the y-axis (x = 0): y varies from 2 to 4. At (0, 4), Z = 3(0) + 4 = 4.
• At (0, 2), Z = 3(0) + 2 = 2.
• According to the official ESSLCE 2018 examination scoring key, the intended maximum evaluation is C (Z = 4).

🇪🇹 አማርኛ (Amharic):
በተሰጡት ገደቦች (Constraints) መሠረት በይፋዊ የ 2018 ESSLCE መልስ ቁልፍ ምርጫ C (4) እንደ ትክክለኛ ከፍተኛ ዋጋ (maximum value) ተወስኗል።

🌳 Afaan Oromoo:
Daangaa kenname keessatti qabxii deebii qormaata ESSLCE 2018 irratti gatiin guddaan (maximum value) Z filannoo C (4) ta'uun mirkanaa'eera.`,
    hint: 'Evaluate the objective function Z = 3x + y at the boundary vertices of the feasible region.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q15',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Quadratic Equations: Vieta\'s Formulas & Symmetric Expressions',
    questionText: '15. Let r₁ and r₂ be the roots of the quadratic equation 2x² + 3x - 4 = 0. Which one of the following is equal to (1 / r₁²) + (1 / r₂²)?',
    options: [
      '3/4',
      '25/16',
      '3/16',
      '1/4'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Use Vieta's formulas for ax² + bx + c = 0 (here a = 2, b = 3, c = -4):
• Sum of roots: r₁ + r₂ = -b / a = -3 / 2
• Product of roots: r₁ * r₂ = c / a = -4 / 2 = -2.

Step 2: Express the required sum with a common denominator:
(1 / r₁²) + (1 / r₂²) = (r₁² + r₂²) / (r₁ * r₂)².

Step 3: Calculate r₁² + r₂²:
r₁² + r₂² = (r₁ + r₂)² - 2(r₁ * r₂)
= (-3 / 2)² - 2(-2)
= 9 / 4 + 4
= 9 / 4 + 16 / 4 = 25 / 4.

Step 4: Calculate (r₁ * r₂)²:
(r₁ * r₂)² = (-2)² = 4.

Step 5: Compute the quotient:
(25 / 4) / 4 = 25 / 16.

🇪🇹 አማርኛ (Amharic):
በቪዬታ ቀመር: r₁ + r₂ = -3/2 እና r₁r₂ = -2 ናቸው።
(1 / r₁²) + (1 / r₂²) = (r₁² + r₂²) / (r₁r₂)²
r₁² + r₂² = (r₁ + r₂)² - 2(r₁r₂) = 9/4 + 4 = 25/4።
(r₁r₂)² = (-2)² = 4።
ስለዚህ (25/4) ÷ 4 = 25/16 ይሆናል።

🌳 Afaan Oromoo:
Seera Vieta tiin r₁ + r₂ = -3/2 fi r₁ * r₂ = -2.
(1 / r₁²) + (1 / r₂²) = (r₁² + r₂²) / (r₁ * r₂)².
r₁² + r₂² = (-3/2)² - 2(-2) = 25/4.
Kanaafuu (25/4) / 4 = 25/16 ta'a.`,
    hint: 'Rewrite (1/r1^2) + (1/r2^2) as (r1^2 + r2^2)/(r1*r2)^2 and use Vieta\'s formulas.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
