import React, { ReactElement } from 'react';
import { PhotoItem } from 'core/api/Models';

import DownloadButton from 'components/DownloadButton/DownloadButton';
import LikeButton from 'components/LikeButton/LikeButton';

import styles from './Image.module.scss';

const Image = ({ photographer, src, id }: PhotoItem): ReactElement => {
  const [visible, setVisible] = React.useState(false);

  const changeVisible = (): void => {
    setVisible(!visible);
  };

  return (
    <div className={styles.image} onMouseLeave={changeVisible} onMouseEnter={changeVisible}>
      {visible && (
        <div className={styles.blackout}>
          <div className={styles.menu}>
            <div className={styles.upperContainer}>
              <LikeButton id={id} />
            </div>
            <div className={styles.lowerContainer}>
              <a
                href="https://www.pexels.com/@yunustug/"
                target="_blank"
                className={styles.creator}
                rel="noreferrer"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="creator" />
                <p>{photographer}</p>
              </a>
              <DownloadButton src={src} />
            </div>
          </div>
        </div>
      )}
      <img src={src.portrait} alt="plug" />
    </div>
  );
};

export default Image;
