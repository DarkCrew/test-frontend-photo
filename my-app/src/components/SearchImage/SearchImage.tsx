import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import KEY_WORDS from 'store/KeyWords';

import Header from 'components/Header/Header';

import searchBtn from '../../assets/images/search.png';

import styles from './SearchImage.module.scss';

const SearchImage = (): ReactElement => {
  const getRandomNumbers = (): number[] => {
    const randomNumbersArray: number[] = [];
    for (let i = 0; i < 7; i += 1) {
      const newNumber = Math.floor(1 + Math.random() * 40);
      if (randomNumbersArray.includes(newNumber)) {
        i -= 1;
      } else {
        randomNumbersArray.push(newNumber);
      }
    }
    return randomNumbersArray;
  };

  const randomNumbersArr: number[] = getRandomNumbers();

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
              <form className={styles.form}>
                <input
                  type="text"
                  placeholder="Search for free photos"
                  className={styles.inputSearch}
                />
                <button type="submit" className={styles.btnSearch}>
                  <img src={searchBtn} alt="search" />
                </button>
              </form>
              <div className={styles.examples}>
                <p>
                  <span>Trending: </span> &nbsp;
                  {randomNumbersArr.map((elem, index) => {
                    return index !== randomNumbersArr.length - 1 ? (
                      <Link to="/category">{`${KEY_WORDS[elem]},`}</Link>
                    ) : (
                      <Link to="/category">{`${KEY_WORDS[elem]}`}</Link>
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

export default SearchImage;
