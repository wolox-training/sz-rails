import React, { Component, Fragment } from 'react';
import Login from './../Login';
import Game from './../Game';
import Topbar from './../../components/Topbar';
import { connect } from 'react-redux';
import styles from './styles.module.scss';

class Main extends Component {
  render() {
    if (this.props.token || localStorage.getItem("token")) {
      return (
        <Fragment>
          <Topbar />
          <div className={styles.game}>
            <Game />
          </div>
        </Fragment>
      );
    } else {
      return <Login />;
/*
      return (
        <Fragment>
          <Topbar />
          <Login />
        </Fragment>
      );
      */
    }
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Main);
