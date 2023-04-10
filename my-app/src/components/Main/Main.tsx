/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoItem } from 'core/api/Models';
import PhotosApi from 'core/api/PhotosApi';
import { getPhotos } from 'store/redux/slices/searchSlice';
import { RootState } from 'store/redux/store';

import Loader from 'components/Loader/Loader';

import Image from '../Image/Image';

import styles from './Main.module.scss';

const Main = (): ReactElement => {
  const [fetching, setFetching] = React.useState(false);
  const [nextPage, setNextPage] = React.useState('');
  const [totalCount, setTotalCount] = React.useState(0);

  const dispatch = useDispatch();
  const photosRedux = useSelector((state: RootState) => state.search.photos);

  const scrollHandler = (): void => {
    const documentHeight = document.documentElement.scrollHeight;
    if (
      documentHeight - (document.documentElement.scrollTop + window.innerHeight) < 100 &&
      photosRedux.length < totalCount
    ) {
      setFetching(true);
    }
  };

  const getNextPage = async (): Promise<void> => {
    const { data } = await PhotosApi.getNextPagePhotos(nextPage);
    setTotalCount(data.total_results);
    if (data.next_page) {
      setNextPage(data.next_page);
    } else {
      setNextPage('none');
    }
    // eslint-disable-next-line prefer-destructuring
    const photos: [] = data.photos;
    dispatch(getPhotos([...photosRedux, ...photos]));
    setTimeout(() => {
      setFetching(false);
    }, 1000);
  };

  const getNewPhotos = async (): Promise<void> => {
    const { data } = await PhotosApi.getCuratedPhotos('curated');
    setTotalCount(data.total_results);
    if (data.next_page) {
      setNextPage(data.next_page);
    } else {
      setNextPage('none');
    }
    const { photos } = data;
    dispatch(getPhotos(photos));
    setTimeout(() => {
      setFetching(false);
    }, 1000);
  };

  React.useEffect(() => {
    if (fetching && nextPage !== 'none') {
      getNextPage();
    }
  }, [fetching]);

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [photosRedux, totalCount]);

  React.useEffect(() => {
    if (localStorage.getItem('likes-photo') === null) {
      localStorage.setItem('likes-photo', JSON.stringify([]));
    }
  }, []);

  React.useEffect(() => {
    getNewPhotos();
  }, []);

  return (
    <div className={styles.main}>
      {fetching && <Loader />}
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
            {photosRedux.map((elem: PhotoItem) => {
              return <Image {...elem} key={elem.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Main);
