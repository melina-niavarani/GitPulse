// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

// import { createRoot } from 'react-dom/client';
// import { App } from './App';

// const root = createRoot(document.getElementById('app') as HTMLElement);

// root.render(<App />);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { App } from "./App";



const root = ReactDOM.createRoot(document.getElementById("root")!)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
