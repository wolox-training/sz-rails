const emailRegularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const required = value =>
  value ? undefined : 'Value is required.';

export const minLength = value =>
  value.length < 8
    ? 'Value must be at least 8 characters.'
    : undefined;

export const validEmail = value =>
  value.match(emailRegularExpression) ? undefined : 'Wrong email.';
