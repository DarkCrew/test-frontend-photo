import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import PhotosApi from 'core/api/PhotosApi';
import { getPhotos } from 'store/redux/slices/searchSlice';

import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import SearchImage from 'components/SearchImage/SearchImage';

import styles from './HomePage.module.scss';

const HomePage = (): ReactElement => {
  const [scroll, setScroll] = React.useState(0);
  const dispatch = useDispatch();

  const handleScroll = (): void => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNewPhotos = async (): Promise<void> => {
    const { data } = await PhotosApi.getCuratedPhotos('curated');
    const { photos } = data;
    dispatch(getPhotos(photos));
  };

  React.useEffect(() => {
    getNewPhotos();
  }, []);

  return (
    <>
      <SearchImage />
      {+scroll > 500 && (
        <div className={styles.header}>
          <Header search />
        </div>
      )}
      <Main />
    </>
  );
};

export default HomePage;
