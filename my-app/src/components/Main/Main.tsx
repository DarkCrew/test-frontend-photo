/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react';
import { PhotoItem } from 'core/api/Models';

import Image from '../Image/Image';

import styles from './Main.module.scss';

const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';

const Main = (): ReactElement => {
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem('likes-photo') === null) {
      localStorage.setItem('likes-photo', JSON.stringify([]));
    }
  }, []);

  const getPhotos = async () => {
    const data = await fetch('https://api.pexels.com/v1/search?query=bmw', {
      headers: {
        Authorization: API_KEY,
      },
    });
    const { photos } = await data.json();
    setPhotos(photos);
  };

  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.menu}>
            <p onClick={getPhotos}>Free Stock Photos</p>
            <select>
              <option>Trending</option>
              <option>New</option>
            </select>
          </div>
          <div className={styles.photos}>
            {photos.map((elem: PhotoItem) => {
              return <Image {...elem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Main);
