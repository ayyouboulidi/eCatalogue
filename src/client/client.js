import styles from '../css/style.css';
import menu from '../css/menu.css';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1 className={styles.test+" "+menu.menu}> Hello, world!</h1>,
  document.getElementById('root')
);
