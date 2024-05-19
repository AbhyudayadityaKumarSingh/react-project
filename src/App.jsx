// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListView from './components/ListView.jsx';
import ProductView from './components/ProductView.jsx';
import SideNav from './components/SideNav.jsx';
import './App.css';

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <Router>
      <div className="app">
        <SideNav />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<ListView onSelectBreed={setSelectedBreed} />} />
            <Route path="/product/:breedId" element={<ProductView onBack={() => setSelectedBreed(null)} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;