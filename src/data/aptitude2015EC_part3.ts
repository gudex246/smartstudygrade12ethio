import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const APTITUDE_2015_EC_PART3: Question[] = [
  {
    id: 'apt-2015-41',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Data Interpretation',
    questionText: 'How many of the students are neither female nor age between (18-20) years old?',
    options: [
      '336',
      '224',
      '200',
      '120'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
"Neither female" means the student must be Male (Total males = 560).
"Nor age between (18-20)" means the student belongs to either Below 18 (10%) or Above 20 (30%), which totals $10\\% + 30\\% = 40\\%$ of the male population.
$$\\text{Number} = 560 \\times 40\\% = 560 \\times 0.40 = 224$$

🇪🇹 አማርኛ (Amharic):
"Neither female" ማለት ወንዶች (560) ናቸው።
"Nor age between (18-20)" ማለት እድሜያቸው ከ18 በታች (10%) ወይም ከ20 በላይ (30%) የሆኑ ሲሆን በድምሩ 40% ናቸው።
ስለዚህ ብዛት = $560 \\times 0.40 = 224$።

🌳 Afaan Oromoo:
Dhiira (560) keessaa waggaa 18-20 kan hin taane (waggaa 18 gadii fi 20 ol) = $10\\% + 30\\% = 40\\%$.
$560 \\times 0.40 = 224$.`,
    hint: 'Find 40% (non 18-20 age groups) of 560 (males).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-42',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Percentages & Profit',
    questionText: 'The profit of a certain Company this year is 102% of last year\'s profit. If the total profit of this year is 2,040,102 Birr, what was last year\'s profit?',
    options: [
      '2,080,104 Birr',
      '4,080,204 Birr',
      '2,000,100 Birr',
      '2,040,102 Birr'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Let $P$ be last year's profit in Birr.
$$102\\% \\times P = 2,040,102$$
$$1.02 P = 2,040,102$$
$$P = \\frac{2,040,102}{1.02} = 2,000,100 \\text{ Birr}$$

🇪🇹 አማርኛ (Amharic):
የባለፈው ዓመት ትርፍ $P$ ቢሆን፦
$$1.02 \\times P = 2,040,102$$
$$P = \\frac{2,040,102}{1.02} = 2,000,100 \\text{ ብር}$$

🌳 Afaan Oromoo:
Bu'aa bara darbee $P$ yoo ta'e:
$$1.02 P = 2,040,102 \\implies P = \\frac{2,040,102}{1.02} = 2,000,100 \\text{ Birr}$$.`,
    hint: 'Divide the current profit 2,040,102 by 1.02.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-43',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Exponential Growth',
    questionText: 'The population of a certain colony of insects will double in size every year. The population at the beginning was estimated to be 3,150. If P represents the population after n years, then which one of the following equations represents the model of the population after n years?',
    options: [
      'P(n) = 2(3,150)ⁿ',
      'P(n) = 3,150(2)ⁿ',
      'P(n) = 3,150(2)ⁿ⁻¹',
      'P(n) = 2(3,150)ⁿ⁻¹'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
For exponential doubling growth, the population function is given by:
$$P(n) = P_0 \\cdot (2)^n$$
Where initial population $P_0 = 3,150$ and $n$ is the number of years.
Thus, $P(n) = 3,150(2)^n$.

🇪🇹 አማርኛ (Amharic):
የህዝብ ቁጥር በየዓመቱ እጥፍ ሲሆን የኤክስፖነንሻል እድገት ቀመር፦
$$P(n) = P_0 \\times 2^n$$
የመጀመሪያው ብዛት $P_0 = 3,150$ ስለሆነ $P(n) = 3,150(2)^n$ ይሆናል።

🌳 Afaan Oromoo:
Baay'inni waggaa waggaan dachaa yoo ta'e:
$$P(n) = 3,150(2)^n$$.`,
    hint: 'Initial value × (growth factor)^time = 3,150 × 2^n.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-44',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Polynomial Remainder Theorem',
    questionText: 'Which one of the following is the remainder when f(x) = 3x⁴ - 2x³ - 5x² + 6 is divided by g(x) = x - 1?',
    options: [
      '3',
      '-2',
      '2',
      '-3'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
By the Polynomial Remainder Theorem, when a polynomial $f(x)$ is divided by $x - c$, the remainder is $R = f(c)$.
Here, $g(x) = x - 1 \\implies c = 1$.
$$R = f(1) = 3(1)^4 - 2(1)^3 - 5(1)^2 + 6$$
$$R = 3(1) - 2(1) - 5(1) + 6 = 3 - 2 - 5 + 6 = 2$$

🇪🇹 አማርኛ (Amharic):
በፖሊኖሚያል ቀሪ ቴዎረም መሠረት $f(x)$ ለ $x - 1$ ሲካፈል ቀሪው $f(1)$ ነው፦
$$f(1) = 3(1)^4 - 2(1)^3 - 5(1)^2 + 6 = 3 - 2 - 5 + 6 = 2$$

🌳 Afaan Oromoo:
Tiyooreemii hafteetiin, $x = 1$ bakka buusuun:
$$R = f(1) = 3(1)^4 - 2(1)^3 - 5(1)^2 + 6 = 2$$.`,
    hint: 'Evaluate f(1) using the Remainder Theorem.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-45',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Polynomial Properties',
    questionText: 'If f(x) and g(x) are n and m degree polynomial functions respectively and h(x) is the product of f(x) and g(x). Then which one of the following is NOT true about h(x)?',
    options: [
      'It has at most n + m roots.',
      'It has at most n + m - 1 turning points.',
      'It has at most m + n x-intercepts.',
      'It has at most m + n y-intercepts.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The degree of the product polynomial $h(x) = f(x) \\cdot g(x)$ is $n + m$.
• A polynomial of degree $n+m$ has at most $n+m$ real roots (x-intercepts).
• It has at most $(n+m) - 1$ turning points.
• However, ANY single-variable function $y = h(x)$ can have at most ONE y-intercept (at $x = 0$, $y = h(0)$), NEVER $m + n$ y-intercepts (by the Vertical Line Test). Therefore, statement D is NOT true.

🇪🇹 አማርኛ (Amharic):
የ $h(x)$ ዲግሪ $n + m$ ነው።
ማንኛውም የፖሊኖሚያል ፈንክሽን ቢበዛ **አንድ** የ y-intercept (በ $x = 0$ የሚገኝ) ብቻ አለው እንጂ $m + n$ y-intercept ሊኖረው አይችልም። ስለዚህ D ትክክል አይደለም።

🌳 Afaan Oromoo:
Fankishiniin poliinoomiyaalii kamiyyuu y-intercept tokko qofa qabaata ($x=0$ irratti). Kanaafuu filannoon D dogoggora.`,
    hint: 'A function can have at most ONE y-intercept, not m + n.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-46',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Algebraic Inequalities',
    questionText: 'Suppose x and y are positive real numbers and Q₁(x, y) = (x + y)³ and Q₂(x, y) = x³ + y³, then which one of the following is true about Q₁ and Q₂?',
    options: [
      'Q₁ is less than Q₂.',
      'Q₁ is greater than Q₂.',
      'Q₁ is equal to Q₂.',
      'The relationship cannot be determined from the information given.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Expanding $Q_1(x, y)$:
$$Q_1 = (x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$$
$$Q_2 = x^3 + y^3$$
$$Q_1 - Q_2 = 3x^2y + 3xy^2 = 3xy(x + y)$$
Since $x > 0$ and $y > 0$, the quantity $3xy(x + y) > 0$.
Therefore, $Q_1 > Q_2$ ($Q_1$ is strictly greater than $Q_2$).

🇪🇹 አማርኛ (Amharic):
$Q_1 = (x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$
$Q_1 - Q_2 = 3xy(x + y)$
$x$ እና $y$ አዎንታዊ ቁጥሮች ስለሆኑ $3xy(x + y) > 0$ ነው።
ስለዚህ $Q_1 > Q_2$ ($Q_1$ ከ $Q_2$ ይበልጣል)።

🌳 Afaan Oromoo:
$(x + y)^3 = x^3 + y^3 + 3x^2y + 3xy^2$. $x, y > 0$ waan ta'eef $Q_1 > Q_2$ ta'a.`,
    hint: 'Expand (x + y)³ and compare it to x³ + y³ for positive numbers.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-47',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Arithmetic Sequences',
    questionText: 'Suppose 3, 7, 11, 15, 19, 23, ... are the first six terms of an arithmetic sequence {aₙ}ₙ₌₁^∞, then which one of the following is the 15th term of the sequence?',
    options: [
      '60',
      '66',
      '59',
      '52'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
First term $a_1 = 3$.
Common difference $d = 7 - 3 = 4$.
The $n$-th term of an arithmetic sequence is:
$$a_n = a_1 + (n - 1)d$$
For $n = 15$:
$$a_{15} = 3 + (15 - 1)(4) = 3 + 14(4) = 3 + 56 = 59$$

🇪🇹 አማርኛ (Amharic):
የመጀመሪያ ቁጥር $a_1 = 3$፣ የልዩነት መጠን $d = 4$
$$a_{15} = a_1 + (15 - 1)d = 3 + 14(4) = 3 + 56 = 59$$

🌳 Afaan Oromoo:
$a_1 = 3, d = 4$.
$a_{15} = 3 + 14(4) = 59$.`,
    hint: 'Use the formula a_n = a_1 + (n - 1)d with a_1 = 3 and d = 4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-48',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Geometric Sequences',
    questionText: 'Which one of the following is the sequence {Gₙ}ₙ₌₁^∞ defined recursively by G₈ = 384 and Gₙ = 2Gₙ₋₁ for each n ≥ 1?',
    options: [
      '2, 4, 8, 16, 32 ...',
      '7, 14, 28, 56, 112 ...',
      '9, 18, 36, 72, 144 ...',
      '3, 6, 12, 24, 48 ...'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
The recurrence $G_n = 2G_{n-1}$ defines a geometric sequence with common ratio $r = 2$.
The explicit formula is $G_n = G_1 \\cdot 2^{n-1}$.
For $n = 8$:
$$G_8 = G_1 \\cdot 2^7 = G_1 \\cdot 128 = 384$$
$$G_1 = \\frac{384}{128} = 3$$
The sequence terms are:
$$G_1 = 3, G_2 = 6, G_3 = 12, G_4 = 24, G_5 = 48, \\dots$$

🇪🇹 አማርኛ (Amharic):
$G_n = G_1 \\times 2^{n-1}$
$G_8 = G_1 \\times 2^7 = 128 G_1 = 384 \\implies G_1 = 3$
ስለዚህ ቅደም ተከተሉ 3, 6, 12, 24, 48, ... ነው።

🌳 Afaan Oromoo:
$G_8 = G_1 \\times 2^7 = 384 \\implies G_1 = 3$.
Tartiibichi: 3, 6, 12, 24, 48 ... dha.`,
    hint: 'Find the first term G_1 by dividing 384 by 2^7 = 128.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-49',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Arithmetic Series',
    questionText: 'Which one of the following is the sum of all even natural numbers less than 99?',
    options: [
      '2,450',
      '5050',
      '5100',
      '2,550'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
The even natural numbers less than 99 are: $2, 4, 6, \\dots, 98$.
This is an arithmetic progression with:
• First term $a_1 = 2$
• Last term $a_n = 98$
• Common difference $d = 2$
• Number of terms $n = \\frac{98}{2} = 49$
$$\\text{Sum } S_{49} = \\frac{n}{2}(a_1 + a_n) = \\frac{49}{2}(2 + 98) = \\frac{49}{2}(100) = 49 \\times 50 = 2,450$$

🇪🇹 አማርኛ (Amharic):
ከ 99 በታች ያሉ ተከታታይ የኢቭን (ተጋማሽ) ቁጥሮች ድምር፦
$2, 4, 6, \\dots, 98$ ($n = 49$ ቁጥሮች)
$$S = \\frac{49}{2} \\times (2 + 98) = 49 \\times 50 = 2,450$$

🌳 Afaan Oromoo:
Lakkoofsota dhabduu (even) 99 gadii: 2, 4, 6, ..., 98 ($n = 49$).
Ida'amni isaanii = $49 \\times 50 = 2,450$.`,
    hint: 'Use the arithmetic series sum formula S = (n/2)(first + last) for n = 49.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-50',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Geometric Series',
    questionText: 'Which one of the following is the sum of the first six terms of the sequence {5(2)ⁿ}ₙ₌₁^∞?',
    options: [
      '80',
      '160',
      '155',
      '630'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Evaluating the terms for $n = 1$ to $6$:
• $a_1 = 5(2)^1 = 10$
• $a_2 = 5(2)^2 = 20$
• $a_3 = 5(2)^3 = 40$
• $a_4 = 5(2)^4 = 80$
• $a_5 = 5(2)^5 = 160$
• $a_6 = 5(2)^6 = 320$
$$\\text{Sum } S_6 = 10 + 20 + 40 + 80 + 160 + 320 = 630$$
Or using geometric series formula:
$$S_6 = \\frac{a_1(r^6 - 1)}{r - 1} = \\frac{10(2^6 - 1)}{2 - 1} = 10(64 - 1) = 630$$

🇪🇹 አማርኛ (Amharic):
የመጀመሪያዎቹ ስድስት ቁጥሮች፦ 10, 20, 40, 80, 160, 320
ድምር $S_6 = 10 + 20 + 40 + 80 + 160 + 320 = 630$።

🌳 Afaan Oromoo:
Miseensota 6 jalqabaa: 10 + 20 + 40 + 80 + 160 + 320 = 630.`,
    hint: 'The first term is 10 and common ratio is 2; sum = 10 × (64 - 1) = 630.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-51',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Systems of Linear Equations',
    questionText: 'Given the system of linear equations 2x + 3y = 11 and 3x + 2y = 9. If x and y satisfy the system, what is the value of y - x?',
    options: [
      '2',
      '3',
      '-2',
      '-3'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Subtract the second equation from the first:
$$(2x + 3y) - (3x + 2y) = 11 - 9$$
$$-x + y = 2 \\implies y - x = 2$$

Alternatively, solving for variables:
Subtract: $-x + y = 2 \\implies y = x + 2$.
Substitute into $2x + 3(x + 2) = 11 \\implies 5x + 6 = 11 \\implies x = 1, y = 3$.
Then $y - x = 3 - 1 = 2$.

🇪🇹 አማርኛ (Amharic):
የመጀመሪያውን እኩልታ ከሁለተኛው በመቀነስ፦
$$(2x + 3y) - (3x + 2y) = 11 - 9$$
$$-x + y = 2 \\implies y - x = 2$$

🌳 Afaan Oromoo:
Walqixxoo 1ffaa irraa isa 2ffaa hir'isuun:
$(2x + 3y) - (3x + 2y) = 11 - 9 \\implies y - x = 2$.`,
    hint: 'Subtracting (3x + 2y = 9) from (2x + 3y = 11) directly gives y - x = 2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-52',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Fundamental Counting Principle',
    questionText: 'A person wants to have a four digit password with the first digit greater than 5. How many different passwords the person can create using the digits 0 to 9?',
    options: [
      '2,560',
      '4,000',
      '10,000',
      '5,040'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
• 1st digit: Digits greater than 5 are {6, 7, 8, 9} (4 possibilities).
• 2nd digit: Any digit from 0 to 9 (10 possibilities).
• 3rd digit: Any digit from 0 to 9 (10 possibilities).
• 4th digit: Any digit from 0 to 9 (10 possibilities).
$$\\text{Total Passwords} = 4 \\times 10 \\times 10 \\times 10 = 4,000$$

🇪🇹 አማርኛ (Amharic):
• 1ኛ አሃዝ፦ ከ 5 በላይ የሆኑት {6, 7, 8, 9} = 4 አማራጮች
• 2ኛ አሃዝ፦ {0-9} = 10 አማራጮች
• 3ኛ አሃዝ፦ {0-9} = 10 አማራጮች
• 4ኛ አሃዝ፦ {0-9} = 10 አማራጮች
ድምር አማራጮች = $4 \\times 10 \\times 10 \\times 10 = 4,000$።

🌳 Afaan Oromoo:
Lakkoofsi 1ffaa {6, 7, 8, 9} (filannoo 4).
Hafan sadan filannoo 10 qabu.
Walumaagalatti = $4 \\times 10 \\times 10 \\times 10 = 4,000$.`,
    hint: '4 choices for the first digit × 10 choices for each of the other three digits = 4,000.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-53',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Probability',
    questionText: 'A fair 12-sided die, with faces numbered 1 to 12, is to be rolled once. What is the probability of rolling a number that is not 4, 6 and 11?',
    options: [
      '1/4',
      '11/12',
      '1/12',
      '3/4'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
• Total possible outcomes = 12 (numbers 1 to 12).
• Excluded numbers = {4, 6, 11} (3 outcomes).
• Favorable outcomes = $12 - 3 = 9$.
$$P(\\text{not } 4, 6, 11) = \\frac{9}{12} = \\frac{3}{4}$$

🇪🇹 አማርኛ (Amharic):
• ጠቅላላ ውጤቶች = 12
• የማይፈለጉ ቁጥሮች {4, 6, 11} = 3
• ተፈላጊ ውጤቶች = $12 - 3 = 9$
$$P = \\frac{9}{12} = \\frac{3}{4}$$

🌳 Afaan Oromoo:
Lakkoofsi hin barbaadamne 3 dha ({4, 6, 11}).
Lakkoofsi hafe = $12 - 3 = 9$.
Carraan = $\\frac{9}{12} = \\frac{3}{4}$.`,
    hint: 'Subtract the 3 excluded numbers from 12 to get 9/12 = 3/4.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-54',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Percentages',
    questionText: 'A container contains 48 liters of water. If 5% of the water in the container is used, how much water is left in the container?',
    options: [
      '46.4',
      '45.4',
      '45.6',
      '46.6'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Water used = $48 \\times 5\\% = 48 \\times 0.05 = 2.4 \\text{ liters}$.
Water left = $48 - 2.4 = 45.6 \\text{ liters}$.
Or:
$$\\text{Water left} = 48 \\times (1 - 0.05) = 48 \\times 0.95 = 45.6 \\text{ liters}$$

🇪🇹 አማርኛ (Amharic):
ጥቅም ላይ የዋለ = $48 \\times 0.05 = 2.4$ ሊትር
የቀረው ውሃ = $48 - 2.4 = 45.6$ ሊትር።

🌳 Afaan Oromoo:
Bishaan dhumate = $48 \\times 0.05 = 2.4$ liitira.
Bishaan hafe = $48 - 2.4 = 45.6$ liitira.`,
    hint: 'Calculate 95% of 48 liters = 45.6 liters.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-55',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Geometric Word Problems',
    questionText: 'The length of a rectangle is 3 units more than its width. If the width is increased by 4 units and the length is decreased by 2 units then its area will increase by 10 square units. What will be the length of the rectangle?',
    options: [
      '6 units',
      '4 units',
      '7 units',
      '3 units'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Let the original width be $w$.
Original length $L = w + 3$.
Original area $A_1 = w(w + 3) = w^2 + 3w$.

New width $= w + 4$.
New length $= (w + 3) - 2 = w + 1$.
New area $A_2 = (w + 4)(w + 1) = w^2 + 5w + 4$.

Given $A_2 - A_1 = 10$:
$$(w^2 + 5w + 4) - (w^2 + 3w) = 10$$
$$2w + 4 = 10 \\implies 2w = 6 \\implies w = 3$$
Thus, original length $L = w + 3 = 3 + 3 = 6 \\text{ units}$.

🇪🇹 አማርኛ (Amharic):
የመጀመሪያ ስፋት $w$፣ ርዝመት $L = w + 3$ ቢሆን፦
አዲሱ ስፋት $= w + 4$፣ አዲሱ ርዝመት $= w + 1$
አዲሱ ስፋት $(w + 4)(w + 1) - w(w + 3) = 10$
$$2w + 4 = 10 \\implies 2w = 6 \\implies w = 3$$
ስለዚህ ርዝመቱ $L = 3 + 3 = 6$ ዩኒት ነው።

🌳 Afaan Oromoo:
$w = 3 \\implies L = w + 3 = 6\\text{ units}$.`,
    hint: 'Set up (w + 4)(w + 1) - w(w + 3) = 10 to find w = 3, then length = 6.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-56',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Systems of Linear Equations',
    questionText: 'Which one of the following is the solution set of the system of linear equations:\n2x + 3y = 1\nx - 4y = 6',
    options: [
      '{(-1, 1)}',
      '{(-2, -1)}',
      '{(2, -1)}',
      '{(-2, 1)}'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
From equation (2): $x = 4y + 6$.
Substitute $x$ into equation (1):
$$2(4y + 6) + 3y = 1$$
$$8y + 12 + 3y = 1$$
$$11y = 1 - 12 = -11 \\implies y = -1$$
Substitute $y = -1$ back into equation for $x$:
$$x = 4(-1) + 6 = -4 + 6 = 2$$
The solution set is $\{(2, -1)\}$.

🇪🇹 አማርኛ (Amharic):
ከሁለተኛው እኩልታ $x = 4y + 6$
በአንደኛው እኩልታ በመተካት፦
$$2(4y + 6) + 3y = 1 \\implies 11y = -11 \\implies y = -1$$
$$x = 4(-1) + 6 = 2$$
የመፍትሄ ስብስብ $\{(2, -1)\}$ ነው።

🌳 Afaan Oromoo:
$x = 4y + 6 \\implies 2(4y + 6) + 3y = 1 \\implies y = -1, x = 2$.
Furmaata: $\{(2, -1)\}$.`,
    hint: 'Substitute x = 4y + 6 into 2x + 3y = 1 to get y = -1 and x = 2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-57',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Linear Inequalities',
    questionText: 'Given the system of linear inequalities:\nx + y ≥ 2\nx - y ≤ 2\n\nThen which one of the following ordered pair of numbers does NOT satisfy the system?',
    options: [
      '(1, 3)',
      '(3, -1)',
      '(-1, 3)',
      '(3, 1)'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Test the ordered pairs in both inequalities:
• (1, 3): $1+3=4 \\ge 2$ (True) and $1-3=-2 \\le 2$ (True).
• (3, -1): $3+(-1)=2 \\ge 2$ (True), BUT $3 - (-1) = 4 \\le 2$ (FALSE!).
• (-1, 3): $-1+3=2 \\ge 2$ (True) and $-1-3=-4 \\le 2$ (True).
• (3, 1): $3+1=4 \\ge 2$ (True) and $3-1=2 \\le 2$ (True).
Therefore, $(3, -1)$ does NOT satisfy the system.

🇪🇹 አማርኛ (Amharic):
(3, -1) ን ስንተካ፦
$x - y = 3 - (-1) = 4 \\le 2$ (ስህተት!)
ስለዚህ (3, -1) ስርዓቱን አያሟላም።

🌳 Afaan Oromoo:
$(3, -1)$ yoo bakka buufne: $3 - (-1) = 4 \\le 2$ (soba). Kanaafuu $(3, -1)$ hin guutu.`,
    hint: 'For (3, -1), x - y = 3 - (-1) = 4, which is not ≤ 2.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-58',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Systems of Linear Inequalities',
    questionText: 'Let the system of linear inequalities be given by:\n2x + y ≥ 6\n4x + 2y ≤ 10\n\nThen the system has:',
    options: [
      'infinite solutions.',
      'no solution.',
      'only two different solutions.',
      'unique solution.'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Divide the second inequality by 2:
$$4x + 2y \\le 10 \\implies 2x + y \\le 5$$
The system is:
$$\\begin{cases} 2x + y \\ge 6 \\\\ 2x + y \\le 5 \\end{cases}$$
These represent two parallel boundary lines ($2x + y = 6$ and $2x + y = 5$) with shading pointing in opposite, non-overlapping directions ($z \\ge 6$ and $z \\le 5$). Since no real number can be simultaneously $\\ge 6$ and $\\le 5$, the system has **no solution**.

🇪🇹 አማርኛ (Amharic):
ሁለተኛውን አለመመጣጠን ለ 2 ስናካፍል $2x + y \\le 5$ ይሆናል።
የቀረበው ስርዓት $2x + y \\ge 6$ እና $2x + y \\le 5$ ሲሆን፣ አንድ እሴት በአንድ ጊዜ ከ 6 በላይ እና ከ 5 በታች ሊሆን ስለማይችል ስርዓቱ ምንም መፍትሄ የለውም (No solution)።

🌳 Afaan Oromoo:
$2x + y \\ge 6$ fi $2x + y \\le 5$ wal hin tuqan waan ta'eef furmaata hin qabu (no solution).`,
    hint: 'Dividing 4x + 2y ≤ 10 by 2 gives 2x + y ≤ 5, which contradicts 2x + y ≥ 6.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-59',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Linear Cost Functions',
    questionText: 'The starting cost of getting a certain service is 110 Birr. If you have to pay 12 Birr per hour for each additional service you get, how long a time you use the service for 266 Birr payment?',
    options: [
      '13 hours',
      '11 hours',
      '10 hours',
      '12 hours'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Let $h$ be the number of service hours.
$$\\text{Total Cost} = 110 + 12h = 266$$
$$12h = 266 - 110 = 156$$
$$h = \\frac{156}{12} = 13 \\text{ hours}$$

🇪🇹 አማርኛ (Amharic):
ጠቅላላ ወጪ $110 + 12h = 266$ ብር
$$12h = 266 - 110 = 156$$
$$h = 156 / 12 = 13 \\text{ ሰዓታት}$$

🌳 Afaan Oromoo:
$110 + 12h = 266 \\implies 12h = 156 \\implies h = 13\\text{ sa'aatii}$.`,
    hint: 'Subtract the fixed 110 Birr from 266, then divide 156 by 12.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2015-60',
    subject: 'Aptitude',
    year: '2015 E.C.',
    topic: 'Quantitative Reasoning - Similar Triangles & Geometry',
    questionText: 'Suppose ΔABC ~ ΔDEF and DF is two third of AC. If DE = 12m, then how much is AB?',
    options: [
      '8m',
      '24m',
      '6m',
      '18m'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Since $\\triangle ABC \\sim \\triangle DEF$, corresponding side lengths are proportional:
$$\\frac{DF}{AC} = \\frac{DE}{AB} = \\frac{2}{3}$$
Given $DE = 12\\text{m}$:
$$\\frac{12}{AB} = \\frac{2}{3}$$
$$2 \\cdot AB = 12 \\times 3 = 36$$
$$AB = \\frac{36}{2} = 18\\text{m}$$

🇪🇹 አማርኛ (Amharic):
ተመሳሳይ ሶስት ማዕዘኖች $\\triangle ABC \\sim \\triangle DEF$ ስለሆኑ፦
$$\\frac{DE}{AB} = \\frac{DF}{AC} = \\frac{2}{3}$$
$$\\frac{12}{AB} = \\frac{2}{3} \\implies 2 AB = 36 \\implies AB = 18\\text{ ሜትር}$$

🌳 Afaan Oromoo:
Walsimsiisa kofa-sadootaatiin:
$\\frac{DE}{AB} = \\frac{2}{3} \\implies \\frac{12}{AB} = \\frac{2}{3} \\implies AB = 18\\text{m}$.`,
    hint: 'Set up the proportion 12 / AB = 2 / 3, which gives AB = 18m.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-17',
    createdBy: ADMIN_EMAIL
  }
];
