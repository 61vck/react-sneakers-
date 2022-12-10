import React from 'react'; 
import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom'; 
import ReactDOM from 'react-dom/client'; 

import './index.scss';
import 'macro-css';
import App from './App';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="*" element={<Header />} />
    </Routes>
  </BrowserRouter>,
);
