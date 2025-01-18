import { useCallback, useState } from 'react';
import { AREAS_BY_ID, DEFAULT_AREA_ID } from './area_config';
import { AreaId, ItemId, Item } from './types';

const getDefaultInventory = () => {
  const itemNames = Object.values(ItemId) as ItemId[];
  return itemNames.reduce(
    (acc, itemName) => ({
      ...acc,
      [itemName]: false
    }),
    {} as Record<ItemId, boolean>
  );
};

const useGameState = () => {
  const [currentArea, setCurrentArea] = useState<
    null | (typeof AREAS_BY_ID)[AreaId]
  >(null);
  const [inventory, setInventory] = useState(getDefaultInventory());
  const [gameComplete, setGameComplete] = useState(false);

  const handleChangeArea = useCallback((areaId: AreaId | null) => {
    if (areaId) {
      setCurrentArea(AREAS_BY_ID[areaId]);
    } else {
      setGameComplete(true);
    }
  }, []);

  const handleStartGame = useCallback(
    () => setCurrentArea(AREAS_BY_ID[DEFAULT_AREA_ID]),
    []
  );

  const handlePickupItem = useCallback(
    (item: Item) => {
      const canPickUp = item.requires ? inventory[item.requires] : true;
      if (!canPickUp) {
        return false;
      }

      setInventory((prev) => ({ ...prev, [item.id]: true }));
      return true;
    },
    [inventory]
  );

  const getAreaItemAvailable = useCallback(
    (areaId: AreaId) => {
      const areaItem = AREAS_BY_ID[areaId].item;
      if (!areaItem) {
        return false;
      }

      const alreadyHeld = inventory[areaItem.id];
      return !alreadyHeld;
    },
    [inventory]
  );

  return {
    currentArea,
    gameComplete,
    getAreaItemAvailable,
    handleChangeArea,
    handlePickupItem,
    handleStartGame,
    inventory
  };
};

export default useGameState;
