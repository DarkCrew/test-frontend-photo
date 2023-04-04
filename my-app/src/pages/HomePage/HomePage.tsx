import React, { ReactElement } from 'react';

import Main from 'components/Main/Main';
import SearchImage from 'components/SearchImage/SearchImage';

const HomePage = (): ReactElement => {
  return (
    <>
      <SearchImage />
      <Main />
    </>
  );
};

export default HomePage;
