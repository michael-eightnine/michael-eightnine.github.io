import { useContext, useEffect, useId, useRef } from 'react';

import { PopupContext, PopupID } from 'components/popup';

import styles from './dock.module.scss';

type Props = {
  id: PopupID;
  title: string;
};

const DockButton = ({ id, children, title }: Props & ChildrenProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const buttonId = useId();
  const { addInstance, registerDockButton, closeAllProcessing } =
    useContext(PopupContext);

  useEffect(() => {
    registerDockButton(id, ref.current);
    return () => registerDockButton(id, null); // Clean up on unmount
  }, [id, registerDockButton]);

  return (
    <button
      aria-haspopup="dialog"
      aria-labelledby={buttonId}
      className={styles.dockButton}
      disabled={closeAllProcessing}
      onClick={() => addInstance(id)}
      ref={ref}
    >
      {children}
      <span className={styles.dockButtonTooltip} id={buttonId}>
        {title}
      </span>
    </button>
  );
};

export default DockButton;
