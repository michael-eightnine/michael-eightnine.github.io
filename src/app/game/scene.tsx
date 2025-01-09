import useGameState from './use_game_state';
import styles from './scene.module.scss';
import { Navigation } from './navigation';
import { DialogBox } from './dialog';
import { AreaId, ItemId } from './types';
import { MapDisplay } from './map';
import { Close } from 'svg';

const getCurrentlyHeldItem = (inventory: Record<ItemId, boolean>) => {
  if (inventory.Door) {
    return 'All one could carry';
  }

  if (inventory.Key) {
    return 'Ancient Key';
  }

  if (inventory.Lily) {
    return 'Porcelain Flower';
  }

  if (inventory.Coins) {
    return 'Gold Coins';
  }

  return 'Nothing at all';
};

type Props = {
  onExitGame: () => void;
};

const Scene = ({ onExitGame }: Props) => {
  const {
    currentArea,
    handleChangeArea,
    getAreaItemAvailable,
    handlePickupItem,
    inventory
  } = useGameState();
  const {
    areaId,
    navigationDirections,
    item,
    parentAreaId,
    subAreaId,
    imageSrc
  } = currentArea;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Navigation
          navigationDirections={navigationDirections}
          onClick={(areaId: AreaId) => handleChangeArea(areaId)}
        />
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${new URL(imageSrc, import.meta.url).href})`
          }}
        >
          <div className={styles.heldItem}>
            Holding: <strong>{getCurrentlyHeldItem(inventory)}</strong>
          </div>
        </div>
        <MapDisplay activeAreaId={areaId} />

        <DialogBox
          areaId={areaId}
          getAreaItemAvailable={getAreaItemAvailable}
          handleChangeArea={handleChangeArea}
          handlePickupItem={handlePickupItem}
          item={item}
          parentAreaId={parentAreaId}
          subAreaId={subAreaId}
        />
      </div>
      <button className={styles.exitButton} onClick={onExitGame}>
        <Close />
      </button>
    </div>
  );
};

export default Scene;
