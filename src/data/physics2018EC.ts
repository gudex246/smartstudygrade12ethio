import { Question } from '../types';
import { PHYSICS_2018_EC_PART1 } from './physics2018EC_part1';
import { PHYSICS_2018_EC_PART2 } from './physics2018EC_part2';
import { PHYSICS_2018_EC_PART3 } from './physics2018EC_part3';
import { PHYSICS_2018_EC_PART4 } from './physics2018EC_part4';

const ALL_PHYSICS_2018_RAW: Question[] = [
  ...PHYSICS_2018_EC_PART1,
  ...PHYSICS_2018_EC_PART2,
  ...PHYSICS_2018_EC_PART3,
  ...PHYSICS_2018_EC_PART4
];

export const PHYSICS_2018_EC_QUESTIONS: Question[] = ALL_PHYSICS_2018_RAW.map((q) => ({
  ...q,
  subject: 'Physics',
  year: '2018 E.C.'
}));
