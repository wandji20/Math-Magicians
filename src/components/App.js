import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const dataObject = { ...this.state };
    const { next, operation, total } = calculate(dataObject, buttonName);
    this.setState(() => (
      {
        next,
        total,
        operation,
      }
    ));
  }

  render() {
    const { total } = this.state;
    return (
      <div className="container">
        <Display result={total} />
        <ButtonPanel handleClick={(buttonName) => { this.handleClick(buttonName); }} />
      </div>
    );
  }
}
