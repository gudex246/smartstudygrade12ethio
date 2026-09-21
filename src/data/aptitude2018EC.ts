import { Question } from '../types';
import { APTITUDE_2018_EC_PART1 } from './aptitude2018EC_part1';
import { APTITUDE_2018_EC_PART2 } from './aptitude2018EC_part2';
import { APTITUDE_2018_EC_PART3 } from './aptitude2018EC_part3';

const ALL_APTITUDE_2018_RAW: Question[] = [
  ...APTITUDE_2018_EC_PART1,
  ...APTITUDE_2018_EC_PART2,
  ...APTITUDE_2018_EC_PART3
];

export const APTITUDE_2018_EC_QUESTIONS: Question[] = ALL_APTITUDE_2018_RAW.map((q) => ({
  ...q,
  subject: 'Aptitude',
  year: '2018 E.C.'
}));
