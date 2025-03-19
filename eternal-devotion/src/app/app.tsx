import { Routes, Route, Outlet } from 'react-router';
import { Home, Offering, Origins } from 'routes';

import styles from './app.module.scss';
import NavBar from 'components/nav';

const AppLayout = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <span>thanks 4 visiting</span>
        <span>this is a website of paintings</span>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Offering />} path="/offering/:id" />
        <Route element={<Origins />} path="/origins" />
      </Route>
    </Routes>
  );
};

export default App;
