import { useCallback, useState } from 'react';
import { AREAS_BY_ID, DEFAULT_AREA_ID } from './area_config';
import { AreaId, ItemId, Item } from './types';

/**
 * Generates the default inventory object by populating the object with each item ID with a `false` value
 */
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

/**
 * Handles tracking game state including the current area, the current inventory state, and if the game is completed
 */
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

  /**
   * Determines if a given item can be picked up by the player
   * Some items require another item to already be held, indicated by the `item.requires` field
   */
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
