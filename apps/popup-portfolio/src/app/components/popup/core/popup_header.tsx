import { Close } from 'svg';
import { classnames } from 'utils';

import styles from './popup.module.scss';

type Props = {
  isDragging: boolean;
  onClose: () => void;
  onDragStart: React.MouseEventHandler<HTMLElement>;
  title: string;
};

const PopupHeader = ({
  children,
  isDragging,
  onClose,
  onDragStart,
  title
}: Props & ChildrenProps) => {
  return (
    <header className={styles.header}>
      <div
        className={classnames(styles.headerIconContainer, {
          [styles.headerIconContainer__dragging]: isDragging
        })}
        onMouseDown={onDragStart}
      >
        {children}
      </div>
      <span>{title}</span>

      <button
        aria-label={`Close ${title}`}
        className={styles.headerButton}
        onClick={onClose}
      >
        <Close className={styles.headerButtonIcon} />
      </button>
    </header>
  );
};

export default PopupHeader;
