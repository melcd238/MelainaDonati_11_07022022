import React from 'react';
import classes from '../Loader/Loader.module.css';

const Loader = () => {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className={classes.load}
    >
      <img alt="loading gif" src="https://i.redd.it/ounq1mw5kdxy.gif" />
    </div>
  );
};
export default Loader;