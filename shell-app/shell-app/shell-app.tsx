import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@bit-bazaar/design.theme.theme-provider';
import { AuthProvider } from '@bit-bazaar/shell-app.auth.auth-provider';
import { Homepage } from '@bit-bazaar/shell-app.pages.homepage';
import { Blog } from './mfes/blog.js';
import { Store } from './mfes/storefront.js';
import { Layout } from './layout.js';

export function ShellApp() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/store/*" element={<Store />} />
              <Route path="/blog/*" element={<Blog />} />
              <Route path="*" element={<div>Not Found</div>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
