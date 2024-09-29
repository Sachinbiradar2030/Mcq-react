import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './Components/Home.jsx';
import Java from './Components/Java.jsx';
import Html from './Components/Html.jsx';
import Sql from './Components/Sql.jsx';

// Set up the routes using HashRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="java" element={<Java />} />
          <Route path="html" element={<Html />} />
          <Route path="sql" element={<Sql />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
