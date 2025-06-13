// src/main.jsx
import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading…</div>}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Suspense>
  </StrictMode>
);
