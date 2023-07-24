import React from 'react';
import styles from './style.module.scss';

const Rate550 = () => {
    const isUnlimited550 = true;

    return (
        <div className={styles.rateContainer}>
            <div className={`${styles.rateBox} ${isUnlimited550 ? styles.highlighted : ''}`}>
                <div className={styles.unlimited}>Безлимитный 550</div>
                <div className={styles.price}>550 руб/мин</div>
                <div className={styles.speed}>до 100Мб/сек</div>
                <div className={styles.traffic}>Объем включенного трафика неограничен</div>
            </div>
        </div>
    );
}

export default Rate550;