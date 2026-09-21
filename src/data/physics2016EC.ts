import { Question } from '../types';
import { PHYSICS_2016_EC_PART1 } from './physics2016EC_part1';
import { PHYSICS_2016_EC_PART2 } from './physics2016EC_part2';
import { PHYSICS_2016_EC_PART3 } from './physics2016EC_part3';

export const PHYSICS_2016_EC_QUESTIONS: Question[] = [
  ...PHYSICS_2016_EC_PART1,
  ...PHYSICS_2016_EC_PART2,
  ...PHYSICS_2016_EC_PART3
];
