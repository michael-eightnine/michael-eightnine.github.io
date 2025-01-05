import styles from '../app.module.scss';
import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { transitionElement, getSectionCoordinates } from './utils';

import sectionStyles from '../section/section.module.scss'
import { classnames } from 'utils';

const PortalContainer = ({
  portalRef,
  children
}: ChildrenProps & { portalRef: MutableRefObject<HTMLDivElement | null> }) => {
  if (!portalRef.current) return null;

  return createPortal(children, portalRef.current);
};

const InstanceComponent = ({
  id,
  dockButtonRef,
  onClose
}: {
  dockButtonRef: MutableRefObject<HTMLButtonElement | null>;
  id: string;
  onClose: () => void;
}) => {
  const [transitionState, setTransitionState] = useState<
    'open' | 'opening' | 'closed' | 'closing'
  >('closed');
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const endCoordinates = getSectionCoordinates();

    const startTransition = async () => {
      if (ref.current && dockButtonRef.current) {
        setTransitionState('opening');
        await transitionElement(
          ref.current,
          dockButtonRef.current.getBoundingClientRect(),
          endCoordinates,
          'height 0.5s ease, width 0.5s ease, top 0.5s ease, left 0.5s ease, box-shadow 0.75s ease'
        );
        setTransitionState('open');
      }
    };

    startTransition();
  }, [dockButtonRef]);

  const handleClose = async () => {
    if (!ref.current || !dockButtonRef.current) return;
    setTransitionState('closing');

    await transitionElement(
      ref.current,
      ref.current.getBoundingClientRect(),
      dockButtonRef.current.getBoundingClientRect(),
      'height 0.5s cubic-bezier(0.68, -0.55, 0.9, 0.3), width 0.5s cubic-bezier(0.68, -0.55, 0.9, 0.3), top 0.5s cubic-bezier(0.68, -0.55, 0.9, 0.3), left 0.5s cubic-bezier(0.68, -0.55, 0.9, 0.3), box-shadow 0.75s cubic-bezier(0.68, -0.55, 0.9, 0.3)'
    );
    setTransitionState('closed');

    onClose();
  };

  const transitionClass = useMemo(() => {
    switch (transitionState) {
      case 'closed': {
        return sectionStyles.section__closed
      }
      case 'closing': {
        return sectionStyles.section__closing
      }
      case 'opening': {
        return sectionStyles.section__opening
      }
      case 'open': {
        return sectionStyles.section__open
      }
    }
  }, [transitionState])

  return (
    <div
      ref={ref}
      className={classnames(sectionStyles.section, transitionClass)}
      onClick={handleClose}
    >
      Component {id}
    </div>
  );
};

function App() {
  const [instances, setInstances] = useState<string[]>([]);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const dockButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleAddInstance = () => {
    setInstances((prevInstances) => [
      ...prevInstances,
      new Date().toISOString()
    ]);
  };

  return (
    <div className={styles.page}>
      <button
        onClick={handleAddInstance}
        ref={dockButtonRef}
        style={{ width: '48px', height: '48px', backgroundColor: 'red' }}
      >
        +
      </button>
      <main style={{ height: '100%' }} ref={mainContentRef} />
      <PortalContainer portalRef={mainContentRef}>
        {instances.map((id) => (
          <InstanceComponent
            key={id}
            id={id}
            dockButtonRef={dockButtonRef}
            onClose={() =>
              setInstances((prev) => prev.filter((prevId) => prevId !== id))
            }
          />
        ))}
      </PortalContainer>
    </div>
  );
}

export default App;
