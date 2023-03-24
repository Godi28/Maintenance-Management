// importing react
import React from 'react';
// importing reactDom
import ReactDOM from 'react-dom/client';
// importing CSS 
import './CSS/index.css';
// importing Crud component for rendering 
import { Crud } from './Components/App';
// importing web vitals
import reportWebVitals from './WebVitals/reportWebVitals';
// rendering Crud
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Crud/>
);

reportWebVitals();