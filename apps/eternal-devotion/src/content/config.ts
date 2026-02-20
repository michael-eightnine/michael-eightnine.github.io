import type { Offering } from './types';

export const DICE_COUNT = 9 as const;
export const IMAGE_SIZES = [320, 420, 640, 940, 1280, 1920] as const;

type OfferingWithoutId = Omit<Offering, 'id'>;

// Penance
const BodyOvMine: OfferingWithoutId = {
  description:
    "no, don't mourn him. he was dead long before we ever touched him. this stuff means nothing — it all goes.",
  filename: 'body-ov-mine'
};

const BurningBush: OfferingWithoutId = {
  description: `a fierce light, the smoking of crisped skin. a dark silhouette outlined in red. "don't be afraid" — how could I not?`,
  filename: 'burning-bush'
};

const ChangeWithMe: OfferingWithoutId = {
  description:
    'everyday feelings... joined without passion in our prisons. where even the mountains get halos — my head remains unadorned.',
  filename: 'change-with-me'
};

const Cups: OfferingWithoutId = {
  description:
    'not quite a cup of blessings, poured full strength into the vessel of his anger. still, it overflows and sits aching within us.',
  filename: 'cups'
};

const Dead2Day: OfferingWithoutId = {
  description:
    "crimson spot on the white vest of the man b'side me, glad to see it ain't me; I've got enough scars inside me.",
  filename: 'dead-2-day'
};

const HeavenAboveHere: OfferingWithoutId = {
  description:
    'nothing below, everything above. nothing below, everything above. reassurances spoken by those undeserving of any; a mantra for going to war.',
  filename: 'heaven-above-here'
};

const Hellbound: OfferingWithoutId = {
  description:
    "if I don't go to hell when I die I might go to heaven. the sun smiles when his brother dies, I'm merely between them.",
  filename: 'hellbound'
};

const HelpWitU: OfferingWithoutId = {
  description:
    'my heart slowed and shuttered. the hinges rip free and all that is me spills forth. a forced salvation equalled as punishment.',
  filename: 'help-wit-u'
};

const Hidden2: OfferingWithoutId = {
  description:
    "to live inside the walled garden till it's good to get out. why don't you just come back to us? the soil between my lips only grows colder.",
  filename: 'hidden-2'
};

const Late4Heaven: OfferingWithoutId = {
  description:
    "ain't gonna let you in baby, I know how cold it is out there. alone together; a shroud, a headstone or the promise of rest.",
  filename: 'late-4-heaven'
};

const NewWays2Feel: OfferingWithoutId = {
  description:
    "such heat in the pool right now — you took too much man, you took too much. don't try and fight; there's no comin' down.",
  filename: 'new-ways-2-feel'
};

const OpenMyHeart: OfferingWithoutId = {
  description:
    "observed in all its solemnities, a feast from my own flesh. a reckoning never recovered from — who can overcome the sin they're designed for.",
  filename: 'open-my-heart'
};

const Penance: OfferingWithoutId = {
  description:
    'with one on each side of him — each worthless beyond reason — he stepped down, shed his blood, forgot us & left us.',
  filename: 'penance'
};

const WakingAnew: OfferingWithoutId = {
  description:
    'every moment the end of an era. brutal times inflicted on the weak and maladjusted. an entire city underwater at once before the surface breaks.',
  filename: 'waking-anew'
};

// Meat
const MeatChrist: OfferingWithoutId = {
  description:
    "transformed, by request, to be all one needs. a monkey's paw of sorts, but with a little more meat on it. a wish granted; it barely hurts",
  filename: 'meat-christ'
};

const MeatHouse: OfferingWithoutId = {
  description: `the "factory". one distributor of our sustenance. rejoice! machines that squeal and grind and churn an output identical to the input. identical to me`,
  filename: 'meat-house'
};

const MeatMatter: OfferingWithoutId = {
  description:
    'to a curious few, flesh still clings to even the barest of bones. ourselves, we insist to imagine all things adhere to such a delightful principle',
  filename: 'meat-matter'
};

