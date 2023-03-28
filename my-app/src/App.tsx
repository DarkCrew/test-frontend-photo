import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';
import SearchImage from 'components/SearchImage/SearchImage';

import './App.css';
import './styles/normalize.css';
import './styles/index.scss';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Header />
      <SearchImage />
    </div>
  );
};

export default App;
