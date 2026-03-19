// import React from 'react';
import Scrolle from './components/scrolle.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Scrolle/>
      <App />
    </BrowserRouter>
  
);
