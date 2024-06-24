import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@bit-bazaar/design.theme.theme-provider';
import { Blog } from './mfes/blog.js';
import { Store } from './mfes/storefront.js';
import { Layout } from './layout.js';

export function ShellApp() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<div>Home</div>} />
            <Route path="store" element={<div>Store</div>} />
            <Route path="products" element={<Store />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
