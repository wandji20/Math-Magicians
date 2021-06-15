/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    buttonName, isOperator, isZero, handleClick,
  } = props;
  if (isOperator) {
    return (
      <div className="op-btn"  onClick={handleClick}>
        {buttonName}
      </div>
    );
  }
  return (
    <div
      className={isZero ? 'btn zero' : 'btn'}
      onClick={handleClick}
    >
      {buttonName}
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  isZero: PropTypes.bool,
  isOperator: PropTypes.bool,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  buttonName: '',
  isZero: false,
  isOperator: false,
  handleClick: () => {},
};
