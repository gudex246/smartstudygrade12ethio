import { Question } from '../types';
import { GEOGRAPHY_2017_EC_PART1 } from './geography2017EC_part1';
import { GEOGRAPHY_2017_EC_PART2 } from './geography2017EC_part2';
import { GEOGRAPHY_2017_EC_PART3 } from './geography2017EC_part3';
import { GEOGRAPHY_2017_EC_PART4 } from './geography2017EC_part4';

export const GEOGRAPHY_2017_EC_QUESTIONS: Question[] = [
  ...GEOGRAPHY_2017_EC_PART1,
  ...GEOGRAPHY_2017_EC_PART2,
  ...GEOGRAPHY_2017_EC_PART3,
  ...GEOGRAPHY_2017_EC_PART4
];
