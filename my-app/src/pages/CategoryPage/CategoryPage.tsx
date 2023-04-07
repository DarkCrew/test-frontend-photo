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
import Loader from 'components/Loader/Loader';
import NoResults from 'components/NoResults/NoResults';
import OrientationFilter from 'components/OrientationFilter/OrientationFilter';
import SizeFilter from 'components/SizeFilter/SizeFilter';

import styles from './CategoryPage.module.scss';

const CategoryPage = (): ReactElement => {
  const [orientation, setOrientation] = React.useState<string | undefined>(undefined);
  const [sizeImg, setSizeImg] = React.useState<string | undefined>(undefined);
  const [fetching, setFetching] = React.useState(false);
  const [nextPage, setNextPage] = React.useState('');
  const [totalCount, setTotalCount] = React.useState(0);

  const photosRedux = useSelector((state: RootState) => state.search.photos);
  const searchValRedux = useSelector((state: RootState) => state.search.value);

  const dispatch = useDispatch();

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

  const getNewPhotos = async (orient?: string, size?: string): Promise<void> => {
    const { data } = await PhotosApi.getPhotos(searchValRedux, orient, size);
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
    if (localStorage.getItem('likes-photo') === null) {
      localStorage.setItem('likes-photo', JSON.stringify([]));
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [photosRedux, totalCount]);

  React.useEffect(() => {
    if (searchValRedux !== '' && (orientation !== undefined || sizeImg !== undefined)) {
      getNewPhotos(String(orientation), String(sizeImg));
    }
  }, [orientation, sizeImg]);

  React.useEffect(() => {
    if (searchValRedux !== '') {
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        getNewPhotos(String(orientation), String(sizeImg));
      }, 1000);
    }
  }, [searchValRedux]);

  return (
    <>
      {fetching && <Loader />}
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
