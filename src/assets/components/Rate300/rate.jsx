import React from 'react';
import styles from './style.module.scss';

const Rate300 = () => {
  return (
    <div className={styles.rateContainer}>
      <div className={styles.unlimited}>Безлимитный 300</div>
      <div className={styles.price}>300 руб/мин</div>
      <div className={styles.speed}>до 10Мб/сек</div>
      <div className={styles.traffic}>Объем включенного трафика неограничен</div>
    </div>
  );
}

export default Rate300;