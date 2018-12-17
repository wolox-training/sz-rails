import React, { Component, Fragment } from 'react';
import Topbar from './../../components/Topbar';
import styles from './styles.module.scss';

class About extends Component {
  render() {
    return (
      <Fragment>
        <Topbar />
        <h1 className={styles.main}>About Page</h1>
      </Fragment>
    );
  }
}

export default About;
