import type { Offering, PaintingsGroup } from '../types';
import { createOfferingsConfig } from '../types';

type OfferingWithoutId = Omit<Offering, 'id'>;

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

export const MeatGroup: PaintingsGroup = {
  kind: 'paintings',
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
