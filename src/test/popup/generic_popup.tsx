import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  transitionElement,
  getSectionCoordinates,
  getTransitionStyle
} from '../utils';

import { classnames } from 'utils';

import styles from './popup.module.scss';
import PopupHeader from './popup_header';
import { PopupID } from './types';
import { PopupContext } from './popup_context';

export type GenericPopupProps = {
  title: string;
  dockButtonRef: MutableRefObject<HTMLButtonElement | null>;
  popupId: PopupID;
  instanceId: string;
};

const GenericPopup = ({
  title,
  children,
  dockButtonRef,
  popupId,
  instanceId
}: GenericPopupProps & ChildrenProps) => {
  const { removeInstance } = useContext(PopupContext);

  const [transitionState, setTransitionState] = useState<
    'open' | 'opening' | 'closed' | 'closing'
  >('closed');
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!dockButtonRef.current) return;

    const headerRect = dockButtonRef.current.getBoundingClientRect();
    const headerHeight = headerRect.height + headerRect.top;
    const endCoordinates = getSectionCoordinates(headerHeight);

    const startTransition = async () => {
      if (ref.current && dockButtonRef.current) {
        setTransitionState('opening');
        await transitionElement({
          element: ref.current,
          from: dockButtonRef.current.getBoundingClientRect(),
          to: endCoordinates,
          transitionStyle: getTransitionStyle(true)
        });
        setTransitionState('open');
      }
    };

    startTransition();
  }, [dockButtonRef]);

  const handleClose = async () => {
    if (!ref.current || !dockButtonRef.current) return;
    setTransitionState('closing');

    await transitionElement({
      element: ref.current,
      from: ref.current.getBoundingClientRect(),
      to: dockButtonRef.current.getBoundingClientRect(),
      transitionStyle: getTransitionStyle(false)
    });
    setTransitionState('closed');

    removeInstance(popupId, instanceId);
  };

  return (
    <div
      ref={ref}
      className={classnames(styles.popup, styles[`popup__${transitionState}`])}
    >
      <PopupHeader title={title} onClose={handleClose} />
      {children}
    </div>
  );
};

export default GenericPopup;
