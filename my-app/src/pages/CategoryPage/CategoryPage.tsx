/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoItem } from 'core/api/Models';
import PhotosApi from 'core/api/PhotosApi';
import { getPhotos } from 'store/redux/slices/searchSlice';
import { RootState } from 'store/redux/store';

import Header from 'components/Header/Header';
import Image from 'components/Image/Image';
import NoResults from 'components/NoResults/NoResults';
import OrientationFilter from 'components/OrientationFilter/OrientationFilter';
import SizeFilter from 'components/SizeFilter/SizeFilter';

import styles from './CategoryPage.module.scss';

const CategoryPage = (): ReactElement => {
  const [orientation, setOrientation] = React.useState<string | undefined>(undefined);
  const [sizeImg, setSizeImg] = React.useState<string | undefined>(undefined);

  const photosRedux = useSelector((state: RootState) => state.search.photos);
  const searchValRedux = useSelector((state: RootState) => state.search.value);

  const dispatch = useDispatch();

  const getAxiosPhotos = async (orient: string, size: string): Promise<void> => {
    const { data } = await PhotosApi.getPhotos(searchValRedux, orient, size);
    const { photos } = data;
    dispatch(getPhotos(photos));
  };

  React.useEffect(() => {
    if (localStorage.getItem('likes-photo') === null) {
      localStorage.setItem('likes-photo', JSON.stringify([]));
    }
  }, []);

  React.useEffect(() => {
    if (searchValRedux !== '' && (orientation !== undefined || sizeImg !== undefined)) {
      getAxiosPhotos(String(orientation), String(sizeImg));
    }
  }, [orientation, sizeImg]);

  return (
    <>
      <div className={styles.header}>
        <Header search />
      </div>
      <div className={styles.category}>
        <div className="container">
          <div className={styles.container}>
            <ul className={styles.menu}>
              <OrientationFilter setOrientation={setOrientation} />
              <SizeFilter setSizeImg={setSizeImg} />
            </ul>
            {photosRedux.length !== 0 && <p className={styles.title}>{searchValRedux} Photos</p>}
            <div className={styles.photos}>
              {photosRedux.map((elem: PhotoItem) => {
                return <Image {...elem} />;
              })}
            </div>
            {photosRedux.length === 0 && <NoResults />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
