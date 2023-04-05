/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/Logo';
import { changeValue } from 'store/redux/slices/searchSlice';

import Search from 'components/Search/Search';

import styles from './Header.module.scss';

interface Props {
  search?: boolean;
}

const Header = ({ search }: Props): ReactElement => {
  const dispatch = useDispatch();

  const clearSearch = (): void => {
    dispatch(changeValue(''));
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.container}>
          <Link to="/" className={styles.logo} onClick={clearSearch}>
            <Logo />
          </Link>
          {search && <Search />}
          {!search && (
            <ul className={styles.menu}>
              <li>Explore</li>
              <li>License</li>
              <li>Upload</li>
              <li className={styles.btnJoin}>Join</li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
