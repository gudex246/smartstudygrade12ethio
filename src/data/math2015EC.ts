import { Question } from '../types';
import { MATH_2015_EC_PART1 } from './math2015EC_part1';
import { MATH_2015_EC_PART2 } from './math2015EC_part2';
import { MATH_2015_EC_PART3 } from './math2015EC_part3';
import { MATH_2015_EC_PART4 } from './math2015EC_part4';

export const MATH_2015_EC_QUESTIONS: Question[] = [
  ...MATH_2015_EC_PART1,
  ...MATH_2015_EC_PART2,
  ...MATH_2015_EC_PART3,
  ...MATH_2015_EC_PART4
];
