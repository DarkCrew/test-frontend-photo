import React, { ReactElement } from 'react';

import styles from './Loader.module.scss';

const Loader = (): ReactElement => {
  return (
    <div className={styles.preloader}>
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default Loader;
