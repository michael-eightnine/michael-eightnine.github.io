import { Contact, Code, Info, Game } from 'svg';
import { classnames } from 'utils';
import { PopupID } from 'components/popup';

import DockButton from './dock_button';

import styles from './dock.module.scss';

type Props = {
  visible: boolean;
};

const Dock = ({ visible }: Props) => {
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
      <a
        aria-label="Dungeon Crawl Game"
        className={styles.dockButton}
        href="/dungeon-crawl"
        rel="noopener noreferrer"
        target="_blank"
        title="Dungeon Crawl"
      >
        <Game className={styles.dockIcon} />
        <span className={styles.dockButtonTooltip}>Dungeon Crawl</span>
      </a>
    </div>
  );
};

export default Dock;
