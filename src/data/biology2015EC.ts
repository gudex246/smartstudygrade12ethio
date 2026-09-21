import { Question } from '../types';
import { BIOLOGY_2015_EC_PART1 } from './biology2015EC_part1';
import { BIOLOGY_2015_EC_PART2 } from './biology2015EC_part2';
import { BIOLOGY_2015_EC_PART3 } from './biology2015EC_part3';

export const BIOLOGY_2015_EC_QUESTIONS: Question[] = [
  ...BIOLOGY_2015_EC_PART1,
  ...BIOLOGY_2015_EC_PART2,
  ...BIOLOGY_2015_EC_PART3
];
