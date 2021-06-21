import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    wide, color, buttonName, clickHandler,
  } = props;

  return (
    <button
      style={{ width: wide, backgroundColor: color }}
      onClick={clickHandler}
      type="button"
      className="btn"
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  wide: PropTypes.string,
  color: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  wide: '25%',
  color: '#ddd',
  buttonName: '',
  clickHandler: () => {},
};
