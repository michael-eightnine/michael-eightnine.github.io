import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './index.css';
import App from './App';
import ProfessionalFocus from './pages/professional-focus';
import WorkExperience from './pages/work-experience';
import ConnectContact from './pages/connect-contact';
import BonusContent from './pages/bonus-content';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<ProfessionalFocus />} index />
          <Route element={<WorkExperience />} path="work-experience" />
          <Route element={<ConnectContact />} path="connect-contact" />
          <Route element={<BonusContent />} path="bonus-content" />
          {/* 404 fallback to Professional Focus */}
          <Route element={<Navigate replace to="/" />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
