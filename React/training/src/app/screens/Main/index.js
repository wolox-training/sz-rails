import React, { Component } from 'react';
import Login from './../Login';
import Game from './../Game';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import { userSignedIn } from './../../../utils/mainUtils';

class Main extends Component {
  render() {
    if ( userSignedIn(this.props.token, 'token') ) {
      return (
        <div className={styles.game}>
          <Game />
        </div>
      );
    } else {
      return <Login />
    }
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Main);
