import React, { Component, Fragment } from 'react';
import Form from './components/Form';
import { connect } from 'react-redux';
import authActions from '../../../redux/Auth/actions';

class Login extends Component {
  submit = values => {
    this.props.userLogin(values);
  };

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.submit} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  userLogin: i => dispatch(authActions.userLogin(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
