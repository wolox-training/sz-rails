import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput } from './../../../../components/Inputs';

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name='email' component={customInput} type='text' label='Email' />
        <Field name='password' component={customInput} type='text' label='Password' />
        <button type='submit'>Iniciar Sesión</button>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'login'
})(Form);

export default Form;
