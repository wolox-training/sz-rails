import React, { Component, Fragment } from 'react';
import Topbar from './../../components/Topbar';
import styles from './styles.module.scss';

class About extends Component {
  render() {
    return (
      <Fragment>
        <Topbar />
        <div className={styles.container}>
          <h1 className={styles.title}>About Page</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </Fragment>
    );
  }
}

export default About;
