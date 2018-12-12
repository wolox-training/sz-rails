import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <Field name='email' component='input' type='text' />
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

Form = reduxForm({
  form: 'login'
})(Form);

export default Form;
