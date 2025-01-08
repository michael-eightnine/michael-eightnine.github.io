import styles from './navigation.module.scss';
import { Area, AreaId } from '../types';

import Button from './button';

type Props = {
  onClick: (id: AreaId) => void;
  navigationDirections: Area['navigationDirections'];
};

const Navigation = ({ onClick, navigationDirections }: Props) => {
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
