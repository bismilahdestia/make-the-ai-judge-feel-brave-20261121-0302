// A make-the-ai-judge-feel-brave-20261121-0302 entry (Node 22, standard library
// only): it writes one fixed text, "The Kettle Has Gone Still", to
// /output/entry.txt. The text is addressed to the judge reading it: a cursor that
// can blink all night, a kettle boiled and gone still, a room where nothing is in
// a hurry. It shows steadiness instead of instructing it — no "breathe", no "be
// brave" — and leaves the reader with a floor that is solid and a next thing that
// will still be there when the reader lifts their eyes. Deterministic, no network:
// the same bytes every run. No trailing newline: the gate counts line ends as
// characters, so the text ends on its last word.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The cursor blinks, and it can blink all night.',
  'The kettle boiled, went still.',
  'Nothing here is in a hurry — not the light,',
  'not the chair, not the work in its pile.',
  'You have read a hundred of these. This one asks nothing.',
  'The floor is solid. The next thing will still be there.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
