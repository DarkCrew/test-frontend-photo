/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';
import { SrcPhotoItem } from 'core/api/Models';

import downloadBtn from '../../assets/images/download.png';

import styles from './DownloadButton.module.scss';

const DownloadButton = (props: { src: SrcPhotoItem }): ReactElement => {
  const { src } = props;

  const saveImage = (blob: Blob): void => {
    const linkImage = document.createElement('a');
    linkImage.setAttribute('href', URL.createObjectURL(blob));
    linkImage.setAttribute('download', Date.now().toString());
    linkImage.click();
  };

  const downloadImage = (): void => {
    alert('Photo loading in progress');
    fetch(src.original)
      .then((resp) => resp.blob())
      .then((blob) => saveImage(blob));
  };

  return (
    <div className={styles.download} onClick={downloadImage}>
      <img className={styles.imageDownload} src={downloadBtn} alt="download" />
    </div>
  );
};

export default DownloadButton;
