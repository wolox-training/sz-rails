import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {

  render() {
    return (
      <form>
        <div>
          <label>Email</label>
          <Field name='email' component='input' type='email' />
        </div>
        <div>
          <label>Password</label>
          <Field name='password' component='input' type='text' />
        </div>
        <button type='submit'>Iniciar Sesión</button>
      </form>
    );
  }
}

export default LoginForm;
