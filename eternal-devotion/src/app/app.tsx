import { Routes, Route, Outlet, Navigate } from 'react-router';

import { createOfferingPath } from 'utils';
import NavBar from 'components/nav';
import { Offering, Origins } from 'routes';

import styles from './app.module.scss';

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
        <Route
          element={<Navigate replace to={createOfferingPath('1')} />}
          path="/"
        />
        <Route element={<Offering />} path="/offering/:id" />
        <Route element={<Origins />} path="/origins" />
        <Route
          element={<Navigate replace to={createOfferingPath('1')} />}
          path="*"
        />
      </Route>
    </Routes>
  );
};

export default App;
