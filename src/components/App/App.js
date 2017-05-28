import React from 'react';
import PropTypes from 'prop-types';

import styles from './App.scss';

/**
 * App - Root app component
 * @param props
 * @returns {Component}
 * @author Miroshnichenko Artyom <a.miroshnichenko@nullgr.com>
 */
const App = (props) => {
  return (
    <div className={styles.app}>
      Here app component
    </div>
  );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
