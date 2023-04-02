/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';

import creatorImage from '../../assets/images/creator.jpeg';
import downloadBtn from '../../assets/images/download.png';
import likeImage from '../../assets/images/heart.png';
import plug1 from '../../assets/images/photo1.jpg';

import styles from './Image.module.scss';

const Image = (): ReactElement => {
  const [visible, setVisible] = React.useState(false);
  const [likeActivator, setLikeActivator] = React.useState(false);

  const changeVisible = (): void => {
    setVisible(!visible);
  };

  const setLike = (): void => {
    setLikeActivator(!likeActivator);
  };

  const downloadImage = (): void => {
    alert('Photo loading in progress');
  };

  return (
    <div className={styles.image} onMouseLeave={changeVisible} onMouseEnter={changeVisible}>
      {visible && (
        <div className={styles.blackout}>
          <div className={styles.menu}>
            <div className={styles.upperContainer}>
              <div
                className={likeActivator === true ? styles.likeActive : styles.like}
                onClick={setLike}
              >
                <img src={likeImage} alt="like" />
              </div>
            </div>
            <div className={styles.lowerContainer}>
              <a
                href="https://www.pexels.com/@yunustug/"
                target="_blank"
                className={styles.creator}
                rel="noreferrer"
              >
                <img src={creatorImage} alt="creator" />
                <p>Yunus Tuğ</p>
              </a>
              <div className={styles.download} onClick={downloadImage}>
                <img src={downloadBtn} alt="download" />
              </div>
            </div>
          </div>
        </div>
      )}
      <img src={plug1} alt="plug" />
    </div>
  );
};

export default Image;
