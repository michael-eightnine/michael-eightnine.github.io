import useGameState from './use_game_state';
import styles from './scene.module.scss';
import { Navigation } from './navigation';
import { DialogBox } from './dialog';
import { AreaId } from './types';

const Scene = () => {
  const {
    currentArea,
    handleChangeArea,
    getAreaItemAvailable,
    handlePickupItem
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
        />
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
    </div>
  );
};

export default Scene;
