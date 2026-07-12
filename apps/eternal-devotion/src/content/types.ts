export type Offering = {
  filename: string;
  id: string;
  description: string;
};

export type Die = {
  src: string;
  value: number;
};

// Fields every homepage card renders from, shared by all offering kinds. To an
// end user, every group is "an offering"; `kind` only distinguishes how a group
// is rendered and routed internally.
type OfferingsGroupBase = {
  id: string;
  callToAction: string;
  title: string;
  descriptionList: string[];
  filename: string;
};

// The original offering kind: a collection of static paintings viewed one at a
// time at /offering/:groupId/:id.
export type PaintingsGroup = OfferingsGroupBase & {
  kind: 'paintings';
  offeringsConfig: Record<Offering['id'], Offering>;
};

// An interactive offering (e.g. the exquisite-corpse assembler) with its own
// route and bespoke rendering, but the same homepage card treatment.
export type ExperienceGroup = OfferingsGroupBase & {
  kind: 'experience';
  path: string;
};

export type OfferingsGroup = PaintingsGroup | ExperienceGroup;

// Builds a group's offerings map, assigning each a 1-based id by position.
export const createOfferingsConfig = (
  includedOfferings: Omit<Offering, 'id'>[]
): PaintingsGroup['offeringsConfig'] => {
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
