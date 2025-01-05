import styles from '../app.module.scss';
import { useCallback, useContext, useRef } from 'react';

import { PopupContextProvider, PopupID, WelcomePopup } from './popup';
import ContentPortal from './content_portal';
import { PopupContext } from './popup';
import Nav from './nav';

function App() {
  const { instances, addInstance } = useContext(PopupContext);
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  const onAnimationEnd = useCallback(() => {
    addInstance(PopupID.Welcome);
  }, [addInstance]);

  return (
    <div className={styles.page}>
      <Nav onAnimationEnd={onAnimationEnd} />
      <main style={{ height: '100%' }} ref={mainContentRef} />
      <ContentPortal portalRef={mainContentRef}>
        {instances[PopupID.Welcome].map((id) => (
          <WelcomePopup key={id} popupId={PopupID.Welcome} instanceId={id} />
        ))}
      </ContentPortal>
    </div>
  );
}

const AppWithContext = () => (
  <PopupContextProvider>
    <App />
  </PopupContextProvider>
);

export default AppWithContext;
