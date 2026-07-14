import type { ExperienceGroup } from '../types';

export type Character = {
  // Image filename base (e.g. `regent` → regent-top, regent-mid, regent-bottom).
  name: string;
  // Three lines of prose. When this character fills a slice, it contributes the
  // line at that slice's position (top → line 0, mid → 1, bottom → 2), so the
  // assembled text is itself an exquisite corpse.
  prose: [string, string, string];
};

// The characters, in index order. A slice's value is its index here; the image
// filename, the giant floating numeral, and the prose line all derive from it.
export const CHARACTERS: readonly Character[] = [
  {
    name: 'regent',
    prose: [
      'never heard of surprises',
      'new flesh purchaser',
      'caught in traffic signal'
    ]
  },
  {
    name: 'doctor',
    prose: [
      'blue splinters in gloved hand',
      'warmly nurturing something terrible',
      'well beyond facility failure'
    ]
  },
  {
    name: 'damsel',
    prose: [
      'O! goodness me',
      'waiting beyond saving (for a time)',
      'walking on nothing at all'
    ]
  },
  {
    name: 'jailer',
    prose: [
      'rank slime mold. hole 4 head',
      'a frock 4 me a frock 4 u',
      'the key fits, the lock is gone'
    ]
  },
  {
    name: 'maid',
    prose: [
      'quietly waiting behind the veil',
      "i'm getting lost in your spurs",
      'finding new places 2 hide'
    ]
  },
  {
    name: 'snail',
    prose: [
      'came in with a bad case of it',
      'bright flesh right below the surface',
      'breathing even barely'
    ]
  },
  {
    name: 'bodybuilder',
    prose: ['A', 'B', 'C']
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
