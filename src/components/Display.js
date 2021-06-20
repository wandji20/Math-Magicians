import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  const text = useRef(null);
  useEffect(() => {
    const node = text.current;
    node.style.fontSize = '40px';
    const width = node.scrollWidth;
    const overflowWidth = width - 320;
    if (result) {
      const resultLength = result.length;
      if (overflowWidth > 0 && resultLength > 16) {
        node.style.fontSize = '30px';
      }
    }
  }, [result]);

  return (
    <div className="display">
      <span ref={text} id="text">{result}</span>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: null,
};

export default Display;
