import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from 'pages/CategoryPage/CategoryPage';
import HomePage from 'pages/HomePage/HomePage';

import Header from 'components/Header/Header';

import './App.css';
import './styles/normalize.css';
import './styles/index.scss';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default App;
