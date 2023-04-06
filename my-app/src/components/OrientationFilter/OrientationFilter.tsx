/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';

import orientation_land from '../../assets/images/orientation_land.png';
import orientation_port from '../../assets/images/orientation_port.png';
import orientation_standart from '../../assets/images/orientation_standart.png';

import styles from './OrientationFilter.module.scss';

type Props = {
  setOrientation: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const OrientationFilter = ({ setOrientation }: Props): ReactElement => {
  const [orientationImage, setOrientationImage] = React.useState(orientation_standart);

  const changeOrientationImage = (): void => {
    if (orientationImage === orientation_standart) {
      setOrientation('portrait');
      setOrientationImage(orientation_port);
    }
    if (orientationImage === orientation_port) {
      setOrientation('landscape');
      setOrientationImage(orientation_land);
    }
    if (orientationImage === orientation_land) {
      setOrientation('');
      setOrientationImage(orientation_standart);
    }
  };

  return (
    <li className={styles.orientation} onClick={changeOrientationImage}>
      <img src={orientationImage} alt="orientation" />
      Orientation
    </li>
  );
};

export default OrientationFilter;
