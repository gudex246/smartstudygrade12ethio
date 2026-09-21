import { Question } from '../types';
import { MATH_2016_EC_PART1 } from './math2016EC_part1';
import { MATH_2016_EC_PART2 } from './math2016EC_part2';
import { MATH_2016_EC_PART3 } from './math2016EC_part3';
import { MATH_2016_EC_PART4 } from './math2016EC_part4';

export const MATH_2016_EC_QUESTIONS: Question[] = [
  ...MATH_2016_EC_PART1,
  ...MATH_2016_EC_PART2,
  ...MATH_2016_EC_PART3,
  ...MATH_2016_EC_PART4
];
