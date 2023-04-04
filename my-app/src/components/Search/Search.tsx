import React, { ReactElement } from 'react';

import searchBtn from '../../assets/images/search.png';

import styles from './Search.module.scss';

const Search = (): ReactElement => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Search for free photos" className={styles.inputSearch} />
      <button type="submit" className={styles.btnSearch}>
        <img src={searchBtn} alt="search" />
      </button>
    </form>
  );
};

export default Search;
