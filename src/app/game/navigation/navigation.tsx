import styles from './navigation.module.scss';
import { Area, AreaId, NavDirection } from '../types';

import Button from './button';
import { useEffect } from 'react';

type Props = {
  onClick: (id: AreaId) => void;
  navigationDirections: Area['navigationDirections'];
};

const keyToDirection = (key: string) => {
  switch (key) {
    case 'ArrowRight':
      return NavDirection.East;
    case 'ArrowLeft':
      return NavDirection.West;
    case 'ArrowUp':
      return NavDirection.North;
    case 'ArrowDown':
      return NavDirection.South;
    default:
      return null;
  }
};

const Navigation = ({ onClick, navigationDirections }: Props) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const { key } = e;
      const directionForKey = keyToDirection(key);

      // Only handle known directional keys
      if (!directionForKey) {
        return;
      }

      e.preventDefault();
      if (navigationDirections[directionForKey]) {
        onClick(navigationDirections[directionForKey]);
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [navigationDirections, onClick]);

  return (
    <div className={styles.navigation}>
      {Object.entries(navigationDirections).map(([direction, destination]) => {
        return (
          <Button
            direction={direction as keyof Area['navigationDirections']}
            key={direction}
            onClick={() => onClick(destination)}
          />
        );
      })}
    </div>
  );
};

export default Navigation;
