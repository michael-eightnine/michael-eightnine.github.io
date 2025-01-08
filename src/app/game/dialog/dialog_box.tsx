import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Area, AreaId, Item } from '../types';
import styles from './dialog.module.scss';

import { ITEM_DIALOG, RETURN_DIALOG, ENTER_DIALOG, AREA_DIALOG } from './data';

type Props = {
  handlePickupItem: (item: Item) => boolean;
  getAreaItemAvailable: (areaId: AreaId) => boolean;
  handleChangeArea: (areaId: AreaId) => void;
} & Pick<Area, 'areaId' | 'item' | 'subAreaId' | 'parentAreaId'>;
const DialogBox = ({
  areaId,
  item,
  getAreaItemAvailable,
  handlePickupItem,
  subAreaId,
  parentAreaId,
  handleChangeArea
}: Props) => {
  // Track the currently loaded area ID
  const loadedAreaId = useRef(areaId);

  // Check if the area has an item and if item pickup is allowed
  const areaHasItem = !!item;
  const itemAvailable = getAreaItemAvailable(areaId);
  const allowItemPickup = areaHasItem && itemAvailable;

  // Initialize item status state
  const [itemStatus, setItemStatus] = useState<
    'obtained' | 'denied' | 'none' | 'held'
  >(areaHasItem && !itemAvailable ? 'held' : 'none');

  // Update item status when the area ID changes
  useEffect(() => {
    if (areaId && areaId !== loadedAreaId.current) {
      setItemStatus(
        areaHasItem && !getAreaItemAvailable(areaId) ? 'held' : 'none'
      );
      loadedAreaId.current = areaId;
    }
  }, [areaHasItem, areaId, getAreaItemAvailable]);

  // Retrieve dialogs based on the current context
  const areaDialog = AREA_DIALOG[areaId];
  const itemDialog = areaHasItem ? ITEM_DIALOG[item.id] : null;
  const subAreaDialog = subAreaId ? ENTER_DIALOG[subAreaId] : null;
  const parentAreaDialog = parentAreaId ? RETURN_DIALOG[areaId] : null;

  // Handle pickup item
  const onItemPickupAttempt = useCallback(() => {
    if (!allowItemPickup) return;

    const itemAddSuccess = handlePickupItem(item);
    setItemStatus(itemAddSuccess ? 'obtained' : 'denied');
  }, [allowItemPickup, handlePickupItem, item]);

  // Determine description text based on item status
  const renderedDescription = useMemo(() => {
    switch (itemStatus) {
      case 'none':
        return areaDialog.message;
      case 'denied':
        return itemDialog?.failure;
      case 'held':
        return itemDialog?.alreadyHeld;
      case 'obtained':
        return itemDialog?.success;
      default:
        return areaDialog.message;
    }
  }, [itemStatus, areaDialog.message, itemDialog]);

  return (
    <section className={styles.container}>
      <header>{areaDialog.title}</header>
      <p>{renderedDescription}</p>

      {itemDialog && itemStatus === 'none' && allowItemPickup && (
        <button onClick={onItemPickupAttempt}>{itemDialog.attempt}</button>
      )}

      {subAreaDialog && subAreaId && (
        <button onClick={() => handleChangeArea(subAreaId)}>
          {subAreaDialog}
        </button>
      )}

      {parentAreaDialog && parentAreaId && (
        <button onClick={() => handleChangeArea(parentAreaId)}>
          {parentAreaDialog}
        </button>
      )}
    </section>
  );
};

export default DialogBox;
