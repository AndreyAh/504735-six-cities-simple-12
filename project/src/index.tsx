import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  NumberOfOffers: 3312,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App NumberOfOffers = {Setting.NumberOfOffers} />
  </React.StrictMode>,
);
