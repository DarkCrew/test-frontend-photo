import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { changeValue } from 'store/redux/slices/searchSlice';
import type { RootState } from 'store/redux/store';

import searchBtn from '../../assets/images/search.png';

import styles from './Search.module.scss';

const Search = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchValRedux = useSelector((state: RootState) => state.search.value);

  const [searchVal, setSearchVal] = React.useState(searchValRedux);

  const search = async (): Promise<void> => {
    dispatch(changeValue(String(searchVal)));
  };

  const searchByEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate('/category');
      search();
    }
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Search for free photos"
        className={styles.inputSearch}
        value={searchVal}
        onChange={(event): void => {
          setSearchVal(event.target.value);
        }}
        onKeyDown={searchByEnter}
      />
      <Link to="/category" className={styles.btnSearch} onClick={search}>
        <img src={searchBtn} alt="search" />
      </Link>
    </form>
  );
};

export default Search;
