import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@bit-bazaar/design.theme.theme-provider';
import { ShellApp } from './shell-app.js';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ShellApp />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
