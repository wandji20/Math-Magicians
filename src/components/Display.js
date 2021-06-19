import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
  }

  componentDidUpdate() {
    const { result } = this.props;
    const node = this.text.current;
    node.style.fontSize = '40px';
    const width = node.scrollWidth;
    const overflowWidth = width - 320;
    if (result) {
      const resultLength = result.length;
      if (overflowWidth > 0 && resultLength > 16) {
        node.style.fontSize = '30px';
      }
    }
  }

  render() {
    const { result } = this.props;
    return (
      <div className="display">
        <span ref={this.text} id="text">{result}</span>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: null,
};
