import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { buttonName, isOperator, isZero } = props;
  if (isOperator) {
    return (
      <div className="op-btn">
        {buttonName}
      </div>
    );
  }
  return (
    <div className={isZero ? 'btn zero' : 'btn'}>
      {buttonName}
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  isZero: PropTypes.bool,
  isOperator: PropTypes.bool,
};

Button.defaultProps = {
  buttonName: '',
  isZero: false,
  isOperator: false,
};
