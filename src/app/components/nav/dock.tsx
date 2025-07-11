import { Contact, Code, Info, Game } from 'svg';
import { classnames } from 'utils';
import { PopupID } from 'components/popup';

import DockButton from './dock_button';

import styles from './dock.module.scss';

type Props = {
  onOpenGame: () => void;
  visible: boolean;
};

const Dock = ({ onOpenGame, visible }: Props) => {
  return (
    <div
      className={classnames(styles.dock, {
        [styles.dock__visible]: visible
      })}
    >
      <DockButton id={PopupID.Welcome} title="About">
        <Info className={styles.dockIcon} />
      </DockButton>
      <DockButton id={PopupID.Skills} title="Skills">
        <Code className={styles.dockIcon} />
      </DockButton>
      <DockButton id={PopupID.Contact} title="Contact">
        <Contact className={styles.dockIcon} />
      </DockButton>
      <button
        aria-haspopup="false"
        aria-labelledby={'game'}
        className={styles.dockButton}
        onClick={onOpenGame}
      >
        <Game className={styles.dockIcon} />
        <span className={styles.dockButtonTooltip} id={'game'}>
          Dungeon Crawl
        </span>
      </button>
    </div>
  );
};

export default Dock;
