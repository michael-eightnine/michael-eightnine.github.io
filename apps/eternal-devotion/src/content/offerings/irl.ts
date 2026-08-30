import type { Offering, PaintingsGroup } from '../types';
import { createOfferingsConfig } from '../types';

type OfferingWithoutId = Omit<Offering, 'id'>;

const MesquiteFlower: OfferingWithoutId = {
  description: '',
  filename: 'the-mesquite-flower'
};

const Motel: OfferingWithoutId = {
  description: '',
  filename: 'the-motel'
};

const Showroom: OfferingWithoutId = {
  description: '',
  filename: 'the-showroom'
};

const Well: OfferingWithoutId = {
  description: '',
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
  offeringsConfig: createOfferingsConfig([
    MesquiteFlower,
    Motel,
    Showroom,
    Well
  ])
};
