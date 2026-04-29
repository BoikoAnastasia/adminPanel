import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import { Layout } from './layout/Layout.tsx';
import { routersLayout } from './routers/routers.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routersLayout.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
