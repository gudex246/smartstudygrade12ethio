import { Question } from '../types';
import { MATH_2018_EC_PART1 } from './math2018EC_part1';
import { MATH_2018_EC_PART2 } from './math2018EC_part2';
import { MATH_2018_EC_PART3 } from './math2018EC_part3';
import { MATH_2018_EC_PART4 } from './math2018EC_part4';

export const MATH_2018_EC_QUESTIONS: Question[] = [
  ...MATH_2018_EC_PART1,
  ...MATH_2018_EC_PART2,
  ...MATH_2018_EC_PART3,
  ...MATH_2018_EC_PART4
];
