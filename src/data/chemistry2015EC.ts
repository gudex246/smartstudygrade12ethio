import { Question } from '../types';
import { CHEMISTRY_2015_EC_PART1 } from './chemistry2015EC_part1';
import { CHEMISTRY_2015_EC_PART2 } from './chemistry2015EC_part2';
import { CHEMISTRY_2015_EC_PART3 } from './chemistry2015EC_part3';
import { CHEMISTRY_2015_EC_PART4 } from './chemistry2015EC_part4';

export const CHEMISTRY_2015_EC_QUESTIONS: Question[] = [
  ...CHEMISTRY_2015_EC_PART1,
  ...CHEMISTRY_2015_EC_PART2,
  ...CHEMISTRY_2015_EC_PART3,
  ...CHEMISTRY_2015_EC_PART4
];
