import { Question } from '../types';
import { ECONOMICS_2016_EC_PART1 } from './economics2016EC_part1';
import { ECONOMICS_2016_EC_PART2 } from './economics2016EC_part2';
import { ECONOMICS_2016_EC_PART3 } from './economics2016EC_part3';
import { ECONOMICS_2016_EC_PART4 } from './economics2016EC_part4';

export const ECONOMICS_2016_EC_QUESTIONS: Question[] = [
  ...ECONOMICS_2016_EC_PART1,
  ...ECONOMICS_2016_EC_PART2,
  ...ECONOMICS_2016_EC_PART3,
  ...ECONOMICS_2016_EC_PART4,
];
