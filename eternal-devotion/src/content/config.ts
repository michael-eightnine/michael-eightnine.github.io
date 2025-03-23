import type { Offering } from './types';

export const DICE_COUNT = 9 as const;

type OfferingWithoutId = Omit<Offering, 'id'>;

const description =
  "aiding in: unhappiness, release of fear, insomnia, mysteries unveiled... gave a gift to die where you're from n we plan to collect";

const BurningBush: OfferingWithoutId = {
  description,
  filename: 'burning-bush'
};

const ChangeWithMe: OfferingWithoutId = {
  description,
  filename: 'change-with-me'
};

const Dead2Day: OfferingWithoutId = {
  description,
  filename: 'dead-2-day'
};

const HeavenAboveHere: OfferingWithoutId = {
  description,
  filename: 'heaven-above-here'
};

const Hellbound: OfferingWithoutId = {
  description,
  filename: 'hellbound'
};

const HelpWitU: OfferingWithoutId = {
  description,
  filename: 'help-wit-u'
};

const Hidden2: OfferingWithoutId = {
  description,
  filename: 'hidden-2'
};

const Late4Heaven: OfferingWithoutId = {
  description,
  filename: 'late-4-heaven'
};

const NewWays2Feel: OfferingWithoutId = {
  description,
  filename: 'new-ways-2-feel'
};

const OpenMyHeart: OfferingWithoutId = {
  description,
  filename: 'open-my-heart'
};

const Penance: OfferingWithoutId = {
  description,
  filename: 'penance'
};

const WakingAnew: OfferingWithoutId = {
  description,
  filename: 'waking-anew'
};

const offeringsConfig: Record<Offering['id'], Offering> = [
  Hellbound,
  BurningBush,
  ChangeWithMe,
  Dead2Day,
  HeavenAboveHere,
  HelpWitU,
  Hidden2,
  Late4Heaven,
  NewWays2Feel,
  OpenMyHeart,
  Penance,
  WakingAnew
].reduce((acc, current, index) => {
  const offering: Offering = {
    ...current,
    id: `${index + 1}`
  };

  return {
    ...acc,
    [offering.id]: offering
  };
}, {});

export default offeringsConfig;
