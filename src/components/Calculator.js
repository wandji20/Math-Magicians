import React, { useEffect } from 'react';
import App from './App';

const Calculator = () => {
  useEffect(() => {
    document.title = 'Calculator';
  });

  const style = {
    display: 'flex',
    width: '90%',
    justifyContent: 'space-between',
    margin: 'auto',
    alignItems: 'center',
  };
  return (
    <div style={style}>
      <h2>Let’s do some math!</h2>
      <App />
    </div>
  );
};
export default Calculator;
