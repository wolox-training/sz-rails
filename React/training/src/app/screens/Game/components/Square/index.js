import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

function Square(props) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
