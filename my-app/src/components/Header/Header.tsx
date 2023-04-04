import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/Logo';

import styles from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.container}>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
          <ul className={styles.menu}>
            <li>Explore</li>
            <li>License</li>
            <li>Upload</li>
            <li className={styles.btnJoin}>Join</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
