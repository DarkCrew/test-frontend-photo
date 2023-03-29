import React, { ReactElement } from 'react';

import plug1 from '../../assets/images/photo1.jpg';

import styles from './Image.module.scss';

const Image = (): ReactElement => {
  return (
    <div className={styles.image}>
      <img src={plug1} alt="plug" />
    </div>
  );
};

export default Image;
