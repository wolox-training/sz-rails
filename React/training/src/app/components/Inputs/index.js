import React from 'react';
import cx from 'classnames';
import './styles.scss';

const getValidityClassName = meta => {
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return 'invalid';
  }
  if (meta.touched && meta.valid) {
    return 'valid';
  }
};

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div className={ cx(
        'input',
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} />
      { meta.error && meta.touched && !meta.active && (
        <div className="error">
          {meta.error}
        </div>
      )}
    </div>
  );
}
