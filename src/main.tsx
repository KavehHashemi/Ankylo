import './styles/style.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './components/Home';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home></Home>
    {/* <div className="a" /> */}
  </React.StrictMode>
);
