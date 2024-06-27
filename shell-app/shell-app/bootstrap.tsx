import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ShellApp } from './shell-app.js';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <ShellApp />
  </StrictMode>
);
