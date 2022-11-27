import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import GeneralCtxProvider from './store/GeneralCtxProvider';
import ThemeContextProvider from './store/ThemeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralCtxProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </GeneralCtxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
