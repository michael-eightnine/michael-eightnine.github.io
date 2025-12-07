import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Game from './app/game';

import './root.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Game />
  </StrictMode>
);
