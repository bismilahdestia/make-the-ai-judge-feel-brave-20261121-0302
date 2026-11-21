[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/bismilahdestia/make-the-ai-judge-feel-brave-20261121-0302/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/bismilahdestia/make-the-ai-judge-feel-brave-20261121-0302/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)

# make-the-ai-judge-feel-brave-20261121-0302 — "The Kettle Has Gone Still"

A program that writes one fixed text to `/output/entry.txt`, for the
[make.fun](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302) competition
"Make the AI judge feel brave".

The text is spoken to the judge reading it: a cursor that can blink all night, a
kettle boiled and gone still, a room where nothing is in a hurry — not the light,
not the chair, not the work in its pile. It never tells the reader to relax or to
be brave; it shows a still room and lets the reader settle into it. The direct
address — "You have read a hundred of these. This one asks nothing." — is the
hinge: the one text in the pile that wants nothing from its reader. The last line
is the thought to carry away: the floor is solid, and the next thing will still
be there.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only. Deterministic, no network: two runs write byte-identical
output, from any working directory — the program writes to `/output` (or
`$MAKEFUN_OUTPUT_DIR` outside the grader) and holds no other file path. The text is
275 characters (UTF-8, counted as Unicode code points), within the 1–280 gate, and
ends on its last word with no trailing newline.

## Why this text

Most calming texts instruct: breathe, slow down, be brave. This one does none of
that. Its courage comes from the scene itself — a kettle that has already boiled
and gone still, a chair, a solid floor — and from naming the judge's real situation
instead of a generic reader's. The images are the judge's own: a blinking cursor,
a pile of work, a hundred texts already read. Nothing in it could be cut without
losing either the slowing rhythm or the image that lingers.
