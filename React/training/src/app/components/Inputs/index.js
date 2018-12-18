import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { getValidityClassName } from './../../../utils/inputsValidation';

function CustomInput(props) {
  const { label, input, type, meta } = props;

  return (
    <div className={ cx(
        styles.input,
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} className={styles.box}/>
      { meta.error && meta.touched && !meta.active && (
        <div className={styles.error}>
          {meta.error}
        </div>
      )}
    </div>
  );
}

export default CustomInput;
