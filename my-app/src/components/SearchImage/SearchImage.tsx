/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PhotoItem } from 'core/api/Models';
import KEY_WORDS from 'store/KeyWords';
import { changeValue } from 'store/redux/slices/searchSlice';
import { RootState } from 'store/redux/store';
import getRandomNumbers from 'utils/GetRandomNumbers';

import Header from 'components/Header/Header';
import Search from 'components/Search/Search';

import styles from './SearchImage.module.scss';

const SearchImage = (): ReactElement => {
  const randomNumbersArr: number[] = getRandomNumbers(7, 1, 40);
  const getRandomNumber: number = +getRandomNumbers(1, 1, 15);
  const photosRedux: PhotoItem[] = useSelector((state: RootState) => state.search.photos);
  const dispatch = useDispatch();

  const search = async (searchVal: string) => {
    dispatch(changeValue(String(searchVal)));
  };

  let randomPhotoSrc = '';
  let randomPhotoPhotographer = '';
  let randomPhotoPhotographerUrl = '';

  if (photosRedux.length > 0 && photosRedux[getRandomNumber] !== undefined) {
    const randomPhoto: PhotoItem = photosRedux[getRandomNumber] as PhotoItem;
    randomPhotoSrc = randomPhoto.src.original;
    randomPhotoPhotographer = randomPhoto.photographer;
    randomPhotoPhotographerUrl = randomPhoto.photographer_url;
  }

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
                          search(String(KEY_WORDS[elem]));
                        }}
                      >{`${KEY_WORDS[elem]},`}</Link>
                    ) : (
                      <Link
                        to="/category"
                        onClick={() => {
                          search(String(KEY_WORDS[elem]));
                        }}
                      >{`${KEY_WORDS[elem]}`}</Link>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
          <a
            href={randomPhotoPhotographerUrl}
            target="_blank"
            className={styles.author}
            rel="noreferrer"
          >
            <span>Photo by </span>
            {randomPhotoPhotographer}
          </a>
        </div>
        <div className={styles.background} />
        <img className={styles.searchImageBackGround} src={randomPhotoSrc} alt="" />
      </div>
    </>
  );
};

export default React.memo(SearchImage);
