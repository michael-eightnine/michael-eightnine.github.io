import type { Offering, PaintingsGroup } from '../types';
import { createOfferingsConfig } from '../types';

type OfferingWithoutId = Omit<Offering, 'id'>;

const CactusCurtain: OfferingWithoutId = {
  description:
    '[1] obscuring cloth. [2] dining chair (set of one) - good for solemn weeping or reading, contrasting wood accents. [3] cactus (plant). [4] stable surface.',
  filename: 'cactus-curtain'
};

const Flowerman: OfferingWithoutId = {
  description:
    '[1] large red rose - prickling stem included (recipient not included). [2] shirtless. [3] denim (free with hand removal). [4] identical boots.',
  filename: 'flowerman'
};

const InRepose: OfferingWithoutId = {
  description:
    '[1] killing tool. [2] victim (available while supplies last). [3] apathetic contemplation. [4] end table - spiral glass vase permanently attached.',
  filename: 'in-repose'
};

const NightStalker: OfferingWithoutId = {
  description:
    "[1] night stalker - unrelenting (returns not accepted). [2] the big man outside. [3] figment of a coffee table w/ plant. [4] a rug you'll see soon.",
  filename: 'night-stalker'
};

const OpiumDen: OfferingWithoutId = {
  description:
    "[1] oversized floor lamp - arcing arm, pull cord screams when used. [2] received ironically relieving terminal diagnosis. [3] a rug you'll see soon.",
  filename: 'opium-den'
};

const Showroom: OfferingWithoutId = {
  description:
    '[1] for sitting. [2] reading lamp - transparent plastic arm. [3] glowing totem (provide own soul). [4] formica table - its color is green. [5] streetlight.',
  filename: 'showroom'
};

const TableDance: OfferingWithoutId = {
  description:
    "[1] raining out. [2] rule breaker. [3] stained glass desk lamp. [4] oblong table - gold accents, chrome top. [5] a rug you'll see soon. [6] entity.",
  filename: 'table-dance'
};

const DinerDonut: OfferingWithoutId = {
  description:
    "[1] warped jade cylinder - hollow. [2] illuminated glass curiosity (luminance included). [3] curiosity platform - unusable otherwise. [4] [5] dyin' quick.",
  filename: 'diner-donut'
};

export const FurnitureGroup: PaintingsGroup = {
  kind: 'paintings',
  id: 'furniture',
  title: 'fire sale',
  callToAction: 'with satisfaction guaranteed',
  descriptionList: [
    '2025 — 2026.',
    'cheapest supply house on earth',
    '8 offerings from a selection of 12',
    'not quite mid-century modern'
  ],
  filename: 'furniture',
  offeringsConfig: createOfferingsConfig([
    NightStalker,
    Flowerman,
    InRepose,
    CactusCurtain,
    OpiumDen,
    Showroom,
    TableDance,
    DinerDonut
  ])
};
