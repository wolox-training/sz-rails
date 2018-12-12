import React, { Component, Fragment } from 'react';
import Form from './components/Form';

class Login extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
  };

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.submit} />
      </Fragment>
    );
  }
}

export default Login;
