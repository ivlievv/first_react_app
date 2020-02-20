import React from 'react';
import styles from './styles.module.css';


function UserCard (props) {
  return (
    <div className={styles.container}>
      <img className={styles.imgContainer} src="https://i.pinimg.com/originals/d8/b5/ff/d8b5ff93c2e13641bf8093ebd750ca07.jpg" alt=""/>
      <div className={styles.descriptionContainer}>
          <h3 className={styles.name}>James Hetfield</h3>
          <p className={styles.position}>Rock Star</p>
          <p className={styles.description}>Expedita explicabo facere id iure iusto veritatis! Doloremque, itaque velit.</p>
      </div>
    </div>
  );
}

export default UserCard;