export enum AreaId {
  Cathedral = 'Cathedral',
  Cave = 'Cave',
  Chest = 'Chest',
  Florist = 'Florist',
  Grave = 'Grave',
  InnerSanctum = 'InnerSanctum',
  LilyCase = 'LilyCase',
  Marsh = 'Marsh',
  TownSquare = 'TownSquare'
}

export enum NavDirection {
  East = 'E',
  North = 'N',
  South = 'S',
  West = 'W'
}

export enum ItemId {
  Coins = 'Coins',
  Key = 'Key',
  Lily = 'Lily',
  Door = 'Door'
}

export type Item = {
  id: ItemId;
  requires: ItemId | null;
};

export type Area = {
  areaId: AreaId;
  subAreaId: AreaId | null;
  parentAreaId: AreaId | null;
  navigationDirections: Partial<Record<NavDirection, AreaId>>;
  item: Item | null;
};
