import Big from 'big.js';

Big.strict = true;

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);
  if (secondNumber.toString() === '0') return 'error';
  let value;
  switch (operation) {
    case 'x':
      value = firstNumber.times(secondNumber);
      break;
    case '-':
      value = firstNumber.minus(secondNumber);
      break;
    case '÷':
      value = firstNumber.div(secondNumber);
      break;
    case '+':
      value = firstNumber.plus(secondNumber);
      break;
    default:
      value = '';
  }
  const result = (value.toString().length < 22) ? value : value.toExponential(17);

  return result;
};
export default operate;
