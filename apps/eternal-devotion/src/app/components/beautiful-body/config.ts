import { CHARACTERS, PIECES } from 'content';

const pickRandomCharacterIndex = () =>
  Math.floor(Math.random() * CHARACTERS.length);

// One random character index per slice — the random-pick behavior that drives
// the assembler. The underlying character/slice data lives in content.
export const randomizeSlots = () =>
  PIECES.map(() => pickRandomCharacterIndex());

// The image filename base for each slice, in order (top, mid, bottom), given
// the current character index per slice — e.g. `regent-top`, `doctor-mid`. The
// single source for the slice → filename rule, shared by the display and save.
export const sliceFilenames = (slots: number[]) =>
  PIECES.map((piece, index) => `${CHARACTERS[slots[index]].name}-${piece}`);

// The character name filling each slice, in order (top, mid, bottom) — used to
// name a saved body, e.g. `damsel-jailer-doctor`.
export const sliceCharacterNames = (slots: number[]) =>
  slots.map((index) => CHARACTERS[index].name);
