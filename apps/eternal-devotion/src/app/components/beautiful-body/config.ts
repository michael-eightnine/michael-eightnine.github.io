import { CHARACTERS, PIECES } from 'content';

const pickRandomCharacterIndex = () =>
  Math.floor(Math.random() * CHARACTERS.length);

// One random character index per slice — the random-pick behavior that drives
// the assembler. The underlying character/slice data lives in content.
export const randomizeSlots = () =>
  PIECES.map(() => pickRandomCharacterIndex());
