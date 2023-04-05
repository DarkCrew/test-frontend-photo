/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PhotosApi from 'core/api/PhotosApi';
import KEY_WORDS from 'store/KeyWords';
import { changeValue, getPhotos } from 'store/redux/slices/searchSlice';
import getRandomNumbers from 'utils/GetRandomNumbers';

import Header from 'components/Header/Header';
import Search from 'components/Search/Search';

import styles from './SearchImage.module.scss';

const SearchImage = (): ReactElement => {
  const randomNumbersArr: number[] = getRandomNumbers(7, 1, 40);
  const dispatch = useDispatch();

  const getAxiosPhotos = async (searchVal: string) => {
    dispatch(changeValue(String(searchVal)));

    const { data } = await PhotosApi.getPhotos(String(searchVal));
    const { photos } = data;
    dispatch(getPhotos(photos));
  };

  return (
    <>
      <Header />
      <div className={styles.searchImage}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.main}>
              <h2 className={styles.title}>
                The best free stock photos, royalty free images & videos shared by creators.
              </h2>
              <Search />
              <div className={styles.examples}>
                <p>
                  <span>Trending: </span> &nbsp;
                  {randomNumbersArr.map((elem, index) => {
                    return index !== randomNumbersArr.length - 1 ? (
                      <Link
                        to="/category"
                        onClick={() => {
                          getAxiosPhotos(String(KEY_WORDS[elem]));
                        }}
                      >{`${KEY_WORDS[elem]},`}</Link>
                    ) : (
                      <Link
                        to="/category"
                        onClick={() => {
                          getAxiosPhotos(String(KEY_WORDS[elem]));
                        }}
                      >{`${KEY_WORDS[elem]}`}</Link>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
          <p className={styles.author}>
            <span>Photo by </span>Helena Jankovičová Kováčová
          </p>
        </div>
        <div className={styles.background} />
      </div>
    </>
  );
};

export default React.memo(SearchImage);
