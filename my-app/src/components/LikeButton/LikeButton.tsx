/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';

import likeImage from '../../assets/images/heart.png';

import styles from './LikeButton.module.scss';

const LikeButton = (props: { id: number }): ReactElement => {
  const { id } = props;
  const [likeActivator, setLikeActivator] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('likes-photo') !== null) {
      const arrayLikes: number[] = JSON.parse(localStorage.getItem('likes-photo') as string);
      if (arrayLikes.includes(id)) {
        setLikeActivator(true);
      }
    }
  }, []);

  const setLike = (): void => {
    if (localStorage.getItem('likes-photo') !== null) {
      const arrayLikes: number[] = JSON.parse(localStorage.getItem('likes-photo') as string);
      if (arrayLikes.includes(id)) {
        setLikeActivator(false);

        const newArrayLikes = arrayLikes.filter((n) => n !== id);
        localStorage.setItem('likes-photo', JSON.stringify(newArrayLikes));
      } else {
        setLikeActivator(true);

        const newArrayLikes = [...arrayLikes, id];
        localStorage.setItem('likes-photo', JSON.stringify(newArrayLikes));
      }
    }
  };

  return (
    <div className={likeActivator === true ? styles.likeActive : styles.like} onClick={setLike}>
      <img className={styles.imageLike} src={likeImage} alt="like" />
    </div>
  );
};

export default LikeButton;
