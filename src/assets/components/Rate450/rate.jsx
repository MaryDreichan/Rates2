import React from 'react';
import styles from './style.module.scss';

const Rate450 = () => {
  return (
    <div className={styles.rateContainer}>
      <div className={styles.unlimited}>Безлимитный 450</div>
      <div className={styles.price}>450 руб/мин</div>
      <div className={styles.speed}>до 50Мб/сек</div>
      <div className={styles.traffic}>Объем включенного трафика неограничен</div>
    </div>
  );
}

export default Rate450;