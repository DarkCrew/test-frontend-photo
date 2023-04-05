import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from 'pages/CategoryPage/CategoryPage';
import HomePage from 'pages/HomePage/HomePage';

import { store } from './store/redux/store';

import './App.css';
import './styles/normalize.css';
import './styles/index.scss';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
