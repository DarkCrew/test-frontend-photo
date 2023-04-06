import React, { ReactElement } from 'react';

import noResultsImg from '../../assets/images/no_results.png';

import styles from './NoResults.module.scss';

const NoResults = (): ReactElement => {
  return (
    <div className={styles.noResults}>
      <img src={noResultsImg} alt="no-results" />
      <div className={styles.info}>
        <p className={styles.title}>Result not found</p>
        <p className={styles.subtitle}>
          Whoops ... This photo request is not yet available on our platform
        </p>
      </div>
    </div>
  );
};

export default NoResults;
