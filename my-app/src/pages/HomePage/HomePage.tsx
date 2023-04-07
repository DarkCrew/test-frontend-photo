import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import SearchImage from 'components/SearchImage/SearchImage';

import styles from './HomePage.module.scss';

const HomePage = (): ReactElement => {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = (): void => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SearchImage />
      {+scroll > 500 && (
        <div className={styles.header}>
          <Header search />
        </div>
      )}
      <Main />
    </>
  );
};

export default HomePage;
