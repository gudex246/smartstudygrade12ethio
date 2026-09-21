import { Question } from '../types';
import { CHEMISTRY_2013_EC_PART1 } from './chemistry2013EC_part1';
import { CHEMISTRY_2013_EC_PART2 } from './chemistry2013EC_part2';
import { CHEMISTRY_2013_EC_PART3 } from './chemistry2013EC_part3';
import { CHEMISTRY_2013_EC_PART4 } from './chemistry2013EC_part4';

const RAW_CHEMISTRY_2013: Question[] = [
  ...CHEMISTRY_2013_EC_PART1,
  ...CHEMISTRY_2013_EC_PART2,
  ...CHEMISTRY_2013_EC_PART3,
  ...CHEMISTRY_2013_EC_PART4
];

export const CHEMISTRY_2013_EC_QUESTIONS: Question[] = RAW_CHEMISTRY_2013.map((q, idx) => ({
  ...q,
  subject: 'Chemistry',
  year: '2013 E.C.',
  isFreePreview: idx < 5 // First 5 questions accessible for free preview without subscription
}));
