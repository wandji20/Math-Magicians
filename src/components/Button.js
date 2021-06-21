import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    buttonName, isOperator, isZero, clickHandler,
  } = props;
  // if (isOperator) {
  //   return (
  //     <button
  //       type="button"
  //       className="op-btn"
  //       onClick={clickHandler}
  //     >
  //       {buttonName}
  //     </button>
  //   );
  // }
  return (
    <button
      type="button"
      className={isOperator ? 'op-btn' : isZero ? 'btn zero' : 'btn'}
      onClick={clickHandler}
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  isZero: PropTypes.bool,
  isOperator: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  buttonName: '',
  isZero: false,
  isOperator: false,
  clickHandler: () => {},
};
