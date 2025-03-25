import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';

import App from './app';
import './root.scss';

const basename =
  import.meta.env.MODE === 'development' ? '/' : '/eternal-devotion';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename={basename}>
      <App />
    </HashRouter>
  </StrictMode>
);
