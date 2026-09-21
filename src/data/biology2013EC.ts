import { Question } from '../types';
import { BIOLOGY_2013_EC_PART1 } from './biology2013EC_part1';
import { BIOLOGY_2013_EC_PART2 } from './biology2013EC_part2';
import { BIOLOGY_2013_EC_PART3 } from './biology2013EC_part3';
import { BIOLOGY_2013_EC_PART4 } from './biology2013EC_part4';

const RAW_BIOLOGY_2013: Question[] = [
  ...BIOLOGY_2013_EC_PART1,
  ...BIOLOGY_2013_EC_PART2,
  ...BIOLOGY_2013_EC_PART3,
  ...BIOLOGY_2013_EC_PART4
];

export const BIOLOGY_2013_EC_QUESTIONS: Question[] = RAW_BIOLOGY_2013.map((q, idx) => ({
  ...q,
  subject: 'Biology',
  year: '2013 E.C.',
  isFreePreview: idx < 5 // First 5 questions open for free preview without subscription
}));
