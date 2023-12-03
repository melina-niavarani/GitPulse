// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
