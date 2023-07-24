import React from 'react';
import styles from './style.module.scss';

const Rate1000 = () => {
  return (
    <div className={styles.rateContainer}>
      <div className={styles.unlimited}>Безлимитный 1000</div>
      <div className={styles.price}>1000 руб/мин</div>
      <div className={styles.speed}>до 200Мб/сек</div>
      <div className={styles.traffic}>Объем включенного трафика неограничен</div>
    </div>
  );
}

export default Rate1000;