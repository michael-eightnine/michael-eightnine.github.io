import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import {
  transitionElement,
  getSectionCoordinates,
  getTransitionStyle,
  classnames,
  sleep
} from 'utils';
import { Code, Contact, Info } from 'svg';

import styles from './popup.module.scss';
import { GenericPopupProps, PopupID } from './types';
import { PopupContext } from './popup_context';
import PopupHeader from './popup_header';

const getHeaderIcon = (popupId: GenericPopupProps['popupId']) => {
  switch (popupId) {
    case PopupID.Welcome:
      return <Info className={styles.headerIcon} />;
    case PopupID.Contact:
      return <Contact className={styles.headerIcon} />;
    case PopupID.Skills:
      return <Code className={styles.headerIcon} />;
    default:
      return null;
  }
};

const GenericPopup = ({
  title,
  children,
  popupId,
  instanceId
}: GenericPopupProps & ChildrenProps) => {
  const transitionActiveRef = useRef(false);
  const closingFromAllRef = useRef(false);
  const { removeInstance, closeAllProcessing, instances, getDockButtonRef } =
    useContext(PopupContext);

  const dockButtonElement = useMemo(
    () => getDockButtonRef(popupId),
    [getDockButtonRef, popupId]
  );

  const [transitionState, setTransitionState] = useState<
    'open' | 'opening' | 'closed' | 'closing'
  >('closed');
  const ref = useRef<HTMLDivElement | null>(null);

  const indexOfPopup = useMemo(() => {
    return instances.findIndex(
      (instance) => instance.instanceId === instanceId
    );
  }, [instanceId, instances]);

  useEffect(() => {
    if (!dockButtonElement || transitionActiveRef.current) return;

    transitionActiveRef.current = true;

    const headerRect = dockButtonElement.getBoundingClientRect();
    const isMobile = window.innerWidth < 600;
    const headerHeight = headerRect.height + headerRect.top;
    const endCoordinates = getSectionCoordinates(isMobile, headerHeight);

    const startTransition = async () => {
      if (ref.current && dockButtonElement) {
        setTransitionState('opening');
        await transitionElement({
          element: ref.current,
          from: dockButtonElement.getBoundingClientRect(),
          to: endCoordinates,
          transitionStyle: getTransitionStyle(true)
        });
        setTransitionState('open');
      }
      transitionActiveRef.current = false;
    };

    startTransition();
  }, [dockButtonElement]);

  const handleClose = useCallback(async () => {
    if (!ref.current || !dockButtonElement || transitionActiveRef.current)
      return;
    transitionActiveRef.current = true;
    setTransitionState('closing');

    await transitionElement({
      element: ref.current,
      from: ref.current.getBoundingClientRect(),
      to: dockButtonElement.getBoundingClientRect(),
      transitionStyle: getTransitionStyle(false)
    });
    setTransitionState('closed');

    removeInstance(instanceId);
    transitionActiveRef.current = false;
  }, [dockButtonElement, instanceId, removeInstance]);

  useEffect(() => {
    const closeWithCloseAll = async () => {
      closingFromAllRef.current = true;

      // Stagger closing all popups by 50ms per popup
      const delay = indexOfPopup * 50;
      await sleep(delay);
      await handleClose();

      closingFromAllRef.current = false;
    };

    if (
      closeAllProcessing &&
      !transitionActiveRef.current &&
      !closingFromAllRef.current
    ) {
      closeWithCloseAll();
    }
  }, [closeAllProcessing, handleClose, indexOfPopup]);

  return (
    <div
      className={classnames(styles.popup, styles[`popup__${transitionState}`])}
      ref={ref}
      role="dialog"
      style={{ zIndex: `${indexOfPopup + 1}` }}
    >
      <PopupHeader onClose={handleClose} title={title}>
        {getHeaderIcon(popupId)}
      </PopupHeader>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};

export default GenericPopup;
