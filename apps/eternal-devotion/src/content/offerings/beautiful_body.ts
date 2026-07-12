import type { ExperienceGroup } from '../types';

export type Character = {
  // Image filename base (e.g. `regent` → regent-top, regent-mid, regent-bottom).
  name: string;
  // One haiku, three lines. When this character fills a slice, it contributes
  // the line at that slice's position (top → line 0, mid → 1, bottom → 2), so
  // the assembled poem is itself an exquisite corpse.
  haiku: [string, string, string];
};

// The characters, in index order. A slice's value is its index here; the image
// filename, the giant floating numeral, and the haiku line all derive from it.
export const CHARACTERS: readonly Character[] = [
  {
    name: 'regent',
    haiku: ['regent line one', 'regent line two', 'regent line three']
  },
  {
    name: 'doctor',
    haiku: ['doctor line one', 'doctor line two', 'doctor line three']
  },
  {
    name: 'damsel',
    haiku: ['damsel line one', 'damsel line two', 'damsel line three']
  },
  {
    name: 'jailer',
    haiku: ['jailer line one', 'jailer line two', 'jailer line three']
  }
] as const;

// Body slices, top to bottom.
export const PIECES = ['top', 'mid', 'bottom'] as const;

// An interactive "exquisite corpse" assembler. Same card treatment as the
// painting groups; its own route and rendering. `path` mirrors
// createExperiencePath('beautiful-body') — kept as a literal so the content
// layer needn't depend on the app's routing utils.
export const BeautifulBodyGroup: ExperienceGroup = {
  kind: 'experience',
  id: 'beautiful-body',
  title: 'beautiful body',
  callToAction: 'with no sense of self',
  descriptionList: [
    '2026.',
    'assembled for, and by, strangers',
    // Every slice independently picks one character, so the number of distinct
    // bodies is characters ^ slices (4 ^ 3 = 64) from a selection of 4.
    `${CHARACTERS.length ** PIECES.length} offerings from a selection of ${CHARACTERS.length}`,
    '99 ruined magazines'
  ],
  filename: 'beautiful-body',
  path: '/offering/beautiful-body'
};
