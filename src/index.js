import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const container = document.getElementById('app');
hydrateRoot(container, <App />);

reportWebVitals();
