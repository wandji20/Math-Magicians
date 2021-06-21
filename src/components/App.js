import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const dataObject = { total, next, operation };
    if (total === 'error') {
      setTotal(null);
      setNext(null);
      setOperation(null);
      return;
    }
    const response = calculate(dataObject, buttonName);
    setTotal(response.total);
    setNext(response.next);
    setOperation(response.operation);
  };

  return (
    <div className="container">
      <Display result={total} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
