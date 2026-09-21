import { Question } from '../types';
import { PHYSICS_2015_EC_PART1 } from './physics2015EC_part1';
import { PHYSICS_2015_EC_PART2 } from './physics2015EC_part2';
import { PHYSICS_2015_EC_PART3 } from './physics2015EC_part3';
import { PHYSICS_2015_EC_PART4 } from './physics2015EC_part4';

const ALL_PHYSICS_2015_RAW: Question[] = [
  ...PHYSICS_2015_EC_PART1,
  ...PHYSICS_2015_EC_PART2,
  ...PHYSICS_2015_EC_PART3,
  ...PHYSICS_2015_EC_PART4
];

export const PHYSICS_2015_EC_QUESTIONS: Question[] = ALL_PHYSICS_2015_RAW.map((q) => ({
  ...q,
  subject: 'Physics',
  year: '2015 E.C.'
}));
