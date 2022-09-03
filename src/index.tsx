import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { QueryProvider } from './components/providers/query-provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryProvider>
    <App />
  </QueryProvider>
);
