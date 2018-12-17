import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from './../../../../components/Inputs';
import { required, minLength, validEmail } from '../../../../../utils/LoginFormValidation';
import styles from './styles.module.scss';

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={styles.login}>
        <Field name='email' component={CustomInput} type='email' label='Email' validate={[required, validEmail]} />
        <Field name='password' component={CustomInput} type='password' label='Password' validate={[required, minLength]} />
        <button type='submit' className={`${styles.button} ${styles.blue}`}>Login</button>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'login'
})(Form);

export default Form;
