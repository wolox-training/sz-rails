import React, { Component } from 'react';
import Login from './../Login';
import Game from './../Game';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      this.props.token ? <Game /> : <Login />
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Main);
