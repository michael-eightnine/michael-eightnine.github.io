import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';

import App from './app';
import './root.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>
);
