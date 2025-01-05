import Nav from './nav';
import styles from './app.module.scss';
import { Content, Section } from './section';
import { PlacementContextProvider } from './placement';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { animateBetweenPortals, getPortals } from './placement/utils';

import Sections from './sections';

function App() {
  const [c, setC] = useState(0)
  const { main, dock } = getPortals();

  console.log('main', dock, main);
  return (
    <div className={styles.page}>
      <PlacementContextProvider>
        <Nav onAnimationEnd={() => {}} />
        <main className={styles.main}>
          <div id="main-portal" style={{width: '100%'}} />
          <Sections />
        </main>
      </PlacementContextProvider>
      <button onClick={() => setC(prev => prev+1)}>c</button>
    </div>
  );
}

export default App;
