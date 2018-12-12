export const validate = values => {
  const errors = {};
  const emailRegularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    errors.email = 'Email is required.';
  } else if ( !values.email.match(emailRegularExpression) ){
    errors.email = 'Email is not valid.';
  }

  if (!values.password) {
    errors.password = 'Password is required.';
  } else if (values.password.length < 8) {
    errors.password = 'Password is too short.';
  }

  return errors;
}
