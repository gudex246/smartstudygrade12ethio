import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2018_EC_PART3: Question[] = [
  {
    id: 'math-2018-q31',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Exponential Functions: Graph Transformations and Symmetry',
    questionText: '31. Which statement is true about the graphs of the exponential functions f(x) = a^x and g(x) = (1/a)^x where a > 1?',
    options: [
      'They are reflections of each other across the x-axis.',
      'They are reflections of each other across the y-axis.',
      'They never intersect each other.',
      'Both functions are monotonically increasing.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Express g(x) in terms of base a:
g(x) = (1 / a)^x = (a⁻¹)^x = a^(-x).

Step 2: Compare with f(x) = a^x:
Notice that g(x) = f(-x).
In function transformations, replacing the input x with -x reflects the graph across the y-axis.

Step 3: Verify points:
• Both pass through the common point (0, 1) because a⁰ = 1 and (1/a)⁰ = 1.
• When x = 1, f(1) = a, while g(-1) = a.
Therefore, the graphs are reflections of each other across the y-axis.

🇪🇹 አማርኛ (Amharic):
g(x) = (1/a)^x = a^(-x) = f(-x) ነው። በአጠቃላይ አንድ ፈንክሽን f(x) ወደ f(-x) ሲቀየር ግራፉ በ y-ዘንግ (y-axis) በኩል ይንጸባረቃል (reflection across the y-axis)። ሁለቱም በ (0, 1) ነጥብ ላይ ይገናኛሉ።

🌳 Afaan Oromoo:
g(x) = (1/a)^x = a^(-x) = f(-x) dha. Faankishiiniin f(-x) giraafii f(x) sarara y (y-axis) irratti kan calaqqisiisudha (reflection across y-axis).`,
    hint: 'Rewrite (1/a)^x as a^(-x) = f(-x), which is a reflection across the y-axis.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q32',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Statistics: Properties of Arithmetic Mean',
    questionText: '32. Which of the following statements is NOT true about the mean of a given data set?',
    options: [
      'It is highly affected by extreme values (outliers).',
      'The sum of the deviations of the items from the mean is always zero.',
      'It must always be one of the actual data values present in the set.',
      'It uses every value in the data set for its calculation.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Let us analyze each statement regarding the arithmetic mean (x̄ = ∑x / n):
• A. True: Extreme values (outliers) pull the mean substantially toward them.
• B. True: By algebraic definition, ∑(x - x̄) = ∑x - n(x̄) = n(x̄) - n(x̄) = 0.
• C. NOT TRUE: The mean does not have to be an actual value in the dataset (e.g., the mean of {2, 3} is 2.5, which is not in the set).
• D. True: The mean sums all observations and divides by the total count n.

🇪🇹 አማርኛ (Amharic):
አማካይ (Mean) ሁልጊዜ ከመረጃው ቁጥሮች አንዱ መሆን የለበትም። ለምሳሌ የ 2 እና 3 አማካይ 2.5 ሲሆን፣ 2.5 በመረጃው ውስጥ የለም። ስለዚህ አባባሉ ትክክል አይደለም።

🌳 Afaan Oromoo:
Giddu-galeessi (mean) yeroo hunda lakkoofsota tuutichaa keessaa tokko ta'uu hin qabu (fkn, giddu-galeessi 2 fi 3 gatii 2.5 yoo ta'u, 2.5 tuuticha keessa hin jiru). Kanaafuu filannoon C soba.`,
    hint: 'Consider a simple set like {1, 2}. Its mean is 1.5, which is not in the set.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q33',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Number Systems: Classification of Rational and Irrational Numbers',
    questionText: '33. Which one of the following numbers is an irrational number?',
    options: [
      '3.14159 (terminating)',
      '√16',
      '22/7',
      'π'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• A. 3.14159: Any terminating decimal is a rational number (314159 / 100000).
• B. √16 = 4 = 4/1, which is an integer and therefore rational.
• C. 22/7: This is a ratio of two integers p/q (with q ≠ 0), so it is a rational number (often used as an approximation of π).
• D. π: The mathematical constant π is a transcendental, irrational number with an infinite, non-repeating decimal expansion (3.1415926535...).

🇪🇹 አማርኛ (Amharic):
• 3.14159 የሚያበቃ (terminating) አስርዮሽ ስለሆነ ራሽናል ነው።
• √16 = 4 ሙሉ ቁጥር ስለሆነ ራሽናል ነው።
• 22/7 የሁለት ኢንቲጀሮች ጥምርታ ስለሆነ ራሽናል ነው።
• π የማያበቃና የማይደጋገም ኢ-ራሽናል (Irrational) ቁጥር ነው።

🌳 Afaan Oromoo:
π lakkoofsa 'irrational' (lakkoofsa hin xumuramneefi hin deddeebine) dha. 22/7 fi 3.14159 tilmaama qofa waan ta'aniif lakkoofsa raashinaaliidha.`,
    hint: 'Pi (π) is an irrational, transcendental number; 22/7 and 3.14159 are rational approximations.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q34',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Vectors: Cross Product and Area of a Parallelogram',
    questionText: '34. What is the area of the parallelogram spanned by the vectors u = i - 2j + k and v = 2i + 2j - k?',
    options: [
      '√14',
      '3√5',
      '9',
      '√35'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: The area of a parallelogram determined by vectors u and v is given by the magnitude of their cross product:
Area = ||u × v||.

Step 2: Compute the cross product u × v:
u × v = |  i   j   k |
        |  1  -2   1 |
        |  2   2  -1 |

= i [(-2)(-1) - (1)(2)] - j [(1)(-1) - (1)(2)] + k [(1)(2) - (-2)(2)]
= i [2 - 2] - j [-1 - 2] + k [2 + 4]
= 0i - j(-3) + 6k
= 0i + 3j + 6k = ⟨0, 3, 6⟩.

Step 3: Calculate the magnitude ||u × v||:
||u × v|| = √(0² + 3² + 6²)
= √(0 + 9 + 36)
= √45 = √(9 * 5) = 3√5.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: የፓራሌሎግራም ስፋት = ||u × v||
ደረጃ 2: የቬክተሮቹን ክሮስ ፕሮዳክት (Cross product) ማግኘት:
u × v = ⟨0, 3, 6⟩።
ደረጃ 3: ማግኒቲውዱን ማስላት:
||u × v|| = √(0² + 3² + 6²) = √45 = 3√5 ይሆናል።

🌳 Afaan Oromoo:
Bal'ina paraaleloogiraamii: ||u × v||.
u × v = ⟨0, 3, 6⟩.
Dheerinni (magnitude): √(0² + 3² + 6²) = √45 = 3√5 ta'a.`,
    hint: 'Compute the cross product u × v = (0, 3, 6), then find its length: √(0 + 9 + 36) = √45 = 3√5.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q35',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Trigonometry: Periodicity of Trigonometric Functions',
    questionText: '35. What is the fundamental period of the function f(x) = sin(x)?',
    options: [
      'π/2',
      'π',
      '2π',
      '4π'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A function f is periodic with fundamental period T if T is the smallest positive real number such that f(x + T) = f(x) for all x in the domain.
For the basic sine function f(x) = sin(x):
sin(x + 2π) = sin(x) for all x ∈ ℝ.
No positive number smaller than 2π satisfies this identity for all x (since sin(x + π) = -sin(x) ≠ sin(x)).
Therefore, the fundamental period of sin(x) is 2π (or 360°).

🇪🇹 አማርኛ (Amharic):
የሳይን ፈንክሽን f(x) = sin(x) መሰረታዊ ፔሪየድ (Fundamental period) 2π (ወይም 360°) ነው። ምክንያቱም sin(x + 2π) = sin(x) ስለሆነ ነው።

🌳 Afaan Oromoo:
Piriyeediin bu'uuraa faankishinii f(x) = sin(x) 2π dha, sababiin isaas sin(x + 2π) = sin(x) waan ta'eef.`,
    hint: 'The sine wave completes one full cycle every 2π radians.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q36',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Radicals & Exponents: Operations and Simplification',
    questionText: '36. What is the simplified form of the expression (√45 + 1/√5)(√5 - √20)?',
    options: [
      '16',
      '-16',
      '8',
      '-8'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Simplify the first factor (√45 + 1/√5):
• √45 = √(9 * 5) = 3√5.
• 1 / √5 = (1 * √5) / (√5 * √5) = √5 / 5 = (1/5)√5.
So, √45 + 1/√5 = 3√5 + (1/5)√5 = (16/5)√5.

Step 2: Simplify the second factor (√5 - √20):
• √20 = √(4 * 5) = 2√5.
So, √5 - √20 = √5 - 2√5 = -√5.

Step 3: Multiply the two simplified factors:
[(16/5)√5] * [-√5]
= -(16/5) * (√5 * √5)
= -(16/5) * 5
= -16.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: √45 + 1/√5 = 3√5 + (1/5)√5 = (16/5)√5
ደረጃ 2: √5 - √20 = √5 - 2√5 = -√5
ደረጃ 3: ማባዛት: (16/5)√5 * (-√5) = (16/5) * (-5) = -16 ይሆናል።

🌳 Afaan Oromoo:
(√45 + 1/√5) = 3√5 + √5/5 = (16/5)√5.
(√5 - √20) = √5 - 2√5 = -√5.
Baay'isuu: (16/5)√5 * (-√5) = (16/5) * (-5) = -16 ta'a.`,
    hint: 'Simplify each radical first: √45 = 3√5, 1/√5 = √5/5, and √20 = 2√5.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q37',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Statistics: Sampling Techniques',
    questionText: '37. In statistical sampling, if a population is divided into homogeneous groups and a random sample is drawn from each group, this method is known as:',
    options: [
      'Simple random sampling',
      'Cluster sampling',
      'Stratified sampling',
      'Systematic sampling'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
• Stratified sampling: The target population is partitioned into non-overlapping, internally homogeneous subpopulations called strata (e.g., by grade, gender, or region), and a simple random sample is drawn independently from each stratum.
• Cluster sampling: The population is divided into heterogeneous clusters; entire clusters are randomly chosen.
• Systematic sampling: Selecting every k-th item from an ordered list.
• Simple random sampling: Every individual in the entire population has an equal chance of selection without grouping.

🇪🇹 አማርኛ (Amharic):
የህዝብ ብዛት ተመሳሳይ ባህሪ ወዳላቸው ንዑስ ክፍሎች (Strata) ተከፍሎ ከእያንዳንዱ ክፍል በዕጣ ናሙና ሲወሰድ የተከፋፈለ የናሙና አወሳሰድ (Stratified sampling) ይባላል።

🌳 Afaan Oromoo:
Uummatni yoo garee amala walfakkaataa qabaniitti (strata) qoodamee garee tokkoon tokkoo keessaa carraan yoo filatame, mala saamplingii 'stratified sampling' jedhama.`,
    hint: 'Homogeneous groups are called strata; sampling from each stratum is stratified sampling.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q38',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Combinatorics: Fundamental Counting Principle',
    questionText: '38. A mathematics exam contains 10 multiple-choice questions and 3 short-answer questions. According to the multiplication principle, how many ways can a student select exactly one multiple-choice question and exactly one short-answer question to solve first?',
    options: [
      '13',
      '30',
      '10³',
      'C(13, 2)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Identify the two independent selection tasks:
• Task 1: Select 1 multiple-choice question out of 10 available choices ⟹ n₁ = 10 ways.
• Task 2: Select 1 short-answer question out of 3 available choices ⟹ n₂ = 3 ways.

Step 2: Apply the fundamental counting (multiplication) principle:
Total number of ways = n₁ * n₂ = 10 * 3 = 30 ways.

🇪🇹 አማርኛ (Amharic):
በማባዛት መርህ (Multiplication principle) መሠረት:
ተማሪው ከ 10 ምርጫ ጥያቄዎች 1 የሚመርጥበት መንገድ = 10
ከ 3 አጫጭር መልስ ጥያቄዎች 1 የሚመርጥበት መንገድ = 3
ጠቅላላ መንገዶች = 10 * 3 = 30 መንገዶች ይሆናሉ።

🌳 Afaan Oromoo:
Seera baay'isuutiin: gaaffii filannoo 10 keessaa tokko filachuuf filannoo 10, gaaffii gabaabaa 3 keessaa tokko filachuuf filannoo 3 qaba. Walumatti 10 * 3 = 30 ta'a.`,
    hint: 'Use the multiplication principle: multiply the number of choices for each task (10 × 3 = 30).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q39',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Transformational Geometry: Vector Translations',
    questionText: '39. A translation vector maps the origin (0, 0) to the point (-2, 4). Under this same translation, what is the image of the point (3, 1)?',
    options: [
      '(5, -3)',
      '(1, 5)',
      '(-6, 4)',
      '(-5, 3)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Determine the translation vector T = ⟨h, k⟩:
Since (0, 0) maps to (-2, 4):
h = -2 - 0 = -2
k = 4 - 0 = 4
Thus, T = ⟨-2, 4⟩.

Step 2: Apply the translation T to the point P(3, 1):
P'(x', y') = (x + h, y + k)
x' = 3 + (-2) = 1
y' = 1 + 4 = 5.

Therefore, the image is (1, 5).

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: የዝውውር ቬክተሩ T = ⟨-2, 4⟩ ነው።
ደረጃ 2: ነጥብ (3, 1) ሲዛወር:
x' = 3 + (-2) = 1
y' = 1 + 4 = 5
የተገኘው ምስል (1, 5) ነው።

🌳 Afaan Oromoo:
Veektarri jijjiirraa T = ⟨-2, 4⟩ dha.
Qabxiin (3, 1) gara: (3 + (-2), 1 + 4) = (1, 5) tti jijjiirama.`,
    hint: 'The shift is -2 in x and +4 in y. Add these to (3, 1) to get (1, 5).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q40',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Vectors in 3D: Position Vector between Two Points',
    questionText: '40. If the initial point of a vector is A(2, -1, 4) and the terminal point is B(4, 3, 2), what is the position vector AB?',
    options: [
      '⟨-2, -4, 2⟩',
      '⟨6, 2, 6⟩',
      '⟨2, 4, -2⟩',
      '⟨8, -3, 8⟩'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: The displacement/position vector AB from initial point A(x₁, y₁, z₁) to terminal point B(x₂, y₂, z₂) is:
AB = ⟨x₂ - x₁, y₂ - y₁, z₂ - z₁⟩.

Step 2: Substitute the coordinates:
x₂ - x₁ = 4 - 2 = 2
y₂ - y₁ = 3 - (-1) = 3 + 1 = 4
z₂ - z₁ = 2 - 4 = -2.

Therefore, the vector AB = ⟨2, 4, -2⟩.

🇪🇹 አማርኛ (Amharic):
ቬክተር AB = B - A = ⟨x₂ - x₁, y₂ - y₁, z₂ - z₁⟩
AB = ⟨4 - 2, 3 - (-1), 2 - 4⟩ = ⟨2, 4, -2⟩ ይሆናል።

🌳 Afaan Oromoo:
Veektara AB = B - A = ⟨4 - 2, 3 - (-1), 2 - 4⟩ = ⟨2, 4, -2⟩ ta'a.`,
    hint: 'Subtract the coordinates of the initial point A from terminal point B: B - A.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q41',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Vectors: Scalar Multiplication of Vectors',
    questionText: '41. Let vector u have an initial point at (1, 2) and a terminal point at (-3, 6). What are the components of the vector -1/2 u?',
    options: [
      '⟨2, -2⟩',
      '⟨-2, 2⟩',
      '⟨4, -4⟩',
      '⟨1, -1⟩'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Find the components of vector u:
u = ⟨x_term - x_init, y_term - y_init⟩
u = ⟨-3 - 1, 6 - 2⟩ = ⟨-4, 4⟩.

Step 2: Multiply vector u by the scalar -1/2:
(-1/2) u = -1/2 * ⟨-4, 4⟩
= ⟨(-1/2)(-4), (-1/2)(4)⟩
= ⟨2, -2⟩.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: ቬክተር u = ⟨-3 - 1, 6 - 2⟩ = ⟨-4, 4⟩
ደረጃ 2: በ -1/2 ማባዛት:
-1/2 * ⟨-4, 4⟩ = ⟨2, -2⟩ ይሆናል።

🌳 Afaan Oromoo:
u = ⟨-3 - 1, 6 - 2⟩ = ⟨-4, 4⟩.
-1/2 u = -1/2 * ⟨-4, 4⟩ = ⟨2, -2⟩ ta'a.`,
    hint: 'First find vector u = (-4, 4), then multiply each component by -1/2 to get (2, -2).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q42',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Rational Functions: Domain and Restrictions',
    questionText: '42. Consider the rational function f(x) = (x² - 4)/(x - 2). The domain of f is the set of all real numbers EXCEPT:',
    options: [
      '-2',
      '2',
      '0',
      'The domain is all real numbers.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
A rational function is undefined wherever its denominator is zero.
Setting the denominator to zero:
x - 2 = 0  ⟹  x = 2.
Even though the numerator factors as (x - 2)(x + 2) allowing algebraic simplification to x + 2 for x ≠ 2, the original function f(x) has a removable discontinuity (hole) at x = 2 and is strictly undefined at x = 2.
Therefore, the domain is all real numbers EXCEPT 2.

🇪🇹 አማርኛ (Amharic):
የፈንክሽኑ ታችኛው ክፍል (Denominator) x - 2 = 0 ሲሆን x = 2 ይሆናል። በ x = 2 ላይ ፈንክሽኑ ትርጉም ስለማይኖረው (undefined)፣ ዶሜይኑ ከ 2 በስተቀር ሁሉም እውነተኛ ቁጥሮች ናቸው።

🌳 Afaan Oromoo:
Bakka x - 2 = 0 ta'utti (x = 2), faankishiiniin hiika hin qabu. Kanaafuu doomeeniin isaa lakkoofsota dhugaa 2 irraa kan hafe hundadha.`,
    hint: 'Division by zero is undefined. The denominator x - 2 cannot equal 0, so x ≠ 2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q43',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Matrices: Algebraic Properties & Scalar Multiplication',
    questionText: '43. Which of the following properties of matrices and scalar multiplication r is TRUE for any two matrices A and B of the same dimension?',
    options: [
      'r(AB) = (rA)(rB)',
      'r(A + B) = rA + rB',
      '(A + B)^T = A^T - B^T',
      'det(A + B) = det(A) + det(B)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• A. False: r(AB) = (rA)B = A(rB), not (rA)(rB) which would introduce an extra factor of r².
• B. TRUE: Scalar multiplication distributes over matrix addition: r(A + B) = rA + rB for any matrices A, B of the same size and scalar r.
• C. False: The transpose of a sum is (A + B)^T = A^T + B^T.
• D. False: The determinant of a sum is NOT equal to the sum of the determinants.

🇪🇹 አማርኛ (Amharic):
የስኬላር እና ማትሪክስ ማባዛት ህግ እንደሚያሳየው: ስኬላር በድምር ላይ ይሰራጫል (Distributive property): r(A + B) = rA + rB።

🌳 Afaan Oromoo:
Amala herrega maatriksiitiin: iskaalaarri ida'ama maatriksii irratti raabsama: r(A + B) = rA + rB.`,
    hint: 'Scalar multiplication distributes over matrix addition: r(A + B) = rA + rB.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q44',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Matrices & Determinants: Determinant of Transpose',
    questionText: '44. If A is a 3×3 square matrix, which of the following is always true about its transpose A^T?',
    options: [
      'det(A^T) = -det(A)',
      'det(A^T) = 1 / det(A)',
      'det(A^T) = det(A)',
      'A^T = A⁻¹'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
A fundamental theorem of matrix algebra states that taking the transpose of a square matrix does not change its determinant:
det(A^T) = det(A).
This holds because row operations on A correspond directly to column operations on A^T, and cofactor expansions along rows of A yield identical sums to cofactor expansions along columns of A^T.

🇪🇹 አማርኛ (Amharic):
የማትሪክስ ትራንስፖዝ (A^T) ዲተርሚናንት ሁልጊዜ ከዋናው ማትሪክስ ዲተርሚናንት ጋር እኩል ነው: det(A^T) = det(A)።

🌳 Afaan Oromoo:
Diteerminaantiin tiraanispoozii maatriksii tokkoo diteerminaantii maatriksii isa jalqabaatiin wal qixa: det(A^T) = det(A).`,
    hint: 'Transposing a matrix preserves its determinant: det(A^T) = det(A).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q45',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Matrices & Determinants: Determinant of Inverse and Scaled Matrix',
    questionText: '45. Let A be a 3×3 invertible matrix with determinant |A| = 4. What is the determinant of 2(A⁻¹)?',
    options: [
      '1/2',
      '2',
      '8',
      '1/4'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Use the property of the determinant of an inverse matrix:
det(A⁻¹) = 1 / det(A) = 1 / 4.

Step 2: Use the scalar multiplication property of determinants for an n×n matrix:
det(c * M) = cⁿ * det(M).
Here, matrix A (and thus A⁻¹) has dimension n = 3, and scalar c = 2:
det(2 * A⁻¹) = 2³ * det(A⁻¹)
= 8 * (1 / 4)
= 2.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: det(A⁻¹) = 1 / det(A) = 1/4
ደረጃ 2: ለ 3x3 ማትሪክስ det(cM) = c³ det(M) ስለሆነ:
det(2A⁻¹) = 2³ * det(A⁻¹) = 8 * (1/4) = 2 ይሆናል።

🌳 Afaan Oromoo:
det(A⁻¹) = 1/det(A) = 1/4.
Maatriksii 3×3 tiif: det(2A⁻¹) = 2³ * det(A⁻¹) = 8 * (1/4) = 2 ta'a.`,
    hint: 'Remember det(c * M) = c^n * det(M). For a 3×3 matrix, det(2 * A^-1) = 2^3 * (1 / |A|) = 8 * (1/4) = 2.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
