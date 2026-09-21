import { Question } from '../types';
import { HISTORY_2015_EC_PART1 } from './history2015EC_part1';
import { HISTORY_2015_EC_PART2 } from './history2015EC_part2';
import { HISTORY_2015_EC_PART3 } from './history2015EC_part3';
import { HISTORY_2015_EC_PART4 } from './history2015EC_part4';

export const HISTORY_2015_EC_QUESTIONS: Question[] = [
  ...HISTORY_2015_EC_PART1,
  ...HISTORY_2015_EC_PART2,
  ...HISTORY_2015_EC_PART3,
  ...HISTORY_2015_EC_PART4
];