const MeatPlate: OfferingWithoutId = {
  description:
    'a feast, a banquet, a spread, a plate, a meal, a dish, a course; two servings. no, a platter! a platter of us! a clamorous gnawing',
  filename: 'meat-plate'
};

const MeatScales: OfferingWithoutId = {
  description:
    'a joyous offering, the balance and the weighing. a side of meat, a side of blood, a so called "meal prep". cooked raw on the concrete',
  filename: 'meat-scales'
};

const MeatSoup: OfferingWithoutId = {
  description:
    'perpetual stew, bubbling, boiling, simmering. steaming! the soup of theseus, never the same spoonful, but always the same when it goes down',
  filename: 'meat-soup'
};

const DinnerMeatUp: OfferingWithoutId = {
  description:
    "certainly a strange dinner guest to receive. quite insistent on the spread. a balanced meal of meat, meat, and a little more meat. can't imagine dessert",
  filename: 'dinner-meat-up'
};

const RoastBeast: OfferingWithoutId = {
  description:
    'it cuts like butter, only a small squealing. a light barking. the delicacy of extremities, chewy, warm, slightly salted. 2 lbs deli sliced still dripping',
  filename: 'roast-beast'
};

const TenderedMeat: OfferingWithoutId = {
  description:
    "hammered — tenderized or simply beaten until unruly? crackling shell, wrapped tight with twine and plastic. raised locally; we don't let the children watch",
  filename: 'tendered-meat'
};

export type OfferingsGroup = {
  id: string;
  callToAction: string;
  title: string;
  descriptionList: string[];
  filename: string;
  offeringsConfig: Record<Offering['id'], Offering>;
};

const createOfferingsConfig = (
  includedOfferings: Omit<Offering, 'id'>[]
): OfferingsGroup['offeringsConfig'] => {
  return includedOfferings.reduce((acc, current, index) => {
    const offering: Offering = {
      ...current,
      id: `${index + 1}`
    };

    return {
      ...acc,
      [offering.id]: offering
    };
  }, {});
};

const PenanceGroup: OfferingsGroup = {
  id: 'penance',
  title: 'penance',
  callToAction: 'with a heavy heart',
  descriptionList: [
    '2024 — 2025.',
    'good times create regretful men',
    '14 offerings from a selection of 38',
    'why the website exists'
  ],
  filename: 'penance',
  offeringsConfig: createOfferingsConfig([
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
  ])
};

const MeatGroup: OfferingsGroup = {
  id: 'meat',
  title: 'hunger',
  callToAction: 'with no reservations',
  descriptionList: [
    '2025.',
    'flesh interfaces; matter of meat',
    '9 offerings from a selection of 14',
    'a very special thanks to 9M9H9E9'
  ],
  filename: 'meat',
  offeringsConfig: createOfferingsConfig([
    RoastBeast,
    MeatMatter,
    MeatChrist,
    MeatScales,
    DinnerMeatUp,
    MeatSoup,
    MeatPlate,
    MeatHouse,
    TenderedMeat
  ])
};

const FurnitureGroup: OfferingsGroup = {
  id: 'furniture',
  title: 'fixtures',
  callToAction: 'with a sense of place',
  descriptionList: [
    '2026.',
    'adornments to dwell between',
    '? offerings from a selection of ??',
    'not quite mid century modern'
  ],
  filename: 'meat',
  offeringsConfig: createOfferingsConfig([
    RoastBeast,
    MeatMatter,
    MeatChrist,
    MeatScales,
    DinnerMeatUp,
    MeatSoup,
    MeatPlate,
    MeatHouse,
    TenderedMeat
  ])
};

const offeringsConfig: Record<OfferingsGroup['id'], OfferingsGroup> = {
  [PenanceGroup.id]: PenanceGroup,
  [MeatGroup.id]: MeatGroup,
  [FurnitureGroup.id]: FurnitureGroup
};

export default offeringsConfig;
