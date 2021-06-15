// /* eslint-disable */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
  }

  handleClick = (value) => {
    this.setState(() => ({ result: value }));
  }

  render() {
    const { result } = this.state;
    return (
      <div className="container">
        <Display result={result} />
        <ButtonPanel handleClick={(value) => { this.handleClick(value); }} />
      </div>
    );
  }
}
