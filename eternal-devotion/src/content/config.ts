import type { Offering } from './types';

export const DICE_COUNT = 9 as const;

type OfferingWithoutId = Omit<Offering, 'id'>;

const description =
  "aiding in: unhappiness, release of fear, insomnia, mysteries unveiled... gave a gift to die where you're from n we plan to collect";

const BodyOvMine: OfferingWithoutId = {
  description,
  filename: 'body-ov-mine'
};

const BurningBush: OfferingWithoutId = {
  description,
  filename: 'burning-bush'
};

const ChangeWithMe: OfferingWithoutId = {
  description,
  filename: 'change-with-me'
};

const Cups: OfferingWithoutId = {
  description,
  filename: 'cups'
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
  BodyOvMine,
  NewWays2Feel,
  Penance,
  OpenMyHeart,
  ChangeWithMe,
  Dead2Day,
  Hellbound,
  Late4Heaven,
  Hidden2,
  HeavenAboveHere,
  HelpWitU,
  Cups,
  BurningBush,
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
