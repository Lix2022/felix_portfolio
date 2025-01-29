import React from 'react';
//import styles from './loader.module.css'; // Import the CSS module

const LoadingOverlay = () => {
  return (
    <div className={'overlay'}>
      <div className={'lds-ellipsis'}>
        <div className={'div'}></div>
        <div className={'div'}></div>
        <div className={'div'}></div>
        <div className={'div'}></div>
      </div>
    </div>
  );
};

export default LoadingOverlay;

