// /* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    buttonName, isOperator, isZero, handleClick,
  } = props;
  if (isOperator) {
    return (
      <button
        type="button"
        className="op-btn"
        onClick={handleClick}
      >
        {buttonName}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={isZero ? 'btn zero' : 'btn'}
      onClick={handleClick}
    >
      {buttonName}
    </button>
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
