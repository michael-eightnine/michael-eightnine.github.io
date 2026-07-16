import type { OfferingsGroup } from './types';
import { BeautifulBodyGroup } from './offerings/beautiful_body';
import { FurnitureGroup } from './offerings/furniture';
import { MeatGroup } from './offerings/meat';
import { PenanceGroup } from './offerings/penance';

export const DICE_COUNT = 9 as const;
export const IMAGE_SIZES = [320, 420, 640, 940, 1280, 1920] as const;

// Assembles the per-offering groups into the homepage/route lookup. Card order
// follows insertion order here.
const offeringsConfig: Record<OfferingsGroup['id'], OfferingsGroup> = {
  [BeautifulBodyGroup.id]: BeautifulBodyGroup,
  [FurnitureGroup.id]: FurnitureGroup,
  [MeatGroup.id]: MeatGroup,
  [PenanceGroup.id]: PenanceGroup
};

export default offeringsConfig;
