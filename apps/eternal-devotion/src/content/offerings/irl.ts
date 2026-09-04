import type { Offering, PaintingsGroup } from '../types';
import { createOfferingsConfig } from '../types';

type OfferingWithoutId = Omit<Offering, 'id'>;

const MesquiteFlower: OfferingWithoutId = {
  description:
    "frantic sizzling spouts above us; more hungry than thirsty these days. guide ran. i'll end up resting here [★⯨]",
  filename: 'the-mesquite-flower'
};

const Motel: OfferingWithoutId = {
  description:
    'accommodations nicer than we expected/deserved, adult son lost his last tooth when flossing; relevant dreams [★★★★★]',
  filename: 'the-motel'
};

const Dustbowl: OfferingWithoutId = {
  description:
    "come visit. the blue flowers drink you; not 2 bad. it'll get you waking up here every morning, w/ me [★]",
  filename: 'the-dustbowl'
};

const Showroom: OfferingWithoutId = {
  description:
    'convincing yet effectively useless. purchased 3. delivery man kindly le(apt)ft from upstairs window [★★★★]',
  filename: 'the-showroom'
};

const Well: OfferingWithoutId = {
  description:
    'no sign of campers; coarse blonde hair present, only from last time. well seems fuller than usual [★★★⯨]',
  filename: 'the-well'
};

const Factory: OfferingWithoutId = {
  description:
    'astonishing to see how they make it (biologically relevant). still no closer on what they make it out of [★★★★]',
  filename: 'the-factory'
};

const Yard: OfferingWithoutId = {
  description:
    "grew effortlessly, ferociously, deeply personal. arms burn from another failed uprooting. i can't win  [⯨]",
  filename: 'the-yard'
};

export const IrlGroup: PaintingsGroup = {
  kind: 'paintings',
  id: 'irl',
  title: 'in real life',
  callToAction: 'with a grounding presence',
  descriptionList: [
    '2026.',
    "i'd rather go somewhere instead",
    '7 offerings from a selection of ??',
    'wet feet on warm beige carpet'
  ],
  filename: 'irl',
  bordered: false,
  offeringsConfig: createOfferingsConfig([
    MesquiteFlower,
    Factory,
    Well,
    Yard,
    Motel,
    Dustbowl,
    Showroom
  ])
};
