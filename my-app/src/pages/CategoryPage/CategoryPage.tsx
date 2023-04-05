/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { PhotoItem } from 'core/api/Models';
import { RootState } from 'store/redux/store';

import Header from 'components/Header/Header';
import Image from 'components/Image/Image';

import orientation_land from '../../assets/images/orientation_land.png';
import orientation_port from '../../assets/images/orientation_port.png';
import orientation_standart from '../../assets/images/orientation_standart.png';
import sizeImage from '../../assets/images/photosize.png';

import styles from './CategoryPage.module.scss';

const CategoryPage = (): ReactElement => {
  const [orientation, setOrientation] = React.useState(orientation_standart);

  const photos = useSelector((state: RootState) => state.search.photos);
  const searchValRedux = useSelector((state: RootState) => state.search.value);

  const changeOrientation = (): void => {
    if (orientation === orientation_standart) {
      setOrientation(orientation_port);
    }
    if (orientation === orientation_port) {
      setOrientation(orientation_land);
    }
    if (orientation === orientation_land) {
      setOrientation(orientation_standart);
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem('likes-photo') === null) {
      localStorage.setItem('likes-photo', JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Header search />
      </div>
      <div className={styles.category}>
        <div className="container">
          <div className={styles.container}>
            <ul className={styles.menu}>
              <li className={styles.orientation} onClick={changeOrientation}>
                <img src={orientation} alt="orientation" />
                Orientation
              </li>
              <li>
                <img src={sizeImage} alt="size" />
                <select className={styles.size}>
                  <option>Large</option>
                  <option>Medium</option>
                  <option>Small</option>
                </select>
              </li>
            </ul>
            <p className={styles.title}>{searchValRedux} Photos</p>
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
