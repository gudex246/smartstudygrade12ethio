import { Question } from '../types';
import { BIOLOGY_2016_EC_PART1 } from './biology2016EC_part1';
import { BIOLOGY_2016_EC_PART2 } from './biology2016EC_part2';
import { BIOLOGY_2016_EC_PART3 } from './biology2016EC_part3';
import { BIOLOGY_2016_EC_PART4 } from './biology2016EC_part4';

export const BIOLOGY_2016_EC_QUESTIONS: Question[] = [
  ...BIOLOGY_2016_EC_PART1,
  ...BIOLOGY_2016_EC_PART2,
  ...BIOLOGY_2016_EC_PART3,
  ...BIOLOGY_2016_EC_PART4
];
