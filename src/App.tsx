import Nav from './test/nav';
import styles from './app.module.scss';
import { PlacementContextProvider } from './placement';
import { useRef } from 'react';
import TestSection from './test_section';

function App() {
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const navigationDockRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.page}>
      <PlacementContextProvider
        dockRef={navigationDockRef}
        mainContentRef={mainContentRef}
      >
        <Nav onAnimationEnd={() => {}} ref={navigationDockRef} />
        <main className={styles.main} ref={mainContentRef}>
          <TestSection />
        </main>
      </PlacementContextProvider>
    </div>
  );
}

export default App;
