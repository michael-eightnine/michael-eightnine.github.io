import { Routes, Route, Outlet, Navigate } from 'react-router';

import NavBar from 'components/nav';
import { Offering, Origins, OfferingSelection } from 'routes';

import styles from './app.module.scss';
import { getSelectionPath } from 'utils';

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
          element={<Navigate replace to={getSelectionPath()} />}
          path="/"
        />
        <Route element={<OfferingSelection />} path={getSelectionPath()} />
        <Route element={<Offering />} path="/offering/:groupId/:id" />
        <Route element={<Origins />} path="/origins" />
        <Route
          element={<Navigate replace to={getSelectionPath()} />}
          path="*"
        />
      </Route>
    </Routes>
  );
};

export default App;
