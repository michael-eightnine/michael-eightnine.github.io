import { AreaId, NavDirection, Item, Area, ItemId } from './types';

export const ITEMS: Record<ItemId, Item> = {
  [ItemId.Lily]: {
    id: ItemId.Lily,
    requires: ItemId.Coins
  },
  [ItemId.Coins]: {
    id: ItemId.Coins,
    requires: null
  },
  [ItemId.Key]: {
    id: ItemId.Key,
    requires: ItemId.Lily
  },
  [ItemId.Door]: {
    id: ItemId.Door,
    requires: ItemId.Key
  }
};

// Town Square
const TownSquareArea: Area = {
  areaId: AreaId.TownSquare,
  item: null,
  navigationDirections: {
    [NavDirection.East]: AreaId.Marsh,
    [NavDirection.North]: AreaId.Cathedral,
    [NavDirection.South]: AreaId.Cave,
    [NavDirection.West]: AreaId.Florist
  },
  parentAreaId: null,
  subAreaId: null
};

// Florist
const FloristArea: Area = {
  areaId: AreaId.Florist,
  item: null,
  navigationDirections: { [NavDirection.East]: AreaId.TownSquare },
  parentAreaId: null,
  subAreaId: AreaId.LilyCase
};

const LilyCaseArea: Area = {
  areaId: AreaId.LilyCase,
  item: ITEMS[ItemId.Lily],
  navigationDirections: {},
  parentAreaId: AreaId.Florist,
  subAreaId: null
};

// Cave
const CaveArea: Area = {
  areaId: AreaId.Cave,
  item: null,
  navigationDirections: { [NavDirection.North]: AreaId.TownSquare },
  parentAreaId: null,
  subAreaId: AreaId.Chest
};

const ChestArea: Area = {
  areaId: AreaId.Chest,
  item: ITEMS[ItemId.Coins],
  navigationDirections: {},
  parentAreaId: AreaId.Cave,
  subAreaId: null
};

// Marsh
const MarshArea: Area = {
  areaId: AreaId.Marsh,
  item: null,
  navigationDirections: { [NavDirection.West]: AreaId.TownSquare },
  parentAreaId: null,
  subAreaId: AreaId.Grave
};

const GraveArea: Area = {
  areaId: AreaId.Grave,
  item: ITEMS[ItemId.Key],
  navigationDirections: {},
  parentAreaId: AreaId.Marsh,
  subAreaId: null
};

// Cathedral
const CathedralArea: Area = {
  areaId: AreaId.Cathedral,
  item: ITEMS[ItemId.Door],
  navigationDirections: { [NavDirection.South]: AreaId.TownSquare },
  parentAreaId: null,
  subAreaId: null
};

const InnerSanctumArea: Area = {
  areaId: AreaId.InnerSanctum,
  item: null,
  navigationDirections: {},
  parentAreaId: null,
  subAreaId: null
};

export const AREAS_BY_ID: Record<AreaId, Area> = {
  [AreaId.Cathedral]: CathedralArea,
  [AreaId.Cave]: CaveArea,
  [AreaId.Chest]: ChestArea,
  [AreaId.Florist]: FloristArea,
  [AreaId.Grave]: GraveArea,
  [AreaId.InnerSanctum]: InnerSanctumArea,
  [AreaId.LilyCase]: LilyCaseArea,
  [AreaId.Marsh]: MarshArea,
  [AreaId.TownSquare]: TownSquareArea
};

export const DEFAULT_AREA_ID = AreaId.TownSquare;
