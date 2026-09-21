import { Question } from '../types';
import { APTITUDE_2017_EC_PART1 } from './aptitude2017EC_part1';
import { APTITUDE_2017_EC_PART2 } from './aptitude2017EC_part2';
import { APTITUDE_2017_EC_PART3 } from './aptitude2017EC_part3';

export const APTITUDE_2017_EC_QUESTIONS: Question[] = [
  ...APTITUDE_2017_EC_PART1,
  ...APTITUDE_2017_EC_PART2,
  ...APTITUDE_2017_EC_PART3
];
