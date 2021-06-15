import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { value, isOperator, isZero } = props;
  if (isOperator) {
    return (
      <div className="op-btn">
        {value}
      </div>
    );
  }
  return (
    <div className={isZero ? 'btn zero' : 'btn'}>
      {value}
    </div>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  isZero: PropTypes.bool,
  isOperator: PropTypes.bool,
};
Button.defaultProps = {
  value: '',
  isZero: false,
  isOperator: false,
};
