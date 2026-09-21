import { Question } from '../types';
import { APTITUDE_2015_EC_PART1 } from './aptitude2015EC_part1';
import { APTITUDE_2015_EC_PART2 } from './aptitude2015EC_part2';
import { APTITUDE_2015_EC_PART3 } from './aptitude2015EC_part3';

export const APTITUDE_2015_EC_QUESTIONS: Question[] = [
  ...APTITUDE_2015_EC_PART1,
  ...APTITUDE_2015_EC_PART2,
  ...APTITUDE_2015_EC_PART3
];
