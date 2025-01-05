import { Blobs } from 'svg';
import Nav from './nav';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.page}>
      <Blobs className={styles.backgroundBlobs} />
      <Nav onAnimationEnd={() => {}} />
    </div>
  );
}

export default App;
