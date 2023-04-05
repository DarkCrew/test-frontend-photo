/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PhotosApi from 'core/api/PhotosApi';
import { changeValue, getPhotos } from 'store/redux/slices/searchSlice';
import type { RootState } from 'store/redux/store';

import searchBtn from '../../assets/images/search.png';

import styles from './Search.module.scss';

const Search = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchValRedux = useSelector((state: RootState) => state.search.value);

  const [searchVal, setSearchVal] = React.useState(searchValRedux);

  const getAxiosPhotos = async () => {
    dispatch(changeValue(String(searchVal)));

    const { data } = await PhotosApi.getPhotos(String(searchVal));
    const { photos } = data;
    dispatch(getPhotos(photos));
  };

  const getAxiosPhotosByEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate('/category');
      getAxiosPhotos();
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
        onKeyDown={getAxiosPhotosByEnter}
      />
      <Link to="/category" className={styles.btnSearch} onClick={getAxiosPhotos}>
        <img src={searchBtn} alt="search" />
      </Link>
    </form>
  );
};

export default Search;
