import React, { Component } from 'react';
import Form from './components/Form';
import { connect } from 'react-redux';
import authActions from '../../../redux/Auth/actions';

class Login extends Component {
  submit = values => this.props.userLogin(values);

  render() {
    return <Form onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  userLogin: i => dispatch(authActions.userLogin(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
