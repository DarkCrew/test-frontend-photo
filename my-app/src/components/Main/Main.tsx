/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { PhotoItem } from 'core/api/Models';
import PhotosApi from 'core/api/PhotosApi';
import { RootState } from 'store/redux/store';

import Loader from 'components/Loader/Loader';

import Image from '../Image/Image';

import styles from './Main.module.scss';

const Main = (): ReactElement => {
  const [photos, setPhotos] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);
  const photosRedux = useSelector((state: RootState) => state.search.photos);

  React.useEffect(() => {
    if (localStorage.getItem('likes-photo') === null) {
      localStorage.setItem('likes-photo', JSON.stringify([]));
    }
  }, []);

  const getAxiosPhotos = async () => {
    setFetching(true);
    const { data } = await PhotosApi.getPhotos('bmw');
    const { photos } = data;
    setPhotos(photos);
    setTimeout(() => {
      setFetching(false);
    }, 1000);
  };

  return (
    <div className={styles.main}>
      {fetching && <Loader />}
      <div className="container">
        <div className={styles.container}>
          <div className={styles.menu}>
            <p onClick={getAxiosPhotos}>Free Stock Photos</p>
            <select>
              <option>Trending</option>
              <option>New</option>
            </select>
          </div>
          <div className={styles.photos}>
            {photosRedux.map((elem: PhotoItem) => {
              return <Image {...elem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Main);
