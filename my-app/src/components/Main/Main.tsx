import React, { ReactElement } from 'react';

import plug2 from '../../assets/images/photo2.jpg';
import plug3 from '../../assets/images/photo3.jpg';
import plug4 from '../../assets/images/photo4.jpg';
import plug5 from '../../assets/images/photo5.jpg';
import plug6 from '../../assets/images/photo6.jpg';
import Image from '../Image/Image';

import styles from './Main.module.scss';

const Main = (): ReactElement => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.menu}>
            <p>Free Stock Photos</p>
            <select>
              <option>Trending</option>
              <option>New</option>
            </select>
          </div>
          <div className={styles.photos}>
            <Image />
            <img src={plug2} alt="plug" />
            <img src={plug3} alt="plug" />
            <img src={plug4} alt="plug" />
            <img src={plug5} alt="plug" />
            <img src={plug6} alt="plug" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
