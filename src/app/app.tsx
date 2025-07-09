import {
  useCallback,
  useContext,
  useMemo,
  useState,
  lazy,
  Suspense
} from 'react';

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

import { useGameQueryParam } from './game';

const GameScene = lazy(() =>
  import('./game/scene').then(
    (module) =>
      new Promise<typeof module>((resolve) => {
        // Add artificial delay in development to test loading state
        const delay = process.env.NODE_ENV === 'development' ? 2000 : 0;
        setTimeout(() => resolve(module), delay);
      })
  )
);

import styles from './app.module.scss';

export function App() {
  const { instances, addInstance, resetInstances } = useContext(PopupContext);
  const { gameEnabled, toggleGameParam } = useGameQueryParam({
    onGameEnabled: resetInstances
  });
  const [headerLoaded, setHeaderLoaded] = useState(false);

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

  if (gameEnabled) {
    return (
      <Suspense
        fallback={
          <div className={styles.loadingContainer}>
            <div className={styles.loading}>
              <div className={styles.spinner} />
              <p>Loading game...</p>
            </div>
          </div>
        }
      >
        <GameScene onExitGame={toggleGameParam} />
      </Suspense>
    );
  }

  return (
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
