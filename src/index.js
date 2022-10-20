import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function _render() {
  console.log("CALLED inside React")
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <App />
  );
}

let render = LINKS.kify(_render);
// _render();