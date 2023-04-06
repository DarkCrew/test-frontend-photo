import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = (): ReactElement => {
  return (
    <>
      <div className={styles.header}>
        <Header search clear />
      </div>
      <div className={styles.notFound}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.info}>
              <p className={styles.title}>404</p>
              <p className={styles.subtitle}>
                The page you are looking for may have been moved,
                <br />
                deleted or possibly never existed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
