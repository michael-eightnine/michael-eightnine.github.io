import type { Offering, PaintingsGroup } from '../types';
import { createOfferingsConfig } from '../types';

type OfferingWithoutId = Omit<Offering, 'id'>;

const MesquiteFlower: OfferingWithoutId = {
  description:
    "[37.881588] wind, surely just wind, screamed from above the canyon. guide ran. i'll rest here [-110.398245]",
  filename: 'the-mesquite-flower'
};

const Motel: OfferingWithoutId = {
  description:
    '[38.655671] nicer than we expected/deserved, son lost his last tooth when flossing; relevant dreams [-87.077867]',
  filename: 'the-motel'
};

const Showroom: OfferingWithoutId = {
  description:
    '[32.760237] convincing yet effectively useless. purchased 3. delivery man left through upstairs window [-104.382572]',
  filename: 'the-showroom'
};

const Well: OfferingWithoutId = {
  description:
    '[44.916162] no sign of campers; blonde hair present but only from last time. well seems fuller than usual [-122.139826]',
  filename: 'the-well'
};

export const IrlGroup: PaintingsGroup = {
  kind: 'paintings',
  id: 'irl',
  title: 'in real life',
  callToAction: 'with an uncomfortable awareness',
  descriptionList: [
    '2026.',
    "i'd rather go somewhere instead",
    '4 offerings from a selection of ??,',
    'wet feet on warm beige carpet'
  ],
  filename: 'furniture',
  bordered: false,
  offeringsConfig: createOfferingsConfig([
    MesquiteFlower,
    Motel,
    Showroom,
    Well
  ])
};
