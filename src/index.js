import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch  } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
