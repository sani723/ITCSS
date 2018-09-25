import React from 'react';
import styles from './Loading.module.scss';
import imgLoading from '../../../assets/images/loading.gif';

const Loading = () => (
    <div className={styles.loading}>
        <img src={imgLoading} alt="Loading content" />
    </div>
);


export default Loading;