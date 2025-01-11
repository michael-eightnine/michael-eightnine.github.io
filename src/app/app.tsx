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
import { GameScene } from './game';

import styles from './app.module.scss';

const useQueryNav = () => {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const [gameEnabled, setGameEnabled] = useState(
    params.get('game') === 'enabled'
  );

  const toggleGameParam = () => {
    if (gameEnabled) {
      params.delete('game');
      setGameEnabled(false);
    } else {
      params.set('game', 'enabled');
      setGameEnabled(true);
    }
    window.history.pushState(null, '', url.toString());
  };

  return {
    toggleGameParam,
    gameEnabled
  };
};

export function App() {
  const { gameEnabled, toggleGameParam } = useQueryNav();
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
              instanceId={instanceId}
              key={instanceId}
              popupId={PopupID.Welcome}
            />
          );
        case PopupID.Skills:
          return (
            <SkillsPopup
              instanceId={instanceId}
              key={instanceId}
              popupId={PopupID.Skills}
            />
          );
        case PopupID.Contact:
          return (
            <ContactPopup
              instanceId={instanceId}
              key={instanceId}
              popupId={PopupID.Contact}
            />
          );
        default:
          return null;
      }
    });
  }, [instances]);

  return gameEnabled ? (
    <GameScene onExitGame={toggleGameParam} />
  ) : (
    <div
      className={classnames(styles.page, {
        [styles.page__load]: headerLoaded
      })}
    >
      <Background className={styles.background} />
      <MovingWordmark className={styles.wordmark} />
      <Nav onAnimationEnd={onAnimationEnd} onOpenGame={toggleGameParam} />
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
