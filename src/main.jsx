import React from 'react';

import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
