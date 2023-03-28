import React, { ReactElement } from 'react';

import searchBtn from '../../assets/images/search.png';

import styles from './SearchImage.module.scss';

const SearchImage = (): ReactElement => {
  return (
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
                <span>Trending: </span>easter, spring, office, sunset, mountain
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
  );
};

export default SearchImage;
