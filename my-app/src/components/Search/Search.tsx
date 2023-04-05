import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from 'store/redux/slices/searchSlice';
import type { RootState } from 'store/redux/store';

import searchBtn from '../../assets/images/search.png';

import styles from './Search.module.scss';

const Search = (): ReactElement => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Search for free photos"
        className={styles.inputSearch}
        value={searchValue}
        onChange={(event): void => {
          dispatch(changeValue(String(event.target.value)));
        }}
      />
      <button type="submit" className={styles.btnSearch}>
        <img src={searchBtn} alt="search" />
      </button>
    </form>
  );
};

export default Search;
