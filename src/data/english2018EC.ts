import { Question } from '../types';
import { ENGLISH_2018_EC_PART1 } from './english2018EC_part1';
import { ENGLISH_2018_EC_PART2 } from './english2018EC_part2';
import { ENGLISH_2018_EC_PART3 } from './english2018EC_part3';
import { ENGLISH_2018_EC_PART4 } from './english2018EC_part4';

const ALL_ENGLISH_2018_RAW: Question[] = [
  ...ENGLISH_2018_EC_PART1,
  ...ENGLISH_2018_EC_PART2,
  ...ENGLISH_2018_EC_PART3,
  ...ENGLISH_2018_EC_PART4
];

export const ENGLISH_2018_EC_QUESTIONS: Question[] = ALL_ENGLISH_2018_RAW.map((q) => ({
  ...q,
  subject: 'English',
  year: '2018 E.C.'
}));
