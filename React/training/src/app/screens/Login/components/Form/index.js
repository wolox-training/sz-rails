import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput } from './../../../../components/Inputs';
import { validate } from '../../../../../utils/LoginFormValidation';

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name='email' component={customInput} type='email' label='Email' />
        <Field name='password' component={customInput} type='password' label='Password' />
        <button type='submit'>Login</button>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'login',
  validate
})(Form);

export default Form;
