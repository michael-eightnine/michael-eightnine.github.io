import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Area, AreaId, Item, ItemStatus } from '../types';
import styles from './dialog.module.scss';

import {
  ITEM_DIALOG,
  RETURN_DIALOG,
  ENTER_DIALOG,
  AREA_DIALOG,
  COMPLETION_DIALOG
} from './data';

type Props = {
  handlePickupItem: (item: Item) => boolean;
  getAreaItemAvailable: (areaId: AreaId) => boolean;
  handleChangeArea: (areaId: AreaId | null) => void;
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
  const [itemStatus, setItemStatus] = useState<ItemStatus>(
    areaHasItem && !itemAvailable ? ItemStatus.Held : ItemStatus.None
  );

  // Update item status when the area ID changes
  useEffect(() => {
    if (areaId && areaId !== loadedAreaId.current) {
      setItemStatus(
        areaHasItem && !getAreaItemAvailable(areaId)
          ? ItemStatus.Held
          : ItemStatus.None
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

    const pickupSuccessful = handlePickupItem(item);
    setItemStatus(pickupSuccessful ? ItemStatus.Obtained : ItemStatus.Denied);
  }, [allowItemPickup, handlePickupItem, item]);

  // Determine description text based on item status
  const renderedDescription = useMemo(() => {
    switch (itemStatus) {
      case ItemStatus.None:
        return areaDialog.message;
      case ItemStatus.Denied:
        return itemDialog?.failure;
      case ItemStatus.Held:
        return itemDialog?.alreadyHeld;
      case ItemStatus.Obtained:
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
        <button
          className={styles.navAction}
          onClick={() => handleChangeArea(parentAreaId)}
        >
          {parentAreaDialog}
        </button>
      )}

      {areaId === AreaId.Cathedral && !getAreaItemAvailable(areaId) && (
        <button onClick={() => handleChangeArea(AreaId.InnerSanctum)}>
          {COMPLETION_DIALOG[AreaId.Cathedral]}
        </button>
      )}

      {areaId === AreaId.InnerSanctum && (
        <button onClick={() => handleChangeArea(null)}>
          {COMPLETION_DIALOG[AreaId.InnerSanctum]}
        </button>
      )}
    </section>
  );
};

export default DialogBox;
