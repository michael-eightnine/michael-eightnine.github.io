import useGameState from './use_game_state';
import styles from './scene.module.scss';
import { Navigation } from './navigation';
import { DialogBox } from './dialog';
import { AreaId, ItemId } from './types';
import { MapDisplay } from './map';
import CathedralImage from './images/cathedral.jpg';
import CaveImage from './images/cave.jpg';
import ChestImage from './images/chest.jpg';
import FloristImage from './images/florist.jpg';
import GraveImage from './images/grave.jpg';
import LilyCaseImage from './images/lily case.jpg';
import MarshImage from './images/marsh.jpg';
import TownSquareImage from './images/town_square.jpg';
import InnerSanctumImage from './images/inner_sanctum.jpg';
import { ExitInterstitial, WelcomeInterstitial } from './interstitial';

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

const getImage = (areaId: AreaId) => {
  switch (areaId) {
    case AreaId.Cathedral:
      return CathedralImage;
    case AreaId.Cave:
      return CaveImage;
    case AreaId.Chest:
      return ChestImage;
    case AreaId.Florist:
      return FloristImage;
    case AreaId.Grave:
      return GraveImage;
    case AreaId.InnerSanctum:
      return InnerSanctumImage;
    case AreaId.LilyCase:
      return LilyCaseImage;
    case AreaId.Marsh:
      return MarshImage;
    case AreaId.TownSquare:
      return TownSquareImage;
  }
};

type Props = {
  onExitGame: () => void;
};

const Scene = ({ onExitGame }: Props) => {
  const {
    currentArea,
    handleChangeArea,
    handleStartGame,
    getAreaItemAvailable,
    gameComplete,
    handlePickupItem,
    inventory
  } = useGameState();

  if (!currentArea) {
    return <WelcomeInterstitial onStartGame={handleStartGame} />;
  }

  if (gameComplete) {
    return <ExitInterstitial onEndGame={onExitGame} />;
  }

  const { areaId, navigationDirections, item, parentAreaId, subAreaId } =
    currentArea;

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
            backgroundImage: `url(${getImage(areaId)})`
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
        Exit
      </button>
    </div>
  );
};

export default Scene;
