/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    value, isOperator, isZero, handleClick,
  } = props;
  if (isOperator) {
    return (
      <div className="op-btn"  onClick={handleClick}>
        {value}
      </div>
    );
  }
  return (
    <div
      className={isZero ? 'btn zero' : 'btn'}
      onClick={handleClick}
    >
      {value}
    </div>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  isZero: PropTypes.bool,
  isOperator: PropTypes.bool,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  value: '',
  isZero: false,
  isOperator: false,
  handleClick: () => {},
};
