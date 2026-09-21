import { Question } from '../types';
import { PHYSICS_2017_EC_PART1 } from './physics2017EC_part1';
import { PHYSICS_2017_EC_PART2 } from './physics2017EC_part2';
import { PHYSICS_2017_EC_PART3 } from './physics2017EC_part3';

const ALL_PHYSICS_2017_RAW: Question[] = [
  ...PHYSICS_2017_EC_PART1,
  ...PHYSICS_2017_EC_PART2,
  ...PHYSICS_2017_EC_PART3
];

export const PHYSICS_2017_EC_QUESTIONS: Question[] = ALL_PHYSICS_2017_RAW.map((q) => ({
  ...q,
  subject: 'Physics',
  year: '2017 E.C.'
}));
