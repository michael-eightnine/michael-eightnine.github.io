import { useCallback, useContext, useMemo, useState } from 'react';

import { classnames } from 'utils';
import { Background } from 'svg';

import {
  ContactPopup,
  PopupContextProvider,
  PopupID,
  SkillsPopup,
  WelcomePopup
} from 'components/popup';
import { PopupContext } from 'components/popup';
import Nav from 'components/nav';
import MovingWordmark from 'components/moving_wordmark';

import styles from './app.module.scss';

function App() {
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const { instances, addInstance } = useContext(PopupContext);

  const onAnimationEnd = useCallback(() => {
    addInstance(PopupID.Welcome);
    setHeaderLoaded(true);
  }, [addInstance]);

  const mappedInstances = useMemo(() => {
    return instances.map(({ instanceId, popupId }) => {
      switch (popupId) {
        case PopupID.Welcome:
          return (
            <WelcomePopup
              key={instanceId}
              popupId={PopupID.Welcome}
              instanceId={instanceId}
            />
          );
        case PopupID.Skills:
          return (
            <SkillsPopup
              key={instanceId}
              popupId={PopupID.Skills}
              instanceId={instanceId}
            />
          );
        case PopupID.Contact:
          return (
            <ContactPopup
              key={instanceId}
              popupId={PopupID.Contact}
              instanceId={instanceId}
            />
          );
        default:
          return null;
      }
    });
  }, [instances]);

  return (
    <div
      className={classnames(styles.page, {
        [styles.page__load]: headerLoaded
      })}
    >
      <Background className={styles.background} />
      <MovingWordmark className={styles.wordmark} />
      <Nav onAnimationEnd={onAnimationEnd} />
      <main>{mappedInstances}</main>
    </div>
  );
}

const AppWithContext = () => (
  <PopupContextProvider>
    <App />
  </PopupContextProvider>
);

export default AppWithContext;
