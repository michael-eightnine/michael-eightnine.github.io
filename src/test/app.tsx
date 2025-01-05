import styles from '../app.module.scss';
import { useCallback, useContext, useRef, useState } from 'react';

import {
  ContactPopup,
  PopupContextProvider,
  PopupID,
  SkillsPopup,
  WelcomePopup
} from './popup';
import ContentPortal from './content_portal';
import { PopupContext } from './popup';
import Nav from './nav';
import bg from './bg-under.svg';
import MovingWordmark from './moving_wordmark';
import { classnames } from 'utils';

function App() {
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const { instances, addInstance } = useContext(PopupContext);
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  const onAnimationEnd = useCallback(() => {
    addInstance(PopupID.Welcome);
    setHeaderLoaded(true);
  }, [addInstance]);

  return (
    <div
      className={classnames(styles.page, {
        [styles.page__load]: headerLoaded
      })}
    >
      <img
        src={bg}
        alt="background"
        aria-hidden="true"
        className={styles.background}
      />
      <MovingWordmark />
      <Nav onAnimationEnd={onAnimationEnd} />
      <main style={{ height: '100%' }} ref={mainContentRef} />
      <ContentPortal portalRef={mainContentRef}>
        {instances[PopupID.Welcome].map((id) => (
          <WelcomePopup key={id} popupId={PopupID.Welcome} instanceId={id} />
        ))}
        {instances[PopupID.Contact].map((id) => (
          <ContactPopup key={id} popupId={PopupID.Contact} instanceId={id} />
        ))}
        {instances[PopupID.Skills].map((id) => (
          <SkillsPopup key={id} popupId={PopupID.Skills} instanceId={id} />
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
