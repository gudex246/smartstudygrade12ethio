import { Question } from '../types';
import { GEOGRAPHY_2015_EC_PART1 } from './geography2015EC_part1';
import { GEOGRAPHY_2015_EC_PART2 } from './geography2015EC_part2';
import { GEOGRAPHY_2015_EC_PART3 } from './geography2015EC_part3';
import { GEOGRAPHY_2015_EC_PART4 } from './geography2015EC_part4';
import { GEOGRAPHY_2015_EC_PART5 } from './geography2015EC_part5';

export const GEOGRAPHY_2015_EC_QUESTIONS: Question[] = [
  ...GEOGRAPHY_2015_EC_PART1,
  ...GEOGRAPHY_2015_EC_PART2,
  ...GEOGRAPHY_2015_EC_PART3,
  ...GEOGRAPHY_2015_EC_PART4,
  ...GEOGRAPHY_2015_EC_PART5,
];
