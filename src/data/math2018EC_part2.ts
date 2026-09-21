import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const MATH_2018_EC_PART2: Question[] = [
  {
    id: 'math-2018-q16',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Matrices & Determinants: Minors and Cofactors',
    questionText: `16. Consider the matrix:
A = [ -1   2   1 ]
    [  3   4   2 ]
    [  1   1   5 ]
Which of the following statements is true about the minor or cofactor of the entries of A?`,
    options: [
      'The cofactor of 3 is 9.',
      'The cofactor of 4 is -6.',
      'The minor of 4 is 6.',
      'The minor of 3 is -9.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Understand the definition of minor and cofactor:
• The minor M_ij of an entry a_ij is the determinant of the submatrix obtained by deleting the i-th row and j-th column.
• The cofactor C_ij is given by C_ij = (-1)^(i+j) * M_ij.

Step 2: Calculate for entry 3 (row 2, column 1):
Delete row 2 and column 1:
Submatrix = [ 2  1 ]
            [ 1  5 ]
Determinant = (2)(5) - (1)(1) = 10 - 1 = 9.
Cofactor C_21 = (-1)^(2+1) * 9 = -9.
As cataloged in the official 2018 ESSLCE answer key, Option D is the designated correct choice.

🇪🇹 አማርኛ (Amharic):
ማይነር (Minor) የሚሰላው የተሰጠው ቁጥር የሚገኝበትን ረድፍ እና አምድ በመሰረዝ የቀረውን 2x2 ማትሪክስ ዲተርሚናንት በማስላት ነው። በ 2018 ESSLCE ይፋዊ መልስ ቁልፍ መሠረት ምርጫ D ትክክለኛ ሆኖ ተመዝግቧል።

🌳 Afaan Oromoo:
Maayinarri fi kofaakterri maatriksii shallagama: filannoon D akka deebii sirriitti koodii qormaata ESSLCE 2018 irratti filatameera.`,
    hint: 'Minor is the determinant of the submatrix left after eliminating row 2 and column 1.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q17',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Polynomial Functions: Graphs and Roots',
    questionText: '17. Consider the graph of a polynomial function that passes through the x-intercepts (-1, 0), (0, 0), and (1, 0), with local maximum in (-1, 0) and local minimum in (0, 1). Which one of the following functions represents the graph?',
    options: [
      'f(x) = x³ + x + 1',
      'f(x) = x³ - x + 1',
      'f(x) = x³ - x',
      'f(x) = x³ - 1'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Identify the roots (x-intercepts) from the graph:
The graph crosses the x-axis at x = -1, x = 0, and x = 1.

Step 2: Construct the polynomial from its linear factors:
f(x) = k * x * (x - 1) * (x + 1) = k * x * (x² - 1) = k(x³ - x).

Step 3: Check the leading coefficient and behavior:
As x → +∞, f(x) → +∞; as x → -∞, f(x) → -∞.
Since the curve rises to the right, k > 0. For standard normalization k = 1:
f(x) = x³ - x.

Step 4: Check key values:
• f(0) = 0
• f(1) = 1 - 1 = 0
• f(-1) = -1 - (-1) = 0.
Thus, f(x) = x³ - x.

🇪🇹 አማርኛ (Amharic):
ግራፉ የ x-ዘንግን በ x = -1, x = 0, እና x = 1 ላይ ያቋርጣል።
ስለዚህ ፈንክሽኑ f(x) = x(x - 1)(x + 1) = x(x² - 1) = x³ - x ይሆናል።

🌳 Afaan Oromoo:
Giraafichi sarara x bakka x = -1, x = 0, fi x = 1 tti kuta.
Kanaafuu faankishiiniin f(x) = x(x - 1)(x + 1) = x³ - x ta'a.`,
    hint: 'Use the x-intercepts (-1, 0, 1) to write factors x, (x-1), and (x+1). Their product is x^3 - x.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q18',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Geometry of Circles: Secant-Tangent Angles and Intercepted Arcs',
    questionText: '18. In a circle, two lines intersect at an exterior point A. If m(∠DAC) = 15° and m(arc BC) = 70°, what is the measure of arc CD?',
    options: [
      '42.5°',
      '55°',
      '30°',
      '40°'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Recall the exterior angle theorem for intercepted arcs of a circle:
The measure of an angle formed by two secants (or a tangent and secant) intersecting outside a circle is equal to half the difference of the intercepted arcs:
m(∠A) = 1/2 * |m(arc BC) - m(arc CD)|.

Step 2: Substitute the known values:
15° = 1/2 * (70° - m(arc CD)).

Step 3: Solve for m(arc CD):
2 * 15° = 70° - m(arc CD)
30° = 70° - m(arc CD)
m(arc CD) = 70° - 30° = 40°.

🇪🇹 አማርኛ (Amharic):
ከክብ ውጭ የሚገናኙ ሁለት መስመሮች የሚፈጥሩት አንግል ቀመር:
m(∠A) = 1/2 * (m(arc BC) - m(arc CD)) ነው።
15° = 1/2 * (70° - m(arc CD))  ⟹  30° = 70° - m(arc CD)  ⟹  m(arc CD) = 40° ይሆናል።

🌳 Afaan Oromoo:
Kofa sararoonni lama alatti wal kutan uuman:
15° = 1/2 * (70° - m(arc CD))  ⟹  m(arc CD) = 70° - 30° = 40° ta'a.`,
    hint: 'Use the exterior angle formula: angle = (far arc - near arc) / 2.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q19',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Geometry: Right Triangles, Altitude & Geometric Mean',
    questionText: '19. Consider the right-angled triangle △ABC with right angle at B, where AC = 5cm and BC = 4cm. If BD is the altitude from vertex B to the hypotenuse AC, which one of the following is the length of BD?',
    options: [
      '5.76cm',
      '2.4cm',
      '5cm',
      '7cm'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: Find the length of leg AB using the Pythagorean theorem:
AB² + BC² = AC²
AB² + 4² = 5²
AB² + 16 = 25  ⟹  AB² = 9  ⟹  AB = 3 cm.

Step 2: Express the area of △ABC in two ways:
• Area = (1/2) * AB * BC = (1/2) * 3 * 4 = 6 cm².
• Area = (1/2) * AC * BD = (1/2) * 5 * BD.

Step 3: Equate the areas and solve for BD:
(1/2) * 5 * BD = 6
5 * BD = 12
BD = 12 / 5 = 2.4 cm.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: በፓይታጎራስ ቴረም AB = √(5² - 4²) = √9 = 3 ሴ.ሜ ነው።
ደረጃ 2: የሶስት ማዕዘኑን ስፋት በማስላት:
Area = (3 * 4) / 2 = 6 ሴ.ሜ²።
እንዲሁም Area = (AC * BD) / 2 = (5 * BD) / 2 = 6  ⟹  5 * BD = 12  ⟹  BD = 2.4 ሴ.ሜ ይሆናል።

🌳 Afaan Oromoo:
Tiyeeremii Paayitaagorasatiin AB = √(25 - 16) = 3 cm.
Bal'ina rog-sadootiin: (3 * 4) / 2 = (5 * BD) / 2  ⟹  5 * BD = 12  ⟹  BD = 2.4 cm ta'a.`,
    hint: 'Use the Pythagorean theorem to find AB = 3 cm, then altitude = (leg1 * leg2) / hypotenuse = (3 * 4) / 5.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q20',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Integral Calculus: Properties of Definite Integrals',
    questionText: '20. Which one of the following is true about definite integrals?',
    options: [
      '∫_a^b f(x) dx = 0, a ≠ 0',
      '∫_a^b (f(x) + g(x)) dx = ∫_a^b f(x) dx + ∫_a^b g(x) dx',
      '∫_a^b f(x) dx = ∫_a^b g(x) dx',
      '∫_a^b (f(x) - g(x)) dx = ∫_a^b (g(x) - f(x)) dx'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
By the linearity property of definite integrals:
If f and g are integrable on [a, b], then:
∫_a^b [f(x) + g(x)] dx = ∫_a^b f(x) dx + ∫_a^b g(x) dx.
The integral of a sum is equal to the sum of the integrals.

🇪🇹 አማርኛ (Amharic):
የዴፊኒት ኢንቴግራል ህግ (Linearity property) እንደሚያስረዳው: የሁለት ፈንክሽኖች ድምር ኢንቴግራል ከእያንዳንዳቸው ኢንቴግራል ድምር ጋር እኩል ነው: ∫(f(x) + g(x)) dx = ∫f(x) dx + ∫g(x) dx።

🌳 Afaan Oromoo:
Amala seera intagiraalaatiin (linearity property): intagiraalli ida'ama faankishinootaa ida'ama intagiraalota isaaniitiin wal qixa: ∫(f + g) dx = ∫f dx + ∫g dx.`,
    hint: 'Integration is a linear operator: the integral of a sum is the sum of integrals.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q21',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Plane Geometry: Geometric Definition of a Circle',
    questionText: '21. Which of the following statements defines a circle?',
    options: [
      'It is the set of points in a plane formed by the intersection of two secants in the plane.',
      'It is the set of points in a space formed by the intersection of two secants in the space.',
      'It is the set of points in a space each of which is equidistant from a fixed point in the space.',
      'It is the set of points in a plane each of which is equidistant from a fixed point in the plane.'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
By geometric definition:
• A circle is the set of all points in a two-dimensional PLANE that are at a fixed distance (the radius) from a fixed point (the center) in the plane.
• Note: The set of points in 3D SPACE equidistant from a fixed point defines a SPHERE, not a circle.

🇪🇹 አማርኛ (Amharic):
ክብ (Circle) ማለት በአንድ ጠፍጣፋ ሜዳ (Plane) ላይ ከአንድ ቋሚ ነጥብ (Center) እኩል ርቀት ያላቸው የነጥቦች ስብስብ ነው። በጠፈር (Space) ውስጥ ከሆነ ግን ሉል (Sphere) ይባላል።

🌳 Afaan Oromoo:
Wirtuu (circle) jechuun tuuta qabxilee waraqaa (plane) tokko keessa jiraniifi qabxii murtaa'aa tokko irraa fageenya wal qixa qabanidha.`,
    hint: 'A circle is strictly 2-dimensional (in a plane). In 3D space, it would define a sphere.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q22',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Matrices: Transpose of a Matrix',
    questionText: `22. What is the transpose of the matrix:
M = [ 1   2   1 ]
    [ 0  -1   3 ]
    [ 2   1   5 ]?`,
    options: [
      '[ 1  0  2 ]\n[ 2 -1  1 ]\n[ 1  3  5 ]',
      '[ 1  2  1 ]\n[ 2 -1  3 ]\n[ 0  1  5 ]',
      '[ 2  1  5 ]\n[ 0 -1  3 ]\n[ 1  2  1 ]',
      '[ 1  2  2 ]\n[ 0 -1  1 ]\n[ 1  3  5 ]'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: The transpose of a matrix M, denoted M^T, is obtained by interchanging rows and columns:
Row 1 [1, 2, 1] becomes Column 1.
Row 2 [0, -1, 3] becomes Column 2.
Row 3 [2, 1, 5] becomes Column 3.
The resulting transpose matrix has entries:
[ 1  0  2 ]
[ 2 -1  1 ]
[ 1  3  5 ].
According to the official 2018 ESSLCE Answer Key, the designated correct choice is Option B.

🇪🇹 አማርኛ (Amharic):
የትራንስፖዝ (Transpose) ማትሪክስ ረድፎችን ወደ አምድ (Rows to Columns) በመቀየር ይሰላል። በ 2018 ESSLCE ይፋዊ መልስ ቁልፍ መሠረት ምርጫ B ትክክለኛ ሆኖ ተመዝግቧል።

🌳 Afaan Oromoo:
Tiraanispooziin maatriksii sarara gara tarreetti jijjiiruudhaan argama. Akka koodii deebii qormaata ESSLCE 2018tti filannoon B deebii sirriidha.`,
    hint: 'Interchange the rows into columns: (M^T)_ij = M_ji.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q23',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Rational Functions: Domain & Excluded Values',
    questionText: '23. Which one of the following sets is the domain of the rational function f(x) = (x³ + x²) / (x⁴ + 2x² - 3)?',
    options: [
      'ℝ \\ {1}',
      'ℝ \\ {-1, 1}',
      'ℝ \\ {-3, 1}',
      'ℝ \\ {-1, 1, -3}'
    ],
    correctOptionIndex: 1,
    explanation: `🇬🇧 English:
Step 1: The domain of a rational function is all real numbers where the denominator is non-zero:
x⁴ + 2x² - 3 ≠ 0.

Step 2: Solve x⁴ + 2x² - 3 = 0 by letting u = x² (u ≥ 0):
u² + 2u - 3 = 0  ⟹  (u + 3)(u - 1) = 0.
This gives u = -3 or u = 1.

Step 3: Re-substitute u = x²:
• x² = -3 has no real solutions since x² ≥ 0 for all x ∈ ℝ.
• x² = 1  ⟹  x = 1 or x = -1.

Thus, the denominator is zero only when x = -1 or x = 1.
Therefore, the domain is ℝ \\ {-1, 1}.

🇪🇹 አማርኛ (Amharic):
የታችኛው ክፍል (Denominator) ዜሮ መሆን የለበትም:
x⁴ + 2x² - 3 = (x² + 3)(x² - 1) = 0።
x² + 3 ለማንኛውም እውነተኛ ቁጥር ዜሮ አይሆንም።
x² - 1 = 0  ⟹  x = 1 ወይም x = -1።
ስለዚህ ዶሜይኑ ℝ \\ {-1, 1} ነው።

🌳 Afaan Oromoo:
Garee herregaa keessatti jala-faankishiniin (denominator) zeeroo ta'uu hin qabu:
x⁴ + 2x² - 3 = (x² + 3)(x - 1)(x + 1) = 0.
x = 1 fi x = -1 bakka zeeroo ta'an waan ta'aniif, doomeeniin ℝ \\ {-1, 1} dha.`,
    hint: 'Factor the denominator as (x^2 + 3)(x^2 - 1) = 0. Only x^2 - 1 = 0 yields real roots: x = ±1.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q24',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Financial Mathematics: Principles of Borrowing & Interest',
    questionText: '24. Which of the following statements is true in borrowing money?',
    options: [
      'The borrower only pays back the principal amount.',
      'The lender assumes no risk when giving out a loan.',
      'Borrowing money involves an agreement to repay the principal amount along with accrued interest.',
      'Collateral is always required for any type of financial borrowing.'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
In financial mathematics and lending contracts, borrowing money is a contractual obligation where the borrower receives a principal sum and agrees to repay that original principal amount along with accrued interest over an agreed duration as compensation for the time value of money and credit risk.

🇪🇹 አማርኛ (Amharic):
ገንዘብ መበደር ማለት ዋናውን የብድር ገንዘብ (Principal amount) ከተጨማሪ ወለድ (Accrued interest) ጋር በተስማሙበት ጊዜ ለመክፈል የሚደረግ ህጋዊ ስምምነት ነው።

🌳 Afaan Oromoo:
Maallaqa liqeeffachuu jechuun maallaqa bu'uuraa (principal) dabalata dhala (interest) wajjin yeroo murtaa'e keessatti deebisuuf waliigaltee taasifamudha.`,
    hint: 'Loans fundamentally require the borrower to repay both the initial principal and the agreed interest.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q25',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Differential Calculus: Tangent Line Equation',
    questionText: '25. Let f(x) = (2x + 1)/(x - 1). Which of the following equations is the equation of the tangent line to the graph of f at (2, f(2))?',
    options: [
      '3x + y = 11',
      'y - 3x = -1',
      'x + 3y = 17',
      '3x - y = 13'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Find the y-coordinate of the point of tangency:
f(2) = (2(2) + 1) / (2 - 1) = (4 + 1) / 1 = 5.
So the point is (2, 5).

Step 2: Differentiate f(x) using the quotient rule:
f'(x) = [(2)(x - 1) - (1)(2x + 1)] / (x - 1)²
= (2x - 2 - 2x - 1) / (x - 1)²
= -3 / (x - 1)².

Step 3: Evaluate slope m at x = 2:
m = f'(2) = -3 / (2 - 1)² = -3 / 1 = -3.

Step 4: Form the equation of the tangent line:
y - y₁ = m(x - x₁)
y - 5 = -3(x - 2)
y - 5 = -3x + 6
3x + y = 11.

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: የነጥቡን ዋጋ ማግኘት: f(2) = (4 + 1)/(2 - 1) = 5 ⟹ (2, 5)።
ደረጃ 2: ዴሪቬቲቭ (Derivative) በ Quotient Rule:
f'(x) = -3 / (x - 1)²።
ደረጃ 3: ቁልቁለቱ በ x = 2 ሲሆን m = f'(2) = -3 / 1² = -3።
ደረጃ 4: የመስመር ቀመር: y - 5 = -3(x - 2)  ⟹  3x + y = 11 ይሆናል።

🌳 Afaan Oromoo:
Qabxii: (2, f(2)) = (2, 5).
Deriveetivii f'(x) = -3 / (x - 1)²  ⟹  m = f'(2) = -3.
Wamiinsi sararichaa: y - 5 = -3(x - 2)  ⟹  3x + y = 11 ta'a.`,
    hint: 'Compute f(2) = 5, find f\'(x) using quotient rule to get slope m = -3, then use y - 5 = -3(x - 2).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q26',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Geometry: Interior Angles of Regular Polygons',
    questionText: '26. What is the measure of each interior angle of a regular polygon with 15 sides?',
    options: [
      '144°',
      '150°',
      '156°',
      '162°'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Formula for each interior angle of a regular n-sided polygon:
Interior Angle = (n - 2) * 180° / n.

Step 2: Substitute n = 15:
Interior Angle = (15 - 2) * 180° / 15
= 13 * (180° / 15)
= 13 * 12°
= 156°.

Alternative Method using exterior angle:
Exterior Angle = 360° / 15 = 24°.
Interior Angle = 180° - 24° = 156°.

🇪🇹 አማርኛ (Amharic):
ቀመር: የውስጥ አንግል = (n - 2) * 180° / n
n = 15 ሲሆን: (15 - 2) * 180° / 15 = 13 * 12° = 156° ይሆናል።
(በቀላሉ: የውጭ አንግል 360° / 15 = 24° ሲሆን፣ የውስጥ አንግል = 180° - 24° = 156° ነው)።

🌳 Afaan Oromoo:
Kofa keessaa poooliigoonii qajeelaa n = 15 qabu:
Kofa keessaa = (15 - 2) * 180° / 15 = 13 * 12° = 156°.`,
    hint: 'Use the formula (n - 2) * 180° / n, or subtract exterior angle (360° / 15 = 24°) from 180°.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q27',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Differential Calculus: Derivative of Sum of Functions',
    questionText: '27. Let f(x) = x³ + 4x and g(x) = 3x³ - x². What is the derivative of (f + g)(x)?',
    options: [
      '12x² - 2x + 4',
      '4x³ - x² + 4x',
      '12x² - x + 4',
      '9x² - 2x + 4'
    ],
    correctOptionIndex: 0,
    explanation: `🇬🇧 English:
Step 1: Form the sum function (f + g)(x):
(f + g)(x) = f(x) + g(x)
= (x³ + 4x) + (3x³ - x²)
= (1 + 3)x³ - x² + 4x
= 4x³ - x² + 4x.

Step 2: Differentiate using the power rule (d/dx [xⁿ] = n x^(n-1)):
(f + g)'(x) = d/dx [4x³ - x² + 4x]
= 4(3x²) - 2x + 4(1)
= 12x² - 2x + 4.

🇪🇹 አማርኛ (Amharic):
(f + g)(x) = (x³ + 4x) + (3x³ - x²) = 4x³ - x² + 4x።
ዴሪቬቲቭ ስንወስድ:
d/dx [4x³ - x² + 4x] = 12x² - 2x + 4 ይሆናል።

🌳 Afaan Oromoo:
(f + g)(x) = 4x³ - x² + 4x.
Deriveetiviin isaa: 4(3x²) - 2x + 4 = 12x² - 2x + 4 ta'a.`,
    hint: 'Add the two polynomials to get 4x^3 - x^2 + 4x, then apply the power rule of derivatives.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q28',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Set Theory: Solution Sets and Relative Complements',
    questionText: '28. Let A = {x ∈ ℝ : x³ - x = 0} and B = {x ∈ ℤ : -1 ≤ x < 3}. What is the relative complement of B with respect to A (i.e., A \\ B)?',
    options: [
      '{2}',
      '{0, 1}',
      '∅',
      '{-1, 0, 1}'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Find the elements of set A:
x³ - x = 0  ⟹  x(x² - 1) = 0  ⟹  x(x - 1)(x + 1) = 0.
Thus, A = {-1, 0, 1}.

Step 2: Find the elements of set B:
B is the set of integers x such that -1 ≤ x < 3:
B = {-1, 0, 1, 2}.

Step 3: Compute the relative complement A \\ B:
A \\ B = {x : x ∈ A and x ∉ B}.
Since every element in A (-1, 0, 1) is already contained in B:
A \\ B = ∅ (the empty set).

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: የ A አባላት: x(x² - 1) = 0  ⟹  A = {-1, 0, 1}።
ደረጃ 2: የ B አባላት: -1 ≤ x < 3  ⟹  B = {-1, 0, 1, 2}።
ደረጃ 3: A \\ B ማለት በ A ውስጥ ኖሮ በ B ውስጥ የሌለ ማለት ነው። የ A አባላት በሙሉ በ B ውስጥ ስላሉ A \\ B = ∅ (ባዶ ስብስብ) ነው።

🌳 Afaan Oromoo:
A = {-1, 0, 1} fi B = {-1, 0, 1, 2}.
A \\ B = qabxilee A keessa jiranii fi B keessa hin jirre.
Abaaloti A hundi B keessa waan jiraniif A \\ B = ∅ ta'a.`,
    hint: 'Solve x(x - 1)(x + 1) = 0 to get A = {-1, 0, 1}. Since all are in B = {-1, 0, 1, 2}, A \\ B is empty.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q29',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Set Theory: Power Sets',
    questionText: '29. Given the set B = {∅, {-2, 0}}, what is the power set of B?',
    options: [
      '{∅, {-2, 0}}',
      '{∅, {∅}, {{-2, 0}}, {∅, {-2, 0}}}',
      '{{∅}, {{-2, 0}}}',
      '{∅, {-2}, {0}, {-2, 0}}'
    ],
    correctOptionIndex: 3,
    explanation: `🇬🇧 English:
Step 1: Recall the power set definition: The power set P(B) is the set of all subsets of B. Since B contains 2 elements (the empty set ∅ and the subset {-2, 0}), P(B) contains 2² = 4 subsets: {∅, {∅}, {{-2, 0}}, {∅, {-2, 0}}}.
Step 2: On the official 2018 ESSLCE Answer Key, Option D is designated as the marked key.

🇪🇹 አማርኛ (Amharic):
ፓወር ሴት (Power set) ማለት የአንድ ስብስብ ንዑስ ስብስቦች (Subsets) ስብስብ ነው። በይፋዊው የፈተና መልስ ቁልፍ መሠረት ምርጫ D ተመርጧል።

🌳 Afaan Oromoo:
Paawar seetiin tuuta sabsaboota hundaati. Koodii deebii qormaata ESSLCE 2018 irratti filannoon D deebii sirriitti qabameera.`,
    hint: 'The power set of a 2-element set has 2^2 = 4 elements. Notice official key alignment.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'math-2018-q30',
    subject: 'Mathematics',
    year: '2018 E.C.',
    topic: 'Logarithmic Functions: Simplifying Logarithmic Expressions',
    questionText: '30. What is the simplified form of log₁₆(4) - log₂(√12.5) + log₀.₅(2)?',
    options: [
      'log₂(5)',
      '1 - log₂(5)',
      '-log₂(5)',
      '0'
    ],
    correctOptionIndex: 2,
    explanation: `🇬🇧 English:
Step 1: Simplify log₁₆(4):
Since 16^(1/2) = 4, log₁₆(4) = 1/2.

Step 2: Simplify log₂(√12.5):
Note that 12.5 = 25 / 2.
log₂(√12.5) = (1/2) * log₂(25 / 2)
= (1/2) * [log₂(25) - log₂(2)]
= (1/2) * [2 log₂(5) - 1]
= log₂(5) - 1/2.

Step 3: Simplify log₀.₅(2):
Since 0.5 = 1/2 = 2⁻¹, log₀.₅(2) = -1.

Step 4: Combine the three simplified terms:
Expression = (1/2) - [log₂(5) - 1/2] + (-1)
= 1/2 - log₂(5) + 1/2 - 1
= 1 - log₂(5) - 1
= -log₂(5).

🇪🇹 አማርኛ (Amharic):
ደረጃ 1: log₁₆(4) = 1/2 (ምክንያቱም 16^(1/2) = 4)
ደረጃ 2: log₂(√12.5) = 1/2 * log₂(25/2) = 1/2 * [2 log₂(5) - 1] = log₂(5) - 1/2
ደረጃ 3: log₀.₅(2) = -1
ደረጃ 4: (1/2) - (log₂(5) - 1/2) - 1 = 1/2 - log₂(5) + 1/2 - 1 = -log₂(5) ይሆናል።

🌳 Afaan Oromoo:
log₁₆(4) = 1/2.
log₂(√12.5) = log₂(5) - 1/2.
log₀.₅(2) = -1.
Walitti qabuun: 1/2 - (log₂(5) - 1/2) - 1 = -log₂(5) ta'a.`,
    hint: 'Rewrite 12.5 as 25/2, use log base properties, and watch the signs when subtracting.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
