import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

export const APTITUDE_2017_EC_PART3: Question[] = [
  // Quantitative Reasoning (Questions 41 - 60)
  {
    id: 'apt-2017-q41',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Work and Rate Problems - Pipe Filling',
    questionText: '41. Two pipes A and B are used to fill a water tank. Pipe A can fill the tank in 3 hours, and pipe B can fill the same tank in 6 hours. How long will it take in hours to fill the tank if both pipes are opened at the same time?',
    options: [
      '5',
      '4',
      '9',
      '2'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Determine the individual filling rates per hour:
• Rate of Pipe A = 1/3 tank per hour.
• Rate of Pipe B = 1/6 tank per hour.

Step 2: Calculate the combined filling rate:
Combined Rate = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 tank per hour.

Step 3: Calculate the time taken to fill 1 complete tank:
Time = 1 / (Combined Rate) = 1 / (1/2) = 2 hours.`,
    hint: 'Combined rate is 1/3 + 1/6 = 1/2 tank per hour. Time = 1 / (1/2) = 2 hours.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q42',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Work and Time - Machine Output',
    questionText: '42. A milk factory has only two pipe machines used to fill bottles for market. The old and new machines can fill 35 and 50 bottles per hour, respectively, and a total of 590 bottles are filled every day. One day the old machine was broken after working for 4 hours. How long will it take in hours for the new machine to fill the remaining bottles on that day?',
    options: [
      '8',
      '5',
      '13',
      '7'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: During the first 4 hours, both machines operated simultaneously:
• Combined rate = 35 + 50 = 85 bottles/hour.
• Bottles filled in the first 4 hours = 85 × 4 = 340 bottles.

Step 2: Find remaining bottles to be filled:
• Remaining bottles = 590 - 340 = 250 bottles.

Step 3: Calculate time required for the new machine (50 bottles/hour) to complete the remaining bottles:
• Time = 250 / 50 = 5 hours.`,
    hint: 'Both machines filled 340 bottles in 4 hours. The remaining 250 bottles take 250/50 = 5 hours for the new machine.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q43',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Geometry - Sphere Volume and Surface Area',
    questionText: '43. If a spherical soccer ball has a volume of 36π cm³, then which one of the following is the surface area of the ball in square centimeter?',
    options: [
      '(16π)/3',
      '12π',
      '36π',
      '(32π)/3'
    ],
    correctOptionIndex: 2,
    explanation: `Step 1: Find the radius r using the sphere volume formula V = (4/3)πr³:
(4/3)πr³ = 36π
Divide both sides by π:
(4/3)r³ = 36  =>  r³ = 36 × (3/4) = 27  =>  r = 3 cm.

Step 2: Calculate the surface area A = 4πr²:
A = 4π(3)² = 4π(9) = 36π cm².`,
    hint: 'Solve (4/3)πr³ = 36π to find r = 3 cm. Then Surface Area = 4π(3)² = 36π cm².',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q44',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Quadratic Functions - Maximum Height',
    questionText: '44. A ball is shot into the air from the top of the building. The height in meter is given by h(t) = kt - t² + 30, where t is the time taken in second. What is the possible value of k if the maximum value of height from the ground is 34?',
    options: [
      '√2',
      '4',
      '5',
      '2'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Standard form of the quadratic function:
h(t) = -t² + kt + 30.

Step 2: The vertex (time of maximum height) occurs at:
t = -b / (2a) = -k / (2(-1)) = k / 2.

Step 3: Substitute t = k / 2 into h(t) to express the maximum height:
h(k / 2) = -(k / 2)² + k(k / 2) + 30 = -(k² / 4) + (k² / 2) + 30 = (k² / 4) + 30.

Step 4: Set the maximum height equal to 34:
(k² / 4) + 30 = 34  =>  k² / 4 = 4  =>  k² = 16  =>  k = 4 (for k > 0).`,
    hint: 'Vertex height is k²/4 + 30. Setting k²/4 + 30 = 34 gives k² = 16, so k = 4.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q45',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Word Problems - Fraction and Daily Yield',
    questionText: '45. A farmer has ten cows. Every day, he receives the same amount of milk in liters from each cow. One day, due to the food supply, he received half of the daily amount of milk from four cows; he received three-fourth of the daily amount of milk from three cows, and no milk from the other three cows. In total, he didn\'t receive ninety-two liters of milk on that day. How many liters of milk did he receive on that particular day?',
    options: [
      '92',
      '16',
      '160',
      '68'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Let x be the normal daily amount of milk produced by each cow in liters.
• Total normal production from 10 cows = 10x liters.

Step 2: Calculate the milk received on that day:
• From 4 cows: 4 × (1/2 x) = 2x.
• From 3 cows: 3 × (3/4 x) = (9/4)x.
• From 3 cows: 3 × 0 = 0.
• Total milk received = 2x + (9/4)x = (8x + 9x)/4 = (17/4)x.

Step 3: Calculate the shortfall (amount not received):
Shortfall = 10x - (17/4)x = (40x - 17x)/4 = (23/4)x.
Given shortfall = 92 liters:
(23/4)x = 92  =>  23x = 368  =>  x = 16 liters per cow.

Step 4: Find the total milk received:
Milk received = (17/4) × 16 = 17 × 4 = 68 liters.`,
    hint: 'Shortfall is (23/4)x = 92, so x = 16 liters per cow. Total received = (17/4)(16) = 68 liters.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },

  // Bar Graph Interpretation (Questions 46 - 48)
  {
    id: 'apt-2017-q46',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Data Interpretation - Bar Graph Average',
    questionText: `Study pattern of a student over 32 days:
• 2 hours: 10 days
• 4 hours: 7 days
• 6 hours: 7 days
• 8 hours: 5 days
• 10 hours: 3 days

46. How many days did the student study more than the average amount of study?`,
    options: [
      '5',
      '8',
      '17',
      '15'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Calculate the total study hours:
Total Hours = (2 × 10) + (4 × 7) + (6 × 7) + (8 × 5) + (10 × 3)
= 20 + 28 + 42 + 40 + 30 = 160 hours.

Step 2: Calculate the mean (average) daily study time:
Average = 160 hours / 32 days = 5 hours per day.

Step 3: Count days with study time strictly greater than 5 hours:
• 6 hours: 7 days
• 8 hours: 5 days
• 10 hours: 3 days
Total days = 7 + 5 + 3 = 15 days.`,
    hint: 'Average daily study is 160/32 = 5 hours. Days studying > 5 hours: 7 (at 6h) + 5 (at 8h) + 3 (at 10h) = 15 days.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q47',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Data Interpretation - Frequency Counting',
    questionText: '47. Based on the 32-day study graph (2h: 10 days, 4h: 7 days, 6h: 7 days, 8h: 5 days, 10h: 3 days), how many days did the student study less than 8 hours?',
    options: [
      '18',
      '6',
      '24',
      '12'
    ],
    correctOptionIndex: 2,
    explanation: `Days with study duration strictly less than 8 hours are:
• 2 hours: 10 days
• 4 hours: 7 days
• 6 hours: 7 days

Total days = 10 + 7 + 7 = 24 days.`,
    hint: 'Sum the days for 2h, 4h, and 6h: 10 + 7 + 7 = 24 days.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q48',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Data Interpretation - Median Calculation',
    questionText: '48. Based on the 32-day study graph, which time in hours is the median amount of study?',
    options: [
      '6',
      '2',
      '8',
      '4'
    ],
    correctOptionIndex: 3,
    explanation: `For an ordered dataset of N = 32 observations, the median is the average of the 16th and 17th values.
Cumulative frequency distribution:
• 2 hours: Days 1 to 10 (cumulative = 10)
• 4 hours: Days 11 to 17 (cumulative = 17)
• 6 hours: Days 18 to 24 (cumulative = 24)

Both the 16th and 17th observations fall within the 4-hour group.
Therefore, the median study time is 4 hours.`,
    hint: 'In an ordered list of 32 days, both the 16th and 17th values fall in the 4-hour bracket.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },

  // Quantitative Reasoning Continued (Questions 49 - 60)
  {
    id: 'apt-2017-q49',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Exponent Laws and Linear Equations',
    questionText: '49. If -x + 2y = 4, then what is the value of 25^y / 5^x?',
    options: [
      '125',
      '625',
      '5',
      '25'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Express 25 with base 5:
25^y / 5^x = (5²)^y / 5^x = 5^(2y) / 5^x = 5^(2y - x).

Step 2: Substitute the given equation 2y - x = 4:
5^(2y - x) = 5⁴ = 625.`,
    hint: 'Rewrite 25^y / 5^x as 5^(2y - x). Since 2y - x = 4, 5^4 = 625.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q50',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Linear Equations - Mixture / Rate Problem',
    questionText: '50. A woman burns 416 calories in an hour exercise at a fitness center. If she burns 10 calories per minute swimming in the water and 6 calories per minute pedaling on the stationary bike, then how many minutes of the hour does she spend exercising in the water?',
    options: [
      '56',
      '14',
      '60',
      '46'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Let t be the number of minutes spent swimming.
• The remaining minutes on the stationary bike = 60 - t.

Step 2: Set up the total calorie equation:
10t + 6(60 - t) = 416
10t + 360 - 6t = 416
4t + 360 = 416
4t = 56  =>  t = 14 minutes.`,
    hint: 'Set up 10t + 6(60 - t) = 416, which simplifies to 4t = 56, so t = 14 minutes.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q51',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Logarithmic Domain',
    questionText: '51. Which one of the following is the domain of g(x) = ln(1 - x) + ln(x)?',
    options: [
      '(0, ∞)',
      'ℝ \\ {-1, 0}',
      '(0, 1)',
      '(1, ∞)'
    ],
    correctOptionIndex: 2,
    explanation: `For the natural logarithmic function ln(u) to be defined in real numbers, its argument must be strictly positive (u > 0):
1. For ln(1 - x): 1 - x > 0  =>  x < 1.
2. For ln(x): x > 0.

Taking the intersection of both domain requirements:
0 < x < 1, which is the open interval (0, 1).`,
    hint: 'Require both 1 - x > 0 (x < 1) and x > 0 simultaneously, giving the open interval (0, 1).',
    difficulty: 'easy',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q52',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Calendar - Total Days in a Quarter',
    questionText: '52. How many days are there from the first day of March to the last day of May (inclusive)?',
    options: [
      '89',
      '92',
      '91',
      '90'
    ],
    correctOptionIndex: 1,
    explanation: `Total days in each of the three consecutive months:
• March: 31 days
• April: 30 days
• May: 31 days

Total days = 31 + 30 + 31 = 92 days.`,
    hint: 'March has 31 days, April has 30 days, and May has 31 days: 31 + 30 + 31 = 92.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q53',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Quantitative Comparison - Mean vs. Median',
    questionText: `53. A corporation pays ten employees a total of Birr 100,000 every month. Six out of ten employees receive less than Birr 10,000 per month.
Compare Quantity P and Quantity Q:
• Quantity P: The average of the monthly payment of the corporation
• Quantity Q: The median of the monthly payment of the corporation`,
    options: [
      'Quantity P is greater than Quantity Q.',
      'Quantity P is less than Quantity Q.',
      'The two quantities cannot be compared.',
      'The two quantities are equal.'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Evaluate Quantity P (Average):
Mean = Birr 100,000 / 10 = Birr 10,000.

Step 2: Evaluate Quantity Q (Median):
• Since 6 out of 10 employees earn strictly less than Birr 10,000, when arranged in ascending order, salaries S1, S2, S3, S4, S5, S6 are all < 10,000.
• The median of 10 values is the average of the 5th and 6th values: (S5 + S6) / 2.
• Since both S5 < 10,000 and S6 < 10,000, the median must be strictly less than Birr 10,000.

Therefore, Quantity P (10,000) > Quantity Q (< 10,000).`,
    hint: 'Mean is 10,000. Since the bottom 6 salaries are < 10,000, the median (average of 5th and 6th) is strictly < 10,000.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q54',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Quantitative Comparison - Triangle Inequality Theorem',
    questionText: `54. Consider the lengths of the sides of a triangle x, y, z, and the quantities given below:
• Quantity P: 3x + y - z
• Quantity Q: 4x
Compare Quantity P and Quantity Q:`,
    options: [
      'Quantity P is less than Quantity Q.',
      'Quantity P is greater than Quantity Q.',
      'The two quantities cannot be compared.',
      'The two quantities are equal.'
    ],
    correctOptionIndex: 0,
    explanation: `By the Triangle Inequality Theorem, the length of any side of a triangle is strictly less than the sum of the other two sides:
y < x + z

Subtract z from both sides:
y - z < x

Add 3x to both sides of the inequality:
3x + (y - z) < 3x + x = 4x.

Since Quantity P = 3x + y - z and Quantity Q = 4x, Quantity P is strictly less than Quantity Q.`,
    hint: 'By triangle inequality, y - z < x. Adding 3x gives 3x + y - z < 4x.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q55',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Function Domain and Range - Rational Exponents',
    questionText: '55. Which one of the following is true about the function f(x) = x^(2/5)?',
    options: [
      'The domain of f is {x ∈ ℝ | x ≥ 0}',
      'The range of f is {y ∈ ℝ | y ≥ 0}',
      'The range of f is {y | y ∈ ℝ}',
      'The domain of f is {x ∈ ℝ | x ≤ 0}'
    ],
    correctOptionIndex: 1,
    explanation: `Analysis of f(x) = x^(2/5) = (x²)^(1/5) = (⁵√x)²:
1. Domain: The 5th root (odd root) is defined for all real numbers x in ℝ.
2. Range: Because x² ≥ 0 for all real x, and the real 5th root of a non-negative number is non-negative, f(x) ≥ 0.
Thus, the range is {y ∈ ℝ | y ≥ 0} (or [0, ∞)).`,
    hint: 'The fifth root accepts all real numbers (Domain = ℝ), but squaring makes the output non-negative (Range = {y ≥ 0}).',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q56',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Number Sequences - Alternating Operations',
    questionText: '56. What is the value of z in the sequence 1, 2, 4, 8, 10, 20, 22, z, ...?',
    options: [
      '44',
      '24',
      '32',
      '40'
    ],
    correctOptionIndex: 0,
    explanation: `Determine the progression pattern between consecutive terms:
• 1 × 2 = 2
• 2 + 2 = 4
• 4 × 2 = 8
• 8 + 2 = 10
• 10 × 2 = 20
• 20 + 2 = 22
• 22 × 2 = 44.

The alternating rule is: (× 2), (+ 2), (× 2), (+ 2), (× 2), (+ 2), (× 2).
Therefore, z = 22 × 2 = 44.`,
    hint: 'The pattern alternates between multiplying by 2 and adding 2. Next operation is 22 × 2 = 44.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q57',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Geometry and Ratios - Diagonal Tile Arrangement',
    questionText: '57. An engineer is putting black and white colored ceramics on a square floor of area 36 m². Each ceramic has area 1 m². The engineer places the black ones along both diagonals and the rest is covered by white colored ceramics. In what ratio is black to white ceramic used?',
    options: [
      '1:6',
      '1:2',
      '1:5',
      '4:5'
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Determine the grid dimensions:
• Total area = 36 m², so the square grid is 6 × 6 (total 36 tiles).

Step 2: Count the black tiles along both diagonals:
• In an even 6 × 6 square grid, the main diagonal contains 6 tiles and the anti-diagonal contains 6 tiles.
• Because 6 is an even number, the two diagonals do not share an overlapping center tile (6 + 6 = 12 distinct diagonal tiles).
• Total black tiles = 12.

Step 3: Count the white tiles:
• White tiles = 36 - 12 = 24.

Step 4: Compute the ratio of Black to White tiles:
Ratio = 12 / 24 = 1 / 2 = 1:2.`,
    hint: 'In a 6×6 grid, diagonals have 6 + 6 = 12 black tiles, leaving 36 - 12 = 24 white tiles. Ratio = 12:24 = 1:2.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q58',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Quadratic Inequalities - Business Profit Model',
    questionText: '58. A daily profit earned by a T-shirt factory is modeled by the formula p(x) = -x² + 1400x - 80000, where p is the profit and x is the price for each T-shirt sold. What range of prices will yield a profit of at least Birr 400,000?',
    options: [
      '600 ≤ x ≤ 800',
      'x ≤ 800',
      'x ≤ 600 or x ≥ 800',
      'x ≤ 600'
    ],
    correctOptionIndex: 0,
    explanation: `Step 1: Set up the profit inequality p(x) ≥ 400,000:
-x² + 1400x - 80000 ≥ 400000

Step 2: Rearrange into standard quadratic inequality:
-x² + 1400x - 480000 ≥ 0
Multiply by -1 (and flip the inequality sign):
x² - 1400x + 480000 ≤ 0.

Step 3: Factor the quadratic expression:
(x - 600)(x - 800) ≤ 0.

Step 4: The inequality holds between the two roots:
600 ≤ x ≤ 800.`,
    hint: 'Solve x² - 1400x + 480000 ≤ 0 by factoring (x - 600)(x - 800) ≤ 0, giving 600 ≤ x ≤ 800.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q59',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Geometry - Inscribed Equilateral Triangle Area',
    questionText: '59. Points A, B and C are located on a circle with center O and radius 2 units long. If A, B and C are joined to form an equilateral triangle, then what is the area of triangle ABC in square units?',
    options: [
      '3',
      '√3',
      '1',
      '3√3'
    ],
    correctOptionIndex: 3,
    explanation: `Step 1: Relate circumradius R = 2 to side length s of an equilateral triangle:
R = s / √3  =>  s = R√3 = 2√3.

Step 2: Calculate the area of the equilateral triangle:
Area = (√3 / 4) × s² = (√3 / 4) × (2√3)² = (√3 / 4) × 12 = 3√3 square units.`,
    hint: 'Side length s = R√3 = 2√3. Area = (√3/4)(2√3)² = (√3/4)(12) = 3√3.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: true,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'apt-2017-q60',
    subject: 'Aptitude',
    year: '2017 E.C.',
    topic: 'Quantitative Reasoning: Complex Interleaved Sequence',
    questionText: '60. What is the value of the missing term x in the sequence: -1, 0, 1, 2, -1, 8, 1, 26, -1, x, 1, 242, -1, 728, 1, ...?',
    options: [
      '54',
      '36',
      '80',
      '34'
    ],
    correctOptionIndex: 2,
    explanation: `Notice that the sequence interleaves fixed sign markers with an exponential sequence:
Odd positions provide fixed markers: -1, 1, -1, 1, -1, 1, -1, 1, ...
Even positions form the sub-sequence:
• a1 = 0 = 3⁰ - 1
• a2 = 2 = 3¹ - 1
• a3 = 8 = 3² - 1
• a4 = 26 = 3³ - 1
• a5 = x = 3⁴ - 1 = 81 - 1 = 80
• a6 = 242 = 3⁵ - 1
• a7 = 728 = 3⁶ - 1.

Therefore, the missing term x = 80.`,
    hint: 'The terms in the progression follow 3^n - 1: 0, 2, 8, 26, (3^4 - 1 = 80), 242, 728.',
    difficulty: 'hard',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-08-20',
    createdBy: ADMIN_EMAIL
  }
];
