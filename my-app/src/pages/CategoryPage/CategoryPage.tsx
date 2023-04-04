/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react';
import { PhotoItem } from 'core/api/Models';

import Header from 'components/Header/Header';
import Image from 'components/Image/Image';

import styles from './CategoryPage.module.scss';

const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';

const CategoryPage = (): ReactElement => {
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
    <>
      <div className={styles.header}>
        <Header search />
      </div>
      <div className={styles.category}>
        <div className="container">
          <div className={styles.container}>
            <p className={styles.title} onClick={getPhotos}>
              New Your Photos
            </p>
            <div className={styles.photos}>
              {photos.map((elem: PhotoItem) => {
                return <Image {...elem} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
