import { Close } from 'svg';

import styles from './popup.module.scss';

type Props = {
  title: string;
  onClose: () => void;
};

const PopupHeader = ({ title, onClose, children }: Props & ChildrenProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerIconContainer}>{children}</div>
      <span>{title}</span>

      <button onClick={onClose} className={styles.headerButton}>
        <Close className={styles.headerButtonIcon} />
      </button>
    </header>
  );
};

export default PopupHeader;
