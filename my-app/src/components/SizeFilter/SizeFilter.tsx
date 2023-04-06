import React, { ReactElement } from 'react';

import sizeImage from '../../assets/images/photosize.png';

import styles from './SizeFilter.module.scss';

type Props = {
  setSizeImg: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const SizeFilter = ({ setSizeImg }: Props): ReactElement => {
  const changeSizeImage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSizeImg(event.target.value.toLowerCase());
  };

  return (
    <li>
      <img src={sizeImage} alt="size" />
      <select className={styles.size} onChange={changeSizeImage}>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
    </li>
  );
};

export default SizeFilter;
