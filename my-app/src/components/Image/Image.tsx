/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';
import { PhotoItem } from 'core/api/Models';

import downloadBtn from '../../assets/images/download.png';
import likeImage from '../../assets/images/heart.png';

import styles from './Image.module.scss';

const Image = ({ photographer, src, id }: PhotoItem): ReactElement => {
  const [visible, setVisible] = React.useState(false);
  const [likeActivator, setLikeActivator] = React.useState(false);

  const changeVisible = (): void => {
    setVisible(!visible);
  };

  React.useEffect(() => {
    if (localStorage.getItem('likes-photo') !== null) {
      const arrayLikes: number[] = JSON.parse(localStorage.getItem('likes-photo') as string);
      if (arrayLikes.includes(id)) {
        setLikeActivator(true);
      }
    }
  }, []);

  const setLike = (): void => {
    if (localStorage.getItem('likes-photo') !== null) {
      const arrayLikes: number[] = JSON.parse(localStorage.getItem('likes-photo') as string);
      if (arrayLikes.includes(id)) {
        setLikeActivator(false);

        const newArrayLikes = arrayLikes.filter((n) => n !== id);
        localStorage.setItem('likes-photo', JSON.stringify(newArrayLikes));
      } else {
        setLikeActivator(true);

        const newArrayLikes = [...arrayLikes, id];
        localStorage.setItem('likes-photo', JSON.stringify(newArrayLikes));
      }
    }
  };

  const saveImage = (blob: any): void => {
    const linkImage = document.createElement('a');
    linkImage.setAttribute('href', URL.createObjectURL(blob));
    linkImage.setAttribute('download', Date.now().toString());
    linkImage.click();
  };

  const downloadImage = () => {
    alert('Photo loading in progress');
    fetch(src.original)
      .then((resp) => resp.blob())
      .then((blob) => saveImage(blob));
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
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="creator" />
                <p>{photographer}</p>
              </a>
              <div className={styles.download} onClick={downloadImage}>
                <img src={downloadBtn} alt="download" />
              </div>
            </div>
          </div>
        </div>
      )}
      <img src={src.portrait} alt="plug" />
    </div>
  );
};

export default Image;
