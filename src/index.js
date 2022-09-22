import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import Main from "./Main"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
      <Main/>
  </React.StrictMode>
  
);


serviceWorkerRegistration.unregister();


