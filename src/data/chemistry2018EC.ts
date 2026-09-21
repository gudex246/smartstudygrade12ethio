import { Question } from '../types';
import { CHEMISTRY_2018_EC_PART1 } from './chemistry2018EC_part1';
import { CHEMISTRY_2018_EC_PART2 } from './chemistry2018EC_part2';
import { CHEMISTRY_2018_EC_PART3 } from './chemistry2018EC_part3';
import { CHEMISTRY_2018_EC_PART4 } from './chemistry2018EC_part4';

export const CHEMISTRY_2018_EC_QUESTIONS: Question[] = [
  ...CHEMISTRY_2018_EC_PART1,
  ...CHEMISTRY_2018_EC_PART2,
  ...CHEMISTRY_2018_EC_PART3,
  ...CHEMISTRY_2018_EC_PART4
];
